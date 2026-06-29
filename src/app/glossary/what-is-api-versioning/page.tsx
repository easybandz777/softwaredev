import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is API Versioning? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "API versioning lets you evolve an API without breaking existing clients. Plain-English definition, strategies, and deprecation policy. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-api-versioning" },
    openGraph: {
        title: "What is API Versioning? Plain-English Guide (2026) | QUANT LAB USA",
        description:
            "API versioning lets you evolve an API without breaking existing clients. URL, header, and media-type strategies plus deprecation policy, explained.",
        url: "https://quantlabusa.dev/glossary/what-is-api-versioning",
        type: "article",
    },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "API Versioning",
    description:
        "API versioning is the practice of managing changes to an API over time so that new versions can introduce breaking changes without disrupting existing clients that depend on older behavior.",
    url: "https://quantlabusa.dev/glossary/what-is-api-versioning",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "API Versioning", item: "https://quantlabusa.dev/glossary/what-is-api-versioning" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is API versioning in one sentence?", acceptedAnswer: { "@type": "Answer", text: "API versioning is how you evolve an API over time — including breaking changes — without disrupting existing clients that still depend on the old behavior." } },
        { "@type": "Question", name: "What is a breaking change in an API?", acceptedAnswer: { "@type": "Answer", text: "A change that would break existing clients: removing a field or endpoint, renaming a field, making an optional parameter required, or changing a response type or error format. Adding optional fields is usually non-breaking." } },
        { "@type": "Question", name: "What are common versioning strategies?", acceptedAnswer: { "@type": "Answer", text: "URL path versioning (/v1/users), header or media-type versioning (Accept: application/vnd.api.v2+json), and query-parameter versioning. URL path versioning is the most common because it is the most visible and easiest to route and cache." } },
        { "@type": "Question", name: "How does versioning work in GraphQL?", acceptedAnswer: { "@type": "Answer", text: "GraphQL typically avoids version numbers. Instead you add new fields and deprecate old ones with the @deprecated directive, evolving a single schema continuously rather than shipping a v2." } },
        { "@type": "Question", name: "What is a good deprecation policy?", acceptedAnswer: { "@type": "Answer", text: "Announce deprecations clearly, return Deprecation and Sunset headers, give clients a generous migration window with documentation, and monitor traffic on the old version before you remove it." } },
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
                        <li className="text-gray-300">API Versioning</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · APIs</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is API Versioning?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        API versioning is how you change an API over time — including in ways that would otherwise break things — without pulling the rug out from under the clients already using it. Once another team or customer integrates with your API, their code depends on its exact shape, and versioning is the contract that lets you keep improving while their integration keeps working.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why it exists</h2>
                    <p>
                        An internal function can be refactored at will — the compiler finds
                        every caller. A published API cannot, because the callers are other
                        people's systems you do not control and cannot recompile. The moment
                        you ship a{" "}
                        <Link href="/glossary/what-is-a-rest-api" className="text-sky-400 hover:underline">REST API</Link>{" "}
                        that someone integrates with, its response shapes and behaviors
                        become a promise. Versioning is how you keep that promise to existing
                        clients while still moving the API forward for new ones.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Breaking vs non-breaking</h2>
                    <p>
                        The whole discipline turns on one distinction. Non-breaking changes —
                        adding a new optional field, a new endpoint, a new optional parameter —
                        are safe; old clients simply ignore what they do not know about.
                        Breaking changes — removing or renaming a field, making an optional
                        parameter required, changing a type or an error format — will crash
                        existing integrations. Non-breaking changes can ship into the current
                        version. Breaking changes are precisely what a new version is for.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the version lives</h2>
                    <p>
                        There are three common places to put it. URL path versioning —{" "}
                        <code>/v1/users</code>, <code>/v2/users</code> — is the most popular
                        because it is visible, trivial to route, and easy to cache. Header or
                        media-type versioning — <code>Accept:
                        application/vnd.api.v2+json</code> — keeps URLs stable and is
                        considered more "RESTful" by purists, at the cost of being harder to
                        test and cache. Query-parameter versioning exists but is the least
                        common. There is no universally correct choice; consistency matters
                        more than the specific scheme.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The GraphQL approach</h2>
                    <p>
                        <Link href="/glossary/what-is-graphql" className="text-sky-400 hover:underline">GraphQL</Link>{" "}
                        deliberately sidesteps version numbers. Because clients request only
                        the fields they want, you can add new fields freely without affecting
                        anyone, and retire old ones gradually using the{" "}
                        <code>@deprecated</code> directive while you watch usage decline. The
                        result is one continuously evolving schema rather than a wall of
                        <code>v1</code>/<code>v2</code> endpoints — a genuinely different
                        philosophy of change management, with its own tradeoffs around
                        tooling and discipline.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Deprecation is the hard part</h2>
                    <p>
                        Adding a new version is easy; retiring an old one without angry
                        customers is where teams struggle. A humane deprecation policy
                        announces changes early, returns <code>Deprecation</code> and{" "}
                        <code>Sunset</code> headers so clients can detect they are on the way
                        out, ships migration guides, and — crucially — monitors live traffic
                        on the old version before removing it. An{" "}
                        <Link href="/glossary/what-is-openapi" className="text-sky-400 hover:underline">OpenAPI</Link>{" "}
                        spec helps here, because it makes the differences between versions
                        explicit and machine-readable rather than buried in changelog prose.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We bake versioning in from the first endpoint, because retrofitting it
                        after launch is painful. Our{" "}
                        <Link href="/services/api-development" className="text-sky-400 hover:underline">API development</Link>{" "}
                        work establishes a clear policy up front — what counts as breaking,
                        how versions are addressed, how long old ones are supported — and
                        backs it with an{" "}
                        <Link href="/glossary/what-is-openapi" className="text-sky-400 hover:underline">OpenAPI</Link>{" "}
                        spec, deprecation headers, and traffic monitoring so a sunset is a
                        managed event, not a surprise outage for someone's integration. The
                        goal is an API you can evolve for years without breaking the people
                        who trusted it.
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
                        <li><Link href="/glossary/what-is-openapi" className="text-sky-400 hover:underline">What is OpenAPI?</Link></li>
                        <li><Link href="/glossary/what-is-graphql" className="text-sky-400 hover:underline">What is GraphQL?</Link></li>
                        <li><Link href="/glossary/what-is-rest-vs-graphql" className="text-sky-400 hover:underline">REST vs GraphQL</Link></li>
                        <li><Link href="/glossary/what-is-an-api-gateway" className="text-sky-400 hover:underline">What is an API gateway?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Evolving an API without breaking clients?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design versioning and deprecation policies that let your API grow
                        for years without breaking integrations. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-api-versioning" />
                        <Link href="/services/api-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            API development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
