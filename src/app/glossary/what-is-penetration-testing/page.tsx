import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "What is Penetration Testing? Definition & Examples | QUANT LAB",
    description:
        "A penetration test is a time-boxed, authorized, human-driven attack simulation. Definition, types, what a real report looks like, and how QUANT LAB conducts pentests.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-penetration-testing" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Penetration Testing",
    description:
        "A penetration test is a time-boxed, authorized, human-driven attempt to compromise a target system by chaining vulnerabilities the way a real attacker would, with the goal of producing a fixable report.",
    url: "https://quantlabusa.dev/glossary/what-is-penetration-testing",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is Penetration Testing?", item: "https://quantlabusa.dev/glossary/what-is-penetration-testing" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is penetration testing?", acceptedAnswer: { "@type": "Answer", text: "A penetration test is a time-boxed, authorized, human-driven attempt to compromise the security of your systems by chaining vulnerabilities together the way a real attacker would." } },
        { "@type": "Question", name: "What is the difference between a pentest and a vulnerability scan?", acceptedAnswer: { "@type": "Answer", text: "A vulnerability scan is an automated tool that lists known weaknesses. A pentest is a human who chains weaknesses into a real attack path and verifies impact. Both have a place; they are priced and used very differently." } },
        { "@type": "Question", name: "How long does a pentest take?", acceptedAnswer: { "@type": "Answer", text: "Most engagements run one to four weeks of active testing plus a reporting phase. Compliance-driven web app pentests typically fit in two weeks." } },
        { "@type": "Question", name: "How often should I get a pentest?", acceptedAnswer: { "@type": "Answer", text: "Annually at minimum for compliance, and on any significant change in scope — major release, new auth system, major refactor. High-trust environments test continuously." } },
        { "@type": "Question", name: "What is included in a pentest report?", acceptedAnswer: { "@type": "Answer", text: "An executive summary, a methodology section, an inventory of findings with severity ratings, reproduction steps, evidence, and concrete remediation guidance for each finding." } },
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
                        <li className="text-gray-300">Penetration Testing</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Penetration Testing?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A penetration test (pentest) is a time-boxed, authorized, human-driven attempt to compromise the security of your systems by chaining vulnerabilities together the way a real attacker would, then writing down exactly what worked so your team can fix it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What a pentest is not</h2>
                    <p>
                        A pentest is not a vulnerability scan. A vulnerability scanner is an
                        automated tool that produces a list of known weaknesses without
                        verifying impact or chaining anything together. Scans are useful,
                        cheap, and continuous; pentests are slower, more expensive, and
                        produce a real attack narrative. The cybersecurity industry has done
                        a poor job protecting the word "pentest" — many vendors selling
                        scan output now market it as a pentest because the price tag is
                        higher.
                    </p>
                    <p>
                        A pentest is also not a one-and-done event that proves your
                        environment is permanently secure. It is a snapshot of your
                        security posture on the days the test ran, against the threat model
                        the engagement scoped for.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The five types you can buy</h2>
                    <p>
                        Web application pentesting targets your customer-facing apps and APIs.
                        Network pentesting targets your perimeter (external) or internal
                        corporate network. Mobile pentesting targets iOS and Android apps.
                        Cloud pentesting targets misconfigurations in AWS, Azure, GCP.
                        Active Directory pentesting targets your identity infrastructure.
                        Most SaaS companies need a{" "}
                        <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">web application pentest</Link>{" "}
                        first; companies with on-prem networks add{" "}
                        <Link href="/services/network-pentest" className="text-sky-400 hover:underline">network</Link>{" "}
                        and{" "}
                        <Link href="/services/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory</Link>{" "}
                        testing.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Black-box, grey-box, and white-box</h2>
                    <p>
                        Engagements are also categorized by how much the testers know
                        going in. Black-box: testers start with nothing but the public
                        target and have to discover everything themselves. Most
                        realistic against an external attacker, slowest, and easy to
                        miss things buried under authenticated paths. Grey-box: testers
                        get test accounts, some documentation, and an architecture
                        overview. The fastest path to coverage for most web app
                        engagements. White-box: testers get source code, design
                        documents, and full access. The deepest tier, common before
                        compliance audits or after a real incident.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When you actually need one</h2>
                    <p>
                        Four common triggers. Compliance: SOC 2, PCI-DSS, HIPAA, and most
                        enterprise procurement processes require an annual pentest from a
                        third party. Customer demand: an enterprise prospect asks to see your
                        latest pentest report before they sign. Major changes: new
                        authentication system, big refactor, acquisition. Suspicion: you
                        believe something is wrong and want a real person to verify whether
                        it is.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We run pentests on{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">web applications, APIs, networks, and Active Directory</Link>{" "}
                        for founders who want a real engagement, not a clipboard-and-scan
                        deliverable. Every engagement includes scoping, hands-on testing
                        mapped to{" "}
                        <Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&CK</Link>{" "}
                        and{" "}
                        <Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">OWASP Top 10</Link>,
                        a written report you can hand to your auditor, a remediation
                        debrief, and a retest after fixes ship. Read our{" "}
                        <Link href="/blog/what-is-penetration-testing" className="text-sky-400 hover:underline">founder's pentest buyer guide</Link>{" "}
                        for deeper context.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What a real pentest report looks like</h2>
                    <p>
                        A real report runs 30 to 80 pages. The structure is
                        consistent across reputable firms: an executive summary
                        leadership can read in five minutes, a methodology section
                        describing scope and approach, a findings inventory with
                        severity ratings (Critical/High/Medium/Low/Informational), a
                        per-finding writeup that includes a description, proof of
                        exploitability with screenshots, the attack narrative,
                        affected components, and concrete remediation steps. The
                        good ones also include a strategic recommendations section
                        that addresses systemic issues — not just the bugs you
                        found, but the development practices that allowed them to
                        ship.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-a-red-team" className="text-sky-400 hover:underline">What is a red team?</Link></li>
                        <li><Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">OWASP Top 10</Link></li>
                        <li><Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&CK</Link></li>
                        <li><Link href="/glossary/what-is-active-directory" className="text-sky-400 hover:underline">What is Active Directory?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">Zero trust architecture</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Scoping a pentest?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        Whether driven by SOC 2, a customer ask, or a real concern, we will
                        scope it honestly and quote it transparently. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-pentest" />
                        <Link href="/services/penetration-testing" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Penetration testing services
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
