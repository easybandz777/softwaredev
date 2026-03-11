'use client';
import React, { useState } from 'react';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const demoSteps = [
    {
        step: '01', title: 'Recap Their Pain', time: '2 min', color: '#22d3ee',
        text: 'Open by summarizing back exactly what they told you in discovery. Word for word.',
        script: '"Before I show you anything, I want to make sure I understood what you told me last week..."',
        tips: ['Use their exact language — not your interpretation.', 'Pause after each pain point and confirm: "Did I get that right?"', 'This builds trust and positions the demo as a solution to THEIR problems, not a generic tour.'],
    },
    {
        step: '02', title: 'Show the Current State', time: '2 min', color: '#22d3ee',
        text: 'Pull up their actual website or current process on screen. Make the pain visible and real.',
        script: '"Let me pull up your site real quick so we\'re looking at the same thing..."',
        tips: ['Run PageSpeed Insights live on their site — the red scores are devastating.', 'Try to book an appointment on their site while they watch. Show them the friction.', 'Never insult. Just observe: "I noticed this took about 6 clicks to get to the contact form."'],
    },
    {
        step: '03', title: 'Show the Future State', time: '10 min', color: '#a78bfa',
        text: 'Show a comparable build. Walk through the new flow step-by-step, narrating the outcome at each step.',
        script: '"Now let me show you what this looks like when it\'s built right..."',
        tips: ['Map EVERY feature to a specific pain they mentioned in discovery.', 'Narrate the user journey, not the feature list: "A lead lands here → fills this out → your team gets notified in 4 seconds."', 'Show the admin/operator view too — they need to see THEIR experience, not just their client\'s.'],
    },
    {
        step: '04', title: 'Quantify the Gap', time: '3 min', color: '#a78bfa',
        text: 'Use their own numbers to show the cost difference between current state and future state.',
        script: '"In your current setup, that lead waited 6 hours. In this system, they get a response in 60 seconds. You told me you\'re losing 3 leads per week. That\'s a $45,000/month gap this closes."',
        tips: ['Always use THEIR numbers from discovery — never invent figures.', 'The bigger the gap, the easier the close.', 'Write the math on screen or verbalize it slowly. Let the number sink in.'],
    },
    {
        step: '05', title: 'The Soft Ask', time: '2 min', color: '#f8fafc',
        text: 'Check for alignment, then stop talking.',
        script: '"Based on what you just saw — does this solve the problem we talked about? What questions do you have before we discuss next steps?"',
        tips: ['Ask the question and GO QUIET. Do not fill the silence.', 'If they say "yes" — move to pricing. Don\'t add more features.', 'If they have questions, answer them concisely and re-ask.'],
    },
];

const softwareDemoSteps = [
    { step: '01', title: 'Start with the current broken flow', color: '#ef4444', text: 'Screen-share their current process. Walk through it and make the pain visual.', script: '"Right now, when a client submits a request, it goes into your email inbox, someone manually copies it into a spreadsheet, then someone else books it in the calendar... am I reading that right?"' },
    { step: '02', title: 'Show the new flow — not features, steps', color: '#a78bfa', text: 'Walk through the new system as a user would experience it.', script: '"A client fills out this intake form → the system creates a project record → your team gets notified instantly → the client receives a confirmation with their login link."' },
    { step: '03', title: 'Show the admin/operator view', color: '#22d3ee', text: 'Flip to the backend. Show them their dashboard: live pipeline, active jobs, revenue tracking.', script: '"Right now, to see this information, how many different places would you have to check?"' },
    { step: '04', title: 'Quantify the time recovered', color: '#34d399', text: 'Calculate the hours and dollars saved using their own numbers.', script: '"You mentioned your team spends about 8 hours a week on manual data entry and follow-up. This eliminates that. At $25/hour fully loaded, that\'s $1,000/month in recovered labor."' },
    { step: '05', title: 'The future-state question', color: '#f8fafc', text: 'Let them imagine the business with this system running. Stop talking and let them sell themselves.', script: '"If this system had been running for the last 6 months, what would look different in your business?"' },
];

const proposalMistakes = [
    { mistake: 'Sending a proposal without a verbal commitment', why: 'A proposal should confirm a decision already emotionally made, not start one.', fix: 'Get verbal buy-in first: "If the numbers work, are we moving forward?" THEN send the proposal.' },
    { mistake: 'Generic pricing without context', why: 'Listing "$5,000" with no ROI framing is a price tag on a product, not an investment pitch.', fix: 'Always frame against the COI: "Your broken process costs $10k/month. This fixes it for $950/month."' },
    { mistake: 'More than 2 pages', why: 'Every additional page is an opportunity for them to overthink and find a reason to stall.', fix: 'One page: Problem → Solution → Investment → Next Steps. That\'s it.' },
    { mistake: 'Following up with "Just checking in"', why: 'This is the single most damaging follow-up phrase in existence. It signals you have no leverage.', fix: 'Add value: "I put together a quick Loom showing how the intake automation would work for your specific flow."' },
];

const pricingTiers = [
    {
        tier: 'Enterprise', price: '$12,000 build + $1,800/mo', color: '#a78bfa',
        psychology: 'The Anchor. 60–70% of prospects won\'t choose this, but it makes everything below feel like a deal.',
        includes: 'Full custom system, client portal, automations, analytics dashboard, dedicated Slack channel, priority support.',
    },
    {
        tier: 'Growth', price: '$5,500 build + $950/mo', color: '#22d3ee',
        psychology: 'The Target. This is your most profitable tier. Studies show 60–70% of prospects choose the middle option.',
        includes: 'Custom website, lead automation, CRM integration, weekly performance reports, email support.',
    },
    {
        tier: 'Starter', price: '$2,200 build + $450/mo', color: '#94a3b8',
        psychology: 'The Safety Net. Exists to catch budget-conscious prospects and get them in the door for later upsells.',
        includes: 'Professional website, contact forms, basic analytics, monthly check-in, email support.',
    },
];

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

function DemoStepCard({ item }: { item: typeof demoSteps[0] }) {
    const [expanded, setExpanded] = useState(false);
    return (
        <div
            onClick={() => setExpanded(!expanded)}
            style={{
                display: 'flex', gap: '1.25rem', cursor: 'pointer',
                padding: '16px', borderRadius: '14px',
                background: expanded ? `${item.color}06` : 'transparent',
                border: `1px solid ${expanded ? `${item.color}15` : 'transparent'}`,
                transition: 'all 0.2s ease', marginBottom: '4px',
            }}
        >
            <div style={{
                flexShrink: 0, width: '2.5rem', height: '2.5rem', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 700, fontSize: '0.8rem',
                background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30`,
            }}>{item.step}</div>
            <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                    <p style={{ fontWeight: 600, color: item.color, margin: 0, fontSize: '0.95rem' }}>{item.title}</p>
                    <span style={{ fontSize: '0.7rem', padding: '2px 8px', borderRadius: '6px', background: `${item.color}10`, color: item.color, fontWeight: 600 }}>{item.time}</span>
                    <span style={{ marginLeft: 'auto', color: '#475569', fontSize: '0.9rem', transition: 'transform 0.2s', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}>▾</span>
                </div>
                <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: 0 }}>{item.text}</p>
                {expanded && (
                    <div style={{ marginTop: '14px', display: 'grid', gap: '10px' }}>
                        <div className="ql-script-box" style={{ margin: 0 }}>{item.script}</div>
                        <div style={{ padding: '14px', borderRadius: '10px', background: 'rgba(167,139,250,0.04)', border: '1px solid rgba(167,139,250,0.1)' }}>
                            <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#a78bfa', marginBottom: '8px' }}>💡 PRO TIPS</p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                {item.tips.map((tip, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '8px', marginBottom: '6px', fontSize: '0.85rem', color: '#94a3b8' }}>
                                        <span style={{ color: '#a78bfa', flexShrink: 0 }}>→</span> {tip}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

function PricingTierCard({ tier, index }: { tier: typeof pricingTiers[0]; index: number }) {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                padding: '24px', borderRadius: '16px', position: 'relative',
                background: index === 0 ? 'rgba(167,139,250,0.05)' : 'rgba(255,255,255,0.02)',
                border: `1px solid ${tier.color}${hovered ? '40' : '20'}`,
                transition: 'all 0.3s ease',
                transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
                boxShadow: hovered ? `0 10px 30px ${tier.color}15` : 'none',
            }}
        >
            {index === 0 && <span style={{ position: 'absolute', top: 12, right: 12, fontSize: '0.7rem', padding: '3px 10px', borderRadius: '6px', fontWeight: 700, background: 'rgba(167,139,250,0.15)', color: '#a78bfa', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ANCHOR</span>}
            {index === 1 && <span style={{ position: 'absolute', top: 12, right: 12, fontSize: '0.7rem', padding: '3px 10px', borderRadius: '6px', fontWeight: 700, background: 'rgba(34,211,238,0.15)', color: '#22d3ee', textTransform: 'uppercase', letterSpacing: '0.05em' }}>TARGET</span>}
            <p style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: '4px', color: tier.color }}>{tier.tier}</p>
            <p style={{ color: '#e2e8f0', fontSize: '1rem', marginBottom: '12px' }}>{tier.price}</p>
            <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '12px' }}>{tier.includes}</p>
            <div style={{ padding: '12px', borderRadius: '10px', background: `${tier.color}06`, border: `1px solid ${tier.color}10` }}>
                <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: tier.color, marginBottom: '4px' }}>🧠 PSYCHOLOGY</p>
                <p style={{ color: '#94a3b8', fontSize: '0.825rem', margin: 0 }}>{tier.psychology}</p>
            </div>
        </div>
    );
}

/* ─────────────────────────────────────────────
   STYLES
───────────────────────────────────────────── */

const M4_STYLES = `
  .m4-demo-toggle {
    display: flex; gap: 4px; padding: 4px;
    background: rgba(255,255,255,0.03);
    border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);
    margin-bottom: 24px;
  }
  .m4-toggle-btn {
    flex: 1; padding: 10px 16px; border-radius: 10px;
    font-size: 0.85rem; font-weight: 600;
    cursor: pointer; border: none;
    background: transparent; color: #64748b;
    transition: all 0.2s ease;
  }
  .m4-toggle-btn.active {
    background: rgba(34,211,238,0.1);
    color: #22d3ee;
    box-shadow: 0 0 15px rgba(34,211,238,0.1);
  }
  .m4-toggle-btn:hover:not(.active) { color: #94a3b8; }
  @media (max-width: 640px) {
    .m4-demo-toggle { flex-direction: column; }
  }
`;

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

export default function Module4() {
    const [demoMode, setDemoMode] = useState<'website' | 'software'>('website');
    const currentSteps = demoMode === 'website' ? demoSteps : softwareDemoSteps;

    return (
        <div className="ql-training-content">
            <style>{M4_STYLES}</style>

            <div className="ql-section-header">
                <span className="ql-module-number">Module 04</span>
                <h2 className="ql-module-title">The Pitch &amp; Proposal</h2>
            </div>

            <p className="mb-8">Most reps lose the deal in the demo — not because the product is weak, but because they demo <em>features</em> instead of <em>outcomes</em>. Your demo is not a product tour. It is the final act of your Discovery.</p>

            {/* ── Demo Mode Toggle ── */}
            <div className="ql-card">
                <h3>The Demo Structure</h3>
                <p>Two demo flows — one for websites, one for system builds. Click each step to expand the script and pro tips.</p>

                <div className="m4-demo-toggle">
                    <button className={`m4-toggle-btn ${demoMode === 'website' ? 'active' : ''}`} onClick={() => setDemoMode('website')}>
                        🌐 Website Demo Flow
                    </button>
                    <button className={`m4-toggle-btn ${demoMode === 'software' ? 'active' : ''}`} onClick={() => setDemoMode('software')}>
                        🖥️ Software / System Demo Flow
                    </button>
                </div>

                <div style={{ display: 'grid', gap: '4px' }}>
                    {demoMode === 'website'
                        ? demoSteps.map((item, i) => <DemoStepCard key={`w-${i}`} item={item} />)
                        : softwareDemoSteps.map((item, i) => (
                            <div key={`s-${i}`} style={{ display: 'flex', gap: '1.25rem', padding: '16px', borderRadius: '14px', border: '1px solid transparent' }}>
                                <div style={{ flexShrink: 0, width: '2.5rem', height: '2.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '0.8rem', background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}>{item.step}</div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontWeight: 600, color: item.color, marginBottom: '4px', fontSize: '0.95rem' }}>{item.title}</p>
                                    <p style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: '10px' }}>{item.text}</p>
                                    <div className="ql-script-box" style={{ margin: 0 }}>{item.script}</div>
                                </div>
                            </div>
                        ))
                    }
                </div>

                {demoMode === 'software' && (
                    <div className="ql-tip-box" style={{ marginTop: '20px', marginBottom: 0 }}>
                        <h4>💡 The Critical Mindset Shift for System Builds</h4>
                        <p className="mb-0">In a website demo, you&rsquo;re showing <em>how it looks</em>. In a system demo, you&rsquo;re showing <em>how the business runs differently</em>. Every click should map to a time saved, an error eliminated, or a revenue outcome unlocked.</p>
                    </div>
                )}
            </div>

            {/* ── Connecting Pain to Solution ── */}
            <div className="ql-card">
                <h3>Connecting Pain to Solution (Pitch Script)</h3>
                <p>Don&rsquo;t just list features. Map our features directly to the specific pains they admitted to in Discovery.</p>
                <div className="ql-script-box">
                    &ldquo;You told me you&rsquo;re losing 10 hours a week on manual intake. The custom portal we build for you is going to completely automate that. A client fills out the form, and the system automatically generates an invoice and creates a project file. We give you those 10 hours back.&rdquo;
                </div>
            </div>

            {/* ── Proposal Mistakes Drill ── */}
            <div className="ql-card">
                <h3>Death by Proposal: Avoid These</h3>
                <p>Each of these errors can kill a deal. Know the mistake, why it kills, and the fix.</p>
                <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
                    {proposalMistakes.map((item, i) => {
                        const [open, setOpen] = useState(false);
                        return (
                            <div key={i} onClick={() => setOpen(!open)} style={{
                                padding: '16px', borderRadius: '12px', cursor: 'pointer',
                                background: open ? 'rgba(239,68,68,0.04)' : 'rgba(255,255,255,0.02)',
                                border: `1px solid ${open ? 'rgba(239,68,68,0.15)' : 'rgba(255,255,255,0.05)'}`,
                                transition: 'all 0.2s ease',
                            }}>
                                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                                    <span style={{ color: '#ef4444', flexShrink: 0, fontWeight: 700, fontSize: '1.1rem' }}>✗</span>
                                    <div style={{ flex: 1 }}>
                                        <p style={{ color: '#ef4444', fontWeight: 600, fontSize: '0.925rem', marginBottom: open ? '8px' : 0 }}>{item.mistake}</p>
                                        {open && (
                                            <div style={{ display: 'grid', gap: '8px' }}>
                                                <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}><strong style={{ color: '#f87171' }}>Why it kills:</strong> {item.why}</p>
                                                <div style={{ padding: '10px 14px', borderRadius: '8px', background: 'rgba(34,211,238,0.04)', border: '1px solid rgba(34,211,238,0.1)' }}>
                                                    <p style={{ color: '#22d3ee', fontSize: '0.8rem', fontWeight: 700, marginBottom: '2px' }}>✓ THE FIX</p>
                                                    <p style={{ color: '#94a3b8', fontSize: '0.85rem', margin: 0 }}>{item.fix}</p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <span style={{ color: '#475569', fontSize: '0.9rem', transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}>▾</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ── Pricing Psychology ── */}
            <div className="ql-card">
                <h3>Pricing Psychology: The Anchor &amp; Adjust Principle</h3>
                <p>Always present the highest option first. Every subsequent option feels like a better deal by comparison. Hover over each tier to see the psychology.</p>
                <div style={{ display: 'grid', gap: '14px', marginTop: '20px' }}>
                    {pricingTiers.map((tier, i) => (
                        <PricingTierCard key={i} tier={tier} index={i} />
                    ))}
                </div>
                <div className="ql-tip-box" style={{ marginTop: '24px', marginBottom: 0 }}>
                    <h4>💡 The Middle Tier Magnet</h4>
                    <p className="mb-0">Studies show 60–70% of prospects choose the middle option when presented with three tiers. Design your middle tier to be your most profitable. The top tier exists to make the middle look reasonable.</p>
                </div>
            </div>

            <div className="ql-tip-box">
                <h4>💡 Framing the Monthly Retainer</h4>
                <p className="mb-0">Never call it a &ldquo;maintenance fee.&rdquo; Call it a <strong>&ldquo;Dedicated Engineering Partner Plan.&rdquo;</strong> Reiterate that a junior in-house dev costs $80k/year. We give them an elite team for a fraction of that, fully managed.</p>
            </div>
        </div>
    );
}
