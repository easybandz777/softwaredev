# QUANT LAB USA — Lead Magnet Portfolio (Deliverable #15)

**Client:** QUANT LAB USA (quantlabusa.dev)
**Founder:** William Beltz
**HQ:** Macon, GA (14-city service area)
**Stack:** Next.js / TypeScript / Node.js / PostgreSQL / Docker / Stripe
**Services:** Custom web/SaaS, CRMs, ops dashboards, Stripe integrations, licensing systems, trading bots, pentest (web/network/wireless/AD/MITRE ATT&CK)

**Portfolio strategy:** 7 magnets, each tuned to a different ICP. Each one is useful enough to download AND self-segmenting — the *act of downloading* signals service intent and routes the prospect into the correct follow-up drip (designed by agent #16).

**Drip naming convention used below:**
- D1 — Custom-Software-vs-SaaS nurture
- D2 — Pentest-Scoping nurture
- D3 — Stripe / Payments nurture
- D4 — CRM-Build nurture
- D5 — SMB-Security-Posture nurture
- D6 — SaaS-MVP-to-Scale nurture
- D7 — Quant / Trading-Bot nurture

---

## MAGNET 1 — The Build vs. Buy Decision Guide

### 1. Magnet name
**The Build vs. Buy Decision Guide: When Custom Software Beats Salesforce, HubSpot & The Off-The-Shelf Crowd**

### 2. Target persona
- **Job title:** VP of Operations, Director of Revenue Operations, COO
- **Company size:** Mid-market — 50 to 500 employees, $10M–$150M revenue
- **Pain point:** Just hit the wall on a SaaS platform — license fees ballooning, can't get the workflow they need, integrations are duct tape, and the renewal quote made their eyes water. They suspect "custom" is the answer but their CFO needs proof, not vibes.

### 3. Format
**Decision tree + scoring worksheet (PDF, ~10 pages)**

### 4. Outline

**Section 1 — The Build vs. Buy Question (1 page)**
Why this decision is now a board-level conversation: SaaS sprawl, vendor lock-in, integration tax, and the rise of mid-market in-house engineering.

**Section 2 — The 12-Factor Decision Framework (3 pages)**
Twelve weighted factors prospects score 1–5: process uniqueness, integration depth, data sovereignty, scale curve, compliance load, total cost of ownership over 5 years, vendor risk, speed-to-deploy, in-house engineering capacity, customization frequency, audit/reporting needs, AI/ML readiness.

**Section 3 — The Decision Tree (1 page)**
A visual decision tree: *If your TCO over 5 years > $400K AND your process uniqueness score ≥ 4, custom wins. If process is commoditized AND scale is unpredictable, buy. Hybrid paths in between.*

**Section 4 — Hidden Costs Most Teams Miss (2 pages)**
- Per-seat license inflation (modeled at 8–12% YoY)
- Integration / middleware costs (Zapier, Workato, custom connectors)
- Customization debt (paying for "configuration" that never quite fits)
- Switching cost when you outgrow the platform
- Opportunity cost of waiting for vendor roadmap

**Section 5 — Custom Build Cost Reality Check (1 page)**
Real ranges for mid-market custom builds: $40K–$120K MVP, $120K–$400K production-grade, ongoing maintenance at 15–22% of build cost annually.

**Section 6 — The 5-Year TCO Worksheet (1 page)**
Side-by-side spreadsheet template comparing SaaS TCO vs custom build TCO across years 1–5.

**Section 7 — How To Pitch This Internally (1 page)**
The 1-page CFO memo template + 3 objections you'll get and how to answer them.

### 5. Why it converts
Mid-market ops leaders are **already losing this argument with their CFO** because they don't have numbers. The decision tree + scoring sheet hands them the ammunition. The internal-pitch memo template is the secret weapon — it lets them look smart in front of leadership. They'll trade an email for that all day.

### 6. Landing page copy

**H1:** Stop Guessing Whether To Build Or Buy. Get The Framework Mid-Market Ops Leaders Use To Win The Argument.

**Subheadline:** A 12-factor scoring sheet, 5-year TCO worksheet, and a CFO-ready memo template — so you walk into the next leadership meeting with proof, not opinions.

**3 bullet value props:**
- Score your situation across 12 weighted factors and get a clear build / buy / hybrid recommendation in under 20 minutes.
- Run a real apples-to-apples 5-year TCO comparison — including the hidden costs SaaS vendors don't put in their proposals.
- Steal the 1-page memo template that's been used to greenlight $100K+ custom builds at mid-market companies.

**Form fields:** First name · Work email · Company · Role

**Submit button:** Send Me The Decision Guide

**Privacy line:** We'll only email you about custom software. No spam, no list rentals, unsubscribe in one click.

### 7. Confirmation email
**Subject:** Your Build vs. Buy Decision Guide (download inside)

Hey {{first_name}} — your copy of the Build vs. Buy Decision Guide is ready. Here's your download link: [GET THE GUIDE]. The 5-year TCO worksheet is the section most ops leaders flip to first — I'd start there. Hit reply if you want me to look at your specific build/buy situation. — William, founder, QUANT LAB USA

### 8. Recommended follow-up sequence
**Enroll in: D1 — Custom-Software-vs-SaaS nurture**

---

## MAGNET 2 — Web Application Pentest Checklist

### 1. Magnet name
**The Web Application Pentest Scoping Checklist: 47 Questions To Ask Before You Sign The SOW**

### 2. Target persona
- **Job title:** Security Engineer, IT Director, vCISO, Head of Security, Compliance Manager
- **Company size:** 25–500 employees, regulated industries (fintech, healthtech, SaaS handling PII)
- **Pain point:** Auditor / customer / SOC 2 just told them they need a web app pentest. They've never scoped one. They're afraid of (a) buying the wrong scope and getting a worthless report, (b) overpaying, or (c) getting a scan-only "pentest" disguised as the real thing.

### 3. Format
**Interactive checklist (PDF + Notion-compatible markdown), ~8 pages**

### 4. Outline

**Section 1 — Why Most Pentests Fail Before They Start (1 page)**
The three failure modes: undefined scope, unclear deliverables, mismatched methodology. Why "we'll just run a scan" is not a pentest.

**Section 2 — Pre-Engagement Discovery (12 questions)**
- What's the in-scope target inventory (apps, APIs, subdomains, mobile clients)?
- Are you regulated (PCI / HIPAA / SOC 2 / FedRAMP)?
- Production, staging, or both? With what guardrails?
- Auth roles to be tested (anonymous, customer, admin, super-admin)?
- Allowed exploitation depth (proof-of-concept only vs. full chain)?

**Section 3 — Methodology Questions (12 questions)**
- OWASP ASVS level (1, 2, or 3)?
- OWASP Top 10 + API Top 10 coverage?
- Black-box, grey-box, or white-box?
- Manual testing % vs automated scanning %?
- Business logic flaw testing included?
- MITRE ATT&CK mapping in the report?

**Section 4 — Vendor Qualification (11 questions)**
- OSCP / GWAPT / GPEN / CREST credentials on the actual testers (not just the firm)?
- Sample report you can review under NDA?
- Retest included in the SOW?
- Insurance / E&O coverage?
- Reference customers in your industry?

**Section 5 — Deliverables & Reporting (8 questions)**
- Executive summary + technical findings + remediation guidance?
- CVSS 3.1 scoring + business impact rating?
- Customer-shareable version for your SOC 2 auditor / sales team?
- Remediation re-test window (typically 30–90 days)?

**Section 6 — Timeline & Logistics (4 questions)**
- Total engagement length, kickoff date, daily-standup cadence, communication channel.

**Section 7 — Red Flags Cheat Sheet (1 page)**
"If a vendor says any of these things, walk away" — e.g. "we use the same scanner stack as everyone else," "we don't share resumes of the testers," "retest is extra."

**Bonus — Sample SOW Language (1 page)**
Drop-in paragraphs you can paste into the vendor's SOW.

### 5. Why it converts
This magnet **does the prospect's homework for them**. They were going to spend 6 hours googling "how to scope a pentest" anyway. We hand it to them in 8 pages. The Red Flags Cheat Sheet and Sample SOW Language are the magnetic hooks — by the time they finish reading, they've also self-qualified that QUANT LAB USA knows what they're doing.

### 6. Landing page copy

**H1:** Don't Sign That Pentest SOW Until You've Answered These 47 Questions.

**Subheadline:** A scoping checklist used by security leads at SOC 2 and PCI-regulated companies to avoid paying for a scan disguised as a pentest.

**3 bullet value props:**
- 47 vendor-scoping questions across discovery, methodology, deliverables, and timeline.
- A red-flag cheat sheet so you can spot the scan-vendors before you waste a budget cycle.
- Drop-in SOW language you can paste into any vendor's contract to lock down scope and re-test terms.

**Form fields:** First name · Work email · Company · Role

**Submit button:** Send Me The Pentest Checklist

**Privacy line:** Security people email security people. No list sharing, no vendor blasts, unsubscribe anytime.

### 7. Confirmation email
**Subject:** The 47-Question Pentest Checklist is ready

{{first_name}} — your checklist is here: [DOWNLOAD]. The red-flag section on page 6 is where most folks find out their current quote has problems. If you want a second set of eyes on a SOW you've already received, just reply with it and I'll mark it up free. — William, QUANT LAB USA

### 8. Recommended follow-up sequence
**Enroll in: D2 — Pentest-Scoping nurture**

---

## MAGNET 3 — Stripe Integration Cost Calculator

### 1. Magnet name
**The Stripe Integration Cost Calculator: Size Your Custom Payment Build In Under 10 Minutes**

### 2. Target persona
- **Job title:** Founder, CTO, Head of Engineering, Head of Product (at a SaaS or marketplace company)
- **Company size:** Seed–Series B SaaS, $0–$10M ARR, 5–60 employees
- **Pain point:** Outgrew Stripe Checkout / Stripe Payment Links. Need real subscription billing, metered usage, multi-currency, tax handling, dunning, customer portal, webhooks, idempotency, reconciliation — and they have no idea if that's $15K, $50K, or $150K of engineering work.

### 3. Format
**Interactive spreadsheet (Google Sheets + Excel .xlsx) with macros / formulas**

### 4. Outline

**Tab 1 — Read Me First**
A 1-page intro: how to use the calculator, assumptions baked in (US hourly rate ranges $125–$225, complexity multipliers), and what the output means.

**Tab 2 — Scope Selector (the main input sheet)**
A checklist of 40+ Stripe features the user toggles ON/OFF. Each feature has a baseline hours estimate + complexity multiplier:

- Stripe Checkout vs. custom Elements vs. Stripe Connect
- Subscriptions: single plan, multi-plan, add-ons, seats, tiers
- Metered / usage-based billing
- Free trials, coupons, promo codes
- Multi-currency / multi-region
- Stripe Tax integration
- SCA / 3D Secure compliance
- Dunning + smart retries
- Customer billing portal (Stripe-hosted vs custom)
- Webhooks (which events, idempotency, retry queue)
- Refunds & disputes UI
- Reconciliation jobs + accounting export
- Revenue reporting dashboard
- PCI scope reduction strategy
- Connect / marketplace payouts
- ACH / wire / bank debit
- Sandbox + production environment parity
- Migration from legacy payment processor

**Tab 3 — Auto-Calculated Estimate**
Formula-driven output: total dev hours, low/mid/high $ range, suggested timeline in weeks, suggested team composition (1 senior eng vs. 2 + PM).

**Tab 4 — 12-Month Ongoing Cost Estimate**
Maintenance, monitoring, Stripe fee modeling at projected MRR, dunning recovery rate impact on revenue.

**Tab 5 — Comparison: Build In-House vs. Hire An Agency vs. Buy A Platform (Chargebee/Recurly)**
Side-by-side at 12, 24, and 36 months.

**Tab 6 — Glossary / Definitions**
Plain-English definitions of each Stripe feature so a non-technical founder can use the tool.

### 5. Why it converts
Founders are **terrified of underestimating payment work** because they've heard the horror stories. A calculator that gives them a defensible number for their next board meeting is irresistible. They'll absolutely trade an email for "I now know this is $35K–$60K, not $200K." And the moment they open Tab 5, they realize doing it in-house with their existing team will take 4x longer than just hiring QUANT LAB.

### 6. Landing page copy

**H1:** Size Your Custom Stripe Integration In Under 10 Minutes — Without Calling A Single Agency.

**Subheadline:** An interactive spreadsheet that gives SaaS founders a real, defensible cost range for custom Stripe work — subscriptions, metered billing, dunning, tax, the works.

**3 bullet value props:**
- Toggle 40+ Stripe features ON/OFF and watch your estimated hours, cost range, and timeline update live.
- Compare in-house build vs. agency build vs. Chargebee/Recurly across a 36-month window.
- Walk into your next board / co-founder meeting with a number you can actually defend.

**Form fields:** First name · Work email · Company · Role

**Submit button:** Send Me The Calculator

**Privacy line:** Built for SaaS founders, by a SaaS builder. No sales blast — you'll hear from me, not a BDR farm.

### 7. Confirmation email
**Subject:** Your Stripe Cost Calculator (Google Sheet + Excel)

{{first_name}} — calculator's here: [GOOGLE SHEET LINK] and [EXCEL DOWNLOAD]. Tab 2 is where the magic is — toggle features and the cost range updates instantly. If your number feels too high or too low, hit reply and tell me what you're building; I'll do a sanity-check on it for free. — William, QUANT LAB USA

### 8. Recommended follow-up sequence
**Enroll in: D3 — Stripe / Payments nurture**

---

## MAGNET 4 — Custom CRM ROI Calculator

### 1. Magnet name
**The Custom CRM ROI Calculator: Model Salesforce vs. Custom Build Over 5 Years**

### 2. Target persona
- **Job title:** VP of Sales, VP of RevOps, Director of Operations, COO
- **Company size:** 30–300 employees, $5M–$80M revenue, sales-led GTM
- **Pain point:** Paying Salesforce $150–$400/seat/month, plus consultant fees, plus 3 admins, plus integration costs. They suspect their actual CRM workflow could run on a custom build for less — but they can't model it.

### 3. Format
**Interactive spreadsheet (Google Sheets + Excel) with ROI dashboard**

### 4. Outline

**Tab 1 — Inputs: Your Current State**
Seat count, per-seat license fee, # of admins, annual consultant spend, integration / middleware fees (Zapier, MuleSoft, etc.), customization budget, current churn / hit rate on CRM adoption.

**Tab 2 — Inputs: Your Custom Build Assumptions**
Initial build cost (with a sane default range), annual maintenance % (default 18%), hosting cost, in-house admin time, expected uptime / SLA.

**Tab 3 — 5-Year TCO Model**
Year-by-year cost line for both options. Includes a "license fee inflation" toggle (default 9%/yr) and a "headcount growth" toggle.

**Tab 4 — ROI & Payback Dashboard**
Net savings over 5 years, payback period in months, IRR, sensitivity analysis (what happens if build runs 25% over, what happens if headcount doubles).

**Tab 5 — Beyond Dollars: Strategic Factors Scorecard**
1–5 scoring on data sovereignty, vendor lock-in, workflow uniqueness, integration depth, AI/automation readiness. Generates a "Strategic Custom Score."

**Tab 6 — Final Verdict**
A traffic-light output: Green = build, Yellow = hybrid (e.g., custom CRM on top of HubSpot CDP), Red = stay on Salesforce.

**Tab 7 — Sample Boardroom Pitch Slide**
A pre-built slide template (image) summarizing the model output for leadership.

### 5. Why it converts
RevOps leaders are **personally accountable for the Salesforce bill** and personally tired of it. This calculator gives them numbers to take to the CFO. The boardroom slide is the cheat code — they were going to spend a Saturday in PowerPoint anyway. They'll absolutely hand over an email.

### 6. Landing page copy

**H1:** Find Out If A Custom CRM Beats Salesforce For Your Company — In Under 15 Minutes.

**Subheadline:** A 5-year TCO + ROI calculator built for RevOps leaders who suspect they're overpaying for a CRM their team only half-uses.

**3 bullet value props:**
- Plug in your seat count and license fees, get a 5-year side-by-side TCO for Salesforce vs. custom build.
- See payback period, IRR, and a green/yellow/red verdict on whether custom makes sense for your situation.
- Grab the pre-built boardroom slide template summarizing the model output for your next leadership meeting.

**Form fields:** First name · Work email · Company · Role

**Submit button:** Send Me The CRM Calculator

**Privacy line:** Your inputs stay on your laptop — the spreadsheet runs locally. No tracking, no spam.

### 7. Confirmation email
**Subject:** Your Custom CRM ROI Calculator is ready

{{first_name}} — here's your calculator: [GOOGLE SHEET] + [EXCEL]. Most folks are surprised by Tab 5 — the strategic factors often outweigh raw cost. If your verdict comes back yellow or green, hit reply and let's walk through what your build would actually look like. — William, QUANT LAB USA

### 8. Recommended follow-up sequence
**Enroll in: D4 — CRM-Build nurture**

---

## MAGNET 5 — MITRE ATT&CK Self-Assessment Worksheet

### 1. Magnet name
**The MITRE ATT&CK Self-Assessment Worksheet for SMBs: Score Your Defense Coverage Across 14 Tactics**

### 2. Target persona
- **Job title:** IT Manager, Head of IT, Solo Security Lead, vCISO, Office of the CISO at sub-500-employee firms
- **Company size:** 25–500 employees, no dedicated SOC, possibly an MSSP relationship, possibly SOC 2 or HIPAA in scope
- **Pain point:** Knows MITRE ATT&CK is the framework auditors / boards / insurance underwriters now reference, but doesn't know where their org actually sits. Doesn't have time for a full purple-team engagement just to find out.

### 4. Format
**Worksheet (PDF + Excel scoring sheet), ~12 pages**

### 4. Outline

**Section 1 — Why MITRE ATT&CK Matters For SMBs Now (1 page)**
Cyber insurance underwriters, SOC 2 auditors, and customer security questionnaires are now ATT&CK-aware. You don't need a SOC, but you do need an answer.

**Section 2 — The 14 Tactics Quick-Reference (2 pages)**
Plain-English description of each ATT&CK Enterprise tactic: Reconnaissance, Resource Development, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command & Control, Exfiltration, Impact.

**Section 3 — Self-Assessment Worksheet (5 pages)**
For each of the 14 tactics, 3–5 yes/no questions a non-security generalist can actually answer. Example for *Initial Access*: "Do you have MFA on all external-facing services? Do you scan email attachments for malicious content? Do you have a documented vendor onboarding security review?"

**Section 4 — Scoring Sheet (1 page)**
Total each tactic out of its possible score. Roll up to an overall coverage % and a four-tier maturity label: Reactive, Developing, Defended, Proactive.

**Section 5 — Top 5 Quick Wins For SMBs (1 page)**
The five highest-impact / lowest-cost controls (e.g., MFA everywhere, EDR rollout, email DMARC enforcement, lateral-movement detection via Sysmon, offsite immutable backups).

**Section 6 — When To Bring In A Pro (1 page)**
A simple decision rule: if your score is below 40% in any *Credential Access* / *Lateral Movement* / *Exfiltration* row — get a pentest. If you're above 60% — get a red-team / purple-team to validate.

**Section 7 — Sharing Your Score With Stakeholders (1 page)**
How to communicate this to the board, auditors, and cyber insurance underwriters. Includes a 1-paragraph summary template.

### 5. Why it converts
SMB security leads are **routinely asked "where are you on ATT&CK?"** in customer security questionnaires and don't have an answer. This worksheet gives them one in 90 minutes. The board / auditor communication template is the multiplier. The "when to bring in a pro" section is the natural conversion handoff.

### 6. Landing page copy

**H1:** Score Your SMB's Defense Coverage Across All 14 MITRE ATT&CK Tactics — Without Hiring A SOC.

**Subheadline:** A self-assessment worksheet for IT leads who need to give a real answer the next time an auditor, customer, or insurance underwriter asks "what's your ATT&CK posture?"

**3 bullet value props:**
- Walk through all 14 ATT&CK Enterprise tactics with plain-English yes/no questions — no security PhD required.
- Get a coverage % and a maturity tier (Reactive / Developing / Defended / Proactive) you can hand to auditors and the board.
- Top 5 highest-leverage controls SMBs can deploy this quarter to move their score up two tiers.

**Form fields:** First name · Work email · Company · Role

**Submit button:** Send Me The Worksheet

**Privacy line:** Built for SMB IT leads. We'll never share your email with vendors or training-content lists.

### 7. Confirmation email
**Subject:** Your MITRE ATT&CK Self-Assessment Worksheet (download)

{{first_name}} — worksheet's ready: [DOWNLOAD]. Block 90 minutes on your calendar, walk through Sections 3 and 4, and you'll have a real score to talk about. If you want to verify any of your "yes" answers with a real-world test, reply and I'll show you how a focused pentest can do that. — William, QUANT LAB USA

### 8. Recommended follow-up sequence
**Enroll in: D5 — SMB-Security-Posture nurture**

---

## MAGNET 6 — From MVP To Production Playbook

### 1. Magnet name
**From MVP To Production: The SaaS Founder's Playbook For The Next 90 Days After Product-Market Fit**

### 2. Target persona
- **Job title:** Founder / CEO / CTO of an early-stage SaaS
- **Company size:** Pre-seed to Series A, 2–25 employees, $0–$3M ARR
- **Pain point:** MVP works, customers are paying, but everything is held together with duct tape: no real auth, no audit log, no observability, no rate-limiting, no admin UI, no SOC 2 readiness. First serious enterprise customer is asking questions the codebase can't answer.

### 3. Format
**Playbook (PDF), ~15 pages**

### 4. Outline

**Section 1 — The MVP-To-Production Gap (1 page)**
What "production-grade" actually means. Why founders hit a wall when their first enterprise customer asks for SAML SSO or a SOC 2 report.

**Section 2 — The 12-Pillar Production Readiness Map (2 pages)**
An at-a-glance map: Auth & SSO · Authorization (RBAC/ABAC) · Audit Log · Observability · Background Jobs · Rate Limiting · Multi-Tenancy · Data Backup & Restore · Secrets Management · Deployment & Rollback · Incident Response · Compliance (SOC 2 / HIPAA / GDPR).

**Section 3 — Auth & Identity (1 page)**
Roll-your-own vs. WorkOS / Auth0 / Clerk. SAML / OIDC. SCIM provisioning. The "I'll add SSO later" trap.

**Section 4 — Authorization & Multi-Tenancy (1 page)**
RBAC patterns, tenant isolation strategies (row-level vs. schema-per-tenant vs. cluster-per-tenant), pitfalls.

**Section 5 — Audit Logs & Compliance Foundations (1 page)**
What goes in an audit log, immutability, retention, SOC 2 controls that depend on it.

**Section 6 — Observability & Reliability (1 page)**
Logs + metrics + traces. Error budgets. SLOs that customers actually care about.

**Section 7 — Background Jobs, Queues, & Retry Logic (1 page)**
Why your synchronous Stripe call is a ticking time bomb. Idempotency keys, dead-letter queues.

**Section 8 — Rate Limiting & Abuse Prevention (1 page)**
Per-user, per-tenant, per-endpoint. Token buckets vs. leaky buckets.

**Section 9 — Deployment, Rollback, & Feature Flags (1 page)**
Blue/green vs. canary, feature-flag patterns, hotfix processes.

**Section 10 — Secrets & Data Protection (1 page)**
KMS, env vars, encryption at rest + in transit, the "where do you store API keys" answer.

**Section 11 — The 90-Day Plan (2 pages)**
A week-by-week roadmap: Weeks 1–4 (foundations), 5–8 (compliance + observability), 9–12 (scale + hardening).

**Section 12 — Red Flags That Tell You You're Not Production-Ready (1 page)**
"Our database has no backups." "We don't know who has admin access." "We email customers manually from a personal Gmail." If any sound familiar — fix them this week.

### 5. Why it converts
Founders **know** they need to do this stuff but they don't know the order or the right depth for their stage. The 90-day plan is the killer — it gives them a calendarable, finite project instead of a vague existential dread. The "Red Flags" section is the gut-punch that makes them hit forward to their CTO. High-intent prospect who is *days away from hiring help*.

### 6. Landing page copy

**H1:** Your MVP Works. Now What? The 90-Day Playbook For Getting To Production-Grade SaaS.

**Subheadline:** A week-by-week roadmap for SaaS founders staring down their first enterprise customer, SOC 2 audit, or "real" investor due diligence.

**3 bullet value props:**
- 12 production-readiness pillars — auth, audit logs, multi-tenancy, observability, the works — explained in founder English.
- A 90-day, week-by-week plan to close the MVP-to-production gap without grinding your roadmap to a halt.
- A red-flag checklist that tells you exactly which fires need to be put out this week vs. this quarter.

**Form fields:** First name · Work email · Company · Role

**Submit button:** Send Me The Playbook

**Privacy line:** Built by a SaaS founder for SaaS founders. You'll hear from me, not a 7-step nurture funnel.

### 7. Confirmation email
**Subject:** From MVP To Production — your playbook

{{first_name}} — here's the playbook: [DOWNLOAD]. Section 11 is the action plan; Section 12 is the gut-check. If two or more of the red flags sound like your codebase right now, hit reply — we've helped 30+ post-MVP teams cross that gap and I can tell you which week of the plan to start with. — William, QUANT LAB USA

### 8. Recommended follow-up sequence
**Enroll in: D6 — SaaS-MVP-to-Scale nurture**

---

## MAGNET 7 — Algorithmic Trading Bot Development Checklist

### 1. Magnet name
**The Algorithmic Trading Bot Development Checklist: 60 Items From Strategy To Live Capital**

### 2. Target persona
- **Job title:** Quant trader (independent), prop trader, family-office portfolio manager, RIA running systematic strategies, hedge fund tech lead at sub-$200M AUM shop
- **Company size:** Solo to small team (1–15), trading own capital or running a small fund
- **Pain point:** Strategy works in a notebook. Has no idea how to take it from a Jupyter notebook to a real, production, capital-at-risk trading system. Has heard horror stories about overfitted backtests, broken risk limits, and bots that lose more in a weekend than they made all year.

### 3. Format
**Checklist (PDF + Notion / GitHub markdown), ~12 pages**

### 4. Outline

**Section 1 — Strategy Validation Before You Write A Line Of Production Code (8 items)**
- Walk-forward backtest across at least 3 regimes
- Out-of-sample period equal to in-sample
- Slippage + commission + financing modeled realistically
- Sharpe / Sortino / Calmar minimums
- Max drawdown stress test
- Survivorship-bias-free dataset
- Regime stability check
- Sanity check: does the edge survive at 2x your live size?

**Section 2 — Data Pipeline (8 items)**
- Tick / bar / OHLCV granularity decision
- Real-time + historical data vendor (Polygon, IEX, Databento, etc.)
- Reconciliation between vendors
- Corporate actions / splits / dividends handling
- Time zone + timestamp normalization
- Outlier / bad-tick detection
- Data backfill + replay capability
- Storage (timeseries DB, S3 cold storage)

**Section 3 — Execution Layer (10 items)**
- Broker / exchange API (Interactive Brokers, Alpaca, Tradier, FIX-direct)
- Order types supported (market, limit, stop, OCO, iceberg, IOC, FOK)
- Order acknowledgment + fill tracking + reconciliation
- Smart order routing
- Partial fill handling
- Idempotency (replay protection on order submission)
- Latency budget (and where you spend it)
- Rate limits per venue
- Co-location / VPS / cloud region considerations
- Paper trading parity with live

**Section 4 — Risk Management Layer (10 items)**
- Pre-trade position-size check
- Max position per symbol / sector / book
- Daily loss limit + automatic shutoff
- Max consecutive losing trade kill-switch
- Drawdown circuit breaker
- Margin / leverage check
- Correlated-position aggregate exposure
- Black-swan / fat-tail tail-risk check
- Liquidity check (don't be > X% of ADV)
- Manual override / panic button

**Section 5 — Monitoring & Observability (8 items)**
- PnL real-time dashboard
- Slippage tracking (expected vs realized)
- Strategy health metrics (signal-to-noise, hit rate drift)
- Latency monitoring per leg
- Alerting (SMS / Telegram / PagerDuty) for risk-limit breaches
- Daily reconciliation vs. broker statement
- Trade audit log (who/what/when/why)
- Post-mortem template for losing days

**Section 6 — Compliance & Recordkeeping (6 items)**
- Trade record retention (rule-specific by jurisdiction)
- Time-sync to NIST / NTP for timestamps
- Best-execution documentation
- KYC / AML if managing external capital
- Regulatory registration status (RIA, CTA, prop)
- Tax-lot accounting + 1099 reconciliation

**Section 7 — Deployment & Operations (6 items)**
- Containerized deployment (Docker)
- Automated restart / watchdog
- Secrets management for API keys
- Disaster recovery (broker connectivity loss, exchange halt)
- Software update process during market hours (don't)
- Off-market deploy windows + canary

**Section 8 — Cost To Build (1 page)**
Realistic budget ranges: $25K–$60K for a single-strategy single-venue bot, $80K–$200K for a multi-strategy multi-venue platform with the full risk + monitoring stack. Ongoing costs: data feeds, hosting, broker fees.

**Section 9 — When To Build In-House vs Hire (1 page)**
Decision matrix: in-house if you have the eng skill AND want to own the IP forever. Hire a partner if your edge is in research / signal / regime detection, not infrastructure.

### 5. Why it converts
Quant traders are **paranoid about losing capital to bad infrastructure**, not bad strategy. The risk-management section alone is worth handing over an email for. The cost-to-build section pre-qualifies prospects: anyone who sticks past it is a real buyer. This is a low-volume / high-quality magnet — every download is a high-intent buyer.

### 6. Landing page copy

**H1:** Take Your Algorithmic Trading Strategy From Notebook To Live Capital — Without Blowing Up.

**Subheadline:** A 60-item production checklist for quant traders moving past the backtest. Strategy validation, data pipeline, execution, risk, monitoring, compliance — the full stack.

**3 bullet value props:**
- 60 production-readiness items across strategy validation, data, execution, risk, monitoring, and compliance.
- A realistic cost-to-build section: what a single-strategy bot actually costs vs. a multi-venue platform.
- A decision matrix for "build in-house vs. hire a partner" — based on where your real edge actually lives.

**Form fields:** First name · Work email · Company · Role

**Submit button:** Send Me The Checklist

**Privacy line:** Quant-to-quant. We don't share emails, ever, and we don't run remarketing pixels on this page.

### 7. Confirmation email
**Subject:** Your Algorithmic Trading Bot Development Checklist

{{first_name}} — checklist's here: [DOWNLOAD]. Section 4 (Risk Management) is where most strategies that look great in a notebook end up losing real money. Walk through it line-by-line before you go live. If you want a second set of eyes on a strategy you're about to fund, reply and I'll review it under NDA. — William, QUANT LAB USA

### 8. Recommended follow-up sequence
**Enroll in: D7 — Quant / Trading-Bot nurture**

---

# Portfolio Routing Map

| # | Magnet | Format | ICP | Drip |
|---|---|---|---|---|
| 1 | Build vs. Buy Decision Guide | Decision tree + worksheet | Mid-market ops leader | D1 |
| 2 | Web App Pentest Scoping Checklist | Checklist | Security / IT lead | D2 |
| 3 | Stripe Integration Cost Calculator | Spreadsheet | SaaS founder / CTO | D3 |
| 4 | Custom CRM ROI Calculator | Spreadsheet | RevOps / VP Sales | D4 |
| 5 | MITRE ATT&CK Self-Assessment Worksheet | Worksheet | SMB IT / security lead | D5 |
| 6 | From MVP To Production Playbook | Playbook | Post-PMF SaaS founder | D6 |
| 7 | Algorithmic Trading Bot Development Checklist | Checklist | Quant trader / small fund | D7 |

# Universal Notes On Implementation

- **Hosting:** Each magnet served from `quantlabusa.dev/resources/[slug]`. Gate via short form (4 fields max). PDF / XLSX delivered via signed URL with 30-day expiry to keep funnel hygiene clean.
- **Tracking:** UTM-tag every traffic source. Track which magnet → which drip → which booking. Calculate cost-per-magnet-download and cost-per-discovery-call by source.
- **A/B test priorities:** H1 first, then submit-button copy, then form-field count (test 3 vs 4 fields).
- **Compliance:** GDPR-friendly consent checkbox. No pre-checked opt-ins. Single confirmed opt-in workflow.
- **Sales handoff:** Any magnet download triggers a Slack notification to William with the prospect's name, company, role, and which magnet — so high-fit downloads get a same-day personal reply, not just the drip.
