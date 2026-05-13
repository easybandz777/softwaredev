import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Quote, ArrowLeft } from "lucide-react";
import { articleMetadata } from "@/lib/seoMeta";
import {
    breadcrumbSchema,
    organizationSchema,
    personSchema,
    SITE_URL,
} from "@/lib/schemas";
import { NewsletterInlineSignup } from "@/components/NewsletterInlineSignup";

const SLUG = "quant-lab-usa-completes-14-client-engagements-2026";
const PUBLISHED = "2026-05-12";

export const metadata: Metadata = articleMetadata({
    title: "QUANT LAB USA Completes 14 Client Engagements in First Five Months of 2026",
    description:
        "QUANT LAB USA INC reports 14 completed client engagements through May 2026, covering custom CRM, Stripe Connect, HIPAA-aware portals, and penetration testing across 14 US cities.",
    slug: `newsroom/${SLUG}`,
    image: "/og-image.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ["Bill Beltz"],
    keywords: [
        "QUANT LAB USA client engagements",
        "Macon software case studies 2026",
        "custom software firm milestone",
        "Bill Beltz client work",
    ],
});

const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${SITE_URL}/newsroom/${SLUG}#article`,
    headline:
        "QUANT LAB USA Completes 14 Client Engagements in First Five Months of 2026",
    description:
        "QUANT LAB USA INC reports 14 completed client engagements through May 2026.",
    datePublished: PUBLISHED,
    dateModified: PUBLISHED,
    image: `${SITE_URL}/og-image.png`,
    author: { "@id": `${SITE_URL}/#william-beltz` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${SITE_URL}/newsroom/${SLUG}`,
    },
    url: `${SITE_URL}/newsroom/${SLUG}`,
    inLanguage: "en-US",
    articleSection: "Milestone",
    keywords:
        "client engagements, custom software, QUANT LAB USA, CRM, Stripe, penetration testing",
};

const breadcrumbs = breadcrumbSchema(
    [
        { name: "Home", url: "/" },
        { name: "Newsroom", url: "/newsroom" },
        { name: "14 Engagements Milestone", url: `/newsroom/${SLUG}` },
    ],
    `/newsroom/${SLUG}`,
);

export default function ReleaseMilestonePage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(newsArticleSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema()),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(personSchema()),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbs),
                }}
            />

            <article className="container mx-auto px-6 max-w-3xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400 flex-wrap">
                        <li>
                            <Link
                                href="/"
                                className="hover:text-sky-400 transition-colors"
                            >
                                Home
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">
                            ›
                        </li>
                        <li>
                            <Link
                                href="/newsroom"
                                className="hover:text-sky-400 transition-colors"
                            >
                                Newsroom
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">
                            ›
                        </li>
                        <li className="text-gray-300">14 engagements milestone</li>
                    </ol>
                </nav>

                <header className="mb-8">
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">
                        PRESS RELEASE · Milestone
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-4">
                        QUANT LAB USA Completes 14 Client Engagements in First
                        Five Months of 2026
                    </h1>
                    <p className="text-sm text-gray-400">
                        <strong className="text-white">
                            MACON, Ga. — May 12, 2026
                        </strong>{" "}
                        — For immediate release
                    </p>
                </header>

                <div className="prose prose-invert max-w-none text-gray-200 leading-relaxed space-y-5">
                    <p className="text-lg text-gray-100 leading-relaxed">
                        <strong>
                            QUANT LAB USA INC today reported the completion of
                            14 client engagements during the first five months
                            of 2026, spanning custom CRM development, Stripe
                            Connect integrations, HIPAA-aware internal portals,
                            and full-scope penetration testing. Engagements
                            were delivered to clients across 14 US cities under
                            a remote-first model, with senior-engineering
                            ownership from architecture through deployment.
                        </strong>
                    </p>

                    <p>
                        The 14 engagements break down across four primary
                        service lines. Custom CRM and operations-platform work
                        — including Salesforce displacement projects detailed
                        in QUANT LAB&apos;s{" "}
                        <Link
                            href="/blog/custom-crm-vs-salesforce-vs-hubspot-2026"
                            className="text-sky-400 hover:underline"
                        >
                            CRM comparison guide
                        </Link>{" "}
                        — accounted for the largest share, followed by Stripe
                        Connect billing and marketplace integrations, then
                        compliance-aware internal portal development for
                        regulated industries, and finally offensive-security
                        engagements (web application, network, and Active
                        Directory penetration tests aligned to MITRE
                        ATT&amp;CK).
                    </p>

                    <p>
                        Engagement geography spanned the firm&apos;s full
                        service footprint, with delivery to clients in{" "}
                        <Link
                            href="/software-development-macon-ga"
                            className="text-sky-400 hover:underline"
                        >
                            Macon
                        </Link>
                        ,{" "}
                        <Link
                            href="/software-development-atlanta-ga"
                            className="text-sky-400 hover:underline"
                        >
                            Atlanta
                        </Link>
                        ,{" "}
                        <Link
                            href="/software-development-savannah-ga"
                            className="text-sky-400 hover:underline"
                        >
                            Savannah
                        </Link>
                        ,{" "}
                        <Link
                            href="/software-development-austin-tx"
                            className="text-sky-400 hover:underline"
                        >
                            Austin
                        </Link>
                        ,{" "}
                        <Link
                            href="/software-development-dallas-tx"
                            className="text-sky-400 hover:underline"
                        >
                            Dallas
                        </Link>
                        ,{" "}
                        <Link
                            href="/software-development-charlotte-nc"
                            className="text-sky-400 hover:underline"
                        >
                            Charlotte
                        </Link>
                        ,{" "}
                        <Link
                            href="/software-development-nashville-tn"
                            className="text-sky-400 hover:underline"
                        >
                            Nashville
                        </Link>
                        ,{" "}
                        <Link
                            href="/software-development-miami-fl"
                            className="text-sky-400 hover:underline"
                        >
                            Miami
                        </Link>
                        , and{" "}
                        <Link
                            href="/software-development-chicago-il"
                            className="text-sky-400 hover:underline"
                        >
                            Chicago
                        </Link>{" "}
                        among others. Engagement values ranged from
                        single-engagement penetration tests in the
                        $9K–$45K range up through multi-quarter platform builds
                        in the $250K–$600K range. All client names are
                        confidential by default; specific case studies are
                        published with explicit written permission.
                    </p>

                    <p>
                        Common patterns across the engagement portfolio
                        include a sharp uptick in build-vs-buy procurement
                        questions driven by 2026 SaaS price increases, a
                        consistent demand for Stripe Connect deposit-on-hold
                        workflows in marketplaces and service businesses, and
                        a continuing wave of SOC-2-prep penetration tests
                        ahead of enterprise procurement cycles. The most
                        unexpected pattern was the frequency of HIPAA-aware
                        internal portal work for non-clinical operators — back-
                        office tooling for clinics, dental groups, and home-
                        health agencies that needed real audit trails and
                        encryption-at-rest discipline without an
                        enterprise-tooling budget.
                    </p>

                    <p>
                        The firm&apos;s engagement model — anchor MVP at fixed
                        fee followed by retainer for ongoing work — held up
                        across all 14 engagements, with five converting from
                        anchor MVP into a retainer relationship for ongoing
                        feature work, infrastructure ownership, or secondary
                        penetration testing. The remaining engagements closed
                        as one-time fixed-fee deliveries with proactive
                        handoff documentation.
                    </p>

                    <p>
                        QUANT LAB USA is on track for continued growth through
                        the second half of 2026, with a published cadence
                        target of 24 to 30 engagements for the calendar year.
                        Read about engagement structure in the{" "}
                        <Link
                            href="/methodology"
                            className="text-sky-400 hover:underline"
                        >
                            firm&apos;s methodology page
                        </Link>{" "}
                        and the{" "}
                        <Link
                            href="/process"
                            className="text-sky-400 hover:underline"
                        >
                            process overview
                        </Link>
                        .
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                        Founder statement
                    </h2>

                    <blockquote className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8 my-6 not-prose">
                        <div className="flex items-start gap-4">
                            <Quote
                                className="w-6 h-6 text-sky-400 flex-shrink-0"
                                aria-hidden="true"
                            />
                            <div className="text-gray-200 leading-relaxed italic space-y-3">
                                <p>
                                    The number that matters is not 14
                                    engagements — it is that all 14 of them
                                    shipped on time, all 14 of them passed
                                    their pre-launch QA without major surprises,
                                    and the majority of them either renewed
                                    into a retainer or referred us into the
                                    next engagement. Volume is easy to fake.
                                    Quality at volume is the real signal. The
                                    discipline that lets a small firm clear
                                    that bar is senior engineering ownership
                                    end-to-end — no junior solo work on
                                    production code, no anonymous PR review,
                                    no &quot;the architect is on the call but
                                    not in the code&quot; pattern.
                                </p>
                                <p>
                                    The market is changing fast. AI-augmented
                                    engineering moved from novelty to default
                                    inside our team, and the throughput delta
                                    is real — somewhere in the 30 to 40% range,
                                    consistent with what is being reported
                                    across the industry. But the risk delta is
                                    also real. Teams shipping unreviewed AI
                                    output to production are accumulating
                                    technical debt at AI speed. We have not
                                    relaxed our review culture. If anything we
                                    have tightened it. That is the trade I
                                    will keep making.
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-gray-400 not-prose pl-10">
                            — Bill Beltz, Founder &amp; Principal Engineer,
                            QUANT LAB USA INC
                        </p>
                    </blockquote>

                    <NewsletterInlineSignup
                        source="newsroom-release-milestone"
                        headline="Get the next case study in your inbox"
                        cta="Subscribe"
                    />

                    <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                        About QUANT LAB USA INC
                    </h2>
                    <p>
                        QUANT LAB USA INC is a Macon, Georgia-based custom
                        software development and cybersecurity firm. The
                        company designs and ships production-grade web and SaaS
                        applications, CRMs, Stripe integrations, licensing
                        systems, and algorithmic trading platforms, and hardens
                        them through professional penetration testing aligned
                        to MITRE ATT&amp;CK. The firm serves clients
                        nationwide from its Macon headquarters. More at{" "}
                        <a
                            href="https://quantlabusa.dev"
                            className="text-sky-400 hover:underline"
                        >
                            quantlabusa.dev
                        </a>
                        .
                    </p>

                    <h2 className="text-2xl font-bold text-white mt-10 mb-4">
                        Press contact
                    </h2>
                    <ul className="text-gray-200 leading-relaxed space-y-1 not-prose">
                        <li className="flex items-center gap-2">
                            <Mail
                                className="w-4 h-4 text-sky-400"
                                aria-hidden="true"
                            />
                            <a
                                href="mailto:beltz@quantlabusa.dev"
                                className="text-sky-400 hover:underline"
                            >
                                beltz@quantlabusa.dev
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <Phone
                                className="w-4 h-4 text-sky-400"
                                aria-hidden="true"
                            />
                            <a
                                href="tel:+17706521282"
                                className="text-sky-400 hover:underline"
                            >
                                (770) 652-1282
                            </a>
                        </li>
                        <li className="flex items-center gap-2">
                            <MapPin
                                className="w-4 h-4 text-sky-400"
                                aria-hidden="true"
                            />
                            Macon, Georgia, United States
                        </li>
                    </ul>
                </div>

                <hr className="border-white/10 my-12" />

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <Link
                        href="/newsroom"
                        className="inline-flex items-center gap-2 text-sky-400 hover:underline text-sm"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to newsroom
                    </Link>
                    <p className="text-xs text-gray-500">
                        Case studies:{" "}
                        <Link
                            href="/work"
                            className="text-sky-400 hover:underline"
                        >
                            /work
                        </Link>
                    </p>
                </div>
            </article>
        </main>
    );
}
