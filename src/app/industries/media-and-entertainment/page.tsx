import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Clapperboard, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Media & Entertainment Software Dev | QUANT LAB USA",
    description:
        "Custom media software — rights & royalties, DAM, OTT/SVOD subscriber billing, ad-ops, content workflows. DMCA & CCPA-aware. Founder-led, US-based, secure by default.",
    slug: "industries/media-and-entertainment",
    image: "/og-services.png",
    type: "article",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Media & Entertainment Software Development",
    url: "https://quantlabusa.dev/industries/media-and-entertainment",
    description:
        "Media and entertainment software with rights, royalty, and content-workflow awareness. Rights and royalty engines, digital asset management, OTT/SVOD subscriber billing, ad-ops tooling, and DMCA/CCPA-aware platforms.",
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
        { "@type": "ListItem", position: 3, name: "Media & Entertainment", item: "https://quantlabusa.dev/industries/media-and-entertainment" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Media & Entertainment Software Development",
    name: "Custom Software Development for Media & Entertainment",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for media and entertainment — rights and royalty engines, digital asset management, OTT/SVOD subscriber billing, ad-operations tooling, and content workflow platforms. DMCA- and CCPA-aware builds with encryption, role-based access, immutable audit logging, and pentesting tied to media threat models.",
    url: "https://quantlabusa.dev/industries/media-and-entertainment",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can you build a rights and royalties engine?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Rights and royalties are where media software earns its keep and where the disputes live. We build rights catalogs that track territory, term, exclusivity, and window; usage capture from streaming, broadcast, and licensing; royalty calculation against complex contract splits; and statement generation with a full audit trail back to the underlying events. Every payee statement can be reconstructed from source data, which is what survives a rights-holder audit.",
            },
        },
        {
            "@type": "Question",
            name: "Do you build OTT/SVOD subscriber billing and entitlement systems?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We build subscription billing with Stripe — plans, trials, proration, dunning, and pause/cancel flows — plus the entitlement layer that decides what a given subscriber can stream. We handle multi-tier, ad-supported, and bundle models, plus app-store billing reconciliation where Apple and Google take their cut, so revenue recognition stays clean across channels.",
            },
        },
        {
            "@type": "Question",
            name: "Do you handle DMCA, content moderation, and takedown workflows?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. For platforms that host user-generated or licensed content, we build DMCA notice intake, takedown and counter-notice workflows, repeat-infringer tracking, and an audit trail that demonstrates good-faith compliance with the safe-harbor process. We wire content-moderation queues and policy-enforcement tooling where the platform needs human review at scale.",
            },
        },
        {
            "@type": "Question",
            name: "Is offshore development an IP risk for media companies?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It can be. Pre-release content, unreleased masters, rights data, and royalty logic are exactly the assets that leak — and a single pre-release leak can cost a release window. That kind of access does not belong on a foreign contractor's laptop. We are US-based, founder-led, and signing mutual NDAs is the first step of every engagement.",
            },
        },
        {
            "@type": "Question",
            name: "Why is media and entertainment treated as a special case for software development?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Three forces converge. First, the data model is genuinely hard: rights with territory, term, window, and exclusivity multiply into combinatorial complexity, and royalty splits cascade across collaborators and sublicensees. Second, the regulatory and contractual perimeter is real — DMCA safe harbor, CCPA/CPRA and state privacy laws for subscriber data, COPPA when kids are an audience, and accessibility and FTC advertising rules. Third, the integration surface spans DAM, MAM, ad servers, CDNs, DRM, and metadata standards. A generic team underestimates all three.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 media build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Around $25,000 covers a focused tool built well — a royalty-statement generator for one revenue stream, a digital-asset management front-end with metadata and rights tagging, or an ad-ops reporting dashboard. The build is scoped tight, ships in 4 to 8 weeks, and avoids trying to model every rights edge case on the first release.",
            },
        },
        {
            "@type": "Question",
            name: "Do you integrate with DAM/MAM, ad servers, and CDNs?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We integrate with digital and media asset management systems, ad servers and SSPs (Google Ad Manager, FreeWheel), CDNs and video platforms (Mux, Cloudflare Stream, AWS MediaConvert), and metadata standards like EIDR and the various title and credit schemas. Where a system only exposes a flat-file or feed, we build a reconciliation layer so catalogs and reporting stay aligned.",
            },
        },
        {
            "@type": "Question",
            name: "Can you handle subscriber privacy under CCPA/CPRA?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Streaming and media platforms collect viewing behavior, which is sensitive and squarely in scope for CCPA/CPRA and similar state laws. We build the data-subject-rights machinery — access, deletion, opt-out of sale/share, and consent tracking — into the data model rather than bolting it on, and we keep an auditable record of requests and how they were honored.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build to SOC 2 readiness for studio and distributor partners?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Studios, distributors, and enterprise advertisers run security diligence before they share content or spend. We build with SOC 2 Common Criteria in mind — encryption at rest and in transit, role-based access, immutable audit logging, change management, and incident response — and produce evidence packs for Vanta, Drata, or Secureframe in the format your auditor expects.",
            },
        },
    ],
};

export default function MediaEntertainmentIndustryPage() {
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
                        <li className="text-gray-300">Media &amp; Entertainment</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-400 mb-6">
                        <Clapperboard className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Media &amp; Entertainment — Rights, Royalties, and Reach
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Rights and royalty engines, digital asset management, OTT/SVOD billing, and ad-ops tooling — built by a US-based, founder-led team that treats rights complexity, DMCA, and subscriber privacy as requirements, not afterthoughts.
                    </p>
                    <ConsultationCTA label="Scope a Media Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Media software lives and dies on rights and royalties.</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The hard part of media software is not the player or the landing page — it is the rights data and the money that flows from it. A title carries territory, term, window, and exclusivity; a royalty split cascades across writers, performers, labels, and sublicensees; and a single misattributed stream becomes a payee dispute. Off-the-shelf tools handle the simple catalog and break on the real contracts. A contractor who has never modeled a rights window will ship something that looks right in a demo and cannot reconstruct a statement.
                        </p>
                        <p>
                            We build with that complexity from the first data-model sketch. Rights are first-class entities with territory, term, and window; usage events are captured and attributed; royalties are calculated against the actual splits; and every payee statement traces back to source events through an immutable audit trail. Subscriber data — viewing behavior included — is encrypted and governed by privacy rules baked into the schema. Content access is gated and logged, because in media a leak is not a bug, it is a lost release window.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why media and entertainment is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most industries deal with a tidy data model. Media routinely deals with combinatorial complexity. A single film or track can have different rights holders in different territories for different windows, with royalty splits that change depending on the revenue stream — theatrical, streaming, broadcast, sync licensing. A platform that shows the right content to the right subscriber in the right region while paying the right people is solving four problems at once, and getting any of them wrong has financial or legal consequences.
                        </p>
                        <p>
                            The regulatory and contractual perimeter is real, too: DMCA safe harbor for hosted content, CCPA/CPRA and the wave of state privacy laws for subscriber and viewing data, COPPA when children are an audience, accessibility expectations on players and apps, and FTC advertising and endorsement rules for ad-supported models. And the integration surface is wide — DAM and MAM systems, ad servers and SSPs, CDNs and video pipelines, DRM, and metadata standards like EIDR. We have built royalty engines, content workflows, and subscription billing before, and we know the complexity lives in the rights model and the reconciliation, not the UI.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for media operators</h2>
                    <ul className="space-y-3">
                        {[
                            "Rights and royalty engines — rights catalogs, usage capture, split calculation, and auditable payee statements",
                            "OTT/SVOD subscriber billing and entitlement — Stripe plans, trials, dunning, and stream-access entitlement",
                            "Digital and media asset management front-ends — metadata, rights tagging, versioning, and approval workflows",
                            "Ad-operations tooling — campaign trafficking, inventory and yield reporting, and reconciliation against ad servers",
                            "Content workflow platforms — ingest, review/approval, scheduling, and publishing across channels",
                            "DMCA and content-moderation tooling — takedown intake, counter-notice, repeat-infringer tracking, and review queues",
                            "Audience and analytics dashboards — engagement, churn, and revenue across subscription and ad models",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common media projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Rights and royalty calculation engine", d: "Rights catalog with territory, term, window, and exclusivity; usage capture from streaming and licensing; split calculation across collaborators; and payee statements that reconstruct from source events." },
                            { t: "OTT/SVOD subscription and entitlement system", d: "Stripe-backed plans, trials, proration, dunning, and pause/cancel; an entitlement layer for stream access; and app-store billing reconciliation across Apple and Google." },
                            { t: "Digital asset management front-end", d: "Asset library with metadata and rights tagging, versioning, proxy preview, and review/approval workflows on top of your storage or an existing DAM/MAM." },
                            { t: "Ad-operations and yield dashboard", d: "Campaign trafficking, inventory and fill reporting, yield analytics, and reconciliation against Google Ad Manager, FreeWheel, or an SSP." },
                            { t: "Content ingest and publishing workflow", d: "Upload and transcode orchestration (Mux, Cloudflare Stream, MediaConvert), metadata enrichment, review gates, scheduling, and multi-channel publishing." },
                            { t: "DMCA and content-moderation console", d: "Notice intake, takedown and counter-notice workflows, repeat-infringer tracking, moderation queues, and an audit trail demonstrating safe-harbor good faith." },
                            { t: "Licensing and deal-management tool", d: "Deal terms, windows, and avails tracking; sublicense management; rights-availability checks; and renewal and expiry alerts." },
                            { t: "Audience analytics and churn dashboard", d: "Engagement, retention, and churn metrics across subscription and ad-supported tiers, with cohort views and revenue attribution." },
                            { t: "Talent and production back-office", d: "Contributor and talent records, contract and clearance tracking, payment workflows, and document management for productions." },
                            { t: "Metadata and catalog management", d: "Title, credit, and identifier management aligned to EIDR and distributor schemas, with validation and syndication to partners." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Compliance and content considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">DMCA safe harbor.</span> Platforms hosting user or licensed content keep their safe harbor by running the process correctly. We build notice intake, takedown and counter-notice workflows, repeat-infringer policy enforcement, and an audit trail that demonstrates good-faith compliance if it is ever challenged.
                        </p>
                        <p>
                            <span className="text-white font-semibold">CCPA/CPRA and state privacy laws.</span> Viewing behavior is sensitive personal data. We build access, deletion, and opt-out-of-sale/share into the data model, track consent, and keep an auditable record of how each request was honored — so privacy compliance is a query, not a fire drill.
                        </p>
                        <p>
                            <span className="text-white font-semibold">COPPA and kids&apos; content.</span> When children are an audience, COPPA imposes verifiable-consent and data-minimization rules. We design age gating, parental-consent flows, and restricted data collection on kids&apos; surfaces, coordinating with your counsel on the policy.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Royalty accuracy and rights-holder audits.</span> Rights holders audit. We build royalty calculation so every statement reconstructs from underlying usage events, with versioned contract terms and an immutable trail — the difference between answering an audit in an afternoon and litigating it.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Content protection and DRM.</span> Pre-release and premium content needs watermarking, DRM, and tight access control. We integrate DRM and signed/expiring delivery, gate internal access by role, and log who touched unreleased assets.
                        </p>
                        <p>
                            <span className="text-white font-semibold">SOC 2 and partner diligence.</span> Studios and distributors run security questionnaires before sharing content. We build with SOC 2 Common Criteria — encryption, RBAC, change management, audit logging, incident response — and produce evidence packs for Vanta, Drata, or Secureframe.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for media</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 16 on the App Router with React 19 and TypeScript end to end. Postgres for the system of record — Neon, Supabase, or RDS — with Prisma or Drizzle as the type-safe ORM; the rights and royalty model is where the schema design earns its money, so we invest there. Stripe handles subscription billing, trials, and dunning, with app-store reconciliation for mobile. Sensitive subscriber data gets envelope encryption, and the royalty and content-access audit logs live in a separate append-only store.
                        </p>
                        <p>
                            For video and content pipelines we integrate Mux, Cloudflare Stream, or AWS MediaConvert for transcode and delivery, with signed, expiring URLs and DRM for premium assets. Background processing — royalty runs, transcode orchestration, ad reconciliation — runs on Inngest or BullMQ on Redis with idempotent jobs so a re-run never doubles a statement. Auth uses Auth0, Clerk, or a Lucia-style stack with MFA required on internal and rights-management surfaces. Observability runs through Sentry plus a log aggregator (Datadog or Better Stack) with PII-aware redaction. The web tier deploys to Vercel; heavy media processing runs in cloud workers close to the storage.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused tool", body: "A single high-value workflow shipped clean — a royalty-statement generator for one revenue stream, a DAM front-end with rights tagging, or an ad-ops reporting dashboard. 4 to 8 weeks, scoped tight." },
                            { tier: "$60K", title: "Production system", body: "A real media product — an OTT subscription and entitlement system with Stripe billing, or a content ingest-to-publish workflow with review gates, plus a SOC 2 evidence pack. 10 to 16 weeks." },
                            { tier: "$150K+", title: "Rights/royalty platform or OTT build", body: "A full rights-and-royalty engine with multi-stream calculation and auditable statements, or an end-to-end OTT platform with billing, entitlement, and analytics. 16 to 28 weeks, phased." },
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
                            Three patterns repeat. First, the rights model is flattened too early. A team builds a simple title-to-owner mapping, then discovers that real deals have territory, window, and exclusivity dimensions that the schema cannot express. Re-modeling rights after royalties are already running means re-deriving historical statements. Model rights as first-class, multi-dimensional entities up front.
                        </p>
                        <p>
                            Second, royalty runs are not idempotent. A re-run or a partial failure double-pays or under-pays, and the error surfaces as a rights-holder dispute. Royalty calculation must be replay-safe and reconstructable from source events, with versioned contract terms, so any statement can be explained and reproduced exactly.
                        </p>
                        <p>
                            Third, subscriber privacy is bolted on. A streaming platform collects viewing data for a year, then scrambles to support deletion and opt-out when a CCPA request arrives and the data is scattered across analytics tools. Build the data-subject-rights machinery into the model from the start so honoring a request is a query, not a project.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why founder-led matters for media</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The quiet existential risk in media is not a bug. It is pre-release content or unreleased masters leaking from a foreign contractor's environment — one leak can torch a release window — or a royalty logic change that quietly underpays the people you have contracts with. That is precisely why we are US-based, founder-led, and engagement-first on every project.
                        </p>
                        <p>
                            William Beltz writes or reviews every line of code that touches your content, your rights data, or your royalty logic. NDAs are mutual and signed before discovery. Source code lives in your GitHub organization, not ours. The handoff is documented for either ongoing collaboration or in-house ownership — your call.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MITRE ATT&amp;CK pentests tied to media threat models</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Media companies face credential theft aimed at pre-release content, ransomware affiliates, and account-takeover and credential-stuffing against subscriber bases. We run <Link href="/services/mitre-attack-assessment" className="text-emerald-400 hover:underline">MITRE ATT&amp;CK-aligned assessments</Link> that simulate those groups&apos; documented TTPs against your environment, then deliver an ATT&amp;CK heatmap of which techniques succeed, which get detected, and which get blocked.
                        </p>
                        <p>
                            Standard <Link href="/services/penetration-testing" className="text-emerald-400 hover:underline">penetration testing</Link> covers the rest — external perimeter, web application, and API surface — with reporting that supports studio and distributor security questionnaires and cyber-insurance requirements. For shops running their own domain, our <Link href="/services/active-directory-pentest" className="text-emerald-400 hover:underline">Active Directory pentest</Link> walks the full chain from a standard workstation to Domain Admin, with every step mapped to ATT&amp;CK technique IDs your SOC can alert on.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference builds</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/work/clear-channel-broadcast" className="text-emerald-400 hover:underline">Clear Channel Broadcast</Link> is our reference for broadcast and media-operations tooling — the kind of workflow, scheduling, and reporting system that keeps a media operation running and auditable. The same architecture patterns power content workflow platforms, ad-ops dashboards, and royalty reporting.
                        </p>
                        <p>
                            For subscription and entitlement work, our <Link href="/services/subscription-billing" className="text-emerald-400 hover:underline">subscription billing</Link> and <Link href="/services/stripe-integration" className="text-emerald-400 hover:underline">Stripe integration</Link> services cover the OTT/SVOD billing layer — plans, trials, dunning, proration, and reconciliation — that media platforms depend on for clean revenue recognition.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Can you build a rights and royalties engine?",
                                a: "Yes. We build rights catalogs tracking territory, term, window, and exclusivity; usage capture from streaming, broadcast, and licensing; royalty calculation against complex splits; and statements that reconstruct from source events — what survives a rights-holder audit.",
                            },
                            {
                                q: "Do you build OTT/SVOD subscriber billing and entitlement systems?",
                                a: "Yes. Stripe-backed plans, trials, proration, dunning, and pause/cancel, plus the entitlement layer that decides what each subscriber can stream — including multi-tier, ad-supported, and bundle models with app-store billing reconciliation.",
                            },
                            {
                                q: "Do you handle DMCA, content moderation, and takedown workflows?",
                                a: "Yes. We build DMCA notice intake, takedown and counter-notice workflows, repeat-infringer tracking, and an audit trail demonstrating safe-harbor good faith, plus moderation queues where the platform needs human review at scale.",
                            },
                            {
                                q: "Is offshore development an IP risk for media companies?",
                                a: "It can be. Pre-release content, unreleased masters, rights data, and royalty logic are exactly what leaks, and one leak can cost a release window. We are US-based, founder-led, and sign mutual NDAs first; source stays in your GitHub org.",
                            },
                            {
                                q: "Why is media and entertainment treated as a special case?",
                                a: "The rights data model is combinatorially hard, royalty splits cascade across collaborators, and the perimeter spans DMCA, CCPA/CPRA, COPPA, and FTC ad rules — across an integration surface of DAM/MAM, ad servers, CDNs, DRM, and metadata standards. A generic team underestimates all three.",
                            },
                            {
                                q: "What does a $25,000 media build look like?",
                                a: "A focused tool — a royalty-statement generator for one revenue stream, a DAM front-end with rights tagging, or an ad-ops reporting dashboard. Scoped tight to 4 to 8 weeks rather than trying to model every rights edge case on release one.",
                            },
                            {
                                q: "Can you handle subscriber privacy under CCPA/CPRA?",
                                a: "Yes. Viewing behavior is sensitive and in scope. We build access, deletion, opt-out of sale/share, and consent tracking into the data model, with an auditable record of each request and how it was honored.",
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
                            { slug: "subscription-billing", title: "Subscription Billing", desc: "OTT/SVOD plans, trials, dunning, and app-store reconciliation." },
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Subscriptions, entitlements, and clean revenue recognition across channels." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Rights, royalty, content-workflow, and production back-office tools." },
                            { slug: "business-intelligence-dashboards", title: "BI Dashboards", desc: "Audience, churn, and revenue analytics across subscription and ad models." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "Evidence-backed pentests for studio diligence and cyber-insurance." },
                            { slug: "mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Threat-group simulations for content-theft and account-takeover risks." },
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
                        topics={["stripe","saas","stack"]}
                        heading="Media engineering & billing reading"
                        pinned={["subscription-billing-system-architecture","saas-pricing-models-explained-2026","handling-failed-payments-in-stripe"]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ship media software that pays the right people.
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
