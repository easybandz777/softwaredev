"use client";

import React from "react";
import { CalendarDays, ExternalLink, Mail } from "lucide-react";

/**
 * CalendarEmbed — drop-in Cal.com (or any iframe-able calendar) embed.
 *
 * Reads NEXT_PUBLIC_CAL_URL at build/runtime. When it's not configured
 * (the common case before William connects his Cal.com handle), it falls
 * back to a clean placeholder card with email + phone direct lines, so
 * the page never renders a broken iframe.
 *
 * Drop the env var into Vercel project settings to "turn it on" — no code
 * change required.
 */

interface Props {
    /** Override the env-var URL (rarely needed; useful for per-page test handles). */
    url?: string;
    /** Iframe height — Cal.com recommends 720+ on desktop. */
    height?: number;
    /** Optional class on the wrapping container. */
    className?: string;
    /** Optional title for the iframe (a11y). */
    title?: string;
}

const DEFAULT_URL =
    process.env.NEXT_PUBLIC_CAL_URL ||
    "https://cal.com/WILLIAM-CAL-USERNAME/discovery-call";

const PLACEHOLDER_MARKER = "WILLIAM-CAL-USERNAME";

export function CalendarEmbed({
    url,
    height = 720,
    className,
    title = "Book a discovery call with William",
}: Props) {
    const resolved = url || DEFAULT_URL;
    const isPlaceholder = resolved.includes(PLACEHOLDER_MARKER);

    if (isPlaceholder) {
        // Graceful fallback — no broken iframe, real human contact options.
        return (
            <div
                className={
                    "rounded-2xl border border-white/10 bg-[#0d1526]/70 p-6 md:p-10 " +
                    (className ?? "")
                }
                data-testid="calendar-embed-placeholder"
            >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-400/10">
                    <CalendarDays className="h-6 w-6 text-sky-400" />
                </div>
                <h3 className="mb-2 text-center text-2xl font-bold text-white">
                    Book a 20-minute scoping call
                </h3>
                <p className="mx-auto mb-7 max-w-md text-center text-sm leading-relaxed text-gray-400">
                    Online booking is being connected. In the meantime,
                    email or call directly — William reads every inbound and
                    will reply within 24 business hours.
                </p>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <a
                        href="mailto:beltz@quantlabusa.dev?subject=Discovery%20call%20request"
                        className="group flex items-center justify-center gap-2 rounded-xl border border-sky-400/30 bg-sky-400/10 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-sky-400/15"
                    >
                        <Mail className="h-4 w-4 text-sky-400" />
                        Email William directly
                    </a>
                    <a
                        href="tel:+17706521282"
                        className="group flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
                    >
                        (770) 652-1282
                    </a>
                </div>
                <p className="mt-5 text-center text-xs text-gray-500">
                    Mon–Fri, 9am–5pm ET · Macon, GA · serving 14 US metros
                </p>
            </div>
        );
    }

    // Real Cal.com (or other) embed.
    return (
        <div
            className={
                "overflow-hidden rounded-2xl border border-white/10 bg-black/30 " +
                (className ?? "")
            }
            data-testid="calendar-embed-iframe"
        >
            <iframe
                src={resolved}
                title={title}
                className="w-full"
                style={{ height, border: 0 }}
                loading="lazy"
            />
            <div className="border-t border-white/5 bg-white/[0.02] px-4 py-2 text-center text-[11px] text-gray-500">
                Can't see the calendar?{" "}
                <a
                    href={resolved}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-400 hover:underline"
                >
                    Open in a new tab <ExternalLink className="h-3 w-3" />
                </a>
            </div>
        </div>
    );
}

export default CalendarEmbed;
