"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { HeroCanvas } from "./HeroCanvas";
import { ConsultationModal } from "./ConsultationModal";

export function Hero() {
    const [modalOpen, setModalOpen] = useState(false);

    function scrollToServices() {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <section className="relative min-h-[100vh] flex items-center overflow-hidden w-full pt-20">

            {/* Node graph background */}
            <HeroCanvas />

            {/* Vignette — heavier on the left so text reads cleanly */}
            <div
                className="absolute inset-0 pointer-events-none z-[1]"
                style={{
                    background:
                        "radial-gradient(ellipse 80% 100% at 20% 50%, rgba(17,24,39,0.82) 30%, rgba(17,24,39,0.5) 65%, rgba(17,24,39,0.15) 100%)",
                }}
            />

            {/* Content — left-aligned */}
            <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
                <div className="max-w-2xl">

                    {/* Eyebrow label */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <span className="h-px w-8 bg-sky-400" />
                        <span className="text-sky-400 text-xs font-mono font-semibold tracking-[0.2em] uppercase">
                            QuantLab Software Solutions
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05]"
                    >
                        Engineering
                        <br />
                        the{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
                            Next Level.
                        </span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed max-w-lg"
                    >
                        From fully automated trading bots to enterprise custom software.
                        We build robust, scalable systems that execute with absolute precision.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
                    >
                        <Button variant="glass" size="lg" className="min-w-[220px]" onClick={() => setModalOpen(true)}>
                            Book a Consultation
                        </Button>
                    </motion.div>

                    {/* Live status */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="mt-12 flex items-center gap-6 text-xs text-gray-500 font-mono"
                    >
                        <span className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            All systems operational
                        </span>
                        <span className="text-gray-700">|</span>
                        <span>99.99% uptime</span>
                        <span className="text-gray-700">|</span>
                        <span>&lt;12ms avg latency</span>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator — bottom center */}
            <motion.button
                onClick={scrollToServices}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group cursor-pointer"
                aria-label="Explore services"
            >
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-gray-500 group-hover:text-sky-400 transition-colors">
                    Explore Services
                </span>
                <div className="flex flex-col items-center gap-0.5">
                    {/* Animated line + chevron */}
                    <motion.div
                        className="w-px bg-gradient-to-b from-transparent via-sky-500 to-sky-500"
                        animate={{ height: ["16px", "28px", "16px"] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.svg
                        width="12" height="8" viewBox="0 0 12 8" fill="none"
                        animate={{ y: [0, 3, 0] }}
                        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                        className="text-sky-500 group-hover:text-sky-300 transition-colors"
                    >
                        <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                </div>
            </motion.button>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#111827] to-transparent pointer-events-none z-[2]" />

            <ConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
    );
}
