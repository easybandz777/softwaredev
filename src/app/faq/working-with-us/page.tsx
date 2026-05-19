import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "Working With Us FAQs: IP, Billing, Communication | QUANT LAB USA",
    description:
        "Code ownership, communication, warranty, direct developer access, NDAs, billing model, long-term retainers, and how QUANT LAB USA handles requirement changes.",
    openGraph: {
        title: "Working With Us FAQs: IP, Billing, Communication | QUANT LAB USA",
        description:
            "Code ownership, communication, warranty, direct developer access, NDAs, billing, and long-term retainers at QUANT LAB USA.",
        url: "https://quantlabusa.dev/faq/working-with-us",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Working With Us FAQs: IP, Billing, Communication | QUANT LAB USA",
        description:
            "Code ownership, communication, warranty, NDAs, billing, and retainers — how QUANT LAB USA actually works.",
    },
    alternates: {
        canonical: "https://quantlabusa.dev/faq/working-with-us",
    },
};

const qas = [
    {
        q: "Who owns the code in a custom software project?",
        a: "You own 100 percent of the source code at delivery, including the database schema, deployment configs, and infrastructure-as-code. Ownership transfers via a work-for-hire clause in our Statement of Work. We retain rights only to generic libraries, internal tooling, and snippets used across multiple clients — never anything specific to your business logic.",
    },
    {
        q: "How do you communicate during a project?",
        a: "We integrate into your existing stack — Slack, Microsoft Teams, Linear, Jira, GitHub Issues — rather than forcing you into ours. Async daily updates on active sprints, weekly 30-minute demo calls, and ad-hoc calls as needed. The founder (Bill Beltz) is on every call and in every channel. No account-manager filter, no junior intermediary.",
    },
    {
        q: "What is your warranty or guarantee?",
        a: "Every project includes a 30-day post-launch warranty covering any bug against the written SOW at no charge. If a SOW-spec feature breaks, we fix it. The warranty doesn't cover scope changes, third-party API outages, or bugs caused by client-side modifications. We've never had a client invoke the warranty for fundamental quality issues.",
    },
    {
        q: "Will I have direct access to the developer?",
        a: "Yes. Bill Beltz, the founder, is on every call, writes code on every project, and is your single point of contact from kickoff to handoff. No account managers, no offshore handoff after the sales call. You can text or email directly during business hours. For after-hours emergencies on retainer clients, there's a documented escalation path.",
    },
    {
        q: "How do you handle confidential information?",
        a: "All client data is treated as confidential by default — no NDA required to start the conversation. We sign your NDA on request before any privileged information is shared. Production credentials never leave 1Password vaults. Client code lives in your GitHub or our shared org with role-based access. We don't use client code as portfolio examples without written permission.",
    },
    {
        q: "What if I'm not satisfied with the work?",
        a: "First step: raise it on the next weekly demo, in writing if it matters. We treat dissatisfaction as a process failure and fix the underlying cause, not just the symptom. If we genuinely can't deliver to spec, we refund the current sprint and walk away cleanly. We've never had a client invoke this. The discovery phase is designed to prevent it.",
    },
    {
        q: "How do you bill — milestones or hourly?",
        a: "We bill fixed-fee per milestone for almost all project work — typically 30 percent at kickoff, 40 percent at the midpoint deliverable, 30 percent at launch. Retainers bill monthly in advance. Time-and-materials only for exploratory work or open-ended maintenance. Net-15 payment terms on invoices. ACH preferred; Stripe accepted with a small processing fee.",
    },
    {
        q: "Can we work together long-term after launch?",
        a: "Yes — most clients move to a monthly retainer after launch covering support, monitoring, dependency updates, and a defined feature-work allowance. Retainers run $1,500 to $8,000 per month depending on scope. No long-term commitment — month-to-month with 30-day notice on either side. About 70 percent of our project clients retain us beyond launch.",
    },
    {
        q: "Do you sign NDAs?",
        a: "Yes — we sign reasonable NDAs before privileged information is shared. We have a standard mutual NDA ready, or we'll sign yours after a quick legal review. We don't sign NDAs with unusual non-compete clauses, perpetual confidentiality (we cap at 5 years), or liability terms beyond contract value. Most client NDAs go through unchanged.",
    },
    {
        q: "What if my requirements change mid-project?",
        a: "Small changes within the original spirit of the SOW are absorbed without paperwork. Larger requirement shifts go through a brief change request: what's changing, timeline impact, budget impact, and rationale. You approve in writing before we touch them. We don't silently expand scope and then surprise-bill you. Roughly 70 percent of projects ship with no formal change orders.",
    },
];

const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "Working With QUANT LAB USA FAQs",
    url: "https://quantlabusa.dev/faq/working-with-us",
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

export default function FAQWorkingWithUsPage() {
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
                            { label: "Working With Us" },
                        ]}
                    />
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                        FAQ · Working With Us
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Working With QUANT LAB USA
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                        Ten honest answers on the engagement details — code ownership,
                        communication, warranty, NDAs, billing terms, retainers, and
                        what happens when requirements shift mid-project.
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
                                href="/faq/hiring"
                                className="px-4 py-2 rounded-full border border-white/10 text-gray-300 hover:border-sky-400/40 hover:text-sky-300 transition-colors"
                            >
                                Hiring
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
                        Start with a 30-minute call
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        No NDA needed to talk. No slide deck. Just an honest
                        conversation about what you're building and whether we're the
                        right fit.
                    </p>
                    <ConsultationCTA label="Book a Consultation" />
                </div>
            </section>
        </main>
    );
}
