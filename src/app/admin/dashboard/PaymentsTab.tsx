"use client";

import React, { useState, useEffect, useCallback } from "react";
import { DollarSign, Link2, Copy, Trash2, Check, RefreshCw, Loader2, X, AlertCircle, CheckCircle2 } from "lucide-react";

type PaymentLink = {
    id: number;
    client_name: string;
    client_email: string | null;
    description: string;
    amount_cents: number;
    link_type: "one_time" | "recurring";
    stripe_url: string;
    status: "active" | "deactivated";
    created_at: string;
};

type Toast = { id: number; message: string; type: "success" | "error" };

/* ── Inline Toast Banner ─────────────────────────────────────────────── */

function ToastContainer({ toasts, onDismiss }: { toasts: Toast[]; onDismiss: (id: number) => void }) {
    if (toasts.length === 0) return null;
    return (
        <div className="fixed top-4 right-4 z-50 flex flex-col gap-2" style={{ minWidth: 320 }}>
            {toasts.map(t => (
                <div key={t.id}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium shadow-lg animate-slide-in"
                    style={{
                        background: t.type === "error"
                            ? "linear-gradient(135deg, rgba(239,68,68,0.15), rgba(239,68,68,0.05))"
                            : "linear-gradient(135deg, rgba(52,211,153,0.15), rgba(52,211,153,0.05))",
                        border: `1px solid ${t.type === "error" ? "rgba(239,68,68,0.3)" : "rgba(52,211,153,0.3)"}`,
                        color: t.type === "error" ? "#fca5a5" : "#6ee7b7",
                        backdropFilter: "blur(12px)",
                    }}>
                    {t.type === "error"
                        ? <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        : <CheckCircle2 className="w-4 h-4 flex-shrink-0" />}
                    <span className="flex-1">{t.message}</span>
                    <button onClick={() => onDismiss(t.id)} className="p-0.5 hover:opacity-70 transition-opacity" title="Dismiss" aria-label="Dismiss notification">
                        <X className="w-3.5 h-3.5" />
                    </button>
                </div>
            ))}
        </div>
    );
}

/* ── Confirm Dialog ──────────────────────────────────────────────────── */

function ConfirmDialog({ message, onConfirm, onCancel }: { message: string; onConfirm: () => void; onCancel: () => void }) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)" }}>
            <div className="rounded-2xl p-6 max-w-sm w-full mx-4" style={{ background: "#0d1526", border: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="text-sm text-gray-300 mb-6">{message}</p>
                <div className="flex gap-3 justify-end">
                    <button onClick={onCancel}
                        className="px-4 py-2 rounded-lg text-sm font-medium text-gray-400 hover:text-white transition-colors"
                        style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                        Cancel
                    </button>
                    <button onClick={onConfirm}
                        className="px-4 py-2 rounded-lg text-sm font-medium text-white transition-all"
                        style={{ background: "linear-gradient(135deg, #dc2626, #ef4444)", boxShadow: "0 0 12px rgba(239,68,68,0.2)" }}>
                        Deactivate
                    </button>
                </div>
            </div>
        </div>
    );
}

/* ── Main Component ──────────────────────────────────────────────────── */

export function PaymentsTab() {
    const [links, setLinks] = useState<PaymentLink[]>([]);
    const [loading, setLoading] = useState(true);
    const [generating, setGenerating] = useState(false);
    const [copiedId, setCopiedId] = useState<number | null>(null);
    const [toasts, setToasts] = useState<Toast[]>([]);
    const [confirmDeactivate, setConfirmDeactivate] = useState<number | null>(null);

    // Form state
    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [linkType, setLinkType] = useState<"one_time" | "recurring">("one_time");

    let toastCounter = React.useRef(0);

    function addToast(message: string, type: "success" | "error") {
        const id = ++toastCounter.current;
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
    }

    function dismissToast(id: number) {
        setToasts(prev => prev.filter(t => t.id !== id));
    }

    const fetchLinks = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/payment-links");
            if (res.ok) setLinks(await res.json());
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchLinks();
    }, [fetchLinks]);

    async function handleGenerate(e: React.FormEvent) {
        e.preventDefault();
        if (!clientName || !description || !amount) return;

        setGenerating(true);
        try {
            const res = await fetch("/api/admin/payment-links", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    client_name: clientName,
                    client_email: clientEmail || undefined,
                    description,
                    amount: parseFloat(amount),
                    link_type: linkType,
                }),
            });

            if (res.ok) {
                setClientName("");
                setClientEmail("");
                setDescription("");
                setAmount("");
                setLinkType("one_time");
                addToast("Payment link generated successfully!", "success");
                fetchLinks();
            } else {
                const data = await res.json();
                addToast(data.error || "Failed to generate payment link", "error");
            }
        } catch {
            addToast("Network error — please try again", "error");
        } finally {
            setGenerating(false);
        }
    }

    async function handleDeactivate(id: number) {
        setConfirmDeactivate(null);
        try {
            await fetch(`/api/admin/payment-links?id=${id}`, { method: "DELETE" });
            addToast("Payment link deactivated", "success");
            fetchLinks();
        } catch {
            addToast("Failed to deactivate link", "error");
        }
    }

    function handleCopy(id: number, url: string) {
        navigator.clipboard.writeText(url);
        setCopiedId(id);
        addToast("Link copied to clipboard!", "success");
        setTimeout(() => setCopiedId(null), 2000);
    }

    const fmtCurrency = (cents: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);

    return (
        <div className="space-y-6">
            <ToastContainer toasts={toasts} onDismiss={dismissToast} />

            {confirmDeactivate !== null && (
                <ConfirmDialog
                    message="Deactivate this payment link? The client will no longer be able to use it to pay."
                    onConfirm={() => handleDeactivate(confirmDeactivate)}
                    onCancel={() => setConfirmDeactivate(null)}
                />
            )}

            {/* Generator Form */}
            <div className="rounded-2xl p-6" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(56,189,248,0.15)" }}>
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(56,189,248,0.1)", color: "#38bdf8" }}>
                        <Link2 className="w-4 h-4" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-white">Generate Payment Link</h2>
                        <p className="text-gray-500 text-xs text-balance">Create a shareable Stripe link to collect one-time build fees or monthly deposits.</p>
                    </div>
                </div>

                <form onSubmit={handleGenerate} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="pl-client" className="text-xs uppercase tracking-wider text-gray-500 block mb-1">Client Name *</label>
                        <input id="pl-client" value={clientName} onChange={e => setClientName(e.target.value)} required placeholder="Acme Corp" title="Client or company name"
                            className="w-full text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-sky-400/40" />
                    </div>
                    <div>
                        <label htmlFor="pl-email" className="text-xs uppercase tracking-wider text-gray-500 block mb-1">Client Email (optional)</label>
                        <input id="pl-email" value={clientEmail} onChange={e => setClientEmail(e.target.value)} type="email" placeholder="billing@acmecorp.com" title="Client email address"
                            className="w-full text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-sky-400/40" />
                    </div>
                    <div className="md:col-span-2">
                        <label htmlFor="pl-desc" className="text-xs uppercase tracking-wider text-gray-500 block mb-1">Description *</label>
                        <input id="pl-desc" value={description} onChange={e => setDescription(e.target.value)} required placeholder="Website Build & Setup" title="Payment description"
                            className="w-full text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-sky-400/40" />
                    </div>
                    <div>
                        <label htmlFor="pl-amount" className="text-xs uppercase tracking-wider text-gray-500 block mb-1">Amount ($) *</label>
                        <div className="relative">
                            <DollarSign className="w-4 h-4 text-gray-500 absolute left-3.5 top-3" />
                            <input id="pl-amount" value={amount} onChange={e => setAmount(e.target.value)} required type="number" min="1" step="0.01" placeholder="5000.00" title="Payment amount in USD"
                                className="w-full text-sm bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-sky-400/40" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="pl-type" className="text-xs uppercase tracking-wider text-gray-500 block mb-1">Payment Type *</label>
                        <select id="pl-type" value={linkType} onChange={e => setLinkType(e.target.value as "one_time" | "recurring")} title="Select payment type"
                            className="w-full text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-sky-400/40 appearance-none"
                            style={{ colorScheme: "dark" }}>
                            <option value="one_time" style={{ background: "#0d1526", color: "#e2e8f0" }}>One-Time Charge</option>
                            <option value="recurring" style={{ background: "#0d1526", color: "#e2e8f0" }}>Monthly Recurring</option>
                        </select>
                    </div>

                    <div className="md:col-span-2 mt-2">
                        <button type="submit" disabled={generating} title="Generate a new Stripe payment link"
                            className="w-full py-3 rounded-xl font-semibold text-sm transition-all disabled:opacity-50 flex items-center justify-center gap-2 text-white"
                            style={{ background: "linear-gradient(135deg, #0284c7, #38bdf8)", boxShadow: "0 0 20px rgba(56,189,248,0.2)" }}>
                            {generating ? <><Loader2 className="w-4 h-4 animate-spin" /> Generating Link…</> : <><Link2 className="w-4 h-4" /> Generate Payment Link</>}
                        </button>
                    </div>
                </form>
            </div>

            {/* History Table */}
            <div className="rounded-2xl overflow-hidden" style={{ background: "#0d1526", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                    <h3 className="text-sm font-semibold text-white">Payment Links History</h3>
                    <button onClick={fetchLinks} className="text-gray-500 hover:text-sky-400 transition-colors" title="Refresh payment links" aria-label="Refresh payment links">
                        <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                    </button>
                </div>
                
                <div className="grid text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3 border-b"
                    style={{ gridTemplateColumns: "1.5fr 2fr 1fr 1fr 1.5fr 80px", borderColor: "rgba(255,255,255,0.05)" }}>
                    <span>Client</span><span>Description</span><span>Amount</span><span>Type</span><span>Link</span><span />
                </div>

                {loading ? (
                    <div className="py-12 text-center text-gray-600 text-sm">Loading links…</div>
                ) : links.length === 0 ? (
                    <div className="py-12 text-center">
                        <Link2 className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <p className="text-gray-600 text-sm">No payment links generated yet.</p>
                    </div>
                ) : (
                    links.map((link, idx) => (
                        <div key={link.id} className="grid items-center px-6 py-4 transition-colors duration-100 hover:bg-white/[0.02]"
                            style={{
                                gridTemplateColumns: "1.5fr 2fr 1fr 1fr 1.5fr 80px",
                                borderBottom: idx < links.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                                opacity: link.status === "deactivated" ? 0.5 : 1
                            }}>
                            <div className="min-w-0">
                                <p className="text-sm font-medium text-white truncate">{link.client_name}</p>
                                <p className="text-[10px] text-gray-500 truncate">{new Date(link.created_at).toLocaleDateString()}</p>
                            </div>
                            <span className="text-sm text-gray-400 truncate pr-4">{link.description}</span>
                            <span className="text-sm font-mono text-white">{fmtCurrency(link.amount_cents)}</span>
                            <div>
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold"
                                    style={{
                                        background: link.link_type === "recurring" ? "rgba(167,139,250,0.15)" : "rgba(56,189,248,0.15)",
                                        color: link.link_type === "recurring" ? "#a78bfa" : "#38bdf8",
                                    }}>
                                    {link.link_type === "recurring" ? "Monthly" : "One-Time"}
                                </span>
                            </div>
                            <div className="min-w-0 pr-4">
                                {link.status === "active" ? (
                                    <button onClick={() => handleCopy(link.id, link.stripe_url)}
                                        title="Copy payment link to clipboard" aria-label={`Copy link for ${link.client_name}`}
                                        className="flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 transition-colors w-full">
                                        {copiedId === link.id ? <Check className="w-3 h-3 flex-shrink-0" /> : <Copy className="w-3 h-3 flex-shrink-0" />}
                                        <span className="truncate">{link.stripe_url.replace("https://", "")}</span>
                                    </button>
                                ) : (
                                    <span className="text-xs text-gray-600 line-through truncate block">Deactivated</span>
                                )}
                            </div>
                            <div className="flex justify-end">
                                {link.status === "active" && (
                                    <button onClick={() => setConfirmDeactivate(link.id)}
                                        className="p-1.5 rounded-lg text-gray-600 hover:text-rose-400 hover:bg-rose-400/5 transition-all"
                                        title="Deactivate Link" aria-label={`Deactivate link for ${link.client_name}`}>
                                        <Trash2 className="w-3.5 h-3.5" />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
