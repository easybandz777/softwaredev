import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "Software Process FAQs: Methodology & Timelines | QUANT LAB USA",
    description:
        "How long custom software takes, what questions to ask a dev firm, our methodology, scope-change handling, deliverables per phase, QA, and post-launch process.",
    openGraph: {
        title: "Software Process FAQs: Methodology & Timelines | QUANT LAB USA",
        description:
            "How long custom software takes, our methodology, scope-change handling, deliverables per phase, QA, and post-launch process.",
        url: "https://quantlabusa.dev/faq/process",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Software Process FAQs: Methodology & Timelines | QUANT LAB USA",
        description:
            "How long custom software takes, our methodology, scope-change handling, and post-launch process.",
    },
    alternates: {
        canonical: "https://quantlabusa.dev/faq/process",
    },
};

const qas = [
    {
        q: "How long does it take to build custom software?",
        a: "Custom software typically takes 6 to 24 weeks end-to-end. A focused MVP ships in 6 to 10 weeks, a production SaaS platform in 12 to 16 weeks, and a multi-module enterprise system in 18 to 24+ weeks. QUANT LAB USA gives a firm timeline at the end of discovery, with milestones tied to each two-week sprint and weekly demos.",
    },
    {
        q: "What questions should I ask a custom software development company?",
        a: "Ask who writes the code (founder or subcontractor), what happens if the lead leaves, who owns the source code, what's covered after launch, how scope changes are priced, what's in the discovery deliverable, where data is hosted, what the worst project they shipped looked like, and to see three real references they'll let you call directly.",
    },
    {
        q: "What's your software development methodology?",
        a: "We use a fixed-scope, fixed-fee model per phase with two-week sprints, weekly demos, and continuous deployment to staging. Discovery produces a written SOW. Build phases ship working software every sprint. We don't run pure Agile theater — no story points, no daily standups for solo or small teams. Just shipping, demos, and direct communication.",
    },
    {
        q: "How do you handle scope changes mid-project?",
        a: "Scope changes go through a brief written change request: what's changing, impact on timeline and budget, rationale. Small tweaks in the original spirit of the work are absorbed without paperwork. Larger additions get a fixed quote you approve before any work starts. We never silently expand scope and then bill you for it.",
    },
    {
        q: "What deliverables come with each phase?",
        a: "Discovery delivers a written SOW, architecture diagram, milestone timeline, and risk register. Design delivers Figma mockups and component specs. Build delivers working software in staging every sprint. Launch delivers production deployment, monitoring setup, source-code handoff, and a README. Post-launch delivers a 30-day warranty and optional retainer.",
    },
    {
        q: "How often do we meet during development?",
        a: "We do a 30-minute weekly demo every sprint where you see real working software, plus async daily updates via Slack or your project tracker. Ad-hoc calls happen as needed. We don't run daily standups for client meetings — your time is more valuable than a status meeting. You always know what shipped, what's next, and what's blocked.",
    },
    {
        q: "What does the discovery phase include?",
        a: "Discovery at QUANT LAB USA takes one to two weeks and includes stakeholder interviews, workflow mapping, audit of existing systems, data model sketching, integration inventory, technical architecture diagram, milestone-based timeline, written risk register, and a fixed-fee SOW. Discovery is paid (typically $2,500–$5,000) and credited toward the build if you move forward.",
    },
    {
        q: "How do you ensure code quality?",
        a: "Every PR runs through automated linting (ESLint, Prettier), type-checking (TypeScript strict), and a build verification before merge. Critical paths get unit and integration tests. Security-sensitive code gets a written threat model. We do code reviews on our own PRs against a written standard. Production deploys go through staging first, never directly from local.",
    },
    {
        q: "What happens after launch?",
        a: "Every project includes a 30-day post-launch warranty covering bug fixes against the SOW at no charge. After that, you choose: take the code in-house, hire your own engineer, or retain QUANT LAB USA on a monthly retainer ($1,500–$8,000) covering support, monitoring, dependency updates, and a defined feature-work allowance. You own the code either way.",
    },
    {
        q: "How do you handle project risk?",
        a: "Discovery surfaces risks upfront in a written register — integrations, data migrations, third-party dependencies, regulatory edges, scope ambiguity. Each risk gets an owner, mitigation, and contingency. High-risk items get spiked first so the project can't drift on hidden surprises. Fixed-fee pricing shifts execution risk to us, not you.",
    },
];

const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "Software Development Process FAQs",
    url: "https://quantlabusa.dev/faq/process",
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

const howToSteps = [
    {
        name: "Discovery",
        text: "One to two weeks of stakeholder interviews, workflow mapping, system audits, and architecture design. Produces a written SOW, fixed-fee quote, and milestone-based timeline.",
        duration: "1-2 weeks",
    },
    {
        name: "Design",
        text: "Figma mockups, component specs, and interaction flows for every screen in scope. Includes a written design system reference for fonts, colors, spacing, and component variants.",
        duration: "1-2 weeks",
    },
    {
        name: "Build Sprints",
        text: "Two-week sprints with weekly demos and continuous deployment to staging. You see working software every sprint, not status reports. Founder writes the code and runs the demos.",
        duration: "4-12 weeks",
    },
    {
        name: "Quality Assurance",
        text: "Automated tests, manual QA against the SOW, accessibility checks, security review, and performance baseline. Bugs found here are fixed before launch at no charge.",
        duration: "1 week",
    },
    {
        name: "Launch",
        text: "Production deployment, DNS cutover, monitoring setup (Sentry, uptime checks), and source-code handoff with a written README. We're on standby during launch week.",
        duration: "1 week",
    },
    {
        name: "Post-Launch Support",
        text: "30-day warranty covers SOW-spec bugs at no charge. Optional monthly retainer covers dependency updates, monitoring, security patches, and a defined feature-work allowance.",
        duration: "30 days + ongoing",
    },
];

const howToStructuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "QUANT LAB USA Software Delivery Process",
    description:
        "Six-phase fixed-fee software delivery process used by QUANT LAB USA: discovery, design, build sprints, QA, launch, and post-launch support.",
    totalTime: "P6W",
    step: howToSteps.map((s, i) => ({
        "@type": "HowToStep",
        position: i + 1,
        name: s.name,
        text: s.text,
    })),
};

export default function FAQProcessPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToStructuredData) }}
            />

            <section className="pt-32 pb-10 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-quant-blue/8 rounded-full blur-[160px] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <Breadcrumbs
                        items={[
                            { label: "Home", href: "/" },
                            { label: "FAQ", href: "/faq" },
                            { label: "Process" },
                        ]}
                    />
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                        FAQ · Process
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Software Process FAQs
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                        Ten honest answers on how custom software actually gets built —
                        timelines, methodology, scope changes, deliverables per phase,
                        and what happens when the project goes sideways.
                    </p>
                </div>
            </section>

            <section className="pb-12 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Our 6-phase delivery process
                    </h2>
                    <ol className="space-y-3">
                        {howToSteps.map((s, i) => (
                            <li
                                key={s.name}
                                className="rounded-xl border border-white/8 bg-[#0d1526]/60 backdrop-blur-sm p-5 md:p-6 flex gap-4"
                            >
                                <span className="flex-shrink-0 w-9 h-9 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 font-semibold flex items-center justify-center text-sm">
                                    {i + 1}
                                </span>
                                <div className="flex-1">
                                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                                        <h3 className="text-lg md:text-xl font-semibold text-white m-0">
                                            {s.name}
                                        </h3>
                                        <span className="text-xs text-sky-400 font-mono tracking-wider">
                                            {s.duration}
                                        </span>
                                    </div>
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed m-0">
                                        {s.text}
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            <section className="pb-16 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Process questions answered
                    </h2>
                    <div className="space-y-4">
                        {qas.map((qa, idx) => (
                            <article
                                key={idx}
                                className="rounded-xl border border-white/8 bg-[#0d1526]/60 backdrop-blur-sm p-5 md:p-6"
                            >
                                <h3 className="text-lg md:text-xl font-semibold text-white leading-snug mb-3">
                                    {qa.q}
                                </h3>
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
                        Get a written SOW before any code ships
                    </h2>
                    <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                        Tell us what you're building. We'll run a paid discovery and
                        give you a fixed-fee quote with milestones, deliverables, and a
                        firm timeline.
                    </p>
                    <ConsultationCTA label="Book a Consultation" />
                </div>
            </section>
        </main>
    );
}
