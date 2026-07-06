"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";

/*
 * Tilt3D v2 — pointer-tracked 3D perspective tilt wrapper ("DEPTH PAYOFF").
 * Zero dependencies by design: all motion is written as CSS custom properties
 * from a single rAF-lerped writer per card — no React re-renders on
 * pointermove, no framer springs.
 *
 * v2 additions over the original pass:
 * - Tilt3D.Layer: consumers place card internals at real depths
 *   (translateZ) under preserve-3d, so the card separates into planes
 *   when tilted.
 * - Specular glare: a pointer-following radial sheen PLUS a linear sweep
 *   band whose angle/position ride the tilt vars, PLUS a rim-light that
 *   ignites on whichever edge is tilted toward the viewer.
 * - Dynamic shadow: a three-layer box-shadow (key, ambient, accent glow)
 *   that shifts opposite the tilt and deepens while hovered.
 * - Idle life: an optional CSS-only staggered float (floatIndex prop) so
 *   the grid breathes before any interaction. Pure compositor work,
 *   disabled under prefers-reduced-motion, damped on coarse pointers.
 * - Perf: the pointer handler only stores coordinates; one lerp loop per
 *   hovered card writes vars and self-suspends when settled. The card rect
 *   is cached on enter and refreshed only on resize / scroll-end.
 *
 * Behavior tiers (unchanged guarantees):
 * - Fine pointer: full tilt + glare + shadow payoff; eases back to identity
 *   over 480ms on leave. will-change is scoped to the hover duration only.
 * - Touch (pointer: coarse): tilt and glare never attach; a 100ms :active
 *   press (scale 0.99) carries the physicality instead. Idle float remains
 *   (reduced amplitude) so touch users still get the living grid.
 * - prefers-reduced-motion (live matchMedia subscription): tilt fully
 *   inert, idle float paused; children render visually unchanged; keyboard
 *   focus never triggers tilt and link semantics are untouched.
 *
 * NOTE: overflow-hidden and backdrop-filter on a child flatten that child's
 * 3D subtree — keep background/blur/clipping on a dedicated absolutely
 * positioned inner layer, not on the element that carries the 3D children.
 * The built-in glare overlay assumes the house card radius (rounded-2xl).
 */

interface Tilt3DProps {
    children: React.ReactNode;
    /** Applied to the outer perspective wrapper (pass h-full in stretch layouts). */
    className?: string;
    /** Maximum tilt in degrees. Default 6 — premium restraint, not a gimmick. */
    intensity?: number;
    /**
     * Grid index enabling the idle float with a per-card phase offset and
     * duration variance (6-8s loop, ~4px amplitude). Omit to disable.
     */
    floatIndex?: number;
    /** Render the specular overlay (sheen + sweep + rim). Default true. */
    glare?: boolean;
    /** Drive the dynamic depth shadow. Default true — disable for chips
     *  without a card face, where a rectangular shadow would betray the box. */
    shadow?: boolean;
}

interface TiltLayerProps {
    /** Depth in px above the card face (positive = toward the viewer). */
    z: number;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}

const PERSPECTIVE_PX = 900;
const SHADOW_PX_PER_DEG = 2.2;
const HOVER_LIFT_PX = 14;
const HOVER_SHADOW = 0.6;
const LERP = 0.22;
const RIM_MAX_X = 0.35;
const RIM_MAX_Y = 0.3;
const RECT_REFRESH_DEBOUNCE_MS = 120;
const RETURN_TRANSITION =
    "transform 480ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 480ms cubic-bezier(0.22, 1, 0.36, 1)";

/* Three-layer depth shadow: key shadow counters the tilt, a broader ambient
 * layer grounds it, and a faint sky-blue underglow sells the lit-glass read.
 * All terms resolve to invisible at --tilt-shadow: 0. */
const CARD_SHADOW = [
    "var(--tilt-sx, 0px) var(--tilt-sy, 0px) 30px -6px rgba(2, 6, 23, var(--tilt-shadow, 0))",
    "calc(var(--tilt-sx, 0px) * 1.8) calc(var(--tilt-sy, 0px) * 1.8 + 14px) 48px -10px rgba(2, 6, 23, calc(var(--tilt-shadow, 0) * 0.85))",
    "calc(var(--tilt-sx, 0px) * 1.2) calc(var(--tilt-sy, 0px) * 1.2 + 22px) 44px -18px rgba(56, 189, 248, calc(var(--tilt-shadow, 0) * 0.3))",
].join(", ");

/* Specular overlay, painted top-to-bottom:
 * 1-4: rim-lights — one per edge, alpha driven by which edge tilts toward
 *      the viewer (--tilt-rim-*).
 * 5:   sweep band — a soft diagonal highlight that rotates with rotateY and
 *      slides across the face with the pointer (--tilt-sweep).
 * 6:   pointer sheen — the radial glare following the cursor.
 * The whole element fades via --tilt-glare, so leave-state is a clean 0. */
const GLARE_BACKGROUND = [
    "linear-gradient(90deg, rgba(125, 211, 252, var(--tilt-rim-l, 0)), transparent 13%)",
    "linear-gradient(270deg, rgba(125, 211, 252, var(--tilt-rim-r, 0)), transparent 13%)",
    "linear-gradient(180deg, rgba(165, 243, 252, var(--tilt-rim-t, 0)), transparent 13%)",
    "linear-gradient(0deg, rgba(165, 243, 252, var(--tilt-rim-b, 0)), transparent 13%)",
    "linear-gradient(calc(115deg + var(--tilt-ry, 0deg) * 6), transparent calc(var(--tilt-sweep, 50%) - 22%), rgba(226, 232, 240, 0.05) calc(var(--tilt-sweep, 50%) - 7%), rgba(226, 232, 240, 0.11) var(--tilt-sweep, 50%), rgba(226, 232, 240, 0.05) calc(var(--tilt-sweep, 50%) + 7%), transparent calc(var(--tilt-sweep, 50%) + 22%))",
    "radial-gradient(420px circle at var(--tilt-gx, 50%) var(--tilt-gy, 50%), rgba(56, 189, 248, 0.14), rgba(56, 189, 248, 0.05) 42%, transparent 72%)",
].join(", ");

/* Idle float keyframes, hoisted+deduped by React 19 via href/precedence.
 * CSS-only: compositor transform, no JS ticking, media-query gated. */
const TILT3D_FLOAT_CSS = [
    "@keyframes tilt3d-float {",
    "    0%, 100% { transform: translate3d(0, 0, 0); }",
    "    50% { transform: translate3d(0, var(--tilt-float-y, -4px), 0); }",
    "}",
    ".tilt3d-float {",
    "    animation: tilt3d-float var(--tilt-float-dur, 7s) ease-in-out infinite;",
    "    animation-delay: var(--tilt-float-delay, 0s);",
    "}",
    "@media (pointer: coarse) {",
    "    .tilt3d-float { --tilt-float-y: -2.5px; }",
    "}",
    "@media (prefers-reduced-motion: reduce) {",
    "    .tilt3d-float { animation: none; }",
    "}",
].join("\n");

interface TiltMotionState {
    rx: number;
    ry: number;
    gx: number;
    gy: number;
    tz: number;
    sh: number;
}

function clamp01(value: number): number {
    return Math.min(1, Math.max(0, value));
}

/**
 * Depth plane for card internals. Must sit inside a preserve-3d chain from
 * the Tilt3D card (any intermediate wrapper needs transform-style:
 * preserve-3d too, and must not clip or blur — see the module note).
 */
export function TiltLayer({ z, children, className, style }: TiltLayerProps) {
    return (
        <div
            className={className}
            style={{
                ...style,
                transform: `translateZ(${z}px)`,
                transformStyle: "preserve-3d",
            }}
        >
            {children}
        </div>
    );
}

export function Tilt3D({
    children,
    className,
    intensity = 6,
    floatIndex,
    glare = true,
    shadow = true,
}: Tilt3DProps) {
    const cardRef = useRef<HTMLDivElement | null>(null);
    const rafRef = useRef<number | null>(null);
    const rectRef = useRef<DOMRect | null>(null);
    const rectTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const willChangeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const lastPointerRef = useRef({ x: 0, y: 0 });
    const curRef = useRef<TiltMotionState>({ rx: 0, ry: 0, gx: 0, gy: 0, tz: 0, sh: 0 });
    const hoveringRef = useRef(false);
    const moveAttachedRef = useRef(false);
    const reducedMotionRef = useRef(false);
    const [touchTier, setTouchTier] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    const refreshRect = useCallback(() => {
        const el = cardRef.current;
        rectRef.current = el === null ? null : el.getBoundingClientRect();
    }, []);

    /* The single per-card writer: lerps current toward target and writes CSS
     * vars, one frame at a time, self-suspending once settled. pointermove
     * only stores coordinates and re-arms this loop. */
    const tick = useCallback(() => {
        rafRef.current = null;
        const el = cardRef.current;
        const rect = rectRef.current;
        if (el === null || rect === null || rect.width === 0 || rect.height === 0) {
            return;
        }
        const nx = clamp01((lastPointerRef.current.x - rect.left) / rect.width);
        const ny = clamp01((lastPointerRef.current.y - rect.top) / rect.height);
        // Pointer right => rotateY toward +intensity, pointer top => rotateX
        // toward +intensity: the card face turns to look at the cursor.
        const targetRy = (nx - 0.5) * 2 * intensity;
        const targetRx = (0.5 - ny) * 2 * intensity;
        const targetGx = nx * rect.width;
        const targetGy = ny * rect.height;
        const cur = curRef.current;
        cur.rx += (targetRx - cur.rx) * LERP;
        cur.ry += (targetRy - cur.ry) * LERP;
        cur.gx += (targetGx - cur.gx) * LERP;
        cur.gy += (targetGy - cur.gy) * LERP;
        cur.tz += (HOVER_LIFT_PX - cur.tz) * LERP;
        cur.sh += (HOVER_SHADOW - cur.sh) * LERP;

        el.style.setProperty("--tilt-rx", `${cur.rx.toFixed(2)}deg`);
        el.style.setProperty("--tilt-ry", `${cur.ry.toFixed(2)}deg`);
        el.style.setProperty("--tilt-tz", `${cur.tz.toFixed(2)}px`);
        if (shadow) {
            // Depth shadow offsets counter the tilt so the card reads as lit
            // and grounded rather than just rotated.
            el.style.setProperty("--tilt-sx", `${(cur.ry * -SHADOW_PX_PER_DEG).toFixed(2)}px`);
            el.style.setProperty("--tilt-sy", `${(cur.rx * SHADOW_PX_PER_DEG).toFixed(2)}px`);
            el.style.setProperty("--tilt-shadow", cur.sh.toFixed(3));
        }
        if (glare) {
            el.style.setProperty("--tilt-gx", `${cur.gx.toFixed(1)}px`);
            el.style.setProperty("--tilt-gy", `${cur.gy.toFixed(1)}px`);
            el.style.setProperty("--tilt-sweep", `${((cur.gx / rect.width) * 100).toFixed(1)}%`);
            // Rim ignites on the edge tilted toward the viewer: +rotateY
            // brings the left edge forward, +rotateX brings the bottom edge.
            const rimX = cur.ry / intensity;
            const rimY = cur.rx / intensity;
            el.style.setProperty("--tilt-rim-l", Math.max(0, rimX * RIM_MAX_X).toFixed(3));
            el.style.setProperty("--tilt-rim-r", Math.max(0, -rimX * RIM_MAX_X).toFixed(3));
            el.style.setProperty("--tilt-rim-b", Math.max(0, rimY * RIM_MAX_Y).toFixed(3));
            el.style.setProperty("--tilt-rim-t", Math.max(0, -rimY * RIM_MAX_Y).toFixed(3));
        }

        const settled =
            Math.abs(targetRx - cur.rx) < 0.02 &&
            Math.abs(targetRy - cur.ry) < 0.02 &&
            Math.abs(targetGx - cur.gx) < 0.5 &&
            Math.abs(targetGy - cur.gy) < 0.5 &&
            Math.abs(HOVER_LIFT_PX - cur.tz) < 0.1 &&
            Math.abs(HOVER_SHADOW - cur.sh) < 0.005;
        if (hoveringRef.current && !settled) {
            rafRef.current = requestAnimationFrame(tick);
        }
    }, [glare, intensity, shadow]);

    const handleMove = useCallback(
        (event: PointerEvent) => {
            // No layout reads here — targets derive from the cached rect.
            lastPointerRef.current.x = event.clientX;
            lastPointerRef.current.y = event.clientY;
            if (hoveringRef.current && rafRef.current === null) {
                rafRef.current = requestAnimationFrame(tick);
            }
        },
        [tick],
    );

    /* Rect cache maintenance: debounced to scroll-end / resize-end only. */
    const handleViewportChange = useCallback(() => {
        if (rectTimerRef.current !== null) {
            clearTimeout(rectTimerRef.current);
        }
        rectTimerRef.current = setTimeout(() => {
            rectTimerRef.current = null;
            refreshRect();
            if (hoveringRef.current && rafRef.current === null) {
                rafRef.current = requestAnimationFrame(tick);
            }
        }, RECT_REFRESH_DEBOUNCE_MS);
    }, [refreshRect, tick]);

    const teardownHover = useCallback(() => {
        hoveringRef.current = false;
        const el = cardRef.current;
        if (el !== null && moveAttachedRef.current) {
            el.removeEventListener("pointermove", handleMove);
        }
        moveAttachedRef.current = false;
        window.removeEventListener("scroll", handleViewportChange, true);
        window.removeEventListener("resize", handleViewportChange);
        if (rectTimerRef.current !== null) {
            clearTimeout(rectTimerRef.current);
            rectTimerRef.current = null;
        }
        if (rafRef.current !== null) {
            cancelAnimationFrame(rafRef.current);
            rafRef.current = null;
        }
    }, [handleMove, handleViewportChange]);

    const resetTilt = useCallback((animated: boolean) => {
        const el = cardRef.current;
        if (el === null) {
            return;
        }
        const cur = curRef.current;
        cur.rx = 0;
        cur.ry = 0;
        cur.tz = 0;
        cur.sh = 0;
        el.style.transition = animated ? RETURN_TRANSITION : "none";
        el.style.setProperty("--tilt-rx", "0deg");
        el.style.setProperty("--tilt-ry", "0deg");
        el.style.setProperty("--tilt-tz", "0px");
        el.style.setProperty("--tilt-sx", "0px");
        el.style.setProperty("--tilt-sy", "0px");
        el.style.setProperty("--tilt-shadow", "0");
        el.style.setProperty("--tilt-glare", "0");
        el.style.setProperty("--tilt-sweep", "50%");
        el.style.setProperty("--tilt-rim-l", "0");
        el.style.setProperty("--tilt-rim-r", "0");
        el.style.setProperty("--tilt-rim-t", "0");
        el.style.setProperty("--tilt-rim-b", "0");
        if (willChangeTimeoutRef.current !== null) {
            clearTimeout(willChangeTimeoutRef.current);
        }
        // Drop the composited layer once the return transition settles —
        // never hold permanent will-change layers across the card grid.
        willChangeTimeoutRef.current = setTimeout(() => {
            willChangeTimeoutRef.current = null;
            if (cardRef.current !== null) {
                cardRef.current.style.willChange = "auto";
            }
        }, animated ? 500 : 0);
    }, []);

    useEffect(() => {
        const coarseQuery = window.matchMedia("(pointer: coarse)");
        const reducedQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

        const onCoarseChange = () => {
            setTouchTier(coarseQuery.matches);
        };
        const onReducedChange = () => {
            reducedMotionRef.current = reducedQuery.matches;
            setReducedMotion(reducedQuery.matches);
            if (reducedQuery.matches) {
                teardownHover();
                resetTilt(false);
            }
        };

        onCoarseChange();
        onReducedChange();
        coarseQuery.addEventListener("change", onCoarseChange);
        reducedQuery.addEventListener("change", onReducedChange);

        return () => {
            coarseQuery.removeEventListener("change", onCoarseChange);
            reducedQuery.removeEventListener("change", onReducedChange);
            teardownHover();
            if (willChangeTimeoutRef.current !== null) {
                clearTimeout(willChangeTimeoutRef.current);
                willChangeTimeoutRef.current = null;
            }
        };
    }, [resetTilt, teardownHover]);

    const handlePointerEnter = (event: React.PointerEvent<HTMLDivElement>) => {
        // Fine-pointer payoff only: never on touch, never under reduced
        // motion — and keyboard focus can never reach this code path.
        if (event.pointerType === "touch" || reducedMotionRef.current) {
            return;
        }
        const el = cardRef.current;
        if (el === null) {
            return;
        }
        if (willChangeTimeoutRef.current !== null) {
            clearTimeout(willChangeTimeoutRef.current);
            willChangeTimeoutRef.current = null;
        }
        hoveringRef.current = true;
        el.style.transition = "none";
        el.style.willChange = "transform";
        el.style.setProperty("--tilt-glare", "1");
        lastPointerRef.current.x = event.clientX;
        lastPointerRef.current.y = event.clientY;
        // One sanctioned layout read per hover: cache the rect, then coast
        // on it until resize / scroll-end refreshes it.
        refreshRect();
        const rect = rectRef.current;
        if (rect !== null) {
            // Seed the sheen at the entry point so it never flies in from a
            // stale corner; rotation still eases in from identity.
            curRef.current.gx = event.clientX - rect.left;
            curRef.current.gy = event.clientY - rect.top;
        }
        if (!moveAttachedRef.current) {
            el.addEventListener("pointermove", handleMove, { passive: true });
            moveAttachedRef.current = true;
        }
        window.addEventListener("scroll", handleViewportChange, { passive: true, capture: true });
        window.addEventListener("resize", handleViewportChange);
        if (rafRef.current === null) {
            rafRef.current = requestAnimationFrame(tick);
        }
    };

    const handlePointerLeave = (event: React.PointerEvent<HTMLDivElement>) => {
        if (event.pointerType === "touch") {
            return;
        }
        teardownHover();
        resetTilt(true);
    };

    const pressFeedback = touchTier && !reducedMotion;
    const floatEnabled = floatIndex !== undefined;

    const wrapperClassName =
        [className, floatEnabled ? "tilt3d-float" : null].filter(Boolean).join(" ") || undefined;
    const wrapperStyle = {
        perspective: `${PERSPECTIVE_PX}px`,
        ...(floatEnabled
            ? {
                  // Stagger: negative delay starts each card mid-cycle, the
                  // duration variance keeps neighbors from ever syncing up.
                  "--tilt-float-dur": `${(6 + ((floatIndex ?? 0) % 3) * 0.9).toFixed(2)}s`,
                  "--tilt-float-delay": `${((floatIndex ?? 0) * -1.15).toFixed(2)}s`,
              }
            : null),
    } as React.CSSProperties;

    return (
        <div className={wrapperClassName} style={wrapperStyle}>
            {floatEnabled ? (
                <style href="tilt3d-idle-float" precedence="low">
                    {TILT3D_FLOAT_CSS}
                </style>
            ) : null}
            <div
                ref={cardRef}
                onPointerEnter={handlePointerEnter}
                onPointerLeave={handlePointerLeave}
                className={
                    "relative h-full" +
                    (pressFeedback
                        ? " transition-transform duration-100 ease-out active:[--tilt-press:0.99]"
                        : "")
                }
                style={{
                    transform:
                        "rotateX(var(--tilt-rx, 0deg)) rotateY(var(--tilt-ry, 0deg)) translateZ(var(--tilt-tz, 0px)) scale(var(--tilt-press, 1))",
                    transformStyle: "preserve-3d",
                    ...(shadow ? { boxShadow: CARD_SHADOW } : null),
                }}
            >
                {children}
                {/* Specular overlay: pointer sheen + tilt-driven sweep band +
                    near-edge rim light. Sits at z=0 (the glass face), so
                    translateZ-lifted internals render above it. */}
                {glare ? (
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
                        style={{
                            opacity: "var(--tilt-glare, 0)",
                            transition: "opacity 240ms ease",
                            background: GLARE_BACKGROUND,
                            boxShadow: "inset 0 0 0 1px rgba(148, 163, 184, 0.1)",
                        }}
                    />
                ) : null}
            </div>
        </div>
    );
}

/* Namespace-style access so call sites read as a system: <Tilt3D.Layer z={45}>. */
Tilt3D.Layer = TiltLayer;
