import { BookOpen, ExternalLink } from "lucide-react";

export interface SourceItem {
    /** Display label for the citation. */
    label: string;
    /** Outbound URL to the authoritative source. */
    href: string;
    /** Publisher / domain shown after the label, e.g. "OWASP", "NIST", "Stripe Docs". */
    publisher?: string;
    /** ISO publish or last-accessed date for the cited material. */
    date?: string;
}

interface Props {
    /** Citations rendered as a numbered list. */
    items: SourceItem[];
    /** Heading text — defaults to "Sources & references". */
    title?: string;
    /** Optional className passthrough. */
    className?: string;
}

/**
 * Sources / citations block.
 *
 * Use for any claim, statistic, or recommendation that is not common knowledge.
 * Prefer .gov, .edu, peer-reviewed, or primary vendor docs over secondary
 * blog posts. All links open in a new tab with rel="noopener nofollow" — these
 * are reference citations, not endorsements.
 */
export function Sources({ items, title = "Sources & references", className }: Props) {
    if (!items || items.length === 0) return null;

    return (
        <section
            className={
                "rounded-2xl border border-white/8 bg-[#0d1526]/40 p-6 " +
                (className ?? "")
            }
            aria-label={title}
        >
            <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-white">
                <BookOpen className="h-4 w-4 text-sky-400" />
                {title}
            </h2>
            <ol className="space-y-2 text-sm text-gray-300">
                {items.map((item, idx) => (
                    <li key={`${item.href}-${idx}`} className="flex items-baseline gap-2">
                        <span className="font-mono text-xs text-gray-500">
                            [{idx + 1}]
                        </span>
                        <span className="flex-1">
                            <a
                                href={item.href}
                                target="_blank"
                                rel="noopener nofollow"
                                className="text-sky-400 hover:underline"
                            >
                                {item.label}
                                <ExternalLink className="ml-1 inline-block h-3 w-3" />
                            </a>
                            {item.publisher ? (
                                <span className="text-gray-500"> · {item.publisher}</span>
                            ) : null}
                            {item.date ? (
                                <span className="text-gray-500"> · {item.date}</span>
                            ) : null}
                        </span>
                    </li>
                ))}
            </ol>
        </section>
    );
}
