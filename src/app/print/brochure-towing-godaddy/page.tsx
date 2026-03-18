"use client";

import React from "react";
import "../brochure/brochure.css";
import BrochureQR from "../BrochureQR";

/* ═══════════════════════════════════════════════════════════════
   QuantLab Tri-Fold Brochure — Towing & Repo "Why Not GoDaddy?"
   Industry-Specific · CRM Cost Elimination · Dark Steel Theme
   ═══════════════════════════════════════════════════════════════ */

const RED = "#EF4444";
const AMBER = "#F59E0B";
const GREEN = "#10B981";
const BLUE = "#3B82F6";
const CYAN = "#06B6D4";
const DARK = "#0B1120";
const CARD = "#161E2E";
const CARDBORDER = "rgba(255,255,255,0.06)";
const ORANGE = "#F97316";

export default function BrochureTowingGodaddyPage() {
    return (
        <div className="brochure-wrapper">
            {/* ── Inline print overrides ── */}
            <style>{`
                @media print {
                    @page { size: 11in 8.5in; margin: 0 !important; }
                    html, body { margin: 0 !important; padding: 0 !important; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
                    .brochure-wrapper { margin: 0 !important; padding: 0 !important; }
                    .brochure-sheet { page-break-after: always !important; page-break-inside: avoid !important; break-after: page !important; break-inside: avoid !important; width: 11in !important; height: 8.5in !important; margin: 0 !important; }
                    .brochure-sheet:last-child { page-break-after: auto !important; break-after: auto !important; }
                    .print-instructions { display: none !important; }
                    .fold-guide { display: none !important; }
                }
            `}</style>

            {/* ── On-screen print instruction bar ── */}
            <div className="print-instructions no-print" style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
                background: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
                borderBottom: `2px solid rgba(249,115,22,0.4)`,
                padding: "0.8rem 1.5rem", fontFamily: "system-ui, sans-serif", color: "#E2E8F0",
            }}>
                <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.6rem" }}>
                        <h2 style={{ fontSize: "1.1rem", fontWeight: 800, margin: 0 }}>🚛 Towing & Repo vs. GoDaddy — Tri-Fold Brochure</h2>
                        <button onClick={() => window.print()} style={{
                            padding: "0.6rem 1.4rem", borderRadius: "0.5rem", fontSize: "0.9rem", fontWeight: 700,
                            cursor: "pointer", border: "none", background: `linear-gradient(135deg, ${ORANGE}, ${AMBER})`,
                            color: "#ffffff", boxShadow: "0 4px 15px rgba(249,115,22,0.35)",
                        }}>🖨️ Print / Save as PDF</button>
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", fontSize: "0.82rem", lineHeight: 1.5 }}>
                        <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "0.5rem", padding: "0.6rem 0.8rem", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <p style={{ fontWeight: 700, color: ORANGE, marginBottom: "0.3rem" }}>Step 1: Save as PDF</p>
                            <p style={{ color: "#94A3B8" }}>Click the button → select <strong style={{ color: "#E2E8F0" }}>&quot;Save as PDF&quot;</strong> as destination.</p>
                        </div>
                        <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "0.5rem", padding: "0.6rem 0.8rem", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <p style={{ fontWeight: 700, color: ORANGE, marginBottom: "0.3rem" }}>Step 2: Settings</p>
                            <p style={{ color: "#94A3B8" }}>Layout: <strong style={{ color: "#E2E8F0" }}>Landscape</strong>. Margins: <strong style={{ color: "#E2E8F0" }}>None</strong>. Enable <strong style={{ color: "#E2E8F0" }}>&quot;Background graphics&quot;</strong>.</p>
                        </div>
                        <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "0.5rem", padding: "0.6rem 0.8rem", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <p style={{ fontWeight: 700, color: ORANGE, marginBottom: "0.3rem" }}>Step 3: Print Front &amp; Back</p>
                            <p style={{ color: "#94A3B8" }}>2 pages — Page 1 outside, Page 2 inside. Print <strong style={{ color: "#E2E8F0" }}>double-sided</strong> (flip on short edge).</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="no-print" style={{ height: "130px" }} />

            {/* ══════════════ SHEET 1 — OUTSIDE ══════════════ */}
            <div className="brochure-sheet">
                <div className="fold-guide fold-guide-1" />
                <div className="fold-guide fold-guide-2" />

                {/* ─── PANEL 3 (LEFT): Inside Flap — The GoDaddy Ceiling for Towing ─── */}
                <div className="brochure-panel" style={{ background: DARK }}>
                    <p style={{ fontSize: "0.42rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: AMBER, marginTop: "0.15in", marginBottom: "0.1rem" }}>The GoDaddy Ceiling</p>
                    <h2 style={{ fontSize: "0.92rem", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "0.08rem" }}>
                        7 Things a Template{" "}
                        <span style={{ background: `linear-gradient(135deg, ${RED}, ${AMBER})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Can&apos;t Do</span>
                        <br />for a Towing Operation.
                    </h2>
                    <div style={{ width: "2.2rem", height: "2px", background: `linear-gradient(90deg, ${AMBER}, ${RED})`, borderRadius: "2px", margin: "0.08rem 0 0.1rem" }} />

                    <p style={{ fontSize: "0.38rem", color: "#94A3B8", lineHeight: 1.45, marginBottom: "0.1rem" }}>
                        GoDaddy gives you a pretty page. It can&apos;t dispatch a truck, track a repo, manage a lot, or send an invoice. You&apos;re paying $200+/mo for a CRM that doesn&apos;t talk to your website. Here&apos;s everything you&apos;re missing:
                    </p>

                    {[
                        {
                            icon: "📡", label: "Live Dispatch Board",
                            gd: "No dispatch. You're juggling calls, texts, and whiteboards. Every handoff is a chance to drop a job.",
                            ql: "Real-time dispatch: drag-and-drop assignment, priority queuing, driver status tracking, auto-routing to nearest unit — one screen.",
                        },
                        {
                            icon: "📋", label: "Built-In CRM & Lead Tracking",
                            gd: "Separate CRM at $79–$300/mo (Towbook, HubSpot, etc). Doesn't sync with your site. Double data entry.",
                            ql: "Native CRM: leads from your site flow directly into pipeline. Account management, contact history, scoring, follow-up automation — zero extra cost.",
                        },
                        {
                            icon: "💰", label: "Automated Invoicing",
                            gd: "Manual QuickBooks or Word docs. 15–25 min per invoice. Days late. Rate card errors. No online payment links.",
                            ql: "Auto-generate invoices on job close with your rate cards. Stripe (card + ACH). Aging dashboard. Auto-reminders. QuickBooks sync.",
                        },
                        {
                            icon: "📸", label: "Digital Condition Reports",
                            gd: "Paper forms. Photos lost in camera rolls. No timestamps. No GPS. Useless in court.",
                            ql: "Mobile photo capture: timestamps, GPS location, damage annotations. Auto-attached to vehicle file. Searchable. Court-ready.",
                        },
                        {
                            icon: "🔐", label: "Client / Lender Portal",
                            gd: "Not possible. Clients call you for every status update. You play phone tag with lenders all day.",
                            ql: "Branded self-service portal: clients see job status, view photos, download docs, approve charges, pay invoices — 24/7.",
                        },
                        {
                            icon: "📊", label: "Operations Analytics",
                            gd: "You know you're busy. That's it. No data on response times, revenue per truck, or account profitability.",
                            ql: "Dashboards: revenue per truck, avg response time, close rate by account, lot utilization, driver performance, monthly trends.",
                        },
                        {
                            icon: "📱", label: "Driver Mobile App",
                            gd: "Drivers get texts. No structured info. No photo upload. No status updates. No offline capability.",
                            ql: "PWA: accept jobs, navigate, capture photos, update status, collect signatures. Works offline in dead zones.",
                        },
                    ].map((r) => (
                        <div key={r.label} style={{ background: CARD, border: `1px solid ${CARDBORDER}`, borderRadius: "0.25rem", padding: "0.09rem 0.14rem", marginBottom: "0.07rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.1rem", marginBottom: "0.03rem" }}>
                                <span style={{ fontSize: "0.42rem" }}>{r.icon}</span>
                                <p style={{ fontSize: "0.36rem", fontWeight: 800, color: "#E2E8F0", letterSpacing: "0.04em" }}>{r.label}</p>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.08rem" }}>
                                <p style={{ fontSize: "0.32rem", color: "#6B7280", lineHeight: 1.35, borderRight: `1px solid ${CARDBORDER}`, paddingRight: "0.08rem" }}>
                                    <span style={{ color: RED, fontWeight: 700, fontSize: "0.3rem" }}>GD: </span>{r.gd}
                                </p>
                                <p style={{ fontSize: "0.32rem", color: "#CBD5E1", lineHeight: 1.35 }}>
                                    <span style={{ color: GREEN, fontWeight: 700, fontSize: "0.3rem" }}>QL: </span>{r.ql}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div style={{ marginTop: "auto", paddingTop: "0.06rem", borderTop: `1px solid ${CARDBORDER}` }}>
                        <p style={{ fontSize: "0.34rem", color: "#475569", fontWeight: 600, fontStyle: "italic", lineHeight: 1.4, textAlign: "center" }}>
                            &quot;We were paying $300/mo for Towbook + GoDaddy + QuickBooks. Now it&apos;s all in one system we own. The CRM alone saved us $3,600/yr.&quot;
                        </p>
                    </div>
                </div>

                {/* ─── PANEL 2 (CENTER): Back Cover — Contact & Trust ─── */}
                <div className="brochure-panel" style={{
                    background: `linear-gradient(180deg, ${DARK} 0%, #0F172A 100%)`,
                    justifyContent: "center", alignItems: "center", textAlign: "center",
                }}>
                    <img src="/logo-transparent.png" alt="QuantLab" style={{ width: "160px", height: "160px", objectFit: "contain", marginBottom: "0.15rem" }} className="logo-glow" />

                    <p style={{ fontSize: "0.62rem", fontWeight: 900, color: "#ffffff", marginBottom: "0.04rem" }}>QuantLab Software Solutions</p>
                    <p style={{ fontSize: "0.42rem", color: ORANGE, fontWeight: 600, marginBottom: "0.06rem", letterSpacing: "0.06em" }}>Operations Software. CRM Included. No Extra Cost.</p>
                    <p style={{ fontSize: "0.35rem", color: "#6B7280", marginBottom: "0.2rem", maxWidth: "2.6in", lineHeight: 1.4 }}>
                        We build the platforms that run towing &amp; repo operations — dispatch, CRM, fleet tracking, invoicing, client portals, and analytics — all in one system. No separate CRM subscription. Ever.
                    </p>

                    <div style={{ margin: "0 auto 0.2rem auto" }}>
                        <BrochureQR url="https://quantlabusa.dev" size="0.88in" accentColor={ORANGE} fgColor="#E2E8F0" label="Scan to Visit" sublabel="quantlabusa.dev" />
                    </div>

                    <div style={{ background: "rgba(249,115,22,0.04)", border: "1px solid rgba(249,115,22,0.15)", borderRadius: "0.3rem", padding: "0.15rem 0.3rem", marginBottom: "0.16rem", textAlign: "left", width: "100%" }}>
                        <p style={{ fontSize: "0.42rem", color: "#D1D5DB", marginBottom: "0.06rem" }}>✉ contact@quantlabusa.dev</p>
                        <p style={{ fontSize: "0.42rem", color: "#D1D5DB", marginBottom: "0.06rem" }}>🌐 quantlabusa.dev</p>
                        <p style={{ fontSize: "0.42rem", color: "#D1D5DB" }}>📞 Available upon request</p>
                    </div>

                    <p style={{ fontSize: "0.36rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: GREEN, marginBottom: "0.08rem" }}>The QuantLab Guarantee</p>
                    <div style={{ textAlign: "left", marginBottom: "0.16rem", width: "100%" }}>
                        {[
                            "Free 30-minute strategy call — zero obligation",
                            "Fixed-price quotes — no hourly billing, no overruns",
                            "You own 100% of source code AND all data",
                            "CRM, dispatch, invoicing included — no extra subscriptions",
                            "Senior engineers only — no interns, no offshore",
                            "90 days post-launch support at no extra cost",
                            "Weekly demos during development — full visibility",
                            "Built for 24/7 towing & repo operations from day one",
                        ].map((t) => (
                            <div key={t} style={{ display: "flex", alignItems: "center", gap: "0.18rem", marginBottom: "0.1rem" }}>
                                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: GREEN, flexShrink: 0 }} />
                                <span style={{ fontSize: "0.37rem", color: "#D1D5DB", lineHeight: 1.3 }}>{t}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.07rem", paddingTop: "0.1rem", borderTop: `1px solid ${CARDBORDER}` }}>
                        {["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "Stripe", "Vercel", "Docker", "Prisma", "PWA"].map((t) => (
                            <span key={t} className="tech-tag" style={{ fontSize: "0.31rem", padding: "0.05rem 0.18rem" }}>{t}</span>
                        ))}
                    </div>

                    <p style={{ fontSize: "0.28rem", color: "#374151", marginTop: "auto" }}>© 2026 QuantLab Software Solutions LLC</p>
                </div>

                {/* ─── PANEL 1 (RIGHT): Front Cover ─── */}
                <div className="brochure-panel" style={{
                    background: `radial-gradient(ellipse 80% 70% at 50% 50%, #1A0805 0%, ${DARK} 60%, #08060F 100%)`,
                    justifyContent: "center", alignItems: "center", textAlign: "center",
                }}>
                    <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `linear-gradient(0deg, transparent 45%, ${RED} 45.5%, ${RED} 46%, transparent 46.5%), linear-gradient(90deg, transparent 45%, ${RED} 45.5%, ${RED} 46%, transparent 46.5%)`, backgroundSize: "40px 40px" }} />
                    <div style={{ position: "absolute", top: "32%", left: "50%", transform: "translate(-50%, -50%)", width: "380px", height: "380px", background: `radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)`, pointerEvents: "none" }} />

                    <img src="/logo-transparent.png" alt="QuantLab" style={{ width: "180px", height: "180px", objectFit: "contain", marginBottom: "0.2rem", position: "relative", zIndex: 2 }} className="logo-glow" />

                    <h1 style={{ fontSize: "1.25rem", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.12, position: "relative", zIndex: 2, marginBottom: "0.16rem" }}>
                        GoDaddy + CRM<br />
                        <span style={{ background: `linear-gradient(135deg, ${RED}, ${AMBER})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            Is Bleeding Your
                        </span>
                        <br />Towing Company Dry.
                    </h1>

                    <div style={{ width: "2.5rem", height: "2px", background: `linear-gradient(90deg, ${RED}, ${AMBER})`, borderRadius: "2px", margin: "0.14rem auto" }} />

                    <p style={{ fontSize: "0.44rem", color: "#94A3B8", maxWidth: "2.9in", lineHeight: 1.5, position: "relative", zIndex: 2, marginBottom: "0.2rem" }}>
                        You&apos;re paying GoDaddy for a website that can&apos;t dispatch a truck. You&apos;re paying $79–$300/mo for a CRM that doesn&apos;t talk to it. And you&apos;re still doing invoices by hand. There&apos;s a better way.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.09rem", position: "relative", zIndex: 2, textAlign: "left", maxWidth: "2.9in" }}>
                        {[
                            { text: "GoDaddy + CRM + invoicing = $400–$700/mo in disconnected tools", stat: true },
                            { text: "Your CRM doesn't sync with your website — every lead is manual entry", stat: true },
                            { text: "No dispatch, no GPS tracking, no driver app — just a template", stat: false },
                            { text: "Condition reports are stuck in camera rolls — useless in disputes", stat: false },
                            { text: "Lenders & accounts can't self-serve — you're drowning in status calls", stat: false },
                            { text: "One platform replaces it all: website + CRM + dispatch + invoicing", stat: true },
                        ].map((item) => (
                            <p key={item.text} style={{ fontSize: "0.42rem", color: item.stat ? "#FCA5A5" : "#F1A3A3", fontWeight: item.stat ? 700 : 600, display: "flex", alignItems: "flex-start", gap: "0.14rem", lineHeight: 1.3 }}>
                                <span style={{ color: RED, flexShrink: 0, fontSize: "0.48rem", lineHeight: 1 }}>✕</span>
                                <span>{item.text}</span>
                            </p>
                        ))}
                    </div>

                    <div style={{ position: "absolute", bottom: "0.3in", left: "10%", right: "10%", textAlign: "center", zIndex: 2 }}>
                        <div style={{ height: "1px", background: `linear-gradient(90deg, transparent, ${RED}, transparent)`, marginBottom: "0.1rem" }} />
                        <p style={{ fontSize: "0.34rem", color: "#6B7280", letterSpacing: "0.06em" }}>OPEN TO SEE THE FULL COST BREAKDOWN & SOLUTION →</p>
                    </div>
                </div>
            </div>

            {/* ══════════════ SHEET 2 — INSIDE ══════════════ */}
            <div className="brochure-sheet">
                <div className="fold-guide fold-guide-1" />
                <div className="fold-guide fold-guide-2" />

                {/* ─── PANEL 4 (LEFT): The Real Cost — GoDaddy + CRM Stack ─── */}
                <div className="brochure-panel" style={{ background: DARK }}>
                    <p style={{ fontSize: "0.42rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: RED, marginTop: "0.15in", marginBottom: "0.1rem" }}>The Real Price Tag</p>
                    <h2 style={{ fontSize: "0.88rem", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "0.06rem" }}>
                        GoDaddy + CRM{" "}
                        <span style={{ background: `linear-gradient(135deg, ${RED}, ${AMBER})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Looks Cheap.</span>
                        <br />Here&apos;s the Real Math.
                    </h2>
                    <div style={{ width: "2.2rem", height: "2px", background: `linear-gradient(90deg, ${RED}, ${AMBER})`, borderRadius: "2px", margin: "0.08rem 0 0.1rem" }} />

                    <p style={{ fontSize: "0.37rem", color: "#94A3B8", lineHeight: 1.4, marginBottom: "0.08rem" }}>
                        The $12/mo GoDaddy plan is a loss leader. Add a CRM, invoicing, scheduling, and the time you burn gluing it all together. Here&apos;s what towing &amp; repo operators actually spend:
                    </p>

                    {[
                        {
                            icon: "💸", label: "STACKED SUBSCRIPTIONS", cost: "$7,200", period: "/yr",
                            items: [
                                "GoDaddy website: $25–$45/mo after promo ends",
                                "CRM (Towbook/ProTow): $79–$300/mo per user",
                                "QuickBooks invoicing: $30–$80/mo",
                                "Email marketing: $20–$50/mo",
                                "Scheduling/forms: $10–$40/mo",
                                "None of these systems talk to each other",
                            ],
                            summary: "You're paying 5+ vendors $600/mo for tools that don't integrate. Every lead, every invoice, every update is entered manually — twice.",
                        },
                        {
                            icon: "⏱️", label: "WASTED ADMIN HOURS", cost: "$9,600", period: "/yr",
                            items: [
                                "Re-keying leads from website into CRM: 30 min/day",
                                "Manual invoicing + rate card lookups: 20 min/job",
                                "Photo management across camera rolls: 15 min/day",
                                "Answering lender status calls: 2+ hrs/day",
                                "Assembling reports for accounts: 3+ hrs/week",
                            ],
                            summary: "16+ hrs/week doing data entry your platform should handle. At your $50/hr rate, that's $800/mo in admin overhead.",
                        },
                        {
                            icon: "📉", label: "LOST REVENUE", cost: "$8,400", period: "/yr",
                            items: [
                                "No auto-dispatch: slow response loses motor club calls",
                                "No lead auto-response: 78% of buyers pick the first responder",
                                "No client portal: lenders choose competitors who have one",
                                "No analytics: you can't prove SLA compliance to keep accounts",
                            ],
                            summary: "Every contract lost to a competitor with a real platform costs $1K–$5K/mo. One lost account pays for your entire build.",
                        },
                        {
                            icon: "🔒", label: "CRM LOCK-IN TAX", cost: "$3,600", period: "/yr",
                            items: [
                                "Your data is trapped in Towbook/ProTow's proprietary format",
                                "No export = rebuilding from scratch if you switch",
                                "Price hikes every year with no alternative",
                                "You're renting access to YOUR OWN business data",
                            ],
                            summary: "You'll never stop paying — and they know it. One platform you own eliminates CRM costs permanently.",
                        },
                    ].map((item) => (
                        <div key={item.label} style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.12)", borderLeft: `3px solid ${RED}`, borderRadius: "0.25rem", padding: "0.1rem 0.14rem", marginBottom: "0.08rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.1rem", marginBottom: "0.05rem" }}>
                                <span style={{ fontSize: "0.44rem" }}>{item.icon}</span>
                                <p style={{ fontSize: "0.32rem", fontWeight: 800, color: "#94A3B8", letterSpacing: "0.08em" }}>{item.label}</p>
                                <p style={{ fontSize: "0.52rem", fontWeight: 900, color: RED, marginLeft: "auto", lineHeight: 1 }}>{item.cost}<span style={{ fontSize: "0.26rem", color: "#6B7280" }}>{item.period}</span></p>
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.02rem 0.07rem", marginBottom: "0.05rem" }}>
                                {item.items.map((li) => (
                                    <p key={li} style={{ fontSize: "0.29rem", color: "#6B7280", lineHeight: 1.3, width: "calc(50% - 0.04rem)" }}>
                                        <span style={{ color: RED }}>→ </span>{li}
                                    </p>
                                ))}
                            </div>
                            <p style={{ fontSize: "0.3rem", color: "#94A3B8", lineHeight: 1.3, fontWeight: 600, fontStyle: "italic", borderTop: "1px solid rgba(239,68,68,0.1)", paddingTop: "0.04rem" }}>{item.summary}</p>
                        </div>
                    ))}

                    <div style={{ marginTop: "auto", background: "rgba(239,68,68,0.08)", border: "2px solid rgba(239,68,68,0.25)", borderRadius: "0.3rem", padding: "0.12rem 0.16rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                                <p style={{ fontSize: "0.4rem", color: "#CBD5E1", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>True Year-1 Cost of GoDaddy + CRM</p>
                                <p style={{ fontSize: "0.32rem", color: "#6B7280" }}>A unified platform pays for itself in 60–90 days and eliminates CRM fees forever.</p>
                            </div>
                            <p style={{ fontSize: "1.05rem", fontWeight: 900, color: RED, whiteSpace: "nowrap" }}>$28K+</p>
                        </div>
                    </div>
                </div>

                {/* ─── PANEL 5 (CENTER): Head-to-Head — GoDaddy+CRM vs. QuantLab ─── */}
                <div className="brochure-panel" style={{ background: "#0F172A" }}>
                    <p style={{ fontSize: "0.42rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: CYAN, marginTop: "0.15in", marginBottom: "0.1rem" }}>Feature Comparison</p>
                    <h2 style={{ fontSize: "0.82rem", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: "0.06rem" }}>
                        GoDaddy + Separate CRM vs.{" "}
                        <span style={{ background: `linear-gradient(135deg, ${BLUE}, ${CYAN})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            One QuantLab Platform.
                        </span>
                    </h2>
                    <div className="accent-line" style={{ margin: "0.08rem 0 0.1rem" }} />

                    {/* Table header */}
                    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr 0.8fr", gap: 0, marginBottom: "0.04rem" }}>
                        <p style={{ fontSize: "0.32rem", fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em" }}>Category</p>
                        <p style={{ fontSize: "0.32rem", fontWeight: 700, color: RED, textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center" }}>GoDaddy + CRM</p>
                        <p style={{ fontSize: "0.32rem", fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center" }}>QuantLab</p>
                    </div>

                    {[
                        { cat: "CRM & Lead Mgmt", gd: "Separate $79–300/mo CRM. Manual lead entry from website. No sync.", ql: "Built-in CRM: auto-capture from website, pipeline, scoring, follow-up automation. $0 extra." },
                        { cat: "Dispatch System", gd: "Not available. Calls managed via text/phone/whiteboard.", ql: "Real-time dispatch board. Drag-drop assign. Auto-route nearest truck. Status tracking." },
                        { cat: "GPS Fleet Tracking", gd: "Separate GPS vendor at $25–$40/truck/mo.", ql: "Live map integrated into dispatch. Click-to-assign. Geofence alerts. Route history." },
                        { cat: "Invoicing", gd: "QuickBooks ($30–$80/mo). Manual creation. No rate card integration.", ql: "Auto-invoice on job close with rate cards. Card + ACH. Aging reports. QB sync. $0 extra." },
                        { cat: "Client Portal", gd: "Impossible. Clients call for every update.", ql: "Branded portal: status, photos, docs, payments — 24/7 self-service." },
                        { cat: "Condition Reports", gd: "Paper + camera roll. Lost photos. No timestamps.", ql: "Mobile digital capture: GPS, timestamps, damage tags. Auto-attach to record." },
                        { cat: "Driver App", gd: "Text assignments. No structure. No offline.", ql: "PWA: accept, navigate, photo, status, signatures. Offline-capable." },
                        { cat: "Analytics", gd: "Spreadsheets. No real-time data.", ql: "Dashboards: revenue/truck, response times, account profitability, trends." },
                        { cat: "Lot Management", gd: "Walk the yard. Paper log.", ql: "Digital lot map, storage counters, lien alerts, auction prep, chain-of-custody." },
                        { cat: "Data Ownership", gd: "Locked in 2+ vendors. No export.", ql: "You own 100% of code AND data. Deploy anywhere. No lock-in." },
                        { cat: "Integration", gd: "Nothing talks to anything else.", ql: "Every feature connects to every other feature — one unified system." },
                        { cat: "Monthly Cost", gd: "$400–$700/mo in stacked subscriptions, rising annually.", ql: "One-time build. Hosting ~$20/mo. CRM included forever." },
                    ].map((row, i) => (
                        <div key={row.cat} style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr 0.8fr", gap: 0, background: i % 2 === 0 ? CARD : "transparent", borderRadius: "0.15rem", padding: "0.06rem 0.08rem", marginBottom: "0.02rem" }}>
                            <p style={{ fontSize: "0.33rem", fontWeight: 700, color: "#E2E8F0", lineHeight: 1.3 }}>{row.cat}</p>
                            <p style={{ fontSize: "0.3rem", color: "#6B7280", lineHeight: 1.3, padding: "0 0.06rem", borderLeft: `1px solid ${CARDBORDER}`, borderRight: `1px solid ${CARDBORDER}` }}>{row.gd}</p>
                            <p style={{ fontSize: "0.3rem", color: "#CBD5E1", lineHeight: 1.3, paddingLeft: "0.06rem" }}>{row.ql}</p>
                        </div>
                    ))}

                    {/* Score boxes */}
                    <div style={{ marginTop: "auto", display: "flex", gap: "0.1rem", paddingTop: "0.06rem" }}>
                        <div style={{ flex: 1, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.18)", borderRadius: "0.25rem", padding: "0.1rem", textAlign: "center" }}>
                            <p style={{ fontSize: "1rem", fontWeight: 900, color: RED, lineHeight: 1 }}>0/12</p>
                            <p style={{ fontSize: "0.3rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em" }}>GoDaddy+CRM Wins</p>
                        </div>
                        <div style={{ flex: 1, background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.18)", borderRadius: "0.25rem", padding: "0.1rem", textAlign: "center" }}>
                            <p style={{ fontSize: "1rem", fontWeight: 900, color: GREEN, lineHeight: 1 }}>12/12</p>
                            <p style={{ fontSize: "0.3rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em" }}>QuantLab Wins</p>
                        </div>
                    </div>
                </div>

                {/* ─── PANEL 6 (RIGHT): CRM Elimination + CTA ─── */}
                <div className="brochure-panel" style={{ background: DARK }}>
                    <p style={{ fontSize: "0.42rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: GREEN, marginTop: "0.15in", marginBottom: "0.1rem" }}>Eliminate CRM Costs Forever</p>
                    <h2 style={{ fontSize: "0.85rem", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "0.06rem" }}>
                        Stop Paying $300/mo{" "}
                        <br />
                        <span style={{ background: `linear-gradient(135deg, ${ORANGE}, ${AMBER})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            For Someone Else&apos;s Software.
                        </span>
                    </h2>
                    <div className="accent-line" style={{ margin: "0.08rem 0 0.1rem", background: `linear-gradient(90deg, ${ORANGE}, ${AMBER})` }} />

                    <p style={{ fontSize: "0.36rem", color: "#94A3B8", lineHeight: 1.4, marginBottom: "0.08rem" }}>
                        Towbook, ProTow, HubSpot — they charge monthly because they can. You&apos;re renting access to your own business data. We build you a platform with a full CRM baked in. You own it. CRM costs drop to $0. Permanently.
                    </p>

                    {[
                        {
                            icon: "💰",
                            title: "CRM Included at Zero Extra Cost",
                            body: "Full pipeline management, lead auto-capture from your website, account histories, contact logs, follow-up automation, and scoring — built into the same platform as your dispatch, invoicing, and portal. No separate vendor. No monthly fee.",
                        },
                        {
                            icon: "⚙️",
                            title: "Built Around YOUR Towing Workflow",
                            body: "Not a generic CRM squeezed into your process. We map your actual dispatch flow — rate cards, lien timelines, lot layout, driver assignments — and build a system that matches how your team actually works, minus the bottlenecks.",
                        },
                        {
                            icon: "📈",
                            title: "Every Feature Compounds ROI",
                            body: "Dispatch auto-creates the invoice. Invoice links to the CRM record. Client portal pulls from the same data. Unlike 5 separate tools, every feature multiplies the value of the platform — not your monthly bill.",
                        },
                        {
                            icon: "🏆",
                            title: "Win Contracts With Credibility",
                            body: "When a lender or motor club evaluates you, they see a professional platform with a client portal, real-time tracking, and instant analytics. That credibility wins contracts that the guy with GoDaddy + spreadsheets never gets.",
                        },
                        {
                            icon: "🔒",
                            title: "100% Ownership. Zero Lock-In.",
                            body: "The code is yours. The data is yours. No platform dependency, no monthly hostage fees, no \"we're raising prices.\" Deploy anywhere. Hire any developer. Total freedom.",
                        },
                    ].map((item) => (
                        <div key={item.title} style={{ background: CARD, border: `1px solid ${CARDBORDER}`, borderRadius: "0.25rem", padding: "0.1rem 0.14rem", marginBottom: "0.07rem", display: "flex", gap: "0.1rem", alignItems: "flex-start" }}>
                            <span style={{ fontSize: "0.55rem", lineHeight: 1, flexShrink: 0 }}>{item.icon}</span>
                            <div>
                                <p style={{ fontSize: "0.38rem", fontWeight: 800, color: "#E2E8F0", marginBottom: "0.03rem" }}>{item.title}</p>
                                <p style={{ fontSize: "0.31rem", color: "#94A3B8", lineHeight: 1.35 }}>{item.body}</p>
                            </div>
                        </div>
                    ))}

                    {/* CRM Savings Callout */}
                    <div style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)", borderRadius: "0.2rem", padding: "0.08rem 0.12rem", marginBottom: "0.07rem", textAlign: "center" }}>
                        <p style={{ fontSize: "0.42rem", fontWeight: 800, color: GREEN, marginBottom: "0.02rem" }}>CRM Savings: $3,600–$14,400/yr</p>
                        <p style={{ fontSize: "0.28rem", color: "#94A3B8", lineHeight: 1.3 }}>Eliminate Towbook/ProTow/HubSpot subscriptions permanently. Your CRM is built into the platform you own.</p>
                    </div>

                    {/* CTA */}
                    <div style={{ marginTop: "auto", background: `linear-gradient(135deg, #1A1005 0%, ${CARD} 100%)`, border: "1px solid rgba(249,115,22,0.2)", borderRadius: "0.4rem", padding: "0.16rem 0.2rem", textAlign: "center" }}>
                        <p style={{ fontSize: "0.55rem", fontWeight: 900, color: "#fff", marginBottom: "0.05rem" }}>Ready to ditch the CRM bill?</p>
                        <p style={{ fontSize: "0.34rem", color: "#FDBA74", marginBottom: "0.08rem", lineHeight: 1.4 }}>
                            Free 30-min strategy call. We&apos;ll show you exactly what your unified platform looks like — and give you a fixed-price quote.
                        </p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.22rem" }}>
                            <BrochureQR url="https://quantlabusa.dev" size="0.55in" accentColor={ORANGE} label="Scan" sublabel="" />
                            <div style={{ textAlign: "left" }}>
                                <p style={{ fontSize: "0.4rem", color: ORANGE, fontWeight: 700, marginBottom: "0.04rem" }}>Book Your Free Call Today</p>
                                <p style={{ fontSize: "0.36rem", color: "#D1D5DB" }}>contact@quantlabusa.dev</p>
                                <p style={{ fontSize: "0.36rem", color: "#D1D5DB" }}>quantlabusa.dev</p>
                                <p style={{ fontSize: "0.28rem", color: "#6B7280", marginTop: "0.04rem" }}>Fixed-price · You own it · CRM included · 90-day support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
