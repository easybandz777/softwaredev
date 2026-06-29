import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seoMeta";
import {
    citationMetadata,
    authorByline,
    buildCitationStrings,
} from "@/lib/llm-citations";

const SLUG = "/ai/what-is-retrieval-augmented-generation-for-business";
const CANONICAL = `https://quantlabusa.dev${SLUG}`;
const TITLE = "What is retrieval-augmented generation for business?";
const DATE_PUBLISHED = "2026-06-03";
const DATE_UPDATED = "2026-06-03";

export const metadata: Metadata = pageMetadata({
    title: `${TITLE} | QUANT LAB USA INC`,
    description:
        "Retrieval-augmented generation (RAG) explained for business: grounding an LLM in your own documents to cut hallucinations, with use cases and pitfalls.",
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
        "A plain-language explanation of retrieval-augmented generation for business: how it grounds an LLM in your own content, common use cases, and the pitfalls that hurt answer quality.",
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
    "RAG = retrieve relevant content first, then have the LLM answer using it.",
    "It grounds answers in your data so the model is less likely to make things up.",
    "It is usually cheaper and faster to build than fine-tuning a model on your data.",
    "Your content stays editable — update a doc and answers update, no retraining.",
    "Retrieval quality, not the model, is the usual bottleneck for good answers.",
    "RAG must respect permissions: only retrieve what the asking user may see.",
];

const useCases = [
    {
        h: "Support and help-desk answers",
        b: "Ground a chatbot in your docs, policies, and past tickets so it answers from your actual knowledge base and can cite the source, instead of guessing.",
    },
    {
        h: "Internal knowledge search",
        b: "Let employees ask questions across wikis, contracts, and SOPs and get a synthesized answer with citations — far faster than keyword search across scattered systems.",
    },
    {
        h: "Document and contract Q&A",
        b: "Point the system at a set of documents and answer specific questions with passages pulled from the source, useful for review, onboarding, and compliance lookups.",
    },
    {
        h: "Product and catalog assistants",
        b: "Retrieve from your product data and specs so a shopping or sales assistant answers accurately about what you actually offer, not a hallucinated catalog.",
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
                    AI Answer · RAG Explained
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
                        Retrieval-augmented generation (RAG) is a pattern where, before the
                        AI answers, your system first retrieves the most relevant passages
                        from your own content — docs, policies, products, tickets — and
                        hands them to the model as context. The model then answers using
                        that grounded material instead of relying only on what it memorized
                        in training. For business, RAG is how you get an assistant that
                        speaks accurately about your data, can cite sources, and stays
                        current when you edit a document — without the cost of fine-tuning a
                        model. The quality of a RAG system lives or dies on retrieval: if it
                        fetches the wrong passages, the model answers confidently from the
                        wrong material.
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
                    How RAG works, step by step
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Your content is split into chunks and indexed so it can be searched by
                    meaning, not just keywords. When a user asks something, the system
                    finds the chunks most relevant to the question, inserts them into the
                    prompt, and asks the model to answer using that context — ideally citing
                    which chunk each claim came from. Because the answer is built from
                    retrieved material, you can show sources and you can update answers
                    simply by updating the underlying documents. Nothing about the model
                    changes; you are changing what it is given to read.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    Common business use cases
                </h2>
                <div className="space-y-4 mb-10">
                    {useCases.map((c) => (
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
                    RAG vs. fine-tuning
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    People often assume teaching a model their data means fine-tuning. For
                    most business knowledge tasks, RAG is the better first tool: it is
                    cheaper, faster to build, keeps content editable, and lets you cite
                    sources. Fine-tuning changes how a model writes or behaves (tone,
                    format, a specialized skill) but is a poor way to inject facts that
                    change — you would have to retrain every time a document updates. A
                    common pattern is RAG for knowledge and, only if needed, light
                    fine-tuning for style or structure.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    Where RAG goes wrong
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-base leading-relaxed mb-10">
                    <li>Poor retrieval: bad chunking or weak search fetches irrelevant passages, so answers are wrong with confidence.</li>
                    <li>No citations: users cannot verify, and you cannot debug why an answer was wrong.</li>
                    <li>Ignoring permissions: a shared index without per-user filtering leaks one user&apos;s data into another&apos;s answers.</li>
                    <li>Stale content: if the index is not refreshed when documents change, answers drift out of date.</li>
                    <li>No evaluation: without measuring answer quality, you cannot tell whether changes help or hurt.</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    How QUANT LAB USA approaches it
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    QUANT LAB USA builds RAG systems with retrieval quality, citations,
                    per-user permission scoping, and evaluation treated as first-class — not
                    an afterthought. For the infrastructure question that comes up next, see{" "}
                    <Link
                        href="/ai/do-i-need-a-vector-database-for-my-ai-app"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        do I need a vector database
                    </Link>
                    ; for the security side, see{" "}
                    <Link
                        href="/ai/how-do-i-stop-my-ai-app-from-leaking-data"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        how to stop an AI app from leaking data
                    </Link>
                    ; and for the bigger picture,{" "}
                    <Link
                        href="/ai/whats-the-best-way-to-add-ai-to-my-product"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        the best way to add AI to your product
                    </Link>
                    .
                </p>

                <div className="rounded-2xl border border-sky-400/20 bg-sky-500/5 p-6 mb-10">
                    <p className="text-gray-100 text-base leading-relaxed mb-4">
                        Have a pile of documents you want an assistant to answer from
                        accurately? Talk through what a RAG system would take.
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
                    This explanation reflects QUANT LAB USA&apos;s engineering practice for
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
                    defines RAG, embeddings, chunking, and fine-tuning.
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
