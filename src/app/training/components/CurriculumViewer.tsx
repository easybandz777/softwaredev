'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Module1 from '../modules/Module1';
import Module2 from '../modules/Module2';
import Module3 from '../modules/Module3';
import Module4 from '../modules/Module4';
import Module5 from '../modules/Module5';
import Module6 from '../modules/Module6';
import Module7 from '../modules/Module7';
import Module8 from '../modules/Module8';
import Module9 from '../modules/Module9';
import Module10 from '../modules/Module10';
import Module11 from '../modules/Module11';
import BonusA from '../modules/BonusA';
import BonusB from '../modules/BonusB';
import BonusC from '../modules/BonusC';
import BonusD from '../modules/BonusD';
import BonusE from '../modules/BonusE';
import { BonusF, BonusH, BonusI, BonusJ, BonusK } from '../modules/BonusFtoK';
import BonusL from '../modules/BonusL';
import BonusM from '../modules/BonusM';
import { trainingStyles } from '../modules/sharedStyles';
import { ChevronLeft, ChevronRight, BookOpen, Menu, X, CheckCircle2, ChevronDown } from 'lucide-react';

interface Props {
    onStartTest: () => void;
}

interface NavItem {
    id: string;
    short: string;
    component: React.ComponentType<{ onStartTest?: () => void }> | React.ComponentType;
    vaultCategory?: 'assets' | 'live' | 'playbooks' | 'advanced';
}

const CORE_COUNT = 11;
const STORAGE_KEY = 'ql_completed_modules';

const CORE_ITEMS: NavItem[] = [
    { id: 'mod1', short: 'Mindset & Prep', component: Module1 },
    { id: 'mod2', short: 'Breaking the Ice', component: Module2 },
    { id: 'mod3', short: 'Discovery & Qualification', component: Module3 },
    { id: 'mod4', short: 'The Pitch & Proposal', component: Module4 },
    { id: 'mod5', short: 'Objections Masterclass', component: Module5 as React.ComponentType<{ onStartTest?: () => void }> },
    { id: 'mod6', short: 'Closing & Follow-Up', component: Module6 as React.ComponentType<{ onStartTest?: () => void }> },
    { id: 'mod7', short: 'Post-Close & Retention', component: Module7 as React.ComponentType<{ onStartTest?: () => void }> },
    { id: 'mod8', short: 'Prospecting & Lead Gen', component: Module8 },
    { id: 'mod9', short: 'The Follow-Up System', component: Module9 },
    { id: 'mod10', short: 'Pricing & Packaging', component: Module10 },
    { id: 'mod11', short: 'Retainer Sales & MRR', component: Module11 },
];

const VAULT_ITEMS: NavItem[] = [
    // Assets & Systems
    { id: 'bi', short: 'Pipeline Map', component: BonusI, vaultCategory: 'assets' },
    { id: 'bj', short: 'Template Library', component: BonusJ, vaultCategory: 'assets' },
    { id: 'bf', short: 'Prospecting Systems', component: BonusF, vaultCategory: 'assets' },
    // Live Application
    { id: 'ba', short: 'Industry Scenarios', component: BonusA, vaultCategory: 'live' },
    { id: 'bd', short: 'Roleplay Call', component: BonusD, vaultCategory: 'live' },
    // Vertical Playbooks
    { id: 'bl', short: 'Vertical Playbooks', component: BonusL, vaultCategory: 'playbooks' },
    { id: 'bm', short: 'Portfolio & Social Proof', component: BonusM, vaultCategory: 'playbooks' },
    // Advanced Tactics
    { id: 'bc', short: 'Power Questions', component: BonusC, vaultCategory: 'advanced' },
    { id: 'bh', short: 'Pricing Psychology', component: BonusH, vaultCategory: 'advanced' },
    { id: 'bb', short: 'Objection Lab — Systems', component: BonusB, vaultCategory: 'advanced' },
    { id: 'be', short: 'Advanced Closing', component: BonusE, vaultCategory: 'advanced' },
    { id: 'bk', short: 'Elite Tactics', component: BonusK, vaultCategory: 'advanced' },
];

const ALL_ITEMS: NavItem[] = [...CORE_ITEMS, ...VAULT_ITEMS];

const VAULT_CATEGORIES: { id: NavItem['vaultCategory']; label: string; icon: string }[] = [
    { id: 'assets', label: 'Assets & Systems', icon: '📂' },
    { id: 'live', label: 'Live Application', icon: '🎙️' },
    { id: 'playbooks', label: 'Vertical Playbooks', icon: '🎯' },
    { id: 'advanced', label: 'Advanced Tactics', icon: '⚔️' },
];

/* ═══════════════════════════════════════════════════════
   STYLES
═══════════════════════════════════════════════════════ */
const VIEWER_STYLES = `
  .cv-layout { display: flex; min-height: 100vh; background: #05080f; color: #94a3b8; font-family: 'Inter', sans-serif; }

  /* ── Sidebar ── */
  .cv-sidebar {
    width: 280px; flex-shrink: 0;
    background: #080c18;
    border-right: 1px solid rgba(255,255,255,0.05);
    display: flex; flex-direction: column;
    position: sticky; top: 0; height: 100vh; overflow: hidden;
  }
  .cv-sidebar-inner {
    flex: 1; overflow-y: auto; overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: rgba(34,211,238,0.2) transparent;
  }
  .cv-sidebar-inner::-webkit-scrollbar { width: 4px; }
  .cv-sidebar-inner::-webkit-scrollbar-thumb { background: rgba(34,211,238,0.2); border-radius: 2px; }

  /* Exam button footer */
  .cv-sidebar-footer {
    padding: 12px 16px;
    border-top: 1px solid rgba(255,255,255,0.05);
    flex-shrink: 0;
  }
  .cv-exam-btn {
    width: 100%; padding: 11px 16px;
    border-radius: 10px; border: 1px solid rgba(167,139,250,0.25);
    background: rgba(167,139,250,0.08);
    color: #a78bfa; font-size: 0.82rem; font-weight: 700;
    cursor: pointer; transition: all 0.2s ease;
    display: flex; align-items: center; justify-content: center; gap: 8px;
    letter-spacing: 0.03em;
  }
  .cv-exam-btn:hover {
    background: rgba(167,139,250,0.16);
    border-color: rgba(167,139,250,0.5);
    box-shadow: 0 0 18px rgba(167,139,250,0.2);
    color: #c4b5fd;
  }
  .cv-exam-btn.ready {
    border-color: rgba(16,185,129,0.4);
    background: rgba(16,185,129,0.09);
    color: #34d399;
  }
  .cv-exam-btn.ready:hover {
    background: rgba(16,185,129,0.18);
    border-color: rgba(16,185,129,0.6);
    box-shadow: 0 0 20px rgba(16,185,129,0.25);
    color: #6ee7b7;
  }
  /* Mobile floating exam pill */
  .cv-exam-float {
    display: none;
    position: fixed; bottom: 20px; right: 16px; z-index: 60;
    padding: 11px 20px; border-radius: 50px;
    border: 1px solid rgba(167,139,250,0.35);
    background: #0e1326;
    color: #a78bfa; font-size: 0.8rem; font-weight: 700;
    cursor: pointer; transition: all 0.2s ease;
    box-shadow: 0 4px 24px rgba(0,0,0,0.5);
    gap: 7px; align-items: center;
    letter-spacing: 0.03em;
  }
  .cv-exam-float.ready {
    border-color: rgba(16,185,129,0.45);
    color: #34d399;
    box-shadow: 0 4px 28px rgba(16,185,129,0.2);
  }
  @media (max-width: 768px) {
    .cv-exam-float { display: flex; }
  }

  .cv-sidebar-header {
    padding: 20px 20px 16px;
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .cv-sidebar-logo {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.7rem; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: #22d3ee;
    display: flex; align-items: center; gap: 8px;
    margin-bottom: 4px;
  }
  .cv-sidebar-title { font-size: 0.82rem; color: #64748b; font-weight: 500; margin-bottom: 14px; }

  /* Progress bar */
  .cv-progress-wrap { margin-top: 2px; }
  .cv-progress-meta {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 6px;
  }
  .cv-progress-label { font-size: 0.62rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: #334155; }
  .cv-progress-fraction { font-size: 0.7rem; font-weight: 700; color: #22d3ee; font-variant-numeric: tabular-nums; }
  .cv-progress-track {
    height: 4px; border-radius: 2px;
    background: rgba(255,255,255,0.05);
    overflow: hidden;
  }
  .cv-progress-fill {
    height: 100%; border-radius: 2px;
    background: linear-gradient(90deg, #06b6d4, #a78bfa);
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 0 8px rgba(34,211,238,0.5);
  }

  /* Nav groups */
  .cv-nav-group { padding: 10px 12px 4px; }
  .cv-nav-group-label {
    font-size: 0.6rem; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    color: #334155; padding: 4px 8px 8px;
  }
  .cv-nav-item {
    display: flex; align-items: center; gap: 10px;
    padding: 9px 12px; border-radius: 8px;
    cursor: pointer; transition: all 0.15s ease;
    border: 1px solid transparent;
    margin-bottom: 2px; position: relative;
  }
  .cv-nav-item:hover { background: rgba(255,255,255,0.04); color: #e2e8f0; }
  .cv-nav-item.active {
    background: rgba(34,211,238,0.08);
    border-color: rgba(34,211,238,0.2);
    color: #22d3ee;
  }
  .cv-nav-item.completed { opacity: 0.75; }
  .cv-nav-item.completed:hover { opacity: 1; }
  .cv-nav-item.active { opacity: 1; }

  .cv-nav-dot {
    width: 18px; height: 18px; flex-shrink: 0;
    display: flex; align-items: center; justify-content: center;
  }
  .cv-dot-circle {
    width: 7px; height: 7px; border-radius: 50%;
    background: #1e293b; border: 1px solid #334155;
    transition: all 0.2s ease;
  }
  .cv-nav-item.active .cv-dot-circle { background: #22d3ee; border-color: #22d3ee; box-shadow: 0 0 6px #22d3ee88; }
  .cv-nav-item.completed .cv-dot-circle { display: none; }
  .cv-check-icon { color: #10b981; display: none; }
  .cv-nav-item.completed .cv-check-icon { display: block; }
  .cv-nav-item-label { font-size: 0.82rem; font-weight: 500; flex: 1; line-height: 1.3; }

  /* Vault sub-groups */
  .cv-vault-group { margin-bottom: 4px; }
  .cv-vault-cat-btn {
    width: 100%; display: flex; align-items: center; gap: 8px;
    padding: 7px 12px; border-radius: 8px;
    background: transparent; border: none;
    cursor: pointer; transition: background 0.15s;
    margin-bottom: 2px;
  }
  .cv-vault-cat-btn:hover { background: rgba(255,255,255,0.03); }
  .cv-vault-cat-icon { font-size: 0.78rem; }
  .cv-vault-cat-label { font-size: 0.7rem; font-weight: 600; color: #475569; flex: 1; text-align: left; }
  .cv-vault-cat-chevron { color: #334155; transition: transform 0.18s; }
  .cv-vault-cat-chevron.open { transform: rotate(180deg); }
  .cv-vault-items { padding-left: 8px; }

  /* ── Main Content ── */
  .cv-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
  .cv-topbar {
    position: sticky; top: 0; z-index: 20;
    background: rgba(5,8,15,0.9); backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255,255,255,0.05);
    padding: 14px 32px;
    display: flex; align-items: center; justify-content: space-between; gap: 16px;
  }
  .cv-topbar-left { display: flex; align-items: center; gap: 12px; }
  .cv-topbar-module {
    font-size: 0.7rem; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase; color: #22d3ee;
  }
  .cv-topbar-divider { width: 1px; height: 16px; background: rgba(255,255,255,0.1); }
  .cv-topbar-title { font-size: 0.9rem; font-weight: 500; color: #e2e8f0; }
  .cv-topbar-nav { display: flex; align-items: center; gap: 8px; }
  .cv-nav-btn {
    width: 34px; height: 34px; border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.08);
    background: rgba(255,255,255,0.03);
    color: #64748b;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; transition: all 0.15s ease;
  }
  .cv-nav-btn:hover:not(:disabled) { background: rgba(34,211,238,0.08); border-color: rgba(34,211,238,0.3); color: #22d3ee; }
  .cv-nav-btn:disabled { opacity: 0.3; cursor: not-allowed; }
  .cv-progress-text { font-size: 0.75rem; color: #475569; padding: 0 6px; white-space: nowrap; }

  .cv-content {
    flex: 1; padding: 48px 56px 80px;
    max-width: 900px; width: 100%; margin: 0 auto;
    transition: opacity 0.18s ease, transform 0.18s ease;
  }
  .cv-content.entering { opacity: 0; transform: translateY(12px); }

  /* ── Mark Complete Button ── */
  .cv-complete-wrap {
    max-width: 900px; margin: 0 auto; padding: 0 56px 80px;
  }
  .cv-complete-btn {
    display: flex; align-items: center; justify-content: center; gap: 10px;
    width: 100%; padding: 18px 32px; border-radius: 14px;
    border: 1px solid rgba(16,185,129,0.25);
    background: rgba(16,185,129,0.07);
    color: #34d399; font-size: 0.95rem; font-weight: 700;
    cursor: pointer; transition: all 0.2s ease;
    letter-spacing: 0.02em;
  }
  .cv-complete-btn:hover {
    background: rgba(16,185,129,0.14);
    border-color: rgba(16,185,129,0.45);
    box-shadow: 0 0 24px rgba(16,185,129,0.15);
    transform: translateY(-1px);
  }
  .cv-complete-btn.done {
    border-color: rgba(16,185,129,0.15);
    background: rgba(16,185,129,0.04);
    color: #059669; cursor: default;
    transform: none; box-shadow: none;
  }

  /* ── Mobile ── */
  .cv-mobile-bar {
    display: none;
    position: sticky; top: 0; z-index: 50;
    background: rgba(8,12,24,0.95); backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    padding: 14px 20px;
    align-items: center; justify-content: space-between;
  }
  .cv-mobile-overlay {
    display: none; position: fixed; inset: 0; z-index: 40;
    background: rgba(0,0,0,0.7); backdrop-filter: blur(4px);
  }
  .cv-mobile-sidebar {
    display: none; position: fixed;
    top: 0; left: 0; bottom: 0; width: 300px; z-index: 50;
    background: #080c18; border-right: 1px solid rgba(255,255,255,0.08);
    overflow-y: auto;
    transform: translateX(-100%); transition: transform 0.25s ease;
  }
  .cv-mobile-sidebar.open { transform: translateX(0); }

  @media (max-width: 768px) {
    .cv-sidebar { display: none; }
    .cv-topbar { display: none; }
    .cv-mobile-bar { display: flex; }
    .cv-mobile-sidebar { display: block; }
    .cv-mobile-overlay.open { display: block; }
    .cv-content { padding: 32px 20px 60px; }
    .cv-complete-wrap { padding: 0 20px 60px; }
  }
`;

/* ═══════════════════════════════════════════════════════
   VAULT SIDEBAR SECTION
═══════════════════════════════════════════════════════ */
function VaultNav({
    activeIdx,
    navigate,
}: {
    activeIdx: number;
    navigate: (idx: number) => void;
}) {
    const [openCats, setOpenCats] = useState<Set<string>>(new Set(['assets']));

    function toggleCat(id: string) {
        setOpenCats(prev => {
            const next = new Set(prev);
            if (next.has(id)) next.delete(id);
            else next.add(id);
            return next;
        });
    }

    return (
        <div className="cv-nav-group">
            <div className="cv-nav-group-label">⚡ The Vault</div>
            {VAULT_CATEGORIES.map(cat => {
                const items = VAULT_ITEMS.filter(v => v.vaultCategory === cat.id);
                const isOpen = openCats.has(cat.id!);
                return (
                    <div key={cat.id} className="cv-vault-group">
                        <button className="cv-vault-cat-btn" onClick={() => toggleCat(cat.id!)}>
                            <span className="cv-vault-cat-icon">{cat.icon}</span>
                            <span className="cv-vault-cat-label">{cat.label}</span>
                            <ChevronDown size={12} className={`cv-vault-cat-chevron ${isOpen ? 'open' : ''}`} />
                        </button>
                        {isOpen && (
                            <div className="cv-vault-items">
                                {items.map(item => {
                                    const realIdx = ALL_ITEMS.indexOf(item);
                                    return (
                                        <div
                                            key={item.id}
                                            className={`cv-nav-item${activeIdx === realIdx ? ' active' : ''}`}
                                            onClick={() => navigate(realIdx)}
                                        >
                                            <div className="cv-nav-dot"><div className="cv-dot-circle" /></div>
                                            <span className="cv-nav-item-label">{item.short}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

/* ═══════════════════════════════════════════════════════
   CORE MODULE NAV
═══════════════════════════════════════════════════════ */
function CoreNav({
    activeIdx,
    completed,
    navigate,
}: {
    activeIdx: number;
    completed: Set<number>;
    navigate: (idx: number) => void;
}) {
    return (
        <div className="cv-nav-group">
            <div className="cv-nav-group-label">Core Modules</div>
            {CORE_ITEMS.map((item, i) => {
                const isDone = completed.has(i);
                const isActive = activeIdx === i;
                return (
                    <div
                        key={item.id}
                        className={`cv-nav-item${isActive ? ' active' : ''}${isDone && !isActive ? ' completed' : ''}`}
                        onClick={() => navigate(i)}
                    >
                        <div className="cv-nav-dot">
                            <div className="cv-dot-circle" />
                            <CheckCircle2 size={14} className="cv-check-icon" />
                        </div>
                        <span className="cv-nav-item-label">{item.short}</span>
                    </div>
                );
            })}
        </div>
    );
}

/* ═══════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════ */
export default function CurriculumViewer({ onStartTest }: Props) {
    const [activeIdx, setActiveIdx] = useState(0);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [entering, setEntering] = useState(false);
    const [completed, setCompleted] = useState<Set<number>>(new Set());

    // Load from localStorage on mount
    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) setCompleted(new Set(JSON.parse(raw) as number[]));
        } catch { /* ignore */ }
    }, []);

    const navigate = useCallback((idx: number) => {
        if (idx === activeIdx) return;
        setEntering(true);
        setTimeout(() => {
            setActiveIdx(idx);
            setEntering(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 180);
        setSidebarOpen(false);
    }, [activeIdx]);

    // Keyboard nav
    useEffect(() => {
        function handleKey(e: KeyboardEvent) {
            if (e.key === 'ArrowRight' && activeIdx < ALL_ITEMS.length - 1) navigate(activeIdx + 1);
            if (e.key === 'ArrowLeft' && activeIdx > 0) navigate(activeIdx - 1);
        }
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [activeIdx, navigate]);

    function markComplete() {
        if (completed.has(activeIdx)) return;
        const next = new Set(completed);
        next.add(activeIdx);
        setCompleted(next);
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify([...next])); } catch { /* ignore */ }
        // Auto-advance after short delay
        if (activeIdx < ALL_ITEMS.length - 1) {
            setTimeout(() => navigate(activeIdx + 1), 420);
        }
    }

    const isCoreModule = activeIdx < CORE_COUNT;
    const isLastCore = activeIdx === CORE_COUNT - 1;
    const isAlreadyComplete = completed.has(activeIdx);
    const completedCoreCount = [...completed].filter(i => i < CORE_COUNT).length;
    const progressPct = Math.round((completedCoreCount / CORE_COUNT) * 100);

    const ActiveComponent = ALL_ITEMS[activeIdx].component;

    // Topbar label
    const topbarTag = isCoreModule
        ? `Module ${String(activeIdx + 1).padStart(2, '0')}`
        : 'The Vault';
    const topbarTitle = ALL_ITEMS[activeIdx].short;

    /* ─── Shared sidebar header content ─── */
    function SidebarHeader() {
        return (
            <div className="cv-sidebar-header">
                <div className="cv-sidebar-logo"><BookOpen size={12} /> QuantLab Training</div>
                <div className="cv-sidebar-title">Sales Partner Playbook</div>
                <div className="cv-progress-wrap">
                    <div className="cv-progress-meta">
                        <span className="cv-progress-label">Core Progress</span>
                        <span className="cv-progress-fraction">{completedCoreCount}/{CORE_COUNT}</span>
                    </div>
                    <div className="cv-progress-track">
                        <div className="cv-progress-fill" style={{ width: `${progressPct}%` }} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <>
            <style>{trainingStyles}</style>
            <style>{VIEWER_STYLES}</style>

            <div className="cv-layout">
                {/* ─── Desktop Sidebar ─── */}
                <aside className="cv-sidebar">
                    <SidebarHeader />
                    <div className="cv-sidebar-inner">
                        <CoreNav activeIdx={activeIdx} completed={completed} navigate={navigate} />
                        <VaultNav activeIdx={activeIdx} navigate={navigate} />
                    </div>
                    <div className="cv-sidebar-footer">
                        <button
                            className={`cv-exam-btn${completedCoreCount === CORE_COUNT ? ' ready' : ''}`}
                            onClick={onStartTest}
                        >
                            {completedCoreCount === CORE_COUNT ? '🎓' : '📝'}
                            {completedCoreCount === CORE_COUNT ? 'Take the Exam — Ready!' : `Take the Exam (${completedCoreCount}/${CORE_COUNT})`}
                        </button>
                    </div>
                </aside>

                {/* ─── Main ─── */}
                <main className="cv-main">
                    {/* Desktop Top Bar */}
                    <div className="cv-topbar">
                        <div className="cv-topbar-left">
                            <span className="cv-topbar-module">{topbarTag}</span>
                            <div className="cv-topbar-divider" />
                            <span className="cv-topbar-title">{topbarTitle}</span>
                        </div>
                        <div className="cv-topbar-nav">
                            <button className="cv-nav-btn" disabled={activeIdx === 0} onClick={() => navigate(activeIdx - 1)}>
                                <ChevronLeft size={16} />
                            </button>
                            <span className="cv-progress-text">{activeIdx + 1} / {ALL_ITEMS.length}</span>
                            <button className="cv-nav-btn" disabled={activeIdx === ALL_ITEMS.length - 1} onClick={() => navigate(activeIdx + 1)}>
                                <ChevronRight size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Top Bar */}
                    <div className="cv-mobile-bar">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}
                        >
                            <Menu size={20} />
                            <span style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>{topbarTitle}</span>
                        </button>
                        <div className="cv-topbar-nav">
                            <button className="cv-nav-btn" disabled={activeIdx === 0} onClick={() => navigate(activeIdx - 1)}><ChevronLeft size={16} /></button>
                            <span className="cv-progress-text">{activeIdx + 1}/{ALL_ITEMS.length}</span>
                            <button className="cv-nav-btn" disabled={activeIdx === ALL_ITEMS.length - 1} onClick={() => navigate(activeIdx + 1)}><ChevronRight size={16} /></button>
                        </div>
                    </div>

                    {/* Mobile Overlay + Sidebar */}
                    <div className={`cv-mobile-overlay${sidebarOpen ? ' open' : ''}`} onClick={() => setSidebarOpen(false)} />
                    <div className={`cv-mobile-sidebar${sidebarOpen ? ' open' : ''}`}>
                        <div className="cv-sidebar-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <div className="cv-sidebar-logo"><BookOpen size={12} /> QuantLab Training</div>
                                <div className="cv-sidebar-title">Sales Partner Playbook</div>
                                <div className="cv-progress-wrap">
                                    <div className="cv-progress-meta">
                                        <span className="cv-progress-label">Core Progress</span>
                                        <span className="cv-progress-fraction">{completedCoreCount}/{CORE_COUNT}</span>
                                    </div>
                                    <div className="cv-progress-track">
                                        <div className="cv-progress-fill" style={{ width: `${progressPct}%` }} />
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => setSidebarOpen(false)} style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', marginLeft: '8px', flexShrink: 0 }}>
                                <X size={18} />
                            </button>
                        </div>
                        <CoreNav activeIdx={activeIdx} completed={completed} navigate={navigate} />
                        <VaultNav activeIdx={activeIdx} navigate={navigate} />
                    </div>

                    {/* Content */}
                    <div className={`cv-content${entering ? ' entering' : ''}`}>
                        <ActiveComponent onStartTest={onStartTest} />
                    </div>

                    {/* Mobile floating exam button */}
                    <button
                        className={`cv-exam-float${completedCoreCount === CORE_COUNT ? ' ready' : ''}`}
                        onClick={onStartTest}
                    >
                        {completedCoreCount === CORE_COUNT ? '🎓' : '📝'}
                        {completedCoreCount === CORE_COUNT ? 'Take Exam' : `Exam (${completedCoreCount}/${CORE_COUNT})`}
                    </button>

                    {/* Mark as Complete — only on core modules (not the last one which has its own CTA) */}
                    {isCoreModule && !isLastCore && (
                        <div className="cv-complete-wrap">
                            <button
                                className={`cv-complete-btn${isAlreadyComplete ? ' done' : ''}`}
                                onClick={markComplete}
                                disabled={isAlreadyComplete}
                            >
                                <CheckCircle2 size={18} />
                                {isAlreadyComplete
                                    ? '✓ Module Complete — continuing...'
                                    : 'Mark Complete & Continue →'
                                }
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </>
    );
}
