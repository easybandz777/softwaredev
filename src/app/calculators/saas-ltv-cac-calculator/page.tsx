import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Calculator, ArrowRight, Check, Zap, Shield, Clock } from "lucide-react";
import { SaasLtvCacCalculator } from "./SaasLtvCacCalculator";

export const metadata: Metadata = {
    title: "SaaS LTV:CAC Calculator — Lifetime Value & Payback | QUANT LAB USA",
    description:
        "Turn ARPU, gross margin, monthly churn, and CAC into customer lifetime, LTV, the LTV:CAC ratio, and CAC payback months — with a health read. Free, in-browser.",
    alternates: { canonical: "https://quantlabusa.dev/calculators/saas-ltv-cac-calculator" },
    openGraph: {
        title: "SaaS LTV:CAC Calculator | Lifetime Value & Payback | QUANT LAB USA",
        description:
            "Enter ARPU, gross margin, monthly churn, and CAC to get lifetime, LTV, the LTV:CAC ratio, and CAC payback — with a plain-English health read, live in your browser.",
        url: "https://quantlabusa.dev/calculators/saas-ltv-cac-calculator",
        type: "website",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "SaaS LTV:CAC Calculator | Lifetime Value & Payback | QUANT LAB USA",
        description:
            "Enter ARPU, gross margin, monthly churn, and CAC to get lifetime, LTV, the LTV:CAC ratio, and CAC payback — with a plain-English health read.",
    },
};

const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "SaaS LTV:CAC Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/calculators/saas-ltv-cac-calculator",
    description:
        "Interactive calculator that turns ARPU, gross-margin percentage, monthly churn, and customer acquisition cost into customer lifetime, lifetime value, the LTV to CAC ratio, and CAC payback period in real time.",
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
            name: "How is LTV calculated from churn and gross margin?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We estimate the average customer lifetime as one divided by your monthly churn rate, which gives the expected number of months a customer stays. Lifetime value is then ARPU multiplied by gross-margin percentage multiplied by that lifetime. Using gross margin rather than raw revenue is what makes LTV honest — it counts the contribution a customer actually leaves behind after the cost of serving them, not the top-line they pay.",
            },
        },
        {
            "@type": "Question",
            name: "What is a healthy LTV:CAC ratio?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The widely cited benchmark is 3:1 — every dollar of customer acquisition cost should return about three dollars of gross-margin lifetime value. Below roughly 1:1 you lose money on every customer. Between 1:1 and 3:1 the model works but has thin headroom. Far above 3:1 (say 5:1 or more) often means you are under-investing in growth and could profitably spend more to acquire customers faster. The ratio is a guide, not a law — it has to be read alongside payback period and your cash position.",
            },
        },
        {
            "@type": "Question",
            name: "Why does CAC payback period matter as much as the ratio?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The LTV:CAC ratio tells you whether a customer is profitable eventually; the payback period tells you how long your cash is tied up before that customer repays what you spent to acquire them. We compute payback as CAC divided by monthly gross-margin contribution per customer. A great ratio with an 18-month payback can still starve a young company of cash, because you are fronting acquisition costs far ahead of recovering them. Most efficient SaaS businesses target payback under 12 months.",
            },
        },
        {
            "@type": "Question",
            name: "How do I improve LTV:CAC without just spending less on marketing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The most durable levers are on the LTV side, not the CAC side. Reducing churn extends lifetime and compounds directly into LTV. Improving gross margin — through more efficient infrastructure, automation, or right-sized support — lifts the contribution every customer leaves. Expansion revenue from upgrades and usage growth raises effective ARPU over time. Cutting acquisition spend can improve the ratio on paper, but tightening the product, billing, and retention experience is what makes the economics structurally better. That product and infrastructure work is exactly what we do.",
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
        { "@type": "ListItem", position: 3, name: "SaaS LTV:CAC Calculator", item: "https://quantlabusa.dev/calculators/saas-ltv-cac-calculator" },
    ],
};

export default function SaasLtvCacCalculatorPage() {
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
                        <li className="text-gray-300">SaaS LTV:CAC</li>
                    </ol>
                </nav>

                {/* Hero */}
                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                        <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        SaaS LTV:CAC Calculator — Lifetime Value &amp; Payback in 60 Seconds
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Enter ARPU, gross margin, monthly churn, and your customer acquisition cost. Get expected customer lifetime, gross-margin LTV, the LTV:CAC ratio, and CAC payback months — plus a plain-English read on whether your unit economics are healthy. Built by the team that ships the <Link href="/services" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">product and billing systems</Link> these numbers depend on.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>60-second read</span></div>
                        <div className="flex items-center gap-2"><Zap className="w-4 h-4 text-sky-400" /><span>LTV, ratio &amp; payback live</span></div>
                        <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-amber-400" /><span>100% in your browser</span></div>
                    </div>
                </AnimatedSection>

                {/* Calculator widget */}
                <AnimatedSection className="mb-16">
                    <SaasLtvCacCalculator />
                </AnimatedSection>

                {/* Long-form SEO copy */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        How this SaaS LTV:CAC calculator works
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Three relationships decide whether a subscription business is fundamentally sound: how long customers stay, how much margin they leave while they do, and how much it cost to acquire them. This calculator turns four inputs — ARPU, gross-margin percentage, monthly churn, and CAC — into the four numbers investors and operators actually look at: expected customer lifetime, lifetime value (LTV), the LTV:CAC ratio, and the CAC payback period. Everything computes live in your browser as you type.
                        </p>
                        <p>
                            The math is intentionally transparent. <strong>Average lifetime</strong> is one divided by your monthly churn rate — at 3% monthly churn the average customer stays about 33 months. <strong>LTV</strong> is ARPU multiplied by gross-margin percentage multiplied by that lifetime, so it measures the contribution a customer leaves after the cost of serving them, not raw revenue. <strong>LTV:CAC</strong> is that lifetime value divided by your acquisition cost. <strong>CAC payback</strong> is acquisition cost divided by the monthly gross-margin contribution per customer — the number of months before a new customer repays what you spent to win them.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Reading the LTV:CAC ratio honestly</h3>
                        <p>
                            The famous benchmark is 3:1 — three dollars of gross-margin lifetime value for every dollar of acquisition cost. But the ratio is a guide, not a verdict. Below 1:1 you lose money on every customer and growth makes the hole deeper. Between 1:1 and 3:1 the model works with thin headroom. Surprisingly, a ratio well above 5:1 is often a warning that you are under-investing in growth — you could profitably spend more to acquire customers faster. The ratio only means something when you read it next to payback period and your cash runway.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">Why payback period is the cash-flow truth-teller</h3>
                        <p>
                            A healthy ratio tells you a customer is profitable eventually. Payback tells you how long your cash is locked up getting there. A 4:1 ratio with an 18-month payback can still strangle a young company, because you are fronting acquisition spend far ahead of recovering it. Efficient SaaS businesses generally aim for payback under twelve months — fast enough that recovered cash recycles into the next cohort of customers rather than forcing you to raise to fund growth. Watching payback alongside the ratio is how you avoid a model that looks great on a slide and runs out of money in practice.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">The levers that actually move the economics</h3>
                        <p>
                            The most durable improvements come from the LTV side. Cutting churn extends lifetime and compounds straight into LTV — which is why retention work usually beats acquisition work dollar for dollar. Lifting gross margin through more efficient infrastructure, automation, and right-sized support raises the contribution every customer leaves behind. Expansion revenue from upgrades and usage growth pushes effective ARPU up over time. Trimming acquisition spend flatters the ratio on paper, but tightening the product, billing, and retention experience is what makes the economics structurally better. Our <Link href="/blog" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">blog</Link> covers the retention and billing tactics in depth, and the <Link href="/glossary" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">glossary</Link> defines every term here.
                        </p>
                        <h3 className="text-xl font-bold text-white mt-8 mb-3">When unit economics become an engineering problem</h3>
                        <p>
                            Churn, margin, and expansion revenue are not just go-to-market metrics — they are downstream of how the product and billing actually work. Failed-payment recovery, clean upgrade and downgrade flows, usage-based pricing that captures expansion, and infrastructure that scales sub-linearly with customers all show up directly in this calculator. That is the layer we build. If your LTV:CAC or payback is telling you something is off, the fix often lives in the product and billing systems underneath the numbers — which is exactly where our <Link href="/services" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">software development practice</Link> works.
                        </p>
                    </div>
                </AnimatedSection>

                {/* What you'll get */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you&apos;ll get</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Expected customer lifetime derived from your monthly churn rate",
                            "Gross-margin LTV — contribution, not raw revenue",
                            "The LTV:CAC ratio against the 3:1 benchmark",
                            "CAC payback period in months, the cash-flow truth-teller",
                            "A plain-English health read on whether the economics work",
                            "Zero network calls — every figure is computed locally in your browser",
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
                        <Link href="/calculators/saas-pricing-calculator" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">SaaS Pricing Calculator</p>
                            <p className="text-xs text-gray-400">Model the tiers and ARPU that feed straight into your LTV.</p>
                        </Link>
                        <Link href="/calculators/cloud-hosting-cost-calculator" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">Cloud Hosting Cost Calculator</p>
                            <p className="text-xs text-gray-400">Estimate the infrastructure cost that shapes your gross margin.</p>
                        </Link>
                        <Link href="/tools" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">All Free Tools &amp; Calculators</p>
                            <p className="text-xs text-gray-400">Browse the full set of free estimators built by QUANT LAB USA.</p>
                        </Link>
                        <Link href="/services" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                            <p className="text-sm font-semibold text-white mb-1">SaaS Product &amp; Billing Engineering</p>
                            <p className="text-xs text-gray-400">Retention, expansion, and margin — built into the product itself.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                {/* FAQ */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "How is LTV calculated from churn and gross margin?",
                                a: "We estimate the average customer lifetime as one divided by your monthly churn rate, which gives the expected number of months a customer stays. Lifetime value is then ARPU multiplied by gross-margin percentage multiplied by that lifetime. Using gross margin rather than raw revenue is what makes LTV honest — it counts the contribution a customer actually leaves behind after the cost of serving them, not the top-line they pay.",
                            },
                            {
                                q: "What is a healthy LTV:CAC ratio?",
                                a: "The widely cited benchmark is 3:1 — every dollar of customer acquisition cost should return about three dollars of gross-margin lifetime value. Below roughly 1:1 you lose money on every customer. Between 1:1 and 3:1 the model works but has thin headroom. Far above 3:1 (say 5:1 or more) often means you are under-investing in growth and could profitably spend more to acquire customers faster. The ratio is a guide, not a law — it has to be read alongside payback period and your cash position.",
                            },
                            {
                                q: "Why does CAC payback period matter as much as the ratio?",
                                a: "The LTV:CAC ratio tells you whether a customer is profitable eventually; the payback period tells you how long your cash is tied up before that customer repays what you spent to acquire them. We compute payback as CAC divided by monthly gross-margin contribution per customer. A great ratio with an 18-month payback can still starve a young company of cash, because you are fronting acquisition costs far ahead of recovering them. Most efficient SaaS businesses target payback under 12 months.",
                            },
                            {
                                q: "How do I improve LTV:CAC without just spending less on marketing?",
                                a: "The most durable levers are on the LTV side, not the CAC side. Reducing churn extends lifetime and compounds directly into LTV. Improving gross margin — through more efficient infrastructure, automation, or right-sized support — lifts the contribution every customer leaves. Expansion revenue from upgrades and usage growth raises effective ARPU over time. Cutting acquisition spend can improve the ratio on paper, but tightening the product, billing, and retention experience is what makes the economics structurally better. That product and infrastructure work is exactly what we do.",
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
                            Fix the economics where they actually live — in the product
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            If your LTV:CAC or payback is telling you something is off, the lever is usually churn, margin, or expansion — all downstream of how the product and billing work. Book a 20-minute call and we&apos;ll pressure-test the systems behind your unit economics.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach out directly: <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Unit-Economics Call" source="saas-ltv-cac-calculator" service="SaaS Platform Development" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
