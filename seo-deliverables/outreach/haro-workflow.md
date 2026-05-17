# HARO Workflow - Daily Journalist Query Response Discipline

**Owner:** Bill Beltz - beltz@quantlabusa.dev
**Goal:** 1-3 published quotes per month after 60 days of consistent activity; 3-5/month after 90 days.

This is the daily workflow for responding to journalist queries across HARO-style platforms. The discipline is more important than the volume - 5 substantive responses per week beats 50 sloppy ones.

---

# Active platforms

Sign up for ALL of these in Week 1 (free except where noted). Daily query digests overlap; the more platforms you are on, the more inbound queries you see.

| Platform | URL | Cost | Setup time | Query cadence |
|----------|-----|------|------------|---------------|
| Featured.com | featured.com/experts | Free | 30 min | 5-15 queries/day |
| Qwoted | qwoted.com | Free (vetted application) | 60 min app | 8-20 queries/day (premium outlets) |
| Source of Sources | sourceofsources.com | Free | 5 min | 2x/day digest |
| SourceBottle | sourcebottle.com | Free | 15 min | 1x/day digest (US/AU/UK) |
| Help A B2B Writer | helpab2bwriter.com | Free | 10 min | 1x/day digest (B2B-only) |
| #JournoRequest on X | x.com/search?q=%23JournoRequest | Free | 10 min (X account active) | Real-time |
| Featured.com competitor: Terkel.io | terkel.io | Free | 15 min | 1x/day |

**Time to set up all 7:** ~2.5 hours total in Week 1.

---

# The 3x daily scan rhythm

## Morning scan: 9:00-9:30 AM ET

- Check all overnight digests (Source of Sources, SourceBottle, Help A B2B Writer, Featured.com inbox, Qwoted inbox, Terkel.io)
- Identify queries matching your expertise (see "Topic filters" below)
- For each match: 5-15 min response, send immediately
- Cap: 5 responses per morning scan

## Midday scan: 1:00-1:30 PM ET

- Check the second SOS digest of the day
- Scan #JournoRequest on X for last 2 hours of queries
- Respond to any time-sensitive queries (same-day deadlines)
- Cap: 3 responses per midday scan

## End-of-day scan: 5:00-5:30 PM ET

- Final pass on Featured.com and Qwoted (premium outlets often queue queries late)
- Scan #JournoRequest for end-of-day journalist posts
- Catch any urgent same-day deadlines
- Cap: 2 responses per end-of-day scan

**Daily max:** 10 responses
**Weekly max:** 50 responses
**Realistic sustainable rate:** 20-30 responses per week (5-6/day average)

---

# Topic filters - what to respond to

## ALWAYS respond when these topics come up:

- Custom software development for SMB
- Stripe / payments integration
- Multi-tenant SaaS architecture (Postgres RLS specifically)
- Penetration testing methodology
- MITRE ATT&CK adoption
- Cyber insurance pentest scoping
- SOC 2 compliance for SMB
- Startup CTO topics (bootstrapping, agency-to-product transition)
- AI engineering for sales / CRM tooling
- Vertical SaaS go-to-market
- Trades and service-business technology
- Solo founder / non-coastal founder life
- Georgia / Atlanta / Macon tech ecosystem

## RESPOND CAUTIOUSLY (only if you have a real angle):

- Generic "best tech stack for 2026" questions
- "Top productivity tools" listicles
- Founder-mindset content
- "Predictions for 2027" pieces (only if you can be specific)

## DO NOT RESPOND:

- Anything you cannot back with a verifiable client outcome or methodology
- Crypto / web3 topics (not in QL's lane)
- Personal finance, dating, parenting, lifestyle (not in QL's lane)
- Anything in industries QL has not worked in (you cannot fake it)
- Anything that requires a credential you do not have (medical, legal, financial advisory)

---

# The response template

See `templates/expert-quote-source.md` for the full template with all the do's and don'ts. Quick reference:

```
Hi [Journalist First Name],

Bill Beltz here, founder of QUANT LAB USA - a custom software and cybersecurity firm in Macon, GA. Here is my response to your query on [TOPIC]:

[Paragraph 1 - direct answer, opinionated, position stated in sentence 1]
[Paragraph 2 - specific client outcome / data point / methodology]
[Paragraph 3 (optional) - actionable takeaway]

**About me:** [50-word bio from credentials-bank.md]

**Available for:**
- Direct quote in the article
- Follow-up interview (15-30 min)
- Anonymized screenshots / data
- Intro to a client who would speak on record (if relevant)

Bill Beltz
QUANT LAB USA - quantlabusa.dev
beltz@quantlabusa.dev | (770) 652-1282
LinkedIn: linkedin.com/in/williambeltz
```

---

# Examples of strong responses

The single biggest gap between responses that get published and responses that don't is *specificity*. Below are templates for the most common query categories. Adapt with current numbers.

## Example 1 - "Best Stripe integration practices for SaaS"

[Topic: payments / SaaS / Stripe]

**Response opening:**
> Most Stripe integration failures we see in production are not API misuse - they are webhook handlers that assume retries will not happen. Retries will happen. Often 18 hours after the event, sometimes after 5 days.

**Paragraph 2 (client outcome):**
> I built a Stripe webhook idempotency layer for a regional broadcaster's multi-tenant SaaS (Clear Channel Broadcast Group, 3 stations, $25K/yr in vendor licensing replaced). The handler dedupes by Stripe's event.id, expires keys at 5 days (Stripe's max retry window), and is now open-source at github.com/quantlabusa/stripe-webhook-idempotency-ts. Tests cover 18 scenarios including the "Stripe replayed an event after 4d 23h" edge case that bit us in production.

**Paragraph 3 (actionable):**
> Three things every SaaS Stripe integration should have before production: (1) idempotency keys with 5-day expiry, (2) webhook signature verification on every endpoint (not just /webhooks), (3) a dedicated Stripe sandbox project per environment, not shared.

---

## Example 2 - "Cybersecurity tips for small business owners"

[Topic: cybersecurity / SMB]

**Response opening:**
> The cybersecurity gap at sub-$10M-revenue companies is not technical - it is procurement. Small business owners cannot evaluate a $45K Big-4 pentest scope against a $5K boutique scope, so they default to "we already have antivirus."

**Paragraph 2 (client outcome):**
> Last quarter I ran a full Active Directory pentest at a regional financial services firm. Their previous vendor's scans came back clean three weeks before we arrived. Our chain went standard user credential → Kerberoasting → ADCS certificate template abuse (ESC1) → Domain Admin in eleven distinct techniques, every step mapped to MITRE ATT&CK. The compliance audit they were prepping for had passed in 2024 with the same scan baseline.

**Paragraph 3 (actionable):**
> Three things every SMB should do before paying for a pentest: (1) verify the engagement is MITRE ATT&CK-aligned (not just Nessus scans repackaged), (2) ask for the report template upfront - if it is CVSS-only, it will not help the board conversation, (3) scope the engagement to cyber-insurance and compliance windows (typically $10-15K for SMB), not enterprise-tier budgets.

---

## Example 3 - "Advice for solo / bootstrapped founders"

[Topic: founder / startup CTO / bootstrapping]

**Response opening:**
> The hardest part of running a solo dev shop with 14 clients is not technical - it is the maintenance burden. Each shipping client system is a system that breaks at 11 PM on a Tuesday, and there is no one else on call.

**Paragraph 2 (data point):**
> I have run QUANT LAB USA solo for 18 months: 14 production builds, profitable from month one, zero outside capital. The math works because I niched into blue-collar trades and SMB pentest - verticals Atlanta agencies skip and offshore agencies cannot service. The customer is a 55-year-old fencing contractor, not a Series A founder. That changes how everything from sales to support gets designed.

**Paragraph 3 (actionable):**
> Three things I would tell another solo founder in year 1: (1) require a 50% deposit before any kickoff - no exceptions, this is what saves you from cash-flow gaps, (2) niche down before you have the right to - I picked trades before I had a single trades client, and the focus made every subsequent sale easier, (3) build your maintenance dashboard before you need it - Sentry + a single status page that fits on one screen.

---

## Example 4 - "AI in sales / SaaS"

[Topic: AI engineering / sales / vertical SaaS]

**Response opening:**
> The AI in most AI-sales tools is the easy part. The hard part is filtering directory aggregators. If your lead-discovery returns 60-80% Yelp pages and BBB landing pages, no amount of GPT polishing will turn those into real leads.

**Paragraph 2 (client outcome):**
> We built J5 Sales OS as an internal tool for our agency's own sales motion. The differentiator is the directory blocklist - Yelp, BBB, Yellowpages, Thumbtack, Angi are filtered by default. What comes out is real businesses with real phone numbers. After 18 months of internal use, we productized it and landed the first paying customer cohort earlier this year. The first 10 customers are sales teams at regional service businesses across the Southeast.

**Paragraph 3 (actionable):**
> Three things to check before adopting any AI sales tool: (1) ask for a 20-lead test export - if it has aggregators, you will pay for spam, (2) check whether the AI is doing qualification (useful) or just outreach generation (less useful - generic outreach gets ignored), (3) compare per-seat vs per-niche pricing - per-niche models can be cheaper for teams that target 1-2 verticals.

---

# Tracking responses

Log every response in `tracking-tracker.md` in the HARO daily log section. Required fields:

- Date
- Platform (Featured.com / Qwoted / SOS / SourceBottle / Help-A-B2B-Writer / Terkel / X)
- Journalist name
- Publication
- Query topic (one-line summary)
- Response time (minutes from query receipt to send)
- Was the quote published? Y/N (update on publication)
- Publication URL (when published)
- DR of publication
- Backlink type (dofollow / nofollow)
- Notes (e.g., "first paragraph quoted verbatim" / "linked to quantlabusa.dev/work")

After 30 days of logging, this becomes the data to analyze:
- Which platform converts highest?
- Which topic categories convert highest?
- Which times of day get the most matches?
- What response time (minutes) correlates with publication?

---

# Hard rules

- Respond within 4 hours when possible; 24 hours absolute max
- Never lie about credentials or invent numbers
- Always cite a verifiable client outcome OR a verifiable methodology
- Always include the 50-word bio + URL at the end
- Never respond to a query you cannot speak to honestly
- Never spam journalists - 1 response per query per source per quarter
- If a journalist asks for follow-up, prioritize that immediately - it is 10x more likely to result in publication

---

# When a quote lands

1. Update tracking-tracker.md with the publication URL
2. Verify the backlink type (view source / right-click "inspect" on the link to quantlabusa.dev)
3. Share the article on LinkedIn (personal + company), X, and dev-relevant communities
4. Email the journalist a thank-you with one substantive comment on the article (NOT a "thanks!" - actual feedback)
5. Add the journalist to a "Past collaborators" list in your CRM - they will be open to future pitches
6. If the article did NOT link to quantlabusa.dev, email the journalist within 48 hours politely asking if they could add the link (50% of the time they will; the other 50% have policy reasons not to, which is fine)

---

# Compounding effects

After 60 days of consistent activity:
- Journalists you have quoted before begin to tag you on relevant new queries
- Your response template gets faster (drop from 15 min/response to 5-7 min)
- Your bio + credentials are pre-built, so the overhead per response shrinks
- Publication frequency moves from 1-2/month to 3-5/month

The 60-day consistency mark is the unlock. Many sources quit before they hit it. The math:
- Days 1-30: ~1 publication
- Days 31-60: ~2-3 publications
- Days 61-90: ~4-5 publications
- Days 91+: ~5-8 publications per month, sustained

Each publication is a dofollow (or branded mention) backlink from a DR 50-90+ outlet. After 6 months of discipline, this is 30-50 high-DR backlinks - more than any other channel in this 12-week plan combined.

---

# When NOT to do HARO

HARO is a poor fit when:
- You cannot commit to the daily scan (3x/day baseline)
- You are not willing to write responses with real specifics (generic responses do not land)
- Your topic expertise is too narrow (you will see 2-3 matches/month, not 15-30)
- You are pitching for one specific publication only (HARO is breadth, not depth)

For QL, none of these apply - the topic surface is wide (software, cybersecurity, SaaS, AI, founder, Georgia tech, trades), and the daily discipline pays back.

---

# Cross-references

- Response template: `templates/expert-quote-source.md`
- Bio snippets to paste: `credentials-bank.md`
- Tracking: `tracking-tracker.md` HARO daily log section
- Top 10 priority items: `PRIORITY-50.md` ranks 8, 9, 31, 32, 33, 34
