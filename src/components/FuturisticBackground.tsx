"use client";

import React from "react";
import { motion } from "framer-motion";

export function FuturisticBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-quant-bg pointer-events-none">

            {/* Vibrant glowing logo watermark */}
            <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] sm:w-[1000px] sm:h-[1000px]"
                style={{
                    backgroundImage: 'url(/logo.png)',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.12,
                    filter: 'saturate(2) brightness(1.6) drop-shadow(0 0 60px rgba(56,189,248,0.8)) drop-shadow(0 0 120px rgba(56,189,248,0.4))',
                    mixBlendMode: 'screen',
                }}
            />

            {/* Outer blue ambient glow behind logo */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full pointer-events-none"
                style={{
                    background: "radial-gradient(circle, rgba(56,189,248,0.07) 0%, rgba(59,130,246,0.04) 40%, transparent 70%)",
                }}
            />

            {/* Grid Lines */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: 'linear-gradient(#38bdf8 1px, transparent 1px), linear-gradient(90deg, #38bdf8 1px, transparent 1px)',
                    backgroundSize: '50px 50px',
                }}
            />

            {/* Scanning laser line */}
            <motion.div
                animate={{ y: ["-100vh", "200vh"] }}
                transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-px"
                style={{
                    background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.6), transparent)",
                    boxShadow: "0 0 30px 2px rgba(56,189,248,0.5)",
                }}
            />

            {/* Radial vignette to darken edges */}
            <div className="absolute inset-0 bg-quant-bg [mask-image:radial-gradient(circle_at_center,transparent_30%,black_85%)]" />
        </div>
    );
}
