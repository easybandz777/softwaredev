import React from "react";

export default function Module3() {
    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Module 03</span>
                <h2 className="ql-module-title">Discovery & Qualification</h2>
            </div>

            <p className="mb-8">Discovery is where the sale is won or lost. If you do this right, they will sell themselves. We use a modified <strong>SPIN</strong> (Situation, Problem, Implication, Need-Payoff) framework — then qualify their budget before you ever pitch.</p>

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
                    <li>What&rsquo;s the biggest bottleneck stopping you from doubling your volume right now?</li>
                </ul>
            </div>

            <div className="ql-card">
                <h3>3. The Implication (Twisting the Knife)</h3>
                <p>They know they have a problem. Now you must make them realize how much it&rsquo;s costing them.</p>
                <ul className="ql-question-list mt-4">
                    <li>If your team is spending 15 hours a week doing manual data entry... what is that costing you in payroll every month?</li>
                    <li>When a high-ticket client sees your current site and goes with a competitor, how much revenue did you just lose?</li>
                    <li>How long can you sustain this manual process before the team burns out?</li>
                </ul>
            </div>

            <div className="ql-card">
                <h3>4. The Need-Payoff (Making Them Sell Themselves)</h3>
                <p>Get the prospect to articulate the value of solving the problem in their own words. This is where they begin to close themselves.</p>
                <ul className="ql-question-list mt-4">
                    <li>If we could completely automate that intake process, how much would that free your team up?</li>
                    <li>What would it mean for your business if leads were responded to in under 60 seconds instead of 6 hours?</li>
                    <li>If that bottleneck was gone tomorrow, where would you focus that freed-up energy?</li>
                </ul>
            </div>

            <div className="ql-card">
                <h3>5. Qualifying Budget (Without Being Awkward)</h3>
                <p>Before you pitch, establish the Cost of Inaction (COI). Once they agree to those numbers, your investment figure looks incredibly reasonable.</p>
                <div className="ql-script-box">
                    &ldquo;You mentioned you&rsquo;re losing about 2 deals a month because your lead process is slow. What&rsquo;s your average client worth? $5,000? So this broken process is literally costing you $10,000 every single month. Does that sound right?&rdquo;
                </div>
                <p className="mt-4">Then anchor to your range:</p>
                <div className="ql-script-box">
                    &ldquo;To build out the type of automated system we&rsquo;re talking about, our typical engagements range from $3,000 to $10,000 depending on scope, plus ongoing support. Is that completely out of the realm of reality for you right now?&rdquo;
                </div>
                <p className="text-gray-500 text-sm mt-3">If they balk, down-sell to a smaller phase. If they don&rsquo;t blink, you know you have room to build something incredible.</p>
            </div>

            <div className="ql-tip-box">
                <h4>💡 The Golden Rule of Discovery</h4>
                <p className="mb-0">Do not introduce QuantLab&rsquo;s solution until the prospect has identified their own pain, quantified what it costs them, and expressed what solving it would mean to their business&mdash;all in their own words, without you pitching. The prospect must be asking &ldquo;how can you fix this?&rdquo; before you answer.</p>
            </div>
        </div>
    );
}
