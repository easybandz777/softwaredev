import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Truck, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Logistics Software Development & Security | QUANT LAB USA",
    description:
        "Custom logistics software — TMS, freight, EDI, route optimization, real-time tracking. CTPAT and SOC 2 aware builds plus MITRE ATT&CK pentests. Founder-led, US-based.",
    slug: "industries/logistics",
    image: "/og-services.png",
    type: "article",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Software for Logistics",
    url: "https://quantlabusa.dev/industries/logistics",
    description:
        "Logistics-specific software development — TMS, freight booking, EDI integration, route optimization, and shipment tracking. Founder-led, US-based, mutual NDA from day one.",
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
        { "@type": "ListItem", position: 3, name: "Logistics", item: "https://quantlabusa.dev/industries/logistics" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Logistics Software Development",
    name: "Custom Software Development for Logistics",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for logistics and freight — transportation management systems, EDI integration, route optimization, carrier portals, and real-time shipment tracking. Security work mapped to supply-chain threat models via MITRE ATT&CK.",
    url: "https://quantlabusa.dev/industries/logistics",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can you build EDI integration into a custom TMS?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We handle the common freight transaction sets — 204 load tender, 990 response, 214 shipment status, 210 invoice, 997 acknowledgment — over AS2, SFTP, or a VAN. We can map your trading partners' quirks, build the translation layer, and persist a full audit trail of every document exchanged.",
            },
        },
        {
            "@type": "Question",
            name: "Do you integrate with carrier and rating APIs?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We wire in parcel rating and tracking (FedEx, UPS, USPS), LTL and FTL rating aggregators, project44 and FourKites visibility feeds, and ELD or telematics providers where real-time position data matters. Each integration gets retry logic, rate-limit handling, and graceful degradation when an upstream API is down.",
            },
        },
        {
            "@type": "Question",
            name: "How do you approach route optimization?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We start with the constraints that actually bind your operation — time windows, vehicle capacity, driver hours-of-service, multi-stop sequencing, backhaul. For most operators a solver built on a mapping engine (Google, Mapbox, or HERE) plus a constraint library handles it. We do not oversell a research-grade optimizer when a well-tuned heuristic ships faster and moves the cost number.",
            },
        },
        {
            "@type": "Question",
            name: "Is supply-chain software a real security target?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, and increasingly so. Freight fraud, double-brokering scams, account takeover on load boards, and ransomware on TMS and WMS systems are all active threats. We map pentests to the techniques supply-chain adversaries actually use and harden the authentication, authorization, and tender-acceptance paths that fraud rings probe first.",
            },
        },
        {
            "@type": "Question",
            name: "Can a custom TMS replace our spreadsheet-and-email dispatch?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "That is one of the most common builds we scope. A focused first release usually covers load entry, carrier assignment, status tracking, and document capture in one place — replacing the spreadsheet-plus-inbox workflow that breaks down past a certain load volume. We ship the high-value workflow first, then expand.",
            },
        },
        {
            "@type": "Question",
            name: "Why is logistics treated as a specialized software domain?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Three things make it hard. The data is event-heavy and time-sensitive — a shipment generates dozens of status events that have to land in order and stay consistent. The integration surface is wide — EDI trading partners, carrier APIs, visibility platforms, accounting, and customs all touch the same load. And the operational tolerance for downtime is low because freight does not stop moving. A generic build team learns those constraints the expensive way.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 logistics build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Around $25,000 covers a focused MVP — a single high-value workflow shipped clean. Example: a dispatch board that captures loads, assigns carriers, tracks status, and stores rate confirmations and BOLs, with role-based access and an audit log. Scoped tight, it ships in 4 to 8 weeks without feature creep on the first release.",
            },
        },
    ],
};

export default function LogisticsIndustryPage() {
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
                        <li className="text-gray-300">Logistics</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500 to-sky-400 mb-6">
                        <Truck className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Logistics — TMS, Freight, and Visibility That Actually Ships
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Transportation management systems, EDI integration, route optimization, and real-time tracking — built by a US-based, founder-led team that understands freight moves on tight margins and tighter timelines.
                    </p>
                    <ConsultationCTA label="Scope a Logistics Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Freight runs on coordination. Build software that keeps up.</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A shipment is not a row in a table — it is a stream of events. Tender accepted, picked up, in transit, exception raised, delivered, invoiced. Every one of those events has to land in the right order, stay consistent across carrier feeds and EDI partners, and be visible to dispatch, the customer, and accounting at the same time. When that coordination lives in a spreadsheet and an inbox, it breaks the moment volume climbs.
                        </p>
                        <p>
                            We build logistics software around the event stream, not against it. Load state machines that cannot land in an impossible status. EDI translation that survives a trading partner&apos;s malformed 204. Carrier and visibility integrations with retry logic so a single upstream outage does not freeze your board. And an audit trail of every status change, rate confirmation, and document so a dispute six weeks later has a paper record instead of a guess.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why logistics is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most software domains tolerate a little latency and a little inconsistency. Freight does not. A load that shows delivered in one system and in-transit in another creates a billing dispute, an unhappy shipper, and a carrier who will not haul for you next week. The data model has to enforce a single source of truth for shipment state, and the integrations feeding it have to reconcile cleanly even when one partner is hours behind.
                        </p>
                        <p>
                            The integration surface is the other half of the problem. A single load can touch an EDI trading partner over AS2, a parcel carrier API for the final mile, a visibility platform like project44 or FourKites, an ELD provider for position data, a factoring company for the invoice, and your accounting system for the books. Each one has its own format, its own failure modes, and its own idea of what a timestamp means. We have wired these stacks before and know where the time gets eaten — usually in the EDI mapping and the reconciliation logic, not the dashboard.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for logistics operators</h2>
                    <ul className="space-y-3">
                        {[
                            "Custom transportation management systems — load entry, carrier assignment, dispatch boards, and status tracking",
                            "EDI integration layers — 204, 990, 214, 210, and 997 over AS2, SFTP, or a VAN, with partner-specific mapping",
                            "Route and load optimization — time windows, capacity, hours-of-service, multi-stop sequencing, and backhaul",
                            "Real-time shipment tracking — carrier and visibility-platform feeds unified into one customer-facing timeline",
                            "Carrier and broker portals — rate confirmation, document upload, settlement, and self-service status",
                            "Warehouse and yard tooling — receiving, putaway, pick-pack, and dock-door scheduling",
                            "Freight billing and settlement — rating, invoice generation, factoring integration, and accounting sync",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common logistics projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "TMS to replace spreadsheet dispatch", d: "Load entry, carrier assignment, status tracking, and document capture in one board. Replaces the spreadsheet-and-inbox workflow that breaks past a few hundred loads a month." },
                            { t: "EDI onboarding for a new trading partner", d: "Map a big-box retailer or 3PL's transaction sets, stand up AS2 or SFTP transport, build the translation layer, and persist an audit trail of every document exchanged." },
                            { t: "Customer tracking portal", d: "A branded portal that unifies carrier and visibility feeds into a single shipment timeline with proactive exception alerts and ETA updates." },
                            { t: "Route optimization for last-mile or LTL", d: "A solver over Google, Mapbox, or HERE that respects time windows, vehicle capacity, and driver hours, with a dispatcher override and a measurable cost-per-stop target." },
                            { t: "Carrier portal and settlement", d: "Self-service rate confirmation, BOL and POD upload, automated settlement, and factoring integration so carriers get paid without a phone call." },
                            { t: "Freight rating and quoting engine", d: "Aggregated LTL and parcel rating with margin rules, accessorial handling, and an instant-quote API for your sales team or website." },
                            { t: "Warehouse receiving and pick-pack", d: "Mobile-friendly receiving, license-plate tracking, directed putaway, and pick-pack-ship with barcode scanning on commodity hardware." },
                            { t: "Visibility and exception dashboard", d: "An ops command center that surfaces at-risk loads, dwell time, and on-time performance across carriers, with drill-down to the underlying events." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Security and compliance considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">Freight fraud and double-brokering.</span> Load boards and tender-acceptance flows are actively probed by fraud rings. We harden carrier onboarding, verify identity at the points that matter, and instrument the tender-acceptance path so suspicious patterns surface before a load gets handed to a bad actor.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Account takeover and access control.</span> A compromised dispatcher or broker account can reroute freight and redirect payments. We wire role-based access through every surface, require MFA on privileged accounts, and log who-changed-what on loads, rates, and payment details.
                        </p>
                        <p>
                            <span className="text-white font-semibold">SOC 2 for enterprise shippers.</span> Large shippers and 3PLs increasingly require a SOC 2 report before they integrate. We build with Common Criteria in mind — encryption at rest and in transit, RBAC, change management, immutable audit logging — and coordinate with your auditor on evidence.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Customs and trade-program data.</span> If your operation touches CTPAT, ACE filings, or customs brokerage data, the recordkeeping and access requirements get stricter. We do not give legal advice, but we build the audit trail and access controls your trade-compliance team will need.
                        </p>
                        <p>
                            <span className="text-white font-semibold">EDI and partner data integrity.</span> A garbled or replayed EDI document can create phantom shipments or duplicate invoices. We validate, deduplicate, and acknowledge every transaction, and keep an immutable copy of the raw payload for dispute resolution.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for logistics</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 16 on the App Router with React and TypeScript end-to-end for dispatch boards and portals. Postgres for the system of record — the relational model fits shipment state, and we lean on it for the consistency guarantees freight demands. Prisma or Drizzle as the type-safe ORM. A background worker layer (Inngest or BullMQ on Redis) for EDI processing, carrier polling, and route solves that should not block a request.
                        </p>
                        <p>
                            For mapping and optimization we use Google, Mapbox, or HERE depending on coverage and pricing, paired with a constraint solver tuned to your binding constraints. EDI runs through a translation layer with raw-payload archival. Carrier and visibility integrations get a normalized event model so the rest of the system never cares which provider sent a status. Sentry plus a log aggregator for observability, with PII-aware redaction. The web tier deploys to Vercel; the data plane and long-running workers go to a hardened VPC when scale or compliance requires it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused MVP", body: "A single high-value workflow shipped clean — a dispatch board with load entry, carrier assignment, status tracking, document capture, RBAC, and an audit log. 4 to 8 weeks, scoped tight." },
                            { tier: "$60K", title: "Production TMS", body: "A real transportation system — dispatch, carrier portal, one or two EDI trading partners, customer tracking, settlement, and accounting sync. 10 to 16 weeks." },
                            { tier: "$150K+", title: "Platform or multi-partner", body: "A full TMS with route optimization, multiple EDI partners, visibility-platform integration, warehouse tooling, and a customer portal. 16 to 28 weeks with phased delivery." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-amber-400 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery is paid separately at $2,500 and is creditable against any full engagement. See the <Link href="/contact" className="text-amber-400 hover:underline">contact page</Link> for the full scoping flow, or the <Link href="/pricing" className="text-amber-400 hover:underline">pricing page</Link> for engagement models.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            First, treating shipment status as a single editable field instead of an event log. The first time dispatch and the customer portal disagree about whether a load delivered, the company learns it cannot reconstruct the truth. Model the events, derive the status, and keep the history immutable.
                        </p>
                        <p>
                            Second, underestimating EDI. Trading-partner specs are full of optional segments, partner-specific qualifiers, and undocumented expectations. Teams budget a week for an integration that takes a month because the partner&apos;s test environment behaves differently from production. Build the translation layer to be defensive and log everything.
                        </p>
                        <p>
                            Third, optimizing the wrong thing. A research-grade route optimizer is impressive in a demo and useless if it cannot respect a real driver&apos;s hours-of-service or a customer&apos;s delivery window. We start from the constraints that actually bind your operation and move the cost-per-stop number, rather than chasing a theoretical optimum nobody can dispatch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why founder-led matters for logistics</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Logistics software is operational software — when it breaks, freight stops and money stops. You do not want the person who understands your load state machine to be a contractor three time zones away who rotates off the project next quarter. We are US-based and founder-led, and the person who designs your data model is reachable when a trading partner changes their spec at the worst possible moment.
                        </p>
                        <p>
                            William Beltz writes or reviews every line that touches your loads, your rates, and your settlement. NDAs are mutual and signed before discovery. Source code lives in your GitHub organization, not ours. The handoff is documented for either ongoing collaboration or in-house ownership — your call.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MITRE ATT&amp;CK pentests tied to supply-chain threat models</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Logistics platforms are targeted by ransomware affiliates, freight-fraud rings, and account-takeover crews who know exactly how a tender flow works. We run <Link href="/services/penetration-testing" className="text-amber-400 hover:underline">penetration tests</Link> mapped to the MITRE ATT&amp;CK techniques those adversaries actually use, then deliver a heatmap of which techniques succeed, which get detected, and which get blocked.
                        </p>
                        <p>
                            For the dispatch boards, carrier portals, and tracking APIs that carry the operation, <Link href="/services/web-app-pentest" className="text-amber-400 hover:underline">web application penetration testing</Link> covers authentication, authorization, tender acceptance, and the integration endpoints fraud rings probe first. Every finding maps to ATT&amp;CK technique IDs so your team knows what to alert on.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Can you build EDI integration into a custom TMS?",
                                a: "Yes. We handle the common freight transaction sets — 204 load tender, 990 response, 214 shipment status, 210 invoice, 997 acknowledgment — over AS2, SFTP, or a VAN, with partner-specific mapping and a full audit trail of every document exchanged.",
                            },
                            {
                                q: "Do you integrate with carrier and rating APIs?",
                                a: "Yes — parcel rating and tracking (FedEx, UPS, USPS), LTL and FTL aggregators, project44 and FourKites visibility feeds, and ELD or telematics providers. Each integration gets retry logic, rate-limit handling, and graceful degradation when an upstream API is down.",
                            },
                            {
                                q: "How do you approach route optimization?",
                                a: "We start from the constraints that actually bind your operation — time windows, capacity, hours-of-service, multi-stop sequencing, backhaul — and build a solver on a mapping engine plus a constraint library. We do not oversell a research-grade optimizer when a tuned heuristic ships faster and moves the cost number.",
                            },
                            {
                                q: "Is supply-chain software a real security target?",
                                a: "Yes. Freight fraud, double-brokering, load-board account takeover, and ransomware on TMS and WMS systems are all active. We map pentests to supply-chain adversary techniques and harden the authentication, authorization, and tender-acceptance paths fraud rings probe first.",
                            },
                            {
                                q: "Can a custom TMS replace our spreadsheet-and-email dispatch?",
                                a: "That is one of the most common builds we scope. A focused first release covers load entry, carrier assignment, status tracking, and document capture in one place — replacing the spreadsheet-plus-inbox workflow that breaks down past a certain load volume.",
                            },
                            {
                                q: "Why is logistics treated as a specialized software domain?",
                                a: "The data is event-heavy and time-sensitive, the integration surface is wide (EDI, carriers, visibility, accounting, customs), and the operational tolerance for downtime is low because freight does not stop moving. A generic build team learns those constraints the expensive way.",
                            },
                            {
                                q: "What does a $25,000 logistics build look like?",
                                a: "A focused MVP — a dispatch board that captures loads, assigns carriers, tracks status, and stores rate confirmations and BOLs, with RBAC and an audit log. Scoped tight, it ships in 4 to 8 weeks without v1 feature creep.",
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
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Operational systems built around your real freight workflows, not a generic template." },
                            { slug: "api-development", title: "API Development", desc: "EDI translation layers, carrier integrations, and rating APIs with retry and audit logic." },
                            { slug: "saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant TMS and visibility platforms for 3PLs and brokerages." },
                            { slug: "web-app-pentest", title: "Web App Pentest", desc: "Dispatch boards, carrier portals, and tracking APIs tested against fraud-ring techniques." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "MITRE ATT&CK-aligned testing for ransomware and account-takeover threats." },
                            { slug: "devops-engineering", title: "DevOps Engineering", desc: "Hardened pipelines and high-availability infrastructure for systems freight depends on." },
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

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["build-vs-buy", "internal-tools", "pentest"]}
                        heading="Logistics engineering & build reading"
                        pinned={["build-vs-buy-software-2026", "custom-crm-development-guide", "what-is-penetration-testing"]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Build logistics software that keeps freight moving.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-amber-400 hover:underline">book a 20-minute scope call</Link>. Mutual NDA signed before discovery. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
