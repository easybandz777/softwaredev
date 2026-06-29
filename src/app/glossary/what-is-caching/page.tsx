import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Caching? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "Caching stores copies of data in fast storage to avoid recomputing it. Plain-English definition, cache layers, invalidation, eviction, hit rate. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-caching" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Caching",
    description:
        "Caching is the practice of storing a copy of data or a computed result in faster-to-access storage so that future requests for the same thing are served quickly, avoiding the cost of fetching from a slow source or recomputing it.",
    url: "https://quantlabusa.dev/glossary/what-is-caching",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Caching", item: "https://quantlabusa.dev/glossary/what-is-caching" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is caching in one sentence?", acceptedAnswer: { "@type": "Answer", text: "Caching is storing a copy of data or a computed result in fast storage so that repeat requests for the same thing are served quickly, instead of recomputing it or fetching it again from a slow source." } },
        { "@type": "Question", name: "What is cache invalidation?", acceptedAnswer: { "@type": "Answer", text: "Cache invalidation is removing or updating cached data once the underlying source changes, so users do not see stale results. It is famously one of the hardest problems in computing because deciding exactly when and what to invalidate is rarely simple." } },
        { "@type": "Question", name: "What is a cache hit rate?", acceptedAnswer: { "@type": "Answer", text: "The cache hit rate is the fraction of requests served from the cache rather than the underlying source. A high hit rate means the cache is doing its job; a low hit rate means you are paying the cache's overhead without much benefit." } },
        { "@type": "Question", name: "What is a TTL?", acceptedAnswer: { "@type": "Answer", text: "TTL stands for time to live — how long a cached item stays valid before it expires and must be refetched. A short TTL keeps data fresh but lowers the hit rate; a long TTL boosts the hit rate but risks serving stale data." } },
        { "@type": "Question", name: "What is the difference between caching and a CDN?", acceptedAnswer: { "@type": "Answer", text: "A CDN is a specific kind of cache that stores copies of content in data centers close to users worldwide, cutting network latency. General caching can also live in memory, in the browser, or in a database layer; a CDN is the geographic edge case." } },
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
                        <li className="text-gray-300">Caching</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Infrastructure</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Caching?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Caching is the practice of keeping a copy of data — or the result of an expensive computation — in fast-to-reach storage, so the next time someone asks for the same thing you hand it over instantly instead of doing the slow work again. It is one of the most effective ways to make software faster, and one of the easiest to get subtly wrong.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The fundamental trade-off</h2>
                    <p>
                        Caching exploits a simple economic fact: some data is requested far
                        more often than it changes. If a product page is viewed ten
                        thousand times an hour but updated once a day, recomputing it on
                        every view is enormous waste. The cache stores the computed answer
                        and serves it cheaply. The catch is that you are now keeping a copy,
                        and copies go stale. Every caching decision is really a trade
                        between speed (serve the copy) and freshness (the copy might be
                        wrong). Get the balance right and the system flies; get it wrong and
                        users see outdated data or you blow away all the benefit.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Caching happens at every layer</h2>
                    <p>
                        Caches are everywhere in a modern stack. The CPU has hardware
                        caches. The browser caches assets so a repeat visit loads instantly.
                        A CDN caches content in data centers near users around the world,
                        cutting network latency. The application caches query results and
                        rendered fragments in memory or in a dedicated store like{" "}
                        <Link href="/glossary/what-is-redis" className="text-sky-400 hover:underline">Redis</Link>.
                        The database has its own buffer cache. Each layer shaves time off a
                        different part of the journey, and a fast system usually has several
                        working together rather than relying on one.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Caching patterns</h2>
                    <p>
                        How data gets into the cache matters. Cache-aside (lazy loading) is
                        the most common: the application checks the cache, and on a miss it
                        reads the source, stores the result, and returns it. Read-through
                        puts the cache in front of the source so it loads automatically.
                        Write-through writes to the cache and the source together, keeping
                        them consistent at the cost of slower writes. Write-behind buffers
                        writes in the cache and flushes them to the source later, which is
                        fast but risks data loss. Choosing the pattern is about how much
                        staleness and write latency the use case can tolerate.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The hard part: invalidation and eviction</h2>
                    <p>
                        There is an old joke that the two hardest problems in computer
                        science are cache invalidation and naming things. Invalidation —
                        deciding when a cached copy is no longer valid and removing it — is
                        genuinely difficult, because the answer depends on business rules
                        that are rarely clean. The blunt instrument is a TTL (time to
                        live): expire each item after a set duration. More precise
                        approaches invalidate on the specific event that changed the data.
                        Separately, caches have finite space, so an eviction policy decides
                        what to drop when full — LRU (least recently used) is the common
                        default, alongside LFU and FIFO. Both choices directly shape your
                        cache hit rate, the fraction of requests the cache actually serves.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Failure modes worth knowing</h2>
                    <p>
                        Caches introduce their own pathologies. A cache stampede (or
                        thundering herd) happens when a popular item expires and thousands
                        of requests all miss at once and slam the database simultaneously.
                        Cache penetration is when requests for data that does not exist
                        repeatedly bypass the cache and hit the source. These are solvable —
                        with request coalescing, jittered TTLs, and negative caching — but
                        only if you know to look for them, which is exactly where{" "}
                        <Link href="/glossary/what-is-observability" className="text-sky-400 hover:underline">observability</Link>{" "}
                        and{" "}
                        <Link href="/glossary/what-is-load-testing" className="text-sky-400 hover:underline">load testing</Link>{" "}
                        earn their keep.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Caching is often the highest-leverage performance change we make on
                        the systems we build under{" "}
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform development</Link>{" "}
                        and operate under{" "}
                        <Link href="/services/devops-engineering" className="text-sky-400 hover:underline">DevOps engineering</Link>.
                        It is frequently the right answer to "the database is slow" before
                        anyone contemplates{" "}
                        <Link href="/glossary/what-is-database-sharding" className="text-sky-400 hover:underline">sharding</Link>.
                        But we are deliberate about invalidation, because a cache that
                        serves stale data quietly is worse than no cache at all — and we
                        keep an eye on the security edge cases too, since caching
                        per-user data in a shared layer is a classic way to leak one
                        customer's information to another.
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
                        <li><Link href="/glossary/what-is-database-sharding" className="text-sky-400 hover:underline">What is database sharding?</Link></li>
                        <li><Link href="/glossary/what-is-load-testing" className="text-sky-400 hover:underline">What is load testing?</Link></li>
                        <li><Link href="/glossary/what-is-observability" className="text-sky-400 hover:underline">What is observability?</Link></li>
                        <li><Link href="/glossary/what-is-distributed-tracing" className="text-sky-400 hover:underline">What is distributed tracing?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">App slower than it should be?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We add the right caching at the right layers — with invalidation done
                        properly — so your app stays fast and correct. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-caching" />
                        <Link href="/services/saas-platform-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            SaaS platform development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
