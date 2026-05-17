import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is HIPAA Compliance? Plain-English | QUANT LAB USA",
    description:
        "HIPAA compliance is the bar a healthcare-touching app must clear. Plain-English definition, BAAs, Security Rule, 2026 audit reality. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-hipaa-compliance" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "HIPAA Compliance",
    description:
        "HIPAA is the US Health Insurance Portability and Accountability Act, which regulates how covered entities and their business associates handle protected health information.",
    url: "https://quantlabusa.dev/glossary/what-is-hipaa-compliance",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "HIPAA Compliance", item: "https://quantlabusa.dev/glossary/what-is-hipaa-compliance" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does HIPAA stand for?", acceptedAnswer: { "@type": "Answer", text: "Health Insurance Portability and Accountability Act of 1996. It is a US federal law administered by the Department of Health and Human Services." } },
        { "@type": "Question", name: "What is PHI?", acceptedAnswer: { "@type": "Answer", text: "Protected Health Information. Individually identifiable health data created or received by a covered entity or business associate, including patient names linked to medical, mental, or payment information." } },
        { "@type": "Question", name: "What is a covered entity?", acceptedAnswer: { "@type": "Answer", text: "Health plans, health care clearinghouses, and health care providers who transmit health information electronically. The original HIPAA-regulated parties." } },
        { "@type": "Question", name: "What is a business associate?", acceptedAnswer: { "@type": "Answer", text: "A vendor or contractor that handles PHI on behalf of a covered entity. Most healthcare-adjacent SaaS is a business associate, which means signing a Business Associate Agreement (BAA) with every customer." } },
        { "@type": "Question", name: "Do I need a BAA from AWS?", acceptedAnswer: { "@type": "Answer", text: "Yes. AWS, Azure, GCP, and most major SaaS vendors offer BAAs for HIPAA workloads. Sign theirs before you store PHI on their services, or you are non-compliant on day one." } },
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
                        <li className="text-gray-300">HIPAA Compliance</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is HIPAA Compliance?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        HIPAA is the US law that governs how patient health information is collected, stored, used, and disclosed, applying both to the healthcare organizations that originally generate the data and to the software vendors and contractors who handle it on their behalf.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The three rules that matter</h2>
                    <p>
                        The Privacy Rule defines how PHI may be used and disclosed —
                        patients have rights to access their records, see who else has
                        accessed them, and request restrictions. The Security Rule covers
                        the technical and administrative safeguards required for electronic
                        PHI — access controls, audit logs, transmission security, contingency
                        planning. The Breach Notification Rule sets out what to do when
                        something goes wrong — notify affected individuals, sometimes the
                        HHS Office for Civil Rights, sometimes the media if the breach
                        affects more than 500 people in a state.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">PHI is broader than you think</h2>
                    <p>
                        Protected Health Information is any health data linked to one of 18
                        identifiers — name, address, dates, phone, email, SSN, medical
                        record number, account number, license number, vehicle ID,
                        biometric, photo, or any other unique identifier. The bar is low.
                        An appointment reminder email referencing a doctor's name is PHI.
                        A spreadsheet of patient first names with their medications is PHI.
                        Treating any of it casually is the fast path to a costly OCR
                        investigation.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Penalties — what enforcement actually looks like</h2>
                    <p>
                        HIPAA penalties are tiered by culpability. Tier one (the entity
                        did not know and could not reasonably have known): up to $69K
                        per violation. Tier two (reasonable cause, not willful neglect):
                        higher. Tier three (willful neglect, corrected within 30 days)
                        and tier four (willful neglect, not corrected) escalate to the
                        annual cap, currently over $2 million per violation category
                        per year. The Office for Civil Rights also imposes corrective
                        action plans that often outlast any fine. The lesson: HIPAA
                        is not a fine-only regime, it is a regulator-on-your-back
                        regime.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Business Associate Agreements</h2>
                    <p>
                        If your software handles PHI on behalf of a covered entity, you are
                        a business associate and you must sign a BAA with that customer.
                        You must also have BAAs with every vendor below you that touches
                        PHI — your cloud provider, your email sender, your error
                        monitoring service, your database backup vendor. Skipping any of
                        those is a HIPAA violation regardless of whether anything bad has
                        happened yet.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Healthcare software is a serious slice of our{" "}
                        <Link href="/industries/healthcare" className="text-sky-400 hover:underline">industry work</Link>{" "}
                        — telehealth platforms, EHR-adjacent tooling, scheduling and
                        billing systems. Every HIPAA-bound build we ship runs on AWS or
                        Azure under a BAA, encrypts PHI at rest and in transit, ships
                        full audit logging of every PHI access, and uses tenant-isolated
                        Postgres for storage. Our{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration tests</Link>{" "}
                        on healthcare systems are scoped against both HIPAA's technical
                        safeguards and the OWASP Top 10. We sign mutual BAAs with every
                        client where PHI is in play.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">HIPAA does not preempt state privacy laws</h2>
                    <p>
                        HIPAA is a floor, not a ceiling. State laws — California's
                        CMIA, New York's SHIELD Act, Texas's HB 300, Washington's My
                        Health My Data Act — add requirements on top, sometimes
                        substantially. Patient consent, breach reporting timelines,
                        and the definition of health information vary across states.
                        Building a national telehealth product means designing to
                        the strictest applicable rule, not just HIPAA. The same
                        applies to international expansion, where GDPR and
                        equivalents take over for European users.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["compliance","saas"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">What is SOC 2?</Link></li>
                        <li><Link href="/glossary/what-is-pci-dss" className="text-sky-400 hover:underline">What is PCI-DSS?</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">Zero trust architecture</Link></li>
                        <li><Link href="/glossary/what-is-multi-tenant-saas" className="text-sky-400 hover:underline">What is multi-tenant SaaS?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Building HIPAA-bound software?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design HIPAA-aware platforms from the first commit so retrofits
                        do not eat your roadmap. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-hipaa" />
                        <Link href="/industries/healthcare" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Healthcare industry work
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
