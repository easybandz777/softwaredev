import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Kubernetes? Orchestration Explained | QUANT LAB USA",
    description:
        "Kubernetes is the system that runs and scales containers across a fleet of machines automatically. Plain-English definition and how it works — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-kubernetes" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Kubernetes",
    description:
        "Kubernetes is an open-source orchestration system that automatically deploys, scales, and heals containerized applications across a cluster of machines, keeping the running state matched to a declared desired state.",
    url: "https://quantlabusa.dev/glossary/what-is-kubernetes",
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
            name: "What is Kubernetes?",
            item: "https://quantlabusa.dev/glossary/what-is-kubernetes",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is Kubernetes in simple terms?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Kubernetes is software that runs your containers for you across many machines. You tell it the state you want — say, five copies of this app, always healthy — and it continuously schedules, restarts, and scales containers to make reality match that request.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between Docker and Kubernetes?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Docker builds and runs a single container. Kubernetes orchestrates many containers across a cluster of machines — scheduling them, scaling them, networking them together, and restarting the ones that fail. Docker makes the box; Kubernetes runs the fleet.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need Kubernetes for my startup?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Usually not at first. Kubernetes is powerful but operationally heavy. Most early products are better served by a managed platform or serverless hosting. Kubernetes earns its complexity when you run many services at meaningful scale or need fine-grained control over infrastructure.",
            },
        },
        {
            "@type": "Question",
            name: "Why is Kubernetes abbreviated K8s?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "K8s is a numeronym: a K, then the eight letters between K and s in 'Kubernetes', then an s. It is simply a shorthand the community adopted because the full word is long to type.",
            },
        },
        {
            "@type": "Question",
            name: "What is a Kubernetes pod?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A pod is the smallest unit Kubernetes schedules. It wraps one or more tightly coupled containers that share storage and a network address. Kubernetes creates, replaces, and scales pods rather than individual containers.",
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
                        <li className="text-gray-300">What is Kubernetes?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Glossary · Software
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What is Kubernetes?
                    </h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Kubernetes is an open-source system that runs your containers for you across a fleet of machines — automatically scheduling, scaling, networking, and restarting them so the live state always matches the configuration you declared.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What Kubernetes means</h2>
                    <p>
                        <strong>Kubernetes</strong> — often abbreviated <em>K8s</em> — is a{" "}
                        <em>container orchestrator</em>. Once you have packaged your applications as
                        containers, you still need something to decide which machine each container runs
                        on, to restart the ones that crash, to add more copies when traffic spikes, and
                        to route requests to the healthy ones. Kubernetes is that something. It takes a
                        cluster of servers and presents them as a single pool of compute that it manages
                        on your behalf.
                    </p>
                    <p>
                        Its defining idea is <em>declarative</em> management. Instead of issuing
                        step-by-step commands, you describe the desired end state — &quot;run five
                        replicas of this service, expose it on this address, keep them all healthy&quot; —
                        and Kubernetes continuously works to make the actual state match. If a machine
                        dies, it reschedules the lost work elsewhere without anyone being paged.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it came from</h2>
                    <p>
                        Kubernetes was created at Google and released as open source in 2014. It drew on
                        roughly a decade of internal experience running containers at enormous scale with
                        a system called Borg. Google donated the project to the newly formed Cloud Native
                        Computing Foundation, which kept it vendor-neutral and helped it become the de
                        facto industry standard for orchestration.
                    </p>
                    <p>
                        The timing mattered. Docker had just made containers easy to build, and teams
                        were suddenly drowning in the operational problem of running hundreds of them.
                        Kubernetes arrived as the answer, and every major cloud provider now offers a
                        managed version, which is how most teams consume it today rather than operating
                        the control plane themselves.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How it works</h2>
                    <p>
                        A Kubernetes cluster has a <em>control plane</em> — the brain that holds the
                        desired state and makes scheduling decisions — and a set of <em>worker
                        nodes</em> that actually run the workloads. The smallest thing it schedules is a{" "}
                        <em>pod</em>, a wrapper around one or more containers that share a network address
                        and storage. Higher-level objects build on pods: a <em>Deployment</em> keeps a
                        set number of identical pods running and rolls out new versions gradually, while a{" "}
                        <em>Service</em> gives them a stable address and load-balances traffic across them.
                    </p>
                    <p>
                        Kubernetes runs a constant control loop. Controllers compare what is actually
                        running against what you declared and take corrective action — starting a
                        replacement pod, draining a failing node, scaling out under load. That
                        self-healing reconciliation is the engine that makes the whole system resilient
                        without manual intervention.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it matters</h2>
                    <p>
                        Kubernetes matters when you are running many services, at meaningful scale, and
                        need them to stay up without a human babysitting each one. It shines for
                        microservices architectures, for teams that want portability across clouds, and
                        for workloads with variable traffic that benefit from automatic scaling. The
                        honest counterpoint is that it carries real operational weight: most early-stage
                        products do not need it and are better off on a managed platform or serverless
                        hosting until their scale and team genuinely demand the control Kubernetes offers.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We treat Kubernetes as a tool to reach for deliberately, not a default. For most
                        of the products we build, a managed platform or serverless hosting ships faster
                        and costs less to operate, so that is where we start. When a client genuinely
                        outgrows that — many services, strict isolation requirements, or a need to run
                        the same workloads across more than one cloud — our{" "}
                        <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link> team
                        designs and runs the cluster, almost always on a managed control plane so the
                        client is not maintaining Kubernetes internals by hand.
                    </p>
                    <p>
                        Because everything we build is already containerized, moving onto Kubernetes is an
                        infrastructure decision rather than a rewrite. Our{" "}
                        <Link href="/services/devops-engineering" className="text-sky-400 hover:underline">DevOps engineering</Link> work
                        covers the deployment manifests, autoscaling rules, and rollout strategy so the
                        cluster stays boring and your team can keep shipping features instead of fighting
                        infrastructure.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack", "build-vs-buy"]}
                        pinned={["building-multi-tenant-saas-postgres-rls", "build-vs-buy-software-2026", "nextjs-stripe-integration-guide"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-docker" className="text-sky-400 hover:underline">What is Docker?</Link></li>
                        <li><Link href="/glossary/what-is-serverless" className="text-sky-400 hover:underline">What is serverless?</Link></li>
                        <li><Link href="/glossary/what-is-a-load-balancer" className="text-sky-400 hover:underline">What is a load balancer?</Link></li>
                        <li><Link href="/glossary/what-is-microservices-architecture" className="text-sky-400 hover:underline">What is microservices architecture?</Link></li>
                        <li><Link href="/glossary/what-is-ci-cd" className="text-sky-400 hover:underline">What is CI/CD?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Talk to the engineer who would build it</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        If you are weighing whether Kubernetes is right for your stack and want a
                        30-minute conversation — not a pitch — book a call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-kubernetes" />
                        <Link href="/services/cloud-infrastructure" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Cloud infrastructure
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
