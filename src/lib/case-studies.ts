/**
 * Case study data.
 *
 * Each entry powers both the /work index and its dedicated /work/[slug] page.
 * Older entries are anonymized; newer client-named entries include liveUrl,
 * structured Situation / Challenge / Approach / Solution / Outcomes content,
 * and DRAFT client quotes that must be confirmed before publishing.
 */

export interface CaseStudyQuote {
    /** The draft testimonial copy. Treat as DRAFT until confirmed. */
    text: string;
    /** Person / org being quoted. */
    author: string;
    /** TODO note for William — left in the data so it surfaces in PRs/diffs. */
    draftNote?: string;
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
    /** Optional DRAFT client testimonial. Confirm in writing before launch. */
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
        clientQuote: {
            // TODO(william): confirm with Northcrest ownership in writing before publishing.
            text: "QuantLab built us a system that finally matches the way we actually run jobs. Quotes go out before the homeowner walks back inside. The proposals look as good as our work, and the admin side keeps every lead in one place. We close more first-visit estimates than we ever have.",
            author: "Northcrest Fence & Gate ownership",
            draftNote:
                "DRAFT — confirm with Northcrest ownership before publishing.",
        },
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
        clientQuote: {
            // TODO(william): confirm with HobbsPeak ownership in writing before publishing.
            text: "We came to QuantLab because we needed something Shopify couldn't do — live wholesale catalog, digitized artwork, and a real admin console. William built all of it. Customers get proofs faster, repeat orders are a two-click thing, and I can run the whole shop from one screen.",
            author: "HobbsPeak ownership",
            draftNote:
                "DRAFT — confirm with HobbsPeak ownership before publishing.",
        },
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
        clientQuote: {
            // TODO(william): confirm with Bridgepointe ownership in writing before publishing.
            text: "QuantLab understood that our brand is luxury and our back-office had to match. The QuickBooks integration alone saves us hours every week, and our clients love the portal. William built exactly the platform we needed — nothing off-the-shelf could have done this.",
            author: "Bridgepointe Painting ownership",
            draftNote:
                "DRAFT — confirm with Bridgepointe ownership before publishing.",
        },
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
        clientQuote: {
            // TODO(william): confirm with Brianna Willis in writing before publishing.
            text: "William understood my practice before he wrote a line of code. The site sounds like me, not like an insurance pitch. Clients tell me they booked because the website felt honest — and that's exactly what I wanted.",
            author: "Brianna Willis, ProtectWithBri",
            draftNote:
                "DRAFT — confirm with Brianna Willis before publishing.",
        },
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
        clientQuote: {
            // TODO(william): confirm with J5 Sales OS team in writing before publishing.
            text: "J5 Sales OS does what the big tools refused to do. It finds the real businesses, gets their real emails, and writes the first message so we can spend our time on conversations, not on lookups. Built by someone who actually understood the sales motion.",
            author: "J5 Sales OS team",
            draftNote:
                "DRAFT — confirm with J5 Sales OS team before publishing.",
        },
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
        clientQuote: {
            // TODO(william): confirm with Wilder Recovery ownership in writing before publishing.
            text: "Wilder runs on this system now. From the tow truck to the lot to the release, everything is logged, every photo is in the file, and we can pull a complete history of any vehicle in seconds. QuantLab built exactly what towing operators actually need.",
            author: "Wilder Recovery ownership",
            draftNote:
                "DRAFT — confirm with Wilder Recovery ownership before publishing.",
        },
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
