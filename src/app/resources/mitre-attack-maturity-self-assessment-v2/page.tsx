import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { ShieldCheck, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "mitre-attack-maturity-self-assessment-v2";
const TITLE = "MITRE ATT&CK Maturity Self-Assessment v2 (2026)";
const PDF_FILENAME = "mitre-attack-maturity-self-assessment-v2.pdf";

export const metadata: Metadata = {
    title: "MITRE ATT&CK Maturity Self-Assessment v2 | QUANT LAB USA",
    description:
        "Expanded 40-question MITRE ATT&CK self-assessment across all 14 Enterprise tactics with tier scoring, board-ready summary, 30-60-90 remediation plan. Free.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "MITRE ATT&CK Maturity Self-Assessment v2 2026 (Free PDF) | QUANT LAB USA",
        description:
            "Expanded 40-question MITRE ATT&CK self-assessment for 2026 with tier scoring, board summary, and 30-60-90 remediation plan.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "MITRE ATT&CK Maturity Self-Assessment v2 2026 (Free PDF) | QUANT LAB USA",
        description:
            "40-question MITRE ATT&CK self-assessment with tier scoring and a 30-60-90 remediation plan.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "Downloadable expanded 2026 edition of the MITRE ATT&CK Maturity Self-Assessment — a 40-question instrument covering all 14 Enterprise tactics with a four-tier scoring rubric and a board-and-auditor-ready summary template.",
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
            name: "How is v2 different from the original MITRE ATT&CK worksheet?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "v2 has 40 self-assessment questions instead of the original 24, covers identity-tier and cloud-tier sub-techniques surfaced in the 2025 and 2026 ATT&CK matrix updates, and adds an explicit 30-60-90 remediation plan template. The four-tier scoring (Reactive / Developing / Defended / Proactive) is unchanged so you can compare year-over-year if you completed v1 in a prior cycle.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need to be a security expert to complete it?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Each question is written in plain-English yes/no/partial form and references the specific ATT&CK technique it maps to so you can read upstream if you need more context. A solo IT manager or vCISO can complete the full 40-question instrument in about 2 hours. The scoring rubric automatically rolls answers up to a tier label.",
            },
        },
        {
            "@type": "Question",
            name: "Can I use this for a cyber insurance application or customer questionnaire?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The board-and-auditor summary template in Section 8 maps directly to questions you will see on most cyber insurance applications and SOC 2 readiness reviews. We have had clients paste the summary into a Vanta or Drata response field unchanged.",
            },
        },
        {
            "@type": "Question",
            name: "Does it cover cloud and identity threats?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Sections 4 and 5 cover identity-tier sub-techniques (token theft, MFA bypass, OAuth abuse) and cloud-tier sub-techniques (cloud account compromise, container escape, cloud storage exfiltration) that surfaced in the 2025 and 2026 ATT&CK Enterprise matrix updates.",
            },
        },
        {
            "@type": "Question",
            name: "What happens after I download?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You get the PDF immediately and one short follow-up email. If you would like a remediation working session on your top three gap categories, or want our team to run an external validation pass against your scored assessment, book a 20-minute scoping call.",
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
        { "@type": "ListItem", position: 3, name: "MITRE ATT&CK Maturity Self-Assessment v2", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

export default function MitreV2Page() {
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
                        <li className="text-gray-300">MITRE ATT&amp;CK Maturity Self-Assessment v2</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                                <ShieldCheck className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-3">
                                40-question instrument · PDF + scoring sheet
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Score your defenses against the 2026 MITRE ATT&amp;CK matrix in two hours, not two weeks.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                The expanded 2026 edition of our MITRE ATT&amp;CK maturity instrument. 40 questions
                                across all 14 Enterprise tactics, with identity-tier and cloud-tier sub-techniques
                                from the 2025 and 2026 matrix updates, four-tier scoring, and a board-ready summary
                                template you can paste into a cyber insurance application unchanged.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-400" /><span>40 questions, 14 tactics</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>2-hour self-assessment</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For IT leads &amp; vCISOs</span></div>
                            </div>
                        </AnimatedSection>
                    </div>
                    <div className="lg:col-span-2">
                        <AnimatedSection>
                            <ResourceLeadForm
                                slug={SLUG}
                                title={TITLE}
                                pdfFilename={PDF_FILENAME}
                                drip="D1"
                                successHeadline="The MITRE ATT&CK Self-Assessment v2 is yours."
                                relatedServiceHref="/services/mitre-attack-assessment"
                                relatedServiceLabel="MITRE ATT&CK assessment services"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Why we rebuilt the worksheet for 2026
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                The original{" "}
                                <Link href="/resources/mitre-attack-worksheet" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    MITRE ATT&amp;CK Maturity Worksheet
                                </Link>{" "}
                                was built around the 2023 Enterprise matrix and has been completed by hundreds of
                                small and mid-market IT teams. The framework holds up — but the matrix has moved.
                                The 2025 update added 14 new sub-techniques in the identity tactic alone, and the
                                2026 update materially expanded the cloud and container coverage that most SMBs
                                were under-mapping. v2 is the rebuild for those updates, plus a couple of changes
                                we wanted to make based on field feedback from teams who completed v1.
                            </p>
                            <p>
                                The biggest substantive change is in identity coverage. Token theft, MFA bypass,
                                OAuth abuse, and refresh-token chaining are now standard attacker workflow for the
                                ransomware groups that target the 25-to-500-employee range, and v1 was light on the
                                detection coverage for that class of activity. v2 adds an explicit identity scoring
                                lane that runs alongside the endpoint and network lanes from the original. The
                                framework still rolls up to the four-tier label (Reactive, Developing, Defended,
                                Proactive) so year-over-year comparison stays meaningful.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Inside the 40-question instrument
                        </h2>
                        <ul className="space-y-3">
                            {[
                                "Section 1 — Reconnaissance and resource development. 4 questions covering external attack surface monitoring, leaked credential detection, and the early-warning signals most teams under-instrument.",
                                "Section 2 — Initial access. 5 questions covering phishing, valid accounts, exploit-of-public-application, and the supply chain compromise surface.",
                                "Section 3 — Execution. 3 questions covering command-line and scripting detection, container execution, and the cloud workload execution patterns from the 2026 matrix.",
                                "Section 4 — Identity and credential access. 6 questions covering token theft, MFA bypass, OAuth abuse, password spraying, and the identity-tier expansion from the 2025 matrix.",
                                "Section 5 — Cloud and container. 5 questions covering cloud account compromise, container escape, cloud storage exfiltration, and the cloud-tier sub-techniques from the 2026 matrix.",
                                "Section 6 — Defense evasion and persistence. 5 questions covering process injection, scheduled task abuse, registry persistence, and the living-off-the-land patterns common in the ransomware actor playbook.",
                                "Section 7 — Discovery, lateral movement, and collection. 6 questions covering network share enumeration, remote service abuse, account discovery, and the data staging patterns that precede most exfiltration events.",
                                "Section 8 — Exfiltration, impact, and the board-ready summary template. 6 questions plus a one-paragraph summary template you can paste into a customer security questionnaire or cyber insurance application unchanged.",
                                "Section 9 — Scoring rubric and 30-60-90 remediation plan template. Maps your scored results to the four tiers and produces a stack-ranked remediation plan for the next 90 days.",
                            ].map((item) => (
                                <li key={item} className="flex gap-3 text-gray-300">
                                    <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
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
                                The instrument is built for IT managers, heads of IT, solo security leads, and
                                fractional or virtual CISOs at companies in the 25-to-500-employee range. It is
                                especially useful when an auditor, a customer security questionnaire, or a cyber
                                insurance underwriter has asked where you sit on the MITRE ATT&amp;CK framework
                                and you do not have a documented answer.
                            </p>
                            <p>
                                It is also useful as a structured artifact for{" "}
                                <Link href="/services/penetration-testing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    penetration testing
                                </Link>{" "}
                                scoping conversations — the self-assessment helps you and the testing team agree on
                                which tactics deserve focused attack-side validation. Many of our{" "}
                                <Link href="/services/web-app-pentest" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    web application pentest
                                </Link>{" "}
                                and{" "}
                                <Link href="/services/network-pentest" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    network pentest
                                </Link>{" "}
                                engagements begin with a v2 review on the kickoff call.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            What you will learn
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                You will leave with a coverage percentage for each of the 14 ATT&amp;CK Enterprise
                                tactics, a four-tier maturity label, a stack-ranked list of the highest-impact
                                controls to close your largest gaps, and a one-paragraph board-and-auditor summary
                                you can paste into a customer security questionnaire response, a SOC 2 readiness
                                review, or a cyber insurance application. The summary template is deliberately
                                written to read as honest rather than aspirational — auditors and underwriters
                                catch aspirational summaries quickly and the failure mode is worse than the
                                disclosure.
                            </p>
                            <p>
                                On the operational side, you will have a 30-60-90 remediation plan template that
                                you can fill in with your top three gaps. The plan is structured so that the
                                30-day items are achievable with no budget, the 60-day items assume modest
                                tooling spend, and the 90-day items capture the budget-cycle conversation you
                                will need to have with finance to fix the structural gaps. We have seen this format
                                survive the transition between two IT directors at one company and still produce
                                action.
                            </p>
                            <p>
                                Pair this with our{" "}
                                <Link href="/resources/web-app-pentest-checklist" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    Web App Pentest Checklist
                                </Link>{" "}
                                if you are coordinating a paid pentest engagement alongside the self-assessment.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Every{" "}
                                <Link href="/services/mitre-attack-assessment" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    MITRE ATT&amp;CK assessment engagement
                                </Link>{" "}
                                starts with a v2 review on the kickoff call. The instrument gives both sides a
                                shared vocabulary so the engagement scope is honest about which tactics deserve
                                deep external validation and which the internal team is already covering well.
                                If the v2 review surfaces gaps in identity or cloud coverage, the{" "}
                                <Link href="/services/active-directory-pentest" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    Active Directory pentest
                                </Link>{" "}
                                or a focused cloud assessment is typically the right next step.
                            </p>
                            <p>
                                We also use v2 to scope{" "}
                                <Link href="/services/penetration-testing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    full penetration testing
                                </Link>{" "}
                                engagements that pair external attack-side validation with documented internal
                                self-assessment, which is what most cyber insurance underwriters and SOC 2 auditors
                                are actually looking for. Read{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    our pricing
                                </Link>{" "}
                                or{" "}
                                <Link href="/contact" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    book a call
                                </Link>{" "}
                                to scope. For a sense of how we operate, see{" "}
                                <Link href="/about" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    our about page
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
                                {
                                    q: "How is v2 different from the original MITRE ATT&CK worksheet?",
                                    a: "v2 has 40 questions instead of 24, covers identity-tier and cloud-tier sub-techniques from the 2025 and 2026 ATT&CK matrix updates, and adds an explicit 30-60-90 remediation plan template. The four-tier scoring is unchanged so year-over-year comparison still works.",
                                },
                                {
                                    q: "Do I need to be a security expert to complete it?",
                                    a: "No. Each question is plain-English yes/no/partial. A solo IT manager or vCISO can complete the full 40-question instrument in about 2 hours. The scoring rubric automatically rolls answers up to a tier label.",
                                },
                                {
                                    q: "Can I use this for a cyber insurance application or customer questionnaire?",
                                    a: "Yes. The board-and-auditor summary template in Section 8 maps directly to questions on most cyber insurance applications and SOC 2 readiness reviews.",
                                },
                                {
                                    q: "Does it cover cloud and identity threats?",
                                    a: "Yes. Sections 4 and 5 cover identity-tier sub-techniques (token theft, MFA bypass, OAuth abuse) and cloud-tier sub-techniques (cloud account compromise, container escape, cloud storage exfiltration) from the 2025 and 2026 matrix updates.",
                                },
                                {
                                    q: "What happens after I download?",
                                    a: "You get the PDF immediately and one short follow-up email. If you want a remediation working session or an external validation pass against your scored assessment, book a 20-minute scoping call.",
                                },
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
                            <Link href="/resources/mitre-attack-worksheet" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">MITRE ATT&amp;CK Worksheet (v1)</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The original 24-question worksheet — still useful for the 2023 matrix baseline.</p>
                            </Link>
                            <Link href="/resources/web-app-pentest-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Web App Pentest Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Pair v2 with a scoped pentest engagement for the externally-validated layer.</p>
                            </Link>
                            <Link href="/services/mitre-attack-assessment" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">MITRE ATT&amp;CK Assessment Service</p>
                                <p className="text-xs text-gray-400 leading-relaxed">When the self-assessment needs external validation and a formal report.</p>
                            </Link>
                            <Link href="/services/penetration-testing" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Penetration Testing</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Attack-side validation that pairs naturally with the self-assessment artifact.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Done with the self-assessment? Let us run external validation.
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                A completed self-assessment is the right artifact for an internal IT conversation.
                                For a cyber insurance application, a SOC 2 readiness review, or a customer security
                                questionnaire where attestation matters, an external validation pass is typically
                                worth the spend. See{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    our pricing
                                </Link>{" "}
                                or book a call.
                            </p>
                            <ConsultationCTA label="Book a 20-min call" source={`${SLUG}-resource`} service="MITRE ATT&CK Assessment" />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
