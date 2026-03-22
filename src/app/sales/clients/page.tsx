"use client";

import React, { useEffect, useState, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
    Building2,
    Mail, Phone, Calendar, UserCheck,
    Plus, X,
} from "lucide-react";
import type { Client } from "@/lib/db";
import { SalesLayout } from "@/components/SalesLayout";


// ─── Helpers ─────────────────────────────────────────────────────────────────

function fmtDate(s: string) {
    return new Date(s).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

// ─── Page Wrapper (Suspense for useSearchParams) ─────────────────────────────

export default function ClientsPageWrapper() {
    return (
        <Suspense fallback={<SalesLayout><div className="flex items-center justify-center min-h-[80vh]"><div className="text-gray-500 text-sm animate-pulse">Loading…</div></div></SalesLayout>}>
            <ClientsPage />
        </Suspense>
    );
}

// ─── Clients Page ────────────────────────────────────────────────────────────

function ClientsPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState(true);
    const [showNew, setShowNew] = useState(searchParams.get("new") === "1");
    const [form, setForm] = useState({ company_name: "", primary_contact: "", email: "", phone: "" });
    const [creating, setCreating] = useState(false);

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/sales/clients", { credentials: "include" });
            if (res.status === 401) { window.location.href = "/sales"; return; }
            setClients(await res.json());
        } finally { setLoading(false); }
    }, [router]);

    useEffect(() => { fetchData(); }, [fetchData]);

    async function createClient(e: React.FormEvent) {
        e.preventDefault();
        if (!form.company_name || !form.primary_contact || !form.email) return;
        setCreating(true);
        try {
            await fetch("/api/sales/clients", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify(form),
            });
            setForm({ company_name: "", primary_contact: "", email: "", phone: "" });
            setShowNew(false);
            fetchData();
        } finally { setCreating(false); }
    }

    async function toggleStatus(id: number, currentStatus: string) {
        const newStatus = currentStatus === "active" ? "inactive" : "active";
        await fetch("/api/sales/clients", {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ id, status: newStatus }),
        });
        fetchData();
    }

    const activeCount = clients.filter(c => c.status === "active").length;
    const inactiveCount = clients.filter(c => c.status === "inactive").length;

    return (
        <SalesLayout>
            {/* Desktop header */}
            <header className="hidden md:flex sticky top-0 z-10 items-center justify-between px-8 py-4" style={{
                background: "rgba(8,13,24,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>
                <div>
                    <h1 className="text-xl font-bold text-white">Clients</h1>
                    <p className="text-gray-500 text-xs mt-0.5">{activeCount} active · {inactiveCount} inactive</p>
                </div>
                <button onClick={() => setShowNew(true)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold"
                    style={{ background: "linear-gradient(135deg, #059669, #34d399)", color: "white", boxShadow: "0 0 16px rgba(52,211,153,0.2)" }}>
                    <Plus className="w-3.5 h-3.5" /> Add Client
                </button>
            </header>

            {/* Mobile page header */}
            <div className="md:hidden flex items-center justify-between px-4 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <div>
                    <h1 className="text-lg font-bold text-white">Clients</h1>
                    <p className="text-gray-500 text-xs">{activeCount} active · {inactiveCount} inactive</p>
                </div>
                <button onClick={() => setShowNew(true)}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold"
                    style={{ background: "linear-gradient(135deg, #059669, #34d399)", color: "white" }}>
                    <Plus className="w-3.5 h-3.5" /> Add Client
                </button>
            </div>

            <div className="px-4 md:px-8 py-6 max-w-6xl mx-auto">
                {/* New client form */}
                {showNew && (
                    <div className="rounded-2xl p-5 mb-6" style={{
                        background: "linear-gradient(145deg, #0d1526, #0a1020)",
                        border: "1px solid rgba(52,211,153,0.15)",
                    }}>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-sm font-semibold text-white">New Client</h2>
                            <button onClick={() => setShowNew(false)} className="text-gray-500 hover:text-white transition-colors"><X className="w-4 h-4" /></button>
                        </div>
                        <form onSubmit={createClient} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1">Company Name *</label>
                                <input value={form.company_name} onChange={e => setForm(f => ({ ...f, company_name: e.target.value }))}
                                    className="w-full text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/40"
                                    placeholder="Acme Inc" required />
                            </div>
                            <div>
                                <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1">Primary Contact *</label>
                                <input value={form.primary_contact} onChange={e => setForm(f => ({ ...f, primary_contact: e.target.value }))}
                                    className="w-full text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/40"
                                    placeholder="John Doe" required />
                            </div>
                            <div>
                                <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1">Email *</label>
                                <input type="email" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                                    className="w-full text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/40"
                                    placeholder="john@acme.com" required />
                            </div>
                            <div>
                                <label className="text-[10px] uppercase tracking-wider text-gray-600 block mb-1">Phone</label>
                                <input value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                                    className="w-full text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-emerald-400/40"
                                    placeholder="+1 555-0100" />
                            </div>
                            <div className="col-span-1 sm:col-span-2">
                                <button type="submit" disabled={creating}
                                    className="px-6 py-2.5 rounded-xl text-xs font-semibold transition-all disabled:opacity-50"
                                    style={{ background: "linear-gradient(135deg, #059669, #34d399)", color: "white" }}>
                                    {creating ? "Creating…" : "Create Client"}
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Clients grid */}
                {loading && <div className="py-16 text-center text-gray-600 text-sm animate-pulse">Loading…</div>}

                {!loading && clients.length === 0 && (
                    <div className="py-16 text-center">
                        <Building2 className="w-10 h-10 text-gray-700 mx-auto mb-3" />
                        <p className="text-gray-600 text-sm">No clients yet.</p>
                        <p className="text-gray-700 text-xs mt-1">Convert won leads or add clients manually.</p>
                    </div>
                )}

                {!loading && clients.length > 0 && (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {clients.map(client => {
                            const isActive = client.status === "active";
                            return (
                                <div key={client.id} className="rounded-xl p-5 transition-all hover:scale-[1.01] cursor-pointer" style={{
                                    background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                    border: `1px solid ${isActive ? "rgba(52,211,153,0.1)" : "rgba(255,255,255,0.05)"}`,
                                }}
                                    onClick={() => router.push(`/sales/clients/${client.id}`)}
                                >
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="text-sm font-semibold text-white">{client.company_name}</h3>
                                            <p className="text-xs text-gray-500">{client.primary_contact}</p>
                                        </div>
                                        <button
                                            onClick={() => toggleStatus(client.id, client.status)}
                                            className="px-2.5 py-1 rounded-full text-[10px] font-semibold transition-all"
                                            style={{
                                                color: isActive ? "#34d399" : "#6b7280",
                                                background: isActive ? "rgba(52,211,153,0.1)" : "rgba(107,114,128,0.1)",
                                            }}
                                        >
                                            {isActive ? "Active" : "Inactive"}
                                        </button>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Mail className="w-3 h-3 text-gray-600" />
                                            <span className="text-xs text-gray-400 truncate">{client.email}</span>
                                        </div>
                                        {client.phone && (
                                            <div className="flex items-center gap-2">
                                                <Phone className="w-3 h-3 text-gray-600" />
                                                <span className="text-xs text-gray-400">{client.phone}</span>
                                            </div>
                                        )}
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-3 h-3 text-gray-600" />
                                            <span className="text-xs text-gray-600">Since {fmtDate(client.created_at)}</span>
                                        </div>
                                        {client.assigned_to_name && (
                                            <div className="flex items-center gap-2">
                                                <UserCheck className="w-3 h-3 text-gray-600" />
                                                <span className="text-xs text-gray-500">{client.assigned_to_name}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </SalesLayout>
    );
}
