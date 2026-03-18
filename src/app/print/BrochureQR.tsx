"use client";

import QRCode from "react-qr-code";

/* Shared QR code component for all brochure variants.
   Renders a real QR code pointing to quantlabusa.dev
   styled to match the brochure aesthetic.                   */

interface BrochureQRProps {
    /** URL the QR code encodes */
    url?: string;
    /** Size of the QR in CSS units (default: "1in") */
    size?: string;
    /** Border/accent color */
    accentColor?: string;
    /** Foreground (dot) color */
    fgColor?: string;
    /** Label below the QR */
    label?: string;
    /** Sublabel */
    sublabel?: string;
}

export default function BrochureQR({
    url = "https://quantlabusa.dev",
    size = "1in",
    accentColor = "#D4A843",
    fgColor = "#E2E8F0",
    label = "Scan to Book",
    sublabel = "Free Strategy Call",
}: BrochureQRProps) {
    return (
        <div
            style={{
                width: size,
                height: "auto",
                border: `2px solid ${accentColor}40`,
                borderRadius: "0.4rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(255,255,255,0.03)",
                padding: "0.2rem",
            }}
        >
            <div style={{
                background: "#ffffff",
                borderRadius: "0.2rem",
                padding: "0.12rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}>
                <QRCode
                    value={url}
                    size={512}
                    bgColor="#ffffff"
                    fgColor="#0F172A"
                    level="M"
                    style={{ width: "100%", height: "auto" }}
                />
            </div>
            {label && (
                <p style={{
                    fontSize: "0.38rem",
                    fontWeight: 700,
                    color: accentColor,
                    marginTop: "0.1rem",
                    textAlign: "center",
                    lineHeight: 1.2,
                }}>
                    {label}
                </p>
            )}
            {sublabel && (
                <p style={{
                    fontSize: "0.3rem",
                    color: "#64748B",
                    textAlign: "center",
                    lineHeight: 1.2,
                }}>
                    {sublabel}
                </p>
            )}
        </div>
    );
}
