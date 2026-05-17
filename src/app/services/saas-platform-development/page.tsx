import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Layers, Check, ArrowRight, MapPin } from "lucide-react";
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
    title: "SaaS Platform Development | Multi-Tenant Builds | QUANT LAB USA",
    description:
        "Custom SaaS platform development on Next.js, PostgreSQL, and Stripe Billing. Multi-tenant architecture, auth, billing, admin tooling. Founder-led from MVP to scale.",
    slug: "services/saas-platform-development",
    image: "/og-web-apps.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "SaaS Platform Development",
    name: "Custom SaaS Platform Development",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Founder-led custom SaaS platform development for B2B software companies. Multi-tenant architecture on Next.js, PostgreSQL, and Stripe Billing — auth, RBAC, billing, admin tooling, audit logs, and the operational backbone needed to scale past the first 100 customers. Source code, database, and deployment owned by the client.",
    url: "https://quantlabusa.dev/services/saas-platform-development",
    offers: {
        "@type": "Offer",
        priceRange: "$45,000-$180,000",
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
        { "@type": "ListItem", position: 3, name: "SaaS Platform Development", item: "https://quantlabusa.dev/services/saas-platform-development" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How is multi-tenant architecture handled — shared schema, schema-per-tenant, or database-per-tenant?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Default is shared schema with a tenant_id column on every row plus row-level security at the PostgreSQL layer. Schema-per-tenant when customers demand stronger isolation. Database-per-tenant when you have an enterprise tier that requires data residency. We pick the right one in discovery based on your buyers and your compliance bar.",
            },
        },
        {
            "@type": "Question",
            name: "How long does a SaaS MVP take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "12 to 24 weeks for a v1 with multi-tenant auth, billing, the core product surface, and an admin console. The longer end includes RBAC, audit logging, SAML SSO, and SOC 2 prep. We always ship a usable, paying-customer-ready v1 before adding nice-to-haves.",
            },
        },
        {
            "@type": "Question",
            name: "What about Stripe Billing — plan tiers, usage-based, proration, dunning?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "All of the above. Plan tiers, metered usage, seat-based, hybrid pricing, mid-cycle upgrades with proration, dunning, churn recovery, and revenue dashboards. Stripe is the payment processor; PostgreSQL is the source-of-truth ledger so reconciliation never breaks.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build us toward SOC 2 readiness?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Audit logging, RBAC, SSO with SAML and SCIM, encryption at rest and in transit, secret management, and the operational evidence your auditor will ask for. We build platforms that can survive a SOC 2 Type II without a rebuild.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own the code?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the GitHub repository, the database schema, the deployment configuration, and the documentation. There is no platform tax, no per-tenant fee, and no exit ransom — your SaaS belongs to you.",
            },
        },
    ],
};

export default function SaaSPlatformDevelopmentPage() {
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
                        <li className="text-gray-300">SaaS Platform Development</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-400 mb-6">
                        <Layers className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        SaaS Platform Development for Founders Past the No-Code Stage
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Multi-tenant SaaS on Next.js, PostgreSQL, and Stripe Billing — auth, RBAC, billing, admin tooling, and the operational backbone you need to scale past your first 100 customers. Founder-led from MVP to enterprise tier.
                    </p>
                    <ConsultationCTA label="Scope a SaaS Build" service="SaaS Platform Development" source="services-saas" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When the prototype hits a wall</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most SaaS products start the same way — a no-code prototype, a few paying customers, then a hard wall the day the founders realize they need real multi-tenancy, real billing, real admin tooling, and real audit logs. The Airtable backend cannot model the workflows. The Webflow front end cannot ship the dashboard. The Stripe Checkout link cannot handle the proration and dunning. Suddenly the same founders who built a working product on no-code are staring at a six-figure rewrite from an agency that wants to start over.
                        </p>
                        <p>
                            Custom SaaS platform development picks up where no-code stops. We build the production-grade version of what you already proved demand for — with the architecture, billing, and operational layer your real customers expect. The product surface lives in Next.js, the data lives in PostgreSQL, the money flows through Stripe Billing, and the whole thing is yours.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build</h2>
                    <ul className="space-y-3">
                        {[
                            "Multi-tenant architecture with row-level security, schema-per-tenant, or full database-per-tenant isolation",
                            "Authentication including email/password, magic link, Google, Microsoft, SAML SSO, and SCIM provisioning",
                            "Role-based access control with custom permissions, team and seat management, and invite flows",
                            "Stripe Billing wired for plan tiers, metered usage, seat-based pricing, mid-cycle proration, and dunning",
                            "Customer-facing billing portal — upgrades, payment methods, invoice history, seat changes",
                            "Admin console for your operations team — tenant search, impersonation with audit, manual billing actions, refund handling",
                            "Audit logging across every state-changing action — exportable, retainable, and SOC 2 audit-ready",
                            "Onboarding and product-led growth surfaces — checklists, in-app upgrade prompts, trial expiration flows",
                            "Webhooks, public API, and the developer surface customers and partners need",
                            "Operational layer — Sentry, PostHog, log aggregation, alerting, and an on-call playbook",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our methodology</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Three-week discovery — user flows, tenant model, pricing model, data model, RBAC matrix, and a phased build plan. From there we run twelve- to twenty-four-week build phases with biweekly demos to your stakeholders, paying customers on the platform from week eight, and a hardening sprint before each major release.
                        </p>
                        <p>
                            Discovery is paid separately at $3,500 for SaaS builds — the spec is more involved than a single-tenant app. You walk away with wireframes, a data model, an RBAC matrix, a pricing model, and a phased estimate. Useful even if you take it to another developer.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Process &amp; timeline</h2>
                    <ul className="space-y-3">
                        {[
                            "Week 1-3: Discovery sprint — tenant model, RBAC, pricing model, data model, phased plan",
                            "Week 4-7: Foundations — auth, multi-tenant data layer, billing skeleton, admin console v0",
                            "Week 8-16: Core product surface — your unique feature work, customer-facing UI, onboarding",
                            "Week 17-20: Hardening — audit logs, SSO, observability, security review, performance pass",
                            "Week 21-24: Launch — paid customers on the platform, support runbook, 60-day post-launch support",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
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
                            "TypeScript",
                            "PostgreSQL + Prisma",
                            "Stripe Billing",
                            "Clerk / Auth.js / WorkOS",
                            "Redis + BullMQ",
                            "PostHog + Sentry",
                            "Vercel / Fly.io / AWS",
                            "Docker + Kubernetes",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Same backbone we use for every <Link href="/services/web-applications" className="text-violet-400 hover:underline">Next.js web application</Link> and <Link href="/services/custom-crm-development" className="text-violet-400 hover:underline">custom CRM</Link>. Billing wired through our <Link href="/services/stripe-integration" className="text-violet-400 hover:underline">Stripe integration</Link> playbook.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference builds</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Our internal sales platform — <Link href="/work/j5-sales-os" className="text-violet-400 hover:underline">J5 Sales OS</Link> — runs on the same multi-tenant patterns we ship to SaaS clients. Contact deduplication, outreach presets, dual-mode lead flow, embedded reporting, Stripe and QuickBooks integration, full audit logs. Production-grade from day one. We dogfood the patterns before we ship them.
                        </p>
                        <p>
                            SaaS-adjacent builds in production: <Link href="/work/contractor-estimating-proposal-engine" className="text-violet-400 hover:underline">a contractor estimating engine</Link> with multi-org workflows, <Link href="/work/motorcycle-shop-ops-platform" className="text-violet-400 hover:underline">a motorcycle shop ops platform</Link> with role-based service-bay access, and <Link href="/work/wilder-recovery" className="text-violet-400 hover:underline">Wilder Recovery</Link> for tenant-isolated coaching workflows. Same architecture, different domains.
                        </p>
                        <p>
                            SaaS development served from <Link href="/software-development-macon-ga" className="text-violet-400 hover:underline">Macon, GA</Link>, with clients across <Link href="/software-development-atlanta-ga" className="text-violet-400 hover:underline">Atlanta</Link>, <Link href="/software-development-austin-tx" className="text-violet-400 hover:underline">Austin</Link>, <Link href="/software-development-seattle-wa" className="text-violet-400 hover:underline">Seattle</Link>, and beyond.
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
                            <li>SaaS MVP (single tier, basic billing, B2B): $45k – $85k</li>
                            <li>Full multi-tier SaaS with admin console and Stripe Billing: $75k – $140k</li>
                            <li>Enterprise-tier features — SAML SSO, SCIM, audit logs, SOC 2 prep: $40k – $80k add-on</li>
                            <li>Discovery sprint with tenant model, RBAC, pricing model, and phased plan: $3,500 flat</li>
                        </ul>
                        <p>
                            60-day post-launch support included on every SaaS build. Optional retainer for ongoing feature work, integration additions, and platform upgrades.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "Full source code repository in your GitHub organization",
                            "Production deployment plus staging environment for safe releases",
                            "Multi-tenant database schema with migrations and a documented data model",
                            "Stripe Billing configuration in your account, with reconciliation against your PostgreSQL ledger",
                            "Admin console for tenant management, impersonation with audit, and operational tooling",
                            "60-day post-launch support — bug fixes, billing edge cases, first-customer escalations",
                            "Documentation — admin runbook, user docs, API docs, and a deployment guide",
                            "Optional retainer for continued feature work and platform upgrades",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
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
                                q: "How is multi-tenant architecture handled — shared schema, schema-per-tenant, or database-per-tenant?",
                                a: "Default is shared schema with a tenant_id column on every row plus row-level security at the PostgreSQL layer. Schema-per-tenant when customers demand stronger isolation. Database-per-tenant when you have an enterprise tier that requires data residency. We pick the right one in discovery based on your buyers and your compliance bar.",
                            },
                            {
                                q: "How long does a SaaS MVP take?",
                                a: "12 to 24 weeks for a v1 with multi-tenant auth, billing, the core product surface, and an admin console. The longer end includes RBAC, audit logging, SAML SSO, and SOC 2 prep. We always ship a usable, paying-customer-ready v1 before adding nice-to-haves.",
                            },
                            {
                                q: "What about Stripe Billing — plan tiers, usage-based, proration, dunning?",
                                a: "All of the above. Plan tiers, metered usage, seat-based, hybrid pricing, mid-cycle upgrades with proration, dunning, churn recovery, and revenue dashboards. Stripe is the payment processor; PostgreSQL is the source-of-truth ledger so reconciliation never breaks.",
                            },
                            {
                                q: "Can you build us toward SOC 2 readiness?",
                                a: "Yes. Audit logging, RBAC, SSO with SAML and SCIM, encryption at rest and in transit, secret management, and the operational evidence your auditor will ask for. We build platforms that can survive a SOC 2 Type II without a rebuild.",
                            },
                            {
                                q: "Do we own the code?",
                                a: "Completely. You get the GitHub repository, the database schema, the deployment configuration, and the documentation. There is no platform tax, no per-tenant fee, and no exit ransom — your SaaS belongs to you.",
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
                        topics={["saas","stack","build-vs-buy"]}
                        heading="SaaS engineering reading"
                        pinned={["building-multi-tenant-saas-postgres-rls","build-vs-buy-software-2026","hipaa-compliant-saas-architecture"]}
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "subscription-billing", title: "Subscription Billing", desc: "Stripe Billing wired into your tenant model from day one." },
                            { slug: "api-development", title: "API Development", desc: "Public API and developer surface for your SaaS." },
                            { slug: "ai-integration-services", title: "AI Integration Services", desc: "Layer Claude or OpenAI into your SaaS without rebuilding." },
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
                    <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                        Background on our data-ownership philosophy: <Link href="/blog/custom-crm-development-guide" className="text-violet-400 hover:underline">the custom CRM development guide</Link> applies to SaaS as well. To scope a SaaS project, <Link href="/contact" className="text-violet-400 hover:underline">contact us</Link> directly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-violet-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">SaaS Platform Development — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based engineering team, working with SaaS founders across 14 US metros. Discovery and build run remotely; in-person founder sessions easy to schedule in Atlanta and the Southeast.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {cities.map((c) => (
                            <Link
                                key={c.slug}
                                href={`/software-development-${c.slug}`}
                                className="group flex items-center justify-between rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 transition-all hover:border-violet-400/30 hover:bg-[#0d1526]"
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-violet-400 flex-shrink-0" />
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                        {c.city}, {c.state}
                                    </span>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-violet-400 group-hover:translate-x-0.5 transition-all" />
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to ship the SaaS your customers actually want to buy.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. Founder-led from tenant-model design through enterprise-tier launch.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="SaaS Platform Development" source="services-saas" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
