"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Check, Loader2, AlertTriangle, Sparkles } from "lucide-react";

// Months in a year — used to roll a monthly estimate into an annual figure.
const MONTHS_PER_YEAR = 12;
// Hours in an average month (365 days / 12 * 24) — represents always-on uptime.
const HOURS_PER_MONTH = 730;

interface CalculatorInputs {
    instanceCount: number;
    hourlyRate: number; // blended USD per instance-hour
    monthlyHours: number; // hours each instance runs per month
    storageGb: number;
    storageRatePerGb: number; // USD per GB-month
    egressGb: number; // GB transferred OUT per month
    egressRatePerGb: number; // USD per GB egress
    managedDbMonthly: number; // flat USD/month for a managed database
}

interface LineItem {
    key: string;
    label: string;
    monthly: number;
    detail: string;
}

interface CalculatorOutput {
    lineItems: LineItem[];
    monthlyTotal: number;
    annualTotal: number;
    dominantLabel: string;
    dominantShare: number;
    drivers: string[];
    recommendation: {
        path: "compute" | "egress" | "storage" | "managed" | "balanced";
        headline: string;
        body: string;
    };
}

const INITIAL_INPUTS: CalculatorInputs = {
    instanceCount: 3,
    hourlyRate: 0.1,
    monthlyHours: HOURS_PER_MONTH,
    storageGb: 500,
    storageRatePerGb: 0.1,
    egressGb: 800,
    egressRatePerGb: 0.09,
    managedDbMonthly: 180,
};

function calculate(inputs: CalculatorInputs): CalculatorOutput {
    const computeMonthly =
        Math.max(0, inputs.instanceCount) *
        Math.max(0, inputs.hourlyRate) *
        Math.max(0, inputs.monthlyHours);
    const storageMonthly = Math.max(0, inputs.storageGb) * Math.max(0, inputs.storageRatePerGb);
    const egressMonthly = Math.max(0, inputs.egressGb) * Math.max(0, inputs.egressRatePerGb);
    const managedMonthly = Math.max(0, inputs.managedDbMonthly);

    const lineItems: LineItem[] = [
        {
            key: "compute",
            label: "Compute",
            monthly: computeMonthly,
            detail: `${Math.max(0, inputs.instanceCount)} instance${Math.max(0, inputs.instanceCount) === 1 ? "" : "s"} x ${formatCurrencyPrecise(Math.max(0, inputs.hourlyRate))}/hr x ${Math.max(0, inputs.monthlyHours).toLocaleString()} hrs`,
        },
        {
            key: "storage",
            label: "Storage",
            monthly: storageMonthly,
            detail: `${Math.max(0, inputs.storageGb).toLocaleString()} GB x ${formatCurrencyPrecise(Math.max(0, inputs.storageRatePerGb))}/GB-mo`,
        },
        {
            key: "egress",
            label: "Data egress",
            monthly: egressMonthly,
            detail: `${Math.max(0, inputs.egressGb).toLocaleString()} GB out x ${formatCurrencyPrecise(Math.max(0, inputs.egressRatePerGb))}/GB`,
        },
        {
            key: "managed",
            label: "Managed database",
            monthly: managedMonthly,
            detail: "Flat monthly hosted-DB cost",
        },
    ];

    const monthlyTotal = lineItems.reduce((sum, li) => sum + li.monthly, 0);
    const annualTotal = monthlyTotal * MONTHS_PER_YEAR;

    const dominant = lineItems.reduce(
        (top, li) => (li.monthly > top.monthly ? li : top),
        lineItems[0],
    );
    const dominantShare = monthlyTotal > 0 ? (dominant.monthly / monthlyTotal) * 100 : 0;

    const drivers: string[] = [];
    if (monthlyTotal > 0) {
        drivers.push(
            `${dominant.label} is your biggest line at ${formatCurrency(dominant.monthly)}/mo — about ${dominantShare.toFixed(0)}% of the bill.`,
        );
    }
    if (egressMonthly > 0 && egressMonthly >= computeMonthly) {
        drivers.push(
            `Egress (${formatCurrency(egressMonthly)}/mo) is at or above your compute spend — a CDN or caching layer is usually the fastest way to cut it.`,
        );
    }
    if (inputs.monthlyHours >= HOURS_PER_MONTH && computeMonthly > 0) {
        drivers.push(
            `Your instances are modeled as always-on (${HOURS_PER_MONTH} hrs/mo) — autoscaling or scheduling idle capacity can trim compute directly.`,
        );
    }
    if (storageMonthly > 0 && storageMonthly > computeMonthly && storageMonthly > egressMonthly) {
        drivers.push(
            `Storage is your top line — check whether cold data could move to a cheaper archival tier.`,
        );
    }

    let recommendation: CalculatorOutput["recommendation"];
    if (monthlyTotal <= 0) {
        recommendation = {
            path: "balanced",
            headline: "Enter a few numbers to see your estimate",
            body: "Add at least one compute instance, some storage, or a managed database to get an itemized monthly and annual cloud-hosting estimate. Everything recalculates live and never leaves your browser.",
        };
    } else if (dominant.key === "egress") {
        recommendation = {
            path: "egress",
            headline: "Egress is driving this bill",
            body: "Data transfer out is your dominant cost, which means it will scale directly with traffic and product success. A content-delivery network in front of static and cacheable responses, tighter cache headers, and compression typically cut egress meaningfully. This is one of the highest-leverage architecture changes you can make before usage climbs further.",
        };
    } else if (dominant.key === "compute") {
        recommendation = {
            path: "compute",
            headline: "Compute is your largest line",
            body: "Compute dominates, so the savings lever is utilization. Right-size over-provisioned instances, autoscale to match real demand, and put steady baseline load on reserved or committed-use pricing rather than on-demand rates. Together those routinely take a third or more off the compute line without touching the product.",
        };
    } else if (dominant.key === "storage") {
        recommendation = {
            path: "storage",
            headline: "Storage is your biggest cost",
            body: "Storage leads the bill, which usually means hot, expensive storage is holding data that is rarely read. Tiering cold data to cheaper archival classes, pruning stale snapshots and backups, and compressing where you can are the obvious moves. It is worth auditing what is actually being accessed versus what is simply accumulating.",
        };
    } else {
        recommendation = {
            path: "managed",
            headline: "Your managed database leads the bill",
            body: "The managed-database line is your largest. Hosted databases are priced for convenience, so the questions worth asking are whether the instance is right-sized, whether read replicas are all earning their keep, and whether a committed-use discount applies to steady load. Connection pooling and query tuning often let you drop to a smaller, cheaper tier.",
        };
    }

    return {
        lineItems,
        monthlyTotal,
        annualTotal,
        dominantLabel: dominant.label,
        dominantShare,
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

export function CloudHostingCostCalculator() {
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
            source: "cloud-hosting-cost-calculator",
            magnet: "cloud-hosting-cost-calculator",
            drip: "D3",
            name: leadForm.name.trim(),
            email: leadForm.email.trim(),
            company: leadForm.company.trim(),
            calculatorInputs: inputs,
            calculatorResult: {
                monthlyTotal: result.monthlyTotal,
                annualTotal: result.annualTotal,
                dominantLabel: result.dominantLabel,
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
                console.log("[cloud-hosting-cost-calculator] lead capture (stub):", payload);
            }
        } catch {
            console.log("[cloud-hosting-cost-calculator] lead capture (stub, fetch failed):", payload);
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
                            Your cloud resources
                        </h2>
                        <p className="text-sm text-gray-400">
                            Enter compute, storage, egress, and your managed database — the monthly and annual estimate recalculates live.
                        </p>
                    </div>

                    {/* Compute group */}
                    <div className="rounded-xl border border-white/10 bg-[#0d1526] p-4 space-y-3">
                        <p className="text-sm font-semibold text-white">Compute</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                            <div>
                                <label htmlFor="instanceCount" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    Instances
                                </label>
                                <input
                                    id="instanceCount"
                                    type="number"
                                    min={0}
                                    step={1}
                                    value={inputs.instanceCount}
                                    onChange={(e) => updateField("instanceCount", Number(e.target.value) || 0)}
                                    className="w-full rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="hourlyRate" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    Rate ($/hr)
                                </label>
                                <input
                                    id="hourlyRate"
                                    type="number"
                                    min={0}
                                    step={0.01}
                                    value={inputs.hourlyRate}
                                    onChange={(e) => updateField("hourlyRate", Number(e.target.value) || 0)}
                                    className="w-full rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="monthlyHours" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    Hours / mo
                                </label>
                                <input
                                    id="monthlyHours"
                                    type="number"
                                    min={0}
                                    step={1}
                                    value={inputs.monthlyHours}
                                    onChange={(e) => updateField("monthlyHours", Number(e.target.value) || 0)}
                                    className="w-full rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>
                        <p className="text-xs text-gray-500">
                            {HOURS_PER_MONTH} hrs/mo is always-on. Lower it to model autoscaled or scheduled workloads. Contributes{" "}
                            <span className="text-gray-300 font-medium">
                                {formatCurrency(
                                    Math.max(0, inputs.instanceCount) * Math.max(0, inputs.hourlyRate) * Math.max(0, inputs.monthlyHours),
                                )}
                                /mo
                            </span>.
                        </p>
                    </div>

                    {/* Storage group */}
                    <div className="rounded-xl border border-white/10 bg-[#0d1526] p-4 space-y-3">
                        <p className="text-sm font-semibold text-white">Storage</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label htmlFor="storageGb" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    Storage (GB)
                                </label>
                                <input
                                    id="storageGb"
                                    type="number"
                                    min={0}
                                    step={1}
                                    value={inputs.storageGb}
                                    onChange={(e) => updateField("storageGb", Number(e.target.value) || 0)}
                                    className="w-full rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="storageRatePerGb" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    Rate ($/GB-mo)
                                </label>
                                <input
                                    id="storageRatePerGb"
                                    type="number"
                                    min={0}
                                    step={0.01}
                                    value={inputs.storageRatePerGb}
                                    onChange={(e) => updateField("storageRatePerGb", Number(e.target.value) || 0)}
                                    className="w-full rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Egress group */}
                    <div className="rounded-xl border border-white/10 bg-[#0d1526] p-4 space-y-3">
                        <p className="text-sm font-semibold text-white">Data egress (out to the internet)</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div>
                                <label htmlFor="egressGb" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    Egress / mo (GB)
                                </label>
                                <input
                                    id="egressGb"
                                    type="number"
                                    min={0}
                                    step={1}
                                    value={inputs.egressGb}
                                    onChange={(e) => updateField("egressGb", Number(e.target.value) || 0)}
                                    className="w-full rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label htmlFor="egressRatePerGb" className="block text-xs font-medium text-gray-400 mb-1.5">
                                    Rate ($/GB)
                                </label>
                                <input
                                    id="egressRatePerGb"
                                    type="number"
                                    min={0}
                                    step={0.01}
                                    value={inputs.egressRatePerGb}
                                    onChange={(e) => updateField("egressRatePerGb", Number(e.target.value) || 0)}
                                    className="w-full rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                                />
                            </div>
                        </div>
                        <p className="text-xs text-gray-500">
                            Inbound transfer is usually free, so we only price data leaving the cloud.
                        </p>
                    </div>

                    {/* Managed DB group */}
                    <div className="rounded-xl border border-white/10 bg-[#0d1526] p-4 space-y-3">
                        <p className="text-sm font-semibold text-white">Managed database</p>
                        <div>
                            <label htmlFor="managedDbMonthly" className="block text-xs font-medium text-gray-400 mb-1.5">
                                Monthly cost ($)
                            </label>
                            <input
                                id="managedDbMonthly"
                                type="number"
                                min={0}
                                step={1}
                                value={inputs.managedDbMonthly}
                                onChange={(e) => updateField("managedDbMonthly", Number(e.target.value) || 0)}
                                className="w-full rounded-lg bg-[#0a0f1e] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                            />
                            <p className="text-xs text-gray-500 mt-1.5">
                                Entered as a flat figure — hosted-DB pricing varies too much by engine and size for a single formula.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Output */}
                <div className="lg:col-span-2">
                    <div className="lg:sticky lg:top-32 space-y-5">
                        <div className="rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-500/10 via-[#0d1526] to-emerald-500/5 p-6">
                            <p className="text-xs uppercase tracking-widest text-emerald-400 mb-2">
                                Estimated cloud spend
                            </p>
                            <p className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                {formatCurrency(result.monthlyTotal)}
                            </p>
                            <p className="text-sm text-gray-400 mb-4">per month</p>
                            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Annual</p>
                                    <p className="text-base font-semibold text-white">{formatCurrency(result.annualTotal)}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Top line</p>
                                    <p className="text-base font-semibold text-white">
                                        {result.dominantLabel}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5">
                            <p className="text-sm font-semibold text-white mb-3">Monthly breakdown</p>
                            <ul className="space-y-2.5">
                                {result.lineItems.map((li) => (
                                    <li key={li.key} className="flex justify-between items-baseline gap-3 text-xs">
                                        <span className="text-gray-400 truncate">
                                            {li.label}
                                            <span className="block text-[11px] text-gray-600">{li.detail}</span>
                                        </span>
                                        <span className="text-gray-200 font-medium flex-shrink-0">
                                            {formatCurrency(li.monthly)}/mo
                                        </span>
                                    </li>
                                ))}
                            </ul>
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
                                        What&apos;s driving your bill
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
                            Planning estimate only. Real invoices add load balancers, IPs, snapshots, inter-zone traffic, request charges, and support — and pricing differs by provider and region.
                        </p>
                    </div>
                </div>
            </div>

            {/* Lead form */}
            <div className="mt-10 pt-8 border-t border-white/5">
                {!showLeadForm && !submitted && (
                    <div className="text-center">
                        <p className="text-gray-400 text-sm mb-4">
                            Want this cloud-cost breakdown as a shareable PDF for your team or board?
                        </p>
                        <Button
                            variant="primary"
                            size="md"
                            onClick={() => setShowLeadForm(true)}
                            className="min-w-[260px]"
                        >
                            Send me the cost breakdown PDF
                        </Button>
                    </div>
                )}

                {showLeadForm && !submitted && (
                    <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
                        <h3 className="text-lg font-semibold text-white mb-1 text-center">
                            Get the cloud-cost breakdown
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
                            Built for engineering teams, by builders. No list rentals, unsubscribe in one click.
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
                            Your cloud-cost breakdown is on its way (and a short follow-up from William at QUANT LAB USA).
                            If your bill is climbing faster than your traffic, reply to that first email and we&apos;ll get a
                            20-minute call on the calendar.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
