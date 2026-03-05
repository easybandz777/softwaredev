"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
    size?: "sm" | "md" | "lg";
    glow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", glow = false, children, ...props }, ref) => {
        const baseStyles = "relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full overflow-hidden group";

        const variants = {
            primary: "bg-quant-blue text-white hover:bg-blue-600 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]",
            secondary: "bg-quant-card text-quant-text hover:bg-gray-800 border border-white/10",
            outline: "border border-quant-blue/50 text-quant-light hover:bg-quant-blue/10",
            ghost: "text-quant-text hover:bg-white/5",
            glass: "bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                {...props}
            >
                {glow && variant === "primary" && (
                    <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md bg-quant-light -z-10" />
                )}
                <span className="relative z-10 flex items-center gap-2">
                    {children}
                </span>
            </button>
        );
    }
);
Button.displayName = "Button";
