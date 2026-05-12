"use client";

import React from "react";
import Link from "next/link";
import { AnimatedSection } from "./ui/AnimatedSection";
import { Terminal, Bot, Globe, CreditCard, Shield, Lock, ArrowRight } from "lucide-react";

const services = [
    {
        icon: Terminal,
        slug: "custom-business-software",
        color: "from-blue-500 to-cyan-400",
        title: "Custom Business Software",
        headline: "Your business runs differently. Your software should too.",
        description:
            "CRMs, operations dashboards, work order systems, inventory tracking — we build the internal tools your team actually needs. Every platform is shaped around your workflows, not the other way around. We've shipped custom systems for motorcycle shops, contractors, musicians, and trading firms.",
        tag: "In production across 4 industries",
    },
    {
        icon: Bot,
        slug: "algorithmic-trading-systems",
        color: "from-violet-500 to-blue-400",
        title: "Algorithmic Trading Systems",
        headline: "Live trading bots. Real money. Real markets.",
        description:
            "We've built and deployed multiple live trading systems — MA Supertrend, VWAP, momentum, and multi-strategy setups with real-time market feeds, configurable risk controls, and 24/7 uptime. These aren't backtested prototypes. They're running.",
        tag: "5 live systems deployed",
    },
    {
        icon: Globe,
        slug: "web-applications",
        color: "from-cyan-500 to-emerald-400",
        title: "Web Applications & Portals",
        headline: "Websites that actually do something.",
        description:
            "Client portals, SaaS apps, artist sites, contractor platforms — built for speed, conversion, and real use. Deployed on Vercel with global CDN, not sitting on a shared hosting plan somewhere.",
        tag: "Full-stack web apps in production",
    },
    {
        icon: CreditCard,
        slug: "payments-invoicing-licensing",
        color: "from-emerald-500 to-cyan-400",
        title: "Payments, Invoicing & Licensing",
        headline: "Get paid. Manage access. Ship software.",
        description:
            "Stripe integrations, ACH, auto-generated invoices, payment reminders, revenue dashboards. We also build license servers and subscription engines — JWT-based validation, usage tracking, expiry enforcement, and customer portals for seat management.",
        tag: "Live payment and licensing systems shipped",
    },
    {
        icon: Shield,
        slug: "penetration-testing",
        color: "from-red-500 to-orange-400",
        title: "Offensive Security & Pentesting",
        headline: "We break in so someone else doesn't.",
        description:
            "Full-scope penetration testing — network, wireless, web apps, Active Directory. We run real attacks: credential spraying, lateral movement, Kerberos abuse, ADCS exploitation, C2 infrastructure. Every finding is mapped to MITRE ATT&CK with a clear remediation path.",
        tag: "Custom red team toolkit with 11 attack modules",
    },
    {
        icon: Lock,
        slug: "cloud-infrastructure",
        color: "from-pink-500 to-violet-400",
        title: "Cloud Infrastructure & DevOps",
        headline: "Deployment, monitoring, and infra that doesn't break.",
        description:
            "Docker, Nginx, DigitalOcean, Fly.io, Vercel — we set up CI/CD pipelines, auto-scaling, monitoring via Sentry, and production deployments you don't have to babysit. Zero unplanned outages across all active deployments.",
        tag: "Zero unplanned outages",
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
                        Software that solves{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-quant-blue to-cyan-400">
                            real problems.
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        We don't build demos. Everything here is running in production
                        for real businesses — from trading systems to full internal platforms.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <AnimatedSection key={idx} delay={idx * 0.06}>
                                <Link
                                    href={`/services/${service.slug}`}
                                    className="group relative block h-full rounded-2xl border border-white/5 bg-[#0d1526]/80 backdrop-blur-sm p-7 overflow-hidden transition-colors hover:border-white/15"
                                >
                                    <div className="flex flex-col h-full">
                                        <div
                                            className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 mb-5 w-fit`}
                                        >
                                            <Icon className="w-5 h-5 text-white" />
                                        </div>

                                        <div className="mb-3">
                                            <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-1">{service.title}</p>
                                            <h3 className="text-lg font-bold text-white leading-snug">{service.headline}</h3>
                                        </div>

                                        <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
                                            {service.description}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                            <p className={`text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                                                {service.tag}
                                            </p>
                                            <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        );
                    })}
                </div>

                <AnimatedSection className="mt-12 text-center">
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 text-sm font-medium text-quant-blue hover:text-cyan-400 transition-colors"
                    >
                        See all services
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </AnimatedSection>
            </div>
        </section>
    );
}
