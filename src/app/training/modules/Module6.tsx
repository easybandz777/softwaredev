'use client';
import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

interface Props {
    onStartTest: () => void;
}

const closingObjections = [
    {
        obj: '"It\'s too expensive."',
        rootCause: 'Insufficient value built during discovery',
        color: '#ef4444',
        script: '"I understand it\'s an investment. But we just agreed your current setup is costing you $5,000 a month in lost deals. This system pays for itself in exactly 45 days. Why delay fixing a leak in your boat?"',
        tactics: ['Reference the COI they agreed to in discovery', 'Never defend the price — redirect to the cost of inaction', 'If they blink, down-sell scope — never reduce price'],
    },
    {
        obj: '"We use WordPress/Wix, it\'s fine."',
        rootCause: 'They don\'t see the ceiling their current stack creates',
        color: '#f59e0b',
        script: '"If you want to stay a small business, Wix is fine. If you want to scale to 8 figures, you need custom infrastructure. We build the digital assets that allow you to scale without breaking. Are you ready to scale?"',
        tactics: ['Draw the line between "functional" and "scalable"', 'Show specific limitations their platform hits at their revenue level', 'Ask: "Is your current site generating leads, or is it a brochure?"'],
    },
    {
        obj: '"My nephew/buddy handles our website."',
        rootCause: 'Familiarity and comfort — not quality or capability',
        color: '#a78bfa',
        script: '"That\'s great for getting started. But your business is doing $2M a year now. If something breaks on a Tuesday at 2 PM, is your nephew dropping his college classes to fix your lead funnel? We provide enterprise-grade reliability."',
        tactics: ['Don\'t insult the nephew — acknowledge the value of getting started', 'Frame the conversation as growth: "You\'ve outgrown that setup"', 'Introduce the concept of business risk: uptime, speed, security'],
    },
    {
        obj: '"We need to think about it."',
        rootCause: 'Unresolved concern they haven\'t voiced',
        color: '#22d3ee',
        script: '"Totally fair. Can I ask — what specifically do you need to think through? Is it the pricing structure, the timeline, or something about the approach? I\'d rather address it now while I\'m here than leave you wondering."',
        tactics: ['Never accept "think about it" at face value — dig deeper', '"Think about it" almost always means there\'s an unspoken objection', 'If they genuinely need time, set a SPECIFIC callback: date + time'],
    },
];

const priceNegotiationScenarios = [
    {
        label: '"That\'s more than we wanted to spend"',
        color: '#22d3ee',
        script: '"I hear you. Let me ask — what did you have budgeted? [pause] Okay. The reason there\'s a gap is we\'re not building a website, we\'re building a revenue system. At your average project value of $X, this system needs to bring in just [Y] additional clients per year to pay for itself entirely. Does that change the framing?"',
        principle: 'Reframe from cost to investment. Get them to calculate their own payback period.',
    },
    {
        label: 'They want to negotiate down',
        color: '#a78bfa',
        script: '"I want to find something that works for you. Rather than reducing quality on the build, let\'s pull back the scope. If we remove [Feature X] and [Feature Y] from Phase 1, we can hit close to your number and add those back in Month 3 once the ROI is proven. Would that structure work?"',
        principle: 'Never reduce price. Only reduce scope. Reducing price trains them to negotiate everything forever.',
    },
    {
        label: 'They go silent after hearing the price',
        color: '#f59e0b',
        script: '[Say nothing. Let the silence breathe. Count to 10 in your head. Whoever speaks first loses.]\n\nIf they still say nothing after 15+ seconds:\n\n"What\'s going through your mind right now?"',
        principle: 'Silence is your weapon. The first person to speak after a price reveal loses negotiating leverage.',
    },
];

const ghostedFollowUp = [
    {
        day: 'Day 3', label: 'The Value Add', color: '#22d3ee',
        msg: '"Hey [Name], I was thinking about our chat regarding your intake funnel. I put together this quick 2-min loom video showing how an automated CRM sync would specifically look for your team. Here\'s the link: [Link]"',
        why: 'Adds value without asking for anything. Demonstrates you\'re still thinking about their problem.',
    },
    {
        day: 'Day 7', label: 'The Direct Question', color: '#a78bfa',
        msg: '"Hey [Name], typically when I don\'t hear back at this stage it means the timeline shifted or the pricing wasn\'t right. Are we completely pausing on upgrading the systems for now?"',
        why: 'Directness is disarming. Giving them permission to say "no" often gets them to say "wait, actually..."',
    },
    {
        day: 'Day 14', label: 'The Breakup', color: '#f59e0b',
        msg: '"Hey [Name], haven\'t heard from you so I\'m assuming fixing the intake bottleneck isn\'t a priority this quarter. I\'ll close out your file on our end. Let me know if you want to revisit this later this year. Best of luck."',
        why: 'Loss aversion kicks in. The prospect didn\'t feel urgency from your follow-ups, but losing you as an option creates it.',
    },
];

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

function ObjectionCard({ item }: { item: typeof closingObjections[0] }) {
    const [revealed, setRevealed] = useState(false);
    return (
        <div style={{
            borderRadius: '14px', overflow: 'hidden',
            border: `1px solid ${revealed ? `${item.color}25` : 'rgba(255,255,255,0.06)'}`,
            transition: 'all 0.25s ease',
            background: revealed ? `${item.color}04` : 'rgba(255,255,255,0.02)',
        }}>
            <div
                onClick={() => setRevealed(!revealed)}
                style={{
                    padding: '18px 20px', cursor: 'pointer',
                    display: 'flex', gap: '12px', alignItems: 'center',
                }}
            >
                <span style={{ fontSize: '1.2rem', flexShrink: 0 }}>🛡️</span>
                <div style={{ flex: 1 }}>
                    <p style={{ color: '#e2e8f0', fontWeight: 700, fontSize: '1rem', marginBottom: '2px' }}>{item.obj}</p>
                    <p style={{ color: '#64748b', fontSize: '0.78rem', margin: 0, fontStyle: 'italic' }}>Root cause: {item.rootCause}</p>
                </div>
                <span style={{
                    padding: '6px 14px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 700,
                    background: revealed ? `${item.color}15` : 'rgba(255,255,255,0.06)',
                    color: revealed ? item.color : '#64748b',
                    transition: 'all 0.2s ease', flexShrink: 0,
                }}>
                    {revealed ? 'REVEALED' : 'SHOW RESPONSE'}
                </span>
            </div>
            {revealed && (
                <div style={{ padding: '0 20px 20px', display: 'grid', gap: '12px' }}>
                    <div className="ql-script-box" style={{ margin: 0 }}>{item.script}</div>
                    <div style={{ padding: '14px', borderRadius: '10px', background: 'rgba(167,139,250,0.04)', border: '1px solid rgba(167,139,250,0.1)' }}>
                        <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a78bfa', marginBottom: '8px' }}>🎯 TACTICS</p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                            {item.tactics.map((t, i) => (
                                <li key={i} style={{ display: 'flex', gap: '8px', marginBottom: '5px', fontSize: '0.85rem', color: '#94a3b8' }}>
                                    <span style={{ color: '#a78bfa', flexShrink: 0 }}>→</span> {t}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

function SilenceTimer() {
    const [running, setRunning] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    useEffect(() => {
        if (running) {
            intervalRef.current = setInterval(() => setSeconds(s => s + 1), 1000);
        }
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, [running]);

    const reset = () => { setRunning(false); setSeconds(0); if (intervalRef.current) clearInterval(intervalRef.current); };
    const toggle = () => { if (running) { setRunning(false); } else { setSeconds(0); setRunning(true); } };

    const getColor = () => {
        if (seconds >= 10) return '#22c55e';
        if (seconds >= 5) return '#f59e0b';
        return '#22d3ee';
    };

    return (
        <div style={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px',
            padding: '30px', borderRadius: '16px',
            background: 'rgba(255,255,255,0.02)', border: `1px solid ${getColor()}20`,
            transition: 'all 0.3s ease',
        }}>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', textAlign: 'center', marginBottom: 0 }}>
                Practice the post-price silence. Start the timer, then <strong style={{ color: '#e2e8f0' }}>say nothing</strong>. 10 seconds is your target.
            </p>
            <div style={{
                fontSize: '4rem', fontWeight: 800, fontFamily: "'Space Grotesk', monospace",
                color: getColor(), transition: 'color 0.3s',
                textShadow: running ? `0 0 30px ${getColor()}40` : 'none',
            }}>
                {seconds}<span style={{ fontSize: '1.5rem', color: '#475569' }}>s</span>
            </div>
            {seconds >= 10 && !running && (
                <p style={{ color: '#22c55e', fontSize: '0.85rem', fontWeight: 600, margin: 0 }}>✓ You held the silence. Elite discipline.</p>
            )}
            <div style={{ display: 'flex', gap: '10px' }}>
                <button onClick={toggle} style={{
                    padding: '10px 24px', borderRadius: '10px', border: `1px solid ${running ? '#ef4444' : '#22d3ee'}30`,
                    background: running ? 'rgba(239,68,68,0.1)' : 'rgba(34,211,238,0.1)',
                    color: running ? '#ef4444' : '#22d3ee',
                    fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer',
                    transition: 'all 0.2s ease',
                }}>
                    {running ? '⏸ STOP' : '▶ START SILENCE'}
                </button>
                {seconds > 0 && !running && (
                    <button onClick={reset} style={{
                        padding: '10px 24px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.1)',
                        background: 'rgba(255,255,255,0.03)', color: '#64748b',
                        fontWeight: 600, fontSize: '0.85rem', cursor: 'pointer',
                    }}>
                        ↺ RESET
                    </button>
                )}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

export default function Module6({ onStartTest }: Props) {
    return (
        <div className="ql-training-content">

            <div className="ql-section-header">
                <span className="ql-module-number">Module 06</span>
                <h2 className="ql-module-title">Closing &amp; Follow-Up</h2>
            </div>

            <p className="mb-8">The close is not one magic sentence. It&rsquo;s the natural conclusion of a perfectly executed discovery, pitch, and objection sequence. If you did everything right, the close should feel like a <strong>formality, not a showdown</strong>.</p>

            {/* ── Last-Mile Objection Cards ── */}
            <div className="ql-card">
                <h3>🛡️ Last-Mile Objection Handling</h3>
                <p>These are the objections that surface right before the close. Click each one to reveal the response script and tactics.</p>
                <div style={{ display: 'grid', gap: '10px', marginTop: '16px' }}>
                    {closingObjections.map((item, i) => (
                        <ObjectionCard key={i} item={item} />
                    ))}
                </div>
            </div>

            {/* ── Price Negotiation Scenarios ── */}
            <div className="ql-card">
                <h3>💰 Price Negotiation Scenarios</h3>
                <p>Three scenarios you <em>will</em> encounter. Each has a script and the psychological principle behind it.</p>
                <div style={{ display: 'grid', gap: '14px', marginTop: '16px' }}>
                    {priceNegotiationScenarios.map((item, i) => (
                        <div key={i} style={{
                            padding: '20px', borderRadius: '14px',
                            background: `${item.color}04`, border: `1px solid ${item.color}15`,
                        }}>
                            <p style={{ color: item.color, fontWeight: 700, fontSize: '1rem', marginBottom: '12px' }}>{item.label}</p>
                            <div className="ql-script-box" style={{ margin: '0 0 12px 0', whiteSpace: 'pre-line' }}>{item.script}</div>
                            <div style={{ padding: '10px 14px', borderRadius: '8px', background: 'rgba(167,139,250,0.04)', border: '1px solid rgba(167,139,250,0.1)' }}>
                                <p style={{ color: '#a78bfa', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '2px' }}>🧠 PRINCIPLE</p>
                                <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>{item.principle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Silence Timer ── */}
            <div className="ql-card">
                <h3>⏱️ The Silence Exercise</h3>
                <p>After you ask for the business, <strong style={{ color: '#22d3ee' }}>the first person to speak loses</strong>. Practice holding silence for 10+ seconds.</p>
                <SilenceTimer />
            </div>

            {/* ── The Trial Close & The Ask ── */}
            <div className="ql-card">
                <h3>The Trial Close &amp; The Ask</h3>
                <p>Take their temperature before asking for the commitment.</p>
                <div className="ql-script-box">
                    <strong>The Trial Close:</strong> &ldquo;Based on everything we&rsquo;ve looked at today, do you feel confident that this new architecture will resolve the bottleneck in your sales team?&rdquo;
                </div>
                <div className="ql-script-box">
                    <strong>The Ask:</strong> &ldquo;Great. The next step is simple. We get the initial deposit processed, and we kick off the strategy boarding session next Tuesday. Does Visa or Mastercard work best for you?&rdquo;
                </div>
                <p style={{ textAlign: 'center', fontSize: '1.15rem', marginTop: '28px', color: '#22d3ee', fontWeight: 700 }}>
                    Once you ask for the business, shut up.<br />The first person to speak loses.
                </p>
            </div>

            {/* ── Ghosted Follow-Up Timeline ── */}
            <div className="ql-card" style={{ borderColor: 'rgba(34,211,238,0.15)' }}>
                <h3>📅 The 3-Step Ghosted Follow-Up</h3>
                <p>When they stop replying, do NOT send &ldquo;Just checking in.&rdquo; Use this sequence over 14 days.</p>
                <div style={{ display: 'grid', gap: '14px', marginTop: '20px' }}>
                    {ghostedFollowUp.map((item, i) => (
                        <div key={i} style={{
                            display: 'flex', gap: '16px', padding: '20px', borderRadius: '14px',
                            background: `${item.color}04`, border: `1px solid ${item.color}12`,
                        }}>
                            <div style={{
                                flexShrink: 0, width: '52px', height: '52px', borderRadius: '50%',
                                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                                background: `${item.color}12`, border: `1px solid ${item.color}25`,
                            }}>
                                <span style={{ fontSize: '0.6rem', fontWeight: 700, color: `${item.color}99`, textTransform: 'uppercase' }}>{item.day.split(' ')[0]}</span>
                                <span style={{ fontSize: '1.1rem', fontWeight: 800, color: item.color, lineHeight: 1 }}>{item.day.split(' ')[1]}</span>
                            </div>
                            <div style={{ flex: 1 }}>
                                <p style={{ color: item.color, fontWeight: 700, fontSize: '0.95rem', marginBottom: '6px' }}>{item.label}</p>
                                <p style={{ color: '#94a3b8', fontSize: '0.85rem', fontStyle: 'italic', marginBottom: '10px' }}>{item.msg}</p>
                                <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0 }}><strong style={{ color: '#475569' }}>Why it works:</strong> {item.why}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA to next module */}
            <div className="mt-12 p-6 rounded-2xl" style={{ background: 'rgba(34,211,238,0.05)', border: '1px solid rgba(34,211,238,0.15)' }}>
                <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-2">Up Next</p>
                <h3 className="text-white text-xl font-bold mb-2">Module 07 — Post-Close</h3>
                <p className="text-gray-400 text-sm">The card is charged. Now what? How to deliver a premium onboarding experience, prevent buyer&rsquo;s remorse, and turn every client into a referral machine.</p>
            </div>
        </div>
    );
}
