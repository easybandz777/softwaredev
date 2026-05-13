# QUANT LAB USA — 5-Email Drip Implementation

Implementation of the lead-nurture drip specified in `16-email-drip.md`. Source copy is the source of truth for body text; this doc covers code, ops, and how to test.

## Architecture

```
+------------------+        +-------------------+        +------------------+
| /api/leads (POST)|------->| enqueueDripSeries |------->| lead_drips table |
|  form / magnet   |        |   (5 rows)        |        | Vercel Postgres  |
+------------------+        +-------------------+        +---------+--------+
                                                                   |
                                                            (status='pending',
                                                             scheduled_at=now()+Nd)
                                                                   |
+--------------------+   hourly cron     +------------------+      |
| vercel.json crons  |------------------>| /api/drip/tick   |<-----+
| 0 * * * * UTC      |                   |  fetch due rows  |
+--------------------+                   |  Resend.send()   |
                                         |  mark sent/fail  |
                                         +--------+---------+
                                                  |
                                                  v
                                          recipient inbox
                                          (List-Unsubscribe header,
                                           footer link -> /api/drip/unsubscribe)
```

## File map

- `src/lib/drip.ts` — `enqueueDripSeries`, `fetchDuePending`, `markSent`/`markFailed`, `unsubscribeByEmail`, `signUnsubToken`/`verifyUnsubToken`, `variantForEmail`, `leadMagnetUrlForSource`, `ensureDripTable`
- `src/lib/email-templates/` — 5 templates + `shared.ts` (brand wrapper) + `index.ts` (`buildDripTemplate`, `pickSubject`)
- `src/app/api/drip/tick/route.ts` — cron-pulled GET/POST; reads up to 50 due rows per run, sends, marks sent or failed
- `src/app/api/drip/send/route.ts` — manual POST; auth required; supports `dry_run` for local preview
- `src/app/api/drip/unsubscribe/route.ts` — HMAC-signed token; flips matching rows to `unsubscribed`; renders a simple confirmation page
- `src/app/api/leads/route.ts` — added one line in `Promise.allSettled` to enqueue the series after insert
- `vercel.json` — created; only contains the cron entry

## Drip schedule

Trigger: lead row inserted via `/api/leads`. Five rows queued in `lead_drips`, scheduled at:

| Step | Offset | Subject A (control) | Subject B (test) |
|------|--------|---------------------|------------------|
| 1 | +1 day | Your guide is attached — plus what's next | Here's your guide (and a heads-up) |
| 2 | +3 days | How HobbsPeak skipped Shopify (and saved $40k/yr) | They almost paid Shopify $50k. Then they called me. |
| 3 | +5 days | The "Three Failure Modes" framework | Steal this framework (no pitch attached) |
| 4 | +8 days | Want me to look at your situation? | 30 min, no pitch — just diagnosis |
| 5 | +14 days | Still around? | Last one — Y or no reply |

Note: the spec file's email 1 says "Day 1 (immediate, post-download)" but lists the schedule in section "Enrollment Rules" as Day 1, Day 3, Day 5, Day 8, Day 14. Day 1 is implemented as +24h so the cron has a window to pick it up and so it does not stack against the immediate notification email already sent by `/api/leads`. To make Email 1 immediate, change `DRIP_DELAYS_DAYS[1]` in `src/lib/drip.ts` from `1` to `0`.

## A/B variant logic

Per-lead, deterministic. `variantForEmail(email)` SHA-256s the lowercased trimmed email, takes byte 0, even = `A`, odd = `B`. A given lead gets the same variant across all 5 emails, which keeps the in-sequence experience consistent. Both variants share identical body + CTA — only the subject differs.

## How a lead enters the drip

1. User submits any form whose handler POSTs to `/api/leads` (calculators, contact, resource downloads).
2. `/api/leads` validates, inserts into `consultations`, then `Promise.allSettled` runs three side-effects in parallel: founder notification email, Slack post (if configured), and `enqueueDripSeries`.
3. `enqueueDripSeries`:
   - Lazily creates `lead_drips` if missing (`gen_random_uuid()` default).
   - Skips if the email already has any `pending` or `sent` row (re-submission protection).
   - Skips if the email is already `unsubscribed`.
   - Inserts 5 rows with `subject_variant = variantForEmail(email)`.

## lead_drips schema

Created lazily on first enqueue/tick — no migration required. Schema:

```
id              uuid PK default gen_random_uuid()
lead_id         integer (nullable; FK by convention to consultations.id)
lead_email      text not null
lead_name       text default ''
step            integer not null (1..5)
scheduled_at    timestamptz not null
sent_at         timestamptz
subject_variant text default 'A' ('A' or 'B')
source          text (mirrors lead source: 'crm-roi-calculator', 'pentest-cost-calculator',
                'build-vs-buy-calculator', 'contact', 'stripe-cost-calculator', 'resource:<slug>')
status          text default 'pending' (pending | sent | failed | unsubscribed | paused)
created_at      timestamptz default NOW()
updated_at      timestamptz default NOW()
```

Indexes on `(status, scheduled_at)`, `lead_email`, `lead_id`.

The decision not to add this to `src/lib/db.ts`'s `ensureMigrated` is deliberate: nine other agents may be editing that file concurrently. Lazy creation via `ensureDripTable()` is idempotent and safe. If a long-term home is wanted, move the `CREATE TABLE` into `ensureMigrated` in a follow-up PR.

## Local testing

```bash
# 1. Set required env in .env.local
RESEND_API_KEY=re_xxx
DRIP_CRON_SECRET=$(openssl rand -hex 32)
UNSUBSCRIBE_JWT_SECRET=$(openssl rand -hex 32)
RESEND_FROM_EMAIL="William Beltz <beltz@quantlabusa.dev>"
SITE_ORIGIN="http://localhost:3000"

# 2. Boot the dev server
npm run dev

# 3. Capture a fake lead (queues 5 drip rows)
curl -X POST http://localhost:3000/api/leads \
  -H "Content-Type: application/json" \
  -d '{"name":"Test Lead","email":"you+test@yourdomain.com","company":"Acme","source":"build-vs-buy-calculator"}'

# 4. Preview email 1 without sending
curl -X POST http://localhost:3000/api/drip/send \
  -H "Authorization: Bearer $DRIP_CRON_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"lead_email":"you+test@yourdomain.com","step":1,"dry_run":true}'

# 5. Force-send one drip
curl -X POST http://localhost:3000/api/drip/send \
  -H "Authorization: Bearer $DRIP_CRON_SECRET" \
  -H "Content-Type: application/json" \
  -d '{"lead_email":"you+test@yourdomain.com","step":1}'

# 6. Or run the cron tick (sends every drip whose scheduled_at <= now())
curl -X POST "http://localhost:3000/api/drip/tick?token=$DRIP_CRON_SECRET"

# To speed-test the queue, manually backdate scheduled_at:
psql $POSTGRES_URL -c "UPDATE lead_drips SET scheduled_at = NOW() - interval '1 minute' WHERE lead_email = 'you+test@yourdomain.com'"
```

## Pausing the drip

For a single lead:
```sql
UPDATE lead_drips SET status = 'paused' WHERE lead_email = '<email>' AND status = 'pending';
```
Resume:
```sql
UPDATE lead_drips SET status = 'pending' WHERE lead_email = '<email>' AND status = 'paused';
```
Globally: remove the cron entry from `vercel.json` and redeploy, or set `DRIP_CRON_SECRET` to an empty string (the route will 401 every cron call).

## Resend rate limits

Resend's default account limit is 100 req/s and 100k/month on paid plans. `MAX_PER_TICK` is set to 50 to stay well under the per-second cap even if the run is bursty. Hourly cron with a steady stream of leads should never hit either ceiling.

## Future improvements

- Move table creation into `ensureMigrated` in `src/lib/db.ts`.
- Add exclusion rules from the spec: skip if `consultations.status` is anything past `new`, skip if the lead is on the `clients` table, skip if a recent `lead_replied` event exists.
- Hook open and click tracking by adding Resend webhook handler at `/api/drip/webhook`; persist into an `email_events` table.
- Send-window enforcement (Tue/Wed/Thu 9-11am ET) by tightening `fetchDuePending`'s WHERE clause to gate on `EXTRACT(dow FROM NOW() AT TIME ZONE 'America/New_York')` and `EXTRACT(hour FROM ...)`.
- Per-source Email 2 swap: dynamically pick a case study by `lead_drips.source`.
- LinkedIn Sales Navigator hand-off on Email 4 booking via Calendly webhook.

## ENV vars to set in Vercel

| Var | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | yes | Existing — used by `/api/leads` too. |
| `RESEND_FROM_EMAIL` | strongly recommended | Set to `William Beltz <beltz@quantlabusa.dev>` once the domain is verified in Resend. Falls back to `onboarding@resend.dev` (deliverability hit). |
| `DRIP_CRON_SECRET` | yes | `openssl rand -hex 32`. Used to auth `/tick` and `/send`. |
| `CRON_SECRET` | optional | Vercel's standard cron auth header. The tick route accepts either. |
| `UNSUBSCRIBE_JWT_SECRET` | yes | `openssl rand -hex 32`. HMAC key for unsubscribe tokens. Rotating this invalidates outstanding unsubscribe links — don't rotate casually. |
| `SITE_ORIGIN` | recommended | Defaults to `https://quantlabusa.dev`. Override for staging. |

## Compliance

Every drip email includes:
- `List-Unsubscribe` and `List-Unsubscribe-Post` headers (Gmail / Yahoo bulk-sender requirements).
- A visible HTML footer with the unsubscribe link.
- Plain-text fallback with the unsubscribe URL.
- Reply-to set to `beltz@quantlabusa.dev` (replies route to the founder inbox per the spec).
