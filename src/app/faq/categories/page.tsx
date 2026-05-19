import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { DollarSign, ListChecks, Cpu, UserPlus, Handshake, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "FAQ Categories: Cost, Process, Tech, Hiring | QUANT LAB USA",
    description:
        "Browse 50 custom software FAQs grouped into five categories — cost, process, technology, hiring, and working with us. Real answers, no marketing fluff.",
    openGraph: {
        title: "FAQ Categories: Cost, Process, Tech, Hiring | QUANT LAB USA",
        description:
            "50 custom software FAQs grouped into cost, process, technology, hiring, and working-with-us categories.",
        url: "https://quantlabusa.dev/faq/categories",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "FAQ Categories: Cost, Process, Tech, Hiring | QUANT LAB USA",
        description:
            "50 custom software FAQs grouped into five categories. Real answers, no fluff.",
    },
    alternates: {
        canonical: "https://quantlabusa.dev/faq/categories",
    },
};

const categories = [
    {
        slug: "cost",
        label: "Cost",
        title: "Cost & Pricing",
        description:
            "Real 2026 numbers — custom software cost, MVP budgets, US developer rates, agency vs freelancer, AI consulting fees, and maintenance spend.",
        icon: DollarSign,
        sample: "How much does an MVP cost in 2026?",
    },
    {
        slug: "process",
        label: "Process",
        title: "Process & Methodology",
        description:
            "How long custom software takes, our 6-phase delivery process, scope-change handling, deliverables per phase, QA, and post-launch support.",
        icon: ListChecks,
        sample: "How long does it take to build custom software?",
    },
    {
        slug: "technology",
        label: "Technology",
        title: "Technology & Stack",
        description:
            "React vs Next.js, Stripe vs Stripe Connect, Postgres vs Mongo, AI integration, serverless vs containers, auth, security, and 2026 MVP stacks.",
        icon: Cpu,
        sample: "What's the right tech stack for an MVP in 2026?",
    },
    {
        slug: "hiring",
        label: "Hiring",
        title: "Hiring & Team Decisions",
        description:
            "When to hire a CTO, fractional CTO scope, US vs offshore, agency vs contractor, freelancer for MVP, and what a technical co-founder is worth.",
        icon: UserPlus,
        sample: "When should a startup hire a CTO?",
    },
    {
        slug: "working-with-us",
        label: "Working With Us",
        title: "Working With Us",
        description:
            "Code ownership, communication channels, warranty, direct developer access, NDAs, billing model, long-term retainers, and requirement changes.",
        icon: Handshake,
        sample: "Who owns the code in a custom software project?",
    },
];

export default function FAQCategoriesPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text">
            <section className="pt-32 pb-10 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-quant-blue/8 rounded-full blur-[160px] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-5xl">
                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "FAQ", href: "/faq" },
                            { label: "Categories" },
                        ]}
                    />
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                        FAQ · Categories
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Browse FAQs by category
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                        Fifty real answers, grouped into the five categories prospects
                        actually ask about. Pick the topic that matches what you're
                        weighing.
                    </p>
                </div>
            </section>

            <section className="pb-16 relative">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {categories.map((cat) => {
                            const Icon = cat.icon;
                            return (
                                <Link
                                    key={cat.slug}
                                    href={`/faq/${cat.slug}`}
                                    className="group block rounded-2xl border border-white/8 bg-[#0d1526]/60 backdrop-blur-sm p-6 md:p-7 hover:border-sky-400/40 transition-colors"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 flex-shrink-0">
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h2 className="text-xl md:text-2xl font-semibold text-white leading-snug m-0 group-hover:text-sky-100 transition-colors">
                                                {cat.title}
                                            </h2>
                                            <span className="text-xs text-sky-400 font-mono tracking-wider uppercase">
                                                10 questions
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
                                        {cat.description}
                                    </p>
                                    <p className="text-gray-500 text-xs italic mb-4">
                                        Example: &ldquo;{cat.sample}&rdquo;
                                    </p>
                                    <div className="flex items-center gap-2 text-sm font-semibold text-sky-300 group-hover:text-sky-200 transition-colors">
                                        Read {cat.label.toLowerCase()} FAQs
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    <div className="mt-10 text-center">
                        <Link
                            href="/faq"
                            className="inline-flex items-center gap-2 text-sm text-sky-300 hover:text-sky-200 transition-colors"
                        >
                            <span aria-hidden="true">←</span>
                            Back to all FAQs
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-16 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Question we didn't cover?
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Book a 30-minute call. We'll answer it directly and tell you
                        honestly if we're the right fit for what you're building.
                    </p>
                    <ConsultationCTA label="Book a Consultation" />
                </div>
            </section>
        </main>
    );
}
