'use client';
import React, { useState } from 'react';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

type SpinType = 'situation' | 'problem' | 'implication' | 'need-payoff';

const SPIN_TABS: { id: SpinType; label: string; icon: string; color: string; description: string }[] = [
    { id: 'situation', label: 'Situation', icon: '🗺️', color: '#22d3ee', description: 'Map the prospect\'s current state. Let them explain their broken processes before you say a word about solutions.' },
    { id: 'problem', label: 'Problem', icon: '🔍', color: '#f59e0b', description: 'Poke the bruise. Make them admit the current way is flawed — in their own words.' },
    { id: 'implication', label: 'Implication', icon: '💀', color: '#ef4444', description: 'Twist the knife. Make them realize how much the problem is actually costing them — in dollars, time, and missed opportunity.' },
    { id: 'need-payoff', label: 'Need-Payoff', icon: '💰', color: '#22c55e', description: 'Get the prospect to articulate the value of solving the problem in their own words. This is where they close themselves.' },
];

const SPIN_QUESTIONS: Record<SpinType, { question: string; why: string; listen: string }[]> = {
    situation: [
        { question: 'Walk me through exactly what happens right now when a new lead hits your website.', why: 'Reveals the full intake flow and immediately exposes where delays, hand-offs, or dead-ends exist.', listen: 'How many manual steps? How many people touch the lead before contact?' },
        { question: 'How are you currently tracking projects and communicating with clients?', why: 'Uncovers the tech stack and how fragmented it is — spreadsheets, email chains, and sticky notes are gold.', listen: '"We use email" or "It\'s in a spreadsheet" = massive build opportunity.' },
        { question: 'What software stack are you patching together right now?', why: 'Reveals duct-tape infrastructure. The more tools they name, the bigger the integration pain.', listen: 'Count the tools. 4+ disconnected SaaS = you have a system build on your hands.' },
        { question: 'How many people are involved in closing a deal from first contact to signed contract?', why: 'Maps the decision chain and reveals bottlenecks in the sales pipeline.', listen: 'Every handoff is a leak. More people = more dropped balls.' },
        { question: 'What does your onboarding process look like after someone becomes a client?', why: 'Post-sale chaos is often worse than pre-sale chaos — and more painful to admit.', listen: '"We wing it" or "It depends" = no system = build opportunity.' },
    ],
    problem: [
        { question: 'It sounds like you have to manually enter data three times. How often are details slipping through the cracks?', why: 'Turns a process admission into a pain admission. They just told you the situation — now make them feel it.', listen: 'Hesitation or a sigh = they know it\'s bad. Let the silence breathe.' },
        { question: 'Your site looks a bit dated compared to your competitors. Has anyone ever mentioned that?', why: 'External validation stings more than your opinion. If a client said it, it\'s already a wound.', listen: '"Actually, yeah..." is your green light. Follow up: "What happened?"' },
        { question: 'What\'s the biggest bottleneck stopping you from doubling your volume right now?', why: 'Forces them to articulate the ceiling they\'re hitting — and positions you as the one who removes it.', listen: 'Whatever they name first is the core pain. Write it down verbatim.' },
        { question: 'How many leads do you think slip through the cracks in a typical month?', why: 'Quantifies the leak. Most owners know the number but have never said it out loud.', listen: 'Any number > 0 is ammunition. Multiply by their deal value later.' },
        { question: 'When a client has a bad experience with your process, what does that look like?', why: 'Gets them to tell you a story. Stories are emotional. Emotion drives urgency.', listen: 'The more specific the story, the more pain they\'re feeling. Don\'t interrupt.' },
    ],
    implication: [
        { question: 'If your team is spending 15 hours a week doing manual data entry... what is that costing you in payroll every month?', why: 'Translates wasted time into a dollar figure they can\'t ignore. $25/hr × 15hrs × 4 weeks = $1,500/month.', listen: 'Watch their face when the math hits. That\'s the moment the sale accelerates.' },
        { question: 'When a high-ticket client sees your current site and goes with a competitor, how much revenue did you just lose?', why: 'Connects a visual problem (ugly site) to a revenue outcome. Makes the intangible tangible.', listen: 'If they name a number, repeat it: "So that\'s $X you\'ll never get back."' },
        { question: 'How long can you sustain this manual process before the team burns out?', why: 'Introduces a ticking clock. Burnout isn\'t hypothetical — it\'s happening.', listen: '"We\'re already feeling it" = urgency is pre-built. Don\'t push, just acknowledge.' },
        { question: 'If nothing changes in the next 12 months, what does your business look like?', why: 'Forces them to visualize the cost of inaction over time. The status quo becomes the enemy.', listen: 'Silence or a deep exhale = they\'re doing the math. Let them.' },
        { question: 'How much is it costing you each month to NOT have this problem solved?', why: 'The most direct implication question. If they can answer this, you\'ve already won.', listen: 'Whatever dollar figure they give you, write it down. It\'s your anchor for pricing.' },
    ],
    'need-payoff': [
        { question: 'If we could completely automate that intake process, how much would that free your team up?', why: 'Lets them sell themselves the solution. They\'re quantifying the benefit, not you.', listen: 'They\'ll often overestimate the benefit — let them. It builds commitment.' },
        { question: 'What would it mean for your business if leads were responded to in under 60 seconds instead of 6 hours?', why: 'Creates a vivid before/after contrast using their own numbers from the Situation phase.', listen: 'Look for excitement. If their tone shifts, they\'re visualizing the future state.' },
        { question: 'If that bottleneck was gone tomorrow, where would you focus that freed-up energy?', why: 'Gets them talking about growth, not problems. Now they\'re investing emotionally.', listen: 'They\'ll usually talk about scaling, hiring, or spending more time on high-value work. All of these are expansion opportunities.' },
        { question: 'Would it be useful if all of that data lived in one dashboard instead of five different tools?', why: 'Introduces the solution concept without pitching. They have to agree it would help.', listen: '"Absolutely" or "That would be incredible" = they just asked you to build it.' },
        { question: 'If your clients could log in and see their project status without calling your team, how many hours per week would that save?', why: 'Frames the client portal as an obvious win that reduces support load. Easy to quantify.', listen: 'Math is your friend here. Hours saved × hourly rate = ROI they can repeat to their partner.' },
    ],
};

const opsAuditQuestions = [
    { question: 'Walk me through a typical week in your business — how many of those steps are still done manually or in spreadsheets?', listen: 'Every time they say "manually" or "spreadsheet" — that\'s a build opportunity.' },
    { question: 'How many different software tools is your team using right now? Do they talk to each other?', listen: '"They don\'t really talk to each other" = integration build. Count the tools.' },
    { question: 'When a new client signs on, what does your onboarding process look like from your side?', listen: '"It depends" or "We don\'t have a formal process" = custom system opportunity.' },
    { question: 'Do your clients have a place to log in, check their project status, or communicate with you?', listen: '"No, it\'s all through email" = client portal build opportunity.' },
    { question: 'If you wanted to scale to 3x your current volume tomorrow, what would break first?', listen: 'Whatever they name = the critical system you build first.' },
    { question: 'How do you currently track which jobs are profitable and which ones aren\'t?', listen: '"I don\'t really know" or "It\'s in someone\'s head" = analytics dashboard build.' },
];

const discoveryCommandments = [
    { rule: 'Never pitch until they\u2019ve identified their own pain', why: 'If you pitch before they feel the problem, they\'ll evaluate features instead of outcomes.' },
    { rule: 'Let the prospect quantify the cost — not you', why: 'Numbers they calculate themselves are 10x more persuasive than numbers you present.' },
    { rule: 'The prospect must be asking "how can you fix this?" before you answer', why: 'When they ask, the power dynamic shifts. You\'re now the expert they\'re pulling toward, not pushing onto.' },
    { rule: 'Write down their exact words — use them in the pitch verbatim', why: 'Hearing their own language reflected back creates deep trust and shows you actually listened.' },
    { rule: 'Silence is your most powerful tool', why: 'After asking a hard question, shut up. The prospect will fill the silence with the truth.' },
];

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

function SpinQuestionCard({ item, color, index }: { item: typeof SPIN_QUESTIONS['situation'][0]; color: string; index: number }) {
    const [expanded, setExpanded] = useState(false);
    return (
        <div
            onClick={() => setExpanded(!expanded)}
            style={{
                background: expanded ? `${color}08` : 'rgba(255,255,255,0.02)',
                border: `1px solid ${expanded ? `${color}30` : 'rgba(255,255,255,0.05)'}`,
                borderRadius: '14px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                marginBottom: '10px',
            }}
        >
            <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <span style={{
                    flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.75rem', fontWeight: 700,
                    background: `${color}15`, color, border: `1px solid ${color}30`,
                }}>{index + 1}</span>
                <div style={{ flex: 1 }}>
                    <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.95rem', marginBottom: expanded ? '12px' : 0 }}>
                        &ldquo;{item.question}&rdquo;
                    </p>
                    {expanded && (
                        <div style={{ display: 'grid', gap: '10px', marginTop: '8px' }}>
                            <div style={{ padding: '12px 16px', borderRadius: '10px', background: `${color}06`, border: `1px solid ${color}12` }}>
                                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color, marginBottom: '4px' }}>WHY THIS WORKS</p>
                                <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: 0 }}>{item.why}</p>
                            </div>
                            <div style={{ padding: '12px 16px', borderRadius: '10px', background: 'rgba(167,139,250,0.04)', border: '1px solid rgba(167,139,250,0.12)' }}>
                                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a78bfa', marginBottom: '4px' }}>🎧 LISTEN FOR</p>
                                <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: 0 }}>{item.listen}</p>
                            </div>
                        </div>
                    )}
                </div>
                <span style={{
                    flexShrink: 0, fontSize: '1rem', transition: 'transform 0.2s',
                    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)', color: '#475569',
                }}>▾</span>
            </div>
        </div>
    );
}

function AuditCheckItem({ item, index }: { item: typeof opsAuditQuestions[0]; index: number }) {
    const [checked, setChecked] = useState(false);
    return (
        <div
            onClick={() => setChecked(!checked)}
            style={{
                display: 'flex', gap: '14px', alignItems: 'flex-start',
                padding: '16px', borderRadius: '12px', cursor: 'pointer',
                background: checked ? 'rgba(34,211,238,0.05)' : 'rgba(255,255,255,0.02)',
                border: `1px solid ${checked ? 'rgba(34,211,238,0.15)' : 'rgba(255,255,255,0.05)'}`,
                transition: 'all 0.2s ease',
                marginBottom: '8px',
            }}
        >
            <span style={{
                flexShrink: 0, width: 22, height: 22, borderRadius: '6px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.7rem', fontWeight: 700,
                background: checked ? 'rgba(34,211,238,0.2)' : 'rgba(255,255,255,0.06)',
                color: checked ? '#22d3ee' : '#475569',
                border: `1px solid ${checked ? 'rgba(34,211,238,0.3)' : 'rgba(255,255,255,0.1)'}`,
                transition: 'all 0.2s ease',
            }}>{checked ? '✓' : ''}</span>
            <div style={{ flex: 1 }}>
                <p style={{ color: checked ? '#e2e8f0' : '#94a3b8', fontWeight: 500, fontSize: '0.925rem', marginBottom: '4px', transition: 'color 0.2s' }}>
                    &ldquo;{item.question}&rdquo;
                </p>
                <p style={{ color: '#64748b', fontSize: '0.8rem', margin: 0, fontStyle: 'italic' }}>
                    🎧 {item.listen}
                </p>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   STYLES
───────────────────────────────────────────── */

const M3_STYLES = `
  .m3-spin-tabs {
    display: flex;
    gap: 6px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  }
  .m3-spin-tab {
    padding: 10px 18px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.06);
    background: rgba(255,255,255,0.02);
    cursor: pointer;
    transition: all 0.2s ease;
    font-size: 0.85rem;
    font-weight: 600;
    color: #64748b;
    display: flex; align-items: center; gap: 8px;
  }
  .m3-spin-tab:hover { background: rgba(255,255,255,0.04); color: #94a3b8; }
  .m3-spin-tab.active {
    border-color: var(--tab-color);
    background: color-mix(in srgb, var(--tab-color) 8%, transparent);
    color: var(--tab-color);
    box-shadow: 0 0 20px color-mix(in srgb, var(--tab-color) 15%, transparent);
  }
  .m3-flow-step {
    display: flex;
    align-items: center;
    gap: 0;
  }
  .m3-flow-node {
    padding: 12px 20px;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.85rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
    border: 1px solid transparent;
    min-width: 110px;
  }
  .m3-flow-node:hover { transform: scale(1.05); }
  .m3-flow-node.active { transform: scale(1.08); box-shadow: 0 0 20px var(--glow); }
  .m3-flow-arrow {
    color: #334155;
    font-size: 1.2rem;
    padding: 0 6px;
    flex-shrink: 0;
  }
  @media (max-width: 640px) {
    .m3-spin-tabs { flex-direction: column; }
    .m3-spin-tab { justify-content: center; }
    .m3-flow-step { flex-wrap: wrap; justify-content: center; }
    .m3-flow-node { min-width: 80px; font-size: 0.75rem; padding: 10px 14px; }
    .m3-flow-arrow { padding: 0 2px; }
  }
`;

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

export default function Module3() {
    const [activeTab, setActiveTab] = useState<SpinType>('situation');
    const activeTabData = SPIN_TABS.find(t => t.id === activeTab)!;

    return (
        <div className="ql-training-content">
            <style>{M3_STYLES}</style>

            <div className="ql-section-header">
                <span className="ql-module-number">Module 03</span>
                <h2 className="ql-module-title">Discovery &amp; Qualification</h2>
            </div>

            <p className="mb-8">Discovery is where the sale is won or lost. If you do this right, they will sell themselves. We use a modified <strong>SPIN</strong> (Situation, Problem, Implication, Need-Payoff) framework — then qualify their budget before you ever pitch.</p>

            {/* ── SPIN Flow Diagram ── */}
            <div className="ql-card">
                <h3>The Discovery Flow</h3>
                <p>Every discovery call follows this exact sequence. Click any step to jump to those questions.</p>
                <div className="m3-flow-step" style={{ justifyContent: 'center', flexWrap: 'wrap', gap: '4px', marginTop: '20px' }}>
                    {SPIN_TABS.map((tab, i) => (
                        <React.Fragment key={tab.id}>
                            <div
                                className={`m3-flow-node ${activeTab === tab.id ? 'active' : ''}`}
                                style={{
                                    background: activeTab === tab.id ? `${tab.color}15` : 'rgba(255,255,255,0.03)',
                                    color: activeTab === tab.id ? tab.color : '#64748b',
                                    borderColor: activeTab === tab.id ? `${tab.color}40` : 'rgba(255,255,255,0.06)',
                                    '--glow': `${tab.color}25`,
                                } as React.CSSProperties}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.icon} {tab.label}
                            </div>
                            {i < SPIN_TABS.length - 1 && <span className="m3-flow-arrow">→</span>}
                        </React.Fragment>
                    ))}
                </div>
            </div>

            {/* ── SPIN Question Navigator ── */}
            <div className="ql-card" style={{ borderColor: `${activeTabData.color}20` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '1.8rem' }}>{activeTabData.icon}</span>
                    <h3 style={{ color: activeTabData.color, margin: 0 }}>{activeTabData.label} Questions</h3>
                </div>
                <p style={{ color: '#94a3b8', marginBottom: '20px' }}>{activeTabData.description}</p>

                {/* Tabs */}
                <div className="m3-spin-tabs">
                    {SPIN_TABS.map(tab => (
                        <button
                            key={tab.id}
                            className={`m3-spin-tab ${activeTab === tab.id ? 'active' : ''}`}
                            style={{ '--tab-color': tab.color } as React.CSSProperties}
                            onClick={() => setActiveTab(tab.id)}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>

                {/* Question cards */}
                <div>
                    {SPIN_QUESTIONS[activeTab].map((item, i) => (
                        <SpinQuestionCard key={`${activeTab}-${i}`} item={item} color={activeTabData.color} index={i} />
                    ))}
                </div>
            </div>

            {/* ── Budget Qualifying ── */}
            <div className="ql-card">
                <h3>Qualifying Budget (Without Being Awkward)</h3>
                <p>Before you pitch, establish the Cost of Inaction (COI). Once they agree to those numbers, your investment figure looks incredibly reasonable.</p>
                <div className="ql-script-box">
                    &ldquo;You mentioned you&rsquo;re losing about 2 deals a month because your lead process is slow. What&rsquo;s your average client worth? $5,000? So this broken process is literally costing you $10,000 every single month. Does that sound right?&rdquo;
                </div>
                <p className="mt-4">Then anchor to your range:</p>
                <div className="ql-script-box">
                    &ldquo;To build out the type of automated system we&rsquo;re talking about, our typical engagements range from $3,000 to $10,000 depending on scope, plus ongoing support. Is that completely out of the realm of reality for you right now?&rdquo;
                </div>
                <p className="text-gray-500 text-sm mt-3">If they balk, down-sell to a smaller phase. If they don&rsquo;t blink, you know you have room to build something incredible.</p>
            </div>

            {/* ── Ops System Audit ── */}
            <div className="ql-card" style={{ borderColor: 'rgba(167,139,250,0.25)' }}>
                <h3 style={{ color: '#a78bfa' }}>🖥️ The Ops System Audit Checklist</h3>
                <p>When selling custom software or automation systems, layer these questions into your SPIN. Check off each one as you use it in practice calls. These uncover operational pain most prospects haven&rsquo;t even put into words yet.</p>
                <div style={{ marginTop: '16px' }}>
                    {opsAuditQuestions.map((item, i) => (
                        <AuditCheckItem key={i} item={item} index={i} />
                    ))}
                </div>
            </div>

            {/* ── Discovery Commandments ── */}
            <div className="ql-card" style={{ borderColor: 'rgba(34,211,238,0.2)' }}>
                <h3 style={{ color: '#22d3ee' }}>⚡ The 5 Discovery Commandments</h3>
                <p>Break any of these and the sale dies in Discovery. Memorize them.</p>
                <div style={{ display: 'grid', gap: '10px', marginTop: '16px' }}>
                    {discoveryCommandments.map((item, i) => (
                        <div key={i} style={{
                            display: 'flex', gap: '14px', alignItems: 'flex-start',
                            padding: '16px', borderRadius: '12px',
                            background: 'rgba(34,211,238,0.03)', border: '1px solid rgba(34,211,238,0.08)',
                        }}>
                            <span style={{
                                flexShrink: 0, width: 28, height: 28, borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '0.8rem', fontWeight: 700,
                                background: 'rgba(34,211,238,0.12)', color: '#22d3ee',
                            }}>{i + 1}</span>
                            <div>
                                <p style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.925rem', marginBottom: '4px' }}>{item.rule}</p>
                                <p style={{ color: '#64748b', fontSize: '0.825rem', margin: 0 }}>{item.why}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ql-tip-box">
                <h4>💡 The Golden Rule of Discovery</h4>
                <p className="mb-0">Do not introduce QuantLab&rsquo;s solution until the prospect has identified their own pain, quantified what it costs them, and expressed what solving it would mean to their business&mdash;all in their own words, without you pitching. The prospect must be asking &ldquo;how can you fix this?&rdquo; before you answer.</p>
            </div>
        </div>
    );
}
