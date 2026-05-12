import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Code2, Check, ArrowRight, MapPin } from "lucide-react";

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

export const metadata: Metadata = {
    title: "API Development | REST, GraphQL, Integrations | QuantLab USA",
    description:
        "Custom API development on Node, TypeScript, and PostgreSQL. REST and GraphQL APIs, third-party integrations, webhooks. Founder-led. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/services/api-development" },
    openGraph: {
        title: "Custom API Development for Companies That Need More Than Zapier",
        description:
            "REST and GraphQL API development, third-party integration, webhook architecture, and the documentation your engineering team will actually use.",
        url: "https://quantlabusa.dev/services/api-development",
        type: "article",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "API Development",
    name: "REST and GraphQL API Development and Integration",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#org",
    },
    areaServed: "United States",
    description:
        "Custom API development on Node, TypeScript, and PostgreSQL. REST, GraphQL, gRPC, webhook architecture, and third-party integration with Stripe, QuickBooks, Twilio, HubSpot, Salesforce, and dozens more. OpenAPI documentation, versioning, rate limiting, and authentication built in.",
    url: "https://quantlabusa.dev/services/api-development",
    offers: {
        "@type": "Offer",
        priceRange: "$8,000-$75,000",
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
        { "@type": "ListItem", position: 3, name: "API Development", item: "https://quantlabusa.dev/services/api-development" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "REST or GraphQL?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "REST for public APIs, partner integrations, and CRUD-heavy services. GraphQL when you have one backend feeding multiple clients (web + mobile + admin) with overlapping but distinct data needs. We scope this on the first call based on who the consumers are.",
            },
        },
        {
            "@type": "Question",
            name: "Can you integrate us with Stripe, QuickBooks, HubSpot, Salesforce, Twilio, and the rest?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We have shipped production integrations with all of those plus Plaid, Shopify, NetSuite, Xero, Intercom, Slack, Google Workspace, Microsoft 365, Twilio, Apify, Apollo, and a long list of others. Webhook reliability and idempotency are the parts most teams get wrong, and we handle them by default.",
            },
        },
        {
            "@type": "Question",
            name: "How do you document the API?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "OpenAPI 3.1 spec generated from the code, plus a hosted Swagger or Redoc UI, plus a Postman or Insomnia collection. Every endpoint includes request and response examples, error codes, and rate-limit headers. Your downstream consumers and AI assistants both ingest it correctly.",
            },
        },
        {
            "@type": "Question",
            name: "What about authentication, rate limiting, and security?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "OAuth 2 with PKCE, API keys with scoped permissions, JWT, or mTLS depending on the audience. Rate limiting via token bucket with per-key and per-IP buckets. Logging, audit trail, and request signing built in. Every API we ship is designed to survive a security review.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the OpenAPI spec, the deployment configuration, and the documentation. There is no per-call fee, no platform tax, and no exit ransom.",
            },
        },
    ],
};

export default function APIDevelopmentPage() {
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
                        <li className="text-gray-300">API Development</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-400 mb-6">
                        <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom API Development for Companies That Need More Than Zapier
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        REST and GraphQL APIs, third-party integration, webhook architecture, and the documentation your engineering team will actually use. Built on Node, TypeScript, and PostgreSQL. Designed to survive a real consumer.
                    </p>
                    <ConsultationCTA label="Scope an API Build" service="API Development" source="services-api" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When you have outgrown the no-code layer</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Zapier, Make, and Workato are great until they are not. A single failed webhook silently drops a customer record. A schema change at the vendor breaks the flow at 3am and your ops team finds out from a customer support ticket. The retries pile up. The execution costs climb past what a junior engineer would cost. Meanwhile your real integration logic — the part that actually maps your business rules onto a third party's data model — lives in twelve different zaps that no one understands.
                        </p>
                        <p>
                            Custom API development is what happens after that. A versioned, documented, monitored set of endpoints that your team owns. Webhooks that are idempotent, retried with exponential backoff, and audited. Integrations that survive vendor API changes because we pin versions and review changelogs. APIs that handle the long tail of edge cases the no-code layer was never designed for.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build</h2>
                    <ul className="space-y-3">
                        {[
                            "REST APIs in Node and TypeScript with OpenAPI 3.1 specifications generated from the code",
                            "GraphQL APIs with Apollo Server or GraphQL Yoga, schema-first or code-first",
                            "Third-party integrations with Stripe, QuickBooks, HubSpot, Salesforce, Twilio, Plaid, Shopify, Apollo, Apify, and dozens more",
                            "Webhook ingestion with signature verification, idempotency keys, retry queues, and an admin replay dashboard",
                            "Authentication — OAuth 2 with PKCE, API keys with scoped permissions, JWT, mTLS, or session-based",
                            "Rate limiting via token bucket with per-key, per-IP, and per-endpoint buckets",
                            "Background jobs and queues on Redis or Postgres for long-running work, scheduled syncs, and retries",
                            "API gateway, request signing, and audit logging suitable for a SOC 2 or HIPAA audit",
                            "Developer portal — Swagger or Redoc, plus a Postman collection and example code snippets",
                            "Versioning strategy — URL-based or header-based — and a deprecation playbook for consumers",
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
                            API design starts with the contract, not the code. Discovery produces an OpenAPI 3.1 specification that the consumers can mock against before a single endpoint is built. From there we generate types for both server and client, build the implementation, and run contract tests on every commit. The documentation is not an afterthought — it is the source of truth that everything else is generated from.
                        </p>
                        <p>
                            Two-week discovery → contract design → phased build (4 to 12 weeks typical) → consumer onboarding with documentation and sandbox keys. You own the source code, the spec, the deployment, and the audit trail.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Node + TypeScript",
                            "Fastify / Express / Hono",
                            "GraphQL Yoga + Apollo",
                            "OpenAPI 3.1",
                            "PostgreSQL + Prisma",
                            "Redis + BullMQ",
                            "Zod + tRPC",
                            "Stripe + QuickBooks APIs",
                            "Docker + Kubernetes",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Deployed on Vercel, AWS, Fly.io, or your own infrastructure. PostgreSQL is the source of truth — the same backbone we use for every <Link href="/services/custom-crm-development" className="text-indigo-400 hover:underline">custom CRM</Link>, <Link href="/services/web-applications" className="text-indigo-400 hover:underline">web application</Link>, and <Link href="/services/saas-platform-development" className="text-indigo-400 hover:underline">SaaS platform</Link> we ship.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference builds</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            API and integration work shows up in every project we ship. <Link href="/work/bridgepointe-painting" className="text-indigo-400 hover:underline">Bridgepointe Painting</Link> runs on a custom Stripe + QuickBooks Online sync API that closed month-end from three days to thirty minutes. <Link href="/work/j5-sales-os" className="text-indigo-400 hover:underline">J5 Sales OS</Link> wires Apify, Apollo, Stripe, and QuickBooks behind a unified internal API. <Link href="/work/contractor-estimating-proposal-engine" className="text-indigo-400 hover:underline">A contractor estimating engine</Link> exposes proposal generation through both an internal REST API and a partner-facing GraphQL endpoint.
                        </p>
                        <p>
                            Every API we ship survives the things that break integrations in practice — vendor API version changes, rate-limit storms, replay attacks, and the inevitable webhook that fires three times at once.
                        </p>
                        <p>
                            API development served from <Link href="/software-development-macon-ga" className="text-indigo-400 hover:underline">Macon, GA</Link>, with clients across <Link href="/software-development-atlanta-ga" className="text-indigo-400 hover:underline">Atlanta</Link>, <Link href="/software-development-new-york-ny" className="text-indigo-400 hover:underline">New York</Link>, <Link href="/software-development-san-francisco-ca" className="text-indigo-400 hover:underline">San Francisco</Link>, and the rest of the US.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fixed-fee per scope. Typical ranges:
                        </p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Single integration (Stripe ↔ QuickBooks, HubSpot ↔ internal DB): $8k – $18k</li>
                            <li>REST or GraphQL API for an existing product: $15k – $40k</li>
                            <li>Full developer-facing API with portal, OAuth, rate limiting, billing: $30k – $75k</li>
                            <li>Webhook ingestion service with retry, replay, audit, and admin UI: $12k – $28k</li>
                            <li>Discovery sprint with OpenAPI contract: $2,500 flat</li>
                        </ul>
                        <p>
                            30-day post-launch support included. Optional monthly retainer for continued feature work and integration additions.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "Full source code repository in your GitHub organization",
                            "OpenAPI 3.1 specification and hosted developer documentation",
                            "Postman or Insomnia collection plus example code in TypeScript, Python, and curl",
                            "Production deployment with staging environment for integration testing",
                            "30-day post-launch support — debugging consumer issues, vendor API changes, hot patches",
                            "Audit logs, rate-limit metrics, and an admin dashboard for replay and inspection",
                            "Versioning and deprecation playbook so consumers know what is changing and when",
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
                                q: "REST or GraphQL?",
                                a: "REST for public APIs, partner integrations, and CRUD-heavy services. GraphQL when you have one backend feeding multiple clients (web + mobile + admin) with overlapping but distinct data needs. We scope this on the first call based on who the consumers are.",
                            },
                            {
                                q: "Can you integrate us with Stripe, QuickBooks, HubSpot, Salesforce, Twilio, and the rest?",
                                a: "Yes. We have shipped production integrations with all of those plus Plaid, Shopify, NetSuite, Xero, Intercom, Slack, Google Workspace, Microsoft 365, Twilio, Apify, Apollo, and a long list of others. Webhook reliability and idempotency are the parts most teams get wrong, and we handle them by default.",
                            },
                            {
                                q: "How do you document the API?",
                                a: "OpenAPI 3.1 spec generated from the code, plus a hosted Swagger or Redoc UI, plus a Postman or Insomnia collection. Every endpoint includes request and response examples, error codes, and rate-limit headers. Your downstream consumers and AI assistants both ingest it correctly.",
                            },
                            {
                                q: "What about authentication, rate limiting, and security?",
                                a: "OAuth 2 with PKCE, API keys with scoped permissions, JWT, or mTLS depending on the audience. Rate limiting via token bucket with per-key and per-IP buckets. Logging, audit trail, and request signing built in. Every API we ship is designed to survive a security review.",
                            },
                            {
                                q: "Do we own the code?",
                                a: "Completely. You get the GitHub repository, the OpenAPI spec, the deployment configuration, and the documentation. There is no per-call fee, no platform tax, and no exit ransom.",
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
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Production-grade Stripe APIs and webhook handling." },
                            { slug: "saas-platform-development", title: "SaaS Platform Development", desc: "Full multi-tenant builds where APIs are the product." },
                            { slug: "custom-crm-development", title: "Custom CRM Development", desc: "Data model and CRM behind the API surface." },
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
                        Background reading on our approach to data ownership: <Link href="/blog/custom-crm-development-guide" className="text-indigo-400 hover:underline">the custom CRM development guide</Link>. To scope an API project, <Link href="/contact" className="text-indigo-400 hover:underline">contact us</Link> directly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-indigo-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">API Development — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based engineering team, working with clients across 14 US metros. API design and integration work runs remotely; in-person reviews available in Atlanta and the Southeast.
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
                            Ready to ship an API that holds up under load.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. Founder-led from contract design through consumer onboarding.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="API Development" source="services-api" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
