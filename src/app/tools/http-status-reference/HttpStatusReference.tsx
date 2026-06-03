"use client";

import React, { useMemo, useState } from "react";
import { Search, Copy, Check } from "lucide-react";

type StatusCode = {
    code: number;
    name: string;
    summary: string;
};

type StatusClass = {
    range: string;
    label: string;
    blurb: string;
    accent: string;
    codes: StatusCode[];
};

const STATUS_CLASSES: StatusClass[] = [
    {
        range: "1xx",
        label: "Informational",
        blurb: "The request was received and the process is continuing.",
        accent: "text-sky-300",
        codes: [
            { code: 100, name: "Continue", summary: "The client should continue sending the request body; initial headers were accepted." },
            { code: 101, name: "Switching Protocols", summary: "The server agrees to switch protocols as requested in the Upgrade header (e.g., to WebSocket)." },
            { code: 102, name: "Processing", summary: "WebDAV: the server has accepted the request but has not yet completed it." },
            { code: 103, name: "Early Hints", summary: "Used to send preliminary headers (such as preload links) before the final response." },
        ],
    },
    {
        range: "2xx",
        label: "Success",
        blurb: "The request was successfully received, understood, and accepted.",
        accent: "text-emerald-300",
        codes: [
            { code: 200, name: "OK", summary: "Standard success response. The body contains the requested resource or result." },
            { code: 201, name: "Created", summary: "The request succeeded and a new resource was created; the Location header should point to it." },
            { code: 202, name: "Accepted", summary: "The request was accepted for processing, but processing is not complete (async work)." },
            { code: 203, name: "Non-Authoritative Information", summary: "The response is a modified version from a transforming proxy, not the origin." },
            { code: 204, name: "No Content", summary: "Success with no response body — common for DELETE and some PUT requests." },
            { code: 205, name: "Reset Content", summary: "Success; the client should reset the document view (e.g., clear a form)." },
            { code: 206, name: "Partial Content", summary: "The server is delivering part of the resource in response to a Range header." },
        ],
    },
    {
        range: "3xx",
        label: "Redirection",
        blurb: "Further action is needed to complete the request.",
        accent: "text-cyan-300",
        codes: [
            { code: 301, name: "Moved Permanently", summary: "The resource has a new permanent URL; update links. Search engines transfer ranking." },
            { code: 302, name: "Found", summary: "Temporary redirect. The method may change on redirect in practice — prefer 307 to preserve it." },
            { code: 303, name: "See Other", summary: "Redirects to another URL with a GET request, typically after a POST (POST/redirect/GET)." },
            { code: 304, name: "Not Modified", summary: "The cached copy is still valid; used with conditional requests (If-None-Match / ETag)." },
            { code: 307, name: "Temporary Redirect", summary: "Like 302 but guarantees the HTTP method and body are not changed on the redirect." },
            { code: 308, name: "Permanent Redirect", summary: "Like 301 but guarantees the method and body are preserved on the redirect." },
        ],
    },
    {
        range: "4xx",
        label: "Client Error",
        blurb: "The request contains bad syntax or cannot be fulfilled.",
        accent: "text-amber-300",
        codes: [
            { code: 400, name: "Bad Request", summary: "The server cannot process the request due to a client error (malformed syntax, invalid body)." },
            { code: 401, name: "Unauthorized", summary: "Authentication is required or has failed. Despite the name, it means 'unauthenticated'." },
            { code: 402, name: "Payment Required", summary: "Reserved for future use; some APIs use it to signal a billing or quota issue." },
            { code: 403, name: "Forbidden", summary: "The client is authenticated but not allowed to access this resource. Authorization failed." },
            { code: 404, name: "Not Found", summary: "The requested resource does not exist, or the server hides its existence." },
            { code: 405, name: "Method Not Allowed", summary: "The HTTP method is not supported for this resource (e.g., POST to a read-only endpoint)." },
            { code: 406, name: "Not Acceptable", summary: "The resource cannot be returned in a form matching the request's Accept headers." },
            { code: 408, name: "Request Timeout", summary: "The server timed out waiting for the client to finish sending the request." },
            { code: 409, name: "Conflict", summary: "The request conflicts with the current state (e.g., a duplicate or version mismatch)." },
            { code: 410, name: "Gone", summary: "The resource was intentionally removed and will not return. Stronger than 404." },
            { code: 415, name: "Unsupported Media Type", summary: "The request body's Content-Type is not supported by the endpoint." },
            { code: 418, name: "I'm a Teapot", summary: "An April Fools' joke from RFC 2324. Returned by some servers as an easter egg." },
            { code: 422, name: "Unprocessable Content", summary: "The syntax is valid but the request is semantically wrong — common for validation errors." },
            { code: 429, name: "Too Many Requests", summary: "The client has sent too many requests in a window. Honor the Retry-After header." },
        ],
    },
    {
        range: "5xx",
        label: "Server Error",
        blurb: "The server failed to fulfill a valid request.",
        accent: "text-rose-300",
        codes: [
            { code: 500, name: "Internal Server Error", summary: "A generic catch-all for an unexpected condition on the server. Check your logs." },
            { code: 501, name: "Not Implemented", summary: "The server does not support the functionality required to fulfill the request." },
            { code: 502, name: "Bad Gateway", summary: "A gateway or proxy received an invalid response from an upstream server." },
            { code: 503, name: "Service Unavailable", summary: "The server is temporarily overloaded or down for maintenance. Often paired with Retry-After." },
            { code: 504, name: "Gateway Timeout", summary: "A gateway or proxy did not get a timely response from an upstream server." },
            { code: 505, name: "HTTP Version Not Supported", summary: "The server does not support the HTTP protocol version used in the request." },
        ],
    },
];

export function HttpStatusReference() {
    const [query, setQuery] = useState("");
    const [copied, setCopied] = useState<number | null>(null);

    const normalized = query.trim().toLowerCase();

    const filtered = useMemo(() => {
        if (!normalized) return STATUS_CLASSES;
        return STATUS_CLASSES.map((cls) => ({
            ...cls,
            codes: cls.codes.filter((c) => {
                const haystack = `${c.code} ${c.name} ${c.summary} ${cls.label} ${cls.range}`.toLowerCase();
                return haystack.includes(normalized);
            }),
        })).filter((cls) => cls.codes.length > 0);
    }, [normalized]);

    const totalMatches = useMemo(
        () => filtered.reduce((sum, cls) => sum + cls.codes.length, 0),
        [filtered],
    );

    async function handleCopy(code: number, name: string) {
        try {
            await navigator.clipboard.writeText(`${code} ${name}`);
            setCopied(code);
            setTimeout(() => setCopied(null), 2000);
        } catch {
            setCopied(null);
        }
    }

    return (
        <div className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md p-6 md:p-10 shadow-[0_0_60px_rgba(56,189,248,0.05)]">
            <div className="mb-8">
                <label htmlFor="status-search" className="sr-only">
                    Search HTTP status codes
                </label>
                <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#0d1526] px-4 py-3 transition-colors focus-within:border-sky-400">
                    <Search className="h-4 w-4 flex-shrink-0 text-gray-500" />
                    <input
                        id="status-search"
                        type="search"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search by code or keyword — try 404, redirect, unauthorized, rate limit"
                        className="flex-1 bg-transparent text-sm text-white placeholder:text-gray-600 focus:outline-none"
                    />
                </div>
                {normalized && (
                    <p className="mt-2 text-xs text-gray-500">
                        {totalMatches} match{totalMatches === 1 ? "" : "es"} for &quot;{query.trim()}&quot;
                    </p>
                )}
            </div>

            {filtered.length === 0 ? (
                <p className="py-8 text-center text-sm text-gray-500">
                    No status codes match that search.
                </p>
            ) : (
                <div className="space-y-10">
                    {filtered.map((cls) => (
                        <section key={cls.range}>
                            <div className="mb-4 flex items-baseline gap-3">
                                <h3 className={`font-mono text-lg font-bold ${cls.accent}`}>{cls.range}</h3>
                                <span className="text-sm font-semibold text-white">{cls.label}</span>
                                <span className="text-xs text-gray-500">{cls.blurb}</span>
                            </div>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {cls.codes.map((c) => (
                                    <div
                                        key={c.code}
                                        className="group rounded-xl border border-white/10 bg-[#0d1526]/60 p-4 transition-colors hover:border-sky-400/30"
                                    >
                                        <div className="flex items-center justify-between gap-2">
                                            <p className="flex items-baseline gap-2">
                                                <span className={`font-mono text-base font-bold ${cls.accent}`}>{c.code}</span>
                                                <span className="text-sm font-semibold text-white">{c.name}</span>
                                            </p>
                                            <button
                                                type="button"
                                                onClick={() => handleCopy(c.code, c.name)}
                                                aria-label={`Copy ${c.code} ${c.name}`}
                                                className="text-gray-600 opacity-0 transition-opacity hover:text-sky-300 group-hover:opacity-100"
                                            >
                                                {copied === c.code ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                                            </button>
                                        </div>
                                        <p className="mt-1.5 text-xs leading-relaxed text-gray-400">{c.summary}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            )}
        </div>
    );
}
