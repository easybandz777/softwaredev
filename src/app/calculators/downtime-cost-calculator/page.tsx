import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Calculator, ArrowRight, Check, Zap, Shield, Clock } from "lucide-react";
import { DowntimeCostCalculator } from "./DowntimeCostCalculator";

export const metadata: Metadata = {
    title: "Downtime Cost Calculator — What an Outage Really Costs | QUANT LAB USA",
    description:
        "Calculate the true cost of an outage from revenue per hour, hours down, affected percentage, and recovery cost. Free, in-browser, no signup required.",
    alternates: { canonical: "https://quantlabusa.dev/calculators/downtime-cost-calculator" },
    openGraph: {
        title: "Downtime Cost Calculator | What an Outage Really Costs | QUANT LAB USA",
        description:
            "Put a real dollar figure on an outage: revenue per hour, hours down, affected percentage, recovery cost, and reputation drag — calculated live.",
        url: "https://quantlabusa.dev/calculators/downtime-cost-calculator",
        type: "website",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Downtime Cost Calculator | What an Outage Really Costs | QUANT LAB USA",
        description:
            "Put a real dollar figure on an outage: revenue per hour, hours down, affected percentage, recovery cost, and reputation drag — calculated live.",
    },
};

const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Downtime Cost Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/calculators/downtime-cost-calculator",
    description:
        "Interactive calculator that estimates the total cost of an outage from revenue per hour or annual revenue, hours of downtime, affected revenue percentage, recovery cost, and a reputation multiplier.",
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
            name: "How is the cost of downtime calculated?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The core formula is revenue per hour x hours down x percentage of revenue affected, which gives direct lost revenue. We then add your recovery cost (engineering hours, vendor escalation, overtime) and apply a reputation multiplier to the lost-revenue portion to capture downstream churn, SLA credits, and lost trust. The result is a defensible total cost per incident.",
            },
        },
        {
            "@type": "Question",
            name: "Should I use 24/7 hours or business hours to derive revenue per hour?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Use 24/7 (8,760 hours/year) if your revenue accrues around the clock, like most SaaS, e-commerce, or API businesses. Use business hours (about 2,080 hours/year) if revenue only happens when your team or storefront is open. The calculator supports both, and you can also enter revenue per hour directly if you already track it.",
            },
        },
        {
            "@type": "Question",
            name: "What is the reputation multiplier and what number should I use?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It captures the damage beyond the immediate sale you lost: customers who churn after a bad outage, SLA credits you owe, and the trust you have to re-earn. A multiplier of 1.0 means no downstream damage; 1.25 means every dollar of lost revenue carries another 25 cents of secondary cost. Set it higher for SLA-bound B2B contracts and lower for low-stakes consumer traffic.",
            },
        },
        {
            "@type": "Question",
            name: "How do I reduce my downtime exposure?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "In rough order of cost-effectiveness: uptime monitoring and alerting, a tested rollback path, multi-AZ deployments, database replicas with automated failover, graceful degradation, and finally multi-region failover with rehearsed incident response. The right level of investment is the one that costs less than the outages it prevents — which is exactly what this calculator helps you size.",
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
        { "@type": "ListItem", position: 3, name: "Downtime Cost Calculator", item: "https://quantlabusa.dev/calculators/downtime-cost-calculator" },
    ],
};

export default function DowntimeCostCalculatorPage() {
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
                        <li className="text-gray-300">Downtime Cost</li>
                    </ol>
                </nav>

                {/* Hero */}
                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                        <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Downtime Cost Calculator — What a Single Outage Really Costs
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Plug in your revenue, how long you were down, and how much of the system was affected. Get a defensible dollar figure for a single outage — direct lost revenue plus recovery cost and reputation drag — so you can size what resilience is actually worth. Built by the team that ships <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">resilient cloud infrastructure</Link>.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>60-second estimate</span></div>
                        <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-sky-400" /><span>Direct + reputation cost</span></div>
                        <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-amber-400" /><span>No email required to see the number</span></div>
                    </div>
                </AnimatedSection>

                {/* Calculator widget */}
                <AnimatedSection className="mb-16">
                    <DowntimeCostCalculator />
                </AnimatedSection>

                {/* Long-form SEO copy */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        How to calculate the cost of downtime
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The headline formula is simple: revenue per hour multiplied by the number of hours you were down, multiplied by the fraction of revenue actually affected. The hard part is getting those inputs honest. This calculator does the arithmetic live and then adds the two costs most back-of-the-envelope estimates forget — recovery cost and reputation drag — so the number you walk away with is one you can defend in an incident review or a budget conversation.
                        </p>
                        <p>
                            Start with revenue per hour. If your revenue accrues around the clock — most SaaS, e-commerce, and API businesses — divide annual revenue by 8,760 hours. If you only earn money during business hours, divide by roughly 2,080. The calculator supports both, and you can enter revenue per hour directly if you already track it. Then set how much of the system was affected: a full outage is 100%, but a degraded checkout while the rest of the app stayed up might be 30%. Architecture that isolates blast radius is precisely what keeps that number low.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Why direct revenue is only half the cost</h3>
                        <p>
                            Lost sales during the outage window are the obvious cost, but they are rarely the biggest one. Recovery cost — the engineering hours, the vendor escalation, the overtime, the war-room time that displaced planned work — is real money that lands the same week. And the reputation multiplier captures what shows up later: customers who quietly churn after a bad experience, SLA credits you owe under contract, and the trust you have to spend the next quarter re-earning. For an SLA-bound B2B product, that secondary cost can dwarf the revenue you lost in the moment.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Turning the number into a resilience budget</h3>
                        <p>
                            The point of this calculator is not to scare you — it is to right-size your spending. Resilience engineering has a clear cost-benefit logic: the right level of investment is the one that costs less than the outages it prevents, weighted by how often they happen. If a single outage costs you $5,000, multi-region failover is overkill and basic monitoring is plenty. If it costs $250,000, redundant infrastructure and rehearsed incident response usually pay for themselves the first time they catch a failure. The decision is fundamentally a <Link href="/calculators/build-vs-buy" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">build-versus-buy and invest-versus-accept tradeoff</Link>, and this number is the input that makes it rational.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">The resilience ladder, cheapest first</h3>
                        <p>
                            In rough order of cost-effectiveness: uptime monitoring and alerting so you find out before your customers do; a tested rollback path so a bad deploy is a five-minute fix; multi-AZ deployments so one data-center hiccup is not an outage; database replicas with automated failover; graceful degradation so a non-critical dependency failing does not take the whole system down; and finally, for the highest-exposure systems, multi-region failover with a regularly rehearsed incident-response process. Each rung costs more than the last, and your downtime number tells you how far up the ladder it is worth climbing. This is the core of what our <Link href="/services/devops-engineering" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">DevOps engineering</Link> practice delivers.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Assumptions this calculator makes</h3>
                        <p>
                            This estimates a single outage, not your annualized risk — multiply by your realistic incidents-per-year to get an annual figure. It treats revenue per hour as flat, so for businesses with sharp peaks (a flash sale, a market open), a peak-hour outage costs far more than this average implies. It does not model regulatory fines, contractual penalties beyond the reputation multiplier, or the morale cost of a brutal on-call week. Those are exactly the factors we tune to your situation on a call. If your system is showing its age and outages are getting frequent, that is often a sign it is time to weigh a rebuild against patching — our <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">build-vs-buy guide for 2026</Link> covers that decision in depth.
                        </p>
                    </div>
                </AnimatedSection>

                {/* What you'll get */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you&apos;ll get</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "A defensible total cost for a single outage",
                            "Revenue per hour derived from annual revenue (24/7 or business hours)",
                            "Direct lost revenue, recovery cost, and reputation drag broken out",
                            "An affected-percentage input so partial outages are modeled honestly",
                            "A read on how much resilience investment your exposure justifies",
                            "A shareable PDF breakdown for your incident review or budget meeting (optional)",
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
                        <Link href="/services/cloud-infrastructure" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Cloud Infrastructure</p>
                            <p className="text-xs text-gray-400">Multi-AZ, failover, and the resilient foundation that keeps your downtime number small.</p>
                        </Link>
                        <Link href="/services/devops-engineering" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">DevOps Engineering</p>
                            <p className="text-xs text-gray-400">Monitoring, rollback paths, and rehearsed incident response done right.</p>
                        </Link>
                        <Link href="/calculators/pentest-cost" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Penetration Test Cost Calculator</p>
                            <p className="text-xs text-gray-400">A breach is downtime with a compliance bill attached — size that risk too.</p>
                        </Link>
                        <Link href="/calculators/build-vs-buy" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Build vs Buy Calculator</p>
                            <p className="text-xs text-gray-400">Weigh investing in resilience against accepting the risk, with a clear score.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                {/* FAQ */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "How is the cost of downtime calculated?",
                                a: "The core formula is revenue per hour x hours down x percentage of revenue affected, which gives direct lost revenue. We then add your recovery cost (engineering hours, vendor escalation, overtime) and apply a reputation multiplier to the lost-revenue portion to capture downstream churn, SLA credits, and lost trust. The result is a defensible total cost per incident.",
                            },
                            {
                                q: "Should I use 24/7 hours or business hours to derive revenue per hour?",
                                a: "Use 24/7 (8,760 hours/year) if your revenue accrues around the clock, like most SaaS, e-commerce, or API businesses. Use business hours (about 2,080 hours/year) if revenue only happens when your team or storefront is open. The calculator supports both, and you can also enter revenue per hour directly if you already track it.",
                            },
                            {
                                q: "What is the reputation multiplier and what number should I use?",
                                a: "It captures the damage beyond the immediate sale you lost: customers who churn after a bad outage, SLA credits you owe, and the trust you have to re-earn. A multiplier of 1.0 means no downstream damage; 1.25 means every dollar of lost revenue carries another 25 cents of secondary cost. Set it higher for SLA-bound B2B contracts and lower for low-stakes consumer traffic.",
                            },
                            {
                                q: "How do I reduce my downtime exposure?",
                                a: "In rough order of cost-effectiveness: uptime monitoring and alerting, a tested rollback path, multi-AZ deployments, database replicas with automated failover, graceful degradation, and finally multi-region failover with rehearsed incident response. The right level of investment is the one that costs less than the outages it prevents — which is exactly what this calculator helps you size.",
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
                            Find your single points of failure before they find you
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            If this number is bigger than you&apos;re comfortable with, the next step is a 20-minute call. We&apos;ll map where your system breaks, what closing each gap is worth against your downtime cost, and the cheapest path to the uptime you actually need.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach out directly: <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> &middot; <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Resilience Call" source="downtime-cost-calculator" service="Cloud Infrastructure" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
