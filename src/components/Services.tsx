"use client";

import React from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/AnimatedSection";
import { Terminal, Bot, Globe, CreditCard, FileText, Shield, Crosshair, Lock } from "lucide-react";

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
            "Human traders miss windows. Our bots don't. We've built and deployed multiple live trading systems — MA Supertrend, VWAP, momentum and multi-strategy — with real-time market feeds, configurable risk controls, and 24/7 uptime. You stay in the market even when you're not watching.",
        proof: "Average latency under 12ms. Multi-strategy systems with live position management deployed.",
    },
    {
        icon: Globe,
        color: "from-cyan-500 to-emerald-400",
        glow: "rgba(6,182,212,0.3)",
        title: "High-Performance Web Portals",
        headline: "Your website should be closing deals, not just looking good.",
        description:
            "We build web portals engineered for conversion — fast load times, intuitive UX, and integrated lead capture. From client portals and artist sites to contractor platforms and full SaaS applications deployed on Vercel with global CDN.",
        proof: "Average 2.8x increase in qualified lead conversion vs. template-built sites.",
    },
    {
        icon: CreditCard,
        color: "from-emerald-500 to-cyan-400",
        glow: "rgba(16,185,129,0.3)",
        title: "Payment & Invoicing Systems",
        headline: "Get paid faster. Chase invoices less.",
        description:
            "Custom payment integrations with Stripe, ACH, and net-30 terms baked right in. Auto-generated invoices, payment reminders, and revenue dashboards — so cash flow is always visible. We've shipped full invoicing workflows inside live business platforms.",
        proof: "Clients average a 9-day reduction in days-sales-outstanding after launch.",
    },
    {
        icon: FileText,
        color: "from-orange-500 to-yellow-400",
        glow: "rgba(249,115,22,0.3)",
        title: "Estimating & Proposal Generators",
        headline: "Send winning proposals in minutes, not hours.",
        description:
            "Stop rebuilding quotes from scratch. Our estimating engines let your team generate accurate, branded proposals from a set of inputs — faster bids, fewer errors, more closes. Integrated directly into your existing CRM or portal.",
        proof: "One client cut proposal time from 4 hours to under 20 minutes per job.",
    },
    {
        icon: Shield,
        color: "from-rose-500 to-pink-400",
        glow: "rgba(244,63,94,0.3)",
        title: "Enterprise Architecture & Infra",
        headline: "Infrastructure that grows with you — and never goes down.",
        description:
            "We architect cloud-native systems with Docker, Nginx, DigitalOcean, Fly.io, and Vercel — with auto-scaling, redundancy, and 99.99% uptime baked in. From monorepo backend setups with CI/CD to full production deployments monitored via Sentry.",
        proof: "Zero unplanned outages across all active deployments. Bank-grade security standards.",
    },
    {
        icon: Terminal,
        color: "from-indigo-500 to-violet-400",
        glow: "rgba(99,102,241,0.3)",
        title: "Business Operations Hub",
        headline: "One dashboard. Every moving part of your business.",
        description:
            "We build internal platforms that replace the chaos of disconnected tools — inventory management, work order tracking, employee scheduling, role-based access control, and real-time reporting, all in one system your team actually uses. Built for businesses that can't afford downtime.",
        proof: "Full-stack business platforms live in production: inventory, work orders, invoicing, and employee management.",
    },
    {
        icon: Shield,
        color: "from-yellow-500 to-orange-400",
        glow: "rgba(234,179,8,0.3)",
        title: "License & Subscription Management",
        headline: "Sell software. Control access. Protect your IP.",
        description:
            "Need to gate your product behind a license key, subscription tier, or hardware fingerprint? We build custom license servers and subscription engines — JWT-based validation, usage tracking, expiry enforcement, and a branded customer portal to manage seats.",
        proof: "Live license server managing access for multiple packaged software products.",
    },
    {
        icon: Globe,
        color: "from-teal-500 to-green-400",
        glow: "rgba(20,184,166,0.3)",
        title: "Industry-Specific Platforms",
        headline: "Built for your trade. Not a template dressed up as one.",
        description:
            "We don't reskin generic software. We've built from scratch for motorcycle shops, contractors, musicians, and trading firms — with workflows, terminology, and reporting that match how each industry actually operates. If your business has unique processes, we build tools that fit them.",
        proof: "Deployed platforms across automotive, construction, entertainment, and financial services.",
    },
    {
        icon: Crosshair,
        color: "from-red-500 to-orange-400",
        glow: "rgba(239,68,68,0.3)",
        title: "Penetration Testing & Red Team Ops",
        headline: "Find the holes before someone else does.",
        description:
            "Full-scope offensive security engagements — network penetration testing, Active Directory attacks, wireless security audits, web application testing, and advanced red team operations. We use custom-built tooling to simulate real-world adversaries across your entire attack surface: credential spraying, lateral movement, Kerberos abuse, ADCS exploitation, and C2 infrastructure. Every finding is mapped to MITRE ATT&CK with actionable remediation.",
        proof: "Custom red team toolkit with 11 attack modules. MITRE ATT&CK-mapped reporting on every engagement.",
    },
    {
        icon: Lock,
        color: "from-slate-400 to-zinc-300",
        glow: "rgba(148,163,184,0.3)",
        title: "Cybersecurity Consulting",
        headline: "Security that's built in — not bolted on after a breach.",
        description:
            "From vulnerability assessments and security architecture reviews to incident response planning and compliance hardening — we help businesses lock down their infrastructure before it becomes a headline. We assess your network, endpoints, wireless, web apps, and cloud environments, then deliver executive-ready reports with prioritized remediation roadmaps.",
        proof: "Full-stack security assessments covering network, wireless, web, and Active Directory environments.",
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
                        Software that saves you time,{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-quant-blue to-cyan-400">
                            money, and headaches.
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Every product we ship is built to solve a real, measurable business problem — not to check a box. From trading bots to full business management platforms, we've shipped it.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <AnimatedSection key={idx} delay={idx * 0.06}>
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
