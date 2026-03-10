"use client";
import React, { useState } from "react";

const verticals = [
    {
        id: "law",
        name: "Law Firms",
        icon: "⚖️",
        color: "#22d3ee",
        tagline: "Personal injury, family law, immigration, criminal defense",
        painPoints: [
            "Lead response time kills cases — PI firms lose clients to whoever calls back first",
            "Intake is manual (email → spreadsheet → call → CRM) — major bottleneck",
            "Website built by a nephew 5 years ago; no mobile optimization",
            "Relying on Avvo/Martindale-Hubbell referrals — no owned lead gen",
            "No client portal — everything goes through email chains",
        ],
        iceBreaker: `"Hey [Name], I was just on your intake form trying to figure out how quickly a new PI lead would hear back from your office — and I realized the process had a few gaps that are probably costing you cases. Have you noticed a slow-down in lead conversion recently?"`,
        discoveryQuestions: [
            "Walk me through exactly what happens when a new lead fills out your contact form — start to first contact.",
            "What's your average response time to a new inquiry? And what's your average case value?",
            "How many cases do you think you lose because you weren't the first firm to call back?",
            "Are you doing any SEO or Google Ads, or is most of your business from referrals right now?",
        ],
        pitch: `"The system we'd build for you does three things: The second someone fills out your intake form, they get an automated text response within 60 seconds that sounds personal — it qualifies them with two questions and books them directly into your calendar. Your receptionist's inbox is now only for qualified, ready-to-sign cases. At your average case value, you only need to save 2 leads a month for this to pay for itself."`,
        systemPitch: `"Beyond the website, the real play for a law firm is the intake-to-CRM pipeline. We build a system where a new lead submits a form → they get an automated SMS within 60 seconds → they answer 3 qualification questions → if qualified, they're offered a calendar slot directly. Your team only touches qualified, ready-to-retain leads. The manual intake bottleneck is completely eliminated. If you're on Clio, we feed the qualified record directly into your matter pipeline automatically."`,
        objections: [
            {
                obj: '"We already use Clio"', ans: '"Clio is great for case management. We sit in front of that — we handle the lead capture and conversion before a case ever enters Clio. We make Clio\'s data better."'
            },
            { obj: '"Bar compliance is complicated"', ans: '"We build attorney intake systems exclusively. Everything we build is reviewed for your jurisdiction\'s rules. We\'ve handled this before."' },
        ],
    },
    {
        id: "medspa",
        name: "Med Spas & Aesthetics",
        icon: "💆",
        color: "#a78bfa",
        tagline: "Botox, fillers, laser treatments, skincare clinics",
        painPoints: [
            "Heavily Instagram/TikTok driven but no direct booking from social",
            "Cancellations and no-shows kill daily revenue",
            "Before/after photos exist but aren't showcased effectively",
            "Staff manually confirms appointments via phone/text",
            "Gift card and loyalty programs are tracked on spreadsheets",
        ],
        iceBreaker: `"I noticed your Instagram is really strong — but when I clicked the 'Book Now' link it took me to a third-party app with 6 steps. In beauty, that friction kills conversions. Have you seen a drop in bookings from social traffic?"`,
        discoveryQuestions: [
            "What percentage of your appointments come from Instagram vs. Google vs. referrals?",
            "How many no-shows do you average per week, and what's your cancellation policy enforcement like?",
            "Do you have a loyalty or referral program? How do you track it?",
            "If someone visits your site from TikTok at 11pm — what does their path to booking look like?",
        ],
        pitch: `"We build a booking engine that lives directly on your site and social bio link. A client sees your Reel, clicks, books, and pays a deposit — all in under 90 seconds. The deposit system alone typically cuts no-shows by 60%. We also build out your before/after gallery with SEO optimization so you own Google results for '[Service] in [City]' instead of renting them from Yelp."`,
        systemPitch: `"The automation play for med spas is massive. We build a system where every confirmed appointment triggers a pre-appointment prep email 48 hours out, a reminder SMS 24 hours out, and a post-appointment review request 4 hours after. Staff manually handling all of that loses 2–3 hours per day. We eliminate that completely. We also build a loyalty point system where returning clients earn credits — tracked automatically, redeemable in checkout with no manual effort from your team."`,
        objections: [
            { obj: '"We already use Vagaro/MindBody"', ans: '"Vagaro is a great scheduling tool. The problem is it looks like Vagaro when a client books — not like your brand. We build around it so your brand is what they experience, and we can integrate with your existing system."' },
            { obj: '"Our clients find us on social, not Google"', ans: '"Right now they do. But your social reach is rented — algorithm changes overnight end it. We give you owned traffic that you control permanently."' },
        ],
    },
    {
        id: "contractor",
        name: "Home Services & Contractors",
        icon: "🔧",
        color: "#34d399",
        tagline: "HVAC, plumbing, roofing, electrical, landscaping",
        painPoints: [
            "Spend heavily on HomeAdvisor/Angi — competing on price with 10 other contractors",
            "Estimate process is manual, slow, and often un-followed-up",
            "No system to collect or showcase reviews after job completion",
            "Website is generic or doesn't appear in local search",
            "Invoice and payment collection is totally manual",
        ],
        iceBreaker: `"I was looking up [Service] contractors in [City] and noticed your Google Business profile but your site wasn't ranking on page one for that search. Are you aware of how much organic traffic you're losing to your competitors right now?"`,
        discoveryQuestions: [
            "What's your current main lead source — HomeAdvisor, referrals, Google?",
            "How do you follow up on estimates you've sent that haven't responded yet?",
            "After you complete a job, what's your process for getting a 5-star review?",
            "What does your estimate and invoicing process look like right now?",
        ],
        pitch: `"We eliminate HomeAdvisor completely for our contractor clients within 6-12 months. Here's how: we build you a site that ranks on Google for the exact searches your ideal clients are doing, so leads come to you directly — no auction, no fee per lead. We also add an automated review request system that fires 24 hours after every job completion. More 5-star reviews = higher Google ranking = more free leads. It compounds."`,
        systemPitch: `"The ops play for contractors is the estimate-to-invoice pipeline. Right now you're probably creating estimates manually, emailing PDFs, then manually following up, then manually creating invoices. We build a system where an estimate is created in one click from a job template, sent digitally for e-signature, and when approved, an invoice is auto-created and payment collected online. Your admin time per job goes from 45 minutes to under 5. At 20 jobs a week, that's 13 hours returned to your week."`,
        objections: [
            { obj: '"I\'ve tried SEO before and it didn\'t work"', ans: '"True — most SEO agencies sell reports, not results. We only work on technical SEO tied to measurable lead outcomes. We\'ll show you the before/after ranking data monthly."' },
            { obj: '"Our business is mostly referral-based"', ans: '"That\'s great — and we don\'t touch referrals. We add a second lead engine on top. If referrals ever dry up, you\'re protected. Right now you\'re one relationship away from a dry quarter."' },
        ],
    },
    {
        id: "realestate",
        name: "Real Estate",
        icon: "🏠",
        color: "#fbbf24",
        tagline: "Agents, brokers, property management, commercial RE",
        painPoints: [
            "Zillow and Realtor.com eat into margins and brand — agents own nothing",
            "Lead follow-up is inconsistent — new leads get contacted days or weeks later",
            "No automated drip nurture for long-cycle leads (12–18 month buyers)",
            "CRM a mess — contacts scattered across texts, email, and spreadsheets",
            "No professional personal brand site — using a generic brokerage template",
        ],
        iceBreaker: `"I looked up your listings on Zillow — really strong inventory. But when I clicked through to find your personal site or contact page, it went to a generic brokerage page. In a market where buyers Google the agent before calling — that gap is probably costing you deals."`,
        discoveryQuestions: [
            "How do leads come to you today — Zillow, referrals, open houses?",
            "When someone fills out a contact form from Zillow, how quickly does a follow-up go out?",
            "What's your system for staying in front of leads who are 6–12 months away from buying?",
            "Do you have a personal brand site separate from your brokerage page?",
        ],
        pitch: `"We build you a personal brand site that positions you — not your brokerage — as the authority in your market. It has an IDX search integration, so leads can browse listings on your site instead of Zillow. Every lead that comes in is automatically enrolled in a 12-month email nurture sequence that sends market updates, relevant listings, and personal check-ins. You stop losing leads to time."`,
        systemPitch: `"The CRM problem in real estate is brutal — leads scattered across texts, Zillow messages, emails, and spreadsheets. We build you a unified lead pipeline: every inquiry from every source (Zillow, your site, referrals) flows into one dashboard. Each lead is automatically tagged by stage, budget, and timeline. You get a daily digest of who's ready to move. No lead falls through the cracks. Agents who switch to this model typically recover 3–4 dead leads per month that would have gone cold."`,
        objections: [
            { obj: '"My brokerage handles marketing"', ans: '"Your brokerage markets the brokerage. We market you. When you change brokerages — and most agents do — your leads, your list, your brand stays with you."' },
            { obj: '"The market is slow right now"', ans: '"Slow markets are when your competitors go quiet. The agents who invest in infrastructure during the slow period own the relationships when activity picks back up."' },
        ],
    },
    {
        id: "fitness",
        name: "Fitness & Wellness",
        icon: "💪",
        color: "#f472b6",
        tagline: "Gyms, CrossFit boxes, yoga studios, personal trainers",
        painPoints: [
            "Member retention is the #1 business challenge — losing members costs more than acquiring them",
            "No-shows to free trials kill conversion rates",
            "Class scheduling is clunky (Mindbody frustrates new members)",
            "Referral program exists in theory but isn't systematized",
            "Revenue peaks in January, crashes by March — no system to counter seasonal churn",
        ],
        iceBreaker: `"I was checking out your class schedule and trying to sign up for a free trial — it took me through 4 screens and asked for my credit card before I even booked. High friction at that step is probably your biggest conversion killer. Have you looked at your trial-to-member conversion rate recently?"`,
        discoveryQuestions: [
            "What's your monthly churn rate? And what's your average member lifetime value?",
            "When a member cancels, what happens — do you have any re-engagement process?",
            "How do you currently handle free trial bookings and the follow-up after?",
            "Do you have a systematized referral program, or is it mostly word-of-mouth?",
        ],
        pitch: `"We build a frictionless trial booking flow that gets people from 'I'm interested' to 'I'm booked' in under 60 seconds — and then an automated 5-touchpoint sequence that converts trials to paid members. We also build a member referral portal — members get a unique link, and when their friend joins, they get a credit on their account automatically. Most studios 2x their referral conversions with this alone."`,
        systemPitch: `"The churn problem in fitness needs a system, not a salesperson. We build a member engagement automation: anyone who misses 3+ sessions in a row gets an automated personal-looking check-in message. Anyone who hits a milestone (30 days, 3-month, 1-year) gets a congratulations with a reward offer. When a membership is about to expire, they get a renewal flow with a discount — automatically. Studios using this system cut churn by 20–35% without adding a single staff member."`,
        objections: [
            { obj: '"We already use Mindbody"', ans: '"We keep Mindbody for scheduling on the backend. We replace the front-end experience your members see — making it branded, beautiful, and fast. Your ops stay the same."' },
            { obj: '"January will fix our revenue"', ans: '"January gives you a new crop of leads. Without a system to retain them through March, you\'re on the same treadmill next year. We fix the leak so January revenue actually sticks."' },
        ],
    },
];

export default function BonusL() {
    const [activeVertical, setActiveVertical] = useState(0);
    const v = verticals[activeVertical];

    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Bonus Module L</span>
                <h2 className="ql-module-title">Vertical-Specific Playbooks</h2>
                <p style={{ color: "#64748b", marginTop: "8px", fontSize: "15px" }}>
                    Knowing a prospect&rsquo;s industry cold closes deals faster than any technique. These are your vertical cheat sheets — memorize the relevant ones before every call.
                </p>
            </div>

            {/* Vertical Selector */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "32px" }}>
                {verticals.map((vert, i) => (
                    <button
                        key={vert.id}
                        onClick={() => setActiveVertical(i)}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            padding: "10px 18px",
                            borderRadius: "24px",
                            border: `1px solid ${activeVertical === i ? vert.color : "rgba(255,255,255,0.08)"}`,
                            background: activeVertical === i ? `${vert.color}15` : "transparent",
                            color: activeVertical === i ? vert.color : "#64748b",
                            cursor: "pointer",
                            fontSize: "14px",
                            fontWeight: 600,
                            transition: "all 0.2s ease",
                        }}
                    >
                        <span>{vert.icon}</span>
                        {vert.name}
                    </button>
                ))}
            </div>

            {/* Active Vertical Content */}
            <div style={{ borderTop: `2px solid ${v.color}30`, paddingTop: "8px" }}>

                {/* Pain Points */}
                <div className="ql-card" style={{ borderColor: `${v.color}30` }}>
                    <h3 style={{ color: v.color }}>🔥 Their Most Common Pain Points</h3>
                    <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "16px" }}>{v.tagline}</p>
                    <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: "10px" }}>
                        {v.painPoints.map((pain, i) => (
                            <li
                                key={i}
                                style={{
                                    display: "flex",
                                    gap: "12px",
                                    alignItems: "flex-start",
                                    padding: "12px 14px",
                                    borderRadius: "10px",
                                    background: `${v.color}05`,
                                    border: `1px solid ${v.color}15`,
                                }}
                            >
                                <span style={{ color: v.color, fontWeight: 700, flexShrink: 0 }}>{i + 1}.</span>
                                <p style={{ color: "#94a3b8", fontSize: "14px", margin: 0, lineHeight: 1.6 }}>{pain}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Ice Breaker */}
                <div className="ql-card">
                    <h3>🎯 Ice Breaker (First Contact)</h3>
                    <p>Use this openerframe for cold calls, LinkedIn messages, and walk-ins. Customize the bracketed fields.</p>
                    <div className="ql-script-box">{v.iceBreaker}</div>
                </div>

                {/* Discovery Questions */}
                <div className="ql-card">
                    <h3>🔍 Discovery Questions</h3>
                    <p>Ask these in order. Each one is designed to surface a deeper pain point than the last.</p>
                    <ul className="ql-question-list mt-4">
                        {v.discoveryQuestions.map((q, i) => (
                            <li key={i}>{q}</li>
                        ))}
                    </ul>
                </div>

                {/* Pitch */}
                <div className="ql-card" style={{ borderColor: `${v.color}30` }}>
                    <h3>💬 The Pitch (After Discovery)</h3>
                    <p>Only deliver after they&rsquo;ve confirmed their pain. Map every sentence to something they said.</p>
                    <div className="ql-script-box">{v.pitch}</div>
                </div>

                {/* System Build Pitch */}
                <div className="ql-card" style={{ borderColor: 'rgba(167,139,250,0.3)' }}>
                    <h3 style={{ color: '#a78bfa' }}>🖥️ System Build Pitch — If They Have an Ops Problem</h3>
                    <p>When discovery reveals manual workflows, disconnected tools, or operational bottlenecks, pivot to this system-framed pitch <em>instead of</em> or <em>in addition to</em> the website pitch.</p>
                    <div className="ql-script-box">{v.systemPitch}</div>
                </div>

                {/* Objections */}
                <div className="ql-card">
                    <h3>🛡️ Industry-Specific Objections</h3>
                    <p>These are the objections unique to this vertical. Have these memorized before the call.</p>
                    <div style={{ display: "grid", gap: "16px", marginTop: "16px" }}>
                        {v.objections.map((item, i) => (
                            <div key={i}>
                                <p style={{ color: "#e2e8f0", fontWeight: 600, marginBottom: "8px" }}>{item.obj}</p>
                                <div className="ql-script-box" style={{ marginTop: 0 }}>{item.ans}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="ql-tip-box">
                <h4>💡 The Vertical Mastery Shortcut</h4>
                <p className="mb-0">
                    Before any call with a prospect in a new industry, spend 15 minutes reading their industry&rsquo;s Reddit or Facebook group.
                    What are owners complaining about? What are their biggest frustrations? Speak their language back
                    to them on the call and they&rsquo;ll immediately think: <em>&ldquo;This person gets it.&rdquo;</em>{" "}
                    That feeling is worth more than any script.
                </p>
            </div>
        </div>
    );
}
