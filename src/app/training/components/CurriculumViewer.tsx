'use client';

import React, { useState, useEffect } from 'react';
import Module1 from '../modules/Module1';
import Module2 from '../modules/Module2';
import Module3 from '../modules/Module3';
import Module4 from '../modules/Module4';
import Module5 from '../modules/Module5';
import BonusA from '../modules/BonusA';
import BonusB from '../modules/BonusB';
import BonusC from '../modules/BonusC';
import BonusD from '../modules/BonusD';
import BonusE from '../modules/BonusE';
import { BonusF, BonusG, BonusH, BonusI, BonusJ, BonusK } from '../modules/BonusFtoK';
import { trainingStyles } from '../modules/sharedStyles';
import { ChevronLeft, ChevronRight, BookOpen, Menu, X } from 'lucide-react';

interface Props {
    onStartTest: () => void;
}

interface NavItem {
    id: string;
    label: string;
    short: string;
    badge?: string;
    component: React.ComponentType<{ onStartTest?: () => void }> | React.ComponentType;
}

const NAV_ITEMS: NavItem[] = [
    { id: 'mod1', label: 'Module 01 — Mindset & Prep', short: 'Mindset & Prep', component: Module1 },
    { id: 'mod2', label: 'Module 02 — Breaking the Ice', short: 'Breaking the Ice', component: Module2 },
    { id: 'mod3', label: 'Module 03 — Discovery', short: 'Discovery / SPIN', component: Module3 },
    { id: 'mod4', label: 'Module 04 — Budget & Pricing', short: 'Budget & Pricing', component: Module4 },
    { id: 'mod5', label: 'Module 05 — Bringing It Together', short: 'Closing the Deal', badge: 'CORE', component: Module5 as React.ComponentType<{ onStartTest?: () => void }> },
    { id: 'ba', label: 'Bonus A — Industry Scenarios', short: 'Industry Scenarios', badge: 'BONUS', component: BonusA },
    { id: 'bb', label: 'Bonus B — Objections Masterclass', short: 'Objections', badge: 'BONUS', component: BonusB },
    { id: 'bc', label: 'Bonus C — Power Questions', short: 'Power Questions', badge: 'BONUS', component: BonusC },
    { id: 'bd', label: 'Bonus D — Roleplay Call', short: 'Roleplay Call', badge: 'BONUS', component: BonusD },
    { id: 'be', label: 'Bonus E — Advanced Closing', short: 'Advanced Closing', badge: 'BONUS', component: BonusE },
    { id: 'bf', label: 'Bonus F — Prospecting Systems', short: 'Prospecting', badge: 'BONUS', component: BonusF },
    { id: 'bg', label: 'Bonus G — Demo & Proposal', short: 'Demo & Proposal', badge: 'BONUS', component: BonusG },
    { id: 'bh', label: 'Bonus H — Pricing Psychology', short: 'Pricing Psychology', badge: 'BONUS', component: BonusH },
    { id: 'bi', label: 'Bonus I — Pipeline Map', short: 'Pipeline Map', badge: 'BONUS', component: BonusI },
    { id: 'bj', label: 'Bonus J — Template Library', short: 'Templates', badge: 'BONUS', component: BonusJ },
    { id: 'bk', label: 'Bonus K — Elite Tactics', short: 'Elite Tactics', badge: 'BONUS', component: BonusK },
];

export default function CurriculumViewer({ onStartTest }: Props) {
    const [activeIdx, setActiveIdx] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [entering, setEntering] = useState(false);

    const ActiveComponent = NAV_ITEMS[activeIdx].component;

    function navigate(idx: number) {
        if (idx === activeIdx) return;
        setEntering(true);
        setTimeout(() => {
            setActiveIdx(idx);
            setEntering(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 180);
        setSidebarOpen(false);
    }

    // Keyboard navigation
    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === 'ArrowRight' && activeIdx < NAV_ITEMS.length - 1) navigate(activeIdx + 1);
            if (e.key === 'ArrowLeft' && activeIdx > 0) navigate(activeIdx - 1);
        }
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [activeIdx]);

    const isCoreModule = activeIdx < 5;

    return (
        <>
            <style>{trainingStyles}</style>
            <style>{`
        .cv-layout { display: flex; min-height: 100vh; background: #05080f; color: #94a3b8; font-family: 'Inter', sans-serif; }

        /* ── Sidebar ── */
        .cv-sidebar {
          width: 280px;
          flex-shrink: 0;
          background: #080c18;
          border-right: 1px solid rgba(255,255,255,0.05);
          display: flex;
          flex-direction: column;
          position: sticky;
          top: 0;
          height: 100vh;
          overflow: hidden;
        }
        .cv-sidebar-inner {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          scrollbar-width: thin;
          scrollbar-color: rgba(34,211,238,0.2) transparent;
        }
        .cv-sidebar-inner::-webkit-scrollbar { width: 4px; }
        .cv-sidebar-inner::-webkit-scrollbar-thumb { background: rgba(34,211,238,0.2); border-radius: 2px; }

        .cv-sidebar-header {
          padding: 24px 20px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          position: relative;
        }
        .cv-sidebar-logo {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #22d3ee;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 6px;
        }
        .cv-sidebar-title {
          font-size: 0.85rem;
          color: #64748b;
          font-weight: 500;
        }

        .cv-nav-group { padding: 12px 12px 4px; }
        .cv-nav-group-label {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #334155;
          padding: 4px 8px 8px;
        }

        .cv-nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s ease;
          border: 1px solid transparent;
          margin-bottom: 2px;
          position: relative;
        }
        .cv-nav-item:hover { background: rgba(255,255,255,0.04); color: #e2e8f0; }
        .cv-nav-item.active {
          background: rgba(34,211,238,0.08);
          border-color: rgba(34,211,238,0.2);
          color: #22d3ee;
        }
        .cv-nav-item-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #1e293b;
          border: 1px solid #334155;
          flex-shrink: 0;
          transition: all 0.15s ease;
        }
        .cv-nav-item.active .cv-nav-item-dot { background: #22d3ee; border-color: #22d3ee; box-shadow: 0 0 6px #22d3ee88; }
        .cv-nav-item-label { font-size: 0.82rem; font-weight: 500; flex: 1; line-height: 1.3; }
        .cv-nav-badge {
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          padding: 2px 6px;
          border-radius: 4px;
          text-transform: uppercase;
        }
        .cv-nav-badge.CORE { background: rgba(34,211,238,0.15); color: #22d3ee; }
        .cv-nav-badge.BONUS { background: rgba(167,139,250,0.12); color: #a78bfa; }

        /* ── Main Content ── */
        .cv-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
        .cv-topbar {
          position: sticky;
          top: 0;
          z-index: 20;
          background: rgba(5,8,15,0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 14px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .cv-topbar-left { display: flex; align-items: center; gap: 12px; }
        .cv-topbar-module {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #22d3ee;
        }
        .cv-topbar-divider { width: 1px; height: 16px; background: rgba(255,255,255,0.1); }
        .cv-topbar-title { font-size: 0.9rem; font-weight: 500; color: #e2e8f0; }
        .cv-topbar-nav { display: flex; align-items: center; gap: 8px; }
        .cv-nav-btn {
          width: 34px; height: 34px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: #64748b;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        .cv-nav-btn:hover:not(:disabled) { background: rgba(34,211,238,0.08); border-color: rgba(34,211,238,0.3); color: #22d3ee; }
        .cv-nav-btn:disabled { opacity: 0.3; cursor: not-allowed; }
        .cv-progress-text { font-size: 0.75rem; color: #475569; padding: 0 6px; white-space: nowrap; }

        .cv-content {
          flex: 1;
          padding: 48px 56px 80px;
          max-width: 900px;
          width: 100%;
          margin: 0 auto;
          transition: opacity 0.18s ease, transform 0.18s ease;
        }
        .cv-content.entering { opacity: 0; transform: translateY(12px); }

        /* ── Mobile ── */
        .cv-mobile-bar {
          display: none;
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(8,12,24,0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.06);
          padding: 14px 20px;
          align-items: center;
          justify-content: space-between;
        }
        .cv-mobile-overlay {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 40;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(4px);
        }
        .cv-mobile-sidebar {
          display: none;
          position: fixed;
          top: 0; left: 0; bottom: 0;
          width: 300px;
          z-index: 50;
          background: #080c18;
          border-right: 1px solid rgba(255,255,255,0.08);
          overflow-y: auto;
          transform: translateX(-100%);
          transition: transform 0.25s ease;
        }
        .cv-mobile-sidebar.open { transform: translateX(0); }

        @media (max-width: 768px) {
          .cv-sidebar { display: none; }
          .cv-topbar { display: none; }
          .cv-mobile-bar { display: flex; }
          .cv-mobile-sidebar { display: block; }
          .cv-mobile-overlay.open { display: block; }
          .cv-content { padding: 32px 20px 60px; }
        }
      `}</style>

            <div className="cv-layout">
                {/* ─── Desktop Sidebar ─── */}
                <aside className="cv-sidebar">
                    <div className="cv-sidebar-header">
                        <div className="cv-sidebar-logo"><BookOpen size={12} /> QuantLab Training</div>
                        <div className="cv-sidebar-title">Sales Partner Playbook</div>
                    </div>
                    <div className="cv-sidebar-inner">
                        <div className="cv-nav-group">
                            <div className="cv-nav-group-label">Core Modules</div>
                            {NAV_ITEMS.filter((_, i) => i < 5).map((item, i) => (
                                <div key={item.id} className={`cv-nav-item${activeIdx === i ? ' active' : ''}`} onClick={() => navigate(i)}>
                                    <div className="cv-nav-item-dot" />
                                    <span className="cv-nav-item-label">{item.short}</span>
                                    {item.badge && <span className={`cv-nav-badge ${item.badge}`}>{item.badge}</span>}
                                </div>
                            ))}
                        </div>
                        <div className="cv-nav-group">
                            <div className="cv-nav-group-label">Bonus Modules</div>
                            {NAV_ITEMS.filter((_, i) => i >= 5).map((item, i) => {
                                const realIdx = i + 5;
                                return (
                                    <div key={item.id} className={`cv-nav-item${activeIdx === realIdx ? ' active' : ''}`} onClick={() => navigate(realIdx)}>
                                        <div className="cv-nav-item-dot" />
                                        <span className="cv-nav-item-label">{item.short}</span>
                                        {item.badge && <span className={`cv-nav-badge ${item.badge}`}>{item.badge}</span>}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </aside>

                {/* ─── Main ─── */}
                <main className="cv-main">
                    {/* Desktop Top Bar */}
                    <div className="cv-topbar">
                        <div className="cv-topbar-left">
                            <span className="cv-topbar-module">{isCoreModule ? `Module 0${activeIdx + 1}` : `Bonus ${String.fromCharCode(65 + activeIdx - 5)}`}</span>
                            <div className="cv-topbar-divider" />
                            <span className="cv-topbar-title">{NAV_ITEMS[activeIdx].short}</span>
                        </div>
                        <div className="cv-topbar-nav">
                            <button className="cv-nav-btn" disabled={activeIdx === 0} onClick={() => navigate(activeIdx - 1)}>
                                <ChevronLeft size={16} />
                            </button>
                            <span className="cv-progress-text">{activeIdx + 1} / {NAV_ITEMS.length}</span>
                            <button className="cv-nav-btn" disabled={activeIdx === NAV_ITEMS.length - 1} onClick={() => navigate(activeIdx + 1)}>
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Top Bar */}
                    <div className="cv-mobile-bar">
                        <button onClick={() => setSidebarOpen(true)} style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
                            <Menu size={20} />
                            <span style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>{NAV_ITEMS[activeIdx].short}</span>
                        </button>
                        <div className="cv-topbar-nav">
                            <button className="cv-nav-btn" disabled={activeIdx === 0} onClick={() => navigate(activeIdx - 1)}><ChevronLeft size={16} /></button>
                            <span className="cv-progress-text">{activeIdx + 1}/{NAV_ITEMS.length}</span>
                            <button className="cv-nav-btn" disabled={activeIdx === NAV_ITEMS.length - 1} onClick={() => navigate(activeIdx + 1)}><ChevronRight size={16} /></button>
                        </div>
                    </div>

                    {/* Mobile Overlay + Sidebar */}
                    <div className={`cv-mobile-overlay${sidebarOpen ? ' open' : ''}`} onClick={() => setSidebarOpen(false)} />
                    <div className={`cv-mobile-sidebar${sidebarOpen ? ' open' : ''}`}>
                        <div className="cv-sidebar-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <div className="cv-sidebar-logo"><BookOpen size={12} /> QuantLab Training</div>
                                <div className="cv-sidebar-title">Sales Partner Playbook</div>
                            </div>
                            <button onClick={() => setSidebarOpen(false)} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer' }}><X size={18} /></button>
                        </div>
                        <div className="cv-nav-group">
                            <div className="cv-nav-group-label">Core Modules</div>
                            {NAV_ITEMS.filter((_, i) => i < 5).map((item, i) => (
                                <div key={item.id} className={`cv-nav-item${activeIdx === i ? ' active' : ''}`} onClick={() => navigate(i)}>
                                    <div className="cv-nav-item-dot" />
                                    <span className="cv-nav-item-label">{item.short}</span>
                                </div>
                            ))}
                        </div>
                        <div className="cv-nav-group">
                            <div className="cv-nav-group-label">Bonus Modules</div>
                            {NAV_ITEMS.filter((_, i) => i >= 5).map((item, i) => {
                                const realIdx = i + 5;
                                return (
                                    <div key={item.id} className={`cv-nav-item${activeIdx === realIdx ? ' active' : ''}`} onClick={() => navigate(realIdx)}>
                                        <div className="cv-nav-item-dot" />
                                        <span className="cv-nav-item-label">{item.short}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Content */}
                    <div className={`cv-content${entering ? ' entering' : ''}`}>
                        <ActiveComponent onStartTest={onStartTest} />
                    </div>
                </main>
            </div>
        </>
    );
}
