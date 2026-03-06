"use client";

import React, { useMemo, useEffect, useRef } from "react";
import { motion } from "framer-motion";

/* ─────────────────────────────────────────────────────────────
   PORTAL BACKGROUND
   Seven layered visual systems:
   1. Deep void base with aurora blobs
   2. Perspective hex grid  
   3. Concentric energy pulse rings
   4. Neural-network dot mesh with animated lines
   5. Matrix code-rain columns (canvas)
   6. Floating scan-line
   7. Chromatic edge glow
   ───────────────────────────────────────────────────────────── */

// ── Canvas: Matrix code rain ──────────────────────────────────
function CodeRainCanvas({ active }: { active: boolean }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const canvasEl = canvasRef.current;
        if (!canvasEl) return;
        const ctx = canvasEl.getContext("2d") as CanvasRenderingContext2D;
        if (!ctx) return;

        let animId: number;
        let cols: number[] = [];

        const CHARS = "01アイウエオカキクケコサシスセソタチツテトABCDEFXYZ#$%∑∏∫√≈Δ∇→←↑↓◈◉●";
        const FONT_SIZE = 13;

        function resize() {
            canvasEl!.width = canvasEl!.offsetWidth;
            canvasEl!.height = canvasEl!.offsetHeight;
            const numCols = Math.floor(canvasEl!.width / FONT_SIZE);
            cols = Array(numCols).fill(1);
        }

        resize();
        window.addEventListener("resize", resize);

        let frameCount = 0;

        function draw() {
            // Trail fade
            ctx.fillStyle = "rgba(2, 4, 10, 0.08)";
            ctx.fillRect(0, 0, canvasEl!.width, canvasEl!.height);

            frameCount++;
            if (frameCount % 2 !== 0) {
                animId = requestAnimationFrame(draw);
                return;
            }

            cols.forEach((y, i) => {
                const char = CHARS[Math.floor(Math.random() * CHARS.length)];
                const x = i * FONT_SIZE;

                // Head glyph: bright white/cyan
                ctx.font = FONT_SIZE + "px monospace";
                ctx.fillStyle = active ? "rgba(255,255,255,0.9)" : "rgba(34,211,238,0.85)";
                ctx.fillText(char, x, y * FONT_SIZE);

                // Trail glyphs already painted by fade

                // Reset column randomly
                if (y * FONT_SIZE > canvasEl!.height && Math.random() > 0.975) {
                    cols[i] = 0;
                }
                cols[i]++;
            });

            animId = requestAnimationFrame(draw);
        }

        draw();
        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animId);
        };
    }, [active]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ opacity: active ? 0.06 : 0.025 }}
        />
    );
}

// ── Neural mesh nodes ─────────────────────────────────────────
function NeuralMesh({ isAuthorized }: { isAuthorized: boolean }) {
    const nodes = useMemo(() => {
        return Array.from({ length: 28 }).map((_, i) => ({
            id: i,
            x: 5 + Math.random() * 90,
            y: 5 + Math.random() * 90,
            size: Math.random() * 3 + 1.5,
            pulseDuration: 2 + Math.random() * 4,
            pulseDelay: Math.random() * 3,
            color: i % 3 === 0 ? "#22d3ee" : i % 3 === 1 ? "#a78bfa" : "#38bdf8",
        }));
    }, []);

    // Build edges – connect each node to 2–3 nearest
    const edges = useMemo(() => {
        const result: { x1: number; y1: number; x2: number; y2: number; key: string }[] = [];
        nodes.forEach((a, ai) => {
            const distances = nodes
                .map((b, bi) => ({ bi, dist: Math.hypot(a.x - b.x, a.y - b.y) }))
                .filter(({ bi }) => bi !== ai)
                .sort((p, q) => p.dist - q.dist)
                .slice(0, 2);
            distances.forEach(({ bi }) => {
                const b = nodes[bi];
                const key = [Math.min(ai, bi), Math.max(ai, bi)].join("-");
                if (!result.find((e) => e.key === key)) {
                    result.push({ x1: a.x, y1: a.y, x2: b.x, y2: b.y, key });
                }
            });
        });
        return result;
    }, [nodes]);

    return (
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Edges */}
            {edges.map((e) => (
                <motion.line
                    key={e.key}
                    x1={e.x1}
                    y1={e.y1}
                    x2={e.x2}
                    y2={e.y2}
                    stroke="#22d3ee"
                    strokeWidth="0.04"
                    strokeOpacity={isAuthorized ? 0.25 : 0.1}
                    animate={{ strokeOpacity: isAuthorized ? [0.25, 0.5, 0.25] : [0.05, 0.15, 0.05] }}
                    transition={{ duration: 3 + Math.random() * 3, repeat: Infinity, ease: "easeInOut" }}
                />
            ))}
            {/* Nodes */}
            {nodes.map((n) => (
                <motion.circle
                    key={n.id}
                    cx={n.x}
                    cy={n.y}
                    r={n.size * 0.12}
                    fill={n.color}
                    animate={{
                        opacity: [0.3, 1, 0.3],
                        r: [n.size * 0.12, n.size * 0.22, n.size * 0.12],
                    }}
                    transition={{
                        duration: n.pulseDuration,
                        delay: n.pulseDelay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    style={{ filter: "url(#node-glow)" }}
                />
            ))}
            <defs>
                <filter id="node-glow" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur stdDeviation="0.3" result="blur" />
                    <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
        </svg>
    );
}

// ── Concentric energy rings ───────────────────────────────────
function EnergyRings({ isAuthorized }: { isAuthorized: boolean }) {
    const rings = useMemo(() =>
        Array.from({ length: 5 }).map((_, i) => ({
            id: i,
            delay: i * 0.8,
            size: 120 + i * 160,
        })), []);

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {rings.map((r) => (
                <motion.div
                    key={r.id}
                    className="absolute rounded-full border"
                    style={{
                        width: r.size,
                        height: r.size,
                        borderColor: r.id % 2 === 0 ? "rgba(34,211,238,0.12)" : "rgba(167,139,250,0.08)",
                        boxShadow: r.id % 2 === 0
                            ? "inset 0 0 20px rgba(34,211,238,0.05), 0 0 20px rgba(34,211,238,0.05)"
                            : "inset 0 0 20px rgba(167,139,250,0.04), 0 0 20px rgba(167,139,250,0.04)",
                    }}
                    animate={{
                        scale: isAuthorized ? [1, 1.6, 1] : [0.97, 1.03, 0.97],
                        opacity: isAuthorized ? [0.6, 0.1, 0.6] : [0.4, 0.8, 0.4],
                        rotate: [0, r.id % 2 === 0 ? 360 : -360],
                    }}
                    transition={{
                        duration: isAuthorized ? 2.5 : 10 + r.id * 4,
                        delay: r.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
            {/* Center core pulse */}
            <motion.div
                className="absolute rounded-full"
                style={{
                    width: 60,
                    height: 60,
                    background: "radial-gradient(circle, rgba(34,211,238,0.4) 0%, transparent 70%)",
                }}
                animate={{
                    scale: [0.8, 1.4, 0.8],
                    opacity: [0.3, 0.8, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}

// ── Floating data particles ───────────────────────────────────
function DataParticles({ isAuthorized }: { isAuthorized: boolean }) {
    const particles = useMemo(() =>
        Array.from({ length: 60 }).map((_, i) => ({
            id: i,
            x: Math.random() * 100,
            startY: 90 + Math.random() * 20,
            size: Math.random() * 2.5 + 0.5,
            duration: Math.random() * 18 + 12,
            delay: Math.random() * 10,
            color: ["#22d3ee", "#a78bfa", "#38bdf8", "#34d399", "#f472b6"][Math.floor(Math.random() * 5)],
        })), []);

    return (
        <>
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full"
                    style={{
                        left: p.x + "%",
                        bottom: "0%",
                        width: p.size,
                        height: p.size,
                        backgroundColor: p.color,
                        boxShadow: "0 0 " + (p.size * 3) + "px " + p.color,
                    }}
                    animate={{
                        y: isAuthorized ? [0, "-110vh"] : [0, "-60vh"],
                        opacity: [0, 0.9, 0.9, 0],
                        scale: [1, 1, 0.5],
                    }}
                    transition={{
                        duration: isAuthorized ? p.duration * 0.3 : p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </>
    );
}

// ── Main export ───────────────────────────────────────────────
export default function PortalBackground({ isAuthorized }: { isAuthorized: boolean }) {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#02040a]">

            {/* ── Layer 1: Aurora blobs ── */}
            <motion.div
                className="absolute top-[-30%] left-[-15%] w-[80vw] h-[80vw] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 65%)", filter: "blur(80px)" }}
                animate={{ x: [0, 80, 0], y: [0, 60, 0], scale: isAuthorized ? [1, 1.4, 1] : [1, 1.05, 1] }}
                transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 65%)", filter: "blur(100px)" }}
                animate={{ x: [0, -60, 0], y: [0, -40, 0], scale: isAuthorized ? [1, 1.3, 1] : [1, 1.08, 1] }}
                transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] rounded-full"
                style={{ background: "radial-gradient(circle, rgba(52,211,153,0.04) 0%, transparent 65%)", filter: "blur(60px)" }}
                animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0] }}
                transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* ── Layer 2: Perspective hex grid ── */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: [
                        "linear-gradient(rgba(34,211,238,0.035) 1px, transparent 1px)",
                        "linear-gradient(90deg, rgba(34,211,238,0.035) 1px, transparent 1px)",
                    ].join(","),
                    backgroundSize: "55px 55px",
                    transform: "perspective(900px) rotateX(55deg) scaleY(1.8) translateY(-30%)",
                    transformOrigin: "center bottom",
                    opacity: isAuthorized ? 0.5 : 0.7,
                }}
            />
            {/* Flat grid on top */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: [
                        "linear-gradient(rgba(167,139,250,0.018) 1px, transparent 1px)",
                        "linear-gradient(90deg, rgba(167,139,250,0.018) 1px, transparent 1px)",
                    ].join(","),
                    backgroundSize: "110px 110px",
                    opacity: 0.6,
                }}
            />

            {/* ── Layer 3: Neural mesh ── */}
            <NeuralMesh isAuthorized={isAuthorized} />

            {/* ── Layer 4: Energy rings ── */}
            <EnergyRings isAuthorized={isAuthorized} />

            {/* ── Layer 5: Code rain canvas ── */}
            <CodeRainCanvas active={isAuthorized} />

            {/* ── Layer 6: Floating data particles ── */}
            <DataParticles isAuthorized={isAuthorized} />

            {/* ── Layer 7: Dual scan lines ── */}
            <motion.div
                className="absolute left-0 w-full h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.5), rgba(167,139,250,0.4), transparent)" }}
                animate={{ top: ["-5%", "105%"] }}
                transition={{ duration: isAuthorized ? 2.5 : 9, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
                className="absolute left-0 w-full h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.3), rgba(34,211,238,0.2), transparent)" }}
                animate={{ top: ["105%", "-5%"] }}
                transition={{ duration: isAuthorized ? 3.5 : 14, repeat: Infinity, ease: "linear" }}
            />

            {/* ── Layer 8: Holographic scanline texture ── */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)",
                    opacity: 0.8,
                }}
            />

            {/* ── Layer 9: Edge chromatic glow ── */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse at 50% 0%, rgba(34,211,238,0.06) 0%, transparent 60%), radial-gradient(ellipse at 50% 100%, rgba(167,139,250,0.06) 0%, transparent 60%)",
                }}
            />

            {/* ── Layer 10: Deep vignette ── */}
            <div
                className="absolute inset-0"
                style={{
                    background: "radial-gradient(ellipse at center, transparent 30%, rgba(2,4,10,0.75) 100%)",
                }}
            />
        </div>
    );
}
