import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, FileSearch, Quote, RefreshCcw, ShieldCheck } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = pageMetadata({
    title: "Fact-Checking Policy & Process (2026) | QUANT LAB USA",
    description:
        "How QUANT LAB USA fact-checks every claim before publishing — sources, review workflow, corrections, and contact info for reporting errors. 2026 process.",
    slug: "about/fact-checking",
});

const lastUpdated = "2026-05-16";

const policyLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Fact-Checking Policy | QUANT LAB USA",
    url: "https://quantlabusa.dev/about/fact-checking",
    dateModified: lastUpdated,
    publisher: { "@id": "https://quantlabusa.dev/#organization" },
    isPartOf: { "@id": "https://quantlabusa.dev/#website" },
    about: { "@type": "Thing", name: "Fact-checking and corrections policy" },
};

const sourceTiers = [
    {
        tier: "Tier 1 — Primary",
        examples: [
            "Government agencies (.gov, .mil) — NIST, CISA, FTC, IRS, SEC",
            "Standards bodies — OWASP, MITRE ATT&CK, ISO, PCI Security Standards Council",
            "Academic — peer-reviewed journals, .edu publications",
            "Official vendor documentation — Stripe Docs, AWS docs, Vercel docs",
            "Public regulatory filings — SOC 2 audit reports, 10-Ks, SOS records",
        ],
        body: "Default tier for any technical claim, statistic, compliance requirement, or pricing range. Always cited inline when a specific number or rule is asserted.",
    },
    {
        tier: "Tier 2 — Established secondary",
        examples: [
            "Recognized industry publications with editorial standards (e.g. The Verge, Ars Technica, IEEE Spectrum)",
            "Research firms with disclosed methodology (Gartner, Forrester, Stack Overflow Developer Survey)",
            "Open-source project maintainer notes and release announcements",
        ],
        body: "Acceptable when no primary source exists, or to provide context. Always cited with publisher and date.",
    },
    {
        tier: "Tier 3 — Lived engagement evidence",
        examples: [
            "Quotes we issued or received during real RFPs",
            "Production benchmarks from live systems we built",
            "Pentest findings from completed engagements (always anonymized)",
        ],
        body: "Used where the post is explicitly written from inside the work. We attribute as 'in our 2026 engagements' or 'across the quotes we have reviewed' so the reader knows the source is operational experience, not a published benchmark.",
    },
    {
        tier: "Avoided",
        examples: [
            "Generic 'experts say' attributions without a named source",
            "Marketing blog posts citing other marketing blog posts in a circle",
            "Statistics whose original source cannot be located",
        ],
        body: "If we cannot trace a claim back to a Tier 1 or Tier 2 source, we either omit it or rewrite the assertion as something we can stand behind from lived engagement (Tier 3).",
    },
];

const checks = [
    {
        title: "Author source pass",
        body: "Before submitting for review, the author annotates every factual claim with the source candidate they used to write it.",
    },
    {
        title: "Reviewer source verification",
        body: "The reviewer opens every cited URL, confirms the source supports the claim as stated, and validates the date and publisher attribution.",
    },
    {
        title: "Numbers, ranges, and pricing",
        body: "Specific numbers (penetration test cost, SaaS prices, latency benchmarks) get extra scrutiny. We prefer ranges with a stated source over single point estimates with no source.",
    },
    {
        title: "Names, titles, and entities",
        body: "Every proper noun (company names, product names, framework versions, people's titles) is verified against the entity's own current website or filing.",
    },
    {
        title: "Compliance and regulatory claims",
        body: "Any claim about SOC 2, HIPAA, PCI DSS, GDPR, etc. is checked against the current standard text, not a summary. Where the standard is ambiguous, we say so.",
    },
];

export default function FactCheckingPolicyPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(policyLd) }}
            />

            <div className="container mx-auto px-6 max-w-3xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li>
                            <Link href="/" className="hover:text-sky-400 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">
                            ›
                        </li>
                        <li>
                            <Link
                                href="/about"
                                className="hover:text-sky-400 transition-colors"
                            >
                                About
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">
                            ›
                        </li>
                        <li className="text-gray-300">Fact-checking</li>
                    </ol>
                </nav>

                <header className="mb-10">
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                        Fact-Checking Policy
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                        How we verify every claim before publish
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        We try to write the kind of post we would want to read —
                        opinions backed by sources, numbers with provenance,
                        corrections when we get something wrong. This document is
                        the working checklist a reviewer holds a draft against.
                    </p>
                    <p className="mt-3 text-xs text-gray-500">
                        Last updated:{" "}
                        <time dateTime={lastUpdated}>{lastUpdated}</time>
                    </p>
                </header>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-2">
                        <FileSearch className="h-6 w-6 text-sky-400" />
                        Source hierarchy
                    </h2>
                    <div className="space-y-4">
                        {sourceTiers.map((t) => (
                            <div
                                key={t.tier}
                                className="rounded-2xl border border-white/8 bg-[#0d1526]/60 p-6"
                            >
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {t.tier}
                                </h3>
                                <p className="text-gray-300 leading-relaxed mb-3">
                                    {t.body}
                                </p>
                                <ul className="space-y-1 text-sm text-gray-400">
                                    {t.examples.map((ex) => (
                                        <li
                                            key={ex}
                                            className="flex items-start gap-2"
                                        >
                                            <span className="text-sky-400">·</span>
                                            <span>{ex}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-2">
                        <CheckCircle2 className="h-6 w-6 text-emerald-400" />
                        The fact-checking checklist
                    </h2>
                    <ol className="space-y-3">
                        {checks.map((c, idx) => (
                            <li
                                key={c.title}
                                className="rounded-xl border border-white/8 bg-[#0d1526]/40 p-5"
                            >
                                <p className="text-sm font-semibold text-sky-400 mb-1">
                                    {idx + 1}. {c.title}
                                </p>
                                <p className="text-gray-300 leading-relaxed">{c.body}</p>
                            </li>
                        ))}
                    </ol>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-2">
                        <Quote className="h-6 w-6 text-sky-400" />
                        Quoting clients and case studies
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-3">
                        Client testimonials are only published after written
                        sign-off. Until that sign-off arrives, the case study runs
                        without a quote. We do not paraphrase a client&apos;s words
                        and present the paraphrase as a quote.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        Case-study outcomes (percentages, hours saved, revenue
                        impact) are sourced from the client&apos;s own data or from
                        our shipped instrumentation. Where we cannot verify a
                        number, we either say so (&quot;estimated&quot;) or leave it
                        out.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-2">
                        <RefreshCcw className="h-6 w-6 text-sky-400" />
                        Corrections &amp; updates
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-3">
                        When we get something wrong, the workflow is:
                    </p>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                        <li>Acknowledge the error to the reporter within 5 business days.</li>
                        <li>Update the post in place with the corrected text.</li>
                        <li>
                            Add a dated &quot;Correction&quot; line at the bottom of
                            the post describing what changed.
                        </li>
                        <li>
                            Re-issue the article&apos;s <code>dateModified</code> in
                            the JSON-LD schema.
                        </li>
                    </ol>
                    <p className="text-gray-400 leading-relaxed mt-3">
                        If a post is materially wrong from premise to conclusion, we
                        retract it — leave the URL live with a clear retraction note
                        at the top, and remove the original copy. We do not silently
                        delete URLs.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex items-center gap-2">
                        <ShieldCheck className="h-6 w-6 text-sky-400" />
                        Report an error
                    </h2>
                    <p className="text-gray-400 leading-relaxed">
                        Email{" "}
                        <a
                            href="mailto:beltz@quantlabusa.dev?subject=Fact-check%20report"
                            className="text-sky-400 hover:underline"
                        >
                            beltz@quantlabusa.dev
                        </a>{" "}
                        with the post URL, the specific claim, and (if available) a
                        source that supports the correct version. Reports go to the
                        founder; corrections are made by the editorial team within
                        the timeline above.
                    </p>
                </section>

                <section className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 text-center">
                    <h2 className="text-2xl font-bold text-white mb-3">
                        Read the editorial policy
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-6 leading-relaxed">
                        Full authorship, review, AI disclosure, and conflict-of-interest standards.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <Link
                            href="/about/editorial-policy"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border border-white/10 text-gray-200 hover:bg-white/5"
                        >
                            Editorial policy
                        </Link>
                        <Link
                            href="/authors"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border border-white/10 text-gray-200 hover:bg-white/5"
                        >
                            Authors &amp; bios
                        </Link>
                        <ConsultationCTA
                            label="Book a Consultation"
                            source="fact-checking-policy"
                        />
                    </div>
                </section>
            </div>
        </main>
    );
}
