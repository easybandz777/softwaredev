import React from "react";

export default function Module3() {
    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Module 03</span>
                <h2 className="ql-module-title">Discovery: Identifying Needs</h2>
            </div>

            <p className="mb-8">Discovery is where the sale is won or lost. If you do this right, they will sell themselves. We use a modified <strong>SPIN</strong> (Situation, Problem, Implication, Need-Payoff) framework.</p>

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

            <div className="ql-tip-box">
                <h4>💡 The Golden Rule of Discovery</h4>
                <p className="mb-0">Do not introduce QuantLab&rsquo;s solution until the prospect has identified their own pain, quantified what it costs them, and expressed what solving it would mean to their business&mdash;all in their own words, without you pitching. The prospect must be asking &ldquo;how can you fix this?&rdquo; before you answer.</p>
            </div>
        </div>
    );
}
