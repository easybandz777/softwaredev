import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { PiggyBank, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "cloud-cost-optimization-checklist";
const TITLE = "The Cloud Cost Optimization Checklist";
const PDF_FILENAME = "cloud-cost-optimization-checklist.pdf";

export const metadata: Metadata = {
    title: "Cloud Cost Optimization Checklist (Free) | QUANT LAB USA",
    description:
        "A cloud cost optimization checklist covering visibility and tagging, compute right-sizing, storage and data transfer, databases, commitments, and a recurring review — cut your bill without breaking reliability.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "Cloud Cost Optimization Checklist (Free) | QUANT LAB USA",
        description:
            "Visibility, right-sizing, storage, data transfer, databases, commitments, and review cadence — a practical checklist to cut your cloud bill without breaking reliability.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "Cloud Cost Optimization Checklist (Free) | QUANT LAB USA",
        description:
            "Visibility, right-sizing, storage, data transfer, commitments, and review cadence — cut your cloud bill safely.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "A cloud cost optimization checklist covering cost visibility and tagging, compute right-sizing, storage and lifecycle, data transfer, databases and managed services, commitments and pricing, and ongoing cost governance.",
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
            name: "Where do most cloud savings actually come from?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Usually from three places: idle or over-provisioned compute that nobody turned off, storage that was never lifecycled to a cheaper tier or deleted, and on-demand pricing for steady workloads that should be on a commitment. None of these are clever — they are the result of nobody owning the bill. Visibility almost always pays for itself first.",
            },
        },
        {
            "@type": "Question",
            name: "Won't aggressive cost cutting hurt reliability?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It can if you cut blindly, which is why this checklist starts with visibility and right-sizing rather than slashing. The goal is to remove waste — idle resources, oversized instances, redundant data — not to under-provision production. Done well, optimization often improves reliability because you finally understand what you are running and why.",
            },
        },
        {
            "@type": "Question",
            name: "Should we buy reserved instances or savings plans?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Commit only to the baseline you are confident you will use for the term. Reserved capacity and savings plans offer real discounts for steady workloads, but a commitment you outgrow or stop needing becomes waste. Right-size first so you are committing to an accurate baseline, then layer commitments on the stable portion of your usage.",
            },
        },
        {
            "@type": "Question",
            name: "How often should we review cloud costs?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Monthly at a minimum, with alerts for anomalies in between. Cloud spend drifts upward continuously as teams ship features and spin up resources, so a one-time cleanup decays within months. The teams that keep costs under control treat it as a recurring habit with a named owner, not a quarterly fire drill.",
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
        { "@type": "ListItem", position: 3, name: "Cloud Cost Optimization Checklist", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

const visibilityItems = [
    "Tag every resource with owner, environment, and project so spend can be attributed instead of arriving as one opaque number.",
    "Enable cost and usage reporting, and build a breakdown by service, environment, and team that someone actually looks at.",
    "Set budgets and anomaly alerts so a runaway resource or a misconfigured job is caught in hours, not on the next invoice.",
    "Identify your biggest line items first; a small percentage off the largest cost beats large percentages off trivial ones.",
];

const computeItems = [
    "Right-size instances to real utilization; oversized compute that runs at low utilization is the most common form of waste.",
    "Shut down non-production environments outside business hours instead of running dev and staging around the clock.",
    "Delete or stop idle resources — unattached volumes, forgotten instances, old load balancers — that quietly accrue charges.",
    "Use autoscaling so capacity tracks demand rather than being permanently provisioned for peak.",
    "Consider serverless or containers for spiky or low-traffic workloads where you are paying for idle capacity.",
];

const storageItems = [
    "Apply lifecycle policies to move infrequently accessed data to cheaper tiers automatically.",
    "Delete orphaned data: old snapshots, unattached volumes, incomplete multipart uploads, and stale logs.",
    "Right-size backup retention to your actual recovery objectives rather than keeping everything forever.",
    "Compress and deduplicate where it is cheap to do so, especially for logs and archival data.",
];

const transferItems = [
    "Map your data-transfer costs; cross-region and egress traffic is often a surprising share of the bill.",
    "Keep chatty services in the same region and availability zone where possible to avoid inter-zone charges.",
    "Use a CDN to serve static and cacheable content so you are not paying origin egress for every request.",
    "Audit any architecture that moves large volumes of data between regions or clouds, and question whether it must.",
];

const databaseItems = [
    "Right-size database instances and storage to real load, and scale read replicas to demand rather than over-provisioning.",
    "Use the appropriate managed-service tier; the most expensive tier is not always the one your workload needs.",
    "Tune queries and indexing so you are not paying for compute to run inefficient work.",
    "Review managed-service add-ons and features you enabled but no longer use.",
];

const commitmentsItems = [
    "Right-size first, then commit; buying reserved capacity for oversized resources locks in the waste.",
    "Cover your steady baseline with reserved instances or savings plans, and leave variable load on on-demand.",
    "Match commitment terms to your confidence horizon; do not commit for years to a workload you may re-architect.",
    "Use spot or preemptible capacity for fault-tolerant, interruptible workloads at a steep discount.",
];

const governanceItems = [
    "Assign an owner for cloud cost so it is someone's explicit responsibility, not everyone's vague concern.",
    "Review spend monthly against budget and investigate every meaningful variance.",
    "Add cost as a consideration in architecture and code review so new waste is caught at the source.",
    "Track a unit-cost metric — cost per customer, per request, or per environment — so you measure efficiency, not just total spend.",
];

const sections = [
    { heading: "1. Cost visibility & tagging", items: visibilityItems },
    { heading: "2. Compute right-sizing", items: computeItems },
    { heading: "3. Storage & lifecycle", items: storageItems },
    { heading: "4. Data transfer", items: transferItems },
    { heading: "5. Databases & managed services", items: databaseItems },
    { heading: "6. Commitments & pricing", items: commitmentsItems },
    { heading: "7. Ongoing cost governance", items: governanceItems },
];

export default function CloudCostOptimizationChecklistPage() {
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
                        <li className="text-gray-300">Cloud Cost Optimization Checklist</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                                <PiggyBank className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-3">
                                Cloud cost checklist · visibility, right-sizing, storage, commitments
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Cut your cloud bill without breaking anything.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                A practical checklist for cloud cost optimization: get visibility, right-size
                                compute, lifecycle storage, tame data transfer, tune databases, and commit to the
                                baseline you actually use. Most cloud waste is mundane — idle resources nobody
                                turned off and on-demand pricing for steady workloads. This is how you find it
                                and keep it gone.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-400" /><span>7 sections, ~35 actions</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>First pass in a day</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For engineering &amp; finance leads</span></div>
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
                                successHeadline="The Cloud Cost Optimization Checklist is yours."
                                relatedServiceHref="/services/cloud-infrastructure"
                                relatedServiceLabel="cloud infrastructure services"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Why cloud bills balloon
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Cloud spend rarely balloons from one bad decision. It creeps. A team spins up a
                                staging environment and never turns it off. An instance gets oversized
                                &ldquo;to be safe&rdquo; and stays that way. Snapshots accumulate, egress charges
                                hide in the architecture, and steady workloads run on-demand because nobody ever
                                bought a commitment. Each item is small; together they are often a third of the
                                bill. The root cause is almost always the same: nobody owns the number.
                            </p>
                            <p>
                                This checklist gives you a systematic way to find and remove that waste without
                                under-provisioning production. It is the same approach we take when we run{" "}
                                <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    cloud infrastructure
                                </Link>{" "}
                                for clients. If you want the underlying concepts, the{" "}
                                <Link href="/glossary/what-is-infrastructure-as-code" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    infrastructure as code
                                </Link>{" "}
                                and{" "}
                                <Link href="/glossary/what-is-serverless" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    serverless
                                </Link>{" "}
                                glossary entries are useful primers.
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
                            How to apply the checklist
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Start with visibility, not cuts. You cannot optimize what you cannot see, so tag
                                resources and build a breakdown by service and team before you change anything.
                                Then attack your largest line items first — a small reduction on your biggest cost
                                beats a heroic effort on a trivial one. Right-size before you commit, because
                                buying reserved capacity for oversized resources just locks in the waste.
                            </p>
                            <p>
                                The most important section is the last one. A one-time cleanup decays within
                                months as teams ship and spin up new resources, so assign an owner and review
                                spend monthly with anomaly alerts in between. If your costs are climbing because
                                the architecture itself is inefficient, that is a deeper problem than tagging — our{" "}
                                <Link href="/services/cloud-migration" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    cloud migration
                                </Link>{" "}
                                and{" "}
                                <Link href="/services/devops-engineering" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    DevOps engineering
                                </Link>{" "}
                                work exists to fix that.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Cost efficiency is part of how we design and run{" "}
                                <Link href="/services/cloud-infrastructure" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    cloud infrastructure
                                </Link>
                                . Right-sizing, sensible storage lifecycles, and commitments matched to real usage
                                are baked into how we provision systems, not bolted on after a scary invoice. When
                                we take on a{" "}
                                <Link href="/services/cloud-migration" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    cloud migration
                                </Link>{" "}
                                or modernize a{" "}
                                <Link href="/services/legacy-system-modernization" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    legacy system
                                </Link>
                                , controlling ongoing run-cost is part of the goal, not an afterthought.
                            </p>
                            <p>
                                If your cloud bill is climbing faster than your usage and you want an outside look
                                at where the waste is, see{" "}
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
                                    q: "Where do most cloud savings actually come from?",
                                    a: "Usually from three places: idle or over-provisioned compute that nobody turned off, storage that was never lifecycled to a cheaper tier or deleted, and on-demand pricing for steady workloads that should be on a commitment. None of these are clever — they are the result of nobody owning the bill. Visibility almost always pays for itself first.",
                                },
                                {
                                    q: "Won't aggressive cost cutting hurt reliability?",
                                    a: "It can if you cut blindly, which is why this checklist starts with visibility and right-sizing rather than slashing. The goal is to remove waste — idle resources, oversized instances, redundant data — not to under-provision production. Done well, optimization often improves reliability because you finally understand what you are running and why.",
                                },
                                {
                                    q: "Should we buy reserved instances or savings plans?",
                                    a: "Commit only to the baseline you are confident you will use for the term. Reserved capacity and savings plans offer real discounts for steady workloads, but a commitment you outgrow or stop needing becomes waste. Right-size first so you are committing to an accurate baseline, then layer commitments on the stable portion of your usage.",
                                },
                                {
                                    q: "How often should we review cloud costs?",
                                    a: "Monthly at a minimum, with alerts for anomalies in between. Cloud spend drifts upward continuously as teams ship features and spin up resources, so a one-time cleanup decays within months. The teams that keep costs under control treat it as a recurring habit with a named owner, not a quarterly fire drill.",
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
                            <Link href="/resources/database-backup-and-recovery-plan-template" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Database Backup &amp; Recovery Plan Template</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Right-size backup retention to real recovery objectives.</p>
                            </Link>
                            <Link href="/resources/saas-security-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">SaaS Security Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The security baseline that runs on the same infrastructure.</p>
                            </Link>
                            <Link href="/resources/technical-due-diligence-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Technical Due Diligence Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Where cloud cost and architecture get scrutinized in a deal.</p>
                            </Link>
                            <Link href="/services/cloud-infrastructure" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Cloud Infrastructure</p>
                                <p className="text-xs text-gray-400 leading-relaxed">How we build cost-efficient, reliable infrastructure.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Cloud bill climbing faster than your usage?
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                We can audit your spend, find the waste, and right-size without touching
                                reliability — and fix the architecture if that is what is driving the cost. See{" "}
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
