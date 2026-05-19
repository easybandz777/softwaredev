import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "Software Technology FAQs: Stack & AI Choices | QUANT LAB USA",
    description:
        "Real answers on React vs Next.js, Next.js SEO, Stripe Connect, Postgres vs MongoDB, AI integration, serverless vs containers, auth, security, and 2026 MVP stacks.",
    openGraph: {
        title: "Software Technology FAQs: Stack & AI Choices | QUANT LAB USA",
        description:
            "Real answers on React vs Next.js, Next.js SEO, Stripe Connect, Postgres vs MongoDB, AI integration, serverless vs containers, and 2026 MVP stacks.",
        url: "https://quantlabusa.dev/faq/technology",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Software Technology FAQs: Stack & AI Choices | QUANT LAB USA",
        description:
            "Honest stack-choice answers on Next.js, Stripe, Postgres, AI integration, serverless vs containers, and 2026 MVP stacks.",
    },
    alternates: {
        canonical: "https://quantlabusa.dev/faq/technology",
    },
};

const qas = [
    {
        q: "What is the difference between React and Next.js?",
        a: "React is a JavaScript library for building UI components — it renders on the client by default. Next.js is a full framework built on React that adds server-side rendering, static generation, file-based routing, API routes, image optimization, and middleware. React alone is a UI layer; Next.js is a production application stack. We use Next.js for almost every project.",
    },
    {
        q: "Is Next.js good for SEO?",
        a: "Yes — Next.js is excellent for SEO. Server-side rendering and static generation give Google crawlable HTML on first request, not a blank shell waiting for JavaScript. App Router supports built-in metadata, sitemaps, robots.txt, structured data, and Core Web Vitals optimizations. Plain React SPAs without SSR routinely tank in organic search. Next.js fixes that by default.",
    },
    {
        q: "Why do you use Next.js for production apps?",
        a: "Next.js gives us SSR for SEO, file-based routing, API routes, image optimization, middleware, and incremental static regeneration in one framework. It deploys cleanly to Vercel or any Node host. The App Router with React Server Components moves data fetching to the server, reducing client JavaScript and improving Core Web Vitals. It's the production sweet spot in 2026.",
    },
    {
        q: "When should we use Stripe vs Stripe Connect?",
        a: "Use plain Stripe when you charge customers directly for your own products or services. Use Stripe Connect when you operate a marketplace, platform, or SaaS that pays third parties — like Uber paying drivers, Etsy paying sellers, or a SaaS splitting revenue with creators. Connect handles KYC, 1099s, and payouts; standard Stripe doesn't.",
    },
    {
        q: "Should we use Postgres or MongoDB?",
        a: "Use Postgres for almost everything in 2026 — it handles relational data, JSON columns, full-text search, geospatial queries, and analytics. Use MongoDB only when your data is genuinely schemaless and you're willing to give up SQL joins, ACID transactions across collections, and strong consistency. Most projects we audit on MongoDB would be cheaper, faster, and saner on Postgres.",
    },
    {
        q: "What's your approach to AI integration?",
        a: "We integrate Claude, GPT-4, and open-source models where they solve a real product problem — not because AI is trendy. Common patterns: structured extraction, summarization, classification, RAG over your docs, and copilot-style assistants. We always add evaluations, fallbacks, and prompt-injection defenses. Token costs and latency get measured before launch, not after the bill arrives.",
    },
    {
        q: "Should startups use serverless or containers?",
        a: "Use serverless (Vercel, Lambda, Cloudflare Workers) for almost everything early-stage — zero ops, scales to zero, predictable pricing under low load. Move to containers (ECS, GKE, Fly.io) when you hit serverless cold-start pain, need long-running workers, or your serverless bill exceeds container TCO. For 90 percent of MVPs, serverless on Vercel is the right answer.",
    },
    {
        q: "What's the difference between custom software and SaaS?",
        a: "SaaS is software-as-a-service — you rent a multi-tenant product (Salesforce, HubSpot, Shopify) at a monthly fee. Custom software is built specifically for your business and owned by you, hosted however you want. SaaS is faster and cheaper for common needs. Custom wins when your workflow doesn't fit a SaaS template, or when SaaS lock-in becomes a strategic risk.",
    },
    {
        q: "How do you handle authentication and security?",
        a: "We use proven libraries — Auth.js, Clerk, or Supabase Auth — never roll our own crypto. Passwords use bcrypt or Argon2. Sessions use HTTP-only cookies. Sensitive routes get rate limits and CSRF protection. We default to least-privilege roles, log security-relevant events, and run dependency audits in CI. Every project gets a written threat model in discovery.",
    },
    {
        q: "What's the right tech stack for an MVP in 2026?",
        a: "Our default 2026 MVP stack: Next.js 16 (App Router), TypeScript strict, Tailwind v4, Postgres (Neon or Supabase), Drizzle or Prisma ORM, Stripe for payments, Resend for email, Auth.js or Clerk for auth, Vercel for hosting, Sentry for errors. Boring, battle-tested, and ships fast. We adjust only when a real product constraint demands it.",
    },
];

const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "Software Technology FAQs",
    url: "https://quantlabusa.dev/faq/technology",
    publisher: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    mainEntity: qas.map((qa) => ({
        "@type": "Question",
        name: qa.q,
        acceptedAnswer: { "@type": "Answer", text: qa.a },
    })),
};

export default function FAQTechnologyPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
            />

            <section className="pt-32 pb-10 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-quant-blue/8 rounded-full blur-[160px] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "FAQ", href: "/faq" },
                            { label: "Technology" },
                        ]}
                    />
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                        FAQ · Technology
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Software Technology FAQs
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                        Ten direct answers on the stack choices that actually matter —
                        React vs Next.js, Stripe vs Stripe Connect, Postgres vs Mongo,
                        AI integration, serverless vs containers, and the 2026 MVP
                        default stack.
                    </p>
                </div>
            </section>

            <section className="pb-16 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="space-y-4">
                        {qas.map((qa, idx) => (
                            <article
                                key={idx}
                                className="rounded-xl border border-white/8 bg-[#0d1526]/60 backdrop-blur-sm p-5 md:p-6"
                            >
                                <h2 className="text-lg md:text-xl font-semibold text-white leading-snug mb-3">
                                    {qa.q}
                                </h2>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed m-0">
                                    {qa.a}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-12 rounded-2xl border border-white/8 bg-[#0d1526]/40 p-6 md:p-8">
                        <h3 className="text-xl font-semibold text-white mb-3">
                            Browse all FAQ categories
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                            <Link
                                href="/faq/cost"
                                className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:border-sky-400/40 hover:text-sky-300 transition-colors"
                            >
                                Cost
                            </Link>
                            <Link
                                href="/faq/process"
                                className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:border-sky-400/40 hover:text-sky-300 transition-colors"
                            >
                                Process
                            </Link>
                            <Link
                                href="/faq/hiring"
                                className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:border-sky-400/40 hover:text-sky-300 transition-colors"
                            >
                                Hiring
                            </Link>
                            <Link
                                href="/faq/working-with-us"
                                className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:border-sky-400/40 hover:text-sky-300 transition-colors"
                            >
                                Working With Us
                            </Link>
                            <Link
                                href="/faq"
                                className="px-4 py-2 rounded-full border border-sky-400/30 bg-sky-500/5 text-sky-300 hover:bg-sky-500/10 transition-colors"
                            >
                                ← All FAQs
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Pick a stack you can defend in 5 years
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Boring, battle-tested, well-maintained. Tell us what you're
                        building and we'll recommend the simplest stack that will still
                        be alive when you renew the contract.
                    </p>
                    <ConsultationCTA label="Book a Consultation" />
                </div>
            </section>
        </main>
    );
}
