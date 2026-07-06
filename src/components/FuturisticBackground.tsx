"use client";

import React from "react";
import { usePathname } from "next/navigation";

/*
 * DEPTH FIELD v2 — sitewide depth layer (density pass over ORBITAL CORE).
 *
 * v1 read sparse; v2 layers the same room with several times the visual
 * information at the same runtime price:
 *
 *   1. NEBULA — three oversized soft glow blobs (violet / sky / cyan) that
 *      frame the content and drift on co-prime 73s/89s/97s loops.
 *   2. STARFIELD — one element carrying ~180 stars via five tiling
 *      radial-gradient background layers (non-square, co-prime tile sizes
 *      so no visible lattice). Painted once; never re-rasterized.
 *   3. HORIZON GLOW — a static ellipse where the floor meets the dark,
 *      echoing the hero's Tron floor so scrolling feels continuous.
 *   4. FLOOR / CEILING PLANES — the v1 CSS-3D grid planes, re-angled to
 *      a more visible rotateX(62deg) and given a fine 16px sub-grid via
 *      combo-class overrides (v1 rules in globals.css are untouched).
 *   5. LIGHT STREAK — a thin diagonal glint that sweeps the upper third
 *      every 16s (desktop, motion-safe only).
 *
 * Deliberately zero JS beyond usePathname: no rAF, no listeners, no state.
 * This renders on every one of 664 routes, so all motion is compositor-only
 * CSS (transform/opacity — see the "qlbg"/"DEPTH FIELD v2" blocks at the
 * end of globals.css), gated to >=640px and prefers-reduced-motion:
 * no-preference. Scroll parallax on the floor and stars is pure CSS
 * scroll-timeline (Chromium progressive enhancement; static elsewhere).
 * Mobile runs zero animation and drops the sky blob, the streak, and
 * three of the five star layers. Reduced motion keeps every layer visible
 * as one rich posed frame — only the streak is hidden.
 *
 * iOS-Safari note: 3D transforms live on absolutely positioned CHILDREN,
 * never on this fixed container itself (fixed + transform is a known
 * compositing-flicker class of bugs). The container only supplies
 * perspective, which is not a transform.
 *
 * Ordering matters: nebula (farthest) -> stars -> horizon glow -> planes ->
 * streak -> vignette. The vignette is kept byte-identical and painted
 * last — it is what guarantees text contrast site-wide.
 */
export function FuturisticBackground() {
    const pathname = usePathname();

    // Hide on questionnaire routes (public client-facing pages with light theme)
    if (pathname?.startsWith("/questionnaire")) return null;

    return (
        <div
            className="fixed inset-0 z-[-1] overflow-hidden bg-quant-bg pointer-events-none [perspective:1000px]"
            aria-hidden="true"
        >
            {/* Nebula depth: three drifting glow blobs framing the content
                (violet upper-left, sky upper-right, cyan lower-right) */}
            <div className="qlbg2-blob qlbg2-blob-violet" />
            <div className="qlbg2-blob qlbg2-blob-sky" />
            <div className="qlbg2-blob qlbg2-blob-cyan" />

            {/* Starfield: single element, all stars are tiled background
                gradients (no per-star DOM) */}
            <div className="qlbg2-stars" />

            {/* Horizon glow anchoring the floor plane */}
            <div className="qlbg2-horizon" />

            {/* Floor plane: perspective grid receding to a mask-faded horizon */}
            <div className="qlbg-plane qlbg-floor qlbg2-floor">
                <div className="qlbg-grid qlbg-grid-drift qlbg2-grid" />
            </div>

            {/* Ceiling plane: mirrored, fainter, fully static (removed on mobile) */}
            <div className="qlbg-plane qlbg-ceiling qlbg2-ceiling">
                <div className="qlbg-grid qlbg2-grid" />
            </div>

            {/* Diagonal light streak: fires every ~16s, desktop motion-safe only */}
            <div className="qlbg2-streak" />

            {/* Radial vignette to darken edges */}
            <div className="absolute inset-0 bg-quant-bg [mask-image:radial-gradient(circle_at_center,transparent_30%,black_85%)]" />
        </div>
    );
}
