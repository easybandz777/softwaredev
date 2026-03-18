import React from "react";

export const metadata = { title: "QuantLab · Needs Assessment" };

export default function QuestionnaireLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ background: "#f8fafc", minHeight: "100vh" }}>
            {children}
        </div>
    );
}
