# Script 02 — Stripe Webhooks That Survive Production

**Format:** Tutorial. Screen-share dominant. Face camera in lower-right corner overlay.
**Target length:** 10–15 minutes
**Estimated production time (Bill solo):** 5–7 hours (longest in the batch — code on screen requires clean takes)
**Primary keyword:** stripe webhooks production
**Secondary keywords:** stripe webhook idempotency, stripe webhook signature verification, stripe webhook retry handling

---

## [00:00 — Cold open, 0:00 to 0:45]

[Face camera. Then cut to terminal with `stripe listen --forward-to localhost:3000/api/stripe/webhook` running.]

Roughly 70% of the Stripe integrations I get called in to fix have a webhook bug. Not a missing webhook — a webhook that works in development, works for the first six months in production, and then quietly drops a payment event when something weird happens at 2 a.m. on a Saturday.

This video is the four things you have to get right for Stripe webhooks to survive production. Signature verification, idempotency, retries, and the dead-letter pattern. We are going to look at real code, in a real Next.js App Router route handler, and I am going to show you the exact pattern I ship for every client.

If you do not work with Stripe, this video is going to be boring. If you do, this is the difference between getting paged on a holiday and not.

## [00:45 — Why webhooks are uniquely terrible, 0:45 to 2:00]

[Screen-share: Stripe docs page on webhooks, scrolled to "delivery."]

Webhooks are hard for one reason: they are at-least-once delivery. Stripe will retry your webhook handler if you do not return a 2xx response, and they will retry it for up to three days. Three days. Most webhook handlers I see are written like HTTP requests — fire once, succeed, move on. That is not the model.

If your handler does an irreversible operation — debit a customer, ship a product, send an email — and Stripe retries the event because your response took too long or your server hiccupped, you do that operation twice. The customer gets billed twice. The product ships twice. The email goes out twice. And the email part is the one you will hear about, because customers complain about emails, not about double-charges they have not noticed yet.

So the four rules. Write them down.

[Slide overlay:]
1. Verify the signature on every event.
2. Make every handler idempotent.
3. Acknowledge fast, process async.
4. Have a dead-letter queue for failures.

## [02:00 — Rule one: signature verification, 2:00 to 4:00]

[Screen-share: editor open to `/api/stripe/webhook/route.ts`.]

Signature verification is the easy one and yet — I want to say I have seen six production codebases skip it.

Stripe sends a `stripe-signature` header on every webhook. You verify it with the webhook secret that Stripe generated when you registered the endpoint. If the verification fails, the request is either malformed or — more likely — a hostile actor trying to fake an event to trigger your handler. You return 400 and stop.

Here is the verification code:

```ts
import { headers } from "next/headers";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const body = await req.text();
  const sig = (await headers()).get("stripe-signature");

  if (!sig) {
    return new Response("Missing signature", { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (err) {
    return new Response(`Webhook error: ${(err as Error).message}`, { status: 400 });
  }

  // ... handler logic here ...
}
```

Two gotchas in this code.

**Gotcha one.** You have to read the request body as raw text, not as JSON. If you parse it as JSON first and then re-serialize, the byte representation changes and the signature fails. In Next.js App Router this is easy — just use `req.text()`. In Pages Router with `bodyParser` on, it bites people constantly.

**Gotcha two.** Set `STRIPE_WEBHOOK_SECRET` in your environment, and rotate it any time you suspect a leak. If your repo ever accidentally commits the secret, rotate immediately. The signature is the only thing standing between your handler and a malicious actor sending fake `checkout.session.completed` events.

## [04:00 — Rule two: idempotency, 4:00 to 6:30]

[Screen-share: split between the route handler and a database schema for an `event_log` table.]

Idempotency means: "if I run this handler with the same input twice, the second run is a no-op."

The naïve approach is to check whether the side effect has already happened. "Has this user been emailed?" If yes, skip. That sometimes works, but it depends on the side effect being inspectable, which it often is not.

The robust pattern is to log every Stripe event ID before you do anything with it, and use the event ID as a deduplication key.

```ts
const exists = await db.query<{ id: string }>(
  `select id from stripe_event_log where stripe_event_id = $1`,
  [event.id],
);

if (exists.length > 0) {
  return new Response("Already processed", { status: 200 });
}

await db.query(
  `insert into stripe_event_log (stripe_event_id, type, received_at)
   values ($1, $2, now())`,
  [event.id, event.type],
);
```

Three notes here.

**Note one.** This must be inside a transaction with whatever the actual handler does, otherwise you get the classic race: two webhook deliveries arrive at the same millisecond, both check the log, neither finds the event, both insert, both run the handler. Wrap the whole thing in `begin / commit` and either use a unique constraint on `stripe_event_id` (the safest) or use a `select for update` if your transaction isolation supports it.

**Note two.** Do not delete from `stripe_event_log` ever. It is your audit trail. Storage is cheap. Reconciliation against Stripe's API for a missing event later is invaluable.

**Note three.** The unique constraint on `stripe_event_id` is doing a lot of work. If both racing inserts happen, one of them will throw a unique-violation error, which you catch and treat as "already processed." This is the actual production-safe pattern.

## [06:30 — Rule three: ack fast, process async, 6:30 to 9:00]

[Screen-share: handler code with the "thin webhook" pattern.]

This rule is the one most teams get wrong because it requires a job queue.

Stripe expects a 2xx response within a few seconds. If your handler does something slow — like syncing to your data warehouse, calling an external API, generating a PDF — and it takes ten seconds, Stripe will retry. Now you have the same event running twice in parallel. Your idempotency layer should catch the second one, but you have wasted compute and you have a race-condition window.

The fix is to do the absolute minimum in the webhook handler. Verify the signature. Log the event. Enqueue a job. Return 200.

```ts
await db.transaction(async (trx) => {
  await trx.query(
    `insert into stripe_event_log (stripe_event_id, type, payload, received_at)
     values ($1, $2, $3, now())
     on conflict (stripe_event_id) do nothing
     returning id`,
    [event.id, event.type, JSON.stringify(event.data.object)],
  );

  await trx.query(
    `insert into job_queue (kind, payload, run_after)
     values ('stripe_event', $1, now())`,
    [JSON.stringify({ event_id: event.id })],
  );
});

return new Response("ok", { status: 200 });
```

A separate worker process (a cron-driven function, a long-running Node process, whatever fits your hosting) picks up `job_queue` rows and runs the actual business logic — emails, fulfillment, accounting sync, all of it. That worker can take as long as it needs and can be retried on failure without affecting Stripe's retry behavior.

If you are on Vercel or another serverless platform without a long-running process, use Inngest, Trigger.dev, QStash, or a Postgres-backed pg-boss queue. Any of them is fine. Just do not run business logic inside the webhook handler.

## [09:00 — Rule four: dead-letter queue, 9:00 to 11:30]

[Screen-share: a simple dead-letter table schema.]

The dead-letter pattern is your safety net for the events your worker cannot process.

Imagine a `customer.subscription.updated` event arrives for a subscription tied to a user record that, somehow, does not exist in your database. The worker tries to update, finds no user, throws. What do you do?

Options:
1. Retry forever — bad, will infinite-loop.
2. Drop and log — terrible, you have lost a billing event.
3. Move to a dead-letter queue and alert a human — correct.

The pattern:

```ts
async function processStripeJob(job: Job) {
  try {
    await handleEvent(job.payload.event_id);
    await markComplete(job.id);
  } catch (err) {
    if (job.attempts >= 3) {
      await db.query(
        `insert into stripe_dead_letter (event_id, error, attempts, last_attempt_at)
         values ($1, $2, $3, now())`,
        [job.payload.event_id, (err as Error).message, job.attempts],
      );
      await markFailed(job.id);
      await alertOpsTeam(job.payload.event_id, err);
    } else {
      await scheduleRetry(job.id, exponentialBackoff(job.attempts));
    }
  }
}
```

Three attempts with exponential backoff handles 99% of transient failures — network blips, rate limits, deadlocks. Anything that fails three times needs a human to look. The dead-letter row gives the human everything they need: which event, what error, when, how many retries.

The alert at the bottom is non-negotiable. If you have a dead-letter table that nobody monitors, you have a graveyard. Email yourself. Page your phone. Whatever. Just do not let dead-letters silently pile up.

## [11:30 — Reconciliation, 11:30 to 13:00]

[Screen-share: a reconciliation cron job.]

Last layer of defense: periodic reconciliation against Stripe's API.

Once a day, run a cron that lists all Stripe events from the last 48 hours and cross-references them against your `stripe_event_log`. Any event in Stripe's API that is not in your log was missed — usually because your endpoint was down during the original delivery and the retries also failed.

```ts
const stripeEvents = await stripe.events.list({
  created: { gte: Math.floor((Date.now() - 48 * 3600 * 1000) / 1000) },
  limit: 100,
});

for (const event of stripeEvents.data) {
  const logged = await db.query(
    `select 1 from stripe_event_log where stripe_event_id = $1`,
    [event.id],
  );
  if (!logged.length) {
    await enqueueMissingEvent(event);
    await alertOpsTeam(event.id, new Error("Missed event detected by reconciliation"));
  }
}
```

This catches the failures your retry logic missed. It is the seatbelt under the airbag. Most production Stripe integrations skip this, and most production Stripe integrations have a quiet drip of lost events that nobody notices until a customer asks why their subscription is still showing as active in your app three months after they canceled.

## [13:00 — What I would never do, 13:00 to 14:00]

A few quick "do not do this" callouts based on real incidents:

**One.** Never run business logic synchronously in the webhook handler. Even if it is "just one email." Today it is one email. Next quarter it is one email plus a Slack notification plus a HubSpot sync, and now your webhook is timing out.

**Two.** Never trust the request body without verifying the signature. Even if the webhook URL is "secret." URLs leak. Logs leak. Browser dev tools record requests. Verify the signature.

**Three.** Never assume Stripe events arrive in order. They do not. A `customer.subscription.updated` can arrive before the `customer.subscription.created` it depends on. Your handlers must be reorder-safe. The pattern is to check the latest state from the Stripe API when you process, not to rely on the event payload alone.

**Four.** Never log raw webhook payloads to your application logs in plain text. PII and PCI risk. Log event IDs and types. Store payloads in a database column that is access-controlled.

## [14:00 — Soft close, 14:00 to 15:00]

Stripe is a pleasure to integrate with for the first hour. It is a load-bearing piece of infrastructure for the next ten years of your business. The difference between the two is whether your webhook handler obeys these four rules: verify, dedupe, ack-fast, dead-letter.

The full code pattern, including the database migrations and worker scaffolding, is in the QUANT LAB USA blog at quantlabusa.dev/blog. The Stripe integration service page is at quantlabusa.dev/services/stripe-integration. If you have a Stripe integration that is in production and you want a second pair of eyes on it before something breaks, that is the kind of audit I do — quantlabusa.dev/contact.

If this saved you a future midnight pager, drop a like. It helps the next engineer find it.

Thanks for watching.

[Cut.]

---

## YouTube description (200 words)

Most production Stripe integrations have a webhook bug nobody has found yet. This walkthrough shows the four rules that separate a Stripe webhook handler that survives production from one that quietly drops events.

Covered with real Next.js App Router code: signature verification (and the body-parsing trap that breaks it), idempotency via a `stripe_event_log` table with a unique constraint, the "ack fast, process async" pattern with a job queue, a dead-letter table for genuinely-failed events, and a reconciliation cron that catches the failures your retries missed.

Plus four anti-patterns I refuse to ship: synchronous business logic in the handler, trusting unverified payloads, assuming event ordering, and logging raw payloads.

00:00 Why 70% of Stripe integrations have a webhook bug
00:45 Why webhooks are uniquely terrible
02:00 Rule 1: Signature verification
04:00 Rule 2: Idempotency with an event log
06:30 Rule 3: Ack fast, process async
09:00 Rule 4: Dead-letter queue
11:30 The reconciliation layer
13:00 What I would never do
14:00 Soft close

Stripe integration service: https://quantlabusa.dev/services/stripe-integration
Contact: https://quantlabusa.dev/contact

## Tags (10)

1. stripe webhooks production
2. stripe webhook idempotency
3. stripe webhook signature verification
4. stripe webhook retry
5. stripe webhook dead letter queue
6. nextjs stripe webhooks
7. stripe integration tutorial
8. stripe webhook nodejs
9. QUANT LAB USA
10. stripe production patterns
