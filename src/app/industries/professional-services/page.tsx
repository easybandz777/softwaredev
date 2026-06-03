import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Briefcase, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Professional Services Software Development & Security | QUANT LAB USA",
    description:
        "Custom software for agencies and consultancies — project, time, and billing tools, client portals, and resource planning. SOC 2-aware builds plus MITRE ATT&CK pentests. Founder-led.",
    slug: "industries/professional-services",
    image: "/og-services.png",
    type: "article",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Software for Professional Services",
    url: "https://quantlabusa.dev/industries/professional-services",
    description:
        "Software development for agencies and consultancies — project management, time tracking, billing, client portals, and resource planning. Founder-led, US-based, mutual NDA from day one.",
    isPartOf: {
        "@type": "WebSite",
        url: "https://quantlabusa.dev",
        name: "QUANT LAB USA",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://quantlabusa.dev/industries" },
        { "@type": "ListItem", position: 3, name: "Professional Services", item: "https://quantlabusa.dev/industries/professional-services" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Professional Services Software Development",
    name: "Custom Software Development for Professional Services",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for agencies and consultancies — project management, time tracking, billing, client portals, and resource planning. SOC 2-aware builds with pentesting tied to professional-services threat models via MITRE ATT&CK.",
    url: "https://quantlabusa.dev/industries/professional-services",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "We use a stack of tools that do not talk to each other. Can you consolidate?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — that is the single most common reason agencies and consultancies call us. Time in one tool, projects in another, billing in a third, and a CRM that knows none of it means hours of manual reconciliation and revenue leaking through the cracks. We build one system where time, projects, billing, and clients share a source of truth, or we integrate your existing tools so the data flows automatically.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build time tracking that ties to billing and profitability?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We build time capture that rolls straight into billing — rate cards, retainers, fixed-fee draw-downs, and time-and-materials — and into profitability reporting so you know margin by client, project, and team member. The goal is to make billable utilization and project margin visible in real time, not at month-end.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build a branded client portal?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. A client portal for deliverable review, approvals, file sharing, invoice access, and project status reduces the email back-and-forth that eats account-management time. We build it branded to your firm, with role-based access so each client sees only their own engagements.",
            },
        },
        {
            "@type": "Question",
            name: "Do you handle Stripe billing for retainers and project fees?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We wire Stripe for recurring retainers, milestone invoicing, and time-and-materials billing, with automated invoices, payment reminders, and reconciliation into QuickBooks or Xero. Card data is tokenized so your PCI scope stays light.",
            },
        },
        {
            "@type": "Question",
            name: "Is professional-services software a real security target?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Agencies and consultancies hold sensitive client data — strategy documents, financials, source code, credentials to client systems — and are increasingly asked for a SOC 2 report before enterprise clients will engage. We harden the client-data and portal paths and map pentests to the techniques that target professional-services firms.",
            },
        },
        {
            "@type": "Question",
            name: "Why is professional-services software a special case?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The business model is unusual — you sell time and expertise, so the software has to make utilization, realization, and project margin visible in a way product businesses never need. The tool sprawl is severe, with time, projects, billing, and CRM living in disconnected systems. And the client-data sensitivity plus growing SOC 2 expectations raise the security bar. A generic build misses all three.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 professional-services build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Around $25,000 covers a focused MVP — one high-value workflow shipped well. Example: a time-and-billing tool where consultants log hours against projects, the system generates invoices with your rate cards, and a dashboard shows utilization and project margin in real time. Scoped tight, it ships in 4 to 8 weeks.",
            },
        },
    ],
};

export default function ProfessionalServicesIndustryPage() {
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
                        <li className="text-gray-300">Professional Services</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-500 to-sky-400 mb-6">
                        <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Professional Services — Stop Leaking Revenue Between Tools
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Project, time, and billing systems, client portals, and resource planning for agencies and consultancies — built by a US-based, founder-led team that understands you sell time, and that margin lives in the gaps between disconnected tools.
                    </p>
                    <ConsultationCTA label="Scope a Services Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When you sell time, every untracked hour is lost margin.</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Agencies, consultancies, and professional firms run on a deceptively simple equation: bill more of the hours you work, at a healthy rate, against well-scoped projects. Yet most firms run that equation across four or five disconnected tools — time in one app, projects in another, invoicing in a third, a CRM that knows none of it, and a spreadsheet stitching it together at month-end. Revenue leaks through every seam: hours that never got logged, scope creep nobody flagged, retainers under-consumed or blown through unnoticed.
                        </p>
                        <p>
                            We build the system that closes those seams. Time capture that flows into billing and into real-time profitability. Project tracking that surfaces scope creep before it becomes a write-off. A client portal that cuts the email overhead. Resource planning that shows who is over- and under-allocated next month. When time, projects, billing, and clients share one source of truth, utilization goes up, realization goes up, and the month-end reconciliation stops being a fire drill.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why professional services is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The unit of production is time, which makes the metrics unlike any product business. Utilization, realization, effective rate, project margin, and backlog are the numbers that determine whether the firm is healthy, and they depend on accurate time capture tied to projects, rate cards, and engagement terms. Generic project tools track tasks but not profitability; generic accounting tools track invoices but not the work behind them. The firm needs both, connected, or it is flying blind on the only economics that matter.
                        </p>
                        <p>
                            The engagement structures add complexity. A single client might have a monthly retainer, a fixed-fee project, and a time-and-materials change order running at once, each with different billing logic and revenue recognition. Multiply that across a client base and the billing engine becomes the hard part of the build. We have modeled retainers, draw-downs, milestone billing, and blended-rate teams before, and we know the edge cases — the under-consumed retainer, the project that crosses a fiscal boundary, the rate change mid-engagement.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for professional services firms</h2>
                    <ul className="space-y-3">
                        {[
                            "Time tracking tied to projects, rate cards, and billing — not a standalone timer that nobody reconciles",
                            "Project management with budgets, scope tracking, and burn-down against the engagement terms",
                            "Billing engines — retainers, fixed fee, time-and-materials, milestone, and blended-rate teams",
                            "Branded client portals — deliverable review, approvals, file sharing, invoices, and status",
                            "Resource planning and capacity — allocation, utilization forecasting, and bench visibility",
                            "Profitability dashboards — margin by client, project, service line, and team member in real time",
                            "Practice CRM — pipeline, proposals, engagement scoping, and renewal tracking tied to delivery",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common professional-services projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Integrated time and billing", d: "Consultants log hours against projects, the system applies your rate cards and engagement terms, and invoices generate automatically with a dashboard showing utilization and project margin in real time." },
                            { t: "Tool consolidation", d: "Replace the disconnected stack — time here, projects there, billing elsewhere — with one system, or integrate your existing tools so data flows automatically and month-end reconciliation disappears." },
                            { t: "Branded client portal", d: "Deliverable review, approval workflows, file sharing, invoice access, and project status, branded to your firm, with role-based access so each client sees only their own engagements." },
                            { t: "Retainer and subscription billing", d: "Stripe-powered recurring retainers with draw-down tracking, overage handling, automated invoices and reminders, and reconciliation into QuickBooks or Xero." },
                            { t: "Resource and capacity planning", d: "A staffing board that forecasts utilization, surfaces who is over- or under-allocated next month, and ties allocation to project budgets and the sales pipeline." },
                            { t: "Profitability and partner reporting", d: "Margin by client, project, service line, and consultant, plus realization and effective-rate analysis that turns gut feel into numbers leadership can act on." },
                            { t: "Proposal and engagement scoping", d: "A proposal builder with reusable scope templates, rate cards, and e-signature that flows an accepted proposal straight into a live project." },
                            { t: "Practice CRM tied to delivery", d: "Pipeline, proposals, and renewals connected to the delivery system so the firm sees the full arc from lead to engagement to repeat business." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Security and compliance considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">SOC 2 for enterprise clients.</span> Enterprise buyers increasingly will not engage an agency or consultancy without a SOC 2 report, because your firm becomes part of their vendor risk. We build with Common Criteria in mind — encryption at rest and in transit, RBAC, change management, immutable audit logging — and coordinate with your auditor on evidence collection.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Client-data sensitivity.</span> Professional firms hold strategy documents, financials, unreleased product details, and often credentials to client systems. That concentration of sensitive material is exactly what attackers want. We enforce least-privilege access, isolate client data, and log who accessed what so a confidentiality question has an answer.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Client portal access control.</span> A portal where one client can see another&apos;s engagement is a confidentiality breach and a reputation killer. We build multi-client isolation carefully and test the authorization boundaries that separate one client&apos;s data from the next.
                        </p>
                        <p>
                            <span className="text-white font-semibold">PCI-DSS for client payments.</span> Card data for retainers and invoices is tokenized through Stripe so your environment stays in the lightest PCI scope and raw card numbers never touch your servers.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Contractual confidentiality obligations.</span> Your client MSAs likely impose specific data-handling and breach-notification terms. We do not give legal advice, but we build the access controls, audit trails, and data-segregation your contracts and your clients&apos; security teams will expect.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for professional services</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 16 on the App Router with React and TypeScript end-to-end for the internal system and the client portal. Postgres for the system of record, with the relational model fitting the time-project-client-invoice relationships cleanly. Prisma or Drizzle as the type-safe ORM. Stripe for retainer and project billing so PCI scope stays light, with QuickBooks Online or Xero sync for the books.
                        </p>
                        <p>
                            Background workers (Inngest or BullMQ on Redis) handle invoice generation, billing runs, and profitability rollups. Role-based access is wired through every surface, with strict multi-client isolation on the portal. Auth0, Clerk, or a Lucia-style stack for authentication, with MFA on internal accounts that touch financials. Sentry plus a log aggregator for observability, with client-data redaction in the logger. The web tier deploys to Vercel; the data plane moves to a hardened VPC when a SOC 2 or enterprise client requires it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused MVP", body: "A single high-value workflow shipped clean — integrated time and billing where consultants log hours, invoices generate from your rate cards, and a dashboard shows utilization and margin. 4 to 8 weeks." },
                            { tier: "$60K", title: "Production platform", body: "A real practice system — time, projects, billing, and a branded client portal sharing one source of truth, with profitability reporting and accounting sync. 10 to 16 weeks." },
                            { tier: "$150K+", title: "Full operating platform", body: "An end-to-end system from pipeline and proposals through delivery, billing, resource planning, and partner reporting, built to clear SOC 2 and enterprise vendor reviews. 16 to 28 weeks with phased delivery." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-violet-400 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery is paid separately at $2,500 and is creditable against any full engagement. See the <Link href="/contact" className="text-violet-400 hover:underline">contact page</Link> for the full scoping flow, or the <Link href="/pricing" className="text-violet-400 hover:underline">pricing page</Link> for engagement models.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            First, treating time tracking as a standalone tool. A timer disconnected from projects and billing produces data nobody reconciles, and the firm still cannot answer what its realization rate is. Time has to flow into billing and profitability automatically, or it is just another app people forget to fill in.
                        </p>
                        <p>
                            Second, underestimating the billing engine. Retainers, draw-downs, fixed fee, time-and-materials, milestones, and blended rates each carry their own logic, and the edge cases — the under-consumed retainer, the mid-engagement rate change, the project crossing a fiscal year — are where the real work lives. Teams budget for invoicing and discover billing is the hard part.
                        </p>
                        <p>
                            Third, weak client-portal isolation. The fastest way to lose a client is to let them glimpse another client&apos;s data. Multi-client authorization has to be designed and tested deliberately, not assumed because the query happened to filter by client ID in the demo.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why founder-led matters for professional services</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Your operating system holds your firm&apos;s financials and your clients&apos; confidential data — the two things you least want on an anonymous contractor&apos;s laptop overseas. And as a services firm yourself, you know the difference between a senior who owns the outcome and a body filling a seat. We are US-based and founder-led, and you work with the person who actually designs your billing engine and your client-data boundaries.
                        </p>
                        <p>
                            William Beltz writes or reviews every line that touches your time data, your billing, and your client information. NDAs are mutual and signed before discovery. Source code lives in your GitHub organization, not ours. The handoff is documented for either ongoing collaboration or in-house ownership — your call.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MITRE ATT&amp;CK pentests tied to professional-services threat models</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Agencies and consultancies are targeted precisely because they hold concentrated client data and often credentials into client environments — making them a stepping stone in supply-chain attacks. We run <Link href="/services/penetration-testing" className="text-violet-400 hover:underline">penetration tests</Link> mapped to the MITRE ATT&amp;CK techniques those attackers use, then deliver a heatmap of which techniques succeed, which get detected, and which get blocked.
                        </p>
                        <p>
                            For the client portal, internal platform, and billing surfaces that carry sensitive data, <Link href="/services/web-app-pentest" className="text-violet-400 hover:underline">web application penetration testing</Link> covers authentication, multi-client isolation, and the authorization boundaries that keep one client&apos;s data away from another. Every finding maps to ATT&amp;CK technique IDs so your team knows what to alert on.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "We use a stack of tools that do not talk to each other. Can you consolidate?",
                                a: "Yes — the most common reason agencies and consultancies call us. Time in one tool, projects in another, billing in a third means manual reconciliation and leaking revenue. We build one system where time, projects, billing, and clients share a source of truth, or integrate your tools so data flows automatically.",
                            },
                            {
                                q: "Can you build time tracking that ties to billing and profitability?",
                                a: "Yes. Time capture rolls straight into billing — rate cards, retainers, fixed-fee draw-downs, time-and-materials — and into profitability reporting so you know margin by client, project, and team member in real time, not at month-end.",
                            },
                            {
                                q: "Can you build a branded client portal?",
                                a: "Yes. Deliverable review, approvals, file sharing, invoice access, and project status, branded to your firm, with role-based access so each client sees only their own engagements — cutting the email back-and-forth that eats account-management time.",
                            },
                            {
                                q: "Do you handle Stripe billing for retainers and project fees?",
                                a: "Yes. We wire Stripe for recurring retainers, milestone invoicing, and time-and-materials billing, with automated invoices, payment reminders, and reconciliation into QuickBooks or Xero. Card data is tokenized so your PCI scope stays light.",
                            },
                            {
                                q: "Is professional-services software a real security target?",
                                a: "Yes. Firms hold sensitive client data — strategy documents, financials, source code, credentials to client systems — and are increasingly asked for a SOC 2 report before enterprise clients will engage. We harden the client-data and portal paths and map pentests to the techniques that target professional-services firms.",
                            },
                            {
                                q: "Why is professional-services software a special case?",
                                a: "You sell time, so the software has to make utilization, realization, and margin visible in a way product businesses never need. Tool sprawl is severe. And client-data sensitivity plus growing SOC 2 expectations raise the security bar. A generic build misses all three.",
                            },
                            {
                                q: "What does a $25,000 professional-services build look like?",
                                a: "A focused MVP — a time-and-billing tool where consultants log hours against projects, the system generates invoices with your rate cards, and a dashboard shows utilization and project margin in real time. Scoped tight, it ships in 4 to 8 weeks.",
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
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Time, project, and billing systems that share one source of truth." },
                            { slug: "custom-crm-development", title: "Custom CRM Development", desc: "A practice CRM tying pipeline and proposals to delivery and renewals." },
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Retainer and milestone billing with automated invoices and accounting sync." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "SOC 2-ready, MITRE ATT&CK-aligned testing for firms with sensitive client data." },
                            { slug: "web-app-pentest", title: "Web App Pentest", desc: "Client portals and billing surfaces tested for multi-client isolation flaws." },
                            { slug: "api-development", title: "API Development", desc: "Integrations connecting your existing tools so the data flows automatically." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-violet-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["internal-tools", "crm", "build-vs-buy"]}
                        heading="Professional-services engineering & build reading"
                        pinned={["custom-crm-development-guide", "build-vs-buy-software-2026", "nextjs-stripe-integration-guide"]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Close the gaps where your margin leaks.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-violet-400 hover:underline">book a 20-minute scope call</Link>. Mutual NDA signed before discovery. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
