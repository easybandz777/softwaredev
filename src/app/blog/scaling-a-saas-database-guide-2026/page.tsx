import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { ArrowRight, Check, Network } from "lucide-react";

const SLUG = "scaling-a-saas-database-guide-2026";
const TITLE = "Scaling a SaaS Database: The 2026 Engineering Guide";
const DESCRIPTION =
    "A practical order of operations for scaling a SaaS database: indexing, connection pooling, read replicas, partitioning, caching, and when to actually shard.";
const PUBLISHED_ISO = "2026-06-03";

export const metadata: Metadata = articleMetadata({
    title: TITLE,
    description: DESCRIPTION,
    slug: `/blog/${SLUG}`,
    image: "/og-image.png",
    imageAlt: "Scaling a SaaS database — indexing, pooling, replicas, partitioning, sharding",
    publishedTime: PUBLISHED_ISO,
    modifiedTime: PUBLISHED_ISO,
    authors: ["Bill Beltz"],
    keywords: [
        "scaling a SaaS database",
        "database scaling guide",
        "connection pooling Postgres",
        "read replicas",
        "database partitioning vs sharding",
    ],
});

const faqItems = [
    {
        q: "What is the right order of operations for scaling a database?",
        a: "Fix the query plans and indexes first, because most early performance problems are missing or wrong indexes, not a lack of hardware. Then add connection pooling so you stop exhausting database connections. Then scale up the instance (vertical) before you scale out. Then add read replicas to offload reads. Then partition large tables. Caching can come in anywhere it helps. Sharding is the last resort, only when a single primary genuinely cannot hold the write volume. Doing these out of order — sharding before indexing, say — wastes months and money.",
    },
    {
        q: "When do I need connection pooling?",
        a: "Almost immediately on Postgres, and especially with serverless or many app instances. Postgres uses a process per connection, so a few hundred direct connections can consume gigabytes of RAM and stall the server. A pooler like PgBouncer or PgCat multiplexes thousands of client connections onto a small pool of real database connections. Serverless functions make this critical because each invocation can open a connection — without a pooler you exhaust the limit under modest load. MySQL's threaded model is more forgiving but still benefits from pooling at scale.",
    },
    {
        q: "What is the difference between a read replica and a shard?",
        a: "A read replica is a full copy of the database that stays in sync with the primary and serves read-only queries, which offloads read traffic without changing your data model. Every replica holds all the data. A shard is a horizontal split: each shard holds a different subset of the data (for example, tenants A to M on shard 1, N to Z on shard 2), and writes are distributed across shards. Replicas scale reads and are easy; shards scale writes and storage but add major application complexity. Reach for replicas long before shards.",
    },
    {
        q: "When should I partition a table?",
        a: "Partition when a single table grows large enough that index maintenance, vacuum, and full scans become painful — often in the tens to hundreds of millions of rows for time-series or event data. Partitioning splits one logical table into physical chunks by a key, usually a date range or a hash. Queries that filter on the partition key only touch relevant partitions (partition pruning), and you can drop old partitions instantly instead of running slow bulk deletes. It is a within-one-database technique and far simpler than sharding across databases.",
    },
    {
        q: "Do I need to shard my SaaS database?",
        a: "Probably not, and not for a long time. A single modern Postgres or MySQL primary on capable hardware comfortably handles tens of thousands of transactions per second and terabytes of data once indexing, pooling, replicas, and partitioning are in place. Most SaaS companies never outgrow a vertically scaled primary with read replicas. Sharding adds cross-shard queries, distributed transactions, rebalancing, and operational complexity that slows every future feature. Shard only when you have exhausted vertical scaling and the write volume on a single primary is the proven bottleneck.",
    },
    {
        q: "How does caching fit into database scaling?",
        a: "Caching reduces the load that ever reaches the database. The cheapest win is application-level query caching for hot, rarely-changing data — reference tables, configuration, expensive aggregations — usually in Redis or an in-memory layer with explicit invalidation. HTTP and CDN caching cut requests further upstream. The discipline is invalidation: a cache that serves stale data is worse than no cache. Cache read-heavy, change-rarely data first, and always have a clear invalidation trigger tied to the write that changes it.",
    },
    {
        q: "Can QUANT LAB USA help scale our database?",
        a: "Yes. We run database performance engagements that start with query and index analysis, add pooling and replicas, and partition or cache where the data demands it — and we will tell you honestly if you do not need to shard. We work primarily in Postgres and MySQL with Next.js and TypeScript application layers. A focused performance review is fixed-scope; ongoing scaling work fits our retainer model. Book a call below and we will look at your slow query log.",
    },
];

const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Scaling a SaaS Database 2026", url: `/blog/${SLUG}` },
];

const articleLd = articleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED_ISO,
    image: "https://quantlabusa.dev/og-image.png",
    slug: SLUG,
    section: "Engineering",
    author: { name: "Bill Beltz", url: "https://quantlabusa.dev/about" },
    keywords: ["database scaling", "connection pooling", "read replicas", "partitioning", "sharding"],
});
const breadcrumbLd = breadcrumbSchema(breadcrumbItems, `/blog/${SLUG}`);
const faqLd = faqSchema(faqItems);

export default function ScalingASaasDatabaseGuide2026Page() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/blog" className="hover:text-sky-400 transition-colors">Blog</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Scaling a SaaS Database 2026</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Network className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">MOFU Engineering Guide · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Scaling a SaaS Database: The Right Order of Operations
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        Indexing, connection pooling, read replicas, partitioning, caching, and sharding — in the order you should actually reach for them. Most teams scale in the wrong sequence and pay for it. Here is the playbook we run.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        By <Link href="/about" className="text-sky-400 hover:underline">Bill Beltz</Link>, founder of QUANT LAB USA INC · Published June 3, 2026
                    </p>
                    <ConsultationCTA label="Talk to an Engineer" service="SaaS Platform Development" source="blog-scaling-saas-db" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quick answer</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Scale a SaaS database in this order: fix indexes and query plans, add connection pooling, scale the instance up, add read replicas, partition large tables, cache hot reads — and only shard as a last resort. The early wins are cheap and the late ones are expensive, so the sequence matters enormously. Most SaaS companies never need to shard; a single well-indexed primary with pooling and read replicas carries them for years. Doing the hard things before the easy things is the most common and costly mistake in database scaling.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            When a SaaS gets slow, the instinct is to reach for the dramatic fix: &quot;we need to shard&quot; or &quot;we need to move to a new database.&quot; Nine times out of ten the real problem is a missing index on a hot query, and the dramatic fix would have cost six months to solve a problem a six-minute <code>CREATE INDEX</code> would have closed. Scaling is an order-of-operations discipline before it is anything else.
                        </p>
                        <p>
                            This guide is the sequence we run on every <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform engagement</Link>, from the first slow-query alert to the rare day sharding is genuinely warranted. It pairs with our engine comparison, <Link href="/blog/postgres-vs-mysql-for-saas-2026" className="text-sky-400 hover:underline">Postgres vs MySQL for SaaS</Link>, and our <Link href="/blog/building-multi-tenant-saas-postgres-rls" className="text-sky-400 hover:underline">multi-tenant Postgres RLS</Link> guide. For the basics, see what <Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">SaaS</Link> and <Link href="/glossary/what-is-multi-tenant-saas" className="text-sky-400 hover:underline">multi-tenant SaaS</Link> mean.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The scaling ladder</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Step</th>
                                    <th className="px-4 py-3 border-b border-white/10">Solves</th>
                                    <th className="px-4 py-3 border-b border-white/10">Cost / complexity</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3"><strong>1. Indexing &amp; query tuning</strong></td><td className="px-4 py-3">Slow queries, high CPU</td><td className="px-4 py-3">Low — biggest ROI</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3"><strong>2. Connection pooling</strong></td><td className="px-4 py-3">Connection exhaustion</td><td className="px-4 py-3">Low</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3"><strong>3. Vertical scaling</strong></td><td className="px-4 py-3">General headroom</td><td className="px-4 py-3">Low effort, rising cost</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3"><strong>4. Read replicas</strong></td><td className="px-4 py-3">Read-heavy load</td><td className="px-4 py-3">Medium</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3"><strong>5. Partitioning</strong></td><td className="px-4 py-3">Huge tables, retention</td><td className="px-4 py-3">Medium</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3"><strong>6. Caching</strong></td><td className="px-4 py-3">Repeated hot reads</td><td className="px-4 py-3">Medium (invalidation)</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3"><strong>7. Sharding</strong></td><td className="px-4 py-3">Write &amp; storage ceiling</td><td className="px-4 py-3">High — last resort</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Step 1: indexing and query tuning</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            This is where 80% of early scaling problems live and where the cheapest wins are. Start by finding the queries that hurt. In Postgres, <code>pg_stat_statements</code> ranks queries by total time; in MySQL, the slow query log plus the performance schema does the same.
                        </p>
                        <pre className="bg-[#0a1120] border border-white/10 rounded-xl p-4 overflow-x-auto text-sm"><code>{`-- Postgres: top queries by total execution time
SELECT query, calls, total_exec_time, mean_exec_time
FROM pg_stat_statements
ORDER BY total_exec_time DESC
LIMIT 20;

-- Then explain the worst offender to see the plan
EXPLAIN (ANALYZE, BUFFERS)
SELECT * FROM invoices WHERE tenant_id = $1 AND status = 'open';`}</code></pre>
                        <p>
                            A <code>Seq Scan</code> on a large table in that plan is the smoking gun. The fix is usually a composite index whose column order matches the query&apos;s filter and sort. Lead with the highest-selectivity equality column, then range or sort columns:
                        </p>
                        <pre className="bg-[#0a1120] border border-white/10 rounded-xl p-4 overflow-x-auto text-sm"><code>{`-- Composite index that supports the filter above
CREATE INDEX CONCURRENTLY idx_invoices_tenant_status
  ON invoices (tenant_id, status, created_at DESC);`}</code></pre>
                        <p>
                            Use <code>CREATE INDEX CONCURRENTLY</code> in production so you do not lock writes. A handful of well-chosen composite indexes routinely cut P95 latency by an order of magnitude — far more than any hardware upgrade would. This is always step one.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Step 2: connection pooling</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Postgres opens a full OS process per connection. A few hundred direct connections — easy to hit with multiple app instances or serverless functions — consumes gigabytes of RAM and degrades the whole server. A pooler sits between your app and the database and multiplexes many client connections onto a small set of real ones.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>PgBouncer</strong> in transaction-pooling mode is the standard. It hands a real connection to a transaction, then returns it to the pool when the transaction ends.</li>
                            <li><strong>PgCat</strong> and <strong>Supavisor</strong> add load balancing and replica routing on top of pooling.</li>
                            <li><strong>Serverless</strong> app tiers need pooling badly, because each function invocation can open a connection. Without a pooler you exhaust the limit under modest traffic.</li>
                        </ul>
                        <p>
                            One caveat that bites multi-tenant teams: transaction-pooling mode does not preserve session state across transactions, which interacts with the <code>SET LOCAL</code> tenant variable used for row-level security. The fix is to set the variable inside each transaction — we detail it in the <Link href="/blog/building-multi-tenant-saas-postgres-rls" className="text-sky-400 hover:underline">multi-tenant RLS guide</Link>. MySQL&apos;s threaded model tolerates more connections, but pooling still pays off at scale.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Step 3: scale up before you scale out</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Vertical scaling is unfashionable and underrated. Moving from a 4-core instance to a 32-core instance with more RAM is a config change and a short maintenance window — no application changes, no distributed-systems complexity. Modern managed Postgres and MySQL run very large primaries, and RAM that fits your working set in the buffer cache is the single biggest lever after indexing.
                        </p>
                        <p>
                            The reason to scale up before scaling out is that every scale-out technique (replicas, partitioning, sharding) adds permanent complexity to every future feature. A bigger box adds none. Buy headroom with hardware until the cost curve or a specific bottleneck forces a smarter approach. We size instances against the working set during <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link> engagements rather than guessing.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Mid-post: get your slow query log read</h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">Database creaking under load? We start every performance engagement by reading your slow query log and EXPLAIN plans. Free 30-minute diagnostic call.</p>
                        <ConsultationCTA label="Book the Performance Call" service="SaaS Platform Development" source="blog-scaling-saas-db-mid" />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Step 4: read replicas</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Most SaaS workloads are read-heavy — dashboards, lists, reports, search. A read replica is a synchronized full copy of the primary that serves read-only queries, so you can move that traffic off the primary without changing your data model.
                        </p>
                        <p>
                            The one thing to design for is replication lag. A replica is usually milliseconds behind, but a user who just wrote a record and immediately reads it from a lagging replica sees stale data. The standard patterns:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Read-your-writes routing:</strong> send a user&apos;s reads to the primary for a short window after they write.</li>
                            <li><strong>Analytics to replicas:</strong> route heavy reporting and export queries to replicas where slight staleness is fine.</li>
                            <li><strong>Replica-aware ORM config:</strong> a routing layer that splits reads and writes, with explicit overrides for consistency-critical paths.</li>
                        </ul>
                        <p>
                            Replicas scale reads cleanly and are far simpler than sharding. They are the right answer to &quot;our reads are overwhelming the primary,&quot; and they buy enormous headroom before any harder technique is needed.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Step 5: partitioning large tables</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            When a single table reaches tens or hundreds of millions of rows — typically event logs, audit trails, or time-series — index maintenance and vacuum get expensive and full scans get slow. Partitioning splits one logical table into physical chunks by a key, while the application still queries one table name.
                        </p>
                        <pre className="bg-[#0a1120] border border-white/10 rounded-xl p-4 overflow-x-auto text-sm"><code>{`-- Postgres: range-partition an events table by month
CREATE TABLE events (
  id          bigint,
  tenant_id   uuid,
  created_at  timestamptz NOT NULL,
  payload     jsonb
) PARTITION BY RANGE (created_at);

CREATE TABLE events_2026_06 PARTITION OF events
  FOR VALUES FROM ('2026-06-01') TO ('2026-07-01');`}</code></pre>
                        <p>
                            Two big wins. Queries that filter on the partition key only touch relevant partitions — partition pruning — so a query for last week never scans last year. And data retention becomes <code>DROP TABLE events_2024_01</code>, an instant operation, instead of a slow, bloat-inducing bulk <code>DELETE</code>. Partitioning is a single-database technique and dramatically simpler than sharding; reach for it well before you consider splitting across servers.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Step 6: caching the hot path</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Caching reduces the load that ever reaches the database. The cheapest, highest-value caching targets read-heavy, change-rarely data: reference tables, feature configuration, per-tenant settings, and expensive aggregations that do not need to be real-time.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Application cache (Redis):</strong> store computed results keyed by query inputs, with a TTL and an explicit invalidation on the write that changes them.</li>
                            <li><strong>HTTP / CDN cache:</strong> for public or semi-public read endpoints, cache upstream of the app entirely.</li>
                            <li><strong>Materialized views:</strong> precompute heavy aggregations and refresh on a schedule — but mind tenant isolation, since a materialized view can snapshot across tenants.</li>
                        </ul>
                        <p>
                            The hard part of caching is never the cache; it is invalidation. A cache that serves stale data is worse than no cache because the bug is invisible until a customer notices. Tie every cached entry to a clear invalidation trigger. Our application layer is usually Next.js, so we lean on its caching primitives too — covered in our <Link href="/blog/nextjs-16-app-router-guide-2026" className="text-sky-400 hover:underline">Next.js 16 App Router guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Step 7: when to actually shard</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Sharding splits data horizontally across multiple databases — tenants A to M here, N to Z there — so writes and storage distribute across machines. It is the only thing on this list that scales writes past a single primary, and it is also the most expensive thing you can do to a codebase.
                        </p>
                        <p>
                            Shard only when all of these are true:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>You have already indexed, pooled, scaled up, added replicas, and partitioned.</li>
                            <li>The write volume or storage on a single primary is the proven, measured bottleneck — not a guess.</li>
                            <li>You have a natural shard key (usually <code>tenant_id</code>) that keeps almost all queries within one shard.</li>
                            <li>The team is ready to live with cross-shard queries, distributed transactions, and rebalancing forever.</li>
                        </ul>
                        <p>
                            For multi-tenant SaaS, the cleanest sharding is by tenant, which keeps each tenant&apos;s data on one shard and makes most queries single-shard. Tools like Citus (Postgres) and Vitess (MySQL) manage the mechanics. But be honest: the vast majority of SaaS companies never reach this point. A vertically scaled primary with read replicas and partitioning carries most products for their entire life. Sharding is a real tool for a real ceiling — not a default, and not a flex.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Real-world example: a SaaS hitting its first wall</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A representative engagement: a B2B SaaS whose dashboard had crept to multi-second loads as data grew. The reflexive ask was &quot;do we need to shard?&quot; The slow query log said otherwise. Three missing composite indexes were driving sequential scans on the two largest tables; adding them with <code>CONCURRENTLY</code> cut P95 from roughly 3 seconds to under 250 milliseconds. We then put PgBouncer in front to stop connection exhaustion from the serverless tier, and routed reporting queries to a read replica. No partitioning, no sharding, no new database — just the first three rungs of the ladder, in order.
                        </p>
                        <p>
                            That is the typical shape: the dramatic fix is almost never the right first move. For the engine-selection decision underneath all of this, see <Link href="/blog/postgres-vs-mysql-for-saas-2026" className="text-sky-400 hover:underline">Postgres vs MySQL for SaaS</Link>, and for the broader build picture, <Link href="/blog/2026-state-of-custom-software-development" className="text-sky-400 hover:underline">the 2026 state of custom software development</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Frequently asked questions</h2>
                    <div className="space-y-6">
                        {faqItems.map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Related reading and next steps</h2>
                    <ul className="space-y-3">
                        {[
                            { href: "/services/saas-platform-development", label: "SaaS Platform Development service" },
                            { href: "/services/cloud-infrastructure", label: "Cloud Infrastructure" },
                            { href: "/services/devops-engineering", label: "DevOps Engineering" },
                            { href: "/blog/postgres-vs-mysql-for-saas-2026", label: "Postgres vs MySQL for SaaS (2026)" },
                            { href: "/blog/building-multi-tenant-saas-postgres-rls", label: "Multi-tenant SaaS on Postgres RLS" },
                            { href: "/blog/nextjs-16-app-router-guide-2026", label: "Next.js 16 App Router guide" },
                            { href: "/glossary/what-is-saas", label: "What is SaaS?" },
                            { href: "/glossary/what-is-multi-tenant-saas", label: "What is multi-tenant SaaS?" },
                            { href: "/glossary/what-is-microservices-architecture", label: "What is microservices architecture?" },
                            { href: "/contact", label: "Get a database performance review" },
                        ].map((l) => (
                            <li key={l.href} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                <Link href={l.href} className="text-sky-400 hover:underline">{l.label}</Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Your database is slowing down.</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free 30-minute diagnostic. We will read your slow query log, look at your EXPLAIN plans, and map the cheapest path back to fast — usually without sharding.
                        </p>
                        <ConsultationCTA label="Book the Performance Call" service="SaaS Platform Development" source="blog-scaling-saas-db-cta" />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill directly at <a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug="scaling-a-saas-database-guide-2026"
                        topics={["saas", "stack"]}
                        pinned={["building-multi-tenant-saas-postgres-rls", "nextjs-vs-remix-vs-sveltekit-2026", "2026-state-of-custom-software-development"]}
                        heading="More SaaS engineering reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link href="/blog" className="hover:text-sky-400 inline-flex items-center gap-1">
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Updated June 3, 2026</span>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
