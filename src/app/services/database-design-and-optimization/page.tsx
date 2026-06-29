import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Database, Check, ArrowRight, MapPin } from "lucide-react";
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
    title: "Database Design & Optimization | PostgreSQL | QUANT LAB USA",
    description:
        "PostgreSQL schema design, query tuning, indexing, and scaling. Fix slow queries, model data right, and add read replicas without downtime. Call (770) 652-1282.",
    slug: "services/database-design-and-optimization",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Database Design and Optimization",
    name: "PostgreSQL Database Design, Tuning, and Scaling",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Database design and optimization for PostgreSQL and other relational systems. Schema and data modeling, query tuning, index strategy, connection pooling, partitioning, read replicas, and migrations executed without downtime. Built to keep a growing application fast.",
    url: "https://quantlabusa.dev/services/database-design-and-optimization",
    offers: {
        "@type": "Offer",
        priceRange: "$5,000-$60,000",
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
        { "@type": "ListItem", position: 3, name: "Database Design & Optimization", item: "https://quantlabusa.dev/services/database-design-and-optimization" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Our app got slow as we grew. Can you fix it without a rewrite?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Usually, yes. The most common cause of a slowing app is the database, and the most common database problems — missing indexes, N+1 query patterns, table scans, lock contention, and unbounded result sets — are fixable in place. We profile the real workload, find the queries actually hurting you, and fix them with targeted changes before anyone talks about a rewrite.",
            },
        },
        {
            "@type": "Question",
            name: "Should we use PostgreSQL, MySQL, or something NoSQL?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "For the vast majority of business applications, PostgreSQL is the right default and the one we recommend. It gives you relational integrity, JSON when you need it, full-text search, row-level security, and an enormous ecosystem. We reach for specialized stores only when the workload genuinely demands it, and we will tell you honestly when it does not.",
            },
        },
        {
            "@type": "Question",
            name: "Can you redesign a schema that has grown messy over the years?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We model the domain properly, design the target schema, and plan a phased migration that moves you there incrementally without a big-bang cutover. Foreign keys, constraints, and normalization come back, and the data integrity bugs that come from a loose schema go away.",
            },
        },
        {
            "@type": "Question",
            name: "How do you migrate or change a schema without downtime?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Expand-and-contract migrations. We add the new structure, backfill in batches, dual-write during the transition, switch reads over, then drop the old structure once nothing depends on it. Index builds run concurrently. The application stays up the whole time and there is a tested rollback at every step.",
            },
        },
        {
            "@type": "Question",
            name: "Do we own everything when you are done?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Completely. You get the migration scripts, the documented schema, the index and tuning rationale, and a runbook so your team can maintain it. There is no proprietary tooling and no lock-in — it is your database on infrastructure you control.",
            },
        },
    ],
};

export default function DatabaseDesignAndOptimizationPage() {
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
                        <li className="text-gray-300">Database Design &amp; Optimization</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-400 mb-6">
                        <Database className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Database Design and Optimization for Apps That Got Slow
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Schema and data modeling, query tuning, index strategy, pooling, partitioning, and read replicas on PostgreSQL. We profile the real workload, fix the queries that hurt, and migrate without downtime — usually no rewrite required.
                    </p>
                    <ConsultationCTA label="Scope a Database Review" service="Database Design and Optimization" source="services-database" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When the database is the bottleneck</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most applications do not get slow because the framework is wrong or the servers are too small. They get slow because the database is doing far more work than it should. A list view runs a separate query for every row. A report scans a million-row table because the right index was never created. A background job holds a lock that blocks every checkout. A query that returned ten rows in testing now returns ten thousand in production. The symptoms show up as spinning load times and rising infrastructure bills, but the cause is almost always in the data layer.
                        </p>
                        <p>
                            Database design and optimization is the discipline of finding and fixing those problems systematically. We profile the actual workload — not a guess — to find the queries that consume the most time. We read query plans, add the indexes that matter, eliminate N+1 patterns, and reshape the schema where the model itself is fighting you. The result is an application that feels instant again on hardware you are already paying for, with headroom to grow into.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we do</h2>
                    <ul className="space-y-3">
                        {[
                            "Data modeling and schema design — normalized core with JSON where it genuinely helps",
                            "Query profiling — find the slowest, most frequent, and most expensive queries from real workload data",
                            "Query tuning — rewrite plans, eliminate N+1 patterns, fix table scans and bad joins",
                            "Index strategy — B-tree, partial, composite, covering, and GIN indexes matched to access patterns",
                            "Connection pooling with PgBouncer and sane pool sizing for serverless and long-lived clients",
                            "Partitioning and archival for large, time-series, or append-heavy tables",
                            "Read replicas and read/write splitting to scale read-heavy workloads",
                            "Row-level security and multi-tenant isolation modeling",
                            "Zero-downtime migrations using expand-and-contract with batched backfills",
                            "Backup, point-in-time recovery, and a tested restore runbook",
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
                            Optimization starts with measurement, never with guesses. We turn on query statistics, capture the real workload, and rank queries by total time consumed, because the query that runs ten thousand times a minute matters more than the one that is slow once a day. From there we read the actual execution plans, make targeted changes, and measure again. Schema work follows the same discipline — model the domain, design the target, migrate in safe phases with a rollback at each step.
                        </p>
                        <p>
                            Audit and profiling → prioritized fix plan → phased implementation (1 to 8 weeks typical) → before-and-after benchmarks. You own the migration scripts, the documented schema, and a runbook your team can maintain.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "PostgreSQL",
                            "EXPLAIN ANALYZE",
                            "pg_stat_statements",
                            "PgBouncer pooling",
                            "Prisma + Drizzle",
                            "Partitioning + pgvector",
                            "Read replicas",
                            "MySQL / MariaDB",
                            "Redis caching",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Works on Neon, Supabase, RDS, Cloud SQL, or self-hosted Postgres. The same data discipline underpins every <Link href="/services/saas-platform-development" className="text-indigo-400 hover:underline">SaaS platform</Link>, <Link href="/services/custom-crm-development" className="text-indigo-400 hover:underline">custom CRM</Link>, and <Link href="/services/data-engineering" className="text-indigo-400 hover:underline">data engineering</Link> project we ship.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Design for the next 10x, not the last one</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A schema designed only for today's data volume becomes the bottleneck of tomorrow. We design with growth in mind — partitioning strategies that activate before a table gets unwieldy, index plans that hold as row counts climb, and a tenancy model that scales without a rewrite. The goal is not to over-engineer for scale you may never hit, but to make sure the next order of magnitude is a configuration change rather than an emergency.
                        </p>
                        <p>
                            And because the database is where breaches and data-integrity bugs concentrate, we design with safety in the loop — constraints that make bad states impossible, row-level security where tenants share tables, and migrations with tested rollbacks. Correctness and speed are not a trade-off when the model is right.
                        </p>
                        <p>
                            Database work served from <Link href="/software-development-macon-ga" className="text-indigo-400 hover:underline">Macon, GA</Link>, with clients across <Link href="/software-development-atlanta-ga" className="text-indigo-400 hover:underline">Atlanta</Link>, <Link href="/software-development-new-york-ny" className="text-indigo-400 hover:underline">New York</Link>, <Link href="/software-development-san-francisco-ca" className="text-indigo-400 hover:underline">San Francisco</Link>, and the rest of the US.
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
                            <li>Performance audit with a prioritized fix plan and benchmarks: $5k – $12k</li>
                            <li>Query tuning and index optimization sprint: $8k – $20k</li>
                            <li>Schema redesign with phased, zero-downtime migration: $20k – $50k</li>
                            <li>Scaling work — pooling, partitioning, read replicas, archival: $25k – $60k</li>
                            <li>Discovery session with workload profiling: $1,500 flat</li>
                        </ul>
                        <p>
                            30-day post-engagement support included. Optional retainer for ongoing tuning as the workload evolves.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "A documented schema with an entity-relationship diagram and the modeling rationale",
                            "All migration scripts in your repository with tested rollbacks",
                            "Before-and-after benchmarks showing the measured impact of every change",
                            "An index and tuning rationale your team can extend",
                            "Connection pooling and configuration tuned for your deployment",
                            "A backup and restore runbook with a verified recovery procedure",
                            "30-day post-engagement support for regressions and follow-on tuning",
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
                                q: "Our app got slow as we grew. Can you fix it without a rewrite?",
                                a: "Usually, yes. The most common cause of a slowing app is the database, and the most common database problems — missing indexes, N+1 query patterns, table scans, lock contention, and unbounded result sets — are fixable in place. We profile the real workload, find the queries actually hurting you, and fix them with targeted changes before anyone talks about a rewrite.",
                            },
                            {
                                q: "Should we use PostgreSQL, MySQL, or something NoSQL?",
                                a: "For the vast majority of business applications, PostgreSQL is the right default and the one we recommend. It gives you relational integrity, JSON when you need it, full-text search, row-level security, and an enormous ecosystem. We reach for specialized stores only when the workload genuinely demands it, and we will tell you honestly when it does not.",
                            },
                            {
                                q: "Can you redesign a schema that has grown messy over the years?",
                                a: "Yes. We model the domain properly, design the target schema, and plan a phased migration that moves you there incrementally without a big-bang cutover. Foreign keys, constraints, and normalization come back, and the data integrity bugs that come from a loose schema go away.",
                            },
                            {
                                q: "How do you migrate or change a schema without downtime?",
                                a: "Expand-and-contract migrations. We add the new structure, backfill in batches, dual-write during the transition, switch reads over, then drop the old structure once nothing depends on it. Index builds run concurrently. The application stays up the whole time and there is a tested rollback at every step.",
                            },
                            {
                                q: "Do we own everything when you are done?",
                                a: "Completely. You get the migration scripts, the documented schema, the index and tuning rationale, and a runbook so your team can maintain it. There is no proprietary tooling and no lock-in — it is your database on infrastructure you control.",
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
                        topics={["stack", "saas"]}
                        heading="Database & stack reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "performance-optimization-services", title: "Performance Optimization", desc: "End-to-end speed work across app, API, and frontend." },
                            { slug: "data-engineering", title: "Data Engineering", desc: "Pipelines, warehouses, and analytics on top of the data." },
                            { slug: "saas-platform-development", title: "SaaS Platform Development", desc: "Multi-tenant builds where the schema is the foundation." },
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
                        Background reading on our database approach: <Link href="/blog/postgres-vs-mysql-for-saas-2026" className="text-indigo-400 hover:underline">Postgres vs MySQL for SaaS</Link> and <Link href="/blog/scaling-a-saas-database-guide-2026" className="text-indigo-400 hover:underline">scaling a SaaS database</Link>. To scope a database project, <Link href="/contact" className="text-indigo-400 hover:underline">contact us</Link> directly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-indigo-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Database Design &amp; Optimization — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based engineering team, working with clients across 14 US metros. Database design and tuning runs remotely; in-person reviews available in Atlanta and the Southeast.
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
                            Make the slow queries fast and keep them that way.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. Founder-led from profiling through migration.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="Database Design and Optimization" source="services-database" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
