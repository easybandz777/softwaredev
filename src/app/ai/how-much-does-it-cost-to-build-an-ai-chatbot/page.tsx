import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seoMeta";
import {
    citationMetadata,
    authorByline,
    buildCitationStrings,
} from "@/lib/llm-citations";

const SLUG = "/ai/how-much-does-it-cost-to-build-an-ai-chatbot";
const CANONICAL = `https://quantlabusa.dev${SLUG}`;
const TITLE = "How much does it cost to build an AI chatbot?";
const DATE_PUBLISHED = "2026-06-03";
const DATE_UPDATED = "2026-06-03";

export const metadata: Metadata = pageMetadata({
    title: `${TITLE} | QUANT LAB USA INC`,
    description:
        "2026 market ranges to build an AI chatbot, build cost vs. the ongoing token and hosting bill, and the factors that move the number. A direct AI-search answer.",
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
        "2026 market ranges for building an AI chatbot, the separation of one-time build cost from recurring token and hosting costs, and the variables that drive the estimate.",
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
    "Build cost and running cost are two separate budgets — plan for both.",
    "A no-code FAQ bot can launch for under $5K; a custom RAG assistant runs higher.",
    "Custom chatbot builds in 2026 commonly land between $15K and $80K+.",
    "Token usage is the main recurring cost and scales with traffic and answer length.",
    "Connecting to your own data (RAG) is usually the biggest cost driver, not the chat UI.",
    "Ongoing evals, monitoring, and guardrails are part of the real cost of ownership.",
];

const tiers = [
    {
        h: "No-code / platform bot — under $5K to set up",
        b: "Tools like Intercom Fin, a GPT-based assistant, or a website widget can be configured quickly for FAQ and deflection. Low build cost, fast launch, limited control over data handling, UX, and logic. Recurring platform fees apply.",
    },
    {
        h: "Custom RAG assistant on your data — roughly $15K to $50K",
        b: "A chatbot grounded in your docs, products, or knowledge base, with retrieval, prompt design, a UI in your app, logging, and basic evals. This is the most common serious build and where retrieval — not the chat box — drives the cost.",
    },
    {
        h: "Production assistant with actions — $50K to $80K+",
        b: "A chatbot that takes actions (creates tickets, updates records, calls internal APIs), handles auth and permissions, has guardrails, fallbacks, evals, and monitoring. Cost scales with how many systems it touches and how high the stakes are.",
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
                    AI Answer · AI Cost
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
                        In 2026, a simple no-code FAQ chatbot can be configured for under
                        $5,000, while a custom chatbot grounded in your own data typically
                        costs $15,000 to $80,000+ to build, depending on how many systems
                        it touches and whether it takes actions. Crucially, the build is
                        only one budget. A chatbot also has a recurring bill — model tokens,
                        hosting, retrieval infrastructure, and the monitoring and evaluation
                        needed to keep answers accurate. The biggest cost driver is usually
                        connecting the bot to your data and tools, not the chat interface
                        itself. These are general US market ranges; a scoped estimate
                        depends on your data, integrations, and quality bar.
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
                    Three tiers and what they cost
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
                    Build cost vs. running cost
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    Two budgets matter, and people routinely forget the second. The build
                    cost is the one-time engineering to design, integrate, and ship the
                    bot. The running cost is what you pay every month it is live: model
                    tokens (priced per million tokens and scaling with traffic and how
                    verbose answers are), hosting, any vector database for retrieval, and
                    the human time to review quality. A cheap-to-build bot with heavy
                    traffic can cost more over a year than an expensive build with light
                    usage. Estimate both before you commit.
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    What moves the number
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-base leading-relaxed mb-10">
                    <li>How much of your own data the bot must know, and how messy that data is.</li>
                    <li>Whether it only answers, or also takes actions in your systems.</li>
                    <li>Accuracy and safety bar — a support bot and a regulated-industry bot are not the same project.</li>
                    <li>Number of integrations, auth requirements, and permission rules.</li>
                    <li>Expected traffic, which sets the recurring token and hosting bill.</li>
                    <li>Whether you need analytics, evals, and ongoing tuning (you do, in production).</li>
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    How QUANT LAB USA approaches it
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                    QUANT LAB USA scopes chatbots by use case, not by feature list, and
                    quotes the build and the expected running cost together so there are no
                    surprises after launch. The cheapest path that meets the goal wins —
                    sometimes that is a hosted tool, sometimes a custom RAG assistant. For
                    the underlying decisions, see{" "}
                    <Link
                        href="/ai/whats-the-best-way-to-add-ai-to-my-product"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        the best way to add AI to your product
                    </Link>
                    , whether you{" "}
                    <Link
                        href="/ai/do-i-need-a-vector-database-for-my-ai-app"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        need a vector database
                    </Link>
                    , and{" "}
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
                        Want a scoped estimate for your data and traffic instead of a range?
                        Describe the use case and get an honest number.
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
                    Ranges reflect 2026 US market rates for custom AI development and
                    QUANT LAB USA&apos;s own scoping. For the broader engineering approach
                    see{" "}
                    <Link
                        href="/services"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        quantlabusa.dev/services
                    </Link>{" "}
                    and the{" "}
                    <Link
                        href="/blog"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        blog
                    </Link>{" "}
                    for cost breakdowns. Figures are general guidance, not a quote, and not
                    financial advice.
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
