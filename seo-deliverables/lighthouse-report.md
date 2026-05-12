# Lighthouse Audit Report — quantlabusa.dev

**Audit date:** 2026-05-12
**Tool:** Lighthouse 11.12.1 (via `npx lighthouse@latest`)
**Pages audited:** 10 (5 mobile, 5 desktop)
**Flags:** `--headless --no-sandbox --only-categories=performance,accessibility,best-practices,seo --quiet`

Core Web Vitals are a confirmed Google ranking factor. This baseline establishes where the site stands across performance, accessibility, best practices, and on-page SEO so we can prioritize the next round of optimization.

---

## TL;DR

- **Performance:** Desktop pages score **100/100** across the board. Mobile pages score **92-94**, capped by LCP/Speed-Index on slower-network simulation. No critical regressions.
- **Accessibility:** **92-96** across all pages. The single sitewide blocker is a low-contrast `text-gray-500 on bg-gray-900` footer caption (3.66:1 vs required 4.5:1). Fixing it lifts every page to >=98.
- **Best Practices:** **100/100** on every page.
- **SEO:** **100/100** on every page.
- **Top sitewide fix:** Reduce unused JavaScript (~47-53 KiB per page, all in the same two Next.js chunks). Code-splitting or `dynamic()` imports recoup ~150-300 ms LCP on mobile.

---

## Summary table

| # | URL | Form factor | Perf | A11y | BP | SEO |
|---|-----|---:|---:|---:|---:|---:|
| 1 | `/` | mobile | **92** | **96** | **100** | **100** |
| 2 | `/blog/custom-crm-development-guide` | mobile | **92** | **92** | **100** | **100** |
| 3 | `/services/custom-crm-development` | desktop | **100** | **96** | **100** | **100** |
| 4 | `/services/penetration-testing` | desktop | **100** | **96** | **100** | **100** |
| 5 | `/software-development-atlanta-ga` | mobile | **93** | **96** | **100** | **100** |
| 6 | `/vs/hubspot` | desktop | **100** | **93** | **100** | **100** |
| 7 | `/pricing` | desktop | **100** | **96** | **100** | **100** |
| 8 | `/contact` | mobile | **94** | **96** | **100** | **100** |
| 9 | `/calculators/crm-roi` | mobile | **94** | **93** | **100** | **100** |
| 10 | `/blog` | desktop | **100** | **96** | **100** | **100** |
| | **Average** | — | **96.5** | **95.0** | **100** | **100** |

All ten audits ran successfully — no errors or skipped URLs.

---

## Core Web Vitals snapshot

### Mobile (5 pages)

| URL | LCP | FCP | TBT | CLS | SI | INP (lab MPF) |
|-----|---:|---:|---:|---:|---:|---:|
| `/` | 2.8 s | 1.9 s | 10 ms | 0 | 4.3 s | 60 ms |
| `/blog/custom-crm-development-guide` | 2.9 s | 1.6 s | 20 ms | 0 | 4.1 s | 70 ms |
| `/software-development-atlanta-ga` | 2.7 s | 1.6 s | 50 ms | 0 | 4.1 s | 100 ms |
| `/contact` | 2.6 s | 1.9 s | 0 ms | 0 | 4.0 s | 50 ms |
| `/calculators/crm-roi` | 2.8 s | 1.3 s | 10 ms | 0 | 3.9 s | 60 ms |

- **LCP** sits at **2.6-2.9 s** — under the 2.5 s "Good" threshold by 100-400 ms. This is the single biggest opportunity for mobile gains.
- **CLS** is **0.00** everywhere — excellent (zero layout shift).
- **TBT/INP** are well under 100 ms — interaction is healthy.
- **Speed Index** at ~4 s is the soft ceiling pulling down the mobile Perf score.

### Desktop (5 pages)

| URL | LCP | FCP | TBT | CLS | SI |
|-----|---:|---:|---:|---:|---:|
| `/services/custom-crm-development` | 0.6 s | 0.3 s | 0 ms | 0 | 0.4 s |
| `/services/penetration-testing` | 0.5 s | 0.3 s | 0 ms | 0 | 0.4 s |
| `/vs/hubspot` | 0.5 s | 0.3 s | 0 ms | 0 | 0.4 s |
| `/pricing` | 0.6 s | 0.4 s | 0 ms | 0 | 0.5 s |
| `/blog` | 0.6 s | 0.3 s | 0 ms | 0 | 0.4 s |

Desktop is essentially perfect — LCP at half a second is best-in-class.

---

## Per-URL details

### 1. Homepage — `https://quantlabusa.dev/` (mobile)
- **Scores:** Perf 92 · A11y 96 · BP 100 · SEO 100
- **Metrics:** LCP 2.8 s · FCP 1.9 s · TBT 10 ms · CLS 0 · SI 4.3 s
- **Top opportunities:**
  1. `unused-javascript` — save ~47 KiB / ~170 ms (two Next.js chunks: `69be39811437728d.js` 34.8% unused, `e82dc682ddaab695.js` 55.4% unused)
  2. `legacy-javascript-insight` — save ~14 KiB by skipping polyfills for `Array.prototype.at` etc. (target modern browsers in `browserslist`)
  3. `render-blocking-insight` — 2 render-blocking CSS chunks (`68b66274a10c0af2.css` 18.3 KB, `2473c16c0c2f6b5f.css` 0.9 KB)
- **A11y blocker:** `color-contrast` — footer `<p class="text-xs text-gray-500 mt-3">` is 3.66:1 on `#111827`; needs `text-gray-400` or `text-gray-300`.

### 2. Pillar blog — `/blog/custom-crm-development-guide` (mobile)
- **Scores:** Perf 92 · A11y 92 · BP 100 · SEO 100
- **Metrics:** LCP 2.9 s · FCP 1.6 s · TBT 20 ms · CLS 0 · SI 4.1 s
- **Top opportunities:**
  1. `unused-javascript` — save ~53 KiB / ~300 ms
  2. `legacy-javascript-insight` — save ~14 KiB
  3. `render-blocking-insight` — same CSS chunks as homepage
- **A11y blockers (2):**
  - `color-contrast` (sitewide footer issue)
  - `link-in-text-block` — inline body links use `text-sky-400` (#00bcff) on `text-gray-400` (#99a1af) surrounding text. Contrast 1.19:1, no underline. Add `underline` or use a higher-contrast link color.

### 3. Service: Custom CRM — `/services/custom-crm-development` (desktop)
- **Scores:** Perf 100 · A11y 96 · BP 100 · SEO 100
- **Metrics:** LCP 0.6 s · FCP 0.3 s · TBT 0 ms · CLS 0 · SI 0.4 s
- **Top opportunities:**
  1. `unused-javascript` — ~53 KiB unused (low priority on desktop)
  2. `legacy-javascript-insight` — ~14 KiB
  3. `render-blocking-insight` — CSS chunks
- **A11y blocker:** sitewide footer contrast.

### 4. Service: Penetration testing — `/services/penetration-testing` (desktop)
- **Scores:** Perf 100 · A11y 96 · BP 100 · SEO 100
- **Metrics:** LCP 0.5 s · FCP 0.3 s · TBT 0 ms · CLS 0 · SI 0.4 s
- **Top opportunities:** same as #3 (unused JS, legacy JS, render-blocking CSS).
- **A11y blocker:** footer contrast.

### 5. City: Atlanta GA — `/software-development-atlanta-ga` (mobile)
- **Scores:** Perf 93 · A11y 96 · BP 100 · SEO 100
- **Metrics:** LCP 2.7 s · FCP 1.6 s · TBT 50 ms · CLS 0 · SI 4.1 s · INP(lab) 100 ms
- **Top opportunities:**
  1. `unused-javascript` — ~53 KiB / ~300 ms
  2. `legacy-javascript-insight` — ~14 KiB
  3. `render-blocking-insight` — CSS chunks
- **A11y blocker:** footer contrast. (TBT 50 ms and INP 100 ms are the highest in the set — worth keeping an eye on if more interactivity is added.)

### 6. Comparison: vs HubSpot — `/vs/hubspot` (desktop)
- **Scores:** Perf 100 · A11y 93 · BP 100 · SEO 100
- **Metrics:** LCP 0.5 s · FCP 0.3 s · TBT 0 ms · CLS 0 · SI 0.4 s
- **Top opportunities:** unused-js, legacy-js, render-blocking CSS.
- **A11y blockers (2):** footer contrast + `link-in-text-block` (same inline link styling as the pillar post).

### 7. Pricing — `/pricing` (desktop)
- **Scores:** Perf 100 · A11y 96 · BP 100 · SEO 100
- **Metrics:** LCP 0.6 s · FCP 0.4 s · TBT 0 ms · CLS 0 · SI 0.5 s
- **Top opportunities:** unused-js, legacy-js, render-blocking CSS.
- **A11y blocker:** footer contrast.

### 8. Contact — `/contact` (mobile)
- **Scores:** Perf 94 · A11y 96 · BP 100 · SEO 100
- **Metrics:** LCP 2.6 s · FCP 1.9 s · TBT 0 ms · CLS 0 · SI 4.0 s
- **Top opportunities:**
  1. `unused-javascript` — ~52 KiB / ~150 ms
  2. `legacy-javascript-insight` — ~14 KiB
  3. `render-blocking-insight` — CSS chunks
- **A11y blocker:** footer contrast.

### 9. Calculator: CRM ROI — `/calculators/crm-roi` (mobile)
- **Scores:** Perf 94 · A11y 93 · BP 100 · SEO 100
- **Metrics:** LCP 2.8 s · FCP 1.3 s · TBT 14 ms · CLS 0 · SI 3.9 s
- **Top opportunities:**
  1. `unused-javascript` — ~51 KiB / ~300 ms
  2. `legacy-javascript-insight` — ~14 KiB
  3. `render-blocking-insight` — CSS chunks
- **A11y blockers (2):** footer contrast + `link-in-text-block`.

### 10. Blog index — `/blog` (desktop)
- **Scores:** Perf 100 · A11y 96 · BP 100 · SEO 100
- **Metrics:** LCP 0.6 s · FCP 0.3 s · TBT 0 ms · CLS 0 · SI 0.4 s
- **Top opportunities:** unused-js, legacy-js, render-blocking CSS.
- **A11y blocker:** footer contrast.

---

## Sitewide opportunities (ranked by frequency, then estimated savings)

| Rank | Audit ID | Title | Pages affected | Est. savings (mobile, summed) |
|---:|---|---|:---:|---:|
| 1 | `unused-javascript` | Reduce unused JavaScript | **10 / 10** | ~1,460 ms across all pages, ~47-53 KiB / page |
| 2 | `color-contrast` | Insufficient text contrast | **10 / 10** | n/a (single CSS change fixes every page) |
| 3 | `legacy-javascript-insight` | Legacy JavaScript / polyfills | **10 / 10** | ~14 KiB / page |
| 4 | `render-blocking-insight` | Render-blocking CSS/JS | **10 / 10** | 2 CSS chunks blocking first paint on every page |
| 5 | `network-dependency-tree-insight` | Critical-path network tree | **10 / 10** | informational — no preconnect candidates flagged |
| 6 | `link-in-text-block` | Inline links lack non-color cue | **3 / 10** | n/a (CSS change to link styles) |
| 7 | `mainthread-work-breakdown` | Long main-thread work | **1 / 10** (homepage) | 2.1 s main-thread time |

---

## Top 5 sitewide actions (prioritized)

### 1. Fix the global footer contrast (every page, biggest A11y lift)
**Audit:** `color-contrast` — fails on **all 10 pages**.
**Cause:** `<p class="text-xs text-gray-500 mt-3">` (#6a7282) on `#111827`. Contrast 3.66:1. Required: 4.5:1 for body text.
**Fix:** Change Tailwind class to `text-gray-400` (#9ca3af → ~7:1) or `text-gray-300` in the footer caption block. One line, one file, every page improves.
**Effort:** ~5 min. **Impact:** A11y score on all 10 pages → 98-100.

### 2. Code-split / `dynamic()` import the heavy Next.js chunks
**Audit:** `unused-javascript` — fails on **all 10 pages**. Two chunks dominate:
- `_next/static/chunks/69be39811437728d.js` — 34.8% unused
- `_next/static/chunks/e82dc682ddaab695.js` — 55.4% unused

These are the same two chunks shipped on every page, so whatever lives in them is being eagerly bundled when much of it is below-the-fold or route-specific.
**Fix:** Find the imports living in those chunks (likely an analytics/chart/animation lib) and convert them to `next/dynamic` with `{ ssr: false }` or lazy import only where needed. Run `npx @next/bundle-analyzer` to identify the culprits.
**Effort:** ~1-2 hr. **Impact:** ~150-300 ms LCP win on every mobile page; could lift mobile Perf from 92-94 → 96-99.

### 3. Drop legacy JS polyfills (`Array.prototype.at` etc.)
**Audit:** `legacy-javascript-insight` — fails on **all 10 pages**, ~14 KiB each.
**Fix:** In `package.json` `browserslist`, drop unsupported-by-default targets and add a `"defaults and supports es6-module"` or `">0.5% and last 2 versions and not dead and supports es6-module"` query. Next.js will stop transpiling/polyfilling for modern engines.
**Effort:** ~10 min + test. **Impact:** -14 KiB JS on every page, faster parse time.

### 4. Inline critical CSS / split the global stylesheet
**Audit:** `render-blocking-insight` — `_next/static/chunks/68b66274a10c0af2.css` (18.3 KB) blocks first paint on every page.
**Fix options:**
- Use `next/font` with `display: 'swap'` (likely already done — verify).
- Move non-critical Tailwind utilities into a deferred stylesheet via `<link rel="preload" as="style" onload="this.rel='stylesheet'">` pattern, or use Tailwind's `@layer` to split critical vs non-critical.
- For Next.js App Router, this CSS is generated automatically — consider auditing for unused Tailwind utilities (`content` paths in `tailwind.config.ts`) which inflate the chunk.
**Effort:** ~30-60 min. **Impact:** ~100-200 ms FCP win on mobile.

### 5. Fix inline link styling — add a non-color cue
**Audit:** `link-in-text-block` — fails on **3 pages** (pillar blog, vs/hubspot, crm-roi calculator). Likely on every long-form page with inline body links.
**Cause:** `<a class="text-sky-400 hover:underline">` — `hover:underline` only; no rest-state underline. Contrast 1.19:1 with surrounding `text-gray-400`.
**Fix:** Add `underline` (or `decoration-sky-400 underline-offset-2`) to the base link class in MDX/prose components. Or use a global `.prose a { text-decoration: underline; }` rule.
**Effort:** ~5 min. **Impact:** A11y +3-4 points on long-form pages; better WCAG compliance.

---

## What's already excellent (don't regress)

- **CLS = 0.00** on every page. Whatever the dev team did with font loading, image sizing, and skeleton states — keep doing it.
- **TBT <= 50 ms** on every page. Main-thread work is well-controlled.
- **SEO 100/100** and **Best Practices 100/100** on every page — meta tags, robots, canonicals, viewport, HTTPS, mixed content, etc. are all clean.
- **Desktop LCP 0.5-0.6 s** — extremely fast. Edge caching and bundle size are well-tuned for desktop.

---

## Next steps (recommended sequence)

1. Land the footer `text-gray-500` → `text-gray-400` fix (1 file, 1 line). **Today.**
2. Audit and fix inline link styling in the prose/MDX component. **Today.**
3. Update `browserslist` to drop legacy targets. **Tomorrow** (after a quick QA pass).
4. Run `next build` with bundle analyzer to identify the two heavy chunks, then `dynamic()` them. **This week.**
5. Re-run Lighthouse on the same 10 URLs to verify gains. Target: mobile Perf >= 96 average, A11y >= 98 on every page.

---

## Raw artifacts

JSON outputs preserved at `/tmp/lh-reports/`:
- `lh-home-mobile.json`
- `lh-pillar-mobile.json`
- `lh-crm-desktop.json`
- `lh-pentest-desktop.json`
- `lh-atlanta-mobile.json`
- `lh-hubspot-desktop.json`
- `lh-pricing-desktop.json`
- `lh-contact-mobile.json`
- `lh-roi-mobile.json`
- `lh-blog-desktop.json`
- `summary.json` — parsed scores + top opportunities
- `failing-audits.json` — full failing-audit cross-tab
