"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Check, Printer, RotateCcw, ShieldCheck, Filter } from "lucide-react";
import { OWASP_ASVS, countItems } from "@/lib/tools/owasp-asvs";

const STORAGE_KEY = "quantlab.owasp-asvs.checked.v1";
const NOTE_KEY = "quantlab.owasp-asvs.notes.v1";

type Filter = "all" | "L1" | "L2" | "unchecked" | "checked";

export function OwaspChecklistApp() {
    const [checked, setChecked] = useState<Set<string>>(new Set());
    const [notes, setNotes] = useState<Record<string, string>>({});
    const [filter, setFilter] = useState<Filter>("all");
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const arr = JSON.parse(raw);
                if (Array.isArray(arr)) setChecked(new Set(arr));
            }
            const rawNotes = localStorage.getItem(NOTE_KEY);
            if (rawNotes) {
                const parsed = JSON.parse(rawNotes);
                if (parsed && typeof parsed === "object") setNotes(parsed);
            }
        } catch {
            // ignore restore failures
        }
        setHydrated(true);
    }, []);

    useEffect(() => {
        if (!hydrated) return;
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(checked)));
        } catch {
            // ignore quota errors
        }
    }, [checked, hydrated]);

    useEffect(() => {
        if (!hydrated) return;
        try {
            localStorage.setItem(NOTE_KEY, JSON.stringify(notes));
        } catch {
            // ignore quota errors
        }
    }, [notes, hydrated]);

    const totals = useMemo(() => countItems(), []);
    const completed = checked.size;
    const percent = Math.round((completed / totals.total) * 100);

    function toggle(id: string) {
        setChecked((prev) => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    }

    function resetAll() {
        if (typeof window === "undefined") return;
        if (!window.confirm("Clear all progress and notes? This cannot be undone.")) return;
        setChecked(new Set());
        setNotes({});
    }

    function printChecklist() {
        if (typeof window !== "undefined") window.print();
    }

    return (
        <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md p-6 md:p-8 shadow-[0_0_60px_rgba(56,189,248,0.05)] print:hidden">
                <div className="grid lg:grid-cols-3 gap-6 items-start">
                    <div className="lg:col-span-2 space-y-3">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-emerald-400" />
                            <p className="text-xs uppercase tracking-widest text-emerald-400">
                                Progress saved in this browser only
                            </p>
                        </div>
                        <div className="flex items-end justify-between gap-3">
                            <div>
                                <p className="text-3xl font-bold text-white leading-tight">
                                    {completed} / {totals.total}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                    {percent}% — {totals.l1} L1 items, {totals.l2} L2 items
                                </p>
                            </div>
                        </div>
                        <div
                            role="progressbar"
                            aria-valuenow={percent}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            className="h-2 w-full bg-white/5 rounded-full overflow-hidden"
                        >
                            <div
                                className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-[width] motion-reduce:transition-none"
                                style={{ width: `${percent}%` }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 justify-start lg:justify-end">
                        <Button type="button" variant="primary" size="sm" onClick={printChecklist}>
                            <Printer className="w-4 h-4" /> Print / Save PDF
                        </Button>
                        <Button type="button" variant="ghost" size="sm" onClick={resetAll}>
                            <RotateCcw className="w-4 h-4" /> Reset
                        </Button>
                    </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
                    <span className="text-xs uppercase tracking-widest text-gray-500 mr-2 inline-flex items-center gap-1">
                        <Filter className="w-3 h-3" /> Filter
                    </span>
                    {(
                        [
                            ["all", "All"],
                            ["L1", "Level 1 only"],
                            ["L2", "Level 2 only"],
                            ["unchecked", "Unchecked"],
                            ["checked", "Checked"],
                        ] as const
                    ).map(([key, label]) => (
                        <button
                            key={key}
                            type="button"
                            onClick={() => setFilter(key)}
                            className={`text-xs rounded-full px-3 py-1.5 border transition-colors ${
                                filter === key
                                    ? "border-sky-400/50 bg-sky-400/10 text-white"
                                    : "border-white/10 bg-[#0d1526] text-gray-400 hover:text-white"
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="hidden print:block print:mb-6">
                <h1 className="text-2xl font-bold text-black mb-2">OWASP ASVS L1/L2 Checklist</h1>
                <p className="text-sm text-black">
                    {completed}/{totals.total} complete ({percent}%) — QUANT LAB USA INC,
                    quantlabusa.dev/tools/owasp-checklist-app
                </p>
            </div>

            {OWASP_ASVS.map((cat) => {
                const visibleItems = cat.items.filter((item) => {
                    if (filter === "L1") return item.level === "L1";
                    if (filter === "L2") return item.level === "L2";
                    if (filter === "unchecked") return !checked.has(item.id);
                    if (filter === "checked") return checked.has(item.id);
                    return true;
                });
                if (visibleItems.length === 0) return null;
                const catChecked = cat.items.filter((i) => checked.has(i.id)).length;

                return (
                    <section
                        key={cat.id}
                        className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 print:border print:border-black print:bg-white print:rounded-none p-6 md:p-8 print:p-4 print:mb-4 break-inside-avoid"
                    >
                        <div className="flex flex-wrap items-end justify-between gap-3 mb-5 print:mb-3">
                            <div>
                                <p className="text-xs uppercase tracking-widest text-sky-400 mb-1 print:text-black">
                                    {cat.id}
                                </p>
                                <h2 className="text-xl md:text-2xl font-bold text-white print:text-black">
                                    {cat.name}
                                </h2>
                                <p className="text-sm text-gray-400 mt-1 print:text-black">
                                    {cat.summary}
                                </p>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-semibold text-white print:text-black">
                                    {catChecked}/{cat.items.length}
                                </p>
                                <p className="text-xs text-gray-500 print:text-black">complete</p>
                            </div>
                        </div>

                        <ul className="space-y-2">
                            {visibleItems.map((item) => {
                                const isChecked = checked.has(item.id);
                                return (
                                    <li
                                        key={item.id}
                                        className={`rounded-lg border p-3 transition-colors break-inside-avoid print:bg-white print:border-black ${
                                            isChecked
                                                ? "border-emerald-400/30 bg-emerald-400/5"
                                                : "border-white/10 bg-[#0d1526]/60 hover:border-white/20"
                                        }`}
                                    >
                                        <label className="flex items-start gap-3 cursor-pointer">
                                            <span
                                                className={`flex items-center justify-center w-5 h-5 rounded border mt-0.5 flex-shrink-0 print:border-black ${
                                                    isChecked
                                                        ? "border-emerald-400 bg-emerald-400/20"
                                                        : "border-gray-600"
                                                }`}
                                                aria-hidden="true"
                                            >
                                                {isChecked && (
                                                    <Check className="w-3 h-3 text-emerald-400 print:text-black" />
                                                )}
                                            </span>
                                            <input
                                                type="checkbox"
                                                className="sr-only"
                                                checked={isChecked}
                                                onChange={() => toggle(item.id)}
                                                aria-label={`Mark ${item.id} as ${
                                                    isChecked ? "incomplete" : "complete"
                                                }`}
                                            />
                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-wrap items-baseline gap-2 mb-1">
                                                    <span className="font-mono text-xs text-sky-300 print:text-black">
                                                        {item.id}
                                                    </span>
                                                    <span
                                                        className={`text-[10px] uppercase tracking-widest px-1.5 py-0.5 rounded ${
                                                            item.level === "L1"
                                                                ? "bg-sky-400/10 text-sky-300 print:bg-white print:text-black print:border print:border-black"
                                                                : "bg-amber-400/10 text-amber-300 print:bg-white print:text-black print:border print:border-black"
                                                        }`}
                                                    >
                                                        {item.level}
                                                    </span>
                                                </div>
                                                <p
                                                    className={`text-sm leading-relaxed print:text-black ${
                                                        isChecked
                                                            ? "text-gray-300 line-through decoration-emerald-400/40"
                                                            : "text-gray-200"
                                                    }`}
                                                >
                                                    {item.text}
                                                </p>
                                                <textarea
                                                    value={notes[item.id] || ""}
                                                    onChange={(e) =>
                                                        setNotes((prev) => ({
                                                            ...prev,
                                                            [item.id]: e.target.value,
                                                        }))
                                                    }
                                                    placeholder="Notes / owner / target date (optional)"
                                                    rows={1}
                                                    className="mt-2 w-full rounded-md bg-[#0a0f1e]/60 border border-white/5 px-2 py-1 text-xs text-gray-300 focus:border-sky-400 focus:outline-none transition-colors print:hidden"
                                                />
                                                {notes[item.id] && (
                                                    <p className="mt-1 text-xs text-gray-400 italic hidden print:block">
                                                        Note: {notes[item.id]}
                                                    </p>
                                                )}
                                            </div>
                                        </label>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                );
            })}
        </div>
    );
}
