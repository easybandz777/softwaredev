// Bonus Modules F–K: compacted into a single file for efficiency.
// Each is exported as a named function component.
import React from "react";

/* ─── F: Prospecting Systems ─── */
export function BonusF() {
    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Bonus Module F</span>
                <h2 className="ql-module-title">Prospecting Systems</h2>
            </div>
            <p className="mb-8">A rep without a system is just hoping. A rep with a system is compounding. Build prospecting into a daily non-negotiable machine.</p>

            <div className="ql-card">
                <h3>🗺️ Google Maps Mining</h3>
                <p>Search &ldquo;[industry] near [city]&rdquo; in Google Maps. Look for businesses with fewer than 50 reviews, no website link, or a site that loads poorly. These are your warmest cold leads.</p>
                <div className="ql-tip-box mt-4 mb-0"><h4>💡 Daily Target</h4><p className="mb-0">Pull 15 leads from Google Maps each morning. Add them to your CRM with their current review count, website grade (use PageSpeed Insights), and one specific observation to lead with on the call.</p></div>
            </div>

            <div className="ql-card">
                <h3>🔗 LinkedIn Sniper Method</h3>
                <p>Filter by: Title (Owner, Founder, CEO, Managing Partner) + Industry + Company size (2–50 employees). Check their company page. If their website link goes to a broken or generic page, they&rsquo;re a target.</p>
                <div className="ql-script-box">&ldquo;Hey [Name], I build custom software for [industry] businesses in [city area]. I noticed your firm&rsquo;s digital intake process might have some gaps I could help close. Not pitching anything — I find it easier to just show you something real. Would a 10-minute screen-share this week be worth your time?&rdquo;</div>
            </div>

            <div className="ql-card">
                <h3>🤝 Referral Loop Engineering</h3>
                <div className="ql-script-box">&ldquo;Hey [Client Name], really glad the new system is working so well for you. Quick ask — do you know two or three other business owners in your network who are still running on manual processes or outdated sites? If you make an intro and they become clients, we&rsquo;ll extend your plan at no cost for 2 months.&rdquo;</div>
            </div>

            <div className="ql-card">
                <h3>📋 The Daily Prospecting Stack</h3>
                <div className="mt-4 grid gap-3">
                    {[
                        { time: "8:00 AM", task: "15 new leads sourced from Google Maps or LinkedIn. Added to CRM with notes.", color: '#22d3ee' },
                        { time: "9:00 AM", task: "10 cold outreach messages sent (DM, email, or call). Personalized, research-backed.", color: '#22d3ee' },
                        { time: "10:00 AM", task: "Follow up on every open thread older than 24 hours. One touch per prospect.", color: '#a78bfa' },
                        { time: "11:00 AM", task: "2 discovery calls booked or completed. Block this time — no rescheduling.", color: '#a78bfa' },
                        { time: "End of Day", task: "Update CRM statuses, write 3 observations about objections heard today.", color: '#94a3b8' }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <span className="text-xs font-bold flex-shrink-0 w-20" style={{ color: item.color }}>{item.time}</span>
                            <p className="text-gray-400 text-sm mb-0">{item.task}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ─── G: Demo & Proposal Playbook ─── */
export function BonusG() {
    const demoSteps = [
        { step: "01", title: "Recap Their Pain (2 min)", color: '#22d3ee', text: "Open by summarizing back exactly what they told you in discovery. Word for word. 'Before I show you anything, I want to make sure I understood what you told me last week...'" },
        { step: "02", title: "Show the Current State (2 min)", color: '#22d3ee', text: "Pull up their actual website or current process on screen. Make the pain visible and real." },
        { step: "03", title: "Show the Future State (10 min)", color: '#a78bfa', text: "Show a comparable build. Walk through the new flow step-by-step, narrating the outcome at each step. Map every feature to a specific pain point they mentioned." },
        { step: "04", title: "Quantify the Gap (3 min)", color: '#a78bfa', text: "'In your current setup, that lead waited 6 hours. In this system, they get a response in 60 seconds. You told me you're losing 3 leads per week. That's a $45,000/month gap this closes.'" },
        { step: "05", title: "The Soft Ask (2 min)", color: '#f8fafc', text: "'Based on what you just saw — does this solve the problem we talked about? What questions do you have before we discuss next steps?' Then go quiet." }
    ];
    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Bonus Module G</span>
                <h2 className="ql-module-title">Demo &amp; Proposal Playbook</h2>
            </div>
            <p className="mb-8">Most reps lose the deal in the demo — not because the product is weak, but because they demo features instead of outcomes.</p>
            <div className="ql-card">
                <h3>The 5-Part Demo Structure</h3>
                <div className="mt-4 grid gap-5">
                    {demoSteps.map((item, i) => (
                        <div key={i} className="flex gap-5">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: `${item.color}15`, color: item.color, border: `1px solid ${item.color}30` }}>{item.step}</div>
                            <div style={{ flex: 1 }}>
                                <p className="font-semibold text-white mb-2" style={{ color: item.color }}>{item.title}</p>
                                <p className="text-gray-400 text-sm mb-0">{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="ql-card">
                <h3>Death by Proposal: What to Avoid</h3>
                <div className="mt-4 grid gap-4">
                    {[
                        ["Sending a proposal without a verbal commitment", "A proposal should confirm a decision, not start one."],
                        ["Generic pricing without context", "Listing '$5,000' with no ROI framing is a price tag on a product."],
                        ["More than 2 pages", "Every additional page is an opportunity to overthink."],
                        ["Following up with 'Just checking in'", "This is the single most damaging follow-up phrase in existence."]
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
        </div>
    );
}

/* ─── H: Pricing Psychology ─── */
export function BonusH() {
    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Bonus Module H</span>
                <h2 className="ql-module-title">Pricing Psychology</h2>
            </div>
            <p className="mb-8">Price is a story you tell, not a number you defend. Master these principles and you will never crumble on price again.</p>
            <div className="ql-card">
                <h3>The Anchor &amp; Adjust Principle</h3>
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

            <div className="ql-card">
                <h3>The Value Staircase</h3>
                <p>Before any price lands, you must have already stacked five layers of value in the prospect&rsquo;s mind.</p>
                <div className="mt-4 space-y-3">
                    {[
                        ["They understand their current problem costs money", "If they believe 'we're fine,' no price will seem fair."],
                        ["They believe you can actually solve it", "Credibility. Case studies. Demo. Social proof."],
                        ["They see the ROI math clearly", "Dollar invested → dollars returned. Show the equation."],
                        ["They trust you personally", "People buy from people. If rapport is weak, they buy from competitors."],
                        ["They feel urgency to act now", "What changes if they wait 6 months? Name it explicitly."]
                    ].map(([point, note], i) => (
                        <div key={i} className="flex gap-3 items-start p-3 rounded-lg" style={{ background: 'rgba(34,211,238,0.03)', border: '1px solid rgba(34,211,238,0.08)' }}>
                            <span className="flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center" style={{ background: 'rgba(34,211,238,0.15)', color: '#22d3ee' }}>{i + 1}</span>
                            <div>
                                <p className="text-white font-medium text-sm mb-1">{point}</p>
                                <p className="text-gray-500 text-xs mb-0">{note}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ─── I: Pipeline Map ─── */
export function BonusI() {
    const stages = [
        { stage: "Stage 1", name: "IDENTIFIED", color: '#64748b', desc: "Lead sourced and researched.", action: "Send first outreach within 24 hours.", metric: "Target: 15+ per day" },
        { stage: "Stage 2", name: "CONTACTED", color: '#22d3ee', desc: "First outreach sent.", action: "If no reply in 48 hours, send follow-up #1.", metric: "Target: 10 per day" },
        { stage: "Stage 3", name: "ENGAGED", color: '#22d3ee', desc: "They replied or showed interest.", action: "Qualify them and book a discovery call within 72 hours.", metric: "Never let engaged go cold" },
        { stage: "Stage 4", name: "DISCOVERY COMPLETE", color: '#a78bfa', desc: "Pain identified, budget established.", action: "Within 24 hours: send recap email.", metric: "Same-day while fresh" },
        { stage: "Stage 5", name: "PROPOSAL SENT", color: '#a78bfa', desc: "They have everything to decide.", action: "Follow up after 48 hours.", metric: "Close rate target: 30–40%" },
        { stage: "Stage 6", name: "NEGOTIATION", color: '#f59e0b', desc: "Moving forward with concerns.", action: "Address each concern. Never drop price — adjust scope.", metric: "Convert 70%+ of negotiations" },
        { stage: "Stage 7", name: "CLOSED — WON", color: '#22c55e', desc: "Signed. Deposit received.", action: "Send premium onboarding experience.", metric: "Ask for referral within 30 days" }
    ];
    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Bonus Module I</span>
                <h2 className="ql-module-title">The Full Sales Pipeline Map</h2>
            </div>
            <p className="mb-8">Know exactly where every deal is at all times. A rep with a clean pipeline is a machine.</p>
            <div className="ql-card">
                <div className="space-y-5">
                    {stages.map((item, i) => (
                        <div key={i} className="flex gap-5 pb-5" style={{ borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                            <div className="flex-shrink-0 text-right w-32">
                                <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#475569' }}>{item.stage}</span>
                                <p className="font-bold text-sm mt-1" style={{ color: item.color }}>{item.name}</p>
                            </div>
                            <div style={{ flex: 1 }}>
                                <p className="text-gray-300 text-sm mb-2">{item.desc}</p>
                                <p className="text-sm mb-1"><span className="text-cyan-400 font-semibold">Action:</span> <span className="text-gray-400">{item.action}</span></p>
                                <span className="text-xs px-2 py-1 rounded" style={{ background: `${item.color}15`, color: item.color }}>{item.metric}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ─── J: Template Library ─── */
export function BonusJ() {
    const emails = [
        {
            label: "Cold Email #1 — The Observation",
            subj: "Subject: [Their Company] — quick observation",
            body: `Hey [First Name],\n\nI was doing research on [industry] businesses in [area] and came across [Company Name].\n\nTried to [do something on their site] and hit a dead end.\n\nWe build custom systems for businesses like yours that automate exactly that process. Have helped [similar company] cut their lead response time from [X hours] to under 60 seconds.\n\nWorth a quick 10-minute call this week?\n\n[Your Name]\nQuantLab Software Solutions`
        },
        {
            label: "Proposal Follow-Up Email (Day 3)",
            subj: "Subject: One more thought on [Company Name]",
            body: `Hey [First Name],\n\nI've been thinking more about the intake bottleneck you described. I pulled a quick workflow example from a similar build we did for a [industry] firm. Attaching it here.\n\nHappy to walk you through it if helpful.\n\n[Your Name]`
        },
        {
            label: "Post-Call Recap Email",
            subj: "Subject: Notes from our call + next steps",
            body: `Hey [First Name],\n\nReally valuable conversation today. Here's what I captured:\n\n**Your Current Challenge:**\n[2-3 bullet points using their exact words]\n\n**What We'd Build:**\n[2-3 bullet points]\n\nI'll put together a detailed proposal and send it over by [date].\n\n[Your Name]`
        }
    ];
    const dms = [
        { label: "Instagram / Facebook DM — Cold", body: "Hey [Name] — love what you're building with [Company]. Random question: when someone finds you on Instagram, what's your current process for converting them into a paying client?" },
        { label: "The 'Breakup' Text (Final Follow-Up)", body: "Hey [Name] — I've reached out a few times and haven't heard back. I'll stop following up after this one. If things change and you want to revisit, I'll be here. Wishing you a great quarter." }
    ];
    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Bonus Module J</span>
                <h2 className="ql-module-title">Copy-Paste Template Library</h2>
            </div>
            <p className="mb-8">Steal these. Adapt them to your voice — but the structure is proven.</p>
            <div className="ql-card">
                <h3>📧 Email Templates</h3>
                <div className="space-y-8 mt-4">
                    {emails.map((t, i) => (
                        <div key={i}>
                            <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">{t.label}</p>
                            <div className="ql-script-box" style={{ whiteSpace: 'pre-line', fontSize: '0.9rem', lineHeight: 1.7 }}>
                                <span className="block mb-2 font-bold text-cyan-400/70 text-xs">{t.subj}</span>
                                {t.body}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ql-card">
                <h3>💬 DM / Text Templates</h3>
                <div className="space-y-6 mt-4">
                    {dms.map((t, i) => (
                        <div key={i}>
                            <p className="text-purple-400 font-semibold text-sm uppercase tracking-wider mb-3">{t.label}</p>
                            <div className="ql-script-box" style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>{t.body}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ql-card" style={{ marginBottom: '80px' }}>
                <h3 className="text-center text-2xl mb-2">🧠 The QuantLab Rep Scorecard</h3>
                <p className="text-center text-gray-500 mb-8">Grade yourself weekly. Identify the exact stage where your pipeline breaks.</p>
                <div className="grid gap-3">
                    {[
                        ["Prospecting", "15+ new sourced leads added to CRM per day", "Daily"],
                        ["Outreach Volume", "10+ personalized first touches per day", "Daily"],
                        ["Discovery Calls Booked", "5+ booked calls per week", "Weekly"],
                        ["Discovery-to-Proposal Rate", "70%+ of calls result in a proposal being sent", "Weekly"],
                        ["Close Rate", "30%+ of proposals sent result in a closed deal", "Monthly"],
                        ["Referral Rate", "1 referral per every 3 active clients", "Monthly"]
                    ].map(([metric, target, freq], i) => (
                        <div key={i} className="grid grid-cols-12 gap-3 items-center p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <div className="col-span-4"><p className="text-white font-medium text-sm mb-0">{metric}</p></div>
                            <div className="col-span-6"><p className="text-gray-400 text-xs mb-0">{target}</p></div>
                            <div className="col-span-2 text-right"><span className="text-xs px-2 py-1 rounded font-semibold" style={{ background: 'rgba(34,211,238,0.08)', color: '#22d3ee' }}>{freq}</span></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ─── K: Elite Tactics ─── */
export function BonusK() {
    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Bonus Module K</span>
                <h2 className="ql-module-title">Elite Advanced Tactics</h2>
            </div>
            <p className="mb-8">These are the moves that separate a $5k/month rep from a $25k/month rep. Internalize Modules A–J first.</p>

            <div className="ql-card">
                <h3>🎭 The Pre-Frame Technique</h3>
                <p>Before you ever discuss price — install the frame through which they will evaluate everything. Set it in your first 60 seconds.</p>
                <div className="ql-script-box">&ldquo;Before I show you anything, I want to be transparent about how I work. I&rsquo;m not going to pitch you. I&rsquo;m going to ask you questions, and at the end if I genuinely think we can help you, I&rsquo;ll tell you exactly how. And if I don&rsquo;t think we&rsquo;re the right fit, I&rsquo;ll tell you that too. Sound fair?&rdquo;</div>
            </div>

            <div className="ql-card">
                <h3>🧲 The Porcupine Technique</h3>
                <p>When a prospect asks you a question, answer it with a question. Redirect the conversation back to their world.</p>
                <div className="space-y-4 mt-4">
                    {[
                        ["Prospect: 'How long does a build like this take?'", "Rep: 'Great question — it depends on scope. What's your timeline: when do you need this live to make an impact?'"],
                        ["Prospect: 'What does it cost?'", "Rep: 'I can walk you through investment ranges. First — what are you currently spending on software tools per month? I want to make sure there's alignment.'"]
                    ].map(([q, a], i) => (
                        <div key={i} className="grid gap-2">
                            <div className="p-3 rounded-lg" style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.1)' }}>
                                <p className="text-red-400 text-sm italic mb-0">{q}</p>
                            </div>
                            <div className="p-3 rounded-lg" style={{ background: 'rgba(34,211,238,0.04)', border: '1px solid rgba(34,211,238,0.1)' }}>
                                <p className="text-cyan-300 text-sm italic mb-0">{a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="ql-card">
                <h3>⚡ The Minimum Viable Commitment Close</h3>
                <p>When a prospect is nearly there but frozen on the big commitment, reduce the ask to the smallest possible yes.</p>
                <div className="ql-script-box">&ldquo;Let&rsquo;s do a paid strategy session — $250 for 90 minutes. We&rsquo;ll map out the exact architecture, deliverables, and ROI projection. You walk away with a complete blueprint whether we build it or not. If we move forward to the build, the $250 comes off your invoice. Fair?&rdquo;</div>
                <div className="ql-tip-box mt-4 mb-0"><h4>💡 Why This Works</h4><p className="mb-0">Once someone pays even $250, they mentally become a client. Conversion from paid strategy sessions to full builds typically runs 70–85%.</p></div>
            </div>

            <div className="ql-card">
                <h3>📊 The Live Audit Close</h3>
                <p>The most powerful demo you can give is a live deconstruction of their existing digital presence, done in real time on the call.</p>
                <div className="ql-script-box">&ldquo;Give me 2 minutes — I&rsquo;m going to pull up your site right now and show you exactly what your ideal client experiences when they find you. [Run the audit live.] Your homepage loaded in 8.3 seconds on mobile. Google&rsquo;s threshold is 2.5 seconds. Your top three competitors load in under 2 seconds.&rdquo;</div>
            </div>

            <div className="ql-card">
                <h3>🔐 The Exclusivity Positioning</h3>
                <p>Never position yourself as available to everyone. Selectivity signals demand.</p>
                <div className="ql-script-box">&ldquo;We&rsquo;re pretty selective about who we take on — not because we&rsquo;re arrogant, but because we require a certain level of commitment and collaboration from clients to deliver results. Based on our conversation, you check the boxes. Are you genuinely committed to growing the business digitally?&rdquo;</div>
                <div className="ql-bad-script-box mt-4">&ldquo;We&rsquo;d love to work with you! We&rsquo;re very flexible and work with all kinds of businesses!&rdquo; [This communicates desperation and commoditizes you instantly.]</div>
            </div>

            <div className="ql-card">
                <h3>🔄 The Upsell Ladder</h3>
                <p>The easiest person to sell to is someone who already bought from you.</p>
                <div className="mt-5 space-y-3">
                    {[
                        { month: "Month 1–2", action: "Deliver exceptional core build. Exceed expectations." },
                        { month: "Month 3", action: "Introduce Upsell #1: 'Based on how the system is performing, we can add [feature]. Want me to price it out?'" },
                        { month: "Month 4–5", action: "Escalate their plan tier. 'You've outgrown Starter — moving you to Growth gets you [X and Y] which you actually need now.'" },
                        { month: "Month 6+", action: "Referral + renewal conversation. Lock in next year's plan with a loyalty discount." }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-4 items-start p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                            <span className="flex-shrink-0 text-xs font-bold px-2 py-1 rounded" style={{ background: 'rgba(34,211,238,0.1)', color: '#22d3ee', whiteSpace: 'nowrap' }}>{item.month}</span>
                            <p className="text-gray-300 text-sm mb-0">{item.action}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
