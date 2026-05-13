import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { HardHat, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Construction Industry Software Development | QuantLab",
    description:
        "Custom software for construction & trades — proposal portals, QuickBooks/Xero sync, customer portals, mobile field tools. Built by contractor-vertical specialists.",
    slug: "industries/construction",
    image: "/og-services.png",
    type: "article",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Software for Construction & Trades",
    url: "https://quantlabusa.dev/industries/construction",
    description:
        "Mobile-first proposal generation, customer portals, QuickBooks Online and Xero sync, project tracking, and field-to-office data flow for residential and commercial trades.",
    isPartOf: {
        "@type": "WebSite",
        url: "https://quantlabusa.dev",
        name: "QuantLab USA",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://quantlabusa.dev/industries" },
        { "@type": "ListItem", position: 3, name: "Construction", item: "https://quantlabusa.dev/industries/construction" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Construction Industry Software Development",
    name: "Custom Software Development for Construction & Trades",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for construction, trades, and home services. Mobile-first proposal generation, customer portals, QuickBooks Online and Xero sync, project tracking, subcontractor management, and field-to-office data flow.",
    url: "https://quantlabusa.dev/industries/construction",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can you integrate with QuickBooks Online and Xero?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Deep bi-directional sync of customers, vendors, items, and chart-of-accounts entries is part of most contractor builds. We shipped this for Bridgepointe Painting — see the case study for the reference architecture.",
            },
        },
        {
            "@type": "Question",
            name: "Does this work for estimators on a job site?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Mobile-first is the default for contractor builds — we assume the estimator is on a phone or tablet in a truck. The Northcrest Fence build runs the entire proposal flow from the field with branded PDF output before the estimator drives back to the office.",
            },
        },
        {
            "@type": "Question",
            name: "How long does a contractor platform build take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "8 to 16 weeks for a typical first production release. Discovery and data modeling take 2 weeks, the bulk of the build runs 6 to 12, and we always ship a usable v1 before adding nice-to-haves.",
            },
        },
        {
            "@type": "Question",
            name: "Can you replace ServiceTitan, Jobber, or Housecall Pro?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We can build the parts those tools cover well, plus the parts they cover badly or not at all. The economic case is usually about per-seat fees and missing workflows — once you have more than a handful of users or a unique workflow, a custom build can pay back inside two years.",
            },
        },
        {
            "@type": "Question",
            name: "Why is construction treated as a special case for software development?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Construction is the rare industry where the primary user is rarely behind a desk. Estimators quote from trucks, foremen approve change orders from a job site, and the office still has to close the books at the end of the week. Software has to span the field, the office, and the accounting system without dropping data — and it has to look as polished as the contractor's finished work or it costs deals. Most off-the-shelf contractor SaaS solves one of those three needs and forces the others into workarounds.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 construction build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A focused tool — a mobile-first estimate-to-PDF flow, or a Stripe + QuickBooks reconciliation app, or a service-area marketing site with structured lead capture. 4 to 8 weeks, scoped tight, no v1 feature pile.",
            },
        },
        {
            "@type": "Question",
            name: "Do you build for residential, commercial, or both?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Both. Residential trades typically need fast, mobile-first estimating and a polished customer-facing experience — that is the Northcrest Fence pattern. Commercial contractors typically need more complex estimating, change-order tracking, AIA-style billing, and subcontractor management — that is closer to the contractor estimating engine reference build.",
            },
        },
        {
            "@type": "Question",
            name: "Can you handle AIA G702/G703 progress billing and lien waivers?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Commercial contractors using AIA-style billing get specific tooling — schedule of values, percent complete, retainage tracking, stored materials, and conditional and unconditional lien waivers generated from project data. We sync the receivable into QuickBooks Online or Sage with the appropriate retainage handling.",
            },
        },
    ],
};

export default function ConstructionIndustryPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/industries" className="hover:text-sky-400 transition-colors">Industries</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Construction</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 mb-6">
                        <HardHat className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Construction & Trades — Field-First, Office-Synced
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Mobile-first proposal generation, customer portals, QuickBooks sync, and project tracking — built for fencing contractors, paint and remodeling crews, electricians, roofers, and the rest of the trades who lose deals to whoever quotes first.
                    </p>
                    <ConsultationCTA label="Scope a Construction Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Most contractor software was not built for contractors</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The typical residential or commercial contractor we work with is running four tools that do not talk to each other. A spreadsheet for leads. A Word template for proposals. A group chat for scheduling. QuickBooks Online for the books. When a quote goes out, the data lives in three of those places — but updates only one. Job changes get phoned in. Material orders happen via text. The accountant chases ghost transactions for two days every month.
                        </p>
                        <p>
                            Off-the-shelf field-service platforms — Jobber, Housecall Pro, ServiceTitan — solve part of it, then bolt on per-seat fees and force you into their template for proposals. The brand that took fifteen years to build gets replaced by a generic SaaS-look PDF. Premium contractors lose deals because the paperwork no longer matches the work.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why construction is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Construction is one of the few industries where the primary user is rarely behind a desk. Estimators quote from trucks parked at customer driveways. Foremen approve change orders from the second floor of a half-framed house with one hand on a clipboard and the other on a tape measure. Owners need to know revenue, AR, and crew utilization from a phone screen at 6 a.m. before the day starts. Software has to span the field, the office, and the accounting system without dropping data — and the experience has to be fast on a cracked phone screen in direct sunlight.
                        </p>
                        <p>
                            Scale and integration pressures compound the problem. A growing residential trade integrates with QuickBooks Online or Xero for accounting, with a payment processor for deposits, with carrier-rated lien-waiver and certificate-of-insurance services, with material suppliers for actual costing, and with the city or county permitting portal for inspection scheduling. Commercial contractors layer in AIA-style billing (G702/G703), retainage tracking, schedule of values, and subcontractor management. Lose track of which transactions have been reconciled and the bookkeeper takes a full day every week reverse-engineering the journal entries. Most off-the-shelf SaaS solves one of those needs and forces the others into workarounds.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for trades operators</h2>
                    <ul className="space-y-3">
                        {[
                            "Mobile-first proposal portals — estimators quote from the truck, branded PDF lands in the homeowner's inbox before they walk back inside",
                            "Customer portals — project status, document storage, milestone visibility, and direct messaging",
                            "QuickBooks Online and Xero sync — customers, vendors, items, and chart-of-accounts bi-directional",
                            "Project tracking from estimate to invoice to completion with photo and document attachments",
                            "Subcontractor and crew management — assignments, certifications, insurance, and pay records",
                            "Service-area and city pages for local SEO across every metro you serve",
                            "Stripe payments wired directly into the QBO invoice so reconciliation is automatic",
                            "Admin portal so the owner sees lead pipeline, project status, and revenue on one screen",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common construction projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Mobile estimating with branded PDF proposals", d: "Multi-step estimate capture optimized for a phone in a truck, with line-item pricing, optional add-ons, photo capture, and branded PDF output delivered transactionally. This is the Northcrest Fence pattern." },
                            { t: "QuickBooks Online deep sync", d: "Bi-directional sync of customers, vendors, chart-of-accounts items, invoices, payments, and credit memos. Retainage and AIA handling for commercial. This is the Bridgepointe Painting pattern." },
                            { t: "Service-area and city page network for SEO", d: "Dynamically generated city/service pages with structured data, internal linking, and local-intent copy for every metro the contractor serves. Used to dominate Google in a 50-mile radius without paid ads." },
                            { t: "Customer-facing project portal", d: "Branded portal where the homeowner or property owner sees project status, milestones, photos, change orders, signed documents, and outstanding balance with one-click payment." },
                            { t: "Crew scheduling and dispatch board", d: "Visual schedule by crew, route, and job. Mobile crew check-in with photo and timestamp. Hooks into the project record so labor cost rolls up against the job estimate." },
                            { t: "Commercial estimating engine", d: "Rules-driven cost engine — material catalog, labor units, equipment overhead, markup tiers, and section-level pricing. Cuts proposal time from four hours to twenty minutes. This is the contractor estimating engine pattern." },
                            { t: "Subcontractor and crew compliance", d: "Track W-9s, certificates of insurance, license expirations, OSHA training, and 1099 thresholds with renewal alerts and per-job assignment workflows." },
                            { t: "Permit and inspection tracking", d: "Integration with city and county permitting portals where APIs exist, manual capture where they do not. Tracks open permits, inspection windows, and pass/fail status on each job." },
                            { t: "AIA G702/G703 progress billing", d: "Schedule of values, percent complete, stored materials, retainage handling, and conditional and unconditional lien waivers generated from project data." },
                            { t: "Owner dashboard with cash-flow projection", d: "One screen for the owner — pipeline value, signed backlog, AR aging, payroll commitments, and projected cash position for the next 60 days." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Compliance and security considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">Licensing and bonding.</span> State contractor license numbers, surety bond status, and trade-specific certifications (electrical, HVAC, plumbing) live on the public profile and the proposal footer. We capture and surface this data so renewals never lapse silently.
                        </p>
                        <p>
                            <span className="text-white font-semibold">1099 and subcontractor compliance.</span> 1099-NEC threshold tracking, W-9 collection on first payment, and exception reports at year-end so the bookkeeper does not chase missing paperwork in January.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Lien rights and notice obligations.</span> State-specific preliminary notice (NTO) windows, lien deadlines, and conditional/unconditional lien waiver workflows. We do not give legal advice but we build the calendar and document workflow your counsel will design around.
                        </p>
                        <p>
                            <span className="text-white font-semibold">OSHA and safety documentation.</span> Toolbox-talk attendance, equipment inspection logs, and incident reporting captured against crew and job records with photo and timestamp.
                        </p>
                        <p>
                            <span className="text-white font-semibold">PCI-DSS scope on payments.</span> Stripe Elements or Checkout tokenizes cards so the contractor environment stays in SAQ A. We never store PANs in the project record.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Cyber insurance and SOC 2 (for larger general contractors).</span> Commercial GCs working federally or with sensitive municipal projects increasingly need SOC 2 and cyber-insurance evidence. Our <Link href="/services/penetration-testing" className="text-amber-400 hover:underline">penetration testing</Link> deliverables satisfy underwriter and prime-contractor security reviews.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for construction</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 16 with React 19 and TypeScript for the web layer — the App Router is genuinely great for the mix of public marketing pages, customer portal pages, and admin tooling that contractors need. Postgres for the system of record, hosted on Neon or Supabase for most builds. Prisma as the ORM. @react-pdf/renderer for branded server-side PDF proposals. Tailwind plus shadcn for the design system, with Framer Motion micro-interactions on premium-positioning sites. Stripe for deposits and progress payments. QuickBooks Online API or Xero API for accounting sync, written as a normalized internal adapter so the contractor is not locked to one accounting platform forever. Resend for transactional email with verified domain alignment.
                        </p>
                        <p>
                            Auth via Clerk for most builds — it covers role-based access cleanly and supports the admin/office/field tiers contractors actually want. Background jobs on Inngest for sync workers and scheduled reconciliation. Sentry for error reporting with PII redaction. Hosting on Vercel. For commercial estimating with heavy compute (large material catalogs, dependency rules), we add a serverless function tier on Cloud Run or a small dedicated Postgres replica for read-heavy workloads. See the <Link href="/services/cloud-infrastructure" className="text-amber-400 hover:underline">cloud infrastructure service</Link> for the deployment patterns we use.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused contractor tool", body: "Mobile-first estimate-to-PDF flow, or a Stripe + QuickBooks reconciliation app, or a service-area marketing site with structured lead capture. 4 to 8 weeks." },
                            { tier: "$60K", title: "Field-to-office platform", body: "Lead pipeline, mobile estimating, customer portal, QBO sync, owner dashboard, and a service-area SEO network. 10 to 16 weeks. This is the Northcrest Fence or Bridgepointe band." },
                            { tier: "$150K+", title: "Commercial estimating and ops platform", body: "Rules-driven estimating engine, AIA progress billing, subcontractor compliance, crew scheduling, and multi-project owner reporting. 18 to 30 weeks with phased delivery." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-amber-400 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery sprint is paid separately at $2,500 so you can decide before committing to the full build. You come out with a wireframed UI, a database schema, and a phased estimate — useful even if you take it to another developer. <Link href="/contact" className="text-amber-400 hover:underline">Book a scope call</Link> to walk through your sales and ops flow.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Three patterns recur. First, the contractor signs up for ServiceTitan or Jobber, hits the per-seat ceiling in eighteen months, and discovers that the workflow they actually run is the workflow the platform does not support. Migrating off is harder than starting from scratch because the data export is incomplete and the team has trained itself around the SaaS UI. The mitigation is to be honest at the start about whether the off-the-shelf workflow fits the way the trade actually operates. If it does, stay there. If it does not, custom pays back fast.
                        </p>
                        <p>
                            Second, the field tooling and the office accounting drift apart. Estimators send proposals from a tablet, the office types them into QuickBooks by hand, and within a quarter the project records do not match the receivables. Reconciliation eats two days a week. Build the QBO sync from day one. It is the single highest-leverage piece of any contractor platform.
                        </p>
                        <p>
                            Third, owners over-rotate on a custom CRM and skip the customer-facing portal. The crew finds the new admin tool useful, but the homeowner experience stays exactly the same — no project visibility, no milestone updates, no one-click pay. The deals that should have come back as referrals do not. The customer-facing portal is the second highest-leverage piece, not the third.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Two reference contractor builds in production</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/work/northcrest-fence" className="text-amber-400 hover:underline">Northcrest Fence &amp; Gate</Link> is the reference build for residential trades. A unified Next.js 16 application: public marketing site with city/service-area SEO pages across Alpharetta, Roswell, Johns Creek, Milton, and Marietta; mobile-first multi-step estimate capture so estimators quote from the truck; admin portal for leads, proposals, gallery, and service areas; automated branded PDF proposal generation via @react-pdf/renderer; transactional email through Resend. Proposal turnaround dropped from 1–3 business days to under 30 minutes.
                        </p>
                        <p>
                            <Link href="/work/bridgepointe-painting" className="text-amber-400 hover:underline">Bridgepointe Painting</Link> is the reference for premium remodeling contractors with deep accounting needs. A bespoke Next.js/TypeScript platform with bi-directional QuickBooks Online sync of customers, vendors, items, and chart-of-accounts; customer portal at /portal; employee and subcontractor management; estimates and invoices generated in-app and mirrored to QBO; premium marketing site spanning nine Atlanta-metro service areas. Bookkeeping reconciliation time dropped from hours per week to near zero.
                        </p>
                        <p>
                            For commercial general contractors with complex estimating, see the <Link href="/work/contractor-estimating-proposal-engine" className="text-amber-400 hover:underline">contractor estimating &amp; proposal engine</Link> — input-driven rules engine that cut proposal time from four hours to twenty minutes with automatic CRM lead creation on send.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Methodology built for field operations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We spend the first week on the job site, not in the office. Watching how leads come in, how estimators quote, how the work gets scheduled, how invoices get cut. The data model gets shaped by that — not by a generic CRM template. Then we build in 2-week sprints with the owner reviewing each release before the field crew sees it.
                        </p>
                        <p>
                            Discovery sprint is paid separately at $2,500 so you can decide before committing to the full build. You come out with a wireframed UI, a database schema, and a phased estimate — useful even if you take it to another dev. Typical contractor platform build runs $18k–$65k depending on scope.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Can you integrate with QuickBooks Online and Xero?",
                                a: "Yes. Deep bi-directional sync of customers, vendors, items, and chart-of-accounts entries is part of most contractor builds. We shipped this for Bridgepointe Painting — see the case study for the reference architecture.",
                            },
                            {
                                q: "Does this work for estimators on a job site?",
                                a: "Yes. Mobile-first is the default for contractor builds — we assume the estimator is on a phone or tablet in a truck. The Northcrest Fence build runs the entire proposal flow from the field with branded PDF output before the estimator drives back to the office.",
                            },
                            {
                                q: "How long does a contractor platform build take?",
                                a: "8 to 16 weeks for a typical first production release. Discovery and data modeling take 2 weeks, the bulk of the build runs 6 to 12, and we always ship a usable v1 before adding nice-to-haves.",
                            },
                            {
                                q: "Can you replace ServiceTitan, Jobber, or Housecall Pro?",
                                a: "We can build the parts those tools cover well, plus the parts they cover badly or not at all. The economic case is usually about per-seat fees and missing workflows — once you have more than a handful of users or a unique workflow, a custom build can pay back inside two years.",
                            },
                            {
                                q: "Why is construction treated as a special case for software development?",
                                a: "The primary user is rarely behind a desk. Estimators quote from trucks, foremen approve change orders from a job site, and the office still has to close the books. Software has to span field, office, and accounting without dropping data — and the customer-facing experience has to look as polished as the contractor's finished work.",
                            },
                            {
                                q: "What does a $25,000 construction build look like?",
                                a: "A focused tool — a mobile-first estimate-to-PDF flow, or a Stripe + QuickBooks reconciliation app, or a service-area marketing site with structured lead capture. 4 to 8 weeks.",
                            },
                            {
                                q: "Do you build for residential, commercial, or both?",
                                a: "Both. Residential trades need fast mobile estimating and a polished customer-facing experience. Commercial contractors need more complex estimating, change-order tracking, AIA-style billing, and subcontractor management.",
                            },
                            {
                                q: "Can you handle AIA G702/G703 progress billing and lien waivers?",
                                a: "Yes. Schedule of values, percent complete, stored materials, retainage tracking, and conditional/unconditional lien waivers generated from project data, with the receivable synced into QuickBooks Online or Sage with appropriate retainage handling.",
                            },
                        ].map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "custom-crm-development", title: "Custom CRM Development", desc: "Pipeline, lead capture, and proposal-to-invoice flow tailored to your trade." },
                            { slug: "payments-invoicing-licensing", title: "Payments & Invoicing", desc: "Stripe + QuickBooks sync wired into the project record from day one." },
                            { slug: "web-applications", title: "Web Applications", desc: "Customer portals, admin dashboards, and field-tool web apps." },
                            { slug: "cloud-infrastructure", title: "Cloud Infrastructure", desc: "Vercel, Neon, and serverless deployment patterns for contractor platforms." },
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Deposits, progress payments, and reconciliation with QBO or Xero." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Owner dashboards, dispatch boards, and back-office automation." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-amber-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Quote faster. Run cleaner. Own the system.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-amber-400 hover:underline">book a 20-minute scope call</Link> to walk through your sales and ops flow. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
