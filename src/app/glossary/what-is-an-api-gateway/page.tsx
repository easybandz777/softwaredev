import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is an API Gateway? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "An API gateway is the single entry point that routes, authenticates, and rate-limits requests to backend services. Plain-English definition. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-an-api-gateway" },
    openGraph: {
        title: "What is an API Gateway? Plain-English Guide (2026) | QUANT LAB USA",
        description:
            "An API gateway is the single front door that routes, authenticates, and rate-limits requests to backend services. What it does and when you need one.",
        url: "https://quantlabusa.dev/glossary/what-is-an-api-gateway",
        type: "article",
    },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "API Gateway",
    description:
        "An API gateway is a server that sits in front of one or more backend services as a single entry point, handling cross-cutting concerns like routing, authentication, rate limiting, and request transformation so individual services do not have to.",
    url: "https://quantlabusa.dev/glossary/what-is-an-api-gateway",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "API Gateway", item: "https://quantlabusa.dev/glossary/what-is-an-api-gateway" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is an API gateway in one sentence?", acceptedAnswer: { "@type": "Answer", text: "An API gateway is a single front door that sits in front of your backend services and handles routing, authentication, rate limiting, and other cross-cutting concerns so each service does not reimplement them." } },
        { "@type": "Question", name: "Is an API gateway the same as a load balancer?", acceptedAnswer: { "@type": "Answer", text: "No, though they overlap. A load balancer distributes traffic across identical instances at the network level. A gateway works at the API level — it understands routes, auth, and per-client policy, and often sits in front of load balancers." } },
        { "@type": "Question", name: "What problems does an API gateway solve?", acceptedAnswer: { "@type": "Answer", text: "It centralizes authentication, rate limiting, TLS termination, request routing, response caching, and observability, so clients see one stable endpoint while the backend evolves into many services behind it." } },
        { "@type": "Question", name: "Do I need an API gateway for a monolith?", acceptedAnswer: { "@type": "Answer", text: "Usually not at first. A single app can handle its own auth and rate limiting. Gateways earn their keep as you split into multiple services or expose APIs to third parties who need consistent policy." } },
        { "@type": "Question", name: "What are common API gateway products?", acceptedAnswer: { "@type": "Answer", text: "Managed options include AWS API Gateway, Google Cloud API Gateway, and Azure API Management. Self-hosted options include Kong, Apigee, Tyk, and Envoy-based gateways." } },
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
                        <li className="text-gray-300">API Gateway</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · APIs</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is an API Gateway?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        An API gateway is the single front door to your backend: every client request hits the gateway first, and it handles the concerns common to all of them — authentication, rate limiting, routing to the right service, TLS, caching, and logging — so the services behind it can focus on business logic instead of reimplementing the same plumbing over and over.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why a single front door</h2>
                    <p>
                        As an application grows from one app into many services, a question
                        arises: where does shared logic live? Every service needs to check
                        auth tokens, enforce limits, terminate TLS, and emit logs. Copying
                        that into each service is duplication and drift waiting to happen.
                        The gateway pattern pulls those cross-cutting concerns into one
                        layer that all traffic passes through, giving clients a single
                        stable endpoint while the backend is free to change shape.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What it actually does</h2>
                    <p>
                        A typical gateway authenticates each request (validating an{" "}
                        <Link href="/glossary/what-is-an-jwt" className="text-sky-400 hover:underline">JWT</Link>{" "}
                        or API key), applies{" "}
                        <Link href="/glossary/what-is-rate-limiting" className="text-sky-400 hover:underline">rate limiting</Link>{" "}
                        per client, routes the path to the correct upstream service,
                        terminates TLS, and can cache responses, transform payloads, and
                        aggregate calls. It is also the natural home for observability —
                        every request flows through it, so it is where you measure latency,
                        error rates, and traffic by consumer.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Gateway vs load balancer</h2>
                    <p>
                        These get confused, but they operate at different layers. A{" "}
                        <Link href="/glossary/what-is-a-load-balancer" className="text-sky-400 hover:underline">load balancer</Link>{" "}
                        spreads raw traffic across identical instances; it does not know or
                        care what an API route means. A gateway is API-aware — it
                        understands routes, authenticates callers, and applies per-client
                        policy. In practice they stack: the gateway makes a routing and
                        policy decision, then hands the request to a load balancer that
                        picks a healthy instance of the target service.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Gateway vs service mesh</h2>
                    <p>
                        A gateway governs north-south traffic — the requests entering your
                        system from the outside. A{" "}
                        <Link href="/glossary/what-is-a-service-mesh" className="text-sky-400 hover:underline">service mesh</Link>{" "}
                        governs east-west traffic — the calls services make to each other
                        inside the cluster. Larger systems often run both: a gateway at the
                        edge for public clients, and a mesh internally for service-to-service
                        security, retries, and telemetry. They are complementary, not
                        competing.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The risk of overcentralizing</h2>
                    <p>
                        Because everything funnels through it, the gateway is a single point
                        of failure and a tempting dumping ground. Cram too much business
                        logic into it and you have recreated a monolith with extra latency.
                        The discipline is to keep the gateway focused on genuine
                        cross-cutting concerns — auth, limits, routing, observability — and
                        leave domain logic in the services. It also has to be highly
                        available and horizontally scalable, because if it goes down, your
                        whole API goes with it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We introduce a gateway when a system has earned one — multiple
                        services, third-party consumers, or the need for consistent auth and
                        limits across endpoints — and not before. Our{" "}
                        <Link href="/services/api-development" className="text-sky-400 hover:underline">API development</Link>{" "}
                        work uses the gateway to centralize{" "}
                        <Link href="/glossary/what-is-rate-limiting" className="text-sky-400 hover:underline">rate limiting</Link>,
                        token validation, and TLS, with strict rules about what is allowed
                        to live there. For early-stage products, we are just as happy to
                        keep auth in a single{" "}
                        <Link href="/glossary/what-is-a-rest-api" className="text-sky-400 hover:underline">REST API</Link>{" "}
                        until the architecture actually needs a front door.
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
                        <li><Link href="/glossary/what-is-a-service-mesh" className="text-sky-400 hover:underline">What is a service mesh?</Link></li>
                        <li><Link href="/glossary/what-is-rate-limiting" className="text-sky-400 hover:underline">What is rate limiting?</Link></li>
                        <li><Link href="/glossary/what-is-a-load-balancer" className="text-sky-400 hover:underline">What is a load balancer?</Link></li>
                        <li><Link href="/glossary/what-is-a-rest-api" className="text-sky-400 hover:underline">What is a REST API?</Link></li>
                        <li><Link href="/glossary/what-is-microservices-architecture" className="text-sky-400 hover:underline">Microservices architecture</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Need a front door for your API?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We design gateways that centralize auth and rate limiting without
                        becoming a bottleneck. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-api-gateway" />
                        <Link href="/services/api-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            API development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
