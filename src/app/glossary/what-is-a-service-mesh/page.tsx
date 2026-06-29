import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is a Service Mesh? Plain-English Guide (2026) | QUANT LAB USA",
    description:
        "A service mesh is an infrastructure layer that manages service-to-service traffic — retries, mTLS, observability — via sidecar proxies. Explained. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-a-service-mesh" },
    openGraph: {
        title: "What is a Service Mesh? Plain-English Guide (2026) | QUANT LAB USA",
        description:
            "A service mesh manages service-to-service traffic — retries, mTLS, observability — through sidecar proxies. What it does and whether you need one.",
        url: "https://quantlabusa.dev/glossary/what-is-a-service-mesh",
        type: "article",
    },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Service Mesh",
    description:
        "A service mesh is a dedicated infrastructure layer that controls communication between microservices, using sidecar proxies to handle retries, load balancing, mutual TLS, and observability without changing application code.",
    url: "https://quantlabusa.dev/glossary/what-is-a-service-mesh",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "Service Mesh", item: "https://quantlabusa.dev/glossary/what-is-a-service-mesh" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is a service mesh in one sentence?", acceptedAnswer: { "@type": "Answer", text: "A service mesh is an infrastructure layer that manages communication between services using sidecar proxies, handling retries, encryption, load balancing, and observability without changes to application code." } },
        { "@type": "Question", name: "What is a sidecar proxy?", acceptedAnswer: { "@type": "Answer", text: "A sidecar is a small proxy deployed alongside each service instance. All of that service's inbound and outbound traffic flows through its sidecar, which is where the mesh applies its policies." } },
        { "@type": "Question", name: "How is a service mesh different from an API gateway?", acceptedAnswer: { "@type": "Answer", text: "A gateway governs north-south traffic entering the system from outside. A service mesh governs east-west traffic — calls services make to each other internally. Many systems run both." } },
        { "@type": "Question", name: "Do I need a service mesh?", acceptedAnswer: { "@type": "Answer", text: "Most teams do not until they have many services and real pain around security, retries, or visibility between them. For a handful of services, a mesh's operational overhead usually outweighs the benefit." } },
        { "@type": "Question", name: "What are common service mesh implementations?", acceptedAnswer: { "@type": "Answer", text: "Istio and Linkerd are the best-known, both built around Envoy-style proxies. Consul Connect and AWS App Mesh are other options. Some teams use lighter sidecar-less approaches as the technology matures." } },
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
                        <li className="text-gray-300">Service Mesh</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · APIs</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is a Service Mesh?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A service mesh is a dedicated infrastructure layer that takes over the messy job of service-to-service communication — encryption, retries, timeouts, load balancing, and observability — by routing every call through a small sidecar proxy next to each service, so that capability lives in the platform instead of being re-coded into every application.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The problem it addresses</h2>
                    <p>
                        Once a system splits into many{" "}
                        <Link href="/glossary/what-is-microservices-architecture" className="text-sky-400 hover:underline">microservices</Link>,
                        the network between them becomes the hard part. Every service needs
                        retries with backoff, timeouts, circuit breaking, mutual
                        authentication, and tracing. Building all of that into each service,
                        in each language, is duplicative and inconsistent. A service mesh
                        moves those concerns out of the app and into a uniform layer that
                        every service shares — without anyone editing business logic.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The sidecar pattern</h2>
                    <p>
                        The mesh works by attaching a lightweight proxy — the sidecar — to
                        each service instance. All traffic in and out of the service passes
                        through its sidecar, and the sidecars together form the data plane.
                        Because the proxy intercepts every call, it can transparently retry
                        a failed request, enforce a timeout, or encrypt the connection,
                        while the application code believes it is making an ordinary local
                        call.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Data plane and control plane</h2>
                    <p>
                        A mesh has two halves. The data plane is the fleet of sidecar
                        proxies actually moving traffic. The control plane is the brain that
                        configures them — distributing policy, certificates, and routing
                        rules. You change a rule once in the control plane (say, "encrypt
                        all traffic between these services" or "send 5% of requests to the
                        new version") and it propagates to every sidecar. This separation is
                        what makes the mesh manageable at scale.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Security: mTLS by default</h2>
                    <p>
                        One of the strongest reasons to adopt a mesh is mutual TLS between
                        services. The mesh can issue and rotate certificates and encrypt
                        every internal call automatically, so traffic inside the cluster is
                        authenticated and confidential — a concrete step toward{" "}
                        <Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">zero trust</Link>{" "}
                        on the network. Doing this by hand across dozens of services is the
                        kind of toil that quietly never gets finished; the mesh makes it the
                        default rather than the exception.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Mesh vs gateway</h2>
                    <p>
                        A mesh handles east-west traffic — services talking to each other
                        inside the cluster. An{" "}
                        <Link href="/glossary/what-is-an-api-gateway" className="text-sky-400 hover:underline">API gateway</Link>{" "}
                        handles north-south traffic — requests arriving from the outside
                        world. They solve different problems and frequently run together:
                        the gateway at the edge, the mesh internally. Confusing the two
                        leads teams to reach for a mesh when a gateway would do, which is a
                        costly mistake.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it is overkill</h2>
                    <p>
                        A service mesh is real operational weight: extra proxies, a control
                        plane to run and upgrade, more moving parts to debug, and a learning
                        curve. For a handful of services it is almost always overkill — you
                        will spend more time operating the mesh than you save. It earns its
                        place when you have many services, a strong need for uniform
                        security and retries, and a platform team that can own it. Adopting
                        one too early is a classic way to drown a small team in
                        infrastructure.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We are conservative about meshes. Most of the products we build do
                        not have enough services to justify one, and we will say so rather
                        than sell complexity. When a client genuinely runs a large{" "}
                        <Link href="/glossary/what-is-kubernetes" className="text-sky-400 hover:underline">Kubernetes</Link>{" "}
                        estate with real east-west security needs, our{" "}
                        <Link href="/services/api-development" className="text-sky-400 hover:underline">API development</Link>{" "}
                        and platform work covers the rollout deliberately — start with mTLS
                        and observability, prove value, then expand routing and policy. The
                        goal is reliability you can reason about, not a maximalist diagram.
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
                        <li><Link href="/glossary/what-is-an-api-gateway" className="text-sky-400 hover:underline">What is an API gateway?</Link></li>
                        <li><Link href="/glossary/what-is-microservices-architecture" className="text-sky-400 hover:underline">Microservices architecture</Link></li>
                        <li><Link href="/glossary/what-is-kubernetes" className="text-sky-400 hover:underline">What is Kubernetes?</Link></li>
                        <li><Link href="/glossary/what-is-grpc" className="text-sky-400 hover:underline">What is gRPC?</Link></li>
                        <li><Link href="/glossary/what-is-a-load-balancer" className="text-sky-400 hover:underline">What is a load balancer?</Link></li>
                        <li><Link href="/glossary/what-is-zero-trust" className="text-sky-400 hover:underline">What is zero trust?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Weighing a service mesh?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We help teams decide whether a mesh is worth the weight, and roll it
                        out deliberately when it is. Book a 30-minute call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-service-mesh" />
                        <Link href="/services/api-development" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            API development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
