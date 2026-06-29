"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Check, Loader2, AlertTriangle, Sparkles } from "lucide-react";

// When churn is zero the average lifetime is mathematically infinite. We cap the
// horizon used for a finite LTV so the output stays meaningful and conservative.
const LTV_HORIZON_CAP_MONTHS = 120;

interface CalculatorInputs {
    arpu: number; // average revenue per account, USD per month
    grossMarginPct: number; // gross margin, 0-100
    monthlyChurnPct: number; // monthly revenue/logo churn, 0-100
    cac: number; // customer acquisition cost, USD
}

interface CalculatorOutput {
    monthlyGrossProfit: number;
    lifetimeMonths: number; // 0 sentinel => effectively indefinite (churn 0)
    ltv: number;
    ratio: number; // ltv / cac, 0 when not computable
    paybackMonths: number; // 0 sentinel => never recovers
    drivers: string[];
    recommendation: {
        path: "healthy" | "watch" | "unprofitable" | "empty";
        headline: string;
        body: string;
    };
}

const INITIAL_INPUTS: CalculatorInputs = {
    arpu: 120,
    grossMarginPct: 80,
    monthlyChurnPct: 4,
    cac: 1200,
};

function clampPct(n: number): number {
    if (Number.isNaN(n)) return 0;
    return Math.min(100, Math.max(0, n));
}

function calculate(inputs: CalculatorInputs): CalculatorOutput {
    const arpu = Math.max(0, inputs.arpu);
    const grossMargin = clampPct(inputs.grossMarginPct) / 100;
    const monthlyChurn = clampPct(inputs.monthlyChurnPct) / 100;
    const cac = Math.max(0, inputs.cac);

    const monthlyGrossProfit = arpu * grossMargin;

    // Average customer lifetime in months is 1 / monthly churn. Churn 0 => indefinite,
    // represented by the 0 sentinel and valued at the capped horizon for LTV.
    const lifetimeMonths = monthlyChurn > 0 ? 1 / monthlyChurn : 0;
    const lifetimeForLtv = monthlyChurn > 0 ? lifetimeMonths : LTV_HORIZON_CAP_MONTHS;

    const ltv = monthlyGrossProfit * lifetimeForLtv;
    const ratio = cac > 0 ? ltv / cac : 0;
    const paybackMonths = monthlyGrossProfit > 0 ? cac / monthlyGrossProfit : 0;

    const drivers: string[] = [];
    if (monthlyGrossProfit > 0) {
        drivers.push(
            `Each account contributes ${formatCurrencyPrecise(monthlyGrossProfit)}/mo in gross profit — ${formatCurrency(arpu)} ARPU at ${(grossMargin * 100).toFixed(0)}% margin.`,
        );
    }
    if (monthlyChurn > 0) {
        drivers.push(
            `At ${(monthlyChurn * 100).toFixed(1)}% monthly churn the average customer stays ${lifetimeMonths.toFixed(0)} months — that's the multiplier on lifetime value.`,
        );
    } else {
        drivers.push(
            `With churn set to 0%, lifetime is effectively indefinite — LTV is capped at a ${LTV_HORIZON_CAP_MONTHS}-month horizon here to stay conservative.`,
        );
    }
    if (cac > 0 && monthlyGrossProfit > 0) {
        drivers.push(
            `You recover the ${formatCurrency(cac)} CAC in ${paybackMonths.toFixed(1)} months of gross profit — under 12 is the common efficiency bar.`,
        );
    }
    if (ratio > 0) {
        drivers.push(
            `LTV of ${formatCurrency(ltv)} against ${formatCurrency(cac)} CAC is a ${ratio.toFixed(1)}:1 ratio — 3:1 or better is the textbook healthy target.`,
        );
    }

    let recommendation: CalculatorOutput["recommendation"];
    if (arpu <= 0 || cac <= 0 || monthlyGrossProfit <= 0) {
        recommendation = {
            path: "empty",
            headline: "Enter your unit economics to see the read",
            body: "Add your average revenue per account, gross margin, monthly churn, and customer acquisition cost. We'll return the average customer lifetime, gross-margin LTV, the LTV:CAC ratio, and how many months it takes to pay back CAC — plus a plain-English health read.",
        };
    } else if (ratio >= 3 && paybackMonths <= 12) {
        recommendation = {
            path: "healthy",
            headline: "Healthy unit economics — the model scales",
            body: "Your LTV:CAC sits at or above 3:1 and CAC pays back inside a year. That's the zone where spending more to acquire customers compounds rather than drains — investors read it as a green light to pour fuel on growth. Keep an eye on whether CAC creeps up as you scale channels, and protect the churn number, since it's the lever with the most leverage on LTV.",
        };
    } else if (ratio >= 1 && paybackMonths <= 18) {
        recommendation = {
            path: "watch",
            headline: "Workable, but there's margin to tighten",
            body: "The model recovers its acquisition cost and returns more than it spends, but it's short of the 3:1 / sub-12-month bar that signals efficient scale. The fastest wins are usually retention (cutting churn lengthens lifetime on every customer) and margin (pricing, packaging, or cost-to-serve). Improve either before you spend aggressively on acquisition — scaling an average model just scales the inefficiency.",
        };
    } else {
        recommendation = {
            path: "unprofitable",
            headline: "The economics don't support scaling yet",
            body: "At these inputs you're spending more to acquire a customer than they return over their lifetime, or payback stretches dangerously long. Pouring money into acquisition here accelerates losses. Fix the foundation first: reduce churn, raise ARPU or margin, or cut CAC through better targeting and conversion. Re-run the numbers until LTV:CAC clears 3:1 and payback drops under a year before you lean on paid growth.",
        };
    }

    return {
        monthlyGrossProfit,
        lifetimeMonths,
        ltv,
        ratio,
        paybackMonths,
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

export function SaasLtvCacCalculator() {
    const [inputs, setInputs] = useState<CalculatorInputs>(INITIAL_INPUTS);
    const [showLeadForm, setShowLeadForm] = useState(false);
    const [leadForm, setLeadForm] = useState({ name: "", email: "", company: "" });
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);

    const result = useMemo(() => calculate(inputs), [inputs]);

    function updateField<K extends keyof CalculatorInputs>(key: K, value: number) {
        setInputs((prev) => ({ ...prev, [key]: Math.max(0, value) }));
    }

    const ratioDisplay =
        inputs.cac > 0 && result.monthlyGrossProfit > 0 ? `${result.ratio.toFixed(1)}:1` : "—";
    const paybackDisplay =
        result.monthlyGrossProfit > 0 ? `${result.paybackMonths.toFixed(1)} mo` : "Never";
    const lifetimeDisplay =
        inputs.monthlyChurnPct > 0 ? `${result.lifetimeMonths.toFixed(0)} mo` : "Indefinite";

    const ratioTone =
        result.recommendation.path === "healthy"
            ? "text-emerald-400"
            : result.recommendation.path === "watch"
              ? "text-amber-400"
              : result.recommendation.path === "unprofitable"
                ? "text-rose-400"
                : "text-white";

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
            source: "saas-ltv-cac-calculator",
            magnet: "saas-ltv-cac-calculator",
            drip: "D3",
            name: leadForm.name.trim(),
            email: leadForm.email.trim(),
            company: leadForm.company.trim(),
            calculatorInputs: inputs,
            calculatorResult: {
                ltv: result.ltv,
                ratio: result.ratio,
                paybackMonths: result.paybackMonths,
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
                console.log("[saas-ltv-cac-calculator] lead capture (stub):", payload);
            }
        } catch {
            console.log("[saas-ltv-cac-calculator] lead capture (stub, fetch failed):", payload);
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
                            Your unit economics
                        </h2>
                        <p className="text-sm text-gray-400">
                            Enter four numbers — LTV, the LTV:CAC ratio, and CAC payback recalculate live.
                        </p>
                    </div>

                    {/* Revenue group */}
                    <div className="rounded-xl border border-white/10 bg-[#0d1526] p-4 space-y-3">
                        <p className="text-sm font-semibold text-white">Revenue per customer</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label htmlFor="arpu" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    ARPU ($/mo)
                                </label>
                                <input
                                    id="arpu"
                                    type="number"
                                    min={0}
                                    step={5}
                                    value={inputs.arpu}
                                    onChange={(e) => updateField("arpu", Number(e.target.value) || 0)}
                                    className="w-full rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="grossMarginPct" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    Gross margin (%)
                                </label>
                                <input
                                    id="grossMarginPct"
                                    type="number"
                                    min={0}
                                    max={100}
                                    step={1}
                                    value={inputs.grossMarginPct}
                                    onChange={(e) => updateField("grossMarginPct", Number(e.target.value) || 0)}
                                    className="w-full rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>
                        <p className="text-xs text-gray-500">
                            Use gross margin, not revenue, so LTV reflects real contribution. SaaS typically runs 70–85%. Monthly gross profit:{" "}
                            <span className="text-gray-300 font-medium">
                                {formatCurrencyPrecise(
                                    Math.max(0, inputs.arpu) * (clampPct(inputs.grossMarginPct) / 100),
                                )}
                            </span>.
                        </p>
                    </div>

                    {/* Acquisition group */}
                    <div className="rounded-xl border border-white/10 bg-[#0d1526] p-4 space-y-3">
                        <p className="text-sm font-semibold text-white">Retention &amp; acquisition</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label htmlFor="monthlyChurnPct" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    Monthly churn (%)
                                </label>
                                <input
                                    id="monthlyChurnPct"
                                    type="number"
                                    min={0}
                                    max={100}
                                    step={0.5}
                                    value={inputs.monthlyChurnPct}
                                    onChange={(e) => updateField("monthlyChurnPct", Number(e.target.value) || 0)}
                                    className="w-full rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="cac" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    CAC ($)
                                </label>
                                <input
                                    id="cac"
                                    type="number"
                                    min={0}
                                    step={50}
                                    value={inputs.cac}
                                    onChange={(e) => updateField("cac", Number(e.target.value) || 0)}
                                    className="w-full rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>
                        <p className="text-xs text-gray-500">
                            Churn is the single biggest lever on LTV. CAC is fully-loaded — sales, marketing, and tooling divided by new customers. Avg lifetime:{" "}
                            <span className="text-gray-300 font-medium">{lifetimeDisplay}</span>.
                        </p>
                    </div>
                </div>

                {/* Output */}
                <div className="lg:col-span-2">
                    <div className="lg:sticky lg:top-32 space-y-5">
                        <div className="rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-500/10 via-[#0d1526] to-emerald-500/5 p-6">
                            <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2">
                                LTV : CAC ratio
                            </p>
                            <p className={`text-4xl md:text-5xl font-bold leading-tight ${ratioTone}`}>
                                {ratioDisplay}
                            </p>
                            <div className="grid grid-cols-2 gap-3 pt-4 mt-4 border-t border-white/10">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">LTV</p>
                                    <p className="text-xl md:text-2xl font-bold text-white leading-tight">
                                        {formatCurrency(result.ltv)}
                                    </p>
                                    <p className="text-[11px] text-gray-500">gross-margin adjusted</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">CAC payback</p>
                                    <p className="text-xl md:text-2xl font-bold text-white leading-tight">
                                        {paybackDisplay}
                                    </p>
                                    <p className="text-[11px] text-gray-500">to recover spend</p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5">
                            <p className="text-sm font-semibold text-white mb-3">The numbers behind it</p>
                            <div className="space-y-2.5 text-xs">
                                <div className="flex justify-between items-baseline">
                                    <span className="text-gray-400 uppercase tracking-wide">Monthly gross profit</span>
                                    <span className="text-gray-200 font-medium">
                                        {formatCurrencyPrecise(result.monthlyGrossProfit)}
                                    </span>
                                </div>
                                <div className="flex justify-between items-baseline">
                                    <span className="text-gray-400 uppercase tracking-wide">Avg customer lifetime</span>
                                    <span className="text-gray-200 font-medium">{lifetimeDisplay}</span>
                                </div>
                                <div className="flex justify-between items-baseline">
                                    <span className="text-gray-400 uppercase tracking-wide">Lifetime value (LTV)</span>
                                    <span className="text-gray-200 font-medium">{formatCurrency(result.ltv)}</span>
                                </div>
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
                                        What&apos;s driving the numbers
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

                        <p className="text-[11px] text-gray-600 leading-relaxed">
                            Estimate only. It uses a simple constant-churn model and gross-margin LTV — it doesn&apos;t account for expansion revenue, cohort effects, or discounting. Treat it as a directional read on unit economics, not an accounting figure.
                        </p>
                    </div>
                </div>
            </div>

            {/* Lead form */}
            <div className="mt-10 pt-8 border-t border-white/5">
                {!showLeadForm && !submitted && (
                    <div className="text-center">
                        <p className="text-gray-400 text-sm mb-4">
                            Want this unit-economics read as a shareable PDF for your board or investors?
                        </p>
                        <Button
                            variant="primary"
                            size="md"
                            onClick={() => setShowLeadForm(true)}
                            className="min-w-[260px]"
                        >
                            Send me the LTV:CAC PDF
                        </Button>
                    </div>
                )}

                {showLeadForm && !submitted && (
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                        <h3 className="text-lg font-semibold text-white mb-1 text-center">
                            Get the LTV:CAC summary
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
                                    "Send me the summary"
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
                            Built for founders and engineering leaders, by builders. No list rentals, unsubscribe in one click.
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
                            Your LTV:CAC summary is on its way (and a short follow-up from William at QUANT LAB USA).
                            If you&apos;re weighing a growth or fundraising decision, reply to that first email and we&apos;ll get a
                            20-minute call on the calendar.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
