import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ShoppingCart, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom E-commerce Development | QuantLab USA",
    description:
        "Custom e-commerce development beyond Shopify — B2B wholesale, custom quoting, ERP/inventory sync, S&S Activewear API, custom checkout, admin dashboards.",
    alternates: { canonical: "https://quantlabusa.dev/industries/e-commerce" },
    openGraph: {
        title: "Custom E-commerce Development — Beyond What Shopify Can Do",
        description:
            "Headless commerce, custom storefronts, B2B wholesale, ERP/inventory syncs, and quote-to-cart workflows. Built when Shopify's limits hit.",
        url: "https://quantlabusa.dev/industries/e-commerce",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom E-commerce Development | QuantLab USA",
        description:
            "Custom Shopify alternatives — headless commerce, wholesale catalog sync, custom quoting, and admin dashboards.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom E-commerce Development",
    name: "Custom E-commerce Development",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom e-commerce development for brands that have outgrown Shopify, BigCommerce, and WooCommerce. Headless commerce on Next.js with Stripe checkout, wholesale catalog sync (S&S Activewear, SanMar, AlphaBroder), custom quoting, ERP and inventory integrations, and full admin operations dashboards.",
    url: "https://quantlabusa.dev/industries/e-commerce",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "When does Shopify stop being enough?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "When you need custom quoting, B2B wholesale tiers, live catalog sync from a distributor API, custom checkout flows, multi-currency with specific tax rules, ERP/inventory integrations, or workflows the Shopify app store does not cover well. Once you are paying for five apps to glue together something that still does not work, custom is usually cheaper inside two years.",
            },
        },
        {
            "@type": "Question",
            name: "Can you integrate with S&S Activewear, SanMar, or other wholesale APIs?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The HobbsPeak build runs live S&S Activewear catalog sync including pricing, inventory, color and style search, and the full headwear catalog ingest. Same pattern works for SanMar, AlphaBroder, and most distributor APIs.",
            },
        },
        {
            "@type": "Question",
            name: "Do you build B2B wholesale storefronts?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Wholesale-tier pricing, customer-specific catalogs, net-30 invoicing, quote-to-PO workflows, and approval routing are all standard patterns. We typically build wholesale and DTC in the same codebase with auth-gated views.",
            },
        },
        {
            "@type": "Question",
            name: "Will I own the code and the data?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Source code lives in your GitHub organization, the database is your Neon or Postgres instance, and there is no per-transaction platform tax. Unlike Shopify Plus, exit cost is the cost of a server migration — not rebuilding from scratch.",
            },
        },
    ],
};

export default function EcommerceIndustryPage() {
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
                        <li><Link href="/industries" className="hover:text-sky-400 transition-colors">Industries</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">E-commerce</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-pink-500 to-rose-400 mb-6">
                        <ShoppingCart className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom E-commerce Development — Beyond What Shopify Can Do
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Headless commerce on Next.js, live wholesale catalog sync, custom quoting, ERP and inventory integrations, and a real admin console — for brands that hit the Shopify ceiling and need the storefront to actually fit the business model.
                    </p>
                    <ConsultationCTA label="Scope an E-commerce Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Shopify limits hit, they hit hard</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Shopify and BigCommerce do the easy 70% of e-commerce well. The other 30% is where most growing brands live: custom quoting for configurable products, B2B wholesale with tiered pricing and net-terms invoicing, custom checkout and tax rules per jurisdiction, multi-currency with FX hedging, real-time inventory sync from a distributor API, and ERP or accounting integrations that go beyond what Shopify's app store can do.
                        </p>
                        <p>
                            You end up stitching together five apps that almost work, each charging a per-transaction or per-month fee, and the seams show. Quote forms email a PDF that nobody opens. Inventory drifts because the distributor sync is on a six-hour cron. The Shopify checkout cannot do the tax logic your CPA insists on. And the customer experience suffers because the storefront cannot follow the actual purchase flow.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for e-commerce operators</h2>
                    <ul className="space-y-3">
                        {[
                            "Custom storefronts on Next.js — server-rendered, fast on mobile, SEO-tuned",
                            "Headless commerce with Stripe checkout — Elements, Connect, or Checkout depending on the model",
                            "Live wholesale catalog sync — S&S Activewear, SanMar, AlphaBroder, custom distributor APIs",
                            "Custom quote systems — configurable products, decoration choices, artwork upload, digital proofs",
                            "B2B wholesale storefronts — tiered pricing, customer catalogs, net-terms invoicing, approval routing",
                            "Multi-currency and custom tax — destination-based rates, marketplace facilitator handling, exemption certificates",
                            "ERP and inventory integrations — NetSuite, QuickBooks, Xero, custom WMS",
                            "Full admin console — orders, customers, products, pricing, build sheets, analytics on one screen",
                            "Affiliate programs with dashboards, tracking, and payouts",
                            "Customer accounts with order history, reorder, artwork-on-file, and saved configurations",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference build: HobbsPeak</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/work/hobbspeak" className="text-pink-400 hover:underline">HobbsPeak</Link> is the reference build for custom-product e-commerce with deep wholesale catalog and artwork pipeline requirements. HobbsPeak is a family-owned West Georgia custom headwear and apparel brand serving construction crews, electricians, churches, schools, and growing companies across the Southeast.
                        </p>
                        <p>
                            A standard Shopify build could not handle the live wholesale catalog sync or the artwork-digitizing pipeline. QuantLab built HobbsPeak.com as a headless commerce platform on Next.js 16 + React 19: live S&amp;S Activewear catalog sync with full headwear ingest, color/style search, and inventory data; Stripe-powered checkout with webhook-driven order processing; a custom artwork pipeline combining background removal, OCR, raster-to-vector tracing, and font handling; customer accounts with order history and artwork on file; an affiliate program with dedicated dashboard and tracking; and a full admin console covering orders, customers, messages, inventory, products, pricing, build sheets, live build templates, the digitizer queue, and analytics.
                        </p>
                        <p>
                            Quote turnaround dropped from days to under 48 hours with most digital proofs returned same-day. The customer artwork-on-file portal turned repeat orders into two-click events. One platform now replaces five separate tools.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Stripe, payments, and reconciliation</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Custom e-commerce lives or dies on the payment layer. Our <Link href="/services/stripe-integration" className="text-pink-400 hover:underline">custom Stripe integration</Link> work covers the messy parts — partial refunds against the right invoice, subscription upgrades mid-cycle, Connect marketplace payouts, hybrid SaaS + product + services revenue, and accounting sync into QuickBooks Online or Xero so the books close cleanly every month.
                        </p>
                        <p>
                            For licensing, entitlement, and digital-product e-commerce — desktop apps, plugins, SaaS — see <Link href="/services/payments-invoicing-licensing" className="text-pink-400 hover:underline">payments, invoicing &amp; licensing</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "When does Shopify stop being enough?",
                                a: "When you need custom quoting, B2B wholesale tiers, live catalog sync from a distributor API, custom checkout flows, multi-currency with specific tax rules, ERP/inventory integrations, or workflows the Shopify app store does not cover well. Once you are paying for five apps to glue together something that still does not work, custom is usually cheaper inside two years.",
                            },
                            {
                                q: "Can you integrate with S&S Activewear, SanMar, or other wholesale APIs?",
                                a: "Yes. The HobbsPeak build runs live S&S Activewear catalog sync including pricing, inventory, color and style search, and the full headwear catalog ingest. Same pattern works for SanMar, AlphaBroder, and most distributor APIs.",
                            },
                            {
                                q: "Do you build B2B wholesale storefronts?",
                                a: "Yes. Wholesale-tier pricing, customer-specific catalogs, net-30 invoicing, quote-to-PO workflows, and approval routing are all standard patterns. We typically build wholesale and DTC in the same codebase with auth-gated views.",
                            },
                            {
                                q: "Will I own the code and the data?",
                                a: "Yes. Source code lives in your GitHub organization, the database is your Neon or Postgres instance, and there is no per-transaction platform tax. Unlike Shopify Plus, exit cost is the cost of a server migration — not rebuilding from scratch.",
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
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Subscriptions, Connect, custom checkout, and QuickBooks/Xero sync." },
                            { slug: "payments-invoicing-licensing", title: "Payments & Invoicing", desc: "Licensing, entitlement, and billing for digital and physical products." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Admin consoles, ops dashboards, and ERP-adjacent internal tools." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-pink-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-pink-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Build the storefront Shopify cannot.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at (770) 652-1282 or book a 20-minute scope call to walk through your catalog, checkout, and ops flow. Founder-led from the first call to the production deploy.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
