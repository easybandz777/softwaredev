'use client';

import React, { useState } from 'react';

/* ─────────────────────────────────────────────
   DATA — All unique content. Core objections are in Module 5.
   BonusB focuses on SOFTWARE/SYSTEM-SPECIFIC objections reps
   encounter when selling custom builds, full-stack platforms,
   and operational systems — NOT the standard cold-call / trust
   / pricing walls covered in Module 5.
───────────────────────────────────────────── */

type Category = 'software-build' | 'timeline' | 'stakeholders' | 'migration';

interface Objection {
    id: string;
    smokescreen: string;
    rootCause: string;
    rootCauseLabel: 'TECH ANXIETY' | 'CONTROL FEAR' | 'STATUS QUO BIAS' | 'INTERNAL POLITICS' | 'SCOPE CONFUSION';
    reframe: string;
    airSteps: { a: string; i: string; r: string };
    script: string;
    notes?: string;
    preemptQuestion?: string;
}

const CATEGORIES: { id: Category; label: string; icon: string; description: string }[] = [
    {
        id: 'software-build',
        label: 'Build vs. Buy Objections',
        icon: '🖥️',
        description: 'Prospects who think off-the-shelf software (Salesforce, HubSpot, Wix, etc.) can replace a custom build. Your job: expose the ceiling those tools hit at scale.',
    },
    {
        id: 'timeline',
        label: 'Timeline & Delivery Concerns',
        icon: '⏱️',
        description: `They want it yesterday. Or they think 6 weeks is too long. These objections stem from misunderstanding what's being built — or past trauma from vendors who missed deadlines.`,
    },
    {
        id: 'stakeholders',
        label: 'Stakeholder & Decision Walls',
        icon: '👥',
        description: `Multiple decision-makers, board approvals, or partner sign-offs. These aren't objections — they're a test of whether you can help your champion sell internally.`,
    },
    {
        id: 'migration',
        label: 'Migration & Risk Objections',
        icon: '🔄',
        description: `Fear of switching. Fear of downtime. Fear of losing data. These are the highest-friction objections because the prospect is weighing comfort vs. transformation.`,
    },
];

const OBJECTIONS: Record<Category, Objection[]> = {
    'software-build': [
        {
            id: 'sb-1',
            smokescreen: `"We can just use Salesforce / HubSpot for this."`,
            rootCause: `They're comparing a $150/seat SaaS to a custom-built revenue system. They don't yet understand the difference between a general tool and a tailored architecture.`,
            rootCauseLabel: 'TECH ANXIETY',
            reframe: `Salesforce is a toolkit — you still need to build the house. QuantLab builds the house AND hands them the keys.`,
            airSteps: {
                a: `"Salesforce is a great platform — there's a reason it's a $200B company."`,
                i: `"Quick question: who on your team would configure it, build the custom workflows, and maintain it? Do you have a Salesforce admin on payroll?"`,
                r: `"That's exactly the gap. Salesforce gives you the Legos. We build the finished product — your custom intake, portal, automations, and dashboards — and maintain it so you never need to hire a dev. The total cost of Salesforce + admin + customization is typically 3–5x what we charge."`,
            },
            script: `"Salesforce is a powerful platform. Quick question though: who on your team would set it up, build the custom workflows, connect it to your intake forms, and maintain it long-term? Do you have a Salesforce admin? Because most businesses your size end up spending $80–120K on Salesforce licensing + a consultant to configure it, and they still don't get a client-facing portal or custom dashboard. With us, you get the entire finished system — built, maintained, and optimized — for a fraction of that."`,
            notes: `Never trash Salesforce. Instead, expose the hidden costs: licensing, admin salary, consultant fees, customization time. Make the math obvious.`,
            preemptQuestion: `"What tools are you currently using, and how much time does your team spend configuring and maintaining them?"`,
        },
        {
            id: 'sb-2',
            smokescreen: `"Can't we just use WordPress / Wix / Squarespace?"`,
            rootCause: `They see all websites as equal. They don't understand the difference between a brochure site and a revenue-generating system with backend logic, portals, and automation.`,
            rootCauseLabel: 'SCOPE CONFUSION',
            reframe: `WordPress is a website. What we're building is an operating system for their business. Completely different category.`,
            airSteps: {
                a: `"Absolutely — those platforms have their place, especially for getting started."`,
                i: `"Can I ask — does WordPress handle your client intake, auto-generate invoices, send automated follow-ups, and give your clients a login portal to track their project?"`,
                r: `"That's the difference. We're not building a website — we're building the digital infrastructure that runs your business. WordPress can't do what we're talking about without stitching together 15 plugins that break on every update."`,
            },
            script: `"WordPress is great for getting started — no argument. But here's the honest truth: what we're building isn't a website. It's the operational system that runs your client lifecycle — from the first form submission to the final invoice. Can WordPress auto-assign leads to your team, create project records, send branded client login portals, and sync with your accounting? Not without 15 plugins duct-taped together. And when one updates and breaks the rest — who fixes it at 2 PM on a Tuesday?"`,
            notes: `The key phrase is 'operational system, not a website.' Frame the conversation at a higher level than they're thinking.`,
            preemptQuestion: `"If you imagine the perfect digital version of how your business operates — intake to delivery to payment — would a template site cover all of that?"`,
        },
        {
            id: 'sb-3',
            smokescreen: `"My nephew / a freelancer can build this for way less."`,
            rootCause: `They're optimizing for cost, not outcome. They don't yet see the risk profile of an unsupported one-person build.`,
            rootCauseLabel: 'TECH ANXIETY',
            reframe: `The build is 20% of the value. The other 80% is architecture decisions, ongoing support, and someone answering the phone when it breaks.`,
            airSteps: {
                a: `"That's a great option for simple projects — and I mean that sincerely."`,
                i: `"Let me ask: if the system goes down on a Monday morning and your freelancer is on another project, who fixes it? And who's making sure the architecture scales as you grow?"`,
                r: `"Our builds come with dedicated engineering support, security patching, performance monitoring, and architecture that scales. A freelancer builds it and moves on. We build it and stay."`,
            },
            script: `"I totally respect that — freelancers can do solid work. The risk isn't the initial build. It's Month 6. When a payment integration breaks. When you want to add a feature and they're booked for 3 months. When a security vulnerability hits and no one's monitoring. We provide the same quality build PLUS ongoing architecture support, uptime monitoring, and a team that answers in 4 hours, not 4 weeks."`,
            notes: `Position the freelancer as good for v1, but inadequate for a growing business. The question is: are they building for today or for scale?`,
        },
        {
            id: 'sb-4',
            smokescreen: `"We tried custom software before and it was a nightmare."`,
            rootCause: `Genuine past trauma. A vendor overpromised, went over budget, delivered late, or produced something unusable. This is actually your strongest sales opportunity.`,
            rootCauseLabel: 'TECH ANXIETY',
            reframe: `Their bad experience tells you exactly what to de-risk. Match your process against every failure point from their last vendor.`,
            airSteps: {
                a: `"I hear that more often than you'd think — and it's actually why our process looks the way it does."`,
                i: `"Can I ask what specifically went wrong? Was it scope creep, communication, or the final product just didn't work?"`,
                r: `"We built our process to prevent exactly that. Milestone-based delivery — you see and approve each phase before the next starts. Weekly video updates. And a fixed-scope contract so there are no surprise invoices."`,
            },
            script: `"I hear you. Can you tell me what went wrong? Was it the communication, the timeline, or did the end product just not do what they promised? [Let them talk fully.] That's exactly the pattern I see with agencies that take a deposit and disappear. Here's how we prevent that: we break every project into 2-week sprints. You review and approve each deliverable before we move forward. Payments are milestone-based — you never pay for work you haven't seen. And every Friday, you get a Loom video showing exactly what was built."`,
            notes: `Let them vent completely. The more specific their complaints, the more precisely you can position your de-risk model against each one.`,
            preemptQuestion: `"If you've worked with a tech vendor before, what would need to be different this time for you to feel completely comfortable?"`,
        },
    ],
    timeline: [
        {
            id: 'tl-1',
            smokescreen: `"6 weeks is too long — we need this done in 2."`,
            rootCause: `They either underestimate the complexity or have an external deadline driving urgency. Either way, rushing a build guarantees a broken product.`,
            rootCauseLabel: 'SCOPE CONFUSION',
            reframe: `Speed is a feature we can build for — but only if we scope correctly. A 2-week build and a 6-week build are different products.`,
            airSteps: {
                a: `"I totally understand the urgency — and I want to hit your timeline."`,
                i: `"Can I ask what's driving the 2-week deadline? Is there an event, a launch, or a season you're trying to hit?"`,
                r: `"Here's what I can do: we launch a high-impact Phase 1 in 2 weeks — your core intake system and lead capture. Then we build out the full portal, automations, and dashboard over the remaining 4 weeks. You get immediate value AND a complete system."`,
            },
            script: `"I hear you — speed matters. Let me ask: what's driving the 2-week timeline? An event? A season? [Listen.] Here's my honest take: if I rush the entire build into 2 weeks, I'm cutting corners on testing, security, and architecture. Instead, let me propose this: we launch Phase 1 — your core lead capture and intake system — in exactly 14 days. You start generating value immediately. Then we build out the full system over the next 4 weeks with zero downtime."`,
            notes: `Always break timeline objections into phased delivery. A 'no' to 6 weeks often becomes a 'yes' to 2 weeks for Phase 1.`,
            preemptQuestion: `"If we could run this in phases — immediate impact first, full system second — would that work with your timeline?"`,
        },
        {
            id: 'tl-2',
            smokescreen: `"What happens if you miss the deadline?"`,
            rootCause: `Previous bad experiences with vendors who promised and didn't deliver. They need contractual accountability, not just verbal reassurance.`,
            rootCauseLabel: 'CONTROL FEAR',
            reframe: `Don't just promise — de-risk with specific contractual terms and transparent project tracking.`,
            airSteps: {
                a: `"That's the right question to ask — and honestly, most vendors can't answer it."`,
                i: `"If we agreed to specific milestone dates with a penalty clause for missed deadlines, would that resolve the concern?"`,
                r: `"Here's our commitment: every deliverable has a hard date. If we miss a milestone by more than 5 business days without your approval, the next phase is discounted by 15%. Plus, you'll have access to a live project tracker updated every 48 hours so you can see exactly where things stand."`,
            },
            script: `"Great question. Here's how we handle that: every milestone has a contractual delivery date. If we miss any milestone by more than 5 business days — without your prior approval — we discount the next phase by 15%. You'll also have access to a live project tracker updated twice a week, so there are zero surprises. Most importantly, in our last 12 builds, we've hit every deadline. I can connect you with references who'll confirm that."`,
            notes: `Put your money where your mouth is. Concrete penalties and transparency build trust faster than promises.`,
        },
        {
            id: 'tl-3',
            smokescreen: `"We want to wait until Q3 / next year / after the busy season."`,
            rootCause: `Comfort with the status quo. They're not in enough pain to act now. Your discovery didn't build enough urgency.`,
            rootCauseLabel: 'STATUS QUO BIAS',
            reframe: `Calculate the cost of waiting. Every month they delay, they're losing the leads and revenue the system would capture.`,
            airSteps: {
                a: `"Timing is important — and I wouldn't want you to start something when you can't give it attention."`,
                i: `"Can I ask: what changes between now and Q3 that makes it a better time? And in the meantime, how many leads slip through the cracks each month?"`,
                r: `"You mentioned you're losing about 5 qualified leads per month to your broken intake process. At $3,000 average client value, that's $15,000/month walking away. By Q3, that's $60,000 in lost revenue. If we start now, the system is live before your busy season even hits."`,
            },
            script: `"I hear you — and I don't want to force timing. But let me ask: you mentioned 5 leads per month are dropping off. At your $3K average client value, that's $15K/month. Between now and Q3, that's $60K in lost revenue. If we start the build now, your automated intake system is live in 6 weeks — which means you catch your busy season with a fully operational lead machine instead of the same broken process."`,
            notes: `"I'll wait" is always the most expensive decision. Help them see the math, then let the numbers apply the pressure.`,
            preemptQuestion: `"What does the next 6 months look like if nothing changes in your current setup?"`,
        },
    ],
    stakeholders: [
        {
            id: 'st-1',
            smokescreen: `"I need to run this by my partner / co-founder."`,
            rootCause: `Could be genuine or a polite exit. Your job: find out which one, and arm your champion to sell internally.`,
            rootCauseLabel: 'INTERNAL POLITICS',
            reframe: `Become an asset in their internal negotiation. Give them the tools to win approval.`,
            airSteps: {
                a: `"Absolutely — this is a big decision and both of you should be aligned."`,
                i: `"What does your partner typically focus on in decisions like this — is it more about the ROI, the timeline, or the risk?"`,
                r: `"I'm going to build you a one-page ROI summary specifically framed around their concerns. I can also jump on a quick 15-minute call with both of you if that would make the decision easier."`,
            },
            script: `"Of course — I'd want the same thing. Quick question: what does your partner typically care most about — the financials, the timeline, or the risk profile? [Listen.] Perfect. Let me build a one-page executive summary tailored to those exact points. And if it would help, I'm happy to jump on a 15-minute call with both of you. I'll keep it tight and focused on the metrics that matter to them."`,
            notes: `The worst thing you can do is let your champion walk into the conversation with just a verbal pitch. Arm them with a document.`,
            preemptQuestion: `"Who else will weigh in on this decision? I want to make sure we build the case for everyone involved."`,
        },
        {
            id: 'st-2',
            smokescreen: `"Our board / leadership likes to evaluate multiple vendors."`,
            rootCause: `Due diligence is standard for larger organizations. This isn't an objection — it's a process. Your job: make sure you win the comparison.`,
            rootCauseLabel: 'INTERNAL POLITICS',
            reframe: `Welcome the comparison. Give them an evaluation framework that naturally highlights your strengths.`,
            airSteps: {
                a: `"That makes total sense — I'd encourage the same thing. A decision this important deserves due diligence."`,
                i: `"What criteria is the board evaluating? If I know their scorecard, I can make sure our proposal directly addresses each point."`,
                r: `"I'll put together a comparison matrix that shows our deliverables, timeline, support model, and total cost of ownership side by side. When they see the 3-year TCO including the hidden costs of the alternatives, the decision usually becomes very clear."`,
            },
            script: `"I encourage that — you should vet this thoroughly. Can you share the evaluation criteria the board is using? Better yet, can I build the comparison matrix for you? I'll include our deliverables, timeline, support terms, and — this is key — the total cost of ownership over 3 years. Most competitors quote low upfront but don't include hosting, maintenance, security patches, or support. When your board sees the full picture, the math does the talking."`,
            notes: `Build the evaluation framework yourself. If you set the criteria, you set the anchors. Include TCO, not just upfront cost.`,
            preemptQuestion: `"Is there a formal evaluation process for tech investments at your organization? If so, I'd love to tailor our proposal to your exact criteria."`,
        },
        {
            id: 'st-3',
            smokescreen: `"My IT team has concerns about security / compliance."`,
            rootCause: `IT teams gatekeep vendor decisions to protect the org — and to protect their own authority. This is a legitimate concern that needs direct, technical answers.`,
            rootCauseLabel: 'CONTROL FEAR',
            reframe: `Don't fight the IT team — recruit them. Offer a direct conversation and provide technical documentation proactively.`,
            airSteps: {
                a: `"That's exactly the kind of diligence I'd want from an IT team protecting your infrastructure."`,
                i: `"What specifically are they concerned about? Is it data residency, authentication, access controls, or something else?"`,
                r: `"I'm going to send over our security documentation — SOC 2 practices, data handling policies, and architecture diagrams. I'm also happy to get on a 20-minute call directly with your IT lead to answer their technical questions head-on."`,
            },
            script: `"I respect that — security should be a gatekeeper on every vendor decision. Can you get me a list of their specific concerns? Even better, can I get 20 minutes directly with your technical lead? I'll share our architecture overview, hosting practices, data handling policies, and authentication approach. I'd rather answer their questions directly than play telephone."`,
            notes: `IT teams respect vendors who speak their language and don't dodge questions. One direct conversation is worth 10 emails.`,
            preemptQuestion: `"Does your organization have specific security or compliance requirements we should design around from the start?"`,
        },
    ],
    migration: [
        {
            id: 'mg-1',
            smokescreen: `"Switching systems will be too disruptive to our operations."`,
            rootCause: `Fear of the transition period. They're imagining a hard cutover where everything breaks at once.`,
            rootCauseLabel: 'STATUS QUO BIAS',
            reframe: `We don't do hard cutovers. The new system runs parallel to the old one until everyone is comfortable. Zero downtime transition.`,
            airSteps: {
                a: `"That's a valid concern — and honestly, most migrations ARE disruptive when done wrong."`,
                i: `"What part of the transition worries you most — the data move, the team retraining, or potential downtime?"`,
                r: `"Here's how we handle it: we build the new system alongside the old one. Your team starts using it in parallel — no hard cutover. When everyone's comfortable and the data is verified, we switch the DNS and the old system becomes the backup. Zero downtime, zero lost data."`,
            },
            script: `"You're right to be cautious — a bad migration can wreck a business. Here's our approach: we never do a hard cutover. The new system runs in parallel with your existing setup. Your team trains on it with real data while the old system stays live. Once everyone is confident and we've verified every record, we make the switch — and your old system stays as a backup for 30 days. Zero downtime. Zero data loss. We've done this for 20+ businesses and haven't lost a single record."`,
            notes: `'Parallel migration' is your magic phrase. It eliminates every fear about disruption. Practice saying it with confidence.`,
            preemptQuestion: `"What would a zero-downtime transition look like for you? What systems would need to keep running during the switch?"`,
        },
        {
            id: 'mg-2',
            smokescreen: `"What about our historical data? We can't lose 5 years of records."`,
            rootCause: `Legitimate fear. Data migration is the most anxiety-inducing part of a system change, especially for regulated industries.`,
            rootCauseLabel: 'CONTROL FEAR',
            reframe: `Data migration is a standard part of every engagement. Provide a specific, step-by-step process.`,
            airSteps: {
                a: `"Your data is sacred — that's non-negotiable and I completely agree."`,
                i: `"What format is your current data in? Is it in a database, spreadsheets, or scattered across multiple platforms?"`,
                r: `"Here's our process: we export everything, clean it, map it to the new schema, run a test import on a staging environment you can review, and only go live once you've verified every record. We also keep your raw data backup indefinitely. Nothing is ever deleted."`,
            },
            script: `"Your data is the crown jewel — we don't take that lightly. Here's the exact process: Phase 1, we export and audit every record. Phase 2, we clean and normalize it for the new system. Phase 3, we import it into a staging environment and give you access to verify. You check every record. Only when you sign off do we push to production. And we keep a full backup of your original data indefinitely. In 20+ migrations, we've never lost a single record."`,
            notes: `Specificity kills fear. Walk them through the exact steps, and offer to show a previous migration case study.`,
            preemptQuestion: `"What does your current data landscape look like? How many systems hold critical records right now?"`,
        },
        {
            id: 'mg-3',
            smokescreen: `"Our team won't adopt a new system — they'll resist the change."`,
            rootCause: `Internal change management is the #1 reason system implementations fail. This prospect is smart for raising it.`,
            rootCauseLabel: 'STATUS QUO BIAS',
            reframe: `Adoption is an engineering problem, not a training problem. Build the system so intuitive that resistance dies on contact.`,
            airSteps: {
                a: `"That's honestly the most important concern you've raised — and most vendors ignore it."`,
                i: `"Who on your team is the most resistant to change? And what's the biggest source of friction in their current workflow?"`,
                r: `"We design every interface around the user who hates software. If your least technical team member can use it in 10 minutes without a manual, we've done our job. Plus, we provide hands-on training sessions, recorded walkthroughs, and a 30-day adoption support window where your team can reach us directly with questions."`,
            },
            script: `"You're asking the right question — and most vendors skip this entirely. Here's our approach: we design for your LEAST technical team member. If they can complete their core tasks in under 10 minutes with zero training, the system is built right. On top of that, we run hands-on training sessions for your team, record video walkthroughs for every workflow, and provide a 30-day direct-access support window. In our experience, adoption resistance disappears when the system is genuinely easier than what they were doing before."`,
            notes: `"Designed for the person who hates software" is a powerful phrase. It signals empathy and practical UX thinking.`,
            preemptQuestion: `"If we build this, who on your team will use it most? What does their current process look like?"`,
        },
        {
            id: 'mg-4',
            smokescreen: `"What if the new system doesn't work and we're stuck?"`,
            rootCause: `Catastrophizing. They're imagining the worst case: new system fails, old system is gone, business grinds to a halt.`,
            rootCauseLabel: 'CONTROL FEAR',
            reframe: `Build a contractual safety net. If it doesn't perform, they have a clear exit path.`,
            airSteps: {
                a: `"If I were investing this much, I'd want to know the worst case too."`,
                i: `"Would a performance guarantee and a defined exit clause give you the confidence to move forward?"`,
                r: `"Here's our commitment: if the core metrics we agree on aren't met within 90 days of launch, we continue working at no additional charge until they are. And your old system runs as a backup for 30 days post-launch. If for any reason you want to revert, you can — no questions asked."`,
            },
            script: `"I want you to feel completely protected. Here's the deal: we agree on specific performance metrics upfront — load time, uptime, lead capture rate, whatever matters most to you. If those metrics aren't hit within 90 days, we keep working at zero additional cost until they are. Your old system stays live as a backup for 30 days post-launch. And if for any reason you decided to pull the plug in that window, your data is yours and we help you transition cleanly. No lock-in. No hostage situation."`,
            notes: `The 90-day performance guarantee + 30-day parallel backup eliminates every rational fear. If they still say no after this, the objection isn't risk — it's something else.`,
            preemptQuestion: `"What would make you feel 100% protected moving into an engagement like this?"`,
        },
    ],
};

/* ─────────────────────────────────────────────
   STYLES
───────────────────────────────────────────── */

const S = `
  .ob-root { max-width: 860px; margin: 0 auto; padding: 2rem 1.5rem 4rem; font-family: 'Inter', sans-serif; color: #94a3b8; }

  /* ── Page header ── */
  .ob-page-header { margin-bottom: 2.5rem; }
  .ob-badge { display: inline-block; padding: 3px 10px; border-radius: 4px; background: rgba(34,211,238,.15); color: #22d3ee; font-size: .7rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; margin-bottom: .6rem; }
  .ob-title { font-size: 2rem; font-weight: 800; color: #f1f5f9; line-height: 1.2; margin: 0 0 .5rem; }
  .ob-subtitle { color: #64748b; font-size: .95rem; line-height: 1.6; max-width: 640px; }

  /* ── A.I.R. framework ── */
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

  /* ── Category tabs ── */
  .ob-cat-tabs { display: flex; gap: .5rem; margin-bottom: 1.5rem; flex-wrap: wrap; }
  .ob-cat-tab { padding: .5rem 1rem; border-radius: 8px; border: 1px solid rgba(255,255,255,.07); background: #080c18; color: #64748b; font-size: .82rem; font-weight: 600; cursor: pointer; transition: all .18s; display: flex; align-items: center; gap: .4rem; }
  .ob-cat-tab:hover { border-color: rgba(34,211,238,.4); color: #94a3b8; }
  .ob-cat-tab.active { background: rgba(34,211,238,.12); border-color: #22d3ee; color: #67e8f9; }
  .ob-cat-desc { padding: .75rem 1rem; border-radius: 8px; background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.05); font-size: .85rem; color: #64748b; margin-bottom: 2rem; line-height: 1.55; }

  /* ── Objection cards ── */
  .ob-card { background: #080c18; border: 1px solid rgba(255,255,255,.07); border-radius: 14px; margin-bottom: 1.25rem; overflow: hidden; transition: border-color .18s; }
  .ob-card:hover { border-color: rgba(34,211,238,.25); }
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

  .badge-TECH\\ ANXIETY { background: rgba(239,68,68,.15); color: #f87171; border: 1px solid rgba(239,68,68,.25); }
  .badge-SCOPE\\ CONFUSION { background: rgba(245,158,11,.15); color: #fbbf24; border: 1px solid rgba(245,158,11,.25); }
  .badge-CONTROL\\ FEAR { background: rgba(139,92,246,.15); color: #a78bfa; border: 1px solid rgba(139,92,246,.25); }
  .badge-STATUS\\ QUO\\ BIAS { background: rgba(20,184,166,.15); color: #2dd4bf; border: 1px solid rgba(20,184,166,.25); }
  .badge-INTERNAL\\ POLITICS { background: rgba(251,146,60,.15); color: #fb923c; border: 1px solid rgba(251,146,60,.25); }
  .ob-smokescreen { font-size: .95rem; font-weight: 600; color: #e2e8f0; }
  .ob-chevron { color: #475569; font-size: .85rem; transition: transform .2s; flex-shrink: 0; }
  .ob-chevron.open { transform: rotate(180deg); }

  .ob-card-body { border-top: 1px solid rgba(255,255,255,.05); padding: 1.25rem 1.5rem; display: none; }
  .ob-card-body.open { display: block; }

  /* Body sections */
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
  .ob-script-box { background: rgba(34,211,238,.06); border: 1px solid rgba(34,211,238,.18); border-left: 3px solid #22d3ee; border-radius: 0 8px 8px 0; padding: .9rem 1rem; font-size: .875rem; color: #a5f3fc; line-height: 1.65; font-style: italic; }

  .ob-notes { margin-bottom: 1.25rem; }
  .ob-notes .ob-section-label { color: #f59e0b; }
  .ob-notes p { font-size: .845rem; color: #94a3b8; line-height: 1.6; margin: 0; background: rgba(245,158,11,.06); border: 1px solid rgba(245,158,11,.15); border-radius: 8px; padding: .7rem .9rem; }

  .ob-preempt { }
  .ob-preempt .ob-section-label { color: #34d399; }
  .ob-preempt-box { background: rgba(16,185,129,.06); border: 1px solid rgba(16,185,129,.2); border-radius: 8px; padding: .7rem .9rem; font-size: .845rem; color: #6ee7b7; font-style: italic; }

  /* ── Preemption guide ── */
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
    {
        title: 'Kill the "We can use Salesforce" Objection',
        question: `"What tools are you currently using, and how much time does your team spend configuring and maintaining them?"`,
        why: `Surfaces the hidden cost of SaaS maintenance before they can use it as a cheap alternative.`,
    },
    {
        title: 'Kill the "Too Long" Objection',
        question: `"If we could deliver a high-impact Phase 1 in 2 weeks, would that address your urgency?"`,
        why: `Offers phased delivery before they can object to the timeline. Transforms "too long" into "smart rollout."`,
    },
    {
        title: 'Kill the "Need Board Approval" Objection',
        question: `"Who else will weigh in on this decision? I want to tailor the proposal to their evaluation criteria."`,
        why: `Gets ahead of the stakeholder roadblock by bringing you into the internal conversation.`,
    },
    {
        title: 'Kill the "Migration Disruption" Objection',
        question: `"What would a zero-downtime transition look like for your business?"`,
        why: `Lets THEM define the migration requirements, which you then design around. Ownership reduces fear.`,
    },
    {
        title: 'Kill the "Tried Custom Before" Objection',
        question: `"If you've worked with a tech vendor before, what would need to be different this time?"`,
        why: `Surfaces their trauma points early so you can show how your process prevents each one.`,
    },
    {
        title: 'Kill the "Team Won\'t Adopt It" Objection',
        question: `"Who on your team will use this most? Walk me through their typical day."`,
        why: `Understanding the end user lets you design for adoption from day one — and show the prospect you're thinking about their team, not just the tech.`,
    },
];

/* ─────────────────────────────────────────────
   SUB-COMPONENTS
───────────────────────────────────────────── */

function AirFramework() {
    const steps = [
        {
            letter: 'A',
            cls: 'ob-air-a',
            name: 'Acknowledge & Align',
            desc: `Validate their concern so they drop their guard. They need to feel heard before they'll listen to you.`,
            example: `"That makes total sense — and honestly…"`,
        },
        {
            letter: 'I',
            cls: 'ob-air-i',
            name: 'Isolate',
            desc: `Confirm this is the ONLY roadblock before solving it. Solving the wrong objection costs you the deal.`,
            example: `"Aside from that, is there anything else holding us back?"`,
        },
        {
            letter: 'R',
            cls: 'ob-air-r',
            name: 'Reframe & Resolve',
            desc: `Pivot their mental frame, then deliver the specific response that dissolves the real concern.`,
            example: `"Here's a different way to look at this…"`,
        },
    ];

    return (
        <div style={{ marginBottom: '2rem' }}>
            <p style={{ fontSize: '.8rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#475569', marginBottom: '1rem' }}>
                The Universal Framework
            </p>
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
                    <span className={`ob-root-badge badge-${item.rootCauseLabel.replace(/ /g, '\\ ')}`}>
                        {item.rootCauseLabel}
                    </span>
                    <span className="ob-smokescreen">{item.smokescreen}</span>
                </div>
                <span className={`ob-chevron ${open ? 'open' : ''}`}>▼</span>
            </div>
            <div className={`ob-card-body ${open ? 'open' : ''}`}>
                {/* Root Cause */}
                <div className="ob-root-cause">
                    <div className="ob-section-label">🔍 Root Cause</div>
                    <p>{item.rootCause}</p>
                </div>

                {/* A.I.R. Breakdown */}
                <div className="ob-air-breakdown">
                    <div className="ob-section-label">⚡ A.I.R. Breakdown</div>
                    {(['a', 'i', 'r'] as const).map(k => (
                        <div key={k} className="ob-air-step">
                            <span className={`ob-air-step-letter air-${k}`}>{k.toUpperCase()}</span>
                            <p>{item.airSteps[k]}</p>
                        </div>
                    ))}
                </div>

                {/* Full Script */}
                <div className="ob-script">
                    <div className="ob-section-label">📝 Full Script</div>
                    <div className="ob-script-box">{item.script}</div>
                </div>

                {/* Notes */}
                {item.notes && (
                    <div className="ob-notes">
                        <div className="ob-section-label">💡 Coaching Note</div>
                        <p>{item.notes}</p>
                    </div>
                )}

                {/* Pre-empt Question */}
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

/* ─────────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────────── */
export default function BonusB() {
    const [activeCategory, setActiveCategory] = useState<Category>('software-build');
    const catData = CATEGORIES.find(c => c.id === activeCategory)!;

    return (
        <>
            <style>{S}</style>
            <div className="ob-root">
                {/* Page Header */}
                <div className="ob-page-header">
                    <div className="ob-badge">Bonus Module B — Advanced</div>
                    <h2 className="ob-title">Advanced Objection Lab — Software &amp; Systems</h2>
                    <p className="ob-subtitle">
                        Module 5 covers the core objections every rep faces: cold-call smoke screens, trust walls, and pricing pushback.
                        This advanced lab goes deeper — into objections specific to selling <strong style={{ color: '#e2e8f0' }}>custom software builds, system migrations, and enterprise deployments</strong>.
                        If you&apos;re pitching anything beyond a website, these are the walls you&apos;ll hit.
                    </p>
                </div>

                {/* A.I.R. Framework */}
                <AirFramework />

                <hr className="ob-divider" />

                {/* Category Tabs */}
                <div className="ob-cat-tabs">
                    {CATEGORIES.map(c => (
                        <button
                            key={c.id}
                            className={`ob-cat-tab ${activeCategory === c.id ? 'active' : ''}`}
                            onClick={() => setActiveCategory(c.id)}
                        >
                            {c.icon} {c.label}
                        </button>
                    ))}
                </div>

                <div className="ob-cat-desc">{catData.description}</div>

                {/* Objection Cards */}
                {OBJECTIONS[activeCategory].map(item => (
                    <ObjectionCard key={item.id} item={item} />
                ))}

                <hr className="ob-divider" />

                {/* Pre-emption Guide */}
                <div className="ob-pre-section">
                    <p style={{ fontSize: '.8rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#475569', marginBottom: '.4rem' }}>
                        Advanced Technique
                    </p>
                    <div className="ob-pre-title">🛡️ System-Specific Preemption Playbook</div>
                    <p className="ob-pre-subtitle">
                        Kill these advanced objections before they surface by asking these questions during Discovery.
                        If a prospect is evaluating custom software, these questions set the anchors that prevent every category above.
                    </p>
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
