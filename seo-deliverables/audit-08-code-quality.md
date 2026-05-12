# Code Quality Audit — 56 New SEO Pages

**Scope**: Pages added in commits `30efab1` and `7b40d60`. Stack: Next.js 16.1.6, React 19, TypeScript 5, Tailwind, App Router.
**Audit date**: 2026-05-12
**Files reviewed**: 14 representative files (out of ~70 new/modified)

---

## 1. Per-File Findings

| File | Lines | TypeScript | React/Next | Duplication | Dead Code | Performance | Maintainability | Severity |
|---|---|---|---|---|---|---|---|---|
| `src/app/software-development-atlanta-ga/page.tsx` | 207 | clean | server component, no client hooks — correct | **HIGH** — full file structure copy-pasted across 14 city pages; nearby-cities link arrays hardcoded inline | Hardcoded URL `https://quantlabusa.dev/...` 3x in metadata; phone number hardcoded in CTA copy | OK (server component, statically prerendered) | "AtlantaLandingPage" naming inconsistent vs `software-development-atlanta-ga` slug; no shared `CityHero`/`CityFAQ` components | P1 |
| `src/app/software-development-augusta-ga/page.tsx` | 207 | clean | same as Atlanta | **HIGH** — duplicates Atlanta page structure with content swaps; differs only in `services`/`faqs` arrays and accent color | hardcoded URLs, hardcoded phone | OK | same | P1 |
| `src/app/services/penetration-testing/[city]/page.tsx` | 843 | clean — params correctly typed as `Promise<{city:string}>`, awaited; `dynamicParams = false` set; `Record<string, CityData>` typed; FAQ/NearbyService extracted to types | server component, `generateStaticParams`/`generateMetadata` correctly async, returns shape ✅ | **VERY HIGH** — 14 city-data blocks inline (~830 of 843 lines is data); FAQ/Service/Breadcrumb JSON-LD generated inline; `siblingCities` is declared but never used | unused `siblingCities` field on every city record | OK; SSG-friendly; ~600 lines of static JSON in source | **file >500 lines**; should split CITY data into `src/lib/pentest-cities.ts` | P1 |
| `src/app/services/custom-crm-development/page.tsx` | 347 | clean — local `crmCities` typed | server component, correct | **HIGH** — `crmCities` array duplicated near-verbatim in `services/stripe-integration/page.tsx` and `services/penetration-testing/page.tsx`; FAQ items duplicated inline AND inside `faqSchema` (two source-of-truth copies of 5 Q&A) | none significant | OK | duplicated FAQ data is a maintenance risk; extract to shared const | P1 |
| `src/app/services/custom-crm-development/[city]/page.tsx` | 665 | clean | server component, params correct | **HIGH** — same structure as pentest [city] route; same data-inlined-in-page pattern | none | OK | file >500 lines; same extract-to-lib recommendation | P1 |
| `src/app/services/stripe-integration/[city]/page.tsx` | 905 | clean | server component, params correct | **HIGH** — same shape as pentest [city]; types redefined locally (`CityConfig` vs `CityData` vs `CityConfig`) — 3 incompatible names for same concept | none | OK | file >500 lines; **largest single file in the new build** | P1 |
| `src/app/calculators/stripe-cost/StripeCalculator.tsx` | 620 | clean — types `ExistingSystem`/`TaxHandling`/`Timeline` are nice narrow unions; calculator output typed; uses `as const` correctly for tuple toggles | client component (`"use client"`) — correct for form state; `useMemo` used appropriately | low | **`/api/leads` endpoint does not exist** — POST is intentionally stubbed with two `console.log` lines and TODO comment (lines 249-267) | OK | file >500 lines; calculator logic and form should split (e.g., `calculate.ts` + `LeadCaptureForm.tsx` + `StripeCalculator.tsx`) | **P0** — broken lead capture (UX shows success but data is dropped) |
| `src/app/calculators/stripe-cost/page.tsx` | 258 | clean | server wrapper for client widget — correct | low — FAQ data duplicated between `faqSchema` and JSX | none | OK | OK | P2 |
| `src/app/faq/page.tsx` | 112 | clean | server component, uses `faqCategories.flatMap` for schema generation — single source of truth ✅ | low — FAQ JSON-LD generation pattern is good (compare to per-page duplication) | none | OK | **best-in-class pattern** — should be the model for all FAQ-bearing pages | — |
| `src/app/faq/faq-data.ts` | 166 | clean — interfaces exported | n/a — data module | n/a — this IS the shared FAQ store | none | n/a | clean | — |
| `src/app/faq/FAQAccordion.tsx` | 73 | clean | client component — correct (`useState` for open/close) | low | uses `key={idx}` array-index keys in `cat.questions.map((qa, idx)` — works because list is stable, but `key={qa.q}` would be more idiomatic | OK — `framer-motion` already used elsewhere | clean | P2 |
| `src/lib/case-studies.ts` | 589 | clean — JSDoc on every exported field ✅ | n/a | n/a — IS the shared store | DRAFT client quotes left in production data with `TODO(william)` comments (lines 111, 184, 247, 307, 371, 440) — flag for triage before launch | n/a | clean — the gold-standard pattern for a content-data module | P0 (review-content) |
| `src/app/sitemap.ts` | 183 | clean | server route, returns `MetadataRoute.Sitemap` — correct | **HIGH** — `citySlugs`, `serviceSlugs`, `industrySlugs`, `versusSlugs`, `caseStudySlugs` are all also defined inside their respective page files; the sitemap is now a 4th place city slugs live | hardcoded `baseUrl`; `lastModified = new Date()` evaluated at request time — fine for sitemap | OK | extract slug arrays to `src/lib/seo/slugs.ts` | P1 |
| `src/app/layout.tsx` | 271 | clean | root layout, server component | none unique | **TODO line 226**: `"REPLACE_WITH_VERIFICATION_TOKEN-AWAITING-USER-INPUT"` ships to production HTML; `<img>` from logo OG image references work but `images: [{ url: "/logo.png", width: 512, height: 512 }]` is twice the OG aspect ratio — OG image should be 1200×630 (matches `/og-image.png` that was added but is not referenced here) | 3 separate `<script>` tags for Organization/Person/WebSite schema — could be combined into single `@graph` array per schema.org best practice | OK | clean otherwise | **P0 (verification token), P1 (OG image wrong file)** |
| `src/app/work/[slug]/page.tsx` | 383 | clean | server component, params correct (`Promise<{slug:string}>`) | low — reuses `caseStudies` helper functions | none | OK | clean; `Section` local component is appropriate | — |
| `src/app/industries/fintech/page.tsx` | 259 | clean | server component, correct | **HIGH** — FAQ items duplicated in `faqSchema` and JSX (4 Q&A in each); identical pattern across all 5 industry pages | none | OK | clean otherwise | P1 |
| `src/app/vs/salesforce/page.tsx` | 360 | clean — `proCustom`/`proSalesforce` typed arrays | server component, correct | **MEDIUM** — FAQ items duplicated in `faqSchema` and JSX | none | OK | clean | P1 |
| `src/app/services/penetration-testing/page.tsx` | 361 | clean | server component, correct | **HIGH** — `pentestCities` array duplicates `crmCities` (custom-crm-development page) and the `CITY_SLUGS` in sitemap | none | OK | clean | P1 |

---

## 2. Cross-Cutting Findings

### P0 — Bugs / Correctness Risks

1. **`StripeCalculator.tsx` lead form drops leads to `console.log`.** Lines 249-267 stub the lead-capture POST because `/api/leads` does not exist. The user sees "You're on the list — check {email}" but no email is ever sent and no record is stored. This is on a public lead-magnet page actively being SEO-promoted. **Fix**: build the `/api/leads` route OR change UX copy to "Thanks — William will reach out at {email}" and forward via the existing `lib/mailer.ts`.
2. **`layout.tsx` line 229** ships `"REPLACE_WITH_VERIFICATION_TOKEN-AWAITING-USER-INPUT"` as the Google Search Console verification token. This means GSC verification is currently failing on every page load, and the placeholder is publicly visible in HTML. **Fix**: either remove the meta tag entirely until the real token is available, or move to an env var like `NEXT_PUBLIC_GSC_TOKEN`.
3. **`layout.tsx` OG image points to `/logo.png` (512×512)** instead of the new `/og-image.png` (1200×630) that was added in the same commit. Twitter/Facebook/LinkedIn unfurls will use the wrong image. **Fix**: change `images: [{ url: "/logo.png", ... }]` to `images: [{ url: "/og-image.png", width: 1200, height: 630 }]`.
4. **`case-studies.ts` contains 6 DRAFT client testimonials** that are flagged with `TODO(william): confirm with X ownership in writing before publishing` but are nonetheless being rendered to public pages (the `draftNote` shows an amber "DRAFT" badge in the UI — see `work/[slug]/page.tsx` line 257). Confirm with each client OR remove the quote blocks until written sign-off lands. This is a legal/PR risk, not just a code quality one.

### P1 — Significant Tech Debt

5. **City slugs are defined in 5+ places** — `sitemap.ts`, `services/penetration-testing/page.tsx`, `services/custom-crm-development/page.tsx`, `services/stripe-integration/page.tsx`, each `[city]/page.tsx` dynamic route, and the `areaServed` arrays in 8 service schemas. Adding a city means editing >10 files. **Fix**: extract to `src/lib/seo/cities.ts` as a typed const and import everywhere.
6. **14 city landing pages are 95% structurally identical** but exist as 14 separate hand-written files instead of one `[city]` route with a data lookup. Each file is 207 lines, ~2,900 lines total of near-duplicate JSX. The exact pattern already works for `/services/penetration-testing/[city]` — apply it to `/software-development-[slug]`. **Fix**: convert to dynamic route with `generateStaticParams`.
7. **FAQ duplication everywhere.** Industry pages, vs pages, service pages, and calculator pages each declare the SAME FAQ array twice — once for JSON-LD `faqSchema.mainEntity` and once for the rendered JSX accordion. Drift is inevitable. **Fix**: helper like `renderFAQSection(faqs: FAQ[]) → { schema, jsx }` in `src/lib/seo/faq.tsx`, modeled on the `faq-data.ts → page.tsx` pattern in `/faq` (which is the only place doing this right).
8. **Schema JSON-LD has no helper.** Every page hand-rolls Service/Breadcrumb/FAQPage schema objects with `"@id": "https://quantlabusa.dev/#org"` — and inconsistently, several pages use `"#organization"` instead of `"#org"`, breaking the graph join. **Fix**: `src/lib/seo/schema.ts` with `serviceSchema()`, `breadcrumbSchema()`, `faqPageSchema()` helpers and a single `ORG_ID` constant.
9. **Three files exceed 500 lines**: `services/stripe-integration/[city]/page.tsx` (905), `services/penetration-testing/[city]/page.tsx` (843), `services/custom-crm-development/[city]/page.tsx` (665). All three are 80%+ city-data inline. **Fix**: move data to typed `.ts` lib modules per service (`pentest-cities-data.ts`, etc.).
10. **3 incompatible type names for the same concept** in the [city] routes: `CityData` (pentest), `CityConfig` (CRM), `CityConfig` (stripe — different fields). **Fix**: design one `CityServicePageData` interface in `src/lib/seo/types.ts` with optional service-specific fields.
11. **Hardcoded `https://quantlabusa.dev` appears 300+ times** across the new code. **Fix**: `export const BASE_URL = "https://quantlabusa.dev"` in `src/lib/seo/config.ts` (or read from `process.env.NEXT_PUBLIC_BASE_URL`).
12. **Phone number `(770) 652-1282` / `+17706521282` hardcoded 62 times.** Same `src/lib/seo/config.ts` fix.
13. **No `loading.tsx` or `error.tsx`** under `services/`, `industries/`, `vs/`, `calculators/`. The whole site relies on the root layout. For SSG pages this is mostly OK, but `error.tsx` boundaries protect against runtime issues if any of the inline JSON-LD shapes break.
14. **Repeated Tailwind utility patterns** — `rounded-xl border border-white/5 bg-[#0d1526]/60 p-5` appears in literally every page reviewed (the "card" pattern). The breadcrumb `<nav aria-label="Breadcrumb">…<li aria-hidden="true">›</li>` block appears identically across all 30+ pages. **Fix**: extract `<Card>` and `<Breadcrumb items={...}>` components in `src/components/seo/`.

### P2 — Minor Polish

15. **`FAQAccordion.tsx` uses `key={idx}`** (line 18) — works because the list is stable, but should be `key={qa.q}` for idiomatic React.
16. **`StripeCalculator.tsx` has two `// eslint-disable-next-line no-console`** disables. If the lead intake gets built, remove both.
17. **Inconsistent JSDoc** — `case-studies.ts` has thorough JSDoc on every field; nothing else does. Either commit to the pattern or strip it.
18. **`work/[slug]/page.tsx` line 81-82** sets `datePublished: ${study.year}-01-01` and `dateModified: ${study.year}-12-31` from the year alone — Google's "freshness" signal will think every case study was modified on Dec 31. Use real dates from a `publishedAt`/`updatedAt` field on the `CaseStudy` interface.
19. **Naming inconsistency**: city URL slugs use kebab-case (`atlanta-ga`) and folder names use the full prefix (`software-development-atlanta-ga`). Default export functions use PascalCase (`AtlantaLandingPage`). Mixing all three in one project is unavoidable, but standardize within each layer.
20. **`<nav aria-label="Breadcrumb">` markup is correct** but the breadcrumb item separator `›` is repeated as a text node in every page — extract.

---

## 3. Top 5 Refactors (Biggest Codebase Simplification)

Ranked by lines removed × maintenance pain reduced:

1. **Extract `src/lib/seo/cities.ts`** — one typed const for the 14 cities, imported by sitemap, 3 dynamic routes, 3 service hub pages, 8 service schemas. **Removes ~150 lines of duplication; eliminates "adding a city" from a 10-file edit to a 1-file edit.**
2. **Convert `/software-development-[slug]` to a dynamic route** with city data in `src/lib/seo/city-pages.ts`. **Deletes 14 files (~2,900 lines) and replaces them with one ~250-line dynamic route + one ~400-line data file.**
3. **Build `src/lib/seo/schema.ts` helpers**: `orgRef()`, `serviceSchema()`, `breadcrumbSchema()`, `faqPageSchema()`, `articleSchema()`. Consolidate `"#org"` vs `"#organization"` to one `ORG_ID` constant. **Fixes a real correctness bug in the JSON-LD graph; removes ~30 inline schema blocks.**
4. **Build `src/lib/seo/faq.tsx` with `renderFAQSection(faqs)`** that returns both the JSON-LD schema and the rendered accordion JSX from a single FAQ array. **Eliminates the duplicate-FAQ-data pattern on ~15 pages.**
5. **Move data out of [city] route files** (pentest, CRM, stripe). Each `[city]/page.tsx` becomes ~150 lines of presentation + import; data lives in `src/lib/seo/pentest-cities.ts` etc. **Pulls 3 of the 3 worst offenders below the 500-line threshold and makes city-by-city content edits a documentation task instead of a code review.**

---

## 4. Recommended File Structure

```
src/lib/seo/
  config.ts           # BASE_URL, PHONE, EMAIL, ORG_ID, FOUNDER_NAME
  cities.ts           # CITIES: typed list of { slug, city, state, stateFull }
  types.ts            # FAQItem, CityServicePageData, etc.
  schema.ts           # orgRef(), serviceSchema(), breadcrumbSchema(), faqPageSchema()
  faq.tsx             # renderFAQSection(faqs) → { schema, jsx }
  city-pages.ts       # data for 14 software-development-* pages
  pentest-cities.ts   # data for /services/penetration-testing/[city]
  crm-cities.ts       # data for /services/custom-crm-development/[city]
  stripe-cities.ts    # data for /services/stripe-integration/[city]

src/components/seo/
  Breadcrumb.tsx      # <Breadcrumb items={[...]} />
  Card.tsx            # the rounded-xl border-white/5 bg-[#0d1526]/60 card
  CityHero.tsx        # icon + h1 + intro + CTA shared shell
  RelatedLinks.tsx    # the "Related services & nearby cities" grid
```

Expected impact: ~3,500 lines removed across the new code, every "add a city" or "edit an FAQ" becomes a single-file change, JSON-LD `@id` references stay consistent, and the type-system enforces the data shape end-to-end.

---

## 5. Build / Type Health

- TypeScript compilation: clean per commit message ("no TypeScript errors").
- No use of `any` in the new code (only one legacy `as any` in `src/app/print/business-card/page.tsx` — pre-existing).
- All Server / Client Component splits are correct (`StripeCalculator.tsx` and `FAQAccordion.tsx` are the only `"use client"` files in the new set; both legitimately use `useState`).
- `params: Promise<{...}>` typing applied correctly on every dynamic route — Next 16 async params change is handled.
- No `<img>` raw tags in the new code; all internal navigation uses `next/link`.
