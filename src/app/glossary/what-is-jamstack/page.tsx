import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "What is JAMstack? Definition & Examples | QUANT LAB",
    description:
        "JAMstack is an architecture pattern — JavaScript, APIs, prerendered Markup. What it is, where it shines, where it does not, and how modern frameworks have evolved past it.",
    alternates: { canonical: "https://quantlabusa.dev/glossary/what-is-jamstack" },
};

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "JAMstack Architecture",
    description:
        "JAMstack is a web architecture pattern that decouples the frontend from the backend by pre-rendering pages to static assets and using JavaScript plus APIs for dynamic behavior.",
    url: "https://quantlabusa.dev/glossary/what-is-jamstack",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is JAMstack?", item: "https://quantlabusa.dev/glossary/what-is-jamstack" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does JAMstack stand for?", acceptedAnswer: { "@type": "Answer", text: "JavaScript, APIs, and Markup. The pattern: serve pre-rendered HTML from a CDN, add interactivity with JavaScript, and pull dynamic data from APIs at request time." } },
        { "@type": "Question", name: "Is JAMstack still a useful term in 2026?", acceptedAnswer: { "@type": "Answer", text: "The original phrasing is less common now. Modern frameworks like Next.js, Astro, and Remix have absorbed the ideas while adding SSR, ISR, and server components on top." } },
        { "@type": "Question", name: "Is a Next.js app a JAMstack app?", acceptedAnswer: { "@type": "Answer", text: "It can be. If you mostly statically generate pages and call APIs for dynamic data, you are doing JAMstack. If you use SSR or server components, you have moved past the original definition." } },
        { "@type": "Question", name: "What is the alternative to JAMstack?", acceptedAnswer: { "@type": "Answer", text: "Traditional server-rendered apps where every page runs server logic, or single-page apps where the browser builds everything. Both are still valid for the right problems." } },
        { "@type": "Question", name: "Is JAMstack good for SEO?", acceptedAnswer: { "@type": "Answer", text: "Yes. Pre-rendered HTML on a CDN is one of the fastest, most SEO-friendly architectures possible." } },
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
                        <li className="text-gray-300">What is JAMstack?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Software</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is JAMstack?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        JAMstack is a web architecture pattern — JavaScript on the client, APIs for dynamic data, and pre-rendered Markup served from a CDN — designed to make sites fast, secure, and cheap to scale by decoupling the rendering of pages from the runtime behavior of the application.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the term came from</h2>
                    <p>
                        The phrase was coined by Mathias Biilmann, co-founder of Netlify, around
                        2015. The original observation was that the LAMP stack (Linux, Apache,
                        MySQL, PHP) was overkill for content sites — you did not need a server
                        executing code on every page view if the page never changed between
                        deploys. Pre-render the HTML once, serve it from a CDN, and only call
                        backend services when you actually need fresh data.
                    </p>
                    <p>
                        For about five years, JAMstack was a strong rallying cry — it produced
                        Gatsby, Hugo, Eleventy, and a generation of CMS-driven marketing sites
                        that loaded instantly and never went down. By 2022 the lines blurred:
                        frameworks like Next.js, Remix, and Astro absorbed the ideas while
                        adding server-side rendering and edge runtime, and "JAMstack" as a
                        distinct label faded.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What the three letters mean</h2>
                    <p>
                        JavaScript handles interactivity in the browser — forms, animations,
                        anything that responds to user input. APIs provide everything dynamic —
                        product data, prices, user accounts, search — accessed at request time
                        from third-party or first-party services. Markup is the pre-rendered
                        HTML, generated at build time and served straight from a CDN, with
                        zero server-side computation needed for the page itself.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">The build, deploy, edge model</h2>
                    <p>
                        JAMstack-era thinking introduced a workflow most modern hosts
                        still use: source code lives in Git, a push triggers a build,
                        the build outputs static assets and serverless functions, and
                        the result is pushed to a global CDN. The deploy artifact is
                        the output, not the source. Rollbacks are instant because the
                        previous build is still on the CDN. Preview branches get their
                        own URL automatically. This is the operational model Vercel,
                        Netlify, and Cloudflare Pages all converged on, and it
                        outlived the JAMstack label.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where it wins and where it does not</h2>
                    <p>
                        JAMstack wins for content sites, documentation, marketing pages,
                        e-commerce catalogs that change at most a few times a day, and
                        anything where global performance matters more than per-user
                        personalization. It struggles when every page needs fresh,
                        personalized data — at that point you are calling APIs on every
                        request anyway, which negates much of the speed advantage.
                    </p>
                    <p>
                        Modern frameworks resolve this by letting you choose per page or per
                        component: static where it makes sense, server-rendered where you
                        need personalization, client-rendered for the truly interactive bits.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        We build on{" "}
                        <Link href="/glossary/what-is-nextjs" className="text-sky-400 hover:underline">Next.js</Link>{" "}
                        on Vercel, which is a direct descendant of the JAMstack architecture.
                        Marketing pages are statically generated, dashboards use{" "}
                        <Link href="/glossary/what-is-server-side-rendering" className="text-sky-400 hover:underline">server-side rendering</Link>,
                        and dynamic data comes from typed{" "}
                        <Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">APIs</Link>. Our{" "}
                        <Link href="/services/web-applications" className="text-sky-400 hover:underline">web application development</Link>{" "}
                        engagements default to this pattern.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Headless CMS as the back end</h2>
                    <p>
                        JAMstack popularized the headless CMS pattern — products
                        like Contentful, Sanity, Strapi, Storyblok, and Payload
                        store content and expose it through APIs, while the
                        front-end framework renders it. The editorial team gets a
                        nice authoring UI; the engineering team gets pre-rendered
                        pages and fast queries. Compared to monolithic WordPress
                        or Drupal, headless decouples content from presentation
                        and lets a single content base drive a website, mobile
                        app, and email program from one source.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-nextjs" className="text-sky-400 hover:underline">What is Next.js?</Link></li>
                        <li><Link href="/glossary/what-is-server-side-rendering" className="text-sky-400 hover:underline">What is SSR?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                        <li><Link href="/glossary/what-is-rest-vs-graphql" className="text-sky-400 hover:underline">REST vs GraphQL</Link></li>
                        <li><Link href="/glossary/what-is-saas" className="text-sky-400 hover:underline">What is SaaS?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Picking the right architecture?</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        We help founders choose between static, server-rendered, and hybrid
                        approaches based on what your product actually needs. Book a 30-minute
                        consultation.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-jamstack" />
                        <Link href="/services/web-applications" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Web application development
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
