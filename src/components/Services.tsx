"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/AnimatedSection";
import { Terminal, Bot, Globe, CreditCard, FileText, Shield } from "lucide-react";

const services = [
    {
        icon: Terminal,
        color: "from-blue-500 to-cyan-400",
        glow: "rgba(59,130,246,0.3)",
        title: "Custom CRM & ECM Systems",
        headline: "Stop losing deals in spreadsheets.",
        description:
            "Your sales team shouldn't be fighting your tools. We build CRMs around how your business actually works — custom pipelines, automated follow-ups, and dashboards that show you exactly who's about to close and who's going cold.",
        proof: "Teams using our CRMs report 40% fewer dropped leads within 60 days.",
    },
    {
        icon: Bot,
        color: "from-violet-500 to-blue-400",
        glow: "rgba(139,92,246,0.3)",
        title: "Algorithmic Trading Bots",
        headline: "Execute at machine speed, not human speed.",
        description:
            "Human traders miss windows. Our bots don't. Built with low-latency execution logic and real-time market feeds, they run 24/7 with configurable risk controls — so you stay in the market even when you're not watching.",
        proof: "Average latency under 12ms. Zero missed signals from backtested strategies.",
    },
    {
        icon: Globe,
        color: "from-cyan-500 to-emerald-400",
        glow: "rgba(6,182,212,0.3)",
        title: "High-Performance Web Portals",
        headline: "Your website should be closing deals, not just looking good.",
        description:
            "We build web portals engineered for conversion — fast load times, intuitive UX, and integrated lead capture that turns traffic into revenue. From client portals to full SaaS platforms.",
        proof: "Average 2.8x increase in qualified lead conversion vs. template-built sites.",
    },
    {
        icon: CreditCard,
        color: "from-emerald-500 to-cyan-400",
        glow: "rgba(16,185,129,0.3)",
        title: "Payment & Invoicing Systems",
        headline: "Get paid faster. Chase invoices less.",
        description:
            "Custom payment integrations with Stripe, ACH, and net-30 terms baked right in. Auto-generated invoices, payment reminders, and revenue dashboards — so cash flow is always visible.",
        proof: "Clients average a 9-day reduction in days-sales-outstanding after launch.",
    },
    {
        icon: FileText,
        color: "from-orange-500 to-yellow-400",
        glow: "rgba(249,115,22,0.3)",
        title: "Estimating & Proposal Generators",
        headline: "Send winning proposals in minutes, not hours.",
        description:
            "Stop rebuilding quotes from scratch. Our estimating engines let your team generate accurate, branded proposals from a set of inputs — faster bids, fewer errors, more closes.",
        proof: "One client cut proposal time from 4 hours to under 20 minutes per job.",
    },
    {
        icon: Shield,
        color: "from-rose-500 to-pink-400",
        glow: "rgba(244,63,94,0.3)",
        title: "Enterprise Architecture",
        headline: "Infrastructure that grows with you — and never goes down.",
        description:
            "We architect cloud-native systems with auto-scaling, redundancy, and 99.99% uptime built in. Whether you're serving 100 or 100,000 users, your platform stays fast, stable, and secure.",
        proof: "Bank-grade security standards. Zero unplanned outages across all active deployments.",
    },
];

export function Services() {
    return (
        <section className="py-24 relative overflow-hidden" id="services">
            <div className="container mx-auto px-6 relative z-10">
                <AnimatedSection className="text-center mb-20 max-w-3xl mx-auto">
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                        What We Build
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        Software that moves your business{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-quant-blue to-cyan-400">
                            forward.
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Every product we ship is built to solve a real problem with measurable results — not to check a box.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <AnimatedSection key={idx} delay={idx * 0.08}>
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.25, ease: "easeOut" }}
                                    className="group relative h-full rounded-2xl border border-white/5 bg-[#0d1526]/80 backdrop-blur-sm p-7 overflow-hidden cursor-default"
                                    style={{
                                        boxShadow: "0 0 0 1px rgba(255,255,255,0.04)",
                                    }}
                                >
                                    {/* Hover glow */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                                        style={{
                                            background: `radial-gradient(circle at 30% 0%, ${service.glow}, transparent 65%)`,
                                        }}
                                    />
                                    {/* Top border accent */}
                                    <div
                                        className={`absolute top-0 left-6 right-6 h-px bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-60 transition-opacity duration-500`}
                                    />

                                    <div className="relative z-10 flex flex-col h-full">
                                        {/* Icon */}
                                        <div
                                            className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 mb-5 w-fit`}
                                            style={{ boxShadow: `0 0 20px ${service.glow}` }}
                                        >
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>

                                        {/* Title */}
                                        <div className="mb-3">
                                            <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-1">{service.title}</p>
                                            <h3 className="text-lg font-bold text-white leading-snug">{service.headline}</h3>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
                                            {service.description}
                                        </p>

                                        {/* Proof stat */}
                                        <div className="mt-auto pt-4 border-t border-white/5">
                                            <p className={`text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                                                ✓ {service.proof}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatedSection>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
