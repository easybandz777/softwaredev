import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Calculator, ArrowRight, Check, Zap, Shield, Clock } from "lucide-react";
import { SaasPricingCalculator } from "./SaasPricingCalculator";

export const metadata: Metadata = {
    title: "SaaS Pricing Calculator — MRR, ARR & Blended ARPU | QUANT LAB USA",
    description:
        "Model your SaaS pricing tiers and instantly see MRR, ARR, blended ARPU, and the revenue churn costs you. Free, in-browser, no signup required.",
    alternates: { canonical: "https://quantlabusa.dev/calculators/saas-pricing-calculator" },
    openGraph: {
        title: "SaaS Pricing Calculator | MRR, ARR & Blended ARPU | QUANT LAB USA",
        description:
            "Model your pricing tiers and see MRR, ARR, blended ARPU, and what churn costs you — calculated live in your browser.",
        url: "https://quantlabusa.dev/calculators/saas-pricing-calculator",
        type: "website",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "SaaS Pricing Calculator | MRR, ARR & Blended ARPU | QUANT LAB USA",
        description:
            "Model your pricing tiers and see MRR, ARR, blended ARPU, and what churn costs you — calculated live in your browser.",
    },
};

const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "SaaS Pricing Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/calculators/saas-pricing-calculator",
    description:
        "Interactive calculator that turns SaaS pricing tiers, per-tier customer counts, and monthly churn into MRR, ARR, and blended ARPU in real time.",
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
            name: "How is MRR calculated from mixed monthly and annual plans?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Annual plan prices are normalized to a monthly figure by dividing by 12 before they roll into MRR. Each tier contributes (normalized monthly price x customers) to total MRR, and ARR is simply MRR x 12. This keeps the comparison apples-to-apples even when you bill some tiers yearly and others monthly.",
            },
        },
        {
            "@type": "Question",
            name: "What is blended ARPU and why does it matter?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Blended ARPU (average revenue per user) is total MRR divided by your total customer count across all tiers. It is the single number that tells you whether your customer base is skewing toward low-touch self-serve plans or higher-value accounts. A falling blended ARPU as you scale is an early warning that support and infrastructure costs may outpace revenue per account.",
            },
        },
        {
            "@type": "Question",
            name: "How does this calculator treat churn?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We apply your monthly revenue churn percentage to current MRR and annualize it, then show the net-new MRR you must add every month just to stay flat. It is a deliberately simple revenue-churn approximation — it does not model cohort decay or expansion revenue. For board-grade modeling we layer those in on a call.",
            },
        },
        {
            "@type": "Question",
            name: "When does SaaS billing need a custom build instead of plain Stripe Checkout?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Once you have multiple tiers with upgrades and downgrades, proration, metered or usage-based components, and dunning for failed payments, billing becomes a product surface rather than a dashboard setting. That is usually the point where a purpose-built subscription-billing layer pays for itself by protecting reported revenue and recovering churn that off-the-shelf checkout leaves on the floor.",
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
        { "@type": "ListItem", position: 3, name: "SaaS Pricing Calculator", item: "https://quantlabusa.dev/calculators/saas-pricing-calculator" },
    ],
};

export default function SaasPricingCalculatorPage() {
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
                        <li className="text-gray-300">SaaS Pricing</li>
                    </ol>
                </nav>

                {/* Hero */}
                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                        <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        SaaS Pricing Calculator — MRR, ARR &amp; Blended ARPU in 60 Seconds
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Drop in your plan tiers, prices, and the number of customers on each one. Get live MRR, ARR, and blended ARPU — plus what your churn rate is quietly costing you every year. Built by the team that ships <Link href="/services/subscription-billing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">subscription-billing systems</Link> for a living.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>60-second model</span></div>
                        <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-sky-400" /><span>Live MRR / ARR / ARPU</span></div>
                        <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-amber-400" /><span>No email required to see the number</span></div>
                    </div>
                </AnimatedSection>

                {/* Calculator widget */}
                <AnimatedSection className="mb-16">
                    <SaasPricingCalculator />
                </AnimatedSection>

                {/* Long-form SEO copy */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        How this SaaS pricing calculator works
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Every recurring-revenue business eventually lives or dies by three numbers: monthly recurring revenue (MRR), annual recurring revenue (ARR), and blended average revenue per user (ARPU). This calculator computes all three live as you edit your tiers, so you can see exactly how a price change, a new plan, or a shift in your customer mix moves the topline. If the term itself is new to you, our <Link href="/glossary/what-is-saas" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">glossary entry on what SaaS means</Link> is a good two-minute primer.
                        </p>
                        <p>
                            The math is intentionally transparent. Each tier contributes its normalized monthly price multiplied by its customer count to total MRR. Annual-billed tiers are divided by twelve first, so a plan billed at $1,990/year is counted as roughly $165.83/month of MRR — the same way every serious SaaS metrics dashboard normalizes it. ARR is MRR times twelve. Blended ARPU is total MRR divided by your total customer count across every tier, which is the cleanest single signal of whether your base is drifting toward low-touch self-serve accounts or higher-value customers.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Why blended ARPU is the number to watch</h3>
                        <p>
                            Founders obsess over MRR growth and under-watch ARPU. That is a mistake. You can grow MRR while quietly destroying unit economics if every new customer lands on your cheapest plan. A blended ARPU that trends down as you scale means each new account brings less revenue but roughly the same support burden, the same infrastructure cost, and the same billing complexity. Watching ARPU alongside MRR is how you catch that drift before it shows up as a margin problem in a board meeting.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">What churn really costs you</h3>
                        <p>
                            The churn line is the one most pricing spreadsheets skip. We apply your monthly revenue-churn percentage to current MRR, annualize it, and surface the net-new MRR you must add every single month just to stay flat. At 5% monthly churn you are effectively re-acquiring more than half your revenue base every year before you grow a dollar. That is why reducing churn is almost always cheaper than acquiring your way around it — and why the billing experience (failed-payment recovery, clean upgrade paths, proactive renewals) is one of the highest-leverage things an early SaaS team can invest in.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Assumptions and what this calculator deliberately leaves out</h3>
                        <p>
                            This is a topline model, not a full cohort engine. It does not model expansion revenue, cohort decay curves, seasonality, discounting, or the cash-flow timing benefit of annual prepay beyond the MRR normalization. It assumes the customer counts you enter are steady-state. Those simplifications are exactly what make it useful for a quick gut-check — and exactly why a fundraise- or board-grade model layers them back in. When your pricing surface gets genuinely complex (usage-based tiers, seat-based plus metered hybrids, grandfathered legacy plans), the modeling and the underlying billing logic both become real engineering. That is the work we do, and the <Link href="/blog/building-multi-tenant-saas-postgres-rls" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">multi-tenant SaaS architecture guide</Link> covers the data-model side of getting it right from day one.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">When pricing becomes an engineering problem</h3>
                        <p>
                            There is a predictable moment when pricing stops being a spreadsheet exercise and becomes a build. It is the point where you have multiple tiers with real upgrade and downgrade flows, proration on mid-cycle changes, metered overages, and dunning for failed payments. At that stage, gluing it together with ad-hoc Stripe webhooks creates reconciliation debt that eventually lands on someone&apos;s desk. Our <Link href="/blog/nextjs-stripe-integration-guide" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">Next.js and Stripe integration guide</Link> walks through doing it cleanly, and our <Link href="/services/saas-platform-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">SaaS platform development</Link> practice exists precisely to own that layer for you.
                        </p>
                    </div>
                </AnimatedSection>

                {/* What you'll get */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you&apos;ll get</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Live MRR and ARR across an unlimited number of pricing tiers",
                            "Blended ARPU so you can spot unit-economics drift early",
                            "Mixed monthly and annual billing, normalized correctly",
                            "A churn line that shows the net-new MRR needed just to stay flat",
                            "A plain-English read on whether your billing is ready for a custom layer",
                            "A shareable PDF breakdown for your board or co-founder (optional)",
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
                        <Link href="/blog/building-multi-tenant-saas-postgres-rls" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Building Multi-Tenant SaaS with Postgres RLS</p>
                            <p className="text-xs text-gray-400">The data-model foundation that keeps tiered pricing and tenant isolation clean.</p>
                        </Link>
                        <Link href="/blog/nextjs-stripe-integration-guide" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Next.js + Stripe Integration Guide</p>
                            <p className="text-xs text-gray-400">How to wire subscriptions, webhooks, and proration without the reconciliation debt.</p>
                        </Link>
                        <Link href="/calculators/stripe-cost" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Stripe Integration Cost Calculator</p>
                            <p className="text-xs text-gray-400">Estimate the build cost of the billing layer behind your pricing.</p>
                        </Link>
                        <Link href="/services/subscription-billing" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Subscription Billing Engineering</p>
                            <p className="text-xs text-gray-400">Dunning, proration, metered usage — the billing layer that protects your MRR.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                {/* FAQ */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "How is MRR calculated from mixed monthly and annual plans?",
                                a: "Annual plan prices are normalized to a monthly figure by dividing by 12 before they roll into MRR. Each tier contributes (normalized monthly price x customers) to total MRR, and ARR is simply MRR x 12. This keeps the comparison apples-to-apples even when you bill some tiers yearly and others monthly.",
                            },
                            {
                                q: "What is blended ARPU and why does it matter?",
                                a: "Blended ARPU is total MRR divided by your total customer count across all tiers. It is the single number that tells you whether your customer base is skewing toward low-touch self-serve plans or higher-value accounts. A falling blended ARPU as you scale is an early warning that support and infrastructure costs may outpace revenue per account.",
                            },
                            {
                                q: "How does this calculator treat churn?",
                                a: "We apply your monthly revenue churn percentage to current MRR and annualize it, then show the net-new MRR you must add every month just to stay flat. It is a deliberately simple revenue-churn approximation — it does not model cohort decay or expansion revenue. For board-grade modeling we layer those in on a call.",
                            },
                            {
                                q: "When does SaaS billing need a custom build instead of plain Stripe Checkout?",
                                a: "Once you have multiple tiers with upgrades and downgrades, proration, metered or usage-based components, and dunning for failed payments, billing becomes a product surface rather than a dashboard setting. That is usually the point where a purpose-built subscription-billing layer pays for itself by protecting reported revenue and recovering churn that off-the-shelf checkout leaves on the floor.",
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
                            Turn your pricing model into a billing system that holds up
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            If your tiers are getting complex — proration, usage-based pricing, dunning, grandfathered plans — the spreadsheet stops being enough. Book a 20-minute call and we&apos;ll pressure-test your pricing and the billing layer underneath it, so your reported MRR is something you can actually trust.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach out directly: <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> &middot; <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Pricing & Billing Call" source="saas-pricing-calculator" service="SaaS Platform Development" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
