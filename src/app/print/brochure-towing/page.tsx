"use client";

import React from "react";
import "../brochure/brochure.css";
import BrochureQR from "../BrochureQR";

/* ═══════════════════════════════════════════════════════════════
   QuantLab Tri-Fold Brochure — Towing & Recovery / Repo Edition
   Industry-Aware · Operational Focus · Dark Steel Theme
   ═══════════════════════════════════════════════════════════════ */

const RED = "#EF4444";
const AMBER = "#F59E0B";
const GREEN = "#10B981";
const BLUE = "#3B82F6";
const CYAN = "#06B6D4";
const STEEL = "#334155";
const DARK = "#0B1120";
const CARD = "#161E2E";
const CARDBORDER = "rgba(255,255,255,0.06)";
const ORANGE = "#F97316";

export default function BrochureTowingPage() {
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
                        <h2 style={{ fontSize: "1.1rem", fontWeight: 800, margin: 0 }}>🚛 Towing & Recovery — Tri-Fold Brochure</h2>
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

                {/* ─── PANEL 3 (LEFT): Inside Flap — What You're Missing ─── */}
                <div className="brochure-panel" style={{ background: DARK }}>
                    <p style={{ fontSize: "0.42rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: ORANGE, marginTop: "0.15in", marginBottom: "0.1rem" }}>What You&apos;re Actually Missing</p>
                    <h2 style={{ fontSize: "0.92rem", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "0.08rem" }}>
                        A Website Won&apos;t Run{" "}
                        <span style={{ background: `linear-gradient(135deg, ${ORANGE}, ${AMBER})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Your Operation.</span>
                        <br />A Platform Will.
                    </h2>
                    <div style={{ width: "2.2rem", height: "2px", background: `linear-gradient(90deg, ${ORANGE}, ${AMBER})`, borderRadius: "2px", margin: "0.08rem 0 0.1rem" }} />

                    <p style={{ fontSize: "0.38rem", color: "#94A3B8", lineHeight: 1.45, marginBottom: "0.1rem" }}>
                        GoDaddy and Wix give you a brochure for the internet — a few pages that sit there. Your business needs systems that dispatch, track, invoice, and communicate in real time. Here&apos;s what template builders will never give you:
                    </p>

                    {[
                        {
                            icon: "📡", label: "Live Dispatch Board",
                            gd: "No dispatch capability. You're running calls on paper, texts, or a whiteboard.",
                            ql: "Real-time dispatch dashboard: assign jobs, track driver status, see ETAs, manage priority queues — one screen, no confusion.",
                        },
                        {
                            icon: "📍", label: "GPS Fleet Tracking",
                            gd: "Zero. You have no idea where your trucks are right now without calling each driver.",
                            ql: "Live map with every unit. Click to assign. Route optimization. Geofence alerts when drivers arrive on-scene or return to the lot.",
                        },
                        {
                            icon: "📋", label: "Digital Condition Reports",
                            gd: "Paper forms. Photos in someone's camera roll. No connection to the file. Lost in a week.",
                            ql: "Mobile-first photo capture with timestamps, GPS location, damage annotations, and auto-attachment to the vehicle record. Court-ready.",
                        },
                        {
                            icon: "💰", label: "Automated Invoicing",
                            gd: "Manual invoicing in QuickBooks or Word. Late by days. Errors in rates. No aging visibility.",
                            ql: "Auto-generate invoices on job completion with your rate cards. Send instantly. Track aging. Payment reminders. ACH + card payments built in.",
                        },
                        {
                            icon: "🔐", label: "Client / Lender Portal",
                            gd: "Email back-and-forth. Phone tag. No self-service. Clients can't see their own jobs.",
                            ql: "Branded portal: clients log in to see job status, view photos, download docs, approve charges, and pay invoices — 24/7 without calling you.",
                        },
                        {
                            icon: "📊", label: "Operations Analytics",
                            gd: "You know you're busy. You don't know if you're profitable. No data on response times or close rates.",
                            ql: "Dashboards: revenue per truck, avg response time, close rate by account, lot utilization, driver performance, monthly trends.",
                        },
                        {
                            icon: "📱", label: "Driver Mobile App",
                            gd: "Drivers get texts or calls. No structured info. No photo upload. No status updates.",
                            ql: "PWA for drivers: accept jobs, navigate, capture photos, update status, collect signatures — all from their phone. Works offline.",
                        },
                    ].map((r) => (
                        <div key={r.label} style={{ background: CARD, border: `1px solid ${CARDBORDER}`, borderRadius: "0.25rem", padding: "0.09rem 0.14rem", marginBottom: "0.07rem" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.1rem", marginBottom: "0.03rem" }}>
                                <span style={{ fontSize: "0.42rem" }}>{r.icon}</span>
                                <p style={{ fontSize: "0.36rem", fontWeight: 800, color: "#E2E8F0", letterSpacing: "0.04em" }}>{r.label}</p>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.08rem" }}>
                                <p style={{ fontSize: "0.32rem", color: "#6B7280", lineHeight: 1.35, borderRight: `1px solid ${CARDBORDER}`, paddingRight: "0.08rem" }}>
                                    <span style={{ color: RED, fontWeight: 700, fontSize: "0.3rem" }}>DIY: </span>{r.gd}
                                </p>
                                <p style={{ fontSize: "0.32rem", color: "#CBD5E1", lineHeight: 1.35 }}>
                                    <span style={{ color: GREEN, fontWeight: 700, fontSize: "0.3rem" }}>PRO: </span>{r.ql}
                                </p>
                            </div>
                        </div>
                    ))}

                    <div style={{ marginTop: "auto", paddingTop: "0.06rem", borderTop: `1px solid ${CARDBORDER}` }}>
                        <p style={{ fontSize: "0.34rem", color: "#475569", fontWeight: 600, fontStyle: "italic", lineHeight: 1.4, textAlign: "center" }}>
                            &quot;We went from 3 hours of paperwork a day to 15 minutes. The platform paid for itself in the first month.&quot;
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
                    <p style={{ fontSize: "0.42rem", color: ORANGE, fontWeight: 600, marginBottom: "0.06rem", letterSpacing: "0.06em" }}>Operations Software. Built to Perform.</p>
                    <p style={{ fontSize: "0.35rem", color: "#6B7280", marginBottom: "0.2rem", maxWidth: "2.6in", lineHeight: 1.4 }}>
                        We build the systems that run 24/7 operations — dispatch, fleet, invoicing, client portals, and analytics — in one connected platform you own forever.
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
                            "Senior engineers only — no interns, no offshore",
                            "90 days post-launch support at no extra cost",
                            "Weekly demos during development — full visibility",
                            "NDA available before any conversation",
                            "Built to handle 24/7 operations from day one",
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
                    background: `radial-gradient(ellipse 80% 70% at 50% 50%, #1A0F05 0%, ${DARK} 60%, #08060F 100%)`,
                    justifyContent: "center", alignItems: "center", textAlign: "center",
                }}>
                    <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `linear-gradient(0deg, transparent 45%, ${ORANGE} 45.5%, ${ORANGE} 46%, transparent 46.5%), linear-gradient(90deg, transparent 45%, ${ORANGE} 45.5%, ${ORANGE} 46%, transparent 46.5%)`, backgroundSize: "40px 40px" }} />
                    <div style={{ position: "absolute", top: "32%", left: "50%", transform: "translate(-50%, -50%)", width: "380px", height: "380px", background: `radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)`, pointerEvents: "none" }} />

                    <img src="/logo-transparent.png" alt="QuantLab" style={{ width: "180px", height: "180px", objectFit: "contain", marginBottom: "0.2rem", position: "relative", zIndex: 2 }} className="logo-glow" />

                    <h1 style={{ fontSize: "1.3rem", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.12, position: "relative", zIndex: 2, marginBottom: "0.16rem" }}>
                        Your Operation<br />
                        <span style={{ background: `linear-gradient(135deg, ${ORANGE}, ${AMBER})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            Deserves More
                        </span>
                        <br />Than a Template.
                    </h1>

                    <div style={{ width: "2.5rem", height: "2px", background: `linear-gradient(90deg, ${ORANGE}, ${AMBER})`, borderRadius: "2px", margin: "0.14rem auto" }} />

                    <p style={{ fontSize: "0.46rem", color: "#94A3B8", maxWidth: "2.9in", lineHeight: 1.5, position: "relative", zIndex: 2, marginBottom: "0.22rem" }}>
                        You run a 24/7 operation with trucks, drivers, lots, and clients depending on you. A GoDaddy website can&apos;t dispatch a truck, track a vehicle, or send an invoice. A real platform can — and it pays for itself.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.09rem", position: "relative", zIndex: 2, textAlign: "left", maxWidth: "2.9in" }}>
                        {[
                            "Dispatch, GPS tracking, and job management — all in one system",
                            "Digital condition reports with photo capture and timestamps",
                            "Automated invoicing the moment a job is complete",
                            "Client portal so lenders and accounts can self-serve 24/7",
                            "Real analytics: revenue per truck, response times, close rates",
                            "Driver mobile app — accept jobs, navigate, capture, update",
                            "You own the platform. No monthly hostage fees. Ever.",
                        ].map((item) => (
                            <p key={item} style={{ fontSize: "0.42rem", color: "#FDBA74", fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.14rem", lineHeight: 1.3 }}>
                                <span style={{ color: ORANGE, flexShrink: 0, fontSize: "0.46rem", lineHeight: 1 }}>&#10003;</span>
                                <span>{item}</span>
                            </p>
                        ))}
                    </div>

                    <div style={{ position: "absolute", bottom: "0.3in", left: "10%", right: "10%", textAlign: "center", zIndex: 2 }}>
                        <div style={{ height: "1px", background: `linear-gradient(90deg, transparent, ${ORANGE}, transparent)`, marginBottom: "0.1rem" }} />
                        <p style={{ fontSize: "0.34rem", color: "#6B7280", letterSpacing: "0.06em" }}>OPEN TO SEE WHAT A REAL OPERATIONS PLATFORM LOOKS LIKE →</p>
                    </div>
                </div>
            </div>

            {/* ══════════════ SHEET 2 — INSIDE ══════════════ */}
            <div className="brochure-sheet">
                <div className="fold-guide fold-guide-1" />
                <div className="fold-guide fold-guide-2" />

                {/* ─── PANEL 4 (LEFT): The Real Cost of DIY ─── */}
                <div className="brochure-panel" style={{ background: DARK }}>
                    <p style={{ fontSize: "0.42rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: RED, marginTop: "0.15in", marginBottom: "0.1rem" }}>The Real Cost of &quot;Good Enough&quot;</p>
                    <h2 style={{ fontSize: "0.92rem", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "0.06rem" }}>
                        What DIY Is{" "}
                        <span style={{ background: `linear-gradient(135deg, ${RED}, ${AMBER})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Actually Costing</span>
                        <br />Your Business Every Month.
                    </h2>
                    <div style={{ width: "2.2rem", height: "2px", background: `linear-gradient(90deg, ${RED}, ${AMBER})`, borderRadius: "2px", margin: "0.08rem 0 0.1rem" }} />

                    <p style={{ fontSize: "0.37rem", color: "#94A3B8", lineHeight: 1.4, marginBottom: "0.08rem" }}>
                        You&apos;re paying for a template, a separate invoicing tool, a separate scheduling tool, and burning hours on manual processes. Here&apos;s the math most operators never run:
                    </p>

                    {[
                        {
                            icon: "📞", label: "MISSED & SLOW CALLS", cost: "$5,600", period: "/yr",
                            items: [
                                "No auto-dispatch: calls stack during peak hours",
                                "Manual assignment: 5-8 min per call vs. 30 seconds",
                                "No after-hours web intake: lost calls = lost revenue",
                                "Competitors with auto-respond win the call every time",
                            ],
                            summary: "Every missed call is $150-$500 in lost revenue. At 2-3 missed calls per week, that's $5,600+ annually walking to your competitors.",
                        },
                        {
                            icon: "📄", label: "PAPERWORK & ADMIN", cost: "$9,600", period: "/yr",
                            items: [
                                "Handwritten condition reports: 15-20 min each",
                                "Manual invoicing: 25+ min per invoice, days late",
                                "Photo management: camera roll chaos, lost images",
                                "Lien/title paperwork: hours per week of filing",
                                "Lot management: walking the yard to check inventory",
                            ],
                            summary: "16+ hours/week on admin at your $50/hr rate = $800/mo. That's a full-time hire's worth of work that software handles in minutes.",
                        },
                        {
                            icon: "💳", label: "SLOW PAYMENTS", cost: "$7,200", period: "/yr",
                            items: [
                                "Average invoice is 12-18 days late without auto-send",
                                "No payment link on invoices: clients mail checks",
                                "No aging visibility: you forget who owes you",
                                "No auto-reminders: you call to collect manually",
                            ],
                            summary: "Slow invoicing on $50K/mo receivables costs thousands in float. Auto-invoicing + online payment cuts collection to 3-5 days.",
                        },
                        {
                            icon: "📉", label: "NO VISIBILITY", cost: "$4,000", period: "/yr",
                            items: [
                                "No idea which accounts are profitable vs. losing money",
                                "No response time tracking: can't prove SLA compliance",
                                "No driver performance data: can't optimize routes",
                                "Gut decisions on rates, staffing, equipment — not data",
                            ],
                            summary: "One bad pricing decision or one lost contract because you can't demonstrate performance costs $4K+ easily.",
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
                                <p style={{ fontSize: "0.4rem", color: "#CBD5E1", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.06em" }}>True Annual Waste</p>
                                <p style={{ fontSize: "0.32rem", color: "#6B7280" }}>A custom platform pays for itself in 60–90 days.</p>
                            </div>
                            <p style={{ fontSize: "1.05rem", fontWeight: 900, color: RED, whiteSpace: "nowrap" }}>$26K+</p>
                        </div>
                    </div>
                </div>

                {/* ─── PANEL 5 (CENTER): What We Build For You ─── */}
                <div className="brochure-panel" style={{ background: "#0F172A" }}>
                    <p style={{ fontSize: "0.42rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: CYAN, marginTop: "0.15in", marginBottom: "0.1rem" }}>Your Platform</p>
                    <h2 style={{ fontSize: "0.85rem", fontWeight: 900, color: "#fff", lineHeight: 1.2, marginBottom: "0.06rem" }}>
                        Everything Your Operation Needs.{" "}
                        <span style={{ background: `linear-gradient(135deg, ${BLUE}, ${CYAN})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            One System.
                        </span>
                    </h2>
                    <div className="accent-line" style={{ margin: "0.08rem 0 0.1rem" }} />

                    {[
                        {
                            title: "Dispatch & Job Management",
                            detail: "Real-time dispatch board with drag-and-drop assignment. Priority queuing. Auto-routing. Status tracking from assignment to completion. Handles 24/7 volume without dropping a single call.",
                            result: "Cut dispatch time from 8 min to 30 seconds per call",
                        },
                        {
                            title: "Fleet GPS & Route Tracking",
                            detail: "Live map of every truck. One-click assignment to nearest available unit. Geofence alerts for arrivals and departures. Full route history for compliance and disputes.",
                            result: "15% faster response times. Full accountability.",
                        },
                        {
                            title: "Digital Condition Reports & Photos",
                            detail: "Mobile capture with timestamps, GPS coordinates, and damage tagging. Auto-attached to the vehicle file. Searchable. Court-admissible. Never lose a photo again.",
                            result: "Zero lost documentation. 100% dispute protection.",
                        },
                        {
                            title: "Invoicing & Payment Collection",
                            detail: "Auto-generated invoices with your rate cards on job close. Stripe payments (card + ACH). Aging dashboard. Auto-reminders at 7, 14, 30 days. QuickBooks sync.",
                            result: "Paid 11 days faster. 60% fewer collection calls.",
                        },
                        {
                            title: "Client / Lender Portal",
                            detail: "Branded self-service portal: clients check job status, view condition photos, download releases, approve charges, and pay — 24/7 without calling your office.",
                            result: "70% fewer inbound status calls. Clients love it.",
                        },
                        {
                            title: "Lot & Inventory Management",
                            detail: "Digital lot map with space tracking. Vehicle check-in/out. Storage day counters. Lien deadline alerts. Auction prep checklists. Full chain-of-custody logging.",
                            result: "Never lose a vehicle. Never miss a lien deadline.",
                        },
                        {
                            title: "Operations Dashboard & Analytics",
                            detail: "Revenue per truck. Cost per job. Response time by zone. Driver performance rankings. Account profitability. Monthly/quarterly trend reporting.",
                            result: "Data-driven decisions. Prove SLA compliance instantly.",
                        },
                    ].map((svc) => (
                        <div key={svc.title} style={{ background: CARD, border: `1px solid ${CARDBORDER}`, borderRadius: "0.25rem", padding: "0.1rem 0.14rem", marginBottom: "0.07rem" }}>
                            <p style={{ fontSize: "0.38rem", fontWeight: 700, color: "#ffffff", marginBottom: "0.02rem" }}>{svc.title}</p>
                            <p style={{ fontSize: "0.29rem", color: "#94A3B8", lineHeight: 1.35, marginBottom: "0.03rem" }}>{svc.detail}</p>
                            <p style={{ fontSize: "0.28rem", color: GREEN, fontWeight: 600 }}>&#10003; {svc.result}</p>
                        </div>
                    ))}

                    <p style={{ fontSize: "0.3rem", color: "#6B7280", marginTop: "auto", lineHeight: 1.4, paddingTop: "0.06rem", borderTop: `1px solid ${CARDBORDER}` }}>
                        + Driver Mobile App · Automated Lien Processing · Auction Integration · Impound Management · Police/Bank Coordination · Custom Workflows · Training · 90-Day Support
                    </p>
                </div>

                {/* ─── PANEL 6 (RIGHT): Why QuantLab + CTA ─── */}
                <div className="brochure-panel" style={{ background: DARK }}>
                    <p style={{ fontSize: "0.42rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: GREEN, marginTop: "0.15in", marginBottom: "0.1rem" }}>Why QuantLab</p>
                    <h2 style={{ fontSize: "0.85rem", fontWeight: 900, color: "#fff", lineHeight: 1.15, marginBottom: "0.06rem" }}>
                        We Build Systems<br />
                        <span style={{ background: `linear-gradient(135deg, ${ORANGE}, ${AMBER})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            That Run 24/7
                        </span>
                        <br />— Just Like You Do.
                    </h2>
                    <div className="accent-line" style={{ margin: "0.08rem 0 0.1rem", background: `linear-gradient(90deg, ${ORANGE}, ${AMBER})` }} />

                    <p style={{ fontSize: "0.36rem", color: "#94A3B8", lineHeight: 1.4, marginBottom: "0.08rem" }}>
                        Off-the-shelf tools weren&apos;t built for your workflow. We come from building high-performance, mission-critical systems — the kind that can&apos;t afford downtime. Here&apos;s what makes us different:
                    </p>

                    {[
                        {
                            icon: "⚙️",
                            title: "Built Around YOUR Workflow",
                            body: "Not a generic template stretched to fit. We map your actual dispatch flow, your rate cards, your lien process, your lot layout — and build a system that matches exactly how your team works today, minus the bottlenecks.",
                        },
                        {
                            icon: "📈",
                            title: "Every Addition Compounds Value",
                            body: "Add invoicing → it auto-links to dispatch. Add client portal → it pulls from the same data. Unlike cobbled-together tools, every feature multiplies the value of the platform — not your monthly bill.",
                        },
                        {
                            icon: "🏆",
                            title: "You Look Like the Biggest Company in Town",
                            body: "When a lender or motor club evaluates you, they see a professional platform with a client portal, real-time tracking, and instant reporting. That credibility wins contracts that the guy with a basic website never gets.",
                        },
                        {
                            icon: "🔒",
                            title: "You Own Everything. Forever.",
                            body: "The code is yours. The data is yours. No platform lock-in, no monthly extortion, no \"we're raising prices.\" Deploy anywhere. Hire any developer to maintain it. Total freedom and total control.",
                        },
                        {
                            icon: "🛡️",
                            title: "Enterprise-Grade Security & Uptime",
                            body: "Encrypted data, role-based access, automated backups, and monitoring. Your clients' sensitive information is protected — and your platform doesn't go down when you need it most.",
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

                    {/* Timeline */}
                    <p style={{ fontSize: "0.32rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, margin: "0.06rem 0 0.05rem" }}>How We Work Together</p>
                    <div style={{ display: "flex", gap: "0.06rem", marginBottom: "0.08rem" }}>
                        {[
                            { week: "Week 1", action: "Free call. We ride along with your operation, map your workflow, and deliver a fixed-price quote in 48hrs." },
                            { week: "Wk 2–4", action: "Build in sprints. Weekly demos every Friday. Your team tests it. Your feedback drives every decision." },
                            { week: "Wk 5+", action: "Go live. Train your team. 90 days of support. We don't leave until it's running perfectly." },
                        ].map((step) => (
                            <div key={step.week} style={{ flex: 1, background: "rgba(249,115,22,0.05)", border: "1px solid rgba(249,115,22,0.12)", borderRadius: "0.2rem", padding: "0.08rem 0.1rem", textAlign: "center" }}>
                                <p style={{ fontSize: "0.36rem", fontWeight: 800, color: ORANGE }}>{step.week}</p>
                                <p style={{ fontSize: "0.28rem", color: "#94A3B8", lineHeight: 1.3 }}>{step.action}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div style={{ marginTop: "auto", background: `linear-gradient(135deg, #1A1005 0%, ${CARD} 100%)`, border: "1px solid rgba(249,115,22,0.2)", borderRadius: "0.4rem", padding: "0.18rem 0.22rem", textAlign: "center" }}>
                        <p style={{ fontSize: "0.58rem", fontWeight: 900, color: "#fff", marginBottom: "0.05rem" }}>Ready to upgrade your operation?</p>
                        <p style={{ fontSize: "0.36rem", color: "#FDBA74", marginBottom: "0.08rem", lineHeight: 1.4 }}>
                            Free 30-min strategy call. We&apos;ll show you exactly what your platform will look like — and give you a fixed-price quote.
                        </p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.22rem" }}>
                            <BrochureQR url="https://quantlabusa.dev" size="0.58in" accentColor={ORANGE} label="Scan" sublabel="" />
                            <div style={{ textAlign: "left" }}>
                                <p style={{ fontSize: "0.4rem", color: ORANGE, fontWeight: 700, marginBottom: "0.04rem" }}>Book Your Free Call Today</p>
                                <p style={{ fontSize: "0.36rem", color: "#D1D5DB" }}>contact@quantlabusa.dev</p>
                                <p style={{ fontSize: "0.36rem", color: "#D1D5DB" }}>quantlabusa.dev</p>
                                <p style={{ fontSize: "0.28rem", color: "#6B7280", marginTop: "0.04rem" }}>Fixed-price · You own it · 90-day support</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
