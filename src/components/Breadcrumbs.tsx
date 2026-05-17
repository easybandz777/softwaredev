import React from "react";
import Link from "next/link";

export type Crumb = {
    label: string;
    href?: string;
};

type Props = {
    items: Crumb[];
    className?: string;
    align?: "left" | "center";
};

/**
 * Accessible, schema-friendly breadcrumb trail. Drop-in replacement for the
 * hand-rolled <nav aria-label="Breadcrumb"> blocks that were copy-pasted across
 * city, service, blog, glossary, and industry pages.
 *
 * Renders BreadcrumbList JSON-LD inline so every page that uses this gets
 * consistent structured data for Google's breadcrumb rich result.
 */
export function Breadcrumbs({ items, className, align = "left" }: Props) {
    if (!items || items.length === 0) return null;

    const justify = align === "center" ? "justify-center" : "";

    const ldItems = items
        .map((c, i) => {
            const url = c.href
                ? c.href.startsWith("http")
                    ? c.href
                    : `https://quantlabusa.dev${c.href}`
                : undefined;
            const base: { "@type": "ListItem"; position: number; name: string; item?: string } = {
                "@type": "ListItem",
                position: i + 1,
                name: c.label,
            };
            if (url) base.item = url;
            return base;
        });

    const ld = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: ldItems,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
            />
            <nav aria-label="Breadcrumb" className={`mb-8 ${className ?? ""}`}>
                <ol className={`flex items-center gap-2 text-xs text-gray-400 ${justify}`}>
                    {items.map((c, i) => {
                        const isLast = i === items.length - 1;
                        return (
                            <React.Fragment key={`${c.label}-${i}`}>
                                <li>
                                    {c.href && !isLast ? (
                                        <Link
                                            href={c.href}
                                            className="hover:text-sky-400 transition-colors"
                                        >
                                            {c.label}
                                        </Link>
                                    ) : (
                                        <span className={isLast ? "text-gray-300" : ""}>
                                            {c.label}
                                        </span>
                                    )}
                                </li>
                                {!isLast && (
                                    <li aria-hidden="true" className="text-gray-700">
                                        ›
                                    </li>
                                )}
                            </React.Fragment>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}

export default Breadcrumbs;
