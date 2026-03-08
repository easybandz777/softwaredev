import React from "react";
import { ArrowRight } from "lucide-react";

interface Props {
    onStartTest: () => void;
}

export default function Module7({ onStartTest }: Props) {
    const onboardingSteps = [
        { step: "01", time: "Within 1 Hour", color: '#22d3ee', action: "Send the Premium Welcome Email", detail: "Confirm the deposit received, introduce the project, and set the tone. This is the first impression post-sale. Make it feel like they just joined something elite." },
        { step: "02", time: "Within 24 Hours", color: '#22d3ee', action: "Send the Onboarding Questionnaire", detail: "Get brand assets, logins, content, and their client's perspective on the company. Use a clean form link — not a messy email chain." },
        { step: "03", time: "Within 48 Hours", color: '#a78bfa', action: "Hold the Strategy Kick-Off Call", detail: "Map out scope, timeline, and milestones. Share your screen and walk through the project plan live. Give them a Loom recording of the call immediately after." },
        { step: "04", time: "Week 1", color: '#a78bfa', action: "Deliver the First Visible Win", detail: "Show something real — a wireframe, a staging environment, a first design comp. A fast first delivery prevents buyer's remorse from taking root." },
        { step: "05", time: "Week 2–4", color: '#34d399', action: "Weekly Progress Updates", detail: "Send a short Loom video every Friday showing exactly what was built, what's next, and any blockers. Clients who see progress don't chase you." },
    ];

    const retentionTactics = [
        {
            title: "The 30-Day Pulse Check",
            icon: "📊",
            script: `"Hey [Name] — 30 days in. I want to make sure the system is performing the way we designed it to. Do you have 15 minutes this week so I can walk you through the analytics and show you what's working and what we can tighten up?"`,
            why: "Positions you as a proactive partner, not a vendor who disappears post-launch."
        },
        {
            title: "The Upsell Ladder",
            icon: "📈",
            script: `"The core system is running great. I was reviewing your analytics this week and noticed your referral traffic is converting at 40% lower than direct. We could build a custom referral dashboard and automated loyalty email in about 2 weeks. Want me to scope it?"`,
            why: "Only upsell when you can show a data-backed reason. Never pitching for its own sake."
        },
        {
            title: "The Referral Ask (30-Day Mark)",
            icon: "🤝",
            script: `"Hey [Client Name], really glad the system is working so well. Quick ask — do you know 2 or 3 other business owners in your network who are still running on outdated processes or an old site? If you make an intro and they become clients, we'll extend your plan at no cost for 2 months."`,
            why: "Referral incentives work best when the client is at their happiest — 30 days post-launch."
        },
        {
            title: "The Renewal Conversation (Month 10)",
            icon: "🔒",
            script: `"We're coming up on our one-year mark next month. I've put together a summary of results — [X] leads generated, [Y] hours saved, [Z] ROI. I'd love to lock in your plan for year two and actually have a conversation about where we take this next."`,
            why: "Frame renewal as a natural progression, not a sales call. Present the results first, then the ask."
        },
    ];

    const buyersRemorseKillers = [
        { action: "Send a congratulatory message immediately", detail: "\"You made a great decision. Here's exactly what happens next.\"" },
        { action: "Give them something tangible within 24 hours", detail: "A project doc, a Loom, a first draft — something to look at and share." },
        { action: "Over-communicate for the first two weeks", detail: "Brief daily or every-other-day updates. They can always ask for less." },
        { action: "Name the timeline explicitly", detail: "\"Go-live is [specific date]. Here's the milestone map between now and then.\"" },
    ];

    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Module 07</span>
                <h2 className="ql-module-title">Post-Close: Onboarding & Retention</h2>
            </div>

            <p className="mb-8">The card is charged. The deal is done. Most reps disappear — and most clients start having second thoughts. The elite rep understands that the <strong>real sale begins at the signature</strong>. A premium delivery experience is your best marketing.</p>

            <div className="ql-card">
                <h3>🛡️ Killing Buyer's Remorse Before It Starts</h3>
                <p>Buyer's remorse peaks in the 6–48 hours after payment. Here's how you prevent it from taking root.</p>
                <div className="mt-5 grid gap-3">
                    {buyersRemorseKillers.map((item, i) => (
                        <div key={i} className="flex gap-4 items-start p-4 rounded-xl" style={{ background: 'rgba(34,211,238,0.03)', border: '1px solid rgba(34,211,238,0.08)' }}>
                            <span className="flex-shrink-0 w-7 h-7 rounded-full font-bold text-xs flex items-center justify-center" style={{ background: 'rgba(34,211,238,0.15)', color: '#22d3ee' }}>{i + 1}</span>
                            <div>
                                <p className="text-white font-semibold text-sm mb-1">{item.action}</p>
                                <p className="text-gray-500 text-xs italic mb-0">{item.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ql-card">
                <h3>🚀 The 5-Step Premium Onboarding Protocol</h3>
                <p>A great onboarding experience converts a one-time client into a long-term retainer and a referral source. Execute this with precision.</p>
                <div className="mt-6 grid gap-6">
                    {onboardingSteps.map((item, i) => (
                        <div key={i} className="flex gap-5">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}>{item.step}</div>
                            <div style={{ flex: 1 }}>
                                <div className="flex items-center gap-2 mb-1">
                                    <p className="font-semibold mb-0" style={{ color: item.color }}>{item.action}</p>
                                    <span className="text-xs px-2 py-0.5 rounded font-mono" style={{ background: `${item.color}10`, color: item.color }}>{item.time}</span>
                                </div>
                                <p className="text-gray-400 text-sm mb-0">{item.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ql-card">
                <h3>💰 Retention & Growth Tactics</h3>
                <p>Your existing clients are your most valuable asset. The cost of acquiring a new client is 5–7x the cost of retaining one.</p>
                <div className="mt-6 grid gap-6">
                    {retentionTactics.map((item, i) => (
                        <div key={i} className="p-5 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)' }}>
                            <p className="font-bold text-white mb-1">{item.icon} {item.title}</p>
                            <div className="ql-script-box my-3">{item.script}</div>
                            <p className="text-gray-500 text-xs mb-0"><strong className="text-gray-400">Why it works:</strong> {item.why}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ql-tip-box">
                <h4>💡 The Rep's Creed</h4>
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
                        You&rsquo;ve completed all 7 core modules. Now test your knowledge with the official certification exam.
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
