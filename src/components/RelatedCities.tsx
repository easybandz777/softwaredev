import React from "react";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

type Props = {
    currentCity?: string;
    heading?: string;
    className?: string;
    max?: number;
};

type CityEntry = { slug: string; label: string; region: Region };

type Region = "ga" | "se" | "sw" | "ne" | "mw" | "wc";

const CITIES: CityEntry[] = [
    { slug: "macon-ga", label: "Macon, GA", region: "ga" },
    { slug: "atlanta-ga", label: "Atlanta, GA", region: "ga" },
    { slug: "augusta-ga", label: "Augusta, GA", region: "ga" },
    { slug: "columbus-ga", label: "Columbus, GA", region: "ga" },
    { slug: "savannah-ga", label: "Savannah, GA", region: "ga" },
    { slug: "charlotte-nc", label: "Charlotte, NC", region: "se" },
    { slug: "nashville-tn", label: "Nashville, TN", region: "se" },
    { slug: "miami-fl", label: "Miami, FL", region: "se" },
    { slug: "austin-tx", label: "Austin, TX", region: "sw" },
    { slug: "dallas-tx", label: "Dallas, TX", region: "sw" },
    { slug: "new-york-ny", label: "New York, NY", region: "ne" },
    { slug: "chicago-il", label: "Chicago, IL", region: "mw" },
    { slug: "seattle-wa", label: "Seattle, WA", region: "wc" },
    { slug: "san-francisco-ca", label: "San Francisco, CA", region: "wc" },
];

const REGION_PRIORITY: Record<Region, Region[]> = {
    ga: ["ga", "se", "sw", "ne", "mw", "wc"],
    se: ["se", "ga", "sw", "ne", "mw", "wc"],
    sw: ["sw", "se", "ga", "wc", "mw", "ne"],
    ne: ["ne", "mw", "se", "ga", "wc", "sw"],
    mw: ["mw", "ne", "se", "wc", "ga", "sw"],
    wc: ["wc", "sw", "mw", "ne", "se", "ga"],
};

export function RelatedCities({ currentCity, heading, className, max = 6 }: Props) {
    const current = CITIES.find((c) => c.slug === currentCity);
    const candidates = CITIES.filter((c) => c.slug !== currentCity);

    let ordered: CityEntry[];
    if (current) {
        const priority = REGION_PRIORITY[current.region];
        ordered = [...candidates].sort((a, b) => {
            const aRank = priority.indexOf(a.region);
            const bRank = priority.indexOf(b.region);
            if (aRank !== bRank) return aRank - bRank;
            return a.label.localeCompare(b.label);
        });
    } else {
        ordered = candidates;
    }

    const items = ordered.slice(0, max);
    const titleLabel = heading ?? (current ? `Cities Near ${current.label}` : "Where We Work");

    return (
        <section
            aria-label={titleLabel}
            className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 ${className ?? ""}`}
        >
            <div className="flex items-baseline justify-between gap-4 mb-5">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight inline-flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-indigo-300" aria-hidden="true" />
                    {titleLabel}
                </h2>
                <Link
                    href="/services"
                    className="text-sm font-medium text-indigo-300 hover:text-indigo-200 transition-colors min-h-[44px] inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg rounded"
                >
                    All cities
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
            </div>
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {items.map((c) => (
                    <li key={c.slug}>
                        <Link
                            href={`/software-development-${c.slug}`}
                            className="group flex items-center justify-between gap-2 rounded-xl border border-white/5 bg-white/[0.02] hover:border-indigo-400/40 hover:bg-white/[0.05] transition-colors px-4 py-3 min-h-[56px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg"
                        >
                            <span className="text-white font-medium text-sm sm:text-base">{c.label}</span>
                            <ArrowRight
                                className="w-4 h-4 text-gray-400 group-hover:text-indigo-300 transition-colors flex-shrink-0"
                                aria-hidden="true"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default RelatedCities;
