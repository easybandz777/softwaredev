import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { BookOpen, FileText, ShieldCheck, Building2, Rocket, CreditCard, Target, ArrowRight, Download, Clock, Users, Code2 } from "lucide-react";

export const metadata: Metadata = {
    title: "Free Resources: Playbooks, Checklists & Templates | QUANT LAB USA",
    description:
        "Free playbooks, checklists, RFP templates, and worksheets for custom software, CRM rollout, Stripe, pen testing, and MITRE ATT&CK. By QUANT LAB USA.",
    alternates: { canonical: "https://quantlabusa.dev/resources" },
    openGraph: {
        title: "Resource Library — Playbooks, Checklists & Worksheets | QUANT LAB USA",
        description:
            "Free downloadable playbooks, OWASP-aligned checklists, and worksheets for founders, CTOs, and ops leaders building custom software or hardening security.",
        url: "https://quantlabusa.dev/resources",
        type: "website",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Resource Library — Playbooks, Checklists & Worksheets | QUANT LAB USA",
        description:
            "Free downloadable playbooks, OWASP-aligned checklists, and worksheets for founders, CTOs, and ops leaders.",
    },
};

const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "QUANT LAB Resource Library",
    description:
        "Free downloadable playbooks, checklists, and worksheets for founders, CTOs, and operations leaders evaluating custom software, security, payments, and CRM rollouts.",
    url: "https://quantlabusa.dev/resources",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    publisher: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    mainEntity: {
        "@type": "ItemList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                url: "https://quantlabusa.dev/resources/build-vs-buy-playbook",
                name: "The Custom Software Build-vs-Buy Decision Playbook",
            },
            {
                "@type": "ListItem",
                position: 2,
                url: "https://quantlabusa.dev/resources/web-app-pentest-checklist",
                name: "The Web App Pentest Checklist (OWASP-aligned)",
            },
            {
                "@type": "ListItem",
                position: 3,
                url: "https://quantlabusa.dev/resources/crm-rollout-playbook",
                name: "The 6-Week Custom CRM Rollout Playbook",
            },
            {
                "@type": "ListItem",
                position: 4,
                url: "https://quantlabusa.dev/resources/mvp-to-prod-playbook",
                name: "MVP to Production: The Founder's Tech Playbook",
            },
            {
                "@type": "ListItem",
                position: 5,
                url: "https://quantlabusa.dev/resources/stripe-integration-checklist",
                name: "The Stripe Integration Checklist",
            },
            {
                "@type": "ListItem",
                position: 6,
                url: "https://quantlabusa.dev/resources/mitre-attack-worksheet",
                name: "MITRE ATT&CK Maturity Worksheet",
            },
        ],
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://quantlabusa.dev/resources" },
    ],
};

const resources = [
    {
        slug: "build-vs-buy-playbook",
        title: "The Custom Software Build-vs-Buy Decision Playbook",
        blurb:
            "A 25-page playbook with 7 decision frameworks, a 5-year TCO worksheet, and a CFO memo template — for ops leaders losing the build-vs-buy argument.",
        icon: Building2,
        accent: "from-sky-500 to-cyan-400",
        format: "25-page PDF playbook",
        audience: "COOs, VPs of Operations, RevOps",
    },
    {
        slug: "web-app-pentest-checklist",
        title: "The Web App Pentest Checklist (OWASP-aligned)",
        blurb:
            "An 80-item OWASP-aligned checklist for CTOs and security leads scoping a web app pentest for SOC 2, PCI, or a customer security questionnaire.",
        icon: ShieldCheck,
        accent: "from-rose-500 to-orange-400",
        format: "80-item PDF checklist",
        audience: "CTOs, Security Leads, vCISOs",
    },
    {
        slug: "crm-rollout-playbook",
        title: "The 6-Week Custom CRM Rollout Playbook",
        blurb:
            "A 30-page playbook with week-by-week tasks, data-migration templates, and a stakeholder communications kit for ops leaders rolling out a new CRM.",
        icon: Users,
        accent: "from-emerald-500 to-cyan-400",
        format: "30-page PDF + templates",
        audience: "RevOps, VPs of Sales, Operations Leaders",
    },
    {
        slug: "mvp-to-prod-playbook",
        title: "MVP to Production: The Founder's Tech Playbook",
        blurb:
            "A 35-page playbook on hosting, auth, payments, observability, and analytics decisions for technical founders shipping past product-market fit.",
        icon: Rocket,
        accent: "from-violet-500 to-fuchsia-400",
        format: "35-page PDF playbook",
        audience: "Founders, CTOs, Technical Co-founders",
    },
    {
        slug: "stripe-integration-checklist",
        title: "The Stripe Integration Checklist",
        blurb:
            "A pre-launch PDF checklist covering dunning, SCA, webhook resilience, idempotency, and reconciliation — for SaaS teams shipping custom payment flows.",
        icon: CreditCard,
        accent: "from-indigo-500 to-blue-400",
        format: "Pre-launch PDF checklist",
        audience: "SaaS Founders, Heads of Engineering",
    },
    {
        slug: "mitre-attack-worksheet",
        title: "MITRE ATT&CK Maturity Worksheet",
        blurb:
            "A self-assessment worksheet aligning your organization's defenses to the 14 ATT&CK Enterprise tactics — with scoring, quick wins, and a board-ready summary.",
        icon: Target,
        accent: "from-amber-500 to-orange-400",
        format: "Worksheet (PDF)",
        audience: "Security Leads, IT Managers, vCISOs",
    },
    {
        slug: "saas-launch-checklist",
        title: "The SaaS Launch Checklist",
        blurb:
            "A 60+ item pre-launch checklist covering technical readiness, security, billing, and legal — for founders and CTOs shipping a SaaS product to production.",
        icon: Rocket,
        accent: "from-teal-500 to-emerald-400",
        format: "60+ item PDF checklist",
        audience: "Founders, CTOs, Engineering Leads",
    },
    {
        slug: "vendor-security-questionnaire-template",
        title: "The Vendor Security Questionnaire Template",
        blurb:
            "A ready-to-send questionnaire covering governance, data protection, app security, infrastructure, and incident response — for teams vetting a software vendor.",
        icon: ShieldCheck,
        accent: "from-rose-500 to-pink-400",
        format: "PDF template, 30+ questions",
        audience: "Security Leads, CTOs, Procurement",
    },
    {
        slug: "software-project-estimate-worksheet",
        title: "The Software Project Estimate Worksheet",
        blurb:
            "A scoping worksheet with the inputs to gather, a feature-sizing method, real cost ranges, and the risk factors that move the number — for founders and PMs pricing a build.",
        icon: FileText,
        accent: "from-sky-500 to-indigo-400",
        format: "Worksheet (PDF)",
        audience: "Founders, Product Managers, Ops Leaders",
    },
    {
        slug: "incident-response-plan-template",
        title: "The Incident Response Plan Template",
        blurb:
            "A starter plan with roles, severity levels, a six-step response process, and a communications plan — for CTOs and security leads who need one before they need it.",
        icon: ShieldCheck,
        accent: "from-red-500 to-orange-400",
        format: "PDF starter template",
        audience: "CTOs, Security Leads, Engineering Managers",
    },
    {
        slug: "api-design-guidelines-checklist",
        title: "The API Design Guidelines Checklist",
        blurb:
            "A REST checklist covering resource naming, versioning, authentication, consistent errors, and pagination — for engineers and tech leads shipping an API consumers will not curse.",
        icon: Code2,
        accent: "from-violet-500 to-blue-400",
        format: "REST design PDF checklist",
        audience: "Engineers, Tech Leads, API Designers",
    },
    {
        slug: "saas-security-checklist",
        title: "The SaaS Security Checklist",
        blurb:
            "A practical security checklist for SaaS teams — auth, tenant isolation, secrets, logging, dependencies, and backups — mapped to what SOC 2 and customer questionnaires expect.",
        icon: ShieldCheck,
        accent: "from-emerald-500 to-cyan-400",
        format: "PDF security checklist",
        audience: "Founders, CTOs, Security Leads",
    },
    {
        slug: "database-backup-and-recovery-plan-template",
        title: "The Database Backup & Recovery Plan Template",
        blurb:
            "A fill-in template for documenting backup cadence, retention, restore steps, and RPO/RTO targets — so a database failure becomes a runbook instead of a panic.",
        icon: FileText,
        accent: "from-sky-500 to-blue-400",
        format: "Editable PDF template",
        audience: "CTOs, DevOps, Engineering Leads",
    },
    {
        slug: "api-integration-requirements-template",
        title: "The API Integration Requirements Template",
        blurb:
            "A requirements template for scoping a third-party API integration — endpoints, auth, rate limits, error handling, and webhooks — before a line of code is written.",
        icon: Code2,
        accent: "from-violet-500 to-indigo-400",
        format: "PDF requirements template",
        audience: "Product Managers, Engineers, Tech Leads",
    },
    {
        slug: "penetration-test-rfp-template",
        title: "The Penetration Test RFP Template",
        blurb:
            "A vendor-neutral RFP template for buying a pentest — scope, methodology, reporting, retest, and the questions that separate a real firm from a scan reseller.",
        icon: ShieldCheck,
        accent: "from-rose-500 to-orange-400",
        format: "PDF RFP template",
        audience: "CTOs, Security Leads, Procurement",
    },
    {
        slug: "cloud-cost-optimization-checklist",
        title: "The Cloud Cost Optimization Checklist",
        blurb:
            "A checklist of the highest-leverage cloud savings — right-sizing, autoscaling, storage tiers, egress, and idle resources — without sacrificing reliability.",
        icon: Target,
        accent: "from-amber-500 to-orange-400",
        format: "PDF checklist",
        audience: "CTOs, DevOps, Finance & Ops",
    },
    {
        slug: "code-review-checklist",
        title: "The Code Review Checklist",
        blurb:
            "A reviewer's checklist covering correctness, security, readability, tests, performance, and dependencies — so reviews catch what matters instead of bikeshedding style.",
        icon: Code2,
        accent: "from-teal-500 to-emerald-400",
        format: "PDF review checklist",
        audience: "Engineers, Tech Leads, EMs",
    },
    {
        slug: "custom-crm-rfp-template-2026",
        title: "The Custom CRM RFP Template (2026)",
        blurb:
            "An RFP template for commissioning a custom CRM — process mapping, must-have features, integrations, data migration, and the evaluation criteria that keep vendors honest.",
        icon: Users,
        accent: "from-emerald-500 to-teal-400",
        format: "PDF RFP template",
        audience: "RevOps, VPs of Sales, Operations Leaders",
    },
    {
        slug: "internal-tools-build-vs-buy-worksheet",
        title: "Internal Tools: Build-vs-Buy Worksheet",
        blurb:
            "A worksheet for deciding whether to build, buy, or assemble an internal tool — scoring fit, switching cost, and total cost across a three-year horizon.",
        icon: Building2,
        accent: "from-sky-500 to-cyan-400",
        format: "PDF worksheet",
        audience: "Ops Leaders, CTOs, Founders",
    },
    {
        slug: "llc-vs-c-corp-decision-checklist",
        title: "LLC vs C-Corp Decision Checklist",
        blurb:
            "A founder's checklist on entity choice — taxes, fundraising, equity, and admin — so you walk into a conversation with your CPA or attorney already informed. Not legal advice.",
        icon: FileText,
        accent: "from-slate-500 to-gray-400",
        format: "PDF checklist",
        audience: "Founders, Solo Founders",
    },
    {
        slug: "mitre-attack-maturity-self-assessment-v2",
        title: "MITRE ATT&CK Maturity Self-Assessment (v2)",
        blurb:
            "An updated self-assessment to rate your detection and response coverage against ATT&CK tactics, with a scoring rubric and a prioritized list of the gaps to close first.",
        icon: Target,
        accent: "from-orange-500 to-red-400",
        format: "PDF self-assessment",
        audience: "Security Leads, SOC Managers, vCISOs",
    },
    {
        slug: "stripe-connect-marketplace-onboarding-template",
        title: "Stripe Connect Marketplace Onboarding Template",
        blurb:
            "A template for designing marketplace seller onboarding on Stripe Connect — account types, KYC, payout schedules, and the edge cases that stall go-live.",
        icon: CreditCard,
        accent: "from-indigo-500 to-purple-400",
        format: "PDF + flow template",
        audience: "Marketplace Founders, Payments Engineers",
    },
    {
        slug: "technical-due-diligence-checklist",
        title: "The Technical Due Diligence Checklist",
        blurb:
            "A checklist for assessing a target's technology before an acquisition or investment — architecture, security, code quality, team, and the risks that move valuation.",
        icon: ShieldCheck,
        accent: "from-blue-500 to-cyan-400",
        format: "PDF DD checklist",
        audience: "Investors, Acquirers, Technical Advisors",
    },
];

export default function ResourcesPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <div className="container mx-auto px-6 max-w-6xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Resources</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Free guides, checklists, and playbooks.
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        The same internal playbooks, scoping checklists, and decision frameworks we use on{" "}
                        <Link href="/services" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                            QUANT LAB engagements
                        </Link>{" "}
                        — packaged for founders, CTOs, and operations leaders making the next call on custom
                        software, security, payments, or CRM. Every resource is written to be useful even
                        before you talk to us. If they help, the next step is a 20-minute scoping conversation.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2"><Download className="w-4 h-4 text-sky-400" /><span>One-click PDF download</span></div>
                        <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>15-90 minute reads</span></div>
                        <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-amber-400" /><span>No paywall, just an email</span></div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What free resources does QUANT LAB USA publish?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>QUANT LAB USA publishes twenty-three free downloadable resources: the Build-vs-Buy Decision Playbook (25 pages), the OWASP-aligned Web App Pentest Checklist (80 items), the 6-Week Custom CRM Rollout Playbook (30 pages plus templates), MVP to Production Tech Playbook (35 pages), the Stripe Integration Checklist, the MITRE ATT&amp;CK Maturity Worksheet, the SaaS Launch Checklist, the Vendor Security Questionnaire Template, the Software Project Estimate Worksheet, the Incident Response Plan Template, the API Design Guidelines Checklist, the SaaS Security Checklist, the Database Backup &amp; Recovery Plan Template, the API Integration Requirements Template, the Penetration Test RFP Template, the Cloud Cost Optimization Checklist, the Code Review Checklist, the Custom CRM RFP Template, the Internal Tools Build-vs-Buy Worksheet, the LLC vs C-Corp Decision Checklist, the MITRE ATT&amp;CK Maturity Self-Assessment, the Stripe Connect Marketplace Onboarding Template, and the Technical Due Diligence Checklist. Each targets a specific decision-maker (CTO, COO, Security Lead, Founder) and a specific decision. One-click PDF download, no paywall, just an email.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Twenty-three resources, twenty-three decisions.
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-10 max-w-3xl">
                        Each guide targets a specific situation and a specific decision-maker. Pick the one
                        that matches what is on your plate this quarter. If you are juggling more than one,
                        skim the description on each card and start with the one that costs the most to get
                        wrong.
                    </p>
                    <div className="grid md:grid-cols-2 gap-5">
                        {resources.map((r) => {
                            const Icon = r.icon;
                            return (
                                <Link
                                    key={r.slug}
                                    href={`/resources/${r.slug}`}
                                    className="group rounded-2xl border border-white/10 bg-[#0a0f1e]/70 hover:bg-[#0d1526]/90 hover:border-sky-400/40 p-6 md:p-7 transition-all"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${r.accent} flex-shrink-0`}>
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-2">
                                                {r.format}
                                            </p>
                                            <h3 className="text-lg md:text-xl font-bold text-white leading-tight group-hover:text-sky-300 transition-colors">
                                                {r.title}
                                            </h3>
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                        {r.blurb}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t border-white/5">
                                        <p className="text-xs text-gray-500">
                                            For {r.audience}
                                        </p>
                                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-sky-400 group-hover:text-sky-300">
                                            Get the resource
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                        </span>
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Why we publish these
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Founders and operations leaders almost never call us cold. They call us after they
                            have lost two months to a SaaS vendor that refuses to fix a workflow bug, after a
                            SOC 2 auditor asked them what their pentest scope was and they did not know how to
                            answer, after a Stripe webhook silently dropped a $40,000 charge, or after a quant
                            trader watched a notebook strategy bleed real capital because the risk layer was
                            never built. Every one of those calls is preventable with 90 minutes of reading.
                            That is what these resources are for.
                        </p>
                        <p>
                            Each one is written like an internal document, not a sales sheet. The{" "}
                            <Link href="/resources/build-vs-buy-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                Build-vs-Buy Playbook
                            </Link>{" "}
                            walks through the same 12-factor scoring framework we use when{" "}
                            <Link href="/services/custom-business-software" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                scoping a custom build
                            </Link>
                            . The{" "}
                            <Link href="/resources/web-app-pentest-checklist" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                Pentest Checklist
                            </Link>{" "}
                            is the actual list of questions we wish every prospect asked before signing a
                            statement of work — see also our{" "}
                            <Link href="/services/web-app-pentest" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                web application pentest service
                            </Link>
                            . The{" "}
                            <Link href="/resources/crm-rollout-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                6-Week CRM Rollout Playbook
                            </Link>{" "}
                            is the operations document we hand a client on day one of a{" "}
                            <Link href="/services/custom-crm-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                custom CRM build
                            </Link>
                            . The{" "}
                            <Link href="/resources/mvp-to-prod-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                MVP to Production Playbook
                            </Link>{" "}
                            is the post-PMF SaaS map we wish someone had handed us in 2019.
                        </p>
                        <p>
                            The{" "}
                            <Link href="/resources/stripe-integration-checklist" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                Stripe Integration Checklist
                            </Link>{" "}
                            is built for SaaS teams shipping a{" "}
                            <Link href="/services/stripe-integration" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                custom Stripe integration
                            </Link>{" "}
                            and will save you a weekend of customer-support fires if you follow it. The{" "}
                            <Link href="/resources/mitre-attack-worksheet" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                MITRE ATT&amp;CK Maturity Worksheet
                            </Link>{" "}
                            is the self-assessment we walk security leads through before scoping a{" "}
                            <Link href="/services/mitre-attack-assessment" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                MITRE ATT&amp;CK assessment
                            </Link>{" "}
                            or a{" "}
                            <Link href="/services/penetration-testing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                full penetration test
                            </Link>
                            . Together they cover the four conversations that come up most often in our
                            consulting work: build vs buy, security posture, payments, and operations
                            tooling.
                        </p>
                        <p>
                            None of the resources are gated by anything more than an email address. We do
                            not ask for company size, phone number, headcount, or budget. If you want to
                            stay anonymous and grab the PDF, your email is the only field that is actually
                            required. If you want a follow-up from William, reply to the confirmation
                            email or jump straight into the contact form.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Who these are for
                    </h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-5">
                            <h3 className="text-white font-semibold mb-2">Founders &amp; CTOs</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                You shipped an MVP, you have paying customers, and the next 90 days will
                                decide whether the product survives its first enterprise procurement
                                cycle. Start with the{" "}
                                <Link href="/resources/mvp-to-prod-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    MVP to Production Playbook
                                </Link>
                                .
                            </p>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-5">
                            <h3 className="text-white font-semibold mb-2">RevOps &amp; Operations Leaders</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                You are losing the build-vs-buy argument with your CFO or staring at a
                                Salesforce renewal that doubled. Start with{" "}
                                <Link href="/resources/build-vs-buy-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    Build vs Buy
                                </Link>{" "}
                                and{" "}
                                <Link href="/resources/crm-rollout-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    the CRM Rollout Playbook
                                </Link>
                                .
                            </p>
                        </div>
                        <div className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-5">
                            <h3 className="text-white font-semibold mb-2">Security Leads &amp; vCISOs</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                You are scoping a pentest, answering a customer security questionnaire, or
                                pricing a SOC 2 audit. Start with the{" "}
                                <Link href="/resources/web-app-pentest-checklist" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    Pentest Checklist
                                </Link>{" "}
                                and the{" "}
                                <Link href="/resources/mitre-attack-worksheet" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    MITRE ATT&amp;CK Worksheet
                                </Link>
                                .
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            Skip the resource — talk to the founder.
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-8 max-w-2xl mx-auto">
                            If you already know which conversation you need, book a 20-minute scoping
                            call. William Beltz answers every booking personally — no SDR, no chatbot,
                            no automated funnel. Read more{" "}
                            <Link href="/about" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                about QUANT LAB USA
                            </Link>{" "}
                            or browse{" "}
                            <Link href="/work" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                recent client work
                            </Link>
                            ,{" "}
                            <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                pricing
                            </Link>
                            , or{" "}
                            <Link href="/blog" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                the blog
                            </Link>
                            .
                        </p>
                        <ConsultationCTA label="Book a 20-min call" source="resources-index" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
