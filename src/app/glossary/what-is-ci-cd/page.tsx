import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is CI/CD? Definition + How It Works | QUANT LAB USA",
    description:
        "CI/CD is the automated pipeline that tests and ships your code on every commit. Plain-English definition, history, and how it works — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-ci-cd" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "CI/CD (Continuous Integration / Continuous Delivery)",
    description:
        "CI/CD is the practice of automatically building, testing, and deploying software every time code changes, so a small edit can reach production safely in minutes instead of weeks.",
    url: "https://quantlabusa.dev/glossary/what-is-ci-cd",
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
            name: "What is CI/CD?",
            item: "https://quantlabusa.dev/glossary/what-is-ci-cd",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does CI/CD stand for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "CI stands for Continuous Integration — merging and testing code changes frequently. CD stands for Continuous Delivery or Continuous Deployment — automatically packaging and releasing those changes. Together they describe the automated path from a developer's commit to running software.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between continuous delivery and continuous deployment?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Continuous delivery keeps every change ready to release at the push of a button, but a human approves the final step. Continuous deployment removes that human gate — every change that passes the tests goes live automatically.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need CI/CD for a small project?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Almost always yes. Even a one-person project benefits from automated tests on every push and a one-command deploy. The cost is a single config file, and it pays for itself the first time it catches a broken build before your users see it.",
            },
        },
        {
            "@type": "Question",
            name: "What tools are used for CI/CD?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Common pipeline runners include GitHub Actions, GitLab CI, and CircleCI. Hosting platforms such as Vercel and AWS provide their own deploy automation. The choice usually follows where your code already lives.",
            },
        },
        {
            "@type": "Question",
            name: "How long does it take to set up a CI/CD pipeline?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A basic test-and-deploy pipeline for a typical web app can be running in a day. A hardened pipeline with preview environments, database migrations, security scans, and rollback safety usually takes one to two weeks to get right.",
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
                        <li className="text-gray-300">What is CI/CD?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Glossary · Software
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What is CI/CD?
                    </h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        CI/CD is the automated pipeline that builds, tests, and ships your software every time a developer changes the code — so a small edit can reach production safely in minutes instead of waiting for a risky, hand-assembled release weeks later.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What CI/CD means</h2>
                    <p>
                        CI/CD stands for <strong>Continuous Integration</strong> and{" "}
                        <strong>Continuous Delivery</strong> (or Continuous Deployment). Continuous
                        Integration is the discipline of merging every developer&apos;s work into the
                        shared codebase often — usually several times a day — and running an automated
                        test suite on each merge so conflicts and regressions surface immediately.
                        Continuous Delivery extends that idea past the test stage: every change that
                        passes is automatically packaged into a release that is ready to ship at any
                        moment. Continuous Deployment goes one step further and pushes those passing
                        changes all the way to live users with no manual approval.
                    </p>
                    <p>
                        The whole thing is usually expressed as a <em>pipeline</em> — an ordered list
                        of stages that a code change flows through. A commit triggers the pipeline,
                        the pipeline runs the checks, and either the change graduates to the next
                        stage or the pipeline stops and tells the team exactly what broke.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the term came from</h2>
                    <p>
                        Continuous Integration was popularized in the late 1990s by the Extreme
                        Programming movement, with Martin Fowler&apos;s 2000 essay turning it into a
                        named practice. The motivation was &quot;integration hell&quot; — the painful
                        end-of-project phase where teams that had worked in isolation for months tried
                        to merge everything at once and discovered nothing fit together. The fix was
                        counterintuitive: integrate constantly so the merges stay small.
                    </p>
                    <p>
                        Continuous Delivery arrived as a named idea around 2010 with the Humble and
                        Farley book of the same name, as cloud hosting and scripting made it realistic
                        to automate not just the tests but the entire release. The rise of containers
                        and platforms that deploy on every push turned what was once an elite practice
                        into the default expectation for modern teams.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How a pipeline actually works</h2>
                    <p>
                        A developer pushes a branch and opens a pull request. That event triggers the
                        CI stage: the pipeline checks out the code, installs dependencies, and runs the
                        linters, type checks, unit tests, and often an integration test suite against a
                        throwaway database. If anything fails, the pull request is blocked and the
                        author gets a precise error before a reviewer ever looks at it.
                    </p>
                    <p>
                        Once the change is reviewed and merged, the CD stage takes over. It builds the
                        production artifact — frequently a container image — runs any database
                        migrations, deploys to a staging or preview environment, and runs smoke tests
                        against the live system. With continuous delivery, a human clicks
                        &quot;promote&quot; to send it to production; with continuous deployment, that
                        promotion is automatic. A good pipeline also keeps the previous version warm so
                        a bad release can be rolled back in seconds.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it matters</h2>
                    <p>
                        CI/CD matters the moment more than one person touches the code, or the moment a
                        broken release costs real money. It shortens the feedback loop from days to
                        minutes, which is the single biggest lever on engineering speed. It also makes
                        releases boring on purpose — when shipping is a non-event that happens ten times
                        a day, each change is small enough to reason about and cheap enough to reverse.
                        The teams that ship fastest are almost never the ones who skip the pipeline;
                        they are the ones whose pipeline lets them ship without fear.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Every project we ship rides on a CI/CD pipeline from day one — it is part of how
                        we keep delivery predictable. A typical setup runs TypeScript type checks, ESLint,
                        and our test suite on every pull request, builds a Docker image, runs Postgres
                        migrations against a disposable database, and deploys a unique preview URL so the
                        client can click through a feature before it merges. Our{" "}
                        <Link href="/services/devops-engineering" className="text-sky-400 hover:underline">DevOps engineering</Link> work
                        often starts with bolting a real pipeline onto a codebase that was being deployed
                        by hand, which usually removes the largest source of production incidents in the
                        first week.
                    </p>
                    <p>
                        Because we build on Next.js and Postgres, the pipeline also handles the riskiest
                        moving parts for us automatically — schema changes, environment configuration, and
                        rollback. If you are standing up new{" "}
                        <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link> and
                        want releases to stop being a Friday-night ordeal, that is the first thing we wire up.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack", "build-vs-buy"]}
                        pinned={["nextjs-stripe-integration-guide", "building-multi-tenant-saas-postgres-rls", "custom-crm-development-guide"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-docker" className="text-sky-400 hover:underline">What is Docker?</Link></li>
                        <li><Link href="/glossary/what-is-kubernetes" className="text-sky-400 hover:underline">What is Kubernetes?</Link></li>
                        <li><Link href="/glossary/what-is-serverless" className="text-sky-400 hover:underline">What is serverless?</Link></li>
                        <li><Link href="/glossary/what-is-microservices-architecture" className="text-sky-400 hover:underline">What is microservices architecture?</Link></li>
                        <li><Link href="/glossary/what-is-a-monorepo" className="text-sky-400 hover:underline">What is a monorepo?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Talk to the engineer who would build it</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        If your releases are slow, manual, or scary and you want a 30-minute
                        conversation about automating them — not a pitch — book a call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-ci-cd" />
                        <Link href="/services/devops-engineering" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            DevOps engineering
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
