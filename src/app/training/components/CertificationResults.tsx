"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy, RefreshCcw, ArrowLeft, Star, Target, ShieldCheck } from "lucide-react";

interface CertificationResultsProps {
    score: number;
    onRetake: () => void;
    onBackToCurriculum: () => void;
}

export default function CertificationResults({ score, onRetake, onBackToCurriculum }: CertificationResultsProps) {
    // Let's assume total questions is 100
    const totalQuestions = 100;
    const percentage = Math.round((score / totalQuestions) * 100);

    // Determine Tier
    let tier = "Novice";
    let color = "text-slate-400";
    let bg = "bg-slate-400/10 border-slate-400/50";
    let icon = <Star className="w-12 h-12 text-slate-400" />;
    let message = "You have foundational knowledge, but need more study.";

    if (percentage >= 95) {
        tier = "Elite";
        color = "text-purple-400";
        bg = "bg-purple-500/20 border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.3)]";
        icon = <Trophy className="w-12 h-12 text-purple-400" />;
        message = "Outstanding mastery. You are ready for any client scenario.";
    } else if (percentage >= 80) {
        tier = "Advanced";
        color = "text-cyan-400";
        bg = "bg-cyan-500/20 border-cyan-500/50 shadow-[0_0_40px_rgba(34,211,238,0.2)]";
        icon = <ShieldCheck className="w-12 h-12 text-cyan-400" />;
        message = "Strong performance. You possess solid sales capabilities.";
    } else if (percentage >= 60) {
        tier = "Intermediate";
        color = "text-yellow-400";
        bg = "bg-yellow-500/20 border-yellow-500/50";
        icon = <Target className="w-12 h-12 text-yellow-400" />;
        message = "Good effort, but there are areas for improvement.";
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-3xl mx-auto px-6 w-full text-center"
        >
            <div className="bg-slate-900/80 backdrop-blur-2xl border border-slate-700/50 rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden">
                {/* Dynamic Background Glow based on Tier */}
                <div className={"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 " + bg + " blur-3xl rounded-full opacity-50 z-0"} />

                <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                        className={"w-24 h-24 rounded-2xl flex items-center justify-center " + bg + " border mb-8"}
                    >
                        {icon}
                    </motion.div>

                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
                        Certification Complete
                    </h1>

                    <div className="flex flex-col items-center justify-center my-10">
                        <span className="text-7xl font-bold text-white tracking-tighter mb-2">
                            {score}<span className="text-4xl text-slate-500">/{totalQuestions}</span>
                        </span>
                        <div className="text-lg text-slate-400 uppercase tracking-widest font-semibold flex items-center gap-2">
                            Final Score: <span className="text-white">{percentage}%</span>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-sm uppercase tracking-[0.2em] text-slate-500 font-semibold mb-2">Achieved Rank</h3>
                        <div className={"text-3xl font-display font-bold uppercase tracking-wider " + color + " mb-4"}>
                            {tier} Partner
                        </div>
                        <p className="text-slate-300 max-w-lg mx-auto text-lg leading-relaxed">
                            {message}
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-6 border-t border-slate-800 pt-10">
                        <button
                            onClick={onRetake}
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-all w-full sm:w-auto border border-slate-700 hover:border-slate-500"
                        >
                            <RefreshCcw className="w-5 h-5" /> Retake Exam
                        </button>
                        <button
                            onClick={onBackToCurriculum}
                            className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-xl font-bold transition-all w-full sm:w-auto shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:scale-[1.02]"
                        >
                            <ArrowLeft className="w-5 h-5" /> Back to Curriculum
                        </button>
                    </div>
                </div>
            </div >
        </motion.div >
    );
}
