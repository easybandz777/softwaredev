"use client";

import { useCallback, useEffect, useState } from "react";

const COOKIE = "qlu-consent";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${name}=`));
  return match ? decodeURIComponent(match.split("=")[1] ?? "") : null;
}

function writeCookie(name: string, value: string, maxAgeSeconds: number): void {
  if (typeof document === "undefined") return;
  const secure =
    typeof window !== "undefined" && window.location.protocol === "https:"
      ? "; Secure"
      : "";
  document.cookie = `${name}=${encodeURIComponent(value)}; Path=/; Max-Age=${maxAgeSeconds}; SameSite=Lax${secure}`;
}

function emitChange(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("qlu-consent-change"));
}

function dntEnabled(): boolean {
  if (typeof navigator === "undefined") return false;
  const dnt =
    navigator.doNotTrack ||
    (window as unknown as { doNotTrack?: string }).doNotTrack ||
    (navigator as unknown as { msDoNotTrack?: string }).msDoNotTrack;
  return dnt === "1" || dnt === "yes";
}

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (dntEnabled()) {
      setVisible(false);
      return;
    }
    const existing = readCookie(COOKIE);
    if (existing === "granted" || existing === "denied") {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, []);

  const dismiss = useCallback((value: "granted" | "denied") => {
    writeCookie(COOKIE, value, COOKIE_MAX_AGE);
    emitChange();
    setVisible(false);
  }, []);

  useEffect(() => {
    if (!visible) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        dismiss("denied");
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [visible, dismiss]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie and analytics consent"
      className="fixed bottom-4 right-4 left-4 sm:left-auto sm:max-w-sm z-[60] rounded-2xl border border-white/10 bg-quant-card/95 backdrop-blur-md shadow-2xl p-5 text-sm text-quant-text"
      style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.55), 0 0 24px rgba(56,189,248,0.08)" }}
    >
      <div className="flex flex-col gap-3">
        <p className="text-quant-text leading-relaxed">
          We use analytics cookies to understand how visitors use this site so
          we can improve it.{" "}
          <a
            href="/privacy"
            className="text-quant-light underline underline-offset-2 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-quant-blue rounded"
          >
            Learn more
          </a>
        </p>
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-end">
          <button
            type="button"
            onClick={() => dismiss("denied")}
            className="min-h-[44px] px-4 py-2 rounded-full text-sm font-medium text-quant-text border border-white/15 bg-white/5 hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-quant-blue"
          >
            Reject non-essential
          </button>
          <button
            type="button"
            onClick={() => dismiss("granted")}
            className="min-h-[44px] px-5 py-2 rounded-full text-sm font-semibold text-white bg-quant-blue hover:bg-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shadow-[0_0_15px_rgba(59,130,246,0.3)]"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConsentBanner;
