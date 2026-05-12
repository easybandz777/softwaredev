import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { Building2, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "build-vs-buy-playbook";
const TITLE = "The Custom Software Build-vs-Buy Decision Playbook";
const PDF_FILENAME = "build-vs-buy-playbook.pdf";

export const metadata: Metadata = {
    title: "Build vs Buy Decision Playbook (Free PDF) | QUANT LAB",
    description:
        "A 25-page playbook with 7 decision frameworks, a 5-year TCO worksheet, and a CFO memo template — built for ops leaders making the build-vs-buy call.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "Build vs Buy Decision Playbook (Free PDF) | QUANT LAB",
        description:
            "A 25-page playbook with 7 decision frameworks, a 5-year TCO worksheet, and a CFO memo template — for ops leaders making the build-vs-buy call.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Build vs Buy Decision Playbook (Free PDF) | QUANT LAB",
        description:
            "A 25-page playbook with 7 frameworks, a 5-year TCO worksheet, and a CFO memo template.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "Downloadable 25-page playbook covering 7 decision frameworks, a 5-year TCO worksheet, and a CFO memo template for the custom software build-vs-buy decision.",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    publisher: {
        "@type": "Organization",
        name: "QUANT LAB USA INC",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#org",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Who is the Build vs Buy Decision Playbook for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Mid-market operations leaders, RevOps directors, and COOs at 50-to-500 person companies who are evaluating whether to build custom software or stay on an existing SaaS platform. It is also useful for founders deciding whether their first internal tool should be custom-built or assembled out of off-the-shelf products.",
            },
        },
        {
            "@type": "Question",
            name: "What is actually in the 25-page playbook?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Seven decision frameworks, a 12-factor weighted scoring sheet, a visual decision tree, a hidden-cost audit, a 5-year TCO worksheet covering license inflation and integration debt, a custom build cost reality check with real ranges, and a one-page CFO memo template you can adapt for your next leadership meeting.",
            },
        },
        {
            "@type": "Question",
            name: "Does this favor custom software because QUANT LAB builds custom software?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. The framework is honest about when off-the-shelf is the right answer — commoditized workflows, sub-10-headcount teams, and low integration depth all favor staying on SaaS. The point of the playbook is to make the answer defensible either way, not to push every reader toward a custom build.",
            },
        },
        {
            "@type": "Question",
            name: "How long does the playbook take to work through?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "About 90 minutes for a single decision-maker, or one 2-hour working session with a small leadership team. The 12-factor scoring sheet is designed so you can finish it in 20 minutes if you have the financial inputs handy.",
            },
        },
        {
            "@type": "Question",
            name: "What happens after I download?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "You get an immediate PDF download link plus one short follow-up email with the worksheet attached as a spreadsheet. If you want a second set of eyes on your specific build-vs-buy situation, reply to that email or book a 20-minute scoping call directly.",
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
        { "@type": "ListItem", position: 3, name: "Build vs Buy Playbook", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

export default function BuildVsBuyPlaybookPage() {
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
                        <li className="text-gray-300">Build vs Buy Playbook</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                                <Building2 className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-3">
                                25-page playbook · PDF + worksheet
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Stop guessing build-vs-buy. Get the framework mid-market ops leaders use to win the argument.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                A 25-page decision playbook with seven scoring frameworks, a 5-year TCO worksheet,
                                and a one-page CFO memo template — so the next time leadership asks whether you
                                should build or buy, you walk in with proof instead of opinions.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-400" /><span>25 pages, 7 frameworks</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>90-minute read</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For COOs &amp; RevOps</span></div>
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
                                successHeadline="The Build-vs-Buy Playbook is yours."
                                relatedServiceHref="/services/custom-business-software"
                                relatedServiceLabel="custom business software development"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            What you actually get inside the playbook
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                The build-vs-buy conversation almost never goes badly because someone made the
                                wrong call. It goes badly because the case for either path was never built. Sales
                                of off-the-shelf SaaS lean on hosted demos, vendor-supplied case studies, and a
                                per-seat sticker price that looks reasonable on day one. Custom software gets
                                pitched on principle — ownership, control, no per-seat tax — without a defensible
                                cost line your CFO can argue with. Both halves of the argument collapse on
                                contact with a 5-year financial model.
                            </p>
                            <p>
                                This playbook is the working document we hand to operations leaders, COOs, and
                                RevOps directors who have to walk into a leadership meeting next week and tell
                                the room whether to renew Salesforce, switch to HubSpot, or hire a team to build
                                a fit-for-purpose system. The frameworks are not theoretical. They are the same
                                ones we use when{" "}
                                <Link href="/services/custom-business-software" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    scoping custom business software builds
                                </Link>{" "}
                                and when we walk a prospect through{" "}
                                <Link href="/services/custom-crm-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom CRM development
                                </Link>{" "}
                                vs. staying on Salesforce. Several sections are also referenced inside the
                                <Link href="/calculators/build-vs-buy" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    {" "}interactive build-vs-buy calculator
                                </Link>
                                .
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Inside the 25-page PDF
                        </h2>
                        <ul className="space-y-3">
                            {[
                                "Section 1 — Why build-vs-buy is now a board-level conversation, with the four trendlines that pushed it there (SaaS sprawl, vendor lock-in, the integration tax, and the rise of in-house engineering at mid-market companies).",
                                "Section 2 — The 12-factor weighted decision framework. Score your situation across process uniqueness, integration depth, data sovereignty, scale curve, compliance load, 5-year TCO, vendor risk, speed-to-deploy, in-house engineering capacity, customization frequency, audit needs, and AI/ML readiness.",
                                "Section 3 — The decision tree. A one-page visual that maps your scoring sheet onto one of three paths: build, buy, or hybrid (custom on top of a SaaS data layer).",
                                "Section 4 — The hidden costs SaaS proposals omit. Per-seat license inflation modeled at 8–12% YoY, middleware costs, customization debt, switching cost, and the opportunity cost of waiting for a vendor roadmap that may never ship the feature you need.",
                                "Section 5 — The custom build cost reality check. Real ranges from a decade of QUANT LAB builds: $40K–$120K MVP, $120K–$400K production-grade, ongoing maintenance at 15–22% of build cost annually.",
                                "Section 6 — The 5-year TCO worksheet. Side-by-side template comparing SaaS TCO vs. custom build TCO across years 1–5, including a sensitivity table for headcount growth and license inflation.",
                                "Section 7 — How to pitch this internally. The one-page CFO memo template plus the three objections you will get and how to answer each one.",
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
                                The playbook is targeted at four roles. First, mid-market COOs and operations
                                directors at 50-to-500-person companies whose current SaaS bill is climbing
                                faster than headcount. Second, VPs of RevOps who have already spent three
                                cycles paying a Salesforce consultant to bolt custom objects, custom flows, and
                                Apex onto a per-seat platform — and have started doing the math on what it
                                would cost to own that infrastructure outright. Third, CFOs and controllers
                                who are tired of approving renewals at numbers that did not match the original
                                business case. Fourth, founders and CEOs whose first internal tool decision
                                will shape how every operations process scales.
                            </p>
                            <p>
                                If any of those describe your situation, you are exactly who we wrote this
                                for. The frameworks are designed to be useful even if you ultimately decide
                                to stay on your current platform. Several of our former clients have used the
                                playbook to negotiate better renewal terms with their existing SaaS vendor
                                after walking the vendor through the cost lines the playbook surfaced.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            What you will learn
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                You will leave with a defensible scoring of your build-vs-buy situation across
                                twelve factors, a 5-year TCO comparison you can present in a leadership
                                meeting, and a one-page memo template you can adapt to your CFO's
                                communication style. More importantly, you will leave with the right
                                vocabulary to push back on vendor-side claims — including the standard
                                tactic of comparing your build cost to one year of SaaS sticker price
                                instead of the 5-year fully-loaded number.
                            </p>
                            <p>
                                On the build side, you will have realistic cost ranges and a clear
                                understanding of what production-grade actually means. We have seen too many
                                custom builds fail because the budget covered a clickable prototype but not
                                authentication, audit logging, multi-tenancy, or the 90 days of post-launch
                                hardening that turns an MVP into a system the business can run on. That is
                                the part the{" "}
                                <Link href="/resources/mvp-to-prod-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    MVP to Production Playbook
                                </Link>{" "}
                                covers in depth — read both together if a custom build is on the table.
                            </p>
                            <p>
                                You will also learn how to frame the hybrid path correctly. Most teams default
                                to the binary: stay on Salesforce or rip-and-replace with a custom system.
                                The most defensible answer is often custom workflow software sitting on top
                                of a SaaS data layer, or custom replacement of one or two pieces of an
                                otherwise-fine stack. The playbook walks through three reference hybrid
                                architectures we have shipped.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Every QUANT LAB custom-software engagement begins with the same build-vs-buy
                                analysis embedded in this playbook. We send it to prospects before the first
                                scoping call so the conversation can start at the right altitude. If your
                                scoring sheet comes back with a clear build verdict, the next conversation
                                is about scope: which features ship in v1, what the integration footprint
                                looks like, and how the rollout pairs with your current systems. We have
                                shipped this pattern across{" "}
                                <Link href="/services/custom-business-software" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom business software
                                </Link>
                                ,{" "}
                                <Link href="/services/custom-crm-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom CRM development
                                </Link>
                                ,{" "}
                                <Link href="/services/saas-platform-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SaaS platform builds
                                </Link>
                                , and{" "}
                                <Link href="/services/web-applications" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    web application development
                                </Link>
                                .
                            </p>
                            <p>
                                If you want to see the math in action, the{" "}
                                <Link href="/calculators/build-vs-buy" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    build-vs-buy calculator
                                </Link>{" "}
                                and the{" "}
                                <Link href="/calculators/crm-roi" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom CRM ROI calculator
                                </Link>{" "}
                                run the same model used in Section 6 of the playbook. For a working example
                                of how the math plays out on a real project, see our{" "}
                                <Link href="/work" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    case studies
                                </Link>{" "}
                                or read about{" "}
                                <Link href="/about" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    how QUANT LAB engages with mid-market clients
                                </Link>
                                . When the playbook output is ambiguous,{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    a paid discovery sprint
                                </Link>{" "}
                                resolves the ambiguity in two weeks with a real scope and a real budget.
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
                                    q: "Who is the Build vs Buy Decision Playbook for?",
                                    a: "Mid-market operations leaders, RevOps directors, and COOs at 50-to-500 person companies who are evaluating whether to build custom software or stay on an existing SaaS platform. It is also useful for founders deciding whether their first internal tool should be custom or assembled out of off-the-shelf products.",
                                },
                                {
                                    q: "What is actually in the 25-page playbook?",
                                    a: "Seven decision frameworks, a 12-factor weighted scoring sheet, a visual decision tree, a hidden-cost audit, a 5-year TCO worksheet covering license inflation and integration debt, a custom build cost reality check with real ranges, and a one-page CFO memo template you can adapt for your next leadership meeting.",
                                },
                                {
                                    q: "Does this favor custom software because QUANT LAB builds custom software?",
                                    a: "No. The framework is honest about when off-the-shelf is the right answer — commoditized workflows, sub-10-headcount teams, and low integration depth all favor staying on SaaS. The point of the playbook is to make the answer defensible either way, not to push every reader toward a custom build.",
                                },
                                {
                                    q: "How long does the playbook take to work through?",
                                    a: "About 90 minutes for a single decision-maker, or one 2-hour working session with a small leadership team. The 12-factor scoring sheet is designed so you can finish it in 20 minutes if you have the financial inputs handy.",
                                },
                                {
                                    q: "What happens after I download?",
                                    a: "You get an immediate PDF download link plus one short follow-up email with the worksheet attached as a spreadsheet. If you want a second set of eyes on your specific build-vs-buy situation, reply to that email or book a 20-minute scoping call directly.",
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
                            <Link href="/resources/crm-rollout-playbook" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">The 6-Week Custom CRM Rollout Playbook</p>
                                <p className="text-xs text-gray-400 leading-relaxed">If your build-vs-buy answer comes back &quot;build&quot; on the CRM side, this is the rollout document.</p>
                            </Link>
                            <Link href="/resources/mvp-to-prod-playbook" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">MVP to Production Playbook</p>
                                <p className="text-xs text-gray-400 leading-relaxed">What &quot;production-grade&quot; actually means once you have decided to build.</p>
                            </Link>
                            <Link href="/calculators/build-vs-buy" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Build vs Buy Calculator</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The interactive version of the Section 6 worksheet.</p>
                            </Link>
                            <Link href="/services/custom-business-software" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Custom Business Software</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Our service offering for when the playbook output says build.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Already know your answer? Skip ahead to a 20-minute scoping call.
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                If your scoring sheet is already pointing toward a custom build, the next step
                                is a paid discovery sprint that produces a wireframed UI, a database schema, and
                                a phased build estimate. Read{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    how the discovery sprint is priced
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
