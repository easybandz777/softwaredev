"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { ShieldCheck, AlertTriangle, ArrowRight, Zap } from "lucide-react";
import PortalBackground from "./components/PortalBackground";
import CurriculumViewer from "./components/CurriculumViewer";
import FlashcardTest from "./components/FlashcardTest";
import CertificationResults from "./components/CertificationResults";

const ACCESS_CODE = "QL-PARTNER";

/* ──────────────────────────────────────────────────────────────
   BOOT SEQUENCE LINES – appear one by one before login form
   ────────────────────────────────────────────────────────────── */
const BOOT_LINES = [
    { text: "QUANTLAB SECURE CHANNEL v4.1.0", delay: 0, color: "#22d3ee" },
    { text: 'INITIALIZING NEURAL ENCRYPTION...', delay: 0.4, color: "#a78bfa" },
    { text: 'BIOMETRIC LAYER: BYPASSED (PARTNER MODE)', delay: 0.8, color: "#34d399" },
    { text: 'LOADING CURRICULUM MATRIX: 100% COMPLETE', delay: 1.2, color: "#22d3ee" },
    { text: 'AWAITING PARTNER AUTHENTICATION...', delay: 1.6, color: "#f472b6", blink: true },
];

function BootLine({ line, index }: { line: typeof BOOT_LINES[number]; index: number }) {
    return (
        <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: line.delay }}
            className="font-mono text-xs md:text-sm flex items-center gap-2"
            style={{ color: line.color }}
        >
            <span style={{ color: line.color, opacity: 0.6 }}>{">>>"}</span>
            {line.text}
            {line.blink && (
                <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    style={{ color: line.color }}
                >
                    ▊
                </motion.span>
            )}
        </motion.p>
    );
}

/* ──────────────────────────────────────────────────────────────
   CORNER BRACKETS – decorative HUD corners around the card
   ────────────────────────────────────────────────────────────── */
function HudCorners({ active }: { active: boolean }) {
    const c = active ? "#f472b6" : "#22d3ee";
    const corners = [
        "top-0 left-0 border-t-2 border-l-2 rounded-tl",
        "top-0 right-0 border-t-2 border-r-2 rounded-tr",
        "bottom-0 left-0 border-b-2 border-l-2 rounded-bl",
        "bottom-0 right-0 border-b-2 border-r-2 rounded-br",
    ];
    return (
        <>
            {corners.map((cls, i) => (
                <motion.div
                    key={i}
                    className={"absolute w-5 h-5 " + cls}
                    style={{ borderColor: c }}
                    animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, delay: i * 0.15, repeat: Infinity }}
                />
            ))}
        </>
    );
}

/* ──────────────────────────────────────────────────────────────
   TILT CARD WRAPPER – mouse-tracked 3D tilt
   ────────────────────────────────────────────────────────────── */
function TiltCard({ children }: { children: React.ReactNode }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-0.5, 0.5], [8, -8]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-8, 8]);

    function handleMouseMove(e: React.MouseEvent) {
        const rect = cardRef.current?.getBoundingClientRect();
        if (!rect) return;
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    }
    function handleLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
            className="cursor-default"
        >
            {children}
        </motion.div>
    );
}

/* ──────────────────────────────────────────────────────────────
   ACCESS DENIED SHAKE ANIMATION
   ────────────────────────────────────────────────────────────── */
const shakeVariants = {
    rest: { x: 0 },
    shake: {
        x: [-12, 12, -10, 10, -6, 6, -3, 3, 0],
        transition: { duration: 0.6 },
    },
};

/* ──────────────────────────────────────────────────────────────
   MAIN PAGE
   ────────────────────────────────────────────────────────────── */
export default function TraineePortal() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [mode, setMode] = useState<"CURRICULUM" | "TESTING" | "RESULTS">("CURRICULUM");
    const [passcode, setPasscode] = useState("");
    const [error, setError] = useState(false);
    const [score, setScore] = useState(0);
    const [bootDone, setBootDone] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setBootDone(true), 2400);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        if (bootDone && !isAuthenticated) {
            document.getElementById("passcode-input")?.focus();
        }
    }, [bootDone, isAuthenticated]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (submitting) return;
        setSubmitting(true);

        // Short delay for dramatic effect
        await new Promise((r) => setTimeout(r, 500));

        if (passcode.toUpperCase() === ACCESS_CODE) {
            setError(false);
            setIsAuthenticated(true);
        } else {
            setError(true);
            setPasscode("");
            setTimeout(() => {
                setError(false);
                setSubmitting(false);
            }, 1800);
            return;
        }
        setSubmitting(false);
    };

    const handleStartTest = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setMode("TESTING");
    };

    const handleTestComplete = (finalScore: number) => {
        setScore(finalScore);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setMode("RESULTS");
    };

    return (
        <div className="min-h-screen bg-[#02040a] text-slate-200 selection:bg-cyan-500/30 font-sans overflow-x-hidden relative">
            <PortalBackground isAuthorized={isAuthenticated} />

            <AnimatePresence mode="wait">
                {!isAuthenticated ? (
                    <motion.div
                        key="login-wall"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, scale: 1.08, filter: "blur(20px)" }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-10"
                    >
                        <div className="w-full max-w-lg">

                            {/* ── Top badge ── */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7 }}
                                className="flex items-center justify-center gap-2 mb-10"
                            >
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-cyan-400"
                                    animate={{ opacity: [1, 0.2, 1], scale: [1, 1.5, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity }}
                                />
                                <span className="font-mono text-xs text-cyan-400/70 uppercase tracking-[0.25em]">
                                    QuantLab Secure Terminal — v4.1
                                </span>
                                <motion.div
                                    className="w-2 h-2 rounded-full bg-cyan-400"
                                    animate={{ opacity: [1, 0.2, 1], scale: [1, 1.5, 1] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: 0.75 }}
                                />
                            </motion.div>

                            {/* ── Boot sequence terminal ── */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="mb-6 bg-black/50 border border-slate-800 rounded-xl p-4 space-y-1.5 backdrop-blur-sm"
                            >
                                {BOOT_LINES.map((line, i) => (
                                    <BootLine key={i} line={line} index={i} />
                                ))}
                            </motion.div>

                            {/* ── Main login card ── */}
                            <AnimatePresence>
                                {bootDone && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20, scale: 0.97 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                    >
                                        <TiltCard>
                                            <motion.form
                                                onSubmit={handleLogin}
                                                variants={shakeVariants}
                                                animate={error ? "shake" : "rest"}
                                                className="relative"
                                            >
                                                {/* Outer glow */}
                                                <motion.div
                                                    className="absolute -inset-1 rounded-2xl"
                                                    style={{
                                                        background: error
                                                            ? "linear-gradient(135deg, rgba(239,68,68,0.3), rgba(239,68,68,0.1))"
                                                            : "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(167,139,250,0.15))",
                                                        filter: "blur(12px)",
                                                    }}
                                                    animate={{
                                                        opacity: submitting ? [0.5, 1, 0.5] : 0.6,
                                                    }}
                                                    transition={{ duration: 0.6, repeat: submitting ? Infinity : 0 }}
                                                />

                                                {/* Card body */}
                                                <div className="relative bg-slate-950/80 backdrop-blur-2xl border border-slate-700/60 rounded-2xl p-8 shadow-2xl overflow-hidden">
                                                    <HudCorners active={error} />

                                                    {/* Subtle inner shimmer */}
                                                    <div
                                                        className="absolute inset-0 pointer-events-none"
                                                        style={{
                                                            background: "linear-gradient(120deg, rgba(34,211,238,0.03) 0%, transparent 50%, rgba(167,139,250,0.03) 100%)",
                                                        }}
                                                    />

                                                    {/* Header */}
                                                    <div className="text-center mb-8 relative z-10">
                                                        <motion.div
                                                            className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-5 relative"
                                                            animate={{
                                                                boxShadow: error
                                                                    ? ["0 0 20px rgba(239,68,68,0.4)", "0 0 40px rgba(239,68,68,0.7)", "0 0 20px rgba(239,68,68,0.4)"]
                                                                    : ["0 0 20px rgba(34,211,238,0.2)", "0 0 40px rgba(34,211,238,0.5)", "0 0 20px rgba(34,211,238,0.2)"],
                                                            }}
                                                            transition={{ duration: 2, repeat: Infinity }}
                                                            style={{
                                                                background: error
                                                                    ? "linear-gradient(135deg, rgba(239,68,68,0.2), rgba(239,68,68,0.05))"
                                                                    : "linear-gradient(135deg, rgba(34,211,238,0.15), rgba(167,139,250,0.1))",
                                                                border: error ? "1px solid rgba(239,68,68,0.4)" : "1px solid rgba(34,211,238,0.3)",
                                                            }}
                                                        >
                                                            <AnimatePresence mode="wait">
                                                                {error ? (
                                                                    <motion.div key="err" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                                                        <AlertTriangle className="w-7 h-7 text-red-400" />
                                                                    </motion.div>
                                                                ) : submitting ? (
                                                                    <motion.div
                                                                        key="loading"
                                                                        animate={{ rotate: 360 }}
                                                                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                                                    >
                                                                        <Zap className="w-7 h-7 text-cyan-400" />
                                                                    </motion.div>
                                                                ) : (
                                                                    <motion.div key="shield" initial={{ scale: 0 }} animate={{ scale: 1 }}>
                                                                        <ShieldCheck className="w-7 h-7 text-cyan-400" />
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>

                                                            {/* Rotating ring around icon */}
                                                            <motion.div
                                                                className="absolute inset-0 rounded-xl border pointer-events-none"
                                                                style={{ borderColor: error ? "rgba(239,68,68,0.3)" : "rgba(34,211,238,0.2)" }}
                                                                animate={{ rotate: [0, 360] }}
                                                                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                                            />
                                                        </motion.div>

                                                        <motion.h1
                                                            className="text-3xl font-bold tracking-tight mb-2"
                                                            animate={{ color: error ? "#f87171" : "#ffffff" }}
                                                            transition={{ duration: 0.3 }}
                                                        >
                                                            {error ? "ACCESS DENIED" : submitting ? "VERIFYING..." : "PARTNER PORTAL"}
                                                        </motion.h1>
                                                        <p className="text-slate-500 text-sm font-mono tracking-wider uppercase">
                                                            {error ? "— Invalid Credentials —" : "— Authorized Personnel Only —"}
                                                        </p>
                                                    </div>

                                                    {/* Input */}
                                                    <div className="mb-6 relative z-10">
                                                        <label className="block text-xs font-mono text-slate-500 mb-2 uppercase tracking-[0.2em]">
                                                            Access Code
                                                        </label>
                                                        <div className="relative">
                                                            {/* Animated border */}
                                                            <motion.div
                                                                className="absolute -inset-px rounded-xl pointer-events-none"
                                                                animate={{
                                                                    background: error
                                                                        ? "linear-gradient(135deg, rgba(239,68,68,0.6), rgba(239,68,68,0.2))"
                                                                        : submitting
                                                                            ? ["linear-gradient(0deg, rgba(34,211,238,0.4), rgba(167,139,250,0.4))", "linear-gradient(360deg, rgba(34,211,238,0.4), rgba(167,139,250,0.4))"]
                                                                            : "linear-gradient(135deg, rgba(34,211,238,0.2), rgba(167,139,250,0.15))",
                                                                }}
                                                                transition={{ duration: submitting ? 1 : 0.3, repeat: submitting ? Infinity : 0 }}
                                                                style={{ borderRadius: "inherit", padding: "1px" }}
                                                            />
                                                            <input
                                                                id="passcode-input"
                                                                type="password"
                                                                value={passcode}
                                                                onChange={(e) => setPasscode(e.target.value)}
                                                                disabled={submitting}
                                                                className="w-full bg-slate-950 border border-transparent rounded-xl px-5 py-4 text-white placeholder-slate-700 focus:outline-none text-center tracking-[0.4em] font-mono text-xl disabled:opacity-60 transition-all"
                                                                style={{
                                                                    boxShadow: error
                                                                        ? "inset 0 0 20px rgba(239,68,68,0.1)"
                                                                        : "inset 0 0 20px rgba(34,211,238,0.04)",
                                                                }}
                                                                placeholder="• • • • • • • • • •"
                                                                autoComplete="off"
                                                                spellCheck={false}
                                                            />
                                                        </div>

                                                        <AnimatePresence>
                                                            {error && (
                                                                <motion.div
                                                                    initial={{ opacity: 0, y: -8 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    exit={{ opacity: 0 }}
                                                                    className="flex items-center gap-2 mt-3 text-red-400 text-xs font-mono justify-center"
                                                                >
                                                                    <AlertTriangle className="w-3.5 h-3.5" />
                                                                    AUTHENTICATION FAILED — CODE REJECTED
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>

                                                    {/* Submit button */}
                                                    <button
                                                        type="submit"
                                                        disabled={submitting || passcode.length === 0}
                                                        className="w-full relative group overflow-hidden rounded-xl py-4 font-bold tracking-[0.15em] uppercase text-sm disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                                                        style={{
                                                            background: error
                                                                ? "linear-gradient(135deg, rgba(239,68,68,0.3), rgba(239,68,68,0.1))"
                                                                : "linear-gradient(135deg, #22d3ee, #6366f1)",
                                                            boxShadow: error ? "0 0 20px rgba(239,68,68,0.2)" : "0 0 30px rgba(34,211,238,0.3)",
                                                        }}
                                                    >
                                                        <span className="relative z-10 flex items-center justify-center gap-2 text-white">
                                                            {submitting ? (
                                                                <>
                                                                    <motion.span
                                                                        animate={{ opacity: [1, 0.4, 1] }}
                                                                        transition={{ duration: 0.6, repeat: Infinity }}
                                                                    >
                                                                        AUTHENTICATING
                                                                    </motion.span>
                                                                    <motion.span animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}>
                                                                        ◈
                                                                    </motion.span>
                                                                </>
                                                            ) : error ? (
                                                                "TRY AGAIN"
                                                            ) : (
                                                                <>
                                                                    INITIALIZE LINK
                                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                                </>
                                                            )}
                                                        </span>
                                                        {/* Sweep shine on hover */}
                                                        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                                                    </button>

                                                    {/* Bottom hint */}
                                                    <p className="text-center text-slate-700 text-xs font-mono mt-5 uppercase tracking-widest">
                                                        Protected Channel // QuantLab
                                                    </p>
                                                </div>
                                            </motion.form>
                                        </TiltCard>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>

                ) : (
                    <motion.div
                        key="portal-content"
                        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-20 min-h-screen py-12"
                    >
                        {mode === "CURRICULUM" && (
                            <CurriculumViewer onStartTest={handleStartTest} />
                        )}
                        {mode === "TESTING" && (
                            <FlashcardTest onComplete={handleTestComplete} onCancel={() => setMode("CURRICULUM")} />
                        )}
                        {mode === "RESULTS" && (
                            <CertificationResults score={score} onRetake={() => setMode("TESTING")} onBackToCurriculum={() => setMode("CURRICULUM")} />
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
