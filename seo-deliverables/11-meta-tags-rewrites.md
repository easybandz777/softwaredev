# Meta Tags & OG Tags Audit + Rewrites — quantlabusa.dev

**Audited:** 2026-05-12
**Domain:** quantlabusa.dev (QUANT LAB USA / QuantLab Software Solutions)
**Owner:** William Beltz — Macon, GA HQ
**Source of truth:** Next.js `metadata` exports in `/src/app/**/page.tsx` + root `layout.tsx`
**Pages audited:** 15 indexable routes (homepage, services index, 6 service detail pages, work index, 4 case-study detail pages, FAQ, About, Privacy, Terms)
**Length conventions used:** Title 50–60 chars optimal (flag <30 or >65). Description 150–160 optimal (flag <120 or >170).

---

## Site-Wide Observations

| Issue | Detail |
|---|---|
| Brand suffix wastes characters | Every title ends in `\| QuantLab Software Solutions` (28 chars). On 60-char budget, that leaves only 32 chars for the keyword phrase. Recommend shortening to `\| QuantLab` (10 chars) or removing entirely on long-tail pages. |
| OG image is generic | Every page uses `/logo.png` (512×512). This is NOT a valid OG image (must be 1200×630). Social shares render with massive white-space + tiny logo. **Highest-impact site-wide fix.** |
| Twitter card type | Root uses `summary` (small card). Should be `summary_large_image` once 1200×630 OG images exist. |
| Homepage has no canonical | Root `metadata` block has no `alternates.canonical`. Other pages have it. |
| `google-site-verification` placeholder | Line 124 in `layout.tsx` still contains `REPLACE_WITH_VERIFICATION_TOKEN`. |
| Title tag on homepage too short | "QuantLab Software Solutions" = 27 chars. Wastes the most valuable real estate on the site. No keyword, no hook, no benefit, no number. |
| `metadataBase` is set | Good — `https://quantlabusa.dev` configured in root layout. |
| Print / Admin / Sales | Not in sitemap, internal-only. Excluded from this audit. Consider adding explicit `robots: { index: false }` to those layouts. |

---

## Page-by-Page Audit + Rewrites

### 1. Homepage — `/`

| Field | Current | Length | Flag |
|---|---|---|---|
| `<title>` | QuantLab Software Solutions | 27 | **TOO SHORT** + no keyword + no hook |
| `<meta description>` | Custom software development and cybersecurity services. CRM systems, trading bots, web applications, and penetration testing. | 130 | **TOO SHORT** (<150) |
| `og:title` | QuantLab Software Solutions | 27 | TOO SHORT |
| `og:description` | (same as meta) | 130 | TOO SHORT |
| `og:image` | /logo.png (512×512) | — | **WRONG DIMENSIONS** (needs 1200×630) |
| `twitter:title` | QuantLab Software Solutions | 27 | TOO SHORT |
| `twitter:description` | Custom software development and cybersecurity services. | 56 | **WAY TOO SHORT** |
| `twitter:card` | summary | — | Should be `summary_large_image` |
| `canonical` | — | — | **MISSING** |
| Keyword in title? | No (brand-only) |
| CTR hook? | None |

**Rewrite proposal:**

| Field | Recommended | Length |
|---|---|---|
| `<title>` | Custom Software & Cybersecurity Dev — Georgia \| QuantLab | 56 |
| `<meta description>` | Founder-led custom software, trading systems, and pentesting based in Macon GA. CRMs, Stripe billing, MITRE ATT&CK red team. Book a free consultation. | 152 |
| `og:title` | Custom Software & Pentesting Built by an Engineer, Not an Agency | 64 |
| `og:description` | QuantLab ships CRMs, trading bots, Stripe billing, and full-scope pentests across 14 Georgia cities. Direct work with the founder. Free scoping call. | 155 |
| `og:image` | **NEW 1200×630**: dark `#0d1526` bg, top-left QL logo, headline "Custom Software + Cybersecurity. Built by the engineer who ships it." sub "QuantLab — Macon, GA". Cyan/violet gradient corner glow. |
| `canonical` | `https://quantlabusa.dev/` |
| `twitter:card` | `summary_large_image` |

---

### 2. Services Index — `/services`

| Field | Current | Length | Flag |
|---|---|---|---|
| `<title>` | Services \| QuantLab Software Solutions | 39 | SHORT — single word in front |
| `<meta description>` | Custom software development, algorithmic trading systems, web applications, cybersecurity, and cloud infrastructure services. | 126 | SHORT (<150) |
| `og:image` | inherited `/logo.png` | — | WRONG DIMENSIONS |
| `canonical` | https://quantlabusa.dev/services | — | OK |
| Keyword in title? | Weak — "Services" alone isn't a commercial keyword |
| CTR hook? | None (no number, no benefit) |

**Rewrite proposal:**

| Field | Recommended | Length |
|---|---|---|
| `<title>` | 6 Software & Security Services for Real Businesses \| QuantLab | 62 |
| `<meta description>` | Custom CRMs, trading bots, Stripe billing, web apps, pentesting, and cloud infra — six services shipped end-to-end. See what we build and request a free quote. | 158 |
| `og:title` | What We Build: 6 Software + Security Services |
| `og:description` | From custom CRMs to MITRE ATT&CK red team engagements. Six services shipped end-to-end by the engineer who built your project. |
| `og:image` | **1200×630**: 6-up grid of service icons (Terminal, Bot, Globe, CreditCard, Shield, Lock) over dark grid. Headline "Six Services. One Engineer. Zero Handoffs." |
| `canonical` | `https://quantlabusa.dev/services` |

---

### 3. Custom Business Software — `/services/custom-business-software`

| Field | Current | Length | Flag |
|---|---|---|---|
| `<title>` | Custom Business Software Development \| QuantLab Software Solutions | 66 | **TOO LONG** (>65) |
| `<meta description>` | Custom CRM, ERP, operations dashboards, work order systems, and internal tools built around your workflow. Shipped for motorcycle shops, contractors, musicians, and trading firms. | 178 | **TOO LONG** (>170) — will truncate |
| Keyword in title? | Yes — "Custom Business Software Development" |
| CTR hook? | None |

**Rewrite proposal:**

| Field | Recommended | Length |
|---|---|---|
| `<title>` | Custom CRM, ERP & Internal Tools — Built to Fit \| QuantLab | 58 |
| `<meta description>` | Custom CRMs, dashboards, and work order systems built around your workflow — not Salesforce's. Shipped across 4 industries. Free scoping call in 24 hours. | 155 |
| `og:title` | Stop Reshaping Your Business Around Salesforce |
| `og:description` | Custom CRMs, ERPs, and internal tools designed around how your business actually runs. Working v1 in 4–8 weeks. You own the code. |
| `og:image` | **1200×630**: laptop mock with dashboard UI on left, copy on right "Custom CRMs Built to Fit. Not Off-the-Shelf." sub "4 industries shipped. You own the code." |
| `canonical` | `https://quantlabusa.dev/services/custom-business-software` |

---

### 4. Algorithmic Trading Systems — `/services/algorithmic-trading-systems`

| Field | Current | Length | Flag |
|---|---|---|---|
| `<title>` | Algorithmic Trading Systems Development \| QuantLab Software Solutions | 69 | **TOO LONG** (>65) |
| `<meta description>` | Custom algorithmic trading bot development. Live systems with MA Supertrend, VWAP, momentum, and multi-strategy setups. Real-time feeds, risk controls, 24/7 uptime. 5 systems deployed. | 184 | **TOO LONG** (>170) |
| Keyword in title? | Yes |
| CTR hook? | Weak — "5 systems deployed" buried at end of description |

**Rewrite proposal:**

| Field | Recommended | Length |
|---|---|---|
| `<title>` | Algorithmic Trading Bot Development — 5 Live Systems \| QuantLab | 64 |
| `<meta description>` | Custom trading bot development for MA Supertrend, VWAP, and momentum strategies. 5 live systems running real money with <12ms latency and 24/7 uptime. Get a build quote. | 169 |
| `og:title` | 5 Live Trading Bots. <12ms Latency. Real Money. |
| `og:description` | Custom-built algorithmic trading systems running MA Supertrend, VWAP, and multi-strategy setups on real capital. Risk controls baked into the order path. |
| `og:image` | **1200×630**: dark trading-terminal candlestick background, big neon-green "<12ms" stat, headline "5 Live Trading Bots Running Real Money." |
| `canonical` | `https://quantlabusa.dev/services/algorithmic-trading-systems` |

---

### 5. Web Applications — `/services/web-applications`

| Field | Current | Length | Flag |
|---|---|---|---|
| `<title>` | Web Application & SaaS Development \| QuantLab Software Solutions | 64 | OK (borderline) |
| `<meta description>` | Custom web application and SaaS development with Next.js, React, and TypeScript. Client portals, contractor platforms, artist sites, and full-stack SaaS products deployed on Vercel. | 181 | **TOO LONG** (>170) |
| Keyword in title? | Yes |
| CTR hook? | None |

**Rewrite proposal:**

| Field | Recommended | Length |
|---|---|---|
| `<title>` | Next.js Web App & SaaS Development — Vercel-Ready \| QuantLab | 61 |
| `<meta description>` | Custom Next.js, React, and TypeScript web apps and SaaS products. Client portals, contractor tools, and platforms shipped to production on Vercel — not just demos. | 161 |
| `og:title` | Web Apps Built for Real Use, Not Demo Day |
| `og:description` | Full-stack Next.js and TypeScript web applications and SaaS products. Deployed to Vercel CDN. Client portals, contractor platforms, artist sites. |
| `og:image` | **1200×630**: browser frame with multi-device responsive mocks, headline "Production Web Apps. Next.js + Vercel." sub "Real users. Real load. Not a demo." |
| `canonical` | `https://quantlabusa.dev/services/web-applications` |

---

### 6. Payments, Invoicing & Licensing — `/services/payments-invoicing-licensing`

| Field | Current | Length | Flag |
|---|---|---|---|
| `<title>` | Stripe Integration, Subscription Billing & License Management \| QuantLab Software Solutions | 91 | **WAY TOO LONG** (>65) — will truncate badly |
| `<meta description>` | Stripe integration, ACH payments, auto-invoicing, subscription billing, and custom license servers with JWT validation, usage tracking, and customer seat management. | 165 | OK |
| Keyword in title? | Yes — but buried because tail is truncated |
| CTR hook? | None |

**Rewrite proposal:**

| Field | Recommended | Length |
|---|---|---|
| `<title>` | Stripe Integration, ACH Billing & License Servers \| QuantLab | 61 |
| `<meta description>` | Stripe and ACH integration, auto-invoicing, subscription billing, and JWT-validated license servers with seat management. Live revenue systems shipped. Free quote. | 159 |
| `og:title` | Get Paid. Manage Access. Ship Software. |
| `og:description` | Stripe, ACH, auto-invoicing, subscription billing, and custom license servers with JWT validation, usage tracking, and seat management. |
| `og:image` | **1200×630**: stylized Stripe receipt + license-key code block, headline "Stripe Billing + License Servers. Shipped." |
| `canonical` | `https://quantlabusa.dev/services/payments-invoicing-licensing` |

---

### 7. Penetration Testing — `/services/penetration-testing`

| Field | Current | Length | Flag |
|---|---|---|---|
| `<title>` | Penetration Testing Services \| Red Team & Pentest Georgia, Atlanta \| QuantLab Software Solutions | 97 | **WAY TOO LONG** (>65) |
| `<meta description>` | Full-scope penetration testing: network, wireless, web applications, and Active Directory. Red team engagements with MITRE ATT&CK-mapped reporting. Based in Georgia, serving the US. | 180 | **TOO LONG** (>170) |
| Keyword in title? | Yes — multiple stuffed; geo signal weakens to Google |
| CTR hook? | None |

**Rewrite proposal:**

| Field | Recommended | Length |
|---|---|---|
| `<title>` | Penetration Testing Georgia — 11-Module Red Team \| QuantLab | 60 |
| `<meta description>` | Full-scope pentests: network, wireless, web app, and Active Directory. 11-module red team toolkit mapped to MITRE ATT&CK. Georgia-based, serving the US. Get a scope. | 162 |
| `og:title` | We Break In So Someone Else Doesn't. |
| `og:description` | Network, wireless, web app, and Active Directory pentests with a custom 11-module red team toolkit. Every finding mapped to MITRE ATT&CK. |
| `og:image` | **1200×630**: dark terminal output with redacted command stream, big red "Domain Admin" pill, headline "Real Attacks. Mapped to MITRE ATT&CK." |
| `canonical` | `https://quantlabusa.dev/services/penetration-testing` |

---

### 8. Cloud Infrastructure — `/services/cloud-infrastructure`

| Field | Current | Length | Flag |
|---|---|---|---|
| `<title>` | Cloud Infrastructure, DevOps & CI/CD Consulting \| QuantLab Software Solutions | 78 | **TOO LONG** (>65) |
| `<meta description>` | Cloud infrastructure setup and DevOps consulting. Docker, Nginx, CI/CD pipelines, auto-scaling, Sentry monitoring, and deployments on DigitalOcean, Fly.io, and Vercel. Zero unplanned outages. | 195 | **TOO LONG** (>170) |
| Keyword in title? | Yes |
| CTR hook? | "Zero unplanned outages" is great — bury it less |

**Rewrite proposal:**

| Field | Recommended | Length |
|---|---|---|
| `<title>` | DevOps & CI/CD Consulting — Zero Outages \| QuantLab | 53 |
| `<meta description>` | Docker, Nginx, CI/CD, auto-scaling, and Sentry monitoring on DigitalOcean, Fly.io, and Vercel. Zero unplanned outages across active deployments. Free scoping call. | 162 |
| `og:title` | Deploy, Monitor, Scale — Without the 3am Pages |
| `og:description` | Docker, Nginx, CI/CD, auto-scaling, and monitoring across DigitalOcean, Fly.io, and Vercel. Zero unplanned outages in production. |
| `og:image` | **1200×630**: pipeline diagram (commit → build → deploy → monitor), big green "0" stat for unplanned outages, headline "Zero Unplanned Outages." |
| `canonical` | `https://quantlabusa.dev/services/cloud-infrastructure` |

---

### 9. About — `/about`

| Field | Current | Length | Flag |
|---|---|---|---|
| `<title>` | About \| QuantLab Software Solutions | 36 | SHORT — wasted real estate |
| `<meta description>` | QuantLab is a founder-led software and security shop based in Georgia. We build custom business software, trading systems, and run offensive security assessments — with direct engagement from the engineer who ships the code. | 226 | **WAY TOO LONG** (>170) |
| Keyword in title? | No — "About" only |
| CTR hook? | None |

**Rewrite proposal:**

| Field | Recommended | Length |
|---|---|---|
| `<title>` | About QuantLab — Founder-Led Software & Security Shop, GA | 58 |
| `<meta description>` | QuantLab is founder-led by engineer William Beltz in Macon, GA. We build custom software, trading systems, and run pentests. No account managers, no handoffs. | 158 |
| `og:title` | Founder-Led. No Account Managers. No Handoffs. |
| `og:description` | William Beltz builds custom software, trading systems, and pentests directly with clients across 14 Georgia cities. No agency layer. |
| `og:image` | **1200×630**: founder photo (cropped left), copy block on right "William Beltz. Founder + Engineer. Macon, GA." sub "You hire the person who ships the code." |
| `canonical` | `https://quantlabusa.dev/about` |

---

### 10. FAQ — `/faq`

| Field | Current | Length | Flag |
|---|---|---|---|
| `<title>` | FAQ \| QuantLab Software Solutions | 34 | SHORT |
| `<meta description>` | Answers to common questions about working with QuantLab — engagement process, technology, trading systems, security assessments, and what it's actually like to hire a small, founder-led software shop. | 200 | **TOO LONG** (>170) |
| Keyword in title? | No |
| CTR hook? | None |

**Rewrite proposal:**

| Field | Recommended | Length |
|---|---|---|
| `<title>` | FAQ — How QuantLab Builds, Bills & Ships \| QuantLab | 53 |
| `<meta description>` | Answers about engagement, pricing, ownership of code, trading system risk, pentest scope, and what it's like to hire a founder-led software shop. Read before you book. | 167 |
| `og:title` | What It's Actually Like to Hire QuantLab |
| `og:description` | Pricing, timelines, code ownership, retainers, trading system risk, and pentest scope — answered honestly before the first call. |
| `og:image` | **1200×630**: clean Q/A visual with 3 sample question pills, headline "Questions Answered. Before the First Call." |
| `canonical` | `https://quantlabusa.dev/faq` |

---

### 11. Case Studies Index — `/work`

| Field | Current | Length | Flag |
|---|---|---|---|
| `<title>` | Case Studies \| QuantLab Software Solutions | 43 | OK (low end) |
| `<meta description>` | Real projects we've shipped — trading systems, operations platforms, estimating tools, and penetration tests across financial services, automotive, construction, and more. | 176 | **TOO LONG** (>170) |
| Keyword in title? | "Case Studies" is the keyword |
| CTR hook? | None — no number |

**Rewrite proposal:**

| Field | Recommended | Length |
|---|---|---|
| `<title>` | Case Studies — 4 Shipped Software & Pentest Projects \| QuantLab | 63 |
| `<meta description>` | Four real projects: a multi-strategy trading system, a motorcycle shop ops platform, a contractor estimating engine, and an Active Directory pentest. See how. | 159 |
| `og:title` | 4 Real Projects. Real Outcomes. Real Code. |
| `og:description` | Trading systems, operations platforms, estimating tools, and pentests across financial services, automotive, and construction. |
| `og:image` | **1200×630**: 2×2 grid of project thumbnails (chart, motorcycle, blueprint, lock icons), headline "Four Projects. Shipped." |
| `canonical` | `https://quantlabusa.dev/work` |

---

### 12. Case Study — `/work/multi-strategy-trading-system`

| Field | Current | Length | Flag |
|---|---|---|---|
| `<title>` | Multi-Strategy Trading System Deployment \| QuantLab Case Study | 62 | OK |
| `<meta description>` | (auto = summary) A multi-strategy trading system running MA Supertrend and VWAP in parallel, with real-time feeds, hard risk controls, and 24/7 uptime. Built to trade real money, not to look good in a backtest. | 205 | **TOO LONG** (>170) |
| Keyword in title? | Yes |
| CTR hook? | None — generated mechanically |

**Rewrite proposal:**

| Field | Recommended | Length |
|---|---|---|
| `<title>` | Multi-Strategy Trading System — <12ms Latency Case Study \| QuantLab | 67 → **trim to**: Multi-Strategy Trading Bot — <12ms Latency \| QuantLab Case Study | 65 |
| `<meta description>` | Case study: multi-strategy trading bot running MA Supertrend + VWAP on real capital. Sub-12ms order latency, zero unplanned downtime, full Postgres audit trail. | 159 |
| `og:title` | Case Study: <12ms Trading Bot Running Real Money |
| `og:description` | Multi-strategy live trading system: MA Supertrend + VWAP, real-time feeds, hard risk controls, 24/7 uptime. Zero unplanned downtime since launch. |
| `og:image` | **1200×630**: candlestick chart bg, big neon "<12ms" + "0 downtime" stat boxes. Headline "Live Trading. Real Capital." |
| `canonical` | `https://quantlabusa.dev/work/multi-strategy-trading-system` |
| **Fix at code level** | Update `generateMetadata` in `/src/app/work/[slug]/page.tsx` to compute a 150–160 char description (trim or summary field). Or add a `metaDescription` field to each case study in `/src/lib/case-studies.ts`. |

---

### 13. Case Study — `/work/motorcycle-shop-ops-platform`

| Field | Current | Length | Flag |
|---|---|---|---|
| `<title>` | Motorcycle Shop Operations Platform \| QuantLab Case Study | 58 | OK |
| `<meta description>` | Replaced four disconnected tools — inventory, work orders, scheduling, invoicing — with one custom platform. The shop owner stopped double-entering data and got three or four hours of his week back. | 199 | **TOO LONG** (>170) |
| Keyword in title? | Yes |

**Rewrite proposal:**

| Field | Recommended | Length |
|---|---|---|
| `<title>` | Motorcycle Shop Ops Platform — 4 Tools → 1 \| QuantLab Case Study | 64 |
| `<meta description>` | Case study: replaced inventory, work orders, scheduling, and invoicing — four disconnected tools — with one custom Next.js platform. Owner saved 3–4 hours/week. | 159 |
| `og:title` | Four Tools. One Platform. 3 Hours/Week Back. |
| `og:description` | Custom Next.js shop platform consolidating inventory, work orders, scheduling, and invoicing for an independent motorcycle shop. |
| `og:image` | **1200×630**: stylized motorcycle silhouette + UI screen, headline "4 Tools → 1 Platform. Time Back: 3 Hours/Week." |
| `canonical` | `https://quantlabusa.dev/work/motorcycle-shop-ops-platform` |

---

### 14. Case Study — `/work/contractor-estimating-proposal-engine`

| Field | Current | Length | Flag |
|---|---|---|---|
| `<title>` | Contractor Estimating & Proposal Engine \| QuantLab Case Study | 62 | OK |
| `<meta description>` | A custom estimating engine that turns a 4-hour proposal process into a 20-minute one. Inputs go in, a branded PDF comes out, and the lead lands in the CRM automatically. | 171 | **JUST OVER** (>170) |
| Keyword in title? | Yes |
| CTR hook? | "4 hours → 20 minutes" is great |

**Rewrite proposal:**

| Field | Recommended | Length |
|---|---|---|
| `<title>` | Contractor Estimating Engine — 4hr Quote → 20min \| QuantLab | 60 |
| `<meta description>` | Case study: custom estimating + proposal engine that turned a 4-hour quote process into 20 minutes. Branded PDF output, CRM lead auto-create, consistent margin rules. | 166 |
| `og:title` | Quote in 20 Minutes Instead of 4 Hours |
| `og:description` | Custom estimating + proposal engine for a commercial general contractor. PDF output, automatic CRM lead creation, consistent pricing across the team. |
| `og:image` | **1200×630**: stopwatch graphic with "4h → 20m" callout, blueprint background, headline "Quote in 20 Minutes." |
| `canonical` | `https://quantlabusa.dev/work/contractor-estimating-proposal-engine` |

---

### 15. Case Study — `/work/active-directory-pentest`

| Field | Current | Length | Flag |
|---|---|---|---|
| `<title>` | Active Directory Penetration Test \| QuantLab Case Study | 56 | OK |
| `<meta description>` | A full-scope internal assessment ahead of a compliance audit. Reconnaissance, credential attacks, ADCS abuse, lateral movement, and a documented path to Domain Admin — with an executive-ready remediation roadmap at the end. | 230 | **WAY TOO LONG** (>170) |
| Keyword in title? | Yes |
| CTR hook? | "Domain Admin" buried mid-sentence |

**Rewrite proposal:**

| Field | Recommended | Length |
|---|---|---|
| `<title>` | Active Directory Pentest — Path to Domain Admin \| QuantLab Case Study | 71 → **trim**: AD Pentest Case Study — Standard User → Domain Admin \| QuantLab | 64 |
| `<meta description>` | Case study: full-scope AD pentest with documented attack chain from standard user to Domain Admin. Kerberoasting, ADCS abuse, MITRE ATT&CK mapping. Audit passed. | 162 |
| `og:title` | Standard User → Domain Admin. Documented. |
| `og:description` | Full-scope Active Directory pentest with 11-module custom red team toolkit. Every finding mapped to MITRE ATT&CK. Compliance audit passed first attempt. |
| `og:image` | **1200×630**: attack chain arrow diagram (User → Workstation → Lateral → DC), red-on-black palette, headline "Standard User → Domain Admin." |
| `canonical` | `https://quantlabusa.dev/work/active-directory-pentest` |

---

### 16. Privacy — `/privacy`

| Field | Current | Length | Flag |
|---|---|---|---|
| `<title>` | Privacy Policy \| QuantLab Software Solutions | 45 | OK |
| `<meta description>` | Privacy policy for QuantLab Software Solutions. | 47 | **WAY TOO SHORT** (<120) |
| OG / Twitter / canonical | All inherited / missing |

**Rewrite proposal:**

| Field | Recommended | Length |
|---|---|---|
| `<title>` | Privacy Policy \| QuantLab | 26 (low-priority page, brand-only is fine) |
| `<meta description>` | How QuantLab Software Solutions collects, uses, and protects your information when you submit a consultation request or use the website. Updated April 2026. | 156 |
| `canonical` | `https://quantlabusa.dev/privacy` |
| `robots` | Consider `noindex` (low SEO value, duplicate boilerplate across many sites) |

---

### 17. Terms — `/terms`

| Field | Current | Length | Flag |
|---|---|---|---|
| `<title>` | Terms of Service \| QuantLab Software Solutions | 47 | OK |
| `<meta description>` | Terms of service for QuantLab Software Solutions. | 49 | **WAY TOO SHORT** |
| OG / Twitter / canonical | Missing |

**Rewrite proposal:**

| Field | Recommended | Length |
|---|---|---|
| `<title>` | Terms of Service \| QuantLab | 28 |
| `<meta description>` | Terms governing QuantLab Software Solutions services, consultation requests, project agreements, payments, intellectual property, and liability. Updated April 2026. | 159 |
| `canonical` | `https://quantlabusa.dev/terms` |
| `robots` | Consider `noindex` |

---

## Implementation Order (by SEO impact / business impact)

| Rank | Page | Reason |
|---|---|---|
| **1** | **Homepage `/`** | Highest traffic, current title is 27 chars (50% of budget wasted), no keyword, no canonical, generic logo as OG. Biggest possible win. |
| **2** | **`/services/penetration-testing`** | Title is 97 chars (truncates Georgia/Atlanta geo signal entirely in SERP). Highest-margin service. Single largest title fix on the site. |
| **3** | **`/services/payments-invoicing-licensing`** | 91-char title truncates. "Stripe Integration" is high-CPC keyword being buried. |
| **4** | **`/services/cloud-infrastructure`** | 78-char title + 195-char description both truncate. "Zero unplanned outages" CTR hook is hidden. |
| **5** | **`/services/algorithmic-trading-systems`** | 69-char title + 184-char description. "<12ms" + "5 systems deployed" stats are the strongest CTR hooks on the site — surface them in title. |
| **6** | **`/services/custom-business-software`** | 66-char title (1 over) + 178-char description. Highest-volume service category in the funnel. |
| **7** | **`/services/web-applications`** | 64-char title (OK) + 181-char description. Highest-volume keyword cluster on the site. |
| **8** | **`/work` (Case Studies index)** | "4 shipped projects" is a great proof point not currently in title. Hub page for case studies. |
| **9** | **`/work/[slug]` × 4** | Fix `generateMetadata` once — adds correct description length across all 4 case study pages simultaneously. |
| **10** | **`/services` index** | Title is generic; should pull a CTR hook + count ("6 services"). |
| **11** | **`/about`** | Title wastes 30 chars on brand suffix; description is 226 chars. About pages don't usually rank but get many direct clicks from social. |
| **12** | **`/faq`** | Same pattern; 200-char description. FAQ schema is already in place — good. |
| **13** | **Site-wide: 1200×630 OG images** | Every page currently shares `/logo.png` 512×512 — wrong dimensions for OG. Single highest social-CTR fix. Generate all 17 images once. |
| **14** | **Site-wide: `twitter:card = summary_large_image`** | Once OG images are produced. |
| **15** | **`/privacy` + `/terms`** | Low SEO priority but fix the 47-char descriptions; consider `noindex` to consolidate crawl budget. |
| **16** | **Replace `REPLACE_WITH_VERIFICATION_TOKEN`** in `layout.tsx` line 124 with real Google Search Console token. |
| **17** | **Add explicit `robots: { index: false }`** to `/admin/layout.tsx`, `/sales/layout.tsx`, `/print/layout.tsx`. |

---

## Code-level fix locations (for the engineer)

| Page | File | Lines to change |
|---|---|---|
| Homepage | `src/app/layout.tsx` | 21–43 (metadata block) — and add `alternates.canonical`. Also line 124 GSC token. |
| Services index | `src/app/services/page.tsx` | 7–19 |
| Custom Business Software | `src/app/services/custom-business-software/page.tsx` | 7–19 |
| Algorithmic Trading | `src/app/services/algorithmic-trading-systems/page.tsx` | 7–19 |
| Web Applications | `src/app/services/web-applications/page.tsx` | 7–19 |
| Payments/Licensing | `src/app/services/payments-invoicing-licensing/page.tsx` | 7–19 |
| Penetration Testing | `src/app/services/penetration-testing/page.tsx` | 7–19 |
| Cloud Infrastructure | `src/app/services/cloud-infrastructure/page.tsx` | 7–19 |
| About | `src/app/about/page.tsx` | 16–30 |
| FAQ | `src/app/faq/page.tsx` | 6–20 |
| Work index | `src/app/work/page.tsx` | 7–21 |
| Case Study detail (all 4) | `src/app/work/[slug]/page.tsx` | 16–41 + add `metaDescription` field in `src/lib/case-studies.ts` |
| Privacy | `src/app/privacy/page.tsx` | 1–4 (replace with full `Metadata` object inc. canonical) |
| Terms | `src/app/terms/page.tsx` | 1–4 (replace with full `Metadata` object inc. canonical) |

---

## OG Image Production Spec (site-wide)

- **Dimensions:** 1200 × 630 px (Facebook/LinkedIn/Twitter `summary_large_image` standard)
- **Format:** PNG (allow ~250KB target)
- **Brand colors:** background `#0a1120` → `#0d1526` gradient. Accents cyan `#22d3ee`, violet `#a78bfa`, emerald `#34d399`, red `#f43f5e`
- **Typography:** Geist Sans (matches site)
- **Safe area:** 100px margin all sides — Twitter crops aggressively
- **Logo placement:** top-left, 60×60
- **Naming convention:** store at `/public/og/[slug].png`; reference in each page's metadata as `images: [{ url: "/og/[slug].png", width: 1200, height: 630 }]`
- **Per-page copy:** see each page's "Recommended OG image" row above
