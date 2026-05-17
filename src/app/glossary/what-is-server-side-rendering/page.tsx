import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is Server-Side Rendering (SSR)? | QUANT LAB USA",
    description:
        "SSR renders HTML on the server for each request, then hydrates on the client. Plain-English definition, when SSR vs SSG vs ISR. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-server-side-rendering" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Server-Side Rendering (SSR)",
    description:
        "SSR is the technique of generating a page's HTML on the server in response to each request, so the browser and search engines receive a fully formed page on first response.",
    url: "https://quantlabusa.dev/glossary/what-is-server-side-rendering",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is SSR?", item: "https://quantlabusa.dev/glossary/what-is-server-side-rendering" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does SSR stand for?", acceptedAnswer: { "@type": "Answer", text: "Server-Side Rendering. The server generates the page's HTML on each request and sends it to the browser ready to display." } },
        { "@type": "Question", name: "Is SSR better than CSR?", acceptedAnswer: { "@type": "Answer", text: "It depends on the page. SSR is better for SEO, first paint, and shareable URLs. Client-side rendering is fine for purely authenticated dashboards. Most real apps blend both." } },
        { "@type": "Question", name: "Does SSR slow down the server?", acceptedAnswer: { "@type": "Answer", text: "Each request does work on the server, so yes, it costs more compute than static files. Modern frameworks and edge runtimes keep that cost small enough to be invisible at most scales." } },
        { "@type": "Question", name: "What is hydration?", acceptedAnswer: { "@type": "Answer", text: "Hydration is the step where the server-rendered HTML is attached to client-side React or another framework, so the page becomes interactive after first paint." } },
        { "@type": "Question", name: "Does Google need SSR to index my site?", acceptedAnswer: { "@type": "Answer", text: "Googlebot can execute JavaScript, but it does so on a delayed queue and inconsistently. If SEO matters to your business, ship the important content as server-rendered HTML." } },
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
                        <li className="text-gray-300">What is SSR?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Software</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is Server-Side Rendering?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        Server-side rendering (SSR) is the technique of generating a page's full HTML on the server in response to each request and shipping it to the browser already populated with content, so users see something useful immediately and search engines can read what is on the page.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">A bit of history</h2>
                    <p>
                        For the first decade of the web, every page was server-rendered by
                        default — PHP, Rails, Django, ASP.NET all generated HTML on each
                        request. Around 2014 the industry pivoted to single-page applications,
                        where the server shipped an empty HTML shell and JavaScript built the
                        page in the browser. That gave us slick app-like experiences but cost
                        us SEO, social previews, and first-paint performance.
                    </p>
                    <p>
                        SSR is the pendulum swinging back. Frameworks like Next.js, Remix, and
                        SvelteKit let you keep the developer ergonomics of a component-based
                        SPA while still shipping real HTML on the first response — best of
                        both worlds, with a few footguns.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The four-way rendering matrix</h2>
                    <p>
                        SSR is one of four rendering strategies most modern frameworks offer.
                        Static generation builds HTML at build time and serves it from a CDN —
                        the fastest and cheapest option for content that does not change per
                        user. SSR builds HTML on each request — flexible, personalized, but
                        more expensive. Incremental static regeneration combines the two,
                        statically caching pages and refreshing them in the background. Client
                        rendering ships an empty shell and lets JavaScript build the page —
                        useful for highly interactive dashboards but bad for SEO.
                    </p>
                    <p>
                        Most real sites use all four in different places. Marketing pages are
                        static. Personalized dashboards are SSR or client-rendered. Lists of
                        listings that change daily use ISR.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Hydration — the part that confuses everyone</h2>
                    <p>
                        Once the server-rendered HTML arrives, the browser still needs
                        to attach event handlers and component state to the DOM so the
                        page becomes interactive. That step is called hydration, and
                        it is responsible for some of the worst performance footguns
                        in modern SSR. If you ship a megabyte of JavaScript to hydrate
                        a marketing page, the user waits behind a busy main thread
                        even though the HTML arrived fast. React Server Components
                        and the App Router introduced "selective hydration" that only
                        ships JavaScript for interactive components, which makes the
                        whole pattern dramatically cheaper.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why it matters</h2>
                    <p>
                        Three concrete reasons SSR matters to a founder. Search engines index
                        what they see on the first response — if your important content
                        depends on JavaScript that has not run yet, it does not exist as far
                        as Google is concerned. Social link previews on Twitter, LinkedIn, and
                        Slack are scraped without executing JavaScript — server-rendered open
                        graph tags are the only reliable way to control how your links look
                        when shared. And first-paint performance — the metric users actually
                        feel — is dramatically better when the HTML arrives ready to render.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Every public-facing page we ship is server-rendered by default. The site
                        you are reading is{" "}
                        <Link href="/glossary/what-is-nextjs" className="text-sky-400 hover:underline">Next.js</Link>{" "}
                        running on the App Router with React Server Components — the modern
                        evolution of SSR where most components run on the server and ship zero
                        JavaScript to the client. Our{" "}
                        <Link href="/services/web-applications" className="text-sky-400 hover:underline">web application work</Link>{" "}
                        and{" "}
                        <Link href="/services/saas-platform-development" className="text-sky-400 hover:underline">SaaS platforms</Link>{" "}
                        use the same approach.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Edge vs origin rendering</h2>
                    <p>
                        Modern hosting platforms let you choose where the server
                        rendering happens. Origin rendering runs in a single
                        region — typically a Node.js or Bun process colocated with
                        your database — which keeps data access fast but adds
                        round-trip latency for distant users. Edge rendering runs
                        at hundreds of points of presence worldwide on the
                        CDN's edge runtime, which is fast for users everywhere but
                        cannot use raw database connections and is constrained to
                        smaller runtime APIs. The decision is per-route, not
                        per-app, and the right answer usually mixes both.
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
                        <li><Link href="/glossary/what-is-nextjs" className="text-sky-400 hover:underline">What is Next.js?</Link></li>
                        <li><Link href="/glossary/what-is-jamstack" className="text-sky-400 hover:underline">What is JAMstack?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                        <li><Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">What is SaaS?</Link></li>
                        <li><Link href="/glossary/what-is-an-mvp" className="text-sky-400 hover:underline">What is an MVP?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Site stuck on a slow stack?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        Migrating off WordPress, an aging React SPA, or an offshore build?
                        We rebuild on a modern SSR stack and keep your SEO equity intact.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-ssr" />
                        <Link href="/services/web-applications" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Web application development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
