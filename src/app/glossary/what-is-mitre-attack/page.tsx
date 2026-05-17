import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is MITRE ATT&CK? Plain-English Guide | QUANT LAB USA",
    description:
        "MITRE ATT&CK is the global catalog of adversary tactics and techniques. Plain-English definition, how pentesters use it, 2026 examples. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-mitre-attack" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "MITRE ATT&CK Framework",
    description:
        "MITRE ATT&CK is a globally accessible, community-maintained knowledge base of adversary tactics and techniques observed in real-world attacks, organized by phase of an intrusion.",
    url: "https://quantlabusa.dev/glossary/what-is-mitre-attack",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "MITRE ATT&CK", item: "https://quantlabusa.dev/glossary/what-is-mitre-attack" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does MITRE ATT&CK stand for?", acceptedAnswer: { "@type": "Answer", text: "MITRE is the not-for-profit operator. ATT&CK stands for Adversarial Tactics, Techniques, and Common Knowledge. The framework catalogs the things attackers actually do." } },
        { "@type": "Question", name: "How is it different from OWASP?", acceptedAnswer: { "@type": "Answer", text: "OWASP focuses on web application vulnerabilities — the bugs. ATT&CK focuses on attacker behavior across an entire intrusion — what they do after they get in." } },
        { "@type": "Question", name: "Who uses MITRE ATT&CK?", acceptedAnswer: { "@type": "Answer", text: "Red teams use it to plan engagements. Blue teams use it to map coverage of their detections. Compliance frameworks reference it. EDR and SIEM vendors tag their detections by ATT&CK technique." } },
        { "@type": "Question", name: "What are tactics and techniques?", acceptedAnswer: { "@type": "Answer", text: "Tactics are the why — Initial Access, Persistence, Lateral Movement. Techniques are the how — Phishing, Scheduled Tasks, Pass-the-Hash. Each tactic has many techniques mapped to it." } },
        { "@type": "Question", name: "Is there a MITRE ATT&CK Navigator?", acceptedAnswer: { "@type": "Answer", text: "Yes. The ATT&CK Navigator is a free web tool for visualizing coverage, highlighting techniques a particular adversary uses, and tracking your detection or testing progress." } },
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
                        <li className="text-gray-300">MITRE ATT&amp;CK</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Security</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is MITRE ATT&amp;CK?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        MITRE ATT&amp;CK is a globally accessible, community-maintained knowledge base of the tactics and techniques attackers use in real intrusions, organized by phase — initial access, execution, persistence, privilege escalation, lateral movement, exfiltration — and used as the common language between red teams, blue teams, and threat intelligence analysts.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it came from</h2>
                    <p>
                        MITRE is a not-for-profit US research operator that runs federally
                        funded R&amp;D centers. In 2013 a team there started cataloging
                        post-compromise attacker behavior — what threat actors actually do
                        after they get a foothold — to give defenders a vocabulary for
                        describing intrusions. The first public release came in 2015. Today
                        ATT&amp;CK is the de facto language of adversary behavior, cited in
                        compliance frameworks, threat intelligence reports, and red team
                        engagement specs across the industry.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What are tactics, techniques, and procedures (TTPs)?</h2>
                    <p>
                        ATT&amp;CK organizes adversary behavior into a hierarchy. Tactics are
                        the high-level "why" — Initial Access, Execution, Persistence,
                        Defense Evasion, Credential Access, Discovery, Lateral Movement,
                        Collection, Command and Control, Exfiltration, Impact. Techniques
                        are the specific "how" under each tactic — phishing, scheduled
                        tasks, valid accounts, pass-the-hash, and so on. Sub-techniques
                        add another layer of specificity. The whole catalog runs to
                        hundreds of entries, each with examples from real intrusions and
                        detection guidance.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The ATT&amp;CK Navigator</h2>
                    <p>
                        The Navigator is a free web tool that visualizes the framework
                        as a color-codable matrix. Defenders use it to mark which
                        techniques their detection rules cover, which are unaddressed,
                        and which their last red-team engagement actually triggered.
                        Threat intel teams use it to overlay specific adversary groups
                        — show me every technique APT29 has been observed using in
                        public reporting — and compare against their own coverage. It
                        is the closest thing the industry has to a shared canvas for
                        defensive maturity.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What is the difference between MITRE ATT&amp;CK and OWASP?</h2>
                    <p>
                        Both are taxonomies, but they cover different ground.{" "}
                        <Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">OWASP Top 10</Link>{" "}
                        is about application-layer vulnerabilities — the bugs attackers
                        exploit to get in or escalate. ATT&amp;CK is about adversary
                        behavior across the whole intrusion lifecycle — what they do once
                        they are in. A complete security program touches both: OWASP for
                        app development, ATT&amp;CK for detection engineering and incident
                        response.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Our{" "}
                        <Link href="/services/mitre-attack-assessment" className="text-sky-400 hover:underline">MITRE ATT&amp;CK assessment</Link>{" "}
                        engagements help organizations measure their current detection
                        and prevention coverage across the framework. We map your existing
                        controls — EDR, SIEM rules, identity protection, network sensors —
                        to ATT&amp;CK techniques, identify the gaps, and prioritize the
                        ones with the highest blast radius. The same mapping shows up in
                        our{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">pentest reports</Link>,
                        which tag every finding with the relevant tactic and technique IDs
                        so your blue team can correlate them to detection coverage.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">ATT&amp;CK for cloud, mobile, and ICS</h2>
                    <p>
                        The original framework focused on enterprise endpoints. Since
                        then MITRE has shipped specialized matrices: ATT&amp;CK for
                        Cloud (AWS, Azure, GCP, Office 365, Google Workspace),
                        ATT&amp;CK for Mobile (iOS, Android), and ATT&amp;CK for ICS
                        (industrial control systems). Each uses the same tactic
                        backbone but lists the techniques that apply in that
                        environment. For a SaaS company most relevant work happens
                        in the enterprise and cloud matrices; for a fintech that
                        runs mobile apps, mobile matters too. The matrices share
                        terminology and structure, which means analysts trained on
                        one can read the others without relearning the vocabulary.
                        That portability is part of why ATT&amp;CK has outpaced
                        every previous attempt at an industry-standard taxonomy.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["pentest"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link></li>
                        <li><Link href="/glossary/what-is-a-red-team" className="text-sky-400 hover:underline">What is a red team?</Link></li>
                        <li><Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">OWASP Top 10</Link></li>
                        <li><Link href="/glossary/what-is-active-directory" className="text-sky-400 hover:underline">What is Active Directory?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">Zero trust architecture</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Mapping your defenses to ATT&amp;CK?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We measure where you have coverage, where you have blind spots,
                        and what to fix first. Book a 30-minute consultation.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-mitre" />
                        <Link href="/services/mitre-attack-assessment" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            MITRE ATT&amp;CK assessment
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
