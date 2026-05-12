"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/AnimatedSection";

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

export function About() {
    return (
        <section className="py-28 relative overflow-hidden bg-black/40 border-y border-white/5" id="about">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-quant-blue/8 rounded-full blur-[140px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                <div className="flex flex-col lg:flex-row items-start gap-16 mb-20">

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
                            Front end to database. Auth to payments. Deployment to monitoring.
                            We own every layer of the stack.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            We've shipped platforms across trading, automotive, construction, and entertainment.
                            Not a theme. Not a template.
                        </p>

                        <div className="mt-10 grid grid-cols-3 gap-4">
                            {stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="rounded-xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm p-5"
                                >
                                    <p className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tight">{stat.value}</p>
                                    <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.2} className="w-full lg:w-1/2">
                        <div className="relative rounded-2xl border border-white/8 bg-[#080e1c]/80 backdrop-blur-sm p-6 overflow-hidden">
                            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-5">
                                System Architecture
                            </p>

                            <div className="flex flex-col gap-2">
                                {layers.map((layer, i) => (
                                    <motion.div
                                        key={layer.id}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
                                        className="relative rounded-xl border px-5 py-3.5"
                                        style={{
                                            borderColor: `${layer.color}30`,
                                            backgroundColor: `${layer.color}08`,
                                        }}
                                    >
                                        <div
                                            className="absolute left-0 top-0 bottom-0 w-[3px] rounded-l-xl"
                                            style={{ backgroundColor: layer.color }}
                                        />
                                        <div className="relative z-10">
                                            <p className="text-xs font-bold tracking-widest uppercase mb-0.5" style={{ color: layer.color }}>
                                                {layer.label}
                                            </p>
                                            <p className="text-xs text-gray-500">{layer.sublabel}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                <AnimatedSection delay={0.1} className="mb-16">
                    <div className="rounded-2xl border border-white/6 bg-[#0a101e]/60 backdrop-blur-sm p-8">
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-5">
                            Tech Stack
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
