"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
    LogOut, BarChart3, Users, Target, TrendingUp,
    DollarSign, Clock, AlertCircle, ArrowRight, Building2,
    Home, FileText, UserCheck, ChevronRight, GraduationCap,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

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
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmtCurrency(n: number) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

function fmtDate(s: string) {
    return new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric" });
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

// ─── Sub-components ──────────────────────────────────────────────────────────

function StatCard({ label, value, color, icon, subtitle }: {
    label: string; value: number | string; color: string; icon: React.ReactNode; subtitle?: string;
}) {
    return (
        <div className="rounded-xl p-5 transition-all duration-200 hover:scale-[1.02]" style={{
            background: "linear-gradient(145deg, #0d1526, #0a1020)",
            border: "1px solid rgba(255,255,255,0.05)",
        }}>
            <div className="flex items-center gap-2 mb-3">
                <span style={{ color }} className="opacity-70">{icon}</span>
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">{label}</p>
            </div>
            <p className="text-2xl font-bold" style={{ color }}>{value}</p>
            {subtitle && <p className="text-xs text-gray-600 mt-1">{subtitle}</p>}
        </div>
    );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function Sidebar({ user }: { user: UserInfo | null }) {
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
            {/* Logo */}
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

            {/* Nav links */}
            <nav className="flex-1 px-3 py-4 space-y-1">
                {links.map(link => {
                    const active = pathname === link.href;
                    return (
                        <button
                            key={link.href}
                            onClick={() => router.push(link.href)}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150"
                            style={{
                                color: active ? "#34d399" : "#9ca3af",
                                background: active ? "rgba(52,211,153,0.08)" : "transparent",
                                border: active ? "1px solid rgba(52,211,153,0.15)" : "1px solid transparent",
                            }}
                        >
                            {link.icon}
                            {link.label}
                        </button>
                    );
                })}
            </nav>

            {/* User + logout */}
            <div className="px-3 py-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                {user && (
                    <div className="px-3 mb-3">
                        <p className="text-white text-sm font-medium truncate">{user.full_name || user.username}</p>
                        <p className="text-gray-600 text-xs capitalize">{user.role}</p>
                    </div>
                )}
                <button onClick={logout}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-gray-500 hover:text-rose-400 hover:bg-rose-400/5 transition-all">
                    <LogOut className="w-3.5 h-3.5" /> Sign out
                </button>
            </div>
        </aside>
    );
}

// ─── Dashboard Page ──────────────────────────────────────────────────────────

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
            if (dashRes.status === 401 || meRes.status === 401) {
                router.push("/sales");
                return;
            }
            setData(await dashRes.json());
            setUser(await meRes.json());
        } finally {
            setLoading(false);
        }
    }, [router]);

    useEffect(() => { fetchAll(); }, [fetchAll]);

    if (loading || !data) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-gray-500 text-sm animate-pulse">Loading dashboard…</div>
            </div>
        );
    }

    const winRate = data.totalLeads > 0
        ? Math.round((data.wonDeals / data.totalLeads) * 100)
        : 0;

    return (
        <div className="min-h-screen" style={{ background: "#080d18" }}>
            {/* Grid overlay */}
            <div className="fixed inset-0 pointer-events-none" style={{
                backgroundImage: "linear-gradient(rgba(52,211,153,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.02) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
            }} />

            <Sidebar user={user} />

            <main className="ml-56">
                {/* Top bar */}
                <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4" style={{
                    background: "rgba(8,13,24,0.9)",
                    backdropFilter: "blur(16px)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>
                    <div>
                        <h1 className="text-xl font-bold text-white">Dashboard</h1>
                        <p className="text-gray-500 text-xs mt-0.5">
                            Welcome back, {user?.full_name || user?.username}
                        </p>
                    </div>
                    <button
                        onClick={() => router.push("/sales/leads")}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all"
                        style={{
                            background: "rgba(52,211,153,0.1)",
                            color: "#34d399",
                            border: "1px solid rgba(52,211,153,0.2)",
                        }}
                    >
                        View All Leads <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                </header>

                <div className="max-w-6xl mx-auto px-8 py-8">
                    {/* Stat cards */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-10">
                        <StatCard label="Total Leads" value={data.totalLeads} color="#f1f5f9" icon={<FileText className="w-4 h-4" />} />
                        <StatCard label="New / Unassigned" value={data.newUnassigned} color="#38bdf8" icon={<AlertCircle className="w-4 h-4" />} />
                        <StatCard label="Active Pipeline" value={data.activeLeads} color="#a78bfa" icon={<TrendingUp className="w-4 h-4" />} />
                        <StatCard label="Won Deals" value={data.wonDeals} color="#34d399" icon={<UserCheck className="w-4 h-4" />} subtitle={`${winRate}% win rate`} />
                        <StatCard label="Pipeline Value" value={fmtCurrency(data.pipelineValue)} color="#fbbf24" icon={<DollarSign className="w-4 h-4" />} />
                        <StatCard label="Active Clients" value={data.activeClients} color="#f472b6" icon={<Users className="w-4 h-4" />} />
                    </div>

                    {/* Two columns: Follow-ups + Team */}
                    <div className="grid lg:grid-cols-2 gap-6">
                        {/* Upcoming follow-ups */}
                        <div className="rounded-2xl overflow-hidden" style={{
                            background: "linear-gradient(145deg, #0d1526, #0a1020)",
                            border: "1px solid rgba(255,255,255,0.05)",
                        }}>
                            <div className="px-6 py-4 border-b flex items-center gap-2" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                <Clock className="w-4 h-4 text-amber-400" />
                                <h2 className="text-sm font-semibold text-white">Upcoming Follow-ups</h2>
                            </div>
                            {data.upcomingFollowUps.length === 0 ? (
                                <div className="py-12 text-center">
                                    <Clock className="w-6 h-6 text-gray-700 mx-auto mb-2" />
                                    <p className="text-gray-600 text-sm">No follow-ups scheduled</p>
                                </div>
                            ) : (
                                <div>
                                    {data.upcomingFollowUps.map((fu, idx) => {
                                        const rel = relativeTime(fu.next_follow_up);
                                        const isOverdue = rel.includes("overdue");
                                        return (
                                            <button
                                                key={fu.id}
                                                onClick={() => router.push(`/sales/leads/${fu.id}`)}
                                                className="w-full flex items-center justify-between px-6 py-3 text-left hover:bg-white/[0.02] transition-colors"
                                                style={{
                                                    borderBottom: idx < data.upcomingFollowUps.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                                                }}
                                            >
                                                <div>
                                                    <p className="text-sm font-medium text-white">{fu.name}</p>
                                                    {fu.company && <p className="text-xs text-gray-500">{fu.company}</p>}
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className={`text-xs font-medium ${isOverdue ? "text-rose-400" : "text-amber-400"}`}>
                                                        {rel}
                                                    </span>
                                                    <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            )}
                        </div>

                        {/* Team members */}
                        <div className="rounded-2xl overflow-hidden" style={{
                            background: "linear-gradient(145deg, #0d1526, #0a1020)",
                            border: "1px solid rgba(255,255,255,0.05)",
                        }}>
                            <div className="px-6 py-4 border-b flex items-center gap-2" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                <Users className="w-4 h-4 text-violet-400" />
                                <h2 className="text-sm font-semibold text-white">Sales Team</h2>
                            </div>
                            {data.salesUsers.length === 0 ? (
                                <div className="py-12 text-center">
                                    <Users className="w-6 h-6 text-gray-700 mx-auto mb-2" />
                                    <p className="text-gray-600 text-sm">No team members yet</p>
                                </div>
                            ) : (
                                <div>
                                    {data.salesUsers.map((su, idx) => (
                                        <div
                                            key={su.id}
                                            className="flex items-center gap-3 px-6 py-3"
                                            style={{
                                                borderBottom: idx < data.salesUsers.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                                            }}
                                        >
                                            <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{
                                                background: "rgba(167,139,250,0.1)",
                                                color: "#a78bfa",
                                                border: "1px solid rgba(167,139,250,0.2)",
                                            }}>
                                                {su.full_name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-white">{su.full_name}</p>
                                                <p className="text-xs text-gray-600">@{su.username}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
