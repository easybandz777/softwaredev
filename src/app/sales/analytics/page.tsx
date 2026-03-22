"use client";

import React, { useState, useEffect, useCallback } from "react";
import { SalesLayout } from "@/components/SalesLayout";
import { Users, Mail, Target, Clock, Loader2 } from "lucide-react";

interface UserInfo { id: number; username: string; full_name: string; role: string; }

interface AnalyticsData {
    kpis: { totalLeads: number; outreachSent: number; qualified: number; recentLeads: number };
    byStage: Record<string, number>;
    bySource: Record<string, number>;
    byOpportunity: Record<string, number>;
}

const STATUS_COLORS: Record<string, string> = {
    new: "#38bdf8", contacted: "#a78bfa", qualified: "#fbbf24", proposal: "#f97316",
    won: "#34d399", lost: "#6b7280", reviewed: "#a78bfa", closed: "#6b7280",
};

export default function AnalyticsPage() {
    const [data, setData] = useState<AnalyticsData | null>(null);
    const [user, setUser] = useState<UserInfo | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const [aRes, meRes] = await Promise.all([
                fetch("/api/sales/analytics", { credentials: "include" }),
                fetch("/api/sales/me", { credentials: "include" }),
            ]);
            if (aRes.status === 401 || meRes.status === 401) { window.location.href = "/sales"; return; }
            setData(await aRes.json());
            setUser(await meRes.json());
        } finally { setLoading(false); }
    }, []);

    useEffect(() => { fetchData(); }, [fetchData]);

    if (loading || !data) {
        return (
            <SalesLayout>
                <div className="flex items-center justify-center min-h-[80vh]">
                    <Loader2 className="w-6 h-6 text-emerald-400 animate-spin" />
                </div>
            </SalesLayout>
        );
    }

    const kpis = [
        { label: "Total Leads", value: data.kpis.totalLeads, icon: <Users className="w-4 h-4" />, color: "#f1f5f9" },
        { label: "Outreach Sent", value: data.kpis.outreachSent, icon: <Mail className="w-4 h-4" />, color: "#a78bfa" },
        { label: "Qualified", value: data.kpis.qualified, icon: <Target className="w-4 h-4" />, color: "#fbbf24" },
        { label: "Added This Week", value: data.kpis.recentLeads, icon: <Clock className="w-4 h-4" />, color: "#38bdf8" },
    ];

    return (
        <SalesLayout user={user}>
            <header className="hidden md:flex sticky top-0 z-10 items-center justify-between px-8 py-4" style={{
                background: "rgba(8,13,24,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>
                <div>
                    <h1 className="text-xl font-bold text-white">Analytics & Performance</h1>
                    <p className="text-gray-500 text-xs mt-0.5">Track pipeline health and lead flow.</p>
                </div>
            </header>

            <div className="px-4 md:px-8 py-6 max-w-6xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                    {kpis.map((kpi, i) => (
                        <div key={i} className="rounded-xl p-4" style={{
                            background: "linear-gradient(145deg, #0d1526, #0a1020)",
                            border: "1px solid rgba(255,255,255,0.05)",
                        }}>
                            <div className="flex items-center gap-2 mb-2">
                                <span style={{ color: kpi.color }} className="opacity-70">{kpi.icon}</span>
                                <p className="text-[10px] font-medium text-gray-500 uppercase tracking-wider">{kpi.label}</p>
                            </div>
                            <p className="text-2xl font-bold" style={{ color: kpi.color }}>{kpi.value}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-6">
                    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                        <div className="px-5 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                            <h2 className="text-sm font-semibold text-white">By Pipeline Stage</h2>
                        </div>
                        <div className="p-5 space-y-3">
                            {Object.entries(data.byStage).map(([stage, count]) => (
                                <div key={stage} className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 rounded-full" style={{ background: STATUS_COLORS[stage] || "#6b7280" }} />
                                        <span className="text-sm text-gray-300 capitalize">{stage}</span>
                                    </div>
                                    <span className="text-sm font-bold text-white">{count}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                        <div className="px-5 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                            <h2 className="text-sm font-semibold text-white">By Lead Source</h2>
                        </div>
                        <div className="p-5 space-y-3">
                            {Object.entries(data.bySource).map(([source, count]) => (
                                <div key={source} className="flex items-center justify-between">
                                    <span className="text-sm text-gray-300">{source}</span>
                                    <span className="text-sm font-bold text-white">{count}</span>
                                </div>
                            ))}
                            {Object.keys(data.bySource).length === 0 && <p className="text-gray-600 text-sm">No source data yet.</p>}
                        </div>
                    </div>
                </div>
            </div>
        </SalesLayout>
    );
}
