"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
    motion,
    useInView,
    useMotionValue,
    useReducedMotion,
    useScroll,
    useSpring,
    useTransform,
} from "framer-motion";
import type { Variants } from "framer-motion";
import { Linkedin, Github } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/* The hidden states carry duration-0 transitions so the post-mount snap to
 * the pre-entrance pose is instant (it happens below the fold, unseen). */
const cascade: Variants = {
    hidden: { transition: { duration: 0 } },
    show: {
        transition: { staggerChildren: 0.09, delayChildren: 0.05 },
    },
};

const cascadeLine: Variants = {
    hidden: { opacity: 0, y: 16, transition: { duration: 0 } },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/** True on hover-capable lg+ viewports — gates the parallax/magnetic tier. */
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
 * Social link with a magnetic hover micro-interaction: translates toward the
 * cursor (max 4px) and springs back on leave. Mouse pointers only — touch
 * and reduced-motion get a plain link.
 */
function MagneticLink({
    href,
    label,
    enabled,
    children,
}: {
    href: string;
    label: string;
    enabled: boolean;
    children: React.ReactNode;
}) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, { stiffness: 120, damping: 14, mass: 0.2 });
    const springY = useSpring(y, { stiffness: 120, damping: 14, mass: 0.2 });

    const handleMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
        if (!enabled || event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        const clamp = (v: number) => Math.max(-4, Math.min(4, v));
        x.set(clamp((event.clientX - (rect.left + rect.width / 2)) * 0.35));
        y.set(clamp((event.clientY - (rect.top + rect.height / 2)) * 0.35));
    };

    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            onPointerMove={handleMove}
            onPointerLeave={reset}
            onBlur={reset}
            style={{ x: springX, y: springY }}
            className="inline-flex text-gray-500 hover:text-white transition-colors"
        >
            {children}
        </motion.a>
    );
}

export function Founder() {
    const motionOK = useMotionOK();
    const desktopMotion = useDesktopMotion();
    const depthOn = desktopMotion && motionOK;

    const sectionRef = useRef<HTMLElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });
    const photoY = useTransform(scrollYProgress, [0, 1], [8, -8]);
    const glowY = useTransform(scrollYProgress, [0, 1], [-8, 8]);

    /* Entrances are animate-driven off one section-level in-view flag
     * (hydration-safe: SSR, no-JS, and reduced motion render fully visible;
     * motion-safe clients snap hidden post-mount and reveal on entry). */
    const inView = useInView(sectionRef, { once: true, margin: "-80px" });
    const revealed = !motionOK || inView;

    return (
        <section className="py-24 relative" id="founder" ref={sectionRef}>
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    {/* Photo — two-layer depth: portrait parallaxes against a counter-moving glow frame */}
                    <motion.div
                        className="flex-shrink-0"
                        initial={false}
                        animate={revealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.96 }}
                        transition={revealed ? { duration: 0.7, ease: EASE } : { duration: 0 }}
                    >
                        <div className="relative w-48 h-48">
                            <motion.div
                                aria-hidden="true"
                                className="absolute -inset-3 rounded-[1.4rem] pointer-events-none"
                                style={{
                                    y: depthOn ? glowY : 0,
                                    background:
                                        "linear-gradient(135deg, rgba(59,130,246,0.35), rgba(34,211,238,0.12) 60%, transparent)",
                                    filter: "blur(18px)",
                                }}
                            />
                            <motion.div
                                className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10"
                                style={{ y: depthOn ? photoY : 0 }}
                            >
                                {/* TODO: William — replace with real founder photo (1200×1200 sq, focus eyes) */}
                                <Image
                                    src="/founder.jpg"
                                    alt="Bill Beltz, founder and lead engineer of QUANT LAB USA INC custom software and trading systems firm in Macon, Georgia"
                                    fill
                                    sizes="192px"
                                    className="object-cover"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Bio — lines reveal in a cascade */}
                    <motion.div
                        variants={cascade}
                        initial={false}
                        animate={revealed ? "show" : "hidden"}
                    >
                        <motion.span
                            variants={cascadeLine}
                            className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-3"
                        >
                            Who We Are
                        </motion.span>
                        <motion.h2
                            variants={cascadeLine}
                            className="text-3xl md:text-4xl font-bold text-white mb-4"
                        >
                            William Beltz
                        </motion.h2>
                        <motion.p
                            variants={cascadeLine}
                            className="text-gray-400 text-base leading-relaxed mb-2"
                        >
                            Founder & Lead Engineer
                        </motion.p>
                        <motion.p
                            variants={cascadeLine}
                            className="text-gray-400 text-base leading-relaxed mb-6"
                        >
                            I started QuantLab because I kept seeing businesses stuck with
                            software that didn't fit how they actually work. I build the
                            systems myself — from database to deployment — and I work directly
                            with every client. No account managers, no handoffs.
                        </motion.p>

                        <motion.div
                            variants={cascadeLine}
                            className="flex items-center gap-4"
                        >
                            <MagneticLink
                                href="https://linkedin.com/in/williambeltz"
                                label="LinkedIn"
                                enabled={depthOn}
                            >
                                <Linkedin className="w-5 h-5" />
                            </MagneticLink>
                            <MagneticLink
                                href="https://github.com/williambeltz"
                                label="GitHub"
                                enabled={depthOn}
                            >
                                <Github className="w-5 h-5" />
                            </MagneticLink>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
