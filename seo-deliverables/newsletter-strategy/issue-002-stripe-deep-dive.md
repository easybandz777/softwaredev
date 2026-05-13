# Issue 002 — The Stripe Connect deposit-on-hold playbook

**Subject (A):** The Stripe Connect bug everyone hits the first time
**Subject (B):** Stripe Connect deposit-on-hold — the schema we use in production
**Preview text:** A real marketplace client, the three webhook bugs we all hit, and the production schema for auth-hold-then-capture. ~1,600 words. Code included.

---

## Section 1: Case study deep dive — the marketplace that almost shipped broken

A few months ago a marketplace client came to us with what looked like a small Stripe integration. The product was a booking platform — operator-side users list services, end-user customers book and pay a deposit, the operator fulfills, balance is captured on completion. Mid-market deal size, roughly $90K. The brief said "Stripe Connect, deposit then capture, four-week build."

Three weeks in, we caught what would have been an embarrassing production bug. The original engineer (not ours — a prior contractor) had wired the deposit as an immediate **capture** with a refund-on-cancel fallback. That works on the happy path. But on the unhappy path — operator doesn't fulfill, customer cancels at hour 47 of a 48-hour window — you're now in a partial-refund dance with chargeback exposure. The Stripe Connect platform fee gets reversed inconsistently. The escrow math doesn't reconcile. And the operator-side reporting shows revenue that already moved off your platform.

The fix wasn't subtle. We rewrote the deposit flow as a true auth-hold-then-capture: `PaymentIntent` with `capture_method='manual'`, hold for 7 days (Stripe's max hold), capture on operator fulfillment confirmation. The refund path becomes a cancel — no money ever moved off the customer's card, so there's no chargeback exposure and no platform-fee reversal accounting headache.

Total damage from the rewrite: 11 days of work, one ugly conversation with the client about the prior contractor's structure, and a much better production system. The client's launch shipped clean. They booked $1.3M GMV through the platform in the first 90 days. Today they're a retainer client.

The lesson — and this is the thing I keep saying on calls — is that **Stripe Connect has the right primitives for marketplace and escrow flows, but the documentation defaults assume the simpler immediate-capture model**. If you don't know to look for `capture_method='manual'`, the path of least resistance leads you straight into the chargeback trap. Worth pricing into your engineering budget.

## Section 2: Technical playbook — the production schema

Here's the actual schema we use for deposit-on-hold marketplace flows. Strip the table prefixes for your codebase.

```sql
CREATE TABLE booking_intents (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  operator_id     INTEGER NOT NULL,
  customer_id     INTEGER NOT NULL,
  service_id      INTEGER NOT NULL,

  -- Stripe identifiers (source of truth)
  stripe_payment_intent_id  TEXT NOT NULL UNIQUE,
  stripe_account_id         TEXT NOT NULL,          -- Connect-account-of-operator
  stripe_customer_id        TEXT,

  -- Money (cents, never floats)
  deposit_amount_cents    INTEGER NOT NULL,
  balance_amount_cents    INTEGER NOT NULL,
  total_amount_cents      INTEGER NOT NULL,
  platform_fee_cents      INTEGER NOT NULL,

  -- Lifecycle
  status TEXT NOT NULL DEFAULT 'awaiting_auth',
    -- awaiting_auth → authorized → captured → released
    -- awaiting_auth → cancelled
    -- authorized → expired (Stripe 7-day hold lapsed)

  hold_expires_at         TIMESTAMPTZ NOT NULL,    -- created_at + 7 days
  authorized_at           TIMESTAMPTZ,
  captured_at             TIMESTAMPTZ,
  cancelled_at            TIMESTAMPTZ,
  cancellation_reason     TEXT,

  created_at              TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at              TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_booking_intents_status_hold ON booking_intents (status, hold_expires_at);
CREATE INDEX idx_booking_intents_operator ON booking_intents (operator_id, status);
```

The flow:

1. **Create intent.** Server-side: `stripe.paymentIntents.create({ amount, currency, customer, payment_method_types: ['card'], capture_method: 'manual', application_fee_amount: platformFeeCents, transfer_data: { destination: stripeAccountId } })`. Persist the intent ID with status `awaiting_auth`.
2. **Customer authorizes.** Client-side: Stripe Elements collects card, confirms the intent. Webhook `payment_intent.succeeded` (status: `requires_capture`) fires. Flip DB status to `authorized`, persist `authorized_at`.
3. **Operator fulfills.** Operator clicks "complete service" in your admin. Server: `stripe.paymentIntents.capture(intentId)`. Webhook `payment_intent.succeeded` (status: `succeeded`) fires. Flip DB status to `captured`.
4. **Or customer cancels.** Within 7 days, before capture: server calls `stripe.paymentIntents.cancel(intentId, { cancellation_reason: 'requested_by_customer' })`. No money ever moves. Flip DB status to `cancelled`.

That's the happy path. Three things bite you.

## Section 3: Founder hot take — the three webhook bugs everyone hits

Every team integrating Stripe Connect for the first time hits the same three bugs. They're not in the docs in a single place. So here they are, plain.

**Bug 1: You think the webhook is the source of truth, but you wrote the DB before the webhook fired.** A user pays, your server calls `stripe.paymentIntents.confirm()`, you optimistically write `status='authorized'` to the DB. Then the webhook arrives 800ms later and writes `status='authorized'` again. No harm — until the optimistic write was wrong (the confirm actually failed downstream and the webhook says `payment_intent.payment_failed`). Now your DB and Stripe disagree. **Fix:** never write Stripe state to your DB except in webhook handlers. The HTTP response from `confirm()` is for client UX only.

**Bug 2: You're not verifying the webhook signature.** It's tempting to skip — your endpoint is a `vercel.app` subdomain, who would know? Everyone, eventually. **Fix:** `stripe.webhooks.constructEvent(rawBody, signature, endpointSecret)` on every webhook. Raw body, not JSON.parse. This is non-negotiable for production.

**Bug 3: You're handling the same webhook twice.** Stripe retries webhooks aggressively. The same `payment_intent.succeeded` may arrive 4 times over 12 hours. **Fix:** idempotency. Every webhook handler does an `INSERT ... ON CONFLICT DO NOTHING` against an idempotency key (Stripe event ID). Process once, ignore the rest.

The fix for all three is roughly 30 lines of code if you wire it right from the start. Roughly 30 hours if you wire it wrong and have to retrofit while shipping fast.

## Section 4: Pricing and cost intel — what this kind of project actually costs

If you're scoping a marketplace integration with Stripe Connect — deposit-on-hold, escrow, platform fees, multi-vendor payouts — here are the real ranges from QUANT LAB's last 6 months of similar projects:

- **Stripe Connect MVP** (one operator type, one service type, basic deposit flow): **$45K–$70K**, 4–6 weeks
- **Mid-market marketplace** (multi-operator, multi-service, dispute flows, reporting): **$95K–$160K**, 8–12 weeks
- **Full escrow platform** (split payments, refund mechanics, dispute UI, operator dashboards): **$180K–$280K**, 12–18 weeks

Where this goes off the rails: dispute and refund UI eats 25–30% of the engineering budget on full escrow builds. If you cut it, you ship a system that operators can't actually use during the first chargeback. Don't cut it.

If you want a real estimate sanity-checked for your scope, [hit reply](mailto:beltz@quantlabusa.dev) with the spec and I'll send back a range within 24 hours. Free, no obligation.

## Section 5: One ask + sign-off

If you're building anything with Stripe Connect right now, **forward this to your engineering lead**. The three bugs above cost teams 30+ hours each to find and fix in production. Catching them before launch saves real money and real reputation. It's the kind of issue that pays for itself in 10 minutes of reading time.

If you want the full code (the webhook handlers, the idempotency layer, the test harness) published in a future issue, hit reply and say so. If enough people ask, I'll write it up. Otherwise we'll move to the next topic — issue 003 is on **custom CRM replacement of Salesforce**, with the actual cost math from a $200K displacement we shipped in Q1.

See you in two weeks.

— Bill

P.S. The QUANT LAB newsroom now has a permanent home at [quantlabusa.dev/newsroom](https://quantlabusa.dev/newsroom). Five press releases live there with company-level news. Worth bookmarking if you ever want to send a journalist or analyst there.

---

**Internal links to verify pre-send:**
- mailto:beltz@quantlabusa.dev
- https://quantlabusa.dev/newsroom
- (in body, optional) /blog/nextjs-stripe-integration-guide

**Expected sends:** ~95–110 (post-issue-001 confirmed list + 15–25 new subscribers from issue 001 forwards)
**Target opens:** 60% open rate (~60–65 opens)
**Target replies:** 6–10 replies (technical-depth issues tend to draw fewer but higher-quality replies)
**A/B test (subject):** half on A ("Stripe Connect bug everyone hits"), half on B ("Stripe Connect deposit-on-hold — schema we use in production")
