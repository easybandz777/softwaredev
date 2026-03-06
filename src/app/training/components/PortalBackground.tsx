"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

export default function PortalBackground({ isAuthorized }: { isAuthorized: boolean }) {
    // Determine the transition state
    // When authorized, the background "accelerates" / zooms in
    const scale = isAuthorized ? 1.15 : 1;
    const blur = isAuthorized ? "blur(4px)" : "blur(0px)";
    const opacityFade = isAuthorized ? 0.6 : 1;

    // Generate random particles for the background
    const particles = useMemo(() => {
        return Array.from({ length: 40 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5,
        }));
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#02040a]">
            {/* Deep animated vignette */}
            <div className="absolute inset-0 z-10" style={{
                background: "radial-gradient(circle at 50% 50%, transparent 20%, #02040a 100%)"
            }} />

            {/* Scale Container: zooms when authorized */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                animate={{ scale, opacity: opacityFade, filter: blur }}
                transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
            >
                {/* 1. Base Glowing Grid */}
                <div className="absolute inset-0" style={{
                    backgroundImage: `
                        linear-gradient(rgba(34, 211, 238, 0.04) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(34, 211, 238, 0.04) 1px, transparent 1px)
                    `,
                    backgroundSize: "60px 60px",
                    transform: "perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)",
                    transformOrigin: "center center"
                }} />

                {/* 2. Abstract Ambient Orbs */}
                <motion.div
                    className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full blur-[120px] mix-blend-screen opacity-30"
                    style={{ background: "radial-gradient(circle, rgba(34, 211, 238, 0.6) 0%, transparent 70%)" }}
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: isAuthorized ? 1.5 : 1,
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full blur-[150px] mix-blend-screen opacity-20"
                    style={{ background: "radial-gradient(circle, rgba(167, 139, 250, 0.5) 0%, transparent 70%)" }}
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                        scale: isAuthorized ? 1.5 : 1,
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                />

                {/* 3. Floating Data Particles (Financial/Metric feeling) */}
                {particles.map((p) => (
                    <motion.div
                        key={p.id}
                        className="absolute rounded-full"
                        style={{
                            left: \`\${p.x}%\`,
                top: \`\${p.y}%\`,
                width: p.size,
                height: p.size,
                backgroundColor: p.id % 2 === 0 ? "#22d3ee" : "#a78bfa",
                boxShadow: \`0 0 \${p.size * 2}px \` + (p.id % 2 === 0 ? "#22d3ee" : "#a78bfa"),
                        }}
                animate={{
                    y: ["0vh", isAuthorized ? "-100vh" : "-30vh"], // Fly up fast when authorized
                    opacity: [0, 0.8, 0],
                }}
                transition={{
                    duration: isAuthorized ? 1.5 : p.duration,
                    repeat: Infinity,
                    delay: isAuthorized ? 0 : p.delay,
                    ease: "linear",
                }}
                    />
                ))}

                {/* 4. Scanning Lasers / Data Lines */}
                <motion.div
                    className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
                    animate={{
                        top: ["-10%", "110%"],
                    }}
                    transition={{
                        duration: isAuthorized ? 2 : 8,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </motion.div>
        </div>
    );
}
