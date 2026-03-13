"use client";

import React from "react";
import "./brochure-business.css";
import BrochureQR from "../BrochureQR";

/* ═══════════════════════════════════════════════════════════════
   QuantLab — Executive Trust Brochure (General Business)
   Navy + Gold + White  ·  LARGE PRINT FONTS
   ═══════════════════════════════════════════════════════════════ */

export default function BrochureBusinessPage() {
    return (
        <div className="brochure-biz-wrapper">
            <div className="print-toolbar no-print">
                <button onClick={() => window.print()}>Print / Save PDF</button>
            </div>

            {/* ══════════════ SHEET 1 — OUTSIDE ══════════════ */}
            <div className="biz-sheet">
                <div className="fold-guide fold-guide-1" />
                <div className="fold-guide fold-guide-2" />

                {/* ─── PANEL 3: Inside Flap — Process ─── */}
                <div className="biz-panel" style={{ background: "#0F172A" }}>
                    <p className="biz-subhead" style={{ marginTop: "0.15in" }}>Our Process</p>
                    <h2 className="biz-headline" style={{ fontSize: "1.15rem", marginBottom: "0.2rem" }}>
                        How We Turn Your Idea<br />
                        <span className="gold-text">Into a Revenue Machine.</span>
                    </h2>
                    <div className="gold-line" style={{ margin: "0.15rem 0" }} />

                    <p className="biz-body" style={{ fontSize: "0.48rem", marginBottom: "0.2rem" }}>
                        No surprises. No scope creep. No junior developers learning on your dime.
                        Here&apos;s exactly what happens from the moment you reach out:
                    </p>

                    {[
                        {
                            num: "01",
                            title: "Free Strategy Call (30 min)",
                            detail: "We listen. You walk us through your workflows, bottlenecks, and frustrations. We ask about your revenue, margins, and where you're losing time. No sales pitch. Just strategy.",
                        },
                        {
                            num: "02",
                            title: "Fixed-Price Scope & Proposal",
                            detail: "Within 48 hours: exact deliverables, timeline, and cost with line-item detail. No hourly billing surprises. No scope creep. What we quote is what you pay.",
                        },
                        {
                            num: "03",
                            title: "Build & Iterate Weekly",
                            detail: "We build in 1-week sprints. Every Friday, you see a live demo. Your feedback shapes the next sprint. You're never in the dark. Average build: 2-4 weeks.",
                        },
                        {
                            num: "04",
                            title: "Launch, Train & Support",
                            detail: "Deploy to production. Train your entire team (recorded sessions included). 90 days post-launch support at no extra charge. Bug fixes, feature tweaks, phone support — all included.",
                        },
                    ].map((step) => (
                        <div key={step.num} style={{ display: "flex", gap: "0.2rem", marginBottom: "0.18rem" }}>
                            <div style={{ minWidth: "0.45in" }}>
                                <p style={{ fontSize: "0.7rem", fontWeight: 900, color: "#D4A843", lineHeight: 1 }}>{step.num}</p>
                            </div>
                            <div>
                                <p style={{ fontSize: "0.5rem", fontWeight: 800, color: "#ffffff", marginBottom: "0.04rem" }}>{step.title}</p>
                                <p style={{ fontSize: "0.42rem", color: "#94A3B8", lineHeight: 1.45 }}>{step.detail}</p>
                            </div>
                        </div>
                    ))}

                    <div style={{ background: "rgba(212,168,67,0.06)", border: "1px solid rgba(212,168,67,0.15)", borderRadius: "0.35rem", padding: "0.18rem 0.22rem", marginTop: "auto" }}>
                        <p style={{ fontSize: "0.48rem", fontWeight: 800, color: "#D4A843", marginBottom: "0.04rem" }}>Our Guarantee</p>
                        <p style={{ fontSize: "0.42rem", color: "#94A3B8", lineHeight: 1.4 }}>
                            If we don&apos;t deliver what we quoted, you don&apos;t pay for the difference. We eat it. Period.
                        </p>
                    </div>
                </div>

                {/* ─── PANEL 2: Back Cover — Contact Hub ─── */}
                <div className="biz-panel" style={{
                    background: "linear-gradient(180deg, #111827 0%, #0F172A 100%)",
                    justifyContent: "center", alignItems: "center", textAlign: "center",
                }}>
                    <img src="/logo-transparent.png" alt="QuantLab" style={{ width: "180px", height: "180px", objectFit: "contain", marginBottom: "0.2rem" }} className="logo-glow-gold" />

                    <p style={{ fontSize: "0.7rem", fontWeight: 900, color: "#ffffff", marginBottom: "0.04rem" }}>QuantLab Software Solutions</p>
                    <p style={{ fontSize: "0.48rem", color: "#D4A843", fontWeight: 600, marginBottom: "0.3rem", letterSpacing: "0.06em" }}>Custom Software That Pays for Itself</p>

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
                            "Fixed-price quotes — no hourly surprises",
                            "Senior engineers only — no juniors, no offshore",
                            "You own 100% of the source code",
                            "NDA available before any conversation",
                            "90 days post-launch support included",
                            "Response within 24 hours guaranteed",
                            "Weekly demos — you see progress in real time",
                        ].map((t) => (
                            <div key={t} className="biz-trust-item">
                                <div className="biz-trust-dot" />
                                <span style={{ fontSize: "0.42rem" }}>{t}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.1rem", paddingTop: "0.15rem", borderTop: "1px solid rgba(212,168,67,0.1)" }}>
                        {["Retail", "Construction", "Healthcare", "Finance", "Legal", "Services", "E-Commerce", "Real Estate"].map((ind) => (
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

                    <img src="/logo-transparent.png" alt="QuantLab" style={{ width: "200px", height: "200px", objectFit: "contain", marginBottom: "0.25rem", position: "relative", zIndex: 2 }} className="logo-glow-gold" />

                    <h1 style={{ fontSize: "1.6rem", fontWeight: 900, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.15, position: "relative", zIndex: 2, marginBottom: "0.25rem" }}>
                        Stop Leaving<br />
                        <span className="gold-text">Money</span>
                        <span style={{ fontWeight: 300, color: "#94A3B8" }}> on the Table.</span>
                    </h1>

                    <div className="gold-line" style={{ margin: "0.2rem auto" }} />

                    <p style={{ fontSize: "0.56rem", color: "#94A3B8", maxWidth: "2.8in", lineHeight: 1.5, position: "relative", zIndex: 2, marginBottom: "0.3rem" }}>
                        Custom software that automates your sales,
                        captures more revenue, eliminates busywork,
                        and runs your business the way you actually work.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.14rem", position: "relative", zIndex: 2, textAlign: "left", maxWidth: "2.8in" }}>
                        {[
                            "Automate lead follow-up — never drop a deal again",
                            "Generate proposals in minutes, not hours",
                            "One dashboard: sales, ops, invoicing & reporting",
                            "Get paid faster with auto-invoicing & online payments",
                            "Replace 5+ disconnected tools with one platform",
                            "Built around your exact workflow — zero compromise",
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

                {/* ─── PANEL 4: Pain Points ─── */}
                <div className="biz-panel" style={{ background: "#111827" }}>
                    <p className="biz-subhead" style={{ marginTop: "0.15in" }}>The Real Cost</p>
                    <h2 className="biz-headline" style={{ fontSize: "1.05rem", marginBottom: "0.2rem" }}>
                        Your business is<br />
                        <span className="gold-text">leaking revenue</span> right now.
                    </h2>
                    <div className="gold-line" style={{ margin: "0.15rem 0" }} />

                    <p className="biz-body" style={{ fontSize: "0.48rem", marginBottom: "0.15rem" }}>
                        Conservative estimates based on businesses like yours — losses that don&apos;t show up on a P&amp;L until too late:
                    </p>

                    {[
                        {
                            cost: "$4,200/mo",
                            problem: "Dropped Leads",
                            detail: "Without automated follow-up, teams drop ~30% of leads. At $280/lead, that's $4,200/month walking out the door. Your competitors auto-respond in 5 minutes.",
                        },
                        {
                            cost: "$2,800/mo",
                            problem: "Manual Proposals",
                            detail: "4 hrs per proposal × 3/week = 46 hrs/month of copy-paste. That's a full-time employee doing what software handles in 20 minutes.",
                        },
                        {
                            cost: "$1,500/mo",
                            problem: "Tool Fragmentation",
                            detail: "5 disconnected SaaS apps × $300/mo avg = $1,500 in tools that don't share data. Plus 8+ hrs/week re-entering information between systems.",
                        },
                        {
                            cost: "$6,000/mo",
                            problem: "Slow Invoicing",
                            detail: "A 9-day delay on $200K in receivables costs thousands. Late invoices have 3x higher non-payment rates. You're funding your clients' float.",
                        },
                        {
                            cost: "$1,800/mo",
                            problem: "Blind Decisions",
                            detail: "You don't know your true profit per client, cost per lead, or close rate. Every growth decision is a guess. One bad guess costs $20K+.",
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
                                <p style={{ fontSize: "0.48rem", color: "#64748B", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>Conservative Annual Waste</p>
                                <p style={{ fontSize: "0.42rem", color: "#64748B" }}>One platform pays for itself in 60-90 days.</p>
                            </div>
                            <p style={{ fontSize: "1rem", fontWeight: 900, color: "#DC2626" }}>$195K+</p>
                        </div>
                    </div>
                </div>

                {/* ─── PANEL 5: What We Build ─── */}
                <div className="biz-panel" style={{ background: "#0F172A" }}>
                    <p className="biz-subhead" style={{ marginTop: "0.15in" }}>What We Build</p>
                    <h2 style={{ fontSize: "0.9rem", fontWeight: 800, color: "#ffffff", lineHeight: 1.25, marginBottom: "0.18rem" }}>
                        One Platform.{" "}
                        <span className="gold-text">Built Around How</span><br />
                        You Actually Work.
                    </h2>
                    <div className="gold-line" style={{ margin: "0.12rem 0" }} />

                    {[
                        {
                            title: "Sales & Lead Management (CRM)",
                            detail: "Track every lead from first touch to close. Automated follow-up. Pipeline dashboard. Lead scoring. Source tracking. Close rate analytics.",
                            result: "40% fewer dropped leads in 60 days",
                        },
                        {
                            title: "Operations Dashboard & Workflow Hub",
                            detail: "One screen: project status, team workload, deliverables, revenue tracking, and tasks — all connected. Replace the 5 tabs you have open.",
                            result: "Real-time visibility into every moving part",
                        },
                        {
                            title: "Smart Invoicing & Payment Collection",
                            detail: "Auto-generate invoices from completed work. Online payments via Stripe/ACH. Auto-reminders. Aging reports. QuickBooks/Xero sync.",
                            result: "Paid 9 days faster on average",
                        },
                        {
                            title: "Proposal & Estimate Generator",
                            detail: "Template-based with your pricing and branding. Build proposals in 20 min instead of 4 hrs. E-signature integration. Conversion tracking.",
                            result: "4 hours → 20 minutes per proposal",
                        },
                        {
                            title: "Client Portal & Communication Hub",
                            detail: "Branded login for clients: project status, approvals, payments, and messaging. Reduces \"where are we at\" emails by 80%+.",
                            result: "2.8x increase in qualified lead conversion",
                        },
                        {
                            title: "Reporting & Business Intelligence",
                            detail: "Profit per client. Revenue by service. Close rates by source. Team utilization. Monthly P&L. Custom report builder. Export to CSV/PDF.",
                            result: "Complete financial clarity in real time",
                        },
                    ].map((svc) => (
                        <div key={svc.title} className="biz-service-card">
                            <p className="biz-service-title">{svc.title}</p>
                            <p className="biz-service-hook">{svc.detail}</p>
                            <p className="biz-service-proof">&#10003; {svc.result}</p>
                        </div>
                    ))}

                    <p style={{ fontSize: "0.42rem", color: "#64748B", marginTop: "auto", lineHeight: 1.45, paddingTop: "0.1rem", borderTop: "1px solid rgba(212,168,67,0.1)" }}>
                        + API Integrations · Data Migration · License Mgmt · Custom Workflows · Mobile-Optimized · Training · 90 Days Support
                    </p>
                </div>

                {/* ─── PANEL 6: Why Us + CTA ─── */}
                <div className="biz-panel" style={{ background: "#111827" }}>
                    <p className="biz-subhead" style={{ marginTop: "0.15in" }}>The Difference</p>
                    <h2 className="biz-headline" style={{ fontSize: "0.95rem", marginBottom: "0.18rem" }}>
                        Why businesses choose us<br />
                        <span className="gold-text">over the alternatives.</span>
                    </h2>
                    <div className="gold-line" style={{ margin: "0.12rem 0" }} />

                    {[
                        {
                            vs: "vs. Freelancers & Fiverr",
                            them: "Disappear mid-project. No business ops knowledge. Single point of failure. No testing. You get code, not a working system.",
                            us: "Full team. Architecture to deployment. 90 days support. We don't ghost.",
                        },
                        {
                            vs: "vs. Agencies ($150K+ budgets)",
                            them: "Junior devs doing senior work. 6-month timelines. Hourly billing that always exceeds estimates. Account managers who don't write code.",
                            us: "Senior-only engineers. Fixed-price. 2-4 week delivery. You talk directly to the builders.",
                        },
                        {
                            vs: "vs. Off-the-Shelf SaaS",
                            them: "Reshape your biz to fit the tool. $500+/mo that grows yearly. Features you don't need. Missing ones you do. Data held hostage.",
                            us: "Built around your exact workflow. You own the code and data. No monthly fees. Zero compromise.",
                        },
                    ].map((item) => (
                        <div key={item.vs} className="compare-row" style={{ borderLeft: "3px solid #D4A843" }}>
                            <p className="compare-header" style={{ color: "#D4A843" }}>{item.vs}</p>
                            <p className="compare-problem">They: {item.them}</p>
                            <p className="compare-us">Us: {item.us}</p>
                        </div>
                    ))}

                    <p style={{ fontSize: "0.42rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 700, margin: "0.12rem 0 0.08rem" }}>From Call to Launch</p>
                    <div style={{ display: "flex", gap: "0.1rem", marginBottom: "0.12rem" }}>
                        {[
                            { week: "Week 1", action: "Free call. Learn your biz. Fixed-price quote in 48hrs." },
                            { week: "Week 2-4", action: "Build in sprints. Demo every Friday. Your feedback drives it." },
                            { week: "Week 5+", action: "Launch. Train your team. 90 days support included." },
                        ].map((step) => (
                            <div key={step.week} className="timeline-step">
                                <p className="timeline-week">{step.week}</p>
                                <p className="timeline-action">{step.action}</p>
                            </div>
                        ))}
                    </div>

                    <div className="biz-cta-block" style={{ marginTop: "auto" }}>
                        <p className="biz-cta-title">Your competitors aren&apos;t waiting.</p>
                        <p className="biz-cta-subtitle" style={{ marginBottom: "0.12rem" }}>
                            Free 30-min strategy call. We&apos;ll map your workflows and identify the biggest ROI opportunities.
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
