"use client";

import React from "react";
import "./brochure.css";

/* ═══════════════════════════════════════════════════════════════
   QuantLab Tri-Fold Brochure
   Sheet 1 = OUTSIDE (what you see folded)
   Sheet 2 = INSIDE  (what you see fully opened)
   ═══════════════════════════════════════════════════════════════ */

export default function BrochurePage() {
    return (
        <div className="brochure-wrapper">
            {/* ── Screen-only toolbar ── */}
            <div className="print-toolbar no-print">
                <button onClick={() => window.print()}>🖨️ Print / Save PDF</button>
            </div>

            {/* ════════════════════════════════════════════
          SHEET 1 — OUTSIDE
          Left = Inside Flap | Middle = Back Cover | Right = Front Cover
          ════════════════════════════════════════════ */}
            <div className="brochure-sheet">
                {/* Fold guides (screen only) */}
                <div className="fold-guide fold-guide-1" />
                <div className="fold-guide fold-guide-2" />

                {/* ─── PANEL 3: Inside Flap (Left) ─── */}
                <div className="brochure-panel" style={{ background: "#0F172A" }}>
                    {/* Subtle top accent */}
                    <div style={{
                        position: "absolute", top: 0, left: "15%", right: "15%", height: "2px",
                        background: "linear-gradient(90deg, transparent, rgba(56,189,248,0.3), transparent)",
                    }} />

                    <p className="brochure-subhead" style={{ marginTop: "0.3in" }}>How We Work</p>
                    <h2 className="brochure-headline" style={{ fontSize: "1.3rem", marginBottom: "0.6rem" }}>
                        One team.<br />
                        <span className="gradient-text">Every layer.</span>
                    </h2>

                    <div className="accent-line" />

                    <p className="brochure-body" style={{ marginBottom: "0.6rem", marginTop: "0.3rem" }}>
                        Front end to database. Auth to payments. Deployment pipeline to monitoring.
                        We own every layer — because a platform that breaks at any one of them breaks everywhere.
                    </p>

                    {/* Mini architecture diagram */}
                    <div style={{ marginBottom: "0.6rem" }}>
                        {[
                            { label: "CLIENT INTERFACE", sub: "Next.js · React · TypeScript", color: "#38bdf8" },
                            { label: "API & BUSINESS LOGIC", sub: "Node.js · Route Handlers", color: "#818cf8" },
                            { label: "DATA LAYER", sub: "Prisma ORM · PostgreSQL", color: "#34d399" },
                            { label: "PAYMENTS & AUTH", sub: "Stripe · JWT · RBAC", color: "#f59e0b" },
                            { label: "DEPLOYMENT & INFRA", sub: "Vercel · Docker · Sentry", color: "#f472b6" },
                        ].map((layer) => (
                            <div key={layer.label} className="layer-row" style={{ background: `${layer.color}08`, border: `1px solid ${layer.color}20` }}>
                                <div className="layer-bar" style={{ background: layer.color }} />
                                <div>
                                    <p className="layer-label" style={{ color: layer.color }}>{layer.label}</p>
                                    <p className="layer-sub">{layer.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats strip */}
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto", gap: "0.2rem" }}>
                        {[
                            { val: "20+", label: "Projects" },
                            { val: "5", label: "Live Bots" },
                            { val: "0", label: "Outages" },
                        ].map((s) => (
                            <div key={s.label} className="stat-block" style={{ flex: 1 }}>
                                <p className="stat-value" style={{ fontSize: "1rem" }}>{s.val}</p>
                                <p className="stat-label">{s.label}</p>
                            </div>
                        ))}
                    </div>

                    <p style={{ fontSize: "0.44rem", color: "#6B7280", textAlign: "center", marginTop: "0.5rem", letterSpacing: "0.08em" }}>
                        Open to see what we build →
                    </p>
                </div>

                {/* ─── PANEL 2: Back Cover (Middle) ─── */}
                <div className="brochure-panel" style={{
                    background: "linear-gradient(180deg, #111827 0%, #0F172A 100%)",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                }}>
                    {/* Small logo */}
                    <img
                        src="/logo-transparent.png"
                        alt="QuantLab"
                        style={{ width: "70px", height: "70px", objectFit: "contain", marginBottom: "0.5rem" }}
                        className="logo-glow"
                    />

                    <p className="brochure-subhead" style={{ marginBottom: "0.5rem" }}>Start Building</p>

                    {/* QR Code placeholder */}
                    <div className="qr-box" style={{ margin: "0 auto 0.5rem auto" }}>
                        <div style={{ textAlign: "center" }}>
                            <p style={{ fontSize: "0.65rem", fontWeight: 700, color: "#3B82F6" }}>QR</p>
                            <p style={{ fontSize: "0.36rem", color: "#6B7280" }}>Scan to book<br />consultation</p>
                        </div>
                    </div>

                    {/* Contact info */}
                    <div style={{ marginBottom: "0.6rem" }}>
                        <p style={{ fontSize: "0.55rem", color: "#D1D5DB", marginBottom: "0.2rem" }}>
                            ✉ contact@quantlabsoftware.com
                        </p>
                        <p style={{ fontSize: "0.55rem", color: "#D1D5DB" }}>
                            🌐 quantlabsoftware.com
                        </p>
                    </div>

                    {/* Trust items */}
                    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "flex-start", gap: "0.2rem" }}>
                        {[
                            "Free 30-min strategy call",
                            "NDA available",
                            "Response within 24 hours",
                            "No commitment required",
                        ].map((t) => (
                            <div key={t} className="trust-item">
                                <div className="trust-dot" />
                                <span>{t}</span>
                            </div>
                        ))}
                    </div>

                    {/* Copyright */}
                    <p style={{
                        fontSize: "0.38rem", color: "#4B5563", marginTop: "auto",
                        paddingTop: "0.5rem", borderTop: "1px solid rgba(255,255,255,0.05)",
                    }}>
                        © 2026 QuantLab Software Solutions. All rights reserved.
                    </p>
                </div>

                {/* ─── PANEL 1: Front Cover (Right) ─── */}
                <div className="brochure-panel" style={{
                    background: "radial-gradient(ellipse 80% 70% at 50% 50%, #0F1B2E 0%, #111827 60%, #0B1120 100%)",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                }}>
                    {/* Subtle circuit-like decorative lines */}
                    <div style={{
                        position: "absolute", inset: 0, opacity: 0.04,
                        backgroundImage: `
              linear-gradient(0deg, transparent 45%, #3B82F6 45.5%, #3B82F6 46%, transparent 46.5%),
              linear-gradient(90deg, transparent 45%, #3B82F6 45.5%, #3B82F6 46%, transparent 46.5%)
            `,
                        backgroundSize: "40px 40px",
                    }} />

                    {/* Radial glow behind logo */}
                    <div style={{
                        position: "absolute",
                        top: "30%", left: "50%", transform: "translate(-50%, -50%)",
                        width: "300px", height: "300px",
                        background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)",
                        pointerEvents: "none",
                    }} />

                    {/* Logo */}
                    <img
                        src="/logo-transparent.png"
                        alt="QuantLab Software Solutions"
                        style={{
                            width: "160px", height: "160px",
                            objectFit: "contain",
                            marginBottom: "0.6rem",
                            position: "relative", zIndex: 2,
                        }}
                        className="logo-glow"
                    />

                    {/* Tagline */}
                    <h1 style={{
                        fontSize: "1.75rem", fontWeight: 900,
                        color: "#ffffff",
                        letterSpacing: "-0.02em",
                        lineHeight: 1.1,
                        position: "relative", zIndex: 2,
                        marginBottom: "0.4rem",
                    }}>
                        Engineering<br />
                        <span style={{ fontWeight: 300, color: "#9CA3AF" }}>the </span>
                        Next Level.
                    </h1>

                    <div className="accent-line" style={{ margin: "0.4rem auto" }} />

                    <p style={{
                        fontSize: "0.6rem", color: "#9CA3AF",
                        maxWidth: "2.6in", lineHeight: 1.6,
                        position: "relative", zIndex: 2,
                    }}>
                        Custom software &amp; trading systems for businesses
                        that can't afford to guess.
                    </p>

                    {/* Bottom accent line */}
                    <div style={{
                        position: "absolute", bottom: "0.5in", left: "20%", right: "20%",
                        height: "1px",
                        background: "linear-gradient(90deg, transparent, #3B82F6, #06B6D4, transparent)",
                    }} />
                </div>
            </div>

            {/* ════════════════════════════════════════════
          SHEET 2 — INSIDE (fully unfolded)
          Left = Pain Points | Middle = Services | Right = Proof + CTA
          ════════════════════════════════════════════ */}
            <div className="brochure-sheet">
                <div className="fold-guide fold-guide-1" />
                <div className="fold-guide fold-guide-2" />

                {/* ─── PANEL 4: Inside Left — The Real Cost of Doing Nothing ─── */}
                <div className="brochure-panel" style={{ background: "#111827" }}>
                    <p className="brochure-subhead" style={{ marginTop: "0.3in" }}>The Real Cost</p>
                    <h2 className="brochure-headline" style={{ fontSize: "1.15rem", marginBottom: "0.35rem" }}>
                        What <span className="gradient-text">inaction</span> is<br />costing you right now.
                    </h2>

                    <div className="accent-line" style={{ marginBottom: "0.45rem" }} />

                    <p className="brochure-body" style={{ marginBottom: "0.5rem" }}>
                        Every month without the right systems, you&apos;re bleeding revenue you can&apos;t see on a balance sheet:
                    </p>

                    {/* Cost-of-inaction scenarios with dollar impact */}
                    {[
                        {
                            cost: "$4,200/mo",
                            problem: "Lost leads",
                            detail: "A sales team of 5 drops ~30% of leads without automated follow-up. At $280/lead, that's $4,200 walking out the door monthly.",
                        },
                        {
                            cost: "$2,800/mo",
                            problem: "Manual proposals",
                            detail: "If your team builds 3 proposals/week at 4 hrs each vs. 20 min, you're burning 46 hours/month on copy-paste work.",
                        },
                        {
                            cost: "$1,500/mo",
                            problem: "Tool fragmentation",
                            detail: "5 disconnected SaaS subscriptions × $300/mo avg = $1,500 in redundant tools that don't share data.",
                        },
                        {
                            cost: "$6,000/mo",
                            problem: "Slow invoicing",
                            detail: "Late invoices compound. A 9-day delay on $200K in receivables costs thousands in cash flow gaps and missed early-pay discounts.",
                        },
                    ].map((item) => (
                        <div key={item.problem} style={{
                            background: "#1F2937", borderRadius: "0.45rem",
                            border: "1px solid rgba(255,255,255,0.05)",
                            padding: "0.35rem 0.4rem", marginBottom: "0.3rem",
                            display: "flex", gap: "0.35rem", alignItems: "flex-start",
                        }}>
                            <div style={{ minWidth: "0.85in" }}>
                                <p style={{ fontSize: "0.7rem", fontWeight: 900, color: "#EF4444", lineHeight: 1 }}>{item.cost}</p>
                                <p style={{ fontSize: "0.38rem", color: "#9CA3AF", marginTop: "0.08rem" }}>{item.problem}</p>
                            </div>
                            <p style={{ fontSize: "0.46rem", color: "#9CA3AF", lineHeight: 1.45 }}>{item.detail}</p>
                        </div>
                    ))}

                    {/* Bottom total */}
                    <div style={{ marginTop: "auto", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "0.35rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <p style={{ fontSize: "0.48rem", color: "#6B7280", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>Conservative annual waste</p>
                            <p style={{ fontSize: "0.95rem", fontWeight: 900, color: "#EF4444" }}>$170K+</p>
                        </div>
                        <p style={{ fontSize: "0.44rem", color: "#6B7280", marginTop: "0.15rem" }}>
                            One custom platform pays for itself in 60–90 days.
                        </p>
                    </div>
                </div>

                {/* ─── PANEL 5: Inside Center — Services ─── */}
                <div className="brochure-panel" style={{ background: "#0F172A" }}>
                    <p className="brochure-subhead" style={{ marginTop: "0.3in" }}>What We Build</p>
                    <h2 style={{
                        fontSize: "0.9rem", fontWeight: 800, color: "#ffffff",
                        lineHeight: 1.25, marginBottom: "0.5rem",
                    }}>
                        Software that saves you time,{" "}
                        <span className="gradient-text">money, and headaches.</span>
                    </h2>

                    <div className="accent-line" style={{ marginBottom: "0.45rem" }} />

                    {/* Service cards */}
                    {[
                        {
                            icon: "⚡",
                            title: "Custom CRM & ECM Systems",
                            hook: "Stop losing deals in spreadsheets.",
                            proof: "40% fewer dropped leads in 60 days",
                        },
                        {
                            icon: "🤖",
                            title: "Algorithmic Trading Bots",
                            hook: "Execute at machine speed, not human speed.",
                            proof: "<12ms latency · 24/7 uptime · Multi-strategy",
                        },
                        {
                            icon: "📊",
                            title: "Business Operations Hub",
                            hook: "One dashboard. Every moving part.",
                            proof: "Full-stack platforms live in production",
                        },
                        {
                            icon: "📄",
                            title: "Estimating & Proposal Generators",
                            hook: "Winning proposals in minutes, not hours.",
                            proof: "4 hours → 20 minutes per job",
                        },
                        {
                            icon: "🌐",
                            title: "High-Performance Web Portals",
                            hook: "Your website should be closing deals.",
                            proof: "2.8x increase in qualified lead conversion",
                        },
                        {
                            icon: "💳",
                            title: "Payment & Invoicing Systems",
                            hook: "Get paid faster. Chase invoices less.",
                            proof: "9-day reduction in days-sales-outstanding",
                        },
                    ].map((svc) => (
                        <div key={svc.title} className="service-card">
                            <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", marginBottom: "0.08rem" }}>
                                <span style={{ fontSize: "0.6rem" }}>{svc.icon}</span>
                                <p className="service-card-title">{svc.title}</p>
                            </div>
                            <p className="service-card-hook">{svc.hook}</p>
                            <p className="service-card-proof">✓ {svc.proof}</p>
                        </div>
                    ))}

                    {/* Additional services note */}
                    <p style={{
                        fontSize: "0.42rem", color: "#6B7280", marginTop: "auto",
                        lineHeight: 1.5, paddingTop: "0.3rem",
                        borderTop: "1px solid rgba(255,255,255,0.05)",
                    }}>
                        + License Management · Enterprise Infra · Industry-Specific Platforms
                    </p>
                </div>

                {/* ─── PANEL 6: Inside Right — Competitive Positioning + CTA ─── */}
                <div className="brochure-panel" style={{ background: "#111827" }}>
                    <p className="brochure-subhead" style={{ marginTop: "0.3in" }}>Why Us Over</p>
                    <h2 className="brochure-headline" style={{ fontSize: "1.05rem", marginBottom: "0.35rem" }}>
                        The freelancer. The agency.<br />
                        <span className="gradient-text">The off-the-shelf SaaS.</span>
                    </h2>

                    <div className="accent-line" style={{ marginBottom: "0.35rem" }} />

                    {/* Competitive comparison */}
                    {[
                        {
                            vs: "vs. Freelancers",
                            problem: "Disappear mid-project, no ops knowledge, single point of failure.",
                            us: "Full-stack team. Architecture to deployment. We don't ghost.",
                            color: "#F59E0B",
                        },
                        {
                            vs: "vs. Agencies",
                            problem: "$150K+ budgets, 6-month timelines, junior devs doing senior work.",
                            us: "Senior-only engineering. Faster delivery. Transparent, fixed quotes.",
                            color: "#8B5CF6",
                        },
                        {
                            vs: "vs. Off-the-shelf SaaS",
                            problem: "You adapt your business to fit the tool. Never the other way around.",
                            us: "We build the tool around your exact workflows. Zero compromise.",
                            color: "#06B6D4",
                        },
                    ].map((item) => (
                        <div key={item.vs} style={{
                            background: "#1F2937", borderRadius: "0.4rem",
                            border: `1px solid ${item.color}25`,
                            padding: "0.3rem 0.35rem", marginBottom: "0.25rem",
                            borderLeft: `3px solid ${item.color}`,
                        }}>
                            <p style={{ fontSize: "0.48rem", fontWeight: 800, color: item.color, marginBottom: "0.08rem" }}>{item.vs}</p>
                            <p style={{ fontSize: "0.42rem", color: "#6B7280", lineHeight: 1.4, marginBottom: "0.1rem" }}>✗ {item.problem}</p>
                            <p style={{ fontSize: "0.42rem", color: "#D1D5DB", lineHeight: 1.4 }}>✓ {item.us}</p>
                        </div>
                    ))}

                    {/* Engagement timeline */}
                    <p style={{ fontSize: "0.4rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 700, margin: "0.35rem 0 0.2rem" }}>
                        What Working With Us Looks Like
                    </p>
                    <div style={{ display: "flex", gap: "0.15rem" }}>
                        {[
                            { week: "Week 1", action: "Strategy call → scope & quote" },
                            { week: "Week 2-4", action: "Build → iterate → your feedback" },
                            { week: "Week 5+", action: "Launch → monitor → ongoing support" },
                        ].map((step) => (
                            <div key={step.week} style={{
                                flex: 1, background: "rgba(56,189,248,0.05)",
                                border: "1px solid rgba(56,189,248,0.12)",
                                borderRadius: "0.3rem", padding: "0.2rem 0.25rem",
                                textAlign: "center",
                            }}>
                                <p style={{ fontSize: "0.44rem", fontWeight: 800, color: "#3B82F6" }}>{step.week}</p>
                                <p style={{ fontSize: "0.36rem", color: "#9CA3AF", lineHeight: 1.35 }}>{step.action}</p>
                            </div>
                        ))}
                    </div>

                    {/* Final CTA */}
                    <div className="cta-block" style={{ marginTop: "auto" }}>
                        <p className="cta-title" style={{ fontSize: "0.75rem" }}>
                            Your competitors won&apos;t <span className="gradient-text">wait.</span>
                        </p>
                        <p className="cta-subtitle" style={{ marginBottom: "0.25rem", fontSize: "0.44rem" }}>
                            We take on 3 new clients per month. Book your free strategy call today.
                        </p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem" }}>
                            <div className="qr-box" style={{ width: "0.65in", height: "0.65in" }}>
                                <div style={{ textAlign: "center" }}>
                                    <p style={{ fontSize: "0.45rem", fontWeight: 700, color: "#3B82F6" }}>QR</p>
                                    <p style={{ fontSize: "0.28rem", color: "#6B7280" }}>Scan me</p>
                                </div>
                            </div>
                            <div style={{ textAlign: "left" }}>
                                <p style={{ fontSize: "0.44rem", color: "#D1D5DB" }}>✉ contact@quantlabsoftware.com</p>
                                <p style={{ fontSize: "0.44rem", color: "#D1D5DB" }}>🌐 quantlabsoftware.com</p>
                                <p style={{ fontSize: "0.38rem", color: "#6B7280", marginTop: "0.1rem" }}>Free 30-min call · NDA available · Response in 24hrs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
