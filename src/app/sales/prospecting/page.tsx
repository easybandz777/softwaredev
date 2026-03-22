"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { SalesLayout } from "@/components/SalesLayout";
import {
    Search, Sparkles, Loader2, Save, ExternalLink, MapPin, Mail, Phone,
    Globe, CheckCircle, ChevronDown, ChevronUp, Star, ArrowRight,
    RefreshCw, Send, Shield, X, Bookmark, Check, Filter,
    Building2, User, Briefcase
} from "lucide-react";

type SearchMode = "organization" | "person";

interface UserInfo { id: number; username: string; full_name: string; role: string; }

interface Prospect {
    mode: SearchMode;
    companyName: string; contactName: string; email: string | null; phone: string | null;
    website: string | null; location: string; niche: string; summary: string; why: string;
    rating: number | null; reviewCount: number; qualityScore: number; emailMissing: boolean;
    completenessScore?: number;
    jobTitle?: string | null; employer?: string | null;
    socialProfiles?: { platform: string; url: string }[];
}

interface Criteria {
    requireWebsite: boolean; requireEmail: boolean; requirePhone: boolean;
    includeNoWebsite: boolean; minRating: number; minReviews: number;
    minQualityScore: number; nicheKeywords: string[]; locationKeywords: string[];
    titleKeywords: string[]; employerKeywords: string[];
}

interface Preset { id: number; name: string; criteria: Criteria; is_default: boolean; mode?: SearchMode; }

const DEFAULT_CRITERIA: Criteria = {
    requireWebsite: false, requireEmail: false, requirePhone: false,
    includeNoWebsite: true, minRating: 0, minReviews: 0,
    minQualityScore: 0, nicheKeywords: [], locationKeywords: [],
    titleKeywords: [], employerKeywords: [],
};

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

function hasActiveFilters(c: Criteria, mode: SearchMode) {
    const shared = c.requireEmail || c.requirePhone || c.minQualityScore > 0 || c.locationKeywords.length > 0;
    if (mode === "organization") {
        return shared || c.requireWebsite || !c.includeNoWebsite || c.minRating > 0 || c.minReviews > 0 || c.nicheKeywords.length > 0;
    }
    return shared || c.titleKeywords.length > 0 || c.employerKeywords.length > 0;
}

const inp = "w-full text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-emerald-400/40";
const chipBtn = "flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-semibold border transition-all";

const MODE_CONFIG = {
    organization: {
        title: "Organization Search",
        subtitle: "Search for businesses. Filter by criteria. Save the best ones to your pipeline.",
        placeholder: 'Try "Roofers in Dallas" or "Manufacturing companies in Ohio"',
        suggestions: ["Plumbers in Chicago", "HVAC contractors in Austin TX", "Custom apparel companies in LA", "Landscaping businesses in Atlanta"],
        phaseMessages: {
            searching: "Finding businesses matching your criteria...",
            enriching: "Scraping websites for contact info...",
            analyzing: "AI is qualifying each prospect...",
        },
        emptyTitle: "Describe your ideal customer",
        emptyDescription: "Enter a trade and location above. The AI will find real businesses, scrape their contact info, and tell you why each one is worth reaching out to.",
        buttonLabel: "Find Organizations",
    },
    person: {
        title: "Contact Search",
        subtitle: "Find contacts by name, role, or employer. Surface emails and phones instantly.",
        placeholder: 'Try "Life insurance agents in Houston" or "John Smith at Allstate"',
        suggestions: ["Insurance agents in Dallas TX", "Real estate agents in Miami", "Financial advisors in New York", "Dentists in Los Angeles"],
        phaseMessages: {
            searching: "Searching for contacts matching your query...",
            enriching: "Looking up contact information...",
            analyzing: "AI is qualifying each contact...",
        },
        emptyTitle: "Find the right contacts",
        emptyDescription: "Describe who you're looking for by name, role, employer, or location. The AI will find matching contacts and surface their information.",
        buttonLabel: "Find People",
    },
};

export default function ProspectingPage() {
    const router = useRouter();
    const [user, setUser] = useState<UserInfo | null>(null);
    const [mode, setMode] = useState<SearchMode>("organization");
    const [query, setQuery] = useState("");
    const [leads, setLeads] = useState<Prospect[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [savedIds, setSavedIds] = useState<Set<number>>(new Set());
    const [savingId, setSavingId] = useState<number | null>(null);
    const [phase, setPhase] = useState("");
    const [showFilters, setShowFilters] = useState(false);
    const [maxResults, setMaxResults] = useState(5);
    const [meta, setMeta] = useState<Record<string, unknown> | null>(null);
    const [criteria, setCriteria] = useState<Criteria>({ ...DEFAULT_CRITERIA });
    const [presets, setPresets] = useState<Preset[]>([]);
    const [presetName, setPresetName] = useState("");
    const [showSavePreset, setShowSavePreset] = useState(false);
    const [nicheInput, setNicheInput] = useState("");
    const [locationInput, setLocationInput] = useState("");
    const [titleInput, setTitleInput] = useState("");
    const [employerInput, setEmployerInput] = useState("");

    const cfg = MODE_CONFIG[mode];

    useEffect(() => {
        fetch("/api/sales/me", { credentials: "include" })
            .then(async r => { if (r.status === 401) { window.location.href = "/sales"; return null; } if (!r.ok) return null; return r.json(); })
            .then(u => u && setUser(u));
        fetch("/api/sales/prospect-presets", { credentials: "include" })
            .then(r => r.ok ? r.json() : [])
            .then((data: Preset[]) => {
                setPresets(data);
                const def = data.find(p => p.is_default);
                if (def) setCriteria({ ...DEFAULT_CRITERIA, ...def.criteria });
            });
    }, []);

    const loadPresets = useCallback(async () => {
        const r = await fetch("/api/sales/prospect-presets", { credentials: "include" });
        if (r.ok) setPresets(await r.json());
    }, []);

    const handleModeSwitch = (newMode: SearchMode) => {
        setMode(newMode);
        setLeads([]);
        setMeta(null);
        setError("");
        setQuery("");
        setCriteria({ ...DEFAULT_CRITERIA });
    };

    const handleSearch = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!query.trim()) return;
        setLoading(true); setError(""); setLeads([]); setSavedIds(new Set()); setPhase("searching");
        const t1 = setTimeout(() => setPhase("enriching"), 3000);
        const t2 = setTimeout(() => setPhase("analyzing"), 8000);
        try {
            const res = await fetch("/api/sales/prospect", {
                method: "POST", headers: { "Content-Type": "application/json" }, credentials: "include",
                body: JSON.stringify({ mode, query: query.trim(), maxResults, criteria }),
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
                    name: lead.mode === "person" ? (lead.contactName || lead.companyName || "Unknown") : (lead.contactName || "Owner"),
                    email: lead.email || "",
                    phone: lead.phone || "",
                    company: lead.mode === "person" ? (lead.employer || lead.companyName || "") : (lead.companyName || ""),
                    service: lead.niche || (lead.mode === "person" ? "Contact" : "Prospecting Lead"),
                    message: [lead.why ? `OPPORTUNITY: ${lead.why}` : "", lead.summary ? `SUMMARY: ${lead.summary}` : ""].filter(Boolean).join("\n\n"),
                    website: lead.website || null,
                    location: lead.location || null,
                    lead_source: lead.mode === "person" ? "Contact Search" : "AI Prospecting",
                    opportunity_level: lead.qualityScore >= 70 ? "critical" : lead.qualityScore >= 40 ? "high" : "medium",
                    entity_type: lead.mode,
                    job_title: lead.jobTitle || null,
                    analysis_data: {
                        rating: lead.rating, reviewCount: lead.reviewCount, niche: lead.niche,
                        qualityScore: lead.qualityScore, mode: lead.mode,
                    },
                }),
            });
            if (res.ok) setSavedIds(prev => new Set([...prev, index]));
        } catch (err) { console.error("Failed to save lead:", err); }
        finally { setSavingId(null); }
    };

    const handleSaveAll = async () => { for (let i = 0; i < leads.length; i++) { if (!savedIds.has(i)) await handleSave(leads[i], i); } };

    const savePreset = async () => {
        if (!presetName.trim()) return;
        await fetch("/api/sales/prospect-presets", {
            method: "POST", headers: { "Content-Type": "application/json" }, credentials: "include",
            body: JSON.stringify({ name: presetName.trim(), criteria, mode }),
        });
        setPresetName(""); setShowSavePreset(false); loadPresets();
    };

    const applyPreset = (p: Preset) => {
        setCriteria({ ...DEFAULT_CRITERIA, ...p.criteria });
        if (p.mode) setMode(p.mode);
    };

    const deletePreset = async (id: number) => {
        await fetch(`/api/sales/prospect-presets/${id}`, { method: "DELETE", credentials: "include" });
        loadPresets();
    };

    const setDefault = async (id: number) => {
        await fetch(`/api/sales/prospect-presets/${id}`, {
            method: "PATCH", headers: { "Content-Type": "application/json" }, credentials: "include",
            body: JSON.stringify({ is_default: true }),
        });
        loadPresets();
    };

    const addNiche = () => { if (nicheInput.trim() && !criteria.nicheKeywords.includes(nicheInput.trim())) { setCriteria(c => ({ ...c, nicheKeywords: [...c.nicheKeywords, nicheInput.trim()] })); setNicheInput(""); } };
    const addLocation = () => { if (locationInput.trim() && !criteria.locationKeywords.includes(locationInput.trim())) { setCriteria(c => ({ ...c, locationKeywords: [...c.locationKeywords, locationInput.trim()] })); setLocationInput(""); } };
    const addTitle = () => { if (titleInput.trim() && !criteria.titleKeywords.includes(titleInput.trim())) { setCriteria(c => ({ ...c, titleKeywords: [...c.titleKeywords, titleInput.trim()] })); setTitleInput(""); } };
    const addEmployer = () => { if (employerInput.trim() && !criteria.employerKeywords.includes(employerInput.trim())) { setCriteria(c => ({ ...c, employerKeywords: [...c.employerKeywords, employerInput.trim()] })); setEmployerInput(""); } };

    const activeFilterLabels: string[] = [];
    if (criteria.requireEmail) activeFilterLabels.push("Has Email");
    if (criteria.requirePhone) activeFilterLabels.push("Has Phone");
    if (criteria.minQualityScore > 0) activeFilterLabels.push(`Quality ${criteria.minQualityScore}+`);
    criteria.locationKeywords.forEach(k => activeFilterLabels.push(`Location: ${k}`));
    if (mode === "organization") {
        if (criteria.requireWebsite) activeFilterLabels.push("Has Website");
        if (!criteria.includeNoWebsite) activeFilterLabels.push("Exclude No-Website");
        if (criteria.minRating > 0) activeFilterLabels.push(`Rating ${criteria.minRating}+`);
        if (criteria.minReviews > 0) activeFilterLabels.push(`${criteria.minReviews}+ Reviews`);
        criteria.nicheKeywords.forEach(k => activeFilterLabels.push(`Niche: ${k}`));
    } else {
        criteria.titleKeywords.forEach(k => activeFilterLabels.push(`Title: ${k}`));
        criteria.employerKeywords.forEach(k => activeFilterLabels.push(`Employer: ${k}`));
    }

    return (
        <SalesLayout user={user}>
            <header className="hidden md:flex sticky top-0 z-10 items-center justify-between px-8 py-5" style={{ background: "rgba(8,13,24,0.92)", backdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex items-center gap-5">
                    <Image
                        src="/thequantlabxTJ5automailer.png"
                        alt="TheQuantLab x TJ5 AutoMailer"
                        width={160}
                        height={44}
                        className="object-contain"
                        priority
                    />
                    <div className="h-8 w-px bg-white/10" />
                    <p className="text-sm font-bold tracking-wide" style={{ background: "linear-gradient(135deg, #a78bfa, #60a5fa, #34d399)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                        {cfg.subtitle}
                    </p>
                </div>
            </header>

            <div className="px-4 md:px-8 py-6 max-w-5xl mx-auto">
                {/* Mode toggle */}
                <div className="flex items-center gap-1 p-1 rounded-xl mb-4 w-fit" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}>
                    <button onClick={() => handleModeSwitch("organization")}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all"
                        style={{
                            background: mode === "organization" ? "rgba(99,102,241,0.15)" : "transparent",
                            color: mode === "organization" ? "#818cf8" : "#6b7280",
                            border: mode === "organization" ? "1px solid rgba(99,102,241,0.25)" : "1px solid transparent",
                        }}>
                        <Building2 className="w-3.5 h-3.5" /> Organizations
                    </button>
                    <button onClick={() => handleModeSwitch("person")}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all"
                        style={{
                            background: mode === "person" ? "rgba(168,85,247,0.15)" : "transparent",
                            color: mode === "person" ? "#c084fc" : "#6b7280",
                            border: mode === "person" ? "1px solid rgba(168,85,247,0.25)" : "1px solid transparent",
                        }}>
                        <User className="w-3.5 h-3.5" /> People
                    </button>
                </div>

                {/* Preset bar */}
                {presets.length > 0 && (
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <Bookmark className="w-3.5 h-3.5 text-gray-600" />
                        <span className="text-[10px] text-gray-600 uppercase tracking-wider font-semibold mr-1">Presets</span>
                        {presets.map(p => (
                            <div key={p.id} className="flex items-center gap-0.5">
                                <button onClick={() => applyPreset(p)}
                                    className={`${chipBtn} ${p.is_default ? "border-emerald-400/30 text-emerald-400 bg-emerald-400/5" : "border-white/10 text-gray-400 hover:border-white/20 hover:text-gray-200"}`}>
                                    {p.is_default && <Star className="w-2.5 h-2.5" />} {p.name}
                                </button>
                                <button onClick={() => setDefault(p.id)} title="Set as default" className="p-0.5 text-gray-700 hover:text-emerald-400"><Check className="w-2.5 h-2.5" /></button>
                                <button onClick={() => deletePreset(p.id)} title="Delete" className="p-0.5 text-gray-700 hover:text-rose-400"><X className="w-2.5 h-2.5" /></button>
                            </div>
                        ))}
                    </div>
                )}

                {/* Search + Filters */}
                <form onSubmit={handleSearch} className="rounded-2xl p-5 mb-4" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                    <div className="flex gap-3 items-center">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                            <input type="text" value={query} onChange={e => setQuery(e.target.value)}
                                placeholder={cfg.placeholder}
                                className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/40" />
                        </div>
                        <button type="submit" disabled={loading || !query.trim()} className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white disabled:opacity-50"
                            style={{ background: mode === "organization" ? "linear-gradient(135deg, #8b5cf6, #3b82f6)" : "linear-gradient(135deg, #a855f7, #6366f1)" }}>
                            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4" />}
                            {loading ? "Searching..." : cfg.buttonLabel}
                        </button>
                    </div>

                    <div className="flex gap-2 mt-3 flex-wrap">
                        {cfg.suggestions.map(s => (
                            <button key={s} type="button" onClick={() => setQuery(s)} className="px-3 py-1 rounded-full text-xs text-gray-500 border border-white/10 hover:border-white/20 hover:text-gray-300 transition-all">{s}</button>
                        ))}
                    </div>

                    {/* Criteria toggle */}
                    <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
                        <button type="button" onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-300">
                            <Filter className="w-3.5 h-3.5" /> Filters & Criteria
                            {hasActiveFilters(criteria, mode) && <span className="ml-1 w-4 h-4 rounded-full bg-emerald-400/20 text-emerald-400 text-[9px] font-bold flex items-center justify-center">{activeFilterLabels.length}</span>}
                            {showFilters ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                        </button>
                        <div className="flex items-center gap-2">
                            <label className="text-xs text-gray-500">Max: <strong className="text-white">{maxResults}</strong></label>
                            <input type="range" min={1} max={10} value={maxResults} onChange={e => setMaxResults(Number(e.target.value))} className="w-20" />
                        </div>
                    </div>

                    {showFilters && (
                        <div className="mt-4 space-y-4">
                            {/* Shared toggle filters */}
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {mode === "organization" && (
                                    <button type="button" onClick={() => setCriteria(c => ({ ...c, requireWebsite: !c.requireWebsite }))}
                                        className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${criteria.requireWebsite ? "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20" : "bg-white/[0.02] text-gray-500 border border-white/5 hover:border-white/10"}`}>
                                        <Globe className="w-3 h-3" /> Require Website {criteria.requireWebsite && <Check className="w-3 h-3 ml-auto" />}
                                    </button>
                                )}
                                <button type="button" onClick={() => setCriteria(c => ({ ...c, requireEmail: !c.requireEmail }))}
                                    className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${criteria.requireEmail ? "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20" : "bg-white/[0.02] text-gray-500 border border-white/5 hover:border-white/10"}`}>
                                    <Mail className="w-3 h-3" /> Require Email {criteria.requireEmail && <Check className="w-3 h-3 ml-auto" />}
                                </button>
                                <button type="button" onClick={() => setCriteria(c => ({ ...c, requirePhone: !c.requirePhone }))}
                                    className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${criteria.requirePhone ? "bg-emerald-400/10 text-emerald-400 border border-emerald-400/20" : "bg-white/[0.02] text-gray-500 border border-white/5 hover:border-white/10"}`}>
                                    <Phone className="w-3 h-3" /> Require Phone {criteria.requirePhone && <Check className="w-3 h-3 ml-auto" />}
                                </button>
                                {mode === "organization" && (
                                    <button type="button" onClick={() => setCriteria(c => ({ ...c, includeNoWebsite: !c.includeNoWebsite }))}
                                        className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${!criteria.includeNoWebsite ? "bg-amber-400/10 text-amber-400 border border-amber-400/20" : "bg-white/[0.02] text-gray-500 border border-white/5 hover:border-white/10"}`}>
                                        <X className="w-3 h-3" /> Exclude No-Website {!criteria.includeNoWebsite && <Check className="w-3 h-3 ml-auto" />}
                                    </button>
                                )}
                            </div>

                            {/* Sliders — mode-aware */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {mode === "organization" && (
                                    <>
                                        <div>
                                            <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">Min Google Rating: <strong className="text-white">{criteria.minRating || "Any"}</strong></label>
                                            <input type="range" min={0} max={5} step={0.5} value={criteria.minRating} onChange={e => setCriteria(c => ({ ...c, minRating: Number(e.target.value) }))} className="w-full" />
                                        </div>
                                        <div>
                                            <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">Min Reviews: <strong className="text-white">{criteria.minReviews || "Any"}</strong></label>
                                            <input type="range" min={0} max={100} step={5} value={criteria.minReviews} onChange={e => setCriteria(c => ({ ...c, minReviews: Number(e.target.value) }))} className="w-full" />
                                        </div>
                                    </>
                                )}
                                <div>
                                    <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">Min Quality Score: <strong className="text-white">{criteria.minQualityScore || "Any"}</strong></label>
                                    <input type="range" min={0} max={100} step={5} value={criteria.minQualityScore} onChange={e => setCriteria(c => ({ ...c, minQualityScore: Number(e.target.value) }))} className="w-full" />
                                </div>
                            </div>

                            {/* Keyword filters — mode-aware */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {mode === "organization" ? (
                                    <div>
                                        <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">Niche / Business Type Keywords</label>
                                        <div className="flex gap-2">
                                            <input value={nicheInput} onChange={e => setNicheInput(e.target.value)} onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addNiche())} placeholder="e.g. Roofing, HVAC..." className={inp} />
                                            <button type="button" onClick={addNiche} className="px-3 py-2 rounded-lg text-xs bg-white/5 text-gray-400 border border-white/10">Add</button>
                                        </div>
                                        <div className="flex flex-wrap gap-1.5 mt-2">
                                            {criteria.nicheKeywords.map(k => (
                                                <span key={k} className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-400/10 text-indigo-400 border border-indigo-400/20">
                                                    {k} <button type="button" onClick={() => setCriteria(c => ({ ...c, nicheKeywords: c.nicheKeywords.filter(n => n !== k) }))}><X className="w-2.5 h-2.5" /></button>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div>
                                            <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">Job Title Keywords</label>
                                            <div className="flex gap-2">
                                                <input value={titleInput} onChange={e => setTitleInput(e.target.value)} onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addTitle())} placeholder="e.g. Agent, Advisor..." className={inp} />
                                                <button type="button" onClick={addTitle} className="px-3 py-2 rounded-lg text-xs bg-white/5 text-gray-400 border border-white/10">Add</button>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5 mt-2">
                                                {criteria.titleKeywords.map(k => (
                                                    <span key={k} className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-purple-400/10 text-purple-400 border border-purple-400/20">
                                                        {k} <button type="button" onClick={() => setCriteria(c => ({ ...c, titleKeywords: c.titleKeywords.filter(t => t !== k) }))}><X className="w-2.5 h-2.5" /></button>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">Employer Keywords</label>
                                            <div className="flex gap-2">
                                                <input value={employerInput} onChange={e => setEmployerInput(e.target.value)} onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addEmployer())} placeholder="e.g. State Farm, Allstate..." className={inp} />
                                                <button type="button" onClick={addEmployer} className="px-3 py-2 rounded-lg text-xs bg-white/5 text-gray-400 border border-white/10">Add</button>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5 mt-2">
                                                {criteria.employerKeywords.map(k => (
                                                    <span key={k} className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-400/10 text-sky-400 border border-sky-400/20">
                                                        {k} <button type="button" onClick={() => setCriteria(c => ({ ...c, employerKeywords: c.employerKeywords.filter(emp => emp !== k) }))}><X className="w-2.5 h-2.5" /></button>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </>
                                )}
                                <div>
                                    <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">Location Keywords</label>
                                    <div className="flex gap-2">
                                        <input value={locationInput} onChange={e => setLocationInput(e.target.value)} onKeyDown={e => e.key === "Enter" && (e.preventDefault(), addLocation())} placeholder="e.g. Dallas, TX..." className={inp} />
                                        <button type="button" onClick={addLocation} className="px-3 py-2 rounded-lg text-xs bg-white/5 text-gray-400 border border-white/10">Add</button>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 mt-2">
                                        {criteria.locationKeywords.map(k => (
                                            <span key={k} className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-sky-400/10 text-sky-400 border border-sky-400/20">
                                                {k} <button type="button" onClick={() => setCriteria(c => ({ ...c, locationKeywords: c.locationKeywords.filter(l => l !== k) }))}><X className="w-2.5 h-2.5" /></button>
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Preset save + reset */}
                            <div className="flex items-center justify-between pt-3 border-t border-white/5">
                                <div className="flex gap-2">
                                    {showSavePreset ? (
                                        <div className="flex gap-2 items-center">
                                            <input value={presetName} onChange={e => setPresetName(e.target.value)} onKeyDown={e => e.key === "Enter" && (e.preventDefault(), savePreset())}
                                                placeholder="Preset name..." className="text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-gray-300 focus:outline-none focus:border-emerald-400/40 w-40" autoFocus />
                                            <button type="button" onClick={savePreset} className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-white" style={{ background: "linear-gradient(135deg, #059669, #34d399)" }}>
                                                <Save className="w-3 h-3" /> Save
                                            </button>
                                            <button type="button" onClick={() => setShowSavePreset(false)} className="text-gray-600 hover:text-gray-400"><X className="w-3.5 h-3.5" /></button>
                                        </div>
                                    ) : (
                                        <button type="button" onClick={() => setShowSavePreset(true)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-gray-500 border border-white/10 hover:border-white/20 hover:text-gray-300">
                                            <Bookmark className="w-3 h-3" /> Save as Preset
                                        </button>
                                    )}
                                </div>
                                <button type="button" onClick={() => setCriteria({ ...DEFAULT_CRITERIA })} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-gray-600 hover:text-gray-400">
                                    <RefreshCw className="w-3 h-3" /> Reset Filters
                                </button>
                            </div>
                        </div>
                    )}
                </form>

                {/* Active filter chips */}
                {activeFilterLabels.length > 0 && !showFilters && (
                    <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <Filter className="w-3 h-3 text-gray-600" />
                        {activeFilterLabels.map(l => (
                            <span key={l} className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-400/10 text-emerald-400 border border-emerald-400/20">{l}</span>
                        ))}
                        <button onClick={() => setCriteria({ ...DEFAULT_CRITERIA })} className="text-[10px] text-gray-600 hover:text-gray-400 ml-1">Clear all</button>
                    </div>
                )}

                {loading && (
                    <div className="rounded-2xl p-8 text-center" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                        <Loader2 className="w-8 h-8 text-blue-400 animate-spin mx-auto mb-4" />
                        <p className="text-white font-semibold mb-1">{cfg.phaseMessages[phase as keyof typeof cfg.phaseMessages] || "Working..."}</p>
                        <p className="text-gray-600 text-xs">This typically takes 10-20 seconds</p>
                    </div>
                )}

                {error && (
                    <div className="rounded-xl p-4 mb-6" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(239,68,68,0.3)" }}>
                        <div className="flex items-center justify-between">
                            <div><p className="text-rose-400 font-semibold text-sm">Search Failed</p><p className="text-gray-500 text-xs mt-0.5">{error}</p></div>
                            <button onClick={() => handleSearch({ preventDefault: () => {} } as React.FormEvent)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-white/5 text-gray-300 border border-white/10"><RefreshCw className="w-3 h-3" /> Retry</button>
                        </div>
                    </div>
                )}

                {leads.length > 0 && (
                    <>
                        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
                            <div>
                                <p className="text-white font-semibold">{leads.length} {mode === "person" ? "contacts" : "prospects"} found</p>
                                {meta && (
                                    <div className="flex gap-4 text-xs text-gray-500 mt-1">
                                        <span className="flex items-center gap-1"><Search className="w-3 h-3" /> {String(meta.discovered)} discovered</span>
                                        <span className="flex items-center gap-1"><Mail className="w-3 h-3" /> {String(meta.enriched)} with email</span>
                                        {Number(meta.filtered) > 0 && <span className="flex items-center gap-1"><Filter className="w-3 h-3" /> {String(meta.filtered)} filtered out</span>}
                                        <span className="flex items-center gap-1"><Shield className="w-3 h-3" /> {leads.filter(l => l.qualityScore >= 70).length} strong</span>
                                    </div>
                                )}
                            </div>
                            <div className="flex gap-2">
                                {leads.length - savedIds.size > 0 && <button onClick={handleSaveAll} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-white/5 text-gray-300 border border-white/10"><Save className="w-3 h-3" /> Save All ({leads.length - savedIds.size})</button>}
                                {savedIds.size > 0 && <button onClick={() => router.push("/sales/outreach")} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold" style={{ background: "linear-gradient(135deg, #059669, #34d399)", color: "white" }}><Send className="w-3 h-3" /> Write Outreach <ArrowRight className="w-3 h-3" /></button>}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {leads.map((lead, i) => {
                                const isSaved = savedIds.has(i);
                                const isSaving = savingId === i;
                                const isOrg = lead.mode !== "person";
                                return (
                                    <div key={i} className="rounded-xl p-5 transition-all" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: isSaved ? "1px solid rgba(52,211,153,0.3)" : "1px solid rgba(255,255,255,0.05)" }}>
                                        <div className="flex justify-between items-start mb-3">
                                            <div className="flex-1 min-w-0">
                                                {isOrg ? (
                                                    <>
                                                        <h3 className="text-base font-bold text-white truncate">{lead.companyName}</h3>
                                                        <div className="flex items-center gap-3 mt-1">
                                                            {lead.contactName && <span className="text-xs text-gray-500">{lead.contactName}</span>}
                                                            {lead.rating != null && lead.rating > 0 && <span className="flex items-center gap-1 text-xs" style={{ color: "#f59e0b" }}><Star className="w-3 h-3" style={{ fill: "#f59e0b" }} /> {lead.rating}<span className="text-gray-600">({lead.reviewCount})</span></span>}
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <h3 className="text-base font-bold text-white truncate">{lead.contactName}</h3>
                                                        <div className="flex items-center gap-3 mt-1">
                                                            {lead.jobTitle && <span className="flex items-center gap-1 text-xs text-gray-500"><Briefcase className="w-3 h-3" /> {lead.jobTitle}</span>}
                                                            {lead.employer && <span className="flex items-center gap-1 text-xs text-gray-500"><Building2 className="w-3 h-3" /> {lead.employer}</span>}
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                            <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-3">
                                                {lead.niche && <span className="text-[10px] px-2 py-0.5 rounded-full font-semibold uppercase tracking-wider" style={{ background: isOrg ? "rgba(99,102,241,0.15)" : "rgba(168,85,247,0.15)", color: isOrg ? "#818cf8" : "#c084fc" }}>{lead.niche}</span>}
                                                {lead.qualityScore != null && <QualityBar score={lead.qualityScore} />}
                                            </div>
                                        </div>
                                        <div className="space-y-1.5 mb-3 text-xs">
                                            {lead.location && <div className="flex items-center gap-2 text-gray-400"><MapPin className="w-3 h-3 text-gray-600 flex-shrink-0" /> {lead.location}</div>}
                                            {lead.email ? <div className="flex items-center gap-2 text-gray-400"><Mail className="w-3 h-3 text-emerald-500 flex-shrink-0" /> {lead.email}</div> : <div className="flex items-center gap-2 text-gray-600 opacity-60"><Mail className="w-3 h-3 flex-shrink-0" /> Email not found</div>}
                                            {lead.phone ? <div className="flex items-center gap-2 text-gray-400"><Phone className="w-3 h-3 text-gray-600 flex-shrink-0" /> {lead.phone}</div> : <div className="flex items-center gap-2 text-gray-600 opacity-60"><Phone className="w-3 h-3 flex-shrink-0" /> Phone not found</div>}
                                            {lead.website && <div className="flex items-center gap-2"><Globe className="w-3 h-3 text-gray-600 flex-shrink-0" /><a href={lead.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 truncate hover:underline">{lead.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</a></div>}
                                        </div>
                                        {lead.summary && <p className="text-xs text-gray-400 mb-3 leading-relaxed">{lead.summary}</p>}
                                        {lead.why && <div className="rounded-lg p-3 mb-3" style={{ background: "rgba(16,185,129,0.08)" }}><p className="text-[10px] font-semibold uppercase tracking-wider text-emerald-400 mb-0.5">Opportunity</p><p className="text-xs text-gray-300">{lead.why}</p></div>}
                                        <div className="flex gap-2">
                                            {isSaved ? (
                                                <button onClick={() => router.push("/sales/outreach")} className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-medium text-emerald-400 bg-emerald-400/5 border border-emerald-400/20"><CheckCircle className="w-3.5 h-3.5" /> Saved — Write Outreach <ArrowRight className="w-3 h-3" /></button>
                                            ) : (
                                                <button onClick={() => handleSave(lead, i)} disabled={isSaving} className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold text-white disabled:opacity-50" style={{ background: "linear-gradient(135deg, #3b82f6, #2563eb)" }}>{isSaving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}{isSaving ? "Saving..." : "Save to Pipeline"}</button>
                                            )}
                                            {lead.website && <a href={lead.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-9 h-9 rounded-lg bg-white/5 border border-white/10 text-gray-400 hover:text-white transition-colors"><ExternalLink className="w-3.5 h-3.5" /></a>}
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
                        <h3 className="text-white font-semibold mb-2">{cfg.emptyTitle}</h3>
                        <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">{cfg.emptyDescription}</p>
                    </div>
                )}
            </div>
        </SalesLayout>
    );
}
