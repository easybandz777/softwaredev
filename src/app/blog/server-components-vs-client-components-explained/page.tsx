import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { ArrowRight, Check, Boxes } from "lucide-react";

const SLUG = "server-components-vs-client-components-explained";
const TITLE = "Server Components vs Client Components Explained (2026)";
const DESCRIPTION =
    "When to use server vs client components in Next.js: where the boundary goes, the common mistakes that bloat bundles, and the performance tradeoffs — with code.";
const PUBLISHED_ISO = "2026-06-03";

export const metadata: Metadata = articleMetadata({
    title: TITLE,
    description: DESCRIPTION,
    slug: `/blog/${SLUG}`,
    image: "/og-web-apps.png",
    imageAlt: "Server components vs client components boundary diagram",
    publishedTime: PUBLISHED_ISO,
    modifiedTime: PUBLISHED_ISO,
    authors: ["Bill Beltz"],
    keywords: [
        "server components vs client components",
        "React server components",
        "use client directive",
        "Next.js client boundary",
        "RSC performance",
    ],
});

const faqItems = [
    {
        q: "What is the difference between a server component and a client component?",
        a: "A server component runs only on the server, never ships its JavaScript to the browser, can be async, and can read secrets or hit the database directly. A client component runs in the browser, can use state, effects, refs, and event handlers, and gets hydrated after the HTML loads. In Next.js App Router every component is a server component by default; you opt into client behavior with the 'use client' directive at the top of the file.",
    },
    {
        q: "When should I use a client component?",
        a: "Use a client component only when you need something the browser provides: React state or effects, event handlers like onClick or onChange, refs, browser APIs such as localStorage or the geolocation API, or third-party libraries that touch the DOM. Everything else — data fetching, layout, static content, and anything that reads server-only resources — should stay a server component. The rule is to reach for the client only when interactivity forces you to.",
    },
    {
        q: "Can a server component import a client component?",
        a: "Yes, and that is the normal direction. A server component can render a client component freely. What you cannot do is the reverse: a client component cannot import a server component directly, because by the time the client module runs, the server has finished. The workaround is composition — pass the server-rendered content into the client component as a children prop, which the server fills in before hydration.",
    },
    {
        q: "Does 'use client' mean the component only runs in the browser?",
        a: "No — that is the single most common misunderstanding. A client component still renders on the server for the initial HTML (server-side rendering), then hydrates and re-runs in the browser. The 'use client' directive does not turn off server rendering; it marks the start of the client bundle. The component runs in both places, which is why you must guard browser-only code like window or localStorage behind an effect or a typeof check.",
    },
    {
        q: "Are server components always faster than client components?",
        a: "Not categorically, but they win on the metrics that usually matter. Server components ship zero JavaScript for themselves, which shrinks the bundle and cuts hydration cost — the biggest lever on Time to Interactive for content-heavy pages. They also move data fetching next to the database, eliminating a client round-trip. Where client components win is interactivity: anything that must respond instantly to user input without a server round-trip belongs on the client.",
    },
    {
        q: "How do I share data between server and client components?",
        a: "Fetch the data in a server component and pass it down as props to the client component. Props crossing the boundary must be serializable — plain objects, arrays, strings, numbers, dates — not functions or class instances. For app-wide client state, put the provider in a client component near the root of a layout and wrap server-rendered children with it via the children prop so you do not pull the whole tree into the client bundle.",
    },
    {
        q: "Can QUANT LAB USA review my component architecture?",
        a: "Yes. We audit Next.js App Router codebases for client-boundary placement, bundle bloat, and hydration cost as part of our web application work, and we build new applications with the boundary drawn correctly from day one. A typical architecture review is a fixed-scope engagement; a full build runs 8 to 24 weeks. Book a call below and we will look at your tree.",
    },
];

const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Server Components vs Client Components", url: `/blog/${SLUG}` },
];

const articleLd = articleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED_ISO,
    image: "https://quantlabusa.dev/og-web-apps.png",
    slug: SLUG,
    section: "Web Development",
    author: { name: "Bill Beltz", url: "https://quantlabusa.dev/about" },
    keywords: ["server components", "client components", "React", "Next.js", "use client"],
});
const breadcrumbLd = breadcrumbSchema(breadcrumbItems, `/blog/${SLUG}`);
const faqLd = faqSchema(faqItems);

export default function ServerVsClientComponentsPage() {
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
                        <li className="text-gray-300">Server Components vs Client Components</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Boxes className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">MOFU Engineering Guide · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Server Components vs Client Components, Explained
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        The single decision that shapes a Next.js codebase: which components render on the server and which run in the browser. Where the boundary goes, the mistakes that quietly bloat your bundle, and the performance math behind the rule.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        By <Link href="/about" className="text-sky-400 hover:underline">Bill Beltz</Link>, founder of QUANT LAB USA INC · Published June 3, 2026
                    </p>
                    <ConsultationCTA label="Talk to an Engineer" service="Web Application Development" source="blog-server-vs-client" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quick answer</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Default to server components. Render everything on the server until a piece of UI genuinely needs state, an event handler, a ref, or a browser API — then mark only that leaf with &apos;use client&apos;. Server components ship zero JavaScript and fetch data next to the database; client components own interactivity. Push the boundary as far down the tree as possible, pass data down as serializable props, and never let one stray &apos;use client&apos; at the top pull your whole app into the browser bundle.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            React Server Components are the most consequential change to React in a decade, and also the one that trips up the most experienced engineers — precisely because they have a decade of instinct that says &quot;components run in the browser.&quot; In the Next.js App Router that instinct is wrong by default, and unlearning it is the whole job.
                        </p>
                        <p>
                            This post is the deep version of the boundary question we touch on in our <Link href="/blog/nextjs-16-app-router-guide-2026" className="text-sky-400 hover:underline">Next.js 16 App Router guide</Link>. We draw this line on every <Link href="/services/web-applications" className="text-sky-400 hover:underline">web application we build</Link>, and getting it right is the difference between a 40 KB page and a 400 KB page. If you are new to the framework, start with <Link href="/glossary/what-is-nextjs" className="text-sky-400 hover:underline">what Next.js is</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Two component types, two runtimes</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Capability</th>
                                    <th className="px-4 py-3 border-b border-white/10">Server component</th>
                                    <th className="px-4 py-3 border-b border-white/10">Client component</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Ships JS to the browser</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Yes</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Can be async / await data</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">No (use effects or libraries)</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">useState / useEffect</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Yes</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">onClick / onChange handlers</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Yes</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Read secrets / hit the database</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">No</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Browser APIs (window, localStorage)</td><td className="px-4 py-3">No</td><td className="px-4 py-3">Yes (guarded)</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Renders initial HTML on the server</td><td className="px-4 py-3">Yes</td><td className="px-4 py-3">Yes, then hydrates</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-gray-300 leading-relaxed mt-4">
                        The last row is the one people miss. A client component is <em>not</em> a browser-only component — it renders on the server for the first paint and then hydrates in the browser. &quot;Client&quot; means &quot;also runs in the browser,&quot; not &quot;only runs in the browser.&quot;
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Where the boundary actually goes</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The boundary is the <code>&apos;use client&apos;</code> directive. Everything in that file and everything it imports becomes part of the client bundle. The skill is placing it as deep in the tree as possible so the smallest amount of code crosses over.
                        </p>
                        <p>
                            Consider a product page with a static description and an interactive &quot;add to cart&quot; button. The wrong instinct is to make the whole page a client component. The right move is to keep the page on the server and isolate just the button:
                        </p>
                        <pre className="bg-[#0a1120] border border-white/10 rounded-xl p-4 overflow-x-auto text-sm"><code>{`// src/app/products/[id]/page.tsx  (server component)
import { getProduct } from "@/lib/products";
import { AddToCartButton } from "./AddToCartButton";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);   // server-side, no client JS

  return (
    <article>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* only this leaf becomes client JS */}
      <AddToCartButton productId={product.id} />
    </article>
  );
}`}</code></pre>
                        <pre className="bg-[#0a1120] border border-white/10 rounded-xl p-4 overflow-x-auto text-sm"><code>{`// src/app/products/[id]/AddToCartButton.tsx
'use client';

import { useState } from "react";

export function AddToCartButton({ productId }: { productId: string }) {
  const [added, setAdded] = useState(false);
  return (
    <button onClick={() => setAdded(true)}>
      {added ? "Added" : "Add to cart"}
    </button>
  );
}`}</code></pre>
                        <p>
                            The product name, description, and markup ship as zero-JS HTML. Only the tiny button hydrates. On a page with dozens of products that is the difference between a snappy load and a janky one.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The children prop trick</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The boundary is one-directional: a client component cannot import a server component. But you constantly need a client wrapper — a theme provider, an accordion, a tab panel — around server-rendered content. The answer is composition through <code>children</code>.
                        </p>
                        <pre className="bg-[#0a1120] border border-white/10 rounded-xl p-4 overflow-x-auto text-sm"><code>{`// Client wrapper that accepts server-rendered children
'use client';
import { useState } from "react";

export function Collapsible({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen((o) => !o)}>Toggle</button>
      {open && children}
    </div>
  );
}`}</code></pre>
                        <pre className="bg-[#0a1120] border border-white/10 rounded-xl p-4 overflow-x-auto text-sm"><code>{`// Server component fills the children slot — ServerHeavyPanel
// never enters the client bundle.
import { Collapsible } from "./Collapsible";
import { ServerHeavyPanel } from "./ServerHeavyPanel";

export default function Page() {
  return (
    <Collapsible>
      <ServerHeavyPanel />   {/* stays on the server */}
    </Collapsible>
  );
}`}</code></pre>
                        <p>
                            The client component controls the interactivity; the server component it wraps is rendered on the server and passed in as an already-rendered tree. This pattern is how you keep providers and interactive shells thin while the bulk of the page stays server-side.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Mid-post: get your boundary audited</h2>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-8 text-center">
                        <p className="text-gray-300 mb-6">Bundle feeling heavy? We audit App Router codebases for misplaced client boundaries and hydration cost. Free 30-minute review of your component tree.</p>
                        <ConsultationCTA label="Book the Architecture Call" service="Web Application Development" source="blog-server-vs-client-mid" />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The mistakes that bloat bundles</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol className="list-decimal pl-6 space-y-3">
                            <li><strong>&apos;use client&apos; at the top of a layout or page.</strong> This is the cardinal sin. It marks the entire subtree as client, so every child — even static content — ships as JavaScript. Move the directive to the interactive leaf.</li>
                            <li><strong>Wrapping the app in a client provider directly.</strong> If your root layout renders a client <code>&lt;Providers&gt;</code> component that wraps <code>children</code>, that is fine — but only if Providers uses the children prop rather than importing the page tree. Keep providers as thin client shells.</li>
                            <li><strong>Pulling in a heavy library at the client boundary.</strong> A date picker, a charting library, or a markdown renderer imported into a client component drags its whole weight into the bundle. Render static output on the server where you can; lazy-load heavy client widgets with <code>next/dynamic</code>.</li>
                            <li><strong>Using useEffect to fetch first-paint data.</strong> If the data is needed to render, fetch it in a server component and pass it down. Client-side fetching adds a round-trip and a loading flash.</li>
                            <li><strong>Passing non-serializable props across the boundary.</strong> Functions, class instances, and Dates-as-methods do not serialize. The build will warn you; respect it and pass plain data plus a Server Action for behavior.</li>
                            <li><strong>Marking a whole UI-kit barrel file as client.</strong> If you re-export both server-safe and client-only components from one <code>index.ts</code> with <code>&apos;use client&apos;</code> at the top, you force everything client. Split the barrel.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The performance math</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The reason the default-server posture matters is hydration. Every client component that renders on first paint must be re-executed in the browser to attach event handlers — that is hydration, and it is CPU work that blocks interactivity, especially on mid-range phones.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Server component:</strong> ships HTML, ships zero JS for itself, costs nothing to hydrate.</li>
                            <li><strong>Client component:</strong> ships HTML plus its JS plus its dependencies, and pays hydration CPU on load.</li>
                            <li><strong>Net effect:</strong> moving a 60 KB interactive tree to a 6 KB leaf cuts both transfer size and main-thread hydration time by roughly 90% for that subtree.</li>
                        </ul>
                        <p>
                            For a content-heavy marketing page, going server-first routinely takes Time to Interactive from multiple seconds on a throttled mobile connection down to under a second. For a dashboard that is mostly interactive, the win is smaller because the interactivity is real — but even then, the static chrome, headers, and read-only panels belong on the server. The broader rendering background lives in our explainer on <Link href="/glossary/what-is-server-side-rendering" className="text-sky-400 hover:underline">server-side rendering</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">A decision checklist</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            When you are unsure which type a component should be, run it through these questions in order. The first &quot;yes&quot; in the client column decides it.
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Does it need <code>useState</code>, <code>useReducer</code>, or <code>useEffect</code>? If yes, client.</li>
                            <li>Does it attach an event handler like <code>onClick</code> or <code>onChange</code>? If yes, client.</li>
                            <li>Does it use a ref to a DOM node or a browser API? If yes, client.</li>
                            <li>Does it depend on a third-party library that touches the DOM? If yes, client (and consider lazy-loading it).</li>
                            <li>Does it only display data, read server resources, or compose other components? If yes, server.</li>
                            <li>Default: server.</li>
                        </ol>
                        <p>
                            This is the same heuristic we apply when scoping <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platform builds</Link> and the internal tools covered in our <Link href="/blog/internal-tools-platform-engineering-guide" className="text-sky-400 hover:underline">platform engineering guide</Link>.
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
                            { href: "/blog/nextjs-16-app-router-guide-2026", label: "Next.js 16 App Router guide" },
                            { href: "/blog/nextjs-vs-remix-vs-sveltekit-2026", label: "Next.js vs Remix vs SvelteKit (2026)" },
                            { href: "/blog/internal-tools-platform-engineering-guide", label: "Internal Tools Platform Engineering Guide" },
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Drawing the boundary right.</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free 30-minute review. We will look at your component tree, find the misplaced client boundaries, and map the path to a leaner bundle.
                        </p>
                        <ConsultationCTA label="Book the Architecture Call" service="Web Application Development" source="blog-server-vs-client-cta" />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill directly at <a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug="server-components-vs-client-components-explained"
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
