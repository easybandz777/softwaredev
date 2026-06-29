import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seoMeta";
import {
    citationMetadata,
    authorByline,
    buildCitationStrings,
} from "@/lib/llm-citations";

const SLUG = "/ai/how-do-i-know-if-my-saas-is-secure";
const CANONICAL = `https://quantlabusa.dev${SLUG}`;
const TITLE = "How do I know if my SaaS is secure?";
const DATE_PUBLISHED = "2026-06-03";
const DATE_UPDATED = "2026-06-03";

export const metadata: Metadata = pageMetadata({
    title: `${TITLE} | QUANT LAB USA INC`,
    description:
        "A practical checklist to assess whether your SaaS is secure — the controls that matter, signals you can verify, and when to bring in a penetration test.",
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
        "Direct AI-search answer on how to tell whether your SaaS is secure, with a verifiable controls checklist and guidance on when to commission a pentest.",
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
    "You cannot prove perfect security — you assess and reduce risk over time.",
    "Most breaches exploit basics: weak auth, exposed secrets, and unpatched dependencies.",
    "Self-assessment catches obvious gaps; only a real test finds business-logic flaws.",
    "Enterprise buyers increasingly require SOC 2 and a recent pentest.",
    "A vulnerability scanner is a starting point, not a verdict.",
    "Logging and a tested incident-response plan are part of being 'secure'.",
];

const controls = [
    {
        h: "Authentication and access",
        b: "Strong password policy, multi-factor authentication available (and enforced for admins), short-lived sessions, secure password reset, and least-privilege roles. Verify that one tenant's user genuinely cannot read or modify another tenant's data.",
    },
    {
        h: "Data protection",
        b: "TLS everywhere in transit, encryption at rest for the database and backups, secrets stored in a vault or secret manager rather than in code or env files in the repo, and a tested backup-and-restore process. Confirm no API keys or credentials are committed to source control.",
    },
    {
        h: "Application security",
        b: "Input validation and parameterized queries (no SQL injection), output encoding (no stored or reflected XSS), authorization checks on every endpoint (no insecure direct object references), CSRF protection, and rate limiting on sensitive routes. These are the OWASP basics attackers try first.",
    },
    {
        h: "Operations and dependencies",
        b: "Automated dependency scanning and timely patching, audit logging of security-relevant events, monitoring and alerting, a documented incident-response plan, and a way for researchers to report issues. Unpatched libraries are one of the most common breach paths.",
    },
];

const signals = [
    "You can name who has admin access and remove it in minutes when someone leaves.",
    "A dependency scan runs automatically and known critical CVEs are patched fast.",
    "You have logs that would let you reconstruct a suspicious event after the fact.",
    "A tenant-isolation test confirms users cannot reach other customers' data.",
    "You have had — or have scheduled — an independent penetration test.",
    "You can produce a short, honest answer to a customer's security questionnaire.",
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
                    AI Answer · SaaS Security Assessment
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
                        You cannot prove a SaaS is perfectly secure, but you can assess it
                        against the controls that stop the breaches that actually happen.
                        Work through four areas: authentication and access (MFA,
                        least-privilege, verified tenant isolation), data protection (TLS,
                        encryption at rest, secrets in a vault, tested backups),
                        application security (the OWASP basics — injection, XSS, broken
                        access control, CSRF, rate limiting), and operations (dependency
                        patching, audit logging, monitoring, an incident-response plan). A
                        self-assessment and a vulnerability scan catch obvious gaps, but
                        only an independent penetration test finds the business-logic and
                        authorization flaws scanners miss — and enterprise buyers
                        increasingly require both a recent pentest and SOC 2.
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
                    The four areas to check
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
                    Signals you are in reasonable shape
                </h2>
                <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300 text-base leading-relaxed mb-10">
                    {signals.map((s) => (
                        <li key={s}>{s}</li>
                    ))}
                </ul>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    When to bring in a penetration test
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                    Once the basics above are in place, an independent penetration test is
                    how you find what you cannot see yourself: broken object-level
                    authorization, tenant-isolation gaps, abusable workflows, and chained
                    issues that no scanner flags. It is also the artifact enterprise
                    buyers ask for. A good test is manual, run by a senior tester, and
                    delivered as a report with reproducible steps, severity backed by
                    exploitability, and a remediation plan — plus a retest after you fix
                    the findings.
                </p>
                <p className="text-gray-300 text-base leading-relaxed mb-10">
                    QUANT LAB USA runs founder-led, manual penetration tests for SaaS
                    products. See the{" "}
                    <Link
                        href="/services"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        services
                    </Link>{" "}
                    page, the hardening guide in{" "}
                    <Link
                        href="/ai/how-do-i-protect-my-saas-from-getting-hacked"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        how do I protect my SaaS from getting hacked
                    </Link>
                    , or what a test involves in{" "}
                    <Link
                        href="/ai/how-long-does-a-penetration-test-take"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        how long does a penetration test take
                    </Link>
                    .
                </p>

                <h2 className="text-2xl font-bold text-white mb-4 mt-12">
                    Sources and methodology
                </h2>
                <p className="text-gray-300 text-base leading-relaxed mb-4">
                    The control areas map to widely used frameworks including the OWASP
                    Top 10 and common SOC 2 expectations as of 2026. For the
                    enterprise-sales angle, see{" "}
                    <Link
                        href="/ai/do-i-need-soc-2-to-sell-to-enterprise"
                        className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline"
                    >
                        do I need SOC 2 to sell to enterprise
                    </Link>
                    . Security terms are defined in the{" "}
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
