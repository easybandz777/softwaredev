import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Factory, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom Manufacturing Software Development | QuantLab",
    description:
        "Custom manufacturing software — ERP integration, shop-floor tooling, quote configurators, ITAR-aware builds, OT/IT segmentation. Founder-led, US-based.",
    alternates: { canonical: "https://quantlabusa.dev/industries/manufacturing" },
    openGraph: {
        title: "Custom Manufacturing Software — ERP, Shop Floor & Quote Configurators",
        description:
            "Custom-built software for fabricators, machine shops, and contract manufacturers. ERP integration, shop-floor data, ITAR-aware compliance.",
        url: "https://quantlabusa.dev/industries/manufacturing",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Manufacturing Software Development | QuantLab",
        description:
            "ERP-integrated shop-floor tooling, quote configurators, and ITAR-aware manufacturing software.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Manufacturing Software Development",
    url: "https://quantlabusa.dev/industries/manufacturing",
    description:
        "Custom software for fabricators, machine shops, contract manufacturers, and assembly operations. ERP integration, shop-floor tooling, configurators, and ITAR/CMMC-aware controls.",
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
        { "@type": "ListItem", position: 3, name: "Manufacturing", item: "https://quantlabusa.dev/industries/manufacturing" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Manufacturing Software Development",
    name: "Custom Manufacturing Software Development",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for fabricators, machine shops, contract manufacturers, and assembly operations. ERP integration (NetSuite, Acumatica, Epicor, IQMS), shop-floor data capture, quote configurators, and ITAR/CMMC-aware builds.",
    url: "https://quantlabusa.dev/industries/manufacturing",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Why is manufacturing treated as a special case for software development?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Three pressures converge. First, the existing systems of record (NetSuite, Acumatica, Epicor, IQMS, Plex, Fishbowl) are deeply embedded in operations and famously rigid about how data flows in and out. Second, the shop floor is a real environment — Ethernet-connected machines, OT networks segregated from IT, paper travelers, barcode scanners, and operators wearing gloves who need fast, durable interfaces. Third, the compliance perimeter for US manufacturing — ITAR/EAR for defense and dual-use exports, CMMC for defense supply chain, FDA QSR for medical devices, IATF 16949 for automotive — is intense enough that ignoring it can cost the contract.",
            },
        },
        {
            "@type": "Question",
            name: "Can you integrate with our ERP (NetSuite, Acumatica, Epicor, IQMS)?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. NetSuite has the best modern API surface; we build the lead-to-quote and shop-floor data flow on top of it. Acumatica and Epicor are workable. IQMS is harder — usually a flat-file or scheduled-export integration is the right call.",
            },
        },
        {
            "@type": "Question",
            name: "Are you familiar with ITAR and CMMC?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. ITAR/EAR controls require US-citizen workforce on data with export-controlled content, segregation in storage, and explicit data-residency in US-only environments. CMMC Level 2 (the typical requirement for defense subcontractors handling CUI) involves 110 NIST 800-171 controls. We build the technical safeguards into the architecture; we do not author the System Security Plan, that is your CISO's work.",
            },
        },
        {
            "@type": "Question",
            name: "Can you replace ProShop or JobBOSS?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We can build the parts those platforms do well, plus the parts they cover badly or not at all. The economics usually break in favor of custom once you have a unique workflow the platform forces into manual workarounds, or once per-seat fees outpace engineering cost.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 manufacturing build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A focused tool — a quote configurator with material catalog and pricing rules, a shop-floor data capture app that runs on a tablet, or a customer portal showing order status. 4 to 8 weeks. Discovery sprint is paid separately so the integration surface is documented before we commit.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle ITAR-controlled data?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Data residency in US-only AWS or Azure regions, US-citizen-only engineering team with cleared access, encrypted-at-rest with US-controlled key management, audit logging on every access, and a documented technology control plan (TCP) integrated with the customer's ITAR compliance program.",
            },
        },
        {
            "@type": "Question",
            name: "Can you handle OT/IT network segmentation for shop-floor systems?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The pattern is a small Linux gateway in the OT zone pulling data from PLCs and CNC controllers (OPC UA, Modbus, MTConnect), then publishing through a one-way DMZ data diode or a carefully scoped message bus into the IT-side analytics and ERP integration layer. We do not put web-facing services on the OT network.",
            },
        },
        {
            "@type": "Question",
            name: "Do you build for job shops, repetitive manufacturers, or hybrids?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "All three, with different scopes. Job shops need quoting, traveler management, and shop-floor data capture with high product variability. Repetitive manufacturers need MRP-adjacent planning, lot tracking, and yield analytics. Hybrids — most US contract manufacturers — need both, and that is where the platforms tend to fail and custom pays back.",
            },
        },
    ],
};

export default function ManufacturingIndustryPage() {
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
                        <li className="text-gray-300">Manufacturing</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-stone-600 to-orange-500 mb-6">
                        <Factory className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Manufacturing — ERP, Shop Floor, and Quote Configurators
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Quote configurators, shop-floor data capture, customer portals, ERP integration, and ITAR-aware compliance — built for fabricators, machine shops, contract manufacturers, and assembly operations that need software fitted to the way the shop actually runs.
                    </p>
                    <ConsultationCTA label="Scope a Manufacturing Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why manufacturing is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Manufacturing combines three pressures that almost no other industry faces simultaneously. The existing systems of record are old, deeply embedded, and famously rigid. NetSuite, Acumatica, Epicor, IQMS, Plex, JobBOSS, ProShop, and Fishbowl each model the shop differently, expose different integration surfaces, and lock the business into their workflow opinions. Most US manufacturers running mid-volume contract work have a system that does 70% of the job correctly and forces the other 30% into Excel, paper travelers, and email — at the exact volume where that overhead starts to cost real production time.
                        </p>
                        <p>
                            The shop floor itself is a real, physical environment. Ethernet-connected machines on an OT network deliberately segregated from the IT side. Operators wearing gloves who need a tablet interface that responds to a knuckle tap. Paper travelers that still circulate because someone in the front office is comfortable with them. Barcode scanners that have been on the floor for fifteen years and need to keep working. Web-app design for office workers does not survive contact with this environment. We build with the assumption that the tooling will be used in a hot shop by tired people, and that the interface needs to be fast and durable.
                        </p>
                        <p>
                            The compliance perimeter is also intense. ITAR and EAR for defense and dual-use exports. CMMC Level 2 with 110 NIST 800-171 controls for defense subcontractors handling CUI. FDA Quality System Regulation (21 CFR Part 820) for medical-device manufacturers. IATF 16949 for automotive. AS9100 for aerospace. ISO 9001 across most of the rest. Compliance failures cost contracts, not just fines.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for manufacturers</h2>
                    <ul className="space-y-3">
                        {[
                            "Quote and estimate configurators — material catalog, labor units, tooling overhead, customer-specific pricing",
                            "Customer-facing order portals — order status, drawings, shipping, invoice history",
                            "Shop-floor data capture — operator clock-in, job traveler tracking, downtime reasons, scrap and yield",
                            "ERP integration on top of NetSuite, Acumatica, Epicor, or IQMS",
                            "Machine integration — OPC UA, Modbus, MTConnect data ingest into a unified analytics layer",
                            "Quality control workflows — incoming inspection, in-process checks, FAI reports, deviation/CAR/CAPA",
                            "Document control and revision management — drawings, work instructions, ECN/ECO routing",
                            "Vendor and supplier portals — RFQ-to-PO, packing slip capture, ASN ingest",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common manufacturing projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Quote configurator for a job shop", d: "Multi-step configurator with material catalog, labor units, tooling overhead, and customer-specific markup. Produces a branded PDF quote and a structured estimate that lands cleanly into the ERP." },
                            { t: "Shop-floor data capture tablet app", d: "Operator clock-in, job traveler tracking, downtime reason codes, scrap and yield reporting, and barcode-driven workflows. Built to run on inexpensive Android tablets in a hot shop environment." },
                            { t: "ERP integration layer", d: "REST adapter between the manufacturer's custom tooling and NetSuite, Acumatica, or Epicor. Quotes, sales orders, work orders, item masters, BOMs, and inventory updates synchronized with conflict-resolution rules and audit logging." },
                            { t: "Machine data ingest", d: "Small Linux gateway in the OT zone pulling OPC UA, Modbus, or MTConnect data from PLCs and CNC controllers. Publishes through a controlled DMZ into IT-side analytics and OEE dashboards." },
                            { t: "Customer-facing order portal", d: "Branded portal where customers view order status, download drawings and certs, request changes, and pay invoices. Often the highest-leverage win because it removes a meaningful share of inbound support load." },
                            { t: "Quality control workflow", d: "Incoming inspection, in-process checks, first-article inspection (AS9102 forms), supplier deviation requests, and CAR/CAPA tracking with evidence retention aligned to ISO 9001 and AS9100 audits." },
                            { t: "Document control and ECN/ECO routing", d: "Drawing revision management, work-instruction versioning, engineering change order approval routing, and a clean audit trail showing who approved what and when." },
                            { t: "Vendor and supplier portal", d: "RFQ-to-PO workflow for outside processing, packing slip and ASN capture, vendor scorecard, and supplier quality follow-up." },
                            { t: "OEE and downtime analytics", d: "Real-time OEE calculation by machine and by shift, downtime Pareto, and trend dashboards for plant management. Built on top of the machine-data ingest layer." },
                            { t: "ITAR or CMMC-aware data segregation", d: "Hardened environment for ITAR-controlled or CUI data — US-only data residency, US-citizen engineering team, encrypted-at-rest with US-controlled keys, and audit logging mapped to NIST 800-171 controls." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Compliance and security considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">ITAR and EAR.</span> Defense articles and technical data under ITAR (22 CFR 120-130) require US-person workforce on the data, US-only data residency, controlled access, and a documented technology control plan. EAR-controlled data (15 CFR 730-774) follows a parallel but slightly different model. We build environments that meet these requirements; we coordinate with your empowered official on TCP integration.
                        </p>
                        <p>
                            <span className="text-white font-semibold">CMMC and NIST 800-171.</span> The DoD CMMC program (Level 2 for most subcontractors handling CUI) requires 110 controls drawn from NIST SP 800-171. We map architectural decisions to each applicable control family: access control, audit and accountability, configuration management, identification and authentication, incident response, media protection, system and communications protection, and system and information integrity.
                        </p>
                        <p>
                            <span className="text-white font-semibold">FDA QSR / 21 CFR Part 820.</span> Medical-device manufacturers need design controls, document control, CAPA, change control, and complete traceability through device history records. We build the digital surfaces (QMS modules, eDHR, ECN routing) that produce the evidence trail your FDA auditor expects.
                        </p>
                        <p>
                            <span className="text-white font-semibold">IATF 16949, AS9100, ISO 9001.</span> Industry-specific QMS standards have specific record retention, traceability, and process-evidence requirements. Our builds capture the evidence by default rather than as an afterthought.
                        </p>
                        <p>
                            <span className="text-white font-semibold">21 CFR Part 11 (electronic records and signatures).</span> For medical and pharma manufacturers, electronic records require validation, audit trails, controlled change to records, and binding electronic signatures. We integrate Part 11-aware e-signature workflows where the regulation applies.
                        </p>
                        <p>
                            <span className="text-white font-semibold">OT/IT segmentation.</span> Operational Technology networks running PLCs and CNC controllers must remain segmented from the IT side. We build gateways that bridge the data flow without putting web-facing services on the OT network. See <Link href="/services/network-pentest" className="text-orange-400 hover:underline">network penetration testing</Link> for the assessment side.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for manufacturing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 15 or 16 with React 19 and TypeScript for the web layer — office and customer-facing surfaces. For shop-floor tablet apps, the same stack runs as a PWA installed on inexpensive Android tablets with offline-capable form capture, optimistic writes, and background sync to the backend. Postgres on Neon, Supabase, or RDS for the system of record. Prisma or Drizzle as the ORM.
                        </p>
                        <p>
                            For ERP integration, a normalized internal adapter layer abstracts the carrier-specific quirks of NetSuite, Acumatica, Epicor, or IQMS behind a clean internal API. Each ERP target becomes a new adapter rather than a rewrite. For machine data, a small Linux gateway (Raspberry Pi 5 or an industrial fanless box) running Node-RED or a custom Rust service pulls OPC UA, Modbus, or MTConnect data; the gateway publishes through a controlled DMZ into an MQTT broker or Kafka topic on the IT side, where it feeds analytics and ERP integration. For CUI or ITAR workloads, deployment shifts to AWS GovCloud or Azure Government with US-citizen-only engineering access and KMS-managed envelope encryption.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused shop tool", body: "Quote configurator with branded PDF output, a tablet-based shop-floor data capture app, or a customer-facing order portal. 4 to 8 weeks." },
                            { tier: "$60K", title: "Shop-floor + ERP integration platform", body: "Quote-to-cash workflow integrated with NetSuite, Acumatica, or Epicor, plus shop-floor data capture and an OEE dashboard. 12 to 18 weeks." },
                            { tier: "$150K+", title: "Multi-plant or CMMC-ready platform", body: "Multi-plant scoping, ITAR or CMMC-aware data segregation, machine-data ingest from the OT side, QMS document control, and full audit-evidence capture. 18 to 36 weeks." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-orange-400 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery is paid separately at $2,500 and creditable against any full engagement. <Link href="/contact" className="text-orange-400 hover:underline">Book a scope call</Link> to walk through your ERP, your shop-floor environment, and your compliance posture.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Three patterns recur. First, the team tries to replace the ERP. Almost always the wrong move — the ERP is good at receivables, inventory, and the GL, and ripping it out at the same time as a new shop-floor system creates an unbearable transition. The right scope is to keep the ERP and build the shop-floor and customer-facing surfaces that the ERP is poor at.
                        </p>
                        <p>
                            Second, machine data gets pulled into the web app directly. A web service connects to an OPC UA endpoint on the OT network and now web-facing infrastructure sits inside what was supposed to be a segregated environment. The right pattern is a small dedicated gateway on the OT side publishing into a buffered, controlled message channel that the IT side consumes. Build that segmentation in. The cost is small; the risk reduction is large.
                        </p>
                        <p>
                            Third, ITAR and CMMC requirements get treated as a paperwork problem. A defense subcontractor signs the contract, plans to handle the compliance after launch, and discovers six months later that the architecture cannot retrofit US-only data residency or US-citizen access controls. The fix is a rebuild. Build the controls in at architecture time, not as a phase-two upgrade.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Why is manufacturing treated as a special case for software development?", a: "Three pressures: ERP systems are deeply embedded and rigid, the shop floor is a real physical environment that web-design conventions don't survive, and the compliance perimeter (ITAR, CMMC, FDA QSR, IATF, AS9100) is intense enough that mistakes cost contracts." },
                            { q: "Can you integrate with our ERP (NetSuite, Acumatica, Epicor, IQMS)?", a: "Yes. NetSuite has the best modern API surface. Acumatica and Epicor are workable. IQMS is harder — usually flat-file or scheduled-export integration." },
                            { q: "Are you familiar with ITAR and CMMC?", a: "Yes. ITAR/EAR requires US-citizen workforce, segregated storage, and US-only data residency. CMMC Level 2 maps to 110 NIST 800-171 controls. We build the technical safeguards; you author the System Security Plan." },
                            { q: "Can you replace ProShop or JobBOSS?", a: "We can build the parts they cover well plus the parts they cover badly or not at all. The economic case usually breaks on unique workflows or per-seat fees outpacing engineering cost." },
                            { q: "What does a $25,000 manufacturing build look like?", a: "A focused tool — quote configurator, shop-floor data capture app, or customer portal. 4 to 8 weeks. Discovery sprint paid separately." },
                            { q: "How do you handle ITAR-controlled data?", a: "US-only AWS or Azure regions, US-citizen-only engineering team with cleared access, encrypted-at-rest with US-controlled keys, audit logging, and a documented technology control plan integrated with the customer's program." },
                            { q: "Can you handle OT/IT network segmentation for shop-floor systems?", a: "Yes. A small Linux gateway in the OT zone pulls data from PLCs and CNC controllers and publishes through a controlled DMZ into the IT-side analytics and ERP integration. We do not put web-facing services on the OT network." },
                            { q: "Do you build for job shops, repetitive manufacturers, or hybrids?", a: "All three. Job shops need quoting, traveler management, and shop-floor capture. Repetitive manufacturers need MRP-adjacent planning, lot tracking, and yield analytics. Hybrids — most US contract manufacturers — need both." },
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
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Quote configurators, shop-floor tablet apps, and ERP-adjacent operations tools." },
                            { slug: "web-applications", title: "Web Applications", desc: "Customer order portals, vendor portals, and office-facing dashboards." },
                            { slug: "network-pentest", title: "Network Pentest", desc: "OT/IT segmentation review and shop-floor network assessment." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "CMMC- and ITAR-aware penetration testing for defense subcontractors." },
                            { slug: "cloud-infrastructure", title: "Cloud Infrastructure", desc: "AWS GovCloud, Azure Government, and US-citizen-controlled deployment patterns." },
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Deposit collection, milestone billing, and reconciliation into the ERP." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-orange-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Build the tools the ERP cannot.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-orange-400 hover:underline">book a 20-minute scope call</Link>. Mutual NDA before discovery. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
