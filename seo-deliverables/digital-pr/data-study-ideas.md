# Original Data Study Ideas — Digital PR Pipeline

**Purpose:** Ten original data studies QUANT LAB USA INC can execute in 2026 to fuel earned-media coverage. Each is designed to be **defensible**, **journalist-pitchable**, and **executable by a one-person shop** with a modest budget.

The format for each study is the same:
- **Hypothesis** — the central claim the data will test
- **Data source** — public dataset, proprietary engagement data, or an originated survey
- **Execution effort** — engineer-days + spend
- **Expected pickup angle** — what the journalist headline looks like
- **Target outlets** — where to pitch first
- **Publication artifact** — what gets shipped on quantlabusa.dev
- **Risk** — what could undermine the story

**The standing principle:** every number quoted publicly must be defensible. If a journalist asks how the number was calculated, the answer cannot be "we asked AI." Methodology notes, raw data download links, and a reproducible analysis script (Python or SQL) ship with every study.

---

## 1. Software Development Cost Index by US City — 2026 Edition

**Hypothesis:** Custom software development costs vary materially by US metro, but the gap is narrowing as remote work normalizes rates. We can prove this with public BLS wage data combined with rate-card analysis from Clutch and GoodFirms profiles.

**Data source:**
- BLS Occupational Employment and Wage Statistics — Software Developers (15-1252), 2025 data, all MSAs
- Clutch.co public agency profiles for the top 100 US-based dev shops (hourly rate ranges are public)
- GoodFirms public agency profiles, same set
- Cross-reference with QUANT LAB engagement data for our 14 service cities

**Execution effort:** ~6 engineer-days. Pull BLS data via API; scrape Clutch/GoodFirms via their public profile pages (rate-limited, respectful); manual cross-check of 20 sample profiles; Python notebook to produce 50-state x 14-city heatmap.

**Spend:** ~$0 (all data is free)

**Expected pickup angle:** "The Real Hourly Rate for Custom Software Development in [Your City] — 2026". Inc.com and Fast Company love city-by-city cost comparisons. CIO Dive will pick up on the methodology. Regional papers (Atlanta Business Chronicle, Macon Telegraph) will pick up on the "Atlanta vs Macon vs Austin" angle.

**Target outlets:**
1. CIO Dive (Roberto Torres, software industry editor)
2. Built In (Ashley Bowden, breaking-news desk covering Atlanta and Dallas hubs)
3. Inc.com small-business desk
4. Hypepotamus (Carey Tucker, assistant editor)
5. Atlanta Business Chronicle (Phil Bolton or successor on tech beat)

**Publication artifact:** `/blog/2026-software-development-cost-index-by-us-city` — full interactive table, downloadable CSV of raw data, methodology section, reproducible Python notebook in a public GitHub repo.

**Risk:** Clutch and GoodFirms rate cards are self-reported and skewed toward the high end. Address by triangulating with BLS wage data and disclosing the bias openly in the methodology section.

---

## 2. How AI-Assisted Development Changed Cost Per Feature: 2024 vs 2026

**Hypothesis:** Since Claude Code, Cursor, and the broader AI-assisted dev wave shipped widely in 2024-2025, the cost-per-feature delivered by a US-based dev shop has dropped materially. The drop is hidden in client invoices because shops have not lowered hourly rates — they have just delivered more per hour.

**Data source:**
- QUANT LAB's own internal engagement records (28 client engagements between Nov 2024 and May 2026 — anonymized).
- Feature-level estimates and actuals from the firm's internal tracking sheet.
- Cross-reference with a 50-respondent survey of small SaaS founders who hired a dev shop in both 2024 and 2026.

**Execution effort:** ~8 engineer-days. Anonymize and aggregate internal data (~2 days). Field the survey via Tally.so + LinkedIn + the QUANT LAB newsletter (~2 days). Analysis + write-up (~4 days).

**Spend:** ~$25–150 (Tally Pro or Typeform if response volume exceeds free tier)

**Expected pickup angle:** "AI-Assisted Devs Are Quietly Delivering 2x the Code at the Same Price — and Customers Don't Know It Yet." This is a controversial-but-defensible take that gets shared. The angle is irresistible to The Pragmatic Engineer, Lenny's Newsletter, The Information.

**Target outlets:**
1. The Pragmatic Engineer (Gergely Orosz) — newsletter pickup
2. TechCrunch (Lucas Ropek, AI desk)
3. Fast Company (most-innovative-companies angle)
4. The Information (anonymous tipline + named pitch)
5. Stratechery (Ben Thompson — long shot, but worth one pitch)

**Publication artifact:** `/blog/ai-assisted-dev-cost-per-feature-2024-vs-2026` — anonymized engagement breakdown, survey methodology, full results, downloadable raw CSV (no PII).

**Risk:** Sample size of internal data is small (28 engagements). Address by clearly framing it as "our shop's experience" and supplementing with the 50-respondent survey. Do not overclaim industry-wide trends from one shop's data.

---

## 3. State of Stripe Connect for SMB Operators — 2026 Survey

**Hypothesis:** Stripe Connect is wildly under-adopted by small operators who would benefit from it because the documentation and developer experience assume a large engineering team. We survey 150 SMB operators who handle paid transactions and quantify the gap.

**Data source:**
- Originated survey of 150+ small operators (e-commerce, marketplaces, booking platforms, service businesses).
- Recruitment via the QUANT LAB newsletter, LinkedIn, Indie Hackers, r/Entrepreneur, r/SmallBusiness, paid Stripe ads (~$200 ad spend optional).
- Cross-reference with Stripe's own published Q4 2025 numbers if available.

**Execution effort:** ~6 engineer-days. Survey design + Tally form (~1 day). Recruitment + cadence (~3 days). Analysis + write-up (~2 days).

**Spend:** $0–$350 (Tally + optional ad recruitment)

**Expected pickup angle:** "Most Small Operators Are Leaving Stripe Connect on the Table — Here's What They're Missing." Strong angle for Stripe's own developer-relations team to amplify, which produces a halo of secondary pickups.

**Target outlets:**
1. Stripe Sessions blog / Stripe Press
2. Fast Company (payments + small-business angle)
3. The Information (Stripe coverage)
4. Indie Hackers newsletter
5. Bootstrapped Web podcast (audio coverage)

**Publication artifact:** `/blog/stripe-connect-smb-survey-2026` — full survey results, downloadable methodology, a free "Stripe Connect Readiness Checklist" gated tool, the 150-respondent dataset (anonymized).

**Risk:** Stripe may dispute or under-amplify if the findings reflect badly on their developer experience. Mitigate by framing constructively ("here's what would help SMB adoption") rather than as a takedown.

---

## 4. Time-to-MVP: Quoted vs Actual — Analysis of 100 Engagements

**Hypothesis:** Industry-standard MVP timelines (commonly quoted as "8–12 weeks") are 2–3x optimistic. We can prove it by analyzing 100 publicly-discussed MVP engagements (Y Combinator companies, public case studies, founder blog posts) and comparing quoted timeline vs actual ship date.

**Data source:**
- Public Y Combinator company announcements + their later case-study writeups
- Public agency case studies on Clutch / GoodFirms (where shipping timelines are stated)
- Founder blog posts and Indie Hackers retrospectives
- QUANT LAB's own engagement timelines (anonymized) as a benchmark

**Execution effort:** ~10 engineer-days. Most of the time is in sourcing + extracting timeline data from 100+ separate public sources. Use AI assistance to extract dates and timelines from blog posts at scale, then human-verify each.

**Spend:** $0

**Expected pickup angle:** "Software Engineering Estimates Are Wrong By 2.7x — Here's What the Data Says." Strong for engineering audiences (Pragmatic Engineer, Hacker News) and small-business audiences (Inc, Fast Company, "Why your MVP is going to take longer than you think").

**Target outlets:**
1. The Pragmatic Engineer (Gergely Orosz)
2. Hacker News (organic submission, not paid)
3. Indie Hackers newsletter
4. Inc.com
5. Lenny's Newsletter

**Publication artifact:** `/blog/time-to-mvp-quoted-vs-actual-100-engagements` — interactive scatter plot, raw data CSV with source URLs for verification, methodology.

**Risk:** Sourcing public data on timelines is error-prone. Address by requiring at least two independent sources for each datapoint and excluding ambiguous cases. Publish the full source list so readers can audit.

---

## 5. The MITRE ATT&CK Coverage Gap — What SMB Pen Tests Actually Find vs Report

**Hypothesis:** When small-to-mid-sized businesses get a pen test, the report typically references MITRE ATT&CK tactics. But the actual coverage is thin — a typical SMB pen test exercises 8–15 ATT&CK tactics, not the full 14 tactics x ~150 techniques. We map what real SMB pen tests *actually* cover vs what they *claim* to cover.

**Data source:**
- QUANT LAB's own pen-test engagement reports (anonymized, with client permission)
- Public NIST SP 800-115 reference assessments
- Public BSidesAtlanta / DEF CON SMB pen-test case studies
- 30-respondent survey of MSSPs and IT directors on what their last pen test covered

**Execution effort:** ~7 engineer-days. Mostly anonymization + methodology mapping.

**Spend:** $0

**Expected pickup angle:** "Most SMB Pen Tests Cover Less Than 30% of MITRE ATT&CK. Here's What's Getting Missed." Strong for Dark Reading, CSO Online, SC Media, Cybersecurity Dive.

**Target outlets:**
1. Dark Reading (Tara Seals, Fahmida Y Rashid)
2. Cybersecurity Dive (Eric Geller, David Jones)
3. CSO Online
4. SC Media
5. Krebs on Security (long shot, but worth one personal email)

**Publication artifact:** `/blog/smb-pen-test-mitre-attack-coverage-gap-2026` — heatmap of what's typically covered vs not, downloadable "ATT&CK coverage self-assessment" checklist, methodology.

**Risk:** Requires client written permission for any anonymized data use. Get this in writing for at least 8 representative engagements before publishing.

---

## 6. Georgia Tech Ecosystem Wage Gap — Why Macon Dev Shops Charge Less Than Atlanta

**Hypothesis:** Georgia's "tech corridor" is treated as monolithic in coverage, but rates and salaries vary 30–50% between Macon, Atlanta, Athens, Savannah, Augusta, and Columbus. We map the actual delta with BLS data + a local-survey overlay.

**Data source:**
- BLS Occupational Employment and Wage Statistics — Software Developers in GA, by MSA
- Public salary data from levels.fyi, Glassdoor, LinkedIn for Atlanta-headquartered tech employers
- Survey of 30+ Georgia-based independent developers and small dev shops

**Execution effort:** ~5 engineer-days

**Spend:** $0

**Expected pickup angle:** "Georgia's Tech Corridor Is Three Different Markets — and Atlanta Companies Are Overpaying." Strong regional angle for Georgia Trend, Atlanta Business Chronicle, SaportaReport, Macon Telegraph.

**Target outlets:**
1. Georgia Trend
2. SaportaReport (Maria Saporta)
3. Atlanta Business Chronicle
4. Macon Telegraph (Wayne Crenshaw or successor)
5. Hypepotamus

**Publication artifact:** `/blog/georgia-tech-wage-gap-by-city-2026` — interactive map, downloadable data, methodology.

**Risk:** Small survey sample size for non-Atlanta cities. Disclose and triangulate with BLS data.

---

## 7. The Real Cost of HIPAA-Aware Custom Software for Small Healthcare Operators

**Hypothesis:** Off-the-shelf "HIPAA-compliant" SaaS quotes mislead small healthcare operators. The actual ongoing cost — BAAs, audit logs, employee training, encryption-at-rest infrastructure, breach notification readiness — runs 2.5–5x the quoted SaaS price. We quantify it with a 25-clinic survey.

**Data source:**
- 25-respondent survey of small healthcare practice operators (dentists, physical therapy, mental health, urgent care)
- QUANT LAB's own HIPAA-aware build engagement data
- Public OCR breach reports for context

**Execution effort:** ~6 engineer-days

**Spend:** $0–$200 (recruitment ad spend if needed)

**Expected pickup angle:** "Small Healthcare Operators Are Spending 4x the SaaS Quote on HIPAA — Here's Why." Strong for Healthcare IT News, HIStalk, Becker's, FierceHealthcare.

**Target outlets:**
1. Healthcare IT News
2. HIStalk (Mr. HIStalk)
3. Becker's Hospital Review
4. FierceHealthcare
5. Modern Healthcare

**Publication artifact:** `/blog/hipaa-aware-custom-software-real-cost-2026` — cost breakdown calculator, methodology, downloadable HIPAA cost-estimation worksheet.

**Risk:** Survey recruitment for healthcare operators is slow. Allow 6 weeks of fielding, not 2.

---

## 8. State of Penetration Testing for Series A Startups — 2026 Benchmark

**Hypothesis:** Series A startups are systematically under-tested. They get a single pen test before SOC 2 audit and never again — until something breaks. We benchmark testing cadence across 75 Series A companies.

**Data source:**
- 75-respondent survey of CTOs and security leads at Series A US startups (recruit via LinkedIn, founder Slack groups, YC alumni network)
- Cross-reference with public security incidents at Series A companies in 2024-2026
- QUANT LAB's own engagement data with growth-stage clients

**Execution effort:** ~9 engineer-days

**Spend:** $0–$300

**Expected pickup angle:** "Series A Startups Test Their Code Once and Pray. Here's What the Data Says About When They Get Breached." Strong for TechCrunch security beat, The Information, Cybersecurity Dive.

**Target outlets:**
1. TechCrunch security desk
2. Cybersecurity Dive
3. The Information
4. Dark Reading
5. SC Media

**Publication artifact:** `/blog/series-a-pen-test-cadence-benchmark-2026` — cadence histogram, breach rate correlation, free "pen test cadence calculator" tool.

**Risk:** CTOs are slow to respond to cold surveys. Use existing network + YC alumni connections for recruitment.

---

## 9. The Software Tools Small Dev Shops Actually Use — 2026 Edition

**Hypothesis:** Industry surveys (StackOverflow, Jetbrains) capture what FAANG-employed devs use. But the small-shop tool stack is different: more bias toward Next.js, Stripe, Supabase, Vercel, Cursor, Claude Code, Notion, Linear. We survey 200 small dev shop owners and map the actual stack.

**Data source:**
- Originated 200-respondent survey of US small dev shop owners (1–15 employees)
- Recruit via Clutch profiles, GoodFirms profiles, Indie Hackers, LinkedIn, the firm's network
- Cross-reference with public agency websites (often list their stack)

**Execution effort:** ~8 engineer-days

**Spend:** $0–$400 (Tally + recruitment ad)

**Expected pickup angle:** "The Small Dev Shop Tech Stack Looks Nothing Like StackOverflow's Survey — Here's the Actual 2026 Stack." Strong for The Pragmatic Engineer, Hacker News, Indie Hackers, Built In.

**Target outlets:**
1. The Pragmatic Engineer
2. Indie Hackers newsletter
3. Built In
4. CIO Dive
5. Hacker News (organic submission)

**Publication artifact:** `/blog/small-dev-shop-tech-stack-survey-2026` — interactive stack visualization, raw CSV download, methodology.

**Risk:** Survey may attract self-selection bias toward newer shops. Disclose.

---

## 10. The Outsourcing-vs-AI Calculator: When Does AI-Assisted US Dev Beat Offshore on TCO?

**Hypothesis:** There's a defensible math model for when an AI-assisted US developer beats an offshore agency on total cost of ownership. The crossover point used to be never. As of 2026, the model says it's roughly: AI-assisted US dev wins on TCO once project complexity exceeds ~80 story points, OR project duration exceeds 14 weeks, OR client iteration velocity > 2 cycles/week.

**Data source:**
- QUANT LAB's own engagement data
- Public offshore agency rate cards (Toptal, Upwork enterprise, top India agencies' public pricing)
- Reproducible TCO model (Python notebook) with documented assumptions and sensitivity analysis

**Execution effort:** ~10 engineer-days

**Spend:** $0

**Expected pickup angle:** "When AI-Native US Devs Beat Offshore on Total Cost — and When They Don't. The Crossover Math." This is the centerpiece of the Q2 hero campaign. It pairs naturally with the survey from study #2.

**Target outlets:**
1. The Pragmatic Engineer
2. Lenny's Newsletter
3. The Information
4. TechCrunch
5. CIO Dive

**Publication artifact:** `/tools/offshore-vs-ai-dev-calculator` — interactive web tool that lets a founder plug in their project parameters and see the TCO crossover. Also `/blog/when-ai-native-us-dev-beats-offshore-tco` — the analysis piece.

**Risk:** The TCO model has many assumptions. Publish all assumptions explicitly with sensitivity analysis. Make the underlying notebook public so readers can audit.

---

## Execution sequencing — first 6 months

| Month | Primary study | Supporting work |
|---|---|---|
| **June 2026** | #1 Cost Index by US City | #6 Georgia Tech Wage Gap (sub-piece, regional pickup) |
| **July 2026** | (publish #1) | Begin recruiting for #2 survey |
| **August 2026** | #4 Time-to-MVP | Survey for #3 Stripe Connect launches |
| **September 2026** | #2 AI vs 2024 cost-per-feature | Begin recruiting for #10 calculator data |
| **October 2026** | #10 Offshore-vs-AI Calculator | Publish #3 Stripe Connect survey |
| **November 2026** | #5 MITRE ATT&CK Coverage Gap | Plan Q3 study (#7 HIPAA, #8 Series A pen test, #9 small-shop stack) |

Two big-pickup studies per quarter (#1 + #4 in Q1; #2 + #10 in Q2). Smaller pieces fill gaps and feed reactive pitches.

---

## Note on AI-generated data

Several of these studies use AI to assist with data extraction (e.g., reading 100 founder blog posts to extract MVP timelines). The principle to enforce in every study:

> AI is allowed in extraction. AI is not allowed in fabrication. Every datapoint must trace to an external source URL, an internal anonymized engagement record, or a named survey respondent.

If a number cannot be defended on a phone call with a journalist, it does not get published. This is what separates QUANT LAB's data studies from the generic "we asked ChatGPT to make up stats" content that has flooded the industry since 2023 and that journalists now actively distrust.
