"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Clock, Copy, Check, AlertTriangle, Sparkles } from "lucide-react";
import { humanize, nextRuns } from "@/lib/tools/cron";

type Mode = "preset" | "build" | "raw";

const PRESETS: Array<{ label: string; expr: string; note: string }> = [
    { label: "Every minute", expr: "* * * * *", note: "Useful for development heartbeats." },
    { label: "Every 5 minutes", expr: "*/5 * * * *", note: "Cheap polling cadence." },
    { label: "Every 15 minutes", expr: "*/15 * * * *", note: "Common queue processor cadence." },
    { label: "Hourly (on the hour)", expr: "0 * * * *", note: "Standard hourly job." },
    { label: "Every 6 hours", expr: "0 */6 * * *", note: "00:00, 06:00, 12:00, 18:00." },
    { label: "Daily at 9 AM", expr: "0 9 * * *", note: "Morning daily report." },
    { label: "Daily at midnight", expr: "0 0 * * *", note: "Classic nightly job." },
    { label: "Every weekday at 5 PM", expr: "0 17 * * MON-FRI", note: "End-of-business jobs." },
    { label: "Monday at 9 AM", expr: "0 9 * * MON", note: "Weekly Monday report." },
    { label: "1st of every month, midnight", expr: "0 0 1 * *", note: "Monthly billing rollup." },
    { label: "15th of every month, noon", expr: "0 12 15 * *", note: "Mid-month payroll." },
    { label: "Jan 1 at midnight", expr: "0 0 1 1 *", note: "Annual job." },
];

export function CronBuilder() {
    const [mode, setMode] = useState<Mode>("build");
    const [minute, setMinute] = useState("0");
    const [hour, setHour] = useState("9");
    const [dayOfMonth, setDayOfMonth] = useState("*");
    const [month, setMonth] = useState("*");
    const [dayOfWeek, setDayOfWeek] = useState("*");
    const [raw, setRaw] = useState("0 9 * * *");
    const [copied, setCopied] = useState(false);

    const expr = useMemo(() => {
        if (mode === "raw") return raw.trim();
        return [minute, hour, dayOfMonth, month, dayOfWeek].join(" ");
    }, [mode, minute, hour, dayOfMonth, month, dayOfWeek, raw]);

    const human = useMemo(() => humanize(expr), [expr]);

    const fireTimes = useMemo(() => {
        try {
            return { runs: nextRuns(expr, 5), error: null as string | null };
        } catch (e) {
            return { runs: [] as Date[], error: e instanceof Error ? e.message : "Invalid cron" };
        }
    }, [expr]);

    function applyPreset(presetExpr: string) {
        const parts = presetExpr.split(/\s+/);
        if (parts.length === 5) {
            setMinute(parts[0]);
            setHour(parts[1]);
            setDayOfMonth(parts[2]);
            setMonth(parts[3]);
            setDayOfWeek(parts[4]);
            setRaw(presetExpr);
            setMode("build");
        }
    }

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(expr);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    }

    return (
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md p-6 md:p-10 shadow-[0_0_60px_rgba(56,189,248,0.05)]">
            <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
                {(
                    [
                        ["build", "Visual builder"],
                        ["preset", "Presets"],
                        ["raw", "Raw expression"],
                    ] as const
                ).map(([key, label]) => (
                    <button
                        key={key}
                        type="button"
                        onClick={() => setMode(key)}
                        className={`text-xs rounded-full px-3 py-1.5 border transition-colors ${
                            mode === key
                                ? "border-sky-400/50 bg-sky-400/10 text-white"
                                : "border-white/10 bg-[#0d1526] text-gray-400 hover:text-white"
                        }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 space-y-5">
                    {mode === "build" && (
                        <div className="space-y-4">
                            <Picker
                                id="cron-minute"
                                label="Minute (0-59)"
                                value={minute}
                                onChange={setMinute}
                                placeholder="* or 0 or */15"
                            />
                            <Picker
                                id="cron-hour"
                                label="Hour (0-23)"
                                value={hour}
                                onChange={setHour}
                                placeholder="* or 9 or */6"
                            />
                            <Picker
                                id="cron-dom"
                                label="Day of month (1-31)"
                                value={dayOfMonth}
                                onChange={setDayOfMonth}
                                placeholder="* or 1 or 1,15"
                            />
                            <Picker
                                id="cron-month"
                                label="Month (1-12 or JAN-DEC)"
                                value={month}
                                onChange={setMonth}
                                placeholder="* or 1 or JAN,JUL"
                            />
                            <Picker
                                id="cron-dow"
                                label="Day of week (0-6 = Sun-Sat, or MON-FRI)"
                                value={dayOfWeek}
                                onChange={setDayOfWeek}
                                placeholder="* or MON-FRI or 1,3,5"
                            />
                        </div>
                    )}

                    {mode === "preset" && (
                        <div className="space-y-2">
                            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                                Click a preset to load it into the builder
                            </p>
                            {PRESETS.map((p) => (
                                <button
                                    key={p.expr}
                                    type="button"
                                    onClick={() => applyPreset(p.expr)}
                                    className="w-full text-left rounded-lg border border-white/10 bg-[#0d1526] hover:border-sky-400/30 hover:bg-[#0d1526]/80 transition-colors p-3"
                                >
                                    <div className="flex items-baseline justify-between gap-3">
                                        <span className="text-sm font-semibold text-white">
                                            {p.label}
                                        </span>
                                        <span className="font-mono text-xs text-sky-300">{p.expr}</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-1">{p.note}</p>
                                </button>
                            ))}
                        </div>
                    )}

                    {mode === "raw" && (
                        <div className="space-y-2">
                            <label
                                htmlFor="cron-raw"
                                className="block text-sm font-medium text-gray-300"
                            >
                                Raw cron expression
                            </label>
                            <input
                                id="cron-raw"
                                type="text"
                                value={raw}
                                onChange={(e) => setRaw(e.target.value)}
                                spellCheck={false}
                                className="w-full font-mono text-base rounded-lg bg-[#0d1526] border border-white/10 px-4 py-3 text-white focus:border-sky-400 focus:outline-none transition-colors"
                                placeholder="0 9 * * MON-FRI"
                            />
                            <p className="text-xs text-gray-500">
                                Five fields: minute hour day-of-month month day-of-week. Use *, ranges
                                (1-5), lists (1,15), or steps (*/15).
                            </p>
                        </div>
                    )}
                </div>

                <div className="lg:col-span-2">
                    <div className="lg:sticky lg:top-32 space-y-4">
                        <div className="rounded-xl border border-sky-400/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-5">
                            <div className="flex items-center justify-between mb-3">
                                <p className="text-xs uppercase tracking-widest text-emerald-400 inline-flex items-center gap-2">
                                    <Clock className="w-3.5 h-3.5" /> Cron expression
                                </p>
                                <button
                                    type="button"
                                    onClick={handleCopy}
                                    className="text-xs text-sky-400 hover:text-sky-300 inline-flex items-center gap-1"
                                >
                                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                    {copied ? "Copied" : "Copy"}
                                </button>
                            </div>
                            <p className="font-mono text-lg md:text-2xl font-bold text-white break-all">
                                {expr || <span className="text-gray-600">enter values</span>}
                            </p>
                            <div className="mt-3 pt-3 border-t border-white/5 flex items-start gap-2">
                                <Sparkles className="w-3.5 h-3.5 text-sky-400 mt-0.5 flex-shrink-0" />
                                <p className="text-xs text-gray-300 leading-relaxed">{human}</p>
                            </div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5">
                            <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                                Next 5 fire times (local)
                            </p>
                            {fireTimes.error ? (
                                <div className="flex items-start gap-2 text-rose-400 text-xs">
                                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                                    <span>{fireTimes.error}</span>
                                </div>
                            ) : fireTimes.runs.length === 0 ? (
                                <p className="text-xs text-gray-500">
                                    No matching runs in the next 4 years — your expression may be too
                                    restrictive (e.g. Feb 30).
                                </p>
                            ) : (
                                <ol className="space-y-1.5">
                                    {fireTimes.runs.map((d) => (
                                        <li key={d.getTime()} className="font-mono text-xs text-gray-300">
                                            {d.toLocaleString(undefined, {
                                                weekday: "short",
                                                year: "numeric",
                                                month: "short",
                                                day: "2-digit",
                                                hour: "2-digit",
                                                minute: "2-digit",
                                            })}
                                        </li>
                                    ))}
                                </ol>
                            )}
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5">
                            <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                                Wildcards cheatsheet
                            </p>
                            <ul className="text-xs text-gray-400 leading-relaxed space-y-1">
                                <li><span className="font-mono text-sky-300">*</span> — every value</li>
                                <li><span className="font-mono text-sky-300">5</span> — exactly 5</li>
                                <li><span className="font-mono text-sky-300">1-5</span> — 1 through 5</li>
                                <li><span className="font-mono text-sky-300">1,3,5</span> — list</li>
                                <li><span className="font-mono text-sky-300">*/15</span> — every 15</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-3">
                <Button
                    type="button"
                    variant="primary"
                    size="md"
                    onClick={handleCopy}
                    disabled={!!fireTimes.error}
                >
                    <Copy className="w-4 h-4" /> {copied ? "Copied!" : "Copy expression"}
                </Button>
                <Button
                    type="button"
                    variant="ghost"
                    size="md"
                    onClick={() => applyPreset("0 9 * * *")}
                >
                    Reset to daily 9 AM
                </Button>
            </div>
        </div>
    );
}

function Picker({
    id,
    label,
    value,
    onChange,
    placeholder,
}: {
    id: string;
    label: string;
    value: string;
    onChange: (v: string) => void;
    placeholder?: string;
}) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium text-gray-300 mb-2">
                {label}
            </label>
            <input
                id={id}
                type="text"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                spellCheck={false}
                className="w-full font-mono text-sm rounded-lg bg-[#0d1526] border border-white/10 px-3 py-2 text-white focus:border-sky-400 focus:outline-none transition-colors"
            />
        </div>
    );
}
