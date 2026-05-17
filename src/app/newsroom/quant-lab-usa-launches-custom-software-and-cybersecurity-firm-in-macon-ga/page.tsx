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

const SLUG =
    "quant-lab-usa-launches-custom-software-and-cybersecurity-firm-in-macon-ga";
const PUBLISHED = "2024-11-09";

export const metadata: Metadata = articleMetadata({
    title: "QUANT LAB USA Launches Custom Software Firm in Macon, GA",
    description:
        "Macon-based founder-led custom software and cybersecurity firm QUANT LAB USA launches with services across the US Southeast and beyond. Press release.",
    slug: `newsroom/${SLUG}`,
    image: "/og-image.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ["Bill Beltz"],
    keywords: [
        "QUANT LAB USA launch",
        "Macon software company",
        "Bill Beltz founder",
        "custom software Macon GA",
        "penetration testing Macon",
    ],
});

const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${SITE_URL}/newsroom/${SLUG}#article`,
    headline:
        "QUANT LAB USA Launches Custom Software & Cybersecurity Firm in Macon, GA",
    description:
        "Founder Bill Beltz announces QUANT LAB USA INC — a Macon-based custom software and penetration testing firm built for founders who outgrew off-the-shelf SaaS.",
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
    articleSection: "Company News",
    keywords:
        "QUANT LAB USA, Bill Beltz, Macon Georgia, custom software firm launch, penetration testing",
};

const breadcrumbs = breadcrumbSchema(
    [
        { name: "Home", url: "/" },
        { name: "Newsroom", url: "/newsroom" },
        { name: "QUANT LAB USA Launches", url: `/newsroom/${SLUG}` },
    ],
    `/newsroom/${SLUG}`,
);

export default function ReleaseLaunchPage() {
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
                        <li className="text-gray-300">Launch announcement</li>
                    </ol>
                </nav>

                <header className="mb-8">
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">
                        PRESS RELEASE · Company News
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-4">
                        QUANT LAB USA Launches Custom Software &amp;
                        Cybersecurity Firm in Macon, Georgia
                    </h1>
                    <p className="text-sm text-gray-400">
                        <strong className="text-white">
                            MACON, Ga. — November 9, 2024
                        </strong>{" "}
                        — For immediate release
                    </p>
                </header>

                <div className="prose prose-invert max-w-none text-gray-200 leading-relaxed space-y-5">
                    <p className="text-lg text-gray-100 leading-relaxed">
                        <strong>
                            QUANT LAB USA INC — a Macon, Georgia-based custom
                            software development and cybersecurity firm —
                            officially opened for business today, founded by
                            principal engineer Bill Beltz to serve founders and
                            operators who have outgrown off-the-shelf SaaS and
                            need software built specifically for the way their
                            business actually runs.
                        </strong>
                    </p>

                    <p>
                        The firm operates as a Georgia C-Corporation (Georgia
                        Secretary of State filing #26086454, EIN 42-2039870)
                        and is headquartered in Macon&apos;s downtown business
                        corridor. From day one, QUANT LAB USA serves clients
                        both locally and remotely through a delivery model that
                        combines fixed-fee MVP builds with dedicated retainer
                        engagements for ongoing work — a structure designed for
                        small- and mid-market founders who need predictable
                        budgets and senior-engineering quality.
                    </p>

                    <p>
                        The launch positions QUANT LAB USA at the intersection
                        of two markets that have historically been served
                        separately: production-grade application development
                        (web platforms, CRMs, Stripe-integrated billing,
                        algorithmic trading systems, internal portals) and
                        offensive-security work (web application penetration
                        testing, network and Active Directory assessments,
                        MITRE ATT&amp;CK-aligned reporting). Most clients,
                        Beltz observes, need both — and the firm is structured
                        to ship the build and harden it in the same engagement.
                    </p>

                    <p>
                        QUANT LAB USA enters the market with a published
                        engagement model, transparent pricing ranges for each
                        service line, a verified Google Business Profile, and a
                        five-star verified Google review from its first
                        engagement. The firm has confirmed engagements in
                        custom CRM development, Stripe Connect integrations for
                        marketplaces with deposit-on-hold workflows,
                        HIPAA-aware internal portal development, and{" "}
                        <Link
                            href="/services/penetration-testing"
                            className="text-sky-400 hover:underline"
                        >
                            web application penetration testing
                        </Link>{" "}
                        for SaaS startups preparing for SOC 2 audits.
                    </p>

                    <p>
                        The firm&apos;s positioning is deliberately
                        non-traditional. Where most software consultancies
                        target enterprise budgets and bury pricing behind
                        sales-team intake, QUANT LAB USA publishes service
                        ranges directly on the site, runs a public cost
                        calculator for each major service line — including a{" "}
                        <Link
                            href="/calculators/build-vs-buy"
                            className="text-sky-400 hover:underline"
                        >
                            build-vs-buy calculator
                        </Link>
                        ,{" "}
                        <Link
                            href="/calculators/stripe-cost"
                            className="text-sky-400 hover:underline"
                        >
                            Stripe cost calculator
                        </Link>
                        ,{" "}
                        <Link
                            href="/calculators/crm-roi"
                            className="text-sky-400 hover:underline"
                        >
                            CRM ROI calculator
                        </Link>
                        , and{" "}
                        <Link
                            href="/calculators/pentest-cost"
                            className="text-sky-400 hover:underline"
                        >
                            penetration test cost calculator
                        </Link>{" "}
                        — and offers a free 30-minute founder-direct
                        consultation to qualify projects before any proposal.
                    </p>

                    <p>
                        QUANT LAB USA initially serves clients in Macon and the
                        broader Southeast — including{" "}
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
                            href="/software-development-columbus-ga"
                            className="text-sky-400 hover:underline"
                        >
                            Columbus
                        </Link>
                        , and{" "}
                        <Link
                            href="/software-development-augusta-ga"
                            className="text-sky-400 hover:underline"
                        >
                            Augusta
                        </Link>{" "}
                        — with a remote-first model that allows engagements
                        anywhere in the contiguous United States.
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
                                    I started QUANT LAB USA because I kept
                                    watching small and mid-market operators get
                                    quoted six-figure SaaS bills for software
                                    that solved 70% of their problem and
                                    actively got in the way for the other 30%.
                                    There is a real gap between &quot;Squarespace
                                    template&quot; and &quot;enterprise
                                    six-month discovery phase&quot; — and that
                                    gap is where most growing companies
                                    actually live. The brief I get over and
                                    over is the same: I have a real business,
                                    real revenue, real ops complexity, and I
                                    need software that fits, not software I
                                    fit to.
                                </p>
                                <p>
                                    Macon is the right place to do this work.
                                    The cost structure lets us do
                                    senior-engineer-led builds at prices that
                                    make sense for a regional founder, the
                                    talent pool is real, and the Southeast has
                                    a level of straightforwardness in client
                                    relationships that I have not found in the
                                    coastal hub markets. We will be opinionated
                                    about scope, transparent about price, and
                                    explicit about what we will not take on. If
                                    that lands, we will earn the work.
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-gray-400 not-prose pl-10">
                            — Bill Beltz, Founder &amp; Principal Engineer,
                            QUANT LAB USA INC
                        </p>
                    </blockquote>

                    <NewsletterInlineSignup
                        source="newsroom-release-launch"
                        headline="Follow QUANT LAB USA milestones"
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
                        systems, and algorithmic trading platforms, and
                        hardens them through professional penetration testing
                        aligned to MITRE ATT&amp;CK. The firm serves clients
                        nationwide from its Macon headquarters. Founder Bill
                        Beltz writes the QUANT LAB newsletter and publishes a
                        long-form{" "}
                        <Link
                            href="/blog"
                            className="text-sky-400 hover:underline"
                        >
                            engineering and operations blog
                        </Link>
                        . More at{" "}
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
                        Press kit + downloadable logos:{" "}
                        <Link
                            href="/press-kit"
                            className="text-sky-400 hover:underline"
                        >
                            /press-kit
                        </Link>
                    </p>
                </div>
            </article>
        </main>
    );
}
