"use client";

import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
    LogOut, BarChart3, Target, Building2, Home,
    GraduationCap, Menu, X, Trophy, ClipboardList
} from "lucide-react";

interface UserInfo {
    id: number;
    username: string;
    full_name: string;
    role: string;
}

interface SalesLayoutProps {
    children: React.ReactNode;
    user?: UserInfo | null;
}

const NAV_LINKS = [
    { href: "/sales/dashboard", label: "Dashboard", icon: <Home className="w-4 h-4" /> },
    { href: "/sales/leads", label: "Leads", icon: <Target className="w-4 h-4" /> },
    { href: "/sales/clients", label: "Clients", icon: <Building2 className="w-4 h-4" /> },
    { href: "/sales/questionnaire", label: "Questionnaire Link", icon: <ClipboardList className="w-4 h-4" /> },
    { href: "/sales/leaderboard", label: "Leaderboard", icon: <Trophy className="w-4 h-4" /> },
    { href: "/sales/training", label: "Training", icon: <GraduationCap className="w-4 h-4" /> },
];

export function SalesLayout({ children, user }: SalesLayoutProps) {
    const router = useRouter();
    const pathname = usePathname();
    const [mobileOpen, setMobileOpen] = useState(false);

    // Close mobile menu on route change
    useEffect(() => { setMobileOpen(false); }, [pathname]);

    // Prevent body scroll when mobile menu open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    async function logout() {
        await fetch("/api/admin/login", { method: "DELETE" });
        router.push("/sales");
    }

    const SidebarContent = () => (
        <>
            {/* Logo */}
            <div className="px-5 py-5 flex items-center gap-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{
                    background: "linear-gradient(135deg, #059669, #34d399)",
                    boxShadow: "0 0 12px rgba(52,211,153,0.3)",
                }}>
                    <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <div className="min-w-0">
                    <span className="text-white font-bold text-sm block leading-tight">QuantLab</span>
                    <span className="text-emerald-400/70 text-[10px] font-medium uppercase tracking-wider">Sales CRM</span>
                </div>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-3 py-4 space-y-1">
                {NAV_LINKS.map(link => {
                    const active = pathname?.startsWith(link.href);
                    return (
                        <button key={link.href} onClick={() => router.push(link.href)}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150"
                            style={{
                                color: active ? "#34d399" : "#9ca3af",
                                background: active ? "rgba(52,211,153,0.08)" : "transparent",
                                border: active ? "1px solid rgba(52,211,153,0.15)" : "1px solid transparent",
                            }}>
                            {link.icon}
                            {link.label}
                        </button>
                    );
                })}
            </nav>

            {/* User + logout */}
            <div className="px-3 py-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                {user && (
                    <div className="px-3 mb-3">
                        <p className="text-white text-sm font-medium truncate">{user.full_name || user.username}</p>
                        <p className="text-gray-600 text-xs capitalize">{user.role}</p>
                    </div>
                )}
                <button onClick={logout}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-gray-500 hover:text-rose-400 hover:bg-rose-400/5 transition-all">
                    <LogOut className="w-3.5 h-3.5" /> Sign out
                </button>
            </div>
        </>
    );

    return (
        <div className="min-h-screen" style={{ background: "#080d18" }}>
            {/* Grid overlay */}
            <div className="fixed inset-0 pointer-events-none" style={{
                backgroundImage: "linear-gradient(rgba(52,211,153,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.02) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
            }} />

            {/* ── Desktop sidebar (hidden on mobile) ── */}
            <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-56 flex-col z-20" style={{
                background: "linear-gradient(180deg, #0a1020 0%, #080d18 100%)",
                borderRight: "1px solid rgba(255,255,255,0.06)",
            }}>
                <SidebarContent />
            </aside>

            {/* ── Mobile top bar ── */}
            <header className="md:hidden sticky top-0 z-30 flex items-center justify-between px-4 py-3" style={{
                background: "rgba(8,13,24,0.95)",
                backdropFilter: "blur(16px)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}>
                <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{
                        background: "linear-gradient(135deg, #059669, #34d399)",
                    }}>
                        <BarChart3 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-white font-bold text-sm">QuantLab CRM</span>
                </div>
                <button onClick={() => setMobileOpen(true)}
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                    title="Open menu">
                    <Menu className="w-5 h-5" />
                </button>
            </header>

            {/* ── Mobile drawer overlay ── */}
            {mobileOpen && (
                <div className="md:hidden fixed inset-0 z-40 flex">
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
                    {/* Drawer */}
                    <aside className="relative w-64 flex flex-col z-50" style={{
                        background: "linear-gradient(180deg, #0a1020 0%, #080d18 100%)",
                        borderRight: "1px solid rgba(255,255,255,0.08)",
                    }}>
                        {/* Close button */}
                        <button onClick={() => setMobileOpen(false)}
                            className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-500 hover:text-white hover:bg-white/5 transition-all"
                            title="Close menu">
                            <X className="w-4 h-4" />
                        </button>
                        <SidebarContent />
                    </aside>
                </div>
            )}

            {/* ── Main content ── */}
            {/* md: offset for sidebar; mobile: no offset, but top bar already takes space */}
            <main className="md:ml-56">
                {children}
            </main>
        </div>
    );
}
