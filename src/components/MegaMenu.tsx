"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
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

const MegaMenuPanel = dynamic(
    () => import("./MegaMenuPanel").then((m) => m.MegaMenuPanel),
    { ssr: false }
);

const focusRing =
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg rounded-md";

export function MegaMenu({ label, columns, footerHref, footerLabel, triggerClassName }: Props) {
    const [open, setOpen] = useState(false);
    const [primed, setPrimed] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const closeTimer = useRef<number | null>(null);

    const openMenu = () => {
        if (closeTimer.current) {
            window.clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
        setPrimed(true);
        setOpen(true);
    };

    const scheduleClose = () => {
        if (closeTimer.current) window.clearTimeout(closeTimer.current);
        closeTimer.current = window.setTimeout(() => setOpen(false), 120);
    };

    const prime = () => {
        if (!primed) setPrimed(true);
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
                onPointerEnter={prime}
                className={`${triggerClassName ?? "hover:text-white text-gray-300"} inline-flex items-center gap-1 min-h-[44px] px-1 text-sm font-medium transition-colors ${focusRing}`}
            >
                {label}
                <ChevronDown
                    className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
                    aria-hidden="true"
                />
            </button>

            {primed && open && (
                <MegaMenuPanel
                    label={label}
                    columns={columns}
                    footerHref={footerHref}
                    footerLabel={footerLabel}
                    onClose={() => setOpen(false)}
                    onMouseEnter={openMenu}
                    onMouseLeave={scheduleClose}
                />
            )}
        </div>
    );
}

export default MegaMenu;
