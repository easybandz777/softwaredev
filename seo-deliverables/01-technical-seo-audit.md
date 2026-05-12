# QUANT LAB USA — Technical SEO Audit

- **Domain:** https://quantlabusa.dev
- **Audit date:** 2026-05-12
- **Auditor:** Claude (Opus 4.7, 1M)
- **Owner:** William Beltz · beltz@quantlabusa.dev · (770) 652-1282
- **Stack on Vercel:** Next.js 15 App Router · TypeScript · Tailwind · Node · PostgreSQL · Stripe · Docker

---

## Executive Summary

- **The live production deployment is catastrophically stale and partially broken.** Every internal route documented in the local source (`/services`, `/services/*`, `/about`, `/work`, `/faq`, `/privacy`, `/terms`) returns **HTTP 404**. The deployed homepage HTML is 10+ days old (`age: 911423` on Vercel cache), still ships the old hero copy ("EngineeringtheNextLevel."), still uses the old meta description, and is missing every Open Graph tag, every Twitter Card tag, the canonical link, the JSON-LD organization graph, the theme-color, the manifest link, the apple-touch-icon, and the Google Search Console verification tag — even though all of these are defined in `src/app/layout.tsx`. Cause is almost certainly a failed/skipped Vercel deploy. **A single redeploy fixes ~60% of every other finding below.**
- **Local SEO posture is weak even when the build deploys.** No `telephone` on the Organization or LocalBusiness JSON-LD, no city/state geo-coordinates, no `areaServed` array covering Macon/Atlanta/Augusta/Columbus/Savannah/Miami/Austin/Dallas/Chicago/Seattle/NYC/Charlotte/Nashville/SF (only "United States"), and no city-targeted landing pages. The owner's brand markets to ~13 metros but every page targets none of them.
- **A flotilla of referenced static assets returns 404.** `/manifest.json`, `/apple-touch-icon.png`, `/icon-192.png`, `/icon-512.png`, `/founder.jpg`, `/og-image.png` — all referenced in code, none present in `public/`. Result: broken PWA install, broken Apple bookmark icon, broken About-page hero image, and no real social-share preview (sharing the site on iMessage/Slack/LinkedIn currently renders the 433KB `logo.png` instead of a proper 1200×630 OG image — when OG tags are eventually deployed).

---

## Method

1. `curl` + WebFetch of `https://quantlabusa.dev/`, `/robots.txt`, `/sitemap.xml`, and 12 internal routes.
2. Parsed raw HTML of homepage `<head>` for meta/OG/JSON-LD/canonical/preload coverage.
3. Read local source at `/Users/williambeltz/Documents/softwaredev/src/app/` for ground truth on what *should* be rendered.
4. Compared deployed HTML to local source to identify the deploy delta.
5. Inspected `public/` for referenced asset coverage.
6. Pulled HTTP performance signals (`size_download`, `time_total`, `TTFB`) and inspected preload tags and image-optimization handling. PageSpeed Insights API returned HTTP 429 (rate-limit) — manual Lighthouse run recommended once redeploy lands.

---

## Findings

### Site-Wide / Infrastructure

| Page | Issue | Severity | Recommended Fix |
| --- | --- | --- | --- |
| Site-wide | `/robots.txt` returns **404** (file is defined in `src/app/robots.ts` but not in current deploy) | **P0** | Trigger fresh Vercel deploy from `master` (`vercel --prod` or push). Verify `https://quantlabusa.dev/robots.txt` returns 200 with `Sitemap:` line. |
| Site-wide | `/sitemap.xml` returns **404** (defined in `src/app/sitemap.ts` but not in deploy) | **P0** | Same redeploy. Then submit to Google Search Console + Bing Webmaster. |
| Site-wide | Every inner route (`/services`, `/services/*`, `/about`, `/work`, `/faq`, `/privacy`, `/terms`) returns HTTP 404 | **P0** | Same redeploy. The build is producing pages locally — the deploy is failing or pinned to an outdated commit. Check Vercel project's "Production Branch" + recent build logs. |
| Homepage HTML | Meta description on live site reads *"Next level custom software and automated trading bots."* — does **not** match `layout.tsx`'s current copy *"Custom software development and cybersecurity services. CRM systems, trading bots, web applications, and penetration testing."* | **P0** | Redeploy resolves; confirm description in `<head>` post-deploy. |
| Homepage HTML | Live H1 reads `EngineeringtheNextLevel.` — does **not** match `Hero.tsx` source `"We build the software."` | **P0** | Redeploy. |
| Homepage HTML | `<head>` is missing **all** Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`, `og:site_name`) | **P0** | Redeploy. After redeploy, verify `<meta property="og:image" content="https://quantlabusa.dev/og-image.png" />` exists. Then create 1200×630 `og-image.png` (see asset section). |
| Homepage HTML | `<head>` is missing **all** Twitter Card tags | **P0** | Redeploy. Then explicitly set `twitter.card = "summary_large_image"` in `layout.tsx` (currently set to `"summary"`, which only allows a small square thumbnail — bad for X/LinkedIn previews). |
| Homepage HTML | No `<link rel="canonical">` rendered | **P0** | Redeploy. After deploy, add `alternates: { canonical: "https://quantlabusa.dev" }` to `layout.tsx`'s `metadata` (it's missing for the root). |
| Homepage HTML | **Zero JSON-LD blocks rendered** despite Organization + LocalBusiness + Person `@graph` defined in `layout.tsx` (lines 45–111). Schema.org is essentially absent from the deployed site. | **P0** | Redeploy. Then validate with `https://validator.schema.org/`. |
| Homepage HTML | `<meta name="google-site-verification" content="REPLACE_WITH_VERIFICATION_TOKEN" />` is still a placeholder | **P1** | Provision GSC for the property, paste real token in `layout.tsx:124`, redeploy. |
| Site-wide | `next.config.ts` is empty (no `images`, `headers`, `redirects`, `compress`) | **P1** | Add `images: { formats: ['image/avif','image/webp'] }`, security `headers()` (Strict-Transport-Security, X-Content-Type-Options, Referrer-Policy: strict-origin-when-cross-origin, Permissions-Policy), and a `redirects()` for trailing-slash normalisation. |
| Site-wide | `metadataBase` is set in `layout.tsx` but root `metadata` block omits `alternates.canonical` for `"/"` | **P1** | Add `alternates: { canonical: "/" }` at the root metadata. |

### Static Asset Coverage

| Asset (referenced in code) | Live HTTP status | Severity | Fix |
| --- | --- | --- | --- |
| `/manifest.json` (layout.tsx:127) | **404** | **P1** | The file exists in `public/manifest.json` locally but isn't deployed. Confirm `public/` is being uploaded. After redeploy, also generate the icons it references. |
| `/icon-192.png` (manifest.json) | **404** | **P1** | Generate from `public/logo.png` at 192×192 PNG and commit to `public/`. |
| `/icon-512.png` (manifest.json) | **404** | **P1** | Generate at 512×512. |
| `/apple-touch-icon.png` (layout.tsx:131) | **404** | **P1** | Generate 180×180. |
| `/founder.jpg` (about/page.tsx:208) | **404** | **P1** | Add 768×768 portrait of William Beltz to `public/founder.jpg`. Without this the About page hero image is broken even after redeploy. |
| `/og-image.png` (recommended) | **404** | **P1** | Create 1200×630 branded OG image; reference it from `layout.tsx` `openGraph.images` (currently points to `/logo.png` 512×512 — wrong aspect ratio and undersized for LinkedIn/X). |
| `/public/logo.png` | 200 — but **433 KB** PNG | **P2** | Compress to <80 KB via `cwebp -q 80` or `squoosh-cli`. Save WebP + PNG fallback. Update `layout.tsx` `openGraph.images` width/height to match. |
| `/public/thequantlabxTJ5automailer.png` | 200 — **2.3 MB** unused on prod | **P2** | Move to `public/internal/` or delete — bloats deploys by 2.3MB. |

### Per-Page Findings (from local source — to take effect at next deploy)

| Page | Issue | Severity | Recommended Fix |
| --- | --- | --- | --- |
| `/` (home) | No `<h1>` containing geo or service keywords. Hero H1 = "We build the software." Generic. No mention of Macon GA, Atlanta, or any target metro. | **P1** | Change Hero copy or add an SEO-tuned `<h1>` like `<h1 className="sr-only">Custom software development & penetration testing in Macon, GA — serving Atlanta, Augusta, Columbus, Savannah, and Miami</h1>` and keep the brand H1 visible. Or restructure: H1 = "Custom Software Development in Georgia" + decorative subhead. |
| `/` | Organization JSON-LD is missing `telephone`, `address.streetAddress`, `address.addressLocality`, `address.postalCode`, `geo.latitude/longitude`, `openingHours`, `priceRange`, `sameAs`, `contactPoint` array | **P0** | See "Top 10" item #4 for full replacement JSON. |
| `/` | LocalBusiness `areaServed` is just `"United States"` — fails to capture the 13 metros owner markets to | **P0** | Replace with array of `{"@type":"City","name":"Atlanta"}`, etc. |
| `/services` | OG description duplicates page title; no `keywords` (not ranked) but more importantly the `<h1>` is just "Services" — too short for ranking | **P1** | Change `<h1>` to "Custom Software & Cybersecurity Services" and add a meta `<h2>`-level intro mentioning "Georgia, Texas, Florida, NYC, Chicago, Seattle." |
| `/services/custom-business-software` | No `<h1>` containing the city/state. Title is good. Body is solid but has no internal links to `/work` case studies that prove the claim "shipped across 4 industries" | **P1** | Add 2–3 internal links from the body to specific `/work/<slug>` case studies. |
| `/services/penetration-testing` | Title is **128 chars** ("Penetration Testing Services \| Red Team & Pentest Georgia, Atlanta \| QuantLab Software Solutions") — Google truncates at ~60 chars | **P1** | Trim to ~58 chars: `"Penetration Testing & Red Team Services in Georgia \| QuantLab"`. Move long-tail keywords (Atlanta, MITRE) to description + H1. |
| `/services/algorithmic-trading-systems` | Title is 71 chars — over the ~60-char SERP cap | **P2** | Trim to: `"Algorithmic Trading Systems Development \| QuantLab"` (50 chars). |
| `/services/cloud-infrastructure` | Title 71 chars | **P2** | `"Cloud Infrastructure & DevOps Consulting \| QuantLab"` (52 chars). |
| `/services/payments-invoicing-licensing` | Title 86 chars; description repeats title verbatim | **P2** | `"Stripe Integration & License Management \| QuantLab"` (52 chars). Diversify description. |
| `/services/web-applications` | OG description is shorter and weaker than meta description — Facebook/LinkedIn previews suffer | **P2** | Mirror full meta description in OG. |
| `/about` | OG `images` not set → falls back to root logo (square, 512×512 — bad for previews) | **P2** | Add `openGraph.images: [{ url: "/og-about.png", width: 1200, height: 630 }]` or reuse a global `/og-image.png`. |
| `/about` | `/founder.jpg` 404 (asset section) | **P1** | See assets. |
| `/work` | Title `"Case Studies \| QuantLab Software Solutions"` is fine but `<h1>` is just `"Case Studies"` — should include a value-prop noun phrase | **P2** | `<h1>Case Studies — Live Trading Systems, Operations Platforms & Pentests</h1>` |
| `/work/[slug]` | `generateMetadata` returns title with `study.title` but the title pattern `"${study.title} \| QuantLab Case Study"` will easily exceed 60 chars for any project named >35 chars | **P2** | Use `${study.title} — QuantLab` (shorter) and place "Case Study" in the description. Add `Article` schema (already present) plus `image` field for share previews. |
| `/faq` | FAQPage JSON-LD is correct **but** content is in a client component — needs to render server-side for Google rich results | **P1** | Verify `faq/page.tsx` is **not** a `"use client"` boundary. Inline the JSON-LD `<script>` in the server component so it renders on first paint. |
| `/privacy` | Description is one sentence ("Privacy policy for QuantLab Software Solutions.") — risks "soft 404" classification | **P2** | Expand description to 130–155 chars summarizing scope (form data, analytics, cookies, contact). |
| `/terms` | Same | **P2** | Expand description. |
| Sitemap | Sitemap omits `/work/[slug]` dynamic case-study pages | **P1** | Iterate `caseStudies` from `@/lib/case-studies` inside `sitemap.ts` and append a row per slug. |

### Performance / Core Web Vitals (proxy signals from HTML)

| Signal | Status | Severity | Fix |
| --- | --- | --- | --- |
| LCP hint: `<link rel="preload" as="image" href="/logo.png" />` preloads the **433KB unoptimized PNG** rather than the AVIF/WebP Next/Image variant (which is ~16KB) | Render-blocking on slow mobile | **P1** | Drop the `preload` and rely on `next/image` with `priority`. Or preload the optimized `_next/image?url=%2Flogo.png&w=384&q=75` URL. |
| LCP hint: Hero logo uses `<Image priority>` — good. But `width={288}` is rendered while `next/image` is also generating up to `w=3840` (`q=75`) — wasteful at 4x DPR | Wasted bandwidth | **P2** | Cap `sizes="(max-width: 768px) 224px, 288px"` on the Hero `<Image>`. |
| 12 `<script async>` blocks in `<head>` (Next.js chunks) | Acceptable for Next 15 | n/a | No action — async is non-blocking. |
| Font: two `.woff2` preloaded with `crossorigin` (Geist + Geist_Mono) | Good | n/a | Already optimal. Confirm `font-display: swap` (Next/Font does this by default — verify in generated CSS). |
| `viewport` meta = `width=device-width, initial-scale=1` | Good | n/a | — |
| `<html lang="en">` | Good | n/a | — |
| Compression: response is `text/html; charset=utf-8` 62KB | Likely Brotli (Vercel default) | n/a | — |
| Image format negotiation | Next/Image returns WebP when `Accept: image/webp` present. **Logo.png direct request still 433KB.** | **P2** | Compress original logo.png in repo. Or accept it because direct PNG isn't typically requested. |
| 3D hero canvas (`HeroCanvas.tsx`) | Likely heavy JS for `framer-motion` + WebGL | **P2** | Confirm `dynamic(() => import('./HeroCanvas'), { ssr: false })` is used; otherwise CLS/INP risks. Audit bundle size with `@next/bundle-analyzer`. |
| `useState` + `framer-motion` in `Hero`, `Services`, `Navbar`, `Contact` | All client components | **P2** | Where animation is decorative, keep client-side. But `Services` doesn't need to be `"use client"` — convert to server component, animations stay via tiny client wrapper. Cuts JS payload on `/`. |

### Crawlability / Indexability

| Item | Status | Severity | Fix |
| --- | --- | --- | --- |
| `robots` meta on `<html>` | Set via `metadata.robots = { index: true, follow: true }` (good) | — | — |
| `/admin/`, `/api/`, `/sales/`, `/training/`, `/questionnaire/` disallowed in `robots.ts` | Good | — | — |
| Sitemap declared at `https://quantlabusa.dev/sitemap.xml` in `robots.ts` | Currently 404 | **P0** | Redeploy (see above). |
| No `hreflang` tags | Acceptable for US-only single-language site | — | — |
| No 404 page custom design | Unknown without deploy | **P2** | Verify `src/app/not-found.tsx` exists and is branded with internal links back to `/services`, `/work`, `/`. |
| Trailing slash handling | `/services/` returns 308 → `/services` (good — single canonical form) | — | — |

### Accessibility (a few SEO-overlapping items)

| Item | Status | Severity | Fix |
| --- | --- | --- | --- |
| All `<img>` have `alt` | Per spot check, yes (logo, founder) | — | — |
| `aria-label` on scroll-indicator button + social links | Good | — | — |
| No skip-to-content link | Minor | **P2** | Add `<a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>` in layout, give `<main>` `id="main"`. |
| Color contrast (`text-gray-400` on dark) | Likely passes WCAG AA on `bg-quant-bg` but borderline on body copy | **P2** | Spot-check with axe DevTools post-deploy. |

---

## Top 10 Prioritized Action List (concrete code/config changes)

> Apply in this order. Items 1–3 are **same day**; items 4–10 within a week.

### 1. (P0) Redeploy the production build — fixes ~60% of every finding

The single largest issue. The deployed Vercel build is 10+ days stale and is missing every code change since.

```bash
# From repo root, after confirming `master` has the intended commits
git push origin master                # if not already
# OR force a fresh prod build directly
vercel --prod
```

Then verify these all return **HTTP 200** with the expected content:

```bash
curl -s -o /dev/null -w "%{http_code} %{url_effective}\n" \
  https://quantlabusa.dev/ \
  https://quantlabusa.dev/robots.txt \
  https://quantlabusa.dev/sitemap.xml \
  https://quantlabusa.dev/services \
  https://quantlabusa.dev/services/penetration-testing \
  https://quantlabusa.dev/about \
  https://quantlabusa.dev/work \
  https://quantlabusa.dev/faq
```

If a redeploy still fails to render OG tags / JSON-LD, the bug is the Next App-Router's `metadata` export not being picked up — bisect by checking the Vercel build log for "Generating static pages" output.

### 2. (P0) Add the missing static assets to `public/`

Generate from existing `public/logo.png` using ImageMagick or Squoosh:

```bash
cd /Users/williambeltz/Documents/softwaredev/public
# Apple touch icon
magick logo.png -resize 180x180 -strip apple-touch-icon.png
# PWA icons
magick logo.png -resize 192x192 -strip icon-192.png
magick logo.png -resize 512x512 -strip icon-512.png
# OG image (1200x630 with brand padding)
magick logo.png -resize 512x512 -background "#0d1526" -gravity center -extent 1200x630 og-image.png
```

Then add `public/founder.jpg` (a real portrait, 768×768, <120 KB).

Commit and redeploy. Manifest installs, Apple touch icons, About page hero, and social previews all become functional.

### 3. (P0) Fix the `openGraph.images` entry + Twitter card type in `layout.tsx`

```ts
// src/app/layout.tsx
openGraph: {
  title: "QuantLab Software Solutions | Custom Software & Cybersecurity in Georgia",
  description:
    "Custom software development, algorithmic trading systems, web applications, and penetration testing. Founder-led shop in Macon, GA — serving Atlanta, Austin, Dallas, Miami, NYC, and more.",
  url: "https://quantlabusa.dev",
  siteName: "QuantLab Software Solutions",
  images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "QuantLab Software Solutions" }],
  locale: "en_US",
  type: "website",
},
twitter: {
  card: "summary_large_image",  // was "summary"
  title: "QuantLab Software Solutions",
  description:
    "Custom software, algorithmic trading systems, and penetration testing. Founder-led in Georgia.",
  images: ["/og-image.png"],
},
alternates: { canonical: "/" },  // add this
```

### 4. (P0) Replace the Organization + LocalBusiness JSON-LD in `layout.tsx`

Currently missing `telephone`, real address, geo coordinates, multi-city `areaServed`, `priceRange`, `sameAs`, and `contactPoint`. Replace the `structuredData` constant (`src/app/layout.tsx:45-111`) with:

```ts
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://quantlabusa.dev/#organization",
      name: "QuantLab Software Solutions",
      legalName: "QuantLab Software Solutions",
      url: "https://quantlabusa.dev",
      logo: "https://quantlabusa.dev/logo.png",
      image: "https://quantlabusa.dev/og-image.png",
      email: "beltz@quantlabusa.dev",
      telephone: "+17706521282",
      description:
        "Custom software development and cybersecurity services. CRM systems, trading bots, web applications, and penetration testing.",
      founder: { "@id": "https://quantlabusa.dev/#founder" },
      sameAs: [
        "https://linkedin.com/in/williambeltz",
        "https://github.com/williambeltz",
        "https://linkedin.com/company/quantlab-software-solutions"
      ],
      contactPoint: [{
        "@type": "ContactPoint",
        telephone: "+1-770-652-1282",
        email: "beltz@quantlabusa.dev",
        contactType: "sales",
        areaServed: "US",
        availableLanguage: ["English"]
      }]
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://quantlabusa.dev/#localbusiness",
      name: "QuantLab Software Solutions",
      url: "https://quantlabusa.dev",
      logo: "https://quantlabusa.dev/logo.png",
      image: "https://quantlabusa.dev/og-image.png",
      email: "beltz@quantlabusa.dev",
      telephone: "+17706521282",
      priceRange: "$$-$$$",
      description:
        "Custom software development and cybersecurity services.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Macon",
        addressRegion: "GA",
        addressCountry: "US"
      },
      geo: { "@type": "GeoCoordinates", latitude: 32.8407, longitude: -83.6324 },
      areaServed: [
        { "@type": "City", name: "Macon" },
        { "@type": "City", name: "Atlanta" },
        { "@type": "City", name: "Augusta" },
        { "@type": "City", name: "Columbus" },
        { "@type": "City", name: "Savannah" },
        { "@type": "City", name: "Miami" },
        { "@type": "City", name: "Austin" },
        { "@type": "City", name: "Dallas" },
        { "@type": "City", name: "Chicago" },
        { "@type": "City", name: "Seattle" },
        { "@type": "City", name: "New York" },
        { "@type": "City", name: "Charlotte" },
        { "@type": "City", name: "Nashville" },
        { "@type": "City", name: "San Francisco" }
      ],
      founder: { "@id": "https://quantlabusa.dev/#founder" },
      openingHoursSpecification: [{
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        opens: "09:00",
        closes: "18:00"
      }],
      serviceType: [
        "Custom Software Development",
        "Algorithmic Trading Systems",
        "Web Application Development",
        "Payments, Invoicing, and Licensing",
        "Penetration Testing",
        "Cloud Infrastructure"
      ]
    },
    {
      "@type": "Person",
      "@id": "https://quantlabusa.dev/#founder",
      name: "William Beltz",
      jobTitle: "Founder & Lead Engineer",
      email: "beltz@quantlabusa.dev",
      telephone: "+17706521282",
      worksFor: { "@id": "https://quantlabusa.dev/#organization" },
      sameAs: [
        "https://linkedin.com/in/williambeltz",
        "https://github.com/williambeltz"
      ]
    }
  ]
};
```

After deploy, validate at `https://validator.schema.org/?url=https://quantlabusa.dev/` and `https://search.google.com/test/rich-results?url=https://quantlabusa.dev/`.

### 5. (P0) Trim oversized titles to ~60 chars in service subpages

```ts
// services/penetration-testing/page.tsx
title: "Penetration Testing & Red Team in Georgia | QuantLab",          // 53 chars
// services/algorithmic-trading-systems/page.tsx
title: "Algorithmic Trading Systems Development | QuantLab",           // 50 chars
// services/cloud-infrastructure/page.tsx
title: "Cloud Infrastructure & DevOps Consulting | QuantLab",          // 52 chars
// services/payments-invoicing-licensing/page.tsx
title: "Stripe Integration & License Management | QuantLab",           // 52 chars
// services/custom-business-software/page.tsx (already 56 chars — OK)
// services/web-applications/page.tsx (49 chars — OK)
```

### 6. (P1) Add the GSC verification token

Replace `layout.tsx:124` placeholder. After verifying domain ownership in Google Search Console, paste the token:

```tsx
<meta name="google-site-verification" content="YOUR-REAL-TOKEN-HERE" />
```

Submit `https://quantlabusa.dev/sitemap.xml` in GSC > Sitemaps. Same for Bing Webmaster.

### 7. (P1) Extend `sitemap.ts` to include `/work/[slug]` case studies

```ts
// src/app/sitemap.ts
import { caseStudies } from "@/lib/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quantlabusa.dev";
  const lastModified = new Date();
  const staticEntries: MetadataRoute.Sitemap = [/* existing entries */];
  const workEntries: MetadataRoute.Sitemap = caseStudies.map((cs) => ({
    url: `${baseUrl}/work/${cs.slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.6,
  }));
  return [...staticEntries, ...workEntries];
}
```

### 8. (P1) Add `next.config.ts` headers + image optimization

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
          { key: "X-DNS-Prefetch-Control", value: "on" },
        ],
      },
      {
        source: "/_next/static/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};
export default nextConfig;
```

### 9. (P1) Compress `logo.png`, drop the unused 2.3MB asset, fix preload

```bash
cd /Users/williambeltz/Documents/softwaredev/public
# Recompress
magick logo.png -strip -resize 1024x1024 -define png:compression-level=9 logo.png
# Drop the 2.3MB unused asset
git mv thequantlabxTJ5automailer.png ../pics/  # or delete if unused
```

And in `layout.tsx`, remove this preload (let `next/image priority` handle it):

```diff
- <link rel="preload" as="image" href="/logo.png" />
```

(Note: this `<link>` is auto-injected by `next/image priority`, not by you. Trim the Hero `<Image>` `sizes` instead — see finding above.)

### 10. (P1) Add a geo-tuned H1 to the homepage + an `<address>` block with NAP

In `Hero.tsx`, change words array (or add an accessible-only H1) so the homepage actually targets "custom software development in Georgia":

```tsx
{/* visible decorative heading */}
<h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 max-w-5xl leading-[1.05]">
  Custom Software & Cybersecurity in <span className="text-quant-blue">Georgia</span>
</h1>
```

And in `Footer.tsx`, replace "Based in Georgia, USA" with a proper `<address>` block:

```tsx
<address className="not-italic flex flex-col gap-1 text-gray-500 text-sm">
  <span className="flex items-center gap-2"><MapPin className="w-4 h-4" />Macon, Georgia, USA</span>
  <a href="tel:+17706521282" className="hover:text-white">(770) 652-1282</a>
  <a href="mailto:beltz@quantlabusa.dev" className="hover:text-white">beltz@quantlabusa.dev</a>
</address>
```

This adds telephone NAP across every page footer and gives Google a consistent local-business signal.

---

## Bonus / P2 Backlog (do after the top 10)

- Build per-metro landing pages: `/locations/atlanta-ga`, `/locations/austin-tx`, `/locations/miami-fl`, etc. Each ~600 words with city-specific case-study mentions, geo-tagged JSON-LD `LocalBusiness` variant, and an internal link to `/services`.
- Add `BreadcrumbList` JSON-LD on `/services/[slug]` and `/work/[slug]` pages.
- Add an `OfferCatalog` to the Organization schema enumerating each service with prices/ranges.
- Internal-linking pass: from each `/services/[slug]` page, link to 2–3 relevant `/work/[slug]` case studies (proves expertise; spreads PageRank).
- Generate per-page OG images via Vercel OG (`@vercel/og`) — one image per route, with title text rendered server-side.
- Run `@next/bundle-analyzer` to identify whether `framer-motion` + Three.js (`HeroCanvas`) can be dynamically imported with `ssr: false`.
- Add a 301 redirect from `https://www.quantlabusa.dev/` → `https://quantlabusa.dev/` (verify www subdomain is configured; if not, ignore).
- Implement Sentry/Plausible for real-user CWV monitoring (the `Analytics` component exists — verify it's actually firing post-deploy).
- Schedule a re-audit 14 days after redeploy to verify all P0/P1 items resolve and pick up new findings from Lighthouse.

---

## Appendix A — Live HTTP Snapshot (2026-05-12)

| URL | HTTP | Notes |
| --- | --- | --- |
| `https://quantlabusa.dev/` | 200 | 62 KB HTML, TTFB 126 ms, `x-vercel-cache: HIT`, age 911,423 s (~10.5 days stale) |
| `/robots.txt` | **404** | |
| `/sitemap.xml` | **404** | |
| `/services` | **404** | |
| `/services/custom-business-software` | **404** | |
| `/services/algorithmic-trading-systems` | **404** | |
| `/services/web-applications` | **404** | |
| `/services/penetration-testing` | **404** | |
| `/services/cloud-infrastructure` | **404** | |
| `/services/payments-invoicing-licensing` | **404** | |
| `/about` | **404** | |
| `/work` | **404** | |
| `/faq` | **404** | |
| `/privacy` | **404** | |
| `/terms` | **404** | |
| `/manifest.json` | **404** | |
| `/apple-touch-icon.png` | **404** | |
| `/icon-192.png` | **404** | |
| `/icon-512.png` | **404** | |
| `/founder.jpg` | **404** | |
| `/og-image.png` | **404** | |
| `/logo.png` | 200, 433 KB unoptimized PNG | |
| `/_next/image?url=%2Flogo.png&w=3840&q=75` (WebP) | 200, ~16 KB | confirms Next/Image works |

## Appendix B — Files Inspected (local source)

- `/Users/williambeltz/Documents/softwaredev/src/app/layout.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/page.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/robots.ts`
- `/Users/williambeltz/Documents/softwaredev/src/app/sitemap.ts`
- `/Users/williambeltz/Documents/softwaredev/src/app/services/page.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/services/custom-business-software/page.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/services/penetration-testing/page.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/services/algorithmic-trading-systems/page.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/services/web-applications/page.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/services/cloud-infrastructure/page.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/services/payments-invoicing-licensing/page.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/about/page.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/work/page.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/work/[slug]/page.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/faq/page.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/privacy/page.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/app/terms/page.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/components/Navbar.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/components/Hero.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/components/Services.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/components/Footer.tsx`
- `/Users/williambeltz/Documents/softwaredev/src/components/Contact.tsx`
- `/Users/williambeltz/Documents/softwaredev/next.config.ts`
- `/Users/williambeltz/Documents/softwaredev/public/manifest.json`

---

*End of audit. Re-run after redeploy lands.*
