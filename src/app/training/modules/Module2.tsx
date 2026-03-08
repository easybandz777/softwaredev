'use client';
import React, { useState } from 'react';

/* ── Data ───────────────────────────────────────────────────── */

const revenueGoals = [
    { goal: '$5k/mo', deals: 1, dealsLabel: '1 deal/mo', proposals: 3, calls: 10, outreach: 50, leads: 100, color: '#64748b' },
    { goal: '$10k/mo', deals: 2, dealsLabel: '2 deals/mo', proposals: 6, calls: 20, outreach: 100, leads: 200, color: '#22d3ee' },
    { goal: '$20k/mo', deals: 5, dealsLabel: '5 deals/mo', proposals: 15, calls: 50, outreach: 250, leads: 500, color: '#a78bfa' },
    { goal: '$50k/mo', deals: 12, dealsLabel: '12 deals/mo', proposals: 36, calls: 120, outreach: 600, leads: 1200, color: '#f59e0b' },
];

const leadSources = [
    {
        icon: `🗺️`,
        title: `Google Maps Mining`,
        badge: `HIGHEST INTENT`,
        badgeColor: `#22d3ee`,
        body: `Search "[industry] near [city]" in Google Maps. Filter for businesses with < 50 reviews, no website link, or a website that loads poorly on mobile. These are your warmest cold leads — they already have customers but are bleeding revenue through digital failure.`,
        steps: [
            `Open Google Maps. Type "law firms near [city]" or "restaurants near [neighborhood]".`,
            `Click each business. Check if they have a website. If not — instant target.`,
            `If they have a site, run it through PageSpeed Insights. Under 50 = call them today.`,
            `Note 1 specific observation. That becomes your opener: "I tried to book a table on your site and..."`,
            `Add to CRM: name, phone, website grade, your observation. 15 leads per morning = 300/month.`,
        ],
        script: `"Hey [Name] — I was just on your site trying to [specific action] and hit a dead end. Not the impression you want when someone's ready to spend money with you. Is that something you're already aware of or were you just finding out?"`,
    },
    {
        icon: `🎯`,
        title: `LinkedIn Sniper Method`,
        badge: `DECISION MAKERS`,
        badgeColor: `#a78bfa`,
        body: `Stop reaching out to office managers and receptionists. Use LinkedIn Sales Navigator filters to target: Title (Owner / Founder / CEO / Managing Partner) + Industry + Company size (2–50). These people own the checkbook.`,
        steps: [
            `Search: "Founder" OR "Owner" + [industry] + [city] + Company 1–50 employees.`,
            `Click their profile. Check their company page — look for a bad/missing website in the About section.`,
            `Look for recent posts. Any complaint about managing their business = perfect opener.`,
            `Send connection request with NO note. After accept, send the DM below.`,
            `Goal: 10 targeted connection requests per day. Expect 30–40% acceptance.`,
        ],
        script: `"Hey [Name] — quick question. When a potential client finds [Company] on LinkedIn and wants to learn more, where do they go? I checked the link in your bio and [specific observation]. I build custom systems for [industry] businesses to fix exactly that. Worth a 10-minute screen-share this week?"`,
    },
    {
        icon: `🔍`,
        title: `The Competitor Backdoor`,
        badge: `UNDERUTILIZED`,
        badgeColor: `#22c55e`,
        body: `Find businesses running Facebook or Google ads but sending traffic to terrible landing pages. They're already spending money on marketing and getting poor ROI. You are the upgrade they're actively trying to buy.`,
        steps: [
            `Go to Facebook Ad Library (facebook.com/ads/library). Search any business or industry.`,
            `Find businesses running ads. Click the ad. Where does it go?`,
            `If it goes to a weak landing page, a homepage, or a broken mobile experience — call.`,
            `Google "[industry] near [city]" and check who's running ads at the top. Click their site.`,
            `Use this angle: "I noticed you're spending money on ads but the page it's sending to..."`,
        ],
        script: `"Hey [Name] — I saw you're running ads on [platform]. I clicked through and noticed the landing page isn't converting — it's missing [specific element]. You're probably paying for traffic and losing it. We fix that. Would it be worth 15 minutes to show you what we'd change?"`,
    },
    {
        icon: `🔄`,
        title: `Referral Loop Engineering`,
        badge: `HIGHEST CLOSE RATE`,
        badgeColor: `#f59e0b`,
        body: `A referred lead closes at 3–5x the rate of a cold lead. Build a systematic referral engine from your existing clients. This isn't asking for favors — it's a mutual value exchange.`,
        steps: [
            `After 30 days of delivery, send your referral offer to every active client.`,
            `Make the ask specific: "Do you know 2-3 business owners in your network still running on manual processes?"`,
            `Offer clear incentive: 2 months free retainer, $500 Amazon gift card, or a retainer credit.`,
            `Create a simple referral card (digital or physical) they can forward with one click.`,
            `Track referrals with a tag in your CRM. Follow up monthly with every active client.`,
        ],
        script: `"Hey [Client Name] — really glad the system is working so well. Quick ask: do you know 2-3 business owners in your network who are still stuck on manual processes or an outdated site? If you make an intro and they become a client, I'll extend your retainer at no cost for 2 months. Totally optional — just figured it's a win-win."`,
    },
];

const openerCards = [
    {
        label: `❌ Amateur Opener`,
        text: `"Hi, this is [Name] from QuantLab Software. We build custom websites and software solutions. Do you have a few minutes to talk about your digital presence?"`,
        type: `bad`,
        note: `Generic. Signals you're a vendor. Says nothing unique. Instantly dismissed.`,
    },
    {
        label: `✅ The Pattern Interrupt`,
        text: `"Hey [Name], I know you weren't expecting my call — I'll be brief. I was just on your site trying to figure out how a new client books a consultation with you and the process is pretty broken. Have you noticed a drop in lead flow recently?"`,
        type: `good`,
        note: `Specific. Acknowledges the interruption. Hooks with a provocative, relevant question.`,
    },
];

const cadenceSteps = [
    { day: `Day 1`, channel: `Phone Call`, action: `First cold call. Leave no voicemail if no answer. Note the time you called.`, color: `#22d3ee` },
    { day: `Day 2`, channel: `Cold Email`, action: `Send "Broken Window" email — reference the specific thing you found wrong on their site.`, color: `#22d3ee` },
    { day: `Day 4`, channel: `Phone Call`, action: `Second call attempt. If they answer, reference the email: "Did you get a chance to see what I sent?"`, color: `#a78bfa` },
    { day: `Day 6`, channel: `LinkedIn DM`, action: `Send the LinkedIn connection + short DM. Different format breaks through. Be ultra-brief.`, color: `#a78bfa` },
    { day: `Day 9`, channel: `Phone Call`, action: `Third call. Now leave a voicemail (see script below). This is your big swing.`, color: `#f59e0b` },
    { day: `Day 12`, channel: `Email`, action: `"Breakup" email. Removes pressure completely. Counterintuitively often gets a reply.`, color: `#f59e0b` },
    { day: `Day 21`, channel: `Re-engage`, action: `If still no response — send a value-add. A tip, a benchmark, or an article relevant to their industry. No ask attached.`, color: `#64748b` },
];

const gatekeeperTactics = [
    {
        title: `Downward Vocal Inflection`,
        desc: `Most salespeople end sentences on a rising tone — a question tone. It signals uncertainty and triggers the gatekeeper's "filter" response. Drop your tone at the end of every sentence. It signals authority. Practice: "I need to speak with [Name]." Down. Never up.`,
    },
    {
        title: `The Assumed Familiarity Technique`,
        desc: `"Hi, it's [Your First Name] for [Owner's First Name]." — No last name for either. No company introduction. Sound like you've spoken before. The gatekeeper's job is to filter out strangers. Don't sound like a stranger.`,
    },
    {
        title: `The Lost Vendor`,
        desc: `"Hey, I'm trying to reach [Owner Name] — we spoke a few weeks back and I have some information he asked me to follow up on. Is he available?" Plausible, believable, brief. Don't elaborate unless asked.`,
    },
    {
        title: `The Direct Question`,
        desc: `If all else fails: "Hey — I appreciate you keeping things tight. Honest question: is there a better time of day to reach [Name] directly, or a better way to get a message to him?" Respect + directness = gatekeeper becoming your ally.`,
    },
];

const emailTemplates = [
    {
        label: `The "Broken Window" Email`,
        subject: `Subject: [Company Name] — quick thing I found`,
        body: `Hey [First Name],

I was doing research on [industry] businesses in [city] and came across [Company Name].

Tried to [specific action — book an appointment, get a quote, find your menu, etc.] and hit a dead end.

We build systems for businesses like yours that automate exactly that flow — and have helped [similar company] cut their lead response time from [X hours] to under 60 seconds.

Worth a quick 10-minute call this week?

[Your Name]
QuantLab Software Solutions`,
    },
    {
        label: `The Loom Video Teardown Email`,
        subject: `Subject: I made a 60-second video for you`,
        body: `Hey [First Name],

Recorded a quick screen-share walking through what a potential customer experiences when they try to learn about [Company Name] online.

[LOOM LINK]

No pitch — just thought you'd want to see what I saw. Happy to jump on a call if you want to talk through it.

[Your Name]`,
    },
    {
        label: `Voicemail Script (Day 9)`,
        subject: `VOICEMAIL — leave this word-for-word`,
        body: `"Hey [Name], [Your Name] here. Third time calling — I'm actually going to stop calling after this one. I was doing a quick analysis of [Company Name]'s online presence and found something pretty specific that's likely costing you leads every week. If you're curious, you have my number. No pressure either way — take care."`,
    },
    {
        label: `The "Breakup" Email`,
        subject: `Subject: Closing the loop on [Company Name]`,
        body: `Hey [First Name],

I've reached out a few times and haven't heard back — which totally makes sense, you're running a business.

I'll stop following up after this one. If the timing ever changes and you want to explore what a custom system could do for [Company Name], I'll be here.

Wishing you a great quarter.

[Your Name]`,
    },
];

/* ── Sub-components ─────────────────────────────────────────── */

function RevenueCalculator() {
    const [selected, setSelected] = useState(1);
    const g = revenueGoals[selected];
    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem', marginBottom: '1.25rem' }}>
                {revenueGoals.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => setSelected(i)}
                        className="px-4 py-2 rounded-lg font-bold text-sm transition-all"
                        style={{
                            background: selected === i ? `${item.color}20` : `rgba(255,255,255,0.03)`,
                            border: `1px solid ${selected === i ? item.color : 'rgba(255,255,255,0.08)'}`,
                            color: selected === i ? item.color : `#64748b`,
                        }}
                    >
                        {item.goal}
                    </button>
                ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                {[
                    { label: `Deals Closed`, value: g.dealsLabel, icon: `💰` },
                    { label: `Proposals Sent`, value: `${g.proposals}/mo`, icon: `📄` },
                    { label: `Discovery Calls`, value: `${g.calls}/mo`, icon: `📞` },
                    { label: `Outreach Touches`, value: `${g.outreach}/mo`, icon: `✉️` },
                    { label: `Leads Sourced`, value: `${g.leads}/mo`, icon: `🎯` },
                    { label: `Daily Leads Needed`, value: `${Math.ceil(g.leads / 22)}/day`, icon: `📊` },
                ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl text-center" style={{ background: `rgba(255,255,255,0.02)`, border: `1px solid rgba(255,255,255,0.05)` }}>
                        <div className="text-2xl mb-1">{item.icon}</div>
                        <div className="font-bold text-lg" style={{ color: g.color }}>{item.value}</div>
                        <div className="text-gray-500 text-xs mt-1">{item.label}</div>
                    </div>
                ))}
            </div>
            <div className="mt-4 p-4 rounded-xl" style={{ background: `${g.color}08`, border: `1px solid ${g.color}20` }}>
                <p className="text-sm text-gray-300 mb-0">
                    <span style={{ color: g.color }} className="font-bold">The math is simple: </span>
                    To hit <span style={{ color: g.color }} className="font-bold">{g.goal}</span>, you need{` `}
                    <span className="text-white font-semibold">{Math.ceil(g.leads / 22)} leads sourced per day</span>, converted through a disciplined{` `}
                    <span className="text-white font-semibold">{g.outreach}-touch/month outreach cadence</span>.
                    The reps who hit these numbers aren&apos;t more talented — they&apos;re more{` `}
                    <em>consistent</em>.
                </p>
            </div>
        </div>
    );
}

function LeadSourceCard({ source, idx }: { source: typeof leadSources[0]; idx: number }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="ql-card" style={{ padding: 0, overflow: `hidden` }}>
            <button
                onClick={() => setOpen(!open)}
                className="w-full text-left p-6 flex items-center gap-4"
                style={{ background: `none`, border: `none`, cursor: `pointer` }}
            >
                <span className="text-3xl flex-shrink-0">{source.icon}</span>
                <div style={{ flex: 1 }}>
                    <span className="text-xs font-bold px-2 py-1 rounded mr-2" style={{ background: `${source.badgeColor}15`, color: source.badgeColor }}>
                        {source.badge}
                    </span>
                    <h3 className="text-white font-bold text-xl mt-2 mb-1">{source.title}</h3>
                    <p className="text-gray-400 text-sm mb-0">{source.body}</p>
                </div>
                <span style={{ color: `#475569`, fontSize: `1.2rem`, flexShrink: 0, transform: open ? `rotate(180deg)` : `rotate(0deg)`, transition: `transform 0.2s` }}>▾</span>
            </button>
            {open && (
                <div className="px-6 pb-6">
                    <h4 className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-3">Step-by-Step Process:</h4>
                    <ol className="space-y-2 mb-6">
                        {source.steps.map((step, i) => (
                            <li key={i} className="flex gap-3 items-start">
                                <span className="flex-shrink-0 w-5 h-5 rounded-full text-xs font-bold flex items-center justify-center" style={{ background: `rgba(34,211,238,0.15)`, color: `#22d3ee` }}>{i + 1}</span>
                                <p className="text-gray-300 text-sm mb-0">{step}</p>
                            </li>
                        ))}
                    </ol>
                    <h4 className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">Exact Opener to Use:</h4>
                    <div className="ql-script-box">{source.script}</div>
                </div>
            )}
        </div>
    );
}

function EmailTemplateBlock({ tpl }: { tpl: typeof emailTemplates[0] }) {
    return (
        <div>
            <p className="text-cyan-400 font-bold text-sm uppercase tracking-wider mb-2">{tpl.label}</p>
            <div className="ql-script-box" style={{ whiteSpace: `pre-line`, fontSize: `0.88rem`, lineHeight: 1.8 }}>
                <span className="block mb-3 text-cyan-400/60 text-xs font-bold">{tpl.subject}</span>
                {tpl.body}
            </div>
        </div>
    );
}

/* ── Main Component ─────────────────────────────────────────── */

const M2_STYLES = `
  .m2-cadence-row {
    display: grid;
    grid-template-columns: 60px 90px 1fr;
    gap: 0.75rem;
    align-items: start;
    padding: 0.75rem 1rem;
    border-radius: 10px;
  }
  .m2-stack-row {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
    padding: 0.75rem 1rem;
    border-radius: 10px;
  }
  @media (max-width: 480px) {
    .m2-cadence-row {
      grid-template-columns: 1fr;
      gap: 0.25rem;
    }
    .m2-stack-row {
      flex-direction: column;
      gap: 0.25rem;
    }
    .m2-stack-row span {
      min-width: unset !important;
    }
  }
`;

export default function Module2() {
    return (
        <div className="ql-training-content">
            <style>{M2_STYLES}</style>
            {/* Header */}
            <div className="ql-section-header">
                <span className="ql-module-number">Module 02</span>
                <h2 className="ql-module-title">The Prospecting Engine</h2>
            </div>
            <p className="mb-10 text-gray-400 text-lg">
                Cold calling is dead only for reps who are bad at it. Elite reps treat prospecting as a science — a
                disciplined, data-driven machine that runs every single day, regardless of mood or motivation.
            </p>

            {/* ── Section 1: Revenue Math ── */}
            <div className="ql-card">
                <h3>📊 The Math of Millions</h3>
                <p>
                    Most reps fail not because they&apos;re bad at selling — they fail because they don&apos;t do enough
                    volume. Here&apos;s the exact activity math required to hit your revenue goal. Select your target:
                </p>
                <RevenueCalculator />
            </div>

            {/* ── Section 2: Cold Call Anatomy ── */}
            <div className="ql-card">
                <h3>📞 The Cold Call Anatomy</h3>
                <p>
                    You have <strong className="text-white">5 seconds</strong> to earn 50 more. The opener is everything. The single
                    biggest mistake reps make is leading with who they are and what they sell. The prospect doesn&apos;t care —
                    yet. Break the pattern first. Here&apos;s the difference:
                </p>
                <div className="grid gap-4 mt-4 sm:grid-cols-2">
                    {openerCards.map((card, i) => (
                        <div
                            key={i}
                            className="p-5 rounded-xl"
                            style={{
                                background: card.type === `bad` ? `rgba(239,68,68,0.04)` : `rgba(34,211,238,0.04)`,
                                border: `1px solid ${card.type === `bad` ? `rgba(239,68,68,0.15)` : `rgba(34,211,238,0.15)`}`,
                            }}
                        >
                            <p className="font-bold text-sm mb-3" style={{ color: card.type === `bad` ? `#f87171` : `#22d3ee` }}>{card.label}</p>
                            <p className="text-sm italic mb-3" style={{ color: card.type === `bad` ? `#fca5a5` : `#a5f3fc` }}>{card.text}</p>
                            <p className="text-xs text-gray-500 mb-0">{card.note}</p>
                        </div>
                    ))}
                </div>
                <div className="ql-tip-box mt-6 mb-0">
                    <h4>💡 The Pattern Interrupt Formula</h4>
                    <p className="mb-0">
                        <span className="text-white font-bold">(1)</span> Acknowledge the interruption — shows respect and disarms them.{` `}
                        <span className="text-white font-bold">(2)</span> Drop the generic pitch — say something hyper-specific you found during research.{` `}
                        <span className="text-white font-bold">(3)</span> End with a provocative but relevant question — never a close.
                    </p>
                </div>
            </div>

            {/* ── Section 3: Gatekeeper Judo ── */}
            <div className="ql-card">
                <h3>🥋 Gatekeeper Judo</h3>
                <p>
                    A gatekeeper&apos;s job is to protect the decision-maker&apos;s time. Your job is to not sound like a threat.
                    These are tested, proven techniques to get past the front line without lying or being manipulative.
                </p>
                <div className="mt-4 grid gap-4">
                    {gatekeeperTactics.map((t, i) => (
                        <div key={i} className="flex gap-4 items-start p-4 rounded-xl" style={{ background: `rgba(255,255,255,0.02)`, border: `1px solid rgba(255,255,255,0.06)` }}>
                            <span className="flex-shrink-0 w-7 h-7 rounded-full text-sm font-bold flex items-center justify-center" style={{ background: `rgba(167,139,250,0.15)`, color: `#a78bfa` }}>{i + 1}</span>
                            <div>
                                <p className="text-white font-semibold mb-1">{t.title}</p>
                                <p className="text-gray-400 text-sm mb-0">{t.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── Section 4: Lead Sources ── */}
            <div>
                <h3 className="text-white font-bold text-2xl mb-2">🎯 Sourcing High-Quality Leads</h3>
                <p className="text-gray-400 mb-6">
                    The quality of your lead determines the quality of your call. These are the four highest-ROI lead sources
                    for QuantLab partners. Click each to see the exact step-by-step playbook.
                </p>
                <div className="space-y-3">
                    {leadSources.map((s, i) => (
                        <LeadSourceCard key={i} source={s} idx={i} />
                    ))}
                </div>
            </div>

            {/* ── Section 5: The 7-Touch Cadence ── */}
            <div className="ql-card">
                <h3>🔁 The 7-Touch Outreach Cadence</h3>
                <p>
                    Most reps quit after 1–2 attempts. Studies show it takes an average of{` `}
                    <strong className="text-white">8 touches</strong> to book a meeting with a cold prospect. The reps who
                    follow this exact cadence close 3x more meetings — not because they&apos;re better, but because they
                    show up more.
                </p>
                <div className="mt-5 space-y-3">
                    {cadenceSteps.map((step, i) => (
                        <div key={i} className="m2-cadence-row" style={{ background: `rgba(255,255,255,0.02)`, border: `1px solid rgba(255,255,255,0.05)` }}>
                            <span className="text-xs font-bold px-2 py-1 rounded text-center" style={{ background: `${step.color}15`, color: step.color }}>{step.day}</span>
                            <span className="text-xs font-semibold text-gray-400 self-center">{step.channel}</span>
                            <p className="text-gray-300 text-sm mb-0">{step.action}</p>
                        </div>
                    ))}
                </div>
                <div className="ql-tip-box mt-6 mb-0">
                    <h4>💡 The Breakup Psychology</h4>
                    <p className="mb-0">
                        The Day 12 "breakup" email counter-intuitively generates more replies than any other touch in the
                        sequence. Removing pressure triggers a fear of loss (FOMO) that urgency tactics never achieve. Use it
                        every time.
                    </p>
                </div>
            </div>

            {/* ── Section 6: Template Library ── */}
            <div className="ql-card">
                <h3>✍️ Outreach Scripts & Templates</h3>
                <p>
                    Every message here is a proven template. Steal the structure. Adapt the specifics to the prospect you
                    researched. Never send a generic message — personalization = reply rates.
                </p>
                <div className="mt-6 space-y-8">
                    {emailTemplates.map((tpl, i) => (
                        <EmailTemplateBlock key={i} tpl={tpl} />
                    ))}
                </div>
            </div>

            {/* ── Section 7: Daily Stack ── */}
            <div className="ql-card">
                <h3>🗓️ The Daily Non-Negotiable Stack</h3>
                <p>
                    A system beats motivation every time. If you wait until you feel like prospecting, you&apos;ll never do
                    enough of it. Block these windows in your calendar. Treat them like client calls.
                </p>
                <div className="mt-5 space-y-3">
                    {[
                        { time: `8:00 – 9:00 AM`, task: `Source 15 new leads from Google Maps or LinkedIn. Research each one. Add to CRM with 1 specific observation.`, color: `#22d3ee` },
                        { time: `9:00 – 10:30 AM`, task: `Cold calling block. 15 dials minimum. No emails, no LinkedIn — phone only. Log every outcome in CRM.`, color: `#22d3ee` },
                        { time: `10:30 – 11:00 AM`, task: `Send 10 personalized cold emails or LinkedIn DMs from yesterday's research. Never batch-blast.`, color: `#a78bfa` },
                        { time: `11:00 – 12:00 PM`, task: `Follow up on every open thread older than 24 hrs. One touch, move to next cadence step.`, color: `#a78bfa` },
                        { time: `2:00 – 3:00 PM`, task: `Discovery calls booked into this block. No prospecting during call hours — be 100% present.`, color: `#f59e0b` },
                        { time: `End of Day`, task: `Update CRM. Log 3 objections you heard today. Note what worked and what didn't. Review tomorrow's list.`, color: `#64748b` },
                    ].map((item, i) => (
                        <div key={i} className="m2-stack-row" style={{ background: `rgba(255,255,255,0.02)`, border: `1px solid rgba(255,255,255,0.05)` }}>
                            <span className="text-xs font-bold flex-shrink-0 leading-tight" style={{ color: item.color, minWidth: `100px` }}>{item.time}</span>
                            <p className="text-gray-300 text-sm mb-0">{item.task}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-6 p-5 rounded-xl text-center" style={{ background: `rgba(34,211,238,0.04)`, border: `1px solid rgba(34,211,238,0.12)` }}>
                    <p className="text-xl font-bold text-white mb-1">The Bottom Line</p>
                    <p className="text-gray-400 mb-0">
                        If you run this stack 5 days a week, you will generate{` `}
                        <span className="text-cyan-400 font-bold">300 new leads/month</span>,{` `}
                        <span className="text-cyan-400 font-bold">200 outreach touches</span>, and statistically close{` `}
                        <span className="text-cyan-400 font-bold">4–6 deals/month</span>.
                        That&apos;s <span className="text-white font-bold">$20k–$30k/month</span> if you don&apos;t miss a day.
                    </p>
                </div>
            </div>
        </div>
    );
}
