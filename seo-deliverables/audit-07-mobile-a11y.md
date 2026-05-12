# Audit 07 — Mobile Responsiveness & Accessibility (WCAG 2.1 AA)

Scope: source-code static review of layout, homepage, services, services/penetration-testing (parent + city template), software-development-atlanta-ga, faq, calculators/stripe-cost (page + widget), industries/fintech, vs/salesforce, Navbar, Footer.

Note: viewport meta tag and skip-to-content link checks were applied against `src/app/layout.tsx`. Findings reference exact file paths and line numbers.

---

## Critical Issues (block usability or fail WCAG AA outright)

### C1 — No mobile navigation. Mobile users have no in-page nav at all.
- **File:** `src/components/Navbar.tsx` (lines 40-53)
- **Detail:** The primary `<nav>` is gated behind `hidden md:flex`. Below 768px, the only visible elements are the logo and the "Get in Touch" CTA — which itself uses `hidden sm:inline-flex` so it disappears below 640px.
- **Impact:** On a real phone you cannot reach Services, Work, About, or FAQ from any page except by typing the URL. This blocks every conversion path that starts on a non-homepage view (city pages, service pages, blog posts, the calculator, etc.).
- **Severity:** **Critical** — affects every page on mobile.
- **Fix:** Add a hamburger button (visible `md:hidden`) that opens an accessible drawer/sheet. Drawer must support: `aria-expanded`, focus trap, ESC to close, focus return to trigger on close, and `role="dialog"` with `aria-modal="true"`. Minimum hamburger tap target 44x44.

### C2 — No viewport meta tag.
- **File:** `src/app/layout.tsx` (head block, lines 225-256)
- **Detail:** No `<meta name="viewport" content="width=device-width, initial-scale=1" />` is rendered. Next.js will inject a default in some configurations but it is not declared anywhere — this should be moved to the Metadata API or an explicit viewport export.
- **Impact:** Without an explicit viewport, mobile Safari/Chrome may render the desktop layout zoomed out, breaking touch targets and font scaling on first paint. Lighthouse PWA / Best-Practices score will flag this.
- **Severity:** **Critical**.
- **Fix:** Add `export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#111827" };` to `layout.tsx`. Move the existing `<meta name="theme-color">` into the same export.

### C3 — Color contrast: `text-gray-500` on `bg-quant-bg` fails AA for body copy.
- **Files (representative):**
  - `src/components/Footer.tsx` lines 27, 30, 38, 52, 60-78 (`text-gray-500` body, social link defaults)
  - `src/app/services/page.tsx` lines 222, 252 (breadcrumbs, card labels)
  - `src/app/calculators/stripe-cost/page.tsx` lines 132, 197, 201 (callout body, stat labels)
  - `src/app/calculators/stripe-cost/StripeCalculator.tsx` lines 283, 428, 591 (helper text)
- **Detail:** Tailwind `gray-500` is `#6B7280` on the site's dark `bg-quant-bg`. Contrast ratio ≈ **4.0:1** — below the 4.5:1 AA threshold for normal text. `text-gray-600` (line 84 footer) is worse (≈ 2.8:1). `text-gray-700` used in breadcrumb chevrons (`text-gray-700`) is decorative but is aria-hidden, OK.
- **Severity:** **Critical** (WCAG 1.4.3 — Contrast Minimum, AA).
- **Fix:** Bump body text to `text-gray-400` (≈ 6.7:1) or `text-gray-300` (≈ 10:1). Reserve `text-gray-500` for `text-xs` decorative metadata, and even there only when it is non-essential context. Re-audit copyright/footer line at line 84 — `text-gray-600` should be at least `text-gray-400`.

### C4 — Multi-currency / non-Western users + the `numeric` input type on mobile.
- **File:** `src/app/calculators/stripe-cost/StripeCalculator.tsx` lines 296-304, 315-323
- **Detail:** `<input type="number">` is used for volume + plan count. On iOS this pops the QWERTY keyboard with a numeric strip, not the numeric pad — a known iOS Safari issue. More critically, `step={100}` on a number input creates tiny spinner buttons (well under 44px) that mobile users cannot tap.
- **Severity:** **Major** (UX), **Critical** for accessible touch targets.
- **Fix:** Use `inputMode="numeric"` + `pattern="[0-9]*"` on a `type="text"` input, or hide spinners via CSS (`appearance: none`) and provide ± buttons sized 44px.

---

## Major Findings — Mobile UX

### M1 — Hero text sizes don't step down for small screens.
- **Files:** `src/app/services/page.tsx` line 261; `src/app/services/penetration-testing/page.tsx` line 129; `src/app/services/penetration-testing/[city]/page.tsx` line 730; `src/app/software-development-atlanta-ga/page.tsx` line 92; `src/app/industries/fintech/page.tsx` line 110; `src/app/vs/salesforce/page.tsx` line 126; `src/app/calculators/stripe-cost/page.tsx` line 126.
- **Detail:** All H1s use `text-4xl md:text-6xl`. At 360px viewport the city page H1 ("Penetration Testing Services in San Francisco, CA") wraps onto 4-5 lines and consumes >40% of the fold. `text-4xl` = 36px is fine for short H1s; pages with long titles (city + state names, "Custom Software Development & Penetration Testing in Atlanta, GA") need a `sm:text-5xl` middle step or `text-3xl` mobile floor.
- **Severity:** Major.
- **Fix:** Standardize to `text-3xl sm:text-4xl md:text-6xl` for long H1s and ensure `leading-tight` or `leading-snug` is applied.

### M2 — Stripe calculator: number-input spinner UX + sticky right column on mobile.
- **File:** `StripeCalculator.tsx` lines 276, 419
- **Detail:** `lg:sticky lg:top-32` only applies at ≥1024px, so on mobile the result panel sits *below* every input — users have to scroll down past 8 input fields to see the cost update. The grid is `lg:grid-cols-5` so on mobile and tablet (<1024px) the result is bottom-stacked.
- **Severity:** Major (kills the "live recalculation" UX promise the page makes).
- **Fix:** Either reverse order on mobile (`flex flex-col-reverse lg:grid lg:grid-cols-5`) so result is up top, OR add `md:sticky md:top-20` with a slim collapsed result bar.

### M3 — Salesforce comparison table can overflow but the overflow is invisible.
- **File:** `src/app/vs/salesforce/page.tsx` line 173
- **Detail:** Table is wrapped in `overflow-x-auto` (good) but: (a) no scroll indicator/shadow, (b) the wrapping `<div>` has the same dark bg as the page so users won't know it's scrollable, (c) no `scope="col"` on `<th>` for screen readers.
- **Severity:** Major.
- **Fix:** Add fade/shadow on right edge to hint scrollability, add `scope="col"` to header cells, consider stacking the table into card layout below `sm:`.

### M4 — Tap targets under 44px (WCAG 2.5.5 AAA / 2.5.8 AA target size minimum).
- **Files & lines:**
  - `Footer.tsx` lines 61-78: social icons are `w-5 h-5` (20px) with no padding wrapper — total tap area ≈ 20-24px. Below 24x24 mandatory floor for 2.5.8.
  - `services/penetration-testing/[city]/page.tsx` line 814: related-pages cards have ample padding (good), but the "Never mind" text button (`StripeCalculator.tsx` line 583) is ~12px text height with no padding — far below 44px.
  - `services/page.tsx` line 320: city chips use `py-2 px-4` → ≈ 32px high. Below 44.
  - `services/penetration-testing/page.tsx` line 330: pentest city links use `py-3 px-4` ≈ 44px — OK.
  - `Navbar.tsx` line 41-44: nav links have no explicit padding. With `text-sm` (14px line-height ~20px) total height ≈ 24px, below minimum.
- **Severity:** Major.
- **Fix:** Wrap icon-only links/buttons in a `min-h-[44px] min-w-[44px] inline-flex items-center justify-center`. Add `py-3` to small chips. Apply `min-h-[44px] flex items-center` to navbar links.

### M5 — Footer copyright + "Privacy Policy" / "Terms" links use `text-sm` (`text-gray-400`) but contrast plus the tiny tap area make them hard to hit and read.
- **File:** `Footer.tsx` lines 40-46
- **Severity:** Minor (legal compliance often demands accessible privacy links).
- **Fix:** Add `py-1.5` to each link, or wrap in `min-h-[36px]`.

### M6 — Pentest tech-tool grid (`grid-cols-2 md:grid-cols-3`) and city-pentest "Where We Serve" grid (`grid-cols-2 md:grid-cols-3 lg:grid-cols-4`) collapse to 2 columns at 320px where the chip text wraps awkwardly.
- **Files:** `services/penetration-testing/page.tsx` lines 221, 328
- **Severity:** Minor.
- **Fix:** `grid-cols-1 sm:grid-cols-2 md:grid-cols-3` to give a clean single-column phone layout.

### M7 — Animations don't respect `prefers-reduced-motion`.
- **File:** `Navbar.tsx` lines 19-23 (framer-motion `initial`/`animate` on header), plus AnimatedSection wrappers throughout.
- **Detail:** No global CSS guard like `@media (prefers-reduced-motion: reduce) { *, ::before, ::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; } }`. Framer-motion's `useReducedMotion()` hook is not used.
- **Severity:** Major (WCAG 2.3.3 Animation from Interactions, AAA — but also a vestibular-disorder accessibility concern).
- **Fix:** Add CSS rule to `globals.css` and gate AnimatedSection on `useReducedMotion()`.

### M8 — Long calls-to-action "whitespace" risk in stat cards.
- **File:** `calculators/stripe-cost/page.tsx` lines 192-201
- **Detail:** Three-column stat row "Bridgepointe Painting" uses `sm:grid-cols-3` with `~6 weeks / 0 dup invoices / ~8 hrs/wk` numbers that can squeeze on narrow tablets. No `whitespace-nowrap` so OK, but `~` and numbers risk awkward line break. Verify on 375-414px range.
- **Severity:** Minor.

---

## Major Findings — Accessibility

### A1 — No skip-to-content link.
- **File:** `src/app/layout.tsx` (no skip link present)
- **Detail:** Keyboard and screen reader users have to tab through the navbar (logo + 4 nav links + CTA) on every page navigation.
- **Severity:** Major (WCAG 2.4.1 Bypass Blocks, A).
- **Fix:** Add `<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 ...">Skip to content</a>` immediately inside `<body>` and ensure each page wraps content in `<main id="main-content">`. (Most pages already render a `<main>` — just add the `id`.)

### A2 — `<main>` elements are not labelled.
- **Files:** Every page renders `<main className="min-h-screen ...">` (e.g. `services/page.tsx:248`, `industries/fintech/page.tsx:85`). None have an `aria-labelledby` pointing to the page H1 or `aria-label`.
- **Severity:** Minor (helpful but not strict AA).
- **Fix:** Add `aria-labelledby="page-title"` on `<main>` and `id="page-title"` on the H1.

### A3 — Heading hierarchy: missing or weak landmark structure.
- **Files:** `services/penetration-testing/page.tsx` — multiple H2s under one H1, fine, but the "What you get" `<ul>` (line 245) is not preceded by a list label/aria role. Service grids have `<h3>` inside `<Link>` which is OK, but the parent landmark structure has no `<section>` wrappers.
- **Severity:** Minor.
- **Fix:** Wrap each AnimatedSection-titled block in `<section aria-labelledby="...">` for screen reader landmark hopping.

### A4 — Form: Stripe calculator labels OK; checkboxes hidden inside clickable cards.
- **File:** `StripeCalculator.tsx` lines 327-353
- **Detail:** `<label>` wraps the checkbox + text — accessible name comes from text content via implicit association. Good. However, the `<label>` is the click target with no visible focus ring on the *card* (only the inner checkbox gets focus styling). Keyboard users tabbing through can't see what's focused.
- **Severity:** Major (WCAG 2.4.7 Focus Visible).
- **Fix:** Add `focus-within:ring-2 focus-within:ring-sky-400` to the label wrapper.

### A5 — FAQ accordion uses native `<details>`/`<summary>` on the Stripe page (good!) but the standalone FAQ page uses a custom `FAQAccordion` component — verify it has `aria-expanded`, `aria-controls`, role="button" semantics on the trigger.
- **File:** `src/app/faq/FAQAccordion.tsx` (not in scope here but flagged)
- **Severity:** Major (often missed).
- **Fix:** Audit `FAQAccordion.tsx` separately.

### A6 — Decorative icons not consistently marked.
- **Files:** Multiple — lucide-react icons like `<ArrowRight />`, `<Check />`, `<MapPin />` are rendered inside meaningful link/list contexts. They lack `aria-hidden="true"`. Screen readers will read them as "img" or announce nothing depending on the icon library default.
- **Examples:** `services/page.tsx` lines 234, 313, 325, 339, 354, 367; `Footer.tsx` line 31.
- **Severity:** Minor.
- **Fix:** Add `aria-hidden="true"` to all decorative lucide icons. Where icon is the only content (icon-only button/link), add `aria-label`.

### A7 — `<img>` audit: only image found is the logo, which has `alt="QuantLab Logo"` — good. But `next/image` `sizes` value (`48px`) is fixed; if logo size changes responsively it would need to update. Acceptable as-is.

### A8 — Modal/dialog roles: none of the components reviewed have a true modal. Calculator lead form is inline — fine. If a future mobile drawer is added (see C1), it MUST implement `role="dialog" aria-modal="true"` with focus trap.

### A9 — Focus indicators on links.
- **Detail:** Most links use `hover:` color transitions only — no `focus:` or `focus-visible:` ring styles defined on individual links. Tailwind defaults provide a thin browser ring but it's barely visible on dark backgrounds.
- **Severity:** Major (WCAG 2.4.7).
- **Fix:** Add a global `focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg focus:outline-none` utility class or layer in `globals.css`.

### A10 — `bg-clip-text` gradient on service tag (`services/page.tsx` line 231) — gradient text can fail contrast checks against dark bg. Verify low end of gradient (`from-blue-500`) keeps contrast at 4.5:1.
- **Severity:** Minor.

### A11 — Phone number `(770) 652-1282` referenced as plain text (e.g. `software-development-atlanta-ga/page.tsx:194`) is not wrapped in `<a href="tel:...">`. Mobile users can't tap to call.
- **Files:** `software-development-atlanta-ga/page.tsx` line 194; `industries/fintech/page.tsx` line 251; `vs/salesforce/page.tsx` line 352.
- **Severity:** Major (mobile conversion blocker).
- **Fix:** Wrap each phone-number mention in `<a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>`.

### A12 — Breadcrumb chevron `›` is text inside `<li aria-hidden="true">` — good practice, applied consistently.

### A13 — `dangerouslySetInnerHTML` on JSON-LD script blocks is correctly used. Not an a11y issue but worth noting the pattern is consistent.

---

## Prioritized Fix List

| # | Fix | Files | Effort | Impact |
|---|-----|-------|--------|--------|
| 1 | **Add mobile hamburger nav** (drawer with focus trap, ARIA, ESC handling) | `Navbar.tsx` | 4-6h | Unblocks every mobile conversion path |
| 2 | **Make phone number tap-to-call** wherever it appears | atlanta page, fintech page, salesforce page | 15min | Mobile call conversions |
| 3 | **Add viewport meta + theme-color via Next.js Viewport export** | `layout.tsx` | 10min | Mobile rendering on first paint |
| 4 | **Bump `text-gray-500` body copy → `text-gray-400` minimum** site-wide | Footer, services, calculator pages | 1h | WCAG AA contrast compliance |
| 5 | **Add skip-to-content link + main id** | `layout.tsx`, all `page.tsx` files | 30min | WCAG 2.4.1, keyboard users |
| 6 | **Add `prefers-reduced-motion` global CSS guard + framer-motion gate** | `globals.css`, AnimatedSection | 30min | Vestibular accessibility |
| 7 | **Fix calculator: order result-above-inputs on mobile, fix number-input UX** | `StripeCalculator.tsx` | 1-2h | Calculator usability on phones |
| 8 | **Add `aria-hidden="true"` to decorative lucide icons** site-wide | All pages | 1h | Screen reader hygiene |
| 9 | **Add `focus-visible:ring-*` global utility, apply to all links/buttons** | `globals.css`, button component | 1h | WCAG 2.4.7 |
| 10 | **Enlarge social icons + nav links + chips to 44px tap targets** | Footer, Navbar, services chips | 1h | WCAG 2.5.8 |
| 11 | **Step H1s down with `text-3xl sm:text-4xl md:text-6xl`** for long titles | city pages, atlanta, fintech | 30min | Mobile fold readability |
| 12 | **Add table scroll affordance + `scope="col"`** | `vs/salesforce/page.tsx` | 15min | Mobile table usability |
| 13 | **Audit `FAQAccordion.tsx` separately** for ARIA accordion semantics | `faq/FAQAccordion.tsx` | TBD | Screen reader FAQ navigation |
| 14 | **Add `focus-within:ring` to clickable label cards** in calculator | `StripeCalculator.tsx` line 336 | 5min | Keyboard checkbox visibility |
| 15 | **Wrap each page section in `<section aria-labelledby>`** for landmarks | All page files | 1-2h | Screen reader navigation |

---

## Pages with the most issues (concentrated risk)

1. **`Navbar.tsx`** — single largest mobile UX issue site-wide (C1).
2. **`calculators/stripe-cost/StripeCalculator.tsx`** — number input UX (C4), sticky panel order (M2), label focus (A4), contrast (C3).
3. **`services/penetration-testing/[city]/page.tsx`** — long H1 (M1), affects 14 generated pages.
4. **`Footer.tsx`** — contrast (C3) + tap targets (M4) + tiny copyright (M5).
5. **`software-development-atlanta-ga/page.tsx`** — phone number not tappable (A11), long H1 (M1).

---

## Counts summary

- **Critical issues:** 4 (C1 mobile nav, C2 viewport, C3 contrast, C4 number-input UX/spinner tap targets)
- **Major mobile UX issues:** 8 (M1-M8)
- **Major accessibility issues:** 13 line items (A1-A13)
- **Estimated total dev effort to clear critical + top-10 priority:** 12-16 hours.
