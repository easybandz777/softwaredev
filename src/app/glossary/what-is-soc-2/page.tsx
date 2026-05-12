import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "What is SOC 2 Compliance? Definition & Examples | QUANT LAB",
    description:
        "SOC 2 is the AICPA audit framework most B2B SaaS buyers ask for. Type 1 vs Type 2, the five trust services criteria, scope, timeline, and what it actually costs.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-soc-2" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "SOC 2 Compliance",
    description:
        "SOC 2 is an audit framework from the AICPA that evaluates a service organization's controls against five Trust Services Criteria: security, availability, confidentiality, processing integrity, and privacy.",
    url: "https://quantlabusa.dev/glossary/what-is-soc-2",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "SOC 2 Compliance", item: "https://quantlabusa.dev/glossary/what-is-soc-2" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does SOC 2 stand for?", acceptedAnswer: { "@type": "Answer", text: "System and Organization Controls 2. An audit framework published by the AICPA — the American Institute of Certified Public Accountants — that evaluates a service organization's internal controls." } },
        { "@type": "Question", name: "Is SOC 2 a certification?", acceptedAnswer: { "@type": "Answer", text: "No. It is an attestation. A licensed CPA firm reviews your controls and issues a report. There is no certificate, no badge — just the report itself, which you share with prospects under NDA." } },
        { "@type": "Question", name: "What is the difference between Type 1 and Type 2?", acceptedAnswer: { "@type": "Answer", text: "Type 1 attests that your controls exist and are designed correctly at a point in time. Type 2 attests that the controls have operated effectively over a period, usually 6 to 12 months. Type 2 is what serious buyers want." } },
        { "@type": "Question", name: "How long does SOC 2 take to get?", acceptedAnswer: { "@type": "Answer", text: "Type 1 typically takes 3 to 6 months from kickoff. Type 2 adds the observation period — usually 6 months of continuous evidence collection — before the audit." } },
        { "@type": "Question", name: "How much does SOC 2 cost?", acceptedAnswer: { "@type": "Answer", text: "Audit fees range from $15K to $60K depending on scope and auditor. Tooling and remediation often cost more than the audit itself, especially for smaller teams." } },
    ],
};

export default function Page() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <article className="container mx-auto px-6 max-w-3xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/glossary" className="hover:text-sky-400 transition-colors">Glossary</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">SOC 2 Compliance</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is SOC 2 Compliance?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        SOC 2 is an attestation framework from the AICPA in which a licensed audit firm reviews your security, availability, confidentiality, processing integrity, and privacy controls, then issues a report your enterprise customers will ask to see before they sign a contract.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The five Trust Services Criteria</h2>
                    <p>
                        SOC 2 is structured around five Trust Services Criteria (TSC).
                        Security is mandatory — every SOC 2 includes it. The other four are
                        optional and only included if your contracts demand them.
                        Availability — uptime commitments and incident management.
                        Confidentiality — handling of customer-classified data.
                        Processing Integrity — accuracy and completeness of processing,
                        relevant when your software does work customers rely on financially.
                        Privacy — handling of personal information per declared notices.
                    </p>
                    <p>
                        Most early-stage SaaS just gets the security TSC. Larger
                        organizations add availability and confidentiality. Healthcare and
                        fintech sometimes go further.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Type 1 vs Type 2 — the only distinction that matters</h2>
                    <p>
                        SOC 2 Type 1 says your controls existed and were designed
                        appropriately on a single date. It is a snapshot. Procurement
                        teams know it is a starter credential. Type 2 says your controls
                        have operated effectively over a period — typically 6 to 12
                        months — and includes evidence sampled from that whole window.
                        Type 2 is what enterprise buyers want. Many will accept Type 1
                        as a placeholder while you work toward Type 2, but they will
                        circle back.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When SOC 2 starts to actually matter</h2>
                    <p>
                        Three triggers usually bring it forward in the roadmap. An
                        enterprise prospect asks for the report during procurement —
                        the most common path, and the one where deferring further can
                        cost six-figure deals. A renewal customer adds it to their
                        annual vendor review. Or an investor's due diligence team
                        flags it as table stakes for the next round. None of those
                        triggers wait politely. If any of them are within the next
                        year, starting Type 1 readiness now is cheaper than the
                        scramble of starting after the ask lands.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The hidden cost</h2>
                    <p>
                        The auditor's bill is the smallest line item. The real cost is the
                        controls themselves: a vulnerability management program, an annual
                        penetration test, formal access reviews, change management, an
                        incident response plan, vendor risk reviews, and tooling to keep
                        evidence flowing. Compliance platforms (Vanta, Drata, Secureframe)
                        help, but they do not do the work for you — they automate
                        evidence collection from systems where the controls already
                        exist.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We help founders prepare the technical side of a SOC 2 audit:
                        building the access control, audit logging, encryption, and
                        backup posture the audit will sample. Annual third-party
                        penetration testing is a SOC 2 expectation, and our{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">pentest engagements</Link>{" "}
                        are scoped to satisfy that requirement. For the platform side, our{" "}
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link>{" "}
                        engagements include a "SOC 2 ready" track that delivers the
                        controls baked into the application from day one — which is
                        roughly ten times cheaper than retrofitting them later.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">SOC 2 vs ISO 27001 vs others</h2>
                    <p>
                        SOC 2 dominates US B2B SaaS procurement. ISO 27001 dominates
                        in Europe and is increasingly common at global enterprises.
                        The two are not interchangeable but cover overlapping
                        ground, and many organizations get both because different
                        customers ask for different reports. PCI-DSS, HIPAA, and
                        FedRAMP are domain-specific overlays on top. The shortcut
                        for early stage: start with SOC 2 Type 1, then layer in ISO
                        27001 only when European deals demand it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                        <li><Link href="/glossary/what-is-pci-dss" className="text-sky-400 hover:underline">What is PCI-DSS?</Link></li>
                        <li><Link href="/glossary/what-is-hipaa-compliance" className="text-sky-400 hover:underline">What is HIPAA?</Link></li>
                        <li><Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">OWASP Top 10</Link></li>
                        <li><Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">What is SaaS?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Preparing for SOC 2?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We handle the technical controls and the annual pentest. Book a
                        30-minute call to scope what your environment needs.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-soc2" />
                        <Link href="/services/penetration-testing" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Penetration testing
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
