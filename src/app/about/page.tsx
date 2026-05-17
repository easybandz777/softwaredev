import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    Car,
    HardHat,
    Music,
    TrendingUp,
    Linkedin,
    Github,
    MapPin,
    Mail,
} from "lucide-react";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "About QUANT LAB USA — Founder-Led Software & Pentest Firm",
    description:
        "Georgia-based custom software, CRM, Stripe and pen testing firm founded by William Beltz. No account managers, no offshore handoffs — just the engineer who ships.",
    openGraph: {
        title: "About | QUANT LAB USA",
        description:
            "Founder-led software and security. No account managers, no handoffs.",
        url: "https://quantlabusa.dev/about",
        type: "website",
    },
    alternates: {
        canonical: "https://quantlabusa.dev/about",
    },
};

const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About QUANT LAB USA",
    url: "https://quantlabusa.dev/about",
    description:
        "QUANT LAB USA is a founder-led custom software and cybersecurity firm based in Macon, Georgia.",
    mainEntity: {
        "@id": "https://quantlabusa.dev/#organization",
    },
};

const industries = [
    { icon: Car, label: "Automotive" },
    { icon: HardHat, label: "Construction" },
    { icon: Music, label: "Entertainment" },
    { icon: TrendingUp, label: "Financial Services" },
];

const values = [
    {
        title: "We ship real things",
        body: "We measure our work by what's running in production, not by slide decks. Every system on our services page is live somewhere, doing the job it was built for.",
    },
    {
        title: "We build partnerships, not transactions",
        body: "Most of our clients stay with us after the initial build — for support, new features, or the next project. That's how we want to work: long-term, not project-to-project.",
    },
    {
        title: "Security isn't a bolt-on",
        body: "We run penetration tests for a living. That perspective shows up in everything else we build. Auth, data handling, and infrastructure are thought through from day one.",
    },
    {
        title: "Quality beats velocity theater",
        body: "We'd rather ship a smaller scope that works than a larger one that limps. Clients don't remember how fast a project felt. They remember whether the thing worked a year later.",
    },
];

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(aboutStructuredData),
                }}
            />

            {/* Header */}
            <section className="pt-32 pb-14 relative overflow-hidden">
                <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-quant-blue/8 rounded-full blur-[160px] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                        About
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        About QUANT LAB USA
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                        A small, founder-led software and security shop that builds systems
                        businesses actually use.
                    </p>
                </div>
            </section>

            {/* The story */}
            <section className="py-16 relative">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        The Story
                    </p>
                    <div className="space-y-5 text-gray-300 text-base md:text-lg leading-relaxed">
                        <p>
                            QuantLab exists because too many businesses get stuck with
                            software that doesn't fit how they actually work. A motorcycle
                            shop running inventory in one tool, work orders in another, and
                            invoicing in a third. A contractor spending four hours on every
                            proposal because the template software doesn't know how his
                            pricing works. A trader with a strategy that runs fine on paper
                            and falls apart the first time the market moves.
                        </p>
                        <p>
                            William started QuantLab in Georgia after a decade of seeing the
                            same pattern from the inside — generic SaaS for specific
                            problems, consulting firms that sell strategy and subcontract the
                            code, agencies where the person selling the project is never the
                            person building it. The premise of QuantLab is simpler: the
                            person you talk to is the person who writes the code. Nothing
                            gets lost in translation because there's no translation layer.
                        </p>
                        <p>
                            The philosophy is to own the whole stack. Front end to database.
                            Auth to payments. Deployment to monitoring. Not because that's a
                            flex, but because real business problems don't live neatly in one
                            layer — the interesting failures happen at the seams between
                            them, and you can't fix what you don't understand.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who we work with */}
            <section className="py-16 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Who We Work With
                    </p>
                    <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5 mb-10">
                        <p>
                            We don't target a single vertical. The common thread across our
                            clients is that they've outgrown off-the-shelf tools and need
                            something built around how their business actually runs.
                        </p>
                        <p>
                            In practice, that's meant trading firms who need live execution
                            systems, shop owners who need operations platforms that replace
                            a dozen disconnected tools, contractors who need estimating
                            engines that match their pricing logic, and security teams who
                            need adversarial testing that goes beyond a vulnerability scan.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-8 md:gap-12">
                        {industries.map(({ icon: Icon, label }) => (
                            <div
                                key={label}
                                className="flex items-center gap-3 text-gray-400"
                            >
                                <Icon className="w-5 h-5 text-sky-400" />
                                <span className="text-sm font-medium">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How we work */}
            <section className="py-16 relative">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        How We Work
                    </p>
                    <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5">
                        <p>
                            Small. Senior. Direct. The engagement starts with a call, not a
                            pitch deck. If the project fits, we follow up with a written
                            scope and a quote that breaks out what you're paying for. If it
                            doesn't fit, we'll tell you that too and point you somewhere
                            better.
                        </p>
                        <p>
                            There are no account managers here. No project coordinators
                            layered between you and the engineer. When you need to change a
                            requirement, discuss a bug, or ask a blunt question about whether
                            something is really necessary, you email the person who's
                            actually building it.
                        </p>
                        <p>
                            When a project needs more hands than the founder, we bring in
                            engineers we've worked with and trust. We don't subcontract to
                            agencies. Code review and architecture decisions stay in-house.
                        </p>
                    </div>
                </div>
            </section>

            {/* The founder */}
            <section className="py-20 relative border-y border-white/5 bg-black/40">
                <div className="container mx-auto px-6 max-w-4xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-8">
                        The Founder
                    </p>
                    <div className="flex flex-col md:flex-row items-start gap-10">
                        <div className="flex-shrink-0">
                            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border border-white/10">
                                <Image
                                    src="/founder.jpg"
                                    alt="William Beltz — Founder of QUANT LAB USA"
                                    fill
                                    sizes="192px"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                                William Beltz
                            </h2>
                            <p className="text-sky-400 text-sm font-medium tracking-wide mb-5">
                                Founder &amp; Lead Engineer
                            </p>
                            <div className="text-gray-300 text-base leading-relaxed space-y-4">
                                <p>
                                    I started QuantLab because I kept running into businesses
                                    stuck with software that didn't fit how they actually work,
                                    and I got tired of watching it happen. I write the code
                                    myself — from database schemas to deployment configs — and
                                    I work directly with every client.
                                </p>
                                <p>
                                    My background is full-stack engineering with a heavy bias
                                    toward systems that touch real money or real operations:
                                    live trading platforms, payment infrastructure, and
                                    operations software that runs day-to-day businesses. The
                                    security work grew out of the same instinct — if you build
                                    systems, you should know how they break.
                                </p>
                            </div>

                            <div className="flex items-center gap-5 mt-6">
                                <a
                                    href="https://linkedin.com/in/williambeltz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://github.com/williambeltz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <span className="text-gray-700">·</span>
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <MapPin className="w-4 h-4" />
                                    Georgia, USA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech & values */}
            <section className="py-20 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Tech &amp; Values
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 leading-tight">
                        What we care about.
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {values.map((v) => (
                            <div
                                key={v.title}
                                className="rounded-2xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm p-7"
                            >
                                <h3 className="text-lg font-bold text-white mb-3">
                                    {v.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {v.body}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 rounded-2xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm p-7">
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-4">
                            Day-to-day tech
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            {[
                                "Next.js",
                                "TypeScript",
                                "React",
                                "Node.js",
                                "Python",
                                "PostgreSQL",
                                "Prisma",
                                "Stripe",
                                "Docker",
                                "Vercel",
                                "Fly.io",
                                "DigitalOcean",
                                "Sentry",
                                "Tailwind",
                            ].map((t) => (
                                <span
                                    key={t}
                                    className="px-3.5 py-1.5 rounded-full text-sm font-medium border border-white/8 bg-white/4 text-gray-300"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Want to work together?
                    </h2>
                    <p className="text-gray-400 text-lg mb-3 leading-relaxed">
                        Start with a call. You tell us what you're building, we'll tell you
                        whether we can help.
                    </p>
                    <p className="text-gray-400 text-sm mb-8 flex items-center justify-center gap-2 flex-wrap">
                        <Mail className="w-4 h-4" />
                        Call{" "}
                        <a
                            href="tel:+17706521282"
                            className="inline-flex items-center min-h-[44px] text-sky-400 hover:text-sky-300 transition-colors underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400"
                        >
                            (770) 652-1282
                        </a>
                        <span>or email</span>
                        <a
                            href="mailto:beltz@quantlabusa.dev"
                            className="text-sky-400 hover:text-sky-300 transition-colors"
                        >
                            beltz@quantlabusa.dev
                        </a>
                    </p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                        <ConsultationCTA label="Book a Consultation" />
                        <Link
                            href="/work"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                        >
                            See our work
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
