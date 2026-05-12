# QUANT LAB USA — Client Case Studies

Six in-depth case studies of custom software, e-commerce, and operations platforms built by QUANT LAB USA (Macon, GA — founder: William Beltz). Each study is structured for SEO and conversion: client-name H1 with outcome hook, scannable narrative sections, measurable outcomes (estimated where flagged), draft testimonials for client confirmation, and internal-link suggestions to the relevant service and city pages.

All metrics flagged `[estimated]` should be confirmed with the client before publishing. All "DRAFT QUOTE" blocks must be approved by the named client in writing before going live.

---

## 1. Northcrest Fence & Gate

**Slug:** `/case-studies/northcrest-fence-and-gate/`

**`<title>`:** Northcrest Fence & Gate Case Study | Custom Sales & Proposal Platform | QUANT LAB USA

**`<meta description>`:** How QUANT LAB USA built a mobile-first sales platform with automated PDF proposal generation for Northcrest Fence & Gate, a premium Atlanta fencing contractor.

### H1: How Northcrest Fence & Gate Cut Proposal Turnaround From Days to Minutes With a Custom Sales Platform

#### Situation
Northcrest Fence & Gate is a premium fencing and gate contractor serving the Atlanta metro — Alpharetta, Roswell, Johns Creek, Milton, Marietta, and surrounding communities. After 10+ years and 2,000+ completed installations, the business had earned BBB accreditation, AFA membership, and a reputation for transparent, itemized proposals. But the sales process had not kept pace with the brand. Estimators returned from on-site consultations with handwritten notes, then manually typed proposals into Word documents back at the office — often hours or days after the homeowner had already gotten a competing quote.

#### Challenge
Premium fencing is a trust business. A homeowner getting four quotes wants the contractor whose paperwork looks as polished as their installation crews. The lag between consultation and proposal was costing Northcrest deals to faster, less qualified competitors. The team also needed:

- A mobile-first flow so estimators could quote from the truck, not from a desk back at the shop
- Itemized, branded PDF proposals that matched the company's premium positioning
- A central admin portal to manage leads, proposals, gallery content, and service-area pages
- A marketing site optimized for local Atlanta-area SEO across multiple county and city pages

#### Approach
QUANT LAB USA architected a unified Next.js 16 application combining a public marketing site, a multi-step estimate-capture flow, and an admin portal — all sharing one Prisma/Postgres data layer. The team used React 19, TypeScript, Tailwind, and shadcn/Base UI for a brand-consistent design system, with Framer Motion micro-interactions to reinforce the premium positioning. Proposal PDFs are generated server-side via `@react-pdf/renderer` and delivered transactionally through Resend, eliminating the manual Word-doc workflow.

#### Solution
What was built and shipped:

- **Public marketing site** with dedicated service pages (wood, vinyl, aluminum, chain link, custom gates, automatic gates, repair) and city/service-area pages for Atlanta-metro SEO
- **Estimate capture flow** — mobile-first, multi-step intake form routed to `/api/estimate` and stored against a Prisma lead model
- **Admin portal** at `/admin` for managing leads, proposals, gallery, content, and service areas
- **Automated PDF proposal generation** rendering itemized, branded estimates with the Northcrest visual identity
- **Transactional email** via Resend for proposal delivery and lead acknowledgments
- **Image-rich project gallery** organized by residential, commercial, and specialty installations
- **Contact and consultation forms** with structured zod validation and spam protection

#### Outcomes
- Proposal turnaround reduced from 1–3 business days to under 30 minutes [estimated]
- Estimator on-site close rate improved meaningfully on first-visit quotes [estimated — confirm with Northcrest]
- Service-area pages drove organic visibility across Alpharetta, Roswell, Johns Creek, Milton, Marietta, and surrounding suburbs [estimated]
- BBB-accredited, AFA-member credibility now mirrored in a digital experience that matches the brand
- Single admin portal replaced spreadsheets, email threads, and Word docs

```
DRAFT QUOTE — confirm with client

"QUANT LAB built us a system that finally matches the way we actually
run jobs. Quotes go out before the homeowner walks back inside. The
proposals look as good as our work, and the admin side keeps every
lead in one place. We close more first-visit estimates than we ever
have."

— Northcrest Fence & Gate ownership
```

**Tech stack:** Next.js 16, React 19, TypeScript, Prisma, PostgreSQL, Tailwind CSS, shadcn/Base UI, Framer Motion, `@react-pdf/renderer`, Resend, Vercel, zod

**Project duration:** ~8–10 weeks [estimated]

**Internal link suggestions:**
- Service: `/services/custom-software-development/`
- Service: `/services/web-design/`
- City: `/locations/atlanta/`
- City: `/locations/alpharetta/`

---

## 2. HobbsPeak (HobbsHats)

**Slug:** `/case-studies/hobbspeak-custom-hats/`

**`<title>`:** HobbsPeak Custom Hats Case Study | Headless E-Commerce + S&S Activewear API | QUANT LAB USA

**`<meta description>`:** QUANT LAB USA designed and built HobbsPeak.com — a custom hats e-commerce platform with live S&S Activewear catalog sync, AI digitizing, Stripe checkout, and a full admin operations suite.

### H1: How HobbsPeak Turned a Custom Headwear Brand Into a Live-Catalog E-Commerce Operation

#### Situation
HobbsPeak (operating as HobbsHats) is a family-owned West Georgia custom headwear and apparel brand serving construction crews, electricians, landscapers, churches, schools, and growing companies across the Southeast. The team needed to move from manual quoting and order tracking to a true e-commerce operation with live wholesale catalog pricing, digital proofs, and bulk-order workflows — without giving up the "every customer is taken care of personally" service model that defines the brand.

#### Challenge
Custom headwear is unusually complex to sell online:

- Inventory is essentially infinite (every S&S Activewear blank, in every color and size), but pricing is wholesale-tier and changes
- Each order needs a digital proof, decoration method selection (leather patch, embroidery, screen print), and artwork on file
- Repeat customers expect a portal — not a fresh quote form every time
- Owner needs an admin console covering products, pricing, orders, customers, messages, build sheets, and live builds

A standard Shopify build could not handle the live wholesale catalog sync or the artwork-digitizing pipeline.

#### Approach
QUANT LAB USA built HobbsPeak.com as a headless commerce platform on Next.js 16 + React 19, with Stripe checkout, Vercel Blob for artwork storage, Neon Postgres for transactional data, and a full server-side catalog pipeline that pulls live pricing and inventory from the S&S Activewear API. Email and order events are wired through Resend; shipping rates and labels are wired through EasyPost. The team built a proprietary digitizer subsystem combining `@imgly/background-removal`, `tesseract.js` OCR, `potrace` raster-to-vector tracing, `opentype.js` font handling, and a benchmark suite (`bench:digitizer`) to validate output quality. AI-assisted preview is exposed under `/api/digitize-ai-preview` for instant customer-facing proofs.

#### Solution
The platform shipped with:

- **Live S&S Activewear catalog sync** with full headwear catalog ingest, color/style search, and inventory data
- **Stripe-powered checkout** including webhook-driven order processing
- **Custom artwork pipeline** — upload, background removal, OCR, vectorization, font/text rendering, digitized output
- **Customer accounts** with order history, artwork on file, and reorder portal
- **Free quote tool** with 48-hour turnaround SLA and admin-side queue
- **Affiliate program** with dedicated affiliate dashboard, auth, store, and tracking
- **Admin console** covering orders, customers, messages, inventory, products, pricing, build sheets, live build templates, digitizer queue, and analytics
- **Local-SEO infrastructure** for Georgia industry verticals (trades, churches, schools)
- **Embedded blog system** for content marketing

#### Outcomes
- Quote turnaround reduced from days to under 48 hours, with most digital proofs returned the same day [estimated]
- Reorder rate increased meaningfully thanks to customer artwork-on-file portal [estimated]
- Owner workload shifted from manual quoting to reviewing AI-generated digitized previews [estimated]
- Single platform replaced separate tools for catalog, quotes, orders, customer comms, and affiliate tracking
- E-commerce + quote-driven revenue both grow through the same operations stack

```
DRAFT QUOTE — confirm with client

"We came to QUANT LAB because we needed something Shopify couldn't do —
live wholesale catalog, digitized artwork, and a real admin console.
William built all of it. Customers get proofs faster, repeat orders
are a two-click thing, and I can run the whole shop from one screen."

— HobbsPeak ownership
```

**Tech stack:** Next.js 16, React 19, TypeScript, Stripe, Neon (Postgres), Vercel Blob, Resend, EasyPost, S&S Activewear API, Tailwind CSS, Radix UI, Framer Motion, Zustand, `@imgly/background-removal`, tesseract.js, potrace, opentype.js, Vitest

**Project duration:** ~14–18 weeks [estimated]

**Internal link suggestions:**
- Service: `/services/ecommerce-development/`
- Service: `/services/custom-software-development/`
- Service: `/services/api-integrations/`
- City: `/locations/atlanta/`
- City: `/locations/macon/`

---

## 3. Bridgepointe Painting

**Slug:** `/case-studies/bridgepointe-painting/`

**`<title>`:** Bridgepointe Painting Case Study | QuickBooks Online Integration + Customer Portal | QUANT LAB USA

**`<meta description>`:** QUANT LAB USA built a luxury contractor platform for Bridgepointe Painting with deep QuickBooks Online sync, customer portal, employee management, and project tracking.

### H1: How Bridgepointe Painting Replaced Spreadsheets With a QuickBooks-Synced Operations Platform

#### Situation
Bridgepointe Painting is a luxury painting and remodeling contractor serving Atlanta-metro neighborhoods — Cobb, Roswell, Alpharetta, Sandy Springs, Kennesaw, Buckhead, Milton, Suwanee, and Marietta — with 18 years of experience and 240+ completed projects. The business operates at the "Premium scope, premium result" tier, taking on interior/exterior painting, cabinet spray, hardwood and tile installation, bathroom and kitchen remodels, hot-water pressure washing, and invitation-only full-home renovations. As scope grew, the back-office was still operating from a mix of Google Sheets, separate vendor lists, and a QuickBooks Online file that nobody else could access cleanly.

#### Challenge
The owner needed a single platform that did three things at once:

- **Bookkeeping parity** — every customer, vendor, item, and account in the app had to match QuickBooks Online so no double-entry, no drift
- **Operations** — employee and subcontractor management, project tracking, estimates, and invoices
- **Customer experience** — a portal where clients could review their project, see schedule, view documents, and stay informed

Off-the-shelf field-service software either lacked QBO depth or required brand-killing standard templates.

#### Approach
QUANT LAB USA built a bespoke Next.js/TypeScript platform with a deep QuickBooks Online integration layer — bi-directional sync of customers, vendors, items, and chart-of-accounts entities — backed by PostgreSQL and deployed on Vercel. The crew-facing experience lives at `/portal`, while admin tooling covers project lifecycle, estimates, invoices, employee/subcontractor management, and reporting. Branding leans into the "Where Craft Meets Home" luxury positioning, with editorial typography and full-bleed imagery.

#### Solution
What was delivered:

- **QuickBooks Online sync** for customers, vendors, items, and accounts (bi-directional, scheduled + on-demand)
- **Customer portal** with project status, document storage, and milestone visibility
- **Employee and subcontractor management** including roles, assignments, and contact records
- **Project tracking** from estimate to invoice to completion
- **Estimates and invoices** generated in-app, mirrored to QuickBooks
- **Premium marketing site** with service-area pages for nine Atlanta-metro cities and service detail pages for painting, flooring, bathrooms, kitchens, pressure washing, and select remodeling
- **Lead capture** via phone, contact form, and consultation request
- **Admin dashboards** for reporting and project pipeline

#### Outcomes
- Bookkeeping reconciliation time meaningfully reduced — QuickBooks file no longer requires manual entry from spreadsheets [estimated]
- Customer satisfaction reinforced by always-on portal access to project status [estimated]
- Single source of truth for crew assignments, vendor billing, and customer records
- Brand consistency from marketing site through portal and proposal — every touchpoint feels "premium scope"
- Owner reclaims hours per week previously spent on data entry [estimated]

```
DRAFT QUOTE — confirm with client

"QUANT LAB understood that our brand is luxury and our back-office had
to match. The QuickBooks integration alone saves us hours every week,
and our clients love the portal. William built exactly the platform
we needed — nothing off-the-shelf could have done this."

— Bridgepointe Painting ownership
```

**Tech stack:** Next.js, TypeScript, React, PostgreSQL, QuickBooks Online API, Tailwind CSS, Vercel

**Project duration:** ~12–16 weeks [estimated]

**Internal link suggestions:**
- Service: `/services/custom-software-development/`
- Service: `/services/api-integrations/`
- Service: `/services/quickbooks-integration/`
- City: `/locations/atlanta/`
- City: `/locations/marietta/`
- City: `/locations/alpharetta/`

---

## 4. ProtectWithBri

**Slug:** `/case-studies/protectwithbri-insurance-advisory/`

**`<title>`:** ProtectWithBri Case Study | Personal Insurance Advisor Landing Page | QUANT LAB USA

**`<meta description>`:** How QUANT LAB USA designed and built a high-conversion personal insurance advisory site for Brianna Willis at ProtectWithBri.com — built for clarity, trust, and consultation booking.

### H1: How ProtectWithBri Turned a Personal Insurance Practice Into a High-Trust, High-Conversion Web Presence

#### Situation
Brianna Willis is a licensed insurance advisor whose practice — ProtectWithBri — serves clients building their lives, couples protecting shared assets, young families with dependents, parents planning long-term legacies, and people who already carry coverage they don't fully understand. Her differentiator is consultative, no-pressure guidance: "You'll always feel heard — not sold to." The challenge: most insurance-advisor websites look like commission factories. Brianna needed a digital presence that reflected the actual experience clients had with her — calm, plain-spoken, and trustworthy — and that converted visitors into booked consultations.

#### Challenge
Insurance is a low-trust category online. The website had to:

- Communicate Brianna's voice and approach without industry jargon
- Cover four distinct services (life insurance, supplemental coverage, family protection reviews, general questions) on one page
- Capture qualified consultation requests with enough context for Brianna to prepare
- Avoid sales clichés — no scrolling testimonial carousels, no countdown timers, no fear-driven copy
- Load fast on mobile (most insurance research happens on phones)
- Be cheap to host and easy to evolve as Brianna's practice grew

#### Approach
QUANT LAB USA built ProtectWithBri.com as a focused single-page Next.js 15 / React 19 application, optimized for clarity and speed. The architecture is intentionally minimal — no external CMS, no analytics bloat, no third-party form services. Every section (Hero, Services, WhoIHelp, HowItWorks, WhyTrustBri, MeetBri, FAQ, ConsultationForm) is a standalone React component with co-located CSS modules, scroll-reveal animation, and a persistent sticky CTA on mobile to keep the consultation booking always one tap away.

#### Solution
What was delivered:

- **Conversion-optimized single-page site** with hero, services, who-I-help, how-it-works, why-trust-Bri, meet-the-advisor, FAQ, and consultation form sections
- **Cinematic hero background video** establishing tone within the first second
- **Consultation booking form** with structured intake — name, email, phone, preferred contact window, and service interest — routed to a server-side API endpoint
- **Sticky mobile CTA** keeping the booking action one tap away
- **Plain-language copy framework** built around "heard, not sold to"
- **Study-guide module** at `/study-guide` for educational content marketing
- **Lightweight footprint** — no external CMS, no analytics bloat, instant load
- **LinkedIn and direct-contact options** preserved for clients who prefer not to use the form

#### Outcomes
- Consultation-form completion rate meaningfully higher than industry average for insurance-advisor sites [estimated]
- Mobile load performance in the green for Core Web Vitals [estimated]
- Brianna's voice now scales — visitors get the consultative tone before they ever book
- Zero ongoing CMS or third-party form costs
- Site evolves quickly because the architecture is intentionally simple

```
DRAFT QUOTE — confirm with client

"William understood my practice before he wrote a line of code. The
site sounds like me, not like an insurance pitch. Clients tell me they
booked because the website felt honest — and that's exactly what I
wanted."

— Brianna Willis, ProtectWithBri
```

**Tech stack:** Next.js 15, React 19, TypeScript, CSS Modules, Vercel

**Project duration:** ~3–4 weeks [estimated]

**Internal link suggestions:**
- Service: `/services/web-design/`
- Service: `/services/lead-generation-websites/`
- City: `/locations/macon/`

---

## 5. J5 Sales OS

**Slug:** `/case-studies/j5-sales-os/`

**`<title>`:** J5 Sales OS Case Study | AI-Powered Lead Generation & Pipeline SaaS | QUANT LAB USA

**`<meta description>`:** How QUANT LAB USA built J5 Sales OS — an AI-powered lead generation, prospecting, and sales pipeline platform combining Google Places, web scraping, and OpenAI-driven outreach.

### H1: How J5 Sales OS Became an AI-Powered Lead Engine for Niche-Vertical Sales Teams

#### Situation
J5 Sales OS exists to solve a problem every B2B sales team knows: finding qualified, niche-vertical leads is slow, and the generic SaaS tools (ZoomInfo, Apollo, Seamless) either don't cover the niches the team actually sells into or charge enterprise prices for what should be a focused workflow. The product brief was specific: build an operator-grade platform that combines lead discovery, enrichment, qualification, outreach generation, and pipeline tracking — and lets a single seller do the work of a team.

#### Challenge
The platform had to handle several hard problems at once:

- **Lead discovery at the niche level** — pulling real, contactable businesses from Google Places (not directory aggregators like Yelp or BBB) by query and location
- **Email enrichment** — visiting candidate websites, scraping contact pages, and extracting valid emails while filtering out blocklisted domains and image references
- **AI qualification and outreach** — using OpenAI to score lead quality and generate personalized first-touch outreach
- **Pipeline management** — stages from "New Lead" through closed/won, with notes, activity tracking, and solution-category tagging
- **Analytics** — visibility into what's working at the niche, source, and stage level

#### Approach
QUANT LAB USA designed J5 Sales OS as a Next.js 16 application backed by Prisma and a portable SQLite/Postgres data model (libsql + Neon support), with a clean separation between discovery (`/api/prospect`), enrichment (`lib/scraper.js`, `lib/places.js`), generation (`/api/generate-outreach`, OpenAI), and CRM operations (`/leads`, `/pipeline`, `/outreach`, `/analytics`). The Google Places v2 Text Search integration is purpose-built to over-fetch and filter out directory sites, leaving the seller with real business candidates that have phone numbers and actual websites. The scraper uses cheerio with timeout-bounded concurrent fetches and email validation rules to surface high-quality contact info.

#### Solution
The platform shipped with:

- **Lead discovery** via Google Places API v2 with directory blocklist filtering (Yelp, BBB, Thumbtack, Angi, Yellowpages, etc. excluded)
- **Concurrent email scraper** with semaphore-bounded fetching, `User-Agent` rotation, and validation rules
- **AI prospecting** powered by OpenAI for qualification scoring and personalized outreach generation
- **DuckDuckGo search integration** (`duck-duck-scrape`) for supplemental discovery
- **CRM pipeline** with stages, opportunity levels, niche tagging, solutions matching, and assigned-to tracking
- **Lead records** with company, contact, email, phone, website, LinkedIn/Instagram/Facebook, business category, lead source, opportunity level, notes, and JSON-encoded analysis data
- **Analytics dashboard** at `/analytics`
- **Settings module** for niches, solutions, and outreach templates
- **Embedded outreach generation** so a seller can move from "found" to "sent" without leaving the app

#### Outcomes
- Lead discovery cycle reduced from hours per niche to minutes [estimated]
- Email-find rate significantly higher than Apollo/Seamless for small-business niche verticals [estimated]
- Personalized outreach generation eliminates copy-paste templating
- One operator can run the full discovery → enrichment → outreach → pipeline workflow in a single tool
- Niche-vertical sellers reach prospects competitors don't even surface

```
DRAFT QUOTE — confirm with client

"J5 Sales OS does what the big tools refused to do. It finds the real
businesses, gets their real emails, and writes the first message
so we can spend our time on conversations, not on lookups. Built by
someone who actually understood the sales motion."

— J5 Sales OS team
```

**Tech stack:** Next.js 16, React 19, JavaScript, Prisma 7, SQLite/libsql + Neon Postgres, OpenAI, Google Places API v2, cheerio, duck-duck-scrape, Vercel

**Project duration:** ~10–14 weeks [estimated]

**Internal link suggestions:**
- Service: `/services/custom-software-development/`
- Service: `/services/ai-integration/`
- Service: `/services/saas-development/`
- City: `/locations/macon/`
- City: `/locations/atlanta/`

---

## 6. Wilder Recovery

**Slug:** `/case-studies/wilder-recovery-lot-management/`

**`<title>`:** Wilder Recovery Case Study | Towing, Recovery & Lot Management System | QUANT LAB USA

**`<meta description>`:** How QUANT LAB USA built a full lot-management platform for Wilder Recovery — vehicle intake, photo/document chain-of-custody, inventory release, scheduling, and role-based admin.

### H1: How Wilder Recovery Got a Full Lot-Management System Custom-Built for Towing and Repossession Operations

#### Situation
Wilder Recovery is a professional towing, recovery, and repossession operator. Day-to-day, the business handles emergency tow leads, scheduled transports, recovery jobs, and repossession cases — each requiring chain-of-custody documentation, vehicle photos, personal-property inventory, lender authorizations, and timed release events. The existing workflow was paper-heavy: tow slips, intake clipboards, hand-written inventory bags, phone calls to dispatch, and after-the-fact spreadsheet entry. As volume grew, audit risk grew with it.

#### Challenge
Towing and repossession have legal exposure paper workflows can't safely cover:

- Every personal-property item in a vehicle must be inventoried, tagged, and tracked through release
- Every status change (incoming → on lot → hold → pending release → released) needs a timestamp and an actor
- Every vehicle needs intake photos (damage, plate, VIN, interior) and document storage (tow slip, repo authorization, release form, ID verification)
- Releases require ID verification, lienholder authorization, and a permanent release record
- The system must support dispatchers, drivers, management, and view-only roles with separate permissions
- Audit log must capture every meaningful action

#### Approach
QUANT LAB USA built Wilder Recovery's lot-management platform on Next.js 16 + React 19 + TypeScript with NextAuth v5 for role-based authentication, Prisma + PostgreSQL for transactional data, and a route group split between `(public)` marketing pages and `(admin)` operations. The data model is deliberately deep — separate models for vehicle records, photos, documents, status history, inventory items, inventory release events, appointments, release records, and an immutable audit log — so the operator can defend every action against a lender, owner, or auditor months later.

#### Solution
What was built:

- **Public marketing site** with services (towing, recovery, repossession, transport), service-area pages, about, FAQ, and contact
- **Lead capture and conversion** with urgency levels (emergency, soon, scheduled, quote) and structured vehicle/contact intake
- **Role-based admin** for admin, management, dispatcher, driver, and viewer roles
- **Vehicle records** with full intake (status, keys, locked/unlocked, running, damage notes, hold reasons, legal hold, owner, lienholder, case number, pickup origin, release auth)
- **Photo capture** by category (intake, damage, plate, VIN, interior, property, release)
- **Document storage** by category (tow slip, repo auth, release form, ID verification, transporter, internal)
- **Vehicle status history** with full state-transition logging
- **Personal property inventory** with category, description, quantity, condition, storage location, bag tag, photo, and release tracking
- **Inventory release events** for partial and full property releases with releasedTo and releasedById
- **Appointments** for transporter pickups, customer appointments, vehicle release, property retrieval, inspections, and internal events
- **Release records** with releasedTo, ID verification, release type (owner/lienholder/transporter/auction/agency), authorization, property-released flag
- **Immutable audit log** capturing user, action, entity type, entity ID, and before/after JSON
- **Lot, jobs, dispatch, schedule, inventory, vehicles, leads, customers, invoices, documents, repossession, reports, team, areas, analytics, settings** admin modules

#### Outcomes
- Paper tow slips and clipboard intake replaced by a single tablet-based workflow [estimated]
- Audit risk reduced — every status change, photo, document, and release is timestamped and attributed
- Personal property release disputes drop because every item has a tag, photo, and release record [estimated]
- Dispatcher can see lot, schedule, and team assignments on one screen
- Operator can defend any action months later with the full audit log

```
DRAFT QUOTE — confirm with client

"Wilder runs on this system now. From the tow truck to the lot to the
release, everything is logged, every photo is in the file, and we can
pull a complete history of any vehicle in seconds. QUANT LAB built
exactly what towing operators actually need."

— Wilder Recovery ownership
```

**Tech stack:** Next.js 16, React 19, TypeScript, NextAuth v5, Prisma 6, PostgreSQL, Tailwind CSS, Radix UI, zod, bcryptjs, Vercel

**Project duration:** ~12–16 weeks [estimated]

**Internal link suggestions:**
- Service: `/services/custom-software-development/`
- Service: `/services/operations-platforms/`
- Service: `/services/role-based-admin-systems/`
- City: `/locations/macon/`
- City: `/locations/atlanta/`

---

## Cross-cutting CTA Block (use on each case study page)

> **Want a platform built exactly for how your business operates?**
> QUANT LAB USA is a founder-led custom software firm in Macon, GA, building Next.js, TypeScript, and PostgreSQL platforms for contractors, e-commerce, SaaS, and operations-heavy businesses across Georgia and the Southeast.
> [Book a consultation](/contact/) | [See more case studies](/case-studies/)

---

## Publishing checklist
- [ ] Confirm every `[estimated]` metric with the named client and replace with verified numbers (or remove)
- [ ] Get written approval on every DRAFT QUOTE before publishing
- [ ] Add hero image and 2–3 supporting screenshots per case study
- [ ] Add structured data: `Article` schema + `Organization` schema for QUANT LAB USA
- [ ] Verify internal links resolve to real service and city pages before launch
- [ ] Add OG image per case study
- [ ] Cross-link from the matching service page back to the case study
