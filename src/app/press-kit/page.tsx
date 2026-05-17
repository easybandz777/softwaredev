import type { Metadata } from "next";
import Link from "next/link";
import {
    Download,
    Image as ImageIcon,
    FileText,
    User,
    Palette,
    Mail,
    Phone,
    Building2,
    MapPin,
    Calendar,
    Users,
    Briefcase,
    Newspaper,
    ExternalLink,
    Mic,
} from "lucide-react";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "Press Kit | QUANT LAB USA Logos, Bio, Fact Sheet & Boilerplate",
    description:
        "Download QUANT LAB USA's official press kit — company logos, founder headshots, fact sheet, founder bio (3 lengths), approved boilerplate (3 lengths), brand colors, brand voice guide, recent coverage, and press contact details.",
    alternates: {
        canonical: "https://quantlabusa.dev/press-kit",
    },
    openGraph: {
        title: "Press Kit | QUANT LAB USA",
        description:
            "Official press kit — logos, founder headshot, fact sheet, founder bio, brand colors, approved boilerplate, recent coverage, and direct press contact.",
        url: "https://quantlabusa.dev/press-kit",
        siteName: "QUANT LAB USA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Press Kit | QUANT LAB USA",
        description:
            "Official press kit — logos, founder headshot, fact sheet, founder bio, brand colors, approved boilerplate, and direct press contact.",
    },
    robots: { index: true, follow: true },
};

const pressKitPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://quantlabusa.dev/press-kit#webpage",
    url: "https://quantlabusa.dev/press-kit",
    name: "Press Kit | QUANT LAB USA",
    description:
        "Official press kit for QUANT LAB USA INC — logos, founder headshot, fact sheet, founder bio, brand colors, approved boilerplate, recent coverage, and press contact.",
    isPartOf: { "@id": "https://quantlabusa.dev/#website" },
    about: { "@id": "https://quantlabusa.dev/#organization" },
    inLanguage: "en-US",
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://quantlabusa.dev/#organization",
    name: "QUANT LAB USA",
    legalName: "QUANT LAB USA INC",
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
        "https://quantlabusa.dev/press",
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
        {
            "@type": "ListItem",
            position: 3,
            name: "Press Kit",
            item: "https://quantlabusa.dev/press-kit",
        },
    ],
};

const BRAND_COLORS = [
    { name: "Indigo Dark", hex: "#0F172A", role: "Primary background and dark surfaces" },
    { name: "Indigo", hex: "#6366F1", role: "Brand accent, links, and CTAs" },
    { name: "Slate Light", hex: "#E2E8F0", role: "Body text on dark surfaces" },
];

// Three boilerplate lengths so journalists can grab the one that fits their format.
const BOILERPLATE_SHORT =
    "QUANT LAB USA INC is a Macon, Georgia-based custom software and cybersecurity firm founded by Bill Beltz in 2026. More at quantlabusa.dev.";

const BOILERPLATE_MEDIUM =
    "QUANT LAB USA INC (quantlabusa.dev) is a Georgia-based custom software and cybersecurity firm founded by Bill Beltz in 2026. The company builds custom CRMs, SaaS platforms, payment integrations, and trading systems for SMB and SaaS clients, and performs penetration testing aligned to MITRE ATT&CK. Headquartered in Macon, Georgia, with service coverage across 14 U.S. cities.";

const BOILERPLATE_LONG =
    "QUANT LAB USA INC (quantlabusa.dev) is a Macon, Georgia-based custom software development and cybersecurity firm founded by Bill Beltz in 2026. The company designs and ships production-grade web and SaaS applications, multi-tenant platforms, custom CRMs, Stripe and Stripe Connect payment integrations, licensing systems, HIPAA-aware healthcare portals, and algorithmic trading platforms for small-to-mid-sized operators and growing SaaS companies. The firm also performs full-scope penetration testing and offensive security assessments aligned to MITRE ATT&CK, with executive remediation roadmaps prioritized by exploitability rather than CVSS. QUANT LAB serves clients nationwide from its Macon headquarters across 14 US cities under a remote-first delivery model. The firm is founder-led, with engineering, security, and client relationship work handled directly by the principal — no account managers, no sales development reps, no handoff layers.";

// Founder bios in three lengths to match common editorial formats.
const FOUNDER_BIO_SHORT =
    "Bill Beltz is the founder and principal engineer of QUANT LAB USA INC, a Macon, Georgia custom software and cybersecurity firm.";

const FOUNDER_BIO_MEDIUM =
    "Bill Beltz is the founder and principal engineer of QUANT LAB USA INC, a Macon, Georgia-based custom software development and cybersecurity firm. He leads engineering, security, and client engagements personally, shipping production software and pen-testing engagements across construction, e-commerce, healthcare, financial services, insurance, media, automotive, and maritime industries.";

const FOUNDER_BIO_LONG =
    "Bill Beltz is the founder and principal engineer of QUANT LAB USA INC, a Macon, Georgia-based custom software development and cybersecurity firm he launched in 2026. He leads engineering, security, and client engagements personally — there are no account managers or sales development reps in the firm. His production work spans Next.js and React applications, Python-based trading orchestrators, multi-tenant SaaS migrations, Stripe and Stripe Connect payments work, QuickBooks Online integrations, and HIPAA-aware internal portals. On the offensive-security side, he runs full-scope Active Directory assessments with end-to-end attack-chain documentation mapped to MITRE ATT&CK, producing executive remediation roadmaps prioritized by exploitability rather than CVSS. He is available as a source for stories about custom software development for SMBs, payments infrastructure, HIPAA-aware engineering, multi-tenant SaaS architecture, trading systems, and small-business cybersecurity.";

// Key facts — what journalists and analysts need first.
const KEY_FACTS = [
    {
        label: "Legal name",
        value: "QUANT LAB USA INC",
        icon: Building2,
    },
    {
        label: "Founded",
        value: "2026",
        icon: Calendar,
    },
    {
        label: "Entity type",
        value: "Georgia C-Corporation (SOS #26086454)",
        icon: Briefcase,
    },
    {
        label: "Headquarters",
        value: "Macon, Georgia, United States",
        icon: MapPin,
    },
    {
        label: "Service coverage",
        value: "14 U.S. metros (Macon, Atlanta, Austin, Dallas, Chicago, NYC, San Francisco, and more)",
        icon: MapPin,
    },
    {
        label: "Team",
        value: "Founder-led; principal engineer + contracted specialists",
        icon: Users,
    },
    {
        label: "Services",
        value: "Custom software development, Stripe Connect integrations, multi-tenant SaaS, HIPAA-aware portals, algorithmic trading, penetration testing aligned to MITRE ATT&CK",
        icon: Briefcase,
    },
    {
        label: "Industries served",
        value: "Construction, e-commerce, healthcare, financial services, insurance, media, automotive, operations, maritime",
        icon: Briefcase,
    },
    {
        label: "Founder",
        value: "Bill Beltz, Founder & Principal Engineer",
        icon: User,
    },
    {
        label: "Press contact",
        value: "beltz@quantlabusa.dev · (770) 652-1282",
        icon: Mail,
    },
];

// Press releases (synced with /newsroom). Update this when new releases publish.
const RECENT_RELEASES: { title: string; date: string; href: string }[] = [
    {
        title: "QUANT LAB USA Publishes 2026 Custom Software Development Cost Guide",
        date: "May 12, 2026",
        href: "/newsroom/quant-lab-usa-publishes-2026-software-development-cost-guide",
    },
    {
        title: "QUANT LAB USA Completes 14 Client Engagements in First Five Months of 2026",
        date: "May 12, 2026",
        href: "/newsroom/quant-lab-usa-completes-14-client-engagements-2026",
    },
    {
        title: "QUANT LAB USA Now Serving 14 US Cities With Remote Custom Software Development",
        date: "May 12, 2026",
        href: "/newsroom/quant-lab-usa-now-serving-14-us-cities-with-remote-software-development",
    },
    {
        title: "QUANT LAB USA Releases Free Developer Tools Suite — Stripe, OWASP, Schema, and More",
        date: "May 12, 2026",
        href: "/newsroom/quant-lab-usa-releases-free-developer-tools-suite-for-stripe-owasp-schema",
    },
    {
        title: "QUANT LAB USA Launches Custom Software & Cybersecurity Firm in Macon, GA",
        date: "November 9, 2024",
        href: "/newsroom/quant-lab-usa-launches-custom-software-and-cybersecurity-firm-in-macon-ga",
    },
];

// Recent coverage — populate as coverage publishes. Until then, the placeholder
// language signals to journalists that the firm is actively pitching coverage.
type Coverage = {
    outlet: string;
    title: string;
    date: string;
    href: string;
    note?: string;
};

const RECENT_COVERAGE: Coverage[] = [
    // Populate as actual coverage publishes. Example shape (do not ship fake entries):
    // { outlet: "Hypepotamus", title: "Macon software firm scales nationally", date: "TBD", href: "https://..." },
];

export default function PressKitPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pressKitPageSchema) }}
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
                        Press Kit
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Download the QUANT LAB press kit
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                        Everything a journalist, podcaster, or partner needs to write
                        about QUANT LAB USA INC accurately and on deadline — key
                        facts, logos, founder headshot, fact sheet, founder bio in
                        three lengths, approved boilerplate in three lengths, brand
                        colors, brand voice guide, recent press releases, and a
                        direct press contact. All assets are free to use in
                        editorial coverage of the company.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                        <a
                            href="mailto:beltz@quantlabusa.dev"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-quant-blue text-white text-sm font-semibold hover:bg-quant-blue/90"
                        >
                            <Mail className="w-4 h-4" />
                            beltz@quantlabusa.dev
                        </a>
                        <a
                            href="tel:+17706521282"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/15 text-white text-sm font-semibold hover:border-quant-blue"
                        >
                            <Phone className="w-4 h-4" />
                            (770) 652-1282
                        </a>
                    </div>
                </div>
            </section>

            <section className="py-12 relative border-t border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        Key facts
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        The single-page version of who and what QUANT LAB is, for
                        publication captions, sidebars, and on-air reads. Each
                        value below is approved for editorial use without further
                        confirmation. For anything beyond this list, contact the
                        press contact at the bottom of the page.
                    </p>
                    <dl className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {KEY_FACTS.map((fact) => {
                            const Icon = fact.icon;
                            return (
                                <div
                                    key={fact.label}
                                    className="rounded-2xl border border-white/8 bg-[#0d1526]/80 p-5"
                                >
                                    <dt className="flex items-center gap-2 text-quant-blue text-sm font-semibold uppercase tracking-wide mb-2">
                                        <Icon className="w-4 h-4" />
                                        {fact.label}
                                    </dt>
                                    <dd className="text-white text-base leading-relaxed">
                                        {fact.value}
                                    </dd>
                                </div>
                            );
                        })}
                    </dl>
                </div>
            </section>

            <section className="py-12 relative border-t border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        Downloads
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        Logos, headshots, and fact sheet assets — cleared for
                        editorial use in coverage of QUANT LAB USA INC and its
                        founder. Right-click and &ldquo;Save As&rdquo; or use the download
                        link.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-white/8 bg-[#0d1526]/80 p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <ImageIcon className="w-6 h-6 text-quant-blue" />
                                <h3 className="text-white font-semibold">Company logo</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Primary logo in PNG and WebP formats. For light
                                backgrounds use the standard PNG. For modern web
                                embedding prefer WebP.
                            </p>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="/logo-optimized.png"
                                    download
                                    className="inline-flex items-center gap-2 text-quant-blue hover:text-white text-sm font-medium"
                                >
                                    <Download className="w-4 h-4" />
                                    logo-optimized.png
                                </a>
                                <a
                                    href="/logo-optimized.webp"
                                    download
                                    className="inline-flex items-center gap-2 text-quant-blue hover:text-white text-sm font-medium"
                                >
                                    <Download className="w-4 h-4" />
                                    logo-optimized.webp
                                </a>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/8 bg-[#0d1526]/80 p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <User className="w-6 h-6 text-quant-blue" />
                                <h3 className="text-white font-semibold">Founder headshot</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Bill Beltz, founder and principal engineer.
                                Standard editorial headshot, cleared for press use
                                in coverage of the company.
                            </p>
                            <a
                                href="/founder.jpg"
                                download
                                className="inline-flex items-center gap-2 text-quant-blue hover:text-white text-sm font-medium"
                            >
                                <Download className="w-4 h-4" />
                                founder.jpg
                            </a>
                        </div>

                        <div className="rounded-2xl border border-white/8 bg-[#0d1526]/80 p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <FileText className="w-6 h-6 text-quant-blue" />
                                <h3 className="text-white font-semibold">Company fact sheet</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                One-page fact sheet covering founding date,
                                headquarters, entity type, services, industries,
                                and representative projects. Available as PDF and
                                plain text.
                            </p>
                            <div className="flex flex-col gap-2">
                                <a
                                    href="/press-kit/quantlab-fact-sheet.pdf"
                                    download
                                    className="inline-flex items-center gap-2 text-quant-blue hover:text-white text-sm font-medium"
                                >
                                    <Download className="w-4 h-4" />
                                    quantlab-fact-sheet.pdf
                                </a>
                                <a
                                    href="/press-kit/quantlab-fact-sheet.txt"
                                    download
                                    className="inline-flex items-center gap-2 text-quant-blue hover:text-white text-sm font-medium"
                                >
                                    <Download className="w-4 h-4" />
                                    quantlab-fact-sheet.txt
                                </a>
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/8 bg-[#0d1526]/80 p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <FileText className="w-6 h-6 text-quant-blue" />
                                <h3 className="text-white font-semibold">Founder bio (plain text)</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                A 300-word editorial bio for Bill Beltz. Suitable
                                for publication captions, podcast intros, and
                                speaker bios. Shorter versions are inline below
                                for direct copy/paste.
                            </p>
                            <a
                                href="/press-kit/bill-beltz-bio.txt"
                                download
                                className="inline-flex items-center gap-2 text-quant-blue hover:text-white text-sm font-medium"
                            >
                                <Download className="w-4 h-4" />
                                bill-beltz-bio.txt
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 relative border-t border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        Approved boilerplate — three lengths
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        Use these verbatim depending on the space available in
                        your piece. Edits beyond minor copy-editing should be
                        cleared with the press contact below.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-white font-semibold mb-2 flex items-baseline gap-3">
                                Short (≈25 words)
                                <span className="text-xs text-gray-500 font-normal">
                                    For captions, social posts, on-air mentions
                                </span>
                            </h3>
                            <blockquote className="rounded-2xl border-l-4 border-quant-blue bg-[#0d1526]/80 p-5 text-gray-200 leading-relaxed">
                                {BOILERPLATE_SHORT}
                            </blockquote>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-2 flex items-baseline gap-3">
                                Medium (≈60 words)
                                <span className="text-xs text-gray-500 font-normal">
                                    For &ldquo;About the company&rdquo; sidebars, podcast show notes
                                </span>
                            </h3>
                            <blockquote className="rounded-2xl border-l-4 border-quant-blue bg-[#0d1526]/80 p-5 text-gray-200 leading-relaxed">
                                {BOILERPLATE_MEDIUM}
                            </blockquote>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-2 flex items-baseline gap-3">
                                Long (≈140 words)
                                <span className="text-xs text-gray-500 font-normal">
                                    For press releases, feature article footers, full profiles
                                </span>
                            </h3>
                            <blockquote className="rounded-2xl border-l-4 border-quant-blue bg-[#0d1526]/80 p-5 text-gray-200 leading-relaxed">
                                {BOILERPLATE_LONG}
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 relative border-t border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        Founder bio — three lengths
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        Inline copy/paste bios for Bill Beltz, founder and
                        principal engineer. Cleared for editorial use in coverage
                        of the company and the founder.
                    </p>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-white font-semibold mb-2 flex items-baseline gap-3">
                                Short (≈25 words)
                                <span className="text-xs text-gray-500 font-normal">
                                    For captions, social posts, briefing prep sheets
                                </span>
                            </h3>
                            <blockquote className="rounded-2xl border-l-4 border-quant-blue bg-[#0d1526]/80 p-5 text-gray-200 leading-relaxed">
                                {FOUNDER_BIO_SHORT}
                            </blockquote>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-2 flex items-baseline gap-3">
                                Medium (≈55 words)
                                <span className="text-xs text-gray-500 font-normal">
                                    For podcast show notes, speaker bios, panel programs
                                </span>
                            </h3>
                            <blockquote className="rounded-2xl border-l-4 border-quant-blue bg-[#0d1526]/80 p-5 text-gray-200 leading-relaxed">
                                {FOUNDER_BIO_MEDIUM}
                            </blockquote>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-2 flex items-baseline gap-3">
                                Long (≈170 words)
                                <span className="text-xs text-gray-500 font-normal">
                                    For feature article author boxes, conference bios, full profiles
                                </span>
                            </h3>
                            <blockquote className="rounded-2xl border-l-4 border-quant-blue bg-[#0d1526]/80 p-5 text-gray-200 leading-relaxed">
                                {FOUNDER_BIO_LONG}
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-14 relative border-t border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="flex items-center gap-3 mb-4">
                        <Newspaper className="w-7 h-7 text-quant-blue" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            Recent press releases
                        </h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        Most recent first. The complete archive lives at{" "}
                        <Link
                            href="/newsroom"
                            className="text-quant-blue hover:text-white underline-offset-2 hover:underline"
                        >
                            /newsroom
                        </Link>
                        .
                    </p>
                    <ul className="space-y-3">
                        {RECENT_RELEASES.map((release) => (
                            <li
                                key={release.href}
                                className="rounded-xl border border-white/8 bg-[#0d1526]/60 p-4 hover:border-quant-blue/40 transition-colors"
                            >
                                <Link href={release.href} className="block">
                                    <div className="text-xs text-gray-500 uppercase tracking-wide mb-1">
                                        {release.date}
                                    </div>
                                    <div className="text-white font-medium leading-snug">
                                        {release.title}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-14 relative border-t border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="flex items-center gap-3 mb-4">
                        <Mic className="w-7 h-7 text-quant-blue" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            Recent coverage
                        </h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        Published interviews, podcast appearances, expert quotes,
                        and feature coverage of QUANT LAB USA INC and its founder
                        in third-party publications.
                    </p>
                    {RECENT_COVERAGE.length === 0 ? (
                        <div className="rounded-2xl border border-dashed border-white/15 bg-[#0d1526]/40 p-6 text-gray-400 text-sm leading-relaxed">
                            <p className="mb-3">
                                <span className="text-white font-semibold">
                                    Coverage placeholder.
                                </span>{" "}
                                QUANT LAB USA INC is actively pitching coverage in
                                trade publications and podcasts covering custom
                                software, Stripe-powered commerce, offensive
                                security, and trading infrastructure. Verified
                                third-party coverage will be listed here with
                                publication name, date, and a direct link.
                            </p>
                            <p>
                                Journalists working on a story can{" "}
                                <a
                                    href="mailto:beltz@quantlabusa.dev"
                                    className="text-quant-blue hover:text-white underline-offset-2 hover:underline"
                                >
                                    reach the founder directly
                                </a>
                                .
                            </p>
                        </div>
                    ) : (
                        <ul className="space-y-3">
                            {RECENT_COVERAGE.map((c) => (
                                <li
                                    key={c.href}
                                    className="rounded-xl border border-white/8 bg-[#0d1526]/60 p-4 hover:border-quant-blue/40 transition-colors"
                                >
                                    <a
                                        href={c.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block"
                                    >
                                        <div className="flex items-center gap-2 text-xs text-gray-500 uppercase tracking-wide mb-1">
                                            <span className="text-quant-blue font-semibold">
                                                {c.outlet}
                                            </span>
                                            <span>·</span>
                                            <span>{c.date}</span>
                                        </div>
                                        <div className="text-white font-medium leading-snug flex items-center gap-2">
                                            {c.title}
                                            <ExternalLink className="w-3.5 h-3.5 flex-shrink-0" />
                                        </div>
                                        {c.note ? (
                                            <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                                                {c.note}
                                            </p>
                                        ) : null}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>

            <section className="py-14 relative border-t border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="flex items-center gap-3 mb-4">
                        <Palette className="w-7 h-7 text-quant-blue" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                            Brand colors
                        </h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        Use these hex values when reproducing the brand in
                        editorial layouts, slide decks, or promotional materials.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {BRAND_COLORS.map((c) => (
                            <div
                                key={c.hex}
                                className="rounded-2xl border border-white/8 bg-[#0d1526]/80 overflow-hidden"
                            >
                                <div
                                    className="h-24 w-full"
                                    style={{ backgroundColor: c.hex }}
                                    aria-hidden="true"
                                />
                                <div className="p-4">
                                    <div className="text-white font-semibold">{c.name}</div>
                                    <div className="text-quant-blue font-mono text-sm mt-1">
                                        {c.hex}
                                    </div>
                                    <div className="text-gray-400 text-xs mt-2 leading-relaxed">
                                        {c.role}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-14 relative border-t border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        Brand voice guide
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-4">
                        QUANT LAB writes the way the founder talks to operators.
                        The voice is direct, technical without being smug, and
                        grounded in production reality rather than marketing
                        abstractions. When quoting the brand or the founder in
                        editorial copy, lean into the following:
                    </p>
                    <ul className="space-y-3 text-gray-300 leading-relaxed">
                        <li>
                            <span className="text-white font-semibold">Plain, declarative.</span>{" "}
                            Short sentences. Active voice. No filler. The company
                            name is stylized in all caps (QUANT LAB) when used as
                            a standalone reference, and as the full legal name
                            QUANT LAB USA INC in formal press releases and
                            citations.
                        </li>
                        <li>
                            <span className="text-white font-semibold">Operator-first.</span>{" "}
                            The company exists to serve small and mid-sized
                            operators, not enterprise procurement. Quotes should
                            reflect first-person hands-on engineering experience
                            rather than vendor-speak.
                        </li>
                        <li>
                            <span className="text-white font-semibold">No hype.</span> The
                            company avoids inflated metrics and superlatives.
                            Every number quoted publicly should be defensible.
                            Outcomes are framed in ranges or directional terms
                            when exact figures are not yet sign-off cleared.
                        </li>
                        <li>
                            <span className="text-white font-semibold">Security-aware by default.</span>{" "}
                            Authentication, data handling, and audit logging are
                            baseline expectations, not premium features.
                            Penetration testing is a sibling discipline to
                            software engineering at the firm, not a separate
                            vertical.
                        </li>
                        <li>
                            <span className="text-white font-semibold">Founder-led.</span> The
                            engineering, security, and client relationship work is
                            led by the founder. Press coverage should reflect
                            this — there are no account managers,
                            sales-development reps, or layers of handoff to
                            attribute quotes to.
                        </li>
                    </ul>
                </div>
            </section>

            <section className="py-14 relative border-t border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                        Usage and licensing
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-3">
                        Logos, headshots, and downloadable assets in this kit are
                        licensed for editorial use in coverage of QUANT LAB USA
                        INC and its founder. Logos may not be modified,
                        recolored, or stretched out of proportion. Headshots may
                        be cropped for layout but not altered to misrepresent the
                        subject.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        For commercial use, partner co-branding, or any
                        application outside of editorial coverage, contact the
                        press contact below for written permission. Sales partner
                        co-marketing materials are handled separately under
                        partner agreements and are not covered by this kit.
                    </p>
                </div>
            </section>

            <section
                id="press-contact"
                className="py-16 relative border-t border-white/5 bg-black/30"
            >
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Press inquiries — direct to the founder
                    </h2>
                    <p className="text-gray-400 text-lg mb-2 leading-relaxed">
                        For interview requests, custom quotes, on-the-record
                        briefings, embargoed material, or additional assets,
                        contact the founder directly. Typical response time is
                        same business day.
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
                    <div className="flex flex-wrap gap-3 justify-center">
                        <Link
                            href="/press"
                            className="inline-flex items-center justify-center min-h-[44px] px-5 rounded-lg border border-white/15 text-white hover:border-quant-blue text-sm font-medium"
                        >
                            Back to press room
                        </Link>
                        <Link
                            href="/newsroom"
                            className="inline-flex items-center justify-center min-h-[44px] px-5 rounded-lg border border-white/15 text-white hover:border-quant-blue text-sm font-medium"
                        >
                            Newsroom archive
                        </Link>
                        <ConsultationCTA label="Schedule an Interview" />
                    </div>
                </div>
            </section>
        </main>
    );
}
