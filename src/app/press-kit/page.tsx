import type { Metadata } from "next";
import Link from "next/link";
import { Download, Image as ImageIcon, FileText, User, Palette, Mail, Phone } from "lucide-react";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "Press Kit | QUANT LAB USA Logos, Bio, Fact Sheet & Boilerplate",
    description:
        "Download QUANT LAB USA's official press kit — company logos, founder headshot, fact sheet, founder bio, approved boilerplate, brand colors, and brand voice guide.",
    alternates: {
        canonical: "https://quantlabusa.dev/press-kit",
    },
    openGraph: {
        title: "Press Kit | QUANT LAB USA",
        description:
            "Official press kit — logos, founder headshot, fact sheet, founder bio, brand colors, and approved boilerplate.",
        url: "https://quantlabusa.dev/press-kit",
        siteName: "QUANT LAB USA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Press Kit | QUANT LAB USA",
        description:
            "Official press kit — logos, founder headshot, fact sheet, founder bio, brand colors, and approved boilerplate.",
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
        "Official press kit for QUANT LAB USA INC — logos, founder headshot, fact sheet, founder bio, brand colors, and approved boilerplate.",
    isPartOf: { "@id": "https://quantlabusa.dev/#website" },
    about: { "@id": "https://quantlabusa.dev/#organization" },
    inLanguage: "en-US",
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://quantlabusa.dev/#organization",
    name: "QUANT LAB USA",
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

const BOILERPLATE =
    "QUANT LAB USA INC (quantlabusa.dev) is a Georgia-based custom software and cybersecurity firm founded by Bill Beltz in 2026. The company builds custom CRMs, SaaS platforms, payment integrations, and trading systems for SMB and SaaS clients, and performs penetration testing and security assessments for organizations preparing for SOC 2, PCI-DSS, and HIPAA compliance. Headquartered in Macon, Georgia, with service coverage across 14 U.S. cities.";

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
                        Everything a journalist, podcaster, or partner needs to write about
                        QUANT LAB USA INC accurately and on deadline — logos, founder
                        headshot, fact sheet, approved boilerplate, brand colors, and a brand
                        voice guide. All assets are free to use in editorial coverage of the
                        company.
                    </p>
                </div>
            </section>

            <section className="py-12 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                        Downloads
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="rounded-2xl border border-white/8 bg-[#0d1526]/80 p-6">
                            <div className="flex items-center gap-3 mb-3">
                                <ImageIcon className="w-6 h-6 text-quant-blue" />
                                <h3 className="text-white font-semibold">Company logo</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                Primary logo in PNG and WebP formats. For light backgrounds
                                use the standard PNG. For modern web embedding prefer WebP.
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
                                Bill Beltz, founder and CEO. Standard editorial headshot,
                                cleared for press use in coverage of the company.
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
                                One-page fact sheet covering founding date, headquarters,
                                entity type, services, industries, and representative
                                projects. Available as PDF and plain text.
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
                                <h3 className="text-white font-semibold">Founder bio</h3>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                A 300-word editorial bio for Bill Beltz. Suitable for
                                publication captions, podcast intros, and speaker bios.
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
                        Approved boilerplate
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-6">
                        This is the company's official short description. Use this verbatim
                        in articles, press releases, and event programs. Edits beyond minor
                        copy-editing should be cleared with the press contact.
                    </p>
                    <blockquote className="rounded-2xl border-l-4 border-quant-blue bg-[#0d1526]/80 p-6 text-gray-200 leading-relaxed italic">
                        {BOILERPLATE}
                    </blockquote>
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
                        Use these hex values when reproducing the brand in editorial layouts,
                        slide decks, or promotional materials.
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
                        QUANT LAB writes the way the founder talks to operators. The voice is
                        direct, technical without being smug, and grounded in production
                        reality rather than marketing abstractions. When quoting the brand or
                        the founder in editorial copy, lean into the following:
                    </p>
                    <ul className="space-y-3 text-gray-300 leading-relaxed">
                        <li>
                            <span className="text-white font-semibold">Plain, declarative.</span>{" "}
                            Short sentences. Active voice. No filler. The company name is
                            stylized in all caps (QUANT LAB) when used as a standalone
                            reference, and as the full legal name QUANT LAB USA INC in formal
                            press releases and citations.
                        </li>
                        <li>
                            <span className="text-white font-semibold">Operator-first.</span>{" "}
                            The company exists to serve small and mid-sized operators, not
                            enterprise procurement. Quotes should reflect first-person hands-on
                            engineering experience rather than vendor-speak.
                        </li>
                        <li>
                            <span className="text-white font-semibold">No hype.</span> The
                            company avoids inflated metrics and superlatives. Every number
                            quoted publicly should be defensible. Outcomes are framed in
                            ranges or directional terms when exact figures are not yet
                            sign-off cleared.
                        </li>
                        <li>
                            <span className="text-white font-semibold">Security-aware by default.</span>{" "}
                            Authentication, data handling, and audit logging are baseline
                            expectations, not premium features. Penetration testing is a
                            sibling discipline to software engineering at the firm, not a
                            separate vertical.
                        </li>
                        <li>
                            <span className="text-white font-semibold">Founder-led.</span> The
                            engineering, security, and client relationship work is led by the
                            founder. Press coverage should reflect this — there are no
                            account managers, sales-development reps, or layers of handoff to
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
                        Logos, headshots, and downloadable assets in this kit are licensed
                        for editorial use in coverage of QUANT LAB USA INC and its founder.
                        Logos may not be modified, recolored, or stretched out of proportion.
                        Headshots may be cropped for layout but not altered to misrepresent
                        the subject.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        For commercial use, partner co-branding, or any application outside
                        of editorial coverage, contact the press contact below for written
                        permission. Sales partner co-marketing materials are handled
                        separately under partner agreements and are not covered by this kit.
                    </p>
                </div>
            </section>

            <section className="py-16 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Need something not listed here?
                    </h2>
                    <p className="text-gray-400 text-lg mb-2 leading-relaxed">
                        For interview requests, custom quotes, on-the-record briefings, or
                        additional assets, contact the founder directly.
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
                        <ConsultationCTA label="Schedule an Interview" />
                    </div>
                </div>
            </section>
        </main>
    );
}
