import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { ListTree, ArrowRight, Search, Lock, BookOpen } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";
import { HttpStatusReference } from "./HttpStatusReference";

export const metadata: Metadata = pageMetadata({
    title: "HTTP Status Code Reference — Searchable List | QUANT LAB USA",
    description:
        "A clean, searchable reference of HTTP status codes (1xx-5xx) with plain-English meanings and when to use each. Filter by code or keyword. Free and 100% in-browser.",
    slug: "/tools/http-status-reference",
    keywords: [
        "http status codes",
        "http status code list",
        "http status reference",
        "404 meaning",
        "500 status code",
        "http response codes",
        "rest api status codes",
    ],
});

const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "HTTP Status Code Reference",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/tools/http-status-reference",
    description:
        "A searchable reference of HTTP status codes from 1xx to 5xx with plain-English meanings. Filters entirely in your browser.",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the difference between 401 and 403?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "401 Unauthorized actually means unauthenticated — the server does not know who you are, so you need to log in or supply valid credentials. 403 Forbidden means the server knows who you are but you are not allowed to access this resource; authenticating again will not help. A useful rule of thumb: 401 says 'who are you?', 403 says 'I know who you are, and no.' Returning the right one matters for both correct client behavior and security.",
            },
        },
        {
            "@type": "Question",
            name: "When should an API return 400 versus 422?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Use 400 Bad Request when the request itself is malformed — invalid JSON, a missing required header, a body the server cannot even parse. Use 422 Unprocessable Content when the syntax is valid but the data fails business or validation rules, such as an email that is well-formed but already taken, or a date in the past where a future one is required. Many teams standardize on 422 for field-level validation errors and reserve 400 for structurally broken requests.",
            },
        },
        {
            "@type": "Question",
            name: "Which redirect should I use — 301, 302, 307, or 308?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Use 301 Moved Permanently when a URL has changed for good; browsers and search engines cache it and transfer ranking. Use 302 Found or 303 See Other for temporary redirects. The catch with 301 and 302 is that clients historically changed the method (turning a POST into a GET) on redirect. If you must preserve the original method and body, use 308 (permanent) or 307 (temporary), which guarantee the method does not change.",
            },
        },
        {
            "@type": "Question",
            name: "What does a 429 Too Many Requests response require of the client?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "429 signals that the client has exceeded a rate limit. A well-behaved client must back off rather than retry immediately — and the server should include a Retry-After header telling it how long to wait. Hammering an endpoint that returns 429 will only extend the lockout. On the server side, returning 429 with a clear Retry-After (and ideally rate-limit headers showing the remaining quota) is far friendlier than silently dropping requests.",
            },
        },
        {
            "@type": "Question",
            name: "Is this reference complete and where does the data come from?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It covers the status codes you will actually encounter building and consuming web APIs, grouped by class with plain-English summaries and guidance on when each applies. The codes and their official meanings are defined by the IANA HTTP Status Code Registry and the relevant RFCs. The reference loads as static data and filters entirely in your browser — there are no network requests when you search.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Tools", item: "https://quantlabusa.dev/tools" },
        {
            "@type": "ListItem",
            position: 3,
            name: "HTTP Status Reference",
            item: "https://quantlabusa.dev/tools/http-status-reference",
        },
    ],
};

export default function HttpStatusReferencePage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="container mx-auto px-6 max-w-5xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/tools" className="hover:text-sky-400 transition-colors">Tools</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">HTTP Status Reference</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                        <ListTree className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        HTTP Status Code Reference
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        A clean, searchable reference for every HTTP status code you will meet
                        building and consuming APIs — grouped 1xx through 5xx, each with a
                        plain-English meaning and a note on when to use it.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Search className="w-4 h-4 text-emerald-400" />
                            <span>Filter by code or keyword</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-sky-400" />
                            <span>Plain-English meanings</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-amber-400" />
                            <span>Filters in-browser, no requests</span>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <HttpStatusReference />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Reading status codes like a protocol designer
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            HTTP status codes are organized by their first digit, and that first
                            digit tells you almost everything you need at a glance.{" "}
                            <strong className="text-white">1xx</strong> is informational — rarely
                            seen directly. <strong className="text-white">2xx</strong> means success.{" "}
                            <strong className="text-white">3xx</strong> means redirection — go look
                            elsewhere. <strong className="text-white">4xx</strong> means the client
                            made a mistake. <strong className="text-white">5xx</strong> means the
                            server did. Internalizing this five-bucket model turns an opaque number
                            into a clear signal the moment it lands in your logs.
                        </p>
                        <p>
                            <strong className="text-white">The codes people get wrong</strong> are
                            almost always in the 4xx range. The 401-versus-403 confusion is endemic:
                            401 means &quot;I do not know who you are&quot; (authenticate), while 403
                            means &quot;I know who you are and you still cannot have this&quot;
                            (authorization failed). Returning 404 instead of 403 is sometimes a
                            deliberate security choice — hiding the existence of a resource from
                            users who should not know it is there. And 422 has quietly become the
                            convention for field-level validation errors, leaving 400 for requests
                            the server cannot even parse.
                        </p>
                        <p>
                            <strong className="text-white">Status codes are an API contract.</strong>{" "}
                            Clients make retry, caching, and error-handling decisions based on them.
                            A 429 should trigger back-off, not an immediate retry. A 503 with a
                            Retry-After is a polite &quot;come back soon&quot;; a 500 usually is not
                            worth retrying without a fix. A 304 lets a client reuse its cache and skip
                            a download entirely. Choosing the right code is not pedantry — it is how
                            you let well-behaved clients do the right thing automatically. We design
                            exactly these contracts in our{" "}
                            <Link href="/services/api-development" className="text-sky-400 underline-offset-2 hover:underline">
                                API development work
                            </Link>{" "}
                            and our{" "}
                            <Link href="/services/saas-platform-development" className="text-sky-400 underline-offset-2 hover:underline">
                                SaaS platform builds
                            </Link>
                            .
                        </p>
                        <p>
                            If the underlying concepts are new, our glossary entries on{" "}
                            <Link href="/glossary/what-is-an-api" className="text-sky-400 underline-offset-2 hover:underline">
                                what an API is
                            </Link>{" "}
                            and{" "}
                            <Link href="/glossary/what-is-webhooks" className="text-sky-400 underline-offset-2 hover:underline">
                                what webhooks are
                            </Link>{" "}
                            give you the foundation — status codes make a lot more sense once you see
                            how requests and responses flow.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How to use it</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Type a number like <code className="text-sky-300">404</code> or a keyword
                            like <code className="text-sky-300">redirect</code>,{" "}
                            <code className="text-sky-300">unauthorized</code>, or{" "}
                            <code className="text-sky-300">rate limit</code> into the search box. The
                            list filters instantly across codes, names, and descriptions, keeping the
                            class groupings intact so you keep your bearings. Hover any card to reveal
                            a copy button that grabs the code and its name. The whole reference is
                            static data filtered locally — searching makes no network requests.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-4">
                        {faqSchema.mainEntity.map((item) => (
                            <details
                                key={item.name}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 open:bg-[#0d1526]"
                            >
                                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-white">
                                    <span>{item.name}</span>
                                    <ArrowRight className="w-4 h-4 text-sky-400 transition-transform group-open:rotate-90" />
                                </summary>
                                <p className="text-gray-400 mt-3 leading-relaxed text-sm">{item.acceptedAnswer.text}</p>
                            </details>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related tools</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                            { label: "All free tools", href: "/tools" },
                            { label: "JSON formatter", href: "/tools/json-formatter" },
                            { label: "JWT decoder", href: "/tools/jwt-decoder" },
                            { label: "Stripe webhook tester", href: "/tools/stripe-webhook-tester" },
                            { label: "API development", href: "/services/api-development" },
                            { label: "DevOps engineering", href: "/services/devops-engineering" },
                            { label: "What is webhooks?", href: "/glossary/what-is-webhooks" },
                            { label: "Talk to QUANT LAB USA", href: "/contact" },
                        ].map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="rounded-xl border border-white/5 bg-[#0d1526]/60 hover:border-sky-400/30 hover:bg-[#0d1526] transition-colors p-4 text-sm text-gray-300 hover:text-white"
                            >
                                {l.label} <ArrowRight className="inline w-3 h-3 ml-1 text-sky-400" />
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts topics={["stack"]} heading="Related engineering reading" />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            APIs that return the right code, every time
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            Consistent status codes, predictable error shapes, and sane retry
                            semantics are what separate an API that integrators love from one they
                            dread. We design and build them — and clean up the ones that return 200
                            on failure. Talk to us about your API or platform.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach us directly:{" "}
                            <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline">(770) 652-1282</a>{" "}
                            · <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a 20-min Architecture Call" source="http-status-reference" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
