# Audit 06 — Core Web Vitals & Lighthouse Performance Audit

**Audit date:** 2026-05-12
**Site:** https://quantlabusa.dev
**Stack:** Next.js 16.1.6 (App Router), React 19.2.3, Tailwind v4, Framer Motion 12, lucide-react, deployed on Vercel
**Audit method:** PSI API was rate-limited (HTTP 429), so this audit is grounded in direct codebase inspection of `src/app`, `src/components`, `public/`, and `next.config.ts`. Lighthouse scores are **estimates** based on observed code-level signals (image weight, render-blocking JS, layout-shift risk, font loading, canvas animation cost). The estimates below are conservative and meant to drive a fix list — re-run PSI after fixes ship to confirm actual deltas.

---

## Executive snapshot

| Page | Mobile Perf (est.) | Desktop Perf (est.) | Worst CWV risk |
|---|---|---|---|
| `/` (homepage) | **55–65** | 75–85 | **LCP 3.5–5.0s** — heavy HeroCanvas + 433KB unoptimized logo with `priority` |
| `/services` | 70–80 | 85–92 | LCP 2.0–2.8s — Navbar logo + framer-motion above fold |
| `/services/penetration-testing` | 72–82 | 87–93 | TBT — lots of AnimatedSection wrappers + lucide icons |
| `/software-development-atlanta-ga` | 75–85 | 88–94 | LCP 1.8–2.5s — text-only page, lightest |
| `/calculators/stripe-cost` | 60–72 | 80–88 | TBT/INP — `StripeCalculator` is a heavy client component with live recompute |

**Estimated mobile average:** ~68. Below the recommended 90+ threshold and the 75-ish "green" cutoff for Core Web Vitals "Good." Homepage is the worst, calculator second.

All five pages share these sitewide drags:
- Empty `next.config.ts` — no `images` config, no `compress`, no `compiler.removeConsole`, no `experimental.optimizePackageImports`
- `Navbar` is a `"use client"` component using `framer-motion` + `next/image fill` for a 48px logo — sitewide
- `FuturisticBackground` is `fixed inset-0 z-[-1]` on every non-portal route — extra paint cost
- Geist + Geist Mono are both loaded via `next/font/google` — Geist Mono is rarely used on marketing pages
- 433KB `logo.png` served unoptimized at `w=3840` for a max display size of 288×288
- No `<link rel="preconnect">` for Google Fonts CDN (next/font handles, but verify)
- No `priority` hint on Navbar logo (loads on every page, above the fold)

---

## Page 1: `/` (homepage) — worst-performing page

**File:** `src/app/page.tsx` → renders `<Hero>` `<Services>` `<Industries>` `<About>` `<Founder>` `<Contact>`

### Observed issues

| # | Severity | Issue | Evidence |
|---|---|---|---|
| 1 | **P0** | `HeroCanvas` runs a 30 FPS canvas animation with 13 nodes, ~19 edges, gradient-per-edge per frame, radial gradients per node — fires immediately on mount, blocks INP, drains battery | `src/components/HeroCanvas.tsx` lines 99–322. `requestAnimationFrame` loop, `createLinearGradient` and `createRadialGradient` called inside the per-frame loop |
| 2 | **P0** | Hero logo `/logo.png` is 433KB on disk, served via `next/image` but no AVIF/WebP config in `next.config.ts`, so Next.js falls back to default formats; declared `width={288} height={288}` but Next.js requests up to `w=3840` for retina | `src/components/Hero.tsx:43-54`, `public/logo.png` is 433KB |
| 3 | **P0** | `/founder.jpg` referenced in `Founder.tsx` **does not exist in `/public`** → renders a 404 broken image with no fallback, contributes to LCP / CLS | `src/components/Founder.tsx:19`, `ls public/` shows no `founder.jpg` |
| 4 | **P1** | Hero uses framer-motion for word-by-word reveal of "We build the software." — each word triggers initial blur+y-translate, then 0.1+i*0.12 staggered delay. Adds CLS risk and TBT | `src/components/Hero.tsx:58-75` |
| 5 | **P1** | `FuturisticBackground` is a `fixed` div with two stacked layers (grid-lines + radial mask). Mostly cheap but adds paint area on every page | `src/components/FuturisticBackground.tsx` |
| 6 | **P1** | All marketing components (`Hero`, `Navbar`, `Contact`, `About`, `ConsultationModal`) are `"use client"`, which ships their entire framer-motion + lucide bundle to the client even for static-feeling pages | grep `"use client"` shows 7 of 8 marketing components are client |
| 7 | **P2** | No skeleton/dimensions on `HeroCanvas` — full-section absolute element. CLS risk is low (parent has min-h-[100vh]) but `<HeroCanvas/>` could shift if hydration delays | `src/components/Hero.tsx:22` |

### Estimated CWVs (mobile, 4G throttled)
- **LCP:** 3.5–5.0s (P0) — driven by logo size + Hero canvas mount + framer-motion stagger
- **CLS:** 0.05–0.12 (P1) — word-by-word reveal + framer-motion can cause slight layout shift
- **INP:** 250–400ms (P1) — canvas animation + scroll listeners
- **TBT:** 350–600ms — framer-motion + canvas init + react hydration on a client-tree homepage
- **FCP:** 1.2–1.8s
- **Performance score (mobile):** 55–65

---

## Page 2: `/services`

**File:** `src/app/services/page.tsx` (server component)

### Observed issues

| # | Severity | Issue | Evidence |
|---|---|---|---|
| 1 | **P1** | `AnimatedSection` (a framer-motion `whileInView` wrapper) used liberally — every service card animates in. Each one ships viewport observer code | `src/components/ui/AnimatedSection.tsx` |
| 2 | **P1** | Sitewide `Navbar` + `Footer` + `FuturisticBackground` carry over from layout, contributing ~200–300ms TBT on mobile | `src/app/layout.tsx:261-267` |
| 3 | **P2** | Lucide icons imported individually (`Terminal, Bot, Globe, CreditCard, Shield, Lock, ArrowRight, MapPin, Building2, GitCompare`) — total ~10 icons. Without `experimental.optimizePackageImports`, full lucide tree-shake may be imperfect | `src/app/services/page.tsx:5` |
| 4 | **P2** | No `<Image>` on the service cards (text + icon only). Good — no image issues here |

### Estimated CWVs (mobile)
- **LCP:** 2.0–2.8s (P1)
- **CLS:** 0.04–0.08
- **INP:** 150–220ms
- **TBT:** 200–350ms
- **Performance score (mobile):** 70–80

---

## Page 3: `/services/penetration-testing`

**File:** `src/app/services/penetration-testing/page.tsx` (server component)

### Observed issues

| # | Severity | Issue | Evidence |
|---|---|---|---|
| 1 | **P1** | Two large inline JSON-LD blocks (service + FAQ schema) — parsed inline, shipped to client. Acceptable trade-off for SEO, but adds ~5–10KB to initial HTML | `src/app/services/penetration-testing/page.tsx:38-100+` |
| 2 | **P1** | `AnimatedSection` used throughout — 14 city links each wrapped, FAQ block animated | grep usage |
| 3 | **P2** | Inherits navbar/footer/background cost from layout |

### Estimated CWVs (mobile)
- **LCP:** 1.8–2.5s
- **CLS:** 0.03–0.07
- **INP:** 140–200ms
- **TBT:** 180–320ms
- **Performance score (mobile):** 72–82

---

## Page 4: `/software-development-atlanta-ga`

**File:** `src/app/software-development-atlanta-ga/page.tsx` (server component)

### Observed issues

| # | Severity | Issue | Evidence |
|---|---|---|---|
| 1 | **P2** | Pure server component, mostly text + lucide icons (`MapPin, Check, ArrowRight`). Lightest page in the audit | inspection |
| 2 | **P2** | Inherits the sitewide chrome (Navbar client component, framer-motion, background) | layout.tsx |
| 3 | **P2** | No images at all on this page — good |

### Estimated CWVs (mobile)
- **LCP:** 1.8–2.5s
- **CLS:** 0.02–0.05
- **INP:** 120–180ms
- **TBT:** 150–280ms
- **Performance score (mobile):** 75–85

---

## Page 5: `/calculators/stripe-cost`

**File:** `src/app/calculators/stripe-cost/page.tsx` + `StripeCalculator.tsx` (client)

### Observed issues

| # | Severity | Issue | Evidence |
|---|---|---|---|
| 1 | **P0** | `StripeCalculator` is a heavy `"use client"` component with `useMemo` + `useState` + live recalc on every keystroke. Imports lucide icons (`Check, Loader2, AlertTriangle, Sparkles`). Adds significant JS to a non-conversion-critical interaction layer | `src/app/calculators/stripe-cost/StripeCalculator.tsx:1-30` |
| 2 | **P1** | Calculator is rendered on initial load, not lazy. A user landing from search may never interact with it, yet pays the bundle cost upfront | `src/app/calculators/stripe-cost/page.tsx:6` imports it directly |
| 3 | **P1** | Two inline schema blocks (WebApplication + FAQ) — adds 10–15KB | page.tsx |
| 4 | **P2** | INP risk on live recompute — user types in volume field, full recalc fires synchronously | StripeCalculator.tsx |

### Estimated CWVs (mobile)
- **LCP:** 2.2–3.2s
- **CLS:** 0.05–0.10
- **INP:** 220–350ms (P1)
- **TBT:** 280–500ms
- **Performance score (mobile):** 60–72

---

## Sitewide root-cause issues (affect every page)

| # | Severity | Issue | Affected pages |
|---|---|---|---|
| A | **P0** | `next.config.ts` is empty — no `images.formats: ["image/avif", "image/webp"]`, no `images.deviceSizes`, no `compress`, no `compiler.removeConsole: { exclude: ["error"] }`, no `experimental.optimizePackageImports: ["lucide-react", "framer-motion"]` | All |
| B | **P0** | `/public/founder.jpg` 404 — the Founder component requests an image that doesn't exist | `/` |
| C | **P0** | `/public/logo.png` is 433KB; serving the same file at every page (Navbar + Hero priority) | All |
| D | **P1** | `FuturisticBackground` + `HeroCanvas` are client components running unconditionally — they ship to every non-portal route | All marketing |
| E | **P1** | `framer-motion` is the second-heaviest dependency after `agentation` and is imported in 7+ components | All |
| F | **P1** | Geist Mono loaded sitewide but only used in scroll indicator and code snippets — could be removed for marketing routes | All |
| G | **P2** | No `next/dynamic` boundary for `HeroCanvas`. It hydrates immediately on load even though it's purely decorative | `/` |
| H | **P2** | Inline schema JSON-LD blocks across the SEO pages are duplicated work — could be moved to a shared utility | Service pages |

---

## Top 10 specific code-level fixes — ranked by (CWV impact × ease)

> Score = impact (1-5) × ease (1-5). Higher = ship first.

### Fix 1 — Compress and recreate `logo.png` (impact 5, ease 5 → **25**)
**Where:** `public/logo.png`
**What:** `/public/logo.png` is 433KB. Resize to actual largest display size (max 288×288 hero usage), compress to ~30–50KB WebP, keep `.png` as fallback if needed.
**Why:** Used with `priority` in `Hero.tsx`, so it's the LCP candidate on `/`. Cuts homepage LCP by ~800–1500ms on 4G.
**How:**
```bash
npx @squoosh/cli --webp '{"quality":80}' public/logo.png
# then: rename old logo, drop in new
```
Plus: add `images: { formats: ["image/avif", "image/webp"] }` to `next.config.ts` so Next.js serves modern formats automatically.

### Fix 2 — Replace missing `/founder.jpg` or remove the `<Image>` (impact 5, ease 5 → **25**)
**Where:** `src/components/Founder.tsx:19`, `public/founder.jpg`
**What:** `/founder.jpg` does not exist in `public/`. Browser fetches and gets 404 every homepage load.
**Why:** Broken image hurts LCP (browser keeps waiting), CLS (no dimensions resolved), and visibly looks broken to users.
**How:** Add a real founder photo (≤100KB WebP at 384×384, since `sizes="192px"`) or temporarily replace the `<Image>` block with a gradient avatar/initial.

### Fix 3 — Populate `next.config.ts` with image + bundle config (impact 5, ease 4 → **20**)
**Where:** `next.config.ts`
**What:** Add image format optimization and package import optimization.
**Why:** Cuts JS bundle by stripping unused lucide/framer exports; cuts image bytes by serving AVIF.
**How:**
```ts
const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  compress: true,
  compiler: { removeConsole: { exclude: ["error", "warn"] } },
  experimental: { optimizePackageImports: ["lucide-react", "framer-motion"] },
};
```

### Fix 4 — Dynamic-import `HeroCanvas` (impact 5, ease 4 → **20**)
**Where:** `src/components/Hero.tsx:22`
**What:** `HeroCanvas` is purely decorative. Hydrate it after first paint instead of blocking LCP.
**Why:** The canvas init runs `buildHexGrid` (loops over hex cells), spins up rAF, creates 13 nodes + 19 edges — all on the critical path. Deferring shaves 200–400ms TBT.
**How:**
```tsx
import dynamic from "next/dynamic";
const HeroCanvas = dynamic(() => import("./HeroCanvas").then(m => ({default: m.HeroCanvas})), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-quant-bg" />,
});
```

### Fix 5 — Lazy-load `StripeCalculator` (impact 4, ease 5 → **20**)
**Where:** `src/app/calculators/stripe-cost/page.tsx:6`
**What:** Calculator is rendered immediately. Defer to user intent.
**Why:** Drops initial JS by ~10–20KB on `/calculators/stripe-cost` — improves LCP & TBT.
**How:**
```tsx
import dynamic from "next/dynamic";
const StripeCalculator = dynamic(() => import("./StripeCalculator").then(m => ({default: m.StripeCalculator})), {
  loading: () => <div className="min-h-[400px] animate-pulse bg-white/5 rounded-lg" />,
});
```
Also add `useDeferredValue` or simple debounce inside the calculator on the volume input to fix INP.

### Fix 6 — Drop Geist Mono from marketing routes (impact 3, ease 5 → **15**)
**Where:** `src/app/layout.tsx:16-19`
**What:** Geist Mono is loaded sitewide but barely used. Either remove it entirely or import it only where needed (admin/code snippets).
**Why:** Each font face is 30–60KB. Cuts FCP slightly and improves font-display swap behavior.
**How:** Delete the `Geist_Mono` import from `layout.tsx`. If needed elsewhere, import locally in those components.

### Fix 7 — Reduce framer-motion footprint on Hero (impact 3, ease 4 → **12**)
**Where:** `src/components/Hero.tsx:58-75`, `src/components/Navbar.tsx:19-23`
**What:** Word-by-word reveal animation on H1 adds CLS risk + delays Hero readability. The fade-in is fine; the per-word staggered translate+blur is overkill.
**Why:** H1 is text — it should be paintable immediately. Replace per-word `<motion.span>` with a single `<motion.h1>` doing a single fade, or use CSS keyframes (free, no JS).
**How:** Replace the `.map((word, i) => <motion.span>...)` loop with plain text and animate the parent `<h1>` once. Or use a `@keyframes` rule in `globals.css` — zero JS cost.

### Fix 8 — Add `priority` + explicit `sizes` to Navbar logo (impact 3, ease 5 → **15**)
**Where:** `src/components/Navbar.tsx:27-33`
**What:** Navbar logo uses `fill` mode with `sizes="48px"` — good — but no `priority`. On every page, it's above the fold.
**Why:** Marks it as a high-priority resource hint for the preload scanner.
**How:** Add `priority` prop. Combined with Fix 1 (smaller logo file), this becomes a near-instant render.

### Fix 9 — Make `AnimatedSection` viewport-only on mobile (impact 3, ease 4 → **12**)
**Where:** `src/components/ui/AnimatedSection.tsx`
**What:** Each section ships a viewport observer. Cumulatively across 10+ sections on a page, that's measurable TBT.
**Why:** On mobile, users scroll past these so fast the animation barely registers. Disable on `prefers-reduced-motion` or below `md` breakpoint.
**How:** Wrap the `motion.div` in a check: `if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return <div>{children}</div>;` Or use CSS-only fade with IntersectionObserver in vanilla JS.

### Fix 10 — Add explicit width/height to all `<Image>` components and inline critical CSS (impact 4, ease 3 → **12**)
**Where:** All `<Image>` usages, and `globals.css`
**What:** `globals.css` is tiny (18 lines) but Tailwind v4 emits a stylesheet `<link>` that can block render briefly. Inline the above-the-fold styles, defer the rest.
**Why:** Cuts FCP by ~100–200ms.
**How:** Use Next.js's built-in support — Next 16 + Tailwind v4 already inlines critical CSS in most cases. Verify with `npm run build && npx serve .next` and run Lighthouse locally. If critical CSS isn't inlined, configure `next.config.ts` `experimental.optimizeCss: true`.

---

## Quick wins (≤30 min total)

If you have only one afternoon:

1. Compress `logo.png` to <50KB (Fix 1) — 5 min
2. Drop in a `founder.jpg` or remove the `<Image>` block (Fix 2) — 5 min
3. Update `next.config.ts` with the 6 lines above (Fix 3) — 5 min
4. Add `priority` to Navbar logo (Fix 8) — 1 min
5. Dynamic-import `HeroCanvas` (Fix 4) — 10 min

These five alone should move mobile homepage score from ~60 to ~80+ and LCP from ~4s to ~2s.

---

## What to verify after fixes

1. Re-run PSI on each of the 5 URLs (with `&strategy=mobile` and `&strategy=desktop`).
2. Confirm LCP element on `/` is now the H1 text (not the logo or canvas).
3. Confirm no console 404s in production.
4. Run `npm run build` and check `.next/analyze` (add `@next/bundle-analyzer`) to confirm framer-motion and lucide-react are tree-shaken.
5. Test INP on `/calculators/stripe-cost` by rapidly typing in the volume field — should stay under 200ms.

---

## Accessibility, Best Practices, SEO — quick read

Without running Lighthouse directly, code-level signals suggest:

- **Accessibility:** Likely 85–95. `<Image>` components have `alt` text, `<button>` elements have `aria-label`, `<html lang="en">` is set, color contrast on `#F3F4F6` over `#111827` is excellent (~16:1). One concern: the `<motion.button>` scroll-indicator uses `aria-label="Explore services"` — good. Lucide icons in service cards may lack `aria-hidden` — minor.
- **Best Practices:** Likely 95+. HTTPS via Vercel, no console errors in code (verify after fix #2), no deprecated APIs. The `/founder.jpg` 404 will drop this score until fixed.
- **SEO:** Likely 95–100. Strong metadata, canonical URLs, structured data, mobile viewport, semantic headings. Could be hurt slightly by render-blocking JS on mobile but unlikely to be a hard fail.

---

## Files referenced

- `/Users/williambeltz/Documents/softwaredev/next.config.ts`
- `/Users/williambeltz/Documents/softwaredev/src/app/layout.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/page.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/services/page.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/services/penetration-testing/page.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/software-development-atlanta-ga/page.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/calculators/stripe-cost/page.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/calculators/stripe-cost/StripeCalculator.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/components/Hero.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/components/HeroCanvas.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/components/Founder.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/components/Navbar.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/components/FuturisticBackground.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/components/ui/AnimatedSection.tsx`
- `/Users/williambeltz/Documents/softwaredev/public/logo.png` (433KB — top fix)
- `/Users/williambeltz/Documents/softwaredev/public/founder.jpg` (**missing — 404**)
