import React from "react";

const dialogLines = [
    { speaker: 'REP', color: '#22d3ee', text: "Hey Mark, appreciate you taking the time. I'll keep this tight. Before I say anything about us — I want to understand your world. Can you walk me through what happens right now when someone fills out the contact form on your site?" },
    { speaker: 'MARK', color: '#a78bfa', text: "Sure. It sends an email to our receptionist. She reviews it, enters it into our case management system, calls the potential client, and if they're a good fit she schedules a consultation." },
    { speaker: 'REP', color: '#22d3ee', text: "Got it. How long does that whole loop take from form submission to first contact?" },
    { speaker: 'MARK', color: '#a78bfa', text: "Honestly? Could be 4–6 hours if she's busy. Sometimes next morning." },
    { speaker: 'REP', color: '#22d3ee', text: "And in personal injury — what happens to a lead that calls four other firms in that 4–6 hour window?" },
    { speaker: 'MARK', color: '#a78bfa', text: "...They're probably gone. We lose a few every week I'm sure." },
    { speaker: 'REP', color: '#22d3ee', text: "What's your average case value, roughly?" },
    { speaker: 'MARK', color: '#a78bfa', text: "Depends. Anywhere from $8,000 to $40,000 contingency fee. Average maybe $15,000." },
    { speaker: 'REP', color: '#22d3ee', text: "So if you're losing two leads a week to slow follow-up — that's conservatively $1.5 million a year slipping through your receptionist's inbox. Does that math sound right?" },
    { speaker: 'MARK', color: '#a78bfa', text: "...Yeah that's probably fair. I hadn't looked at it that way." },
    { speaker: 'REP', color: '#22d3ee', text: "Here's what we'd build. The moment someone submits your form, they get an automated text within 60 seconds — personal-sounding, from your firm's number. It qualifies them with 2 quick questions and books them into your calendar directly. Your receptionist's inbox is now only for qualified cases. Want me to show you exactly what that looks like?" }
];

const debrief = [
    "Rep never pitched QuantLab until minute 9.",
    "Used the prospect's own numbers to build the case — rep never invented the $1.5M figure, Mark did.",
    "Every question was engineered to get deeper into pain, not to showcase features.",
    "The demo offer at the end was the softest possible close — low resistance, high momentum."
];

export default function BonusD() {
    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Bonus Module D</span>
                <h2 className="ql-module-title">Full Discovery Call Roleplay</h2>
            </div>
            <p className="mb-8">Study this call from start to finish. This is what a textbook QuantLab discovery call looks like with a law firm owner. Notice how we never pitch — we pull the solution out of the prospect.</p>

            <div className="ql-card" style={{ borderColor: 'rgba(34,211,238,0.2)' }}>
                <h3 className="text-cyan-400">Prospect: Personal Injury Law Firm, $1.8M revenue, 12 employees</h3>
                <p>Scenario: Cold LinkedIn message → call booked → 30-minute discovery call</p>
                <div className="mt-6 space-y-6">
                    {dialogLines.map((line, i) => (
                        <div key={i} className="flex gap-4">
                            <div className="flex-shrink-0 w-16 pt-1">
                                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: line.color }}>{line.speaker}</span>
                            </div>
                            <p className="text-gray-300 flex-1 text-sm leading-relaxed mb-0 italic">{line.text}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 p-5 rounded-xl" style={{ background: 'rgba(34,211,238,0.05)', border: '1px solid rgba(34,211,238,0.15)' }}>
                    <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">Debrief: What Happened Here</p>
                    <ul style={{ color: '#94a3b8', marginLeft: '20px', listStyleType: 'disc', lineHeight: 2, fontSize: '0.95rem' }}>
                        {debrief.map((d, i) => <li key={i}><strong className="text-gray-300">{d.split(' ')[0] === 'Rep' ? <span className="text-cyan-400">Rep</span> : null}{' '}</strong>{d.replace('Rep ', '')}</li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}
