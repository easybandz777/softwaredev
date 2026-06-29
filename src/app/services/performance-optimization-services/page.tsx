import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Gauge, Check, ArrowRight, MapPin } from "lucide-react";
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
    title: "Performance Optimization Services | Speed & Scale | QUANT LAB USA",
    description:
        "App and database performance optimization: profiling, query tuning, caching, Core Web Vitals, and load testing. Measured wins, not guesswork. US-based engineers.",
    slug: "services/performance-optimization-services",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Performance Optimization",
    name: "Application and Database Performance Optimization",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Performance engineering driven by measurement: CPU and memory profiling, database and query tuning, multi-layer caching, frontend Core Web Vitals optimization, and load testing. Every change is benchmarked before and after so the improvement is proven, not assumed.",
    url: "https://quantlabusa.dev/services/performance-optimization-services",
    offers: {
        "@type": "Offer",
        priceRange: "$5,000-$50,000",
        priceCurrency: "USD",
        description: "Fixed-fee scope per engagement",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Performance Optimization Services", item: "https://quantlabusa.dev/services/performance-optimization-services" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How do you find what is actually slow?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We profile under realistic load rather than guessing. CPU and memory profilers, database query analysis with EXPLAIN plans, distributed traces, and real-user metrics tell us where the time actually goes. Optimizing what feels slow wastes money; we optimize what the data proves is slow.",
            },
        },
        {
            "@type": "Question",
            name: "Most of our slowness is the database — can you fix that?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Usually it is. The common culprits are missing indexes, N+1 query patterns, full table scans, unbounded result sets, and connection-pool exhaustion. We analyze the slow-query log, read the execution plans, add or reshape indexes, rewrite the worst queries, and add caching where it earns its keep. Then we re-benchmark to prove it.",
            },
        },
        {
            "@type": "Question",
            name: "Can you improve our Core Web Vitals and Lighthouse scores?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We target LCP, INP, and CLS directly — image and font optimization, code splitting and bundle trimming, eliminating render-blocking resources, server-side rendering and edge caching, and removing layout shift. The goal is real-user field data improving, not just a one-time lab score.",
            },
        },
        {
            "@type": "Question",
            name: "How do I know the optimization actually worked?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Every engagement is benchmarked before and after against the same scenarios. You get the numbers — p50, p95, and p99 latency, throughput, query times, and Core Web Vitals — for the baseline and the result. If a change does not move the metric, it does not ship.",
            },
        },
        {
            "@type": "Question",
            name: "Will this hold up when we scale?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "That is what load testing is for. We model expected and peak traffic, run it against a staging environment, and find the breaking points before your users do. The deliverable includes the load-test results and a capacity assessment so you know where the next ceiling is and roughly when you will hit it.",
            },
        },
    ],
};

export default function PerformanceOptimizationServicesPage() {
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
                        <li className="text-gray-300">Performance Optimization Services</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-400 mb-6">
                        <Gauge className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Performance Optimization That Is Measured, Not Guessed
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Profiling, database and query tuning, caching, Core Web Vitals, and load testing — every change benchmarked before and after. We optimize what the data proves is slow, then prove the fix worked.
                    </p>
                    <ConsultationCTA label="Scope a Performance Engagement" service="Performance Optimization" source="services-performance" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When slow starts costing you</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Slow software bleeds in ways that are easy to miss until they add up. Users abandon a checkout that takes too long to load. Search rankings slip because Core Web Vitals fail. The cloud bill climbs because inefficient queries burn compute you should not need. The app falls over during the one traffic spike that mattered — a launch, a campaign, a seasonal rush — and the outage is far more expensive than the optimization would have been. Meanwhile the team keeps adding hardware to paper over a problem that is really in the code.
                        </p>
                        <p>
                            Performance optimization stops the bleeding with measurement. We profile the real system under real load, find where the time and money actually go, fix the highest-impact bottlenecks, and benchmark the result so the win is documented in numbers. No throwing servers at the problem and hoping.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we optimize</h2>
                    <ul className="space-y-3">
                        {[
                            "Profiling — CPU, memory, and allocation profiling under realistic load to locate the real hot paths",
                            "Database tuning — indexing strategy, query rewrites, EXPLAIN-plan analysis, and schema adjustments",
                            "Killing N+1 queries, full table scans, and unbounded result sets that quietly dominate latency",
                            "Caching — application, query, HTTP, and CDN layers, with sane invalidation that does not serve stale data",
                            "Connection pooling, concurrency, and resource limits tuned so the system degrades gracefully",
                            "Frontend Core Web Vitals — LCP, INP, and CLS — via image, font, and bundle optimization",
                            "Code splitting, lazy loading, and removal of render-blocking and unused JavaScript",
                            "Server-side rendering, streaming, and edge caching for faster first paint",
                            "Load testing — modeling expected and peak traffic to find breaking points before users do",
                            "Observability — dashboards, percentile latency tracking, and alerting so regressions get caught early",
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
                            Performance work without measurement is superstition. We start by establishing a baseline — the same scenarios run against the current system so there is a number to beat. Then we profile to find where the time actually goes, because the bottleneck is almost never where intuition says it is. We fix the highest-impact issue first, re-benchmark, and repeat. Each change is justified by the metric it moves, and anything that does not move a metric does not ship.
                        </p>
                        <p>
                            Baseline and profiling → prioritized bottleneck list → targeted fixes with before/after benchmarks → caching and load testing → observability handoff (1 to 6 weeks typical). You get the numbers, the changes, and the dashboards to keep performance from regressing later.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tools &amp; methods</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "CPU / memory profilers",
                            "PostgreSQL EXPLAIN",
                            "Redis caching",
                            "Lighthouse + Web Vitals",
                            "k6 / load testing",
                            "Distributed tracing",
                            "CDN + edge caching",
                            "Bundle analysis",
                            "p95 / p99 dashboards",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Performance is part of how we build everything. The same discipline goes into every <Link href="/services/web-applications" className="text-indigo-400 hover:underline">web application</Link>, <Link href="/services/saas-platform-development" className="text-indigo-400 hover:underline">SaaS platform</Link>, and <Link href="/services/database-design-and-optimization" className="text-indigo-400 hover:underline">database we design</Link>.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Where the bottleneck usually lives</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            More often than not, the slowness traces back to the data layer — which is why performance work overlaps heavily with <Link href="/services/database-design-and-optimization" className="text-indigo-400 hover:underline">database design and optimization</Link>. Missing indexes and N+1 patterns can make a fast application feel broken regardless of how clean the frontend is. When the issue is deeper than tuning, it is usually structural, and the honest fix is architectural rather than another cache layer.
                        </p>
                        <p>
                            On the frontend, Core Web Vitals improvements feed directly into search visibility and conversion, so the optimization pays for itself twice. And when growth is the real driver, performance work sits alongside <Link href="/services/cloud-infrastructure" className="text-indigo-400 hover:underline">cloud infrastructure</Link> and <Link href="/services/devops-engineering" className="text-indigo-400 hover:underline">DevOps</Link> so the system scales on efficiency, not just on a bigger bill.
                        </p>
                        <p>
                            Performance optimization served from <Link href="/software-development-macon-ga" className="text-indigo-400 hover:underline">Macon, GA</Link>, with clients across <Link href="/software-development-atlanta-ga" className="text-indigo-400 hover:underline">Atlanta</Link>, <Link href="/software-development-new-york-ny" className="text-indigo-400 hover:underline">New York</Link>, <Link href="/software-development-san-francisco-ca" className="text-indigo-400 hover:underline">San Francisco</Link>, and the rest of the US.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fixed-fee per engagement, scoped to system size and goals. Typical ranges:
                        </p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Targeted fix for a specific slow page or endpoint: $5k – $12k</li>
                            <li>Database performance overhaul — indexing, query rewrites, caching: $12k – $30k</li>
                            <li>Frontend Core Web Vitals program with field-data verification: $8k – $22k</li>
                            <li>Full-stack optimization with load testing and capacity plan: $25k – $50k</li>
                            <li>Performance audit with prioritized bottleneck report: $3,500 flat</li>
                        </ul>
                        <p>
                            Every engagement ships with before/after benchmarks. Optional retainer to monitor and tune as traffic grows.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "Baseline and result benchmarks — p50, p95, p99 latency, throughput, and query times",
                            "Prioritized bottleneck report with the impact and effort of each fix",
                            "Implemented optimizations across the application, database, and frontend",
                            "Caching strategy with invalidation rules documented",
                            "Core Web Vitals before/after with real-user field data where available",
                            "Load-test results and a capacity assessment showing the next ceiling",
                            "Observability dashboards and alerts so regressions get caught before users do",
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
                                q: "How do you find what is actually slow?",
                                a: "We profile under realistic load rather than guessing. CPU and memory profilers, database query analysis with EXPLAIN plans, distributed traces, and real-user metrics tell us where the time actually goes. Optimizing what feels slow wastes money; we optimize what the data proves is slow.",
                            },
                            {
                                q: "Most of our slowness is the database — can you fix that?",
                                a: "Usually it is. The common culprits are missing indexes, N+1 query patterns, full table scans, unbounded result sets, and connection-pool exhaustion. We analyze the slow-query log, read the execution plans, add or reshape indexes, rewrite the worst queries, and add caching where it earns its keep. Then we re-benchmark to prove it.",
                            },
                            {
                                q: "Can you improve our Core Web Vitals and Lighthouse scores?",
                                a: "Yes. We target LCP, INP, and CLS directly — image and font optimization, code splitting and bundle trimming, eliminating render-blocking resources, server-side rendering and edge caching, and removing layout shift. The goal is real-user field data improving, not just a one-time lab score.",
                            },
                            {
                                q: "How do I know the optimization actually worked?",
                                a: "Every engagement is benchmarked before and after against the same scenarios. You get the numbers — p50, p95, and p99 latency, throughput, query times, and Core Web Vitals — for the baseline and the result. If a change does not move the metric, it does not ship.",
                            },
                            {
                                q: "Will this hold up when we scale?",
                                a: "That is what load testing is for. We model expected and peak traffic, run it against a staging environment, and find the breaking points before your users do. The deliverable includes the load-test results and a capacity assessment so you know where the next ceiling is and roughly when you will hit it.",
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
                        heading="Performance & stack reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "database-design-and-optimization", title: "Database Design & Optimization", desc: "Where most performance problems actually start." },
                            { slug: "cloud-infrastructure", title: "Cloud Infrastructure", desc: "Scale on efficiency, not just a bigger bill." },
                            { slug: "devops-engineering", title: "DevOps Engineering", desc: "CI/CD and observability to keep performance from regressing." },
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
                        Want the underlying concepts? The <Link href="/glossary" className="text-indigo-400 hover:underline">glossary</Link> covers caching, indexing, and Core Web Vitals, and the <Link href="/blog" className="text-indigo-400 hover:underline">blog</Link> goes deeper. To scope a performance engagement, <Link href="/contact" className="text-indigo-400 hover:underline">contact us</Link> directly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-indigo-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Performance Optimization — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based engineering team, working with clients across 14 US metros. Profiling, tuning, and load testing run remotely; in-person reviews available in Atlanta and the Southeast.
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
                            Make it fast — and prove it with numbers.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. Founder-led from baseline to benchmark.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="Performance Optimization" source="services-performance" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
