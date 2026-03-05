"use client";

import React from "react";
import { AnimatedSection } from "./ui/AnimatedSection";
import { Cpu, TerminalSquare, Code2 } from "lucide-react";

export function About() {
    return (
        <section className="py-24 relative overflow-hidden bg-black/40 border-y border-white/5" id="about">
            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-quant-blue/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="w-full lg:w-1/2">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                                From Trading Algos to <br />
                                <span className="text-quant-light">Custom Software.</span>
                            </h2>
                            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                                <p>
                                    QuantLab Software Solutions was born out of the high-stakes world of algorithmic trading. When you build bots that execute thousands of trades per second, there is zero margin for error.
                                </p>
                                <p>
                                    We bring that exact same rigorous, latency-obsessed engineering mindset to custom business software. Whether it's a CRM handling sensitive client data, or a payment portal processing millions in revenue, we build it to be unbreakable.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                        <Cpu className="w-6 h-6 text-quant-blue" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Absolute Precision</h4>
                                        <p className="text-sm text-gray-500">Zero-error tolerance</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                        <TerminalSquare className="w-6 h-6 text-quant-light" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">Modern Tech Stack</h4>
                                        <p className="text-sm text-gray-500">React, Next.js, Cloud</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>

                    <div className="w-full lg:w-1/2">
                        <AnimatedSection delay={0.2} className="relative">
                            {/* Abstract code/terminal graphic */}
                            <div className="relative rounded-2xl border border-white/10 bg-[#0d131f] p-6 shadow-2xl overflow-hidden group">
                                <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                    <div className="ml-4 text-xs font-mono text-gray-500 flex items-center gap-2">
                                        <Code2 className="w-3 h-3" /> core_engine.ts
                                    </div>
                                </div>

                                <div className="mt-8 font-mono text-sm leading-loose">
                                    <div className="text-quant-blue">export class</div> <span className="text-yellow-200">QuantEngine</span> {"{"}
                                    <br />
                                    <div className="pl-4">
                                        <span className="text-quant-blue">private</span> <span className="text-blue-300">latencyMonitor</span>: <span className="text-green-300">LatencyTracker</span>;
                                        <br />
                                        <span className="text-quant-blue">private</span> <span className="text-blue-300">dataStream</span>: <span className="text-green-300">WebSocketStream</span>;
                                        <br /><br />
                                        <span className="text-gray-500">// Initialize high-frequency core</span><br />
                                        <span className="text-quant-light">constructor</span>() {"{"}<br />
                                        <div className="pl-4">
                                            <span className="text-purple-400">super</span>();<br />
                                            <span className="text-blue-300">this</span>.<span className="text-yellow-100">initializeSubsystems</span>();
                                        </div>
                                        {"}"}
                                    </div>
                                    {"}"}
                                </div>

                                {/* Scanning line animation */}
                                <div className="absolute top-10 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-quant-blue/10 border-b border-quant-blue/30 -translate-y-full group-hover:animate-[scan_3s_ease-in-out_infinite]" />
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
}
