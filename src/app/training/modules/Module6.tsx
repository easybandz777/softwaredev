import React from "react";
import { ArrowRight } from "lucide-react";

interface Props {
    onStartTest: () => void;
}

export default function Module6({ onStartTest }: Props) {
    const objections = [
        {
            obj: '"It\'s too expensive."',
            script: '"I understand it\'s an investment. But we just agreed your current setup is costing you $5,000 a month in lost deals. This system pays for itself in exactly 45 days. Why delay fixing a leak in your boat?"'
        },
        {
            obj: '"We use WordPress/Wix, it\'s fine."',
            script: '"If you want to stay a small business, Wix is fine. If you want to scale to 8 figures, you need custom infrastructure. We build the digital assets that allow you to scale without breaking. Are you ready to scale?"'
        },
        {
            obj: '"My nephew/buddy handles our website."',
            script: '"That\'s great for getting started. But your business is doing $2M a year now. If something breaks on a Tuesday at 2 PM, is your nephew dropping his college classes to fix your lead funnel? We provide enterprise-grade reliability."'
        }
    ];

    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Module 06</span>
                <h2 className="ql-module-title">Closing & Follow-Up</h2>
            </div>

            <div className="ql-card">
                <h3>Connecting Pain to Solution (The Final Pitch)</h3>
                <p>Before you ask for the business, do one final pain-to-solution mapping. Remind them of the specific pain they expressed and tie it directly to what you&rsquo;re building.</p>
                <div className="ql-script-box">
                    &ldquo;You told me you&rsquo;re losing 10 hours a week on manual intake. The custom portal we build for you is going to completely automate that. A client fills out the form, and the system automatically generates an invoice and creates a project file. We give you those 10 hours back.&rdquo;
                </div>
            </div>

            <div className="ql-card">
                <h3>Handling Last-Mile Objections</h3>
                {objections.map((item, i) => (
                    <div key={i} className="mb-8">
                        <p><strong>{item.obj}</strong></p>
                        <div className="ql-script-box mt-2">{item.script}</div>
                    </div>
                ))}
            </div>

            <div className="ql-card">
                <h3>Price Objection Neutralization</h3>
                <div className="space-y-6 mt-4">
                    <div>
                        <p className="font-semibold text-white mb-3">When they say &ldquo;That&rsquo;s more than we wanted to spend&rdquo;:</p>
                        <div className="ql-script-box">
                            &ldquo;I hear you. Let me ask — what did you have budgeted? [pause] Okay. The reason there&rsquo;s a gap is we&rsquo;re not building a website, we&rsquo;re building a revenue system. At your average project value of $X, this system needs to bring in just [Y] additional clients per year to pay for itself entirely. Does that change the framing?&rdquo;
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-white mb-3">When they want to negotiate down:</p>
                        <div className="ql-script-box">
                            &ldquo;I want to find something that works for you. Rather than reducing quality on the build, let&rsquo;s pull back the scope. If we remove [Feature X] and [Feature Y] from Phase 1, we can hit close to your number and add those back in Month 3 once the ROI is proven. Would that structure work?&rdquo;
                        </div>
                        <p className="text-gray-500 text-sm mt-2">Never reduce price. Only reduce scope. Reducing price trains them to negotiate everything forever.</p>
                    </div>
                    <div>
                        <p className="font-semibold text-white mb-3">When they go silent after hearing the price:</p>
                        <div className="ql-script-box">
                            [Say nothing. Let the silence breathe. Count to 10 in your head. Whoever speaks first loses. If they still say nothing after 15+ seconds:]<br /><br />
                            &ldquo;What&rsquo;s going through your mind right now?&rdquo;
                        </div>
                    </div>
                </div>
            </div>

            <div className="ql-card">
                <h3>The Trial Close & The Ask</h3>
                <p>Take their temperature before asking for the credit card.</p>
                <div className="ql-script-box">
                    <strong>The Trial Close:</strong> &ldquo;Based on everything we&rsquo;ve looked at today, do you feel confident that this new architecture will resolve the bottleneck in your sales team?&rdquo;<br /><br />
                    <strong>The Ask:</strong> &ldquo;Great. The next step is simple. We get the initial deposit processed, and we kick off the strategy boarding session next Tuesday. Does Visa or Mastercard work best for you?&rdquo;
                </div>
                <p className="text-center text-xl mt-8 text-cyan-400">
                    <strong>Once you ask for the business, shut up.<br />The first person to speak loses.</strong>
                </p>
            </div>

            <div className="ql-card bg-slate-900/50">
                <h3 className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-400 inline-block mr-2"></div>The 3-Step Ghosted Follow-Up</h3>
                <p>When they stop replying, do not send &ldquo;Just checking in.&rdquo; Use this sequence over 14 days.</p>
                <ul className="mt-6 space-y-6">
                    {[
                        { day: "Day 3: The Value Add", msg: '"Hey [Name], I was thinking about our chat regarding your intake funnel. I put together this quick 2-min loom video showing how an automated CRM sync would specifically look for your team. Here\'s the link: [Link]"' },
                        { day: "Day 7: The Direct Question", msg: '"Hey [Name], typically when I don\'t hear back at this stage it means the timeline shifted or the pricing wasn\'t right. Are we completely pausing on upgrading the systems for now?"' },
                        { day: "Day 14: The Breakup", msg: '"Hey [Name], haven\'t heard from you so I\'m assuming fixing the intake bottleneck isn\'t a priority this quarter. I\'ll close out your file on our end. Let me know if you want to revisit this later this year. Best of luck."' }
                    ].map((item, i) => (
                        <li key={i} className="flex gap-4">
                            <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: 'rgba(34,211,238,0.1)', color: '#22d3ee' }}>{i + 1}</span>
                            <div>
                                <p className="font-medium text-white mb-1">{item.day}</p>
                                <p className="text-sm text-gray-400 italic">{item.msg}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            {/* CTA to next module */}
            <div className="mt-12 p-6 rounded-2xl" style={{ background: 'rgba(34,211,238,0.05)', border: '1px solid rgba(34,211,238,0.15)' }}>
                <p className="text-cyan-400 text-sm font-mono tracking-widest uppercase mb-2">Up Next</p>
                <h3 className="text-white text-xl font-bold mb-2">Module 07 — Post-Close</h3>
                <p className="text-gray-400 text-sm">The card is charged. Now what? How to deliver a premium onboarding experience, prevent buyer&rsquo;s remorse, and turn every client into a referral machine.</p>
            </div>
        </div>
    );
}
