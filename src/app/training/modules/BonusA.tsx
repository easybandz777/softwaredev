'use client';

import React, { useState } from 'react';
import { industryScenarios, IndustryScenario } from '../data/industryScenarios';

/* ─── Sub-components ─── */

function IndustryGrid({ onSelect }: { onSelect: (s: IndustryScenario) => void }) {
    return (
        <div className="ql-training-content">
            <div className="ql-section-header">
                <span className="ql-module-number">Bonus Module A</span>
                <h2 className="ql-module-title">Industry Scenarios</h2>
            </div>
            <p style={{ color: '#94a3b8', marginBottom: '40px', fontSize: '1.05rem', lineHeight: 1.7 }}>
                Speak their language from your first sentence and you establish instant credibility. Each industry has a unique profile, specific pain points, a proven opener, discovery questions, and tailored objection responses. Click an industry to deep dive.
            </p>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '20px',
            }}>
                {industryScenarios.map((scenario) => (
                    <button
                        key={scenario.id}
                        onClick={() => onSelect(scenario)}
                        style={{
                            background: '#0a0f1d',
                            border: '1px solid rgba(255,255,255,0.07)',
                            borderRadius: '16px',
                            padding: '28px 24px',
                            textAlign: 'left',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                        onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(34,211,238,0.35)';
                            (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
                            (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(34,211,238,0.08)';
                        }}
                        onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)';
                            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                        }}
                    >
                        {/* Top glow strip */}
                        <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0,
                            height: '2px',
                            background: 'linear-gradient(90deg, #22d3ee, #a78bfa)',
                            opacity: 0.5,
                        }} />

                        <div style={{ fontSize: '2.2rem', marginBottom: '14px' }}>{scenario.icon}</div>
                        <h3 style={{
                            fontSize: '1rem',
                            fontWeight: 700,
                            color: '#f8fafc',
                            marginBottom: '10px',
                            lineHeight: 1.3,
                        }}>{scenario.title}</h3>
                        <p style={{
                            fontSize: '0.85rem',
                            color: '#64748b',
                            lineHeight: 1.5,
                            margin: 0,
                        }}>{scenario.tagline}</p>

                        <div style={{
                            marginTop: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: '#22d3ee',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                        }}>
                            DEEP DIVE
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}

/* ─── Section pill ─── */
function SectionLabel({ color, children }: { color: string; children: React.ReactNode }) {
    return (
        <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color,
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '16px',
        }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: color, flexShrink: 0 }} />
            {children}
        </div>
    );
}

function IndustryDetail({ scenario, onBack }: { scenario: IndustryScenario; onBack: () => void }) {
    const [openObjection, setOpenObjection] = useState<number | null>(null);

    return (
        <div className="ql-training-content">
            {/* Back button */}
            <button
                onClick={onBack}
                style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    color: '#64748b', fontSize: '0.85rem', background: 'none',
                    border: '1px solid rgba(255,255,255,0.07)', borderRadius: '8px',
                    padding: '8px 14px', cursor: 'pointer', marginBottom: '32px',
                    transition: 'color 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#f8fafc')}
                onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                All Industries
            </button>

            {/* Header */}
            <div className="ql-section-header">
                <span className="ql-module-number">Industry Playbook</span>
                <h2 className="ql-module-title">{scenario.icon} {scenario.title}</h2>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '1.05rem', marginBottom: '40px', lineHeight: 1.7 }}>
                {scenario.profile}
            </p>

            {/* Core Pains */}
            <div className="ql-card" style={{ marginBottom: '28px' }}>
                <SectionLabel color="#ef4444">Core Pain Points</SectionLabel>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '8px' }}>
                    {scenario.corePains.map((pain, i) => (
                        <div key={i} style={{ display: 'flex', gap: '16px' }}>
                            <div style={{
                                flexShrink: 0, width: '32px', height: '32px',
                                borderRadius: '8px',
                                background: 'rgba(239,68,68,0.1)',
                                border: '1px solid rgba(239,68,68,0.2)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                color: '#ef4444', fontWeight: 700, fontSize: '0.85rem',
                            }}>
                                {i + 1}
                            </div>
                            <div>
                                <p style={{ color: '#f8fafc', fontWeight: 600, marginBottom: '6px' }}>{pain.label}</p>
                                <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: 1.65, margin: 0 }}>{pain.detail}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Opener script */}
            <div className="ql-card" style={{ marginBottom: '28px' }}>
                <SectionLabel color="#22d3ee">Proven Opener Script</SectionLabel>
                <div className="ql-script-box" style={{ marginTop: '8px' }}>
                    {scenario.openerScript}
                </div>
            </div>

            {/* Discovery questions */}
            <div className="ql-card" style={{ marginBottom: '28px' }}>
                <SectionLabel color="#22d3ee">Discovery Questions</SectionLabel>
                <ul style={{ listStyle: 'none', padding: 0, margin: '8px 0 0' }}>
                    {scenario.discoveryQuestions.map((q, i) => (
                        <li key={i} style={{
                            display: 'flex', gap: '14px',
                            padding: '14px 0',
                            borderBottom: i < scenario.discoveryQuestions.length - 1
                                ? '1px solid rgba(255,255,255,0.05)' : 'none',
                        }}>
                            <span style={{
                                flexShrink: 0, color: '#22d3ee', fontWeight: 700,
                                fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem',
                            }}>Q:</span>
                            <span style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '0.97rem' }}>{q}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* What to sell */}
            <div className="ql-tip-box" style={{ marginBottom: '28px' }}>
                <h4>💡 What to Sell Them</h4>
                <p style={{ marginBottom: 0, color: '#94a3b8', lineHeight: 1.7, fontSize: '0.97rem' }}>
                    {scenario.whatToSell}
                </p>
            </div>

            {/* Retainer angle */}
            <div className="ql-card" style={{ marginBottom: '28px', borderColor: 'rgba(167,139,250,0.25)' }}>
                <SectionLabel color="#a78bfa">Monthly Retainer Angle</SectionLabel>
                <div style={{
                    background: 'rgba(167,139,250,0.05)',
                    borderLeft: '3px solid #a78bfa',
                    padding: '20px',
                    borderRadius: '0 8px 8px 0',
                    marginTop: '8px',
                    color: '#f8fafc',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    fontSize: '0.97rem',
                }}>
                    {scenario.retainerAngle}
                </div>
            </div>

            {/* Objection handling */}
            <div className="ql-card" style={{ marginBottom: '60px' }}>
                <SectionLabel color="#f59e0b">Industry-Specific Objections</SectionLabel>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '8px' }}>
                    {scenario.objections.map((item, i) => (
                        <div key={i} style={{
                            border: '1px solid rgba(255,255,255,0.07)',
                            borderRadius: '12px',
                            overflow: 'hidden',
                        }}>
                            <button
                                onClick={() => setOpenObjection(openObjection === i ? null : i)}
                                style={{
                                    width: '100%', textAlign: 'left',
                                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                    padding: '16px 20px',
                                    background: openObjection === i ? 'rgba(245,158,11,0.06)' : 'transparent',
                                    border: 'none', cursor: 'pointer', gap: '12px',
                                    transition: 'background 0.15s ease',
                                }}
                            >
                                <span style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.95rem', lineHeight: 1.4 }}>
                                    {item.obj}
                                </span>
                                <svg
                                    width="16" height="16" viewBox="0 0 24 24" fill="none"
                                    stroke="#f59e0b" strokeWidth="2.5"
                                    style={{
                                        flexShrink: 0,
                                        transform: openObjection === i ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'transform 0.2s ease',
                                    }}
                                >
                                    <path d="M6 9l6 6 6-6" />
                                </svg>
                            </button>

                            {openObjection === i && (
                                <div style={{
                                    padding: '0 20px 20px',
                                    background: 'rgba(245,158,11,0.04)',
                                    borderTop: '1px solid rgba(255,255,255,0.05)',
                                }}>
                                    <div className="ql-script-box" style={{ marginTop: '16px', marginBottom: 0 }}>
                                        {item.response}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

/* ─── Main export ─── */
export default function BonusA() {
    const [selected, setSelected] = useState<IndustryScenario | null>(null);

    return selected
        ? <IndustryDetail scenario={selected} onBack={() => setSelected(null)} />
        : <IndustryGrid onSelect={setSelected} />;
}
