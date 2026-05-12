import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Cloud, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom SaaS Development | Stripe Billing & SOC 2 | QuantLab",
    description:
        "Custom SaaS development — Stripe Billing, subscription management, SOC 2 readiness, multi-tenant architecture, customer-facing dashboards. Founder-led, US-based.",
    alternates: { canonical: "https://quantlabusa.dev/industries/saas" },
    openGraph: {
        title: "Custom SaaS Development — Subscription Billing & SOC 2 Ready",
        description:
            "Stripe Billing, multi-tenant architecture, customer dashboards, and SOC 2-mapped controls for SaaS founders and teams shipping production product.",
        url: "https://quantlabusa.dev/industries/saas",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom SaaS Development | QuantLab",
        description:
            "Multi-tenant SaaS with Stripe Billing, customer dashboards, and SOC 2-aware architecture.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom SaaS Development",
    url: "https://quantlabusa.dev/industries/saas",
    description:
        "Custom SaaS development — Stripe Billing, subscription management, SOC 2 readiness, multi-tenant architecture, and customer-facing dashboards for founders and product teams.",
    isPartOf: {
        "@type": "WebSite",
        url: "https://quantlabusa.dev",
        name: "QuantLab USA",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://quantlabusa.dev/industries" },
        { "@type": "ListItem", position: 3, name: "SaaS", item: "https://quantlabusa.dev/industries/saas" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "SaaS Software Development",
    name: "Custom SaaS Development",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom SaaS development — Stripe Billing integration, subscription management, multi-tenant architecture, customer-facing dashboards, admin consoles, and SOC 2-aware build patterns for product teams and founders.",
    url: "https://quantlabusa.dev/industries/saas",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Why is SaaS treated as a special case for software development?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "SaaS is one of the few categories where the architecture choices made in the first sprint shape the cost of every customer for the life of the product. Multi-tenancy, billing model, identity and access architecture, and the audit/observability stack are all hard to reverse later. The compliance perimeter for B2B SaaS — SOC 2, ISO 27001, GDPR, CCPA, and increasingly state-level AI disclosure rules — is also wide enough that retrofitting controls after enterprise sales start is dramatically more expensive than building them in.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build a multi-tenant SaaS from scratch?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Default architecture is shared-database with row-level tenant isolation enforced at the data layer, plus tenant-scoped envelope encryption for sensitive columns. We move to schema-per-tenant or database-per-tenant when the compliance posture or data-residency requirements demand it.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle Stripe Billing for complex SaaS pricing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Stripe Billing for subscription state, usage records, and invoicing. Stripe Tax for sales tax across states and countries. We wire metered billing with idempotency keys for usage events, custom proration for plan changes, and clean reconciliation into QuickBooks Online or Xero so the books close every month.",
            },
        },
        {
            "@type": "Question",
            name: "Are you SOC 2 ready?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We build with SOC 2 Common Criteria mapped to controls — encryption, RBAC, change management, immutable audit logging, incident response, vendor management, and access reviews. We can produce evidence packs for Vanta, Drata, or Secureframe in the format your auditor expects.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 SaaS build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A focused MVP — single product surface, Stripe Billing wired in, multi-tenant database, customer-facing dashboard, and admin console. Four to eight weeks. Discovery scoped tight so the v1 ships and gets in front of paying customers fast.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle Enterprise sales requirements (SSO, audit logs, IP allowlisting)?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We build the enterprise tier on the same codebase as the rest. SAML and OIDC SSO via WorkOS or Auth0 Enterprise tiers, customer-facing audit log export, IP allowlisting at the load-balancer layer, custom data-residency configuration, and tenant-scoped data export and deletion workflows.",
            },
        },
        {
            "@type": "Question",
            name: "Can you integrate generative AI features safely?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Private-tenant LLM endpoints (Azure OpenAI, AWS Bedrock, or OpenAI with the zero data-retention enterprise tier), prompt isolation between customers, no training-data sharing without explicit consent, structured output verification, and clear UI signaling about AI-generated content.",
            },
        },
        {
            "@type": "Question",
            name: "Do you build for SaaS founders or for product teams scaling existing SaaS?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Both, with different scopes. Founders get the full v1 — multi-tenant architecture, Stripe Billing, customer dashboard, admin console, and a thoughtful pricing model. Existing product teams get focused engineering on the painful parts — billing modernization, SOC 2-mapped audit logging, enterprise-tier features, or a new product surface inside the existing codebase.",
            },
        },
    ],
};

export default function SaasIndustryPage() {
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
                        <li className="text-gray-300">SaaS</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Cloud className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom SaaS Development — Subscription Billing & SOC 2 Ready
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Multi-tenant architecture, Stripe Billing wired correctly, customer dashboards, admin consoles, and SOC 2-mapped controls — for founders shipping a v1 and product teams scaling existing SaaS into enterprise sales.
                    </p>
                    <ConsultationCTA label="Scope a SaaS Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why SaaS is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            SaaS is one of the few software categories where the architecture choices made in the first sprint shape the cost of every customer for the life of the product. Multi-tenancy model (pooled, schema-per-tenant, or database-per-tenant), billing primitives (subscription, usage, hybrid, contract), identity and access architecture (SSO, role hierarchy, per-tenant API keys), and the audit and observability stack are all hard to reverse once paying customers depend on them. We have seen the cleanup work after the wrong call — multi-quarter migrations and dramatic infrastructure costs that the founding team never modeled.
                        </p>
                        <p>
                            The compliance perimeter for B2B SaaS is also wide and expanding. SOC 2 Type II is now the table-stakes signal for enterprise procurement. ISO 27001 follows close behind for international sales. GDPR and ePrivacy in Europe, CCPA and CPRA in California, plus a growing wave of state privacy laws (VCDPA, CPA, CTDPA, UCPA, TDPSA, OCPA, MCDPA) all impose specific data-handling, retention, and DSR fulfillment obligations. And the 2024–2026 wave of state-level AI disclosure and high-risk-AI laws (Colorado AI Act, NYC Local Law 144, Utah AI Policy Act) means SaaS products with AI features now have specific consumer-disclosure and impact-assessment obligations that bolt onto the existing privacy stack.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for SaaS founders and product teams</h2>
                    <ul className="space-y-3">
                        {[
                            "Multi-tenant architecture with tenant-scoped row-level access and encryption",
                            "Stripe Billing for subscriptions, usage, proration, and hybrid pricing models",
                            "Stripe Tax integration for multi-state and international sales tax",
                            "Customer-facing dashboards with tenant-scoped data, charts, and admin controls",
                            "Admin console for the operator — customer management, plan changes, refunds, impersonation with audit log",
                            "Enterprise-tier features — SAML/OIDC SSO, SCIM provisioning, audit log export, IP allowlisting",
                            "API key management with rate limiting, usage tracking, and rotation",
                            "Webhooks and event delivery with retries, signing, and observable failure handling",
                            "Onboarding flows with structured product tours, sample data, and activation tracking",
                            "Customer support tooling — embedded ticketing, in-app help, and impersonation with consent",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common SaaS projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Greenfield v1 SaaS for a founder", d: "Multi-tenant architecture, Stripe Billing, customer dashboard, admin console, and a thoughtful first pricing model. The scope is tight on purpose so the first ten customers can be onboarded inside 90 days." },
                            { t: "Billing modernization on an existing product", d: "Replace a tangled invoicing layer with Stripe Billing, add proration, usage metering, and clean revenue recognition. Often paired with a QuickBooks Online or NetSuite sync that finally makes the close clean." },
                            { t: "SOC 2 readiness build", d: "Map every Common Criteria control to a concrete artifact, add immutable audit logging, change-management gates, evidence collection for Vanta/Drata/Secureframe, and a pentest deliverable formatted for the auditor's binder." },
                            { t: "Enterprise tier on an existing SaaS", d: "SAML and OIDC SSO via WorkOS or Auth0, SCIM provisioning, customer-facing audit log export, IP allowlisting, role hierarchy, and tenant data export/deletion workflows." },
                            { t: "Usage-based billing wired correctly", d: "Idempotent usage records, real-time aggregation, custom proration on plan changes, overage handling, and customer-facing usage dashboards that match what gets billed." },
                            { t: "AI features bolted into existing SaaS", d: "Private-tenant LLM endpoints, prompt isolation between customers, no training-data sharing, output verification, and product UX that clearly signals AI-generated content." },
                            { t: "Multi-product platform consolidation", d: "Two or three separate SaaS products folded into one tenant model, one billing layer, and one identity provider — usually after an acquisition or pivot." },
                            { t: "Self-serve onboarding optimization", d: "Activation tracking, in-product tours, sample data templates, and the structured emails that move free trials to first invoice." },
                            { t: "Customer admin and impersonation tooling", d: "Internal tool the support team uses to view a customer's tenant, optionally impersonate with consent, change plans, issue refunds, and leave a full audit trail." },
                            { t: "Migration from a legacy SaaS platform", d: "Rip-and-replace work for products built on dated stacks (legacy Rails monoliths, PHP, or no-code platforms hitting scale walls). Phased migration with old and new running in parallel until cutover." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Compliance and security considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">SOC 2 Type II.</span> Most enterprise buyers will not take the procurement call without a report. We build with Common Criteria mapped to controls — encryption, RBAC, audit logging, change management, incident response, vendor management — and produce evidence packs for Vanta, Drata, or Secureframe.
                        </p>
                        <p>
                            <span className="text-white font-semibold">ISO 27001.</span> Required for many international and regulated-industry deals. We map controls to Annex A and produce the documentation set the certification body expects.
                        </p>
                        <p>
                            <span className="text-white font-semibold">GDPR and CCPA/CPRA.</span> Lawful basis tracking, consent capture, data subject access requests, deletion workflows, and DPA-aligned vendor management. Privacy preference centers wired through the data layer so analytics and marketing pixels respect user consent.
                        </p>
                        <p>
                            <span className="text-white font-semibold">State privacy law (VCDPA, CPA, CTDPA, UCPA, TDPSA, OCPA, MCDPA).</span> Each state has its own definitions of personal data, sensitive data, controller and processor obligations, and DSR fulfillment windows. We build a single internal privacy framework that covers the strictest state and applies it everywhere.
                        </p>
                        <p>
                            <span className="text-white font-semibold">PCI-DSS scope.</span> Stripe Elements or Checkout tokenizes cards so the SaaS stays in SAQ A. Stored card data lives in Stripe, not the application database.
                        </p>
                        <p>
                            <span className="text-white font-semibold">AI disclosure laws.</span> Colorado AI Act (effective 2026), NYC Local Law 144 on automated employment decision tools, and growing state-level rules require disclosure, impact assessment, and bias-testing documentation for high-risk AI features. We build the disclosure UX and the audit trail into the AI feature itself.
                        </p>
                        <p>
                            <span className="text-white font-semibold">HIPAA when PHI is in scope.</span> SaaS serving healthcare gets HIPAA Security Rule controls — encryption, RBAC, audit logging, BAA-eligible infrastructure — applied on top of the SOC 2 baseline.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for SaaS</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 15 or 16 with React 19 and TypeScript for the application layer. Postgres on Neon, Supabase, or RDS for the system of record. Prisma or Drizzle as the ORM with strict tenant-scoping middleware. Stripe Billing for subscriptions and usage; Stripe Tax for sales tax. Clerk, WorkOS, or Auth0 for identity — WorkOS specifically when SAML SSO is a near-term need.
                        </p>
                        <p>
                            For observability, Datadog or Better Stack for logs and metrics, Sentry for error tracking with PII redaction in the logger, and OpenTelemetry traces for the critical paths. Background jobs on Inngest or BullMQ+Redis. Background-job idempotency is non-negotiable for billing-adjacent workflows. Hosting on Vercel for the web tier with edge functions for the cold paths; a serverless function tier (Cloud Run, Lambda) or a small dedicated Postgres replica for heavy compute. See the <Link href="/services/subscription-billing" className="text-cyan-400 hover:underline">subscription billing service</Link> and <Link href="/services/stripe-integration" className="text-cyan-400 hover:underline">custom Stripe integration</Link> pages for the billing patterns we use.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Founder v1 SaaS", body: "Multi-tenant architecture, Stripe Billing, customer dashboard, and admin console for the first ten customers. Scoped tight to ship in 4 to 8 weeks." },
                            { tier: "$60K", title: "Production SaaS platform", body: "Full v1 plus enterprise-tier features (SSO, audit log export, custom integrations), SOC 2 Common Criteria mapping, and a real onboarding flow. 12 to 18 weeks." },
                            { tier: "$150K+", title: "Scale or migration build", body: "Multi-product consolidation, legacy migration, complex usage-based billing, AI feature integration, and full SOC 2 + ISO 27001 readiness. 18 to 36 weeks with phased delivery." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-cyan-400 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery is paid separately at $2,500 and creditable against any full engagement. <Link href="/contact" className="text-cyan-400 hover:underline">Book a scope call</Link> to walk through your pricing model, your tenancy needs, and your enterprise pipeline.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Three patterns recur. First, the v1 ships with no tenant isolation in the data model. The MVP works because there are only five customers. Customer six finds the cross-tenant bug at the worst possible time — usually an evaluation by the customer&apos;s security team — and the rebuild eats a quarter. Build tenant isolation in the schema before the first paying customer.
                        </p>
                        <p>
                            Second, billing gets bolted on with naive Stripe integration. Subscriptions are wired, but proration is wrong, usage isn&apos;t idempotent, and refunds do not reconcile cleanly into the accounting system. The first customer who churns and disputes the final invoice exposes the entire mess. Wire Stripe Billing carefully from the start; the cost difference between getting it right and getting it wrong is measured in months of support and finance pain.
                        </p>
                        <p>
                            Third, SOC 2 gets treated as a paperwork exercise the GRC tool will handle. The reality is that SOC 2 evidence requires structured audit logs, controlled access reviews, real change-management gates, and incident response runbooks that get exercised. A SaaS that bolts these on six weeks before the auditor arrives ends up failing the observation window or producing a heavily-qualified report. Build the controls into the engineering process from quarter one.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Why is SaaS treated as a special case for software development?", a: "Architecture choices in the first sprint shape every future customer's cost: multi-tenancy, billing primitives, identity, and observability are all hard to reverse. The compliance perimeter (SOC 2, ISO 27001, GDPR, CCPA, state AI laws) is also wide enough that retrofitting controls after enterprise sales start is dramatically more expensive than building them in." },
                            { q: "Can you build a multi-tenant SaaS from scratch?", a: "Yes. Default is shared-database with row-level tenant isolation enforced at the data layer and tenant-scoped envelope encryption for sensitive columns. We move to schema-per-tenant or database-per-tenant when compliance or data-residency requirements demand it." },
                            { q: "How do you handle Stripe Billing for complex SaaS pricing?", a: "Stripe Billing for subscription state and usage records, Stripe Tax for sales tax. Idempotent usage events, custom proration, clean reconciliation into QuickBooks Online or Xero." },
                            { q: "Are you SOC 2 ready?", a: "Yes. Common Criteria mapped to controls, evidence packs for Vanta, Drata, or Secureframe, and pentest reports formatted for the auditor binder." },
                            { q: "What does a $25,000 SaaS build look like?", a: "A focused MVP — multi-tenant database, Stripe Billing, customer dashboard, admin console. 4 to 8 weeks. Discovery scoped tight so v1 ships fast." },
                            { q: "How do you handle Enterprise sales requirements (SSO, audit logs, IP allowlisting)?", a: "Same codebase. SAML/OIDC SSO via WorkOS or Auth0 Enterprise, audit log export, IP allowlisting at the load balancer, custom data residency, and tenant data export/deletion." },
                            { q: "Can you integrate generative AI features safely?", a: "Yes. Private-tenant LLM endpoints (Azure OpenAI, AWS Bedrock, OpenAI Enterprise), prompt isolation between customers, no training-data sharing, structured output verification, and clear UI signaling about AI-generated content." },
                            { q: "Do you build for SaaS founders or for product teams scaling existing SaaS?", a: "Both. Founders get the full v1. Existing product teams get focused engineering on billing modernization, SOC 2 readiness, enterprise-tier features, or new product surfaces inside the existing codebase." },
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
                            { slug: "subscription-billing", title: "Subscription Billing", desc: "Stripe Billing for SaaS — proration, usage, hybrid pricing, and clean revenue recognition." },
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Complex Stripe work — Connect marketplaces, custom checkout, and accounting sync." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "SOC 2- and enterprise-ready pentest reports for SaaS audit binders." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Admin consoles, internal tooling, and operations dashboards." },
                            { slug: "web-applications", title: "Web Applications", desc: "Customer dashboards, public marketing sites, and multi-tenant product surfaces." },
                            { slug: "cloud-infrastructure", title: "Cloud Infrastructure", desc: "Vercel, Neon, AWS, and Cloud Run patterns for production SaaS." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-cyan-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ship a SaaS that scales past the founding team.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-cyan-400 hover:underline">book a 20-minute scope call</Link>. Mutual NDA before discovery. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
