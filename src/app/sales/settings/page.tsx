"use client";

import React, { useState, useEffect } from "react";
import { SalesLayout } from "@/components/SalesLayout";
import { Users, Bot, Key, UserCircle, Save, Loader2, Check, Eye, EyeOff } from "lucide-react";

interface UserInfo { id: number; username: string; full_name: string; email: string; role: string; has_smtp: boolean; outreach_prompt_rules: string | null; }

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
                }
                setLoading(false);
            });
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

    const previewPrompt = `You are an elite B2B cold outreach copywriter. You write emails that get replies because they are specific, short, and lead with the prospect's problem.

HARD RULES:
- Tone: ${rules.tone}
- Maximum length: ${rules.maxLength}
- Call to action: ${rules.callToAction}
- NEVER use these words/phrases: ${rules.avoidWords}
- Sign off as: ${user?.full_name || "Your Name"}
- First sentence MUST reference a specific detail about their business
- NO filler openers
- NO generic claims
- Subject line must be short (under 8 words), specific, and curiosity-driven
${rules.customInstructions ? `\nCUSTOM INSTRUCTIONS:\n${rules.customInstructions}` : ""}

FORMAT: First line is the subject line prefixed with "Subject: ", then a blank line, then the email body. Nothing else.`;

    const tabs = [
        { id: "rules", label: "Prompt Engine", icon: <Bot className="w-4 h-4" /> },
        { id: "team", label: "Team & Roles", icon: <Users className="w-4 h-4" /> },
        { id: "api", label: "API Integrations", icon: <Key className="w-4 h-4" /> },
        { id: "profile", label: "My Profile", icon: <UserCircle className="w-4 h-4" /> },
    ];

    if (loading) return <SalesLayout><div className="flex items-center justify-center min-h-[80vh]"><Loader2 className="w-6 h-6 text-emerald-400 animate-spin" /></div></SalesLayout>;

    return (
        <SalesLayout user={user}>
            <header className="hidden md:flex sticky top-0 z-10 items-center px-8 py-4" style={{ background: "rgba(8,13,24,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div><h1 className="text-xl font-bold text-white">Settings</h1><p className="text-gray-500 text-xs mt-0.5">Manage your LLM prompt, team, and integrations.</p></div>
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
                                            <p className="text-gray-500 text-xs mt-0.5">These rules control how the AI writes your cold emails. Changes apply to all future outreach you generate.</p>
                                        </div>
                                        <button onClick={() => setShowPreview(!showPreview)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-gray-500 border border-white/10 hover:border-white/20 hover:text-gray-300">
                                            {showPreview ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />} {showPreview ? "Hide" : "Preview"} Full Prompt
                                        </button>
                                    </div>

                                    {showPreview && (
                                        <div className="mb-5 p-4 rounded-lg bg-black/30 border border-white/5">
                                            <p className="text-[10px] text-gray-600 uppercase tracking-wider font-semibold mb-2">System Prompt (sent to GPT-4o-mini)</p>
                                            <pre className="text-xs text-gray-400 whitespace-pre-wrap font-mono leading-relaxed">{previewPrompt}</pre>
                                        </div>
                                    )}

                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">Tone & Style</label>
                                            <input value={rules.tone} onChange={e => setRules(r => ({ ...r, tone: e.target.value }))} className={inp} placeholder="Professional but conversational..." />
                                            <p className="text-gray-700 text-[10px] mt-1">How the email should sound. Examples: "Direct and punchy", "Casual and friendly", "Formal B2B"</p>
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
                                            <textarea value={rules.customInstructions} onChange={e => setRules(r => ({ ...r, customInstructions: e.target.value }))} rows={4} className={inp + " resize-y font-mono"} placeholder="Add any extra rules, industry-specific instructions, or messaging angles you want the AI to always follow..." />
                                            <p className="text-gray-700 text-[10px] mt-1">Free-form rules injected directly into the system prompt. Use this for industry-specific angles, company positioning, or any custom logic.</p>
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

                        {/* ═══ TEAM ═══ */}
                        {activeTab === "team" && (
                            <div className="rounded-xl p-6" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                <h3 className="text-sm font-semibold text-white mb-4">Team Management</h3>
                                <p className="text-gray-500 text-xs mb-4">Manage sales reps, managers, and admin access. Use the admin dashboard to add/remove team members.</p>
                                <p className="text-xs text-gray-600">Logged in as: <strong className="text-white">{user?.full_name || user?.username}</strong> ({user?.role})</p>
                            </div>
                        )}

                        {/* ═══ API ═══ */}
                        {activeTab === "api" && (
                            <div className="rounded-xl p-6" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                <h3 className="text-sm font-semibold text-white mb-5">API Integrations</h3>
                                <div className="space-y-5">
                                    <div>
                                        <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">LLM Provider (OpenAI)</label>
                                        <input type="password" defaultValue="sk-proj-xxxxxxxx" className={"max-w-sm " + inp} />
                                        <p className="text-gray-600 text-[10px] mt-1">Used for Outreach Generator + Prospecting. Set via OPENAI_API_KEY env var.</p>
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">Google Places API</label>
                                        <input type="password" placeholder="Enter API Key" className={"max-w-sm " + inp} />
                                        <p className="text-gray-600 text-[10px] mt-1">Used for AI Prospecting. Set via GOOGLE_PLACES_API_KEY env var.</p>
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">SMTP Email</label>
                                        <input type="password" placeholder="Enter SMTP Host" className={"max-w-sm " + inp} />
                                        <p className="text-gray-600 text-[10px] mt-1">Set via SMTP_HOST, SMTP_USER, SMTP_PASS env vars. Per-user password is in My Profile.</p>
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
