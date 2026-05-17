import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { ShoppingCart, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Custom E-commerce Development (2026) | QUANT LAB USA",
    description:
        "Custom e-commerce beyond Shopify — B2B wholesale, custom quoting, ERP/inventory sync, S&S Activewear API, custom checkout, admin dashboards. By QUANT LAB USA.",
    slug: "industries/e-commerce",
    image: "/og-services.png",
    type: "article",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom E-commerce Development",
    url: "https://quantlabusa.dev/industries/e-commerce",
    description:
        "Headless commerce on Next.js, live wholesale catalog sync, custom quoting, ERP and inventory integrations, and full admin operations dashboards for brands that hit the Shopify ceiling.",
    isPartOf: {
        "@type": "WebSite",
        url: "https://quantlabusa.dev",
        name: "QUANT LAB USA",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://quantlabusa.dev/industries" },
        { "@type": "ListItem", position: 3, name: "E-commerce", item: "https://quantlabusa.dev/industries/e-commerce" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom E-commerce Development",
    name: "Custom E-commerce Development",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
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
        {
            "@type": "Question",
            name: "Why is e-commerce treated as a special case for software development?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "E-commerce sits at the intersection of consumer expectations and operational complexity that almost no other industry has at the same scale. The customer wants Amazon-grade speed and trust on a small brand's budget. The operator needs the storefront to fit a specific catalog model, a specific pricing model, and a specific fulfillment model — none of which the off-the-shelf platforms quite cover. And the integration surface (Stripe, distributor APIs, ERP, warehouse systems, sales tax, shipping carriers) is large enough that a single weak link breaks the customer experience.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 e-commerce build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A focused tool that does one e-commerce thing well — a Stripe-based quote-to-order flow for configurable products, a custom B2B catalog gated to net-30 customers, or a custom checkout that solves the tax or fulfillment problem Shopify will not solve. 4 to 8 weeks.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle sales tax across states?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Through Stripe Tax, TaxJar, or Avalara depending on volume and exemption handling needs. We wire destination-based rates, marketplace facilitator handling, exemption certificate capture, and nexus monitoring directly into the checkout and admin console.",
            },
        },
        {
            "@type": "Question",
            name: "Can you integrate with our 3PL or warehouse?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We integrate with ShipStation, ShipHero, Easyship, and direct 3PL APIs where they exist. Order routing, inventory reservation, label generation, and tracking webhook ingest all flow through the admin console so the team has one view of fulfillment status.",
            },
        },
    ],
};

export default function EcommerceIndustryPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
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
                            Shopify and BigCommerce do the easy 70% of e-commerce well. The other 30% is where most growing brands live: custom quoting for configurable products, B2B wholesale with tiered pricing and net-terms invoicing, custom checkout and tax rules per jurisdiction, multi-currency with FX hedging, real-time inventory sync from a distributor API, and ERP or accounting integrations that go beyond what Shopify&apos;s app store can do.
                        </p>
                        <p>
                            You end up stitching together five apps that almost work, each charging a per-transaction or per-month fee, and the seams show. Quote forms email a PDF that nobody opens. Inventory drifts because the distributor sync is on a six-hour cron. The Shopify checkout cannot do the tax logic your CPA insists on. And the customer experience suffers because the storefront cannot follow the actual purchase flow.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why e-commerce is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            E-commerce sits at the intersection of consumer expectations and operational complexity at a scale almost no other industry faces. The customer wants Amazon-grade speed, trust, and visibility on a small brand&apos;s budget. The operator needs the storefront to fit a specific catalog model (simple, configurable, made-to-order, kit, subscription, digital), a specific pricing model (DTC, wholesale, tiered, contracted), and a specific fulfillment model (3PL, in-house warehouse, drop-ship, print-on-demand) — none of which the off-the-shelf platforms quite cover when stacked together.
                        </p>
                        <p>
                            The integration surface compounds the problem. Stripe (or Shopify Payments or Adyen) for the money layer, a distributor API for wholesale catalog and inventory, an ERP for the system of record (NetSuite, Acumatica, QuickBooks for smaller brands), a warehouse or 3PL for fulfillment, a tax engine (Stripe Tax, TaxJar, Avalara), shipping carrier APIs for rates and labels (Shippo, ShipStation, EasyPost), a marketing stack (Klaviyo, Mailchimp, Customer.io), and a review or UGC layer (Yotpo, Stamped, Okendo). Each integration has its own failure mode. A single weak link — a six-hour distributor cron, a broken tax-engine fallback, a 3PL webhook that arrives twice — breaks the customer experience in a way the operator only sees through angry support tickets a week later.
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common e-commerce projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Headless commerce migration from Shopify", d: "Lift the storefront onto Next.js with Stripe-direct checkout, port catalog and customers cleanly, and keep the Shopify back-office in place if useful for legacy workflows. Most brands hit this when per-transaction fees exceed engineering cost." },
                            { t: "B2B wholesale storefront", d: "Tiered pricing, customer-specific catalogs, net-30 invoicing, quote-to-PO workflow, approval routing, and a buyer dashboard with reorder. Often paired with a DTC site in the same codebase." },
                            { t: "Configurable product quote-to-order", d: "Multi-step configurator (size, color, decoration, artwork), live pricing, digital-proof workflow, and a structured cart that lands clean in Stripe Checkout or a custom Elements flow." },
                            { t: "Distributor API integration", d: "Live S&S Activewear, SanMar, or AlphaBroder catalog sync — pricing, inventory, color-style search, full ingest of category and image data with diff-detection and webhook updates." },
                            { t: "Custom artwork pipeline", d: "Background removal, OCR, raster-to-vector tracing, font matching, and digitizer queue management. The HobbsPeak pattern — turns customer artwork into production-ready embroidery and decoration files." },
                            { t: "Multi-currency and tax engine", d: "Destination-based sales tax (Stripe Tax, TaxJar, or Avalara), VAT for EU, GST for AU/CA/NZ, exemption certificate capture, and nexus monitoring with quarterly threshold alerts." },
                            { t: "Subscription and replenishment commerce", d: "Recurring orders with skip/swap, replenishment intervals tied to actual usage, custom dunning, and prepaid bundle handling. Stripe Billing under the hood." },
                            { t: "Admin operations console", d: "Orders, customers, catalog, pricing, inventory, build sheets, returns, refunds, and analytics on one screen. Built for the operator who actually runs the store at 7 a.m." },
                            { t: "Affiliate and ambassador program", d: "Tracked links, attributed sales, tiered payouts, ambassador dashboard, and tax-form collection (W-9, 1099-NEC) automated end-of-year." },
                            { t: "3PL and warehouse integration", d: "ShipStation, ShipHero, or direct 3PL API. Order routing rules, inventory reservation, label generation, and tracking webhook ingest piped into customer notifications." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Compliance and security considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">PCI-DSS.</span> Default architecture tokenizes card data with Stripe Elements or Checkout so the merchant stays in SAQ A. We never store PANs. Higher-scope scenarios — saved card vaults on platform-managed accounts — get explicit boundary documentation so the QSA review is clean.
                        </p>
                        <p>
                            <span className="text-white font-semibold">CCPA, CPRA, and state privacy law.</span> Privacy preference centers, do-not-sell mechanisms (GPC honoring), data subject access request workflows, and retention policy enforcement. Every e-commerce site collecting California, Virginia, Colorado, Connecticut, Utah, or any of the dozen-plus new-state-law identifiers needs these in 2026.
                        </p>
                        <p>
                            <span className="text-white font-semibold">GDPR and ePrivacy for international sales.</span> Cookie consent (real consent, not a pre-checked box), lawful basis tracking for marketing, and DSAR fulfillment. We wire consent state through the data layer so analytics and marketing pixels do not fire on non-consenting traffic.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Sales tax nexus and marketplace facilitator rules.</span> Post-Wayfair, every state has economic nexus thresholds. Marketplace facilitator laws shift collection obligations onto platforms like Amazon and eBay but not always cleanly to direct sites. We instrument nexus monitoring so the operator knows when a new state goes hot.
                        </p>
                        <p>
                            <span className="text-white font-semibold">SOC 2 for B2B and enterprise sales.</span> Brands selling into enterprise procurement get SOC 2 questions early. We build with Common Criteria controls in place — RBAC, audit logging, change management, encryption — so the answer to procurement is short.
                        </p>
                        <p>
                            <span className="text-white font-semibold">FTC Endorsement Guides and Truth-in-Advertising.</span> Influencer programs, affiliate disclosures, and earned-media handling have new teeth as of the 2023 FTC updates. We build disclosure capture into the affiliate program so the operator can prove compliance.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for e-commerce</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 15 or 16 with React 19 and TypeScript for the storefront. The App Router&apos;s mix of server components, streaming, and route-level caching is genuinely excellent for product detail pages, category pages, and search results — and Lighthouse scores out of the box beat almost any Shopify Liquid theme. Postgres for the system of record on Neon or Supabase; Drizzle or Prisma as the ORM. Stripe for payments with Elements for inline checkout and Checkout for hosted flows; Stripe Tax or TaxJar for sales tax; Stripe Billing for subscriptions where applicable.
                        </p>
                        <p>
                            For media, Cloudinary or imgix for transformation and delivery; AWS S3 or R2 for raw storage. Algolia or Typesense for search when the catalog passes a thousand SKUs. Klaviyo or Customer.io for marketing automation, with first-party events emitted from the data layer not from the client. Resend or Postmark for transactional email. Sentry for error reporting. Hosting on Vercel for the web tier; a serverless function tier on Cloud Run or AWS for heavy compute (artwork processing, distributor catalog ingest). See the <Link href="/services/stripe-integration" className="text-pink-400 hover:underline">custom Stripe integration</Link> and <Link href="/services/payments-invoicing-licensing" className="text-pink-400 hover:underline">payments, invoicing and licensing</Link> services for the patterns we use on the money side.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused e-commerce tool", body: "A Stripe-based quote-to-order flow for configurable products, a custom B2B catalog gated to net-30 customers, or a checkout that solves the tax or fulfillment problem Shopify will not solve. 4 to 8 weeks." },
                            { tier: "$60K", title: "Headless DTC or B2B storefront", body: "Full Next.js storefront with Stripe checkout, catalog and inventory model, admin console, ERP sync, and one major integration (distributor API, 3PL, or tax engine). 12 to 18 weeks." },
                            { tier: "$150K+", title: "Multi-channel commerce platform", body: "DTC + wholesale in one codebase, full distributor API integration, custom artwork pipeline, multi-currency, multi-warehouse fulfillment, and the full HobbsPeak operations surface. 18 to 32 weeks." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-pink-400 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery is paid separately at $2,500 and creditable against any full engagement. <Link href="/contact" className="text-pink-400 hover:underline">Book a scope call</Link> to walk through your catalog, checkout, and ops flow.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Three patterns recur. First, brands migrate off Shopify before they need to. The economics of a custom build only beat Shopify Plus once volume crosses a threshold or once a critical workflow has been rejected by the platform. Below that, the right move is to stay on Shopify and use Shopify Functions or a headless front-end carefully. We will tell a brand that out loud if it is the right answer, even though it leaves us with less work.
                        </p>
                        <p>
                            Second, the artwork pipeline gets underestimated on custom-product builds. Customer uploads come in 60 different formats, half of which need vectorization, OCR, font matching, or background removal before they hit production. Teams plan for a one-week feature and discover the real work is four to six weeks of imaging engineering and queue management. We scope that explicitly when the catalog includes any decoration, embroidery, or made-to-order flow.
                        </p>
                        <p>
                            Third, brands skip the admin console and ship a customer-facing site without a real operator surface. Six months later the team is exporting CSVs from three places and manually reconciling, the same problem they had before the rebuild. The admin console is not a nice-to-have — it is the actual product on the operator side. We treat it as a peer of the storefront from day one.
                        </p>
                    </div>
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
                            {
                                q: "Why is e-commerce treated as a special case for software development?",
                                a: "E-commerce sits at the intersection of consumer expectations and operational complexity. The customer wants Amazon-grade speed on a small brand's budget. The operator needs a specific catalog, pricing, and fulfillment model. And the integration surface (Stripe, distributors, ERP, 3PL, tax, shipping) is large enough that a single weak link breaks the customer experience.",
                            },
                            {
                                q: "What does a $25,000 e-commerce build look like?",
                                a: "A focused tool — a Stripe-based quote-to-order flow for configurable products, a custom B2B catalog gated to net-30 customers, or a custom checkout that solves the tax or fulfillment problem Shopify will not solve. 4 to 8 weeks.",
                            },
                            {
                                q: "How do you handle sales tax across states?",
                                a: "Through Stripe Tax, TaxJar, or Avalara depending on volume and exemption-certificate handling needs. We wire destination-based rates, marketplace facilitator handling, and nexus monitoring directly into the checkout and admin console.",
                            },
                            {
                                q: "Can you integrate with our 3PL or warehouse?",
                                a: "Yes. ShipStation, ShipHero, Easyship, and direct 3PL APIs where they exist. Order routing, inventory reservation, label generation, and tracking webhook ingest all flow through the admin console.",
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
                            { slug: "web-applications", title: "Web Applications", desc: "Headless storefronts, customer portals, and operator dashboards." },
                            { slug: "subscription-billing", title: "Subscription Billing", desc: "Stripe Billing for recurring, replenishment, and prepaid bundles." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "PCI-scope assessment and SOC 2 readiness for enterprise sales." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-pink-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-pink-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["stripe","saas","stack"]}
                        heading="E-commerce engineering reading"
                        pinned={["nextjs-stripe-integration-guide","stripe-connect-marketplace-architecture","building-multi-tenant-saas-postgres-rls"]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Build the storefront Shopify cannot.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-pink-400 hover:underline">book a 20-minute scope call</Link> to walk through your catalog, checkout, and ops flow. Founder-led from the first call to the production deploy.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
