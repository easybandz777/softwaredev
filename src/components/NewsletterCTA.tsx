"use client";

import { useCallback, useEffect, useState } from "react";

type Variant = "card" | "inline" | "banner";

type Props = {
    source: string;
    variant?: Variant;
    headline?: string;
    cta?: string;
    subhead?: string;
    showName?: boolean;
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

export function NewsletterCTA({
    source,
    variant = "card",
    headline = "The QUANT LAB Newsletter",
    cta = "Subscribe",
    subhead = "One frank email every other Tuesday. Case studies, technical playbooks, founder hot takes. Zero fluff.",
    showName = true,
    className = "",
}: Props) {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState<Status>("idle");
    const [error, setError] = useState("");
    const [hpot, setHpot] = useState("");

    useEffect(() => {
        setStatus("idle");
    }, []);

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
                    body: JSON.stringify({
                        email: email.trim(),
                        name: name.trim() || undefined,
                        source,
                    }),
                });
                const data = (await res.json().catch(() => ({}))) as {
                    ok?: boolean;
                    status?: string;
                    error?: string;
                };
                if (!res.ok || !data.ok) {
                    setStatus("error");
                    setError(
                        data.error ||
                            "Could not subscribe. Try again in a moment.",
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
        [email, name, source, hpot],
    );

    if (status === "success") {
        return (
            <div
                className={containerClasses(variant, className)}
                role="status"
                aria-live="polite"
            >
                <div className="text-center">
                    <p className="text-lg font-semibold text-white mb-2">
                        Check your inbox to confirm.
                    </p>
                    <p className="text-sm text-gray-300">
                        See you in a week. If you don&apos;t see the
                        confirmation email, check spam or reply to{" "}
                        <a
                            href="mailto:beltz@quantlabusa.dev"
                            className="text-sky-400 hover:underline"
                        >
                            beltz@quantlabusa.dev
                        </a>
                        .
                    </p>
                </div>
            </div>
        );
    }
    if (status === "already") {
        return (
            <div
                className={containerClasses(variant, className)}
                role="status"
                aria-live="polite"
            >
                <div className="text-center">
                    <p className="text-lg font-semibold text-white mb-2">
                        You&apos;re already on the list.
                    </p>
                    <p className="text-sm text-gray-300">
                        Next issue lands the upcoming Tuesday. Past issues live
                        at{" "}
                        <a
                            href="/newsroom"
                            className="text-sky-400 hover:underline"
                        >
                            /newsroom
                        </a>
                        .
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className={containerClasses(variant, className)}>
            {variant !== "inline" && (
                <div className="mb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                        {headline}
                    </h2>
                    <p className="text-sm text-gray-300 leading-relaxed">
                        {subhead}
                    </p>
                </div>
            )}
            <form
                onSubmit={onSubmit}
                aria-label="Newsletter signup form"
                noValidate
            >
                <div
                    className={
                        variant === "inline"
                            ? "flex flex-col sm:flex-row gap-2"
                            : "flex flex-col gap-3"
                    }
                >
                    {showName && variant !== "inline" && (
                        <label className="block">
                            <span className="sr-only">First name</span>
                            <input
                                type="text"
                                autoComplete="given-name"
                                placeholder="First name (optional)"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full min-h-[44px] px-4 py-2 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:border-sky-400"
                                aria-label="First name (optional)"
                            />
                        </label>
                    )}
                    <label className={variant === "inline" ? "flex-1" : "block"}>
                        <span className="sr-only">Email address</span>
                        <input
                            type="email"
                            inputMode="email"
                            autoComplete="email"
                            required
                            placeholder="you@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full min-h-[44px] px-4 py-2 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:border-sky-400"
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
                        className="min-h-[44px] px-6 py-2 rounded-lg font-semibold text-white bg-sky-500 hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg shadow-[0_0_15px_rgba(56,189,248,0.3)]"
                        aria-label={cta}
                    >
                        {status === "submitting" ? "Subscribing..." : cta}
                    </button>
                </div>
                {status === "error" && error && (
                    <p
                        role="alert"
                        aria-live="assertive"
                        className="mt-3 text-sm text-red-400"
                    >
                        {error}
                    </p>
                )}
                <p className="mt-3 text-xs text-gray-500">
                    Double opt-in. Unsubscribe anytime. We never sell or share
                    your email.
                </p>
            </form>
        </div>
    );
}

function containerClasses(variant: Variant, extra: string): string {
    const base = "w-full";
    if (variant === "card") {
        return `${base} rounded-2xl border border-sky-400/30 bg-gradient-to-br from-sky-500/10 to-cyan-500/5 p-6 md:p-8 ${extra}`;
    }
    if (variant === "banner") {
        return `${base} rounded-xl border border-white/10 bg-quant-card/60 backdrop-blur-md p-5 ${extra}`;
    }
    return `${base} ${extra}`;
}

export default NewsletterCTA;
