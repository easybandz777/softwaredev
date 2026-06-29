import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Rate Limiting? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "Rate limiting caps how many requests a client can make in a time window, protecting APIs from abuse and overload. Algorithms and headers. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-rate-limiting" },
    openGraph: {
        title: "What is Rate Limiting? Plain-English Guide (2026) | QUANT LAB USA",
        description:
            "Rate limiting caps how many requests a client can make in a window, protecting APIs from abuse and overload. Token bucket, headers, and 429s explained.",
        url: "https://quantlabusa.dev/glossary/what-is-rate-limiting",
        type: "article",
    },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Rate Limiting",
    description:
        "Rate limiting is the practice of capping how many requests a given client can make to an API within a time window, protecting backend services from abuse, accidental overload, and unfair resource consumption.",
    url: "https://quantlabusa.dev/glossary/what-is-rate-limiting",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Rate Limiting", item: "https://quantlabusa.dev/glossary/what-is-rate-limiting" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is rate limiting in one sentence?", acceptedAnswer: { "@type": "Answer", text: "Rate limiting caps how many requests a client can make in a given time window, protecting an API from abuse, runaway scripts, and accidental overload." } },
        { "@type": "Question", name: "What HTTP status code means rate limited?", acceptedAnswer: { "@type": "Answer", text: "HTTP 429 Too Many Requests. A well-behaved API also returns a Retry-After header telling the client how long to wait before trying again." } },
        { "@type": "Question", name: "What is the token bucket algorithm?", acceptedAnswer: { "@type": "Answer", text: "Token bucket adds tokens to a bucket at a steady rate up to a cap; each request consumes a token. It allows short bursts up to the bucket size while enforcing a long-run average rate." } },
        { "@type": "Question", name: "Rate limiting vs throttling — what's the difference?", acceptedAnswer: { "@type": "Answer", text: "They overlap. Rate limiting rejects requests over a hard cap, usually with a 429. Throttling tends to slow or queue excess requests rather than reject them outright, smoothing load." } },
        { "@type": "Question", name: "Where should rate limiting live?", acceptedAnswer: { "@type": "Answer", text: "Often at the edge — in an API gateway, CDN, or reverse proxy — so abusive traffic is stopped before it reaches application servers. Distributed limits usually rely on a shared store like Redis." } },
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
                        <li className="text-gray-300">Rate Limiting</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · APIs</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Rate Limiting?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Rate limiting is the practice of capping how many requests a single client can make to an API within a time window — say 100 requests per minute — so that one runaway script, abusive actor, or buggy integration cannot overwhelm your servers or starve everyone else of capacity. When a client exceeds the cap, the API returns HTTP 429 and tells it when to try again.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why every real API needs it</h2>
                    <p>
                        An API with no limits is one bad client away from an outage. A retry
                        loop with no backoff, a scraper, a credential-stuffing attack, or a
                        single customer who scripts against you too aggressively can consume
                        all your capacity and take the service down for everyone. Rate
                        limiting is the seatbelt: it protects the backend, enforces fair use
                        across tenants, contains the blast radius of abuse, and — on metered
                        plans — is how usage tiers get enforced in the first place.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The common algorithms</h2>
                    <p>
                        A few patterns dominate. Fixed window counts requests per calendar
                        window (per minute, per hour) — simple, but it allows a burst right
                        at the window boundary. Sliding window smooths that edge by
                        weighting the previous window. Token bucket adds tokens at a steady
                        rate up to a cap and spends one per request, allowing controlled
                        bursts while holding a long-run average. Leaky bucket drains
                        requests at a constant rate, queuing or dropping the overflow. Token
                        bucket is the most common default because real traffic is bursty.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">429 and the headers that matter</h2>
                    <p>
                        When a client trips the limit, the correct response is HTTP{" "}
                        <code>429 Too Many Requests</code>, accompanied by a{" "}
                        <code>Retry-After</code> header so the caller knows how long to wait.
                        Good APIs also surface the limit, remaining quota, and reset time
                        (for example via <code>X-RateLimit-*</code> or the standardized{" "}
                        <code>RateLimit</code> headers) so well-behaved clients can
                        self-pace. Pair this with{" "}
                        <Link href="/glossary/what-is-idempotency" className="text-sky-400 hover:underline">idempotency</Link>{" "}
                        keys so that retries after a 429 do not accidentally double-charge or
                        duplicate work.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where to enforce it</h2>
                    <p>
                        The earlier you reject abusive traffic, the less it costs you. That
                        is why rate limiting commonly lives at the edge — in a{" "}
                        <Link href="/glossary/what-is-an-api-gateway" className="text-sky-400 hover:underline">API gateway</Link>,
                        a CDN, or a reverse proxy — so floods are stopped before they ever
                        touch application servers. The hard part is doing it across a fleet:
                        if you run many instances behind a{" "}
                        <Link href="/glossary/what-is-a-load-balancer" className="text-sky-400 hover:underline">load balancer</Link>,
                        each one only sees part of the traffic, so distributed limits
                        usually keep their counters in a shared fast store such as Redis.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Identity, fairness, and security</h2>
                    <p>
                        What you key the limit on matters. IP-based limits are easy but
                        unfair behind shared NAT and easy to evade with rotating addresses.
                        API-key or account-based limits are fairer and harder to dodge.
                        Sensitive endpoints — login, password reset, signup — deserve
                        stricter, separate limits, because rate limiting is a frontline
                        defense against brute-force and{" "}
                        <Link href="/glossary/what-is-phishing" className="text-sky-400 hover:underline">credential</Link>{" "}
                        attacks, not just a capacity tool. The right scheme balances
                        protection against accidentally blocking legitimate users.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We treat rate limiting as a default, not an afterthought. Our{" "}
                        <Link href="/services/api-development" className="text-sky-400 hover:underline">API development</Link>{" "}
                        work ships token-bucket limits keyed to API keys, honest{" "}
                        <code>429</code> responses with <code>Retry-After</code>, standard
                        rate-limit headers, and a Redis-backed counter so the limits hold
                        across every instance behind the{" "}
                        <Link href="/glossary/what-is-an-api-gateway" className="text-sky-400 hover:underline">gateway</Link>.
                        For auth-sensitive routes we add tighter, dedicated limits. The aim
                        is a system that shrugs off abuse without punishing the customers
                        who are using it correctly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["pentest","stack"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-an-api-gateway" className="text-sky-400 hover:underline">What is an API gateway?</Link></li>
                        <li><Link href="/glossary/what-is-idempotency" className="text-sky-400 hover:underline">What is idempotency?</Link></li>
                        <li><Link href="/glossary/what-is-a-rest-api" className="text-sky-400 hover:underline">What is a REST API?</Link></li>
                        <li><Link href="/glossary/what-is-a-load-balancer" className="text-sky-400 hover:underline">What is a load balancer?</Link></li>
                        <li><Link href="/glossary/what-is-api-versioning" className="text-sky-400 hover:underline">What is API versioning?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Hardening an API against abuse?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design rate-limiting that holds across a fleet and protects auth
                        endpoints without blocking real users. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-rate-limiting" />
                        <Link href="/services/api-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            API development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
