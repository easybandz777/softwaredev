"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Copy, Trash2, RefreshCw, Loader2, X, AlertCircle, CheckCircle2, FileText, Check, Plus, ExternalLink } from "lucide-react";

type InvoiceLineItem = {
    description: string;
    quantity: number;
    rate_cents: number;
    amount_cents: number;
};

type Invoice = {
    id: number;
    invoice_number: string;
    client_name: string;
    client_email: string | null;
    client_address: string | null;
    line_items: string; // JSON string
    subtotal_cents: number;
    tax_rate: number;
    tax_cents: number;
    total_cents: number;
    notes: string | null;
    due_date: string | null;
    status: "draft" | "sent" | "paid" | "cancelled";
    stripe_url: string;
    created_at: string;
};

type Toast = { id: number; message: string; type: "success" | "error" };

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
                    {t.type === "error" ? <AlertCircle className="w-4 h-4 flex-shrink-0" /> : <CheckCircle2 className="w-4 h-4 flex-shrink-0" />}
                    <span className="flex-1">{t.message}</span>
                    <button onClick={() => onDismiss(t.id)} className="p-0.5 hover:opacity-70 transition-opacity" title="Dismiss">
                        <X className="w-3.5 h-3.5" />
                    </button>
                </div>
            ))}
        </div>
    );
}

function ConfirmDialog({ message, actionText, isDestructive, onConfirm, onCancel }: { message: string, actionText: string, isDestructive: boolean, onConfirm: () => void; onCancel: () => void }) {
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
                        style={{
                            background: isDestructive ? "linear-gradient(135deg, #dc2626, #ef4444)" : "linear-gradient(135deg, #059669, #34d399)",
                            boxShadow: isDestructive ? "0 0 12px rgba(239,68,68,0.2)" : "0 0 12px rgba(52,211,153,0.2)"
                        }}>
                        {actionText}
                    </button>
                </div>
            </div>
        </div>
    );
}

export function InvoiceTab() {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [loading, setLoading] = useState(true);
    const [generating, setGenerating] = useState(false);
    const [copiedId, setCopiedId] = useState<number | null>(null);
    const [toasts, setToasts] = useState<Toast[]>([]);
    const [confirmAction, setConfirmAction] = useState<{ id: number, action: "paid" | "cancelled" } | null>(null);

    // Form state
    const [clientName, setClientName] = useState("");
    const [clientEmail, setClientEmail] = useState("");
    const [clientAddress, setClientAddress] = useState("");
    const [notes, setNotes] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [taxRate, setTaxRate] = useState("");

    // Line items state
    const [lineItems, setLineItems] = useState<{ description: string, quantity: string, rate: string }[]>([
        { description: "Website Build & Setup", quantity: "1", rate: "5000" }
    ]);

    let toastCounter = React.useRef(0);

    function addToast(message: string, type: "success" | "error") {
        const id = ++toastCounter.current;
        setToasts(prev => [...prev, { id, message, type }]);
        setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
    }
    const dismissToast = (id: number) => setToasts(prev => prev.filter(t => t.id !== id));

    const fetchInvoices = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/admin/invoices");
            if (res.ok) setInvoices(await res.json());
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => { fetchInvoices(); }, [fetchInvoices]);

    const addLineItem = () => setLineItems([...lineItems, { description: "", quantity: "1", rate: "" }]);
    const removeLineItem = (idx: number) => setLineItems(lineItems.filter((_, i) => i !== idx));

    async function handleGenerate(e: React.FormEvent) {
        e.preventDefault();
        if (!clientName) return;

        // Validation
        const formattedItems = lineItems.map(li => ({
            description: li.description.trim(),
            quantity: parseFloat(li.quantity) || 1,
            rate_cents: Math.round((parseFloat(li.rate) || 0) * 100)
        })).filter(li => li.description && li.rate_cents > 0);

        if (formattedItems.length === 0) {
            addToast("Add at least one complete line item", "error");
            return;
        }

        setGenerating(true);
        try {
            const res = await fetch("/api/admin/invoices", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    client_name: clientName,
                    client_email: clientEmail || undefined,
                    client_address: clientAddress || undefined,
                    notes: notes || undefined,
                    due_date: dueDate || undefined,
                    tax_rate: parseFloat(taxRate) || 0,
                    line_items: formattedItems
                }),
            });

            if (res.ok) {
                setClientName(""); setClientEmail(""); setClientAddress(""); setNotes(""); setDueDate(""); setTaxRate("");
                setLineItems([{ description: "", quantity: "1", rate: "" }]);
                addToast("Invoice generated successfully!", "success");
                fetchInvoices();
            } else {
                const data = await res.json();
                addToast(data.error || "Failed to generate invoice", "error");
            }
        } catch {
            addToast("Network error — please try again", "error");
        } finally {
            setGenerating(false);
        }
    }

    async function handleStatusChange(id: number, status: "paid" | "cancelled") {
        setConfirmAction(null);
        try {
            const res = await fetch("/api/admin/invoices", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id, status })
            });
            if (res.ok) {
                addToast(`Invoice marked as ${status}`, "success");
                fetchInvoices();
            } else {
                addToast("Failed to update invoice", "error");
            }
        } catch {
            addToast("Failed to update invoice", "error");
        }
    }

    function handleCopy(id: number, url: string) {
        navigator.clipboard.writeText(url);
        setCopiedId(id);
        addToast("Stripe link copied to clipboard!", "success");
        setTimeout(() => setCopiedId(null), 2000);
    }

    function openPrint(id: number) {
        window.open(`/print/invoice/${id}`, "_blank");
    }

    const fmtCurrency = (cents: number) => new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);

    return (
        <div className="space-y-6">
            <ToastContainer toasts={toasts} onDismiss={dismissToast} />

            {confirmAction !== null && (
                <ConfirmDialog
                    message={confirmAction.action === "paid"
                        ? "Mark this invoice as paid manually?"
                        : "Cancel this invoice? The Stripe link will be deactivated."}
                    actionText={confirmAction.action === "paid" ? "Mark Paid" : "Cancel Invoice"}
                    isDestructive={confirmAction.action === "cancelled"}
                    onConfirm={() => handleStatusChange(confirmAction.id, confirmAction.action)}
                    onCancel={() => setConfirmAction(null)}
                />
            )}

            {/* Generator Form */}
            <div className="rounded-2xl p-6" style={{ background: "linear-gradient(145deg, #0d1526, #0a1020)", border: "1px solid rgba(56,189,248,0.15)" }}>
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(56,189,248,0.1)", color: "#38bdf8" }}>
                        <FileText className="w-4 h-4" />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold text-white">Generate Full Invoice</h2>
                        <p className="text-gray-500 text-xs text-balance">Create detailed PDF-ready invoices with Stripe payment links.</p>
                    </div>
                </div>

                <form onSubmit={handleGenerate} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Column 1: Client Info */}
                    <div className="space-y-4">
                        <h3 className="text-xs uppercase tracking-wider text-sky-400 font-bold mb-2">Client Details</h3>
                        <div>
                            <input value={clientName} onChange={e => setClientName(e.target.value)} required placeholder="Client Name *"
                                className="w-full text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-sky-400/40" />
                        </div>
                        <div>
                            <input value={clientEmail} onChange={e => setClientEmail(e.target.value)} type="email" placeholder="Email Address (optional)"
                                className="w-full text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-sky-400/40" />
                        </div>
                        <div>
                            <textarea value={clientAddress} onChange={e => setClientAddress(e.target.value)} placeholder="Physical Address (optional)" rows={3}
                                className="w-full text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-sky-400/40 resize-none" />
                        </div>
                    </div>

                    {/* Column 2: Invoice Setup */}
                    <div className="space-y-4">
                        <h3 className="text-xs uppercase tracking-wider text-sky-400 font-bold mb-2">Invoice Meta</h3>
                        <div>
                            <input value={dueDate} onChange={e => setDueDate(e.target.value)} type="date" title="Due Date"
                                className="w-full text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white focus:outline-none focus:border-sky-400/40 [color-scheme:dark]" />
                        </div>
                        <div className="relative">
                            <span className="absolute left-4 top-2 text-sm text-gray-500">Tax</span>
                            <span className="absolute right-4 top-2 text-sm text-gray-500">%</span>
                            <input value={taxRate} onChange={e => setTaxRate(e.target.value)} type="number" step="0.01" min="0" placeholder="0.0"
                                className="w-full text-sm bg-white/5 border border-white/10 rounded-xl px-12 py-2 text-right text-white focus:outline-none focus:border-sky-400/40" />
                        </div>
                        <div>
                            <textarea value={notes} onChange={e => setNotes(e.target.value)} placeholder="Terms & Notes..." rows={3}
                                className="w-full text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-sky-400/40 resize-none" />
                        </div>
                    </div>

                    {/* Column 3: Line Items */}
                    <div className="lg:col-span-3 space-y-3 pt-2">
                        <h3 className="text-xs uppercase tracking-wider text-sky-400 font-bold mb-2 flex justify-between items-center">
                            Line Items
                            <button type="button" onClick={addLineItem} className="text-[10px] bg-white/10 px-2 py-1 rounded hover:bg-white/20 transition-colors flex items-center gap-1">
                                <Plus className="w-3 h-3" /> Add Item
                            </button>
                        </h3>

                        {lineItems.map((item, idx) => (
                            <div key={idx} className="flex gap-2 items-center">
                                <input value={item.description} onChange={e => {
                                    const newItems = [...lineItems]; newItems[idx].description = e.target.value; setLineItems(newItems);
                                }} required placeholder="Description *" className="flex-1 text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-sky-400/40 min-w-[200px]" />
                                
                                <input value={item.quantity} onChange={e => {
                                    const newItems = [...lineItems]; newItems[idx].quantity = e.target.value; setLineItems(newItems);
                                }} required type="number" step="0.5" min="0.5" placeholder="Qty" className="w-20 text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-sky-400/40" />
                                
                                <input value={item.rate} onChange={e => {
                                    const newItems = [...lineItems]; newItems[idx].rate = e.target.value; setLineItems(newItems);
                                }} required type="number" step="0.01" min="0" placeholder="Rate ($)" className="w-28 text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-sky-400/40" />

                                {lineItems.length > 1 && (
                                    <button type="button" onClick={() => removeLineItem(idx)} className="p-2 text-gray-500 hover:text-rose-400 transition-colors" title="Remove line item">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-3 mt-4">
                        <button type="submit" disabled={generating}
                            className="w-full py-3 rounded-xl font-semibold text-sm transition-all disabled:opacity-50 flex items-center justify-center gap-2 text-white"
                            style={{ background: "linear-gradient(135deg, #0284c7, #38bdf8)", boxShadow: "0 0 20px rgba(56,189,248,0.2)" }}>
                            {generating ? <><Loader2 className="w-4 h-4 animate-spin" /> Generating Invoice & Link…</> : <><FileText className="w-4 h-4" /> Generate Invoice</>}
                        </button>
                    </div>
                </form>
            </div>

            {/* History Table */}
            <div className="rounded-2xl overflow-hidden" style={{ background: "#0d1526", border: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="px-6 py-4 border-b flex items-center justify-between" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                    <h3 className="text-sm font-semibold text-white">Full Invoices</h3>
                    <button onClick={fetchInvoices} className="text-gray-500 hover:text-sky-400 transition-colors" title="Refresh">
                        <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
                    </button>
                </div>
                
                <div className="grid text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3 border-b"
                    style={{ gridTemplateColumns: "1fr 2fr 1fr 1fr 100px 140px", borderColor: "rgba(255,255,255,0.05)" }}>
                    <span>Inv #</span><span>Client</span><span>Amount</span><span>Date</span><span>Status</span><span className="text-right">Actions</span>
                </div>

                {loading ? (
                    <div className="py-12 text-center text-gray-600 text-sm">Loading invoices…</div>
                ) : invoices.length === 0 ? (
                    <div className="py-12 text-center">
                        <FileText className="w-8 h-8 text-gray-700 mx-auto mb-3" />
                        <p className="text-gray-600 text-sm">No full invoices generated yet.</p>
                    </div>
                ) : (
                    invoices.map((inv, idx) => (
                        <div key={inv.id} className="grid items-center px-6 py-4 transition-colors duration-100 hover:bg-white/[0.02]"
                            style={{
                                gridTemplateColumns: "1fr 2fr 1fr 1fr 100px 140px",
                                borderBottom: idx < invoices.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                                opacity: inv.status === "cancelled" ? 0.5 : 1
                            }}>
                            <span className="text-sm font-mono text-sky-400">{inv.invoice_number}</span>
                            <div className="min-w-0 pr-2">
                                <p className="text-sm font-medium text-white truncate">{inv.client_name}</p>
                                {inv.client_email && <p className="text-[10px] text-gray-500 truncate">{inv.client_email}</p>}
                            </div>
                            <span className="text-sm font-mono text-white">{fmtCurrency(inv.total_cents)}</span>
                            <span className="text-xs text-gray-400">{new Date(inv.created_at).toLocaleDateString()}</span>
                            
                            <div>
                                <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider`}
                                    style={{
                                        background: inv.status === "paid" ? "rgba(52,211,153,0.15)" : 
                                                    inv.status === "cancelled" ? "rgba(239,68,68,0.15)" :
                                                    "rgba(56,189,248,0.15)",
                                        color: inv.status === "paid" ? "#34d399" : 
                                               inv.status === "cancelled" ? "#ef4444" : "#38bdf8",
                                    }}>
                                    {inv.status}
                                </span>
                            </div>

                            <div className="flex justify-end gap-1.5">
                                <button onClick={() => openPrint(inv.id)} title="View / Print PDF"
                                    className="p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all">
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </button>
                                
                                {inv.status === "sent" && (
                                    <>
                                        <button onClick={() => handleCopy(inv.id, inv.stripe_url)} title="Copy Stripe Link"
                                            className={`p-1.5 rounded-lg transition-all ${copiedId === inv.id ? "text-sky-400 bg-sky-400/10" : "text-gray-400 hover:text-sky-400 hover:bg-sky-400/10"}`}>
                                            {copiedId === inv.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                                        </button>
                                        <button onClick={() => setConfirmAction({ id: inv.id, action: "paid" })} title="Mark Paid"
                                            className="p-1.5 rounded-lg text-gray-400 hover:text-emerald-400 hover:bg-emerald-400/10 transition-all">
                                            <CheckCircle2 className="w-3.5 h-3.5" />
                                        </button>
                                        <button onClick={() => setConfirmAction({ id: inv.id, action: "cancelled" })} title="Cancel Invoice"
                                            className="p-1.5 rounded-lg text-gray-400 hover:text-rose-400 hover:bg-rose-400/10 transition-all">
                                            <Trash2 className="w-3.5 h-3.5" />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
