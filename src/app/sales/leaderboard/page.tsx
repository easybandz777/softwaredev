"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
    Trophy, Crown, Flame, TrendingUp, Users, Zap,
    ArrowUpDown, ChevronUp, ChevronDown, Star, Target, DollarSign,
} from "lucide-react";
import { SalesLayout } from "@/components/SalesLayout";

interface LeaderboardEntry {
    rank: number;
    id: number;
    username: string;
    full_name: string;
    role: string;
    leads_generated: number;
    deals_won: number;
    revenue_closed: number;
    pipeline_value: number;
    active_leads: number;
    clients_managed: number;
    win_rate: number;
    biggest_deal: number;
}

interface UserInfo {
    id: number;
    username: string;
    full_name: string;
    role: string;
}

type SortKey = "revenue_closed" | "deals_won" | "leads_generated" | "win_rate" | "pipeline_value" | "active_leads" | "clients_managed";

function fmtCurrency(n: number) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

// ─── Podium Card ──────────────────────────────────────────────────────────────
function PodiumCard({ entry, position, isCurrentUser }: {
    entry: LeaderboardEntry; position: 1 | 2 | 3; isCurrentUser: boolean;
}) {
    const themes = {
        1: {
            border: "rgba(255,215,0,0.5)",
            glow: "0 0 50px rgba(255,215,0,0.2), 0 0 100px rgba(255,215,0,0.08), inset 0 1px 0 rgba(255,215,0,0.15)",
            accent: "#FFD700",
            bg: "linear-gradient(145deg, rgba(255,215,0,0.12), rgba(255,215,0,0.03))",
            label: "1ST PLACE",
            badge: "🥇",
            size: "lg",
        },
        2: {
            border: "rgba(192,192,192,0.35)",
            glow: "0 0 30px rgba(192,192,192,0.1)",
            accent: "#C0C0C0",
            bg: "linear-gradient(145deg, rgba(192,192,192,0.06), rgba(192,192,192,0.02))",
            label: "2ND PLACE",
            badge: "🥈",
            size: "md",
        },
        3: {
            border: "rgba(205,127,50,0.35)",
            glow: "0 0 30px rgba(205,127,50,0.1)",
            accent: "#CD7F32",
            bg: "linear-gradient(145deg, rgba(205,127,50,0.06), rgba(205,127,50,0.02))",
            label: "3RD PLACE",
            badge: "🥉",
            size: "sm",
        },
    };
    const t = themes[position];
    const isFirst = position === 1;

    return (
        <div
            className={`relative rounded-2xl p-5 transition-all duration-500 ${isFirst ? "md:scale-110" : ""}`}
            style={{
                background: t.bg,
                border: `1px solid ${t.border}`,
                boxShadow: t.glow,
                animation: "podiumEntry 0.6s ease-out both",
                animationDelay: `${(position - 1) * 150}ms`,
            }}
        >
            {/* Crown for #1 */}
            {isFirst && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Crown className="w-6 h-6" style={{ color: "#FFD700", filter: "drop-shadow(0 0 8px rgba(255,215,0,0.5))" }} />
                </div>
            )}

            {/* Rank badge */}
            <div className="text-center mb-3">
                <span className="text-2xl">{t.badge}</span>
            </div>

            {/* Avatar */}
            <div className="mx-auto w-14 h-14 rounded-full flex items-center justify-center text-lg font-bold mb-3" style={{
                background: `rgba(${isFirst ? "255,215,0" : position === 2 ? "192,192,192" : "205,127,50"},0.12)`,
                border: `2px solid ${t.accent}`,
                color: t.accent,
            }}>
                {(entry.full_name || entry.username)[0].toUpperCase()}
            </div>

            {/* Name */}
            <h3 className={`text-center font-bold text-white ${isFirst ? "text-lg" : "text-sm"}`}>
                {entry.full_name || entry.username}
            </h3>
            <p className="text-center text-[10px] font-semibold uppercase tracking-widest mt-1" style={{ color: t.accent }}>
                {t.label}
            </p>

            {/* Stats */}
            <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Revenue</span>
                    <span className="text-sm font-bold" style={{ color: t.accent }}>{fmtCurrency(entry.revenue_closed)}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Deals Won</span>
                    <span className="text-sm font-semibold text-white">{entry.deals_won}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Leads</span>
                    <span className="text-sm font-semibold text-white">{entry.leads_generated}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Win Rate</span>
                    <span className="text-sm font-semibold text-emerald-400">{entry.win_rate}%</span>
                </div>
            </div>

            {/* Current user indicator */}
            {isCurrentUser && (
                <div className="absolute top-2 right-2 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider"
                    style={{ background: "rgba(52,211,153,0.15)", color: "#34d399", border: "1px solid rgba(52,211,153,0.3)" }}>
                    You
                </div>
            )}
        </div>
    );
}

// ─── Highlight Card ───────────────────────────────────────────────────────────
function HighlightCard({ icon, label, value, name, color }: {
    icon: React.ReactNode; label: string; value: string; name: string; color: string;
}) {
    return (
        <div className="rounded-xl p-4 flex items-center gap-3 transition-all duration-200 hover:scale-[1.02]" style={{
            background: "linear-gradient(145deg, #0d1526, #0a1020)",
            border: "1px solid rgba(255,255,255,0.05)",
        }}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{
                background: `${color}15`,
                border: `1px solid ${color}30`,
            }}>
                {icon}
            </div>
            <div className="min-w-0 flex-1">
                <p className="text-[10px] font-medium uppercase tracking-wider text-gray-500">{label}</p>
                <p className="text-sm font-bold text-white truncate">{name}</p>
                <p className="text-xs font-semibold" style={{ color }}>{value}</p>
            </div>
        </div>
    );
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function LeaderboardPage() {
    const router = useRouter();
    const [data, setData] = useState<LeaderboardEntry[]>([]);
    const [user, setUser] = useState<UserInfo | null>(null);
    const [loading, setLoading] = useState(true);
    const [period, setPeriod] = useState<"all" | "month">("all");
    const [sortKey, setSortKey] = useState<SortKey>("revenue_closed");
    const [sortDir, setSortDir] = useState<"desc" | "asc">("desc");

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const params = period === "month" ? "?period=month" : "";
            const [lbRes, meRes] = await Promise.all([
                fetch(`/api/sales/leaderboard${params}`, { credentials: "include" }),
                fetch("/api/sales/me", { credentials: "include" }),
            ]);
            if (lbRes.status === 401 || meRes.status === 401) { window.location.href = "/sales"; return; }
            setData(await lbRes.json());
            setUser(await meRes.json());
        } finally { setLoading(false); }
    }, [router, period]);

    useEffect(() => { fetchData(); }, [fetchData]);

    // Re-sort locally
    const sorted = [...data].sort((a, b) => {
        const av = a[sortKey], bv = b[sortKey];
        return sortDir === "desc" ? (bv as number) - (av as number) : (av as number) - (bv as number);
    }).map((entry, idx) => ({ ...entry, rank: idx + 1 }));

    const top3 = sorted.slice(0, 3);

    function toggleSort(key: SortKey) {
        if (sortKey === key) {
            setSortDir(d => d === "desc" ? "asc" : "desc");
        } else {
            setSortKey(key);
            setSortDir("desc");
        }
    }

    // Stat highlights
    const biggestDealEntry = data.reduce((best, e) => e.biggest_deal > (best?.biggest_deal || 0) ? e : best, data[0]);
    const leadMachine = data.reduce((best, e) => e.leads_generated > (best?.leads_generated || 0) ? e : best, data[0]);
    const mostActive = data.reduce((best, e) => e.active_leads > (best?.active_leads || 0) ? e : best, data[0]);
    const highestWinRate = data.filter(e => e.leads_generated >= 1).reduce((best, e) => e.win_rate > (best?.win_rate || 0) ? e : best, data[0]);

    const SortIcon = ({ col }: { col: SortKey }) => {
        if (sortKey !== col) return <ArrowUpDown className="w-3 h-3 text-gray-600" />;
        return sortDir === "desc"
            ? <ChevronDown className="w-3 h-3 text-emerald-400" />
            : <ChevronUp className="w-3 h-3 text-emerald-400" />;
    };

    if (loading) {
        return (
            <SalesLayout>
                <div className="flex items-center justify-center min-h-[80vh]">
                    <div className="text-gray-500 text-sm animate-pulse flex items-center gap-2">
                        <Trophy className="w-5 h-5" /> Loading leaderboard…
                    </div>
                </div>
            </SalesLayout>
        );
    }

    return (
        <SalesLayout user={user}>
            {/* Inline keyframe animation */}
            <style>{`
                @keyframes podiumEntry {
                    from { opacity: 0; transform: translateY(20px) scale(0.95); }
                    to   { opacity: 1; transform: translateY(0) scale(1); }
                }
                @keyframes pulseGlow {
                    0%, 100% { box-shadow: 0 0 0 0 rgba(52,211,153,0), inset 0 0 0 0 rgba(52,211,153,0); }
                    50% { box-shadow: 0 0 0 2px rgba(52,211,153,0.2), inset 0 0 20px rgba(52,211,153,0.03); }
                }
                @keyframes shimmer {
                    0% { background-position: -200% 0; }
                    100% { background-position: 200% 0; }
                }
                .current-user-row {
                    animation: pulseGlow 2.5s ease-in-out infinite;
                    background: rgba(52,211,153,0.06) !important;
                    border-left: 2px solid rgba(52,211,153,0.4);
                }
                .confetti-shimmer::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    background: linear-gradient(90deg, transparent, rgba(255,215,0,0.05), transparent);
                    background-size: 200% 100%;
                    animation: shimmer 3s ease-in-out infinite;
                }
            `}</style>

            {/* Top bar */}
            <header className="hidden md:flex sticky top-0 z-10 items-center justify-between px-8 py-4" style={{
                background: "rgba(8,13,24,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{
                        background: "linear-gradient(135deg, #FFD700, #FFA500)",
                        boxShadow: "0 0 16px rgba(255,215,0,0.2)",
                    }}>
                        <Trophy className="w-4.5 h-4.5 text-white" />
                    </div>
                    <div>
                        <h1 className="text-xl font-bold text-white">Sales Leaderboard</h1>
                        <p className="text-gray-500 text-xs mt-0.5">Who&apos;s crushing it right now?</p>
                    </div>
                </div>
                {/* Period toggle */}
                <div className="flex items-center gap-1 p-1 rounded-lg" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    {(["all", "month"] as const).map(p => (
                        <button key={p} onClick={() => setPeriod(p)}
                            className="px-4 py-1.5 rounded-md text-xs font-semibold transition-all"
                            style={{
                                background: period === p ? "rgba(52,211,153,0.12)" : "transparent",
                                color: period === p ? "#34d399" : "#6b7280",
                                border: period === p ? "1px solid rgba(52,211,153,0.2)" : "1px solid transparent",
                            }}>
                            {p === "all" ? "All Time" : "This Month"}
                        </button>
                    ))}
                </div>
            </header>

            {/* Mobile page header */}
            <div className="md:hidden px-4 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-5 h-5 text-yellow-400" />
                    <h1 className="text-lg font-bold text-white">Leaderboard</h1>
                </div>
                <div className="flex gap-1 p-1 rounded-lg" style={{ background: "rgba(255,255,255,0.04)" }}>
                    {(["all", "month"] as const).map(p => (
                        <button key={p} onClick={() => setPeriod(p)}
                            className="flex-1 py-1.5 rounded-md text-xs font-semibold transition-all"
                            style={{
                                background: period === p ? "rgba(52,211,153,0.12)" : "transparent",
                                color: period === p ? "#34d399" : "#6b7280",
                            }}>
                            {p === "all" ? "All Time" : "This Month"}
                        </button>
                    ))}
                </div>
            </div>

            <div className="px-4 md:px-8 py-6 max-w-6xl mx-auto">

                {/* ── Stat Highlights Bar ── */}
                {data.length > 0 && (
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
                        {biggestDealEntry && biggestDealEntry.biggest_deal > 0 && (
                            <HighlightCard
                                icon={<DollarSign className="w-5 h-5" style={{ color: "#FFD700" }} />}
                                label="Biggest Deal"
                                value={fmtCurrency(biggestDealEntry.biggest_deal)}
                                name={biggestDealEntry.full_name}
                                color="#FFD700"
                            />
                        )}
                        {leadMachine && leadMachine.leads_generated > 0 && (
                            <HighlightCard
                                icon={<Zap className="w-5 h-5" style={{ color: "#38bdf8" }} />}
                                label="Lead Machine"
                                value={`${leadMachine.leads_generated} leads`}
                                name={leadMachine.full_name}
                                color="#38bdf8"
                            />
                        )}
                        {mostActive && mostActive.active_leads > 0 && (
                            <HighlightCard
                                icon={<Flame className="w-5 h-5" style={{ color: "#f97316" }} />}
                                label="Most Active"
                                value={`${mostActive.active_leads} in pipeline`}
                                name={mostActive.full_name}
                                color="#f97316"
                            />
                        )}
                        {highestWinRate && highestWinRate.win_rate > 0 && (
                            <HighlightCard
                                icon={<Star className="w-5 h-5" style={{ color: "#a78bfa" }} />}
                                label="Highest Win Rate"
                                value={`${highestWinRate.win_rate}%`}
                                name={highestWinRate.full_name}
                                color="#a78bfa"
                            />
                        )}
                    </div>
                )}

                {/* ── Podium (Top 3) ── */}
                {top3.length > 0 && (
                    <div className="mb-8">
                        <div className="flex items-center gap-2 mb-4">
                            <Crown className="w-4 h-4 text-yellow-400" />
                            <h2 className="text-sm font-semibold text-white">Top Performers</h2>
                        </div>
                        {/* Desktop: 2nd | 1st | 3rd layout */}
                        <div className={`hidden md:grid gap-4 ${top3.length >= 3 ? "grid-cols-3" : top3.length === 2 ? "grid-cols-2" : "grid-cols-1 max-w-sm"}`}>
                            {top3.length >= 3 ? (
                                <>
                                    <div className="mt-8">
                                        <PodiumCard entry={top3[1]} position={2} isCurrentUser={top3[1].id === user?.id} />
                                    </div>
                                    <div className="relative confetti-shimmer">
                                        <PodiumCard entry={top3[0]} position={1} isCurrentUser={top3[0].id === user?.id} />
                                    </div>
                                    <div className="mt-12">
                                        <PodiumCard entry={top3[2]} position={3} isCurrentUser={top3[2].id === user?.id} />
                                    </div>
                                </>
                            ) : (
                                top3.map((e, i) => (
                                    <PodiumCard key={e.id} entry={e} position={(i + 1) as 1 | 2 | 3} isCurrentUser={e.id === user?.id} />
                                ))
                            )}
                        </div>
                        {/* Mobile: #1 full, #2 + #3 side-by-side compact */}
                        {top3.length >= 3 && (
                            <div className="md:hidden space-y-3">
                                <div className="relative confetti-shimmer">
                                    <PodiumCard entry={top3[0]} position={1} isCurrentUser={top3[0].id === user?.id} />
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <PodiumCard entry={top3[1]} position={2} isCurrentUser={top3[1].id === user?.id} />
                                    <PodiumCard entry={top3[2]} position={3} isCurrentUser={top3[2].id === user?.id} />
                                </div>
                            </div>
                        )}
                        {top3.length < 3 && (
                            <div className="md:hidden space-y-3">
                                {top3.map((e, i) => (
                                    <PodiumCard key={e.id} entry={e} position={(i + 1) as 1 | 2 | 3} isCurrentUser={e.id === user?.id} />
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* ── Full Rankings Table ── */}
                <div className="rounded-2xl overflow-hidden" style={{
                    background: "linear-gradient(145deg, #0d1526, #0a1020)",
                    border: "1px solid rgba(255,255,255,0.05)",
                }}>
                    <div className="px-5 py-4 border-b flex items-center gap-2" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                        <h2 className="text-sm font-semibold text-white">Full Rankings</h2>
                        <span className="text-xs text-gray-600 ml-1">({sorted.length} team members)</span>
                    </div>

                    {/* Desktop table */}
                    <div className="hidden lg:block overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                                    <th className="px-5 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Rank</th>
                                    <th className="px-5 py-3 text-left text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Name</th>
                                    {([
                                        ["revenue_closed", "Revenue"],
                                        ["deals_won", "Deals Won"],
                                        ["leads_generated", "Leads"],
                                        ["win_rate", "Win Rate"],
                                        ["pipeline_value", "Pipeline"],
                                        ["active_leads", "Active"],
                                        ["clients_managed", "Clients"],
                                    ] as [SortKey, string][]).map(([key, label]) => (
                                        <th key={key} className="px-4 py-3 text-right">
                                            <button onClick={() => toggleSort(key)}
                                                className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wider transition-colors hover:text-emerald-400"
                                                style={{ color: sortKey === key ? "#34d399" : "#6b7280" }}>
                                                {label} <SortIcon col={key} />
                                            </button>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {sorted.map((entry) => {
                                    const isMe = entry.id === user?.id;
                                    return (
                                        <tr key={entry.id}
                                            className={isMe ? "current-user-row" : ""}
                                            style={{
                                                borderBottom: "1px solid rgba(255,255,255,0.03)",
                                                background: isMe ? "rgba(52,211,153,0.04)" : "transparent",
                                            }}>
                                            <td className="px-5 py-3">
                                                <span className="text-sm">
                                                    {entry.rank === 1 ? "🥇" : entry.rank === 2 ? "🥈" : entry.rank === 3 ? "🥉" : (
                                                        <span className="text-gray-500 font-mono text-xs">#{entry.rank}</span>
                                                    )}
                                                </span>
                                            </td>
                                            <td className="px-5 py-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0" style={{
                                                        background: isMe ? "rgba(52,211,153,0.12)" : "rgba(167,139,250,0.1)",
                                                        color: isMe ? "#34d399" : "#a78bfa",
                                                        border: isMe ? "1px solid rgba(52,211,153,0.25)" : "1px solid rgba(167,139,250,0.2)",
                                                    }}>
                                                        {(entry.full_name || entry.username)[0].toUpperCase()}
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p className="text-sm font-medium text-white truncate">
                                                            {entry.full_name || entry.username}
                                                            {isMe && <span className="text-emerald-400 text-[10px] ml-1.5 font-semibold">(You)</span>}
                                                        </p>
                                                        <p className="text-xs text-gray-600">@{entry.username}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-4 py-3 text-right text-sm font-bold text-emerald-400">{fmtCurrency(entry.revenue_closed)}</td>
                                            <td className="px-4 py-3 text-right text-sm font-semibold text-white">{entry.deals_won}</td>
                                            <td className="px-4 py-3 text-right text-sm font-semibold text-sky-400">{entry.leads_generated}</td>
                                            <td className="px-4 py-3 text-right text-sm font-semibold" style={{
                                                color: entry.win_rate >= 50 ? "#34d399" : entry.win_rate >= 25 ? "#fbbf24" : "#f87171",
                                            }}>{entry.win_rate}%</td>
                                            <td className="px-4 py-3 text-right text-sm text-gray-400">{fmtCurrency(entry.pipeline_value)}</td>
                                            <td className="px-4 py-3 text-right text-sm text-gray-400">{entry.active_leads}</td>
                                            <td className="px-4 py-3 text-right text-sm text-gray-400">{entry.clients_managed}</td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile cards */}
                    <div className="lg:hidden divide-y" style={{ borderColor: "rgba(255,255,255,0.04)" }}>
                        {sorted.map((entry) => {
                            const isMe = entry.id === user?.id;
                            return (
                                <div key={entry.id}
                                    className={`px-4 py-4 ${isMe ? "current-user-row" : ""}`}
                                    style={{ background: isMe ? "rgba(52,211,153,0.04)" : "transparent" }}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-sm w-6">
                                            {entry.rank === 1 ? "🥇" : entry.rank === 2 ? "🥈" : entry.rank === 3 ? "🥉" : (
                                                <span className="text-gray-500 font-mono text-xs">#{entry.rank}</span>
                                            )}
                                        </span>
                                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold" style={{
                                            background: isMe ? "rgba(52,211,153,0.12)" : "rgba(167,139,250,0.1)",
                                            color: isMe ? "#34d399" : "#a78bfa",
                                            border: isMe ? "1px solid rgba(52,211,153,0.25)" : "1px solid rgba(167,139,250,0.2)",
                                        }}>
                                            {(entry.full_name || entry.username)[0].toUpperCase()}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-sm font-medium text-white truncate">
                                                {entry.full_name || entry.username}
                                                {isMe && <span className="text-emerald-400 text-[10px] ml-1">(You)</span>}
                                            </p>
                                        </div>
                                        <p className="text-sm font-bold text-emerald-400">{fmtCurrency(entry.revenue_closed)}</p>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 ml-[3.25rem]">
                                        <div>
                                            <p className="text-[9px] text-gray-600 uppercase">Won</p>
                                            <p className="text-xs font-semibold text-white">{entry.deals_won}</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] text-gray-600 uppercase">Leads</p>
                                            <p className="text-xs font-semibold text-sky-400">{entry.leads_generated}</p>
                                        </div>
                                        <div>
                                            <p className="text-[9px] text-gray-600 uppercase">Win Rate</p>
                                            <p className="text-xs font-semibold" style={{
                                                color: entry.win_rate >= 50 ? "#34d399" : entry.win_rate >= 25 ? "#fbbf24" : "#f87171",
                                            }}>{entry.win_rate}%</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Empty state */}
                    {sorted.length === 0 && (
                        <div className="py-16 text-center">
                            <Trophy className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                            <p className="text-gray-500 text-sm">No data yet — start closing deals!</p>
                        </div>
                    )}
                </div>

                {/* Motivational banner when everyone is at $0 */}
                {data.length > 0 && data.every(e => e.revenue_closed === 0 && e.deals_won === 0) && (
                    <div className="mt-6 rounded-xl p-5 text-center" style={{
                        background: "linear-gradient(135deg, rgba(255,215,0,0.06), rgba(52,211,153,0.06))",
                        border: "1px solid rgba(255,215,0,0.15)",
                    }}>
                        <p className="text-lg mb-1">🔥</p>
                        <p className="text-sm font-bold text-white">The race is on!</p>
                        <p className="text-xs text-gray-400 mt-1">Start closing deals and generating leads to climb the ranks. <br />First person to hit the board takes the crown 👑</p>
                    </div>
                )}
            </div>
        </SalesLayout>
    );
}
