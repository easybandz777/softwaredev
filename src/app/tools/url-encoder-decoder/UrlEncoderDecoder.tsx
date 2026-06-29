"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Copy, Check, AlertTriangle, ArrowDownUp, Link2, Trash2 } from "lucide-react";

const SAMPLE_COMPONENT = `name=QUANT LAB USA & service=custom software?`;
const SAMPLE_URL = `https://quantlabusa.dev/search?q=custom software & cybersecurity&page=2`;

type Direction = "encode" | "decode";
type Scope = "component" | "url";

type ConvertResult = { ok: true; output: string } | { ok: false; error: string };

// encodeURI / decodeURI preserve reserved URL characters (:/?#[]@ etc.),
// which is what you want for a whole URL. encodeURIComponent escapes them,
// which is what you want for a single query value or path segment.
function convert(input: string, direction: Direction, scope: Scope): ConvertResult {
    if (!input) {
        return { ok: false, error: "Nothing to convert yet — type or paste a value above." };
    }
    try {
        if (direction === "encode") {
            const output = scope === "url" ? encodeURI(input) : encodeURIComponent(input);
            return { ok: true, output };
        }
        const output = scope === "url" ? decodeURI(input) : decodeURIComponent(input);
        return { ok: true, output };
    } catch (e) {
        const message =
            e instanceof Error
                ? `${e.message}. This usually means a malformed percent-escape such as a lone "%" or "%E0" without its trailing bytes.`
                : "Could not decode this input.";
        return { ok: false, error: message };
    }
}

export function UrlEncoderDecoder() {
    const [input, setInput] = useState("");
    const [direction, setDirection] = useState<Direction>("encode");
    const [scope, setScope] = useState<Scope>("component");
    const [copied, setCopied] = useState(false);

    const result = useMemo(() => convert(input, direction, scope), [input, direction, scope]);

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

    function loadSample() {
        setInput(scope === "url" ? SAMPLE_URL : SAMPLE_COMPONENT);
        setDirection("encode");
    }

    return (
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md p-6 md:p-10 shadow-[0_0_60px_rgba(56,189,248,0.05)]">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm">
                <span className="mr-1 text-xs uppercase tracking-widest text-gray-500">Mode</span>
                {(
                    [
                        ["encode", "Encode"],
                        ["decode", "Decode"],
                    ] as const
                ).map(([value, label]) => (
                    <button
                        key={value}
                        type="button"
                        onClick={() => setDirection(value)}
                        className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                            direction === value
                                ? "border-sky-400/50 bg-sky-400/10 text-white"
                                : "border-white/10 bg-[#0d1526] text-gray-400 hover:text-white"
                        }`}
                    >
                        {label}
                    </button>
                ))}
                <span className="mx-2 h-4 w-px bg-white/10" aria-hidden="true" />
                <span className="mr-1 text-xs uppercase tracking-widest text-gray-500">Scope</span>
                {(
                    [
                        ["component", "Component"],
                        ["url", "Whole URL"],
                    ] as const
                ).map(([value, label]) => (
                    <button
                        key={value}
                        type="button"
                        onClick={() => setScope(value)}
                        className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                            scope === value
                                ? "border-emerald-400/50 bg-emerald-400/10 text-white"
                                : "border-white/10 bg-[#0d1526] text-gray-400 hover:text-white"
                        }`}
                    >
                        {label}
                    </button>
                ))}
                <button
                    type="button"
                    onClick={loadSample}
                    className="ml-auto text-xs text-sky-400 hover:text-sky-300"
                >
                    Load sample
                </button>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-3">
                    <label htmlFor="url-input" className="block text-sm font-medium text-gray-300">
                        {direction === "encode" ? "Plain text / URL" : "Percent-encoded text"}
                    </label>
                    <textarea
                        id="url-input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        spellCheck={false}
                        rows={14}
                        placeholder={
                            direction === "encode"
                                ? "Type a value to escape…"
                                : "Paste %20-style encoded text…"
                        }
                        className="w-full rounded-lg border border-white/10 bg-[#0d1526] px-4 py-3 font-mono text-sm text-white transition-colors focus:border-sky-400 focus:outline-none"
                    />
                    <div className="flex flex-wrap items-center gap-3">
                        <Button type="button" variant="ghost" size="sm" onClick={() => setInput("")}>
                            <Trash2 className="h-4 w-4" /> Clear
                        </Button>
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                                if (result.ok) {
                                    setInput(result.output);
                                    setDirection((d) => (d === "encode" ? "decode" : "encode"));
                                }
                            }}
                            disabled={!result.ok}
                        >
                            <ArrowDownUp className="h-4 w-4" /> Use output as input
                        </Button>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                        <p className="inline-flex items-center gap-2 text-sm font-medium text-gray-300">
                            <Link2 className="h-4 w-4 text-sky-400" />{" "}
                            {direction === "encode" ? "Encoded output" : "Decoded output"}
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

                    <div className="min-h-[342px] rounded-lg border border-white/10 bg-[#0d1526]/60 p-4">
                        {result.ok ? (
                            <pre className="max-h-[600px] overflow-auto whitespace-pre-wrap break-all font-mono text-xs leading-relaxed text-sky-200">
                                <code>{result.output}</code>
                            </pre>
                        ) : (
                            <div className="flex items-start gap-2 text-xs leading-relaxed text-rose-400">
                                <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                                <p className="font-semibold">{result.error}</p>
                            </div>
                        )}
                    </div>

                    {result.ok && (
                        <p className="text-xs text-gray-500">
                            {result.output.length.toLocaleString()} characters ·{" "}
                            {scope === "url" ? "reserved URL characters preserved" : "all reserved characters escaped"}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}
