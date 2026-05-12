"use client";

import React from "react";
import { AnimatedSection } from "./ui/AnimatedSection";
import { Car, HardHat, Music, TrendingUp } from "lucide-react";

const industries = [
    { icon: Car, label: "Automotive" },
    { icon: HardHat, label: "Construction" },
    { icon: Music, label: "Entertainment" },
    { icon: TrendingUp, label: "Financial Services" },
];

export function Industries() {
    return (
        <section className="py-16 relative">
            <div className="container mx-auto px-6 relative z-10">
                <AnimatedSection>
                    <div className="text-center mb-10">
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500">
                            Industries We've Built For
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        {industries.map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-3 text-gray-400">
                                <Icon className="w-5 h-5 text-gray-500" />
                                <span className="text-sm font-medium">{label}</span>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
