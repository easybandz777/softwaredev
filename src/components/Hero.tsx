"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import {
    motion,
    useMotionValue,
    useReducedMotion,
    useSpring,
    useTransform,
} from "framer-motion";
import { Button } from "./ui/Button";

const HeroCanvas = dynamic(
    () => import("./HeroCanvas").then((m) => m.HeroCanvas),
    { ssr: false }
);

const ConsultationModal = dynamic(
    () => import("./ConsultationModal").then((m) => m.ConsultationModal),
    { ssr: false }
);

const words = ["We", "build", "the", "software."];

export function Hero() {
    const [modalOpen, setModalOpen] = useState(false);

    // Subtle pointer parallax on the logo/headline block (transform-only, so
    // zero CLS; fine pointers only; disabled for prefers-reduced-motion).
    const reduceMotion = useReducedMotion();
    const parX = useMotionValue(0);
    const parY = useMotionValue(0);
    const logoX = useSpring(parX, { stiffness: 55, damping: 16, mass: 0.5 });
    const logoY = useSpring(parY, { stiffness: 55, damping: 16, mass: 0.5 });
    const headX = useTransform(logoX, (v) => v * 0.42);
    const headY = useTransform(logoY, (v) => v * 0.42);

    useEffect(() => {
        if (reduceMotion) return;
        if (!window.matchMedia("(pointer: fine)").matches) return;
        const onMove = (e: PointerEvent) => {
            parX.set((e.clientX / window.innerWidth - 0.5) * 2 * 12);
            parY.set((e.clientY / window.innerHeight - 0.5) * 2 * 8);
        };
        const onLeave = (e: MouseEvent) => {
            if (!e.relatedTarget) {
                parX.set(0);
                parY.set(0);
            }
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        window.addEventListener("mouseout", onLeave, { passive: true });
        return () => {
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("mouseout", onLeave);
        };
    }, [reduceMotion, parX, parY]);

    function scrollToServices() {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden w-full pt-20">

            <HeroCanvas />

            {/* Vignette */}
            <div
                className="absolute inset-0 pointer-events-none z-[1]"
                style={{
                    background:
                        "radial-gradient(ellipse at 50% 50%, transparent 48%, rgba(17,24,39,0.55) 100%)",
                }}
            />

            {/* HUD frame — instrument chrome around the hero viewport: four
                corner brackets (24px inset, 20px arms) plus two mono readouts.
                Decorative only (aria-hidden), desktop/tablet only, fades in
                with the tail of the entrance sequence. */}
            <motion.div
                aria-hidden="true"
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: reduceMotion ? 0 : 1.2, ease: "easeOut" }}
                className="absolute inset-0 z-[3] pointer-events-none hidden sm:block"
            >
                <span className="absolute left-6 top-6 h-5 w-5 border-l border-t border-sky-400/25" />
                <span className="absolute right-6 top-6 h-5 w-5 border-r border-t border-sky-400/25" />
                <span className="absolute left-6 bottom-6 h-5 w-5 border-l border-b border-sky-400/25" />
                <span className="absolute right-6 bottom-6 h-5 w-5 border-r border-b border-sky-400/25" />
                <span className="absolute left-14 bottom-7 font-mono text-[10px] tracking-[0.25em] text-gray-500 whitespace-nowrap">
                    {"32.84° N / 83.63° W — MACON, GA"}
                </span>
                <span className="absolute right-14 bottom-7 font-mono text-[10px] tracking-[0.25em] text-gray-500 whitespace-nowrap">
                    {"SYSTEMS · LIVE"}
                </span>
            </motion.div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Stage room for the 3D orbital core — the scene itself is the
                    brand mark here (the raster logo fought the icosahedron
                    dead-center; the navbar carries the logo). Parallax rides on
                    the spacer so the whole content block keeps its depth drift. */}
                <motion.div
                    className="h-40 sm:h-48 md:h-56"
                    aria-hidden="true"
                    style={{ x: logoX, y: logoY }}
                />

                {/* Headline — word-by-word reveal, weight contrast */}
                <motion.h1
                    className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 max-w-5xl leading-[1.05]"
                    style={{ x: headX, y: headY }}
                >
                    {words.map((word, i) => {
                        // Weight contrast that actually fires: the old accent
                        // check matched words not in this sentence, so the
                        // whole H1 rendered light gray.
                        const isAccent = word === "software.";
                        return (
                            <motion.span
                                key={word}
                                initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.65, delay: 0.1 + i * 0.12, ease: "easeOut" }}
                                className={`inline-block mr-[0.25em] ${isAccent
                                    ? "font-black text-white [text-shadow:0_0_28px_rgba(56,189,248,0.45)]"
                                    : "font-light text-gray-300"
                                    }`}
                            >
                                {word}
                            </motion.span>
                        );
                    })}
                </motion.h1>

                {/* Thin divider */}
                <motion.div
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
                    className="w-16 h-px bg-sky-500/60 mb-8 origin-center"
                />

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.75, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
                >
                    Custom software and trading systems for businesses that need
                    more than off-the-shelf tools.
                </motion.p>

                {/* Single primary CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                >
                    <Button variant="glass" size="lg" className="min-w-[220px]" onClick={() => setModalOpen(true)}>
                        Book a Consultation
                    </Button>
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <motion.button
                onClick={scrollToServices}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group cursor-pointer"
                aria-label="Explore services"
            >
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-gray-400 group-hover:text-sky-400 transition-colors duration-200">
                    Explore Services
                </span>
                <motion.div
                    className="w-px bg-gradient-to-b from-sky-500/80 to-transparent"
                    animate={{ height: ["14px", "26px", "14px"] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.svg
                    width="12" height="8" viewBox="0 0 12 8" fill="none"
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                    className="text-sky-500/70 group-hover:text-sky-300 transition-colors duration-200"
                >
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </motion.svg>
            </motion.button>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111827] to-transparent pointer-events-none z-[2]" />

            <ConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
    );
}
