"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
    size?: "sm" | "md" | "lg";
    glow?: boolean;
}

/* "Precision Instrument" gradient ring: a full-bleed gradient layer masked
 * down to its 1px padding ring (content-box XOR border-box). Drawn as an
 * overlay INSIDE the button so the public rendering shape — a single
 * <button> root — is unchanged for every existing call site. Both the
 * -webkit- and standard mask pairs are set; the standard pair (declared
 * last) wins wherever it is supported. */
const RING_MASK: React.CSSProperties = {
    padding: "1px",
    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
};

/* sky-300 → white → violet-300, the house hairline ink. */
const RING_GRADIENT =
    "linear-gradient(to bottom, rgba(125, 211, 252, 0.5), rgba(255, 255, 255, 0.12) 55%, rgba(196, 181, 253, 0.4))";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", glow = false, children, ...props }, ref) => {
        /* `group` is part of the long-standing public contract (consumer
         * children use bare group-hover:); the named `group/btn` scopes the
         * new instrument layers so an ancestor .group hover can never
         * trigger them. */
        const baseStyles =
            "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full overflow-hidden group group/btn focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400";

        const variants = {
            primary:
                "bg-quant-blue text-white hover:bg-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] active:scale-[0.98]",
            secondary: "bg-quant-card text-quant-text hover:bg-gray-800 border border-white/10",
            outline: "border border-quant-blue/50 text-quant-light hover:bg-quant-blue/10",
            ghost: "text-quant-text hover:bg-white/5",
            /* glass keeps a transparent border so its box geometry is
             * byte-identical to the old bordered version; the gradient ring
             * overlay now supplies the visible hairline. */
            glass: "bg-white/5 backdrop-blur-md border border-transparent text-white hover:bg-white/10 active:scale-[0.98]",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        /* The instrument treatment (gradient ring + hover sheen) is reserved
         * for the two hero-weight variants; the quieter variants keep their
         * original dress so hierarchy survives on dense tool pages. */
        const instrumented = variant === "primary" || variant === "glass";

        return (
            <button
                ref={ref}
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    instrumented && "ql-sheen-host",
                    className
                )}
                {...props}
            >
                {glow && variant === "primary" && (
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-quant-light -z-10" />
                )}
                {instrumented && (
                    <>
                        {/* 1px gradient ring; brightens on hover via opacity
                            only — scoped to this button's own hover via the
                            named group. */}
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 rounded-full opacity-80 transition-opacity duration-300 group-hover/btn:opacity-100"
                            style={{ ...RING_MASK, background: RING_GRADIENT }}
                        />
                        {/* Hover sheen: the shared .ql-sheen utilities from
                            globals.css. Transform-only sweep, gated to
                            hover-capable fine pointers + motion-safe (touch
                            and reduced motion never see movement); the
                            transition lives inside the hover rule, so
                            hover-out snaps back with no reverse sweep, and
                            :focus-visible fires the same pass. At rest the
                            bar sits fully outside the pill's overflow clip. */}
                        <span aria-hidden="true" className="ql-sheen-bar" />
                    </>
                )}
                <span className="relative z-10 flex items-center gap-2">
                    {children}
                </span>
            </button>
        );
    }
);
Button.displayName = "Button";
