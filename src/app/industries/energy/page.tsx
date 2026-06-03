import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Zap, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Energy Software Development & Security | QUANT LAB USA",
    description:
        "Custom energy software — utility field ops, renewables asset management, oil-and-gas tooling, and compliance. NERC CIP-aware builds plus MITRE ATT&CK pentests. Founder-led, US-based.",
    slug: "industries/energy",
    image: "/og-services.png",
    type: "article",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Software for Energy",
    url: "https://quantlabusa.dev/industries/energy",
    description:
        "Energy-specific software development — utility field operations, renewables asset management, oil-and-gas tooling, and compliance reporting, with ICS and SCADA work scoped case-by-case. Founder-led, US-based, mutual NDA from day one.",
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
        { "@type": "ListItem", position: 3, name: "Energy", item: "https://quantlabusa.dev/industries/energy" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Energy Software Development",
    name: "Custom Software Development for Energy",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for energy — utility field operations, renewables asset management, oil-and-gas tooling, and compliance reporting. ICS and SCADA-adjacent work is scoped case-by-case, with the IT and data layer kept distinct from operational technology. Security work tied to energy-sector threat models via MITRE ATT&CK.",
    url: "https://quantlabusa.dev/industries/energy",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Do you write software that controls grid or plant equipment?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. We build the IT and data layer — field-ops apps, asset management, analytics, dashboards, and compliance reporting — and we keep it cleanly separated from operational technology. We do not write control logic for SCADA, PLCs, RTUs, or safety-instrumented systems. Any SCADA-adjacent work, such as reading historian data into a reporting layer, is scoped case-by-case with explicit boundaries and your OT and security teams in the room.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle the IT and OT boundary?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Carefully and explicitly. Modern energy security frameworks insist on strong segmentation between the corporate IT network and the operational-technology environment. Our software lives on the IT side. When it needs data that originates in OT — for example, generation figures from a historian — we design a one-way or tightly controlled data path that respects the segmentation your security architecture requires, rather than reaching into the control network.",
            },
        },
        {
            "@type": "Question",
            name: "What about NERC CIP and other energy compliance regimes?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "For utilities subject to NERC CIP, the bulk electric system has strict cyber and access requirements, and most CIP scope sits in the OT environment we deliberately stay out of. Where our IT-side software touches CIP-relevant data or evidence, we build the access controls, logging, and audit trails to support your compliance team. We do not act as your CIP compliance authority — we build software that helps you meet it.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build field-operations software for a utility or service company?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — this is a core build. Work-order management, mobile field apps that function offline in remote locations, asset and equipment tracking, inspection workflows, crew scheduling, and GIS-aware mapping. The goal is to get crews accurate work packages in the field and clean data back, even where connectivity is poor.",
            },
        },
        {
            "@type": "Question",
            name: "Do you work with renewables and oil-and-gas operators?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. For renewables we build asset-management and production-monitoring platforms for solar and wind portfolios, PPA and settlement tooling, and analytics on generation data. For oil and gas we build field-data capture, production accounting, regulatory and emissions reporting, and land-and-lease tooling — all on the IT and data side, separate from control systems.",
            },
        },
        {
            "@type": "Question",
            name: "Why is energy software a special case?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Three things set it apart. The IT and OT divide is a hard security boundary that responsible software has to respect. The compliance regimes — NERC CIP, FERC, EPA and state environmental reporting — are heavy and specific. And the field environment is harsh, with remote sites, poor connectivity, and a real need for offline-capable software. A generic build mishandles all three, and the OT boundary mistakes can be dangerous.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 energy build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Around $25,000 covers a focused MVP on the IT and data side — one high-value workflow shipped well. Example: a mobile field-inspection app that works offline, captures structured data and photos at remote sites, and syncs clean records to a central dashboard when connectivity returns. Scoped tight, it ships in 4 to 8 weeks.",
            },
        },
    ],
};

export default function EnergyIndustryPage() {
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
                        <li className="text-gray-300">Energy</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-400 mb-6">
                        <Zap className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Energy — Field Ops, Assets, and Compliance, Built to Respect the OT Boundary
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Utility field operations, renewables asset management, oil-and-gas tooling, and compliance reporting — built by a US-based, founder-led team that keeps the IT and data layer cleanly separated from operational technology and scopes any SCADA-adjacent work case-by-case.
                    </p>
                    <ConsultationCTA label="Scope an Energy Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">In energy, the IT and OT divide is a hard line. We respect it.</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Energy software splits into two worlds with very different rules. There is operational technology — the SCADA systems, PLCs, RTUs, and safety-instrumented systems that actually run the grid, the plant, or the well. And there is information technology — the field-ops apps, asset registries, analytics, dashboards, and compliance reporting that the business runs on. The most important thing a responsible software firm can do in this sector is know which side it belongs on and never blur the line.
                        </p>
                        <p>
                            We build on the IT and data side, and we keep a clean boundary with operational technology. We do not write control logic for SCADA, PLCs, or safety systems — that is a specialized engineering discipline with safety and reliability stakes we will not pretend to own. When our software needs data that originates in OT, such as generation figures from a historian, we design a tightly controlled, segmentation-respecting data path rather than reaching into the control network. Any SCADA-adjacent work is scoped case-by-case, with explicit boundaries and your OT and security teams in the room.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why energy is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The IT-OT boundary is the defining constraint. Energy security frameworks insist on strong segmentation between corporate networks and the operational environment that runs critical infrastructure, and the consequences of getting it wrong range from a compliance violation to a safety incident. Software that casually bridges the two is a liability. We treat the boundary as sacred, build firmly on the IT side, and design any data exchange to honor the segmentation your architecture requires.
                        </p>
                        <p>
                            Compliance and the field environment compound it. NERC CIP governs the bulk electric system with strict cyber and access rules; FERC, EPA, and state agencies layer on environmental and market reporting; emissions and methane rules keep tightening. Meanwhile the work happens at remote substations, well pads, and turbine sites where connectivity is poor and devices take a beating, so field software has to work offline and sync reliably. A generic team underestimates the compliance weight and over-assumes the network — and may not even register the OT boundary as the hazard it is.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for energy operators</h2>
                    <ul className="space-y-3">
                        {[
                            "Field-operations apps — work orders, mobile data capture that works offline, inspections, and crew scheduling",
                            "Asset and equipment management — registries, maintenance history, condition tracking, and GIS-aware mapping",
                            "Renewables asset management — solar and wind production monitoring, portfolio dashboards, and PPA settlement",
                            "Oil-and-gas tooling — field-data capture, production accounting, and land-and-lease management",
                            "Compliance and regulatory reporting — emissions, environmental, and market-filing workflows with audit trails",
                            "Analytics and historian reporting — reading approved OT data into IT-side dashboards across a controlled boundary",
                            "Customer and billing tools — usage portals and billing for utilities and distributed-energy providers",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common energy projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Offline-capable field-inspection app", d: "A mobile app that works without connectivity at remote sites, captures structured inspection data and photos, enforces required fields, and syncs clean records to a central dashboard when the device is back online." },
                            { t: "Work-order and crew-scheduling system", d: "Dispatch, work packages, asset linkage, crew and equipment scheduling, and completion capture — getting field crews accurate jobs and clean data back without paper." },
                            { t: "Renewables portfolio dashboard", d: "Production monitoring across a solar or wind portfolio, performance-versus-expected analysis, downtime tracking, and PPA settlement, pulling generation data across a controlled boundary." },
                            { t: "Production accounting for oil and gas", d: "Field-data capture, allocation, production accounting, run tickets, and the reporting upstream and midstream operators need for partners and regulators." },
                            { t: "Compliance and emissions reporting", d: "Workflows for EPA, state, and market filings — data collection, validation, submission tracking, and an audit trail that survives a regulator's review." },
                            { t: "Asset registry with maintenance history", d: "A single source of truth for equipment, maintenance history, warranty, inspection cycles, and condition, with GIS-aware mapping for geographically distributed assets." },
                            { t: "Controlled historian-to-IT reporting layer", d: "Where appropriate and explicitly scoped, a tightly controlled data path that brings approved historian or sensor data into IT-side analytics without reaching into the control network." },
                            { t: "Customer usage and billing portal", d: "A usage portal and billing system for a utility, co-op, or distributed-energy provider, with payments handled through a tokenized gateway." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Security and compliance considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">IT-OT segmentation.</span> This is the first principle. Our software lives on the IT side and never reaches into the control network. Where a data exchange with OT is genuinely needed, we design a one-way or tightly controlled, monitored path that respects the segmentation your security architecture mandates. We do not build anything that could become a pivot into operational technology.
                        </p>
                        <p>
                            <span className="text-white font-semibold">NERC CIP.</span> For utilities subject to NERC CIP, most CIP scope sits in the OT environment we deliberately stay out of. Where our IT-side software touches CIP-relevant data or evidence, we build the access controls, logging, and audit trails that support your compliance program. We are not your CIP compliance authority — we build software that helps you meet it.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Environmental and market reporting.</span> EPA, state environmental agencies, FERC, and ISO and RTO market rules impose specific reporting obligations. We do not give legal or regulatory advice, but we build the data capture, validation, and audit trails your compliance and regulatory teams need to file with confidence.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Critical-infrastructure threat landscape.</span> The energy sector is a top target for nation-state actors and ransomware groups, and incidents like the 2021 Colonial Pipeline attack showed how an IT-side compromise can cascade into operational shutdown. We harden the IT systems we build and map pentests to the techniques those adversaries use.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Field-device and access security.</span> Field apps run on devices in the wild. We enforce strong authentication, encrypt data at rest on the device, and design sync so a lost or stolen device does not become a data breach.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for energy</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 16 on the App Router with React and TypeScript end-to-end for dashboards and back-office systems. For field apps, React Native or an offline-first progressive web app with a local store and conflict-aware sync so crews can work without connectivity. Postgres for the system of record, with a time-series store when production or sensor data volume demands it. Prisma or Drizzle as the type-safe ORM, and a mapping layer for GIS-aware asset and field views.
                        </p>
                        <p>
                            Background workers (Inngest or a self-hosted queue) handle sync reconciliation, report generation, and analytics rollups. Where an approved OT data path is in scope, it runs through a tightly controlled, monitored boundary — never a direct connection into the control network. Strong authentication and on-device encryption protect field data. Sentry plus a log aggregator for observability, with audit-grade logging where compliance requires it. The IT-side web tier deploys to Vercel or a hardened cloud environment matched to the operator&apos;s security posture; sensitive systems move to a controlled VPC.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused MVP", body: "A single high-value IT-side workflow shipped clean — an offline-capable field-inspection app that captures structured data and photos at remote sites and syncs clean records to a dashboard. 4 to 8 weeks." },
                            { tier: "$60K", title: "Production platform", body: "A real operational system — work-order and asset management, a renewables portfolio dashboard, or a compliance-reporting workflow, with audit trails and field-device security. 10 to 16 weeks." },
                            { tier: "$150K+", title: "Platform with controlled data paths", body: "A full field-ops or asset platform, potentially including a tightly scoped historian-to-IT reporting boundary, with the segmentation and audit posture critical-infrastructure software demands. 16 to 28 weeks with phased delivery." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-yellow-400 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery is paid separately at $2,500 and is creditable against any full engagement. See the <Link href="/contact" className="text-yellow-400 hover:underline">contact page</Link> for the full scoping flow, or the <Link href="/pricing" className="text-yellow-400 hover:underline">pricing page</Link> for engagement models.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            First, blurring the IT-OT boundary for convenience. A team wires an IT dashboard straight into the control network to grab a live value, and quietly creates a path an attacker could ride into operational technology. The convenience is never worth the risk. Approved data crosses the boundary through a controlled, monitored path or it does not cross at all.
                        </p>
                        <p>
                            Second, assuming connectivity. Field software designed for an office network fails at a substation or well pad where signal is intermittent. Offline-first is not a nice-to-have in energy field ops — it is the baseline, and bolting it on after the fact means rebuilding the data layer.
                        </p>
                        <p>
                            Third, underestimating compliance reporting. NERC CIP evidence, EPA and state environmental filings, and market reporting are specific and unforgiving, and a system that did not plan for the audit trail forces a painful retrofit. We build the validation and audit trail in from the start so a regulator&apos;s request is a query, not a scramble.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why founder-led matters for energy</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Energy is critical infrastructure, and the IT-OT boundary is not something you want an anonymous offshore contractor improvising around. You need a senior who understands why the segmentation exists, will say no to the convenient shortcut, and is accountable for the architecture. We are US-based and founder-led, and the person who designs your data paths is the person who can explain them to your security team and your regulators.
                        </p>
                        <p>
                            William Beltz writes or reviews every line, and personally owns the decisions about where our software sits relative to your operational technology. NDAs are mutual and signed before discovery. Source code lives in your GitHub organization, not ours. The handoff is documented for either ongoing collaboration or in-house ownership — your call.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MITRE ATT&amp;CK pentests tied to energy-sector threat models</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The energy sector is a top target for nation-state actors and ransomware groups, and the 2021 Colonial Pipeline incident showed how an IT-side compromise can force an operational shutdown. We run <Link href="/services/penetration-testing" className="text-yellow-400 hover:underline">penetration tests</Link> on the IT systems we build and assess, mapped to the MITRE ATT&amp;CK techniques those adversaries actually use, then deliver a heatmap of which techniques succeed, which get detected, and which get blocked.
                        </p>
                        <p>
                            For the field-ops apps, dashboards, and reporting systems on the IT side, <Link href="/services/web-app-pentest" className="text-yellow-400 hover:underline">web application penetration testing</Link> covers authentication, authorization, and the controlled data boundaries that separate IT from operational technology. We focus on the IT and application tier and coordinate with your OT security specialists on the operational environment. Every finding maps to ATT&amp;CK technique IDs so your team knows what to alert on.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Do you write software that controls grid or plant equipment?",
                                a: "No. We build the IT and data layer — field-ops apps, asset management, analytics, dashboards, and compliance reporting — kept cleanly separated from operational technology. We do not write control logic for SCADA, PLCs, RTUs, or safety systems. Any SCADA-adjacent work, like reading historian data into reporting, is scoped case-by-case with explicit boundaries and your OT and security teams in the room.",
                            },
                            {
                                q: "How do you handle the IT and OT boundary?",
                                a: "Carefully and explicitly. Our software lives on the IT side. When it needs data originating in OT, such as generation figures from a historian, we design a one-way or tightly controlled data path that respects your segmentation, rather than reaching into the control network.",
                            },
                            {
                                q: "What about NERC CIP and other energy compliance regimes?",
                                a: "For utilities subject to NERC CIP, most CIP scope sits in the OT environment we stay out of. Where our IT-side software touches CIP-relevant data or evidence, we build the access controls, logging, and audit trails to support your compliance team. We do not act as your CIP compliance authority.",
                            },
                            {
                                q: "Can you build field-operations software for a utility or service company?",
                                a: "Yes — a core build. Work-order management, mobile field apps that function offline in remote locations, asset tracking, inspection workflows, crew scheduling, and GIS-aware mapping, so crews get accurate work packages and clean data flows back even where connectivity is poor.",
                            },
                            {
                                q: "Do you work with renewables and oil-and-gas operators?",
                                a: "Yes. For renewables, asset-management and production-monitoring platforms, PPA and settlement tooling, and generation analytics. For oil and gas, field-data capture, production accounting, regulatory and emissions reporting, and land-and-lease tooling — all on the IT and data side, separate from control systems.",
                            },
                            {
                                q: "Why is energy software a special case?",
                                a: "The IT and OT divide is a hard security boundary responsible software must respect, the compliance regimes (NERC CIP, FERC, EPA and state reporting) are heavy and specific, and the field environment is harsh with remote sites and poor connectivity. A generic build mishandles all three, and the OT boundary mistakes can be dangerous.",
                            },
                            {
                                q: "What does a $25,000 energy build look like?",
                                a: "A focused MVP on the IT and data side — a mobile field-inspection app that works offline, captures structured data and photos at remote sites, and syncs clean records to a central dashboard when connectivity returns. Scoped tight, it ships in 4 to 8 weeks.",
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
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Field ops, asset management, and compliance tooling built on the IT and data side." },
                            { slug: "mobile-app-development", title: "Mobile App Development", desc: "Offline-first field apps for remote substations, well pads, and turbine sites." },
                            { slug: "api-development", title: "API Development", desc: "Controlled, segmentation-respecting data paths and integrations on the IT side." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "MITRE ATT&CK-aligned testing of IT systems for critical-infrastructure threats." },
                            { slug: "web-app-pentest", title: "Web App Pentest", desc: "Dashboards and reporting tools tested for authentication and boundary flaws." },
                            { slug: "devops-engineering", title: "DevOps Engineering", desc: "Hardened, auditable infrastructure matched to an energy operator's security posture." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-yellow-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["compliance", "pentest", "build-vs-buy"]}
                        heading="Energy engineering & security reading"
                        pinned={["what-is-penetration-testing", "build-vs-buy-software-2026", "custom-crm-development-guide"]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Build energy software that respects the boundary.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-yellow-400 hover:underline">book a 20-minute scope call</Link>. Mutual NDA signed before discovery. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
