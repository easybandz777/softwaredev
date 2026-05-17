import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is a SOC 2 Report? Plain-English Guide | QUANT LAB USA",
    description:
        "A SOC 2 report is an audit attesting your controls protect customer data. Type 1 vs Type 2, 2026 cost ranges, and how to prep. By QUANT LAB USA.",
    slug: "/glossary/what-is-an-soc-2-report",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "SOC 2 Report",
    description:
        "An SOC 2 report is a formal attestation document, issued by a licensed CPA firm under AICPA standards, describing a service organization's controls relevant to security, availability, processing integrity, confidentiality, and privacy.",
    url: "https://quantlabusa.dev/glossary/what-is-an-soc-2-report",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is an SOC 2 report?", item: "https://quantlabusa.dev/glossary/what-is-an-soc-2-report" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is the difference between SOC 2 and an SOC 2 report?", acceptedAnswer: { "@type": "Answer", text: "SOC 2 is the standard, defined by the AICPA, against which a company is audited. An SOC 2 report is the document a licensed CPA firm produces after performing that audit — it describes the company's controls and the auditor's opinion." } },
        { "@type": "Question", name: "What is Type I vs Type II?", acceptedAnswer: { "@type": "Answer", text: "A Type I report describes controls as of a single point in time. A Type II report describes the same controls and tests whether they operated effectively over a period — typically three, six, or twelve months. Enterprise buyers almost always want Type II." } },
        { "@type": "Question", name: "Who can issue an SOC 2 report?", acceptedAnswer: { "@type": "Answer", text: "Only a licensed Certified Public Accountant (CPA) firm that follows AICPA attestation standards. Compliance platforms like Drata, Vanta, and Secureframe help you prepare for the audit but cannot themselves issue the report." } },
        { "@type": "Question", name: "Is an SOC 2 report public?", acceptedAnswer: { "@type": "Answer", text: "No. The report contains sensitive operational detail and is shared under NDA with prospective customers, auditors, and partners. The high-level fact that a company has an SOC 2 is often advertised, but the report itself is not posted publicly." } },
        { "@type": "Question", name: "How long is an SOC 2 report valid?", acceptedAnswer: { "@type": "Answer", text: "There is no formal expiration, but the industry expectation is a fresh report every year. Buyers generally consider a Type II report that is more than 15 months past its audit window as stale." } },
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
                        <li className="text-gray-300">What is an SOC 2 report?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Compliance</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is an SOC 2 Report?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        An SOC 2 report is the formal attestation document a licensed CPA firm produces after auditing your security, availability, confidentiality, processing integrity, and privacy controls — it describes what controls you operate, how the auditor tested them, and whether the auditor agrees they did what you said.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">SOC 2 the standard vs SOC 2 the report</h2>
                    <p>
                        The American Institute of Certified Public Accountants (AICPA) defined the SOC 2 standard in 2010 as a framework for evaluating the controls a service organization uses to handle customer data. The standard sets the Trust Services Criteria — the categories the auditor evaluates against. The report is the actual paper deliverable produced after the audit: a long document, often 60 to 120 pages, describing the company, the system in scope, the auditor's testing, and the opinion. People often say "SOC 2" when they mean both, but the distinction matters in conversations with auditors and procurement teams. See our deeper note on <Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">SOC 2 itself</Link> for the framework details.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Type I vs Type II</h2>
                    <p>
                        A Type I report describes the design of controls as of a single point in time — essentially, "on November 1st, the company had these controls in place." It is faster, cheaper, and useful as a stepping stone. A Type II report covers a period — three months minimum, often six or twelve — and tests whether each control operated effectively across that window. Type II is what enterprise buyers actually want; Type I is mostly used to unblock smaller deals while the Type II window is running.
                    </p>
                    <p>
                        For most SaaS companies, the practical path is: complete a Type I in a few months to unblock the first enterprise deals, then run the controls for the audit window and complete a Type II at the end of it. After that, every year produces a new Type II covering the trailing twelve months.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What is inside the document</h2>
                    <p>
                        Four main sections. Section 1 is the auditor's opinion — the headline paragraph that says whether the controls were suitably designed and operated effectively. Section 2 is management's assertion. Section 3 is the system description, a long narrative of the company, the in-scope services, the data flow, the infrastructure, and the controls. Section 4 is the controls testing — a table for each control showing what the auditor did to test it (interview, observation, sampling, re-performance) and the result. Section 5 (optional) is "other information," typically a management response to any noted exceptions.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How prospects actually use it</h2>
                    <p>
                        Procurement teams at mid-market and enterprise companies usually have a security questionnaire, an MSA with security exhibits, and a request for "your latest SOC 2 Type II." They read the auditor's opinion paragraph first, then skim the system description to make sure the in-scope service actually matches what they are buying, then look at any exceptions noted by the auditor and management's response. A clean opinion with a system description that includes the product they want and no material exceptions is usually enough to move the deal forward. A qualified opinion or unresolved exceptions become a conversation.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Our <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link> and <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration testing</Link> practices feed directly into SOC 2 readiness. We have helped <Link href="/blog/cybersecurity-services-for-saas-startups-2026" className="text-sky-400 hover:underline">SaaS startups</Link> prepare for SOC 2 audits — including the access reviews, change-management evidence, vulnerability-management cadence, and pen-test artifacts that auditors expect. Our <Link href="/blog/soc2-pentest-prep-guide-2026" className="text-sky-400 hover:underline">SOC 2 pen-test prep guide</Link> covers the specific testing artifacts auditors ask for.
                    </p>
                    <p>
                        We do not issue SOC 2 reports ourselves — that requires a licensed CPA firm — but we work alongside the auditor and the compliance-platform vendor (Drata, Vanta, Secureframe, Tugboat Logic) the client has chosen. Read our <Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">SOC 2 glossary entry</Link> for the framework itself, or <Link href="/contact" className="text-sky-400 hover:underline">book a call</Link> if your auditor has asked for technical artifacts you do not yet have.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["compliance","pentest"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">What is SOC 2?</Link></li>
                        <li><Link href="/glossary/what-is-hipaa-compliance" className="text-sky-400 hover:underline">What is HIPAA compliance?</Link></li>
                        <li><Link href="/glossary/what-is-pci-dss" className="text-sky-400 hover:underline">What is PCI DSS?</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">What is zero trust?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Auditor asked for evidence you do not have?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We produce the technical artifacts SOC 2 auditors actually look for — and the controls underneath them.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-soc2-report" />
                        <Link href="/services/penetration-testing" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Penetration testing
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
