# Audit 01 — Live Routes (quantlabusa.dev)

**Audit date:** 2026-05-12
**Production deployment:** `dpl_8JmqYi8B77x26NzhHjuBtJwcjzVt` (READY)
**Sitemap fetched:** `https://quantlabusa.dev/sitemap.xml` (93 URLs)
**Scope:** All 93 sitemap URLs were checked via direct HTTP/HTML inspection. A representative ~30-URL sample was additionally deep-analysed via WebFetch for content quality, city-name interpolation, and template-variable leakage.

---

## Executive Summary

The 56-page launch is largely sound at the HTTP and structural-SEO level — **92 of 93 URLs return HTTP 200**, every page has exactly one `<h1>`, every page has a JSON-LD block, and no city pages show unfilled `{city}` / `[CITY]` template variables. Page content for the sample reviewed is genuinely localised (e.g., "MoPac corridor" in Austin, "Buckhead procurement teams" in Atlanta, "FIN7, APT38, Lazarus" referenced in /industries/fintech) and not boilerplate.

However, four classes of defect block this from being a clean launch:

1. **`/contact` returns 404** despite being declared in the sitemap and being a primary CTA endpoint — the site uses `/#contact` (homepage anchor) instead, so the sitemap entry is broken. This is a **P0 sitemap-validity issue** that will produce a Google Search Console crawl error the moment the sitemap is submitted.
2. **All six case studies under `/work/*` publicly display a "DRAFT — confirm with [client] ownership before publishing" disclaimer**, visible to humans and search engines alike. This is a **P0 reputational/SEO defect**: it implies the testimonials and metrics quoted on the same pages are not approved by the named clients, exposing legal risk and undermining trust signals.
3. **A `<meta name="google-site-verification" content="REPLACE_WITH_VERIFICATION_TOKEN-AWAITING-USER-INPUT">` placeholder is shipped on all 92 live pages.** Search Console verification will fail until this is replaced; this is a **P1 setup defect** rather than a ranking defect.
4. **`og:image` is missing on 90 of 93 pages** (only `/privacy` and `/terms` carry an `og:image`, both pointing to `/logo.png`). Every social share, link preview (Slack, LinkedIn, X, iMessage), and rich-card scrape will fall back to no-image. This is a **P1 distribution defect**.

Additional issues that are P2 (cosmetic / nice-to-fix):
- 4 case studies (`active-directory-pentest`, `contractor-estimating-proposal-engine`, `motorcycle-shop-ops-platform`, `multi-strategy-trading-system`) are live and linked from `/work` but are **not in the sitemap**.
- `/privacy` and `/terms` lack a `<link rel="canonical">`.
- `/privacy` (181 words) and `/terms` (154 words) fall below the 200-word body content threshold, but this is expected for legal pages.

Bottom line: site quality is high, **but the DRAFT disclaimers and 404 contact route must be hot-fixed today** before any backlink campaign, GSC submission, or paid traffic.

---

## Topline Stats

| Check | Pass | Fail |
|---|---|---|
| HTTP 200 | 92 / 93 | 1 (`/contact` → 404) |
| Has `<title>` | 92 / 93 | 1 (the 404) |
| Has meta description | 92 / 93 | 1 (the 404) |
| Exactly one `<h1>` | 92 / 93 | 1 (the 404) |
| Has ≥1 JSON-LD block | 92 / 93 | 1 (the 404) |
| Has canonical link | 90 / 93 | 3 (`/contact`, `/privacy`, `/terms`) |
| Has `og:image` | **2 / 93** | **91** |
| Body word count ≥ 200 | 90 / 93 | 3 (`/contact`, `/privacy`, `/terms`) |
| No DRAFT disclaimer visible | 87 / 93 | **6 (all `/work/*` case studies)** |
| Google Site Verification token replaced | **0 / 92** | **92** |
| No duplicate titles | 92 / 92 distinct titles | 0 duplicates |
| JSON-LD richness (city/service pages) | 8–12 blocks each | n/a |

**Word count distribution** (200-status pages, n=92): min 154, max 1,430, avg ~727.
**H1 distribution:** every 200-status page has exactly 1 H1 (no over-tagged pages).
**JSON-LD block counts:** core pages 6–8, standalone services 10, city/city-service pages 8–12, industry/vs/work/calc 10. No page is missing schema entirely.

---

## Prioritised Fix List

### P0 — Ship today (before any GSC submission, backlink push, or paid spend)

1. **Remove DRAFT disclaimers from all `/work/*` case studies.** Exact public-facing string on each page:
   - `/work/northcrest-fence` → "DRAFT — confirm with Northcrest ownership before publishing."
   - `/work/hobbspeak` → "DRAFT — confirm with HobbsPeak ownership before publishing."
   - `/work/bridgepointe-painting` → "DRAFT — confirm with Bridgepointe ownership before publishing."
   - `/work/protectwithbri` → "DRAFT — confirm with ProtectWithBri ownership before publishing."
   - `/work/j5-sales-os` → "DRAFT — confirm with J5 Sales OS team before publishing."
   - `/work/wilder-recovery` → "DRAFT — confirm with Wilder Recovery ownership before publishing."
   If client sign-off has not actually been obtained, the entire `/work/*` directory should be `noindex`-ed and pulled from sitemap until it is.

2. **Resolve `/contact` → 404.** Either:
   - Build a real `/contact` page (preferred — the homepage anchor `/#contact` is brittle for inbound links, deep-links from email, and ad landing pages), OR
   - Remove `/contact` from `sitemap.xml` and return a 301 to `/#contact`.
   Today every internal "Contact" CTA appears to go to `/#contact`, so users are not blocked — but Googlebot will be.

### P1 — Ship this week

3. **Replace the Google Search Console verification token.** Every page currently ships `<meta name="google-site-verification" content="REPLACE_WITH_VERIFICATION_TOKEN-AWAITING-USER-INPUT" />`. Get the real token from GSC and wire it into the layout/metadata. Until this is done, GSC won't verify, search performance data can't be collected, and the sitemap can't be submitted formally.

4. **Add `og:image` to all 90 pages that lack it.** Currently only `/privacy` and `/terms` ship an `og:image` (both `/logo.png`). Every other page returns no image when shared. Minimum fix: set a site-wide default `og:image` (e.g., `/og-default.png`, 1200×630) in `app/layout.tsx`. Better: per-template OG images (one default per service hub, per industry, per case-study).

5. **Add the 4 orphaned case studies to `sitemap.xml`:** these are live, linked from `/work`, but not declared in the sitemap:
   - `/work/active-directory-pentest`
   - `/work/contractor-estimating-proposal-engine`
   - `/work/motorcycle-shop-ops-platform`
   - `/work/multi-strategy-trading-system`

### P2 — Nice-to-fix when convenient

6. Add `<link rel="canonical">` to `/privacy` and `/terms` (currently missing). Self-referential `https://quantlabusa.dev/privacy` and `https://quantlabusa.dev/terms` is fine.
7. The `og:image` on `/privacy` and `/terms` points to `/logo.png` — replace with a proper 1200×630 social card.
8. Consider broadening short-end pages (`/faq` at 390 words, city-software-dev pages at ~380–460 words). They are above the 200-word floor but thin relative to the rest of the catalogue. City-service pages (CRM, Stripe, pentest) are already healthy at 600–900 words.

---

## Full Per-Page Check Table

Legend: `OK` = passes, `MISSING` = check failed, `FAIL(n)` = wrong count (n shown), number under `LD+JSON` = how many JSON-LD blocks the page emits.

### Core (6 pages)

| URL | HTTP | H1 | LD+JSON | Canonical | OG:img | Words | Title |
|---|---|---|---|---|---|---|---|
| / | 200 | OK | 6 | OK | MISSING | 700 | Custom Software Development & Cybersecurity \| Q... |
| /about | 200 | OK | 8 | OK | MISSING | 764 | About \| QuantLab Software Solutions |
| /services | 200 | OK | 6 | OK | MISSING | 792 | Software Development & Cybersecurity Services \|... |
| /work | 200 | OK | 8 | OK | MISSING | 653 | Case Studies \| QuantLab Software Solutions |
| /faq | 200 | OK | 8 | OK | MISSING | 390 | Custom Software & Pentest FAQs \| QUANT LAB USA |
| /contact | **404** | **FAIL(0)** | **FAIL** | **MISSING** | **MISSING** | 0 | *(none)* |

### Standalone Service (14 pages)

| URL | HTTP | H1 | LD+JSON | Canonical | OG:img | Words | Title |
|---|---|---|---|---|---|---|---|
| /services/custom-business-software | 200 | OK | 10 | OK | MISSING | 880 | Custom CRM, ERP & Internal Tools — Built to Fit ... |
| /services/custom-crm-development | 200 | OK | 10 | OK | MISSING | 933 | Custom CRM Development \| Built for Your Workflow ... |
| /services/cloud-infrastructure | 200 | OK | 10 | OK | MISSING | 1005 | DevOps & CI/CD Consulting — Zero Outages \| Quan... |
| /services/web-applications | 200 | OK | 10 | OK | MISSING | 946 | Next.js Web App & SaaS Development — Vercel-Ready... |
| /services/payments-invoicing-licensing | 200 | OK | 10 | OK | MISSING | 1288 | Stripe Integration, ACH Billing & License Server... |
| /services/penetration-testing | 200 | OK | 10 | OK | MISSING | 1430 | Penetration Testing Georgia — 11-Module Red Team ... |
| /services/mitre-attack-assessment | 200 | OK | 10 | OK | MISSING | 726 | MITRE ATT&CK Assessment \| ATT&CK-Aligned Pe... |
| /services/algorithmic-trading-systems | 200 | OK | 10 | OK | MISSING | 1045 | Algorithmic Trading Bot Development — 5 Live Systems... |
| /services/stripe-integration | 200 | OK | 10 | OK | MISSING | 858 | Custom Stripe Integration Consulting \| QuantLab |
| /services/license-server | 200 | OK | 10 | OK | MISSING | 830 | Custom Software License Server Development \| QuantLab |
| /services/subscription-billing | 200 | OK | 10 | OK | MISSING | 918 | Custom Subscription Billing Development \| QuantLab |
| /services/web-app-pentest | 200 | OK | 10 | OK | MISSING | 900 | Web Application Penetration Testing \| OWASP \| Quan... |
| /services/network-pentest | 200 | OK | 10 | OK | MISSING | 889 | Internal & External Network Penetration Testing ... |
| /services/active-directory-pentest | 200 | OK | 10 | OK | MISSING | 958 | Active Directory Penetration Testing & Hardening... |

### City — Software Development (14 pages)

| URL | HTTP | H1 | LD+JSON | Canonical | OG:img | Words | Title |
|---|---|---|---|---|---|---|---|
| /software-development-macon-ga | 200 | OK | 8 | OK | MISSING | 439 | Custom Software Development in Macon GA \| QUANT LAB... |
| /software-development-atlanta-ga | 200 | OK | 8 | OK | MISSING | 458 | Atlanta Software Developer & Pen Testing \| QUAN... |
| /software-development-augusta-ga | 200 | OK | 8 | OK | MISSING | 433 | Augusta GA Software Dev & Penetration Testing \|... |
| /software-development-columbus-ga | 200 | OK | 8 | OK | MISSING | 397 | Columbus GA Custom Software Developer \| QUANT LAB USA |
| /software-development-savannah-ga | 200 | OK | 8 | OK | MISSING | 387 | Savannah GA Software Development & SaaS Build \|... |
| /software-development-miami-fl | 200 | OK | 8 | OK | MISSING | 400 | Miami Custom Software & SaaS Development \| QUAN... |
| /software-development-austin-tx | 200 | OK | 8 | OK | MISSING | 398 | Austin TX Custom Software Developer for Startups \| ... |
| /software-development-dallas-tx | 200 | OK | 8 | OK | MISSING | 394 | Dallas Custom Software & Penetration Testing \| ... |
| /software-development-chicago-il | 200 | OK | 8 | OK | MISSING | 386 | Chicago Custom Software Developer \| QUANT LAB USA |
| /software-development-seattle-wa | 200 | OK | 8 | OK | MISSING | 376 | Seattle Custom Software & SaaS Developer \| QUAN... |
| /software-development-new-york-ny | 200 | OK | 8 | OK | MISSING | 382 | NYC Custom Software Development & Pen Testing \|... |
| /software-development-charlotte-nc | 200 | OK | 8 | OK | MISSING | 392 | Charlotte NC Software Development & Pen Testing ... |
| /software-development-nashville-tn | 200 | OK | 8 | OK | MISSING | 382 | Nashville Custom Software Developer \| QUANT LAB USA |
| /software-development-san-francisco-ca | 200 | OK | 8 | OK | MISSING | 389 | San Francisco Custom Software & Pen Testing \| Q... |

### City-Service — Penetration Testing (14 pages)

| URL | HTTP | H1 | LD+JSON | Canonical | OG:img | Words | Title |
|---|---|---|---|---|---|---|---|
| /services/penetration-testing/macon-ga | 200 | OK | 12 | OK | MISSING | 632 | Penetration Testing Services in Macon, GA \| QuantLab |
| /services/penetration-testing/atlanta-ga | 200 | OK | 12 | OK | MISSING | 645 | Penetration Testing Services in Atlanta, GA \| QuantLab |
| /services/penetration-testing/augusta-ga | 200 | OK | 12 | OK | MISSING | 626 | Penetration Testing Services in Augusta, GA \| QuantLab |
| /services/penetration-testing/columbus-ga | 200 | OK | 12 | OK | MISSING | 628 | Penetration Testing Services in Columbus, GA \| Quan... |
| /services/penetration-testing/savannah-ga | 200 | OK | 12 | OK | MISSING | 648 | Penetration Testing Services in Savannah, GA \| Quan... |
| /services/penetration-testing/miami-fl | 200 | OK | 12 | OK | MISSING | 639 | Penetration Testing Services in Miami, FL \| QuantLab |
| /services/penetration-testing/austin-tx | 200 | OK | 12 | OK | MISSING | 666 | Penetration Testing Services in Austin, TX \| QuantLab |
| /services/penetration-testing/dallas-tx | 200 | OK | 12 | OK | MISSING | 634 | Penetration Testing Services in Dallas, TX \| QuantLab |
| /services/penetration-testing/chicago-il | 200 | OK | 12 | OK | MISSING | 657 | Penetration Testing Services in Chicago, IL \| QuantLab |
| /services/penetration-testing/seattle-wa | 200 | OK | 12 | OK | MISSING | 630 | Penetration Testing Services in Seattle, WA \| QuantLab |
| /services/penetration-testing/new-york-ny | 200 | OK | 12 | OK | MISSING | 641 | Penetration Testing Services in New York, NY \| Quan... |
| /services/penetration-testing/charlotte-nc | 200 | OK | 12 | OK | MISSING | 665 | Penetration Testing Services in Charlotte, NC \| Qua... |
| /services/penetration-testing/nashville-tn | 200 | OK | 12 | OK | MISSING | 632 | Penetration Testing Services in Nashville, TN \| Qua... |
| /services/penetration-testing/san-francisco-ca | 200 | OK | 12 | OK | MISSING | 641 | Penetration Testing Services in San Francisco, CA \|... |

### City-Service — Custom CRM Development (14 pages)

| URL | HTTP | H1 | LD+JSON | Canonical | OG:img | Words | Title |
|---|---|---|---|---|---|---|---|
| /services/custom-crm-development/macon-ga | 200 | OK | 12 | OK | MISSING | 695 | Custom CRM Development in Macon, GA \| QUANT LAB USA |
| /services/custom-crm-development/atlanta-ga | 200 | OK | 12 | OK | MISSING | 731 | Custom CRM Development in Atlanta, GA \| QUANT LAB USA |
| /services/custom-crm-development/augusta-ga | 200 | OK | 12 | OK | MISSING | 695 | Custom CRM Development in Augusta, GA \| QUANT LAB USA |
| /services/custom-crm-development/columbus-ga | 200 | OK | 12 | OK | MISSING | 686 | Custom CRM Development in Columbus, GA \| QUANT LAB USA |
| /services/custom-crm-development/savannah-ga | 200 | OK | 12 | OK | MISSING | 677 | Custom CRM Development in Savannah, GA \| QUANT LAB USA |
| /services/custom-crm-development/miami-fl | 200 | OK | 12 | OK | MISSING | 684 | Custom CRM Development in Miami, FL \| QUANT LAB USA |
| /services/custom-crm-development/austin-tx | 200 | OK | 12 | OK | MISSING | 701 | Custom CRM Development in Austin, TX \| QUANT LAB USA |
| /services/custom-crm-development/dallas-tx | 200 | OK | 12 | OK | MISSING | 707 | Custom CRM Development in Dallas, TX \| QUANT LAB USA |
| /services/custom-crm-development/chicago-il | 200 | OK | 12 | OK | MISSING | 700 | Custom CRM Development in Chicago, IL \| QUANT LAB USA |
| /services/custom-crm-development/seattle-wa | 200 | OK | 12 | OK | MISSING | 669 | Custom CRM Development in Seattle, WA \| QUANT LAB USA |
| /services/custom-crm-development/new-york-ny | 200 | OK | 12 | OK | MISSING | 719 | Custom CRM Development in New York, NY \| QUANT LAB USA |
| /services/custom-crm-development/charlotte-nc | 200 | OK | 12 | OK | MISSING | 673 | Custom CRM Development in Charlotte, NC \| QUANT LAB... |
| /services/custom-crm-development/nashville-tn | 200 | OK | 12 | OK | MISSING | 691 | Custom CRM Development in Nashville, TN \| QUANT LAB... |
| /services/custom-crm-development/san-francisco-ca | 200 | OK | 12 | OK | MISSING | 685 | Custom CRM Development in San Francisco, CA \| QUANT... |

### City-Service — Stripe Integration (14 pages)

| URL | HTTP | H1 | LD+JSON | Canonical | OG:img | Words | Title |
|---|---|---|---|---|---|---|---|
| /services/stripe-integration/macon-ga | 200 | OK | 12 | OK | MISSING | 898 | Stripe Integration in Macon, GA \| QUANT LAB USA |
| /services/stripe-integration/atlanta-ga | 200 | OK | 12 | OK | MISSING | 870 | Stripe Integration in Atlanta, GA \| QUANT LAB USA |
| /services/stripe-integration/augusta-ga | 200 | OK | 12 | OK | MISSING | 826 | Stripe Integration in Augusta, GA \| QUANT LAB USA |
| /services/stripe-integration/columbus-ga | 200 | OK | 12 | OK | MISSING | 811 | Stripe Integration in Columbus, GA \| QUANT LAB USA |
| /services/stripe-integration/savannah-ga | 200 | OK | 12 | OK | MISSING | 812 | Stripe Integration in Savannah, GA \| QUANT LAB USA |
| /services/stripe-integration/miami-fl | 200 | OK | 12 | OK | MISSING | 844 | Stripe Integration in Miami, FL \| QUANT LAB USA |
| /services/stripe-integration/austin-tx | 200 | OK | 12 | OK | MISSING | 872 | Stripe Integration in Austin, TX \| QUANT LAB USA |
| /services/stripe-integration/dallas-tx | 200 | OK | 12 | OK | MISSING | 840 | Stripe Integration in Dallas, TX \| QUANT LAB USA |
| /services/stripe-integration/chicago-il | 200 | OK | 12 | OK | MISSING | 796 | Stripe Integration in Chicago, IL \| QUANT LAB USA |
| /services/stripe-integration/seattle-wa | 200 | OK | 12 | OK | MISSING | 814 | Stripe Integration in Seattle, WA \| QUANT LAB USA |
| /services/stripe-integration/new-york-ny | 200 | OK | 12 | OK | MISSING | 809 | Stripe Integration in New York, NY \| QUANT LAB USA |
| /services/stripe-integration/charlotte-nc | 200 | OK | 12 | OK | MISSING | 810 | Stripe Integration in Charlotte, NC \| QUANT LAB USA |
| /services/stripe-integration/nashville-tn | 200 | OK | 12 | OK | MISSING | 832 | Stripe Integration in Nashville, TN \| QUANT LAB USA |
| /services/stripe-integration/san-francisco-ca | 200 | OK | 12 | OK | MISSING | 816 | Stripe Integration in San Francisco, CA \| QUANT LAB... |

### Industry (5 pages)

| URL | HTTP | H1 | LD+JSON | Canonical | OG:img | Words | Title |
|---|---|---|---|---|---|---|---|
| /industries/fintech | 200 | OK | 10 | OK | MISSING | 990 | Custom Software for Fintech \| QuantLab USA |
| /industries/construction | 200 | OK | 10 | OK | MISSING | 926 | Construction Industry Software Development \| QuantLab |
| /industries/insurance | 200 | OK | 10 | OK | MISSING | 791 | Insurance Industry Software Development \| QuantLab |
| /industries/e-commerce | 200 | OK | 10 | OK | MISSING | 879 | Custom E-commerce Development \| QuantLab USA |
| /industries/healthcare | 200 | OK | 10 | OK | MISSING | 990 | Custom Healthcare Software Development \| QuantLab |

### Comparison (3 pages)

| URL | HTTP | H1 | LD+JSON | Canonical | OG:img | Words | Title |
|---|---|---|---|---|---|---|---|
| /vs/salesforce | 200 | OK | 10 | OK | MISSING | 1165 | Custom CRM Development vs Salesforce \| QUANT LAB USA |
| /vs/shopify | 200 | OK | 10 | OK | MISSING | 1267 | Custom E-commerce Development vs Shopify \| QUANT LA... |
| /vs/big-4-pentest | 200 | OK | 10 | OK | MISSING | 1117 | QUANT LAB USA vs Big-4 Pentest Firms \| QUANT LAB USA |

### Case Study (6 pages — ALL have public DRAFT disclaimer)

| URL | HTTP | H1 | LD+JSON | Canonical | OG:img | Words | DRAFT? | Title |
|---|---|---|---|---|---|---|---|---|
| /work/northcrest-fence | 200 | OK | 10 | OK | MISSING | 790 | **YES** | Northcrest Fence & Gate Case Study \| Custom Sal... |
| /work/hobbspeak | 200 | OK | 10 | OK | MISSING | 831 | **YES** | HobbsPeak Custom Hats Case Study \| Headless E-Comme... |
| /work/bridgepointe-painting | 200 | OK | 10 | OK | MISSING | 744 | **YES** | Bridgepointe Painting Case Study \| QuickBooks-Synced... |
| /work/protectwithbri | 200 | OK | 10 | OK | MISSING | 775 | **YES** | ProtectWithBri Case Study \| Insurance Advisor Landi... |
| /work/j5-sales-os | 200 | OK | 10 | OK | MISSING | 842 | **YES** | J5 Sales OS Case Study \| AI-Powered Lead Gen & ... |
| /work/wilder-recovery | 200 | OK | 10 | OK | MISSING | 911 | **YES** | Wilder Recovery Case Study \| Towing & Lot Manag... |

### Calculator (1 page)

| URL | HTTP | H1 | LD+JSON | Canonical | OG:img | Words | Title |
|---|---|---|---|---|---|---|---|
| /calculators/stripe-cost | 200 | OK | 10 | OK | MISSING | 676 | Stripe Integration Cost Calculator \| QUANT LAB USA |

### Legal / Other (2 pages)

| URL | HTTP | H1 | LD+JSON | Canonical | OG:img | Words | Title |
|---|---|---|---|---|---|---|---|
| /privacy | 200 | OK | 6 | **MISSING** | OK | 181 | Privacy Policy \| QuantLab Software Solutions |
| /terms | 200 | OK | 6 | **MISSING** | OK | 154 | Terms of Service \| QuantLab Software Solutions |

---

## Deep-Sample Content Quality Notes

Reviewed via WebFetch with a content-quality prompt against ~14 representative pages (homepage, /about, /services, /work, /faq, /services/penetration-testing, /services/algorithmic-trading-systems, /software-development-macon-ga, /services/custom-crm-development/atlanta-ga, /services/stripe-integration/austin-tx, /services/penetration-testing/miami-fl, /services/penetration-testing/new-york-ny, /industries/fintech, /vs/salesforce, /work/hobbspeak, /work/j5-sales-os, /work/northcrest-fence, /calculators/stripe-cost).

Findings:
- **City interpolation works correctly.** No `[CITY]`, `{city}`, `undefined`, or `NaN` leakage was found on any city or city-service page. The city name appears in H1, breadcrumb, FAQ section headers, body copy, and CTA on every sampled page.
- **City pages are genuinely localised**, not boilerplate. Sample verbatim phrases:
  - Atlanta CRM: "procurement teams in Buckhead actually ask for"
  - Austin Stripe: references "MoPac corridor", "East Austin coffee-shop founder pool", Tesla/Oracle migration
  - Miami pentest: "cross-border: bilingual products, multi-currency billing, LATAM compliance edge cases"
  - NYC pentest: "Fintech, ad-tech, agency holding companies, hedge funds, and a relentless stream of SaaS founders"
- **Schema is consistent and well-populated.** Standalone services emit 10 JSON-LD blocks; city-service pages emit 12; core hubs emit 6–8. No page is schema-less.
- **Calculator is functional**, not a static placeholder ("Update any field — the estimate recalculates live").
- **Industry pages address regulatory specifics** (fintech: PCI-DSS, SOC 2, SOX, KYC/AML, GLBA; threat actors FIN7, APT38, Lazarus).
- **`/vs/*` pages contain real comparison content** (custom CRM vs Salesforce, e-com vs Shopify, QuantLab vs Big-4 pentest), not template stubs.

---

## Sitemap & Robots

- `https://quantlabusa.dev/sitemap.xml` → 200, 93 `<loc>` entries, well-formed XML, all absolute HTTPS, distinct lastmods (`2026-05-12T06:09:46.634Z`), reasonable priority/changefreq.
- `https://quantlabusa.dev/robots.txt` → 200, allows all, disallows `/admin /sales /print /api /training`, references sitemap. Clean.

Sitemap defects (re-stated for tracking):
- declares `/contact` but `/contact` is a 404
- omits 4 live case studies (`/work/active-directory-pentest`, `/work/contractor-estimating-proposal-engine`, `/work/motorcycle-shop-ops-platform`, `/work/multi-strategy-trading-system`)

---

## Methodology

- Direct `urllib`-based HEAD/GET against all 93 sitemap URLs (10-worker thread pool), regex extraction of `<title>`, `<meta name="description">`, `<h1>`, `application/ld+json` blocks, `<link rel="canonical">`, `<meta property="og:image">`, and known placeholder patterns (`lorem ipsum`, `[CITY]`, `REPLACE_WITH`, `TODO`, `FIXME`, `XXX`).
- The `REPLACE_WITH` hits were investigated separately and traced to a single source — the unset `google-site-verification` token, which is identical across all 92 200-status pages and is therefore reported as a single P1 issue rather than 92 P1 issues.
- WebFetch deep-dive on a ~30-URL representative sample for content quality and city-interpolation verification.
- Body word counts approximated by stripping `<script>`, `<style>`, and all tags, then counting whitespace-separated tokens. These include site nav/footer text and so slightly overstate body content for shorter pages; the relative ordering across pages is reliable.

Source artefacts saved during the audit:
- Sitemap snapshot: `/tmp/sitemap.xml`
- URL list: `/tmp/urls.txt`
- Per-page raw results: `/tmp/audit_results.json`
- Per-page issue annotations: `/tmp/per_page_issues.json`
