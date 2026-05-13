"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X, Megaphone, ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface Props {
  message: string;
  href?: string;
  dismissable?: boolean;
  ariaLabel?: string;
}

function hashMessage(s: string): string {
  let h = 5381;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) + h) ^ s.charCodeAt(i);
  }
  return (h >>> 0).toString(36);
}

export function AnnouncementBar({
  message,
  href,
  dismissable = true,
  ariaLabel,
}: Props) {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const key = `qlu-announce-dismissed:${hashMessage(message)}`;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!message.trim()) {
      setVisible(false);
      return;
    }
    if (!dismissable) {
      setVisible(true);
      return;
    }
    try {
      const v = window.localStorage.getItem(key);
      setVisible(v !== "1");
    } catch {
      setVisible(true);
    }
  }, [message, dismissable, key]);

  const dismiss = useCallback(() => {
    setVisible(false);
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem(key, "1");
    } catch {
    }
  }, [key]);

  if (!message.trim()) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={reduceMotion ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={reduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.24, ease: [0.16, 1, 0.3, 1] }}
          role="region"
          aria-label={ariaLabel ?? "Announcement"}
          className="w-full overflow-hidden bg-gradient-to-r from-sky-600 via-sky-500 to-indigo-500 text-white"
        >
          <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 text-sm sm:px-6">
            <Megaphone className="h-4 w-4 shrink-0" aria-hidden="true" />
            <div className="min-w-0 flex-1 truncate font-medium">
              {href ? (
                <a
                  href={href}
                  onClick={() => trackEvent("cta_click", { source: "announcement_bar" })}
                  className="inline-flex items-center gap-1.5 underline-offset-2 hover:underline focus-visible:underline focus-visible:outline-none"
                >
                  <span className="truncate">{message}</span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                </a>
              ) : (
                <span className="truncate">{message}</span>
              )}
            </div>
            {dismissable && (
              <button
                type="button"
                onClick={dismiss}
                aria-label="Dismiss announcement"
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-white/90 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AnnouncementBar;
