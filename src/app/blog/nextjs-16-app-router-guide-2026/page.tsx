import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { ArrowRight, Check, Layers } from "lucide-react";

const SLUG = "nextjs-16-app-router-guide-2026";
const TITLE = "Next.js 16 App Router Guide: The 2026 Mental Model";
const DESCRIPTION =
    "A practical Next.js 16 App Router guide: server vs client components, layouts, routing, data fetching, and the caching model — with code and real tradeoffs.";
const PUBLISHED_ISO = "2026-06-03";

export const metadata: Metadata = articleMetadata({
    title: TITLE,
    description: DESCRIPTION,
    slug: `/blog/${SLUG}`,
    image: "/og-web-apps.png",
    imageAlt: "Next.js 16 App Router architecture guide for 2026",
    publishedTime: PUBLISHED_ISO,
    modifiedTime: PUBLISHED_ISO,
    authors: ["Bill Beltz"],
    keywords: [
        "Next.js 16 App Router",
        "Next.js App Router guide",
        "server components Next.js",
        "Next.js data fetching",
        "Next.js caching 2026",
    ],
});

const faqItems = [
    {
        q: "What actually changed in the Next.js 16 App Router?",
        a: "The App Router itself is stable since Next.js 13, but Next.js 16 finalized the caching defaults that confused everyone in 14 and 15. Fetch requests are no longer cached by default — you opt in explicitly. The `use cache` directive and `cacheLife` / `cacheTag` primitives replace the old implicit fetch cache. Partial Prerendering (PPR) is the production rendering model, blending a static shell with streamed dynamic holes. The mental model is finally honest: nothing is cached unless you say so.",
    },
    {
        q: "Are server components the default in the App Router?",
        a: "Yes. Every file under `src/app` is a server component unless it starts with the `'use client'` directive. Server components run only on the server, never ship their code to the browser, and can be async so they fetch data inline. You drop down to a client component only when you need state, effects, event handlers, or browser APIs. The default-server posture is the single biggest shift from the Pages Router.",
    },
    {
        q: "How does data fetching work without getServerSideProps?",
        a: "There is no `getServerSideProps` or `getStaticProps` in the App Router. An async server component simply awaits its data — a fetch call, a Postgres query, an ORM call — directly in the component body. Loading states come from a `loading.tsx` file or a `<Suspense>` boundary. Mutations go through Server Actions. The data layer collapses into the component tree instead of living in a separate exported function.",
    },
    {
        q: "What is the difference between layout.tsx and template.tsx?",
        a: "A `layout.tsx` wraps its route segment and persists across navigations — it does not re-render or lose state when you move between sibling routes, which makes it ideal for nav bars, sidebars, and providers. A `template.tsx` looks similar but creates a fresh instance on every navigation, re-running effects and resetting state. Use layouts by default; reach for templates only when you specifically need per-navigation remounting, such as enter/exit animations.",
    },
    {
        q: "Should I migrate an existing Pages Router app to the App Router?",
        a: "Only if you have a concrete reason. The Pages Router is still supported in Next.js 16 and the two routers can coexist in the same project. Migrate when you want server components, streaming, PPR, or Server Actions. Do not migrate purely because the docs lead with the App Router. We have clients shipping happily on the Pages Router in 2026 with no plans to move, and incremental migration route-by-route is the right play when a move is warranted.",
    },
    {
        q: "Can QUANT LAB USA build or migrate a Next.js 16 application?",
        a: "Yes. We build production Next.js 16 applications on the App Router with TypeScript, Postgres, and Docker, and we run incremental Pages-to-App migrations for teams that need server components or streaming without a rewrite. Most engagements run 8 to 24 weeks depending on scope. Book an architecture call below and we will map your rendering and caching strategy with you.",
    },
];

const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Next.js 16 App Router Guide 2026", url: `/blog/${SLUG}` },
];

const articleLd = articleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED_ISO,
    image: "https://quantlabusa.dev/og-web-apps.png",
    slug: SLUG,
    section: "Web Development",
    author: { name: "Bill Beltz", url: "https://quantlabusa.dev/about" },
    keywords: ["Next.js 16", "App Router", "server components", "data fetching", "caching"],
});
const breadcrumbLd = breadcrumbSchema(breadcrumbItems, `/blog/${SLUG}`);
const faqLd = faqSchema(faqItems);

export default function Nextjs16AppRouterGuide2026Page() {
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
                        <li className="text-gray-300">Next.js 16 App Router Guide 2026</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Layers className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">MOFU Engineering Guide · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        The Next.js 16 App Router: A Working Mental Model
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        How the App Router actually thinks in Next.js 16 — server components by default, layouts that persist, async data fetching in the tree, and the caching model that finally stopped lying to you. Written from production builds, not the changelog.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        By <Link href="/about" className="text-sky-400 hover:underline">Bill Beltz</Link>, founder of QUANT LAB USA INC · Published June 3, 2026
                    </p>
                    <ConsultationCTA label="Talk to an Engineer" service="Web Application Development" source="blog-nextjs16-app-router" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quick answer</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>The Next.js 16 App Router runs every component on the server by default. You opt into the client with &apos;use client&apos;, you fetch data by awaiting it directly inside async server components, layouts persist across navigation while pages re-render, and nothing is cached unless you explicitly say so with fetch options or the new &apos;use cache&apos; directive. Master those four facts — server-default, inline data, persistent layouts, explicit caching — and the rest of the App Router falls into place.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Most teams who struggle with the App Router are not struggling with the App Router. They are struggling with the fact that they carried Pages Router instincts into a model that inverted three of its core assumptions. In the Pages Router, components ran on the client by default, data came from exported lifecycle functions, and fetch caching was implicit. In the App Router, all three of those are reversed.
                        </p>
                        <p>
                            This guide rebuilds the mental model from the ground up. We ship Next.js 16 on the App Router across most of our <Link href="/services/web-applications" className="text-sky-400 hover:underline">web application engagements</Link>, and the patterns below are the ones we reach for on every build. If you want the framework-selection question answered first, read our <Link href="/blog/nextjs-vs-remix-vs-sveltekit-2026" className="text-sky-400 hover:underline">Next.js vs Remix vs SvelteKit comparison</Link>. For the basics of the framework itself, see the glossary entry on <Link href="/glossary/what-is-nextjs" className="text-sky-400 hover:underline">what Next.js is</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The file system is the router</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Routing in the App Router is folders. A folder under <code>src/app</code> is a route segment; a <code>page.tsx</code> inside it makes that segment publicly addressable. Special files give each segment behavior without any configuration object.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><code>page.tsx</code> — the route&apos;s UI. Without it, the segment is not routable.</li>
                            <li><code>layout.tsx</code> — shared shell that wraps the segment and all children; persists across navigation.</li>
                            <li><code>loading.tsx</code> — an instant fallback shown via Suspense while the segment streams.</li>
                            <li><code>error.tsx</code> — a client error boundary scoped to the segment.</li>
                            <li><code>not-found.tsx</code> — the 404 UI for the segment.</li>
                            <li><code>route.ts</code> — a Route Handler (the App Router replacement for API routes).</li>
                        </ul>
                        <p>
                            Dynamic segments use brackets — <code>blog/[slug]/page.tsx</code> — and catch-alls use <code>[...slug]</code>. Folders wrapped in parentheses, like <code>(marketing)</code>, are route groups: they organize files and share a layout without adding a URL segment.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Server components are the default</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Every component you write in the App Router is a React Server Component until you opt out. Server components render on the server, never ship their JavaScript to the browser, and can be <code>async</code>. That last property is the whole point — you can await data right in the component body.
                        </p>
                        <pre className="bg-[#0a1120] border border-white/10 rounded-xl p-4 overflow-x-auto text-sm"><code>{`// src/app/dashboard/page.tsx  (server component — no directive needed)
import { db } from "@/lib/db";

export default async function DashboardPage() {
  // Runs on the server. The query result never leaves the server
  // except as rendered HTML.
  const projects = await db.query.projects.findMany();

  return (
    <ul>
      {projects.map((p) => (
        <li key={p.id}>{p.name}</li>
      ))}
    </ul>
  );
}`}</code></pre>
                        <p>
                            Note what is absent: no <code>useEffect</code>, no client-side fetch, no loading spinner state, no exported <code>getServerSideProps</code>. The component is the data layer. Secrets, database credentials, and server-only modules can be imported directly here because this code is guaranteed never to reach the browser bundle. For background on why server rendering matters, see <Link href="/glossary/what-is-server-side-rendering" className="text-sky-400 hover:underline">what server-side rendering is</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">When you drop into a client component</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The moment you need interactivity — state, effects, event handlers, refs, or browser-only APIs — you add <code>&apos;use client&apos;</code> at the top of the file. That directive marks the boundary: this module and everything it imports gets bundled and hydrated on the client.
                        </p>
                        <pre className="bg-[#0a1120] border border-white/10 rounded-xl p-4 overflow-x-auto text-sm"><code>{`'use client';

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((c) => c + 1)}>
      Clicked {count} times
    </button>
  );
}`}</code></pre>
                        <p>
                            The key insight is that the boundary is one-directional. A server component can render a client component, but a client component cannot import a server component — it can only receive one as a <code>children</code> prop. This lets you keep an interactive client island wrapped around a server-rendered subtree, which is the pattern that keeps bundles small. We go deep on exactly where to draw this line in our companion post, <Link href="/blog/server-components-vs-client-components-explained" className="text-sky-400 hover:underline">Server Components vs Client Components Explained</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Layouts, nesting, and what persists</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Layouts nest. The root <code>app/layout.tsx</code> wraps the entire app and must render the <code>&lt;html&gt;</code> and <code>&lt;body&gt;</code> tags. Every nested <code>layout.tsx</code> wraps its segment and renders <code>children</code> at the point where the next segment should appear.
                        </p>
                        <pre className="bg-[#0a1120] border border-white/10 rounded-xl p-4 overflow-x-auto text-sm"><code>{`// src/app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />        {/* persists across /dashboard/* navigations */}
      <main>{children}</main>
    </div>
  );
}`}</code></pre>
                        <p>
                            The critical behavior: when you navigate between sibling routes inside <code>/dashboard</code>, the layout does <strong>not</strong> re-render. The sidebar keeps its scroll position and any client state. Only the <code>children</code> slot swaps. That is why layouts are the right home for nav, providers, and anything expensive you do not want to rebuild on every click. If you genuinely need a remount per navigation — enter animations, for instance — use a <code>template.tsx</code> instead.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Mid-post: scope a Next.js 16 build</h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">Planning a Next.js 16 app or an incremental App Router migration? Free 30-minute architecture call. We will whiteboard the component boundary and caching strategy with you.</p>
                        <ConsultationCTA label="Book the Architecture Call" service="Web Application Development" source="blog-nextjs16-app-router-mid" />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Data fetching, streaming, and Suspense</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Because server components are async, fetching is just awaiting. Streaming and loading states come from Suspense boundaries. A <code>loading.tsx</code> file wraps the segment in an implicit <code>&lt;Suspense&gt;</code>, but you can place explicit boundaries to stream sub-trees independently.
                        </p>
                        <pre className="bg-[#0a1120] border border-white/10 rounded-xl p-4 overflow-x-auto text-sm"><code>{`import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <Header />                      {/* renders immediately */}
      <Suspense fallback={<SkeletonFeed />}>
        <Feed />                      {/* slow query — streams in later */}
      </Suspense>
    </>
  );
}

async function Feed() {
  const items = await getFeed();    // can be slow without blocking Header
  return <FeedList items={items} />;
}`}</code></pre>
                        <p>
                            One gotcha worth memorizing: if you fetch the same resource in three different components, you do not want three round-trips. Wrap server-only data access in React&apos;s <code>cache()</code> so identical calls within a single request are deduplicated. The <code>fetch</code> API gets this request-memoization for free; raw database calls need the explicit wrapper.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Mutations with Server Actions</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Writes go through Server Actions — async functions marked <code>&apos;use server&apos;</code> that run on the server but can be called directly from a form or a client component. After a mutation you call <code>revalidatePath</code> or <code>revalidateTag</code> to invalidate the relevant cache and refresh the UI.
                        </p>
                        <pre className="bg-[#0a1120] border border-white/10 rounded-xl p-4 overflow-x-auto text-sm"><code>{`// src/app/projects/actions.ts
'use server';

import { revalidatePath } from "next/cache";
import { db } from "@/lib/db";

export async function createProject(formData: FormData) {
  const name = String(formData.get("name") ?? "");
  await db.insert(projects).values({ name });
  revalidatePath("/projects");   // refresh the list
}`}</code></pre>
                        <p>
                            Wire it to a form with <code>&lt;form action={`{createProject}`}&gt;</code> — no API route, no client fetch, no JSON serialization by hand. Validate inputs inside the action with a schema library; never trust the <code>FormData</code>. This is the same pattern we use for the payment flows in our <Link href="/blog/nextjs-stripe-integration-guide" className="text-sky-400 hover:underline">Next.js Stripe integration guide</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The caching model in Next.js 16</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Caching is where Next.js 14 and 15 burned a lot of teams, because <code>fetch</code> was cached by default and the behavior was hard to reason about. Next.js 16 flips the default to honest: data is dynamic unless you opt into caching. There are four layers worth knowing.
                        </p>
                        <div className="overflow-x-auto mt-4">
                            <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                                <thead className="bg-[#0d1526] text-white">
                                    <tr>
                                        <th className="px-4 py-3 border-b border-white/10">Cache layer</th>
                                        <th className="px-4 py-3 border-b border-white/10">What it stores</th>
                                        <th className="px-4 py-3 border-b border-white/10">How you control it</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-300">
                                    <tr className="border-b border-white/5"><td className="px-4 py-3"><strong>Request memoization</strong></td><td className="px-4 py-3">Duplicate calls within one render</td><td className="px-4 py-3">Automatic for fetch; <code>cache()</code> for the rest</td></tr>
                                    <tr className="border-b border-white/5"><td className="px-4 py-3"><strong>Data cache</strong></td><td className="px-4 py-3">Fetch / query results across requests</td><td className="px-4 py-3"><code>fetch(url, &#123; next: &#123; revalidate &#125; &#125;)</code> or <code>&apos;use cache&apos;</code></td></tr>
                                    <tr className="border-b border-white/5"><td className="px-4 py-3"><strong>Full route cache</strong></td><td className="px-4 py-3">Rendered HTML of static routes</td><td className="px-4 py-3">Static by default; opts out when dynamic</td></tr>
                                    <tr className="border-b border-white/5"><td className="px-4 py-3"><strong>Router cache</strong></td><td className="px-4 py-3">Client-side navigation payloads</td><td className="px-4 py-3"><code>router.refresh()</code>, revalidate tags</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <p>
                            The new <code>&apos;use cache&apos;</code> directive lets you mark a function, component, or whole file as cacheable, then tune it with <code>cacheLife(&apos;hours&apos;)</code> and tag it with <code>cacheTag(&apos;projects&apos;)</code> so a later <code>revalidateTag(&apos;projects&apos;)</code> blows it away on demand. Partial Prerendering ties it together: Next.js serves a static shell instantly and streams the dynamic holes, so a page can be both cached and personalized.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The mistakes we see most</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol className="list-decimal pl-6 space-y-3">
                            <li><strong>Slapping &apos;use client&apos; on the root.</strong> One directive at the top of the tree pulls the whole app into the client bundle. Push the boundary down to the smallest interactive leaf.</li>
                            <li><strong>Fetching in a client component with useEffect.</strong> If the data is needed for first paint, fetch it in a server component parent and pass it down. Save client fetching for genuinely client-driven data.</li>
                            <li><strong>Importing server-only code into a client component.</strong> Mark server modules with <code>import &apos;server-only&apos;</code> so a stray import fails the build instead of leaking a secret into the bundle.</li>
                            <li><strong>Assuming fetch is still cached by default.</strong> In Next.js 16 it is not. If you want a static result, say so explicitly.</li>
                            <li><strong>Forgetting to revalidate after a Server Action.</strong> The mutation succeeds but the UI shows stale data. Call <code>revalidatePath</code> or <code>revalidateTag</code> at the end of every write.</li>
                            <li><strong>Putting providers in a template instead of a layout.</strong> Templates remount on navigation, so your context resets and effects re-fire. Providers belong in layouts.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Real-world example: dashboard plus marketing site</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A representative shape from our work: a SaaS with a static marketing site and an authenticated dashboard in one Next.js 16 project. The marketing routes live in a <code>(marketing)</code> group, render statically, and are fully cached at the edge. The dashboard routes live in an <code>(app)</code> group behind a layout that checks the session, fetch data per request, and use Suspense to stream the slow analytics panels while the shell paints instantly. Server Actions handle every mutation; <code>revalidateTag</code> keeps the cache coherent.
                        </p>
                        <p>
                            This split — static where you can, dynamic where you must, both in one App Router tree — is the payoff of the Next.js 16 model. We pair it with Postgres and a tenant-isolation strategy from our <Link href="/blog/building-multi-tenant-saas-postgres-rls" className="text-sky-400 hover:underline">multi-tenant SaaS on Postgres RLS</Link> guide, and host it per the tradeoffs in our <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure practice</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Frequently asked questions</h2>
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
                            { href: "/blog/server-components-vs-client-components-explained", label: "Server vs Client Components explained" },
                            { href: "/blog/nextjs-vs-remix-vs-sveltekit-2026", label: "Next.js vs Remix vs SvelteKit (2026)" },
                            { href: "/blog/nextjs-stripe-integration-guide", label: "Next.js + Stripe integration guide" },
                            { href: "/glossary/what-is-nextjs", label: "What is Next.js?" },
                            { href: "/glossary/what-is-server-side-rendering", label: "What is server-side rendering?" },
                            { href: "/glossary/what-is-jamstack", label: "What is Jamstack?" },
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Building on Next.js 16.</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free 30-minute architecture call. We will walk through your rendering model, the client boundary, and the caching strategy that fits your traffic.
                        </p>
                        <ConsultationCTA label="Book the Architecture Call" service="Web Application Development" source="blog-nextjs16-app-router-cta" />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill directly at <a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug="nextjs-16-app-router-guide-2026"
                        topics={["stack"]}
                        pinned={["nextjs-vs-remix-vs-sveltekit-2026", "nextjs-stripe-integration-guide", "internal-tools-platform-engineering-guide"]}
                        heading="More Next.js + stack reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link href="/blog" className="hover:text-sky-400 inline-flex items-center gap-1">
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Updated June 3, 2026</span>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
