"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { ArrowRight } from "lucide-react";
import { HeroCanvas } from "./HeroCanvas";
import { ConsultationModal } from "./ConsultationModal";

export function Hero() {
    const [modalOpen, setModalOpen] = useState(false);

    function scrollToServices() {
        document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
    }
    return (
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden w-full pt-20">

            {/* Custom architecture visualization canvas */}
            <HeroCanvas />

            {/* Deep dark radial vignette so text stays readable */}
            <div
                className="absolute inset-0 pointer-events-none z-[1]"
                style={{
                    background:
                        "radial-gradient(ellipse 60% 70% at 50% 50%, transparent 20%, rgba(17,24,39,0.65) 65%, rgba(17,24,39,0.92) 100%)",
                }}
            />

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.85, filter: "blur(12px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8"
                >
                    <img
                        src="/logo.png"
                        alt="QuantLab Software Solutions"
                        className="h-16 sm:h-20 w-auto object-contain"
                        style={{
                            filter: "drop-shadow(0 0 18px rgba(56,189,248,0.7)) drop-shadow(0 0 40px rgba(56,189,248,0.35)) brightness(1.15) saturate(1.3)",
                        }}
                    />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 max-w-5xl leading-[1.05]"
                >
                    Engineering the{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
                        Next Level.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
                >
                    From fully automated trading bots to enterprise custom software.{" "}
                    We build robust, scalable systems that execute with absolute precision.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 items-center"
                >
                    <Button size="lg" glow className="min-w-[200px]" onClick={scrollToServices}>
                        Explore Services
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="glass" size="lg" className="min-w-[200px]" onClick={() => setModalOpen(true)}>
                        Book a Consultation
                    </Button>
                </motion.div>

                {/* Live status bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="mt-16 flex items-center gap-6 text-xs text-gray-500 font-mono"
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

            {/* Bottom gradient blend */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#111827] to-transparent pointer-events-none z-[2]" />

            <ConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </section>
    );
}
