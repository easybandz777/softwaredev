"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { questions } from "../data/questions";
import { ChevronRight, CheckCircle2, XCircle, ArrowRight, ShieldAlert, Award } from "lucide-react";
import clsx from "clsx";

interface FlashcardTestProps {
    onComplete: (score: number) => void;
    onCancel: () => void;
}

export default function FlashcardTest({ onComplete, onCancel }: FlashcardTestProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const currentQuestion = questions[currentIndex];
    // Calculate progress percentage
    const progress = ((currentIndex) / questions.length) * 100;

    const handleSelect = (index: number) => {
        if (isAnswered) return;
        setSelectedAnswer(index);
        setIsAnswered(true);
        setIsFlipped(true);

        if (index === currentQuestion.correctAnswer) {
            setScore((prev) => prev + 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < questions.length - 1) {
            setIsFlipped(false);
            setIsAnswered(false);
            setSelectedAnswer(null);
            setCurrentIndex((prev) => prev + 1);
        } else {
            onComplete(score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0));
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-6 w-full">
            {/* Header & Progress */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-6">
                <div>
                    <h2 className="text-3xl font-display font-bold text-white flex items-center gap-3">
                        <ShieldAlert className="w-8 h-8 text-cyan-400" />
                        Certification Exam
                    </h2>
                    <p className="text-slate-400 mt-2">
                        Question {currentIndex + 1} of {questions.length}
                    </p>
                </div>

                {/* Action Buttons */}
                <button
                    onClick={onCancel}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                    Exit Exam
                </button>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-800/50 rounded-full h-2 mb-12 border border-slate-700/50 overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-purple-500"
                    initial={{ width: 0 }}
                    animate={{ width: progress + "%" }}
                    transition={{ duration: 0.5 }}
                />
            </div>

            {/* Flashcard Area */}
            <div className="relative perspective-1000">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50, rotateY: -10 }}
                        animate={{ opacity: 1, x: 0, rotateY: 0 }}
                        exit={{ opacity: 0, x: -50, rotateY: 10 }}
                        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                        className="w-full"
                    >
                        <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                            {/* Decorative Corner Glow */}
                            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl"></div>

                            {/* Question Text */}
                            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-10 leading-relaxed font-display relative z-10">
                                {currentQuestion.question}
                            </h3>

                            {/* Options Grid */}
                            <div className="grid grid-cols-1 gap-4 relative z-10">
                                {currentQuestion.options.map((option, idx) => {
                                    const isSelected = selectedAnswer === idx;
                                    const isCorrectAnswer = idx === currentQuestion.correctAnswer;

                                    // Determine styles based on state
                                    const baseStyle = "w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between";
                                    let stateStyle = "bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-200 cursor-pointer";

                                    if (isAnswered) {
                                        if (isCorrectAnswer) {
                                            stateStyle = "bg-green-500/10 border-green-500/50 text-green-300";
                                        } else if (isSelected && !isCorrectAnswer) {
                                            stateStyle = "bg-red-500/10 border-red-500/50 text-red-300 opacity-50";
                                        } else {
                                            stateStyle = "bg-slate-800/30 border-slate-700/50 text-slate-500 opacity-50 cursor-not-allowed";
                                        }
                                    } else if (isSelected) {
                                        stateStyle = "bg-cyan-500/20 border-cyan-400 text-white";
                                    }

                                    return (
                                        <button
                                            key={idx}
                                            disabled={isAnswered}
                                            onClick={() => handleSelect(idx)}
                                            className={clsx(baseStyle, stateStyle)}
                                        >
                                            <span className="text-lg">{option}</span>
                                            {isAnswered && isCorrectAnswer && (
                                                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                                            )}
                                            {isAnswered && isSelected && !isCorrectAnswer && (
                                                <XCircle className="w-6 h-6 text-red-400 flex-shrink-0" />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            {/* Explanation & Next Action (Flipped State Reveal) */}
                            <AnimatePresence>
                                {isFlipped && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                        animate={{ opacity: 1, height: "auto", marginTop: 32 }}
                                        className="relative z-10 overflow-hidden"
                                    >
                                        <div className="p-6 rounded-2xl bg-slate-950/50 border border-slate-700/50 mb-6">
                                            <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                                                {selectedAnswer === currentQuestion.correctAnswer ? "Correct" : "Incorrect"}
                                            </h4>
                                            <p className="text-slate-300 text-lg">
                                                {currentQuestion.explanation}
                                            </p>
                                        </div>

                                        <div className="flex justify-end">
                                            <button
                                                onClick={handleNext}
                                                className="group flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-xl font-bold hover:bg-cyan-50 transition-colors"
                                            >
                                                {currentIndex < questions.length - 1 ? "Next Question" : "Complete Exam"}
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
