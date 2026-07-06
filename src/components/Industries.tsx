"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Tilt3D } from "./ui/Tilt3D";
import { Car, HardHat, Music, TrendingUp } from "lucide-react";

const industries = [
    { icon: Car, label: "Automotive" },
    { icon: HardHat, label: "Construction" },
    { icon: Music, label: "Entertainment" },
    { icon: TrendingUp, label: "Financial Services" },
];

const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
 * Hydration-safe fade-up reveal (local, reduced-motion-complete replacement
 * for ui/AnimatedSection, which has no reduced-motion handling). SSR renders
 * fully visible; motion-safe clients snap hidden post-mount and fade up on
 * viewport entry.
 */
function FadeUp({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLDivElement | null>(null);
    const motionOK = useMotionOK();
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const hidden = motionOK && !inView;

    return (
        <motion.div
            ref={ref}
            initial={false}
            animate={hidden ? { opacity: 0, y: 20 } : { opacity: 1, y: 0 }}
            transition={hidden ? { duration: 0 } : { duration: 0.8, ease: EASE_OUT }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/*
 * THE CASCADE — a deliberate breather between the Services reel and the
 * capability matrix. Chips slide in from alternating sides with a slight
 * rotation settling to 0, stagger-delayed, while a faint horizontal
 * scan-line glow sweeps the section top-to-bottom exactly once on first
 * entry. Entrances are animate-driven off one in-view flag behind a
 * post-mount motion gate, so SSR / no-JS / prefers-reduced-motion all get
 * the chips fully visible and static from first paint (no hidden inline
 * styles in the server HTML). The sweep never ignites under reduced motion;
 * the overlay is aria-hidden and pointer-events-none in every tier. The
 * section clips its own overflow so the entry offsets can never cause a
 * horizontal page scroll.
 */

export function Industries() {
    const reducedMotion = useReducedMotion();
    const motionOK = useMotionOK();

    const chipsRef = useRef<HTMLDivElement | null>(null);
    const chipsInView = useInView(chipsRef, { once: true, margin: "-60px" });
    const revealed = !motionOK || chipsInView;

    return (
        <section id="industries" className="py-16 relative overflow-hidden">
            {/* Section seam — hairline + center glyph at the section's top edge */}
            <div aria-hidden="true" className="absolute inset-x-0 top-0 pointer-events-none">
                <div className="relative mx-auto max-w-5xl px-6">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />
                    <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rotate-45 border border-sky-400/40 bg-quant-bg" />
                </div>
            </div>
            {/* One-shot scan-line sweep: a full-height carrier translates from
                y:-100% to 0 so the glow band on its bottom edge crosses the
                section exactly once — transform/opacity only, no layout
                animation. Invisible forever under reduced motion (decorative,
                aria-hidden — whileInView differences never reach the DOM at
                SSR, so hydration stays consistent). */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 overflow-hidden">
                <motion.div
                    className="absolute inset-x-0 top-0 h-full"
                    initial={{ y: "-100%", opacity: 0 }}
                    whileInView={reducedMotion ? undefined : { y: "0%", opacity: [0, 1, 0] }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                        y: { duration: 1.5, ease: "easeInOut" },
                        opacity: { duration: 1.5, times: [0, 0.35, 1], ease: "linear" },
                    }}
                >
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-cyan-400/[0.06] to-transparent" />
                    <div className="absolute inset-x-0 bottom-12 h-px bg-cyan-300/25" />
                </motion.div>
            </div>
            <div className="container mx-auto px-6 relative z-10">
                <FadeUp>
                    {/* The eyebrow pattern is decorative (aria-hidden); the sr-only
                        heading keeps the section's original accessible label. */}
                    <h2 className="sr-only">Industries We've Built For</h2>
                    <div className="flex items-center justify-center gap-3 mb-10" aria-hidden="true">
                        <span className="h-px w-6 bg-gradient-to-r from-transparent to-sky-400/60" />
                        <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-sky-400/90">SEC · 03 — WHERE WE'VE SHIPPED</span>
                        <span className="h-px w-6 bg-gradient-to-l from-transparent to-sky-400/60" />
                    </div>
                </FadeUp>
                {/* Lighter than the Services cards but no longer flat:
                    each chip is a Tilt3D with the icon and label on
                    separate depth planes (glare/shadow off — there is no
                    card face for a sheen or a rectangular shadow to sit
                    on). Tilt is fine-pointer only and reduced-motion
                    inert; the icon color shift survives every tier. */}
                <div ref={chipsRef} className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {industries.map(({ icon: Icon, label }, idx) => (
                        <motion.div
                            key={label}
                            initial={false}
                            animate={
                                revealed
                                    ? { opacity: 1, x: 0, rotate: 0 }
                                    : {
                                        opacity: 0,
                                        x: idx % 2 === 0 ? -44 : 44,
                                        rotate: idx % 2 === 0 ? -3 : 3,
                                    }
                            }
                            transition={
                                revealed
                                    ? { duration: 0.7, ease: EASE_OUT, delay: idx * 0.09 }
                                    : { duration: 0 }
                            }
                        >
                            <Tilt3D
                                intensity={9}
                                glare={false}
                                shadow={false}
                                floatIndex={idx}
                            >
                                {/* Gradient hairline surface (small-radius pill
                                    variant): 1px gradient ring via p-px wrapper.
                                    The pill background + static backdrop blur live
                                    on an absolutely-positioned aria-hidden layer —
                                    backdrop-filter on the content element itself
                                    would flatten the Tilt3D.Layer depth planes.
                                    Hover intensifies the ring via an opacity
                                    crossfade of a duplicate gradient (opacity
                                    only; decorative, so touch loses nothing). */}
                                <div
                                    className="group relative rounded-full p-px bg-gradient-to-b from-sky-400/25 via-white/8 to-violet-400/20"
                                    style={{ transformStyle: "preserve-3d" }}
                                >
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-sky-400/50 via-white/8 to-violet-400/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                    />
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none absolute inset-px rounded-full bg-quant-card/80 backdrop-blur-sm [box-shadow:inset_0_1px_0_rgba(255,255,255,0.06)]"
                                        style={{ transform: "translateZ(0)" }}
                                    />
                                    <div
                                        className="relative flex items-center gap-3 px-5 py-2.5 text-gray-400"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        <Tilt3D.Layer z={30}>
                                            <Icon className="w-5 h-5 text-gray-400 transition-colors duration-[250ms] ease-out group-hover:text-sky-400" />
                                        </Tilt3D.Layer>
                                        <Tilt3D.Layer z={16}>
                                            <span className="text-sm font-medium">{label}</span>
                                        </Tilt3D.Layer>
                                    </div>
                                </div>
                            </Tilt3D>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
