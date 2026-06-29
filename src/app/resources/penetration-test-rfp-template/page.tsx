import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { ClipboardList, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "penetration-test-rfp-template";
const TITLE = "The Penetration Test RFP Template";
const PDF_FILENAME = "penetration-test-rfp-template.pdf";

export const metadata: Metadata = {
    title: "Penetration Test RFP Template (Free) | QUANT LAB USA",
    description:
        "A fill-in penetration test RFP template covering scope and targets, testing methodology, rules of engagement, deliverables, tester qualifications, and timeline — so you can compare pentest vendors fairly.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "Penetration Test RFP Template (Free) | QUANT LAB USA",
        description:
            "Scope, methodology, rules of engagement, deliverables, qualifications, and timeline — a fill-in RFP template to solicit and compare penetration testing vendors fairly.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Penetration Test RFP Template (Free) | QUANT LAB USA",
        description:
            "Scope, methodology, rules of engagement, deliverables, and qualifications — a fill-in pentest RFP template.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "A penetration test RFP template covering engagement objectives, scope and targets, testing methodology, rules of engagement, deliverables and reporting, tester qualifications, and timeline and logistics.",
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
            name: "Why send an RFP instead of just asking for a quote?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Because a one-line quote request gets you wildly different proposals you cannot compare. One vendor scopes a deep manual test, another a quick automated scan, and the prices look arbitrary. A structured RFP makes every vendor answer the same questions about scope, methodology, and deliverables, so you are comparing like for like and can see who actually understands the work.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between black-box, grey-box, and white-box testing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Black-box gives the tester no inside information, simulating an external attacker with no access. White-box provides full access — source code, credentials, architecture — for the most thorough coverage. Grey-box sits in between, typically with a normal user account, and is the most common and cost-effective choice for application testing.",
            },
        },
        {
            "@type": "Question",
            name: "What should the final deliverable include?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "An executive summary for non-technical stakeholders, detailed findings with severity ratings and reproduction steps, concrete remediation guidance, and ideally a retest of fixed issues. A good report tells you not just what is wrong but how to fix it and how serious each issue really is — a list of raw scanner output is not a penetration test report.",
            },
        },
        {
            "@type": "Question",
            name: "How do we evaluate a tester's qualifications?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ask for relevant certifications, a sanitized sample report, the methodology they follow, and references for similar work. Certifications are a useful signal, but a redacted sample report tells you more — it shows the depth of their testing and the quality of their writing, which is what you actually receive at the end.",
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
        { "@type": "ListItem", position: 3, name: "Penetration Test RFP Template", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

const objectivesItems = [
    "Driver: state why you need the test — a customer requirement, a SOC 2 audit, a compliance mandate, or a pre-launch check.",
    "Goals: describe what a successful engagement proves, beyond simply producing a report.",
    "Audience: name who will read the results and what decision they will make from them.",
    "Compliance mapping: note any framework the test must satisfy so vendors can speak to it directly.",
];

const scopeItems = [
    "Targets: list the exact assets in scope — web apps, APIs, mobile apps, networks, cloud accounts — with URLs, IP ranges, or identifiers.",
    "Test type: specify black-box, grey-box, or white-box, and the access or credentials you will provide.",
    "Environment: state whether testing is against production or a staging mirror, and any data-handling constraints.",
    "Out of scope: explicitly list systems, techniques (such as denial-of-service or social engineering), and third parties that are off-limits.",
    "Size and complexity: give enough detail — number of user roles, endpoints, integrations — for vendors to scope accurately.",
];

const methodologyItems = [
    "Standards: ask which recognized methodology the vendor follows, such as the OWASP testing guidance or an equivalent framework.",
    "Manual vs automated: require a clear split, since a real penetration test is mostly manual and not just a scan.",
    "Coverage: ask how they will test authentication, authorization, business logic, and the relevant OWASP Top 10 categories.",
    "Tooling: ask what tools they use and how they validate findings to rule out false positives.",
    "Retesting: state whether you require a verification round after fixes are applied.",
];

const rulesItems = [
    "Authorization: define written permission to test, who signs it, and the legal scope it covers.",
    "Testing window: specify allowed dates and hours, and whether testing must avoid peak traffic.",
    "Communication: name a point of contact on each side and the channel for real-time issues.",
    "Emergency stop: define how testing is paused if something breaks, and who can call it.",
    "Data handling: require that any sensitive data accessed during testing is handled and destroyed per agreed rules.",
];

const deliverablesItems = [
    "Executive summary: a non-technical overview of risk and posture for leadership.",
    "Detailed findings: each issue with a severity rating, evidence, reproduction steps, and impact.",
    "Remediation guidance: concrete, actionable fixes for every finding, not just a description of the problem.",
    "Retest report: documented verification that fixed issues are actually resolved.",
    "Format and timeline: when the draft and final reports are due, and how results are delivered securely.",
];

const qualificationsItems = [
    "Certifications: relevant credentials held by the testers who will actually do the work.",
    "Experience: similar engagements in your industry or against your kind of system.",
    "Sample report: a sanitized example so you can judge depth and report quality before you buy.",
    "References: contacts who can speak to the vendor's work and professionalism.",
    "Insurance and liability: confirmation of appropriate coverage for the engagement.",
];

const logisticsItems = [
    "Timeline: your required start and end dates, and any hard deadline driving the work.",
    "Budget: a range or a request for itemized pricing, so proposals are comparable.",
    "Contract terms: confidentiality, data handling, and any procurement requirements on your side.",
    "Evaluation criteria: the weighting you will use to choose, so vendors know what matters most.",
    "Submission: how and by when proposals are due, and who to send questions to.",
];

const sections = [
    { heading: "1. Engagement objectives", items: objectivesItems },
    { heading: "2. Scope & targets", items: scopeItems },
    { heading: "3. Testing methodology", items: methodologyItems },
    { heading: "4. Rules of engagement", items: rulesItems },
    { heading: "5. Deliverables & reporting", items: deliverablesItems },
    { heading: "6. Tester qualifications", items: qualificationsItems },
    { heading: "7. Timeline & logistics", items: logisticsItems },
];

export default function PenetrationTestRfpTemplatePage() {
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
                        <li className="text-gray-300">Penetration Test RFP Template</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                                <ClipboardList className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-3">
                                Pentest RFP · scope, methodology, rules of engagement, deliverables
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Buy a real penetration test, not a vague scan.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                A fill-in RFP template for soliciting penetration testing proposals you can
                                actually compare. It pins down scope and targets, methodology, rules of
                                engagement, deliverables, tester qualifications, and timeline. Without structure,
                                you get wildly different bids and arbitrary prices. With it, you can tell who
                                understands the work and who is selling you a scanner&apos;s output.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-400" /><span>7 sections, fill-in RFP</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>Draft it in an afternoon</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For security &amp; compliance owners</span></div>
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
                                successHeadline="The Penetration Test RFP Template is yours."
                                relatedServiceHref="/services/penetration-testing"
                                relatedServiceLabel="penetration testing services"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Why a structured RFP matters
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                &ldquo;Penetration test&rdquo; covers everything from a deep, mostly-manual
                                engagement to an automated vulnerability scan with a logo on top. If you ask three
                                vendors for a quote with a single sentence, you will get three proposals that are
                                impossible to compare and prices that look random. The vendor who scoped the most
                                serious work often looks the most expensive, and the one who quoted a scan looks
                                like a bargain — until you read the report.
                            </p>
                            <p>
                                A structured RFP fixes that by making every vendor answer the same questions. This
                                template is built from the same engagement structure we use to scope our own{" "}
                                <Link href="/services/penetration-testing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    penetration testing
                                </Link>{" "}
                                work. If you want the underlying concepts, the{" "}
                                <Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    penetration testing
                                </Link>{" "}
                                and{" "}
                                <Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    OWASP Top 10
                                </Link>{" "}
                                glossary entries explain the terms used throughout.
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
                            How to use this template
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Start with the objectives and scope sections — they do the most work. Be precise
                                about what is in scope and what is off-limits, because vague scope is the single
                                biggest source of mispriced and mismatched proposals. State your test type
                                (black-box, grey-box, or white-box) and the access you will provide, since that
                                alone can change the effort and the price substantially.
                            </p>
                            <p>
                                Send the same document to every vendor, give them a clear submission deadline and a
                                point of contact for questions, and define your evaluation criteria up front so the
                                decision is not made on price alone. Ask for a sanitized sample report — it tells
                                you more than any sales call. If the test is for a SOC 2 audit, our{" "}
                                <Link href="/blog/soc2-pentest-prep-guide-2026" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SOC 2 pentest prep guide
                                </Link>{" "}
                                walks through what auditors expect to see.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                This template mirrors how we scope our own{" "}
                                <Link href="/services/penetration-testing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    penetration testing
                                </Link>{" "}
                                engagements — clear scope, a documented methodology, defined rules of engagement,
                                and a report that tells you what to fix and how serious it is. Depending on what
                                you are protecting, that might be a{" "}
                                <Link href="/services/web-app-pentest" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    web application pentest
                                </Link>{" "}
                                or a{" "}
                                <Link href="/services/network-pentest" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    network penetration test
                                </Link>
                                , and we are happy to tell you which one your situation actually calls for.
                            </p>
                            <p>
                                If you would like us to respond to your RFP, or you want a second opinion on the
                                scope before you send it out, see{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    how engagements are priced
                                </Link>{" "}
                                or{" "}
                                <Link href="/contact" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    reach out
                                </Link>{" "}
                                to talk it through.
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
                                    q: "Why send an RFP instead of just asking for a quote?",
                                    a: "Because a one-line quote request gets you wildly different proposals you cannot compare. One vendor scopes a deep manual test, another a quick automated scan, and the prices look arbitrary. A structured RFP makes every vendor answer the same questions about scope, methodology, and deliverables, so you are comparing like for like and can see who actually understands the work.",
                                },
                                {
                                    q: "What is the difference between black-box, grey-box, and white-box testing?",
                                    a: "Black-box gives the tester no inside information, simulating an external attacker with no access. White-box provides full access — source code, credentials, architecture — for the most thorough coverage. Grey-box sits in between, typically with a normal user account, and is the most common and cost-effective choice for application testing.",
                                },
                                {
                                    q: "What should the final deliverable include?",
                                    a: "An executive summary for non-technical stakeholders, detailed findings with severity ratings and reproduction steps, concrete remediation guidance, and ideally a retest of fixed issues. A good report tells you not just what is wrong but how to fix it and how serious each issue really is — a list of raw scanner output is not a penetration test report.",
                                },
                                {
                                    q: "How do we evaluate a tester's qualifications?",
                                    a: "Ask for relevant certifications, a sanitized sample report, the methodology they follow, and references for similar work. Certifications are a useful signal, but a redacted sample report tells you more — it shows the depth of their testing and the quality of their writing, which is what you actually receive at the end.",
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
                            <Link href="/resources/web-app-pentest-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Web App Pentest Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">What a web application test should actually cover.</p>
                            </Link>
                            <Link href="/resources/saas-security-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">SaaS Security Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Harden the baseline before the testers arrive.</p>
                            </Link>
                            <Link href="/blog/soc2-pentest-prep-guide-2026" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">SOC 2 Pentest Prep Guide</p>
                                <p className="text-xs text-gray-400 leading-relaxed">What auditors expect from a penetration test.</p>
                            </Link>
                            <Link href="/blog/penetration-test-cost-2026" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Penetration Test Cost</p>
                                <p className="text-xs text-gray-400 leading-relaxed">What drives pentest pricing, so your budget is realistic.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Want us to respond to your pentest RFP?
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                Send us the scope and we will tell you exactly what we would test, how, and what
                                you would receive — or help you tighten the RFP before it goes out. See{" "}
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
