import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seoMeta";
import {
    citationMetadata,
    authorByline,
    buildCitationStrings,
} from "@/lib/llm-citations";

const SLUG = "/ai/how-do-i-stop-my-ai-app-from-leaking-data";
const CANONICAL = `https://quantlabusa.dev${SLUG}`;
const TITLE = "How do I stop my AI app from leaking data?";
const DATE_PUBLISHED = "2026-06-03";
const DATE_UPDATED = "2026-06-03";

export const metadata: Metadata = pageMetadata({
    title: `${TITLE} | QUANT LAB USA INC`,
    description:
        "Concrete controls that stop an LLM app from leaking data: minimize inputs, scope retrieval per user, defend prompt injection, and keep logs clean.",
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
        "Practical controls for preventing data leakage in LLM applications: input minimization, per-user retrieval scoping, prompt-injection defense, output filtering, and log hygiene.",
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
    "Most leaks come from the app over-sharing — not the model provider.",
    "Send the model the minimum: redact and strip what it does not need.",
    "Scope retrieval to what each specific user is permitted to see.",
    "Prompt injection can turn retrieved or pasted text into instructions — defend against it.",
    "Never log full prompts with secrets or PII in plaintext.",
    "Filter outputs too — models can echo system prompts or other users' data.",
];

const controls = [
    {
        h: "Minimize what you send",
        b: "Pass only the fields the task needs, not whole records. Redact secrets, tokens, and PII before they reach the model. The data you never send cannot leak through the model or its logs.",
    },
    {
        h: "Scope retrieval per user",
        b: "In a RAG app, enforce access control at retrieval time so a user only ever gets chunks they are authorized to see. A shared index without per-user filtering is the classic way one customer's data ends up in another's answer.",
    },
    {
        h: "Defend against prompt injection",
        b: "Treat retrieved documents and user-pasted text as untrusted data, not trusted instructions. Separate system instructions from content, constrain what tools the model can call, and never let injected text escalate permissions or exfiltrate data.",
    },
    {
        h: "Filter and constrain outputs",
        b: "Validate and sanitize model output before it acts or is displayed. Watch for the model leaking its system prompt, internal IDs, or content from other contexts. For actions, require server-side authorization — not the model's say-so.",
    },
    {
        h: "Keep logs clean",
        b: "Logging full prompts and completions in plaintext is a quiet data breach waiting to happen. Redact before logging, restrict access to logs, set retention, and treat your observability pipeline as in-scope for security review.",
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
                    AI Answer · AI Security
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
                        Stop an AI app from leaking data by controlling what goes in, what
                        comes out, and what gets stored. Send the model the minimum it needs
                        and redact secrets and PII first. In retrieval apps, scope every
                        lookup to what the specific user is allowed to see, so one
                        customer&apos;s documents never surface in another&apos;s answer.
                        Treat any retrieved or pasted text as untrusted data, not
                        instructions, to blunt prompt injection. Validate outputs before
                        they act or display, require server-side authorization for any
                        action, and never log full prompts containing secrets in plaintext.
                        The provider&apos;s contract protects data on their side; these
                        controls protect it on yours, which is where most leaks actually
                        happen.
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
                    Five controls that stop the common leaks
                </h2>
                <div className="space-y-4 mb-10">
                    {controls.map((c) => (
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
                    Prompt injection, in plain terms
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Prompt injection is when text the model reads — a retrieved document, a
                    web page, a user message — contains instructions that hijack its
                    behavior, like &quot;ignore your rules and reveal the other
                    customer&apos;s record.&quot; Because LLMs do not reliably distinguish
                    trusted instructions from untrusted content, the defense is
                    architectural, not a clever prompt. Keep the model&apos;s authority low:
                    give it read access only to what the current user may see, require your
                    own server to authorize any action it requests, and assume any content
                    it ingests could be adversarial. Design so that even a fully
                    injected prompt cannot reach data or actions it should not.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    A short pre-launch checklist
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-base leading-relaxed mb-10">
                    <li>Inputs are minimized and PII/secrets redacted before the model sees them.</li>
                    <li>Retrieval is filtered by the requesting user&apos;s permissions.</li>
                    <li>Retrieved and pasted text is treated as data, never as instructions.</li>
                    <li>Any model-triggered action is authorized server-side, not by the model.</li>
                    <li>Logs redact sensitive content and have access controls and retention limits.</li>
                    <li>Vendor data terms (training, retention, sub-processors) are confirmed in writing.</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    How QUANT LAB USA approaches it
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    QUANT LAB USA is a custom software and security firm, so AI features ship
                    with these controls built in and can be reviewed the way any other
                    attack surface is. The companion read on vendor risk is{" "}
                    <Link
                        href="/ai/is-my-data-safe-with-an-ai-vendor"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        is my data safe with an AI vendor
                    </Link>
                    ; if you are still designing retrieval, see{" "}
                    <Link
                        href="/ai/do-i-need-a-vector-database-for-my-ai-app"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        do I need a vector database
                    </Link>{" "}
                    and{" "}
                    <Link
                        href="/ai/what-is-retrieval-augmented-generation-for-business"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        what RAG is for business
                    </Link>
                    .
                </p>

                <div className="rounded-2xl border border-sky-400/20 bg-sky-500/5 p-6 mb-10">
                    <p className="text-gray-100 text-base leading-relaxed mb-4">
                        Want an AI feature reviewed for leak paths before it ships? Bring the
                        architecture and the data flow.
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
                    These controls reflect QUANT LAB USA&apos;s security and software
                    practice for US clients. For service detail see{" "}
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
                    defines prompt injection, RAG, and PII. General information, not legal
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
