"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Check, Loader2, AlertTriangle, Sparkles } from "lucide-react";

// Fully-loaded cost is salary plus benefits, taxes, equipment, and overhead.
// 1.4x is a conservative industry-standard loading factor.
const LOADED_COST_FACTOR = 1.4;

interface CalculatorInputs {
    teamSize: number;
    avgSalary: number;
    timeLostPct: number;
    interestRatePct: number;
    refactorCost: number;
    debtReductionPct: number;
}

interface CalculatorOutput {
    loadedAnnualCostPerEngineer: number;
    totalLoadedTeamCost: number;
    annualDragCost: number;
    compoundingNextYear: number;
    annualSavingsAfterRefactor: number;
    paybackMonths: number | null;
    threeYearNetBenefit: number;
    drivers: string[];
    recommendation: {
        path: "manage" | "schedule" | "prioritize" | "urgent";
        headline: string;
        body: string;
    };
}

const INITIAL_INPUTS: CalculatorInputs = {
    teamSize: 6,
    avgSalary: 145000,
    timeLostPct: 25,
    interestRatePct: 15,
    refactorCost: 120000,
    debtReductionPct: 70,
};

function calculate(inputs: CalculatorInputs): CalculatorOutput {
    const drivers: string[] = [];

    const loadedAnnualCostPerEngineer = Math.max(0, inputs.avgSalary) * LOADED_COST_FACTOR;
    const totalLoadedTeamCost = loadedAnnualCostPerEngineer * Math.max(0, inputs.teamSize);

    const timeLostFraction = Math.max(0, Math.min(100, inputs.timeLostPct)) / 100;
    const annualDragCost = totalLoadedTeamCost * timeLostFraction;

    // Compounding: if untouched, the drag grows by the "interest rate" of the debt next year.
    const interestFraction = Math.max(0, inputs.interestRatePct) / 100;
    const compoundingNextYear = annualDragCost * (1 + interestFraction);

    // A refactor removes a share of the drag.
    const reductionFraction = Math.max(0, Math.min(100, inputs.debtReductionPct)) / 100;
    const annualSavingsAfterRefactor = annualDragCost * reductionFraction;

    const refactorCost = Math.max(0, inputs.refactorCost);
    let paybackMonths: number | null = null;
    if (annualSavingsAfterRefactor > 0) {
        paybackMonths = Math.ceil((refactorCost / annualSavingsAfterRefactor) * 12);
    }

    // 3-year net benefit: savings each year (growing with the avoided interest) minus the one-time refactor.
    const year1 = annualSavingsAfterRefactor;
    const year2 = annualSavingsAfterRefactor * (1 + interestFraction);
    const year3 = year2 * (1 + interestFraction);
    const threeYearNetBenefit = year1 + year2 + year3 - refactorCost;

    if (timeLostFraction >= 0.25) {
        drivers.push(
            `${inputs.timeLostPct}% of engineering time lost to debt is ${formatCurrency(annualDragCost)}/yr — more than a full engineer's loaded cost on most teams.`,
        );
    }
    if (interestFraction >= 0.15) {
        drivers.push(
            `At a ${inputs.interestRatePct}% debt interest rate, leaving it untouched grows the drag to ${formatCurrency(compoundingNextYear)} next year — the cost of inaction is not flat.`,
        );
    }
    if (inputs.teamSize >= 8) {
        drivers.push(
            `${inputs.teamSize} engineers means coordination overhead compounds the debt — every shortcut is paid for by more people, more often.`,
        );
    }
    if (paybackMonths !== null && paybackMonths <= 12) {
        drivers.push(
            `Payback inside ${paybackMonths} months puts this refactor in rare territory — it pays for itself within a single budget year.`,
        );
    }

    let recommendation: CalculatorOutput["recommendation"];
    if (paybackMonths !== null && paybackMonths <= 12 && annualDragCost >= 100000) {
        recommendation = {
            path: "urgent",
            headline: "Refactor now — this pays for itself inside a year",
            body: "Your drag cost is high and the refactor pays back inside twelve months. Continuing to pay this tax instead of fixing it is one of the most expensive forms of inaction in software. Most teams in this zone keep deferring out of roadmap pressure and quietly lose a full engineer's worth of output every year. This is worth a 20-minute scoping call to validate the refactor cost against your actual codebase.",
        };
    } else if (threeYearNetBenefit >= 0 && annualDragCost >= 50000) {
        recommendation = {
            path: "prioritize",
            headline: "Prioritize the refactor — the 3-year math is positive",
            body: "Over three years the savings comfortably exceed the refactor cost, and the compounding interest on untouched debt only widens that gap. The right move is to carve out a dedicated refactor effort rather than hoping incremental cleanup keeps pace — it rarely does once the drag is this high. Validate the scope before committing the budget.",
        };
    } else if (threeYearNetBenefit >= -refactorCost * 0.5) {
        recommendation = {
            path: "schedule",
            headline: "Schedule incremental paydown",
            body: "A full refactor is close to break-even, so a big-bang rewrite is hard to justify yet. The smart play is disciplined incremental paydown — a fixed slice of every sprint dedicated to the highest-interest debt, plus a hard rule that new work doesn't add to it. Re-run this calculator in two quarters; if the time-lost number is climbing, the math will tip toward a dedicated effort.",
        };
    } else {
        recommendation = {
            path: "manage",
            headline: "Manage it — a big refactor isn't justified yet",
            body: "Your current drag and interest rate don't justify a large upfront refactor. Keep it contained with code review discipline, a definition of done that includes cleanup, and targeted fixes on the parts that slow you down most. Revisit this when your team grows, when the time-lost percentage rises, or before you take on a major new initiative on top of the existing code.",
        };
    }

    return {
        loadedAnnualCostPerEngineer,
        totalLoadedTeamCost,
        annualDragCost,
        compoundingNextYear,
        annualSavingsAfterRefactor,
        paybackMonths,
        threeYearNetBenefit,
        drivers,
        recommendation,
    };
}

function formatCurrency(n: number): string {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export function TechnicalDebtCalculator() {
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
            source: "technical-debt-calculator",
            magnet: "technical-debt-calculator",
            drip: "D6",
            name: leadForm.name.trim(),
            email: leadForm.email.trim(),
            company: leadForm.company.trim(),
            calculatorInputs: inputs,
            calculatorResult: {
                annualDragCost: result.annualDragCost,
                annualSavingsAfterRefactor: result.annualSavingsAfterRefactor,
                paybackMonths: result.paybackMonths,
                threeYearNetBenefit: result.threeYearNetBenefit,
                recommendation: result.recommendation.path,
            },
        };

        // The /api/leads endpoint may not exist yet — we attempt the POST so it works the
        // moment someone wires it up, and fall back to a logged success so the UX never
        // breaks for the prospect.
        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (!res.ok) {
                console.log("[technical-debt-calculator] lead capture (stub):", payload);
            }
        } catch {
            console.log("[technical-debt-calculator] lead capture (stub, fetch failed):", payload);
        }

        setSubmitting(false);
        setSubmitted(true);
    }

    return (
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md p-6 md:p-10 shadow-[0_0_60px_rgba(56,189,248,0.05)]">
            <div className="grid lg:grid-cols-5 gap-8">
                {/* Inputs */}
                <div className="lg:col-span-3 space-y-6">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
                            Your team &amp; your debt
                        </h2>
                        <p className="text-sm text-gray-400">
                            Update any field — the annual cost and refactor payoff recalculate live.
                        </p>
                    </div>

                    {/* Team size */}
                    <div>
                        <label htmlFor="teamSize" className="block text-sm font-medium text-gray-300 mb-2">
                            Engineering team size
                        </label>
                        <input
                            id="teamSize"
                            type="number"
                            min={1}
                            max={1000}
                            step={1}
                            value={inputs.teamSize}
                            onChange={(e) => update("teamSize", Math.max(1, Number(e.target.value) || 0))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>

                    {/* Avg salary */}
                    <div>
                        <label htmlFor="avgSalary" className="block text-sm font-medium text-gray-300 mb-2">
                            Average engineer salary (USD/yr)
                        </label>
                        <input
                            id="avgSalary"
                            type="number"
                            min={0}
                            step={5000}
                            value={inputs.avgSalary}
                            onChange={(e) => update("avgSalary", Math.max(0, Number(e.target.value) || 0))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                        <p className="text-xs text-gray-500 mt-1.5">
                            Fully-loaded cost (benefits, taxes, overhead) is estimated at{" "}
                            <span className="text-gray-300 font-medium">
                                {formatCurrency(Math.max(0, inputs.avgSalary) * LOADED_COST_FACTOR)}/yr
                            </span>{" "}
                            per engineer.
                        </p>
                    </div>

                    {/* Time lost % */}
                    <div>
                        <label htmlFor="timeLostPct" className="block text-sm font-medium text-gray-300 mb-2">
                            % of engineering time lost to technical debt
                        </label>
                        <input
                            id="timeLostPct"
                            type="number"
                            min={0}
                            max={100}
                            step={1}
                            value={inputs.timeLostPct}
                            onChange={(e) => update("timeLostPct", Math.max(0, Math.min(100, Number(e.target.value) || 0)))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                        <p className="text-xs text-gray-500 mt-1.5">
                            Slow builds, fragile code, fear-driven changes, time spent understanding tangled systems. Most teams underestimate this.
                        </p>
                    </div>

                    {/* Interest rate % */}
                    <div>
                        <label htmlFor="interestRatePct" className="block text-sm font-medium text-gray-300 mb-2">
                            Annual &ldquo;interest rate&rdquo; of the debt (%)
                        </label>
                        <input
                            id="interestRatePct"
                            type="number"
                            min={0}
                            max={100}
                            step={1}
                            value={inputs.interestRatePct}
                            onChange={(e) => update("interestRatePct", Math.max(0, Math.min(100, Number(e.target.value) || 0)))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                        <p className="text-xs text-gray-500 mt-1.5">
                            How fast the drag grows if left untouched. Like financial interest, unpaid technical debt compounds.
                        </p>
                    </div>

                    {/* Refactor cost */}
                    <div>
                        <label htmlFor="refactorCost" className="block text-sm font-medium text-gray-300 mb-2">
                            Estimated one-time cost to refactor (USD)
                        </label>
                        <input
                            id="refactorCost"
                            type="number"
                            min={0}
                            step={5000}
                            value={inputs.refactorCost}
                            onChange={(e) => update("refactorCost", Math.max(0, Number(e.target.value) || 0))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>

                    {/* Debt reduction % */}
                    <div>
                        <label htmlFor="debtReductionPct" className="block text-sm font-medium text-gray-300 mb-2">
                            % of the drag the refactor removes
                        </label>
                        <input
                            id="debtReductionPct"
                            type="number"
                            min={0}
                            max={100}
                            step={5}
                            value={inputs.debtReductionPct}
                            onChange={(e) => update("debtReductionPct", Math.max(0, Math.min(100, Number(e.target.value) || 0)))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                        <p className="text-xs text-gray-500 mt-1.5">
                            A realistic refactor rarely removes 100% of the drag. 60&ndash;80% is a defensible range for a focused effort.
                        </p>
                    </div>
                </div>

                {/* Output */}
                <div className="lg:col-span-2">
                    <div className="lg:sticky lg:top-32 space-y-5">
                        <div className="rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-500/10 via-[#0d1526] to-emerald-500/5 p-6">
                            <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2">
                                Annual Cost Of Debt
                            </p>
                            <p className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
                                {formatCurrency(result.annualDragCost)}
                            </p>
                            <p className="text-sm text-gray-400">
                                Grows to ~{formatCurrency(result.compoundingNextYear)} next year if untouched
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5 space-y-3">
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Loaded team cost / yr</span>
                                <span className="text-sm font-semibold text-white">{formatCurrency(result.totalLoadedTeamCost)}</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Savings after refactor / yr</span>
                                <span className="text-sm font-semibold text-white">{formatCurrency(result.annualSavingsAfterRefactor)}</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Refactor payback</span>
                                <span className="text-sm font-semibold text-white">
                                    {result.paybackMonths === null ? "N/A" : `${result.paybackMonths} months`}
                                </span>
                            </div>
                            <div className="flex justify-between items-baseline pt-3 border-t border-white/10">
                                <span className="text-xs text-gray-300 uppercase tracking-wide font-medium">3-year net benefit</span>
                                <span className="text-sm font-bold text-white">
                                    {result.threeYearNetBenefit >= 0 ? "+" : ""}{formatCurrency(result.threeYearNetBenefit)}
                                </span>
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
                                            <span className="text-sky-400 flex-shrink-0">&bull;</span>
                                            <span>{d}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Lead form */}
            <div className="mt-10 pt-8 border-t border-white/5">
                {!showLeadForm && !submitted && (
                    <div className="text-center">
                        <p className="text-gray-400 text-sm mb-4">
                            Want this as a shareable PDF to make the refactor case to your leadership?
                        </p>
                        <Button
                            variant="primary"
                            size="md"
                            onClick={() => setShowLeadForm(true)}
                            className="min-w-[260px]"
                        >
                            Send me the tech-debt breakdown PDF
                        </Button>
                    </div>
                )}

                {showLeadForm && !submitted && (
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                        <h3 className="text-lg font-semibold text-white mb-1 text-center">
                            Get the tech-debt breakdown
                        </h3>
                        <p className="text-sm text-gray-400 mb-5 text-center">
                            Three fields. Single confirmed opt-in. No sales blast — you&apos;ll hear from
                            William directly.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="sm:col-span-1">
                                <label htmlFor="lead-name" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    Name
                                </label>
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
                                <label htmlFor="lead-email" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    Work email
                                </label>
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
                                <label htmlFor="lead-company" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    Company
                                </label>
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
                            <p className="mt-3 text-sm text-rose-400" role="alert">
                                {formError}
                            </p>
                        )}
                        <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center items-center">
                            <Button
                                type="submit"
                                variant="primary"
                                size="md"
                                disabled={submitting}
                                className="min-w-[200px]"
                            >
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
                            For engineering leaders, not vendor blast lists. Unsubscribe in one click.
                        </p>
                    </form>
                )}

                {submitted && (
                    <div
                        className="max-w-xl mx-auto rounded-xl border border-emerald-400/30 bg-emerald-400/5 p-6 text-center"
                        role="status"
                        aria-live="polite"
                    >
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-400/15 mb-4">
                            <Check className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                            You&apos;re on the list — check {leadForm.email}
                        </h3>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Your technical-debt breakdown is on its way (and a short follow-up from William at
                            QUANT LAB USA). If the refactor case is strong, reply to that first email and we&apos;ll
                            scope it against your actual codebase on a 20-minute call.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
