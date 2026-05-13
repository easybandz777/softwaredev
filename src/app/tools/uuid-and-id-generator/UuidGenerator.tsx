"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Copy, Check, Download, FileText, Hash, RefreshCw } from "lucide-react";
import {
    uuidV4,
    uuidV7,
    nanoid,
    ulid,
    cuid,
    shortSlug,
    ID_DESCRIPTIONS,
    type IdKind,
} from "@/lib/tools/ids";

type Format = "json" | "csv" | "text";

function generateOne(kind: IdKind, nanoLen: number, slugLen: number): string {
    switch (kind) {
        case "uuid-v4":
            return uuidV4();
        case "uuid-v7":
            return uuidV7();
        case "nanoid":
            return nanoid(nanoLen);
        case "ulid":
            return ulid();
        case "cuid":
            return cuid();
        case "slug":
            return shortSlug(slugLen);
    }
}

export function UuidGenerator() {
    const [kind, setKind] = useState<IdKind>("uuid-v4");
    const [count, setCount] = useState<number>(10);
    const [nanoLen, setNanoLen] = useState<number>(21);
    const [slugLen, setSlugLen] = useState<number>(8);
    const [ids, setIds] = useState<string[]>([]);
    const [copied, setCopied] = useState(false);

    function generate() {
        const n = Math.max(1, Math.min(10000, count));
        const out: string[] = [];
        for (let i = 0; i < n; i++) out.push(generateOne(kind, nanoLen, slugLen));
        setIds(out);
    }

    async function handleCopy() {
        if (ids.length === 0) return;
        try {
            await navigator.clipboard.writeText(ids.join("\n"));
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            setCopied(false);
        }
    }

    function download(format: Format) {
        if (ids.length === 0) return;
        let content = "";
        let mime = "text/plain";
        let ext = "txt";
        if (format === "json") {
            content = JSON.stringify({ kind, count: ids.length, ids }, null, 2);
            mime = "application/json";
            ext = "json";
        } else if (format === "csv") {
            content = `kind,id\n${ids.map((id) => `${kind},${id}`).join("\n")}\n`;
            mime = "text/csv";
            ext = "csv";
        } else {
            content = ids.join("\n");
        }
        const blob = new Blob([content], { type: mime });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${kind}-${ids.length}.${ext}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    const info = ID_DESCRIPTIONS[kind];

    return (
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md p-6 md:p-10 shadow-[0_0_60px_rgba(56,189,248,0.05)]">
            <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-2 space-y-5">
                    <div>
                        <label htmlFor="kind" className="block text-sm font-medium text-gray-300 mb-2">
                            ID format
                        </label>
                        <select
                            id="kind"
                            value={kind}
                            onChange={(e) => setKind(e.target.value as IdKind)}
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white focus:border-sky-400 focus:outline-none transition-colors"
                        >
                            {(Object.keys(ID_DESCRIPTIONS) as IdKind[]).map((k) => (
                                <option key={k} value={k}>
                                    {ID_DESCRIPTIONS[k].name}
                                </option>
                            ))}
                        </select>
                        <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                            {info.description}
                        </p>
                        <p className="text-xs font-mono text-sky-300 mt-2">e.g. {info.example}</p>
                    </div>

                    <div>
                        <label htmlFor="count" className="block text-sm font-medium text-gray-300 mb-2">
                            How many?
                        </label>
                        <div className="grid grid-cols-4 gap-2 mb-2">
                            {[1, 10, 100, 1000].map((n) => (
                                <button
                                    key={n}
                                    type="button"
                                    onClick={() => setCount(n)}
                                    className={`text-xs rounded-full px-3 py-1.5 border transition-colors ${
                                        count === n
                                            ? "border-sky-400/50 bg-sky-400/10 text-white"
                                            : "border-white/10 bg-[#0d1526] text-gray-400 hover:text-white"
                                    }`}
                                >
                                    {n}
                                </button>
                            ))}
                        </div>
                        <input
                            id="count"
                            type="number"
                            min={1}
                            max={10000}
                            value={count}
                            onChange={(e) =>
                                setCount(Math.max(1, Math.min(10000, Number(e.target.value) || 1)))
                            }
                            className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                        />
                        <p className="text-xs text-gray-500 mt-1.5">Max 10,000 per batch.</p>
                    </div>

                    {kind === "nanoid" && (
                        <div>
                            <label htmlFor="nanolen" className="block text-sm font-medium text-gray-300 mb-2">
                                nanoid length
                            </label>
                            <input
                                id="nanolen"
                                type="number"
                                min={4}
                                max={64}
                                value={nanoLen}
                                onChange={(e) =>
                                    setNanoLen(Math.max(4, Math.min(64, Number(e.target.value) || 21)))
                                }
                                className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                            />
                            <p className="text-xs text-gray-500 mt-1.5">
                                21 chars = ~149 bits of entropy (comparable to UUID v4).
                            </p>
                        </div>
                    )}

                    {kind === "slug" && (
                        <div>
                            <label htmlFor="sluglen" className="block text-sm font-medium text-gray-300 mb-2">
                                slug length
                            </label>
                            <input
                                id="sluglen"
                                type="number"
                                min={4}
                                max={32}
                                value={slugLen}
                                onChange={(e) =>
                                    setSlugLen(Math.max(4, Math.min(32, Number(e.target.value) || 8)))
                                }
                                className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2 text-sm text-white focus:border-sky-400 focus:outline-none transition-colors"
                            />
                            <p className="text-xs text-gray-500 mt-1.5">
                                Short slugs collide — pair with a uniqueness check in your DB.
                            </p>
                        </div>
                    )}

                    <Button type="button" variant="primary" size="md" onClick={generate}>
                        <RefreshCw className="w-4 h-4" /> Generate
                    </Button>
                </div>

                <div className="lg:col-span-3">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between gap-3">
                            <p className="text-xs uppercase tracking-widest text-gray-500 inline-flex items-center gap-2">
                                <Hash className="w-3.5 h-3.5" />
                                {ids.length > 0 ? `${ids.length} generated` : "Output"}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <button
                                    type="button"
                                    onClick={handleCopy}
                                    disabled={ids.length === 0}
                                    className="text-xs text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                                    {copied ? "Copied" : "Copy all"}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => download("json")}
                                    disabled={ids.length === 0}
                                    className="text-xs text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    <Download className="w-3 h-3" /> JSON
                                </button>
                                <button
                                    type="button"
                                    onClick={() => download("csv")}
                                    disabled={ids.length === 0}
                                    className="text-xs text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    <FileText className="w-3 h-3" /> CSV
                                </button>
                                <button
                                    type="button"
                                    onClick={() => download("text")}
                                    disabled={ids.length === 0}
                                    className="text-xs text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    <FileText className="w-3 h-3" /> TXT
                                </button>
                            </div>
                        </div>

                        <div className="rounded-xl border border-white/10 bg-[#0d1526]/60 p-4 min-h-[300px] max-h-[600px] overflow-y-auto">
                            {ids.length === 0 ? (
                                <p className="text-sm text-gray-500 italic">
                                    Click <strong>Generate</strong> to create IDs. Each one is
                                    produced with crypto.getRandomValues — cryptographically secure,
                                    never leaves your browser.
                                </p>
                            ) : (
                                <ol className="font-mono text-xs text-gray-300 space-y-1">
                                    {ids.map((id, i) => (
                                        <li key={`${id}-${i}`} className="break-all">
                                            <span className="text-gray-600 select-none">
                                                {(i + 1).toString().padStart(String(ids.length).length, " ")}.{" "}
                                            </span>
                                            {id}
                                        </li>
                                    ))}
                                </ol>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
