"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Copy, Check, Fingerprint, Trash2, AlertTriangle } from "lucide-react";

const SAMPLE = "QUANT LAB USA — custom software & cybersecurity";

const ALGORITHMS = ["SHA-1", "SHA-256", "SHA-384", "SHA-512"] as const;
type Algorithm = (typeof ALGORITHMS)[number];

type Digests = Partial<Record<Algorithm, string>>;

// crypto.subtle.digest returns an ArrayBuffer; render it as lowercase hex.
function bufferToHex(buffer: ArrayBuffer): string {
    return Array.from(new Uint8Array(buffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
}

export function HashGenerator() {
    const [input, setInput] = useState("");
    const [digests, setDigests] = useState<Digests>({});
    const [error, setError] = useState<string | null>(null);
    const [copied, setCopied] = useState<Algorithm | null>(null);

    useEffect(() => {
        let cancelled = false;

        if (!input) {
            setDigests({});
            setError(null);
            return;
        }

        const subtle =
            typeof crypto !== "undefined" && "subtle" in crypto ? crypto.subtle : null;
        if (!subtle) {
            setError(
                "Web Crypto is unavailable in this context. SubtleCrypto requires a secure origin (HTTPS or localhost)."
            );
            setDigests({});
            return;
        }

        const bytes = new TextEncoder().encode(input);

        Promise.all(
            ALGORITHMS.map((algo) =>
                subtle.digest(algo, bytes).then((buf) => [algo, bufferToHex(buf)] as const)
            )
        )
            .then((entries) => {
                if (cancelled) return;
                setError(null);
                setDigests(Object.fromEntries(entries) as Digests);
            })
            .catch(() => {
                if (cancelled) return;
                setError("Could not compute digests in this browser.");
                setDigests({});
            });

        return () => {
            cancelled = true;
        };
    }, [input]);

    async function handleCopy(algo: Algorithm) {
        const value = digests[algo];
        if (!value) return;
        try {
            await navigator.clipboard.writeText(value);
            setCopied(algo);
            setTimeout(() => setCopied(null), 2000);
        } catch {
            setCopied(null);
        }
    }

    const byteLength = input ? new TextEncoder().encode(input).length : 0;

    return (
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md p-6 md:p-10 shadow-[0_0_60px_rgba(56,189,248,0.05)]">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm">
                <span className="mr-1 text-xs uppercase tracking-widest text-gray-500">
                    Algorithms
                </span>
                <span className="text-xs text-gray-400">
                    SHA-1 · SHA-256 · SHA-384 · SHA-512, computed together
                </span>
                <button
                    type="button"
                    onClick={() => setInput(SAMPLE)}
                    className="ml-auto text-xs text-sky-400 hover:text-sky-300"
                >
                    Load sample
                </button>
            </div>

            <div className="space-y-3">
                <label htmlFor="hash-input" className="block text-sm font-medium text-gray-300">
                    Input text
                </label>
                <textarea
                    id="hash-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    spellCheck={false}
                    rows={6}
                    placeholder="Type or paste text to hash…"
                    className="w-full rounded-lg border border-white/10 bg-[#0d1526] px-4 py-3 font-mono text-sm text-white transition-colors focus:border-sky-400 focus:outline-none"
                />
                <div className="flex flex-wrap items-center gap-3">
                    <Button type="button" variant="ghost" size="sm" onClick={() => setInput("")}>
                        <Trash2 className="h-4 w-4" /> Clear
                    </Button>
                    {input && (
                        <span className="text-xs text-gray-500">
                            {input.length.toLocaleString()} characters ·{" "}
                            {byteLength.toLocaleString()} UTF-8 bytes
                        </span>
                    )}
                </div>
            </div>

            {error && (
                <div className="mt-6 flex items-start gap-2 rounded-lg border border-rose-500/20 bg-rose-500/5 p-4 text-xs leading-relaxed text-rose-400">
                    <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <p className="font-semibold">{error}</p>
                </div>
            )}

            <div className="mt-8 space-y-4">
                {ALGORITHMS.map((algo) => {
                    const value = digests[algo];
                    return (
                        <div
                            key={algo}
                            className="rounded-lg border border-white/10 bg-[#0d1526]/60 p-4"
                        >
                            <div className="mb-2 flex items-center justify-between gap-3">
                                <p className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                                    <Fingerprint className="h-4 w-4 text-sky-400" /> {algo}
                                    <span className="text-xs font-normal text-gray-500">
                                        {(value ? value.length * 4 : 0) || ""}
                                        {value ? "-bit" : ""}
                                    </span>
                                </p>
                                <button
                                    type="button"
                                    onClick={() => handleCopy(algo)}
                                    disabled={!value}
                                    className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 disabled:cursor-not-allowed disabled:opacity-40"
                                >
                                    {copied === algo ? (
                                        <Check className="h-3 w-3" />
                                    ) : (
                                        <Copy className="h-3 w-3" />
                                    )}
                                    {copied === algo ? "Copied" : "Copy"}
                                </button>
                            </div>
                            <p className="break-all font-mono text-xs leading-relaxed text-sky-200">
                                {value ?? (
                                    <span className="text-gray-600">
                                        Digest appears here as you type.
                                    </span>
                                )}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
