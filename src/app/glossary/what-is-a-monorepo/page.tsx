import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is a Monorepo? Definition + 2026 Examples | QUANT LAB USA",
    description:
        "A monorepo is one Git repo holding many projects. Why teams adopt it, Turborepo/Nx tooling, and 2026 tradeoffs vs polyrepos. By QUANT LAB USA.",
    slug: "/glossary/what-is-a-monorepo",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Monorepo",
    description:
        "A monorepo is a single source-control repository that contains the code for many distinct projects, packages, or services, allowing them to be developed, tested, and refactored together with shared tooling.",
    url: "https://quantlabusa.dev/glossary/what-is-a-monorepo",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is a monorepo?", item: "https://quantlabusa.dev/glossary/what-is-a-monorepo" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is a monorepo?", acceptedAnswer: { "@type": "Answer", text: "A monorepo is a single source-control repository that contains many distinct projects, packages, or services — kept together so they share tooling, can be refactored atomically, and can depend on each other directly." } },
        { "@type": "Question", name: "Who uses monorepos?", acceptedAnswer: { "@type": "Answer", text: "Google, Meta, Microsoft, and Uber famously run massive monorepos for most of their internal code. Smaller engineering organizations use them via tools like Nx, Turborepo, Bazel, and Lerna." } },
        { "@type": "Question", name: "What is the opposite of a monorepo?", acceptedAnswer: { "@type": "Answer", text: "A polyrepo or multi-repo setup, where each project, package, or service lives in its own repository with its own version history, build, and release pipeline." } },
        { "@type": "Question", name: "What are the downsides of a monorepo?", acceptedAnswer: { "@type": "Answer", text: "Build times grow as the repo grows unless you adopt incremental build tools. Access control becomes coarser by default. Tooling has to be deliberately chosen — the basic git and CI defaults are tuned for small repos and start hurting around the 100k-file mark." } },
        { "@type": "Question", name: "Are monorepos and microservices opposed?", acceptedAnswer: { "@type": "Answer", text: "Not at all. Many microservice organizations run their services in a single monorepo precisely so they can refactor cross-service contracts atomically. The repository topology and the deployment topology are independent decisions." } },
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
                        <li className="text-gray-300">What is a monorepo?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Software</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is a Monorepo?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A monorepo is a single source-control repository that holds the code for many distinct projects, packages, and services — kept together on purpose so the whole organization can share tooling, refactor across boundaries in one commit, and avoid the version-drift tax that grows quietly inside every multi-repo setup.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the idea proved itself</h2>
                    <p>
                        Google is the canonical proof of concept. Their internal monorepo, "Piper," holds roughly two billion lines of code across nearly every Google product, with tens of thousands of engineers committing daily. Meta runs a similar single repository for most of its code. Microsoft, Uber, Twitter, and Stripe have all built or adopted custom tooling to keep large engineering organizations inside a single repo. The pattern works at extreme scale — but it works only with deliberate tooling, not with stock git.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why teams choose a monorepo</h2>
                    <p>
                        The dominant reason is atomic refactoring. When a shared utility library changes, you can update the library and every caller in one commit, run one test suite, and ship the change as one release. In a multi-repo world the same change is a coordination project — bump version, publish, wait, open a PR in each consumer, hope nobody is on the old version. The cost difference shows up the first time you try to rename a critical method.
                    </p>
                    <p>
                        Secondary reasons matter too: a single source of truth for tooling, a single CI configuration that everyone benefits from, easier code search across the whole company, and the cultural effect of every engineer being able to read any other team's code without a credential dance.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The tooling problem</h2>
                    <p>
                        Stock git was designed for repositories with a few thousand files; it gets slow around a million and painful past that. Stock CI runs the whole test suite on every commit, which is fine in a small repo and catastrophic in a large one. Modern monorepo tooling — Nx and Turborepo in the JavaScript world, Bazel and Pants for polyglot teams, Buck for very large internal monorepos — solves the same set of problems: only build what changed, only test what changed, share artifacts across CI runs, and prune the work that did not need to happen.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When a monorepo is the wrong choice</h2>
                    <p>
                        If the projects in question are completely independent (separate products, separate companies, separate languages, no shared code), the upside of a monorepo collapses. If the team lacks the discipline to enforce module boundaries inside the repo, the result is a tangled mess that gets blamed on the monorepo when the actual problem is "we let everything import everything." And if the deployment infrastructure forces per-repo release pipelines, you may spend more effort fighting the deployment tooling than you save in refactor velocity.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We default to monorepos for most of our <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platforms</Link> and <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom business software</Link> builds — a single repo holding the Next.js app, the backend API, any worker services, shared TypeScript types, design tokens, and the marketing site. Turborepo handles incremental builds; the deployment pipeline is set up so that pushing the marketing site does not rebuild the backend.
                    </p>
                    <p>
                        For very small teams or pure single-app products, a monorepo would be over-engineered — a plain Next.js app is its own monorepo in miniature. The threshold where we recommend reaching for explicit tooling like Turborepo or Nx is usually three or four distinct deployables. Read our <Link href="/blog/internal-tools-platform-engineering-guide" className="text-sky-400 hover:underline">platform engineering guide</Link> for the broader picture, or <Link href="/contact" className="text-sky-400 hover:underline">book a call</Link> for a one-hour repo-strategy review.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <RelatedPosts
                        topics={["stack"]}
                        heading="Long-form deep-dives that use this term"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-microservices-architecture" className="text-sky-400 hover:underline">What is microservices architecture?</Link></li>
                        <li><Link href="/glossary/what-is-a-tech-stack" className="text-sky-400 hover:underline">What is a tech stack?</Link></li>
                        <li><Link href="/glossary/what-is-feature-flagging" className="text-sky-400 hover:underline">What is feature flagging?</Link></li>
                        <li><Link href="/glossary/what-is-blue-green-deployment" className="text-sky-400 hover:underline">What is blue-green deployment?</Link></li>
                        <li><Link href="/glossary/what-is-nextjs" className="text-sky-400 hover:underline">What is Next.js?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Repo strategy that scales with your team?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We help engineering teams set up monorepo or polyrepo layouts with the right tooling — and the discipline to keep them clean.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-monorepo" />
                        <Link href="/services/devops-engineering" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            DevOps engineering
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
