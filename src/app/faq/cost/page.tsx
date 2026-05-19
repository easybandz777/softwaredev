import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "Custom Software Cost FAQs: Pricing & Budgets | QUANT LAB USA",
    description:
        "Real numbers on custom software cost, MVP pricing, US developer rates, agency vs freelancer, AI consulting fees, maintenance budgets, and SaaS build costs in 2026.",
    openGraph: {
        title: "Custom Software Cost FAQs: Pricing & Budgets | QUANT LAB USA",
        description:
            "Real 2026 numbers on custom software cost, MVP pricing, US developer rates, agency vs freelancer, AI consulting, and maintenance budgets.",
        url: "https://quantlabusa.dev/faq/cost",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Software Cost FAQs: Pricing & Budgets | QUANT LAB USA",
        description:
            "Real 2026 numbers on custom software cost, MVP pricing, US developer rates, agency vs freelancer, AI consulting, and maintenance budgets.",
    },
    alternates: {
        canonical: "https://quantlabusa.dev/faq/cost",
    },
};

const qas = [
    {
        q: "How much does custom software development cost in 2026?",
        a: "Custom software in 2026 typically runs $25,000 to $250,000+ for US-built projects, depending on scope. A focused internal tool lands around $25K to $50K, a production SaaS platform $75K to $150K, and a multi-module enterprise system $200K and up. QUANT LAB USA quotes fixed-fee per phase after a paid discovery.",
    },
    {
        q: "How much does an MVP cost to build in 2026?",
        a: "A real MVP — usable in production, not a prototype — runs $30,000 to $80,000 US-built. Tight scope (one core workflow, auth, payments, dashboard) lands around $35K in 6 to 10 weeks. Wider scope with integrations, role-based access, and admin tools pushes toward $75K. Offshore quotes are lower but rarely ship.",
    },
    {
        q: "What's the hourly rate for a Next.js developer in the US?",
        a: "Senior US-based Next.js developers bill $125 to $250 per hour in 2026. Boutique agencies and founder-led firms typically run $150 to $200. Top-tier consultancies and ex-FAANG engineers reach $250 to $400. QUANT LAB USA prices most work fixed-fee per phase instead, because hourly billing rewards slow work and penalizes good engineers.",
    },
    {
        q: "Why is US-based software development more expensive than offshore?",
        a: "US engineers cost more because labor markets, healthcare, taxes, and cost-of-living are higher. You also pay for time-zone overlap, native-English communication, IP protection under US law, and accountability — there's a real entity to sue or refund. Most offshore-cheap projects end up rebuilt domestically, doubling the total spend.",
    },
    {
        q: "How do I budget for ongoing software maintenance?",
        a: "Budget 15 to 25 percent of original build cost annually for maintenance, security patches, dependency updates, hosting, and incremental feature work. A $60K SaaS build typically needs $9K to $15K per year ongoing. QUANT LAB USA offers monthly retainers from $1,500 to $8,000 covering support, monitoring, and a defined feature-work allowance.",
    },
    {
        q: "What's included in a fixed-price software project?",
        a: "A fixed-price project at QUANT LAB USA includes discovery, design, build, testing, deployment, source-code handoff, documentation, and a 30-day post-launch warranty. Hosting costs, third-party API fees (Stripe, Twilio, OpenAI), and out-of-scope feature requests are billed separately. You get a written Statement of Work before any code is written.",
    },
    {
        q: "How much does AI integration consulting cost?",
        a: "AI integration projects typically run $8,000 to $60,000 depending on complexity. A focused Claude or GPT-4 integration into an existing app (chatbot, summarization, classification) lands around $10K to $20K. Custom RAG systems with vector databases and evaluation pipelines run $30K to $60K. Token costs are passed through at provider pricing.",
    },
    {
        q: "Are software dev costs tax deductible?",
        a: "In the US, custom software development is generally deductible as a business expense — but under IRC Section 174, software dev costs must be capitalized and amortized over 5 years (15 for foreign work) since 2022. Talk to a CPA. The 5-year domestic amortization makes US-built software materially cheaper after-tax than offshore.",
    },
    {
        q: "What's the cost difference between agency and freelancer?",
        a: "A solo freelancer typically bills $75 to $175 per hour; a US agency runs $150 to $350 per hour or fixed-fee equivalent. Freelancers are cheaper hourly but carry single-point-of-failure risk. Agencies cost more but provide redundancy, process, and contracts. Founder-led firms like QUANT LAB USA sit in between — senior rates, no junior handoffs.",
    },
    {
        q: "How much does a SaaS MVP typically cost?",
        a: "A real SaaS MVP — multi-tenant, auth, Stripe billing, dashboards, admin — runs $50,000 to $120,000 US-built. Tight single-feature SaaS lands around $55K in 10 weeks; multi-feature platforms with role-based access, integrations, and analytics push toward $120K. QUANT LAB USA ships these in 10 to 16 weeks on Next.js + Postgres + Stripe.",
    },
];

const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "Custom Software Cost FAQs",
    url: "https://quantlabusa.dev/faq/cost",
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

export default function FAQCostPage() {
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
                            { label: "Cost" },
                        ]}
                    />
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                        FAQ · Cost
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Custom Software Cost FAQs
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                        Ten real, defensible answers on what custom software actually
                        costs in 2026 — MVP pricing, US developer rates, maintenance
                        budgets, agency vs freelancer, and AI consulting fees.
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
                                href="/faq/hiring"
                                className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:border-sky-400/40 hover:text-sky-300 transition-colors"
                            >
                                Hiring
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
                        Get a real fixed-fee quote
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Tell us what you're building. We'll give you a written quote
                        with milestones, deliverables, and a not-to-exceed number — not
                        a vague hourly range.
                    </p>
                    <ConsultationCTA label="Book a Consultation" />
                </div>
            </section>
        </main>
    );
}
