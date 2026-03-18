"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./ui/AnimatedSection";
import { ConsultationModal } from "./ConsultationModal";
import {
    ArrowRight, CheckCircle, Phone, Mail, Clock, Shield
} from "lucide-react";

const TRUST_ITEMS = [
    { icon: Clock, text: "Response within 24 hours" },
    { icon: Shield, text: "100% confidential — NDA available" },
    { icon: CheckCircle, text: "No commitment required" },
    { icon: Phone, text: "Free 30-min strategy call" },
];

const WHAT_HAPPENS = [
    { step: "01", title: "Submit your request", desc: "Fill out the 3-step form — takes under 2 minutes." },
    { step: "02", title: "We review & reach out", desc: "You'll hear from us within 1 business day with next steps." },
    { step: "03", title: "Free strategy call", desc: "We map out a solution, timeline, and transparent quote." },
];

export function Contact() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <ConsultationModal open={modalOpen} onClose={() => setModalOpen(false)} />

            <section className="py-24 relative bg-quant-bg" id="contact">
                {/* Ambient glow */}
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 80% 40% at 50% 100%, rgba(56,189,248,0.06), transparent)" }} />

                <div className="container mx-auto px-6 relative z-10">

                    {/* ── Section header ── */}
                    <AnimatedSection>
                        <div className="text-center mb-16">
                            <span className="inline-block text-xs font-semibold tracking-widest text-sky-400 uppercase mb-4 px-3 py-1 rounded-full"
                                style={{ background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.18)" }}>
                                Get Started
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                Ready to <span className="text-quant-blue">Build?</span>
                            </h2>
                            <p className="text-gray-400 text-lg max-w-xl mx-auto">
                                Tell us what you need. We'll design a custom solution and deliver a transparent quote — no fluff, no runaround.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* ── Main CTA card ── */}
                    <AnimatedSection delay={0.15}>
                        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

                            {/* Left: CTA + trust badges */}
                            <div className="rounded-3xl p-8 md:p-10 flex flex-col justify-between"
                                style={{
                                    background: "linear-gradient(145deg, #0d1628 0%, #090e1c 100%)",
                                    border: "1px solid rgba(56,189,248,0.14)",
                                    boxShadow: "0 0 80px rgba(56,189,248,0.06), 0 30px 60px rgba(0,0,0,0.5)",
                                }}>
                                {/* Accent top bar */}
                                <div className="absolute top-0 left-8 right-8 h-px rounded-full"
                                    style={{ background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.5), transparent)" }} />

                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Book a Free Consultation</h3>
                                    <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                                        Share your vision and we'll handle the rest — architecture, development, delivery.
                                        Custom software that actually fits your business.
                                    </p>

                                    {/* Trust items */}
                                    <div className="space-y-3 mb-10">
                                        {TRUST_ITEMS.map(({ icon: Icon, text }) => (
                                            <div key={text} className="flex items-center gap-3">
                                                <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                                                    style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)" }}>
                                                    <Icon className="w-3.5 h-3.5 text-sky-400" />
                                                </div>
                                                <span className="text-sm text-gray-300">{text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA button */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setModalOpen(true)}
                                    className="w-full py-4 rounded-2xl font-bold text-white text-base flex items-center justify-center gap-2 transition-all duration-200"
                                    style={{
                                        background: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
                                        boxShadow: "0 0 40px rgba(56,189,248,0.35), 0 4px 20px rgba(0,0,0,0.3)",
                                    }}
                                >
                                    Start Your Project
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>

                                <p className="text-center text-xs text-gray-600 mt-3">
                                    No commitment · Takes 2 minutes
                                </p>
                            </div>

                            {/* Right: How it works */}
                            <div className="flex flex-col gap-5">
                                <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">How it works</p>
                                {WHAT_HAPPENS.map(({ step, title, desc }, i) => (
                                    <motion.div
                                        key={step}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.5 }}
                                        className="flex gap-5 p-5 rounded-2xl transition-colors duration-200 hover:bg-white/[0.02]"
                                        style={{ border: "1px solid rgba(255,255,255,0.05)" }}
                                    >
                                        <div className="text-3xl font-black leading-none flex-shrink-0"
                                            style={{ WebkitTextStroke: "1px rgba(56,189,248,0.25)", color: "transparent" }}>
                                            {step}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold mb-1">{title}</h4>
                                            <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
                                        </div>
                                    </motion.div>
                                ))}

                                {/* Bottom contact line */}
                                <div className="flex items-center gap-2 mt-2 px-1">
                                    <Mail className="w-4 h-4 text-gray-600" />
                                    <span className="text-sm text-gray-500">
                                        Prefer email?{" "}
                                        <a href="mailto:beltz@quantlabusa.dev"
                                            className="text-sky-400 hover:text-sky-300 transition-colors">
                                            beltz@quantlabusa.dev
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>

                {/* Footer */}
                <footer className="mt-24 border-t border-white/10 pt-8 pb-4">
                    <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                        <p>&copy; {new Date().getFullYear()} QuantLab Software Solutions. All rights reserved.</p>
                    </div>
                </footer>
            </section>
        </>
    );
}
