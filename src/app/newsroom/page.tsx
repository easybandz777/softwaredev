import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper, ArrowRight, Calendar, FileText } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import { breadcrumbSchema, organizationSchema, personSchema } from "@/lib/schemas";

export const metadata: Metadata = pageMetadata({
    title: "QUANT LAB USA Newsroom — Press, News & Announcements",
    description:
        "Official press releases, news, and milestones from QUANT LAB USA — Macon, Georgia-based custom software and cybersecurity firm. 2026 updates.",
    slug: "newsroom",
    image: "/og-image.png",
    keywords: [
        "QUANT LAB newsroom",
        "QUANT LAB USA press release",
        "Macon software company news",
        "Bill Beltz newsroom",
    ],
});

const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://quantlabusa.dev/newsroom#collection",
    url: "https://quantlabusa.dev/newsroom",
    name: "QUANT LAB USA Newsroom",
    description:
        "Press releases, company updates, and the newsletter archive from QUANT LAB USA INC.",
    isPartOf: { "@id": "https://quantlabusa.dev/#website" },
    about: { "@id": "https://quantlabusa.dev/#organization" },
    inLanguage: "en-US",
};

const breadcrumbs = breadcrumbSchema(
    [
        { name: "Home", url: "/" },
        { name: "Newsroom", url: "/newsroom" },
    ],
    "/newsroom",
);

type PressRelease = {
    slug: string;
    title: string;
    dateline: string;
    date: string;
    summary: string;
};

const RELEASES: PressRelease[] = [
    {
        slug: "quant-lab-usa-launches-custom-software-and-cybersecurity-firm-in-macon-ga",
        title:
            "QUANT LAB USA Launches Custom Software & Cybersecurity Firm in Macon, GA",
        dateline: "MACON, Ga. — November 9, 2024",
        date: "2024-11-09",
        summary:
            "Founder Bill Beltz announces QUANT LAB USA INC — a Macon-based custom software and penetration testing firm built for founders who outgrew off-the-shelf SaaS.",
    },
    {
        slug: "quant-lab-usa-publishes-2026-software-development-cost-guide",
        title:
            "QUANT LAB USA Publishes 2026 Custom Software Development Cost Guide",
        dateline: "MACON, Ga. — May 12, 2026",
        date: "2026-05-12",
        summary:
            "QUANT LAB USA INC releases a free 2026 cost guide covering MVP, mid-market, and Series-A grade custom software builds. Public, free, no email gate.",
    },
    {
        slug: "quant-lab-usa-completes-14-client-engagements-2026",
        title:
            "QUANT LAB USA Completes 14 Client Engagements in First Five Months of 2026",
        dateline: "MACON, Ga. — May 12, 2026",
        date: "2026-05-12",
        summary:
            "Composite engagement summary covering custom CRM builds, Stripe Connect integrations, penetration tests, and HIPAA-aware portals shipped to clients across 14 US cities.",
    },
    {
        slug: "quant-lab-usa-now-serving-14-us-cities-with-remote-software-development",
        title:
            "QUANT LAB USA Now Serving 14 US Cities With Remote Custom Software Development",
        dateline: "MACON, Ga. — May 12, 2026",
        date: "2026-05-12",
        summary:
            "QUANT LAB USA expands its geographic footprint to 14 US metros — Macon, Atlanta, Austin, Dallas, Chicago, NYC, San Francisco, and more — with a remote-first delivery model.",
    },
    {
        slug: "quant-lab-usa-releases-free-developer-tools-suite-for-stripe-owasp-schema",
        title:
            "QUANT LAB USA Releases Free Developer Tools Suite — Stripe, OWASP, Schema, and More",
        dateline: "MACON, Ga. — May 12, 2026",
        date: "2026-05-12",
        summary:
            "QUANT LAB USA INC launches a free-to-use developer tools suite covering Stripe fee math, OWASP test coverage, schema.org generators, and more — public, no signup required.",
    },
];

export default function NewsroomPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(collectionPageSchema),
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

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
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
                        <li className="text-gray-300">Newsroom</li>
                    </ol>
                </nav>

                <header className="mb-10">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Newspaper className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">
                        QUANT LAB USA · Newsroom
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                        Newsroom
                    </h1>
                    <p className="text-lg text-gray-300 leading-relaxed max-w-2xl">
                        Press releases, company milestones, product launches,
                        and the QUANT LAB newsletter archive. This is where
                        journalists, analysts, and clients find the official
                        record of what we&apos;ve shipped.
                    </p>
                </header>

                <section
                    aria-labelledby="how-to-use"
                    className="mb-12 rounded-2xl border border-white/10 bg-quant-card/40 p-6"
                >
                    <h2
                        id="how-to-use"
                        className="text-xl font-semibold text-white mb-3"
                    >
                        How to use this page
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-3">
                        Each press release below is a self-contained news item
                        — headline, dateline, lede, body, founder quote,
                        boilerplate, and contact info — ready to be reprinted,
                        excerpted, or used as background by journalists writing
                        about Macon&apos;s software scene, southeastern fintech,
                        or the broader custom-software market.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        For interviews, broadcast bookings, and a downloadable
                        press kit, see the{" "}
                        <Link
                            href="/press"
                            className="text-sky-400 hover:underline"
                        >
                            press &amp; media page
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="/press-kit"
                            className="text-sky-400 hover:underline"
                        >
                            press kit
                        </Link>
                        .
                    </p>
                </section>

                <section aria-labelledby="releases" className="mb-14">
                    <h2
                        id="releases"
                        className="text-3xl font-bold text-white mb-6"
                    >
                        Press releases
                    </h2>
                    <ul className="space-y-4">
                        {RELEASES.map((release) => (
                            <li key={release.slug}>
                                <Link
                                    href={`/newsroom/${release.slug}`}
                                    className="block rounded-xl border border-white/10 bg-quant-card/40 hover:bg-quant-card/70 p-5 md:p-6 transition-colors"
                                >
                                    <div className="flex items-center gap-3 text-xs text-gray-500 uppercase tracking-wide mb-3">
                                        <Calendar
                                            className="w-4 h-4"
                                            aria-hidden="true"
                                        />
                                        <time dateTime={release.date}>
                                            {release.dateline}
                                        </time>
                                    </div>
                                    <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                                        {release.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed mb-3">
                                        {release.summary}
                                    </p>
                                    <span className="inline-flex items-center gap-1 text-sky-400 text-sm font-medium">
                                        Read the release
                                        <ArrowRight className="w-4 h-4" />
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                <section aria-labelledby="newsletter-cta" className="mb-14">
                    <h2 id="newsletter-cta" className="sr-only">
                        Subscribe to the newsletter
                    </h2>
                    <NewsletterCTA
                        source="newsroom-index"
                        variant="card"
                        headline="Get future releases in your inbox"
                        subhead="The QUANT LAB Newsletter ships every other Tuesday with case study deep dives, technical playbooks, and any major company news. Subscribe and skip checking back."
                        cta="Subscribe"
                        showName={false}
                    />
                </section>

                <section
                    aria-labelledby="for-journalists"
                    className="mb-14 rounded-2xl border border-white/10 bg-quant-card/40 p-6 md:p-8"
                >
                    <h2
                        id="for-journalists"
                        className="text-2xl font-bold text-white mb-4 flex items-center gap-3"
                    >
                        <FileText
                            className="w-6 h-6 text-sky-400"
                            aria-hidden="true"
                        />
                        For journalists & analysts
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <p>
                            Bill Beltz is the founder and primary spokesperson
                            for QUANT LAB USA INC. Interview availability
                            includes founder Q&amp;A on custom software
                            engagement models, the build-vs-buy decision,
                            Stripe Connect for paid bookings, multi-tenant SaaS
                            architecture, HIPAA-aware development, and
                            real-world penetration testing aligned to MITRE
                            ATT&amp;CK.
                        </p>
                        <p>
                            Embargo requests, broadcast bookings, and quoted
                            commentary are welcome. Typical response time is
                            same business day. Direct contact:{" "}
                            <a
                                href="mailto:beltz@quantlabusa.dev"
                                className="text-sky-400 hover:underline"
                            >
                                beltz@quantlabusa.dev
                            </a>{" "}
                            or (770) 652-1282.
                        </p>
                        <p>
                            Full press kit — logos, headshots, founder bio,
                            company facts, brand assets — at{" "}
                            <Link
                                href="/press-kit"
                                className="text-sky-400 hover:underline"
                            >
                                /press-kit
                            </Link>
                            .
                        </p>
                    </div>
                </section>

                <section aria-labelledby="related" className="mb-8">
                    <h2
                        id="related"
                        className="text-2xl font-bold text-white mb-5"
                    >
                        Related pages
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Link
                            href="/newsletter"
                            className="rounded-xl border border-white/10 bg-quant-card/40 hover:bg-quant-card/70 p-5 transition-colors"
                        >
                            <h3 className="font-semibold text-white mb-1">
                                Newsletter
                            </h3>
                            <p className="text-sm text-gray-400">
                                Subscribe to one frank email every other
                                Tuesday.
                            </p>
                        </Link>
                        <Link
                            href="/press"
                            className="rounded-xl border border-white/10 bg-quant-card/40 hover:bg-quant-card/70 p-5 transition-colors"
                        >
                            <h3 className="font-semibold text-white mb-1">
                                Press & Media
                            </h3>
                            <p className="text-sm text-gray-400">
                                Speaking topics, interview availability, and
                                quotable commentary.
                            </p>
                        </Link>
                        <Link
                            href="/blog"
                            className="rounded-xl border border-white/10 bg-quant-card/40 hover:bg-quant-card/70 p-5 transition-colors"
                        >
                            <h3 className="font-semibold text-white mb-1">
                                Blog
                            </h3>
                            <p className="text-sm text-gray-400">
                                Long-form editorial archive — guides, deep
                                dives, frameworks.
                            </p>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
