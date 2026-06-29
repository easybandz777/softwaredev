import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Redis? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "Redis is an in-memory data store used for caching, sessions, and queues. Plain-English definition, data structures, persistence, use cases. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-redis" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Redis",
    description:
        "Redis is an open-source, in-memory data store that keeps data in RAM for sub-millisecond access, supports rich data structures beyond simple key-value, and is commonly used as a cache, session store, message broker, and rate limiter.",
    url: "https://quantlabusa.dev/glossary/what-is-redis",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Redis", item: "https://quantlabusa.dev/glossary/what-is-redis" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is Redis in one sentence?", acceptedAnswer: { "@type": "Answer", text: "Redis is an open-source, in-memory data store that keeps data in RAM for extremely fast access and is most often used as a cache, session store, message queue, or rate limiter alongside a primary database." } },
        { "@type": "Question", name: "Is Redis a database or a cache?", acceptedAnswer: { "@type": "Answer", text: "It can be both. Redis is most commonly used as a cache in front of a slower database, but with persistence enabled it can serve as a primary store for certain workloads. Most teams use it as a fast supporting layer, not the system of record." } },
        { "@type": "Question", name: "What data structures does Redis support?", acceptedAnswer: { "@type": "Answer", text: "Far more than key-value strings: lists, hashes, sets, sorted sets, bitmaps, hyperloglogs, streams, and geospatial indexes. These let Redis power leaderboards, queues, rate limiters, and real-time feeds, not just simple caching." } },
        { "@type": "Question", name: "Does Redis lose data if it restarts?", acceptedAnswer: { "@type": "Answer", text: "By default data lives in memory and is lost on restart, but Redis offers two persistence options: RDB snapshots taken periodically, and AOF, an append-only log of every write. You choose the durability and performance trade-off that fits the use case." } },
        { "@type": "Question", name: "What is the difference between Redis and Memcached?", acceptedAnswer: { "@type": "Answer", text: "Both are in-memory caches, but Memcached is a simpler string key-value store, while Redis adds rich data structures, persistence, replication, pub/sub, and scripting. Redis is more capable; Memcached is leaner for pure caching." } },
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
                        <li className="text-gray-300">Redis</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Infrastructure</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Redis?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Redis is an open-source, in-memory data store that keeps your data in RAM instead of on disk, so reads and writes complete in well under a millisecond. It is the workhorse that sits beside your main database to handle caching, user sessions, queues, rate limiting, and real-time features — the things a traditional database does too slowly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The core idea: memory, not disk</h2>
                    <p>
                        Redis — the name comes from "Remote Dictionary Server" — was created
                        by Salvatore Sanfilippo in 2009. Its defining choice is to keep the
                        working dataset entirely in memory. RAM is orders of magnitude
                        faster than disk, so operations that take a relational database
                        several milliseconds take Redis microseconds. That speed is the
                        whole point: Redis is not trying to be your system of record, it is
                        trying to absorb the high-frequency, latency-sensitive work that
                        would otherwise hammer a slower primary database.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">More than key-value</h2>
                    <p>
                        People often picture Redis as a simple string-to-string dictionary,
                        but its real power is its data structures. Lists make natural
                        queues. Hashes store object-like records. Sets handle membership and
                        deduplication. Sorted sets — values ranked by a score — are the
                        canonical way to build a leaderboard or a time-ordered feed. There
                        are also streams for append-only event logs, bitmaps and
                        hyperloglogs for space-efficient counting, and geospatial indexes
                        for "what is near me" queries. Because the server understands these
                        structures natively, you push logic to the data instead of pulling
                        data to the logic.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What people actually use it for</h2>
                    <p>
                        The most common job is{" "}
                        <Link href="/glossary/what-is-caching" className="text-sky-400 hover:underline">caching</Link>:
                        store the result of an expensive query or computation so the next
                        request gets it instantly. Close behind is session storage — a
                        shared place to keep login sessions so any server in a cluster can
                        serve any user. Redis also makes a fine lightweight message broker
                        via pub/sub or streams, a rate limiter using atomic counters with
                        expiry, and a distributed lock. Many teams reach for it the moment a
                        single database starts buckling under read load.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Persistence — it is not always volatile</h2>
                    <p>
                        A common misconception is that Redis loses everything on restart.
                        By default in-memory data is indeed volatile, but Redis offers two
                        durability mechanisms. RDB takes point-in-time snapshots of the
                        dataset at intervals — compact and fast to restore, but you can lose
                        the writes since the last snapshot. AOF (append-only file) logs
                        every write operation, giving much stronger durability at some cost
                        to performance and file size. You can run either, both, or neither,
                        choosing the trade-off that matches how much data loss the use case
                        can tolerate.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Scaling and the licensing twist</h2>
                    <p>
                        A single Redis node is limited by one machine's memory, so for
                        scale Redis supports replication (read replicas), Redis Sentinel
                        for automatic failover, and Redis Cluster, which shards keys across
                        multiple nodes — the same partitioning idea that databases use for{" "}
                        <Link href="/glossary/what-is-database-sharding" className="text-sky-400 hover:underline">sharding</Link>.
                        Worth knowing: in 2024 Redis changed its license away from the
                        permissive BSD terms, prompting the Linux Foundation to launch
                        Valkey, an open-source fork that stays compatible. For most teams
                        the choice between Redis and Valkey is low-stakes today, but it is
                        good to know both exist.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Redis (or Valkey) is a frequent ingredient in the systems we build
                        under{" "}
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link>{" "}
                        and operate under{" "}
                        <Link href="/services/devops-engineering" className="text-sky-400 hover:underline">DevOps engineering</Link>.
                        We use it to take read pressure off the primary database, to hold
                        sessions so the app scales horizontally, and to enforce rate limits
                        that protect both performance and{" "}
                        <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">security</Link>.
                        We are also deliberate about what does and does not belong in it —
                        treating a cache as a system of record, or leaving a Redis instance
                        reachable without authentication, are mistakes we design against
                        from the start.
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
                        <li><Link href="/glossary/what-is-caching" className="text-sky-400 hover:underline">What is caching?</Link></li>
                        <li><Link href="/glossary/what-is-database-sharding" className="text-sky-400 hover:underline">What is database sharding?</Link></li>
                        <li><Link href="/glossary/what-is-load-testing" className="text-sky-400 hover:underline">What is load testing?</Link></li>
                        <li><Link href="/glossary/what-is-observability" className="text-sky-400 hover:underline">What is observability?</Link></li>
                        <li><Link href="/glossary/what-is-a-vpc" className="text-sky-400 hover:underline">What is a VPC?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Database buckling under load?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We add caching, session stores, and rate limiting with Redis so your
                        app stays fast as traffic grows. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-redis" />
                        <Link href="/services/saas-platform-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            SaaS platform development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
