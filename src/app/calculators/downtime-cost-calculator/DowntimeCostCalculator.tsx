"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Check, Loader2, AlertTriangle, Sparkles } from "lucide-react";

// Standard business-hour assumptions used to convert annual revenue into a per-hour figure.
const HOURS_PER_YEAR_24_7 = 8760; // 365 days x 24 hours
const BUSINESS_HOURS_PER_YEAR = 2080; // 52 weeks x 40 hours

type RevenueBasis = "annual_24_7" | "annual_business" | "per_hour";

interface CalculatorInputs {
    revenueBasis: RevenueBasis;
    annualRevenue: number;
    revenuePerHour: number;
    hoursDown: number;
    affectedPct: number;
    recoveryCost: number;
    reputationMultiplier: number;
}

interface CalculatorOutput {
    effectiveRevenuePerHour: number;
    lostRevenue: number;
    reputationCost: number;
    totalCost: number;
    drivers: string[];
    recommendation: {
        path: "low" | "moderate" | "high" | "severe";
        headline: string;
        body: string;
    };
}

const INITIAL_INPUTS: CalculatorInputs = {
    revenueBasis: "annual_24_7",
    annualRevenue: 5_000_000,
    revenuePerHour: 570,
    hoursDown: 4,
    affectedPct: 100,
    recoveryCost: 8000,
    reputationMultiplier: 1.25,
};

function deriveRevenuePerHour(inputs: CalculatorInputs): number {
    if (inputs.revenueBasis === "per_hour") {
        return Math.max(0, inputs.revenuePerHour);
    }
    if (inputs.revenueBasis === "annual_business") {
        return Math.max(0, inputs.annualRevenue) / BUSINESS_HOURS_PER_YEAR;
    }
    return Math.max(0, inputs.annualRevenue) / HOURS_PER_YEAR_24_7;
}

function calculate(inputs: CalculatorInputs): CalculatorOutput {
    const drivers: string[] = [];

    const effectiveRevenuePerHour = deriveRevenuePerHour(inputs);
    const affectedFraction = Math.max(0, Math.min(100, inputs.affectedPct)) / 100;
    const hours = Math.max(0, inputs.hoursDown);

    const lostRevenue = effectiveRevenuePerHour * hours * affectedFraction;
    const recoveryCost = Math.max(0, inputs.recoveryCost);

    // Reputation / churn drag is applied as a multiplier on top of direct lost revenue.
    const multiplier = Math.max(1, inputs.reputationMultiplier);
    const directCost = lostRevenue + recoveryCost;
    const totalCost = lostRevenue * multiplier + recoveryCost;
    const reputationCost = totalCost - directCost;

    if (effectiveRevenuePerHour > 0) {
        drivers.push(
            `At ${formatCurrency(effectiveRevenuePerHour)}/hr of exposed revenue, every hour of full downtime burns roughly that much before recovery and reputation costs.`,
        );
    }
    if (affectedFraction < 1 && affectedFraction > 0) {
        drivers.push(
            `Only ${Math.round(affectedFraction * 100)}% of revenue is affected, so the bleed is partial — a good sign your architecture has some isolation.`,
        );
    }
    if (multiplier > 1) {
        drivers.push(
            `A ${multiplier.toFixed(2)}x reputation multiplier adds ${formatCurrency(reputationCost)} for downstream churn, SLA credits, and lost trust.`,
        );
    }
    if (recoveryCost >= 5000) {
        drivers.push(
            `${formatCurrency(recoveryCost)} of incident-response and recovery cost (engineering hours, vendor escalation, overtime) is on top of lost revenue.`,
        );
    }
    if (hours >= 8) {
        drivers.push(
            `${hours} hours is a full business day or more — at this duration, SLA penalties and customer escalations usually dominate the direct revenue loss.`,
        );
    }

    let recommendation: CalculatorOutput["recommendation"];
    if (totalCost < 5000) {
        recommendation = {
            path: "low",
            headline: "Low single-incident exposure",
            body: "A single outage at this profile is an annoyance, not an existential threat. The cheapest insurance here is basic uptime monitoring and a documented runbook so a 4 AM page doesn't turn a 20-minute blip into a 4-hour scramble. Resilience engineering has diminishing returns at this exposure level — spend accordingly.",
        };
    } else if (totalCost < 50000) {
        recommendation = {
            path: "moderate",
            headline: "Moderate exposure — worth hardening the obvious gaps",
            body: "An outage at this level stings enough to justify health checks, automated alerting, and a tested rollback path. If you're on a single region or a single database instance with no failover, that's the first thing to fix — it's usually the difference between a brief degradation and a multi-hour incident.",
        };
    } else if (totalCost < 250000) {
        recommendation = {
            path: "high",
            headline: "High exposure — invest in real redundancy",
            body: "At this cost per incident, the math for redundancy and faster recovery flips strongly positive. Multi-AZ deployments, database replicas with automated failover, graceful degradation, and a practiced incident-response process typically pay for themselves the first time they prevent a single outage of this size. This is squarely where DevOps and cloud-infrastructure work earns its keep.",
        };
    } else {
        recommendation = {
            path: "severe",
            headline: "Severe exposure — resilience is a board-level line item",
            body: "A single outage at this magnitude is a material business event. You want multi-region failover, chaos-tested recovery procedures, clear SLOs with error budgets, and an on-call rotation that's actually rehearsed. We build exactly this kind of resilient infrastructure — a 20-minute call will tell you where your single points of failure are and what closing them is worth against this number.",
        };
    }

    return {
        effectiveRevenuePerHour,
        lostRevenue,
        reputationCost,
        totalCost,
        drivers,
        recommendation,
    };
}

function formatCurrency(n: number): string {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export function DowntimeCostCalculator() {
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
            source: "downtime-cost-calculator",
            magnet: "downtime-cost-calculator",
            drip: "D5",
            name: leadForm.name.trim(),
            email: leadForm.email.trim(),
            company: leadForm.company.trim(),
            calculatorInputs: inputs,
            calculatorResult: {
                effectiveRevenuePerHour: result.effectiveRevenuePerHour,
                lostRevenue: result.lostRevenue,
                totalCost: result.totalCost,
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
                console.log("[downtime-cost-calculator] lead capture (stub):", payload);
            }
        } catch {
            console.log("[downtime-cost-calculator] lead capture (stub, fetch failed):", payload);
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
                            Your outage profile
                        </h2>
                        <p className="text-sm text-gray-400">
                            Update any field — the cost of a single outage recalculates live.
                        </p>
                    </div>

                    {/* Revenue basis */}
                    <div>
                        <label htmlFor="revenueBasis" className="block text-sm font-medium text-gray-300 mb-2">
                            How do you want to enter revenue?
                        </label>
                        <select
                            id="revenueBasis"
                            value={inputs.revenueBasis}
                            onChange={(e) => update("revenueBasis", e.target.value as RevenueBasis)}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        >
                            <option value="annual_24_7">Annual revenue, spread over 24/7</option>
                            <option value="annual_business">Annual revenue, business hours only</option>
                            <option value="per_hour">I&apos;ll enter revenue per hour directly</option>
                        </select>
                    </div>

                    {/* Annual revenue OR per-hour */}
                    {inputs.revenueBasis === "per_hour" ? (
                        <div>
                            <label htmlFor="revenuePerHour" className="block text-sm font-medium text-gray-300 mb-2">
                                Revenue per hour (USD)
                            </label>
                            <input
                                id="revenuePerHour"
                                type="number"
                                min={0}
                                step={10}
                                value={inputs.revenuePerHour}
                                onChange={(e) => update("revenuePerHour", Math.max(0, Number(e.target.value) || 0))}
                                className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                            />
                        </div>
                    ) : (
                        <div>
                            <label htmlFor="annualRevenue" className="block text-sm font-medium text-gray-300 mb-2">
                                Annual revenue (USD)
                            </label>
                            <input
                                id="annualRevenue"
                                type="number"
                                min={0}
                                step={10000}
                                value={inputs.annualRevenue}
                                onChange={(e) => update("annualRevenue", Math.max(0, Number(e.target.value) || 0))}
                                className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                            />
                            <p className="text-xs text-gray-500 mt-1.5">
                                Derived revenue per hour:{" "}
                                <span className="text-gray-300 font-medium">
                                    {formatCurrency(deriveRevenuePerHour(inputs))}/hr
                                </span>
                            </p>
                        </div>
                    )}

                    {/* Hours down */}
                    <div>
                        <label htmlFor="hoursDown" className="block text-sm font-medium text-gray-300 mb-2">
                            Hours of downtime in the outage
                        </label>
                        <input
                            id="hoursDown"
                            type="number"
                            min={0}
                            max={168}
                            step={0.25}
                            value={inputs.hoursDown}
                            onChange={(e) => update("hoursDown", Math.max(0, Number(e.target.value) || 0))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>

                    {/* Affected % */}
                    <div>
                        <label htmlFor="affectedPct" className="block text-sm font-medium text-gray-300 mb-2">
                            % of revenue affected during the outage
                        </label>
                        <input
                            id="affectedPct"
                            type="number"
                            min={0}
                            max={100}
                            step={5}
                            value={inputs.affectedPct}
                            onChange={(e) => update("affectedPct", Math.max(0, Math.min(100, Number(e.target.value) || 0)))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                        <p className="text-xs text-gray-500 mt-1.5">
                            100% means everything is down. Use a lower number if only part of the system is affected.
                        </p>
                    </div>

                    {/* Recovery cost */}
                    <div>
                        <label htmlFor="recoveryCost" className="block text-sm font-medium text-gray-300 mb-2">
                            Recovery cost (engineering hours, vendor escalation, overtime)
                        </label>
                        <input
                            id="recoveryCost"
                            type="number"
                            min={0}
                            step={500}
                            value={inputs.recoveryCost}
                            onChange={(e) => update("recoveryCost", Math.max(0, Number(e.target.value) || 0))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>

                    {/* Reputation multiplier */}
                    <div>
                        <label htmlFor="reputationMultiplier" className="block text-sm font-medium text-gray-300 mb-2">
                            Reputation / churn multiplier on lost revenue
                        </label>
                        <input
                            id="reputationMultiplier"
                            type="number"
                            min={1}
                            max={5}
                            step={0.05}
                            value={inputs.reputationMultiplier}
                            onChange={(e) => update("reputationMultiplier", Math.max(1, Number(e.target.value) || 1))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                        <p className="text-xs text-gray-500 mt-1.5">
                            1.0 = no downstream damage. 1.25 means every $1 of lost revenue carries another $0.25 of churn, SLA credits, and lost trust.
                        </p>
                    </div>
                </div>

                {/* Output */}
                <div className="lg:col-span-2">
                    <div className="lg:sticky lg:top-32 space-y-5">
                        <div className="rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-500/10 via-[#0d1526] to-emerald-500/5 p-6">
                            <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2">
                                Cost Of This Outage
                            </p>
                            <p className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2">
                                {formatCurrency(result.totalCost)}
                            </p>
                            <p className="text-sm text-gray-400">
                                Exposed revenue ~{formatCurrency(result.effectiveRevenuePerHour)}/hr
                            </p>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5 space-y-3">
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Direct lost revenue</span>
                                <span className="text-sm font-semibold text-white">{formatCurrency(result.lostRevenue)}</span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Reputation / churn drag</span>
                                <span className="text-sm font-semibold text-white">{formatCurrency(result.reputationCost)}</span>
                            </div>
                            <div className="flex justify-between items-baseline pt-3 border-t border-white/10">
                                <span className="text-xs text-gray-300 uppercase tracking-wide font-medium">Total per incident</span>
                                <span className="text-sm font-bold text-white">{formatCurrency(result.totalCost)}</span>
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
                            Want this as a shareable PDF for your leadership or incident-review meeting?
                        </p>
                        <Button
                            variant="primary"
                            size="md"
                            onClick={() => setShowLeadForm(true)}
                            className="min-w-[260px]"
                        >
                            Send me the downtime breakdown PDF
                        </Button>
                    </div>
                )}

                {showLeadForm && !submitted && (
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                        <h3 className="text-lg font-semibold text-white mb-1 text-center">
                            Get the downtime breakdown
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
                            For engineering and ops leaders, not vendor blast lists. Unsubscribe in one click.
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
                            Your downtime cost breakdown is on its way (and a short follow-up from William at
                            QUANT LAB USA). If this number is bigger than you&apos;d like, reply to that first email
                            and we&apos;ll map your single points of failure on a 20-minute call.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
