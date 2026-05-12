"use client";

import React from "react";
import Image from "next/image";
import { AnimatedSection } from "./ui/AnimatedSection";
import { Linkedin, Github } from "lucide-react";

export function Founder() {
    return (
        <section className="py-24 relative" id="founder">
            <div className="container mx-auto px-6 relative z-10">
                <AnimatedSection>
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-12">
                        {/* Photo */}
                        <div className="flex-shrink-0">
                            <div className="relative w-48 h-48 rounded-2xl overflow-hidden border border-white/10">
                                {/* TODO: William — replace with real founder photo (1200×1200 sq, focus eyes) */}
                                <Image
                                    src="/founder.jpg"
                                    alt="William Beltz — Founder of QuantLab Software Solutions"
                                    fill
                                    sizes="192px"
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Bio */}
                        <div>
                            <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-3">
                                Who We Are
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                William Beltz
                            </h2>
                            <p className="text-gray-400 text-base leading-relaxed mb-2">
                                Founder & Lead Engineer
                            </p>
                            <p className="text-gray-400 text-base leading-relaxed mb-6">
                                I started QuantLab because I kept seeing businesses stuck with
                                software that didn't fit how they actually work. I build the
                                systems myself — from database to deployment — and I work directly
                                with every client. No account managers, no handoffs.
                            </p>

                            <div className="flex items-center gap-4">
                                <a
                                    href="https://linkedin.com/in/williambeltz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-white transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://github.com/williambeltz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-500 hover:text-white transition-colors"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
