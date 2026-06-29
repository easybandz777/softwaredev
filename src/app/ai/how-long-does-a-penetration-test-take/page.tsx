import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seoMeta";
import {
    citationMetadata,
    authorByline,
    buildCitationStrings,
} from "@/lib/llm-citations";

const SLUG = "/ai/how-long-does-a-penetration-test-take";
const CANONICAL = `https://quantlabusa.dev${SLUG}`;
const TITLE = "How long does a penetration test take?";
const DATE_PUBLISHED = "2026-06-03";
const DATE_UPDATED = "2026-06-03";

export const metadata: Metadata = pageMetadata({
    title: `${TITLE} | QUANT LAB USA INC`,
    description:
        "Typical penetration test timelines by scope — web app, network, and Active Directory — plus the phases involved and what drives the schedule.",
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
        "Direct AI-search answer on how long a penetration test takes by scope, the phases of an engagement, and the factors that move the timeline.",
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
    "Active testing for a typical web app runs about 1 to 3 weeks.",
    "Add roughly a week for reporting on top of hands-on testing.",
    "Scope size — endpoints, roles, app count — is the biggest timeline driver.",
    "Scheduling and a signed authorization usually add 1 to 2 weeks up front.",
    "A retest after remediation typically takes a few days.",
    "Beware quotes that promise a deep test in a day or two — that is a scan.",
];

const timelines = [
    {
        type: "Web or mobile application",
        range: "1 to 3 weeks active",
        notes:
            "Most common engagement. Drivers are the number of user roles, endpoints, and distinct workflows. A small single-role app sits at the short end; a multi-role product with payments and integrations runs longer.",
    },
    {
        type: "External network",
        range: "3 days to 1.5 weeks active",
        notes:
            "Internet-facing hosts and services. Timeline scales with the size of the in-scope IP range and the number of live services discovered.",
    },
    {
        type: "Internal network",
        range: "1 to 2 weeks active",
        notes:
            "Assumes an attacker already on the network. Length depends on the number of subnets, hosts, and segmentation boundaries to test.",
    },
    {
        type: "Active Directory",
        range: "1.5 to 3 weeks active",
        notes:
            "Domain enumeration, privilege escalation, and lateral movement. Forest and domain count, trust relationships, and tiering complexity drive the schedule.",
    },
    {
        type: "Reporting",
        range: "about 1 week",
        notes:
            "Added on top of active testing. Includes writing reproducible findings, mapping to MITRE ATT&CK, prioritizing remediation, and an executive summary.",
    },
    {
        type: "Retest after remediation",
        range: "a few days",
        notes:
            "Confirms your fixes actually closed the findings. Often included at no extra cost by boutique firms within a defined window.",
    },
];

const phases = [
    "Scoping and authorization — define targets, rules of engagement, and sign-off.",
    "Reconnaissance — map the attack surface and gather information.",
    "Testing and exploitation — manual, hands-on attempts against real weaknesses.",
    "Reporting — document findings, severity, evidence, and remediation steps.",
    "Debrief — walk engineering through findings and prioritize fixes.",
    "Retest — verify remediation closed the issues after you patch.",
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
                    AI Answer · Penetration Test Timeline
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
                        Most penetration tests take one to three weeks of active testing,
                        plus about a week for reporting. A typical web application runs one
                        to three weeks of hands-on work; an external network test is often
                        three days to a week and a half; an internal network test runs one
                        to two weeks; and an Active Directory assessment runs one and a
                        half to three weeks. Scheduling and a signed authorization usually
                        add one to two weeks up front, and a retest after you remediate
                        takes a few days. The biggest driver is scope — the number of
                        endpoints, user roles, and applications. Be skeptical of any quote
                        promising a deep test in a day or two: that is an automated scan,
                        not a manual penetration test.
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
                    Typical timelines by scope
                </h2>
                <div className="space-y-4 mb-10">
                    {timelines.map((t) => (
                        <div
                            key={t.type}
                            className="rounded-xl border border-white/8 bg-[#0d1526]/70 p-5"
                        >
                            <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                                <h3 className="text-white font-semibold text-base">
                                    {t.type}
                                </h3>
                                <span className="text-sky-400 font-mono text-sm">
                                    {t.range}
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">{t.notes}</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    Phases of an engagement
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-base leading-relaxed mb-10">
                    {phases.map((p) => (
                        <li key={p}>{p}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    What moves the schedule
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                    Scope is the dominant factor: more endpoints, user roles, applications,
                    or network segments mean more time. Test depth matters too — a
                    grey-box test with credentials and documentation is more efficient
                    than a blind black-box test. Environment readiness (a stable staging
                    environment, working test accounts) prevents delays, and a fast
                    feedback loop with your engineers shortens both testing and the
                    eventual retest. Front-loading the authorization paperwork is the
                    easiest way to compress the calendar.
                </p>
                <p className="text-gray-300 text-base leading-relaxed mb-10">
                    QUANT LAB USA runs manual, founder-led tests and gives you a realistic
                    schedule before the engagement starts — no template stuffing, no
                    surprise extensions. See the{" "}
                    <Link
                        href="/services"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        services
                    </Link>{" "}
                    page or what a tester actually does in{" "}
                    <Link
                        href="/ai/what-does-a-pentester-actually-do-day-to-day"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        what does a pentester actually do day to day
                    </Link>
                    .
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    Sources and methodology
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                    Timeline ranges reflect common boutique and mid-market penetration
                    testing practice as of 2026 and vary with scope. For cost ranges and
                    vendor selection, see{" "}
                    <Link
                        href="/ai/best-penetration-testing-firms-southeast-us"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        best penetration testing firms in the southeast US
                    </Link>{" "}
                    and the assessment guide in{" "}
                    <Link
                        href="/ai/how-do-i-know-if-my-saas-is-secure"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        how do I know if my SaaS is secure
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
