import type { Metadata } from "next";
import Link from "next/link";
import {
    Search,
    LayoutGrid,
    Code2,
    TestTube2,
    Rocket,
    LifeBuoy,
    Mail,
    GitMerge,
    ShieldCheck,
    Database,
} from "lucide-react";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "How We Build | QUANT LAB Methodology — Discovery to Launch",
    description:
        "QUANT LAB USA engineering methodology: discovery, architecture, two-week sprints, CI testing, security review, Vercel deployment, runbooks, and handoff.",
    openGraph: {
        title: "How We Build | QUANT LAB Methodology — Discovery to Launch",
        description:
            "Discovery, architecture, two-week sprints, CI, security review, and deployment. The full QUANT LAB build process.",
        url: "https://quantlabusa.dev/methodology",
        type: "article",
    },
    alternates: {
        canonical: "https://quantlabusa.dev/methodology",
    },
};

const methodologyStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "HowTo",
            "@id": "https://quantlabusa.dev/methodology#howto",
            name: "The QUANT LAB Software Development Methodology",
            description:
                "How QUANT LAB USA INC takes a custom software project from discovery through launch using a documented engineering process.",
            totalTime: "P12W",
            estimatedCost: {
                "@type": "MonetaryAmount",
                currency: "USD",
                value: "25000",
            },
            tool: [
                "Next.js",
                "TypeScript",
                "PostgreSQL",
                "Stripe",
                "Vercel",
                "Resend",
                "GitHub Actions",
                "Sentry",
            ],
            step: [
                {
                    "@type": "HowToStep",
                    name: "Discovery",
                    text: "One-week structured discovery resulting in a written statement of work and a technical specification.",
                    url: "https://quantlabusa.dev/methodology#discovery",
                },
                {
                    "@type": "HowToStep",
                    name: "Architecture & Design",
                    text: "One-week architecture phase producing a data model, key user journeys, wireframes, and a confirmed tech stack.",
                    url: "https://quantlabusa.dev/methodology#architecture",
                },
                {
                    "@type": "HowToStep",
                    name: "Sprints",
                    text: "Two-week sprint cycles delivering working software at the end of every sprint, demoed live to the client.",
                    url: "https://quantlabusa.dev/methodology#sprints",
                },
                {
                    "@type": "HowToStep",
                    name: "Testing & Security Review",
                    text: "Continuous integration, integration tests, dependency scans, and an OWASP-aligned security review.",
                    url: "https://quantlabusa.dev/methodology#testing",
                },
                {
                    "@type": "HowToStep",
                    name: "Deployment",
                    text: "Production deployment on Vercel or AWS with observability, alerting, and a written runbook for operations.",
                    url: "https://quantlabusa.dev/methodology#deployment",
                },
                {
                    "@type": "HowToStep",
                    name: "Handoff or Maintenance",
                    text: "Either documented handoff to an internal team or an ongoing maintenance agreement with monthly support.",
                    url: "https://quantlabusa.dev/methodology#handoff",
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
                    name: "Methodology",
                    item: "https://quantlabusa.dev/methodology",
                },
            ],
        },
    ],
};

const phases = [
    {
        id: "discovery",
        icon: Search,
        weeks: "Week 1",
        title: "Discovery",
        deliverable: "Statement of Work + technical specification",
        body: [
            "Discovery is not a sales call dressed up. It is a structured working week where we map your current process, identify the seams where things break, and write down what the software actually has to do.",
            "We sit with stakeholders. We watch how the work happens today. We list the integrations, the data sources, the constraints. By the end of the week you have a written statement of work and a technical specification — both signed off before any code gets written.",
        ],
    },
    {
        id: "architecture",
        icon: LayoutGrid,
        weeks: "Week 2",
        title: "Architecture & Design",
        deliverable: "Data model + wireframes + confirmed tech stack",
        body: [
            "Architecture is where bad projects quietly fail. We invest a full week up front to design the data model, sketch the key user journeys as wireframes, and confirm the tech stack against the constraints we found in discovery.",
            "Our defaults are Next.js for the front end, PostgreSQL for the database, Prisma as the ORM, Stripe for payments, Resend for transactional email, and Vercel for deployment. Defaults get overridden when the project genuinely needs it, never to chase a trend.",
        ],
    },
    {
        id: "sprints",
        icon: Code2,
        weeks: "Weeks 3 to N",
        title: "Sprints",
        deliverable: "Working software at the end of every two-week cycle",
        body: [
            "We work in two-week sprint cycles. Each sprint starts with a planning call, finishes with a live demo of working software in a staging environment, and is followed by written feedback you can leave in your own time.",
            "Sprints are scoped narrow on purpose. We would rather ship a smaller piece that actually works than a big batch that limps. The number of sprints is set in the SOW and revised explicitly if scope changes. There are no surprise change orders.",
        ],
    },
    {
        id: "testing",
        icon: TestTube2,
        weeks: "Continuous",
        title: "Testing & Security Review",
        deliverable: "CI passing, integration tests green, security baseline report",
        body: [
            "Every commit runs through GitHub Actions CI: type checking, linting, unit tests, and integration tests against a real PostgreSQL test database. Builds that fail CI do not merge. There is no negotiation on that.",
            "Before launch, the codebase gets an OWASP-aligned security review. Dependency scans run through Snyk and GitGuardian, secrets are confirmed to be in environment variables only, and auth flows are walked through manually against an OWASP ASVS Level 2 checklist.",
        ],
    },
    {
        id: "deployment",
        icon: Rocket,
        weeks: "Launch sprint",
        title: "Deployment & Observability",
        deliverable: "Production environment + runbook + monitoring",
        body: [
            "Deployment is Vercel or AWS depending on the workload. We set up production, staging, and preview environments with environment variables managed in the platform, never committed to the repo.",
            "Every QUANT LAB build ships with Sentry error tracking, basic uptime monitoring, and a written runbook covering deploy procedure, rollback procedure, common failure modes, and incident response contacts. The runbook is yours, in your repo, in markdown.",
        ],
    },
    {
        id: "handoff",
        icon: LifeBuoy,
        weeks: "Post-launch",
        title: "Handoff or Maintenance",
        deliverable: "Documented handoff package or signed maintenance agreement",
        body: [
            "After launch you choose: full handoff with documentation and a walk-through for your internal team, or an ongoing maintenance agreement where we handle deploys, dependency updates, security patches, and minor feature work on a monthly retainer.",
            "Either way, you own the code. The repository is in your GitHub organization from the first commit. There is no hostage situation here, no proprietary runtime, no licensing trap.",
        ],
    },
];

const standards = [
    {
        icon: GitMerge,
        title: "Code review",
        body: "Every pull request gets reviewed by the founder before merge. No exceptions, even on tiny fixes. Reviews focus on correctness, security, and whether the code can be understood by a stranger six months later.",
    },
    {
        icon: ShieldCheck,
        title: "Security baseline",
        body: "OWASP Top 10 awareness, ASVS Level 2 alignment, parameterized queries, secrets out of source control, dependency scanning on every CI run, and a documented incident response procedure before launch.",
    },
    {
        icon: Database,
        title: "Tech stack defaults",
        body: "Next.js App Router, TypeScript strict, PostgreSQL with Prisma, Stripe for payments, Resend for transactional email, Vercel for deployment, Sentry for errors. Boring is a feature.",
    },
];

export default function MethodologyPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(methodologyStructuredData),
                }}
            />

            <section className="pt-32 pb-14 relative overflow-hidden">
                <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-quant-blue/8 rounded-full blur-[160px] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-sky-400">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-300">Methodology</span>
                    </nav>
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                        How We Build
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        The QUANT LAB Methodology
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                        Discovery to launch in a documented, repeatable process. Six
                        phases, written deliverables at every step, and no surprises in
                        the invoice.
                    </p>
                </div>
            </section>

            <section className="py-12 relative">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="rounded-2xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm p-7">
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-4">
                            Why a written methodology
                        </p>
                        <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4">
                            <p>
                                Most agency engagements fail because nobody can answer the
                                simple question of what is supposed to be delivered, when,
                                and what happens if it is not. Our methodology answers
                                those questions before any code is written.
                            </p>
                            <p>
                                What follows is the actual process we run on{" "}
                                <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">
                                    custom business software
                                </Link>
                                ,{" "}
                                <Link href="/services/custom-crm-development" className="text-sky-400 hover:underline">
                                    custom CRM development
                                </Link>
                                ,{" "}
                                <Link href="/services/stripe-integration" className="text-sky-400 hover:underline">
                                    Stripe integrations
                                </Link>
                                , and our larger{" "}
                                <Link href="/services/algorithmic-trading-systems" className="text-sky-400 hover:underline">
                                    trading and{" "}
                                </Link>
                                <Link href="/services/payments-invoicing-licensing" className="text-sky-400 hover:underline">
                                    payments builds
                                </Link>
                                . Some phases compress on smaller engagements, but nothing
                                gets skipped.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {phases.map((phase, idx) => {
                const Icon = phase.icon;
                const stripeBg = idx % 2 === 0 ? "" : "bg-black/30 border-t border-white/5";
                return (
                    <section
                        key={phase.id}
                        id={phase.id}
                        className={`py-16 relative ${stripeBg}`}
                    >
                        <div className="container mx-auto px-6 max-w-3xl">
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                                    <Icon className="w-6 h-6 text-sky-400" />
                                </div>
                                <div>
                                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400">
                                        {phase.weeks}
                                    </p>
                                    <h2 className="text-2xl md:text-3xl font-bold text-white">
                                        {phase.title}
                                    </h2>
                                </div>
                            </div>
                            <div className="rounded-xl border border-white/8 bg-[#0d1526]/40 px-5 py-4 mb-6">
                                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-1">
                                    Deliverable
                                </p>
                                <p className="text-gray-200 text-sm">{phase.deliverable}</p>
                            </div>
                            <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5">
                                {phase.body.map((p, i) => (
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
                        Engineering Standards
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 leading-tight">
                        Standards that apply on every engagement.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {standards.map(({ icon: Icon, title, body }) => (
                            <div
                                key={title}
                                className="rounded-2xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm p-7"
                            >
                                <Icon className="w-6 h-6 text-sky-400 mb-4" />
                                <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 relative">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Version Control & CI/CD
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-7 leading-tight">
                        Boring infrastructure done right.
                    </h2>
                    <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5">
                        <p>
                            Source lives in GitHub, in your organization, with branch
                            protection enabled on main. Pull requests are the only way code
                            enters main, and every pull request requires CI green plus
                            founder review.
                        </p>
                        <p>
                            GitHub Actions runs the CI pipeline. Type checking, lint, unit
                            tests, integration tests against an ephemeral PostgreSQL
                            instance, and a build that has to succeed before deploy.
                            Vercel handles preview deploys per pull request — every PR
                            gets a live URL the client can click before merge.
                        </p>
                        <p>
                            Production deploys happen automatically when main passes CI.
                            Rollback is a single click in Vercel back to any prior
                            deployment, or a revert PR if the change spans schema
                            migrations. Schema migrations always run in a separate
                            deploy from the code that depends on them, in two PRs, not
                            one. We have learned that the hard way and you do not need to.
                        </p>
                        <p>
                            Sentry runs on every environment. Errors trigger email
                            alerts. Critical paths have synthetic uptime checks. The
                            runbook in your repo tells the on-call engineer exactly what
                            to do when an alert fires.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Security Baseline
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-7 leading-tight">
                        Security is not a separate phase.
                    </h2>
                    <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5">
                        <p>
                            We run penetration tests for other companies. That experience
                            shows up in how we build. Auth is not bolted on at the end.
                            Data handling is thought through during architecture.
                            Sensitive routes are protected from the first commit, not
                            patched in after launch.
                        </p>
                        <p>
                            The minimum security baseline for every QUANT LAB build:
                            parameterized queries against the database, secrets in
                            environment variables only, TLS 1.3 on all environments,
                            HTTP security headers configured, dependencies scanned every
                            CI run, and a CSRF + authorization audit before launch.
                            Stripe builds get extra PCI-DSS-aware care to keep card data
                            off our infrastructure entirely.
                        </p>
                        <p>
                            For a deeper look at how we protect client data and source
                            code, see our{" "}
                            <Link href="/security" className="text-sky-400 hover:underline">
                                security practices page
                            </Link>
                            . For the credentialed standards we align to, see{" "}
                            <Link href="/certifications-credentials" className="text-sky-400 hover:underline">
                                certifications & credentials
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 relative">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Where It Connects
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-7 leading-tight">
                        How the methodology fits the rest of the work.
                    </h2>
                    <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5">
                        <p>
                            The methodology is half of how we deliver. The other half is
                            the customer-facing{" "}
                            <Link href="/process" className="text-sky-400 hover:underline">
                                process
                            </Link>
                            : how leads become projects, how proposals are scoped, and
                            what each stage of a client relationship actually looks like.
                        </p>
                        <p>
                            If you are evaluating us against other firms, two pieces of
                            reading help: our{" "}
                            <Link href="/blog/how-to-choose-a-software-development-company-checklist" className="text-sky-400 hover:underline">
                                checklist for choosing a software shop
                            </Link>
                            {" "}and the deep-dive on{" "}
                            <Link href="/blog/custom-crm-development-guide" className="text-sky-400 hover:underline">
                                custom CRM development
                            </Link>
                            . Both reflect the same methodology, applied.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 relative border-t border-white/5 bg-black/40">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to scope your project?
                    </h2>
                    <p className="text-gray-400 text-lg mb-3 leading-relaxed">
                        The first call is a real working call. Bring your problem, we will
                        tell you whether the methodology fits.
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
                        <ConsultationCTA label="Book a Consultation" source="methodology-page" />
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
