import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { Users, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "crm-rollout-playbook";
const TITLE = "The 6-Week Custom CRM Rollout Playbook";
const PDF_FILENAME = "crm-rollout-playbook.pdf";

export const metadata: Metadata = {
    title: "6-Week Custom CRM Rollout Playbook (Free PDF) | QUANT LAB USA",
    description:
        "A 30-page rollout playbook with week-by-week tasks, data migration templates, and a stakeholder comms kit for ops leaders launching a new CRM. Free.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "6-Week Custom CRM Rollout Playbook (Free PDF) | QUANT LAB USA",
        description:
            "A 30-page rollout playbook with week-by-week tasks, data migration templates, and a stakeholder comms kit for ops leaders launching a new CRM.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "6-Week Custom CRM Rollout Playbook (Free PDF) | QUANT LAB USA",
        description:
            "30-page playbook with week-by-week tasks, migration templates, and stakeholder comms.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "Downloadable 30-page rollout playbook with week-by-week tasks, data migration templates, stakeholder communications, and a 30-60-90 review framework for operations leaders rolling out a new CRM.",
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
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Who is the 6-Week Custom CRM Rollout Playbook for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "RevOps leaders, VPs of Sales, COOs, and operations directors at 25-to-500-person companies rolling out a new CRM. It works for custom CRM builds, Salesforce/HubSpot replacements, and platform migrations between major SaaS CRMs. The week-by-week structure assumes you have already chosen a system and need to execute the change without breaking the sales motion.",
            },
        },
        {
            "@type": "Question",
            name: "Why six weeks?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Six weeks is the smallest window that includes adequate discovery, data migration, integration wiring, training, and a controlled cutover. Anything shorter than six weeks tends to skip data validation and produces a launch with three weeks of data hygiene fires. Anything longer than six weeks typically loses executive sponsorship and starts compounding scope creep. The playbook is structured so each week has a clear deliverable.",
            },
        },
        {
            "@type": "Question",
            name: "Does this work for both custom CRM and SaaS CRM rollouts?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. About 70 percent of the playbook is platform-agnostic — data hygiene, stakeholder communications, training, pipeline-stage normalization, and rollout cadence are the same whether you are rolling out a custom system, Salesforce, HubSpot, or replacing a legacy CRM. The custom-specific sections are clearly marked and skippable if you are rolling out a SaaS platform.",
            },
        },
        {
            "@type": "Question",
            name: "What templates are included?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Eleven templates: data migration mapping spreadsheet, user-acceptance test script, week-zero stakeholder communication, week-three midpoint update, week-six launch announcement, sales rep training agenda, pipeline-stage definitions sheet, deal hygiene scorecard, post-launch retro template, 30-60-90 review framework, and an executive readiness checklist.",
            },
        },
        {
            "@type": "Question",
            name: "What if my CRM rollout needs to be longer than six weeks?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The playbook scales. Most of the week-by-week structure compresses or expands cleanly. If you have a particularly complex data migration (multiple legacy systems, regulatory data retention, multi-currency or multi-entity), Week 2 stretches to two or three weeks. We have shipped rollouts in 10 weeks using the same framework. Sub-six-week rollouts are not recommended.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://quantlabusa.dev/resources" },
        { "@type": "ListItem", position: 3, name: "CRM Rollout Playbook", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

export default function CrmRolloutPlaybookPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="container mx-auto px-6 max-w-6xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/resources" className="hover:text-sky-400 transition-colors">Resources</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">CRM Rollout Playbook</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-emerald-300 font-semibold mb-3">
                                30-page PDF · 11 templates · Week-by-week
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Roll out your new CRM in six weeks without breaking the sales motion.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                The same week-by-week playbook our team hands clients on day one of a
                                custom CRM engagement — data migration templates, stakeholder communications,
                                a sales-rep training agenda, and a 30-60-90 review framework that surfaces
                                adoption gaps before they become quarter-end fires.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-emerald-400" /><span>30 pages, 11 templates</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-sky-400" /><span>2-hour first read</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For RevOps &amp; VPs of Sales</span></div>
                            </div>
                        </AnimatedSection>
                    </div>
                    <div className="lg:col-span-2">
                        <AnimatedSection>
                            <ResourceLeadForm
                                slug={SLUG}
                                title={TITLE}
                                pdfFilename={PDF_FILENAME}
                                drip="D4"
                                successHeadline="The CRM Rollout Playbook is yours."
                                relatedServiceHref="/services/custom-crm-development"
                                relatedServiceLabel="custom CRM development"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Why most CRM rollouts stall in week three
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                CRM rollouts rarely fail because the technology was wrong. They fail because
                                week three exposes problems that should have been handled in week zero. The
                                data migration plan turns out to be incomplete because the legacy CRM has
                                three custom fields nobody documented. The sales-rep training session lands
                                two weeks before launch and reps cannot remember any of it. The pipeline
                                stages in the new system look different from the old ones and sales leadership
                                disputes them in a Slack channel for ten days. Each of those failures is
                                preventable with a written rollout structure. That is what this playbook is.
                            </p>
                            <p>
                                The framework is the same one we use when we ship a{" "}
                                <Link href="/services/custom-crm-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom CRM build
                                </Link>
                                . It also works for Salesforce-to-HubSpot migrations, HubSpot-to-Salesforce
                                migrations, Pipedrive replacements, and rollouts of new modules on top of an
                                existing CRM. The week-by-week structure assumes you have already picked the
                                platform — if you are still on the build-vs-buy side of the decision, start
                                with the{" "}
                                <Link href="/resources/build-vs-buy-playbook" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    Build vs Buy Playbook
                                </Link>{" "}
                                or run the{" "}
                                <Link href="/calculators/crm-roi" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom CRM ROI calculator
                                </Link>
                                .
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Inside the 30-page PDF + templates
                        </h2>
                        <ul className="space-y-3">
                            {[
                                "Week 0 — Pre-launch foundations. Pipeline-stage normalization, custom-field inventory of the legacy system, identification of the migration champion, executive readiness checklist, and the all-hands kickoff communication.",
                                "Week 1 — Data migration mapping. The field-by-field mapping spreadsheet, data cleanliness audit, owner assignment, dedupe pass, and a go/no-go gate before any data is actually moved.",
                                "Week 2 — Integration wiring. Email, calendar, accounting, and forms integrations come online. UAT scripts for each integration. Documented fallback paths if any integration fails on launch day.",
                                "Week 3 — Pilot with the first sales pod. Three to five reps run their pipeline live in the new system in parallel with the legacy system. Daily standups surface gaps. The pilot fixes inform the broader rollout.",
                                "Week 4 — Training and documentation. The rep training agenda (with a script you can hand a sales enablement lead), the manager training session, written cheat sheets, and an internal video knowledge base.",
                                "Week 5 — Dress rehearsal cutover. A full data refresh, a 24-hour read-only window on the legacy system, and a live rehearsal of cutover day with the executive sponsor on call.",
                                "Week 6 — Launch and stabilize. Launch communication, sales floor support coverage, the daily-fire-fix log, and a 14-day stabilization period before declaring victory.",
                                "Post-launch — 30-60-90 review framework. Three structured reviews with adoption metrics, deal-hygiene scorecard, and a written go-forward roadmap for the next two quarters.",
                            ].map((item) => (
                                <li key={item} className="flex gap-3 text-gray-300">
                                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Who this is for
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                The playbook is for the operations leader who owns the CRM rollout day-to-day.
                                That is usually a RevOps director, a VP of Operations, or a COO at a 25-to-500
                                person company. It is also useful for sales operations managers who report
                                into a VP of Sales and need to manage the rollout without an executive
                                sponsor available daily. The materials assume you can dedicate four to eight
                                hours per week of your own time for six weeks, plus partial bandwidth from a
                                data lead, a sales lead, and an engineering or admin lead. If your bandwidth
                                falls below that, the playbook walks through which sections are
                                non-negotiable and which can be deferred.
                            </p>
                            <p>
                                If you are rolling out a CRM for the first time, work through the playbook
                                linearly. If you have shipped one or two before, the value is in the
                                templates — pull the data migration mapping spreadsheet, the user acceptance
                                test script, and the 30-60-90 review framework into your project tracker
                                and skip the narrative. Several of the operations leaders we have shared
                                the playbook with use the executive readiness checklist as their primary
                                executive-update artifact.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            What you will learn
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                You will learn the difference between a clean cutover and a dirty cutover —
                                and which one yours is going to be based on the state of your legacy data.
                                You will learn how to normalize pipeline stages across multiple sales pods
                                so the reporting layer of the new system actually works. You will learn how
                                to run a rep training that holds two weeks past the session date. You will
                                learn the standard communication cadence with sales leadership so the
                                rollout does not turn into a political fight. You will learn how to budget
                                support coverage on launch week and the seven days after.
                            </p>
                            <p>
                                On the data side, you will learn the field-by-field mapping framework that
                                surfaces hidden custom fields, the dedupe pass that prevents Day-One
                                duplicate-record fires, and the rollback plan you should have in place
                                before going live. On the adoption side, you will learn the 14 metrics in
                                the deal-hygiene scorecard that predict whether your rollout actually
                                landed — and which two of those metrics matter most in the first 30 days.
                            </p>
                            <p>
                                You will also learn what to expect after launch. The 30-60-90 review
                                framework treats rollout as the start of a process, not the end. Most CRM
                                rollouts that fail at the six-month mark fail because nobody scheduled the
                                Day-60 review. We have learned this the hard way and built it into the
                                playbook.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                The week-by-week structure is what we hand a client on day one of a{" "}
                                <Link href="/services/custom-crm-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom CRM development engagement
                                </Link>
                                . When we{" "}
                                <Link href="/services/custom-business-software" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    build broader operations software
                                </Link>{" "}
                                that touches the sales motion, the same rollout playbook governs the cutover.
                                If you want to see the math behind whether to build vs. stay on your current
                                CRM, run the{" "}
                                <Link href="/calculators/crm-roi" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom CRM ROI calculator
                                </Link>{" "}
                                before you commit to the rollout.
                            </p>
                            <p>
                                If your rollout also involves a payments integration, the{" "}
                                <Link href="/resources/stripe-integration-checklist" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    Stripe Integration Checklist
                                </Link>{" "}
                                pairs cleanly with Week 2 of this playbook. For pricing on a custom CRM
                                rollout engagement, see{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    the pricing page
                                </Link>{" "}
                                or read about{" "}
                                <Link href="/about" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    how we engage
                                </Link>
                                . Sample builds and reference engagements are at{" "}
                                <Link href="/work" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    the client work page
                                </Link>
                                .
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Frequently asked questions
                        </h2>
                        <div className="space-y-6">
                            {[
                                { q: "Who is the 6-Week Custom CRM Rollout Playbook for?", a: "RevOps leaders, VPs of Sales, COOs, and operations directors at 25-to-500-person companies rolling out a new CRM. It works for custom CRM builds, Salesforce/HubSpot replacements, and platform migrations between major SaaS CRMs." },
                                { q: "Why six weeks?", a: "Six weeks is the smallest window that includes adequate discovery, data migration, integration wiring, training, and a controlled cutover. Anything shorter tends to skip data validation. Anything longer typically loses executive sponsorship and compounds scope creep." },
                                { q: "Does this work for both custom CRM and SaaS CRM rollouts?", a: "Yes. About 70% of the playbook is platform-agnostic — data hygiene, stakeholder communications, training, pipeline-stage normalization, and rollout cadence are the same regardless of platform." },
                                { q: "What templates are included?", a: "Eleven templates including data migration mapping spreadsheet, UAT scripts, three stakeholder communications, training agenda, pipeline-stage definitions, deal-hygiene scorecard, post-launch retro template, 30-60-90 review framework, and executive readiness checklist." },
                                { q: "What if my CRM rollout needs to be longer than six weeks?", a: "The playbook scales. Most of the week-by-week structure compresses or expands cleanly. Complex multi-system data migrations may stretch Week 2 to two or three weeks. We have shipped rollouts in 10 weeks using the same framework." },
                            ].map((item) => (
                                <details key={item.q} className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 open:bg-[#0d1526]">
                                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-white">
                                        <span>{item.q}</span>
                                        <ArrowRight className="w-4 h-4 text-sky-400 transition-transform group-open:rotate-90" />
                                    </summary>
                                    <p className="text-gray-400 mt-3 leading-relaxed text-sm">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Related resources &amp; reading
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/resources/build-vs-buy-playbook" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Build vs Buy Decision Playbook</p>
                                <p className="text-xs text-gray-400 leading-relaxed">If the build-vs-buy call is still open, start here.</p>
                            </Link>
                            <Link href="/calculators/crm-roi" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Custom CRM ROI Calculator</p>
                                <p className="text-xs text-gray-400 leading-relaxed">3-year TCO and payback math for Salesforce vs custom.</p>
                            </Link>
                            <Link href="/services/custom-crm-development" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Custom CRM Development</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The service that uses this rollout playbook.</p>
                            </Link>
                            <Link href="/resources/stripe-integration-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Stripe Integration Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">If your CRM rollout includes a payments integration.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-sky-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Want us to run the rollout with you?
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                Most QUANT LAB custom CRM engagements include the rollout. Book a
                                20-minute scoping call and we will walk through your week-by-week plan,
                                identify the riskiest cutover items, and tell you whether your team can
                                run this in-house or whether a co-pilot model makes more sense. Read{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    pricing
                                </Link>{" "}
                                first if you want to anchor the budget conversation.
                            </p>
                            <ConsultationCTA label="Book a 20-min CRM call" source={`${SLUG}-resource`} service="Custom CRM Development" />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
