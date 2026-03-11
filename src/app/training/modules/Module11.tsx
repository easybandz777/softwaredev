'use client';
import React, { useState } from 'react';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const RETAINER_TIERS = [
    {
        name: 'Maintenance', price: '$500/mo', color: '#64748b',
        ideal: 'Starter-tier clients who only need hosting, updates, and minor changes.',
        includes: [
            'Hosting & domain management',
            'Security updates and backups',
            'Up to 2 hours of minor changes per month',
            'Uptime monitoring & alerts',
            'Monthly performance report',
        ],
        margin: 'High (85%+ margin — mostly automated)',
        talkTrack: `"This is the hands-off plan. We keep the lights on, handle security, and give you 2 hours of change requests per month. You never have to think about the tech. It's $500/month and you can cancel with 30 days notice."`,
    },
    {
        name: 'Growth Partner', price: '$1,000 – $2,000/mo', color: '#22d3ee',
        ideal: 'Growth-tier clients who need ongoing optimization, new features, and strategic support.',
        includes: [
            'Everything in Maintenance',
            '5-10 hours of development per month',
            'Conversion rate optimization (A/B testing)',
            'New feature development (prioritized backlog)',
            'Monthly strategy call (30 min)',
            'Priority response (within 4 business hours)',
            'Quarterly roadmap review',
        ],
        margin: 'Good (65-75% margin — balance of proactive and reactive work)',
        talkTrack: `"This is our most popular plan. You get a dedicated engineering partner who proactively optimizes your system every month. Think of it like having a fractional CTO. We'll do a monthly strategy call, I'll maintain a prioritized backlog of improvements, and you get 5-10 hours of dedicated dev time. Most clients in this tier see 20-40% improvement in their key metrics within the first 90 days."`,
    },
    {
        name: 'Embedded Partner', price: '$2,500 – $5,000+/mo', color: '#a78bfa',
        ideal: 'Enterprise-tier clients who treat you as their full technical team.',
        includes: [
            'Everything in Growth Partner',
            '15-30+ hours of development per month',
            'Dedicated Slack/Teams channel',
            'Same-day response SLA',
            'Full-stack development (new systems, integrations)',
            'Team training and documentation',
            'Bi-weekly strategy sessions',
            'Priority access for urgent requests',
        ],
        margin: 'Moderate (55-65% margin — high touch, high value)',
        talkTrack: `"At this level, we're essentially your technology department. I'm in your Slack, I'm in your planning meetings, and I'm building and maintaining everything that runs your digital operations. This isn't a vendor relationship — it's a partnership. We're priced at $2,500-$5,000/month depending on scope, and we grow with you."`,
    },
];

const TRANSITION_FRAMEWORK = [
    {
        phase: 'During Discovery', timing: 'Before the sale',
        action: 'Plant the retainer seed before they\'ve even bought the project.',
        script: `"Just so you know — the businesses that get the best results from what we build don't treat it as a one-time project. They treat it as an ongoing system that gets optimized every month. We'll talk about that later, but I want you to know upfront that this is a living system, not a static website."`,
        color: '#22d3ee',
    },
    {
        phase: 'During Delivery', timing: 'Weeks 2-3',
        action: 'Demonstrate value by proactively identifying improvements beyond scope.',
        script: `"I just noticed something while building your dashboard — your checkout flow has a 6-step process that could be reduced to 3. That's not in our current scope, but it's exactly the kind of thing I'd optimize in an ongoing partnership. I've added it to a list of opportunities I'll share with you at delivery."`,
        color: '#a78bfa',
    },
    {
        phase: 'At Delivery', timing: 'Launch day',
        action: 'Present the Phase 2 roadmap — a curated list of improvements that naturally leads to retainer.',
        script: `"Here's your system — it's live, it's performing. I've also put together a roadmap of 8 optimization opportunities I found during the build. These are things like [specific examples]. I recommend we tackle these over the next 90 days on a monthly partnership. Here's what that looks like..."`,
        color: '#22c55e',
    },
    {
        phase: '30 Days Post-Launch', timing: 'The retention close',
        action: 'Share performance data and use it to justify ongoing engagement.',
        script: `"Your system has been live for 30 days. Here are the numbers: [X] leads captured, [Y] bookings, [Z] seconds average response time. That's a [%] improvement over your previous setup. Now imagine what happens when we optimize the conversion rate on that intake form, add the follow-up SMS sequence, and integrate the review request system. That's what month 2 looks like."`,
        color: '#f59e0b',
    },
];

const MRR_MATH = [
    { clients: 5, avg: 1000, mrr: 5000, arr: 60000 },
    { clients: 10, avg: 1000, mrr: 10000, arr: 120000 },
    { clients: 15, avg: 1250, mrr: 18750, arr: 225000 },
    { clients: 20, avg: 1500, mrr: 30000, arr: 360000 },
    { clients: 30, avg: 1500, mrr: 45000, arr: 540000 },
];

const RETAINER_OBJECTIONS = [
    {
        objection: `"We don't need ongoing work after the site is built."`,
        response: `"I hear that a lot — and honestly, if it were a static brochure site, I'd agree. But what we built is a system that needs to evolve with your business. Your competitors are optimizing their funnels every month. Your Google rankings change quarterly. Your intake form conversion rate can always improve. The businesses that stagnate after launch get overtaken by the ones that optimize monthly. The retainer isn't about maintenance — it's about growth."`,
        reframe: 'Position the retainer as a growth engine, not a maintenance cost.',
    },
    {
        objection: `"Can we just call you when we need something?"`,
        response: `"Absolutely — but I want to be transparent about what that looks like. On-demand work is billed at $150-$200/hour with a 48-72 hour turnaround. On retainer, you're getting a lower effective rate, priority response times, and proactive optimization you wouldn't think to ask for. The retainer clients who see the biggest results aren't the ones asking for changes — they're the ones I'm proactively improving for."`,
        reframe: 'Compare on-demand hourly rate vs retainer rate to show the retainer is cheaper.',
    },
    {
        objection: `"$1,000/month is too much for what we need."`,
        response: `"Let me ask: what did we identify the broken intake process was costing you per month in lost leads? $4,000? $6,000? The retainer is the investment that makes sure that leak stays plugged — and we keep finding and fixing new ones every month. If the retainer generates one additional client per month at your average deal value, what's your ROI on that $1,000?"`,
        reframe: 'Anchor the retainer cost to the cost of inaction (COI) from discovery.',
    },
    {
        objection: `"We'll think about the retainer and get back to you."`,
        response: `"Totally fair. Here's what I'd suggest: let's do 60 days on the Growth Partner plan. If after 60 days you don't see measurable improvement in [key metric], you cancel — no hard feelings, no contract lock-in. I'm that confident in what we'll deliver. Would that remove the risk for you?"`,
        reframe: 'Offer a trial period to remove commitment fear.',
    },
];

const STICKY_FACTORS = [
    { factor: 'Monthly strategy call', why: 'Creates a recurring touchpoint. The client feels heard, you surface new opportunities, and they associate you with their growth trajectory.' },
    { factor: 'Performance reporting', why: 'Send a monthly report showing what improved, what was worked on, and what\'s next. Data justifies the invoice before they even think about it.' },
    { factor: 'Managed backlog', why: 'Maintain a visible list of upcoming improvements. When they can see 6 months of planned optimizations, canceling feels like leaving money on the table.' },
    { factor: 'Responsive communication', why: 'Reply within hours, not days. The #1 reason clients leave retainers is feeling ignored. Speed is a retention weapon.' },
    { factor: 'Proactive recommendations', why: 'Don\'t wait for them to ask. Send a monthly "I noticed this and here\'s what I\'d fix" message. It positions you as an active partner, not a passive vendor.' },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

export default function Module11() {
    const [selectedMrr, setSelectedMrr] = useState(1);

    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Module 11</span>
                <h2 className="ql-module-title">Retainer Sales &amp; Recurring Revenue</h2>
            </div>

            <p className="mb-10 text-gray-400 text-lg">
                One-time projects pay the bills. <strong className="text-white">Recurring revenue builds the business.</strong>{' '}
                A single retainer client at $1,500/mo is worth $18,000/year without ever re-selling.
                This module teaches you how to transition every project client into a retainer client —
                before they even finish the build.
            </p>

            {/* ── Section 1: Retainer Tiers ── */}
            <div className="ql-card">
                <h3>📊 The Retainer Tier System</h3>
                <p>Three tiers, three price points, three levels of involvement. Know which to recommend based on client size and needs.</p>
                <div className="mt-5 space-y-4">
                    {RETAINER_TIERS.map((tier, i) => (
                        <div key={i} className="p-5 rounded-xl" style={{
                            background: `${tier.color}06`, border: `1px solid ${tier.color}20`,
                        }}>
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                                <div>
                                    <span className="text-xs font-bold px-2 py-1 rounded mr-2" style={{ background: `${tier.color}15`, color: tier.color }}>{tier.name}</span>
                                    <span className="text-white font-bold text-lg">{tier.price}</span>
                                </div>
                                <span className="text-xs text-gray-500">{tier.margin}</span>
                            </div>
                            <p className="text-sm text-gray-400 mb-3">Ideal for: {tier.ideal}</p>
                            <ul className="space-y-1.5 mb-4">
                                {tier.includes.map((item, j) => (
                                    <li key={j} className="flex gap-2 items-start text-sm text-gray-300">
                                        <span style={{ color: '#34d399', flexShrink: 0, marginTop: '2px' }}>✓</span> {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="ql-script-box" style={{ margin: 0 }}>{tier.talkTrack}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Section 2: The Transition Framework ── */}
            <div className="ql-card">
                <h3>🔄 The 4-Phase Retainer Transition</h3>
                <p>The retainer conversation doesn&apos;t start at delivery — it starts in <strong>discovery</strong>. Here&apos;s the exact framework for planting the seed and converting naturally:</p>
                <div className="mt-5 space-y-4">
                    {TRANSITION_FRAMEWORK.map((phase, i) => (
                        <div key={i} className="rounded-xl overflow-hidden" style={{
                            background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                        }}>
                            <div className="px-5 py-3 flex items-center gap-3" style={{
                                borderBottom: '1px solid rgba(255,255,255,0.04)',
                            }}>
                                <span className="flex-shrink-0 w-7 h-7 rounded-full text-sm font-bold flex items-center justify-center" style={{
                                    background: `${phase.color}15`, color: phase.color,
                                }}>{i + 1}</span>
                                <div>
                                    <p className="text-white font-semibold text-sm mb-0">{phase.phase}</p>
                                    <p className="text-gray-500 text-xs mb-0">{phase.timing}</p>
                                </div>
                            </div>
                            <div className="px-5 py-4">
                                <p className="text-gray-300 text-sm mb-3">{phase.action}</p>
                                <div className="ql-script-box" style={{ margin: 0 }}>{phase.script}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Section 3: MRR Math ── */}
            <div className="ql-card">
                <h3>📈 The MRR Compound Effect</h3>
                <p>Retainers compound. Every client you add is permanent revenue you never have to re-sell. Select a scenario to see the math:</p>
                <div className="mt-4 flex flex-wrap gap-2 mb-5">
                    {MRR_MATH.map((row, i) => (
                        <button key={i} onClick={() => setSelectedMrr(i)}
                            className="px-4 py-2 rounded-lg text-sm font-bold transition-all"
                            style={{
                                background: selectedMrr === i ? 'rgba(34,211,238,0.1)' : 'rgba(255,255,255,0.03)',
                                color: selectedMrr === i ? '#22d3ee' : '#64748b',
                                border: `1px solid ${selectedMrr === i ? '#22d3ee' : 'rgba(255,255,255,0.08)'}`,
                            }}>
                            {row.clients} clients
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-4 rounded-xl text-center" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div className="text-2xl mb-1">👥</div>
                        <div className="text-xl font-bold text-cyan-400">{MRR_MATH[selectedMrr].clients}</div>
                        <div className="text-xs text-gray-500">Retainer Clients</div>
                    </div>
                    <div className="p-4 rounded-xl text-center" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div className="text-2xl mb-1">💰</div>
                        <div className="text-xl font-bold text-emerald-400">${MRR_MATH[selectedMrr].avg.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">Avg / Client</div>
                    </div>
                    <div className="p-4 rounded-xl text-center" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div className="text-2xl mb-1">📊</div>
                        <div className="text-xl font-bold text-violet-400">${MRR_MATH[selectedMrr].mrr.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">Monthly MRR</div>
                    </div>
                    <div className="p-4 rounded-xl text-center" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                        <div className="text-2xl mb-1">🏆</div>
                        <div className="text-xl font-bold text-amber-400">${MRR_MATH[selectedMrr].arr.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">Annual Revenue</div>
                    </div>
                </div>
                <div className="mt-5 p-5 rounded-xl text-center" style={{ background: 'rgba(34,211,238,0.04)', border: '1px solid rgba(34,211,238,0.12)' }}>
                    <p className="text-lg font-bold text-white mb-1">The Power of MRR</p>
                    <p className="text-gray-400 mb-0">
                        If you close <span className="text-cyan-400 font-bold">2 retainer clients per month</span> at{' '}
                        <span className="text-cyan-400 font-bold">$1,250 avg</span>, you hit{' '}
                        <span className="text-white font-bold">$30,000/mo recurring</span> within 12 months —
                        without ever re-selling a single one. That&apos;s{' '}
                        <span className="text-emerald-400 font-bold">$360,000/year</span> in base revenue.
                    </p>
                </div>
            </div>

            {/* ── Section 4: Retainer Objections ── */}
            <div className="ql-card">
                <h3>🛡️ Retainer Objection Playbook</h3>
                <p>These are the 4 most common objections to retainer engagement — and the exact scripts to handle each one.</p>
                <div className="mt-5 space-y-4">
                    {RETAINER_OBJECTIONS.map((obj, i) => (
                        <div key={i} className="rounded-xl overflow-hidden" style={{
                            background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                        }}>
                            <div className="px-5 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                                <span className="text-rose-300 font-semibold text-sm">&ldquo;{obj.objection.replace(/"/g, '')}&rdquo;</span>
                            </div>
                            <div className="px-5 py-4">
                                <p className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">Reframe: {obj.reframe}</p>
                                <div className="ql-script-box" style={{ margin: 0 }}>{obj.response}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Section 5: Sticky Factors ── */}
            <div className="ql-card" style={{ borderColor: 'rgba(52,211,153,0.2)' }}>
                <h3 style={{ color: '#34d399' }}>🧲 The 5 Sticky Factors (Why Clients Stay)</h3>
                <p>Selling the retainer is half the battle. Keeping them is the other half. These 5 factors are what prevent churn:</p>
                <div className="mt-4 space-y-3">
                    {STICKY_FACTORS.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start p-4 rounded-xl" style={{
                            background: 'rgba(52,211,153,0.03)', border: '1px solid rgba(52,211,153,0.1)',
                        }}>
                            <span className="flex-shrink-0 w-7 h-7 rounded-full text-sm font-bold flex items-center justify-center" style={{
                                background: 'rgba(52,211,153,0.15)', color: '#34d399',
                            }}>{i + 1}</span>
                            <div>
                                <p className="text-white font-semibold text-sm mb-1">{item.factor}</p>
                                <p className="text-gray-400 text-sm mb-0">{item.why}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ql-tip-box">
                <h4>💡 The Golden Rule of Retainers</h4>
                <p className="mb-0">
                    The best retainer clients are the ones who forgot what life was like before you.
                    When your system is so deeply embedded in their operations that removing it would be
                    unthinkable — that&apos;s not lock-in, that&apos;s value. Build so much value that
                    canceling feels like firing their best employee.
                </p>
            </div>
        </div>
    );
}
