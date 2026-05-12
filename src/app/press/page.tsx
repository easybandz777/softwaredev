import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, Newspaper, Mic, Quote, ArrowRight } from "lucide-react";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "Press & Media | QUANT LAB USA Software & Cybersecurity",
    description:
        "QUANT LAB USA press room — coverage, founder quotes, interview availability, and a downloadable press kit for journalists, podcasters, and industry analysts.",
    alternates: {
        canonical: "https://quantlabusa.dev/press",
    },
    openGraph: {
        title: "Press & Media | QUANT LAB USA",
        description:
            "Press room, founder quotes, interview availability, and downloadable press kit for QUANT LAB USA INC.",
        url: "https://quantlabusa.dev/press",
        siteName: "QUANT LAB USA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Press & Media | QUANT LAB USA",
        description:
            "Press room, founder quotes, interview availability, and downloadable press kit for QUANT LAB USA INC.",
    },
    robots: { index: true, follow: true },
};

const pressPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://quantlabusa.dev/press#webpage",
    url: "https://quantlabusa.dev/press",
    name: "Press & Media | QUANT LAB USA",
    description:
        "QUANT LAB USA press room — coverage, founder quotes, interview availability, and a downloadable press kit.",
    isPartOf: { "@id": "https://quantlabusa.dev/#website" },
    about: { "@id": "https://quantlabusa.dev/#organization" },
    inLanguage: "en-US",
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://quantlabusa.dev/#organization",
    name: "QUANT LAB USA INC",
    url: "https://quantlabusa.dev",
    logo: "https://quantlabusa.dev/logo-optimized.png",
    email: "beltz@quantlabusa.dev",
    telephone: "+17706521282",
    foundingDate: "2026",
    founder: {
        "@type": "Person",
        name: "Bill Beltz",
        url: "https://quantlabusa.dev/about",
    },
    address: {
        "@type": "PostalAddress",
        addressLocality: "Macon",
        addressRegion: "GA",
        addressCountry: "US",
    },
    sameAs: [
        "https://quantlabusa.dev",
        "https://quantlabusa.dev/about",
        "https://quantlabusa.dev/press-kit",
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://quantlabusa.dev/",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Press",
            item: "https://quantlabusa.dev/press",
        },
    ],
};

const SPEAKING_TOPICS = [
    "How small operators outgrow off-the-shelf SaaS, and what to build instead",
    "Stripe Connect, deposit-on-hold workflows, and the trust mechanics of paid bookings",
    "Building HIPAA-aware internal portals without enterprise tooling budgets",
    "What a real penetration test looks like, end-to-end, from initial foothold to Domain Admin",
    "Trading systems that survive contact with live capital — risk gates, event stores, and reconciliation",
    "Multi-tenant SaaS migration without nuking your existing customers",
];

export default function PressPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pressPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <section className="pt-32 pb-14 relative overflow-hidden">
                <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-quant-blue/8 rounded-full blur-[160px] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                        Press Room
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        QUANT LAB in the News
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                        A central place for journalists, podcasters, and industry analysts
                        covering custom software, payments infrastructure, trading systems,
                        and offensive security. Founder Bill Beltz is available for
                        interviews, expert commentary, and on-record technical briefings.
                    </p>
                </div>
            </section>

            <section className="py-12 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Link
                            href="/press-kit"
                            className="rounded-2xl border border-white/8 bg-[#0d1526]/80 p-6 hover:border-quant-blue/40 transition-all"
                        >
                            <Newspaper className="w-7 h-7 text-quant-blue mb-3" />
                            <h2 className="text-white font-semibold mb-1">Press Kit</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Logos, founder headshot, boilerplate, and fact sheet.
                            </p>
                        </Link>
                        <Link
                            href="/about"
                            className="rounded-2xl border border-white/8 bg-[#0d1526]/80 p-6 hover:border-quant-blue/40 transition-all"
                        >
                            <Mic className="w-7 h-7 text-quant-blue mb-3" />
                            <h2 className="text-white font-semibold mb-1">Founder Bio</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Background on Bill Beltz and the company.
                            </p>
                        </Link>
                        <Link
                            href="/contact"
                            className="rounded-2xl border border-white/8 bg-[#0d1526]/80 p-6 hover:border-quant-blue/40 transition-all"
                        >
                            <Mail className="w-7 h-7 text-quant-blue mb-3" />
                            <h2 className="text-white font-semibold mb-1">Press Inquiries</h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Email and phone for journalists on deadline.
                            </p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-14 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        Featured in
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        QUANT LAB USA INC was founded in 2026 and is actively pitching
                        coverage in trade publications and podcasts covering custom software,
                        Stripe-powered commerce, offensive security, and trading
                        infrastructure. Outlets and podcasts interested in featuring the
                        company or interviewing the founder can contact us directly using the
                        details below. This section will be updated as coverage publishes.
                    </p>
                    <div className="rounded-2xl border border-dashed border-white/15 bg-[#0d1526]/40 p-6 text-gray-400 text-sm leading-relaxed">
                        <p className="mb-2">
                            <span className="text-white font-semibold">Coverage placeholder.</span>{" "}
                            Published interviews, podcast appearances, expert quotes, and
                            trade-publication features will be listed here with publication
                            name, date, and a direct link.
                        </p>
                        <p>
                            Journalists working on a story and looking for a technical source
                            with hands-on production experience in custom software, Stripe
                            Connect, HIPAA-aware data modeling, multi-tenant SaaS, trading
                            systems, or red-team operations can{" "}
                            <Link
                                href="/contact"
                                className="text-quant-blue hover:text-white underline-offset-2 hover:underline"
                            >
                                reach the founder directly
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-14 relative border-t border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        Coverage and quotes
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        Bill Beltz is available as a source for stories about custom software
                        development for SMBs, payments infrastructure (Stripe and Stripe
                        Connect), HIPAA-aware engineering for healthcare operators,
                        multi-tenant SaaS migrations, trading systems, and offensive security
                        and penetration testing. Below are speaking topics he can comment on
                        with hands-on production experience, not theory.
                    </p>
                    <ul className="space-y-3">
                        {SPEAKING_TOPICS.map((topic) => (
                            <li
                                key={topic}
                                className="flex items-start gap-3 rounded-xl border border-white/8 bg-[#0d1526]/60 p-4"
                            >
                                <Quote className="w-5 h-5 text-quant-blue flex-shrink-0 mt-0.5" />
                                <span className="text-gray-300 leading-relaxed">{topic}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-14 relative border-t border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        Background and credibility
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-4">
                        QUANT LAB USA INC is a Georgia C-Corporation founded in 2026,
                        headquartered in Macon, Georgia, with service coverage across 14 U.S.
                        cities. The company has shipped production software for clients in
                        construction, e-commerce, healthcare, financial services, insurance,
                        media, automotive, operations, and maritime services, and runs
                        offensive security assessments for organizations preparing for SOC 2,
                        PCI-DSS, and HIPAA compliance reviews.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-4">
                        Production work spans Next.js and React applications, Python-based
                        trading orchestrators, multi-tenant SaaS migrations, Stripe and
                        Stripe Connect payments work, QuickBooks Online integrations, and
                        HIPAA-aware internal portals. Penetration testing engagements have
                        included full-scope Active Directory assessments with end-to-end
                        attack-chain documentation mapped to MITRE ATT&amp;CK, and executive
                        remediation roadmaps prioritized by exploitability rather than CVSS.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        Independent sources of credibility are available for verification.
                        Reviews, case studies, and team information are linked below.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <Link
                            href="/about/team"
                            className="flex items-center justify-between rounded-xl border border-white/8 bg-[#0d1526]/60 p-4 hover:border-quant-blue/40 transition-all"
                        >
                            <span className="text-white font-medium">Meet the team</span>
                            <ArrowRight className="w-4 h-4 text-quant-blue" />
                        </Link>
                        <Link
                            href="/reviews"
                            className="flex items-center justify-between rounded-xl border border-white/8 bg-[#0d1526]/60 p-4 hover:border-quant-blue/40 transition-all"
                        >
                            <span className="text-white font-medium">Client reviews</span>
                            <ArrowRight className="w-4 h-4 text-quant-blue" />
                        </Link>
                        <Link
                            href="/work"
                            className="flex items-center justify-between rounded-xl border border-white/8 bg-[#0d1526]/60 p-4 hover:border-quant-blue/40 transition-all"
                        >
                            <span className="text-white font-medium">Case studies</span>
                            <ArrowRight className="w-4 h-4 text-quant-blue" />
                        </Link>
                        <Link
                            href="/press-kit"
                            className="flex items-center justify-between rounded-xl border border-white/8 bg-[#0d1526]/60 p-4 hover:border-quant-blue/40 transition-all"
                        >
                            <span className="text-white font-medium">Download press kit</span>
                            <ArrowRight className="w-4 h-4 text-quant-blue" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        For press inquiries
                    </h2>
                    <p className="text-gray-400 text-lg mb-2 leading-relaxed">
                        Working on a story or booking a podcast guest? Email or call the
                        founder directly — no PR firm in the middle.
                    </p>
                    <p className="text-gray-300 leading-relaxed mb-8">
                        <a
                            href="mailto:beltz@quantlabusa.dev"
                            className="inline-flex items-center gap-2 text-white hover:text-quant-blue underline-offset-2 hover:underline"
                        >
                            <Mail className="w-4 h-4" />
                            beltz@quantlabusa.dev
                        </a>
                        <span className="mx-3 text-gray-600">·</span>
                        <a
                            href="tel:+17706521282"
                            className="inline-flex items-center gap-2 text-white hover:text-quant-blue underline-offset-2 hover:underline"
                        >
                            <Phone className="w-4 h-4" />
                            (770) 652-1282
                        </a>
                    </p>
                    <ConsultationCTA label="Schedule an Interview" />
                </div>
            </section>
        </main>
    );
}
