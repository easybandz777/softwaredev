# QUANT LAB USA — 5-Email Nurture Sequence

**Trigger:** New lead downloads lead magnet (Build vs. Buy Decision Guide OR Web App Pentest Checklist)
**Voice:** William Beltz, founder. First-person, conversational, anti-fluff, specific.
**From line (recommended):** `William Beltz <beltz@quantlabusa.dev>` (plain personal name beats branded "QuantLab Team" for opens by ~15-25% in founder-led B2B)
**Alt from line:** `William @ QuantLab USA <beltz@quantlabusa.dev>` (use this if testing identity-led vs founder-name)

---

## Email 1 — Day 1 (immediate, post-download)

**Subject:** Your guide is attached — plus what's next
**Preheader:** Quick note from me on what to expect over the next two weeks. (72 chars)
**From:** William Beltz <beltz@quantlabusa.dev>

**A/B subject alternates:**
1. Here's your guide (and a heads-up)
2. Got it — guide attached
3. Your download + 30 seconds from me

**Body:**

Thanks for grabbing the guide. The link is here: [LEAD_MAGNET_URL]

A few things you should know before I take up any more of your inbox:

This isn't a 14-email "drip from the marketing team." It's me — William, the guy who actually builds the software at QuantLab USA. I'm going to send you 4 more emails over the next two weeks. Then I'll shut up unless you tell me otherwise.

Here's what's in those emails:
- Day 3: A case study from a client who faced the same decision you're probably facing
- Day 5: A technical framework I use myself (no pitch, just the framework)
- Day 8: One soft pitch — a 30-min Zoom if you want to talk through your situation
- Day 14: A short "still around?" check-in

If you ever want to skip the rest, just reply "stop" and you're out. No hard feelings, no funnel.

In the meantime — what's the one thing you're actually trying to figure out? Build vs. buy? Pentesting a Next.js app? Stack choice? Hit reply with one sentence. I read every email myself and reply within a day (usually faster).

— William

**P.S.** If you're in a hurry, my direct line is (770) 652-1282. Text works. I won't pick up if I'm in deep work, but I'll call back same day.

**CTA:** Reply with one sentence on what you're trying to figure out.

---

## Email 2 — Day 3

**Subject:** How HobbsPeak skipped Shopify (and saved $40k/yr)
**Preheader:** Real numbers from a client who faced the same call you might be facing. (75 chars)
**From:** William Beltz <beltz@quantlabusa.dev>

**A/B subject alternates:**
1. A client story I think you'll want to see
2. They almost paid Shopify $50k. Then they called me.
3. Custom build vs. Shopify — what one client did

**Body:**

Following up on the guide.

Last year a company called HobbsPeak came to me with the exact decision you might be sitting with right now: pay for a Shopify Plus + apps stack (~$50k/yr in subscriptions, plus 2.9% transaction fees) or build something custom.

The math everyone gets wrong: people compare Shopify's monthly fee to dev cost and call it a day. They forget about the per-transaction tax, the app stack ($800-$2k/mo once you need real functionality), the lock-in, and the moment a feature you need just doesn't exist in any plugin.

What we built for HobbsPeak: a Next.js + PostgreSQL + Stripe stack, deployed on their own infrastructure. Project cost ran low five figures. They own the code. No per-transaction tax. Year-one savings vs. the Shopify path were close to $40k, and that gap widens every year.

The build-vs-buy decision isn't really about cost. It's about whether your edge depends on something a SaaS template can give you. For HobbsPeak, it did — they needed pricing logic Shopify won't support without ugly hacks.

If any of this sounds like the math you're running, reply and tell me what stack you're weighing. I'll give you a straight answer, even if the answer is "stay on Shopify."

— William

**P.S.** Not every client should build custom. I've told three people this month to stick with their SaaS. The guide's framework will tell you which side of the line you're on.

**CTA:** Reply with your stack + situation.

---

## Email 3 — Day 5

**Subject:** The "Three Failure Modes" framework
**Preheader:** A 4-minute read I use to sanity-check every project I take on. (66 chars)
**From:** William Beltz <beltz@quantlabusa.dev>

**A/B subject alternates:**
1. A framework you can use even if we never talk
2. How I decide which software projects to take
3. Steal this framework (no pitch attached)

**Body:**

No pitch in this one. Just a framework.

When I look at a software project — mine or someone else's — I run it through three failure modes before I commit. If it can't survive all three, it doesn't get built.

**1. The Bus Test.** If the lead engineer gets hit by a bus tomorrow, can someone else ship the next release in 30 days? If no, your code is a hostage situation. The fix: written docs in the repo, no clever one-liners, boring tech (Postgres > whatever's trendy), and a deploy that runs from a single command.

**2. The Stripe Test.** If your payment processor changes their API or pricing tomorrow, how much of your stack breaks? Most teams have Stripe wired into 40 different places. The fix: one payments module, one interface, everything else calls it. Same logic for any third-party — auth, email, search.

**3. The 3am Test.** If something breaks at 3am, can the on-call person diagnose it without you? If your logs say "Error: undefined" and your monitoring is whatever Heroku gave you for free, you fail this test. The fix: structured logs, real observability (we use Datadog / Sentry depending on budget), and runbooks for the top 5 incidents.

Most apps I see fail at least one of these. The most common is #2 — too much coupling to third-party APIs.

Run your own stack through this. Tell me what you find. Or don't — either way, you've got the framework.

— William

**P.S.** If this is useful, forward it to one engineer or founder who'd benefit. That's the whole ask today.

**CTA:** Forward this to a colleague (one specific person).

---

## Email 4 — Day 8

**Subject:** Want me to look at your situation?
**Preheader:** 30 minutes, free, no pitch. Diagnostic only. Here's what we'd cover. (74 chars)
**From:** William Beltz <beltz@quantlabusa.dev>

**A/B subject alternates:**
1. 30 min, no pitch — just diagnosis
2. Worth a quick Zoom?
3. Let me actually look at your stack

**Body:**

Soft pitch time. Skip if you're not in a buying window.

If you've read the guide and the last three emails and there's still something you're chewing on — let's talk. 30 minutes, Zoom, on me.

Not a sales call. I don't do those well anyway. What I do is diagnostic: you tell me what you're building (or what's broken), I ask the questions that actually matter, and at the end you walk away with a clearer picture of what to do next. Sometimes that's "hire QuantLab." Sometimes that's "you're fine, don't change anything." Sometimes it's "go talk to this specific other firm, they're better for your use case."

What we'd cover:
- Your current stack and where it hurts
- The actual technical risk in your roadmap
- Whether the build/buy/refactor decision in front of you is the right one
- A rough estimate (range, not a quote) if you wanted us to do the work

You don't get a contract pitch at the end. You get a follow-up email with the notes.

Book a slot here: [CALENDLY_LINK]

If nothing on that calendar works, reply with two times that do and I'll make them work.

— William

**P.S.** If you'd rather just send me the technical context in writing, that's fine too. Reply with a paragraph and I'll send back a written take. Async works.

**CTA:** Book a 30-min Zoom — [CALENDLY_LINK]

---

## Email 5 — Day 14

**Subject:** Still around?
**Preheader:** One question, one-word answer. Two weeks of emails ends here. (62 chars)
**From:** William Beltz <beltz@quantlabusa.dev>

**A/B subject alternates:**
1. Last one — Y or no reply
2. Wrapping this up
3. One word from you?

**Body:**

Last email from me.

Two weeks ago you grabbed the guide. I've sent four follow-ups. You haven't booked anything, which is fine — most people don't, and it doesn't mean you should.

Quick two-option close:

**Still interested, just busy?** Reply with "Y" and I'll keep you on a quieter list — maybe one email a quarter when I write something worth your time.

**Want out?** Don't reply. I'll move you off the list and you'll never hear from me again. No unsubscribe form, no friction.

That's it. No third option, no clever copywriting.

— William

**P.S.** If you're a past QuantLab client reading this (the list catches a few of you) — would you drop a quick Google review? It genuinely helps the business and takes 30 seconds: https://g.page/r/CbkSyF5E2JFtEBM/review

**CTA:** Reply "Y" — or don't.

---

# Sequence Settings

## Enrollment Rules
- **Trigger:** Lead submits form on `/lead-magnet/build-vs-buy` OR `/lead-magnet/pentest-checklist` (any landing page tied to a magnet)
- **Source field:** Tag with `magnet_source` (e.g., `build-vs-buy-guide`, `pentest-checklist`) so future Email 2 case study can be dynamically swapped per magnet
- **Delay between emails:** As specified (Day 1 immediate, then +2d, +2d, +3d, +6d)
- **Send window:** Tues-Thurs, 9-11am ET only. Skip weekends and holidays. Queue Friday/Saturday downloads to Monday's 9am window.
- **Throttle:** Max one nurture email per lead per day. If lead is in multiple sequences, prioritize most recently enrolled.

## Exclusion Rules (do NOT enroll)
- Existing clients (tagged `client_active` or `client_past` in CRM)
- Anyone who has booked a call in the past 90 days
- Anyone currently in an active sales conversation (`sales_pipeline_stage` is not null)
- Anyone who replied to a previous QuantLab email in the past 30 days (they're already engaged — don't drip them)
- Free-email-domain leads with no company name (lower-intent — route to lighter "value-only" sequence if it exists)
- Hard-bounced emails from any prior send

## Auto-Exit Triggers (remove from sequence)
- Lead replies to ANY email in the sequence → exit, route to William's inbox, mark as `hot_reply`
- Lead books a call via Calendly link → exit, route to sales pipeline
- Lead clicks the GBP review link → exit (they're a past client)
- Lead unsubscribes or marks spam → exit, suppress globally
- Lead opens 0 of the first 3 emails → exit at Day 8 (don't waste sends 4 & 5)

## Tracking Events to Wire Up
| Event | Where | Why |
|---|---|---|
| `email_opened` | Per email, per lead | Open-rate benchmarking, A/B subject lines |
| `email_clicked` | Per CTA URL | CTR per email — find the strongest converter |
| `lead_replied` | Inbound to beltz@quantlabusa.dev | Reply rate is the real KPI for founder-led nurture |
| `magnet_redownload` | Lead magnet URL | Indicates intent spike |
| `calendly_booked` | Calendly webhook | Goal conversion |
| `unsubscribed` | Mailer unsubscribe webhook | Sequence-level health metric |
| `gbp_review_click` | UTM-tagged review link | Bonus: tracks Email 5 review pull-through |

Wire all of these into PostgreSQL `email_events` table with `lead_id`, `event_type`, `email_step`, `ts`. Dashboard them in the existing admin panel.

## A/B Test Ideas (run in order of priority)

1. **Subject line on Email 1** — open rate is the gateway to the whole sequence. Test "Your guide is attached — plus what's next" vs. "Got it — guide attached." Winner becomes control.
2. **From line identity** — test `William Beltz` vs. `William @ QuantLab USA` across all 5 emails. Founder-name typically wins in B2B but verify.
3. **Email 4 CTA** — test "Book a 30-min Zoom" vs. "Reply with two times." Calendly link vs. async reply path may shift conversion for different lead segments.
4. **Email 2 subject** — test specific-number subjects ("$40k/yr") vs. story-led ("client story I think you'll want to see"). Specifics usually win.
5. **Email 5 length** — test current short version vs. a longer "here's everything we covered" recap. Short usually wins on re-engagement but worth verifying.
6. **Send-time test** — Tues 9am ET vs. Wed 10am ET vs. Thurs 9am ET. Run 4 weeks per cell.
7. **P.S. content on Email 1** — test phone-number P.S. vs. a P.S. linking to a second resource. Phone usually feels personal but may scare some segments.

## KPIs to Watch (per cycle of 100 leads)
- Email 1 open rate: target >55% (founder-from-line + immediate trigger)
- Email 1-5 average CTR: target >4%
- Reply rate across sequence: target >6% (this is the unfair advantage of founder-led)
- Calendly bookings: target >2 per 100 leads
- Unsubscribe rate: keep under 3% (above that, the sequence is too aggressive)
