"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { HeroCanvas } from "./HeroCanvas";
import { ConsultationModal } from "./ConsultationModal";

const words = ["We", "build", "the", "software."];

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
                        "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(17,24,39,0.8) 100%)",
                }}
            />

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                {/* Logo — centered above headline, visible on all sizes */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <Image
                        src="/logo.png"
                        alt="QuantLab Software Solutions"
                        width={288}
                        height={288}
                        priority
                        className="w-56 sm:w-64 md:w-72 h-auto object-contain mx-auto"
                        style={{
                            filter: "drop-shadow(0 0 20px rgba(56,189,248,0.6))",
                        }}
                    />
                </motion.div>

                {/* Headline — word-by-word reveal, weight contrast */}
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
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#111827] to-transparent pointer-events-none z-[2]" />

            <ConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
    );
}
