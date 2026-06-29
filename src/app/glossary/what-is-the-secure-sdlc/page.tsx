import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is the Secure SDLC? Plain-English Guide | QUANT LAB USA",
    description:
        "The Secure SDLC weaves security into every phase of building software, from requirements to retirement. Plain-English definition and the key practices. QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-the-secure-sdlc" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Secure Software Development Lifecycle (Secure SDLC)",
    description:
        "The Secure SDLC integrates security activities — requirements, design review, secure coding, testing, and maintenance — into every phase of the software development lifecycle rather than treating security as a final step.",
    url: "https://quantlabusa.dev/glossary/what-is-the-secure-sdlc",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Secure SDLC", item: "https://quantlabusa.dev/glossary/what-is-the-secure-sdlc" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is the Secure SDLC in one sentence?", acceptedAnswer: { "@type": "Answer", text: "The Secure SDLC is the practice of weaving security into every phase of building software — requirements, design, coding, testing, deployment, and maintenance — so security is engineered in from the start rather than inspected at the end." } },
        { "@type": "Question", name: "Why integrate security into the whole lifecycle?", acceptedAnswer: { "@type": "Answer", text: "Because the cost of fixing a flaw rises sharply the later it is found. A bad design decision caught in requirements costs almost nothing to change; the same flaw discovered in production may require re-architecture, emergency patching, and breach response." } },
        { "@type": "Question", name: "What is the difference between Secure SDLC and DevSecOps?", acceptedAnswer: { "@type": "Answer", text: "Secure SDLC is the broad framework of security across all development phases, including design and requirements. DevSecOps is the modern, automation-heavy implementation of those ideas inside fast CI/CD pipelines. DevSecOps operationalizes the Secure SDLC." } },
        { "@type": "Question", name: "What frameworks define a Secure SDLC?", acceptedAnswer: { "@type": "Answer", text: "Common references include the NIST Secure Software Development Framework (SSDF, SP 800-218), Microsoft's Security Development Lifecycle, OWASP SAMM, and BSIMM. They differ in detail but agree on building security in across every phase." } },
        { "@type": "Question", name: "Where does threat modeling fit in the Secure SDLC?", acceptedAnswer: { "@type": "Answer", text: "Threat modeling belongs in the design phase, before code is written. By systematically asking what can go wrong with a proposed design, teams catch architectural security flaws when they are cheapest to fix — long before testing or production." } },
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
                        <li className="text-gray-300">Secure SDLC</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is the Secure Software Development Lifecycle?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        The Secure SDLC weaves security into every phase of building software — gathering requirements, designing, coding, testing, deploying, and maintaining — instead of treating it as a final inspection. The premise is simple and well-supported by decades of evidence: a security flaw is dramatically cheaper to fix the earlier you catch it, so the smart move is to engineer security in from the first conversation rather than bolt it on at the end.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The economics behind it</h2>
                    <p>
                        The Secure SDLC exists because of a stubborn cost curve. A
                        security requirement clarified during planning costs almost
                        nothing. The same issue caught in code review costs a little. Found
                        in testing, it costs more. Discovered in production, it can cost
                        enormously — emergency patching, incident response, regulatory
                        exposure, and re-architecture of something that has already
                        shipped. By the time a flaw reaches a customer, the cheapest
                        moment to have fixed it is long gone. Building security into each
                        phase is not idealism; it is the rational response to that curve.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Security in every phase</h2>
                    <p>
                        Each stage gets its own security activity. In requirements, you
                        define security and compliance needs alongside features — what
                        data is sensitive, what regulations apply, what abuse must be
                        prevented. In design, you do{" "}
                        <Link href="/glossary/what-is-threat-modeling" className="text-sky-400 hover:underline">threat modeling</Link>{" "}
                        to find architectural flaws before any code exists. In
                        development, you follow secure coding standards and use static
                        analysis. In testing, you add security testing and a{" "}
                        <Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">penetration test</Link>.
                        In deployment, you harden configuration and manage secrets. And in
                        maintenance, you run{" "}
                        <Link href="/glossary/what-is-patch-management" className="text-sky-400 hover:underline">patch management</Link>{" "}
                        and monitoring. Security is present at every handoff, not just one.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Design is where the leverage is</h2>
                    <p>
                        If there is one phase that pays off most, it is design. Most
                        catastrophic security failures are not missing input validation
                        on line 400 — they are architectural: trusting the wrong boundary,
                        storing sensitive data where it should not live, designing an
                        authorization model that cannot enforce the rules the business
                        needs. No amount of careful coding or late-stage scanning fixes a
                        fundamentally insecure design; you have to catch it before it is
                        built. Threat modeling — systematically asking "what could go
                        wrong with this design, and who would want it to" — is the
                        practice that surfaces these issues while they are still cheap
                        diagrams rather than expensive code.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Frameworks and DevSecOps</h2>
                    <p>
                        Several frameworks formalize the Secure SDLC — the US National
                        Institute of Standards and Technology's Secure Software
                        Development Framework (SP 800-218), Microsoft's Security
                        Development Lifecycle, OWASP SAMM, and BSIMM. They differ in
                        emphasis but agree on the core idea. In modern teams that ship
                        continuously, the Secure SDLC is implemented through{" "}
                        <Link href="/glossary/what-is-devsecops" className="text-sky-400 hover:underline">DevSecOps</Link>:
                        the design and requirements discipline still happens, but the
                        coding, testing, and deployment controls are automated inside{" "}
                        <Link href="/glossary/what-is-ci-cd" className="text-sky-400 hover:underline">CI/CD</Link>{" "}
                        so they keep pace with rapid releases. Think of DevSecOps as the
                        Secure SDLC running at the speed of continuous delivery.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Because we both build software and break it, the Secure SDLC is
                        baked into how we deliver rather than offered as a separate
                        checkbox. In our{" "}
                        <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom software</Link>{" "}
                        engagements we threat-model the design up front, follow secure
                        coding standards, and automate security testing in the pipeline.
                        And because we run{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration tests</Link>{" "}
                        for other organizations, we have seen exactly where insecure
                        development goes wrong — that adversarial perspective informs the
                        design reviews and{" "}
                        <Link href="/glossary/what-is-threat-modeling" className="text-sky-400 hover:underline">threat models</Link>{" "}
                        we run on the software we build, so the same mistakes do not ship.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Adopting it without bureaucracy</h2>
                    <p>
                        The failure mode of a Secure SDLC is turning it into a gauntlet of
                        documents and gates that slows delivery without improving
                        security. The way to avoid that is to make the secure path the
                        path of least resistance: lightweight threat modeling for new
                        designs, automated checks that run silently in the pipeline,
                        secure-by-default templates and libraries, and security people who
                        consult early rather than veto late. Start with the highest-risk
                        systems and the cheapest, highest-leverage practices — threat
                        modeling and dependency scanning — then mature from there. Done
                        well, it is invisible; done poorly, it is the thing everyone routes
                        around.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["pentest","compliance"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-devsecops" className="text-sky-400 hover:underline">What is DevSecOps?</Link></li>
                        <li><Link href="/glossary/what-is-threat-modeling" className="text-sky-400 hover:underline">What is threat modeling?</Link></li>
                        <li><Link href="/glossary/what-is-vulnerability-scanning" className="text-sky-400 hover:underline">What is vulnerability scanning?</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                        <li><Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">What is the OWASP Top 10?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Want security built in from day one?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We build custom software with threat modeling and secure coding
                        baked into every phase — and test it like an adversary. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-securesdlc" />
                        <Link href="/services/custom-business-software" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Custom business software
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
