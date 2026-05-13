import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "What Is MITRE ATT&CK? A Plain-English 2026 Guide | QUANT LAB USA",
    description:
        "MITRE ATT&CK without the jargon: tactics, techniques, sub-techniques, red vs blue team use, ATT&CK vs Kill Chain vs PTES, and how to read a report.",
    alternates: {
        canonical: "https://quantlabusa.dev/blog/what-is-mitre-attack-framework",
    },
    openGraph: {
        title: "What Is the MITRE ATT&CK Framework? A Plain-English 2026 Guide",
        description:
            "The matrix explained, red vs blue team usage, ATT&CK vs Kill Chain vs PTES, and how to read an ATT&CK-mapped pentest report.",
        url: "https://quantlabusa.dev/blog/what-is-mitre-attack-framework",
        type: "article",
        publishedTime: "2026-05-12",
        authors: ["William Beltz"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Is the MITRE ATT&CK Framework? A Plain-English 2026 Guide",
    description:
        "A non-security reader's introduction to MITRE ATT&CK: the matrix, tactics, techniques, sub-techniques, red and blue team use cases, comparisons to Kill Chain and PTES, and what an ATT&CK-mapped pentest report should look like.",
    image: "https://quantlabusa.dev/og-image.png",
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
    author: {
        "@type": "Person",
        name: "William Beltz",
        url: "https://quantlabusa.dev/about",
        jobTitle: "Founder & Principal Engineer",
        worksFor: { "@id": "https://quantlabusa.dev/#organization" },
    },
    publisher: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        "@id": "https://quantlabusa.dev/#organization",
        logo: {
            "@type": "ImageObject",
            url: "https://quantlabusa.dev/logo-transparent.png",
        },
    },
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://quantlabusa.dev/blog/what-is-mitre-attack-framework",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://quantlabusa.dev/blog",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "What Is MITRE ATT&CK",
            item: "https://quantlabusa.dev/blog/what-is-mitre-attack-framework",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the MITRE ATT&CK framework?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "MITRE ATT&CK is a publicly available knowledge base that catalogs the tactics, techniques, and procedures real-world adversaries use to attack computer systems. Published by MITRE Corporation, it has become the common vocabulary every modern security team uses to describe how attackers operate, with 14 tactics and over 200 techniques in the enterprise matrix.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between tactics, techniques, and sub-techniques in MITRE ATT&CK?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Tactics are the columns of the matrix and represent the attacker's goal at that stage (e.g., Initial Access, Persistence, Exfiltration). Techniques are the boxes inside each column, describing how the attacker achieves that goal (e.g., T1566 Phishing). Sub-techniques narrow further (T1566.001 Spearphishing Attachment).",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between MITRE ATT&CK and the Cyber Kill Chain?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The Cyber Kill Chain is a 7-stage linear model from Lockheed Martin (Reconnaissance, Weaponization, Delivery, Exploitation, Installation, C2, Actions). MITRE ATT&CK is a non-linear, exhaustive catalog with 14 tactics and over 200 techniques. Kill Chain is a strategic narrative. ATT&CK is the operational reference.",
            },
        },
        {
            "@type": "Question",
            name: "How is MITRE ATT&CK used in penetration testing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "ATT&CK is used by red teams to plan attack chains and by blue teams to measure detection coverage. A good pentest report maps every finding to a specific ATT&CK technique ID so the defender can immediately translate a finding into a SIEM rule, an EDR alert, or a SOC playbook update.",
            },
        },
        {
            "@type": "Question",
            name: "How many tactics are in the MITRE ATT&CK matrix?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The MITRE ATT&CK enterprise matrix has 14 tactics: Reconnaissance, Resource Development, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command and Control, Exfiltration, and Impact. Mobile and ICS matrices have their own tactic sets.",
            },
        },
    ],
};

export default function MitreAttackPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <article className="container mx-auto px-6 max-w-3xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li>
                            <Link href="/" className="hover:text-sky-400 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">
                            ›
                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-sky-400 transition-colors">
                                Blog
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">
                            ›
                        </li>
                        <li className="text-gray-300">What Is MITRE ATT&amp;CK</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Cybersecurity · Top of Funnel
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What Is the MITRE ATT&amp;CK Framework? A Plain-English 2026 Guide
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                        <span className="inline-flex items-center gap-1.5">
                            <User className="w-4 h-4" />
                            Bill Beltz, Founder
                        </span>
                        <span className="text-gray-700">·</span>
                        <span className="inline-flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            May 12, 2026
                        </span>
                        <span className="text-gray-700">·</span>
                        <span>11 min read</span>
                    </div>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        ATT&amp;CK is one of those frameworks that everyone in security
                        references and nobody outside security can decode. This guide is for
                        the founder, the auditor, or the engineering lead who keeps seeing
                        &quot;mapped to ATT&amp;CK&quot; in pentest proposals and wants to know what
                        that actually means before they sign.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What is the MITRE ATT&amp;CK framework?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>MITRE ATT&amp;CK is a publicly available knowledge base that catalogs the tactics, techniques, and procedures real-world adversaries use to attack computer systems. Published by MITRE Corporation, it has become the common vocabulary every modern security team uses to describe how attackers operate. The enterprise matrix has 14 tactics and over 200 techniques, each with a unique identifier like T1566 (Phishing) or T1078 (Valid Accounts).</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        The 60-second definition (with a real attack example)
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            MITRE ATT&amp;CK — short for Adversarial Tactics, Techniques, and
                            Common Knowledge — is a publicly available, continuously updated
                            knowledge base that catalogs every way real-world adversaries
                            have been observed to attack computer systems. It is published by
                            MITRE Corporation, a nonprofit federally funded research and
                            development organization, and it has effectively become the
                            common vocabulary every modern security team uses to describe how
                            attackers operate.
                        </p>
                        <p>
                            Concretely: imagine an attacker phishes one of your employees,
                            harvests credentials, logs into your VPN as that employee,
                            pivots through your internal network, escalates privileges, and
                            steals customer data. ATT&amp;CK gives every step of that attack a
                            specific identifier. The phishing email is T1566. The credential
                            harvesting is T1056. The valid-account VPN login is T1078. The
                            internal pivot might be T1021. The privilege escalation is one of
                            several T1068 sub-techniques. The data exfiltration is T1041.
                            Each step also maps to a higher-level &quot;tactic&quot; — the goal of
                            that step — like Initial Access, Credential Access, Lateral
                            Movement, Privilege Escalation, or Exfiltration.
                        </p>
                        <p>
                            That is the entire framework, structurally. ATT&amp;CK is a giant
                            standardized catalog of what attackers do, who has been observed
                            doing it, and what evidence each technique tends to leave behind.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Tactics vs techniques vs sub-techniques: the matrix decoded
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            The ATT&amp;CK Matrix is the chart you have probably seen — columns
                            of red boxes that look like the world&apos;s most intimidating periodic
                            table. The columns and the boxes mean very specific things, and
                            knowing the difference is the entire game.
                        </p>
                        <p>
                            <strong className="text-white">Tactics</strong> are the columns.
                            They represent the <em>goal</em> the attacker is trying to
                            achieve at that stage of the attack: Initial Access, Execution,
                            Persistence, Privilege Escalation, Defense Evasion, Credential
                            Access, Discovery, Lateral Movement, Collection, Command and
                            Control, Exfiltration, Impact, Reconnaissance, and Resource
                            Development. Fourteen total in the enterprise matrix. Think of
                            tactics as the chapters of the attack story.
                        </p>
                        <p>
                            <strong className="text-white">Techniques</strong> are the
                            individual boxes inside each column. They represent
                            <em> how</em> the attacker accomplishes that goal. T1566
                            (Phishing) is one technique under the Initial Access tactic.
                            T1078 (Valid Accounts) is another. Each technique has a unique
                            T-number, a description, real-world adversary examples, and
                            detection guidance.
                        </p>
                        <p>
                            <strong className="text-white">Sub-techniques</strong> are
                            variants of a technique. T1566.001 is Spearphishing Attachment.
                            T1566.002 is Spearphishing Link. T1566.003 is Spearphishing via
                            Service. Same parent technique (T1566 — Phishing), different
                            specific implementations. Sub-techniques exist because saying
                            &quot;the attacker used phishing&quot; is not specific enough to drive a
                            detection rule.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        The 14 enterprise tactics, walked through one by one
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            A short tour of each tactic in the order an attacker typically
                            uses them. Real attacks rarely march through these in a clean
                            sequence — they jump around — but knowing the names is enough to
                            read any ATT&amp;CK-mapped report.
                        </p>
                        <p>
                            <strong className="text-white">Reconnaissance</strong> — gathering
                            information about you before any active attack. OSINT, DNS,
                            scraping LinkedIn, identifying your tech stack.
                        </p>
                        <p>
                            <strong className="text-white">Resource Development</strong> —
                            building or buying the infrastructure for the attack. Acquiring
                            domains, setting up command-and-control servers, buying stolen
                            credentials.
                        </p>
                        <p>
                            <strong className="text-white">Initial Access</strong> — getting
                            the first foothold inside your environment. Phishing,
                            internet-facing exploits, stolen credentials, supply-chain
                            compromise.
                        </p>
                        <p>
                            <strong className="text-white">Execution</strong> — running
                            adversary code on the systems they just compromised.
                            PowerShell, WMI, scheduled tasks, malicious office macros.
                        </p>
                        <p>
                            <strong className="text-white">Persistence</strong> — making sure
                            access survives reboots, patching, or credential changes.
                            Registry run keys, scheduled tasks, account creation,
                            startup folders.
                        </p>
                        <p>
                            <strong className="text-white">Privilege Escalation</strong> —
                            going from a low-privilege foothold to a high-privilege one.
                            Token impersonation, kernel exploits, abuse of misconfigured
                            services.
                        </p>
                        <p>
                            <strong className="text-white">Defense Evasion</strong> — hiding
                            from security tools. Disabling logging, abusing trusted binaries
                            (LOLBins), obfuscation.
                        </p>
                        <p>
                            <strong className="text-white">Credential Access</strong> —
                            stealing credentials to expand or maintain access. Password
                            dumping, Kerberoasting, NTLM relay, browser credential theft.
                        </p>
                        <p>
                            <strong className="text-white">Discovery</strong> — exploring the
                            environment they&apos;re now in. Enumerating users, groups, shares,
                            domain trusts.
                        </p>
                        <p>
                            <strong className="text-white">Lateral Movement</strong> — moving
                            from the initial host to other hosts. SMB, RDP, WMI,
                            pass-the-hash, pass-the-ticket.
                        </p>
                        <p>
                            <strong className="text-white">Collection</strong> — gathering
                            the data the attacker actually wants. Screen captures, keystroke
                            logging, file staging.
                        </p>
                        <p>
                            <strong className="text-white">Command and Control</strong> —
                            maintaining a channel back to the attacker&apos;s infrastructure.
                            HTTP/S beacons, DNS tunneling, encrypted channels.
                        </p>
                        <p>
                            <strong className="text-white">Exfiltration</strong> — moving the
                            collected data out. Over the C2 channel, over removable media,
                            to a cloud storage service.
                        </p>
                        <p>
                            <strong className="text-white">Impact</strong> — the visible
                            consequence to the victim. Encryption (ransomware), data
                            destruction, service denial, defacement.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        How red teams use ATT&amp;CK to plan engagements
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            Red teams — the offensive side of security, including pentesters
                            and{" "}
                            <Link
                                href="/services/penetration-testing"
                                className="text-sky-400 hover:underline"
                            >
                                pentest providers like us
                            </Link>{" "}
                            — use ATT&amp;CK to plan engagements in two main ways: as a
                            coverage map and as an adversary emulation script. The
                            playbook applies whether the engagement is a focused{" "}
                            <Link
                                href="/services/network-pentest"
                                className="text-sky-400 hover:underline"
                            >
                                network pentest
                            </Link>{" "}
                            or a full red-team simulation.
                        </p>
                        <p>
                            <strong className="text-white">Coverage map.</strong> Before an
                            engagement starts, the red team identifies which tactics and
                            techniques the scope can plausibly cover. A web app pentest
                            obviously can cover Initial Access via web exploits and some
                            Credential Access (e.g., authentication bypass) — but it will
                            not exercise Persistence on a Windows endpoint or Lateral
                            Movement across an internal network. Naming the coverage
                            explicitly is honest scoping.
                        </p>
                        <p>
                            <strong className="text-white">
                                Adversary emulation script.
                            </strong>{" "}
                            For more advanced engagements, the red team picks a specific
                            real-world threat actor — say, the techniques used by FIN6 or
                            APT29 — and emulates that actor&apos;s observed playbook step by
                            step. MITRE publishes adversary profiles that map each known
                            group to the specific techniques they have been observed using.
                            For a financial institution, emulating a financially motivated
                            actor like FIN6 produces a much more useful test than a generic
                            &quot;try whatever works&quot; engagement.
                        </p>
                        <p>
                            The output of a well-run red team engagement is an attack
                            narrative where every step is tagged with the specific ATT&amp;CK
                            technique used. Your defenders can then look at their detection
                            coverage and answer the only question that matters: would we
                            have caught this if a real attacker had done it?
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        How blue teams use ATT&amp;CK for detection coverage
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            Blue teams — the defensive side, including your SOC and IR
                            engineers — use ATT&amp;CK as a coverage scoreboard. The exercise
                            looks like this.
                        </p>
                        <p>
                            For every technique in the matrix, the blue team asks: do we
                            have a detection that would alert if this technique were
                            executed in our environment? If yes, what is the detection
                            quality — high-fidelity, noisy, or unreliable? If no, why not
                            (out of scope, infeasible, deprioritized, or just missed)?
                        </p>
                        <p>
                            The output is a coverage heatmap — the same ATT&amp;CK matrix you&apos;ve
                            seen, colored by detection quality. The heatmap is more useful
                            than any CVSS-driven dashboard because it answers the question
                            your CFO actually asks: where are we exposed? You can&apos;t fix
                            everything at once, but a coverage heatmap tells you which
                            tactics to invest detection budget into next.
                        </p>
                        <p>
                            Modern detection-as-code tooling has made this exercise
                            radically easier than it was five years ago. Detection rules in
                            SIEM and EDR platforms are increasingly tagged with the specific
                            ATT&amp;CK technique they detect, which means coverage rolls up
                            automatically. The shop running your pentest should be able to
                            map their findings back to your detection coverage gaps directly.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        ATT&amp;CK vs the Cyber Kill Chain vs PTES
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            Three frameworks come up in pentest proposals: ATT&amp;CK, the
                            Lockheed Martin Cyber Kill Chain, and PTES (Penetration Testing
                            Execution Standard). They are not competitors and they are not
                            interchangeable.
                        </p>
                        <p>
                            <strong className="text-white">Cyber Kill Chain</strong> is the
                            seven-stage model Lockheed Martin published in 2011:
                            Reconnaissance, Weaponization, Delivery, Exploitation,
                            Installation, Command and Control, and Actions on Objectives.
                            It is older, simpler, and intentionally linear. Useful for
                            executive communication. Not granular enough for technical
                            engineering.
                        </p>
                        <p>
                            <strong className="text-white">ATT&amp;CK</strong> is what the Kill
                            Chain became when MITRE got more rigorous: dozens of tactics,
                            hundreds of techniques, real adversary observations underneath.
                            ATT&amp;CK is what your technical defenders and red teams actually
                            work with.
                        </p>
                        <p>
                            <strong className="text-white">PTES</strong> is a methodology
                            standard for how pentests should be conducted — pre-engagement,
                            intelligence gathering, threat modeling, vulnerability analysis,
                            exploitation, post-exploitation, reporting. PTES describes the
                            process; ATT&amp;CK describes the content. A pentest can claim PTES
                            methodology while still mapping findings to ATT&amp;CK techniques.
                            Both, together, are the default for serious shops in 2026.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Why ATT&amp;CK became the industry standard so fast
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            ATT&amp;CK&apos;s adoption curve in 2018–2026 has been almost
                            unprecedented for a security framework. Three reasons account
                            for it, and they&apos;re worth naming because they also explain
                            where the framework is most useful.
                        </p>
                        <p>
                            First, it&apos;s observational rather than aspirational. Older
                            frameworks like ISO 27001 or the NIST Cybersecurity Framework
                            describe how you <em>should</em> defend; ATT&amp;CK describes how
                            attackers <em>actually attack</em>. That shift in orientation
                            made ATT&amp;CK immediately operational in a way the older
                            frameworks were not. Engineers can write detection rules against
                            specific techniques; auditors and CFOs cannot write a useful
                            check against &quot;adequately addresses cybersecurity.&quot;
                        </p>
                        <p>
                            Second, it&apos;s standardized vocabulary. Before ATT&amp;CK, every
                            vendor had their own taxonomy for describing attacker behavior,
                            and translation between them was friction-heavy. ATT&amp;CK
                            became the lingua franca that lets a CrowdStrike alert, a
                            Sentinel rule, and a pentest report all speak the same language.
                            The network effect was immediate and durable.
                        </p>
                        <p>
                            Third, MITRE has been disciplined about updates. The matrix has
                            two annual update cycles, additions are debated publicly, and
                            deprecations are rare and carefully managed. Compare this to
                            other security frameworks that update every five years and you
                            see why operational teams trust ATT&amp;CK as the moving frontier.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Where MITRE ATT&amp;CK falls short
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            ATT&amp;CK is excellent and it is not magic. Three real limitations
                            worth naming.
                        </p>
                        <p>
                            <strong className="text-white">
                                It is observation-driven, not predictive.
                            </strong>{" "}
                            ATT&amp;CK only catalogs what has already been seen in the wild.
                            Novel techniques — the ones a sophisticated adversary uses
                            before anyone has named them — are not in the matrix yet by
                            definition. If your threat model includes nation-state
                            adversaries with original capability development, ATT&amp;CK
                            coverage alone does not protect you.
                        </p>
                        <p>
                            <strong className="text-white">It is enterprise-skewed.</strong>{" "}
                            The original ATT&amp;CK matrix focused on enterprise IT environments.
                            ICS, mobile, and cloud sub-matrices exist now and are improving,
                            but they are not as mature as the enterprise matrix. If your
                            risk is dominated by ICS or specialized mobile threats, ATT&amp;CK
                            is part of the picture but not the whole picture.
                        </p>
                        <p>
                            <strong className="text-white">
                                Mapping does not equal coverage.
                            </strong>{" "}
                            A vendor saying their product &quot;maps to ATT&amp;CK&quot; is making a
                            very specific and small claim — they have a translation layer
                            between their telemetry and ATT&amp;CK identifiers. It does not mean
                            their product actually detects every technique it maps to.
                            Coverage requires real detection rules tested against real
                            techniques.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        How to read an ATT&amp;CK-mapped pentest report
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            When you receive a pentest report claiming ATT&amp;CK mapping, here
                            is what to look for to verify the mapping is real and not
                            decorative.
                        </p>
                        <p>
                            Every finding should have a specific T-number (and ideally a
                            sub-technique like T1566.001 rather than just T1566). The attack
                            narrative — the section that tells the story of how the testers
                            chained findings together — should reference the technique IDs
                            as the testers move from one stage to the next. If the report
                            only puts ATT&amp;CK labels in a summary table at the end and the
                            narrative reads like a list of CVEs, the mapping is decoration,
                            not methodology.
                        </p>
                        <p>
                            A good report should also tell you which tactics were not
                            exercised by the scope and why. A web app pentest report that
                            silently leaves out half the tactics is honest only if it says
                            so explicitly. Coverage transparency is a sign of a serious
                            shop. For more on what to look for in a report,{" "}
                            <Link
                                href="/blog/what-is-penetration-testing"
                                className="text-sky-400 hover:underline"
                            >
                                our full pentest buyer&apos;s guide
                            </Link>{" "}
                            covers the full anatomy.
                        </p>
                        <p>
                            For founders running an ATT&amp;CK-aligned assessment for the first
                            time, our{" "}
                            <Link
                                href="/services/mitre-attack-assessment"
                                className="text-sky-400 hover:underline"
                            >
                                MITRE ATT&amp;CK assessment service
                            </Link>{" "}
                            walks through your environment&apos;s coverage map in detail and
                            produces the kind of heatmap your board will actually use. If
                            you&apos;re scoping deeper offensive testing, our{" "}
                            <Link
                                href="/services/active-directory-pentest"
                                className="text-sky-400 hover:underline"
                            >
                                Active Directory pentest
                            </Link>{" "}
                            and{" "}
                            <Link
                                href="/services/web-app-pentest"
                                className="text-sky-400 hover:underline"
                            >
                                web app pentest
                            </Link>{" "}
                            offerings are ATT&amp;CK-mapped by default. Case studies of
                            real engagements live on{" "}
                            <Link
                                href="/work/active-directory-pentest"
                                className="text-sky-400 hover:underline"
                            >
                                our Active Directory pentest case page
                            </Link>{" "}
                            for readers who want to see the deliverable shape before
                            scoping.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">FAQ</h2>
                    <div className="space-y-6">
                        {[
                            { q: "What is the difference between MITRE ATT&CK and the Cyber Kill Chain?", a: "The Cyber Kill Chain is a 7-stage linear model from Lockheed Martin (Reconnaissance, Weaponization, Delivery, Exploitation, Installation, C2, Actions). MITRE ATT&CK is a non-linear, exhaustive catalog with 14 tactics and over 200 techniques. Kill Chain is a strategic narrative. ATT&CK is the operational reference." },
                            { q: "How is MITRE ATT&CK used in penetration testing?", a: "ATT&CK is used by red teams to plan attack chains and by blue teams to measure detection coverage. A good pentest report maps every finding to a specific ATT&CK technique ID so the defender can immediately translate a finding into a SIEM rule, an EDR alert, or a SOC playbook update." },
                            { q: "How many tactics are in the MITRE ATT&CK matrix?", a: "The MITRE ATT&CK enterprise matrix has 14 tactics: Reconnaissance, Resource Development, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command and Control, Exfiltration, and Impact." },
                        ].map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Scope an ATT&amp;CK-mapped engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Whether you need a coverage assessment, a focused pentest, or a
                            full red team engagement — we map every finding to a real
                            adversary technique. Twenty minutes to scope yours.
                        </p>
                        <ConsultationCTA
                            label="Book an ATT&CK Scoping Call"
                            service="MITRE ATT&CK Assessment"
                            source="blog-mitre-attack"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <h2 className="text-2xl font-bold text-white mb-6">Keep reading</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            {
                                href: "/blog/what-is-penetration-testing",
                                title: "What Is Penetration Testing?",
                                desc: "Pentest types, scope, reporting, and what one should cost in 2026.",
                            },
                            {
                                href: "/services/penetration-testing",
                                title: "Pentest Service",
                                desc: "Our full pentest service overview with engagement structure.",
                            },
                            {
                                href: "/blog/best-penetration-testing-companies-georgia-2026",
                                title: "Best Georgia Pentest Companies",
                                desc: "Local shop evaluation criteria for Southeast-based engagements.",
                            },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold text-sm">
                                        {s.title}
                                    </h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    {s.desc}
                                </p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
