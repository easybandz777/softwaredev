import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ShieldCheck, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Insurance Industry Software Development | QuantLab",
    description:
        "Custom software for insurance agencies and advisors — advisor landing pages, agency CRMs, lead-capture funnels, compliance-aware document workflows. Founder-led.",
    alternates: { canonical: "https://quantlabusa.dev/industries/insurance" },
    openGraph: {
        title: "Custom Software for Insurance Agencies & Advisors",
        description:
            "Personal-advisor sites that convert, agency CRMs that fit how you actually sell, and document workflows that respect compliance.",
        url: "https://quantlabusa.dev/industries/insurance",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Software for Insurance Agencies & Advisors | QuantLab",
        description:
            "Advisor landing pages, agency CRMs, and compliance-aware document workflows. Founder-led builds.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Software for Insurance Agencies & Advisors",
    url: "https://quantlabusa.dev/industries/insurance",
    description:
        "Advisor landing pages, agency CRMs, lead-capture funnels, and compliance-aware document workflows for licensed producers, agencies, and independent practices.",
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
        { "@type": "ListItem", position: 3, name: "Insurance", item: "https://quantlabusa.dev/industries/insurance" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Insurance Industry Software Development",
    name: "Custom Software Development for Insurance Agencies & Advisors",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for insurance agencies, life and health advisors, and independent producers. Advisor landing pages, agency CRMs, lead-capture funnels, booking integrations, and compliance-aware document workflows.",
    url: "https://quantlabusa.dev/industries/insurance",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can you integrate with our AMS (Applied, Vertafore, EZLynx)?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, where APIs or export hooks exist. AMS systems are notoriously rigid, so we typically build the lead-capture and client-experience layer on top of (or alongside) the AMS rather than replacing it. Quote-to-bind data flows back via export, webhook, or scheduled sync.",
            },
        },
        {
            "@type": "Question",
            name: "How long does an advisor or agency build take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A focused advisor landing page like ProtectWithBri runs 3 to 4 weeks. A full agency CRM with AMS integration, document workflow, and producer dashboards typically runs 10 to 16 weeks for a first production release.",
            },
        },
        {
            "@type": "Question",
            name: "Are you HIPAA-aware for health and supplemental coverage?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Where PHI is in scope (health, disability, supplemental medical), we architect with encryption at rest, role-based access, BAA-compliant infrastructure, and audit logging. We coordinate with your compliance officer on BAAs and policy alignment.",
            },
        },
        {
            "@type": "Question",
            name: "Will the consultation form scale as my practice grows?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The architecture is intentionally minimal so the site evolves with the practice — adding services, adding producers, or layering on a CRM is straightforward because the codebase is yours.",
            },
        },
        {
            "@type": "Question",
            name: "Why is insurance treated as a special case for software development?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Insurance combines three pressures most B2B tools never hit at once. The systems of record (AMS platforms like Applied, Vertafore, and EZLynx) are rigid and were built before modern APIs were standard. Compliance overlaps span state-level licensing rules, NAIC model laws, GLBA, often HIPAA for health and supplemental lines, and E&O exposure on every recommendation. And the sales process is intensely personal — the producer brand and the agency brand both have to come through in the digital experience or the lead converts to a stranger instead of an advisor.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 insurance build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A focused advisor landing page like ProtectWithBri — cinematic hero, plain-language copy, structured consultation intake routed to a server-side API, and a sticky mobile CTA. Three to four weeks. You own the code and the data.",
            },
        },
        {
            "@type": "Question",
            name: "Do you build for captive agents, independent agencies, or MGAs?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "All three. Captive agents typically need a producer-branded page that respects the carrier's marketing rules. Independent agencies need lead-capture and producer-routing on top of their AMS. MGAs need wholesaler-broker portals, submission management, and program-level reporting. The architecture is shared; the product surface differs.",
            },
        },
        {
            "@type": "Question",
            name: "Can you integrate with Salesforce Financial Services Cloud or Microsoft Dynamics?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Where the agency has standardized on a major CRM, we typically build the customer-facing experience on Next.js and sync lead, household, and policy data back into FSC or Dynamics via REST APIs or middleware (Mulesoft, Workato). The web layer stays fast; the system of record stays correct.",
            },
        },
    ],
};

export default function InsuranceIndustryPage() {
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
                        <li className="text-gray-300">Insurance</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-400 mb-6">
                        <ShieldCheck className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Insurance Agencies & Advisors
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Personal-advisor landing pages that convert, agency CRMs that fit how you actually sell, and compliance-aware document workflows — built for licensed producers, agencies, and independent practices who outgrew the templates.
                    </p>
                    <ConsultationCTA label="Scope an Insurance Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">AMS systems were not built for the front end of your practice</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Applied, Vertafore, EZLynx, and the rest of the agency management suite do one thing — store the book of business — and they do it the way they did it in 2008. They were not built to capture leads from a modern landing page, route inbound consultation requests, present a professional digital presence, or surface the personal brand a licensed advisor actually sells on.
                        </p>
                        <p>
                            Meanwhile most advisor websites still look like commission factories. Stock photos. Quote widgets. Scrolling testimonials. The actual experience a prospective client has with the advisor — calm, consultative, plain-spoken — is nowhere on the site. Conversion suffers, and the leads that come through are unqualified.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why insurance is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Insurance combines three pressures most B2B SaaS categories never face at once. The systems of record were architected before modern APIs were standard. AMS platforms (Applied, Vertafore, EZLynx, HawkSoft, NowCerts) implement integration in a thousand different ways — some via SOAP, some via flat-file FTP exports, some via a single read-only REST endpoint published in 2017. Even rater integrations into PL/CL bridges like ITC TurboRater, EZLynx, and PL Rater require careful handling because the contracts and SLAs vary by carrier.
                        </p>
                        <p>
                            Compliance overlaps in directions outsiders do not expect. State-level NAIC model laws, agent licensing rules, replacement and suitability documentation in life and annuity sales, GLBA on customer data, HIPAA when health or supplemental lines are involved, FTC Safeguards Rule on cybersecurity, and E&amp;O underwriting expectations all touch the digital experience. And the sales process is genuinely personal. Insurance is sold by people. The producer brand and the agency brand both have to come through in the digital experience, or the lead converts to a stranger instead of an advisor. Templates fail at all three of these axes simultaneously.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for licensed producers and agencies</h2>
                    <ul className="space-y-3">
                        {[
                            "Personal advisor landing pages — single-page, conversion-optimized, plain-language, mobile-first",
                            "Consultation booking with structured intake (name, contact window, service interest) and producer notifications",
                            "Agency CRMs — pipeline, household management, producer assignment, follow-up automation",
                            "Lead-capture funnels with service-aware routing to the right producer",
                            "Compliance-aware document workflows — encrypted storage, audit logging, role-based access",
                            "AMS integration layer — pulling book data, pushing new leads, scheduled sync",
                            "Producer dashboards — pipeline, conversion rate, follow-up SLAs, commission tracking",
                            "Educational content modules — study guides, articles, and resources for content marketing",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common insurance projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Personal advisor landing page", d: "Single-page, plain-language site with a cinematic hero, service overview, and a structured consultation form routed server-side. 3 to 4 weeks." },
                            { t: "Multi-producer agency site", d: "Agency brand with individual producer profile pages, service-aware lead routing, and intake notifications that go to the right person on the team." },
                            { t: "Agency CRM with AMS sync", d: "Pipeline, household model, producer assignment, follow-up automation, and a sync layer that pushes new leads into the AMS without breaking the AMS data model." },
                            { t: "Producer onboarding and licensing workflow", d: "Internal tool to track state licenses, NIPR appointments, continuing-education requirements, and renewal alerts. Often paired with a simple e-signature flow for carrier appointment paperwork." },
                            { t: "Replacement and suitability documentation", d: "For life and annuity sales, a guided intake that captures replacement disclosures, suitability factors, and signed acknowledgments stored against the household record." },
                            { t: "Commission and split tracking", d: "Internal dashboard that ingests carrier statements (CSV or PDF parse), splits commissions by producer agreement, and feeds the agency's accounting system." },
                            { t: "Client portal", d: "Branded portal where clients view their policies, beneficiaries, documents, and renewal dates, and submit service requests directly to their producer." },
                            { t: "Lead-magnet and content engine", d: "Study guides, calculators, and educational content with structured email capture and tagged routing into the CRM by topic interest." },
                            { t: "MGA wholesaler portal", d: "Broker submission intake, quote and bind tracking, and program-level reporting for MGAs distributing to retail agencies." },
                            { t: "Carrier-aligned compliance review tool", d: "Internal workflow that captures producer-submitted advertising materials, routes them through agency compliance approval, and stores carrier-approval evidence." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Compliance and security considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">State licensing and NAIC model laws.</span> Producers are licensed at the state level. NAIC suitability and best-interest model laws (SBI, NAIC Reg 60 for replacement) shape what disclosures must be captured and stored. We build the intake and document-capture surface to satisfy the strictest state your agency operates in.
                        </p>
                        <p>
                            <span className="text-white font-semibold">GLBA Safeguards Rule.</span> The 2023 FTC amendments to the Safeguards Rule brought non-bank financial institutions — including most insurance agencies — into a more rigorous regime: named CISO, written information security program, MFA, encryption, vendor risk management, and incident response. Our default architecture aligns with the rule; we coordinate with your CISO on the formal documentation.
                        </p>
                        <p>
                            <span className="text-white font-semibold">HIPAA where PHI is in scope.</span> Health, disability, and certain supplemental lines pull PHI into the workflow. Where that happens, we apply HIPAA Security Rule safeguards — encryption, RBAC, audit logging, BAA-eligible infrastructure — and segregate PHI in the schema so minimum-necessary is enforced by the data layer.
                        </p>
                        <p>
                            <span className="text-white font-semibold">E&amp;O and cyber insurance.</span> Producer E&amp;O carriers and agency cyber carriers increasingly want evidence of MFA, encrypted storage, immutable audit logs, and pentest reports at renewal. Our <Link href="/services/penetration-testing" className="text-indigo-400 hover:underline">penetration testing</Link> deliverables are formatted to satisfy carrier underwriting requirements.
                        </p>
                        <p>
                            <span className="text-white font-semibold">SOC 2 for MGAs and aggregators.</span> Larger MGAs, distributors, and platforms increasingly need SOC 2 to win retail agency partners and carrier appointments. We build with SOC 2 Common Criteria mapped to controls and coordinate evidence collection with your auditor.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for insurance</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 15 or 16 with React 19 and TypeScript for the web layer. Postgres for the system of record — Neon or Supabase for most engagements, AWS RDS with a BAA when HIPAA is in scope. Prisma or Drizzle as the ORM. Resend or Postmark for transactional email with a verified domain and producer-aware reply-to handling. Stripe for fee collection where applicable. Auth via Clerk, Auth0, or a Lucia-based stack with MFA on every admin and producer surface.
                        </p>
                        <p>
                            For AMS integration, we build a thin adapter layer in TypeScript that abstracts the carrier-specific quirks behind a normalized internal API. New AMS targets become a new adapter, not a rebuild. For commission ingest, we use OpenAI structured extraction over carrier-statement PDFs and CSVs to normalize into a single internal schema. Logging via Datadog or Better Stack with PII-aware redaction. KMS-backed envelope encryption for sensitive columns. Deployment on Vercel for the web tier; a hardened VPC for the data plane when PHI is in scope.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Personal advisor or boutique agency site", body: "Single-page ProtectWithBri-pattern site with structured intake, sticky mobile CTA, and producer notifications. 3 to 4 weeks." },
                            { tier: "$60K", title: "Multi-producer agency platform", body: "Multi-producer site, agency CRM with pipeline and household model, AMS sync adapter, producer dashboards, and compliance-aware document storage. 10 to 16 weeks." },
                            { tier: "$150K+", title: "MGA, wholesaler, or aggregator platform", body: "Wholesaler submission portal, program-level reporting, SOC 2 Common Criteria mapping, multi-carrier integrations, and full compliance review workflow. 16 to 28 weeks." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-indigo-400 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery is paid separately at $2,500 and creditable against the full engagement. <Link href="/contact" className="text-indigo-400 hover:underline">Book a scope call</Link> to walk through your AMS, your producer footprint, and your compliance posture.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Three patterns recur. First, the agency picks a templated website builder and then tries to wire AMS sync into it. The template was never designed for that kind of integration; the AMS contract never expected lead routing back. Six months in, the agency has a site that looks fine and a sync that drops one lead in eight, with no one able to debug it because the stack is opaque. The fix is to start with code you own.
                        </p>
                        <p>
                            Second, advisor sites treat E&amp;O documentation as marketing. Suitability language, disclosure language, replacement-form language, and continuing-education timestamps live somewhere a producer remembers — but not in the database. The first time a client complaint comes in, the agency cannot prove what was disclosed and when. Capture that evidence at submission time and store it against the household record. It is a small architectural choice that pays out every year the practice operates.
                        </p>
                        <p>
                            Third, agencies underestimate the GLBA Safeguards Rule. The 2023 FTC amendments materially raised the bar on MFA, encryption, vendor management, and incident response. Many small agencies are out of compliance without realizing it. A new build is the cheapest moment to fix it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference build: ProtectWithBri</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/work/protectwithbri" className="text-indigo-400 hover:underline">ProtectWithBri</Link> is the reference build for personal-advisor digital presence. Brianna Willis is a licensed insurance advisor whose practice serves clients building their lives, couples protecting shared assets, young families with dependents, and parents planning long-term legacies. Her differentiator is consultative, no-pressure guidance.
                        </p>
                        <p>
                            QuantLab built ProtectWithBri.com as a focused single-page Next.js 15 / React 19 application, optimized for clarity and speed. Cinematic hero background video establishing tone within the first second. Plain-language copy framework. Consultation booking form with structured intake routed to a server-side API endpoint. Sticky mobile CTA keeping booking one tap away. Zero external CMS, zero analytics bloat, zero third-party form services — the site loads instantly on mobile, costs almost nothing to host, and evolves quickly because the architecture is intentionally simple.
                        </p>
                        <p>
                            The same architecture pattern works for any licensed advisor, RIA practice, fee-only planner, or boutique agency that wants a digital presence that matches the actual client experience.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Compliance is part of the architecture, not an afterthought</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Insurance touches PII on every consultation form and PHI in health-adjacent lines. We build with that in mind: encryption at rest with envelope keys, TLS 1.3 in transit, role-based access on every admin surface, immutable audit logging, and BAA-compliant infrastructure where PHI is in scope. Document workflows enforce retention policies. Producer access is scoped to assigned households.
                        </p>
                        <p>
                            For agencies needing a deeper assessment, our <Link href="/services/penetration-testing" className="text-indigo-400 hover:underline">penetration testing</Link> engagements include reporting formatted for cyber-insurance carriers and E&amp;O underwriters.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Can you integrate with our AMS (Applied, Vertafore, EZLynx)?",
                                a: "Yes, where APIs or export hooks exist. AMS systems are notoriously rigid, so we typically build the lead-capture and client-experience layer on top of (or alongside) the AMS rather than replacing it. Quote-to-bind data flows back via export, webhook, or scheduled sync.",
                            },
                            {
                                q: "How long does an advisor or agency build take?",
                                a: "A focused advisor landing page like ProtectWithBri runs 3 to 4 weeks. A full agency CRM with AMS integration, document workflow, and producer dashboards typically runs 10 to 16 weeks for a first production release.",
                            },
                            {
                                q: "Are you HIPAA-aware for health and supplemental coverage?",
                                a: "Yes. Where PHI is in scope (health, disability, supplemental medical), we architect with encryption at rest, role-based access, BAA-compliant infrastructure, and audit logging. We coordinate with your compliance officer on BAAs and policy alignment.",
                            },
                            {
                                q: "Will the consultation form scale as my practice grows?",
                                a: "Yes. The architecture is intentionally minimal so the site evolves with the practice — adding services, adding producers, or layering on a CRM is straightforward because the codebase is yours.",
                            },
                            {
                                q: "Why is insurance treated as a special case for software development?",
                                a: "The AMS layer is rigid, compliance overlaps span GLBA, HIPAA, NAIC model laws, and E&O underwriting, and the sales process is intensely personal. Templates fail at all three of these axes simultaneously.",
                            },
                            {
                                q: "What does a $25,000 insurance build look like?",
                                a: "A focused advisor landing page — cinematic hero, plain-language copy, structured consultation intake, sticky mobile CTA. 3 to 4 weeks. You own the code and the data.",
                            },
                            {
                                q: "Do you build for captive agents, independent agencies, or MGAs?",
                                a: "All three. Captive agents need carrier-compliant producer-branded pages. Independent agencies need AMS-integrated lead routing. MGAs need wholesaler-broker portals with submission management.",
                            },
                            {
                                q: "Can you integrate with Salesforce Financial Services Cloud or Microsoft Dynamics?",
                                a: "Yes. Customer-facing experience on Next.js with lead, household, and policy data synced into FSC or Dynamics via REST APIs or middleware (Mulesoft, Workato).",
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
                            { slug: "custom-crm-development", title: "Custom CRM Development", desc: "Agency CRMs with household management, producer assignment, and follow-up automation." },
                            { slug: "web-applications", title: "Web Applications", desc: "Advisor landing pages, agency portals, and producer dashboards." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "E&O and cyber-insurance-ready pentest reports." },
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Fee collection, subscriptions, and revenue ops for fee-based advisory." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Commission ingest, licensing trackers, and back-office automation." },
                            { slug: "mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Threat-group-aligned pentests for financial-services adversaries." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-indigo-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Build a practice site that sounds like you.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-indigo-400 hover:underline">book a 20-minute scope call</Link>. Founder-led from the first call to the production deploy.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
