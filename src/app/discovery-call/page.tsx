import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
    CalendarDays,
    Check,
    X,
    Clock,
    Shield,
    MapPin,
    Star,
    ArrowRight,
    ChevronLeft,
    Mail,
    FileText,
} from "lucide-react";
import { CalendarEmbed } from "@/components/CalendarEmbed";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { JsonLd } from "@/components/JsonLd";

// ────────────────────────────────────────────────────────────────────────────
// Metadata — single-purpose discovery-call landing page.
// Title kept inside the 50–65 char window; description inside 140–160.
// ────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
    title: "Book a 20-Minute Discovery Call | QUANT LAB USA",
    description:
        "Book a 20-minute scoping call with William Beltz. Leave with a clear scope, a price band, and a delivery plan. Founder-led, USA-based, no offshore handoff.",
    alternates: { canonical: "https://quantlabusa.dev/discovery-call" },
    openGraph: {
        title: "Book a 20-Minute Discovery Call | QUANT LAB USA",
        description:
            "20-minute scoping call with William Beltz. Leave with a clear scope, a price band, and a delivery plan. Founder-led, USA-based, no offshore handoff.",
        url: "https://quantlabusa.dev/discovery-call",
        siteName: "QUANT LAB USA",
        type: "website",
        images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Book a discovery call with QUANT LAB USA" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Book a 20-Minute Discovery Call | QUANT LAB USA",
        description:
            "20-minute scoping call with William Beltz. Clear scope, price band, delivery plan. Founder-led, USA-based.",
        images: ["/og-image.png"],
    },
    robots: { index: true, follow: true },
};

// ────────────────────────────────────────────────────────────────────────────
// FAQ content — addresses pre-call objections.
// ────────────────────────────────────────────────────────────────────────────

const FAQ: { q: string; a: string }[] = [
    {
        q: "What if you're too expensive?",
        a: "Then we'll say so on the call. Our published price bands run $4K for a small web-app pentest up to $200K+ for full custom CRM platforms. If your budget is below the floor for what you need, William will tell you on the call and point you to a cheaper path — Retool, Airtable, an offshore option you can vet, or a phased plan that hits your number. No pitch, no upsell.",
    },
    {
        q: "What if I'm not ready yet — I don't have specs or a budget?",
        a: "That's normal and exactly why the call exists. You don't need a written spec, an RFP, or a finalized budget. You need a problem you're trying to solve and a rough sense of urgency. William will help you turn that into a scoped option set and a price band in 20 minutes. If after the call you decide it's not the right time, you walk away with the scope document anyway — it's yours to use however.",
    },
    {
        q: "Do I need to know my exact requirements before booking?",
        a: "No. The call is the requirements conversation. Show up with the business problem (e.g., 'our spreadsheet is breaking', 'we need to take payments', 'we just got a security letter from a customer'), and William will translate that into scope, options, and a price band. If you have written docs already, great — send them after booking and we'll come prepared. If not, the conversation is the discovery.",
    },
    {
        q: "What if we get on the call and we're just not a fit?",
        a: "Then we end the call early and you get a written referral to someone who is a fit, where possible. QUANT LAB USA is founder-led and we don't take engagements we can't run well — that means turning down projects that are wrong for us is part of the job. No hard feelings, no follow-up sequence, no being added to a CRM you didn't ask to be in.",
    },
    {
        q: "What happens after the call?",
        a: "Within 24 hours you get a written follow-up: the scope we discussed, the price band, the proposed delivery plan, and any open questions. No proposal-by-proposal-by-proposal. If you want to move forward, the next step is a fixed-quote engagement letter. If you don't, the document is still yours — you can take it to another firm and use it as a brief. We won't chase you.",
    },
];

// ────────────────────────────────────────────────────────────────────────────
// "What you get" / "What you do NOT get" content.
// ────────────────────────────────────────────────────────────────────────────

const WHAT_YOU_GET: string[] = [
    "A clear scope you can hand to any vendor — written in plain English, not engineer-speak",
    "A real price band, not a range you have to call to find out",
    "A delivery plan with milestones, hand-offs, and what we need from you to start",
    "A no-offshore guarantee: founder-led, US-based, the engineer who codes it is on the call",
    "A written follow-up in your inbox within 24 hours — the scope is yours either way",
];

const WHAT_YOU_DONT_GET: string[] = [
    "No SDR or BDR — the founder is on the call, end of story",
    "No upsell or bundling — you get pricing for what you asked about, nothing else",
    "No NDA gating — the call happens without lawyers in the middle of a 20-minute conversation",
    "No aggressive follow-up sequence — one written recap, then we wait for you",
    "No fake urgency, no countdown timers, no 'this offer expires' — we don't run sales like that",
];

// ────────────────────────────────────────────────────────────────────────────
// JSON-LD: FAQPage + Service + BreadcrumbList.
// ────────────────────────────────────────────────────────────────────────────

const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Discovery Call", item: "https://quantlabusa.dev/discovery-call" },
    ],
};

const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    url: "https://quantlabusa.dev/discovery-call",
    mainEntity: FAQ.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
};

const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://quantlabusa.dev/discovery-call#service",
    name: "20-Minute Discovery Call",
    serviceType: "Discovery Call",
    description:
        "A 20-minute founder-led scoping call. Leave with a clear scope, a price band, and a written delivery plan within 24 hours. No SDR, no upsell, no NDA gating.",
    provider: { "@id": "https://quantlabusa.dev/#organization" },
    areaServed: { "@type": "Country", name: "United States" },
    audience: { "@type": "BusinessAudience", audienceType: "Founders, operators, CTOs, IT directors" },
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
        url: "https://quantlabusa.dev/discovery-call",
    },
};

// ────────────────────────────────────────────────────────────────────────────
// Page.
// ────────────────────────────────────────────────────────────────────────────

export default function DiscoveryCallPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text">
            <JsonLd data={[breadcrumbLd, faqLd, serviceLd]} />

            {/* ── Minimal top bar — single-purpose page, no main nav distractions ── */}
            <div className="relative z-20 border-b border-white/5 bg-quant-bg/80 backdrop-blur-sm">
                <div className="container mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2.5 text-white"
                        aria-label="QUANT LAB USA — home"
                    >
                        <Image
                            src="/logo-transparent.png"
                            alt=""
                            width={32}
                            height={32}
                            className="h-8 w-8"
                            priority
                        />
                        <span className="text-sm font-semibold tracking-wide">QUANT LAB USA</span>
                    </Link>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-1.5 text-xs text-gray-400 transition-colors hover:text-sky-400"
                    >
                        <ChevronLeft className="h-3.5 w-3.5" />
                        Back to home
                    </Link>
                </div>
            </div>

            {/* ── Hero ── */}
            <section className="relative overflow-hidden pt-16 pb-10 md:pt-20">
                <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-quant-blue/10 blur-[160px]" />
                <div className="container relative z-10 mx-auto max-w-4xl px-6 text-center">
                    <span className="mb-5 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-quant-blue">
                        Discovery call
                    </span>
                    <h1 className="mb-6 text-balance text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                        Get a 20-minute scoping call — leave with a price band and a delivery plan.
                    </h1>
                    <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-gray-400 md:text-xl">
                        Founder-led. US-based. The engineer who will write the code is the one on the call.
                        No SDRs, no offshore handoff, no recurring sales sequence. One conversation, one
                        written follow-up, then it's your move.
                    </p>

                    {/* Quick trust strip */}
                    <div className="mx-auto mt-10 grid max-w-3xl grid-cols-2 gap-3 md:grid-cols-4">
                        <div className="flex items-center justify-center gap-2 rounded-xl border border-white/8 bg-[#0d1526]/60 px-3 py-2.5">
                            <Clock className="h-4 w-4 flex-shrink-0 text-sky-400" />
                            <span className="text-xs text-gray-300">20 minutes</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 rounded-xl border border-white/8 bg-[#0d1526]/60 px-3 py-2.5">
                            <Shield className="h-4 w-4 flex-shrink-0 text-sky-400" />
                            <span className="text-xs text-gray-300">No NDA needed</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 rounded-xl border border-white/8 bg-[#0d1526]/60 px-3 py-2.5">
                            <MapPin className="h-4 w-4 flex-shrink-0 text-sky-400" />
                            <span className="text-xs text-gray-300">USA, founder-led</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 rounded-xl border border-white/8 bg-[#0d1526]/60 px-3 py-2.5">
                            <FileText className="h-4 w-4 flex-shrink-0 text-sky-400" />
                            <span className="text-xs text-gray-300">24-hr recap</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Primary CTA — Calendar embed ── */}
            <section id="book" className="relative py-14">
                <div className="container mx-auto max-w-3xl px-6">
                    <div className="mb-6 text-center">
                        <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                            <CalendarDays className="h-3.5 w-3.5" />
                            Pick a time
                        </p>
                        <h2 className="text-2xl font-bold text-white md:text-3xl">
                            Book your discovery call
                        </h2>
                    </div>
                    <CalendarEmbed />
                </div>
            </section>

            {/* ── Secondary path — consultation form fallback ── */}
            <section className="relative border-t border-white/5 bg-black/20 py-14">
                <div className="container mx-auto max-w-3xl px-6 text-center">
                    <p className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                        Or, if you'd rather write first
                    </p>
                    <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
                        Skip the calendar and send the details
                    </h2>
                    <p className="mx-auto mb-6 max-w-xl text-sm leading-relaxed text-gray-400">
                        Use the 3-step consultation form — tell us about your project, and we'll
                        come back with a time and a short prep doc so the call hits the ground running.
                    </p>
                    <ConsultationCTA
                        label="Open the consultation form"
                        variant="primary"
                        size="lg"
                        source="discovery-call-page"
                        className="min-w-[260px]"
                    />
                    <p className="mt-4 text-xs text-gray-500">
                        Or email{" "}
                        <a
                            href="mailto:beltz@quantlabusa.dev?subject=Discovery%20call%20request"
                            className="text-sky-400 hover:underline"
                        >
                            beltz@quantlabusa.dev
                        </a>{" "}
                        directly — William reads every inbound.
                    </p>
                </div>
            </section>

            {/* ── What you get / What you do NOT get ── */}
            <section className="relative border-t border-white/5 py-16">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                        {/* What you get */}
                        <div className="rounded-2xl border border-sky-400/20 bg-gradient-to-br from-[#0d1f33]/80 to-[#0a1426]/80 p-7 md:p-8">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/30 bg-sky-400/10">
                                    <Check className="h-5 w-5 text-sky-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white md:text-2xl">What you get</h3>
                            </div>
                            <ul className="space-y-3">
                                {WHAT_YOU_GET.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                                        <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* What you do NOT get */}
                        <div className="rounded-2xl border border-white/10 bg-[#0d1526]/70 p-7 md:p-8">
                            <div className="mb-4 flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5">
                                    <X className="h-5 w-5 text-gray-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white md:text-2xl">What you do NOT get</h3>
                            </div>
                            <ul className="space-y-3">
                                {WHAT_YOU_DONT_GET.map((item) => (
                                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-gray-300">
                                        <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-gray-500" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Social proof — verified facts only ── */}
            <section className="relative border-t border-white/5 bg-black/20 py-16">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="mb-10 text-center">
                        <p className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                            Verified facts, not stock photos
                        </p>
                        <h2 className="text-2xl font-bold text-white md:text-3xl">
                            Things you can check before you book
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
                        {/* GBP */}
                        <a
                            href="https://g.page/r/CbkSyF5E2JFtEBM"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center gap-2 rounded-2xl border border-white/8 bg-[#0d1526]/70 p-5 transition-all hover:border-sky-400/30"
                        >
                            <Star className="h-6 w-6 text-amber-400" />
                            <p className="text-2xl font-bold text-white">5.0</p>
                            <p className="text-center text-[11px] leading-tight text-gray-400">
                                Verified Google Business Profile
                            </p>
                        </a>

                        {/* GA SOS */}
                        <Link
                            href="/certifications-credentials"
                            className="group flex flex-col items-center gap-2 rounded-2xl border border-white/8 bg-[#0d1526]/70 p-5 transition-all hover:border-sky-400/30"
                        >
                            <Shield className="h-6 w-6 text-sky-400" />
                            <p className="text-2xl font-bold text-white">#26086454</p>
                            <p className="text-center text-[11px] leading-tight text-gray-400">
                                GA Secretary of State entity ID
                            </p>
                        </Link>

                        {/* Cities */}
                        <Link
                            href="/locations"
                            className="group flex flex-col items-center gap-2 rounded-2xl border border-white/8 bg-[#0d1526]/70 p-5 transition-all hover:border-sky-400/30"
                        >
                            <MapPin className="h-6 w-6 text-sky-400" />
                            <p className="text-2xl font-bold text-white">14</p>
                            <p className="text-center text-[11px] leading-tight text-gray-400">
                                US metros served
                            </p>
                        </Link>

                        {/* Founder-led */}
                        <Link
                            href="/about"
                            className="group flex flex-col items-center gap-2 rounded-2xl border border-white/8 bg-[#0d1526]/70 p-5 transition-all hover:border-sky-400/30"
                        >
                            <Check className="h-6 w-6 text-sky-400" />
                            <p className="text-2xl font-bold text-white">100%</p>
                            <p className="text-center text-[11px] leading-tight text-gray-400">
                                Founder-led delivery
                            </p>
                        </Link>

                        {/* EIN */}
                        <Link
                            href="/certifications-credentials"
                            className="group flex flex-col items-center gap-2 rounded-2xl border border-white/8 bg-[#0d1526]/70 p-5 transition-all hover:border-sky-400/30"
                        >
                            <FileText className="h-6 w-6 text-sky-400" />
                            <p className="text-2xl font-bold text-white">42-2039870</p>
                            <p className="text-center text-[11px] leading-tight text-gray-400">
                                IRS EIN (US tax ID)
                            </p>
                        </Link>
                    </div>

                    <p className="mt-7 text-center text-xs text-gray-500">
                        QUANT LAB USA INC · C-Corp registered in Georgia · Macon HQ ·{" "}
                        <Link href="/certifications-credentials" className="text-sky-400 hover:underline">
                            Full credentials
                        </Link>
                    </p>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="relative border-t border-white/5 py-16">
                <div className="container mx-auto max-w-3xl px-6">
                    <div className="mb-10 text-center">
                        <p className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
                            Before you book
                        </p>
                        <h2 className="text-2xl font-bold text-white md:text-3xl">
                            Common pre-call questions
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {FAQ.map((f) => (
                            <details
                                key={f.q}
                                className="group rounded-2xl border border-white/8 bg-[#0d1526]/70 p-5 transition-colors hover:border-sky-400/20 md:p-6"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                                    <h3 className="text-base font-semibold text-white md:text-lg">
                                        {f.q}
                                    </h3>
                                    <span
                                        aria-hidden="true"
                                        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-white/10 text-sm text-gray-400 transition-transform group-open:rotate-45"
                                    >
                                        +
                                    </span>
                                </summary>
                                <p className="mt-3 text-sm leading-relaxed text-gray-400">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Bottom CTA + exit ramp ── */}
            <section className="relative border-t border-white/5 bg-gradient-to-b from-[#0a1426]/40 to-quant-bg py-16">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
                        Ready when you are.
                    </h2>
                    <p className="mx-auto mb-7 max-w-xl text-base leading-relaxed text-gray-400">
                        20 minutes, one founder, one written recap. That's the whole deal.
                    </p>
                    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                        <Link
                            href="#book"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-quant-blue px-8 py-4 text-base font-semibold text-white shadow-[0_0_25px_rgba(59,130,246,0.4)] transition-all hover:bg-blue-600"
                        >
                            Pick a time
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                        <a
                            href="mailto:beltz@quantlabusa.dev?subject=Discovery%20call%20request"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-white/10"
                        >
                            <Mail className="h-4 w-4" />
                            Email instead
                        </a>
                    </div>

                    {/* Exit ramp */}
                    <div className="mt-12 rounded-2xl border border-white/8 bg-[#0d1526]/60 p-6 md:p-7">
                        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                            Not ready for a call?
                        </p>
                        <h3 className="mb-3 text-xl font-bold text-white">
                            Grab a free resource and we'll be here when you are.
                        </h3>
                        <p className="mx-auto mb-5 max-w-lg text-sm leading-relaxed text-gray-400">
                            12 founder-written playbooks, checklists, and templates — build-vs-buy,
                            CRM rollout, Stripe integration, pentest scoping, and more. No pitch,
                            no follow-up sequence.
                        </p>
                        <Link
                            href="/resources"
                            className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-sky-400/15"
                        >
                            Browse the resource library
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
