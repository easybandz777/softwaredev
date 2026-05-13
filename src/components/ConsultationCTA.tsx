"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { Button } from "./ui/Button";

const ConsultationModal = dynamic(
    () => import("./ConsultationModal").then((m) => m.ConsultationModal),
    { ssr: false }
);

interface Props {
    label?: string;
    variant?: "primary" | "secondary" | "outline" | "ghost" | "glass";
    size?: "sm" | "md" | "lg";
    className?: string;
    service?: string;
    city?: string;
    source?: string;
}

export function ConsultationCTA({
    label = "Book a Consultation",
    variant = "glass",
    size = "lg",
    className = "min-w-[220px]",
    service,
    city,
    source,
}: Props) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button variant={variant} size={size} className={className} onClick={() => setOpen(true)}>
                {label}
            </Button>
            <ConsultationModal
                open={open}
                onClose={() => setOpen(false)}
                defaultService={service}
                defaultCity={city}
                source={source}
            />
        </>
    );
}
