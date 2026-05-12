"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Check, Loader2, AlertTriangle, Sparkles } from "lucide-react";

const BUILD_COST_PER_USER_LOW = 1800;
const BUILD_COST_PER_USER_HIGH = 3200;
const BUILD_FLOOR = 45000;
const ANNUAL_MAINTENANCE_RATE = 0.18;
const ANNUAL_HOSTING_FIXED = 4800;
const LICENSE_INFLATION = 0.09;
const PRODUCTIVITY_HOURLY_VALUE = 65;
const WORKING_WEEKS = 48;

interface CalculatorInputs {
    reps: number;
    avgDealSize: number;
    monthlyCrmCost: number;
    hoursPerWeekInCrm: number;
    leakagePct: number;
    closedWonPerRepPerYear: number;
}

interface CalculatorOutput {
    monthlySaasCost: number;
    annualSaasCost3yr: number;
    buildCostMid: number;
    customAmortizedMonthly: number;
    customAnnualOngoing: number;
    threeYearSaaSTotal: number;
    threeYearCustomTotal: number;
    threeYearSavings: number;
    paybackMonths: number | null;
    productivityHoursPerYear: number;
    productivityDollarsPerYear: number;
    recoveredRevenuePerYear: number;
    drivers: string[];
    recommendation: {
        path: "stay" | "audit" | "build" | "urgent";
        headline: string;
        body: string;
    };
}

const INITIAL_INPUTS: CalculatorInputs = {
    reps: 15,
    avgDealSize: 12000,
    monthlyCrmCost: 2400,
    hoursPerWeekInCrm: 9,
    leakagePct: 12,
    closedWonPerRepPerYear: 22,
};

function calculate(inputs: CalculatorInputs): CalculatorOutput {
    const drivers: string[] = [];

    const monthlySaasCost = inputs.monthlyCrmCost;
    const annualSaasYear1 = monthlySaasCost * 12;
    const annualSaasYear2 = annualSaasYear1 * (1 + LICENSE_INFLATION);
    const annualSaasYear3 = annualSaasYear2 * (1 + LICENSE_INFLATION);
    const threeYearSaaSTotal = annualSaasYear1 + annualSaasYear2 + annualSaasYear3;
    const annualSaasCost3yr = threeYearSaaSTotal / 3;

    const buildCostLow = Math.max(BUILD_FLOOR, inputs.reps * BUILD_COST_PER_USER_LOW);
    const buildCostHigh = Math.max(BUILD_FLOOR * 1.5, inputs.reps * BUILD_COST_PER_USER_HIGH);
    const buildCostMid = Math.round((buildCostLow + buildCostHigh) / 2);

    const annualMaintenance = buildCostMid * ANNUAL_MAINTENANCE_RATE;
    const customAnnualOngoing = annualMaintenance + ANNUAL_HOSTING_FIXED;
    const threeYearCustomTotal = buildCostMid + customAnnualOngoing * 3;
    const customAmortizedMonthly = (buildCostMid / 36) + (customAnnualOngoing / 12);

    const threeYearSavings = threeYearSaaSTotal - threeYearCustomTotal;

    const monthlyDeltaPositive = monthlySaasCost - (customAnnualOngoing / 12);
    let paybackMonths: number | null = null;
    if (monthlyDeltaPositive > 0) {
        paybackMonths = Math.ceil(buildCostMid / monthlyDeltaPositive);
    }

    const productivityHoursPerRep = Math.max(0, (inputs.hoursPerWeekInCrm - 3)) * WORKING_WEEKS * 0.5;
    const productivityHoursPerYear = Math.round(productivityHoursPerRep * inputs.reps);
    const productivityDollarsPerYear = productivityHoursPerYear * PRODUCTIVITY_HOURLY_VALUE;

    const annualRevenue = inputs.reps * inputs.closedWonPerRepPerYear * inputs.avgDealSize;
    const leakedRevenue = annualRevenue * (inputs.leakagePct / 100);
    const recoveredRevenuePerYear = leakedRevenue * 0.4;

    if (monthlySaasCost >= 2000) {
        drivers.push(`Current CRM spend of ${formatCurrency(monthlySaasCost)}/mo means license inflation of 9%/yr alone adds ~${formatCurrency(monthlySaasCost * 12 * 0.09)} to year 2.`);
    }
    if (inputs.hoursPerWeekInCrm >= 8) {
        drivers.push(`${inputs.hoursPerWeekInCrm} hrs/week in the CRM per rep is ~${Math.round(inputs.hoursPerWeekInCrm * WORKING_WEEKS)} hrs/yr of friction — half is fixable with a fit-to-purpose UI.`);
    }
    if (inputs.leakagePct >= 10) {
        drivers.push(`${inputs.leakagePct}% deal leakage on ${formatCurrency(annualRevenue)} of pipeline is ${formatCurrency(leakedRevenue)} walking out the door — better workflow recovers ~40% of it.`);
    }
    if (inputs.reps >= 25) {
        drivers.push(`${inputs.reps} seats at ${formatCurrency(monthlySaasCost / Math.max(1, inputs.reps))}/seat/mo crosses the breakeven where per-seat pricing stops scaling in your favor.`);
    }
    if (inputs.reps <= 8 && monthlySaasCost < 2000) {
        drivers.push(`Small team + modest CRM bill — the build/buy math is tight. Strategic fit usually decides this one, not raw TCO.`);
    }

    let recommendation: CalculatorOutput["recommendation"];
    if (threeYearSavings >= 80000 && paybackMonths !== null && paybackMonths <= 30) {
        recommendation = {
            path: "urgent",
            headline: "Strong case for a custom CRM — payback inside 30 months",
            body: "Your TCO delta is significant and payback lands inside a normal budget cycle. Most teams in this zone leave money on the table by renewing one more year out of inertia. Worth a 20-minute scoping call to validate the build cost against your actual workflow.",
        };
    } else if (threeYearSavings >= 30000) {
        recommendation = {
            path: "build",
            headline: "Custom CRM looks favorable",
            body: "Your 3-year savings comfortably cover a defensible build cost. The recovered productivity and leakage numbers usually tip this decision — they're worth more than the license-fee delta on their own. Validate the build scope before committing.",
        };
    } else if (threeYearSavings >= -20000) {
        recommendation = {
            path: "audit",
            headline: "Audit your current CRM before deciding",
            body: "Pure TCO is close to a wash. The decision is being made by softer factors — vendor lock-in, customization debt, workflow fit. A 1-hour CRM audit will tell you whether you're paying for capability you're not using vs. truly needing what the platform delivers.",
        };
    } else {
        recommendation = {
            path: "stay",
            headline: "Stay on your current CRM — for now",
            body: "Your seat count and CRM spend don't justify the upfront build right now. Revisit this when your seat count grows 30%, when license fees jump at renewal, or when your sales motion becomes uniquely yours.",
        };
    }

    return {
        monthlySaasCost,
        annualSaasCost3yr,
        buildCostMid,
        customAmortizedMonthly,
        customAnnualOngoing,
        threeYearSaaSTotal,
        threeYearCustomTotal,
        threeYearSavings,
        paybackMonths,
        productivityHoursPerYear,
        productivityDollarsPerYear,
        recoveredRevenuePerYear,
        drivers,
        recommendation,
    };
}

function formatCurrency(n: number): string {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export function CrmRoiCalculator() {
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
            source: "crm-roi-calculator",
            magnet: "crm-roi-calculator",
            drip: "D4",
            name: leadForm.name.trim(),
            email: leadForm.email.trim(),
            company: leadForm.company.trim(),
            calculatorInputs: inputs,
            calculatorResult: {
                threeYearSaaSTotal: result.threeYearSaaSTotal,
                threeYearCustomTotal: result.threeYearCustomTotal,
                threeYearSavings: result.threeYearSavings,
                paybackMonths: result.paybackMonths,
                buildCostMid: result.buildCostMid,
                recommendation: result.recommendation.path,
            },
        };

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (!res.ok) {
                console.log("[crm-roi-calculator] lead capture (stub):", payload);
            }
        } catch {
            console.log("[crm-roi-calculator] lead capture (stub, fetch failed):", payload);
        }

        setSubmitting(false);
        setSubmitted(true);
    }

    return (
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md p-6 md:p-10 shadow-[0_0_60px_rgba(56,189,248,0.05)]">
            <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 space-y-6">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                            Your current CRM picture
                        </h2>
                        <p className="text-sm text-gray-400">
                            Update any field — the 3-year TCO + ROI recalculates live.
                        </p>
                    </div>

                    <div>
                        <label htmlFor="reps" className="block text-sm font-medium text-gray-300 mb-2">
                            Number of CRM seats (sales + ops)
                        </label>
                        <input
                            id="reps"
                            type="number"
                            min={1}
                            max={5000}
                            value={inputs.reps}
                            onChange={(e) => update("reps", Math.max(1, Number(e.target.value) || 0))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="avgDealSize" className="block text-sm font-medium text-gray-300 mb-2">
                            Average deal size (USD)
                        </label>
                        <input
                            id="avgDealSize"
                            type="number"
                            min={0}
                            step={500}
                            value={inputs.avgDealSize}
                            onChange={(e) => update("avgDealSize", Math.max(0, Number(e.target.value) || 0))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="closedWon" className="block text-sm font-medium text-gray-300 mb-2">
                            Closed-won deals per rep per year
                        </label>
                        <input
                            id="closedWon"
                            type="number"
                            min={0}
                            step={1}
                            value={inputs.closedWonPerRepPerYear}
                            onChange={(e) => update("closedWonPerRepPerYear", Math.max(0, Number(e.target.value) || 0))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="monthlyCrmCost" className="block text-sm font-medium text-gray-300 mb-2">
                            Current total CRM bill per month (licenses + admins + consultants + integrations)
                        </label>
                        <input
                            id="monthlyCrmCost"
                            type="number"
                            min={0}
                            step={50}
                            value={inputs.monthlyCrmCost}
                            onChange={(e) => update("monthlyCrmCost", Math.max(0, Number(e.target.value) || 0))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="hoursPerWeek" className="block text-sm font-medium text-gray-300 mb-2">
                            Hours per week each rep spends inside the CRM
                        </label>
                        <input
                            id="hoursPerWeek"
                            type="number"
                            min={0}
                            max={40}
                            step={0.5}
                            value={inputs.hoursPerWeekInCrm}
                            onChange={(e) => update("hoursPerWeekInCrm", Math.max(0, Number(e.target.value) || 0))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>

                    <div>
                        <label htmlFor="leakage" className="block text-sm font-medium text-gray-300 mb-2">
                            Estimated % of deals that leak due to CRM friction (forgot to follow up, fell out of pipeline, lost handoff)
                        </label>
                        <input
                            id="leakage"
                            type="number"
                            min={0}
                            max={100}
                            step={1}
                            value={inputs.leakagePct}
                            onChange={(e) => update("leakagePct", Math.max(0, Math.min(100, Number(e.target.value) || 0)))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="lg:sticky lg:top-32 space-y-5">
                        <div className="rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-500/10 via-[#0d1526] to-emerald-500/5 p-6">
                            <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2">
                                3-Year TCO Delta
                            </p>
                            <p className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
                                {result.threeYearSavings >= 0 ? "+" : ""}{formatCurrency(result.threeYearSavings)}
                            </p>
                            <p className="text-sm text-gray-400 mb-4">
                                {result.threeYearSavings >= 0 ? "savings if you switch to custom" : "extra cost vs staying put"}
                            </p>
                            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Current SaaS (3yr)</p>
                                    <p className="text-base font-semibold text-white">{formatCurrency(result.threeYearSaaSTotal)}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Custom Build (3yr)</p>
                                    <p className="text-base font-semibold text-white">{formatCurrency(result.threeYearCustomTotal)}</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5 space-y-3">
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Build cost (mid)</span>
                                <span className="text-sm font-semibold text-white">{formatCurrency(result.buildCostMid)}</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Payback</span>
                                <span className="text-sm font-semibold text-white">
                                    {result.paybackMonths === null ? "N/A" : `${result.paybackMonths} months`}
                                </span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Hours saved / yr</span>
                                <span className="text-sm font-semibold text-white">{result.productivityHoursPerYear.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Productivity $ / yr</span>
                                <span className="text-sm font-semibold text-white">{formatCurrency(result.productivityDollarsPerYear)}</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Recovered revenue / yr</span>
                                <span className="text-sm font-semibold text-white">{formatCurrency(result.recoveredRevenuePerYear)}</span>
                            </div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5">
                            <div className="flex items-center gap-2 mb-3">
                                <Sparkles className="w-4 h-4 text-sky-400" />
                                <p className="text-sm font-semibold text-white">
                                    {result.recommendation.headline}
                                </p>
                            </div>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {result.recommendation.body}
                            </p>
                        </div>

                        {result.drivers.length > 0 && (
                            <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5">
                                <div className="flex items-center gap-2 mb-3">
                                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                                    <p className="text-sm font-semibold text-white">
                                        What&apos;s driving your number
                                    </p>
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
                            Want this as a CFO-ready PDF with the full 5-year model + boardroom slide?
                        </p>
                        <Button
                            variant="primary"
                            size="md"
                            onClick={() => setShowLeadForm(true)}
                            className="min-w-[260px]"
                        >
                            Send me the full CRM ROI PDF
                        </Button>
                    </div>
                )}

                {showLeadForm && !submitted && (
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                        <h3 className="text-lg font-semibold text-white mb-1 text-center">
                            Get the full ROI breakdown
                        </h3>
                        <p className="text-sm text-gray-400 mb-5 text-center">
                            Three fields. Single confirmed opt-in. No BDR farm — you&apos;ll hear from William directly.
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
                                    "Send me the breakdown"
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
                            For RevOps leaders, not vendor blast lists. Unsubscribe in one click.
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
                            The full PDF breakdown (with the boardroom slide template) is on its way. Reply to the first email if you want William to walk through your specific number on a 20-minute call.
                        </p>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center min-h-[44px] px-6 rounded-full bg-sky-500 hover:bg-sky-400 text-white text-sm font-medium transition-colors"
                        >
                            Book the 20-minute CRM call
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
}
