import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { ShoppingBag, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Custom Software for Retail (2026) | QUANT LAB USA",
    description:
        "Custom retail software — omnichannel, POS & real-time inventory sync, PCI-DSS, Stripe Terminal, seasonal scale, loyalty. US-based, founder-led builds.",
    slug: "industries/retail",
    image: "/og-services.png",
    type: "article",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Software for Retail",
    url: "https://quantlabusa.dev/industries/retail",
    description:
        "Retail-specific software development — omnichannel commerce, POS and real-time inventory sync, PCI-DSS scope reduction, seasonal scale, and loyalty. Founder-led, US-based, mutual NDA from day one.",
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
        { "@type": "ListItem", position: 3, name: "Retail", item: "https://quantlabusa.dev/industries/retail" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Retail Software Development",
    name: "Custom Software Development for Retail",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for retail — omnichannel order and inventory hubs, POS integrations, BOPIS and ship-from-store, loyalty, and supplier EDI. PCI-DSS-aware builds with P2PE and tokenization to shrink scope. Penetration testing tied to POS-adjacent networks, web apps, and APIs.",
    url: "https://quantlabusa.dev/industries/retail",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How does card-present POS affect our PCI-DSS scope, and does Stripe Terminal reduce it?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It depends on the hardware. A validated P2PE solution or a Stripe Terminal reader encrypts card data inside the device, so account data never hits your application or network in the clear — that can move a location toward SAQ P2PE or SAQ B-IP instead of the much heavier SAQ D-Merchant. Online, tokenized card-not-present flows keep you in SAQ A or A-EP. We scope the boundary honestly with your QSA rather than guessing.",
            },
        },
        {
            "@type": "Question",
            name: "Can you keep inventory in sync in real time across multiple store locations and online?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The pattern is a single inventory service as the source of truth, fed by webhook-driven sync from each POS and the storefront, with stock reservations on checkout, idempotent adjustments, and a reconciliation job for cycle counts. We model available-to-sell per location so BOPIS, ship-from-store, and endless aisle all read the same numbers.",
            },
        },
        {
            "@type": "Question",
            name: "Which POS systems do you integrate with?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We have integrated Square, Clover, Shopify POS, and Lightspeed, plus custom POS via their APIs and webhooks. The approach is the same regardless of vendor: treat the POS as one node that publishes sales and stock events to a central commerce hub, and reconcile rather than trust any single system blindly.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle Black Friday and holiday traffic spikes?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Edge and CDN caching for catalog and content, a queue (BullMQ on Redis) in front of inventory writes and checkout so a spike does not create oversells, idempotent checkout keyed to prevent double-charges on retries, autoscaling on the web tier, and graceful degradation — read replicas and cached availability keep browsing alive even if a write path is under pressure. We load-test against your projected peak before the season.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build BOPIS and ship-from-store?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. BOPIS (buy-online-pickup-in-store) and ship-from-store both depend on accurate per-location inventory and a unified order view. We build the reservation logic, store-associate pick/pack/handoff workflow, customer notifications, and the order-routing rules that decide which location fulfills — including BOPIS fraud controls like pickup verification.",
            },
        },
        {
            "@type": "Question",
            name: "Do you build loyalty and CRM programs?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — points and tier accrual, personalized offers, store credit and gift cards, returns/exchanges with RMA workflows, and email/SMS triggered from customer events. We can integrate a customer data platform or build a focused one, and we keep customer data handling aligned with CCPA/CPRA and state privacy law.",
            },
        },
        {
            "@type": "Question",
            name: "Will our storefront be ADA and WCAG accessible?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We build to WCAG 2.2 AA — keyboard navigation, focus management, semantic markup, color contrast, and accessible forms and checkout. Retail storefronts are a frequent ADA demand-letter target, so accessibility is part of the definition of done, not a later retrofit.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 retail build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Around $25,000 covers a focused build — one high-value workflow shipped clean. Example: a real-time inventory-sync service between a single POS (Square, Clover, Shopify POS, or Lightspeed) and your storefront, with stock reservations and a reconciliation job. Or a Stripe Terminal in-person checkout wired into an existing order system. Scoped tight, ships in 4 to 8 weeks, no feature pile-on.",
            },
        },
    ],
};

export default function RetailIndustryPage() {
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
                        <li className="text-gray-300">Retail</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-400 mb-6">
                        <ShoppingBag className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Retail — Omnichannel, Built Secure, Built to Ship
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Unified commerce across in-store POS, online, and mobile — real-time inventory, BOPIS and ship-from-store, Stripe Terminal checkout, and loyalty — built by a US-based, founder-led team that takes PCI-DSS scope and seasonal scale seriously from day one.
                    </p>
                    <ConsultationCTA label="Scope a Retail Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Retail runs on inventory truth and uptime. Build like it.</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Brick-and-mortar and omnichannel retail is not pure e-commerce. You are reconciling a physical shelf against an online cart, a card-present terminal against a tokenized web checkout, and a Black Friday spike against a back-office EDI feed that still runs on a supplier&apos;s schedule. The two things that quietly sink retail software are inventory that lies — an oversell on the busiest day of the year — and a checkout that buckles under load. Off-the-shelf SaaS papers over both until you hit your own edge cases, and a contractor who has never reconciled a cycle count learns it on your floor.
                        </p>
                        <p>
                            We build with those realities in mind from the first architecture diagram. Inventory lives in one service as the source of truth, fed by webhook-driven events from each POS and the storefront, with stock reservations on checkout and idempotent adjustments so retries never double-count. Card data is encrypted inside the reader with P2PE or tokenized at the edge so your PCI scope stays as small as the hardware allows. And the checkout path is idempotent and queue-buffered so a holiday surge degrades gracefully instead of overselling or double-charging.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why retail is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Pure e-commerce has one inventory pool and one checkout. Retail has many of each, and they have to agree. A single order can be placed online, reserved against a specific store&apos;s shelf for BOPIS, modified by a return at a third location, and settled across a card-present terminal and a gift-card balance — all of which must produce one coherent customer, order, and inventory record. The moment those views diverge, you get oversells, phantom stock, and refunds that do not reconcile. Unified commerce is fundamentally a distributed-systems problem wearing a storefront.
                        </p>
                        <p>
                            Seasonality compounds it. Most of the year your traffic is predictable; for a few days around Black Friday and Cyber Monday it is not, and that is exactly when inventory race conditions, non-idempotent checkouts, and uncached catalog pages turn into oversells and outages. The integrations are intricate too: POS vendors like Square, Clover, Shopify POS, and Lightspeed each have their own webhook quirks and rate limits; payment hardware changes your PCI scope depending on whether it does P2PE; and supplier EDI, purchase orders, and barcode/RFID flows all run on their own cadence. Each one has its own failure mode when something breaks at 2 a.m. on the biggest sales day of the year. We have wired this stack and know where the time gets eaten.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for retail operators</h2>
                    <ul className="space-y-3">
                        {[
                            "Omnichannel order and inventory hubs — one unified customer, order, and stock view across in-store POS, online, and mobile",
                            "Real-time inventory sync across locations — available-to-sell per store, stock reservations, cycle counts, and reconciliation jobs",
                            "POS integrations — Square, Clover, Shopify POS, Lightspeed — webhook-driven sales and stock events into a central commerce hub",
                            "BOPIS, ship-from-store, and endless aisle — reservation logic, order routing, and store-associate pick/pack/handoff workflows",
                            "In-person and online payments — Stripe Terminal for card-present, tokenized card-not-present online, gift cards and store credit",
                            "Loyalty and CRM — points and tiers, personalized offers, returns and exchanges with RMA workflows, email and SMS",
                            "Back-office tooling — purchase orders, supplier EDI, barcode/RFID receiving, and SKU/variant management",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common retail projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Real-time inventory sync service", d: "A single source-of-truth inventory service fed by webhooks from each POS and the storefront, with available-to-sell per location, stock reservations on checkout, idempotent adjustments, and a reconciliation job for cycle counts." },
                            { t: "Omnichannel order hub", d: "Unified customer, order, and inventory view across in-store, online, and mobile. Order-routing rules, fulfillment status, and a clean admin console over Square, Clover, Shopify POS, or Lightspeed." },
                            { t: "BOPIS and ship-from-store fulfillment", d: "Buy-online-pickup-in-store reservation logic, store-associate pick/pack/handoff workflow, pickup verification to limit fraud, and order routing that picks the fulfilling location." },
                            { t: "Stripe Terminal in-person checkout", d: "Card-present checkout with EMV chip and contactless via Stripe Terminal, wired into your existing order system, with receipts, refunds, and gift-card/store-credit tender." },
                            { t: "Loyalty and store-credit platform", d: "Points and tier accrual, personalized offers, gift cards, store credit, and returns/exchanges with RMA workflows. Email and SMS triggered from customer events." },
                            { t: "Endless aisle and clienteling", d: "In-store associates sell items not on the shelf from the full catalog, reserve cross-location stock, and capture customer profiles for follow-up — all reading the same inventory truth." },
                            { t: "Supplier EDI and purchase-order back-office", d: "Purchase-order creation, supplier EDI document exchange, barcode/RFID receiving against POs, and SKU/variant management that keeps the catalog clean." },
                            { t: "Returns, exchanges, and RMA workflow", d: "Customer-initiated and in-store returns, RMA tracking, restock-or-scrap decisions, refund-to-original-tender logic, and return-fraud controls." },
                            { t: "Seasonal-scale hardening", d: "Edge/CDN caching, a queue in front of inventory and checkout writes, idempotent checkout, autoscaling, graceful degradation, and a pre-season load test against projected peak." },
                            { t: "Customer data and personalization layer", d: "A focused customer data platform or integration — unified profiles, segmentation, and personalized offers — with CCPA/CPRA-aware consent and data-subject-request handling." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Compliance and security considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">PCI-DSS (card-present and online).</span> Any card acceptance puts you in PCI scope, but how much depends on your hardware. A validated P2PE solution or a Stripe Terminal reader encrypts account data inside the device, so the cardholder data never crosses your network in the clear — that can shift a location from the heavy SAQ D-Merchant toward SAQ P2PE or SAQ B-IP. Online, tokenized checkout keeps you in SAQ A or A-EP. We scope the boundary explicitly with your QSA and design POS-adjacent networks to keep the cardholder-data environment small.
                        </p>
                        <p>
                            <span className="text-white font-semibold">CCPA, CPRA, and state privacy.</span> Retail collects a lot of customer data — purchase history, loyalty profiles, contact info — which makes you a controller under CCPA/CPRA and a growing list of state privacy laws. We build consent capture, data-subject-request handling (access, deletion, opt-out of sale/sharing), and retention rules into the data model rather than bolting them on after a regulator asks.
                        </p>
                        <p>
                            <span className="text-white font-semibold">ADA and WCAG.</span> Retail storefronts are a frequent target for ADA accessibility demand letters. We build to WCAG 2.2 AA — keyboard navigation, focus management, semantic markup, contrast, and accessible checkout — as part of the definition of done.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Fraud.</span> Retail fraud is multi-surface: card testing against your checkout, account takeover on loyalty balances and stored value, BOPIS fraud at pickup, and return fraud at the counter. We wire velocity checks, pickup verification, RMA controls, and stored-value protections appropriate to your model — fraud controls are cheaper to design in than to chase after a loss.
                        </p>
                        <p>
                            <span className="text-white font-semibold">POS and back-office exposure.</span> POS terminals, store networks, and back-office systems are a documented breach vector — memory-scraping malware and flat store networks have caused some of retail&apos;s largest incidents. We design segmented networks, least-privilege access, and tamper-evident logging, and we recommend <Link href="/services/penetration-testing" className="text-emerald-400 hover:underline">penetration testing</Link> of the POS-adjacent network, web app, and APIs to find the gaps before an attacker does.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Disclosure and consumer-protection logging.</span> Pricing, promotions, gift-card terms, and return policies all carry disclosure obligations that vary by state. We do not give legal advice — but we build the consent capture, disclosure display, and audit logging your counsel will want when a question comes up.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for retail</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 16 on the App Router with React 19 and TypeScript end-to-end. Postgres for the system of record — usually Neon or RDS depending on compliance posture. Prisma or Drizzle as the type-safe ORM. Stripe for card-not-present checkout and Stripe Terminal for card-present, with gift-card and store-credit tender on top. Webhook-driven sync wires the POS (Square, Clover, Shopify POS, Lightspeed) and any ERP into a central commerce hub. Catalog search runs on Typesense or Algolia so browsing stays fast under load. CDN and edge caching front the catalog and content, and Sentry plus Datadog give you observability with PII-aware redaction in the logger.
                        </p>
                        <p>
                            The pieces that make retail hold up under a holiday spike live in the write path. Redis with BullMQ buffers inventory adjustments and checkout so a surge queues instead of oversells; checkout is idempotent and keyed so retries never double-charge; and stock reservations hold inventory for the length of a cart. Background workers handle EDI document exchange, supplier purchase orders, loyalty accrual, and email/SMS off the request path. The web tier autoscales on Vercel, read replicas absorb browse traffic, and the system degrades gracefully — cached availability keeps the store shoppable even if a write path is under pressure. POS-adjacent networks are segmented, and tender data is tokenized or P2PE-encrypted so the cardholder-data environment stays small.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused MVP", body: "One high-value workflow shipped clean — a real-time inventory-sync service between a single POS and your storefront, or a Stripe Terminal in-person checkout wired into an existing order system. 4 to 8 weeks, scoped tight to avoid the v1 feature pile." },
                            { tier: "$60K", title: "Production omnichannel hub", body: "A real omnichannel order and inventory hub — POS integration, Stripe Terminal and online checkout, available-to-sell per location, BOPIS, and a full admin console. 10 to 16 weeks." },
                            { tier: "$150K+", title: "Unified-commerce platform", body: "A larger unified-commerce platform — loyalty and store credit, multi-location inventory, ship-from-store, supplier EDI, and seasonal-scale hardening across the stack. 16 to 28 weeks with phased delivery." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-emerald-400 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery is paid separately at $2,500 and is creditable against any full engagement. See the <Link href="/contact" className="text-emerald-400 hover:underline">contact page</Link> for the full scoping flow.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Three patterns repeat. First, inventory is treated as a number on each system rather than a single reconciled truth. Each POS and the storefront keep their own count, a nightly batch tries to paper over the drift, and on the busiest day of the year a customer buys the last unit twice. By the time you notice, you are issuing apology refunds and eroding trust. Make one inventory service the source of truth and sync everything else to it — retrofitting that later means re-instrumenting every sales channel.
                        </p>
                        <p>
                            Second, checkout is not idempotent. A shopper&apos;s phone drops on a flaky holiday connection, the request retries, and now there are two orders and two charges — or the inventory decrements twice. Idempotency keys on checkout and on every inventory write are cheap to add up front and miserable to add after a Black Friday incident. Design the write path to survive retries from day one.
                        </p>
                        <p>
                            Third, teams overscope the first release. A new omnichannel program gets pitched with five POS integrations, loyalty, EDI, and clienteling all in v1, and ships a year late serving no one. The realistic build is one POS, one fulfillment mode, and a rock-solid inventory truth — shipped in eight weeks, used through one season, and learned from. We push hard for that scoping discipline because the season does not wait for a nine-month build.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why founder-led matters for retail</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The thing that hurts a retailer is rarely a single bug. It is the oversell on the highest-traffic day, the flat store network that let memory-scraping malware reach the terminals, or the customer database copied by a contractor before the engagement ended. Inventory integrity, PCI scope, and customer-data exposure are the quiet existential risks in retail engineering — and that is exactly why we are US-based, founder-led, and engagement-first on every project.
                        </p>
                        <p>
                            William Beltz writes or reviews every line of code that touches your inventory, your tender flows, or your customer data. NDAs are mutual and signed before discovery. Source code lives in your GitHub organization, not ours. The handoff is documented for either ongoing collaboration or in-house ownership — your call.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Penetration testing tied to retail threat models</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Retail&apos;s largest breaches have come through POS-adjacent networks and back-office systems, not just the public website. We run <Link href="/services/network-pentest" className="text-emerald-400 hover:underline">network penetration tests</Link> against store and back-office segments to find flat networks, weak segmentation, and the lateral-movement paths that let an attacker reach the cardholder-data environment from a soft entry point.
                        </p>
                        <p>
                            On the application side, a <Link href="/services/web-app-pentest" className="text-emerald-400 hover:underline">web app pentest</Link> covers your storefront, admin console, and checkout — card testing, account takeover on loyalty and stored value, and authorization gaps — while <Link href="/services/penetration-testing" className="text-emerald-400 hover:underline">penetration testing</Link> of your order, inventory, and POS-sync APIs catches the integration-layer flaws that automated scanners miss. Findings come back evidence-backed and audit-ready for your PCI assessor and cyber-insurance carrier.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Architecture patterns we reuse</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">Inventory as a single source of truth.</span> Every channel — each POS, the storefront, the mobile app — publishes sales and stock events to one inventory service. Available-to-sell is computed per location, reservations hold stock for the length of a cart, adjustments are idempotent, and a reconciliation job settles drift against cycle counts. BOPIS, ship-from-store, and endless aisle all read the same numbers, so the views never diverge.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Webhook-driven sync over polling.</span> POS and ERP systems push events into a central commerce hub through webhooks, with a reconciliation backstop for missed messages. This keeps the hub current without hammering vendor rate limits and gives you one place to apply ordering, deduplication, and retry semantics. The same pattern carries to <Link href="/services/third-party-api-integration" className="text-emerald-400 hover:underline">third-party API integration</Link> work across the retail stack.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Queue-buffered, idempotent checkout.</span> Checkout and inventory writes go through a queue (BullMQ on Redis) so a seasonal spike degrades gracefully instead of oversells or double-charges. Idempotency keys make retries safe, read replicas and cached availability keep browsing alive under load, and the web tier autoscales. This is the difference between a holiday weekend that holds and one that trends for the wrong reasons.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "How does card-present POS affect our PCI-DSS scope, and does Stripe Terminal reduce it?",
                                a: "It depends on the hardware. A validated P2PE solution or a Stripe Terminal reader encrypts card data inside the device, so account data never hits your application or network in the clear — that can move a location toward SAQ P2PE or SAQ B-IP instead of the much heavier SAQ D-Merchant. Online, tokenized card-not-present flows keep you in SAQ A or A-EP. We scope the boundary honestly with your QSA rather than guessing.",
                            },
                            {
                                q: "Can you keep inventory in sync in real time across multiple store locations and online?",
                                a: "Yes. The pattern is a single inventory service as the source of truth, fed by webhook-driven sync from each POS and the storefront, with stock reservations on checkout, idempotent adjustments, and a reconciliation job for cycle counts. We model available-to-sell per location so BOPIS, ship-from-store, and endless aisle all read the same numbers.",
                            },
                            {
                                q: "Which POS systems do you integrate with?",
                                a: "We have integrated Square, Clover, Shopify POS, and Lightspeed, plus custom POS via their APIs and webhooks. The approach is the same regardless of vendor: treat the POS as one node that publishes sales and stock events to a central commerce hub, and reconcile rather than trust any single system blindly.",
                            },
                            {
                                q: "How do you handle Black Friday and holiday traffic spikes?",
                                a: "Edge and CDN caching for catalog and content, a queue (BullMQ on Redis) in front of inventory writes and checkout so a spike does not create oversells, idempotent checkout keyed to prevent double-charges on retries, autoscaling on the web tier, and graceful degradation — read replicas and cached availability keep browsing alive even if a write path is under pressure. We load-test against your projected peak before the season.",
                            },
                            {
                                q: "Can you build BOPIS and ship-from-store?",
                                a: "Yes. BOPIS (buy-online-pickup-in-store) and ship-from-store both depend on accurate per-location inventory and a unified order view. We build the reservation logic, store-associate pick/pack/handoff workflow, customer notifications, and the order-routing rules that decide which location fulfills — including BOPIS fraud controls like pickup verification.",
                            },
                            {
                                q: "Do you build loyalty and CRM programs?",
                                a: "Yes — points and tier accrual, personalized offers, store credit and gift cards, returns/exchanges with RMA workflows, and email/SMS triggered from customer events. We can integrate a customer data platform or build a focused one, and we keep customer data handling aligned with CCPA/CPRA and state privacy law.",
                            },
                            {
                                q: "Will our storefront be ADA and WCAG accessible?",
                                a: "We build to WCAG 2.2 AA — keyboard navigation, focus management, semantic markup, color contrast, and accessible forms and checkout. Retail storefronts are a frequent ADA demand-letter target, so accessibility is part of the definition of done, not a later retrofit.",
                            },
                            {
                                q: "What does a $25,000 retail build look like?",
                                a: "A focused build — one high-value workflow shipped well. Example: a real-time inventory-sync service between a single POS (Square, Clover, Shopify POS, or Lightspeed) and your storefront, with stock reservations and a reconciliation job. Or a Stripe Terminal in-person checkout wired into an existing order system. Scoped to 4 to 8 weeks, no feature pile-on.",
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
                            { slug: "ecommerce-development", title: "E-Commerce Development", desc: "Storefronts, checkout, and catalog built to scale through the holiday peak." },
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Stripe Terminal for card-present plus tokenized online checkout and gift cards." },
                            { slug: "third-party-api-integration", title: "Third-Party API Integration", desc: "Webhook-driven sync to POS, ERP, and supplier EDI across the retail stack." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "Manual, evidence-backed pentests audit-ready for PCI and cyber-insurance." },
                            { slug: "network-pentest", title: "Network Pentest", desc: "POS-adjacent and back-office network testing — segmentation and lateral movement." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Inventory, order, and back-office tooling tailored to how your stores run." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-emerald-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["stripe","compliance","build-vs-buy"]}
                        heading="Retail & commerce engineering reading"
                        pinned={["pci-dss-compliance-saas-checklist","nextjs-stripe-integration-guide","handling-failed-payments-in-stripe"]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ship retail that holds up on Black Friday.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-emerald-400 hover:underline">book a 20-minute scope call</Link>. Mutual NDA signed before discovery. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
