"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";

interface Props {
  items?: string[];
  rotateMs?: number;
  dismissable?: boolean;
}

const DEFAULT_ITEMS = [
  "Trusted by 14 clients across Atlanta, Macon, NYC, SF, and Austin",
  "5.0 stars on Google (verified) — see /reviews",
  "EIN-registered Georgia C-Corp — GA SOS #26086454",
  "Member of [pending — chamber and trade orgs to be listed here]",
];

const DISMISS_KEY = "qlu-social-proof-dismissed-v1";

export function SocialProofBar({
  items = DEFAULT_ITEMS,
  rotateMs = 5000,
  dismissable = true,
}: Props) {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const safeItems = items.filter((s) => s && s.trim().length > 0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!dismissable) {
      setVisible(true);
      return;
    }
    try {
      const dismissed = window.localStorage.getItem(DISMISS_KEY);
      setVisible(dismissed !== "1");
    } catch {
      setVisible(true);
    }
  }, [dismissable]);

  useEffect(() => {
    if (!visible || safeItems.length <= 1) return;
    const interval = window.setInterval(() => {
      setIndex((i) => (i + 1) % safeItems.length);
    }, Math.max(1500, rotateMs));
    return () => window.clearInterval(interval);
  }, [visible, rotateMs, safeItems.length]);

  const dismiss = useCallback(() => {
    setVisible(false);
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
    }
  }, []);

  if (!visible || safeItems.length === 0) return null;

  const current = safeItems[index] ?? safeItems[0];

  return (
    <div
      role="region"
      aria-label="Trust signals"
      aria-live="polite"
      className="relative w-full border-b border-white/10 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-2 text-center sm:px-6">
        <ShieldCheck
          aria-hidden="true"
          className="h-4 w-4 shrink-0 text-sky-400"
        />
        <div className="relative min-h-[20px] flex-1 overflow-hidden text-xs font-medium text-slate-100 sm:text-sm">
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={current}
              initial={reduceMotion ? { opacity: 1 } : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
              transition={{ duration: reduceMotion ? 0 : 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="block truncate"
            >
              {current}
            </motion.span>
          </AnimatePresence>
        </div>
        {dismissable && (
          <button
            type="button"
            onClick={dismiss}
            aria-label="Dismiss trust signals bar"
            className="ml-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}

export default SocialProofBar;
