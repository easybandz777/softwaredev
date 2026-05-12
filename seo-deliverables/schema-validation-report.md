# Schema (JSON-LD) Validation Report

**Site:** `https://quantlabusa.dev`
**Audit date:** 2026-05-12
**URLs audited:** 34 (out of 177 live URLs — top representative set covering every template family)
**Audit type:** structural validation (no Google Rich Results API call — manual schema.org rules)

---

## Headline Numbers

| Metric | Value |
|---|---|
| URLs fetched (HTTP 200) | 34 / 34 |
| URLs that failed to fetch | 0 |
| Total `<script type="application/ld+json">` blocks parsed | 186 |
| Schema objects validated (including `@graph` children) | 192 |
| Blocks that failed JSON parsing | 0 |
| Distinct `@type` values found | 17 |
| Pages with ERROR-severity issues | 2 of 34 (5.9%) |
| ERROR-severity issues total | 4 |
| INFO-severity issues total | 70 |

**Bottom line:** Schema coverage is broad and structurally healthy. Every page emits 3-7 JSON-LD blocks, every block is valid JSON, every Article has the Google-required fields, every BreadcrumbList has correct sequential positions, every FAQ has Question/Answer pairs that match Google's spec. The only real defects are two city-page Service blocks that reference a non-existent Organization `@id`, plus three brand-consistency issues that hurt entity recognition.

---

## Distinct `@type` Coverage

| `@type` | Pages emitting |
|---|---:|
| Organization | 37 |
| LocalBusiness | 36 |
| Person | 36 |
| ProfessionalService | 34 |
| WebSite | 34 |
| BreadcrumbList | 24 |
| FAQPage | 24 |
| WebPage | 12 |
| Service | 11 |
| Article | 3 |
| WebApplication | 3 |
| AboutPage | 1 |
| HowTo | 1 |
| Product | 1 |
| ItemList | 1 |
| DefinedTerm | 1 |
| CollectionPage | 1 |

A multi-typed Organization/LocalBusiness/ProfessionalService block is correctly emitted on every page via the shared `organizationSchema()` generator. Every page also chains a `Person` (William Beltz) and `WebSite` block — solid foundation for Knowledge Graph linkage.

---

## ERROR-Severity Findings (must fix)

### 1. Broken `@id` reference on city pages — `#org` should be `#organization`

The canonical `Organization` node is defined site-wide with `@id = https://quantlabusa.dev/#organization` (see `src/lib/schemas/organization.ts:2`). Two city pages reference a different ID, `#org`, that is not defined anywhere on the page:

- `/software-development-atlanta-ga` (block index 4, `Service`)
  - `provider: { "@id": "https://quantlabusa.dev/#org" }` — unresolved
  - As a consequence, `Service.provider.name` is also missing (no inline fallback)
  - Source: `src/app/software-development-atlanta-ga/page.tsx:55`
- `/software-development-macon-ga` (block index 4, `Service`)
  - Same defect, same line in `src/app/software-development-macon-ga/page.tsx`

**Impact:** Google's parser cannot link the Service to the Organization. The Service block will not contribute to the Organization entity in the Knowledge Graph, and the page may not earn the "Service" rich snippet eligibility.

**Fix:** change both city pages' `provider` to `{ "@id": "https://quantlabusa.dev/#organization", "@type": "Organization", "name": "QUANT LAB USA" }` — or better, import `ORGANIZATION_ID` from `src/lib/schemas/organization.ts` and use it instead of the hardcoded string. Note `src/lib/schemas/service.ts:40` already uses `ORGANIZATION_ID` correctly, so the bug is only in the per-page inline schemas, not the shared generator.

### 2. The `#org` ID typo is used on 10 pages total (mitigated on 8 of them)

`grep` shows 10 pages emit `https://quantlabusa.dev/#org` in their inline schema, but only 2 (the city pages above) hit a hard failure because the other 8 also include an inline `name` and `url` on the same node, so Google can recover. The mitigated pages are:

- `/pricing`
- `/resources`
- `/resources/build-vs-buy-playbook`
- `/services/ai-integration-services`
- `/services/custom-crm-development`
- `/services/mobile-app-development`
- `/services/stripe-integration`
- `/vs/salesforce`

These work today but should still be cleaned up — they create *two* Organization nodes per page in Google's eyes (one at `#organization`, one at `#org`) which weakens entity consolidation.

---

## Brand-Consistency Findings (entity-graph quality)

These are not technical JSON-LD errors but they fragment the brand entity across what Google sees as multiple distinct organizations.

### 3. Three Organization name variants in use

| Name used | Where |
|---|---|
| `QUANT LAB USA` | 34 pages — emitted by `organizationSchema()` (canonical) |
| `QUANT LAB USA INC` | 2 pages — used as Article `publisher.name` on both blog posts |
| `QuantLab Software Solutions` | 11 pages — used as `Service.provider.name` on all Service blocks AND as Article `publisher.name` on `/work/northcrest-fence` |

**Fix:** standardize on one legal name (the existing canonical `QUANT LAB USA` from `organizationSchema()`). Replace any inline `name: "QuantLab Software Solutions"` and `name: "QUANT LAB USA INC"` with references to the canonical Organization, OR update `organization.ts` to use the legal-entity name `QUANT LAB USA INC` and use `alternateName` for the casual form. Pick one and use it everywhere.

### 4. Author name inconsistent between blog posts

- `/blog/custom-crm-development-guide` — `author.name: "Bill Beltz"`
- `/blog/best-custom-software-development-companies-atlanta-2026` — `author.name: "William Beltz"`
- All 36 `Person` nodes elsewhere on the site use `William Beltz`

**Fix:** use `William Beltz` consistently. The site already defines `personSchema()` at `src/lib/schemas/person.ts` and exposes `PERSON_ID`. Both blog posts should reference that canonical Person via `@id` instead of inlining their own.

---

## INFO-Severity Notes (not bugs, design choices)

### 5. `LocalBusiness.address.streetAddress` is absent on every page (70 instances)

The address block on every page is:

```json
{
  "@type": "PostalAddress",
  "addressLocality": "Macon",
  "addressRegion": "GA",
  "postalCode": "31201",
  "addressCountry": "US"
}
```

Google's `LocalBusiness` documentation lists `streetAddress` as **recommended**, not strictly required. The block also includes valid `geo` coordinates and `areaServed`, which satisfy the spirit of the spec. If QUANT LAB USA does not operate from a public street address (e.g., remote-first or registered-agent address), leaving this off is reasonable. If a street is willing to be published, add it to `organizationSchema()` for stronger Local Pack eligibility.

---

## Per-URL Summary

| URL | Blocks | Types covered | Errors | Info |
|---|---:|---|---:|---:|
| `/` | 3 | Organization, LocalBusiness, ProfessionalService, Person, WebSite | 0 | 2 |
| `/about` | 4 | + AboutPage | 0 | 2 |
| `/about/team` | 4 | + BreadcrumbList | 0 | 2 |
| `/methodology` | 4 | + BreadcrumbList, HowTo | 0 | 2 |
| `/security` | 4 | + BreadcrumbList, WebPage | 0 | 2 |
| `/pricing` | 6 | + BreadcrumbList, FAQPage, Product | 0 | 2 |
| `/reviews` | 6 | + BreadcrumbList, WebPage | 0 | 2 |
| `/blog/custom-crm-development-guide` | 6 | + Article, BreadcrumbList, FAQPage | 0 | 2 |
| `/blog/best-custom-software-development-companies-atlanta-2026` | 6 | + Article, BreadcrumbList, FAQPage | 0 | 2 |
| `/services/custom-crm-development` | 5 | + Service, BreadcrumbList, FAQPage | 0 | 2 |
| `/services/penetration-testing` | 5 | + Service, BreadcrumbList, FAQPage | 0 | 2 |
| `/services/stripe-integration` | 5 | + Service, BreadcrumbList, FAQPage | 0 | 2 |
| `/services/mobile-app-development` | 6 | + Service, BreadcrumbList, FAQPage, WebApplication | 0 | 2 |
| `/services/ai-integration-services` | 6 | + Service, BreadcrumbList, FAQPage, WebApplication | 0 | 2 |
| `/software-development-atlanta-ga` | 6 | + Service, BreadcrumbList, FAQPage, WebPage | **2** | 2 |
| `/software-development-macon-ga` | 6 | + Service, BreadcrumbList, FAQPage, WebPage | **2** | 2 |
| `/vs/salesforce` | 5 | + Service, BreadcrumbList, FAQPage | 0 | 2 |
| `/vs/hubspot` | 6 | + BreadcrumbList, FAQPage, WebPage | 0 | 2 |
| `/vs/toptal` | 6 | + BreadcrumbList, FAQPage, WebPage | 0 | 2 |
| `/vs/upwork` | 6 | + BreadcrumbList, FAQPage, WebPage | 0 | 2 |
| `/vs/webflow` | 6 | + BreadcrumbList, FAQPage, WebPage | 0 | 2 |
| `/vs/wordpress` | 6 | + BreadcrumbList, FAQPage, WebPage | 0 | 2 |
| `/industries/fintech` | 7 | + Service, BreadcrumbList, FAQPage, WebPage | 0 | 2 |
| `/industries/healthcare` | 7 | + Service, BreadcrumbList, FAQPage, WebPage | 0 | 2 |
| `/industries/saas` | 7 | + Service, BreadcrumbList, FAQPage, WebPage | 0 | 2 |
| `/calculators/stripe-cost` | 5 | + BreadcrumbList, FAQPage, WebApplication | 0 | 2 |
| `/calculators/crm-roi` | 6 | + BreadcrumbList, FAQPage, WebApplication | 0 | 2 |
| `/calculators/pentest-cost` | 6 | + BreadcrumbList, FAQPage, WebApplication | 0 | 2 |
| `/work` | 4 | + BreadcrumbList, CollectionPage | 0 | 2 |
| `/work/northcrest-fence` | 5 | + Article, BreadcrumbList, FAQPage | 0 | 2 |
| `/glossary` | 5 | + BreadcrumbList, CollectionPage (ItemList) | 0 | 2 |
| `/glossary/what-is-an-api` | 6 | + BreadcrumbList, DefinedTerm | 0 | 2 |
| `/resources` | 5 | + BreadcrumbList, ItemList | 0 | 2 |
| `/resources/build-vs-buy-playbook` | 6 | + BreadcrumbList, FAQPage | 0 | 2 |

(Pages flagged in bold have ERROR-severity issues. The "Info: 2" count on every row is the same `streetAddress` recommendation triggering on the two `LocalBusiness`-typed blocks per page — see Finding 5.)

---

## Sitewide Patterns

**Strengths**
- Every page emits a multi-typed Organization/LocalBusiness/ProfessionalService block with full address (minus street), telephone, geo, founder, sameAs, contactPoint, and areaServed. This is well above the rich-snippet baseline.
- `BreadcrumbList` blocks are correctly emitted with sequential `position` values and resolvable `item` URLs.
- `FAQPage` blocks correctly use the `Question` → `acceptedAnswer` → `Answer.text` pattern Google requires.
- `Article` blocks include `image`, `datePublished`, `dateModified`, `author`, `publisher`, `publisher.logo`, `mainEntityOfPage` — all four Google-required fields plus three recommended ones.
- Every `@id` defined by the shared generators is consistent and well-formed.

**Weaknesses**
- Some pages define inline schema in addition to (or instead of) using shared generators, leading to `#org` typos and name variants. The hand-rolled blocks are where every defect found in this audit lives — the shared generators are clean.

---

## Top 3 Recommendations (prioritized)

1. **Fix the city-page `#org` typo (highest impact, lowest effort).** Two pages have a hard-broken `Service.provider` reference. Replace the literal `"https://quantlabusa.dev/#org"` with `ORGANIZATION_ID` (imported from `src/lib/schemas/organization.ts`) in both `src/app/software-development-atlanta-ga/page.tsx:55` and `src/app/software-development-macon-ga/page.tsx`. While there, audit the other 8 pages that contain the `#org` typo and standardize.

2. **Consolidate to one Organization name everywhere.** Pick `QUANT LAB USA INC` (the legal entity name in your memory) or keep `QUANT LAB USA` — but use the same string in every `name` and `publisher.name` field. Today three variants are in use, which Google will see as three different organizations. Easiest path: have every page's Service blocks and Article publisher blocks reference the canonical `Organization` via `@id` only (with `@type: Organization`), and let the shared generator be the single source of truth for the `name` value.

3. **Reference the canonical Person via `@id` in Article author fields.** The `Bill Beltz` vs `William Beltz` split in two blog posts will weaken author entity recognition for any future EEAT signals. Both Articles should set `author: { "@id": PERSON_ID, "@type": "Person" }` and rely on the existing `personSchema()` block on the same page to supply the name and bio.

Bonus (optional): if QUANT LAB USA has any willingness to publish a street address, adding it to `organizationSchema()` will move the business closer to Local Pack eligibility — that's the only "recommended" field missing across the entire audit.

---

## Methodology

- 34 representative URLs fetched with a 20s timeout.
- All `<script type="application/ld+json">` blocks extracted via regex.
- Each block JSON-parsed (100% success rate).
- For each schema object (top-level or inside `@graph`), checked: `@context` set to `schema.org`, `@type` present, required fields per type, no `null` / literal `"undefined"` values, internal `@id` references resolvable to a node defined on the same page.
- Severity: ERROR = breaks Google's rich-result eligibility or entity linkage. INFO = recommended-only fields per Google docs.
- No external HTTP calls to Google's Rich Results API (per scope).

Raw extracted JSON-LD blocks and full validator output preserved at `/tmp/jsonld/` for follow-up inspection.
