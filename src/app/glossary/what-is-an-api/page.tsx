import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "What is an API? Definition & Examples | QUANT LAB",
    description:
        "An API is the contract that lets two pieces of software talk. Plain-English definition, REST vs GraphQL, examples, why every modern product depends on them.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-an-api" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "API (Application Programming Interface)",
    description:
        "An API is a documented contract that defines how one piece of software can request data or actions from another — the layer that lets systems compose.",
    url: "https://quantlabusa.dev/glossary/what-is-an-api",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is an API?", item: "https://quantlabusa.dev/glossary/what-is-an-api" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does API stand for?", acceptedAnswer: { "@type": "Answer", text: "Application Programming Interface. The published contract for how software systems request services from each other." } },
        { "@type": "Question", name: "Is an API the same as a website?", acceptedAnswer: { "@type": "Answer", text: "No. A website returns HTML that humans read. An API returns structured data — usually JSON — that other programs read." } },
        { "@type": "Question", name: "What is REST?", acceptedAnswer: { "@type": "Answer", text: "REST is the most common API style on the public web. It models the system as a collection of resources, each accessed via a URL, with HTTP verbs (GET, POST, PUT, DELETE) describing what to do with them." } },
        { "@type": "Question", name: "What is GraphQL?", acceptedAnswer: { "@type": "Answer", text: "GraphQL is an API style where the client sends a query against a typed schema and the server returns exactly the requested shape — one endpoint, flexible reads." } },
        { "@type": "Question", name: "Do I need an API for my product?", acceptedAnswer: { "@type": "Answer", text: "If you have a frontend, you have an API behind it whether you realize it or not. The real question is whether to expose a public API customers can build on." } },
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
                        <li className="text-gray-300">What is an API?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Software</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is an API?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        An API — Application Programming Interface — is the published contract that one piece of software offers to another, describing what data it returns, what actions it accepts, and exactly how to ask for them.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The simplest possible mental model</h2>
                    <p>
                        Imagine you walk into a restaurant. The menu is the API. It tells you
                        what you can order, what each thing contains, and what it costs. You do
                        not need to know how the kitchen works, what brand of stove they use, or
                        which farm the tomatoes came from — you just need to know how to order
                        from the menu and what you will get back.
                    </p>
                    <p>
                        A software API is the same thing. Stripe exposes "create a charge,"
                        Twilio exposes "send an SMS," your CRM exposes "create a deal." You do
                        not care how they implemented it; you care that the contract is stable.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">REST, GraphQL, RPC, and webhooks</h2>
                    <p>
                        Most modern APIs fall into one of four paradigms. REST models the world
                        as resources at URLs (GET /users/42). GraphQL exposes a typed schema and
                        lets clients ask for exactly the fields they need. RPC (gRPC, JSON-RPC)
                        names methods directly (CreateUser, SendInvoice) and is more common
                        inside service meshes than on the public web. Webhooks invert the
                        direction — instead of you asking, the other system tells you when
                        something happens by POSTing to a URL you own.
                    </p>
                    <p>
                        These styles are not exclusive — Stripe is REST plus webhooks, GitHub
                        ships both REST and GraphQL, every major SaaS has at least one webhook
                        category. Choosing between them is a design decision, not a religion.
                        See our dedicated entry on{" "}
                        <Link href="/glossary/what-is-rest-vs-graphql" className="text-sky-400 hover:underline">REST vs GraphQL</Link>{" "}
                        for the tradeoffs.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why APIs matter for non-engineers</h2>
                    <p>
                        Every "integration" your team relies on is an API call. Your CRM pulling
                        data from your billing system, your support tool surfacing the customer's
                        plan, your accounting software reconciling Stripe — APIs all the way
                        down. A founder who can not draw a rough diagram of which APIs their
                        product talks to is one outage away from being unable to explain to
                        customers why something broke.
                    </p>
                    <p>
                        APIs are also the surface where most security incidents happen. Public
                        APIs without rate limiting get scraped. Internal APIs without
                        authorization checks get used by the wrong tenant. APIs that leak more
                        data than they should make headlines.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We design and build APIs as a first-class product, not as the unloved
                        backend of a frontend. Our{" "}
                        <Link href="/services/api-development" className="text-sky-400 hover:underline">API development</Link> engagements
                        usually fall into two buckets: integrations that wire your product to
                        third-party platforms (Stripe, Salesforce, QuickBooks, the dozen vertical
                        SaaS tools your customers depend on), and public APIs that let your own
                        customers build on top of you.
                    </p>
                    <p>
                        Every API we ship gets the same treatment a customer-facing product
                        gets: typed contracts, OpenAPI or GraphQL schema, versioning policy,
                        rate limiting, structured error responses, and authentication that does
                        not rely on hope. Where the data is sensitive, we recommend a{" "}
                        <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">web application pentest</Link> on the
                        API surface before launch.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Versioning — the thing teams forget until it hurts</h2>
                    <p>
                        APIs need a versioning strategy from the day they ship,
                        because someone is integrating with v1 and you need a path
                        to v2 without breaking them. Common approaches: URL
                        versioning (/v1/users, /v2/users), header versioning, and
                        date-based versioning (Stripe's approach). Each has
                        tradeoffs, but the worst choice is no choice — eventually
                        you have to break something, and customers tolerate
                        breakage much better when there is a documented version
                        policy than when their integrations just stop working with
                        no warning.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-rest-vs-graphql" className="text-sky-400 hover:underline">REST vs GraphQL</Link></li>
                        <li><Link href="/glossary/what-is-webhooks" className="text-sky-400 hover:underline">What are webhooks?</Link></li>
                        <li><Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">What is SaaS?</Link></li>
                        <li><Link href="/glossary/what-is-nextjs" className="text-sky-400 hover:underline">What is Next.js?</Link></li>
                        <li><Link href="/glossary/what-is-owasp-top-10" className="text-sky-400 hover:underline">OWASP Top 10</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Need to build or integrate an API?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design API contracts that your future self will still want to live
                        with in three years. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-api" />
                        <Link href="/services/api-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            API development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
