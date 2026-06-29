import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { DatabaseBackup, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "database-backup-and-recovery-plan-template";
const TITLE = "The Database Backup & Recovery Plan Template";
const PDF_FILENAME = "database-backup-and-recovery-plan-template.pdf";

export const metadata: Metadata = {
    title: "Database Backup & Recovery Plan Template (Free) | QUANT LAB USA",
    description:
        "A fill-in database backup and recovery plan template covering RPO and RTO targets, backup schedule, storage and encryption, restore testing, and roles — so a bad deploy never becomes permanent data loss.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "Database Backup & Recovery Plan Template (Free) | QUANT LAB USA",
        description:
            "Define RPO and RTO, backup schedule, encrypted storage, restore testing, and ownership with a fill-in database backup and recovery plan template.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Database Backup & Recovery Plan Template (Free) | QUANT LAB USA",
        description:
            "RPO/RTO targets, backup schedule, encrypted storage, restore testing, and ownership — a fill-in plan template.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "A database backup and recovery plan template covering recovery objectives, backup strategy and schedule, storage and encryption, restoration testing, monitoring, and roles and responsibilities.",
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
            name: "What is the difference between RPO and RTO?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "RPO, the recovery point objective, is how much data you can afford to lose, measured in time — an RPO of one hour means you must be able to restore to a state no more than an hour old. RTO, the recovery time objective, is how long you can be down while you recover. RPO drives backup frequency; RTO drives how fast your restore process has to be.",
            },
        },
        {
            "@type": "Question",
            name: "Isn't a managed database's automatic backup enough?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Automatic snapshots are a good foundation, but they are not a plan. They do not tell you your recovery objectives, they are sometimes deleted with the instance they protect, and they are worthless if nobody has ever tested a restore. The plan ties the mechanism to objectives, ownership, off-account copies, and tested procedures.",
            },
        },
        {
            "@type": "Question",
            name: "How often should we test a restore?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "At least quarterly, and after any significant change to the database or backup configuration. A backup you have never restored is a hypothesis, not a safeguard. Many teams discover their backups are corrupt, incomplete, or missing a critical dependency only the first time they try to use them — which should never be during a real incident.",
            },
        },
        {
            "@type": "Question",
            name: "Where should backups be stored?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "In a separate location from the primary database — ideally a different account or region — so a compromised account, an accidental deletion, or a regional outage cannot take both at once. Backups should be encrypted at rest and in transit, and access to them should be tightly restricted and logged.",
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
        { "@type": "ListItem", position: 3, name: "Database Backup & Recovery Plan Template", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

const objectivesItems = [
    "Recovery point objective (RPO): the maximum acceptable data loss, expressed in time. State it per database or dataset, since not all data carries equal risk.",
    "Recovery time objective (RTO): the maximum acceptable downtime during recovery. Be honest about what the business can actually tolerate.",
    "Criticality tier: rank each datastore so the most important systems get the tightest objectives and the most testing.",
    "Scope: list exactly which databases, schemas, and dependent stores (caches, object storage, search indexes) the plan covers.",
];

const strategyItems = [
    "Backup types: define your mix of full, incremental, and point-in-time recovery, and how they combine to meet your RPO.",
    "Schedule: state the frequency of each backup type and the time window in which it runs.",
    "Retention: define how long each backup is kept, and any longer-term archival required for compliance or contracts.",
    "Automation: backups run automatically on a schedule, never as a manual task someone has to remember.",
    "Verification: every backup job is checked for success, and failures raise an alert that a named person sees.",
];

const storageItems = [
    "Location: store backups in a separate account or region from the primary database so one failure cannot destroy both.",
    "Encryption: encrypt backups at rest and in transit, and document where the keys live and who can use them.",
    "Access control: restrict who can read, write, or delete backups, and log all access to them.",
    "Immutability: where supported, use write-once or object-lock storage so backups cannot be deleted or altered by a compromised account.",
];

const restoreItems = [
    "Restore runbook: a step-by-step procedure anyone on call can follow under pressure, not tribal knowledge.",
    "Test cadence: restore to a clean environment at least quarterly and after major changes, and record how long it took against your RTO.",
    "Validation: after a test restore, verify data integrity and application functionality, not just that the job completed.",
    "Partial recovery: document how to restore a single table or a point in time, not only a full rebuild.",
    "Dependencies: confirm the restore captures everything the app needs — schema, data, extensions, and related stores.",
];

const monitoringItems = [
    "Alerting: failed or missed backups, growing backup duration, and storage nearing capacity all trigger alerts.",
    "Reporting: a regular review confirms backups are succeeding and objectives are still being met as data grows.",
    "Change control: the plan is updated whenever the database, schedule, or infrastructure changes.",
];

const rolesItems = [
    "Plan owner: the named person accountable for keeping this plan current and tested.",
    "On-call responder: who executes a recovery, and how they are reached at 3 a.m.",
    "Escalation path: who is informed and who decides during a major data-loss event.",
    "Review schedule: the recurring date on which this plan and its assumptions are revisited.",
];

const sections = [
    { heading: "1. Recovery objectives", items: objectivesItems },
    { heading: "2. Backup strategy & schedule", items: strategyItems },
    { heading: "3. Storage & encryption", items: storageItems },
    { heading: "4. Restoration & testing", items: restoreItems },
    { heading: "5. Monitoring & change control", items: monitoringItems },
    { heading: "6. Roles & responsibilities", items: rolesItems },
];

export default function DatabaseBackupAndRecoveryPlanTemplatePage() {
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
                        <li className="text-gray-300">Database Backup &amp; Recovery Plan Template</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                                <DatabaseBackup className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-3">
                                Backup &amp; recovery plan · RPO/RTO, schedule, storage, restore testing
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                A backup you have never restored is just a hope.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                A fill-in template for a database backup and recovery plan: recovery objectives,
                                backup schedule, encrypted off-account storage, a tested restore runbook, and
                                clear ownership. Snapshots running quietly in your cloud account are not a plan —
                                this turns them into one you can rely on when a bad deploy or a ransomware event
                                hits.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-400" /><span>6 sections, fill-in template</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>Draft it in an afternoon</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For engineering &amp; ops leads</span></div>
                            </div>
                        </AnimatedSection>
                    </div>
                    <div className="lg:col-span-2">
                        <AnimatedSection>
                            <ResourceLeadForm
                                slug={SLUG}
                                title={TITLE}
                                pdfFilename={PDF_FILENAME}
                                drip="D1"
                                successHeadline="The Database Backup & Recovery Plan Template is yours."
                                relatedServiceHref="/services/cloud-infrastructure"
                                relatedServiceLabel="cloud infrastructure services"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Why a written recovery plan matters
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Almost every team believes they have backups. Far fewer can tell you their
                                recovery objectives, where the backups live, who restores them, or the last time
                                anyone tried. The gap between &ldquo;we take snapshots&rdquo; and &ldquo;we can be
                                back online with an hour of data loss in under four hours&rdquo; is the whole
                                point of a plan. The first time you exercise a restore should never be during a
                                real incident.
                            </p>
                            <p>
                                This template gives you the structure to write that plan down. It is the same
                                discipline we apply when we manage{" "}
                                <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    cloud infrastructure
                                </Link>{" "}
                                for clients. If you want the underlying concepts, the{" "}
                                <Link href="/glossary/what-is-encryption-at-rest" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    encryption at rest
                                </Link>{" "}
                                and{" "}
                                <Link href="/glossary/what-is-infrastructure-as-code" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    infrastructure as code
                                </Link>{" "}
                                glossary entries explain how backups should be protected and provisioned.
                            </p>
                        </div>
                    </AnimatedSection>

                    {sections.map((section) => (
                        <AnimatedSection key={section.heading} className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                {section.heading}
                            </h2>
                            <ul className="space-y-3">
                                {section.items.map((item) => (
                                    <li key={item} className="flex gap-3 text-gray-300">
                                        <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>
                    ))}

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How to use this template
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Start with the objectives section, because everything else flows from it. Decide
                                your RPO and RTO per datastore with the people who own the business risk, not in
                                isolation — those two numbers determine your backup frequency and how fast your
                                restore process has to be. Then fill in the strategy, storage, and testing
                                sections to actually meet the targets you set, and assign every responsibility to
                                a named person.
                            </p>
                            <p>
                                The section that teams skip and later regret is restore testing. Schedule a real
                                restore to a clean environment at least quarterly, time it against your RTO, and
                                verify the data is correct — not just that the job finished. Pair this plan with a
                                broader{" "}
                                <Link href="/resources/incident-response-plan-template" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    incident response plan
                                </Link>
                                , since data loss is one of the incidents your team has to be ready to handle.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                A tested backup and recovery plan is part of how we set up and run{" "}
                                <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    cloud infrastructure
                                </Link>{" "}
                                and how we approach{" "}
                                <Link href="/services/data-engineering" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    data engineering
                                </Link>{" "}
                                work. When we manage production systems with our{" "}
                                <Link href="/services/devops-engineering" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    DevOps engineering
                                </Link>{" "}
                                service, backups are codified, monitored, and exercised — not left to a default
                                snapshot setting nobody reviews.
                            </p>
                            <p>
                                If you want help defining realistic recovery objectives, hardening where backups
                                live, or building a restore process you have actually tested, see{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    how we scope and price the work
                                </Link>{" "}
                                or{" "}
                                <Link href="/contact" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    reach out
                                </Link>{" "}
                                to talk it through.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Frequently asked questions
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "What is the difference between RPO and RTO?",
                                    a: "RPO, the recovery point objective, is how much data you can afford to lose, measured in time — an RPO of one hour means you must be able to restore to a state no more than an hour old. RTO, the recovery time objective, is how long you can be down while you recover. RPO drives backup frequency; RTO drives how fast your restore process has to be.",
                                },
                                {
                                    q: "Isn't a managed database's automatic backup enough?",
                                    a: "Automatic snapshots are a good foundation, but they are not a plan. They do not tell you your recovery objectives, they are sometimes deleted with the instance they protect, and they are worthless if nobody has ever tested a restore. The plan ties the mechanism to objectives, ownership, off-account copies, and tested procedures.",
                                },
                                {
                                    q: "How often should we test a restore?",
                                    a: "At least quarterly, and after any significant change to the database or backup configuration. A backup you have never restored is a hypothesis, not a safeguard. Many teams discover their backups are corrupt, incomplete, or missing a critical dependency only the first time they try to use them — which should never be during a real incident.",
                                },
                                {
                                    q: "Where should backups be stored?",
                                    a: "In a separate location from the primary database — ideally a different account or region — so a compromised account, an accidental deletion, or a regional outage cannot take both at once. Backups should be encrypted at rest and in transit, and access to them should be tightly restricted and logged.",
                                },
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
                            <Link href="/resources/incident-response-plan-template" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Incident Response Plan Template</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The broader plan a data-loss event plugs into.</p>
                            </Link>
                            <Link href="/resources/saas-security-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">SaaS Security Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Where backups fit in a full SaaS security baseline.</p>
                            </Link>
                            <Link href="/resources/cloud-cost-optimization-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Cloud Cost Optimization Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Right-size storage and retention without over-paying.</p>
                            </Link>
                            <Link href="/services/cloud-infrastructure" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Cloud Infrastructure</p>
                                <p className="text-xs text-gray-400 leading-relaxed">How we set up resilient, recoverable infrastructure.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Not sure your backups would survive a real incident?
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                We can review your current setup, define realistic recovery objectives, and build
                                a restore process you have actually tested. See{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    how engagements are priced
                                </Link>{" "}
                                or book a call.
                            </p>
                            <ConsultationCTA label="Book a 20-min call" source={`${SLUG}-resource`} service="Cloud Infrastructure" />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
