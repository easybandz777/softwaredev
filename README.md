# QUANT LAB USA INC

Custom software, payments infrastructure, and offensive-security services for small and mid-market businesses. The marketing site, lead pipeline, and admin tooling for [quantlabusa.dev](https://quantlabusa.dev) all live in this monorepo.

![Vercel Deployment](https://img.shields.io/badge/vercel-deployed-000?logo=vercel)
![Next.js](https://img.shields.io/badge/next.js-16-black?logo=nextdotjs)
![React](https://img.shields.io/badge/react-19-149eca?logo=react)
![TypeScript](https://img.shields.io/badge/typescript-5-3178c6?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/tailwind-4-38bdf8?logo=tailwindcss)
![PostgreSQL](https://img.shields.io/badge/postgres-vercel-336791?logo=postgresql)
![License](https://img.shields.io/badge/license-proprietary-lightgrey)

---

## About QUANT LAB

QUANT LAB USA INC is a Georgia C-Corp headquartered in Macon, GA, serving clients across Atlanta, Savannah, Augusta, Columbus, and the broader Southeast U.S. The firm sits at the intersection of three practices:

- **Custom software** — Next.js web apps, internal tools, SaaS platforms, mobile companions, and AI integrations
- **Payments & licensing** — Stripe integration, subscription billing, license servers, and invoicing infrastructure
- **Offensive security** — penetration testing (web, network, Active Directory), MITRE ATT&CK assessments, and red-team engagements

We build, ship, and defend production systems. No retainer fluff, no enterprise drag.

---

## Live Site

Production: **<https://quantlabusa.dev>**

The site auto-deploys from `master` to Vercel on every push. Preview deployments are spun up for every PR.

---

## Stack

```
+-----------------------------+--------------------------------------------------+
| Layer                       | Technology                                       |
+-----------------------------+--------------------------------------------------+
| Framework                   | Next.js 16 (App Router, RSC, Turbopack)          |
| UI                          | React 19, Tailwind CSS 4, Framer Motion 12       |
| Language                    | TypeScript 5 (strict)                            |
| Database                    | Vercel Postgres (@vercel/postgres)               |
| Payments                    | Stripe (Checkout, Billing, Webhooks)             |
| Transactional email         | Resend + Nodemailer fallback                     |
| Email ingestion             | IMAP (imapflow) for inbound parsing              |
| LLM providers               | Anthropic (claude), OpenAI                       |
| Web scraping / enrichment   | cheerio, Apify, Puppeteer                        |
| Auth                        | bcryptjs + custom session cookies                |
| Hosting                     | Vercel (Edge + Node runtimes)                    |
| Icons                       | lucide-react                                     |
+-----------------------------+--------------------------------------------------+
```

---

## Local Development

Requirements: Node.js 20+, npm 10+, a Postgres connection string, and API keys for Stripe, Resend, and Anthropic/OpenAI if exercising those code paths.

```bash
# Install
npm install

# Dev server (http://localhost:3000)
npm run dev

# Production build
npm run build

# Start built app
npm start

# Lint
npm run lint
```

Environment variables go in `.env.local`. The app reads from `process.env` directly — there is no central config object. See the relevant `src/lib/*` and `src/app/api/*` files for the variable names each subsystem expects (Stripe keys, `POSTGRES_URL`, `RESEND_API_KEY`, `ANTHROPIC_API_KEY`, etc.).

---

## Architecture

The repository is a single Next.js 16 App Router project. Routes are filesystem-based under `src/app/`.

### Top-level route layout

```
src/app/
  page.tsx                      # Home
  layout.tsx                    # Root layout, fonts, metadata
  globals.css                   # Tailwind 4 entrypoint
  robots.ts                     # Generated robots.txt
  sitemap.ts                    # Generated sitemap.xml
  sitemap-index.xml/            # Sitemap index
  image-sitemap.xml/            # Image sitemap
  feed.xml/                     # RSS feed
  not-found.tsx                 # 404
  middleware.ts (in src/)       # Edge middleware

  about/, contact/, faq/
  privacy/, terms/, security/
  press/, press-kit/, reviews/
  certifications-credentials/
  methodology/, process/, pricing/

  services/                     # Service offerings (one route per service)
  industries/                   # Vertical landing pages
  vs/                           # Competitor / alternative comparisons
  software-development-{city}/  # Geo landing pages (Atlanta, Macon, Austin, ...)
  locations/                    # Office / service-area pages
  blog/                         # Long-form content
  glossary/                     # Definitional pages ("what-is-*")
  calculators/                  # Interactive ROI / cost calculators

  sales/, questionnaire/        # Lead capture & qualification
  search/                       # On-site search
  resources/                    # Lead magnets, downloads

  admin/                        # Authenticated admin console
  api/                          # Route handlers (see below)
```

### Service routes (`src/app/services/`)

Each service has its own page with structured data (Service schema), pricing, scope, and a lead CTA. Current offerings include custom CRM development, SaaS platform development, Stripe integration, subscription billing, AI integration, web/mobile/API development, cloud infrastructure, DevOps, and an offensive-security suite (web app pentest, network pentest, Active Directory pentest, MITRE ATT&CK assessment, license server).

### Industries (`src/app/industries/`)

Vertical landing pages for construction, e-commerce, fintech, healthcare, insurance, legal services, manufacturing, real estate, and SaaS.

### Comparisons (`src/app/vs/`)

Comparison pages targeting decision-stage search intent: vs Salesforce, HubSpot, Shopify, Webflow, WordPress, Toptal, Upwork, and Big-4 pentest firms.

### Geo pages (`src/app/software-development-{city}/`)

City-targeted landing pages for Atlanta, Augusta, Macon, Savannah, Columbus (GA), Austin, Dallas, Charlotte, Nashville, Miami, Chicago, New York, San Francisco, and Seattle.

### Blog (`src/app/blog/`)

Topic-clustered guides: Atlanta dev-shop directories, build-vs-buy analysis, pentest cost breakdowns, CRM comparisons, Next.js + Stripe integration guide, MITRE ATT&CK explainer, and more. Each post emits Article + Breadcrumb JSON-LD.

### Glossary (`src/app/glossary/`)

Twenty "what-is-X" definitional pages covering CRMs, APIs, MVPs, SaaS, SSR, Jamstack, REST vs GraphQL, webhooks, HIPAA, PCI-DSS, SOC 2, OWASP Top 10, MITRE ATT&CK, zero trust, WAFs, red teams, Active Directory, multi-tenant SaaS, penetration testing, and Next.js. Each page emits FAQ schema for AI Overviews and rich results.

### Calculators (`src/app/calculators/`)

Interactive client-side calculators: build-vs-buy, CRM ROI, pentest cost, Stripe cost. Each ships with HowTo schema.

### API routes (`src/app/api/`)

```
api/
  leads/            # Inbound lead intake → Postgres + Resend notification
  consultations/    # Booking / calendar flow
  questionnaire/    # Multi-step qualifier → admin dashboard
  sales/            # Sales-side endpoints (assets, signed URLs, tracking)
  admin/            # Auth-gated admin actions
  track/            # Analytics & event ingest
  verify/           # Email / domain verification helpers
  activate/         # Customer / license activation
  deactivate/       # Customer / license deactivation
  sitemap-ping/     # Search-engine sitemap pings on deploy
```

---

## Schemas (structured data)

All JSON-LD schema builders live in [`src/lib/schemas/`](src/lib/schemas/). Every public page emits the appropriate subset:

- `organization.ts` — Organization + LocalBusiness identity
- `localBusiness.ts` — Geo + NAP + service-area
- `service.ts` — Service schema for each service offering
- `website.ts` — WebSite + Sitelinks search box
- `breadcrumb.ts` — BreadcrumbList for every nested page
- `article.ts` — Article schema for blog posts
- `faq.ts` — FAQPage for glossary + service FAQs
- `howTo.ts` — HowTo for calculators + process pages
- `review.ts`, `aggregateRating.ts` — Reviews + ratings
- `person.ts` — Founder / author schema

Combined into typed builders and exported through [`src/lib/schemas/index.ts`](src/lib/schemas/index.ts).

---

## Lib

```
src/lib/
  schemas/        # JSON-LD builders (see above)
  llm/            # LLM provider abstractions (Anthropic + OpenAI BYOK)
  search/         # On-site search index + ranking
  stt/            # Speech-to-text helpers
  db.ts           # Postgres client (@vercel/postgres) + query helpers
  auth.ts         # Session / cookie auth for admin routes
  mailer.ts       # Resend + Nodemailer wrappers
  email-sync.ts   # Inbound IMAP parsing
  places.ts       # Geo helpers for city/state pages
  scraper.ts      # cheerio + Puppeteer scraping
  apify.ts        # Apify task triggers
  cadence.ts      # Outreach cadence engine
  case-studies.ts # Case-study content loader
  imageMeta.ts    # OG image + image-sitemap metadata
  temperature.ts  # Lead temperature scoring
  utils.ts        # Misc helpers (clsx + tailwind-merge)
```

---

## Public assets

```
public/
  llms.txt          # LLM crawler hint file
  press-kit/        # Press kit assets
  *.png, *.svg      # Logos, OG images, icons
```

---

## Deployment

- **Hosting:** Vercel
- **Production branch:** `master` — pushes auto-deploy
- **Preview deployments:** every PR / non-master branch
- **Region:** primary IAD1 (US East)
- **Postgres:** Vercel Postgres, connected via `POSTGRES_URL`
- **Edge middleware:** `src/middleware.ts` handles redirects, country headers, and rate-limiting hints
- **Sitemap pinging:** `/api/sitemap-ping` is fired post-deploy to notify Google + Bing

A successful build requires every route to render statically or with valid revalidation; `npm run build` will fail loudly on a bad route.

---

## Repository hygiene

- TypeScript `strict` mode is on. Do not loosen it.
- ESLint runs via `npm run lint` (`eslint-config-next`).
- No CI workflow is required — Vercel's build is the source of truth.
- Pre-PR checklist: `npm run lint && npm run build` both pass locally.
- See [SECURITY.md](SECURITY.md) for vulnerability disclosure.
- See [CITATION.cff](CITATION.cff) for citation metadata.

---

## License

This repository is proprietary to QUANT LAB USA INC. All rights reserved. No license is granted for reuse, redistribution, or derivative works without written permission.

---

## Contact

- Founder: Bill Beltz
- Email: <beltz@quantlabusa.dev>
- Security disclosures: <security@quantlabusa.dev>
- Website: <https://quantlabusa.dev>
- Location: Macon, GA, United States
- Entity: QUANT LAB USA INC (Georgia C-Corp, GA SOS #26086454)
