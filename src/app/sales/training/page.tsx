"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
    LogOut, BarChart3, Target, Building2, Home, GraduationCap,
    BookOpen, CheckCircle, Award, ArrowRight, Play,
} from "lucide-react";

// ─── Training Module Data ────────────────────────────────────────────────────

const MODULES = [
    {
        id: 1, title: "Introduction to Sales Automation",
        description: "Learn the fundamentals of algorithmic trading and how QuantLab's trading bots operate in the market.",
        duration: "25 min", lessons: 4, icon: "🤖",
    },
    {
        id: 2, title: "Understanding the Product Suite",
        description: "Deep dive into each product tier, features, pricing, and ideal customer profiles.",
        duration: "35 min", lessons: 6, icon: "📦",
    },
    {
        id: 3, title: "Lead Qualification Framework",
        description: "Master the BANT framework adapted for QuantLab's high-ticket SaaS products.",
        duration: "20 min", lessons: 3, icon: "🎯",
    },
    {
        id: 4, title: "Objection Handling",
        description: "Common objections from prospects and proven response strategies for the trading automation space.",
        duration: "30 min", lessons: 5, icon: "🛡️",
    },
    {
        id: 5, title: "Demo & Presentation Skills",
        description: "How to deliver compelling product demos that convert prospects into clients.",
        duration: "40 min", lessons: 7, icon: "🎬",
    },
    {
        id: 6, title: "CRM & Pipeline Management",
        description: "Using the QuantLab Sales CRM effectively — lead stages, notes, follow-ups, and reporting.",
        duration: "20 min", lessons: 4, icon: "📊",
    },
    {
        id: 7, title: "Compliance & Regulations",
        description: "Understanding regulatory requirements for financial software sales and proper disclosures.",
        duration: "15 min", lessons: 3, icon: "⚖️",
    },
    {
        id: 8, title: "Advanced Closing Techniques",
        description: "High-level strategies for closing enterprise deals and managing complex sales cycles.",
        duration: "35 min", lessons: 6, icon: "🏆",
    },
    {
        id: 9, title: "Client Success & Retention",
        description: "Post-sale relationship management, upselling, and maximizing customer lifetime value.",
        duration: "25 min", lessons: 4, icon: "💎",
    },
];

// ─── Sidebar ─────────────────────────────────────────────────────────────────

function Sidebar() {
    const router = useRouter();
    const pathname = usePathname();

    const links = [
        { href: "/sales/dashboard", label: "Dashboard", icon: <Home className="w-4 h-4" /> },
        { href: "/sales/leads", label: "Leads", icon: <Target className="w-4 h-4" /> },
        { href: "/sales/clients", label: "Clients", icon: <Building2 className="w-4 h-4" /> },
        { href: "/sales/training", label: "Training", icon: <GraduationCap className="w-4 h-4" /> },
    ];

    async function logout() {
        await fetch("/api/admin/login", { method: "DELETE" });
        router.push("/sales");
    }

    return (
        <aside className="fixed left-0 top-0 bottom-0 w-56 flex flex-col z-20" style={{
            background: "linear-gradient(180deg, #0a1020 0%, #080d18 100%)",
            borderRight: "1px solid rgba(255,255,255,0.06)",
        }}>
            <div className="px-5 py-5 flex items-center gap-3 border-b" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{
                    background: "linear-gradient(135deg, #059669, #34d399)",
                    boxShadow: "0 0 12px rgba(52,211,153,0.3)",
                }}>
                    <BarChart3 className="w-4 h-4 text-white" />
                </div>
                <div>
                    <span className="text-white font-bold text-sm block leading-tight">QuantLab</span>
                    <span className="text-emerald-400/70 text-[10px] font-medium uppercase tracking-wider">Sales CRM</span>
                </div>
            </div>

            <nav className="flex-1 px-3 py-4 space-y-1">
                {links.map(link => {
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

            <div className="px-3 py-4 border-t" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
                <button onClick={logout}
                    className="w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-gray-500 hover:text-rose-400 hover:bg-rose-400/5 transition-all">
                    <LogOut className="w-3.5 h-3.5" /> Sign out
                </button>
            </div>
        </aside>
    );
}

// ─── Module Card ─────────────────────────────────────────────────────────────

function ModuleCard({ mod, index, onLaunch }: {
    mod: typeof MODULES[number]; index: number; onLaunch: () => void;
}) {
    const progress = Math.floor(Math.random() * 100); // simulated progress
    const completed = progress === 100;

    return (
        <div className="group rounded-2xl overflow-hidden transition-all duration-200 hover:scale-[1.01] hover:shadow-lg" style={{
            background: "linear-gradient(145deg, #0d1526, #0a1020)",
            border: "1px solid rgba(255,255,255,0.05)",
        }}>
            {/* Module header strip */}
            <div className="px-6 py-4 flex items-center justify-between" style={{
                borderBottom: "1px solid rgba(255,255,255,0.04)",
            }}>
                <div className="flex items-center gap-3">
                    <span className="text-2xl">{mod.icon}</span>
                    <div>
                        <p className="text-xs font-mono text-gray-500 uppercase tracking-wider">Module {mod.id}</p>
                        <h3 className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                            {mod.title}
                        </h3>
                    </div>
                </div>
                {completed ? (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold" style={{
                        background: "rgba(52,211,153,0.1)", color: "#34d399", border: "1px solid rgba(52,211,153,0.2)",
                    }}>
                        <CheckCircle className="w-3.5 h-3.5" /> Complete
                    </div>
                ) : (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium" style={{
                        background: "rgba(56,189,248,0.08)", color: "#38bdf8", border: "1px solid rgba(56,189,248,0.15)",
                    }}>
                        <BookOpen className="w-3.5 h-3.5" /> In Progress
                    </div>
                )}
            </div>

            {/* Body */}
            <div className="px-6 py-4">
                <p className="text-xs text-gray-400 leading-relaxed mb-4">{mod.description}</p>

                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Play className="w-3 h-3" /> {mod.duration}</span>
                    <span className="flex items-center gap-1"><BookOpen className="w-3 h-3" /> {mod.lessons} lessons</span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 rounded-full overflow-hidden mb-4" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div className="h-full rounded-full transition-all duration-500" style={{
                        width: `${progress}%`,
                        background: completed
                            ? "linear-gradient(90deg, #34d399, #059669)"
                            : "linear-gradient(90deg, #38bdf8, #6366f1)",
                    }} />
                </div>

                <button onClick={onLaunch}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 group/btn"
                    style={{
                        background: completed ? "rgba(52,211,153,0.06)" : "rgba(56,189,248,0.08)",
                        color: completed ? "#34d399" : "#38bdf8",
                        border: completed ? "1px solid rgba(52,211,153,0.15)" : "1px solid rgba(56,189,248,0.15)",
                    }}>
                    {completed ? (
                        <><Award className="w-3.5 h-3.5" /> Review Module</>
                    ) : (
                        <><ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" /> Continue Learning</>
                    )}
                </button>
            </div>
        </div>
    );
}

// ─── Training Page ───────────────────────────────────────────────────────────

export default function SalesTrainingPage() {
    const router = useRouter();
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    // Auth check
    const checkAuth = useCallback(async () => {
        try {
            const res = await fetch("/api/sales/me");
            if (res.status === 401) {
                router.push("/sales");
                return;
            }
            setAuthenticated(true);
        } finally {
            setLoading(false);
        }
    }, [router]);

    useEffect(() => { checkAuth(); }, [checkAuth]);

    if (loading || !authenticated) {
        return (
            <div className="flex items-center justify-center min-h-screen" style={{ background: "#080d18" }}>
                <div className="text-gray-500 text-sm animate-pulse">Loading training…</div>
            </div>
        );
    }

    const handleLaunchModule = (moduleId: number) => {
        // Open the training portal in a new tab (which has its own full experience)
        window.open("/training", "_blank");
    };

    // Stats
    const totalModules = MODULES.length;

    return (
        <div className="min-h-screen" style={{ background: "#080d18" }}>
            {/* Grid overlay */}
            <div className="fixed inset-0 pointer-events-none" style={{
                backgroundImage: "linear-gradient(rgba(52,211,153,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.02) 1px, transparent 1px)",
                backgroundSize: "50px 50px",
            }} />

            <Sidebar />

            <main className="ml-56">
                {/* Top bar */}
                <header className="sticky top-0 z-10 flex items-center justify-between px-8 py-4" style={{
                    background: "rgba(8,13,24,0.9)",
                    backdropFilter: "blur(16px)",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>
                    <div>
                        <h1 className="text-xl font-bold text-white">Sales Training</h1>
                        <p className="text-gray-500 text-xs mt-0.5">{totalModules} modules · Continuous learning for the team</p>
                    </div>
                    <button
                        onClick={() => window.open("/training", "_blank")}
                        className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium transition-all"
                        style={{
                            background: "rgba(56,189,248,0.1)",
                            color: "#38bdf8",
                            border: "1px solid rgba(56,189,248,0.2)",
                        }}>
                        Open Full Training Portal <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                </header>

                <div className="max-w-6xl mx-auto px-8 py-8">
                    {/* Overview cards */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                        <div className="rounded-xl p-5 transition-all" style={{
                            background: "linear-gradient(145deg, #0d1526, #0a1020)",
                            border: "1px solid rgba(255,255,255,0.05)",
                        }}>
                            <div className="flex items-center gap-2 mb-2">
                                <BookOpen className="w-4 h-4 text-sky-400 opacity-70" />
                                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Total Modules</p>
                            </div>
                            <p className="text-2xl font-bold text-sky-400">{totalModules}</p>
                        </div>
                        <div className="rounded-xl p-5 transition-all" style={{
                            background: "linear-gradient(145deg, #0d1526, #0a1020)",
                            border: "1px solid rgba(255,255,255,0.05)",
                        }}>
                            <div className="flex items-center gap-2 mb-2">
                                <Award className="w-4 h-4 text-emerald-400 opacity-70" />
                                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Certification</p>
                            </div>
                            <p className="text-2xl font-bold text-emerald-400">Available</p>
                        </div>
                        <div className="rounded-xl p-5 transition-all" style={{
                            background: "linear-gradient(145deg, #0d1526, #0a1020)",
                            border: "1px solid rgba(255,255,255,0.05)",
                        }}>
                            <div className="flex items-center gap-2 mb-2">
                                <GraduationCap className="w-4 h-4 text-violet-400 opacity-70" />
                                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">Est. Duration</p>
                            </div>
                            <p className="text-2xl font-bold text-violet-400">~4 hours</p>
                        </div>
                    </div>

                    {/* Module grid */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {MODULES.map((mod, idx) => (
                            <ModuleCard
                                key={mod.id}
                                mod={mod}
                                index={idx}
                                onLaunch={() => handleLaunchModule(mod.id)}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
