import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, RefreshCw } from "lucide-react";
import { type Author, authorUrl, DEFAULT_AUTHOR } from "@/lib/authors";

interface Props {
    /** Optional author override; defaults to Bill Beltz. */
    author?: Author;
    /** ISO date string, e.g. "2026-05-12" */
    publishedDate: string;
    /** ISO date string for last update. Hidden when same as publish date. */
    updatedDate?: string;
    /** Reading time in minutes. */
    readMinutes?: number;
    /** Optional className passthrough. */
    className?: string;
    /** Compact byline (single row, no avatar) — used inside cards. */
    compact?: boolean;
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
 * E-E-A-T byline. Renders the named author, role, publish date, last-updated
 * date (when newer than publish), and reading time. Always links the author
 * name to their /authors/[slug] bio.
 */
export function AuthorByline({
    author = DEFAULT_AUTHOR,
    publishedDate,
    updatedDate,
    readMinutes,
    className,
    compact,
}: Props) {
    const showUpdated =
        updatedDate && updatedDate !== publishedDate ? updatedDate : undefined;
    const href = authorUrl(author.slug);

    if (compact) {
        return (
            <p
                className={
                    "text-sm text-gray-500 " + (className ?? "")
                }
            >
                By{" "}
                <Link href={href} className="text-sky-400 hover:underline">
                    {author.name}
                </Link>
                {", "}
                {author.role} · Published {formatDate(publishedDate)}
                {showUpdated ? ` · Updated ${formatDate(showUpdated)}` : ""}
                {readMinutes ? ` · ${readMinutes} min read` : ""}
            </p>
        );
    }

    return (
        <div
            className={
                "flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 " +
                (className ?? "")
            }
            data-testid="author-byline"
        >
            {author.imagePath ? (
                <Link
                    href={href}
                    className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-white/10"
                    aria-label={`About ${author.name}`}
                >
                    <Image
                        src={author.imagePath}
                        alt={`${author.name}, ${author.role}`}
                        fill
                        sizes="48px"
                        className="object-cover"
                    />
                </Link>
            ) : null}

            <div className="flex flex-col text-sm text-gray-400">
                <span>
                    By{" "}
                    <Link
                        href={href}
                        className="font-medium text-sky-400 hover:underline"
                        rel="author"
                    >
                        {author.name}
                    </Link>
                    <span className="text-gray-500">, {author.role}</span>
                </span>
                <span className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
                    <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Published{" "}
                        <time dateTime={publishedDate}>
                            {formatDate(publishedDate)}
                        </time>
                    </span>
                    {showUpdated ? (
                        <span className="inline-flex items-center gap-1">
                            <RefreshCw className="h-3 w-3" />
                            Updated{" "}
                            <time dateTime={showUpdated}>
                                {formatDate(showUpdated)}
                            </time>
                        </span>
                    ) : null}
                    {readMinutes ? (
                        <span className="inline-flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {readMinutes} min read
                        </span>
                    ) : null}
                </span>
            </div>
        </div>
    );
}
