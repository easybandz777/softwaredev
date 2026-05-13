import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Inbox, MessageSquare, Newspaper, Quote, ArrowRight, Check } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";
import { NewsletterCTA } from "@/components/NewsletterCTA";
import {
    organizationSchema,
    personSchema,
    breadcrumbSchema,
    serviceSchema,
} from "@/lib/schemas";

export const metadata: Metadata = pageMetadata({
    title: "The QUANT LAB Newsletter — One frank email every other Tuesday",
    description:
        "Join the QUANT LAB USA newsletter — case study deep dives, technical playbooks, founder hot takes, and real pricing intel from a working Macon software firm. One email every other Tuesday. No fluff.",
    slug: "newsletter",
    image: "/og-image.png",
    keywords: [
        "QUANT LAB newsletter",
        "Bill Beltz newsletter",
        "founder software newsletter",
        "custom software newsletter",
        "Macon GA software newsletter",
    ],
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://quantlabusa.dev/newsletter#webpage",
    url: "https://quantlabusa.dev/newsletter",
    name: "The QUANT LAB Newsletter",
    description:
        "Bi-weekly founder-written newsletter on custom software, cybersecurity, and the business of running a Macon-based software firm.",
    isPartOf: { "@id": "https://quantlabusa.dev/#website" },
    about: { "@id": "https://quantlabusa.dev/#organization" },
    inLanguage: "en-US",
};

const newsletterServiceSchema = serviceSchema({
    name: "The QUANT LAB Newsletter",
    description:
        "Bi-weekly founder-written newsletter from Bill Beltz of QUANT LAB USA INC. Each issue includes a case study deep dive, a technical playbook, a founder hot take, and real client pricing intel. Free, double opt-in, unsubscribe anytime.",
    url: "https://quantlabusa.dev/newsletter",
    serviceType: "Newsletter",
    category: "Editorial",
    offers: {
        priceCurrency: "USD",
        price: "0",
        priceDescription: "Free — one email every other Tuesday",
        availability: "https://schema.org/InStock",
        url: "https://quantlabusa.dev/newsletter",
    },
});

const breadcrumbs = breadcrumbSchema(
    [
        { name: "Home", url: "/" },
        { name: "Newsletter", url: "/newsletter" },
    ],
    "/newsletter",
);

const WHAT_YOU_GET: { icon: typeof Check; title: string; body: string }[] = [
    {
        icon: Check,
        title: "Case study deep dives",
        body: "A real project I shipped. The brief, the architecture, the trade-offs, the screw-ups, the invoice math. Names redacted when needed; numbers are not.",
    },
    {
        icon: Check,
        title: "Technical playbooks",
        body: "Code, schemas, deployment patterns, and architecture decisions I actually use. Stripe Connect flows, multi-tenant Postgres, OWASP checklists, Next.js performance — written for the engineer who wants to copy and adapt.",
    },
    {
        icon: Check,
        title: "Founder hot takes",
        body: "What is actually broken in the agency model, where SaaS is being unbundled, why most security audits are theater, and what to charge for what. Strong opinions, loosely held.",
    },
    {
        icon: Check,
        title: "Pricing and cost intel",
        body: "Real numbers from real client engagements. What a CRM build actually costs in 2026. What a web app pentest actually runs. Where the SaaS bills bleed. Founders use this to walk into procurement with a number.",
    },
    {
        icon: Check,
        title: "Zero fluff",
        body: "No \"10 ways to grow your team\" filler. No SEO-spam recycled posts. If I don't have something worth saying, I won't ship the issue. Better to skip a Tuesday than mail garbage.",
    },
];

const SAMPLE_ISSUES = [
    {
        slug: "/blog/custom-crm-development-guide",
        title: "Why we keep replacing Salesforce with custom CRMs",
        teaser:
            "What a $200K SaaS spend buys you, what it doesn't, and the math we walked through with three clients in the last quarter.",
        date: "2026-04-29",
    },
    {
        slug: "/blog/nextjs-stripe-integration-guide",
        title: "The Stripe Connect playbook for paid-deposit bookings",
        teaser:
            "Auth-hold on intent, capture on completion, refund mechanics, and the three webhook bugs everyone hits on the first try.",
        date: "2026-04-15",
    },
];

export default function NewsletterPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(webPageSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(newsletterServiceSchema),
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
                        <li className="text-gray-300">Newsletter</li>
                    </ol>
                </nav>

                <header className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Mail className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">
                        QUANT LAB USA · Founder Newsletter
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                        The QUANT LAB Newsletter
                    </h1>
                    <p className="text-xl text-sky-200 mb-6 max-w-2xl">
                        One frank email every other Tuesday from Bill Beltz —
                        founder of QUANT LAB USA INC.
                    </p>
                    <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                        Case study deep dives, technical playbooks, founder hot
                        takes, and real pricing intel from a working Macon,
                        Georgia software firm. Written in the same plain
                        English I use on client calls. No marketing-team voice.
                        No recycled SEO posts.
                    </p>
                </header>

                <section
                    aria-labelledby="signup-heading"
                    className="mb-14"
                    id="signup"
                >
                    <h2 id="signup-heading" className="sr-only">
                        Subscribe to the newsletter
                    </h2>
                    <NewsletterCTA
                        source="newsletter-landing"
                        variant="card"
                        headline="Subscribe — one email every other Tuesday"
                        subhead="Free, double opt-in, unsubscribe anytime. Roughly 1,500 words. Read in 5 minutes. Skip whenever you want."
                        cta="Subscribe to the newsletter"
                    />
                </section>

                <section
                    aria-labelledby="what-you-get"
                    className="mb-14"
                >
                    <h2
                        id="what-you-get"
                        className="text-3xl font-bold text-white mb-6"
                    >
                        What you&apos;ll actually get
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-8 max-w-2xl">
                        Five fixed sections per issue, in the same order, so you
                        can skim if you&apos;re short on time and read deeper
                        when something hits. Average issue is ~1,500 words, five
                        minutes of reading.
                    </p>
                    <ul className="space-y-5">
                        {WHAT_YOU_GET.map((item) => (
                            <li
                                key={item.title}
                                className="flex gap-4 rounded-xl border border-white/10 bg-quant-card/40 p-5"
                            >
                                <div className="flex-shrink-0">
                                    <div className="inline-flex p-2 rounded-lg bg-sky-500/15 border border-sky-400/30">
                                        <item.icon
                                            className="w-5 h-5 text-sky-400"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {item.body}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                <section
                    aria-labelledby="founder-credibility"
                    className="mb-14"
                >
                    <h2
                        id="founder-credibility"
                        className="text-3xl font-bold text-white mb-6"
                    >
                        Who&apos;s writing this
                    </h2>
                    <div className="rounded-2xl border border-white/10 bg-quant-card/50 p-6 md:p-8">
                        <div className="flex items-start gap-4 mb-4">
                            <Quote
                                className="w-6 h-6 text-sky-400 flex-shrink-0"
                                aria-hidden="true"
                            />
                            <p className="text-lg text-gray-200 leading-relaxed italic">
                                I&apos;ve been writing code for production
                                systems for over a decade. I run QUANT LAB USA
                                out of Macon — we build CRMs, payment
                                integrations, internal portals, and run real
                                penetration tests. I write this newsletter
                                because I keep getting the same five questions
                                on sales calls and it&apos;s faster to write the
                                answers once than re-explain them every week.
                                If you read it, you save yourself a few
                                expensive mistakes.
                            </p>
                        </div>
                        <p className="text-sm text-gray-400">
                            — Bill Beltz, Founder & Principal Engineer,{" "}
                            <Link
                                href="/about"
                                className="text-sky-400 hover:underline"
                            >
                                QUANT LAB USA INC
                            </Link>
                        </p>
                        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div>
                                <p className="text-2xl font-bold text-sky-400">
                                    14+
                                </p>
                                <p className="text-xs text-gray-400 uppercase tracking-wide">
                                    Client engagements 2026
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-sky-400">
                                    14
                                </p>
                                <p className="text-xs text-gray-400 uppercase tracking-wide">
                                    US cities served
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-sky-400">
                                    5.0
                                </p>
                                <p className="text-xs text-gray-400 uppercase tracking-wide">
                                    Verified Google rating
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold text-sky-400">
                                    10+
                                </p>
                                <p className="text-xs text-gray-400 uppercase tracking-wide">
                                    Years writing software
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section
                    aria-labelledby="sample-issues"
                    className="mb-14"
                >
                    <h2
                        id="sample-issues"
                        className="text-3xl font-bold text-white mb-6"
                    >
                        Sample issues — read before you subscribe
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl">
                        These are the kinds of pieces I publish in the
                        newsletter — same depth, same voice, no fluff. If they
                        don&apos;t hit, the rest won&apos;t either, and you
                        should skip the subscribe button.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {SAMPLE_ISSUES.map((issue) => (
                            <Link
                                key={issue.slug}
                                href={issue.slug}
                                className="block rounded-xl border border-white/10 bg-quant-card/40 hover:bg-quant-card/70 p-5 transition-colors"
                            >
                                <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide">
                                    Sample issue · {issue.date}
                                </p>
                                <h3 className="text-lg font-semibold text-white mb-2">
                                    {issue.title}
                                </h3>
                                <p className="text-sm text-gray-300 leading-relaxed mb-3">
                                    {issue.teaser}
                                </p>
                                <span className="inline-flex items-center gap-1 text-sky-400 text-sm font-medium">
                                    Read sample
                                    <ArrowRight className="w-4 h-4" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>

                <section
                    aria-labelledby="archive-teaser"
                    className="mb-14"
                >
                    <div className="rounded-2xl border border-white/10 bg-quant-card/40 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div className="flex items-start gap-4">
                            <div className="inline-flex p-2 rounded-lg bg-sky-500/15 border border-sky-400/30 flex-shrink-0">
                                <Inbox
                                    className="w-5 h-5 text-sky-400"
                                    aria-hidden="true"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-white mb-1">
                                    Past issues + newsroom
                                </h2>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Every issue is archived in the QUANT LAB
                                    newsroom alongside press releases and
                                    company updates. Skim the back catalog
                                    before you commit.
                                </p>
                            </div>
                        </div>
                        <Link
                            href="/newsroom"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-white border border-sky-400/40 hover:border-sky-400 hover:bg-sky-400/10 transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                        >
                            Browse newsroom
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </section>

                <section aria-labelledby="cadence-truth" className="mb-14">
                    <h2
                        id="cadence-truth"
                        className="text-3xl font-bold text-white mb-6"
                    >
                        The cadence and the rules
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            <strong className="text-white">Cadence:</strong>{" "}
                            Every other Tuesday. Roughly 24 issues per year.
                            That&apos;s a deliberate cadence — weekly is too
                            much for the level of depth I want; monthly drifts
                            and loses the audience. Two weeks is the sweet spot.
                        </p>
                        <p>
                            <strong className="text-white">Length:</strong>{" "}
                            1,200 to 1,800 words per issue. Five minutes of
                            reading. Same five-section template every time so
                            you can skim or read deep depending on the issue.
                        </p>
                        <p>
                            <strong className="text-white">Promotion:</strong>{" "}
                            Pitches are limited to one mention near the bottom.
                            The bulk of every issue is editorial — case
                            studies, frameworks, opinions. If you want a sales
                            email, this isn&apos;t the list.
                        </p>
                        <p>
                            <strong className="text-white">Reply rate:</strong>{" "}
                            I reply to every email personally, usually within a
                            day. If you reply to an issue with a question,
                            you&apos;ll get a real answer from me — not from
                            a marketing assistant.
                        </p>
                        <p>
                            <strong className="text-white">
                                Confidentiality:
                            </strong>{" "}
                            Client names are redacted when needed. Numbers and
                            engagement details are real and shared with
                            permission. We never sell or share your email.
                        </p>
                        <p>
                            <strong className="text-white">Exit:</strong>{" "}
                            One-click unsubscribe in every issue. Reply
                            &quot;stop&quot; and you&apos;re off the list inside
                            24 hours. We honor that without friction or
                            won-you-back automation.
                        </p>
                    </div>
                </section>

                <section
                    aria-labelledby="signup-final"
                    className="mb-12"
                >
                    <h2 id="signup-final" className="sr-only">
                        Subscribe to the newsletter — final
                    </h2>
                    <NewsletterCTA
                        source="newsletter-landing-bottom"
                        variant="card"
                        headline="One frank email every other Tuesday"
                        subhead="Free. Double opt-in. Unsubscribe anytime. Same email goes to founders, engineers, and CTOs who are sick of recycled content."
                        cta="Subscribe to the newsletter"
                        showName={false}
                    />
                </section>

                <section aria-labelledby="related" className="mb-12">
                    <h2
                        id="related"
                        className="text-2xl font-bold text-white mb-5"
                    >
                        Related
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Link
                            href="/newsroom"
                            className="rounded-xl border border-white/10 bg-quant-card/40 hover:bg-quant-card/70 p-5 transition-colors"
                        >
                            <div className="inline-flex p-2 rounded-lg bg-sky-500/15 border border-sky-400/30 mb-3">
                                <Newspaper
                                    className="w-5 h-5 text-sky-400"
                                    aria-hidden="true"
                                />
                            </div>
                            <h3 className="font-semibold text-white mb-1">
                                Newsroom
                            </h3>
                            <p className="text-sm text-gray-400">
                                Press releases, company updates, and the
                                newsletter archive.
                            </p>
                        </Link>
                        <Link
                            href="/press"
                            className="rounded-xl border border-white/10 bg-quant-card/40 hover:bg-quant-card/70 p-5 transition-colors"
                        >
                            <div className="inline-flex p-2 rounded-lg bg-sky-500/15 border border-sky-400/30 mb-3">
                                <MessageSquare
                                    className="w-5 h-5 text-sky-400"
                                    aria-hidden="true"
                                />
                            </div>
                            <h3 className="font-semibold text-white mb-1">
                                Press & Media
                            </h3>
                            <p className="text-sm text-gray-400">
                                Speaking topics, founder quotes, and the press
                                kit for journalists.
                            </p>
                        </Link>
                        <Link
                            href="/blog"
                            className="rounded-xl border border-white/10 bg-quant-card/40 hover:bg-quant-card/70 p-5 transition-colors"
                        >
                            <div className="inline-flex p-2 rounded-lg bg-sky-500/15 border border-sky-400/30 mb-3">
                                <Mail
                                    className="w-5 h-5 text-sky-400"
                                    aria-hidden="true"
                                />
                            </div>
                            <h3 className="font-semibold text-white mb-1">
                                Blog
                            </h3>
                            <p className="text-sm text-gray-400">
                                Long-form guides, framework deep dives, and the
                                full editorial archive.
                            </p>
                        </Link>
                    </div>
                </section>
            </div>
        </main>
    );
}
