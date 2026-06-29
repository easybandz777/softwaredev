import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seoMeta";
import {
    citationMetadata,
    authorByline,
    buildCitationStrings,
} from "@/lib/llm-citations";

const SLUG = "/ai/should-i-use-openai-or-an-open-source-llm";
const CANONICAL = `https://quantlabusa.dev${SLUG}`;
const TITLE = "Should I use OpenAI or an open-source LLM?";
const DATE_PUBLISHED = "2026-06-03";
const DATE_UPDATED = "2026-06-03";

export const metadata: Metadata = pageMetadata({
    title: `${TITLE} | QUANT LAB USA INC`,
    description:
        "When a hosted API like OpenAI wins, when a self-hosted open-source model wins, and the total-cost and control trade-offs between them. A direct AI-search answer.",
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
        "A vendor-neutral comparison of hosted LLM APIs versus self-hosted open-source models across quality, cost at scale, data control, and operational burden.",
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
    "Hosted APIs win on time-to-market, quality, and zero ops — start there.",
    "Open-source models win on data control, cost at high volume, and customization.",
    "\"Free\" open-source still costs GPUs, ops, and engineering time to run.",
    "You can abstract the model behind your own interface and switch later.",
    "Most products should ship on a hosted API first and revisit only with real data.",
    "Privacy and regulatory needs are the strongest reason to self-host, not cost alone.",
];

const hostedWhen = [
    "You need the highest quality reasoning with the least effort, today.",
    "Your volume is low to moderate and per-token pricing still pencils out.",
    "You do not want to run GPUs, handle scaling, or staff ML operations.",
    "You want automatic access to newer, better models as they ship.",
    "Your data terms are satisfied by the provider's DPA and retention settings.",
];

const openSourceWhen = [
    "Data cannot leave your environment for privacy or regulatory reasons.",
    "Volume is high enough that token costs dwarf the cost of running your own.",
    "You need deep customization or fine-tuning the hosted option does not allow.",
    "You require full control over model versioning and behavior over time.",
    "Latency or offline/on-prem requirements rule out a remote API.",
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
                    AI Answer · Model Choice
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
                        For most products, start with a hosted API (OpenAI, Anthropic, or
                        Google): you get top-tier quality, zero infrastructure, and the
                        fastest path to shipping. Choose an open-source model you run
                        yourself when data cannot leave your environment, when your volume
                        is high enough that token costs exceed the cost of running GPUs, or
                        when you need customization the API does not allow. The smart move is
                        to put the model behind your own interface so you can switch later
                        without rewriting your app. &quot;Free&quot; open-source is not free —
                        you trade per-token cost for GPUs, scaling, and ML operations. Let
                        real usage data, privacy needs, and total cost decide — not the
                        appeal of owning the model.
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
                    When a hosted API (OpenAI / Anthropic / Google) wins
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-base leading-relaxed mb-10">
                    {hostedWhen.map((r) => (
                        <li key={r}>{r}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    When a self-hosted open-source model wins
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-base leading-relaxed mb-10">
                    {openSourceWhen.map((r) => (
                        <li key={r}>{r}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    The total-cost reality
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Open-source models are often described as the cheaper option, and at
                    high volume they can be. But the bill changes shape rather than
                    disappearing. Instead of paying per token, you pay for GPU capacity
                    (often idle between requests), the engineering to deploy and scale
                    inference, monitoring, security patching, and the ongoing work of
                    keeping up with better models. For low and moderate volume, a hosted API
                    is almost always cheaper once you count engineering time. Self-hosting
                    typically wins on cost only past a meaningful traffic threshold — and
                    you should model that threshold before committing.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    Don&apos;t marry one model
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    The field moves monthly. The durable architecture is one where your
                    application talks to a thin internal interface, and the model behind it
                    is swappable. That lets you start on a hosted API, A/B a cheaper or
                    open-source model later, or split traffic — without rewriting features.
                    Building that abstraction up front costs little and protects you from
                    both price changes and the next better model.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    How QUANT LAB USA approaches it
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    QUANT LAB USA defaults to a hosted API for speed and quality, abstracts
                    the model so it stays swappable, and recommends self-hosting only when
                    privacy, volume, or customization genuinely justify the operational
                    burden. The decision is paired with the data-safety and cost questions —
                    see{" "}
                    <Link
                        href="/ai/is-my-data-safe-with-an-ai-vendor"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        is my data safe with an AI vendor
                    </Link>
                    , the{" "}
                    <Link
                        href="/ai/how-much-does-it-cost-to-build-an-ai-chatbot"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        cost to build an AI chatbot
                    </Link>
                    , and the overall{" "}
                    <Link
                        href="/ai/whats-the-best-way-to-add-ai-to-my-product"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        approach to adding AI to a product
                    </Link>
                    .
                </p>

                <div className="rounded-2xl border border-sky-400/20 bg-sky-500/5 p-6 mb-10">
                    <p className="text-gray-100 text-base leading-relaxed mb-4">
                        Trying to model the crossover point between API tokens and your own
                        GPUs? Walk through the numbers with someone who has built both.
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
                    This comparison reflects QUANT LAB USA&apos;s engineering practice for
                    US clients. For service detail see{" "}
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
                    defines inference, fine-tuning, and tokens. Model names are referenced
                    neutrally; no placement is paid.
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
