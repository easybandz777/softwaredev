import React from "react";

const closes = [
    {
        title: "The Takeaway Close",
        desc: "When someone is hesitant, create scarcity by gently pulling the offer away. Works best with responsive but indecisive prospects.",
        script: '"I want to be real with you — we only take on 3 new builds per month so we can give each client our full attention. We have one slot left for this month and two other conversations happening right now. I don\'t want to pressure you, but I also don\'t want you to miss the window if this is something you genuinely want to do."'
    },
    {
        title: "The Assumption Close",
        desc: "Act as if the decision has already been made and begin discussing next steps. Momentum is everything — a prospect in motion tends to stay in motion.",
        script: '"Great — so the way we\'ll start is a 90-minute strategy session where we map out the full build. I typically have openings on Tuesdays and Thursdays. Which works better for your schedule?"'
    },
    {
        title: "The Sharp Angle Close",
        desc: "When a prospect makes a conditional request, close on the condition immediately.",
        script: 'Prospect: "If you could get us live in 6 weeks, I\'d sign today."\n\nRep: "If I confirmed a 6-week delivery timeline in writing — are we moving forward today?"\n\n[Pause. Let them say yes. Then immediately go to contract.]'
    },
    {
        title: "The Social Proof Pyramid Close",
        desc: "Stack three relevant proof points from similar clients right before asking for the business. Hit the same industry, same problem, same size.",
        script: '"I want to share three quick things. A fitness studio in Denver — we built their booking system, they went from 40% capacity to 90% in 4 months. A law firm in Phoenix — we cut their intake time from 8 hours to 12 minutes, they signed 3 more cases in month one. A contractor here in Dallas — they stopped using HomeAdvisor completely because our system was generating them qualified leads directly. You\'re all in the same boat they were in. The question is: how fast do you want to get out of it?"'
    },
    {
        title: "The Ben Franklin Close",
        desc: "When truly undecided, walk them through the decision analytically. Works exceptionally well with analytical founders.",
        script: '"Let\'s do this together — take a piece of paper. On one side write every reason this investment makes sense. On the other side, write every reason not to do it. I\'ll help with both sides. Usually when people do this exercise the answer becomes obvious pretty quickly."',
        tip: "When helping them list reasons NOT to do it, only bring up solvable objections — timing, price concerns — not legitimate deal-breakers. You're building the case for them while appearing balanced."
    }
];

const mantras = [
    "I am not selling. I am diagnosing. Sick businesses need prescriptions.",
    "Every no is filtering me toward the yes. I am grateful for both.",
    "The prospect's objection is data, not rejection. I will get curious, not defensive.",
    "I know something they do not: what their business could look like in 90 days.",
    "I will ask the uncomfortable question because that's what they're paying a consultant to do.",
    "Silence is not awkward — it's productive. I will let it work for me.",
    "My confidence is the product. If I don't believe it, neither will they."
];

export default function BonusE() {
    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Bonus Module E</span>
                <h2 className="ql-module-title">Advanced Closing Techniques</h2>
            </div>
            {closes.map((c, i) => (
                <div key={i} className="ql-card">
                    <h3>{c.title}</h3>
                    <p>{c.desc}</p>
                    <div className="ql-script-box" style={{ whiteSpace: 'pre-line' }}>{c.script}</div>
                    {c.tip && <div className="ql-tip-box mt-4 mb-0"><h4>💡 Pro Tip</h4><p className="mb-0">{c.tip}</p></div>}
                </div>
            ))}

            <div className="ql-card" style={{ marginBottom: '60px' }}>
                <h3 className="text-center text-2xl mb-8">⚡ Daily Mindset Reps</h3>
                <p className="text-center mb-8">Say these out loud before every prospecting session. The internal frame controls the external performance.</p>
                <div className="grid gap-4">
                    {mantras.map((mantra, i) => (
                        <div key={i} className="flex gap-4 items-start p-4 rounded-xl" style={{ background: 'rgba(34,211,238,0.03)', border: '1px solid rgba(34,211,238,0.08)' }}>
                            <span className="text-cyan-400 font-bold text-lg flex-shrink-0">{i + 1}.</span>
                            <p className="text-gray-300 mb-0 italic leading-relaxed">&ldquo;{mantra}&rdquo;</p>
                        </div>
                    ))}
                </div>
                <p className="text-center text-lg mt-12 text-cyan-400 font-semibold">
                    The QuantLab rep who masters this document<br />doesn&rsquo;t have a job. They have a license to print money.
                </p>
            </div>
        </div>
    );
}
