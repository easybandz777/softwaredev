import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Next.js? Definition & 2026 Use Cases | QUANT LAB USA",
    description:
        "Next.js is the React framework most production web apps use in 2026. Plain-English definition, SSR/SSG/ISR, and when to pick it. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-nextjs" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Next.js",
    description:
        "Next.js is an open-source React framework from Vercel that handles routing, rendering modes, data fetching, and deployment for production web applications.",
    url: "https://quantlabusa.dev/glossary/what-is-nextjs",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is Next.js?", item: "https://quantlabusa.dev/glossary/what-is-nextjs" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What is Next.js?", acceptedAnswer: { "@type": "Answer", text: "Next.js is a React framework built by Vercel. It handles routing, server-side rendering, static generation, image optimization, and deployment — the parts of a production React app that React itself does not solve." } },
        { "@type": "Question", name: "Is Next.js the same as React?", acceptedAnswer: { "@type": "Answer", text: "No. React is a UI library for building components. Next.js is the framework around React that gives you routing, SSR, file-based pages, and the production conventions React leaves to you." } },
        { "@type": "Question", name: "Is Next.js good for SEO?", acceptedAnswer: { "@type": "Answer", text: "Yes. Next.js renders HTML on the server by default, which means search engines see real content on the first response instead of an empty React shell." } },
        { "@type": "Question", name: "Is Next.js production-ready?", acceptedAnswer: { "@type": "Answer", text: "It runs many of the largest sites on the web. The App Router introduced in Next 13 is the current default and is appropriate for new builds." } },
        { "@type": "Question", name: "Should I use Next.js or just React?", acceptedAnswer: { "@type": "Answer", text: "Use Next.js unless you have a specific reason not to. For brochure sites, dashboards, e-commerce, and SaaS, Next.js answers more questions out of the box than any other React framework." } },
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
                        <li className="text-gray-300">What is Next.js?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Software</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Next.js?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Next.js is an open-source React framework from Vercel that handles routing, rendering modes, data fetching, image optimization, and deployment, so engineers can ship production web apps without re-inventing the same plumbing on every project.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">React vs Next.js</h2>
                    <p>
                        React, on its own, is a UI library. It gives you components and a way to
                        compose them, but it does not tell you how to build a real website —
                        you still have to choose a router, decide how to render pages, set up
                        data fetching, handle authentication, and ship the result somewhere.
                        Most teams that try to assemble those pieces themselves spend the first
                        three months of every project rebuilding scaffolding they already built
                        before.
                    </p>
                    <p>
                        Next.js fills that gap. It picks reasonable defaults for routing
                        (file-system based), rendering (server by default), data fetching,
                        styling, and deployment, and gives you escape hatches for the cases
                        where the default is wrong. By 2026, it is the default React framework
                        for new commercial projects.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Rendering modes — the part everyone confuses</h2>
                    <p>
                        Next.js supports four rendering modes and the productivity comes from
                        knowing which one to use where. Static Site Generation (SSG) renders
                        pages at build time — perfect for marketing pages and docs. Server-Side
                        Rendering (SSR) renders on every request — used for dashboards and
                        personalized content. Incremental Static Regeneration (ISR) renders
                        statically and refreshes in the background — used for content that
                        changes occasionally. Client-Side Rendering (CSR) renders in the
                        browser — used for the parts of the app that are truly interactive.
                    </p>
                    <p>
                        Most apps blend all four. Read our entry on{" "}
                        <Link href="/glossary/what-is-server-side-rendering" className="text-sky-400 hover:underline">server-side rendering</Link>{" "}
                        for the gotchas that come with the SSR mode specifically.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What you get for free</h2>
                    <p>
                        Adopting Next.js means inheriting a long list of solved
                        problems: file-system routing where pages match the directory
                        structure, automatic code splitting per route, an image
                        component that handles responsive sizing and lazy loading,
                        built-in middleware for auth and redirects, an API routes
                        layer for tiny backends, deeply integrated TypeScript
                        support, and a development server that hot-reloads in
                        milliseconds. The cumulative value of those defaults is
                        enormous — most of what teams used to spend weeks wiring
                        together is already there.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The App Router and Server Components</h2>
                    <p>
                        Next 13 introduced the App Router and React Server Components, which let
                        you write components that run on the server, fetch data directly, and
                        ship zero JavaScript to the browser. This is a meaningful shift — most
                        of a Next.js app today should be Server Components by default, with
                        Client Components added only for the interactive bits. Next 16, our
                        current stack, refines that model further.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Next.js is our default for almost everything customer-facing. The site
                        you are reading is Next.js 16 on Vercel; our{" "}
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform builds</Link>{" "}
                        ship on the same stack;{" "}
                        <Link href="/services/web-applications" className="text-sky-400 hover:underline">web application development</Link>{" "}
                        engagements default to Next.js unless there is a specific reason to use
                        something else.
                    </p>
                    <p>
                        The reason is not loyalty — it is that we have measured the alternative
                        for years. A Next.js app gets better Lighthouse scores, better
                        time-to-interactive, better SEO, and better developer velocity than
                        almost any other React stack for the kinds of projects we run.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where Next.js is the wrong choice</h2>
                    <p>
                        Two cases where we steer clients away. First, when the whole
                        app is a complex interactive single-page experience with no
                        SEO needs — an internal dashboard, a complex editor, a
                        design tool — a pure React or Vite SPA is often simpler.
                        Second, when the team is already deeply invested in a
                        non-React stack: Rails plus Turbo, Phoenix LiveView, or
                        Django plus HTMX can each ship feature-complete apps with
                        less ceremony than a Next.js rebuild. Pick the tool the
                        team will be productive in, not the most popular one.
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
                        <li><Link href="/glossary/what-is-server-side-rendering" className="text-sky-400 hover:underline">What is SSR?</Link></li>
                        <li><Link href="/glossary/what-is-jamstack" className="text-sky-400 hover:underline">What is JAMstack?</Link></li>
                        <li><Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">What is SaaS?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                        <li><Link href="/glossary/what-is-an-mvp" className="text-sky-400 hover:underline">What is an MVP?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Building on Next.js?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        Whether starting fresh or migrating off an aging stack, we build
                        production Next.js apps end-to-end. Book a 30-minute consultation.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-nextjs" />
                        <Link href="/services/web-applications" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Web application development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
