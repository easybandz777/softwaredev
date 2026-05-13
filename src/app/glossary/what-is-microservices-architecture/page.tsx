import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is Microservices Architecture? | QUANT LAB",
    description:
        "Microservices break a system into many small, independently deployable services. When the pattern earns its keep, when it punishes you, and what QUANT LAB usually recommends instead.",
    slug: "/glossary/what-is-microservices-architecture",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Microservices Architecture",
    description:
        "Microservices architecture is a style in which a single application is composed of many small, independently deployable services, each owning its data and communicating with the others over the network.",
    url: "https://quantlabusa.dev/glossary/what-is-microservices-architecture",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is microservices architecture?", item: "https://quantlabusa.dev/glossary/what-is-microservices-architecture" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What are microservices?", acceptedAnswer: { "@type": "Answer", text: "Microservices are an architectural style in which a single product is built as a set of small, independently deployable services that communicate over the network and each own their own data." } },
        { "@type": "Question", name: "When did microservices become popular?", acceptedAnswer: { "@type": "Answer", text: "The term emerged around 2011 and was popularized by Martin Fowler and James Lewis in a 2014 essay. Netflix, Amazon, and Spotify's public engineering writing through the mid-2010s turned it into the default talked-about pattern." } },
        { "@type": "Question", name: "What is the difference between microservices and SOA?", acceptedAnswer: { "@type": "Answer", text: "Service-oriented architecture (SOA) is the older umbrella term. Microservices is a stricter, smaller-grained interpretation that emphasizes single-purpose services, independent deployability, and decentralized data ownership rather than a single enterprise service bus." } },
        { "@type": "Question", name: "Do microservices require Kubernetes?", acceptedAnswer: { "@type": "Answer", text: "No, but Kubernetes is the most common production orchestrator for them. You can run microservices on ECS, Nomad, plain VMs, or serverless platforms — the architectural choice is independent of the runtime." } },
        { "@type": "Question", name: "Should a startup start with microservices?", acceptedAnswer: { "@type": "Answer", text: "Almost never. The right early-stage default is a well-modularized monolith. Microservices solve organizational and scaling problems most startups do not have yet, and the operational cost is real from day one." } },
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
                        <li className="text-gray-300">What is microservices architecture?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Software</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Microservices Architecture?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Microservices architecture is the design choice to build a single product as many small, independently deployable services — each focused on one slice of the business, each owning its own data, and each able to be changed and shipped without coordinating with the others.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the pattern came from</h2>
                    <p>
                        The term "microservices" surfaced in workshops around 2011 and was crystallized in a 2014 essay by Martin Fowler and James Lewis. The underlying ideas had been around for longer — service-oriented architecture in the 2000s, Unix-style small composable programs going back further — but the modern pattern came of age alongside cheap container infrastructure (Docker in 2013, Kubernetes in 2014) that made running fifty separate services operationally tractable. Netflix and Amazon's public engineering writing made it the dominant architectural conversation of the mid-2010s.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What the pattern actually buys you</h2>
                    <p>
                        Three real benefits, in order of how often they actually materialize. First, organizational scale: when 200 engineers are working on one product, splitting into 30 services with clear owners lets each team ship without waiting for the others. Second, technological heterogeneity: a billing service in Java can sit next to a recommendation service in Python without forcing one stack on both. Third, independent scaling: the part of the system under load (image processing, video transcoding) can scale separately from the parts that are idle. None of those benefits are automatic — they require disciplined boundaries — but they are real when earned.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What the pattern actually costs</h2>
                    <p>
                        The hidden bill is large. Every cross-service call is now a network call that can fail, time out, retry, double-deliver, or arrive out of order. Distributed tracing, structured logging, service discovery, retries, circuit breakers, and a deployment pipeline that handles fifty repos instead of one — none of that is optional, and all of it is built by humans before any product feature ships. Data consistency is harder because no single database transaction can span services. Local development is harder because you have to run six services to test one feature.
                    </p>
                    <p>
                        Sam Newman, who wrote the definitive book on the pattern, has said publicly that most teams that adopted microservices in the 2010s should not have, and many have spent the 2020s walking the decision back. The famous "monolith decomposition" Netflix stories include the parts where Netflix had the engineering budget and need to do it; most companies have neither.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The modular monolith alternative</h2>
                    <p>
                        For most products under a few dozen engineers, a well-modularized monolith — one deployable, multiple internal modules with clean boundaries, one database with logical schemas — gives you 80% of the maintainability benefit at 10% of the operational cost. The modules can become services later, if and when the team and the load demand it. That deferred decision is much cheaper than the reverse migration from a premature microservices mess back to something coherent.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Our default on a new <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform</Link> is a modular monolith on Next.js plus Postgres, with strict <Link href="/glossary/what-is-domain-driven-design" className="text-sky-400 hover:underline">domain-driven</Link> boundaries inside the codebase that would let us extract services later. We split services out only when there is a concrete reason — independently scaled workloads, regulatory isolation, a separate team owning a separate cadence.
                    </p>
                    <p>
                        Where we do build microservices on day one, it is usually for clients where the team is already large or the workload is genuinely heterogeneous — a <Link href="/services/algorithmic-trading-systems" className="text-sky-400 hover:underline">trading system</Link> with a latency-sensitive matcher in Rust next to a Python research environment, for example. Read the <Link href="/blog/2026-state-of-custom-software-development" className="text-sky-400 hover:underline">2026 state of custom software</Link> essay for the broader take, or <Link href="/contact" className="text-sky-400 hover:underline">book a call</Link> for a one-hour architectural review.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-domain-driven-design" className="text-sky-400 hover:underline">What is domain-driven design?</Link></li>
                        <li><Link href="/glossary/what-is-a-monorepo" className="text-sky-400 hover:underline">What is a monorepo?</Link></li>
                        <li><Link href="/glossary/what-is-event-sourcing" className="text-sky-400 hover:underline">What is event sourcing?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                        <li><Link href="/glossary/what-is-a-tech-stack" className="text-sky-400 hover:underline">What is a tech stack?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Monolith, microservices, or somewhere in between?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        Thirty minutes is enough to map your team, your load, and your domain — and tell you honestly which shape your product wants.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-microservices" />
                        <Link href="/services/saas-platform-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            SaaS platform development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
