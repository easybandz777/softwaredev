import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata: Metadata = pageMetadata({
    title: "What is a Tech Stack? Definition, Examples & Choices | QUANT LAB",
    description:
        "A tech stack is the full collection of languages, frameworks, databases, infrastructure, and services that run your product. What it includes, why the choice compounds, and how QUANT LAB picks one for you.",
    slug: "/glossary/what-is-a-tech-stack",
});

const definedTermSchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: "Tech Stack",
    description:
        "A tech stack is the layered combination of programming languages, frameworks, databases, infrastructure, and third-party services that make a software product run end to end.",
    url: "https://quantlabusa.dev/glossary/what-is-a-tech-stack",
    inDefinedTermSet: "https://quantlabusa.dev/glossary",
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Glossary", item: "https://quantlabusa.dev/glossary" },
        { "@type": "ListItem", position: 3, name: "What is a tech stack?", item: "https://quantlabusa.dev/glossary/what-is-a-tech-stack" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        { "@type": "Question", name: "What does \"tech stack\" mean?", acceptedAnswer: { "@type": "Answer", text: "A tech stack is the layered combination of programming languages, frameworks, databases, hosting providers, and third-party services a software product depends on to run end to end." } },
        { "@type": "Question", name: "What are the layers of a tech stack?", acceptedAnswer: { "@type": "Answer", text: "Typically: client (browser or mobile), frontend framework, backend language and framework, database, infrastructure and hosting, plus observability, auth, billing, and email vendors stitched on top." } },
        { "@type": "Question", name: "What is the MERN stack?", acceptedAnswer: { "@type": "Answer", text: "MERN is shorthand for MongoDB, Express, React, and Node — a popular JavaScript-only stack of the late 2010s. It still has a following but has lost ground to TypeScript-first stacks built around Next.js and Postgres." } },
        { "@type": "Question", name: "Does the tech stack really matter?", acceptedAnswer: { "@type": "Answer", text: "Yes — but not for the reasons most founders think. The performance ceiling of any modern stack is high enough to ship a great product; the differences that matter are hiring market, ecosystem maturity, and how cleanly the stack lets you change your mind in year three." } },
        { "@type": "Question", name: "What stack does QUANT LAB use?", acceptedAnswer: { "@type": "Answer", text: "Our default is Next.js and TypeScript on the frontend, a Node or Python backend, Postgres for the database, Stripe for billing, and Vercel or AWS for hosting. We deviate when the workload — heavy ML, real-time gaming, embedded — demands it." } },
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
                        <li className="text-gray-300">What is a tech stack?</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">Glossary · Software</span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">What is a Tech Stack?</h1>
                    <p className="text-lg text-white font-semibold leading-relaxed border-l-2 border-sky-400 pl-4">
                        A tech stack is the entire layered set of languages, frameworks, databases, infrastructure, and vendored services that together make a software product work — from the browser tab the user clicked to the cloud region the bytes ultimately live in.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Where the phrase came from</h2>
                    <p>
                        The word "stack" comes from the way software historically slotted on top of itself — a database on the bottom, an application server on top of it, a web server on top of that, a browser at the very top. Early-2000s shorthand like LAMP (Linux, Apache, MySQL, PHP) and the .NET stack (Windows, IIS, SQL Server, ASP) packaged those choices into a single noun a hiring manager could put in a job ad. The word stuck even though modern products rarely look like a clean four-layer tower anymore — they look more like a constellation of services that talk to each other over the network.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What is actually inside one</h2>
                    <p>
                        A real-world stack today has at least six layers and usually nine or ten. The frontend layer — the framework the browser runs — is typically React with <Link href="/glossary/what-is-nextjs" className="text-sky-400 hover:underline">Next.js</Link>, Vue with Nuxt, or Svelte with SvelteKit. The backend is a Node, Python, Go, or Ruby runtime exposing an <Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">API</Link>. The data layer is almost always Postgres or MySQL, with a key-value store like Redis bolted on for caching. The infrastructure layer is a cloud provider — AWS, GCP, Azure, or a platform like Vercel or Fly.
                    </p>
                    <p>
                        On top of that core sit the vendored capabilities almost nobody builds in-house anymore: authentication (Auth0, Clerk, or a roll-your-own with <Link href="/glossary/what-is-oauth2" className="text-sky-400 hover:underline">OAuth 2</Link>), billing (Stripe), transactional email (Resend, Postmark, SendGrid), error monitoring (Sentry), and analytics. The "stack" is the union of all of it. Founders who only list React and Postgres on their architecture diagram are usually missing the six other vendors that will appear on their AWS bill within a year.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Why the choice compounds</h2>
                    <p>
                        Every stack decision becomes harder to reverse over time. The first time someone writes a Postgres-specific query, your "database-agnostic" plan is half dead. The first time a TypeScript type bleeds across the frontend-backend boundary, you have committed to TypeScript on both sides for the foreseeable future. By the time you have ten engineers shipping daily, switching a major layer means six months of work nobody is paid to enjoy. The right time to make stack decisions deliberately is at the very start — and to bias toward boring, well-supported choices that thousands of people have already used to solve your problem.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Hiring market beats benchmarks</h2>
                    <p>
                        The single most under-appreciated factor in stack choice is how many engineers near you can actually use it. Elixir is a beautiful language. There are maybe four senior Elixir engineers in your city. Rust is fast. The talent pool that can ship Rust web services is small. JavaScript, TypeScript, Python, Go, and Ruby cover roughly nine out of ten production codebases globally and have a deep enough hiring market that you can almost always find someone. Save the exotic stack for the one component that genuinely benefits from it.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10 prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">At QUANT LAB</h2>
                    <p>
                        Our default stack for <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">custom business software</Link> is Next.js and TypeScript on the frontend, a Node or Python backend, Postgres with row-level security for the database, Stripe for billing, and Vercel or AWS for hosting. We deviate when the workload genuinely demands it — heavy machine learning workloads push us toward Python and managed GPU infrastructure, real-time products like trading systems pull us into Go or Rust where latency matters in microseconds.
                    </p>
                    <p>
                        The first thing we do on a new engagement is a one-day <Link href="/contact" className="text-sky-400 hover:underline">stack review</Link> — what we would pick, why, and which vendored services we recommend so you do not have to make twenty separate buy decisions in your first quarter. Read our <Link href="/blog/nextjs-vs-remix-vs-sveltekit-2026" className="text-sky-400 hover:underline">Next.js vs Remix vs SvelteKit comparison</Link> for the reasoning behind one of those defaults, or our <Link href="/blog/2026-state-of-custom-software-development" className="text-sky-400 hover:underline">2026 state of custom software</Link> piece for the broader picture.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Related terms</h2>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm">
                        <li><Link href="/glossary/what-is-nextjs" className="text-sky-400 hover:underline">What is Next.js?</Link></li>
                        <li><Link href="/glossary/what-is-jamstack" className="text-sky-400 hover:underline">What is Jamstack?</Link></li>
                        <li><Link href="/glossary/what-is-microservices-architecture" className="text-sky-400 hover:underline">What is microservices architecture?</Link></li>
                        <li><Link href="/glossary/what-is-a-monorepo" className="text-sky-400 hover:underline">What is a monorepo?</Link></li>
                        <li><Link href="/glossary/what-is-an-api" className="text-sky-400 hover:underline">What is an API?</Link></li>
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-12 border border-white/10 rounded-2xl p-6 bg-white/[0.02]">
                    <h2 className="text-xl font-bold text-white mb-3">Picking your stack? Talk to an engineer first</h2>
                    <p className="text-sm text-gray-300 mb-5 leading-relaxed">
                        Thirty minutes is enough to map your product to a sensible stack — and to flag the three vendor decisions you will regret if you defer them.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <ConsultationCTA source="glossary-tech-stack" />
                        <Link href="/services/custom-business-software" className="inline-flex items-center px-6 py-3 rounded-full border border-white/15 text-sm font-medium text-gray-200 hover:bg-white/5 transition-colors">
                            Custom business software
                        </Link>
                    </div>
                </AnimatedSection>
            </article>
        </main>
    );
}
