"use client";

import React, { useEffect, useState } from "react";
import {
    motion,
    useMotionValueEvent,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";

/*
 * ScrollRail — "MISSION RAIL" waypoint navigation for the Build Sequence
 * landing page.
 *
 * A fixed vertical rail hugging the right edge (desktop lg+ only, hidden
 * entirely below lg): a 2px track carrying a scroll-progress fill
 * (useScroll -> spring -> scaleY on a sky->cyan gradient) plus one waypoint
 * dot per section. The active section is detected by a single
 * IntersectionObserver watching a thin band around the viewport's vertical
 * center (rootMargin -45%/-45%), so a dot lights up exactly when its
 * section dominates the screen.
 *
 * Engineering guarantees:
 * - framer-motion useScroll/useTransform only — no CSS scroll-timeline, no
 *   raw scroll listeners writing styles. All rail motion is opacity /
 *   transform; the active-dot glow is a static box-shadow.
 * - Real <nav aria-label="Page sections"> of <button>s: keyboard focusable
 *   with a visible focus ring, aria-current on the active waypoint, and a
 *   focus-within override that reveals the rail for keyboard users even
 *   before the scroll threshold.
 * - prefers-reduced-motion: the rail still renders (it is navigation) but
 *   every scroll-linked effect collapses to static — fully opaque rail,
 *   full gradient track, no smooth scrolling, no scale/slide transitions.
 *   The reduced flag is gated behind a post-mount state so SSR and the
 *   first client render always bind the same motion values (useReducedMotion
 *   is null on the server; branching render output on it directly would
 *   strand the server's opacity:0 through hydration, leaving an invisible
 *   but clickable rail). The static values (opacity/scale 1) stay inside
 *   framer's style pipeline so the swap re-renders cleanly.
 * - The rail fades in only after ~60% of the hero (hero is min-h-[100vh],
 *   so the threshold derives from the live viewport height); pointer
 *   events are enabled only while visible.
 * - Fixed positioning: zero layout contribution, zero CLS. The observer
 *   and both media/resize listeners are created in effects with full
 *   cleanup — React 19 strict-mode double-effect safe. Below lg no
 *   observer runs at all.
 */

export interface ScrollRailSection {
    /** DOM id of the target <section> (e.g. "services"). */
    id: string;
    /** Human-readable waypoint label (e.g. "Services"). */
    label: string;
}

interface ScrollRailProps {
    sections: ScrollRailSection[];
}

const DESKTOP_QUERY = "(min-width: 1024px)";
/** Section becomes active when it crosses the middle 10% band of the viewport. */
const OBSERVER_ROOT_MARGIN = "-45% 0px -45% 0px";
/** Rail fade-in window, as fractions of the (100vh) hero height. */
const REVEAL_START_VH = 0.6;
const REVEAL_END_VH = 0.9;

export function ScrollRail({ sections }: ScrollRailProps) {
    const systemReducedMotion = useReducedMotion();
    const [mounted, setMounted] = useState(false);
    const [activeId, setActiveId] = useState<string | null>(null);
    const [visible, setVisible] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [viewportH, setViewportH] = useState(800);

    // Post-mount gate: false during SSR and the hydration render, so both
    // always produce the identical scroll-linked markup.
    const reducedMotion = mounted && systemReducedMotion === true;

    const { scrollY, scrollYProgress } = useScroll();
    // Modest spring so the fill glides rather than ticks. stiffness <= 120.
    const fillScale = useSpring(scrollYProgress, {
        stiffness: 90,
        damping: 26,
        restDelta: 0.001,
    });
    const railOpacity = useTransform(
        scrollY,
        [viewportH * REVEAL_START_VH, viewportH * REVEAL_END_VH],
        [0, 1],
    );

    // Pointer events follow visibility; a state flip only on threshold
    // crossings, never per scroll frame.
    useMotionValueEvent(railOpacity, "change", (value) => {
        setVisible(value > 0.5);
    });

    // Seed visibility for mid-page loads (refresh/deep-link): "change" only
    // fires on the next scroll, so read the initial value once per rebuild.
    useEffect(() => {
        setVisible(railOpacity.get() > 0.5);
    }, [railOpacity]);

    // Environment tracking: mount flag (for the reduced-motion gate above),
    // desktop tier + live viewport height (the hero is min-h-[100vh], so 60%
    // of the hero is 60% of the viewport).
    useEffect(() => {
        setMounted(true);
        const desktopQuery = window.matchMedia(DESKTOP_QUERY);
        const onDesktopChange = () => {
            setIsDesktop(desktopQuery.matches);
        };
        const onResize = () => {
            setViewportH(window.innerHeight || 800);
        };
        onDesktopChange();
        onResize();
        desktopQuery.addEventListener("change", onDesktopChange);
        window.addEventListener("resize", onResize);
        return () => {
            desktopQuery.removeEventListener("change", onDesktopChange);
            window.removeEventListener("resize", onResize);
        };
    }, []);

    // One IntersectionObserver for all waypoints, desktop only (the rail is
    // display:none below lg — no point observing). Among sections currently
    // touching the center band, the one nearest the viewport center wins.
    const sectionsKey = sections.map((section) => section.id).join("|");
    useEffect(() => {
        if (!isDesktop || sectionsKey === "") {
            return;
        }
        const ids = sectionsKey.split("|");
        const intersecting = new Set<string>();

        const pickActive = () => {
            const viewportCenter = window.innerHeight / 2;
            let bestId: string | null = null;
            let bestDistance = Number.POSITIVE_INFINITY;
            for (const id of intersecting) {
                const el = document.getElementById(id);
                if (el === null) {
                    continue;
                }
                const rect = el.getBoundingClientRect();
                // Distance from the viewport center to the section's span:
                // zero while the section covers the center line, so tall
                // sections hold the waypoint for their full pass.
                const distance =
                    rect.top > viewportCenter
                        ? rect.top - viewportCenter
                        : rect.bottom < viewportCenter
                          ? viewportCenter - rect.bottom
                          : 0;
                if (distance < bestDistance) {
                    bestDistance = distance;
                    bestId = id;
                }
            }
            if (bestId !== null) {
                setActiveId(bestId);
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) {
                        intersecting.add(entry.target.id);
                    } else {
                        intersecting.delete(entry.target.id);
                    }
                }
                pickActive();
            },
            { rootMargin: OBSERVER_ROOT_MARGIN, threshold: 0 },
        );

        for (const id of ids) {
            const el = document.getElementById(id);
            if (el !== null) {
                observer.observe(el);
            }
        }
        return () => {
            observer.disconnect();
        };
    }, [isDesktop, sectionsKey]);

    const handleJump = (id: string) => {
        const el = document.getElementById(id);
        if (el === null) {
            return;
        }
        setActiveId(id);
        el.scrollIntoView({
            behavior: reducedMotion ? "auto" : "smooth",
            block: "start",
        });
    };

    const interactive = reducedMotion || visible;

    return (
        <motion.nav
            aria-label="Page sections"
            className={
                "fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 lg:block " +
                // Keyboard users can tab into the rail before the scroll
                // threshold — reveal it the moment it holds focus.
                "focus-within:opacity-100! focus-within:pointer-events-auto! " +
                (interactive ? "pointer-events-auto" : "pointer-events-none")
            }
            style={{ opacity: reducedMotion ? 1 : railOpacity }}
        >
            <div className="relative flex flex-col items-center gap-5 py-3">
                {/* Track */}
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2 rounded-full bg-white/10"
                />
                {/* Scroll-progress fill: page progress -> scaleY, origin top.
                    Reduced motion: static full gradient, no scroll linkage. */}
                <motion.div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-1/2 w-[2px] origin-top -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-400 to-cyan-300"
                    style={{ scaleY: reducedMotion ? 1 : fillScale }}
                />
                {sections.map((section) => {
                    const isActive = section.id === activeId;
                    return (
                        <button
                            key={section.id}
                            type="button"
                            onClick={() => handleJump(section.id)}
                            aria-label={section.label}
                            aria-current={isActive ? "true" : undefined}
                            className="group relative flex h-6 w-6 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg"
                        >
                            {/* Waypoint dot: active glows (static box-shadow)
                                and scales 1.4; inactive dims. */}
                            <span
                                aria-hidden="true"
                                className={
                                    "block h-2 w-2 rounded-full transition duration-300 ease-out motion-reduce:transition-none " +
                                    (isActive
                                        ? "scale-[1.4] bg-sky-300 shadow-[0_0_10px_rgba(56,189,248,0.9),0_0_22px_rgba(34,211,238,0.45)]"
                                        : "bg-white/25 group-hover:bg-white/60 group-focus-visible:bg-white/60")
                                }
                            />
                            {/* Label slides out beside the active dot; also
                                surfaces on hover/focus. aria-hidden because
                                the button already carries an aria-label. */}
                            <span
                                aria-hidden="true"
                                className={
                                    "absolute right-full top-1/2 mr-3 -translate-y-1/2 rounded-md border border-white/10 bg-quant-bg/85 px-2.5 py-1 text-[11px] font-medium tracking-[0.14em] whitespace-nowrap text-sky-100/90 uppercase transition duration-300 ease-out motion-reduce:transition-none " +
                                    (isActive
                                        ? "translate-x-0 opacity-100"
                                        : "translate-x-1.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100")
                                }
                            >
                                {section.label}
                            </span>
                        </button>
                    );
                })}
            </div>
        </motion.nav>
    );
}
