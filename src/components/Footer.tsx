"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Linkedin, Github, Mail, MapPin } from "lucide-react";

export function Footer() {
    const pathname = usePathname();

    // Hide footer on portal/admin routes
    if (
        pathname?.startsWith("/sales") ||
        pathname?.startsWith("/admin") ||
        pathname?.startsWith("/training") ||
        pathname?.startsWith("/questionnaire")
    ) {
        return null;
    }

    return (
        <footer className="border-t border-white/10 bg-quant-bg">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Company info */}
                    <div>
                        <p className="text-white font-bold text-lg mb-2">QuantLab Software Solutions</p>
                        <p className="text-gray-500 text-sm leading-relaxed mb-3">
                            Custom software development and cybersecurity services.
                        </p>
                        <p className="flex items-center gap-2 text-gray-500 text-sm">
                            <MapPin className="w-4 h-4" />
                            Based in Georgia, USA
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-3">Navigation</p>
                        <div className="flex flex-col gap-2">
                            <a href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</a>
                            <a href="/work" className="text-sm text-gray-400 hover:text-white transition-colors">Work</a>
                            <a href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a>
                            <a href="/faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</a>
                            <a href="/#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a>
                            <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                            <a href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                        </div>
                    </div>

                    {/* Contact + Socials */}
                    <div>
                        <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-3">Get in Touch</p>
                        <a
                            href="mailto:beltz@quantlabusa.dev"
                            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-4"
                        >
                            <Mail className="w-4 h-4" />
                            beltz@quantlabusa.dev
                        </a>
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

                <div className="mt-10 pt-6 border-t border-white/5 text-center text-gray-600 text-xs">
                    <p>&copy; {new Date().getFullYear()} QuantLab Software Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
