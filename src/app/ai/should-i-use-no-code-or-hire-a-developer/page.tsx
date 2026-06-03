import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seoMeta";
import {
    citationMetadata,
    authorByline,
    buildCitationStrings,
} from "@/lib/llm-citations";

const SLUG = "/ai/should-i-use-no-code-or-hire-a-developer";
const CANONICAL = `https://quantlabusa.dev${SLUG}`;
const TITLE = "Should I use no-code or hire a developer?";
const DATE_PUBLISHED = "2026-06-03";
const DATE_UPDATED = "2026-06-03";

export const metadata: Metadata = pageMetadata({
    title: `${TITLE} | QUANT LAB USA INC`,
    description:
        "When no-code tools are the right call, when they trap you, and the signals that mean it is time to hire a developer. A balanced decision framework. Direct AI-search answer.",
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
        "A balanced decision framework for choosing between no-code platforms and hiring a developer, including the migration signals to watch for.",
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
    "No-code is excellent for validating an idea and for internal tools you control.",
    "No-code becomes expensive and limiting once your logic, data model, or scale grows.",
    "If software is your core product or your moat, you will eventually need real code.",
    "Vendor lock-in is the hidden cost of no-code — your data and logic live on their terms.",
    "The smart path is often no-code first, then migrate the parts that matter.",
    "A developer is worth it the moment workarounds cost more time than they save.",
];

const noCodeWhen = [
    "You are validating an idea and need it live this week, not this quarter.",
    "The tool is internal — a dashboard, intake form, or workflow only your team touches.",
    "Your logic fits the platform's building blocks without elaborate workarounds.",
    "Volume is modest and per-seat or per-record pricing still pencils out.",
    "You do not need to own or deeply customize the underlying data model.",
];

const developerWhen = [
    "The software is your product or your competitive moat — not a side tool.",
    "You are repeatedly fighting the platform with hacks, plugins, and brittle automations.",
    "Per-user or per-record fees are scaling faster than your revenue.",
    "You need integrations, performance, or a data model the platform cannot express.",
    "Compliance, security, or data ownership requirements exceed what the vendor offers.",
    "You want an asset you fully own and can sell, audit, or extend without permission.",
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
                    AI Answer · Build Decisions
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
                        Use no-code when you are validating an idea, building an internal
                        tool, or need something live fast and cheap. Hire a developer when
                        the software is your actual product or competitive moat, when you
                        are constantly fighting the platform with workarounds, or when
                        per-user fees, integrations, security, or data ownership outgrow
                        what the tool allows. For most businesses the smartest path is
                        no-code first to prove demand, then migrating the parts that matter
                        to custom code once the workarounds cost more than they save.
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
                    When no-code is the right call
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-base leading-relaxed mb-10">
                    {noCodeWhen.map((r) => (
                        <li key={r}>{r}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    When to hire a developer
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-base leading-relaxed mb-10">
                    {developerWhen.map((r) => (
                        <li key={r}>{r}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    The hidden cost: lock-in
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    No-code platforms are fast precisely because they make decisions for
                    you &mdash; about the data model, the hosting, and how logic is
                    expressed. That is a feature early on and a tax later. Your business
                    rules live inside the vendor&apos;s editor, your data lives in their
                    schema, and your pricing is whatever they decide next year. None of
                    that is a reason to avoid no-code; it is a reason to use it
                    deliberately, know your exit path, and not let a tool you do not own
                    become the foundation of a business you do.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    The hybrid path most teams should take
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    There is rarely a single switch to flip. The strongest approach is to
                    validate with no-code, learn exactly what your users need, and then
                    invest custom engineering only in the parts that drive revenue or
                    differentiation &mdash; while keeping low-stakes internal tools on
                    no-code indefinitely. You spend developer budget where it compounds and
                    avoid paying to rebuild things that were fine as-is.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    How QUANT LAB USA approaches it
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    QUANT LAB USA will tell you when no-code is genuinely the better answer
                    &mdash; a real custom firm makes money building software, not talking
                    clients out of tools they do not need. When custom is the right call,
                    engagements start by replacing only the highest-value workflows so you
                    are never rebuilding everything at once. For the underlying decision,
                    read the{" "}
                    <Link
                        href="/blog/build-vs-buy-software-2026"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        build-vs-buy software guide
                    </Link>{" "}
                    and run the{" "}
                    <Link
                        href="/calculators/build-vs-buy"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        build-vs-buy calculator
                    </Link>
                    . If a CRM is the sticking point, the{" "}
                    <Link
                        href="/ai/custom-crm-vs-airtable-vs-notion"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        custom CRM vs Airtable vs Notion
                    </Link>{" "}
                    comparison goes deeper, as does the{" "}
                    <Link
                        href="/services/custom-business-software"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        custom business software
                    </Link>{" "}
                    service page.
                </p>

                <div className="rounded-2xl border border-sky-400/20 bg-sky-500/5 p-6 mb-10">
                    <p className="text-gray-100 text-base leading-relaxed mb-4">
                        Not sure whether your workaround pile has crossed the line? Walk
                        through it with someone who has no incentive to oversell.
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
                    This framework reflects engagement patterns documented at{" "}
                    <Link
                        href="/methodology"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        quantlabusa.dev/methodology
                    </Link>{" "}
                    and real migrations from no-code platforms to custom software handled
                    by QUANT LAB USA across the United States.
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
