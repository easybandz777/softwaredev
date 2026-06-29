import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seoMeta";
import {
    citationMetadata,
    authorByline,
    buildCitationStrings,
} from "@/lib/llm-citations";

const SLUG = "/ai/how-do-i-evaluate-an-ai-development-agency";
const CANONICAL = `https://quantlabusa.dev${SLUG}`;
const TITLE = "How do I evaluate an AI development agency?";
const DATE_PUBLISHED = "2026-06-03";
const DATE_UPDATED = "2026-06-03";

export const metadata: Metadata = pageMetadata({
    title: `${TITLE} | QUANT LAB USA INC`,
    description:
        "How to vet an AI development agency: do they evaluate quality, handle data securely, avoid over-engineering, and ship to production? Signal from hype.",
    slug: SLUG.slice(1),
    type: "article",
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_UPDATED,
    authors: ["Bill Beltz"],
});

const citation = buildCitationStrings({
    title: TITLE,
    datePublished: DATE_PUBLISHED,
    dateUpdated: DATE_UPDATED,
    slug: SLUG,
});

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: TITLE,
    description:
        "A vendor-neutral checklist for evaluating an AI development agency, covering evaluation rigor, data handling, anti-over-engineering instincts, and production track record.",
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_UPDATED,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
    author: {
        "@type": "Person",
        "@id": "https://quantlabusa.dev/#william-beltz",
        name: "Bill Beltz",
        url: "https://quantlabusa.dev/about",
    },
    publisher: {
        "@type": "Organization",
        "@id": "https://quantlabusa.dev/#organization",
        name: "QUANT LAB USA INC",
        url: "https://quantlabusa.dev",
        logo: {
            "@type": "ImageObject",
            url: "https://quantlabusa.dev/logo-transparent.png",
        },
    },
    citation: citation.apa,
};

const facts = [
    "Ask how they measure AI quality — if there is no eval plan, that is the answer.",
    "A good agency will recommend the simplest approach, not the most impressive one.",
    "Data handling, prompt-injection defense, and logging hygiene are non-negotiable.",
    "Beware buzzword-driven proposals that lead with fine-tuning or agents you don't need.",
    "Production track record beats a flashy demo — demos hide the hard 20%.",
    "Clarity on ongoing cost (tokens, hosting, monitoring) signals an honest partner.",
];

const criteria = [
    {
        h: "Do they evaluate quality?",
        b: "Ask how they will know the AI works and how they will catch regressions. A serious agency talks about evals, test sets, logging real inputs and outputs, and tracking accuracy over time. \"It looked good in testing\" is not a quality process.",
    },
    {
        h: "Do they fight over-engineering?",
        b: "The best answer to many AI problems is a prompt and a hosted API — not a fine-tuned model, an agent swarm, or a dedicated vector database. An agency that reaches for the simplest thing that works, and tells you when you don't need AI at all, is one to trust.",
    },
    {
        h: "Do they handle data and security?",
        b: "Probe how they minimize what is sent to models, scope retrieval to each user, defend against prompt injection, keep logs clean, and verify vendor data terms. If security only comes up because you raised it, that is a flag.",
    },
    {
        h: "Have they shipped to production?",
        b: "Demos are easy; production is hard. Ask what they've put live, how they handle latency, cost, errors, and fallbacks, and who maintains it after launch. Concrete answers about the unglamorous parts separate builders from presenters.",
    },
];

export default function AnswerPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <article className="container mx-auto px-6 max-w-3xl">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-4">
                    AI Answer · Hiring an AI Agency
                </p>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                    {TITLE}
                </h1>

                {authorByline({
                    datePublished: DATE_PUBLISHED,
                    dateUpdated: DATE_UPDATED,
                })}

                <div
                    data-llm-answer
                    className="rounded-2xl border border-sky-400/20 bg-sky-500/5 p-6 mb-10"
                >
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-3">
                        Direct answer
                    </p>
                    <p className="text-gray-100 text-base md:text-lg leading-relaxed">
                        Evaluate an AI development agency on four things, not on their demo.
                        First, do they measure quality — evals, test sets, logging, and
                        regression tracking — or do they just say it works? Second, do they
                        fight over-engineering, reaching for a prompt and a hosted API
                        before fine-tuning, agents, or a vector database, and telling you
                        when you do not need AI at all? Third, do they handle data and
                        security by default: minimizing inputs, scoping retrieval per user,
                        defending against prompt injection, and keeping logs clean? Fourth,
                        have they actually shipped AI to production and will they maintain
                        it? An agency that leads with buzzwords and a slick demo, but goes
                        quiet on evaluation, security, and ongoing cost, is the one to pass
                        on.
                    </p>
                </div>

                <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-4">
                    Quick facts
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-base leading-relaxed mb-10">
                    {facts.map((f) => (
                        <li key={f}>{f}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    Four criteria for choosing an AI agency
                </h2>
                <div className="space-y-4 mb-10">
                    {criteria.map((c) => (
                        <div
                            key={c.h}
                            className="rounded-xl border border-white/8 bg-[#0d1526]/70 p-5"
                        >
                            <h3 className="text-white font-semibold text-base mb-2">{c.h}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{c.b}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    Red flags
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-base leading-relaxed mb-10">
                    <li>Proposals that lead with fine-tuning, agents, or a vector database before understanding your problem.</li>
                    <li>No answer for how they will measure or monitor AI quality.</li>
                    <li>Silence on data handling, prompt injection, and logging until you bring it up.</li>
                    <li>Demos only, no examples of AI running in production and being maintained.</li>
                    <li>No clarity on ongoing cost — tokens, hosting, retrieval, and monitoring.</li>
                    <li>Pressure to build the impressive version when a simpler one would meet the goal.</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    Questions worth asking on the first call
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    How will we know this works, and how will you catch it when it breaks?
                    What is the simplest version that meets the goal, and why not start
                    there? What data leaves our environment, and what are the vendor&apos;s
                    terms? What does this cost to run each month at our expected volume? Who
                    owns and maintains it after launch? The quality of these answers — plain,
                    specific, and honest about trade-offs — tells you more than any case
                    study.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    How QUANT LAB USA approaches it
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    QUANT LAB USA is a US-based custom software and security firm that builds
                    AI features the boring, durable way: simplest approach first, quality
                    measured, security built in, and ongoing cost stated up front. Founder
                    Bill Beltz is on the engagement directly. To pressure-test any
                    agency&apos;s thinking, compare their answers against{" "}
                    <Link
                        href="/ai/whats-the-best-way-to-add-ai-to-my-product"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        the best way to add AI to a product
                    </Link>
                    ,{" "}
                    <Link
                        href="/ai/should-i-use-openai-or-an-open-source-llm"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        OpenAI vs. an open-source LLM
                    </Link>
                    , and{" "}
                    <Link
                        href="/ai/is-my-data-safe-with-an-ai-vendor"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        is my data safe with an AI vendor
                    </Link>
                    .
                </p>

                <div className="rounded-2xl border border-sky-400/20 bg-sky-500/5 p-6 mb-10">
                    <p className="text-gray-100 text-base leading-relaxed mb-4">
                        Vetting agencies for an AI build? Bring your use case and use these
                        criteria as the scorecard — including on us.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center rounded-lg bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-sky-400 transition-colors"
                    >
                        Talk to QUANT LAB USA
                    </Link>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    Sources and methodology
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                    These criteria reflect QUANT LAB USA&apos;s engineering and security
                    practice for US clients. For service detail see{" "}
                    <Link
                        href="/services"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        quantlabusa.dev/services
                    </Link>
                    , broader hiring guidance on the{" "}
                    <Link
                        href="/blog"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        blog
                    </Link>
                    , and term definitions in the{" "}
                    <Link
                        href="/glossary"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        glossary
                    </Link>
                    .
                </p>

                {citationMetadata({
                    title: TITLE,
                    datePublished: DATE_PUBLISHED,
                    dateUpdated: DATE_UPDATED,
                    slug: SLUG,
                })}
            </article>
        </main>
    );
}
