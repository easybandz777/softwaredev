"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
    LogOut, Inbox, CheckCircle, XCircle, Clock,
    Trash2, RefreshCw, ChevronDown, Mail, Building2, Calendar
} from "lucide-react";
import type { Consultation } from "@/lib/db";

type Status = Consultation["status"];

const STATUS_CONFIG: Record<Status, { label: string; color: string; bg: string; icon: React.ReactNode }> = {
    new: { label: "New", color: "#38bdf8", bg: "rgba(56,189,248,0.1)", icon: <Inbox className="w-3.5 h-3.5" /> },
    reviewed: { label: "Reviewed", color: "#a78bfa", bg: "rgba(167,139,250,0.1)", icon: <CheckCircle className="w-3.5 h-3.5" /> },
    closed: { label: "Closed", color: "#6b7280", bg: "rgba(107,114,128,0.1)", icon: <XCircle className="w-3.5 h-3.5" /> },
};

function StatCard({ label, value, color }: { label: string; value: number; color: string }) {
    return (
        <div className="rounded-xl p-5" style={{ background: "#0d1526", border: "1px solid rgba(255,255,255,0.05)" }}>
            <p className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-1">{label}</p>
            <p className="text-3xl font-bold" style={{ color }}>{value}</p>
        </div>
    );
}

function StatusBadge({ status }: { status: Status }) {
    const cfg = STATUS_CONFIG[status];
    return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ color: cfg.color, background: cfg.bg }}>
            {cfg.icon}{cfg.label}
        </span>
    );
}

export default function DashboardPage() {
    const router = useRouter();
    const [rows, setRows] = useState<Consultation[]>([]);
    const [loading, setLoading] = useState(true);
    const [expanded, setExpanded] = useState<number | null>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/consultations");
            if (res.status === 401) { router.push("/admin"); return; }
            setRows(await res.json());
        } finally {
            setLoading(false);
        }
    }, [router]);

    useEffect(() => { fetchData(); }, [fetchData]);

    async function updateStatus(id: number, status: Status) {
        await fetch(`/api/admin/consultations/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status }),
        });
        setRows(r => r.map(c => c.id === id ? { ...c, status } : c));
    }

    async function deleteRow(id: number) {
        if (!confirm("Delete this consultation request?")) return;
        await fetch(`/api/admin/consultations/${id}`, { method: "DELETE" });
        setRows(r => r.filter(c => c.id !== id));
    }

    async function logout() {
        await fetch("/api/admin/login", { method: "DELETE" });
        router.push("/admin");
    }

    const total = rows.length;
    const newCount = rows.filter(r => r.status === "new").length;
    const reviewed = rows.filter(r => r.status === "reviewed").length;
    const closed = rows.filter(r => r.status === "closed").length;

    return (
        <div className="min-h-screen" style={{ background: "#080d18" }}>
            {/* Fixed grid overlay */}
            <div className="fixed inset-0 pointer-events-none" style={{
                backgroundImage: "linear-gradient(rgba(56,189,248,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.025) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
            }} />

            {/* Top nav */}
            <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4" style={{
                background: "rgba(8,13,24,0.9)", backdropFilter: "blur(16px)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="QuantLab" className="h-8 w-auto"
                        style={{ filter: "drop-shadow(0 0 8px rgba(56,189,248,0.5)) brightness(1.2)" }} />
                    <div>
                        <span className="text-white font-bold text-sm">QuantLab</span>
                        <span className="text-gray-500 text-xs block">Admin Dashboard</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={fetchData} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 text-xs transition-all">
                        <RefreshCw className={`w-3.5 h-3.5 ${loading ? "animate-spin" : ""}`} /> Refresh
                    </button>
                    <button onClick={logout} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-gray-400 hover:text-rose-400 hover:bg-rose-400/5 text-xs transition-all">
                        <LogOut className="w-3.5 h-3.5" /> Logout
                    </button>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-8 py-8">
                {/* Page title */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-white">Consultation Requests</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage and respond to inbound consultation inquiries.</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    <StatCard label="Total" value={total} color="#f1f5f9" />
                    <StatCard label="New" value={newCount} color="#38bdf8" />
                    <StatCard label="Reviewed" value={reviewed} color="#a78bfa" />
                    <StatCard label="Closed" value={closed} color="#6b7280" />
                </div>

                {/* Table */}
                <div className="rounded-2xl overflow-hidden" style={{
                    background: "#0d1526",
                    border: "1px solid rgba(255,255,255,0.05)",
                }}>
                    {/* Table header */}
                    <div className="grid text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3 border-b"
                        style={{ gridTemplateColumns: "2fr 2fr 2fr 1.5fr 1fr 80px", borderColor: "rgba(255,255,255,0.05)" }}>
                        <span>Name</span><span>Email</span><span>Service</span>
                        <span>Date</span><span>Status</span><span></span>
                    </div>

                    {loading && (
                        <div className="py-16 text-center text-gray-600 text-sm">Loading…</div>
                    )}

                    {!loading && rows.length === 0 && (
                        <div className="py-16 text-center">
                            <Inbox className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                            <p className="text-gray-600 text-sm">No consultation requests yet.</p>
                        </div>
                    )}

                    {!loading && rows.map((row, idx) => (
                        <React.Fragment key={row.id}>
                            {/* Row */}
                            <div
                                className="grid items-center px-6 py-4 cursor-pointer transition-colors duration-150"
                                style={{
                                    gridTemplateColumns: "2fr 2fr 2fr 1.5fr 1fr 80px",
                                    background: expanded === row.id ? "rgba(56,189,248,0.03)" : "transparent",
                                    borderBottom: idx < rows.length - 1 || expanded === row.id ? "1px solid rgba(255,255,255,0.04)" : "none",
                                }}
                                onClick={() => setExpanded(expanded === row.id ? null : row.id)}
                            >
                                <span className="text-sm font-medium text-white truncate">{row.name}</span>
                                <span className="text-sm text-gray-400 truncate flex items-center gap-1.5">
                                    <Mail className="w-3 h-3 text-gray-600 flex-shrink-0" />{row.email}
                                </span>
                                <span className="text-sm text-gray-400 truncate">{row.service}</span>
                                <span className="text-xs text-gray-600 flex items-center gap-1.5">
                                    <Calendar className="w-3 h-3 flex-shrink-0" />
                                    {new Date(row.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                                </span>
                                <StatusBadge status={row.status} />
                                <div className="flex items-center gap-1 justify-end" onClick={e => e.stopPropagation()}>
                                    <button onClick={() => deleteRow(row.id)}
                                        className="p-1.5 rounded-lg text-gray-600 hover:text-rose-400 hover:bg-rose-400/5 transition-all" title="Delete">
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                    <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${expanded === row.id ? "rotate-180" : ""}`} onClick={() => setExpanded(expanded === row.id ? null : row.id)} />
                                </div>
                            </div>

                            {/* Expanded detail panel */}
                            {expanded === row.id && (
                                <div className="px-6 pb-6 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                    <div className="rounded-xl p-5" style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                                            {row.company && (
                                                <div className="flex items-center gap-2 text-gray-400">
                                                    <Building2 className="w-3.5 h-3.5 text-gray-600" />
                                                    <span>{row.company}</span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="mb-5">
                                            <p className="text-xs text-gray-600 uppercase tracking-wider mb-2">Message</p>
                                            <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">{row.message}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p className="text-xs text-gray-500 mr-2">Update status:</p>
                                            {(["new", "reviewed", "closed"] as Status[]).map(s => {
                                                const cfg = STATUS_CONFIG[s];
                                                const active = row.status === s;
                                                return (
                                                    <button key={s} onClick={() => updateStatus(row.id, s)}
                                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                                                        style={{
                                                            color: active ? cfg.color : "#6b7280",
                                                            background: active ? cfg.bg : "transparent",
                                                            border: `1px solid ${active ? cfg.color + "40" : "rgba(255,255,255,0.05)"}`,
                                                        }}>
                                                        {cfg.icon}{cfg.label}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </main>
        </div>
    );
}
