"use client";
import React, { useState } from "react";

const proofAssets = [
    {
        label: "Speed Test (Live, On-Call)",
        icon: "⚡",
        color: "#22d3ee",
        how: "Pull up PageSpeed Insights (pagespeed.web.dev) while on the call. Type their URL in. Share your screen or read the score out loud.",
        script: `"Let me show you something real quick while we're on the call — [their URL]. Okay, so it's scoring a 38 out of 100 on mobile performance. For context, Google considers anything under 50 'poor' and actively penalizes it in search rankings. Ours come in at 92–98. That gap is traffic and trust you're losing right now."`,
        power: "A live, verifiable number is more credible than any case study. They can't argue with a tool showing their own data.",
    },
    {
        label: "Competitor Analysis (Same Call)",
        icon: "🔭",
        color: "#a78bfa",
        how: "Identify their top local competitor. Run both URLs through PageSpeed or Similarweb. Compare them side by side.",
        script: `"I just ran your top competitor — [Competitor Name] — and they're scoring a 78 on mobile performance. You're at 38. That gap means they're ranking higher than you on every relevant search. That's not a website problem — that's a market position problem."`,
        power: "Competitors make it personal. Abstract problems become urgent when there's a rival winning because of them.",
    },
    {
        label: "Case Study Drop (Verbal)",
        icon: "📋",
        color: "#34d399",
        how: "Match your case study to their industry and problem. Give specific numbers — never vague claims. Always connect the result to their specific pain point.",
        script: `"We just finished a build for a [similar business type] in [similar city]. They had the exact same challenge — leads coming in but not converting. Six weeks after launch, their form submissions went from 4 per week to 23. The owner told me he almost can't take on new clients fast enough. You're in the same spot they were."`,
        power: "Prospects borrow confidence from peers. A relatable story is 10x more believable than a feature list.",
    },
    {
        label: "The Before/After Reveal",
        icon: "🖥️",
        color: "#fbbf24",
        how: "Have screen recordings or screenshots of before-and-after builds. Show the old version, then the new version. Say nothing for 3 seconds and let it land.",
        script: `"This is what their site looked like when they came to us — [pause] — and this is what it looks like now. But more importantly, here are the metrics 90 days after launch: [lead count, conversion rate, speed score]. What we build isn't just prettier — it performs."`,
        power: "Visual before/after is the highest-converting proof format in existence. Show it, shut up, let it breathe.",
    },
    {
        label: "Testimonial Reference (Specific)",
        icon: "🗣️",
        color: "#f472b6",
        how: "Reference a real client by first name and industry (not full name if privacy is a concern). Make it conversational, not scripted.",
        script: `"Actually — I'll pass along a quick note from one of our clients, a roofing contractor in Phoenix. He said, and I'm paraphrasing: 'I was spending $1,800 a month on HomeAdvisor leads and competing with 15 other contractors on price. Now I get 3x the leads directly and I'm the only one they call.' I'm happy to make an intro if you want to hear it from him directly."`,
        power: "Offering a direct intro is the ultimate trust signal. Very few reps do it — which is exactly why it works.",
    },
];

const authorityBuilders = [
    {
        moment: "The Opening Frame",
        example: `"Before I get into anything — I spent about 15 minutes on your site and your Google profile earlier. I want to share a few specific things I noticed, because I think they're directly connected to what you're probably experiencing on the revenue side."`,
        why: "Pre-call research demonstrates you are not a generic vendor. It signals investment and expertise before you've said a word about QuantLab.",
    },
    {
        moment: "After They Share a Pain Point",
        example: `"That's almost exactly what a physical therapy clinic in Austin described to us. Their manual intake process was eating 11 hours a week. After we automated it, they reallocated that time to marketing and added $22k/month in new revenue within 90 days."`,
        why: "Real stories land right after the prospect expresses pain — the emotional receptivity is highest at that exact moment.",
    },
    {
        moment: "When They Ask 'Why QuantLab'",
        example: `"Honestly, the simplest answer is: we only build high-performance custom systems — we don't do templates or page-builders. Our clients measure success in revenue outcomes, not deliverables. We're very selective about who we work with because we only want to take on builds we know will perform. That's why I wanted to talk to you first — to make sure this is actually the right fit."`,
        why: "Turning 'why you?' into a qualification is a power move. You're not selling — you're vetting. That creates desire.",
    },
    {
        moment: "Handling 'I'm Not Ready Yet'",
        example: `"I hear you — timing matters. The one thing I'd ask you to sit with: your current setup is costing you [X amount] every month it's not fixed. When you're ready in 3 months, it will have cost you [3x]. My calendar is open — the build doesn't need to start today, but let's at least lock in what the solution looks like so you have something concrete to make a decision on."`,
        why: "You've already built the COI. Now you make delay feel expensive without creating pressure. They feel in control but the math works against waiting.",
    },
];

const referenceBuilds = [
    {
        type: "Law Firm",
        location: "Phoenix, AZ",
        problem: "6-hour lead response time, manual intake, losing PI cases to competitors",
        result: "Automated intake with 60-second response → Cut response time by 98%, 3 additional cases signed in Month 1",
        color: "#22d3ee",
    },
    {
        type: "Med Spa & Aesthetics Clinic",
        location: "Dallas, TX",
        problem: "Instagram traffic not converting, no-shows killing daily revenue, zero Google presence",
        result: "New booking flow → No-show rate dropped 62%, Google Page 1 for 3 target keywords in 90 days",
        color: "#a78bfa",
    },
    {
        type: "HVAC Contractor",
        location: "Charlotte, NC",
        problem: "$1,800/month on HomeAdvisor, competing on price with 12 other contractors",
        result: "SEO + review automation → Stopped all paid lead gen, 4x organic leads, 40% margin improvement",
        color: "#34d399",
    },
    {
        type: "Fitness Studio (Boutique CrossFit)",
        location: "Denver, CO",
        problem: "Trial-to-member conversion at 22%, no referral system, seasonal churn in March",
        result: "Automated trial follow-up + referral portal → Conversion hit 61%, 33 referral members Month 1",
        color: "#f472b6",
    },
    {
        type: "Real Estate Agent (Independent)",
        location: "Miami, FL",
        problem: "Relying entirely on Zillow leads at $400+/lead, no owned digital presence",
        result: "Personal brand site + IDX + drip nurture → First organic lead in Week 3, Zillow spend eliminated in Month 4",
        color: "#fbbf24",
    },
];

export default function BonusM() {
    const [activeAsset, setActiveAsset] = useState<number | null>(null);

    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Bonus Module M</span>
                <h2 className="ql-module-title">Portfolio & Social Proof</h2>
                <p style={{ color: "#64748b", marginTop: "8px", fontSize: "15px" }}>
                    Credibility closes deals. A rep who can point to proof is 3x more effective than one who can&rsquo;t. Know how to use QuantLab&rsquo;s record on demand.
                </p>
            </div>

            {/* Proof Assets */}
            <div className="ql-card">
                <h3>⚡ Your Proof Arsenal — Use Live, On the Call</h3>
                <p>
                    The most powerful proof isn&rsquo;t in a PDF — it&rsquo;s <strong>live, real-time, and specific to the prospect you&rsquo;re talking to</strong>.
                    Click each asset to see how to use it.
                </p>
                <div style={{ display: "grid", gap: "8px", marginTop: "24px" }}>
                    {proofAssets.map((asset, i) => {
                        const isOpen = activeAsset === i;
                        return (
                            <div
                                key={i}
                                style={{
                                    borderRadius: "12px",
                                    border: `1px solid ${isOpen ? asset.color + "40" : "rgba(255,255,255,0.06)"}`,
                                    background: isOpen ? `${asset.color}06` : "rgba(255,255,255,0.02)",
                                    overflow: "hidden",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                <button
                                    onClick={() => setActiveAsset(isOpen ? null : i)}
                                    style={{
                                        width: "100%",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "14px",
                                        padding: "14px 18px",
                                        background: "transparent",
                                        border: "none",
                                        cursor: "pointer",
                                        textAlign: "left",
                                    }}
                                >
                                    <span style={{ fontSize: "22px", flexShrink: 0 }}>{asset.icon}</span>
                                    <span style={{ flex: 1, color: "#e2e8f0", fontSize: "14px", fontWeight: 600 }}>{asset.label}</span>
                                    <span style={{ color: isOpen ? asset.color : "#475569", fontSize: "16px", flexShrink: 0 }}>
                                        {isOpen ? "▲" : "▼"}
                                    </span>
                                </button>
                                {isOpen && (
                                    <div style={{ padding: "0 18px 20px" }}>
                                        <div
                                            style={{
                                                padding: "12px 14px",
                                                borderRadius: "8px",
                                                background: "rgba(255,255,255,0.03)",
                                                border: "1px solid rgba(255,255,255,0.05)",
                                                marginBottom: "12px",
                                            }}
                                        >
                                            <p style={{ color: "#64748b", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px" }}>How to use it</p>
                                            <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0, lineHeight: 1.7 }}>{asset.how}</p>
                                        </div>
                                        <div className="ql-script-box" style={{ marginTop: 0 }}>{asset.script}</div>
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "10px",
                                                alignItems: "flex-start",
                                                padding: "12px 14px",
                                                borderRadius: "8px",
                                                background: `${asset.color}08`,
                                                border: `1px solid ${asset.color}20`,
                                            }}
                                        >
                                            <span style={{ color: asset.color, flexShrink: 0, fontWeight: 700, fontSize: "13px" }}>Why it works:</span>
                                            <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>{asset.power}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Reference Builds */}
            <div className="ql-card" style={{ borderColor: "rgba(34,211,238,0.2)" }}>
                <h3>📂 Reference Build Library</h3>
                <p>
                    Memorize 2–3 of these. Match the one closest to your prospect&rsquo;s industry before the call.
                    Specific outcomes beat vague claims every time.
                </p>
                <div style={{ display: "grid", gap: "12px", marginTop: "20px" }}>
                    {referenceBuilds.map((build, i) => (
                        <div
                            key={i}
                            style={{
                                padding: "18px",
                                borderRadius: "12px",
                                background: `${build.color}05`,
                                border: `1px solid ${build.color}20`,
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                                <p style={{ color: build.color, fontWeight: 700, fontSize: "15px", margin: 0 }}>{build.type}</p>
                                <span style={{ color: "#475569", fontSize: "12px" }}>— {build.location}</span>
                            </div>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                                <div style={{ padding: "10px 12px", borderRadius: "8px", background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.1)" }}>
                                    <p style={{ color: "#ef4444", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px" }}>The Problem</p>
                                    <p style={{ color: "#94a3b8", fontSize: "12px", margin: 0, lineHeight: 1.6 }}>{build.problem}</p>
                                </div>
                                <div style={{ padding: "10px 12px", borderRadius: "8px", background: `${build.color}06`, border: `1px solid ${build.color}20` }}>
                                    <p style={{ color: build.color, fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "6px" }}>The Result</p>
                                    <p style={{ color: "#94a3b8", fontSize: "12px", margin: 0, lineHeight: 1.6 }}>{build.result}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Authority Building Moments */}
            <div className="ql-card">
                <h3>🎯 Authority-Building Moments in a Call</h3>
                <p>These are the specific moments in a conversation where dropping proof will have the maximum impact.</p>
                <div style={{ display: "grid", gap: "16px", marginTop: "20px" }}>
                    {authorityBuilders.map((item, i) => (
                        <div key={i} style={{ padding: "18px", borderRadius: "12px", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}>
                            <p style={{ color: "#22d3ee", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "10px" }}>
                                {item.moment}
                            </p>
                            <div className="ql-script-box" style={{ marginTop: 0, marginBottom: "12px" }}>{item.example}</div>
                            <p style={{ color: "#64748b", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>
                                <strong style={{ color: "#475569" }}>Why:</strong> {item.why}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ql-tip-box">
                <h4>💡 Build Your Own Proof File</h4>
                <p className="mb-0">
                    After every client win, document it in your own words: the problem, the solution, the specific numbers.
                    Over time you build a personal proof library that makes every conversation feel more confident.
                    The rep with <strong>10 real stories</strong> is unstoppable. Start collecting after your first close.
                </p>
            </div>
        </div>
    );
}
