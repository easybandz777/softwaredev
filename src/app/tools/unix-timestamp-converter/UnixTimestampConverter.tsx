"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Copy, Check, Clock, AlertTriangle, RefreshCw } from "lucide-react";

type Unit = "s" | "ms";

function pad(n: number, width = 2): string {
    return String(n).padStart(width, "0");
}

// Build a human-readable string from a Date in either UTC or local time,
// without pulling in any formatting library.
function formatParts(date: Date, mode: "utc" | "local") {
    const get = (key: "FullYear" | "Month" | "Date" | "Hours" | "Minutes" | "Seconds") =>
        mode === "utc"
            ? (date[`getUTC${key}` as const]() as number)
            : (date[`get${key}` as const]() as number);

    const year = get("FullYear");
    const month = get("Month") + 1;
    const day = get("Date");
    const hours = get("Hours");
    const minutes = get("Minutes");
    const seconds = get("Seconds");

    const iso =
        mode === "utc"
            ? date.toISOString()
            : `${year}-${pad(month)}-${pad(day)}T${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

    const human = `${year}-${pad(month)}-${pad(day)} ${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    return { iso, human };
}

function relativeFromNow(ms: number): string {
    const diff = ms - Date.now();
    const abs = Math.abs(diff);
    const units: [number, string][] = [
        [1000 * 60 * 60 * 24 * 365, "year"],
        [1000 * 60 * 60 * 24 * 30, "month"],
        [1000 * 60 * 60 * 24, "day"],
        [1000 * 60 * 60, "hour"],
        [1000 * 60, "minute"],
        [1000, "second"],
    ];
    for (const [unitMs, label] of units) {
        if (abs >= unitMs || label === "second") {
            const value = Math.round(abs / unitMs);
            const plural = value === 1 ? label : `${label}s`;
            return diff >= 0 ? `in ${value} ${plural}` : `${value} ${plural} ago`;
        }
    }
    return "just now";
}

function CopyRow({ label, value }: { label: string; value: string }) {
    const [copied, setCopied] = useState(false);
    async function copy() {
        try {
            await navigator.clipboard.writeText(value);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            setCopied(false);
        }
    }
    return (
        <div className="flex items-center justify-between gap-3 rounded-lg border border-white/10 bg-[#0d1526]/60 px-4 py-3">
            <div className="min-w-0">
                <p className="text-xs uppercase tracking-wide text-gray-500">{label}</p>
                <p className="truncate font-mono text-sm text-sky-200">{value}</p>
            </div>
            <button
                type="button"
                onClick={copy}
                className="inline-flex flex-shrink-0 items-center gap-1 text-xs text-sky-400 hover:text-sky-300"
            >
                {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                {copied ? "Copied" : "Copy"}
            </button>
        </div>
    );
}

export function UnixTimestampConverter() {
    const [now, setNow] = useState(() => Date.now());

    // Live clock ticking once per second.
    useEffect(() => {
        const id = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(id);
    }, []);

    const [tsInput, setTsInput] = useState("");
    const [unit, setUnit] = useState<Unit>("s");
    const [dateInput, setDateInput] = useState("");

    // Timestamp -> date
    const tsResult = useMemo(() => {
        const trimmed = tsInput.trim();
        if (!trimmed) return null;
        if (!/^-?\d+$/.test(trimmed)) {
            return { error: "Enter a whole number of seconds or milliseconds." };
        }
        const raw = Number(trimmed);
        if (!Number.isFinite(raw)) return { error: "That number is out of range." };
        const ms = unit === "s" ? raw * 1000 : raw;
        const date = new Date(ms);
        if (Number.isNaN(date.getTime())) {
            return { error: "That value does not map to a valid date." };
        }
        return {
            ms,
            utc: formatParts(date, "utc"),
            local: formatParts(date, "local"),
            relative: relativeFromNow(ms),
        };
    }, [tsInput, unit]);

    // Date -> timestamp (input is interpreted as local time, like datetime-local)
    const dateResult = useMemo(() => {
        if (!dateInput) return null;
        const ms = new Date(dateInput).getTime();
        if (Number.isNaN(ms)) {
            return { error: "Pick a valid date and time." };
        }
        return {
            seconds: Math.floor(ms / 1000),
            millis: ms,
        };
    }, [dateInput]);

    const nowDate = new Date(now);

    return (
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md p-6 md:p-10 shadow-[0_0_60px_rgba(56,189,248,0.05)]">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white/10 bg-[#0d1526]/60 px-4 py-3">
                <div className="flex items-center gap-2 text-sm text-gray-300">
                    <Clock className="h-4 w-4 text-sky-400" />
                    <span className="text-xs uppercase tracking-wide text-gray-500">Current time</span>
                </div>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-mono text-xs text-sky-200">
                    <span>{Math.floor(now / 1000)} s</span>
                    <span className="text-gray-500">·</span>
                    <span>{now} ms</span>
                    <span className="text-gray-500">·</span>
                    <span>{formatParts(nowDate, "utc").human} UTC</span>
                </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-2">
                <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-semibold text-white">Timestamp → date</h3>
                        <div className="flex items-center gap-1">
                            {(
                                [
                                    ["s", "Seconds"],
                                    ["ms", "Millis"],
                                ] as const
                            ).map(([value, label]) => (
                                <button
                                    key={value}
                                    type="button"
                                    onClick={() => setUnit(value)}
                                    className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                                        unit === value
                                            ? "border-sky-400/50 bg-sky-400/10 text-white"
                                            : "border-white/10 bg-[#0d1526] text-gray-400 hover:text-white"
                                    }`}
                                >
                                    {label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <input
                        type="text"
                        inputMode="numeric"
                        value={tsInput}
                        spellCheck={false}
                        onChange={(e) => setTsInput(e.target.value)}
                        placeholder={unit === "s" ? "1700000000" : "1700000000000"}
                        className="w-full rounded-lg border border-white/10 bg-[#0d1526] px-4 py-3 font-mono text-sm text-white transition-colors focus:border-sky-400 focus:outline-none"
                    />

                    <div className="flex flex-wrap items-center gap-3">
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() =>
                                setTsInput(
                                    String(unit === "s" ? Math.floor(now / 1000) : now)
                                )
                            }
                        >
                            <RefreshCw className="h-4 w-4" /> Use now
                        </Button>
                        {tsInput.trim() && (
                            <Button type="button" variant="ghost" size="sm" onClick={() => setTsInput("")}>
                                Clear
                            </Button>
                        )}
                    </div>

                    {tsResult && "error" in tsResult && (
                        <div className="flex items-start gap-2 text-xs leading-relaxed text-rose-400">
                            <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                            <p className="font-semibold">{tsResult.error}</p>
                        </div>
                    )}

                    {tsResult && !("error" in tsResult) && (
                        <div className="space-y-3">
                            <CopyRow label="UTC (ISO 8601)" value={tsResult.utc.iso} />
                            <CopyRow label="UTC (readable)" value={`${tsResult.utc.human} UTC`} />
                            <CopyRow label="Local time" value={tsResult.local.human} />
                            <p className="text-xs text-gray-500">{tsResult.relative}</p>
                        </div>
                    )}
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-white">Date → timestamp</h3>
                    <label htmlFor="dt-input" className="sr-only">
                        Date and time
                    </label>
                    <input
                        id="dt-input"
                        type="datetime-local"
                        step={1}
                        value={dateInput}
                        onChange={(e) => setDateInput(e.target.value)}
                        className="w-full rounded-lg border border-white/10 bg-[#0d1526] px-4 py-3 font-mono text-sm text-white transition-colors focus:border-sky-400 focus:outline-none [color-scheme:dark]"
                    />

                    <p className="text-xs text-gray-500">
                        Interpreted in your local time zone, matching how the picker displays.
                    </p>

                    {dateResult && "error" in dateResult && (
                        <div className="flex items-start gap-2 text-xs leading-relaxed text-rose-400">
                            <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                            <p className="font-semibold">{dateResult.error}</p>
                        </div>
                    )}

                    {dateResult && !("error" in dateResult) && (
                        <div className="space-y-3">
                            <CopyRow label="Unix seconds" value={String(dateResult.seconds)} />
                            <CopyRow label="Unix milliseconds" value={String(dateResult.millis)} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
