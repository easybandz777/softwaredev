"use client";
import React, { useState } from "react";

const icpAttributes = [
    {
        label: "Revenue Range",
        icon: "💰",
        value: "$500K – $10M/year",
        why: "Big enough to have real digital pain; small enough that one good site or system changes the game.",
    },
    {
        label: "Team Size",
        icon: "👥",
        value: "3–50 employees",
        why: "Solo operators rarely invest. 50+ usually have in-house dev. The sweet spot is 3–50.",
    },
    {
        label: "Digital Maturity",
        icon: "📉",
        value: "Low to medium",
        why: "Look for broken websites, generic templates, no booking system, poor Google presence. These are visible from the outside.",
    },
    {
        label: "Decision Maker Access",
        icon: "🎯",
        value: "Owner or C-Suite",
        why: "Avoid speaking with marketing managers or office coordinators. You need the person who controls the budget.",
    },
    {
        label: "Industry",
        icon: "🏢",
        value: "Service-based businesses",
        why: "Law firms, med spas, contractors, real estate, fitness studios, dental, consulting — these have clear lead-gen and automation needs.",
    },
];

const channels = [
    {
        name: "LinkedIn",
        color: "#22d3ee",
        icon: "🔗",
        urgency: "Highest Intent",
        steps: [
            'Search: "[Industry] owner [City]" in LinkedIn People search',
            "Filter by: 2nd connections, company size 10–50, title contains 'Owner', 'Founder', 'CEO'",
            "Check their company page — look for no posts in 90+ days, generic description, or template site link",
            "Send a connection request with a personalized note (no pitch — just reference something specific about their business)",
            "After connection: send one short message. Never pitch in the first message.",
        ],
    },
    {
        name: "Google Maps",
        color: "#a78bfa",
        icon: "📍",
        urgency: "High Volume",
        steps: [
            'Search: "[Industry] [City]" on Google Maps',
            "Sort by: Rating (3.5–4.2 stars — too low = chaos, too high = probably already dialed in)",
            "Click through to their website — check speed, mobile layout, CTA clarity",
            "Run PageSpeed Insights on their URL in 60 seconds",
            "Make a note of their phone number and business category — you now have cold call ammo",
        ],
    },
    {
        name: "Cold Email",
        color: "#34d399",
        icon: "✉️",
        urgency: "Scalable",
        steps: [
            "Use Apollo.io or Hunter.io to find owner emails for a target list of businesses",
            "Never send the same email twice — personalize the first two lines to their specific business",
            'Subject lines that work: "Your [City] booking page", "Quick question about [Company]", "Noticed something on your site"',
            "Body: 3–4 sentences max. One observation. One question. One CTA.",
            "Follow up 3–5 days later with a different angle — not 'just checking in'",
        ],
    },
    {
        name: "In-Person / Local",
        color: "#fbbf24",
        icon: "🤝",
        urgency: "High Close Rate",
        steps: [
            "Walk-in prospecting: Local service businesses — dentists, chiropractors, law offices, gyms",
            "Look for businesses with 'Walk-ins Welcome' signs, local strips, business parks",
            "Lead with: 'I was just on your website trying to book — can I ask who handles your digital setup?'",
            "Business card exchange is the goal of visit #1. Not the sale.",
            "Follow up via LinkedIn the same evening — reference the visit.",
        ],
    },
    {
        name: "Referrals",
        color: "#f472b6",
        icon: "🔄",
        urgency: "Highest Close Rate",
        steps: [
            "Ask every existing client: 'Do you know 2-3 other business owners still running on old systems?'",
            "Offer a referral incentive: 1–2 months free on their retainer per closed deal",
            "Ask vendor relationships: accountants, business coaches, commercial Realtors all talk to your ICP daily",
            "Network groups: BNI, local Chambers, industry associations — one hot referral per meeting compounds fast",
        ],
    },
];

const dailyRoutine = [
    { time: "8:00 AM", task: "Morning Prospecting Block (45 min)", detail: "Research 10 new leads. Add to CRM. Write personalized openers for each. Never prospect reactively — do it first.", color: "#22d3ee" },
    { time: "9:00 AM", task: "Outreach Execution (60 min)", detail: "Send LinkedIn messages, emails, and make cold calls from yesterday's researched list. Volume + quality = meetings.", color: "#22d3ee" },
    { time: "11:00 AM", task: "Discovery Calls / Demos", detail: "Block your best energy hours for live calls. This is income-generating time — protect it like cash.", color: "#a78bfa" },
    { time: "2:00 PM", task: "Follow-Up Block (30 min)", detail: "Touch every open pipeline deal. Update CRM. Send follow-up messages from the ghosted sequence.", color: "#a78bfa" },
    { time: "4:00 PM", task: "Pipeline Review & Admin", detail: "Update deal stages. Note next action for every prospect. Close the day knowing exactly what tomorrow looks like.", color: "#34d399" },
];

const leadScoringCriteria = [
    { criteria: "Has a broken or slow website", points: "+3", color: "#22d3ee" },
    { criteria: "Owner is active on LinkedIn", points: "+2", color: "#22d3ee" },
    { criteria: "Business has 3.5–4.2 star Google rating (not maxed)", points: "+2", color: "#22d3ee" },
    { criteria: "No clear booking/contact flow on their site", points: "+3", color: "#22d3ee" },
    { criteria: "Uses Wix, Squarespace, or GoDaddy", points: "+3", color: "#a78bfa" },
    { criteria: "Business is in a high-ticket service industry", points: "+2", color: "#a78bfa" },
    { criteria: "Company size 5–40 employees", points: "+2", color: "#a78bfa" },
    { criteria: "No Google Ads running (opportunity gap)", points: "+1", color: "#34d399" },
    { criteria: "Competitor in same market has modern digital presence", points: "+2", color: "#34d399" },
    { criteria: "Owner mentioned pain point publicly (review response, post, etc.)", points: "+4", color: "#f472b6" },
    { criteria: "Job listing mentions they need admin / ops / scheduling software", points: "+4", color: "#f59e0b" },
    { criteria: "Known to use spreadsheets for job tracking or scheduling", points: "+3", color: "#f59e0b" },
    { criteria: "Team uses 4+ disconnected SaaS tools (Calendly + Acuity + QuickBooks + Slack + etc.)", points: "+3", color: "#f59e0b" },
    { criteria: "No client portal or client-facing login system visible", points: "+3", color: "#34d399" },
    { criteria: "Booking/intake still done via phone or email only", points: "+2", color: "#34d399" },
    { criteria: "Revenue appears to outpace their current ops infrastructure", points: "+3", color: "#f472b6" },
    { criteria: "Reviews mention 'slow', 'hard to reach', or 'communication issues'", points: "+4", color: "#f472b6" },
    { criteria: "Owner posts about being overwhelmed / hiring bottleneck on LinkedIn", points: "+4", color: "#f472b6" },
];


export default function Module8() {
    const [activeChannel, setActiveChannel] = useState(0);
    const [scores, setScores] = useState<Record<number, boolean>>({});

    const totalScore = Object.values(scores).filter(Boolean).length;
    const checkedPoints = leadScoringCriteria
        .filter((_, i) => scores[i])
        .reduce((sum, c) => sum + parseInt(c.points), 0);

    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Module 08</span>
                <h2 className="ql-module-title">Prospecting & Lead Generation</h2>
                <p style={{ color: "#64748b", marginTop: "8px", fontSize: "15px" }}>
                    No leads = no pipeline = no income. Mastering prospecting is the single most important skill a QuantLab rep can build.
                </p>
            </div>

            {/* ICP */}
            <div className="ql-card">
                <h3>🎯 Define Your Ideal Client Profile (ICP)</h3>
                <p>
                    Before you prospect anyone, you need to know exactly <strong>who you&rsquo;re looking for</strong>.
                    Spraying and praying wastes your most valuable asset — time. A focused ICP makes every call warmer.
                </p>
                <div style={{ display: "grid", gap: "12px", marginTop: "20px" }}>
                    {icpAttributes.map((attr, i) => (
                        <div
                            key={i}
                            style={{
                                display: "flex",
                                gap: "16px",
                                padding: "16px",
                                background: "rgba(34,211,238,0.03)",
                                borderRadius: "12px",
                                border: "1px solid rgba(34,211,238,0.1)",
                                alignItems: "flex-start",
                            }}
                        >
                            <span style={{ fontSize: "24px", flexShrink: 0 }}>{attr.icon}</span>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: "flex", alignItems: "baseline", gap: "12px", marginBottom: "4px" }}>
                                    <p style={{ color: "#e2e8f0", fontWeight: 700, margin: 0, fontSize: "14px" }}>{attr.label}</p>
                                    <span style={{ color: "#22d3ee", fontSize: "13px", fontWeight: 600 }}>{attr.value}</span>
                                </div>
                                <p style={{ color: "#64748b", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>{attr.why}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* System-Building ICP Addendum */}
            <div className="ql-card" style={{ borderColor: 'rgba(245,158,11,0.25)' }}>
                <h3 style={{ color: '#f59e0b' }}>🖥️ System Build ICP — Who to Target for Software & Automation</h3>
                <p>When pitching a custom system, portal, or automation engine, your ICP expands beyond just website pain. These are the ‘ops intelligence’ signals that tell you a business is ready for a system build.</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '20px' }}>
                    {[
                        { icon: '📊', label: 'Running on Spreadsheets', desc: 'Still tracking jobs, clients, or inventory in Google Sheets or Excel. Any team of 5+ doing this is in pain.' },
                        { icon: '🔧', label: 'Tool Sprawl', desc: 'Using Calendly + QuickBooks + Slack + Trello + Gmail + a dozen other SaaS tools that never talk to each other.' },
                        { icon: '📧', label: 'Email-Based Operations', desc: 'Everything runs through someone\'s inbox. Onboarding, approvals, updates, invoices — all email chains.' },
                        { icon: '🚷', label: 'No Client Portal', desc: 'Clients can\'t log in anywhere. They call or email for every status update. That\'s your opportunity.' },
                        { icon: '💸', label: 'Revenue Exceeds Ops Capacity', desc: 'They\'re making good money but constantly firefighting. Scaling is impossible without a system.' },
                        { icon: '👥', label: 'Hiring to Solve System Problems', desc: 'They\'re adding admin staff to handle what software should automate. $40k/yr salary vs. our build.' },
                    ].map((item, i) => (
                        <div key={i} style={{ padding: '14px', borderRadius: '10px', background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.12)' }}>
                            <p style={{ color: '#fbbf24', fontWeight: 700, fontSize: '13px', marginBottom: '5px' }}>{item.icon} {item.label}</p>
                            <p style={{ color: '#64748b', fontSize: '12px', margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="ql-tip-box" style={{ marginTop: '20px', marginBottom: 0 }}>
                    <h4>💡 The Ops Intelligence Rule</h4>
                    <p className="mb-0">For every 3 website-first prospects you contact, also identify 1 system-build prospect using the signals above. System builds are higher ticket, longer engagements, and create stickier client relationships. Diversifying your pipeline protects your income.</p>
                </div>
            </div>
            <div className="ql-card" style={{ borderColor: "rgba(167,139,250,0.3)" }}>
                <h3 style={{ color: "#a78bfa" }}>⚡ Lead Scoring Checklist</h3>
                <p>
                    Run every prospect through this before you reach out. Score of <strong>8+</strong> = high priority.
                    Score under 5 = move on. Click to check each criterion.
                </p>
                <div style={{ display: "grid", gap: "8px", marginTop: "20px" }}>
                    {leadScoringCriteria.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => setScores(s => ({ ...s, [i]: !s[i] }))}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                padding: "12px 14px",
                                borderRadius: "10px",
                                background: scores[i] ? `${item.color}10` : "rgba(255,255,255,0.02)",
                                border: `1px solid ${scores[i] ? item.color + "40" : "rgba(255,255,255,0.05)"}`,
                                cursor: "pointer",
                                transition: "all 0.2s ease",
                            }}
                        >
                            <div
                                style={{
                                    width: "20px",
                                    height: "20px",
                                    borderRadius: "5px",
                                    border: `2px solid ${scores[i] ? item.color : "#475569"}`,
                                    background: scores[i] ? item.color : "transparent",
                                    flexShrink: 0,
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                {scores[i] && <span style={{ color: "#000", fontWeight: 900, fontSize: "12px" }}>✓</span>}
                            </div>
                            <p style={{ flex: 1, color: scores[i] ? "#e2e8f0" : "#94a3b8", fontSize: "14px", margin: 0 }}>{item.criteria}</p>
                            <span style={{ color: item.color, fontWeight: 700, fontSize: "13px", flexShrink: 0 }}>{item.points} pts</span>
                        </div>
                    ))}
                </div>
                {Object.keys(scores).length > 0 && (
                    <div
                        style={{
                            marginTop: "20px",
                            padding: "16px 20px",
                            borderRadius: "12px",
                            background: checkedPoints >= 8 ? "rgba(34,211,238,0.08)" : "rgba(251,191,36,0.06)",
                            border: `1px solid ${checkedPoints >= 8 ? "rgba(34,211,238,0.3)" : "rgba(251,191,36,0.2)"}`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <p style={{ margin: 0, color: "#94a3b8", fontSize: "14px" }}>
                            Lead Score: <strong style={{ color: checkedPoints >= 8 ? "#22d3ee" : "#fbbf24", fontSize: "20px" }}>{checkedPoints}</strong> pts
                        </p>
                        <span
                            style={{
                                padding: "6px 14px",
                                borderRadius: "20px",
                                fontSize: "12px",
                                fontWeight: 700,
                                background: checkedPoints >= 8 ? "rgba(34,211,238,0.15)" : "rgba(251,191,36,0.1)",
                                color: checkedPoints >= 8 ? "#22d3ee" : "#fbbf24",
                            }}
                        >
                            {checkedPoints >= 8 ? "🔥 High Priority — Reach Out Now" : checkedPoints >= 5 ? "⚡ Medium Priority" : "🟡 Low Priority — Skip or Deprioritize"}
                        </span>
                    </div>
                )}
            </div>

            {/* Prospecting Channels */}
            <div className="ql-card">
                <h3>📡 Prospecting Channels & Playbooks</h3>
                <p>Every channel has a different approach and close rate. Know which one to use and when.</p>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "20px", marginBottom: "24px" }}>
                    {channels.map((ch, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveChannel(i)}
                            style={{
                                padding: "8px 16px",
                                borderRadius: "20px",
                                border: `1px solid ${activeChannel === i ? ch.color : "rgba(255,255,255,0.1)"}`,
                                background: activeChannel === i ? `${ch.color}15` : "transparent",
                                color: activeChannel === i ? ch.color : "#64748b",
                                cursor: "pointer",
                                fontSize: "13px",
                                fontWeight: 600,
                                transition: "all 0.2s ease",
                            }}
                        >
                            {ch.icon} {ch.name}
                        </button>
                    ))}
                </div>
                <div
                    style={{
                        padding: "24px",
                        borderRadius: "12px",
                        background: `${channels[activeChannel].color}06`,
                        border: `1px solid ${channels[activeChannel].color}20`,
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                        <p style={{ color: channels[activeChannel].color, fontWeight: 700, fontSize: "16px", margin: 0 }}>
                            {channels[activeChannel].icon} {channels[activeChannel].name}
                        </p>
                        <span
                            style={{
                                fontSize: "11px",
                                padding: "4px 10px",
                                borderRadius: "20px",
                                background: `${channels[activeChannel].color}15`,
                                color: channels[activeChannel].color,
                                fontWeight: 700,
                                letterSpacing: "0.05em",
                            }}
                        >
                            {channels[activeChannel].urgency}
                        </span>
                    </div>
                    <ol style={{ margin: 0, paddingLeft: "20px" }}>
                        {channels[activeChannel].steps.map((step, i) => (
                            <li key={i} style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.8, marginBottom: "6px" }}>
                                {step}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>

            {/* Daily Routine */}
            <div className="ql-card" style={{ borderColor: "rgba(52,211,153,0.3)" }}>
                <h3 style={{ color: "#34d399" }}>📅 The Prospecting Daily Routine</h3>
                <p>
                    Top reps don&rsquo;t prospect when they feel like it. They prospect on a <strong>schedule</strong>. Treat
                    these blocks like appointments you cannot cancel.
                </p>
                <div style={{ display: "grid", gap: "12px", marginTop: "20px" }}>
                    {dailyRoutine.map((block, i) => (
                        <div
                            key={i}
                            style={{
                                display: "flex",
                                gap: "16px",
                                alignItems: "flex-start",
                            }}
                        >
                            <div
                                style={{
                                    flexShrink: 0,
                                    width: "90px",
                                    textAlign: "right",
                                }}
                            >
                                <span style={{ color: block.color, fontSize: "12px", fontWeight: 700, fontVariantNumeric: "tabular-nums" }}>
                                    {block.time}
                                </span>
                            </div>
                            <div
                                style={{
                                    width: "1px",
                                    background: `${block.color}30`,
                                    flexShrink: 0,
                                    alignSelf: "stretch",
                                    marginTop: "4px",
                                }}
                            />
                            <div style={{ flex: 1, paddingBottom: "8px" }}>
                                <p style={{ color: "#e2e8f0", fontWeight: 600, fontSize: "14px", margin: "0 0 4px" }}>{block.task}</p>
                                <p style={{ color: "#64748b", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>{block.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CRM hygiene */}
            <div className="ql-card">
                <h3>🗂️ CRM Hygiene — Never Lose a Lead</h3>
                <p>
                    A lead that falls through the cracks is a deal you gave to a competitor for free. Your CRM is
                    your money machine — only if you actually use it correctly.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "20px" }}>
                    {[
                        { label: "Log every touchpoint", desc: "Every call, email, and message gets logged with the date and outcome. No exceptions.", color: "#22d3ee" },
                        { label: "Set a next action on every deal", desc: "No deal should sit in your CRM without a scheduled next step. 'Waiting' is not a status.", color: "#22d3ee" },
                        { label: "Categorize by stage", desc: "Use: Identified → Contacted → Engaged → Discovery → Proposal → Closed/Lost. Know where every deal lives.", color: "#a78bfa" },
                        { label: "Weekly pipeline scrub", desc: "Every Friday: review every open deal. Archive anything that hasn't moved in 30 days. Your pipeline should reflect reality.", color: "#a78bfa" },
                        { label: "Tag by industry", desc: "When you can reference a law firm build to another law firm prospect, close rates jump. Tags make this instant.", color: "#34d399" },
                        { label: "Track source", desc: "Know where each lead came from (LinkedIn, cold call, referral, etc.). Double down on what's working.", color: "#34d399" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            style={{
                                padding: "16px",
                                borderRadius: "10px",
                                background: `${item.color}06`,
                                border: `1px solid ${item.color}15`,
                            }}
                        >
                            <p style={{ color: item.color, fontWeight: 700, fontSize: "13px", marginBottom: "6px" }}>{item.label}</p>
                            <p style={{ color: "#64748b", fontSize: "12px", margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ql-tip-box">
                <h4>💡 The 50-Touch Rule</h4>
                <p className="mb-0">
                    Top reps make <strong>50 sincere, quality touches per day</strong> — a mix of LinkedIn messages, emails, calls, and follow-ups.
                    That&rsquo;s not 50 copy-paste blasts. It&rsquo;s 50 personalized interactions. At that volume,
                    consistent for 90 days, your pipeline will never be empty again. Most reps settle for 10. That&rsquo;s why most reps
                    struggle. <strong>Volume solves for variance.</strong>
                </p>
            </div>
        </div>
    );
}
