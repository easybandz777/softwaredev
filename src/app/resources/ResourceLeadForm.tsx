"use client";

import { useState } from "react";
import Link from "next/link";
import { Download, Mail, ArrowRight, Check, Loader2 } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Props {
    slug: string;
    title: string;
    pdfFilename: string;
    drip: string;
    successHeadline?: string;
    relatedServiceHref?: string;
    relatedServiceLabel?: string;
}

export function ResourceLeadForm({
    slug,
    title,
    pdfFilename,
    drip,
    successHeadline,
    relatedServiceHref,
    relatedServiceLabel,
}: Props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [company, setCompany] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const pdfUrl = `/resources/${pdfFilename}`;
    const source = `${slug}-resource`;

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(null);

        const trimmedEmail = email.trim();
        if (!trimmedEmail) {
            setError("Please enter your work email.");
            return;
        }
        if (!EMAIL_RE.test(trimmedEmail)) {
            setError("Please enter a valid email address.");
            return;
        }

        setSubmitting(true);

        const finalName = name.trim() || trimmedEmail.split("@")[0];

        const payload = {
            name: finalName,
            email: trimmedEmail,
            company: company.trim() || null,
            source,
            magnet: slug,
            drip,
        };

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (!res.ok) {
                const body = await res.json().catch(() => null);
                if (body?.error) {
                    setError(body.error);
                    setSubmitting(false);
                    return;
                }
            }
        } catch {
        }

        setSubmitting(false);
        setSubmitted(true);
    }

    if (submitted) {
        return (
            <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-sky-500/5 p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-full bg-emerald-500/20 p-2">
                        <Check className="w-5 h-5 text-emerald-400" />
                    </div>
                    <p className="text-sm uppercase tracking-widest text-emerald-300 font-semibold">
                        Download ready
                    </p>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {successHeadline || `${title} is yours.`}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                    Click below to download the PDF. We will also email a copy of the link to {email} shortly.
                    If you want a second set of eyes on your specific situation, reply to that email or book
                    a 20-minute call below.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <a
                        href={pdfUrl}
                        download
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold px-5 py-3 transition-colors min-h-[48px]"
                    >
                        <Download className="w-4 h-4" />
                        Download the PDF
                    </a>
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 hover:border-sky-400/50 text-white font-semibold px-5 py-3 transition-colors min-h-[48px]"
                    >
                        Book a 20-min call
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
                {relatedServiceHref && relatedServiceLabel ? (
                    <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                        Or read more about{" "}
                        <Link href={relatedServiceHref} className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                            {relatedServiceLabel}
                        </Link>
                        .
                    </p>
                ) : null}
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-[#0a0f1e]/80 backdrop-blur-md p-6 md:p-8 shadow-[0_0_60px_rgba(56,189,248,0.05)]"
            noValidate
        >
            <div className="flex items-center gap-2 mb-4">
                <div className="rounded-full bg-sky-500/20 p-2">
                    <Mail className="w-4 h-4 text-sky-400" />
                </div>
                <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold">
                    Free PDF download
                </p>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Get the {title}.
            </h3>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                One email, no spam, no list rentals. We send you the PDF and one
                short follow-up to make sure it landed. Unsubscribe in one click.
            </p>

            <div className="space-y-4">
                <div>
                    <label htmlFor={`${slug}-name`} className="block text-sm font-medium text-gray-300 mb-2">
                        First name <span className="text-gray-500">(optional)</span>
                    </label>
                    <input
                        id={`${slug}-name`}
                        type="text"
                        autoComplete="given-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:border-sky-400 focus:outline-none transition-colors"
                        placeholder="William"
                        maxLength={120}
                    />
                </div>

                <div>
                    <label htmlFor={`${slug}-email`} className="block text-sm font-medium text-gray-300 mb-2">
                        Work email <span className="text-rose-400">*</span>
                    </label>
                    <input
                        id={`${slug}-email`}
                        type="email"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:border-sky-400 focus:outline-none transition-colors"
                        placeholder="you@company.com"
                        maxLength={200}
                    />
                </div>

                <div>
                    <label htmlFor={`${slug}-company`} className="block text-sm font-medium text-gray-300 mb-2">
                        Company <span className="text-gray-500">(optional)</span>
                    </label>
                    <input
                        id={`${slug}-company`}
                        type="text"
                        autoComplete="organization"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full rounded-lg bg-[#0d1526] border border-white/10 px-4 py-2.5 text-white placeholder-gray-500 focus:border-sky-400 focus:outline-none transition-colors"
                        placeholder="Acme Co."
                        maxLength={120}
                    />
                </div>

                {error ? (
                    <p className="text-sm text-rose-400" role="alert">
                        {error}
                    </p>
                ) : null}

                <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-400 hover:from-sky-400 hover:to-cyan-300 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-5 py-3 transition-all min-h-[48px]"
                >
                    {submitting ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            Sending...
                        </>
                    ) : (
                        <>
                            <Download className="w-4 h-4" />
                            Send Me The PDF
                        </>
                    )}
                </button>

                <p className="text-xs text-gray-500 leading-relaxed">
                    By downloading, you agree to receive a single follow-up email about
                    this resource. We never share your email with third parties. See our{" "}
                    <Link href="/privacy" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                        privacy policy
                    </Link>
                    .
                </p>
            </div>
        </form>
    );
}
