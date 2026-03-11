"use client";

import React, { useEffect, useState, useCallback, Suspense } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
    LogOut, BarChart3, Target, Building2, Home,
    Users, Search, Filter, ChevronRight,
    Mail, Phone, Calendar, DollarSign, UserCheck, GraduationCap,
    Plus, X,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Lead {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    company: string | null;
    service: string;
    status: string;
    assigned_to_id: number | null;
    assigned_to_name: string | null;
    value_est: number | null;
    next_follow_up: string | null;
    created_at: string;
}

interface SalesUser {
    id: number;
    username: string;
    full_name: string;
}

// ─── Config ──────────────────────────────────────────────────────────────────

const STATUS_CONFIG: Record<string, { label: string; color: string; bg: string }> = {
    new: { label: "New", color: "#38bdf8", bg: "rgba(56,189,248,0.1)" },
    contacted: { label: "Contacted", color: "#a78bfa", bg: "rgba(167,139,250,0.1)" },
    qualified: { label: "Qualified", color: "#fbbf24", bg: "rgba(251,191,36,0.1)" },
    proposal: { label: "Proposal", color: "#f97316", bg: "rgba(249,115,22,0.1)" },
    won: { label: "Won", color: "#34d399", bg: "rgba(52,211,153,0.1)" },
    lost: { label: "Lost", color: "#6b7280", bg: "rgba(107,114,128,0.1)" },
    reviewed: { label: "Reviewed", color: "#a78bfa", bg: "rgba(167,139,250,0.1)" },
    closed: { label: "Closed", color: "#6b7280", bg: "rgba(107,114,128,0.1)" },
};

// ─── Sidebar (shared) ────────────────────────────────────────────────────────

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

function fmtCurrency(n: number) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
}

// ─── Page Wrapper (Suspense for useSearchParams) ─────────────────────────────

export default function LeadsPageWrapper() {
    return (
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-gray-500 text-sm animate-pulse">Loading…</div></div>}>
            <LeadsPage />
        </Suspense>
    );
}

// ─── Leads Page ──────────────────────────────────────────────────────────────

function LeadsPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [leads, setLeads] = useState<Lead[]>([]);
    const [salesUsers, setSalesUsers] = useState<SalesUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [filterStatus, setFilterStatus] = useState<string>("all");
    const [showNew, setShowNew] = useState(searchParams.get("new") === "1");
    const [creating, setCreating] = useState(false);
    const [newLead, setNewLead] = useState({
        name: "", email: "", phone: "", company: "", service: "Custom Software", message: "",
    });

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const [leadsRes, dashRes] = await Promise.all([
                fetch("/api/sales/leads"),
                fetch("/api/sales/dashboard"),
            ]);
            if (leadsRes.status === 401) { router.push("/sales"); return; }
            setLeads(await leadsRes.json());
            const d = await dashRes.json();
            setSalesUsers(d.salesUsers || []);
        } finally { setLoading(false); }
    }, [router]);

    useEffect(() => { fetchData(); }, [fetchData]);

    async function updateLead(id: number, updates: Record<string, unknown>) {
        await fetch("/api/sales/leads", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, ...updates }),
        });
        fetchData();
    }

    async function createLead(e: React.FormEvent) {
        e.preventDefault();
        if (!newLead.name || !newLead.email || !newLead.service) return;
        setCreating(true);
        try {
            await fetch("/api/sales/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newLead),
            });
            setNewLead({ name: "", email: "", phone: "", company: "", service: "Custom Software", message: "" });
            setShowNew(false);
            fetchData();
        } finally { setCreating(false); }
    }

    // Filter + search
    const filtered = leads.filter(l => {
        if (filterStatus !== "all" && l.status !== filterStatus) return false;
        if (search) {
            const s = search.toLowerCase();
            return l.name.toLowerCase().includes(s) || l.email.toLowerCase().includes(s) || (l.company?.toLowerCase().includes(s) ?? false);
        }
        return true;
    });

    const statuses = ["all", "new", "contacted", "qualified", "proposal", "won", "lost"];

    const SERVICE_OPTIONS = [
        "Custom Software", "Web Development", "Mobile App", "AI / Machine Learning",
        "Cloud Infrastructure", "UI/UX Design", "Consulting", "Other",
    ];

    return (
        <div className="min-h-screen" style={{ background: "#080d18" }}>
            <div className="fixed inset-0 pointer-events-none" style={{
                backgroundImage: "linear-gradient(rgba(52,211,153,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.02) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
            }} />

            <Sidebar />

            <main className="ml-56">
                <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4" style={{
                    background: "rgba(8,13,24,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>
                    <div>
                        <h1 className="text-xl font-bold text-white">Leads</h1>
                        <p className="text-gray-500 text-xs mt-0.5">{filtered.length} of {leads.length} leads</p>
                    </div>
                    <button onClick={() => setShowNew(true)}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all"
                        style={{
                            background: "linear-gradient(135deg, #059669, #34d399)",
                            color: "white",
                            boxShadow: "0 0 16px rgba(52,211,153,0.2)",
                        }}>
                        <Plus className="w-3.5 h-3.5" /> New Lead
                    </button>
                </header>

                <div className="max-w-7xl mx-auto px-8 py-8">
                    {/* New lead form */}
                    {showNew && (
                        <div className="rounded-2xl p-6 mb-6" style={{
                            background: "linear-gradient(145deg, #0d1526, #0a1020)",
                            border: "1px solid rgba(52,211,153,0.15)",
                        }}>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-sm font-semibold text-white">New Lead</h2>
                                <button onClick={() => setShowNew(false)} className="text-gray-500 hover:text-white transition-colors">
                                    <X className="w-4 h-4" />
                                </button>
                            </div>
                            <form onSubmit={createLead} className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1">Full Name *</label>
                                    <input value={newLead.name} onChange={e => setNewLead(f => ({ ...f, name: e.target.value }))}
                                        className="w-full text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/40"
                                        placeholder="Jane Smith" required />
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1">Email *</label>
                                    <input type="email" value={newLead.email} onChange={e => setNewLead(f => ({ ...f, email: e.target.value }))}
                                        className="w-full text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/40"
                                        placeholder="jane@company.com" required />
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1">Phone</label>
                                    <input value={newLead.phone} onChange={e => setNewLead(f => ({ ...f, phone: e.target.value }))}
                                        className="w-full text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/40"
                                        placeholder="+1 555-0100" />
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1">Company</label>
                                    <input value={newLead.company} onChange={e => setNewLead(f => ({ ...f, company: e.target.value }))}
                                        className="w-full text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/40"
                                        placeholder="Acme Inc" />
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1">Service Interest *</label>
                                    <select value={newLead.service} onChange={e => setNewLead(f => ({ ...f, service: e.target.value }))}
                                        className="w-full text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-gray-300 focus:outline-none focus:border-emerald-400/40">
                                        {SERVICE_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>
                                <div>
                                    <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1">Message / Notes</label>
                                    <input value={newLead.message} onChange={e => setNewLead(f => ({ ...f, message: e.target.value }))}
                                        className="w-full text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/40"
                                        placeholder="Optional details…" />
                                </div>
                                <div className="col-span-2">
                                    <button type="submit" disabled={creating}
                                        className="px-6 py-2.5 rounded-xl text-xs font-semibold transition-all disabled:opacity-50"
                                        style={{ background: "linear-gradient(135deg, #059669, #34d399)", color: "white" }}>
                                        {creating ? "Creating…" : "Create Lead"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    {/* Filters */}
                    <div className="flex items-center gap-4 mb-6">
                        {/* Search */}
                        <div className="relative flex-1 max-w-xs">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600" />
                            <input
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder="Search leads…"
                                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/40 transition-all"
                            />
                        </div>

                        {/* Status filter pills */}
                        <div className="flex items-center gap-1 p-1 rounded-xl" style={{
                            background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
                        }}>
                            {statuses.map(s => (
                                <button key={s} onClick={() => setFilterStatus(s)}
                                    className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all capitalize"
                                    style={{
                                        background: filterStatus === s ? "rgba(52,211,153,0.12)" : "transparent",
                                        color: filterStatus === s ? "#34d399" : "#6b7280",
                                        border: filterStatus === s ? "1px solid rgba(52,211,153,0.2)" : "1px solid transparent",
                                    }}>
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Table */}
                    <div className="rounded-2xl overflow-hidden" style={{
                        background: "linear-gradient(145deg, #0d1526, #0a1020)",
                        border: "1px solid rgba(255,255,255,0.05)",
                    }}>
                        <div className="grid text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3 border-b"
                            style={{ gridTemplateColumns: "2fr 1.5fr 1.5fr 1fr 1fr 1fr 40px", borderColor: "rgba(255,255,255,0.05)" }}>
                            <span>Name / Company</span>
                            <span>Contact</span>
                            <span>Service</span>
                            <span>Status</span>
                            <span>Assigned To</span>
                            <span>Value</span>
                            <span />
                        </div>

                        {loading && <div className="py-16 text-center text-gray-600 text-sm animate-pulse">Loading…</div>}

                        {!loading && filtered.length === 0 && (
                            <div className="py-16 text-center">
                                <Target className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                                <p className="text-gray-600 text-sm">No leads found.</p>
                            </div>
                        )}

                        {!loading && filtered.map((lead, idx) => {
                            const cfg = STATUS_CONFIG[lead.status] || STATUS_CONFIG.new;
                            return (
                                <div key={lead.id}
                                    className="grid items-center px-6 py-4 cursor-pointer transition-colors duration-100 hover:bg-white/[0.02]"
                                    style={{
                                        gridTemplateColumns: "2fr 1.5fr 1.5fr 1fr 1fr 1fr 40px",
                                        borderBottom: idx < filtered.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                                    }}
                                    onClick={() => router.push(`/sales/leads/${lead.id}`)}
                                >
                                    <div>
                                        <p className="text-sm font-medium text-white truncate">{lead.name}</p>
                                        {lead.company && <p className="text-xs text-gray-500 truncate">{lead.company}</p>}
                                    </div>
                                    <div className="space-y-0.5">
                                        <p className="text-xs text-gray-400 truncate flex items-center gap-1">
                                            <Mail className="w-3 h-3 text-gray-600 flex-shrink-0" />{lead.email}
                                        </p>
                                        {lead.phone && (
                                            <p className="text-xs text-gray-500 flex items-center gap-1">
                                                <Phone className="w-3 h-3 text-gray-600 flex-shrink-0" />{lead.phone}
                                            </p>
                                        )}
                                    </div>
                                    <span className="text-xs text-gray-400 truncate">{lead.service}</span>
                                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold w-fit"
                                        style={{ color: cfg.color, background: cfg.bg }}>
                                        {cfg.label}
                                    </span>
                                    <div onClick={e => e.stopPropagation()}>
                                        <select
                                            value={lead.assigned_to_id ?? ""}
                                            onChange={e => updateLead(lead.id, { assigned_to_id: e.target.value ? parseInt(e.target.value) : null })}
                                            className="w-full text-xs bg-white/5 border border-white/10 rounded-lg px-2 py-1.5 text-gray-300 focus:outline-none focus:border-emerald-400/40"
                                        >
                                            <option value="">Unassigned</option>
                                            {salesUsers.map(u => (
                                                <option key={u.id} value={u.id}>{u.full_name}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <span className="text-xs font-mono text-gray-400">
                                        {lead.value_est ? fmtCurrency(lead.value_est) : "—"}
                                    </span>
                                    <ChevronRight className="w-4 h-4 text-gray-600" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
}
