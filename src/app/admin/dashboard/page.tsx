"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
    LogOut, Inbox, CheckCircle, XCircle,
    Trash2, RefreshCw, Mail, Building2, Calendar,
    Phone, DollarSign, Clock, Users, Activity,
    Globe, Monitor, Smartphone, ChevronDown, BookOpen,
    FileText, Trophy, ClipboardList
} from "lucide-react";
import type { Consultation, PageVisit } from "@/lib/db";

// ─── Types ───────────────────────────────────────────────────────────────────

type Status = Consultation["status"];
type Tab = "consultations" | "visitors";

// ─── Config ──────────────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<Status, { label: string; color: string; bg: string; icon: React.ReactNode }> = {
    new: { label: "New", color: "#38bdf8", bg: "rgba(56,189,248,0.1)", icon: <Inbox className="w-3.5 h-3.5" /> },
    contacted: { label: "Contacted", color: "#a78bfa", bg: "rgba(167,139,250,0.1)", icon: <Mail className="w-3.5 h-3.5" /> },
    qualified: { label: "Qualified", color: "#fbbf24", bg: "rgba(251,191,36,0.1)", icon: <CheckCircle className="w-3.5 h-3.5" /> },
    proposal: { label: "Proposal", color: "#f97316", bg: "rgba(249,115,22,0.1)", icon: <BookOpen className="w-3.5 h-3.5" /> },
    won: { label: "Won", color: "#34d399", bg: "rgba(52,211,153,0.1)", icon: <CheckCircle className="w-3.5 h-3.5" /> },
    lost: { label: "Lost", color: "#ef4444", bg: "rgba(239,68,68,0.1)", icon: <XCircle className="w-3.5 h-3.5" /> },
    reviewed: { label: "Reviewed", color: "#a78bfa", bg: "rgba(167,139,250,0.1)", icon: <CheckCircle className="w-3.5 h-3.5" /> },
    closed: { label: "Closed", color: "#6b7280", bg: "rgba(107,114,128,0.1)", icon: <XCircle className="w-3.5 h-3.5" /> },
};

// ─── Helpers ─────────────────────────────────────────────────────────────────

function parseDevice(ua: string | null): { device: string; browser: string } {
    if (!ua) return { device: "Unknown", browser: "Unknown" };
    const isMobile = /mobile|android|iphone|ipad/i.test(ua);
    let browser = "Other";
    if (/Chrome/i.test(ua) && !/Chromium|Edge/i.test(ua)) browser = "Chrome";
    else if (/Firefox/i.test(ua)) browser = "Firefox";
    else if (/Safari/i.test(ua) && !/Chrome/i.test(ua)) browser = "Safari";
    else if (/Edge/i.test(ua)) browser = "Edge";
    return { device: isMobile ? "Mobile" : "Desktop", browser };
}

function fmtDate(s: string) {
    return new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
function fmtTime(s: string) {
    return new Date(s).toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function StatCard({ label, value, color, icon }: { label: string; value: number | string; color: string; icon: React.ReactNode }) {
    return (
        <div className="rounded-xl p-5" style={{ background: "#0d1526", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className="flex items-center gap-2 mb-2">
                <span style={{ color }} className="opacity-70">{icon}</span>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{label}</p>
            </div>
            <p className="text-2xl font-bold" style={{ color }}>{value}</p>
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

function InfoPill({ label, value, color = "#6b7280" }: { label: string; value: string; color?: string }) {
    return (
        <div className="flex flex-col gap-0.5">
            <span className="text-[10px] uppercase tracking-wider text-gray-600">{label}</span>
            <span className="text-xs font-medium" style={{ color }}>{value}</span>
        </div>
    );
}

// ─── Consultations Tab ────────────────────────────────────────────────────────

function ConsultationsTab() {
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
        } finally { setLoading(false); }
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

    const total = rows.length;
    const newCount = rows.filter(r => r.status === "new").length;
    const reviewed = rows.filter(r => r.status === "reviewed").length;
    const closed = rows.filter(r => r.status === "closed").length;

    return (
        <div>
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <StatCard label="Total" value={total} color="#f1f5f9" icon={<Inbox className="w-4 h-4" />} />
                <StatCard label="New" value={newCount} color="#38bdf8" icon={<Activity className="w-4 h-4" />} />
                <StatCard label="Reviewed" value={reviewed} color="#a78bfa" icon={<CheckCircle className="w-4 h-4" />} />
                <StatCard label="Closed" value={closed} color="#6b7280" icon={<XCircle className="w-4 h-4" />} />
            </div>

            {/* Table */}
            <div className="rounded-2xl overflow-hidden" style={{ background: "#0d1526", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="grid text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3 border-b"
                    style={{ gridTemplateColumns: "2fr 2fr 2fr 1.5fr 1fr 80px", borderColor: "rgba(255,255,255,0.05)" }}>
                    <span>Name</span><span>Email</span><span>Service</span>
                    <span>Date</span><span>Status</span><span />
                </div>

                {loading && <div className="py-16 text-center text-gray-600 text-sm">Loading…</div>}

                {!loading && rows.length === 0 && (
                    <div className="py-16 text-center">
                        <Inbox className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <p className="text-gray-600 text-sm">No consultation requests yet.</p>
                    </div>
                )}

                {!loading && rows.map((row, idx) => (
                    <React.Fragment key={row.id}>
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
                                {fmtDate(row.created_at)}
                            </span>
                            <StatusBadge status={row.status} />
                            <div className="flex items-center gap-1 justify-end" onClick={e => e.stopPropagation()}>
                                <button onClick={() => deleteRow(row.id)}
                                    className="p-1.5 rounded-lg text-gray-600 hover:text-rose-400 hover:bg-rose-400/5 transition-all" title="Delete">
                                    <Trash2 className="w-3.5 h-3.5" />
                                </button>
                                <ChevronDown className={`w-4 h-4 text-gray-600 transition-transform ${expanded === row.id ? "rotate-180" : ""}`}
                                    onClick={() => setExpanded(expanded === row.id ? null : row.id)} />
                            </div>
                        </div>

                        {/* Expanded detail */}
                        {expanded === row.id && (
                            <div className="px-6 pb-6 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                <div className="rounded-xl p-5" style={{ background: "rgba(0,0,0,0.25)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                    {/* Meta pills */}
                                    <div className="flex flex-wrap gap-x-6 gap-y-3 mb-5">
                                        {row.phone && <InfoPill label="Phone" value={row.phone} color="#38bdf8" />}
                                        {row.company && <InfoPill label="Company" value={row.company} color="#e2e8f0" />}
                                        {row.budget && <InfoPill label="Budget" value={row.budget} color="#34d399" />}
                                        {row.timeline && <InfoPill label="Timeline" value={row.timeline} color="#fbbf24" />}
                                        {row.referral && <InfoPill label="Referred by" value={row.referral} />}
                                    </div>

                                    {/* Project types */}
                                    {row.project_type && (
                                        <div className="mb-4">
                                            <p className="text-[10px] uppercase tracking-wider text-gray-600 mb-2">Project Type</p>
                                            <div className="flex flex-wrap gap-1.5">
                                                {row.project_type.split(",").map(t => (
                                                    <span key={t} className="px-2.5 py-1 rounded-full text-xs font-medium"
                                                        style={{ background: "rgba(56,189,248,0.08)", border: "1px solid rgba(56,189,248,0.2)", color: "#7dd3fc" }}>
                                                        {t.trim()}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Message */}
                                    <div className="mb-5">
                                        <p className="text-xs text-gray-600 uppercase tracking-wider mb-2">Message</p>
                                        <p className="text-sm text-gray-300 leading-relaxed whitespace-pre-wrap">{row.message}</p>
                                    </div>

                                    {/* Status buttons */}
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
        </div>
    );
}

// ─── Visitors Tab ─────────────────────────────────────────────────────────────

function VisitorsTab() {
    const router = useRouter();
    const [rows, setRows] = useState<PageVisit[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/visitors");
            if (res.status === 401) { router.push("/admin"); return; }
            setRows(await res.json());
        } finally { setLoading(false); }
    }, [router]);

    useEffect(() => { fetchData(); }, [fetchData]);

    const total = rows.length;
    const uniqueIPs = new Set(rows.map(r => r.ip).filter(Boolean)).size;
    // top path
    const pathCount = rows.reduce<Record<string, number>>((acc, r) => {
        acc[r.path] = (acc[r.path] || 0) + 1; return acc;
    }, {});
    const topPath = Object.entries(pathCount).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "—";
    const mobileCount = rows.filter(r => /mobile|android|iphone|ipad/i.test(r.user_agent || "")).length;

    return (
        <div>
            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                <StatCard label="Total Visits" value={total} color="#38bdf8" icon={<Activity className="w-4 h-4" />} />
                <StatCard label="Unique IPs" value={uniqueIPs} color="#a78bfa" icon={<Users className="w-4 h-4" />} />
                <StatCard label="Mobile" value={mobileCount} color="#fbbf24" icon={<Smartphone className="w-4 h-4" />} />
                <StatCard label="Top Page" value={topPath} color="#34d399" icon={<Globe className="w-4 h-4" />} />
            </div>

            {/* Table */}
            <div className="rounded-2xl overflow-hidden" style={{ background: "#0d1526", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="grid text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3 border-b"
                    style={{ gridTemplateColumns: "1.5fr 1fr 1fr 1.5fr 1.5fr", borderColor: "rgba(255,255,255,0.05)" }}>
                    <span>IP Address</span><span>Device</span><span>Browser</span><span>Page</span><span>Date / Time</span>
                </div>

                {loading && <div className="py-16 text-center text-gray-600 text-sm">Loading…</div>}

                {!loading && rows.length === 0 && (
                    <div className="py-16 text-center">
                        <Activity className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <p className="text-gray-600 text-sm">No visitor data yet. Visit the site to record entries.</p>
                    </div>
                )}

                {!loading && rows.map((row, idx) => {
                    const { device, browser } = parseDevice(row.user_agent);
                    const isMobile = device === "Mobile";
                    return (
                        <div key={row.id}
                            className="grid items-center px-6 py-3 transition-colors duration-100 hover:bg-white/[0.02]"
                            style={{
                                gridTemplateColumns: "1.5fr 1fr 1fr 1.5fr 1.5fr",
                                borderBottom: idx < rows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                            }}
                        >
                            <span className="text-sm font-mono text-gray-300 truncate">{row.ip || "—"}</span>
                            <span className="flex items-center gap-1.5 text-xs text-gray-400">
                                {isMobile
                                    ? <Smartphone className="w-3.5 h-3.5 text-amber-400" />
                                    : <Monitor className="w-3.5 h-3.5 text-sky-400" />
                                }
                                {device}
                            </span>
                            <span className="text-xs text-gray-400">{browser}</span>
                            <span className="text-xs text-gray-400 truncate font-mono">{row.path}</span>
                            <span className="text-xs text-gray-600">
                                {fmtDate(row.created_at)}{" "}
                                <span className="text-gray-700">{fmtTime(row.created_at)}</span>
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// ─── Dashboard Page ───────────────────────────────────────────────────────────

export default function DashboardPage() {
    const router = useRouter();
    const [tab, setTab] = useState<Tab>("consultations");

    async function logout() {
        await fetch("/api/admin/login", { method: "DELETE" });
        router.push("/admin");
    }

    return (
        <div className="min-h-screen" style={{ background: "#080d18" }}>
            {/* Grid overlay */}
            <div className="fixed inset-0 pointer-events-none" style={{
                backgroundImage: "linear-gradient(rgba(56,189,248,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.025) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
            }} />

            {/* Top nav */}
            <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4"
                style={{ background: "rgba(8,13,24,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="QuantLab" className="h-8 w-auto"
                        style={{ filter: "drop-shadow(0 0 8px rgba(56,189,248,0.5)) brightness(1.2)" }} />
                    <div>
                        <span className="text-white font-bold text-sm">QuantLab</span>
                        <span className="text-gray-500 text-xs block">Admin Dashboard</span>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => router.push("/sales/leads")}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-emerald-400 font-medium hover:bg-emerald-400/10 text-xs transition-all border border-emerald-400/20">
                        <FileText className="w-3.5 h-3.5" /> Leads
                    </button>
                    <button onClick={() => router.push("/sales/clients")}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-violet-400 font-medium hover:bg-violet-400/10 text-xs transition-all border border-violet-400/20">
                        <Building2 className="w-3.5 h-3.5" /> Clients
                    </button>
                    <button onClick={() => router.push("/sales/leaderboard")}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-amber-400 font-medium hover:bg-amber-400/10 text-xs transition-all border border-amber-400/20">
                        <Trophy className="w-3.5 h-3.5" /> Leaderboard
                    </button>
                    <button onClick={() => router.push("/sales/dashboard#questionnaire-link")}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-pink-400 font-medium hover:bg-pink-400/10 text-xs transition-all border border-pink-400/20">
                        <ClipboardList className="w-3.5 h-3.5" /> Questionnaire
                    </button>
                    <div className="w-px h-5 bg-white/10 mx-1" />
                    <button onClick={() => router.push("/admin/training")}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-cyan-400 font-medium hover:bg-cyan-400/10 text-xs transition-all border border-cyan-400/20">
                        <BookOpen className="w-3.5 h-3.5" /> Training
                    </button>
                    <button onClick={logout}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-gray-400 hover:text-rose-400 hover:bg-rose-400/5 text-xs transition-all">
                        <LogOut className="w-3.5 h-3.5" /> Logout
                    </button>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-8 py-8">
                {/* Page title */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-white">Dashboard</h1>
                    <p className="text-gray-500 text-sm mt-1">Manage consultations and track site visitors.</p>
                </div>

                {/* Tab switcher */}
                <div className="flex items-center gap-1 mb-8 p-1 rounded-xl w-fit"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    {(["consultations", "visitors"] as Tab[]).map(t => (
                        <button key={t} onClick={() => setTab(t)}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                            style={{
                                background: tab === t ? "rgba(56,189,248,0.12)" : "transparent",
                                color: tab === t ? "#38bdf8" : "#6b7280",
                                border: tab === t ? "1px solid rgba(56,189,248,0.25)" : "1px solid transparent",
                            }}>
                            {t === "consultations"
                                ? <><Inbox className="w-3.5 h-3.5" /> Consultations</>
                                : <><Activity className="w-3.5 h-3.5" /> Visitors</>
                            }
                        </button>
                    ))}
                </div>

                {tab === "consultations" ? <ConsultationsTab /> : <VisitorsTab />}
            </main>
        </div>
    );
}
