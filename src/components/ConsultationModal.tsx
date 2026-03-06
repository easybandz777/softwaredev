"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2, ChevronRight, ChevronLeft, User, Briefcase, MessageSquare } from "lucide-react";

// ─── Config ────────────────────────────────────────────────────────────────

const SERVICES = [
    "Custom CRM & ECM Systems",
    "Algorithmic Trading Bots",
    "High-Performance Web Portals",
    "Payment & Invoicing Systems",
    "Estimating & Proposal Generators",
    "Enterprise Architecture",
    "AI / Machine Learning Integration",
    "Other / Not Sure Yet",
];

const PROJECT_TYPES = [
    "New Build",
    "Redesign / Rebuild",
    "Integration",
    "Consulting / Advisory",
    "Ongoing Support",
];

const BUDGETS = [
    "< $5K",
    "$5K – $15K",
    "$15K – $50K",
    "$50K – $100K",
    "$100K+",
    "Not Sure Yet",
];

const TIMELINES = [
    "ASAP",
    "1 – 3 months",
    "3 – 6 months",
    "6 – 12 months",
    "Flexible",
];

const REFERRALS = [
    "Google Search",
    "LinkedIn",
    "Referral / Word of Mouth",
    "Social Media",
    "Cold Outreach",
    "Other",
];

// ─── Types ──────────────────────────────────────────────────────────────────

interface Props {
    open: boolean;
    onClose: () => void;
}

type Status = "idle" | "loading" | "success" | "error";

interface FormData {
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    project_type: string[];
    budget: string;
    timeline: string;
    message: string;
    referral: string;
}

const EMPTY: FormData = {
    name: "", email: "", phone: "", company: "",
    service: "", project_type: [], budget: "", timeline: "",
    message: "", referral: "",
};

// ─── Step config ────────────────────────────────────────────────────────────

const STEPS = [
    { label: "About You", icon: User },
    { label: "Your Project", icon: Briefcase },
    { label: "Details", icon: MessageSquare },
];

// ─── Sub-components ─────────────────────────────────────────────────────────

function StepIndicator({ current }: { current: number }) {
    return (
        <div className="flex items-center justify-center gap-0 mb-8">
            {STEPS.map((s, i) => {
                const done = i < current;
                const active = i === current;
                const Icon = s.icon;
                return (
                    <React.Fragment key={i}>
                        <div className="flex flex-col items-center gap-1.5">
                            <div
                                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                                style={{
                                    background: done
                                        ? "linear-gradient(135deg,#0ea5e9,#38bdf8)"
                                        : active
                                            ? "rgba(56,189,248,0.12)"
                                            : "rgba(255,255,255,0.04)",
                                    border: active
                                        ? "1.5px solid rgba(56,189,248,0.6)"
                                        : done
                                            ? "1.5px solid transparent"
                                            : "1.5px solid rgba(255,255,255,0.08)",
                                    boxShadow: active ? "0 0 16px rgba(56,189,248,0.3)" : "none",
                                }}
                            >
                                {done ? (
                                    <CheckCircle className="w-4 h-4 text-white" />
                                ) : (
                                    <Icon className={`w-4 h-4 ${active ? "text-sky-400" : "text-gray-600"}`} />
                                )}
                            </div>
                            <span className={`text-[10px] font-medium tracking-wide uppercase ${active ? "text-sky-400" : done ? "text-gray-400" : "text-gray-600"}`}>
                                {s.label}
                            </span>
                        </div>
                        {i < STEPS.length - 1 && (
                            <div className="w-16 h-px mx-1 mb-5 transition-all duration-300"
                                style={{ background: i < current ? "linear-gradient(90deg,#0ea5e9,#38bdf8)" : "rgba(255,255,255,0.06)" }}
                            />
                        )}
                    </React.Fragment>
                );
            })}
        </div>
    );
}

// ─── Main Component ─────────────────────────────────────────────────────────

export function ConsultationModal({ open, onClose }: Props) {
    const [step, setStep] = useState(0);
    const [dir, setDir] = useState(1);   // slide direction: 1=forward, -1=back
    const [form, setForm] = useState<FormData>(EMPTY);
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const overlayRef = useRef<HTMLDivElement>(null);

    // Reset on open
    useEffect(() => {
        if (open) {
            setForm(EMPTY);
            setStep(0);
            setDir(1);
            setStatus("idle");
            setErrorMsg("");
        }
    }, [open]);

    // Trap scroll
    useEffect(() => {
        if (open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "";
        return () => { document.body.style.overflow = ""; };
    }, [open]);

    const set = (k: keyof FormData, v: string | string[]) =>
        setForm(f => ({ ...f, [k]: v }));

    const toggleProjectType = (t: string) => {
        setForm(f => ({
            ...f,
            project_type: f.project_type.includes(t)
                ? f.project_type.filter(x => x !== t)
                : [...f.project_type, t],
        }));
    };

    // Per-step validation
    function validateStep(): string | null {
        if (step === 0) {
            if (!form.name.trim()) return "Please enter your name.";
            if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return "Please enter a valid email.";
        }
        if (step === 1) {
            if (!form.service) return "Please select a service.";
        }
        if (step === 2) {
            if (!form.message.trim()) return "Please describe your project.";
        }
        return null;
    }

    function goNext() {
        const err = validateStep();
        if (err) { setErrorMsg(err); return; }
        setErrorMsg("");
        setDir(1);
        setStep(s => s + 1);
    }

    function goBack() {
        setErrorMsg("");
        setDir(-1);
        setStep(s => s - 1);
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const err = validateStep();
        if (err) { setErrorMsg(err); return; }
        setStatus("loading");
        setErrorMsg("");
        try {
            const res = await fetch("/api/consultations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...form,
                    project_type: form.project_type.join(", "),
                }),
            });
            if (!res.ok) {
                const d = await res.json();
                throw new Error(d.error || "Submission failed.");
            }
            setStatus("success");
        } catch (err: unknown) {
            setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
            setStatus("error");
        }
    }

    const inp = `w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white
        placeholder-gray-500 focus:outline-none focus:border-sky-400/60 focus:ring-1 focus:ring-sky-400/30
        transition-all duration-200`;

    const slideVariants = {
        enter: (d: number) => ({ x: d * 40, opacity: 0 }),
        center: ({ x: 0, opacity: 1 }),
        exit: (d: number) => ({ x: d * -40, opacity: 0 }),
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    ref={overlayRef}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    style={{ background: "rgba(5,10,20,0.88)", backdropFilter: "blur(10px)" }}
                    onClick={e => { if (e.target === overlayRef.current) onClose(); }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.94, y: 28 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.94, y: 28 }}
                        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-2xl rounded-2xl overflow-hidden"
                        style={{
                            background: "linear-gradient(150deg, #0d1628 0%, #090e1c 100%)",
                            border: "1px solid rgba(56,189,248,0.14)",
                            boxShadow: "0 0 100px rgba(56,189,248,0.07), 0 40px 80px rgba(0,0,0,0.7)",
                        }}
                    >
                        {/* Top glow bar */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

                        {/* Close */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all z-10"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        {/* ── SUCCESS STATE ── */}
                        {status === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-12 text-center"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.15, type: "spring", stiffness: 220 }}
                                    className="mx-auto mb-5 w-20 h-20 rounded-full bg-emerald-400/10 flex items-center justify-center"
                                    style={{ border: "1px solid rgba(52,211,153,0.2)" }}
                                >
                                    <CheckCircle className="w-10 h-10 text-emerald-400" />
                                </motion.div>
                                <h3 className="text-2xl font-bold text-white mb-2">Request Received!</h3>
                                <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto">
                                    We've logged your consultation and will be in touch within 1 business day.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="mt-8 px-8 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                                    style={{ background: "linear-gradient(135deg,#0ea5e9,#38bdf8)", boxShadow: "0 0 24px rgba(56,189,248,0.25)" }}
                                >
                                    Close
                                </button>
                            </motion.div>
                        ) : (
                            <div className="p-8 pt-10">
                                {/* Header */}
                                <div className="text-center mb-6">
                                    <h2 className="text-2xl font-bold text-white mb-1">Book a Free Consultation</h2>
                                    <p className="text-gray-500 text-sm">Tell us about your project — no obligation, no fluff.</p>
                                </div>

                                <StepIndicator current={step} />

                                {/* Animated step content */}
                                <form onSubmit={handleSubmit}>
                                    <div className="overflow-hidden" style={{ minHeight: 300 }}>
                                        <AnimatePresence mode="wait" custom={dir}>
                                            <motion.div
                                                key={step}
                                                custom={dir}
                                                variants={slideVariants}
                                                initial="enter"
                                                animate="center"
                                                exit="exit"
                                                transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
                                            >
                                                {/* ── STEP 0 — About You ── */}
                                                {step === 0 && (
                                                    <div className="space-y-4">
                                                        <div className="grid grid-cols-2 gap-3">
                                                            <div>
                                                                <label className="block text-xs font-medium text-gray-400 mb-1.5">Full Name *</label>
                                                                <input className={inp} placeholder="Jane Smith"
                                                                    value={form.name} onChange={e => set("name", e.target.value)} />
                                                            </div>
                                                            <div>
                                                                <label className="block text-xs font-medium text-gray-400 mb-1.5">Email *</label>
                                                                <input type="email" className={inp} placeholder="jane@company.com"
                                                                    value={form.email} onChange={e => set("email", e.target.value)} />
                                                            </div>
                                                        </div>
                                                        <div className="grid grid-cols-2 gap-3">
                                                            <div>
                                                                <label className="block text-xs font-medium text-gray-400 mb-1.5">Phone <span className="text-gray-600">(optional)</span></label>
                                                                <input type="tel" className={inp} placeholder="+1 (555) 000-0000"
                                                                    value={form.phone} onChange={e => set("phone", e.target.value)} />
                                                            </div>
                                                            <div>
                                                                <label className="block text-xs font-medium text-gray-400 mb-1.5">Company <span className="text-gray-600">(optional)</span></label>
                                                                <input className={inp} placeholder="Acme Corp"
                                                                    value={form.company} onChange={e => set("company", e.target.value)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* ── STEP 1 — Your Project ── */}
                                                {step === 1 && (
                                                    <div className="space-y-5">
                                                        {/* Service */}
                                                        <div>
                                                            <label className="block text-xs font-medium text-gray-400 mb-2">Service Interest *</label>
                                                            <div className="grid grid-cols-2 gap-2">
                                                                {SERVICES.map(s => (
                                                                    <button key={s} type="button"
                                                                        onClick={() => set("service", s)}
                                                                        className="text-left px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-150"
                                                                        style={{
                                                                            background: form.service === s ? "rgba(56,189,248,0.12)" : "rgba(255,255,255,0.03)",
                                                                            border: form.service === s ? "1px solid rgba(56,189,248,0.5)" : "1px solid rgba(255,255,255,0.07)",
                                                                            color: form.service === s ? "#38bdf8" : "#9ca3af",
                                                                        }}
                                                                    >{s}</button>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        {/* Project type pills */}
                                                        <div>
                                                            <label className="block text-xs font-medium text-gray-400 mb-2">Project Type <span className="text-gray-600">(select all that apply)</span></label>
                                                            <div className="flex flex-wrap gap-2">
                                                                {PROJECT_TYPES.map(t => {
                                                                    const on = form.project_type.includes(t);
                                                                    return (
                                                                        <button key={t} type="button" onClick={() => toggleProjectType(t)}
                                                                            className="px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150"
                                                                            style={{
                                                                                background: on ? "rgba(56,189,248,0.12)" : "rgba(255,255,255,0.04)",
                                                                                border: on ? "1px solid rgba(56,189,248,0.45)" : "1px solid rgba(255,255,255,0.08)",
                                                                                color: on ? "#38bdf8" : "#6b7280",
                                                                            }}
                                                                        >{t}</button>
                                                                    );
                                                                })}
                                                            </div>
                                                        </div>

                                                        <div className="grid grid-cols-2 gap-3">
                                                            {/* Budget */}
                                                            <div>
                                                                <label className="block text-xs font-medium text-gray-400 mb-1.5">Budget Range</label>
                                                                <div className="relative">
                                                                    <select className={`${inp} appearance-none pr-8 cursor-pointer ${!form.budget ? "text-gray-500" : "text-white"}`}
                                                                        value={form.budget} onChange={e => set("budget", e.target.value)}>
                                                                        <option value="">Select range…</option>
                                                                        {BUDGETS.map(b => <option key={b} value={b}>{b}</option>)}
                                                                    </select>
                                                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">▾</div>
                                                                </div>
                                                            </div>
                                                            {/* Timeline */}
                                                            <div>
                                                                <label className="block text-xs font-medium text-gray-400 mb-1.5">Timeline</label>
                                                                <div className="relative">
                                                                    <select className={`${inp} appearance-none pr-8 cursor-pointer ${!form.timeline ? "text-gray-500" : "text-white"}`}
                                                                        value={form.timeline} onChange={e => set("timeline", e.target.value)}>
                                                                        <option value="">Select timeline…</option>
                                                                        {TIMELINES.map(t => <option key={t} value={t}>{t}</option>)}
                                                                    </select>
                                                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">▾</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {/* ── STEP 2 — Details ── */}
                                                {step === 2 && (
                                                    <div className="space-y-4">
                                                        <div>
                                                            <label className="block text-xs font-medium text-gray-400 mb-1.5">Tell us about your project *</label>
                                                            <textarea
                                                                className={`${inp} resize-none`}
                                                                rows={5}
                                                                placeholder="What are you trying to build or solve? The more detail the better — helps us prepare for our first call."
                                                                value={form.message}
                                                                onChange={e => set("message", e.target.value)}
                                                            />
                                                        </div>
                                                        <div>
                                                            <label className="block text-xs font-medium text-gray-400 mb-1.5">How did you hear about us? <span className="text-gray-600">(optional)</span></label>
                                                            <div className="relative">
                                                                <select className={`${inp} appearance-none pr-8 cursor-pointer ${!form.referral ? "text-gray-500" : "text-white"}`}
                                                                    value={form.referral} onChange={e => set("referral", e.target.value)}>
                                                                    <option value="">Select…</option>
                                                                    {REFERRALS.map(r => <option key={r} value={r}>{r}</option>)}
                                                                </select>
                                                                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">▾</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>

                                    {/* Error */}
                                    <AnimatePresence>
                                        {errorMsg && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                                className="mt-3 text-rose-400 text-xs bg-rose-400/5 border border-rose-400/10 rounded-lg px-3 py-2"
                                            >{errorMsg}</motion.p>
                                        )}
                                    </AnimatePresence>

                                    {/* Navigation buttons */}
                                    <div className="flex items-center justify-between mt-6 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                                        <button
                                            type="button"
                                            onClick={goBack}
                                            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-medium transition-all  
                                                ${step === 0 ? "invisible pointer-events-none" : "text-gray-400 hover:text-white hover:bg-white/5"}`}
                                        >
                                            <ChevronLeft className="w-4 h-4" /> Back
                                        </button>

                                        <div className="flex items-center gap-2">
                                            {STEPS.map((_, i) => (
                                                <div key={i} className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                                                    style={{ background: i === step ? "#38bdf8" : i < step ? "#0ea5e9" : "rgba(255,255,255,0.1)" }}
                                                />
                                            ))}
                                        </div>

                                        {step < STEPS.length - 1 ? (
                                            <button type="button" onClick={goNext}
                                                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200"
                                                style={{ background: "linear-gradient(135deg,#0ea5e9,#38bdf8)", boxShadow: "0 0 20px rgba(56,189,248,0.25)" }}
                                            >
                                                Next <ChevronRight className="w-4 h-4" />
                                            </button>
                                        ) : (
                                            <button type="submit" disabled={status === "loading"}
                                                className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 disabled:opacity-50"
                                                style={{ background: "linear-gradient(135deg,#0ea5e9,#38bdf8)", boxShadow: "0 0 24px rgba(56,189,248,0.3)" }}
                                            >
                                                {status === "loading"
                                                    ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
                                                    : <>Send Request <ChevronRight className="w-4 h-4" /></>
                                                }
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
