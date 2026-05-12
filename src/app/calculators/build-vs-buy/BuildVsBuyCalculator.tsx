"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Check, Loader2, AlertTriangle, Sparkles } from "lucide-react";

const SAAS_INFLATION = 0.09;
const CUSTOM_MAINTENANCE_RATE = 0.18;
const CUSTOM_HOSTING_FIXED = 6000;
const BUILD_COST_PER_INTEGRATION = 9000;
const BUILD_COST_PER_BLOCKED_FEATURE = 7500;
const BUILD_FLOOR = 35000;
const PER_USER_BASELINE = 1500;

type Sensitivity = "low" | "med" | "high";

interface CalculatorInputs {
    users: number;
    saasCostPerUserPerMo: number;
    integrationsNeeded: number;
    blockedFeatures: number;
    dataSensitivity: Sensitivity;
    teamSizeAdjacent: number;
}

interface CalculatorOutput {
    saasYear1: number;
    saas3yr: number;
    buildCostLow: number;
    buildCostMid: number;
    buildCostHigh: number;
    customAnnualOngoing: number;
    custom3yr: number;
    threeYearDelta: number;
    score: number;
    bucket: "buy" | "lean_buy" | "consider" | "lean_build" | "build";
    drivers: string[];
    recommendation: {
        headline: string;
        body: string;
    };
}

const INITIAL_INPUTS: CalculatorInputs = {
    users: 40,
    saasCostPerUserPerMo: 75,
    integrationsNeeded: 3,
    blockedFeatures: 4,
    dataSensitivity: "med",
    teamSizeAdjacent: 20,
};

function calculate(inputs: CalculatorInputs): CalculatorOutput {
    const drivers: string[] = [];

    const monthlySaas = inputs.users * inputs.saasCostPerUserPerMo;
    const saasYear1 = monthlySaas * 12;
    const saasYear2 = saasYear1 * (1 + SAAS_INFLATION);
    const saasYear3 = saasYear2 * (1 + SAAS_INFLATION);
    const saas3yr = saasYear1 + saasYear2 + saasYear3;

    const buildBase = Math.max(BUILD_FLOOR, inputs.users * PER_USER_BASELINE);
    const integrationCost = inputs.integrationsNeeded * BUILD_COST_PER_INTEGRATION;
    const blockedFeatureCost = inputs.blockedFeatures * BUILD_COST_PER_BLOCKED_FEATURE;

    let sensitivityMultiplier = 1;
    if (inputs.dataSensitivity === "med") {
        sensitivityMultiplier = 1.1;
    } else if (inputs.dataSensitivity === "high") {
        sensitivityMultiplier = 1.25;
    }

    const buildCostMid = Math.round((buildBase + integrationCost + blockedFeatureCost) * sensitivityMultiplier);
    const buildCostLow = Math.round(buildCostMid * 0.8);
    const buildCostHigh = Math.round(buildCostMid * 1.3);

    const customAnnualOngoing = buildCostMid * CUSTOM_MAINTENANCE_RATE + CUSTOM_HOSTING_FIXED;
    const custom3yr = buildCostMid + customAnnualOngoing * 3;

    const threeYearDelta = saas3yr - custom3yr;

    let score = 50;

    if (monthlySaas >= 5000) {
        score += 12;
        drivers.push(`SaaS spend of ${formatCurrency(monthlySaas)}/mo crosses the threshold where build economics start working (+12 build points)`);
    } else if (monthlySaas >= 2500) {
        score += 6;
    } else if (monthlySaas < 1000) {
        score -= 10;
        drivers.push("SaaS spend under $1,000/mo rarely justifies a build (-10 build points)");
    }

    if (inputs.integrationsNeeded >= 4) {
        score += 12;
        drivers.push(`${inputs.integrationsNeeded} integrations needed = SaaS connectors get expensive fast (+12 build points)`);
    } else if (inputs.integrationsNeeded >= 2) {
        score += 5;
    } else if (inputs.integrationsNeeded === 0) {
        score -= 5;
    }

    if (inputs.blockedFeatures >= 5) {
        score += 18;
        drivers.push(`${inputs.blockedFeatures} workflow features the SaaS can't deliver = a build is now mandatory, not optional (+18 build points)`);
    } else if (inputs.blockedFeatures >= 3) {
        score += 10;
        drivers.push(`${inputs.blockedFeatures} blocked features means you're already paying for customization that doesn't quite fit (+10 build points)`);
    } else if (inputs.blockedFeatures === 0) {
        score -= 8;
        drivers.push("No blocked features means the SaaS is actually serving your workflow (-8 build points)");
    }

    if (inputs.dataSensitivity === "high") {
        score += 10;
        drivers.push("High data sensitivity (regulated PII/PHI/financial) favors building so you own the data plane (+10 build points)");
    } else if (inputs.dataSensitivity === "med") {
        score += 3;
    } else {
        score -= 3;
    }

    if (inputs.teamSizeAdjacent >= 50) {
        score += 8;
        drivers.push(`${inputs.teamSizeAdjacent} people touch this tool — a fit-to-purpose build pays back across the team fast (+8 build points)`);
    } else if (inputs.teamSizeAdjacent >= 20) {
        score += 3;
    } else if (inputs.teamSizeAdjacent < 5) {
        score -= 8;
        drivers.push("Small team adjacent to this tool — build payback is harder to justify (-8 build points)");
    }

    if (threeYearDelta >= 80000) {
        score += 10;
        drivers.push(`3-year TCO favors a build by ${formatCurrency(threeYearDelta)} (+10 build points)`);
    } else if (threeYearDelta >= 20000) {
        score += 4;
    } else if (threeYearDelta <= -20000) {
        score -= 10;
        drivers.push(`3-year TCO favors staying on SaaS by ${formatCurrency(-threeYearDelta)} (-10 build points)`);
    }

    score = Math.max(0, Math.min(100, Math.round(score)));

    let bucket: CalculatorOutput["bucket"];
    let recommendation: CalculatorOutput["recommendation"];

    if (score >= 80) {
        bucket = "build";
        recommendation = {
            headline: "Build — this is a clear custom-software case",
            body: "You have the volume, the workflow uniqueness, the integration complexity, and the data sensitivity profile where staying on SaaS is the more expensive long-term path. The numbers and the strategic factors both line up. Worth scoping the build now to capture year-1 and year-2 savings.",
        };
    } else if (score >= 65) {
        bucket = "lean_build";
        recommendation = {
            headline: "Lean build — strong case with one or two caveats",
            body: "The case for building is solid but you have a few factors holding the score down. The most common cause is a small adjacent team or a moderate SaaS bill — both fixable as your usage grows. Move forward with a build scope but lock in the integration list and the workflow features that aren't negotiable.",
        };
    } else if (score >= 40) {
        bucket = "consider";
        recommendation = {
            headline: "Hybrid territory — consider a build-on-top approach",
            body: "Your situation is in the middle. The right move here is usually a hybrid: keep the SaaS for the commoditized parts (auth, basic CRUD), build the 2-3 workflow features that are uniquely yours on top of it. We do this kind of integration build for teams that aren't ready for a full replacement but need to escape customization debt.",
        };
    } else if (score >= 25) {
        bucket = "lean_buy";
        recommendation = {
            headline: "Lean buy — but audit your current SaaS",
            body: "The math doesn't support a full custom build right now. But a score in this range usually means you're paying for capability you're not using or you've never benchmarked alternatives. A 1-hour audit of your current SaaS contract and feature usage usually finds 15-30% of the bill that can be optimized away.",
        };
    } else {
        bucket = "buy";
        recommendation = {
            headline: "Buy — stay on the SaaS",
            body: "Your team size, SaaS spend, and workflow uniqueness don't justify the upfront cost of a custom build right now. Revisit this calculator if your team doubles, if your SaaS bill jumps 20%+ at renewal, or if a critical workflow feature gets blocked by the platform.",
        };
    }

    return {
        saasYear1,
        saas3yr,
        buildCostLow,
        buildCostMid,
        buildCostHigh,
        customAnnualOngoing,
        custom3yr,
        threeYearDelta,
        score,
        bucket,
        drivers,
        recommendation,
    };
}

function formatCurrency(n: number): string {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function scoreColor(score: number): string {
    if (score >= 80) return "text-emerald-400";
    if (score >= 65) return "text-sky-400";
    if (score >= 40) return "text-amber-400";
    if (score >= 25) return "text-orange-400";
    return "text-rose-400";
}

function scoreLabel(bucket: CalculatorOutput["bucket"]): string {
    switch (bucket) {
        case "build": return "BUILD";
        case "lean_build": return "LEAN BUILD";
        case "consider": return "HYBRID";
        case "lean_buy": return "LEAN BUY";
        case "buy": return "BUY";
    }
}

export function BuildVsBuyCalculator() {
    const [inputs, setInputs] = useState<CalculatorInputs>(INITIAL_INPUTS);
    const [showLeadForm, setShowLeadForm] = useState(false);
    const [leadForm, setLeadForm] = useState({ name: "", email: "", company: "" });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);

    const result = useMemo(() => calculate(inputs), [inputs]);

    function update<K extends keyof CalculatorInputs>(key: K, value: CalculatorInputs[K]) {
        setInputs((prev) => ({ ...prev, [key]: value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setFormError(null);

        if (!leadForm.name.trim() || !leadForm.email.trim() || !leadForm.company.trim()) {
            setFormError("Name, work email, and company are all required.");
            return;
        }

        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(leadForm.email.trim())) {
            setFormError("Please enter a valid work email.");
            return;
        }

        setSubmitting(true);

        const payload = {
            source: "build-vs-buy-calculator",
            magnet: "build-vs-buy-calculator",
            drip: "D1",
            name: leadForm.name.trim(),
            email: leadForm.email.trim(),
            company: leadForm.company.trim(),
            calculatorInputs: inputs,
            calculatorResult: {
                saas3yr: result.saas3yr,
                custom3yr: result.custom3yr,
                threeYearDelta: result.threeYearDelta,
                score: result.score,
                bucket: result.bucket,
                buildCostMid: result.buildCostMid,
            },
        };

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (!res.ok) {
                console.log("[build-vs-buy-calculator] lead capture (stub):", payload);
            }
        } catch {
            console.log("[build-vs-buy-calculator] lead capture (stub, fetch failed):", payload);
        }

        setSubmitting(false);
        setSubmitted(true);
    }

    return (
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md p-6 md:p-10 shadow-[0_0_60px_rgba(56,189,248,0.05)]">
            <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 space-y-6">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-1">Your situation</h2>
                        <p className="text-sm text-gray-400">Update any field — the score and 3-year TCO recalculate live.</p>
                    </div>

                    <div>
                        <label htmlFor="users" className="block text-sm font-medium text-gray-300 mb-2">
                            Number of active users / seats on the SaaS
                        </label>
                        <input
                            id="users"
                            type="number"
                            min={1}
                            value={inputs.users}
                            onChange={(e) => update("users", Math.max(1, Number(e.target.value) || 0))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="saasCost" className="block text-sm font-medium text-gray-300 mb-2">
                            Average SaaS cost per user per month (USD)
                        </label>
                        <input
                            id="saasCost"
                            type="number"
                            min={0}
                            step={5}
                            value={inputs.saasCostPerUserPerMo}
                            onChange={(e) => update("saasCostPerUserPerMo", Math.max(0, Number(e.target.value) || 0))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="integrations" className="block text-sm font-medium text-gray-300 mb-2">
                            Integrations needed (other systems this tool must talk to)
                        </label>
                        <input
                            id="integrations"
                            type="number"
                            min={0}
                            max={30}
                            value={inputs.integrationsNeeded}
                            onChange={(e) => update("integrationsNeeded", Math.max(0, Number(e.target.value) || 0))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="blocked" className="block text-sm font-medium text-gray-300 mb-2">
                            Workflow features the SaaS can&apos;t deliver (count)
                        </label>
                        <input
                            id="blocked"
                            type="number"
                            min={0}
                            max={30}
                            value={inputs.blockedFeatures}
                            onChange={(e) => update("blockedFeatures", Math.max(0, Number(e.target.value) || 0))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                        <p className="mt-1 text-xs text-gray-500">Features you&apos;ve already asked for that the platform won&apos;t build.</p>
                    </div>

                    <div>
                        <label htmlFor="sensitivity" className="block text-sm font-medium text-gray-300 mb-2">Data sensitivity</label>
                        <select
                            id="sensitivity"
                            value={inputs.dataSensitivity}
                            onChange={(e) => update("dataSensitivity", e.target.value as Sensitivity)}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        >
                            <option value="low">Low (public-ish, no regulated data)</option>
                            <option value="med">Medium (internal business data, some PII)</option>
                            <option value="high">High (regulated — PHI, PCI, financial)</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="adjacent" className="block text-sm font-medium text-gray-300 mb-2">
                            Total team size adjacent to this tool (users + ops + adjacent)
                        </label>
                        <input
                            id="adjacent"
                            type="number"
                            min={1}
                            value={inputs.teamSizeAdjacent}
                            onChange={(e) => update("teamSizeAdjacent", Math.max(1, Number(e.target.value) || 0))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="lg:sticky lg:top-32 space-y-5">
                        <div className="rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-500/10 via-[#0d1526] to-emerald-500/5 p-6">
                            <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2">Decision Score</p>
                            <div className="flex items-baseline gap-3 mb-2">
                                <p className={`text-5xl md:text-6xl font-bold leading-none ${scoreColor(result.score)}`}>
                                    {result.score}
                                </p>
                                <p className="text-sm text-gray-400">/ 100</p>
                            </div>
                            <p className={`text-xs uppercase tracking-widest font-semibold ${scoreColor(result.score)}`}>
                                {scoreLabel(result.bucket)}
                            </p>
                            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                                Higher = build. Lower = buy. Sweet spot for hybrid is 40-65.
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5 space-y-3">
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">SaaS year 1</span>
                                <span className="text-sm font-semibold text-white">{formatCurrency(result.saasYear1)}</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">SaaS 3-yr TCO</span>
                                <span className="text-sm font-semibold text-white">{formatCurrency(result.saas3yr)}</span>
                            </div>
                            <div className="flex justify-between items-baseline pt-2 border-t border-white/5">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Build cost (mid)</span>
                                <span className="text-sm font-semibold text-white">{formatCurrency(result.buildCostMid)}</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Custom 3-yr TCO</span>
                                <span className="text-sm font-semibold text-white">{formatCurrency(result.custom3yr)}</span>
                            </div>
                            <div className="flex justify-between items-baseline pt-2 border-t border-white/5">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">3-yr delta</span>
                                <span className={`text-sm font-semibold ${result.threeYearDelta >= 0 ? "text-emerald-400" : "text-rose-400"}`}>
                                    {result.threeYearDelta >= 0 ? "+" : ""}{formatCurrency(result.threeYearDelta)}
                                </span>
                            </div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5">
                            <div className="flex items-center gap-2 mb-3">
                                <Sparkles className="w-4 h-4 text-sky-400" />
                                <p className="text-sm font-semibold text-white">{result.recommendation.headline}</p>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">{result.recommendation.body}</p>
                        </div>

                        {result.drivers.length > 0 && (
                            <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                                    <p className="text-sm font-semibold text-white">What&apos;s moving your score</p>
                                </div>
                                <ul className="space-y-2">
                                    {result.drivers.map((d) => (
                                        <li key={d} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                                            <span className="text-sky-400 flex-shrink-0">•</span>
                                            <span>{d}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/5">
                {!showLeadForm && !submitted && (
                    <div className="text-center">
                        <p className="text-gray-400 text-sm mb-4">
                            Want the full PDF decision guide + CFO-ready memo template?
                        </p>
                        <Button
                            variant="primary"
                            size="md"
                            onClick={() => setShowLeadForm(true)}
                            className="min-w-[260px]"
                        >
                            Send me the decision guide
                        </Button>
                    </div>
                )}

                {showLeadForm && !submitted && (
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                        <h3 className="text-lg font-semibold text-white mb-1 text-center">Get the decision guide</h3>
                        <p className="text-sm text-gray-400 mb-5 text-center">
                            Three fields. Single confirmed opt-in. No vendor blast — William reads every reply.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="sm:col-span-1">
                                <label htmlFor="lead-name" className="block text-xs font-medium text-gray-400 mb-1.5">Name</label>
                                <input
                                    id="lead-name"
                                    type="text"
                                    autoComplete="name"
                                    value={leadForm.name}
                                    onChange={(e) => setLeadForm((p) => ({ ...p, name: e.target.value }))}
                                    className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-1">
                                <label htmlFor="lead-email" className="block text-xs font-medium text-gray-400 mb-1.5">Work email</label>
                                <input
                                    id="lead-email"
                                    type="email"
                                    autoComplete="email"
                                    value={leadForm.email}
                                    onChange={(e) => setLeadForm((p) => ({ ...p, email: e.target.value }))}
                                    className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="lead-company" className="block text-xs font-medium text-gray-400 mb-1.5">Company</label>
                                <input
                                    id="lead-company"
                                    type="text"
                                    autoComplete="organization"
                                    value={leadForm.company}
                                    onChange={(e) => setLeadForm((p) => ({ ...p, company: e.target.value }))}
                                    className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                    required
                                />
                            </div>
                        </div>
                        {formError && (
                            <p className="mt-3 text-sm text-rose-400" role="alert">{formError}</p>
                        )}
                        <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center items-center">
                            <Button type="submit" variant="primary" size="md" disabled={submitting} className="min-w-[200px]">
                                {submitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send me the guide"
                                )}
                            </Button>
                            <button
                                type="button"
                                onClick={() => setShowLeadForm(false)}
                                className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
                            >
                                Never mind
                            </button>
                        </div>
                        <p className="mt-4 text-xs text-gray-600 text-center leading-relaxed">
                            Built for ops leaders, not list rentals. Unsubscribe in one click.
                        </p>
                    </form>
                )}

                {submitted && (
                    <div className="max-w-xl mx-auto rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-6 text-center" role="status" aria-live="polite">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-400/15 mb-4">
                            <Check className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                            You&apos;re on the list — check {leadForm.email}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed mb-5">
                            The full PDF decision guide (with the CFO memo template) is on its way. Reply to the first email if you want William to pressure-test your specific score on a 20-minute call.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium transition-colors"
                        >
                            Book the 20-minute decision call
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
