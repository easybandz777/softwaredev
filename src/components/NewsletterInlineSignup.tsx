"use client";

import { useCallback, useState } from "react";

type Props = {
    source: string;
    headline?: string;
    cta?: string;
    className?: string;
};

type Status = "idle" | "submitting" | "success" | "already" | "error";

function hasConsent(): boolean {
    if (typeof document === "undefined") return false;
    const match = document.cookie
        .split("; ")
        .find((row) => row.startsWith("qlu-consent="));
    if (!match) return false;
    const v = decodeURIComponent(match.split("=")[1] ?? "");
    return v === "granted";
}

function trackSignup(source: string): void {
    if (typeof window === "undefined") return;
    if (!hasConsent()) return;
    try {
        if (typeof window.gtag === "function") {
            window.gtag("event", "newsletter_signup", { source });
        }
    } catch {
        // swallow
    }
    try {
        if (typeof window.plausible === "function") {
            window.plausible("newsletter_signup", { props: { source } });
        }
    } catch {
        // swallow
    }
}

export function NewsletterInlineSignup({
    source,
    headline = "Get the next issue in your inbox.",
    cta = "Subscribe",
    className = "",
}: Props) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState("");
    const [hpot, setHpot] = useState("");

    const onSubmit = useCallback(
        async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if (hpot) return;
            if (!email.trim()) {
                setStatus("error");
                setError("Email is required.");
                return;
            }
            setStatus("submitting");
            setError("");
            try {
                const res = await fetch("/api/newsletter/subscribe", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: email.trim(), source }),
                });
                const data = (await res.json().catch(() => ({}))) as {
                    ok?: boolean;
                    status?: string;
                    error?: string;
                };
                if (!res.ok || !data.ok) {
                    setStatus("error");
                    setError(
                        data.error || "Could not subscribe. Try again later.",
                    );
                    return;
                }
                trackSignup(source);
                if (data.status === "already_subscribed") {
                    setStatus("already");
                } else {
                    setStatus("success");
                }
            } catch {
                setStatus("error");
                setError("Network error. Try again.");
            }
        },
        [email, source, hpot],
    );

    if (status === "success") {
        return (
            <div
                className={`rounded-xl border border-sky-400/30 bg-sky-500/10 p-5 ${className}`}
                role="status"
                aria-live="polite"
            >
                <p className="text-sm font-semibold text-white">
                    Check your inbox to confirm — see you in a week.
                </p>
            </div>
        );
    }
    if (status === "already") {
        return (
            <div
                className={`rounded-xl border border-white/10 bg-quant-card/60 p-5 ${className}`}
                role="status"
                aria-live="polite"
            >
                <p className="text-sm font-semibold text-white">
                    Already subscribed. Next issue lands Tuesday.
                </p>
            </div>
        );
    }

    return (
        <aside
            aria-label="Newsletter signup"
            className={`rounded-xl border border-sky-400/30 bg-gradient-to-r from-sky-500/10 to-cyan-500/5 p-5 my-8 ${className}`}
        >
            <div className="flex flex-col md:flex-row md:items-center md:gap-6">
                <div className="flex-1 mb-3 md:mb-0">
                    <p className="text-base font-semibold text-white">
                        {headline}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                        Every other Tuesday. One frank email. No fluff.
                    </p>
                </div>
                <form
                    onSubmit={onSubmit}
                    className="flex flex-col sm:flex-row gap-2 md:flex-1"
                    aria-label="Inline newsletter signup form"
                    noValidate
                >
                    <label className="flex-1">
                        <span className="sr-only">Email address</span>
                        <input
                            type="email"
                            inputMode="email"
                            autoComplete="email"
                            required
                            placeholder="you@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full min-h-[44px] px-3 py-2 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:border-sky-400"
                            aria-label="Email address"
                            aria-required="true"
                        />
                    </label>
                    <div
                        aria-hidden="true"
                        style={{
                            position: "absolute",
                            left: "-9999px",
                            top: "auto",
                            width: "1px",
                            height: "1px",
                            overflow: "hidden",
                        }}
                    >
                        <label>
                            Leave blank
                            <input
                                type="text"
                                tabIndex={-1}
                                autoComplete="off"
                                value={hpot}
                                onChange={(e) => setHpot(e.target.value)}
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="min-h-[44px] px-5 py-2 rounded-lg font-semibold text-white bg-sky-500 hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg"
                        aria-label={cta}
                    >
                        {status === "submitting" ? "..." : cta}
                    </button>
                </form>
            </div>
            {status === "error" && error && (
                <p
                    role="alert"
                    aria-live="assertive"
                    className="mt-2 text-sm text-red-400"
                >
                    {error}
                </p>
            )}
        </aside>
    );
}

export default NewsletterInlineSignup;
