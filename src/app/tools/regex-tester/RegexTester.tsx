"use client";

import React, { useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, Regex } from "lucide-react";

const FLAG_OPTIONS: Array<{ flag: string; label: string }> = [
    { flag: "g", label: "global" },
    { flag: "i", label: "ignore case" },
    { flag: "m", label: "multiline" },
    { flag: "s", label: "dotall" },
    { flag: "u", label: "unicode" },
    { flag: "y", label: "sticky" },
];

type MatchInfo = {
    index: number;
    length: number;
    value: string;
    groups: string[];
    named: Record<string, string | undefined>;
};

type Segment = { text: string; matchNumber: number | null };

type RunResult =
    | { ok: true; matches: MatchInfo[]; segments: Segment[] }
    | { ok: false; error: string };

const MAX_MATCHES = 1000;

function run(pattern: string, flags: string, input: string): RunResult {
    if (!pattern) {
        return { ok: true, matches: [], segments: [{ text: input, matchNumber: null }] };
    }
    let re: RegExp;
    try {
        re = new RegExp(pattern, flags);
    } catch (e) {
        return { ok: false, error: e instanceof Error ? e.message : "Invalid regular expression." };
    }

    const matches: MatchInfo[] = [];
    const segments: Segment[] = [];
    let lastEnd = 0;

    if (re.global || re.sticky) {
        let m: RegExpExecArray | null;
        let guard = 0;
        while ((m = re.exec(input)) !== null) {
            guard++;
            if (guard > MAX_MATCHES) break;
            const value = m[0];
            const start = m.index;
            if (start > lastEnd) {
                segments.push({ text: input.slice(lastEnd, start), matchNumber: null });
            }
            segments.push({ text: value, matchNumber: matches.length + 1 });
            lastEnd = start + value.length;
            matches.push({
                index: start,
                length: value.length,
                value,
                groups: m.slice(1).map((g) => g ?? ""),
                named: { ...(m.groups ?? {}) },
            });
            // Guard against zero-width matches looping forever.
            if (m.index === re.lastIndex) re.lastIndex++;
        }
    } else {
        const m = re.exec(input);
        if (m) {
            const value = m[0];
            const start = m.index;
            if (start > 0) segments.push({ text: input.slice(0, start), matchNumber: null });
            segments.push({ text: value, matchNumber: 1 });
            lastEnd = start + value.length;
            matches.push({
                index: start,
                length: value.length,
                value,
                groups: m.slice(1).map((g) => g ?? ""),
                named: { ...(m.groups ?? {}) },
            });
        }
    }

    if (lastEnd < input.length) {
        segments.push({ text: input.slice(lastEnd), matchNumber: null });
    }
    if (segments.length === 0) {
        segments.push({ text: input, matchNumber: null });
    }

    return { ok: true, matches, segments };
}

export function RegexTester() {
    const [pattern, setPattern] = useState("(\\w+)@(\\w+)\\.(\\w+)");
    const [flags, setFlags] = useState("g");
    const [input, setInput] = useState(
        "Reach us at beltz@quantlabusa.dev or sales@example.com for a quote.",
    );

    const result = useMemo(() => run(pattern, flags, input), [pattern, flags, input]);

    function toggleFlag(flag: string) {
        setFlags((prev) => (prev.includes(flag) ? prev.replace(flag, "") : prev + flag));
    }

    return (
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md p-6 md:p-10 shadow-[0_0_60px_rgba(56,189,248,0.05)]">
            <div className="space-y-5">
                <div>
                    <label htmlFor="regex-pattern" className="mb-2 block text-sm font-medium text-gray-300">
                        Regular expression
                    </label>
                    <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#0d1526] px-3 py-2 transition-colors focus-within:border-sky-400">
                        <span className="font-mono text-gray-500">/</span>
                        <input
                            id="regex-pattern"
                            type="text"
                            value={pattern}
                            onChange={(e) => setPattern(e.target.value)}
                            spellCheck={false}
                            placeholder="pattern"
                            className="flex-1 bg-transparent font-mono text-sm text-white focus:outline-none"
                        />
                        <span className="font-mono text-gray-500">/</span>
                        <span className="font-mono text-sm text-sky-300">{flags}</span>
                    </div>
                </div>

                <div>
                    <p className="mb-2 text-sm font-medium text-gray-300">Flags</p>
                    <div className="flex flex-wrap gap-2">
                        {FLAG_OPTIONS.map(({ flag, label }) => (
                            <button
                                key={flag}
                                type="button"
                                onClick={() => toggleFlag(flag)}
                                className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                                    flags.includes(flag)
                                        ? "border-sky-400/50 bg-sky-400/10 text-white"
                                        : "border-white/10 bg-[#0d1526] text-gray-400 hover:text-white"
                                }`}
                            >
                                <span className="font-mono">{flag}</span>{" "}
                                <span className="text-gray-500">{label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <label htmlFor="regex-input" className="mb-2 block text-sm font-medium text-gray-300">
                        Test string
                    </label>
                    <textarea
                        id="regex-input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        spellCheck={false}
                        rows={6}
                        placeholder="Enter the text to test against your pattern."
                        className="w-full rounded-lg border border-white/10 bg-[#0d1526] px-4 py-3 font-mono text-sm text-white transition-colors focus:border-sky-400 focus:outline-none"
                    />
                </div>

                {!result.ok ? (
                    <div className="flex items-start gap-2 rounded-lg border border-rose-400/30 bg-rose-500/5 p-4 text-xs text-rose-400">
                        <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span>{result.error}</span>
                    </div>
                ) : (
                    <>
                        <div>
                            <p className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500">
                                <Regex className="h-3.5 w-3.5" /> Highlighted matches
                            </p>
                            <div className="min-h-[80px] whitespace-pre-wrap break-words rounded-lg border border-white/10 bg-[#0d1526]/60 p-4 font-mono text-sm leading-relaxed text-gray-300">
                                {result.segments.map((seg, i) =>
                                    seg.matchNumber !== null ? (
                                        <mark
                                            key={i}
                                            className="rounded bg-sky-400/25 px-0.5 text-sky-100 ring-1 ring-sky-400/40"
                                            title={`Match ${seg.matchNumber}`}
                                        >
                                            {seg.text}
                                        </mark>
                                    ) : (
                                        <span key={i}>{seg.text}</span>
                                    ),
                                )}
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm">
                            {result.matches.length > 0 ? (
                                <span className="inline-flex items-center gap-1.5 text-emerald-400">
                                    <CheckCircle2 className="h-4 w-4" />
                                    {result.matches.length}
                                    {result.matches.length === MAX_MATCHES ? "+" : ""} match
                                    {result.matches.length === 1 ? "" : "es"}
                                </span>
                            ) : (
                                <span className="text-gray-500">No matches.</span>
                            )}
                        </div>

                        {result.matches.length > 0 && (
                            <div className="space-y-3">
                                {result.matches.map((m, i) => (
                                    <div
                                        key={`${m.index}-${i}`}
                                        className="rounded-lg border border-white/10 bg-[#0d1526]/60 p-4"
                                    >
                                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                                            <span className="text-xs uppercase tracking-widest text-gray-500">
                                                Match {i + 1}
                                            </span>
                                            <span className="font-mono text-xs text-gray-500">
                                                index {m.index} · length {m.length}
                                            </span>
                                        </div>
                                        <p className="mt-1 break-all font-mono text-sm text-sky-200">{m.value}</p>
                                        {(m.groups.length > 0 || Object.keys(m.named).length > 0) && (
                                            <div className="mt-3 space-y-1 border-t border-white/5 pt-3">
                                                {m.groups.map((g, gi) => (
                                                    <p key={gi} className="font-mono text-xs text-gray-400">
                                                        <span className="text-gray-600">group {gi + 1}:</span>{" "}
                                                        <span className="break-all text-emerald-200">
                                                            {g || <span className="italic text-gray-600">empty</span>}
                                                        </span>
                                                    </p>
                                                ))}
                                                {Object.entries(m.named).map(([name, val]) => (
                                                    <p key={name} className="font-mono text-xs text-gray-400">
                                                        <span className="text-gray-600">{`<${name}>:`}</span>{" "}
                                                        <span className="break-all text-amber-200">
                                                            {val || <span className="italic text-gray-600">empty</span>}
                                                        </span>
                                                    </p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-[#0d1526]/60 p-5">
                <p className="mb-2 text-xs uppercase tracking-widest text-gray-500">Quick reference</p>
                <ul className="space-y-1 text-xs leading-relaxed text-gray-400">
                    <li><span className="font-mono text-sky-300">\d</span> — digit · <span className="font-mono text-sky-300">\w</span> — word char · <span className="font-mono text-sky-300">\s</span> — whitespace</li>
                    <li><span className="font-mono text-sky-300">^</span> — start · <span className="font-mono text-sky-300">$</span> — end · <span className="font-mono text-sky-300">.</span> — any char (except newline)</li>
                    <li><span className="font-mono text-sky-300">*</span> — 0+ · <span className="font-mono text-sky-300">+</span> — 1+ · <span className="font-mono text-sky-300">?</span> — 0 or 1 · <span className="font-mono text-sky-300">{`{2,4}`}</span> — range</li>
                    <li><span className="font-mono text-sky-300">(abc)</span> — group · <span className="font-mono text-sky-300">{`(?<name>abc)`}</span> — named group · <span className="font-mono text-sky-300">[a-z]</span> — class</li>
                </ul>
            </div>
        </div>
    );
}
