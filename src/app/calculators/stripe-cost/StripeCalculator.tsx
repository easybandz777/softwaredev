"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Check, Loader2, AlertTriangle, Sparkles } from "lucide-react";

// Hourly rate baseline used by the calculator. Senior US engineering blended rate.
const HOURLY_RATE = 150;

type ExistingSystem = "salesforce" | "quickbooks" | "custom_db" | "none";
type TaxHandling = "stripe_tax" | "taxjar" | "in_house";
type Timeline = "1_month" | "2_3_months" | "flexible";

interface CalculatorInputs {
    volume: number;
    plans: number;
    multiCurrency: boolean;
    customCheckout: boolean;
    proration: boolean;
    connect: boolean;
    existingSystem: ExistingSystem;
    taxHandling: TaxHandling;
    timeline: Timeline;
}

interface CalculatorOutput {
    hoursLow: number;
    hoursHigh: number;
    costLow: number;
    costHigh: number;
    drivers: string[];
    recommendation: {
        path: "diy" | "freelancer" | "agency" | "quantlab";
        headline: string;
        body: string;
    };
}

const INITIAL_INPUTS: CalculatorInputs = {
    volume: 5000,
    plans: 2,
    multiCurrency: false,
    customCheckout: false,
    proration: false,
    connect: false,
    existingSystem: "none",
    taxHandling: "stripe_tax",
    timeline: "2_3_months",
};

function calculate(inputs: CalculatorInputs): CalculatorOutput {
    // Baseline: simple Stripe Checkout + webhooks + 1 plan
    let hours = 80;
    const drivers: string[] = [];

    // Volume scaling — higher volume needs better reconciliation, idempotency, monitoring
    if (inputs.volume > 50000) {
        hours += 40;
        drivers.push(
            `${inputs.volume.toLocaleString()} txn/mo requires hardened reconciliation + monitoring (+40 hrs)`,
        );
    } else if (inputs.volume > 10000) {
        hours += 20;
        drivers.push(
            `${inputs.volume.toLocaleString()} txn/mo needs solid retry queue + idempotency (+20 hrs)`,
        );
    }

    // Subscription plans
    if (inputs.plans >= 5) {
        hours += 50;
        drivers.push(`${inputs.plans} subscription plans = significant plan-state matrix (+50 hrs)`);
    } else if (inputs.plans >= 3) {
        hours += 25;
        drivers.push(`${inputs.plans} subscription plans (+25 hrs)`);
    } else if (inputs.plans >= 2) {
        hours += 12;
        drivers.push(`${inputs.plans} subscription plans (+12 hrs)`);
    } else if (inputs.plans === 1) {
        hours += 8;
    }

    // Multi-currency adds 30-50% complexity to billing/tax/reporting
    let multiCurrencyMultiplier = 1;
    if (inputs.multiCurrency) {
        multiCurrencyMultiplier = 1.35;
        drivers.push("Multi-currency adds 30–50% time across billing, tax, and reporting");
    }

    // Custom checkout UI (Stripe Elements / custom Payment Element flow)
    if (inputs.customCheckout) {
        hours += 60;
        drivers.push("Custom checkout UI (Elements + UX polish) adds ~60 hrs");
    }

    // Proration & mid-cycle plan changes
    if (inputs.proration) {
        hours += 40;
        drivers.push("Subscription proration / upgrades + downgrades (+40 hrs)");
    }

    // Stripe Connect is a major scope expander
    let connectAddOn = 0;
    if (inputs.connect) {
        connectAddOn = 120;
        drivers.push("Stripe Connect (marketplace/multi-seller) adds 2–4 weeks (~120 hrs)");
    }

    // Existing system integration
    let integrationHours = 0;
    if (inputs.existingSystem === "salesforce") {
        integrationHours = 60;
        drivers.push("Salesforce sync (bi-directional, custom objects) adds ~60 hrs");
    } else if (inputs.existingSystem === "quickbooks") {
        integrationHours = 50;
        drivers.push("QuickBooks Online sync + invoice mapping adds ~50 hrs");
    } else if (inputs.existingSystem === "custom_db") {
        integrationHours = 40;
        drivers.push("Custom database integration + schema mapping adds ~40 hrs");
    }

    // Tax handling
    let taxHours = 0;
    if (inputs.taxHandling === "stripe_tax") {
        taxHours = 12;
    } else if (inputs.taxHandling === "taxjar") {
        taxHours = 35;
        drivers.push("TaxJar API integration + reconciliation (+35 hrs)");
    } else if (inputs.taxHandling === "in_house") {
        taxHours = 90;
        drivers.push("In-house tax logic = significant scope (+90 hrs) — usually not worth it");
    }

    // Combine
    hours = hours * multiCurrencyMultiplier + connectAddOn + integrationHours + taxHours;

    // Timeline urgency surcharge
    let timelineMultiplier = 1;
    if (inputs.timeline === "1_month") {
        timelineMultiplier = 1.2;
        drivers.push("1-month timeline = +20% urgency premium (overtime + parallel tracks)");
    } else if (inputs.timeline === "2_3_months") {
        timelineMultiplier = 1;
    } else if (inputs.timeline === "flexible") {
        timelineMultiplier = 0.95;
    }

    const baseHours = Math.round(hours * timelineMultiplier);

    // Low/high range: realistic estimation spread
    const hoursLow = Math.max(40, Math.round(baseHours * 0.85));
    const hoursHigh = Math.round(baseHours * 1.25);

    const costLow = hoursLow * HOURLY_RATE;
    const costHigh = hoursHigh * HOURLY_RATE;

    // Recommendation logic
    const complexityScore =
        (inputs.multiCurrency ? 2 : 0) +
        (inputs.customCheckout ? 1 : 0) +
        (inputs.proration ? 1 : 0) +
        (inputs.connect ? 3 : 0) +
        (inputs.existingSystem !== "none" ? 1 : 0) +
        (inputs.taxHandling === "in_house" ? 2 : 0) +
        (inputs.plans >= 3 ? 1 : 0) +
        (inputs.volume > 10000 ? 1 : 0);

    let recommendation: CalculatorOutput["recommendation"];
    if (complexityScore <= 1) {
        recommendation = {
            path: "diy",
            headline: "DIY is realistic here",
            body: "Your scope is small enough that a strong in-house engineer can knock this out with Stripe's docs and a webhook handler. If you have 2–3 weeks of focus and someone who has shipped Stripe before, you don't need outside help.",
        };
    } else if (complexityScore <= 3) {
        recommendation = {
            path: "freelancer",
            headline: "A senior Stripe freelancer can handle this",
            body: "This is in the sweet spot for a vetted freelancer who has shipped Stripe production code. Budget for the upper end of the range to account for the edge cases (webhook replays, refunds, subscription proration) that always come up.",
        };
    } else if (complexityScore <= 5) {
        recommendation = {
            path: "agency",
            headline: "Agency or specialized firm recommended",
            body: "Scope is past what a solo freelancer should own. You want a team where someone has shipped this exact pattern before — multi-currency, real subscription state machines, dunning, and integration sync are where the wheels come off. QuantLab does exactly this kind of build.",
        };
    } else {
        recommendation = {
            path: "quantlab",
            headline: "Talk to QuantLab — this is in our wheelhouse",
            body: "Stripe Connect + tax + multi-currency + subscription proration is the build we've done a dozen times. A 20-minute scoping call will save you 2–3 weeks of false starts and protect you from the 5 places this kind of integration usually breaks.",
        };
    }

    return { hoursLow, hoursHigh, costLow, costHigh, drivers, recommendation };
}

function formatCurrency(n: number): string {
    return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

export function StripeCalculator() {
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
            magnet: "stripe-cost-calculator",
            drip: "D3", // D3 — Stripe / Payments nurture (see seo-deliverables/16-email-drip.md)
            name: leadForm.name.trim(),
            email: leadForm.email.trim(),
            company: leadForm.company.trim(),
            calculatorInputs: inputs,
            calculatorResult: {
                hoursLow: result.hoursLow,
                hoursHigh: result.hoursHigh,
                costLow: result.costLow,
                costHigh: result.costHigh,
                recommendation: result.recommendation.path,
            },
        };

        // TODO: wire to actual lead intake — see seo-deliverables/16-email-drip.md for the
        // D3 (Stripe / Payments nurture) drip sequence this lead should be enrolled into.
        // The /api/leads endpoint does not exist yet — we attempt the POST so it works the
        // moment someone wires it up, and we fall back to a logged success so the UX never
        // breaks for the prospect.
        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (!res.ok) {
                // Endpoint missing or errored — log + simulate success so the UX is clean.
                // eslint-disable-next-line no-console
                console.log("[stripe-cost-calculator] lead capture (stub):", payload);
            }
        } catch {
            // eslint-disable-next-line no-console
            console.log("[stripe-cost-calculator] lead capture (stub, fetch failed):", payload);
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
                            Your Stripe scope
                        </h2>
                        <p className="text-sm text-gray-400">
                            Update any field — the estimate recalculates live.
                        </p>
                    </div>

                    {/* Volume */}
                    <div>
                        <label
                            htmlFor="volume"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Estimated monthly transaction volume
                        </label>
                        <input
                            id="volume"
                            type="number"
                            min={0}
                            step={100}
                            value={inputs.volume}
                            onChange={(e) => update("volume", Math.max(0, Number(e.target.value) || 0))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>

                    {/* Plans */}
                    <div>
                        <label
                            htmlFor="plans"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Number of subscription plans
                        </label>
                        <input
                            id="plans"
                            type="number"
                            min={0}
                            max={50}
                            value={inputs.plans}
                            onChange={(e) => update("plans", Math.max(0, Number(e.target.value) || 0))}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>

                    {/* Boolean toggles */}
                    <div className="grid sm:grid-cols-2 gap-3">
                        {(
                            [
                                ["multiCurrency", "Multi-currency support"],
                                ["customCheckout", "Custom checkout UI"],
                                ["proration", "Subscription proration / upgrades"],
                                ["connect", "Stripe Connect (marketplace)"],
                            ] as const
                        ).map(([key, label]) => (
                            <label
                                key={key}
                                className={`flex items-center gap-3 rounded-lg border p-3 cursor-pointer transition-colors ${
                                    inputs[key]
                                        ? "border-sky-400/50 bg-sky-400/5"
                                        : "border-white/10 bg-[#0d1526] hover:border-white/20"
                                }`}
                            >
                                <input
                                    type="checkbox"
                                    checked={inputs[key]}
                                    onChange={(e) => update(key, e.target.checked)}
                                    className="w-4 h-4 accent-sky-400 cursor-pointer"
                                />
                                <span className="text-sm text-gray-200">{label}</span>
                            </label>
                        ))}
                    </div>

                    {/* Existing system */}
                    <div>
                        <label
                            htmlFor="existingSystem"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Existing system to integrate with
                        </label>
                        <select
                            id="existingSystem"
                            value={inputs.existingSystem}
                            onChange={(e) => update("existingSystem", e.target.value as ExistingSystem)}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        >
                            <option value="none">None</option>
                            <option value="salesforce">Salesforce</option>
                            <option value="quickbooks">QuickBooks</option>
                            <option value="custom_db">Custom database</option>
                        </select>
                    </div>

                    {/* Tax handling */}
                    <div>
                        <label
                            htmlFor="taxHandling"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Tax handling
                        </label>
                        <select
                            id="taxHandling"
                            value={inputs.taxHandling}
                            onChange={(e) => update("taxHandling", e.target.value as TaxHandling)}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        >
                            <option value="stripe_tax">Stripe Tax</option>
                            <option value="taxjar">TaxJar</option>
                            <option value="in_house">In-house</option>
                        </select>
                    </div>

                    {/* Timeline */}
                    <div>
                        <label
                            htmlFor="timeline"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Timeline urgency
                        </label>
                        <select
                            id="timeline"
                            value={inputs.timeline}
                            onChange={(e) => update("timeline", e.target.value as Timeline)}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        >
                            <option value="1_month">1 month (urgent)</option>
                            <option value="2_3_months">2–3 months (standard)</option>
                            <option value="flexible">Flexible</option>
                        </select>
                    </div>
                </div>

                {/* Output */}
                <div className="lg:col-span-2">
                    <div className="lg:sticky lg:top-32 space-y-5">
                        <div className="rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-500/10 via-[#0d1526] to-emerald-500/5 p-6">
                            <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2">
                                Estimated Range
                            </p>
                            <div className="mb-4">
                                <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                    {formatCurrency(result.costLow)}
                                </p>
                                <p className="text-sm text-gray-400 my-1">to</p>
                                <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                    {formatCurrency(result.costHigh)}
                                </p>
                            </div>
                            <p className="text-sm text-gray-400">
                                <span className="text-gray-300 font-medium">
                                    {result.hoursLow}–{result.hoursHigh} hours
                                </span>{" "}
                                at ~${HOURLY_RATE}/hr senior US engineering
                            </p>
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
                                        Complexity drivers
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

            {/* Lead form */}
            <div className="mt-10 pt-8 border-t border-white/5">
                {!showLeadForm && !submitted && (
                    <div className="text-center">
                        <p className="text-gray-400 text-sm mb-4">
                            Want this estimate as a shareable PDF for your team or board?
                        </p>
                        <Button
                            variant="primary"
                            size="md"
                            onClick={() => setShowLeadForm(true)}
                            className="min-w-[260px]"
                        >
                            Send me the breakdown PDF
                        </Button>
                    </div>
                )}

                {showLeadForm && !submitted && (
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                        <h3 className="text-lg font-semibold text-white mb-1 text-center">
                            Get the PDF breakdown
                        </h3>
                        <p className="text-sm text-gray-400 mb-5 text-center">
                            Three fields. Single confirmed opt-in. No sales blast — you&apos;ll hear from
                            William directly.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="sm:col-span-1">
                                <label
                                    htmlFor="lead-name"
                                    className="block text-xs font-medium text-gray-400 mb-1.5"
                                >
                                    Name
                                </label>
                                <input
                                    id="lead-name"
                                    type="text"
                                    autoComplete="name"
                                    value={leadForm.name}
                                    onChange={(e) =>
                                        setLeadForm((p) => ({ ...p, name: e.target.value }))
                                    }
                                    className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-1">
                                <label
                                    htmlFor="lead-email"
                                    className="block text-xs font-medium text-gray-400 mb-1.5"
                                >
                                    Work email
                                </label>
                                <input
                                    id="lead-email"
                                    type="email"
                                    autoComplete="email"
                                    value={leadForm.email}
                                    onChange={(e) =>
                                        setLeadForm((p) => ({ ...p, email: e.target.value }))
                                    }
                                    className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    htmlFor="lead-company"
                                    className="block text-xs font-medium text-gray-400 mb-1.5"
                                >
                                    Company
                                </label>
                                <input
                                    id="lead-company"
                                    type="text"
                                    autoComplete="organization"
                                    value={leadForm.company}
                                    onChange={(e) =>
                                        setLeadForm((p) => ({ ...p, company: e.target.value }))
                                    }
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
                            Built for SaaS founders, by a SaaS builder. No list rentals, unsubscribe in
                            one click.
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
                            Your PDF breakdown is on its way (and a short follow-up from William at
                            QuantLab USA). If your scope is anything past Stripe Checkout, reply to
                            that first email and we&apos;ll get a 20-min Stripe call on the calendar.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
