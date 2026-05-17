import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { Wrench, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "internal-tools-build-vs-buy-worksheet";
const TITLE = "Internal Tools: Build vs Buy Decision Worksheet";
const PDF_FILENAME = "internal-tools-build-vs-buy-worksheet.pdf";

export const metadata: Metadata = {
    title: "Internal Tools Build-vs-Buy Worksheet (Free) | QUANT LAB USA",
    description:
        "20-page worksheet for ops teams evaluating Retool, Internal.io, Airplane, or build-from-scratch — with a 10-factor scoring matrix and 5-year TCO comparison.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "Internal Tools Build vs Buy Worksheet (Free PDF) | QUANT LAB USA",
        description:
            "20-page worksheet for ops teams evaluating Retool, Internal.io, Airplane, or build-from-scratch with scoring matrix and TCO.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Internal Tools Build vs Buy Worksheet (Free PDF) | QUANT LAB USA",
        description:
            "20-page worksheet for evaluating internal-tools platforms vs build-from-scratch.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "Downloadable 20-page decision worksheet for ops teams evaluating internal-tools platforms (Retool, Internal.io, Airplane, Tooljet) versus building from scratch, with a 10-factor scoring matrix and a 5-year TCO worksheet.",
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
            name: "How is this different from the general build-vs-buy playbook?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The general playbook is anchored on customer-facing software decisions (CRM, billing platform, customer portal). The internal-tools worksheet is anchored on the back-of-house category — admin panels, ops dashboards, support tooling, content workflows — where the per-seat economics, integration patterns, and audit needs are different. The scoring matrices share DNA but the weights are tuned for the internal-tools category.",
            },
        },
        {
            "@type": "Question",
            name: "Which platforms does it cover?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The major internal-tools platforms — Retool, Internal.io, Airplane, Tooljet, Appsmith, Budibase — plus the build-from-scratch alternative on a typical Next.js plus tRPC plus Postgres stack. The worksheet does not pick a winner for you; it gives you a defensible scoring framework so you and your team can pick on shared criteria.",
            },
        },
        {
            "@type": "Question",
            name: "Does it cover the security and audit angle?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Sections 6 and 7 cover the audit logging, role-based access control, IP allowlisting, and data residency patterns common across the major platforms — and the gap between what the platforms offer out of the box and what most SOC 2 readiness reviews actually require.",
            },
        },
        {
            "@type": "Question",
            name: "What's the right team size for this worksheet?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Most useful for ops teams at companies with 10 to 500 employees considering their first or second internal-tools build. Below 10 employees, the decision is usually too small to need a structured framework. Above 500, you typically have a platform team that has already standardized on a platform and the question becomes whether to migrate, not which to pick.",
            },
        },
        {
            "@type": "Question",
            name: "What happens after I download?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You get the PDF immediately and one short follow-up email. If you want a working session on your specific internal-tools scope — including the data model, the integration surface, and which platform fits best — book a 20-minute scoping call.",
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
        { "@type": "ListItem", position: 3, name: "Internal Tools Build vs Buy Worksheet", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

export default function InternalToolsPage() {
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
                        <li className="text-gray-300">Internal Tools Build vs Buy Worksheet</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                                <Wrench className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-3">
                                20-page worksheet · PDF + scoring matrix
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Retool, Internal, or build it yourself? Pick on a worksheet, not on Hacker News.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                A 20-page worksheet for ops teams evaluating Retool, Internal.io, Airplane,
                                Tooljet, Appsmith, or building from scratch on Next.js plus Postgres. With a
                                10-factor scoring matrix, a 5-year TCO comparison, and an honest framework that
                                does not pick a winner for you.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-400" /><span>20 pages, 10-factor matrix</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>90-minute working session</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For ops &amp; engineering leads</span></div>
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
                                successHeadline="The Internal Tools Worksheet is yours."
                                relatedServiceHref="/services/custom-business-software"
                                relatedServiceLabel="custom business software development"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Internal tools is the category most companies handle worst
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Customer-facing software gets the build-vs-buy treatment. Internal tools rarely do.
                                The first admin panel gets thrown together in a weekend on whichever platform an
                                engineer used at their last job, and then every subsequent admin panel gets thrown
                                together on the same platform because the standard has already been picked by
                                accident. Six months later, the platform bill is climbing faster than the team
                                expected, the per-seat costs hit at exactly the worst moment (when ops is
                                expanding), and there is no defensible documentation of why this platform was
                                picked in the first place. Switching costs are now substantial.
                            </p>
                            <p>
                                This worksheet exists because the build-vs-buy framework that works for{" "}
                                <Link href="/services/custom-crm-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    customer-facing CRM
                                </Link>{" "}
                                does not directly translate to the internal-tools category. The per-seat economics
                                are different (you pay for every ops headcount, not every customer), the integration
                                patterns are different (mostly read from your own data warehouse rather than write to
                                external systems), and the audit needs are different (a different surface area for
                                SOC 2 and customer-data exposure). The 10-factor matrix in this worksheet is tuned
                                for those category-specific differences.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Inside the 20-page worksheet
                        </h2>
                        <ul className="space-y-3">
                            {[
                                "Section 1 — The four-question filter. How much engineering capacity do you have? How sensitive is the data the tool reads? How many seats do you need at launch and at 18 months? Are you on a platform standard already?",
                                "Section 2 — Platform landscape. The major internal-tools platforms (Retool, Internal.io, Airplane, Tooljet, Appsmith, Budibase) with the actual differences that matter — pricing model, hosting options, audit logging maturity, and the SDK surface for non-trivial customizations.",
                                "Section 3 — Build-from-scratch baseline. A reference Next.js plus tRPC plus Postgres plus Auth.js stack that costs about 6 to 10 weeks of engineering for a first version. Includes when this baseline is faster than picking a platform.",
                                "Section 4 — The 10-factor scoring matrix. Score across seat count, per-seat cost, integration depth, audit needs, customization frequency, data sensitivity, engineering capacity, vendor lock-in, time-to-first-tool, and post-launch maintenance.",
                                "Section 5 — 5-year TCO comparison. Side-by-side template comparing platform TCO (with per-seat inflation modeled at 10-15% YoY) versus build-from-scratch TCO (with maintenance modeled at 15-20% of build cost annually).",
                                "Section 6 — Security and access control. RBAC maturity across platforms, SSO and SAML support, IP allowlisting, audit log retention, and the gap between platform defaults and what your SOC 2 auditor will actually ask for.",
                                "Section 7 — Audit and compliance. Data residency patterns, PII handling, the customer-data exposure surface for each platform option, and the audit-trail patterns that survive a real auditor review.",
                                "Section 8 — Migration risk. What it costs and what breaks to migrate from one platform to another, or from a platform to a build-from-scratch system. Includes a worked example of a Retool-to-custom migration.",
                                "Section 9 — Hybrid patterns. Most defensible internal-tools setups are a platform for the simple stuff and a build-from-scratch system for the complex stuff. Three reference hybrid architectures with the splitting criteria.",
                                "Section 10 — Decision template. The one-page output of the worksheet that you can paste into a leadership Slack channel or a finance review. Includes the three objections you will get and how to answer them.",
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
                                The worksheet is targeted at four roles. First, heads of operations at 10-to-500-
                                employee companies whose ops team is about to spin up its first or third internal
                                tool. Second, engineering managers at the same scale who are tired of being the
                                bottleneck for every ops request and need to evaluate whether to give the ops team
                                a no-code platform or build a thin custom system that handles 80% of requests.
                                Third, IT directors evaluating internal-tools platforms as part of a SOC 2 readiness
                                review or a customer security questionnaire response. Fourth, founders making the
                                first call on which platform their company standardizes on for back-office work.
                            </p>
                            <p>
                                The worksheet is industry-agnostic but most useful in verticals where ops complexity
                                is high — including{" "}
                                <Link href="/industries/fintech" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    fintech
                                </Link>
                                ,{" "}
                                <Link href="/industries/healthcare" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    healthcare
                                </Link>
                                ,{" "}
                                <Link href="/industries/insurance" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    insurance
                                </Link>
                                , and{" "}
                                <Link href="/industries/legal-services" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    legal services
                                </Link>{" "}
                                where the audit and data-sensitivity factors weigh heavily on the platform choice.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            What you will learn
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                You will leave with a scored evaluation of the major internal-tools platforms
                                against your specific situation, a 5-year TCO comparison you can present in a
                                finance review, and a one-page decision template suitable for a leadership Slack
                                channel. You will also have the vocabulary to push back on common platform-side
                                sales patterns — including the one where the per-seat price quoted on the marketing
                                page is materially below the actual price after enterprise features are bundled in.
                            </p>
                            <p>
                                On the build-from-scratch side, you will have a realistic engineering scope (6-to-10
                                weeks for a first internal tool on a Next.js plus tRPC plus Postgres baseline) and
                                a list of the production-readiness items that distinguish a real tool from a weekend
                                prototype — including RBAC, audit logging, SSO, IP allowlisting, and the
                                disaster-recovery posture you need before the tool touches customer-related data.
                                Many of those items overlap with the broader{" "}
                                <Link href="/resources/mvp-to-prod-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    MVP-to-production checklist
                                </Link>
                                .
                            </p>
                            <p>
                                On the migration side, you will understand what it actually costs to move from a
                                platform like Retool to a custom system 18 months in — which is the single most
                                common failure mode for the &quot;just pick the platform&quot; default. The worked
                                example in Section 8 covers a real migration timeline and the data and integration
                                gotchas to plan for.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                A significant share of our{" "}
                                <Link href="/services/custom-business-software" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom business software
                                </Link>{" "}
                                engagements begin as Retool migrations. The pattern is consistent: a small ops team
                                built the first admin panel on Retool, hit a customization or per-seat-cost wall
                                around month 18, and is now evaluating whether to keep paying or build the
                                replacement. The worksheet is what we send before the first scoping call so the
                                conversation can start at the right altitude. It also helps validate{" "}
                                <Link href="/services/web-applications" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    web application builds
                                </Link>{" "}
                                where the back-office surface is half the scope.
                            </p>
                            <p>
                                For the broader build-vs-buy framework that addresses customer-facing software, see
                                the{" "}
                                <Link href="/resources/build-vs-buy-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    build-vs-buy playbook
                                </Link>{" "}
                                and the{" "}
                                <Link href="/calculators/build-vs-buy" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    build-vs-buy calculator
                                </Link>
                                . For pricing on the discovery sprint that typically precedes a migration build,{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    see our pricing page
                                </Link>{" "}
                                or just{" "}
                                <Link href="/contact" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    book a call
                                </Link>
                                . Recent migrations are listed on{" "}
                                <Link href="/work" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    our work page
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
                                    q: "How is this different from the general build-vs-buy playbook?",
                                    a: "The general playbook is anchored on customer-facing software. The internal-tools worksheet is anchored on the back-of-house category where the per-seat economics, integration patterns, and audit needs are different.",
                                },
                                {
                                    q: "Which platforms does it cover?",
                                    a: "Retool, Internal.io, Airplane, Tooljet, Appsmith, Budibase, plus the build-from-scratch alternative on a typical Next.js plus tRPC plus Postgres stack.",
                                },
                                {
                                    q: "Does it cover the security and audit angle?",
                                    a: "Yes. Sections 6 and 7 cover audit logging, RBAC, IP allowlisting, and data residency patterns and the gap between platform defaults and what SOC 2 readiness reviews actually require.",
                                },
                                {
                                    q: "What's the right team size for this worksheet?",
                                    a: "Most useful for ops teams at companies with 10 to 500 employees considering their first or second internal-tools build.",
                                },
                                {
                                    q: "What happens after I download?",
                                    a: "You get the PDF immediately and one short follow-up email. If you want a working session on your specific internal-tools scope, book a 20-minute scoping call.",
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
                                <p className="text-sm font-semibold text-white mb-1">Build vs Buy Playbook</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The customer-facing software counterpart to the internal-tools worksheet.</p>
                            </Link>
                            <Link href="/resources/mvp-to-prod-playbook" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">MVP to Production Playbook</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Production-readiness items for the build-from-scratch path.</p>
                            </Link>
                            <Link href="/services/custom-business-software" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Custom Business Software</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Our service for when the worksheet output points toward a custom build.</p>
                            </Link>
                            <Link href="/calculators/build-vs-buy" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Build vs Buy Calculator</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The interactive version of the Section 5 TCO worksheet.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Stuck between a platform and a build? Get a second set of eyes.
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                If the worksheet output is ambiguous, a 20-minute scoping call is the cheapest way
                                to find out whether your situation is actually a hybrid or whether one side of
                                the scoring matrix is being weighted incorrectly for your team. Read{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    our pricing
                                </Link>{" "}
                                or just book a call.
                            </p>
                            <ConsultationCTA label="Book a 20-min call" source={`${SLUG}-resource`} service="Custom Business Software" />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
