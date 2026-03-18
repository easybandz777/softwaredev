"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
    BarChart3, Users, Target, TrendingUp,
    DollarSign, Clock, AlertCircle, ArrowRight, Building2,
    FileText, UserCheck, ChevronRight, Plus, Trash2, Link as LinkIcon, Copy
} from "lucide-react";
import { SalesLayout } from "@/components/SalesLayout";

interface DashboardData {
    totalLeads: number;
    newUnassigned: number;
    activeLeads: number;
    wonDeals: number;
    pipelineValue: number;
    activeClients: number;
    upcomingFollowUps: { id: number; name: string; company: string | null; next_follow_up: string; status: string }[];
    salesUsers: { id: number; username: string; full_name: string }[];
}

interface UserInfo {
    id: number;
    username: string;
    full_name: string;
    role: string;
    referral_code?: string;
}

function fmtCurrency(n: number) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

function relativeTime(s: string) {
    const now = new Date();
    const d = new Date(s);
    const diff = Math.ceil((d.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    if (diff === 0) return "Today";
    if (diff === 1) return "Tomorrow";
    if (diff < 0) return `${Math.abs(diff)}d overdue`;
    return `In ${diff} days`;
}

function StatCard({ label, value, color, icon, subtitle }: {
    label: string; value: number | string; color: string; icon: React.ReactNode; subtitle?: string;
}) {
    return (
        <div className="rounded-xl p-4 transition-all duration-200 hover:scale-[1.02]" style={{
            background: "linear-gradient(145deg, #0d1526, #0a1020)",
            border: "1px solid rgba(255,255,255,0.05)",
        }}>
            <div className="flex items-center gap-2 mb-2">
                <span style={{ color }} className="opacity-70">{icon}</span>
                <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wider leading-tight">{label}</p>
            </div>
            <p className="text-xl font-bold" style={{ color }}>{value}</p>
            {subtitle && <p className="text-[10px] text-gray-600 mt-0.5">{subtitle}</p>}
        </div>
    );
}

export default function SalesDashboard() {
    const router = useRouter();
    const [data, setData] = useState<DashboardData | null>(null);
    const [user, setUser] = useState<UserInfo | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchAll = useCallback(async () => {
        setLoading(true);
        try {
            const [dashRes, meRes] = await Promise.all([
                fetch("/api/sales/dashboard"),
                fetch("/api/sales/me"),
            ]);
            if (dashRes.status === 401 || meRes.status === 401) { router.push("/sales"); return; }
            setData(await dashRes.json());
            setUser(await meRes.json());
        } finally { setLoading(false); }
    }, [router]);

    useEffect(() => { fetchAll(); }, [fetchAll]);

    if (loading || !data) {
        return (
            <SalesLayout>
                <div className="flex items-center justify-center min-h-[80vh]">
                    <div className="text-gray-500 text-sm animate-pulse">Loading dashboard…</div>
                </div>
            </SalesLayout>
        );
    }

    const winRate = data.totalLeads > 0 ? Math.round((data.wonDeals / data.totalLeads) * 100) : 0;
    const isAdmin = user?.role === "admin";

    async function deleteUser(id: number, name: string) {
        if (!confirm(`Remove "${name}" from the team? Their leads and clients will be unassigned.`)) return;
        await fetch("/api/sales/users", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id }),
        });
        fetchAll();
    }

    return (
        <SalesLayout user={user}>
            {/* Top bar */}
            <header className="hidden md:flex sticky top-0 z-10 items-center justify-between px-8 py-4" style={{
                background: "rgba(8,13,24,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>
                <div>
                    <h1 className="text-xl font-bold text-white">Dashboard</h1>
                    <p className="text-gray-500 text-xs mt-0.5">Welcome back, {user?.full_name || user?.username}</p>
                </div>
                <div className="flex items-center gap-2">
                    <button onClick={() => router.push("/sales/leads?new=1")}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all"
                        style={{ background: "linear-gradient(135deg, #059669, #34d399)", color: "white", boxShadow: "0 0 16px rgba(52,211,153,0.2)" }}>
                        <Plus className="w-3.5 h-3.5" /> New Lead
                    </button>
                    <button onClick={() => router.push("/sales/clients?new=1")}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all"
                        style={{ background: "rgba(167,139,250,0.12)", color: "#a78bfa", border: "1px solid rgba(167,139,250,0.25)" }}>
                        <UserCheck className="w-3.5 h-3.5" /> New Client
                    </button>
                    <button onClick={() => router.push("/sales/leads")}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all"
                        style={{ background: "rgba(52,211,153,0.1)", color: "#34d399", border: "1px solid rgba(52,211,153,0.2)" }}>
                        View All <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                </div>
            </header>

            {/* Mobile page header */}
            <div className="md:hidden px-4 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <h1 className="text-lg font-bold text-white">Dashboard</h1>
                <p className="text-gray-500 text-xs mt-0.5">Welcome back, {user?.full_name || user?.username}</p>
                {/* Mobile action buttons */}
                <div className="flex gap-2 mt-3">
                    <button onClick={() => router.push("/sales/leads?new=1")}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold"
                        style={{ background: "linear-gradient(135deg, #059669, #34d399)", color: "white" }}>
                        <Plus className="w-3.5 h-3.5" /> New Lead
                    </button>
                    <button onClick={() => router.push("/sales/clients?new=1")}
                        className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-lg text-xs font-semibold"
                        style={{ background: "rgba(167,139,250,0.12)", color: "#a78bfa", border: "1px solid rgba(167,139,250,0.25)" }}>
                        <UserCheck className="w-3.5 h-3.5" /> New Client
                    </button>
                </div>
            </div>

            <div className="px-4 md:px-8 py-6 max-w-6xl mx-auto">
                {/* Stat cards — 2 cols mobile, 3 cols md, 6 cols xl */}
                <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3 mb-8">
                    <StatCard label="Total Leads" value={data.totalLeads} color="#f1f5f9" icon={<FileText className="w-4 h-4" />} />
                    <StatCard label="New / Unassigned" value={data.newUnassigned} color="#38bdf8" icon={<AlertCircle className="w-4 h-4" />} />
                    <StatCard label="Active Pipeline" value={data.activeLeads} color="#a78bfa" icon={<TrendingUp className="w-4 h-4" />} />
                    <StatCard label="Won Deals" value={data.wonDeals} color="#34d399" icon={<UserCheck className="w-4 h-4" />} subtitle={`${winRate}% win rate`} />
                    <StatCard label="Pipeline Value" value={fmtCurrency(data.pipelineValue)} color="#fbbf24" icon={<DollarSign className="w-4 h-4" />} />
                    <StatCard label="Active Clients" value={data.activeClients} color="#f472b6" icon={<Users className="w-4 h-4" />} />
                </div>

                {/* Two columns: follow-ups + team — stack on mobile */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {/* Follow-ups */}
                    <div className="rounded-2xl overflow-hidden" style={{
                        background: "linear-gradient(145deg, #0d1526, #0a1020)",
                        border: "1px solid rgba(255,255,255,0.05)",
                    }}>
                        <div className="px-5 py-4 border-b flex items-center gap-2" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                            <Clock className="w-4 h-4 text-amber-400" />
                            <h2 className="text-sm font-semibold text-white">Upcoming Follow-ups</h2>
                        </div>
                        {data.upcomingFollowUps.length === 0 ? (
                            <div className="py-10 text-center">
                                <Clock className="w-6 h-6 text-gray-700 mx-auto mb-2" />
                                <p className="text-gray-600 text-sm">No follow-ups scheduled</p>
                            </div>
                        ) : (
                            <div>
                                {data.upcomingFollowUps.map((fu, idx) => {
                                    const rel = relativeTime(fu.next_follow_up);
                                    const isOverdue = rel.includes("overdue");
                                    return (
                                        <button key={fu.id} onClick={() => router.push(`/sales/leads/${fu.id}`)}
                                            className="w-full flex items-center justify-between px-5 py-3 text-left hover:bg-white/[0.02] transition-colors"
                                            style={{ borderBottom: idx < data.upcomingFollowUps.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                                            <div className="min-w-0 flex-1">
                                                <p className="text-sm font-medium text-white truncate">{fu.name}</p>
                                                {fu.company && <p className="text-xs text-gray-500 truncate">{fu.company}</p>}
                                            </div>
                                            <div className="flex items-center gap-2 ml-3 flex-shrink-0">
                                                <span className={`text-xs font-medium ${isOverdue ? "text-rose-400" : "text-amber-400"}`}>{rel}</span>
                                                <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Team */}
                    <div className="rounded-2xl overflow-hidden" style={{
                        background: "linear-gradient(145deg, #0d1526, #0a1020)",
                        border: "1px solid rgba(255,255,255,0.05)",
                    }}>
                        <div className="px-5 py-4 border-b flex items-center gap-2" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                            <Users className="w-4 h-4 text-violet-400" />
                            <h2 className="text-sm font-semibold text-white">Sales Team</h2>
                            <button onClick={() => router.push("/sales/leads")}
                                className="ml-auto flex items-center gap-1 text-xs text-emerald-400 hover:text-emerald-300 transition-colors">
                                View Leads <Target className="w-3 h-3" />
                            </button>
                        </div>
                        {data.salesUsers.length === 0 ? (
                            <div className="py-10 text-center">
                                <Users className="w-6 h-6 text-gray-700 mx-auto mb-2" />
                                <p className="text-gray-600 text-sm">No team members yet</p>
                            </div>
                        ) : (
                            <div>
                                {data.salesUsers.map((su, idx) => (
                                    <div key={su.id} className="flex items-center gap-3 px-5 py-3"
                                        style={{ borderBottom: idx < data.salesUsers.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}>
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                                            style={{ background: "rgba(167,139,250,0.1)", color: "#a78bfa", border: "1px solid rgba(167,139,250,0.2)" }}>
                                            {(su.full_name || su.username)[0].toUpperCase()}
                                        </div>
                                        <div className="min-w-0">
                                            <p className="text-sm font-medium text-white truncate">{su.full_name}</p>
                                            <p className="text-xs text-gray-600">@{su.username}</p>
                                        </div>
                                        <div className="ml-auto flex items-center gap-1 flex-shrink-0">
                                            <button onClick={() => router.push("/sales/clients")}
                                                className="flex items-center gap-1 text-xs text-gray-600 hover:text-gray-300 transition-colors">
                                                <Building2 className="w-3 h-3" />
                                            </button>
                                            {isAdmin && su.id !== user?.id && (
                                                <button onClick={() => deleteUser(su.id, su.full_name)}
                                                    className="p-1 rounded hover:bg-red-500/10 transition-colors group" title="Remove user">
                                                    <Trash2 className="w-3 h-3 text-gray-600 group-hover:text-red-400" />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Shareable Link Card */}
                <div className="mt-5 rounded-2xl overflow-hidden p-6 relative group" style={{
                    background: "linear-gradient(145deg, #0d1526, #0a1020)",
                    border: "1px solid rgba(14,165,233,0.15)",
                    boxShadow: "0 0 30px rgba(14,165,233,0.05)"
                }}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl -z-10 group-hover:bg-sky-500/10 transition-colors" />
                    
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <LinkIcon className="w-5 h-5 text-sky-400" />
                                <h3 className="text-lg font-bold text-white">Your Public Questionnaire Link</h3>
                            </div>
                            <p className="text-sm text-gray-400 max-w-xl">
                                Share this link with prospective clients. When they fill out the multi-step needs assessment, a new lead will automatically be created and assigned to you in the CRM.
                            </p>
                        </div>

                        <div className="w-full md:w-auto">
                            <div className="flex items-center overflow-hidden rounded-xl border border-sky-500/20 bg-black/20 focus-within:border-sky-500/50 transition-colors">
                                <div className="px-4 py-3 text-sm text-gray-300 font-mono truncate max-w-[200px] sm:max-w-xs select-all">
                                    https://quantlabusa.com/questionnaire/{user?.referral_code || user?.username}
                                </div>
                                <button 
                                    onClick={() => {
                                        navigator.clipboard.writeText(`https://quantlabusa.com/questionnaire/${user?.referral_code || user?.username}`);
                                        alert("Link copied to clipboard!");
                                    }}
                                    className="px-4 py-3 bg-sky-500/10 text-sky-400 hover:bg-sky-500/20 hover:text-sky-300 font-medium text-sm transition-colors border-l border-sky-500/20 flex items-center gap-2"
                                >
                                    <Copy className="w-4 h-4" /> Copy
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SalesLayout>
    );
}
