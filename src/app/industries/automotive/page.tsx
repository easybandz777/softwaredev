import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Car, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Automotive Software Development & Security | QUANT LAB USA",
    description:
        "Custom automotive software — dealership inventory, DMS integrations, telematics, and aftermarket commerce. Safeguards Rule-aware builds plus MITRE ATT&CK pentests. Founder-led.",
    slug: "industries/automotive",
    image: "/og-services.png",
    type: "article",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Software for Automotive",
    url: "https://quantlabusa.dev/industries/automotive",
    description:
        "Automotive-specific software development — dealership inventory, DMS integrations, telematics, mobility, and aftermarket commerce. Founder-led, US-based, mutual NDA from day one.",
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
        { "@type": "ListItem", position: 3, name: "Automotive", item: "https://quantlabusa.dev/industries/automotive" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Automotive Software Development",
    name: "Custom Software Development for Automotive",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for automotive — dealership inventory and DMS integrations, telematics and fleet platforms, mobility apps, and aftermarket e-commerce with fitment. Security work tied to automotive-sector threat models via MITRE ATT&CK.",
    url: "https://quantlabusa.dev/industries/automotive",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can you integrate with our DMS?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, within the constraints of each platform. We integrate with dealer management systems like CDK Global, Reynolds and Reynolds, Dealertrack, and Tekion where their APIs or certified integration programs allow, plus inventory and syndication feeds. DMS access is notoriously gated, so we scope the integration path honestly up front rather than promising access we cannot guarantee.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build inventory and merchandising for a dealership?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We build vehicle inventory systems with VIN decoding, photo and window-sticker management, pricing tools, and syndication to your website and third-party marketplaces. The goal is a single source of truth for inventory that feeds every channel without manual re-entry.",
            },
        },
        {
            "@type": "Question",
            name: "Do you build telematics and fleet platforms?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We ingest telematics data — GPS position, engine diagnostics, driver behavior — from providers or directly via standards like the telematics APIs and OBD-II data, then build the dashboards, geofencing, maintenance alerts, and reporting on top. We handle the high-volume time-series data these platforms generate.",
            },
        },
        {
            "@type": "Question",
            name: "How does the FTC Safeguards Rule apply to dealerships?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Auto dealers that arrange financing are non-bank financial institutions under the FTC Safeguards Rule, which means a written information security program, access controls, encryption, MFA, and incident response on customer financial data. We build to those expectations and coordinate with your compliance officer on the formal program documentation.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build aftermarket e-commerce with parts fitment?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Aftermarket commerce lives and dies on fitment accuracy. We build year-make-model-trim catalogs against ACES and PIES data, fitment-filtered search, and the cart and checkout flow, so a customer only ever sees parts that fit their vehicle. We integrate the distributor and pricing feeds behind it.",
            },
        },
        {
            "@type": "Question",
            name: "Why is automotive software a special case?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The data is specialized — VIN decoding, ACES and PIES fitment, and high-volume telematics time-series do not fit a generic catalog or CRM. The integration surface is gated, with DMS platforms tightly controlling access. And dealerships carry Safeguards Rule obligations on customer financial data. A generic build underestimates all three.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 automotive build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Around $25,000 covers a focused MVP — one high-value workflow shipped well. Example: a vehicle inventory system with VIN decoding, photo management, pricing, and syndication to your website and the major marketplaces, replacing manual re-entry across channels. Scoped tight, it ships in 4 to 8 weeks.",
            },
        },
    ],
};

export default function AutomotiveIndustryPage() {
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
                        <li className="text-gray-300">Automotive</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-slate-500 to-sky-400 mb-6">
                        <Car className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Automotive — Inventory, DMS, Telematics, and Aftermarket
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Dealership inventory and DMS integrations, telematics and fleet platforms, mobility apps, and aftermarket commerce — built by a US-based, founder-led team that knows VINs, fitment data, gated DMS access, and the Safeguards Rule obligations dealers now carry.
                    </p>
                    <ConsultationCTA label="Scope an Automotive Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Automotive data is specialized. So is the software that handles it.</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A vehicle is not a generic SKU. It carries a VIN that decodes into year, make, model, trim, engine, and a hundred build attributes; aftermarket parts attach to it through ACES and PIES fitment data that a generic catalog has no concept of; and a connected vehicle streams a firehose of telematics that a normal database is not built to absorb. The automotive sector runs on data structures that off-the-shelf commerce and CRM tools simply do not model — which is why dealers, parts sellers, and mobility operators end up with duct-taped workarounds.
                        </p>
                        <p>
                            We build software that speaks automotive natively. Inventory with real VIN decoding and multi-channel syndication. Aftermarket commerce where fitment filtering means a customer only ever sees parts that fit their car. Telematics platforms that handle high-volume time-series cleanly. And it is all built with the FTC Safeguards Rule in mind, because dealerships that arrange financing are now non-bank financial institutions on the hook for protecting customer financial data.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why automotive is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The data model is unusually specialized. VIN decoding, year-make-model-trim hierarchies, ACES and PIES fitment for parts, and the time-series volume of telematics each require purpose-built handling. A fitment mismatch sells a customer a part that does not fit and triggers a return; a naive telematics ingestion pipeline falls over the moment the fleet scales past a few hundred vehicles. The structures are well-defined industry standards, but a team that has never worked with them learns the hard way.
                        </p>
                        <p>
                            The integration surface is also gated in a way few industries match. Dealer management systems — CDK Global, Reynolds and Reynolds, Dealertrack, Tekion — tightly control third-party access through certified programs and contractual gates, and integration is as much a commercial negotiation as a technical one. We scope DMS integration honestly, account for the access constraints up front, and design around them rather than promising connectivity we cannot guarantee.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for automotive operators</h2>
                    <ul className="space-y-3">
                        {[
                            "Dealership inventory — VIN decoding, photo and window-sticker management, pricing, and multi-channel syndication",
                            "DMS integrations — CDK, Reynolds, Dealertrack, and Tekion where APIs and certified programs allow",
                            "Telematics and fleet platforms — GPS, engine diagnostics, geofencing, maintenance alerts, and driver scoring",
                            "Aftermarket e-commerce — ACES and PIES fitment, year-make-model search, distributor feeds, and checkout",
                            "Service and shop management — appointment scheduling, repair orders, parts ordering, and customer communications",
                            "Mobility and connected-vehicle apps — booking, remote features, subscriptions, and usage-based billing",
                            "Sales and F&I tooling — lead management, desking, and finance-and-insurance workflows with audit trails",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common automotive projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Inventory and syndication system", d: "VIN decoding, photo and window-sticker management, pricing tools, and one-click syndication to your website and the major marketplaces — a single source of truth that ends manual re-entry across channels." },
                            { t: "Aftermarket commerce with fitment", d: "Year-make-model-trim catalogs built on ACES and PIES, fitment-filtered search and cart, distributor and pricing feeds, and a checkout where customers only see parts that fit their vehicle." },
                            { t: "Telematics and fleet dashboard", d: "Ingestion of GPS, engine diagnostics, and driver-behavior data, with live mapping, geofencing, maintenance alerts, and utilization reporting built to handle high-volume time-series at fleet scale." },
                            { t: "Service and shop management", d: "Online appointment scheduling, repair-order workflow, parts ordering, technician assignment, and automated customer status updates for a dealership service department or independent shop." },
                            { t: "DMS-adjacent integration layer", d: "A system that connects to your DMS where access allows and fills the gaps it leaves, scoped honestly around the certified-integration constraints each platform imposes." },
                            { t: "Mobility or subscription app", d: "Booking, remote vehicle features, membership tiers, and usage-based billing for a car-share, subscription, or connected-vehicle service, with Stripe handling the payments." },
                            { t: "Sales, desking, and F&I workflow", d: "Lead capture, desking and quoting, finance-and-insurance product presentation, and the audit trail the Safeguards Rule and your compliance team expect on customer financial data." },
                            { t: "Aftermarket marketplace or B2B portal", d: "A multi-seller parts marketplace or a B2B ordering portal for jobbers and shops, with fitment, tiered pricing, and account-based catalogs." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Security and compliance considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">FTC Safeguards Rule.</span> Dealers that arrange financing are non-bank financial institutions under the amended Safeguards Rule. That means a written information security program, a qualified individual overseeing it, access controls, encryption, MFA, and incident response on customer financial data. We build to those expectations by default and coordinate with your compliance officer on the formal program documentation. We do not give legal advice — we build the controls.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Customer PII and credit data.</span> Auto retail collects driver-license data, Social Security numbers, and credit applications. We encrypt that data at rest and in transit, enforce least-privilege access, and keep an audit trail of who viewed credit and financial information.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Connected-vehicle and telematics privacy.</span> Location and driving-behavior data is sensitive and increasingly regulated, including under state privacy laws. We minimize collection to what the service requires, secure the data pipeline, and support consumer access and deletion where the law applies.
                        </p>
                        <p>
                            <span className="text-white font-semibold">PCI-DSS for payments.</span> Service payments, parts checkout, and subscriptions route through Stripe so card data is tokenized and your environment stays in the lightest PCI scope.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Vehicle cybersecurity scope.</span> We build dealership, fleet, and commerce software — the business and data layer. We do not perform in-vehicle ECU or CAN-bus security work; that is a specialized embedded discipline, and we scope our engagements to the application and data tier where we can deliver real value.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for automotive</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 16 on the App Router with React and TypeScript end-to-end for inventory, commerce, and dashboards. Postgres for the system of record, with a time-series extension or a dedicated time-series store when telematics volume demands it. Prisma or Drizzle as the type-safe ORM. Stripe for service, parts, and subscription payments so PCI scope stays light.
                        </p>
                        <p>
                            VIN decoding runs against a maintained data source; fitment is modeled on ACES and PIES so the catalog filters correctly. A background worker layer (Inngest or BullMQ on Redis) handles syndication, telematics ingestion, and feed updates that should not block a request. Sensitive customer financial data gets envelope encryption and strict access logging to satisfy the Safeguards Rule. Sentry plus a log aggregator for observability, with PII redaction in the logger. The web tier deploys to Vercel; high-volume telematics ingestion and the data plane move to a hardened, scalable environment when load requires it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused MVP", body: "A single high-value workflow shipped clean — a vehicle inventory system with VIN decoding, photo management, pricing, and syndication to your website and the major marketplaces. 4 to 8 weeks." },
                            { tier: "$60K", title: "Production platform", body: "A real automotive product — aftermarket commerce with fitment and distributor feeds, or a telematics dashboard with geofencing and maintenance alerts, with payments and Safeguards-aware controls. 10 to 16 weeks." },
                            { tier: "$150K+", title: "Platform or marketplace", body: "A full dealership operating layer, a multi-seller parts marketplace, or a fleet platform handling high-volume telematics, with DMS integration where access allows. 16 to 28 weeks with phased delivery." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-slate-300 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery is paid separately at $2,500 and is creditable against any full engagement. See the <Link href="/contact" className="text-sky-400 hover:underline">contact page</Link> for the full scoping flow, or the <Link href="/pricing" className="text-sky-400 hover:underline">pricing page</Link> for engagement models.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            First, treating fitment as a search filter instead of a data model. Aftermarket commerce that bolts a few attributes onto a generic catalog sells customers parts that do not fit, and returns eat the margin. ACES and PIES exist for a reason — model fitment properly or the catalog will lie to customers.
                        </p>
                        <p>
                            Second, assuming DMS access. Teams design an integration around live DMS data and discover the platform gates access behind a certification program, a fee, and a contract the dealer has not signed. We scope the DMS path as a commercial-and-technical question up front so the build is not blocked by an access wall halfway through.
                        </p>
                        <p>
                            Third, under-engineering telematics ingestion. A pipeline that works for a demo fleet of ten vehicles collapses at a thousand, because the time-series volume is an order of magnitude beyond what a naive design handles. Build the ingestion for the scale the fleet will actually reach.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why founder-led matters for automotive</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Automotive software touches customer credit applications and the financial data the Safeguards Rule now obligates dealers to protect — not the kind of thing you want on an anonymous contractor&apos;s laptop overseas. And the specialized data work, from fitment to telematics, rewards a senior who has done it before. We are US-based and founder-led, and the person who designs your data model and your customer-data controls is reachable when it matters.
                        </p>
                        <p>
                            William Beltz writes or reviews every line that touches customer financial data, inventory, and the integrations that carry it. NDAs are mutual and signed before discovery. Source code lives in your GitHub organization, not ours. The handoff is documented for either ongoing collaboration or in-house ownership — your call.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MITRE ATT&amp;CK pentests tied to automotive threat models</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Dealerships are frequent ransomware and data-theft targets because they hold credit applications and customer financial data, and a 2024 DMS-vendor outage showed how disruptive an attack on the sector can be. We run <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration tests</Link> mapped to the MITRE ATT&amp;CK techniques those attackers actually use, then deliver a heatmap of which techniques succeed, which get detected, and which get blocked.
                        </p>
                        <p>
                            For the inventory systems, commerce storefronts, telematics dashboards, and F&amp;I tooling that carry customer and vehicle data, <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">web application penetration testing</Link> covers authentication, authorization, the payment boundary, and the integration endpoints that connect to your other systems. Every finding maps to ATT&amp;CK technique IDs so your team knows what to alert on.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Can you integrate with our DMS?",
                                a: "Yes, within the constraints of each platform. We integrate with CDK Global, Reynolds and Reynolds, Dealertrack, and Tekion where their APIs or certified programs allow, plus inventory and syndication feeds. DMS access is notoriously gated, so we scope the integration path honestly up front.",
                            },
                            {
                                q: "Can you build inventory and merchandising for a dealership?",
                                a: "Yes. Vehicle inventory with VIN decoding, photo and window-sticker management, pricing tools, and syndication to your website and third-party marketplaces — a single source of truth that feeds every channel without manual re-entry.",
                            },
                            {
                                q: "Do you build telematics and fleet platforms?",
                                a: "Yes. We ingest GPS, engine diagnostics, and driver-behavior data from providers or via OBD-II and telematics APIs, then build dashboards, geofencing, maintenance alerts, and reporting on top — handling the high-volume time-series these platforms generate.",
                            },
                            {
                                q: "How does the FTC Safeguards Rule apply to dealerships?",
                                a: "Dealers that arrange financing are non-bank financial institutions under the Safeguards Rule, requiring a written information security program, access controls, encryption, MFA, and incident response on customer financial data. We build to those expectations and coordinate on the formal program documentation.",
                            },
                            {
                                q: "Can you build aftermarket e-commerce with parts fitment?",
                                a: "Yes. We build year-make-model-trim catalogs against ACES and PIES data, fitment-filtered search, and the cart and checkout, so a customer only ever sees parts that fit their vehicle, with distributor and pricing feeds integrated behind it.",
                            },
                            {
                                q: "Why is automotive software a special case?",
                                a: "The data is specialized (VIN decoding, ACES/PIES fitment, high-volume telematics), the integration surface is gated with DMS platforms tightly controlling access, and dealerships carry Safeguards Rule obligations on customer financial data. A generic build underestimates all three.",
                            },
                            {
                                q: "What does a $25,000 automotive build look like?",
                                a: "A focused MVP — a vehicle inventory system with VIN decoding, photo management, pricing, and syndication to your website and the major marketplaces, replacing manual re-entry across channels. Scoped tight, it ships in 4 to 8 weeks.",
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
                            { slug: "ecommerce-development", title: "E-Commerce Development", desc: "Aftermarket storefronts with ACES and PIES fitment and distributor feeds." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Inventory, service, and shop-management systems built around automotive data." },
                            { slug: "api-development", title: "API Development", desc: "DMS, telematics, and syndication integrations scoped around gated access." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "MITRE ATT&CK-aligned testing for Safeguards-Rule customer financial data." },
                            { slug: "web-app-pentest", title: "Web App Pentest", desc: "Inventory, commerce, and F&I surfaces tested at the payment and data boundary." },
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Service, parts, and subscription payments wired with light PCI scope." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["build-vs-buy", "internal-tools", "pentest"]}
                        heading="Automotive engineering & build reading"
                        pinned={["build-vs-buy-software-2026", "what-is-penetration-testing", "custom-crm-development-guide"]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Build automotive software that speaks the data.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-sky-400 hover:underline">book a 20-minute scope call</Link>. Mutual NDA signed before discovery. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
