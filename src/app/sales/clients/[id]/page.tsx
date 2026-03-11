"use client";

import React, { useEffect, useState, useCallback, useRef } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import {
    LogOut, BarChart3, Target, Building2, Home,
    ArrowLeft, Mail, Phone, Calendar, UserCheck,
    Upload, Play, Pause, Download, Trash2, FileAudio,
    Music, GraduationCap,
} from "lucide-react";
import type { Client, ClientRecording } from "@/lib/db";

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();

    const links = [
        { href: "/sales/dashboard", label: "Dashboard", icon: <Home className="w-4 h-4" /> },
        { href: "/sales/leads", label: "Leads", icon: <Target className="w-4 h-4" /> },
        { href: "/sales/clients", label: "Clients", icon: <Building2 className="w-4 h-4" /> },
        { href: "/sales/training", label: "Training", icon: <GraduationCap className="w-4 h-4" /> },
    ];

    async function logout() {
        await fetch("/api/admin/login", { method: "DELETE" });
        router.push("/sales");
    }

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-56 flex flex-col z-20" style={{
            background: "linear-gradient(180deg, #0a1020 0%, #080d18 100%)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
        }}>
            <div className="px-5 py-5 flex items-center gap-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{
                    background: "linear-gradient(135deg, #059669, #34d399)",
                    boxShadow: "0 0 12px rgba(52,211,153,0.3)",
                }}>
                    <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <div>
                    <span className="text-white font-bold text-sm block leading-tight">QuantLab</span>
                    <span className="text-emerald-400/70 text-[10px] font-medium uppercase tracking-wider">Sales CRM</span>
                </div>
            </div>

            <nav className="flex-1 px-3 py-4 space-y-1">
                {links.map(link => {
                    const active = pathname?.startsWith(link.href);
                    return (
                        <button key={link.href} onClick={() => router.push(link.href)}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150"
                            style={{
                                color: active ? "#34d399" : "#9ca3af",
                                background: active ? "rgba(52,211,153,0.08)" : "transparent",
                                border: active ? "1px solid rgba(52,211,153,0.15)" : "1px solid transparent",
                            }}>
                            {link.icon}
                            {link.label}
                        </button>
                    );
                })}
            </nav>

            <div className="px-3 py-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <button onClick={logout}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-gray-500 hover:text-rose-400 hover:bg-rose-400/5 transition-all">
                    <LogOut className="w-3.5 h-3.5" /> Sign out
                </button>
            </div>
        </aside>
    );
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmtDate(s: string) {
    return new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function fmtFileSize(bytes: number) {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// ─── Audio Player ────────────────────────────────────────────────────────────

function AudioPlayer({ src }: { src: string }) {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    function toggle() {
        if (!audioRef.current) return;
        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlaying(!playing);
    }

    function onTimeUpdate() {
        if (!audioRef.current) return;
        setProgress(audioRef.current.currentTime);
    }

    function onLoadedMetadata() {
        if (!audioRef.current) return;
        setDuration(audioRef.current.duration);
    }

    function seek(e: React.MouseEvent<HTMLDivElement>) {
        if (!audioRef.current || !duration) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const pct = x / rect.width;
        audioRef.current.currentTime = pct * duration;
    }

    function fmtTime(secs: number) {
        const m = Math.floor(secs / 60);
        const s = Math.floor(secs % 60);
        return `${m}:${s.toString().padStart(2, "0")}`;
    }

    return (
        <div className="flex items-center gap-3 mt-2">
            <audio ref={audioRef} src={src} onTimeUpdate={onTimeUpdate} onLoadedMetadata={onLoadedMetadata}
                onEnded={() => setPlaying(false)} preload="metadata" />
            <button onClick={toggle}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all flex-shrink-0"
                style={{
                    background: playing ? "rgba(52,211,153,0.15)" : "rgba(52,211,153,0.1)",
                    border: "1px solid rgba(52,211,153,0.25)",
                }}>
                {playing ? <Pause className="w-3.5 h-3.5 text-emerald-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400 ml-0.5" />}
            </button>
            <div className="flex-1 flex items-center gap-2">
                <span className="text-[10px] text-gray-500 font-mono w-8 text-right">{fmtTime(progress)}</span>
                <div className="flex-1 h-1.5 rounded-full cursor-pointer relative" style={{ background: "rgba(255,255,255,0.06)" }}
                    onClick={seek}>
                    <div className="absolute inset-y-0 left-0 rounded-full transition-all"
                        style={{
                            width: duration ? `${(progress / duration) * 100}%` : "0%",
                            background: "linear-gradient(90deg, #059669, #34d399)",
                        }} />
                </div>
                <span className="text-[10px] text-gray-500 font-mono w-8">{fmtTime(duration)}</span>
            </div>
        </div>
    );
}

// ─── Client Detail Page ──────────────────────────────────────────────────────

export default function ClientDetailPage() {
    const router = useRouter();
    const params = useParams();
    const clientId = params?.id as string;

    const [client, setClient] = useState<Client | null>(null);
    const [recordings, setRecordings] = useState<ClientRecording[]>([]);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [uploadNotes, setUploadNotes] = useState("");
    const [dragOver, setDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const [clientsRes, recordingsRes] = await Promise.all([
                fetch("/api/sales/clients"),
                fetch(`/api/sales/clients/${clientId}/recordings`),
            ]);
            if (clientsRes.status === 401) { router.push("/sales"); return; }

            const allClients: Client[] = await clientsRes.json();
            const thisClient = allClients.find(c => c.id === parseInt(clientId));
            setClient(thisClient || null);
            setRecordings(await recordingsRes.json());
        } finally { setLoading(false); }
    }, [clientId, router]);

    useEffect(() => { fetchData(); }, [fetchData]);

    async function uploadFile(file: File) {
        setUploading(true);
        try {
            const formData = new FormData();
            formData.append("file", file);
            if (uploadNotes.trim()) formData.append("notes", uploadNotes.trim());

            await fetch(`/api/sales/clients/${clientId}/recordings`, {
                method: "POST",
                body: formData,
            });
            setUploadNotes("");
            fetchData();
        } finally { setUploading(false); }
    }

    function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) uploadFile(file);
        e.target.value = "";
    }

    function handleDrop(e: React.DragEvent) {
        e.preventDefault();
        setDragOver(false);
        const file = e.dataTransfer.files?.[0];
        if (file) uploadFile(file);
    }

    async function deleteRecording(recordingId: number) {
        if (!confirm("Delete this recording?")) return;
        await fetch(`/api/sales/clients/${clientId}/recordings?recordingId=${recordingId}`, {
            method: "DELETE",
        });
        fetchData();
    }

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
                    <button onClick={() => router.push("/sales/clients")} className="text-emerald-400 text-sm hover:underline">
                        ← Back to Clients
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen" style={{ background: "#080d18" }}>
            <div className="fixed inset-0 pointer-events-none" style={{
                backgroundImage: "linear-gradient(rgba(52,211,153,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.02) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
            }} />

            <Sidebar />

            <main className="ml-56">
                {/* Header */}
                <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4" style={{
                    background: "rgba(8,13,24,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>
                    <div className="flex items-center gap-4">
                        <button onClick={() => router.push("/sales/clients")}
                            className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all">
                            <ArrowLeft className="w-4 h-4" />
                        </button>
                        <div>
                            <h1 className="text-xl font-bold text-white">{client.company_name}</h1>
                            <p className="text-gray-500 text-xs">{client.primary_contact}</p>
                        </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold"
                        style={{
                            color: client.status === "active" ? "#34d399" : "#6b7280",
                            background: client.status === "active" ? "rgba(52,211,153,0.1)" : "rgba(107,114,128,0.1)",
                        }}>
                        {client.status === "active" ? "Active" : "Inactive"}
                    </span>
                </header>

                <div className="max-w-5xl mx-auto px-8 py-8">
                    {/* Client info cards */}
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                        <div className="rounded-xl p-5" style={{
                            background: "linear-gradient(145deg, #0d1526, #0a1020)",
                            border: "1px solid rgba(255,255,255,0.05)",
                        }}>
                            <div className="flex items-center gap-2 mb-3">
                                <Mail className="w-4 h-4 text-sky-400" />
                                <span className="text-[10px] uppercase tracking-wider text-gray-600">Email</span>
                            </div>
                            <a href={`mailto:${client.email}`} className="text-sm text-sky-400 hover:underline">{client.email}</a>
                        </div>
                        {client.phone && (
                            <div className="rounded-xl p-5" style={{
                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}>
                                <div className="flex items-center gap-2 mb-3">
                                    <Phone className="w-4 h-4 text-violet-400" />
                                    <span className="text-[10px] uppercase tracking-wider text-gray-600">Phone</span>
                                </div>
                                <span className="text-sm text-gray-300">{client.phone}</span>
                            </div>
                        )}
                        <div className="rounded-xl p-5" style={{
                            background: "linear-gradient(145deg, #0d1526, #0a1020)",
                            border: "1px solid rgba(255,255,255,0.05)",
                        }}>
                            <div className="flex items-center gap-2 mb-3">
                                <Calendar className="w-4 h-4 text-amber-400" />
                                <span className="text-[10px] uppercase tracking-wider text-gray-600">Client Since</span>
                            </div>
                            <span className="text-sm text-gray-300">{fmtDate(client.created_at)}</span>
                        </div>
                    </div>

                    {/* Recordings section */}
                    <div className="rounded-2xl overflow-hidden" style={{
                        background: "linear-gradient(145deg, #0d1526, #0a1020)",
                        border: "1px solid rgba(255,255,255,0.05)",
                    }}>
                        <div className="px-6 py-4 border-b flex items-center gap-2" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                            <Music className="w-4 h-4 text-emerald-400" />
                            <h2 className="text-sm font-semibold text-white">Recordings</h2>
                            <span className="text-xs text-gray-600 ml-auto">
                                {recordings.length} recording{recordings.length !== 1 ? "s" : ""}
                            </span>
                        </div>

                        {/* Upload area */}
                        <div className="px-6 py-5 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                            <div
                                className="rounded-xl p-6 text-center transition-all cursor-pointer"
                                style={{
                                    background: dragOver ? "rgba(52,211,153,0.06)" : "rgba(255,255,255,0.02)",
                                    border: dragOver ? "2px dashed rgba(52,211,153,0.4)" : "2px dashed rgba(255,255,255,0.08)",
                                }}
                                onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                                onDragLeave={() => setDragOver(false)}
                                onDrop={handleDrop}
                                onClick={() => fileInputRef.current?.click()}
                            >
                                <input ref={fileInputRef} type="file"
                                    accept="audio/*,video/*,.mp3,.wav,.m4a,.ogg,.webm,.mp4"
                                    className="hidden" onChange={handleFileSelect} />
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
                                <p className="text-gray-700 text-[10px] mt-1">Upload audio files above to get started.</p>
                            </div>
                        ) : (
                            <div>
                                {recordings.map((rec, idx) => (
                                    <div key={rec.id} className="px-6 py-4" style={{
                                        borderBottom: idx < recordings.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                                    }}>
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-start gap-3 flex-1 min-w-0">
                                                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5" style={{
                                                    background: "rgba(52,211,153,0.08)",
                                                    border: "1px solid rgba(52,211,153,0.15)",
                                                }}>
                                                    <FileAudio className="w-4 h-4 text-emerald-400" />
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <p className="text-sm font-medium text-white truncate">{rec.filename}</p>
                                                    <div className="flex items-center gap-3 mt-0.5">
                                                        <span className="text-[10px] text-gray-600">{fmtDate(rec.created_at)}</span>
                                                        <span className="text-[10px] text-gray-700">·</span>
                                                        <span className="text-[10px] text-gray-600">{fmtFileSize(rec.file_size)}</span>
                                                        {rec.uploader_name && (
                                                            <>
                                                                <span className="text-[10px] text-gray-700">·</span>
                                                                <span className="text-[10px] text-gray-500">{rec.uploader_name}</span>
                                                            </>
                                                        )}
                                                    </div>
                                                    {rec.notes && (
                                                        <p className="text-xs text-gray-500 mt-1.5 italic">{rec.notes}</p>
                                                    )}
                                                    {/* Audio player */}
                                                    <AudioPlayer src={`/api/sales/clients/${clientId}/recordings/${rec.id}`} />
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-1 ml-3 flex-shrink-0">
                                                <a href={`/api/sales/clients/${clientId}/recordings/${rec.id}`}
                                                    download={rec.filename}
                                                    className="p-2 rounded-lg text-gray-600 hover:text-sky-400 hover:bg-sky-400/5 transition-all"
                                                    title="Download">
                                                    <Download className="w-3.5 h-3.5" />
                                                </a>
                                                <button onClick={() => deleteRecording(rec.id)}
                                                    className="p-2 rounded-lg text-gray-600 hover:text-rose-400 hover:bg-rose-400/5 transition-all"
                                                    title="Delete">
                                                    <Trash2 className="w-3.5 h-3.5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
