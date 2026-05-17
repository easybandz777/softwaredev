import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { ShoppingBag, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Shopify Alternative: Custom E-commerce 2026 | QUANT LAB USA",
    description:
        "Shopify fits most stores. For B2B wholesale, complex catalogs, custom workflows, or ERP-tied operations, custom e-commerce wins on cost and fit. 2026 comparison.",
    alternates: { canonical: "https://quantlabusa.dev/vs/shopify" },
    openGraph: {
        title: "Custom E-commerce Development vs Shopify | QUANT LAB USA",
        description:
            "When Shopify wins. When custom e-commerce wins. Real cost compounding and an honest comparison from a custom build shop.",
        url: "https://quantlabusa.dev/vs/shopify",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom E-commerce Development vs Shopify | QUANT LAB USA",
        description:
            "When Shopify wins. When custom e-commerce wins. A fair-minded breakdown of the math.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom E-commerce Development",
    name: "Custom E-commerce Development (Shopify Alternative Build)",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom e-commerce development as a Shopify alternative for B2B wholesale, complex catalog operations, multi-currency LATAM commerce, ERP-tied inventory, and custom subscription models that Shopify cannot model cleanly. Next.js + PostgreSQL + Stripe builds, client-owned source code.",
    url: "https://quantlabusa.dev/vs/shopify",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can you migrate us from Shopify to a custom e-commerce platform?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Product catalog, customer accounts, order history, and live subscriptions are exported through the Shopify Admin API and reconciled into the new schema. The old Shopify store can stay live during the cutover so revenue does not stop.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timeline for a custom e-commerce build?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "12 to 20 weeks for the first production release on a complex B2B build. Catalog ingest and Stripe wiring take 2 to 4 weeks, the storefront and checkout run 4 to 8 weeks, and the admin console and integrations take the rest.",
            },
        },
        {
            "@type": "Question",
            name: "Will the custom storefront rank in Google like Shopify does?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — usually better. We ship Next.js with full SSR/ISR, proper structured data, an automated sitemap, and Core Web Vitals in the green by default. SEO is built in, not a Liquid theme afterthought.",
            },
        },
        {
            "@type": "Question",
            name: "Who handles PCI scope on a custom build?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Stripe Elements or Checkout keeps you in SAQ A — the lowest PCI scope. No card data ever touches your servers. We document the boundary clearly so your auditor or insurer can sign off.",
            },
        },
    ],
};

const proCustom = [
    "B2B quoting, tiered pricing, and approval workflows as first-class features",
    "Live ERP / supplier API sync (S&S Activewear, NetSuite, QuickBooks)",
    "Custom checkout flows — multi-currency, custom tax logic, custom shipping",
    "Subscription and hybrid SaaS + product billing in one customer record",
    "You own the storefront, the database, and the integration layer",
];

const proShopify = [
    "Fastest path to a working storefront — minutes, not weeks",
    "Mature payment processing, fraud tooling, and app ecosystem",
    "Hosted checkout that handles PCI scope and edge cases for you",
    "Themes, drag-and-drop merchandising, and built-in marketing tools",
    "Predictable monthly cost that scales linearly with revenue",
];

export default function CustomEcommerceVsShopifyPage() {
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
                        <li className="text-gray-300">vs Shopify</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <ShoppingBag className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom E-commerce Development vs Shopify
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Shopify is the right answer for a lot of stores. For B2B wholesale, complex catalog work, custom checkout flows, and ERP-tied operations, custom e-commerce development usually wins on cost, fit, and speed of change. Here is the honest comparison.
                    </p>
                    <ConsultationCTA label="Scope a Custom E-com Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Shopify vs custom e-commerce: which should I choose?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Choose Shopify for drop-ship, simple product catalogs, brands under roughly $1M annual revenue, and any B2C with a clean order-to-shipping flow. Choose custom e-commerce for B2B wholesale with tiered pricing and quotes, ERP-tied operations requiring bidirectional sync, complex jurisdictional tax, or supplier-API integrations. The break-even moment is usually when Shopify Plus plus 3-5 essential apps exceeds $3,000 per month and the apps are fighting each other.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Quick verdict</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Scenario</th>
                                    <th className="px-4 py-3 border-b border-white/10">Best choice</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Drop-ship, simple B2C, &lt; $1M revenue, fast launch</td><td className="px-4 py-3 font-semibold text-white">Shopify</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">B2B wholesale, ERP-tied, supplier APIs, multi-currency tax</td><td className="px-4 py-3 font-semibold text-white">Custom e-commerce</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Keep Shopify checkout, build custom B2B layer on top</td><td className="px-4 py-3 font-semibold text-white">Hybrid (Hydrogen + custom)</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When Shopify is the right call</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Shopify earned its position. It is genuinely the best fit for drop-ship stores, simple product catalogs, brands doing under roughly $1M in annual revenue, B2C with a clean order-to-shipping flow, and any merchant who wants to be live this afternoon. The hosted platform handles payments, PCI scope, fraud, themes, app installs, and basic marketing in a way no first-week custom build can match.
                        </p>
                        <p>
                            If you are validating a brand, testing a product line, or running a straightforward B2C store, Shopify is almost always the right call. Same for stores whose differentiation lives in the product and the marketing, not in the operational backend.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where Shopify breaks</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Shopify hits a ceiling on a specific set of operations. B2B wholesale with tiered pricing, quote requests, and net-terms invoicing requires bolted-on apps that fight each other. Live supplier-API integrations like S&S Activewear or distributor catalogs are technically possible through custom Liquid and metafields, but the result is fragile and expensive to maintain. Custom checkout and tax workflows — especially multi-currency LATAM commerce, complex jurisdictional sales tax, or split-payment scenarios — push past what Shopify Plus checkout extensibility was designed for.
                        </p>
                        <p>
                            Custom inventory + ERP sync is the next failure mode. Once you need real bidirectional sync with NetSuite, QuickBooks Online, or a distributor warehouse, the Shopify app marketplace runs out of trustworthy options. Custom subscription and recurring-billing logic — anything Stripe Billing alone does not model cleanly, like hybrid product + service subscriptions, mid-cycle upgrades against a custom calendar, or member-tier pricing — is the same story.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">The real cost compounding</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A working Shopify Plus deployment for a mid-market B2B store tends to look like $2,000+ per month for Shopify Plus itself, $500 to $1,500 per month in apps (B2B quoting, advanced shipping, multi-currency, custom reporting, inventory sync), Liquid customization billed at $120 to $200 per hour by a Shopify Plus partner, plus theme development that gets re-done every couple of years. The monthly run rate climbs fast and stays climbing.
                        </p>
                        <p>
                            None of this is Shopify being a bad platform. It is the cost of stretching a hosted product into a use case it was not designed for. If your business fits inside the Shopify envelope, the monthly cost is excellent value for what you get. If it does not, you pay app fees forever for the privilege of not having control.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Side-by-side</h2>
                    <div className="overflow-x-auto rounded-xl border border-white/5 bg-[#0d1526]/60">
                        <table className="min-w-full text-sm">
                            <thead className="bg-[#0a1120]/80 text-gray-400">
                                <tr>
                                    <th className="px-4 py-3 text-left font-semibold">Dimension</th>
                                    <th className="px-4 py-3 text-left font-semibold text-white">Custom E-com (QuantLab)</th>
                                    <th className="px-4 py-3 text-left font-semibold">Shopify / Shopify Plus</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 text-gray-300">
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Pricing model</td>
                                    <td className="px-4 py-3">One-time build + hosting + retainer</td>
                                    <td className="px-4 py-3">$39 to $2,000+/mo + app subscriptions</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">B2B / wholesale</td>
                                    <td className="px-4 py-3">First-class workflows</td>
                                    <td className="px-4 py-3">Plus-only, app-dependent</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">ERP / supplier sync</td>
                                    <td className="px-4 py-3">Bidirectional, real-time</td>
                                    <td className="px-4 py-3">Via apps or middleware</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Custom checkout</td>
                                    <td className="px-4 py-3">Anything Stripe supports</td>
                                    <td className="px-4 py-3">Checkout extensibility (Plus)</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Time to launch</td>
                                    <td className="px-4 py-3">12 to 20 weeks</td>
                                    <td className="px-4 py-3">Hours to days</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">Source code</td>
                                    <td className="px-4 py-3">Owned by client</td>
                                    <td className="px-4 py-3">Hosted, theme-level access</td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-3 text-gray-400">SEO / performance</td>
                                    <td className="px-4 py-3">Next.js SSR/ISR, CWV-green</td>
                                    <td className="px-4 py-3">Strong, theme-dependent</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                            <h3 className="text-white font-semibold mb-4">Where custom wins</h3>
                            <ul className="space-y-2">
                                {proCustom.map((item) => (
                                    <li key={item} className="flex gap-2 text-gray-300 text-sm">
                                        <Check className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                            <h3 className="text-white font-semibold mb-4">Where Shopify wins</h3>
                            <ul className="space-y-2">
                                {proShopify.map((item) => (
                                    <li key={item} className="flex gap-2 text-gray-300 text-sm">
                                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">The ROI breakeven math</h2>
                    <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Run the simple version. A mid-market B2B Shopify Plus stack over three years:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-300 mb-4">
                            <li className="flex gap-2"><span className="text-sky-400">$2,000 × 36</span><span className="text-gray-400">=</span><span className="text-white font-semibold">$72,000</span> in Shopify Plus subscription</li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$36k</span><span className="text-gray-400">=</span><span className="text-white">apps at ~$1,000/mo (B2B, multi-currency, sync, reporting)</span></li>
                            <li className="flex gap-2"><span className="text-sky-400">+ ~$60k</span><span className="text-gray-400">=</span><span className="text-white">Liquid + Plus partner work across 3 years</span></li>
                            <li className="flex gap-2 border-t border-white/5 pt-2 mt-2"><span className="text-emerald-400 font-semibold">~ $168k</span><span className="text-gray-400">=</span><span className="text-white font-semibold">3-year Shopify Plus TCO</span></li>
                        </ul>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            A complex custom e-commerce build comes in at $55k to $120k one-time depending on scope, plus $18k to $30k annually in hosting and feature retainer. That works out to $109k to $210k over three years — breakeven on the high end of Shopify Plus, with the difference being you own the system and stop paying app rent.
                        </p>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            For straightforward B2C under $1M in revenue, Shopify Basic at $39 per month is unbeatable. The math only flips when the platform fee plus app stack plus partner customization passes roughly $4k per month — at that point a custom build pays for itself inside 18 to 30 months.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Real client proof</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/work/hobbspeak" className="text-sky-400 hover:underline">HobbsPeak</Link> is the cleanest example of where custom beats Shopify. The brand sells custom headwear and apparel where the catalog is effectively infinite — every S&S Activewear blank, in every color and size, at live wholesale-tier pricing. A standard Shopify build could not handle the live wholesale catalog sync, the digital proofing workflow, or the artwork-digitizing pipeline.
                        </p>
                        <p>
                            QuantLab built HobbsPeak.com as a headless commerce platform on Next.js 16 + React 19, with Stripe checkout, Vercel Blob for artwork storage, Neon Postgres for transactional data, and live S&S Activewear API ingest. A proprietary digitizer subsystem handles background removal, OCR, vector tracing, and font rendering for instant customer-facing proofs. The admin console covers orders, customers, messages, inventory, products, pricing, build sheets, and live build templates. None of that is buildable inside Shopify — the platform was not designed for it. None of that should be on Shopify either.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Can you migrate us from Shopify to a custom e-commerce platform?",
                                a: "Yes. Product catalog, customer accounts, order history, and live subscriptions are exported through the Shopify Admin API and reconciled into the new schema. The old Shopify store can stay live during the cutover so revenue does not stop.",
                            },
                            {
                                q: "What is the timeline for a custom e-commerce build?",
                                a: "12 to 20 weeks for the first production release on a complex B2B build. Catalog ingest and Stripe wiring take 2 to 4 weeks, the storefront and checkout run 4 to 8 weeks, and the admin console and integrations take the rest.",
                            },
                            {
                                q: "Will the custom storefront rank in Google like Shopify does?",
                                a: "Yes — usually better. We ship Next.js with full SSR/ISR, proper structured data, an automated sitemap, and Core Web Vitals in the green by default. SEO is built in, not a Liquid theme afterthought.",
                            },
                            {
                                q: "Who handles PCI scope on a custom build?",
                                a: "Stripe Elements or Checkout keeps you in SAQ A — the lowest PCI scope. No card data ever touches your servers. We document the boundary clearly so your auditor or insurer can sign off.",
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link
                            href="/services/web-applications"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Web Application Development</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">The full Next.js + PostgreSQL stack we use for custom storefronts and admin consoles.</p>
                        </Link>
                        <Link
                            href="/services/stripe-integration"
                            className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-white font-semibold">Custom Stripe Integration</h3>
                                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">Subscriptions, marketplaces, custom checkout, and QuickBooks sync wired to the storefront.</p>
                        </Link>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["stripe","saas","build-vs-buy"]}
                        heading="Related e-commerce reading"
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Hit the Shopify ceiling? Or do not need to.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. We will walk through your catalog, your B2B workflows, and your integrations and tell you straight whether Shopify is right, a custom build is right, or you should run Shopify with a custom layer on top.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
