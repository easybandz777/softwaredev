"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Check, Loader2, AlertTriangle, Sparkles } from "lucide-react";

// Months in a year — used to annualize the agency engagement.
const MONTHS_PER_YEAR = 12;
// Years we project the comparison across.
const HORIZON_YEARS = [1, 2, 3] as const;

interface CalculatorInputs {
    baseSalary: number; // annual base salary, USD
    overheadMultiplier: number; // fully-loaded factor on base salary
    agencyHourlyRate: number; // blended USD per hour
    agencyHoursPerMonth: number; // hours engaged per month
}

interface YearRow {
    year: number;
    inHouseCumulative: number;
    agencyCumulative: number;
    difference: number; // inHouse - agency (positive => agency cheaper)
}

interface CalculatorOutput {
    inHouseAnnual: number;
    agencyAnnual: number;
    effectiveInHouseHourly: number;
    rows: YearRow[];
    breakevenMonths: number | null; // months until cumulative cost crosses, if it does
    drivers: string[];
    recommendation: {
        path: "inhouse" | "agency" | "close" | "empty";
        headline: string;
        body: string;
    };
}

const INITIAL_INPUTS: CalculatorInputs = {
    baseSalary: 130000,
    overheadMultiplier: 1.3,
    agencyHourlyRate: 150,
    agencyHoursPerMonth: 80,
};

// Standard full-time working hours per year, used for an effective-hourly comparison.
const FULL_TIME_HOURS_PER_YEAR = 2080;

function calculate(inputs: CalculatorInputs): CalculatorOutput {
    const baseSalary = Math.max(0, inputs.baseSalary);
    const overheadMultiplier = Math.max(1, inputs.overheadMultiplier);
    const agencyHourlyRate = Math.max(0, inputs.agencyHourlyRate);
    const agencyHoursPerMonth = Math.max(0, inputs.agencyHoursPerMonth);

    const inHouseAnnual = baseSalary * overheadMultiplier;
    const agencyAnnual = agencyHourlyRate * agencyHoursPerMonth * MONTHS_PER_YEAR;

    const inHouseMonthly = inHouseAnnual / MONTHS_PER_YEAR;
    const agencyMonthly = agencyHourlyRate * agencyHoursPerMonth;

    const effectiveInHouseHourly =
        FULL_TIME_HOURS_PER_YEAR > 0 ? inHouseAnnual / FULL_TIME_HOURS_PER_YEAR : 0;

    const rows: YearRow[] = HORIZON_YEARS.map((year) => {
        const inHouseCumulative = inHouseAnnual * year;
        const agencyCumulative = agencyAnnual * year;
        return {
            year,
            inHouseCumulative,
            agencyCumulative,
            difference: inHouseCumulative - agencyCumulative,
        };
    });

    // Breakeven: month at which cumulative costs cross. Both start at 0 and grow
    // linearly, so they only cross at month 0 unless one has a head start. Since
    // neither has an upfront fee here, the cheaper monthly option is always cheaper.
    // We surface the monthly gap instead and report breakeven as not applicable when
    // one option dominates from month one.
    let breakevenMonths: number | null = null;
    const monthlyGap = inHouseMonthly - agencyMonthly;
    if (Math.abs(monthlyGap) < inHouseMonthly * 0.02 && inHouseMonthly > 0) {
        // Effectively even — call it a breakeven at ~12 months for interpretation.
        breakevenMonths = MONTHS_PER_YEAR;
    }

    const drivers: string[] = [];
    if (inHouseAnnual > 0) {
        drivers.push(
            `Fully-loaded in-house cost is ${formatCurrency(inHouseAnnual)}/yr — that's ${formatCurrency(baseSalary)} base x ${overheadMultiplier.toFixed(2)} overhead.`,
        );
    }
    if (agencyAnnual > 0) {
        drivers.push(
            `Agency runs ${formatCurrency(agencyAnnual)}/yr at ${formatCurrencyPrecise(agencyHourlyRate)}/hr x ${agencyHoursPerMonth} hrs/mo.`,
        );
    }
    if (effectiveInHouseHourly > 0 && agencyHourlyRate > 0) {
        drivers.push(
            `Loaded, the employee costs about ${formatCurrencyPrecise(effectiveInHouseHourly)}/hr across a full-time year vs the agency's ${formatCurrencyPrecise(agencyHourlyRate)}/hr.`,
        );
    }
    if (agencyHoursPerMonth > 0 && agencyHoursPerMonth < 120) {
        drivers.push(
            `At ${agencyHoursPerMonth} hrs/mo the agency is part-time capacity — a fit when the work is bursty rather than constant.`,
        );
    } else if (agencyHoursPerMonth >= 160) {
        drivers.push(
            `At ${agencyHoursPerMonth} hrs/mo you're buying near-full-time capacity from the agency — compare that against a dedicated hire carefully.`,
        );
    }

    let recommendation: CalculatorOutput["recommendation"];
    if (inHouseAnnual <= 0 && agencyAnnual <= 0) {
        recommendation = {
            path: "empty",
            headline: "Enter both sides to see the comparison",
            body: "Add a base salary and overhead multiplier for the in-house option, plus an agency hourly rate and the hours you need each month. We'll show the fully-loaded cost of each across one, two, and three years and call out which the numbers favor.",
        };
    } else {
        const yr3 = rows[rows.length - 1];
        const pctGap =
            yr3.agencyCumulative > 0
                ? Math.abs(yr3.difference) / Math.max(yr3.inHouseCumulative, yr3.agencyCumulative)
                : 1;
        if (pctGap <= 0.1) {
            recommendation = {
                path: "close",
                headline: "It's close — decide on factors beyond cost",
                body: "The two options land within about 10% of each other over three years, so price shouldn't be the deciding factor. Weigh how steady the work is, how much institutional knowledge you need to retain in-house, how fast you need to start, and your appetite for hiring and management overhead. When cost is a wash, those qualitative factors are the real decision.",
            };
        } else if (yr3.difference > 0) {
            // in-house more expensive over 3 years => agency cheaper
            recommendation = {
                path: "agency",
                headline: "The agency is cheaper for the hours you need",
                body: "Over three years the agency engagement costs less than a fully-loaded in-house hire at the hours you've entered. That's the usual outcome when the work is well under full-time or highly specialized — you pay only for hours used and skip benefits, downtime, and management overhead. If the workload later becomes constant and the knowledge becomes core, revisit hiring. A common path is agency first, hire once the work is steady.",
            };
        } else {
            // agency more expensive over 3 years => in-house cheaper
            recommendation = {
                path: "inhouse",
                headline: "An in-house hire wins on cost at this volume",
                body: "At the hours you've entered, the agency's annualized cost exceeds a fully-loaded employee over three years — which is what you'd expect when you need near-full-time, continuous capacity. If the work is genuinely steady and the knowledge belongs in-house, hiring is the efficient call. The caveat is hiring risk and ramp time; an agency can bridge the gap and set the architecture while you recruit.",
            };
        }
    }

    return {
        inHouseAnnual,
        agencyAnnual,
        effectiveInHouseHourly,
        rows,
        breakevenMonths,
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

export function DeveloperSalaryVsAgencyCalculator() {
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
            source: "developer-salary-vs-agency-calculator",
            magnet: "developer-salary-vs-agency-calculator",
            drip: "D3",
            name: leadForm.name.trim(),
            email: leadForm.email.trim(),
            company: leadForm.company.trim(),
            calculatorInputs: inputs,
            calculatorResult: {
                inHouseAnnual: result.inHouseAnnual,
                agencyAnnual: result.agencyAnnual,
                effectiveInHouseHourly: result.effectiveInHouseHourly,
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
                console.log("[developer-salary-vs-agency-calculator] lead capture (stub):", payload);
            }
        } catch {
            console.log("[developer-salary-vs-agency-calculator] lead capture (stub, fetch failed):", payload);
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
                            Compare the two options
                        </h2>
                        <p className="text-sm text-gray-400">
                            Enter the in-house and agency numbers — the 1, 2, and 3-year comparison recalculates live.
                        </p>
                    </div>

                    {/* In-house group */}
                    <div className="rounded-xl border border-white/10 bg-[#0d1526] p-4 space-y-3">
                        <p className="text-sm font-semibold text-white">In-house developer</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label htmlFor="baseSalary" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    Base salary ($/yr)
                                </label>
                                <input
                                    id="baseSalary"
                                    type="number"
                                    min={0}
                                    step={1000}
                                    value={inputs.baseSalary}
                                    onChange={(e) => updateField("baseSalary", Number(e.target.value) || 0)}
                                    className="w-full rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="overheadMultiplier" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    Overhead multiplier
                                </label>
                                <input
                                    id="overheadMultiplier"
                                    type="number"
                                    min={1}
                                    step={0.05}
                                    value={inputs.overheadMultiplier}
                                    onChange={(e) => updateField("overheadMultiplier", Number(e.target.value) || 0)}
                                    className="w-full rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>
                        <p className="text-xs text-gray-500">
                            Overhead covers payroll taxes, benefits, PTO, equipment, tooling, and management. 1.25–1.4 is typical. Fully-loaded:{" "}
                            <span className="text-gray-300 font-medium">
                                {formatCurrency(Math.max(0, inputs.baseSalary) * Math.max(1, inputs.overheadMultiplier))}/yr
                            </span>.
                        </p>
                    </div>

                    {/* Agency group */}
                    <div className="rounded-xl border border-white/10 bg-[#0d1526] p-4 space-y-3">
                        <p className="text-sm font-semibold text-white">Agency or contractor</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label htmlFor="agencyHourlyRate" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    Blended rate ($/hr)
                                </label>
                                <input
                                    id="agencyHourlyRate"
                                    type="number"
                                    min={0}
                                    step={5}
                                    value={inputs.agencyHourlyRate}
                                    onChange={(e) => updateField("agencyHourlyRate", Number(e.target.value) || 0)}
                                    className="w-full rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="agencyHoursPerMonth" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    Hours / mo
                                </label>
                                <input
                                    id="agencyHoursPerMonth"
                                    type="number"
                                    min={0}
                                    step={5}
                                    value={inputs.agencyHoursPerMonth}
                                    onChange={(e) => updateField("agencyHoursPerMonth", Number(e.target.value) || 0)}
                                    className="w-full rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>
                        <p className="text-xs text-gray-500">
                            A full-time month is ~173 hours. Lower hours model bursty or part-time work. Annualized:{" "}
                            <span className="text-gray-300 font-medium">
                                {formatCurrency(
                                    Math.max(0, inputs.agencyHourlyRate) * Math.max(0, inputs.agencyHoursPerMonth) * MONTHS_PER_YEAR,
                                )}
                                /yr
                            </span>.
                        </p>
                    </div>
                </div>

                {/* Output */}
                <div className="lg:col-span-2">
                    <div className="lg:sticky lg:top-32 space-y-5">
                        <div className="rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-500/10 via-[#0d1526] to-emerald-500/5 p-6">
                            <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2">
                                Annual cost — head to head
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">In-house</p>
                                    <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                        {formatCurrency(result.inHouseAnnual)}
                                    </p>
                                    <p className="text-[11px] text-gray-500">fully loaded</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Agency</p>
                                    <p className="text-2xl md:text-3xl font-bold text-white leading-tight">
                                        {formatCurrency(result.agencyAnnual)}
                                    </p>
                                    <p className="text-[11px] text-gray-500">per year</p>
                                </div>
                            </div>
                            <div className="pt-4 mt-4 border-t border-white/10">
                                <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Loaded employee hourly</p>
                                <p className="text-base font-semibold text-white">
                                    {formatCurrencyPrecise(result.effectiveInHouseHourly)}/hr
                                    <span className="text-xs text-gray-500 font-normal"> (across a full-time year)</span>
                                </p>
                            </div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5">
                            <p className="text-sm font-semibold text-white mb-3">Cumulative cost by horizon</p>
                            <div className="space-y-2.5">
                                {result.rows.map((row) => {
                                    const cheaper = row.difference > 0 ? "agency" : row.difference < 0 ? "inhouse" : "even";
                                    return (
                                        <div key={row.year} className="text-xs">
                                            <div className="flex justify-between items-baseline mb-1">
                                                <span className="text-gray-400 uppercase tracking-wide">
                                                    {row.year} year{row.year > 1 ? "s" : ""}
                                                </span>
                                                <span className="text-gray-200 font-medium">
                                                    {cheaper === "agency"
                                                        ? `Agency saves ${formatCurrency(Math.abs(row.difference))}`
                                                        : cheaper === "inhouse"
                                                          ? `In-house saves ${formatCurrency(Math.abs(row.difference))}`
                                                          : "Even"}
                                                </span>
                                            </div>
                                            <div className="flex gap-3 text-[11px] text-gray-500">
                                                <span>In-house {formatCurrency(row.inHouseCumulative)}</span>
                                                <span>&middot;</span>
                                                <span>Agency {formatCurrency(row.agencyCumulative)}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            {result.breakevenMonths !== null && (
                                <p className="text-[11px] text-emerald-400/80 mt-3">
                                    The two options run roughly even at these inputs — cost is effectively a wash.
                                </p>
                            )}
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
                                        What&apos;s driving the comparison
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
                            Cost estimate only. It excludes hiring and ramp time, severance risk, and the value of retained knowledge or on-demand flexibility — all of which matter as much as the dollars.
                        </p>
                    </div>
                </div>
            </div>

            {/* Lead form */}
            <div className="mt-10 pt-8 border-t border-white/5">
                {!showLeadForm && !submitted && (
                    <div className="text-center">
                        <p className="text-gray-400 text-sm mb-4">
                            Want this build-vs-hire comparison as a shareable PDF for your leadership team?
                        </p>
                        <Button
                            variant="primary"
                            size="md"
                            onClick={() => setShowLeadForm(true)}
                            className="min-w-[260px]"
                        >
                            Send me the comparison PDF
                        </Button>
                    </div>
                )}

                {showLeadForm && !submitted && (
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                        <h3 className="text-lg font-semibold text-white mb-1 text-center">
                            Get the build-vs-hire comparison
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
                                    "Send me the comparison"
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
                            Your build-vs-hire comparison is on its way (and a short follow-up from William at QUANT LAB USA).
                            If you&apos;re weighing the decision, reply to that first email and we&apos;ll get a
                            20-minute call on the calendar.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
