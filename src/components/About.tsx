"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    animate,
    motion,
    useInView,
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion";
import type { MotionValue } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const stats = [
    { value: "20+", label: "Projects Shipped" },
    { value: "5", label: "Live Trading Systems" },
    { value: "4+", label: "Industries Served" },
];

const stack = [
    "Next.js", "React", "TypeScript", "Node.js",
    "Prisma", "PostgreSQL", "Stripe", "Docker",
    "Vercel", "Neon DB", "Tailwind", "Framer Motion",
    "Fly.io", "DigitalOcean", "Sentry", "JWT Auth",
];

const layers = [
    {
        id: "ui",
        label: "CLIENT INTERFACE",
        sublabel: "Next.js / React / TypeScript",
        color: "#38bdf8",
    },
    {
        id: "api",
        label: "API & BUSINESS LOGIC",
        sublabel: "Node.js / Route Handlers / Middleware",
        color: "#818cf8",
    },
    {
        id: "data",
        label: "DATA LAYER",
        sublabel: "Prisma ORM / PostgreSQL / Neon DB",
        color: "#34d399",
    },
    {
        id: "payments",
        label: "PAYMENTS & AUTH",
        sublabel: "Stripe / JWT / Role-Based Access",
        color: "#f59e0b",
    },
    {
        id: "infra",
        label: "DEPLOYMENT & INFRA",
        sublabel: "Vercel / Docker / Fly.io / Sentry",
        color: "#f472b6",
    },
];

/** True on hover-capable lg+ viewports — gates the ambient/parallax tier. */
function useDesktopMotion() {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const query = window.matchMedia(
            "(min-width: 1024px) and (hover: hover) and (pointer: fine)"
        );
        const update = () => setEnabled(query.matches);
        update();
        query.addEventListener("change", update);
        return () => query.removeEventListener("change", update);
    }, []);

    return enabled;
}

/**
 * Post-mount motion gate. Always false on the server AND on the first client
 * render, so SSR HTML and the hydration render are byte-identical (fully
 * visible content); flips true after mount only when the client has not
 * requested reduced motion. Never branch rendered output on useReducedMotion
 * directly — it is null on the server and real on the first client render,
 * which strands SSR's inline `opacity:0` styles for reduced-motion users.
 */
function useMotionOK(): boolean {
    const reduceMotion = useReducedMotion();
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);
    return mounted && reduceMotion !== true;
}

/**
 * Hydration-safe fade-up reveal. SSR renders the content fully visible
 * (initial={false} + visible animate target), so no-JS, pre-hydration, and
 * prefers-reduced-motion users always see complete content. On motion-safe
 * clients the element snaps hidden post-mount (duration 0, before it can be
 * seen below the fold) and fades up when it enters the viewport.
 */
function Reveal({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    const ref = useRef<HTMLDivElement | null>(null);
    const motionOK = useMotionOK();
    const inView = useInView(ref, { once: true, margin: "-80px" });
    const hidden = motionOK && !inView;

    return (
        <motion.div
            ref={ref}
            initial={false}
            animate={hidden ? { opacity: 0, y: 24 } : { opacity: 1, y: 0 }}
            transition={hidden ? { duration: 0 } : { duration: 0.7, ease: EASE, delay }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/**
 * Scroll-triggered count-up. Server-renders the final value (SEO-safe),
 * then counts 0 -> target once in view. Reduced motion: static final value.
 */
function StatValue({ value }: { value: string }) {
    const reduceMotion = useReducedMotion();
    const ref = useRef<HTMLSpanElement | null>(null);
    const inView = useInView(ref, { once: true, amount: 0.5 });

    const parsed = /^(\d+)(.*)$/.exec(value);
    const target = parsed ? Number(parsed[1]) : null;
    const suffix = parsed ? parsed[2] : "";

    useEffect(() => {
        const node = ref.current;
        if (!inView || reduceMotion || target === null || !node) return;

        const controls = animate(0, target, {
            duration: 1.4,
            ease: EASE,
            onUpdate: (latest) => {
                node.textContent = `${Math.round(latest)}${suffix}`;
            },
            onComplete: () => {
                node.textContent = value;
            },
        });

        return () => {
            controls.stop();
            node.textContent = value;
        };
    }, [inView, reduceMotion, target, suffix, value]);

    return <span ref={ref}>{value}</span>;
}

/**
 * One architecture layer. Scroll parallax spreads the layers apart as the
 * diagram crosses the viewport center (exploded view), re-stacking at the
 * edges. Amplitude peaks at +/-22px on the outermost layers. The entrance
 * is animate-driven off the diagram's in-view state (hydration-safe: SSR
 * and reduced motion render fully visible).
 */
function ArchLayer({
    layer,
    index,
    progress,
    parallax,
    revealed,
}: {
    layer: (typeof layers)[number];
    index: number;
    progress: MotionValue<number>;
    parallax: boolean;
    revealed: boolean;
}) {
    const count = layers.length;
    const spread = (index - (count - 1) / 2) * 11;
    const parallaxY = useTransform(progress, [0, 0.5, 1], [0, spread, 0]);

    return (
        <motion.div
            initial={false}
            animate={revealed ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={
                revealed
                    ? { delay: index * 0.1, duration: 0.4, ease: "easeOut" }
                    : { duration: 0 }
            }
            className="relative rounded-xl border px-5 py-3.5"
            style={{
                y: parallax ? parallaxY : 0,
                borderColor: `${layer.color}30`,
                backgroundColor: `${layer.color}08`,
            }}
        >
            <div
                aria-hidden="true"
                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl pointer-events-none"
                style={{ backgroundColor: layer.color }}
            />
            <div className="relative z-10">
                <p className="text-xs font-bold tracking-widest uppercase mb-0.5" style={{ color: layer.color }}>
                    {layer.label}
                </p>
                <p className="text-xs text-gray-400">{layer.sublabel}</p>
            </div>
        </motion.div>
    );
}

/**
 * Tech-stack chip: staggered settle-in (alternating tilt), hover lift, and
 * an optional slow 2-3px idle drift on desktop so the wall feels alive.
 * Entrance is animate-driven off the wall's in-view state (hydration-safe).
 */
function StackChip({
    tech,
    index,
    drift,
    revealed,
    hoverOK,
}: {
    tech: string;
    index: number;
    drift: boolean;
    revealed: boolean;
    hoverOK: boolean;
}) {
    return (
        <motion.span
            initial={false}
            animate={
                revealed
                    ? { opacity: 1, y: 0, rotate: 0 }
                    : { opacity: 0, y: 14, rotate: index % 2 === 0 ? -2 : 2 }
            }
            transition={
                revealed
                    ? { delay: index * 0.04, duration: 0.45, ease: EASE }
                    : { duration: 0 }
            }
            whileHover={
                hoverOK
                    ? { y: -3, transition: { type: "spring", stiffness: 120, damping: 12 } }
                    : undefined
            }
            className="group relative inline-flex rounded-full p-px bg-gradient-to-b from-sky-400/25 via-white/8 to-violet-400/20 cursor-default"
        >
            {/* Hover: hairline intensifies via opacity-crossfade of a duplicate gradient layer */}
            <span
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-gradient-to-b from-sky-400/50 via-white/8 to-violet-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
            />
            <span className="relative rounded-full px-3.5 py-1.5 text-sm font-medium bg-quant-card/80 backdrop-blur-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                <motion.span
                    className="inline-block"
                    animate={drift ? { y: [0, -2.5, 0] } : { y: 0 }}
                    transition={
                        drift
                            ? {
                                duration: 5.5 + (index % 4) * 0.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: (index % 7) * 0.4,
                            }
                            : { duration: 0.2 }
                    }
                >
                    {tech}
                </motion.span>
            </span>
        </motion.span>
    );
}

export function About() {
    const motionOK = useMotionOK();
    const desktopMotion = useDesktopMotion();
    const ambientMotion = desktopMotion && motionOK;

    const diagramRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress: diagramProgress } = useScroll({
        target: diagramRef,
        offset: ["start end", "end start"],
    });
    const diagramInView = useInView(diagramRef, { once: true });
    const archRevealed = !motionOK || diagramInView;

    const stackRef = useRef<HTMLDivElement | null>(null);
    const stackInView = useInView(stackRef, { once: true, margin: "-40px" });
    const stackRevealed = !motionOK || stackInView;

    return (
        <section className="py-28 relative overflow-hidden bg-black/40" id="about">
            {/* Section seam — hairline + center glyph at the section's top edge.
                The glyph square matches this section's composited backdrop
                (quant-bg under the 40% black wash), not raw quant-bg. */}
            <div aria-hidden="true" className="absolute inset-x-0 top-0 pointer-events-none">
                <div className="relative mx-auto max-w-5xl px-6">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rotate-45 border border-sky-400/40 bg-[color-mix(in_srgb,var(--color-quant-bg)_60%,black)]" />
                </div>
            </div>

            <div
                aria-hidden="true"
                className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-quant-blue/8 rounded-full blur-[140px] pointer-events-none"
            />

            <div className="container mx-auto px-6 relative z-10">

                <div className="flex flex-col lg:flex-row items-start gap-16 mb-20">

                    <Reveal className="w-full lg:w-1/2 flex flex-col justify-center">
                        <div className="flex items-center gap-3 mb-5" aria-hidden="true">
                            <span className="h-px w-6 bg-gradient-to-r from-transparent to-sky-400/60" />
                            <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-sky-400/90">SEC · 04 — THE PROOF</span>
                            <span className="h-px w-6 bg-gradient-to-l from-transparent to-sky-400/60" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-7 leading-tight">
                            Full-stack means{" "}
                            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                                the whole thing.
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-5">
                            Front end to database. Auth to payments. Deployment to monitoring.
                            We own every layer of the stack.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            We've shipped platforms across trading, automotive, construction, and entertainment.
                            Not a theme. Not a template.
                        </p>

                        <div className="mt-10 grid grid-cols-3 gap-4">
                            {stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="rounded-xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm p-5"
                                >
                                    <p className="text-3xl md:text-4xl xl:text-5xl font-black font-mono tracking-tight tabular-nums mb-1 bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">
                                        <StatValue value={stat.value} />
                                    </p>
                                    <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={0.2} className="w-full lg:w-1/2">
                        <div
                            ref={diagramRef}
                            className="relative rounded-2xl p-px bg-gradient-to-b from-sky-400/25 via-white/8 to-violet-400/20"
                        >
                            <div className="relative rounded-[15px] bg-quant-card/80 backdrop-blur-sm p-6 overflow-hidden [box-shadow:inset_0_1px_0_rgba(255,255,255,0.06)]">
                                <span aria-hidden="true" className="absolute left-2 top-2 h-2.5 w-2.5 border-l border-t border-sky-400/30 pointer-events-none" />
                                <span aria-hidden="true" className="absolute right-2 top-2 h-2.5 w-2.5 border-r border-t border-sky-400/30 pointer-events-none" />
                                <span aria-hidden="true" className="absolute bottom-2 left-2 h-2.5 w-2.5 border-b border-l border-sky-400/30 pointer-events-none" />
                                <span aria-hidden="true" className="absolute bottom-2 right-2 h-2.5 w-2.5 border-b border-r border-sky-400/30 pointer-events-none" />

                                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-5">
                                    System Architecture
                                </p>

                                <div className="flex flex-col gap-2">
                                    {layers.map((layer, i) => (
                                        <ArchLayer
                                            key={layer.id}
                                            layer={layer}
                                            index={i}
                                            progress={diagramProgress}
                                            parallax={ambientMotion}
                                            revealed={archRevealed}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <Reveal delay={0.1} className="mb-16">
                    <div className="rounded-2xl border border-white/6 bg-[#0a101e]/60 backdrop-blur-sm p-8">
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400 mb-5">
                            Tech Stack
                        </p>
                        <div ref={stackRef} className="flex flex-wrap gap-2.5">
                            {stack.map((tech, i) => (
                                <StackChip
                                    key={tech}
                                    tech={tech}
                                    index={i}
                                    drift={ambientMotion}
                                    revealed={stackRevealed}
                                    hoverOK={motionOK}
                                />
                            ))}
                        </div>
                    </div>
                </Reveal>

            </div>
        </section>
    );
}
