import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is GraphQL? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "GraphQL is a query language for APIs that lets clients ask for exactly the data they need. Plain-English definition, schema, tradeoffs vs REST. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-graphql" },
    openGraph: {
        title: "What is GraphQL? Plain-English Guide (2026) | QUANT LAB USA",
        description:
            "GraphQL is a query language for APIs that lets clients ask for exactly the data they need. Schema, resolvers, and the tradeoffs vs REST, explained.",
        url: "https://quantlabusa.dev/glossary/what-is-graphql",
        type: "article",
    },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "GraphQL",
    description:
        "GraphQL is a query language and runtime for APIs that exposes a single typed schema and lets a client request exactly the fields it needs in one round trip, rather than calling many fixed REST endpoints.",
    url: "https://quantlabusa.dev/glossary/what-is-graphql",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "GraphQL", item: "https://quantlabusa.dev/glossary/what-is-graphql" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is GraphQL in one sentence?", acceptedAnswer: { "@type": "Answer", text: "GraphQL is a query language for APIs that exposes one typed schema and lets the client request exactly the fields it needs in a single request, instead of hitting many fixed endpoints." } },
        { "@type": "Question", name: "Is GraphQL better than REST?", acceptedAnswer: { "@type": "Answer", text: "Neither is universally better. GraphQL shines when clients have varied data needs and you want to avoid over- and under-fetching. REST is simpler to cache and operate. Many systems use both." } },
        { "@type": "Question", name: "Who created GraphQL?", acceptedAnswer: { "@type": "Answer", text: "Facebook (now Meta) built it internally in 2012 to power its mobile apps and open-sourced it in 2015. It is now governed by the GraphQL Foundation under the Linux Foundation." } },
        { "@type": "Question", name: "What is a GraphQL resolver?", acceptedAnswer: { "@type": "Answer", text: "A resolver is a function that returns the data for one field in the schema. The GraphQL engine walks the query, calls each resolver, and assembles the response in the shape the client asked for." } },
        { "@type": "Question", name: "Is GraphQL secure by default?", acceptedAnswer: { "@type": "Answer", text: "No. Because clients craft their own queries, a naive GraphQL API is exposed to deeply nested queries, expensive joins, and introspection leaks. It needs depth limiting, cost analysis, and authorization on every field." } },
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
                        <li className="text-gray-300">GraphQL</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · APIs</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is GraphQL?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        GraphQL is a query language and runtime for APIs that exposes a single, strongly typed schema describing everything a client can read or change, and lets each client ask for exactly the fields it needs — no more, no less — in one round trip, instead of stitching together responses from a dozen fixed endpoints.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it came from</h2>
                    <p>
                        Facebook built GraphQL internally in 2012 because its mobile apps
                        were drowning in chatty REST calls — a single news-feed screen
                        needed data from many endpoints, and slow networks made the round
                        trips painful. The team flipped the model: let the client send one
                        query describing the exact tree of data it wants, and have the
                        server return precisely that shape. They open-sourced it in 2015,
                        and it is now stewarded by the GraphQL Foundation.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The schema is the contract</h2>
                    <p>
                        At the center of every GraphQL API is a typed schema: object
                        types, fields, queries, mutations, and subscriptions. The schema
                        is both documentation and a machine-readable contract — tooling can
                        autocomplete queries, validate them before they ever hit the
                        server, and generate fully typed client code. Compared with a{" "}
                        <Link href="/glossary/what-is-a-rest-api" className="text-sky-400 hover:underline">REST API</Link>{" "}
                        whose shape often lives only in human-written docs, the GraphQL
                        schema is enforced by the runtime itself.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Over-fetching and under-fetching</h2>
                    <p>
                        The classic problem GraphQL solves is over- and under-fetching. A
                        REST endpoint returns a fixed payload, so a mobile screen that
                        needs three fields might download fifty, while a different screen
                        has to call three endpoints to assemble what it needs. With
                        GraphQL the client names the fields, the server returns exactly
                        those, and one request replaces several. That is a real win on slow
                        or metered connections — and a major reason GraphQL took off on
                        mobile first.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Resolvers and the N+1 trap</h2>
                    <p>
                        Each field in the schema is backed by a resolver — a function that
                        knows how to fetch that piece of data. The engine walks the query
                        and calls resolvers as it goes. The danger is the N+1 problem: a
                        list of 100 authors that each resolve their posts can fire 101
                        database queries. The standard fix is a batching layer
                        (DataLoader-style) that collapses those calls, often paired with a
                        caching layer or a{" "}
                        <Link href="/glossary/what-is-a-load-balancer" className="text-sky-400 hover:underline">load balancer</Link>{" "}
                        in front of replicated read databases.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The tradeoffs people forget</h2>
                    <p>
                        GraphQL is not free. Because every request is a POST with a
                        different body, the simple HTTP caching that makes REST cheap to
                        operate no longer applies out of the box. Clients can craft
                        arbitrarily deep, expensive queries, so you need depth limits,
                        query-cost analysis, and persisted queries to stay safe. And
                        authorization gets harder — you have to enforce permissions at the
                        field level, not just per endpoint. None of this is a dealbreaker,
                        but pretending GraphQL is strictly simpler than REST is how teams
                        get surprised in production.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We reach for GraphQL when a product has many client surfaces — web,
                        iOS, Android, internal tools — with genuinely different data needs,
                        because one typed schema beats maintaining a sprawl of bespoke
                        endpoints. Our{" "}
                        <Link href="/services/api-development" className="text-sky-400 hover:underline">API development</Link>{" "}
                        work pairs the schema with batching, query-cost limits, and
                        field-level authorization from day one. When a system is simpler —
                        a handful of resource types, heavy read caching — we will often
                        recommend a{" "}
                        <Link href="/glossary/what-is-a-rest-api" className="text-sky-400 hover:underline">REST API</Link>{" "}
                        instead. The honest comparison lives in our{" "}
                        <Link href="/glossary/what-is-rest-vs-graphql" className="text-sky-400 hover:underline">REST vs GraphQL</Link>{" "}
                        write-up.
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
                        <li><Link href="/glossary/what-is-a-rest-api" className="text-sky-400 hover:underline">What is a REST API?</Link></li>
                        <li><Link href="/glossary/what-is-rest-vs-graphql" className="text-sky-400 hover:underline">REST vs GraphQL</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                        <li><Link href="/glossary/what-is-an-api-gateway" className="text-sky-400 hover:underline">What is an API gateway?</Link></li>
                        <li><Link href="/glossary/what-is-grpc" className="text-sky-400 hover:underline">What is gRPC?</Link></li>
                        <li><Link href="/glossary/what-is-rate-limiting" className="text-sky-400 hover:underline">What is rate limiting?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Designing or untangling a GraphQL API?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design typed schemas, fix N+1 query storms, and lock down
                        field-level authorization. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-graphql" />
                        <Link href="/services/api-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            API development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
