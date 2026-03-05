import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    glow?: boolean;
}

export function Card({ children, className, glow = false, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "relative rounded-2xl border border-white/5 bg-quant-card/50 backdrop-blur-sm p-6 sm:p-8 overflow-hidden group transition-all duration-300 hover:border-quant-blue/30 hover:bg-quant-card",
                className
            )}
            {...props}
        >
            {glow && (
                <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                    style={{
                        background: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.15), transparent 70%)"
                    }}
                />
            )}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
