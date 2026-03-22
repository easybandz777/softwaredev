"use client";

import React, { useState, useEffect } from "react";
import { SalesLayout } from "@/components/SalesLayout";
import {
    Sparkles, RefreshCw, Mail, MapPin, Building, Globe, FileText,
    AlertTriangle, Copy, Check, Send, Loader2, CheckCircle, Briefcase, User
} from "lucide-react";

interface UserInfo { id: number; username: string; full_name: string; role: string; }
interface Lead {
    id: number; name: string; email: string; phone: string | null;
    company: string | null; service: string; message: string;
    website?: string; location?: string; analysis_data?: string; solutions?: string;
    entity_type?: string; job_title?: string;
}

export default function OutreachPage() {
    const [user, setUser] = useState<UserInfo | null>(null);
    const [leads, setLeads] = useState<Lead[]>([]);
    const [loadingLeads, setLoadingLeads] = useState(true);
    const [selectedLeadId, setSelectedLeadId] = useState<number | "">("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [emailCopy, setEmailCopy] = useState("");
    const [subjectLine, setSubjectLine] = useState("");
    const [genError, setGenError] = useState("");
    const [tokensUsed, setTokensUsed] = useState(0);
    const [copied, setCopied] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const [sendResult, setSendResult] = useState<{ type: string; message: string } | null>(null);
    const [showSendConfirm, setShowSendConfirm] = useState(false);

    useEffect(() => {
        async function load() {
            try {
                const [leadsRes, meRes] = await Promise.all([
                    fetch("/api/sales/leads", { credentials: "include" }),
                    fetch("/api/sales/me", { credentials: "include" }),
                ]);
                if (leadsRes.status === 401 || meRes.status === 401) { window.location.href = "/sales"; return; }
                const data = await leadsRes.json();
                setLeads(data);
                if (data.length > 0) setSelectedLeadId(data[0].id);
                if (meRes.ok) setUser(await meRes.json());
            } catch (err) { console.error(err); }
            finally { setLoadingLeads(false); }
        }
        load();
    }, []);

    const lead = leads.find(l => l.id === selectedLeadId);
    const isPersonLead = lead?.entity_type === "person";

    function handleLeadChange(newId: number) {
        setSelectedLeadId(newId);
        setSubjectLine(""); setEmailCopy(""); setGenError(""); setTokensUsed(0);
        setSendResult(null); setShowSendConfirm(false);
    }

    async function handleGenerate() {
        if (!lead) return;
        setIsGenerating(true); setGenError("");
        try {
            let analysisData = {};
            let solutions: string[] = [];
            try { if (lead.analysis_data) analysisData = JSON.parse(lead.analysis_data); } catch {}
            try { if (lead.solutions) solutions = JSON.parse(lead.solutions); } catch {}

            const res = await fetch("/api/sales/generate-outreach", {
                method: "POST", headers: { "Content-Type": "application/json" }, credentials: "include",
                body: JSON.stringify({
                    lead: {
                        companyName: lead.company || lead.name,
                        contactName: lead.name,
                        niche: lead.service,
                        location: lead.location,
                        website: lead.website,
                        notes: lead.message,
                        email: lead.email,
                        analysisData: analysisData,
                        solutions: solutions,
                        entityType: lead.entity_type || "organization",
                        jobTitle: lead.job_title,
                        employer: lead.company,
                    },
                }),
            });
            const data = await res.json();
            if (data.success) {
                setSubjectLine(data.subject || ""); setEmailCopy(data.content || ""); setTokensUsed(data.tokensUsed || 0);
            } else { setGenError(data.error || "Failed to generate email"); }
        } catch (err: unknown) { setGenError(err instanceof Error ? err.message : "Error"); }
        finally { setIsGenerating(false); }
    }

    function handleCopy() {
        navigator.clipboard.writeText(`Subject: ${subjectLine}\n\n${emailCopy}`);
        setCopied(true); setTimeout(() => setCopied(false), 2000);
    }

    async function handleSend() {
        if (!lead?.email || !subjectLine || !emailCopy) return;
        setIsSending(true); setSendResult(null); setShowSendConfirm(false);
        try {
            const res = await fetch("/api/sales/send-email", {
                method: "POST", headers: { "Content-Type": "application/json" }, credentials: "include",
                body: JSON.stringify({ to: lead.email, subject: subjectLine, body: emailCopy, leadId: lead.id }),
            });
            const data = await res.json();
            if (data.success) { setSendResult({ type: "success", message: `Sent to ${lead.email}` }); }
            else { setSendResult({ type: "error", message: data.error || "Failed to send" }); }
        } catch (err: unknown) { setSendResult({ type: "error", message: err instanceof Error ? err.message : "Error" }); }
        finally { setIsSending(false); }
    }

    const hasContent = subjectLine || emailCopy;
    const canSend = hasContent && lead?.email && !isSending && !isGenerating;

    function getLeadDisplayLabel(l: Lead) {
        if (l.entity_type === "person") {
            return l.company ? `${l.name} — ${l.company}` : l.name;
        }
        return l.company ? `${l.company} — ${l.name}` : l.name;
    }

    return (
        <SalesLayout user={user}>
            <header className="hidden md:flex sticky top-0 z-10 items-center justify-between px-8 py-4" style={{
                background: "rgba(8,13,24,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>
                <div>
                    <h1 className="text-xl font-bold text-white">Outreach Generator</h1>
                    <p className="text-gray-500 text-xs mt-0.5">Select a saved lead or contact, review their context, then generate a personalized email.</p>
                </div>
            </header>

            <div className="px-4 md:px-8 py-6 max-w-6xl mx-auto">
                {loadingLeads ? (
                    <div className="rounded-2xl p-8 text-center" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                        <Loader2 className="w-6 h-6 text-emerald-400 animate-spin mx-auto" />
                        <p className="text-gray-500 text-sm mt-3">Loading your saved leads...</p>
                    </div>
                ) : leads.length === 0 ? (
                    <div className="rounded-2xl p-12 text-center" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                        <Mail className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                        <h3 className="text-white font-semibold mb-2">No leads saved yet</h3>
                        <p className="text-gray-500 text-sm max-w-sm mx-auto mb-6">Use the Lead Search tool to find and save leads first.</p>
                        <a href="/sales/prospecting" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white"
                            style={{ background: "linear-gradient(135deg, #8b5cf6, #3b82f6)" }}>
                            <Sparkles className="w-4 h-4" /> Find Leads
                        </a>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 items-start">
                        <div>
                            <div className="rounded-xl p-4 mb-4" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                <label className="text-[10px] uppercase tracking-wider text-gray-600 font-semibold block mb-2">Select Lead</label>
                                <select value={selectedLeadId} onChange={e => handleLeadChange(Number(e.target.value))}
                                    className="w-full text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-emerald-400/40">
                                    {leads.map(l => <option key={l.id} value={l.id}>{getLeadDisplayLabel(l)}</option>)}
                                </select>
                            </div>
                            {lead && (
                                <div className="rounded-xl p-4" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)" }}>
                                    <div className="flex items-center gap-2 mb-3">
                                        {isPersonLead ? <User className="w-3.5 h-3.5 text-purple-400" /> : <Building className="w-3.5 h-3.5 text-indigo-400" />}
                                        <h3 className="text-sm font-semibold text-white">{isPersonLead ? "Contact" : "Lead"} Context</h3>
                                        <span className="text-[9px] px-1.5 py-0.5 rounded-full font-semibold uppercase tracking-wider" style={{
                                            background: isPersonLead ? "rgba(168,85,247,0.15)" : "rgba(99,102,241,0.15)",
                                            color: isPersonLead ? "#c084fc" : "#818cf8",
                                        }}>{isPersonLead ? "Person" : "Organization"}</span>
                                    </div>
                                    <div className="space-y-2 text-xs">
                                        {isPersonLead && lead.name && <div className="flex items-center gap-2 text-gray-400"><User className="w-3 h-3 text-gray-600" /> {lead.name}</div>}
                                        {isPersonLead && lead.job_title && <div className="flex items-center gap-2 text-gray-400"><Briefcase className="w-3 h-3 text-gray-600" /> {lead.job_title}</div>}
                                        {lead.company && <div className="flex items-center gap-2 text-gray-400"><Building className="w-3 h-3 text-gray-600" /> {lead.company}</div>}
                                        {lead.location && <div className="flex items-center gap-2 text-gray-400"><MapPin className="w-3 h-3 text-gray-600" /> {lead.location}</div>}
                                        {lead.email && <div className="flex items-center gap-2 text-gray-400"><Mail className="w-3 h-3 text-gray-600" /> {lead.email}</div>}
                                        {!lead.email && <div className="flex items-center gap-2 text-gray-600 opacity-60"><Mail className="w-3 h-3" /> No email on file</div>}
                                        {lead.website && (
                                            <div className="flex items-center gap-2">
                                                <Globe className="w-3 h-3 text-gray-600" />
                                                <a href={lead.website} target="_blank" rel="noopener noreferrer" className="text-blue-400 truncate hover:underline">{lead.website.replace(/^https?:\/\/(www\.)?/, "")}</a>
                                            </div>
                                        )}
                                        {lead.message && (
                                            <div className="mt-2 p-2 rounded-lg bg-white/[0.02] text-gray-500">
                                                <FileText className="w-3 h-3 text-gray-600 inline mr-1.5" />
                                                {lead.message.length > 200 ? lead.message.substring(0, 200) + "..." : lead.message}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="rounded-xl p-6 flex flex-col" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(255,255,255,0.05)", minHeight: 500 }}>
                            <div className="flex items-center justify-between mb-5">
                                <div>
                                    <h3 className="text-base font-semibold text-white">{hasContent ? "Generated Email" : "Email Composer"}</h3>
                                    {lead && (
                                        <p className="text-gray-500 text-xs mt-0.5">
                                            To: {lead.name}{lead.company ? ` at ${lead.company}` : ""}
                                        </p>
                                    )}
                                </div>
                                <button onClick={handleGenerate} disabled={isGenerating || !lead}
                                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white disabled:opacity-50"
                                    style={{ background: "#8b5cf6" }}>
                                    {isGenerating ? <RefreshCw className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
                                    {isGenerating ? "Generating..." : hasContent ? "Regenerate" : "Generate Email"}
                                </button>
                            </div>

                            {genError && (
                                <div className="rounded-lg p-3 mb-4" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
                                    <AlertTriangle className="w-3.5 h-3.5 text-rose-400 inline mr-1.5" /><span className="text-xs text-rose-400">{genError}</span>
                                </div>
                            )}

                            <div className="flex-1 flex flex-col">
                                <label className="text-[10px] uppercase tracking-wider text-gray-600 font-semibold mb-1.5">Subject Line</label>
                                <input type="text" value={subjectLine} onChange={e => setSubjectLine(e.target.value)} readOnly={isGenerating}
                                    placeholder={isGenerating ? "Generating..." : "Click Generate to create a subject line"}
                                    className="w-full mb-4 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/40" />
                                <label className="text-[10px] uppercase tracking-wider text-gray-600 font-semibold mb-1.5">Message Body</label>
                                <textarea value={emailCopy} onChange={e => setEmailCopy(e.target.value)} readOnly={isGenerating}
                                    placeholder={isGenerating ? "Generating personalized email..." : "Click Generate to write a personalized outreach email."}
                                    className="w-full flex-1 min-h-[250px] resize-y bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/40 leading-relaxed" />
                            </div>

                            {sendResult && (
                                <div className="mt-4 rounded-lg p-3 flex items-center gap-2 text-xs" style={{
                                    background: sendResult.type === "success" ? "rgba(16,185,129,0.08)" : "rgba(239,68,68,0.08)",
                                    border: `1px solid ${sendResult.type === "success" ? "rgba(16,185,129,0.2)" : "rgba(239,68,68,0.2)"}`,
                                }}>
                                    {sendResult.type === "success" ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <AlertTriangle className="w-4 h-4 text-rose-400" />}
                                    <span style={{ color: sendResult.type === "success" ? "#34d399" : "#f87171" }}>{sendResult.message}</span>
                                </div>
                            )}

                            {showSendConfirm && (
                                <div className="mt-4 rounded-lg p-4" style={{ background: "#1a1f2e", border: "1px solid rgba(59,130,246,0.2)" }}>
                                    <p className="text-sm font-semibold text-white mb-1">Send this email?</p>
                                    <p className="text-xs text-gray-400 mb-3">To: <strong>{lead?.email}</strong>{lead?.company ? ` (${lead.company})` : ""}</p>
                                    <div className="flex gap-2 justify-end">
                                        <button onClick={() => setShowSendConfirm(false)} className="px-3 py-1.5 rounded-lg text-xs bg-white/5 text-gray-300 border border-white/10">Cancel</button>
                                        <button onClick={handleSend} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
                                            style={{ background: "#10b981" }}>
                                            <Send className="w-3 h-3" /> Yes, Send It
                                        </button>
                                    </div>
                                </div>
                            )}

                            {hasContent && !showSendConfirm && (
                                <div className="mt-4 flex items-center justify-between pt-4 border-t border-white/5">
                                    <span className="text-xs text-gray-600">{tokensUsed > 0 && `${tokensUsed} tokens used`}</span>
                                    <div className="flex gap-2">
                                        <button onClick={handleCopy} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-white/5 text-gray-300 border border-white/10">
                                            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />} {copied ? "Copied!" : "Copy"}
                                        </button>
                                        {canSend ? (
                                            <button onClick={() => { setSendResult(null); setShowSendConfirm(true); }} disabled={isSending}
                                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white disabled:opacity-50"
                                                style={{ background: "#10b981" }}>
                                                {isSending ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Send className="w-3.5 h-3.5" />}
                                                {isSending ? "Sending..." : "Send Email"}
                                            </button>
                                        ) : !lead?.email && <span className="text-xs text-gray-600 self-center">No email address on this lead</span>}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </SalesLayout>
    );
}
