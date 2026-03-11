'use client';
import React, { useState } from 'react';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

const TIER_PACKAGES = [
    {
        tier: 'Starter', price: '$2,500 – $4,000', color: '#64748b',
        ideal: 'Small business owners, solopreneurs, service providers who have NO web presence or a badly outdated one.',
        includes: [
            'Custom 5-7 page website (Next.js, mobile-first)',
            'Contact / booking form with email notifications',
            'Google Business Profile optimization',
            'Basic SEO (meta tags, sitemap, schema markup)',
            'Mobile responsive design',
            '30 days post-launch support',
        ],
        doesNot: [
            'Custom backend / admin portal',
            'Complex integrations (CRM, payment, etc.)',
            'Ongoing retainer or maintenance',
        ],
        talkTrack: `"Based on what you described, the core problem is that people can't find you or book with you. We'd build a focused 5-page site with a booking system and basic SEO. This is a one-time build in the $2,500–$4,000 range depending on design complexity. Typically takes 2-3 weeks from kickoff to launch."`,
    },
    {
        tier: 'Growth', price: '$5,000 – $10,000', color: '#22d3ee',
        ideal: 'Businesses doing $10K–$100K/mo that need automation, lead capture, and backend systems.',
        includes: [
            'Everything in Starter',
            'Custom CRM / admin dashboard',
            'Automated lead capture with SMS/email notifications',
            'Client portal (login, project status, documents)',
            'Payment / invoicing integration (Stripe)',
            'Analytics dashboard with conversion tracking',
            '60 days post-launch support',
            'Recommended retainer add-on',
        ],
        doesNot: [
            'Enterprise-level custom software',
            'Multiple user roles with complex permissions',
            'API integrations beyond 2-3 services',
        ],
        talkTrack: `"You're at a stage where manual processes are bleeding time and money. The system we'd build automates your intake, gives your clients a branded portal, and gives you a dashboard to track everything in real time. This is a $5K–$10K engagement depending on scope. Think of it as hiring a full-time developer for two months, except you keep the system forever."`,
    },
    {
        tier: 'Enterprise', price: '$10,000 – $25,000+', color: '#a78bfa',
        ideal: 'Established companies doing $100K+/mo that need custom internal software, complex integrations, or multi-user systems.',
        includes: [
            'Everything in Growth',
            'Custom internal operations software',
            'Multi-role access control (admin, manager, staff, client)',
            'Complex API integrations (5+ services)',
            'Inventory / project / resource management systems',
            'Custom reporting and analytics',
            'Data migration from legacy systems',
            'Dedicated support channel for 90 days',
            'Retainer engagement required',
        ],
        doesNot: [
            'This tier has no hard limits — scope is defined by the business problem',
        ],
        talkTrack: `"What you're describing isn't a website — it's a custom software system. We're building your company's operating infrastructure. This is a $10K–$25K+ engagement depending on the number of systems and integrations. I structure these in phases so you get value from day one and we build out complexity over time. Phase 1 usually lands in the $8K–$12K range."`,
    },
];

const THREE_OPTION_PSYCHOLOGY = [
    { label: 'Option A — "The Anchor"', description: 'Highest price, full scope. Most clients won\'t choose this, but it anchors the conversation high and makes Option B feel like a bargain.', color: '#a78bfa' },
    { label: 'Option B — "The Sweet Spot"', description: 'This is the option you actually want them to choose. It delivers maximum value at a profitable price point. Set it 1.5-2x Option C.', color: '#22d3ee' },
    { label: 'Option C — "The Entry Point"', description: 'Lowest price, reduced scope. This exists so the prospect doesn\'t have to say "no" — they can say "start here." It\'s your Phase 1 offer.', color: '#64748b' },
];

const PRICING_PRESENTATION_RULES = [
    { rule: 'Present three options, never one', why: 'A single price creates a binary decision (yes or no). Three options give them control and almost always move the conversation forward. They\'re choosing WHICH option, not WHETHER to buy.' },
    { rule: 'Always anchor with the highest option first', why: 'Price anchoring is the most powerful subconscious driver in negotiation. If you say "$15,000" first, "$7,000" sounds reasonable. If you start at "$7,000," it sounds expensive.' },
    { rule: 'Never flinch when you say the number', why: 'If you look uncomfortable saying "$8,000," the prospect will feel uncomfortable hearing it. Practice saying your pricing out loud, standing up, with downward vocal inflection, until it feels as natural as saying your name.' },
    { rule: 'Tie every dollar to a specific pain they named', why: '"The $5,000 build eliminates the 15 hours/week your team spends on manual invoicing." Make every line item a solution to a problem THEY identified in discovery. If you can\'t tie the cost to a pain, you didn\'t do enough discovery.' },
    { rule: 'Use "investment" — never "cost"', why: '"Cost" implies money leaving. "Investment" implies money coming back. Language frames perception. "The investment for Phase 1 is $4,500" vs "The cost is $4,500" — same number, different psychology.' },
    { rule: 'Present pricing AFTER the demo, never before', why: 'Pricing before value is built = sticker shock. Pricing after you\'ve shown them the future state and quantified the gap = obvious decision. The sequence matters more than the number.' },
];

const DEPOSIT_STRUCTURES = [
    { structure: '50% / 50%', when: 'Standard for projects under $5K', detail: '50% upfront to start. 50% at completion before launch. Simple, clean, and removes complexity.' },
    { structure: '40% / 30% / 30%', when: 'Projects $5K–$15K', detail: '40% to start. 30% at mid-project milestone (usually after design approval). 30% at completion. Gives the client checkpoints.' },
    { structure: '30% / 30% / 20% / 20%', when: 'Enterprise projects $15K+', detail: '4 milestones tied to specific deliverables. Each payment unlocks the next phase. Reduces client risk and matches the phased build approach.' },
    { structure: 'Phase Pricing', when: 'Complex or uncertain scope', detail: '"Let\'s price Phase 1 as a standalone deliverable at $X. Once Phase 1 is live and working, we\'ll scope Phase 2 together." Removes the commitment barrier entirely.' },
];

const PRICING_MISTAKES = [
    { mistake: 'Discounting before being asked', why: 'If you preemptively drop your price, you signal that the original price wasn\'t real. Never offer discounts — let them ask. Even then, remove scope instead of cutting price.' },
    { mistake: 'Quoting on the first call', why: 'Pricing before discovery is gambling. You\'ll either price too low (leaving money on the table) or too high (killing the deal). Always: discovery → demo → proposal. Never: hello → price.' },
    { mistake: 'Sending a PDF proposal without a walkthrough', why: 'A PDF sent cold has a <2% conversion rate. A PDF walked through live has a 40%+ conversion rate. The proposal is a conversation tool, not a leaving-behind document.' },
    { mistake: 'Itemizing every line (labor, hours, etc.)', why: 'Itemized quotes invite line-item negotiation. "Why does design cost $2,000? My nephew can do that for $200." Price by outcome and deliverable, never by hour or task.' },
    { mistake: 'Using hourly rates', why: 'Hourly pricing punishes efficiency. If you build in 20 hours what others build in 80, you get paid 4x less. Price by value delivered, not time spent. Never reveal your hourly rate.' },
];

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

function TierCard({ tier }: { tier: typeof TIER_PACKAGES[0] }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="ql-card" style={{ padding: 0, overflow: 'hidden', borderColor: `${tier.color}20` }}>
            <button onClick={() => setOpen(!open)} className="w-full text-left p-6" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: `${tier.color}15`, color: tier.color }}>{tier.tier}</span>
                    <span style={{ color: tier.color, fontWeight: 800, fontSize: '1.1rem' }}>{tier.price}</span>
                </div>
                <p className="text-sm text-gray-400 mb-0">{tier.ideal}</p>
            </button>
            {open && (
                <div className="px-6 pb-6" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                    <h4 className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3 mt-4">Includes:</h4>
                    <ul className="space-y-2 mb-5">
                        {tier.includes.map((item, i) => (
                            <li key={i} className="flex gap-2 items-start text-sm text-gray-300">
                                <span style={{ color: '#34d399', flexShrink: 0 }}>✓</span> {item}
                            </li>
                        ))}
                    </ul>
                    <h4 className="text-rose-400 text-xs font-bold uppercase tracking-wider mb-3">Does NOT include:</h4>
                    <ul className="space-y-2 mb-5">
                        {tier.doesNot.map((item, i) => (
                            <li key={i} className="flex gap-2 items-start text-sm text-gray-500">
                                <span style={{ color: '#ef4444', flexShrink: 0 }}>✗</span> {item}
                            </li>
                        ))}
                    </ul>
                    <h4 className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">Talk Track:</h4>
                    <div className="ql-script-box">{tier.talkTrack}</div>
                </div>
            )}
        </div>
    );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

export default function Module10() {
    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Module 10</span>
                <h2 className="ql-module-title">Pricing &amp; Packaging</h2>
            </div>

            <p className="mb-10 text-gray-400 text-lg">
                Most reps lose deals not because they can&apos;t sell — but because they don&apos;t know how to{' '}
                <strong className="text-white">price, package, and present the investment</strong> with confidence.
                This module gives you the exact framework for structuring, presenting, and closing pricing conversations.
            </p>

            {/* ── Section 1: Product Tiers ── */}
            <div className="ql-card">
                <h3>📦 The Three-Tier Product Matrix</h3>
                <p>
                    Every deal fits into one of three tiers. Know each one cold — what&apos;s included, what&apos;s not,
                    and the exact talk track to present it. Click each tier to expand.
                </p>
                <div className="mt-4 space-y-3">
                    {TIER_PACKAGES.map((tier, i) => <TierCard key={i} tier={tier} />)}
                </div>
            </div>

            {/* ── Section 2: Three-Option Close ── */}
            <div className="ql-card">
                <h3>🎯 The Three-Option Close</h3>
                <p>
                    Never present a single price. Always give three options. This is decoy pricing psychology —
                    the middle option is designed to feel perfect because the top option anchors high and the bottom
                    option signals sacrifice.
                </p>
                <div className="mt-4 space-y-3">
                    {THREE_OPTION_PSYCHOLOGY.map((opt, i) => (
                        <div key={i} className="p-5 rounded-xl flex gap-4 items-start" style={{
                            background: `${opt.color}06`, border: `1px solid ${opt.color}20`,
                        }}>
                            <span className="flex-shrink-0 w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center" style={{
                                background: `${opt.color}15`, color: opt.color,
                            }}>{String.fromCharCode(65 + i)}</span>
                            <div>
                                <p className="text-white font-semibold text-sm mb-1">{opt.label}</p>
                                <p className="text-gray-400 text-sm mb-0">{opt.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="ql-script-box mt-6">
                    &ldquo;I&apos;ve put together three options based on everything we discussed. Option A is the full buildout
                    at $12,000 — everything we talked about plus ongoing optimization. Option B is the core system at $7,500,
                    which solves the intake, portal, and automation problems. And Option C is a Phase 1 at $3,500 that gets
                    your lead capture and booking system live within two weeks. Which of those feels like the right fit?&rdquo;
                </div>
                <div className="ql-tip-box mt-6 mb-0">
                    <h4>💡 The Price Sandwich</h4>
                    <p className="mb-0">
                        Always present in this order: <strong>Option A (highest) → Option C (lowest) → Option B (middle)</strong>.
                        This forces Option B to be the last thing they heard — and the one that feels &quot;just right&quot;
                        after hearing the extremes.
                    </p>
                </div>
            </div>

            {/* ── Section 3: Presentation Rules ── */}
            <div className="ql-card">
                <h3>🗣️ The 6 Pricing Presentation Rules</h3>
                <p>Break any of these and you&apos;ll either leave money on the table or kill the deal at the 1-yard line.</p>
                <div className="mt-4 space-y-3">
                    {PRICING_PRESENTATION_RULES.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start p-4 rounded-xl" style={{
                            background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                        }}>
                            <span className="flex-shrink-0 w-7 h-7 rounded-full text-sm font-bold flex items-center justify-center" style={{
                                background: 'rgba(34,211,238,0.15)', color: '#22d3ee',
                            }}>{i + 1}</span>
                            <div>
                                <p className="text-white font-semibold text-sm mb-1">{item.rule}</p>
                                <p className="text-gray-400 text-sm mb-0">{item.why}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Section 4: Deposit Structures ── */}
            <div className="ql-card">
                <h3>💳 Deposit &amp; Payment Structures</h3>
                <p>
                    The deposit structure signals confidence. A confident rep presents clear payment terms without
                    hesitation. Here are the standard models by deal size:
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {DEPOSIT_STRUCTURES.map((item, i) => (
                        <div key={i} className="p-5 rounded-xl" style={{
                            background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)',
                        }}>
                            <p className="text-emerald-400 font-bold text-lg mb-1">{item.structure}</p>
                            <p className="text-xs font-bold px-2 py-1 rounded inline-block mb-3" style={{
                                background: 'rgba(34,211,238,0.08)', color: '#22d3ee',
                            }}>{item.when}</p>
                            <p className="text-gray-400 text-sm mb-0">{item.detail}</p>
                        </div>
                    ))}
                </div>
                <div className="ql-script-box mt-6">
                    &ldquo;Here&apos;s how we structure payments: 40% to kick off the project — that secures your build slot
                    and funds the initial design phase. 30% at the mid-project milestone when we present the first working
                    prototype. And 30% at completion before we push to production. You approve at every stage before the
                    next payment is due. Sound fair?&rdquo;
                </div>
            </div>

            {/* ── Section 5: Pricing Mistakes ── */}
            <div className="ql-card" style={{ borderColor: 'rgba(239,68,68,0.2)' }}>
                <h3 style={{ color: '#f87171' }}>🚫 The 5 Pricing Mistakes That Kill Deals</h3>
                <p>Every one of these mistakes costs you either money or deals. Study them.</p>
                <div className="mt-4 space-y-3">
                    {PRICING_MISTAKES.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start p-4 rounded-xl" style={{
                            background: 'rgba(239,68,68,0.03)', border: '1px solid rgba(239,68,68,0.1)',
                        }}>
                            <span className="flex-shrink-0 w-7 h-7 rounded-full text-sm font-bold flex items-center justify-center" style={{
                                background: 'rgba(239,68,68,0.15)', color: '#f87171',
                            }}>✗</span>
                            <div>
                                <p className="text-white font-semibold text-sm mb-1">{item.mistake}</p>
                                <p className="text-gray-400 text-sm mb-0">{item.why}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ql-tip-box">
                <h4>💡 The Bottom Line</h4>
                <p className="mb-0">
                    Your price is a signal. If you present it weakly, they think you&apos;re overcharging.
                    If you present it confidently, they think they&apos;re getting a deal.
                    The number hasn&apos;t changed — your energy did. Master the presentation, and the number sells itself.
                </p>
            </div>
        </div>
    );
}
