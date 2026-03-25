"use client";

import React, { useState, useEffect } from "react";
import { SalesLayout } from "@/components/SalesLayout";
import { Users, Bot, Key, UserCircle, Save, Loader2, Check, Eye, EyeOff, Trash2, Shield, RefreshCw, Inbox, ToggleLeft, ToggleRight } from "lucide-react";

interface UserInfo {
    id: number; username: string; full_name: string; email: string; role: string;
    has_smtp: boolean; outreach_prompt_rules: string | null;
    has_llm_key: boolean; llm_provider: string | null; llm_model: string | null;
}

interface PromptRules {
    tone: string; maxLength: string; callToAction: string; avoidWords: string; customInstructions: string;
}

const DEFAULT_RULES: PromptRules = {
    tone: "Professional but conversational — like a sharp colleague, not a marketer",
    maxLength: "120 words",
    callToAction: "Suggest a quick 10-minute call this week",
    avoidWords: "synergy, leverage, disrupt, innovative, cutting-edge, game-changer, scalable, I hope this finds you well",
    customInstructions: "",
};

const PROVIDER_OPTIONS = [
    { value: "openai", label: "OpenAI" },
    { value: "anthropic", label: "Anthropic (Claude)" },
];

const MODEL_OPTIONS: Record<string, { value: string; label: string }[]> = {
    openai: [
        { value: "gpt-4o-mini", label: "GPT-4o Mini" },
        { value: "gpt-4o", label: "GPT-4o" },
        { value: "gpt-4.1-mini", label: "GPT-4.1 Mini" },
        { value: "gpt-4.1-nano", label: "GPT-4.1 Nano" },
    ],
    anthropic: [
        { value: "claude-sonnet-4-20250514", label: "Claude Sonnet 4" },
        { value: "claude-3-5-haiku-20241022", label: "Claude 3.5 Haiku" },
    ],
};

const inp = "w-full text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-emerald-400/40";

export default function SettingsPage() {
    const [user, setUser] = useState<UserInfo | null>(null);
    const [activeTab, setActiveTab] = useState("rules");
    const [loading, setLoading] = useState(true);
    const [smtpPass, setSmtpPass] = useState("");
    const [smtpSaving, setSmtpSaving] = useState(false);
    const [smtpMsg, setSmtpMsg] = useState("");
    const [rules, setRules] = useState<PromptRules>({ ...DEFAULT_RULES });
    const [rulesSaving, setRulesSaving] = useState(false);
    const [rulesMsg, setRulesMsg] = useState("");
    const [showPreview, setShowPreview] = useState(false);

    // LLM config state
    const [llmProvider, setLlmProvider] = useState("openai");
    const [llmModel, setLlmModel] = useState("gpt-4o-mini");
    const [llmKey, setLlmKey] = useState("");
    const [llmSaving, setLlmSaving] = useState(false);
    const [llmMsg, setLlmMsg] = useState("");

    // Email sync state
    const [syncStatus, setSyncStatus] = useState<{ lastSyncedAt: string | null; totalEmails: number; autoCreateLeads: boolean } | null>(null);
    const [syncing, setSyncing] = useState(false);
    const [syncResult, setSyncResult] = useState<{ synced: number; newLeads: number; matched: number; error?: string; capped?: boolean } | null>(null);

    const fetchSyncStatus = () => {
        fetch("/api/sales/email-sync", { credentials: "include" })
            .then(r => r.ok ? r.json() : null)
            .then(data => { if (data) setSyncStatus(data); });
    };

    useEffect(() => {
        fetch("/api/sales/me", { credentials: "include" })
            .then(r => { if (!r.ok) { window.location.href = "/sales"; return null; } return r.json(); })
            .then((u: UserInfo | null) => {
                if (u) {
                    setUser(u);
                    if (u.outreach_prompt_rules) {
                        try {
                            const parsed = typeof u.outreach_prompt_rules === "string" ? JSON.parse(u.outreach_prompt_rules) : u.outreach_prompt_rules;
                            setRules({ ...DEFAULT_RULES, ...parsed });
                        } catch { /* keep defaults */ }
                    }
                    if (u.llm_provider && !u.llm_provider.includes("system")) {
                        setLlmProvider(u.llm_provider);
                    }
                    if (u.llm_model) setLlmModel(u.llm_model);
                }
                setLoading(false);
            });
        fetchSyncStatus();
    }, []);

    const saveRules = async () => {
        setRulesSaving(true); setRulesMsg("");
        try {
            const r = await fetch("/api/sales/me", {
                method: "PATCH", headers: { "Content-Type": "application/json" }, credentials: "include",
                body: JSON.stringify({ outreach_prompt_rules: rules }),
            });
            setRulesMsg(r.ok ? "Saved" : "Failed to save");
        } catch { setRulesMsg("Error"); }
        finally { setRulesSaving(false); setTimeout(() => setRulesMsg(""), 3000); }
    };

    const saveLlmConfig = async () => {
        if (!llmKey.trim()) return;
        setLlmSaving(true); setLlmMsg("");
        try {
            const r = await fetch("/api/sales/me", {
                method: "PATCH", headers: { "Content-Type": "application/json" }, credentials: "include",
                body: JSON.stringify({ llm_config: { provider: llmProvider, model: llmModel, api_key: llmKey } }),
            });
            const data = await r.json();
            if (r.ok) {
                setLlmMsg("Saved");
                setLlmKey("");
                setUser(prev => prev ? { ...prev, has_llm_key: true, llm_provider: llmProvider, llm_model: llmModel } : prev);
            } else {
                setLlmMsg(data.error || "Failed to save");
            }
        } catch { setLlmMsg("Error"); }
        finally { setLlmSaving(false); setTimeout(() => setLlmMsg(""), 4000); }
    };

    const clearLlmConfig = async () => {
        setLlmSaving(true); setLlmMsg("");
        try {
            const r = await fetch("/api/sales/me", {
                method: "PATCH", headers: { "Content-Type": "application/json" }, credentials: "include",
                body: JSON.stringify({ llm_config: null }),
            });
            if (r.ok) {
                setLlmMsg("Cleared");
                setUser(prev => prev ? { ...prev, has_llm_key: false, llm_provider: null, llm_model: null } : prev);
            }
        } catch { setLlmMsg("Error"); }
        finally { setLlmSaving(false); setTimeout(() => setLlmMsg(""), 3000); }
    };

    const triggerSync = async () => {
        setSyncing(true); setSyncResult(null);
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 55_000);
        try {
            const r = await fetch("/api/sales/email-sync", { method: "POST", headers: { "Content-Type": "application/json" }, credentials: "include", body: JSON.stringify({}), signal: controller.signal });
            clearTimeout(timeout);
            const data = await r.json();
            if (r.ok) {
                setSyncResult({ synced: data.synced, newLeads: data.newLeads, matched: data.matched, capped: data.capped });
                fetchSyncStatus();
            } else {
                setSyncResult({ synced: 0, newLeads: 0, matched: 0, error: data.error });
            }
        } catch (err) {
            clearTimeout(timeout);
            const msg = err instanceof Error && err.name === "AbortError"
                ? "Sync timed out — try again to continue from where it left off."
                : "Network error — check your connection and try again.";
            setSyncResult({ synced: 0, newLeads: 0, matched: 0, error: msg });
        } finally { setSyncing(false); }
    };

    const toggleAutoCreate = async () => {
        const newVal = !syncStatus?.autoCreateLeads;
        await fetch("/api/sales/email-sync", {
            method: "POST", headers: { "Content-Type": "application/json" }, credentials: "include",
            body: JSON.stringify({ action: "set_auto_create", auto_create_leads: newVal }),
        });
        fetchSyncStatus();
    };

    const providerLabel = PROVIDER_OPTIONS.find(p => p.value === (user?.llm_provider || ""))?.label || user?.llm_provider;

    const previewPrompt = `You are an elite outreach copywriter. You write emails that get replies because they are specific, short, and lead with relevance.

HARD RULES:
- Tone: ${rules.tone}
- Maximum length: ${rules.maxLength}
- Call to action: ${rules.callToAction}
- NEVER use these words/phrases: ${rules.avoidWords}
- Sign off as: ${user?.full_name || "Your Name"}
- First sentence MUST reference a specific detail about the prospect
- NO filler openers
- NO generic claims
- Subject line must be short (under 8 words), specific, and curiosity-driven
${rules.customInstructions ? `\nCUSTOM INSTRUCTIONS:\n${rules.customInstructions}` : ""}

FORMAT: First line is the subject line prefixed with "Subject: ", then a blank line, then the email body. Nothing else.`;

    const tabs = [
        { id: "rules", label: "Prompt Engine", icon: <Bot className="w-4 h-4" /> },
        { id: "email-sync", label: "Email Sync", icon: <Inbox className="w-4 h-4" /> },
        { id: "team", label: "Team & Roles", icon: <Users className="w-4 h-4" /> },
        { id: "api", label: "API Integrations", icon: <Key className="w-4 h-4" /> },
        { id: "profile", label: "My Profile", icon: <UserCircle className="w-4 h-4" /> },
    ];

    if (loading) return <SalesLayout><div className="flex items-center justify-center min-h-[80vh]"><Loader2 className="w-6 h-6 text-emerald-400 animate-spin" /></div></SalesLayout>;

    return (
        <SalesLayout user={user}>
            <header className="hidden md:flex sticky top-0 z-10 items-center px-8 py-4" style={{ background: "rgba(8,13,24,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div><h1 className="text-xl font-bold text-white">Settings</h1><p className="text-gray-500 text-xs mt-0.5">Manage your AI provider, prompt rules, team, and integrations.</p></div>
            </header>

            <div className="px-4 md:px-8 py-6 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start">
                    <div className="space-y-1">
                        {tabs.map(tab => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all"
                                style={{ color: activeTab === tab.id ? "#34d399" : "#9ca3af", background: activeTab === tab.id ? "rgba(52,211,153,0.08)" : "transparent" }}>
                                {tab.icon} {tab.label}
                            </button>
                        ))}
                    </div>

                    <div>
                        {/* ═══ PROMPT ENGINE ═══ */}
                        {activeTab === "rules" && (
                            <div className="space-y-4">
                                <div className="rounded-xl p-6" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h3 className="text-sm font-semibold text-white">Outreach Master Prompt</h3>
                                            <p className="text-gray-500 text-xs mt-0.5">These rules control how the AI writes your emails. Changes apply to all future outreach.</p>
                                        </div>
                                        <button onClick={() => setShowPreview(!showPreview)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-gray-500 border border-white/10 hover:border-white/20 hover:text-gray-300">
                                            {showPreview ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />} {showPreview ? "Hide" : "Preview"} Full Prompt
                                        </button>
                                    </div>

                                    {showPreview && (
                                        <div className="mb-5 p-4 rounded-lg bg-black/30 border border-white/5">
                                            <p className="text-[10px] text-gray-600 uppercase tracking-wider font-semibold mb-2">System Prompt (sent to {providerLabel || "your AI provider"})</p>
                                            <pre className="text-xs text-gray-400 whitespace-pre-wrap font-mono leading-relaxed">{previewPrompt}</pre>
                                        </div>
                                    )}

                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">Tone & Style</label>
                                            <input value={rules.tone} onChange={e => setRules(r => ({ ...r, tone: e.target.value }))} className={inp} placeholder="Professional but conversational..." />
                                            <p className="text-gray-700 text-[10px] mt-1">How the email should sound. Examples: &quot;Direct and punchy&quot;, &quot;Casual and friendly&quot;, &quot;Formal B2B&quot;</p>
                                        </div>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">Max Length</label>
                                                <select value={rules.maxLength} onChange={e => setRules(r => ({ ...r, maxLength: e.target.value }))} className={inp}>
                                                    <option value="80 words">Short (80 words)</option>
                                                    <option value="120 words">Medium (120 words)</option>
                                                    <option value="200 words">Long (200 words)</option>
                                                    <option value="300 words">Very Long (300 words)</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">Call to Action</label>
                                                <input value={rules.callToAction} onChange={e => setRules(r => ({ ...r, callToAction: e.target.value }))} className={inp} placeholder="Suggest a quick 10-minute call..." />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">Banned Words & Phrases</label>
                                            <textarea value={rules.avoidWords} onChange={e => setRules(r => ({ ...r, avoidWords: e.target.value }))} rows={2} className={inp + " resize-none"} placeholder="synergy, leverage, disrupt..." />
                                            <p className="text-gray-700 text-[10px] mt-1">Comma-separated. The AI will never use these in generated emails.</p>
                                        </div>
                                        <div>
                                            <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">Custom Instructions (optional)</label>
                                            <textarea value={rules.customInstructions} onChange={e => setRules(r => ({ ...r, customInstructions: e.target.value }))} rows={4} className={inp + " resize-y font-mono"} placeholder="Add any extra rules, industry-specific instructions, or messaging angles..." />
                                            <p className="text-gray-700 text-[10px] mt-1">Free-form rules injected directly into the system prompt.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/5">
                                        <button onClick={() => setRules({ ...DEFAULT_RULES })} className="text-xs text-gray-600 hover:text-gray-400">Reset to defaults</button>
                                        <div className="flex items-center gap-3">
                                            {rulesMsg && <span className={`text-xs ${rulesMsg === "Saved" ? "text-emerald-400" : "text-rose-400"}`}>{rulesMsg === "Saved" ? <Check className="w-3 h-3 inline mr-1" /> : null}{rulesMsg}</span>}
                                            <button onClick={saveRules} disabled={rulesSaving} className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white disabled:opacity-50"
                                                style={{ background: "linear-gradient(135deg, #059669, #34d399)" }}>
                                                <Save className="w-3.5 h-3.5" /> {rulesSaving ? "Saving..." : "Save Prompt Rules"}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ═══ EMAIL SYNC ═══ */}
                        {activeTab === "email-sync" && (
                            <div className="space-y-4">
                                <div className="rounded-xl p-6" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                                                <Inbox className="w-4 h-4 text-sky-400" /> Inbox Sync
                                            </h3>
                                            <p className="text-gray-500 text-xs mt-0.5">Pull emails from your IMAP inbox and automatically match them to leads. New senders can be auto-created as leads.</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        {/* Sync status */}
                                        <div className="flex items-center gap-4 p-3 rounded-lg" style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                            <div className="flex-1">
                                                <p className="text-xs text-gray-500">Last Synced</p>
                                                <p className="text-sm text-gray-300">
                                                    {syncStatus?.lastSyncedAt
                                                        ? new Date(syncStatus.lastSyncedAt).toLocaleString("en-US", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })
                                                        : "Never"}
                                                </p>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs text-gray-500">Total Emails Stored</p>
                                                <p className="text-sm text-gray-300">{syncStatus?.totalEmails ?? 0}</p>
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs text-gray-500">SMTP Status</p>
                                                {user?.has_smtp
                                                    ? <p className="text-sm text-emerald-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" /> Connected</p>
                                                    : <p className="text-sm text-amber-400 flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block" /> Not configured</p>}
                                            </div>
                                        </div>

                                        {/* Sync button */}
                                        <div className="flex items-center gap-3">
                                            <button onClick={triggerSync} disabled={syncing || !user?.has_smtp}
                                                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white disabled:opacity-50 transition-all"
                                                style={{ background: "linear-gradient(135deg, #0284c7, #38bdf8)" }}>
                                                <RefreshCw className={`w-3.5 h-3.5 ${syncing ? "animate-spin" : ""}`} />
                                                {syncing ? "Syncing Inbox…" : "Sync Now"}
                                            </button>
                                            {!user?.has_smtp && (
                                                <p className="text-xs text-amber-400">Set your email password in My Profile first.</p>
                                            )}
                                        </div>

                                        {/* Sync result */}
                                        {syncResult && (
                                            <div className={`p-3 rounded-lg text-xs ${syncResult.error ? "bg-rose-500/10 border border-rose-500/20 text-rose-400" : "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"}`}>
                                                {syncResult.error ? (
                                                    <p>{syncResult.error}</p>
                                                ) : (
                                                    <p>
                                                        Synced <strong>{syncResult.synced}</strong> email{syncResult.synced !== 1 ? "s" : ""}.
                                                        {syncResult.matched > 0 && <> Matched to <strong>{syncResult.matched}</strong> existing lead{syncResult.matched !== 1 ? "s" : ""}.</>}
                                                        {syncResult.newLeads > 0 && <> Created <strong>{syncResult.newLeads}</strong> new lead{syncResult.newLeads !== 1 ? "s" : ""}.</>}
                                                        {syncResult.capped && <> Hit limit — press Sync again to continue.</>}
                                                    </p>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Auto-create toggle */}
                                <div className="rounded-xl p-6" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                    <h3 className="text-sm font-semibold text-white mb-3">Lead Auto-Import</h3>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="text-xs text-gray-400">Auto-create leads from unknown senders</p>
                                            <p className="text-[10px] text-gray-600 mt-0.5">When enabled, inbound emails from addresses not matching any existing lead will create a new lead automatically.</p>
                                        </div>
                                        <button onClick={toggleAutoCreate}
                                            className="flex items-center gap-1 text-sm transition-colors"
                                            style={{ color: syncStatus?.autoCreateLeads ? "#34d399" : "#6b7280" }}>
                                            {syncStatus?.autoCreateLeads
                                                ? <ToggleRight className="w-8 h-8" />
                                                : <ToggleLeft className="w-8 h-8" />}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ═══ TEAM ═══ */}
                        {activeTab === "team" && (
                            <div className="rounded-xl p-6" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                <h3 className="text-sm font-semibold text-white mb-4">Team Management</h3>
                                <p className="text-gray-500 text-xs mb-4">Manage sales reps, managers, and admin access. Use the admin dashboard to add/remove team members.</p>
                                <p className="text-xs text-gray-600">Logged in as: <strong className="text-white">{user?.full_name || user?.username}</strong> ({user?.role})</p>
                            </div>
                        )}

                        {/* ═══ API INTEGRATIONS ═══ */}
                        {activeTab === "api" && (
                            <div className="space-y-4">
                                {/* LLM Provider */}
                                <div className="rounded-xl p-6" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                                                <Bot className="w-4 h-4 text-violet-400" /> AI Provider
                                            </h3>
                                            <p className="text-gray-500 text-xs mt-0.5">Powers outreach generation and lead qualification. Your key is encrypted and never displayed.</p>
                                        </div>
                                        {user?.has_llm_key && (
                                            <div className="flex items-center gap-1.5 text-xs">
                                                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                                                <span className="text-emerald-400 font-medium">{providerLabel}</span>
                                                <span className="text-gray-600">/ {user.llm_model}</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">Provider</label>
                                                <select value={llmProvider} onChange={e => {
                                                    setLlmProvider(e.target.value);
                                                    const models = MODEL_OPTIONS[e.target.value];
                                                    if (models) setLlmModel(models[0].value);
                                                }} className={inp}>
                                                    {PROVIDER_OPTIONS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">Model</label>
                                                <select value={llmModel} onChange={e => setLlmModel(e.target.value)} className={inp}>
                                                    {(MODEL_OPTIONS[llmProvider] || []).map(m => <option key={m.value} value={m.value}>{m.label}</option>)}
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">API Key</label>
                                            <div className="flex gap-2">
                                                <input type="password" value={llmKey} onChange={e => setLlmKey(e.target.value)}
                                                    onKeyDown={e => e.key === "Enter" && (e.preventDefault(), saveLlmConfig())}
                                                    placeholder={user?.has_llm_key ? "Enter new key to update..." : "Paste your API key here"}
                                                    className={"flex-1 max-w-md " + inp} />
                                                <button onClick={saveLlmConfig} disabled={llmSaving || !llmKey.trim()}
                                                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white disabled:opacity-50"
                                                    style={{ background: "linear-gradient(135deg, #059669, #34d399)" }}>
                                                    <Save className="w-3 h-3" /> {llmSaving ? "Saving..." : "Save"}
                                                </button>
                                                {user?.has_llm_key && (
                                                    <button onClick={clearLlmConfig} disabled={llmSaving}
                                                        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-gray-500 border border-white/10 hover:border-rose-400/30 hover:text-rose-400 disabled:opacity-50">
                                                        <Trash2 className="w-3 h-3" /> Clear
                                                    </button>
                                                )}
                                            </div>
                                            {llmMsg && <p className={`text-xs mt-1.5 ${llmMsg === "Saved" || llmMsg === "Cleared" ? "text-emerald-400" : "text-rose-400"}`}>{llmMsg === "Saved" || llmMsg === "Cleared" ? <Check className="w-3 h-3 inline mr-1" /> : null}{llmMsg}</p>}
                                            <div className="flex items-center gap-1.5 mt-2 text-gray-700 text-[10px]">
                                                <Shield className="w-3 h-3" /> Your key is encrypted server-side and never exposed in the UI.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Other integrations */}
                                <div className="rounded-xl p-6" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                    <h3 className="text-sm font-semibold text-white mb-5">Other Integrations</h3>
                                    <div className="space-y-5">
                                        <div>
                                            <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">Google Places API</label>
                                            <input type="password" placeholder="Set via GOOGLE_PLACES_API_KEY env var" className={"max-w-sm " + inp} readOnly />
                                            <p className="text-gray-600 text-[10px] mt-1">Used for organization search. Configured at the platform level.</p>
                                        </div>
                                        <div>
                                            <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">SMTP Email</label>
                                            <p className="text-gray-600 text-[10px]">Per-user email password is configured in My Profile.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* ═══ PROFILE ═══ */}
                        {activeTab === "profile" && (
                            <div className="space-y-4">
                                <div className="rounded-xl p-6" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                    <h3 className="text-sm font-semibold text-white mb-4">My Profile</h3>
                                    <div className="space-y-3">
                                        <div><span className="text-[10px] uppercase tracking-wider text-gray-600 block">Username</span><p className="text-sm text-gray-300">{user?.username}</p></div>
                                        <div><span className="text-[10px] uppercase tracking-wider text-gray-600 block">Full Name</span><p className="text-sm text-gray-300">{user?.full_name}</p></div>
                                        <div><span className="text-[10px] uppercase tracking-wider text-gray-600 block">Role</span><p className="text-sm text-gray-300 capitalize">{user?.role}</p></div>
                                    </div>
                                </div>

                                <div className="rounded-xl p-6" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                    <h3 className="text-sm font-semibold text-white mb-1">Outreach Email</h3>
                                    <p className="text-gray-500 text-xs mb-4">Outreach emails you send will come FROM this address.</p>
                                    <div className="space-y-3">
                                        <div><span className="text-[10px] uppercase tracking-wider text-gray-600 block">Send-as Email</span><p className="text-sm text-emerald-400 font-medium">{user?.email || "Not set"}</p></div>
                                        <div>
                                            <span className="text-[10px] uppercase tracking-wider text-gray-600 block">SMTP Status</span>
                                            {user?.has_smtp ? <p className="text-sm text-emerald-400 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" /> Connected</p>
                                                : <p className="text-sm text-amber-400 flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400 inline-block" /> Not configured</p>}
                                        </div>
                                        <div>
                                            <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">Email Password</label>
                                            <div className="flex gap-2">
                                                <input type="password" value={smtpPass} onChange={e => setSmtpPass(e.target.value)} placeholder={user?.has_smtp ? "Update password..." : "Enter your email password"} className={"flex-1 max-w-sm " + inp} />
                                                <button disabled={smtpSaving || !smtpPass.trim()} onClick={async () => {
                                                    setSmtpSaving(true); setSmtpMsg("");
                                                    try { const r = await fetch("/api/sales/me", { method: "PATCH", headers: { "Content-Type": "application/json" }, credentials: "include", body: JSON.stringify({ smtp_pass: smtpPass }) }); if (r.ok) { setSmtpMsg("Saved"); setSmtpPass(""); setUser(prev => prev ? { ...prev, has_smtp: true } : prev); } else { setSmtpMsg("Failed"); } } catch { setSmtpMsg("Error"); } finally { setSmtpSaving(false); }
                                                }} className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-white disabled:opacity-50" style={{ background: "linear-gradient(135deg, #059669, #34d399)" }}>
                                                    <Save className="w-3 h-3" /> {smtpSaving ? "Saving..." : "Save"}
                                                </button>
                                            </div>
                                            {smtpMsg && <p className={`text-xs mt-1 ${smtpMsg === "Saved" ? "text-emerald-400" : "text-rose-400"}`}>{smtpMsg}</p>}
                                            <p className="text-gray-600 text-[10px] mt-1">Your Spacemail password for {user?.email}.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </SalesLayout>
    );
}
