'use client';

import React, { useState } from 'react';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */

type Category = 'cold-call' | 'trust' | 'pricing';

interface Objection {
    id: string;
    smokescreen: string;
    rootCause: string;
    rootCauseLabel: 'FEAR' | 'CONFUSION' | 'LACK OF URGENCY' | 'DISTRUST' | 'PRICE FIXATION';
    reframe: string;
    airSteps: { a: string; i: string; r: string };
    script: string;
    notes?: string;
    preemptQuestion?: string;
}

const CATEGORIES: { id: Category; label: string; icon: string; description: string }[] = [
    {
        id: 'cold-call',
        label: 'Cold Call Smoke Screens',
        icon: '📵',
        description: 'Knee-jerk reactions designed to end the call before it starts. These are reflexes, not real objections.',
    },
    {
        id: 'trust',
        label: 'Trust & Authority Walls',
        icon: '🛡️',
        description: `They don't yet believe you can deliver. Your job is to transfer certainty before you transfer a contract.`,
    },
    {
        id: 'pricing',
        label: 'Pricing & Logistics Walls',
        icon: '💰',
        description: `The deal-killers at the 1-yard line. These are almost always symptoms of insufficient value built earlier in the call.`,
    },
];

const OBJECTIONS: Record<Category, Objection[]> = {
    'cold-call': [
        {
            id: 'cc-1',
            smokescreen: `"Just send me an email / proposal."`,
            rootCause: `They want to end the call politely without a confrontation. A proposal sent cold has a <2% conversion rate.`,
            rootCauseLabel: 'LACK OF URGENCY',
            reframe: `An email means nothing without context. You need 15 minutes to make the proposal actually useful to them.`,
            airSteps: {
                a: `"Absolutely, I can get that over to you — and I want it to actually be worth your time to open."`,
                i: `"Before I build it out, can I just ask — what's the one thing you'd most want solved if we did work together?"`,
                r: `"Perfect. Give me 15 minutes tomorrow. I'll custom-build the proposal around that exact thing and send it the same day."`,
            },
            script: `"Absolutely — and I want it to be worth your time to actually read it. Before I build it out, can I grab 15 minutes tomorrow to make sure I'm building it around what actually matters for your business? I'll have a first draft back to you the same day."`,
            notes: `Never send a cold PDF. A generic proposal is a rejection letter in disguise. The meeting IS the product.`,
            preemptQuestion: `"What would need to be true for you to pull the trigger on something like this within the next 30 days?"`,
        },
        {
            id: 'cc-2',
            smokescreen: `"We don't have budget for this right now."`,
            rootCause: `"Budget" is almost never the issue — priority is. If they truly believed this would 10x their revenue, they'd find the money in 24 hours.`,
            rootCauseLabel: 'LACK OF URGENCY',
            reframe: `Point to the cost of inaction and restructure the investment into a phased approach that removes the upfront barrier.`,
            airSteps: {
                a: `"Totally fair — timing is everything and I respect that."`,
                i: `"I'm curious — is it a cash flow issue right now, or is it more that this isn't the right priority for this quarter?"`,
                r: `"If I could structure this so Phase 1 is under $1,500 and the rest is tied to results, would that change the conversation?"`,
            },
            script: `"Totally fair — timing matters. Can I ask though: you mentioned the current system is costing you [X] leads per month. At your average client value, that's roughly $[Y] walking out the door monthly. If I structured this in phases — maybe $1,500 upfront for Phase 1 and the balance in 60 days — would that make sense to at least get started?"`,
            notes: `Always quantify the cost of NOT acting. "No budget" dissolves when you show them it's costing more to stand still.`,
            preemptQuestion: `"What does the status quo cost you if nothing changes in the next 6 months?"`,
        },
        {
            id: 'cc-3',
            smokescreen: `"We already work with someone who handles this."`,
            rootCause: `They're either loyal, afraid of change, or don't see why you're different. They're not saying no — they're saying "prove it."`,
            rootCauseLabel: 'DISTRUST',
            reframe: `You don't need them to fire their current vendor. You're positioning yourself in the gap their vendor doesn't touch.`,
            airSteps: {
                a: `"That's great — who are you working with? [Pause to let them answer.]"`,
                i: `"Do they handle the full back-end as well? Like custom client portals, automation, internal ops systems? Or is it more the design and marketing layer?"`,
                r: `"Got it — that's exactly the gap we live in. We're not competing with them, we're the silent engine underneath that most agencies don't touch."`,
            },
            script: `"That's great — who are you with? [Pause.] I know them — they're strong on the creative side. Quick question: do they handle the deep operational back-end? Like custom automation, client portals, internal systems? Or is it mainly the marketing and brand layer? Because that's the gap we live in — we're not competing with them, we're the infrastructure underneath."`,
            notes: `Curiosity disarms defensiveness. Ask about the current vendor before you position against them.`,
            preemptQuestion: `"Is there anything your current vendor can't handle that you've been meaning to solve?"`,
        },
        {
            id: 'cc-4',
            smokescreen: `"I'm stepping into a meeting / not a good time."`,
            rootCause: `Could be genuinely bad timing, or a reflexive deflection. Either way, your job is to secure a hard callback — not to keep talking.`,
            rootCauseLabel: 'LACK OF URGENCY',
            reframe: `Respect their time, own the next step, and create a specific appointment — not a vague "call back later."`,
            airSteps: {
                a: `"No problem at all — I'll be quick."`,
                i: `"I have one question and I'll let you go: is [pain point] something that's active on your radar right now, or not a priority?"`,
                r: `"Perfect. I'll call you at [specific time]. I'll keep it to 10 minutes — is morning or afternoon better for you?"`,
            },
            script: `"No problem — I'll be quick. One question: is [their core pain point] something that's on your radar right now, or not a priority this quarter? [Let them answer.] Got it. I'll call you back at [specific time] — I'll keep it to 10 minutes flat. Morning or afternoon?"`,
            notes: `Get a specific time, not a soft "call me next week." Soft callbacks don't happen.`,
        },
    ],
    trust: [
        {
            id: 't-1',
            smokescreen: `"We got burned by a company like yours before."`,
            rootCause: `Real trauma. A previous vendor overpromised and under-delivered. This is actually your best opportunity — if you can de-risk everything.`,
            rootCauseLabel: 'DISTRUST',
            reframe: `Their past bad experience is your competitive advantage. Make the contrast crystal clear by exposing exactly what went wrong and proving your model eliminates that risk.`,
            airSteps: {
                a: `"I'm really glad you told me that — because that's not uncommon and it's the reason I work the way I do."`,
                i: `"Can I ask — what exactly went wrong? Was it communication, a bad final product, or they disappeared after the deposit?"`,
                r: `"That's exactly the problem we built our model to solve. Everything we do is milestone-based — you approve each phase before we build the next. You never pay for work you haven't seen and signed off on."`,
            },
            script: `"I'm glad you told me that. Can you share what went wrong — was it the communication, they disappeared after taking money, or the work just wasn't right? [Let them vent fully.] That's exactly why I built our model differently. Every deliverable is milestone-based with payments tied to your approval. You never pay for work you haven't reviewed and signed off on first."`,
            notes: `Let them talk. Venting externalizes the pain. After they vent, the emotional temperature drops and logic returns. THEN you present your de-risk model.`,
            preemptQuestion: `"What would need to happen for you to feel completely confident in a vendor relationship?"`,
        },
        {
            id: 't-2',
            smokescreen: `"Have you worked with [my specific niche] before?"`,
            rootCause: `They believe their business is unique and fear you won't understand their world. This is a disguised ask for social proof.`,
            rootCauseLabel: 'DISTRUST',
            reframe: `Pivot from industry experience to problem experience. The problems you solve (bad leads, slow sites, broken funnels) are universal.`,
            airSteps: {
                a: `"Great question — and honestly, the principles that make a business work online are the same across industries."`,
                i: `"Let me ask: what specifically are you worried about that might be unique to your niche?"`,
                r: `"The core problems we solve — slow load times bleeding SEO, a form funnel that loses leads, a backend that doesn't connect to revenue — those are exactly what [their niche competitor] was dealing with before we fixed them."`,
            },
            script: `"Great question. The core problems we solve — a site that's bleeding leads, a backend that isn't connected to your ops, or conversion issues — those are identical whether you're a law firm, a medical spa, or a restaurant. That said, I've specifically worked with [closest adjacent niche], so the learning curve is minimal. What specifically concerns you?"`,
            notes: `Always have 2–3 proof points ready from adjacent industries. Similarity beats identity for niche credibility.`,
            preemptQuestion: `"What's the most niche-specific challenge you'd need us to understand to work effectively together?"`,
        },
        {
            id: 't-3',
            smokescreen: `"Can you guarantee results / ROI?"`,
            rootCause: `They're scared of spending money without certainty. This is also a sign they've been sold phantom promises before.`,
            rootCauseLabel: 'FEAR',
            reframe: `No one can guarantee results — but you can guarantee the inputs and your accountability if targets aren't met.`,
            airSteps: {
                a: `"I appreciate you asking that directly — it's the right question."`,
                i: `"What specific outcome would you need to see to feel like this was worth the investment?"`,
                r: `"I can't guarantee a specific revenue number — and honestly, anyone who does is lying to you. What I can guarantee: deliverables on time, performance baselines we agree on upfront, and if those aren't hit after 90 days, we work for free until they are."`,
            },
            script: `"That's a fair ask. I won't guarantee a revenue number — that would mean I control your sales team, your market, your pricing — I don't. What I can guarantee: the site will load in under 2 seconds, the lead form will have a <3% drop-off rate, and if the baseline metrics we agree on aren't hit in 90 days, we extend our engagement at no charge until they are."`,
            notes: `Replace vague ROI guarantees with specific, measurable performance guarantees. Precision builds more trust than promises.`,
        },
    ],
    pricing: [
        {
            id: 'p-1',
            smokescreen: `"Your price is too high / Competitor X quoted less."`,
            rootCause: `They're trying to commoditize your work. The danger: you allow it by focusing on price instead of reframing the comparison.`,
            rootCauseLabel: 'PRICE FIXATION',
            reframe: `The comparison is apples to oranges. Expose what's NOT included in the competitor's quote and anchor cost to the downside of a cheap solution failing.`,
            airSteps: {
                a: `"I appreciate you being upfront with me — let's look at this directly."`,
                i: `"What exactly did they quote you? Because in my experience, the price gap almost always comes from scope differences."`,
                r: `"Our builds include custom backend logic, proper infrastructure, and a 90-day performance guarantee. Are they including all of that? Because the cost of a system failing 6 months from now — downtime, emergency fixes, lost leads — almost always exceeds the initial savings."`,
            },
            script: `"I appreciate you telling me. Can I ask what exactly they were quoting? Because in my experience, the price difference almost always lives in the scope. Our work includes custom backend architecture, proper hosting infrastructure, 90-day performance guarantees, and real support. Are they including all of that? Because when a core system breaks — and cheap builds do break — the downtime cost almost always exceeds the savings."`,
            notes: `Never defend your price. Instead, make them defend the cheaper option by exposing what it lacks. Let silence do the work after you ask your question.`,
            preemptQuestion: `"What would it cost your business if the new system was down for a week after launch?"`,
        },
        {
            id: 'p-2',
            smokescreen: `"I need to think about it."`,
            rootCause: `This is the most common smoke screen of all. It almost never means "I need more time" — it means "I'm not convinced enough yet." The real objection is buried underneath.`,
            rootCauseLabel: 'CONFUSION',
            reframe: `Surface the actual objection by making it safe to be honest. "Think about it" is always a symptom.`,
            airSteps: {
                a: `"That makes total sense — and I want to respect your process."`,
                i: `"Can I ask: is there a specific part you're unsure about? Because if there's a doubt I haven't addressed, I'd rather deal with it together right now than let it sit."`,
                r: `"[Once they reveal it] — Great, that's exactly what I want to address. Here's how we handle that..."`,
            },
            script: `"That makes total sense — and I want to respect that. Can I ask one thing though: is there a specific part of the solution you're unsure about? Because if there's a doubt I haven't addressed yet, I'd much rather tackle it together right now than have it sit. What's the thing that's giving you pause?"`,
            notes: `Silence after this question is golden. Don't fill it. The first thing they say after a pause is the real objection. That's what you're actually solving.`,
            preemptQuestion: `"On a scale of 1–10, how confident do you feel right now? What would make it a 10?"`,
        },
        {
            id: 'p-3',
            smokescreen: `"I need to talk to my partner / team / CFO first."`,
            rootCause: `Either they genuinely need approval, or it's a polite exit. Never assume — always find out which it is and offer to solve the problem directly.`,
            rootCauseLabel: 'LACK OF URGENCY',
            reframe: `Make it easy to bring you into the conversation. Become an asset in their internal sale rather than a victim of it.`,
            airSteps: {
                a: `"Absolutely — that makes sense, this isn't a one-person decision."`,
                i: `"Is your partner / CFO the main decision-maker, or are there other stakeholders? What are their biggest concerns typically?"`,
                r: `"I'd love to put together a one-page ROI summary specifically for them — built around their lens, not yours. That way you're going into that conversation armed, not hoping. Can I get that to you by tomorrow?"`,
            },
            script: `"Of course — this isn't a one-person decision and I respect that. Can I ask: what are the main concerns they typically raise when evaluating something like this? I want to make sure you're going in armed. I can put together a one-page ROI breakdown specifically framed for their questions. Would that help you close it internally?"`,
            notes: `Turn the partner into an ally, not a wall. Your job is to help your prospect sell internally. Give them the ammo.`,
            preemptQuestion: `"Who else in your organization will weigh in on a decision like this? Let's make sure we're building the case for all of them."`,
        },
        {
            id: 'p-4',
            smokescreen: `"Can we do a revenue-share or performance basis?"`,
            rootCause: `They want to eliminate all their risk and shift it to you. This often comes from low cash flow or low conviction in their own business.`,
            rootCauseLabel: 'FEAR',
            reframe: `Frame a performance arrangement as requiring something in return — access, control, and a strong enough business for it to be worth it for you.`,
            airSteps: {
                a: `"I hear you — and I've done rev-share arrangements before in the right situation."`,
                i: `"For that to work, I need to understand your current monthly revenue and what the growth trajectory looks like. Can you share those numbers with me?"`,
                r: `"Here's the thing: rev-share means we're business partners. I'd need full visibility into your analytics, sales data, and ops. If that's on the table, let's talk. Otherwise, the phased payment model gets you the same risk reduction without us needing to be partners."`,
            },
            script: `"I've done rev-share in the right situations — but it requires full visibility into your revenue, pipeline, and ops, because we'd effectively be business partners. Can you walk me through your current monthly revenue and growth rate? [Listen.] Based on what you're describing, I think the phased payment approach actually gives you more flexibility with less complexity. Let me show you what that looks like."`,
            notes: `Rev-share is a trap if not structured properly. Use it as a pivot to the phased model, which gives them risk reduction at a lower cost to you.`,
        },
    ],
};

/* ─────────────────────────────────────────────
   STYLES
───────────────────────────────────────────── */
const S = `
  .ob-root { max-width: 860px; margin: 0 auto; padding: 2rem 1.5rem 4rem; font-family: 'Inter', sans-serif; color: #94a3b8; }
  .ob-page-header { margin-bottom: 2.5rem; }
  .ob-badge { display: inline-block; padding: 3px 10px; border-radius: 4px; background: rgba(34,211,238,.15); color: #22d3ee; font-size: .7rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; margin-bottom: .6rem; }
  .ob-title { font-size: 2rem; font-weight: 800; color: #f1f5f9; line-height: 1.2; margin: 0 0 .5rem; }
  .ob-subtitle { color: #64748b; font-size: .95rem; line-height: 1.6; max-width: 640px; }
  .ob-air-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem; margin-bottom: 2.5rem; }
  @media(max-width:680px){ .ob-air-grid { grid-template-columns: 1fr; } }
  .ob-air-card { background: #080c18; border: 1px solid rgba(255,255,255,.07); border-radius: 12px; padding: 1.25rem; position: relative; overflow: hidden; }
  .ob-air-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; }
  .ob-air-a::before { background: linear-gradient(90deg, #06b6d4, #3b82f6); }
  .ob-air-i::before { background: linear-gradient(90deg, #8b5cf6, #ec4899); }
  .ob-air-r::before { background: linear-gradient(90deg, #10b981, #06b6d4); }
  .ob-air-letter { font-size: 2rem; font-weight: 900; line-height: 1; margin-bottom: .4rem; }
  .ob-air-a .ob-air-letter { color: #06b6d4; }
  .ob-air-i .ob-air-letter { color: #8b5cf6; }
  .ob-air-r .ob-air-letter { color: #10b981; }
  .ob-air-name { font-size: .75rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: #475569; margin-bottom: .5rem; }
  .ob-air-desc { font-size: .85rem; color: #94a3b8; line-height: 1.55; }
  .ob-air-example { margin-top: .75rem; padding: .5rem .75rem; background: rgba(255,255,255,.03); border-left: 2px solid rgba(255,255,255,.1); border-radius: 0 6px 6px 0; font-size: .8rem; color: #64748b; font-style: italic; }
  .ob-cat-tabs { display: flex; gap: .5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
  .ob-cat-tab { padding: .5rem 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,.07); background: #080c18; color: #64748b; font-size: .82rem; font-weight: 600; cursor: pointer; transition: all .18s; display: flex; align-items: center; gap: .4rem; }
  .ob-cat-tab:hover { border-color: rgba(34,211,238,.4); color: #94a3b8; }
  .ob-cat-tab.active { background: rgba(34,211,238,.1); border-color: #22d3ee; color: #67e8f9; }
  .ob-cat-desc { padding: .75rem 1rem; border-radius: 8px; background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.05); font-size: .85rem; color: #64748b; margin-bottom: 2rem; line-height: 1.55; }
  .ob-card { background: #080c18; border: 1px solid rgba(255,255,255,.07); border-radius: 14px; margin-bottom: 1.25rem; overflow: hidden; transition: border-color .18s; }
  .ob-card:hover { border-color: rgba(34,211,238,.3); }
  .ob-card-header { padding: 1.25rem 1.5rem; cursor: pointer; display: flex; align-items: center; justify-content: space-between; gap: 1rem; user-select: none; }
  .ob-card-header-left { display: flex; align-items: center; gap: .75rem; flex: 1; min-width: 0; flex-wrap: wrap; }
  .ob-root-badge { padding: 2px 8px; border-radius: 4px; font-size: .65rem; font-weight: 800; letter-spacing: .08em; text-transform: uppercase; white-space: nowrap; flex-shrink: 0; }
  @media (max-width: 480px) {
    .ob-card-header { padding: 1rem; gap: .5rem; }
    .ob-card-header-left { flex-direction: column; align-items: flex-start; gap: .35rem; }
    .ob-smokescreen { font-size: .875rem; }
    .ob-air-grid { grid-template-columns: 1fr; }
    .ob-pre-grid { grid-template-columns: 1fr; }
    .ob-cat-tab { font-size: .78rem; padding: .4rem .75rem; width: 100%; }
    .ob-root { padding: 1.5rem 1rem 3rem; }
    .ob-title { font-size: 1.65rem; }
  }
  .badge-FEAR { background: rgba(239,68,68,.15); color: #f87171; border: 1px solid rgba(239,68,68,.25); }
  .badge-CONFUSION { background: rgba(245,158,11,.15); color: #fbbf24; border: 1px solid rgba(245,158,11,.25); }
  .badge-DISTRUST { background: rgba(139,92,246,.15); color: #a78bfa; border: 1px solid rgba(139,92,246,.25); }
  .badge-LACK\\ OF\\ URGENCY { background: rgba(20,184,166,.15); color: #2dd4bf; border: 1px solid rgba(20,184,166,.25); }
  .badge-PRICE\\ FIXATION { background: rgba(251,146,60,.15); color: #fb923c; border: 1px solid rgba(251,146,60,.25); }
  .ob-smokescreen { font-size: .95rem; font-weight: 600; color: #e2e8f0; }
  .ob-chevron { color: #475569; font-size: .85rem; transition: transform .2s; flex-shrink: 0; }
  .ob-chevron.open { transform: rotate(180deg); }
  .ob-card-body { border-top: 1px solid rgba(255,255,255,.05); padding: 1.25rem 1.5rem; display: none; }
  .ob-card-body.open { display: block; }
  .ob-section-label { font-size: .65rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; margin-bottom: .4rem; }
  .ob-root-cause { margin-bottom: 1.25rem; }
  .ob-root-cause .ob-section-label { color: #f87171; }
  .ob-root-cause p { font-size: .875rem; color: #94a3b8; line-height: 1.6; margin: 0; }
  .ob-air-breakdown { margin-bottom: 1.25rem; background: rgba(255,255,255,.02); border: 1px solid rgba(255,255,255,.05); border-radius: 10px; padding: 1rem 1.25rem; }
  .ob-air-breakdown .ob-section-label { color: #818cf8; margin-bottom: .75rem; }
  .ob-air-step { display: flex; gap: .75rem; margin-bottom: .65rem; align-items: flex-start; }
  .ob-air-step:last-child { margin-bottom: 0; }
  .ob-air-step-letter { font-size: .75rem; font-weight: 900; min-width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }
  .air-a { background: rgba(6,182,212,.15); color: #06b6d4; }
  .air-i { background: rgba(139,92,246,.15); color: #8b5cf6; }
  .air-r { background: rgba(16,185,129,.15); color: #10b981; }
  .ob-air-step p { margin: 0; font-size: .845rem; color: #94a3b8; line-height: 1.55; }
  .ob-script { margin-bottom: 1.25rem; }
  .ob-script .ob-section-label { color: #22d3ee; }
  .ob-script-box { background: rgba(34,211,238,.06); border: 1px solid rgba(34,211,238,.2); border-left: 3px solid #22d3ee; border-radius: 0 8px 8px 0; padding: .9rem 1rem; font-size: .875rem; color: #a5f3fc; line-height: 1.65; font-style: italic; }
  .ob-notes { margin-bottom: 1.25rem; }
  .ob-notes .ob-section-label { color: #f59e0b; }
  .ob-notes p { font-size: .845rem; color: #94a3b8; line-height: 1.6; margin: 0; background: rgba(245,158,11,.06); border: 1px solid rgba(245,158,11,.15); border-radius: 8px; padding: .7rem .9rem; }
  .ob-preempt .ob-section-label { color: #34d399; }
  .ob-preempt-box { background: rgba(16,185,129,.06); border: 1px solid rgba(16,185,129,.2); border-radius: 8px; padding: .7rem .9rem; font-size: .845rem; color: #6ee7b7; font-style: italic; }
  .ob-pre-section { margin-top: 3rem; }
  .ob-pre-title { font-size: 1.25rem; font-weight: 800; color: #f1f5f9; margin-bottom: .4rem; }
  .ob-pre-subtitle { font-size: .875rem; color: #64748b; line-height: 1.6; margin-bottom: 1.5rem; }
  .ob-pre-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  @media(max-width: 620px){ .ob-pre-grid { grid-template-columns: 1fr; } }
  .ob-pre-card { background: #080c18; border: 1px solid rgba(255,255,255,.07); border-radius: 12px; padding: 1.1rem 1.25rem; }
  .ob-pre-card-title { font-size: .8rem; font-weight: 700; color: #e2e8f0; margin-bottom: .6rem; }
  .ob-pre-card-q { font-size: .82rem; color: #34d399; font-style: italic; margin-bottom: .4rem; line-height: 1.55; }
  .ob-pre-card-why { font-size: .77rem; color: #475569; line-height: 1.5; }
  .ob-divider { border: none; border-top: 1px solid rgba(255,255,255,.06); margin: 2.5rem 0; }
`;

const PREEMPTION_GUIDE = [
    { title: 'Kill the Budget Objection', question: `"What does the status quo cost you if nothing changes in the next 6 months?"`, why: `Forces them to quantify inaction. When they name a number, budget becomes a rational — not emotional — conversation.` },
    { title: 'Kill the Think About It Objection', question: `"On a scale of 1–10, how confident do you feel right now? What would make it a 10?"`, why: `Surfaces hidden doubts before the close so you can resolve them in real time.` },
    { title: 'Kill the Partner Approval Objection', question: `"Who else will weigh in on this decision? Let's make sure we build the case for all of them."`, why: `Identifies stakeholders early so you can prep your champion to sell internally.` },
    { title: 'Kill the Price Objection', question: `"What would it cost your business if this system was down for a week after launch?"`, why: `Anchors cost to risk rather than the invoice. Makes price look small by comparison.` },
    { title: 'Kill the Already Have Someone Objection', question: `"Is there anything your current vendor can't handle that you've been meaning to fix?"`, why: `Finds the gap before the objection is raised so you can position into it naturally.` },
    { title: `Kill the "Burned Before" Objection`, question: `"What would need to happen for you to feel completely safe in a vendor relationship?"`, why: `Lets them define the de-risk criteria themselves, then you match your model to it exactly.` },
];

function AirFramework() {
    const steps = [
        { letter: 'A', cls: 'ob-air-a', name: 'Acknowledge & Align', desc: `Validate their concern so they drop their guard. They need to feel heard before they'll listen to you.`, example: `"That makes total sense — and honestly…"` },
        { letter: 'I', cls: 'ob-air-i', name: 'Isolate', desc: `Confirm this is the ONLY roadblock before solving it. Solving the wrong objection costs you the deal.`, example: `"Aside from that, is there anything else holding us back?"` },
        { letter: 'R', cls: 'ob-air-r', name: 'Reframe & Resolve', desc: `Pivot their mental frame, then deliver the specific response that dissolves the real concern.`, example: `"Here's a different way to look at this…"` },
    ];
    return (
        <div style={{ marginBottom: '2rem' }}>
            <p style={{ fontSize: '.8rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#475569', marginBottom: '1rem' }}>The Universal Framework</p>
            <div className="ob-air-grid">
                {steps.map(s => (
                    <div key={s.letter} className={`ob-air-card ${s.cls}`}>
                        <div className="ob-air-letter">{s.letter}</div>
                        <div className="ob-air-name">{s.name}</div>
                        <div className="ob-air-desc">{s.desc}</div>
                        <div className="ob-air-example">{s.example}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function ObjectionCard({ item }: { item: Objection }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="ob-card">
            <div className="ob-card-header" onClick={() => setOpen(o => !o)}>
                <div className="ob-card-header-left">
                    <span className={`ob-root-badge badge-${item.rootCauseLabel.replace(/ /g, '\\ ')}`}>{item.rootCauseLabel}</span>
                    <span className="ob-smokescreen">{item.smokescreen}</span>
                </div>
                <span className={`ob-chevron ${open ? 'open' : ''}`}>▼</span>
            </div>
            <div className={`ob-card-body ${open ? 'open' : ''}`}>
                <div className="ob-root-cause">
                    <div className="ob-section-label">🔍 Root Cause</div>
                    <p>{item.rootCause}</p>
                </div>
                <div className="ob-air-breakdown">
                    <div className="ob-section-label">⚡ A.I.R. Breakdown</div>
                    {(['a', 'i', 'r'] as const).map(k => (
                        <div key={k} className="ob-air-step">
                            <span className={`ob-air-step-letter air-${k}`}>{k.toUpperCase()}</span>
                            <p>{item.airSteps[k]}</p>
                        </div>
                    ))}
                </div>
                <div className="ob-script">
                    <div className="ob-section-label">📝 Full Script</div>
                    <div className="ob-script-box">{item.script}</div>
                </div>
                {item.notes && (
                    <div className="ob-notes">
                        <div className="ob-section-label">💡 Coaching Note</div>
                        <p>{item.notes}</p>
                    </div>
                )}
                {item.preemptQuestion && (
                    <div className="ob-preempt">
                        <div className="ob-section-label">🛡️ Discovery Preemption</div>
                        <div className="ob-preempt-box">{item.preemptQuestion}</div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function Module5() {
    const [activeCategory, setActiveCategory] = useState<Category>('cold-call');
    const catData = CATEGORIES.find(c => c.id === activeCategory)!;

    return (
        <>
            <style>{S}</style>
            <div className="ob-root">
                <div className="ob-page-header">
                    <div className="ob-badge">Module 05 — Core</div>
                    <h2 className="ob-title">Objections Masterclass</h2>
                    <p className="ob-subtitle">
                        Every objection is a request for more information or proof that you haven&apos;t built enough value yet.
                        Elite reps don&apos;t fight objections at the close — they systematically eliminate them during discovery.
                        Study the A.I.R. framework, internalize the root causes, and run the scripts until they&apos;re automatic.
                    </p>
                </div>

                <AirFramework />
                <hr className="ob-divider" />

                <div className="ob-cat-tabs">
                    {CATEGORIES.map(c => (
                        <button key={c.id} className={`ob-cat-tab ${activeCategory === c.id ? 'active' : ''}`} onClick={() => setActiveCategory(c.id)}>
                            {c.icon} {c.label}
                        </button>
                    ))}
                </div>

                <div className="ob-cat-desc">{catData.description}</div>

                {OBJECTIONS[activeCategory].map(item => (
                    <ObjectionCard key={item.id} item={item} />
                ))}

                <hr className="ob-divider" />

                <div className="ob-pre-section">
                    <p style={{ fontSize: '.8rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#475569', marginBottom: '.4rem' }}>Advanced Technique</p>
                    <div className="ob-pre-title">🛡️ The Preemption System</div>
                    <p className="ob-pre-subtitle">Elite reps don&apos;t handle objections at the close — they kill them in Discovery. Ask these questions in Module 3 and most of the objections above will never surface.</p>
                    <div className="ob-pre-grid">
                        {PREEMPTION_GUIDE.map((p, i) => (
                            <div key={i} className="ob-pre-card">
                                <div className="ob-pre-card-title">{p.title}</div>
                                <div className="ob-pre-card-q">{p.question}</div>
                                <div className="ob-pre-card-why">{p.why}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
