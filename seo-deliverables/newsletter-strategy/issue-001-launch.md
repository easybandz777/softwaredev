# Issue 001 — Launch Tuesday

**Subject (A):** A new newsletter, written by me, every other Tuesday
**Subject (B):** I'm starting a newsletter — here's why, and what to expect
**Preview text:** Founder-written. One frank email every other Tuesday. Case studies, technical playbooks, founder hot takes, and real pricing intel. No marketing-team voice.

---

## Section 1: Why this newsletter exists (Case study substitute for launch issue)

This is issue 001 of the QUANT LAB Newsletter.

A few words on why I'm starting this. I run a software firm out of Macon, Georgia called QUANT LAB USA. We've shipped 14 client engagements in the first five months of 2026 — custom CRMs, Stripe Connect integrations, internal portals for clinics and operators, web-app and Active Directory penetration tests. We serve clients in 14 US cities through a remote-first model anchored by senior engineering ownership end-to-end. It's a small firm by design. The work is good.

What kept happening: every client engagement starts with the same five questions. Build vs. buy. How much. Why not Salesforce. Why pentest. How do I keep this from blowing up in 18 months. I'd answer each one on a sales call, then a week later get asked the same question by a different founder. Writing the answers down once is faster than re-explaining them every week. So that's what this newsletter is.

It is **not** a digest of blog posts. It is not "10 ways to grow your team." It is not a marketing-team broadcast disguised as personal writing. It is me, every other Tuesday, writing 1,500 words on something real I worked on, learned, or have an opinion about. Same voice I use on client calls. No throat-clearing.

The first batch of subscribers is roughly 80 founders, CTOs, and operators who finished the QUANT LAB email drip without booking a consult — meaning you found us interesting enough to opt into more email, but didn't have an urgent project. That's exactly the audience I'm writing to. You're 6 to 18 months from buying. You want signal, not noise. I'll try to be worth the inbox slot.

Five-section template every issue, in the same order, so you can skim if you're short on time:

1. **Case study deep dive** — a real project, the screw-ups included
2. **Technical playbook** — code, schemas, or architecture you can copy
3. **Founder hot take** — one strong opinion, loosely held
4. **Pricing and cost intel** — real numbers from real engagements
5. **One ask + sign-off**

If that's not interesting, the unsubscribe link at the bottom is one click. No drama, no win-you-back automation.

## Section 2: Technical playbook — the cheapest setup decision that paid off

The technical playbook for issue 001 is meta: it's the setup decision that made this newsletter sustainable to write.

I'm using Resend with a custom HMAC-signed double-opt-in flow that I built directly into the QUANT LAB site. No Mailchimp. No ConvertKit. No Beehiiv. The whole thing lives in one TypeScript file plus three Next.js API routes — subscribe, confirm, unsubscribe. The reason this matters: I don't want to be locked into a SaaS pricing tier or a templated WYSIWYG that nudges me toward "engagement optimization" tactics that don't fit the voice. The send infrastructure should be invisible.

If you're running a similar setup, the three things that matter:

1. **Double opt-in is mandatory.** Single opt-in is a deliverability time bomb. Every new subscriber HMAC-signs a confirmation token, clicks the link, then gets the welcome.
2. **`List-Unsubscribe` header in every send.** Gmail's one-click unsubscribe pulls from this header. Without it, you eat unsub-rate spikes in Gmail's algorithm and your domain reputation tanks.
3. **HMAC-signed unsubscribe URLs.** Don't store unsubscribe tokens in a table. Sign them at send-time, verify at click-time. Stateless, replay-safe, and you never have a "the unsubscribe link expired" support email.

I'll publish the full code in a future issue if there's interest. Hit reply and tell me if that's worth doing.

## Section 3: Founder hot take — the agency model is mostly broken

The custom software services market sits on a quiet dysfunction: most agencies optimize for billable hours, not for shipping good software. The structure rewards friction. Discovery phases that stretch. Scope debates that recur. Change orders that pile up. Engineers swapped onto new projects mid-build.

I don't think the answer is more process. I think the answer is smaller firms run by senior engineers who do the work, ship the work, and have something close to skin in the game on the outcome. The 50-to-500-engineer mid-market consultancy is the worst of both worlds: too large to be founder-led, too small to absorb true enterprise process overhead. That's the segment that gets hit hardest when AI-augmented engineering compresses pricing.

QUANT LAB's bet is that the future of the small-to-mid-market services tier is **boutique firms** (under 20 people, senior-led, transparent pricing) and **mega-shops** (1,000+, global delivery, full procurement). The middle compresses. Strong opinion. I'll be wrong about some of this. Loosely held.

## Section 4: Pricing and cost intel — what the first 14 engagements cost

The 14 client engagements through May 2026 break down roughly like this:

- **Single-engagement pentests** ($9K–$45K each): 4 engagements
- **CRM and operations platform builds** ($120K–$320K each): 5 engagements
- **Stripe Connect integrations** ($45K–$140K each): 3 engagements
- **HIPAA-aware internal portals** ($180K–$280K each): 2 engagements

Median engagement value: roughly $130K. Total billings across the 14: somewhere just under $1.9M. Of those 14, five converted into retainer relationships for ongoing work. That conversion rate — anchor MVP to retainer — is the single most important number in a services business, and 5 out of 14 is a healthy ratio for the firm.

If you're a founder reading this and you're working with numbers like these, you should know that the **mid-market $250K–$600K range is where pricing opacity is highest**. Most consultancies bury that tier behind sales-team intake. We don't. The full range is on the website. If you ever want a number sanity-checked, send the scope document via email.

## Section 5: One ask + sign-off

Two things to ask, both small.

**Reply to this email with one sentence on what you're actually working on.** I read every reply and respond within 48 hours. If you're trying to figure something out — build vs. buy, stack choice, pentesting a Next.js app, anything — that's what I'm here for.

**Forward this to one person.** If anything in this hit, send it to a founder or CTO who'd want it. New subscribers from forwards always have the highest engagement.

See you in two weeks — issue 002 lands on the Stripe Connect deposit-on-hold playbook, with the full schema and the three webhook bugs everyone hits.

— Bill

P.S. Reply "stop" any time and you're off the list inside 24 hours. No win-you-back automation. We honor it.

---

**Internal links to verify pre-send:**
- /newsroom (footer text reference)
- /work (case studies — for the engagement counts paragraph)
- mailto:beltz@quantlabusa.dev

**Expected sends:** ~80
**Target opens:** 55+ (70% open rate on launch issue — first-batch curated list)
**Target replies:** 8–12 (10–15% reply rate on launch issue)
