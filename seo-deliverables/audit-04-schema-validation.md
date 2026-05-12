# Audit 04 — JSON-LD Schema Validation

**Site:** quantlabusa.dev
**Pages sampled:** 10 representative URLs
**Total JSON-LD blocks audited:** 45
**Method:** Raw HTML fetched via curl, regex-extracted `<script type="application/ld+json">` blocks, JSON-parsed and validated against schema.org spec.
**Date:** 2026-05-12

---

## 1. Headline Results

| Metric | Count |
|---|---|
| JSON-LD blocks audited | 45 |
| Blocks that parse as valid JSON | 45 / 45 (100%) |
| Critical issues | 3 |
| Warnings | 10 |
| Info-level notes | 4 |
| Pages with 100% clean schema | 4 / 10 (Homepage, Services Hub, FAQ, Pentest hub — only the `contactPoint` warning) |

**Bottom line:** Schema implementation is broadly excellent — every block parses, `@context` is correct everywhere, FAQPage/BreadcrumbList/Article shapes are all well-formed, the canonical Organization + WebSite + Person triplet ships on every URL, and there are zero placeholder strings (no `REPLACE_WITH`, no `TODO`). Three Service blocks point at the wrong Organization `@id` (`#org` vs `#organization`), one Article has a future-dated `dateModified`, and the Organization is missing a formal `contactPoint` property even though raw `telephone` / `email` are populated.

---

## 2. Schema-by-Page Inventory

| Page | URL | Blocks | Types present |
|---|---|---|---|
| Homepage | `/` | 3 | Organization+LocalBusiness+ProfessionalService, Person, WebSite |
| Services Hub | `/services` | 3 | Organization+LB+PS, Person, WebSite |
| Pentest hub | `/services/penetration-testing` | 5 | Org+LB+PS, Person, WebSite, Service, FAQPage |
| Pentest Atlanta | `/services/penetration-testing/atlanta-ga` | 6 | Org+LB+PS, Person, WebSite, Service, BreadcrumbList, FAQPage |
| SD Atlanta | `/software-development-atlanta-ga` | 4 | Org+LB+PS, Person, WebSite, Service |
| Hobbspeak case study | `/work/hobbspeak` | 5 | Org+LB+PS, Person, WebSite, Article, BreadcrumbList |
| FAQ | `/faq` | 4 | Org+LB+PS, Person, WebSite, FAQPage (31 Qs) |
| Stripe calculator | `/calculators/stripe-cost` | 5 | Org+LB+PS, Person, WebSite, WebApplication, FAQPage |
| Fintech industry | `/industries/fintech` | 5 | Org+LB+PS, Person, WebSite, Service, FAQPage |
| Salesforce VS | `/vs/salesforce` | 5 | Org+LB+PS, Person, WebSite, Service, FAQPage |

The base "Org + Person + WebSite" triplet ships on every page audited. Page-specific overlays (Service, FAQPage, Article, BreadcrumbList, WebApplication) are correctly scoped to their page type. SD Atlanta is the only city landing page missing a `BreadcrumbList` block (Pentest Atlanta has one).

---

## 3. Validation Results — Critical / Warning / Info

### Critical (3)

#### C1 — Broken Organization `@id` references (3 Service blocks)

The canonical Organization block is registered as `@id: "https://quantlabusa.dev/#organization"` on every page. However, three Service blocks reference a **different ID that does not exist anywhere on the site**: `https://quantlabusa.dev/#org`.

| Page | Block | Bad reference |
|---|---|---|
| `/services/penetration-testing/atlanta-ga` | Service (blk 4) | `"provider": {"@id": "https://quantlabusa.dev/#org"}` |
| `/software-development-atlanta-ga` | Service (blk 4) | `"provider": {"@id": "https://quantlabusa.dev/#org"}` |
| `/vs/salesforce` | Service (blk 4) | `"provider": {"@type": "Organization", "@id": "https://quantlabusa.dev/#org", ...}` |

**Impact:** Google cannot stitch these Service entities to the Organization entity → Service rich-result eligibility weakened, Knowledge Graph cannot consolidate signals, E-E-A-T transfer from Org → Service is broken on these three URLs.

**Severity:** Critical (silent — no validator throws an error, but the entity graph is fragmented).

**Recommended fix:**
```jsonc
// pentest-atl, sd-atl, salesforce service blocks
"provider": { "@id": "https://quantlabusa.dev/#organization" }
```
Replace every `"#org"` reference with `"#organization"` (or, conversely, change the canonical Organization `@id` to `#org` everywhere — but `#organization` is the more idiomatic value and is already used 30+ times across the site).

---

#### C2 — Brand-name mismatch in inline provider objects

The canonical Organization carries `name: "QUANT LAB USA"`. However, every inline `provider` / `publisher` object that does *not* use a pure `@id` reference re-declares the org with a **different name**:

```jsonc
"provider": {
  "@type": "Organization",
  "name": "QuantLab Software Solutions",   // ← does not match canonical
  "url": "https://quantlabusa.dev",
  "@id": "https://quantlabusa.dev/#organization"
}
```

Affected pages: Pentest hub, Fintech, Stripe Calculator, Salesforce VS, Hobbspeak Article (publisher).

**Impact:** Two competing names ("QUANT LAB USA" vs "QuantLab Software Solutions") map to the same `@id`. Google may treat this as conflicting data and discount both, or it may pick one arbitrarily. Inconsistent brand name = harder Knowledge Graph consolidation, weaker sitelinks branding, possible Knowledge Panel suppression.

**Severity:** Critical for branding/E-E-A-T.

**Recommended fix:** Either (a) drop the duplicate `name`/`url`/`@type` fields from inline references and use **only** `{"@id": "https://quantlabusa.dev/#organization"}`, OR (b) standardize the inline name to `"QUANT LAB USA"` to match the canonical Organization. Option (a) is cleaner.

```jsonc
"provider": { "@id": "https://quantlabusa.dev/#organization" }
```

---

#### C3 — Future-dated `dateModified` on Hobbspeak Article

```jsonc
// /work/hobbspeak
"datePublished": "2026-01-01",
"dateModified":  "2026-12-31"   // ← future date, 7 months ahead
```

**Impact:** Today is 2026-05-12. A `dateModified` of 2026-12-31 is in the future — Google ignores future dates and may downgrade trust in date signals on this page. Article rich-result eligibility could be suppressed. Also affects "Last updated" snippet display in SERPs.

**Severity:** Critical (visible-to-Google data falsification).

**Recommended fix:**
```jsonc
"dateModified": "2026-05-12"  // or whatever the actual last edit date is
```
Wire this to a build-time variable so it reflects the real last-edited timestamp of the MDX/JSON source.

---

### Warnings (10)

#### W1 — `contactPoint` missing on Organization (10 pages, every page audited)

The Organization block ships `telephone`, `email`, `address`, `openingHoursSpecification`, and `areaServed` — but **not** a formal `contactPoint` array. Google's Organization schema spec lists `contactPoint` as a recommended way to express phone+contactType pairs, and it powers the "Contact" surface in Knowledge Panel and some local SERP enrichments.

**Severity:** Warning (telephone is already top-level, so the data is reachable — but formal `contactPoint` is the conventional shape).

**Recommended fix (add to Organization block, all pages):**
```json
"contactPoint": [
  {
    "@type": "ContactPoint",
    "telephone": "+1-770-652-1282",
    "contactType": "customer service",
    "email": "beltz@quantlabusa.dev",
    "areaServed": "US",
    "availableLanguage": ["English"]
  },
  {
    "@type": "ContactPoint",
    "telephone": "+1-770-652-1282",
    "contactType": "sales",
    "email": "beltz@quantlabusa.dev",
    "availableLanguage": ["English"]
  }
]
```

---

### Info (4)

#### I1 — SD Atlanta missing BreadcrumbList

Pentest Atlanta has a 4-step BreadcrumbList. SD Atlanta has none. Recommend adding one for consistency and to enable breadcrumb-trail SERP display.

#### I2 — FAQ page's FAQPage block re-declares publisher inline

`/faq` block 4 ships a duplicate publisher Organization object (no `@id`, no `contactPoint`) instead of referencing the canonical via `@id`. Same kind of fragmentation as C2 but at lower stakes since the inline name here ("QUANT LAB USA") matches the canonical.

#### I3 — `BreadcrumbList` lacks `@id`

Neither breadcrumb block carries a self-`@id`. Not required, but a `@id` like `https://quantlabusa.dev/services/penetration-testing/atlanta-ga#breadcrumb` enables clean entity referencing.

#### I4 — Hobbspeak Article publisher logo URL inconsistency

The canonical Organization uses `logo: https://quantlabusa.dev/logo-transparent.png` (with width/height). The inline publisher inside the Article uses `logo: https://quantlabusa.dev/logo.png` (no dimensions). Recommend matching the canonical exactly (or, better, dropping the inline duplicate and using `@id` reference only).

---

## 4. Rich-Result Eligibility per Page

Based on schema types present and validation status, the following are the Google rich-result types each page **should** be eligible for. "Lost" means the eligibility is at risk because of a critical issue above.

| Page | Eligible rich results | At risk? |
|---|---|---|
| Homepage | Knowledge Panel (Org), Sitelinks Search Box (WebSite SearchAction present) | OK |
| Services Hub | Knowledge Panel reinforcement | OK |
| Pentest hub | Service entity, FAQ rich result (5 Qs) | OK |
| Pentest Atlanta | Service entity, **Breadcrumbs**, FAQ rich result (3 Qs), local pack signal | **At risk — C1 broken Org @id** |
| SD Atlanta | Service entity, local pack signal | **At risk — C1 broken Org @id; I1 no breadcrumbs** |
| Hobbspeak | Article rich result (Top Stories candidate), **Breadcrumbs** | **At risk — C3 future dateModified** |
| FAQ | FAQ rich result (31 Qs — biggest FAQ surface on the site) | OK |
| Stripe Calculator | SoftwareApp / WebApp rich result, FAQ rich result (4 Qs) | OK (but see C2 brand mismatch) |
| Fintech | Service entity, FAQ rich result (4 Qs) | OK (C2 brand mismatch) |
| Salesforce VS | Service entity, FAQ rich result (4 Qs) | **At risk — C1 + C2** |

### Important context on FAQ rich results

Google substantially **deprecated FAQ rich results in August 2023** (now mostly shown only for government / authoritative health sites). Sites still mark up FAQPage because (a) it's still consumed by Google's structured-data pipeline and AI Overviews, (b) Bing and other engines still honor it, and (c) it costs nothing. Continue shipping FAQPage but don't expect SERP-side FAQ accordions for most queries — the AI Overview / People Also Ask surface is the realistic upside.

### Rich-result types we are NOT currently eligible for

| Type | Reason | How to unlock |
|---|---|---|
| **Review / AggregateRating snippet** | No `Review` or `aggregateRating` properties anywhere | Collect 3+ verified reviews, ship `aggregateRating` on Org or Service |
| **Product / Offer rich result** | No `Product` schema, `Offer` only on free Stripe calc | Not applicable for services biz |
| **HowTo rich result** | No `HowTo` schema anywhere | Add `HowTo` to step-by-step technical guides if/when published |
| **Event rich result** | No `Event` schema | Mark up any future webinars/talks |
| **VideoObject rich result** | No `VideoObject` schema, even on pages that may carry video | Add `VideoObject` to any case study or service page that embeds Loom/YouTube |
| **JobPosting** | No `JobPosting` schema | Not relevant unless hiring |
| **Course** | No `Course` schema | Not relevant |
| **Recipe / Movie / Book** | N/A | N/A |
| **Speakable** | No `speakable` properties on Article | Add `speakable` to Hobbspeak (and future case studies) for voice/audio surfaces |

---

## 5. Prioritized Fix List

| Priority | Severity | Page(s) | Fix | Effort |
|---|---|---|---|---|
| **P0** | Critical | Hobbspeak | Set `dateModified` to a real ISO date ≤ today | 5 min |
| **P0** | Critical | Pentest Atlanta, SD Atlanta, Salesforce VS | Change `#org` → `#organization` in Service `provider` references | 10 min (3 files) |
| **P1** | Critical | All Service / Article / WebApp blocks with inline provider/publisher | Replace inline `{@type, name, url, @id}` with `{"@id": "https://quantlabusa.dev/#organization"}` only | 30 min |
| **P1** | Warning | All pages (Org block) | Add `contactPoint` array (customer service + sales) | 15 min — single source change |
| **P2** | Info | SD Atlanta | Add `BreadcrumbList` block matching Pentest Atlanta pattern | 10 min |
| **P2** | Info | FAQ page | Replace inline publisher with `@id` reference | 5 min |
| **P3** | Info | Breadcrumb blocks | Add self-`@id` for breadcrumb entity | 5 min |
| **P3** | Info | Hobbspeak Article publisher | Drop inline duplicate, use `@id` reference | 2 min |

### Suggested file locations to fix (worth checking)

These are generated from JSX/MDX or a shared `<JsonLd>` component — the fixes are likely centralized rather than per-page. Look for:
- A shared org/website JSON-LD component that renders the base triplet on every page → fix `contactPoint` + brand-name consistency in one place
- A `Service` schema helper or per-page MDX frontmatter → fix `#org` → `#organization`
- Article frontmatter for case studies → fix `dateModified`

---

## 6. Validation Methodology Notes

- **Google Rich Results Test API** is not WebFetch-accessible (requires interactive token), so validation was done manually against schema.org spec + Google's Search Central structured-data documentation requirements.
- 45 / 45 blocks passed `json.loads` cleanly — no syntax errors, no malformed Unicode, no orphan commas.
- All `@context` values are `"https://schema.org"` (correct HTTPS form, never the deprecated `http://schema.org`).
- All non-Article date fields are ISO 8601 compliant. Only `dateModified` on Hobbspeak is problematic (future date, not a format error).
- All image / logo URLs are absolute (no relative paths anywhere).
- Zero `REPLACE_WITH`, `TODO`, `FIXME`, or placeholder strings found anywhere in the 45 blocks.
- Telephone numbers consistently formatted: `+17706521282` (E.164). Recommendation: convert to the more human-readable `+1-770-652-1282` inside `contactPoint` per Google's preference for dashed E.164 in ContactPoint.

---

## 7. Quick Wins (Copy-Paste Patches)

### Patch 1 — Service `provider` references (3 pages)
**File hint:** Likely `app/services/penetration-testing/atlanta-ga/page.tsx`, `app/software-development-atlanta-ga/page.tsx`, `app/vs/salesforce/page.tsx` (or whatever generates these Service blocks).

Find:
```json
"@id": "https://quantlabusa.dev/#org"
```
Replace with:
```json
"@id": "https://quantlabusa.dev/#organization"
```

### Patch 2 — Hobbspeak dateModified
Find:
```json
"dateModified": "2026-12-31"
```
Replace with the actual edit date, e.g.:
```json
"dateModified": "2026-05-12"
```

### Patch 3 — Organization contactPoint (canonical Organization block)
Add to the Organization JSON-LD (wherever the shared Org block is generated):
```json
"contactPoint": [
  {
    "@type": "ContactPoint",
    "telephone": "+1-770-652-1282",
    "contactType": "customer service",
    "email": "beltz@quantlabusa.dev",
    "areaServed": "US",
    "availableLanguage": ["English"]
  }
]
```
