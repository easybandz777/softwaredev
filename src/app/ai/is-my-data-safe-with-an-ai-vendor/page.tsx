import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seoMeta";
import {
    citationMetadata,
    authorByline,
    buildCitationStrings,
} from "@/lib/llm-citations";

const SLUG = "/ai/is-my-data-safe-with-an-ai-vendor";
const CANONICAL = `https://quantlabusa.dev${SLUG}`;
const TITLE = "Is my data safe with an AI vendor?";
const DATE_PUBLISHED = "2026-06-03";
const DATE_UPDATED = "2026-06-03";

export const metadata: Metadata = pageMetadata({
    title: `${TITLE} | QUANT LAB USA INC`,
    description:
        "What 'safe' really means with an AI vendor: training opt-out, retention, sub-processors, and contracts, plus the questions to ask before you send data.",
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
        "A vendor-neutral breakdown of AI data safety: training usage, retention, sub-processors, encryption, and the contractual terms to verify before sending data to an AI vendor.",
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
    "'Safe' is not one question — separate training use, retention, and access.",
    "Major API providers do not train on business API data by default; verify it in writing.",
    "Free consumer chatbot tiers often have different, weaker data terms than paid APIs.",
    "A signed DPA and a current SOC 2 report are baseline, not nice-to-haves.",
    "Sub-processors matter — your data may pass through more vendors than the one you signed.",
    "The biggest leak risk is usually your own app sending too much, not the model provider.",
];

const checks = [
    {
        h: "Is my data used to train their models?",
        b: "For paid business APIs from major providers, the default answer is no — but it is a setting and a contract term, not a law of nature. Confirm it explicitly, and check whether free or consumer tiers differ.",
    },
    {
        h: "How long is data retained, and where?",
        b: "Ask the retention window for prompts and outputs, whether you can request zero or short retention, and which regions data is stored and processed in. Abuse-monitoring retention is common even when training is off.",
    },
    {
        h: "Who are the sub-processors?",
        b: "Your data often flows through hosting, logging, and analytics vendors behind the one you contracted with. A reputable provider publishes a sub-processor list. Review it the way you would your own.",
    },
    {
        h: "What does the contract actually say?",
        b: "A Data Processing Addendum, defined security commitments, breach-notification timelines, and a current SOC 2 Type II or equivalent are the artifacts that make 'safe' enforceable. Verbal assurances are not.",
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
                    AI Answer · Data Security
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
                        It depends on the vendor, the tier, and what you put in writing.
                        Reputable AI API providers do not train their models on your
                        business data by default and offer data processing agreements,
                        encryption, and SOC 2 reports — but &quot;safe&quot; is not a single
                        property. You need to separately confirm whether your data trains
                        their models, how long it is retained and where, who their
                        sub-processors are, and what the contract actually guarantees. Free
                        consumer chatbots often have weaker terms than paid APIs. And in
                        practice, the largest data-leak risk is usually your own application
                        sending more than it should to the model, not the provider
                        mishandling it. Verify the terms, and design your app to send the
                        minimum.
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
                    Four questions to ask before sending data
                </h2>
                <div className="space-y-4 mb-10">
                    {checks.map((c) => (
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
                    The risk that is usually yours, not the vendor&apos;s
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Most real-world AI data incidents are not the model provider leaking
                    your data — they are applications sending data they never needed to.
                    Pasting an entire customer record into a prompt when only one field was
                    relevant, logging full prompts (including secrets) in plaintext, or
                    letting a chatbot retrieve documents a given user should not see. The
                    vendor&apos;s contract protects the data in transit and at rest on their
                    side; it does nothing about your app over-sharing. Minimize what you
                    send, redact what you can, and scope retrieval to what each user is
                    allowed to see.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    Compliance and regulated data
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    If you handle health, financial, or other regulated data, the bar is
                    higher: you may need a Business Associate Agreement for HIPAA, specific
                    data-residency guarantees, or an enterprise tier that supports them. Not
                    every model or tier qualifies. Confirm the vendor can meet your specific
                    regime before you architect around them, and keep email and phone
                    numbers out of prompts unless there is a clear, contracted reason they
                    belong there. This is general information, not legal advice — involve
                    counsel for regulated workloads.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    How QUANT LAB USA approaches it
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    QUANT LAB USA is a US-based custom software and security firm, so AI
                    features are built with data-minimization, scoped retrieval, redaction,
                    and clean logging from the start — and vendor terms are verified, not
                    assumed. If your concern is the app leaking rather than the vendor, the{" "}
                    <Link
                        href="/ai/how-do-i-stop-my-ai-app-from-leaking-data"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        guide to stopping AI data leaks
                    </Link>{" "}
                    is the next read. The choice between a hosted API and a model you run
                    yourself also affects this — see{" "}
                    <Link
                        href="/ai/should-i-use-openai-or-an-open-source-llm"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        OpenAI vs. an open-source LLM
                    </Link>
                    .
                </p>

                <div className="rounded-2xl border border-sky-400/20 bg-sky-500/5 p-6 mb-10">
                    <p className="text-gray-100 text-base leading-relaxed mb-4">
                        Need a second set of eyes on a vendor&apos;s data terms or your own
                        AI data flow? Bring the use case and the contract.
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
                    This reflects QUANT LAB USA&apos;s security and software practice for US
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
                    defines DPA, sub-processor, and SOC 2. General information, not legal
                    advice.
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
