import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "What is the OWASP Top 10? Definition & Examples | QUANT LAB",
    description:
        "The OWASP Top 10 is the community-maintained list of the most critical web app security risks. The current categories, why they matter, and how we test for them.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-owasp-top-10" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "OWASP Top 10",
    description:
        "The OWASP Top 10 is the Open Web Application Security Project's community-maintained list of the ten most critical security risks to web applications, updated every few years.",
    url: "https://quantlabusa.dev/glossary/what-is-owasp-top-10",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "OWASP Top 10", item: "https://quantlabusa.dev/glossary/what-is-owasp-top-10" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does OWASP stand for?", acceptedAnswer: { "@type": "Answer", text: "Open Web Application Security Project. A nonprofit that publishes free, vendor-neutral guidance on application security." } },
        { "@type": "Question", name: "Is the OWASP Top 10 a standard?", acceptedAnswer: { "@type": "Answer", text: "Not a formal standard, but it is the de facto reference. SOC 2, PCI-DSS, ISO 27001, and most procurement security questionnaires reference it directly." } },
        { "@type": "Question", name: "How often is it updated?", acceptedAnswer: { "@type": "Answer", text: "Every three to four years. The 2021 list reordered the categories significantly; the next refresh continues to fold in API and supply-chain risks." } },
        { "@type": "Question", name: "Is OWASP Top 10 the same as OWASP ASVS?", acceptedAnswer: { "@type": "Answer", text: "No. ASVS — Application Security Verification Standard — is a much more detailed checklist of security requirements. The Top 10 is the awareness document; ASVS is the verification standard." } },
        { "@type": "Question", name: "Should our pentest cover the OWASP Top 10?", acceptedAnswer: { "@type": "Answer", text: "Yes. Any reputable web app pentest report should map findings to OWASP Top 10 categories, plus the broader OWASP ASVS where applicable." } },
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
                        <li className="text-gray-300">OWASP Top 10</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is the OWASP Top 10?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        The OWASP Top 10 is the Open Web Application Security Project's community-maintained list of the ten most critical web application security risks, refreshed every few years from real-world breach data and used as a baseline by virtually every security audit, framework, and compliance regime in the industry.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it comes from</h2>
                    <p>
                        OWASP was founded in 2001 as a nonprofit dedicated to making
                        application security visible. The Top 10 first appeared in 2003 and
                        became the most-cited security document on the web because it was
                        free, vendor-neutral, written for engineers, and refreshed often
                        enough to stay relevant. Today it underpins how everyone from solo
                        founders to Fortune 500 security teams describe risk.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The current categories</h2>
                    <p>
                        The 2021 list (still current at time of writing): Broken Access
                        Control, Cryptographic Failures, Injection, Insecure Design,
                        Security Misconfiguration, Vulnerable and Outdated Components,
                        Identification and Authentication Failures, Software and Data
                        Integrity Failures, Security Logging and Monitoring Failures, and
                        Server-Side Request Forgery (SSRF). Broken Access Control moved to
                        number one in that revision, which surprised no one who reviews
                        pentest reports for a living.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">OWASP beyond the Top 10</h2>
                    <p>
                        The Top 10 gets the headlines, but OWASP publishes a much
                        deeper catalog. The Application Security Verification Standard
                        (ASVS) is a 300-plus item checklist of security requirements
                        split into three increasing rigor levels. The API Security Top
                        10 covers API-specific risks like broken object-level
                        authorization and excessive data exposure. The Mobile Top 10
                        does the same for iOS and Android. Mature programs consult all
                        of these — the headline list is a starting point, not a
                        coverage commitment.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why broken access control is number one</h2>
                    <p>
                        The most common real-world web app vulnerability is not exotic. It is
                        forgetting to check, on a specific endpoint, whether the logged-in
                        user is allowed to read or write the record they are asking about.
                        The classic version: GET /api/invoices/123 returns the invoice even
                        when invoice 123 belongs to a different tenant. Every multi-tenant
                        SaaS has had at least one of these somewhere, often for months,
                        before someone notices. The fix is not a tool — it is disciplined
                        authorization checks on every endpoint, plus tests that verify them.
                        The reason it climbs the rankings every revision is that
                        most teams ship dozens of new endpoints per quarter and
                        only a fraction get an authorization review before they
                        reach production. Without an automated guardrail, the
                        problem grows faster than humans can fix it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Every{" "}
                        <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">web application pentest</Link>{" "}
                        we deliver maps findings to OWASP Top 10 categories so your
                        compliance team can plug the report directly into their SOC 2 or
                        PCI evidence. We also build defensively against the Top 10 on every{" "}
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform</Link>{" "}
                        and{" "}
                        <Link href="/services/web-applications" className="text-sky-400 hover:underline">web application</Link>{" "}
                        we ship — tenant-scoped authorization, parameterized queries,
                        secure session management, and structured audit logging are not
                        afterthoughts.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How the list gets compiled</h2>
                    <p>
                        OWASP collects data from dozens of contributing organizations
                        — pentesting firms, bug bounty platforms, security vendors,
                        academic researchers. The methodology weights frequency of
                        occurrence in real assessments alongside exploitability and
                        impact. A category does not appear because it sounds bad; it
                        appears because the contributors saw it often enough in real
                        engagements that it warrants the headline slot. That is why
                        the list shifts every cycle — the threat landscape shifts
                        and the data reflects it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                        <li><Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&CK</Link></li>
                        <li><Link href="/glossary/what-is-a-web-app-firewall" className="text-sky-400 hover:underline">What is a WAF?</Link></li>
                        <li><Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">What is SOC 2?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">Zero trust architecture</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Want a pentest against the OWASP Top 10?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We test your app against the current Top 10 and ASVS, then ship a
                        report your auditor will accept. Book a 30-minute scoping call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-owasp" />
                        <Link href="/services/web-app-pentest" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Web app pentest
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
