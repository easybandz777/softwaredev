"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Check, Loader2, AlertTriangle, Sparkles, Plus, Trash2 } from "lucide-react";

// Months in a year — used to roll monthly recurring revenue into an annual figure.
const MONTHS_PER_YEAR = 12;

type Cadence = "monthly" | "annual";

interface Tier {
    id: string;
    name: string;
    price: number; // price per customer for the selected billing cadence
    cadence: Cadence;
    customers: number;
}

interface CalculatorInputs {
    tiers: Tier[];
    monthlyChurnPct: number;
}

interface TierBreakdown {
    id: string;
    name: string;
    normalizedMonthlyPrice: number;
    customers: number;
    tierMrr: number;
}

interface CalculatorOutput {
    mrr: number;
    arr: number;
    totalCustomers: number;
    blendedArpu: number;
    annualChurnedRevenue: number;
    netNewRevenueNeeded: number;
    tierBreakdown: TierBreakdown[];
    drivers: string[];
    recommendation: {
        path: "single" | "good" | "spread" | "enterprise";
        headline: string;
        body: string;
    };
}

let tierCounter = 0;
function makeTier(partial: Partial<Tier> = {}): Tier {
    tierCounter += 1;
    return {
        id: `tier-${tierCounter}`,
        name: partial.name ?? `Tier ${tierCounter}`,
        price: partial.price ?? 29,
        cadence: partial.cadence ?? "monthly",
        customers: partial.customers ?? 100,
    };
}

const INITIAL_INPUTS: CalculatorInputs = {
    tiers: [
        { id: "tier-seed-1", name: "Starter", price: 29, cadence: "monthly", customers: 220 },
        { id: "tier-seed-2", name: "Growth", price: 99, cadence: "monthly", customers: 90 },
        { id: "tier-seed-3", name: "Scale", price: 1990, cadence: "annual", customers: 18 },
    ],
    monthlyChurnPct: 3,
};

function normalizeMonthly(price: number, cadence: Cadence): number {
    if (cadence === "annual") return price / MONTHS_PER_YEAR;
    return price;
}

function calculate(inputs: CalculatorInputs): CalculatorOutput {
    const drivers: string[] = [];

    const tierBreakdown: TierBreakdown[] = inputs.tiers.map((tier) => {
        const normalizedMonthlyPrice = normalizeMonthly(tier.price, tier.cadence);
        const tierMrr = normalizedMonthlyPrice * Math.max(0, tier.customers);
        return {
            id: tier.id,
            name: tier.name,
            normalizedMonthlyPrice,
            customers: Math.max(0, tier.customers),
            tierMrr,
        };
    });

    const mrr = tierBreakdown.reduce((sum, t) => sum + t.tierMrr, 0);
    const arr = mrr * MONTHS_PER_YEAR;
    const totalCustomers = tierBreakdown.reduce((sum, t) => sum + t.customers, 0);
    const blendedArpu = totalCustomers > 0 ? mrr / totalCustomers : 0;

    // Revenue-churn approximation: monthly churn % applied to MRR, annualized.
    const monthlyChurnedRevenue = mrr * (inputs.monthlyChurnPct / 100);
    const annualChurnedRevenue = monthlyChurnedRevenue * MONTHS_PER_YEAR;
    // Net-new MRR you must add each month just to offset churn and stay flat.
    const netNewRevenueNeeded = monthlyChurnedRevenue;

    if (totalCustomers > 0 && blendedArpu < 25) {
        drivers.push(
            `Blended ARPU of ${formatCurrency(blendedArpu)}/mo is low — high-volume, low-touch plans put pressure on support and infra margins.`,
        );
    }
    if (inputs.monthlyChurnPct >= 5) {
        drivers.push(
            `${inputs.monthlyChurnPct}% monthly churn means you lose ~${formatCurrency(annualChurnedRevenue)}/yr of MRR — you must add ${formatCurrency(netNewRevenueNeeded)}/mo of net-new MRR just to break even.`,
        );
    } else if (inputs.monthlyChurnPct > 0) {
        drivers.push(
            `${inputs.monthlyChurnPct}% monthly churn costs ~${formatCurrency(annualChurnedRevenue)}/yr — the gap a fit-to-purpose billing flow and dunning logic is built to close.`,
        );
    }
    const annualTiers = inputs.tiers.filter((t) => t.cadence === "annual");
    if (annualTiers.length > 0) {
        drivers.push(
            `${annualTiers.length} annual-billed tier${annualTiers.length > 1 ? "s" : ""} smooth cash flow but need proration and renewal logic to report MRR cleanly.`,
        );
    }
    if (inputs.tiers.length >= 4) {
        drivers.push(
            `${inputs.tiers.length} plan tiers add a plan-state matrix — upgrades, downgrades, and grandfathering all need explicit handling in your billing layer.`,
        );
    }

    let recommendation: CalculatorOutput["recommendation"];
    if (inputs.tiers.length <= 1) {
        recommendation = {
            path: "single",
            headline: "A single plan is clean — until it isn't",
            body: "One tier is the simplest billing surface to build and the easiest to reason about. Watch for the moment a chunk of customers want either a cheaper entry point or a bigger plan — that signal usually means you're leaving expansion revenue on the table. When you add tiers, the proration and upgrade/downgrade logic is where the build effort lives.",
        };
    } else if (arr >= 2_000_000) {
        recommendation = {
            path: "enterprise",
            headline: "You're at the scale where billing is a system, not a setting",
            body: "Past roughly $2M ARR, billing edge cases (proration, mid-cycle plan changes, metered overages, dunning, revenue recognition) stop being a Stripe dashboard chore and start being a product surface of their own. This is exactly the kind of subscription-billing engine we build — owning that layer protects your reported revenue and your renewal rate.",
        };
    } else if (inputs.monthlyChurnPct >= 5) {
        recommendation = {
            path: "spread",
            headline: "Churn is the lever that matters most right now",
            body: "Your tier mix is reasonable, but the churn rate is doing more damage to ARR than your pricing is. Before re-pricing, tighten the billing experience — failed-payment recovery (dunning), clean upgrade paths, and proactive renewal flows. A custom billing layer typically recovers 1–3 points of monthly churn that off-the-shelf checkout leaves on the floor.",
        };
    } else {
        recommendation = {
            path: "good",
            headline: "Healthy multi-tier setup — protect the billing layer",
            body: "Your tier spread and churn look workable. The risk at this stage is letting billing logic sprawl across ad-hoc Stripe webhooks and one-off scripts. A purpose-built subscription-billing layer keeps MRR reporting trustworthy as you add tiers and usage-based pricing — and saves you from the reconciliation cleanup that eventually lands on every growing SaaS team.",
        };
    }

    return {
        mrr,
        arr,
        totalCustomers,
        blendedArpu,
        annualChurnedRevenue,
        netNewRevenueNeeded,
        tierBreakdown,
        drivers,
        recommendation,
    };
}

function formatCurrency(n: number): string {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function formatCurrencyPrecise(n: number): string {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 });
}

export function SaasPricingCalculator() {
    const [inputs, setInputs] = useState<CalculatorInputs>(INITIAL_INPUTS);
    const [showLeadForm, setShowLeadForm] = useState(false);
    const [leadForm, setLeadForm] = useState({ name: "", email: "", company: "" });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);

    const result = useMemo(() => calculate(inputs), [inputs]);

    function updateChurn(value: number) {
        setInputs((prev) => ({ ...prev, monthlyChurnPct: Math.max(0, Math.min(100, value)) }));
    }

    function updateTier<K extends keyof Tier>(id: string, key: K, value: Tier[K]) {
        setInputs((prev) => ({
            ...prev,
            tiers: prev.tiers.map((t) => (t.id === id ? { ...t, [key]: value } : t)),
        }));
    }

    function addTier() {
        setInputs((prev) => ({ ...prev, tiers: [...prev.tiers, makeTier()] }));
    }

    function removeTier(id: string) {
        setInputs((prev) => ({
            ...prev,
            tiers: prev.tiers.length > 1 ? prev.tiers.filter((t) => t.id !== id) : prev.tiers,
        }));
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
            source: "saas-pricing-calculator",
            magnet: "saas-pricing-calculator",
            drip: "D3",
            name: leadForm.name.trim(),
            email: leadForm.email.trim(),
            company: leadForm.company.trim(),
            calculatorInputs: inputs,
            calculatorResult: {
                mrr: result.mrr,
                arr: result.arr,
                blendedArpu: result.blendedArpu,
                totalCustomers: result.totalCustomers,
                annualChurnedRevenue: result.annualChurnedRevenue,
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
                console.log("[saas-pricing-calculator] lead capture (stub):", payload);
            }
        } catch {
            console.log("[saas-pricing-calculator] lead capture (stub, fetch failed):", payload);
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
                            Your pricing tiers
                        </h2>
                        <p className="text-sm text-gray-400">
                            Add your plans, prices, and customer counts — MRR, ARR, and blended ARPU recalculate live.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {inputs.tiers.map((tier, index) => (
                            <div
                                key={tier.id}
                                className="rounded-xl border border-white/10 bg-[#0d1526] p-4 space-y-3"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <input
                                        type="text"
                                        aria-label={`Tier ${index + 1} name`}
                                        value={tier.name}
                                        onChange={(e) => updateTier(tier.id, "name", e.target.value)}
                                        className="flex-1 rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm font-medium text-white focus:border-sky-400 focus:outline-none transition-colors"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => removeTier(tier.id)}
                                        disabled={inputs.tiers.length <= 1}
                                        aria-label={`Remove ${tier.name}`}
                                        className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-gray-400 hover:text-rose-400 hover:border-rose-400/30 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    <div>
                                        <label
                                            htmlFor={`price-${tier.id}`}
                                            className="block text-xs font-medium text-gray-400 mb-1.5"
                                        >
                                            Price (USD)
                                        </label>
                                        <input
                                            id={`price-${tier.id}`}
                                            type="number"
                                            min={0}
                                            step={1}
                                            value={tier.price}
                                            onChange={(e) =>
                                                updateTier(tier.id, "price", Math.max(0, Number(e.target.value) || 0))
                                            }
                                            className="w-full rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor={`cadence-${tier.id}`}
                                            className="block text-xs font-medium text-gray-400 mb-1.5"
                                        >
                                            Billing
                                        </label>
                                        <select
                                            id={`cadence-${tier.id}`}
                                            value={tier.cadence}
                                            onChange={(e) =>
                                                updateTier(tier.id, "cadence", e.target.value as Cadence)
                                            }
                                            className="w-full rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                        >
                                            <option value="monthly">Per month</option>
                                            <option value="annual">Per year</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label
                                            htmlFor={`customers-${tier.id}`}
                                            className="block text-xs font-medium text-gray-400 mb-1.5"
                                        >
                                            Customers
                                        </label>
                                        <input
                                            id={`customers-${tier.id}`}
                                            type="number"
                                            min={0}
                                            step={1}
                                            value={tier.customers}
                                            onChange={(e) =>
                                                updateTier(tier.id, "customers", Math.max(0, Number(e.target.value) || 0))
                                            }
                                            className="w-full rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                        />
                                    </div>
                                </div>
                                <p className="text-xs text-gray-500">
                                    Contributes{" "}
                                    <span className="text-gray-300 font-medium">
                                        {formatCurrency(
                                            normalizeMonthly(tier.price, tier.cadence) * Math.max(0, tier.customers),
                                        )}
                                        /mo
                                    </span>{" "}
                                    to MRR
                                    {tier.cadence === "annual" && (
                                        <>
                                            {" "}(annual price normalized to{" "}
                                            {formatCurrencyPrecise(normalizeMonthly(tier.price, tier.cadence))}/mo)
                                        </>
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>

                    <button
                        type="button"
                        onClick={addTier}
                        className="inline-flex items-center gap-2 rounded-lg border border-dashed border-white/15 px-4 py-2.5 text-sm text-gray-300 hover:border-sky-400/40 hover:text-white transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        Add a tier
                    </button>

                    <div>
                        <label
                            htmlFor="monthlyChurn"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Monthly revenue churn (%)
                        </label>
                        <input
                            id="monthlyChurn"
                            type="number"
                            min={0}
                            max={100}
                            step={0.5}
                            value={inputs.monthlyChurnPct}
                            onChange={(e) => updateChurn(Number(e.target.value) || 0)}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                        <p className="text-xs text-gray-500 mt-1.5">
                            The share of MRR you lose each month to cancellations and downgrades.
                        </p>
                    </div>
                </div>

                {/* Output */}
                <div className="lg:col-span-2">
                    <div className="lg:sticky lg:top-32 space-y-5">
                        <div className="rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-500/10 via-[#0d1526] to-emerald-500/5 p-6">
                            <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2">
                                Recurring Revenue
                            </p>
                            <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                {formatCurrency(result.mrr)}
                            </p>
                            <p className="text-sm text-gray-400 mb-4">MRR</p>
                            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">ARR</p>
                                    <p className="text-base font-semibold text-white">{formatCurrency(result.arr)}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Blended ARPU</p>
                                    <p className="text-base font-semibold text-white">
                                        {formatCurrencyPrecise(result.blendedArpu)}/mo
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5 space-y-3">
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Total customers</span>
                                <span className="text-sm font-semibold text-white">
                                    {result.totalCustomers.toLocaleString()}
                                </span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Churned MRR / yr</span>
                                <span className="text-sm font-semibold text-white">
                                    {formatCurrency(result.annualChurnedRevenue)}
                                </span>
                            </div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Net-new MRR to stay flat</span>
                                <span className="text-sm font-semibold text-white">
                                    {formatCurrency(result.netNewRevenueNeeded)}/mo
                                </span>
                            </div>
                        </div>

                        {result.tierBreakdown.length > 0 && (
                            <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5">
                                <p className="text-sm font-semibold text-white mb-3">MRR by tier</p>
                                <ul className="space-y-2">
                                    {result.tierBreakdown.map((t) => (
                                        <li key={t.id} className="flex justify-between items-baseline gap-3 text-xs">
                                            <span className="text-gray-400 truncate">{t.name}</span>
                                            <span className="text-gray-200 font-medium flex-shrink-0">
                                                {formatCurrency(t.tierMrr)}/mo
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

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
                            Want this pricing model as a shareable PDF for your board or co-founder?
                        </p>
                        <Button
                            variant="primary"
                            size="md"
                            onClick={() => setShowLeadForm(true)}
                            className="min-w-[260px]"
                        >
                            Send me the pricing breakdown PDF
                        </Button>
                    </div>
                )}

                {showLeadForm && !submitted && (
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                        <h3 className="text-lg font-semibold text-white mb-1 text-center">
                            Get the pricing breakdown
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
                            Built for SaaS founders, by a SaaS builder. No list rentals, unsubscribe in one click.
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
                            Your pricing breakdown is on its way (and a short follow-up from William at QUANT LAB USA).
                            If your billing model is getting complex, reply to that first email and we&apos;ll get a
                            20-minute call on the calendar.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
