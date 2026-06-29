import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Plug, Check, ArrowRight, MapPin } from "lucide-react";
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
    title: "Third-Party API Integration | Stripe, QuickBooks | QUANT LAB USA",
    description:
        "Reliable third-party API integration — Stripe, QuickBooks, HubSpot, Salesforce, Twilio, and more. Idempotent webhooks, retries, sync. Call (770) 652-1282.",
    slug: "services/third-party-api-integration",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Third-Party API Integration",
    name: "Third-Party API Integration and Data Sync",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Production third-party API integration with Stripe, QuickBooks, HubSpot, Salesforce, Twilio, Plaid, Shopify, and dozens more. Bidirectional data sync, idempotent webhook handling, retry queues, rate-limit management, and monitoring built to survive vendor changes.",
    url: "https://quantlabusa.dev/services/third-party-api-integration",
    offers: {
        "@type": "Offer",
        priceRange: "$6,000-$50,000",
        priceCurrency: "USD",
        description: "Fixed-fee scope per integration",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Third-Party API Integration", item: "https://quantlabusa.dev/services/third-party-api-integration" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Which third-party services have you integrated with?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Stripe, QuickBooks Online, HubSpot, Salesforce, Twilio, Plaid, Shopify, NetSuite, Xero, Intercom, Slack, Google Workspace, Microsoft 365, Apollo, Apify, and a long list of others. If a service publishes a REST, GraphQL, or webhook API, we can integrate it — and if its API is undocumented or hostile, we have done that too.",
            },
        },
        {
            "@type": "Question",
            name: "Why not just use Zapier or Make?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No-code tools are great for simple, low-volume flows. They start to hurt when a webhook silently drops a record, a vendor schema change breaks a flow at 3am, the execution costs climb, or your real business logic is scattered across a dozen zaps nobody understands. A custom integration owns that logic, handles edge cases properly, and does not bill per task.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle webhooks that fire twice or out of order?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Idempotency keys, signature verification, an event log, and a retry queue with exponential backoff. Every inbound event is recorded and processed exactly once, even if the vendor sends it three times. Out-of-order delivery is handled with state checks so a stale update never overwrites a newer one. There is also an admin dashboard to inspect and replay events.",
            },
        },
        {
            "@type": "Question",
            name: "What happens when the vendor changes their API?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We pin to a specific API version where the vendor supports it, monitor their changelog, and build integration tests that catch a breaking change before it reaches production. When a migration is required, we handle it as planned work with a tested rollback, not as a fire drill.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the integration code?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the deployment configuration, the monitoring setup, and the documentation. There is no per-task fee, no platform tax, and nothing to hold your data hostage if you stop working with us.",
            },
        },
    ],
};

export default function ThirdPartyAPIIntegrationPage() {
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
                        <li className="text-gray-300">Third-Party API Integration</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-400 mb-6">
                        <Plug className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Third-Party API Integration That Does Not Break at 3am
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Stripe, QuickBooks, HubSpot, Salesforce, Twilio, Plaid, Shopify, and dozens more — connected with idempotent webhooks, retry queues, rate-limit handling, and monitoring. The reliability the no-code layer was never built to give you.
                    </p>
                    <ConsultationCTA label="Scope an Integration" service="Third-Party API Integration" source="services-api-integration" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When two systems have to agree</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Every growing business ends up with systems that need to stay in sync — payments in Stripe, accounting in QuickBooks, deals in a CRM, messages in Twilio, inventory in Shopify. Keeping them aligned by hand burns hours and breeds errors. Wiring them together with a no-code tool works until a webhook silently fails and a customer's payment never reaches accounting, or a vendor changes a field and the whole flow falls over while everyone is asleep.
                        </p>
                        <p>
                            Third-party API integration is the engineering that makes those connections trustworthy. Events are verified, recorded, and processed exactly once. Failures retry with backoff and surface in a dashboard instead of vanishing. Data flows bidirectionally with conflict handling so a stale update never clobbers a fresh one. The integration is pinned to vendor API versions and covered by tests, so a vendor's change is planned work, not a 3am incident. The business logic lives in one place your team can read, not scattered across a dozen automations.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we integrate</h2>
                    <ul className="space-y-3">
                        {[
                            "Payments and billing — Stripe, PayPal, Braintree, and merchant-of-record platforms",
                            "Accounting — QuickBooks Online, Xero, NetSuite, and bidirectional invoice and payment sync",
                            "CRM — HubSpot, Salesforce, Pipedrive, and contact, deal, and activity sync",
                            "Communications — Twilio, SendGrid, Postmark, Slack, and email/SMS/voice workflows",
                            "Banking and fintech — Plaid, bank feeds, and reconciliation pipelines",
                            "E-commerce — Shopify, WooCommerce, and order, inventory, and fulfillment sync",
                            "Data and enrichment — Apollo, Apify, Clearbit, and scraping or enrichment pipelines",
                            "Webhook ingestion with signature verification, idempotency keys, and a retry queue",
                            "Bidirectional sync with conflict resolution and field-level mapping",
                            "An admin dashboard to inspect, monitor, and replay every event",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our methodology</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Integration work starts with the data, not the code. Discovery maps the fields, the source of truth for each one, the direction of flow, and what happens on conflict. We document that contract before building, then implement against a sandbox so nothing touches live data until it is proven. Idempotency, retries, and monitoring are built in from the first commit, because they are the parts that determine whether the integration survives contact with production.
                        </p>
                        <p>
                            Discovery and field mapping → sandbox build → staged rollout with reconciliation → monitoring and handoff (2 to 8 weeks typical). You own the source code, the deployment, and the dashboard.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Node + TypeScript",
                            "Stripe + QuickBooks APIs",
                            "HubSpot + Salesforce APIs",
                            "Twilio + SendGrid",
                            "Plaid + Shopify",
                            "Redis + BullMQ queues",
                            "PostgreSQL event log",
                            "Webhook signing + idempotency",
                            "Monitoring + alerting",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Deployed on Vercel, AWS, Fly.io, or your own infrastructure. Integration work is part of the same backbone behind every <Link href="/services/api-development" className="text-indigo-400 hover:underline">API build</Link>, <Link href="/services/stripe-integration" className="text-indigo-400 hover:underline">Stripe integration</Link>, and <Link href="/services/custom-crm-development" className="text-indigo-400 hover:underline">custom CRM</Link> we ship.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">The parts that break integrations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Integrations fail in predictable ways: a webhook that fires three times, a rate limit hit during a burst, a token that expired silently, a vendor field that changed type, a partial sync that left two systems disagreeing. We design for every one of these by default — exactly-once processing, token bucket throttling with backoff, automatic credential refresh, version pinning, and reconciliation jobs that detect and heal drift. These are not add-ons; they are the difference between an integration that works in the demo and one that works in production for years.
                        </p>
                        <p>
                            Because integrations move money, customer data, and credentials, security is part of the build: signed webhooks, scoped credentials, secrets kept out of source, and an audit trail of every external call. Every integration we ship is designed to survive a security review.
                        </p>
                        <p>
                            Integration work served from <Link href="/software-development-macon-ga" className="text-indigo-400 hover:underline">Macon, GA</Link>, with clients across <Link href="/software-development-atlanta-ga" className="text-indigo-400 hover:underline">Atlanta</Link>, <Link href="/software-development-new-york-ny" className="text-indigo-400 hover:underline">New York</Link>, <Link href="/software-development-san-francisco-ca" className="text-indigo-400 hover:underline">San Francisco</Link>, and the rest of the US.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fixed-fee per integration. Typical ranges:
                        </p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Single one-way integration (push data from A to B): $6k – $14k</li>
                            <li>Bidirectional sync between two systems with conflict handling: $12k – $28k</li>
                            <li>Webhook ingestion service with retry, replay, and admin UI: $12k – $25k</li>
                            <li>Multi-system hub (CRM ↔ billing ↔ accounting): $25k – $50k</li>
                            <li>Discovery and field-mapping sprint: $1,500 flat</li>
                        </ul>
                        <p>
                            30-day post-launch support included. Optional retainer for adding integrations and absorbing vendor API changes.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "Full source code repository in your GitHub organization",
                            "Field-mapping documentation and the integration contract for every connected system",
                            "Idempotent webhook handling with an event log and a replay-capable admin dashboard",
                            "Production deployment with a sandbox environment for safe testing",
                            "Monitoring and alerting so a failed sync pages someone instead of vanishing",
                            "30-day post-launch support — debugging, vendor API changes, and hot patches",
                            "A reconciliation job that detects and reports drift between connected systems",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
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
                                q: "Which third-party services have you integrated with?",
                                a: "Stripe, QuickBooks Online, HubSpot, Salesforce, Twilio, Plaid, Shopify, NetSuite, Xero, Intercom, Slack, Google Workspace, Microsoft 365, Apollo, Apify, and a long list of others. If a service publishes a REST, GraphQL, or webhook API, we can integrate it — and if its API is undocumented or hostile, we have done that too.",
                            },
                            {
                                q: "Why not just use Zapier or Make?",
                                a: "No-code tools are great for simple, low-volume flows. They start to hurt when a webhook silently drops a record, a vendor schema change breaks a flow at 3am, the execution costs climb, or your real business logic is scattered across a dozen zaps nobody understands. A custom integration owns that logic, handles edge cases properly, and does not bill per task.",
                            },
                            {
                                q: "How do you handle webhooks that fire twice or out of order?",
                                a: "Idempotency keys, signature verification, an event log, and a retry queue with exponential backoff. Every inbound event is recorded and processed exactly once, even if the vendor sends it three times. Out-of-order delivery is handled with state checks so a stale update never overwrites a newer one. There is also an admin dashboard to inspect and replay events.",
                            },
                            {
                                q: "What happens when the vendor changes their API?",
                                a: "We pin to a specific API version where the vendor supports it, monitor their changelog, and build integration tests that catch a breaking change before it reaches production. When a migration is required, we handle it as planned work with a tested rollback, not as a fire drill.",
                            },
                            {
                                q: "Do we own the integration code?",
                                a: "Completely. You get the GitHub repository, the deployment configuration, the monitoring setup, and the documentation. There is no per-task fee, no platform tax, and nothing to hold your data hostage if you stop working with us.",
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
                    <RelatedPosts
                        topics={["stripe", "stack"]}
                        heading="Integration & stack reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "api-development", title: "API Development", desc: "The REST and GraphQL APIs your integrations talk to." },
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Production-grade payments and webhook handling." },
                            { slug: "ai-chatbot-development", title: "AI Chatbot Development", desc: "Agents that act on the systems you've connected." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-indigo-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                        Background reading on reliable webhooks: <Link href="/blog/stripe-webhook-security-best-practices" className="text-indigo-400 hover:underline">Stripe webhook security best practices</Link>. To scope an integration, <Link href="/contact" className="text-indigo-400 hover:underline">contact us</Link> directly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-indigo-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Third-Party API Integration — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based engineering team, working with clients across 14 US metros. Integration work runs remotely; in-person reviews available in Atlanta and the Southeast.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {cities.map((c) => (
                            <Link
                                key={c.slug}
                                href={`/software-development-${c.slug}`}
                                className="group flex items-center justify-between rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 transition-all hover:border-indigo-400/30 hover:bg-[#0d1526]"
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                        {c.city}, {c.state}
                                    </span>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Connect your systems so they stay connected.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. Founder-led from field mapping through monitoring.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="Third-Party API Integration" source="services-api-integration" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
