"use client";

import React from "react";
import "./brochure.css";
import BrochureQR from "../BrochureQR";

/* ═══════════════════════════════════════════════════════════════
   QuantLab Tri-Fold Brochure — Tech Edition
   Blue Gradient Theme · LARGE PRINT FONTS
   ═══════════════════════════════════════════════════════════════ */

export default function BrochurePage() {
    return (
        <div className="brochure-wrapper">
            <div className="print-toolbar no-print">
                <button onClick={() => window.print()}>Print / Save PDF</button>
            </div>

            {/* ══════════════ SHEET 1 — OUTSIDE ══════════════ */}
            <div className="brochure-sheet">
                <div className="fold-guide fold-guide-1" />
                <div className="fold-guide fold-guide-2" />

                {/* ─── PANEL 3: Inside Flap — Capabilities ─── */}
                <div className="brochure-panel" style={{ background: "#0F172A" }}>
                    <p className="brochure-subhead" style={{ marginTop: "0.15in" }}>Full-Stack Capabilities</p>
                    <h2 className="brochure-headline" style={{ fontSize: "1.15rem", marginBottom: "0.2rem" }}>
                        One Team.<br />
                        <span className="gradient-text">Every Layer.</span>
                    </h2>
                    <div className="accent-line" style={{ margin: "0.15rem 0" }} />

                    <p className="brochure-body" style={{ fontSize: "0.48rem", marginBottom: "0.2rem" }}>
                        Front end to database. Auth to payments. CI/CD to monitoring.
                        We own every layer — because a platform that breaks at any layer breaks everywhere.
                    </p>

                    <div style={{ marginBottom: "0.18rem" }}>
                        <p style={{ fontSize: "0.48rem", fontWeight: 800, color: "#38bdf8", marginBottom: "0.06rem", letterSpacing: "0.06em" }}>FRONTEND & UI</p>
                        <p style={{ fontSize: "0.44rem", color: "#CBD5E1", lineHeight: 1.45 }}>
                            Next.js 15+ · React 19 · TypeScript · Tailwind CSS · Framer Motion ·
                            SSR &amp; Static Gen · Progressive Web Apps · Responsive design · Lighthouse 95+.
                        </p>
                    </div>

                    <div style={{ marginBottom: "0.18rem" }}>
                        <p style={{ fontSize: "0.48rem", fontWeight: 800, color: "#818cf8", marginBottom: "0.06rem", letterSpacing: "0.06em" }}>API & BUSINESS LOGIC</p>
                        <p style={{ fontSize: "0.44rem", color: "#CBD5E1", lineHeight: 1.45 }}>
                            Node.js · Express · Route Handlers · REST &amp; GraphQL · WebSocket real-time ·
                            Rate limiting · Validation · Background jobs · Webhook integrations.
                        </p>
                    </div>

                    <div style={{ marginBottom: "0.18rem" }}>
                        <p style={{ fontSize: "0.48rem", fontWeight: 800, color: "#34d399", marginBottom: "0.06rem", letterSpacing: "0.06em" }}>DATA & STORAGE</p>
                        <p style={{ fontSize: "0.44rem", color: "#CBD5E1", lineHeight: 1.45 }}>
                            PostgreSQL · MySQL · MongoDB · Prisma ORM · Redis caching · Migrations ·
                            Automated backups · Query optimization · Full-text search.
                        </p>
                    </div>

                    <div style={{ marginBottom: "0.18rem" }}>
                        <p style={{ fontSize: "0.48rem", fontWeight: 800, color: "#f59e0b", marginBottom: "0.06rem", letterSpacing: "0.06em" }}>PAYMENTS, AUTH & SECURITY</p>
                        <p style={{ fontSize: "0.44rem", color: "#CBD5E1", lineHeight: 1.45 }}>
                            Stripe (cards, ACH, subscriptions) · JWT &amp; session auth · RBAC ·
                            OAuth/SSO · HTTPS/TLS · OWASP practices · Encryption at rest &amp; transit.
                        </p>
                    </div>

                    <div style={{ marginBottom: "0.18rem" }}>
                        <p style={{ fontSize: "0.48rem", fontWeight: 800, color: "#f472b6", marginBottom: "0.06rem", letterSpacing: "0.06em" }}>DEPLOYMENT & INFRASTRUCTURE</p>
                        <p style={{ fontSize: "0.44rem", color: "#CBD5E1", lineHeight: 1.45 }}>
                            Vercel · AWS · Docker · GitHub Actions CI/CD · Sentry monitoring ·
                            Auto-scaling · Blue-green deploys · SSL · CDN · DNS management.
                        </p>
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "auto", gap: "0.1rem" }}>
                        {[
                            { val: "20+", label: "Projects" },
                            { val: "5", label: "Live Bots" },
                            { val: "0", label: "Outages" },
                            { val: "95+", label: "Lighthouse" },
                        ].map((s) => (
                            <div key={s.label} className="stat-block" style={{ flex: 1, padding: "0.12rem 0.08rem" }}>
                                <p className="stat-value" style={{ fontSize: "0.7rem" }}>{s.val}</p>
                                <p className="stat-label" style={{ fontSize: "0.32rem" }}>{s.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ─── PANEL 2: Back Cover — Contact ─── */}
                <div className="brochure-panel" style={{
                    background: "linear-gradient(180deg, #111827 0%, #0F172A 100%)",
                    justifyContent: "center", alignItems: "center", textAlign: "center",
                }}>
                    <img src="/logo-transparent.png" alt="QuantLab" style={{ width: "180px", height: "180px", objectFit: "contain", marginBottom: "0.2rem" }} className="logo-glow" />

                    <p style={{ fontSize: "0.7rem", fontWeight: 900, color: "#ffffff", marginBottom: "0.04rem" }}>QuantLab Software Solutions</p>
                    <p style={{ fontSize: "0.48rem", color: "#3B82F6", fontWeight: 600, marginBottom: "0.3rem", letterSpacing: "0.06em" }}>Engineering the Next Level</p>

                    <div style={{ margin: "0 auto 0.3rem auto" }}>
                        <BrochureQR url="https://quantlabusa.dev" size="1in" accentColor="#3B82F6" fgColor="#E2E8F0" label="Scan to Visit" sublabel="quantlabusa.dev" />
                    </div>

                    <div style={{ background: "rgba(56,189,248,0.04)", border: "1px solid rgba(56,189,248,0.12)", borderRadius: "0.35rem", padding: "0.2rem 0.35rem", marginBottom: "0.25rem", textAlign: "left" }}>
                        <p style={{ fontSize: "0.48rem", color: "#D1D5DB", marginBottom: "0.08rem" }}>Email: contact@quantlabusa.dev</p>
                        <p style={{ fontSize: "0.48rem", color: "#D1D5DB", marginBottom: "0.08rem" }}>Web: quantlabusa.dev</p>
                        <p style={{ fontSize: "0.48rem", color: "#D1D5DB" }}>Phone: Available upon request</p>
                    </div>

                    <div style={{ textAlign: "left", marginBottom: "0.2rem" }}>
                        {[
                            "Free 30-minute strategy call — zero obligation",
                            "Fixed-price quotes — no hourly surprises",
                            "Senior engineers only — no interns, no offshore",
                            "You own 100% of the source code",
                            "NDA available before any conversation",
                            "90 days post-launch support included",
                            "Response within 24 hours guaranteed",
                            "Weekly demos during development",
                        ].map((t) => (
                            <div key={t} className="trust-item">
                                <div className="trust-dot" />
                                <span style={{ fontSize: "0.42rem" }}>{t}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.1rem", paddingTop: "0.15rem", borderTop: "1px solid rgba(56,189,248,0.1)" }}>
                        {["TypeScript", "React", "Next.js", "Node.js", "PostgreSQL", "AWS", "Vercel", "Stripe", "Docker"].map((t) => (
                            <span key={t} className="tech-tag">{t}</span>
                        ))}
                    </div>

                    <p style={{ fontSize: "0.34rem", color: "#4B5563", marginTop: "auto" }}>© 2026 QuantLab Software Solutions LLC</p>
                </div>

                {/* ─── PANEL 1: Front Cover ─── */}
                <div className="brochure-panel" style={{
                    background: "radial-gradient(ellipse 80% 70% at 50% 50%, #0F1B2E 0%, #111827 60%, #0B1120 100%)",
                    justifyContent: "center", alignItems: "center", textAlign: "center",
                }}>
                    <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: `linear-gradient(0deg, transparent 45%, #3B82F6 45.5%, #3B82F6 46%, transparent 46.5%), linear-gradient(90deg, transparent 45%, #3B82F6 45.5%, #3B82F6 46%, transparent 46.5%)`, backgroundSize: "40px 40px" }} />
                    <div style={{ position: "absolute", top: "35%", left: "50%", transform: "translate(-50%, -50%)", width: "350px", height: "350px", background: "radial-gradient(circle, rgba(56,189,248,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

                    <img src="/logo-transparent.png" alt="QuantLab" style={{ width: "200px", height: "200px", objectFit: "contain", marginBottom: "0.25rem", position: "relative", zIndex: 2 }} className="logo-glow" />

                    <h1 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.15, position: "relative", zIndex: 2, marginBottom: "0.25rem" }}>
                        Engineering<br />
                        <span style={{ fontWeight: 300, color: "#9CA3AF" }}>the </span>
                        Next Level.
                    </h1>

                    <div className="accent-line" style={{ margin: "0.2rem auto" }} />

                    <p style={{ fontSize: "0.56rem", color: "#9CA3AF", maxWidth: "2.8in", lineHeight: 1.5, position: "relative", zIndex: 2, marginBottom: "0.3rem" }}>
                        Custom software platforms, algorithmic trading systems,
                        and enterprise-grade solutions — built by senior engineers
                        who own every layer of the stack.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.14rem", position: "relative", zIndex: 2, textAlign: "left", maxWidth: "2.8in" }}>
                        {[
                            "Full-Stack Custom Platforms (React, Node, PostgreSQL)",
                            "Algorithmic Trading Bots (<12ms latency, 24/7)",
                            "Enterprise CRM, ECM & Operations Dashboards",
                            "Payment Systems (Stripe, ACH, subscriptions)",
                            "Client Portals, Admin Panels & Reporting",
                            "API Integrations with Any Third-Party Service",
                        ].map((item) => (
                            <p key={item} style={{ fontSize: "0.48rem", color: "#93C5FD", fontWeight: 600, display: "flex", alignItems: "flex-start", gap: "0.15rem", lineHeight: 1.35 }}>
                                <span style={{ color: "#3B82F6", flexShrink: 0 }}>&#10003;</span> {item}
                            </p>
                        ))}
                    </div>

                    <div style={{ position: "absolute", bottom: "0.35in", left: "15%", right: "15%", height: "1px", background: "linear-gradient(90deg, transparent, #3B82F6, transparent)" }} />
                </div>
            </div>

            {/* ══════════════ SHEET 2 — INSIDE ══════════════ */}
            <div className="brochure-sheet">
                <div className="fold-guide fold-guide-1" />
                <div className="fold-guide fold-guide-2" />

                {/* ─── PANEL 4: Pain Points ─── */}
                <div className="brochure-panel" style={{ background: "#111827" }}>
                    <p className="brochure-subhead" style={{ marginTop: "0.15in" }}>The Real Cost</p>
                    <h2 className="brochure-headline" style={{ fontSize: "1.05rem", marginBottom: "0.2rem" }}>
                        What <span className="gradient-text">inaction</span> is<br />costing you right now.
                    </h2>
                    <div className="accent-line" style={{ margin: "0.15rem 0" }} />

                    <p className="brochure-body" style={{ fontSize: "0.48rem", marginBottom: "0.15rem" }}>
                        Conservative estimates based on real businesses that tried spreadsheets, freelancers, or off-the-shelf tools:
                    </p>

                    {[
                        {
                            cost: "$4,200/mo",
                            problem: "Dropped Leads",
                            detail: "Without automated CRM, teams drop ~30% of leads. At $280/lead, that's $4,200/month. Every lead your competitor auto-responds to in 5 min — gone.",
                        },
                        {
                            cost: "$2,800/mo",
                            problem: "Manual Processes",
                            detail: "Proposals, reports, invoicing, data entry — 46+ hrs/month of work software handles in seconds. That's a full salary going to busywork.",
                        },
                        {
                            cost: "$1,500/mo",
                            problem: "Tool Fragmentation",
                            detail: "CRM here, invoicing there, PM somewhere else. $1,500/mo in tools that don't share data + 8 hrs/week re-entering info between systems.",
                        },
                        {
                            cost: "$6,000/mo",
                            problem: "Slow Invoicing",
                            detail: "9-day delay on $200K in receivables costs thousands. Manual invoicing = late invoicing. Late invoicing = 3x higher non-payment rates.",
                        },
                        {
                            cost: "$3,500/mo",
                            problem: "No Real-Time Data",
                            detail: "No true CAC, LTV, or profit per service line. Every hire/pricing/marketing decision is a guess. One wrong guess costs $20K+.",
                        },
                    ].map((item) => (
                        <div key={item.problem} style={{ background: "#1F2937", borderRadius: "0.35rem", border: "1px solid rgba(255,255,255,0.05)", padding: "0.2rem 0.25rem", marginBottom: "0.12rem", display: "flex", gap: "0.2rem", alignItems: "flex-start" }}>
                            <div style={{ minWidth: "0.8in" }}>
                                <p style={{ fontSize: "0.65rem", fontWeight: 900, color: "#EF4444", lineHeight: 1 }}>{item.cost}</p>
                                <p style={{ fontSize: "0.36rem", color: "#9CA3AF", marginTop: "0.04rem" }}>{item.problem}</p>
                            </div>
                            <p style={{ fontSize: "0.42rem", color: "#9CA3AF", lineHeight: 1.4 }}>{item.detail}</p>
                        </div>
                    ))}

                    <div style={{ marginTop: "auto", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "0.15rem" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                            <div>
                                <p style={{ fontSize: "0.48rem", color: "#6B7280", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Conservative Annual Waste</p>
                                <p style={{ fontSize: "0.42rem", color: "#6B7280" }}>One platform pays for itself in 60-90 days.</p>
                            </div>
                            <p style={{ fontSize: "1rem", fontWeight: 900, color: "#EF4444" }}>$216K+</p>
                        </div>
                    </div>
                </div>

                {/* ─── PANEL 5: Services ─── */}
                <div className="brochure-panel" style={{ background: "#0F172A" }}>
                    <p className="brochure-subhead" style={{ marginTop: "0.15in" }}>What We Build</p>
                    <h2 style={{ fontSize: "0.9rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.25, marginBottom: "0.18rem" }}>
                        Production-Grade Software{" "}
                        <span className="gradient-text">That Saves</span><br />
                        Time, Money, and Headaches.
                    </h2>
                    <div className="accent-line" style={{ margin: "0.12rem 0" }} />

                    {[
                        {
                            title: "Custom CRM & Client Management",
                            detail: "Full pipeline. Automated follow-up. Lead scoring. Source attribution. Close rate analytics. Communication history. Custom fields.",
                            result: "40% fewer dropped leads in 60 days",
                        },
                        {
                            title: "Algorithmic Trading Systems",
                            detail: "Multi-strategy execution at <12ms. Backtesting engine. Risk controls. Real-time P&L dashboards. Multi-exchange. 24/7 automated.",
                            result: "<12ms latency · 24/7 uptime · Multi-strategy",
                        },
                        {
                            title: "Business Operations Platforms",
                            detail: "Unified dashboard for sales, ops, finance, and team. Project tracking. Resource allocation. Approval workflows. KPI monitoring.",
                            result: "Replace 5+ disconnected tools with one system",
                        },
                        {
                            title: "Estimating & Proposal Generators",
                            detail: "Template-based with your pricing and branding. Assembly/line-item detail. E-signature integration. Win/loss tracking.",
                            result: "4 hours → 20 minutes per proposal",
                        },
                        {
                            title: "Payment & Invoicing Systems",
                            detail: "Stripe integration (cards, ACH, subscriptions). Auto-invoicing. Recurring billing. Aging reports. Payment reminders. QuickBooks sync.",
                            result: "Paid 9 days faster on average",
                        },
                        {
                            title: "High-Performance Web Portals",
                            detail: "Client-facing portals with branded login. Project status, doc sharing, payments, messaging. Admin panels with RBAC. Analytics built in.",
                            result: "2.8x increase in qualified lead conversion",
                        },
                    ].map((svc) => (
                        <div key={svc.title} className="service-card">
                            <p className="service-card-title">{svc.title}</p>
                            <p className="service-card-hook">{svc.detail}</p>
                            <p className="service-card-proof">&#10003; {svc.result}</p>
                        </div>
                    ))}

                    <p style={{ fontSize: "0.42rem", color: "#6B7280", marginTop: "auto", lineHeight: 1.45, paddingTop: "0.1rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                        + License Management · Enterprise Infra · API Integrations · Data Migration · Mobile · Custom Workflows · Training · 90 Days Support
                    </p>
                </div>

                {/* ─── PANEL 6: Why Us + CTA ─── */}
                <div className="brochure-panel" style={{ background: "#111827" }}>
                    <p className="brochure-subhead" style={{ marginTop: "0.15in" }}>Why QuantLab</p>
                    <h2 className="brochure-headline" style={{ fontSize: "0.95rem", marginBottom: "0.18rem" }}>
                        The freelancer. The agency.<br />
                        <span className="gradient-text">The off-the-shelf SaaS.</span><br />
                        We&apos;re none of those.
                    </h2>
                    <div className="accent-line" style={{ margin: "0.12rem 0" }} />

                    {[
                        {
                            vs: "vs. Freelancers & Overseas Devs",
                            them: "Disappear mid-project. No business ops knowledge. Single point of failure. No deployment expertise. Minimal testing.",
                            us: "Full team. Architecture → deployment → monitoring. 90 days support. Production-grade systems, not prototypes.",
                        },
                        {
                            vs: "vs. Agencies ($150K+)",
                            them: "Account managers who don't code. Junior devs. 6-month timelines. Hourly billing that always runs over.",
                            us: "Senior-only. Fixed-price. 2-4 week delivery. You talk directly to the builders. No middlemen.",
                        },
                        {
                            vs: "vs. Salesforce, HubSpot & SaaS",
                            them: "Reshape your biz to fit the tool. $500+/mo that climbs. Data locked in their ecosystem.",
                            us: "Built around your workflow. You own the code and data. No monthly fees. Zero compromise.",
                        },
                    ].map((item) => (
                        <div key={item.vs} style={{ background: "#1F2937", borderRadius: "0.35rem", border: "1px solid rgba(56,189,248,0.1)", borderLeft: "3px solid #3B82F6", padding: "0.2rem 0.25rem", marginBottom: "0.12rem" }}>
                            <p style={{ fontSize: "0.48rem", fontWeight: 800, color: "#3B82F6", marginBottom: "0.04rem" }}>{item.vs}</p>
                            <p style={{ fontSize: "0.42rem", color: "#6B7280", lineHeight: 1.4, marginBottom: "0.04rem" }}>They: {item.them}</p>
                            <p style={{ fontSize: "0.42rem", color: "#D1D5DB", lineHeight: 1.4 }}>Us: {item.us}</p>
                        </div>
                    ))}

                    <p style={{ fontSize: "0.42rem", color: "#6B7280", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, margin: "0.12rem 0 0.08rem" }}>From Call to Production</p>
                    <div style={{ display: "flex", gap: "0.1rem", marginBottom: "0.12rem" }}>
                        {[
                            { week: "Week 1", action: "Free call. Learn your stack. Fixed-price quote in 48hrs." },
                            { week: "Week 2-4", action: "Build in sprints. Demo every Friday. Your feedback drives it." },
                            { week: "Week 5+", action: "Deploy. Train your team. 90 days support." },
                        ].map((step) => (
                            <div key={step.week} style={{ flex: 1, background: "rgba(56,189,248,0.05)", border: "1px solid rgba(56,189,248,0.12)", borderRadius: "0.25rem", padding: "0.12rem 0.15rem", textAlign: "center" }}>
                                <p style={{ fontSize: "0.42rem", fontWeight: 800, color: "#3B82F6" }}>{step.week}</p>
                                <p style={{ fontSize: "0.34rem", color: "#9CA3AF", lineHeight: 1.35 }}>{step.action}</p>
                            </div>
                        ))}
                    </div>

                    <div className="cta-block" style={{ marginTop: "auto" }}>
                        <p className="cta-title">Your competitors are already building.</p>
                        <p className="cta-subtitle" style={{ marginBottom: "0.12rem" }}>
                            Free 30-min strategy call. We&apos;ll scope your project and give you a fixed-price quote.
                        </p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.3rem" }}>
                            <BrochureQR url="https://quantlabusa.dev" size="0.65in" accentColor="#3B82F6" label="Scan" sublabel="" />
                            <div style={{ textAlign: "left" }}>
                                <p style={{ fontSize: "0.46rem", color: "#3B82F6", fontWeight: 700, marginBottom: "0.04rem" }}>Book Your Free Call</p>
                                <p style={{ fontSize: "0.42rem", color: "#D1D5DB" }}>contact@quantlabusa.dev</p>
                                <p style={{ fontSize: "0.42rem", color: "#D1D5DB" }}>quantlabusa.dev</p>
                                <p style={{ fontSize: "0.36rem", color: "#6B7280", marginTop: "0.04rem" }}>Fixed-price · NDA available · 24hr response</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
