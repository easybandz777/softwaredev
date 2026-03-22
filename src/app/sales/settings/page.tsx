"use client";

import React, { useState, useEffect } from "react";
import { SalesLayout } from "@/components/SalesLayout";
import { Users, Bot, Key, UserCircle, Save, Plus, Trash2, Loader2 } from "lucide-react";

interface UserInfo { id: number; username: string; full_name: string; role: string; }

export default function SettingsPage() {
    const [user, setUser] = useState<UserInfo | null>(null);
    const [activeTab, setActiveTab] = useState("rules");
    const [loading, setLoading] = useState(true);
    const [rules, setRules] = useState([
        { id: 1, niche: "All Niches", step: "First Touchpoint", tone: "Direct, problem-focused", maxSentences: 5, cta: "10-min chat" },
        { id: 2, niche: "Industrial Supply", step: "First Touchpoint", tone: "Consultative, ROI-focused", maxSentences: 4, cta: "Send a case study" },
        { id: 3, niche: "All Niches", step: "Follow-up 1", tone: "Helpful, nudging", maxSentences: 3, cta: "Any thoughts?" },
    ]);

    useEffect(() => {
        fetch("/api/sales/me", { credentials: "include" })
            .then(r => { if (!r.ok) { window.location.href = "/sales"; return null; } return r.json(); })
            .then(u => { if (u) setUser(u); setLoading(false); });
    }, []);

    const tabs = [
        { id: "team", label: "Team & Roles", icon: <Users className="w-4 h-4" /> },
        { id: "rules", label: "Prompt Engine", icon: <Bot className="w-4 h-4" /> },
        { id: "api", label: "API Integrations", icon: <Key className="w-4 h-4" /> },
        { id: "profile", label: "My Profile", icon: <UserCircle className="w-4 h-4" /> },
    ];

    if (loading) {
        return (
            <SalesLayout>
                <div className="flex items-center justify-center min-h-[80vh]">
                    <Loader2 className="w-6 h-6 text-emerald-400 animate-spin" />
                </div>
            </SalesLayout>
        );
    }

    return (
        <SalesLayout user={user}>
            <header className="hidden md:flex sticky top-0 z-10 items-center px-8 py-4" style={{
                background: "rgba(8,13,24,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>
                <div>
                    <h1 className="text-xl font-bold text-white">Settings</h1>
                    <p className="text-gray-500 text-xs mt-0.5">Manage your team, LLM prompt rules, and integrations.</p>
                </div>
            </header>

            <div className="px-4 md:px-8 py-6 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start">
                    <div className="space-y-1">
                        {tabs.map(tab => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all"
                                style={{
                                    color: activeTab === tab.id ? "#34d399" : "#9ca3af",
                                    background: activeTab === tab.id ? "rgba(52,211,153,0.08)" : "transparent",
                                }}>
                                {tab.icon} {tab.label}
                            </button>
                        ))}
                    </div>

                    <div>
                        {activeTab === "team" && (
                            <div className="rounded-xl p-6" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                <h3 className="text-sm font-semibold text-white mb-4">Team Management</h3>
                                <p className="text-gray-500 text-xs mb-4">Manage sales reps, managers, and admin access. Use the admin dashboard to add/remove team members.</p>
                                <p className="text-xs text-gray-600">Logged in as: <strong className="text-white">{user?.full_name || user?.username}</strong> ({user?.role})</p>
                            </div>
                        )}

                        {activeTab === "rules" && (
                            <div className="space-y-4">
                                <div className="flex items-center justify-between mb-2">
                                    <div>
                                        <h3 className="text-sm font-semibold text-white">System Prompt Templates</h3>
                                        <p className="text-gray-500 text-xs mt-0.5">Configure rules that the LLM uses to generate outreach sequences.</p>
                                    </div>
                                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
                                        style={{ background: "linear-gradient(135deg, #059669, #34d399)", color: "white" }}
                                        onClick={() => setRules(prev => [...prev, { id: Date.now(), niche: "All Niches", step: "First Touchpoint", tone: "", maxSentences: 5, cta: "" }])}>
                                        <Plus className="w-3 h-3" /> Add Rule
                                    </button>
                                </div>
                                {rules.map((rule) => (
                                    <div key={rule.id} className="rounded-xl p-5" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                                            <div>
                                                <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1">Target Niche</label>
                                                <select defaultValue={rule.niche}
                                                    className="w-full text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-emerald-400/40">
                                                    <option>All Niches</option><option>Apparel & Uniforms</option><option>Industrial Supply</option><option>Manufacturing</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1">Sequence Step</label>
                                                <select defaultValue={rule.step}
                                                    className="w-full text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-emerald-400/40">
                                                    <option>First Touchpoint</option><option>Follow-up 1</option><option>Follow-up 2</option><option>Breakup Message</option>
                                                </select>
                                            </div>
                                            <div className="flex items-end justify-end">
                                                <button onClick={() => setRules(prev => prev.filter(r => r.id !== rule.id))}
                                                    className="p-1.5 rounded-lg text-gray-600 hover:text-rose-400 hover:bg-rose-400/5 transition-all">
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1">Tone & Guidelines</label>
                                            <textarea rows={3}
                                                defaultValue={`Write in a ${rule.tone.toLowerCase()} tone. Keep it under ${rule.maxSentences} sentences. Must end with CTA: '${rule.cta}'. Do NOT use generic pleasantries.`}
                                                className="w-full text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-emerald-400/40 resize-none font-mono" />
                                        </div>
                                    </div>
                                ))}
                                <div className="flex justify-end mt-4">
                                    <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold"
                                        style={{ background: "linear-gradient(135deg, #059669, #34d399)", color: "white" }}>
                                        <Save className="w-3.5 h-3.5" /> Save All Changes
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === "api" && (
                            <div className="rounded-xl p-6" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                <h3 className="text-sm font-semibold text-white mb-5">API Integrations</h3>
                                <div className="space-y-5">
                                    <div>
                                        <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">LLM Provider (OpenAI)</label>
                                        <input type="password" defaultValue="sk-proj-xxxxxxxx" className="w-full max-w-sm text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-emerald-400/40" />
                                        <p className="text-gray-600 text-[10px] mt-1">Used for the Outreach Generator. Set via OPENAI_API_KEY env var.</p>
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">Google Places API</label>
                                        <input type="password" placeholder="Enter API Key" className="w-full max-w-sm text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-emerald-400/40" />
                                        <p className="text-gray-600 text-[10px] mt-1">Used for AI Prospecting. Set via GOOGLE_PLACES_API_KEY env var.</p>
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1.5">SMTP Email</label>
                                        <input type="password" placeholder="Enter SMTP Host" className="w-full max-w-sm text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-emerald-400/40" />
                                        <p className="text-gray-600 text-[10px] mt-1">Used for sending outreach emails. Set via SMTP_HOST, SMTP_USER, SMTP_PASS env vars.</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "profile" && (
                            <div className="rounded-xl p-6" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                <h3 className="text-sm font-semibold text-white mb-3">My Profile</h3>
                                <div className="space-y-3">
                                    <div>
                                        <span className="text-[10px] uppercase tracking-wider text-gray-600 block">Username</span>
                                        <p className="text-sm text-gray-300">{user?.username}</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-wider text-gray-600 block">Full Name</span>
                                        <p className="text-sm text-gray-300">{user?.full_name}</p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] uppercase tracking-wider text-gray-600 block">Role</span>
                                        <p className="text-sm text-gray-300 capitalize">{user?.role}</p>
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
