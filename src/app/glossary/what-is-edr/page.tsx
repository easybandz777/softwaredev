import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is EDR? Endpoint Detection and Response | QUANT LAB USA",
    description:
        "EDR is software on each device that detects and responds to attacks antivirus would miss. Plain-English definition, how it works, and how it differs from EPP/XDR — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-edr" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "EDR (Endpoint Detection and Response)",
    description:
        "EDR is software installed on endpoints such as laptops and servers that continuously records their behavior, detects malicious activity, and gives responders the ability to investigate and contain threats.",
    url: "https://quantlabusa.dev/glossary/what-is-edr",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is EDR?", item: "https://quantlabusa.dev/glossary/what-is-edr" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does EDR stand for?", acceptedAnswer: { "@type": "Answer", text: "EDR stands for Endpoint Detection and Response. It is software on each device that continuously records behavior, detects malicious activity, and lets responders investigate and contain threats remotely." } },
        { "@type": "Question", name: "What is the difference between EDR and antivirus?", acceptedAnswer: { "@type": "Answer", text: "Traditional antivirus blocks known-bad files using signatures. EDR records behavior and detects malicious activity even from files it has never seen, then gives responders tools to investigate and contain. Antivirus is a doorman; EDR is a doorman plus a detective with security-camera footage." } },
        { "@type": "Question", name: "What is the difference between EDR and XDR?", acceptedAnswer: { "@type": "Answer", text: "EDR focuses on endpoints. XDR (Extended Detection and Response) stretches the same idea across endpoints, network, email, cloud, and identity to correlate threats across all of them. XDR is EDR's broader cousin." } },
        { "@type": "Question", name: "How does EDR relate to a SIEM and a SOC?", acceptedAnswer: { "@type": "Answer", text: "EDR is a high-fidelity sensor on each endpoint. It feeds signals into a SIEM, the central platform that correlates data from many sources, and analysts in a SOC use both to detect and respond to attacks." } },
        { "@type": "Question", name: "Can attackers bypass EDR?", acceptedAnswer: { "@type": "Answer", text: "Skilled attackers actively try to, using techniques to disable, blind, or evade the agent. That is exactly why penetration tests probe whether your EDR detects and stops real attacker behavior rather than assuming it does." } },
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
                        <li className="text-gray-300">What is EDR?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is EDR?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        EDR (Endpoint Detection and Response) is software installed on each laptop and server that continuously records what the device is doing, detects malicious behavior even from threats it has never seen before, and gives responders the tools to investigate and shut an attack down remotely.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What does it mean?</h2>
                    <p>
                        An &quot;endpoint&quot; is any device a person works on or that runs your workloads —
                        a laptop, a desktop, a server, increasingly a cloud instance. These are
                        where attacks usually land first, through a phished employee, a malicious
                        download, or a stolen credential. EDR is the always-on agent sitting on each
                        of those devices, and the difference from old-school antivirus is the second
                        and third words in its name: not just detection, but <em>response</em>, and
                        not just blocking known files, but watching <em>behavior</em>.
                    </p>
                    <p>
                        The useful mental model is a security camera with a detective attached.
                        Traditional antivirus is a doorman with a list of known troublemakers — if
                        your face is not on the list, you walk in. EDR records everything everyone
                        does inside the building, so even a stranger who got past the door gets
                        caught the moment they start picking locks. When something looks malicious,
                        a responder can use the EDR console to isolate that one machine from the
                        network, kill the offending process, and trace exactly what it touched.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the term came from</h2>
                    <p>
                        The term was coined by Gartner analyst Anton Chuvakin in 2013, originally as
                        &quot;Endpoint Threat Detection and Response,&quot; later shortened to EDR. It named a
                        shift that had been building for years: signature-based antivirus, which
                        matches files against a list of known-bad hashes, was losing badly to
                        attackers who could trivially change a file enough to dodge the signature or
                        avoid dropping a file at all. Defenders needed tools that watched what code
                        actually <em>did</em> rather than what it looked like.
                    </p>
                    <p>
                        Since then the category has both broadened and blurred. Many products now
                        ship as EPP (Endpoint Protection Platforms) that bundle prevention and EDR
                        together, and the industry coined XDR (Extended Detection and Response) for
                        platforms that stretch the same behavioral approach across endpoints,
                        network, email, identity, and cloud — correlating across all of them rather
                        than watching endpoints alone.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How it works</h2>
                    <p>
                        A lightweight agent on each endpoint continuously records telemetry — process
                        launches, file changes, network connections, registry edits, command-line
                        arguments. That stream is analyzed, partly on the device and partly in the
                        cloud, against behavioral rules and machine-learning models tuned to spot
                        attacker techniques: a Word document spawning a PowerShell process, a
                        process injecting code into another, credential-dumping behavior. When a
                        detection fires, the EDR raises an alert and offers response actions —
                        isolate the host, terminate the process, roll back changes, collect forensic
                        data.
                    </p>
                    <p>
                        EDR rarely operates in a vacuum. Its alerts flow up into a{" "}
                        <Link href="/glossary/what-is-siem" className="text-sky-400 hover:underline">SIEM</Link> for
                        correlation with other sources, and the analysts who act on them usually sit
                        in a{" "}
                        <Link href="/glossary/what-is-a-security-operations-center" className="text-sky-400 hover:underline">security operations center</Link>. The
                        detections themselves are increasingly written against{" "}
                        <Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link> techniques,
                        which is why a good EDR alert tells you not just &quot;something bad happened&quot;
                        but &quot;this looks like credential dumping, technique T1003.&quot;
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it matters</h2>
                    <p>
                        EDR matters the moment you have employees with laptops and data worth
                        stealing — which is to say, almost immediately. It has become a baseline
                        expectation in cyber-insurance questionnaires and enterprise security
                        reviews, and it is one of the highest-leverage controls a growing company
                        can deploy because endpoints are where most breaches begin. The important
                        nuance is that deploying EDR and trusting EDR are different things. Skilled
                        attackers actively work to disable, blind, or evade the agent, and a default
                        configuration can leave gaps. The only way to know whether your EDR would
                        actually catch and stop a determined intruder is to have a competent
                        attacker try the techniques it is supposed to detect.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We do not sell EDR licenses — we are the adversary that proves whether yours
                        works. During a{" "}
                        <Link href="/services/network-pentest" className="text-sky-400 hover:underline">network</Link> or{" "}
                        <Link href="/services/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory</Link> engagement,
                        we run the real techniques attackers use to operate on endpoints and move
                        laterally, and we record exactly what your EDR detected, what it blocked, and
                        what it let slide. Because we map every action to{" "}
                        <Link href="/services/mitre-attack-assessment" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link>, you
                        get a technique-by-technique view of your endpoint defenses rather than a
                        vague reassurance that &quot;the agent is installed.&quot; That distinction is the
                        whole point: an EDR you have never tested is a smoke detector you have never
                        checked the battery on. For the broader buyer&apos;s view of offensive security,
                        read our{" "}
                        <Link href="/blog/what-is-penetration-testing" className="text-sky-400 hover:underline">founder&apos;s pentest guide</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        pinned={["what-is-penetration-testing", "best-penetration-testing-companies-georgia-2026", "penetration-test-cost-2026"]}
                        topics={["pentest"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-siem" className="text-sky-400 hover:underline">What is SIEM?</Link></li>
                        <li><Link href="/glossary/what-is-a-security-operations-center" className="text-sky-400 hover:underline">What is a SOC?</Link></li>
                        <li><Link href="/glossary/what-is-mitre-attack" className="text-sky-400 hover:underline">MITRE ATT&amp;CK</Link></li>
                        <li><Link href="/glossary/what-is-a-red-team" className="text-sky-400 hover:underline">What is a red team?</Link></li>
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Have you tested your EDR against a real attacker?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We run the techniques your endpoint defenses are supposed to stop and tell
                        you which ones they actually catch. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-edr" />
                        <Link href="/services/network-pentest" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Network penetration testing
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
