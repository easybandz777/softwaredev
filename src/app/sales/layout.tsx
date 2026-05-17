import React from "react";
import "@/styles/sales-portal.css";

export const metadata = { title: "Sales Portal | QUANT LAB USA", robots: { index: false, follow: false } };

export default function SalesLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ background: "#080d18", color: "#f1f5f9", minHeight: "100vh", fontFamily: "'Inter', 'Geist', sans-serif" }}>
            {children}
        </div>
    );
}
