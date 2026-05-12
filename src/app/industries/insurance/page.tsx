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
    ],
};

export default function InsuranceIndustryPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
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
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. Founder-led from the first call to the production deploy.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
