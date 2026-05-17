import Link from "next/link";
import {
    Award,
    BookOpenCheck,
    Briefcase,
    FileCheck2,
    Workflow,
} from "lucide-react";

export interface ServiceTrustCaseStudy {
    /** Internal slug, e.g. "active-directory-pentest" — links to /work/<slug>. */
    slug: string;
    /** One-line case study headline, anonymized when needed. */
    headline: string;
    /** 1–2 short, verified outcomes — no fabricated metrics. */
    outcome: string;
    /** Industry label, e.g. "Regional financial services firm". */
    industry?: string;
}

interface Props {
    /** Verified case study to feature (use src/lib/case-studies.ts). */
    caseStudy?: ServiceTrustCaseStudy;
    /** Standards / frameworks the service aligns to (max 4). */
    standards?: string[];
    /** Optional className passthrough. */
    className?: string;
    /** Accent color — defaults to sky-400 (used by software pages). */
    accent?: "sky" | "red";
}

/**
 * Trust strip for service pages.
 *
 * Renders three columns of E-E-A-T signal: (1) a real case-study snippet,
 * (2) the engineering methodology link, and (3) credentials / standards
 * alignment. Designed to drop in immediately before "Related services" on
 * any /services/<slug> page.
 *
 * Do not invent case studies. Source only from src/lib/case-studies.ts.
 */
export function ServiceTrustStrip({
    caseStudy,
    standards = [
        "OWASP ASVS Level 2",
        "MITRE ATT&CK",
        "SOC 2 readiness",
        "PCI-DSS-aware Stripe",
    ],
    className,
    accent = "sky",
}: Props) {
    const accentText = accent === "red" ? "text-red-400" : "text-sky-400";
    const accentBorder =
        accent === "red"
            ? "hover:border-red-400/30"
            : "hover:border-sky-400/30";

    return (
        <div
            className={
                "grid grid-cols-1 md:grid-cols-3 gap-5 " + (className ?? "")
            }
            data-testid="service-trust-strip"
        >
            {caseStudy ? (
                <Link
                    href={`/work/${caseStudy.slug}`}
                    className={`group rounded-2xl border border-white/8 bg-[#0d1526]/60 p-6 transition-colors ${accentBorder}`}
                >
                    <p
                        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${accentText}`}
                    >
                        <Briefcase className="h-3.5 w-3.5" />
                        Case study
                    </p>
                    <h3 className="mt-3 text-base font-semibold text-white leading-snug group-hover:text-sky-100">
                        {caseStudy.headline}
                    </h3>
                    {caseStudy.industry ? (
                        <p className="mt-1 text-xs text-gray-500">
                            {caseStudy.industry}
                        </p>
                    ) : null}
                    <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                        {caseStudy.outcome}
                    </p>
                </Link>
            ) : (
                <div className="rounded-2xl border border-white/8 bg-[#0d1526]/40 p-6">
                    <p
                        className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${accentText}`}
                    >
                        <Briefcase className="h-3.5 w-3.5" />
                        Case studies
                    </p>
                    <h3 className="mt-3 text-base font-semibold text-white">
                        Real work, named clients
                    </h3>
                    <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                        Every case study on the site is a real, shipped engagement.{" "}
                        <Link href="/work" className={`${accentText} hover:underline`}>
                            See our work
                        </Link>
                        .
                    </p>
                </div>
            )}

            <Link
                href="/methodology"
                className={`group rounded-2xl border border-white/8 bg-[#0d1526]/60 p-6 transition-colors ${accentBorder}`}
            >
                <p
                    className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${accentText}`}
                >
                    <Workflow className="h-3.5 w-3.5" />
                    How we work
                </p>
                <h3 className="mt-3 text-base font-semibold text-white group-hover:text-sky-100">
                    The QUANT LAB engineering methodology
                </h3>
                <p className="mt-3 text-sm text-gray-400 leading-relaxed">
                    Discovery, architecture, two-week sprints, CI testing,
                    security review, deployment, and runbook handoff. Documented
                    end-to-end.
                </p>
            </Link>

            <Link
                href="/certifications-credentials"
                className={`group rounded-2xl border border-white/8 bg-[#0d1526]/60 p-6 transition-colors ${accentBorder}`}
            >
                <p
                    className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${accentText}`}
                >
                    <Award className="h-3.5 w-3.5" />
                    Standards we align to
                </p>
                <ul className="mt-3 space-y-1.5 text-sm text-gray-300">
                    {standards.slice(0, 4).map((s) => (
                        <li
                            key={s}
                            className="flex items-start gap-2"
                        >
                            <FileCheck2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-emerald-400" />
                            <span>{s}</span>
                        </li>
                    ))}
                </ul>
                <p className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-sky-400">
                    <BookOpenCheck className="h-3 w-3" />
                    Full credentials list
                </p>
            </Link>
        </div>
    );
}
