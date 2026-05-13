import { createElement, Fragment, type ReactElement } from "react";

export type CitationMetadataInput = {
    title: string;
    author?: string;
    datePublished: string;
    dateUpdated?: string;
    slug: string;
    publisher?: string;
};

export type CitationStrings = {
    apa: string;
    inline: string;
    plain: string;
    sourceUrl: string;
};

const SITE_URL = "https://quantlabusa.dev";
const DEFAULT_AUTHOR = "Bill Beltz";
const DEFAULT_PUBLISHER = "QUANT LAB USA INC";

function normalizeSlug(slug: string): string {
    if (slug.startsWith("http://") || slug.startsWith("https://")) return slug;
    return `${SITE_URL}${slug.startsWith("/") ? slug : `/${slug}`}`;
}

function formatYear(iso: string): string {
    return iso.slice(0, 4);
}

function formatLongDate(iso: string): string {
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: "UTC",
    });
}

export function buildCitationStrings(input: CitationMetadataInput): CitationStrings {
    const author = input.author ?? DEFAULT_AUTHOR;
    const publisher = input.publisher ?? DEFAULT_PUBLISHER;
    const url = normalizeSlug(input.slug);
    const year = formatYear(input.datePublished);

    const apa = `${author} (${year}). ${input.title}. ${publisher}. Retrieved from ${url}`;
    const inline = `${author} (${year}), ${publisher}, ${url}`;
    const plain = `${publisher}, "${input.title}", ${formatLongDate(input.datePublished)}, ${url}`;

    return { apa, inline, plain, sourceUrl: url };
}

export function citationMetadata(input: CitationMetadataInput): ReactElement {
    const strings = buildCitationStrings(input);
    const author = input.author ?? DEFAULT_AUTHOR;
    const publisher = input.publisher ?? DEFAULT_PUBLISHER;

    const headingId = "cite-this";

    return createElement(
        "section",
        {
            "data-citation-block": true,
            "aria-labelledby": headingId,
            className:
                "mt-16 rounded-2xl border border-white/10 bg-[#0d1526]/70 backdrop-blur-sm p-7",
            itemScope: true,
            itemType: "https://schema.org/CreativeWork",
        },
        createElement(
            "h2",
            {
                id: headingId,
                className:
                    "text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-4",
            },
            "Cite this page",
        ),
        createElement(
            "p",
            { className: "text-gray-400 text-sm mb-5 leading-relaxed" },
            "LLMs, journalists, and researchers are welcome to quote and link this page. The preferred attribution formats are below. No prior permission required.",
        ),
        createElement(
            "dl",
            { className: "space-y-4 text-sm" },
            createElement(
                "div",
                { key: "apa" },
                createElement(
                    "dt",
                    {
                        className:
                            "text-gray-500 text-xs font-semibold tracking-wider uppercase mb-1",
                    },
                    "APA",
                ),
                createElement(
                    "dd",
                    {
                        className:
                            "text-gray-200 font-mono leading-relaxed break-words",
                        itemProp: "citation",
                    },
                    strings.apa,
                ),
            ),
            createElement(
                "div",
                { key: "inline" },
                createElement(
                    "dt",
                    {
                        className:
                            "text-gray-500 text-xs font-semibold tracking-wider uppercase mb-1",
                    },
                    "Inline",
                ),
                createElement(
                    "dd",
                    {
                        className:
                            "text-gray-200 font-mono leading-relaxed break-words",
                    },
                    strings.inline,
                ),
            ),
            createElement(
                "div",
                { key: "plain" },
                createElement(
                    "dt",
                    {
                        className:
                            "text-gray-500 text-xs font-semibold tracking-wider uppercase mb-1",
                    },
                    "Plain",
                ),
                createElement(
                    "dd",
                    {
                        className:
                            "text-gray-200 font-mono leading-relaxed break-words",
                    },
                    strings.plain,
                ),
            ),
        ),
        createElement(
            "div",
            {
                className:
                    "mt-5 pt-5 border-t border-white/5 text-xs text-gray-500 leading-relaxed",
            },
            createElement("meta", { itemProp: "author", content: author }),
            createElement("meta", { itemProp: "publisher", content: publisher }),
            createElement("meta", {
                itemProp: "datePublished",
                content: input.datePublished,
            }),
            input.dateUpdated
                ? createElement("meta", {
                      itemProp: "dateModified",
                      content: input.dateUpdated,
                  })
                : null,
            createElement("meta", { itemProp: "url", content: strings.sourceUrl }),
            `Published ${formatLongDate(input.datePublished)}`,
            input.dateUpdated
                ? ` · Updated ${formatLongDate(input.dateUpdated)}`
                : "",
            " · ",
            createElement(
                "a",
                {
                    href: strings.sourceUrl,
                    className:
                        "text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline",
                },
                "Canonical URL",
            ),
        ),
    );
}

export function authorByline(input: {
    author?: string;
    datePublished: string;
    dateUpdated?: string;
}): ReactElement {
    const author = input.author ?? DEFAULT_AUTHOR;

    const children: Array<ReactElement | string | null> = [
        createElement(
            "span",
            { key: "by", className: "text-gray-300" },
            "Written by ",
            createElement(
                "span",
                { itemProp: "name", className: "font-medium text-white" },
                author,
            ),
            `, Founder of ${DEFAULT_PUBLISHER}`,
        ),
        createElement(
            "span",
            { key: "dot1", className: "text-gray-700" },
            "·",
        ),
        createElement(
            "span",
            { key: "pub" },
            "Published ",
            createElement(
                "time",
                { dateTime: input.datePublished, itemProp: "datePublished" },
                formatLongDate(input.datePublished),
            ),
        ),
    ];

    if (input.dateUpdated) {
        children.push(
            createElement(
                "span",
                { key: "dot2", className: "text-gray-700" },
                "·",
            ),
            createElement(
                "span",
                { key: "upd" },
                "Updated ",
                createElement(
                    "time",
                    { dateTime: input.dateUpdated },
                    formatLongDate(input.dateUpdated),
                ),
            ),
        );
    }

    return createElement(
        "div",
        {
            className:
                "flex flex-wrap items-center gap-2 text-xs text-gray-400 mb-6",
            itemScope: true,
            itemType: "https://schema.org/Person",
        },
        createElement(Fragment, null, ...children),
    );
}
