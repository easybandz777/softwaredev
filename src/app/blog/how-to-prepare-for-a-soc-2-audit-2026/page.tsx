import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";
import { EditorialFooter } from "@/components/EditorialFooter";
import { Sources } from "@/components/Sources";
import { ArrowRight, Check, ClipboardCheck } from "lucide-react";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, faqSchema } from "@/lib/schemas";
import { getAuthor, authorUrl } from "@/lib/authors";

const SLUG = "how-to-prepare-for-a-soc-2-audit-2026";
const PUBLISHED = "2026-06-03";
const TITLE = "How to Prepare for a SOC 2 Audit (2026)";
const author = getAuthor("bill-beltz");

export const metadata: Metadata = articleMetadata({
    title: "How to Prepare for a SOC 2 Audit: A 2026 Readiness Guide",
    description:
        "A practical 2026 SOC 2 audit readiness guide: the five Trust Services Criteria, the controls and evidence auditors ask for, where the pentest fits, and a realistic timeline.",
    slug: `blog/${SLUG}`,
    image: "/og-pentest.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: [author.name],
    keywords: [
        "how to prepare for a soc 2 audit",
        "soc 2 audit readiness",
        "soc 2 evidence collection",
        "soc 2 controls checklist 2026",
    ],
});

const faqs = [
    {
        q: "How long does it take to prepare for a SOC 2 audit?",
        a: "Most startups need three to six months of readiness work before a Type I audit if they are starting from scratch. A Type II then adds the observation period itself — typically three to twelve months — during which controls must operate continuously. If you already run reasonable engineering hygiene, a compliance platform can compress readiness to six to ten weeks, but the evidence has to be real, not retrofitted.",
    },
    {
        q: "What are the five Trust Services Criteria in SOC 2?",
        a: "Security (the only mandatory category, also called the Common Criteria), Availability, Processing Integrity, Confidentiality, and Privacy. Every SOC 2 report covers Security; the other four are optional and you include them only if they matter to your customers. Most early SaaS scopes Security plus, often, Availability and Confidentiality. Do not add categories you cannot produce evidence for.",
    },
    {
        q: "What is the difference between SOC 2 Type I and Type II?",
        a: "Type I attests that your controls are suitably designed at a single point in time. Type II attests that those controls operated effectively over a period — the observation window. Type I is faster and cheaper and proves intent; Type II is what enterprise buyers actually want because it proves the controls run continuously. Many companies do Type I first, then roll straight into a Type II window.",
    },
    {
        q: "Is a penetration test required for SOC 2 audit readiness?",
        a: "SOC 2 does not name a pentest, but auditors interpret the monitoring and risk-assessment criteria (CC4.1, CC7.1) as requiring annual penetration testing with a documented remediation loop. The pentest is one control among many — it is not the audit. Treat it as the evidence that satisfies the technical-testing expectation, scheduled so findings can be remediated and retested within the audit window.",
    },
    {
        q: "What evidence do SOC 2 auditors actually ask for?",
        a: "Policies and their acknowledgment, access-review records, onboarding and offboarding tickets, change-management approvals, vulnerability-scan and penetration-test reports with remediation evidence, backup and recovery test results, vendor risk reviews, security-awareness training completion, and incident-response runbooks plus any incident records. Auditors sample: they pick a date range and ask you to show the control operated for specific instances.",
    },
    {
        q: "Do I need a compliance platform like Vanta or Drata for SOC 2?",
        a: "You do not technically need one, but for most startups a platform like Vanta, Drata, Secureframe, or Thoropass pays for itself by automating evidence collection from your cloud, identity provider, and code host. It will not write your controls or fix a missing pentest — it organizes the evidence you produce. The platform is the filing cabinet, not the work.",
    },
];

const sources = [
    {
        label: "Trust Services Criteria (TSP Section 100)",
        href: "https://www.aicpa-cima.com/resources/landing/system-and-organization-controls-soc-suite-of-services",
        publisher: "AICPA",
    },
    {
        label: "SOC 2 — System and Organization Controls Overview",
        href: "https://www.aicpa-cima.com/topic/audit-assurance/audit-and-assurance-greater-than-soc-2",
        publisher: "AICPA",
    },
    {
        label: "NIST SP 800-115 — Technical Guide to Information Security Testing",
        href: "https://csrc.nist.gov/pubs/sp/800/115/final",
        publisher: "NIST",
    },
];

export default function Soc2AuditPrepPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        articleSchema({
                            headline: "How to Prepare for a SOC 2 Audit: A 2026 Readiness Guide",
                            description:
                                "Practical SOC 2 audit readiness: the five Trust Services Criteria, controls, evidence, where the pentest fits, and a realistic timeline.",
                            datePublished: PUBLISHED,
                            slug: SLUG,
                            image: "https://quantlabusa.dev/og-pentest.png",
                            author: { name: author.name, url: authorUrl(author.slug) },
                            section: "Compliance",
                            keywords: [
                                "how to prepare for a soc 2 audit",
                                "soc 2 audit readiness",
                                "soc 2 evidence collection",
                            ],
                        }),
                    ),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <Breadcrumbs
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: TITLE },
                    ]}
                />

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <ClipboardCheck className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">
                        Compliance Readiness · 2026
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        How to Prepare for a SOC 2 Audit: A 2026 Readiness Guide
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        The pentest is one control. The audit is everything around it. This guide
                        covers the readiness side: the five Trust Services Criteria, the controls
                        and evidence an auditor will sample, where penetration testing slots in,
                        and a realistic timeline so the audit date does not arrive before your
                        evidence does.
                    </p>
                    <AuthorByline
                        author={author}
                        publishedDate={PUBLISHED}
                        readMinutes={12}
                        className="mb-8"
                    />
                    <ConsultationCTA
                        label="Scope a SOC 2 Pentest"
                        service="Penetration Testing"
                        source="blog-soc2-audit-prep"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Quick answer
                        </h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>
                                To prepare for a SOC 2 audit, define your scope and Trust Services
                                Criteria, write the policies, implement the controls (access
                                reviews, change management, monitoring, vendor risk), and collect
                                evidence that each control operates. Run a readiness assessment to
                                find gaps, schedule the penetration test early enough to remediate
                                findings, then engage a licensed CPA firm. Budget three to six
                                months for first-time readiness; the pentest is one control among
                                many, not the audit itself.
                            </strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            We already publish a focused guide on the testing piece —{" "}
                            <Link
                                href="/blog/soc2-pentest-prep-guide-2026"
                                className="text-sky-400 hover:underline"
                            >
                                SOC 2 pentest prep
                            </Link>{" "}
                            — so this post deliberately stays on the audit-readiness side: the
                            controls, the evidence, the auditor relationship, and the calendar.
                            If you only need to know how to scope the pentest, start there. If you
                            need to understand the whole audit you are walking into, keep reading.
                            For the one-paragraph definition, the{" "}
                            <Link
                                href="/glossary/what-is-soc-2"
                                className="text-sky-400 hover:underline"
                            >
                                SOC 2 glossary entry
                            </Link>{" "}
                            has it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Step 1 — Decide scope and Trust Services Criteria
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            SOC 2 is built on five Trust Services Criteria. Only the first is
                            mandatory; the rest are opt-in based on what you promise customers.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Security (Common Criteria).</strong>{" "}
                                Mandatory. The bulk of the audit. Covers access control, change
                                management, risk assessment, monitoring, and incident response.
                            </li>
                            <li>
                                <strong className="text-white">Availability.</strong> Uptime,
                                redundancy, backup, and disaster recovery. Add it if you make SLA
                                promises.
                            </li>
                            <li>
                                <strong className="text-white">Processing Integrity.</strong> Data
                                is processed completely and accurately. Relevant for payments,
                                billing, or data pipelines.
                            </li>
                            <li>
                                <strong className="text-white">Confidentiality.</strong> Data
                                designated confidential is protected. Common for B2B SaaS.
                            </li>
                            <li>
                                <strong className="text-white">Privacy.</strong> Personal
                                information is handled per your notice. Add only if you genuinely
                                process consumer PII.
                            </li>
                        </ul>
                        <p>
                            The single most expensive mistake here is adding categories you cannot
                            produce evidence for. Scope Security plus only what your customers
                            actually demand. Then define the{" "}
                            <strong className="text-white">system boundary</strong> — the
                            production services, data stores, and infrastructure in scope — because
                            your pentest scope and your evidence scope both flow from it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Step 2 — Build the controls and write the policies
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Controls are the things you do; policies are the documents that say you
                            do them. Auditors check that both exist and that reality matches the
                            paper. The control families that carry most of a SOC 2:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Access control.</strong> SSO, MFA,
                                least privilege, and quarterly access reviews with records.
                            </li>
                            <li>
                                <strong className="text-white">Change management.</strong> Pull
                                requests reviewed and approved, CI gates, and a clear path from
                                code to production.
                            </li>
                            <li>
                                <strong className="text-white">Risk assessment.</strong> A
                                documented annual risk assessment and a risk register.
                            </li>
                            <li>
                                <strong className="text-white">
                                    Monitoring and vulnerability management.
                                </strong>{" "}
                                Logging, alerting, vulnerability scanning, and the annual
                                penetration test (covered in Step 4).
                            </li>
                            <li>
                                <strong className="text-white">Vendor risk management.</strong>{" "}
                                Reviews of your subprocessors and critical vendors.
                            </li>
                            <li>
                                <strong className="text-white">Incident response.</strong> A
                                runbook, defined roles, and evidence you have tested it.
                            </li>
                            <li>
                                <strong className="text-white">HR and training.</strong> Background
                                checks where lawful, onboarding/offboarding, and security-awareness
                                training.
                            </li>
                        </ul>
                        <p>
                            The technical controls overlap heavily with good engineering. Our{" "}
                            <Link
                                href="/blog/cybersecurity-services-for-saas-startups-2026"
                                className="text-sky-400 hover:underline"
                            >
                                cybersecurity services for SaaS startups
                            </Link>{" "}
                            guide covers the security work a young company needs anyway, most of
                            which doubles as SOC 2 evidence.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Step 3 — Collect evidence the way auditors sample it
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Auditors do not grade your intentions. They sample. They pick a date
                            range and ask you to demonstrate that a control operated for specific
                            instances within it. Evidence that survives sampling looks like this:
                        </p>
                        <div className="overflow-x-auto mt-4">
                            <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                                <thead className="bg-[#0d1526] text-white">
                                    <tr>
                                        <th className="px-4 py-3 border-b border-white/10">
                                            Control
                                        </th>
                                        <th className="px-4 py-3 border-b border-white/10">
                                            Evidence the auditor wants
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5">
                                        <td className="px-4 py-3">Access review</td>
                                        <td className="px-4 py-3">
                                            Dated review record with reviewer, systems, and any
                                            access removed
                                        </td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="px-4 py-3">Change management</td>
                                        <td className="px-4 py-3">
                                            A sampled PR showing reviewer approval before merge to
                                            production
                                        </td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="px-4 py-3">Offboarding</td>
                                        <td className="px-4 py-3">
                                            Ticket showing access revoked within the policy window
                                            of a departure
                                        </td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="px-4 py-3">Vulnerability management</td>
                                        <td className="px-4 py-3">
                                            Scan + pentest reports with remediation tickets and
                                            retest evidence
                                        </td>
                                    </tr>
                                    <tr className="border-b border-white/5">
                                        <td className="px-4 py-3">Backups</td>
                                        <td className="px-4 py-3">
                                            A documented restore test, not just a backup
                                            configuration screenshot
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            For Type II this is the whole game: the control must operate{" "}
                            <em>throughout</em> the observation period, so a retroactive scramble
                            in the final week does not work. A compliance platform (Vanta, Drata,
                            Secureframe, Thoropass) automates much of the collection by connecting
                            to your cloud, identity provider, and code host — but it organizes
                            evidence you produce, it does not produce it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Step 4 — Where the penetration test fits
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            SOC 2 never says &quot;pentest,&quot; but auditors read the monitoring
                            and risk-assessment criteria (CC4.1 and CC7.1) as requiring annual
                            penetration testing with a closed remediation loop. The pentest is one
                            control — important, but not the audit. The mistake founders make is
                            treating it as a last-minute checkbox instead of an early input.
                        </p>
                        <p>
                            Schedule the test so there is time to remediate and retest{" "}
                            <em>before</em> a Type I date or{" "}
                            <em>within the first quarter</em> of a Type II observation period.
                            The auditor wants to see a finding-to-fix cycle, not a single snapshot.
                            Make sure the pentest scope matches the system boundary from Step 1 —
                            if your system description says &quot;all production services&quot; but
                            the pentest only covered the marketing site, that is a finding against
                            you.
                        </p>
                        <p>
                            We cover the scoping mechanics, cost ranges, and the fourteen common
                            mistakes in the dedicated{" "}
                            <Link
                                href="/blog/soc2-pentest-prep-guide-2026"
                                className="text-sky-400 hover:underline"
                            >
                                SOC 2 pentest prep guide
                            </Link>
                            . For the engagement itself, see the{" "}
                            <Link
                                href="/services/penetration-testing"
                                className="text-sky-400 hover:underline"
                            >
                                penetration testing service
                            </Link>{" "}
                            and the{" "}
                            <Link
                                href="/services/web-app-pentest"
                                className="text-sky-400 hover:underline"
                            >
                                web app pentest
                            </Link>{" "}
                            page. A report that maps findings to{" "}
                            <Link
                                href="/services/mitre-attack-assessment"
                                className="text-sky-400 hover:underline"
                            >
                                MITRE ATT&amp;CK
                            </Link>{" "}
                            signals methodology depth that auditors increasingly look for.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Mid-post: schedule the pentest at the right point
                    </h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">
                            Heading into a Type I or Type II? A 30-minute call gets you the
                            minimum viable pentest scope, the timing that fits your audit window,
                            and a report your auditor will accept as evidence.
                        </p>
                        <ConsultationCTA
                            label="Get SOC 2 Pentest Timing Help"
                            service="Penetration Testing"
                            source="blog-soc2-audit-prep-mid"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Step 5 — Readiness assessment, then the real audit
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Before the formal audit, run a{" "}
                            <strong className="text-white">readiness assessment</strong> — a gap
                            analysis against the criteria, done by your compliance platform, a
                            consultant, or the audit firm&apos;s advisory arm. It tells you which
                            controls are missing or under-evidenced while you still have time to
                            fix them. Going into the real audit without one is how companies burn
                            an audit cycle on findings they could have closed quietly.
                        </p>
                        <p>
                            The audit itself must be performed by a{" "}
                            <strong className="text-white">licensed CPA firm</strong> — that is a
                            non-negotiable requirement of SOC 2, which is an AICPA attestation. The
                            firm conducts fieldwork, samples your evidence, may interview control
                            owners, documents exceptions, and issues the report. For a Type II, the
                            report describes how controls operated across the period and lists any
                            exceptions with management responses.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        A realistic timeline
                    </h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Phase</th>
                                    <th className="px-4 py-3 border-b border-white/10">
                                        Typical duration
                                    </th>
                                    <th className="px-4 py-3 border-b border-white/10">
                                        What happens
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3">Scope + policy authoring</td>
                                    <td className="px-4 py-3">3 to 6 weeks</td>
                                    <td className="px-4 py-3">
                                        Pick TSC, define boundary, write policies
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3">Control implementation</td>
                                    <td className="px-4 py-3">4 to 12 weeks</td>
                                    <td className="px-4 py-3">
                                        Stand up access reviews, change mgmt, monitoring
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3">Penetration test + remediation</td>
                                    <td className="px-4 py-3">4 to 8 weeks</td>
                                    <td className="px-4 py-3">
                                        Test, fix criticals/highs, retest
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3">Readiness assessment</td>
                                    <td className="px-4 py-3">2 to 4 weeks</td>
                                    <td className="px-4 py-3">Gap analysis, close findings</td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3">Type I audit</td>
                                    <td className="px-4 py-3">2 to 4 weeks</td>
                                    <td className="px-4 py-3">
                                        Fieldwork, point-in-time attestation
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3">Type II observation period</td>
                                    <td className="px-4 py-3">3 to 12 months</td>
                                    <td className="px-4 py-3">
                                        Controls operate continuously; evidence accrues
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        These phases overlap in practice. The pentest can run alongside control
                        implementation; readiness happens while evidence accrues. Estimate the
                        testing line item with the{" "}
                        <Link
                            href="/calculators/pentest-cost"
                            className="text-sky-400 hover:underline"
                        >
                            pentest cost calculator
                        </Link>
                        .
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Frequently asked questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((item) => (
                            <div
                                key={item.q}
                                className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6"
                            >
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <Sources items={sources} />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Related reading and next steps
                    </h2>
                    <ul className="space-y-3">
                        {[
                            { href: "/blog/soc2-pentest-prep-guide-2026", label: "SOC 2 pentest prep guide (2026)" },
                            { href: "/services/penetration-testing", label: "Penetration Testing service overview" },
                            { href: "/services/web-app-pentest", label: "Web Application Pentest service" },
                            { href: "/services/mitre-attack-assessment", label: "MITRE ATT&CK Assessment" },
                            { href: "/blog/cybersecurity-services-for-saas-startups-2026", label: "Cybersecurity services for SaaS startups" },
                            { href: "/blog/penetration-test-cost-2026", label: "What does a pentest cost in 2026?" },
                            { href: "/glossary/what-is-soc-2", label: "What is SOC 2?" },
                            { href: "/glossary/what-is-mitre-attack", label: "What is MITRE ATT&CK?" },
                            { href: "/calculators/pentest-cost", label: "Pentest cost calculator" },
                            { href: "/contact", label: "Talk to Bill about your SOC 2 readiness" },
                        ].map((l) => (
                            <li key={l.href} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                <Link href={l.href} className="text-sky-400 hover:underline">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <EditorialFooter reviewedDate={PUBLISHED} />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            The audit is closer than the readiness work suggests.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free scoping call. We&apos;ll cover where the penetration test fits in
                            your SOC 2 timeline and the minimum viable scope to satisfy your
                            auditor.
                        </p>
                        <ConsultationCTA
                            label="Book the Scoping Call"
                            service="Penetration Testing"
                            source="blog-soc2-audit-prep-cta"
                        />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill directly at{" "}
                            <a href="tel:+17706521282" className="text-sky-400 hover:underline">
                                (770) 652-1282
                            </a>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug={SLUG}
                        topics={["compliance", "pentest", "saas"]}
                        pinned={[
                            "soc2-pentest-prep-guide-2026",
                            "cybersecurity-services-for-saas-startups-2026",
                            "pci-dss-compliance-saas-checklist",
                        ]}
                        heading="More compliance reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link
                            href="/blog"
                            className="hover:text-sky-400 inline-flex items-center gap-1"
                        >
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Updated June 3, 2026</span>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
