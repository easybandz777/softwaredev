import React from "react";

export default function BonusC() {
    const sections = [
        {
            label: "🔍 Diagnostic Questions (Use in Discovery)",
            color: '#22d3ee',
            questions: [
                "If you could wave a magic wand and fix one thing in your business tomorrow, what would it be?",
                "Where does your biggest bottleneck sit right now — sales, delivery, or admin?",
                "If your lead flow doubled overnight, would your current system handle it?",
                "When was the last time a client had a frustrating experience because of your process, not your product?",
                "What are you doing manually right now that you know should be automated?",
                "If your top employee left next week, what would break first?",
                "How many hours a week does your team spend on tasks that generate zero revenue?",
                "Are there deals you know you're losing but can't pinpoint exactly why?"
            ]
        },
        {
            label: "📊 Business Intelligence Questions (Use to Qualify and Build COI)",
            color: '#a78bfa',
            questions: [
                "What's your average transaction or project value?",
                "How many new leads do you get in a week, and what percentage do you close?",
                "What does it cost you in time and payroll for one manual intake process soup to nuts?",
                "If conversion went up by even 10%, what would that mean for your annual revenue?",
                "What's the longest a lead has ever sat untouched in your pipeline?",
                "What's it cost you when a client churns within the first 90 days?",
                "How long has this specific problem been going on? Why hasn't it been fixed yet?"
            ]
        },
        {
            label: "🤝 Rapport & Buying Motive Questions (Use Sparingly, With Trust Built)",
            color: '#f59e0b',
            questions: [
                "What does winning look like for your business in the next 3 years?",
                "What does this business need to look like for you to feel like you made it?",
                "What would have to change for you to feel fully confident in your digital infrastructure?",
                "Is this a business you're planning to scale and potentially sell someday?",
                "What's kept you from solving this problem before now?",
                "If we got this right, how much time would you personally get back in your week?"
            ]
        },
        {
            label: "🔒 Trial Close / Commitment Questions (Use at the End of Discovery)",
            color: '#22c55e',
            questions: [
                "Based on everything we've just discussed, does this feel like the direction you want to go?",
                "On a scale of 1–10, how urgent is solving this for you right now?",
                "If we could get this wrapped in 4 weeks, is there any reason that wouldn't work for you?",
                "What would need to be true for you to feel completely comfortable moving forward?",
                "Is there anyone else who would need to be part of this decision?",
                "If the proposal comes in within your range, what's our next step?"
            ]
        }
    ];

    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Bonus Module C</span>
                <h2 className="ql-module-title">Power Questions Bank</h2>
            </div>
            <p className="mb-8">Memorize these. Questions are your primary tool. The rep who controls the questions controls the conversation. A salesman talks; a consultant asks.</p>
            {sections.map((section, si) => (
                <div key={si} className="ql-card">
                    <h3 style={{ color: section.color }}>{section.label}</h3>
                    <ul className="mt-4 space-y-3">
                        {section.questions.map((q, qi) => (
                            <li key={qi} className="flex gap-3 items-start p-3 rounded-lg" style={{ background: `${section.color}05`, border: `1px solid ${section.color}15` }}>
                                <span className="flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center" style={{ background: `${section.color}15`, color: section.color }}>{qi + 1}</span>
                                <p className="text-gray-300 text-sm mb-0">&ldquo;{q}&rdquo;</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
