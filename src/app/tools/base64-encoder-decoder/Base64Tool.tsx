"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Copy, Check, AlertTriangle, ArrowDownUp, Lock } from "lucide-react";

type Mode = "encode" | "decode";

// Encode a Unicode string to Base64 via UTF-8 bytes (atob/btoa are byte-only).
function encodeUtf8ToBase64(text: string, urlSafe: boolean): string {
    const bytes = new TextEncoder().encode(text);
    let binary = "";
    for (let i = 0; i < bytes.length; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    const b64 = btoa(binary);
    if (!urlSafe) return b64;
    return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function decodeBase64ToUtf8(input: string, urlSafe: boolean): string {
    let b64 = input.trim();
    if (urlSafe) {
        b64 = b64.replace(/-/g, "+").replace(/_/g, "/");
        const pad = b64.length % 4;
        if (pad === 2) b64 += "==";
        else if (pad === 3) b64 += "=";
        else if (pad === 1) throw new Error("Invalid base64url length.");
    }
    const binary = atob(b64);
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    return new TextDecoder("utf-8", { fatal: true }).decode(bytes);
}

type ConvertResult = { ok: true; output: string } | { ok: false; error: string };

function convert(input: string, mode: Mode, urlSafe: boolean): ConvertResult {
    if (!input) return { ok: true, output: "" };
    try {
        if (mode === "encode") {
            return { ok: true, output: encodeUtf8ToBase64(input, urlSafe) };
        }
        return { ok: true, output: decodeBase64ToUtf8(input, urlSafe) };
    } catch (e) {
        const fallback =
            mode === "decode"
                ? "This does not look like valid Base64 text."
                : "Could not encode this input.";
        return { ok: false, error: e instanceof Error ? `${fallback} (${e.message})` : fallback };
    }
}

export function Base64Tool() {
    const [mode, setMode] = useState<Mode>("encode");
    const [urlSafe, setUrlSafe] = useState(false);
    const [input, setInput] = useState("");
    const [copied, setCopied] = useState(false);

    const result = useMemo(() => convert(input, mode, urlSafe), [input, mode, urlSafe]);

    async function handleCopy() {
        if (!result.ok || !result.output) return;
        try {
            await navigator.clipboard.writeText(result.output);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    }

    function swap() {
        // Feed the current output back as input and flip direction.
        if (result.ok && result.output) setInput(result.output);
        setMode((m) => (m === "encode" ? "decode" : "encode"));
    }

    const inputLabel = mode === "encode" ? "Plain text" : "Base64 text";
    const outputLabel = mode === "encode" ? "Base64 output" : "Decoded text";

    return (
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md p-6 md:p-10 shadow-[0_0_60px_rgba(56,189,248,0.05)]">
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-500/5 p-4">
                <Lock className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                <p className="text-xs leading-relaxed text-gray-300">
                    This tool runs entirely in your browser. Your text is encoded and decoded
                    locally with the built-in <code className="text-sky-300">btoa</code> and{" "}
                    <code className="text-sky-300">atob</code> functions over UTF-8 bytes — nothing
                    is uploaded or stored.
                </p>
            </div>

            <div className="mb-6 flex flex-wrap items-center gap-4">
                <div className="flex gap-2">
                    {(
                        [
                            ["encode", "Encode"],
                            ["decode", "Decode"],
                        ] as const
                    ).map(([key, label]) => (
                        <button
                            key={key}
                            type="button"
                            onClick={() => setMode(key)}
                            className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                                mode === key
                                    ? "border-sky-400/50 bg-sky-400/10 text-white"
                                    : "border-white/10 bg-[#0d1526] text-gray-400 hover:text-white"
                            }`}
                        >
                            {label}
                        </button>
                    ))}
                </div>

                <label className="inline-flex cursor-pointer items-center gap-2 text-xs text-gray-300">
                    <input
                        type="checkbox"
                        checked={urlSafe}
                        onChange={(e) => setUrlSafe(e.target.checked)}
                        className="h-4 w-4 rounded border-white/20 bg-[#0d1526] accent-sky-500"
                    />
                    URL-safe (base64url)
                </label>

                <button
                    type="button"
                    onClick={swap}
                    className="ml-auto inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300"
                >
                    <ArrowDownUp className="h-3.5 w-3.5" /> Swap input &amp; output
                </button>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-3">
                    <label htmlFor="b64-input" className="block text-sm font-medium text-gray-300">
                        {inputLabel}
                    </label>
                    <textarea
                        id="b64-input"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        spellCheck={false}
                        rows={12}
                        placeholder={mode === "encode" ? "Type or paste text to encode" : "Paste Base64 to decode"}
                        className="w-full break-all rounded-lg border border-white/10 bg-[#0d1526] px-4 py-3 font-mono text-sm text-white transition-colors focus:border-sky-400 focus:outline-none"
                    />
                    <Button type="button" variant="ghost" size="sm" onClick={() => setInput("")}>
                        Clear
                    </Button>
                </div>

                <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-medium text-gray-300">{outputLabel}</p>
                        <button
                            type="button"
                            onClick={handleCopy}
                            disabled={!result.ok || !result.output}
                            className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 disabled:cursor-not-allowed disabled:opacity-40"
                        >
                            {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                            {copied ? "Copied" : "Copy"}
                        </button>
                    </div>
                    <div className="min-h-[290px] rounded-lg border border-white/10 bg-[#0d1526]/60 p-4">
                        {result.ok ? (
                            <pre className="max-h-[600px] overflow-auto whitespace-pre-wrap break-all font-mono text-sm leading-relaxed text-sky-200">
                                <code>{result.output || <span className="italic text-gray-600">output appears here</span>}</code>
                            </pre>
                        ) : (
                            <div className="flex items-start gap-2 text-xs leading-relaxed text-rose-400">
                                <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                                <span>{result.error}</span>
                            </div>
                        )}
                    </div>
                    {result.ok && result.output && (
                        <p className="text-xs text-gray-500">{result.output.length.toLocaleString()} characters</p>
                    )}
                </div>
            </div>
        </div>
    );
}
