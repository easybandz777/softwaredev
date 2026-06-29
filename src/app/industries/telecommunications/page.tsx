import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { RadioTower, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Telecom Software Development (2026) | QUANT LAB USA",
    description:
        "Custom telecom software — OSS/BSS, billing & mediation, CPNI-aware portals, number management, CDR pipelines, STIR/SHAKEN. Founder-led, US-based, secure by default.",
    slug: "industries/telecommunications",
    image: "/og-services.png",
    type: "article",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Telecommunications Software Development",
    url: "https://quantlabusa.dev/industries/telecommunications",
    description:
        "Telecom software development with CPNI, FCC, and CDR-handling awareness. OSS/BSS tools, billing and mediation, customer portals, number management, and CDR data pipelines.",
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
        { "@type": "ListItem", position: 3, name: "Telecommunications", item: "https://quantlabusa.dev/industries/telecommunications" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Telecommunications Software Development",
    name: "Custom Software Development for Telecommunications",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for telecom and connectivity providers — OSS/BSS tools, billing and mediation, customer self-service portals, number and inventory management, and CDR data pipelines. CPNI- and FCC-aware builds with encryption, role-based access, immutable audit logging, and pentesting tied to telecom threat models.",
    url: "https://quantlabusa.dev/industries/telecommunications",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Do you build CPNI controls into telecom customer portals?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Customer Proprietary Network Information — who a subscriber called, when, what services they buy, their billing data — is protected under Section 222 and the FCC's CPNI rules. We build the controls those rules expect: authentication before any CPNI is disclosed, restrictions on what carrier reps can see, opt-in/opt-out tracking for marketing use, an audit trail of CPNI access and disclosures, and breach-notification hooks. We coordinate with your compliance officer on the annual CPNI certification evidence.",
            },
        },
        {
            "@type": "Question",
            name: "Can you process CDRs and build a mediation or rating layer?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Call Detail Records arrive in high volume and messy formats — ASN.1, fixed-width, CSV, or vendor-specific dumps from switches and SBCs. We build mediation pipelines that parse, de-duplicate, normalize, and enrich CDRs, then feed a rating engine and the billing system. Idempotency and exactly-once accounting matter here because a double-counted CDR is a billing dispute, so we build with reconciliation and replay safety from the start.",
            },
        },
        {
            "@type": "Question",
            name: "Do you integrate with OSS/BSS and number-management systems?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We integrate with billing platforms, provisioning and activation systems, and number-management — DID inventory, porting (LNP) workflows via the NPAC ecosystem, and E911 record updates. Where a vendor exposes a clean API we use it; where the only interface is a flat-file exchange or an SFTP drop, we build a validated ingestion layer with reconciliation so the inventory and the billing system never drift apart.",
            },
        },
        {
            "@type": "Question",
            name: "Is offshore development an IP and security risk for telecom?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It can be. Telecom systems hold subscriber call records, location data, and the routing logic that moves traffic — a credentialed adversary's dream, and CPNI you are legally obligated to protect. That kind of access does not belong on a foreign contractor's laptop. We are US-based, founder-led, and signing mutual NDAs is the first step of every engagement.",
            },
        },
        {
            "@type": "Question",
            name: "Why is telecom treated as a special case for software development?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Three forces converge. First, the regulatory perimeter is specific: CPNI under Section 222, FCC rules including STIR/SHAKEN robocall mitigation, CALEA lawful-intercept obligations, E911 and the NG911 transition, and Universal Service Fund reporting. Second, the data volume is extreme — CDRs, usage events, and network telemetry arrive continuously, and lazy accounting becomes a billing dispute fast. Third, the integration surface is brittle: switches, SBCs, OSS/BSS, number-porting systems, and carrier interconnects each speak their own dialect. A generic team learns this on your dime.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 telecom build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Around $25,000 covers a focused tool built well — a CPNI-aware subscriber self-service portal with authentication and an access audit trail, a CDR ingestion-and-reporting pipeline for one feed, or an internal number-inventory dashboard. The build is scoped tight, ships in 4 to 8 weeks, and avoids the trap of trying to rebuild a full BSS on the first release.",
            },
        },
        {
            "@type": "Question",
            name: "Can you help with STIR/SHAKEN and robocall-mitigation reporting?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We build the operational and reporting software around STIR/SHAKEN — attestation tracking, call-signing event capture, and the records that support your Robocall Mitigation Database filing and traceback responses. We are software engineers, not a certificate authority, so the signing itself sits with your SHAKEN/STIR provider; we wire the data, dashboards, and audit trail your compliance team needs around it.",
            },
        },
        {
            "@type": "Question",
            name: "Do you handle billing accuracy and dispute-resolution tooling?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Billing accuracy is where telecom software lives or dies. We build rating and invoicing with idempotent CDR processing, reconciliation between mediation and billing, exception and dispute queues, adjustment workflows with approval chains, and an audit trail that reconstructs exactly how a charge was derived. Truth-in-billing and FCC dispute expectations shape the design.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build to SOC 2 readiness for enterprise and carrier customers?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Enterprise buyers and carrier partners run security diligence before they interconnect. We build with SOC 2 Common Criteria in mind — encryption at rest and in transit, role-based access, immutable audit logging, change management, and incident response — and we produce evidence packs for Vanta, Drata, or Secureframe in the format your auditor expects.",
            },
        },
    ],
};

export default function TelecommunicationsIndustryPage() {
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
                        <li className="text-gray-300">Telecommunications</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-400 mb-6">
                        <RadioTower className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Telecom — Accurate Billing, Protected CPNI, Built to Scale
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        OSS/BSS tools, CDR mediation and rating, CPNI-aware customer portals, and number management — built by a US-based, founder-led team that treats Section 222, FCC rules, and billing accuracy as requirements, not afterthoughts.
                    </p>
                    <ConsultationCTA label="Scope a Telecom Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Telecom is a regulated, high-volume environment. Build like it.</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Subscriber call records, location data, and the routing logic that moves traffic are among the most sensitive and most regulated assets in tech. CPNI under Section 222, FCC rules from STIR/SHAKEN to truth-in-billing, CALEA lawful-intercept obligations, E911 and the NG911 transition — a contractor who has never read the CPNI rules will ship a portal that leaks call detail and a billing system that loses CDRs.
                        </p>
                        <p>
                            We build with those constraints from the first architecture diagram. CPNI is gated behind authentication and role-based access, with every disclosure logged. CDR pipelines are idempotent so a record is never double-counted into a billing dispute. PII and call detail are encrypted at rest with envelope keys and in transit with TLS 1.3, and the audit log is immutable by design so your CPNI certification and any FCC inquiry have something real to look at.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why telecom is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most industries deal with one or two overlapping frameworks. Telecom sits at the intersection of several at once. A single customer portal that shows usage, lets a subscriber change a plan, and exposes call history can simultaneously touch CPNI disclosure rules, truth-in-billing expectations, accessibility obligations under Section 255, and data-breach notification duties. Move into voice and STIR/SHAKEN attestation, CALEA, and E911 record accuracy join the stack.
                        </p>
                        <p>
                            Scale compounds everything. CDRs, usage events, and network telemetry arrive continuously and in volume; a rating error or a dropped batch becomes a revenue-leakage problem or a billing dispute inside a single cycle. And the integration surface is brittle: switches and SBCs emitting ASN.1 or fixed-width dumps, OSS/BSS platforms, provisioning and activation systems, number-porting through the NPAC ecosystem, and carrier interconnects — each with its own dialect, its own batch windows, and its own failure mode at 2 a.m. We have built mediation pipelines and audit-grade billing layers and know where the time actually goes.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for telecom operators</h2>
                    <ul className="space-y-3">
                        {[
                            "CPNI-aware subscriber self-service portals — usage, plan changes, billing history, with authentication and an access audit trail",
                            "CDR mediation pipelines — parse, de-duplicate, normalize, and enrich records from switches and SBCs",
                            "Rating and billing engines — idempotent processing, taxation hooks, invoicing, and dispute/adjustment workflows",
                            "Number and inventory management — DID inventory, LNP porting workflows, and E911 record updates",
                            "OSS/BSS integration layers — provisioning, activation, and order-to-cash orchestration across systems",
                            "Internal back-office tools — provisioning consoles, trouble-ticketing, and reconciliation dashboards",
                            "Robocall-mitigation and STIR/SHAKEN reporting tooling — attestation tracking, traceback support, and audit trails",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common telecom projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "CDR mediation and rating pipeline", d: "Ingest ASN.1, fixed-width, or CSV records from switches and SBCs; de-duplicate and normalize; enrich and rate; feed billing with idempotent, exactly-once accounting and a reconciliation report." },
                            { t: "CPNI-aware subscriber portal", d: "Usage and billing history, plan self-service, and document access — gated behind authentication, scoped by role, with opt-in/opt-out tracking and a full CPNI access audit trail." },
                            { t: "Number inventory and porting console", d: "DID inventory management, LNP porting workflows through the NPAC ecosystem, reservation and assignment tracking, and E911 record synchronization." },
                            { t: "Billing dispute and adjustment tool", d: "Exception and dispute queues, adjustment workflows with approval chains, and an audit trail that reconstructs exactly how each charge was derived for truth-in-billing." },
                            { t: "Provisioning and activation orchestration", d: "Order-to-cash orchestration across OSS/BSS, activation status tracking, error handling and retries, and a console for the operations team." },
                            { t: "STIR/SHAKEN and robocall-mitigation reporting", d: "Attestation and call-signing event capture, traceback response support, and the records that back your Robocall Mitigation Database filing." },
                            { t: "Trouble-ticketing and field-ops tool", d: "Outage and trouble-ticket intake, technician dispatch and status, SLA tracking, and customer notifications across the lifecycle." },
                            { t: "Usage analytics and revenue-assurance dashboard", d: "Usage trends, margin and revenue-leakage detection, anomaly flags on rating, and exportable reports for finance and FCC reporting." },
                            { t: "Interconnect and partner-settlement tooling", d: "Carrier interconnect record handling, inter-carrier settlement calculation, and dispute reconciliation across partners." },
                            { t: "Customer onboarding and order-entry flow", d: "Service eligibility checks, address and serviceability validation, plan selection, and clean handoff into provisioning." },
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
                            <span className="text-white font-semibold">CPNI (Section 222).</span> Call detail, location, and service-and-billing data are protected. We build authentication before disclosure, role-restricted views for carrier reps, opt-in/opt-out tracking for marketing use, breach-notification hooks, and an immutable CPNI access-and-disclosure log that supports your annual CPNI certification.
                        </p>
                        <p>
                            <span className="text-white font-semibold">FCC rules and truth-in-billing.</span> Billing has to be clear, accurate, and defensible. We build rating and invoicing with idempotent CDR processing, reconciliation between mediation and billing, and an audit trail that reconstructs how every charge was derived — so a dispute is answered with records, not guesses.
                        </p>
                        <p>
                            <span className="text-white font-semibold">STIR/SHAKEN and robocall mitigation.</span> We build the software around attestation — call-signing event capture, traceback response support, and the records behind your Robocall Mitigation Database filing. The cryptographic signing stays with your SHAKEN/STIR provider; we wire the operational data and audit trail.
                        </p>
                        <p>
                            <span className="text-white font-semibold">CALEA and lawful intercept.</span> Where CALEA obligations apply, we design so lawful-intercept capabilities and the records around them are handled with strict access control, separation of duties, and an audit trail — coordinating with your compliance and legal teams rather than improvising the boundary.
                        </p>
                        <p>
                            <span className="text-white font-semibold">E911 and NG911.</span> Location and routing accuracy is a life-safety obligation. We build E911 record updates and validation into provisioning and number management, and design with the NG911 transition to IP-based emergency services in mind.
                        </p>
                        <p>
                            <span className="text-white font-semibold">SOC 2 and data-breach notification.</span> Carrier and enterprise partners run diligence before interconnect, and the FCC's updated breach-notification rules raise the stakes on incident handling. We build with SOC 2 Common Criteria — encryption, RBAC, change management, audit logging, incident response — and produce evidence packs for Vanta, Drata, or Secureframe.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for telecom</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 16 on the App Router with React 19 and TypeScript end to end for portals and consoles. Postgres for the system of record — Neon, Supabase, or RDS depending on posture — with Prisma or Drizzle as the type-safe ORM. CPNI and PII columns get KMS-backed envelope encryption, and the access-and-disclosure audit log lives in a separate append-only store. Resend handles transactional email with a verified domain and DMARC alignment.
                        </p>
                        <p>
                            For CDR mediation and high-volume ingestion we lean Python or a streaming worker tier — parsers for ASN.1 and fixed-width formats, a queue (BullMQ on Redis or Kafka where throughput demands it), and idempotent, replay-safe processing so a record is rated exactly once. A TypeScript dashboard sits over the top for operations and finance review. Auth uses Auth0, Clerk, or a Lucia-style stack with MFA required on every CPNI-touching and admin surface. Observability runs through Sentry plus a log aggregator (Datadog or Better Stack) with PII-aware redaction in the logger. The web tier deploys to Vercel; the data plane and any CALEA-scoped components run in a hardened VPC with strict access control.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused tool", body: "A single high-value workflow shipped clean — a CPNI-aware self-service portal, a single-feed CDR ingestion-and-reporting pipeline, or an internal number-inventory dashboard. 4 to 8 weeks, scoped tight." },
                            { tier: "$60K", title: "Production system", body: "A real telecom product — a CDR mediation and rating pipeline feeding billing with reconciliation, or a provisioning/activation console across OSS/BSS, plus a SOC 2 evidence pack. 10 to 16 weeks." },
                            { tier: "$150K+", title: "Platform or full mediation/billing", body: "An end-to-end mediation, rating, and billing platform with dispute tooling and revenue assurance, or a multi-system OSS/BSS integration layer. 16 to 28 weeks with phased delivery." },
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
                            Three patterns repeat. First, CDR processing is built without idempotency. A retry or a re-run double-counts records, and the operator discovers the problem when subscribers dispute their bills. Rating must be exactly-once and replay-safe from day one; reconstructing it after a billing-dispute wave is painful and erodes customer trust.
                        </p>
                        <p>
                            Second, CPNI access is treated as a normal permission instead of a regulated boundary. A portal or internal tool exposes call detail to anyone with a login, and there is no record of who looked at what. The first FCC inquiry or breach reveals that the company cannot produce a CPNI access log. Gate CPNI behind authentication and log every disclosure from the start.
                        </p>
                        <p>
                            Third, integration scope is underestimated. A founder assumes the switch, the OSS/BSS, and the porting system all have clean APIs and the work is a sprint. The reality is flat-file exchanges, batch windows, and vendor onboarding measured in weeks. We pad those timelines and build reconciliation so systems do not silently drift apart.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why founder-led matters for telecom</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The quiet existential risk in telecom is not a bug. It is subscriber call records and location data — CPNI you are legally obligated to protect — sitting on a foreign contractor's laptop, or a billing logic change that quietly starts leaking revenue. That is exactly why we are US-based, founder-led, and engagement-first on every project.
                        </p>
                        <p>
                            William Beltz writes or reviews every line of code that touches your subscribers, their call detail, or your billing logic. NDAs are mutual and signed before discovery. Source code lives in your GitHub organization, not ours. The handoff is documented for either ongoing collaboration or in-house ownership — your call.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MITRE ATT&amp;CK pentests tied to telecom threat models</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Telecom carriers are a documented target for nation-state intrusion — call-detail and location data are intelligence gold, and recent campaigns against US carriers proved the point. We run <Link href="/services/mitre-attack-assessment" className="text-emerald-400 hover:underline">MITRE ATT&amp;CK-aligned assessments</Link> that simulate those groups&apos; documented TTPs against your environment, then deliver an ATT&amp;CK heatmap of which techniques succeed, which get detected, and which get blocked.
                        </p>
                        <p>
                            Standard <Link href="/services/penetration-testing" className="text-emerald-400 hover:underline">penetration testing</Link> covers the rest — external perimeter, web application, and API surface — with reporting that supports carrier security questionnaires and cyber-insurance requirements. For operators running their own domain, our <Link href="/services/active-directory-pentest" className="text-emerald-400 hover:underline">Active Directory pentest</Link> walks the full chain from a standard workstation to Domain Admin, with every step mapped to ATT&amp;CK technique IDs your SOC or MSSP can alert on.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">A note on case studies</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA does not yet have a published telecom case study, and we are saying that plainly rather than inventing one. What we have is the high-volume, audit-grade architecture pattern — idempotent data pipelines, immutable access logs, encryption, and ATT&amp;CK-aligned pentesting — that other data-intensive domains already run on in production, including the broadcast and media-operations work behind <Link href="/work/clear-channel-broadcast" className="text-emerald-400 hover:underline">Clear Channel Broadcast</Link>.
                        </p>
                        <p>
                            A discovery engagement for telecom starts with a data-flow and compliance review — your CDR feeds, your billing and OSS/BSS systems, your CPNI exposure, and the records that have to survive an FCC inquiry. You come out with a wireframed UI, a data model with idempotency and audit points marked, and a phased estimate — useful even if you take it to another developer.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Do you build CPNI controls into telecom customer portals?",
                                a: "Yes. We build authentication before any CPNI is disclosed, role-restricted views for reps, opt-in/opt-out tracking for marketing, breach-notification hooks, and an immutable CPNI access-and-disclosure log that supports your annual CPNI certification.",
                            },
                            {
                                q: "Can you process CDRs and build a mediation or rating layer?",
                                a: "Yes. We build mediation pipelines that parse, de-duplicate, normalize, and enrich CDRs from switches and SBCs, then feed rating and billing — with idempotency and reconciliation so a record is never double-counted into a dispute.",
                            },
                            {
                                q: "Do you integrate with OSS/BSS and number-management systems?",
                                a: "Yes. We integrate with billing, provisioning/activation, and number management — DID inventory, LNP porting via NPAC, and E911 updates. Where the only interface is a flat-file or SFTP drop, we build a validated ingestion layer with reconciliation.",
                            },
                            {
                                q: "Is offshore development an IP and security risk for telecom?",
                                a: "It can be. Subscriber call records, location data, and routing logic are CPNI you are obligated to protect — not something to put on a foreign contractor's laptop. We are US-based, founder-led, and sign mutual NDAs first.",
                            },
                            {
                                q: "Why is telecom treated as a special case for software development?",
                                a: "The regulatory perimeter is specific (CPNI, FCC, STIR/SHAKEN, CALEA, E911), the data volume is extreme so lazy accounting becomes a billing dispute fast, and the integration surface — switches, SBCs, OSS/BSS, porting, interconnects — is brittle. A generic team learns it on your dime.",
                            },
                            {
                                q: "What does a $25,000 telecom build look like?",
                                a: "A focused tool — a CPNI-aware self-service portal, a single-feed CDR ingestion-and-reporting pipeline, or an internal number-inventory dashboard. Scoped tight to 4 to 8 weeks, not an attempt to rebuild a full BSS on release one.",
                            },
                            {
                                q: "Can you help with STIR/SHAKEN and robocall-mitigation reporting?",
                                a: "Yes — we build attestation tracking, call-signing event capture, traceback support, and the records behind your Robocall Mitigation Database filing. The cryptographic signing stays with your SHAKEN/STIR provider; we wire the data and audit trail around it.",
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
                            { slug: "data-engineering", title: "Data Engineering", desc: "CDR mediation and high-volume ingestion pipelines with idempotency and reconciliation." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "OSS/BSS tools, provisioning consoles, and back-office orchestration." },
                            { slug: "api-development", title: "API Development", desc: "Integration layers across switches, billing, porting, and carrier interconnects." },
                            { slug: "subscription-billing", title: "Subscription Billing", desc: "Rating, invoicing, and dispute workflows with truth-in-billing audit trails." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "Evidence-backed pentests for carrier diligence and cyber-insurance." },
                            { slug: "mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Threat-group simulations for nation-state and ransomware adversaries." },
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
                        topics={["stack","compliance","build-vs-buy"]}
                        heading="Telecom engineering & compliance reading"
                        pinned={["scaling-a-saas-database-guide-2026","api-security-best-practices-2026","build-vs-buy-software-2026"]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ship telecom software that bills right and protects CPNI.
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
