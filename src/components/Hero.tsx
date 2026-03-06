"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { HeroCanvas } from "./HeroCanvas";
import { ConsultationModal } from "./ConsultationModal";

const words = ["Engineering", "the", "Next", "Level."];

export function Hero() {
    const [modalOpen, setModalOpen] = useState(false);

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
                        "radial-gradient(ellipse 60% 70% at 50% 50%, transparent 20%, rgba(17,24,39,0.65) 65%, rgba(17,24,39,0.92) 100%)",
                }}
            />

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-10"
                >
                    <img
                        src="/logo.png"
                        alt="QuantLab Software Solutions"
                        className="w-64 sm:w-96 md:w-[480px] h-auto object-contain"
                        style={{
                            filter: "drop-shadow(0 0 18px rgba(56,189,248,0.7)) drop-shadow(0 0 40px rgba(56,189,248,0.35)) brightness(1.15) saturate(1.3)",
                        }}
                    />
                </motion.div>

                {/* Headline — word-by-word reveal, weight contrast, no gradient */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tight mb-6 max-w-5xl leading-[1.05]">
                    {words.map((word, i) => {
                        const isAccent = word === "Next" || word === "Level.";
                        return (
                            <motion.span
                                key={word}
                                initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
                                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                                transition={{ duration: 0.65, delay: 0.1 + i * 0.12, ease: "easeOut" }}
                                className={`inline-block mr-[0.25em] ${isAccent
                                    ? "font-black text-white"
                                    : "font-light text-gray-400"
                                    }`}
                            >
                                {word}
                            </motion.span>
                        );
                    })}
                </h1>

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
                    From fully automated trading bots to enterprise custom software.{" "}
                    We build robust, scalable systems that execute with absolute precision.
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

                {/* Live status */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-14 flex items-center gap-6 text-xs text-gray-500 font-mono"
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

            {/* Scroll indicator — bottom center, replaces "Explore Services" button */}
            <motion.button
                onClick={scrollToServices}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 group cursor-pointer"
                aria-label="Explore services"
            >
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-gray-500 group-hover:text-sky-400 transition-colors duration-200">
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
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#111827] to-transparent pointer-events-none z-[2]" />

            <ConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
    );
}
