# Reddit — Soft-Launch Plan

10 Reddit drafts across 6 subreddits. Founder voice (Bill Beltz, QUANT LAB USA INC). No emojis. No fabricated stats. Soft-launch posture — value-first, brand-quiet. Subreddit-native voice. Link strategy and risk note for every post.

**Account hygiene before posting any of this.**
- Use one account: `u/quantlab-bill`. Real name in flair. No throwaways.
- Pre-build karma: 200+ comment karma across r/Entrepreneur, r/IndieHackers, r/SaaS over 2-3 weeks of genuine comments before any of these posts go live.
- Read each subreddit's rules tab and pinned megathread before posting.
- One post per subreddit per 7-day window. Never cross-post the same text.
- Reply within 1 hour to every top-level comment for the first 6 hours.

**Link strategy in general.** Reddit punishes self-promo when it's the post's purpose. Link in comments when asked. Mention QuantLab in 2nd person if anywhere ("a friend's small studio in Macon"). The two exceptions: r/IndieHackers Show-and-Tell pinned threads, and any post explicitly answering a "what tool / who do you recommend" question where naming yourself is the honest answer.

---

## Post 01 — r/SaaS

**Subreddit:** r/SaaS
**Day:** Day 4 (Tue)
**Title:** What I learned scoping a Stripe-native SaaS without ZoomInfo, Apollo, or any seat-priced sales tool

**Body (~200 words):**

I'm a solo founder running a small dev studio out of Macon, GA. Last year a client brief landed on my desk that I think a lot of B2B founders quietly need: build a sales engine that doesn't depend on $1,200/mo seat-priced data platforms.

The client sells into niche verticals — small contractors, regional schools, specific trades. ZoomInfo doesn't cover them well. Apollo and Seamless are okay but expensive and the contact accuracy in those niches was rough.

What we built (J5 Sales OS) ended up combining:

- Google Places v2 Text Search with a directory blocklist (filtering out Yelp, BBB, Thumbtack, Angi, Yellowpages results so you get real businesses, not directory aggregators)
- Concurrent email scraper with semaphore-bounded fetching and validation rules
- OpenAI for lead qualification scoring and personalized outreach generation
- Full CRM pipeline (stages, niche tags, solutions matching) so one operator runs the whole workflow

Discovery dropped from hours per niche to minutes. Email-find rates for small-business niches ran significantly higher than what we got out of Apollo for the same lists.

Happy to go into any of the specific architecture decisions if useful. The Google Places filter rules in particular were where most of the leverage came from.

**Link strategy:** Do NOT link in OP. If anyone asks "is this open source / where's the writeup," link in a comment to `https://quantlabusa.dev/work/j5-sales-os` and `https://quantlabusa.dev/services/custom-business-software`.
**Risk note:** r/SaaS auto-flags posts with promo language. Avoid "we built," "our platform," "DM me." Lean into "what I learned" framing. Don't post the URL until asked.

---

## Post 02 — r/SaaS

**Subreddit:** r/SaaS
**Day:** Day 18 (Fri)
**Title:** Founders — what's the slowest workflow in your business right now that an off-the-shelf tool failed to fix?

**Body (~200 words):**

I'm trying to map the space of "things that off-the-shelf SaaS keeps failing to solve" because I keep getting calls from founders with the same shape of problem: a tool sort of works for 80% of their workflow but the last 20% is a deal-breaker.

Examples I've seen recently across my client base:

- Field-service software that can't model used parts or consignment inventory
- E-commerce platforms that can't handle live wholesale catalog sync with daily price changes
- CRMs that punish you for having niche pipeline stages
- Estimating tools that don't let you bake firm-specific markup rules into the engine
- Invoicing platforms that can't write back into QuickBooks bi-directionally

Curious where everyone else is hitting these walls. What's the workflow you're paying for SaaS to handle that you secretly wish was custom? Especially interested in operators below $50M ARR.

I'll try to reply with what custom looks like for each one if it helps.

**Link strategy:** No links in OP. In follow-up comments where someone names a specific pain, link to the relevant case study or service page. Examples: contractor estimating → `/work/contractor-estimating-proposal-engine`. QuickBooks sync → `/work/bridgepointe-painting`.
**Risk note:** Make sure the OP is genuinely a question, not bait. Don't lead with "we build custom" — let people ask.

---

## Post 03 — r/Entrepreneur

**Subreddit:** r/Entrepreneur
**Day:** Day 8 (Tue)
**Title:** Underrated mid-market software shops are eating SaaS lunch in secondary cities. Here's what I'm seeing in Georgia.

**Body (~200 words):**

I run a small dev studio in Macon, GA. The trend I keep seeing — and I think it's underdiscussed on this sub — is that mid-market businesses in secondary cities are increasingly paying for custom software instead of mainstream SaaS, and the math is starting to make sense for them.

Why it's working:

- The $5M-$50M operator gets quoted $300K-$500K by an Atlanta or NYC agency for a project that ships in 10 months. They want a real alternative.
- A solo or two-person shop in their market can deliver a focused build in 8-16 weeks for one-fifth of the price.
- Operators stop paying $40K-$80K/year on SaaS subscriptions that don't quite fit their workflow.

I've shipped six projects like this in the last 18 months — fencing contractor, custom headwear, painting, towing, insurance advisor, sales ops. Every one of them replaced 3-5 SaaS tools with one custom platform.

The mainstream startup advice ("just use Shopify, just use HubSpot") works for 80% of operators. The 20% who don't fit those defaults are quietly paying small studios cash.

Open question: anyone else seeing this pattern outside Georgia? Curious if it generalizes.

**Link strategy:** No links in OP. Comment-level links if asked: `quantlabusa.dev/work` for proof, individual case-study URLs if a specific industry comes up.
**Risk note:** r/Entrepreneur tolerates more first-person founder content than r/SaaS, but the mod team is fast on anything that reads as a sales pitch. Keep "what I'm seeing" framing.

---

## Post 04 — r/IndieHackers

**Subreddit:** r/IndieHackers
**Day:** Day 11 (Fri) — post in the Show IH thread if pinned, otherwise the Tuesday "milestone" thread
**Title:** Hit 14 case studies on the QuantLab portfolio site. Lessons from 18 months running a tiny B2B dev studio.

**Body (~200 words):**

Milestone post — I run QuantLab, a small B2B dev studio out of Macon, GA. We just published our 14th written case study at quantlabusa.dev/work.

Things I'd tell past-me:

1. Niche down to "operators who hate their current SaaS." Don't sell to founders shopping for any-dev-shop. Sell to the operator who has a specific tool they've outgrown.

2. Publish the case study before the testimonial. Most clients don't sign off on testimonials for months. The case study (anonymized if needed) gets you 80% of the credibility.

3. Charge enough to write the case study properly. Every case study I've published takes 4-8 hours of post-engagement writing. That's not free time — price it in.

4. Service-area landing pages outrank generic ones. Our /software-development-macon-ga and Atlanta pages drive more discovery calls than any blog post we've written.

5. The number of leads is less interesting than the closing rate on the leads you do get. We get 4-6 qualified inbound calls per month. We close 2-3. That conversion is the lever.

Happy to answer specifics on any of these.

**Link strategy:** Linking to `quantlabusa.dev/work` is allowed in r/IndieHackers milestone posts when it's the substance. Frame is the lesson, not the brand.
**Risk note:** IH is generally friendly but mods kill posts that are too plain a self-promo. Anchor in the 5 lessons, link as evidence not pitch.

---

## Post 05 — r/IndieHackers

**Subreddit:** r/IndieHackers
**Day:** Day 32 (Tue)
**Title:** Stripe webhook idempotency — the boring layer I wish more solo founders shipped on day one

**Body (~200 words):**

Posting this because I've audited four solo-founder SaaS apps in the last 90 days and three of them had the same Stripe-related bug.

Pattern: app works fine for 12-18 months. Then a network blip causes Stripe to retry a `payment_intent.succeeded` webhook. The app processes it twice. Customer gets double-charged, or worse, double-credited a feature. Cleanup is painful.

The fix is three layers, all written in week one of any Stripe build:

- Signature verification on every webhook (most people do this)
- An idempotency table keyed on the Stripe event ID, written before any business logic runs (most people skip this)
- Treating the Stripe dashboard as a log, not a source of truth (most people learn this the hard way)

If you're shipping a SaaS that touches Stripe in 2026, the idempotency table is 30 minutes of work. Skipping it is the kind of thing that becomes a tax later.

Will answer any Stripe arch questions in comments if helpful. Not selling anything — I just see this enough that I think it should be standard.

**Link strategy:** No link in OP. If anyone asks for a writeup, link to `/services/stripe-integration` in a comment.
**Risk note:** IH posters can smell a sales pitch. Lean into "no plug, just the pattern."

---

## Post 06 — r/CybersecurityAdvice

**Subreddit:** r/CybersecurityAdvice
**Day:** Day 22 (Tue)
**Title:** What does a "real" Active Directory pentest deliverable actually look like? (Not a vuln scan.)

**Body (~200 words):**

I'm an offensive-security practitioner. I keep seeing posts on this sub from SMB IT folks who got a "pentest" from a vendor and got back a 60-page Nessus output. That isn't a pentest — that's a vulnerability scan with a cover sheet.

A real internal AD pentest deliverable should include:

- A documented attack chain — from initial foothold to Domain Admin — with timestamps, screenshots, and the specific misconfigurations that made each step possible
- Every finding mapped to a MITRE ATT&CK technique (not just CVE)
- An executive summary written for leadership, not your security team
- A prioritized remediation roadmap (ranked by exploitability, not CVSS score)
- A separate technical report for your security team

In my own engagements I run 11 attack modules — reconnaissance, credential spraying, Kerberoasting, ADCS abuse, lateral movement, C2 — and the report typically runs 40-60 pages of actual narrative, not raw scanner output.

If your last "pentest" was a PDF of Nessus findings, you got billed for a scan. Push back. Compliance auditors are increasingly catching this distinction too.

Happy to answer specific questions.

**Link strategy:** No link in OP. Comment-level link to `/services/active-directory-pentest` if asked "where can I see a sample report."
**Risk note:** This sub is allergic to vendor pitches. Keep the post technical and educational. Mods will let it stay if it reads as practitioner-to-practitioner.

---

## Post 07 — r/CybersecurityAdvice

**Subreddit:** r/CybersecurityAdvice
**Day:** Day 49 (Sat)
**Title:** ADCS abuse is the single highest-ROI attack path I run against mid-market AD environments. Here's what to check.

**Body (~200 words):**

Active Directory Certificate Services (ADCS) is enabled by default in too many mid-market environments and almost never hardened correctly. Out of my last six AD pentests, ADCS misconfigurations were part of the path to Domain Admin in five.

Specific things to check yourself before the next pentest:

- ESC1 / ESC8 — template enrollment with subject alt name supplied by requester
- Web enrollment endpoint exposed and reachable from non-privileged hosts
- Any template that allows authentication and has "Supply in the request" enabled
- Excessive enroll permissions on sensitive templates

Tools that help with discovery: Certipy, PSPKIAudit, the BloodHound CE ADCS module. Run these in audit mode on your environment this week if you haven't.

If you're inheriting an AD environment from a previous IT lead, ADCS is one of the first three things I'd audit, alongside Kerberos delegation and GPO permissions.

Will answer specifics in comments.

**Link strategy:** No link in OP. Comment-level link to `/services/mitre-attack-assessment` only if asked for an assessment framework.
**Risk note:** Technical detail keeps this safe in r/CybersecurityAdvice. Avoid any pitch tone.

---

## Post 08 — r/devops

**Subreddit:** r/devops
**Day:** Day 38 (Thu)
**Title:** Real-time trading systems — what "low latency" actually means when you persist every signal

**Body (~200 words):**

We built a multi-strategy trading system for a private trading operation last year — MA Supertrend + VWAP running in parallel on live capital. Posting here because I think the "real-time" claims in the algotrading space are often loose, and devops folks are the right audience for the actual numbers.

What we measured:

- Average order latency under 12ms end-to-end (signal trigger → order placed → ack received)
- Every signal, fill, and rejection persisted to Postgres synchronously, not async
- WebSocket feeds for market data, REST for order routing, Docker containers per strategy, Sentry for error capture
- Zero unplanned downtime since launch

Where the latency budget actually goes:

- Network RTT to exchange: 2-4ms
- WebSocket parse + signal evaluation: 1-3ms
- DB write + commit: 2-4ms (this is where most people cheat by going async)
- Order construction + send: 2-3ms

If you cheat the DB write by going async, you save ~3ms but lose the audit trail. For live capital you don't get to make that tradeoff. Curious what others have measured in similar systems.

**Link strategy:** No link in OP. Comment-level link to `/work/multi-strategy-trading-system` if anyone asks for more architecture detail.
**Risk note:** r/devops is technical but anti-self-promo. Keep the post about the numbers.

---

## Post 09 — r/devops

**Subreddit:** r/devops
**Day:** Day 70 (Mon)
**Title:** Bi-directional QuickBooks Online sync — the failure modes nobody documents

**Body (~200 words):**

Built a deep QBO integration for a contractor client last year (bridgepointepainting.com). Sharing the failure modes because every walkthrough I've read in QBO integration docs glosses over the hard parts.

Failure modes you have to handle:

- Parallel edits — user edits a customer in QBO at 10:01am, your app edits same customer at 10:02am. Whose version wins? You need a conflict-resolution rule per entity type.
- Partial sync failure — you write 8 of 12 records, 9th fails, transaction wasn't atomic. Idempotency table or you'll silently dual-write next run.
- Token refresh — QBO OAuth tokens expire. If your refresh logic is in the same code path as your sync logic, a refresh failure stops sync. Separate them.
- Pagination drift — QBO pagination is offset-based on a cursor that can shift. Use the syncToken pattern, not offset+limit.
- Rate limit on burst writes — QBO will throttle aggressive write loops. Backoff + retry with jitter.

We ended up running scheduled syncs + on-demand sync triggers with a state machine per entity. Six months in: no drift, no manual reconciliation.

Curious how others have built around the same pitfalls.

**Link strategy:** No link in OP. Comment-level link to `/work/bridgepointe-painting` if asked.
**Risk note:** Same as Post 08. Devops loves technical content, hates pitch tone.

---

## Post 10 — r/Stripe

**Subreddit:** r/Stripe
**Day:** Day 60 (Fri)
**Title:** Idempotency table pattern for webhook handlers — what to store, when to commit

**Body (~200 words):**

Mod-flag-safe technical post. r/Stripe has a pattern of upvoting durable engineering content, so here's the pattern I use across every Stripe integration I build.

The setup:

```
table stripe_events {
  event_id text primary key,    -- Stripe event ID from webhook payload
  event_type text,
  processed_at timestamptz,
  processing_status text,        -- received | processing | done | failed
  error_message text nullable,
  payload jsonb
}
```

The flow:
1. Verify signature.
2. Insert event with ON CONFLICT (event_id) DO NOTHING. If 0 rows affected, return 200 — we've seen this event.
3. Set processing_status = 'processing' with row lock.
4. Run business logic in same transaction.
5. Set processing_status = 'done', return 200.

Why this matters: Stripe retries webhooks aggressively. Without idempotency, a network blip in your ack path causes duplicate processing. With this pattern, even 50 retries of the same event mutate state exactly once.

Common mistakes:
- Storing the event but doing business logic in a separate transaction. Don't.
- Returning 4xx on duplicate events. Don't. Stripe retries 4xx. Return 200.
- Using event timestamp as the dedupe key. Don't. Use event_id.

Anyone using a different pattern? Curious.

**Link strategy:** No link in OP. Comment-level link to `/services/stripe-integration` only if asked.
**Risk note:** r/Stripe is small but technical. Mods are reasonable. Avoid linking unless asked.

---

## Engagement and tracking

**Reply cadence.** For 6 hours after each post, reply to every top-level comment. Then taper to once per 6 hours for 48h. After 48h the post is dead — move on.

**Karma defense.** Never argue. If someone disagrees with a technical detail, ask what they've seen instead. Steelman the disagreement. People upvote curiosity.

**DMs.** If a thread converts to a DM (someone wants to know more about your services), confirm fit in 2 questions and route to a calendar link only after the second message. Never link your calendar in the first DM.

**Tracking.** UTM all comment-level links: `?utm_source=reddit&utm_medium=organic&utm_campaign=soft-launch&utm_content=post-NN`. Fire `social_click` GA4 event.

**Account hygiene.** If a post gets removed, take the note, ask the mod why (politely), and don't repost the same content elsewhere. Reddit communities talk to each other.
