import React from "react";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

type IndustryEntry = { slug: string; label: string; blurb: string };

const INDUSTRIES: IndustryEntry[] = [
    { slug: "fintech", label: "Fintech", blurb: "Trading systems, brokerage integrations, Stripe-grade payment infrastructure." },
    { slug: "construction", label: "Construction", blurb: "Estimating engines, lead routing, project tracking, QuickBooks sync." },
    { slug: "insurance", label: "Insurance", blurb: "Policy management, claims, broker portals, document workflows." },
    { slug: "e-commerce", label: "E-Commerce", blurb: "Custom carts, subscription billing, Shopify alternatives and migrations." },
    { slug: "healthcare", label: "Healthcare", blurb: "HIPAA-aware platforms, intake, scheduling, ops dashboards." },
    { slug: "saas", label: "SaaS", blurb: "Multi-tenant architecture, billing, onboarding, customer success tooling." },
    { slug: "legal-services", label: "Legal Services", blurb: "Matter management, client intake, document automation, billing." },
    { slug: "manufacturing", label: "Manufacturing", blurb: "Inventory, MES integrations, supplier portals, traceability." },
    { slug: "real-estate", label: "Real Estate", blurb: "CRM for agents, lead routing, listing automation, transaction tracking." },
];

type Props = {
    /** Industries you want to highlight on this page (slugs). Falls back to a sensible default. */
    industries?: string[];
    heading?: string;
    className?: string;
    max?: number;
};

export function RelatedIndustries({ industries, heading, className, max = 4 }: Props) {
    let items: IndustryEntry[];
    if (industries && industries.length > 0) {
        items = industries
            .map((s) => INDUSTRIES.find((i) => i.slug === s))
            .filter((i): i is IndustryEntry => Boolean(i));
    } else {
        items = INDUSTRIES.slice(0, max);
    }
    items = items.slice(0, max);
    if (items.length === 0) return null;

    const title = heading ?? "Industries we build for";

    return (
        <section
            aria-label={title}
            className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 ${className ?? ""}`}
        >
            <div className="flex items-baseline justify-between gap-4 mb-5">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight inline-flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-emerald-300" aria-hidden="true" />
                    {title}
                </h2>
                <Link
                    href="/industries"
                    className="text-sm font-medium text-emerald-300 hover:text-emerald-200 transition-colors min-h-[44px] inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg rounded"
                >
                    All industries
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {items.map((i) => (
                    <li key={i.slug}>
                        <Link
                            href={`/industries/${i.slug}`}
                            className="group block rounded-xl border border-white/5 bg-white/[0.02] hover:border-emerald-400/40 hover:bg-white/[0.05] transition-colors p-4 min-h-[88px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg"
                        >
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-white font-semibold">{i.label}</span>
                                <ArrowRight
                                    className="w-4 h-4 text-gray-400 group-hover:text-emerald-300 transition-colors flex-shrink-0"
                                    aria-hidden="true"
                                />
                            </div>
                            <p className="mt-1 text-sm text-gray-400 leading-snug">{i.blurb}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default RelatedIndustries;
