import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is SIEM? Security Information and Event Management | QUANT LAB USA",
    description:
        "SIEM is the central platform that collects logs from everywhere and raises security alerts. Plain-English definition, how it works, and when you need one — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-siem" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "SIEM (Security Information and Event Management)",
    description:
        "A SIEM is a platform that aggregates log and event data from across an organization, correlates it to detect suspicious activity, and raises alerts that security teams investigate.",
    url: "https://quantlabusa.dev/glossary/what-is-siem",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is SIEM?", item: "https://quantlabusa.dev/glossary/what-is-siem" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does SIEM stand for?", acceptedAnswer: { "@type": "Answer", text: "SIEM stands for Security Information and Event Management. It is a platform that collects log and event data from across an organization, correlates it, and raises alerts on suspicious activity." } },
        { "@type": "Question", name: "How is SIEM pronounced?", acceptedAnswer: { "@type": "Answer", text: "Most practitioners pronounce it 'sim,' like the start of the word 'simple.' Spelling it out letter by letter is also common but less so." } },
        { "@type": "Question", name: "What is the difference between SIEM and EDR?", acceptedAnswer: { "@type": "Answer", text: "EDR watches individual endpoints in deep detail. SIEM aggregates signals from everything — endpoints, network, cloud, identity — to give one correlated view. EDR is a sensor; SIEM is the central nervous system that ties many sensors together." } },
        { "@type": "Question", name: "Does a SIEM replace a security team?", acceptedAnswer: { "@type": "Answer", text: "No. A SIEM produces alerts; people still triage, investigate, and respond. A SIEM with no analysts behind it is an expensive log archive. It is a force multiplier for a security operations team, not a substitute for one." } },
        { "@type": "Question", name: "Do small companies need a SIEM?", acceptedAnswer: { "@type": "Answer", text: "Often they consume one through a managed provider rather than running their own. Many compliance frameworks expect centralized logging and alerting, but small teams usually rent that capability instead of staffing it in-house." } },
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
                        <li className="text-gray-300">What is SIEM?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is SIEM?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A SIEM (Security Information and Event Management platform) is the central system that collects log and event data from across your entire environment, correlates it to spot patterns no single source would reveal, and raises alerts so a security team can investigate what looks wrong.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What does it mean?</h2>
                    <p>
                        Every system you run is constantly writing down what happens to it. Your
                        servers log logins, your firewall logs connections, your cloud account logs
                        API calls, your identity provider logs every authentication. Individually,
                        each of these logs is a narrow keyhole view. A SIEM is the room where all
                        those keyholes get pointed at one wall, so a pattern that is invisible in any
                        single log becomes obvious when you see them together.
                    </p>
                    <p>
                        The classic example: a single failed login is noise. A failed login on a
                        VPN, followed by a successful login from a new country, followed by a
                        privileged account suddenly reading files it never touches — that is a story,
                        and a SIEM is what stitches the three separate log entries into one alert
                        that says &quot;look at this.&quot; The name captures the two halves of the job:
                        Security Information management (storing and searching the data) and Event
                        management (correlating and alerting on it in near real time).
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the term came from</h2>
                    <p>
                        The term was coined by analysts at Gartner in 2005, merging two product
                        categories that had grown up separately. SIM (Security Information
                        Management) tools focused on collecting and storing logs for later analysis
                        and compliance reporting. SEM (Security Event Management) tools focused on
                        real-time monitoring and alerting. Vendors kept building products that did
                        both, and Gartner gave the combined category a name — SIEM — that stuck so
                        thoroughly the two parent acronyms are now historical footnotes.
                    </p>
                    <p>
                        Over the following two decades the category absorbed more capability:
                        behavioral analytics to flag anomalies, threat-intelligence feeds to
                        recognize known-bad indicators, and increasingly automation through adjacent
                        SOAR (Security Orchestration, Automation, and Response) tooling. The modern
                        cloud-native SIEM looks very different from its 2005 ancestor, but the core
                        promise — one place to see and reason about security events across
                        everything — is unchanged.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How it works</h2>
                    <p>
                        A SIEM runs four stages. First, ingestion: log sources across the
                        environment ship their data to the SIEM, often through agents or
                        forwarders. Second, normalization: the SIEM parses wildly different log
                        formats into a common structure so a &quot;user&quot; from a firewall and a &quot;user&quot;
                        from an identity provider can be compared. Third, correlation: rules and
                        analytics look across the normalized data for patterns that indicate an
                        attack, generating an alert when one matches. Fourth, response: analysts
                        triage and investigate the alerts, and modern platforms can trigger
                        automated containment actions for well-understood cases.
                    </p>
                    <p>
                        A SIEM rarely works alone. It is the hub that endpoint sensors like{" "}
                        <Link href="/glossary/what-is-edr" className="text-sky-400 hover:underline">EDR</Link> feed
                        into, and it is the primary tool the analysts in a{" "}
                        <Link href="/glossary/what-is-a-security-operations-center" className="text-sky-400 hover:underline">security operations center</Link> stare
                        at all day. Many teams write their detection rules directly against{" "}
                        <Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link> techniques,
                        so each alert maps to a known adversary behavior rather than a cryptic
                        signature.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it matters</h2>
                    <p>
                        A SIEM earns its cost once you have enough systems that no human can watch
                        each one and enough at stake that an undetected intrusion would hurt. It is
                        also frequently a compliance requirement: frameworks like{" "}
                        <Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">SOC 2</Link>,
                        PCI-DSS, and HIPAA expect centralized logging, retention, and the ability to
                        detect and investigate suspicious activity, which a SIEM is the natural way
                        to satisfy. The honest caveat is that a SIEM is only as good as the rules
                        tuned into it and the analysts behind it — a poorly tuned SIEM drowns a team
                        in false positives, and an untuned one is just a very expensive log archive.
                        The way you find out whether your detection rules actually fire is to have
                        someone perform the attacks they are supposed to catch.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We do not sell or operate SIEM platforms — we are the people who test whether
                        yours actually works. During a{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration test</Link>,
                        we execute real attacker techniques against your environment, and a quietly
                        valuable byproduct is the answer to a question most teams never verify: did
                        your SIEM raise an alert when we did that? Because we map every action to{" "}
                        <Link href="/services/mitre-attack-assessment" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link>, we
                        can hand your team a precise list of which techniques your detection rules
                        caught, which they missed, and which they alerted on too late — a detection
                        gap report that turns an expensive SIEM into an effective one. For founders
                        sorting out which security investments to make first, our{" "}
                        <Link href="/blog/soc2-pentest-prep-guide-2026" className="text-sky-400 hover:underline">SOC 2 pentest prep guide</Link> is
                        a good starting point.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        pinned={["soc2-pentest-prep-guide-2026", "what-is-penetration-testing", "penetration-test-cost-2026"]}
                        topics={["pentest", "compliance"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-a-security-operations-center" className="text-sky-400 hover:underline">What is a SOC?</Link></li>
                        <li><Link href="/glossary/what-is-edr" className="text-sky-400 hover:underline">What is EDR?</Link></li>
                        <li><Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link></li>
                        <li><Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">What is SOC 2?</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Does your SIEM actually fire?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We run the attacks your detection rules are supposed to catch and hand you a
                        technique-by-technique gap report. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-siem" />
                        <Link href="/services/mitre-attack-assessment" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            MITRE ATT&amp;CK assessment
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
