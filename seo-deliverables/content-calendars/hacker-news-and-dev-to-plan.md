# Hacker News + dev.to — Plan

3 Show HN drafts and 5 dev.to cross-post candidates for QUANT LAB USA INC.
Voice: technical, frank, evidence-first. No emojis. No fabricated metrics.

**Account setup before launch.**
- HN: account `quantlab` with karma above 50 from genuine comments over 4-6 weeks. Submit between 7-9am ET Tuesday-Thursday. Do not vote-ring.
- dev.to: account `quantlab-bill`. Bio links to `quantlabusa.dev`. Profile photo is Bill's real headshot. Add `#career`, `#webdev`, `#cybersecurity`, `#nextjs`, `#stripe` to follows.

**Universal rule on link strategy.** HN tolerates one canonical URL per submission. dev.to expects the post body to be the substance — link to QuantLab once at the end in a single "About the author" line. No mid-post CTAs.

---

## Show HN drafts — 3

### Show HN 01 — J5 Sales OS

**Submit on:** Day 25, Tue, 7:30am ET
**Title (HN format, under 80 chars):** Show HN: An operator-grade lead engine without ZoomInfo or Apollo (J5 Sales OS)
**URL:** https://quantlabusa.dev/work/j5-sales-os
**Submission text (HN allows ~200 words in the body):**

I'm Bill, a solo founder running a small dev studio in Macon, GA. Last year a B2B sales operator briefed me: build a lead engine that pulls qualified leads in niche verticals, without paying enterprise prices for tools that don't cover the niches well.

J5 Sales OS is the result. Key architecture decisions:

- Google Places API v2 Text Search for discovery, with a directory blocklist that filters out Yelp, BBB, Thumbtack, Angi, Yellowpages results. You get real businesses with real websites and phone numbers, not directory aggregators.
- Concurrent email scraper using cheerio with semaphore-bounded fetching, User-Agent rotation, and validation rules (filters out image references, malformed addresses, role-based addresses unless explicitly enabled).
- OpenAI for lead qualification scoring and personalized first-touch outreach generation.
- Full CRM pipeline with niche tagging, opportunity levels, solutions matching, assigned-to tracking.

Lead discovery dropped from hours per niche to minutes. Email-find rates for small-business niches ran significantly higher than what we measured from Apollo/Seamless on the same target lists.

The interesting work was the pipeline before the LLM — discovery filtering, scraping validation, email rules — not the prompting. OpenAI is the last 10% of the stack.

Happy to answer architecture questions on any layer.

**Comment seed (post within first 30 minutes by Bill or a friend):** "If you want the Google Places directory-blocklist rules and the semaphore concurrency code, I can paste in a reply." This trades karma for engagement and bumps the thread for the front-page algorithm.
**Risk note:** HN punishes anything that smells like marketing. Lead with architecture, not outcomes. Avoid superlatives. Treat the title as a description, not a claim.

### Show HN 02 — Wilder Recovery (chain-of-custody lot-management)

**Submit on:** Day 52, Thu, 8:00am ET
**Title:** Show HN: A defensible audit-trail platform for towing and repossession ops
**URL:** https://quantlabusa.dev/work/wilder-recovery
**Submission text:**

I'm Bill. We built a custom lot-management platform for a professional towing, recovery, and repossession operator. The interesting part for an HN audience is the data model — chain-of-custody is a real legal exposure in this industry, and paper workflows don't safely cover it.

Data model has separate entities for:

- Vehicle records (status, keys, locked/unlocked, running, damage notes, hold reasons, legal hold, owner, lienholder, case number, pickup origin, release auth)
- Photos by category (intake, damage, plate, VIN, interior, property, release)
- Documents by category (tow slip, repo auth, release form, ID verification, transporter, internal)
- Status history (full state-transition log)
- Personal property inventory with bag-tag tracking and partial-release events
- Release records (releasedTo, ID verification, release type, authorization)
- Immutable audit log capturing user, action, entity type, entity ID, before/after JSON

Built on Next.js 16 + React 19 + NextAuth v5 + Prisma + Postgres. Role-based access for admin, management, dispatcher, driver, viewer.

The hard architecture decisions were around the audit log (append-only, with hash-chained entries to detect tampering) and the inventory release model (partial releases of property items across multiple events with different recipients).

Happy to walk through the schema if there's interest.

**Comment seed:** "I'll paste the audit-log schema in a reply if useful — the hash-chaining pattern is the part I'm most proud of."
**Risk note:** Niche industry but HN historically rewards real schema discussions. Title is plain, not buzzword-y. Avoid "platform" if possible — say "system."

### Show HN 03 — HobbsPeak digitizer

**Submit on:** Day 76, Tue, 8:00am ET
**Title:** Show HN: An AI-assisted artwork digitizer for a custom headwear brand
**URL:** https://quantlabusa.dev/work/hobbspeak
**Submission text:**

I'm Bill. We built HobbsPeak.com — a headless commerce platform for a custom headwear and apparel brand — and the technically interesting subsystem is the artwork digitizer, which I think other HN readers might want to dig into.

Pipeline:

1. Customer uploads artwork (PNG/JPG/SVG/PDF).
2. `@imgly/background-removal` strips backgrounds in-browser via ONNX runtime.
3. `tesseract.js` runs OCR pass on detected text regions.
4. `potrace` traces raster regions into clean vector paths.
5. `opentype.js` handles font detection and re-rendering where applicable.
6. AI-assisted preview generation via `/api/digitize-ai-preview` returns a customer-facing proof in under 60 seconds.
7. Owner reviews and approves the digitized output; production-ready files are stored in Vercel Blob.

Benchmark suite (`bench:digitizer`) validates output quality against a known-good corpus on every PR. Most-day proofs return same-day.

Stack: Next.js 16, React 19, Stripe, Neon Postgres, Vercel Blob, EasyPost, S&S Activewear API for live wholesale catalog sync.

The artwork pipeline is where most of the engineering went. Happy to walk through any layer in detail.

**Comment seed:** "If anyone wants the benchmark methodology — known-good corpus, deltas, scoring rules — I can paste it in a reply."
**Risk note:** This is the strongest of the three for HN because the digitizer is genuinely novel pipeline work. Keep the title narrow ("for a custom headwear brand") so it doesn't read as a generic SaaS pitch.

---

## dev.to cross-post candidates — 5

Each entry maps a planned QuantLab blog post → dev.to platform → rewritten title for the dev.to audience. dev.to readers are technical and reward depth + code samples.

### Cross-post 01

**Source blog:** Planned "Stripe Webhook Idempotency in Production" deep-dive
**dev.to title rewrite:** "The 30-Minute Stripe Webhook Pattern That Prevents Your First Refund Storm"
**Tags:** `#stripe #webdev #nextjs #postgres`
**Body structure (1,200-1,600 words):**
1. The failure mode (real anecdote — a duplicate `payment_intent.succeeded` causing double-credit).
2. Why signature verification isn't enough.
3. The three-layer pattern: signature + idempotency table + dashboard-as-log.
4. The idempotency table schema (Postgres `stripe_events`).
5. The webhook handler flow in pseudocode + a TypeScript/Next.js route handler example.
6. Common mistakes: returning 4xx on duplicates, separate-transaction processing, using event timestamp as dedupe key.
7. Migration path if your current integration is already in production and missing this.
**Closing:** "I'm Bill at quantlabusa.dev — we ship production Stripe integrations as part of /services/stripe-integration. DM me if you want a free 30-minute audit of your current webhook handlers."
**Why this works on dev.to:** Stripe content is evergreen on dev.to. The 30-minute hook is concrete, the code samples are immediately copyable, and there's no fluff.

### Cross-post 02

**Source blog:** Planned "Inside an AD Pentest: From Standard User to Domain Admin"
**dev.to title rewrite:** "Reading an Active Directory Pentest Report Like a Pro (And What Yours Should Look Like)"
**Tags:** `#security #cybersecurity #devops #infosec`
**Body structure (1,400-1,800 words):**
1. The difference between a vuln scan and a real pentest (1 paragraph).
2. What the deliverable should include — attack chain narrative, MITRE ATT&CK mapping, exec summary, prioritized remediation roadmap, technical report.
3. Sanitized walkthrough of an attack chain from one of our engagements (reconnaissance → credential spraying → Kerberoasting → ADCS abuse → Domain Admin). Screenshots redacted, technique-by-technique narrative.
4. Why ADCS misconfigs (ESC1, ESC8) are the highest-ROI attack path in mid-market AD.
5. What to ask the next pentest vendor before signing.
**Closing:** "I'm Bill at quantlabusa.dev. We deliver pentests with this kind of report format under /services/active-directory-pentest. Happy to send a sample (redacted) if you DM."
**Why this works on dev.to:** dev.to is hungrier for offensive-security content than people expect. The "what should yours look like" framing converts SMB IT leaders.

### Cross-post 03

**Source blog:** Planned "Bi-Directional QuickBooks Online Sync in Practice"
**dev.to title rewrite:** "Five Failure Modes of Bi-Directional QuickBooks Online Sync (And How to Survive Them)"
**Tags:** `#webdev #postgres #typescript #integrations`
**Body structure (1,200-1,500 words):**
1. The problem — keeping customers/vendors/items in two systems without drift.
2. Failure mode 1: parallel edits. Conflict resolution strategy per entity.
3. Failure mode 2: partial sync failure. Idempotency table pattern (similar to Stripe).
4. Failure mode 3: token refresh. Why refresh logic must be separate from sync logic.
5. Failure mode 4: pagination drift. Use syncToken not offset+limit.
6. Failure mode 5: rate limit on burst writes. Backoff + jitter.
7. Architecture summary: scheduled + on-demand sync triggers, state machine per entity, Postgres for sync state.
**Closing:** "I'm Bill at quantlabusa.dev. We built this layer for Bridgepointe Painting — see the case study at /work/bridgepointe-painting."
**Why this works on dev.to:** Integration content with real failure modes ranks well. Code samples for the conflict-resolution rules will drive bookmarks.

### Cross-post 04

**Source blog:** Planned "Mobile-First for Field Estimators: What Northcrest Fence Taught Us"
**dev.to title rewrite:** "Building Software That Estimators Actually Use in the Truck"
**Tags:** `#webdev #nextjs #react #ux`
**Body structure (1,000-1,400 words):**
1. The brief — estimators in a field-services business need to quote on-site from a phone.
2. Why responsive web ≠ mobile-first for this use case.
3. Network assumptions: intermittent rural connectivity, queue + retry on submit, offline state preservation.
4. Touch-first UX decisions: large hit targets, no drag-and-drop, slider+number inputs for materials counts.
5. The PDF generation pipeline (`@react-pdf/renderer`) — server-side, brand-aligned, transactional delivery via Resend.
6. The metric that mattered: proposal turnaround from 1-3 business days to under 30 minutes.
**Closing:** "I'm Bill at quantlabusa.dev. Case study at /work/northcrest-fence."
**Why this works on dev.to:** "Software for non-tech users" is a sticky topic. The PDF pipeline section will get bookmarked.

### Cross-post 05

**Source blog:** Planned "Building a Google Places Lead Pipeline Without Apollo"
**dev.to title rewrite:** "How to Build a B2B Lead Pipeline With Google Places API (and Skip the $1,200/Month Tools)"
**Tags:** `#api #webdev #sales #nodejs`
**Body structure (1,200-1,600 words):**
1. The problem — niche-vertical B2B lead gen is poorly covered by ZoomInfo/Apollo.
2. Why Google Places API v2 is underrated for this.
3. The directory blocklist — full list of domains to filter (Yelp, BBB, Thumbtack, Angi, Yellowpages, etc.).
4. Concurrent email scraping with cheerio, semaphore-bounded fetching, User-Agent rotation.
5. Email validation rules: filter image references, role-based addresses (`info@`, `noreply@`), malformed addresses.
6. Optional: OpenAI for qualification scoring and outreach generation.
7. Cost comparison: Google Places API costs vs Apollo seat pricing for the same workload.
**Closing:** "I'm Bill at quantlabusa.dev. The full architecture is at /work/j5-sales-os."
**Why this works on dev.to:** Cost-aware engineering content always performs. The "skip the $1,200/month tool" framing is dev.to-native.

---

## Promotion and follow-up

**HN.** After submission, do not comment in your own thread for the first 60 minutes — let it find an audience. Then reply substantively to top comments. If the post hits the front page, the comments are the gold; respond technically, never defensively.

**dev.to.** Cross-comment on related top posts in the 48 hours after publish. Add value, then your post will appear in the "related" sidebar on those threads. Don't beg for follows. The platform punishes it.

**Repurposing.** Each dev.to post can be cut into 4-5 LinkedIn slices, 2-3 X threads, and a single Reddit deep-dive. Don't post the same text — rewrite for tone per platform.

**Tracking.** UTM all in-body links from HN/dev.to: `?utm_source=hn|devto&utm_medium=organic&utm_campaign=2026-q2-cal&utm_content=show-hn-NN|devto-NN`. Fire `social_click` GA4 event.

**Submission timing rules.**
- HN: Tue/Wed/Thu 7-9am ET. Avoid Mondays (oversaturated), Fridays (algorithm dies), weekends (audience splits).
- dev.to: Tue/Wed/Thu 8-10am ET or 1-3pm ET. The algorithm rewards consistency more than timing — aim for one publish per 2 weeks, not bursts.
