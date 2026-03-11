'use client';
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

interface Props {
    onStartTest: () => void;
}

const onboardingSteps = [
    {
        step: '01', time: 'Within 1 Hour', color: '#22d3ee',
        action: 'Send the Premium Welcome Email',
        detail: 'Confirm the deposit received, introduce the project, and set the tone. This is the first impression post-sale. Make it feel like they just joined something elite.',
        template: `Subject: Welcome to QuantLab — Here's What Happens Next

Hey [First Name],

Welcome aboard. I'm personally excited to build this for you.

Here's what happens now:
1. Within 24 hours → You'll receive the onboarding questionnaire (takes ~10 min)
2. Within 48 hours → We'll schedule our Strategy Kick-Off call
3. Week 1 → First tangible deliverable on your screen

If anything comes up between now and then, reply to this email. I answer every one.

Let's build something great.

[Your Name]
QuantLab | Partner`,
        whyItMatters: 'Buyer\'s remorse peaks in the first 6 hours. This email kills it by creating momentum and clarity.',
    },
    {
        step: '02', time: 'Within 24 Hours', color: '#22d3ee',
        action: 'Send the Onboarding Questionnaire',
        detail: 'Get brand assets, logins, content, and their client\'s perspective on the company.',
        template: null,
        whyItMatters: 'A clean form link — not an email chain — signals professionalism and prevents asset chaos later.',
    },
    {
        step: '03', time: 'Within 48 Hours', color: '#a78bfa',
        action: 'Hold the Strategy Kick-Off Call',
        detail: 'Map out scope, timeline, and milestones. Share your screen and walk through the project plan live.',
        template: null,
        whyItMatters: 'Give them a Loom recording of the call immediately after. This becomes their reference point and prevents scope creep arguments later.',
    },
    {
        step: '04', time: 'Week 1', color: '#a78bfa',
        action: 'Deliver the First Visible Win',
        detail: 'Show something real — a wireframe, a staging environment, a first design comp.',
        template: null,
        whyItMatters: 'A fast first delivery prevents buyer\'s remorse from taking root. Something tangible makes the investment feel real and justified.',
    },
    {
        step: '05', time: 'Week 2–4', color: '#34d399',
        action: 'Weekly Progress Updates',
        detail: 'Send a short Loom video every Friday showing exactly what was built, what\'s next, and any blockers.',
        template: null,
        whyItMatters: 'Clients who see progress don\'t chase you. Proactive updates eliminate the #1 source of client frustration: feeling ignored.',
    },
];

const buyersRemorseKillers = [
    {
        action: 'Send a congratulatory message immediately',
        detail: '"You made a great decision. Here\'s exactly what happens next."',
        icon: '🎉',
        timing: '< 30 minutes',
    },
    {
        action: 'Give them something tangible within 24 hours',
        detail: 'A project doc, a Loom, a first draft — something to look at and share.',
        icon: '📦',
        timing: '< 24 hours',
    },
    {
        action: 'Over-communicate for the first two weeks',
        detail: 'Brief daily or every-other-day updates. They can always ask for less.',
        icon: '📡',
        timing: 'Days 1–14',
    },
    {
        action: 'Name the timeline explicitly',
        detail: '"Go-live is [specific date]. Here\'s the milestone map between now and then."',
        icon: '📅',
        timing: 'Day 1',
    },
];

type RetentionTab = 'pulse' | 'upsell' | 'referral' | 'renewal';

const retentionTactics: { id: RetentionTab; title: string; timing: string; icon: string; color: string; script: string; why: string }[] = [
    {
        id: 'pulse', title: 'The 30-Day Pulse Check', timing: 'Day 30', icon: '📊', color: '#22d3ee',
        script: '"Hey [Name] — 30 days in. I want to make sure the system is performing the way we designed it to. Do you have 15 minutes this week so I can walk you through the analytics and show you what\'s working and what we can tighten up?"',
        why: 'Positions you as a proactive partner, not a vendor who disappears post-launch. This single touchpoint prevents 80% of churn.',
    },
    {
        id: 'upsell', title: 'The Upsell Ladder', timing: 'Day 45–60', icon: '📈', color: '#a78bfa',
        script: '"The core system is running great. I was reviewing your analytics this week and noticed your referral traffic is converting at 40% lower than direct. We could build a custom referral dashboard and automated loyalty email in about 2 weeks. Want me to scope it?"',
        why: 'Only upsell when you can show a data-backed reason. Never pitching for its own sake — the data pitches for you.',
    },
    {
        id: 'referral', title: 'The Referral Ask', timing: 'Day 30', icon: '🤝', color: '#34d399',
        script: '"Hey [Client Name], really glad the system is working so well. Quick ask — do you know 2 or 3 other business owners in your network who are still running on outdated processes or an old site? If you make an intro and they become clients, we\'ll extend your plan at no cost for 2 months."',
        why: 'Referral incentives work best when the client is at their happiest — 30 days post-launch. This is the optimal window.',
    },
    {
        id: 'renewal', title: 'The Renewal Conversation', timing: 'Month 10', icon: '🔒', color: '#f59e0b',
        script: '"We\'re coming up on our one-year mark next month. I\'ve put together a summary of results — [X] leads generated, [Y] hours saved, [Z] ROI. I\'d love to lock in your plan for year two and actually have a conversation about where we take this next."',
        why: 'Frame renewal as a natural progression, not a sales call. Present the results first, then the ask.',
    },
];

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

function TimelineStep({ item }: { item: typeof onboardingSteps[0] }) {
    const [expanded, setExpanded] = useState(false);
    return (
        <div
            onClick={() => setExpanded(!expanded)}
            style={{
                display: 'flex', gap: '20px', cursor: 'pointer',
                padding: '16px', borderRadius: '14px',
                background: expanded ? `${item.color}06` : 'transparent',
                border: `1px solid ${expanded ? `${item.color}15` : 'transparent'}`,
                transition: 'all 0.2s ease',
            }}
        >
            {/* Step bubble */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', flexShrink: 0 }}>
                <div style={{
                    width: '2.5rem', height: '2.5rem', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 700, fontSize: '0.8rem',
                    background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30`,
                }}>{item.step}</div>
                <span style={{ fontSize: '0.6rem', fontWeight: 600, color: `${item.color}88`, textTransform: 'uppercase', textAlign: 'center', maxWidth: '70px' }}>{item.time}</span>
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <p style={{ fontWeight: 600, color: item.color, margin: 0, fontSize: '0.95rem' }}>{item.action}</p>
                    <span style={{ marginLeft: 'auto', color: '#475569', fontSize: '0.9rem', transition: 'transform 0.2s', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}>▾</span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: expanded ? '12px' : 0 }}>{item.detail}</p>

                {expanded && (
                    <div style={{ display: 'grid', gap: '10px' }}>
                        <div style={{ padding: '12px 14px', borderRadius: '10px', background: 'rgba(167,139,250,0.04)', border: '1px solid rgba(167,139,250,0.1)' }}>
                            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a78bfa', marginBottom: '4px' }}>💡 WHY IT MATTERS</p>
                            <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>{item.whyItMatters}</p>
                        </div>
                        {item.template && (
                            <div style={{
                                padding: '16px', borderRadius: '10px',
                                background: 'rgba(34,211,238,0.03)', border: '1px solid rgba(34,211,238,0.1)',
                                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                                fontSize: '0.8rem', color: '#94a3b8', lineHeight: 1.7,
                                whiteSpace: 'pre-line',
                            }}>
                                <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#22d3ee', marginBottom: '10px', fontFamily: "'Space Grotesk', sans-serif" }}>📋 COPY-READY TEMPLATE</p>
                                {item.template}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   STYLES
───────────────────────────────────────────── */

const M7_STYLES = `
  .m7-retention-tabs {
    display: flex; gap: 6px; flex-wrap: wrap;
    margin-bottom: 20px;
  }
  .m7-retention-tab {
    padding: 8px 16px; border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.06);
    background: rgba(255,255,255,0.02);
    cursor: pointer; transition: all 0.2s ease;
    font-size: 0.8rem; font-weight: 600; color: #64748b;
    display: flex; align-items: center; gap: 6px;
  }
  .m7-retention-tab:hover { background: rgba(255,255,255,0.04); color: #94a3b8; }
  .m7-retention-tab.active {
    border-color: var(--tab-color);
    background: color-mix(in srgb, var(--tab-color) 8%, transparent);
    color: var(--tab-color);
  }
  @media (max-width: 640px) {
    .m7-retention-tabs { flex-direction: column; }
  }
`;

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

export default function Module7({ onStartTest }: Props) {
    const [activeRetention, setActiveRetention] = useState<RetentionTab>('pulse');
    const activeTactic = retentionTactics.find(t => t.id === activeRetention)!;

    return (
        <div className="ql-training-content">
            <style>{M7_STYLES}</style>

            <div className="ql-section-header">
                <span className="ql-module-number">Module 07</span>
                <h2 className="ql-module-title">Post-Close: Onboarding &amp; Retention</h2>
            </div>

            <p className="mb-8">The card is charged. The deal is done. Most reps disappear — and most clients start having second thoughts. The elite rep understands that the <strong>real sale begins at the signature</strong>. A premium delivery experience is your best marketing.</p>

            {/* ── Buyer's Remorse Killswitch ── */}
            <div className="ql-card">
                <h3>🛡️ Killing Buyer&rsquo;s Remorse Before It Starts</h3>
                <p>Buyer&rsquo;s remorse peaks in the <strong>6–48 hours after payment</strong>. Execute these four actions with precision to neutralize it.</p>
                <div style={{ display: 'grid', gap: '10px', marginTop: '16px' }}>
                    {buyersRemorseKillers.map((item, i) => (
                        <div key={i} style={{
                            display: 'flex', gap: '16px', alignItems: 'center',
                            padding: '16px 18px', borderRadius: '12px',
                            background: 'rgba(34,211,238,0.03)', border: '1px solid rgba(34,211,238,0.08)',
                        }}>
                            <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{item.icon}</span>
                            <div style={{ flex: 1 }}>
                                <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.925rem', marginBottom: '2px' }}>{item.action}</p>
                                <p style={{ color: '#64748b', fontSize: '0.825rem', margin: 0, fontStyle: 'italic' }}>{item.detail}</p>
                            </div>
                            <span style={{
                                flexShrink: 0, padding: '4px 10px', borderRadius: '6px',
                                fontSize: '0.7rem', fontWeight: 700,
                                background: 'rgba(34,211,238,0.1)', color: '#22d3ee',
                            }}>{item.timing}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Onboarding Timeline ── */}
            <div className="ql-card">
                <h3>🚀 The 5-Step Premium Onboarding Protocol</h3>
                <p>A great onboarding experience converts a one-time client into a long-term retainer and a referral source. Click each step to see details and templates.</p>
                <div style={{ display: 'grid', gap: '6px', marginTop: '20px' }}>
                    {onboardingSteps.map((item, i) => (
                        <TimelineStep key={i} item={item} />
                    ))}
                </div>
            </div>

            {/* ── Retention Tactics Explorer ── */}
            <div className="ql-card">
                <h3>💰 Retention &amp; Growth Tactics</h3>
                <p>Your existing clients are your most valuable asset. The cost of acquiring a new client is <strong>5–7x</strong> the cost of retaining one. Select a tactic to see the script and timing.</p>

                <div className="m7-retention-tabs">
                    {retentionTactics.map(tactic => (
                        <button
                            key={tactic.id}
                            className={`m7-retention-tab ${activeRetention === tactic.id ? 'active' : ''}`}
                            style={{ '--tab-color': tactic.color } as React.CSSProperties}
                            onClick={() => setActiveRetention(tactic.id)}
                        >
                            {tactic.icon} {tactic.title}
                        </button>
                    ))}
                </div>

                <div style={{
                    padding: '24px', borderRadius: '14px',
                    background: `${activeTactic.color}04`, border: `1px solid ${activeTactic.color}15`,
                    transition: 'all 0.2s ease',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                        <span style={{ fontSize: '1.4rem' }}>{activeTactic.icon}</span>
                        <p style={{ color: activeTactic.color, fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>{activeTactic.title}</p>
                        <span style={{ marginLeft: 'auto', padding: '4px 10px', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 700, background: `${activeTactic.color}12`, color: activeTactic.color }}>{activeTactic.timing}</span>
                    </div>
                    <div className="ql-script-box" style={{ margin: '16px 0' }}>{activeTactic.script}</div>
                    <div style={{ padding: '12px 16px', borderRadius: '10px', background: 'rgba(167,139,250,0.04)', border: '1px solid rgba(167,139,250,0.1)' }}>
                        <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a78bfa', marginBottom: '4px' }}>💡 WHY IT WORKS</p>
                        <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>{activeTactic.why}</p>
                    </div>
                </div>

                {/* Optimal Ask Windows */}
                <div style={{ marginTop: '20px', display: 'flex', gap: '4px', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                    {[
                        { label: 'Pulse Check', day: 'Day 30', color: '#22d3ee' },
                        { label: 'Referral Ask', day: 'Day 30', color: '#34d399' },
                        { label: 'Upsell', day: 'Day 45–60', color: '#a78bfa' },
                        { label: 'Renewal', day: 'Mo 10', color: '#f59e0b' },
                    ].map((w, i) => (
                        <React.Fragment key={i}>
                            <div style={{
                                padding: '8px 14px', borderRadius: '10px',
                                background: `${w.color}08`, border: `1px solid ${w.color}15`,
                                textAlign: 'center',
                            }}>
                                <p style={{ fontSize: '0.65rem', fontWeight: 700, color: w.color, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{w.label}</p>
                                <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0, fontWeight: 600 }}>{w.day}</p>
                            </div>
                            {i < 3 && <span style={{ color: '#334155', fontSize: '0.8rem' }}>→</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className="ql-tip-box">
                <h4>💡 The Rep&rsquo;s Creed</h4>
                <p className="mb-0">A closed deal is not the finish line — it&rsquo;s the starting line of a relationship. The reps who build a $25k–$50k/month book of business do it through <strong>referrals and renewals</strong>, not by grinding for cold leads forever. Deliver elite results, and your clients market for you.</p>
            </div>

            {/* CTA to start exam */}
            <div className="mt-16 relative p-1 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.15)] group cursor-pointer" onClick={onStartTest}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#22d3ee] to-[#a78bfa] opacity-20 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative bg-[#0a0f1d] rounded-xl p-10 text-center border border-white/10 z-10">
                    <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        Ready for the Standard?
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
                        You&rsquo;ve completed all 9 core modules. Now test your knowledge with the official certification exam.
                    </p>
                    <button
                        className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold tracking-wider uppercase text-white text-lg"
                        style={{ background: "linear-gradient(135deg, rgba(34,211,238,0.15) 0%, rgba(167,139,250,0.15) 100%)", border: "1px solid rgba(255,255,255,0.15)" }}
                    >
                        INITIATE CERTIFICATION EXAM <ArrowRight className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </div>
    );
}
