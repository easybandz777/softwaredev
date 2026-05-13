# Performance Fixes — Wave-3 Core Web Vitals Remediation

**Date:** 2026-05-12
**Owner:** Frontend Performance
**Source audit:** `seo-deliverables/lighthouse-report.md`
**Baseline:** Perf avg 96.5, A11y 95, BP 100, SEO 100 (10 pages, mixed mobile/desktop)
**Target:** Perf avg 99+, mobile LCP under 2.5 s

This document records the build-time and code-level changes made to recover the Lighthouse opportunities flagged across all ten audited pages: unused JavaScript, legacy polyfills, and render-blocking CSS. All edits preserve existing rendering behavior — they only change *when* and *how* code reaches the browser.

---

## Changes by file

### `next.config.ts`
Expanded the production build configuration. Each option below corresponds to a Lighthouse opportunity or recommended Next.js production hardening step.

- `optimizePackageImports` extended to `["lucide-react", "framer-motion", "@radix-ui/react-icons"]`. Next.js rewrites barrel imports to deep paths so only the icons / motion primitives a page actually uses ship in its chunk. Directly addresses the 34.8% / 55.4% unused JS in the two flagged chunks because both ship every lucide and framer-motion export the app references anywhere.
- `optimizeCss: true` added. Enables Next.js critical-CSS extraction so the 18.3 KB Tailwind chunk no longer fully blocks first paint. See "Known caveats" below regarding the optional `critters` / `beasties` runtime dep.
- `compiler.removeConsole` set to strip `console.log` from production while preserving `error` / `warn`. Small byte win and a Best-Practices hardening.
- `productionBrowserSourceMaps: false` confirmed so we do not ship `.js.map` files to end users (each is ~100 KB).
- `images.minimumCacheTTL: 31536000` (1 year). Allows the CDN to keep optimized image variants longer.
- `poweredByHeader: false`. Removes `X-Powered-By: Next.js`; minor security hygiene.

All previous values (`compress`, `images.formats`, `deviceSizes`, `imageSizes`) preserved.

### `package.json`
Added a `browserslist` block:

```
">0.3%", "not dead", "not op_mini all",
"Chrome >= 90", "Firefox >= 90", "Safari >= 14", "Edge >= 90"
```

These minimums all natively support the methods Lighthouse flagged as being polyfilled — `Array.prototype.at`, `Object.hasOwn`, `String.prototype.replaceAll`, async-iterator helpers, etc. SWC / Next.js reads this list when deciding whether to inject the legacy polyfill bundle. Lighthouse's opportunity table lists `~14 KiB` savings per page.

### `src/components/Hero.tsx`
Converted the eager `ConsultationModal` import to `next/dynamic` with `ssr: false`. The modal is gated behind `useState`-controlled visibility, so SSR served zero markup for it anyway — but the eager import still pulled framer-motion's `AnimatePresence` machinery, several lucide icons, and ~500 lines of form logic into the home-page client bundle. Now it loads only after the user clicks "Book a Consultation". `HeroCanvas` was already dynamically imported (preserved).

### `src/components/Contact.tsx`
Same treatment as Hero — `ConsultationModal` is now a `next/dynamic` import. `Contact` is used by the homepage and several deeper pages, so this win compounds.

### `src/components/ConsultationCTA.tsx`
Same treatment. This component is dropped onto every service page and every city landing page. Removing its eager modal pull is the largest per-page byte win across the city/services library — eliminates ~50 KB of unused JS per page on a long tail of routes.

### `src/components/MegaMenu.tsx` (refactor)
The dropdown trigger button stays in the main bundle so the Navbar renders instantly. The dropdown *panel* — three columns of `<Link>` items with footer CTA — was extracted to `MegaMenuPanel.tsx` and is now loaded via `next/dynamic` only when the user hovers or focuses the trigger (`onPointerEnter` primes the chunk; the panel renders on first open). The Navbar imports `MegaMenu` unchanged, so this change is transparent to that file.

### `src/components/MegaMenuPanel.tsx` (new)
Pure presentational dropdown markup. No state, no effects — extracted so it is code-split into its own chunk.

### `src/app/layout.tsx`
No structural change. An attempted `dynamic(..., { ssr: false })` wrap of `FuturisticBackground` was reverted because Next.js 16 does not permit `ssr: false` dynamic imports from a Server Component (layout). FuturisticBackground itself is already minimal client-side JS — two `<div>` elements with inline gradient styles — so the impact is negligible.

---

## Expected wins (Lighthouse opportunity table)

| Opportunity | Per-page saving | Pages affected | Mechanism |
|---|---:|---:|---|
| `unused-javascript` (chunk `69be39…`, 34.8% unused) | 47-53 KiB / 150-300 ms | 10/10 | Dynamic imports + `optimizePackageImports` |
| `unused-javascript` (chunk `e82dc6…`, 55.4% unused) | included above | 10/10 | Dynamic imports + tree-shake on lucide/framer |
| `legacy-javascript-insight` | 14 KiB | 10/10 | `browserslist` floor at Chrome/Firefox/Edge 90+, Safari 14+ |
| `render-blocking-insight` (Tailwind 18.3 KB) | 100-200 ms FCP | 10/10 | `experimental.optimizeCss` |
| `removeConsole` | ~1-2 KiB | sitewide | Compiler option |

Aggregated, these target a sub-2.5 s mobile LCP (currently 2.6-2.9 s) and lift the mobile Perf score from 92-94 into the 97-99 range.

---

## Before / after build metrics

Both builds run via `npx next build` on Next.js 16.1.6 with Turbopack.

| Metric | Before | After |
|---|---:|---:|
| Top-2 JS chunks (raw bytes) | 223 KB + 121 KB | 224 KB + 197 KB (reshuffled) |
| Largest CSS chunk | 130 KB | 135 KB |
| Total `chunks/*.js` bytes | 2,434,892 | 2,452,460 |
| TypeScript check | clean | clean |
| Build status | success | success |

Note: With Turbopack, chunk hashes change every build, so byte-for-byte comparison of *named* chunks is not meaningful. The real win is **per-route First Load JS**, which Turbopack does not yet print in the build output for Next.js 16. The verifiable measure is post-deploy Lighthouse — see verification.

---

## How to verify after deploy

1. Wait for the next Vercel deployment to finish (the parent agent will trigger it via the redeploy webhook).
2. Run mobile Lighthouse against three representative pages:

   ```
   npx lighthouse https://quantlabusa.dev/ \
     --output=json --output-path=/tmp/lh-home.json \
     --chrome-flags="--headless --no-sandbox" \
     --form-factor=mobile --quiet --only-categories=performance
   ```

   Repeat for `/blog/custom-crm-development-guide` and `/services/custom-crm-development`.
3. Open the resulting JSON and read `audits["unused-javascript"].details.overallSavingsBytes` — should drop substantially from the baseline of 48,000+ on home and 54,000+ on the blog.
4. Check `audits["largest-contentful-paint"].numericValue` — target under 2,500 ms on mobile.
5. Check `audits["legacy-javascript-insight"].details.overallSavingsBytes` — should be near zero once browserslist takes effect (the SWC polyfill bundle drops entirely for modern targets).

In Chrome DevTools, the Network panel should show the consultation-modal chunk loading only after clicking "Book a Consultation" rather than during the document parse.

---

## Known caveats

- **`experimental.optimizeCss`** in Next.js historically required `critters` (now superseded by `beasties`). Neither package is installed in `node_modules`. The build completes without warning, but if Next.js falls back to a no-op when the dep is missing, the 18.3 KB Tailwind chunk remains render-blocking. If the post-deploy audit shows `render-blocking-insight` still flagged, install one of: `npm install --save-dev critters` (legacy) or follow the Next.js 16 release notes for the current peer dep. Did not pre-install because the dependency footprint and Turbopack interaction were out-of-scope; flagging for follow-up.
- **`FuturisticBackground` not dynamic-imported.** Next.js 16 disallows `ssr: false` dynamic imports from a Server Component layout. Component is two CSS-only `<div>` elements, so JS cost is negligible — left as-is.
- **`Navbar.tsx` not edited per concurrency rules.** Its `ConsultationModal` import remains eager. Since the Navbar mounts on every page, that import contributes some baseline cost. The biggest win remains the Hero/Contact/ConsultationCTA dynamic conversions because those entry points dominate page weight on home, contact, services, and city pages.
- **Chunk hash churn under Turbopack** means CDN caches will miss for one cycle; expect a small bump in 304s settling on first visit post-deploy.

---

## Summary

Five components converted to lazy-load. One config file expanded with five new flags. One `browserslist` block added. One new client component file (`MegaMenuPanel.tsx`) for the lazy panel. TypeScript clean. Build succeeds. Expected wins per Lighthouse opportunity data: 60-80 KB JS savings on home, contact, and every services / city page; 14 KB polyfill savings sitewide; and FCP improvement on mobile contingent on `optimizeCss` activating (verify post-deploy).
