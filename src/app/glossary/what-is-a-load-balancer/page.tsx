import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is a Load Balancer? Definition + How It Works | QUANT LAB USA",
    description:
        "A load balancer spreads incoming traffic across multiple servers so no single one is overwhelmed. Plain-English definition and how it works — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-a-load-balancer" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Load Balancer",
    description:
        "A load balancer is a component that distributes incoming network traffic across multiple backend servers, improving capacity and reliability by routing each request to a healthy server.",
    url: "https://quantlabusa.dev/glossary/what-is-a-load-balancer",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        {
            "@type": "ListItem",
            position: 3,
            name: "What is a Load Balancer?",
            item: "https://quantlabusa.dev/glossary/what-is-a-load-balancer",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does a load balancer do?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A load balancer sits in front of a group of servers and spreads incoming requests across them. It checks which servers are healthy, routes traffic only to those, and keeps the application available even if one server fails or gets overloaded.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between Layer 4 and Layer 7 load balancing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A Layer 4 load balancer routes based on network information like IP address and port, without reading the request contents. A Layer 7 load balancer understands HTTP and can route based on the URL path, headers, or cookies, enabling smarter rules at a small performance cost.",
            },
        },
        {
            "@type": "Question",
            name: "What are common load balancing algorithms?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Round robin sends requests to each server in turn. Least connections favors the server with the fewest active requests. IP hash sends a given client consistently to the same server. Each fits a different traffic and session pattern.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need a load balancer if I only have one server?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Not strictly, but adding one early lets you scale to multiple servers later without re-architecting, and it provides health checks and a stable entry point. Many cloud and serverless platforms include load balancing automatically.",
            },
        },
        {
            "@type": "Question",
            name: "What is a health check?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A health check is a periodic probe the load balancer sends to each backend server. If a server stops responding correctly, the balancer removes it from rotation until it recovers, so users are never routed to a broken instance.",
            },
        },
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
                        <li className="text-gray-300">What is a Load Balancer?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Glossary · Software
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What is a Load Balancer?
                    </h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A load balancer is a component that sits in front of a group of servers and spreads incoming traffic across them — routing each request to a healthy server so no single machine is overwhelmed and the application stays available even when one fails.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What a load balancer means</h2>
                    <p>
                        A <strong>load balancer</strong> is the traffic cop of a web system. Clients send
                        their requests to a single stable address, and behind that address the load
                        balancer decides which of several identical backend servers should handle each
                        one. By spreading the work, it lets you serve far more traffic than any single
                        machine could, and by routing around servers that are down, it keeps the service
                        running through hardware failures and deployments.
                    </p>
                    <p>
                        It also provides a clean point of control. Because every request passes through
                        it, the load balancer is a natural place to terminate encryption, enforce health
                        checks, and present one consistent entry point even as the pool of servers behind
                        it grows, shrinks, or gets replaced one at a time.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it came from</h2>
                    <p>
                        Load balancing grew up alongside the commercial web in the late 1990s. As popular
                        sites outgrew a single server, hardware appliances appeared to fan requests out
                        across a bank of machines. Over time the function moved into software and then
                        into the cloud, where load balancers became managed services you configure rather
                        than boxes you rack.
                    </p>
                    <p>
                        The underlying motivation never changed: a single server is both a capacity ceiling
                        and a single point of failure. Putting a balancer in front turns one fragile server
                        into a resilient, horizontally scalable pool — the architectural pattern that
                        underpins virtually every high-traffic application today.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How it works</h2>
                    <p>
                        A load balancer continuously runs <em>health checks</em> against its backend
                        servers — small periodic probes — and only sends traffic to the ones responding
                        correctly. When a request arrives, it picks a server using an <em>algorithm</em>:
                        round robin rotates through them in order, least connections favors the server
                        with the fewest in-flight requests, and IP hashing pins each client to a
                        consistent server when sessions need to stick.
                    </p>
                    <p>
                        Load balancers operate at one of two levels. A <em>Layer 4</em> balancer routes on
                        raw network details — IP and port — without inspecting the contents, which makes it
                        fast and protocol-agnostic. A <em>Layer 7</em> balancer understands HTTP and can
                        make decisions based on the URL path, headers, or cookies, allowing it to send
                        <code> /api</code> traffic to one set of servers and the marketing site to another.
                        Many setups also terminate TLS at the balancer, decrypting once at the edge so the
                        backend servers do not each have to.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it matters</h2>
                    <p>
                        A load balancer matters the moment uptime or scale is on the line. The instant you
                        run more than one server — for capacity or for redundancy — you need something to
                        distribute traffic between them, and that something is a load balancer. It is what
                        lets you deploy a new version with zero downtime by draining traffic from old
                        servers as new ones come up, and it is what keeps the lights on when a machine dies
                        at 3 a.m. For small single-server apps it is optional, but designing for it early
                        means you can scale horizontally later without rebuilding the front door.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Load balancing is built into how we architect for reliability, even when it is not
                        a box the client ever sees. The serverless and managed platforms we deploy Next.js
                        apps onto include load balancing transparently — traffic is spread across many
                        execution environments automatically — so most clients get the resilience without
                        operating a balancer themselves. When a project runs on its own{" "}
                        <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link>, we
                        place a managed load balancer in front of the application tier and configure the
                        health checks, routing rules, and TLS termination explicitly.
                    </p>
                    <p>
                        The payoff shows up in our{" "}
                        <Link href="/services/devops-engineering" className="text-sky-400 hover:underline">DevOps engineering</Link> work:
                        because traffic flows through a balancer with health checks, we can roll out new
                        versions gradually and pull a bad release out of rotation in seconds. That is the
                        difference between a deploy that risks downtime and one nobody notices.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack", "saas"]}
                        pinned={["building-multi-tenant-saas-postgres-rls", "build-vs-buy-software-2026", "nextjs-stripe-integration-guide"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-a-cdn" className="text-sky-400 hover:underline">What is a CDN?</Link></li>
                        <li><Link href="/glossary/what-is-kubernetes" className="text-sky-400 hover:underline">What is Kubernetes?</Link></li>
                        <li><Link href="/glossary/what-is-serverless" className="text-sky-400 hover:underline">What is serverless?</Link></li>
                        <li><Link href="/glossary/what-is-microservices-architecture" className="text-sky-400 hover:underline">What is microservices architecture?</Link></li>
                        <li><Link href="/glossary/what-is-docker" className="text-sky-400 hover:underline">What is Docker?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Talk to the engineer who would build it</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        If you want a 30-minute conversation about scaling your app reliably across
                        multiple servers — not a pitch — book a call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-load-balancer" />
                        <Link href="/services/cloud-infrastructure" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Cloud infrastructure
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
