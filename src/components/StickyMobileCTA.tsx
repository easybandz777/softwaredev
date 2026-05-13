"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface Props {
  onBookClick: () => void;
  hidden?: boolean;
  phone?: string;
}

const DEFAULT_PHONE = "+17706521282";
const DISPLAY_PHONE = "(770) 652-1282";

export function StickyMobileCTA({ onBookClick, hidden = false, phone = DEFAULT_PHONE }: Props) {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shouldShow = mounted && !hidden;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: reduceMotion ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/95 backdrop-blur-md lg:hidden"
          style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          role="region"
          aria-label="Quick contact actions"
        >
          <div className="mx-auto flex max-w-3xl items-stretch gap-2 px-3 py-2.5">
            <a
              href={`tel:${phone}`}
              onClick={() => trackEvent("cta_click", { source: "sticky_mobile_call" })}
              aria-label={`Call ${DISPLAY_PHONE}`}
              className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 text-sm font-semibold text-white transition-colors active:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>Call {DISPLAY_PHONE}</span>
            </a>
            <button
              type="button"
              onClick={() => {
                trackEvent("cta_click", { source: "sticky_mobile_book" });
                onBookClick();
              }}
              aria-label="Book a call"
              className="flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 text-sm font-semibold text-white shadow-[0_0_18px_rgba(56,189,248,0.35)] transition-colors active:bg-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <Calendar className="h-4 w-4" aria-hidden="true" />
              <span>Book a Call</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default StickyMobileCTA;
