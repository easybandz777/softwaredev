import React from "react";
import { ArrowRight } from "lucide-react";

interface Props {
    onStartTest: () => void;
}

export default function Module5({ onStartTest }: Props) {
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
                <span className="ql-module-number">Module 05</span>
                <h2 className="ql-module-title">Bringing It All Together</h2>
            </div>

            <div className="ql-card">
                <h3>Connecting Pain to Solution (The Pitch)</h3>
                <p>Don&rsquo;t just list features. Map our features directly to the specific pains they admitted to in Discovery.</p>
                <div className="ql-script-box">
                    &ldquo;You told me you&rsquo;re losing 10 hours a week on manual intake. The custom portal we build for you is going to completely automate that. A client fills out the form, and the system automatically generates an invoice and creates a project file. We give you those 10 hours back.&rdquo;
                </div>
            </div>

            <div className="ql-card">
                <h3>Handling Core Objections</h3>
                {objections.map((item, i) => (
                    <div key={i} className="mb-8">
                        <p><strong>{item.obj}</strong></p>
                        <div className="ql-script-box mt-2">{item.script}</div>
                    </div>
                ))}
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

            <div className="ql-card pb-12">
                <h3>The Trial Close &amp; The Ask</h3>
                <p>Take their temperature before asking for the credit card.</p>
                <div className="ql-script-box">
                    <strong>The Trial Close:</strong> &ldquo;Based on everything we&rsquo;ve looked at today, do you feel confident that this new architecture will resolve the bottleneck in your sales team?&rdquo;<br /><br />
                    <strong>The Ask:</strong> &ldquo;Great. The next step is simple. We get the initial deposit processed, and we kick off the strategy boarding session next Tuesday. Does Visa or Mastercard work best for you?&rdquo;
                </div>
                <p className="text-center text-xl mt-12 text-cyan-400">
                    <strong>Once you ask for the business, shut up.<br />The first person to speak loses.</strong>
                </p>
            </div>

            {/* CTA to start exam */}
            <div className="mt-16 relative p-1 rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.15)] group cursor-pointer" onClick={onStartTest}>
                <div className="absolute inset-0 bg-gradient-to-r from-[#22d3ee] to-[#a78bfa] opacity-20 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative bg-[#0a0f1d] rounded-xl p-10 text-center border border-white/10 z-10">
                    <h2 className="text-3xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        Ready for the Standard?
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-8 text-lg">
                        You&rsquo;ve studied the core modules. Now test your knowledge with the official certification exam.
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
