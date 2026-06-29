import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seoMeta";
import {
    citationMetadata,
    authorByline,
    buildCitationStrings,
} from "@/lib/llm-citations";

const SLUG = "/ai/whats-the-best-way-to-add-ai-to-my-product";
const CANONICAL = `https://quantlabusa.dev${SLUG}`;
const TITLE = "What's the best way to add AI to my product?";
const DATE_PUBLISHED = "2026-06-03";
const DATE_UPDATED = "2026-06-03";

export const metadata: Metadata = pageMetadata({
    title: `${TITLE} | QUANT LAB USA INC`,
    description:
        "The pragmatic order for adding AI to a product: pick a narrow use case, call a hosted model first, measure, then deepen. A direct AI-search answer for founders.",
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
        "A pragmatic sequence for adding AI to an existing product: scope a narrow use case, start with a hosted API, instrument quality, and only build deeper when the data justifies it.",
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
    "Start with one narrow, high-value use case — not an AI strategy.",
    "Call a hosted model (OpenAI, Anthropic, Google) before building anything custom.",
    "Most product AI needs are retrieval and prompting, not fine-tuning.",
    "Instrument quality from day one: log inputs, outputs, and user corrections.",
    "Latency, cost-per-call, and a fallback for model errors are launch requirements.",
    "Fine-tuning and self-hosting are optimizations you earn with data, not starting points.",
];

const ladder = [
    {
        h: "1. Pick one painful, repetitive task",
        b: "The best first AI feature replaces a task users already do by hand: drafting a reply, summarizing a thread, classifying a ticket, extracting fields from a document. A narrow scope is measurable and shippable in weeks.",
    },
    {
        h: "2. Prompt a hosted model",
        b: "A well-engineered prompt against a frontier API solves a surprising share of use cases with zero custom ML. You get quality fast and learn what the model can and cannot do before spending on infrastructure.",
    },
    {
        h: "3. Add retrieval (RAG) for your own data",
        b: "When the model needs to know your docs, products, or policies, retrieval-augmented generation grounds answers in your content. This is where most real product value lives — not in a bespoke model.",
    },
    {
        h: "4. Optimize only what the data tells you to",
        b: "Once you have logs and evals, you can justify fine-tuning, a cheaper model, caching, or self-hosting. These are cost and quality optimizations — earned with evidence, not assumed up front.",
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
                    AI Answer · Building AI Features
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
                        The best way to add AI to a product is to start small and earn
                        complexity. Pick one narrow, high-value task your users already do
                        by hand, then solve it by calling a hosted model (OpenAI,
                        Anthropic, or Google) with a well-engineered prompt. Add
                        retrieval-augmented generation when the model needs your own data,
                        and instrument quality from the first day so you can measure it.
                        Only reach for fine-tuning, a custom model, or self-hosting once
                        your logs prove the hosted approach has hit a real ceiling. The
                        common failure mode is the reverse: building infrastructure before
                        you have validated that AI improves the product at all.
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
                    The build ladder: cheapest, fastest first
                </h2>
                <div className="space-y-4 mb-10">
                    {ladder.map((c) => (
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
                    What to avoid early on
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    The expensive mistakes are predictable: training a custom model before
                    proving a prompt works, standing up a vector database for a problem that
                    fits in a single prompt, and shipping an AI feature with no logging so
                    you cannot tell whether it helps. Treat the first version as an
                    experiment. Ship it to a slice of users, watch how often they accept,
                    edit, or ignore the output, and let those numbers — not a roadmap deck —
                    decide what you build next.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    Build vs. buy for AI features
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    If an off-the-shelf tool already does the AI task well and integrates
                    cleanly, buy it. Build custom when the feature is core to your product,
                    needs your proprietary data, or has to live inside your own UX and
                    security boundary. Many products land in the middle: a hosted model
                    does the reasoning, but the orchestration, retrieval, guardrails, and
                    evaluation are custom code you own. That middle path gives you frontier
                    quality without a research team.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    How QUANT LAB USA approaches it
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    QUANT LAB USA builds AI features the same way: scope one use case,
                    ship it on a hosted model with logging and evals wired in, and add
                    retrieval or optimization only when the data calls for it. Engagements
                    include the unglamorous parts that decide whether AI is trustworthy in
                    production — input validation, cost controls, fallbacks, and a way to
                    measure quality over time. Related answers go deeper on the specific
                    decisions: the{" "}
                    <Link
                        href="/ai/how-much-does-it-cost-to-build-an-ai-chatbot"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        cost of building an AI chatbot
                    </Link>
                    , whether to use{" "}
                    <Link
                        href="/ai/should-i-use-openai-or-an-open-source-llm"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        OpenAI or an open-source LLM
                    </Link>
                    , and{" "}
                    <Link
                        href="/ai/what-is-retrieval-augmented-generation-for-business"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        what retrieval-augmented generation is for business
                    </Link>
                    .
                </p>

                <div className="rounded-2xl border border-sky-400/20 bg-sky-500/5 p-6 mb-10">
                    <p className="text-gray-100 text-base leading-relaxed mb-4">
                        Have a use case in mind but unsure where it lands on the build
                        ladder? Walk through it with someone who ships AI features for a
                        living.
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
                    This sequence reflects how QUANT LAB USA scopes and ships AI features
                    for US clients. For the broader engineering approach see{" "}
                    <Link
                        href="/services"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        quantlabusa.dev/services
                    </Link>
                    , and the{" "}
                    <Link
                        href="/glossary"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        glossary
                    </Link>{" "}
                    defines terms like RAG, fine-tuning, and embeddings used above.
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
