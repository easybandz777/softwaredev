"use client";

import React, { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Copy, Check, Type, Trash2 } from "lucide-react";

const SAMPLE = "QUANT LAB USA builds custom software & security tools";

// Split text into word tokens, treating spaces, punctuation, and case
// boundaries (camelCase, PascalCase) as delimiters. This lets us recombine
// into any target convention cleanly.
function toWords(input: string): string[] {
    return (
        input
            // insert a space at lower->Upper boundaries: "camelCase" -> "camel Case"
            .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
            // split acronym->word boundaries: "HTMLParser" -> "HTML Parser"
            .replace(/([A-Z]+)([A-Z][a-z])/g, "$1 $2")
            // any run of non-alphanumeric becomes a separator
            .split(/[^a-zA-Z0-9]+/)
            .filter(Boolean)
    );
}

function upperCase(s: string): string {
    return s.toUpperCase();
}
function lowerCase(s: string): string {
    return s.toLowerCase();
}
function titleCase(s: string): string {
    return toWords(s)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join(" ");
}
function sentenceCase(s: string): string {
    const lower = s.toLowerCase();
    return lower.replace(/(^\s*\w)|([.!?]\s+\w)/g, (m) => m.toUpperCase());
}
function camelCase(s: string): string {
    return toWords(s)
        .map((w, i) =>
            i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
        )
        .join("");
}
function pascalCase(s: string): string {
    return toWords(s)
        .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
        .join("");
}
function snakeCase(s: string): string {
    return toWords(s)
        .map((w) => w.toLowerCase())
        .join("_");
}
function kebabCase(s: string): string {
    return toWords(s)
        .map((w) => w.toLowerCase())
        .join("-");
}
function constantCase(s: string): string {
    return toWords(s)
        .map((w) => w.toUpperCase())
        .join("_");
}

type Converter = { key: string; label: string; fn: (s: string) => string; hint: string };

const CONVERTERS: Converter[] = [
    { key: "upper", label: "UPPER CASE", fn: upperCase, hint: "Every letter capitalized" },
    { key: "lower", label: "lower case", fn: lowerCase, hint: "Every letter lowercased" },
    { key: "title", label: "Title Case", fn: titleCase, hint: "First letter of each word" },
    { key: "sentence", label: "Sentence case", fn: sentenceCase, hint: "First letter of each sentence" },
    { key: "camel", label: "camelCase", fn: camelCase, hint: "JS/Java variables & properties" },
    { key: "pascal", label: "PascalCase", fn: pascalCase, hint: "Classes & React components" },
    { key: "snake", label: "snake_case", fn: snakeCase, hint: "Python & SQL identifiers" },
    { key: "kebab", label: "kebab-case", fn: kebabCase, hint: "URLs, CSS & file names" },
    { key: "constant", label: "CONSTANT_CASE", fn: constantCase, hint: "Env vars & constants" },
];

function ResultCard({ converter, output }: { converter: Converter; output: string }) {
    const [copied, setCopied] = useState(false);
    async function copy() {
        if (!output) return;
        try {
            await navigator.clipboard.writeText(output);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch {
            setCopied(false);
        }
    }
    return (
        <div className="rounded-lg border border-white/10 bg-[#0d1526]/60 p-4">
            <div className="mb-2 flex items-center justify-between gap-3">
                <div className="min-w-0">
                    <p className="font-mono text-sm font-semibold text-white">{converter.label}</p>
                    <p className="text-xs text-gray-500">{converter.hint}</p>
                </div>
                <button
                    type="button"
                    onClick={copy}
                    disabled={!output}
                    className="inline-flex flex-shrink-0 items-center gap-1 text-xs text-sky-400 hover:text-sky-300 disabled:cursor-not-allowed disabled:opacity-40"
                >
                    {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    {copied ? "Copied" : "Copy"}
                </button>
            </div>
            <p className="break-words font-mono text-sm leading-relaxed text-sky-200">
                {output || <span className="text-gray-600">Output appears here.</span>}
            </p>
        </div>
    );
}

export function TextCaseConverter() {
    const [input, setInput] = useState("");

    const outputs = useMemo(() => {
        return CONVERTERS.map((c) => ({
            converter: c,
            output: input.trim() ? c.fn(input) : "",
        }));
    }, [input]);

    const stats = useMemo(() => {
        const words = toWords(input).length;
        return { chars: input.length, words };
    }, [input]);

    return (
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md p-6 md:p-10 shadow-[0_0_60px_rgba(56,189,248,0.05)]">
            <div className="mb-6 flex flex-wrap items-center gap-2 text-sm">
                <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gray-500">
                    <Type className="h-3.5 w-3.5" /> Input
                </span>
                <button
                    type="button"
                    onClick={() => setInput(SAMPLE)}
                    className="ml-auto text-xs text-sky-400 hover:text-sky-300"
                >
                    Load sample
                </button>
            </div>

            <div className="space-y-3">
                <label htmlFor="case-input" className="sr-only">
                    Text to convert
                </label>
                <textarea
                    id="case-input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    spellCheck={false}
                    rows={5}
                    placeholder="Type or paste any text…"
                    className="w-full rounded-lg border border-white/10 bg-[#0d1526] px-4 py-3 font-mono text-sm text-white transition-colors focus:border-sky-400 focus:outline-none"
                />
                <div className="flex flex-wrap items-center gap-3">
                    <Button type="button" variant="ghost" size="sm" onClick={() => setInput("")}>
                        <Trash2 className="h-4 w-4" /> Clear
                    </Button>
                    {input.trim() && (
                        <span className="text-xs text-gray-500">
                            {stats.chars.toLocaleString()} characters · {stats.words.toLocaleString()} words
                        </span>
                    )}
                </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {outputs.map(({ converter, output }) => (
                    <ResultCard key={converter.key} converter={converter} output={output} />
                ))}
            </div>
        </div>
    );
}
