import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "What is a Red Team? Definition & Examples | QUANT LAB",
    description:
        "A red team is goal-driven adversary simulation against your people, processes, and tech. Red team vs pentest, when you need one, and how QUANT LAB approaches it.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-a-red-team" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Red Team",
    description:
        "A red team engagement is a goal-driven adversary simulation that tests an organization's people, processes, and technology against a defined objective, often without warning to the defending blue team.",
    url: "https://quantlabusa.dev/glossary/what-is-a-red-team",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Red Team", item: "https://quantlabusa.dev/glossary/what-is-a-red-team" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is a red team?", acceptedAnswer: { "@type": "Answer", text: "A red team is a group simulating a real adversary against your organization. The engagement is goal-driven (steal customer data, reach the CFO's mailbox) and usually tests detection and response capability, not just whether vulnerabilities exist." } },
        { "@type": "Question", name: "What is the difference between a red team and a pentest?", acceptedAnswer: { "@type": "Answer", text: "A pentest finds and documents vulnerabilities within a defined scope. A red team picks an objective and uses any combination of tools, social engineering, and physical access to reach it. Red team is broader, stealthier, and assumes a more sophisticated adversary." } },
        { "@type": "Question", name: "What is a purple team?", acceptedAnswer: { "@type": "Answer", text: "A collaborative engagement where the red team and the defending blue team work together — red executes a technique, blue verifies whether their detections fired. Faster learning, less drama than a covert red team." } },
        { "@type": "Question", name: "Should my startup hire a red team?", acceptedAnswer: { "@type": "Answer", text: "Probably not yet. Red teams are most valuable when you already have a mature detection and response program to test. If you do not have a SOC or EDR coverage, start with a pentest." } },
        { "@type": "Question", name: "How long does a red team engagement take?", acceptedAnswer: { "@type": "Answer", text: "Real engagements run 4 to 12 weeks of active operations, plus several weeks of planning and post-engagement reporting. Compressed scopes are possible but cost depth." } },
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
                        <li className="text-gray-300">Red Team</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is a Red Team?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A red team is a goal-driven adversary simulation that uses any combination of technical attacks, social engineering, and physical access to achieve a defined objective — usually while the defending blue team is not warned — to test how the entire organization detects and responds to a sophisticated attacker.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Origins</h2>
                    <p>
                        The term comes from military planning, where a "red team" represented
                        the enemy during war games and tried to defeat the defending "blue
                        team." US Department of Defense organizations were doing this in the
                        1960s; the cybersecurity industry borrowed it in the 1990s when
                        information warfare became a recognized discipline. By the 2010s,
                        commercial red teaming became a standard practice at large
                        organizations — banks, defense contractors, big tech.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Pentest vs red team — the real distinction</h2>
                    <p>
                        A{" "}
                        <Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">penetration test</Link>{" "}
                        has a defined scope, finds as many vulnerabilities as possible
                        within that scope, and documents them. Loud and exhaustive is
                        fine. A red team has a defined objective — exfiltrate a specific
                        database, get domain admin, reach a specific executive's inbox —
                        and uses whatever it takes to get there, often with stealth as a
                        primary constraint. The deliverable is not a list of bugs; it is
                        an attack narrative plus an assessment of how the defenders did.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What a red team engagement actually looks like</h2>
                    <p>
                        A typical commercial red team runs across four phases.
                        Reconnaissance: open-source intelligence on the target,
                        infrastructure mapping, employee enumeration from LinkedIn and
                        public sources. Initial access: phishing, vendor compromise,
                        exposed services, sometimes physical entry. Internal operations:
                        privilege escalation, lateral movement, credential theft,
                        persistence, mapped to ATT&amp;CK techniques. Objective and
                        report-out: reach the goal, document the attack chain, debrief
                        with leadership and the blue team. The whole engagement runs
                        weeks, not days, and the report is a narrative not a checklist.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When you need one</h2>
                    <p>
                        Red teams are most useful when you already have a security program
                        worth testing. If you have a SOC, EDR coverage, detection rules,
                        and an incident response process, a red team measures whether they
                        actually work against real adversary techniques. If you have none
                        of those, start with a pentest — red-teaming a defenseless
                        environment is overkill and produces a report nobody knows what to
                        do with.
                    </p>
                    <p>
                        Many organizations split the difference with a purple team
                        engagement, where red and blue collaborate openly: red executes
                        techniques mapped to{" "}
                        <Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link>{" "}
                        and blue verifies whether their detection rules fired. Lower drama,
                        faster learning.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Our{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration testing</Link>{" "}
                        practice covers the spectrum from focused web app and network
                        engagements through{" "}
                        <Link href="/services/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory</Link>{" "}
                        deep-dives. For mature organizations we coordinate goal-driven
                        red and purple team operations mapped to{" "}
                        <Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link>.
                        For earlier-stage clients, we usually recommend a scoped pentest
                        first — red teaming an environment without an SOC is rarely the
                        right starting point.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Rules of engagement</h2>
                    <p>
                        Every legitimate red team engagement runs against a written
                        Rules of Engagement document that names the target, the
                        objective, in-scope and out-of-scope assets, allowed
                        techniques, and how the team handles emergencies — if the
                        operators find evidence of a real intrusion in progress, or
                        if a defensive action threatens production stability, the
                        engagement pauses. Get-out-of-jail letters signed by the
                        right executive prevent operators from being arrested if a
                        physical pretexting attempt goes wrong. Without this
                        paperwork no professional red team will run the engagement.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                        <li><Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&CK</Link></li>
                        <li><Link href="/glossary/what-is-active-directory" className="text-sky-400 hover:underline">What is Active Directory?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">Zero trust architecture</Link></li>
                        <li><Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">OWASP Top 10</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Considering a red or purple team?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We will help you choose the right engagement type for your
                        program maturity. Book a 30-minute consultation.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-redteam" />
                        <Link href="/services/penetration-testing" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Penetration testing services
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
