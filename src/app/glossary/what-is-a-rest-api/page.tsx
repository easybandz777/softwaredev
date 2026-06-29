import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is a REST API? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "A REST API exposes resources over HTTP using verbs and status codes in a stateless, cacheable way. Plain-English definition and constraints. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-a-rest-api" },
    openGraph: {
        title: "What is a REST API? Plain-English Guide (2026) | QUANT LAB USA",
        description:
            "A REST API exposes resources over HTTP using verbs and status codes in a stateless, cacheable way. The constraints, methods, and design rules explained.",
        url: "https://quantlabusa.dev/glossary/what-is-a-rest-api",
        type: "article",
    },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "REST API",
    description:
        "A REST API is an application programming interface that follows the REST architectural style — modeling data as resources addressed by URLs and manipulated with standard HTTP methods over stateless, cacheable requests.",
    url: "https://quantlabusa.dev/glossary/what-is-a-rest-api",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "REST API", item: "https://quantlabusa.dev/glossary/what-is-a-rest-api" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is a REST API in one sentence?", acceptedAnswer: { "@type": "Answer", text: "A REST API exposes your data as resources addressed by URLs and manipulated with standard HTTP methods like GET, POST, PUT, and DELETE, over stateless requests that are easy to cache." } },
        { "@type": "Question", name: "What does REST stand for?", acceptedAnswer: { "@type": "Answer", text: "Representational State Transfer. The term was coined by Roy Fielding in his 2000 doctoral dissertation, which described the architectural constraints behind the web itself." } },
        { "@type": "Question", name: "What are the main HTTP methods in REST?", acceptedAnswer: { "@type": "Answer", text: "GET reads, POST creates, PUT and PATCH update, DELETE removes. GET, PUT, and DELETE are idempotent — repeating them has the same effect as doing them once — while POST is not." } },
        { "@type": "Question", name: "Is REST the same as HTTP?", acceptedAnswer: { "@type": "Answer", text: "No. HTTP is the protocol; REST is an architectural style that uses HTTP well. You can send HTTP requests that are not RESTful, and REST imposes constraints like statelessness and resource modeling on top of HTTP." } },
        { "@type": "Question", name: "REST or GraphQL — which should I use?", acceptedAnswer: { "@type": "Answer", text: "REST is simpler to build, cache, and operate, and fits resource-oriented APIs. GraphQL helps when many clients need different slices of data. The right choice depends on your clients and team, not fashion." } },
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
                        <li className="text-gray-300">REST API</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · APIs</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is a REST API?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A REST API is a way of exposing your application's data over HTTP by modeling everything as resources — a user, an order, an invoice — each addressed by a URL and manipulated with standard verbs like GET, POST, PUT, and DELETE. Requests are stateless and responses are cacheable, which is exactly why REST scales as gracefully as the web it was modeled on.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where REST came from</h2>
                    <p>
                        Roy Fielding, one of the authors of the HTTP spec, coined
                        "Representational State Transfer" in his 2000 dissertation. He was
                        not inventing a product — he was describing the architectural
                        constraints that already made the web work, then arguing that APIs
                        should follow the same principles. REST became the default style for
                        web APIs because it leans on infrastructure the internet already
                        had: URLs, HTTP methods, status codes, and caches.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Resources, verbs, and status codes</h2>
                    <p>
                        In REST, nouns are resources and verbs are HTTP methods.{" "}
                        <code>GET /orders/42</code> reads order 42;{" "}
                        <code>POST /orders</code> creates one; <code>PUT /orders/42</code>{" "}
                        replaces it; <code>DELETE /orders/42</code> removes it. The server
                        answers with a status code that means something specific —{" "}
                        <code>200</code> OK, <code>201</code> Created, <code>404</code> Not
                        Found, <code>409</code> Conflict, <code>429</code> when you hit{" "}
                        <Link href="/glossary/what-is-rate-limiting" className="text-sky-400 hover:underline">rate limiting</Link>.
                        Used well, the protocol carries most of the meaning.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The constraints that define it</h2>
                    <p>
                        REST is more than "JSON over HTTP." Its defining constraints include
                        statelessness — every request carries everything needed to process
                        it, so no session state is stored on the server between calls — a
                        uniform interface, a client-server split, and cacheability. Because
                        requests are stateless, you can put a fleet of identical servers
                        behind a{" "}
                        <Link href="/glossary/what-is-a-load-balancer" className="text-sky-400 hover:underline">load balancer</Link>{" "}
                        and route any request to any instance. That property is the quiet
                        reason REST scales so well.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Idempotency and safe methods</h2>
                    <p>
                        REST distinguishes safe methods (GET, which should never change
                        state) from idempotent ones (PUT and DELETE, where repeating the
                        call has the same effect as making it once). POST is neither, which
                        is why retrying a failed POST can create duplicates. Handling that
                        correctly is the domain of{" "}
                        <Link href="/glossary/what-is-idempotency" className="text-sky-400 hover:underline">idempotency</Link>{" "}
                        keys — a discipline any payment or order API has to get right, since
                        a dropped response should never turn into a double charge.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">REST vs the alternatives</h2>
                    <p>
                        REST is not the only game in town.{" "}
                        <Link href="/glossary/what-is-graphql" className="text-sky-400 hover:underline">GraphQL</Link>{" "}
                        lets clients fetch exactly the fields they need and shines when many
                        clients want different slices of data;{" "}
                        <Link href="/glossary/what-is-grpc" className="text-sky-400 hover:underline">gRPC</Link>{" "}
                        is faster for service-to-service traffic. But REST's simplicity,
                        ubiquitous tooling, and free HTTP caching keep it the default for
                        public, resource-oriented APIs. We compare the two head to head in
                        our{" "}
                        <Link href="/glossary/what-is-rest-vs-graphql" className="text-sky-400 hover:underline">REST vs GraphQL</Link>{" "}
                        explainer.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Most APIs we build are REST, because most products are well served
                        by clean resources, predictable verbs, and honest status codes. Our{" "}
                        <Link href="/services/api-development" className="text-sky-400 hover:underline">API development</Link>{" "}
                        work pairs that with the things that separate a real API from a toy:
                        consistent error shapes,{" "}
                        <Link href="/glossary/what-is-api-versioning" className="text-sky-400 hover:underline">versioning</Link>{" "}
                        so you can evolve without breaking clients, an{" "}
                        <Link href="/glossary/what-is-openapi" className="text-sky-400 hover:underline">OpenAPI</Link>{" "}
                        spec that doubles as documentation, authentication on every route,
                        and idempotency where it counts. The protocol is simple; doing it
                        well is the work.
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
                        <li><Link href="/glossary/what-is-graphql" className="text-sky-400 hover:underline">What is GraphQL?</Link></li>
                        <li><Link href="/glossary/what-is-rest-vs-graphql" className="text-sky-400 hover:underline">REST vs GraphQL</Link></li>
                        <li><Link href="/glossary/what-is-openapi" className="text-sky-400 hover:underline">What is OpenAPI?</Link></li>
                        <li><Link href="/glossary/what-is-api-versioning" className="text-sky-400 hover:underline">What is API versioning?</Link></li>
                        <li><Link href="/glossary/what-is-idempotency" className="text-sky-400 hover:underline">What is idempotency?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Designing a REST API?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design clean, versioned, well-documented REST APIs that are
                        secure and a pleasure to integrate. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-rest-api" />
                        <Link href="/services/api-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            API development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
