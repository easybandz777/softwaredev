'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';
import CurriculumViewer from '../../training/components/CurriculumViewer';
import FlashcardTest from '../../training/components/FlashcardTest';

export default function TrainingPage() {
    const router = useRouter();
    const [mode, setMode] = useState<'curriculum' | 'test' | 'results'>('curriculum');
    const [finalScore, setFinalScore] = useState(0);

    function handleComplete(score: number) {
        setFinalScore(score);
        setMode('results');
    }

    return (
        <div style={{ minHeight: '100vh', background: '#05080f', color: '#f8fafc' }}>
            {/* Grid overlay */}
            <div className="fixed inset-0 pointer-events-none" style={{
                backgroundImage: 'linear-gradient(rgba(34,211,238,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.02) 1px, transparent 1px)',
                backgroundSize: '50px 50px',
                zIndex: 0,
            }} />

            {/* Admin header — only in curriculum view */}
            {mode === 'curriculum' && (
                <header
                    className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3"
                    style={{ background: 'rgba(5,8,15,0.95)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="QuantLab" className="h-7 w-auto"
                            style={{ filter: 'drop-shadow(0 0 8px rgba(34,211,238,0.5)) brightness(1.2)' }} />
                        <div className="flex items-center gap-2">
                            <span className="text-white font-bold text-sm hidden sm:inline">QuantLab Admin</span>
                            <ChevronRight className="w-3.5 h-3.5 text-gray-600 hidden sm:block" />
                            <span className="text-cyan-400 font-medium text-sm flex items-center gap-1.5">
                                <BookOpen className="w-4 h-4" /> Sales Training
                            </span>
                        </div>
                    </div>
                    <button
                        onClick={() => router.push('/admin/dashboard')}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 text-xs transition-all"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
                    </button>
                </header>
            )}

            {/* Content */}
            <div style={{ position: 'relative', zIndex: 1, paddingTop: mode === 'curriculum' ? '52px' : '0' }}>
                {mode === 'curriculum' && (
                    <CurriculumViewer onStartTest={() => setMode('test')} />
                )}

                {mode === 'test' && (
                    <FlashcardTest
                        onComplete={handleComplete}
                        onCancel={() => setMode('curriculum')}
                    />
                )}

                {mode === 'results' && (
                    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
                        <div className="p-12 rounded-3xl max-w-lg w-full" style={{ background: '#0a0f1d', border: '1px solid rgba(255,255,255,0.08)' }}>
                            <div className="text-6xl mb-6">{finalScore >= 80 ? '🏆' : finalScore >= 60 ? '📈' : '📚'}</div>
                            <h1 className="text-4xl font-black mb-3" style={{ background: 'linear-gradient(135deg, #22d3ee, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                {finalScore}/25
                            </h1>
                            <p className="text-gray-400 mb-8">
                                {finalScore >= 22 ? 'Elite performance. You are QuantLab certified.' :
                                    finalScore >= 18 ? 'Strong result. Review any missed modules to sharpen up.' :
                                        finalScore >= 12 ? 'Good foundation. Re-read the relevant modules and retry.' :
                                            'Return to the playbook. Master each module before re-attempting.'}
                            </p>
                            <div className="flex flex-col gap-3">
                                <button
                                    onClick={() => setMode('curriculum')}
                                    className="w-full py-3 rounded-xl font-semibold text-white transition-all hover:opacity-90"
                                    style={{ background: 'linear-gradient(135deg, rgba(34,211,238,0.15), rgba(167,139,250,0.15))', border: '1px solid rgba(255,255,255,0.1)' }}
                                >
                                    Back to Training
                                </button>
                                <button
                                    onClick={() => { setMode('test'); setFinalScore(0); }}
                                    className="w-full py-3 rounded-xl font-semibold text-cyan-400 transition-all hover:bg-white/5"
                                    style={{ border: '1px solid rgba(34,211,238,0.2)' }}
                                >
                                    Retake Exam
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
