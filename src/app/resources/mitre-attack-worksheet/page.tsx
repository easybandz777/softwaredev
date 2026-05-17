import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { Target, Check, ArrowRight, FileText, Clock, ShieldCheck } from "lucide-react";

const SLUG = "mitre-attack-worksheet";
const TITLE = "MITRE ATT&CK Maturity Worksheet";
const PDF_FILENAME = "mitre-attack-worksheet.pdf";

export const metadata: Metadata = {
    title: "MITRE ATT&CK Maturity Worksheet for SMBs | QUANT LAB USA",
    description:
        "Self-assessment worksheet aligning your org to the 14 MITRE ATT&CK Enterprise tactics — with scoring, quick wins, and a board-ready maturity summary. Free.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "MITRE ATT&CK Maturity Worksheet for SMBs (Free PDF) | QUANT LAB USA",
        description:
            "Self-assessment worksheet aligning your org to the 14 ATT&CK tactics with scoring, quick wins, and a board-ready summary.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "MITRE ATT&CK Maturity Worksheet for SMBs (Free PDF) | QUANT LAB USA",
        description:
            "Self-assessment across the 14 ATT&CK tactics. Scoring, quick wins, board-ready summary.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "Downloadable self-assessment worksheet aligning organizational defenses to the 14 MITRE ATT&CK Enterprise tactics, with scoring rubric, quick-win remediations, and a board-and-auditor-ready maturity summary.",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    publisher: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Who is the MITRE ATT&CK Maturity Worksheet for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "IT managers, heads of IT, solo security leads, vCISOs, and small-to-mid-market security teams at companies with 25 to 500 employees. It is especially useful when an auditor, customer security questionnaire, or cyber-insurance underwriter has asked where your organization sits on the MITRE ATT&CK framework and you do not have a documented answer.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need to be a security expert to use this worksheet?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Each of the 14 ATT&CK tactics is broken into three-to-five yes/no questions written for a generalist IT lead. A solo IT manager can complete the entire worksheet in about 90 minutes. The scoring rubric automatically rolls up your answers to a coverage percentage and a four-tier maturity label — Reactive, Developing, Defended, or Proactive.",
            },
        },
        {
            "@type": "Question",
            name: "What does the worksheet actually output?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A coverage percentage for each of the 14 ATT&CK tactics, an overall maturity tier, a stack-ranked list of the highest-impact controls to close your largest gaps, and a one-paragraph board-and-auditor summary you can paste directly into a customer security questionnaire response or board report.",
            },
        },
        {
            "@type": "Question",
            name: "Is this aligned with the current MITRE ATT&CK framework?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The worksheet aligns to the 14 Enterprise tactics in the current MITRE ATT&CK matrix: Reconnaissance, Resource Development, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command and Control, Exfiltration, and Impact. We update the worksheet whenever MITRE publishes a material change.",
            },
        },
        {
            "@type": "Question",
            name: "What if my score comes back low?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Section 5 of the worksheet stack-ranks the top five highest-leverage controls SMBs can deploy in the current quarter to move their score up two tiers. These are anchored on the controls that produce the largest coverage gain per dollar of spend. Section 6 covers when it is worth bringing in a pentest or red-team to validate your defenses rather than continuing to invest in controls blindly.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://quantlabusa.dev/resources" },
        { "@type": "ListItem", position: 3, name: "MITRE ATT&CK Maturity Worksheet", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

export default function MitreAttackWorksheetPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="container mx-auto px-6 max-w-6xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/resources" className="hover:text-sky-400 transition-colors">Resources</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">MITRE ATT&amp;CK Maturity Worksheet</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 mb-6">
                                <Target className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-amber-300 font-semibold mb-3">
                                Self-assessment worksheet · 14 tactics · 90-minute review
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Score your defenses across all 14 MITRE ATT&amp;CK tactics without hiring a SOC.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                A self-assessment worksheet for IT leads, vCISOs, and security generalists
                                who need to give a real answer the next time an auditor, customer security
                                questionnaire, or cyber-insurance underwriter asks where your organization
                                sits on the MITRE ATT&amp;CK framework — with scoring, quick wins, and a
                                board-and-auditor-ready summary template.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-amber-400" /><span>14 tactics, 60+ items</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>90-minute working session</span></div>
                                <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-sky-400" /><span>For SMB IT &amp; security leads</span></div>
                            </div>
                        </AnimatedSection>
                    </div>
                    <div className="lg:col-span-2">
                        <AnimatedSection>
                            <ResourceLeadForm
                                slug={SLUG}
                                title={TITLE}
                                pdfFilename={PDF_FILENAME}
                                drip="D5"
                                successHeadline="The MITRE ATT&CK Maturity Worksheet is yours."
                                relatedServiceHref="/services/mitre-attack-assessment"
                                relatedServiceLabel="MITRE ATT&CK assessment"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Why ATT&amp;CK is now a question SMBs cannot duck
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Five years ago, MITRE ATT&amp;CK was an esoteric framework used by red teams
                                and threat-intel analysts at large enterprises. Today, it is the lingua
                                franca of cyber insurance underwriters, SOC 2 auditors, and the security
                                questionnaires that enterprise customers send to their SMB suppliers. If a
                                customer asks where you sit on ATT&amp;CK and your honest answer is
                                &quot;we have not looked at that,&quot; you have already lost a percentage of
                                the deal. The worksheet is the smallest amount of work that turns that
                                answer into a defensible one.
                            </p>
                            <p>
                                It is the same self-assessment our cybersecurity practice runs through with
                                a prospect before scoping a{" "}
                                <Link href="/services/mitre-attack-assessment" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    full MITRE ATT&amp;CK assessment
                                </Link>{" "}
                                or a{" "}
                                <Link href="/services/penetration-testing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    pentest engagement
                                </Link>
                                . The point of the worksheet is to do this calibration in 90 minutes
                                instead of a $30K-plus engagement — and to surface the controls worth
                                investing in before you decide whether a full engagement is actually
                                worth it.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Inside the worksheet
                        </h2>
                        <ul className="space-y-3">
                            {[
                                "Section 1 — Why ATT&CK matters for SMBs now. The three new pressure points (cyber insurance underwriters, SOC 2 auditors, enterprise procurement questionnaires) that have made ATT&CK posture a non-optional conversation for sub-500-employee companies.",
                                "Section 2 — Plain-English quick reference for all 14 ATT&CK Enterprise tactics. Reconnaissance, Resource Development, Initial Access, Execution, Persistence, Privilege Escalation, Defense Evasion, Credential Access, Discovery, Lateral Movement, Collection, Command and Control, Exfiltration, and Impact — each in two to three sentences.",
                                "Section 3 — The self-assessment proper. Three to five yes/no questions per tactic, written so a non-security generalist can answer them honestly. Sample question for Initial Access: 'Do you have MFA enforced on all external-facing services?'",
                                "Section 4 — The scoring sheet. Roll up each tactic to its coverage percentage and your organization to one of four maturity tiers: Reactive, Developing, Defended, or Proactive.",
                                "Section 5 — Top five quick wins for SMBs. The five highest-impact, lowest-cost controls that move most SMBs up two maturity tiers in a single quarter — typically MFA enforcement, EDR rollout, email DMARC, lateral-movement detection via Sysmon, and offsite immutable backups.",
                                "Section 6 — When to bring in a pro. A simple decision rule: if your coverage in Credential Access, Lateral Movement, or Exfiltration is below 40%, get a pentest. If you are above 60% overall, consider a red-team or purple-team to validate. If you are below 30%, prioritize controls over testing.",
                                "Section 7 — Sharing your score with stakeholders. The one-paragraph summary template for board reports, the audit-evidence package for SOC 2, and the customer-questionnaire response phrasing that translates 'maturity tier' into procurement-friendly language.",
                            ].map((item) => (
                                <li key={item} className="flex gap-3 text-gray-300">
                                    <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Who this is for
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                The worksheet is built for three roles. First, IT managers and heads of IT
                                at 25-to-500-employee companies with no dedicated SOC and possibly an MSSP
                                relationship. They are the ones who get the customer security questionnaire
                                forwarded to them and need a defensible response by Friday. Second, solo
                                security leads and vCISOs who run multiple companies and need a consistent
                                framework for documenting maturity across clients. Third, founders and
                                COOs of regulated startups (fintech, healthtech, SaaS handling PII) who
                                need to give their first SOC 2 auditor or cyber-insurance underwriter a
                                real answer.
                            </p>
                            <p>
                                If you have a full security team and an established threat-intel function,
                                this worksheet is too basic — we run a more involved internal assessment in
                                our{" "}
                                <Link href="/services/mitre-attack-assessment" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    MITRE ATT&amp;CK assessment service
                                </Link>
                                . If you are pre-revenue with no customer security pressure yet, the
                                worksheet is premature — focus on the controls covered in Section 5 (MFA,
                                EDR, DMARC, backups) rather than completing the full scoring.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            What you will learn
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                You will learn what each of the 14 ATT&amp;CK Enterprise tactics actually
                                means in plain English, and which of them your organization has any
                                visibility into. You will learn the five highest-leverage controls
                                for SMBs — and why the standard recommendation order (firewall first, EDR
                                later) is actually backwards for most modern threat profiles. You will
                                learn the maturity-tier framework your cyber-insurance underwriter and
                                SOC 2 auditor are now using internally, and how to communicate your
                                position in their language.
                            </p>
                            <p>
                                You will leave with three concrete artifacts. A scored worksheet you can
                                drop into a board deck. A one-paragraph maturity summary you can paste
                                into a customer security questionnaire. A stack-ranked list of the next
                                three controls worth investing in this quarter. If you are above 60%
                                overall coverage, you will also know whether it is time to validate your
                                defenses with a{" "}
                                <Link href="/services/penetration-testing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    pentest
                                </Link>{" "}
                                or whether continuing to invest in controls is the higher-leverage move.
                            </p>
                            <p>
                                You will also learn how ATT&amp;CK posture connects to other security
                                programs you may be running — SOC 2, ISO 27001, HIPAA, PCI DSS, NIST CSF.
                                Section 7 includes a mapping cheat sheet that shows how each ATT&amp;CK
                                tactic correlates with the controls in those frameworks, which makes the
                                worksheet useful as a cross-framework gap analysis rather than just a
                                standalone exercise.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                The worksheet is the qualifying conversation we run with prospects before
                                scoping a{" "}
                                <Link href="/services/mitre-attack-assessment" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    full MITRE ATT&amp;CK assessment
                                </Link>{" "}
                                or a multi-vector{" "}
                                <Link href="/services/penetration-testing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    penetration testing engagement
                                </Link>
                                . When the worksheet output shows below-40% coverage in any
                                Credential-Access, Lateral-Movement, or Exfiltration row, the next
                                conversation is usually about scoping a{" "}
                                <Link href="/services/web-app-pentest" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    web application pentest
                                </Link>
                                , a{" "}
                                <Link href="/services/network-pentest" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    network pentest
                                </Link>
                                , or an{" "}
                                <Link href="/services/active-directory-pentest" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    Active Directory pentest
                                </Link>{" "}
                                to validate the gap and produce a remediation roadmap.
                            </p>
                            <p>
                                The worksheet pairs well with the{" "}
                                <Link href="/resources/web-app-pentest-checklist" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    Web App Pentest Checklist
                                </Link>{" "}
                                if you are scoping the testing side of your security program. For pricing
                                and engagement model, see{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    the pricing page
                                </Link>{" "}
                                or read about{" "}
                                <Link href="/about" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    the QUANT LAB security practice
                                </Link>
                                . Recent cybersecurity engagements are summarized at{" "}
                                <Link href="/work" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    the work page
                                </Link>
                                .
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Frequently asked questions
                        </h2>
                        <div className="space-y-6">
                            {[
                                { q: "Who is the MITRE ATT&CK Maturity Worksheet for?", a: "IT managers, heads of IT, solo security leads, vCISOs, and small-to-mid-market security teams at companies with 25 to 500 employees. Especially useful when an auditor or customer security questionnaire has asked where you sit on ATT&CK." },
                                { q: "Do I need to be a security expert to use this worksheet?", a: "No. Each of the 14 ATT&CK tactics is broken into three-to-five yes/no questions written for a generalist IT lead. A solo IT manager can complete the entire worksheet in about 90 minutes." },
                                { q: "What does the worksheet actually output?", a: "A coverage percentage for each of the 14 ATT&CK tactics, an overall maturity tier (Reactive, Developing, Defended, or Proactive), a stack-ranked list of the highest-impact controls to close your largest gaps, and a one-paragraph board-and-auditor summary you can paste directly into a customer security questionnaire response or board report." },
                                { q: "Is this aligned with the current MITRE ATT&CK framework?", a: "Yes. The worksheet aligns to the 14 Enterprise tactics in the current MITRE ATT&CK matrix. We update the worksheet whenever MITRE publishes a material change." },
                                { q: "What if my score comes back low?", a: "Section 5 stack-ranks the top five highest-leverage controls SMBs can deploy in the current quarter to move their score up two tiers. Section 6 covers when it is worth bringing in a pentest or red-team to validate rather than continuing to invest in controls blindly." },
                            ].map((item) => (
                                <details key={item.q} className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 open:bg-[#0d1526]">
                                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-white">
                                        <span>{item.q}</span>
                                        <ArrowRight className="w-4 h-4 text-sky-400 transition-transform group-open:rotate-90" />
                                    </summary>
                                    <p className="text-gray-400 mt-3 leading-relaxed text-sm">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Related resources &amp; reading
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/resources/web-app-pentest-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Web App Pentest Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">For when your worksheet score is ready to be validated.</p>
                            </Link>
                            <Link href="/services/mitre-attack-assessment" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">MITRE ATT&amp;CK Assessment</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The full version of this self-assessment, scoped to your org.</p>
                            </Link>
                            <Link href="/services/penetration-testing" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Penetration Testing</p>
                                <p className="text-xs text-gray-400 leading-relaxed">When you are ready to validate your gaps with a real test.</p>
                            </Link>
                            <Link href="/services/network-pentest" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Network Pentest</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Network-layer testing to validate the Lateral Movement tactic.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-orange-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Want a second set of eyes on your worksheet score?
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                Reply to the confirmation email with your scored worksheet and we will run
                                a 30-minute review pass on it — free. Or book a 20-minute scoping call to
                                discuss whether a pentest, an ATT&amp;CK assessment, or continued control
                                investment is the right next step. See{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    pricing
                                </Link>{" "}
                                for engagement ranges.
                            </p>
                            <ConsultationCTA label="Book a 20-min security call" source={`${SLUG}-resource`} service="MITRE ATT&CK Assessment" />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
