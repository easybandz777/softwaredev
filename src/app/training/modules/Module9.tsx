"use client";
import React, { useState } from "react";

const cadenceSteps = [
    {
        day: "Day 1",
        label: "The Immediate Value-Add",
        type: "LinkedIn / Email",
        color: "#22d3ee",
        script: `"Hey [Name], really enjoyed our conversation earlier. I was thinking about the intake problem you described and wanted to share something relevant — I put together a quick 2-min screen recording showing exactly how we'd handle that for your setup. Here's the link: [Loom link]. No obligation — just wanted to give you something concrete to look at."`,
        why: "Shows you were listening. Demonstrates competence. Gives them a reason to respond.",
    },
    {
        day: "Day 3",
        label: "The Specific Follow-Through",
        type: "Email",
        color: "#22d3ee",
        script: `"Hey [Name], wanted to follow up on the Loom I sent. I did some digging on your current setup — I ran a quick speed test on your site and it's loading at 8.4 seconds on mobile. For context, anything over 3 seconds loses 53% of users before they ever see your page. Happy to show you what a fixed version looks like. Worth 15 minutes this week?"`,
        why: "Specific data creates urgency. You gave them something new — not just 'checking in.'",
    },
    {
        day: "Day 5",
        label: "The Social Proof Drop",
        type: "LinkedIn Message",
        color: "#a78bfa",
        script: `"Hey [Name] — just wrapped up a project for a [similar industry] business in [City]. They were in the exact same spot you described — 6-hour lead response time. We cut it to under 60 seconds and they signed 4 more clients in month one. Thought you'd find that relevant. Still worth a quick chat?"`,
        why: "Proof from a relatable peer removes risk perception. It's not you saying it — it's the result saying it.",
    },
    {
        day: "Day 8",
        label: "The Direct Honesty Check",
        type: "Email",
        color: "#a78bfa",
        script: `"Hey [Name], typically when I don't hear back at this stage it means one of two things: either the timeline shifted, or the investment wasn't quite right. Either way, that's completely fine — I just don't want to keep following up if it's not a fit. Are we pausing on this for now, or is there a better time to revisit?"`,
        why: "Honesty disarms. It makes them want to engage because most reps never ask this directly.",
    },
    {
        day: "Day 12",
        label: "The New Angle",
        type: "Email / Call",
        color: "#f59e0b",
        script: `"Hey [Name], I know we've been going back and forth. I wanted to reach out with a different angle — instead of a full build, what if we started with just the intake automation piece? We could solve the lead response problem in about 3 weeks for a fraction of the full investment. Would that be an easier entry point to test us out?"`,
        why: "Offering a smaller scope removes the biggest barrier — cost and commitment.",
    },
    {
        day: "Day 18",
        label: "The Breakup Message",
        type: "Email / LinkedIn",
        color: "#64748b",
        script: `"Hey [Name], haven't heard back so I'm going to assume the timing just isn't right this quarter. I'll close out your file on our end. No hard feelings at all — if fixing the [specific pain they mentioned] comes back to the top of the list later this year, reach out and we'll pick up right where we left off. Best of luck."`,
        why: "This message gets more replies than any other. The permission to say 'no' makes people say 'wait, actually...' Half the time.",
    },
];

const reengagementTriggers = [
    { trigger: "They post a job ad for an admin or marketing role", action: "Their pain is growing. Reach out: 'I saw you're hiring — that's usually a sign of the exact problem we solve. Want to compare the cost of a hire vs. our system?'" },
    { trigger: "They get a bad Google review", action: "Your hook: 'Reputation management is 50% prevention — if you had an automated feedback loop in place, this might have been caught first.'" },
    { trigger: "A competitor of theirs launches a new site or brand", action: "Forward a screenshot: 'Noticed [Competitor] just upgraded their digital presence. Now's a great time to talk about matching that.'" },
    { trigger: "They hit a business milestone (anniversary, expansion, rebranding)", action: "Congrats + 'Growth moments are exactly when the right infrastructure matters most. Still worth a quick catch-up?'" },
    { trigger: "It's been 60+ days since last contact", action: "The Re-Intro: 'Hey [Name] — it's been a few months. Just wanted to check in — has the [specific problem] gotten any better or is it still something you're working around?'" },
];

const doNotSayList = [
    { phrase: '"Just checking in"', why: "Signals zero value. You have nothing new to offer and you know it. The prospect reads it as desperation." },
    { phrase: '"Did you get a chance to look at the proposal?"', why: "Puts you in a supplicant position. You're asking them to do you a favor." },
    { phrase: '"I wanted to touch base"', why: "Means nothing. Replace it with a specific reason for the message every single time." },
    { phrase: '"Let me know if you have any questions"', why: "Passive. Ends the conversation instead of advancing it. Always end with a direct question or CTA." },
    { phrase: '"I know you\'re probably busy"', why: "Pre-apologizes for your own existence. Signals low self-worth. Everyone is busy — never acknowledge it." },
];

export default function Module9() {
    const [expanded, setExpanded] = useState<number | null>(0);

    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Module 09</span>
                <h2 className="ql-module-title">The Follow-Up System</h2>
                <p style={{ color: "#64748b", marginTop: "8px", fontSize: "15px" }}>
                    80% of deals close after 5+ touchpoints. 90% of reps stop after 1–2. Follow-up is where money is made.
                </p>
            </div>

            {/* The philosophy */}
            <div className="ql-card" style={{ borderColor: "rgba(167,139,250,0.3)" }}>
                <h3 style={{ color: "#a78bfa" }}>💡 The Core Philosophy</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginTop: "16px" }}>
                    <div style={{ padding: "18px", borderRadius: "10px", background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}>
                        <p style={{ color: "#ef4444", fontWeight: 700, fontSize: "13px", marginBottom: "10px", letterSpacing: "0.05em" }}>❌ HOW AMATEURS FOLLOW UP</p>
                        <ul style={{ color: "#94a3b8", marginLeft: "18px", listStyleType: "disc", lineHeight: 2, fontSize: "13px" }}>
                            <li>Send one email and wait</li>
                            <li>&ldquo;Just checking in&rdquo; after silence</li>
                            <li>Ghost if no response after 2 tries</li>
                            <li>No reason for contact each time</li>
                            <li>Panic and discount after a week</li>
                        </ul>
                    </div>
                    <div style={{ padding: "18px", borderRadius: "10px", background: "rgba(34,211,238,0.05)", border: "1px solid rgba(34,211,238,0.15)" }}>
                        <p style={{ color: "#22d3ee", fontWeight: 700, fontSize: "13px", marginBottom: "10px", letterSpacing: "0.05em" }}>✅ HOW PROS FOLLOW UP</p>
                        <ul style={{ color: "#94a3b8", marginLeft: "18px", listStyleType: "disc", lineHeight: 2, fontSize: "13px" }}>
                            <li>Every touchpoint adds new value</li>
                            <li>Pre-planned 18-day cadence</li>
                            <li>Mix of channels (email, LinkedIn, call)</li>
                            <li>End with a direct question every time</li>
                            <li>The &ldquo;breakup&rdquo; message as a tool</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* The Cadence */}
            <div className="ql-card">
                <h3>📅 The 18-Day Follow-Up Cadence</h3>
                <p>
                    This is a <strong>complete, pre-planned sequence</strong> for any prospect who has gone quiet after
                    initial contact. Every message has a specific strategic purpose — never send &ldquo;just checking in.&rdquo;
                </p>
                <div style={{ display: "grid", gap: "6px", marginTop: "24px" }}>
                    {cadenceSteps.map((step, i) => {
                        const isOpen = expanded === i;
                        return (
                            <div
                                key={i}
                                style={{
                                    borderRadius: "12px",
                                    border: `1px solid ${isOpen ? step.color + "40" : "rgba(255,255,255,0.06)"}`,
                                    background: isOpen ? `${step.color}06` : "rgba(255,255,255,0.02)",
                                    overflow: "hidden",
                                    transition: "all 0.2s ease",
                                }}
                            >
                                <button
                                    onClick={() => setExpanded(isOpen ? null : i)}
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
                                    <span
                                        style={{
                                            flexShrink: 0,
                                            padding: "4px 10px",
                                            borderRadius: "20px",
                                            background: `${step.color}15`,
                                            color: step.color,
                                            fontSize: "11px",
                                            fontWeight: 700,
                                            letterSpacing: "0.05em",
                                            minWidth: "58px",
                                            textAlign: "center",
                                        }}
                                    >
                                        {step.day}
                                    </span>
                                    <span style={{ flex: 1, color: "#e2e8f0", fontSize: "14px", fontWeight: 600 }}>{step.label}</span>
                                    <span style={{ color: "#475569", fontSize: "12px", flexShrink: 0 }}>{step.type}</span>
                                    <span style={{ color: isOpen ? step.color : "#475569", fontSize: "16px", flexShrink: 0 }}>
                                        {isOpen ? "▲" : "▼"}
                                    </span>
                                </button>
                                {isOpen && (
                                    <div style={{ padding: "0 18px 20px" }}>
                                        <div className="ql-script-box" style={{ marginTop: 0 }}>{step.script}</div>
                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "10px",
                                                alignItems: "flex-start",
                                                padding: "12px 14px",
                                                borderRadius: "8px",
                                                background: "rgba(167,139,250,0.06)",
                                                border: "1px solid rgba(167,139,250,0.15)",
                                            }}
                                        >
                                            <span style={{ color: "#a78bfa", flexShrink: 0, fontWeight: 700 }}>Why it works:</span>
                                            <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>{step.why}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Do Not Say */}
            <div className="ql-card" style={{ borderColor: "rgba(239,68,68,0.2)" }}>
                <h3>🚫 The Banned Phrases List</h3>
                <p>These phrases are surgically removed from your vocabulary starting today. They kill momentum, signal weakness, and give the prospect every reason to stay silent.</p>
                <div style={{ display: "grid", gap: "10px", marginTop: "20px" }}>
                    {doNotSayList.map((item, i) => (
                        <div
                            key={i}
                            style={{
                                display: "flex",
                                gap: "14px",
                                alignItems: "flex-start",
                                padding: "14px 16px",
                                borderRadius: "10px",
                                background: "rgba(239,68,68,0.04)",
                                border: "1px solid rgba(239,68,68,0.1)",
                            }}
                        >
                            <span style={{ color: "#ef4444", fontWeight: 900, fontSize: "16px", flexShrink: 0, lineHeight: 1.4 }}>✗</span>
                            <div>
                                <p style={{ color: "#ef4444", fontWeight: 700, fontSize: "14px", marginBottom: "4px" }}>{item.phrase}</p>
                                <p style={{ color: "#64748b", fontSize: "13px", margin: 0, lineHeight: 1.6 }}>{item.why}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Re-engagement triggers */}
            <div className="ql-card" style={{ borderColor: "rgba(251,191,36,0.2)" }}>
                <h3 style={{ color: "#fbbf24" }}>⚡ Re-Engagement Triggers</h3>
                <p>
                    Some prospects go cold and come back hot. These are the market signals to watch for — each one is a
                    legitimate reason to reach out without feeling like you&rsquo;re being pushy.
                </p>
                <div style={{ display: "grid", gap: "12px", marginTop: "20px" }}>
                    {reengagementTriggers.map((item, i) => (
                        <div
                            key={i}
                            style={{
                                padding: "16px",
                                borderRadius: "10px",
                                background: "rgba(251,191,36,0.04)",
                                border: "1px solid rgba(251,191,36,0.12)",
                            }}
                        >
                            <p style={{ color: "#fbbf24", fontWeight: 700, fontSize: "13px", marginBottom: "8px" }}>🔔 {item.trigger}</p>
                            <p style={{ color: "#94a3b8", fontSize: "13px", margin: 0, lineHeight: 1.7 }}>
                                <strong style={{ color: "#e2e8f0" }}>Your move:</strong> {item.action}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ql-tip-box">
                <h4>💡 The Golden Rule of Follow-Up</h4>
                <p className="mb-0">
                    Every follow-up message must answer the prospect&rsquo;s unspoken question: <strong>&ldquo;Why is this relevant to me, right now?&rdquo;</strong>{" "}
                    If your message doesn&rsquo;t have a clear, new reason to reach out — don&rsquo;t send it.
                    Add value first, then ask. The rep who consistently delivers value between asks is never annoying — they&rsquo;re anticipated.
                </p>
            </div>
        </div>
    );
}
