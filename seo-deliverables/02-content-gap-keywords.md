# QuantLab USA — Content Gap & Keyword Strategy

**Domain:** quantlabusa.dev
**Founder:** William Beltz (Macon, GA)
**HQ:** Macon, GA — Service area: 14 cities across GA, FL, TX, IL, WA, NY, NC, TN, CA
**Stack signature:** Next.js / TypeScript / Node / PostgreSQL / Docker
**Date:** 2026-05-12
**Prepared for:** founder review

---

## 1. Executive Summary

QuantLab's current site has strong on-page metadata for **6 service pages** but suffers from three structural SEO gaps:

1. **Zero geo-targeted pages.** Despite a 14-city service area, no `/[city]` or `/services/[service]/[city]` routes exist. This is the single largest missed opportunity — local-intent searches convert 3-5x higher than national ones.
2. **No /blog or /resources tree.** No top-of-funnel content exists to capture informational queries (e.g., "what is MITRE ATT&CK", "how much does a custom CRM cost"). The site is 100% money-page heavy with no awareness-stage capture.
3. **One service page bundles too many keywords.** `/services/payments-invoicing-licensing` targets three distinct buyer journeys (Stripe integration, subscription billing, license server). Each deserves its own page.

Live-site crawl observation: As of 2026-05-12, the six `/services/[slug]` URLs are present in `sitemap.ts` but return 404 publicly (deploy lag — source exists locally at `/Users/williambeltz/Documents/softwaredev/src/app/services/`). Recommendations below assume those pages will go live shortly.

---

## 2. Current Keyword Footprint

| URL | Target Keyword (primary) | Secondary Keywords | Quality (1-5) | Notes |
|---|---|---|---|---|
| `/` | "custom software development" (national, generic) | trading bots, CRM, web apps, pentest | 2 | H1 is `EngineeringtheNextLevel` — branded, not keyword-bearing. No primary keyword targeting in H1. |
| `/services` | "custom software development services" | algorithmic trading, web apps, cybersecurity, cloud infra | 3 | Index page is a good hub but doesn't rank for any specific service-city combo. |
| `/services/custom-business-software` | "custom business software development" | custom CRM, ERP, operations dashboards, work order systems, internal tools | 4 | Strong metadata; misses geo modifier and competitor-comparison keywords. |
| `/services/algorithmic-trading-systems` | "algorithmic trading systems development" | trading bot development, MA Supertrend, VWAP, momentum strategies | 4 | Excellent tail-keyword coverage; no head-keyword like "hire algo trader developer". |
| `/services/web-applications` | "web application & SaaS development" | Next.js, React, TypeScript, Vercel, client portals | 4 | "Next.js development services" is the conversion-driver keyword and is buried. |
| `/services/payments-invoicing-licensing` | "Stripe integration, subscription billing, license management" | ACH, JWT, seat management, auto-invoicing | 3 | Bundled — Stripe-integration buyers and license-server buyers are different personas. Split into 3 pages. |
| `/services/penetration-testing` | "penetration testing services Georgia / Atlanta" | red team, MITRE ATT&CK, network/wireless/web/AD pentest | 4 | Best-targeted page; should be the template for city-specific clones. |
| `/services/cloud-infrastructure` | "cloud infrastructure & DevOps consulting" | Docker, Nginx, CI/CD, Sentry, DigitalOcean, Fly.io | 3 | Good tech-stack signal; weak commercial intent — competes with $$$ cloud-MSP keywords. |
| `/work` | "case studies" (branded) | trading systems, operations platforms, pentest case studies | 3 | Title is generic. Should target "[industry] software case study". |
| `/work/[slug]` x4 | per-case-study (multi-strategy trading system, motorcycle shop ops platform, contractor estimating engine, AD pentest) | varies | 3 | Good URL structure; metadata for individual slugs not inspected — likely auto-generated. |
| `/about` | "founder-led software shop Georgia" | William Beltz, custom software, security, Georgia | 3 | Brand-defense keyword; weak commercial value alone. |
| `/faq` | "QuantLab FAQ" (branded only) | engagement process, technology | 2 | Big miss: FAQ pages can rank for "how much does custom software cost", "what is a penetration test" etc. |
| `/privacy`, `/terms` | n/a | n/a | n/a | Legal — exclude from SEO scope. |

**Footprint summary:** 8 SEO-relevant pages targeting roughly 8 unique commercial keywords. Geographic and informational coverage = 0%.

---

## 3. 10 Topic Clusters / 50+ Keywords

Each cluster lists head terms (high vol / hard) followed by long-tails (medium vol / easier). Volume tier = rough US monthly search volume bucket: **Low** (<200), **Med** (200-2,000), **High** (2,000+). Difficulty = SEO competitiveness 1-5. Intent = Commercial/Informational/Transactional.

### Cluster A — Local Custom Software Development (HIGH-ROI)
| Keyword | Vol | Diff | Intent |
|---|---|---|---|
| custom software development atlanta | High | 4 | Commercial |
| custom software development macon ga | Low | 2 | Commercial |
| custom software developer atlanta ga | Med | 4 | Commercial |
| software development company georgia | Med | 4 | Commercial |
| software developer jacksonville fl | Med | 3 | Commercial |
| custom software development tampa | Med | 3 | Commercial |
| custom software development austin tx | High | 5 | Commercial |
| custom software development chicago | High | 5 | Commercial |
| custom software development seattle | High | 5 | Commercial |
| custom software development charlotte nc | Med | 3 | Commercial |
| custom software development nashville | Med | 3 | Commercial |
| custom software development raleigh nc | Med | 3 | Commercial |
| custom software developer near me | High | 4 | Commercial |
| small business custom software development | Med | 3 | Commercial |

### Cluster B — Local Penetration Testing & Cybersecurity (HIGH-ROI)
| Keyword | Vol | Diff | Intent |
|---|---|---|---|
| penetration testing atlanta | High | 4 | Transactional |
| penetration testing services georgia | Med | 3 | Transactional |
| penetration testing macon ga | Low | 1 | Transactional |
| penetration testing jacksonville fl | Med | 3 | Transactional |
| penetration testing tampa fl | Med | 3 | Transactional |
| penetration testing austin tx | Med | 4 | Transactional |
| cybersecurity company atlanta | High | 4 | Commercial |
| red team services georgia | Low | 2 | Transactional |
| pentest cost atlanta | Med | 2 | Commercial |
| small business penetration test | Med | 2 | Commercial |

### Cluster C — Penetration Testing Service Types (deep niches)
| Keyword | Vol | Diff | Intent |
|---|---|---|---|
| web application penetration testing service | Med | 3 | Commercial |
| owasp web app pentest | Low | 2 | Commercial |
| active directory penetration testing | Med | 3 | Commercial |
| wireless network penetration test | Med | 3 | Commercial |
| network penetration testing services | High | 5 | Commercial |
| mitre att&ck assessment | Med | 3 | Commercial |
| mitre att&ck mapped pentest report | Low | 1 | Commercial |
| internal network pentest | Med | 3 | Commercial |
| external pentest service | Med | 4 | Commercial |

### Cluster D — Custom CRM / ERP / Ops Software
| Keyword | Vol | Diff | Intent |
|---|---|---|---|
| custom crm development | High | 5 | Commercial |
| custom crm development small business | Med | 3 | Commercial |
| custom crm vs salesforce | Med | 3 | Informational |
| operations dashboard for small business | Med | 2 | Commercial |
| custom work order software | Med | 2 | Commercial |
| internal tools development company | Med | 3 | Commercial |
| custom erp development services | High | 5 | Commercial |

### Cluster E — Payments / Stripe / Licensing (split from current bundled page)
| Keyword | Vol | Diff | Intent |
|---|---|---|---|
| stripe integration consultant | Med | 3 | Commercial |
| stripe integration services | Med | 3 | Commercial |
| hire stripe developer | Med | 3 | Commercial |
| subscription billing development | Med | 3 | Commercial |
| custom license server jwt | Low | 1 | Commercial |
| software licensing system development | Low | 2 | Commercial |
| ach payment integration developer | Low | 2 | Commercial |
| stripe billing integration agency | Low | 2 | Commercial |

### Cluster F — Next.js / Modern Web Stack Services
| Keyword | Vol | Diff | Intent |
|---|---|---|---|
| next.js development services | High | 4 | Commercial |
| next.js development agency | Med | 4 | Commercial |
| hire next.js developer | Med | 3 | Commercial |
| next.js development company usa | Med | 3 | Commercial |
| typescript development services | Med | 3 | Commercial |
| react saas development | Med | 4 | Commercial |
| custom saas mvp development | Med | 3 | Commercial |
| postgresql backend development | Low | 2 | Commercial |

### Cluster G — Algorithmic Trading Development
| Keyword | Vol | Diff | Intent |
|---|---|---|---|
| algorithmic trading bot development | Med | 3 | Commercial |
| hire algo trading developer | Low | 2 | Commercial |
| custom trading bot developer | Med | 3 | Commercial |
| python trading bot developer | Med | 3 | Commercial |
| multi-strategy trading system development | Low | 1 | Commercial |
| vwap trading bot custom | Low | 1 | Commercial |
| ma supertrend trading strategy implementation | Low | 1 | Commercial |
| backtesting framework development | Low | 2 | Commercial |

### Cluster H — Founder-Led / Boutique Positioning (brand-defense + differentiation)
| Keyword | Vol | Diff | Intent |
|---|---|---|---|
| founder-led software development | Low | 1 | Commercial |
| boutique software development company | Med | 2 | Commercial |
| senior developer for hire usa | Med | 4 | Commercial |
| direct-to-engineer software shop | Low | 1 | Commercial |
| no-offshore software development | Low | 1 | Commercial |

### Cluster I — Informational / Top-of-Funnel (blog content)
| Keyword | Vol | Diff | Intent |
|---|---|---|---|
| how much does custom software cost | High | 3 | Informational |
| custom crm vs off the shelf | Med | 2 | Informational |
| how much does a penetration test cost | High | 3 | Informational |
| what is mitre att&ck | High | 4 | Informational |
| stripe vs square for saas | Med | 3 | Informational |
| how long does software development take | High | 3 | Informational |
| signs you need custom software | Low | 1 | Informational |
| what is a license server | Med | 3 | Informational |

### Cluster J — Industry-Vertical Software (case-study-driven silos)
| Keyword | Vol | Diff | Intent |
|---|---|---|---|
| motorcycle shop management software | Low | 1 | Commercial |
| contractor estimating software custom | Med | 3 | Commercial |
| musician booking software | Low | 1 | Commercial |
| auto repair shop crm | Med | 2 | Commercial |
| trading firm operations dashboard | Low | 1 | Commercial |
| small construction company software | Med | 2 | Commercial |

**Total keywords cataloged: ~70** (target was 50+).

---

## 4. Priority Matrix — Top 25 by Score

**Score = (Commercial-intent weight × Volume tier) ÷ Difficulty.**
Commercial weight: Transactional=3, Commercial=2, Informational=1.
Volume tier: High=3, Med=2, Low=1.

| Rank | Keyword | Cluster | Intent | Vol | Diff | Score | Recommended Page Type |
|---|---|---|---|---|---|---|---|
| 1 | penetration testing macon ga | B | T | L | 1 | 3.0 | City service page `/services/penetration-testing/macon-ga` |
| 2 | custom software development macon ga | A | C | L | 2 | 1.0 | City service page `/macon-ga` (home hub) |
| 3 | mitre att&ck mapped pentest report | C | C | L | 1 | 2.0 | Service sub-page `/services/penetration-testing/mitre-attack` |
| 4 | red team services georgia | B | T | L | 2 | 1.5 | Service + state page `/services/red-team-georgia` |
| 5 | small business penetration test | B | C | M | 2 | 2.0 | Service page + pricing FAQ |
| 6 | pentest cost atlanta | B | C | M | 2 | 2.0 | Pricing landing page + city blog |
| 7 | penetration testing atlanta | B | T | H | 4 | 2.25 | City service page `/services/penetration-testing/atlanta-ga` |
| 8 | penetration testing services georgia | B | T | M | 3 | 2.0 | State pillar page |
| 9 | penetration testing jacksonville fl | B | T | M | 3 | 2.0 | City service page |
| 10 | penetration testing tampa fl | B | T | M | 3 | 2.0 | City service page |
| 11 | custom license server jwt | E | C | L | 1 | 2.0 | Dedicated service page (split from bundled) |
| 12 | custom software developer atlanta ga | A | C | M | 4 | 1.0 | City home page `/atlanta-ga` |
| 13 | small business custom software development | A | C | M | 3 | 1.33 | Service page + blog FAQ |
| 14 | custom crm development small business | D | C | M | 3 | 1.33 | Sub-page under custom-business-software |
| 15 | stripe integration consultant | E | C | M | 3 | 1.33 | Dedicated service page `/services/stripe-integration` |
| 16 | hire next.js developer | F | C | M | 3 | 1.33 | Service page rewrite + dev-hire landing |
| 17 | next.js development services | F | C | H | 4 | 1.5 | Pillar service page (rebrand existing /services/web-applications) |
| 18 | active directory penetration testing | C | C | M | 3 | 1.33 | Service sub-page + case-study cross-link |
| 19 | how much does custom software cost | I | I | H | 3 | 1.0 | Long-form blog post (silo anchor) |
| 20 | how much does a penetration test cost | I | I | H | 3 | 1.0 | Long-form blog post |
| 21 | what is mitre att&ck | I | I | H | 4 | 0.75 | Educational blog post |
| 22 | algorithmic trading bot development | G | C | M | 3 | 1.33 | Service page (already exists — tune H1) |
| 23 | operations dashboard for small business | D | C | M | 2 | 2.0 | Sub-page + case study |
| 24 | wireless network penetration test | C | C | M | 3 | 1.33 | Service sub-page |
| 25 | boutique software development company | H | C | M | 2 | 2.0 | About / Founder pillar page rewrite |

---

## 5. Recommended Page Types for Top 25

**Net new pages required: 24**

- **City service pages (15):** 14 cities × (penetration testing + custom software) pairs + Macon hub. Use the proven `/services/penetration-testing` template; swap city + local proof points.
- **Sub-service pages (5):** Stripe integration, license server, subscription billing, MITRE ATT&CK reporting, AD pentest. Splits the over-bundled `/payments-invoicing-licensing` and deepens `/penetration-testing`.
- **Blog posts (3):** "How much does custom software cost", "How much does a pentest cost", "What is MITRE ATT&CK". These become silo anchors for Cluster I.
- **Pillar rewrites (1):** Rewrite `/services/web-applications` H1 and meta to lead with "Next.js Development Services" — the highest-volume commercial term it can credibly target.

---

## 6. Quick-Win Implementation Order (next 90 days)

1. **Week 1-2:** Get the six existing `/services/*` pages out of 404 (deploy lag). No new content moves the needle until these go live.
2. **Week 3-4:** Build city template + ship 3 priority cities: Atlanta, Macon, Jacksonville. Use `/services/penetration-testing` as the structural blueprint.
3. **Week 5-8:** Roll out remaining 11 cities (templated, ~3 hrs each).
4. **Week 9-10:** Split `/payments-invoicing-licensing` into three pages.
5. **Week 11-12:** Launch `/blog` with the 3 pricing/educational posts.

---

## 7. Top 3 Highest-ROI Clusters (TL;DR for founder)

| Rank | Cluster | Why first | Landing format |
|---|---|---|---|
| 1 | **Cluster B — Local Penetration Testing** | Highest-intent (transactional), low-difficulty Macon/state variants, hourly rate is 3-5x dev rate so each lead is worth more. Macon GA has near-zero competition. | **City-specific service pages** (one per city) modeled on `/services/penetration-testing` |
| 2 | **Cluster A — Local Custom Software Development** | 14 cities × commercial intent = scalable templated wins. Macon and smaller TN/NC cities have weak competition. | **City home/hub pages** (`/atlanta-ga`, `/macon-ga`) listing all services, anchored by local proof |
| 3 | **Cluster E — Stripe / Licensing (un-bundled)** | The current page tries to be three things. Splitting into "Stripe Integration", "Subscription Billing", and "Custom License Server" each captures a distinct buyer with $150-200/hr Stripe-consultant pricing benchmarks. | **Three focused service pages** with a comparison FAQ block |

---

## 8. Files / paths referenced

- Source pages: `/Users/williambeltz/Documents/softwaredev/src/app/services/{custom-business-software,algorithmic-trading-systems,web-applications,payments-invoicing-licensing,penetration-testing,cloud-infrastructure}/page.tsx`
- Sitemap source: `/Users/williambeltz/Documents/softwaredev/src/app/sitemap.ts`
- Layout / global metadata: `/Users/williambeltz/Documents/softwaredev/src/app/layout.tsx`
- Case studies data: `/Users/williambeltz/Documents/softwaredev/src/lib/case-studies.ts`
- Case study route: `/Users/williambeltz/Documents/softwaredev/src/app/work/[slug]/page.tsx`

---

*End of deliverable 02.*
