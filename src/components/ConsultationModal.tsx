"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Loader2, ChevronDown } from "lucide-react";

const SERVICES = [
    "Custom CRM & ECM Systems",
    "Algorithmic Trading Bots",
    "High-Performance Web Portals",
    "Payment & Invoicing Systems",
    "Estimating & Proposal Generators",
    "Enterprise Architecture",
    "Other / Not Sure Yet",
];

interface Props {
    open: boolean;
    onClose: () => void;
}

type Status = "idle" | "loading" | "success" | "error";

export function ConsultationModal({ open, onClose }: Props) {
    const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
    const [status, setStatus] = useState<Status>("idle");
    const [errorMsg, setErrorMsg] = useState("");
    const overlayRef = useRef<HTMLDivElement>(null);

    // Reset on open
    useEffect(() => {
        if (open) {
            setForm({ name: "", email: "", company: "", service: "", message: "" });
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

    const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }));

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!form.service) { setErrorMsg("Please select a service."); return; }
        setStatus("loading");
        setErrorMsg("");
        try {
            const res = await fetch("/api/consultations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.error || "Submission failed.");
            }
            setStatus("success");
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : "Something went wrong.";
            setErrorMsg(msg);
            setStatus("error");
        }
    }

    const inputClass = `w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 
        focus:outline-none focus:border-sky-400/60 focus:ring-1 focus:ring-sky-400/30 transition-all duration-200`;

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
                    style={{ background: "rgba(5,10,20,0.85)", backdropFilter: "blur(8px)" }}
                    onClick={e => { if (e.target === overlayRef.current) onClose(); }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.93, y: 24 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.93, y: 24 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-lg rounded-2xl overflow-hidden"
                        style={{
                            background: "linear-gradient(145deg, #0d1526 0%, #0a1020 100%)",
                            border: "1px solid rgba(56,189,248,0.15)",
                            boxShadow: "0 0 80px rgba(56,189,248,0.08), 0 30px 60px rgba(0,0,0,0.6)",
                        }}
                    >
                        {/* Top accent line */}
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

                        {/* Close */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all z-10"
                        >
                            <X className="w-4 h-4" />
                        </button>

                        <div className="p-8">
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                                        className="mx-auto mb-5 w-16 h-16 rounded-full bg-emerald-400/10 flex items-center justify-center"
                                    >
                                        <CheckCircle className="w-8 h-8 text-emerald-400" />
                                    </motion.div>
                                    <h3 className="text-xl font-bold text-white mb-2">Request Received</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        We've logged your consultation request and will be in touch within 1 business day.
                                    </p>
                                    <button
                                        onClick={onClose}
                                        className="mt-6 px-6 py-2.5 rounded-xl bg-sky-500/10 border border-sky-400/20 text-sky-400 text-sm font-medium hover:bg-sky-500/20 transition-all"
                                    >
                                        Close
                                    </button>
                                </motion.div>
                            ) : (
                                <>
                                    <div className="mb-6">
                                        <h2 className="text-2xl font-bold text-white mb-1">Book a Consultation</h2>
                                        <p className="text-gray-400 text-sm">Tell us about your project — we'll reach out within 24 hours.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-xs font-medium text-gray-400 mb-1.5">Full Name *</label>
                                                <input
                                                    className={inputClass}
                                                    placeholder="Jane Smith"
                                                    value={form.name}
                                                    onChange={e => set("name", e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs font-medium text-gray-400 mb-1.5">Email *</label>
                                                <input
                                                    type="email"
                                                    className={inputClass}
                                                    placeholder="jane@company.com"
                                                    value={form.email}
                                                    onChange={e => set("email", e.target.value)}
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-gray-400 mb-1.5">Company <span className="text-gray-600">(optional)</span></label>
                                            <input
                                                className={inputClass}
                                                placeholder="Acme Corp"
                                                value={form.company}
                                                onChange={e => set("company", e.target.value)}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-gray-400 mb-1.5">Service Interest *</label>
                                            <div className="relative">
                                                <select
                                                    className={`${inputClass} appearance-none cursor-pointer pr-10 ${!form.service ? "text-gray-500" : "text-white"}`}
                                                    value={form.service}
                                                    onChange={e => set("service", e.target.value)}
                                                    required
                                                >
                                                    <option value="" disabled>Select a service…</option>
                                                    {SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                                                </select>
                                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-xs font-medium text-gray-400 mb-1.5">Tell us about your project *</label>
                                            <textarea
                                                className={`${inputClass} resize-none`}
                                                rows={4}
                                                placeholder="Brief description of what you're trying to build or solve…"
                                                value={form.message}
                                                onChange={e => set("message", e.target.value)}
                                                required
                                            />
                                        </div>

                                        {errorMsg && (
                                            <p className="text-rose-400 text-xs bg-rose-400/5 border border-rose-400/10 rounded-lg px-3 py-2">{errorMsg}</p>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={status === "loading"}
                                            className="w-full py-3.5 rounded-xl font-semibold text-sm text-white transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
                                            style={{
                                                background: "linear-gradient(135deg, #0ea5e9, #38bdf8)",
                                                boxShadow: "0 0 30px rgba(56,189,248,0.25)",
                                            }}
                                        >
                                            {status === "loading" ? (
                                                <><Loader2 className="w-4 h-4 animate-spin" /> Submitting…</>
                                            ) : (
                                                "Send Consultation Request"
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
