import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Truck, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Custom Software for Transportation | QUANT LAB USA",
    description:
        "Custom transportation software — fleet dispatch, telematics ingestion, ELD/HOS & FMCSA-aware, route optimization, real-time tracking, API pentests. Founder-led.",
    slug: "industries/transportation",
    image: "/og-services.png",
    type: "article",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Software for Transportation",
    url: "https://quantlabusa.dev/industries/transportation",
    description:
        "Transportation-specific software development — fleet dispatch, telematics ingestion, ELD/HOS compliance, route optimization, and real-time vehicle tracking. Founder-led, US-based, mutual NDA from day one.",
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
        { "@type": "ListItem", position: 3, name: "Transportation", item: "https://quantlabusa.dev/industries/transportation" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Transportation Software Development",
    name: "Custom Software Development for Transportation",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for transportation and fleet operators — dispatch boards, driver apps, telematics ingestion, ELD/HOS compliance views, route optimization, and real-time vehicle tracking. FMCSA- and DOT-aware builds with hardened IoT pipelines. Pentesting tied to transport and OT-adjacent threat models.",
    url: "https://quantlabusa.dev/industries/transportation",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Do you integrate telematics providers like Samsara, Geotab, and Motive?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We integrate the major telematics platforms — Samsara, Geotab, and Motive (formerly KeepTruckin) — through their fleet and vehicle APIs, plus raw AVL/GPS feeds where a provider exposes them. We normalize position, engine-diagnostic (J1939/OBD-II), and ELD data into one model so dispatch, tracking, and reporting all read from a single source of truth instead of three incompatible dashboards.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build ELD/HOS and FMCSA compliance views?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We do not certify ELD hardware — that is a device-vendor function under the FMCSA mandate. What we build is the operational layer on top: Hours-of-Service status per driver, available-hours countdowns, violation and edit-request surfaces, IFTA fuel-tax aggregation from telematics mileage, and DVIR (driver vehicle inspection report) capture and storage. We pull from your certified ELD provider's API and present it to dispatchers and safety staff cleanly.",
            },
        },
        {
            "@type": "Question",
            name: "Do you build VRP route solvers or integrate routing APIs?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Both, depending on the problem. For most operators a routing API — Mapbox, Google Maps, or HERE — plus solid multi-stop sequencing and time-window handling solves it without the cost of a bespoke solver. When the vehicle-routing problem gets hard — large fleets, capacity and time-window constraints, dynamic re-routing on traffic or incidents — we implement VRP heuristics (savings, insertion, local-search/metaheuristics) or wire a dedicated optimization engine. We scope which path fits your scale honestly.",
            },
        },
        {
            "@type": "Question",
            name: "How do you architect real-time vehicle tracking at scale?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Position updates land on a streaming ingestion path, get persisted to a time-series store (Timescale or partitioned Postgres), and fan out to dispatcher dashboards and customer tracking pages over WebSockets. We design for the realities of the field — intermittent cellular connectivity, out-of-order and buffered GPS points, and bursty volume — with idempotent ingestion, dead-reckoning gaps handled gracefully, and ETA prediction that does not lie when a truck goes through a dead zone.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build a driver mobile app?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We build driver apps as React Native or as an installable PWA depending on the device fleet and offline needs. Typical features: trip and load assignment, turn-by-turn handoff to the device's native maps, status updates, geofenced arrival detection, proof-of-delivery (signature and photo capture), and electronic BOL. The app is built to work through spotty coverage — actions queue locally and sync when the connection returns.",
            },
        },
        {
            "@type": "Question",
            name: "Why is transportation treated as a special case for software development?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Three forces converge. First, the data is real-time and high-volume: a single mid-size fleet streams position, engine, and ELD telemetry continuously, and a naive schema buckles inside a quarter. Second, the regulatory perimeter is specific and enforced — FMCSA and DOT, the ELD mandate, Hours-of-Service rules, IFTA fuel-tax reporting, DVIR, CSA scores, hazmat where relevant, and ADA paratransit rules for passenger transit. Third, the environment is hostile to clean engineering: trucks drive through dead zones, devices buffer and replay, and your software has to stay correct when the network does not cooperate. A generic team learns all of this on your dime.",
            },
        },
        {
            "@type": "Question",
            name: "How do you secure telematics and fleet data, and is offshore development an IP risk?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Telematics ingestion is an attack surface — device tokens, webhook endpoints, and the API gateway all need authentication, rate limiting, and replay protection, and the live-location feed is a stalking and theft risk if exposed. We pentest the web app, the APIs, and the ingestion pipeline, and we guard against driver- and dispatcher-account takeover. On IP: fleet routing logic, customer locations, and movement data are exactly the kind of asset you do not want on a foreign contractor's laptop. We are US-based, founder-led, and sign mutual NDAs before discovery.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 transportation build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Around $25,000 covers a focused MVP — one high-value workflow built well. Example: a dispatch board with live vehicle tracking on a map, trip assignment, ETA display, and a simple customer tracking link. Or a driver app with status updates and proof-of-delivery wired to one telematics provider. The build is scoped tight, ships in 4 to 8 weeks, and avoids feature creep on the first release.",
            },
        },
    ],
};

export default function TransportationIndustryPage() {
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
                        <li className="text-gray-300">Transportation</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-400 mb-6">
                        <Truck className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Transportation — Built for the Field, Built Real-Time, Built to Ship
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Dispatch boards, driver apps, telematics ingestion, route optimization, and live vehicle tracking — built by a US-based, founder-led team that takes FMCSA, ELD/HOS, and the hard realities of field connectivity seriously from day one.
                    </p>
                    <ConsultationCTA label="Scope a Transportation Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Transportation runs in real time. Build like it.</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fleets do not pause for a clean schema. Vehicles stream GPS and engine telemetry continuously, drivers log Hours-of-Service against FMCSA rules, dispatchers reassign loads as conditions change, and customers expect a live tracking link that actually tracks. Off-the-shelf TMS software is rigid where you need flexibility and silent where you need an audit trail. A code base built by a contractor who has never handled an out-of-order GPS point will fall over the first time a truck drives through a dead zone.
                        </p>
                        <p>
                            We build for those realities from the first architecture diagram. Telematics lands on a streaming ingestion path and persists to a time-series store designed for high write volume. Position updates fan out to dispatcher dashboards and customer pages over WebSockets. Driver actions queue locally and sync when coverage returns. ELD and Hours-of-Service data is pulled from your certified provider and surfaced where safety staff can actually use it. The system stays correct when the network does not cooperate — because in transportation, it never fully does.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why transportation is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most industries deal with request-response software and tidy database rows. Transportation deals with a moving physical fleet that never stops emitting data. A single mid-size operation streams position, engine-diagnostic (J1939/OBD-II), and ELD telemetry from every vehicle, every few seconds, all day. That is a time-series ingestion problem, not a CRUD app — and a naive schema with one row per ping buckles inside a quarter once you start querying historical movement or computing IFTA mileage across state lines.
                        </p>
                        <p>
                            The regulatory perimeter is specific and enforced. FMCSA and DOT set the rules: the ELD mandate, Hours-of-Service limits, DVIR (driver vehicle inspection reports), IFTA fuel-tax reporting, CSA safety scores, and hazmat handling where it applies. Passenger and transit operators add ADA paratransit and accessibility obligations on top. And the environment itself is hostile to clean engineering — trucks drive through cellular dead zones, telematics devices buffer and replay points, and your software has to stay correct when GPS arrives late, out of order, or in a burst after twenty silent minutes. We have wired telematics providers, handled the buffering, and built the HOS and routing surfaces repeatedly, and we know where the time gets eaten on a build.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for transportation operators</h2>
                    <ul className="space-y-3">
                        {[
                            "Dispatch boards — load and trip assignment, driver and vehicle availability, drag-to-assign workflows, and exception handling",
                            "Real-time vehicle tracking on maps — live AVL feeds, geofencing, ETA prediction, and breadcrumb trails per trip",
                            "Driver mobile apps — trip assignment, status updates, geofenced arrival, proof-of-delivery (signature and photo), and electronic BOL",
                            "Telematics ingestion pipelines — Samsara, Geotab, Motive, and raw GPS/AVL feeds normalized into one data model",
                            "ELD/HOS and FMCSA compliance views — Hours-of-Service status, available-hours countdowns, and edit-request surfaces from your certified ELD provider",
                            "Route optimization — multi-stop sequencing, time windows, capacity constraints, and dynamic re-routing on traffic or incidents",
                            "Customer tracking pages — live ETA, status, and a shareable link without exposing the rest of the fleet",
                            "Back-office tooling — IFTA fuel-tax aggregation, DVIR storage, freight invoicing, and maintenance scheduling off engine-hour data",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common transportation projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Dispatch board with live tracking", d: "Trip and load assignment, driver/vehicle availability, real-time vehicle positions on a map, geofenced status changes, and ETA display. The operational core most fleets start from." },
                            { t: "Telematics ingestion and normalization layer", d: "One pipeline pulling Samsara, Geotab, or Motive plus raw AVL into a single time-series model — position, engine diagnostics, and ELD events — so every downstream tool reads one source of truth." },
                            { t: "Driver app with proof-of-delivery", d: "React Native or PWA with trip assignment, status updates, geofenced arrival, signature and photo POD, and electronic BOL. Built offline-first so actions queue and sync through dead zones." },
                            { t: "Route optimization engine", d: "Multi-stop sequencing with time windows and capacity constraints, dynamic re-routing on traffic and incidents, wired to Mapbox, Google Maps, or HERE — VRP heuristics where the scale demands a real solver." },
                            { t: "Customer-facing tracking page", d: "A shareable live-ETA link per shipment, geofenced status updates, and a tracking experience that does not leak the rest of your fleet's movements." },
                            { t: "ELD/HOS and safety compliance console", d: "Hours-of-Service status per driver, available-hours countdowns, violation and edit-request views, DVIR capture and storage, and CSA-relevant reporting from your certified ELD provider's API." },
                            { t: "IFTA and fuel-tax reporting workflow", d: "Mileage aggregation by jurisdiction from telematics data, fuel-purchase reconciliation, and quarter-close reporting that produces defensible IFTA filings instead of a spreadsheet scramble." },
                            { t: "Real-time dispatcher dashboard", d: "Live fleet map, alert queues for late or off-route vehicles, two-way driver messaging, and incident handling — built to stay responsive under bursty, out-of-order location streams." },
                            { t: "Maintenance and DVIR back-office", d: "Inspection-report intake, defect tracking, preventive-maintenance scheduling off engine-hour and odometer telemetry, and a service history per vehicle." },
                            { t: "Passenger-transit and paratransit tooling", d: "Trip booking, ADA paratransit scheduling, driver manifests, real-time rider tracking, and accessibility-aware dispatch for transit and shuttle operators." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Compliance and security considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">FMCSA, DOT, and the ELD mandate.</span> If you run commercial motor vehicles, the ELD mandate and Hours-of-Service rules apply. We do not certify ELD hardware — that is a device-vendor function. We build the operational layer: HOS status, available-hours logic, edit-request surfaces, and the reporting safety staff and DOT auditors expect, pulled from your certified provider's API.
                        </p>
                        <p>
                            <span className="text-white font-semibold">IFTA and DVIR.</span> The International Fuel Tax Agreement requires mileage-by-jurisdiction reporting, and we aggregate it from telematics data rather than odometer guesswork. Driver vehicle inspection reports (DVIR) get captured, stored, and tied to defect tracking so a roadside inspection or audit has a clean trail.
                        </p>
                        <p>
                            <span className="text-white font-semibold">CSA scores and safety data.</span> Compliance, Safety, Accountability scores ride on inspection and violation history. We surface the inputs — HOS violations, maintenance defects, inspection outcomes — so your safety team can manage the BASICs that drive the score rather than reacting after the fact.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Telematics and API security.</span> Ingestion is an attack surface. Device tokens, webhook endpoints, and the API gateway need authentication, rate limiting, and replay protection. The live-location feed is a theft and stalking risk if exposed, so tracking links are scoped and signed. We harden the ingestion path the same way we harden any internet-facing API.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Account takeover and access control.</span> Driver and dispatcher accounts are high-value targets — a compromised dispatcher can reroute freight or expose the whole fleet's movements. MFA on dispatcher and admin surfaces, role-based access, and audit logging on assignment and routing changes are wired in by default.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Hazmat and passenger accessibility.</span> Hazardous-materials transport carries its own documentation and routing rules, and passenger or paratransit operations carry ADA accessibility obligations. We do not give legal advice — but we build the disclosure capture, manifest handling, and audit trails your compliance staff and counsel will need.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for transportation</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 16 on the App Router with React 19 and TypeScript end-to-end. Postgres for the system of record — usually Neon, Supabase, or RDS — paired with a deliberate time-series strategy for telematics: TimescaleDB or native partitioning so the firehose of position and engine pings stays queryable instead of grinding the database to a halt. Prisma or Drizzle as the type-safe ORM. Redis for live-location state and streaming fan-out, with WebSockets pushing updates to dispatcher dashboards and customer tracking pages. Routing and mapping through Mapbox, Google Maps, or HERE depending on coverage and cost.
                        </p>
                        <p>
                            Telematics providers — Samsara, Geotab, Motive — are integrated through their fleet APIs and webhooks, normalized into one model so downstream tools do not care which vendor a vehicle reports through. Background and routing jobs run on BullMQ over Redis or on Inngest, depending on the SLA — route optimization, IFTA aggregation, and nightly reconciliation all run off the queue. The driver app is React Native or an installable PWA, built offline-first so field actions survive dead zones. Sentry plus Datadog for observability, with PII-aware redaction on location data in the logs. The web tier deploys to Vercel; the ingestion and data plane run in a hardened VPC when the volume or security posture calls for it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused MVP", body: "A single high-value workflow shipped clean — a dispatch board with live vehicle tracking, trip assignment, ETA display, and a customer tracking link, wired to one telematics provider. 4 to 8 weeks. Discovery scoped tight to avoid the dreaded v1 feature pile." },
                            { tier: "$60K", title: "Production fleet platform", body: "A real fleet product — telematics ingestion normalized into a time-series store, ELD/HOS and DVIR views, dispatcher dashboard, driver app with proof-of-delivery, and a hardened ingestion pipeline. 10 to 16 weeks." },
                            { tier: "$150K+", title: "Routing & multi-provider platform", body: "Route optimization with VRP heuristics, multi-provider telematics ingestion, real-time customer tracking, IFTA and compliance reporting, and a full dispatcher console. 16 to 28 weeks with phased delivery." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-emerald-400 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery is paid separately at $2,500 and is creditable against any full engagement. See the <Link href="/contact" className="text-emerald-400 hover:underline">contact page</Link> for the full scoping flow.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Three patterns repeat. First, teams store one database row per GPS ping in a vanilla table and watch query times collapse within months. Historical movement reports, IFTA mileage, and replaying a trip become impossible without a rewrite. Telematics is a time-series workload — partition or use a purpose-built store from the start, not after the database is on fire.
                        </p>
                        <p>
                            Second, the driver app is built assuming a live connection. The first time a truck spends thirty minutes in a dead zone, proof-of-delivery is lost, status updates vanish, and the dispatcher is flying blind. Field software has to be offline-first — actions queue locally, sync on reconnect, and resolve conflicts sanely. Treating connectivity as guaranteed is the single most expensive assumption in transportation software.
                        </p>
                        <p>
                            Third, operators overscope the first release. A new platform gets pitched with route optimization, three telematics providers, customer tracking, IFTA reporting, and a paratransit module all at once. The realistic build is one workflow — dispatch with live tracking — shipped in eight weeks, run by real dispatchers, and learned from. We push hard for that scoping discipline because the alternative is a 9-month build that ships late and matches nobody's actual operation.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why founder-led matters for transportation</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            What gets a fleet operator in trouble is rarely a cosmetic bug. It is the laptop in another country with your routing logic and customer locations on it, or the live-tracking endpoint left wide open so anyone can watch every vehicle move. Movement data is sensitive — it reveals where your customers are, where your trucks are, and where the cargo sits. That is precisely why we are US-based, founder-led, and engagement-first on every project.
                        </p>
                        <p>
                            William Beltz writes or reviews every line of code that touches your fleet data, your dispatch logic, or your tracking surfaces. NDAs are mutual and signed before discovery. Source code lives in your GitHub organization, not ours. The handoff is documented for either ongoing collaboration or in-house ownership — your call.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pentests tied to transport and OT-adjacent threat models</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fleet platforms expose surfaces most web apps do not: a telematics ingestion pipeline taking webhooks and device feeds, a live-location API, and driver and dispatcher accounts that control physical assets. We run <Link href="/services/web-app-pentest" className="text-emerald-400 hover:underline">web application pentests</Link> and <Link href="/services/penetration-testing" className="text-emerald-400 hover:underline">full-scope penetration testing</Link> against the app, the APIs, and the ingestion path — testing for account takeover, broken access control on tracking links, replay and injection on device feeds, and the data-exposure risks specific to a moving fleet.
                        </p>
                        <p>
                            For operators running their own network and ingestion infrastructure, <Link href="/services/network-pentest" className="text-emerald-400 hover:underline">network penetration testing</Link> covers the perimeter and internal segmentation between IT and the OT-adjacent telemetry plane. Findings map to concrete remediation, and ongoing coverage is available through <Link href="/services/managed-security-services" className="text-emerald-400 hover:underline">managed security services</Link> so the pipeline stays watched after launch, not just at assessment time.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Architecture patterns we reuse</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">The ingestion-and-fan-out pattern.</span> Telematics and GPS feeds land on a streaming path, get written to a time-series store (Timescale or partitioned Postgres) for history, and simultaneously push live state through Redis to WebSocket subscribers — dispatcher dashboards and customer pages. Writes are idempotent so a device replaying buffered points after a dead zone does not corrupt the trail. This is the backbone of every real-time fleet build we ship.
                        </p>
                        <p>
                            <span className="text-white font-semibold">The provider-abstraction pattern.</span> Rather than coupling the app to Samsara or Geotab directly, we normalize every provider into one internal model for position, engine diagnostics, and ELD events. Adding a provider — or migrating off one — becomes an adapter change, not a rewrite, and downstream dispatch, tracking, and reporting code never has to care which vendor a given vehicle reports through. It complements the warehouse and freight-side concerns covered on our <Link href="/industries/logistics" className="text-emerald-400 hover:underline">logistics page</Link>.
                        </p>
                        <p>
                            <span className="text-white font-semibold">The offline-first field pattern.</span> The driver app treats the network as unreliable by default. Trip data caches locally, proof-of-delivery and status changes queue in a durable local store, and a sync engine reconciles on reconnect with clear conflict resolution. The result is software that keeps working through the dead zones every real route contains, then catches the back office up the moment coverage returns.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Do you integrate telematics providers like Samsara, Geotab, and Motive?",
                                a: "Yes. We integrate the major telematics platforms — Samsara, Geotab, and Motive — through their fleet and vehicle APIs, plus raw AVL/GPS feeds where exposed. We normalize position, engine-diagnostic (J1939/OBD-II), and ELD data into one model so dispatch, tracking, and reporting all read from a single source of truth.",
                            },
                            {
                                q: "Can you build ELD/HOS and FMCSA compliance views?",
                                a: "We do not certify ELD hardware — that is a device-vendor function. We build the operational layer: Hours-of-Service status, available-hours countdowns, violation and edit-request surfaces, IFTA aggregation, and DVIR capture, pulled from your certified ELD provider's API.",
                            },
                            {
                                q: "Do you build VRP route solvers or integrate routing APIs?",
                                a: "Both, depending on the problem. For most operators a routing API — Mapbox, Google Maps, or HERE — plus solid multi-stop sequencing and time windows solves it. When the vehicle-routing problem gets hard, we implement VRP heuristics or wire a dedicated optimization engine. We scope which path fits your scale honestly.",
                            },
                            {
                                q: "How do you architect real-time vehicle tracking at scale?",
                                a: "Position updates land on a streaming ingestion path, persist to a time-series store, and fan out to dashboards and customer pages over WebSockets. We design for intermittent connectivity, out-of-order GPS points, and bursty volume — with idempotent ingestion and ETA prediction that handles dead zones gracefully.",
                            },
                            {
                                q: "Can you build a driver mobile app?",
                                a: "Yes — React Native or an installable PWA depending on the fleet and offline needs. Typical features: trip and load assignment, geofenced arrival, status updates, proof-of-delivery (signature and photo), and electronic BOL. Built offline-first so actions queue locally and sync when coverage returns.",
                            },
                            {
                                q: "Why is transportation treated as a special case for software development?",
                                a: "The data is real-time and high-volume, the regulatory perimeter is specific (FMCSA, ELD/HOS, IFTA, DVIR, CSA, ADA paratransit), and the field is hostile to clean engineering — dead zones, buffered replays, and bursty out-of-order data. A generic team learns all of it on your dime.",
                            },
                            {
                                q: "How do you secure telematics and fleet data, and is offshore an IP risk?",
                                a: "We pentest the web app, the APIs, and the ingestion pipeline, harden device tokens and webhook endpoints against replay, and guard against driver- and dispatcher-account takeover. Routing logic and customer locations are sensitive IP — we are US-based, founder-led, and sign mutual NDAs before discovery.",
                            },
                            {
                                q: "What does a $25,000 transportation build look like?",
                                a: "A focused MVP — one high-value workflow shipped well. Example: a dispatch board with live vehicle tracking, trip assignment, ETA display, and a customer tracking link wired to one telematics provider, scoped to 4 to 8 weeks. Discovery scoped tight to avoid v1 feature pile-on.",
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
                            { slug: "third-party-api-integration", title: "Third-Party API Integration", desc: "Telematics (Samsara, Geotab, Motive), mapping, and routing APIs normalized into one model." },
                            { slug: "data-engineering", title: "Data Engineering", desc: "High-volume telematics ingestion and time-series pipelines built to stay queryable at fleet scale." },
                            { slug: "api-development", title: "API Development", desc: "Hardened ingestion and tracking APIs with auth, rate limiting, and replay protection." },
                            { slug: "mobile-app-development", title: "Mobile App Development", desc: "Offline-first driver apps with proof-of-delivery, geofencing, and electronic BOL." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "Manual, evidence-backed pentests of the app, APIs, and the telematics data pipeline." },
                            { slug: "business-intelligence-dashboards", title: "BI Dashboards", desc: "Dispatcher and fleet dashboards — utilization, on-time performance, and safety metrics." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-emerald-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["stack","pentest","build-vs-buy"]}
                        heading="Fleet & real-time systems engineering reading"
                        pinned={["api-security-best-practices-2026","scaling-a-saas-database-guide-2026","what-is-penetration-testing"]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ship fleet software that holds up in the field.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-emerald-400 hover:underline">book a 20-minute scope call</Link>. Mutual NDA signed before discovery. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
