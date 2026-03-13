"use client";

import React from "react";
import "../brochure-business/brochure-business.css";
import BrochureQR from "../BrochureQR";

/* ═══════════════════════════════════════════════════════════════
   QuantLab — Contractors & Construction Edition
   Navy + Gold + White  ·  LARGE PRINT FONTS
   ═══════════════════════════════════════════════════════════════ */

export default function BrochureContractorsPage() {
    return (
        <div className="brochure-biz-wrapper">
            <div className="print-toolbar no-print">
                <button onClick={() => window.print()}>Print / Save PDF</button>
            </div>

            {/* ══════════════ SHEET 1 — OUTSIDE ══════════════ */}
            <div className="biz-sheet">
                <div className="fold-guide fold-guide-1" />
                <div className="fold-guide fold-guide-2" />

                {/* ─── PANEL 3: Inside Flap — Full Platform Overview ─── */}
                <div className="biz-panel" style={{ background: "#0F172A" }}>
                    <p className="biz-subhead" style={{ marginTop: "0.15in" }}>Complete Platform</p>
                    <h2 className="biz-headline" style={{ fontSize: "1.15rem", marginBottom: "0.2rem" }}>
                        Everything You Need,<br />
                        <span className="gold-text">In One System.</span>
                    </h2>
                    <div className="gold-line" style={{ margin: "0.15rem 0" }} />

                    <p className="biz-body" style={{ fontSize: "0.5rem", marginBottom: "0.2rem" }}>
                        No more juggling spreadsheets, QuickBooks, email chains, and paper folders.
                        Your entire operation — from first client call to final payment — lives in one place.
                    </p>

                    <div style={{ marginBottom: "0.18rem" }}>
                        <p style={{ fontSize: "0.48rem", fontWeight: 800, color: "#D4A843", marginBottom: "0.08rem", letterSpacing: "0.06em" }}>ESTIMATING & BIDDING</p>
                        <p style={{ fontSize: "0.44rem", color: "#CBD5E1", lineHeight: 1.45 }}>
                            Pre-loaded material prices by trade. Custom labor rates. Markup &amp; margin calculators.
                            Generate branded PDF proposals with line-item detail. E-signature &amp; deposit built in.
                        </p>
                    </div>

                    <div style={{ marginBottom: "0.18rem" }}>
                        <p style={{ fontSize: "0.48rem", fontWeight: 800, color: "#D4A843", marginBottom: "0.08rem", letterSpacing: "0.06em" }}>JOB MANAGEMENT</p>
                        <p style={{ fontSize: "0.44rem", color: "#CBD5E1", lineHeight: 1.45 }}>
                            Live dashboard per job: budget vs. actual, crew assignments, material orders,
                            sub-contractor schedules, daily logs, photos, and change orders — all from mobile.
                        </p>
                    </div>

                    <div style={{ marginBottom: "0.18rem" }}>
                        <p style={{ fontSize: "0.48rem", fontWeight: 800, color: "#D4A843", marginBottom: "0.08rem", letterSpacing: "0.06em" }}>INVOICING & PAYMENTS</p>
                        <p style={{ fontSize: "0.44rem", color: "#CBD5E1", lineHeight: 1.45 }}>
                            Progress billing tied to milestones. Invoices auto-generate on phase completion.
                            Clients pay online via Stripe or ACH. Auto-reminders. QuickBooks sync ready.
                        </p>
                    </div>

                    <div style={{ marginBottom: "0.18rem" }}>
                        <p style={{ fontSize: "0.48rem", fontWeight: 800, color: "#D4A843", marginBottom: "0.08rem", letterSpacing: "0.06em" }}>CLIENT & LEAD MANAGEMENT</p>
                        <p style={{ fontSize: "0.44rem", color: "#CBD5E1", lineHeight: 1.45 }}>
                            CRM built for trades. Track every lead from first call to signed contract.
                            Automated follow-up. Referral tracking. Client portal for project updates.
                        </p>
                    </div>

                    <div style={{ marginBottom: "0.18rem" }}>
                        <p style={{ fontSize: "0.48rem", fontWeight: 800, color: "#D4A843", marginBottom: "0.08rem", letterSpacing: "0.06em" }}>REPORTING & ANALYTICS</p>
                        <p style={{ fontSize: "0.44rem", color: "#CBD5E1", lineHeight: 1.45 }}>
                            Profit per job. Revenue by trade. Crew utilization. Average days to payment.
                            Bid-to-close ratios. Monthly P&amp;L — not in a shoebox at tax time.
                        </p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto", gap: "0.1rem" }}>
                        {[
                            { val: "100%", label: "Custom" },
                            { val: "Mobile", label: "Ready" },
                            { val: "Cloud", label: "Based" },
                            { val: "You", label: "Own It" },
                        ].map((s) => (
                            <div key={s.label} className="biz-stat-block" style={{ flex: 1, padding: "0.12rem 0.08rem" }}>
                                <p className="biz-stat-value" style={{ fontSize: "0.7rem" }}>{s.val}</p>
                                <p className="biz-stat-label" style={{ fontSize: "0.32rem" }}>{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ─── PANEL 2: Back Cover — Contact & Trust ─── */}
                <div className="biz-panel" style={{
                    background: "linear-gradient(180deg, #111827 0%, #0F172A 100%)",
                    justifyContent: "center", alignItems: "center", textAlign: "center",
                }}>
                    <img src="/logo-transparent.png" alt="QuantLab" style={{ width: "180px", height: "180px", objectFit: "contain", marginBottom: "0.2rem" }} className="logo-glow-gold" />

                    <p style={{ fontSize: "0.7rem", fontWeight: 900, color: "#ffffff", marginBottom: "0.04rem" }}>QuantLab Software Solutions</p>
                    <p style={{ fontSize: "0.48rem", color: "#D4A843", fontWeight: 600, marginBottom: "0.3rem", letterSpacing: "0.06em" }}>Custom Software for the Trades</p>

                    <div style={{ margin: "0 auto 0.3rem auto" }}>
                        <BrochureQR url="https://quantlabusa.dev" size="1in" accentColor="#D4A843" label="Scan to Visit" sublabel="quantlabusa.dev" />
                    </div>

                    <div style={{ background: "rgba(212,168,67,0.04)", border: "1px solid rgba(212,168,67,0.12)", borderRadius: "0.35rem", padding: "0.2rem 0.35rem", marginBottom: "0.25rem", textAlign: "left" }}>
                        <p style={{ fontSize: "0.48rem", color: "#D1D5DB", marginBottom: "0.08rem" }}>Email: contact@quantlabusa.dev</p>
                        <p style={{ fontSize: "0.48rem", color: "#D1D5DB", marginBottom: "0.08rem" }}>Web: quantlabusa.dev</p>
                        <p style={{ fontSize: "0.48rem", color: "#D1D5DB" }}>Phone: Available upon request</p>
                    </div>

                    <div style={{ textAlign: "left", marginBottom: "0.2rem" }}>
                        {[
                            "Free 30-minute strategy call — zero obligation",
                            "Fixed-price quotes — no change orders on us",
                            "We speak contractor, not code",
                            "Live in weeks, not months",
                            "Senior engineers only — no offshore",
                            "NDA available before any conversation",
                            "You own 100% of the code we write",
                            "Ongoing support & training included",
                        ].map((t) => (
                            <div key={t} className="biz-trust-item">
                                <div className="biz-trust-dot" />
                                <span style={{ fontSize: "0.42rem" }}>{t}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.1rem", paddingTop: "0.15rem", borderTop: "1px solid rgba(212,168,67,0.1)" }}>
                        {["General", "Remodel", "Electric", "Plumbing", "Roofing", "HVAC", "Paint", "Landscape", "Concrete", "Flooring"].map((ind) => (
                            <span key={ind} style={{ fontSize: "0.36rem", fontWeight: 600, padding: "0.06rem 0.18rem", borderRadius: "999px", border: "1px solid rgba(212,168,67,0.2)", background: "rgba(212,168,67,0.05)", color: "#D4A843" }}>{ind}</span>
                        ))}
                    </div>

                    <p style={{ fontSize: "0.34rem", color: "#4B5563", marginTop: "auto" }}>© 2026 QuantLab Software Solutions LLC</p>
                </div>

                {/* ─── PANEL 1: Front Cover ─── */}
                <div className="biz-panel" style={{
                    background: "radial-gradient(ellipse 80% 70% at 50% 50%, #0F1B2E 0%, #111827 60%, #0B1120 100%)",
                    justifyContent: "center", alignItems: "center", textAlign: "center",
                }}>
                    <div style={{ position: "absolute", inset: 0, opacity: 0.03, backgroundImage: `linear-gradient(0deg, transparent 45%, #D4A843 45.5%, #D4A843 46%, transparent 46.5%), linear-gradient(90deg, transparent 45%, #D4A843 45.5%, #D4A843 46%, transparent 46.5%)`, backgroundSize: "40px 40px" }} />
                    <div style={{ position: "absolute", top: "35%", left: "50%", transform: "translate(-50%, -50%)", width: "350px", height: "350px", background: "radial-gradient(circle, rgba(212,168,67,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

                    <img src="/logo-transparent.png" alt="QuantLab" style={{ width: "200px", height: "200px", objectFit: "contain", marginBottom: "0.3rem", position: "relative", zIndex: 2 }} className="logo-glow-gold" />

                    <h1 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.15, position: "relative", zIndex: 2, marginBottom: "0.25rem" }}>
                        Win More Bids.<br />Build Faster.<br />
                        <span className="gold-text">Get Paid.</span>
                    </h1>

                    <div className="gold-line" style={{ margin: "0.2rem auto" }} />

                    <p style={{ fontSize: "0.56rem", color: "#94A3B8", maxWidth: "2.8in", lineHeight: 1.5, position: "relative", zIndex: 2, marginBottom: "0.3rem" }}>
                        Custom estimating, job tracking, invoicing
                        &amp; client management software — built for
                        how contractors actually run their business.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.14rem", position: "relative", zIndex: 2, textAlign: "left", maxWidth: "2.8in" }}>
                        {[
                            "Send branded estimates from your phone in minutes",
                            "Track every job: budget, crew, materials, changes",
                            "Auto-invoice when milestones complete",
                            "Collect payments online — Stripe & ACH",
                            "CRM that follows up with past clients",
                            "Works on any device — office, truck, or jobsite",
                        ].map((item) => (
                            <p key={item} style={{ fontSize: "0.48rem", color: "#D4A843", fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.15rem", lineHeight: 1.35 }}>
                                <span style={{ flexShrink: 0 }}>&#10003;</span> {item}
                            </p>
                        ))}
                    </div>

                    <div style={{ position: "absolute", bottom: "0.35in", left: "15%", right: "15%", height: "1px", background: "linear-gradient(90deg, transparent, #D4A843, transparent)" }} />
                </div>
            </div>

            {/* ══════════════ SHEET 2 — INSIDE ══════════════ */}
            <div className="biz-sheet">
                <div className="fold-guide fold-guide-1" />
                <div className="fold-guide fold-guide-2" />

                {/* ─── PANEL 4: Inside Left — Pain Points ─── */}
                <div className="biz-panel" style={{ background: "#111827" }}>
                    <p className="biz-subhead" style={{ marginTop: "0.15in" }}>Sound Familiar?</p>
                    <h2 className="biz-headline" style={{ fontSize: "1.05rem", marginBottom: "0.2rem" }}>
                        The jobsite runs fine.<br />
                        <span className="gold-text">The office is bleeding money.</span>
                    </h2>
                    <div className="gold-line" style={{ margin: "0.15rem 0" }} />

                    <p className="biz-body" style={{ fontSize: "0.48rem", marginBottom: "0.15rem" }}>
                        You know how to build. But chasing paper and hunting payments is destroying your margins:
                    </p>

                    {[
                        {
                            cost: "$3,800/mo",
                            problem: "Estimate Errors",
                            detail: "Manual takeoffs miss quantities and forget markups. One wrong line item on 3 bids/month = $3,800+ in lost margin. You don't know it's gone until the job's done.",
                        },
                        {
                            cost: "$2,400/mo",
                            problem: "Late Invoicing",
                            detail: "Crew finished 3 weeks ago. Invoice still sitting. You're floating $40K+ in payroll while waiting. Late invoices have 3x higher non-payment rates.",
                        },
                        {
                            cost: "$1,800/mo",
                            problem: "Change Order Chaos",
                            detail: "\"Add an outlet here\" becomes unpaid work without documented approval. Average contractor eats $600/job in undocumented extras.",
                        },
                        {
                            cost: "$2,200/mo",
                            problem: "Scheduling Chaos",
                            detail: "Double-booked crews. Subs that don't show. Wrong materials delivered. You're managing a $1M+ operation on group texts and sticky notes.",
                        },
                        {
                            cost: "$1,200/mo",
                            problem: "Lost Leads",
                            detail: "Someone called about a remodel. You were on a roof. Forgot to call back. They hired your competitor. This happens 4-5 times/month.",
                        },
                    ].map((item) => (
                        <div key={item.problem} className="cost-card">
                            <div style={{ minWidth: "0.8in" }}>
                                <p className="cost-amount">{item.cost}</p>
                                <p className="cost-label">{item.problem}</p>
                            </div>
                            <p className="cost-detail">{item.detail}</p>
                        </div>
                    ))}

                    <div style={{ marginTop: "auto", borderTop: "1px solid rgba(212,168,67,0.15)", paddingTop: "0.15rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                                <p style={{ fontSize: "0.48rem", color: "#64748B", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Conservative Estimate</p>
                                <p style={{ fontSize: "0.42rem", color: "#64748B" }}>Most contractors make it back in 2 jobs.</p>
                            </div>
                            <p style={{ fontSize: "1rem", fontWeight: 900, color: "#DC2626" }}>$136K+/yr</p>
                        </div>
                    </div>
                </div>

                {/* ─── PANEL 5: Inside Center — Solutions ─── */}
                <div className="biz-panel" style={{ background: "#0F172A" }}>
                    <p className="biz-subhead" style={{ marginTop: "0.15in" }}>The Fix</p>
                    <h2 style={{ fontSize: "0.9rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.25, marginBottom: "0.2rem" }}>
                        Three Core Modules.{" "}
                        <span className="gold-text">One Platform.</span><br />
                        Built for Your Trade.
                    </h2>
                    <div className="gold-line" style={{ margin: "0.12rem 0" }} />

                    {[
                        {
                            title: "Smart Estimating Engine",
                            detail: "Pre-loaded material databases by trade. Custom labor rates. Overhead & profit calculators. Assembly-based pricing. Branded PDF proposals with line-item detail. E-signature. Deposit collection.",
                            results: ["4 hrs → 20 min per estimate", "Zero pricing errors", "E-sign + deposit built in"],
                        },
                        {
                            title: "Live Job Tracking Dashboard",
                            detail: "Every active job on one screen: status, budget vs. actual, crew assignments, material deliveries, sub schedules, daily logs, photo docs, and change orders with client approval.",
                            results: ["Real-time crew visibility", "Budget tracking", "Change orders with e-sign"],
                        },
                        {
                            title: "Auto-Invoicing & Collections",
                            detail: "Progress billing tied to milestones — invoices auto-generate on phase complete. Online payments via Stripe/ACH. Auto reminders at 7, 14, 30 days. Lien waivers. QuickBooks sync.",
                            results: ["Paid 9 days faster avg.", "Zero invoice chasing", "Lien waiver tracking"],
                        },
                    ].map((mod) => (
                        <div key={mod.title} style={{ background: "#1E293B", borderRadius: "0.35rem", border: "1px solid rgba(212,168,67,0.12)", padding: "0.22rem 0.28rem", marginBottom: "0.15rem" }}>
                            <p style={{ fontSize: "0.55rem", fontWeight: 800, color: "#D4A843", marginBottom: "0.06rem" }}>{mod.title}</p>
                            <p style={{ fontSize: "0.44rem", color: "#D1D5DB", lineHeight: 1.45, marginBottom: "0.08rem" }}>{mod.detail}</p>
                            <div style={{ display: "flex", gap: "0.15rem", flexWrap: "wrap" }}>
                                {mod.results.map((r) => (
                                    <p key={r} style={{ fontSize: "0.38rem", color: "#059669", fontWeight: 600 }}>&#10003; {r}</p>
                                ))}
                            </div>
                        </div>
                    ))}

                    <div style={{ background: "rgba(212,168,67,0.04)", border: "1px solid rgba(212,168,67,0.1)", borderRadius: "0.3rem", padding: "0.18rem 0.22rem", marginBottom: "0.12rem" }}>
                        <p style={{ fontSize: "0.44rem", fontWeight: 700, color: "#D4A843", marginBottom: "0.04rem" }}>Also Included With Every Build:</p>
                        <p style={{ fontSize: "0.42rem", color: "#94A3B8", lineHeight: 1.5 }}>
                            Client portal with project updates &amp; payment history • Referral source tracking
                            • Sub-contractor database • Material cost database • Warranty tracking
                            • Permit &amp; inspection checklists • Custom report builder • Training for your team
                            • 90 days post-launch support
                        </p>
                    </div>

                    <p style={{ fontSize: "0.42rem", color: "#64748B", marginTop: "auto", lineHeight: 1.5, paddingTop: "0.1rem", borderTop: "1px solid rgba(212,168,67,0.1)" }}>
                        Cloud-based. Works on any device. Your office, your truck, the jobsite. Nothing to install. Auto updates. Data encrypted &amp; backed up daily.
                    </p>
                </div>

                {/* ─── PANEL 6: Inside Right — Why Us + CTA ─── */}
                <div className="biz-panel" style={{ background: "#111827" }}>
                    <p className="biz-subhead" style={{ marginTop: "0.15in" }}>Why QuantLab</p>
                    <h2 className="biz-headline" style={{ fontSize: "0.95rem", marginBottom: "0.18rem" }}>
                        We build for your trade.<br />
                        <span className="gold-text">Not for Silicon Valley.</span>
                    </h2>
                    <div className="gold-line" style={{ margin: "0.12rem 0" }} />

                    {[
                        {
                            vs: "vs. Buildertrend / CoConstruct / Jobber",
                            them: "$500+/mo subscription. Can't customize. Features you don't need. Missing the ones you do. They own your data.",
                            us: "Your platform. Your workflow. One-time build. You own the code forever. No monthly hostage fees.",
                        },
                        {
                            vs: "vs. Spreadsheets & Paper",
                            them: "Estimates in Excel. Invoices in QuickBooks. Schedule on whiteboard. Leads in your head. Nothing talks to anything.",
                            us: "One system: lead → estimate → win → track → invoice → paid → follow up. All automatic.",
                        },
                        {
                            vs: "vs. Hiring an IT Person",
                            them: "They reset passwords and set up printers. Can't build software. $60K+/year. And they quit.",
                            us: "Senior engineers build what you need, train your crew, and provide ongoing support — fraction of the cost.",
                        },
                    ].map((item) => (
                        <div key={item.vs} className="compare-row" style={{ borderLeft: "3px solid #D4A843" }}>
                            <p className="compare-header" style={{ color: "#D4A843" }}>{item.vs}</p>
                            <p className="compare-problem">They: {item.them}</p>
                            <p className="compare-us">Us: {item.us}</p>
                        </div>
                    ))}

                    <p style={{ fontSize: "0.42rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, margin: "0.12rem 0 0.08rem" }}>Our Process — Start to Finish</p>
                    <div style={{ display: "flex", gap: "0.1rem", marginBottom: "0.12rem" }}>
                        {[
                            { week: "Week 1", action: "Free call. Learn your biz. Fixed-price quote." },
                            { week: "Week 2-3", action: "Build & demo weekly. Your feedback at every step." },
                            { week: "Week 4", action: "Launch. Train crew. 90 days support included." },
                        ].map((step) => (
                            <div key={step.week} className="timeline-step">
                                <p className="timeline-week">{step.week}</p>
                                <p className="timeline-action">{step.action}</p>
                            </div>
                        ))}
                    </div>

                    <div className="biz-cta-block" style={{ marginTop: "auto" }}>
                        <p className="biz-cta-title">Stop leaving money on the jobsite.</p>
                        <p className="biz-cta-subtitle" style={{ marginBottom: "0.12rem" }}>
                            Free 30-min strategy call. We&apos;ll map your workflow and show you what&apos;s possible.
                        </p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.3rem" }}>
                            <BrochureQR url="https://quantlabusa.dev" size="0.65in" accentColor="#D4A843" label="Scan" sublabel="" />
                            <div style={{ textAlign: "left" }}>
                                <p style={{ fontSize: "0.46rem", color: "#D4A843", fontWeight: 700, marginBottom: "0.04rem" }}>Book Your Free Call</p>
                                <p style={{ fontSize: "0.42rem", color: "#D1D5DB" }}>contact@quantlabusa.dev</p>
                                <p style={{ fontSize: "0.42rem", color: "#D1D5DB" }}>quantlabusa.dev</p>
                                <p style={{ fontSize: "0.36rem", color: "#64748B", marginTop: "0.04rem" }}>Fixed-price · NDA available · 24hr response</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
