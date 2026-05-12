"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

export function Navbar() {
    const pathname = usePathname();

    // Hide the main site navbar on portal routes (they have their own nav)
    if (pathname?.startsWith("/sales") || pathname?.startsWith("/admin") || pathname?.startsWith("/training") || pathname?.startsWith("/questionnaire")) {
        return null;
    }

    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between border-b border-white/5 bg-quant-bg/60 backdrop-blur-xl"
        >
            <Link href="/" className="flex items-center gap-4 cursor-pointer">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <Image
                        src="/logo.png"
                        alt="QuantLab Logo"
                        fill
                        sizes="48px"
                        className="object-cover"
                    />
                </div>
                <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
                    QuantLab
                </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                <Link href="/work" className="hover:text-white transition-colors">Work</Link>
                <Link href="/about" className="hover:text-white transition-colors">About</Link>
                <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
            </nav>

            <div className="flex items-center gap-4">
                <Link href="/#contact">
                    <Button size="sm" variant="glass" className="hidden sm:inline-flex">
                        Get in Touch
                    </Button>
                </Link>
            </div>
        </motion.header>
    );
}
