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
    "quant-lab-usa-now-serving-14-us-cities-with-remote-software-development";
const PUBLISHED = "2026-05-12";

export const metadata: Metadata = articleMetadata({
    title: "QUANT LAB USA Now Serving 14 US Cities Remotely",
    description:
        "QUANT LAB USA expands remote custom software and pen testing coverage to 14 US cities — including Atlanta, Macon, Austin, Dallas, NYC, SF, and Seattle.",
    slug: `newsroom/${SLUG}`,
    image: "/og-image.png",
    publishedTime: PUBLISHED,
    modifiedTime: PUBLISHED,
    authors: ["Bill Beltz"],
    keywords: [
        "QUANT LAB USA geographic expansion",
        "remote custom software development",
        "Macon software firm nationwide",
        "14 US cities software development",
    ],
});

const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "@id": `${SITE_URL}/newsroom/${SLUG}#article`,
    headline:
        "QUANT LAB USA Now Serving 14 US Cities With Remote Custom Software Development",
    description:
        "QUANT LAB USA INC expands its geographic footprint to 14 US metros with a remote-first delivery model.",
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
    articleSection: "Geographic Expansion",
    keywords:
        "remote software development, custom software nationwide, Macon software firm, geographic expansion",
};

const breadcrumbs = breadcrumbSchema(
    [
        { name: "Home", url: "/" },
        { name: "Newsroom", url: "/newsroom" },
        { name: "14 Cities Expansion", url: `/newsroom/${SLUG}` },
    ],
    `/newsroom/${SLUG}`,
);

export default function ReleaseExpansionPage() {
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
                        <li className="text-gray-300">14 Cities Expansion</li>
                    </ol>
                </nav>

                <header className="mb-8">
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">
                        PRESS RELEASE · Geographic Expansion
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-4">
                        QUANT LAB USA Now Serving 14 US Cities With Remote
                        Custom Software Development
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
                            QUANT LAB USA INC today announced active client
                            service in 14 US metropolitan areas through a
                            remote-first delivery model. The expansion confirms
                            the firm&apos;s positioning as a nationwide custom
                            software development and cybersecurity partner
                            anchored in Macon, Georgia, with localized landing
                            pages, market context, and in-region context for
                            each served metro.
                        </strong>
                    </p>

                    <p>
                        The 14 metro footprint includes five Georgia cities —{" "}
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
                            href="/software-development-augusta-ga"
                            className="text-sky-400 hover:underline"
                        >
                            Augusta
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
                            href="/software-development-savannah-ga"
                            className="text-sky-400 hover:underline"
                        >
                            Savannah
                        </Link>{" "}
                        — plus three Southeast metros (
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
                        ), two Texas metros (
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
                        ), and four large-population coastal and Midwest
                        metros (
                        <Link
                            href="/software-development-new-york-ny"
                            className="text-sky-400 hover:underline"
                        >
                            New York
                        </Link>
                        ,{" "}
                        <Link
                            href="/software-development-chicago-il"
                            className="text-sky-400 hover:underline"
                        >
                            Chicago
                        </Link>
                        ,{" "}
                        <Link
                            href="/software-development-seattle-wa"
                            className="text-sky-400 hover:underline"
                        >
                            Seattle
                        </Link>
                        ,{" "}
                        <Link
                            href="/software-development-san-francisco-ca"
                            className="text-sky-400 hover:underline"
                        >
                            San Francisco
                        </Link>
                        ).
                    </p>

                    <p>
                        Each metro footprint includes a dedicated landing page
                        with localized procurement context, industry concentration
                        notes, and a recommended engagement structure for
                        the city&apos;s typical buyer profile. The remote-first
                        delivery model is anchored by a Macon-based senior
                        engineering team supplemented by region-aware
                        availability for client video calls and quarterly
                        on-site work where useful. Engagement quality is
                        independent of geography by design — the firm operates
                        a single delivery standard regardless of buyer
                        location, with all senior engineering and architectural
                        ownership routed through the Macon HQ.
                    </p>

                    <p>
                        The expansion is structurally enabled by three
                        deliberate choices. First, the firm&apos;s technology
                        stack — Next.js, TypeScript, Postgres, AWS, Stripe — is
                        intentionally portable and well-supported in every US
                        metro, eliminating geographic skill-gap risk. Second,
                        the engagement model is anchored on async-first
                        communication with scheduled synchronous touchpoints,
                        a pattern that has proven effective across time zones
                        and which the firm has refined over the past 18 months.
                        Third, QUANT LAB&apos;s pricing transparency — including
                        published service ranges and public cost calculators —
                        removes one of the largest sources of geographic friction
                        in the procurement process.
                    </p>

                    <p>
                        For the markets served, the firm&apos;s positioning is
                        distinct from both local boutiques and global mega-shops.
                        Local boutiques typically cap out at smaller engagement
                        scope due to bench depth; global mega-shops bring
                        process overhead that mid-market founders cannot
                        absorb. QUANT LAB&apos;s footprint targets the gap —
                        senior engineering throughput at mid-market budgets,
                        with the cost structure of a Macon-headquartered firm
                        and the engagement model of a coastal consultancy.
                    </p>

                    <p>
                        The firm intends to maintain the 14-metro footprint
                        for the remainder of 2026 with a focused
                        client-acquisition strategy in each market. The next
                        geographic expansion — three additional metros — is
                        planned for early 2027 once team capacity allows for
                        further volume without compromising the
                        senior-engineering-led delivery model. Detail on the
                        firm&apos;s services for each market is available on
                        the{" "}
                        <Link
                            href="/services"
                            className="text-sky-400 hover:underline"
                        >
                            services index
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="/locations"
                            className="text-sky-400 hover:underline"
                        >
                            locations index
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
                                    We chose Macon as our headquarters
                                    deliberately. The cost structure here lets
                                    us run senior-engineer-led builds at
                                    mid-market budgets and still pay senior-
                                    engineer salaries. The talent pool is real
                                    — Georgia Tech, Mercer, and a steady
                                    stream of senior engineers moving back to
                                    the Southeast from coastal markets — and
                                    the Southeast in general has a directness
                                    in business relationships that I prefer to
                                    coastal sales-team intermediation.
                                </p>
                                <p>
                                    Serving 14 cities does not mean we have
                                    14 offices. It means we have done the work
                                    to publish localized procurement context
                                    and engagement structure for each market,
                                    and we have operated long enough with
                                    distributed-time-zone clients to do it
                                    well. Founders in Austin and founders in
                                    Macon do not buy software the same way,
                                    and the localized landing pages reflect
                                    that. The firm is not pretending to be
                                    everywhere — it is being honest about
                                    where it can deliver, which is everywhere
                                    a senior engineer can ship via Slack and
                                    Zoom. Which, in 2026, is almost everywhere.
                                </p>
                            </div>
                        </div>
                        <p className="mt-4 text-sm text-gray-400 not-prose pl-10">
                            — Bill Beltz, Founder &amp; Principal Engineer,
                            QUANT LAB USA INC
                        </p>
                    </blockquote>

                    <NewsletterInlineSignup
                        source="newsroom-release-expansion"
                        headline="Get future expansion + market reports"
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
                        Locations:{" "}
                        <Link
                            href="/locations"
                            className="text-sky-400 hover:underline"
                        >
                            /locations
                        </Link>
                    </p>
                </div>
            </article>
        </main>
    );
}
