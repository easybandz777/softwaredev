import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Multi-Tenant SaaS? Definition + Examples | QUANT LAB USA",
    description:
        "Multi-tenant SaaS serves many customers from one shared infrastructure. Plain-English definition, isolation patterns, 2026 tradeoffs. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-multi-tenant-saas" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Multi-Tenant SaaS",
    description:
        "Multi-tenant SaaS is software where a single application instance serves many independent customer organizations (tenants), with logical isolation of their data and configuration.",
    url: "https://quantlabusa.dev/glossary/what-is-multi-tenant-saas",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is Multi-Tenant SaaS?", item: "https://quantlabusa.dev/glossary/what-is-multi-tenant-saas" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is multi-tenancy?", acceptedAnswer: { "@type": "Answer", text: "Multi-tenancy means a single application instance serves many independent customer organizations from shared infrastructure, with logical isolation so no tenant can see another tenant's data." } },
        { "@type": "Question", name: "What is the difference between multi-tenant and single-tenant?", acceptedAnswer: { "@type": "Answer", text: "Single-tenant runs a separate deployment per customer. Multi-tenant runs one deployment that serves all customers and uses tenant identifiers in the data layer to keep them apart." } },
        { "@type": "Question", name: "Is multi-tenant less secure?", acceptedAnswer: { "@type": "Answer", text: "Not inherently. A well-designed multi-tenant system with row-level isolation, tenant-scoped queries, and audit logging is at least as secure as separate deployments and usually more so because the code path is exercised by every customer." } },
        { "@type": "Question", name: "When should I use single-tenant instead?", acceptedAnswer: { "@type": "Answer", text: "When you sell to enterprise customers with strict data residency or compliance requirements that demand physical isolation, or when a customer is paying enough to justify dedicated infrastructure." } },
        { "@type": "Question", name: "How do you isolate tenants in a database?", acceptedAnswer: { "@type": "Answer", text: "Three common patterns: shared schema with a tenant_id column on every table, separate schemas per tenant in one database, or separate databases per tenant. Each has different tradeoffs around scale, blast radius, and operational cost." } },
    ],
};

export default function Page() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <article className="container mx-auto px-6 max-w-3xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/glossary" className="hover:text-sky-400 transition-colors">Glossary</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">What is Multi-Tenant SaaS?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Software</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Multi-Tenant SaaS?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Multi-tenant SaaS is an architecture pattern where a single running application serves many independent customer organizations from shared infrastructure, with strict logical isolation between their data, configuration, and users — so Acme Corp and Globex never see each other but both pay one company for the same product.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The "tenant" metaphor</h2>
                    <p>
                        The word tenant comes from real estate. Imagine an apartment building.
                        The building owns the plumbing, the elevators, and the roof. Each
                        tenant has their own apartment with their own key, their own
                        furniture, their own paint. Tenants do not see into each other's
                        units, but they share the building's infrastructure and the per-unit
                        cost is far lower than building a house for every renter.
                    </p>
                    <p>
                        SaaS works the same way. The vendor maintains one application, one
                        database cluster, one deployment pipeline. Each customer organization
                        is a tenant — they get their own logical workspace with their own
                        users, data, and settings, but they share the underlying compute.
                        That is what makes SaaS economically viable. Per-tenant deployments
                        would multiply operational cost by the number of customers.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The three isolation patterns</h2>
                    <p>
                        Shared schema, separate schema, or separate database. In the shared
                        schema model, every table has a tenant_id column and every query
                        filters by it — cheapest to operate, highest risk if a single query
                        forgets the filter. In the separate-schema model, each tenant has
                        its own schema in one database — better isolation, more migration
                        complexity. In the separate-database model, each tenant gets a
                        physically separate database — best isolation, highest cost, most
                        commonly used for enterprise tiers.
                    </p>
                    <p>
                        Most modern SaaS start on shared schema and graduate enterprise
                        tenants to separate databases when a customer asks for it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Tenant-aware everything</h2>
                    <p>
                        Real multi-tenancy is not just about data isolation. Every
                        layer of the stack has to be tenant-aware: caching keys must
                        include the tenant ID or one tenant will see another tenant's
                        cached responses; background jobs must carry tenant context
                        so logs and errors can be filtered; rate limits must be
                        applied per tenant so one bad actor cannot starve the rest;
                        feature flags often have to support per-tenant rollouts.
                        Forget any one of those and you create the same kind of
                        cross-tenant leak the database isolation was supposed to
                        prevent.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The "noisy neighbor" problem</h2>
                    <p>
                        The classic multi-tenant failure mode: one tenant runs a query that
                        consumes 90 percent of database CPU, and every other tenant suddenly
                        sees slow responses. Real multi-tenant systems solve this with
                        per-tenant rate limits, query budgets, connection pools, and
                        sometimes by sharding heavy tenants onto dedicated infrastructure.
                        Designing for the noisy neighbor problem from day one is much
                        cheaper than retrofitting it after a big customer complains.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Multi-tenancy is the default architecture in every{" "}
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link>{" "}
                        engagement. We use Postgres row-level security, every query is
                        tenant-scoped at the ORM layer, and the audit log records every
                        cross-tenant boundary touch. We design data isolation in from the
                        first commit because retrofitting it after launch means rebuilding
                        the database layer. Where compliance demands it — common in our{" "}
                        <Link href="/industries/healthcare" className="text-sky-400 hover:underline">healthcare</Link>{" "}
                        work — we ship dedicated-instance tiers alongside the shared one.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When customers ask "is my data isolated?"</h2>
                    <p>
                        It is one of the most common procurement questions and the
                        most common honest answer is "logically, yes; physically, no."
                        That answer is correct, accurate, and sufficient for the
                        overwhelming majority of buyers — but a small fraction will
                        push for physical isolation (separate database or separate
                        cloud account per tenant), usually for regulatory reasons.
                        The right product response is a tiering decision: keep your
                        standard tier shared, and offer a premium isolated tier
                        priced to cover the operational overhead. Both options give
                        the buyer the right answer for their risk model.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["saas","stack"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">What is SaaS?</Link></li>
                        <li><Link href="/glossary/what-is-a-crm" className="text-sky-400 hover:underline">What is a CRM?</Link></li>
                        <li><Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">What is SOC 2?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                        <li><Link href="/glossary/what-is-an-mvp" className="text-sky-400 hover:underline">What is an MVP?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Designing a multi-tenant SaaS?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        The decisions you make in the first month decide what your operations
                        look like in year three. Book a 30-minute consultation before you
                        commit.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-multitenant" />
                        <Link href="/services/saas-platform-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            SaaS platform development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
