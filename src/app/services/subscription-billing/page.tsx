import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Repeat, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom Subscription Billing Development | QuantLab",
    description:
        "Custom recurring billing for SaaS that outgrew Stripe Billing — usage-based hybrid, custom dunning, partial refunds, mid-cycle proration, MRR/ARR analytics.",
    alternates: { canonical: "https://quantlabusa.dev/services/subscription-billing" },
    openGraph: {
        title: "Custom Subscription Billing Development for SaaS That Outgrew Stripe Billing",
        description:
            "Usage-based hybrid plans, custom dunning sequences, partial refunds and credits, prorated mid-cycle upgrades, MRR/ARR analytics. Built around your billing model.",
        url: "https://quantlabusa.dev/services/subscription-billing",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Subscription Billing Development",
        description:
            "Recurring billing for SaaS that outgrew Stripe Billing. Hybrid usage models, custom dunning, MRR analytics.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Subscription Billing Development",
    name: "Custom Subscription Billing & Recurring Revenue System Development",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#org",
    },
    areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "City", name: "Atlanta, GA" },
        { "@type": "City", name: "Macon, GA" },
        { "@type": "City", name: "Savannah, GA" },
        { "@type": "City", name: "Augusta, GA" },
        { "@type": "City", name: "Columbus, GA" },
        { "@type": "City", name: "Miami, FL" },
        { "@type": "City", name: "Austin, TX" },
        { "@type": "City", name: "Dallas, TX" },
        { "@type": "City", name: "Chicago, IL" },
        { "@type": "City", name: "Seattle, WA" },
        { "@type": "City", name: "New York, NY" },
        { "@type": "City", name: "San Francisco, CA" },
        { "@type": "City", name: "Charlotte, NC" },
        { "@type": "City", name: "Nashville, TN" },
    ],
    description:
        "Custom subscription billing and recurring revenue system development for SaaS companies that outgrew Stripe Billing. Hybrid usage-based plans, custom dunning, mid-cycle proration, partial refunds with credits, multi-tier upgrades, and MRR/ARR analytics.",
    url: "https://quantlabusa.dev/services/subscription-billing",
    offers: {
        "@type": "Offer",
        priceRange: "$10,000-$40,000",
        priceCurrency: "USD",
        description: "Contact for quote",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When should we move off Stripe Billing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "When you're working around it more than working with it. Common triggers: hybrid usage-based plus flat plans, dunning sequences that need custom logic, mid-cycle upgrades with credit allocation, partial refunds that have to land on specific invoice lines, or MRR/ARR reporting that doesn't match how Stripe categorizes revenue. You don't have to leave Stripe — you build a custom layer on top.",
            },
        },
        {
            "@type": "Question",
            name: "Do you replace Stripe or build on top of it?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Build on top. Stripe is still the payment processor — best card success rates, best dispute handling, best PCI footprint. We replace Stripe Billing's recurring-revenue layer with custom code that fits your model, while keeping Stripe as the payment rail.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle mid-cycle plan changes?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Proration calculated against your billing model, not Stripe's default. Upgrades can credit unused days, charge the difference immediately, or queue for next cycle — your call. Downgrades respect contract terms and never charge a customer twice. All transitions are audited in your PostgreSQL ledger.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build MRR and ARR analytics on top of this?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Custom MRR/ARR analytics is one of the main reasons clients move off hosted billing. We expose new MRR, expansion, contraction, churn, and reactivation as SQL views you can pipe into any BI tool — Metabase, Looker, Hex, or a simple internal dashboard.",
            },
        },
        {
            "@type": "Question",
            name: "What about dunning and failed payments?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Custom dunning sequences with branded emails, in-app banners, configurable retry schedules, smart retries via Stripe, and a graceful reactivation flow that doesn't trap customers on a support ticket. Good dunning is a revenue lever — typically 1-3% MRR recovery beyond what default Stripe dunning catches.",
            },
        },
    ],
};

export default function SubscriptionBillingPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-500">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Subscription Billing</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 mb-6">
                        <Repeat className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Subscription Billing Development for SaaS That Outgrew Stripe Billing
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Stripe Billing is great until it isn't. When your plans are usage-based hybrids, your dunning needs custom logic, and your finance team needs MRR that matches reality — you build the custom layer on top of Stripe.
                    </p>
                    <ConsultationCTA label="Scope a Billing Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Stripe Billing limits hit</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Stripe Billing handles the common patterns well. Where it strains is the moment your plans get even slightly weird. Usage-based hybrid plans where a base seat fee combines with metered usage that has tiered overages and a cap. Custom dunning where you need a branded sequence, in-app banners, and a hand-off to your CSM team instead of Stripe's default emails. Partial refunds and credits that have to land on specific invoice line items and feed back into customer-level credit balances. Multi-tier upgrades with prorated mid-cycle changes that respect contract floors. MRR and ARR analytics that group revenue the way your finance team needs to see it — not the way Stripe categorizes invoices by default.
                        </p>
                        <p>
                            You don't have to leave Stripe to fix this. You build a custom subscription billing layer on top of Stripe's payment rails, with PostgreSQL as the source-of-truth ledger and Stripe as the processor. Your billing logic, your data, your reports.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build</h2>
                    <ul className="space-y-3">
                        {[
                            "Custom plan engine — flat, per-seat, usage-based, hybrid, and contract-with-overage models in one schema",
                            "Prorated mid-cycle upgrades and downgrades with configurable credit allocation",
                            "Partial refunds, credit notes, and customer credit balances that sync to Stripe and your accounting system",
                            "Custom dunning sequences with branded emails, in-app banners, and graceful reactivation flows",
                            "Usage metering pipeline with idempotent event ingestion and end-of-period aggregation",
                            "MRR / ARR / expansion / contraction / churn analytics exposed as SQL views",
                            "Customer self-serve portal for plan changes, seat management, invoice downloads, and payment method updates",
                            "Webhook-driven entitlement updates so feature access reflects billing state in real time",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Methodology</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We start with the plan matrix — every active SKU, every grandfathered legacy plan, every promotional bundle, and every state a customer can be in (active, trial, past_due, canceled, paused). From there we model the billing events: cycle close, usage aggregation, proration, credit application, refund routing. Each event maps to a database transition, and every transition is auditable.
                        </p>
                        <p>
                            Stripe stays in the picture for payment processing, dispute handling, and PCI scope. Your custom layer owns the subscription state machine, the MRR ledger, and the customer-facing UX. Migrations from Stripe Billing, Chargebee, Recurly, or Paddle are part of the build — historical invoices, subscriptions, and customer balances come over cleanly.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Stripe Payment Intents",
                            "Next.js + Node API",
                            "PostgreSQL ledger",
                            "Prisma / Drizzle",
                            "Redis usage metering",
                            "QuickBooks / Xero sync",
                            "Metabase / Looker views",
                            "Resend / Postmark dunning",
                            "Docker",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference patterns</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Same architecture pattern as our <Link href="/services/stripe-integration" className="text-emerald-400 hover:underline">Stripe integration consulting</Link> work, with the subscription state machine and MRR ledger layered on top. See the <Link href="/work/bridgepointe-painting" className="text-emerald-400 hover:underline">Bridgepointe Painting case study</Link> for the QuickBooks Online side of the reconciliation story.
                        </p>
                        <p>
                            Custom subscription billing development served from <Link href="/software-development-macon-ga" className="text-emerald-400 hover:underline">Macon, GA</Link>, with clients across <Link href="/software-development-atlanta-ga" className="text-emerald-400 hover:underline">Atlanta</Link>, <Link href="/software-development-austin-tx" className="text-emerald-400 hover:underline">Austin</Link>, and beyond.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When should we move off Stripe Billing?",
                                a: "When you're working around it more than working with it. Common triggers: hybrid usage-based plus flat plans, dunning sequences that need custom logic, mid-cycle upgrades with credit allocation, partial refunds that have to land on specific invoice lines, or MRR/ARR reporting that doesn't match how Stripe categorizes revenue. You don't have to leave Stripe — you build a custom layer on top.",
                            },
                            {
                                q: "Do you replace Stripe or build on top of it?",
                                a: "Build on top. Stripe is still the payment processor — best card success rates, best dispute handling, best PCI footprint. We replace Stripe Billing's recurring-revenue layer with custom code that fits your model, while keeping Stripe as the payment rail.",
                            },
                            {
                                q: "How do you handle mid-cycle plan changes?",
                                a: "Proration calculated against your billing model, not Stripe's default. Upgrades can credit unused days, charge the difference immediately, or queue for next cycle — your call. Downgrades respect contract terms and never charge a customer twice. All transitions are audited in your PostgreSQL ledger.",
                            },
                            {
                                q: "Can you build MRR and ARR analytics on top of this?",
                                a: "Yes. Custom MRR/ARR analytics is one of the main reasons clients move off hosted billing. We expose new MRR, expansion, contraction, churn, and reactivation as SQL views you can pipe into any BI tool — Metabase, Looker, Hex, or a simple internal dashboard.",
                            },
                            {
                                q: "What about dunning and failed payments?",
                                a: "Custom dunning sequences with branded emails, in-app banners, configurable retry schedules, smart retries via Stripe, and a graceful reactivation flow that doesn't trap customers on a support ticket. Good dunning is a revenue lever — typically 1-3% MRR recovery beyond what default Stripe dunning catches.",
                            },
                        ].map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "The payment-rail half of the equation — webhooks, Connect, ERP sync." },
                            { slug: "license-server", title: "Custom License Server", desc: "Tie subscription state to per-customer feature flags and seat counts." },
                            { slug: "web-applications", title: "Next.js Development", desc: "Build the customer billing portal on the same stack." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-emerald-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Outgrew Stripe Billing? Build the right layer.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at (770) 652-1282 or book a 20-minute scope call to walk through your plan model. Founder-led from data model to deploy.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
