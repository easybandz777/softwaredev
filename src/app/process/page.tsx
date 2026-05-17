import type { Metadata } from "next";
import Link from "next/link";
import {
    PhoneCall,
    Search,
    FileText,
    Handshake,
    Code2,
    Rocket,
    LifeBuoy,
    Mail,
    DollarSign,
    Calendar,
} from "lucide-react";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "Our 5-Step Engagement Process (2026) | QUANT LAB USA",
    description:
        "How QUANT LAB USA runs a project: discovery, fixed-scope proposal, weekly staging URLs, code review, and post-launch support. Founder-led, predictable. 2026.",
    openGraph: {
        title: "Our Process | QUANT LAB USA — From Lead to Launch",
        description:
            "From first email to live launch and beyond. The customer journey at QUANT LAB USA, with concrete artifacts at every stage.",
        url: "https://quantlabusa.dev/process",
        type: "article",
    },
    alternates: {
        canonical: "https://quantlabusa.dev/process",
    },
};

const processStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "HowTo",
            "@id": "https://quantlabusa.dev/process#howto",
            name: "Working with QUANT LAB USA — The Full Engagement Process",
            description:
                "Step-by-step process for engaging QUANT LAB USA on a custom software or penetration testing project, from intro call through launch and support.",
            estimatedCost: {
                "@type": "MonetaryAmount",
                currency: "USD",
                value: "25000",
            },
            step: [
                {
                    "@type": "HowToStep",
                    name: "Intro Call",
                    text: "A 30 to 45 minute call where you describe the problem and Bill tells you honestly whether QUANT LAB is the right fit.",
                    url: "https://quantlabusa.dev/process#intro",
                },
                {
                    "@type": "HowToStep",
                    name: "Discovery",
                    text: "Paid one-week discovery resulting in a written statement of work and technical specification.",
                    url: "https://quantlabusa.dev/process#discovery",
                },
                {
                    "@type": "HowToStep",
                    name: "Proposal",
                    text: "Fixed-fee proposal with a sprint plan, deliverables, and payment milestones — line-itemed so you know what you are paying for.",
                    url: "https://quantlabusa.dev/process#proposal",
                },
                {
                    "@type": "HowToStep",
                    name: "Kickoff",
                    text: "Signed contract, deposit, repository access, environment provisioning, and a scheduled cadence for stand-ups and demos.",
                    url: "https://quantlabusa.dev/process#kickoff",
                },
                {
                    "@type": "HowToStep",
                    name: "Sprints",
                    text: "Two-week sprints with live demos of working software at the end of each cycle.",
                    url: "https://quantlabusa.dev/process#sprints",
                },
                {
                    "@type": "HowToStep",
                    name: "Launch",
                    text: "Production deployment, smoke testing, documentation, and a runbook handed over.",
                    url: "https://quantlabusa.dev/process#launch",
                },
                {
                    "@type": "HowToStep",
                    name: "Support",
                    text: "Optional monthly maintenance covering deploys, patches, dependency updates, and minor feature work.",
                    url: "https://quantlabusa.dev/process#support",
                },
            ],
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://quantlabusa.dev",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Process",
                    item: "https://quantlabusa.dev/process",
                },
            ],
        },
    ],
};

const stages = [
    {
        id: "intro",
        icon: PhoneCall,
        duration: "30 to 45 minutes",
        title: "Intro Call",
        artifact: "Honest verbal fit assessment",
        body: [
            "The first call is real. You describe what you are trying to build or test. Bill asks the questions that determine whether we are the right shop and gives you a straight answer in the same call. If we are not the fit, we tell you immediately and try to point you somewhere better.",
            "There is no presentation deck, no junior salesperson, and no follow-up nurture sequence. You are talking to the engineer who would do the work, from the first minute.",
        ],
    },
    {
        id: "discovery",
        icon: Search,
        duration: "1 week",
        title: "Discovery",
        artifact: "Written SOW + technical specification",
        body: [
            "Discovery is a paid, time-boxed week. We sit with stakeholders, map current workflows, identify integration points, and write down what the software actually has to do. By the end of the week you own a written statement of work and a technical specification.",
            "Discovery output is yours regardless of whether you proceed. If you take it to a different shop, that is fine. We have lost engagements that way and we will lose more. We would rather have you walk away with a useful document than push you into a build that is not right.",
        ],
    },
    {
        id: "proposal",
        icon: FileText,
        duration: "Within 1 week of discovery",
        title: "Proposal",
        artifact: "Fixed-fee proposal + sprint plan + payment milestones",
        body: [
            "Proposals at QUANT LAB are fixed-fee with line-item deliverables. You see the sprint count, the deliverable for each sprint, the payment milestone for each, and the total. No hourly mystery meat.",
            "Where genuine unknowns exist, we time-box them as research spikes with explicit caps. You always know the maximum cost of an unknown before you authorize it. The proposal includes an optional maintenance retainer for after launch — you decide whether to bundle it at signing or later.",
        ],
    },
    {
        id: "kickoff",
        icon: Handshake,
        duration: "1 to 3 days",
        title: "Kickoff",
        artifact: "Signed contract, deposit, repos, environments, cadence calendar",
        body: [
            "On signing you pay a deposit, we sign a mutual NDA if you want one, and we provision: GitHub repository in your organization, staging and production environments on Vercel, a Postgres database (Neon by default), Sentry project, and the email or Slack channel where day-to-day communication will happen.",
            "We agree on cadence: a weekly stand-up, a sprint review demo every two weeks, and a written status update every Friday. Calendar holds get set for the full engagement at kickoff so nothing slips because of scheduling.",
        ],
    },
    {
        id: "sprints",
        icon: Code2,
        duration: "Two-week cycles",
        title: "Sprints",
        artifact: "Working software + sprint review + written changelog",
        body: [
            "Sprints are two weeks. Each starts with a planning call, ends with a live demo of working software in staging, and is followed by a written changelog and a feedback form you can fill out in your own time. The product is functional at the end of every single sprint, not just at the end of the engagement.",
            "Change requests are normal and they are tracked explicitly. If a request adds scope, we re-estimate and surface the cost impact before doing the work. We do not absorb scope quietly and then surface it later as a budget overage.",
        ],
    },
    {
        id: "launch",
        icon: Rocket,
        duration: "Final sprint",
        title: "Launch",
        artifact: "Production deploy + smoke test pass + runbook + handoff session",
        body: [
            "Launch sprint is dedicated to production readiness: final security review, load testing where appropriate, smoke tests against production, monitoring confirmed live, alerts confirmed firing into the right inbox. The runbook gets written, reviewed by your team, and committed to your repo.",
            "On launch day, we sit on a video call while traffic hits production. Any incidents in the first 48 hours are covered by the engagement — they are part of launching, not a separate billable. After day three, production support transitions to maintenance.",
        ],
    },
    {
        id: "support",
        icon: LifeBuoy,
        duration: "Optional, monthly",
        title: "Support & Maintenance",
        artifact: "Monthly maintenance report + dependency update PRs + on-call coverage",
        body: [
            "Most clients sign a maintenance retainer at launch. It covers: dependency updates and security patches, weekly automated dependency PRs reviewed and merged on a schedule, deploy support, monthly health report, and a fixed allotment of feature work hours. Anything beyond the allotment gets quoted up front.",
            "Without a retainer, the code is fully yours and you can run it yourself or hand it to another team. We do not lock clients into our maintenance contract by withholding documentation or repository access. Independence is the design goal.",
        ],
    },
];

const pricing = [
    {
        title: "Discovery week",
        range: "$3,500 – $7,500",
        notes: "Paid, fixed fee. Output is yours regardless of whether you proceed.",
    },
    {
        title: "Custom software build",
        range: "$25,000 – $150,000+",
        notes: "Fixed-fee per project, milestone-billed. Scoped against the SOW from discovery.",
    },
    {
        title: "Custom CRM build",
        range: "$35,000 – $120,000",
        notes: "See the full breakdown in our CRM development guide for what drives the range.",
    },
    {
        title: "Web app penetration test",
        range: "$8,000 – $25,000",
        notes: "Scoped against application size and attack surface. OWASP ASVS Level 2 aligned.",
    },
    {
        title: "Network or AD pentest",
        range: "$10,000 – $35,000",
        notes: "Scoped by host count and complexity. Authenticated and unauthenticated tracks.",
    },
    {
        title: "Maintenance retainer",
        range: "$2,500 – $8,000 / month",
        notes: "Covers patches, dependency updates, deploy support, and a feature work allotment.",
    },
];

export default function ProcessPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(processStructuredData),
                }}
            />

            <section className="pt-32 pb-14 relative overflow-hidden">
                <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-quant-blue/8 rounded-full blur-[160px] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-sky-400">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-300">Process</span>
                    </nav>
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                        Our Process
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        From lead to launch, and beyond.
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                        What working with QUANT LAB USA actually looks like. Seven
                        stages, concrete artifacts at every step, and pricing transparency
                        we do not hide behind a Contact Sales button.
                    </p>
                </div>
            </section>

            <section className="py-12 relative">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="rounded-2xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm p-7">
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-4">
                            What this page is for
                        </p>
                        <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4">
                            <p>
                                Most agencies are vague on process because vagueness
                                preserves their negotiating leverage. We do the
                                opposite. The more you know up front about what an
                                engagement looks like, the better the engagement runs.
                            </p>
                            <p>
                                This page is the customer-facing version of our delivery
                                process. For the engineering internals — sprint
                                structure, CI, security review — see our{" "}
                                <Link href="/methodology" className="text-sky-400 hover:underline">
                                    methodology page
                                </Link>
                                . For who is doing the work, see{" "}
                                <Link href="/about/team" className="text-sky-400 hover:underline">
                                    team & leadership
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {stages.map((stage, idx) => {
                const Icon = stage.icon;
                const stripeBg = idx % 2 === 0 ? "" : "bg-black/30 border-t border-white/5";
                return (
                    <section
                        key={stage.id}
                        id={stage.id}
                        className={`py-16 relative ${stripeBg}`}
                    >
                        <div className="container mx-auto px-6 max-w-3xl">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-sky-400" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 flex items-center gap-2">
                                        <Calendar className="w-3.5 h-3.5" />
                                        {stage.duration}
                                    </p>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                                        Stage {idx + 1}: {stage.title}
                                    </h2>
                                </div>
                            </div>
                            <div className="rounded-xl border border-white/8 bg-[#0d1526]/40 px-5 py-4 mb-6">
                                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-1">
                                    Artifact you receive
                                </p>
                                <p className="text-gray-200 text-sm">{stage.artifact}</p>
                            </div>
                            <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5">
                                {stage.body.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>
                    </section>
                );
            })}

            <section className="py-20 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-4xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Pricing Transparency
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-7 leading-tight">
                        Real ranges, before the call.
                    </h2>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-10 max-w-3xl">
                        Hiding pricing wastes everyone's time. Here is what engagements
                        actually cost. Final pricing is fixed-fee and depends on the
                        outcome of discovery, but the ranges below are honest from the
                        very first email.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {pricing.map((p) => (
                            <div
                                key={p.title}
                                className="rounded-2xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm p-6"
                            >
                                <DollarSign className="w-5 h-5 text-sky-400 mb-3" />
                                <h3 className="text-base font-bold text-white mb-1">
                                    {p.title}
                                </h3>
                                <p className="text-2xl font-bold text-sky-300 mb-3">
                                    {p.range}
                                </p>
                                <p className="text-gray-400 text-sm leading-relaxed">{p.notes}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-400 text-sm mt-8 leading-relaxed">
                        For an in-depth breakdown of pentest pricing, see{" "}
                        <Link href="/blog/penetration-test-cost-2026" className="text-sky-400 hover:underline">
                            penetration test cost 2026
                        </Link>
                        . For CRM cost structures, see{" "}
                        <Link href="/blog/custom-crm-development-guide" className="text-sky-400 hover:underline">
                            the custom CRM development guide
                        </Link>
                        .
                    </p>
                </div>
            </section>

            <section className="py-20 relative">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        What We Will Not Do
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-7 leading-tight">
                        The honest part.
                    </h2>
                    <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5">
                        <p>
                            We will not take engagements where we do not believe the
                            scope can be delivered. We will not bid against a fixed
                            budget by stripping the scope until the budget fits, because
                            that is how clients end up with software that works for the
                            demo and breaks in week three of production.
                        </p>
                        <p>
                            We will not undercut on price by skipping security review,
                            CI, or written documentation. Those are baked into every
                            engagement and are part of how the work gets done responsibly.
                        </p>
                        <p>
                            We will not hide the work of contractors. If a contract
                            engineer is on your project, you will be told who, what they
                            are working on, and that every line they ship passes through
                            founder review before merge.
                        </p>
                        <p>
                            We will not take engagements that violate our{" "}
                            <Link href="/terms" className="text-sky-400 hover:underline">
                                terms
                            </Link>
                            {" "}or anyone's privacy expectations. Read more about how we
                            handle data on the{" "}
                            <Link href="/security" className="text-sky-400 hover:underline">
                                security practices page
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Where the Process Plugs In
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-7 leading-tight">
                        Same process across services.
                    </h2>
                    <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5">
                        <p>
                            The seven-stage process above is the same whether you are
                            engaging us for{" "}
                            <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">
                                custom business software
                            </Link>
                            ,{" "}
                            <Link href="/services/custom-crm-development" className="text-sky-400 hover:underline">
                                a custom CRM
                            </Link>
                            ,{" "}
                            <Link href="/services/mobile-app-development" className="text-sky-400 hover:underline">
                                a mobile app
                            </Link>
                            ,{" "}
                            <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">
                                penetration testing
                            </Link>
                            , or a{" "}
                            <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">
                                web app pentest
                            </Link>
                            .
                        </p>
                        <p>
                            For security engagements, the sprint stage is replaced with
                            a test phase, but everything around it stays the same:
                            paid discovery, fixed-fee proposal, kickoff, time-boxed
                            execution, written deliverable, and optional retest
                            retainer.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 relative border-t border-white/5 bg-black/40">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Start at Stage 1.
                    </h2>
                    <p className="text-gray-400 text-lg mb-3 leading-relaxed">
                        Book a free 30 to 45 minute intro call. You describe the
                        problem, we tell you whether we can help.
                    </p>
                    <p className="text-gray-400 text-sm mb-8 flex items-center justify-center gap-2 flex-wrap">
                        <Mail className="w-4 h-4" />
                        Call{" "}
                        <a
                            href="tel:+17706521282"
                            className="inline-flex items-center min-h-[44px] text-sky-400 hover:text-sky-300 transition-colors"
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
                        <ConsultationCTA label="Book a Consultation" source="process-page" />
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                        >
                            Contact us
                        </Link>
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
