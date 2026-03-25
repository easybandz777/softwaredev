"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter, useParams } from "next/navigation";
import {
    ArrowLeft, Mail, Phone, Calendar, DollarSign,
    Clock, Send, MessageSquare, UserCheck, Briefcase,
    CheckCircle, TrendingUp, Flame, Snowflake, Thermometer,
    Play, Pause, RotateCcw, ChevronDown, ChevronUp, Inbox,
} from "lucide-react";
import type { LeadNote, LeadEmail } from "@/lib/db";
import { SalesLayout } from "@/components/SalesLayout";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Lead {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    company: string | null;
    service: string;
    project_type: string | null;
    budget: string | null;
    timeline: string | null;
    message: string;
    referral: string | null;
    status: string;
    assigned_to_id: number | null;
    assigned_to_name: string | null;
    value_est: number | null;
    next_follow_up: string | null;
    created_at: string;
    temperature: string | null;
    cadence_step: number;
    cadence_started_at: string | null;
    cadence_paused: boolean;
}

interface CadenceInfo {
    cadenceStep: number;
    cadenceStartedAt: string | null;
    cadencePaused: boolean;
    nextFollowUp: string | null;
    temperature: string | null;
    daysUntilDue: number | null;
    currentStep: { step: number; day: number; label: string; channel: string; script: string; why: string } | null;
    totalSteps: number;
    allSteps: { step: number; day: number; label: string; channel: string; script: string; why: string }[];
}

const TEMP_CONFIG: Record<string, { label: string; color: string; bg: string; icon: React.ReactNode }> = {
    hot: { label: "Hot", color: "#ef4444", bg: "rgba(239,68,68,0.12)", icon: <Flame className="w-3 h-3" /> },
    warm: { label: "Warm", color: "#f59e0b", bg: "rgba(245,158,11,0.12)", icon: <Thermometer className="w-3 h-3" /> },
    cold: { label: "Cold", color: "#3b82f6", bg: "rgba(59,130,246,0.12)", icon: <Snowflake className="w-3 h-3" /> },
    dead: { label: "Dead", color: "#6b7280", bg: "rgba(107,114,128,0.12)", icon: <Snowflake className="w-3 h-3" /> },
};

interface SalesUser {
    id: number;
    username: string;
    full_name: string;
}

// ─── Status Pipeline ─────────────────────────────────────────────────────────

const PIPELINE_STAGES = [
    { key: "new", label: "New", color: "#38bdf8" },
    { key: "contacted", label: "Contacted", color: "#a78bfa" },
    { key: "qualified", label: "Qualified", color: "#fbbf24" },
    { key: "proposal", label: "Proposal", color: "#f97316" },
    { key: "won", label: "Won", color: "#34d399" },
    { key: "lost", label: "Lost", color: "#6b7280" },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmtDate(s: string) {
    return new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
function fmtTime(s: string) {
    return new Date(s).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}
function fmtDateInput(s: string | null) {
    if (!s) return "";
    return new Date(s).toISOString().slice(0, 16);
}

// ─── Lead Detail Page ────────────────────────────────────────────────────────

export default function LeadDetailPage() {
    const router = useRouter();
    const params = useParams();
    const leadId = params?.id as string;

    const [lead, setLead] = useState<Lead | null>(null);
    const [notes, setNotes] = useState<LeadNote[]>([]);
    const [emails, setEmails] = useState<LeadEmail[]>([]);
    const [cadence, setCadence] = useState<CadenceInfo | null>(null);
    const [salesUsers, setSalesUsers] = useState<SalesUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [newNote, setNewNote] = useState("");
    const [sending, setSending] = useState(false);
    const [activeRightTab, setActiveRightTab] = useState<"notes" | "emails">("notes");
    const [expandedEmail, setExpandedEmail] = useState<number | null>(null);
    const [cadenceLoading, setCadenceLoading] = useState(false);
    const [expandedCadenceStep, setExpandedCadenceStep] = useState<number | null>(null);

    // Editable fields
    const [valueEst, setValueEst] = useState("");
    const [followUp, setFollowUp] = useState("");

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const [leadsRes, notesRes, dashRes, emailsRes, cadenceRes] = await Promise.all([
                fetch("/api/sales/leads", { credentials: "include" }),
                fetch(`/api/sales/leads/${leadId}/notes`, { credentials: "include" }),
                fetch("/api/sales/dashboard", { credentials: "include" }),
                fetch(`/api/sales/leads/${leadId}/emails`, { credentials: "include" }),
                fetch(`/api/sales/cadence?leadId=${leadId}`, { credentials: "include" }),
            ]);
            if (leadsRes.status === 401) { window.location.href = "/sales"; return; }

            const allLeads: Lead[] = await leadsRes.json();
            const thisLead = allLeads.find(l => l.id === parseInt(leadId));
            setLead(thisLead || null);
            setNotes(await notesRes.json());

            const d = await dashRes.json();
            setSalesUsers(d.salesUsers || []);

            if (emailsRes.ok) setEmails(await emailsRes.json());
            if (cadenceRes.ok) setCadence(await cadenceRes.json());

            if (thisLead) {
                setValueEst(thisLead.value_est?.toString() || "");
                setFollowUp(fmtDateInput(thisLead.next_follow_up));
            }
        } finally { setLoading(false); }
    }, [leadId, router]);

    useEffect(() => { fetchData(); }, [fetchData]);

    async function updateLead(updates: Record<string, unknown>) {
        await fetch("/api/sales/leads", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ id: parseInt(leadId), ...updates }),
        });
        fetchData();
    }

    async function addNote() {
        if (!newNote.trim()) return;
        setSending(true);
        try {
            await fetch(`/api/sales/leads/${leadId}/notes`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ note_text: newNote }),
            });
            setNewNote("");
            const notesRes = await fetch(`/api/sales/leads/${leadId}/notes`, { credentials: "include" });
            setNotes(await notesRes.json());
        } finally { setSending(false); }
    }

    async function cadenceAction(action: string) {
        setCadenceLoading(true);
        try {
            await fetch("/api/sales/cadence", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ leadId: parseInt(leadId), action }),
            });
            fetchData();
        } finally { setCadenceLoading(false); }
    }

    async function convertToClient() {
        if (!lead) return;
        if (!confirm(`Convert "${lead.name}" to a client?`)) return;

        // Create client
        await fetch("/api/sales/clients", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({
                company_name: lead.company || lead.name,
                primary_contact: lead.name,
                email: lead.email,
                phone: lead.phone,
                assigned_to_id: lead.assigned_to_id,
                converted_from_lead_id: lead.id,
            }),
        });

        // Mark lead as won
        await updateLead({ status: "won" });
        router.push("/sales/clients");
    }

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen" style={{ background: "#080d18" }}>
                <div className="text-gray-500 text-sm animate-pulse">Loading lead…</div>
            </div>
        );
    }

    if (!lead) {
        return (
            <div className="flex items-center justify-center min-h-screen" style={{ background: "#080d18" }}>
                <div className="text-center">
                    <p className="text-gray-500 text-sm mb-4">Lead not found.</p>
                    <button onClick={() => router.push("/sales/leads")} className="text-emerald-400 text-sm hover:underline">
                        ← Back to Leads
                    </button>
                </div>
            </div>
        );
    }

    return (
        <SalesLayout>
            <div>
                {/* Top bar */}
                <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4" style={{
                    background: "rgba(8,13,24,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>
                    <div className="flex items-center gap-4">
                        <button onClick={() => router.push("/sales/leads")}
                            className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all">
                            <ArrowLeft className="w-4 h-4" />
                        </button>
                        <div>
                            <div className="flex items-center gap-2">
                                <h1 className="text-xl font-bold text-white">{lead.name}</h1>
                                {lead.temperature && TEMP_CONFIG[lead.temperature] && (
                                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider"
                                        style={{ color: TEMP_CONFIG[lead.temperature].color, background: TEMP_CONFIG[lead.temperature].bg }}>
                                        {TEMP_CONFIG[lead.temperature].icon}
                                        {TEMP_CONFIG[lead.temperature].label}
                                    </span>
                                )}
                            </div>
                            {lead.company && <p className="text-gray-500 text-xs">{lead.company}</p>}
                        </div>
                    </div>
                    {lead.status !== "won" && (
                        <button onClick={convertToClient}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all"
                            style={{
                                background: "linear-gradient(135deg, #059669, #34d399)",
                                color: "white",
                                boxShadow: "0 0 16px rgba(52,211,153,0.2)",
                            }}>
                            <CheckCircle className="w-3.5 h-3.5" /> Convert to Client
                        </button>
                    )}
                </header>

                <div className="max-w-5xl mx-auto px-8 py-8">
                    {/* Pipeline stages */}
                    <div className="rounded-xl p-4 mb-8" style={{
                        background: "linear-gradient(145deg, #0d1526, #0a1020)",
                        border: "1px solid rgba(255,255,255,0.05)",
                    }}>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Pipeline Stage</p>
                        <div className="flex items-center gap-2">
                            {PIPELINE_STAGES.map((stage, idx) => {
                                const active = lead.status === stage.key;
                                const pastIdx = PIPELINE_STAGES.findIndex(ps => ps.key === lead.status);
                                const isPast = idx < pastIdx;
                                return (
                                    <React.Fragment key={stage.key}>
                                        <button
                                            onClick={() => updateLead({ status: stage.key })}
                                            className="flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all text-center"
                                            style={{
                                                background: active ? stage.color + "20" : isPast ? "rgba(255,255,255,0.03)" : "transparent",
                                                color: active ? stage.color : isPast ? "#9ca3af" : "#4b5563",
                                                border: active ? `2px solid ${stage.color}40` : "1px solid rgba(255,255,255,0.05)",
                                                boxShadow: active ? `0 0 12px ${stage.color}15` : "none",
                                            }}
                                        >
                                            {stage.label}
                                        </button>
                                        {idx < PIPELINE_STAGES.length - 1 && (
                                            <div className="w-4 h-px" style={{ background: isPast || active ? "#4b5563" : "rgba(255,255,255,0.05)" }} />
                                        )}
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>

                    {/* Cadence Tracker */}
                    {cadence && (
                        <div className="rounded-xl p-4 mb-8" style={{
                            background: "linear-gradient(145deg, #0d1526, #0a1020)",
                            border: "1px solid rgba(255,255,255,0.05)",
                        }}>
                            <div className="flex items-center justify-between mb-3">
                                <p className="text-xs text-gray-500 uppercase tracking-wider">18-Day Follow-Up Cadence</p>
                                <div className="flex items-center gap-2">
                                    {cadence.daysUntilDue !== null && cadence.cadenceStep > 0 && !cadence.cadencePaused && (
                                        <span className={`text-xs font-medium ${cadence.daysUntilDue <= 0 ? "text-rose-400" : cadence.daysUntilDue <= 2 ? "text-amber-400" : "text-gray-500"}`}>
                                            {cadence.daysUntilDue <= 0 ? "Overdue" : `${cadence.daysUntilDue}d until next`}
                                        </span>
                                    )}
                                    {cadence.cadencePaused && (
                                        <span className="text-xs text-amber-400 font-medium">Paused</span>
                                    )}
                                    {cadence.cadenceStep === 0 ? (
                                        <button onClick={() => cadenceAction("start")} disabled={cadenceLoading}
                                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-white disabled:opacity-50"
                                            style={{ background: "linear-gradient(135deg, #059669, #34d399)" }}>
                                            <Play className="w-3 h-3" /> Start Cadence
                                        </button>
                                    ) : (
                                        <div className="flex items-center gap-1">
                                            {cadence.cadencePaused ? (
                                                <button onClick={() => cadenceAction("resume")} disabled={cadenceLoading}
                                                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/10 disabled:opacity-50">
                                                    <Play className="w-3 h-3" /> Resume
                                                </button>
                                            ) : (
                                                <button onClick={() => cadenceAction("pause")} disabled={cadenceLoading}
                                                    className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-amber-400 border border-amber-500/20 hover:bg-amber-500/10 disabled:opacity-50">
                                                    <Pause className="w-3 h-3" /> Pause
                                                </button>
                                            )}
                                            <button onClick={() => cadenceAction("reset")} disabled={cadenceLoading}
                                                className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-500 border border-white/10 hover:bg-white/5 disabled:opacity-50">
                                                <RotateCcw className="w-3 h-3" /> Reset
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {cadence.cadenceStep > 0 && (
                                <div className="space-y-1.5">
                                    {cadence.allSteps.map((step) => {
                                        const isActive = step.step === cadence.cadenceStep;
                                        const isCompleted = step.step < cadence.cadenceStep;
                                        const isExpanded = expandedCadenceStep === step.step;
                                        return (
                                            <div key={step.step}>
                                                <button
                                                    onClick={() => setExpandedCadenceStep(isExpanded ? null : step.step)}
                                                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all"
                                                    style={{
                                                        background: isActive ? "rgba(52,211,153,0.08)" : isCompleted ? "rgba(255,255,255,0.02)" : "transparent",
                                                        border: isActive ? "1px solid rgba(52,211,153,0.2)" : "1px solid transparent",
                                                    }}>
                                                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0" style={{
                                                        background: isCompleted ? "rgba(52,211,153,0.15)" : isActive ? "rgba(52,211,153,0.1)" : "rgba(255,255,255,0.05)",
                                                        color: isCompleted ? "#34d399" : isActive ? "#34d399" : "#4b5563",
                                                        border: isActive ? "2px solid #34d399" : "1px solid rgba(255,255,255,0.1)",
                                                    }}>
                                                        {isCompleted ? "✓" : step.step}
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <span className={`text-xs font-medium ${isActive ? "text-emerald-400" : isCompleted ? "text-gray-400" : "text-gray-600"}`}>
                                                            Day {step.day} — {step.label}
                                                        </span>
                                                        <span className="text-[10px] text-gray-600 ml-2">{step.channel}</span>
                                                    </div>
                                                    {isExpanded ? <ChevronUp className="w-3 h-3 text-gray-600" /> : <ChevronDown className="w-3 h-3 text-gray-600" />}
                                                </button>
                                                {isExpanded && (
                                                    <div className="ml-9 mr-3 mt-1 mb-2 p-3 rounded-lg" style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                                        <p className="text-xs text-gray-300 leading-relaxed mb-2 italic">&ldquo;{step.script}&rdquo;</p>
                                                        <p className="text-[10px] text-gray-500"><strong className="text-gray-400">Why:</strong> {step.why}</p>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    )}

                    {/* Two columns: Info + Notes */}
                    <div className="grid lg:grid-cols-5 gap-6">
                        {/* Left column — Lead info (3 cols) */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Contact info */}
                            <div className="rounded-xl p-5" style={{
                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}>
                                <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                                    <UserCheck className="w-4 h-4 text-emerald-400" /> Contact Info
                                </h2>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        <Mail className="w-3.5 h-3.5 text-gray-600" />
                                        <a href={`mailto:${lead.email}`} className="text-sm text-sky-400 hover:underline">{lead.email}</a>
                                    </div>
                                    {lead.phone && (
                                        <div className="flex items-center gap-2">
                                            <Phone className="w-3.5 h-3.5 text-gray-600" />
                                            <span className="text-sm text-gray-300">{lead.phone}</span>
                                        </div>
                                    )}
                                    <div className="flex items-center gap-2">
                                        <Calendar className="w-3.5 h-3.5 text-gray-600" />
                                        <span className="text-xs text-gray-500">Submitted {fmtDate(lead.created_at)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Deal info */}
                            <div className="rounded-xl p-5" style={{
                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}>
                                <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-amber-400" /> Deal Info
                                </h2>
                                <div className="space-y-4">
                                    {/* Assigned to */}
                                    <div>
                                        <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1">Assigned To</label>
                                        <select
                                            value={lead.assigned_to_id ?? ""}
                                            onChange={e => updateLead({ assigned_to_id: e.target.value ? parseInt(e.target.value) : null })}
                                            className="w-full text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-emerald-400/40"
                                        >
                                            <option value="">Unassigned</option>
                                            {salesUsers.map(u => (
                                                <option key={u.id} value={u.id}>{u.full_name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Estimated value */}
                                    <div>
                                        <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1">Est. Value ($)</label>
                                        <div className="flex gap-2">
                                            <input
                                                type="number"
                                                value={valueEst}
                                                onChange={e => setValueEst(e.target.value)}
                                                placeholder="0"
                                                className="flex-1 text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-emerald-400/40"
                                            />
                                            <button onClick={() => updateLead({ value_est: valueEst ? parseFloat(valueEst) : null })}
                                                className="px-3 py-2 rounded-lg text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all">
                                                Save
                                            </button>
                                        </div>
                                    </div>

                                    {/* Follow-up date */}
                                    <div>
                                        <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1">Next Follow-up</label>
                                        <div className="flex gap-2">
                                            <input
                                                type="datetime-local"
                                                value={followUp}
                                                onChange={e => setFollowUp(e.target.value)}
                                                className="flex-1 text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-emerald-400/40"
                                            />
                                            <button onClick={() => updateLead({ next_follow_up: followUp || null })}
                                                className="px-3 py-2 rounded-lg text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 transition-all">
                                                Set
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Service details */}
                            <div className="rounded-xl p-5" style={{
                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}>
                                <h2 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                                    <Briefcase className="w-4 h-4 text-violet-400" /> Request Details
                                </h2>
                                <div className="space-y-3">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-wider text-gray-600">Service Requested</span>
                                        <p className="text-sm text-gray-300 mt-0.5">{lead.service}</p>
                                    </div>
                                    {lead.project_type && (
                                        <div>
                                            <span className="text-[10px] uppercase tracking-wider text-gray-600">Project Type</span>
                                            <div className="flex flex-wrap gap-1.5 mt-1">
                                                {lead.project_type.split(",").map(t => (
                                                    <span key={t} className="px-2 py-0.5 rounded-full text-xs font-medium"
                                                        style={{ background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)", color: "#7dd3fc" }}>
                                                        {t.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                    {lead.budget && (
                                        <div>
                                            <span className="text-[10px] uppercase tracking-wider text-gray-600">Budget</span>
                                            <p className="text-sm text-emerald-400 mt-0.5 flex items-center gap-1">
                                                <DollarSign className="w-3 h-3" />{lead.budget}
                                            </p>
                                        </div>
                                    )}
                                    {lead.timeline && (
                                        <div>
                                            <span className="text-[10px] uppercase tracking-wider text-gray-600">Timeline</span>
                                            <p className="text-sm text-gray-300 mt-0.5 flex items-center gap-1">
                                                <Clock className="w-3 h-3 text-gray-600" />{lead.timeline}
                                            </p>
                                        </div>
                                    )}
                                    {lead.referral && (
                                        <div>
                                            <span className="text-[10px] uppercase tracking-wider text-gray-600">Referral</span>
                                            <p className="text-sm text-gray-300 mt-0.5">{lead.referral}</p>
                                        </div>
                                    )}
                                    <div>
                                        <span className="text-[10px] uppercase tracking-wider text-gray-600">Message</span>
                                        <p className="text-sm text-gray-300 mt-1 leading-relaxed whitespace-pre-wrap">{lead.message}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right column — Notes & Emails (3 cols) */}
                        <div className="lg:col-span-3">
                            <div className="rounded-xl overflow-hidden" style={{
                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}>
                                {/* Tab switcher */}
                                <div className="px-6 py-3 border-b flex items-center gap-1" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                    <button onClick={() => setActiveRightTab("notes")}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                                        style={{
                                            background: activeRightTab === "notes" ? "rgba(52,211,153,0.1)" : "transparent",
                                            color: activeRightTab === "notes" ? "#34d399" : "#6b7280",
                                            border: activeRightTab === "notes" ? "1px solid rgba(52,211,153,0.2)" : "1px solid transparent",
                                        }}>
                                        <MessageSquare className="w-3.5 h-3.5" /> Notes
                                        <span className="text-[10px] text-gray-600 ml-0.5">({notes.length})</span>
                                    </button>
                                    <button onClick={() => setActiveRightTab("emails")}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                                        style={{
                                            background: activeRightTab === "emails" ? "rgba(56,189,248,0.1)" : "transparent",
                                            color: activeRightTab === "emails" ? "#38bdf8" : "#6b7280",
                                            border: activeRightTab === "emails" ? "1px solid rgba(56,189,248,0.2)" : "1px solid transparent",
                                        }}>
                                        <Inbox className="w-3.5 h-3.5" /> Email History
                                        <span className="text-[10px] text-gray-600 ml-0.5">({emails.length})</span>
                                    </button>
                                </div>

                                {/* ─── Notes Tab ─── */}
                                {activeRightTab === "notes" && (
                                    <>
                                        <div className="px-6 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                            <div className="flex gap-3">
                                                <textarea
                                                    value={newNote}
                                                    onChange={e => setNewNote(e.target.value)}
                                                    placeholder="Add a note about this lead…"
                                                    rows={3}
                                                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/30 resize-none transition-all"
                                                />
                                                <button
                                                    onClick={addNote}
                                                    disabled={sending || !newNote.trim()}
                                                    className="self-end px-4 py-2.5 rounded-xl text-xs font-semibold transition-all disabled:opacity-40 flex items-center gap-1.5"
                                                    style={{ background: "linear-gradient(135deg, #059669, #34d399)", color: "white" }}>
                                                    <Send className="w-3.5 h-3.5" /> {sending ? "Sending…" : "Post"}
                                                </button>
                                            </div>
                                        </div>

                                        {notes.length === 0 ? (
                                            <div className="py-12 text-center">
                                                <MessageSquare className="w-6 h-6 text-gray-700 mx-auto mb-2" />
                                                <p className="text-gray-600 text-sm">No notes yet. Add one above!</p>
                                            </div>
                                        ) : (
                                            <div>
                                                {notes.map((note, idx) => (
                                                    <div key={note.id} className="px-6 py-4" style={{
                                                        borderBottom: idx < notes.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                                                    }}>
                                                        <div className="flex items-center justify-between mb-2">
                                                            <div className="flex items-center gap-2">
                                                                <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold" style={{
                                                                    background: "rgba(52,211,153,0.1)",
                                                                    color: "#34d399",
                                                                    border: "1px solid rgba(52,211,153,0.2)",
                                                                }}>
                                                                    {(note.author_name || "U").charAt(0)}
                                                                </div>
                                                                <span className="text-xs font-medium text-gray-300">{note.author_name || "User"}</span>
                                                            </div>
                                                            <span className="text-[10px] text-gray-600">
                                                                {fmtDate(note.created_at)} · {fmtTime(note.created_at)}
                                                            </span>
                                                        </div>
                                                        <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap pl-8">
                                                            {note.note_text}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                )}

                                {/* ─── Emails Tab ─── */}
                                {activeRightTab === "emails" && (
                                    <>
                                        {emails.length === 0 ? (
                                            <div className="py-12 text-center">
                                                <Inbox className="w-6 h-6 text-gray-700 mx-auto mb-2" />
                                                <p className="text-gray-600 text-sm">No emails synced yet.</p>
                                                <p className="text-gray-700 text-xs mt-1">Use Email Sync in Settings to pull in conversations.</p>
                                            </div>
                                        ) : (
                                            <div className="divide-y" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                                                {emails.map((email) => {
                                                    const isOut = email.direction === "outbound";
                                                    const isOpen = expandedEmail === email.id;
                                                    return (
                                                        <div key={email.id} className="px-6 py-3">
                                                            <button onClick={() => setExpandedEmail(isOpen ? null : email.id)}
                                                                className="w-full text-left">
                                                                <div className="flex items-start gap-3">
                                                                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5" style={{
                                                                        background: isOut ? "rgba(52,211,153,0.1)" : "rgba(56,189,248,0.1)",
                                                                        color: isOut ? "#34d399" : "#38bdf8",
                                                                        border: `1px solid ${isOut ? "rgba(52,211,153,0.2)" : "rgba(56,189,248,0.2)"}`,
                                                                    }}>
                                                                        {isOut ? <Send className="w-3 h-3" /> : <Mail className="w-3 h-3" />}
                                                                    </div>
                                                                    <div className="flex-1 min-w-0">
                                                                        <div className="flex items-center justify-between">
                                                                            <div className="flex items-center gap-2">
                                                                                <span className={`text-xs font-medium ${isOut ? "text-emerald-400" : "text-sky-400"}`}>
                                                                                    {isOut ? "Sent" : "Received"}
                                                                                </span>
                                                                                <span className="text-[10px] text-gray-600 truncate">
                                                                                    {isOut ? `→ ${email.to_address}` : `← ${email.from_address}`}
                                                                                </span>
                                                                            </div>
                                                                            <span className="text-[10px] text-gray-600 flex-shrink-0 ml-2">
                                                                                {email.sent_at ? fmtDate(email.sent_at) : ""}
                                                                            </span>
                                                                        </div>
                                                                        <p className="text-xs text-gray-300 font-medium mt-0.5 truncate">{email.subject || "(no subject)"}</p>
                                                                        {!isOpen && email.body_text && (
                                                                            <p className="text-xs text-gray-600 mt-0.5 truncate">{email.body_text.slice(0, 120)}…</p>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </button>
                                                            {isOpen && (
                                                                <div className="ml-10 mt-2 p-3 rounded-lg text-xs text-gray-300 leading-relaxed whitespace-pre-wrap"
                                                                    style={{ background: "rgba(0,0,0,0.3)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                                                    {email.body_html ? (
                                                                        <div dangerouslySetInnerHTML={{ __html: email.body_html }} />
                                                                    ) : (
                                                                        email.body_text || "(empty body)"
                                                                    )}
                                                                </div>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SalesLayout>
    );
}
