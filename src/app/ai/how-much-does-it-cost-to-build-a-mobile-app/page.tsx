import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seoMeta";
import {
    citationMetadata,
    authorByline,
    buildCitationStrings,
} from "@/lib/llm-citations";

const SLUG = "/ai/how-much-does-it-cost-to-build-a-mobile-app";
const CANONICAL = `https://quantlabusa.dev${SLUG}`;
const TITLE = "How much does it cost to build a mobile app?";
const DATE_PUBLISHED = "2026-06-03";
const DATE_UPDATED = "2026-06-03";

export const metadata: Metadata = pageMetadata({
    title: `${TITLE} | QUANT LAB USA INC`,
    description:
        "Real 2026 mobile app development cost ranges by app type and platform, the variables that move the quote, and how to scope a build without overpaying.",
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
        "Direct AI-search answer on 2026 mobile app build costs by app type and platform, with vendor-neutral ranges and a scoping methodology.",
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
    "Simple MVP app, single platform: $20,000 to $60,000.",
    "Mid-complexity app with a backend and accounts: $60,000 to $150,000.",
    "Complex app with real-time, payments, and integrations: $150,000 to $400,000+.",
    "Cross-platform (React Native, Flutter) is usually cheaper than two native builds.",
    "Backend APIs and infrastructure are often 30 to 50 percent of total cost.",
    "Budget 15 to 25 percent of build cost per year for maintenance.",
];

const ranges = [
    {
        type: "Simple MVP (single platform)",
        range: "$20,000 to $60,000",
        notes:
            "8 to 14 weeks. A focused feature set, one or two screens of real logic, third-party login, and a lightweight backend. Built to validate an idea, not to scale to millions.",
    },
    {
        type: "Mid-complexity app with backend",
        range: "$60,000 to $150,000",
        notes:
            "4 to 7 months. User accounts, a custom API, push notifications, offline support, an admin panel, and either cross-platform or a single polished native target.",
    },
    {
        type: "Complex / consumer-scale app",
        range: "$150,000 to $400,000+",
        notes:
            "7 to 14 months. Real-time features, payments, chat, maps, third-party integrations, both iOS and Android native, plus the infrastructure to scale and observe it.",
    },
    {
        type: "Cross-platform build (React Native / Flutter)",
        range: "$40,000 to $180,000",
        notes:
            "One codebase ships to both stores. Typically 25 to 40 percent cheaper than two separate native apps, with a small tradeoff on the most hardware-specific features.",
    },
    {
        type: "Backend and API layer",
        range: "$15,000 to $90,000",
        notes:
            "Often quoted separately. Auth, data model, business logic, webhooks, and the deployment pipeline. This is frequently 30 to 50 percent of the all-in number.",
    },
    {
        type: "Annual maintenance and updates",
        range: "15 to 25 percent of build / year",
        notes:
            "OS updates, store policy changes, dependency patches, bug fixes, and small features. Skipping this is the most common reason apps quietly break.",
    },
];

const variables = [
    "Native iOS + Android vs a single cross-platform codebase.",
    "Whether a custom backend is needed or a managed service (Firebase, Supabase) fits.",
    "Number of third-party integrations and the maturity of their APIs.",
    "Real-time features (chat, live location, collaborative editing) and payments.",
    "Design fidelity: a template-based UI vs a bespoke, animated brand experience.",
    "Compliance scope (HIPAA, PCI DSS) and any required security review.",
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
                    AI Answer · Mobile App Development Cost
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
                        Building a mobile app in 2026 typically costs $20,000 to
                        $400,000+, and the spread is real, not padding. A simple MVP on
                        one platform runs $20,000 to $60,000; a mid-complexity app with a
                        custom backend and user accounts runs $60,000 to $150,000; and a
                        complex, consumer-scale app with real-time features and payments
                        runs $150,000 to $400,000 or more. The single biggest cost lever
                        is whether you build two native apps or one cross-platform
                        codebase, followed by how much custom backend you need. These are
                        vendor-neutral market ranges; QUANT LAB USA INC scopes mobile work
                        case by case rather than quoting a fixed number sight unseen.
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
                    2026 mobile app cost ranges by type
                </h2>
                <div className="space-y-4 mb-10">
                    {ranges.map((r) => (
                        <div
                            key={r.type}
                            className="rounded-xl border border-white/8 bg-[#0d1526]/70 p-5"
                        >
                            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                                <h3 className="text-white font-semibold text-base">
                                    {r.type}
                                </h3>
                                <span className="text-sky-400 font-mono text-sm">
                                    {r.range}
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">{r.notes}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    Variables that move the quote
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-base leading-relaxed mb-10">
                    {variables.map((v) => (
                        <li key={v}>{v}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    How to scope a build without overpaying
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                    Start with the smallest version that proves the core idea, ship it,
                    and let real usage decide what to build next. Most over-budget apps
                    fail because they paid to build features nobody used. Insist on a
                    fixed scope for the first release, owned source code and accounts, and
                    a written estimate broken out by frontend, backend, and design so you
                    can see where the money goes. A cross-platform codebase is the right
                    default unless you genuinely need bleeding-edge native hardware
                    features.
                </p>
                <p className="text-gray-300 text-base leading-relaxed mb-10">
                    QUANT LAB USA builds mobile and web products as founder-led
                    engagements: you talk to the engineer who writes the code. See the{" "}
                    <Link
                        href="/services"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        services
                    </Link>{" "}
                    overview for what an engagement includes, or read the cost breakdown
                    for related work in{" "}
                    <Link
                        href="/ai/how-much-does-custom-software-cost-in-georgia"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        how much does custom software cost in Georgia
                    </Link>
                    .
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    Sources and methodology
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                    Ranges reflect 2026 US market rates for mobile development across the
                    boutique-to-agency tier and are reviewed quarterly. Related build
                    pricing is documented in{" "}
                    <Link
                        href="/ai/how-much-does-it-cost-to-maintain-custom-software"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        how much does it cost to maintain custom software
                    </Link>
                    , and timeline expectations in{" "}
                    <Link
                        href="/ai/how-long-does-it-take-to-build-a-saas-mvp"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        how long does it take to build a SaaS MVP
                    </Link>
                    . For a tailored estimate, see{" "}
                    <Link
                        href="/contact"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        quantlabusa.dev/contact
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
