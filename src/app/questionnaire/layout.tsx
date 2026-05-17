import React from "react";

export const metadata = { title: "Needs Assessment | QUANT LAB USA", robots: { index: false, follow: false } };

export default function QuestionnaireLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ background: "#f8fafc", minHeight: "100vh" }}>
            {children}
        </div>
    );
}
