"use client";

import React from "react";
import { usePathname } from "next/navigation";

export function FuturisticBackground() {
    const pathname = usePathname();

    // Hide on questionnaire routes (public client-facing pages with light theme)
    if (pathname?.startsWith("/questionnaire")) return null;

    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-quant-bg pointer-events-none" aria-hidden="true">

            {/* Grid Lines */}
            <div
                className="absolute inset-0 opacity-[0.025]"
                style={{
                    backgroundImage: 'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Radial vignette to darken edges */}
            <div className="absolute inset-0 bg-quant-bg [mask-image:radial-gradient(circle_at_center,transparent_30%,black_85%)]" />
        </div>
    );
}
