"use client";

import React from "react";
import { AnimatedSection } from "./ui/AnimatedSection";
import { Button } from "./ui/Button";
import { Mail, MessageSquare, Send } from "lucide-react";

export function Contact() {
    return (
        <section className="py-24 relative bg-quant-bg" id="contact">
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto bg-quant-card/30 border border-white/5 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl">
                    <div className="text-center mb-12">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to <span className="text-quant-blue">Build?</span></h2>
                            <p className="text-gray-400 text-lg">
                                Let's discuss how custom software can transform your business operations.
                            </p>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection delay={0.2}>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-300 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="John Doe"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-quant-blue/50 focus:border-quant-blue transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-300 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="john@company.com"
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-quant-blue/50 focus:border-quant-blue transition-all"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="project" className="text-sm font-medium text-gray-300 ml-1">Project Details</label>
                                <textarea
                                    id="project"
                                    rows={4}
                                    placeholder="Tell us about the software you need built..."
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-quant-blue/50 focus:border-quant-blue transition-all resize-none"
                                />
                            </div>

                            <div className="pt-4 flex justify-center">
                                <Button size="lg" glow type="submit" className="w-full md:w-auto min-w-[200px]">
                                    Send Message
                                    <Send className="w-4 h-4 ml-2" />
                                </Button>
                            </div>
                        </form>
                    </AnimatedSection>
                </div>
            </div>

            <footer className="mt-24 border-t border-white/10 pt-8 pb-4">
                <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} QuantLab Software Solutions. All rights reserved.</p>
                </div>
            </footer>
        </section>
    );
}
