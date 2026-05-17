import Link from "next/link";
import { CheckCircle2, FileSearch } from "lucide-react";
import {
    DEFAULT_EDITORIAL_REVIEWER,
    type Author,
    authorUrl,
} from "@/lib/authors";

interface Props {
    /** Reviewer/editor — defaults to QUANT LAB USA Editorial. */
    reviewer?: Author;
    /** ISO date of the review pass; defaults to undefined (omitted). */
    reviewedDate?: string;
    /** When true, show the inline "fact-check" link with FileSearch icon. */
    showFactCheck?: boolean;
    /** Optional className passthrough. */
    className?: string;
}

function formatDate(iso: string): string {
    try {
        const d = new Date(`${iso}T12:00:00Z`);
        return d.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
        });
    } catch {
        return iso;
    }
}

/**
 * Editorial footer — renders the "Reviewed by" signal Google's E-E-A-T
 * guidelines look for, plus a link to the editorial / fact-check policies.
 *
 * Place this at the bottom of every long-form post, immediately before the
 * related-reading section or CTA.
 */
export function EditorialFooter({
    reviewer = DEFAULT_EDITORIAL_REVIEWER,
    reviewedDate,
    showFactCheck = true,
    className,
}: Props) {
    return (
        <aside
            className={
                "rounded-2xl border border-white/8 bg-[#0d1526]/60 p-6 text-sm leading-relaxed text-gray-300 " +
                (className ?? "")
            }
            aria-label="Editorial review"
        >
            <p className="flex items-start gap-2 text-gray-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                <span>
                    Reviewed by{" "}
                    <Link
                        href={authorUrl(reviewer.slug)}
                        className="font-medium text-sky-400 hover:underline"
                    >
                        {reviewer.name}
                    </Link>{" "}
                    — {reviewer.role}
                    {reviewedDate ? (
                        <>
                            {" "}
                            ·{" "}
                            <time dateTime={reviewedDate}>
                                {formatDate(reviewedDate)}
                            </time>
                        </>
                    ) : null}
                    . Every published post is reviewed by an engineer or
                    security practitioner on staff before publish.
                </span>
            </p>
            {showFactCheck ? (
                <p className="mt-3 flex items-start gap-2 text-gray-400">
                    <FileSearch className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                    <span>
                        See our{" "}
                        <Link
                            href="/about/editorial-policy"
                            className="text-sky-400 hover:underline"
                        >
                            editorial policy
                        </Link>{" "}
                        and{" "}
                        <Link
                            href="/about/fact-checking"
                            className="text-sky-400 hover:underline"
                        >
                            fact-checking process
                        </Link>
                        . Found something inaccurate?{" "}
                        <a
                            href="mailto:beltz@quantlabusa.dev?subject=Editorial%20correction"
                            className="text-sky-400 hover:underline"
                        >
                            Email a correction
                        </a>
                        .
                    </span>
                </p>
            ) : null}
        </aside>
    );
}
