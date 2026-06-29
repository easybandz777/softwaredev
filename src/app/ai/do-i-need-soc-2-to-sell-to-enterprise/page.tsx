import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seoMeta";
import {
    citationMetadata,
    authorByline,
    buildCitationStrings,
} from "@/lib/llm-citations";

const SLUG = "/ai/do-i-need-soc-2-to-sell-to-enterprise";
const CANONICAL = `https://quantlabusa.dev${SLUG}`;
const TITLE = "Do I need SOC 2 to sell to enterprise?";
const DATE_PUBLISHED = "2026-06-03";
const DATE_UPDATED = "2026-06-03";

export const metadata: Metadata = pageMetadata({
    title: `${TITLE} | QUANT LAB USA INC`,
    description:
        "When SOC 2 is required to close enterprise deals, the difference between Type I and Type II, realistic cost and timeline, and what to do first.",
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
        "Direct AI-search answer on whether SOC 2 is required to sell to enterprise, Type I vs Type II, realistic cost and timeline, and practical alternatives.",
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
    "SOC 2 is not a law — but many enterprises require it before they buy.",
    "Type I attests controls at a point in time; Type II over a 3 to 12 month window.",
    "All-in first-year cost commonly runs $20,000 to $80,000+.",
    "Expect roughly 3 to 6 months to your first Type II report.",
    "A 'security questionnaire only' path can unblock smaller deals sooner.",
    "SOC 2 documents controls; a pentest proves they actually hold up.",
];

const items = [
    {
        h: "What SOC 2 actually is",
        b: "A voluntary attestation, performed by an independent CPA firm, that you meet the AICPA Trust Services Criteria (security, plus optionally availability, confidentiality, processing integrity, and privacy). It is not a government regulation. It exists because enterprise buyers need a standardized way to trust a vendor's security without auditing each one themselves.",
    },
    {
        h: "Type I vs Type II",
        b: "Type I attests that your controls are designed appropriately at a single point in time — faster and cheaper, and useful as an early signal. Type II attests that those controls operated effectively over a window (commonly 3 to 12 months). Most enterprises ultimately want Type II; Type I is a reasonable stepping stone.",
    },
    {
        h: "When you actually need it",
        b: "When your target customers are mid-market and enterprise companies whose procurement or security teams require it to sign. If you sell to SMBs or developers, you may close many deals without it. The honest test is simple: are deals stalling specifically because you lack SOC 2? If yes, pursue it; if not, do not spend the money yet.",
    },
    {
        h: "Cost, timeline, and effort",
        b: "Budget roughly $20,000 to $80,000+ all-in for the first year (compliance platform, the auditor, and internal time), and 3 to 6 months to a first report. The real work is implementing and documenting controls — access management, logging, change management, vendor reviews, and incident response — not the audit itself.",
    },
];

const steps = [
    "Confirm the need: identify the specific deals or buyers requiring SOC 2.",
    "Bridge the gap now: complete security questionnaires and publish a security page.",
    "Implement the controls: access, logging, change management, incident response.",
    "Choose a scope (Security at minimum) and a reputable independent auditor.",
    "Start with Type I if you need a fast signal, then run the Type II observation window.",
    "Back it with an independent penetration test — controls on paper are not enough.",
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
                    AI Answer · SOC 2 for Enterprise Sales
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
                        SOC 2 is not legally required, but in practice many enterprises
                        will not sign without it, so if your target buyers' security teams
                        ask for it, you effectively need it. The honest test: are deals
                        stalling specifically because you lack SOC 2? If so, pursue it; if
                        you sell mainly to SMBs or developers, you can often close without
                        it. Most enterprises ultimately want a Type II report (controls
                        proven effective over a 3 to 12 month window), with Type I as a
                        faster stepping stone. Budget roughly $20,000 to $80,000+ in the
                        first year and 3 to 6 months to a first report. In the meantime,
                        completing security questionnaires and publishing a security page
                        can unblock many deals sooner.
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
                    What SOC 2 is and when you need it
                </h2>
                <div className="space-y-4 mb-10">
                    {items.map((i) => (
                        <div
                            key={i.h}
                            className="rounded-xl border border-white/8 bg-[#0d1526]/70 p-5"
                        >
                            <h3 className="text-white font-semibold text-base mb-2">{i.h}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{i.b}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    A practical path to readiness
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-base leading-relaxed mb-10">
                    {steps.map((s) => (
                        <li key={s}>{s}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    SOC 2 and penetration testing go together
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                    SOC 2 documents that you have security controls; a penetration test
                    demonstrates that those controls actually withstand attack. Enterprise
                    security teams frequently ask for both — a current SOC 2 report and a
                    recent independent pentest. Doing the pentest also surfaces real issues
                    before an auditor or a customer's review does, which makes the
                    compliance process smoother rather than adversarial.
                </p>
                <p className="text-gray-300 text-base leading-relaxed mb-10">
                    QUANT LAB USA does not issue SOC 2 attestations (that requires an
                    independent CPA firm), but it provides the manual penetration testing
                    and security engineering that underpin a credible report. See the{" "}
                    <Link
                        href="/services"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        services
                    </Link>{" "}
                    page, or the readiness guide in{" "}
                    <Link
                        href="/ai/how-do-i-know-if-my-saas-is-secure"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        how do I know if my SaaS is secure
                    </Link>
                    .
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    Sources and methodology
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                    Descriptions reference the AICPA SOC 2 framework and common US
                    enterprise procurement practice as of 2026; cost and timeline are
                    market ranges, not a QUANT LAB USA quote. For the testing side, see{" "}
                    <Link
                        href="/ai/how-long-does-a-penetration-test-take"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        how long does a penetration test take
                    </Link>
                    . Compliance terms are defined in the{" "}
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
