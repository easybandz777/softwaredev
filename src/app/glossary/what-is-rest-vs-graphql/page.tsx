import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "REST vs GraphQL: Which API Style? | QUANT LAB",
    description:
        "REST exposes resources at URLs. GraphQL exposes a typed schema clients query. When to pick each, the real tradeoffs, and how QUANT LAB chooses.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-rest-vs-graphql" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "REST vs GraphQL",
    description:
        "REST and GraphQL are two API paradigms. REST models the world as resources at URLs accessed with HTTP verbs. GraphQL exposes a typed schema clients query directly.",
    url: "https://quantlabusa.dev/glossary/what-is-rest-vs-graphql",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "REST vs GraphQL", item: "https://quantlabusa.dev/glossary/what-is-rest-vs-graphql" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is the main difference between REST and GraphQL?", acceptedAnswer: { "@type": "Answer", text: "REST has many endpoints, each returning a fixed shape. GraphQL has one endpoint and clients send queries describing exactly which fields they want from a typed schema." } },
        { "@type": "Question", name: "Is GraphQL faster than REST?", acceptedAnswer: { "@type": "Answer", text: "Not always. GraphQL reduces over-fetching on the wire but can be slower on the server because resolving a query may hit many backends. The right answer depends on what you measure." } },
        { "@type": "Question", name: "Which is better for SEO?", acceptedAnswer: { "@type": "Answer", text: "Neither. SEO is decided by the rendering layer, not the API layer. A well-built REST or GraphQL backend can power a server-rendered page that ranks identically." } },
        { "@type": "Question", name: "Can I use both?", acceptedAnswer: { "@type": "Answer", text: "Yes, and big platforms often do. GitHub and Shopify ship both REST and GraphQL APIs because each style suits different integration patterns." } },
        { "@type": "Question", name: "Which one should a startup pick?", acceptedAnswer: { "@type": "Answer", text: "REST is usually the right default. It is simpler to operate, easier for third parties to consume, and has better tooling. Pick GraphQL when your frontend has very different data needs per page and your team is comfortable operating it." } },
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
                        <li className="text-gray-300">REST vs GraphQL</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Software</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is REST vs GraphQL?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        REST and GraphQL are two competing styles for designing web APIs. REST exposes a collection of resources, each at its own URL, accessed with HTTP verbs. GraphQL exposes a single typed schema and lets clients send queries asking for exactly the fields and relationships they need.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">REST in two minutes</h2>
                    <p>
                        REST — Representational State Transfer — was described by Roy Fielding
                        in his 2000 dissertation. The core idea is that the web's existing
                        primitives (URLs, HTTP verbs, status codes) are enough to build an
                        application API. You name your resources (users, orders, invoices),
                        give each one a URL (/users/42), and use HTTP verbs (GET to read, POST
                        to create, PUT or PATCH to update, DELETE to remove). The response is
                        usually JSON. Twenty-five years later, the overwhelming majority of
                        public APIs are REST or REST-shaped.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">GraphQL in two minutes</h2>
                    <p>
                        GraphQL was open-sourced by Facebook in 2015. The pitch: instead of the
                        server defining endpoints, the server defines a typed schema describing
                        all the data it can return, and the client sends queries naming exactly
                        the fields it wants. One endpoint, flexible reads, strong typing,
                        excellent tooling. Where REST shines on simplicity, GraphQL shines on
                        reducing over-fetching and under-fetching in complex frontends.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">A worked example</h2>
                    <p>
                        Suppose you need to render a customer dashboard showing the
                        user's profile, their last five invoices, and the open
                        support tickets each invoice has against it. In REST you
                        likely make three calls: GET /me, GET /me/invoices?limit=5,
                        and then GET /tickets?invoice_ids=... for each invoice — or
                        you build a custom endpoint that aggregates exactly that
                        view. In GraphQL you send one query naming user, last five
                        invoices, and their tickets, and the server returns
                        precisely that shape in one round trip. Same data, different
                        choreography.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The honest tradeoffs</h2>
                    <p>
                        REST wins on operational simplicity: any HTTP client can call it,
                        caching is straightforward with standard HTTP semantics, and
                        third-party integrators can read the docs and be productive in
                        minutes. It loses when you need very different shapes of data per page
                        and your frontend ends up making seven calls to render one screen.
                    </p>
                    <p>
                        GraphQL wins when you have a complex frontend with many views that
                        each need a different slice of data — you can fetch exactly what you
                        need in one round trip. It loses on caching (no longer URL-based),
                        on operational complexity (resolver performance, query depth limits,
                        N+1 query problems), and on the learning curve for third parties.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Our default for new builds is REST plus typed schemas (OpenAPI). We
                        reach for GraphQL when the frontend has many views with very different
                        data needs, when there is an existing GraphQL ecosystem we are
                        plugging into, or when the team is already fluent in it. Most
                        startups do not need GraphQL until they have a frontend complex
                        enough to justify the operational overhead, and most never reach
                        that point. Our{" "}
                        <Link href="/services/api-development" className="text-sky-400 hover:underline">API development</Link>{" "}
                        engagements ship in whichever style fits the project.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">tRPC and the third option</h2>
                    <p>
                        For teams writing both client and server in TypeScript,
                        tRPC has become a popular third option. It avoids the
                        REST/GraphQL debate by skipping schema definitions
                        entirely — function calls on the server become typed
                        client calls in the browser with no intermediate
                        protocol. tRPC is excellent for internal APIs inside a
                        single TypeScript codebase and a bad fit for public
                        APIs other teams need to consume. Like every choice in
                        this space, the right answer depends on who is calling
                        the API and how stable the contract needs to be.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                        <li><Link href="/glossary/what-is-webhooks" className="text-sky-400 hover:underline">What are webhooks?</Link></li>
                        <li><Link href="/glossary/what-is-nextjs" className="text-sky-400 hover:underline">What is Next.js?</Link></li>
                        <li><Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">What is SaaS?</Link></li>
                        <li><Link href="/glossary/what-is-jamstack" className="text-sky-400 hover:underline">What is JAMstack?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Picking an API style?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We will tell you whether you actually need GraphQL or whether REST
                        will save your team six months of debugging. Book a 30-minute
                        consultation.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-rest-graphql" />
                        <Link href="/services/api-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            API development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
