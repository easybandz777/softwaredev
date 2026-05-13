"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, CheckCircle, Loader2, Download } from "lucide-react";
import { trackEvent, trackLead } from "@/lib/analytics";

interface Props {
  slug: string;
  resourceName: string;
  resourceUrl: string;
  inactivityMs?: number;
  enabled?: boolean;
}

type Status = "idle" | "loading" | "success" | "error";

const SESSION_KEY_PREFIX = "qlu-exit-intent-shown:";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function hasShownThisSession(slug: string): boolean {
  if (typeof window === "undefined") return true;
  try {
    return window.sessionStorage.getItem(`${SESSION_KEY_PREFIX}${slug}`) === "1";
  } catch {
    return true;
  }
}

function markShownThisSession(slug: string): void {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(`${SESSION_KEY_PREFIX}${slug}`, "1");
  } catch {
  }
}

function isMobileViewport(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 1023px)").matches;
}

export function ExitIntentModal({
  slug,
  resourceName,
  resourceUrl,
  inactivityMs = 60000,
  enabled = true,
}: Props) {
  const reduceMotion = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const lastActivityRef = useRef<number>(Date.now());
  const hasTriggeredRef = useRef<boolean>(false);

  const trigger = useCallback(() => {
    if (hasTriggeredRef.current) return;
    if (hasShownThisSession(slug)) return;
    hasTriggeredRef.current = true;
    markShownThisSession(slug);
    setOpen(true);
    trackEvent("cta_click", { source: `exit_intent_open_${slug}` });
  }, [slug]);

  useEffect(() => {
    if (!enabled) return;
    if (typeof window === "undefined") return;
    if (hasShownThisSession(slug)) {
      hasTriggeredRef.current = true;
      return;
    }

    const mobile = isMobileViewport();

    function onMouseLeave(e: MouseEvent) {
      if (mobile) return;
      if (e.clientY <= 8 && (e.relatedTarget === null || e.relatedTarget === undefined)) {
        trigger();
      }
    }

    function resetActivity() {
      lastActivityRef.current = Date.now();
    }

    let inactivityTimer: number | undefined;
    if (mobile) {
      inactivityTimer = window.setInterval(() => {
        const elapsed = Date.now() - lastActivityRef.current;
        if (elapsed >= inactivityMs) {
          trigger();
        }
      }, 5000);
      window.addEventListener("touchstart", resetActivity, { passive: true });
      window.addEventListener("scroll", resetActivity, { passive: true });
      window.addEventListener("keydown", resetActivity);
    } else {
      document.addEventListener("mouseout", onMouseLeave);
    }

    return () => {
      if (inactivityTimer) window.clearInterval(inactivityTimer);
      document.removeEventListener("mouseout", onMouseLeave);
      window.removeEventListener("touchstart", resetActivity);
      window.removeEventListener("scroll", resetActivity);
      window.removeEventListener("keydown", resetActivity);
    };
  }, [enabled, inactivityMs, slug, trigger]);

  const close = useCallback(() => {
    setOpen(false);
    setStatus("idle");
    setErrorMsg("");
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        close();
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => firstFieldRef.current?.focus(), 50);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(t);
    };
  }, [open, close]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim() || !EMAIL_RE.test(email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      const source = `exit-intent-${slug}`;
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim() || "Exit Intent Visitor",
          email: email.trim(),
          source,
          magnet: resourceName,
        }),
      });
      if (!res.ok) {
        const d = await res.json().catch(() => ({}));
        throw new Error(d.error || "Submission failed.");
      }
      trackLead({ source, magnet: resourceName });
      setStatus("success");
    } catch (err: unknown) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={overlayRef}
          initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.22 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
          style={{ background: "rgba(2,6,15,0.78)", backdropFilter: "blur(8px)" }}
          onClick={(e) => {
            if (e.target === overlayRef.current) close();
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="exit-intent-title"
            aria-describedby="exit-intent-desc"
            initial={reduceMotion ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md rounded-2xl border border-sky-400/20 bg-slate-950 p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close dialog"
              className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-400 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>

            {status === "success" ? (
              <div className="py-4 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-400/10 ring-1 ring-emerald-400/30">
                  <CheckCircle className="h-7 w-7 text-emerald-400" aria-hidden="true" />
                </div>
                <h2 id="exit-intent-title" className="mb-2 text-xl font-bold text-white">
                  Sent to your inbox
                </h2>
                <p id="exit-intent-desc" className="mb-5 text-sm text-slate-300">
                  Check your email for {resourceName}. Or grab it right now.
                </p>
                <a
                  href={resourceUrl}
                  className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  download
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download {resourceName}
                </a>
              </div>
            ) : (
              <>
                <h2 id="exit-intent-title" className="mb-1.5 pr-8 text-xl font-bold text-white">
                  Before you go, grab the {resourceName}
                </h2>
                <p id="exit-intent-desc" className="mb-5 text-sm text-slate-300">
                  We will email it instantly. No spam, no drip nags you cannot unsubscribe from.
                </p>
                <form onSubmit={onSubmit} className="space-y-3">
                  <div>
                    <label
                      htmlFor="exit-intent-name"
                      className="mb-1.5 block text-xs font-medium text-slate-300"
                    >
                      First name (optional)
                    </label>
                    <input
                      id="exit-intent-name"
                      ref={firstFieldRef}
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      autoComplete="given-name"
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="exit-intent-email"
                      className="mb-1.5 block text-xs font-medium text-slate-300"
                    >
                      Work email
                    </label>
                    <input
                      id="exit-intent-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      autoComplete="email"
                      className="w-full rounded-lg border border-white/15 bg-white/5 px-3 py-2.5 text-sm text-white placeholder-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
                      placeholder="jane@company.com"
                    />
                  </div>
                  {errorMsg && (
                    <p
                      role="alert"
                      className="rounded-lg border border-rose-400/30 bg-rose-400/10 px-3 py-2 text-xs text-rose-300"
                    >
                      {errorMsg}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex w-full min-h-[44px] items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(56,189,248,0.3)] transition-colors hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:opacity-60"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                        Sending
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4" aria-hidden="true" />
                        Send me the {resourceName}
                      </>
                    )}
                  </button>
                  <p className="text-center text-[11px] text-slate-500">
                    No spam. Unsubscribe in one click.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ExitIntentModal;
