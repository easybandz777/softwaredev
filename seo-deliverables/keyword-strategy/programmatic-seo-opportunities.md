# QUANT LAB USA — Programmatic SEO Opportunities (Wave 6)

**Date:** 2026-05-16
**Companion to:** `long-tail-100.md`, `topical-cluster-map.md`
**Purpose:** Identify scalable URL templates that can spawn 50+ pages from one template — with **real data, real unique value per page, and zero doorway-spam risk.**

---

## Anti-doorway-spam guardrails (non-negotiable)

Google's August 2022 helpful-content update and the March 2024 spam policy update both target programmatic pages that have no per-instance value. Any template we ship must pass all of these:

1. **Real data per instance.** Not just a city name swapped in. Each page surfaces a unique data point (cost benchmark, regulatory note, named local entity, real screenshot, etc.).
2. **Unique on-page content per instance.** At least 40% of body copy is generated from per-instance inputs, not template boilerplate.
3. **A real user could find a non-obvious answer here.** If the page is a thin restatement of "we do X in Y city," kill it.
4. **A real human reviews the first 10 pages before scaling.** No "generate 500 pages overnight" workflow without sampled QA.
5. **Internal links go somewhere useful.** Each page must link to a real pillar page, a real case study, and at least one related programmatic sibling.
6. **No JSON-LD spam.** Each schema.org block must be valid for the actual content, not a stuffed local-business-everywhere template.

If a template can't pass all six, we don't ship it. Period.

---

## Play 1 — City × Service Matrix (75 pages from 1 template)

### The opportunity

We already have 14 city hubs (`/software-development-{city}-{state}`) and 21 service pages. The intersection is the missing inventory. SERP demand for "{service} {city}" is real and reachable — e.g., "penetration testing atlanta," "custom CRM development nashville," "stripe integration consultant chicago."

Existing infrastructure: we built one city sub-service page (`/services/penetration-testing/[city-state]/` pattern is dormant — needs to be activated). Wave 6 programmatic play activates this for 5 high-value services × 15 cities = 75 pages.

### The 5 services in scope

Picked by hourly rate × demand × geo-portability:
1. **penetration-testing** — highest unit rate, transactional intent
2. **stripe-integration** — bounded scope, named-tech specificity
3. **custom-crm-development** — high commercial intent, generic enough to localize
4. **saas-platform-development** — broad applicability
5. **ai-integration-services** — emerging vertical

### The 15 cities in scope

All 14 existing city hubs + Raleigh-Durham (high tech density, no current page):

Atlanta GA, Augusta GA, Austin TX, Charlotte NC, Chicago IL, Columbus GA, Dallas TX, Macon GA, Miami FL, Nashville TN, New York NY, San Francisco CA, Savannah GA, Seattle WA, Raleigh NC (new).

### URL template

`/services/{service-slug}/{city-slug}-{state-code}`

Examples:
- `/services/penetration-testing/atlanta-ga`
- `/services/stripe-integration/austin-tx`
- `/services/custom-crm-development/charlotte-nc`
- `/services/ai-integration-services/seattle-wa`

### Per-instance unique data (the 6 inputs that make each page non-spam)

For each page, the generator pulls:

| # | Input | Source | Example for "penetration-testing × Atlanta GA" |
|---|---|---|---|
| 1 | **Local market hourly rate range** | Internal pricing benchmark + 1 public source (Clutch / Glassdoor) | "$180–$250/hr for senior pentesters in Atlanta as of May 2026" |
| 2 | **Local regulatory bodies / industries served** | Hand-curated CSV of city × top-3 industries | "Atlanta-area fintech, healthtech (HIPAA), and logistics" |
| 3 | **Named local landmark / tech-scene reference** | Hand-curated CSV (1 sentence) | "From Tech Square to Buckhead, we serve startups within the I-285 perimeter" |
| 4 | **1 anonymized local case study reference** | Pulled from /work/ + extended | "Recent Atlanta engagement: AD pentest for a 60-seat fintech (MITRE-ATT&CK mapped)" |
| 5 | **Local cost-of-living index multiplier** | Public BLS data | "Atlanta cost-of-living index 102 — our rate aligns with metro median" |
| 6 | **City-specific FAQ** | 3 questions: travel/onsite, contracts, compliance hint | "Q: Do you do onsite engagement in Atlanta? A: Yes — 2 hr drive from Macon HQ" |

### Per-instance body copy template (≥40% unique content)

```markdown
# {Service} in {City}, {State}

QUANT LAB USA delivers {service} for {city} businesses from our Macon, GA headquarters
— under 2 hours from {city} for onsite engagement.

## {City} market context — {month} {year}
{Input 1: hourly rate range with rationale}
{Input 3: landmark/scene reference}

## What {city} buyers typically need
{Input 2: top-3 local industries served, expanded into 1 paragraph}

## Recent {city} engagement (anonymized)
{Input 4: case study reference, 80–120 words}

## How {city} pricing compares
{Input 5: cost-of-living context vs national average}

## {City}-specific FAQ
{Input 6: 3 Q&A pairs}

## Related work
- /work/{related-case-study-1}
- /work/{related-case-study-2}

## Next step
{Conversion CTA + booking link}
```

Template boilerplate (logo, nav, footer, schema.org LocalBusiness wrap) is identical across all 75 pages. The body copy is ~70% unique per instance after the 6 inputs are filled in.

### Why this is genuinely useful (and not doorway spam)

- A buyer in Charlotte who searches "penetration testing charlotte nc" sees a page that names their market, references a comparable recent engagement, and quotes a defensible local rate — three things no competing page does.
- The page solves a real research question: "Does this vendor actually serve my market and is the price aligned?"
- We don't fabricate local presence. Every page is honest: "Macon HQ, serves {city} remote + onsite within 2-3 hr drive radius."

### Build plan

| Step | Effort | Owner |
|---|---|---|
| Build city × service CSV with all 6 inputs (75 rows) | 12 hrs | Bill (hand-curate inputs 2, 3) + research script (inputs 1, 5) |
| Build Next.js dynamic route + MDX template | 4 hrs | Dev |
| Generate first 10 pages, human QA each | 4 hrs | Bill review |
| Ship remaining 65 once QA passes | 1 hr | Dev script |
| Submit URLs to Google Search Console via /api/indexnow | 30 min | Existing IndexNow setup |

**Total to first 10 pages live: 16 hrs over 4 days. Total to all 75: 21 hrs over 7 days.**

### Expected outcome (gut estimate, not tool-validated)

- **3-month indexation:** 60-70 of 75 pages
- **6-month traffic:** 200-500 organic sessions/mo at maturity (skewed toward Atlanta, Macon, Austin, Charlotte)
- **Lead conversion:** 1-3 qualified discovery calls/mo from the cluster at maturity
- **Risk:** If the first 20 pages don't index within 8 weeks, kill the play and refund effort into Tier-1 keyword landing pages

---

## Play 2 — Industry × Compliance Framework Matrix (35 pages from 1 template)

### The opportunity

Compliance is the #1 buyer hesitation in regulated verticals. Every industry has a different framework stack (healthcare = HIPAA, fintech = PCI + SOC 2, e-commerce = PCI, etc.). Buyers Google "{compliance framework} software development {industry}" before contacting vendors.

We already have:
- 9 /industries/ pages
- 11+ compliance glossary entries (HIPAA, PCI-DSS, SOC 2, OWASP, MITRE ATT&CK, zero-trust, FIDO2, etc.)
- /services/penetration-testing as the security pillar

The intersection is unbuilt: there's no "{compliance framework} for {industry}" landing page.

### The 7 industries in scope

Picked by regulatory density and the existence of an /industries/ page:
1. **healthcare** — HIPAA, HITECH, FDA (for medical-device SaaS)
2. **fintech** — PCI-DSS, SOC 2, SOX, GLBA
3. **e-commerce** — PCI-DSS, CCPA/GDPR, PSD2 (international)
4. **insurance** — NAIC Model Law, SOC 2
5. **legal-services** — ABA Model Rules, SOC 2
6. **manufacturing** — NIST CSF, ISO 27001, ITAR (for defense suppliers)
7. **saas** — SOC 2 (table stakes), GDPR, CCPA

### The 5 frameworks in scope

PCI-DSS, SOC 2, HIPAA, NIST CSF, ISO 27001.

Total matrix: 7 industries × 5 frameworks = 35 pages. (Not every cell is meaningful; we ship only the meaningful 25–30.)

### URL template

`/compliance/{framework-slug}-for-{industry-slug}`

Examples:
- `/compliance/hipaa-for-healthcare`
- `/compliance/pci-dss-for-fintech`
- `/compliance/soc-2-for-saas`
- `/compliance/nist-csf-for-manufacturing`

### Per-instance unique data (the 7 inputs)

| # | Input | Source | Example for "PCI-DSS × Fintech" |
|---|---|---|---|
| 1 | **Why this framework applies to this industry** | Hand-curated, 1 paragraph | "Any fintech processing card data falls in PCI scope from day 1, even pre-revenue" |
| 2 | **The 3 most common gaps for {industry} startups** | Hand-curated from our pentest experience | "1) Webhook signature verification, 2) Logging cardholder data, 3) Vault rotation" |
| 3 | **Typical SaaS feature implications** | 1 paragraph on what your codebase has to do | "Tokenize at edge, store nothing past auth, scope segment by network not just app" |
| 4 | **Anonymized recent engagement reference** | 1 sentence pulled from /work/ + paraphrased | "We pentested a 45-seat embedded-payments fintech in Q1 2026 with PCI-mapped findings" |
| 5 | **Cost benchmark for {framework}+{industry}** | Synthesis of our pricing + public benchmarks | "PCI-DSS readiness + pentest for a fintech: $25K–$40K. Full attestation cost varies." |
| 6 | **The 1 thing buyers most often skip** | Opinion-led, draws from real experience | "Most fintech founders forget the in-scope dev laptops; that's a sev-2 every time" |
| 7 | **Cross-link to most-relevant case study or service** | Existing /work/ + /services/ | Links to /work/j5-sales-os + /services/penetration-testing + /blog/pci-dss-compliance-saas-checklist |

### Per-instance body copy template (≥40% unique content)

```markdown
# {Framework} for {Industry} — A 2026 Founder's Guide

## Why {framework} matters for {industry} startups
{Input 1: applicability paragraph}

## The 3 most common gaps we find in {industry} {framework} audits
{Input 2: 3 named gaps with 2-sentence explanations}

## What your codebase has to do (concretely)
{Input 3: feature implications}

## Recent {industry} engagement
{Input 4: anonymized reference}

## Real cost benchmark
{Input 5: $-range + variability notes}

## The thing founders skip
{Input 6: opinion-led, distinctive POV}

## Related work
{Input 7: cross-links}

## How we can help
{CTA: scope a {framework}+{industry} engagement}
```

### Why this is genuinely useful

- Each page answers "Does {framework} apply to my {industry} startup, what does compliance actually require in code, and how much will it cost?" — three questions every regulated-vertical founder asks and no single competing page answers in one place.
- The "1 thing buyers most often skip" input alone makes each page memorable: it's an opinion-led, experience-derived insight that AI-generated competitor content can't replicate.
- The /compliance/ URL path is currently empty on the site → no risk of cannibalizing existing rankings.

### Build plan

| Step | Effort | Owner |
|---|---|---|
| Build 7×5 matrix CSV, mark the ~28 meaningful cells | 3 hrs | Bill |
| Hand-write the 7 inputs per cell (~30 min/cell × 28 cells) | 14 hrs | Bill (high-context — only Bill can write input 6 credibly) |
| Build Next.js dynamic route + MDX template | 3 hrs | Dev |
| Generate first 5 pages, human QA | 2 hrs | Bill |
| Ship remaining 23 once QA passes | 1 hr | Dev script |
| Submit to GSC + LinkedIn cross-post per industry | 2 hrs | Bill |

**Total to first 5 pages: 22 hrs. Total to all 28: 25 hrs.**

### Expected outcome

- **6-month traffic:** 150-400 organic sessions/mo at maturity (skewed toward fintech, healthcare, SaaS)
- **Lead conversion:** 0.5-2 qualified pentest discovery calls/mo
- **Defensive value:** Establishes our compliance-services positioning before competitors build the same matrix

---

## Play 3 — Stack × Use-Case Tutorial Series (50 pages from 1 template)

### The opportunity

Developer-SEO is the highest-credibility traffic source — when a dev finds a tutorial that solves their exact problem, they remember the author. The intersection of {tech stack} × {use case} produces dozens of tutorial-worthy combinations we have real expertise in.

Existing infrastructure:
- We run Next.js 16 + TypeScript + Postgres + Vercel + Stripe + (now) AI APIs
- We have 31 blog posts but only ~6 are pure dev tutorials
- The tutorial format converts on a different time horizon (3-6 months to first hire) but with much higher trust

This is our best top-of-funnel **technical authority** play.

### The 10 stack components in scope

Next.js 16, TypeScript, Postgres, Stripe, Vercel, Anthropic Claude API, OpenAI API, Tailwind, Drizzle, Resend.

### The 8 use cases in scope

1. Authentication (passkeys, magic-link, OAuth, JWT)
2. Payments (one-time, subscription, marketplace, invoices)
3. AI features (chat, search, summarization, agent, RAG)
4. Email (transactional, drip, broadcast, deliverability)
5. Analytics (event tracking, dashboards, exports)
6. Multi-tenancy (RLS, schema-per-tenant, billing isolation)
7. File storage (uploads, S3, signed URLs, thumbnails)
8. Background jobs (cron, queues, retries, idempotency)

Total possible combinations: 10 × 8 = 80. We'd ship the meaningful ~50 (some combinations don't make sense — e.g., "Tailwind for background jobs").

### URL template

`/guides/{stack}-for-{use-case}-{year}`

Examples:
- `/guides/nextjs-for-authentication-2026`
- `/guides/stripe-for-marketplace-payments-2026`
- `/guides/claude-api-for-chat-2026`
- `/guides/postgres-for-multi-tenancy-2026`

### Per-instance unique content (the 5 sections, ALL bespoke)

Unlike Plays 1 and 2, this template is **not** mostly machine-fillable. Each tutorial is hand-written by Bill (or future contributors with editorial oversight). The "template" is the URL structure, sidebar nav, and the 5-section outline:

1. **What problem this solves (2 paragraphs)** — opinionated framing of when to use this combo and when not to
2. **Minimum viable code (1 working example, runnable)** — copy-paste-ready snippet, tested
3. **The 3 gotchas no one talks about** — experience-derived warnings
4. **Production checklist (10–15 items)** — what to verify before shipping
5. **Related guides + service CTA** — cross-link to sibling /guides/ + the matching /services/ page

Estimated word count per page: 1,200–2,000 (longer than a blog post, denser than a service page).

### Why this is genuinely useful

- Each page is hand-written by a working practitioner, not synthesized
- The "3 gotchas no one talks about" is the load-bearing differentiator — generic AI-written tutorials skip this, and Reddit/HN respond very well to it
- /guides/ as a path signals "reference content" vs /blog/ "essay content" — encourages bookmarking
- Internal linking from /guides/{X-for-Y} to /services/{matching-stack} establishes a clean conversion path for the rare reader who's both technical and authorized to buy

### Build plan (very different from Plays 1 & 2)

This is **not bulk-generated.** It's a slow-burn editorial sprint.

| Step | Effort | Owner |
|---|---|---|
| Build URL matrix CSV (80 combos, mark meaningful ~50) | 2 hrs | Bill |
| Write 5 pilot guides (a strong cross-section) | 25 hrs (5 hrs/guide) | Bill |
| Human review + adjust template based on what worked | 2 hrs | Bill |
| Establish 1-guide-per-week cadence (target: 50 in ~12 months) | ongoing | Bill or contributor |

**Initial 5 guides: 27 hrs. Full 50 guides: ~12 months at 1/week.**

Critical: **never bulk-generate.** This play dies the moment we use an LLM to write the gotchas section. The whole point is hand-earned expertise.

### Expected outcome

- **12-month traffic:** 1,500-4,000 organic sessions/mo (skewed toward popular combos like Next.js + Auth, Stripe + Marketplace, Claude + RAG)
- **Lead conversion:** 1-3 inbounds/mo, mostly mid-funnel (devs who tell their boss / founders who read the gotchas list)
- **Compounding effect:** Each guide ranks for 5-15 long-tail queries; total guide cluster could capture 200+ keywords over 18 months
- **Authority halo:** Strongest backlink-magnet of the three plays — dev tutorials get linked from Stack Overflow, Reddit, dev.to, and HN comments

---

## Comparison of the 3 plays

| Dimension | Play 1 (City × Service) | Play 2 (Industry × Compliance) | Play 3 (Stack × Use-Case) |
|---|---|---|---|
| Pages spawned | 75 | 28 (meaningful subset of 35) | 50 (meaningful subset of 80) |
| Time to first page live | 4 days | 6 days | 5 days (per guide, hand-written) |
| Time to full inventory | 7 days | 7 days | 12 months |
| Bulk-generation safe? | Yes (with hand-curated inputs CSV) | Yes (with hand-curated inputs CSV) | **NO** — hand-written only |
| Intent | Commercial / Transactional | Commercial | Informational (dev) → Commercial (founder) |
| Conversion velocity | 2-4 months to first lead | 3-6 months | 6-12 months |
| Backlink potential | Low | Medium (compliance pros link these) | **High** (dev community links these) |
| Risk of feeling spammy | Medium (mitigated by 6 unique inputs) | Low (high content density per page) | Zero (entirely bespoke) |
| Best for | Local discovery, GMB synergy | Defensive positioning in regulated verticals | Long-term technical authority |

---

## Sequencing recommendation

1. **Start Play 1 immediately** — 7 days to 75 pages, lowest editorial overhead, fastest indexation signal. Validates whether programmatic works for our domain.
2. **Start Play 2 in weeks 2-3** — overlap with Play 1's QA cycles. Compliance pages take longer per-cell but ship in days not months.
3. **Start Play 3 in week 4 with a 5-guide pilot** — slow-burn, lowest immediate ROI, highest long-term moat. Treat as a 12-month investment.

Total Wave-6 programmatic output if all three plays execute:
- **Plays 1 + 2 in 14 days:** 103 net-new programmatic pages
- **Play 3 over 12 months:** 50 hand-written guides

---

## What we explicitly will NOT do

- **No "{service} near me" pages spawned by JS user-geo detection.** Doorway-spam pattern; killed by Google.
- **No 500-city expansion of Play 1.** Stops at 15 cities where we can credibly serve. "Software development [random city]" pages without local hooks are exactly the pattern Google penalizes.
- **No AI-generated "guides" for Play 3.** The differentiator is hand-earned gotchas; AI output destroys the value prop.
- **No /pricing/{service}/{city} pages.** Pricing varies per scope; templated pricing pages are misleading and convert poorly.
- **No bulk-published /vs/{competitor-A}-vs-{competitor-B} pages where we're not involved.** Captures clicks but bad UX and bad conversion.

---

*End of programmatic-seo-opportunities.md (Wave 6 keyword strategy).*
