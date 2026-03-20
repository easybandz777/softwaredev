"use client";

import React from "react";
import type { Invoice, InvoiceLineItem } from "@/lib/db";
import "./invoice.css";

const fmtCurrency = (cents: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);

const fmtDate = (s: string | null) => {
    if (!s) return "—";
    return new Date(s).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
};

export default function InvoiceClient({ invoice, lineItems }: { invoice: Invoice; lineItems: InvoiceLineItem[] }) {
    const statusClass = `status-${invoice.status}`;
    const isPaid = invoice.status === "paid";
    const isCancelled = invoice.status === "cancelled";
    const showPayButton = !isPaid && !isCancelled;

    return (
        <div className="invoice-page">
            {/* Toolbar — hidden on print */}
            <div className="invoice-toolbar no-print">
                <button className="btn-print" onClick={() => window.print()}>
                    🖨️ Print / Save PDF
                </button>
                {showPayButton && (
                    <a href={invoice.stripe_url} target="_blank" rel="noopener noreferrer" className="btn-pay">
                        💳 Pay Now
                    </a>
                )}
            </div>

            {/* Header */}
            <div className="invoice-header">
                <div className="invoice-brand">
                    <img src="/logo.png" alt="QuantLab" />
                    <div className="invoice-brand-text">
                        <h1>QuantLab Software Solutions</h1>
                        <p>Engineering the Next Level</p>
                    </div>
                </div>
                <div className="invoice-meta">
                    <p className="invoice-number">{invoice.invoice_number}</p>
                    <p className="invoice-meta-row">Date:<span>{fmtDate(invoice.created_at)}</span></p>
                    <p className="invoice-meta-row">Due:<span>{fmtDate(invoice.due_date)}</span></p>
                    <div className={`invoice-status ${statusClass}`}>
                        {invoice.status.toUpperCase()}
                    </div>
                </div>
            </div>

            {/* Parties */}
            <div className="invoice-parties">
                <div className="party-block">
                    <h3>From</h3>
                    <p style={{ fontWeight: 600, color: "#ffffff" }}>QuantLab Software Solutions</p>
                    <p>contact@quantlabusa.dev</p>
                    <p>quantlabusa.dev</p>
                </div>
                <div className="party-block">
                    <h3>Bill To</h3>
                    <p style={{ fontWeight: 600, color: "#ffffff" }}>{invoice.client_name}</p>
                    {invoice.client_email && <p className="email">{invoice.client_email}</p>}
                    {invoice.client_address && (
                        <p style={{ whiteSpace: "pre-wrap" }}>{invoice.client_address}</p>
                    )}
                </div>
            </div>

            {/* Line Items */}
            <table className="invoice-table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Qty</th>
                        <th>Rate</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {lineItems.map((item, idx) => (
                        <tr key={idx}>
                            <td>{item.description}</td>
                            <td>{item.quantity}</td>
                            <td>{fmtCurrency(item.rate_cents)}</td>
                            <td>{fmtCurrency(item.amount_cents)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Totals */}
            <div className="invoice-totals">
                <div className="totals-box">
                    <div className="totals-row">
                        <span>Subtotal</span>
                        <span>{fmtCurrency(invoice.subtotal_cents)}</span>
                    </div>
                    {invoice.tax_rate > 0 && (
                        <div className="totals-row">
                            <span>Tax ({Number(invoice.tax_rate).toFixed(1)}%)</span>
                            <span>{fmtCurrency(invoice.tax_cents)}</span>
                        </div>
                    )}
                    <div className="totals-row total">
                        <span>Total Due</span>
                        <span>{fmtCurrency(invoice.total_cents)}</span>
                    </div>
                </div>
            </div>

            {/* Notes */}
            {invoice.notes && (
                <div className="invoice-notes">
                    <h4>Notes</h4>
                    <p>{invoice.notes}</p>
                </div>
            )}

            {/* Pay CTA */}
            {showPayButton && (
                <div className="invoice-pay-cta">
                    <div>
                        <p style={{ fontSize: "1rem", fontWeight: 700, color: "#ffffff", margin: "0 0 0.25rem 0" }}>
                            Ready to pay?
                        </p>
                        <p style={{ fontSize: "0.85rem", color: "#9ca3af", margin: 0 }}>
                            Secure payment powered by Stripe
                        </p>
                    </div>
                    <a href={invoice.stripe_url} target="_blank" rel="noopener noreferrer" className="pay-button">
                        💳 Pay {fmtCurrency(invoice.total_cents)}
                    </a>
                </div>
            )}

            {isPaid && (
                <div className="invoice-pay-cta" style={{ borderColor: "rgba(52,211,153,0.3)", background: "rgba(52,211,153,0.05)" }}>
                    <p style={{ fontSize: "1.1rem", fontWeight: 700, color: "#34d399", margin: 0 }}>
                        ✓ This invoice has been paid. Thank you!
                    </p>
                </div>
            )}

            {/* Footer */}
            <div className="invoice-footer">
                <p>QuantLab Software Solutions LLC</p>
                <p>contact@quantlabusa.dev · quantlabusa.dev</p>
            </div>
        </div>
    );
}
