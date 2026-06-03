import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";

export const metadata: Metadata = {
    title: "What is a CDN? Content Delivery Networks Explained | QUANT LAB USA",
    description:
        "A CDN serves your content from servers near each user so pages load fast worldwide. Plain-English definition and how it works — by QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-a-cdn" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "CDN (Content Delivery Network)",
    description:
        "A CDN is a globally distributed network of servers that caches and serves a website's content from a location physically close to each visitor, reducing latency and offloading traffic from the origin server.",
    url: "https://quantlabusa.dev/glossary/what-is-a-cdn",
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
            name: "What is a CDN?",
            item: "https://quantlabusa.dev/glossary/what-is-a-cdn",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What does CDN stand for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "CDN stands for Content Delivery Network. It is a worldwide network of servers that store copies of your site's content close to your users so it loads faster than fetching everything from a single origin server.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between a CDN and a web host?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A web host is the origin where your application and its true data live. A CDN sits in front of the host and serves cached copies of content from edge locations near each visitor. The host runs the app; the CDN speeds up its delivery.",
            },
        },
        {
            "@type": "Question",
            name: "Does a CDN only serve images and static files?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Historically yes, but modern CDNs also cache HTML, accelerate API responses, and even run code at the edge. Static assets like images, scripts, and stylesheets remain the most common and highest-impact thing to serve from a CDN.",
            },
        },
        {
            "@type": "Question",
            name: "What is cache invalidation in a CDN?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Cache invalidation is telling the CDN that a cached copy is stale so it fetches a fresh version. It is handled through expiration times and explicit purges, and getting it right is what keeps users from seeing outdated content after a deploy.",
            },
        },
        {
            "@type": "Question",
            name: "Does a CDN improve security?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Often, yes. By absorbing traffic at the edge, a CDN can blunt distributed denial-of-service attacks, and many include TLS termination and a web application firewall. It is a meaningful layer of protection in front of your origin.",
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
                        <li className="text-gray-300">What is a CDN?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Glossary · Software
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What is a CDN?
                    </h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A CDN (Content Delivery Network) is a globally distributed network of servers that stores copies of your site&apos;s content close to each visitor — so a page loads from a machine a few miles away instead of one across the world, making it dramatically faster.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What a CDN means</h2>
                    <p>
                        A <strong>CDN</strong> is a layer of cache servers spread across the globe,
                        positioned in data centers near where people actually are. Your real application
                        lives at the <em>origin</em> — a single host or region — but if every visitor had
                        to reach that one location, users on the far side of the planet would wait while
                        their requests crossed oceans. A CDN solves that by keeping copies of your content
                        at <em>edge locations</em> close to users, so most requests are answered locally.
                    </p>
                    <p>
                        The result is faster page loads, lower latency, and far less traffic hitting your
                        origin server. The CDN absorbs the bulk of the load and hands your origin only the
                        requests it truly needs to handle, which both speeds up the experience and makes
                        the whole system cheaper and more resilient to traffic spikes.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it came from</h2>
                    <p>
                        CDNs emerged in the late 1990s, with Akamai a pioneer of the model, to solve a
                        problem the early web was straining against: a popular site served from one
                        location could not deliver images and downloads fast enough to a global audience.
                        Pushing content out to servers near users fixed the speed-of-light bottleneck that
                        no amount of origin horsepower could overcome.
                    </p>
                    <p>
                        Over the decades CDNs expanded well beyond static files. Today they cache dynamic
                        content, terminate encryption, filter malicious traffic, and run application code
                        at the edge. What began as a way to deliver big files quickly has become a core
                        layer of modern web architecture that touches performance, security, and
                        reliability all at once.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How it works</h2>
                    <p>
                        When a visitor requests a file, the request is routed to the nearest edge server.
                        If that server already has a fresh copy in its cache, it returns it immediately — a{" "}
                        <em>cache hit</em>. If not, it fetches the file from your origin once, stores it,
                        and serves it; every later visitor in that region then gets the cached copy. Each
                        cached item carries an expiration time that controls how long the edge may keep
                        serving it before checking back with the origin.
                    </p>
                    <p>
                        The tricky part is <em>cache invalidation</em> — making sure users see new content
                        after you change it. This is handled with expiration headers, content-hashed file
                        names that change whenever the file does, and explicit <em>purges</em> that tell the
                        CDN to drop a cached copy right away. Get it right and deploys are instant and
                        consistent; get it wrong and users see stale pages. Many CDNs also run logic at the
                        edge, letting you rewrite requests, do redirects, or personalize responses close to
                        the user.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">When it matters</h2>
                    <p>
                        A CDN matters any time your audience is geographically spread, your pages carry
                        meaningful images or scripts, or you care about load times — which, for anything
                        public-facing, you should, because speed directly affects conversion and search
                        ranking. It is also a frontline defense: by absorbing traffic at the edge, a CDN
                        blunts denial-of-service attacks before they reach your origin. For a small,
                        single-region internal tool the benefit is modest, but for nearly any customer-facing
                        site, a CDN is one of the cheapest, highest-impact performance upgrades available.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Every site we ship is served through a CDN, and for the Next.js apps we build it is
                        largely automatic. The framework fingerprints static assets so they can be cached
                        forever at the edge and invalidated cleanly on each deploy, and our hosting serves
                        pages and assets from edge locations worldwide by default. The practical effect is
                        that a client&apos;s{" "}
                        <Link href="/services/web-applications" className="text-sky-400 hover:underline">web application</Link> feels fast
                        to a user in Sydney and a user in Atlanta alike, with no extra work on the client&apos;s part.
                    </p>
                    <p>
                        When we design{" "}
                        <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:underline">cloud infrastructure</Link> for a
                        client, we set the caching rules deliberately — long lifetimes for fingerprinted
                        assets, careful purge logic for content that changes, and edge TLS to keep the
                        connection secure and fast. Used well, the CDN does double duty as a performance
                        layer and a first line of security in front of the origin.
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
                        <li><Link href="/glossary/what-is-a-load-balancer" className="text-sky-400 hover:underline">What is a load balancer?</Link></li>
                        <li><Link href="/glossary/what-is-serverless" className="text-sky-400 hover:underline">What is serverless?</Link></li>
                        <li><Link href="/glossary/what-is-server-side-rendering" className="text-sky-400 hover:underline">What is server-side rendering?</Link></li>
                        <li><Link href="/glossary/what-is-nextjs" className="text-sky-400 hover:underline">What is Next.js?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Talk to the engineer who would build it</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        If you want a 30-minute conversation about making your site fast worldwide
                        and resilient at the edge — not a pitch — book a call.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-cdn" />
                        <Link href="/services/web-applications" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Web applications
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
