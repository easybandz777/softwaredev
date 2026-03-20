"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { useRouter, useParams } from "next/navigation";
import {
    ArrowLeft, Mail, Phone, Calendar, UserCheck,
    Upload, Play, Pause, Download, Trash2, FileAudio,
    Music, Edit3, Check, X, Plus,
    Briefcase, MessageSquare, Link2, DollarSign, Clock, Building2,
    Paperclip, Image as ImageIcon, FileText, File, Film,
} from "lucide-react";
import type { Client, ClientRecording, ClientNote, ClientProject, ClientFile } from "@/lib/db";
import { SalesLayout } from "@/components/SalesLayout";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmtDate(s: string) {
    return new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}
function fmtCurrency(n: number) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}
function fmtFileSize(bytes: number) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function timeAgo(s: string) {
    const diff = Date.now() - new Date(s).getTime();
    const mins = Math.floor(diff / 60000);
    if (mins < 60) return `${mins}m ago`;
    const hours = Math.floor(mins / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    return `${days}d ago`;
}

// ─── Editable Field ──────────────────────────────────────────────────────────

function EditableField({ label, value, icon, type, onSave }: {
    label: string; value: string; icon: React.ReactNode; type?: string;
    onSave: (v: string) => void;
}) {
    const [editing, setEditing] = useState(false);
    const [draft, setDraft] = useState(value);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => { if (editing) inputRef.current?.focus(); }, [editing]);

    function save() { onSave(draft); setEditing(false); }
    function cancel() { setDraft(value); setEditing(false); }

    return (
        <div className="rounded-xl p-4" style={{
            background: "linear-gradient(145deg, #0d1526, #0a1020)",
            border: "1px solid rgba(255,255,255,0.05)",
        }}>
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                    {icon}
                    <span className="text-[10px] uppercase tracking-wider text-gray-600">{label}</span>
                </div>
                {!editing && (
                    <button onClick={() => setEditing(true)} className="text-gray-600 hover:text-emerald-400 transition-colors" title="Edit">
                        <Edit3 className="w-3 h-3" />
                    </button>
                )}
            </div>
            {editing ? (
                <div className="flex items-center gap-2">
                    <input ref={inputRef} type={type || "text"} value={draft}
                        onChange={e => setDraft(e.target.value)}
                        onKeyDown={e => { if (e.key === "Enter") save(); if (e.key === "Escape") cancel(); }}
                        className="flex-1 text-sm bg-white/5 border border-emerald-400/30 rounded-lg px-2.5 py-1.5 text-white focus:outline-none" />
                    <button onClick={save} className="p-1.5 rounded-lg bg-emerald-400/10 text-emerald-400 hover:bg-emerald-400/20 transition-all" title="Save">
                        <Check className="w-3.5 h-3.5" />
                    </button>
                    <button onClick={cancel} className="p-1.5 rounded-lg bg-white/5 text-gray-500 hover:text-white transition-all" title="Cancel">
                        <X className="w-3.5 h-3.5" />
                    </button>
                </div>
            ) : (
                type === "email" ? (
                    <a href={`mailto:${value}`} className="text-sm text-sky-400 hover:underline truncate block">{value || "—"}</a>
                ) : (
                    <span className="text-sm text-gray-300 truncate block">{value || "—"}</span>
                )
            )}
        </div>
    );
}

// ─── Audio Player ────────────────────────────────────────────────────────────

function AudioPlayer({ src }: { src: string }) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    function toggle() {
        if (!audioRef.current) return;
        if (playing) audioRef.current.pause(); else audioRef.current.play();
        setPlaying(!playing);
    }
    function fmtTime(secs: number) { const m = Math.floor(secs / 60); const s = Math.floor(secs % 60); return `${m}:${s.toString().padStart(2, "0")}`; }

    return (
        <div className="flex items-center gap-3 mt-2">
            <audio ref={audioRef} src={src}
                onTimeUpdate={() => audioRef.current && setProgress(audioRef.current.currentTime)}
                onLoadedMetadata={() => audioRef.current && setDuration(audioRef.current.duration)}
                onEnded={() => setPlaying(false)} preload="metadata" />
            <button onClick={toggle}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0"
                style={{ background: playing ? "rgba(52,211,153,0.15)" : "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.25)" }}
                title={playing ? "Pause" : "Play"}>
                {playing ? <Pause className="w-3.5 h-3.5 text-emerald-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400 ml-0.5" />}
            </button>
            <div className="flex-1 flex items-center gap-2">
                <span className="text-[10px] text-gray-500 font-mono w-8 text-right">{fmtTime(progress)}</span>
                <div className="flex-1 h-1.5 rounded-full cursor-pointer relative" style={{ background: "rgba(255,255,255,0.06)" }}
                    onClick={e => { if (!audioRef.current || !duration) return; const rect = e.currentTarget.getBoundingClientRect(); audioRef.current.currentTime = ((e.clientX - rect.left) / rect.width) * duration; }}>
                    <div className="absolute inset-y-0 left-0 rounded-full transition-all"
                        style={{ width: duration ? `${(progress / duration) * 100}%` : "0%", background: "linear-gradient(90deg, #059669, #34d399)" }} />
                </div>
                <span className="text-[10px] text-gray-500 font-mono w-8">{fmtTime(duration)}</span>
            </div>
        </div>
    );
}

// ─── Status configs ──────────────────────────────────────────────────────────

const PROJECT_STATUS: Record<string, { label: string; color: string; bg: string }> = {
    planning: { label: "Planning", color: "#a78bfa", bg: "rgba(167,139,250,0.1)" },
    active: { label: "Active", color: "#34d399", bg: "rgba(52,211,153,0.1)" },
    completed: { label: "Completed", color: "#38bdf8", bg: "rgba(56,189,248,0.1)" },
    "on-hold": { label: "On Hold", color: "#fbbf24", bg: "rgba(251,191,36,0.1)" },
};

interface SalesUser { id: number; username: string; full_name: string; }

// ─── Client Detail Page ──────────────────────────────────────────────────────

type Tab = "overview" | "projects" | "notes" | "files" | "recordings";

// File type helpers
function getFileIcon(type: string) {
    if (type.startsWith("image/")) return <ImageIcon className="w-4 h-4" />;
    if (type === "application/pdf") return <FileText className="w-4 h-4" />;
    if (type.startsWith("audio/")) return <FileAudio className="w-4 h-4" />;
    if (type.startsWith("video/")) return <Film className="w-4 h-4" />;
    return <File className="w-4 h-4" />;
}
function getFileColor(type: string) {
    if (type.startsWith("image/")) return { color: "#38bdf8", bg: "rgba(56,189,248,0.1)", border: "rgba(56,189,248,0.2)" };
    if (type === "application/pdf") return { color: "#f87171", bg: "rgba(248,113,113,0.1)", border: "rgba(248,113,113,0.2)" };
    if (type.startsWith("audio/")) return { color: "#34d399", bg: "rgba(52,211,153,0.1)", border: "rgba(52,211,153,0.2)" };
    if (type.startsWith("video/")) return { color: "#a78bfa", bg: "rgba(167,139,250,0.1)", border: "rgba(167,139,250,0.2)" };
    return { color: "#94a3b8", bg: "rgba(148,163,184,0.1)", border: "rgba(148,163,184,0.2)" };
}

export default function ClientDetailPage() {
    const router = useRouter();
    const params = useParams();
    const clientId = params?.id as string;

    const [client, setClient] = useState<Client | null>(null);
    const [recordings, setRecordings] = useState<ClientRecording[]>([]);
    const [notes, setNotes] = useState<ClientNote[]>([]);
    const [projects, setProjects] = useState<ClientProject[]>([]);
    const [files, setFiles] = useState<ClientFile[]>([]);
    const [salesUsers, setSalesUsers] = useState<SalesUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [tab, setTab] = useState<Tab>("overview");

    // Upload state (recordings)
    const [uploading, setUploading] = useState(false);
    const [uploadNotes, setUploadNotes] = useState("");
    const [dragOver, setDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // File upload state
    const [fileUploading, setFileUploading] = useState(false);
    const [fileDragOver, setFileDragOver] = useState(false);
    const [fileNotes, setFileNotes] = useState("");
    const [fileProjectId, setFileProjectId] = useState("");
    const [fileFilter, setFileFilter] = useState("");
    const fileInputRef2 = useRef<HTMLInputElement>(null);

    // Note state
    const [noteText, setNoteText] = useState("");
    const [addingNote, setAddingNote] = useState(false);

    // Project state
    const [showNewProject, setShowNewProject] = useState(false);
    const [newProject, setNewProject] = useState({ name: "", description: "", value: "" });
    const [creatingProject, setCreatingProject] = useState(false);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const [clientsRes, recordingsRes, notesRes, projectsRes, filesRes, dashRes] = await Promise.all([
                fetch("/api/sales/clients"),
                fetch(`/api/sales/clients/${clientId}/recordings`),
                fetch(`/api/sales/clients/${clientId}/notes`),
                fetch(`/api/sales/clients/${clientId}/projects`),
                fetch(`/api/sales/clients/${clientId}/files`),
                fetch("/api/sales/dashboard"),
            ]);
            if (clientsRes.status === 401) { router.push("/sales"); return; }

            const allClients: Client[] = await clientsRes.json();
            setClient(allClients.find(c => c.id === parseInt(clientId)) || null);
            setRecordings(await recordingsRes.json());
            setNotes(await notesRes.json());
            setProjects(await projectsRes.json());
            setFiles(await filesRes.json());
            const d = await dashRes.json();
            setSalesUsers(d.salesUsers || []);
        } finally { setLoading(false); }
    }, [clientId, router]);

    useEffect(() => { fetchData(); }, [fetchData]);

    // ─── Client update ───────────────────────────────────────────────────
    async function updateClient(updates: Record<string, unknown>) {
        await fetch("/api/sales/clients", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: parseInt(clientId), ...updates }),
        });
        fetchData();
    }

    // ─── Notes ───────────────────────────────────────────────────────────
    async function addNote(e: React.FormEvent) {
        e.preventDefault();
        if (!noteText.trim()) return;
        setAddingNote(true);
        try {
            await fetch(`/api/sales/clients/${clientId}/notes`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ note_text: noteText }),
            });
            setNoteText("");
            fetchData();
        } finally { setAddingNote(false); }
    }

    // ─── Projects ────────────────────────────────────────────────────────
    async function createProject(e: React.FormEvent) {
        e.preventDefault();
        if (!newProject.name.trim()) return;
        setCreatingProject(true);
        try {
            await fetch(`/api/sales/clients/${clientId}/projects`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: newProject.name,
                    description: newProject.description || null,
                    value: newProject.value ? parseFloat(newProject.value) : null,
                }),
            });
            setNewProject({ name: "", description: "", value: "" });
            setShowNewProject(false);
            fetchData();
        } finally { setCreatingProject(false); }
    }

    async function updateProjectStatus(projectId: number, status: string) {
        await fetch(`/api/sales/clients/${clientId}/projects`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ project_id: projectId, status }),
        });
        fetchData();
    }

    async function deleteProject(projectId: number) {
        if (!confirm("Delete this project?")) return;
        await fetch(`/api/sales/clients/${clientId}/projects?project_id=${projectId}`, { method: "DELETE" });
        fetchData();
    }

    // ─── Recordings ──────────────────────────────────────────────────────
    async function uploadRecording(file: File) {
        setUploading(true);
        try {
            const formData = new FormData();
            formData.append("file", file);
            if (uploadNotes.trim()) formData.append("notes", uploadNotes.trim());
            await fetch(`/api/sales/clients/${clientId}/recordings`, { method: "POST", body: formData });
            setUploadNotes("");
            fetchData();
        } finally { setUploading(false); }
    }
    function handleRecSelect(e: React.ChangeEvent<HTMLInputElement>) { const file = e.target.files?.[0]; if (file) uploadRecording(file); e.target.value = ""; }
    function handleRecDrop(e: React.DragEvent) { e.preventDefault(); setDragOver(false); const file = e.dataTransfer.files?.[0]; if (file) uploadRecording(file); }
    async function deleteRecording(recordingId: number) {
        if (!confirm("Delete this recording?")) return;
        await fetch(`/api/sales/clients/${clientId}/recordings?recordingId=${recordingId}`, { method: "DELETE" });
        fetchData();
    }

    // ─── Files ────────────────────────────────────────────────────────────
    async function uploadClientFile(fileObj: File) {
        setFileUploading(true);
        try {
            const formData = new FormData();
            formData.append("file", fileObj);
            if (fileNotes.trim()) formData.append("notes", fileNotes.trim());
            if (fileProjectId) formData.append("project_id", fileProjectId);
            await fetch(`/api/sales/clients/${clientId}/files`, { method: "POST", body: formData });
            setFileNotes("");
            fetchData();
        } finally { setFileUploading(false); }
    }
    function handleFileSelect2(e: React.ChangeEvent<HTMLInputElement>) {
        const fl = e.target.files;
        if (fl) { Array.from(fl).forEach(f => uploadClientFile(f)); }
        e.target.value = "";
    }
    function handleFileDrop2(e: React.DragEvent) {
        e.preventDefault(); setFileDragOver(false);
        const fl = e.dataTransfer.files;
        if (fl) { Array.from(fl).forEach(f => uploadClientFile(f)); }
    }
    async function deleteClientFile(fileId: number) {
        if (!confirm("Delete this file?")) return;
        await fetch(`/api/sales/clients/${clientId}/files?file_id=${fileId}`, { method: "DELETE" });
        fetchData();
    }

    const filteredFiles = fileFilter
        ? files.filter(f => f.project_id === parseInt(fileFilter))
        : files;

    // ─── Loading / Not found ─────────────────────────────────────────────
    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen" style={{ background: "#080d18" }}>
                <div className="text-gray-500 text-sm animate-pulse">Loading client…</div>
            </div>
        );
    }
    if (!client) {
        return (
            <div className="flex items-center justify-center min-h-screen" style={{ background: "#080d18" }}>
                <div className="text-center">
                    <p className="text-gray-500 text-sm mb-4">Client not found.</p>
                    <button onClick={() => router.push("/sales/clients")} className="text-emerald-400 text-sm hover:underline">← Back to Clients</button>
                </div>
            </div>
        );
    }

    // ─── Tab config ──────────────────────────────────────────────────────
    const tabs: { key: Tab; label: string; icon: React.ReactNode; count?: number }[] = [
        { key: "overview", label: "Overview", icon: <Building2 className="w-3.5 h-3.5" /> },
        { key: "projects", label: "Projects", icon: <Briefcase className="w-3.5 h-3.5" />, count: projects.length },
        { key: "files", label: "Files", icon: <Paperclip className="w-3.5 h-3.5" />, count: files.length },
        { key: "notes", label: "Notes", icon: <MessageSquare className="w-3.5 h-3.5" />, count: notes.length },
        { key: "recordings", label: "Recordings", icon: <Music className="w-3.5 h-3.5" />, count: recordings.length },
    ];

    return (
        <SalesLayout>
            {/* Desktop Header */}
            <header className="hidden md:flex sticky top-0 z-10 items-center justify-between px-8 py-4" style={{
                background: "rgba(8,13,24,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>
                <div className="flex items-center gap-4">
                    <button onClick={() => router.push("/sales/clients")} className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all" title="Back">
                        <ArrowLeft className="w-4 h-4" />
                    </button>
                    <div>
                        <h1 className="text-xl font-bold text-white">{client.company_name}</h1>
                        <p className="text-gray-500 text-xs">{client.primary_contact}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={() => router.push(`/sales/invoices?client=${encodeURIComponent(client.company_name)}&email=${encodeURIComponent(client.email || "")}`)}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                        style={{ background: "rgba(56,189,248,0.1)", color: "#38bdf8", border: "1px solid rgba(56,189,248,0.2)" }}>
                        <FileText className="w-3.5 h-3.5" /> Generate Invoice
                    </button>
                    <button onClick={() => updateClient({ status: client.status === "active" ? "inactive" : "active" })}
                        className="px-3 py-1.5 rounded-full text-[10px] font-semibold transition-all"
                        style={{
                            color: client.status === "active" ? "#34d399" : "#6b7280",
                            background: client.status === "active" ? "rgba(52,211,153,0.1)" : "rgba(107,114,128,0.1)",
                        }}>
                        {client.status === "active" ? "● Active" : "● Inactive"}
                    </button>
                </div>
            </header>

            {/* Mobile Header */}
            <div className="md:hidden px-4 py-3 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 min-w-0">
                        <button onClick={() => router.push("/sales/clients")} className="p-1.5 rounded-lg text-gray-500 hover:text-white transition-all flex-shrink-0" title="Back">
                            <ArrowLeft className="w-4 h-4" />
                        </button>
                        <div className="min-w-0">
                            <h1 className="text-base font-bold text-white truncate">{client.company_name}</h1>
                            <p className="text-gray-500 text-[11px] truncate">{client.primary_contact}</p>
                        </div>
                    </div>
                    <button onClick={() => updateClient({ status: client.status === "active" ? "inactive" : "active" })}
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold flex-shrink-0 ml-2"
                        style={{
                            color: client.status === "active" ? "#34d399" : "#6b7280",
                            background: client.status === "active" ? "rgba(52,211,153,0.1)" : "rgba(107,114,128,0.1)",
                        }}>
                        {client.status === "active" ? "● Active" : "● Inactive"}
                    </button>
                </div>
            </div>

            {/* Tabs — scrollable on mobile */}
            <div className="px-4 md:px-8 pt-3 md:pt-4 pb-0 flex items-center gap-1 overflow-x-auto" style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                {tabs.map(t => (
                    <button key={t.key} onClick={() => setTab(t.key)}
                        className="flex items-center gap-1.5 px-3 md:px-4 py-2.5 text-xs font-medium transition-all relative whitespace-nowrap flex-shrink-0"
                        style={{
                            color: tab === t.key ? "#34d399" : "#6b7280",
                            borderBottom: tab === t.key ? "2px solid #34d399" : "2px solid transparent",
                            marginBottom: "-1px",
                        }}>
                        {t.icon} {t.label}
                        {t.count !== undefined && t.count > 0 && (
                            <span className="ml-1 px-1.5 py-0.5 rounded-full text-[9px] font-bold" style={{
                                background: tab === t.key ? "rgba(52,211,153,0.15)" : "rgba(255,255,255,0.05)",
                                color: tab === t.key ? "#34d399" : "#6b7280",
                            }}>{t.count}</span>
                        )}
                    </button>
                ))}
            </div>

            <div className="max-w-5xl mx-auto px-4 md:px-8 py-6 md:py-8">

                {/* ═══════════════════ OVERVIEW TAB ═══════════════════ */}
                {tab === "overview" && (
                    <div className="space-y-6">
                        {/* Contact info — editable */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <EditableField label="Company" value={client.company_name}
                                icon={<Building2 className="w-3.5 h-3.5 text-emerald-400" />}
                                onSave={v => updateClient({ company_name: v })} />
                            <EditableField label="Primary Contact" value={client.primary_contact}
                                icon={<UserCheck className="w-3.5 h-3.5 text-violet-400" />}
                                onSave={v => updateClient({ primary_contact: v })} />
                            <EditableField label="Email" value={client.email} type="email"
                                icon={<Mail className="w-3.5 h-3.5 text-sky-400" />}
                                onSave={v => updateClient({ email: v })} />
                            <EditableField label="Phone" value={client.phone || ""}
                                icon={<Phone className="w-3.5 h-3.5 text-amber-400" />}
                                onSave={v => updateClient({ phone: v })} />
                            <div className="rounded-xl p-4" style={{
                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}>
                                <div className="flex items-center gap-2 mb-2">
                                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                                    <span className="text-[10px] uppercase tracking-wider text-gray-600">Client Since</span>
                                </div>
                                <span className="text-sm text-gray-300">{fmtDate(client.created_at)}</span>
                            </div>
                        </div>

                        {/* Assign sales rep */}
                        <div className="rounded-xl p-5" style={{
                            background: "linear-gradient(145deg, #0d1526, #0a1020)",
                            border: "1px solid rgba(255,255,255,0.05)",
                        }}>
                            <div className="flex items-center gap-2 mb-3">
                                <UserCheck className="w-4 h-4 text-emerald-400" />
                                <span className="text-sm font-semibold text-white">Assigned Sales Rep</span>
                            </div>
                            <select
                                value={client.assigned_to_id ?? ""}
                                onChange={e => updateClient({ assigned_to_id: e.target.value ? parseInt(e.target.value) : null })}
                                className="w-full max-w-xs text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-emerald-400/40"
                                title="Assigned sales rep"
                            >
                                <option value="">Unassigned</option>
                                {salesUsers.map(u => (
                                    <option key={u.id} value={u.id}>{u.full_name}</option>
                                ))}
                            </select>
                        </div>

                        {/* Linked lead */}
                        {client.converted_from_lead_id && (
                            <div className="rounded-xl p-4 flex items-center gap-3" style={{
                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                border: "1px solid rgba(167,139,250,0.15)",
                            }}>
                                <Link2 className="w-4 h-4 text-violet-400 flex-shrink-0" />
                                <div>
                                    <span className="text-[10px] uppercase tracking-wider text-gray-600 block">Converted from Lead</span>
                                    <button onClick={() => router.push(`/sales/leads/${client.converted_from_lead_id}`)}
                                        className="text-sm text-violet-400 hover:underline">
                                        Lead #{client.converted_from_lead_id} →
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Quick stats */}
                        <div className="grid grid-cols-3 gap-4">
                            <div className="rounded-xl p-4 text-center" style={{
                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}>
                                <Briefcase className="w-5 h-5 text-emerald-400 mx-auto mb-1.5" />
                                <div className="text-lg font-bold text-white">{projects.length}</div>
                                <div className="text-[10px] text-gray-600 uppercase tracking-wider">Projects</div>
                            </div>
                            <div className="rounded-xl p-4 text-center" style={{
                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}>
                                <DollarSign className="w-5 h-5 text-amber-400 mx-auto mb-1.5" />
                                <div className="text-lg font-bold text-white">
                                    {projects.reduce((sum, p) => sum + (p.value || 0), 0) > 0
                                        ? fmtCurrency(projects.reduce((sum, p) => sum + (p.value || 0), 0))
                                        : "—"}
                                </div>
                                <div className="text-[10px] text-gray-600 uppercase tracking-wider">Total Value</div>
                            </div>
                            <div className="rounded-xl p-4 text-center" style={{
                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}>
                                <MessageSquare className="w-5 h-5 text-sky-400 mx-auto mb-1.5" />
                                <div className="text-lg font-bold text-white">{notes.length}</div>
                                <div className="text-[10px] text-gray-600 uppercase tracking-wider">Notes</div>
                            </div>
                        </div>
                    </div>
                )}

                {/* ═══════════════════ PROJECTS TAB ═══════════════════ */}
                {tab === "projects" && (
                    <div className="space-y-4">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-sm font-semibold text-white flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-emerald-400" /> Projects & Jobs
                            </h2>
                            <button onClick={() => setShowNewProject(true)}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all"
                                style={{ background: "linear-gradient(135deg, #059669, #34d399)", color: "white" }}>
                                <Plus className="w-3 h-3" /> New Project
                            </button>
                        </div>

                        {showNewProject && (
                            <div className="rounded-xl p-5" style={{
                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                border: "1px solid rgba(52,211,153,0.15)",
                            }}>
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xs font-semibold text-white">New Project</h3>
                                    <button onClick={() => setShowNewProject(false)} className="text-gray-500 hover:text-white"><X className="w-4 h-4" /></button>
                                </div>
                                <form onSubmit={createProject} className="grid grid-cols-3 gap-3">
                                    <div className="col-span-2">
                                        <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1">Project Name *</label>
                                        <input value={newProject.name} onChange={e => setNewProject(p => ({ ...p, name: e.target.value }))}
                                            className="w-full text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/40"
                                            placeholder="Website Redesign" required />
                                    </div>
                                    <div>
                                        <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1">Value ($)</label>
                                        <input type="number" value={newProject.value} onChange={e => setNewProject(p => ({ ...p, value: e.target.value }))}
                                            className="w-full text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/40"
                                            placeholder="5000" />
                                    </div>
                                    <div className="col-span-3">
                                        <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1">Description</label>
                                        <input value={newProject.description} onChange={e => setNewProject(p => ({ ...p, description: e.target.value }))}
                                            className="w-full text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/40"
                                            placeholder="Optional details…" />
                                    </div>
                                    <div className="col-span-3">
                                        <button type="submit" disabled={creatingProject}
                                            className="px-5 py-2 rounded-lg text-xs font-semibold transition-all disabled:opacity-50"
                                            style={{ background: "linear-gradient(135deg, #059669, #34d399)", color: "white" }}>
                                            {creatingProject ? "Creating…" : "Create Project"}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {projects.length === 0 && !showNewProject && (
                            <div className="py-16 text-center rounded-xl" style={{
                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}>
                                <Briefcase className="w-8 h-8 text-gray-700 mx-auto mb-2" />
                                <p className="text-gray-600 text-sm">No projects yet.</p>
                                <p className="text-gray-700 text-xs mt-1">Track deliverables and service contracts here.</p>
                            </div>
                        )}

                        {projects.map(proj => {
                            const st = PROJECT_STATUS[proj.status] || PROJECT_STATUS.planning;
                            return (
                                <div key={proj.id} className="rounded-xl p-5" style={{
                                    background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                    border: `1px solid ${st.bg}`,
                                }}>
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-sm font-semibold text-white mb-1">{proj.name}</h3>
                                            {proj.description && <p className="text-xs text-gray-500 mb-2">{proj.description}</p>}
                                            <div className="flex items-center gap-4">
                                                {proj.value && (
                                                    <span className="text-xs text-gray-400 flex items-center gap-1">
                                                        <DollarSign className="w-3 h-3" /> {fmtCurrency(proj.value)}
                                                    </span>
                                                )}
                                                <span className="text-xs text-gray-600 flex items-center gap-1">
                                                    <Clock className="w-3 h-3" /> {fmtDate(proj.created_at)}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 ml-4">
                                            <select value={proj.status}
                                                onChange={e => updateProjectStatus(proj.id, e.target.value)}
                                                className="text-xs bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 focus:outline-none focus:border-emerald-400/40"
                                                style={{ color: st.color }}
                                                title="Project status">
                                                {Object.entries(PROJECT_STATUS).map(([k, v]) => (
                                                    <option key={k} value={k}>{v.label}</option>
                                                ))}
                                            </select>
                                            <button onClick={() => deleteProject(proj.id)}
                                                className="p-1.5 rounded-lg text-gray-600 hover:text-rose-400 hover:bg-rose-400/5 transition-all" title="Delete project">
                                                <Trash2 className="w-3.5 h-3.5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

                {/* ═══════════════════ NOTES TAB ═══════════════════ */}
                {tab === "notes" && (
                    <div className="space-y-4">
                        {/* Add note form */}
                        <form onSubmit={addNote} className="rounded-xl p-5" style={{
                            background: "linear-gradient(145deg, #0d1526, #0a1020)",
                            border: "1px solid rgba(52,211,153,0.1)",
                        }}>
                            <h2 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                                <MessageSquare className="w-4 h-4 text-emerald-400" /> Add Note
                            </h2>
                            <textarea value={noteText} onChange={e => setNoteText(e.target.value)}
                                rows={3} placeholder="Add a note about this client…"
                                className="w-full text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/40 resize-none transition-all" />
                            <div className="flex justify-end mt-2">
                                <button type="submit" disabled={addingNote || !noteText.trim()}
                                    className="px-4 py-2 rounded-lg text-xs font-semibold transition-all disabled:opacity-30"
                                    style={{ background: "linear-gradient(135deg, #059669, #34d399)", color: "white" }}>
                                    {addingNote ? "Posting…" : "Post Note"}
                                </button>
                            </div>
                        </form>

                        {/* Notes feed */}
                        {notes.length === 0 && (
                            <div className="py-12 text-center rounded-xl" style={{
                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}>
                                <MessageSquare className="w-8 h-8 text-gray-700 mx-auto mb-2" />
                                <p className="text-gray-600 text-sm">No notes yet.</p>
                            </div>
                        )}

                        {notes.map(note => (
                            <div key={note.id} className="rounded-xl p-4" style={{
                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}>
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold" style={{
                                            background: "rgba(52,211,153,0.1)", color: "#34d399",
                                        }}>
                                            {(note.author_name || "?")[0].toUpperCase()}
                                        </div>
                                        <span className="text-xs font-medium text-gray-300">{note.author_name || "Unknown"}</span>
                                    </div>
                                    <span className="text-[10px] text-gray-600">{timeAgo(note.created_at)}</span>
                                </div>
                                <p className="text-sm text-gray-400 whitespace-pre-wrap">{note.note_text}</p>
                            </div>
                        ))}
                    </div>
                )}

                {/* ═══════════════════ FILES TAB ═══════════════════ */}
                {tab === "files" && (
                    <div className="space-y-4">
                        {/* Upload area */}
                        <div className="rounded-2xl overflow-hidden" style={{
                            background: "linear-gradient(145deg, #0d1526, #0a1020)",
                            border: "1px solid rgba(255,255,255,0.05)",
                        }}>
                            <div className="px-4 md:px-6 py-4 border-b flex items-center gap-2" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                                <Paperclip className="w-4 h-4 text-emerald-400" />
                                <h2 className="text-sm font-semibold text-white">Upload Files</h2>
                            </div>
                            <div className="px-4 md:px-6 py-5">
                                <div className="rounded-xl p-6 md:p-8 text-center transition-all cursor-pointer"
                                    style={{
                                        background: fileDragOver ? "rgba(56,189,248,0.06)" : "rgba(255,255,255,0.02)",
                                        border: fileDragOver ? "2px dashed rgba(56,189,248,0.4)" : "2px dashed rgba(255,255,255,0.08)",
                                    }}
                                    onDragOver={e => { e.preventDefault(); setFileDragOver(true); }}
                                    onDragLeave={() => setFileDragOver(false)}
                                    onDrop={handleFileDrop2}
                                    onClick={() => fileInputRef2.current?.click()}>
                                    <input ref={fileInputRef2} type="file" multiple
                                        accept="image/*,.pdf,.doc,.docx,.xls,.xlsx,.txt,.csv,audio/*,video/*"
                                        className="hidden" onChange={handleFileSelect2} />
                                    <Upload className="w-8 h-8 text-gray-600 mx-auto mb-3" />
                                    {fileUploading ? (
                                        <p className="text-sm text-sky-400 animate-pulse">Uploading…</p>
                                    ) : (
                                        <>
                                            <p className="text-sm text-gray-400">Drop files here or <span className="text-sky-400">click to browse</span></p>
                                            <p className="text-[10px] text-gray-600 mt-1">Photos, PDFs, Documents, Spreadsheets, Audio, Video · Max 10MB</p>
                                        </>
                                    )}
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                                    <input value={fileNotes} onChange={e => setFileNotes(e.target.value)}
                                        placeholder="Optional notes…"
                                        className="w-full text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-sky-400/40 transition-all" />
                                    <select value={fileProjectId} onChange={e => setFileProjectId(e.target.value)}
                                        className="text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-sky-400/40"
                                        title="Link to project">
                                        <option value="">No project (general)</option>
                                        {projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Filter bar */}
                        {files.length > 0 && (
                            <div className="flex items-center gap-3">
                                <span className="text-xs text-gray-600">{filteredFiles.length} file{filteredFiles.length !== 1 ? "s" : ""}</span>
                                <select value={fileFilter} onChange={e => setFileFilter(e.target.value)}
                                    className="text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-gray-300 focus:outline-none focus:border-sky-400/40 ml-auto"
                                    title="Filter by project">
                                    <option value="">All Files</option>
                                    {projects.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
                                </select>
                            </div>
                        )}

                        {/* Image grid for image files */}
                        {filteredFiles.some(f => f.file_type.startsWith("image/")) && (
                            <div>
                                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <ImageIcon className="w-3.5 h-3.5" /> Photos
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                                    {filteredFiles.filter(f => f.file_type.startsWith("image/")).map(f => (
                                        <div key={f.id} className="group relative rounded-xl overflow-hidden" style={{
                                            background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                            border: "1px solid rgba(56,189,248,0.1)",
                                        }}>
                                            <div className="aspect-square overflow-hidden">
                                                <img
                                                    src={`/api/sales/clients/${clientId}/files/${f.id}`}
                                                    alt={f.filename}
                                                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                                    loading="lazy" />
                                            </div>
                                            <div className="p-2.5">
                                                <p className="text-[11px] text-white truncate font-medium">{f.filename}</p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <span className="text-[9px] text-gray-600">{fmtFileSize(f.file_size)}</span>
                                                    {f.project_name && (
                                                        <span className="text-[9px] px-1.5 py-0.5 rounded-full" style={{ background: "rgba(167,139,250,0.1)", color: "#a78bfa" }}>
                                                            {f.project_name}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            {/* Hover actions */}
                                            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <a href={`/api/sales/clients/${clientId}/files/${f.id}`} download={f.filename}
                                                    className="p-1.5 rounded-lg transition-all" style={{ background: "rgba(0,0,0,0.7)" }} title="Download">
                                                    <Download className="w-3 h-3 text-white" />
                                                </a>
                                                <button onClick={(e) => { e.stopPropagation(); deleteClientFile(f.id); }}
                                                    className="p-1.5 rounded-lg transition-all" style={{ background: "rgba(0,0,0,0.7)" }} title="Delete">
                                                    <Trash2 className="w-3 h-3 text-rose-400" />
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Non-image files list */}
                        {filteredFiles.some(f => !f.file_type.startsWith("image/")) && (
                            <div>
                                <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                                    <FileText className="w-3.5 h-3.5" /> Documents & Other
                                </h3>
                                <div className="space-y-2">
                                    {filteredFiles.filter(f => !f.file_type.startsWith("image/")).map(f => {
                                        const fc = getFileColor(f.file_type);
                                        return (
                                            <div key={f.id} className="rounded-xl p-3 md:p-4 flex items-center gap-3" style={{
                                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                                border: `1px solid ${fc.border}`,
                                            }}>
                                                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                                                    style={{ background: fc.bg, border: `1px solid ${fc.border}`, color: fc.color }}>
                                                    {getFileIcon(f.file_type)}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-white truncate">{f.filename}</p>
                                                    <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 mt-0.5">
                                                        <span className="text-[10px] text-gray-600">{fmtFileSize(f.file_size)}</span>
                                                        <span className="text-[10px] text-gray-600">{timeAgo(f.created_at)}</span>
                                                        {f.uploader_name && <span className="text-[10px] text-gray-500">{f.uploader_name}</span>}
                                                        {f.project_name && (
                                                            <span className="text-[9px] px-1.5 py-0.5 rounded-full" style={{ background: "rgba(167,139,250,0.1)", color: "#a78bfa" }}>
                                                                {f.project_name}
                                                            </span>
                                                        )}
                                                    </div>
                                                    {f.notes && <p className="text-[11px] text-gray-500 mt-1 italic truncate">{f.notes}</p>}
                                                </div>
                                                <div className="flex items-center gap-1 flex-shrink-0">
                                                    <a href={`/api/sales/clients/${clientId}/files/${f.id}`} download={f.filename}
                                                        className="p-2 rounded-lg text-gray-600 hover:text-sky-400 hover:bg-sky-400/5 transition-all" title="Download">
                                                        <Download className="w-3.5 h-3.5" />
                                                    </a>
                                                    <button onClick={() => deleteClientFile(f.id)}
                                                        className="p-2 rounded-lg text-gray-600 hover:text-rose-400 hover:bg-rose-400/5 transition-all" title="Delete">
                                                        <Trash2 className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {files.length === 0 && (
                            <div className="py-16 text-center rounded-xl" style={{
                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}>
                                <Paperclip className="w-8 h-8 text-gray-700 mx-auto mb-2" />
                                <p className="text-gray-600 text-sm">No files yet.</p>
                                <p className="text-gray-700 text-xs mt-1">Upload photos, PDFs, documents, and more.</p>
                            </div>
                        )}
                    </div>
                )}

                {/* ═══════════════════ RECORDINGS TAB ═══════════════════ */}
                {tab === "recordings" && (
                    <div className="rounded-2xl overflow-hidden" style={{
                        background: "linear-gradient(145deg, #0d1526, #0a1020)",
                        border: "1px solid rgba(255,255,255,0.05)",
                    }}>
                        <div className="px-4 md:px-6 py-4 border-b flex items-center gap-2" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                            <Music className="w-4 h-4 text-emerald-400" />
                            <h2 className="text-sm font-semibold text-white">Recordings</h2>
                            <span className="text-xs text-gray-600 ml-auto">{recordings.length} recording{recordings.length !== 1 ? "s" : ""}</span>
                        </div>

                        {/* Upload area */}
                        <div className="px-4 md:px-6 py-5 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                            <div className="rounded-xl p-6 text-center transition-all cursor-pointer"
                                style={{
                                    background: dragOver ? "rgba(52,211,153,0.06)" : "rgba(255,255,255,0.02)",
                                    border: dragOver ? "2px dashed rgba(52,211,153,0.4)" : "2px dashed rgba(255,255,255,0.08)",
                                }}
                                onDragOver={e => { e.preventDefault(); setDragOver(true); }}
                                onDragLeave={() => setDragOver(false)}
                                onDrop={handleRecDrop}
                                onClick={() => fileInputRef.current?.click()}>
                                <input ref={fileInputRef} type="file" accept="audio/*,video/*,.mp3,.wav,.m4a,.ogg,.webm,.mp4"
                                    className="hidden" onChange={handleRecSelect} />
                                <Upload className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                                {uploading ? (
                                    <p className="text-sm text-emerald-400 animate-pulse">Uploading…</p>
                                ) : (
                                    <>
                                        <p className="text-sm text-gray-400">Drop a recording here or click to browse</p>
                                        <p className="text-[10px] text-gray-600 mt-1">MP3, WAV, M4A, OGG, WebM, MP4</p>
                                    </>
                                )}
                            </div>
                            <div className="mt-3">
                                <input value={uploadNotes} onChange={e => setUploadNotes(e.target.value)}
                                    placeholder="Optional notes for the next upload…"
                                    className="w-full text-xs bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/40 transition-all" />
                            </div>
                        </div>

                        {/* Recording list */}
                        {recordings.length === 0 ? (
                            <div className="py-12 text-center">
                                <FileAudio className="w-8 h-8 text-gray-700 mx-auto mb-2" />
                                <p className="text-gray-600 text-sm">No recordings yet.</p>
                            </div>
                        ) : (
                            <div>
                                {recordings.map((rec, idx) => (
                                    <div key={rec.id} className="px-4 md:px-6 py-4" style={{
                                        borderBottom: idx < recordings.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                                    }}>
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-start gap-3 flex-1 min-w-0">
                                                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                                                    style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.15)" }}>
                                                    <FileAudio className="w-4 h-4 text-emerald-400" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-white truncate">{rec.filename}</p>
                                                    <div className="flex items-center gap-3 mt-0.5">
                                                        <span className="text-[10px] text-gray-600">{fmtDate(rec.created_at)}</span>
                                                        <span className="text-[10px] text-gray-700">·</span>
                                                        <span className="text-[10px] text-gray-600">{fmtFileSize(rec.file_size)}</span>
                                                        {rec.uploader_name && (
                                                            <><span className="text-[10px] text-gray-700">·</span><span className="text-[10px] text-gray-500">{rec.uploader_name}</span></>
                                                        )}
                                                    </div>
                                                    {rec.notes && <p className="text-xs text-gray-500 mt-1.5 italic">{rec.notes}</p>}
                                                    <AudioPlayer src={`/api/sales/clients/${clientId}/recordings/${rec.id}`} />
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 ml-3 flex-shrink-0">
                                                <a href={`/api/sales/clients/${clientId}/recordings/${rec.id}`}
                                                    download={rec.filename}
                                                    className="p-2 rounded-lg text-gray-600 hover:text-sky-400 hover:bg-sky-400/5 transition-all" title="Download">
                                                    <Download className="w-3.5 h-3.5" />
                                                </a>
                                                <button onClick={() => deleteRecording(rec.id)}
                                                    className="p-2 rounded-lg text-gray-600 hover:text-rose-400 hover:bg-rose-400/5 transition-all" title="Delete">
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </SalesLayout>
    );
}
