"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Copy, Check, AlertTriangle, CheckCircle2, Braces, Trash2 } from "lucide-react";

const SAMPLE = `{"name":"QUANT LAB USA","founded":2024,"hq":{"city":"Macon","state":"GA"},"services":["custom software","cybersecurity"],"active":true,"notes":null}`;

type Indent = 2 | 4 | 0;

type FormatResult =
    | { ok: true; output: string }
    | { ok: false; error: string; line?: number; column?: number };

// Pull a character position out of common JSON.parse error messages,
// then translate it into a line/column for a friendlier pointer.
function extractPosition(message: string, source: string): { line: number; column: number } | null {
    const match = message.match(/position (\d+)/i);
    if (!match) return null;
    const pos = Number(match[1]);
    if (Number.isNaN(pos)) return null;
    let line = 1;
    let column = 1;
    for (let i = 0; i < pos && i < source.length; i++) {
        if (source[i] === "\n") {
            line++;
            column = 1;
        } else {
            column++;
        }
    }
    return { line, column };
}

function process(input: string, indent: Indent): FormatResult {
    const trimmed = input.trim();
    if (!trimmed) {
        return { ok: false, error: "Nothing to format yet — paste some JSON above." };
    }
    try {
        const parsed: unknown = JSON.parse(trimmed);
        const output =
            indent === 0 ? JSON.stringify(parsed) : JSON.stringify(parsed, null, indent);
        return { ok: true, output };
    } catch (e) {
        const message = e instanceof Error ? e.message : "Invalid JSON.";
        const pos = extractPosition(message, trimmed);
        return { ok: false, error: message, line: pos?.line, column: pos?.column };
    }
}

export function JsonFormatter() {
    const [input, setInput] = useState("");
    const [indent, setIndent] = useState<Indent>(2);
    const [copied, setCopied] = useState(false);

    const result = useMemo(() => process(input, indent), [input, indent]);

    const stats = useMemo(() => {
        if (!result.ok) return null;
        return {
            chars: result.output.length,
            lines: result.output.split("\n").length,
        };
    }, [result]);

    async function handleCopy() {
        if (!result.ok) return;
        try {
            await navigator.clipboard.writeText(result.output);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    }

    return (
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md p-6 md:p-10 shadow-[0_0_60px_rgba(56,189,248,0.05)]">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm">
                <span className="mr-1 text-xs uppercase tracking-widest text-gray-500">Indent</span>
                {(
                    [
                        [2, "2 spaces"],
                        [4, "4 spaces"],
                        [0, "Minify"],
                    ] as const
                ).map(([value, label]) => (
                    <button
                        key={value}
                        type="button"
                        onClick={() => setIndent(value)}
                        className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                            indent === value
                                ? "border-sky-400/50 bg-sky-400/10 text-white"
                                : "border-white/10 bg-[#0d1526] text-gray-400 hover:text-white"
                        }`}
                    >
                        {label}
                    </button>
                ))}
                <button
                    type="button"
                    onClick={() => setInput(SAMPLE)}
                    className="ml-auto text-xs text-sky-400 hover:text-sky-300"
                >
                    Load sample
                </button>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-3">
                    <label htmlFor="json-input" className="block text-sm font-medium text-gray-300">
                        Input JSON
                    </label>
                    <textarea
                        id="json-input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        spellCheck={false}
                        rows={16}
                        placeholder='{"paste":"your JSON here"}'
                        className="w-full rounded-lg border border-white/10 bg-[#0d1526] px-4 py-3 font-mono text-sm text-white transition-colors focus:border-sky-400 focus:outline-none"
                    />
                    <div className="flex flex-wrap items-center gap-3">
                        <Button type="button" variant="ghost" size="sm" onClick={() => setInput("")}>
                            <Trash2 className="h-4 w-4" /> Clear
                        </Button>
                        {input.trim() && result.ok && (
                            <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
                                <CheckCircle2 className="h-3.5 w-3.5" /> Valid JSON
                            </span>
                        )}
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                        <p className="inline-flex items-center gap-2 text-sm font-medium text-gray-300">
                            <Braces className="h-4 w-4 text-sky-400" /> Output
                        </p>
                        <button
                            type="button"
                            onClick={handleCopy}
                            disabled={!result.ok}
                            className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                            {copied ? "Copied" : "Copy"}
                        </button>
                    </div>

                    <div className="min-h-[394px] rounded-lg border border-white/10 bg-[#0d1526]/60 p-4">
                        {result.ok ? (
                            <pre className="max-h-[600px] overflow-auto font-mono text-xs leading-relaxed text-sky-200">
                                <code>{result.output}</code>
                            </pre>
                        ) : (
                            <div className="flex items-start gap-2 text-xs leading-relaxed text-rose-400">
                                <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                                <div>
                                    <p className="font-semibold">{result.error}</p>
                                    {result.line !== undefined && (
                                        <p className="mt-1 text-rose-300/80">
                                            Near line {result.line}, column {result.column}.
                                        </p>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {stats && (
                        <p className="text-xs text-gray-500">
                            {stats.chars.toLocaleString()} characters · {stats.lines.toLocaleString()} lines
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
