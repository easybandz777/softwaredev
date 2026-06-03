import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { ClipboardCheck, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "vendor-security-questionnaire-template";
const TITLE = "The Vendor Security Questionnaire Template";
const PDF_FILENAME = "vendor-security-questionnaire-template.pdf";

export const metadata: Metadata = {
    title: "Vendor Security Questionnaire Template (Free) | QUANT LAB USA",
    description:
        "A ready-to-send vendor security questionnaire: governance, data protection, application security, infrastructure, and incident response questions for any software supplier.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "Vendor Security Questionnaire Template (Free) | QUANT LAB USA",
        description:
            "A ready-to-send vendor security questionnaire covering governance, data protection, application security, infrastructure, and incident response.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Vendor Security Questionnaire Template (Free) | QUANT LAB USA",
        description:
            "The questions to send any software vendor before you trust them with your data.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "A ready-to-send vendor security questionnaire template covering security governance, data protection, application security, infrastructure, and incident response.",
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
            name: "When should I send a vendor security questionnaire?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Send it before you sign a contract with any vendor that will store, process, or access your customer data, source code, credentials, or production systems. The depth should scale with the risk: a marketing widget needs a lighter review than a vendor holding your customer database.",
            },
        },
        {
            "@type": "Question",
            name: "What if the vendor already has a SOC 2 report?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A current SOC 2 Type II report answers many of these questions, so ask for it first. Use the questionnaire to fill the gaps the report does not cover, to confirm the report's scope actually includes the product you are buying, and to capture commitments in writing.",
            },
        },
        {
            "@type": "Question",
            name: "How do I score the answers?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Treat vague, evasive, or 'we are working on it' answers to data-protection and incident-response questions as red flags. A trustworthy vendor answers specifically, points to documentation, and is comfortable putting breach-notification timelines into the contract.",
            },
        },
        {
            "@type": "Question",
            name: "Can I use this as a buyer and as a vendor?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Buyers send it to evaluate suppliers. Vendors use it to pre-write a security overview so they can answer customer security reviews quickly instead of scrambling on every deal. The same questions work in both directions.",
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
        { "@type": "ListItem", position: 3, name: "Vendor Security Questionnaire Template", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

const governanceItems = [
    "Do you hold a current SOC 2 Type II, ISO 27001, or equivalent certification? Please share the report or summary and its scope.",
    "Who owns security at your company, and is there a dedicated security or compliance function?",
    "Do you maintain documented security policies, and how often are they reviewed and approved?",
    "How do you screen employees and contractors who can access customer data, and is access removed promptly when they leave?",
    "Do you require security awareness training for staff, and how frequently?",
    "Do you carry cyber-liability insurance, and what does it cover?",
];

const dataItems = [
    "What customer data do you collect, where is it stored, and in which regions or jurisdictions?",
    "Is data encrypted in transit and at rest, and which algorithms and key-management approach do you use?",
    "How do you segregate one customer's data from another in a multi-tenant environment?",
    "What is your data-retention policy, and how do you handle deletion when a customer offboards?",
    "Which sub-processors or fourth parties touch our data, and how do you vet them?",
    "Can we obtain a data-processing agreement, and does it address applicable privacy regulations?",
    "How would you support a customer data-access or deletion request that we are legally required to fulfill?",
];

const appSecItems = [
    "Do you follow a secure development lifecycle, including code review and dependency scanning?",
    "How often do you commission independent penetration tests, and will you share a summary of the most recent results?",
    "How do you authenticate users, and do you support single sign-on and multi-factor authentication?",
    "How is access to customer data controlled internally, and is least-privilege enforced and logged?",
    "How do you manage and rotate secrets, API keys, and credentials?",
    "Do you have a responsible-disclosure or bug-bounty program for externally reported vulnerabilities?",
];

const infraItems = [
    "Where is the service hosted, and what physical and logical security controls protect the infrastructure?",
    "How are systems patched, and what is your target timeline for remediating critical vulnerabilities?",
    "What is your backup strategy, and have you tested restoring from backups?",
    "What are your documented availability targets, and where can we see historical uptime?",
    "How do you monitor for security events, and how long are audit logs retained?",
    "What is your business-continuity and disaster-recovery plan, and when was it last exercised?",
];

const incidentItems = [
    "Do you have a documented incident-response plan, and who is responsible for executing it?",
    "How quickly will you notify customers of a confirmed security incident affecting their data, and will you commit to that timeline contractually?",
    "What information will a breach notification include, and through what channel?",
    "Have you experienced a material security incident in the past 24 months? If so, describe what happened and what changed afterward.",
    "How do you coordinate with customers during an incident, including a single point of contact?",
    "Do you conduct post-incident reviews, and are the lessons fed back into your controls?",
];

const sections = [
    { heading: "1. Security governance & program", items: governanceItems },
    { heading: "2. Data protection & privacy", items: dataItems },
    { heading: "3. Application security", items: appSecItems },
    { heading: "4. Infrastructure & operations", items: infraItems },
    { heading: "5. Incident response & breach notification", items: incidentItems },
];

export default function VendorSecurityQuestionnaireTemplatePage() {
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
                        <li className="text-gray-300">Vendor Security Questionnaire Template</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                                <ClipboardCheck className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-3">
                                Ready-to-send template · 5 sections, 30+ questions
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                The questions to ask a software vendor before you trust them with your data.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                A copy-and-send security questionnaire covering governance, data protection,
                                application security, infrastructure, and incident response — so you can
                                evaluate a vendor on evidence instead of a sales deck, and capture the answers
                                that matter in writing before you sign.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-400" /><span>30+ questions, 5 sections</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>Send in minutes</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For buyers &amp; vendors</span></div>
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
                                successHeadline="The Vendor Security Questionnaire is yours."
                                relatedServiceHref="/services/penetration-testing"
                                relatedServiceLabel="penetration testing services"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Why send a questionnaire at all
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                When you buy software, you inherit that vendor&apos;s security posture. If they
                                get breached and your customer data was in their system, your customers do not
                                care whose fault it was — they hold you accountable. A vendor security
                                questionnaire is how you do diligence before that risk becomes yours, and how
                                you turn a confident sales pitch into specific, written commitments.
                            </p>
                            <p>
                                This template is the set of questions we send when evaluating tools that will
                                touch a client&apos;s data, and the same set we help clients answer when they are
                                the vendor under review. Scale the depth to the risk: a vendor holding your
                                production database deserves every question; a low-risk widget does not. For a
                                related buyer-side process, see the{" "}
                                <Link href="/resources/technical-due-diligence-checklist" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    technical due diligence checklist
                                </Link>
                                .
                            </p>
                        </div>
                    </AnimatedSection>

                    {sections.map((section) => (
                        <AnimatedSection key={section.heading} className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                {section.heading}
                            </h2>
                            <ul className="space-y-3">
                                {section.items.map((item) => (
                                    <li key={item} className="flex gap-3 text-gray-300">
                                        <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>
                    ))}

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How to read the answers
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                The value is not in the questions, it is in how the vendor answers them. A
                                strong vendor responds specifically, attaches documentation, and is comfortable
                                committing to breach-notification timelines in the contract. Watch for the red
                                flags: vague answers on where data lives, no independent penetration testing, no
                                documented incident-response plan, or reluctance to name a notification window.
                                Any of those in a high-risk vendor is a reason to slow down.
                            </p>
                            <p>
                                If a vendor offers a current SOC 2 Type II report, read it first and confirm its
                                scope actually covers the product you are buying. If you want to understand what
                                that report does and does not prove, the{" "}
                                <Link href="/blog/soc2-pentest-prep-guide-2026" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SOC 2 preparation guide
                                </Link>{" "}
                                is a useful companion, and the{" "}
                                <Link href="/blog/what-is-penetration-testing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    penetration testing primer
                                </Link>{" "}
                                explains why an independent test matters more than a self-assessment.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                We sit on both sides of this exchange. When a client is buying, we help them
                                evaluate vendor answers and spot the gaps a sales team glosses over. When a
                                client is the vendor — usually a SaaS company facing enterprise security
                                reviews — we run a{" "}
                                <Link href="/services/penetration-testing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    penetration test
                                </Link>{" "}
                                and a{" "}
                                <Link href="/services/web-app-pentest" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    web application pentest
                                </Link>{" "}
                                so they can answer the application-security questions with real evidence
                                instead of promises.
                            </p>
                            <p>
                                The infrastructure and operations questions map directly to how we build, which
                                is why teams that use our{" "}
                                <Link href="/services/saas-platform-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SaaS platform development
                                </Link>{" "}
                                and{" "}
                                <Link href="/services/custom-business-software" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom business software
                                </Link>{" "}
                                services tend to pass vendor reviews faster. To talk through your specific
                                situation, see our{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    pricing overview
                                </Link>{" "}
                                or{" "}
                                <Link href="/contact" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    reach out directly
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
                                    q: "When should I send a vendor security questionnaire?",
                                    a: "Send it before you sign a contract with any vendor that will store, process, or access your customer data, source code, credentials, or production systems. The depth should scale with the risk: a marketing widget needs a lighter review than a vendor holding your customer database.",
                                },
                                {
                                    q: "What if the vendor already has a SOC 2 report?",
                                    a: "A current SOC 2 Type II report answers many of these questions, so ask for it first. Use the questionnaire to fill the gaps the report does not cover, to confirm the report's scope actually includes the product you are buying, and to capture commitments in writing.",
                                },
                                {
                                    q: "How do I score the answers?",
                                    a: "Treat vague, evasive, or 'we are working on it' answers to data-protection and incident-response questions as red flags. A trustworthy vendor answers specifically, points to documentation, and is comfortable putting breach-notification timelines into the contract.",
                                },
                                {
                                    q: "Can I use this as a buyer and as a vendor?",
                                    a: "Yes. Buyers send it to evaluate suppliers. Vendors use it to pre-write a security overview so they can answer customer security reviews quickly instead of scrambling on every deal. The same questions work in both directions.",
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
                            <Link href="/resources/technical-due-diligence-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Technical Due Diligence Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The broader diligence review for evaluating a software supplier or acquisition.</p>
                            </Link>
                            <Link href="/resources/web-app-pentest-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Web App Pentest Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Scope an independent test to back up the application-security answers.</p>
                            </Link>
                            <Link href="/blog/soc2-pentest-prep-guide-2026" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">SOC 2 Pentest Prep Guide</p>
                                <p className="text-xs text-gray-400 leading-relaxed">What a SOC 2 report proves, and what it does not.</p>
                            </Link>
                            <Link href="/services/penetration-testing" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Penetration Testing</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Turn the security section into evidence with an independent test.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                On the answering side of a security review?
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                If enterprise prospects keep sending you questionnaires like this one, an
                                independent penetration test and a tidy security overview will shorten every
                                deal. See{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    how engagements are priced
                                </Link>{" "}
                                or book a call.
                            </p>
                            <ConsultationCTA label="Book a 20-min call" source={`${SLUG}-resource`} service="Penetration Testing" />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
