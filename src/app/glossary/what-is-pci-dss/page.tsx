import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is PCI-DSS? Plain-English Compliance Guide | QUANT LAB USA",
    description:
        "PCI-DSS is the security standard for card-handling systems. Plain-English definition, SAQ levels, Stripe carve-outs, 2026 audit reality. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-pci-dss" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "PCI-DSS Compliance",
    description:
        "PCI-DSS is the Payment Card Industry Data Security Standard, a set of twelve security requirements every entity that stores, processes, or transmits cardholder data must follow.",
    url: "https://quantlabusa.dev/glossary/what-is-pci-dss",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "PCI-DSS Compliance", item: "https://quantlabusa.dev/glossary/what-is-pci-dss" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does PCI-DSS stand for?", acceptedAnswer: { "@type": "Answer", text: "Payment Card Industry Data Security Standard. It is maintained by the PCI Security Standards Council, a body created by Visa, Mastercard, American Express, Discover, and JCB." } },
        { "@type": "Question", name: "Do I need to be PCI-DSS compliant if I use Stripe?", acceptedAnswer: { "@type": "Answer", text: "Yes, but you may qualify for the simplest self-assessment (SAQ A) if Stripe handles all card data via Stripe Elements or Checkout and you never touch a card number." } },
        { "@type": "Question", name: "What are the merchant levels?", acceptedAnswer: { "@type": "Answer", text: "Level 1 (over 6 million transactions per year), Level 2 (1 to 6 million), Level 3 (20K to 1 million e-commerce), and Level 4 (under 20K e-commerce). Levels 1 and 2 require a full Report on Compliance; the rest use a self-assessment questionnaire." } },
        { "@type": "Question", name: "What is SAQ?", acceptedAnswer: { "@type": "Answer", text: "Self-Assessment Questionnaire. A series of yes/no attestations smaller merchants complete annually instead of a full audit. There are several variants for different processing environments." } },
        { "@type": "Question", name: "What is the easiest way to reduce PCI scope?", acceptedAnswer: { "@type": "Answer", text: "Never touch card data. Use Stripe Elements, Stripe Checkout, or a similar tokenization-first integration so cardholder data goes straight from the browser to the processor without crossing your servers." } },
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
                        <li className="text-gray-300">PCI-DSS Compliance</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is PCI-DSS Compliance?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        PCI-DSS — the Payment Card Industry Data Security Standard — is a set of twelve security requirements that every business storing, processing, or transmitting credit card data must follow, maintained by the major card brands and enforced by your acquiring bank.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it came from</h2>
                    <p>
                        Before 2004, every card brand had its own security program for
                        merchants. Visa had Cardholder Information Security Program (CISP);
                        Mastercard had Site Data Protection. They overlapped enough to be
                        annoying and differed enough to be confusing. In 2004 the brands
                        agreed to a unified standard — PCI-DSS — and in 2006 spun up the
                        PCI Security Standards Council to maintain it. Today's version is
                        PCI-DSS 4.0.1, which significantly tightened authentication, key
                        management, and continuous monitoring requirements.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The twelve requirements</h2>
                    <p>
                        Grouped into six goals. Build and maintain a secure network and
                        systems (firewalls, default passwords). Protect cardholder data
                        (encryption at rest and in transit). Maintain a vulnerability
                        management program (anti-malware, secure development). Implement
                        strong access control (need-to-know, unique IDs, physical
                        restrictions). Regularly monitor and test (logging, vulnerability
                        scans, pentests). Maintain an information security policy. The
                        4.0.1 revision adds continuous obligations rather than annual
                        snapshots.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">PCI-DSS 4.0.1 — what changed</h2>
                    <p>
                        The 4.0.1 revision was the biggest standard refresh in over a
                        decade. It tightened password length and complexity requirements,
                        mandated stronger multi-factor authentication, added requirements
                        for automated vulnerability discovery on payment pages, and
                        replaced the old annual-snapshot model with a continuous
                        monitoring expectation. For most merchants the practical effect
                        is that "we did our audit once a year" no longer cuts it — you
                        need controls that demonstrably operate every day.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">SAQ vs ROC and merchant levels</h2>
                    <p>
                        Smaller merchants complete a Self-Assessment Questionnaire (SAQ)
                        annually. There are several SAQ variants depending on how cards
                        are processed — SAQ A for fully outsourced e-commerce, SAQ D for
                        merchants who touch cardholder data, and several in between.
                        Larger merchants (Level 1, over six million Visa transactions per
                        year) hire a Qualified Security Assessor (QSA) to produce a
                        Report on Compliance (ROC).
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Our standing advice: never touch card data. Our{" "}
                        <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe integration</Link>{" "}
                        work uses Stripe Elements or Stripe Checkout, so cardholder data
                        goes from the customer's browser straight to Stripe without ever
                        hitting your servers. That keeps you in the smallest SAQ scope
                        and reduces audit cost by an order of magnitude. We also handle{" "}
                        <Link href="/services/subscription-billing" className="text-sky-400 hover:underline">subscription billing</Link>{" "}
                        and{" "}
                        <Link href="/services/payments-invoicing-licensing" className="text-sky-400 hover:underline">payments infrastructure</Link>{" "}
                        with the same scope-minimization approach. Where PCI also
                        requires periodic{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration testing</Link>,
                        our engagements satisfy that requirement directly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Common founder questions</h2>
                    <p>
                        "Does using Stripe make me automatically compliant?" No.
                        Stripe handles its own compliance, but your business is still
                        responsible for PCI compliance on your side of the
                        integration. The good news: if you use Stripe Elements or
                        Checkout correctly, your scope shrinks dramatically.
                    </p>
                    <p>
                        "Can I just say I do not store card numbers and be done?"
                        Probably not. Even if cards never hit your servers, your
                        merchant agreement requires you to attest annually. The
                        attestation is simpler when your scope is small, but it is
                        not optional.
                    </p>
                    <p>
                        "Do I need quarterly ASV scans?" If your environment is
                        externally accessible and processes card data, yes. ASV
                        (Approved Scanning Vendor) scans are external vulnerability
                        scans run by an approved third party against your perimeter
                        every 90 days.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["compliance","stripe"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">What is SOC 2?</Link></li>
                        <li><Link href="/glossary/what-is-hipaa-compliance" className="text-sky-400 hover:underline">What is HIPAA?</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                        <li><Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">OWASP Top 10</Link></li>
                        <li><Link href="/glossary/what-is-a-web-app-firewall" className="text-sky-400 hover:underline">What is a WAF?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Need PCI scope reduction?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We rebuild payment flows so cardholder data never crosses your
                        servers — and your audit takes a fraction of the time.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-pci" />
                        <Link href="/services/stripe-integration" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Stripe integration
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
