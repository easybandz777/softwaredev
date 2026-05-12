import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { CreditCard, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom Stripe Integration Consulting | QuantLab",
    description:
        "Custom Stripe development beyond hosted Checkout — Connect marketplaces, complex subscriptions, custom webhooks, ERP/QBO sync. Founder-led. Free scoping call.",
    alternates: { canonical: "https://quantlabusa.dev/services/stripe-integration" },
    openGraph: {
        title: "Custom Stripe Integration That Goes Beyond Hosted Checkout",
        description:
            "Stripe Connect, multi-currency, custom subscription proration, tax handling, idempotent webhooks, and QuickBooks/ERP sync. Built around your business model.",
        url: "https://quantlabusa.dev/services/stripe-integration",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Stripe Integration That Goes Beyond Hosted Checkout",
        description:
            "Stripe Connect, multi-currency, custom subscription proration, idempotent webhooks, QuickBooks/ERP sync. Founder-led builds.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Stripe Integration Consulting",
    name: "Custom Stripe Integration & Development",
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
        "Custom Stripe integration consulting and development for businesses that have outgrown Stripe Checkout. Stripe Connect marketplaces, multi-currency, complex subscription proration, custom tax handling, idempotent webhook processing, retry logic, and ERP/QuickBooks Online sync.",
    url: "https://quantlabusa.dev/services/stripe-integration",
    offers: {
        "@type": "Offer",
        priceRange: "$6,000-$60,000",
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
            name: "We already use Stripe Billing — what does custom Stripe development add?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Stripe Billing handles the easy 80%. Custom development covers the edge cases — hybrid SaaS + services pricing, mid-cycle plan changes, custom invoice formats, marketplace payouts, and accounting sync. We add what Stripe's hosted product cannot do for your model.",
            },
        },
        {
            "@type": "Question",
            name: "Will the integration survive Stripe API version changes?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We pin API versions explicitly and run a quarterly review against Stripe's changelog. Upgrade work is small and scheduled, not surprise breakage.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate us from Recurly, Chargebee, or Paddle?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Migration is part of the build — subscriptions, customers, payment methods, and historical invoices are brought over with reconciliation against your existing ledger.",
            },
        },
        {
            "@type": "Question",
            name: "Do you handle the QuickBooks Online side too?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We have shipped multiple Stripe → QuickBooks Online sync layers. The Bridgepointe Painting build is our reference architecture, closing month-end from three days to thirty minutes.",
            },
        },
        {
            "@type": "Question",
            name: "PCI scope — what are we on the hook for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "If we use Stripe Elements or Checkout, you stay in SAQ A — minimal PCI scope. Card data never touches your servers. We design the architecture to keep your compliance footprint as small as possible.",
            },
        },
    ],
};

export default function StripeIntegrationPage() {
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
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Custom Stripe Integration</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-400 mb-6">
                        <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Stripe Integration That Goes Beyond Hosted Checkout
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Stripe's docs are good. Real business problems are messy. We build the 40% of payment logic that Stripe Checkout and Billing can't handle — Connect marketplaces, custom subscription proration, idempotent webhooks, and accounting sync.
                    </p>
                    <ConsultationCTA label="Scope a Stripe Build" service="Stripe Integration" source="services-stripe" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When off-the-shelf Stripe breaks</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Stripe Checkout and Billing get you 60-80% of the way. The edge cases are where it falls down. You have annual contracts billed monthly with mid-cycle upgrades. You run a Stripe Connect marketplace and need platform fees, payouts, and 1099 reporting tied to your own ledger. You sell across borders and need multi-currency presentment with tax handling that respects nexus rules. You issue partial refunds that have to land on the right invoice line item, then sync to QuickBooks Online with the right account code.
                        </p>
                        <p>
                            Every one of these is a Stripe API call away — but stringing them together correctly takes engineering, not configuration. Hosted Stripe is great for hosted-Stripe-shaped problems. The moment your billing model has a wrinkle, you need custom code, and that is what Stripe integration consulting actually means.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build</h2>
                    <ul className="space-y-3">
                        {[
                            "Custom checkout UIs (Stripe Elements + Payment Intents) when hosted Checkout breaks your conversion funnel",
                            "Stripe Connect marketplaces — onboarding, transfers, application fees, 1099-K reporting",
                            "Complex subscription proration — mid-cycle upgrades, hybrid usage-based + flat, multi-tier with credit",
                            "Idempotent webhook processing with retry queues, signed endpoints, and audit logging",
                            "Multi-currency presentment and Stripe Tax integration with custom nexus rules",
                            "QuickBooks Online / Xero / NetSuite sync — invoices, payments, refunds, line-item accuracy",
                            "Customer self-serve portals on top of the Billing Portal API for upgrades, seat management, and invoicing",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Methodology</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We start with the cash-flow diagram — who pays whom, when, in what currency, against what document. From there we map every state transition (paid, partial, refunded, disputed, void) to a Stripe event. Then we build, test in Stripe's test mode against fixture scenarios, and run a side-by-side production parity check before cutover.
                        </p>
                        <p>
                            PostgreSQL is the source-of-truth ledger — not Stripe. Stripe is the payment processor; your database is the system of record. Webhooks are processed idempotently with a deduplication table so a Stripe retry never double-applies a refund. Failed webhooks are queued, retried with exponential backoff, and surface in an admin dashboard if they fail terminally.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference build — Bridgepointe Painting</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/work/bridgepointe-painting" className="text-violet-400 hover:underline">Bridgepointe Painting</Link> needed Stripe payments that flowed directly into QuickBooks Online with line-item accuracy, retainer accounting, and per-job profitability reporting. We built a custom Stripe + QuickBooks Online sync layer that closed their month-end from three days to thirty minutes. Webhooks update QBO in real time, partial payments land on the right invoice line, and refunds flow back through both systems automatically. That same architecture pattern serves every Stripe + ERP sync we ship.
                        </p>
                        <p>
                            Stripe integration consulting served from <Link href="/software-development-macon-ga" className="text-violet-400 hover:underline">Macon, GA</Link>, with clients across <Link href="/software-development-atlanta-ga" className="text-violet-400 hover:underline">Atlanta</Link>, <Link href="/software-development-austin-tx" className="text-violet-400 hover:underline">Austin</Link>, and the rest of the US.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Stripe API + Webhooks",
                            "Stripe Connect",
                            "Stripe Elements",
                            "Next.js + Node API",
                            "PostgreSQL ledger",
                            "QuickBooks Online API",
                            "Xero API",
                            "Redis queues",
                            "Docker",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fixed-fee per integration. Single-purpose (subscriptions or invoicing): $6k–$14k. Full Stripe + QuickBooks sync: $12k–$28k. Stripe Connect marketplace: $22k–$60k. Contact for a scoped quote.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "We already use Stripe Billing — what does custom Stripe development add?",
                                a: "Stripe Billing handles the easy 80%. Custom development covers the edge cases — hybrid SaaS + services pricing, mid-cycle plan changes, custom invoice formats, marketplace payouts, and accounting sync. We add what Stripe's hosted product cannot do for your model.",
                            },
                            {
                                q: "Will the integration survive Stripe API version changes?",
                                a: "Yes. We pin API versions explicitly and run a quarterly review against Stripe's changelog. Upgrade work is small and scheduled, not surprise breakage.",
                            },
                            {
                                q: "Can you migrate us from Recurly, Chargebee, or Paddle?",
                                a: "Yes. Migration is part of the build — subscriptions, customers, payment methods, and historical invoices are brought over with reconciliation against your existing ledger.",
                            },
                            {
                                q: "Do you handle the QuickBooks Online side too?",
                                a: "Yes. We have shipped multiple Stripe → QuickBooks Online sync layers. The Bridgepointe Painting build is our reference architecture, closing month-end from three days to thirty minutes.",
                            },
                            {
                                q: "PCI scope — what are we on the hook for?",
                                a: "If we use Stripe Elements or Checkout, you stay in SAQ A — minimal PCI scope. Card data never touches your servers. We design the architecture to keep your compliance footprint as small as possible.",
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
                            { slug: "subscription-billing", title: "Subscription Billing", desc: "Custom recurring billing for SaaS that outgrew Stripe Billing." },
                            { slug: "license-server", title: "Custom License Server", desc: "Tie Stripe entitlement state to your software's feature flags." },
                            { slug: "custom-crm-development", title: "Custom CRM Development", desc: "Wire billing into the CRM record from day one." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-violet-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Have a Stripe edge case nobody else can solve?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a scoping call. We'll tell you straight whether it's a build or a config change.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="Stripe Integration" source="services-stripe" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
