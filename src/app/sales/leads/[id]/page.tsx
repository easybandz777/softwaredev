"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import {
    LogOut, BarChart3, Target, Building2, Home,
    ArrowLeft, Mail, Phone, Calendar, DollarSign,
    Clock, Send, MessageSquare, UserCheck, Briefcase,
    CheckCircle, TrendingUp, GraduationCap,
} from "lucide-react";
import type { LeadNote } from "@/lib/db";

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
}

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

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();

    const links = [
        { href: "/sales/dashboard", label: "Dashboard", icon: <Home className="w-4 h-4" /> },
        { href: "/sales/leads", label: "Leads", icon: <Target className="w-4 h-4" /> },
        { href: "/sales/clients", label: "Clients", icon: <Building2 className="w-4 h-4" /> },
        { href: "/sales/training", label: "Training", icon: <GraduationCap className="w-4 h-4" /> },
    ];

    async function logout() {
        await fetch("/api/admin/login", { method: "DELETE" });
        router.push("/sales");
    }

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-56 flex flex-col z-20" style={{
            background: "linear-gradient(180deg, #0a1020 0%, #080d18 100%)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
        }}>
            <div className="px-5 py-5 flex items-center gap-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{
                    background: "linear-gradient(135deg, #059669, #34d399)",
                    boxShadow: "0 0 12px rgba(52,211,153,0.3)",
                }}>
                    <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <div>
                    <span className="text-white font-bold text-sm block leading-tight">QuantLab</span>
                    <span className="text-emerald-400/70 text-[10px] font-medium uppercase tracking-wider">Sales CRM</span>
                </div>
            </div>

            <nav className="flex-1 px-3 py-4 space-y-1">
                {links.map(link => {
                    const active = pathname?.startsWith(link.href);
                    return (
                        <button key={link.href} onClick={() => router.push(link.href)}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150"
                            style={{
                                color: active ? "#34d399" : "#9ca3af",
                                background: active ? "rgba(52,211,153,0.08)" : "transparent",
                                border: active ? "1px solid rgba(52,211,153,0.15)" : "1px solid transparent",
                            }}>
                            {link.icon}
                            {link.label}
                        </button>
                    );
                })}
            </nav>

            <div className="px-3 py-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <button onClick={logout}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-gray-500 hover:text-rose-400 hover:bg-rose-400/5 transition-all">
                    <LogOut className="w-3.5 h-3.5" /> Sign out
                </button>
            </div>
        </aside>
    );
}

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
    const [salesUsers, setSalesUsers] = useState<SalesUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [newNote, setNewNote] = useState("");
    const [sending, setSending] = useState(false);

    // Editable fields
    const [valueEst, setValueEst] = useState("");
    const [followUp, setFollowUp] = useState("");

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const [leadsRes, notesRes, dashRes] = await Promise.all([
                fetch("/api/sales/leads"),
                fetch(`/api/sales/leads/${leadId}/notes`),
                fetch("/api/sales/dashboard"),
            ]);
            if (leadsRes.status === 401) { router.push("/sales"); return; }

            const allLeads: Lead[] = await leadsRes.json();
            const thisLead = allLeads.find(l => l.id === parseInt(leadId));
            setLead(thisLead || null);
            setNotes(await notesRes.json());

            const d = await dashRes.json();
            setSalesUsers(d.salesUsers || []);

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
                body: JSON.stringify({ note_text: newNote }),
            });
            setNewNote("");
            const notesRes = await fetch(`/api/sales/leads/${leadId}/notes`);
            setNotes(await notesRes.json());
        } finally { setSending(false); }
    }

    async function convertToClient() {
        if (!lead) return;
        if (!confirm(`Convert "${lead.name}" to a client?`)) return;

        // Create client
        await fetch("/api/sales/clients", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
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
        <div className="min-h-screen" style={{ background: "#080d18" }}>
            <div className="fixed inset-0 pointer-events-none" style={{
                backgroundImage: "linear-gradient(rgba(52,211,153,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.02) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
            }} />

            <Sidebar />

            <main className="ml-56">
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
                            <h1 className="text-xl font-bold text-white">{lead.name}</h1>
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

                        {/* Right column — Notes (3 cols) */}
                        <div className="lg:col-span-3">
                            <div className="rounded-xl overflow-hidden" style={{
                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}>
                                <div className="px-6 py-4 border-b flex items-center gap-2" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                                    <h2 className="text-sm font-semibold text-white">Notes &amp; Activity</h2>
                                    <span className="text-xs text-gray-600 ml-auto">{notes.length} note{notes.length !== 1 ? "s" : ""}</span>
                                </div>

                                {/* Add note form */}
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
                                            style={{
                                                background: "linear-gradient(135deg, #059669, #34d399)",
                                                color: "white",
                                            }}
                                        >
                                            <Send className="w-3.5 h-3.5" /> {sending ? "Sending…" : "Post"}
                                        </button>
                                    </div>
                                </div>

                                {/* Notes feed */}
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
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
