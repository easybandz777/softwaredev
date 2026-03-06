"use client";

import React from "react";
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

const proofPoints = [
    {
        tag: "Trading Infrastructure",
        title: "Multi-strategy algo bots",
        detail: "MA Supertrend · VWAP · Momentum · High-frequency execution with live risk controls.",
        color: "from-violet-500 to-blue-500",
    },
    {
        tag: "Business Platform",
        title: "Full business ops hub",
        detail: "Inventory · Work orders · Invoicing · Employee management · Role-based access.",
        color: "from-cyan-500 to-teal-500",
    },
    {
        tag: "SaaS & Licensing",
        title: "License management server",
        detail: "JWT validation · Seat tracking · Expiry enforcement · Customer portal.",
        color: "from-blue-500 to-indigo-500",
    },
    {
        tag: "Client Platforms",
        title: "Industry-specific builds",
        detail: "Automotive · Construction · Entertainment · Financial services. All from scratch.",
        color: "from-emerald-500 to-cyan-500",
    },
];

export function About() {
    return (
        <section className="py-28 relative overflow-hidden bg-black/40 border-y border-white/5" id="about">
            {/* Background glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-quant-blue/8 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-500/6 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Top: headline + stats */}
                <div className="flex flex-col lg:flex-row items-start gap-16 mb-20">
                    <AnimatedSection className="w-full lg:w-1/2">
                        <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                            Our Story
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Born in the{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-quant-blue to-cyan-400">
                                unforgiving margins
                            </span>{" "}
                            of algo trading.
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-4">
                            QuantLab was built by engineers who wrote code where a single bug costs real money in real time. When your bot executes thousands of trades per second, "good enough" is not an option.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            That same obsession with precision, latency, and uptime is what we bring to every project — whether it's a CRM, a business ops platform, or a payment system handling your revenue.
                        </p>
                    </AnimatedSection>

                    {/* Stats grid */}
                    <AnimatedSection delay={0.15} className="w-full lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4 h-full">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.2 }}
                                    className="relative rounded-2xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm p-6 overflow-hidden group"
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                                        style={{ background: "radial-gradient(circle at 30% 0%, rgba(56,189,248,0.08), transparent 70%)" }} />
                                    <div className="relative z-10">
                                        <p className="text-4xl md:text-5xl font-black text-white mb-1 tracking-tight">{stat.value}</p>
                                        <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>

                {/* Middle: tech stack */}
                <AnimatedSection delay={0.1} className="mb-20">
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

                {/* Bottom: proof points grid */}
                <AnimatedSection delay={0.15}>
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-6">
                        Proof — Real projects, real results
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {proofPoints.map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -3 }}
                                transition={{ duration: 0.2 }}
                                className="relative rounded-2xl border border-white/6 bg-[#0d1526]/70 p-5 overflow-hidden group"
                            >
                                {/* top accent line */}
                                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.color} opacity-60`} />
                                <div className="relative z-10">
                                    <span className={`inline-block text-xs font-semibold tracking-wider uppercase mb-3 text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>
                                        {item.tag}
                                    </span>
                                    <h4 className="text-white font-bold text-base mb-2 leading-snug">{item.title}</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed">{item.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </AnimatedSection>

            </div>
        </section>
    );
}
