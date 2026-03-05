import React from "react";

export const metadata = { title: "QuantLab Admin" };

// Admin area has its own isolated layout — no navbar, no animated background
export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ background: "#080d18", color: "#f1f5f9", minHeight: "100vh", fontFamily: "'Inter', 'Geist', sans-serif" }}>
            {children}
        </div>
    );
}

