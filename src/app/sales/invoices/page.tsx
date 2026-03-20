"use client";

import React, { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SalesLayout } from "@/components/SalesLayout";
import { InvoiceTab } from "@/app/admin/dashboard/InvoiceTab";

interface UserInfo {
    id: number;
    username: string;
    full_name: string;
    role: string;
}

function InvoicesContent({ user }: { user: UserInfo | null }) {
    const searchParams = useSearchParams();

    const prefill = {
        clientName: searchParams.get("client") || "",
        clientEmail: searchParams.get("email") || "",
    };

    return (
        <SalesLayout user={user}>
            <header className="hidden md:flex sticky top-0 z-10 items-center px-8 py-4" style={{
                background: "rgba(8,13,24,0.9)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.05)",
            }}>
                <div>
                    <h1 className="text-xl font-bold text-white">Invoices</h1>
                    <p className="text-gray-500 text-xs mt-0.5">Generate and manage client invoices with Stripe payment links.</p>
                </div>
            </header>

            <div className="md:hidden px-4 py-4 border-b" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
                <h1 className="text-lg font-bold text-white">Invoices</h1>
                <p className="text-gray-500 text-xs mt-0.5">Manage invoices & payment links.</p>
            </div>

            <div className="px-4 md:px-8 py-6 max-w-6xl mx-auto">
                <InvoiceTab prefill={prefill} />
            </div>
        </SalesLayout>
    );
}

export default function InvoicesPage() {
    const [user, setUser] = useState<UserInfo | null>(null);

    useEffect(() => {
        fetch("/api/sales/me").then(r => r.ok ? r.json() : null).then(setUser);
    }, []);

    return (
        <Suspense fallback={
            <SalesLayout user={user}>
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="text-gray-500 text-sm animate-pulse">Loading invoices…</div>
                </div>
            </SalesLayout>
        }>
            <InvoicesContent user={user} />
        </Suspense>
    );
}
