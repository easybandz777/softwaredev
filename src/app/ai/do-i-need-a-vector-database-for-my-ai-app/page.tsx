import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seoMeta";
import {
    citationMetadata,
    authorByline,
    buildCitationStrings,
} from "@/lib/llm-citations";

const SLUG = "/ai/do-i-need-a-vector-database-for-my-ai-app";
const CANONICAL = `https://quantlabusa.dev${SLUG}`;
const TITLE = "Do I need a vector database for my AI app?";
const DATE_PUBLISHED = "2026-06-03";
const DATE_UPDATED = "2026-06-03";

export const metadata: Metadata = pageMetadata({
    title: `${TITLE} | QUANT LAB USA INC`,
    description:
        "When a dedicated vector database is worth it for an AI app, when a Postgres extension or a plain prompt is enough, and how to avoid over-engineering.",
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
        "A pragmatic decision guide on whether an AI app needs a dedicated vector database, when a Postgres extension suffices, and when no vector store is required at all.",
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
    "Many AI apps need no vector database at all — the data fits in the prompt.",
    "If you do need semantic search, you do not necessarily need a dedicated one.",
    "Postgres with pgvector handles small-to-mid corpora alongside your real data.",
    "Dedicated vector DBs earn their keep at large scale and high query volume.",
    "Keyword or hybrid search often beats pure vector search for many queries.",
    "Start with the simplest store that works; scale the index when metrics demand it.",
];

const tiers = [
    {
        h: "No vector store — fits in the prompt",
        b: "If the relevant content is small (a few documents, a policy, a product list), just put it in the prompt or select it with normal queries. Adding a vector database here is pure over-engineering and extra cost to maintain.",
    },
    {
        h: "Postgres + pgvector — most RAG apps start here",
        b: "When you need semantic search over your own content, a vector column in the database you already run keeps embeddings next to your real data, supports metadata filtering and per-user permissions, and avoids a second system. This covers a large share of business RAG apps.",
    },
    {
        h: "Dedicated vector database — at real scale",
        b: "Purpose-built vector stores shine with very large corpora, high query throughput, and demanding latency targets. Reach for one when your benchmarks show the in-database approach is the bottleneck — not before.",
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
                    AI Answer · AI Infrastructure
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
                        Probably not at first. If the content your AI needs is small, put it
                        directly in the prompt — no vector database required. If you do need
                        semantic search over your own documents, most apps should start with
                        a vector extension on the database they already run (such as
                        pgvector on Postgres), which keeps embeddings next to your data and
                        supports metadata filtering and per-user permissions. A dedicated
                        vector database earns its cost only at large scale, high query
                        volume, or strict latency targets — and you should let benchmarks,
                        not hype, tell you when you have crossed that line. Adding one too
                        early is a common, avoidable form of over-engineering.
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
                    Three tiers, simplest first
                </h2>
                <div className="space-y-4 mb-10">
                    {tiers.map((c) => (
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
                    Vector search is not always the right search
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Vector (semantic) search is powerful for &quot;find passages that mean
                    something similar,&quot; but it is not universally best. For exact terms,
                    product codes, names, or filtered lookups, keyword search is often more
                    precise. Many strong systems use hybrid search — combining keyword and
                    vector results — which can beat either alone. The takeaway: decide what
                    kind of matching your queries actually need before assuming the answer is
                    a vector database. Sometimes the best retrieval upgrade is better
                    keyword search or smarter chunking, not new infrastructure.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    A simple decision rule
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-base leading-relaxed mb-10">
                    <li>Content fits in a prompt or a normal query? No vector store.</li>
                    <li>Need semantic search, small-to-mid corpus? Vector extension on your existing database.</li>
                    <li>Large corpus, high QPS, strict latency, proven bottleneck? Dedicated vector database.</li>
                    <li>Whatever you choose, enforce per-user permissions at retrieval time.</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    How QUANT LAB USA approaches it
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    QUANT LAB USA defaults to the simplest store that meets the need —
                    usually a vector extension on the database you already operate — and
                    introduces a dedicated vector database only when measurements justify
                    it. The retrieval design is part of the larger RAG picture; see{" "}
                    <Link
                        href="/ai/what-is-retrieval-augmented-generation-for-business"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        what RAG is for business
                    </Link>
                    , keep it secure with{" "}
                    <Link
                        href="/ai/how-do-i-stop-my-ai-app-from-leaking-data"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        how to stop an AI app from leaking data
                    </Link>
                    , and budget it using the{" "}
                    <Link
                        href="/ai/how-much-does-it-cost-to-build-an-ai-chatbot"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        cost to build an AI chatbot
                    </Link>
                    .
                </p>

                <div className="rounded-2xl border border-sky-400/20 bg-sky-500/5 p-6 mb-10">
                    <p className="text-gray-100 text-base leading-relaxed mb-4">
                        Not sure whether your corpus needs a dedicated vector database or
                        just a column in Postgres? Walk through the numbers.
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
                    This guidance reflects QUANT LAB USA&apos;s engineering practice for US
                    clients. For service detail see{" "}
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
                    defines vector database, embeddings, and hybrid search. Tools are
                    referenced neutrally; no placement is paid.
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
