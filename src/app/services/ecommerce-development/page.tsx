import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ShoppingCart, Check, ArrowRight, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

const cities: { slug: string; city: string; state: string }[] = [
    { slug: "atlanta-ga", city: "Atlanta", state: "GA" },
    { slug: "macon-ga", city: "Macon", state: "GA" },
    { slug: "augusta-ga", city: "Augusta", state: "GA" },
    { slug: "columbus-ga", city: "Columbus", state: "GA" },
    { slug: "savannah-ga", city: "Savannah", state: "GA" },
    { slug: "miami-fl", city: "Miami", state: "FL" },
    { slug: "austin-tx", city: "Austin", state: "TX" },
    { slug: "dallas-tx", city: "Dallas", state: "TX" },
    { slug: "chicago-il", city: "Chicago", state: "IL" },
    { slug: "seattle-wa", city: "Seattle", state: "WA" },
    { slug: "new-york-ny", city: "New York", state: "NY" },
    { slug: "charlotte-nc", city: "Charlotte", state: "NC" },
    { slug: "nashville-tn", city: "Nashville", state: "TN" },
    { slug: "san-francisco-ca", city: "San Francisco", state: "CA" },
];

export const metadata = pageMetadata({
    title: "Ecommerce Development | Custom Storefronts, Headless | QuantLab",
    description:
        "Custom ecommerce development — headless commerce on Next.js, Shopify Hydrogen, Medusa. Storefronts, checkout, OMS. Founder-led. Call (770) 652-1282.",
    slug: "services/ecommerce-development",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Ecommerce Development",
    name: "Custom Ecommerce Development and Headless Commerce",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Founder-led custom ecommerce development for brands that have outgrown Shopify themes. Headless commerce on Next.js with Shopify Hydrogen, Medusa, or BigCommerce backends. Custom storefronts, checkout flows, order management, subscription billing, and ERP integration. Source code, deployment, and data owned by the client.",
    url: "https://quantlabusa.dev/services/ecommerce-development",
    offers: {
        "@type": "Offer",
        priceRange: "$20,000-$140,000",
        priceCurrency: "USD",
        description: "Fixed-fee scope per phase",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Ecommerce Development", item: "https://quantlabusa.dev/services/ecommerce-development" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Headless commerce or stay on a Shopify theme?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "If your storefront is a content site with a cart, stay on a Shopify theme. Headless makes sense when you need a unique customer experience, B2B catalogs with quote workflows, complex subscription logic, or international localization. We tell you straight on the first call whether headless is the right call or whether a Shopify theme rebuild is the better spend.",
            },
        },
        {
            "@type": "Question",
            name: "Shopify Hydrogen, Medusa, or BigCommerce?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Hydrogen when you want to keep Shopify's product, inventory, and checkout and replace the storefront layer. Medusa when you want full ownership of the commerce engine on Node and PostgreSQL. BigCommerce when you need enterprise features like B2B price lists and multi-storefront out of the box. We map the decision to your operational complexity, not vendor marketing.",
            },
        },
        {
            "@type": "Question",
            name: "Can you integrate with our ERP, OMS, and 3PL?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. NetSuite, QuickBooks Online, Shipstation, Shipbob, Easypost, Avalara, and dozens of others. Order flow, inventory sync, tax calculation, and label generation are routine parts of the scope. We build the integration layer your operations team can actually trust.",
            },
        },
        {
            "@type": "Question",
            name: "What about Core Web Vitals, SEO, and performance?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "First-class concerns. Every storefront we ship hits sub-second LCP on real devices, edge-cached product and category pages, structured data on every product, and an architecture that responds to Google's Core Web Vitals updates without a rebuild. Headless done right is faster than a theme — done wrong it is slower, so we build it right.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the deployment configuration, the OMS integration code, and the documentation. Your Shopify, BigCommerce, or Medusa accounts are in your name. There is no platform tax, no per-storefront fee, and no exit ransom.",
            },
        },
    ],
};

export default function EcommerceDevelopmentPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
                        <li className="text-gray-300">Ecommerce Development</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-rose-500 to-orange-400 mb-6">
                        <ShoppingCart className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Ecommerce Development for Brands Past the Shopify Theme
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Headless commerce on Next.js with Shopify Hydrogen, Medusa, or BigCommerce backends. Custom storefronts, checkout flows, order management, subscription billing, and the ERP integration layer your operations team can trust.
                    </p>
                    <ConsultationCTA label="Scope an Ecommerce Build" service="Ecommerce Development" source="services-ecommerce" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When the theme starts costing you money</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most brands hit the same wall at $2M–$15M in annual revenue. The Shopify theme that got them to product-market fit starts costing them margin. Page speed slips, conversion rate drops, and the Lighthouse audit recommendation list never shrinks. The wholesale and B2B side needs catalog and price-list features the theme cannot handle. Subscription customers need a portal experience that Recharge or Bold cannot quite deliver. ERP sync is a manual export. The marketing team adds another app and the storefront slows down again.
                        </p>
                        <p>
                            Custom ecommerce development is the rebuild that gets you back the margin those workarounds cost you. Headless on Next.js for the storefront. Shopify, Medusa, or BigCommerce for the commerce engine. A custom OMS layer for the operational complexity your apps cannot model. Built once, owned forever, and faster than the theme it replaces.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build</h2>
                    <ul className="space-y-3">
                        {[
                            "Headless storefronts on Next.js with Shopify Hydrogen, Medusa, or BigCommerce backends",
                            "Custom checkout flows when Shopify Checkout limits your conversion optimization or B2B workflow",
                            "B2B portals — price lists, account hierarchies, quote workflows, custom catalogs, net-terms billing",
                            "Subscription experiences beyond Recharge — custom cadence, build-a-box, swap-and-skip flows",
                            "Order management — fulfillment routing, partial shipment, returns, exchanges, and back-order handling",
                            "ERP and accounting integration — NetSuite, QuickBooks Online, Xero, Sage with reconciliation",
                            "3PL and shipping integration — Shipstation, Shipbob, Easypost, ShipHero, and custom warehouse APIs",
                            "Tax and compliance — Avalara, TaxJar, Stripe Tax, and the structured data your compliance team needs",
                            "International — multi-currency presentment, localized content, market-specific payment methods",
                            "Core Web Vitals performance — sub-second LCP, edge-cached product pages, structured data on every product",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our methodology</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Two-week discovery — current funnel audit, conversion rate review, ops bottleneck mapping, headless-vs-theme recommendation. From there we run an eight- to twenty-week build with biweekly demos and a parallel preview environment so your marketing team can review pages before launch.
                        </p>
                        <p>
                            Discovery is paid separately at $2,500 so you can decide whether to commit before any code is written. The deliverable is a wireframed storefront, a backend architecture recommendation, an integration map, and a phased estimate — useful even if you take it to another developer.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Process &amp; timeline</h2>
                    <ul className="space-y-3">
                        {[
                            "Week 1-2: Discovery sprint — funnel audit, headless decision, integration map, phased plan",
                            "Week 3-6: Foundations — storefront skeleton, commerce backend wired, product and category templates",
                            "Week 7-14: Build sprints — checkout, account, OMS integrations, B2B if scoped, preview environment live",
                            "Week 15-18: Hardening — performance pass, Core Web Vitals, structured data, accessibility, SEO migration",
                            "Week 19-20: Launch — DNS cutover with rollback, 60-day post-launch support, conversion-rate monitoring",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Next.js 15 + App Router",
                            "Shopify Hydrogen + Oxygen",
                            "Medusa + PostgreSQL",
                            "BigCommerce + Catalyst",
                            "Stripe + Shopify Payments",
                            "Algolia + Typesense",
                            "Avalara + Stripe Tax",
                            "Shipstation + Easypost",
                            "Sanity + Contentful CMS",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Same Next.js backbone as our <Link href="/services/web-applications" className="text-rose-400 hover:underline">web applications</Link> and <Link href="/services/saas-platform-development" className="text-rose-400 hover:underline">SaaS platforms</Link>. Payments wired through our <Link href="/services/stripe-integration" className="text-rose-400 hover:underline">Stripe integration</Link> playbook.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference builds</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Commerce patterns we ship show up across our case studies. <Link href="/work/bridgepointe-painting" className="text-rose-400 hover:underline">Bridgepointe Painting</Link> runs a Stripe + QuickBooks Online checkout layer that closed month-end from three days to thirty minutes — the same reconciliation patterns power our ecommerce ERP work. <Link href="/work/motorcycle-shop-ops-platform" className="text-rose-400 hover:underline">A motorcycle shop ops platform</Link> handles parts catalog, service-bay workflows, and customer record consolidation across in-store and online. <Link href="/work/contractor-estimating-proposal-engine" className="text-rose-400 hover:underline">A contractor estimating engine</Link> ships quotes through a customer-facing checkout-style flow.
                        </p>
                        <p>
                            Whether the front door is a storefront, a quote portal, or a service-bay UI, the same architecture survives — fast, owned, integrated, and built for the actual operations team behind it.
                        </p>
                        <p>
                            Custom ecommerce development served from <Link href="/software-development-macon-ga" className="text-rose-400 hover:underline">Macon, GA</Link>, with clients across <Link href="/software-development-atlanta-ga" className="text-rose-400 hover:underline">Atlanta</Link>, <Link href="/software-development-new-york-ny" className="text-rose-400 hover:underline">New York</Link>, <Link href="/software-development-dallas-tx" className="text-rose-400 hover:underline">Dallas</Link>, and beyond.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fixed-fee per phase. Typical ranges:
                        </p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Headless storefront on Hydrogen or Medusa (DTC, single-currency): $20k – $55k</li>
                            <li>B2B portal with price lists, quote workflows, and net-terms billing: $40k – $90k</li>
                            <li>Full custom OMS with ERP and 3PL integration: $55k – $120k</li>
                            <li>International multi-storefront with localization and tax compliance: $70k – $140k</li>
                            <li>Discovery sprint with funnel audit, headless decision, and phased plan: $2,500 flat</li>
                        </ul>
                        <p>
                            60-day post-launch support included on every ecommerce build. Optional retainer for ongoing feature work, seasonal campaigns, and platform upgrades.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "Full source code repository in your GitHub organization",
                            "Shopify, Medusa, or BigCommerce accounts in your name",
                            "Production deployment plus preview-per-PR environment for marketing review",
                            "Core Web Vitals report with documented baseline scores",
                            "60-day post-launch support — bug fixes, performance regressions, integration adjustments",
                            "Admin documentation for your operations and marketing teams",
                            "Migration plan from your existing theme or platform with SEO redirect map",
                            "Optional retainer for continued feature work and platform upgrades",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Headless commerce or stay on a Shopify theme?",
                                a: "If your storefront is a content site with a cart, stay on a Shopify theme. Headless makes sense when you need a unique customer experience, B2B catalogs with quote workflows, complex subscription logic, or international localization. We tell you straight on the first call whether headless is the right call or whether a Shopify theme rebuild is the better spend.",
                            },
                            {
                                q: "Shopify Hydrogen, Medusa, or BigCommerce?",
                                a: "Hydrogen when you want to keep Shopify's product, inventory, and checkout and replace the storefront layer. Medusa when you want full ownership of the commerce engine on Node and PostgreSQL. BigCommerce when you need enterprise features like B2B price lists and multi-storefront out of the box. We map the decision to your operational complexity, not vendor marketing.",
                            },
                            {
                                q: "Can you integrate with our ERP, OMS, and 3PL?",
                                a: "Yes. NetSuite, QuickBooks Online, Shipstation, Shipbob, Easypost, Avalara, and dozens of others. Order flow, inventory sync, tax calculation, and label generation are routine parts of the scope. We build the integration layer your operations team can actually trust.",
                            },
                            {
                                q: "What about Core Web Vitals, SEO, and performance?",
                                a: "First-class concerns. Every storefront we ship hits sub-second LCP on real devices, edge-cached product and category pages, structured data on every product, and an architecture that responds to Google's Core Web Vitals updates without a rebuild. Headless done right is faster than a theme — done wrong it is slower, so we build it right.",
                            },
                            {
                                q: "Do we own the code?",
                                a: "Completely. You get the GitHub repository, the deployment configuration, the OMS integration code, and the documentation. Your Shopify, BigCommerce, or Medusa accounts are in your name. There is no platform tax, no per-storefront fee, and no exit ransom.",
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
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Custom checkout, marketplace flows, and accounting sync." },
                            { slug: "subscription-billing", title: "Subscription Billing", desc: "Recurring revenue for subscription commerce." },
                            { slug: "api-development", title: "API Development", desc: "ERP, OMS, and 3PL integration layers." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-rose-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-rose-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                        Background on our data-ownership philosophy: <Link href="/blog/custom-crm-development-guide" className="text-rose-400 hover:underline">the custom CRM development guide</Link>. To scope an ecommerce project, <Link href="/contact" className="text-rose-400 hover:underline">contact us</Link> directly or read our <Link href="/vs/shopify" className="text-rose-400 hover:underline">custom storefront vs Shopify</Link> comparison.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-rose-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Ecommerce Development — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based engineering team, working with ecommerce brands across 14 US metros. Discovery and build run remotely; in-person merchandising and ops sessions easy to schedule in Atlanta and the Southeast.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {cities.map((c) => (
                            <Link
                                key={c.slug}
                                href={`/software-development-${c.slug}`}
                                className="group flex items-center justify-between rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 transition-all hover:border-rose-400/30 hover:bg-[#0d1526]"
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0" />
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                        {c.city}, {c.state}
                                    </span>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-rose-400 group-hover:translate-x-0.5 transition-all" />
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Stop bolting apps onto the theme.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. Founder-led from funnel audit through DNS cutover.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="Ecommerce Development" source="services-ecommerce" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
