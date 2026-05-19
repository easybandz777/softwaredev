import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "Hiring Developers FAQs: CTO, Agency, Offshore | QUANT LAB USA",
    description:
        "When to hire a CTO, what a fractional CTO does, US vs offshore, agency vs contractor, freelancer for MVP, senior dev hiring timelines, and technical co-founder traits.",
    openGraph: {
        title: "Hiring Developers FAQs: CTO, Agency, Offshore | QUANT LAB USA",
        description:
            "When to hire a CTO, fractional CTO scope, US vs offshore, agency vs contractor, freelancer for MVP, and technical co-founder traits.",
        url: "https://quantlabusa.dev/faq/hiring",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hiring Developers FAQs: CTO, Agency, Offshore | QUANT LAB USA",
        description:
            "When to hire a CTO, fractional CTO scope, US vs offshore, agency vs contractor, and freelancer for MVP.",
    },
    alternates: {
        canonical: "https://quantlabusa.dev/faq/hiring",
    },
};

const qas = [
    {
        q: "When should a startup hire a CTO?",
        a: "Hire a full-time CTO when you have product-market fit, raised at least a seed round, and have at least three engineers reporting to someone. Before that, a technical co-founder, fractional CTO, or trusted dev firm covers the same ground for one-tenth the burn. Hiring a CTO at pre-seed usually slows you down and exhausts equity.",
    },
    {
        q: "What does a fractional CTO do?",
        a: "A fractional CTO works 5 to 20 hours a week as your senior technical leader — owning architecture decisions, vendor selection, hiring screens, code review, security posture, and roadmap. They don't write production code as their main job. Typical 2026 cost is $4,000 to $12,000 per month, far less than a full-time CTO at $250K+ all-in.",
    },
    {
        q: "Why outsource software development to the USA instead of offshore?",
        a: "US-based development gives you time-zone overlap, native-English communication, US contract law, IP protection, and accountability — a real entity to sue or refund. Offshore-cheap projects routinely fail QA and get rebuilt domestically, doubling the spend. QUANT LAB USA is 100 percent US-based, founder-led from Macon, Georgia. We never offshore client work.",
    },
    {
        q: "When should we hire in-house vs use an agency?",
        a: "Hire in-house when the work is ongoing, core to your product, and predictable enough to justify a $200K+ all-in salary. Use an agency or firm when scope is well-defined, you need senior-level work without 12 months of recruiting, or the project has a clear end date. Most pre-Series-A companies are better off with an agency or firm.",
    },
    {
        q: "How do I evaluate a software development firm?",
        a: "Check who actually writes the code (founder or subcontractor), ask for three references you can call directly, review their public code on GitHub, ask what their worst project looked like and what they fixed, confirm IP ownership terms in writing, and confirm they're a US legal entity if that matters to you. Then trust your gut on the discovery call.",
    },
    {
        q: "What's the difference between an agency and a contractor?",
        a: "A contractor is a single individual you hire directly — 1099 or W-2 — for a specific scope of work. An agency is a multi-person firm that signs the contract and assigns engineers. Contractors are cheaper hourly but carry single-point-of-failure risk. Agencies provide redundancy, process, and a legal entity to enforce contracts against.",
    },
    {
        q: "How do I know if I need a developer or a software firm?",
        a: "Hire a developer when you need ongoing engineering capacity, you have a tech-savvy founder to manage them, and your project will run for at least six months. Hire a firm when scope is bounded, you need senior-level decisions on architecture and security, or you don't have a technical leader on the team yet. Firms cost more but require less management.",
    },
    {
        q: "Should I hire a freelancer for my MVP?",
        a: "Hire a freelancer for your MVP only if they have shipped at least three production MVPs in your stack, you've checked references, and you're prepared for the project to fail. Senior US freelancers can absolutely ship MVPs. The risk is mid-tier freelancers who quote low, deliver late, and disappear at integration time. A firm de-risks that for a premium.",
    },
    {
        q: "How long does it take to hire a senior developer?",
        a: "Hiring a senior US developer in 2026 typically takes 8 to 16 weeks from job-posting to start date — longer for niche stacks (Rust, Elixir, OCaml). Ramp-up to real productivity adds another 4 to 8 weeks. Total time-to-first-PR-that-matters is roughly 12 to 24 weeks. A firm or fractional CTO ships your first feature in 1 to 2 weeks.",
    },
    {
        q: "What makes a good technical co-founder?",
        a: "A good technical co-founder ships production software, makes vendor and architecture decisions you can defend, communicates clearly with non-technical investors, and stays calm when production breaks at 2am. Resume signals: shipped at least one company-defining product, comfortable across frontend, backend, infrastructure, and security. Equity-only co-founders rarely beat a fractional CTO under most realistic timelines.",
    },
];

const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "Hiring Software Developers FAQs",
    url: "https://quantlabusa.dev/faq/hiring",
    publisher: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    mainEntity: qas.map((qa) => ({
        "@type": "Question",
        name: qa.q,
        acceptedAnswer: { "@type": "Answer", text: qa.a },
    })),
};

export default function FAQHiringPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
            />

            <section className="pt-32 pb-10 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-quant-blue/8 rounded-full blur-[160px] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "FAQ", href: "/faq" },
                            { label: "Hiring" },
                        ]}
                    />
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                        FAQ · Hiring
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Hiring Developers FAQs
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                        Ten direct answers on hiring engineers, fractional CTOs, US vs
                        offshore, agencies vs contractors, freelancers for MVPs, and
                        what a technical co-founder is actually worth.
                    </p>
                </div>
            </section>

            <section className="pb-16 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="space-y-4">
                        {qas.map((qa, idx) => (
                            <article
                                key={idx}
                                className="rounded-xl border border-white/8 bg-[#0d1526]/60 backdrop-blur-sm p-5 md:p-6"
                            >
                                <h2 className="text-lg md:text-xl font-semibold text-white leading-snug mb-3">
                                    {qa.q}
                                </h2>
                                <p className="text-gray-300 text-sm md:text-base leading-relaxed m-0">
                                    {qa.a}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-12 rounded-2xl border border-white/8 bg-[#0d1526]/40 p-6 md:p-8">
                        <h3 className="text-xl font-semibold text-white mb-3">
                            Browse all FAQ categories
                        </h3>
                        <div className="flex flex-wrap gap-3 text-sm">
                            <Link
                                href="/faq/cost"
                                className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:border-sky-400/40 hover:text-sky-300 transition-colors"
                            >
                                Cost
                            </Link>
                            <Link
                                href="/faq/process"
                                className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:border-sky-400/40 hover:text-sky-300 transition-colors"
                            >
                                Process
                            </Link>
                            <Link
                                href="/faq/technology"
                                className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:border-sky-400/40 hover:text-sky-300 transition-colors"
                            >
                                Technology
                            </Link>
                            <Link
                                href="/faq/working-with-us"
                                className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:border-sky-400/40 hover:text-sky-300 transition-colors"
                            >
                                Working With Us
                            </Link>
                            <Link
                                href="/faq"
                                className="px-4 py-2 rounded-full border border-sky-400/30 bg-sky-500/5 text-sky-300 hover:bg-sky-500/10 transition-colors"
                            >
                                ← All FAQs
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Senior engineering without the hiring cycle
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Skip the 16-week recruit. QUANT LAB USA gives you a founder-led
                        engineering team for a fixed fee — no offshore handoff, no
                        junior bait-and-switch.
                    </p>
                    <ConsultationCTA label="Book a Consultation" />
                </div>
            </section>
        </main>
    );
}
