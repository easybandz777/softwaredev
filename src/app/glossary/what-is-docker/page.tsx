import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Docker? Containers Explained | QUANT LAB USA",
    description:
        "Docker packages an app and everything it needs into a portable container that runs the same everywhere. Plain-English definition and how it works — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-docker" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Docker",
    description:
        "Docker is a tool that packages an application together with all of its dependencies into a standardized, isolated unit called a container, so the software runs identically on a laptop, a test server, and production.",
    url: "https://quantlabusa.dev/glossary/what-is-docker",
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
            name: "What is Docker?",
            item: "https://quantlabusa.dev/glossary/what-is-docker",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is Docker in simple terms?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Docker is a way to box up an application with everything it needs to run — code, libraries, and settings — into a single portable unit called a container. That box runs the same way on any machine that has Docker installed, which ends the classic 'it works on my machine' problem.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between a Docker image and a container?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "An image is the read-only blueprint — a snapshot of the filesystem and configuration. A container is a running instance of that image. You build one image and can start many identical containers from it.",
            },
        },
        {
            "@type": "Question",
            name: "Is Docker the same as a virtual machine?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. A virtual machine emulates an entire operating system, which is heavy. A Docker container shares the host's operating system kernel and isolates only the application, so it starts in milliseconds and uses far fewer resources.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need Docker for a small app?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Not always, but it usually pays off the moment you have more than one environment or more than one developer. It guarantees everyone runs the same versions of everything and makes deployment a single, repeatable step.",
            },
        },
        {
            "@type": "Question",
            name: "Is Docker the same as Kubernetes?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Docker builds and runs individual containers. Kubernetes orchestrates large numbers of containers across many machines — scheduling, scaling, and healing them. They are complementary: Docker makes the box, Kubernetes runs a fleet of boxes.",
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
                        <li className="text-gray-300">What is Docker?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Glossary · Software
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What is Docker?
                    </h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Docker is a tool that packages an application together with everything it needs to run — code, libraries, and configuration — into a single portable unit called a container, so the software behaves identically on a developer&apos;s laptop, a test server, and production.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What Docker means</h2>
                    <p>
                        <strong>Docker</strong> is the most widely used platform for working with{" "}
                        <em>containers</em>. A container is a lightweight, isolated package that holds
                        an application and the exact set of dependencies it needs — the right language
                        runtime, the right system libraries, the right configuration files — all frozen
                        together. Because the container carries its own environment, it does not depend
                        on whatever happens to be installed on the host machine. That is the whole point:
                        the box you test is the box you ship.
                    </p>
                    <p>
                        Docker introduced the everyday vocabulary engineers now use. You write a{" "}
                        <em>Dockerfile</em> describing how to assemble the environment, build it into an{" "}
                        <em>image</em> (a read-only snapshot), and run that image as one or more{" "}
                        <em>containers</em>. Images are stored in a <em>registry</em> so any machine can
                        pull the exact same build.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it came from</h2>
                    <p>
                        Docker launched in 2013 and made an old idea suddenly accessible. The underlying
                        Linux features — control groups and namespaces that isolate processes — had
                        existed for years, but they were difficult to use directly. Docker wrapped them
                        in a simple command-line tool and a portable image format, and adoption was
                        explosive. Within a few years &quot;containerize it&quot; became the default
                        answer to how software should be packaged and shipped.
                    </p>
                    <p>
                        That success created a need for standards, so the industry formed the Open
                        Container Initiative to define a vendor-neutral image and runtime format. Today
                        the container ecosystem is far larger than any single company, but Docker remains
                        the name most engineers reach for when they mean &quot;build and run a
                        container.&quot;
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How it works</h2>
                    <p>
                        Unlike a virtual machine, which boots a complete guest operating system, a
                        container shares the host&apos;s kernel and isolates only the application&apos;s
                        own processes, filesystem, and network view. That makes containers dramatically
                        lighter: they start in milliseconds, and you can run dozens on a laptop that
                        could only handle a couple of virtual machines.
                    </p>
                    <p>
                        Images are built in layers. Each instruction in a Dockerfile — install a
                        dependency, copy in the source, set an environment variable — produces a cached
                        layer. When you rebuild, Docker reuses the layers that did not change, so builds
                        stay fast. The finished image is immutable, which is what gives containers their
                        reliability: a given image tag always produces the same running environment, no
                        matter where or when it launches.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it matters</h2>
                    <p>
                        Docker matters as soon as your software needs to run somewhere other than the
                        machine it was written on — which is essentially always. It eliminates the
                        &quot;works on my machine&quot; class of bugs, makes onboarding a new developer a
                        one-command affair, and turns deployment into the simple act of running a known
                        image. It is also the building block for everything above it: continuous
                        delivery pipelines build images, and orchestrators like Kubernetes schedule them.
                        If you plan to scale horizontally, run a microservices architecture, or deploy to
                        the cloud at all, containers are the foundation those choices rest on.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We containerize the applications we build so that the environment is part of the
                        deliverable, not an afterthought. A typical QUANT LAB project ships with a
                        Dockerfile that pins the exact Node and dependency versions, plus a Compose file
                        that spins up the app and a local Postgres database with one command. New
                        developers — and our clients&apos; in-house teams after handoff — get a running
                        stack on the first try, every time.
                    </p>
                    <p>
                        Those same images are what our{" "}
                        <Link href="/services/devops-engineering" className="text-sky-400 hover:underline">DevOps engineering</Link> pipelines
                        build, test, and promote to production, and they are what makes our{" "}
                        <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link> portable
                        across hosts. Containerizing a legacy app that was deployed by hand is one of the
                        highest-leverage things we do early in an engagement.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack", "build-vs-buy"]}
                        pinned={["building-multi-tenant-saas-postgres-rls", "nextjs-stripe-integration-guide", "build-vs-buy-software-2026"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-kubernetes" className="text-sky-400 hover:underline">What is Kubernetes?</Link></li>
                        <li><Link href="/glossary/what-is-ci-cd" className="text-sky-400 hover:underline">What is CI/CD?</Link></li>
                        <li><Link href="/glossary/what-is-serverless" className="text-sky-400 hover:underline">What is serverless?</Link></li>
                        <li><Link href="/glossary/what-is-microservices-architecture" className="text-sky-400 hover:underline">What is microservices architecture?</Link></li>
                        <li><Link href="/glossary/what-is-a-load-balancer" className="text-sky-400 hover:underline">What is a load balancer?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Talk to the engineer who would build it</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        If you want a 30-minute conversation about containerizing your app or
                        standing up a portable deploy — not a pitch — book a call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-docker" />
                        <Link href="/services/cloud-infrastructure" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Cloud infrastructure
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
