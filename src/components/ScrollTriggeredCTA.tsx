"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface Props {
  onCtaClick: () => void;
  disabled?: boolean;
  threshold?: number;
  label?: string;
}

const DISMISS_KEY = "qlu-scroll-cta-dismissed";

function getScrollPercent(): number {
  if (typeof window === "undefined") return 0;
  const doc = document.documentElement;
  const scrollTop = window.scrollY || doc.scrollTop || 0;
  const max = (doc.scrollHeight || 0) - (window.innerHeight || 0);
  if (max <= 0) return 0;
  return Math.min(1, scrollTop / max);
}

export function ScrollTriggeredCTA({
  onCtaClick,
  disabled = false,
  threshold = 0.6,
  label = "Talk to Bill",
}: Props) {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const lastScrollYRef = useRef<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const d = window.sessionStorage.getItem(DISMISS_KEY);
      setDismissed(d === "1");
    } catch {
    }
  }, []);

  useEffect(() => {
    if (disabled || dismissed) {
      setVisible(false);
      return;
    }
    if (typeof window === "undefined") return;

    function onScroll() {
      const y = window.scrollY;
      const pct = getScrollPercent();
      const scrollingUp = y < lastScrollYRef.current;
      lastScrollYRef.current = y;
      if (pct >= threshold && !scrollingUp) {
        setVisible(true);
      } else if (scrollingUp || pct < threshold) {
        setVisible(false);
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold, disabled, dismissed]);

  function dismiss() {
    setDismissed(true);
    setVisible(false);
    if (typeof window === "undefined") return;
    try {
      window.sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
    }
  }

  function handleClick() {
    trackEvent("cta_click", { source: "scroll_triggered_cta" });
    onCtaClick();
  }

  if (disabled || dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: reduceMotion ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-4 right-4 z-30 lg:bottom-6 lg:right-6"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          role="region"
          aria-label="Floating call to action"
        >
          <div className="flex items-stretch gap-1.5 rounded-full border border-sky-400/30 bg-slate-900/95 p-1 shadow-[0_10px_40px_rgba(2,6,15,0.6),0_0_24px_rgba(56,189,248,0.25)] backdrop-blur-md">
            <button
              type="button"
              onClick={handleClick}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-5"
              aria-label={label}
            >
              {label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={dismiss}
              aria-label="Dismiss floating call to action"
              className="inline-flex min-h-[44px] w-10 items-center justify-center rounded-full text-slate-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ScrollTriggeredCTA;
