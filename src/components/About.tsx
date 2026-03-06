"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/AnimatedSection";

const stats = [
    { value: "20+", label: "Projects Shipped" },
    { value: "5", label: "Live Trading Systems" },
    { value: "4+", label: "Industries Served" },
    { value: "0", label: "Unplanned Outages" },
];

const stack = [
    "Next.js", "React", "TypeScript", "Node.js",
    "Prisma", "PostgreSQL", "Stripe", "Docker",
    "Vercel", "Neon DB", "Tailwind", "Framer Motion",
    "Fly.io", "DigitalOcean", "Sentry", "JWT Auth",
];

// System architecture layers for the animated diagram
const layers = [
    {
        id: "ui",
        label: "CLIENT INTERFACE",
        sublabel: "Next.js · React · TypeScript",
        color: "#38bdf8",
        glow: "rgba(56,189,248,0.25)",
    },
    {
        id: "api",
        label: "API & BUSINESS LOGIC",
        sublabel: "Node.js · Route Handlers · Middleware",
        color: "#818cf8",
        glow: "rgba(129,140,248,0.25)",
    },
    {
        id: "data",
        label: "DATA LAYER",
        sublabel: "Prisma ORM · PostgreSQL · Neon DB",
        color: "#34d399",
        glow: "rgba(52,211,153,0.25)",
    },
    {
        id: "payments",
        label: "PAYMENTS & AUTH",
        sublabel: "Stripe · JWT · Role-Based Access",
        color: "#f59e0b",
        glow: "rgba(245,158,11,0.25)",
    },
    {
        id: "infra",
        label: "DEPLOYMENT & INFRA",
        sublabel: "Vercel · Docker · Fly.io · Sentry",
        color: "#f472b6",
        glow: "rgba(244,114,182,0.25)",
    },
];

// Animated pulse dot travelling down a connector line
function PulseDot({ color, delay }: { color: string; delay: number }) {
    return (
        <motion.div
            className="absolute left-1/2 w-1.5 h-1.5 rounded-full -translate-x-1/2"
            style={{ backgroundColor: color, boxShadow: `0 0 6px ${color}` }}
            initial={{ top: 0, opacity: 0 }}
            animate={{ top: "100%", opacity: [0, 1, 1, 0] }}
            transition={{
                duration: 1.4,
                delay,
                repeat: Infinity,
                repeatDelay: 2.2,
                ease: "easeInOut",
            }}
        />
    );
}

export function About() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => { setMounted(true); }, []);

    return (
        <section className="py-28 relative overflow-hidden bg-black/40 border-y border-white/5" id="about">
            {/* Background glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-quant-blue/8 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/6 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* ── Section 1: Headline + System Diagram ── */}
                <div className="flex flex-col lg:flex-row items-start gap-16 mb-20">

                    {/* Left: Option C copy */}
                    <AnimatedSection className="w-full lg:w-1/2 flex flex-col justify-center">
                        <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                            How We Work
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-7 leading-tight">
                            Full-stack means{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-quant-blue to-cyan-400">
                                the whole thing.
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-5">
                            Front end to database. Auth to payments. Deployment pipeline to monitoring. We own every layer — because a platform that breaks at any one of them breaks everywhere.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            We've shipped platforms across trading, automotive, construction, and entertainment — each one custom-built to fit how that business actually works. Not a theme. Not a template.
                        </p>

                        {/* Mini stat row under copy */}
                        <div className="mt-10 grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative rounded-xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm p-5 overflow-hidden group"
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
                                        style={{ background: "radial-gradient(circle at 30% 0%, rgba(56,189,248,0.08), transparent 70%)" }} />
                                    <p className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tight relative z-10">{stat.value}</p>
                                    <p className="text-xs text-gray-400 font-medium relative z-10">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>

                    {/* Right: Animated system architecture diagram */}
                    <AnimatedSection delay={0.2} className="w-full lg:w-1/2">
                        <div className="relative rounded-2xl border border-white/8 bg-[#080e1c]/80 backdrop-blur-sm p-6 overflow-hidden">
                            {/* Window chrome */}
                            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/6">
                                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                <span className="ml-3 text-xs font-mono text-gray-500">system_architecture.diagram</span>
                            </div>

                            {/* Layers */}
                            <div className="flex flex-col gap-0">
                                {layers.map((layer, i) => (
                                    <div key={layer.id} className="flex flex-col items-stretch">
                                        {/* Layer box */}
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.12, duration: 0.4, ease: "easeOut" }}
                                            whileHover={{ x: 4 }}
                                            className="relative rounded-xl border px-5 py-3.5 group cursor-default overflow-hidden"
                                            style={{
                                                borderColor: `${layer.color}30`,
                                                backgroundColor: `${layer.color}08`,
                                            }}
                                        >
                                            {/* Left accent bar */}
                                            <div
                                                className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl"
                                                style={{ backgroundColor: layer.color }}
                                            />
                                            {/* Hover glow */}
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                                                style={{ background: `radial-gradient(ellipse at 0% 50%, ${layer.glow}, transparent 70%)` }}
                                            />
                                            <div className="relative z-10 flex items-center justify-between">
                                                <div>
                                                    <p className="text-xs font-bold tracking-widest uppercase mb-0.5" style={{ color: layer.color }}>
                                                        {layer.label}
                                                    </p>
                                                    <p className="text-xs text-gray-500">{layer.sublabel}</p>
                                                </div>
                                                {/* Pulsing dot indicator */}
                                                <motion.div
                                                    className="w-2 h-2 rounded-full flex-shrink-0"
                                                    style={{ backgroundColor: layer.color }}
                                                    animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
                                                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                                />
                                            </div>
                                        </motion.div>

                                        {/* Connector line + pulse dot (between layers) */}
                                        {i < layers.length - 1 && mounted && (
                                            <div className="relative h-6 flex justify-center">
                                                {/* Static line */}
                                                <div
                                                    className="w-px h-full"
                                                    style={{
                                                        background: `linear-gradient(to bottom, ${layer.color}60, ${layers[i + 1].color}60)`,
                                                    }}
                                                />
                                                {/* Animated pulse travelling down */}
                                                <PulseDot color={layer.color} delay={i * 0.5 + 0.8} />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            {/* Bottom tag */}
                            <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span className="text-xs font-mono text-gray-500">All layers owned. All layers shipped.</span>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* ── Section 2: Tech Stack ── */}
                <AnimatedSection delay={0.1} className="mb-16">
                    <div className="rounded-2xl border border-white/6 bg-[#0a101e]/60 backdrop-blur-sm p-8">
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-5">
                            Tech Stack — What we build with
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                            {stack.map((tech, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.04, duration: 0.3 }}
                                    className="px-3.5 py-1.5 rounded-full text-sm font-medium border border-white/8 bg-white/4 text-gray-300 hover:border-quant-blue/40 hover:text-white hover:bg-quant-blue/8 transition-all duration-200 cursor-default"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

            </div>
        </section>
    );
}
