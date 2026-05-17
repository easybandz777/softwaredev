import Link from "next/link";
import {
    Award,
    BookOpenCheck,
    CalendarDays,
    Building2,
    FileSearch,
    UsersRound,
} from "lucide-react";
import { AREA_SERVED_CITIES } from "@/lib/schemas/organization";

/**
 * Home-page E-E-A-T strip — six small trust cards aimed at the things Google
 * Helpful Content + Quality Raters look for on a homepage: real entity, real
 * location, real team, named editorial standards, named credentials,
 * verifiable footprint.
 *
 * Numbers shown here are sourced from organization.ts and case-studies.ts.
 * If you change foundingDate or service area, this surface updates with it.
 */

const FOUNDED_YEAR = 2024; // from organization.ts foundingDate "2024-11-09"
const CITIES_SERVED = AREA_SERVED_CITIES.length;

export function EeatStrip() {
    const tiles = [
        {
            icon: Building2,
            label: "Registered entity",
            value: "QUANT LAB USA INC",
            sub: "Georgia C-Corp · SOS #26086454",
            href: "/certifications-credentials",
        },
        {
            icon: CalendarDays,
            label: "Founded",
            value: `${FOUNDED_YEAR}`,
            sub: "Macon, Georgia HQ",
            href: "/about",
        },
        {
            icon: UsersRound,
            label: "Named authors",
            value: "Real bylines",
            sub: "Bios, expertise, and bibliography",
            href: "/authors",
        },
        {
            icon: Award,
            label: "Standards we align to",
            value: "OWASP · MITRE · SOC 2",
            sub: "Full alignment list",
            href: "/certifications-credentials",
        },
        {
            icon: BookOpenCheck,
            label: "Cities served",
            value: `${CITIES_SERVED} US metros`,
            sub: "Atlanta, Macon, and 12 more",
            href: "/locations",
        },
        {
            icon: FileSearch,
            label: "Editorial policy",
            value: "Sourced & reviewed",
            sub: "Fact-checking & corrections",
            href: "/about/fact-checking",
        },
    ];

    return (
        <section
            className="container mx-auto px-6 py-16"
            aria-label="Trust signals — who we are and how we publish"
        >
            <div className="rounded-2xl border border-white/8 bg-[#0d1526]/60 p-6 md:p-10">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-2">
                    Trust signals
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-3">
                    Real entity. Real authors. Real footprint.
                </h2>
                <p className="text-gray-400 max-w-2xl leading-relaxed mb-8">
                    Everything below is verifiable — Georgia Secretary of State
                    filing, a registered EIN, a Macon HQ address, and named
                    authors with full bios on every long-form post.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {tiles.map((t) => {
                        const Icon = t.icon;
                        return (
                            <Link
                                key={t.label}
                                href={t.href}
                                className="group flex flex-col rounded-xl border border-white/8 bg-[#0a1120] p-5 hover:border-sky-400/30 transition-colors"
                            >
                                <Icon className="h-5 w-5 text-sky-400" />
                                <p className="mt-3 text-xs uppercase tracking-wider text-gray-500">
                                    {t.label}
                                </p>
                                <p className="text-base font-semibold text-white mt-1">
                                    {t.value}
                                </p>
                                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                                    {t.sub}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
