"use client";

import React, { useMemo, useState } from "react";
import { ArrowLeftRight, Check, X } from "lucide-react";

// Normalize #rgb / #rrggbb (with or without the leading #) into {r,g,b}.
function parseHex(value: string): { r: number; g: number; b: number } | null {
    let hex = value.trim().replace(/^#/, "");
    if (/^[0-9a-fA-F]{3}$/.test(hex)) {
        hex = hex
            .split("")
            .map((c) => c + c)
            .join("");
    }
    if (!/^[0-9a-fA-F]{6}$/.test(hex)) return null;
    return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16),
    };
}

// WCAG 2.x relative luminance: linearize each sRGB channel, then weight.
function relativeLuminance({ r, g, b }: { r: number; g: number; b: number }): number {
    const channel = (c: number) => {
        const s = c / 255;
        return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
    };
    return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
}

function contrastRatio(a: { r: number; g: number; b: number }, b: { r: number; g: number; b: number }): number {
    const l1 = relativeLuminance(a);
    const l2 = relativeLuminance(b);
    const lighter = Math.max(l1, l2);
    const darker = Math.min(l1, l2);
    return (lighter + 0.05) / (darker + 0.05);
}

function toHexString(rgb: { r: number; g: number; b: number }): string {
    return (
        "#" +
        [rgb.r, rgb.g, rgb.b].map((c) => c.toString(16).padStart(2, "0")).join("")
    );
}

function Verdict({ pass }: { pass: boolean }) {
    return pass ? (
        <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-2.5 py-1 text-xs font-semibold text-emerald-300">
            <Check className="h-3 w-3" /> Pass
        </span>
    ) : (
        <span className="inline-flex items-center gap-1 rounded-full border border-rose-400/40 bg-rose-400/10 px-2.5 py-1 text-xs font-semibold text-rose-300">
            <X className="h-3 w-3" /> Fail
        </span>
    );
}

export function ColorContrastChecker() {
    const [fg, setFg] = useState("#e5e7eb");
    const [bg, setBg] = useState("#0d1526");

    const fgRgb = useMemo(() => parseHex(fg), [fg]);
    const bgRgb = useMemo(() => parseHex(bg), [bg]);

    const ratio = useMemo(() => {
        if (!fgRgb || !bgRgb) return null;
        return contrastRatio(fgRgb, bgRgb);
    }, [fgRgb, bgRgb]);

    const checks = useMemo(() => {
        if (ratio === null) return null;
        return {
            normalAA: ratio >= 4.5,
            normalAAA: ratio >= 7,
            largeAA: ratio >= 3,
            largeAAA: ratio >= 4.5,
            uiComponents: ratio >= 3,
        };
    }, [ratio]);

    function swap() {
        setFg(bg);
        setBg(fg);
    }

    const previewFg = fgRgb ? toHexString(fgRgb) : "#ffffff";
    const previewBg = bgRgb ? toHexString(bgRgb) : "#000000";

    return (
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md p-6 md:p-10 shadow-[0_0_60px_rgba(56,189,248,0.05)]">
            <div className="grid gap-8 lg:grid-cols-2">
                <div className="space-y-6">
                    <ColorField
                        id="fg-color"
                        label="Foreground (text)"
                        value={fg}
                        onChange={setFg}
                        valid={!!fgRgb}
                    />
                    <div className="flex justify-center">
                        <button
                            type="button"
                            onClick={swap}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0d1526] px-4 py-2 text-xs text-gray-300 transition-colors hover:border-sky-400/40 hover:text-white"
                        >
                            <ArrowLeftRight className="h-3.5 w-3.5" /> Swap colors
                        </button>
                    </div>
                    <ColorField
                        id="bg-color"
                        label="Background"
                        value={bg}
                        onChange={setBg}
                        valid={!!bgRgb}
                    />
                </div>

                <div className="space-y-4">
                    <div
                        className="flex min-h-[150px] flex-col justify-center rounded-lg border border-white/10 p-6 text-center"
                        style={{ backgroundColor: previewBg, color: previewFg }}
                    >
                        <p className="text-2xl font-bold">Large text sample</p>
                        <p className="mt-2 text-sm">
                            Normal body text — the quick brown fox jumps over the lazy dog.
                        </p>
                    </div>

                    <div className="rounded-lg border border-white/10 bg-[#0d1526]/60 p-5 text-center">
                        {ratio !== null ? (
                            <>
                                <p className="text-xs uppercase tracking-widest text-gray-500">
                                    Contrast ratio
                                </p>
                                <p className="mt-1 font-mono text-4xl font-bold text-white">
                                    {ratio.toFixed(2)}
                                    <span className="text-lg text-gray-500">:1</span>
                                </p>
                            </>
                        ) : (
                            <p className="py-4 text-sm text-rose-400">
                                Enter two valid hex colors (e.g. #1a2b3c or #abc).
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {checks && (
                <div className="mt-8 overflow-hidden rounded-lg border border-white/10">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-[#0d1526] text-xs uppercase tracking-wide text-gray-500">
                            <tr>
                                <th className="px-4 py-3 font-medium">Conformance level</th>
                                <th className="px-4 py-3 font-medium">Requirement</th>
                                <th className="px-4 py-3 font-medium text-right">Result</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {(
                                [
                                    ["Normal text — AA", "≥ 4.5:1", checks.normalAA],
                                    ["Normal text — AAA", "≥ 7:1", checks.normalAAA],
                                    ["Large text — AA", "≥ 3:1", checks.largeAA],
                                    ["Large text — AAA", "≥ 4.5:1", checks.largeAAA],
                                    ["UI components & graphics", "≥ 3:1", checks.uiComponents],
                                ] as const
                            ).map(([label, req, pass]) => (
                                <tr key={label} className="bg-[#0a0f1e]/40">
                                    <td className="px-4 py-3 text-gray-200">{label}</td>
                                    <td className="px-4 py-3 font-mono text-xs text-gray-400">{req}</td>
                                    <td className="px-4 py-3 text-right">
                                        <Verdict pass={pass} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <p className="mt-4 text-xs text-gray-500">
                Large text means 18pt (24px) regular, or 14pt (18.66px) bold, and above. All
                computation runs locally in your browser using the WCAG 2.x relative-luminance
                formula.
            </p>
        </div>
    );
}

function ColorField({
    id,
    label,
    value,
    onChange,
    valid,
}: {
    id: string;
    label: string;
    value: string;
    onChange: (v: string) => void;
    valid: boolean;
}) {
    const colorInputValue = valid
        ? toHexString(parseHex(value) as { r: number; g: number; b: number })
        : "#000000";
    return (
        <div className="space-y-2">
            <label htmlFor={id} className="block text-sm font-medium text-gray-300">
                {label}
            </label>
            <div className="flex items-center gap-3">
                <input
                    type="color"
                    aria-label={`${label} swatch`}
                    value={colorInputValue}
                    onChange={(e) => onChange(e.target.value)}
                    className="h-11 w-12 cursor-pointer rounded-lg border border-white/10 bg-[#0d1526] p-1"
                />
                <input
                    id={id}
                    type="text"
                    value={value}
                    spellCheck={false}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="#1a2b3c"
                    className={`w-full rounded-lg border bg-[#0d1526] px-4 py-3 font-mono text-sm text-white transition-colors focus:outline-none ${
                        valid ? "border-white/10 focus:border-sky-400" : "border-rose-500/50"
                    }`}
                />
            </div>
        </div>
    );
}
