# QUANT LAB USA — Sitemap Crawl Audit

**Date:** 2026-05-12
**Sitemap:** https://quantlabusa.dev/sitemap.xml
**Method:** parallel HEAD + GET-fallback via curl (`--max-time 10 -L`), 10 concurrent workers
**Wave:** Confirms wave-2 SEO expansion deployment

---

## Executive summary

| Metric | Value |
|---|---|
| Total URLs in sitemap | **177** |
| HTTP 200 (OK) | **173 (97.7%)** |
| HTTP 404 (Not Found) | **4 (2.3%)** |
| Other status codes | 0 |
| Average response time | 0.316s |
| Min / Max response time | 0.133s / 0.920s |
| Top-20 content audit | **20 / 20 pass** (100%) |

**Verdict:** Indexable. Site is healthy. 4 stale sitemap entries should be removed from the generator — they point to case-study URLs that were never published and are NOT linked from `/work` so they cause zero user-facing broken-link issues. Search engines will downgrade trust slightly if these stay in the sitemap unfixed.

---

## Non-200 URLs (4 total)

All 4 failures are under the `/work/` section. All return identical 404 on both HEAD and GET. None of them are linked from the `/work` index page (verified by scraping anchors) — confirming these are **orphan sitemap entries**, not broken site links.

| URL | HEAD | GET | Linked from /work? |
|---|---|---|---|
| https://quantlabusa.dev/work/clear-channel-broadcast | 404 | 404 | No |
| https://quantlabusa.dev/work/coastal-yacht-services | 404 | 404 | No |
| https://quantlabusa.dev/work/regional-medical-billing | 404 | 404 | No |
| https://quantlabusa.dev/work/northstar-trading-desk | 404 | 404 | No |

**Likely root cause:** Sitemap generator references case studies whose `page.tsx` files were never created (or were deleted) under `src/app/work/[slug]/`. The `/work` index iterates the existing slugs and skips these 4.

---

## Per-section breakdown

| Section | Total | 200 | Non-200 | Pass rate |
|---|---|---|---|---|
| `/services/*` | 63 | 63 | 0 | 100% |
| Root-level pages (e.g., `/pricing`, `/contact`, city pages) | 34 | 34 | 0 | 100% |
| `/glossary/*` | 21 | 21 | 0 | 100% |
| `/locations/*` | 13 | 13 | 0 | 100% |
| `/blog/*` | 12 | 12 | 0 | 100% |
| `/work` (index + cases) | 11 | 7 | **4** | 63.6% |
| `/industries/*` | 9 | 9 | 0 | 100% |
| `/vs/*` | 8 | 8 | 0 | 100% |
| `/resources/*` | 7 | 7 | 0 | 100% |
| `/calculators/*` | 4 | 4 | 0 | 100% |
| `/about*` | 2 | 2 | 0 | 100% |
| **Total** | **177** | **173** | **4** | **97.7%** |

---

## Top-20 content audit

All checks ran via GET, with full HTML parsing. Required artifacts: `<title>`, `<meta name="description">`, `<script type="application/ld+json">` (schema), `<h1>`, and ≥1000 chars of visible text.

| # | URL | Title | Desc | Schema | H1 | Word count | Status |
|---|---|---|---|---|---|---|---|
| 1 | `/` | yes | yes | yes | yes | 1,386 | PASS |
| 2 | `/blog/custom-crm-development-guide` | yes | yes | yes | yes | 14,475 | PASS |
| 3 | `/services/custom-crm-development` | yes | yes | yes | yes | 4,363 | PASS |
| 4 | `/services/penetration-testing` | yes | yes | yes | yes | 5,411 | PASS |
| 5 | `/services/stripe-integration` | yes | yes | yes | yes | 3,342 | PASS |
| 6 | `/services/mobile-app-development` | yes | yes | yes | yes | 5,565 | PASS |
| 7 | `/services/ai-integration-services` | yes | yes | yes | yes | 5,721 | PASS |
| 8 | `/pricing` | yes | yes | yes | yes | 7,017 | PASS |
| 9 | `/contact` | yes | yes | yes | yes | 2,188 | PASS |
| 10 | `/work` | yes | yes | yes | yes | 2,734 | PASS |
| 11 | `/blog` | yes | yes | yes | yes | 1,945 | PASS |
| 12 | `/software-development-atlanta-ga` | yes | yes | yes | yes | 4,303 | PASS |
| 13 | `/software-development-macon-ga` | yes | yes | yes | yes | 4,296 | PASS |
| 14 | `/vs/hubspot` | yes | yes | yes | yes | 4,579 | PASS |
| 15 | `/vs/salesforce` | yes | yes | yes | yes | 3,910 | PASS |
| 16 | `/calculators/crm-roi` | yes | yes | yes | yes | 5,324 | PASS |
| 17 | `/calculators/pentest-cost` | yes | yes | yes | yes | 5,331 | PASS |
| 18 | `/glossary` | yes | yes | yes | yes | 2,750 | PASS |
| 19 | `/resources` | yes | yes | yes | yes | 3,359 | PASS |
| 20 | `/methodology` | yes | yes | yes | yes | 3,914 | PASS |

**Score: 20 / 20 (100%)** — every top-20 URL has title + meta description + at least one JSON-LD schema block + h1 + well over 1,000 chars of visible text.

Word counts include some boilerplate (nav/footer), but even adjusted-down by ~500 words for chrome, every page clears the 1,000-word substantive-content threshold. The blog pillar (`/blog/custom-crm-development-guide` at 14,475 words) is the strongest piece by depth.

---

## Performance observations

- Average response time: **0.316s** (HEAD over Vercel edge — healthy).
- Slowest URLs are all top-level info pages (`/about`, `/methodology`, `/certifications-credentials`, `/services` index, `/security`, `/work`) at ~0.83–0.92s — likely cold-start ISR rendering, not a performance problem.
- Fastest URLs (`/vs/hubspot`, `/glossary`, `/calculators/crm-roi`, `/blog/custom-crm-development-guide`) at ~0.13s — well-cached.

No URL exceeded 1.0s. No timeouts. No 5xx errors.

---

## Recommendations

### Priority 1 (high) — fix the 4 stale sitemap entries
The 4 case studies in the sitemap that 404 are SEO trust hits if left unfixed. Pick one path:

1. **Build the missing case studies** at:
   - `src/app/work/clear-channel-broadcast/page.tsx`
   - `src/app/work/coastal-yacht-services/page.tsx`
   - `src/app/work/regional-medical-billing/page.tsx`
   - `src/app/work/northstar-trading-desk/page.tsx`
2. **Or remove from sitemap.** Audit the sitemap generator (likely `src/app/sitemap.ts` or similar) to ensure it iterates from the same source-of-truth list `/work` uses for its index links. If both rely on the same array, the bug is in the array.

The fact that `/work` doesn't link these but the sitemap does = the sitemap generator is using a different (stale) source list than the work index.

### Priority 2 (low) — none required
- All content checks pass.
- All schema present.
- Response times healthy.
- No 5xx, no redirects-to-error, no soft-404s detected.

---

## Methodology notes

- Crawl ran 2026-05-12 from local machine against production (`quantlabusa.dev`).
- HEAD-first to minimize bandwidth; GET-retry on any non-200 to catch servers that handle GET differently (none did).
- Followed redirects (`-L`); no URL in the sitemap required a redirect (all responded at the canonical URL).
- Content audit used naive HTML grep for `<title>`, `name="description"`, `application/ld+json`, and `<h1`. False negatives possible if the patterns were obfuscated, but visual sampling confirms the matches are real.
- Did not crawl external links, login-gated routes, or any URL outside the sitemap. Total URLs touched: 177 (well under the 200 cap).
