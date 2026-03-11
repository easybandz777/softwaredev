"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
    BookOpen, CheckCircle, Award, ArrowRight, Play,
    Search, X, Copy, Check, ChevronDown, ChevronUp,
    Phone, MessageSquare, Shield, Zap,
} from "lucide-react";
import { SalesLayout } from "@/components/SalesLayout";

// ─── Module Data (maps to training portal modules) ──────────────────────────

const CORE_MODULES = [
    { id: 0, short: "Mindset & Prep", title: "Module 01 — Mindset & Prep", description: "Reframe from salesman to consultant. Tech-to-business translation. Pre-call checklist.", duration: "25 min", icon: "🧠" },
    { id: 1, short: "Prospecting Engine", title: "Module 02 — The Prospecting Engine", description: "Revenue math, cold call anatomy, gatekeeper tactics, lead sourcing, 7-touch cadence.", duration: "35 min", icon: "📞" },
    { id: 2, short: "Discovery & Qualification", title: "Module 03 — Discovery & Qualification", description: "Full SPIN framework, budget qualifying scripts, ops audit checklist.", duration: "30 min", icon: "🔍" },
    { id: 3, short: "The Pitch & Proposal", title: "Module 04 — The Pitch & Proposal", description: "6-step demo framework. Recap pain → Show current → Show future → Quantify → Price → Close.", duration: "25 min", icon: "🎬" },
    { id: 4, short: "Objections Masterclass", title: "Module 05 — Objections Masterclass", description: "A.I.R. framework. 15 objections across 4 categories with full scripts.", duration: "40 min", icon: "🛡️" },
    { id: 5, short: "Closing & Follow-Up", title: "Module 06 — Closing & Follow-Up", description: "Closing techniques, trial close sequences, post-call follow-up cadences.", duration: "30 min", icon: "🏆" },
    { id: 6, short: "Post-Close: Onboarding", title: "Module 07 — Post-Close: Onboarding & Retention", description: "Client onboarding, retention mechanics, NPS tracking, expansion seeds.", duration: "25 min", icon: "🤝" },
    { id: 7, short: "Prospecting & Lead Gen", title: "Module 08 — Prospecting & Lead Generation", description: "Advanced lead gen tactics, Google Maps mining, FB Ad Library method.", duration: "30 min", icon: "🎯" },
    { id: 8, short: "The Follow-Up System", title: "Module 09 — The Follow-Up System", description: "Systematic follow-up framework, CRM pipeline management, breakup sequences.", duration: "20 min", icon: "🔁" },
    { id: 9, short: "Pricing & Packaging", title: "Module 10 — Pricing & Packaging", description: "Three-tier product matrix, three-option close psychology, deposit structures, pricing presentation rules.", duration: "30 min", icon: "💰" },
    { id: 10, short: "Retainer Sales & MRR", title: "Module 11 — Retainer Sales & MRR", description: "Retainer tiers, project→retainer transition framework, MRR math, retention sticky factors.", duration: "30 min", icon: "📊" },
];

// ─── Industry Playbook Data (for Quick-Access panel) ────────────────────────

const PLAYBOOK_DATA = [
    {
        id: "real-estate", icon: "🏠", title: "Real Estate Agents & Brokerages",
        opener: `"Hey [Name], I was just on your site trying to figure out how a buyer would book a showing with you. I went through the whole flow — and honestly, the process loses people at the contact form. There's no instant scheduling, no follow-up confirmation text. I did a quick speed test and your listing pages are loading at 4.2 seconds on mobile. Google penalizes anything over 3. Are you tracking how many leads hit those pages and then bounce without ever reaching out?"`,
        discovery: [
            "What percentage of your leads are coming organically versus from Zillow or paid platforms?",
            "When a new lead submits a form on your site, what happens in the next 60 seconds?",
            "What does your average client's first touchpoint with your brand look like?",
            "If you could wave a magic wand and fix one part of your lead pipeline, what would it be?",
        ],
        objections: [
            { obj: "I'm already using Zillow Premier Agent.", response: `"Zillow is incredible for volume — but you're renting leads from a platform that sells those same leads to 5 competitors. Every dollar on Zillow is renting someone else's audience. We build owned infrastructure that generates leads you don't share with anyone."` },
            { obj: "My current website came with my brokerage.", response: `"Brokerage sites are built to represent the brokerage, not you. High-producing agents who close $5M+ build their own brand infrastructure. Your name is your business — it deserves its own platform."` },
            { obj: "I'm not tech-savvy.", response: `"You don't manage it — we do. Think of us as your dedicated tech department. You focus on relationships and closings. What does your current provider do when something breaks?"` },
        ],
    },
    {
        id: "restaurants", icon: "🍽️", title: "Restaurants & Hospitality",
        opener: `"Hey [Name], I was looking at how your online ordering is set up. Right now you're running everything through DoorDash and UberEats — which is smart for reach, but they're taking 30 cents off every dollar. On a $30 order, you're clearing under $22. We build direct-order systems so 100% of revenue stays in your pocket, plus you own every customer's contact info."`,
        discovery: [
            "What percentage of total order volume runs through DoorDash/Uber Eats versus direct?",
            "Do you currently have any way to reach out to past customers — email list, SMS list?",
            "When a loyal customer who orders twice a week disappears, do you have any way to win them back?",
            "If you could contact your top 500 customers today with a special offer, how much extra revenue?",
        ],
        objections: [
            { obj: "We can't risk leaving DoorDash.", response: `"I'm not saying leave DoorDash — I'm saying stop letting it be the only channel. Build your own direct ordering alongside. Train regulars to order direct: 'Order direct and skip the service fees.' Keep DoorDash for discovery, own the repeat customers."` },
            { obj: "We tried a loyalty app before and nobody used it.", response: `"Loyalty apps fail because they require a download. What we build is web-based, zero download. The customer orders, they're automatically enrolled. No friction."` },
        ],
    },
    {
        id: "gyms", icon: "🏋️", title: "Gyms, Studios & Fitness Coaches",
        opener: `"Hey [Name], your Instagram is honestly one of the best in your space locally. But I clicked your bio link and it goes to a Linktree → Mindbody booking page with zero branding. The trust signal completely breaks. I'd bet your Instagram gets 200+ link clicks a week and converts less than 3% into trial bookings."`,
        discovery: [
            "What's your current trial-to-paid-membership conversion rate?",
            "When someone books a free trial, what's the automated follow-up before they show up?",
            "Do you know which social posts drive the most actual bookings, or is it a black box?",
            "If a member hasn't checked in for 3 weeks, does anything automatically reach out to them?",
        ],
        objections: [
            { obj: "Our members are used to Mindbody.", response: `"Mindbody's UI has a 2.8-star review on the App Store — members are tolerating it, not loving it. We design a smooth transition over 30 days. The UX is so much better that members thank you."` },
            { obj: "We don't have budget, we're seasonal.", response: `"That's exactly when you build — in a slow month when you have time. One percentage point improvement in trial conversion: 80 trials × 10% more = 8 extra members × $80/mo = the system pays for itself before peak season."` },
        ],
    },
    {
        id: "auto", icon: "🚗", title: "Auto Dealerships & Detailers",
        opener: `"Hey [Name], when someone Googles 'car detailer [your city]' you're showing up number four. The three above you have 200+ reviews, and two have real-time booking in the search result. Your listing shows 43 reviews and goes to a contact form."`,
        discovery: [
            "After a job is done, do you have an automated process to ask for a Google review?",
            "When someone lands on your site from Google, what's the fastest they can confirm a booking?",
            "Do you have visibility into how many people visit your site vs actually reach out?",
            "If your schedule gets quiet, do you have any way to proactively reach past customers?",
        ],
        objections: [
            { obj: "We get most business through word of mouth.", response: `"Word of mouth is great — but when someone gets a referral and Googles you, they see 43 reviews vs your competitor's 300. The digital proof needs to match the reputation you've already built."` },
            { obj: "Cars.com brings us plenty of leads.", response: `"Cars.com sells the same lead to 3-4 competitors. We build a separate first-party pipeline — customers who found you directly, not being called by 4 other dealers."` },
        ],
    },
    {
        id: "ecommerce", icon: "📦", title: "E-Commerce & Product Brands",
        opener: `"Hey [Name], I ran your site through a performance test. Product pages loading at 5.8 seconds on 4G mobile. At anything over 3 seconds, you're losing ~50% of mobile traffic before they see a product image. Given you're running paid traffic to these pages, that's ad dollars getting eaten."`,
        discovery: [
            "What's your add-to-cart to completed purchase conversion rate? Mobile vs desktop split?",
            "When someone abandons their cart, do you have an automated SMS or email recovery?",
            "What percentage of revenue comes from repeat customers vs first-time?",
            "If you could increase average order value by 15% without additional ad spend, what would that mean?",
        ],
        objections: [
            { obj: "Our Shopify store is already built, we just need ads.", response: `"Ads are a multiplier — they amplify your conversion rate. If your store converts at 2%, better ads get more 2% conversions. Fix the store to 4%, same budget generates double the revenue."` },
            { obj: "We had a developer build it, it's supposed to be fast.", response: `"Fast Shopify is genuinely hard. Let me pull a Lighthouse score right now — I'll show you where load time is being destroyed. 5-minute diagnostic."` },
        ],
    },
    {
        id: "creatives", icon: "📐", title: "Architects, Designers & Creative Firms",
        opener: `"Hey [Name], I spent 20 minutes in your portfolio and the work is incredible. But the website itself doesn't give the work the stage it deserves. System default font, images load before composition, no signal to serious clients about engagement process or cost."`,
        discovery: [
            "When a high-budget client lands on your site, what do you want them to feel in the first 10 seconds?",
            "What does your current intake process look like — do leads self-qualify?",
            "What's the best project you've done — does your website tell that story in a way that sells the next one?",
            "What percentage of inbound inquiries are genuinely budget-qualified?",
        ],
        objections: [
            { obj: "My portfolio speaks for itself.", response: `"It does in person — but does it speak to clients Googling designers they haven't met yet? The way work is presented online is a design decision as important as the work itself."` },
            { obj: "I get all my work through referrals.", response: `"Even warm referrals Google you. If your site doesn't immediately reinforce what they've heard, you create doubt. Your website amplifies your referral network, not replaces it."` },
        ],
    },
    {
        id: "medical", icon: "🏥", title: "Medical Practices & Clinics",
        opener: `"Hey [Name], I tried to book a new patient appointment on your site last night. The 'Book Now' goes to a PDF intake form to print and bring in. No online scheduling — says to call during business hours. Your competitors down the street have online booking with digital intake."`,
        discovery: [
            "What percentage of new patient appointments are scheduled by phone vs online?",
            "How long does your front desk spend per day on scheduling logistics?",
            "What's your no-show rate? Do you have a waitlist system that fills cancellations automatically?",
            "If a potential patient Googles your practice at 10pm, what's the best outcome from your current site?",
        ],
        objections: [
            { obj: "We use [Practice Software] for scheduling.", response: `"We don't replace it — we layer on top. Your staff keeps using what they know. We build the patient-facing experience that feeds into your existing system."` },
            { obj: "Our patients are older and not tech-savvy.", response: `"We see higher adoption from older patients when the interface is simple. A large-button 3-step booking on mobile is easier than calling, being put on hold, and navigating phone trees."` },
        ],
    },
    {
        id: "law-firms", icon: "⚖️", title: "Law Firms & Legal Practices",
        opener: `"Hey [Name], I just tried to figure out how a potential client would reach you through your website. The contact form asks for a name, email, and a text box that says 'Describe your legal matter.' No urgency indicator, no intake qualifier, and no signal that you'll respond quickly. For someone who just got served papers or is panicking about a custody situation — that form feels like a void."`,
        discovery: [
            "When a potential client submits your contact form, how quickly does someone actually respond?",
            "What percentage of your consultations come from your website vs referrals vs directories like Avvo?",
            "Do you currently have a way to qualify a lead's case type and budget before your team spends time on a call?",
            "How many hours per week does your intake coordinator spend on calls that go nowhere?",
        ],
        objections: [
            { obj: "We get all our clients through referrals.", response: `"Referrals are your best source — but the first thing a referred person does is Google your firm. If your site looks like it was built in 2015 and has no clear intake process, you're creating doubt in a lead that was already warm. Your site should close the referral, not reopen the question."` },
            { obj: "We already have a marketing agency.", response: `"Most legal marketing agencies focus on SEO and PPC — getting eyeballs. We focus on conversion: what happens after someone lands. Your agency drives traffic; we make sure that traffic turns into signed retainers. We're complementary, not competitive."` },
        ],
    },
    {
        id: "construction", icon: "🏗️", title: "Construction, HVAC & Trades",
        opener: `"Hey [Name], I Googled '[your trade] near [city]' and your listing came up, but there's no way for me to get a quote without calling. I tried at 7pm — voicemail. Your top competitor has an instant quote request form with a response time guarantee. For someone whose AC just broke or whose pipe is leaking, the first company that responds wins that job."`,
        discovery: [
            "When someone calls after hours, what happens — voicemail? Do you have any after-hours lead capture?",
            "How many estimates does your team give per week vs how many convert into booked jobs?",
            "Do you have any automated system that follows up with a customer after you give them an estimate?",
            "What's your current Google review count vs your top competitor? Do you ask for reviews after every job?",
        ],
        objections: [
            { obj: "Most of our work comes from word of mouth.", response: `"That's true for established shops — but what happens when the person they refer you to Googles your company and sees 28 reviews next to a competitor with 340? Word of mouth gets you the introduction. Your online presence closes it."` },
            { obj: "We're already busy enough, we don't need more leads.", response: `"That's actually the best time to build your system. When you're busy, you have leverage to be selective. What if every lead that came in was pre-qualified, knew your pricing range, and could book directly? You'd stop wasting time on tire-kickers and fill your schedule with higher-margin jobs."` },
        ],
    },
    {
        id: "insurance", icon: "🛡️", title: "Insurance Agencies",
        opener: `"Hey [Name], I went through your website trying to get a quote for business insurance. The page says 'Call us for a free quote' and lists a phone number. There's no online quote form, no live chat, and no way for me to get started without picking up the phone during your business hours. Your competitors have instant quote request forms that capture the lead at 11pm when the business owner is actually thinking about insurance."`,
        discovery: [
            "What percentage of your new policies come from your website vs referrals vs cold outreach?",
            "When a prospect fills out your contact form, how long does it take for a licensed agent to actually call them back?",
            "Do you currently have any automated nurture sequence for leads that didn't convert right away?",
            "How much time does your team spend on manual data entry — copying info from forms into your AMS?",
        ],
        objections: [
            { obj: "We use our carrier's website for quotes.", response: `"Carrier sites are built for the carrier's brand, not yours. Every client who quotes through Progressive's site sees Progressive's branding and 4 other agent options. We build a quote flow that keeps your agency front and center and feeds directly into your AMS. You own the relationship from first click."` },
            { obj: "Insurance is relationship-based, we don't need a fancy website.", response: `"I agree — it is relationship-based. And the relationship now starts before the phone rings. When a business owner Googles 'commercial insurance [city]' at 9pm, the agency with the best digital first impression gets the call in the morning. Your digital presence is the first handshake."` },
        ],
    },
];

// ─── Common Objection Quick-Reference ───────────────────────────────────────

const COMMON_OBJECTIONS = [
    { smokescreen: "Just send me an email / proposal.", response: `"Absolutely — and I want it to be worth your time to actually read it. Before I build it out, can I grab 15 minutes tomorrow to make sure I'm building it around what actually matters? I'll have a first draft back to you the same day."`, category: "Cold Call" },
    { smokescreen: "We don't have budget for this right now.", response: `"Totally fair. Can I ask — you mentioned the current system is costing you [X] leads per month. At your average client value, that's roughly $[Y] walking out monthly. If I structured this in phases — maybe $1,500 upfront — would that make sense to at least get started?"`, category: "Pricing" },
    { smokescreen: "We already work with someone.", response: `"That's great — who are you with? Do they handle the deep operational back-end? Custom automation, client portals, internal systems? Or is it mainly the marketing layer? Because that's the gap we live in — we're the infrastructure underneath."`, category: "Cold Call" },
    { smokescreen: "I need to think about it.", response: `"That makes total sense. Can I ask: is there a specific part you're unsure about? Because if there's a doubt I haven't addressed, I'd rather tackle it together right now than have it sit. What's the thing giving you pause?"`, category: "Pricing" },
    { smokescreen: "Your price is too high.", response: `"I appreciate you being upfront. What exactly did they quote? Our builds include custom backend, proper infrastructure, and a 90-day performance guarantee. The cost of a system failing 6 months from now almost always exceeds the initial savings."`, category: "Pricing" },
    { smokescreen: "I need to talk to my partner/team.", response: `"Of course — this isn't a one-person decision. What are their main concerns typically? I can put together a one-page ROI breakdown specifically framed for their questions so you're going in armed, not hoping."`, category: "Pricing" },
    { smokescreen: "We got burned by a company like yours before.", response: `"I'm glad you told me that. Can you share what went wrong — communication, they disappeared, or the work wasn't right? Everything we do is milestone-based: you approve each phase before we build the next. You never pay for work you haven't reviewed."`, category: "Trust" },
    { smokescreen: "Can you guarantee results?", response: `"I won't guarantee a revenue number — that would mean I control your sales team and market. What I can guarantee: sub-2-second load times, <3% form drop-off rate, and if baseline metrics aren't hit in 90 days, we extend at no charge."`, category: "Trust" },
    { smokescreen: "We already have software that does that.", response: `"What are you using? Does it handle [their specific pain] automatically, or is that still manual? That's the gap we build for — connecting the pieces and automating what falls between existing tools."`, category: "Software" },
    { smokescreen: "Implementation sounds complicated.", response: `"We run both systems in parallel for 30 days. Nothing gets turned off until your team is confident. We do role-specific onboarding. The goal is that the migration feels invisible to your team."`, category: "Software" },
];

// ─── Helpers ────────────────────────────────────────────────────────────────

const STORAGE_KEY = "ql_completed_modules";
const CORE_COUNT = 11;

// ─── CopiedButton ───────────────────────────────────────────────────────────

function CopyBtn({ text }: { text: string }) {
    const [copied, setCopied] = useState(false);
    const copy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };
    return (
        <button onClick={copy} className="flex-shrink-0 p-1.5 rounded-lg transition-all hover:bg-white/5" title="Copy to clipboard" style={{ color: copied ? "#34d399" : "#475569" }}>
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
        </button>
    );
}

// ─── Module Card ────────────────────────────────────────────────────────────

function ModuleCard({ mod, completed, onLaunch }: {
    mod: typeof CORE_MODULES[number]; completed: boolean; onLaunch: () => void;
}) {
    return (
        <div className="group rounded-2xl overflow-hidden transition-all duration-200 hover:scale-[1.01] hover:shadow-lg" style={{
            background: "linear-gradient(145deg, #0d1526, #0a1020)",
            border: `1px solid ${completed ? "rgba(52,211,153,0.15)" : "rgba(255,255,255,0.05)"}`,
        }}>
            <div className="px-5 py-4 flex items-center justify-between" style={{
                borderBottom: "1px solid rgba(255,255,255,0.04)",
            }}>
                <div className="flex items-center gap-3 min-w-0">
                    <span className="text-2xl flex-shrink-0">{mod.icon}</span>
                    <div className="min-w-0">
                        <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Module {mod.id + 1}</p>
                        <h3 className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors truncate">{mod.short}</h3>
                    </div>
                </div>
                {completed ? (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold flex-shrink-0" style={{
                        background: "rgba(52,211,153,0.1)", color: "#34d399", border: "1px solid rgba(52,211,153,0.2)",
                    }}>
                        <CheckCircle className="w-3 h-3" /> Done
                    </div>
                ) : (
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium flex-shrink-0" style={{
                        background: "rgba(56,189,248,0.08)", color: "#38bdf8", border: "1px solid rgba(56,189,248,0.15)",
                    }}>
                        <BookOpen className="w-3 h-3" /> Open
                    </div>
                )}
            </div>
            <div className="px-5 py-4">
                <p className="text-xs text-gray-400 leading-relaxed mb-3">{mod.description}</p>
                <div className="flex items-center gap-4 text-[11px] text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Play className="w-3 h-3" /> {mod.duration}</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-1.5 rounded-full overflow-hidden mb-4" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div className="h-full rounded-full transition-all duration-500" style={{
                        width: completed ? "100%" : "0%",
                        background: completed ? "linear-gradient(90deg, #34d399, #059669)" : "linear-gradient(90deg, #38bdf8, #6366f1)",
                    }} />
                </div>
                <button onClick={onLaunch}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200"
                    style={{
                        background: completed ? "rgba(52,211,153,0.06)" : "rgba(56,189,248,0.08)",
                        color: completed ? "#34d399" : "#38bdf8",
                        border: completed ? "1px solid rgba(52,211,153,0.15)" : "1px solid rgba(56,189,248,0.15)",
                    }}>
                    {completed ? (
                        <><Award className="w-3.5 h-3.5" /> Review Module</>
                    ) : (
                        <><ArrowRight className="w-3.5 h-3.5" /> Start Learning</>
                    )}
                </button>
            </div>
        </div>
    );
}

// ─── Playbook Card ──────────────────────────────────────────────────────────

function PlaybookCard({ pb }: { pb: typeof PLAYBOOK_DATA[number] }) {
    const [expanded, setExpanded] = useState(false);
    const [tab, setTab] = useState<"opener" | "discovery" | "objections">("opener");

    return (
        <div className="rounded-xl overflow-hidden transition-all" style={{
            background: "linear-gradient(145deg, #0d1526, #0a1020)",
            border: `1px solid ${expanded ? "rgba(52,211,153,0.15)" : "rgba(255,255,255,0.05)"}`,
        }}>
            <button onClick={() => setExpanded(!expanded)} className="w-full flex items-center justify-between px-4 py-3 text-left">
                <div className="flex items-center gap-3 min-w-0">
                    <span className="text-xl flex-shrink-0">{pb.icon}</span>
                    <span className="text-sm font-medium text-white truncate">{pb.title}</span>
                </div>
                {expanded ? <ChevronUp className="w-4 h-4 text-gray-500 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />}
            </button>

            {expanded && (
                <div className="px-4 pb-4" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
                    {/* Tabs */}
                    <div className="flex gap-1 mt-3 mb-3 overflow-x-auto">
                        {([
                            { id: "opener" as const, label: "Opener Script", icon: <Phone className="w-3 h-3" /> },
                            { id: "discovery" as const, label: "Discovery Qs", icon: <MessageSquare className="w-3 h-3" /> },
                            { id: "objections" as const, label: "Objections", icon: <Shield className="w-3 h-3" /> },
                        ]).map(t => (
                            <button key={t.id} onClick={() => setTab(t.id)}
                                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all"
                                style={{
                                    background: tab === t.id ? "rgba(52,211,153,0.1)" : "rgba(255,255,255,0.03)",
                                    color: tab === t.id ? "#34d399" : "#64748b",
                                    border: `1px solid ${tab === t.id ? "rgba(52,211,153,0.2)" : "rgba(255,255,255,0.05)"}`,
                                }}>
                                {t.icon} {t.label}
                            </button>
                        ))}
                    </div>

                    {/* Opener */}
                    {tab === "opener" && (
                        <div className="rounded-lg p-3 text-xs text-cyan-200 leading-relaxed italic flex gap-2" style={{
                            background: "rgba(34,211,238,0.05)", border: "1px solid rgba(34,211,238,0.12)", borderLeft: "3px solid #22d3ee",
                        }}>
                            <div className="flex-1">{pb.opener}</div>
                            <CopyBtn text={pb.opener} />
                        </div>
                    )}

                    {/* Discovery */}
                    {tab === "discovery" && (
                        <div className="space-y-2">
                            {pb.discovery.map((q, i) => (
                                <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg text-xs" style={{
                                    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
                                }}>
                                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold" style={{
                                        background: "rgba(167,139,250,0.15)", color: "#a78bfa",
                                    }}>{i + 1}</span>
                                    <span className="text-gray-300 flex-1">{q}</span>
                                    <CopyBtn text={q} />
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Objections */}
                    {tab === "objections" && (
                        <div className="space-y-2">
                            {pb.objections.map((o, i) => (
                                <div key={i} className="rounded-lg overflow-hidden" style={{
                                    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)",
                                }}>
                                    <div className="px-3 py-2 text-xs font-semibold text-rose-300" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                                        "{o.obj}"
                                    </div>
                                    <div className="px-3 py-2.5 text-xs text-emerald-200 leading-relaxed flex gap-2">
                                        <span className="flex-1">{o.response}</span>
                                        <CopyBtn text={o.response} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

// ─── Main Page ──────────────────────────────────────────────────────────────

export default function SalesTrainingPage() {
    const router = useRouter();
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const [completedModules, setCompletedModules] = useState<Set<number>>(new Set());
    const [view, setView] = useState<"modules" | "playbook">("modules");
    const [search, setSearch] = useState("");
    const [objSearch, setObjSearch] = useState("");

    const checkAuth = useCallback(async () => {
        try {
            const res = await fetch("/api/sales/me");
            if (res.status === 401) { router.push("/sales"); return; }
            setAuthenticated(true);
        } finally { setLoading(false); }
    }, [router]);

    useEffect(() => { checkAuth(); }, [checkAuth]);

    // Load completed modules from localStorage
    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) setCompletedModules(new Set(JSON.parse(raw) as number[]));
        } catch { /* ignore */ }

        // Listen for storage changes (if training portal is open in another tab)
        const onStorage = (e: StorageEvent) => {
            if (e.key === STORAGE_KEY && e.newValue) {
                try { setCompletedModules(new Set(JSON.parse(e.newValue) as number[])); } catch { /* ignore */ }
            }
        };
        window.addEventListener("storage", onStorage);
        return () => window.removeEventListener("storage", onStorage);
    }, []);

    if (loading || !authenticated) {
        return (
            <div className="flex items-center justify-center min-h-screen" style={{ background: "#080d18" }}>
                <div className="text-gray-500 text-sm animate-pulse">Loading training…</div>
            </div>
        );
    }

    const completedCount = completedModules.size;
    const allComplete = completedCount >= CORE_COUNT;

    // Filter playbooks by search
    const filteredPlaybooks = PLAYBOOK_DATA.filter(pb =>
        !search || pb.title.toLowerCase().includes(search.toLowerCase()) || pb.id.includes(search.toLowerCase())
    );

    // Filter objections by search
    const filteredObjections = COMMON_OBJECTIONS.filter(o =>
        !objSearch || o.smokescreen.toLowerCase().includes(objSearch.toLowerCase()) || o.category.toLowerCase().includes(objSearch.toLowerCase()) || o.response.toLowerCase().includes(objSearch.toLowerCase())
    );

    return (
        <SalesLayout>
            {/* Header */}
            <header className="sticky top-0 z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-4 md:px-8 py-4" style={{
                background: "rgba(8,13,24,0.9)", backdropFilter: "blur(16px)",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>
                <div>
                    <h1 className="text-lg md:text-xl font-bold text-white">Sales Training</h1>
                    <p className="text-gray-500 text-xs mt-0.5">{completedCount}/{CORE_COUNT} modules completed · {allComplete ? "🏆 Certified" : "In progress"}</p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                    <button onClick={() => setView("modules")}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all"
                        style={{
                            background: view === "modules" ? "rgba(52,211,153,0.1)" : "rgba(255,255,255,0.03)",
                            color: view === "modules" ? "#34d399" : "#64748b",
                            border: `1px solid ${view === "modules" ? "rgba(52,211,153,0.2)" : "rgba(255,255,255,0.06)"}`,
                        }}>
                        <BookOpen className="w-3.5 h-3.5" /> Modules
                    </button>
                    <button onClick={() => setView("playbook")}
                        className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all"
                        style={{
                            background: view === "playbook" ? "rgba(34,211,238,0.1)" : "rgba(255,255,255,0.03)",
                            color: view === "playbook" ? "#22d3ee" : "#64748b",
                            border: `1px solid ${view === "playbook" ? "rgba(34,211,238,0.2)" : "rgba(255,255,255,0.06)"}`,
                        }}>
                        <Zap className="w-3.5 h-3.5" /> Live Playbook
                    </button>
                </div>
            </header>

            <div className="max-w-6xl mx-auto px-4 md:px-8 py-6 md:py-8">
                {view === "modules" && (
                    <>
                        {/* Overview cards */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
                            <div className="rounded-xl p-4 md:p-5" style={{
                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}>
                                <div className="flex items-center gap-2 mb-2">
                                    <BookOpen className="w-4 h-4 text-sky-400 opacity-70" />
                                    <p className="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-wider">Progress</p>
                                </div>
                                <p className="text-xl md:text-2xl font-bold text-sky-400">{completedCount}/{CORE_COUNT}</p>
                            </div>
                            <div className="rounded-xl p-4 md:p-5" style={{
                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}>
                                <div className="flex items-center gap-2 mb-2">
                                    <Award className="w-4 h-4 text-emerald-400 opacity-70" />
                                    <p className="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-wider">Certification</p>
                                </div>
                                <p className="text-xl md:text-2xl font-bold text-emerald-400">{allComplete ? "Earned ✅" : "In Progress"}</p>
                            </div>
                            <div className="rounded-xl p-4 md:p-5 col-span-2 md:col-span-1" style={{
                                background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                border: "1px solid rgba(255,255,255,0.05)",
                            }}>
                                <div className="flex items-center gap-2 mb-2">
                                    <Play className="w-4 h-4 text-violet-400 opacity-70" />
                                    <p className="text-[10px] md:text-xs font-medium text-gray-500 uppercase tracking-wider">Full Portal</p>
                                </div>
                                <button onClick={() => window.open("/training", "_blank")}
                                    className="text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-1">
                                    Open Training Portal <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>

                        {/* Module grid */}
                        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
                            {CORE_MODULES.map(mod => (
                                <ModuleCard
                                    key={mod.id}
                                    mod={mod}
                                    completed={completedModules.has(mod.id)}
                                    onLaunch={() => window.open("/training", "_blank")}
                                />
                            ))}
                        </div>
                    </>
                )}

                {view === "playbook" && (
                    <>
                        {/* Playbook header */}
                        <div className="mb-6">
                            <h2 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
                                <Zap className="w-5 h-5 text-cyan-400" /> Live Sales Playbook
                            </h2>
                            <p className="text-xs text-gray-500">Searchable scripts, openers, discovery questions, and objection responses. Use during live calls.</p>
                        </div>

                        {/* Industry Playbooks */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-emerald-400" /> Industry Playbooks
                                </h3>
                            </div>
                            <div className="relative mb-3">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                                <input
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    placeholder="Search industries... (e.g. restaurant, gym, law)"
                                    className="w-full pl-9 pr-8 py-2.5 rounded-lg text-xs text-white placeholder-gray-600 outline-none transition-all focus:ring-1 focus:ring-emerald-400/30"
                                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                                />
                                {search && (
                                    <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                                        <X className="w-3.5 h-3.5" />
                                    </button>
                                )}
                            </div>
                            <div className="space-y-2">
                                {filteredPlaybooks.map(pb => <PlaybookCard key={pb.id} pb={pb} />)}
                                {filteredPlaybooks.length === 0 && (
                                    <p className="text-center text-gray-500 text-xs py-8">No industries match "{search}"</p>
                                )}
                            </div>
                        </div>

                        {/* Common Objections Quick-Ref */}
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-rose-400" /> Quick Objection Responses
                                </h3>
                            </div>
                            <div className="relative mb-3">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" />
                                <input
                                    value={objSearch}
                                    onChange={e => setObjSearch(e.target.value)}
                                    placeholder="Search objections... (e.g. budget, think about it, competitor)"
                                    className="w-full pl-9 pr-8 py-2.5 rounded-lg text-xs text-white placeholder-gray-600 outline-none transition-all focus:ring-1 focus:ring-rose-400/30"
                                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                                />
                                {objSearch && (
                                    <button onClick={() => setObjSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                                        <X className="w-3.5 h-3.5" />
                                    </button>
                                )}
                            </div>
                            <div className="space-y-2">
                                {filteredObjections.map((o, i) => (
                                    <div key={i} className="rounded-xl overflow-hidden" style={{
                                        background: "linear-gradient(145deg, #0d1526, #0a1020)",
                                        border: "1px solid rgba(255,255,255,0.05)",
                                    }}>
                                        <div className="px-4 py-2.5 flex items-center gap-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                                            <span className="text-[10px] font-bold px-2 py-0.5 rounded" style={{
                                                background: o.category === "Cold Call" ? "rgba(56,189,248,0.1)" : o.category === "Pricing" ? "rgba(245,158,11,0.1)" : o.category === "Trust" ? "rgba(139,92,246,0.1)" : "rgba(34,211,238,0.1)",
                                                color: o.category === "Cold Call" ? "#38bdf8" : o.category === "Pricing" ? "#fbbf24" : o.category === "Trust" ? "#a78bfa" : "#22d3ee",
                                            }}>{o.category}</span>
                                            <span className="text-xs font-semibold text-gray-200">{o.smokescreen}</span>
                                        </div>
                                        <div className="px-4 py-3 flex items-start gap-2">
                                            <span className="text-xs text-emerald-200 leading-relaxed flex-1">{o.response}</span>
                                            <CopyBtn text={o.response} />
                                        </div>
                                    </div>
                                ))}
                                {filteredObjections.length === 0 && (
                                    <p className="text-center text-gray-500 text-xs py-8">No objections match "{objSearch}"</p>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </SalesLayout>
    );
}
