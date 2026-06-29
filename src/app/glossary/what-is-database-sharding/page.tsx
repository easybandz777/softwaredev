import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Database Sharding? Plain-English Guide | QUANT LAB USA",
    description:
        "Database sharding splits one database into smaller partitions across servers. Plain-English definition, shard keys, trade-offs, vs replication. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-database-sharding" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Database Sharding",
    description:
        "Database sharding is a horizontal partitioning technique that splits a single large database into smaller pieces called shards, each holding a subset of the rows and running on its own server, so the dataset and its load are spread across many machines.",
    url: "https://quantlabusa.dev/glossary/what-is-database-sharding",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Database Sharding", item: "https://quantlabusa.dev/glossary/what-is-database-sharding" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is database sharding in one sentence?", acceptedAnswer: { "@type": "Answer", text: "Database sharding splits one large database into smaller pieces called shards, each holding part of the data on its own server, so storage and query load are spread across many machines instead of overwhelming one." } },
        { "@type": "Question", name: "What is the difference between sharding and replication?", acceptedAnswer: { "@type": "Answer", text: "Replication copies the same data to multiple servers for read scaling and redundancy. Sharding splits different data across servers so each holds only a slice. They solve different problems and are often used together." } },
        { "@type": "Question", name: "What is a shard key?", acceptedAnswer: { "@type": "Answer", text: "The shard key is the column used to decide which shard a row belongs to, such as customer ID. Choosing it well is the most important sharding decision — a poor key creates hot shards and forces slow queries that hit every shard." } },
        { "@type": "Question", name: "What are the downsides of sharding?", acceptedAnswer: { "@type": "Answer", text: "Sharding adds major complexity: cross-shard queries and joins become hard or impossible, transactions across shards are difficult, rebalancing data is painful, and application code must be shard-aware. It is usually a last resort, not a first move." } },
        { "@type": "Question", name: "When should you shard a database?", acceptedAnswer: { "@type": "Answer", text: "Only after cheaper options are exhausted — a bigger server, read replicas, caching, and query optimization. Shard when a single primary can no longer hold the data or handle the write volume, and not before, because it is hard to undo." } },
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
                        <li className="text-gray-300">Database Sharding</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Infrastructure</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Database Sharding?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Database sharding is the practice of splitting one enormous database into many smaller pieces called shards, each holding a different slice of the rows and running on its own server, so that no single machine has to store all the data or absorb all the traffic. It is the heaviest tool in the scaling toolbox — and the one you reach for last.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The wall it gets you past</h2>
                    <p>
                        A relational database on a single server can be scaled vertically —
                        more CPU, more RAM, faster disks — for a long way. But there is a
                        ceiling: eventually the dataset is too large to fit, or the write
                        volume is too high for one machine to commit, and you cannot buy a
                        bigger box. Replication helps with reads but not with this problem,
                        because every replica still holds the entire dataset and every
                        write still goes through one primary. Sharding breaks that ceiling
                        by spreading the data itself horizontally across many machines, so
                        each shard holds and serves only its portion.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Sharding vs. replication</h2>
                    <p>
                        These two are constantly confused, so it is worth being precise.
                        Replication copies the same data to multiple servers — useful for
                        scaling reads and for redundancy if a node dies. Sharding splits
                        different data onto different servers — useful for scaling writes
                        and total storage. They are orthogonal and most large systems use
                        both: the data is divided into shards, and each shard is itself
                        replicated for durability and read capacity. Reaching for
                        replication when you actually need sharding (or vice versa) is a
                        common and expensive misdiagnosis.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The shard key is everything</h2>
                    <p>
                        The single most consequential decision in sharding is the shard
                        key — the column that determines which shard a given row lives on.
                        A good key, like customer ID in a multi-tenant SaaS, keeps each
                        customer's data together on one shard and distributes load evenly.
                        A bad key creates two failure modes. Hot shards: if you shard by
                        something skewed, one shard ends up with the celebrity account and
                        all the traffic while others sit idle. Scatter-gather queries: if
                        a common query does not include the shard key, the system must ask
                        every shard and merge the results, which is slow and scales badly.
                        Choosing the key well, up front, is most of the work.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Strategies: range, hash, and directory</h2>
                    <p>
                        There are a few ways to map keys to shards. Range-based sharding
                        assigns contiguous ranges (customers A–F on shard one) — simple, but
                        prone to hotspots if activity clusters. Hash-based sharding runs the
                        key through a hash function to scatter rows evenly, at the cost of
                        making range scans impractical. Directory-based sharding keeps an
                        explicit lookup table mapping keys to shards, which is flexible and
                        makes rebalancing easier but adds a lookup and a potential single
                        point of failure. Consistent hashing — the same idea behind{" "}
                        <Link href="/glossary/what-is-redis" className="text-sky-400 hover:underline">Redis</Link>{" "}
                        Cluster — minimizes how much data must move when you add or remove a
                        shard.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The costs you inherit</h2>
                    <p>
                        Sharding is powerful but it is not free, and the bill comes due in
                        complexity. Joins and transactions that span shards become hard or
                        impossible; foreign keys across shards do not work; queries that do
                        not hit the shard key get slow; and rebalancing — moving data when a
                        shard fills up — is genuinely painful in production. The application
                        also has to become shard-aware, or sit behind a routing layer that
                        is. This is why the standard advice is to exhaust the cheaper
                        options first: a bigger server, read replicas,{" "}
                        <Link href="/glossary/what-is-caching" className="text-sky-400 hover:underline">caching</Link>,
                        and query tuning. Modern distributed databases such as CockroachDB,
                        Vitess, and Citus automate much of the sharding machinery, which is
                        often a better path than hand-rolling it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Our default advice on the systems we build under{" "}
                        <Link href="/services/data-engineering" className="text-sky-400 hover:underline">data engineering</Link>{" "}
                        and{" "}
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link>{" "}
                        is: do not shard until you genuinely have to. Most "we need to
                        shard" conversations are actually solved by an index, a cache, a
                        read replica, or a query rewrite — changes that{" "}
                        <Link href="/glossary/what-is-load-testing" className="text-sky-400 hover:underline">load testing</Link>{" "}
                        usually reveals before any partitioning is needed. When sharding is
                        truly warranted, we lean on managed distributed databases over
                        bespoke logic, choose the shard key with the access patterns in
                        mind, and keep the routing out of scattered application code.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack","saas"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-redis" className="text-sky-400 hover:underline">What is Redis?</Link></li>
                        <li><Link href="/glossary/what-is-caching" className="text-sky-400 hover:underline">What is caching?</Link></li>
                        <li><Link href="/glossary/what-is-load-testing" className="text-sky-400 hover:underline">What is load testing?</Link></li>
                        <li><Link href="/glossary/what-is-observability" className="text-sky-400 hover:underline">What is observability?</Link></li>
                        <li><Link href="/glossary/what-is-distributed-tracing" className="text-sky-400 hover:underline">What is distributed tracing?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Hitting a database scaling wall?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We diagnose the real bottleneck before reaching for sharding, then
                        scale your data layer the right way. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-sharding" />
                        <Link href="/services/data-engineering" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Data engineering
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
