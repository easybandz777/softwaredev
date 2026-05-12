import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Calculator, ArrowRight, Check, Zap, Shield, Clock } from "lucide-react";
import { StripeCalculator } from "./StripeCalculator";

export const metadata: Metadata = {
    title: "Stripe Integration Cost Calculator | QUANT LAB USA",
    description:
        "Estimate your custom Stripe integration cost & timeline in 60 seconds. From simple checkout to Stripe Connect marketplaces.",
    alternates: { canonical: "https://quantlabusa.dev/calculators/stripe-cost" },
    openGraph: {
        title: "Stripe Integration Cost Calculator | QUANT LAB USA",
        description:
            "Estimate your custom Stripe integration cost & timeline in 60 seconds. From simple checkout to Stripe Connect marketplaces.",
        url: "https://quantlabusa.dev/calculators/stripe-cost",
        type: "website",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Stripe Integration Cost Calculator | QUANT LAB USA",
        description:
            "Estimate your custom Stripe integration cost & timeline in 60 seconds. From simple checkout to Stripe Connect marketplaces.",
    },
};

const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Stripe Integration Cost Calculator",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/calculators/stripe-cost",
    description:
        "Interactive calculator that estimates custom Stripe integration cost and timeline based on volume, features, and complexity.",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
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
            name: "How accurate is this Stripe integration cost calculator?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The estimate is grounded in real project data from QuantLab USA builds and assumes a senior engineering rate around $150/hr. It's a defensible mid-range starting point for board or co-founder conversations. The final scope is always nailed down in a 20-minute call.",
            },
        },
        {
            "@type": "Question",
            name: "Why is Stripe Connect so much more expensive than basic checkout?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Connect introduces marketplaces, multi-party payouts, KYC for connected accounts, fee splits, and reverse transfers. That's typically 2-4 extra weeks of engineering plus a longer testing cycle to cover the edge cases between platform, seller, and buyer.",
            },
        },
        {
            "@type": "Question",
            name: "Does this estimate include Stripe Tax or TaxJar integration work?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Stripe Tax is the cheapest to wire up (it's first-party). TaxJar adds an extra API layer plus reconciliation. In-house tax logic is by far the most expensive — we usually steer founders away from it unless there's a compliance reason.",
            },
        },
        {
            "@type": "Question",
            name: "What if I already have a half-finished Stripe integration?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We do audits for that exact case. Most half-built integrations are missing webhook idempotency, dunning logic, or proper subscription state management. We can fix what's there or rebuild the broken pieces — usually for 40-60% of a full build.",
            },
        },
    ],
};

export default function StripeCostCalculatorPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6 max-w-5xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-500">
                        <li>
                            <Link href="/" className="hover:text-sky-400 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">
                            ›
                        </li>
                        <li className="text-gray-300">Calculators</li>
                        <li aria-hidden="true" className="text-gray-700">
                            ›
                        </li>
                        <li className="text-gray-300">Stripe Integration Cost</li>
                    </ol>
                </nav>

                {/* Hero */}
                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                        <Calculator className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Stripe Integration Cost Calculator — Estimate in 60 Seconds
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Plug in your scope. Get a real, defensible hours and dollar range for your custom Stripe build — subscriptions, multi-currency, Stripe Connect, tax handling, the works. Walk into your next board or co-founder meeting with a number you can stand behind.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-emerald-400" />
                            <span>60-second estimate</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-sky-400" />
                            <span>Based on real QuantLab project data</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-amber-400" />
                            <span>No email required to see the number</span>
                        </div>
                    </div>
                </AnimatedSection>

                {/* Calculator widget */}
                <AnimatedSection className="mb-16">
                    <StripeCalculator />
                </AnimatedSection>

                {/* What you'll get */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        What you&apos;ll get
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "An hours range (low–high) tuned to the scope you selected",
                            "A defensible dollar range at a senior US engineering rate (~$150/hr)",
                            "Plain-English complexity drivers — what's actually moving the number",
                            "A recommended path: DIY, freelancer, agency, or QuantLab build",
                            "A PDF breakdown delivered to your inbox (optional — drop the form if you don't need it)",
                            "A 20-minute Stripe scoping call on the calendar if you want a second pair of eyes",
                        ].map((item) => (
                            <div
                                key={item}
                                className="flex gap-3 rounded-xl border border-white/5 bg-[#0d1526]/60 p-4"
                            >
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* Social proof */}
                <AnimatedSection className="mb-16">
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526]/80 to-[#0a0f1e]/80 p-8 md:p-10">
                        <p className="text-xs uppercase tracking-widest text-emerald-400 mb-3">
                            Real Project · Recent Build
                        </p>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Bridgepointe Painting — Stripe + QuickBooks Online integration
                        </h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            We wired Stripe payments into Bridgepointe&apos;s job-management workflow with bi-directional QuickBooks Online sync. Customer pays an invoice in Stripe — QBO updates the books automatically. Webhook handling is idempotent so a Stripe replay never creates a duplicate invoice in QBO. The team stopped reconciling payments by hand and got hours of their week back.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/5">
                            <div>
                                <p className="text-2xl font-bold text-white">~6 weeks</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Build to live</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">0 dup invoices</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Since go-live</p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-white">~8 hrs/wk</p>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">Bookkeeping saved</p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>

                {/* FAQ */}
                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "How accurate is this Stripe integration cost calculator?",
                                a: "The estimate is grounded in real project data from QuantLab USA builds and assumes a senior engineering rate around $150/hr. It's a defensible mid-range starting point for board or co-founder conversations. The final scope is always nailed down in a 20-minute call.",
                            },
                            {
                                q: "Why is Stripe Connect so much more expensive than basic checkout?",
                                a: "Connect introduces marketplaces, multi-party payouts, KYC for connected accounts, fee splits, and reverse transfers. That's typically 2–4 extra weeks of engineering plus a longer testing cycle to cover the edge cases between platform, seller, and buyer.",
                            },
                            {
                                q: "Does this estimate include Stripe Tax or TaxJar integration work?",
                                a: "Yes. Stripe Tax is the cheapest to wire up (it's first-party). TaxJar adds an extra API layer plus reconciliation. In-house tax logic is by far the most expensive — we usually steer founders away from it unless there's a compliance reason.",
                            },
                            {
                                q: "What if I already have a half-finished Stripe integration?",
                                a: "We do audits for that exact case. Most half-built integrations are missing webhook idempotency, dunning logic, or proper subscription state management. We can fix what's there or rebuild the broken pieces — usually for 40–60% of a full build.",
                            },
                        ].map((item) => (
                            <details
                                key={item.q}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 open:bg-[#0d1526]"
                            >
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
                            Skip the form — book a 20-min Stripe call
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                            If your scope is anything past Stripe Checkout, the cheapest way to get a real number is 20 minutes on a call. We&apos;ll walk through your stack, your billing model, and the gnarly edges — and you&apos;ll leave with a number you can defend.
                        </p>
                        <ConsultationCTA label="Book a 20-min Stripe Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
