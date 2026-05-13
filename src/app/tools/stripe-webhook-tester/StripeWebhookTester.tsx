"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Check, AlertTriangle, Shield, Copy, RotateCcw } from "lucide-react";

type VerificationStep = {
    name: string;
    status: "pending" | "pass" | "fail";
    detail: string;
};

type VerificationResult = {
    valid: boolean;
    steps: VerificationStep[];
    computedSig: string | null;
    extractedTimestamp: string | null;
    extractedSig: string | null;
};

function parseSignatureHeader(header: string): {
    timestamp: string | null;
    sigs: string[];
} {
    const parts = header.split(",").map((p) => p.trim());
    let timestamp: string | null = null;
    const sigs: string[] = [];
    for (const part of parts) {
        const eqIdx = part.indexOf("=");
        if (eqIdx === -1) continue;
        const key = part.slice(0, eqIdx).trim();
        const value = part.slice(eqIdx + 1).trim();
        if (key === "t") timestamp = value;
        if (key === "v1") sigs.push(value);
    }
    return { timestamp, sigs };
}

async function hmacSha256Hex(secret: string, message: string): Promise<string> {
    const enc = new TextEncoder();
    const keyData = enc.encode(secret);
    const msgData = enc.encode(message);
    const cryptoKey = await crypto.subtle.importKey(
        "raw",
        keyData,
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"],
    );
    const sigBuf = await crypto.subtle.sign("HMAC", cryptoKey, msgData);
    const sigArr = Array.from(new Uint8Array(sigBuf));
    return sigArr.map((b) => b.toString(16).padStart(2, "0")).join("");
}

function constantTimeEqual(a: string, b: string): boolean {
    if (a.length !== b.length) return false;
    let result = 0;
    for (let i = 0; i < a.length; i++) {
        result |= a.charCodeAt(i) ^ b.charCodeAt(i);
    }
    return result === 0;
}

const SAMPLE_PAYLOAD = `{
  "id": "evt_test_webhook",
  "object": "event",
  "api_version": "2024-04-10",
  "created": 1709200000,
  "type": "checkout.session.completed",
  "data": {
    "object": {
      "id": "cs_test_a1b2c3",
      "amount_total": 4900,
      "currency": "usd",
      "customer": "cus_test_xyz"
    }
  }
}`;

export function StripeWebhookTester() {
    const [payload, setPayload] = useState(SAMPLE_PAYLOAD);
    const [secret, setSecret] = useState("whsec_test_secret_replace_me");
    const [sigHeader, setSigHeader] = useState("");
    const [tolerance, setTolerance] = useState(300);
    const [result, setResult] = useState<VerificationResult | null>(null);
    const [busy, setBusy] = useState(false);
    const [generated, setGenerated] = useState<{ ts: string; sig: string } | null>(null);

    const trimmedPayload = useMemo(() => payload.trim(), [payload]);

    async function generateValidSignature() {
        setBusy(true);
        try {
            const ts = Math.floor(Date.now() / 1000).toString();
            const signedPayload = `${ts}.${trimmedPayload}`;
            const sig = await hmacSha256Hex(secret, signedPayload);
            const header = `t=${ts},v1=${sig}`;
            setSigHeader(header);
            setGenerated({ ts, sig });
        } finally {
            setBusy(false);
        }
    }

    async function verify() {
        setBusy(true);
        const steps: VerificationStep[] = [];
        let valid = true;
        let computedSig: string | null = null;
        let extractedTimestamp: string | null = null;
        let extractedSig: string | null = null;

        try {
            steps.push({
                name: "Parse Stripe-Signature header",
                status: "pending",
                detail: "Splitting on commas, extracting t= and v1= pairs.",
            });
            const { timestamp, sigs } = parseSignatureHeader(sigHeader);
            if (!timestamp || sigs.length === 0) {
                steps[steps.length - 1] = {
                    name: "Parse Stripe-Signature header",
                    status: "fail",
                    detail:
                        "Header is missing t= timestamp or v1= signature. Stripe sends both, comma-separated.",
                };
                valid = false;
            } else {
                extractedTimestamp = timestamp;
                extractedSig = sigs[0];
                steps[steps.length - 1] = {
                    name: "Parse Stripe-Signature header",
                    status: "pass",
                    detail: `Found timestamp t=${timestamp} and ${sigs.length} v1 signature(s).`,
                };
            }

            steps.push({
                name: "Validate JSON payload",
                status: "pending",
                detail: "Stripe sends a raw JSON body. Any reformat invalidates the signature.",
            });
            try {
                JSON.parse(trimmedPayload);
                steps[steps.length - 1] = {
                    name: "Validate JSON payload",
                    status: "pass",
                    detail:
                        "Payload parses as JSON. Reminder: in production, sign the raw body bytes — not your parsed object.",
                };
            } catch {
                steps[steps.length - 1] = {
                    name: "Validate JSON payload",
                    status: "fail",
                    detail: "Payload is not valid JSON.",
                };
                valid = false;
            }

            steps.push({
                name: "Check timestamp tolerance",
                status: "pending",
                detail: `Stripe defaults to a ${tolerance}-second window to prevent replay attacks.`,
            });
            if (extractedTimestamp) {
                const ts = parseInt(extractedTimestamp, 10);
                const now = Math.floor(Date.now() / 1000);
                const diff = Math.abs(now - ts);
                if (diff <= tolerance) {
                    steps[steps.length - 1] = {
                        name: "Check timestamp tolerance",
                        status: "pass",
                        detail: `Timestamp is ${diff}s old. Within ${tolerance}s tolerance.`,
                    };
                } else {
                    steps[steps.length - 1] = {
                        name: "Check timestamp tolerance",
                        status: "fail",
                        detail: `Timestamp is ${diff}s old. Outside ${tolerance}s tolerance — would be rejected as replay.`,
                    };
                    valid = false;
                }
            }

            steps.push({
                name: "Compute HMAC-SHA256 signature",
                status: "pending",
                detail: "Building signed payload = timestamp + '.' + raw_body, then HMAC with secret.",
            });
            if (extractedTimestamp) {
                const signedPayload = `${extractedTimestamp}.${trimmedPayload}`;
                computedSig = await hmacSha256Hex(secret, signedPayload);
                steps[steps.length - 1] = {
                    name: "Compute HMAC-SHA256 signature",
                    status: "pass",
                    detail: `signed_payload = "${extractedTimestamp}.<body>". computed = ${computedSig.slice(
                        0,
                        16,
                    )}...`,
                };
            }

            steps.push({
                name: "Constant-time compare with v1",
                status: "pending",
                detail: "Compare computed signature with v1 from header.",
            });
            if (computedSig && extractedSig) {
                if (constantTimeEqual(computedSig, extractedSig)) {
                    steps[steps.length - 1] = {
                        name: "Constant-time compare with v1",
                        status: "pass",
                        detail: "Signatures match. Webhook is authentic.",
                    };
                } else {
                    steps[steps.length - 1] = {
                        name: "Constant-time compare with v1",
                        status: "fail",
                        detail:
                            "Signatures do not match. Either the secret is wrong, the payload was modified in transit, or the header is from a different webhook.",
                    };
                    valid = false;
                }
            }
        } catch (err) {
            steps.push({
                name: "Verification error",
                status: "fail",
                detail: err instanceof Error ? err.message : "Unknown error during verification.",
            });
            valid = false;
        } finally {
            setBusy(false);
        }

        setResult({ valid, steps, computedSig, extractedTimestamp, extractedSig });
    }

    function reset() {
        setPayload(SAMPLE_PAYLOAD);
        setSecret("whsec_test_secret_replace_me");
        setSigHeader("");
        setResult(null);
        setGenerated(null);
    }

    async function copyToClipboard(text: string) {
        try {
            await navigator.clipboard.writeText(text);
        } catch {
            // Older browser fallback handled at field level
        }
    }

    return (
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md p-6 md:p-10 shadow-[0_0_60px_rgba(56,189,248,0.05)]">
            <div className="flex flex-wrap items-center gap-2 mb-6">
                <Shield className="w-5 h-5 text-emerald-400" />
                <p className="text-xs uppercase tracking-widest text-emerald-400">
                    All cryptography runs in your browser — secret never leaves the tab
                </p>
            </div>

            <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3 space-y-5">
                    <div>
                        <label
                            htmlFor="payload"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Webhook payload (raw JSON body)
                        </label>
                        <textarea
                            id="payload"
                            value={payload}
                            onChange={(e) => setPayload(e.target.value)}
                            rows={12}
                            spellCheck={false}
                            className="w-full font-mono text-xs rounded-lg bg-[#0d1526] border border-white/10 px-4 py-3 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="secret"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Webhook signing secret (whsec_...)
                        </label>
                        <input
                            id="secret"
                            type="password"
                            value={secret}
                            onChange={(e) => setSecret(e.target.value)}
                            spellCheck={false}
                            autoComplete="off"
                            className="w-full font-mono text-sm rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                        <p className="text-xs text-gray-500 mt-1.5">
                            Stripe Dashboard → Developers → Webhooks → pick endpoint → Signing secret.
                        </p>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-2">
                            <label
                                htmlFor="sigHeader"
                                className="block text-sm font-medium text-gray-300"
                            >
                                Stripe-Signature header
                            </label>
                            <button
                                type="button"
                                onClick={generateValidSignature}
                                disabled={busy || !secret || !trimmedPayload}
                                className="text-xs text-sky-400 hover:text-sky-300 disabled:opacity-40 disabled:cursor-not-allowed underline-offset-2 hover:underline"
                            >
                                Generate a valid signature for me
                            </button>
                        </div>
                        <textarea
                            id="sigHeader"
                            value={sigHeader}
                            onChange={(e) => setSigHeader(e.target.value)}
                            rows={3}
                            placeholder="t=1709200000,v1=5257a86..."
                            spellCheck={false}
                            className="w-full font-mono text-xs rounded-lg bg-[#0d1526] border border-white/10 px-4 py-3 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="tolerance"
                            className="block text-sm font-medium text-gray-300 mb-2"
                        >
                            Replay tolerance (seconds)
                        </label>
                        <input
                            id="tolerance"
                            type="number"
                            min={1}
                            max={86400}
                            value={tolerance}
                            onChange={(e) => setTolerance(Math.max(1, Number(e.target.value) || 1))}
                            className="w-32 rounded-lg bg-[#0d1526] border border-white/10 px-3 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <Button
                            type="button"
                            variant="primary"
                            size="md"
                            onClick={verify}
                            disabled={busy || !sigHeader.trim() || !secret.trim() || !trimmedPayload}
                        >
                            Verify signature
                        </Button>
                        <Button type="button" variant="ghost" size="md" onClick={reset}>
                            <RotateCcw className="w-4 h-4" />
                            Reset
                        </Button>
                    </div>
                </div>

                <div className="lg:col-span-2">
                    <div className="lg:sticky lg:top-32 space-y-4">
                        {!result && (
                            <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5">
                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                                    Awaiting verification
                                </p>
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    Paste a webhook body, secret, and Stripe-Signature header. We compute
                                    HMAC-SHA256 in your browser and walk you through every step.
                                </p>
                            </div>
                        )}

                        {result && (
                            <div
                                className={`rounded-xl border p-5 ${
                                    result.valid
                                        ? "border-emerald-400/30 bg-emerald-400/5"
                                        : "border-rose-400/30 bg-rose-400/5"
                                }`}
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    {result.valid ? (
                                        <Check className="w-5 h-5 text-emerald-400" />
                                    ) : (
                                        <AlertTriangle className="w-5 h-5 text-rose-400" />
                                    )}
                                    <p className="text-sm font-semibold text-white">
                                        {result.valid
                                            ? "Signature is valid"
                                            : "Signature failed verification"}
                                    </p>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    {result.valid
                                        ? "All checks passed — this request would be accepted by your endpoint."
                                        : "Stripe would reject this payload. See the failed step below."}
                                </p>
                            </div>
                        )}

                        {result && (
                            <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5">
                                <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                                    Verification steps
                                </p>
                                <ol className="space-y-3">
                                    {result.steps.map((s) => (
                                        <li key={s.name} className="flex gap-2">
                                            {s.status === "pass" && (
                                                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                                            )}
                                            {s.status === "fail" && (
                                                <AlertTriangle className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                                            )}
                                            {s.status === "pending" && (
                                                <span className="w-4 h-4 rounded-full border border-gray-600 flex-shrink-0 mt-0.5" />
                                            )}
                                            <div className="space-y-1">
                                                <p className="text-xs font-medium text-white">{s.name}</p>
                                                <p className="text-xs text-gray-400 leading-relaxed">
                                                    {s.detail}
                                                </p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        )}

                        {result?.computedSig && (
                            <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-5">
                                <div className="flex items-center justify-between mb-2">
                                    <p className="text-xs uppercase tracking-widest text-gray-500">
                                        Computed HMAC-SHA256
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => copyToClipboard(result.computedSig as string)}
                                        className="text-xs text-sky-400 hover:text-sky-300 inline-flex items-center gap-1"
                                    >
                                        <Copy className="w-3 h-3" /> copy
                                    </button>
                                </div>
                                <p className="font-mono text-xs text-emerald-300 break-all">
                                    {result.computedSig}
                                </p>
                            </div>
                        )}

                        {generated && (
                            <div className="rounded-xl border border-sky-400/20 bg-sky-400/5 p-5">
                                <p className="text-xs uppercase tracking-widest text-sky-300 mb-2">
                                    Generated header (for testing)
                                </p>
                                <p className="text-xs text-gray-400 mb-2">
                                    Use this in curl, Postman, or your unit tests to simulate a real
                                    Stripe-Signature.
                                </p>
                                <p className="font-mono text-xs text-white break-all">
                                    t={generated.ts},v1={generated.sig}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
