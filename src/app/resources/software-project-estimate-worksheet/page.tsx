import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { Calculator, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "software-project-estimate-worksheet";
const TITLE = "The Software Project Estimate Worksheet";
const PDF_FILENAME = "software-project-estimate-worksheet.pdf";

export const metadata: Metadata = {
    title: "Software Project Estimate Worksheet (Free) | QUANT LAB USA",
    description:
        "A practical worksheet to scope and estimate a custom software build: required inputs, a feature-sizing method, realistic cost ranges, and the risk factors that move the number.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "Software Project Estimate Worksheet (Free) | QUANT LAB USA",
        description:
            "Scope and estimate a custom software build: inputs to gather, a feature-sizing method, realistic ranges, and the risk factors that move the number.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Software Project Estimate Worksheet (Free) | QUANT LAB USA",
        description:
            "How to scope a build, the inputs you need, realistic ranges, and the risk factors that move the estimate.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "A worksheet for scoping and estimating a custom software project, covering the inputs to gather, a feature-sizing method, realistic cost ranges, and risk factors.",
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
            name: "Why estimate as a range instead of a single number?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Because a single number pretends to a precision that does not exist before discovery. A range communicates honest uncertainty and narrows as scope, integrations, and unknowns get pinned down. A credible early estimate is a range; a credible late estimate is a tighter range.",
            },
        },
        {
            "@type": "Question",
            name: "What are the biggest drivers of a software estimate?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Integration count and complexity, the number of distinct user roles and permissions, compliance and security requirements, data migration from legacy systems, and how clearly the requirements are defined. Vague requirements and unknown third-party systems inflate estimates the most.",
            },
        },
        {
            "@type": "Question",
            name: "Should I estimate the whole product or just the first version?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Estimate the first shippable version in detail and the later phases as rough ranges. Trying to estimate a multi-year roadmap to the dollar is wasted effort; the requirements will change before you get there. Scope a real v1, ship it, and re-estimate from real data.",
            },
        },
        {
            "@type": "Question",
            name: "How accurate can an estimate be before discovery?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Treat a pre-discovery estimate as plus-or-minus 50 percent. After a short paid discovery sprint that produces wireframes, a data model, and a confirmed integration list, you can usually get within plus-or-minus 15 to 20 percent on the first phase.",
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
        { "@type": "ListItem", position: 3, name: "Software Project Estimate Worksheet", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

const inputItems = [
    "The problem in one sentence: what the software must let users do, and what it replaces today.",
    "The primary user roles and how many distinct permission levels exist between them.",
    "The core feature list for version one, separated from the nice-to-haves you can defer.",
    "Every external system the product must integrate with, named, with its authentication method noted.",
    "Whether existing data must be migrated, from what source, and at what volume and cleanliness.",
    "Security and compliance obligations: regulated data, audit logging, single sign-on, or certification targets.",
    "Expected scale: concurrent users at launch and the growth curve over the first year.",
    "Hard constraints: a deadline tied to an event, a fixed budget ceiling, or a required technology.",
];

const sizingItems = [
    "Break the v1 feature list into discrete capabilities, not vague themes. 'User management' becomes signup, login, roles, invitations, and deactivation.",
    "Size each capability as small, medium, or large by the engineering effort it carries, including the unglamorous parts: validation, error states, and edge cases.",
    "Add the cross-cutting work that every build needs but feature lists omit: authentication, authorization, logging, monitoring, and a deployment pipeline.",
    "Account for the non-coding effort: design, code review, testing, project management, and the post-launch hardening that turns a demo into a system.",
    "Convert sized capabilities into an effort range, then a cost range — never a single number this early.",
    "Reality-check the total against comparable builds so a wildly low or high estimate gets caught before it reaches the client.",
];

const rangeItems = [
    "MVP or proof of concept: roughly $40K–$120K. A focused first version that proves the core workflow with real authentication and data, not a clickable mock-up.",
    "Production-grade application: roughly $120K–$400K. Multi-role, integrated, secured, and hardened enough for the business to run on day to day.",
    "Platform or multi-tenant SaaS: $250K and up. Tenant isolation, billing, admin tooling, and the operational maturity to onboard customers safely.",
    "Ongoing maintenance: budget 15–22 percent of build cost per year for fixes, dependency updates, security patching, and small enhancements.",
    "Discovery sprint: a short, fixed-fee phase that produces wireframes, a data model, and a confirmed scope so the build estimate tightens dramatically.",
];

const riskItems = [
    "Unclear or shifting requirements. The single largest source of estimate error; vague scope is expensive scope.",
    "Third-party integrations you do not control, especially legacy or poorly documented APIs that behave differently than the docs claim.",
    "Data migration from messy legacy systems, where cleaning and reconciling the data costs more than moving it.",
    "Compliance and security requirements discovered late, which can ripple through architecture decisions already made.",
    "A single internal stakeholder who must approve everything but is rarely available, stalling decisions and inflating timelines.",
    "Optimism bias: the natural tendency to estimate the happy path and forget that real projects spend significant time on edge cases and rework.",
];

const sections = [
    { heading: "1. Inputs to gather before you estimate", items: inputItems },
    { heading: "2. A method for sizing the work", items: sizingItems },
    { heading: "3. Realistic cost ranges", items: rangeItems },
    { heading: "4. Risk factors that move the number", items: riskItems },
];

export default function SoftwareProjectEstimateWorksheetPage() {
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
                        <li className="text-gray-300">Software Project Estimate Worksheet</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                                <Calculator className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-3">
                                Scoping worksheet · inputs, ranges, risk factors
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Estimate a custom build without guessing — or getting surprised later.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                A worksheet that walks you from a fuzzy idea to a defensible cost range: the
                                inputs to gather first, a method for sizing the work, realistic ranges from a
                                decade of builds, and the risk factors that quietly move the number. Use it to
                                pressure-test a vendor quote or to scope your own project before you ask.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-400" /><span>4 sections, real ranges</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>One working session</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For founders &amp; PMs</span></div>
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
                                successHeadline="The Software Project Estimate Worksheet is yours."
                                relatedServiceHref="/services/custom-business-software"
                                relatedServiceLabel="custom business software development"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Why most software estimates are wrong
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Software estimates go wrong for predictable reasons: the requirements were
                                vague, the integrations were unknown, and someone collapsed an honest range
                                into a single confident number to win approval. The result is a project that
                                runs over not because the team was slow, but because the estimate was a guess
                                dressed up as a commitment. The fix is not a better crystal ball — it is a
                                disciplined process that gathers the right inputs, sizes the work honestly, and
                                expresses the answer as a range that narrows as unknowns resolve.
                            </p>
                            <p>
                                This worksheet is the method we use to scope{" "}
                                <Link href="/services/custom-business-software" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom business software
                                </Link>{" "}
                                builds. It works just as well as a buyer&apos;s tool: bring it to a vendor
                                conversation and you will immediately spot a quote that skipped the
                                cross-cutting work or ignored the integration risk. If you are still deciding
                                whether to build at all, start with the{" "}
                                <Link href="/resources/build-vs-buy-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    build-vs-buy playbook
                                </Link>{" "}
                                first.
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
                            How to use the worksheet
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Work through the four sections in order in a single sitting. Gather the inputs
                                first — do not start sizing until you can name every integration and every user
                                role, because the gaps you find here are exactly the gaps that blow up later.
                                Then size the v1 feature list capability by capability, add the cross-cutting
                                and non-coding work, and convert the total into a range. Finally, walk the risk
                                list and widen the range for every factor that applies to you.
                            </p>
                            <p>
                                Estimate the first shippable version in detail and treat later phases as rough
                                ranges. The goal is not a multi-year forecast to the dollar; it is a defensible
                                number for the work in front of you and an honest acknowledgment of what is
                                still unknown. If a custom build is the direction, the{" "}
                                <Link href="/resources/mvp-to-prod-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    MVP to Production Playbook
                                </Link>{" "}
                                explains what the &quot;production-grade&quot; line item in your estimate actually
                                buys, and the{" "}
                                <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    build-vs-buy analysis for 2026
                                </Link>{" "}
                                puts the cost ranges in context.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Every estimate we produce follows this worksheet, and when the unknowns are too
                                large to estimate responsibly, we recommend a short, fixed-fee discovery sprint
                                that produces wireframes, a data model, and a confirmed integration list. That
                                single step usually moves an estimate from plus-or-minus 50 percent to
                                plus-or-minus 15 percent. We apply the same method across{" "}
                                <Link href="/services/saas-platform-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SaaS platform development
                                </Link>{" "}
                                and{" "}
                                <Link href="/services/api-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    API development
                                </Link>{" "}
                                engagements.
                            </p>
                            <p>
                                If you want a second opinion on a quote you have already received, or a real
                                estimate for a project you are scoping, see{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    how we price discovery and delivery
                                </Link>{" "}
                                or{" "}
                                <Link href="/contact" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    send us the inputs from this worksheet
                                </Link>{" "}
                                and we will turn them into a range.
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
                                    q: "Why estimate as a range instead of a single number?",
                                    a: "Because a single number pretends to a precision that does not exist before discovery. A range communicates honest uncertainty and narrows as scope, integrations, and unknowns get pinned down. A credible early estimate is a range; a credible late estimate is a tighter range.",
                                },
                                {
                                    q: "What are the biggest drivers of a software estimate?",
                                    a: "Integration count and complexity, the number of distinct user roles and permissions, compliance and security requirements, data migration from legacy systems, and how clearly the requirements are defined. Vague requirements and unknown third-party systems inflate estimates the most.",
                                },
                                {
                                    q: "Should I estimate the whole product or just the first version?",
                                    a: "Estimate the first shippable version in detail and the later phases as rough ranges. Trying to estimate a multi-year roadmap to the dollar is wasted effort; the requirements will change before you get there. Scope a real v1, ship it, and re-estimate from real data.",
                                },
                                {
                                    q: "How accurate can an estimate be before discovery?",
                                    a: "Treat a pre-discovery estimate as plus-or-minus 50 percent. After a short paid discovery sprint that produces wireframes, a data model, and a confirmed integration list, you can usually get within plus-or-minus 15 to 20 percent on the first phase.",
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
                            <Link href="/resources/build-vs-buy-playbook" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Build vs Buy Decision Playbook</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Decide whether to build at all before you estimate the build.</p>
                            </Link>
                            <Link href="/resources/mvp-to-prod-playbook" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">MVP to Production Playbook</p>
                                <p className="text-xs text-gray-400 leading-relaxed">What the &quot;production-grade&quot; line in your estimate really covers.</p>
                            </Link>
                            <Link href="/blog/build-vs-buy-software-2026" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Build vs Buy Software in 2026</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Where these cost ranges fit in the broader decision.</p>
                            </Link>
                            <Link href="/services/custom-business-software" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Custom Business Software</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Our delivery service for when the estimate gets approved.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Want a real estimate, not a guess?
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                Fill in the inputs section, then book a call. We will turn your worksheet into a
                                defensible range and, where the unknowns are large, propose a discovery sprint
                                that tightens it. See{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    how that is priced
                                </Link>{" "}
                                first if you like.
                            </p>
                            <ConsultationCTA label="Book a 20-min call" source={`${SLUG}-resource`} service="Custom Business Software" />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
