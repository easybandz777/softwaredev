import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    glow?: boolean;
}

/* "Precision Instrument" hairline: a full-bleed gradient masked down to its
 * 1px padding ring (content-box XOR border-box) — the same technique as
 * ui/Button's RING_MASK. Drawn as an overlay INSIDE the card so the public
 * rendering shape — a single padded <div> root that receives className and
 * all spread props — is unchanged for every call site (consumer overrides
 * like p-0 / bg-* / overflow-* keep landing on the surface, as before). */
const RING_MASK: React.CSSProperties = {
    padding: "1px",
    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    maskComposite: "exclude",
};

/* Rest ring: sky-400/25 → white/8 → violet-400/20, the house surface ink. */
const RING_GRADIENT =
    "linear-gradient(to bottom, rgba(56, 189, 248, 0.25), rgba(255, 255, 255, 0.08) 50%, rgba(167, 139, 250, 0.2))";

/* Hover ring: the sanctioned intensified stops (sky-400/50 → violet-400/40). */
const RING_GRADIENT_HOVER =
    "linear-gradient(to bottom, rgba(56, 189, 248, 0.5), rgba(255, 255, 255, 0.1) 50%, rgba(167, 139, 250, 0.4))";

export function Card({ children, className, glow = false, ...props }: CardProps) {
    return (
        <div
            className={cn(
                /* border-transparent keeps the box geometry byte-identical to
                 * the old border-white/5 version; the masked gradient overlay
                 * below paints the visible hairline in that same 1px band. */
                "group group/card relative rounded-2xl border border-transparent bg-quant-card/80 backdrop-blur-sm p-6 sm:p-8 overflow-hidden [box-shadow:inset_0_1px_0_rgba(255,255,255,0.06)]",
                className
            )}
            {...props}
        >
            {/* 1px gradient hairline (rest state) — inset-0 keeps the ring
                inside the overflow-hidden clip (the padding box), exactly as
                ui/Button draws its ring. */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{ ...RING_MASK, background: RING_GRADIENT }}
            />
            {/* Hover intensification: a brighter duplicate ring crossfades in
                (opacity only). Named group, so an ancestor .group hover can
                never ignite it. */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"
                style={{ ...RING_MASK, background: RING_GRADIENT_HOVER }}
            />
            {glow && (
                <div
                    className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                    style={{
                        background: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.15), transparent 70%)"
                    }}
                />
            )}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
