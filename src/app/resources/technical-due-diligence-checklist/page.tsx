import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { Search, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "technical-due-diligence-checklist";
const TITLE = "Technical Due Diligence Checklist for SMB Acquirers";
const PDF_FILENAME = "technical-due-diligence-checklist.pdf";

export const metadata: Metadata = {
    title: "Technical Due Diligence Checklist for SMB Acquirers (Free PDF) | QUANT LAB",
    description:
        "A 50-item TDD checklist plus interview script for acquirers and investors evaluating SMB tech-enabled businesses — code, security, infrastructure, and team risk.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "Technical Due Diligence Checklist for SMB Acquirers (Free PDF) | QUANT LAB",
        description:
            "50-item TDD checklist plus interview script for evaluating SMB tech-enabled businesses on code, security, infrastructure, and team risk.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Technical Due Diligence Checklist for SMB Acquirers (Free PDF) | QUANT LAB",
        description:
            "50-item TDD checklist plus interview script for SMB acquirers and investors.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "Downloadable 50-item technical due diligence checklist for acquirers and investors evaluating small-to-mid-market tech-enabled businesses, with interview scripts for the CTO and engineering lead and a risk-flag rubric.",
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
            name: "Who is this technical due diligence checklist for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Acquirers, search funds, private equity associates, family offices, and angel investors evaluating SMB acquisitions of tech-enabled businesses in the $1M-to-$50M enterprise value range. Also useful for non-technical founders preparing for a TDD review on the sell side, so they can self-audit before a real acquirer walks through the same questions.",
            },
        },
        {
            "@type": "Question",
            name: "Is this a substitute for a full TDD engagement?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. A full TDD engagement is typically a 2-to-4-week scoped review with a senior engineer reading the codebase, interviewing the engineering team, and producing a written risk report with remediation cost estimates. The checklist is the artifact you walk through on the first 60-minute screening call, before a paid TDD is commissioned. It helps you decide whether a deeper engagement is warranted.",
            },
        },
        {
            "@type": "Question",
            name: "Does it cover security and compliance specifically?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Sections 4 and 5 cover security posture (vulnerability surface, secrets management, authentication and authorization patterns, incident history) and compliance regimes (SOC 2, HIPAA, PCI, GDPR) that may apply to the target. If the target has an incident history or compliance exposure, the checklist flags the questions you must ask before signing an LOI.",
            },
        },
        {
            "@type": "Question",
            name: "What if I am the seller, not the buyer?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The checklist works in both directions. As a seller, walking through the 50 items before a buyer does lets you fix or document the most common risk flags before they show up in a buyer's report. The interview script in Section 9 is also a useful template for the questions a prepared seller answers proactively.",
            },
        },
        {
            "@type": "Question",
            name: "What happens after I download?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You get the PDF immediately and one short follow-up email. If you want a paid TDD review on a specific target, or want to walk through the checklist findings with our team, book a 20-minute scoping call. We have run TDD engagements at sizes from $2M to $40M EV.",
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
        { "@type": "ListItem", position: 3, name: "Technical Due Diligence Checklist", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

export default function TddPage() {
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
                        <li className="text-gray-300">Technical Due Diligence Checklist</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                                <Search className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-3">
                                50-item checklist · PDF + interview script
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Run technical due diligence on a small acquisition the right way, in one focused week.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                A 50-item TDD checklist plus interview script for acquirers, search funds, and
                                investors evaluating SMB tech-enabled businesses. Surface code, security,
                                infrastructure, and team risk on a structured rubric — before you sign the LOI
                                and before you commission a full paid TDD.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-400" /><span>50 items, 9 sections</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>60-minute screening</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For SMB acquirers</span></div>
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
                                successHeadline="The Technical Due Diligence Checklist is yours."
                                relatedServiceHref="/services/custom-business-software"
                                relatedServiceLabel="custom business software development"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Most SMB acquisitions skip real technical due diligence — until they should not have
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                The SMB acquisition market does substantially less technical due diligence than it
                                should. A typical $5M-EV tech-enabled SMB transaction will see meticulous QofE work
                                from the financial side, careful customer-concentration analysis from the commercial
                                side, and then a 30-minute Zoom call with the founder-CTO that passes for technical
                                due diligence. The acquirer takes ownership of a codebase, an infrastructure
                                footprint, and a team — and finds out about the 12-year-old monolith, the four
                                production database instances on the founder&apos;s personal AWS account, the
                                pending GitHub security alerts, or the contractor-managed credentials only after
                                close.
                            </p>
                            <p>
                                This checklist is built to fix that. It is what we hand to acquirers, search funds,
                                and PE associates before they walk into a TDD screening call. The 50 items map to
                                the risk categories that matter — code quality, security, infrastructure, team
                                resilience, compliance exposure, and post-close transition risk — with structured
                                interview questions designed for a 60-minute call with the seller&apos;s engineering
                                lead. It is not a substitute for a paid TDD engagement; it is the artifact that
                                tells you whether a paid engagement is warranted on this specific target.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Inside the 50-item checklist
                        </h2>
                        <ul className="space-y-3">
                            {[
                                "Section 1 — Business and technology overview (6 items). Core product surface, stack, hosting footprint, the 5 most-used screens, and the 5 most-changed files in the last 6 months — a fast signal of where complexity actually lives.",
                                "Section 2 — Codebase health (8 items). Repository structure, test coverage, CI/CD posture, the 90-day commit cadence, contributor concentration (a single-contributor codebase is a flag), and the documented architectural decisions.",
                                "Section 3 — Infrastructure and operations (7 items). Hosting account ownership, IaC posture, secrets management, backup and disaster recovery, monitoring and alerting, on-call structure, and the post-incident retrospective practice.",
                                "Section 4 — Security posture (8 items). Vulnerability surface, dependency hygiene, secrets exposure, authentication patterns, RBAC, audit logging, recent security incidents, and the SOC 2 or equivalent attestation status.",
                                "Section 5 — Compliance and data (6 items). The regulatory regimes the target operates under (HIPAA, PCI, GDPR, CCPA, GLBA), the customer-data inventory, the data-residency posture, the data-retention policy, and the audit history.",
                                "Section 6 — Team and key-person risk (6 items). Engineering headcount, contractor concentration, the bus-factor list (which engineers know critical systems that no one else does), the documented onboarding flow, and the retention plan post-close.",
                                "Section 7 — Vendor and third-party risk (5 items). Critical SaaS dependencies, the contractor and supplier list, the vendor data-processing agreements, and the third-party SLAs that affect product reliability.",
                                "Section 8 — Customer and integration risk (4 items). Customer-facing integrations, the top-customer dependency on custom code, the open-feature-request queue, and the customer-side SLAs the platform must hold.",
                                "Section 9 — Interview script and risk-flag rubric. A 60-minute interview script for the seller&apos;s engineering lead, a risk-flag rubric mapping checklist responses to red/yellow/green status, and a one-page summary template you can attach to your IC memo.",
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
                                The checklist is built for five buyer profiles. First, search fund principals
                                running a self-funded or traditional search who are about to enter LOI on their
                                first tech-enabled SMB acquisition. Second, PE associates and VPs at lower-middle-
                                market firms evaluating add-on acquisitions to a tech-enabled platform. Third,
                                family offices and HNW individuals making direct SMB acquisitions in the $2M-to-$30M
                                EV range. Fourth, angel investors and small institutional investors evaluating
                                early-stage tech-enabled businesses where the engineering posture materially
                                affects the investment thesis. Fifth, strategic acquirers at companies in the
                                10-to-500-employee range making a competitive or capability-driven acquisition.
                            </p>
                            <p>
                                The checklist also works in reverse: if you are a founder preparing your business
                                for sale, walking through the 50 items yourself before a buyer does is the cheapest
                                way to find out where your business has TDD risk — and to fix or document it before
                                it shows up in someone else&apos;s report.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            What you will learn
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                You will leave with a structured way to evaluate any tech-enabled SMB target in
                                under a week, a 60-minute interview script you can run with the seller&apos;s
                                engineering lead, and a one-page IC-memo-ready summary template. You will also
                                have the vocabulary to distinguish the risk flags that should kill a deal from
                                the ones that are normal at this scale and can be addressed post-close.
                            </p>
                            <p>
                                On the diligence calendar, you will have a defensible structure for the first week
                                of technical evaluation. Day 1 and 2 are the checklist read on materials in the data
                                room. Day 3 is the 60-minute interview with the seller&apos;s engineering lead. Day
                                4 is the synthesis and risk-flag rollup. Day 5 is the decision: proceed to paid TDD,
                                proceed to LOI without paid TDD, or pass. This calendar fits inside the typical SMB
                                acquisition timeline without forcing the deal team to extend exclusivity.
                            </p>
                            <p>
                                On the risk side, you will know which findings warrant a price adjustment, which
                                warrant a holdback or indemnification carve-out, and which are simply post-close
                                remediation work that fits into the first 90 days. The risk-flag rubric in Section
                                9 maps each of the 50 items to a recommended action so the diligence read is
                                productive even when the seller-side engineering team is small.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                We run paid TDD engagements for acquirers and search funds throughout the year, and
                                this checklist is the lightweight version of the artifact set we produce on a full
                                engagement. After close, our{" "}
                                <Link href="/services/custom-business-software" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom business software
                                </Link>{" "}
                                and{" "}
                                <Link href="/services/devops-engineering" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    DevOps engineering
                                </Link>{" "}
                                practices are typically the ones executing the 30-60-90 remediation plan that
                                follows. If your target has a security or compliance exposure that surfaces in the
                                checklist, our{" "}
                                <Link href="/services/penetration-testing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    penetration testing
                                </Link>{" "}
                                and{" "}
                                <Link href="/services/mitre-attack-assessment" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    MITRE ATT&amp;CK assessment
                                </Link>{" "}
                                offerings are the typical next steps.
                            </p>
                            <p>
                                For the broader engineering-quality framework, pair this with the{" "}
                                <Link href="/resources/mvp-to-prod-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    MVP to Production Playbook
                                </Link>{" "}
                                — which is the post-close standard most targets need to be brought up to. For
                                pricing on a paid TDD engagement,{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    see our pricing page
                                </Link>{" "}
                                or{" "}
                                <Link href="/contact" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    book a call
                                </Link>
                                . Recent TDD engagements and post-close remediation projects are listed on{" "}
                                <Link href="/work" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    our work page
                                </Link>
                                , and you can learn more about how we engage on{" "}
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
                                    q: "Who is this technical due diligence checklist for?",
                                    a: "Acquirers, search funds, PE associates, family offices, and angel investors evaluating SMB acquisitions of tech-enabled businesses in the $1M-to-$50M EV range. Also useful for non-technical founders on the sell side.",
                                },
                                {
                                    q: "Is this a substitute for a full TDD engagement?",
                                    a: "No. A full TDD is typically a 2-to-4-week scoped review with a senior engineer reading the codebase and producing a written risk report. The checklist is the artifact you walk through on the 60-minute screening call before commissioning a paid TDD.",
                                },
                                {
                                    q: "Does it cover security and compliance specifically?",
                                    a: "Yes. Sections 4 and 5 cover security posture and compliance regimes (SOC 2, HIPAA, PCI, GDPR) that may apply to the target. The checklist flags questions you must ask before signing an LOI when these factors are in play.",
                                },
                                {
                                    q: "What if I am the seller, not the buyer?",
                                    a: "The checklist works in both directions. As a seller, walking through the 50 items before a buyer does lets you fix or document common risk flags before they show up in someone else's report.",
                                },
                                {
                                    q: "What happens after I download?",
                                    a: "You get the PDF immediately and one short follow-up email. If you want a paid TDD review on a specific target, book a 20-minute scoping call. We have run TDD engagements at sizes from $2M to $40M EV.",
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
                            <Link href="/resources/mvp-to-prod-playbook" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">MVP to Production Playbook</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The post-close standard most targets need to be brought up to.</p>
                            </Link>
                            <Link href="/resources/mitre-attack-maturity-self-assessment-v2" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">MITRE ATT&amp;CK Self-Assessment v2</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The security maturity artifact that pairs with the TDD security section.</p>
                            </Link>
                            <Link href="/resources/web-app-pentest-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Web App Pentest Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">When the TDD security finding warrants an external pentest before close.</p>
                            </Link>
                            <Link href="/services/penetration-testing" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Penetration Testing</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Attack-side validation for high-stakes acquisitions.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                In LOI on a target? Get a paid TDD that fits the deal timeline.
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                If the checklist surfaces flags worth a deeper read, our paid TDD engagement runs
                                2 to 4 weeks and produces a written report with risk findings, remediation cost
                                estimates, and a 30-60-90 post-close plan. See{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    our pricing
                                </Link>{" "}
                                or book a call.
                            </p>
                            <ConsultationCTA label="Book a 20-min call" source={`${SLUG}-resource`} service="Technical Due Diligence" />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
