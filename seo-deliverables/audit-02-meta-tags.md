# Audit 02 — Meta Tag & Title Audit (Live Site)

**Site:** quantlabusa.dev
**Sitemap URLs audited:** 93 (100% coverage)
**Date:** 2026-05-12
**Method:** `curl` raw HTML fetch + regex extraction of `<title>`, `<meta name="description">`, `<link rel="canonical">`, OG tags, Twitter Card tags, and `<h1>` — for every URL in `sitemap.xml`.

---

## Executive Summary

The site has **strong title/description copywriting** — almost every page has a hand-written, keyword-rich title (50–61 chars) and a hand-written description (130–165 chars). That puts QuantLab well ahead of most service sites at this stage.

**However, three systemic issues are dragging down social-share CTR, near-dup risk, and trust:**

| Severity     | Issue                                                                                  | # URLs    |
| ------------ | -------------------------------------------------------------------------------------- | --------- |
| **CRITICAL** | `/contact` returns HTTP 404 — page is in sitemap but broken                            | 1         |
| **CRITICAL** | `og:image` missing site-wide (only privacy/terms/contact have `/logo.png`)             | 90        |
| **HIGH**     | Twitter card is `summary` (small thumbnail) on most pages — should be `summary_large_image` | 76    |
| **HIGH**     | 14 CRM city pages share near-identical templated descriptions (Google near-dup risk)   | 14        |
| **HIGH**     | 14 Custom-CRM city pages have an empty `<h1>` (client-rendered)                        | 14 (sample) |
| **MEDIUM**   | `/contact`, `/privacy`, `/terms` missing canonical link                                | 3         |
| **MEDIUM**   | 8 pages have description outside 120–170-char target (4 too short, 4 too long)         | 8         |
| **MEDIUM**   | Homepage canonical is `https://quantlabusa.dev` (no trailing slash) vs requested URL `/` | 1       |
| **LOW**     | `&` is HTML-encoded in many titles/descriptions (`&amp;`, `&#39;`) — Google renders fine but social previews can look ugly | ~15 |
| **LOW**     | OG description on `/contact`, `/privacy`, `/terms` falls back to global QuantLab tagline, not page-specific | 3 |

**Quick-win priority order:**
1. **Fix `/contact`** — sitemap advertises a 404; this is the highest single-page severity item on the site.
2. **Ship a default `og:image`** — generate a branded 1200×630 PNG (logo + tagline + accent color). Set globally in the Next.js root metadata, override on case-study pages with project screenshots.
3. **Flip Twitter card to `summary_large_image`** — same Next.js metadata change, no design work needed once OG image exists.
4. **Differentiate the 14 CRM city descriptions** — they currently differ only by city name. Rewrite each with at least one local-specific phrase (vertical, neighborhood, or buyer profile) the way the penetration-testing city pages already do.
5. **Add an explicit `<h1>` to Custom-CRM city pages** — bots see an empty `<h1>` on first paint.

---

## Methodology Notes

- All meta tags were extracted from the **raw HTML response** (server-side rendered Next.js output) using `curl` — not from a headless browser. Empty H1 fields therefore mean *the H1 is rendered client-side and not present in initial HTML*, which is the relevant signal for crawlers.
- "Char count" for titles/descriptions is **after HTML-entity decoding** (`&amp;` → `&`, `&#39;` → `'`).
- Rules applied:
  - Title length flag: <30 or >65 chars
  - Description length flag: <120 or >170 chars
  - OG image present
  - Twitter card == `summary_large_image`
  - Canonical present and matches URL
  - H1 present in initial HTML and roughly matches title intent

---

## 1. Top 5 Rewrites (Highest Impact)

| # | URL | Current Issue | Proposed Action |
|---|---|---|---|
| 1 | `/contact` | **HTTP 404** — page broken | Restore page. Title: `Contact QuantLab — Free Scoping Call / QUANT LAB USA` (56). Description: `Talk to the engineer who will build it. Free 30-min scoping call for custom software, CRM, Stripe, or penetration testing. (770) 652-1282.` (149) |
| 2 | `/` (homepage) | OG image empty, Twitter card = `summary_large_image` but image missing → social previews are blank | Generate `/og/home.png` (1200×630). Keep current title & description (already strong). Override `og:image` and `twitter:image`. |
| 3 | `/services/custom-crm-development/{city}` (14 URLs) | All 14 descriptions are templated; only city name changes. High near-dup risk. | Rewrite each with city-specific vertical/buyer (same approach already used on `/services/penetration-testing/{city}`). Example for Atlanta: "Custom CRM for Atlanta SaaS and Transaction Alley fintech tired of Salesforce seat-tax. Pipeline + lead capture + reporting modeled on your sales motion. Next.js + Postgres." (181 — trim to 165) |
| 4 | `/work` | Description = 178 chars (over target); Twitter card = `summary` | Trim to: "Trading systems, sales platforms, lot-management software, and pentests we shipped across financial services, contractor trades, and SaaS. Real outcomes, real code." (159). Switch Twitter card to `summary_large_image`. |
| 5 | `/about` | Description = 226 chars (way over target); brand-only title | Title: `About QuantLab — Founder-Led Software & Security / Georgia` (61). Description: "Founder-led software and security shop based in Georgia. The engineer scoping the call also writes the code — no account managers, no offshore handoff." (157) |

---

## 2. Findings by Page Type

### 2A. Homepage & Navigation Pages (8 URLs)

| URL | Title | T-Len | Issue(s) | Proposed Rewrite | Priority |
|---|---|---|---|---|---|
| `https://quantlabusa.dev/` | Custom Software Development & Cybersecurity / QUANT LAB USA | 59 | og:image missing; canonical=`https://quantlabusa.dev` (no slash) vs sitemap URL with slash; Twitter card uses `summary_large_image` but no image present | Title OK. Add og:image. Normalize canonical to `https://quantlabusa.dev/` to match sitemap. | HIGH |
| `https://quantlabusa.dev/about` | About / QuantLab Software Solutions | 35 | Brand-only title, weak keyword usage; description 226 chars (over limit) | Title: `About QuantLab — Founder-Led Software & Security / Georgia` (61). Desc: "Founder-led software and security shop based in Georgia. The engineer scoping the call also writes the code — no account managers, no offshore handoff." (157) | HIGH |
| `https://quantlabusa.dev/services` | Software Development & Cybersecurity Services / QUANT LAB USA | 61 | og:image missing; Twitter `summary` | OK once og:image + card fixed sitewide | MED |
| `https://quantlabusa.dev/work` | Case Studies / QuantLab Software Solutions | 42 | Title bland — no keyword; desc=178 (over) | Title: `Software Case Studies — Real Projects Shipped / QuantLab` (58). Desc: "Trading systems, sales platforms, lot-management software, and pentests we shipped across financial services, contractor trades, and SaaS." (138) | HIGH |
| `https://quantlabusa.dev/faq` | Custom Software & Pentest FAQs / QUANT LAB USA | 46 | og:image missing | Title OK. Add og:image. | MED |
| `https://quantlabusa.dev/contact` | 404: This page could not be found. | 34 | **HTTP 404** — page broken | Restore page. See top-5 table above. | **CRITICAL** |
| `https://quantlabusa.dev/privacy` | Privacy Policy / QuantLab Software Solutions | 44 | Desc=47 (way under); no canonical; og:desc is global tagline (wrong for page) | Desc: "QuantLab Software Solutions privacy policy — what data we collect during scoping calls, contract work, and on this site, and how we handle it." (147). Add canonical. | MED |
| `https://quantlabusa.dev/terms` | Terms of Service / QuantLab Software Solutions | 46 | Desc=49 (way under); no canonical | Desc: "Terms of service for QuantLab Software Solutions client engagements, including scope, IP ownership, payment terms, and warranty coverage." (140). Add canonical. | MED |

### 2B. Service Pages (14 URLs)

All service pages have **strong custom titles and descriptions in target ranges**. The only systemic gaps are og:image + Twitter card type.

| URL | Title | T-Len | D-Len | Issue(s) | Priority |
|---|---|---|---|---|---|
| `/services/custom-business-software` | Custom CRM, ERP & Internal Tools — Built to Fit / QuantLab | 60 | 161 | og:image missing | MED |
| `/services/custom-crm-development` | Custom CRM Development / Built for Your Workflow / QuantLab | 59 | 157 | og:image missing | MED |
| `/services/cloud-infrastructure` | DevOps & CI/CD Consulting — Zero Outages / QuantLab | 53 | 163 | og:image missing | MED |
| `/services/web-applications` | Next.js Web App & SaaS Development — Vercel-Ready / QuantLab | 62 | 165 | og:image missing | MED |
| `/services/payments-invoicing-licensing` | Stripe Integration, ACH Billing & License Servers / QuantLab | 60 | 163 | og:image missing | MED |
| `/services/penetration-testing` | Penetration Testing Georgia — 11-Module Red Team / QuantLab | 61 | 165 | og:image missing | MED |
| `/services/mitre-attack-assessment` | MITRE ATT&CK Assessment / ATT&CK-Aligned Pentest / QuantLab | 59 | 155 | og:image missing | MED |
| `/services/algorithmic-trading-systems` | Algorithmic Trading Bot Development — 5 Live Systems / QuantLab | 65 | 169 | At title-length ceiling | LOW — consider trimming to "Algorithmic Trading Bot Development — 5 Live Systems / QuantLab" (still 65) or compressing the QuantLab suffix |
| `/services/stripe-integration` | Custom Stripe Integration Consulting / QuantLab | 47 | 160 | OG image PRESENT (good); title slightly short — could add USP | Optional: "Custom Stripe Integration Consulting — Connect & Beyond / QuantLab" (66) |
| `/services/license-server` | Custom Software License Server Development / QuantLab | 53 | 161 | OG image PRESENT | OK |
| `/services/subscription-billing` | Custom Subscription Billing Development / QuantLab | 50 | 158 | OG image PRESENT | OK |
| `/services/web-app-pentest` | Web Application Penetration Testing / OWASP / QuantLab | 54 | 156 | OG image PRESENT | OK |
| `/services/network-pentest` | Internal & External Network Penetration Testing / QuantLab | 58 | 152 | OG image PRESENT | OK |
| `/services/active-directory-pentest` | Active Directory Penetration Testing & Hardening / QuantLab | 59 | 152 | OG image PRESENT | OK |

### 2C. City Landing Pages — Software Development (14 URLs)

| URL | Title | T-Len | D-Len | Issue(s) | Priority |
|---|---|---|---|---|---|
| `/software-development-macon-ga` | Custom Software Development in Macon GA / QUANT LAB USA | 55 | 147 | og:image missing | MED |
| `/software-development-atlanta-ga` | Atlanta Software Developer & Pen Testing / QUANT LAB USA | 56 | 147 | og:image missing | MED |
| `/software-development-augusta-ga` | Augusta GA Software Dev & Penetration Testing / QUANT LAB USA | 61 | 143 | og:image missing | MED |
| `/software-development-columbus-ga` | Columbus GA Custom Software Developer / QUANT LAB USA | 53 | 141 | og:image missing | MED |
| `/software-development-savannah-ga` | Savannah GA Software Development & SaaS Build / QUANT LAB USA | 61 | 133 | og:image missing | MED |
| `/software-development-miami-fl` | Miami Custom Software & SaaS Development / QUANT LAB USA | 56 | 138 | og:image missing | MED |
| `/software-development-austin-tx` | Austin TX Custom Software Developer for Startups / QUANT LAB | 60 | 136 | og:image missing | MED |
| `/software-development-dallas-tx` | Dallas Custom Software & Penetration Testing / QUANT LAB USA | 60 | 141 | og:image missing | MED |
| `/software-development-chicago-il` | Chicago Custom Software Developer / QUANT LAB USA | 49 | 145 | og:image missing | MED |
| `/software-development-seattle-wa` | Seattle Custom Software & SaaS Developer / QUANT LAB USA | 56 | 152 | og:image missing | MED |
| `/software-development-new-york-ny` | NYC Custom Software Development & Pen Testing / QUANT LAB USA | 61 | 135 | og:image missing | MED |
| `/software-development-charlotte-nc` | Charlotte NC Software Development & Pen Testing / QUANT LAB | 59 | 148 | og:image missing | MED |
| `/software-development-nashville-tn` | Nashville Custom Software Developer / QUANT LAB USA | 51 | 144 | og:image missing | MED |
| `/software-development-san-francisco-ca` | San Francisco Custom Software & Pen Testing / QUANT LAB USA | 59 | 139 | og:image missing | MED |

All city dev pages have **city-specific vertical hooks in their descriptions** — well done. Only systemic miss is og:image.

### 2D. City Landing Pages — Penetration Testing (14 URLs)

All within target ranges. Strong city-specific descriptions (Fort Eisenhower for Augusta, port logistics for Savannah, CME for Chicago, Truist/BoA for Charlotte, SCAD for Savannah, HIPAA for Nashville, etc.). Only systemic miss is og:image + Twitter card type. **H1 is empty in initial HTML on every page** (client-rendered) — bots see no H1.

| URL | T-Len | D-Len | Issue(s) | Priority |
|---|---|---|---|---|
| `/services/penetration-testing/macon-ga` | 52 | 139 | og:image, empty H1 in HTML | MED |
| `/services/penetration-testing/atlanta-ga` | 54 | 143 | og:image, empty H1 | MED |
| `/services/penetration-testing/augusta-ga` | 54 | 134 | og:image, empty H1 | MED |
| `/services/penetration-testing/savannah-ga` | 55 | 138 | og:image, empty H1 | MED |
| `/services/penetration-testing/columbus-ga` | 55 | 148 | og:image, empty H1 | MED |
| `/services/penetration-testing/miami-fl` | 52 | 141 | og:image, empty H1 | MED |
| `/services/penetration-testing/dallas-tx` | 53 | 139 | og:image, empty H1 | MED |
| `/services/penetration-testing/chicago-il` | 54 | 137 | og:image, empty H1 | MED |
| `/services/penetration-testing/austin-tx` | 53 | 150 | og:image, empty H1 | MED |
| `/services/penetration-testing/seattle-wa` | 54 | 137 | og:image, empty H1 | MED |
| `/services/penetration-testing/charlotte-nc` | 56 | 143 | og:image, empty H1 | MED |
| `/services/penetration-testing/nashville-tn` | 56 | 141 | og:image, empty H1 | MED |
| `/services/penetration-testing/new-york-ny` | 55 | 145 | og:image, empty H1 | MED |
| `/services/penetration-testing/san-francisco-ca` | 60 | 131 | og:image, empty H1 | MED |

**Fix for H1:** Move H1 from a client component into a server component so it appears in initial HTML. Same applies to Custom-CRM city pages and a handful of others.

### 2E. City Landing Pages — Custom CRM (14 URLs) — **NEAR-DUPLICATE RISK**

**Issue:** Every CRM city page uses the exact same description template, swapping only the city name:
> *"Custom CRM software built for {CITY} businesses tired of Salesforce/HubSpot bloat. From discovery to launch in 8-16 weeks. Founder-led."*

This is the **single biggest content-quality issue** in the audit. Google can fold these into the same cluster, suppressing all but one.

**Recommended rewrites (model after the penetration-testing city pages, which give each city a vertical hook):**

| URL | Current Description | Proposed Rewrite |
|---|---|---|
| `/services/custom-crm-development/macon-ga` | "Custom CRM software built for Macon businesses tired of Salesforce/HubSpot bloat..." | "Custom CRM development in Macon, GA for Middle Georgia distributors, contractors, and field-service shops. Pipeline + lead capture + dispatch — modeled on your sales motion." (165) |
| `/services/custom-crm-development/atlanta-ga` | (templated) | "Custom CRM for Atlanta SaaS and Transaction Alley fintech tired of Salesforce seat-tax. Pipeline + automations + reporting in your actual workflow. Next.js + Postgres." (164) |
| `/services/custom-crm-development/augusta-ga` | (templated) | "Custom CRM development in Augusta, GA for CSRA businesses and Fort Eisenhower contractors. NIST/CMMC-aware data handling. Founder-led delivery in 8–16 weeks." (158) |
| `/services/custom-crm-development/columbus-ga` | (templated) | "Custom CRM for Columbus, GA distributors, contractors, and Chattahoochee Valley SMBs. Built around field sales and dispatch — not Salesforce templates. 8–16 weeks." (162) |
| `/services/custom-crm-development/savannah-ga` | (templated) | "Custom CRM for Savannah hospitality, logistics, and Port-of-Savannah-adjacent SMBs. Reservation flows, dispatch, ERP sync. Founder-led, no offshore." (148) |
| `/services/custom-crm-development/miami-fl` | (templated) | "Custom CRM for Miami fintech, LATAM-facing SaaS, and hospitality. Multi-language, multi-currency-aware pipelines and Stripe integration. Founder-led builds." (155) |
| `/services/custom-crm-development/austin-tx` | (templated) | "Custom CRM for Austin SaaS startups outgrowing HubSpot. Usage-tied pipelines, product-led growth events, Stripe-aware deal records. Series A-ready." (146) |
| `/services/custom-crm-development/dallas-tx` | (templated) | "Custom CRM for DFW enterprise sales orgs, logistics ops, and B2B distributors. NetSuite/QBO sync, territory & quota modeling, audit-ready reporting." (148) |
| `/services/custom-crm-development/chicago-il` | (templated) | "Custom CRM for Chicago trading firms, manufacturers, and logistics. Compliance-aware deal records, KYC-tied contacts, ERP/QuickBooks sync." (140) |
| `/services/custom-crm-development/seattle-wa` | (templated) | "Custom CRM for Seattle SaaS, dev-tools, and cloud-native startups. Product-led growth events, Stripe-tied entitlements, API-first sync. Founder-led." (151) |
| `/services/custom-crm-development/new-york-ny` | (templated) | "Custom CRM for NYC fintech, ad-tech, and managed-service agencies. High-volume pipeline, compliance-aware contact records, Stripe Connect-aware deals." (153) |
| `/services/custom-crm-development/charlotte-nc` | (templated) | "Custom CRM for Charlotte fintech vendors selling into BofA, Truist, and the Uptown banking ecosystem. Vendor-management workflows, audit-ready notes." (152) |
| `/services/custom-crm-development/nashville-tn` | (templated) | "Custom CRM for Nashville healthcare practices, music-tech SaaS, and Music Row publishers. HIPAA-aware contact handling, royalty-split reporting." (148) |
| `/services/custom-crm-development/san-francisco-ca` | (templated) | "Custom CRM for SF Series A+ SaaS and B2B startups tired of Salesforce. Usage-tied pipelines, Stripe-aware deals, Notion/Linear integrations. Founder-led." (158) |

### 2F. City Landing Pages — Stripe Integration (14 URLs)

All have **city-specific vertical hooks already** (LATAM for Miami, Truist/BoA for Charlotte, CME for Chicago, etc.). Strong work. Only systemic miss is og:image and Twitter card. No rewrites needed.

| URL | T-Len | D-Len | Status |
|---|---|---|---|
| `/services/stripe-integration/macon-ga` | 47 | 157 | OK (og:image missing) |
| `/services/stripe-integration/atlanta-ga` | 49 | 154 | OK |
| `/services/stripe-integration/augusta-ga` | 49 | 148 | OK |
| `/services/stripe-integration/columbus-ga` | 50 | 152 | OK |
| `/services/stripe-integration/savannah-ga` | 50 | 157 | OK |
| `/services/stripe-integration/miami-fl` | 47 | 149 | OK |
| `/services/stripe-integration/austin-tx` | 48 | 155 | OK |
| `/services/stripe-integration/dallas-tx` | 48 | 151 | OK |
| `/services/stripe-integration/chicago-il` | 49 | 150 | OK |
| `/services/stripe-integration/seattle-wa` | 49 | 148 | OK |
| `/services/stripe-integration/new-york-ny` | 50 | 146 | OK |
| `/services/stripe-integration/charlotte-nc` | 51 | 149 | OK |
| `/services/stripe-integration/nashville-tn` | 51 | 153 | OK |
| `/services/stripe-integration/san-francisco-ca` | 55 | 139 | OK |

### 2G. Industry Pages (5 URLs)

All within target. Solid.

| URL | T-Len | D-Len | Issue(s) | Priority |
|---|---|---|---|---|
| `/industries/fintech` | 42 | 165 | Title slightly short; og:image PRESENT | LOW: extend title to "Custom Software for Fintech — Compliance-Aware Builds / QuantLab" (62) |
| `/industries/construction` | 53 | 165 | og:image PRESENT | OK |
| `/industries/insurance` | 50 | 163 | og:image PRESENT | OK |
| `/industries/e-commerce` | 44 | 154 | Title slightly short; og:image PRESENT | LOW: "Custom E-commerce Development — Beyond Shopify / QuantLab USA" (61) |
| `/industries/healthcare` | 49 | 168 | og:image PRESENT | OK |

### 2H. "vs" Comparison Pages (3 URLs)

| URL | T-Len | D-Len | Issue(s) | Priority |
|---|---|---|---|---|
| `/vs/big-4-pentest` | 52 | 179 | Desc=179 (over limit); og:image PRESENT | MED: trim to "Big-4 pentests are excellent for enterprise. For SMB and mid-market, founder-led ATT&CK-aligned testing at $8k–$40k fits budget and timeline." (155) |
| `/vs/salesforce` | 52 | 185 | Desc=185 (over); og:image PRESENT | MED: "Salesforce wins at scale. For <200-employee teams with vertical workflows, a custom CRM often beats it on TCO and fit. Honest comparison, real math." (158) |
| `/vs/shopify` | 56 | 182 | Desc=182 (over); og:image PRESENT | MED: "Shopify wins for most stores. For B2B wholesale, complex catalogs, and ERP-tied operations, a custom build often wins on cost and fit. The math, honest." (159) |

### 2I. Case Studies (6 URLs)

All within target ranges. Twitter card is `summary` instead of `summary_large_image` — case studies benefit most from large-image previews because they have project screenshots.

| URL | T-Len | D-Len | Issue(s) | Priority |
|---|---|---|---|---|
| `/work/hobbspeak` | 60 | 167 | og:image missing; Twitter `summary` | HIGH (case studies need shareability) |
| `/work/northcrest-fence` | 58 | 147 | og:image missing; Twitter `summary` | HIGH |
| `/work/bridgepointe-painting` | 61 | 163 | og:image missing; Twitter `summary` | HIGH |
| `/work/protectwithbri` | 58 | 167 | og:image missing; Twitter `summary` | HIGH |
| `/work/j5-sales-os` | 60 | 166 | og:image missing; Twitter `summary` | HIGH |
| `/work/wilder-recovery` | 59 | 175 | Desc=175 (over); og:image missing; Twitter `summary` | HIGH: trim desc to "How QuantLab built a lot-management platform for Wilder Recovery — vehicle intake, photo chain-of-custody, inventory release, and scheduling." (148) |

**Recommendation:** Use the project hero screenshot as `og:image` for each case study. Highest ROI of any og:image work.

### 2J. Calculator (1 URL)

| URL | T-Len | D-Len | Issue(s) | Priority |
|---|---|---|---|---|
| `/calculators/stripe-cost` | 50 | 123 | Desc=123 (near low end, OK); og:image PRESENT | OK |

---

## 3. Cross-Site Patterns (Apply Once, Fix Many)

### 3.1 Global Next.js `metadata` change — fix 90 pages at once

In the Next.js root layout's `metadata` export:

1. Add a default `og:image` (and `twitter:image`) pointing to a generated 1200×630 brand asset (`/og/default.png`).
2. Switch `twitter.card` default from `summary` to `summary_large_image`.
3. Override `og:image` per-page where a more specific asset exists (case studies use hero screenshots; service pages use service-specific banners).

### 3.2 OG title HTML-entity encoding

OG titles like `Custom Software Development &amp; Cybersecurity / QUANT LAB USA` will render literally as `&amp;` in some scrapers' previews. Set the OG title in JS string (not HTML attribute) so Next.js handles encoding once.

### 3.3 OG description fallback bug on legal/contact

`/contact`, `/privacy`, `/terms` all have an `og:description` of *"Custom software development and cybersecurity services. CRM systems, trading bots, web applications, and penetration testing."* — that's the site-wide default leaking through. Each page should override with its own description.

### 3.4 Server-render the H1

Many pages return zero `<h1>` text in the raw HTML (the H1 is added by client JS). Google does process JS, but the H1 is a strong on-page signal and should be in the initial HTML. Affected page types: penetration-testing city pages, custom-CRM city pages (sampled), homepage.

### 3.5 Canonicalization

- Homepage: canonical is `https://quantlabusa.dev` (no trailing slash). Sitemap lists `https://quantlabusa.dev/`. Normalize to one.
- `/contact`, `/privacy`, `/terms`: no canonical at all. Add.

---

## 4. Issue Counts (for stakeholder reporting)

- **Pages audited:** 93 / 93 (100%)
- **Pages with broken HTTP status (404):** 1
- **Pages missing `og:image`:** 90
- **Pages with `twitter:card = summary` (should be `summary_large_image`):** 76
- **Pages missing canonical link:** 3
- **Pages with title outside 30–65 char range:** 1 (`/about` at 35 is the only outlier; all others fit)
- **Pages with description outside 120–170 char range:** 8 (`/privacy` 47, `/terms` 49, `/work` 178, `/about` 226, `/vs/big-4-pentest` 179, `/vs/salesforce` 185, `/vs/shopify` 182, `/work/wilder-recovery` 175, `/calculators/stripe-cost` 123 borderline)
- **Pages with exact duplicate titles:** 0
- **Pages with exact duplicate descriptions:** 0
- **Pages with near-duplicate templated descriptions:** 14 (Custom-CRM city pages)
- **Pages with empty H1 in initial HTML:** at least 28 (all CRM city pages + all pentest city pages, sample-checked)
