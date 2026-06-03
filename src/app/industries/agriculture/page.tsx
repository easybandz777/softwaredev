import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Sprout, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Agriculture Software Development & Security | QUANT LAB USA",
    description:
        "Custom ag-tech software — farm management, IoT and sensor data, supply-chain traceability, and field connectivity. Secure builds plus MITRE ATT&CK pentests. Founder-led, US-based.",
    slug: "industries/agriculture",
    image: "/og-services.png",
    type: "article",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Software for Agriculture",
    url: "https://quantlabusa.dev/industries/agriculture",
    description:
        "Agriculture and ag-tech software development — farm management systems, IoT and sensor-data platforms, supply-chain traceability, and offline-capable field tools. Founder-led, US-based, mutual NDA from day one.",
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
        { "@type": "ListItem", position: 3, name: "Agriculture", item: "https://quantlabusa.dev/industries/agriculture" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Agriculture Software Development",
    name: "Custom Software Development for Agriculture",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for agriculture and ag-tech — farm management systems, IoT and sensor-data platforms, supply-chain traceability, and offline-capable field tools. Security work tied to agriculture-sector threat models via MITRE ATT&CK.",
    url: "https://quantlabusa.dev/industries/agriculture",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can you build a farm management system?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We build farm management software that tracks fields and boundaries, crop plans and rotations, inputs and applications, equipment and labor, and yields, with mapping that ties records to specific fields and zones. The aim is one system of record for the operation instead of a binder, a whiteboard, and three apps that do not talk.",
            },
        },
        {
            "@type": "Question",
            name: "Do you work with IoT and sensor data from the field?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We ingest data from soil-moisture probes, weather stations, irrigation controllers, tank and bin monitors, and connected equipment, then build the dashboards, alerts, and analytics on top. We handle the realities of field telemetry — intermittent connectivity, duplicate and out-of-order readings, and high data volume over a season.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build supply-chain traceability for food and ag products?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Traceability is increasingly a buyer and regulatory requirement, including under FSMA Section 204 for certain foods. We build lot and batch tracking from field to facility to shipment, capturing the key data elements and critical tracking events a recall or audit demands, with records that hold up under scrutiny.",
            },
        },
        {
            "@type": "Question",
            name: "Does field software need to work offline?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Almost always. Cellular coverage in a field is unreliable, so apps used by operators and agronomists have to capture data offline and sync when connectivity returns. We build offline-first from the start, with conflict-aware sync, because retrofitting it later means rebuilding the data layer.",
            },
        },
        {
            "@type": "Question",
            name: "Is agriculture software a real security target?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, and the stakes have risen. Agriculture is now treated as critical infrastructure, and ransomware attacks on grain cooperatives and food processors during planting and harvest windows have caused real disruption. We harden the platforms we build, secure the field-device and data paths, and map pentests to the techniques attackers use against the food and ag sector.",
            },
        },
        {
            "@type": "Question",
            name: "Why is agriculture software a special case?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The environment is hostile to software assumptions — poor connectivity, seasonal and weather-driven workloads, and geospatial data at the core of everything. The integration surface is fragmented across equipment brands and sensor vendors with proprietary formats. And traceability and food-safety requirements are tightening. A generic build underestimates connectivity, geospatial complexity, and the seasonal nature of the work.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 agriculture build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Around $25,000 covers a focused MVP — one high-value workflow shipped well. Example: an offline-capable field-records app that maps fields, logs inputs and applications against them, and syncs to a dashboard, giving the operation a clean record for compliance and decision-making. Scoped tight, it ships in 4 to 8 weeks.",
            },
        },
    ],
};

export default function AgricultureIndustryPage() {
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
                        <li className="text-gray-300">Agriculture</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-green-500 to-lime-400 mb-6">
                        <Sprout className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Agriculture — Farm Management, Sensor Data, and Traceability That Works in the Field
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Farm management systems, IoT and sensor-data platforms, supply-chain traceability, and offline-capable field tools — built by a US-based, founder-led team that designs for poor connectivity, geospatial data, and the seasonal reality of agriculture.
                    </p>
                    <ConsultationCTA label="Scope an Ag-Tech Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Software for agriculture has to survive the field.</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most software is built for an office with reliable internet and a steady workload. Agriculture offers neither. Cellular coverage drops to nothing in the middle of a field. The workload swings violently with the season — planting and harvest are all-hands sprints, the off-season is quiet. And nearly everything is geospatial: a record only means something when it is tied to a specific field, zone, or point on a map. Software that ignores these realities is software that gets abandoned by the second week of harvest.
                        </p>
                        <p>
                            We build ag-tech that holds up where the work happens. Field apps that capture data offline and sync when a signal returns. Sensor-data pipelines that tolerate intermittent, duplicate, and out-of-order readings without corrupting the record. Geospatial data at the core, not bolted on. And traceability built to satisfy the buyers and regulators increasingly demanding it. The result is software operators and agronomists actually use, because it works in the cab and the barn, not just the demo.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why agriculture is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The operating environment breaks ordinary software assumptions. Connectivity cannot be relied on, so offline-first is mandatory rather than optional. Workloads are seasonal and weather-driven, so the system has to handle a planting-week surge and a quiet winter without falling over or feeling over-built. And geospatial data is foundational — field boundaries, zones, application maps, and equipment tracks are the substance of the records, which means real mapping and spatial handling, not a latitude column tacked onto a table.
                        </p>
                        <p>
                            The integration surface is fragmented in a way few sectors match. Equipment from different manufacturers, sensors from a dozen vendors, irrigation controllers, and farm-data platforms each speak their own format, and standards adoption is uneven. Pulling a coherent picture from John Deere Operations Center, a soil-probe vendor, a weather API, and a grain-bin monitor takes real integration work. We have wired heterogeneous telemetry and geospatial data before and know where the effort concentrates — usually in normalizing messy field data into something analytics can trust.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for agriculture operators</h2>
                    <ul className="space-y-3">
                        {[
                            "Farm management systems — fields, crop plans, rotations, inputs, applications, equipment, labor, and yields",
                            "IoT and sensor-data platforms — soil moisture, weather, irrigation, and tank or bin monitors with alerts and analytics",
                            "Offline-first field apps — scouting, input logging, and inspections that capture data without connectivity and sync later",
                            "Supply-chain traceability — lot and batch tracking from field to facility to shipment for recalls and audits",
                            "Geospatial mapping — field boundaries, management zones, application maps, and equipment-track visualization",
                            "Ag-business tooling — input inventory, work orders, contracts, grain or commodity marketing, and settlement",
                            "Agronomy and decision tools — variable-rate recommendations, scouting analytics, and yield analysis",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common agriculture projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Offline-first field-records app", d: "Map fields, log inputs and applications against them, record scouting observations, and sync to a central dashboard when connectivity returns — a clean record for compliance and decision-making instead of a notebook." },
                            { t: "Sensor and IoT dashboard", d: "Ingest soil-moisture, weather, irrigation, and bin-monitor data, with live dashboards, threshold alerts, and trend analysis that tolerate intermittent, duplicate, and out-of-order field readings." },
                            { t: "Farm management system", d: "A single system of record for fields, crop plans, rotations, inputs, equipment, labor, and yields, with geospatial mapping tying every record to a specific field or zone." },
                            { t: "Supply-chain traceability platform", d: "Lot and batch tracking from field through facility to shipment, capturing the key data elements and critical tracking events FSMA Section 204 and major buyers require, with audit-ready records." },
                            { t: "Equipment and platform integration", d: "A layer that pulls data from John Deere Operations Center, sensor vendors, weather APIs, and irrigation controllers into one normalized model your team can actually use." },
                            { t: "Input inventory and work orders", d: "Track seed, chemical, and fertilizer inventory, manage field work orders and application records, and keep the regulatory-grade chemical-use records states require." },
                            { t: "Grain or commodity marketing and settlement", d: "Contract management, scale tickets, storage tracking, and settlement for a grain operation, co-op, or commodity buyer." },
                            { t: "Agronomy decision-support tool", d: "Variable-rate prescription generation, scouting analytics, and yield analysis that turn raw field and sensor data into agronomic recommendations." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-lime-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Security and compliance considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">Critical-infrastructure threat landscape.</span> Agriculture and food production are now treated as critical infrastructure, and ransomware attacks on grain cooperatives and food processors — often timed to planting or harvest windows for maximum leverage — have caused real disruption. We harden the platforms we build, require MFA on administrative access, and keep an audit trail so an incident can be reconstructed.
                        </p>
                        <p>
                            <span className="text-white font-semibold">FSMA Section 204 traceability.</span> The FDA&apos;s Food Traceability Rule requires records of key data elements and critical tracking events for certain foods. We build lot and batch tracking that captures what the rule demands so a traceback or recall is a query, not a crisis. We do not give legal advice — we build the record-keeping your food-safety team relies on.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Field-device and data security.</span> Field apps run on devices in trucks and barns, far from a secure office. We encrypt data at rest on the device, enforce strong authentication, and design sync so a lost device does not leak the operation&apos;s data.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Farm-data ownership and privacy.</span> Growers are rightly protective of their operational data, and ag-data transparency principles set expectations for how it is used. We make data ownership and sharing explicit in the design, so growers control who sees their fields, yields, and practices.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Chemical and environmental records.</span> Pesticide-application and nutrient-management records carry state and federal reporting obligations. We build the structured, defensible records your compliance obligations and any audit will require.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for agriculture</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 16 on the App Router with React and TypeScript end-to-end for dashboards and back-office systems. For field apps, React Native or an offline-first progressive web app with a local store and conflict-aware sync so data capture never depends on a signal. Postgres with PostGIS for geospatial data — field boundaries, zones, and tracks belong in a real spatial database, not a pile of coordinates. Prisma or Drizzle as the type-safe ORM, and a mapping layer (Mapbox or MapLibre) for the field views operators expect.
                        </p>
                        <p>
                            A time-series store handles high-volume sensor telemetry, with an ingestion pipeline built to tolerate duplicate and out-of-order readings. Background workers (Inngest or a self-hosted queue) handle sync reconciliation, sensor rollups, and report generation. On-device encryption and strong authentication protect field data. Sentry plus a log aggregator for observability. The web tier deploys to Vercel; the data plane and ingestion scale on a managed cloud sized to the seasonal peak, so the system handles harvest without paying for it all winter.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused MVP", body: "A single high-value workflow shipped clean — an offline-capable field-records app that maps fields, logs inputs and applications against them, and syncs to a dashboard. 4 to 8 weeks." },
                            { tier: "$60K", title: "Production platform", body: "A real ag-tech product — a farm management system or a sensor and IoT dashboard with mapping, alerts, and analytics, built offline-first with field-device security. 10 to 16 weeks." },
                            { tier: "$150K+", title: "Platform with traceability or integrations", body: "A full farm-management or traceability platform with equipment and sensor integrations, geospatial analytics, and FSMA-ready lot tracking, scaled for the seasonal peak. 16 to 28 weeks with phased delivery." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-lime-400 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery is paid separately at $2,500 and is creditable against any full engagement. See the <Link href="/contact" className="text-lime-400 hover:underline">contact page</Link> for the full scoping flow, or the <Link href="/pricing" className="text-lime-400 hover:underline">pricing page</Link> for engagement models.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            First, assuming connectivity. An app that needs a signal to save a record is useless in the middle of a field, and operators abandon it fast. Offline-first with reliable sync is the baseline in agriculture, and bolting it on after launch means rebuilding the data layer from the ground up.
                        </p>
                        <p>
                            Second, treating geospatial data as an afterthought. Storing a field as a name and a couple of coordinates falls apart the moment you need zones, application maps, or spatial analysis. Real agriculture runs on real geometry, which means PostGIS and a proper mapping layer from the start, not a retrofit.
                        </p>
                        <p>
                            Third, naive sensor ingestion. Field telemetry arrives late, duplicated, and out of order, and a pipeline that assumes clean, ordered data quietly corrupts the record. We build ingestion that deduplicates, orders, and validates readings so the analytics on top can be trusted.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why founder-led matters for agriculture</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Ag-tech only earns its keep if it works in the cab, the barn, and the field — and that takes a builder who designs for poor connectivity and messy real-world data instead of a tidy office demo. Growers also guard their operational data closely, and they deserve to know who is handling it. We are US-based and founder-led, and the person who designs your offline sync and your data-ownership model is reachable through planting, harvest, and everything in between.
                        </p>
                        <p>
                            William Beltz writes or reviews every line that touches field data, sensor pipelines, and traceability records. NDAs are mutual and signed before discovery. Source code lives in your GitHub organization, not ours. The handoff is documented for either ongoing collaboration or in-house ownership — your call.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MITRE ATT&amp;CK pentests tied to agriculture-sector threat models</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Food and agriculture are now critical infrastructure, and ransomware crews have hit grain cooperatives and food processors at the worst possible moments in the season for maximum leverage. We run <Link href="/services/penetration-testing" className="text-lime-400 hover:underline">penetration tests</Link> mapped to the MITRE ATT&amp;CK techniques those attackers actually use, then deliver a heatmap of which techniques succeed, which get detected, and which get blocked.
                        </p>
                        <p>
                            For the farm-management platforms, sensor dashboards, and traceability systems that carry operational data, <Link href="/services/web-app-pentest" className="text-lime-400 hover:underline">web application penetration testing</Link> covers authentication, authorization, the field-device sync path, and the integration endpoints that pull from equipment and sensor vendors. Every finding maps to ATT&amp;CK technique IDs so your team knows what to alert on.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Can you build a farm management system?",
                                a: "Yes. We track fields and boundaries, crop plans and rotations, inputs and applications, equipment and labor, and yields, with mapping that ties records to specific fields and zones — one system of record instead of a binder, a whiteboard, and three apps that do not talk.",
                            },
                            {
                                q: "Do you work with IoT and sensor data from the field?",
                                a: "Yes. We ingest soil-moisture probes, weather stations, irrigation controllers, tank and bin monitors, and connected equipment, then build dashboards, alerts, and analytics — handling intermittent connectivity, duplicate and out-of-order readings, and high seasonal data volume.",
                            },
                            {
                                q: "Can you build supply-chain traceability for food and ag products?",
                                a: "Yes. Traceability is increasingly a buyer and regulatory requirement, including under FSMA Section 204 for certain foods. We build lot and batch tracking from field to facility to shipment, capturing the key data elements and critical tracking events a recall or audit demands.",
                            },
                            {
                                q: "Does field software need to work offline?",
                                a: "Almost always. Cellular coverage in a field is unreliable, so apps used by operators and agronomists must capture data offline and sync when connectivity returns. We build offline-first with conflict-aware sync from the start, because retrofitting it means rebuilding the data layer.",
                            },
                            {
                                q: "Is agriculture software a real security target?",
                                a: "Yes — agriculture is now critical infrastructure, and ransomware attacks on grain cooperatives and food processors during planting and harvest have caused real disruption. We harden the platforms we build, secure field-device and data paths, and map pentests to food-and-ag-sector techniques.",
                            },
                            {
                                q: "Why is agriculture software a special case?",
                                a: "The environment is hostile to software assumptions — poor connectivity, seasonal and weather-driven workloads, and geospatial data at the core. The integration surface is fragmented across equipment brands and sensor vendors. And traceability and food-safety requirements are tightening.",
                            },
                            {
                                q: "What does a $25,000 agriculture build look like?",
                                a: "A focused MVP — an offline-capable field-records app that maps fields, logs inputs and applications against them, and syncs to a dashboard, giving the operation a clean record for compliance and decision-making. Scoped tight, it ships in 4 to 8 weeks.",
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
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Farm management and ag-business systems built for the field, not the office." },
                            { slug: "mobile-app-development", title: "Mobile App Development", desc: "Offline-first field apps that capture data without a signal and sync later." },
                            { slug: "api-development", title: "API Development", desc: "Integrations across equipment brands, sensor vendors, and weather data." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "MITRE ATT&CK-aligned testing for the critical-infrastructure ag sector." },
                            { slug: "web-app-pentest", title: "Web App Pentest", desc: "Farm platforms and sensor dashboards tested at the auth and sync boundary." },
                            { slug: "ai-integration-services", title: "AI Integration Services", desc: "Agronomy decision support and yield analytics layered on your field data." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-lime-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-lime-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["build-vs-buy", "internal-tools", "pentest"]}
                        heading="Agriculture engineering & build reading"
                        pinned={["build-vs-buy-software-2026", "custom-crm-development-guide", "what-is-penetration-testing"]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Build ag-tech that works where the work is.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-lime-400 hover:underline">book a 20-minute scope call</Link>. Mutual NDA signed before discovery. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
