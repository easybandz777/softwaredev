# YouTube Channel Plan — QUANT LAB USA

## Channel identity

- **Channel name:** QUANT LAB USA
- **Handle:** `@quantlabusa`
- **Banner tagline:** Custom software, honest answers. Macon, GA.
- **Profile image:** logo-transparent.png (already in /public)
- **Banner image:** 2560x1440, dark indigo gradient, founder photo on left, tagline center, three pillars on right (Custom Software / Cybersecurity / Trading Systems).
- **Channel keywords:** custom software development, custom CRM, Stripe integration, penetration testing, MITRE ATT&CK, Next.js development, algorithmic trading, founder vlog, Macon Georgia, small business software.
- **Contact email (channel about):** beltz@quantlabusa.dev
- **Website link:** https://quantlabusa.dev

## About-page text (200 words)

> I am Bill Beltz, founder of QUANT LAB USA INC, a custom software and cybersecurity firm based in Macon, Georgia. I build production-grade web applications, CRMs, Stripe integrations, licensing systems, and algorithmic trading bots — and I harden them with professional penetration testing aligned to the MITRE ATT&CK framework. I work directly with every client. No account managers, no offshore handoffs, no agency overhead baked into your invoice.
>
> This channel is the unfiltered version of that work. You will see real code, real architecture decisions, real numbers on what things cost and how long they take. I do not sell courses. I do not pitch a SaaS. The only reason I publish is so founders, operators, and engineers can find honest answers when they go searching at 11pm on a Tuesday — because that is when I would have wanted them.
>
> Topics in rotation: custom software vs SaaS trade-offs, Stripe integration patterns that survive production, penetration testing demystified, SOC 2 prep without paying $40k for compliance theater, and trading-system architecture for serious quants. New video most weeks.
>
> If something here saves you a week of work, my contact form at quantlabusa.dev is the way to say thanks.

## Playlist structure

Four playlists, each with a clear thumbnail color so the channel grid scans cleanly.

### 1. Software Development (indigo)
The "build it right" track. Architecture, framework choice, integration patterns, deployment, debugging in production. Audience: founders deciding what to build, engineers evaluating stacks.

### 2. Cybersecurity (red)
Pentest walkthroughs, MITRE ATT&CK explainers, SOC 2 prep, common web app vulnerabilities, hardening checklists. Audience: founders facing a compliance deadline, security curious devs, sysadmins.

### 3. Founder Vlog (gold)
Behind-the-scenes of running a solo software firm. Pricing decisions, client horror stories with names changed, why I quit consulting at $X, why I picked Macon. Audience: aspiring solo founders, current freelancers thinking about productizing.

### 4. Case-Study Deep-Dives (emerald)
Real shipped client work, walked through end-to-end. NorthCrest Fence's job-tracking CRM. Northstar Trading Desk's multi-strategy execution layer. The Active Directory pentest that found 12 critical findings in 6 days. Audience: prospective clients who want proof, engineers who want to see real systems.

## First 30 videos — titles and one-line synopses

### Software Development (8)
1. **Custom CRM vs SaaS: The Honest Answer** — When you should pay Salesforce, when you should pay a developer, and the math nobody tells you. (Script 01 in this repo.)
2. **Stripe Webhooks That Survive Production** — Idempotency, retries, signature verification, the dead-letter pattern. With code. (Script 02.)
3. **Next.js App Router vs Pages Router in 2026** — Which to pick for a new project, and the migration trap nobody warned me about.
4. **Why I Stopped Using ORMs for Real Projects** — Raw SQL plus a tiny type generator beats every ORM I have shipped.
5. **The $400 Mistake in Every Stripe Integration** — Tax handling, currency rounding, refund accounting. Fix once, sleep forever.
6. **From Zero to Production in 14 Days — A Custom CRM Build** — Real timeline, real code structure, real client feedback loop.
7. **Database Schema for a Multi-Tenant SaaS — Walkthrough** — Row-level security vs separate-schema vs separate-db. Pick wrong, pay forever.
8. **Self-Hosting vs Vercel for Next.js — Cost and Pain Compared** — When the "serverless tax" outgrows the AWS bill.

### Cybersecurity (8)
9. **Pentest Cost Actually Explained** — The four tiers, what changes the price, when $5k is enough and when it isn't. (Script 03.)
10. **SOC 2 Prep Week-by-Week** — 12-week plan for a 10-person company, no paid auditor handholding. (Script 04.)
11. **MITRE ATT&CK in Plain English** — What it is, why pentesters cite it, how to read a report that uses it.
12. **Active Directory Pentest — Anonymized Walkthrough** — 6-day engagement, 12 critical findings, the path from foothold to domain admin.
13. **Web App Vulnerabilities I Find Every Single Time** — IDOR, auth-bypass, race conditions. Same five issues, every shop.
14. **Wireless Penetration Testing — What It Actually Tests** — Beyond "cracking the wifi password," the stuff that matters.
15. **The Cybersecurity Insurance Trap** — Why most policies do not pay out, what the underwriter is really looking at.
16. **Hardening Checklist for a New Production App** — 27 items, no buzzwords, copy/paste actionable.

### Founder Vlog (8)
17. **The QUANT LAB Founder Story** — Why I left my job, why Macon, why this firm. (Script 05.)
18. **My Solo-Founder Pricing System** — How I price a $30k CRM build, why I never quote hourly anymore.
19. **The First Client I Lost (and Should Have)** — Real story, what I learned, how I screen for it now.
20. **Why I Refuse to Hire a Junior Dev** — The math of solo capacity vs leverage.
21. **A Week in the Life of a Solo Software Firm** — Calendar, Linear board, where the hours actually go.
22. **Why I Self-Host My Own Email** — Deliverability, control, the cost of running mail in 2026.
23. **What I Would Change About My First Year** — Pricing, niche, lead gen, the three big regrets.
24. **The Macon Tax Math** — Why Georgia, why this town, what it actually costs to run a C-Corp here.

### Case-Study Deep-Dives (6)
25. **NorthCrest Fence CRM — End to End** — Field crew app, job tracking, invoicing. What we built, what we ditched.
26. **Northstar Trading Desk — Multi-Strategy Architecture** — Order routing, position management, risk gates.
27. **Hobbspeak — Speech Therapy Practice Management** — HIPAA-aware design, the parts that always bite.
28. **Contractor Estimating Engine — From Spreadsheet to System** — Where Excel actually broke, why custom won.
29. **Motorcycle Shop Ops Platform — POS Plus Service Workflow** — Inventory, work orders, customer history, payments.
30. **Regional Medical Billing — Claims Pipeline Walkthrough** — Eligibility, submission, denial loop, AR aging.

## SEO conventions

### Video title format

Pattern: `[Specific Outcome or Number]: [Subject] [Year if relevant]`

Examples:
- "Custom CRM vs SaaS: The Honest Answer"
- "Pentest Cost Actually Explained ($1k–$50k Tiers)"
- "Stripe Webhooks That Survive Production (Code Walkthrough)"

Rules:
- Keep under 60 characters when possible so it does not truncate on mobile.
- Front-load the search term (CRM, Stripe, Pentest, SOC 2).
- No clickbait. The buyer we want is allergic to it.

### Description template

```
[1-2 sentence summary of what the viewer will learn.]

[3-4 sentence problem statement. Why does this matter? What does the viewer suffer from before this video?]

00:00 [Section name]
01:30 [Section name]
03:15 [Section name]
...

Links and resources:
- Full blog post: https://quantlabusa.dev/blog/[slug]
- Related service: https://quantlabusa.dev/services/[slug]
- Free [calculator/checklist]: https://quantlabusa.dev/[tool]

About QUANT LAB USA:
QUANT LAB USA INC is a custom software and cybersecurity firm based in Macon, Georgia. We build production-grade web apps, CRMs, Stripe integrations, licensing systems, and trading bots — and we harden them with professional penetration testing aligned to MITRE ATT&CK. Founded by Bill Beltz. No agency overhead, no offshore handoffs.

Contact: beltz@quantlabusa.dev | https://quantlabusa.dev/contact
```

### Tag strategy

10 tags per video maximum. YouTube weights the first three highest. Use this pattern:

1. Exact-match primary keyword (e.g., "custom CRM vs SaaS")
2. Broader category (e.g., "custom software development")
3. Brand (e.g., "QUANT LAB USA")
4. 3 long-tail variants
5. 3 adjacent topics
6. Location tag if locally relevant (e.g., "Macon Georgia")

Never stuff irrelevant tags. YouTube downranks for keyword stuffing more than people realize.

## Equipment list (under $500)

| Item | Recommendation | Price | Why |
| ---- | -------------- | ----- | --- |
| Microphone | FIFINE K688 dynamic USB/XLR | $80 | Cardioid pattern handles untreated rooms; USB means no interface needed. |
| Boom arm | Innogear MU037 | $25 | Mic positioning matters more than people think. Keep mic 4-6" from mouth, off-axis. |
| Pop filter | Aokeo metal mesh | $12 | Plosive control. Built-in foam is not enough. |
| Webcam | Logitech Brio 4K (or Mac built-in if M-series) | $180 | Brio handles low light. M-series MacBook camera is acceptable if no other camera. |
| Key light | Elgato Key Light Air | $130 | Eliminates the "cave with one window" look. Single key + window ambient is enough. |
| Backdrop | Cheap fabric or existing wall + plant | $20 | Avoid pure white. Mid-tone neutral or dark wood reads professional. |
| Headphones | Sony MDR-7506 (or existing) | $0–$100 | Monitor for plosives, room noise. Skip if budget tight. |
| **Total** | | **~$450** | Bill in for under $500 with the Mac camera. |

**Software (all free or already paid):**
- **Recording:** OBS Studio (screen + camera composite, free)
- **Editing:** DaVinci Resolve free tier
- **Transcription:** Whisper (local, free) or AssemblyAI ($0.37/hr) — see `transcripts-template.md`
- **Thumbnails:** Canva or Figma (already familiar)
- **Audio cleanup:** Adobe Podcast Enhance (free web tool, run every video)
