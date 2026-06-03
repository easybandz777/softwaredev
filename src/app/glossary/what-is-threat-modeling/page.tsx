import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Threat Modeling? Plain-English Definition | QUANT LAB USA",
    description:
        "Threat modeling is thinking like an attacker before you ship. Plain-English definition, STRIDE, when to do it, and how it pairs with pentesting — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-threat-modeling" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Threat Modeling",
    description:
        "Threat modeling is a structured exercise that maps what you are building, identifies how an attacker could abuse it, and decides what to do about each threat before code ships.",
    url: "https://quantlabusa.dev/glossary/what-is-threat-modeling",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is Threat Modeling?", item: "https://quantlabusa.dev/glossary/what-is-threat-modeling" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is threat modeling?", acceptedAnswer: { "@type": "Answer", text: "Threat modeling is a structured exercise where a team diagrams what they are building, asks how an attacker could abuse each part, and decides what to do about each threat — ideally before the code ships." } },
        { "@type": "Question", name: "What is STRIDE?", acceptedAnswer: { "@type": "Answer", text: "STRIDE is a popular threat-modeling checklist of six categories: Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, and Elevation of privilege. Walking each component through these six prompts surfaces threats teams would otherwise miss." } },
        { "@type": "Question", name: "When should you do threat modeling?", acceptedAnswer: { "@type": "Answer", text: "Ideally during design, before code is written, because that is when changes are cheapest. It is also valuable before a major feature, after an architecture change, and as a recurring review for high-risk systems." } },
        { "@type": "Question", name: "What is the difference between threat modeling and penetration testing?", acceptedAnswer: { "@type": "Answer", text: "Threat modeling is a design-time thinking exercise that asks what could go wrong. Penetration testing is a runtime exercise that proves what actually does go wrong by attacking the real system. They complement each other." } },
        { "@type": "Question", name: "Do small teams need threat modeling?", acceptedAnswer: { "@type": "Answer", text: "Yes, just at the right scale. A startup does not need a 40-page document, but an hour of whiteboard time asking how each part of a new feature could be abused prevents the most common and most expensive design-level mistakes." } },
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
                        <li className="text-gray-300">What is Threat Modeling?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Threat Modeling?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Threat modeling is a structured exercise where you diagram what you are building, deliberately think like an attacker about how each piece could be abused, and decide what to do about each threat — ideally before a single line of code ships.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What does it mean?</h2>
                    <p>
                        Most security work is reactive — you scan, you test, you patch what broke.
                        Threat modeling is the rare proactive practice that asks &quot;what could go
                        wrong here?&quot; while the design is still on a whiteboard and changing it costs
                        nothing. It boils down to four questions that the security community has
                        more or less standardized on: What are we building? What can go wrong? What
                        are we going to do about it? And did we do a good job?
                    </p>
                    <p>
                        The first question produces a simple diagram of your system — the parts, the
                        data that flows between them, and the trust boundaries where data crosses
                        from a less-trusted zone into a more-trusted one. The second question walks
                        across that diagram looking for abuse. The third turns each credible threat
                        into a decision: mitigate it, accept it, transfer it, or eliminate the
                        feature. The fourth is the review that keeps the model honest over time.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the term came from</h2>
                    <p>
                        Threat modeling as a named discipline grew up at Microsoft in the early
                        2000s, during the company-wide push that followed Bill Gates&apos; 2002
                        &quot;Trustworthy Computing&quot; memo. Engineers there needed a repeatable way to
                        reason about attacks during design, and out of that effort came STRIDE — a
                        mnemonic for six categories of threat: Spoofing identity, Tampering with
                        data, Repudiation, Information disclosure, Denial of service, and Elevation
                        of privilege. Walking each component of a system through those six prompts
                        is still one of the most accessible ways to surface threats a team would
                        otherwise miss.
                    </p>
                    <p>
                        Other methodologies followed — PASTA, which is more business-risk driven,
                        and attack trees, which model an attacker&apos;s goals as branching paths — but
                        STRIDE remains the gateway most engineers learn first because it requires no
                        special tooling beyond a diagram and a willingness to be paranoid for an
                        hour.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How it works</h2>
                    <p>
                        In practice, a working session looks like this. The team sketches a data-flow
                        diagram: a browser talks to an API, the API talks to a database and a
                        payment provider, a background job reads from a queue. They draw the trust
                        boundaries — the line between the public internet and the API is one, the
                        line between the API and the database is another. Then, boundary by boundary
                        and component by component, they ask the STRIDE questions. Can an attacker
                        spoof a user at this boundary? Can they tamper with this message in transit?
                        If this service is flooded, does the whole system fall over?
                    </p>
                    <p>
                        Each plausible answer becomes a logged threat with a planned response. Crucially,
                        the output is not a pile of theoretical worries — it is a prioritized list of
                        design decisions and a set of requirements that feed straight into how the
                        feature gets built. A good threat model directly informs what a later{" "}
                        <Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">penetration test</Link> should
                        focus on, and it pairs naturally with frameworks like{" "}
                        <Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link>,
                        which catalogs the real techniques an attacker would use to realize the
                        threats you identified.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it matters</h2>
                    <p>
                        The economics are the whole argument. A design flaw caught in a one-hour
                        threat-modeling session costs an eraser; the same flaw caught after launch
                        can require re-architecting a live system, migrating data, and explaining to
                        customers why their information was exposed. The highest-leverage moments to
                        threat model are before a brand-new product, before any feature that touches
                        money, authentication, or sensitive data, and whenever the architecture
                        changes in a way that moves a trust boundary. It is also increasingly
                        expected by auditors:{" "}
                        <Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">SOC 2</Link> and
                        secure-development frameworks reward teams who can show they reason about
                        threats systematically rather than reacting to incidents. The pattern fits
                        cleanly into a{" "}
                        <Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">zero trust</Link> mindset,
                        where no boundary is assumed safe by default.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We build software and we break it, which means we threat model from both
                        sides of the table. When we deliver{" "}
                        <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom business software</Link>,
                        threat modeling is baked into the design phase — we draw the trust
                        boundaries and decide on mitigations before we start building, so security
                        is a property of the architecture rather than a patch applied later. When we
                        run a{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration test</Link>,
                        we build an attacker-centric model of your system first, then map our
                        testing against{" "}
                        <Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link> so
                        every technique we attempt traces back to a real threat. For founders
                        getting ready for an audit, our{" "}
                        <Link href="/blog/soc2-pentest-prep-guide-2026" className="text-sky-400 hover:underline">SOC 2 pentest prep guide</Link> shows
                        where threat modeling and testing reinforce each other.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        pinned={["soc2-pentest-prep-guide-2026", "what-is-penetration-testing", "best-penetration-testing-companies-georgia-2026"]}
                        topics={["pentest", "compliance"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-a-vulnerability" className="text-sky-400 hover:underline">What is a vulnerability?</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                        <li><Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">Zero trust architecture</Link></li>
                        <li><Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">OWASP Top 10</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Designing something new?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        The cheapest time to find a security flaw is before you build it. We will
                        threat model your design and tell you where the real risk lives. Book a
                        30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-threat-modeling" />
                        <Link href="/services/penetration-testing" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Penetration testing services
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
