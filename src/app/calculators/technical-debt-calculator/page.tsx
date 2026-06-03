import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Calculator, ArrowRight, Check, Zap, Shield, Clock } from "lucide-react";
import { TechnicalDebtCalculator } from "./TechnicalDebtCalculator";

export const metadata: Metadata = {
    title: "Technical Debt Calculator — Annual Cost & Refactor Payoff | QUANT LAB USA",
    description:
        "Put a dollar figure on technical debt: team size, salary, time lost, and compounding interest. See the annual cost and whether a refactor pays off. Free, in-browser.",
    alternates: { canonical: "https://quantlabusa.dev/calculators/technical-debt-calculator" },
    openGraph: {
        title: "Technical Debt Calculator | Annual Cost & Refactor Payoff | QUANT LAB USA",
        description:
            "Quantify technical debt from team size, salary, % time lost, and a compounding interest rate — and see whether a refactor pays for itself. Calculated live.",
        url: "https://quantlabusa.dev/calculators/technical-debt-calculator",
        type: "website",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Technical Debt Calculator | Annual Cost & Refactor Payoff | QUANT LAB USA",
        description:
            "Quantify technical debt from team size, salary, % time lost, and a compounding interest rate — and see whether a refactor pays for itself. Calculated live.",
    },
};

const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Technical Debt Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/calculators/technical-debt-calculator",
    description:
        "Interactive calculator that quantifies the annual cost of technical debt from team size, average salary, percentage of time lost, and a compounding interest rate, then computes the payback and three-year net benefit of a refactor.",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How is the annual cost of technical debt calculated?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We take each engineer's fully-loaded cost (salary times a 1.4x loading factor for benefits, taxes, and overhead), multiply by team size to get total loaded team cost, then multiply by the percentage of engineering time lost to debt. That product is your annual drag cost — the money you spend each year fighting your own codebase instead of shipping.",
            },
        },
        {
            "@type": "Question",
            name: "Why does technical debt have an interest rate?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The metaphor is precise: like financial debt, unaddressed technical debt compounds. Every new feature built on a shaky foundation is slower and adds more debt, so the drag grows year over year if you do nothing. The interest rate input models that growth — a 15% rate means this year's drag becomes roughly 15% larger next year if untouched.",
            },
        },
        {
            "@type": "Question",
            name: "How do I estimate the percentage of time lost to debt?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Look at where engineering time actually goes: slow builds and flaky tests, time spent understanding tangled code before touching it, bugs from fragile areas everyone is afraid to change, and rework. Teams routinely underestimate this. If you have never measured it, 20 to 30 percent is a common honest starting point for a codebase that has grown faster than it has been maintained.",
            },
        },
        {
            "@type": "Question",
            name: "When does a refactor make financial sense?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "When the annual savings from removing the drag pay back the one-time refactor cost within a reasonable window — typically under 18 to 24 months — and the three-year net benefit is clearly positive. Because the avoided drag compounds, the case for refactoring strengthens the longer you wait. This calculator surfaces both the payback period and the three-year net benefit so you can make the call with numbers, not vibes.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Calculators", item: "https://quantlabusa.dev/calculators" },
        { "@type": "ListItem", position: 3, name: "Technical Debt Calculator", item: "https://quantlabusa.dev/calculators/technical-debt-calculator" },
    ],
};

export default function TechnicalDebtCalculatorPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="container mx-auto px-6 max-w-5xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">&rsaquo;</li>
                        <li className="text-gray-300">Calculators</li>
                        <li aria-hidden="true" className="text-gray-700">&rsaquo;</li>
                        <li className="text-gray-300">Technical Debt</li>
                    </ol>
                </nav>

                {/* Hero */}
                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                        <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Technical Debt Calculator — The Annual Cost &amp; the Refactor Payoff
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Plug in your team size, average salary, and how much engineering time leaks away to fighting your own codebase. Get the annual dollar cost of your <Link href="/glossary/what-is-technical-debt" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">technical debt</Link> — and a clear payback and three-year net benefit for fixing it. Stop arguing about refactoring on vibes and start arguing with numbers.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>60-second estimate</span></div>
                        <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-sky-400" /><span>Compounding interest modeled</span></div>
                        <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-amber-400" /><span>No email required to see the number</span></div>
                    </div>
                </AnimatedSection>

                {/* Calculator widget */}
                <AnimatedSection className="mb-16">
                    <TechnicalDebtCalculator />
                </AnimatedSection>

                {/* Long-form SEO copy */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        How to put a number on technical debt
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Technical debt is the slow, invisible tax that almost no team measures and every team pays. It is the accumulated cost of shortcuts, deferred cleanup, and code that grew faster than it was maintained. The problem is not that it exists — some debt is a rational tradeoff for speed — the problem is that it stays a feeling instead of a figure, so it never competes fairly for engineering time against the next shiny feature. This calculator turns that feeling into a defensible annual dollar cost. If the concept is new, the <Link href="/glossary/what-is-technical-debt" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">glossary entry on what technical debt is</Link> is a quick primer.
                        </p>
                        <p>
                            The math starts with the fully-loaded cost of an engineer. A salary is not the real cost of a person — benefits, payroll taxes, equipment, and overhead typically push it about 40% higher, which is why we apply a 1.4x loading factor. Multiply by your team size and you have the total loaded cost of your engineering org per year. Multiply that by the share of time lost to debt, and you have your annual drag: the money you spend every year fighting the codebase instead of shipping product.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Why the interest-rate metaphor is exact, not cute</h3>
                        <p>
                            Ward Cunningham coined the term &ldquo;technical debt&rdquo; precisely because it behaves like financial debt: you can borrow against the future to move fast now, but if you never pay it back, the interest compounds. Every feature built on a shaky foundation is slower to ship and adds a little more debt, which makes the next feature slower still. That is why the interest-rate input matters. At a 15% rate, this year&apos;s drag becomes roughly 15% larger next year if you do nothing — and the cost of inaction is the part teams consistently miss when they keep deferring the cleanup &ldquo;until after the next launch.&rdquo;
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Estimating the percentage of time lost</h3>
                        <p>
                            This is the input that does the most work, so be honest about it. Count the slow builds and flaky test suites, the hours spent understanding tangled code before anyone dares touch it, the bugs that erupt from fragile modules everyone tiptoes around, and the rework that follows. Most teams underestimate this badly — when they finally instrument it, the number is higher than anyone guessed. If you have never measured it, 20 to 30 percent is a common honest starting point for a codebase that outgrew its maintenance. Run the calculator at the low and high end of your guess to see how sensitive the result is.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Refactor, pay down incrementally, or live with it</h3>
                        <p>
                            A high annual cost does not automatically mean rewrite everything. The calculator gives you three signals: the payback period on a focused refactor, the three-year net benefit, and a recommendation. When payback lands inside a year and the drag is high, a dedicated refactor is one of the highest-return investments available to an engineering org. When the math is closer to break-even, disciplined incremental paydown — a fixed slice of every sprint plus a rule that new work does not add to the pile — is the smarter play. And sometimes the right answer is to manage it and revisit later. This is the same build-versus-buy-versus-maintain logic our <Link href="/calculators/build-vs-buy" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">build vs buy calculator</Link> applies to whole systems, and our <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">build-vs-buy guide for 2026</Link> goes deeper on when a rebuild beats a patch.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Assumptions this calculator makes</h3>
                        <p>
                            We assume the time-lost percentage is steady across the team, a flat 1.4x loading factor, and a refactor that removes a fixed share of the drag in a single effort. It does not model the morale cost of working in a frustrating codebase, the recruiting and retention hit when good engineers leave over it, or the opportunity cost of features you never shipped because the team was underwater. Every one of those tilts the case further toward paying the debt down. When the refactor case is real, the hard part is scoping it against your actual code — which is exactly what we do, whether that means a focused refactor or a ground-up rebuild as <Link href="/services/custom-business-software" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">custom business software</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                {/* What you'll get */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you&apos;ll get</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "The annual dollar cost of your technical debt",
                            "Fully-loaded engineering cost, not just base salary",
                            "A compounding view: what the drag grows to if left untouched",
                            "Refactor payback period in months",
                            "A three-year net benefit so you can make the case to leadership",
                            "A shareable PDF breakdown to defend the refactor budget (optional)",
                        ].map((item) => (
                            <div key={item} className="flex gap-3 rounded-xl border border-white/5 bg-[#0d1526]/60 p-4">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Related reading */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related reading &amp; tools</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link href="/glossary/what-is-technical-debt" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">What Is Technical Debt?</p>
                            <p className="text-xs text-gray-400">A plain-English primer on the concept, the interest metaphor, and how it accrues.</p>
                        </Link>
                        <Link href="/blog/build-vs-buy-software-2026" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Build vs Buy Software (2026)</p>
                            <p className="text-xs text-gray-400">When a rebuild beats a patch, and how to frame the decision for leadership.</p>
                        </Link>
                        <Link href="/calculators/build-vs-buy" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Build vs Buy Calculator</p>
                            <p className="text-xs text-gray-400">Score a whole-system build, buy, or maintain decision the same data-driven way.</p>
                        </Link>
                        <Link href="/services/custom-business-software" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Custom Business Software</p>
                            <p className="text-xs text-gray-400">When the debt is too deep to patch, a clean rebuild is the cheaper path.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                {/* FAQ */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "How is the annual cost of technical debt calculated?",
                                a: "We take each engineer's fully-loaded cost (salary times a 1.4x loading factor for benefits, taxes, and overhead), multiply by team size to get total loaded team cost, then multiply by the percentage of engineering time lost to debt. That product is your annual drag cost — the money you spend each year fighting your own codebase instead of shipping.",
                            },
                            {
                                q: "Why does technical debt have an interest rate?",
                                a: "The metaphor is precise: like financial debt, unaddressed technical debt compounds. Every new feature built on a shaky foundation is slower and adds more debt, so the drag grows year over year if you do nothing. The interest rate input models that growth — a 15% rate means this year's drag becomes roughly 15% larger next year if untouched.",
                            },
                            {
                                q: "How do I estimate the percentage of time lost to debt?",
                                a: "Look at where engineering time actually goes: slow builds and flaky tests, time spent understanding tangled code before touching it, bugs from fragile areas everyone is afraid to change, and rework. Teams routinely underestimate this. If you have never measured it, 20 to 30 percent is a common honest starting point for a codebase that has grown faster than it has been maintained.",
                            },
                            {
                                q: "When does a refactor make financial sense?",
                                a: "When the annual savings from removing the drag pay back the one-time refactor cost within a reasonable window — typically under 18 to 24 months — and the three-year net benefit is clearly positive. Because the avoided drag compounds, the case for refactoring strengthens the longer you wait. This calculator surfaces both the payback period and the three-year net benefit so you can make the call with numbers, not vibes.",
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

                {/* Bottom CTA */}
                <AnimatedSection>
                    <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            Make the refactor case with numbers your CFO respects
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            If your number says the debt is expensive, the next step is scoping the fix against your real codebase. Book a 20-minute call and we&apos;ll help you separate the debt worth paying down from the debt worth living with — and put a defensible cost and timeline on whichever path wins.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach out directly: <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> &middot; <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Tech-Debt Call" source="technical-debt-calculator" service="Custom Business Software" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
