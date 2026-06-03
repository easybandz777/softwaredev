"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Copy, Check, AlertTriangle, Lock, KeyRound, Clock } from "lucide-react";

const SAMPLE =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkphbmUgRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTcwMDAwMDAwMCwiZXhwIjoxNzAwMDAzNjAwfQ.s5Q4d3sCQ6dD8u4kCwT8r0xq5dWqg3w5b8Yk2bq3oZk";

type DecodedPart = {
    raw: string;
    json: unknown;
    pretty: string;
};

function base64UrlDecode(segment: string): string {
    // Convert base64url to standard base64, restore padding.
    let b64 = segment.replace(/-/g, "+").replace(/_/g, "/");
    const pad = b64.length % 4;
    if (pad === 2) b64 += "==";
    else if (pad === 3) b64 += "=";
    else if (pad === 1) throw new Error("Invalid base64url length");

    const binary = atob(b64);
    // Decode binary string as UTF-8 so non-ASCII claim values survive.
    const bytes = Uint8Array.from(binary, (c) => c.charCodeAt(0));
    return new TextDecoder("utf-8", { fatal: false }).decode(bytes);
}

function decodePart(segment: string): DecodedPart {
    const text = base64UrlDecode(segment);
    const json = JSON.parse(text);
    return { raw: text, json, pretty: JSON.stringify(json, null, 2) };
}

type ClaimRow = { key: string; value: string; hint?: string };

const TIME_CLAIMS = new Set(["exp", "nbf", "iat"]);

function formatUnix(seconds: number): string {
    const d = new Date(seconds * 1000);
    if (Number.isNaN(d.getTime())) return "invalid timestamp";
    return d.toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
}

function buildClaimRows(payload: unknown): ClaimRow[] {
    if (payload === null || typeof payload !== "object") return [];
    const rows: ClaimRow[] = [];
    for (const [key, value] of Object.entries(payload as Record<string, unknown>)) {
        let display: string;
        let hint: string | undefined;
        if (TIME_CLAIMS.has(key) && typeof value === "number") {
            display = String(value);
            hint = formatUnix(value);
        } else if (typeof value === "object") {
            display = JSON.stringify(value);
        } else {
            display = String(value);
        }
        rows.push({ key, value: display, hint });
    }
    return rows;
}

export function JwtDecoder() {
    const [token, setToken] = useState("");
    const [copied, setCopied] = useState<string | null>(null);

    const result = useMemo(() => {
        const trimmed = token.trim();
        if (!trimmed) {
            return { header: null, payload: null, signature: "", error: null as string | null };
        }
        const parts = trimmed.split(".");
        if (parts.length !== 3) {
            return {
                header: null,
                payload: null,
                signature: "",
                error: `A JWT has exactly three dot-separated parts. This input has ${parts.length}.`,
            };
        }
        try {
            const header = decodePart(parts[0]);
            const payload = decodePart(parts[1]);
            return { header, payload, signature: parts[2], error: null as string | null };
        } catch (e) {
            return {
                header: null,
                payload: null,
                signature: "",
                error: e instanceof Error ? e.message : "Could not decode token.",
            };
        }
    }, [token]);

    const claimRows = useMemo(
        () => (result.payload ? buildClaimRows(result.payload.json) : []),
        [result.payload],
    );

    const expiry = useMemo(() => {
        if (!result.payload || result.payload.json === null || typeof result.payload.json !== "object") {
            return null;
        }
        const exp = (result.payload.json as Record<string, unknown>).exp;
        if (typeof exp !== "number") return null;
        const expMs = exp * 1000;
        const isExpired = Date.now() > expMs;
        return { expMs, isExpired, label: formatUnix(exp) };
    }, [result.payload]);

    async function handleCopy(label: string, text: string) {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(label);
            setTimeout(() => setCopied(null), 2000);
        } catch {
            setCopied(null);
        }
    }

    return (
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md p-6 md:p-10 shadow-[0_0_60px_rgba(56,189,248,0.05)]">
            <div className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-400/20 bg-emerald-500/5 p-4">
                <Lock className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                <p className="text-xs leading-relaxed text-gray-300">
                    This decoder runs entirely in your browser. Your token is never uploaded,
                    logged, or sent anywhere. It is decoded with <code className="text-sky-300">atob</code>{" "}
                    and parsed locally. Never paste a production token into a tool you do not trust.
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-3">
                    <div className="flex items-center justify-between gap-3">
                        <label
                            htmlFor="jwt-input"
                            className="text-sm font-medium text-gray-300"
                        >
                            Encoded JWT
                        </label>
                        <button
                            type="button"
                            onClick={() => setToken(SAMPLE)}
                            className="text-xs text-sky-400 hover:text-sky-300"
                        >
                            Load sample
                        </button>
                    </div>
                    <textarea
                        id="jwt-input"
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                        spellCheck={false}
                        rows={12}
                        placeholder="Paste a JWT here (header.payload.signature)"
                        className="w-full break-all rounded-lg border border-white/10 bg-[#0d1526] px-4 py-3 font-mono text-sm text-white transition-colors focus:border-sky-400 focus:outline-none"
                    />
                    {result.error && (
                        <div className="flex items-start gap-2 text-xs text-rose-400">
                            <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                            <span>{result.error}</span>
                        </div>
                    )}
                    <div className="flex flex-wrap gap-3 pt-1">
                        <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            onClick={() => setToken("")}
                        >
                            Clear
                        </Button>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5">
                        <div className="mb-3 flex items-center justify-between">
                            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400">
                                <KeyRound className="h-3.5 w-3.5" /> Header
                            </p>
                            <button
                                type="button"
                                onClick={() => result.header && handleCopy("header", result.header.pretty)}
                                disabled={!result.header}
                                className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                {copied === "header" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                                {copied === "header" ? "Copied" : "Copy"}
                            </button>
                        </div>
                        {result.header ? (
                            <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-emerald-200">
                                <code>{result.header.pretty}</code>
                            </pre>
                        ) : (
                            <p className="text-xs italic text-gray-500">Decoded algorithm and token type appear here.</p>
                        )}
                    </div>

                    <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5">
                        <div className="mb-3 flex items-center justify-between">
                            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sky-400">
                                <KeyRound className="h-3.5 w-3.5" /> Payload
                            </p>
                            <button
                                type="button"
                                onClick={() => result.payload && handleCopy("payload", result.payload.pretty)}
                                disabled={!result.payload}
                                className="inline-flex items-center gap-1 text-xs text-sky-400 hover:text-sky-300 disabled:cursor-not-allowed disabled:opacity-40"
                            >
                                {copied === "payload" ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                                {copied === "payload" ? "Copied" : "Copy"}
                            </button>
                        </div>
                        {result.payload ? (
                            <pre className="overflow-x-auto font-mono text-xs leading-relaxed text-sky-200">
                                <code>{result.payload.pretty}</code>
                            </pre>
                        ) : (
                            <p className="text-xs italic text-gray-500">Decoded claims appear here.</p>
                        )}
                    </div>

                    {expiry && (
                        <div
                            className={`flex items-start gap-2 rounded-xl border p-4 text-xs leading-relaxed ${
                                expiry.isExpired
                                    ? "border-rose-400/30 bg-rose-500/5 text-rose-300"
                                    : "border-emerald-400/30 bg-emerald-500/5 text-emerald-300"
                            }`}
                        >
                            <Clock className="mt-0.5 h-4 w-4 flex-shrink-0" />
                            <span>
                                {expiry.isExpired ? "Expired" : "Expires"} {expiry.label}
                                {expiry.isExpired
                                    ? " — this token is no longer valid by its exp claim."
                                    : " — based on the exp claim (not signature-verified)."}
                            </span>
                        </div>
                    )}

                    <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5">
                        <p className="mb-2 text-xs uppercase tracking-widest text-gray-500">Signature (not verified)</p>
                        <p className="break-all font-mono text-xs text-gray-400">
                            {result.signature || <span className="italic text-gray-600">none</span>}
                        </p>
                        <p className="mt-3 border-t border-white/5 pt-3 text-xs leading-relaxed text-amber-300/90">
                            This tool decodes only. It does not verify the signature, so it cannot
                            tell you whether the token is authentic. Always verify the signature
                            server-side with the issuer&apos;s key before trusting any claim.
                        </p>
                    </div>
                </div>
            </div>

            {claimRows.length > 0 && (
                <div className="mt-8 border-t border-white/5 pt-6">
                    <p className="mb-3 text-xs uppercase tracking-widest text-gray-500">Claims table</p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                            <thead>
                                <tr className="text-gray-500">
                                    <th className="py-2 pr-4 font-medium">Claim</th>
                                    <th className="py-2 pr-4 font-medium">Value</th>
                                    <th className="py-2 font-medium">Human-readable</th>
                                </tr>
                            </thead>
                            <tbody className="font-mono text-gray-300">
                                {claimRows.map((row) => (
                                    <tr key={row.key} className="border-t border-white/5">
                                        <td className="py-2 pr-4 text-sky-300">{row.key}</td>
                                        <td className="break-all py-2 pr-4">{row.value}</td>
                                        <td className="py-2 text-gray-400">{row.hint ?? ""}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}
