"use client";

import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { motion, useInView, useReducedMotion, useScroll } from "framer-motion";
import {
    ArrowRight, CheckCircle, Phone, Mail, Clock, Shield
} from "lucide-react";
import { Button } from "./ui/Button";

const ConsultationModal = dynamic(
    () => import("./ConsultationModal").then((m) => m.ConsultationModal),
    { ssr: false }
);

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const TRUST_ITEMS = [
    { icon: Clock, text: "Response within 24 hours" },
    { icon: Shield, text: "100% confidential — NDA available" },
    { icon: CheckCircle, text: "No commitment required" },
    { icon: Phone, text: "Free 30-min strategy call" },
];

const WHAT_HAPPENS = [
    { step: "01", title: "Submit your request", desc: "Fill out the 3-step form — takes under 2 minutes." },
    { step: "02", title: "We review & reach out", desc: "You'll hear from us within 1 business day with next steps." },
    { step: "03", title: "Free strategy call", desc: "We map out a solution, timeline, and transparent quote." },
];

/** True on hover-capable lg+ viewports — gates the scroll-linked underline. */
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

export function Contact() {
    const [modalOpen, setModalOpen] = useState(false);
    const motionOK = useMotionOK();
    const desktopMotion = useDesktopMotion();
    const underlineOn = desktopMotion && motionOK;

    const headerRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress: headerProgress } = useScroll({
        target: headerRef,
        offset: ["start end", "start center"],
    });

    const stepsRef = useRef<HTMLDivElement | null>(null);
    const stepsInView = useInView(stepsRef, { once: true });
    const stepsRevealed = !motionOK || stepsInView;

    return (
        <>
            <ConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />

            <section className="py-24 relative bg-quant-bg" id="contact">
                {/* Section seam — hairline + center glyph at the section's top edge */}
                <div aria-hidden="true" className="absolute inset-x-0 top-0 pointer-events-none">
                    <div className="relative mx-auto max-w-5xl px-6">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-sky-400/25 to-transparent" />
                        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-1.5 w-1.5 rotate-45 border border-sky-400/40 bg-quant-bg" />
                    </div>
                </div>

                {/* Ambient glow */}
                <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(56,189,248,0.06), transparent)" }} />

                <div className="container mx-auto px-6 relative z-10">

                    {/* ── Section header ── */}
                    <Reveal>
                        <div ref={headerRef} className="text-center mb-16">
                            <div className="flex items-center justify-center gap-3 mb-5" aria-hidden="true">
                                <span className="h-px w-6 bg-gradient-to-r from-transparent to-sky-400/60" />
                                <span className="font-mono text-[11px] tracking-[0.3em] uppercase text-sky-400/90">SEC · 06 — START A BUILD</span>
                                <span className="h-px w-6 bg-gradient-to-l from-transparent to-sky-400/60" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                                Ready to <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent">Build?</span>
                            </h2>
                            {/* Scroll-linked underline — draws across as the heading enters */}
                            <motion.div
                                aria-hidden="true"
                                className="mx-auto mb-5 h-px w-44 md:w-64 pointer-events-none"
                                style={{
                                    scaleX: underlineOn ? headerProgress : 1,
                                    background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.7), transparent)",
                                }}
                            />
                            <p className="text-gray-400 text-lg max-w-xl mx-auto">
                                Tell us what you need. We'll design a custom solution and deliver a transparent quote — no fluff, no runaround.
                            </p>
                        </div>
                    </Reveal>

                    {/* ── Main CTA card ── */}
                    <Reveal delay={0.15}>
                        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                            {/* Left: CTA + trust badges — gradient hairline surface, the most premium panel on the page */}
                            <div className="group relative rounded-2xl p-px bg-gradient-to-b from-sky-400/25 via-white/8 to-violet-400/20"
                                style={{ boxShadow: "0 0 80px rgba(56,189,248,0.06), 0 30px 60px rgba(0,0,0,0.5)" }}>
                                {/* Hover: hairline intensifies via opacity-crossfade of a duplicate gradient layer */}
                                <div aria-hidden="true"
                                    className="absolute inset-0 rounded-2xl bg-gradient-to-b from-sky-400/50 via-white/8 to-violet-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                <div className="relative rounded-[15px] bg-quant-card/80 backdrop-blur-sm p-8 md:p-10 flex flex-col justify-between [box-shadow:inset_0_1px_0_rgba(255,255,255,0.06)]">
                                    {/* Accent top bar */}
                                    <div aria-hidden="true" className="absolute top-0 left-8 right-8 h-px rounded-full pointer-events-none"
                                        style={{ background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.5), transparent)" }} />

                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-2">Book a Free Consultation</h3>
                                        <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                            Share your vision and we'll handle the rest — architecture, development, delivery.
                                            Custom software that actually fits your business.
                                        </p>

                                        {/* Trust items */}
                                        <div className="space-y-3 mb-10">
                                            {TRUST_ITEMS.map(({ icon: Icon, text }) => (
                                                <div key={text} className="flex items-center gap-3">
                                                    <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                                                        style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)" }}>
                                                        <Icon className="w-3.5 h-3.5 text-sky-400" />
                                                    </div>
                                                    <span className="text-sm text-gray-300">{text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA button — shared ui/Button so the upgraded surface applies automatically */}
                                    <Button
                                        variant="primary"
                                        size="md"
                                        onClick={() => setModalOpen(true)}
                                        className="w-full py-4 font-bold"
                                    >
                                        Start Your Project
                                        <ArrowRight className="w-5 h-5" />
                                    </Button>

                                    <p className="text-center text-xs text-gray-600 mt-3">
                                        No commitment · Takes 2 minutes
                                    </p>
                                </div>
                            </div>

                            {/* Right: How it works */}
                            <div ref={stepsRef} className="flex flex-col gap-5">
                                <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase">How it works</p>
                                {WHAT_HAPPENS.map(({ step, title, desc }, i) => (
                                    <motion.div
                                        key={step}
                                        initial={false}
                                        animate={stepsRevealed ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                        transition={
                                            stepsRevealed
                                                ? { delay: i * 0.1, duration: 0.5 }
                                                : { duration: 0 }
                                        }
                                        className="flex gap-5 p-5 rounded-2xl transition-colors duration-200 hover:bg-white/[0.02]"
                                        style={{ border: "1px solid rgba(255,255,255,0.05)" }}
                                    >
                                        <div className="text-3xl font-black leading-none flex-shrink-0"
                                            style={{ WebkitTextStroke: "1px rgba(56,189,248,0.25)", color: "transparent" }}>
                                            {step}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">{title}</h4>
                                            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Bottom contact line */}
                                <div className="flex items-center gap-2 mt-2 px-1">
                                    <Mail className="w-4 h-4 text-gray-600" />
                                    <span className="text-sm text-gray-400">
                                        Prefer email?{" "}
                                        <a href="mailto:beltz@quantlabusa.dev"
                                            className="text-sky-400 hover:text-sky-300 transition-colors">
                                            beltz@quantlabusa.dev
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>

            </section>
        </>
    );
}
