"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ChevronRight, AlertCircle } from "lucide-react";
import PortalBackground from "./components/PortalBackground";
import CurriculumViewer from "./components/CurriculumViewer";
import FlashcardTest from "./components/FlashcardTest";
import CertificationResults from "./components/CertificationResults";

const ACCESS_CODE = "QL-PARTNER";

export default function TraineePortal() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [mode, setMode] = useState<"CURRICULUM" | "TESTING" | "RESULTS">("CURRICULUM");
    const [passcode, setPasscode] = useState("");
    const [error, setError] = useState(false);
    const [score, setScore] = useState(0);

    // Auto-focus the input on mount
    useEffect(() => {
        if (!isAuthenticated) {
            const input = document.getElementById("passcode-input");
            if (input) input.focus();
        }
    }, [isAuthenticated]);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (passcode.toUpperCase() === ACCESS_CODE) {
            setError(false);
            setIsAuthenticated(true);
        } else {
            setError(true);
            setPasscode("");
            setTimeout(() => setError(false), 2000);
        }
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
                        exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6"
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="max-w-md w-full"
                        >
                            <div className="text-center mb-10">
                                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-900/80 border border-slate-700/50 shadow-[0_0_30px_rgba(34,211,238,0.15)] mb-6 backdrop-blur-xl">
                                    <Lock className="w-8 h-8 text-cyan-400" />
                                </div>
                                <h1 className="text-4xl font-bold text-white tracking-tight mb-3 font-display">
                                    Trainee Access
                                </h1>
                                <p className="text-slate-400">
                                    Enter your universal access code to enter the portal.
                                </p>
                            </div>

                            <form onSubmit={handleLogin} className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl transition-opacity opacity-50"></div>
                                <div className="relative bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 rounded-2xl p-8 shadow-2xl">
                                    <div className="mb-6">
                                        <label
                                            htmlFor="passcode-input"
                                            className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-wider"
                                        >
                                            Access Code
                                        </label>
                                        <div className="relative">
                                            <input
                                                id="passcode-input"
                                                type="password"
                                                value={passcode}
                                                onChange={(e) => setPasscode(e.target.value)}
                                                className={`w-full bg-slate-950/50 border ${error ? "border-red-500/50" : "border-slate-700"
                                                    } rounded-xl px-4 py-4 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all text-center tracking-[0.3em] font-mono text-xl`}
                                                placeholder="••••••••••"
                                                autoComplete="off"
                                            />
                                        </div>
                                        {error && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="text-red-400 text-sm mt-3 flex items-center justify-center gap-1.5"
                                            >
                                                <AlertCircle className="w-4 h-4" />
                                                Invalid access code. Please try again.
                                            </motion.p>
                                        )}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-4 font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
                                    >
                                        <span className="relative z-10 flex items-center justify-center gap-2">
                                            Initialize Link <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                                    </button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="portal-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
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
