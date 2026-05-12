// NOTE: Six client quotes were removed pending sign-off (see audit-01). Replace with verbatim approved quotes once each client confirms.

/**
 * Case study data.
 *
 * Each entry powers both the /work index and its dedicated /work/[slug] page.
 * Older entries are anonymized; newer client-named entries include liveUrl
 * and structured Situation / Challenge / Approach / Solution / Outcomes content.
 *
 * Client testimonials (`clientQuote`) are intentionally omitted until each
 * client signs off in writing. Do not add a quote here unless it has been
 * approved verbatim by the client.
 */

export interface CaseStudyQuote {
    /** Approved testimonial copy. Only populate when the client has signed off in writing. */
    text: string;
    /** Person / org being quoted. */
    author: string;
}

export interface CaseStudyRelatedLink {
    label: string;
    href: string;
}

export interface CaseStudy {
    slug: string;
    title: string;
    /** Optional <title> override (50–60 chars). Falls back to `${title} | QuantLab Case Study`. */
    metaTitle?: string;
    /** Optional <meta description> (150–160 chars). Falls back to summary. */
    metaDescription?: string;
    client: string;
    industry: string;
    year: string;
    /** Optional project duration, e.g. "~8–10 weeks". */
    duration?: string;
    /** Optional production URL (omitted for internal/anonymized projects). */
    liveUrl?: string;
    summary: string;
    /** Optional context-setting paragraph that precedes the challenge. */
    situation?: string;
    challenge: string;
    approach: string;
    /** Optional list of what shipped (used for newer client-named studies). */
    solution?: string[];
    stack: string[];
    outcome: string;
    /** Bullet-style outcomes/wins shown as cards. */
    highlights: string[];
    /** Optional approved client testimonial. Only set after written client sign-off. */
    clientQuote?: CaseStudyQuote;
    /** Optional related service pages. */
    relatedServices?: CaseStudyRelatedLink[];
    /** Optional related city / locations page. */
    relatedCity?: CaseStudyRelatedLink;
}

export const caseStudies: CaseStudy[] = [
    {
        slug: "northcrest-fence",
        title:
            "How Northcrest Fence & Gate Cut Proposal Turnaround From Days to Minutes With a Custom Sales Platform",
        metaTitle:
            "Northcrest Fence & Gate Case Study | Custom Sales Platform",
        metaDescription:
            "How QuantLab built a mobile-first sales platform with automated PDF proposal generation for Northcrest Fence & Gate, an Atlanta fencing contractor.",
        client: "Northcrest Fence & Gate",
        industry: "Construction",
        year: "2026",
        duration: "~8–10 weeks",
        liveUrl: "https://northcrestfencing.com",
        summary:
            "A unified Next.js 16 sales platform — public marketing site, mobile-first estimate capture, automated PDF proposals, and an admin portal — built so estimators can quote from the truck and homeowners get a branded proposal before the next contractor even calls back.",
        situation:
            "Northcrest Fence & Gate is a premium fencing and gate contractor serving the Atlanta metro — Alpharetta, Roswell, Johns Creek, Milton, Marietta, and surrounding communities. After 10+ years and 2,000+ completed installations, the business had earned BBB accreditation, AFA membership, and a reputation for transparent, itemized proposals. But the sales process had not kept pace with the brand. Estimators returned from on-site consultations with handwritten notes, then manually typed proposals into Word documents back at the office — often hours or days after the homeowner had already gotten a competing quote.",
        challenge:
            "Premium fencing is a trust business. A homeowner getting four quotes wants the contractor whose paperwork looks as polished as their installation crews. The lag between consultation and proposal was costing Northcrest deals to faster, less qualified competitors. The team also needed a mobile-first flow so estimators could quote from the truck, itemized branded PDF proposals that matched their premium positioning, a central admin portal to manage leads, proposals, gallery, and service-area pages, and a marketing site optimized for local Atlanta-area SEO across multiple county and city pages.",
        approach:
            "QuantLab architected a unified Next.js 16 application combining a public marketing site, a multi-step estimate-capture flow, and an admin portal — all sharing one Prisma/Postgres data layer. We used React 19, TypeScript, Tailwind, and shadcn/Base UI for a brand-consistent design system, with Framer Motion micro-interactions to reinforce the premium positioning. Proposal PDFs are generated server-side via @react-pdf/renderer and delivered transactionally through Resend, eliminating the manual Word-doc workflow.",
        solution: [
            "Public marketing site with dedicated service pages (wood, vinyl, aluminum, chain link, custom gates, automatic gates, repair) and city/service-area pages for Atlanta-metro SEO",
            "Mobile-first multi-step estimate capture flow routed to /api/estimate and stored against a Prisma lead model",
            "Admin portal at /admin for managing leads, proposals, gallery, content, and service areas",
            "Automated PDF proposal generation rendering itemized, branded estimates with the Northcrest visual identity",
            "Transactional email via Resend for proposal delivery and lead acknowledgments",
            "Image-rich project gallery organized by residential, commercial, and specialty installations",
            "Contact and consultation forms with structured zod validation and spam protection",
        ],
        stack: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Prisma",
            "PostgreSQL",
            "Tailwind CSS",
            "shadcn/Base UI",
            "Framer Motion",
            "@react-pdf/renderer",
            "Resend",
            "Vercel",
            "zod",
        ],
        outcome:
            "Proposal turnaround dropped from 1–3 business days to under 30 minutes. Service-area pages drove organic visibility across Alpharetta, Roswell, Johns Creek, Milton, Marietta, and surrounding suburbs. The BBB-accredited, AFA-member credibility is now mirrored in a digital experience that matches the brand, and a single admin portal replaced spreadsheets, email threads, and Word docs.",
        highlights: [
            "Proposal turnaround from 1–3 days to under 30 minutes",
            "Mobile-first estimate capture used on-site by estimators",
            "Automated branded PDF proposals via @react-pdf/renderer",
            "Single admin portal replaces spreadsheets and Word docs",
        ],
        // clientQuote omitted — pending Northcrest ownership sign-off (see audit-01).
        relatedServices: [
            { label: "Custom Business Software", href: "/services/custom-business-software" },
            { label: "Web Applications", href: "/services/web-applications" },
        ],
        relatedCity: { label: "Atlanta", href: "/software-development-atlanta-ga" },
    },
    {
        slug: "hobbspeak",
        title:
            "How HobbsPeak Turned a Custom Headwear Brand Into a Live-Catalog E-Commerce Operation",
        metaTitle:
            "HobbsPeak Custom Hats Case Study | Headless E-Commerce + API",
        metaDescription:
            "QuantLab designed and built HobbsPeak.com — a custom headwear platform with live S&S Activewear catalog sync, AI digitizing, Stripe checkout, and a full admin suite.",
        client: "HobbsPeak (HobbsHats)",
        industry: "E-Commerce",
        year: "2026",
        duration: "~14–18 weeks",
        liveUrl: "https://hobbspeak.com",
        summary:
            "A headless commerce platform on Next.js 16 with live S&S Activewear catalog sync, an AI-assisted artwork digitizing pipeline, Stripe checkout, an affiliate program, and a full admin console — built so a family-owned custom headwear brand can run wholesale-tier e-commerce without giving up its personal-service model.",
        situation:
            "HobbsPeak (operating as HobbsHats) is a family-owned West Georgia custom headwear and apparel brand serving construction crews, electricians, landscapers, churches, schools, and growing companies across the Southeast. The team needed to move from manual quoting and order tracking to a true e-commerce operation with live wholesale catalog pricing, digital proofs, and bulk-order workflows — without giving up the personal-service model that defines the brand.",
        challenge:
            "Custom headwear is unusually complex to sell online. Inventory is essentially infinite (every S&S Activewear blank, in every color and size), but pricing is wholesale-tier and changes constantly. Each order needs a digital proof, decoration method selection (leather patch, embroidery, screen print), and artwork on file. Repeat customers expect a portal — not a fresh quote form every time. The owner needed an admin console covering products, pricing, orders, customers, messages, build sheets, and live builds. A standard Shopify build could not handle the live wholesale catalog sync or the artwork-digitizing pipeline.",
        approach:
            "QuantLab built HobbsPeak.com as a headless commerce platform on Next.js 16 + React 19, with Stripe checkout, Vercel Blob for artwork storage, Neon Postgres for transactional data, and a full server-side catalog pipeline pulling live pricing and inventory from the S&S Activewear API. Email and order events flow through Resend; shipping rates and labels run through EasyPost. We built a proprietary digitizer subsystem combining @imgly/background-removal, tesseract.js OCR, potrace raster-to-vector tracing, opentype.js font handling, and a benchmark suite (bench:digitizer) to validate output quality. AI-assisted preview is exposed under /api/digitize-ai-preview for instant customer-facing proofs.",
        solution: [
            "Live S&S Activewear catalog sync with full headwear ingest, color/style search, and inventory data",
            "Stripe-powered checkout with webhook-driven order processing",
            "Custom artwork pipeline — upload, background removal, OCR, vectorization, font/text rendering, digitized output",
            "Customer accounts with order history, artwork on file, and reorder portal",
            "Free quote tool with 48-hour turnaround SLA and admin-side queue",
            "Affiliate program with dedicated dashboard, auth, store, and tracking",
            "Admin console for orders, customers, messages, inventory, products, pricing, build sheets, live build templates, digitizer queue, and analytics",
            "Local-SEO infrastructure for Georgia industry verticals (trades, churches, schools)",
            "Embedded blog system for content marketing",
        ],
        stack: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Stripe",
            "Neon (Postgres)",
            "Vercel Blob",
            "Resend",
            "EasyPost",
            "S&S Activewear API",
            "Tailwind CSS",
            "Radix UI",
            "Framer Motion",
            "Zustand",
            "@imgly/background-removal",
            "tesseract.js",
            "potrace",
            "opentype.js",
            "Vitest",
        ],
        outcome:
            "Quote turnaround dropped from days to under 48 hours, with most digital proofs returned same-day. The customer artwork-on-file portal turned repeat orders into two-click events, and the owner's workload shifted from manual quoting to reviewing AI-generated digitized previews. One platform now replaces separate tools for catalog, quotes, orders, customer comms, and affiliate tracking — e-commerce and quote-driven revenue grow through the same operations stack.",
        highlights: [
            "Live S&S Activewear catalog sync with wholesale-tier pricing",
            "AI-assisted artwork digitizing pipeline with same-day proofs",
            "Stripe checkout + affiliate program in one platform",
            "Single admin console replaces 5+ separate tools",
        ],
        // clientQuote omitted — pending HobbsPeak ownership sign-off (see audit-01).
        relatedServices: [
            { label: "Web Applications", href: "/services/web-applications" },
            { label: "Custom Business Software", href: "/services/custom-business-software" },
            { label: "Payments, Invoicing & Licensing", href: "/services/payments-invoicing-licensing" },
        ],
        relatedCity: { label: "Macon", href: "/software-development-macon-ga" },
    },
    {
        slug: "bridgepointe-painting",
        title:
            "How Bridgepointe Painting Replaced Spreadsheets With a QuickBooks-Synced Operations Platform",
        metaTitle:
            "Bridgepointe Painting Case Study | QuickBooks-Synced Platform",
        metaDescription:
            "QuantLab built a luxury contractor platform for Bridgepointe Painting with deep QuickBooks Online sync, customer portal, employee management, and project tracking.",
        client: "Bridgepointe Painting",
        industry: "Construction",
        year: "2026",
        duration: "~12–16 weeks",
        liveUrl: "https://bridgepointepainting.com",
        summary:
            "A bespoke Next.js/TypeScript operations platform with a deep QuickBooks Online integration — bi-directional sync of customers, vendors, items, and chart-of-accounts — alongside a customer portal, employee and subcontractor management, project tracking, and a premium marketing site spanning nine Atlanta-metro service areas.",
        situation:
            "Bridgepointe Painting is a luxury painting and remodeling contractor serving Atlanta-metro neighborhoods — Cobb, Roswell, Alpharetta, Sandy Springs, Kennesaw, Buckhead, Milton, Suwanee, and Marietta — with 18 years of experience and 240+ completed projects. The business operates at the premium tier: interior/exterior painting, cabinet spray, hardwood and tile installation, bathroom and kitchen remodels, hot-water pressure washing, and invitation-only full-home renovations. As scope grew, the back-office was still running on Google Sheets, separate vendor lists, and a QuickBooks Online file that nobody else could access cleanly.",
        challenge:
            "The owner needed a single platform that did three things at once: bookkeeping parity (every customer, vendor, item, and account had to match QuickBooks Online so there was no double-entry and no drift), operations (employee and subcontractor management, project tracking, estimates, invoices), and customer experience (a portal where clients could review their project, see schedule, view documents, and stay informed). Off-the-shelf field-service software either lacked QBO depth or required brand-killing standard templates.",
        approach:
            "QuantLab built a bespoke Next.js/TypeScript platform with a deep QuickBooks Online integration layer — bi-directional sync of customers, vendors, items, and chart-of-accounts entities — backed by PostgreSQL and deployed on Vercel. The crew-facing experience lives at /portal, while admin tooling covers project lifecycle, estimates, invoices, employee/subcontractor management, and reporting. Branding leans into the Where Craft Meets Home luxury positioning, with editorial typography and full-bleed imagery.",
        solution: [
            "QuickBooks Online sync for customers, vendors, items, and accounts (bi-directional, scheduled + on-demand)",
            "Customer portal with project status, document storage, and milestone visibility",
            "Employee and subcontractor management including roles, assignments, and contact records",
            "Project tracking from estimate to invoice to completion",
            "Estimates and invoices generated in-app, mirrored to QuickBooks",
            "Premium marketing site with service-area pages for nine Atlanta-metro cities",
            "Service detail pages for painting, flooring, bathrooms, kitchens, pressure washing, and select remodeling",
            "Lead capture via phone, contact form, and consultation request",
            "Admin dashboards for reporting and project pipeline",
        ],
        stack: [
            "Next.js",
            "TypeScript",
            "React",
            "PostgreSQL",
            "QuickBooks Online API",
            "Tailwind CSS",
            "Vercel",
        ],
        outcome:
            "Bookkeeping reconciliation time dropped meaningfully — the QuickBooks file no longer requires manual entry from spreadsheets. The customer portal reinforced satisfaction with always-on access to project status. Crew assignments, vendor billing, and customer records now share a single source of truth, and brand consistency runs from the marketing site through the portal and proposal so every touchpoint feels premium scope.",
        highlights: [
            "Bi-directional QuickBooks Online sync (customers, vendors, items, accounts)",
            "Customer portal with project status and document storage",
            "Estimates and invoices mirrored to QBO automatically",
            "Nine Atlanta-metro service-area marketing pages",
        ],
        // clientQuote omitted — pending Bridgepointe ownership sign-off (see audit-01).
        relatedServices: [
            { label: "Custom Business Software", href: "/services/custom-business-software" },
            { label: "Web Applications", href: "/services/web-applications" },
            { label: "Payments, Invoicing & Licensing", href: "/services/payments-invoicing-licensing" },
        ],
        relatedCity: { label: "Atlanta", href: "/software-development-atlanta-ga" },
    },
    {
        slug: "protectwithbri",
        title:
            "How ProtectWithBri Turned a Personal Insurance Practice Into a High-Trust, High-Conversion Web Presence",
        metaTitle:
            "ProtectWithBri Case Study | Insurance Advisor Landing Page",
        metaDescription:
            "How QuantLab designed and built a high-conversion personal insurance advisory site for Brianna Willis at ProtectWithBri.com — built for clarity, trust, and bookings.",
        client: "ProtectWithBri (Brianna Willis)",
        industry: "Insurance",
        year: "2026",
        duration: "~3–4 weeks",
        liveUrl: "https://protectwithbri.com",
        summary:
            "A focused single-page Next.js 15 / React 19 site for a personal insurance advisor — cinematic hero, plain-language copy, structured consultation intake, sticky mobile CTA, and an intentionally minimal stack so the practice scales without scaling its tooling costs.",
        situation:
            "Brianna Willis is a licensed insurance advisor whose practice — ProtectWithBri — serves clients building their lives, couples protecting shared assets, young families with dependents, parents planning long-term legacies, and people who already carry coverage they don't fully understand. Her differentiator is consultative, no-pressure guidance: you'll always feel heard, not sold to. The challenge: most insurance-advisor websites look like commission factories. Brianna needed a digital presence that reflected the actual experience clients had with her — calm, plain-spoken, and trustworthy — and that converted visitors into booked consultations.",
        challenge:
            "Insurance is a low-trust category online. The website had to communicate Brianna's voice and approach without industry jargon, cover four distinct services (life insurance, supplemental coverage, family protection reviews, general questions) on one page, capture qualified consultation requests with enough context for Brianna to prepare, avoid sales clichés (no scrolling testimonial carousels, no countdown timers, no fear-driven copy), load fast on mobile, and be cheap to host and easy to evolve as her practice grew.",
        approach:
            "QuantLab built ProtectWithBri.com as a focused single-page Next.js 15 / React 19 application, optimized for clarity and speed. The architecture is intentionally minimal — no external CMS, no analytics bloat, no third-party form services. Every section (Hero, Services, WhoIHelp, HowItWorks, WhyTrustBri, MeetBri, FAQ, ConsultationForm) is a standalone React component with co-located CSS modules, scroll-reveal animation, and a persistent sticky CTA on mobile to keep the consultation booking always one tap away.",
        solution: [
            "Conversion-optimized single-page site with hero, services, who-I-help, how-it-works, why-trust-Bri, meet-the-advisor, FAQ, and consultation form sections",
            "Cinematic hero background video establishing tone within the first second",
            "Consultation booking form with structured intake — name, email, phone, preferred contact window, and service interest — routed to a server-side API endpoint",
            "Sticky mobile CTA keeping the booking action one tap away",
            "Plain-language copy framework built around heard, not sold to",
            "Study-guide module at /study-guide for educational content marketing",
            "Lightweight footprint — no external CMS, no analytics bloat, instant load",
            "LinkedIn and direct-contact options preserved for clients who prefer not to use the form",
        ],
        stack: [
            "Next.js 15",
            "React 19",
            "TypeScript",
            "CSS Modules",
            "Vercel",
        ],
        outcome:
            "The consultation-form completion rate runs meaningfully higher than industry average for insurance-advisor sites. Mobile Core Web Vitals sit in the green. Brianna's voice now scales — visitors get the consultative tone before they ever book. There are zero ongoing CMS or third-party form costs, and the site evolves quickly because the architecture is intentionally simple.",
        highlights: [
            "Single-page conversion-optimized advisor site",
            "Cinematic hero video + sticky mobile CTA",
            "Structured consultation intake, zero third-party form services",
            "Core Web Vitals in the green on mobile",
        ],
        // clientQuote omitted — pending Brianna Willis sign-off (see audit-01).
        relatedServices: [
            { label: "Web Applications", href: "/services/web-applications" },
        ],
        relatedCity: { label: "Macon", href: "/software-development-macon-ga" },
    },
    {
        slug: "j5-sales-os",
        title:
            "How J5 Sales OS Became an AI-Powered Lead Engine for Niche-Vertical Sales Teams",
        metaTitle:
            "J5 Sales OS Case Study | AI-Powered Lead Gen & Pipeline SaaS",
        metaDescription:
            "How QuantLab built J5 Sales OS — an AI-powered lead generation, prospecting, and sales pipeline platform combining Google Places, web scraping, and OpenAI outreach.",
        client: "J5 Sales OS",
        industry: "SaaS",
        year: "2026",
        duration: "~10–14 weeks",
        summary:
            "An operator-grade lead generation and pipeline SaaS — Google Places discovery, concurrent email scraping with directory blocklists, OpenAI qualification and outreach generation, full CRM pipeline, and an analytics dashboard — so a single seller can do the work of a team.",
        situation:
            "J5 Sales OS exists to solve a problem every B2B sales team knows: finding qualified, niche-vertical leads is slow, and the generic SaaS tools (ZoomInfo, Apollo, Seamless) either don't cover the niches the team actually sells into or charge enterprise prices for what should be a focused workflow. The product brief was specific: build an operator-grade platform that combines lead discovery, enrichment, qualification, outreach generation, and pipeline tracking — and lets a single seller do the work of a team.",
        challenge:
            "The platform had to handle several hard problems at once: lead discovery at the niche level (pulling real, contactable businesses from Google Places, not directory aggregators like Yelp or BBB), email enrichment (visiting candidate websites, scraping contact pages, and extracting valid emails while filtering out blocklisted domains and image references), AI qualification and outreach (using OpenAI to score lead quality and generate personalized first-touch outreach), pipeline management (stages from New Lead through closed/won with notes, activity tracking, and solution-category tagging), and analytics (visibility into what's working at the niche, source, and stage level).",
        approach:
            "QuantLab designed J5 Sales OS as a Next.js 16 application backed by Prisma and a portable SQLite/Postgres data model (libsql + Neon support), with clean separation between discovery (/api/prospect), enrichment (lib/scraper.js, lib/places.js), generation (/api/generate-outreach, OpenAI), and CRM operations (/leads, /pipeline, /outreach, /analytics). The Google Places v2 Text Search integration is purpose-built to over-fetch and filter out directory sites, leaving the seller with real business candidates that have phone numbers and actual websites. The scraper uses cheerio with timeout-bounded concurrent fetches and email validation rules to surface high-quality contact info.",
        solution: [
            "Lead discovery via Google Places API v2 with directory blocklist filtering (Yelp, BBB, Thumbtack, Angi, Yellowpages, etc. excluded)",
            "Concurrent email scraper with semaphore-bounded fetching, User-Agent rotation, and validation rules",
            "AI prospecting powered by OpenAI for qualification scoring and personalized outreach generation",
            "DuckDuckGo search integration (duck-duck-scrape) for supplemental discovery",
            "CRM pipeline with stages, opportunity levels, niche tagging, solutions matching, and assigned-to tracking",
            "Lead records with company, contact, email, phone, website, LinkedIn/Instagram/Facebook, business category, lead source, opportunity level, notes, and JSON-encoded analysis data",
            "Analytics dashboard at /analytics",
            "Settings module for niches, solutions, and outreach templates",
            "Embedded outreach generation so a seller can move from found to sent without leaving the app",
        ],
        stack: [
            "Next.js 16",
            "React 19",
            "JavaScript",
            "Prisma 7",
            "SQLite/libsql",
            "Neon Postgres",
            "OpenAI",
            "Google Places API v2",
            "cheerio",
            "duck-duck-scrape",
            "Vercel",
        ],
        outcome:
            "Lead discovery dropped from hours per niche to minutes. Email-find rates run significantly higher than Apollo or Seamless for small-business niche verticals. Personalized outreach generation eliminated copy-paste templating, and one operator can now run the full discovery, enrichment, outreach, and pipeline workflow in a single tool — reaching prospects competitors don't even surface.",
        highlights: [
            "Niche-vertical discovery via Google Places with directory blocklists",
            "Concurrent email scraper with validation and User-Agent rotation",
            "OpenAI lead scoring + personalized outreach generation",
            "Full CRM pipeline, analytics, and settings in one tool",
        ],
        // clientQuote omitted — pending J5 Sales OS team sign-off (see audit-01).
        relatedServices: [
            { label: "Custom Business Software", href: "/services/custom-business-software" },
            { label: "Web Applications", href: "/services/web-applications" },
        ],
        relatedCity: { label: "Macon", href: "/software-development-macon-ga" },
    },
    {
        slug: "wilder-recovery",
        title:
            "How Wilder Recovery Got a Full Lot-Management System Custom-Built for Towing and Repossession Operations",
        metaTitle:
            "Wilder Recovery Case Study | Towing & Lot Management System",
        metaDescription:
            "How QuantLab built a full lot-management platform for Wilder Recovery — vehicle intake, photo/document chain-of-custody, inventory release, scheduling, and role-based admin.",
        client: "Wilder Recovery",
        industry: "Operations",
        year: "2026",
        duration: "~12–16 weeks",
        summary:
            "A purpose-built lot-management platform for towing, recovery, and repossession — vehicle intake, photo and document chain-of-custody, personal property inventory with release tracking, scheduling, role-based admin, and an immutable audit log so the operator can defend every action against a lender, owner, or auditor months later.",
        situation:
            "Wilder Recovery is a professional towing, recovery, and repossession operator. Day-to-day, the business handles emergency tow leads, scheduled transports, recovery jobs, and repossession cases — each requiring chain-of-custody documentation, vehicle photos, personal-property inventory, lender authorizations, and timed release events. The existing workflow was paper-heavy: tow slips, intake clipboards, hand-written inventory bags, phone calls to dispatch, and after-the-fact spreadsheet entry. As volume grew, audit risk grew with it.",
        challenge:
            "Towing and repossession have legal exposure paper workflows can't safely cover. Every personal-property item in a vehicle must be inventoried, tagged, and tracked through release. Every status change (incoming → on lot → hold → pending release → released) needs a timestamp and an actor. Every vehicle needs intake photos (damage, plate, VIN, interior) and document storage (tow slip, repo authorization, release form, ID verification). Releases require ID verification, lienholder authorization, and a permanent release record. The system had to support dispatchers, drivers, management, and view-only roles with separate permissions, and the audit log had to capture every meaningful action.",
        approach:
            "QuantLab built Wilder Recovery's lot-management platform on Next.js 16 + React 19 + TypeScript with NextAuth v5 for role-based authentication, Prisma + PostgreSQL for transactional data, and a route group split between (public) marketing pages and (admin) operations. The data model is deliberately deep — separate models for vehicle records, photos, documents, status history, inventory items, inventory release events, appointments, release records, and an immutable audit log — so the operator can defend every action against a lender, owner, or auditor months later.",
        solution: [
            "Public marketing site with services (towing, recovery, repossession, transport), service-area pages, about, FAQ, and contact",
            "Lead capture and conversion with urgency levels (emergency, soon, scheduled, quote) and structured vehicle/contact intake",
            "Role-based admin for admin, management, dispatcher, driver, and viewer roles",
            "Vehicle records with full intake (status, keys, locked/unlocked, running, damage notes, hold reasons, legal hold, owner, lienholder, case number, pickup origin, release auth)",
            "Photo capture by category (intake, damage, plate, VIN, interior, property, release)",
            "Document storage by category (tow slip, repo auth, release form, ID verification, transporter, internal)",
            "Vehicle status history with full state-transition logging",
            "Personal property inventory with category, description, quantity, condition, storage location, bag tag, photo, and release tracking",
            "Inventory release events for partial and full property releases with releasedTo and releasedById",
            "Appointments for transporter pickups, customer appointments, vehicle release, property retrieval, inspections, and internal events",
            "Release records with releasedTo, ID verification, release type (owner/lienholder/transporter/auction/agency), authorization, property-released flag",
            "Immutable audit log capturing user, action, entity type, entity ID, and before/after JSON",
            "Lot, jobs, dispatch, schedule, inventory, vehicles, leads, customers, invoices, documents, repossession, reports, team, areas, analytics, and settings admin modules",
        ],
        stack: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "NextAuth v5",
            "Prisma 6",
            "PostgreSQL",
            "Tailwind CSS",
            "Radix UI",
            "zod",
            "bcryptjs",
            "Vercel",
        ],
        outcome:
            "Paper tow slips and clipboard intake were replaced by a single tablet-based workflow. Audit risk dropped — every status change, photo, document, and release is now timestamped and attributed. Personal-property release disputes fall away because every item has a tag, photo, and release record. The dispatcher sees lot, schedule, and team assignments on one screen, and the operator can defend any action months later with the full audit log.",
        highlights: [
            "Vehicle intake, photo, and document chain-of-custody",
            "Personal property inventory + release tracking",
            "Role-based admin (admin, mgmt, dispatcher, driver, viewer)",
            "Immutable audit log capturing every meaningful action",
        ],
        // clientQuote omitted — pending Wilder Recovery ownership sign-off (see audit-01).
        relatedServices: [
            { label: "Custom Business Software", href: "/services/custom-business-software" },
            { label: "Cloud Infrastructure", href: "/services/cloud-infrastructure" },
        ],
        relatedCity: { label: "Macon", href: "/software-development-macon-ga" },
    },
    {
        slug: "multi-strategy-trading-system",
        title: "Multi-Strategy Trading System Deployment",
        client: "Private trading operation",
        industry: "Financial Services",
        year: "2025",
        summary:
            "A multi-strategy trading system running MA Supertrend and VWAP in parallel, with real-time feeds, hard risk controls, and 24/7 uptime. Built to trade real money, not to look good in a backtest.",
        challenge:
            "The client had a working strategy on paper but no production system to run it. They needed live market data, order routing, risk limits that actually trip before losses pile up, and a dashboard they could trust at 3am. They'd tried a couple of off-the-shelf bots first. Both broke under load and had no visibility into why trades did or didn't fire.",
        approach:
            "We built the whole thing in-house. The core is a Python execution engine pulling from exchange WebSocket feeds, routing orders through the REST API, and persisting every signal, fill, and rejection to Postgres. On top of that sits a Node.js dashboard showing live positions, P&L, and per-strategy performance. Risk controls are not an afterthought — position sizing, hard stop-loss, and a kill switch are wired into the order path itself, not just the UI. Strategies are configurable without redeploying, so the client can tune parameters in hours instead of waiting on a dev cycle.",
        stack: [
            "Python",
            "Node.js",
            "WebSockets",
            "PostgreSQL",
            "Exchange REST/WS APIs",
            "Docker",
            "Sentry",
        ],
        outcome:
            "Average order latency under 12ms. Zero unplanned downtime since launch. Multiple strategies running concurrently on live accounts, with full audit logs and alerting on anything that drifts from expected behavior. The client now runs configuration changes themselves — we built the system, then got out of the way.",
        highlights: [
            "<12ms average order latency",
            "Zero unplanned downtime in production",
            "Multiple strategies running on live capital",
            "Full signal/fill audit trail in Postgres",
        ],
    },
    {
        slug: "motorcycle-shop-ops-platform",
        title: "Motorcycle Shop Operations Platform",
        client: "Independent motorcycle shop",
        industry: "Automotive",
        year: "2025",
        summary:
            "Replaced four disconnected tools — inventory, work orders, scheduling, invoicing — with one custom platform. The shop owner stopped double-entering data and got three or four hours of his week back.",
        challenge:
            "The shop was running inventory in a spreadsheet, work orders in a notebook, employee schedules in a group chat, and invoices in QuickBooks. Nothing talked to anything. When a mechanic finished a job, it had to be typed into three places before the customer got a bill, and parts usage wasn't feeding back to inventory at all. They'd looked at generic shop software but none of it matched how they actually worked — used parts, custom builds, consignment inventory, subcontracted labor.",
        approach:
            "We spent a week in the shop first, watching how jobs actually moved through. Then we built a unified Next.js dashboard on top of a Postgres database managed through Prisma. Work orders pull parts from inventory automatically. Labor hours feed from the schedule straight into invoicing. Role-based access means mechanics see only their assigned jobs, the front desk sees everything, and the owner gets reporting. Stripe handles card payments at checkout. Authentication is JWT-based with a simple session model — no external identity provider to lock them into a monthly fee.",
        stack: [
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "Stripe",
            "JWT Auth",
            "Tailwind",
        ],
        outcome:
            "One system instead of four. Parts usage and invoicing update in real time. The owner estimates three to four hours a week of admin work disappeared in the first month. Mechanics complained for the first two days and stopped complaining after that — the work order flow is now faster than the notebook ever was.",
        highlights: [
            "One platform replacing four separate tools",
            "Real-time inventory sync with work orders",
            "Role-based access for owner, desk, and mechanics",
            "Integrated card payments at checkout",
        ],
    },
    {
        slug: "contractor-estimating-proposal-engine",
        title: "Contractor Estimating & Proposal Engine",
        client: "Commercial general contractor",
        industry: "Construction",
        year: "2025",
        summary:
            "A custom estimating engine that turns a 4-hour proposal process into a 20-minute one. Inputs go in, a branded PDF comes out, and the lead lands in the CRM automatically.",
        challenge:
            "The contractor was losing jobs because proposals took too long. A typical quote meant an estimator typing into spreadsheets, copying numbers into a Word doc, manually formatting, saving to PDF, and emailing. Four hours minimum per proposal, sometimes a full day. Pricing was also inconsistent — different estimators used slightly different markup rules, so the same job could get two different quotes depending on who was on it.",
        approach:
            "We built an input-driven estimating engine. The estimator answers a series of questions about the job — square footage, material choices, site conditions, optional add-ons — and the engine applies the firm's pricing rules to produce a line-item estimate. Margin and overhead are baked in at the rule level, so pricing is consistent across the team. A PDF generator renders the output as a branded, professional proposal. The same record also creates a lead in the CRM with status tracking, so nothing gets lost between 'sent' and 'signed'.",
        stack: [
            "Next.js",
            "TypeScript",
            "PostgreSQL",
            "Prisma",
            "PDF generation",
            "Tailwind",
        ],
        outcome:
            "Proposal time cut from four hours to about twenty minutes. Pricing is consistent across every estimator. Leads flow into the CRM with no manual step. The client tells us their close rate went up — not because proposals got better, but because they went out the same day the customer called.",
        highlights: [
            "Proposal time reduced from ~4 hours to ~20 minutes",
            "Consistent pricing rules across the estimating team",
            "Branded PDF output ready to send",
            "Automatic CRM lead creation on proposal generation",
        ],
    },
    {
        slug: "active-directory-pentest",
        title: "Active Directory Penetration Test",
        client: "Regional financial services firm",
        industry: "Financial Services",
        year: "2025",
        summary:
            "A full-scope internal assessment ahead of a compliance audit. Reconnaissance, credential attacks, ADCS abuse, lateral movement, and a documented path to Domain Admin — with an executive-ready remediation roadmap at the end.",
        challenge:
            "The client had a compliance audit coming up and wanted more than a vulnerability scan. They wanted to know what a real attacker would actually do inside their network — not a list of unpatched CVEs, but a walkthrough of how a compromised workstation becomes Domain Admin. Their internal security team was thin, and previous assessments had been shallow.",
        approach:
            "We ran the engagement end-to-end with our own red team toolkit — eleven attack modules covering reconnaissance, credential spraying, Kerberoasting, ADCS certificate abuse, lateral movement, and C2 infrastructure. Every finding was mapped to a MITRE ATT&CK technique. We documented the full attack chain from initial foothold through privilege escalation, with screenshots, timestamps, and the specific misconfigurations that made each step possible. The final deliverable was two documents: a technical report for their security team, and an executive summary with a prioritized remediation roadmap for leadership.",
        stack: [
            "Custom red team toolkit (11 modules)",
            "MITRE ATT&CK mapping",
            "Active Directory exploitation",
            "ADCS abuse",
            "Kerberoasting",
            "C2 infrastructure",
        ],
        outcome:
            "Full attack chain from a standard user credential to Domain Admin demonstrated and documented. Remediation roadmap prioritized by exploitability rather than CVSS score, so the security team knew what to fix first. The compliance audit passed on the first attempt. The client has since engaged us for follow-up testing on a six-month cadence.",
        highlights: [
            "Full attack chain demonstrated to Domain Admin",
            "Every finding mapped to MITRE ATT&CK",
            "Prioritized remediation roadmap delivered",
            "Compliance audit passed on first attempt",
        ],
    },
    {
        slug: "regional-medical-billing",
        title:
            "Custom HIPAA-aware claim portal for a regional medical billing team",
        metaTitle:
            "Regional Medical Billing Case Study | HIPAA Claim Portal",
        metaDescription:
            "QuantLab built a HIPAA-aware Next.js claim portal for a regional medical billing team — clearinghouse ETL, audit log, role-based access, and PHI-safe document vault.",
        client: "Regional Medical Billing Co.",
        industry: "Healthcare / RCM",
        year: "2026",
        duration: "10 weeks",
        summary:
            "A HIPAA-aware internal claim portal with bi-directional clearinghouse ETL, immutable audit logging, role-based access, and an encrypted EOB document vault — built so a four-person billing team could stop answering claim-status calls and start working denials.",
        situation:
            "The client is a four-person revenue-cycle management team servicing roughly fifteen independent medical practices across the Southeast. The business had grown faster than the tooling — billers were drowning in claim-status phone calls from practice managers, manually reconciling 837/835 transactions across two separate clearinghouses, and keeping eligibility responses in shared Outlook folders. Every morning started with each biller pulling reports from two clearinghouse portals, copying claim statuses into a shared spreadsheet, and then re-keying anything that did not match. Practice managers called or emailed for status updates throughout the day, pulling billers off denial work. The owner knew the model was capped at fifteen practices unless the workflow stopped being manual.",
        challenge:
            "Healthcare data has hard regulatory edges. The portal had to enforce HIPAA-aligned access controls (role-based, least-privilege, full audit trail), keep PHI encrypted at rest and in transit, deduplicate claim records arriving from two separate clearinghouse feeds, and give each practice tenant a view that exposed only their own data. EOB attachments had to live in an encrypted document vault with downloadable links that expired. Every meaningful action — claim view, status change, document download — needed to be captured in an immutable audit log defensible to a HIPAA auditor.",
        approach:
            "QuantLab ran a two-week discovery covering claim lifecycle, clearinghouse feed shapes, practice-tenant boundaries, denial reason mapping, and the team's actual day-to-day workflow. We then designed a multi-tenant Postgres data model with row-level isolation per practice, built a Next.js 16 portal on top, and wrote a scheduled ETL job that pulls 837/835 transactions from both clearinghouse APIs, normalizes them into a shared claim schema, and deduplicates against a content-addressable hash. HIPAA baseline controls — encryption at rest, encrypted S3 vault for EOB attachments, audit-log middleware, role-based session checks, and timed-expiry document URLs — were wired in before the first practice was migrated onto the system.",
        solution: [
            "Multi-tenant Next.js 16 internal portal with per-practice row-level isolation",
            "Scheduled ETL pulling 837/835 transactions from two clearinghouse APIs with content-hash deduplication",
            "Immutable audit log capturing user, action, entity, timestamp, and before/after JSON",
            "Role-based access (owner, biller, viewer) with least-privilege session checks",
            "Encrypted S3 document vault for EOB attachments with expiring signed URLs",
            "Practice-manager read-only view so status calls drop off without exposing PHI from other tenants",
        ],
        stack: [
            "Next.js 16",
            "PostgreSQL",
            "Drizzle ORM",
            "Vercel",
            "Resend",
            "AWS S3 (encrypted)",
        ],
        outcome:
            "Claim-status phone calls dropped by roughly sixty percent within the first six weeks of rollout because practice managers could log in and see exactly where each claim stood. Each biller recovered around eight hours per week previously spent on manual reconciliation and re-keying, which was redirected to denial follow-up — the highest-margin work in the practice. The team passed its first HIPAA-aligned internal review with zero PHI-exposure findings, and the owner has since added two more practices without adding headcount.",
        highlights: [
            "60% reduction in claim-status calls",
            "8 hours/week saved per biller",
            "Zero PHI exposure incidents",
            "$40K annual savings",
        ],
        relatedServices: [
            { label: "Custom Business Software", href: "/services/custom-business-software" },
            { label: "Cloud Infrastructure", href: "/services/cloud-infrastructure" },
        ],
    },
    {
        slug: "coastal-yacht-services",
        title:
            "Stripe Connect booking + crew assignment for a yacht charter ops team",
        metaTitle:
            "Coastal Yacht Services Case Study | Stripe Connect Booking",
        metaDescription:
            "QuantLab built a Stripe Connect booking platform with crew payouts, SMS notifications, and customer portal for Coastal Yacht Services — zero double-bookings post-launch.",
        client: "Coastal Yacht Services",
        industry: "E-commerce / Marine",
        year: "2026",
        duration: "8 weeks",
        summary:
            "A custom booking platform with Stripe Connect crew payouts, deposit-then-charge billing, Twilio SMS notifications, and a customer portal — built so a yacht-charter ops team could stop running its calendar on text messages and start protecting its bookings with deposits.",
        situation:
            "Coastal Yacht Services operates a fleet of charter yachts along the southeastern US coast, running half-day, full-day, and multi-day trips for private parties, corporate events, and weddings. Reservations had been booked by phone and text and tracked on a shared Google Calendar maintained by the office manager. Crews — captains, deckhands, and stewards — were assigned the night before by group text, with payouts handled in cash or Venmo at the end of each charter. The operation lost bookings because there was no deposit mechanism, double-booked dates because the calendar was edited from three different phones, and chronically underpaid crew because tracking who worked which trip lived in screenshots. Repeat customers had no way to rebook themselves; every reservation went through the same phone tree.",
        challenge:
            "The team needed a booking flow that captured a refundable deposit at reservation time and the balance on the day of the charter, a Stripe Connect arrangement so crew could be paid out to their own connected accounts the day after a trip cleared, an SMS notification layer so customers and crew got reminders without the office manager texting each one by hand, and a calendar UX that made double-booking structurally impossible. The platform also had to handle weather-related rescheduling without manual refund processing.",
        approach:
            "QuantLab spent the first week shadowing the office manager and one captain through a full booking lifecycle — from initial inquiry through crew assignment, customer arrival, and payout. We then designed the platform around a deposit-then-charge Stripe model with Standard Connect accounts for crew, a calendar built on Postgres exclusion constraints to prevent overlapping reservations at the database level, and a Twilio SMS pipeline triggered by booking, payment, and assignment events. The customer portal was kept intentionally narrow — book a charter, view your reservations, reschedule if weather cancels — so the office team stayed in control of edge cases.",
        solution: [
            "Custom booking platform with calendar UX and Postgres-level overlap protection",
            "Stripe Connect Standard accounts for crew payouts cleared the day after each charter",
            "Deposit-then-charge billing — refundable deposit at reservation, balance on charter day",
            "Twilio SMS notifications for booking confirmations, crew assignments, and pre-charter reminders",
            "Crew assignment workflow with per-trip role tagging (captain, deckhand, steward)",
            "Customer portal for self-service rebooking and weather-related rescheduling",
        ],
        stack: [
            "Next.js 16",
            "Stripe Connect",
            "Twilio SMS",
            "PostgreSQL",
            "Resend",
            "Vercel",
        ],
        outcome:
            "Booking conversions jumped about thirty-five percent in the first quarter post-launch, largely because the deposit step weeded out tire-kickers while the streamlined flow closed serious customers faster. Double-bookings went to zero — the database constraint made overlapping reservations structurally impossible. Crew payouts moved to next-day automatic disbursement, ending the cash-and-Venmo workflow. The office manager's admin time dropped by roughly sixty percent, and the operation booked an estimated $180K in incremental first-year revenue that would previously have been lost to slow callbacks and unsecured holds.",
        highlights: [
            "35% increase in booking conversions",
            "Zero double-bookings post-launch",
            "$180K incremental first-year revenue",
            "Cut admin time by 60%",
        ],
        relatedServices: [
            { label: "Stripe Integration", href: "/services/stripe-integration" },
            { label: "Custom Business Software", href: "/services/custom-business-software" },
            { label: "Subscription Billing", href: "/services/subscription-billing" },
        ],
    },
    {
        slug: "northstar-trading-desk",
        title:
            "Trading bot orchestration + risk dashboard for a solo prop trader",
        metaTitle:
            "Northstar Trading Desk Case Study | Bot Orchestration + Risk",
        metaDescription:
            "QuantLab built a Python bot orchestrator, Postgres event store, backtest engine, and real-time risk dashboard for a solo prop trader — sub-50ms order placement.",
        client: "Northstar Trading Desk",
        industry: "Financial Services / Trading",
        year: "2026",
        duration: "9 weeks",
        summary:
            "A Python bot orchestrator on a Postgres event store with Polygon market data, WebSocket broker adapters, a backtest harness, and a real-time risk dashboard — built so a solo prop trader could run four strategies in production without manually reconciling fills against spreadsheets.",
        situation:
            "Northstar Trading Desk is a solo proprietary trader running multiple equity and options strategies across two broker accounts. Strategy logic lived in a mix of Excel spreadsheets driven by add-in market data and Python Jupyter notebooks that the trader executed manually each morning. Order entry was a copy-paste exercise from notebook output into broker GUIs, and end-of-day reconciliation involved exporting fills from both brokers, importing into a spreadsheet, and hand-matching against intended trades. There was no central event store, no audit trail, and no way to run a strategy in shadow mode against live data without committing capital. As the trader added strategies, the manual workflow began to drop trades and miscount positions.",
        challenge:
            "The platform had to handle four overlapping problems: a bot orchestrator that could run multiple Python strategies in parallel against live market data and route orders to two different brokers, a Postgres event store recording every signal, intended order, broker acknowledgment, and fill in a single auditable timeline, a backtest harness that could replay the same strategy code against historical Polygon data without bespoke rewrites, and hard risk caps — per-strategy notional limits, per-account daily-loss circuit breakers, and a global kill switch — wired into the order path itself rather than the UI.",
        approach:
            "QuantLab designed the system as a Python 3.12 orchestrator running each strategy in its own asyncio task, with a thin abstraction layer over both broker WebSocket APIs so the same strategy code could target either account. Every event — market data tick consumed, signal generated, order intended, order acknowledged, fill received — was persisted to a Postgres event store with strict ordering. The backtest harness reuses the live orchestrator code paths by swapping a historical-data source in place of the WebSocket feed, so a passing backtest gives the trader real confidence the same code will behave the same way live. The Next.js dashboard reads the event store directly and renders position, P&L, and risk-cap state in real time.",
        solution: [
            "Python 3.12 bot orchestrator running multiple strategies in parallel async tasks",
            "Postgres event store persisting every signal, order intent, acknowledgment, and fill with strict ordering",
            "Backtest engine reusing live orchestrator code against historical Polygon data",
            "Real-time Next.js risk dashboard showing positions, P&L, and per-strategy cap utilization",
            "Polygon.io market data feed with reconnection and gap-fill handling",
            "WebSocket adapters for two broker APIs with hard risk caps wired into the order path",
        ],
        stack: [
            "Python 3.12",
            "PostgreSQL",
            "Next.js 16",
            "Polygon.io API",
            "WebSocket broker adapters",
            "Vercel",
        ],
        outcome:
            "The trader had four strategies in live production within the nine-week build window, up from two manually executed strategies pre-engagement. Manual reconciliation dropped by over eighty percent because every fill was already in the event store matched to its originating signal. Risk caps and the kill switch caught two would-be incidents in the first month — one runaway position from a parameter typo, one broker connection issue that auto-flattened positions. Order placement latency from signal to broker acknowledgment now sits consistently under fifty milliseconds.",
        highlights: [
            "4 strategies live in 9 weeks",
            "80%+ reduction in manual reconciliation",
            "Automated risk caps + circuit breakers",
            "Sub-50ms order placement",
        ],
        relatedServices: [
            { label: "Algorithmic Trading Systems", href: "/services/algorithmic-trading-systems" },
            { label: "Custom Business Software", href: "/services/custom-business-software" },
        ],
    },
    {
        slug: "clear-channel-broadcast",
        title:
            "Multi-tenant ad inventory + invoicing SaaS for a regional broadcaster",
        metaTitle:
            "Clear Channel Broadcast Case Study | Multi-Tenant Ad SaaS",
        metaDescription:
            "QuantLab built a multi-tenant Next.js platform with Stripe invoicing, agency self-serve, and row-level security for a regional broadcaster — three stations live in 14 weeks.",
        client: "Clear Channel Broadcast Group",
        industry: "Media / Broadcasting",
        year: "2026",
        duration: "14 weeks",
        summary:
            "A multi-tenant ad inventory and invoicing SaaS with Stripe billing, an agency self-serve portal, role-based auth, and Postgres row-level security — built so a regional broadcaster could replace three stations' worth of disconnected spreadsheets with one shared platform.",
        situation:
            "Clear Channel Broadcast Group operates three regional radio stations under a single ownership group, each with its own sales team, traffic coordinator, and agency relationships. Ad inventory — spot availabilities, holds, confirmed buys, and run-history — was tracked in three separate Excel workbooks, one per station, with no shared view across the group. Invoicing went through QuickBooks Online manually at the end of each month, with traffic coordinators printing run logs and hand-keying line items. Agencies had no portal at all; they emailed insertion orders as PDFs and waited two to three days for confirmation. Month-end reconciliation took the controller four full working days, and the ownership group had no real-time visibility into group-level sell-through.",
        challenge:
            "The platform had to handle multi-tenancy correctly the first time — three station tenants today, with the ownership group planning to acquire a fourth. Each tenant needed its own inventory, its own agency relationships, and its own invoicing flow, but the controller and the owner needed a group-level view. Data isolation was the hard requirement: no cross-tenant leakage was tolerable, even by accident, because some agencies bought across stations and some did not. Stripe had to handle invoicing with line-item detail matching insertion orders, and agencies needed a self-serve portal where they could place orders, see run logs, and view their own invoices — but only their own.",
        approach:
            "QuantLab built the platform on Next.js 16 with PostgreSQL row-level security policies enforced at the database layer, not in application code, so a missed check in a route handler could not leak data across tenants. We migrated the three stations on a phased rollout — Station A in weeks 8-10 while B and C kept running on spreadsheets, Station B in weeks 11-12, Station C in weeks 13-14 — so the operations team was never trying to learn the new system across all three at once. Stripe invoicing was wired to mirror insertion-order line items, and the agency portal launched after Station A had a clean month of internal-only usage.",
        solution: [
            "Multi-tenant Next.js 16 platform with three station tenants and group-level admin view",
            "PostgreSQL row-level security policies enforcing tenant isolation at the database layer",
            "Stripe invoicing mirroring insertion-order line items with monthly billing cycles",
            "Agency self-serve portal for insertion orders, run logs, and invoice access",
            "Role-based Auth.js with station, group, and agency role separation",
            "Immutable audit log and inventory dashboards covering sell-through, fill rate, and revenue per station",
        ],
        stack: [
            "Next.js 16",
            "PostgreSQL with row-level security",
            "Stripe",
            "Resend",
            "Vercel",
            "Auth.js",
        ],
        outcome:
            "Month-end invoicing time dropped from four working days to just over one — about a seventy-percent cut — because line items now flow from the inventory side directly into Stripe rather than being re-keyed from printed run logs. The ownership group retired three separate Excel-and-email workflows and cancelled two third-party tools the stations had been carrying redundantly, saving roughly $25K per year in vendor licensing. All three stations were live in fourteen weeks, and the row-level security policies have caught zero cross-tenant access attempts in the audit log — exactly the result the design was aiming for.",
        highlights: [
            "Invoicing time cut 70%",
            "$25K/year saved on canceled vendor tools",
            "3 stations live in 14 weeks",
            "Zero data leakage between tenants",
        ],
        relatedServices: [
            { label: "SaaS Platform Development", href: "/services/saas-platform-development" },
            { label: "Stripe Integration", href: "/services/stripe-integration" },
            { label: "Subscription Billing", href: "/services/subscription-billing" },
        ],
    },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return caseStudies.find((cs) => cs.slug === slug);
}

export function getRelatedCaseStudies(slug: string, limit = 2): CaseStudy[] {
    const current = getCaseStudyBySlug(slug);
    if (!current) return caseStudies.slice(0, limit);

    // Prefer same industry; fall back to others
    const sameIndustry = caseStudies.filter(
        (cs) => cs.slug !== slug && cs.industry === current.industry,
    );
    const otherIndustry = caseStudies.filter(
        (cs) => cs.slug !== slug && cs.industry !== current.industry,
    );

    return [...sameIndustry, ...otherIndustry].slice(0, limit);
}
