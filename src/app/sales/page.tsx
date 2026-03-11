"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Lock } from "lucide-react";

export default function SalesLoginPage() {
    const router = useRouter();
    const [creds, setCreds] = useState({ username: "", password: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
    const [errMsg, setErrMsg] = useState("");

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setStatus("loading");
        setErrMsg("");
        try {
            const res = await fetch("/api/admin/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(creds),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Login failed.");
            // Always redirect to sales dashboard when logging in via /sales
            router.push("/sales/dashboard");
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : "Login failed.";
            setErrMsg(msg);
            setStatus("error");
        }
    }

    const inp = `w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white 
        placeholder-gray-600 focus:outline-none focus:border-emerald-400/50 focus:ring-1 focus:ring-emerald-400/20 
        transition-all duration-200 mt-1.5`;

    return (
        <div className="min-h-screen flex items-center justify-center p-6"
            style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(52,211,153,0.06), transparent 70%), #080d18" }}>
            {/* Subtle grid */}
            <div className="fixed inset-0 pointer-events-none" style={{
                backgroundImage: "linear-gradient(rgba(52,211,153,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.03) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
            }} />

            <div className="relative w-full max-w-sm">
                <div className="rounded-2xl p-8" style={{
                    background: "linear-gradient(145deg, #0d1526, #0a1020)",
                    border: "1px solid rgba(52,211,153,0.12)",
                    boxShadow: "0 0 60px rgba(52,211,153,0.05), 0 20px 40px rgba(0,0,0,0.5)",
                }}>
                    <div className="absolute top-0 left-0 right-0 h-px rounded-t-2xl"
                        style={{ background: "linear-gradient(90deg, transparent, rgba(52,211,153,0.5), transparent)" }} />

                    <div className="mx-auto mb-6 w-12 h-12 rounded-xl flex items-center justify-center" style={{
                        background: "rgba(52,211,153,0.08)",
                        border: "1px solid rgba(52,211,153,0.15)",
                    }}>
                        <Lock className="w-5 h-5 text-emerald-400" />
                    </div>

                    <div className="text-center mb-7">
                        <h1 className="text-xl font-bold text-white">Sales Portal</h1>
                        <p className="text-gray-500 text-sm mt-1">Sign in to manage leads &amp; clients</p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="text-xs font-medium text-gray-400">Username</label>
                            <input
                                className={inp}
                                placeholder="username"
                                value={creds.username}
                                onChange={e => setCreds(c => ({ ...c, username: e.target.value }))}
                                required
                                autoComplete="username"
                            />
                        </div>
                        <div>
                            <label className="text-xs font-medium text-gray-400">Password</label>
                            <input
                                type="password"
                                className={inp}
                                placeholder="••••••••"
                                value={creds.password}
                                onChange={e => setCreds(c => ({ ...c, password: e.target.value }))}
                                required
                                autoComplete="current-password"
                            />
                        </div>

                        {errMsg && (
                            <p className="text-rose-400 text-xs bg-rose-400/5 border border-rose-400/10 rounded-lg px-3 py-2">{errMsg}</p>
                        )}

                        <button
                            type="submit"
                            disabled={status === "loading"}
                            className="w-full py-3 rounded-xl font-semibold text-sm text-white transition-all disabled:opacity-50 flex items-center justify-center gap-2 mt-2"
                            style={{ background: "linear-gradient(135deg, #059669, #34d399)", boxShadow: "0 0 20px rgba(52,211,153,0.2)" }}
                        >
                            {status === "loading" ? <><Loader2 className="w-4 h-4 animate-spin" /> Signing in…</> : "Sign In"}
                        </button>
                    </form>
                </div>

                <p className="text-center text-gray-700 text-xs mt-4">QuantLab Software Solutions · Sales Portal</p>
            </div>
        </div>
    );
}
