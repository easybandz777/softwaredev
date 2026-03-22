"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { SalesLayout } from "@/components/SalesLayout";
import {
    Search, Sparkles, Loader2, Save, ExternalLink, MapPin, Mail, Phone,
    Globe, CheckCircle, ChevronDown, ChevronUp, Settings2, Star, ArrowRight,
    RefreshCw, Send, Shield
} from "lucide-react";

interface UserInfo { id: number; username: string; full_name: string; role: string; }

interface Prospect {
    companyName: string;
    contactName: string;
    email: string | null;
    phone: string | null;
    website: string | null;
    location: string;
    niche: string;
    summary: string;
    why: string;
    rating: number | null;
    reviewCount: number;
    qualityScore: number;
    emailMissing: boolean;
}

function QualityBar({ score }: { score: number }) {
    const color = score >= 70 ? "#10b981" : score >= 40 ? "#f59e0b" : "#ef4444";
    const label = score >= 70 ? "Strong" : score >= 40 ? "Fair" : "Weak";
    return (
        <div className="flex items-center gap-2" style={{ fontSize: "0.6875rem" }}>
            <div className="w-12 h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <div className="h-full rounded-full transition-all" style={{ width: `${score}%`, background: color }} />
            </div>
            <span style={{ color, fontWeight: 600 }}>{label}</span>
        </div>
    );
}

export default function ProspectingPage() {
    const router = useRouter();
    const [user, setUser] = useState<UserInfo | null>(null);
    const [query, setQuery] = useState("");
    const [leads, setLeads] = useState<Prospect[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [savedIds, setSavedIds] = useState<Set<number>>(new Set());
    const [savingId, setSavingId] = useState<number | null>(null);
    const [phase, setPhase] = useState("");
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [maxResults, setMaxResults] = useState(5);
    const [meta, setMeta] = useState<Record<string, unknown> | null>(null);

    useEffect(() => {
        fetch("/api/sales/me", { credentials: "include" })
            .then(async r => {
                if (r.status === 401) {
                    window.location.href = "/sales";
                    return null;
                }
                if (!r.ok) return null;
                return r.json();
            })
            .then(u => u && setUser(u));
    }, []);

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;
        setLoading(true); setError(""); setLeads([]); setSavedIds(new Set()); setPhase("searching");
        const t1 = setTimeout(() => setPhase("enriching"), 3000);
        const t2 = setTimeout(() => setPhase("analyzing"), 8000);
        try {
            const res = await fetch("/api/sales/prospect", {
                method: "POST", headers: { "Content-Type": "application/json" }, credentials: "include",
                body: JSON.stringify({ query: query.trim(), maxResults }),
            });
            clearTimeout(t1); clearTimeout(t2);
            if (!res.ok) { const d = await res.json(); throw new Error(d.error || "Failed"); }
            const data = await res.json();
            setLeads(data.leads || []); setMeta(data.meta || null); setPhase("done");
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Search failed"); setPhase("");
        } finally { setLoading(false); }
    };

    const handleSave = async (lead: Prospect, index: number) => {
        setSavingId(index);
        try {
            const res = await fetch("/api/sales/leads", {
                method: "POST", headers: { "Content-Type": "application/json" }, credentials: "include",
                body: JSON.stringify({
                    name: lead.contactName || "Owner",
                    email: lead.email || "",
                    phone: lead.phone || "",
                    company: lead.companyName || "",
                    service: lead.niche || "Prospecting Lead",
                    message: [lead.why ? `OPPORTUNITY: ${lead.why}` : "", lead.summary ? `SUMMARY: ${lead.summary}` : ""].filter(Boolean).join("\n\n"),
                    website: lead.website || null,
                    location: lead.location || null,
                    lead_source: "AI Prospecting",
                    opportunity_level: lead.qualityScore >= 70 ? "critical" : lead.qualityScore >= 40 ? "high" : "medium",
                }),
            });
            if (res.ok) setSavedIds(prev => new Set([...prev, index]));
        } catch (err) { console.error("Failed to save lead:", err); }
        finally { setSavingId(null); }
    };

    const handleSaveAll = async () => {
        for (let i = 0; i < leads.length; i++) { if (!savedIds.has(i)) await handleSave(leads[i], i); }
    };

    const phaseMessages: Record<string, string> = {
        searching: "Finding businesses matching your criteria...",
        enriching: "Scraping websites for contact info...",
        analyzing: "AI is qualifying each prospect...",
    };

    const suggestions = ["Plumbers in Chicago", "HVAC contractors in Austin TX", "Custom apparel companies in LA", "Landscaping businesses in Atlanta"];

    return (
        <SalesLayout user={user}>
            <header className="hidden md:flex sticky top-0 z-10 items-center justify-between px-8 py-4" style={{
                background: "rgba(8,13,24,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>
                <div>
                    <h1 className="text-xl font-bold text-white">AI Prospecting</h1>
                    <p className="text-gray-500 text-xs mt-0.5">Search for businesses, review prospects, then save the best ones to your pipeline.</p>
                </div>
            </header>

            <div className="px-4 md:px-8 py-6 max-w-5xl mx-auto">
                <form onSubmit={handleSearch} className="rounded-2xl p-5 mb-6" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="flex gap-3 items-center">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                            <input type="text" value={query} onChange={e => setQuery(e.target.value)}
                                placeholder='Try "Roofers in Dallas" or "Manufacturing companies in Ohio"'
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/40" />
                        </div>
                        <button type="submit" disabled={loading || !query.trim()}
                            className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white disabled:opacity-50"
                            style={{ background: "linear-gradient(135deg, #8b5cf6, #3b82f6)" }}>
                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                            {loading ? "Searching..." : "Find Prospects"}
                        </button>
                    </div>
                    <div className="flex gap-2 mt-3 flex-wrap">
                        {suggestions.map(s => (
                            <button key={s} type="button" onClick={() => setQuery(s)}
                                className="px-3 py-1 rounded-full text-xs text-gray-500 border border-white/10 hover:border-white/20 hover:text-gray-300 transition-all">{s}</button>
                        ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-white/5">
                        <button type="button" onClick={() => setShowAdvanced(!showAdvanced)}
                            className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300">
                            <Settings2 className="w-3.5 h-3.5" /> Advanced
                            {showAdvanced ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>
                        {showAdvanced && (
                            <div className="flex items-center gap-4 mt-3">
                                <label className="text-xs text-gray-500">Max Results: <strong className="text-white">{maxResults}</strong></label>
                                <input type="range" min={1} max={10} value={maxResults} onChange={e => setMaxResults(Number(e.target.value))} className="flex-1 max-w-[200px]" />
                            </div>
                        )}
                    </div>
                </form>

                {loading && (
                    <div className="rounded-2xl p-8 text-center" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                        <Loader2 className="w-8 h-8 text-blue-400 animate-spin mx-auto mb-4" />
                        <p className="text-white font-semibold mb-1">{phaseMessages[phase] || "Working..."}</p>
                        <p className="text-gray-600 text-xs">This typically takes 10–20 seconds</p>
                    </div>
                )}

                {error && (
                    <div className="rounded-xl p-4 mb-6" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(239,68,68,0.3)" }}>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-rose-400 font-semibold text-sm">Search Failed</p>
                                <p className="text-gray-500 text-xs mt-0.5">{error}</p>
                            </div>
                            <button onClick={() => handleSearch({ preventDefault: () => {} } as React.FormEvent)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-white/5 text-gray-300 border border-white/10">
                                <RefreshCw className="w-3 h-3" /> Retry
                            </button>
                        </div>
                    </div>
                )}

                {leads.length > 0 && (
                    <>
                        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                            <div>
                                <p className="text-white font-semibold">{leads.length} prospects found</p>
                                {meta && (
                                    <div className="flex gap-4 text-xs text-gray-500 mt-1">
                                        <span className="flex items-center gap-1"><Search className="w-3 h-3" /> {String(meta.discovered)} discovered</span>
                                        <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {String(meta.enriched)} with email</span>
                                        <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> {leads.filter(l => l.qualityScore >= 70).length} strong</span>
                                    </div>
                                )}
                            </div>
                            <div className="flex gap-2">
                                {leads.length - savedIds.size > 0 && (
                                    <button onClick={handleSaveAll} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-white/5 text-gray-300 border border-white/10">
                                        <Save className="w-3 h-3" /> Save All ({leads.length - savedIds.size})
                                    </button>
                                )}
                                {savedIds.size > 0 && (
                                    <button onClick={() => router.push("/sales/outreach")} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
                                        style={{ background: "linear-gradient(135deg, #059669, #34d399)", color: "white" }}>
                                        <Send className="w-3 h-3" /> Write Outreach <ArrowRight className="w-3 h-3" />
                                    </button>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {leads.map((lead, i) => {
                                const isSaved = savedIds.has(i);
                                const isSaving = savingId === i;
                                return (
                                    <div key={i} className="rounded-xl p-5 transition-all" style={{
                                        background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                        border: isSaved ? "1px solid rgba(52,211,153,0.3)" : "1px solid rgba(255,255,255,0.05)",
                                    }}>
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-base font-bold text-white truncate">{lead.companyName}</h3>
                                                <div className="flex items-center gap-3 mt-1">
                                                    {lead.contactName && <span className="text-xs text-gray-500">{lead.contactName}</span>}
                                                    {lead.rating && (
                                                        <span className="flex items-center gap-1 text-xs" style={{ color: "#f59e0b" }}>
                                                            <Star className="w-3 h-3" style={{ fill: "#f59e0b" }} /> {lead.rating}
                                                            <span className="text-gray-600">({lead.reviewCount})</span>
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-3">
                                                {lead.niche && (
                                                    <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider"
                                                        style={{ background: "rgba(99,102,241,0.15)", color: "#818cf8" }}>{lead.niche}</span>
                                                )}
                                                {lead.qualityScore != null && <QualityBar score={lead.qualityScore} />}
                                            </div>
                                        </div>
                                        <div className="space-y-1.5 mb-3 text-xs">
                                            {lead.location && <div className="flex items-center gap-2 text-gray-400"><MapPin className="w-3 h-3 text-gray-600 flex-shrink-0" /> {lead.location}</div>}
                                            {lead.email ? <div className="flex items-center gap-2 text-gray-400"><Mail className="w-3 h-3 text-emerald-500 flex-shrink-0" /> {lead.email}</div>
                                                : <div className="flex items-center gap-2 text-gray-600 opacity-60"><Mail className="w-3 h-3 flex-shrink-0" /> Email not found</div>}
                                            {lead.phone ? <div className="flex items-center gap-2 text-gray-400"><Phone className="w-3 h-3 text-gray-600 flex-shrink-0" /> {lead.phone}</div>
                                                : <div className="flex items-center gap-2 text-gray-600 opacity-60"><Phone className="w-3 h-3 flex-shrink-0" /> Phone not found</div>}
                                            {lead.website && (
                                                <div className="flex items-center gap-2">
                                                    <Globe className="w-3 h-3 text-gray-600 flex-shrink-0" />
                                                    <a href={lead.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 truncate hover:underline">
                                                        {lead.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                        {lead.summary && <p className="text-xs text-gray-400 mb-3 leading-relaxed">{lead.summary}</p>}
                                        {lead.why && (
                                            <div className="rounded-lg p-3 mb-3" style={{ background: "rgba(16,185,129,0.08)" }}>
                                                <p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 mb-0.5">Opportunity</p>
                                                <p className="text-xs text-gray-300">{lead.why}</p>
                                            </div>
                                        )}
                                        <div className="flex gap-2">
                                            {isSaved ? (
                                                <button onClick={() => router.push("/sales/outreach")}
                                                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium text-emerald-400 bg-emerald-400/5 border border-emerald-400/20">
                                                    <CheckCircle className="w-3.5 h-3.5" /> Saved — Write Outreach <ArrowRight className="w-3 h-3" />
                                                </button>
                                            ) : (
                                                <button onClick={() => handleSave(lead, i)} disabled={isSaving}
                                                    className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-white disabled:opacity-50"
                                                    style={{ background: "linear-gradient(135deg, #3b82f6, #2563eb)" }}>
                                                    {isSaving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                                                    {isSaving ? "Saving..." : "Save to Pipeline"}
                                                </button>
                                            )}
                                            {lead.website && (
                                                <a href={lead.website} target="_blank" rel="noopener noreferrer"
                                                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors">
                                                    <ExternalLink className="w-3.5 h-3.5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}

                {!loading && !error && leads.length === 0 && (
                    <div className="text-center py-16">
                        <Sparkles className="w-12 h-12 text-violet-500 mx-auto mb-4 opacity-50" />
                        <h3 className="text-white font-semibold mb-2">Describe your ideal customer</h3>
                        <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
                            Enter a trade and location above. The AI will find real businesses, scrape their contact info, and tell you why each one is worth reaching out to.
                        </p>
                    </div>
                )}
            </div>
        </SalesLayout>
    );
}
