import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Serverless? Definition + How It Works | QUANT LAB USA",
    description:
        "Serverless lets you run code without managing servers — the cloud provisions and scales it on demand. Plain-English definition and how it works — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-serverless" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Serverless Computing",
    description:
        "Serverless is a cloud execution model where the provider runs your code on demand, automatically provisioning and scaling the underlying servers and billing only for the compute actually used.",
    url: "https://quantlabusa.dev/glossary/what-is-serverless",
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
            name: "What is Serverless?",
            item: "https://quantlabusa.dev/glossary/what-is-serverless",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Does serverless mean there are no servers?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. There are still servers — you just do not manage them. The cloud provider handles provisioning, patching, and scaling, so from your point of view you upload code and it runs on demand without your ever touching a machine.",
            },
        },
        {
            "@type": "Question",
            name: "What is a cold start?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A cold start is the brief delay when a serverless function has to spin up a fresh execution environment because none was already warm. Once running, subsequent calls reuse that environment and respond quickly until it is idled out.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between serverless and containers?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "With containers you still define and run long-lived instances and decide how many. Serverless hides that entirely: the platform scales execution from zero to many automatically and bills per request. Containers give more control; serverless gives less operational overhead.",
            },
        },
        {
            "@type": "Question",
            name: "Is serverless cheaper?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Often, for spiky or low-to-moderate traffic, because you pay only for what runs and nothing while idle. At very high, steady volume, dedicated servers can become cheaper per request, so the economics depend on your traffic shape.",
            },
        },
        {
            "@type": "Question",
            name: "What are serverless functions good for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "They excel at event-driven and bursty workloads: API endpoints, webhook handlers, scheduled jobs, image processing, and the backend of modern web frameworks. They are less ideal for long-running or extremely latency-sensitive tasks.",
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
                        <li className="text-gray-300">What is Serverless?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Glossary · Software
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What is Serverless?
                    </h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Serverless is a cloud model where you upload code and the provider runs it on demand — provisioning, scaling, and patching the underlying servers for you, and billing only for the compute your code actually uses.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What serverless means</h2>
                    <p>
                        <strong>Serverless</strong> is a bit of a misnomer — there are absolutely still
                        servers. What is gone is your responsibility for them. You do not pick instance
                        sizes, patch operating systems, or decide how many machines to keep running. You
                        hand the provider a unit of code, and it figures out where and when to run it,
                        spinning capacity up the instant a request arrives and back down to nothing when
                        traffic stops.
                    </p>
                    <p>
                        The most common form is <em>Functions as a Service</em>, where you deploy
                        individual functions that the platform triggers on an event — an HTTP request, a
                        message on a queue, a file upload, a scheduled timer. The broader serverless
                        umbrella also covers managed databases, storage, and message systems that scale
                        and bill the same way: you consume the capability and never see the server.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it came from</h2>
                    <p>
                        The modern serverless era began in 2014 when Amazon launched AWS Lambda, which
                        let developers run code in response to events without ever provisioning a server
                        and billed in fractions of a second. The other major clouds followed with their
                        own function platforms, and the model expanded outward to databases, queues, and
                        whole application frameworks.
                    </p>
                    <p>
                        The appeal was a continuation of a long trend: each generation of cloud computing
                        removed another layer of undifferentiated heavy lifting. Virtual machines removed
                        the data center, containers removed the operating system fuss, and serverless
                        removed capacity planning. The promise was that engineers could spend their time
                        on application logic and almost none on the infrastructure beneath it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How it works</h2>
                    <p>
                        When an event hits a serverless function, the platform finds or creates an
                        execution environment, loads your code, and runs it. If an environment is already
                        warm from a recent call, the response is near-instant. If not, there is a brief{" "}
                        <em>cold start</em> while the runtime initializes. Many requests can be handled in
                        parallel because the platform simply spins up more environments — scaling is
                        automatic and effectively unbounded within your configured limits.
                    </p>
                    <p>
                        Functions are designed to be <em>stateless</em>: any data that must persist lives
                        in an external database, cache, or object store, because the environment running a
                        function can vanish the moment it finishes. Billing follows execution — you pay per
                        invocation and per millisecond of compute, and nothing at all while the function
                        sits idle. That pay-for-what-you-use shape is the model&apos;s defining economic
                        feature.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it matters</h2>
                    <p>
                        Serverless matters most when traffic is spiky or unpredictable, when you want to
                        ship without standing up infrastructure, and when keeping a fleet of always-on
                        servers would mean paying for idle capacity. It is a natural fit for API
                        endpoints, webhook receivers, scheduled jobs, and the backends of modern web
                        frameworks. The trade-offs to weigh are cold-start latency for rarely-hit
                        endpoints, execution-time ceilings that make it poor for very long jobs, and the
                        fact that at sustained high volume, dedicated capacity can become cheaper per
                        request.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        A large share of what we ship runs serverless by default. Because we build on
                        Next.js, the application&apos;s API routes and server rendering deploy as
                        serverless functions on the hosting platform, which means a new client&apos;s app
                        scales from one user to a launch-day spike without us pre-provisioning anything.
                        For event-driven work — processing a{" "}
                        <Link href="/glossary/what-is-webhooks" className="text-sky-400 hover:underline">webhook</Link>, running a
                        nightly report, resizing an upload — a single function is usually the simplest,
                        cheapest tool for the job.
                    </p>
                    <p>
                        We do not treat serverless as the answer to everything. Our{" "}
                        <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link> work
                        includes choosing, per workload, between serverless functions, long-running
                        containers, and dedicated machines based on your traffic shape and latency needs.
                        For most{" "}
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platforms</Link> we
                        build, a serverless-first architecture keeps the operational burden low while the
                        product finds its footing.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack", "saas"]}
                        pinned={["nextjs-stripe-integration-guide", "building-multi-tenant-saas-postgres-rls", "build-vs-buy-software-2026"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-docker" className="text-sky-400 hover:underline">What is Docker?</Link></li>
                        <li><Link href="/glossary/what-is-kubernetes" className="text-sky-400 hover:underline">What is Kubernetes?</Link></li>
                        <li><Link href="/glossary/what-is-nextjs" className="text-sky-400 hover:underline">What is Next.js?</Link></li>
                        <li><Link href="/glossary/what-is-server-side-rendering" className="text-sky-400 hover:underline">What is server-side rendering?</Link></li>
                        <li><Link href="/glossary/what-is-idempotency" className="text-sky-400 hover:underline">What is idempotency?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Talk to the engineer who would build it</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        If you want a 30-minute conversation about whether serverless fits your
                        workload and budget — not a pitch — book a call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-serverless" />
                        <Link href="/services/cloud-infrastructure" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Cloud infrastructure
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
