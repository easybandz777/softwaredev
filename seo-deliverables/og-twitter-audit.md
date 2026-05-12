# Open Graph + Twitter Card Audit (Live Site)

**Audit date:** 2026-05-12
**Host:** https://quantlabusa.dev
**Method:** `curl` + regex extraction of meta tags inside `<head>`
**Sample size:** 31 URLs (homepage + top services/blog/vs/calculators/info pages)

---

## Summary

| Field | Missing | Out of |
|---|---|---|
| og:image | **29** | 31 |
| og:description | 0 | 31 |
| og:url | 0 | 31 |
| og:type | 0 | 31 |
| twitter:card | 0 | 31 |
| twitter:image | **16** | 31 |
| canonical | 0 | 31 |

## Top Findings

1. **`og:image` is missing on 29 of 31 audited URLs.** Only `/pricing` and `/blog/custom-crm-development-guide` emit it correctly. Every service page, every `/vs/*` comparison, every `/calculators/*`, plus `/`, `/contact`, `/work`, `/blog`, `/glossary`, `/resources`, `/methodology`, and `/security` rely on the parent fallback that emits `twitter:image` but never `og:image`.
2. **`twitter:image` is missing on 16 of 31 URLs.** All 7 `/vs/*` pages, all 4 `/calculators/*`, plus `/contact`, `/services/stripe-integration`, `/services/web-app-pentest`, `/resources`, and the homepage `/` lack any `twitter:image`. Without it, Twitter/X falls back to `summary` rendering even though `twitter:card=summary_large_image` is set.
3. **The homepage `/` is the worst offender** — it has neither `og:image` nor `twitter:image`. Social shares of the root domain currently render as a plain text card with no preview image. This is the single highest-traffic share target.
4. **All pages do have** `og:title`, `og:description`, `og:url`, `og:type`, `twitter:card`, `twitter:title`, `twitter:description`, and a `canonical` link — so the metadata wiring itself works; the gap is image emission.
5. **`og:type` is consistent** — blog post and service pages declare `article`, marketing pages declare `website`. No misclassifications detected in the sample.

## Per-URL Audit Table

| URL | og:title | og:image | og:type | twitter:card | twitter:image | Issues |
|---|---|---|---|---|---|---|
| `/` | Custom Software Development & Cybersecu... | (missing) | website | summary_large_image | (missing) | no og:image, no twitter:image |
| `/blog/custom-crm-development-guide` | Custom CRM Development: The Complete Gu... | https://quantlabusa.dev/og/custom-crm-development... | article | summary_large_image | https://quantlabusa.dev/og/custom-crm-development... | ok |
| `/services/custom-crm-development` | Custom CRM Development for Companies Th... | (missing) | article | summary_large_image | https://quantlabusa.dev/og-image.png | no og:image |
| `/services/penetration-testing` | We Break In So Someone Else Doesn't. | (missing) | article | summary_large_image | https://quantlabusa.dev/og-image.png | no og:image |
| `/services/stripe-integration` | Custom Stripe Integration That Goes Bey... | (missing) | article | summary_large_image | (missing) | no og:image, no twitter:image |
| `/services/mobile-app-development` | Mobile App Development for Companies Pa... | (missing) | article | summary_large_image | https://quantlabusa.dev/og-image.png | no og:image |
| `/services/api-development` | Custom API Development for Companies Th... | (missing) | article | summary_large_image | https://quantlabusa.dev/og-image.png | no og:image |
| `/services/saas-platform-development` | SaaS Platform Development for Founders ... | (missing) | article | summary_large_image | https://quantlabusa.dev/og-image.png | no og:image |
| `/services/devops-engineering` | DevOps Engineering for Teams Tired of 3... | (missing) | article | summary_large_image | https://quantlabusa.dev/og-image.png | no og:image |
| `/services/ai-integration-services` | AI Integration Services That Actually S... | (missing) | article | summary_large_image | https://quantlabusa.dev/og-image.png | no og:image |
| `/services/ecommerce-development` | Custom Ecommerce Development for Brands... | (missing) | article | summary_large_image | https://quantlabusa.dev/og-image.png | no og:image |
| `/services/web-app-pentest` | Web Application Penetration Testing — O... | (missing) | article | summary_large_image | (missing) | no og:image, no twitter:image |
| `/pricing` | Transparent Pricing — Custom Software &... | https://quantlabusa.dev/og-image.png | website | summary_large_image | https://quantlabusa.dev/og-image.png | ok |
| `/contact` | Contact QUANT LAB USA \| Custom Softwar... | (missing) | website | summary_large_image | (missing) | no og:image, no twitter:image |
| `/work` | Case Studies \| QuantLab Software Solut... | (missing) | website | summary_large_image | https://quantlabusa.dev/og-image.png | no og:image |
| `/blog` | Blog \| QUANT LAB USA | (missing) | website | summary_large_image | https://quantlabusa.dev/og-image.png | no og:image |
| `/vs/salesforce` | Custom CRM Development vs Salesforce \|... | (missing) | article | summary_large_image | (missing) | no og:image, no twitter:image |
| `/vs/hubspot` | QUANT LAB vs HubSpot: 2026 CRM Comparis... | (missing) | article | summary_large_image | (missing) | no og:image, no twitter:image |
| `/vs/toptal` | QUANT LAB vs Toptal: 2026 Dev Agency Co... | (missing) | article | summary_large_image | (missing) | no og:image, no twitter:image |
| `/vs/upwork` | QUANT LAB vs Upwork: 2026 Custom Build ... | (missing) | article | summary_large_image | (missing) | no og:image, no twitter:image |
| `/vs/webflow` | QUANT LAB vs Webflow: 2026 Web App Comp... | (missing) | article | summary_large_image | (missing) | no og:image, no twitter:image |
| `/vs/wordpress` | QUANT LAB vs WordPress: 2026 Web App Co... | (missing) | article | summary_large_image | (missing) | no og:image, no twitter:image |
| `/vs/shopify` | Custom E-commerce Development vs Shopif... | (missing) | article | summary_large_image | (missing) | no og:image, no twitter:image |
| `/calculators/stripe-cost` | Stripe Integration Cost Calculator \| Q... | (missing) | website | summary_large_image | (missing) | no og:image, no twitter:image |
| `/calculators/crm-roi` | Custom CRM ROI Calculator \| Salesforce... | (missing) | website | summary_large_image | (missing) | no og:image, no twitter:image |
| `/calculators/pentest-cost` | Web App Pentest Cost Estimator \| SOC 2... | (missing) | website | summary_large_image | (missing) | no og:image, no twitter:image |
| `/calculators/build-vs-buy` | Build vs Buy Calculator \| Custom Softw... | (missing) | website | summary_large_image | (missing) | no og:image, no twitter:image |
| `/glossary` | The QUANT LAB Glossary | (missing) | website | summary_large_image | https://quantlabusa.dev/og-image.png | no og:image |
| `/resources` | Resource Library — Playbooks, Checklist... | (missing) | website | summary_large_image | (missing) | no og:image, no twitter:image |
| `/methodology` | How We Build \| QUANT LAB Methodology —... | (missing) | article | summary_large_image | https://quantlabusa.dev/og-image.png | no og:image |
| `/security` | Security Practices \| QUANT LAB USA — H... | (missing) | article | summary_large_image | https://quantlabusa.dev/og-image.png | no og:image |

## Root Cause

`src/app/layout.tsx` declares site-wide metadata that sets a default `metadataBase`, but individual page-level `Metadata` exports (in `src/app/**/page.tsx`) do NOT consistently include an `openGraph.images` array. Next.js does NOT auto-promote the layout's openGraph block to child pages when the child page itself exports `metadata` — the child's `openGraph` object fully replaces the parent's. Many pages set their own `openGraph` for title/description/url/type but forget to re-declare `images`, which is why `og:image` disappears while `og:title` survives.

## Recommended Fix Pattern

A new utility `src/lib/seoMeta.ts` has been added in this branch. It exports `pageMetadata({ title, description, image, type, canonical, slug })` which returns a Next.js `Metadata` object pre-populated with full openGraph + twitter blocks (including `images`, `width`, `height`, `alt`).

**Future pages should call `pageMetadata(...)` instead of hand-crafting `openGraph`/`twitter` objects.** Existing pages can be migrated incrementally — replacing a hand-written `openGraph: { title, description, url, type }` block with `pageMetadata({...})` will automatically include the image array.

Example usage:

```ts
import { pageMetadata } from '@/lib/seoMeta';

export const metadata = pageMetadata({
  title: 'Custom CRM Development | QUANT LAB USA',
  description: 'Founder-led CRM builds for SMBs and mid-market.',
  image: '/og-crm.png',
  type: 'article',
  canonical: '/services/custom-crm-development',
});
```

## Priority Pages To Migrate

Order by share-volume potential (highest first):

1. `/` — homepage, highest-volume share target. Missing both og:image and twitter:image.
2. `/services/stripe-integration` — missing both. Strong commercial keyword.
3. `/services/web-app-pentest` — missing both. High-value security buyer.
4. `/contact` — missing both. Final-step share-back URL.
5. `/vs/*` (7 pages) — all missing both. Comparison pages get heavy Reddit/HN sharing.
6. `/calculators/*` (4 pages) — all missing both. Lead-magnet pages.
7. `/resources` — missing both.
8. Service pages with `twitter:image` but no `og:image` (8 pages) — fix is dropping in a single line.

## OG Image Inventory (in `public/`)

Existing images suitable as kind-specific defaults:
- `og-image.png` — generic site default (1200x630)
- `og-image-square.png` — square variant
- `og-crm.png` — CRM service
- `og-pentest.png` — penetration testing service
- `og-stripe.png` — Stripe integration
- `og-services.png` — generic services hub
- `og-trading.png` — trading systems
- `og-web-apps.png` — web apps
- `twitter-card.png` — Twitter-specific fallback

Pages currently lacking a kind-specific OG image and falling back to the generic `og-image.png`:
- `/glossary` -> needs `og-glossary.png`
- `/resources` -> needs `og-resources.png`
- `/methodology` -> needs `og-methodology.png`
- `/security` -> needs `og-security.png`
- `/pricing` -> needs `og-pricing.png`
- city/location landing pages -> needs `og-locations.png`

(See "Variant generation" section below for status of these new images.)

## Variant Generation Status

**ImageMagick:** Available (`/opt/homebrew/bin/magick`, ImageMagick 7.1.2-21).

**Font:** `Helvetica-Bold` was unresolved on this macOS install. Substituted with `/System/Library/Fonts/Supplemental/Arial Bold.ttf` at 64pt with a `#a78bfa` (brand violet) fill and a 2px black stroke for legibility.

Six new variants generated, all 1200x630 PNG, layered on top of `og-image.png`:

| File | Size | Intended For |
|---|---|---|
| `public/og-glossary.png` | ~125 KB | `/glossary` |
| `public/og-resources.png` | ~127 KB | `/resources` |
| `public/og-locations.png` | ~125 KB | `/locations/**` (city pages) |
| `public/og-pricing.png` | ~121 KB | `/pricing` |
| `public/og-methodology.png` | ~128 KB | `/methodology` |
| `public/og-security.png` | ~125 KB | `/security` |

Generation command (per variant):

```bash
magick public/og-image.png \
  -gravity south \
  -font "/System/Library/Fonts/Supplemental/Arial Bold.ttf" \
  -pointsize 64 -fill "#a78bfa" -stroke "#000000" -strokewidth 2 \
  -annotate +0+50 "Glossary" \
  public/og-glossary.png
```

**Migration suggestion for downstream pages** (do NOT do this in this branch — touched by other agents):

```ts
export const metadata = pageMetadata({
  title: "Glossary | QUANT LAB USA",
  description: "Plain-English software engineering glossary.",
  image: "/og-glossary.png",
  type: "website",
  canonical: "/glossary",
});
```

## Deliverables Created In This Branch

- `seo-deliverables/og-twitter-audit.md` (this file)
- `src/lib/seoMeta.ts` (new helper: `pageMetadata`, `articleMetadata`, `comparisonMetadata`, `calculatorMetadata`)
- `public/og-glossary.png`
- `public/og-resources.png`
- `public/og-locations.png`
- `public/og-pricing.png`
- `public/og-methodology.png`
- `public/og-security.png`

No `page.tsx` or `layout.tsx` files were modified, per the no-touch constraint.
