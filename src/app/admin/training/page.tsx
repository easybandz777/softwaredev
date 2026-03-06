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

                </div>
            </main>
        </div>
    );
}
