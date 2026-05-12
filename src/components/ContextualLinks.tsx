import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase } from "lucide-react";

type LinkEntry = {
    href: string;
    label: string;
    kind: "case" | "blog" | "guide";
    blurb: string;
};

type Props = {
    heading?: string;
    items?: LinkEntry[];
    className?: string;
};

const DEFAULT_ITEMS: LinkEntry[] = [
    {
        href: "/work/northcrest-fence",
        label: "Northcrest Fence Case Study",
        kind: "case",
        blurb: "Proposals from days to minutes with a custom sales platform.",
    },
    {
        href: "/work/j5-sales-os",
        label: "J5 Sales OS Case Study",
        kind: "case",
        blurb: "AI-powered lead engine for niche-vertical sales teams.",
    },
    {
        href: "/blog/custom-crm-development-guide",
        label: "Custom CRM Development Guide",
        kind: "guide",
        blurb: "When custom beats Salesforce, HubSpot, and Zoho.",
    },
];

function iconFor(kind: LinkEntry["kind"]) {
    if (kind === "case") return Briefcase;
    return BookOpen;
}

function labelFor(kind: LinkEntry["kind"]) {
    if (kind === "case") return "Case study";
    if (kind === "guide") return "Guide";
    return "Article";
}

export function ContextualLinks({ heading = "You might also want", items, className }: Props) {
    const entries = (items && items.length > 0 ? items : DEFAULT_ITEMS).slice(0, 6);

    return (
        <section
            aria-label={heading}
            className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 ${className ?? ""}`}
        >
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-5">{heading}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {entries.map((item) => {
                    const Icon = iconFor(item.kind);
                    return (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className="group flex flex-col h-full rounded-xl border border-white/5 bg-white/[0.02] hover:border-indigo-400/40 hover:bg-white/[0.05] transition-colors p-5 min-h-[140px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg"
                            >
                                <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-indigo-300 font-semibold mb-2">
                                    <Icon className="w-4 h-4" aria-hidden="true" />
                                    {labelFor(item.kind)}
                                </div>
                                <h3 className="text-white font-semibold leading-snug mb-2">{item.label}</h3>
                                <p className="text-sm text-gray-400 leading-snug flex-1">{item.blurb}</p>
                                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-indigo-300 group-hover:text-indigo-200">
                                    Read more
                                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                </span>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}

export default ContextualLinks;
