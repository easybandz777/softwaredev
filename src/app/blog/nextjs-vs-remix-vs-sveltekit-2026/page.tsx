import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { ArrowRight, Check, Code2 } from "lucide-react";

const SLUG = "nextjs-vs-remix-vs-sveltekit-2026";
const TITLE = "Next.js vs Remix vs SvelteKit: 2026 Framework Comparison";
const DESCRIPTION =
    "Honest 2026 framework comparison: Next.js, Remix, and SvelteKit on rendering, data, ecosystem, hosting cost, and DX. The one we ship and why.";
const PUBLISHED_ISO = "2026-05-12";

export const metadata: Metadata = articleMetadata({
    title: TITLE,
    description: DESCRIPTION,
    slug: `/blog/${SLUG}`,
    image: "/og-web-apps.png",
    imageAlt: "Next.js vs Remix vs SvelteKit framework comparison 2026",
    publishedTime: PUBLISHED_ISO,
    modifiedTime: PUBLISHED_ISO,
    authors: ["Bill Beltz"],
    keywords: [
        "Next.js vs Remix",
        "Next.js vs SvelteKit",
        "Remix vs SvelteKit",
        "best React framework 2026",
        "full stack framework comparison",
    ],
});

const faqItems = [
    {
        q: "Which is faster: Next.js, Remix, or SvelteKit?",
        a: "On equivalent hardware and equivalent caching, SvelteKit ships the smallest client JavaScript bundle (often 30 to 50% less than Next.js) and wins synthetic Lighthouse scores. Remix and Next.js are within 5% of each other on full-page TTFB when both use server rendering. For most real-world apps, the hosting strategy moves performance more than the framework choice does.",
    },
    {
        q: "Is Remix dying after the React Router merge?",
        a: "Remix 2 was effectively merged into React Router v7 in late 2024. The Remix brand has shifted toward what is now React Router framework mode. The patterns, the loaders, the actions, the nested routing — all preserved. If you started a Remix project in 2025, you have a clean upgrade path. New projects in 2026 are usually scaffolded as React Router v7 framework, which is functionally Remix continuation.",
    },
    {
        q: "Is Next.js the safe default in 2026?",
        a: "For most commercial React projects, yes. Next.js 16 with App Router has the deepest ecosystem, the most enterprise hires available, Vercel-native deploys, and the broadest third-party integrations. The downsides — bundle size, complexity, and Vercel lock-in pressure — are real but solvable. Default to Next.js unless you have a specific reason not to.",
    },
    {
        q: "When should I pick SvelteKit instead of Next.js?",
        a: "Pick SvelteKit when you need a small, fast, content-heavy site, when your team enjoys Svelte's authoring model, or when you want explicit progressive enhancement out of the box. It wins on bundle size, DX simplicity, and form handling. It loses on ecosystem breadth and hiring pool.",
    },
    {
        q: "Can I use server components with Remix or SvelteKit?",
        a: "Not in the React Server Components sense. RSC is a Next.js exclusive in 2026. Remix and SvelteKit use server-side rendering plus server-only loaders, which solve most of the same problems without the build-tooling commitment RSC requires. If you specifically need RSC streaming, you need Next.js.",
    },
    {
        q: "Which framework is best for SEO in 2026?",
        a: "All three render real HTML by default and pass Lighthouse. SEO outcomes are driven by content, internal linking, schema, and Core Web Vitals — not framework choice. We have shipped sites on all three that rank top-3 for their target queries. Pick the framework your team can move fastest on.",
    },
    {
        q: "What is the hosting cost difference?",
        a: "Next.js on Vercel scales smoothly but bills aggressively for ISR, edge functions, and image optimization. A typical mid-traffic SaaS lands at $200 to $800 a month on Vercel. SvelteKit on Cloudflare Pages or Netlify often runs $20 to $100 a month for similar traffic because the build output is smaller and the platform pricing is more generous. Remix self-hosted on Fly.io or Render typically lands at $50 to $200.",
    },
    {
        q: "Is Next.js locked into Vercel?",
        a: "Not technically. Next.js is open source and runs on Cloudflare, Netlify, AWS, and self-hosted Node. In practice, the App Router, ISR, and image optimization features have first-class support on Vercel and degraded behavior elsewhere. If avoiding Vercel is a hard requirement, plan extra integration work or pick Remix or SvelteKit.",
    },
    {
        q: "Which has the best TypeScript story?",
        a: "All three are excellent. SvelteKit ships the strongest type inference for loaders out of the box because of svelte-check's deep integration. Remix has tight types on loader and action data through generics. Next.js has the largest ecosystem of typed third-party packages.",
    },
    {
        q: "What about React 19 server actions?",
        a: "Available natively in Next.js App Router as of 14.x. Remix has its own action pattern that predates server actions and remains the recommended approach there. SvelteKit's form actions API is conceptually similar but follows Svelte conventions. All three solve the same problem; the syntax differs.",
    },
    {
        q: "Should I migrate an existing Pages Router app to App Router?",
        a: "Only if you have a real need. App Router is the future, but Pages Router is still supported and stable. Migrate when you want server components, partial prerendering, or the new routing primitives. Don't migrate just because the docs prefer App Router. We have plenty of clients still on Pages Router in 2026 with no plans to move.",
    },
    {
        q: "Which framework do you ship most often at QUANT LAB USA?",
        a: "Next.js, by a wide margin. About 70% of our commercial builds in 2025 to 2026 were Next.js (App Router for new builds, Pages Router for clients on older stacks). Remix when the team prefers it or has a Rails-shaped data model. SvelteKit for content-heavy marketing properties and lightweight admin dashboards.",
    },
];

const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Next.js vs Remix vs SvelteKit 2026", url: `/blog/${SLUG}` },
];

const articleLd = articleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED_ISO,
    image: "https://quantlabusa.dev/og-web-apps.png",
    slug: SLUG,
    section: "Web Development",
    keywords: ["Next.js", "Remix", "SvelteKit", "React framework", "framework comparison"],
});
const breadcrumbLd = breadcrumbSchema(breadcrumbItems, `/blog/${SLUG}`);
const faqLd = faqSchema(faqItems);

export default function NextjsRemixSvelteKit2026Page() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/blog" className="hover:text-sky-400 transition-colors">Blog</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Next.js vs Remix vs SvelteKit 2026</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Code2 className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">TOFU Framework Guide · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Next.js vs Remix vs SvelteKit: An Honest 2026 Comparison
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        A founder-engineer review of the three frameworks we actually ship in production. Where each one wins, where each one breaks, what they cost to host, and the heuristic we use to pick.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        By <Link href="/about" className="text-sky-400 hover:underline">Bill Beltz</Link>, founder of QUANT LAB USA INC · Published May 12, 2026
                    </p>
                    <ConsultationCTA label="Talk to an Engineer" service="Web Application Development" source="blog-framework-comparison" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quick answer: which framework should you pick in 2026?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Pick Next.js 16 (App Router) for most commercial React projects in 2026 — it has the deepest ecosystem, the largest hiring pool, and the broadest third-party integrations. Pick Remix (now React Router v7 framework mode) when you want a Rails-shaped data model and explicit progressive enhancement. Pick SvelteKit when you need small bundles, content-heavy sites, or your team prefers Svelte authoring. Hosting strategy moves real-world performance more than framework choice does.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Framework debates online are usually dishonest. Twitter favors whichever framework someone just shipped a side project in, conferences favor whichever framework just released a new feature, and benchmarks favor whichever framework the benchmark author works on. None of that helps a founder picking a stack for the next three years.
                        </p>
                        <p>
                            We ship all three frameworks in production at <Link href="/" className="text-sky-400 hover:underline">QUANT LAB USA</Link>. Most builds end up on Next.js because of ecosystem gravity, but we have shipped Remix when the data shape favored it and SvelteKit when bundle weight was the deciding constraint. This guide is the honest landscape from someone who has fixed production incidents in all three.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">What each framework actually is in 2026</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Brief definitions before we compare, because the marketing copy is unhelpful.
                        </p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Next.js 16</strong> is a React meta-framework from Vercel. It ships App Router (React Server Components, layouts, partial prerendering, server actions) and the legacy Pages Router. It is the dominant React framework by adoption and by ecosystem depth. Learn more in our <Link href="/glossary/what-is-nextjs" className="text-sky-400 hover:underline">What is Next.js glossary entry</Link>.</li>
                            <li><strong>Remix</strong> as a brand effectively folded into React Router v7 in 2024. The framework mode of React Router v7 is the spiritual successor — same loaders, actions, nested routes, error boundaries. Treat "Remix" and "React Router framework" as synonyms in 2026.</li>
                            <li><strong>SvelteKit</strong> is the official Svelte meta-framework. It uses Vite under the hood, ships small client bundles, and emphasizes file-based routing with loaders much like Remix. Svelte 5 (with the new runes API) is the rendering layer.</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Side-by-side feature comparison</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Capability</th>
                                    <th className="px-4 py-3 border-b border-white/10">Next.js 16</th>
                                    <th className="px-4 py-3 border-b border-white/10">Remix / RR7</th>
                                    <th className="px-4 py-3 border-b border-white/10">SvelteKit</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">React Server Components</td><td className="px-4 py-3">Yes (App Router)</td><td className="px-4 py-3">No</td><td className="px-4 py-3">N/A (uses Svelte)</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Streaming SSR</td><td className="px-4 py-3">Yes (PPR)</td><td className="px-4 py-3">Yes (defer)</td><td className="px-4 py-3">Yes (streamed)</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Server actions / form actions</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">Yes (actions)</td><td className="px-4 py-3">Yes (form actions)</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Median client bundle</td><td className="px-4 py-3">90 to 130 KB</td><td className="px-4 py-3">70 to 100 KB</td><td className="px-4 py-3">30 to 70 KB</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Image optimization</td><td className="px-4 py-3">Built-in</td><td className="px-4 py-3">DIY or plugin</td><td className="px-4 py-3">enhanced:img</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Middleware</td><td className="px-4 py-3">Edge runtime</td><td className="px-4 py-3">Loader chain</td><td className="px-4 py-3">hooks.server.ts</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Vercel-native</td><td className="px-4 py-3">First class</td><td className="px-4 py-3">Supported</td><td className="px-4 py-3">Supported</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Cloudflare Workers</td><td className="px-4 py-3">Beta / opennextjs</td><td className="px-4 py-3">First class</td><td className="px-4 py-3">First class</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Hiring pool depth</td><td className="px-4 py-3">Largest</td><td className="px-4 py-3">Medium</td><td className="px-4 py-3">Small</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Third-party UI kit support</td><td className="px-4 py-3">Universal</td><td className="px-4 py-3">Universal</td><td className="px-4 py-3">Svelte-specific</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Rendering models compared</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            All three frameworks support full server-side rendering, static generation, and client-side navigation. The mental models differ.
                        </p>
                        <p>
                            <strong>Next.js App Router</strong> introduces React Server Components, which run only on the server and stream HTML chunks. Client components hydrate selectively. Partial Prerendering (PPR) blends static shells with dynamic streams. This is powerful, but the mental model has a learning curve — async components, request memoization, the use directive — that catches teams who skipped the docs.
                        </p>
                        <p>
                            <strong>Remix / React Router framework</strong> sticks to a more traditional model: loaders fetch data per route, actions handle mutations, components render React. Streaming uses defer() and Await. The model is closer to Rails. If you have shipped server-rendered React before, Remix loaders feel obvious.
                        </p>
                        <p>
                            <strong>SvelteKit</strong> uses load() functions per route plus form actions. Svelte components are compiled at build time into reactive vanilla JS, so the client runtime is tiny. The compile-step optimization is the reason SvelteKit wins bundle-size benchmarks.
                        </p>
                        <p>
                            For deeper background, see our explainer on <Link href="/glossary/what-is-server-side-rendering" className="text-sky-400 hover:underline">server-side rendering</Link> and <Link href="/glossary/what-is-jamstack" className="text-sky-400 hover:underline">Jamstack architecture</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Data fetching: where the real differences live</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            How a framework handles server-to-client data is the single biggest day-to-day DX difference. The patterns:
                        </p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Next.js App Router:</strong> Async server components fetch data inline. Pass data to client components via props or context. Server actions handle mutations. The pattern reads beautifully but introduces request memoization gotchas — fetching the same resource in three components requires React.cache or the memoized fetch wrapper.</li>
                            <li><strong>Remix:</strong> Each route file exports a loader and (optionally) an action. The loader runs on the server before render. Data arrives as props via useLoaderData. Mutations go through Form components and action handlers. The model is more constrained than Next.js, which is exactly why teams pick Remix — fewer choices means fewer bad choices.</li>
                            <li><strong>SvelteKit:</strong> Each route exports a load() function. Returned data is reactive in the page component. Form actions handle mutations. Conceptually almost identical to Remix, written in Svelte.</li>
                        </ul>
                        <p>
                            For typed data flow, all three are excellent in 2026. SvelteKit's svelte-check generates the strongest end-to-end types out of the box. Remix's typed loaders via generic returns are clean. Next.js relies on you typing the return value of your fetch wrapper, which works fine but is more manual.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Real-world hosting cost (2026 numbers)</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The cheapest framework to host is whichever one matches the platform's pricing model. Numbers from our 2025 to 2026 production bills, normalized to "mid-traffic SaaS, 100K monthly visits, dashboard plus marketing site":
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Next.js on Vercel Pro: $200 to $800/month (depends on edge function calls, image transforms, ISR revalidations)</li>
                            <li>Next.js on Cloudflare via opennextjs: $30 to $150/month</li>
                            <li>Remix on Fly.io or Render: $50 to $200/month</li>
                            <li>SvelteKit on Cloudflare Pages: $20 to $80/month</li>
                            <li>SvelteKit on Netlify Pro: $50 to $150/month</li>
                        </ul>
                        <p>
                            The Vercel premium for Next.js is real but earns its keep on certain workloads — preview deploys, image optimization, ISR. For pure marketing sites, run on Cloudflare. For complex dashboards with heavy server work, Vercel or Render makes sense. We help clients <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">design hosting architecture</Link> as part of every build.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">DX and learning curve</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Developer experience is real money. The framework your team can move fastest in is the framework that ships features fastest. A few signals from teams we have onboarded:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong>Next.js Pages Router:</strong> Easiest onboarding for any React developer. The model is familiar; the docs are mature.</li>
                            <li><strong>Next.js App Router:</strong> Steeper learning curve. Server components, the use directive, async params, request memoization all take 2 to 4 weeks to internalize.</li>
                            <li><strong>Remix:</strong> Moderate. Loaders and actions are obvious; nested routing and outlets take a few days. The constraints help.</li>
                            <li><strong>SvelteKit:</strong> Easy if your team likes Svelte. The compile-time reactivity, slot patterns, and runes API are different enough from React that a React-only team needs 2 to 3 weeks of ramp-up.</li>
                        </ol>
                        <p>
                            For larger teams, the hiring pool is decisive. Next.js has 10x the candidate flow of Remix and 50x the candidate flow of SvelteKit on the platforms we recruit from. If you plan to scale engineering past five seats, Next.js de-risks hiring.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Ecosystem and third-party integrations</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Most production apps glue together auth, payments, analytics, CMS, and UI kit. Framework ecosystem support varies.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Auth:</strong> Auth.js (NextAuth) is first-class for Next.js and Remix; Clerk supports both. SvelteKit needs Lucia, Auth.js for SvelteKit (newer, less mature), or DIY.</li>
                            <li><strong>Payments:</strong> Stripe SDK is framework-agnostic. We have shipped <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">Stripe integrations</Link> in all three. See our <Link href="/blog/nextjs-stripe-integration-guide" className="text-sky-400 hover:underline">Next.js Stripe integration guide</Link> for the canonical pattern.</li>
                            <li><strong>UI kits:</strong> shadcn/ui, Radix, Headless UI all work in React (Next.js, Remix). Svelte has its own ecosystem — Skeleton UI, melt-ui, shadcn-svelte ports.</li>
                            <li><strong>CMS:</strong> Sanity, Contentful, Payload work across all three. Payload has the deepest Next.js integration.</li>
                            <li><strong>Database / ORM:</strong> Prisma, Drizzle, Kysely, all framework-agnostic.</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Performance: what the benchmarks miss</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Benchmarks usually measure synthetic hello-world routes. Real apps have auth checks, database calls, third-party API calls, and caching. Once you add real work, framework overhead becomes a small percentage of total page time.
                        </p>
                        <p>
                            The dominant levers for real-world performance:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Database query plans and connection pooling (often 60% of TTFB)</li>
                            <li>Third-party API latency (often 20%)</li>
                            <li>Caching strategy: ISR, edge cache, KV stores (often the deciding factor)</li>
                            <li>Image and font optimization (CWV impact)</li>
                            <li>Hydration cost on initial load (framework matters here)</li>
                        </ul>
                        <p>
                            SvelteKit wins on the last bullet by 30 to 50%. The other four are framework-independent. If hydration cost is your bottleneck (heavy interactive widgets, slow mobile users), SvelteKit will move the needle. For most dashboard SaaS apps, the difference between frameworks shows up on the third decimal of Lighthouse, not in user-visible behavior.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Where each framework breaks</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Every framework has scar tissue. Honest list of where we have hit walls:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Next.js App Router:</strong> Build-time errors are sometimes opaque. Streaming + Suspense interactions can leak partial states. The Vercel-specific optimizations (image, ISR) degrade outside Vercel.</li>
                            <li><strong>Remix:</strong> Smaller ecosystem. Some SaaS integrations ship a "Next.js example" and a comment saying "should work in Remix." TypeScript inference on loaders crosses an annoying threshold around eight nested routes.</li>
                            <li><strong>SvelteKit:</strong> Smallest hiring pool. Some third-party libraries are React-only and require wrappers. Svelte 5 runes API change in 2024 to 2025 broke older patterns and required a documented migration.</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Our pick heuristic</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            We use a short decision tree on every new build. In order of veto power:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Does the team already have strong opinions or existing code in a framework? Use that.</li>
                            <li>Is this primarily a content site (marketing, docs, blog)? SvelteKit or Astro.</li>
                            <li>Does the data model fit Rails-style loaders cleanly with heavy form interaction? Remix.</li>
                            <li>Will you hire 3+ engineers in the next 18 months? Next.js (the hiring pool wins).</li>
                            <li>Do you need React Server Components, partial prerendering, or specific Vercel features? Next.js.</li>
                            <li>Default: Next.js App Router.</li>
                        </ol>
                        <p>
                            For deeper analysis on the build decision itself, see <Link href="/blog/build-vs-buy-software-2026" className="text-sky-400 hover:underline">Build vs Buy Software 2026</Link> and <Link href="/blog/how-to-choose-a-software-development-company-checklist" className="text-sky-400 hover:underline">How to Choose a Software Development Company</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Case studies: what we shipped on which</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <ul className="list-disc pl-6 space-y-2">
                            <li><Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link> — Next.js App Router, heavy server actions, dashboard-first.</li>
                            <li><Link href="/work/wilder-recovery" className="text-sky-400 hover:underline">Wilder Recovery</Link> — Next.js for marketing plus admin portal, edge functions for booking.</li>
                            <li><Link href="/work/multi-strategy-trading-system" className="text-sky-400 hover:underline">Multi-Strategy Trading System</Link> — Next.js for the operator UI, Rust services behind.</li>
                            <li><Link href="/work/contractor-estimating-proposal-engine" className="text-sky-400 hover:underline">Contractor Estimating Engine</Link> — Next.js for the proposal flow, Stripe Connect for payouts.</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">FAQ</h2>
                    <div className="space-y-6">
                        {faqItems.map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Related reading and next steps</h2>
                    <ul className="space-y-3">
                        {[
                            { href: "/services/web-applications", label: "Web Application Development service" },
                            { href: "/services/saas-platform-development", label: "SaaS Platform Development" },
                            { href: "/services/api-development", label: "API Development" },
                            { href: "/blog/nextjs-stripe-integration-guide", label: "Next.js + Stripe integration guide" },
                            { href: "/blog/internal-tools-platform-engineering-guide", label: "Internal Tools Platform Engineering Guide" },
                            { href: "/blog/build-vs-buy-software-2026", label: "Build vs Buy Software 2026" },
                            { href: "/glossary/what-is-nextjs", label: "What is Next.js?" },
                            { href: "/glossary/what-is-jamstack", label: "What is Jamstack?" },
                            { href: "/glossary/what-is-server-side-rendering", label: "What is server-side rendering?" },
                            { href: "/calculators/build-vs-buy", label: "Build vs Buy calculator" },
                            { href: "/work", label: "Case studies" },
                            { href: "/contact", label: "Get an engineering review" },
                        ].map((l) => (
                            <li key={l.href} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                <Link href={l.href} className="text-sky-400 hover:underline">{l.label}</Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a framework gut-check?</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free 30-minute architecture call. We will walk through your data model, traffic profile, and team and recommend the framework that fits.
                        </p>
                        <ConsultationCTA label="Book Architecture Review" service="Web Application Development" source="blog-framework-cta" />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill at <a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link href="/blog" className="hover:text-sky-400 inline-flex items-center gap-1">
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Updated May 12, 2026</span>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
