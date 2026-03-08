"use client";
import React, { useState } from "react";

// ─────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────

const reframeMatrix = [
    {
        trigger: `"Can I send you a proposal?"`,
        amateur: "Gives control away. Waits for them to decide alone, usually dies in inbox.",
        elite: `"Based on what you've told me, it makes sense to map out a custom blueprint. Do you have your calendar open right now?"`,
    },
    {
        trigger: `"What's your budget?"`,
        amateur: "Sounds like a price-qualifier. Signals you'll adjust your value based on their number.",
        elite: `"Before we talk numbers — what's this problem costing you every month? Let's anchor to that first."`,
    },
    {
        trigger: `"We work with all kinds of businesses."`,
        amateur: "Positions you as a generalist. Zero authority. Zero trust.",
        elite: `"We tend to work best with [niche]. We're pretty selective — I want to make sure this is actually the right fit before we go further."`,
    },
    {
        trigger: `"Let me know if you have any questions."`,
        amateur: "Completely passive. Hands over all momentum to the prospect.",
        elite: `"I'll follow up Tuesday at 2pm — what's a better number for you, Tuesday or Wednesday?"`,
    },
    {
        trigger: `"I think you'd see a great ROI."`,
        amateur: "Vague. Unverifiable. Sounds like every other vendor they've heard from.",
        elite: `"Walk me through your current process. [After they explain] — right there, that's a 4-hour-a-week problem. At your billing rate, that's $X/month on the table."`,
    },
    {
        trigger: `"We can do that cheaper than the competition."`,
        amateur: "Races to the bottom. Price competition kills margin and respect.",
        elite: `"We don't compete on price — we compete on results. What's the outcome worth to you if we nail it?"`,
    },
];

const techTranslations = [
    {
        category: "Speed",
        color: "cyan",
        items: [
            { tech: `"We use Next.js server-side rendering."`, biz: `"Your site loads instantly on 3G. Google ranks you higher. Fewer bounces = more leads."` },
            { tech: `"Image optimization and lazy-loading."`, biz: `"New visitors don't wait. Every second of delay costs 7% of conversions — we kill that."` },
            { tech: `"CDN delivery across 300+ global nodes."`, biz: `"Your site loads fast in Miami, Tokyo, and Lagos. No customer ever waits."` },
        ],
    },
    {
        category: "Automation",
        color: "purple",
        items: [
            { tech: `"We build custom APIs and webhook integrations."`, biz: `"Your tools talk to each other. No more copy-pasting, no more manual data entry."` },
            { tech: `"Automated email/SMS sequences."`, biz: `"Every new lead gets followed up within 60 seconds — without you lifting a finger."` },
            { tech: `"CRM data sync and pipeline automation."`, biz: `"Your sales pipeline stays current automatically. Nothing falls through the cracks."` },
        ],
    },
    {
        category: "Authority",
        color: "yellow",
        items: [
            { tech: `"Premium custom UI with motion design."`, biz: `"You look like a $10M company, not a Squarespace site. Clients trust you before you speak."` },
            { tech: `"Custom case study and proof sections."`, biz: `"Your results are front and center. Prospects sell themselves before the call."` },
            { tech: `"Schema markup and structured data."`, biz: `"Google shows your reviews and details directly in search results. You stand out before they even click."` },
        ],
    },
    {
        category: "Security",
        color: "green",
        items: [
            { tech: `"SSL, HTTPS, and edge security headers."`, biz: `"Every visitor sees the lock icon. Clients trust you with their card info and contact details."` },
            { tech: `"Role-based access control on the admin panel."`, biz: `"Only the right people see the right data. No accidental leaks, no liability."` },
        ],
    },
];

const preCallChecklist = [
    { label: "Check their current website", detail: "Is it slow? Mobile-broken? No clear CTA? Screenshot the cracks — mention them in the first 90 seconds." },
    { label: "Google their business name", detail: "What shows up? Bad reviews? Competitors ranking above them? Zero Google presence? All ammunition." },
    { label: "Run BuiltWith or Wappalyzer", detail: "Know their tech stack before you talk. If they're on Wix, you know their ceiling. If they have no CRM, you know what to sell." },
    { label: "Check their social media recency", detail: "Last post was 6 months ago? Ghost accounts = broken digital presence. That's the problem you solve." },
    { label: "LinkedIn — find decision-maker", detail: "Identify the owner or director. Know their background. People trust people who 'get' their world." },
    { label: "Set your physical environment", detail: "Stand up if on the phone. Sit forward. No distractions. Treat it like a boardroom pitch, not a cold call." },
    { label: "Tonality reset", detail: "Slow down 20%. Drop your pitch 15%. Confident people don't rush. Own the silence." },
];

// ─────────────────────────────────────────────
// Sub-components
// ─────────────────────────────────────────────

function ReframeCard({ item }: { item: typeof reframeMatrix[0] }) {
    const [flipped, setFlipped] = useState(false);
    return (
        <div
            className="reframe-card-wrapper"
            onClick={() => setFlipped(!flipped)}
            style={{ cursor: "pointer", perspective: "1000px" }}
        >
            <div
                style={{
                    transition: "transform 0.55s cubic-bezier(0.45, 0, 0.55, 1)",
                    transformStyle: "preserve-3d",
                    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    position: "relative",
                    minHeight: "180px",
                }}
            >
                {/* Front */}
                <div
                    style={{
                        backfaceVisibility: "hidden",
                        position: "absolute",
                        inset: 0,
                        borderRadius: "12px",
                        background: "rgba(15,20,40,0.9)",
                        border: "1px solid rgba(239,68,68,0.3)",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <div>
                        <span style={{ fontSize: "10px", letterSpacing: "2px", color: "#ef4444", textTransform: "uppercase", fontWeight: 700 }}>Amateur Move</span>
                        <p style={{ marginTop: "10px", color: "#e2e8f0", fontSize: "14px", fontWeight: 600 }}>{item.trigger}</p>
                        <p style={{ marginTop: "10px", color: "#94a3b8", fontSize: "13px", lineHeight: 1.7 }}>{item.amateur}</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: "12px", gap: "6px" }}>
                        <span style={{ color: "#64748b", fontSize: "12px" }}>Flip for elite reframe</span>
                        <span style={{ color: "#22d3ee", fontSize: "18px" }}>↻</span>
                    </div>
                </div>
                {/* Back */}
                <div
                    style={{
                        backfaceVisibility: "hidden",
                        transform: "rotateY(180deg)",
                        position: "absolute",
                        inset: 0,
                        borderRadius: "12px",
                        background: "rgba(6,30,60,0.95)",
                        border: "1px solid rgba(34,211,238,0.4)",
                        padding: "20px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    }}
                >
                    <div>
                        <span style={{ fontSize: "10px", letterSpacing: "2px", color: "#22d3ee", textTransform: "uppercase", fontWeight: 700 }}>Elite Reframe</span>
                        <p style={{ marginTop: "12px", color: "#22d3ee", fontSize: "14px", fontWeight: 600, lineHeight: 1.7, fontStyle: "italic" }}>{item.elite}</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: "12px", gap: "6px" }}>
                        <span style={{ color: "#64748b", fontSize: "12px" }}>Click to go back</span>
                        <span style={{ color: "#22d3ee", fontSize: "18px" }}>↺</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

const colorMap: Record<string, string> = {
    cyan: "#22d3ee",
    purple: "#a78bfa",
    yellow: "#fbbf24",
    green: "#34d399",
};

function ChecklistItem({ item }: { item: typeof preCallChecklist[0] }) {
    const [checked, setChecked] = useState(false);
    return (
        <div
            onClick={() => setChecked(!checked)}
            style={{
                display: "flex",
                gap: "14px",
                padding: "14px 16px",
                borderRadius: "10px",
                background: checked ? "rgba(34,211,238,0.07)" : "rgba(255,255,255,0.03)",
                border: `1px solid ${checked ? "rgba(34,211,238,0.3)" : "rgba(255,255,255,0.06)"}`,
                cursor: "pointer",
                transition: "all 0.2s ease",
                marginBottom: "10px",
            }}
        >
            <div
                style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "6px",
                    border: `2px solid ${checked ? "#22d3ee" : "#475569"}`,
                    background: checked ? "#22d3ee" : "transparent",
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                    marginTop: "2px",
                }}
            >
                {checked && <span style={{ color: "#000", fontWeight: 900, fontSize: "13px" }}>✓</span>}
            </div>
            <div>
                <p style={{ color: checked ? "#22d3ee" : "#e2e8f0", fontWeight: 600, fontSize: "14px", margin: 0, textDecoration: checked ? "line-through" : "none", opacity: checked ? 0.6 : 1 }}>
                    {item.label}
                </p>
                <p style={{ color: "#64748b", fontSize: "13px", margin: "4px 0 0", lineHeight: 1.6 }}>{item.detail}</p>
            </div>
        </div>
    );
}

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────

export default function Module1() {
    const [checkedAll, setCheckedAll] = useState(false);

    return (
        <div className="ql-training-content">
            {/* Header */}
            <div className="ql-section-header">
                <span className="ql-module-number">Module 01</span>
                <h2 className="ql-module-title">Mindset &amp; Prep</h2>
                <p style={{ color: "#64748b", marginTop: "8px", fontSize: "15px" }}>
                    Elite sales is 80% psychology, 20% tactics. Master this before anything else.
                </p>
            </div>

            {/* ── 1. The Consultant Frame ── */}
            <div className="ql-card">
                <h3>The &ldquo;Consultant, Not Salesman&rdquo; Frame</h3>
                <p>
                    At QuantLab, we don&rsquo;t sell websites&mdash;we engineer business outcomes. Walk in as a vendor and you commoditize yourself.
                    Walk in as a <strong>Digital Growth Consultant</strong> and clients pay a premium without blinking.
                    Your job isn&rsquo;t to pitch&mdash;it&rsquo;s to <em>diagnose and prescribe</em>.
                </p>
                <div className="ql-framework-grid">
                    <div>
                        <h4 style={{ color: "#ef4444", marginBottom: "12px", fontSize: "14px", letterSpacing: "1px", textTransform: "uppercase" }}>❌ The Salesman Frame</h4>
                        <ul style={{ color: "#94a3b8", marginLeft: "20px", listStyleType: "disc", lineHeight: 2 }}>
                            <li>&ldquo;Do you need a new website?&rdquo;</li>
                            <li>Talks about features &amp; code</li>
                            <li>Chases the prospect</li>
                            <li>Accepts &ldquo;we&rsquo;re fine&rdquo;</li>
                            <li>Sends proposals unprompted</li>
                            <li>Discounts when pushed back</li>
                        </ul>
                    </div>
                    <div>
                        <h4 style={{ color: "#22d3ee", marginBottom: "12px", fontSize: "14px", letterSpacing: "1px", textTransform: "uppercase" }}>✅ The Consultant Frame</h4>
                        <ul style={{ color: "#94a3b8", marginLeft: "20px", listStyleType: "disc", lineHeight: 2 }}>
                            <li>&ldquo;Where is your business bleeding revenue?&rdquo;</li>
                            <li>Talks about automation &amp; ROI</li>
                            <li>Qualifies the prospect</li>
                            <li>Challenges &ldquo;we&rsquo;re fine&rdquo;</li>
                            <li>Controls the next step</li>
                            <li>Holds price with conviction</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* ── 2. Authority Gap ── */}
            <div className="ql-card" style={{ borderColor: "rgba(167,139,250,0.3)" }}>
                <h3 style={{ color: "#a78bfa" }}>⚡ The Authority Gap</h3>
                <p>
                    High-ticket buyers only say yes when they feel they&rsquo;re talking to someone at a <em>higher level</em> of
                    knowledge than themselves. This is the Authority Gap&mdash;and you can manufacture it from the first sentence.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginTop: "20px" }}>
                    {[
                        { title: "Control the Agenda", desc: "Start every call: \"Here's how I'd like to use our time today...\" You set the frame, they follow it." },
                        { title: "Diagnose Before Prescribing", desc: "Never suggest a solution before you've asked 3+ diagnostic questions. Doctors don't prescribe before the exam." },
                        { title: "Name the Problem Precisely", desc: "\"The issue I'm seeing is your booking flow dies on mobile, which is where 70% of your traffic is coming from.\" Specificity = authority." },
                        { title: "Own the Silence", desc: "After asking a hard question, go quiet. Let them fill the silence. Uncomfortable pauses don't hurt consultants — they hurt salesmen." },
                    ].map((item) => (
                        <div
                            key={item.title}
                            style={{
                                background: "rgba(167,139,250,0.08)",
                                border: "1px solid rgba(167,139,250,0.2)",
                                borderRadius: "10px",
                                padding: "16px",
                            }}
                        >
                            <p style={{ color: "#a78bfa", fontWeight: 700, fontSize: "14px", marginBottom: "8px" }}>{item.title}</p>
                            <p style={{ color: "#94a3b8", fontSize: "13px", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── 3. Detachment & Abundance ── */}
            <div className="ql-card" style={{ borderColor: "rgba(251,191,36,0.3)" }}>
                <h3 style={{ color: "#fbbf24" }}>🔥 Detachment &amp; Abundance Mindset</h3>
                <p>
                    Commission breath kills more deals than bad pitches. The moment a prospect senses you <em>need</em> this deal,
                    they feel it. Power shifts. Price resistance spikes. Ghosting begins.
                </p>
                <div className="ql-tip-box" style={{ borderColor: "rgba(251,191,36,0.3)", background: "rgba(251,191,36,0.05)", marginTop: "20px" }}>
                    <h4 style={{ color: "#fbbf24" }}>🧠 The Mindset Shift</h4>
                    <p style={{ marginBottom: "12px" }}>
                        <strong>They are not interviewing you.</strong> You are qualifying them. Not every business deserves your
                        expertise. Before you get on a call, internalize this: &ldquo;If this doesn&rsquo;t work out, the next call will.&rdquo;
                    </p>
                    <p className="mb-0">
                        Your pipeline should be full enough that losing a single deal doesn&rsquo;t matter. If it&rsquo;s not — that&rsquo;s a
                        prospecting problem, not a closing problem.
                    </p>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "12px", marginTop: "20px" }}>
                    {[
                        { phrase: `"I'm not sure this is the right fit."`, why: "Creates scarcity. They now want to qualify themselves to you." },
                        { phrase: `"We're selective about who we work with."`, why: "Positions you as a sought-after expert, not a vendor." },
                        { phrase: `"You don't have to decide now."`, why: "Removes pressure and paradoxically speeds up the decision." },
                    ].map((item) => (
                        <div
                            key={item.phrase}
                            style={{
                                background: "rgba(251,191,36,0.05)",
                                border: "1px solid rgba(251,191,36,0.15)",
                                borderRadius: "10px",
                                padding: "14px",
                            }}
                        >
                            <p style={{ color: "#fbbf24", fontStyle: "italic", fontSize: "13px", fontWeight: 600, marginBottom: "8px" }}>{item.phrase}</p>
                            <p style={{ color: "#64748b", fontSize: "12px", lineHeight: 1.6, margin: 0 }}>{item.why}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── 4. Knowing Your Weapon ── */}
            <div className="ql-card">
                <h3>🎯 Knowing Your Weapon (Absolute Conviction)</h3>
                <p>
                    You must have zero doubt that what QuantLab builds will transform their business.
                    Conviction isn&rsquo;t manufactured&mdash;it comes from understanding exactly what we deliver:
                </p>
                <div style={{ marginTop: "16px", display: "grid", gap: "12px" }}>
                    {[
                        { icon: "💰", label: "Revenue Capture", desc: "Funnels and landing pages that turn traffic into booked calls — not brochure sites." },
                        { icon: "⚙️", label: "Operational Automation", desc: "Internal dashboards, automated invoicing, CRM syncing. We give back hours every week." },
                        { icon: "🏆", label: "Market Authority", desc: "Premium aesthetics that let them charge 30-50% more than their competitors charge." },
                        { icon: "📈", label: "Data & Analytics", desc: "Real dashboards with real numbers. No more guessing what's working or where leads die." },
                    ].map((item) => (
                        <div
                            key={item.label}
                            style={{
                                display: "flex",
                                gap: "16px",
                                padding: "14px",
                                background: "rgba(255,255,255,0.03)",
                                borderRadius: "10px",
                                border: "1px solid rgba(255,255,255,0.05)",
                                alignItems: "flex-start",
                            }}
                        >
                            <span style={{ fontSize: "24px", flexShrink: 0 }}>{item.icon}</span>
                            <div>
                                <p style={{ color: "#e2e8f0", fontWeight: 700, marginBottom: "4px", fontSize: "14px" }}>{item.label}</p>
                                <p style={{ color: "#64748b", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── 5. Reframe Matrix ── */}
            <div className="ql-card" style={{ borderColor: "rgba(34,211,238,0.2)" }}>
                <h3>🃏 The Reframe Matrix</h3>
                <p style={{ marginBottom: "20px" }}>
                    Every top closer has a mental library of instant reframes. The difference between a $3k close and a $15k close
                    is usually a single sentence. Click each card to reveal the elite response.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                    {reframeMatrix.map((item, i) => (
                        <ReframeCard key={i} item={item} />
                    ))}
                </div>
            </div>

            {/* ── 6. Pre-Call Ritual ── */}
            <div className="ql-card" style={{ borderColor: "rgba(52,211,153,0.3)" }}>
                <h3 style={{ color: "#34d399" }}>📋 The Elite Pre-Call Ritual</h3>
                <p style={{ marginBottom: "20px" }}>
                    Never enter a conversation blind. Top closers spend 7–10 minutes on research before every call. Work through
                    this checklist — it takes under 10 minutes and changes everything.
                </p>
                <div>
                    {preCallChecklist.map((item, i) => (
                        <ChecklistItem key={i} item={item} />
                    ))}
                </div>
                <div className="ql-tip-box" style={{ marginTop: "20px", borderColor: "rgba(52,211,153,0.3)", background: "rgba(52,211,153,0.05)" }}>
                    <h4 style={{ color: "#34d399" }}>🚀 Pro Move</h4>
                    <p className="mb-0">
                        Use <strong>BuiltWith.com</strong> or the <strong>Wappalyzer Chrome extension</strong> to scan their
                        current tech stack in 30 seconds. If they&rsquo;re on Wix or GoDaddy builder, you know their ceiling and
                        their pain. Lead with: <em>&ldquo;I noticed you&rsquo;re currently on [platform] — that&rsquo;s actually one of the things I wanted to walk you through today.&rdquo;</em>
                    </p>
                </div>
            </div>

            {/* ── 7. Tech-to-Revenue Translator ── */}
            <div className="ql-card" style={{ borderColor: "rgba(167,139,250,0.3)" }}>
                <h3>💬 Tech → Revenue Translator</h3>
                <p style={{ marginBottom: "20px" }}>
                    Never let tech jargon kill your deal. Every feature must be translated into a business outcome.
                    Use these exact phrasings when bridging the gap.
                </p>
                {techTranslations.map((category) => (
                    <div key={category.category} style={{ marginBottom: "24px" }}>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginBottom: "12px",
                                paddingBottom: "8px",
                                borderBottom: `1px solid ${colorMap[category.color]}30`,
                            }}
                        >
                            <div
                                style={{
                                    width: "8px",
                                    height: "8px",
                                    borderRadius: "50%",
                                    background: colorMap[category.color],
                                    boxShadow: `0 0 8px ${colorMap[category.color]}`,
                                }}
                            />
                            <span
                                style={{
                                    color: colorMap[category.color],
                                    fontSize: "11px",
                                    letterSpacing: "2px",
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                }}
                            >
                                {category.category}
                            </span>
                        </div>
                        <div style={{ display: "grid", gap: "10px" }}>
                            {category.items.map((item, i) => (
                                <div
                                    key={i}
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr auto 1fr",
                                        gap: "12px",
                                        alignItems: "center",
                                        background: "rgba(0,0,0,0.2)",
                                        borderRadius: "10px",
                                        padding: "14px 16px",
                                        border: "1px solid rgba(255,255,255,0.04)",
                                    }}
                                >
                                    <div>
                                        <p style={{ fontSize: "10px", color: "#475569", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>Don&rsquo;t say</p>
                                        <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0 }}>{item.tech}</p>
                                    </div>
                                    <span style={{ color: colorMap[category.color], fontSize: "20px", opacity: 0.6 }}>→</span>
                                    <div>
                                        <p style={{ fontSize: "10px", color: "#475569", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "4px" }}>Say this</p>
                                        <p style={{ color: colorMap[category.color], fontSize: "13px", margin: 0, fontStyle: "italic" }}>{item.biz}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
