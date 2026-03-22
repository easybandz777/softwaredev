"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { SalesLayout } from "@/components/SalesLayout";
import { Clock, Loader2 } from "lucide-react";

interface UserInfo { id: number; username: string; full_name: string; role: string; }
interface Lead {
    id: number; name: string; company: string | null; email: string;
    status: string; service: string; created_at: string;
}

const PIPELINE_STAGES = ["new", "contacted", "qualified", "proposal", "won", "lost"];
const STAGE_COLORS: Record<string, string> = {
    new: "#38bdf8", contacted: "#a78bfa", qualified: "#fbbf24",
    proposal: "#f97316", won: "#34d399", lost: "#6b7280",
};

export default function PipelinePage() {
    const router = useRouter();
    const [leads, setLeads] = useState<Lead[]>([]);
    const [user, setUser] = useState<UserInfo | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const [leadsRes, meRes] = await Promise.all([
                fetch("/api/sales/leads", { credentials: "include" }),
                fetch("/api/sales/me", { credentials: "include" }),
            ]);
            if (leadsRes.status === 401 || meRes.status === 401) { window.location.href = "/sales"; return; }
            setLeads(await leadsRes.json());
            if (meRes.ok) setUser(await meRes.json());
        } finally { setLoading(false); }
    }, []);

    useEffect(() => { fetchData(); }, [fetchData]);

    async function updateStage(leadId: number, newStage: string) {
        setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status: newStage } : l));
        await fetch("/api/sales/leads", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ id: leadId, status: newStage }),
        });
    }

    function handleDragStart(e: React.DragEvent, leadId: number) {
        e.dataTransfer.setData("leadId", String(leadId));
    }
    function handleDragOver(e: React.DragEvent) { e.preventDefault(); }
    function handleDrop(e: React.DragEvent, stage: string) {
        e.preventDefault();
        const leadId = parseInt(e.dataTransfer.getData("leadId"));
        if (leadId) updateStage(leadId, stage);
    }

    if (loading) {
        return (
            <SalesLayout>
                <div className="flex items-center justify-center min-h-[80vh]">
                    <Loader2 className="w-6 h-6 text-emerald-400 animate-spin" />
                </div>
            </SalesLayout>
        );
    }

    const grouped = PIPELINE_STAGES.reduce((acc, stage) => {
        acc[stage] = leads.filter(l => l.status === stage);
        return acc;
    }, {} as Record<string, Lead[]>);

    return (
        <SalesLayout user={user}>
            <header className="hidden md:flex sticky top-0 z-10 items-center justify-between px-8 py-4" style={{
                background: "rgba(8,13,24,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>
                <div>
                    <h1 className="text-xl font-bold text-white">Sales Pipeline</h1>
                    <p className="text-gray-500 text-xs mt-0.5">Drag and drop leads to progress them through the sales cycle.</p>
                </div>
            </header>

            <div className="px-4 md:px-6 py-4" style={{ overflowX: "auto" }}>
                <div className="flex gap-4" style={{ minWidth: PIPELINE_STAGES.length * 270 }}>
                    {PIPELINE_STAGES.map(stage => (
                        <div key={stage} className="rounded-xl flex flex-col" style={{
                            width: 260, minWidth: 260,
                            background: "linear-gradient(145deg, #0d1526, #0a1020)",
                            border: "1px solid rgba(255,255,255,0.05)",
                        }}
                            onDragOver={handleDragOver}
                            onDrop={e => handleDrop(e, stage)}
                        >
                            <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full" style={{ background: STAGE_COLORS[stage] || "#6b7280" }} />
                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{stage}</span>
                                </div>
                                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full" style={{
                                    background: "rgba(255,255,255,0.05)", color: "#9ca3af",
                                }}>{grouped[stage]?.length || 0}</span>
                            </div>
                            <div className="flex-1 p-3 space-y-2 overflow-y-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
                                {(grouped[stage] || []).map(lead => {
                                    const daysAgo = Math.ceil((Date.now() - new Date(lead.created_at).getTime()) / 86400000);
                                    return (
                                        <div key={lead.id} draggable onDragStart={e => handleDragStart(e, lead.id)}
                                            onClick={() => router.push(`/sales/leads/${lead.id}`)}
                                            className="rounded-lg p-3 cursor-pointer transition-all hover:scale-[1.02]" style={{
                                                background: "#1a1f2e",
                                                border: "1px solid rgba(255,255,255,0.06)",
                                            }}>
                                            <p className="text-sm font-medium text-white truncate">{lead.name}</p>
                                            {lead.company && <p className="text-xs text-gray-500 truncate">{lead.company}</p>}
                                            <div className="flex items-center justify-between mt-2">
                                                <span className="text-[10px] text-gray-600 uppercase tracking-wider">{lead.service}</span>
                                                <span className="flex items-center gap-1 text-[10px] text-gray-600">
                                                    <Clock className="w-2.5 h-2.5" />{daysAgo}d
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                                {(grouped[stage] || []).length === 0 && (
                                    <div className="py-8 text-center">
                                        <p className="text-gray-700 text-xs">No leads</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SalesLayout>
    );
}
