import React from "react";

export default function Module4() {
    const demoSteps = [
        { step: "01", title: "Recap Their Pain (2 min)", color: '#22d3ee', text: "Open by summarizing back exactly what they told you in discovery. Word for word. \"Before I show you anything, I want to make sure I understood what you told me last week...\"" },
        { step: "02", title: "Show the Current State (2 min)", color: '#22d3ee', text: "Pull up their actual website or current process on screen. Make the pain visible and real. Running PageSpeed Insights live is devastating." },
        { step: "03", title: "Show the Future State (10 min)", color: '#a78bfa', text: "Show a comparable build. Walk through the new flow step-by-step, narrating the outcome at each step. Map every feature to a specific pain point they mentioned." },
        { step: "04", title: "Quantify the Gap (3 min)", color: '#a78bfa', text: "\"In your current setup, that lead waited 6 hours. In this system, they get a response in 60 seconds. You told me you're losing 3 leads per week. That's a $45,000/month gap this closes.\"" },
        { step: "05", title: "The Soft Ask (2 min)", color: '#f8fafc', text: "\"Based on what you just saw — does this solve the problem we talked about? What questions do you have before we discuss next steps?\" Then go quiet." }
    ];

    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Module 04</span>
                <h2 className="ql-module-title">The Pitch & Proposal</h2>
            </div>

            <p className="mb-8">Most reps lose the deal in the demo — not because the product is weak, but because they demo <em>features</em> instead of <em>outcomes</em>. Your demo is not a product tour. It is the final act of your Discovery.</p>

            <div className="ql-card">
                <h3>The 5-Part Demo Structure</h3>
                <div className="mt-4 grid gap-5">
                    {demoSteps.map((item, i) => (
                        <div key={i} className="flex gap-5">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}>{item.step}</div>
                            <div style={{ flex: 1 }}>
                                <p className="font-semibold mb-2" style={{ color: item.color }}>{item.title}</p>
                                <p className="text-gray-400 text-sm mb-0">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ql-card">
                <h3>Connecting Pain to Solution (Pitch Script)</h3>
                <p>Don&rsquo;t just list features. Map our features directly to the specific pains they admitted to in Discovery.</p>
                <div className="ql-script-box">
                    &ldquo;You told me you&rsquo;re losing 10 hours a week on manual intake. The custom portal we build for you is going to completely automate that. A client fills out the form, and the system automatically generates an invoice and creates a project file. We give you those 10 hours back.&rdquo;
                </div>
            </div>

            <div className="ql-card">
                <h3>Death by Proposal: What to Avoid</h3>
                <div className="mt-4 grid gap-4">
                    {[
                        ["Sending a proposal without a verbal commitment", "A proposal should confirm a decision already emotionally made, not start one."],
                        ["Generic pricing without context", "Listing '$5,000' with no ROI framing is a price tag on a product, not an investment pitch."],
                        ["More than 2 pages", "Every additional page is an opportunity for them to overthink and find a reason to stall."],
                        ["Following up with 'Just checking in'", "This is the single most damaging follow-up phrase in existence. It signals you have no leverage."]
                    ].map(([title, desc], i) => (
                        <div key={i} className="flex gap-3 items-start p-3 rounded-lg" style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.1)' }}>
                            <span className="text-red-400 flex-shrink-0 font-bold text-lg">✗</span>
                            <div>
                                <p className="text-red-400 font-semibold text-sm mb-1">{title}</p>
                                <p className="text-gray-500 text-sm mb-0">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ql-card">
                <h3>Pricing Psychology: The Anchor & Adjust Principle</h3>
                <p>Always present the highest option first. Every subsequent option feels like a better deal by comparison.</p>
                <div className="mt-5 grid gap-4">
                    {[
                        { tier: "Enterprise", price: "$12,000 build + $1,800/mo", color: '#a78bfa', anchor: true },
                        { tier: "Growth", price: "$5,500 build + $950/mo", color: '#22d3ee', anchor: false },
                        { tier: "Starter", price: "$2,200 build + $450/mo", color: '#94a3b8', anchor: false }
                    ].map((tier, i) => (
                        <div key={i} className="p-5 rounded-xl relative" style={{ background: i === 0 ? 'rgba(167,139,250,0.05)' : 'rgba(255,255,255,0.02)', border: `1px solid ${tier.color}25` }}>
                            {tier.anchor && <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded font-bold" style={{ background: 'rgba(167,139,250,0.15)', color: '#a78bfa' }}>ANCHOR</span>}
                            <p className="font-bold text-lg mb-1" style={{ color: tier.color }}>{tier.tier}</p>
                            <p className="text-gray-400 text-sm mb-0">{tier.price}</p>
                        </div>
                    ))}
                </div>
                <div className="ql-tip-box mt-6 mb-0"><h4>💡 The Middle Tier Magnet</h4><p className="mb-0">Studies show 60–70% of prospects choose the middle option when presented with three tiers. Design your middle tier to be your most profitable.</p></div>
            </div>

            <div className="ql-tip-box">
                <h4>💡 Framing the Monthly Retainer</h4>
                <p className="mb-0">Never call it a &ldquo;maintenance fee.&rdquo; Call it a <strong>&ldquo;Dedicated Engineering Partner Plan.&rdquo;</strong> Reiterate that a junior in-house dev costs $80k/year. We give them an elite team for a fraction of that, fully managed.</p>
            </div>
        </div>
    );
}
