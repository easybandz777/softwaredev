import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuthorByline } from "@/components/AuthorByline";
import { EditorialFooter } from "@/components/EditorialFooter";
import { Sources } from "@/components/Sources";
import { ArrowRight, Check, Gauge } from "lucide-react";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, faqSchema } from "@/lib/schemas";
import { getAuthor, authorUrl } from "@/lib/authors";

const SLUG = "api-rate-limiting-strategies-2026";
const PUBLISHED = "2026-06-03";
const TITLE = "API Rate Limiting Strategies (2026)";
const author = getAuthor("bill-beltz");

export const metadata: Metadata = articleMetadata({
    title: "API Rate Limiting Strategies: A 2026 Engineering Guide",
    description:
        "Token bucket, sliding window, and fixed window rate limiting compared — plus per-tenant quotas, distributed limiters, 429 headers, and fail-closed design with code.",
    slug: `blog/${SLUG}`,
    image: "/og-image.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: [author.name],
    keywords: [
        "api rate limiting strategies",
        "token bucket vs sliding window",
        "distributed rate limiter redis",
        "per tenant quota 2026",
    ],
});

const faqs = [
    {
        q: "What is the best rate limiting algorithm for an API?",
        a: "For most production APIs, the token bucket is the best default. It allows short bursts up to the bucket size while enforcing a steady average rate, which matches how real clients behave. The sliding-window log is the most accurate but the most memory-hungry; sliding-window counter is a strong middle ground. Fixed window is the simplest but suffers a boundary problem where a client can fire two full windows of traffic across the reset edge. Choose based on whether you value burst tolerance, accuracy, or simplicity.",
    },
    {
        q: "What is the difference between token bucket and leaky bucket?",
        a: "Both smooth traffic, but in opposite directions. The token bucket lets requests through as long as tokens are available, so it permits bursts up to the bucket capacity and then throttles to the refill rate. The leaky bucket processes requests at a fixed drain rate regardless of arrival pattern, smoothing output into a constant stream. Token bucket is better for user-facing APIs that should tolerate bursts; leaky bucket is better when a downstream system must receive a strictly even flow.",
    },
    {
        q: "How do you rate limit across multiple servers?",
        a: "Keep the limiter state in a shared store — typically Redis — rather than in each instance's memory, which would let a client multiply their allowance by the number of servers. Use an atomic operation (a Lua script or an INCR with expiry) so concurrent requests cannot race past the limit. For very high throughput, a sliding-window counter in Redis gives accuracy without storing every timestamp, and node-local token buckets that periodically sync to Redis trade a little precision for far less network chatter.",
    },
    {
        q: "What HTTP status and headers should a rate limiter return?",
        a: "Return 429 Too Many Requests with a Retry-After header telling the client how long to wait. Emit the standardized RateLimit-Limit, RateLimit-Remaining, and RateLimit-Reset headers so well-behaved clients can self-throttle before they hit the wall. Never return a 200 with an error body — clients and proxies treat 429 specially, and a wrong status code defeats automatic backoff in most HTTP libraries.",
    },
    {
        q: "What is the difference between rate limiting and quotas?",
        a: "Rate limiting protects short-term capacity — requests per second or per minute — to keep one client from overwhelming the system right now. Quotas govern longer-term consumption, such as requests per day or per billing month, and usually map to a pricing tier. You generally want both: a rate limit so no tenant can spike and degrade others, and a quota so usage stays within the plan a customer pays for. They are enforced at different time scales and for different reasons.",
    },
    {
        q: "Should a rate limiter fail open or fail closed?",
        a: "It depends on what the endpoint protects. For a login, password reset, or any abuse-prone endpoint, fail closed — if the limiter store is unreachable, reject rather than expose yourself to credential stuffing. For a low-risk read endpoint where availability matters more than strict enforcement, failing open avoids turning a Redis blip into a full outage. Decide per endpoint, make the choice explicit, and alert when the limiter degrades so you are not silently unprotected.",
    },
];

const sources = [
    {
        label: "RFC 6585 — Additional HTTP Status Codes (429)",
        href: "https://www.rfc-editor.org/rfc/rfc6585",
        publisher: "IETF",
    },
    {
        label: "RateLimit header fields for HTTP (IETF draft)",
        href: "https://datatracker.ietf.org/doc/draft-ietf-httpapi-ratelimit-headers/",
        publisher: "IETF",
    },
    {
        label: "Redis — Rate limiting patterns (INCR)",
        href: "https://redis.io/docs/latest/develop/use/patterns/distributed-locks/",
        publisher: "Redis",
    },
    {
        label: "OWASP API Security Top 10 — API4 Unrestricted Resource Consumption",
        href: "https://owasp.org/API-Security/editions/2023/en/0xa4-unrestricted-resource-consumption/",
        publisher: "OWASP",
    },
];

export default function ApiRateLimitingPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        articleSchema({
                            headline:
                                "API Rate Limiting Strategies: A 2026 Engineering Guide",
                            description:
                                "Token bucket, sliding window, and fixed window compared, with per-tenant quotas, distributed limiters, and fail-closed design.",
                            datePublished: PUBLISHED,
                            slug: SLUG,
                            image: "https://quantlabusa.dev/og-image.png",
                            author: { name: author.name, url: authorUrl(author.slug) },
                            section: "Engineering",
                            keywords: [
                                "api rate limiting strategies",
                                "token bucket vs sliding window",
                                "distributed rate limiter redis",
                            ],
                        }),
                    ),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <Breadcrumbs
                    items={[
                        { label: "Home", href: "/" },
                        { label: "Blog", href: "/blog" },
                        { label: TITLE },
                    ]}
                />

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Gauge className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">
                        API Engineering · 2026
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        API Rate Limiting Strategies: A 2026 Engineering Guide
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        Rate limiting is the cheapest insurance your API can buy: it caps your
                        cloud bill, blunts abuse, and keeps one noisy client from degrading
                        everyone else. This guide compares the algorithms, the distributed
                        designs, and the HTTP details that make it work in production.
                    </p>
                    <AuthorByline
                        author={author}
                        publishedDate={PUBLISHED}
                        readMinutes={12}
                        className="mb-8"
                    />
                    <ConsultationCTA
                        label="Talk Through Your API"
                        service="Custom Software Development"
                        source="blog-rate-limiting"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Quick answer
                        </h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>
                                Use a token bucket as your default algorithm — it tolerates real
                                bursts while enforcing a steady average. Keep limiter state in a
                                shared store like Redis with atomic increments so it holds across
                                multiple servers. Limit per authenticated identity and per IP,
                                pair short-term rate limits with longer-term per-tenant quotas, and
                                return 429 with Retry-After and RateLimit headers. Fail closed on
                                sensitive endpoints, fail open on low-risk reads, and always alert
                                when the limiter degrades.
                            </strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Rate limiting sits at the intersection of reliability, cost control,
                            and security. OWASP calls the failure mode{" "}
                            <strong className="text-white">
                                API4: Unrestricted Resource Consumption
                            </strong>{" "}
                            — without limits, one client can exhaust capacity, run up your bill, or
                            brute-force credentials. We build APIs that take real traffic, and our{" "}
                            <Link href="/services" className="text-sky-400 hover:underline">
                                custom software practice
                            </Link>{" "}
                            treats limiting as a day-one control. For the full API hardening
                            picture, pair this with our{" "}
                            <Link
                                href="/blog/api-security-best-practices-2026"
                                className="text-sky-400 hover:underline"
                            >
                                API security best practices guide
                            </Link>
                            .
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        1. The four algorithms, and when each fits
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Four algorithms cover almost every real need. The right choice is a
                            tradeoff between burst tolerance, accuracy, and memory.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Fixed window.</strong> Count
                                requests per calendar window (e.g. per minute). Simple, but a client
                                can send a full window&apos;s worth right before the reset and again
                                right after — double the intended rate across the boundary.
                            </li>
                            <li>
                                <strong className="text-white">Sliding window log.</strong> Store a
                                timestamp per request and count those inside the trailing window.
                                Perfectly accurate, but memory grows with traffic.
                            </li>
                            <li>
                                <strong className="text-white">Sliding window counter.</strong>{" "}
                                Approximate the sliding window by weighting the current and previous
                                fixed windows. Near-accurate with constant memory — a great default
                                for high throughput.
                            </li>
                            <li>
                                <strong className="text-white">Token bucket.</strong> Refill tokens
                                at a steady rate up to a cap; each request spends one. Permits bursts
                                up to the bucket size, then throttles to the refill rate. The best
                                fit for user-facing APIs.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        2. Implementing a token bucket
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A token bucket needs only two stored values per key — the current token
                            count and the timestamp of the last refill. On each request you compute
                            how many tokens have accrued since then, cap at the bucket size, and
                            spend one if available.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`// Token bucket: refill lazily on each request
function allow(state, now, ratePerSec, capacity) {
  const elapsed = (now - state.lastRefill) / 1000;
  const tokens = Math.min(capacity, state.tokens + elapsed * ratePerSec);
  if (tokens < 1) {
    return { ok: false, retryAfter: (1 - tokens) / ratePerSec };
  }
  return {
    ok: true,
    next: { tokens: tokens - 1, lastRefill: now },
  };
}`}</code>
                        </pre>
                        <p>
                            The key design decision is <em>scope</em>: rate-limit per authenticated
                            identity for fairness, and per IP as a backstop against unauthenticated
                            abuse. Use distinct, stricter buckets for expensive or sensitive
                            endpoints — login, password reset, search, export, and anything that
                            triggers downstream cost.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        3. Making it work across many servers
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            In-memory counters break the moment you run more than one instance —
                            each server enforces its own limit, so a client&apos;s real allowance is
                            multiplied by your fleet size. The fix is shared, atomic state.
                        </p>
                        <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a1120] p-4 text-sm">
                            <code>{`-- Atomic fixed-window counter in Redis (Lua, runs server-side)
local current = redis.call("INCR", KEYS[1])
if current == 1 then
  redis.call("PEXPIRE", KEYS[1], ARGV[1])  -- window in ms
end
if current > tonumber(ARGV[2]) then        -- limit
  return 0                                  -- reject
end
return 1                                     -- allow`}</code>
                        </pre>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                Use a Lua script or a pipelined transaction so the read-modify-write
                                is atomic — otherwise concurrent requests race past the limit.
                            </li>
                            <li>
                                For extreme throughput, keep a node-local token bucket and reconcile
                                with Redis periodically; you trade a little precision for far fewer
                                round trips.
                            </li>
                            <li>
                                Push coarse limiting to the edge — a CDN, API gateway, or WAF — and
                                reserve application-level limiting for per-tenant fairness and
                                business logic.
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        4. The HTTP contract: 429 and the right headers
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A rate limiter is only as good as the signal it sends back. Return{" "}
                            <code className="text-sky-300">429 Too Many Requests</code> with a{" "}
                            <code className="text-sky-300">Retry-After</code> header, and emit the
                            standardized <code className="text-sky-300">RateLimit-*</code> headers so
                            disciplined clients throttle themselves before hitting the wall.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <code className="text-sky-300">RateLimit-Limit</code> — the ceiling
                                for the window.
                            </li>
                            <li>
                                <code className="text-sky-300">RateLimit-Remaining</code> — requests
                                left in the current window.
                            </li>
                            <li>
                                <code className="text-sky-300">RateLimit-Reset</code> — seconds until
                                the window refreshes.
                            </li>
                            <li>
                                Never return <code className="text-sky-300">200</code> with an error
                                body — HTTP clients and proxies rely on the 429 status to trigger
                                automatic backoff.
                            </li>
                        </ul>
                        <p>
                            Document your limits publicly. A client that knows the rules can design
                            polite retry-with-jitter behavior; a client guessing in the dark will
                            hammer you.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Mid-post: rate limits and quotas are not the same control
                    </h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">
                            Short-term rate limits protect capacity now; long-term quotas enforce
                            the plan a customer pays for. Most APIs need both. Want help mapping
                            limits to your pricing tiers? Book a free scoping call.
                        </p>
                        <ConsultationCTA
                            label="Design My Limits & Quotas"
                            service="Custom Software Development"
                            source="blog-rate-limiting-mid"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Algorithm comparison at a glance
                    </h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Algorithm</th>
                                    <th className="px-4 py-3 border-b border-white/10">
                                        Strength / weakness
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Fixed window</td>
                                    <td className="px-4 py-3">
                                        Simplest; boundary burst doubles the effective rate
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Sliding log</td>
                                    <td className="px-4 py-3">
                                        Exact; memory grows with request volume
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Sliding counter</td>
                                    <td className="px-4 py-3">
                                        Near-exact with constant memory; great default at scale
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Token bucket</td>
                                    <td className="px-4 py-3">
                                        Burst-tolerant, steady average; best for user-facing APIs
                                    </td>
                                </tr>
                                <tr className="border-b border-white/5">
                                    <td className="px-4 py-3 whitespace-nowrap">Leaky bucket</td>
                                    <td className="px-4 py-3">
                                        Smooths output to a constant rate; good for protecting
                                        downstreams
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Operational practices that hold over time
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Limits drift out of step with reality unless you watch them:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>
                                <strong className="text-white">Instrument every rejection.</strong>{" "}
                                A spike in 429s is either an attack or a limit set too low for a
                                legitimate workload — you cannot tell them apart without metrics.
                                See our{" "}
                                <Link
                                    href="/blog/observability-for-startups-2026"
                                    className="text-sky-400 hover:underline"
                                >
                                    observability for startups guide
                                </Link>
                                .
                            </li>
                            <li>
                                <strong className="text-white">Decide fail-open vs fail-closed
                                per endpoint.</strong> Sensitive endpoints reject when the limiter is
                                down; low-risk reads stay available. Make it explicit and alert on
                                degradation.
                            </li>
                            <li>
                                <strong className="text-white">Offload heavy work to a queue.</strong>{" "}
                                When a tenant hits their limit on an expensive operation, enqueue it
                                rather than rejecting outright — see{" "}
                                <Link
                                    href="/blog/background-jobs-and-queues-in-production-2026"
                                    className="text-sky-400 hover:underline"
                                >
                                    background jobs and queues in production
                                </Link>
                                .
                            </li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Frequently asked questions
                    </h2>
                    <div className="space-y-6">
                        {faqs.map((item) => (
                            <div
                                key={item.q}
                                className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6"
                            >
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <Sources items={sources} />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Related reading and next steps
                    </h2>
                    <ul className="space-y-3">
                        {[
                            { href: "/blog/api-security-best-practices-2026", label: "API security best practices (2026)" },
                            { href: "/blog/caching-strategies-for-saas-2026", label: "Caching strategies for SaaS (2026)" },
                            { href: "/blog/background-jobs-and-queues-in-production-2026", label: "Background jobs and queues in production" },
                            { href: "/blog/observability-for-startups-2026", label: "Observability for startups (2026)" },
                            { href: "/blog/event-driven-architecture-for-saas-2026", label: "Event-driven architecture for SaaS" },
                            { href: "/services", label: "Custom software development services" },
                            { href: "/blog", label: "All engineering articles" },
                            { href: "/contact", label: "Talk to Bill about your API" },
                        ].map((l) => (
                            <li key={l.href} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                <Link href={l.href} className="text-sky-400 hover:underline">
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <EditorialFooter reviewedDate={PUBLISHED} />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Cap the abuse. Protect the bill.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            We design rate limiting and quota systems that hold under real
                            traffic and map cleanly to your pricing. Book a free scoping call to
                            talk through your API.
                        </p>
                        <ConsultationCTA
                            label="Book the Scoping Call"
                            service="Custom Software Development"
                            source="blog-rate-limiting-cta"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug={SLUG}
                        topics={["stack", "saas", "pentest"]}
                        pinned={[
                            "api-security-best-practices-2026",
                            "scaling-a-saas-database-guide-2026",
                        ]}
                        heading="More engineering reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link
                            href="/blog"
                            className="hover:text-sky-400 inline-flex items-center gap-1"
                        >
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Updated June 3, 2026</span>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
