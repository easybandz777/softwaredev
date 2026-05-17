import React from "react";
import Link from "next/link";
import { ArrowRight, Network } from "lucide-react";

/**
 * Topic-cluster hub component. Surfaces 5 high-intent cluster entry points
 * on the homepage and the /services hub so crawlers see the hub-and-spoke
 * topical structure and humans can jump straight into a buying intent.
 *
 * Each cluster lists its hub page (the pillar), 3-4 supporting spoke pages,
 * and a short framing line so the section reads as editorial, not boilerplate.
 */

type ClusterLink = { href: string; label: string };

type Cluster = {
    id: string;
    title: string;
    pillar: ClusterLink;
    blurb: string;
    spokes: ClusterLink[];
    /** Tailwind color seed for accents. */
    accent: string;
};

const CLUSTERS: Cluster[] = [
    {
        id: "crm",
        title: "Custom CRM Cluster",
        pillar: { href: "/services/custom-crm-development", label: "Custom CRM Development" },
        blurb: "Sales pipeline software shaped around how your team actually closes deals — not a generic SaaS template.",
        spokes: [
            { href: "/blog/custom-crm-development-guide", label: "Custom CRM development guide" },
            { href: "/blog/custom-crm-vs-salesforce-vs-hubspot-2026", label: "Custom CRM vs Salesforce vs HubSpot" },
            { href: "/vs/salesforce", label: "Custom CRM vs Salesforce comparison" },
            { href: "/calculators/crm-roi", label: "CRM ROI calculator" },
        ],
        accent: "from-sky-500 to-cyan-400",
    },
    {
        id: "stripe",
        title: "Stripe & Payments Cluster",
        pillar: { href: "/services/payments-invoicing-licensing", label: "Payments, Invoicing & Licensing" },
        blurb: "Stripe Checkout, Stripe Billing, license servers, and webhook infrastructure wired into Next.js the right way.",
        spokes: [
            { href: "/blog/nextjs-stripe-integration-guide", label: "Next.js + Stripe integration guide" },
            { href: "/blog/stripe-webhook-security-best-practices", label: "Stripe webhook security best practices" },
            { href: "/blog/stripe-connect-marketplace-architecture", label: "Stripe Connect marketplace architecture" },
            { href: "/calculators/stripe-cost", label: "Stripe cost calculator" },
        ],
        accent: "from-emerald-500 to-teal-400",
    },
    {
        id: "pentest",
        title: "Penetration Testing Cluster",
        pillar: { href: "/services/penetration-testing", label: "Penetration Testing" },
        blurb: "Manual offensive security — web app, network, Active Directory, and MITRE ATT&CK-aligned engagements.",
        spokes: [
            { href: "/blog/what-is-penetration-testing", label: "What is penetration testing" },
            { href: "/blog/penetration-test-cost-2026", label: "Penetration test cost (2026)" },
            { href: "/blog/soc2-pentest-prep-guide-2026", label: "SOC 2 pentest prep guide" },
            { href: "/calculators/pentest-cost", label: "Pentest cost calculator" },
        ],
        accent: "from-red-500 to-orange-400",
    },
    {
        id: "build-vs-buy",
        title: "Build vs Buy Cluster",
        pillar: { href: "/blog/build-vs-buy-software-2026", label: "Build vs Buy Decision Framework" },
        blurb: "When custom code wins, when SaaS wins, and how to model the three-year TCO for your specific call.",
        spokes: [
            { href: "/calculators/build-vs-buy", label: "Build vs buy calculator" },
            { href: "/blog/custom-software-rfp-template-2026", label: "Custom software RFP template" },
            { href: "/blog/how-to-choose-a-software-development-company-checklist", label: "How to choose a dev firm (checklist)" },
            { href: "/services/custom-business-software", label: "Custom business software service" },
        ],
        accent: "from-blue-500 to-cyan-400",
    },
    {
        id: "saas-stack",
        title: "SaaS Engineering Stack Cluster",
        pillar: { href: "/services/web-applications", label: "Next.js Web Applications" },
        blurb: "Production-grade Next.js builds — multi-tenant data isolation, framework selection, and platform engineering patterns.",
        spokes: [
            { href: "/blog/building-multi-tenant-saas-postgres-rls", label: "Multi-tenant SaaS on Postgres RLS" },
            { href: "/blog/nextjs-vs-remix-vs-sveltekit-2026", label: "Next.js vs Remix vs SvelteKit" },
            { href: "/blog/internal-tools-platform-engineering-guide", label: "Internal tools platform engineering" },
            { href: "/services/saas-platform-development", label: "SaaS platform development" },
        ],
        accent: "from-violet-500 to-blue-400",
    },
];

type Props = {
    heading?: string;
    intro?: string;
    className?: string;
    /** If provided, only the named clusters are rendered, in this order. */
    only?: string[];
};

export function TopicClusters({ heading, intro, className, only }: Props) {
    const clusters = only && only.length > 0
        ? (only
              .map((id) => CLUSTERS.find((c) => c.id === id))
              .filter((c): c is Cluster => Boolean(c)))
        : CLUSTERS;

    if (clusters.length === 0) return null;

    return (
        <section
            aria-label={heading ?? "Topic clusters"}
            className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-10 ${className ?? ""}`}
        >
            <div className="mb-8 max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-3">
                    <Network className="w-4 h-4" aria-hidden="true" />
                    Topic clusters
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                    {heading ?? "Where to dig in — by topic"}
                </h2>
                <p className="text-gray-400 leading-relaxed">
                    {intro ?? "Five clusters that cover what most QUANT LAB conversations turn into. Each one bundles a pillar page with the supporting deep-dives so you can skim a topic end to end in twenty minutes."}
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {clusters.map((cluster) => (
                    <article
                        key={cluster.id}
                        className="rounded-xl border border-white/5 bg-white/[0.02] p-6"
                    >
                        <div
                            className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-gradient-to-r ${cluster.accent} bg-opacity-10 text-xs font-semibold tracking-wide text-white/90 mb-3`}
                        >
                            {cluster.title}
                        </div>
                        <Link
                            href={cluster.pillar.href}
                            className="group block mb-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg rounded"
                        >
                            <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors inline-flex items-center gap-2">
                                Pillar: {cluster.pillar.label}
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                        </Link>
                        <p className="text-sm text-gray-400 leading-relaxed mb-4">
                            {cluster.blurb}
                        </p>
                        <ul className="space-y-2">
                            {cluster.spokes.map((s) => (
                                <li key={s.href}>
                                    <Link
                                        href={s.href}
                                        className="group flex items-center justify-between gap-3 text-sm text-gray-300 hover:text-white transition-colors min-h-[36px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg rounded px-1"
                                    >
                                        <span>{s.label}</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-gray-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default TopicClusters;
