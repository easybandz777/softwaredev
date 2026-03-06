"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, BookOpen, ChevronRight } from "lucide-react";

export default function TrainingPage() {
    const router = useRouter();

    return (
        <div className="min-h-screen" style={{ background: "#05080f", color: "#f8fafc", fontFamily: "'Inter', sans-serif" }}>
            {/* Grid overlay */}
            <div className="fixed inset-0 pointer-events-none" style={{
                backgroundImage: "linear-gradient(rgba(34,211,238,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.025) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
            }} />

            {/* Top nav */}
            <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4"
                style={{ background: "rgba(5,8,15,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div className="flex items-center gap-3">
                    <img src="/logo.png" alt="QuantLab" className="h-8 w-auto"
                        style={{ filter: "drop-shadow(0 0 8px rgba(34,211,238,0.5)) brightness(1.2)" }} />
                    <div className="flex items-center gap-2">
                        <span className="text-white font-bold text-sm hidden sm:inline">QuantLab Admin</span>
                        <ChevronRight className="w-3.5 h-3.5 text-gray-600 hidden sm:block" />
                        <span className="text-cyan-400 font-medium text-sm flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> Sales Training</span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={() => router.push("/admin/dashboard")}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 text-xs transition-all">
                        <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
                    </button>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-12 relative z-0">

                {/* Embedded Styles for Curriculum */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .ql-training-content h1, .ql-training-content h2, .ql-training-content h3, .ql-training-content h4 {
                        font-family: 'Space Grotesk', sans-serif;
                        font-weight: 700;
                        letter-spacing: -0.02em;
                    }

                    .ql-training-content {
                        line-height: 1.6;
                    }

                    .ql-cover-page {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        border: 1px solid rgba(255, 255, 255, 0.05);
                        background: linear-gradient(180deg, rgba(10, 15, 29, 0) 0%, #0a0f1d 100%);
                        border-radius: 24px;
                        margin-bottom: 60px;
                        padding: 80px 40px;
                        box-shadow: 0 0 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05);
                        position: relative;
                        overflow: hidden;
                    }
            
                    .ql-logo-glow {
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        width: 120px;
                        height: 120px;
                        background: linear-gradient(135deg, #22d3ee, #a78bfa);
                        filter: blur(60px);
                        opacity: 0.3;
                        z-index: 0;
                    }
            
                    .ql-logo-text {
                        font-size: 2.5rem;
                        font-family: 'Space Grotesk', sans-serif;
                        font-weight: 700;
                        letter-spacing: 0.1em;
                        text-transform: uppercase;
                        background: linear-gradient(135deg, #22d3ee, #a78bfa);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        position: relative;
                        z-index: 1;
                        margin-bottom: 40px;
                    }
            
                    .ql-cover-subtitle {
                        font-size: 1.2rem;
                        color: #94a3b8;
                        text-transform: uppercase;
                        letter-spacing: 0.2em;
                        margin-bottom: 20px;
                        font-weight: 500;
                        position: relative;
                        z-index: 1;
                    }
            
                    .ql-cover-title {
                        font-size: clamp(3rem, 6vw, 4.5rem);
                        line-height: 1.1;
                        margin-bottom: 30px;
                        text-transform: uppercase;
                        text-shadow: 0 0 30px rgba(34, 211, 238, 0.2);
                        color: white;
                        position: relative;
                        z-index: 1;
                    }
            
                    .ql-cover-divider {
                        width: 80px;
                        height: 4px;
                        background: linear-gradient(135deg, #22d3ee, #a78bfa);
                        margin: 0 auto 30px;
                        border-radius: 2px;
                        position: relative;
                        z-index: 1;
                    }

                    .ql-section-header {
                        margin-top: 80px;
                        margin-bottom: 40px;
                        padding-bottom: 20px;
                        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                        position: relative;
                    }
            
                    .ql-section-header::after {
                        content: '';
                        position: absolute;
                        left: 0;
                        bottom: -1px;
                        width: 100px;
                        height: 2px;
                        background: linear-gradient(135deg, #22d3ee, #a78bfa);
                    }
            
                    .ql-module-number {
                        font-family: 'Space Grotesk', sans-serif;
                        color: #22d3ee;
                        font-size: 1rem;
                        font-weight: 600;
                        letter-spacing: 0.15em;
                        text-transform: uppercase;
                        margin-bottom: 10px;
                        display: block;
                    }
            
                    .ql-module-title {
                        font-size: 2.5rem;
                        color: #f8fafc;
                    }
            
                    .ql-card {
                        background: #0a0f1d;
                        border: 1px solid rgba(255, 255, 255, 0.05);
                        border-radius: 16px;
                        padding: 30px;
                        margin-bottom: 30px;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                        position: relative;
                        overflow: hidden;
                    }
            
                    .ql-card::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 4px;
                        height: 100%;
                        background: linear-gradient(135deg, #22d3ee, #a78bfa);
                    }
            
                    .ql-card h3 {
                        font-size: 1.5rem;
                        margin-bottom: 15px;
                        color: #f8fafc;
                    }
            
                    .ql-script-box {
                        background: rgba(34, 211, 238, 0.03);
                        border-left: 3px solid #22d3ee;
                        padding: 25px 20px 20px;
                        margin: 25px 0;
                        border-radius: 0 8px 8px 0;
                        font-family: 'Inter', sans-serif;
                        font-size: 1.05rem;
                        color: #fff;
                        position: relative;
                    }
            
                    .ql-script-box::before {
                        content: 'SCRIPT';
                        position: absolute;
                        top: -10px;
                        left: 15px;
                        background: #22d3ee;
                        color: #05080f;
                        font-size: 0.7rem;
                        font-weight: 700;
                        padding: 2px 8px;
                        border-radius: 4px;
                        letter-spacing: 0.1em;
                    }
            
                    .ql-bad-script-box {
                        background: rgba(239, 68, 68, 0.05);
                        border-left: 3px solid #ef4444;
                        padding: 25px 20px 20px;
                        margin: 25px 0;
                        border-radius: 0 8px 8px 0;
                        color: #94a3b8;
                        position: relative;
                    }
            
                    .ql-bad-script-box::before {
                        content: 'AVOID';
                        position: absolute;
                        top: -10px;
                        left: 15px;
                        background: #ef4444;
                        color: white;
                        font-size: 0.7rem;
                        font-weight: 700;
                        padding: 2px 8px;
                        border-radius: 4px;
                        letter-spacing: 0.1em;
                    }
            
                    .ql-tip-box {
                        background: rgba(167, 139, 250, 0.05);
                        border: 1px solid rgba(167, 139, 250, 0.2);
                        padding: 25px;
                        border-radius: 12px;
                        margin: 30px 0;
                    }
            
                    .ql-tip-box h4 {
                        color: #a78bfa;
                        margin-bottom: 10px;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        font-size: 1.2rem;
                    }
            
                    .ql-question-list {
                        list-style: none;
                        padding: 0;
                    }
            
                    .ql-question-list li {
                        position: relative;
                        padding-left: 30px;
                        margin-bottom: 15px;
                        font-size: 1.05rem;
                        color: #94a3b8;
                    }
            
                    .ql-question-list li::before {
                        content: 'Q:';
                        position: absolute;
                        left: 0;
                        color: #22d3ee;
                        font-weight: 700;
                        font-family: 'Space Grotesk', sans-serif;
                    }
            
                    .ql-framework-grid {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 30px;
                        margin-top: 25px;
                    }
                    @media (min-width: 640px) {
                        .ql-framework-grid {
                            grid-template-columns: 1fr 1fr;
                        }
                    }

                    .ql-training-content p {
                        margin-bottom: 15px;
                        color: #94a3b8;
                    }
            
                    .ql-training-content strong {
                        color: #f8fafc;
                    }
                `}} />

                <div className="ql-training-content">
                    {/* Cover Page */}
                    <div className="ql-cover-page">
                        <div className="ql-logo-glow"></div>
                        <div className="ql-logo-text">QUANTLAB</div>
                        <div className="ql-cover-subtitle">Strategic Growth Division</div>
                        <h1 className="ql-cover-title">Sales<br />Partner<br />Training</h1>
                        <div className="ql-cover-divider"></div>
                        <p className="text-gray-500 text-sm tracking-widest uppercase mt-4">Confidential & Proprietary // The QuantLab Method</p>
                    </div>

                    {/* MODULE 1 */}
                    <div className="ql-section-header">
                        <span className="ql-module-number">Module 01</span>
                        <h2 className="ql-module-title">Mindset & Prep</h2>
                    </div>

                    <div className="ql-card">
                        <h3>The "Consultant, Not Salesman" Frame</h3>
                        <p>At QuantLab, we do not sell widgets; we engineer business solutions. If you approach a prospect trying to "pitch a website," you commoditize yourself immediately. You are a <strong>Digital Growth Consultant</strong>. Your goal isn't to take their money—it's to diagnose inefficiencies and prescribe software that generates massive ROI.</p>

                        <div className="ql-framework-grid">
                            <div>
                                <h4 className="text-cyan-400 mb-3">The Salesman Frame</h4>
                                <ul style={{ color: '#94a3b8', marginLeft: '20px', listStyleType: 'disc' }}>
                                    <li>"Do you need a new website?"</li>
                                    <li>Talks about features & code</li>
                                    <li>Chases the prospect</li>
                                    <li>Accepts "we're fine"</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-purple-400 mb-3">The Consultant Frame</h4>
                                <ul style={{ color: '#94a3b8', marginLeft: '20px', listStyleType: 'disc' }}>
                                    <li>"Where is your business bleeding money?"</li>
                                    <li>Talks about automation & revenue</li>
                                    <li>Diagnoses the prospect</li>
                                    <li>Challenges "we're fine"</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>Knowing Your Weapon (Our Service)</h3>
                        <p>You must have absolute conviction that what QuantLab builds will revolutionize their business. We don't just build nice-looking pages; we build systems that:</p>
                        <ul style={{ color: '#94a3b8', marginLeft: '20px', listStyleType: 'disc', lineHeight: 1.8, marginTop: '15px' }}>
                            <li><strong>Capture Leads:</strong> Funnels that actually convert traffic.</li>
                            <li><strong>Automate Ops:</strong> Internal dashboards, automated invoicing, CRM syncing.</li>
                            <li><strong>Build Authority:</strong> Premium aesthetics that let them charge premium prices.</li>
                        </ul>
                    </div>

                    <div className="ql-tip-box">
                        <h4>💡 Pre-Call Recon</h4>
                        <p className="mb-0">Never enter a conversation blind. Spend 5 minutes on their current site and LinkedIn. Look for the "cracks": Is the site slow? Is it mobile-responsive? Is there a clear path to book an appointment? Bring these cracks up immediately.</p>
                    </div>

                    {/* EXPANSION: Cheat Sheet */}
                    <div className="ql-card" style={{ borderColor: "rgba(167, 139, 250, 0.3)" }}>
                        <h3 className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-400"></div> Tech Translation Cheat Sheet</h3>
                        <p>Translate tech jargon into business value:</p>
                        <div className="mt-4 grid gap-4">
                            <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                <p className="text-sm text-gray-400 mb-1">Instead of saying...</p>
                                <p className="text-white font-medium mb-3">"We use Next.js and server-side rendering."</p>
                                <p className="text-sm text-gray-400 mb-1">Say...</p>
                                <p className="text-cyan-400 font-medium tracking-wide">"Your site will load instantly on 3G networks, meaning fewer bounces and higher Google rankings."</p>
                            </div>
                            <div className="bg-black/20 p-4 rounded-lg border border-white/5">
                                <p className="text-sm text-gray-400 mb-1">Instead of saying...</p>
                                <p className="text-white font-medium mb-3">"We build custom APIs and Webhooks."</p>
                                <p className="text-sm text-gray-400 mb-1">Say...</p>
                                <p className="text-cyan-400 font-medium tracking-wide">"Your systems will talk to each other automatically. No more downloading CSVs or manual data entry."</p>
                            </div>
                        </div>
                    </div>

                    {/* MODULE 2 */}
                    <div className="ql-section-header">
                        <span className="ql-module-number">Module 02</span>
                        <h2 className="ql-module-title">Breaking the Ice</h2>
                    </div>

                    <div className="ql-card">
                        <h3>The Cold Opener (In-Person / Phone)</h3>
                        <p>When you interrupt someone's day, you have 5 seconds to prove you aren't wasting their time. Acknowledge the interruption, drop the pitch, and hook them with a hyper-specific observation.</p>

                        <div className="ql-bad-script-box">
                            "Hi, I'm from QuantLab. We build custom websites and software. Are you looking to upgrade your digital presence?"
                        </div>

                        <div className="ql-script-box">
                            "Hey [Name], I know you weren't expecting my call. I'll be brief—I was just on your site trying to figure out how a new client books a consultation with you, and I realized the process is pretty broken. Have you noticed a drop in lead flow recently?"
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>LinkedIn & Email Outreach</h3>
                        <p>Keep it shockingly short. Business owners ignore paragraphs. Use the "Pattern Interrupt" framework.</p>

                        <div className="ql-script-box">
                            <strong>Subject:</strong> Your onboarding flow<br /><br />
                            Hey [Name],<br /><br />
                            Looked at your current setup. The work you guys do at [Company] is premium, but the customer experience on the site doesn't match that level. <br /><br />
                            We build the backend software for firms like yours to automate intake and billing. Worth a quick 5-min chat this Thursday?
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>Building Instant Rapport</h3>
                        <p>Rapport isn't about talking about the weather or sports. Professional rapport is built through <strong>competence and empathy</strong>. Show them you understand the brutal reality of running their specific type of business.</p>
                        <div className="ql-script-box">
                            "Most founders in your space I talk to are completely bogged down in admin work instead of actually closing deals. Is that what you're seeing right now?"
                        </div>
                    </div>

                    {/* EXPANSION: Industry Scripts */}
                    <div className="ql-card bg-slate-900/50">
                        <h3 className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-purple-400"></div> Industry-Specific Hooks</h3>

                        <div className="mt-6">
                            <h4 className="text-cyan-400 text-sm uppercase tracking-wider mb-2">⚖️ Legal / Law Firms</h4>
                            <div className="ql-script-box mt-0 mb-6 py-4">
                                "Hey [Name], checked out the firm's site. Looks great, but your intake form isn't securely transmitting straight to your matter management system. Most managing partners I talk to lose 4 hours a week just re-typing client data securely. Is your paralegal team bogged down with that right now?"
                            </div>

                            <h4 className="text-cyan-400 text-sm uppercase tracking-wider mb-2">🔨 Home Services / Contractors</h4>
                            <div className="ql-script-box mt-0 mb-6 py-4">
                                "Hey [Name], noticed your competitors all have instant 'Request an Estimate' portals and your site only has a basic email form. How many emergency leads are slipping to the other guys because you guys can't reply fast enough?"
                            </div>

                            <h4 className="text-cyan-400 text-sm uppercase tracking-wider mb-2">🏥 Medical / Clinics</h4>
                            <div className="ql-script-box mt-0 py-4">
                                "Hey [Name], I tried to book a new patient appointment on your site and realized I had to download a PDF instead of filling it out online. Is your front desk constantly chasing patients down for paperwork?"
                            </div>
                        </div>
                    </div>

                    {/* MODULE 3 */}
                    <div className="ql-section-header">
                        <span className="ql-module-number">Module 03</span>
                        <h2 className="ql-module-title">Discovery: Identifying Needs</h2>
                    </div>

                    <p className="mb-8">Discovery is where the sale is won or lost. If you do this right, they will sell themselves. We use a modified SPIN (Situation, Problem, Implication, Need-Payoff) framework.</p>

                    <div className="ql-card">
                        <h3>1. The Situation (Current State)</h3>
                        <p>Find out exactly how they operate right now. Let them explain their broken processes.</p>
                        <ul className="ql-question-list mt-4">
                            <li>Walk me through exactly what happens right now when a new lead hits your website.</li>
                            <li>How are you currently tracking projects and communicating with clients?</li>
                            <li>What software stack are you patching together right now?</li>
                        </ul>
                    </div>

                    <div className="ql-card">
                        <h3>2. The Problem (Finding the Pain)</h3>
                        <p>Now, poke the bruise. Make them admit that the current way is flawed.</p>
                        <ul className="ql-question-list mt-4">
                            <li>It sounds like you have to manually enter data three times. How often are details slipping through the cracks?</li>
                            <li>Your site looks a bit dated compared to your competitors. Has anyone ever mentioned that?</li>
                            <li>What's the biggest bottleneck stopping you from doubling your volume right now?</li>
                        </ul>
                    </div>

                    <div className="ql-card">
                        <h3>3. The Implication (Twisting the Knife)</h3>
                        <p>They know they have a problem. Now you must make them realize how much it's costing them.</p>
                        <ul className="ql-question-list mt-4">
                            <li>If your team is spending 15 hours a week doing manual data entry... what is that costing you in payroll every month?</li>
                            <li>When a high-ticket client sees your current site and goes with a competitor, how much revenue did you just lose?</li>
                            <li>How long can you sustain this manual process before the team burns out?</li>
                        </ul>
                    </div>

                    {/* MODULE 4 */}
                    <div className="ql-section-header">
                        <span className="ql-module-number">Module 04</span>
                        <h2 className="ql-module-title">Current Spending & Budgeting</h2>
                    </div>

                    <div className="ql-card">
                        <h3>Calculating the Cost of Inaction (COI)</h3>
                        <p>Before you pitch a monthly retainer or a high-ticket build, the prospect must understand that <strong>doing nothing is actively costing them money.</strong></p>

                        <div className="ql-script-box">
                            "You mentioned you're losing about 2 deals a month because your lead process is slow. What's your average client worth? $5,000? So this broken process is literally costing you $10,000 every single month. Does that sound right?"
                        </div>
                        <p>Once they agree to those numbers, your $1k/mo or $3k/mo retainer suddenly looks incredibly cheap.</p>
                    </div>

                    <div className="ql-card">
                        <h3>Asking About Budget Without Being Awkward</h3>
                        <p>Amateurs get scared of the money talk. Consultants embrace it. Anchor high to gauge their reaction.</p>

                        <div className="ql-script-box">
                            "To build out the type of automated dashboard and premium site we're talking about, our typical engagements range from $3,000 to $10,000 depending on scope, plus ongoing support. Is that completely out of the realm of reality for you right now?"
                        </div>
                        <p>If they balk, you down-sell to a smaller monthly plan. If they don't blink, you know you have room to build something incredible.</p>
                    </div>

                    <div className="ql-tip-box">
                        <h4>💡 Framing the Monthly Retainer</h4>
                        <p className="mb-0">Never call it a "maintenance fee." Call it a <strong>"Dedicated Engineering Partner Plan."</strong> Reiterate that a junior in-house dev costs $80k/year. We give them an elite team for a fraction of that, fully managed.</p>
                    </div>

                    {/* MODULE 5 */}
                    <div className="ql-section-header">
                        <span className="ql-module-number">Module 05</span>
                        <h2 className="ql-module-title">Bringing It All Together</h2>
                    </div>

                    <div className="ql-card">
                        <h3>Connecting Pain to Solution (The Pitch)</h3>
                        <p>Don't just list features. Map our features directly to the specific pains they admitted to in Discovery.</p>

                        <div className="ql-script-box">
                            "You told me you're losing 10 hours a week on manual intake. The custom portal we build for you is going to completely automate that. A client fills out the form, and the system automatically generates an invoice and creates a project file. We give you those 10 hours back."
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>Handling Core Objections</h3>

                        <div className="mb-8">
                            <p><strong>Objection: "It's too expensive."</strong></p>
                            <div className="ql-script-box mt-2">
                                "I understand it's an investment. But we just agreed your current setup is costing you $5,000 a month in lost deals. This system pays for itself in exactly 45 days. Why delay fixing a leak in your boat?"
                            </div>
                        </div>

                        <div className="mb-8">
                            <p><strong>Objection: "We use WordPress/Wix, it's fine."</strong></p>
                            <div className="ql-script-box mt-2">
                                "If you want to stay a small business, Wix is fine. If you want to scale to 8 figures, you need custom infrastructure. We build the digital assets that allow you to scale without breaking. Are you ready to scale?"
                            </div>
                        </div>

                        <div>
                            <p><strong>Objection: "My nephew/buddy handles our website."</strong></p>
                            <div className="ql-script-box mt-2">
                                "That's great for getting started. But your business is doing $2M a year now. You rely on this for revenue. If something breaks on a Tuesday at 2 PM, is your nephew dropping his college classes to fix your lead funnel? We provide enterprise-grade reliability."
                            </div>
                        </div>
                    </div>

                    {/* EXPANSION: Follow Up Sequence */}
                    <div className="ql-card bg-slate-900/50">
                        <h3 className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyan-400"></div> The 3-Step Ghosted Follow-Up</h3>
                        <p>When they stop replying, do not send "Just checking in." Use this sequence over 14 days.</p>

                        <ul className="mt-6 space-y-6">
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-400/10 text-cyan-400 flex items-center justify-center font-bold text-sm">1</span>
                                <div>
                                    <p className="font-medium text-white mb-1">Day 3: The Value Add</p>
                                    <p className="text-sm text-gray-400 italic">"Hey [Name], I was thinking about our chat regarding your intake funnel. I put together this quick 2-min loom video showing how an automated CRM sync would specifically look for your team. Here's the link: [Link]"</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-400/10 text-cyan-400 flex items-center justify-center font-bold text-sm">2</span>
                                <div>
                                    <p className="font-medium text-white mb-1">Day 7: The Direct Question</p>
                                    <p className="text-sm text-gray-400 italic">"Hey [Name], typically when I don't hear back at this stage it means the timeline shifted or the pricing wasn't right. Are we completely pausing on upgrading the systems for now?"</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-400/10 text-purple-400 flex items-center justify-center font-bold text-sm">3</span>
                                <div>
                                    <p className="font-medium text-white mb-1">Day 14: The Breakup (Takes it away)</p>
                                    <p className="text-sm text-gray-400 italic">"Hey [Name], haven't heard from you so I'm assuming fixing the intake bottleneck isn't a priority this quarter. I'll close out your file on our end. Let me know if you want to revisit this later this year. Best of luck."</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="ql-card pb-12">
                        <h3>The Trial Close & The Ask</h3>
                        <p>Take their temperature before asking for the credit card.</p>

                        <div className="ql-script-box">
                            <strong>The Trial Close:</strong> "Based on everything we've looked at today, do you feel confident that this new architecture will resolve the bottleneck in your sales team?"<br /><br />
                            <strong>The Ask:</strong> "Great. The next step is simple. We get the initial deposit processed, and we kick off the strategy boarding session next Tuesday. Does Visa or Mastercard work best for you?"
                        </div>
                        <p className="text-center text-xl mt-12 text-cyan-400">
                            <strong>Once you ask for the business, shut up.<br />The first person to speak loses.</strong>
                        </p>
                    </div>

                    {/* ─── BONUS MODULE A: Extended Industry Scenarios ─── */}
                    <div className="ql-section-header">
                        <span className="ql-module-number">Bonus Module A</span>
                        <h2 className="ql-module-title">Extended Industry Scenarios</h2>
                    </div>

                    <p className="mb-8">Every industry has specific pain points. Speak their language from the first sentence and you establish instant credibility. Master these verticals.</p>

                    <div className="ql-card">
                        <h3>🏠 Real Estate Agents & Brokerages</h3>
                        <p><strong>Core Pain:</strong> They pay $500–$2,000/mo for generic CRM software that doesn't connect to their MLS, doesn't automate follow-ups, and makes them look exactly like every other agent.</p>
                        <div className="ql-script-box">
                            "Hey [Name], I noticed you're running [CRM brand] for your listings pipeline. I pulled up your IDX feed and the load time on your property pages is over 4 seconds — Google's threshold for mobile drop-off is 3 seconds. You're likely losing 30–40% of your cold web traffic before they ever see a listing. Is that something you've been tracking?"
                        </div>
                        <div className="ql-tip-box" style={{ marginTop: '20px' }}>
                            <h4>💡 What to Sell Them</h4>
                            <p className="mb-0">Custom IDX-integrated site with instant search, automated text follow-up when a lead views 3+ listings, and a seller's net-sheet calculator that captures seller leads organically from Google.</p>
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>🍽️ Restaurants & Hospitality</h3>
                        <p><strong>Core Pain:</strong> They're paying 30% commissions to DoorDash/Uber Eats. They have zero first-party data on their customers, cannot retarget them, and have no loyalty mechanism.</p>
                        <div className="ql-script-box">
                            "Hey [Owner], I looked at your ordering setup. Right now you're sending every online order through DoorDash which is cutting $9 from a $30 order. We build direct-order systems so 100% of that revenue stays with you — plus you own the customer data. How much volume are you doing on third-party platforms each month?"
                        </div>
                        <div className="ql-tip-box" style={{ marginTop: '20px' }}>
                            <h4>💡 What to Sell Them</h4>
                            <p className="mb-0">Custom branded ordering app or web portal with loyalty points, text-message marketing opt-in at checkout, and a reservation system — zero per-order fees.</p>
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>🏋️ Gyms, Studios & Fitness Coaches</h3>
                        <p><strong>Core Pain:</strong> They use Mindbody or Glofox and hate it — expensive, ugly, locked ecosystem. Their social media is strong but their website converts almost nobody. Trial sign-ups are a blackhole.</p>
                        <div className="ql-script-box">
                            "Hey [Name], your Instagram engagement is incredible — 4,000 followers and great content. But I clicked the link in your bio and it takes me to a generic Linktree with 6 options. How many of those clicks actually turn into trial bookings? I'd bet it's under 5%. We build landing pages for fitness businesses that convert Instagram traffic at 20–30% instead of 5%."
                        </div>
                        <div className="ql-tip-box" style={{ marginTop: '20px' }}>
                            <h4>💡 What to Sell Them</h4>
                            <p className="mb-0">High-conversion landing page + class booking integration + automated SMS reminder and no-show follow-up sequence. Monthly recurring tech partner plan.</p>
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>🚗 Auto Dealerships & Detailers</h3>
                        <p><strong>Core Pain:</strong> Their leads come from Cars.com and AutoTrader and those platforms own the customer relationship. Their own website is a reskin of a generic dealer template. Detailers live and die by Google reviews and DMs.</p>
                        <div className="ql-script-box">
                            "Hey [Name], when someone Googles 'car detailer near me' you show up fourth. The three guys above you have 200+ reviews and simple booking forms right in the search result. Your review count is 40 and your booking goes to a Facebook Messenger. We fix all of that — automated review generation after every job, a proper booking portal, and real-time scheduling. How many jobs are you losing each week to guys who are just easier to book?"
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>📦 E-Commerce & Product Brands</h3>
                        <p><strong>Core Pain:</strong> They have a Shopify store that's "working okay" but their abandoned cart rate is 70%+. They're running paid ads to a generic store page and wondering why ROAS is dropping.</p>
                        <div className="ql-script-box">
                            "Hey [Name], I ran your page through GTMetrix. Your product pages are loading in 6.2 seconds on mobile, and your add-to-cart to checkout conversion is likely sitting around 2–3%. Industry average for optimized stores is 7–9%. That gap is your money going straight to your competitors. We do custom Shopify builds and performance optimization — what's your monthly ad spend right now?"
                        </div>
                        <div className="ql-tip-box" style={{ marginTop: '20px' }}>
                            <h4>💡 What to Sell Them</h4>
                            <p className="mb-0">Custom headless storefront or advanced Shopify customization + abandoned cart email/SMS flows + subscription product upsell flows. Monthly support retainer.</p>
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>📐 Architects, Interior Designers & Creative Firms</h3>
                        <p><strong>Core Pain:</strong> Their portfolio is gorgeous but their website looks like it was built in 2016. They charge $15,000–$100,000 per project but their digital presence doesn't communicate that level of quality, so they keep attracting budget clients.</p>
                        <div className="ql-script-box">
                            "Hey [Name], I spent 20 minutes on your portfolio — the work is stunning. But your website doesn't match the caliber of projects you close. The font's generic, projects load slowly, and there's no clear path for a high-budget client to reach you. Your site is pre-filtering your ideal clients away. We build portfolio sites for creative firms that let the work breathe and command the price tag behind it."
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>🏫 Coaches, Consultants & Course Creators</h3>
                        <p><strong>Core Pain:</strong> They're selling high-ticket ($3k–$20k) coaching programs but using a generic Kajabi or Teachable template that looks identical to a thousand other coaches. Discovery calls are booked manually via Calendly on a generic background.</p>
                        <div className="ql-script-box">
                            "Hey [Name], your content on LinkedIn is elite — clearly you know your stuff. But when someone lands on your sales page, the trust signal doesn't match your authority. Your booking page is a plain Calendly, no social proof, no transformation story, no custom branding. We build authority microsites specifically for coaches that pre-sell prospects before they even get on a call. How long does it currently take you to convert a follower into a paid client?"
                        </div>
                    </div>

                    {/* ─── BONUS MODULE B: Objections Masterclass ─── */}
                    <div className="ql-section-header">
                        <span className="ql-module-number">Bonus Module B</span>
                        <h2 className="ql-module-title">Objections Masterclass</h2>
                    </div>

                    <p className="mb-8">An objection is not a rejection — it is a <strong>request for more information or reassurance.</strong> Never get defensive. Validate, reframe, and advance. Every objection below should be internalized until your response is instant and calm.</p>

                    {[
                        {
                            obj: "\"We already have someone who does our website.\"",
                            reframe: "\"That's great — they probably handle your basic updates. But I'm not talking about updates. I'm talking about a custom intake system, automated quote flows, and a site architecture that actively generates leads for you. Is the person you have now building those things?\"",
                            note: "Distinction move: separate 'maintenance' from 'growth infrastructure.' Make the DIY solution look like a band-aid, not a solution."
                        },
                        {
                            obj: "\"We don't have budget right now.\"",
                            reframe: "\"Totally fair. Let me ask — if this system generates 3 new clients in its first month, and your average client is worth $4,000 — that's $12,000. The system costs $1,200/mo. Would budget be a concern then? Or is the real question whether you believe it will actually get you those clients?\"",
                            note: "Reframe from 'expense' to 'investment with a measurable return.' Then isolate the real objection."
                        },
                        {
                            obj: "\"We tried a web agency before and it was a disaster.\"",
                            reframe: "\"I'm sorry to hear that — honestly that's more common than it should be. Can I ask what specifically went wrong? Timeline? Communication? The final product? Because I want to show you exactly how our process is different, and if it's not different enough, I'll tell you.\"",
                            note: "Let them vent. Then reposition yourself as the anti-agency by attacking the exact points they mention. Empathy first, then differentiation."
                        },
                        {
                            obj: "\"I need to think about it.\"",
                            reframe: "\"Of course — this is a real decision. Can I ask what specific thing you need to think through? Is it the investment, the timing, or something about what we've discussed that isn't sitting right? I'd rather work through it now than have you go away with the wrong impression.\"",
                            note: "'I need to think about it' almost always means unsolved objection. Diagnose which one."
                        },
                        {
                            obj: "\"Can you just send me some information?\"",
                            reframe: "\"I can absolutely do that. But honestly, a PDF won't answer your specific questions. What if I take 10 minutes right now and show you a quick build we did for a business very similar to yours? It'll be faster than reading a brochure and way more relevant.\"",
                            note: "The 'send me info' request is a polite escape. Don't let them pull away — redirect to live demonstration."
                        },
                        {
                            obj: "\"We're not ready. Call us in 6 months.\"",
                            reframe: "\"Happy to reconnect then. But I'm curious — what changes in 6 months? Is there a specific milestone or is it more of a general sense of timing? I ask because most of the businesses I've helped wanted to wait too, and they later said they wished they'd started 6 months earlier.\"",
                            note: "Challenge the timeline without being pushy. Ask them to define what 'ready' looks like."
                        },
                        {
                            obj: "\"Our cousin/employee handles our social media and marketing.\"",
                            reframe: "\"That makes sense for content. What I'm building is different — this is the backend infrastructure that turns that content into leads. Your cousin creates the traffic; we build the machine that captures it. Do they know how to build a custom CRM-integrated intake portal?\"",
                            note: "Don't compete with what they already have — plug in as the tech layer that makes it work."
                        },
                        {
                            obj: "\"We don't need a new website, ours is fine.\"",
                            reframe: "\"[Name], can I show you something real quick? I pulled up your site on my phone. It's loading in 7 seconds. 60% of your traffic is mobile. Google penalizes sites over 3 seconds in search rankings. 'Fine' is costing you search visibility you don't even know you're losing.\"",
                            note: "Use real data pulled from PageSpeed Insights, GTMetrix, or a quick Lighthouse audit. Facts kill 'we're fine.'"
                        },
                        {
                            obj: "\"A friend quoted us a lower price.\"",
                            reframe: "\"I'd expect them to — and depending on what they're building, that might be totally appropriate. My question is: what happens when it breaks? What happens when you need to add a feature in 4 months? With us you have a full team, a service agreement, and guaranteed response time. What's the cost of your lead system being down for 48 hours?\"",
                            note: "Never compete on price — compete on risk. Make them calculate the cost of cheap going wrong."
                        },
                        {
                            obj: "\"We're already working with [Big Agency Name].\"",
                            reframe: "\"They do great brand work. What I've found is that large agencies are incredible at campaigns — but they don't build deep custom ops tooling. Do they give you live data dashboards? Do they manage your client portal? Or is it mainly creative assets and ad management? We live in the space they don't touch.\"",
                            note: "Find the gap. Big agencies are generalists — QuantLab is a surgical specialist."
                        },
                        {
                            obj: "\"I don't want to be locked into a contract.\"",
                            reframe: "\"Completely understood. We actually do month-to-month on our ongoing plans — no lock-in. The only commitment is the initial build project. After that you're staying because it's working, not because you're trapped. What would make you feel most comfortable moving forward?\"",
                            note: "Defuse the fear of commitment immediately. Month-to-month positions us as confident — we only keep clients who love results."
                        },
                        {
                            obj: "\"The economy is slow right now, we're cutting costs.\"",
                            reframe: "\"That's exactly why your competitors are cutting their marketing. The businesses that invest in infrastructure during slow periods come out the other side with 3x the market share. You can either pause or use this window to build the moat. What are your competitors doing right now?\"",
                            note: "Recessions create opportunity. Position the investment as offensive, not defensive."
                        }
                    ].map((item, i) => (
                        <div key={i} className="ql-card mb-6">
                            <p className="text-white font-semibold text-lg mb-4">Objection #{i + 1}: {item.obj}</p>
                            <div className="ql-script-box">{item.reframe}</div>
                            <div className="mt-4 p-3 rounded-lg" style={{ background: 'rgba(167,139,250,0.05)', border: '1px solid rgba(167,139,250,0.15)' }}>
                                <p className="text-xs text-purple-400 uppercase tracking-wider mb-1 font-semibold">Why This Works</p>
                                <p className="text-sm text-gray-400 mb-0">{item.note}</p>
                            </div>
                        </div>
                    ))}

                    {/* ─── BONUS MODULE C: Power Questions Bank ─── */}
                    <div className="ql-section-header">
                        <span className="ql-module-number">Bonus Module C</span>
                        <h2 className="ql-module-title">Power Questions Bank</h2>
                    </div>

                    <p className="mb-8">These are high-leverage questions that provoke thought, create urgency, and shift power dynamics. Memorize 3–5 of these and use them in every call. The right question is worth more than any pitch.</p>

                    <div className="ql-card">
                        <h3>💰 Revenue & Growth Questions</h3>
                        <ul className="ql-question-list mt-4">
                            <li>If I could show you a way to double your lead volume without doubling your ad spend, would you have 20 minutes this week?</li>
                            <li>What would have to be true for you to add another $500k in revenue this year?</li>
                            <li>If your current digital setup disappeared overnight, how much immediate revenue would you lose?</li>
                            <li>What's the most expensive bottleneck in your business right now that technology could theoretically solve?</li>
                            <li>Three years from now, what does your business look like — and what has to change digitally to make that happen?</li>
                        </ul>
                    </div>

                    <div className="ql-card">
                        <h3>⚠️ Pain & Frustration Questions</h3>
                        <ul className="ql-question-list mt-4">
                            <li>What's the task you dread most every Monday morning that you wish just happened automatically?</li>
                            <li>If you could fire one part of your current tech stack tomorrow, what would it be and why?</li>
                            <li>What's the most embarrassing thing about your current digital presence that you haven't fixed yet?</li>
                            <li>Honestly — when a high-value prospect checks out your website, do you cringe a little?</li>
                            <li>How many hours per week does your team spend doing things that a $200/mo software tool should be doing?</li>
                        </ul>
                    </div>

                    <div className="ql-card">
                        <h3>🎯 Closing & Commitment Questions</h3>
                        <ul className="ql-question-list mt-4">
                            <li>On a scale of 1–10, how motivated are you to fix this before Q3? What would make it a 10?</li>
                            <li>If we could start this process next Monday, is there anything on your end that would prevent that?</li>
                            <li>Assuming we build exactly what we talked about today — in 90 days, what does a win look like for you?</li>
                            <li>What's your gut telling you right now about moving forward?</li>
                            <li>Is the hesitation about us specifically, or about making this kind of investment in general?</li>
                        </ul>
                    </div>

                    {/* ─── BONUS MODULE D: Full Live Call Roleplay ─── */}
                    <div className="ql-section-header">
                        <span className="ql-module-number">Bonus Module D</span>
                        <h2 className="ql-module-title">Full Discovery Call Roleplay</h2>
                    </div>

                    <p className="mb-8">Study this call from start to finish. This is what a textbook QuantLab discovery call looks like with a law firm owner. Notice how we never pitch — we pull the solution out of the prospect.</p>

                    <div className="ql-card" style={{ borderColor: 'rgba(34,211,238,0.2)' }}>
                        <h3 className="text-cyan-400">Prospect: Personal Injury Law Firm, $1.8M revenue, 12 employees</h3>
                        <p>Scenario: Cold LinkedIn message → call booked → 30-minute discovery call</p>

                        <div className="mt-6 space-y-6">
                            {[
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
                            ].map((line, i) => (
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
                                <li>Rep <strong>never pitched QuantLab</strong> until minute 9.</li>
                                <li>Used the prospect's own numbers to build the case — rep never invented the $1.5M figure, Mark did.</li>
                                <li>Every question was engineered to get deeper into pain, not to showcase features.</li>
                                <li>The demo offer at the end was the softest possible close — low resistance, high momentum.</li>
                            </ul>
                        </div>
                    </div>

                    {/* ─── BONUS MODULE E: Advanced Closing Techniques ─── */}
                    <div className="ql-section-header">
                        <span className="ql-module-number">Bonus Module E</span>
                        <h2 className="ql-module-title">Advanced Closing Techniques</h2>
                    </div>

                    <div className="ql-card">
                        <h3>The Takeaway Close</h3>
                        <p>When someone is hesitant, create scarcity by gently pulling the offer away. Works best with responsive but indecisive prospects.</p>
                        <div className="ql-script-box">
                            "I want to be real with you — we only take on 3 new builds per month so we can give each client our full attention. We have one slot left for this month and two other conversations happening right now. I don't want to pressure you, but I also don't want you to miss the window if this is something you genuinely want to do."
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>The Assumption Close</h3>
                        <p>Act as if the decision has already been made and begin discussing next steps. Momentum is everything — a prospect in motion tends to stay in motion.</p>
                        <div className="ql-script-box">
                            "Great — so the way we'll start is a 90-minute strategy session where we map out the full build. I typically have openings on Tuesdays and Thursdays. Which works better for your schedule?"
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>The Sharp Angle Close</h3>
                        <p>When a prospect makes a conditional request ("If you could start in 2 weeks, we'd be in"), close on the condition immediately.</p>
                        <div className="ql-script-box">
                            Prospect: "If you could get us live in 6 weeks, I'd sign today."<br /><br />
                            Rep: "If I confirmed a 6-week delivery timeline in writing — are we moving forward today?"<br /><br />
                            [Pause. Let them say yes. Then immediately go to contract.]
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>The Social Proof Pyramid Close</h3>
                        <p>Stack three relevant proof points from similar clients right before asking for the business. Hit the same industry, same problem, same size.</p>
                        <div className="ql-script-box">
                            "I want to share three quick things. A fitness studio in Denver — we built their booking system, they went from 40% capacity to 90% in 4 months. A law firm in Phoenix — we cut their intake time from 8 hours to 12 minutes, they signed 3 more cases in month one. A contractor here in Dallas — they stopped using HomeAdvisor completely because our system was generating them qualified leads directly. You're all in the same boat they were in. The question is: how fast do you want to get out of it?"
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>The Ben Franklin Close</h3>
                        <p>When truly undecided, walk them through the decision analytically. This works exceptionally well with analytical founders (finance, law, engineering backgrounds).</p>
                        <div className="ql-script-box">
                            "Let's do this together — take a piece of paper. On one side write every reason this investment makes sense. On the other side, write every reason not to do it. I'll help with both sides. Usually when people do this exercise the answer becomes obvious pretty quickly."
                        </div>
                        <div className="ql-tip-box" style={{ marginTop: '20px' }}>
                            <h4>💡 Pro Tip</h4>
                            <p className="mb-0">When helping them list reasons NOT to do it, only bring up solvable objections — timing, price concerns — not legitimate deal-breakers. You're building the case for them while appearing balanced.</p>
                        </div>
                    </div>

                    <div className="ql-card" style={{ marginBottom: '60px' }}>
                        <h3 className="text-center text-2xl mb-8">⚡ Daily Mindset Reps</h3>
                        <p className="text-center mb-8">Say these out loud before every prospecting session. The internal frame controls the external performance.</p>
                        <div className="grid gap-4">
                            {[
                                "I am not selling. I am diagnosing. Sick businesses need prescriptions.",
                                "Every no is filtering me toward the yes. I am grateful for both.",
                                "The prospect's objection is data, not rejection. I will get curious, not defensive.",
                                "I know something they do not: what their business could look like in 90 days.",
                                "I will ask the uncomfortable question because that's what they're paying a consultant to do.",
                                "Silence is not awkward — it's productive. I will let it work for me.",
                                "My confidence is the product. If I don't believe it, neither will they."
                            ].map((mantra, i) => (
                                <div key={i} className="flex gap-4 items-start p-4 rounded-xl" style={{ background: 'rgba(34,211,238,0.03)', border: '1px solid rgba(34,211,238,0.08)' }}>
                                    <span className="text-cyan-400 font-bold text-lg flex-shrink-0">{i + 1}.</span>
                                    <p className="text-gray-300 mb-0 italic leading-relaxed">"{mantra}"</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-lg mt-12 text-cyan-400 font-semibold">
                            The QuantLab rep who masters this document<br />doesn't have a job. They have a license to print money.
                        </p>
                    </div>

                    {/* ─── BONUS MODULE F: Prospecting Systems ─── */}
                    <div className="ql-section-header">
                        <span className="ql-module-number">Bonus Module F</span>
                        <h2 className="ql-module-title">Prospecting Systems</h2>
                    </div>

                    <p className="mb-8">A rep without a system is just hoping. A rep with a system is compounding. Build prospecting into a daily non-negotiable machine — not a panicked sprint when revenue dips.</p>

                    <div className="ql-card">
                        <h3>🗺️ Google Maps Mining</h3>
                        <p>Open Google Maps. Search "[industry] near [city]". Look for businesses with: fewer than 50 reviews, no website link, or a website that loads poorly. These are your warmest cold leads — they have a provable problem before you even dial.</p>
                        <div className="ql-tip-box" style={{ marginTop: '16px', marginBottom: '0' }}>
                            <h4>💡 Daily Target</h4>
                            <p className="mb-0">Pull 15 leads from Google Maps each morning. Add them to your CRM with their current review count, website grade (use PageSpeed Insights), and one specific observation to lead with on the call.</p>
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>🔗 LinkedIn Sniper Method</h3>
                        <p>Don't mass blast. Sniper. Filter by: Title (Owner, Founder, CEO, Managing Partner) + Industry + Company size (2–50 employees). Check their company page. If their website link goes to a broken or generic page, they're a target.</p>
                        <div className="ql-script-box">
                            "Hey [Name], I build custom software for [industry] businesses in [city area]. I noticed your firm's digital intake process might have some gaps I could help close. Not pitching anything — I find it easier to just show you something real. Would a 10-minute screen-share this week be worth your time?"
                        </div>
                        <div className="ql-tip-box" style={{ marginTop: '16px', marginBottom: '0' }}>
                            <h4>💡 Connection Request Note (300 chars max)</h4>
                            <p className="mb-0 italic">"Hey [Name] — I work with [industry] businesses on automating their client intake and online presence. Saw [specific thing about their business]. Thought it might be worth connecting. No pitch, just genuinely impressed by [X]."</p>
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>🤝 Referral Loop Engineering</h3>
                        <p>Your happiest clients are your best salespeople. Most businesses never ask. Build a referral system from day one.</p>
                        <div className="ql-script-box">
                            "Hey [Client Name], really glad the new system is working so well for you. Quick ask — do you know two or three other business owners in your network who are still running on manual processes or outdated sites? If you make an intro and they become clients, we'll extend your plan at no cost for 2 months. No pressure — just thought I'd mention it."
                        </div>
                        <div className="mt-6 grid gap-4">
                            {[
                                { title: "The Strategic Partner Play", text: "Partner with a bookkeeper, accountant, or marketing agency who already serves your ideal client. Offer them a referral fee (10–15%) for every intro that closes. They become a passive lead machine for you." },
                                { title: "The Review-to-Referral Bridge", text: "After every successful launch, ask for a Google review AND a referral in the same message. People who are happy enough to leave a review are primed to refer — catch them in that exact window." }
                            ].map((item, i) => (
                                <div key={i} className="p-4 rounded-xl" style={{ background: 'rgba(167,139,250,0.05)', border: '1px solid rgba(167,139,250,0.12)' }}>
                                    <p className="text-purple-400 font-semibold text-sm mb-2">{item.title}</p>
                                    <p className="text-gray-400 text-sm mb-0">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>📋 The Daily Prospecting Stack</h3>
                        <p>This is your non-negotiable daily activity system. Consistency beats intensity every single time.</p>
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

                    {/* ─── BONUS MODULE G: The Demo & Proposal Playbook ─── */}
                    <div className="ql-section-header">
                        <span className="ql-module-number">Bonus Module G</span>
                        <h2 className="ql-module-title">Demo & Proposal Playbook</h2>
                    </div>

                    <p className="mb-8">Most reps lose the deal in the demo — not because the product is weak, but because they demo features instead of outcomes. Here is the exact structure of a high-converting QuantLab demo.</p>

                    <div className="ql-card">
                        <h3>The 5-Part Demo Structure</h3>
                        <div className="mt-4 grid gap-5">
                            {[
                                { step: "01", title: "Recap Their Pain (2 min)", color: '#22d3ee', text: "Open by summarizing back exactly what they told you in discovery. Word for word. This builds massive trust and proves you actually listened. \"Before I show you anything, I want to make sure I understood what you told me last week...\"" },
                                { step: "02", title: "Show the Current State (2 min)", color: '#22d3ee', text: "Pull up their actual website or current process on screen. Walk through exactly where the friction is. \"Right now, when a lead hits this page, here's what happens...\" Make the pain visible and real." },
                                { step: "03", title: "Show the Future State (10 min)", color: '#a78bfa', text: "Now show a comparable build we've done (or a wireframe/prototype). Walk through the new flow step-by-step, narrating the outcome at each step. \"Now watch what happens when a lead hits this same page...\" Map every feature to a specific pain point they mentioned." },
                                { step: "04", title: "Quantify the Gap (3 min)", color: '#a78bfa', text: "Return to the numbers from discovery. \"In your current setup, that lead waited 6 hours. In this system, they get a response in 60 seconds. You told me you're losing 3 leads per week. That's a $45,000/month gap this closes.\"" },
                                { step: "05", title: "The Soft Ask (2 min)", color: '#f8fafc', text: "\"Based on what you just saw — does this solve the problem we talked about? What questions do you have before we discuss next steps?\" Then go quiet." }
                            ].map((item, i) => (
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
                        <h3>Writing the Winning Proposal</h3>
                        <p>A proposal is not a quote — it's a closing document. It should be so compelling that they feel foolish saying no.</p>
                        <div className="mt-5 grid gap-4">
                            {[
                                { section: "Section 1: Their Words", tip: "Open with a summary of everything they told you about their problem. Exact phrases they used. This shows you listened and positions everything else as the solution to their own stated problem." },
                                { section: "Section 2: Cost of the Status Quo", tip: "Calculate and present the monthly cost of NOT acting. Use their numbers. If they said they're losing 2 deals/week at $5k avg, write: 'Current monthly cost of broken lead flow: $40,000.'" },
                                { section: "Section 3: The Build Plan", tip: "Show a clear, time-boxed roadmap. Week 1: Strategy & Architecture. Week 2–3: Core Build. Week 4: Testing & Launch. Week 4+: Ongoing support. Specificity builds confidence." },
                                { section: "Section 4: Investment", tip: "Never just list a price. Show the value equation first. '$3,500 build + $800/mo support = $13,100/year.' Then: 'Based on the $40,000/mo problem we identified, ROI in under 2 weeks.'" },
                                { section: "Section 5: Social Proof Block", tip: "Include 2–3 client outcomes from similar industries. Keep it specific: '47% increase in booked consultations in first 60 days.' Generic testimonials are worthless. Numbers close deals." },
                                { section: "Section 6: The Easy Yes", tip: "End with a clear, low-friction call to action. 'To move forward, simply reply YES to this email and we'll send over the agreement and kickoff scheduling link.' Remove every possible barrier." }
                            ].map((item, i) => (
                                <div key={i} className="p-4 rounded-xl" style={{ background: 'rgba(34,211,238,0.03)', border: '1px solid rgba(34,211,238,0.08)' }}>
                                    <p className="text-cyan-400 font-semibold text-sm mb-2">{item.section}</p>
                                    <p className="text-gray-400 text-sm mb-0">{item.tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>Death by Proposal: What to Avoid</h3>
                        <div className="mt-4 grid gap-4">
                            {[
                                ["Sending a proposal without a verbal commitment", "A proposal should confirm a decision, not start one. If they haven't said 'yes in principle' on the call, a proposal is just content for them to ignore."],
                                ["Generic pricing without context", "Listing '$5,000' with no ROI framing is a price tag on a product. Listing '$5,000 = 12-day ROI based on your numbers' is an investment."],
                                ["More than 2 pages", "Every additional page is an opportunity to overthink. Make it surgical: problem, solution, cost, proof, next step."],
                                ["Following up with 'Just checking in'", "This is the single most damaging follow-up phrase in existence. It signals desperation. See Module B's follow-up sequence instead."]
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

                    {/* ─── BONUS MODULE H: Pricing Psychology ─── */}
                    <div className="ql-section-header">
                        <span className="ql-module-number">Bonus Module H</span>
                        <h2 className="ql-module-title">Pricing Psychology</h2>
                    </div>

                    <p className="mb-8">Price is a story you tell, not a number you defend. Most reps treat pricing as a vulnerability — great reps treat it as a weapon. Master these principles and you will never crumble on price again.</p>

                    <div className="ql-card">
                        <h3>The Anchor & Adjust Principle</h3>
                        <p>Always present the highest option first. It anchors the prospect's perception of value. Every subsequent option feels like a better deal by comparison.</p>
                        <div className="mt-5 grid gap-4">
                            {[
                                { tier: "Enterprise", price: "$12,000 build + $1,800/mo", color: '#a78bfa', items: ["Full custom platform build", "Custom CRM + automation", "Monthly strategy sessions", "Priority 2hr response SLA", "Dedicated success manager"] },
                                { tier: "Growth", price: "$5,500 build + $950/mo", color: '#22d3ee', items: ["Core platform build", "Lead capture + follow-up flows", "Bi-weekly check-ins", "8hr response SLA", "Shared support queue"] },
                                { tier: "Starter", price: "$2,200 build + $450/mo", color: '#94a3b8', items: ["Site redesign + speed optimization", "Basic booking integration", "Monthly report", "Email support only"] }
                            ].map((tier, i) => (
                                <div key={i} className="p-5 rounded-xl relative" style={{ background: i === 0 ? 'rgba(167,139,250,0.05)' : 'rgba(255,255,255,0.02)', border: `1px solid ${tier.color}25` }}>
                                    {i === 0 && <span className="absolute top-3 right-3 text-xs px-2 py-1 rounded font-bold" style={{ background: 'rgba(167,139,250,0.15)', color: '#a78bfa' }}>ANCHOR</span>}
                                    <div className="flex items-baseline gap-3 mb-3">
                                        <span className="font-bold text-lg" style={{ color: tier.color }}>{tier.tier}</span>
                                        <span className="text-gray-400 text-sm">{tier.price}</span>
                                    </div>
                                    <ul style={{ listStyleType: 'disc', marginLeft: '16px', color: '#94a3b8', fontSize: '0.875rem', lineHeight: 1.8 }}>
                                        {tier.items.map((item, j) => <li key={j}>{item}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <div className="ql-tip-box" style={{ marginTop: '20px', marginBottom: '0' }}>
                            <h4>💡 The Middle Tier Magnet</h4>
                            <p className="mb-0">Studies show 60–70% of prospects choose the middle option when presented with three tiers. Design your middle tier to be your most profitable — not your cheapest. Make Starter feel stripped and Enterprise feel excessive. Middle is the target.</p>
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>Price Objection Neutralization Scripts</h3>
                        <div className="space-y-6 mt-4">
                            <div>
                                <p className="font-semibold text-white mb-3">When they say "That's more than we wanted to spend":</p>
                                <div className="ql-script-box">
                                    "I hear you. Let me ask — what did you have budgeted? [pause] Okay. The reason there's a gap is we're not building a website, we're building a revenue system. Let me show you the math: at your average project value of $X, this system needs to bring in just [Y] additional clients per year to pay for itself entirely. Does that change the framing?"
                                </div>
                            </div>
                            <div>
                                <p className="font-semibold text-white mb-3">When they want to negotiate down:</p>
                                <div className="ql-script-box">
                                    "I want to find something that works for you. Here's how I can make that happen — rather than reducing quality on the build, let's pull back the scope. If we remove [Feature X] and [Feature Y] from Phase 1, we can hit close to your number and add those back in Month 3 once the ROI is proven. Would that structure work?"
                                </div>
                                <p className="text-gray-500 text-sm mt-2">Never reduce price. Only reduce scope. Reducing price trains them to negotiate everything forever.</p>
                            </div>
                            <div>
                                <p className="font-semibold text-white mb-3">When they go silent after hearing the price:</p>
                                <div className="ql-script-box">
                                    [Say nothing. Let the silence breathe. Count to 10 in your head. Whoever speaks first loses. If they still say nothing after 15+ seconds:]<br /><br />
                                    "What's going through your mind right now?"
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="ql-card">
                        <h3>The Value Staircase</h3>
                        <p>Before any price lands, you must have already stacked five layers of value in the prospect's mind. Missing even two of these means price resistance.</p>
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

                    {/* ─── BONUS MODULE I: The Full Sales Pipeline Map ─── */}
                    <div className="ql-section-header">
                        <span className="ql-module-number">Bonus Module I</span>
                        <h2 className="ql-module-title">The Full Sales Pipeline Map</h2>
                    </div>

                    <p className="mb-8">Know exactly where every deal is at all times. A rep without a pipeline is stressed. A rep with a clean, managed pipeline is a machine. These are the 7 stages every deal moves through — and the exact action required at each one.</p>

                    <div className="ql-card">
                        <div className="space-y-5">
                            {[
                                { stage: "Stage 1", name: "IDENTIFIED", color: '#64748b', desc: "Lead sourced and researched. Key info recorded: business name, owner name, current digital pain point, contact method.", action: "Send first outreach within 24 hours of identifying. Do not sit on leads.", metric: "Target: 15+ new per day" },
                                { stage: "Stage 2", name: "CONTACTED", color: '#22d3ee', desc: "First outreach sent — call, DM, email, or in-person approach.", action: "If no reply in 48 hours, send follow-up #1. If no reply after 7 days, send follow-up #2. Mark as COLD after 14 days.", metric: "Target: 10 per day" },
                                { stage: "Stage 3", name: "ENGAGED", color: '#22d3ee', desc: "They replied, showed interest, or asked a question. The conversation is live.", action: "Qualify them: budget range, timeline, decision-maker. Book a discovery call within 72 hours or you lose momentum.", metric: "Never let an engaged lead go cold" },
                                { stage: "Stage 4", name: "DISCOVERY CALL COMPLETE", color: '#a78bfa', desc: "Discovery call done. Pain clearly identified. Budget ballpark established. Decision-maker confirmed.", action: "Within 24 hours: send a recap email summarizing their pain, your proposed solution, and confirm next step (demo or proposal).", metric: "Same-day while memory is fresh" },
                                { stage: "Stage 5", name: "DEMO / PROPOSAL SENT", color: '#a78bfa', desc: "Proposal or demo delivered. They now have everything they need to make a decision.", action: "Follow up after 48 hours using Module B's sequence — not 'just checking in.'", metric: "Close rate target: 30–40% of proposals sent" },
                                { stage: "Stage 6", name: "NEGOTIATION", color: '#f59e0b', desc: "They want to move forward but have concerns: price, scope, timeline, stakeholder sign-off.", action: "Address each concern individually. Never drop price — adjust scope. Set a hard decision deadline: 'I can hold this slot until Friday.'", metric: "Convert 70%+ of negotiations" },
                                { stage: "Stage 7", name: "CLOSED — WON", color: '#22c55e', desc: "Signed. Deposit received. Project kicked off.", action: "Send a premium onboarding experience. First impression of the working relationship. Set expectations, timeline, and communication cadence.", metric: "Ask for referral within first 30 days" }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-5 pb-5" style={{ borderBottom: i < 6 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                                    <div className="flex-shrink-0 text-right w-28">
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

                    {/* ─── BONUS MODULE J: Copy-Paste Template Library ─── */}
                    <div className="ql-section-header">
                        <span className="ql-module-number">Bonus Module J</span>
                        <h2 className="ql-module-title">Copy-Paste Template Library</h2>
                    </div>

                    <p className="mb-8">Steal these. Adapt them to your voice — but the structure is proven. Never start from a blank page again.</p>

                    <div className="ql-card">
                        <h3>📧 Email Templates</h3>
                        <div className="space-y-8 mt-4">
                            {[
                                {
                                    label: "Cold Email #1 — The Observation",
                                    subj: "Subject: [Their Company] — quick observation",
                                    body: `Hey [First Name],\n\nI was doing research on [industry] businesses in [area] and came across [Company Name].\n\nTried to [do something on their site — book an appointment / find a service menu / request a quote] and hit a dead end.\n\nWe build custom systems for businesses like yours that automate exactly that process. Have helped [similar company type] cut their lead response time from [X hours] to under 60 seconds.\n\nWorth a quick 10-minute call this week?\n\n[Your Name]\nQuantLab Software Solutions`
                                },
                                {
                                    label: "Cold Email #2 — The Competitor Pattern",
                                    subj: "Subject: [Their Competitor] is doing something you're not",
                                    body: `Hey [First Name],\n\nI don't usually reach out like this, but I was researching [industry] in [city] and noticed that [Competitor Name] just launched an automated [booking/intake/ordering] system that lets them respond to leads in under 2 minutes.\n\nMost businesses in your space are still on manual email-and-callback. That gap is turning into a competitive moat quickly.\n\nWe built their system. I'd love to show you what it looks like in 10 minutes.\n\n[Your Name]\nQuantLab`
                                },
                                {
                                    label: "Proposal Follow-Up Email (Day 3)",
                                    subj: "Subject: One more thought on [Company Name]",
                                    body: `Hey [First Name],\n\nI've been thinking more about the intake bottleneck you described — specifically the part about re-entering data manually three times per client.\n\nI pulled a quick workflow example from a similar build we did for a [industry] firm. Attaching it here — it shows how we solved the exact same issue in 2 weeks.\n\nHappy to walk you through it if helpful. No pressure on the proposal — just want to make sure you have the full picture.\n\n[Your Name]`
                                },
                                {
                                    label: "Post-Call Recap Email",
                                    subj: "Subject: Notes from our call + next steps",
                                    body: `Hey [First Name],\n\nReally valuable conversation today. Here's what I captured:\n\n**Your Current Challenge:**\n[2-3 bullet points using their exact words]\n\n**What We'd Build:**\n[2-3 bullet points of the proposed solution]\n\n**Your Goal:**\n[Repeat the outcome they said they wanted]\n\nBased on this, I'll put together a detailed proposal and send it over by [date]. In the meantime, if anything else comes to mind, just reply here.\n\nLooking forward to it.\n\n[Your Name]`
                                }
                            ].map((t, i) => (
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
                            {[
                                {
                                    label: "Instagram / Facebook DM — Cold",
                                    body: "Hey [Name] — love what you're building with [Company]. Random question: when someone finds you on Instagram, what's your current process for converting them into a paying client? Curious because I have an idea that might be relevant."
                                },
                                {
                                    label: "SMS Follow-Up After Call",
                                    body: "Hey [Name], [Your Name] here from QuantLab. Great call earlier — I'm sending over the recap email now. Just wanted to make sure it doesn't land in spam. Let me know when you have a second to check it."
                                },
                                {
                                    label: "LinkedIn InMail — Re-engagement (90+ day cold lead)",
                                    body: "Hey [Name] — we spoke back in [month] about automating your intake process. Life got busy on both our ends. I'm reaching out because we just finished a very similar project for a [industry] in [city] and the results were really strong. Would it make sense to revisit the conversation?"
                                },
                                {
                                    label: "Referral Request Text",
                                    body: "Hey [Client Name]! Quick one — know anyone else running a [industry] business who's dealing with the same lead/ops headaches you had before we worked together? Happy to comp you two months if an intro turns into a project. No worries at all if not!"
                                },
                                {
                                    label: "The 'Breakup' Text (Final Follow-Up)",
                                    body: "Hey [Name] — I've reached out a few times and haven't heard back, which usually means either the timing's off or we're not the right fit. I'll stop following up after this one. If things change and you want to revisit the digital systems conversation, I'll be here. Wishing you a great quarter either way."
                                }
                            ].map((t, i) => (
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
                                ["Connection Rate", "25%+ of outreach receives a reply", "Weekly"],
                                ["Discovery Calls Booked", "5+ booked calls per week", "Weekly"],
                                ["Discovery-to-Proposal Rate", "70%+ of calls result in a proposal being sent", "Weekly"],
                                ["Close Rate", "30%+ of proposals sent result in a closed deal", "Monthly"],
                                ["Average Deal Value", "Growing month-over-month via upsells + tier positioning", "Monthly"],
                                ["Referral Rate", "1 referral per every 3 active clients", "Monthly"]
                            ].map(([metric, target, freq], i) => (
                                <div key={i} className="grid grid-cols-12 gap-3 items-center p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                    <div className="col-span-4">
                                        <p className="text-white font-medium text-sm mb-0">{metric}</p>
                                    </div>
                                    <div className="col-span-6">
                                        <p className="text-gray-400 text-xs mb-0">{target}</p>
                                    </div>
                                    <div className="col-span-2 text-right">
                                        <span className="text-xs px-2 py-1 rounded font-semibold" style={{ background: 'rgba(34,211,238,0.08)', color: '#22d3ee' }}>{freq}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-lg mt-12 text-cyan-400 font-semibold">
                            This document is a living weapon.<br />
                            <span className="text-gray-500 text-base font-normal">Master every module. Return to it weekly. The rep who outworks and out-studies everyone else wins — every time.</span>
                        </p>
                    </div>

                </div>
                {/* ─── BONUS MODULE K: Elite Advanced Tactics ─── */}
                <div className="ql-section-header">
                    <span className="ql-module-number">Bonus Module K</span>
                    <h2 className="ql-module-title">Elite Advanced Tactics</h2>
                </div>

                <p className="mb-8">These are the moves that separate a $5k/month rep from a $25k/month rep. Not for beginners — internalize Modules A through J first. These tactics require full situational awareness to deploy correctly.</p>

                <div className="ql-card">
                    <h3>🎭 The Pre-Frame Technique</h3>
                    <p>Before you ever discuss price, solution, or features — install the frame through which they will evaluate everything. Set it in your first 60 seconds.</p>
                    <div className="ql-script-box">
                        "Before I show you anything, I want to be transparent about how I work. I'm not going to pitch you. I'm going to ask you questions, and at the end if I genuinely think we can help you, I'll tell you exactly how. And if I don't think we're the right fit, I'll tell you that too. Sound fair?"
                    </div>
                    <p>This pre-frame does three things simultaneously: it removes sales pressure, positions you as a trusted advisor, and makes the prospect lower their defenses completely. Every single thing you say after this lands twice as hard.</p>
                </div>

                <div className="ql-card">
                    <h3>🧲 The Porcupine Technique</h3>
                    <p>When a prospect asks you a question, answer it with a question. Redirect the conversation back to their world instead of your pitch. Named after the old sales adage: "If someone throws you a porcupine, throw it back."</p>
                    <div className="space-y-4 mt-4">
                        {[
                            ["Prospect: 'How long does a build like this take?'", "Rep: 'Great question — it depends on the scope. What's your timeline: when do you need this live to make an impact?'"],
                            ["Prospect: 'Do you work with small businesses?'", "Rep: 'Absolutely. What's your current revenue range, so I can make sure what we show you is sized correctly?'"],
                            ["Prospect: 'What does it cost?'", "Rep: 'I can walk you through our investment ranges. First, can I ask what you're currently spending on your website and software tools per month? I want to make sure there's alignment.'"]
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
                    <p>When a prospect is nearly there but freezing on the big commitment, reduce the ask to the smallest possible yes that keeps momentum alive.</p>
                    <div className="ql-script-box">
                        "I understand you need to see more before committing to the full build. Here's what I propose: let's do a paid strategy session — $250 for 90 minutes. We'll map out the exact architecture, deliverables, and ROI projection. You walk away with a complete blueprint whether we build it or not. If we move forward to the build, the $250 comes off your invoice. Fair?"
                    </div>
                    <div className="ql-tip-box" style={{ marginTop: '16px', marginBottom: '0' }}>
                        <h4>💡 Why This Works</h4>
                        <p className="mb-0">The psychology of commitment: once someone pays even $250, they mentally become a client. They show up to the strategy session ready to buy. Conversion from paid strategy sessions to full builds typically runs 70–85%.</p>
                    </div>
                </div>

                <div className="ql-card">
                    <h3>📊 The Live Audit Close</h3>
                    <p>The most powerful demo you can give is not of something you built — it's a live deconstruction of their existing digital presence, done in real time on the call. Pull up their site, run PageSpeed Insights, check their Google ranking for 3 target keywords, count their review gap vs. competitors. Narrate every finding like a surgeon.</p>
                    <div className="ql-script-box">
                        "Give me 2 minutes — I'm going to pull up your site right now and show you exactly what your ideal client experiences when they find you. [Run the audit live.] Okay, so your homepage loaded in 8.3 seconds on mobile. Google's threshold is 2.5 seconds. Your top three competitors load in under 2 seconds. This is the invisible reason you're losing organic rankings — and the fix is not complicated."
                    </div>
                    <p>This technique requires zero preparation and creates maximum urgency. The prospect sees their problem in real time — they can't rationalize it away.</p>
                </div>

                <div className="ql-card">
                    <h3>🔐 The Exclusivity Positioning</h3>
                    <p>Never position yourself as available to everyone. Quality clients want to work with quality vendors. Selectivity signals demand.</p>
                    <div className="ql-script-box">
                        "We're pretty selective about who we take on — not because we're arrogant, but because we require a certain level of commitment and collaboration from clients to deliver results. Based on our conversation, you check the boxes. But I want to make sure you're genuinely committed to growing the business digitally before we move forward. Are you?"
                    </div>
                    <div className="ql-bad-script-box">
                        "We'd love to work with you! We're very flexible and work with all kinds of businesses!" [This communicates desperation and commoditizes you instantly.]
                    </div>
                </div>

                <div className="ql-card">
                    <h3>🎯 Multi-Threading: Navigating Decision Committees</h3>
                    <p>In larger businesses ($3M+ revenue), you will rarely close with just one person. You need to identify and build relationships with every stakeholder — the influencer, the decision-maker, and the budget holder. These are often three different people.</p>
                    <div className="mt-5 grid gap-4">
                        {[
                            { role: "The Champion", color: '#22d3ee', desc: "Your first contact. Usually a manager or operations lead. They love your idea but don't control the budget. Your job: arm them with everything they need to sell internally. Send them a one-page ROI summary they can forward to their boss." },
                            { role: "The Decision-Maker", color: '#a78bfa', desc: "The CEO, COO, or owner. They control the yes. They don't want to hear features — they want to hear risk mitigation and ROI. Speak their language in every email. Get on a call with them directly, never rely on your champion to relay your pitch." },
                            { role: "The Budget Holder / CFO", color: '#f59e0b', desc: "Sometimes the same as the decision-maker, sometimes not. They think in terms of cost centers. Frame everything as an investment with a measurable return period, not an expense. Have your ROI math locked before you meet them." }
                        ].map((item, i) => (
                            <div key={i} className="p-4 rounded-xl" style={{ background: `${item.color}08`, border: `1px solid ${item.color}20` }}>
                                <p className="font-bold text-sm mb-2" style={{ color: item.color }}>{item.role}</p>
                                <p className="text-gray-400 text-sm mb-0">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="ql-script-box" style={{ marginTop: '20px' }}>
                        "Hey [Champion], before we put together the final proposal, I'd love to get 15 minutes with [CEO Name] directly. I find the projects go smoother when I can address their specific concerns upfront rather than through the chain. Could you set that up?"
                    </div>
                </div>

                <div className="ql-card">
                    <h3>🛡️ Advanced Tonality Control</h3>
                    <p>What you say matters less than how you say it. Master these four tonalities and use them deliberately in every call.</p>
                    <div className="mt-4 grid gap-4">
                        {[
                            { tone: "Curious / Playful", use: "Opening, rapport building, discovery questions", example: "\"Walk me through what happens when someone tries to book with you right now... [lean in, genuine curiosity]\"", color: '#22d3ee' },
                            { tone: "Assertive / Certain", use: "When presenting solutions and ROI", example: "\"Here's what I know for certain — this kind of system will cut your response time from hours to seconds. That's not a promise, that's what the data shows.\"", color: '#a78bfa' },
                            { tone: "Empathetic / Measured", use: "When handling objections or uncovering deep pain", example: "\"That sounds genuinely frustrating — having to re-enter data three times for every single client. How long has that been the process?\"", color: '#f59e0b' },
                            { tone: "Takeaway / Withdrawn", use: "Trial close, negotiation, breakup messages", example: "\"Based on this conversation, I'm not sure we're the right fit for where you're at right now. And that's completely okay.\"", color: '#94a3b8' }
                        ].map((item, i) => (
                            <div key={i} className="p-4 rounded-xl" style={{ border: `1px solid ${item.color}25`, background: `${item.color}05` }}>
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="font-bold text-sm" style={{ color: item.color }}>{item.tone}</span>
                                    <span className="text-xs text-gray-600">— Use when: {item.use}</span>
                                </div>
                                <p className="text-gray-400 text-sm italic mb-0">{item.example}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="ql-card">
                    <h3>🔄 The Upsell Ladder</h3>
                    <p>The easiest person to sell to is someone who already bought from you. Build an intentional upsell path so every client naturally grows their investment over time.</p>
                    <div className="mt-5 space-y-3">
                        {[
                            { month: "Month 1–2", action: "Deliver exceptional core build. Exceed expectations on timeline and communication.", trigger: "Client says 'We love working with you'" },
                            { month: "Month 3", action: "Introduce Upsell #1: 'Based on how the system is performing, we can add [feature — automated review requests / SMS follow-up / analytics dashboard]. Want me to price it out?'", trigger: "Any positive result they share with you" },
                            { month: "Month 4–5", action: "Escalate their plan tier. 'You've outgrown the Starter plan — moving you to Growth gets you [X and Y] which I think you actually need at this point.'", trigger: "Usage increase, new team members, or expansion talk" },
                            { month: "Month 6+", action: "Referral + renewal conversation. Lock in next year's plan with a loyalty discount. 'We're grateful for your business — if you commit to another 12 months, we'll lock your current rate in and add [bonus].'", trigger: "Any account anniversary or check-in call" }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 items-start p-4 rounded-xl" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)' }}>
                                <span className="flex-shrink-0 text-xs font-bold px-2 py-1 rounded" style={{ background: 'rgba(34,211,238,0.1)', color: '#22d3ee', whiteSpace: 'nowrap' }}>{item.month}</span>
                                <div>
                                    <p className="text-gray-300 text-sm mb-1">{item.action}</p>
                                    <p className="text-xs text-gray-600">Trigger: {item.trigger}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ─── BONUS MODULE L: 100-Question Q&A ─── */}
                <div className="ql-section-header">
                    <span className="ql-module-number">Bonus Module L</span>
                    <h2 className="ql-module-title">100-Question Training Q&A</h2>
                </div>

                <p className="mb-4">Test your mastery. Go through every question. If you can answer fluently without reading, you are ready. If you hesitate, return to the relevant module and drill it until the response is automatic.</p>

                <div className="ql-tip-box mb-8">
                    <h4>💡 How to Use This Section</h4>
                    <p className="mb-0">Read each question aloud. Answer it verbally without looking at the answer. Then check your response. Practice with a partner, on video, or record yourself. The goal is a <strong>zero-hesitation response</strong> to every question in this bank.</p>
                </div>

                {[
                    {
                        category: "🧠 Mindset & Preparation",
                        color: '#22d3ee',
                        qas: [
                            { q: "What is the core frame difference between a salesman and a consultant?", a: "A salesman pushes products. A consultant diagnoses problems. We operate as Digital Growth Consultants — we don't pitch features, we prescribe solutions to specific, quantifiable business pain." },
                            { q: "Why is pre-call research non-negotiable at QuantLab?", a: "Because generic outreach is the fastest way to sound like everyone else. 5 minutes of research lets you lead with a specific observation about their business — which instantly separates you from 99% of cold callers." },
                            { q: "What three things should you identify about a prospect before any outreach?", a: "1) Their current digital pain point (broken booking, slow site, no lead capture). 2) Their approximate business size/revenue. 3) The decision-maker's name and preferred contact channel." },
                            { q: "What does 'knowing your weapon' mean in the context of QuantLab sales?", a: "Having complete conviction that what we build generates measurable ROI. You must be able to articulate exactly how our systems capture leads, automate operations, and build authority — and connect each one to dollar value." },
                            { q: "Name three things you should audit on a prospect's site before outreach.", a: "1) Page load speed (use PageSpeed Insights). 2) Mobile responsiveness. 3) Whether they have a clear lead capture or booking path. Bonus: check their Google review count vs. competitors." },
                            { q: "What is the 'cost of inaction' and why do you calculate it before pitching?", a: "The COI is the monthly/annual dollar amount a prospect loses by doing nothing. Calculating it first reframes our investment as cheap compared to the ongoing bleed. Without it, any price feels expensive." },
                            { q: "How should you handle internal fear before a cold call?", a: "Use the Daily Mindset Reps. Remind yourself: you are not selling, you are diagnosing. Their objection is data, not rejection. Your confidence is the product. Say these aloud before every prospecting session." },
                            { q: "What is the 'Consultant Frame' and how do you maintain it under pressure?", a: "The frame that you are there to diagnose and help, not to close a deal. Maintain it by staying genuinely curious, asking more than you tell, and being willing to say 'I don't think we're the right fit' if they aren't." },
                            { q: "How do you translate tech jargon into business value for a non-technical prospect?", a: "Use the Tech Translation Cheat Sheet. Never say 'Next.js SSR' — say 'your site will load instantly on mobile, reducing bounce rate.' Never say 'API webhook' — say 'your systems will talk to each other automatically with no manual data entry.'" },
                            { q: "What is your objective on the very first contact with a prospect?", a: "Not to pitch. Not to close. Your sole objective on first contact is to earn the right to a discovery conversation. Generate curiosity, establish credibility, and book a call." }
                        ]
                    },
                    {
                        category: "🧊 Breaking the Ice & Outreach",
                        color: '#a78bfa',
                        qas: [
                            { q: "What is the 'Pattern Interrupt' in cold email?", a: "A cold email that opens with something hyper-specific to their business rather than a generic intro. Example: leading with a specific observation about their booking process, load speed, or competitor gap instead of 'I hope this email finds you well.'" },
                            { q: "What are the four cold outreach channels and which is typically highest response?", a: "Phone, LinkedIn DM, email, and in-person. Phone has the highest response rate for local businesses. LinkedIn DM performs well for professional services. Email has the lowest open rate but highest scalability." },
                            { q: "How long should your cold LinkedIn DM be and why?", a: "Under 3 sentences. Business owners ignore paragraphs. One observation, one value hook, one CTA. More words = less read." },
                            { q: "What is rapport in a professional sales context?", a: "Not small talk — it's competence and empathy. You build professional rapport by demonstrating you understand the brutal reality of running their specific type of business before you ask them anything." },
                            { q: "Give an example of a cold opener for a home services contractor.", a: "\"Hey [Name], noticed your competitors all have instant 'Request an Estimate' portals and your site only has a basic email form. How many emergency leads are slipping to the other guys because you can't reply fast enough?\"" },
                            { q: "What is the biggest mistake reps make in their cold opener?", a: "Talking about themselves or their company instead of the prospect. Every cold opener should be 90% about the prospect's world and 10% or less about QuantLab." },
                            { q: "What does a high-converting cold email subject line look like?", a: "Short, specific, and curiosity-provoking. Examples: '[Their Company] — quick observation', '[Competitor Name] is doing something you're not', 'Your onboarding flow'. Avoid: 'Partnership opportunity', 'Quick question', 'Re: Our services'" },
                            { q: "How do you build instant credibility with a brand new prospect?", a: "Reference a specific detail about their business that proves you did your homework. Then make a precise observation about what's broken. Specificity = credibility. Generic praise means nothing." },
                            { q: "What should your LinkedIn connection request note focus on?", a: "Under 300 characters. One specific observation about their business, a genuine compliment, and zero pitch. You are asking to connect as a peer, not to sell." },
                            { q: "After sending a cold email, how long do you wait before following up?", a: "48–72 hours for follow-up #1. Then 7 days for follow-up #2. Then Day 14 for the breakup message. Never send a generic 'Just checking in' — every follow-up must add new value or shift the frame." }
                        ]
                    },
                    {
                        category: "🔍 Discovery & SPIN",
                        color: '#22d3ee',
                        qas: [
                            { q: "What does SPIN stand for and what are the four question types?", a: "Situation (current state), Problem (pain points), Implication (what the pain costs them), Need-Payoff (what solving it is worth). Each layer builds urgency before the next." },
                            { q: "What is a Situation question and give an example?", a: "A question that maps the prospect's current state. 'Walk me through exactly what happens right now when a new lead hits your website.' You're gathering data, not diagnosing yet." },
                            { q: "What is a Problem question and why is it critical?", a: "It makes the prospect admit the flaw in their current system. 'How often are details slipping through the cracks with your current manual process?' — they must say it themselves for it to land emotionally." },
                            { q: "What is an Implication question and how does it create urgency?", a: "It forces the prospect to calculate the financial and operational cost of their problem. 'If your team spends 15 hours a week on manual data entry, what does that cost you in payroll per month?' Urgency created by their own math." },
                            { q: "What is a Need-Payoff question?", a: "It gets the prospect to articulate the value of solving the problem in their own words. 'If we could completely automate that intake process, how much would that free your team up?' — they sell themselves." },
                            { q: "How do you know when you've done a successful discovery?", a: "When the prospect has identified their own pain, quantified what it costs them, and expressed what solving it would mean to their business — all in their own words without you pitching." },
                            { q: "What listening technique separates good reps from great ones?", a: "Reflective listening — repeating key phrases they use back to them verbatim. 'So what I'm hearing is that the re-entry process is eating 4 hours a week.' This validates them and deepens the pain before you advance." },
                            { q: "When in the discovery call should you introduce QuantLab's solution?", a: "Not until you've fully mapped the pain and confirmed the prospect has acknowledged it verbally. Introducing the solution too early = feature dump. The prospect must be asking 'how can you fix this' before you answer." },
                            { q: "How do you handle a prospect who says 'everything is going great' on the discovery call?", a: "Challenge gently. 'That's great to hear — most businesses doing [revenue] still have at least one area where they know they're leaving money on the table. If you had to pick one, where would you say that is for you?'" },
                            { q: "What do you do if you discover a prospect's pain is outside QuantLab's scope?", a: "Tell them honestly. 'Honestly, what you're describing is more of a staffing challenge than a tech challenge — I'd be doing you a disservice pretending otherwise. Let me point you toward who actually can help.' This builds extraordinary referral trust." }
                        ]
                    },
                    {
                        category: "💰 Budget, Pricing & ROI",
                        color: '#f59e0b',
                        qas: [
                            { q: "What is the anchor pricing strategy and why do you always present it first?", a: "You present the most expensive tier first. Every option shown after it feels like a better deal by comparison. Most prospects land on the middle tier — which you design to be your most profitable." },
                            { q: "What is the 'Middle Tier Magnet' psychology?", a: "Studies show 60–70% of buyers choose the middle option when given three tiers. Make Starter feel stripped and Enterprise feel excessive so the middle tier becomes the obvious, comfortable choice." },
                            { q: "How do you bring up budget without creating awkwardness?", a: "Anchor first with a range. 'Engagements like this typically range from $3,000 to $10,000 depending on scope. Is that completely out of the realm of possibility for you?' Their reaction tells you everything. No awkwardness — just data." },
                            { q: "What is the response to 'That's too expensive'?", a: "Loop back to the COI math you built together. 'We just agreed this broken process is costing you $10,000 a month. Our system costs $1,500/month. It pays for itself in 5 days. The question isn't whether you can afford this — it's whether you can afford not to.'" },
                            { q: "What does 'never drop price, only scope' mean?", a: "When a prospect wants a lower price, you remove deliverables rather than discounting the same scope. Discounting trains clients to negotiate everything and devalues your work permanently. Scope reduction is a trade, not a concession." },
                            { q: "What is the 'Value Staircase' and how many steps must be completed before price presentation?", a: "Five steps: 1) Prospect understands their problem costs money. 2) They believe you can solve it. 3) They see the ROI math clearly. 4) They trust you personally. 5) They feel urgency to act now. All five must be present before price lands well." },
                            { q: "How do you frame the monthly retainer to avoid it sounding like a maintenance fee?", a: "Call it a 'Dedicated Engineering Partner Plan.' Compare it to the cost of a junior in-house developer ($80k/year salary + benefits). Frame it as an entire elite tech team for a fraction of that cost, fully managed." },
                            { q: "What do you say when they go completely silent after you say the price?", a: "Absolutely nothing. Let the silence breathe. Count to 10. Whoever speaks first loses. If 15+ seconds pass, ask: 'What's going through your mind right now?' — soft, curious, zero defensiveness." },
                            { q: "What is a paid strategy session and why does it convert at 70–85%?", a: "A $250 paid 90-minute session where you architect their solution before committing to a full build. It converts high because paying $250 creates psychological ownership — they mentally become a client before the big check." },
                            { q: "How do you calculate the Cost of Inaction (COI) live on a call?", a: "Ask for their average client value, then ask how many leads/deals they lose per month to the broken process. Multiply. 'You said you lose 2 leads a week at $5k average — that's $40,000 a month this system would recapture. Write that down.'" }
                        ]
                    },
                    {
                        category: "🛡️ Objection Handling",
                        color: '#ef4444',
                        qas: [
                            { q: "What is the fundamental mindset shift needed to handle objections well?", a: "An objection is never a rejection — it's a request for more information or reassurance. Stay curious, not defensive. Welcome objections as signals that the prospect is engaged." },
                            { q: "What is the 3-step objection response formula?", a: "1) Validate without agreeing. 2) Reframe the objection as a question or assumption to test. 3) Redirect back to their pain and advance. Never skip validation — it disarms resistance before logic can land." },
                            { q: "How do you handle 'We tried an agency before and it was a disaster'?", a: "Let them vent fully. Then: 'What specifically went wrong — communication, timeline, or the final product?' Then attack exactly those points with your differentiation. Empathy then differentiation, never defensiveness." },
                            { q: "What is the 'I need to think about it' objection actually hiding?", a: "Almost always a specific unsolved objection: price concern, authority (they need to ask someone else), trust deficit, or timeline friction. Your job is to ask: 'What specifically do you need to think through?' and diagnose the real one." },
                            { q: "How do you handle 'Can you just send me some information?'", a: "Redirect immediately to live demo. 'A PDF won't answer your specific questions. What if I take 10 minutes right now and show you a comparable build for a business just like yours? Faster than reading a brochure.' Never just send a PDF." },
                            { q: "How do you respond to 'My nephew handles our website'?", a: "'That's great for getting started. At your revenue level, you need enterprise reliability — SLAs, redundancy, a dedicated team. If something breaks Tuesday at 2 PM, is your nephew dropping everything to fix your lead funnel in 2 hours?'" },
                            { q: "How do you handle 'We're already using a big agency'?", a: "Find the gap. 'They do great brand work. But do they build deep custom ops tooling — live data dashboards, custom client portals, automated intake? Or is it mainly creative and ad management? We live in the space they don't touch.'" },
                            { q: "How do you respond to 'Call us in 6 months'?", a: "'Happy to. But I'm curious — what changes in 6 months? What milestone makes this decision easier then? I ask because most businesses who waited told me later they wished they'd started 6 months earlier.'" },
                            { q: "What is the Sharp Angle Close and when is it deployed?", a: "When a prospect makes a conditional commitment ('If you can start in 2 weeks, we'd sign'). You close immediately on the condition: 'If I confirmed a 2-week start in writing, are we moving forward today?' Then immediately go to contract." },
                            { q: "How do you neutralize a lower competitor price?", a: "Compete on risk, not price. 'I'd expect them to quote lower. My question is: what happens when it breaks? What happens when you need a feature in 4 months? What's the cost of your lead system being down for 48 hours?' Make them calculate the risk of cheap." }
                        ]
                    },
                    {
                        category: "🗺️ Prospecting & Lead Generation",
                        color: '#22d3ee',
                        qas: [
                            { q: "What is the Google Maps Mining technique?", a: "Search '[industry] near [city]' in Google Maps. Target businesses with fewer than 50 reviews, no website link, or a slow/outdated site. These are pre-qualified cold leads — they have a provable problem before you even call." },
                            { q: "What is the LinkedIn Sniper Method?", a: "Use LinkedIn's search filters: Title (Owner/Founder/CEO) + Industry + Company size (2–50 employees). Find prospects whose public website is broken or generic. Message with extreme personalization based on what you find." },
                            { q: "What is a Strategic Partner and how do you recruit one?", a: "A bookkeeper, accountant, attorney, or marketing agency already serving your ideal clients. You offer them a 10–15% referral fee for every intro that closes. They become a passive lead funnel for you." },
                            { q: "What is the Review-to-Referral Bridge?", a: "After every successful launch, ask for both a Google review AND a referral in the same message. Clients happy enough to leave a review are primed to refer — catch them in that exact emotional window." },
                            { q: "What is the Daily Prospecting Stack?", a: "8 AM: source 15 leads. 9 AM: 10 personalized outreach attempts. 10 AM: follow up on all open threads older than 24 hours. 11 AM: 2 discovery calls booked or completed. EOD: update CRM, log 3 objection observations." },
                            { q: "What are the four data points to record for every new lead in your CRM?", a: "1) Business name and owner name. 2) Current digital pain point (specific observation). 3) Contact method and outreach date. 4) Website/review grade and one hook to lead with on the call." },
                            { q: "How many cold touches does it typically take before a prospect responds?", a: "Industry research shows 7–12 touches on average. Most reps give up after 2–3. Your follow-up sequence through Day 14 keeps you in the game while your competition quits." },
                            { q: "What tool do you use to grade a prospect's website before a call?", a: "Google PageSpeed Insights and GTMetrix — both free. Run their URL, capture the score and exact load time. Bring the specific number to the call. 'Your site loaded in 7.3 seconds on mobile' is devastating and unarguable." },
                            { q: "What is the maximum number of personalized outreach messages to attempt in one day?", a: "10–15 personalized messages (not blasts). Quality beats quantity at this level. Each message should reference something specific about their business. Mass generic outreach actively damages your brand." },
                            { q: "What does a healthy monthly prospecting funnel look like?", a: "300+ leads identified → 200+ contacted → 50+ engaged → 20+ discovery calls → 6–8 proposals sent → 2–3 closed deals. If your pipeline narrows early (contacted but not engaging), your outreach message is the problem. If proposals don't close, your demo or pricing is the problem." }
                        ]
                    },
                    {
                        category: "🎬 Demo, Proposal & Closing",
                        color: '#a78bfa',
                        qas: [
                            { q: "What are the five parts of the QuantLab demo structure in order?", a: "1) Recap Their Pain. 2) Show the Current State (their broken process). 3) Show the Future State (the build). 4) Quantify the Gap. 5) The Soft Ask." },
                            { q: "Why do you always recap their pain before showing anything in the demo?", a: "It proves you listened, builds trust before the sell, and frames everything that follows as a direct solution to their own stated problems. The prospect can't dismiss what they said themselves." },
                            { q: "What are the six sections of a winning QuantLab proposal?", a: "1) Their Words (problem recap). 2) Cost of the Status Quo. 3) The Build Plan (time-boxed roadmap). 4) Investment (with ROI framing). 5) Social Proof Block (specific metrics). 6) The Easy Yes (frictionless CTA)." },
                            { q: "What is the maximum length a proposal should be and why?", a: "Two pages. Every additional page creates decision fatigue and more opportunities to overthink. Surgical proposals close faster. Make it: problem → solution → price → proof → next step." },
                            { q: "What is the Assumption Close and how is it executed?", a: "After a positive conversation, act as if the decision has been made and begin scheduling. 'The way we'll start is a 90-minute strategy session. I have openings Tuesday and Thursday — which works for you?' Momentum in motion stays in motion." },
                            { q: "What is the Takeaway Close?", a: "Create legitimate scarcity by communicating that your capacity is limited. 'We only take on 3 new builds per month. We have one slot left and two other conversations in progress. I don't want to pressure you — but I also don't want you to miss the window.' Only use this if it's true." },
                            { q: "What is the Ben Franklin Close and when is it most effective?", a: "Walk them through a pros/cons exercise live. Works best with analytical, logical thinkers (law, finance, engineering). Guide the 'cons' side to only include solvable objections. The exercise almost always makes them sell themselves." },
                            { q: "What is the Social Proof Pyramid Close?", a: "Stack three specific client outcomes from similar industries immediately before asking for the business. Same industry, same problem, same size. Specificity is critical — never use generic 'our clients love us' language." },
                            { q: "When should you send a proposal?", a: "Only after getting verbal commitment that the prospect is 'in principle' ready to move forward. A proposal sent without that commitment is marketing collateral, not a closing document." },
                            { q: "What do you say immediately after asking for the business?", a: "Nothing. Absolute silence. The first person to speak loses. If the prospect feels pressure to fill the silence, they will often answer with a yes or reveal the real objection." }
                        ]
                    },
                    {
                        category: "🏭 Industry Scenarios",
                        color: '#22d3ee',
                        qas: [
                            { q: "What is the core pain point for a personal injury law firm and how do you quantify it?", a: "Lead response time. They lose cases to competitors who call leads faster. Quantify: 'You said you're losing 2 leads a week. Average case value $15k. That's $1.5M per year slipping through your 6-hour response window.'" },
                            { q: "What is the restaurant/hospitality pitch hook?", a: "The DoorDash commission math. 'You're giving DoorDash 30% — that's $9 from every $30 order. Our direct ordering system keeps 100% of that revenue with you and gives you first-party customer data to retarget.'" },
                            { q: "What is the fitness studio/gym pitch hook?", a: "The Linktree-to-conversion gap. 'Your Instagram has 4,000 followers but your bio link goes to a generic Linktree. I'd estimate under 5% convert to trial bookings. We build landing pages that convert that traffic at 20–30%.'" },
                            { q: "What is the real estate agent/broker pitch hook?", a: "Page load speed destroying their organic traffic. Pull their IDX page load time. 'Your property pages load in 4+ seconds. Google's mobile threshold is 3 seconds. You're losing 30–40% of cold organic traffic before they see a single listing.'" },
                            { q: "What is the e-commerce/Shopify brand pitch hook?", a: "The ROAS decay caused by site speed and conversion rate. 'Your pages load in 6 seconds on mobile and your conversion is probably 2–3%. Optimized stores run 7–9%. That gap is your ad spend going straight to competitors.'" },
                            { q: "What is the home services/contractor pitch hook?", a: "The instant estimate gap. 'Your competitors have online estimate portals. You have a basic email form. Emergency leads call whoever responds first. How many jobs are you losing each week to guys who are just easier to book?'" },
                            { q: "What is the coach/consultant pitch hook?", a: "The authority mismatch. 'Your LinkedIn content is elite-level. But your booking page is a plain Calendly — no social proof, no transformation story. Your digital presence isn't matching your authority and it's filtering out your ideal client.'" },
                            { q: "What is the auto detailer/dealership pitch hook?", a: "Review count gap and booking friction. 'The three detailers above you on Google have 200+ reviews and online booking in the search result. You have 40 reviews and booking goes to Facebook Messenger. We fix both.'" },
                            { q: "What is the architect/interior designer pitch hook?", a: "Premium work attracting budget clients. 'Your portfolio work is stunning, but your website looks like 2016 and doesn't reflect your pricing. High-budget clients are pre-qualifying you out before they even reach out.'" },
                            { q: "How do you adapt your outreach for a medical clinic or healthcare provider?", a: "'I tried to book a new patient appointment on your site and had to download a PDF. Is your front desk constantly chasing patients for paperwork? We build HIPAA-aware intake systems that automate that entirely.'" }
                        ]
                    },
                    {
                        category: "📊 Pipeline, Metrics & Account Growth",
                        color: '#a78bfa',
                        qas: [
                            { q: "What are the 7 stages of the QuantLab sales pipeline?", a: "1) Identified. 2) Contacted. 3) Engaged. 4) Discovery Call Complete. 5) Demo/Proposal Sent. 6) Negotiation. 7) Closed Won. Every lead should have exactly one stage at any given time." },
                            { q: "What is the target daily lead identification goal?", a: "15+ new leads sourced and added to CRM with notes. Non-negotiable daily minimum. Without a full top of funnel, everything below it starves." },
                            { q: "What is the target close rate on proposals sent?", a: "30–40% of proposals sent should result in a closed deal. If you're below 30%, your demo or pricing presentation is the issue. If you're below 15%, your qualification is weak — you're sending proposals to unqualified prospects." },
                            { q: "At what stage do you ask for referrals from a new client?", a: "Within the first 30 days of the project — when the excitement of getting started is highest. Not six months later. Catch the emotional peak of the client relationship." },
                            { q: "What is the QuantLab Rep Scorecard and how often do you review it?", a: "An 8-metric tracking system covering: prospecting volume, outreach volume, connection rate, discovery calls booked, discovery-to-proposal rate, close rate, average deal value, and referral rate. Review weekly, not monthly." },
                            { q: "How do you identify where your pipeline is breaking?", a: "Track conversion rates between every stage. If connections are high but discovery calls low — your opener isn't creating urgency. If proposals are high but closes are low — your demo or pricing is wrong. Every bottleneck has a specific cause." },
                            { q: "What is the multi-threading strategy for enterprise prospects?", a: "Identify the Champion (your contact), Decision-Maker (CEO/owner), and Budget Holder (CFO). Build separate relationships with each. Never rely on your champion to relay your pitch upward — get in front of every stakeholder directly." },
                            { q: "What is the Upsell Ladder and when do you introduce it?", a: "A structured 6-month plan to grow client accounts: deliver core build → introduce Upsell #1 at Month 3 → escalate their plan tier at Month 4–5 → lock in a renewal with loyalty discount at Month 6+. Planned from Day 1, executed naturally." },
                            { q: "How do you handle a client who wants to pause their retainer?", a: "Treat it like a sales conversation. Ask why, quantify the cost of pausing, and offer a scaled-down plan as a bridge. 'Instead of pausing completely, what if we drop to our maintenance tier for 60 days while cash flow stabilizes? I'd hate to lose the infrastructure momentum we've built.'" },
                            { q: "What is the industry benchmark for referral generation among retainer clients?", a: "Target 1 referral per every 3 active retainer clients per month. If you're below this, you're either not asking, asking too late, or delivering work that doesn't generate organic enthusiasm. Great work + a clear ask = referrals." }
                        ]
                    },
                    {
                        category: "⚡ Elite Tactics & Advanced Scenarios",
                        color: '#22d3ee',
                        qas: [
                            { q: "What is the Pre-Frame Technique and when is it applied?", a: "In the first 60 seconds of any call, you install the evaluative frame: 'I'm not here to pitch — I'm here to diagnose. If we're the right fit, I'll tell you. If not, I'll tell you that too.' This removes defensiveness and positions you as a trusted advisor before a single question is asked." },
                            { q: "What is the Porcupine Technique?", a: "Answering a prospect's question with a question. When they ask 'How long does a build take?' — you ask 'Good question — what's your timeline? When do you need this live to make an impact?' Redirects control of the conversation back to you." },
                            { q: "What is tonality control and why does it matter more than words?", a: "Research shows that 38% of communication is tonality and 55% is body language. The same words said with different tonality produce opposite results. Master the four tones: Curious/Playful, Assertive/Certain, Empathetic/Measured, Takeaway/Withdrawn." },
                            { q: "What is the Live Audit Close?", a: "Running a real-time digital audit of the prospect's site during the call. Pull up their site, run PageSpeed Insights, check their keyword rankings live. The prospect sees their problem in real time — you can't rationalize away a 7-second load time number." },
                            { q: "What is the Minimum Viable Commitment Close?", a: "When a prospect is close but frozen, reduce the ask to a paid $250 strategy session. The small payment creates psychological ownership — they become a client mentally. These sessions convert to full builds at 70–85%." },
                            { q: "What is Exclusivity Positioning and how do you communicate it authentically?", a: "Position yourself as selective about who you work with. 'We take on 3 new builds per month — not because we're arrogant, but because we're committed to results for every client. Based on our conversation, you qualify.' Selectivity signals demand and respect." },
                            { q: "How do you handle a decision committee where the Champion doesn't have budget authority?", a: "Arm your champion with a one-page ROI summary to carry upward. Then request direct access to the decision-maker: 'I want to make sure your CEO's specific concerns are addressed directly — could you set up a 15-minute intro call?'" },
                            { q: "How do you re-engage a prospect who went cold 90+ days ago?", a: "LinkedIn InMail referencing a recent, relevant result. 'We spoke in [month] about automating your intake. I'm reaching out because we just finished a nearly identical project for a [same industry] in [city] — results were strong. Would it make sense to revisit?'" },
                            { q: "What is the difference between 'reducing price' and 'reducing scope' and why does it matter?", a: "Reducing price devalues your work and trains clients to negotiate everything forever. Reducing scope is a trade — they receive less, so you charge less. Never reduce the price for the same deliverable. Always trade value for value." },
                            { q: "What is the single most important thing a QuantLab rep must do after every single sales call?", a: "Send a same-day post-call recap email summarizing: their pain (in their words), the proposed solution, and the confirmed next step. This demonstrates professionalism, maintains momentum, and removes ambiguity about what was agreed." }
                        ]
                    }
                ].map((section, si) => (
                    <div key={si} className="mb-10">
                        <div className="flex items-center gap-3 mb-6 pb-3" style={{ borderBottom: `1px solid ${section.color}20` }}>
                            <div className="w-3 h-3 rounded-full" style={{ background: section.color }}></div>
                            <h3 className="text-lg font-bold" style={{ color: section.color, margin: 0 }}>{section.category}</h3>
                            <span className="text-xs text-gray-600 ml-auto">Q{si * 10 + 1}–Q{si * 10 + 10}</span>
                        </div>
                        <div className="space-y-4">
                            {section.qas.map((qa, qi) => (
                                <div key={qi} className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)', background: '#0a0f1d' }}>
                                    <div className="flex gap-4 p-4 items-start">
                                        <span className="flex-shrink-0 text-xs font-bold w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: `${section.color}15`, color: section.color }}>
                                            {String(si * 10 + qi + 1).padStart(2, '0')}
                                        </span>
                                        <div style={{ flex: 1 }}>
                                            <p className="text-white font-semibold text-sm mb-3">{qa.q}</p>
                                            <div className="p-3 rounded-lg" style={{ background: 'rgba(255,255,255,0.03)', borderLeft: `3px solid ${section.color}40` }}>
                                                <p className="text-gray-400 text-sm mb-0 leading-relaxed">{qa.a}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <div className="ql-card" style={{ marginBottom: '80px', background: 'linear-gradient(135deg, rgba(34,211,238,0.05), rgba(167,139,250,0.05))' }}>
                    <h3 className="text-center text-2xl mb-4">🏆 Certification Standard</h3>
                    <p className="text-center text-gray-400 mb-8">Answer all 100 questions fluently without referencing the page. That's when you're ready to represent QuantLab at a senior level.</p>
                    <div className="grid gap-4">
                        {[
                            { label: "Novice", score: "0–40 correct without notes", desc: "Return to Core Modules 01–05. Drill the scripts daily.", color: '#64748b' },
                            { label: "Developing", score: "41–65 correct without notes", desc: "Work through Bonus Modules A–E. Practice objections with a partner.", color: '#f59e0b' },
                            { label: "Competent", score: "66–80 correct without notes", desc: "You're ready for supervised discovery calls. Focus on Modules F–J.", color: '#22d3ee' },
                            { label: "Advanced", score: "81–94 correct without notes", desc: "Senior rep ready. Work on tonality, multi-threading, elite tactics.", color: '#a78bfa' },
                            { label: "Elite", score: "95–100 correct without notes", desc: "You are QuantLab certified. Build a system, teach others, compound.", color: '#22c55e' }
                        ].map((tier, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: `${tier.color}08`, border: `1px solid ${tier.color}25` }}>
                                <span className="font-bold text-sm flex-shrink-0 w-24" style={{ color: tier.color }}>{tier.label}</span>
                                <span className="text-gray-500 text-xs flex-shrink-0 w-48">{tier.score}</span>
                                <span className="text-gray-400 text-xs">{tier.desc}</span>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-xl mt-10 font-bold" style={{ background: 'linear-gradient(135deg, #22d3ee, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        The QuantLab Sales Partner Training System<br />
                        <span className="text-sm font-normal text-gray-500" style={{ WebkitTextFillColor: '#64748b' }}>CONFIDENTIAL & PROPRIETARY // THE QUANTLAB METHOD</span>
                    </p>
                </div>


            </main>
        </div>
    );
}
