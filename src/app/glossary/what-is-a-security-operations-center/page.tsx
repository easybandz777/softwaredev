import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is a Security Operations Center (SOC)? | QUANT LAB USA",
    description:
        "A SOC is the team and tooling that watches for and responds to security threats around the clock. Plain-English definition, how it works, and when you need one — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-a-security-operations-center" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Security Operations Center (SOC)",
    description:
        "A Security Operations Center is the combination of people, processes, and technology dedicated to continuously monitoring, detecting, investigating, and responding to cybersecurity threats.",
    url: "https://quantlabusa.dev/glossary/what-is-a-security-operations-center",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is a Security Operations Center?", item: "https://quantlabusa.dev/glossary/what-is-a-security-operations-center" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does SOC stand for in security?", acceptedAnswer: { "@type": "Answer", text: "In this context SOC stands for Security Operations Center: the people, processes, and technology that continuously monitor for, detect, and respond to security threats. Note this is different from a SOC 2 report, which is a compliance audit." } },
        { "@type": "Question", name: "What does a security operations center do?", acceptedAnswer: { "@type": "Answer", text: "A SOC collects logs and alerts from across an organization, triages them to separate real incidents from noise, investigates suspicious activity, and coordinates the response to contain and recover from attacks — typically around the clock." } },
        { "@type": "Question", name: "What is the difference between a SOC and a SOC 2 report?", acceptedAnswer: { "@type": "Answer", text: "A Security Operations Center is an active defense team. A SOC 2 report is a compliance audit of your controls. They share an acronym but are completely different things; one watches your systems, the other documents that your controls exist." } },
        { "@type": "Question", name: "What is a SIEM and how does it relate to a SOC?", acceptedAnswer: { "@type": "Answer", text: "A SIEM is the central log-aggregation and alerting platform a SOC uses to see across the whole environment. The SIEM is the dashboard; the SOC is the analysts watching it and acting on what it shows." } },
        { "@type": "Question", name: "Do small companies need their own SOC?", acceptedAnswer: { "@type": "Answer", text: "Rarely a 24/7 in-house one. Most small and mid-sized companies use a managed SOC (often called MDR or SOC-as-a-service) and focus their own budget on prevention — secure design, patching, and regular penetration testing." } },
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
                        <li className="text-gray-300">What is a Security Operations Center?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is a Security Operations Center?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A Security Operations Center (SOC) is the combination of people, processes, and technology whose full-time job is to watch your systems for signs of attack, investigate what looks wrong, and coordinate the response when something is — usually around the clock.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What does it mean?</h2>
                    <p>
                        If preventive security is locking the doors, a SOC is the night-watch crew
                        sitting in front of the camera feeds. It is deliberately not a single tool —
                        it is the marriage of three things. The people are security analysts,
                        typically organized in tiers from triage analysts who handle the firehose of
                        alerts up to senior responders who lead investigations. The process is the
                        playbooks and escalation paths that say exactly who does what when a
                        particular kind of alert fires. The technology is the stack of monitoring
                        tools that feed the analysts a view of the whole environment.
                    </p>
                    <p>
                        One naming trap is worth clearing up immediately. &quot;SOC&quot; here means Security
                        Operations Center, an active defense function. It has nothing to do with a{" "}
                        <Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">SOC 2</Link> report,
                        which is a compliance audit of your controls. They share three letters and
                        confuse everyone; one is a team that watches, the other is a document that
                        attests.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the term came from</h2>
                    <p>
                        The concept is borrowed almost directly from the military and from network
                        operations. Defense organizations have run command-and-control centers for
                        decades, and large telecoms built Network Operations Centers (NOCs) to watch
                        uptime long before security had its own equivalent. As networked business
                        systems became valuable enough to attack in the 1990s and 2000s, enterprises
                        and government agencies stood up dedicated security versions of the same
                        idea — a room (originally a literal one, full of screens) where the only job
                        was watching for and responding to intrusions.
                    </p>
                    <p>
                        The modern SOC is mostly virtual rather than a physical war room, and the
                        market has split into in-house SOCs run by large organizations and managed
                        SOCs — often sold as Managed Detection and Response (MDR) or
                        SOC-as-a-service — that smaller companies rent rather than build.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How it works</h2>
                    <p>
                        Day to day, a SOC runs a loop: collect, detect, investigate, respond. It
                        collects logs and telemetry from across the environment — servers, laptops,
                        the network, cloud accounts, identity systems — and funnels them into a
                        central{" "}
                        <Link href="/glossary/what-is-siem" className="text-sky-400 hover:underline">SIEM</Link> platform
                        that correlates events and raises alerts. Endpoint signals usually come from{" "}
                        <Link href="/glossary/what-is-edr" className="text-sky-400 hover:underline">EDR</Link> agents
                        on each machine. Analysts then triage those alerts, separating the
                        overwhelming volume of false positives from the handful that represent a
                        real incident. When something is real, they investigate scope and impact,
                        then execute the response playbook — isolate the affected machine, revoke
                        credentials, block the attacker, and begin recovery.
                    </p>
                    <p>
                        Mature SOCs go beyond reacting to alerts. They run threat hunts, proactively
                        searching for adversary behavior that no alert fired on, and they map
                        observed activity against{" "}
                        <Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link> so
                        they can reason about which stage of an attack they are seeing and what the
                        adversary is likely to try next.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it matters</h2>
                    <p>
                        A SOC matters once the cost of an undetected intrusion outweighs the cost of
                        watching for it — which arrives sooner than most founders expect. The grim
                        statistic the industry repeats is that attackers often dwell inside a network
                        for weeks or months before detection; a SOC exists to compress that dwell
                        time from months to minutes. That said, monitoring is the second priority,
                        not the first. A company with weak prevention and a great SOC is paying
                        people to watch a building burn. The right sequence is to harden the
                        architecture, fix the vulnerabilities a{" "}
                        <Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">penetration test</Link> finds,
                        and only then invest in continuous detection — usually via a managed
                        provider until scale justifies an in-house team.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        QUANT LAB USA is an offensive-security and custom-software firm, not a
                        24/7 monitoring shop — and we think it is more honest to say so than to sell
                        you a SOC you may not need yet. What we do is make whatever detection you run
                        far more effective. Our{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration tests</Link> show
                        you exactly which attacker techniques your defenses miss, and because we map
                        every action to{" "}
                        <Link href="/services/mitre-attack-assessment" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link>, the
                        output doubles as a detection-gap report your SOC or MDR provider can tune
                        against. In short, we generate the realistic adversary activity that proves
                        whether your monitoring would actually catch a breach. For the broader
                        picture of what security work a growing company needs first, see our{" "}
                        <Link href="/blog/soc2-pentest-prep-guide-2026" className="text-sky-400 hover:underline">SOC 2 pentest prep guide</Link>.
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
                        <li><Link href="/glossary/what-is-siem" className="text-sky-400 hover:underline">What is SIEM?</Link></li>
                        <li><Link href="/glossary/what-is-edr" className="text-sky-400 hover:underline">What is EDR?</Link></li>
                        <li><Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link></li>
                        <li><Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">What is SOC 2?</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Would your monitoring catch a real attack?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We generate realistic adversary activity mapped to MITRE ATT&amp;CK so you can
                        see exactly what your SOC or MDR provider misses. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-soc" />
                        <Link href="/services/mitre-attack-assessment" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            MITRE ATT&amp;CK assessment
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
