"use client";

import React from "react";
import Link from "next/link";
import type { MegaMenuColumn } from "./MegaMenu";

type Props = {
    label: string;
    columns: MegaMenuColumn[];
    footerHref?: string;
    footerLabel?: string;
    onClose: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};

const focusRing =
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg rounded-md";

export function MegaMenuPanel({ label, columns, footerHref, footerLabel, onClose, onMouseEnter, onMouseLeave }: Props) {
    return (
        <div
            role="menu"
            aria-label={`${label} menu`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[min(92vw,720px)] z-[55] rounded-2xl border border-white/10 bg-quant-bg/95 backdrop-blur-xl shadow-2xl p-5"
        >
            <div
                className={`grid gap-5 ${
                    columns.length >= 3 ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3" : "grid-cols-1 sm:grid-cols-2"
                }`}
            >
                {columns.map((col) => (
                    <div key={col.heading}>
                        {col.href ? (
                            <Link
                                href={col.href}
                                className={`block text-xs font-semibold uppercase tracking-wide text-indigo-300 hover:text-indigo-200 mb-2 ${focusRing}`}
                            >
                                {col.heading}
                            </Link>
                        ) : (
                            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-300 mb-2">
                                {col.heading}
                            </p>
                        )}
                        <ul className="flex flex-col gap-1">
                            {col.items.map((item) => (
                                <li key={item.href}>
                                    <Link
                                        role="menuitem"
                                        href={item.href}
                                        onClick={onClose}
                                        className={`block rounded-lg px-2 py-2 text-sm text-gray-200 hover:text-white hover:bg-white/5 transition-colors ${focusRing}`}
                                    >
                                        <span className="font-medium">{item.label}</span>
                                        {item.description && (
                                            <span className="block text-xs text-gray-400 mt-0.5 leading-snug">
                                                {item.description}
                                            </span>
                                        )}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {footerHref && footerLabel && (
                <div className="mt-4 pt-4 border-t border-white/10">
                    <Link
                        href={footerHref}
                        onClick={onClose}
                        className={`inline-flex items-center text-sm font-medium text-indigo-300 hover:text-indigo-200 ${focusRing}`}
                    >
                        {footerLabel}
                    </Link>
                </div>
            )}
        </div>
    );
}

export default MegaMenuPanel;
