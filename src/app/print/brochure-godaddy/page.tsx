"use client";

import React from "react";
import "../brochure/brochure.css";
import BrochureQR from "../BrochureQR";

/* ═══════════════════════════════════════════════════════════════
   QuantLab Tri-Fold Brochure — "Why Not GoDaddy?" Edition
   Deep-Dive Persuasion · Red / Amber / Cyan Warning Theme
   MAXIMUM VALUE · DENSE PANELS · PRINT-OPTIMIZED
   ═══════════════════════════════════════════════════════════════ */

const RED = "#EF4444";
const AMBER = "#F59E0B";
const GREEN = "#10B981";
const BLUE = "#3B82F6";
const CYAN = "#06B6D4";
const DARK = "#0B1120";
const CARD = "#161E2E";
const CARDBORDER = "rgba(255,255,255,0.06)";

export default function BrochureGodaddyPage() {
    return (
        <div className="brochure-wrapper">
            {/* ── Inline print overrides for bulletproof PDF output ── */}
            <style>{`
                @media print {
                    @page {
                        size: 11in 8.5in;
                        margin: 0 !important;
                    }
                    html, body {
                        margin: 0 !important;
                        padding: 0 !important;
                        -webkit-print-color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    .brochure-wrapper {
                        margin: 0 !important;
                        padding: 0 !important;
                    }
                    .brochure-sheet {
                        page-break-after: always !important;
                        page-break-inside: avoid !important;
                        break-after: page !important;
                        break-inside: avoid !important;
                        width: 11in !important;
                        height: 8.5in !important;
                        margin: 0 !important;
                    }
                    .brochure-sheet:last-child {
                        page-break-after: auto !important;
                        break-after: auto !important;
                    }
                    .print-instructions { display: none !important; }
                    .fold-guide { display: none !important; }
                }
            `}</style>

            {/* ── On-screen print instruction bar ── */}
            <div className="print-instructions no-print" style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 9999,
                background: "linear-gradient(135deg, #1E293B 0%, #0F172A 100%)",
                borderBottom: "2px solid rgba(56,189,248,0.3)",
                padding: "0.8rem 1.5rem",
                fontFamily: "system-ui, -apple-system, sans-serif",
                color: "#E2E8F0",
            }}>
                <div style={{ maxWidth: "900px", margin: "0 auto" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.6rem" }}>
                        <h2 style={{ fontSize: "1.1rem", fontWeight: 800, margin: 0 }}>
                            📄 GoDaddy vs. Pro — Tri-Fold Brochure
                        </h2>
                        <button
                            onClick={() => window.print()}
                            style={{
                                padding: "0.6rem 1.4rem", borderRadius: "0.5rem", fontSize: "0.9rem",
                                fontWeight: 700, cursor: "pointer", border: "none",
                                background: `linear-gradient(135deg, ${BLUE}, ${CYAN})`,
                                color: "#ffffff", transition: "all 0.2s",
                                boxShadow: "0 4px 15px rgba(59,130,246,0.35)",
                            }}
                        >
                            🖨️ Print / Save as PDF
                        </button>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1rem", fontSize: "0.82rem", lineHeight: 1.5 }}>
                        <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "0.5rem", padding: "0.6rem 0.8rem", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <p style={{ fontWeight: 700, color: CYAN, marginBottom: "0.3rem" }}>Step 1: Save as PDF</p>
                            <p style={{ color: "#94A3B8" }}>Click the button above → select <strong style={{ color: "#E2E8F0" }}>&quot;Save as PDF&quot;</strong> as your printer/destination.</p>
                        </div>
                        <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "0.5rem", padding: "0.6rem 0.8rem", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <p style={{ fontWeight: 700, color: CYAN, marginBottom: "0.3rem" }}>Step 2: Print Settings</p>
                            <p style={{ color: "#94A3B8" }}>Set layout to <strong style={{ color: "#E2E8F0" }}>Landscape</strong>. Set margins to <strong style={{ color: "#E2E8F0" }}>None</strong>. Enable <strong style={{ color: "#E2E8F0" }}>&quot;Background graphics&quot;</strong>.</p>
                        </div>
                        <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "0.5rem", padding: "0.6rem 0.8rem", border: "1px solid rgba(255,255,255,0.08)" }}>
                            <p style={{ fontWeight: 700, color: CYAN, marginBottom: "0.3rem" }}>Step 3: Print Front &amp; Back</p>
                            <p style={{ color: "#94A3B8" }}>The PDF has <strong style={{ color: "#E2E8F0" }}>2 pages</strong> — Page 1 is the outside, Page 2 is the inside. Print <strong style={{ color: "#E2E8F0" }}>double-sided</strong> (flip on short edge).</p>
                        </div>
                    </div>

                    <div style={{ marginTop: "0.5rem", display: "flex", gap: "1.5rem", justifyContent: "center", fontSize: "0.75rem", color: "#6B7280" }}>
                        <span>📐 US Letter Landscape (11 × 8.5 in)</span>
                        <span>🔀 2 Pages → Front &amp; Back</span>
                        <span>✂️ Tri-fold on the dashed lines</span>
                    </div>
                </div>
            </div>

            {/* Spacer so content isn't hidden behind fixed toolbar */}
            <div className="no-print" style={{ height: "140px" }} />

            {/* ══════════════ SHEET 1 — OUTSIDE ══════════════ */}
            <div className="brochure-sheet">
                <div className="fold-guide fold-guide-1" />
                <div className="fold-guide fold-guide-2" />

                {/* ─── PANEL 3 (LEFT): Inside Flap — The GoDaddy Ceiling ─── */}
                <div className="brochure-panel" style={{ background: DARK }}>
                    <p style={{ fontSize: "0.42rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: AMBER, marginTop: "0.15in", marginBottom: "0.12rem" }}>The GoDaddy Ceiling</p>
                    <h2 style={{ fontSize: "0.95rem", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "0.08rem" }}>
                        7 Things You&apos;ll{" "}
                        <span style={{ background: `linear-gradient(135deg, ${RED}, ${AMBER})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Never</span>{" "}
                        Get<br />from a Website Builder.
                    </h2>
                    <div style={{ width: "2.2rem", height: "2px", background: `linear-gradient(90deg, ${AMBER}, ${RED})`, borderRadius: "2px", margin: "0.1rem 0 0.12rem" }} />

                    <p style={{ fontSize: "0.40rem", color: "#94A3B8", lineHeight: 1.45, marginBottom: "0.12rem" }}>
                        GoDaddy gives you a brochure for the internet. Pretty, static, disconnected from every system that actually runs your business. Here is exactly what you&apos;re missing — and what a professional platform delivers instead.
                    </p>

                    {[
                        {
                            icon: "🔗", label: "Live Integrations",
                            gd: "Embed codes. iFrames. Manual copy/paste between tools. None of your data flows automatically.",
                            ql: "Native, two-way API connections to your CRM, scheduler, QuickBooks, payment processor — real-time data sync with zero manual work.",
                        },
                        {
                            icon: "📋", label: "Intelligent Lead Capture",
                            gd: "Basic contact form → email notification. No scoring, no follow-up, no pipeline. You manually enter leads.",
                            ql: "Smart forms with conditional logic, auto-responders within 60 seconds, lead scoring, source attribution, follow-up sequences, and CRM pipeline insertion.",
                        },
                        {
                            icon: "💳", label: "Full Payment Processing",
                            gd: "Stripe button or PayPal widget. No ACH, no recurring billing, no deposit splits, no invoice aging.",
                            ql: "Complete Stripe suite: one-time, recurring, ACH, deposit splits, auto-invoicing, payment reminders, aging reports, and QuickBooks sync.",
                        },
                        {
                            icon: "🔐", label: "Secure Client Portal",
                            gd: "Not possible. Password-protect a page at most. No per-client data, no document sharing, no messaging.",
                            ql: "Branded client login: project status dashboards, shared documents, invoice payments, real-time messaging, and role-based access control.",
                        },
                        {
                            icon: "📊", label: "Real Business Analytics",
                            gd: "Visitor counts and page views from Google Analytics embed. Nothing tied to revenue or operations.",
                            ql: "Custom dashboards: CAC by source, close rate by service line, revenue per channel, team KPIs, proposal win/loss ratios — decisions from data.",
                        },
                        {
                            icon: "🔄", label: "Server-Side Automation",
                            gd: "Zapier duct-tape at $50–$200/mo that breaks on edge cases. No error handling. No retry logic.",
                            ql: "Built-in server automation: triggered workflows, background jobs, webhook handlers, retry with exponential backoff. Zero third-party dependencies.",
                        },
                        {
                            icon: "📱", label: "Mobile & PWA",
                            gd: "Responsive template. Zero native capability. Cannot install on home screen. No offline access.",
                            ql: "Progressive Web App or native mobile builds. Home screen install, push notifications, offline caching, and native-feel performance.",
                        },
                    ].map((r) => (
                        <div key={r.label} style={{ background: CARD, border: `1px solid ${CARDBORDER}`, borderRadius: "0.25rem", padding: "0.1rem 0.14rem", marginBottom: "0.08rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.1rem", marginBottom: "0.04rem" }}>
                                <span style={{ fontSize: "0.46rem" }}>{r.icon}</span>
                                <p style={{ fontSize: "0.38rem", fontWeight: 800, color: "#E2E8F0", letterSpacing: "0.04em" }}>{r.label}</p>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.08rem" }}>
                                <p style={{ fontSize: "0.34rem", color: "#6B7280", lineHeight: 1.35, borderRight: `1px solid ${CARDBORDER}`, paddingRight: "0.08rem" }}>
                                    <span style={{ color: RED, fontWeight: 700, fontSize: "0.32rem" }}>GD: </span>{r.gd}
                                </p>
                                <p style={{ fontSize: "0.34rem", color: "#CBD5E1", lineHeight: 1.35 }}>
                                    <span style={{ color: GREEN, fontWeight: 700, fontSize: "0.32rem" }}>QL: </span>{r.ql}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div style={{ marginTop: "auto", paddingTop: "0.08rem", borderTop: `1px solid ${CARDBORDER}` }}>
                        <p style={{ fontSize: "0.36rem", color: "#475569", fontWeight: 600, fontStyle: "italic", lineHeight: 1.4, textAlign: "center" }}>
                            &quot;We tried GoDaddy for 8 months. Spent more time fighting the platform than running our business.&quot;
                        </p>
                    </div>
                </div>

                {/* ─── PANEL 2 (CENTER): Back Cover — Contact & Trust ─── */}
                <div className="brochure-panel" style={{
                    background: `linear-gradient(180deg, ${DARK} 0%, #0F172A 100%)`,
                    justifyContent: "center", alignItems: "center", textAlign: "center",
                }}>
                    <img src="/logo-transparent.png" alt="QuantLab" style={{ width: "165px", height: "165px", objectFit: "contain", marginBottom: "0.15rem" }} className="logo-glow" />

                    <p style={{ fontSize: "0.65rem", fontWeight: 900, color: "#ffffff", marginBottom: "0.04rem" }}>QuantLab Software Solutions</p>
                    <p style={{ fontSize: "0.44rem", color: BLUE, fontWeight: 600, marginBottom: "0.06rem", letterSpacing: "0.06em" }}>Built by Engineers. Owned by You.</p>
                    <p style={{ fontSize: "0.36rem", color: "#6B7280", marginBottom: "0.22rem", maxWidth: "2.6in", lineHeight: 1.4 }}>
                        Stop wrestling with DIY platforms that were never designed to run your business. Get a system that works as hard as you do.
                    </p>

                    <div style={{ margin: "0 auto 0.22rem auto" }}>
                        <BrochureQR url="https://quantlabusa.dev" size="0.92in" accentColor={BLUE} fgColor="#E2E8F0" label="Scan to Visit" sublabel="quantlabusa.dev" />
                    </div>

                    <div style={{ background: "rgba(56,189,248,0.04)", border: "1px solid rgba(56,189,248,0.12)", borderRadius: "0.3rem", padding: "0.16rem 0.3rem", marginBottom: "0.18rem", textAlign: "left", width: "100%" }}>
                        <p style={{ fontSize: "0.44rem", color: "#D1D5DB", marginBottom: "0.06rem" }}>✉ contact@quantlabusa.dev</p>
                        <p style={{ fontSize: "0.44rem", color: "#D1D5DB", marginBottom: "0.06rem" }}>🌐 quantlabusa.dev</p>
                        <p style={{ fontSize: "0.44rem", color: "#D1D5DB" }}>📞 Available upon request</p>
                    </div>

                    {/* The QuantLab Guarantee */}
                    <p style={{ fontSize: "0.38rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: GREEN, marginBottom: "0.1rem" }}>The QuantLab Guarantee</p>
                    <div style={{ textAlign: "left", marginBottom: "0.18rem", width: "100%" }}>
                        {[
                            { text: "Free 30-minute strategy call — zero obligation", bold: "Free" },
                            { text: "Fixed-price quotes — no hourly billing, no surprises", bold: "Fixed-price" },
                            { text: "You own 100% of source code AND data — forever", bold: "100%" },
                            { text: "Senior engineers only — never interns, never offshore", bold: "Senior" },
                            { text: "90 days post-launch support included at no cost", bold: "90 days" },
                            { text: "Weekly demos during development — full transparency", bold: "Weekly" },
                            { text: "NDA available before any conversation", bold: "NDA" },
                            { text: "Launch in weeks, not months — guaranteed timeline", bold: "Weeks" },
                        ].map((t) => (
                            <div key={t.text} style={{ display: "flex", alignItems: "center", gap: "0.2rem", marginBottom: "0.12rem" }}>
                                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: GREEN, flexShrink: 0 }} />
                                <span style={{ fontSize: "0.39rem", color: "#D1D5DB", lineHeight: 1.3 }}>{t.text}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.08rem", paddingTop: "0.1rem", borderTop: `1px solid ${CARDBORDER}` }}>
                        {["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Vercel", "Stripe", "Docker", "Prisma"].map((t) => (
                            <span key={t} className="tech-tag" style={{ fontSize: "0.33rem", padding: "0.06rem 0.2rem" }}>{t}</span>
                        ))}
                    </div>

                    <p style={{ fontSize: "0.3rem", color: "#374151", marginTop: "auto" }}>© 2026 QuantLab Software Solutions LLC</p>
                </div>

                {/* ─── PANEL 1 (RIGHT): Front Cover ─── */}
                <div className="brochure-panel" style={{
                    background: `radial-gradient(ellipse 80% 70% at 50% 50%, #180810 0%, ${DARK} 60%, #06050D 100%)`,
                    justifyContent: "center", alignItems: "center", textAlign: "center",
                }}>
                    {/* Background effects */}
                    <div style={{ position: "absolute", inset: 0, opacity: 0.035, backgroundImage: `linear-gradient(0deg, transparent 45%, ${RED} 45.5%, ${RED} 46%, transparent 46.5%), linear-gradient(90deg, transparent 45%, ${RED} 45.5%, ${RED} 46%, transparent 46.5%)`, backgroundSize: "40px 40px" }} />
                    <div style={{ position: "absolute", top: "32%", left: "50%", transform: "translate(-50%, -50%)", width: "380px", height: "380px", background: `radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)`, pointerEvents: "none" }} />

                    <img src="/logo-transparent.png" alt="QuantLab" style={{ width: "185px", height: "185px", objectFit: "contain", marginBottom: "0.2rem", position: "relative", zIndex: 2 }} className="logo-glow" />

                    <h1 style={{ fontSize: "1.35rem", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.12, position: "relative", zIndex: 2, marginBottom: "0.18rem" }}>
                        Why GoDaddy{" "}
                        <br />
                        <span style={{ background: `linear-gradient(135deg, ${RED}, ${AMBER})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            Is Costing You
                        </span>
                        <br />
                        More Than It Saves.
                    </h1>

                    <div style={{ width: "2.5rem", height: "2px", background: `linear-gradient(90deg, ${RED}, ${AMBER})`, borderRadius: "2px", margin: "0.14rem auto" }} />

                    <p style={{ fontSize: "0.48rem", color: "#94A3B8", maxWidth: "2.9in", lineHeight: 1.5, position: "relative", zIndex: 2, marginBottom: "0.24rem" }}>
                        The hidden fees, the broken integrations, the leads that fall through the cracks, and the revenue you&apos;re leaving on the table — all because a template was never designed to run a business.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.1rem", position: "relative", zIndex: 2, textAlign: "left", maxWidth: "2.9in" }}>
                        {[
                            { text: "78% of buyers choose the first business to respond — your template can't auto-respond", stat: true },
                            { text: "GoDaddy's real annual cost exceeds $24,000 after hidden fees & lost time", stat: true },
                            { text: "You cannot connect your CRM, scheduler, or invoicing to a template", stat: false },
                            { text: "Your data is locked on their servers — migration costs thousands", stat: false },
                            { text: "Your competitors are already on custom-built, professional platforms", stat: false },
                            { text: "Every week you spend fighting a template is a week you're not growing", stat: false },
                        ].map((item) => (
                            <p key={item.text} style={{ fontSize: "0.43rem", color: item.stat ? "#FCA5A5" : "#F1A3A3", fontWeight: item.stat ? 700 : 600, display: "flex", alignItems: "flex-start", gap: "0.14rem", lineHeight: 1.3 }}>
                                <span style={{ color: RED, flexShrink: 0, fontSize: "0.5rem", lineHeight: 1 }}>✕</span>
                                <span>{item.text}</span>
                            </p>
                        ))}
                    </div>

                    <div style={{ position: "absolute", bottom: "0.3in", left: "10%", right: "10%", textAlign: "center", zIndex: 2 }}>
                        <div style={{ height: "1px", background: `linear-gradient(90deg, transparent, ${RED}, transparent)`, marginBottom: "0.1rem" }} />
                        <p style={{ fontSize: "0.36rem", color: "#6B7280", letterSpacing: "0.06em" }}>OPEN THIS BROCHURE TO SEE THE FULL BREAKDOWN →</p>
                    </div>
                </div>
            </div>

            {/* ══════════════ SHEET 2 — INSIDE ══════════════ */}
            <div className="brochure-sheet">
                <div className="fold-guide fold-guide-1" />
                <div className="fold-guide fold-guide-2" />

                {/* ─── PANEL 4 (LEFT): The Real Cost of DIY ─── */}
                <div className="brochure-panel" style={{ background: DARK }}>
                    <p style={{ fontSize: "0.42rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: RED, marginTop: "0.15in", marginBottom: "0.1rem" }}>The Real Price Tag</p>
                    <h2 style={{ fontSize: "0.95rem", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "0.06rem" }}>
                        GoDaddy looks{" "}
                        <span style={{ background: `linear-gradient(135deg, ${RED}, ${AMBER})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>cheap.</span>
                        <br />It isn&apos;t. Not even close.
                    </h2>
                    <div style={{ width: "2.2rem", height: "2px", background: `linear-gradient(90deg, ${RED}, ${AMBER})`, borderRadius: "2px", margin: "0.08rem 0 0.1rem" }} />

                    <p style={{ fontSize: "0.39rem", color: "#94A3B8", lineHeight: 1.4, marginBottom: "0.1rem" }}>
                        The $12/mo plan is a loss leader. By month 3, you&apos;re stacking premium, e-commerce, marketing, and SEO add-ons — all billed separately, none of them talking to each other. Here&apos;s the real math:
                    </p>

                    {/* Cost breakdown cards */}
                    {[
                        {
                            icon: "💸", label: "FEE CREEP", cost: "$4,800", period: "/yr",
                            items: [
                                "Base plan: $12/mo → $25/mo after trial",
                                "E-commerce add-on: $25/mo",
                                "Email marketing: $10–$40/mo",
                                "SSL certificate: included (but limited)",
                                "SEO tools premium: $7/mo",
                                "Online scheduling: $10/mo",
                                "Phone support upgrade: $15/mo",
                            ],
                            summary: "Before you've built anything real, you're spending $400/mo on disconnected tools.",
                        },
                        {
                            icon: "⏱️", label: "YOUR TIME", cost: "$7,200", period: "/yr",
                            items: [
                                "Learning the editor: 20+ hours upfront",
                                "Fighting mobile breakage: 3 hrs/mo",
                                "Updating plugins and content: 4 hrs/mo",
                                "Troubleshooting broken layouts: 2 hrs/mo",
                                "Managing email/scheduling separately: 3 hrs/mo",
                            ],
                            summary: "12+ hrs/month at your $50/hr billable rate = $7,200/yr doing IT work instead of running your business.",
                        },
                        {
                            icon: "📉", label: "LOST REVENUE", cost: "$14,400", period: "/yr",
                            items: [
                                "No auto-responder: leads go cold in 5 min",
                                "No lead scoring: you treat $500 and $50K leads the same",
                                "No follow-up sequences: 80% of sales need 5+ touches",
                                "No source tracking: you can't optimize what you can't measure",
                                "No client portal: competitors who have one win the trust game",
                            ],
                            summary: "30% of your leads are going to competitors who respond faster and look more professional.",
                        },
                        {
                            icon: "🔒", label: "PLATFORM LOCK-IN", cost: "$5,000", period: "+ exit",
                            items: [
                                "Your content is trapped in their proprietary format",
                                "No code export — you start over from scratch",
                                "SEO rankings lost during migration",
                                "Domain transfer fees and DNS downtime",
                                "Re-building takes 2–4 months minimum",
                            ],
                            summary: "When you outgrow GoDaddy (you will), escaping costs thousands in developer hours, lost rankings, and downtime.",
                        },
                    ].map((item) => (
                        <div key={item.label} style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.12)", borderLeft: `3px solid ${RED}`, borderRadius: "0.25rem", padding: "0.12rem 0.16rem", marginBottom: "0.1rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.12rem", marginBottom: "0.06rem" }}>
                                <span style={{ fontSize: "0.48rem" }}>{item.icon}</span>
                                <p style={{ fontSize: "0.34rem", fontWeight: 800, color: "#94A3B8", letterSpacing: "0.08em" }}>{item.label}</p>
                                <p style={{ fontSize: "0.56rem", fontWeight: 900, color: RED, marginLeft: "auto", lineHeight: 1 }}>{item.cost}<span style={{ fontSize: "0.28rem", color: "#6B7280" }}>{item.period}</span></p>
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.02rem 0.08rem", marginBottom: "0.06rem" }}>
                                {item.items.map((li) => (
                                    <p key={li} style={{ fontSize: "0.3rem", color: "#6B7280", lineHeight: 1.3, width: "calc(50% - 0.04rem)" }}>
                                        <span style={{ color: RED }}>→ </span>{li}
                                    </p>
                                ))}
                            </div>
                            <p style={{ fontSize: "0.32rem", color: "#94A3B8", lineHeight: 1.3, fontWeight: 600, fontStyle: "italic", borderTop: `1px solid rgba(239,68,68,0.1)`, paddingTop: "0.04rem" }}>{item.summary}</p>
                        </div>
                    ))}

                    {/* Total */}
                    <div style={{ marginTop: "auto", background: "rgba(239,68,68,0.08)", border: `2px solid rgba(239,68,68,0.25)`, borderRadius: "0.3rem", padding: "0.14rem 0.18rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                                <p style={{ fontSize: "0.42rem", color: "#CBD5E1", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>True Year-1 Cost of GoDaddy</p>
                                <p style={{ fontSize: "0.34rem", color: "#6B7280" }}>A professional platform pays for itself in 60–90 days.</p>
                            </div>
                            <p style={{ fontSize: "1.1rem", fontWeight: 900, color: RED, whiteSpace: "nowrap" }}>$31K+</p>
                        </div>
                    </div>
                </div>

                {/* ─── PANEL 5 (CENTER): Head-to-Head Comparison ─── */}
                <div className="brochure-panel" style={{ background: "#0F172A" }}>
                    <p style={{ fontSize: "0.42rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: CYAN, marginTop: "0.15in", marginBottom: "0.1rem" }}>Feature Comparison</p>
                    <h2 style={{ fontSize: "0.85rem", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: "0.06rem" }}>
                        GoDaddy vs. QuantLab —{" "}
                        <span style={{ background: `linear-gradient(135deg, ${BLUE}, ${CYAN})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            Every Single Category.
                        </span>
                    </h2>
                    <div className="accent-line" style={{ margin: "0.08rem 0 0.1rem" }} />

                    {/* Table header */}
                    <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr 0.8fr", gap: 0, marginBottom: "0.04rem" }}>
                        <p style={{ fontSize: "0.32rem", fontWeight: 700, color: "#475569", textTransform: "uppercase", letterSpacing: "0.08em" }}>Category</p>
                        <p style={{ fontSize: "0.32rem", fontWeight: 700, color: RED, textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center" }}>GoDaddy</p>
                        <p style={{ fontSize: "0.32rem", fontWeight: 700, color: GREEN, textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center" }}>QuantLab</p>
                    </div>

                    {[
                        { cat: "Design Freedom", gd: "100 templates. Change one thing, break the rest.", ql: "Pixel-perfect custom design. Your brand, your rules. Zero template limits." },
                        { cat: "Page Load Speed", gd: "3–6 sec load. Bloated scripts, shared hosting.", ql: "Sub-2s guaranteed. Server-side rendering, CDN, optimized assets." },
                        { cat: "Lighthouse Score", gd: "40–65 typical. Kills SEO ranking.", ql: "95+ guaranteed. Performance, accessibility, best practices." },
                        { cat: "SEO Capability", gd: "Basic meta tags. No structured data. Slow rendering tanks rank.", ql: "SSR, schema markup, sitemaps, Core Web Vitals optimized, dynamic OpenGraph." },
                        { cat: "CRM & Leads", gd: "None built in. Third-party widgets that don't sync.", ql: "Full CRM: pipeline, scoring, attribution, follow-up automation, close rate analytics." },
                        { cat: "Payments", gd: "Basic Stripe button. No ACH, no recurring, no invoicing.", ql: "Complete payment suite: cards, ACH, subscriptions, auto-invoicing, aging reports." },
                        { cat: "Client Portal", gd: "Not possible. Password-protect a page at most.", ql: "Branded login. Project status, docs, payments, messaging — all per-client." },
                        { cat: "Custom Logic", gd: "Zero. What the template gives you is all you get.", ql: "Anything: pricing calculators, booking flows, approval workflows, dashboards." },
                        { cat: "Security", gd: "Shared hosting. Basic SSL. No monitoring or RBAC.", ql: "RBAC, encryption at rest/transit, Sentry monitoring, OWASP best practices." },
                        { cat: "Scalability", gd: "Hits a wall. Rebuild everything to grow.", ql: "Architected to scale. Add users, features, integrations—no rebuilding." },
                        { cat: "Data Ownership", gd: "Their servers, their terms, their rules.", ql: "You own 100% of code and data. Deploy anywhere. No lock-in." },
                        { cat: "Ongoing Cost", gd: "$200–500/mo recurring, rising annually.", ql: "One-time build. Hosting ~$20/mo. Updates as needed." },
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
                            <p style={{ fontSize: "0.3rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em" }}>GoDaddy Wins</p>
                        </div>
                        <div style={{ flex: 1, background: "rgba(16,185,129,0.07)", border: "1px solid rgba(16,185,129,0.18)", borderRadius: "0.25rem", padding: "0.1rem", textAlign: "center" }}>
                            <p style={{ fontSize: "1rem", fontWeight: 900, color: GREEN, lineHeight: 1 }}>12/12</p>
                            <p style={{ fontSize: "0.3rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.06em" }}>QuantLab Wins</p>
                        </div>
                    </div>
                </div>

                {/* ─── PANEL 6 (RIGHT): Why QuantLab + CTA ─── */}
                <div className="brochure-panel" style={{ background: DARK }}>
                    <p style={{ fontSize: "0.42rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: GREEN, marginTop: "0.15in", marginBottom: "0.1rem" }}>The Professional Alternative</p>
                    <h2 style={{ fontSize: "0.88rem", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "0.06rem" }}>
                        Stop Renting a Template.{" "}
                        <br />
                        <span style={{ background: `linear-gradient(135deg, ${BLUE}, ${CYAN})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            Start Owning a Platform.
                        </span>
                    </h2>
                    <div className="accent-line" style={{ margin: "0.08rem 0 0.1rem" }} />

                    <p style={{ fontSize: "0.38rem", color: "#94A3B8", lineHeight: 1.4, marginBottom: "0.1rem" }}>
                        GoDaddy built their business to charge you monthly — forever. We build once, you own it forever. Every feature integrates with everything else. Your investment compounds — not your bill.
                    </p>

                    {[
                        {
                            icon: "⚙️",
                            title: "Engineered Around YOUR Workflow",
                            body: "Not a template stretched to fit. Every screen, every button, every automation is designed around how your team actually works. Estimates, client follow-up, payment collection, project tracking — unified, not duct-taped.",
                        },
                        {
                            icon: "📈",
                            title: "Every Feature Compounds ROI",
                            body: "On GoDaddy, each new need means another paid plugin that doesn't integrate. On your platform, each new feature connects to the existing system — multiplying value, not adding monthly costs.",
                        },
                        {
                            icon: "🏆",
                            title: "Instant Credibility. Real Results.",
                            body: "83% of buyers judge a company by its website before the first call. A custom platform with client portal access, blazing speed, and professional design positions you as the industry leader — because you look like one.",
                        },
                        {
                            icon: "🔒",
                            title: "100% Ownership, Zero Lock-In",
                            body: "The code is yours. The data is yours. Deploy to any server you choose. Hire any developer to maintain it. No platform dependency, no monthly extortion, no surprise price hikes. Total freedom.",
                        },
                        {
                            icon: "🛡️",
                            title: "Enterprise Security from Day One",
                            body: "Role-based access control, encrypted data at rest and in transit, automated backups, security monitoring, and OWASP-compliant code. Your clients' data is protected — and so is your reputation.",
                        },
                    ].map((item) => (
                        <div key={item.title} style={{ background: CARD, border: `1px solid ${CARDBORDER}`, borderRadius: "0.25rem", padding: "0.12rem 0.16rem", marginBottom: "0.08rem", display: "flex", gap: "0.12rem", alignItems: "flex-start" }}>
                            <span style={{ fontSize: "0.6rem", lineHeight: 1, flexShrink: 0, marginTop: "0.01rem" }}>{item.icon}</span>
                            <div>
                                <p style={{ fontSize: "0.4rem", fontWeight: 800, color: "#E2E8F0", marginBottom: "0.03rem" }}>{item.title}</p>
                                <p style={{ fontSize: "0.33rem", color: "#94A3B8", lineHeight: 1.35 }}>{item.body}</p>
                            </div>
                        </div>
                    ))}

                    {/* Timeline */}
                    <p style={{ fontSize: "0.34rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, margin: "0.06rem 0 0.06rem" }}>From First Call → Live Production</p>
                    <div style={{ display: "flex", gap: "0.06rem", marginBottom: "0.1rem" }}>
                        {[
                            { week: "Week 1", action: "Free strategy call. We scope your vision, map your workflow, and deliver a fixed-price quote within 48hrs." },
                            { week: "Wk 2–4", action: "Build in focused sprints. Weekly demos every Friday. Your feedback shapes every decision. No black box." },
                            { week: "Wk 5+", action: "Launch to production. Full team training. 90 days of included support. You're never left on your own." },
                        ].map((step) => (
                            <div key={step.week} style={{ flex: 1, background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.12)", borderRadius: "0.2rem", padding: "0.1rem 0.1rem", textAlign: "center" }}>
                                <p style={{ fontSize: "0.38rem", fontWeight: 800, color: GREEN }}>{step.week}</p>
                                <p style={{ fontSize: "0.29rem", color: "#94A3B8", lineHeight: 1.3 }}>{step.action}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div style={{ marginTop: "auto", background: `linear-gradient(135deg, #0D2B1A 0%, ${CARD} 100%)`, border: "1px solid rgba(16,185,129,0.2)", borderRadius: "0.4rem", padding: "0.22rem 0.25rem", textAlign: "center" }}>
                        <p style={{ fontSize: "0.6rem", fontWeight: 900, color: "#fff", marginBottom: "0.06rem" }}>Ready to stop renting?</p>
                        <p style={{ fontSize: "0.38rem", color: "#6EE7B7", marginBottom: "0.1rem", lineHeight: 1.4 }}>
                            Free 30-min strategy call. We&apos;ll show you exactly what your business platform will look like — and give you a fixed-price quote on the spot.
                        </p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.25rem" }}>
                            <BrochureQR url="https://quantlabusa.dev" size="0.6in" accentColor={GREEN} label="Scan" sublabel="" />
                            <div style={{ textAlign: "left" }}>
                                <p style={{ fontSize: "0.42rem", color: GREEN, fontWeight: 700, marginBottom: "0.04rem" }}>Book Your Free Call Today</p>
                                <p style={{ fontSize: "0.38rem", color: "#D1D5DB" }}>contact@quantlabusa.dev</p>
                                <p style={{ fontSize: "0.38rem", color: "#D1D5DB" }}>quantlabusa.dev</p>
                                <p style={{ fontSize: "0.3rem", color: "#6B7280", marginTop: "0.04rem" }}>Fixed-price · You own it · 90-day support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
