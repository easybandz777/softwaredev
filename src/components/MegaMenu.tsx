"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export type MegaMenuColumn = {
    heading: string;
    href?: string;
    items: { label: string; href: string; description?: string }[];
};

type Props = {
    label: string;
    columns: MegaMenuColumn[];
    footerHref?: string;
    footerLabel?: string;
    triggerClassName?: string;
};

const focusRing =
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg rounded-md";

export function MegaMenu({ label, columns, footerHref, footerLabel, triggerClassName }: Props) {
    const [open, setOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const panelRef = useRef<HTMLDivElement | null>(null);
    const closeTimer = useRef<number | null>(null);

    const openMenu = () => {
        if (closeTimer.current) {
            window.clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
        setOpen(true);
    };

    const scheduleClose = () => {
        if (closeTimer.current) window.clearTimeout(closeTimer.current);
        closeTimer.current = window.setTimeout(() => setOpen(false), 120);
    };

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpen(false);
                triggerRef.current?.focus();
            }
        };
        const onClick = (e: MouseEvent) => {
            if (!containerRef.current) return;
            if (!containerRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener("keydown", onKey);
        document.addEventListener("mousedown", onClick);
        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("mousedown", onClick);
        };
    }, [open]);

    return (
        <div
            ref={containerRef}
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={scheduleClose}
        >
            <button
                ref={triggerRef}
                type="button"
                aria-haspopup="true"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                onFocus={openMenu}
                className={`${triggerClassName ?? "hover:text-white text-gray-300"} inline-flex items-center gap-1 min-h-[44px] px-1 text-sm font-medium transition-colors ${focusRing}`}
            >
                {label}
                <ChevronDown
                    className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                    aria-hidden="true"
                />
            </button>

            {open && (
                <div
                    ref={panelRef}
                    role="menu"
                    aria-label={`${label} menu`}
                    onMouseEnter={openMenu}
                    onMouseLeave={scheduleClose}
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
                                                onClick={() => setOpen(false)}
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
                                onClick={() => setOpen(false)}
                                className={`inline-flex items-center text-sm font-medium text-indigo-300 hover:text-indigo-200 ${focusRing}`}
                            >
                                {footerLabel}
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default MegaMenu;
