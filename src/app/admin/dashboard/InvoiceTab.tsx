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
    payment_type: "one_time" | "recurring";
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

// ─── Job Type Presets ────────────────────────────────────────────────────────
const JOB_PRESETS: Record<string, { label: string; notes: string; items: { description: string; quantity: string; rate: string }[] }> = {
    custom: { label: "— Custom (blank) —", notes: "", items: [{ description: "", quantity: "1", rate: "" }] },
    website: {
        label: "Website / Web Portal",
        notes: "Includes responsive design, SEO optimization, SSL, and Vercel deployment.",
        items: [
            { description: "UI/UX Design & Wireframing", quantity: "1", rate: "1500" },
            { description: "Frontend Development (Next.js)", quantity: "1", rate: "3000" },
            { description: "Backend API & Database Setup", quantity: "1", rate: "2000" },
            { description: "Domain & Hosting Configuration", quantity: "1", rate: "500" },
            { description: "QA Testing & Launch", quantity: "1", rate: "750" },
        ],
    },
    crm: {
        label: "Custom CRM / ECM System",
        notes: "Custom CRM with sales pipeline, lead management, dashboards, and role-based access.",
        items: [
            { description: "Requirements & Architecture Planning", quantity: "1", rate: "1500" },
            { description: "Database Schema & API Development", quantity: "1", rate: "3500" },
            { description: "Dashboard & Reporting UI", quantity: "1", rate: "2500" },
            { description: "Pipeline & Lead Management Module", quantity: "1", rate: "2000" },
            { description: "User Auth & Role-Based Access", quantity: "1", rate: "1000" },
            { description: "Deployment & Training", quantity: "1", rate: "1000" },
        ],
    },
    trading_bot: {
        label: "Algorithmic Trading Bot",
        notes: "Includes strategy development, backtesting, live deployment, and monitoring dashboard.",
        items: [
            { description: "Strategy Design & Backtesting", quantity: "1", rate: "3000" },
            { description: "Bot Core Engine Development", quantity: "1", rate: "5000" },
            { description: "Exchange API Integration", quantity: "1", rate: "2000" },
            { description: "Risk Management & Controls", quantity: "1", rate: "1500" },
            { description: "Monitoring Dashboard", quantity: "1", rate: "2000" },
            { description: "Deployment & Live Testing", quantity: "1", rate: "1500" },
        ],
    },
    payment_system: {
        label: "Payment & Invoicing System",
        notes: "Stripe integration, auto-invoicing, payment tracking, and revenue dashboards.",
        items: [
            { description: "Payment Gateway Integration (Stripe)", quantity: "1", rate: "2000" },
            { description: "Invoice Generation System", quantity: "1", rate: "2500" },
            { description: "Payment Tracking & Notifications", quantity: "1", rate: "1500" },
            { description: "Revenue Dashboard & Reporting", quantity: "1", rate: "1500" },
            { description: "Testing & Deployment", quantity: "1", rate: "750" },
        ],
    },
    estimating: {
        label: "Estimating & Proposal Generator",
        notes: "Custom proposal builder with branded templates, pricing engine, and PDF export.",
        items: [
            { description: "Proposal Template Design", quantity: "1", rate: "1500" },
            { description: "Pricing Engine & Calculator", quantity: "1", rate: "2500" },
            { description: "PDF Generation & Branding", quantity: "1", rate: "1500" },
            { description: "CRM Integration", quantity: "1", rate: "1000" },
            { description: "QA & Deployment", quantity: "1", rate: "500" },
        ],
    },
    business_hub: {
        label: "Business Operations Hub",
        notes: "Unified platform: inventory, work orders, scheduling, and real-time reporting.",
        items: [
            { description: "Architecture & Requirements", quantity: "1", rate: "2000" },
            { description: "Core Platform Development", quantity: "1", rate: "5000" },
            { description: "Inventory Management Module", quantity: "1", rate: "2500" },
            { description: "Work Order & Scheduling System", quantity: "1", rate: "2500" },
            { description: "Reporting & Analytics Dashboard", quantity: "1", rate: "2000" },
            { description: "Deployment, Training & Support", quantity: "1", rate: "1500" },
        ],
    },
    licensing: {
        label: "License & Subscription Management",
        notes: "License server, subscription tiers, usage tracking, and customer portal.",
        items: [
            { description: "License Server Development", quantity: "1", rate: "3000" },
            { description: "Subscription Tier Management", quantity: "1", rate: "2000" },
            { description: "Customer Portal & Dashboard", quantity: "1", rate: "2500" },
            { description: "Usage Analytics & Enforcement", quantity: "1", rate: "1500" },
            { description: "Testing & Deployment", quantity: "1", rate: "1000" },
        ],
    },
    enterprise_infra: {
        label: "Enterprise Architecture & Infra",
        notes: "Cloud infrastructure setup with CI/CD, monitoring, auto-scaling, and security hardening.",
        items: [
            { description: "Infrastructure Audit & Planning", quantity: "1", rate: "2000" },
            { description: "Cloud Environment Setup (Docker/Vercel)", quantity: "1", rate: "3000" },
            { description: "CI/CD Pipeline Configuration", quantity: "1", rate: "1500" },
            { description: "Monitoring & Alerting (Sentry)", quantity: "1", rate: "1000" },
            { description: "Security Hardening & SSL", quantity: "1", rate: "1500" },
        ],
    },
    monthly_retainer: {
        label: "Monthly Retainer / Maintenance",
        notes: "Ongoing support: bug fixes, feature updates, server monitoring, and priority support.",
        items: [
            { description: "Monthly Maintenance & Support", quantity: "1", rate: "2500" },
        ],
    },
};

export function InvoiceTab({ prefill }: { prefill?: { clientName?: string; clientEmail?: string } }) {
    const [invoices, setInvoices] = useState<Invoice[]>([]);
    const [loading, setLoading] = useState(true);
    const [generating, setGenerating] = useState(false);
    const [copiedId, setCopiedId] = useState<number | null>(null);
    const [toasts, setToasts] = useState<Toast[]>([]);
    const [confirmAction, setConfirmAction] = useState<{ id: number, action: "paid" | "cancelled" } | null>(null);

    // Form state
    const [clientName, setClientName] = useState(prefill?.clientName || "");
    const [clientEmail, setClientEmail] = useState(prefill?.clientEmail || "");
    const [clientAddress, setClientAddress] = useState("");
    const [notes, setNotes] = useState("");
    const [dueDate, setDueDate] = useState("");
    const [taxRate, setTaxRate] = useState("");
    const [paymentType, setPaymentType] = useState<"one_time" | "recurring">("one_time");
    const [jobType, setJobType] = useState("custom");

    // Line items state
    const [lineItems, setLineItems] = useState<{ description: string, quantity: string, rate: string }[]>([
        { description: "", quantity: "1", rate: "" }
    ]);

    function applyJobPreset(key: string) {
        setJobType(key);
        const preset = JOB_PRESETS[key];
        if (!preset) return;
        setLineItems(preset.items.map(i => ({ ...i })));
        if (preset.notes) setNotes(preset.notes);
        if (key === "monthly_retainer") setPaymentType("recurring");
    }

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
                    line_items: formattedItems,
                    payment_type: paymentType,
                }),
            });

            if (res.ok) {
                setClientName(""); setClientEmail(""); setClientAddress(""); setNotes(""); setDueDate(""); setTaxRate(""); setPaymentType("one_time"); setJobType("custom");
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
                    {/* Job Type Selector — full width */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xs uppercase tracking-wider text-sky-400 font-bold mb-2">Job Type — Auto-Fill Scope</h3>
                        <select value={jobType} onChange={e => applyJobPreset(e.target.value)} title="Job Type"
                            className="w-full text-sm bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-sky-400/40 appearance-none cursor-pointer"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center" }}>
                            {Object.entries(JOB_PRESETS).map(([key, preset]) => (
                                <option key={key} value={key} style={{ background: "#0d1526" }}>{preset.label}</option>
                            ))}
                        </select>
                    </div>

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

                    {/* Column 3: Payment Type */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xs uppercase tracking-wider text-sky-400 font-bold mb-2">Payment Type</h3>
                        <div className="flex gap-3">
                            <button type="button" onClick={() => setPaymentType("one_time")}
                                className="flex-1 py-2.5 rounded-xl text-sm font-medium transition-all border"
                                style={{
                                    background: paymentType === "one_time" ? "rgba(52,211,153,0.1)" : "rgba(255,255,255,0.03)",
                                    borderColor: paymentType === "one_time" ? "rgba(52,211,153,0.3)" : "rgba(255,255,255,0.08)",
                                    color: paymentType === "one_time" ? "#34d399" : "#6b7280",
                                }}>
                                💵 One-Time Payment
                            </button>
                            <button type="button" onClick={() => setPaymentType("recurring")}
                                className="flex-1 py-2.5 rounded-xl text-sm font-medium transition-all border"
                                style={{
                                    background: paymentType === "recurring" ? "rgba(167,139,250,0.1)" : "rgba(255,255,255,0.03)",
                                    borderColor: paymentType === "recurring" ? "rgba(167,139,250,0.3)" : "rgba(255,255,255,0.08)",
                                    color: paymentType === "recurring" ? "#a78bfa" : "#6b7280",
                                }}>
                                🔄 Monthly Subscription
                            </button>
                        </div>
                        {paymentType === "recurring" && (
                            <p className="text-[10px] text-violet-400/60 mt-1.5">Client will be billed automatically every month via Stripe.</p>
                        )}
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
                    style={{ gridTemplateColumns: "1fr 1.5fr 1fr 80px 1fr 80px 140px", borderColor: "rgba(255,255,255,0.05)" }}>
                    <span>Inv #</span><span>Client</span><span>Amount</span><span>Type</span><span>Date</span><span>Status</span><span className="text-right">Actions</span>
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
                                gridTemplateColumns: "1fr 1.5fr 1fr 80px 1fr 80px 140px",
                                borderBottom: idx < invoices.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
                                opacity: inv.status === "cancelled" ? 0.5 : 1
                            }}>
                            <span className="text-sm font-mono text-sky-400">{inv.invoice_number}</span>
                            <div className="min-w-0 pr-2">
                                <p className="text-sm font-medium text-white truncate">{inv.client_name}</p>
                                {inv.client_email && <p className="text-[10px] text-gray-500 truncate">{inv.client_email}</p>}
                            </div>
                            <span className="text-sm font-mono text-white">
                                {fmtCurrency(inv.total_cents)}
                                {inv.payment_type === "recurring" && <span className="text-[9px] text-violet-400">/mo</span>}
                            </span>
                            <span className={`text-[10px] font-bold uppercase ${inv.payment_type === "recurring" ? "text-violet-400" : "text-gray-500"}`}>
                                {inv.payment_type === "recurring" ? "Sub" : "Once"}
                            </span>
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
