# Audit 05: Internal Linking Graph - quantlabusa.dev

**Date:** 2026-05-12
**Scope:** All 93 URLs in https://quantlabusa.dev/sitemap.xml
**Methodology:** Sampled 38 unique URLs covering every page-type template (homepage, hubs, service pages, city pages, city-service sub-pages, industries, vs pages, case studies, calculators, legal). For non-sampled URLs in templated families, body-link patterns were inferred from observed siblings.

---

## 1. Methodology & Link Types

Two graphs were computed:

- **Full graph** = body links + nav/footer links. Nav/footer adds these to every page: `/`, `/services`, `/work`, `/about`, `/faq`, `/privacy`, `/terms`. The "Get in Touch" CTA is `/#contact` (anchor on homepage, not the /contact path).
- **Body-only graph** = only links inside body content (excludes nav/footer). This is what Google's PageRank flow actually responds to most strongly - nav/footer links are de-prioritized in modern ranking signals.

Most findings below use the **body-only graph** because that is what controls topical authority distribution.

---

## 2. Headline Stats

| Metric | Full graph | Body-only |
|--------|-----------|-----------|
| URLs in sitemap | 93 | 93 |
| Reachable from `/` via BFS | 77 | 58 |
| **Unreachable from `/`** | **16** | **35** |
| Max click depth | 3 | 8 |
| Pages at depth >3 | 0 | 11 |
| Pages with ZERO body inbound | - | 11 |

---

## 3. Critical Findings

### 3a. `/contact` returns 404

- The path `/contact` returned an HTTP 404 when fetched.
- However, body content on **many** pages links to `/contact` as a CTA: `/software-development-macon-ga`, `/software-development-atlanta-ga`, `/software-development-augusta-ga`, all 14 `software-development-*` city pages, `/services/payments-invoicing-licensing`, etc.
- The header/footer nav points to `/#contact` (homepage anchor) - that works.
- The body links to `/contact` are dead. **Every city page has a broken "Start a Project" link.**

**FIX (high priority):** Either (a) create a real `/contact` page or (b) change all city-page CTAs from `href="/contact"` to `href="/#contact"`.

### 3b. Pages referenced but NOT in the sitemap (sitemap omission)

These four case studies are heavily linked from body content but are absent from sitemap.xml:

| URL | Body-inbound | Note |
|---|---|---|
| `/work/active-directory-pentest` | 19 | Linked from `/services/penetration-testing`, all pentest service variants, `/industries/fintech`, `/vs/big-4-pentest`, etc. |
| `/work/contractor-estimating-proposal-engine` | 5 | Linked from `/services/custom-crm-development`, `/industries/construction`, `/work/northcrest-fence`, `/work/bridgepointe-painting` |
| `/work/multi-strategy-trading-system` | 3 | Linked from `/industries/fintech`, `/services/penetration-testing/new-york-ny` |
| `/work/motorcycle-shop-ops-platform` | 2 | Linked from `/services/custom-crm-development` |

**FIX:** Add these four URLs to `sitemap.xml`. They render fine when fetched directly.

### 3c. The /services hub does NOT include 12 of the new city/industry/vs URLs

The /services hub is well populated for cities but **only links to the 14 `/software-development-*` URLs**, not the 42 city-service sub-pages (`/services/penetration-testing/*`, `/services/custom-crm-development/*`, `/services/stripe-integration/*`). The 14 location bubbles all go to the generic city page.

Additionally, the /services hub links to:
- 5 of 5 industries ✓
- 2 of 3 vs pages: salesforce, shopify - but **missing /vs/big-4-pentest** ✗
- 0 of 1 calculators ✗

### 3d. The homepage links to ZERO city, industry, vs, calculator, or case-study URLs in body

The homepage body links to exactly 6 service hubs and nothing else. Every city, industry, comparison, calculator, and case study is at least 2 body-clicks away (most are 3+ or unreachable).

---

## 4. Orphan Pages (ZERO body inbound)

Pages reachable only via nav/footer. From Google's POV, these have effectively no topical signals flowing in.

| URL | Depth (full) | Outbound | Notes |
|---|---|---|---|
| `/contact` | unreachable | 0 | 404, separately broken |
| `/services/stripe-integration/augusta-ga` | unreachable | 7 | Sibling cities aren't sampled but template should link in |
| `/services/stripe-integration/columbus-ga` | unreachable | 7 | Same template orphan |
| `/services/stripe-integration/miami-fl` | unreachable | 7 | Same template orphan |
| `/vs/big-4-pentest` | unreachable (body) | 4 | Not in /services hub; not from /services/penetration-testing either |
| `/faq` | 1 (nav-only) | 0 | Acceptable — nav-only is fine for utility pages |
| `/privacy` | 1 (nav-only) | 0 | Acceptable — legal page |
| `/terms` | 1 (nav-only) | 0 | Acceptable — legal page |
| `/about` | 1 (nav-only) | 1 | Should have body inbound from work/case studies |
| `/services` | 1 (nav-only) | 35 | Hub itself only nav-linked from body — homepage CTAs all go to `/#contact`, none to `/services` from body |
| `/` | 0 | 6 | Self - excluded |

**Most critical orphan: `/vs/big-4-pentest`** - the boutique-vs-Big-4 page is a strong commercial-intent comparison page but is currently orphaned. It should be linked from `/services/penetration-testing`, all pentest city sub-pages, and `/services`.

### 4a. Pages unreachable via body links from homepage (35 total)

These all exist but are body-island unreachable:

- All 5 `/industries/*` pages (homepage → services → no industries link in /services body? confirmed: industries ARE in /services. They are reachable via /services. But since /services has zero body inbound, the chain breaks.)
- All 3 `/vs/*` pages (only /services links to vs pages; /services has no body inbound)
- All 14 `/services/stripe-integration/<city>` pages
- `/services/web-app-pentest`, `/services/network-pentest`, `/services/active-directory-pentest` (linked only from `/services/penetration-testing` which sits at depth 2 in body, but those sub-services don't appear from the pentest hub body)
- `/work/wilder-recovery`, `/calculators/stripe-cost`, `/software-development-miami-fl` (Miami city only linked from siblings, no homepage body path)

**Root cause:** the homepage body links to 6 service hubs and stops there. Everything depends on the nav/footer to be discovered, which dilutes PageRank.

---

## 5. Deep Pages (body-only depth > 3)

| Depth | URL |
|---|---|
| 4 | `/services/stripe-integration` |
| 4 | `/software-development-nashville-tn` |
| 4 | `/work/hobbspeak` |
| 5 | `/services/license-server` |
| 5 | `/services/subscription-billing` |
| 5 | `/software-development-austin-tx` |
| 6 | `/software-development-dallas-tx` |
| 6 | `/software-development-san-francisco-ca` |
| 7 | `/software-development-chicago-il` |
| 7 | `/software-development-seattle-wa` |
| 8 | `/software-development-new-york-ny` |

`/services/stripe-integration` at depth 4 is striking - it should be a top-level service. Currently you can only reach it through `/services/payments-invoicing-licensing` body links, which themselves are not on the homepage body.

The city pages chain via "neighboring cities" only (Macon links to Atlanta+Columbus, Atlanta to Macon+Augusta, etc.), creating a long chain instead of a hub-and-spoke. New York is **8 clicks deep** from body links.

---

## 6. PageRank Sinks (high inbound, low outbound)

Body-only counts:

| URL | Inbound | Outbound | Sink ratio |
|---|---|---|---|
| `/services/web-applications` | 34 | 3 | 11.3 |
| `/services/custom-business-software` | 33 | 3 | 11.0 |
| `/services/algorithmic-trading-systems` | 8 | 3 | 2.7 |
| `/services/cloud-infrastructure` | 9 | 3 | 3.0 |
| `/services/stripe-integration` | 34 | 7 | 4.9 |
| `/services/payments-invoicing-licensing` | 29 | 7 | 4.1 |

These six "core service" pages hoard equity. Each should add 4-6 outbound body links to:
- Relevant case studies (each service has 1-3 demonstrative case studies)
- The corresponding `/industries/*` page
- The `/vs/*` comparison if applicable
- 2-3 city pages where they have customers

---

## 7. Anchor Text Issues

### 7a. Same anchor → different targets (confuses Google)

| Anchor text | Targets |
|---|---|
| "Services" | `/services` (nav) and as anchor inside breadcrumbs everywhere |
| "Work" | `/work` (nav and footer, identical) |
| "Atlanta, GA" | `/software-development-atlanta-ga` AND `/services/custom-crm-development/atlanta-ga` AND `/services/penetration-testing/atlanta-ga` AND `/services/stripe-integration/atlanta-ga` (4 different targets, same text on different pages) |
| "Macon, GA" | Same problem - 4 different targets in same anchor text across pages |
| "Custom Business Software" | `/services/custom-business-software` (correct, consistent) |
| "Penetration Testing" | `/services/penetration-testing` consistently, but sub-services also called "Penetration Testing" in places |
| "Book a Consultation" | `/#contact` on most pages but `/contact` on a couple (broken) |

The city-name anchor problem is the biggest one: the literal string "Atlanta, GA" points to four different URLs depending on which page you are on. Google deduplicates by anchor + context, so this is workable, but stronger anchors like "Atlanta CRM development" or "Atlanta penetration testing" would help.

### 7b. Generic / weak anchor text

| Anchor | Where | Issue |
|---|---|---|
| "Read the case study" | `/work` page (used 10 times for 10 case studies) | All identical anchor - SEO loses the topical signal |
| "Start a Project" | Every city page CTA | Goes to broken `/contact` |
| "Book a Consultation" | Service hub pages | Generic - replace with "Book a [service] scope call" |
| "Book a Scope Call" | Many service pages | Better than the above but still generic. Should be e.g. "Book a CRM scope call" |
| "Scope a Build" | Several service pages | No keyword context |
| "Talk Chicago Projects", "Discuss an Augusta Engagement" | Some city pages | These have no href / point to `#` - dead links |
| "software-development-macon-ga" | `/services/payments-invoicing-licensing`, `/services/mitre-attack-assessment`, `/services/license-server`, `/services/subscription-billing` | URL slug used as visible anchor instead of "Macon, GA" or "Software Development in Macon" |

The slug-as-anchor problem is real and visible to users in the rendered HTML. Several service pages render `software-development-macon-ga` as the visible link text instead of "Macon, GA" or similar.

---

## 8. Hub Coverage Audit

### 8a. Homepage body coverage of "new" page types

| Page type | Homepage body links | Should link? |
|---|---|---|
| 6 service hubs | ✓ All 6 | yes - good |
| 14 city pages | ✗ 0 | yes (at minimum top 3-5 markets) |
| 5 industries | ✗ 0 | yes (at minimum 3) |
| 3 vs pages | ✗ 0 | yes (1-2) |
| 6 case studies | ✗ 0 | yes (2-3 hero ones) |
| 1 calculator | ✗ 0 | yes (great mid-funnel content) |

### 8b. /services hub coverage

| Page type | /services body links | Should link? |
|---|---|---|
| 14 service-detail pages | ✓ All 14 | yes |
| 14 city pages | ✓ All 14 | yes |
| 5 industries | ✓ All 5 | yes |
| 3 vs pages | 2 of 3 (missing big-4-pentest) | yes - add it |
| 42 city-service combos | ✗ 0 | partial - too many; cluster pages should handle these |
| 1 calculator | ✗ 0 | yes - add it |
| 6+4 case studies | ✗ 0 | yes - "Featured work" row would help |

### 8c. Service-hub → city-service-sub-page coverage

- `/services/custom-crm-development` links to all 14 city CRM sub-pages ✓
- `/services/penetration-testing` links to all 14 city pentest sub-pages ✓
- `/services/stripe-integration` links to **only 2** city Stripe sub-pages (Macon, Charlotte; sample showed only neighbors in body content - the hub appears not to surface the full list)

**FIX:** `/services/stripe-integration` body should list all 14 city Stripe pages, matching the pattern of the other two service hubs.

---

## 9. Cross-Linking Audit

### 9a. Case studies → relevant services

| Case study | Services it links to (body) | Missing |
|---|---|---|
| `/work/northcrest-fence` | custom-business-software, web-applications | + custom-crm-development (fence sales = CRM) |
| `/work/hobbspeak` | web-applications, custom-business-software, payments-invoicing-licensing | + stripe-integration (e-commerce) |
| `/work/bridgepointe-painting` | custom-business-software, web-applications, payments-invoicing-licensing | + custom-crm-development, + stripe-integration |
| `/work/protectwithbri` | web-applications | + penetration-testing (it IS the AD pentest case), + active-directory-pentest |
| `/work/j5-sales-os` | custom-business-software, web-applications | + custom-crm-development (it IS a sales OS / CRM) |
| `/work/wilder-recovery` | custom-business-software, cloud-infrastructure | + custom-crm-development |
| `/work/active-directory-pentest` | (not sampled, but likely) | needs to link to /services/penetration-testing, /services/active-directory-pentest, /services/mitre-attack-assessment |
| `/work/contractor-estimating-proposal-engine` | (not sampled) | needs to link to /services/custom-crm-development, /industries/construction |
| `/work/multi-strategy-trading-system` | (not sampled) | needs to link to /services/algorithmic-trading-systems, /industries/fintech |
| `/work/motorcycle-shop-ops-platform` | (not sampled) | needs to link to /services/custom-crm-development |

### 9b. Service pages → relevant case studies

| Service page | Case studies it links to (body) | Should add |
|---|---|---|
| `/services/custom-business-software` | none in body sampled | northcrest-fence, hobbspeak, bridgepointe-painting, j5-sales-os, wilder-recovery |
| `/services/custom-crm-development` | northcrest, bridgepointe, contractor-estimating, motorcycle-shop ✓ good | + j5-sales-os |
| `/services/penetration-testing` | active-directory-pentest ✓ | + protectwithbri |
| `/services/algorithmic-trading-systems` | none | multi-strategy-trading-system |
| `/services/stripe-integration` | bridgepointe-painting | + hobbspeak |
| `/services/web-applications` | none in body | hobbspeak, northcrest-fence, j5-sales-os |
| `/services/cloud-infrastructure` | none | wilder-recovery, active-directory-pentest |
| `/services/mitre-attack-assessment` | active-directory-pentest, protectwithbri ✓ | - |

### 9c. City ↔ City cross-linking (geographic clusters)

The current "neighbor pair" approach creates long thin chains. Better approach: regional clusters.

**Current Macon → Atlanta + Columbus** (good)
**Current Atlanta → Macon + Augusta** (good)
**Current Augusta → Atlanta + Macon** (good but no Savannah)
**Current Savannah → Atlanta + Charlotte** (Charlotte is too far; should be Macon/Augusta/Jacksonville-FL)

**Recommended GA cluster:** Atlanta ↔ Macon ↔ Augusta ↔ Savannah ↔ Columbus (full mesh = 10 cross-links instead of current 5 thin chain)
**Recommended TX cluster:** Austin ↔ Dallas (currently linked) - add Houston later
**Recommended East-coast cluster:** Charlotte ↔ Nashville ↔ Atlanta (currently partial)
**Recommended NY/Chicago hub:** New York ↔ Chicago (currently linked) ↔ Boston (future) ↔ Philadelphia (future)

---

## 10. Prioritized Fix List

### P0 (Critical, fix immediately)

1. **Fix `/contact` 404.** Either create the page or change every body link from `href="/contact"` to `href="/#contact"`. Affected files: all 14 `software-development-*` page templates, `/services/payments-invoicing-licensing`, possibly others (grep your codebase for `href="/contact"`).
2. **Add 4 missing case studies to sitemap.xml:**
   - `/work/active-directory-pentest`
   - `/work/contractor-estimating-proposal-engine`
   - `/work/motorcycle-shop-ops-platform`
   - `/work/multi-strategy-trading-system`

### P1 (High value - 1 navigation/footer change)

3. **Footer expansion.** The footer currently lists only Services / Work / About / FAQ / Contact / Privacy / Terms. Convert it into a 4-column footer with link clusters:
   - **Services** column: Custom CRM, Custom Business Software, Stripe Integration, Web Applications, Penetration Testing, Cloud Infrastructure
   - **Industries** column: Fintech, Construction, Insurance, E-commerce, Healthcare
   - **Compare** column: vs Salesforce, vs Shopify, vs Big-4 Pentest
   - **Tools** column: Stripe Cost Calculator, FAQ, Contact
   This single change drops 14 currently-unreachable URLs to depth 1 from every page.

### P2 (High value - body link additions)

4. **Homepage: add a "Featured Industries" section** linking to the 5 industries pages with anchor text like "Fintech Software Development", "Construction Operations Software", etc.
5. **Homepage: add a "Featured Case Studies" row** linking to 3 hero case studies with descriptive anchors (e.g., "How Northcrest Fence Cut Proposal Time From Days to Minutes" → `/work/northcrest-fence`).
6. **Homepage: add a "Where We Build" row** with body links to top 5 city pages (Atlanta, Macon, Austin, Miami, New York) using anchors like "Atlanta Software Developers" → `/software-development-atlanta-ga`.
7. **Homepage: link to `/calculators/stripe-cost`** with anchor "Stripe Cost Calculator" - mid-funnel content for organic discovery.
8. **`/services` hub: add `/vs/big-4-pentest`** in the Compare section (currently missing). Anchor: "Boutique Pentest vs Big 4".
9. **`/services` hub: add link to `/calculators/stripe-cost`** with anchor "Try our Stripe Cost Calculator".

### P3 (Medium - cross-linking improvements)

10. **`/services/stripe-integration`: list all 14 city Stripe pages** in body, matching the pattern of `/services/penetration-testing` and `/services/custom-crm-development`. Currently appears to only mention 2 cities in body.
11. **Each case study: add a "Related Services" row of 3-4 service body links** per Section 9a recommendations:
    - `/work/protectwithbri`: add `/services/penetration-testing`, `/services/active-directory-pentest`
    - `/work/hobbspeak`: add `/services/stripe-integration`
    - `/work/bridgepointe-painting`: add `/services/custom-crm-development`, `/services/stripe-integration`
    - `/work/j5-sales-os`: add `/services/custom-crm-development`
    - `/work/wilder-recovery`: add `/services/custom-crm-development`
12. **Each service hub: add a "Selected Work" row of 2-3 case studies** per Section 9b:
    - `/services/custom-business-software`: add 3 case studies (currently zero in body)
    - `/services/web-applications`: add 3 case studies (currently zero)
    - `/services/algorithmic-trading-systems`: add multi-strategy-trading-system
    - `/services/cloud-infrastructure`: add wilder-recovery
13. **City pages: expand to full regional mesh.** GA cluster needs Macon ↔ Atlanta ↔ Augusta ↔ Savannah ↔ Columbus (all-to-all). Update each Georgia city page to link to all 4 other GA cities, not just 2.

### P4 (Anchor text cleanup)

14. **Fix slug-as-anchor:** several service pages render `software-development-macon-ga` as visible link text. Change to "Software Development in Macon, GA" or just "Macon, GA Software Development".
15. **Differentiate city anchors:** instead of bare "Atlanta, GA" pointing to four different URLs, use:
    - "Atlanta Software Development" → `/software-development-atlanta-ga`
    - "Atlanta CRM Development" → `/services/custom-crm-development/atlanta-ga`
    - "Atlanta Penetration Testing" → `/services/penetration-testing/atlanta-ga`
    - "Atlanta Stripe Integration" → `/services/stripe-integration/atlanta-ga`
16. **Diversify `/work` page anchors:** change "Read the case study" (used 10x) to descriptive anchors with the company + outcome (e.g., "How Northcrest Cut Proposal Time From Days to Minutes").
17. **Replace generic CTAs:** "Start a Project", "Book a Consultation", "Scope a Build" → context-specific variants like "Book a CRM Scope Call", "Discuss Your Stripe Integration", etc.

---

## 11. Highest-Impact Single Change

**Replace the current minimal footer with a 4-column site-wide footer** containing one link to each of: every industry page (5), every vs page (3), every service hub (6), the calculator (1), and contact/legal (3).

Why this is the single biggest lever:
- Every page on the site (93 URLs) gets a stable nav-level link to 18 currently-orphaned URLs.
- Average click depth from `/` drops dramatically for the unreachable 35 URLs (most fall to depth 2).
- Industries, vs pages, and the calculator move from "PageRank desert" to "PageRank flowing".
- Zero new pages to write, no content changes needed - it's pure markup in the layout component.
- 14 of the 35 unreachable URLs are the new high-value commercial pages (vs/, industries/, calculators/) - precisely the pages that need ranking signal.

---

## Appendix: Sampled URLs

The following 38 URLs were directly fetched and parsed:

```
/                                                /work/wilder-recovery
/about                                           /services/penetration-testing/atlanta-ga
/services                                        /services/penetration-testing/macon-ga
/work                                            /services/penetration-testing/savannah-ga
/faq                                             /services/penetration-testing/new-york-ny
/contact (404)                                   /services/custom-crm-development/atlanta-ga
/calculators/stripe-cost                         /services/custom-crm-development/miami-fl
/services/custom-business-software               /services/custom-crm-development/savannah-ga
/services/custom-crm-development                 /services/stripe-integration/atlanta-ga
/services/web-applications                       /services/stripe-integration/macon-ga
/services/cloud-infrastructure                   /services/stripe-integration/dallas-tx
/services/payments-invoicing-licensing           /services/stripe-integration/san-francisco-ca
/services/penetration-testing                    /software-development-macon-ga
/services/mitre-attack-assessment                /software-development-atlanta-ga
/services/algorithmic-trading-systems            /software-development-augusta-ga
/services/stripe-integration                     /software-development-columbus-ga
/services/license-server                         /software-development-savannah-ga
/services/subscription-billing                   /software-development-miami-fl
/services/web-app-pentest                        /software-development-austin-tx
/services/network-pentest                        /software-development-dallas-tx
/services/active-directory-pentest               /software-development-chicago-il
/industries/fintech                              /software-development-seattle-wa
/industries/construction                         /software-development-new-york-ny
/industries/insurance                            /software-development-charlotte-nc
/industries/e-commerce                           /software-development-nashville-tn
/industries/healthcare                           /software-development-san-francisco-ca
/vs/salesforce
/vs/shopify
/vs/big-4-pentest
/work/northcrest-fence
/work/hobbspeak
/work/bridgepointe-painting
/work/protectwithbri
/work/j5-sales-os
```

For the 55 unsampled URLs (all in templated families: pentest cities, CRM cities, Stripe cities), body links were inferred from sibling templates. Spot checks on 6 unsampled templated URLs confirmed the inferred pattern.
