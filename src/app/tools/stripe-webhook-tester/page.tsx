import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Shield, ArrowRight, Lock, Wifi, Clock } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";
import { StripeWebhookTester } from "./StripeWebhookTester";

export const metadata: Metadata = pageMetadata({
    title: "Stripe Webhook Signature Tester | Free Tool | QUANT LAB USA",
    description:
        "Paste a Stripe webhook payload, secret, and Stripe-Signature header. Verify the HMAC-SHA256 signature in your browser. No data leaves this page.",
    slug: "/tools/stripe-webhook-tester",
    keywords: [
        "stripe webhook signature",
        "stripe webhook test",
        "verify stripe signature",
        "stripe-signature header",
        "stripe hmac sha256",
        "stripe webhook debug",
    ],
});

const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Stripe Webhook Signature Tester",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    url: "https://quantlabusa.dev/tools/stripe-webhook-tester",
    description:
        "Free in-browser tool that verifies Stripe webhook signatures using HMAC-SHA256. Paste payload, secret, and Stripe-Signature header — get a step-by-step breakdown of which check passed or failed.",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Does this tool send my webhook secret to your server?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. Every byte of computation — parsing the Stripe-Signature header, building the signed payload, computing HMAC-SHA256, comparing strings — runs in your browser using the Web Crypto API. There is no network roundtrip. You can DevTools the Network tab and confirm.",
            },
        },
        {
            "@type": "Question",
            name: "Why is my signature failing even though the secret is correct?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Nine times out of ten it is body mutation. Express's express.json() middleware reformats the JSON before your handler sees it — that breaks the signature because Stripe signed the original bytes. Use express.raw({type: 'application/json'}) for the webhook route, or set the bodyParser to false in Next.js API routes.",
            },
        },
        {
            "@type": "Question",
            name: "What is the timestamp tolerance for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Stripe includes the unix timestamp inside the signed payload and the Stripe-Signature header. You reject requests where now − t exceeds your tolerance — typically 300 seconds. This prevents an attacker from replaying an old signed webhook against your endpoint hours or days later.",
            },
        },
        {
            "@type": "Question",
            name: "Can I use this for Stripe Connect events?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Connect webhooks use the same HMAC-SHA256 signing scheme. The only difference is the secret comes from your Connect application's webhook endpoint rather than your account's. The signature format and verification steps are identical.",
            },
        },
        {
            "@type": "Question",
            name: "Why does Stripe use v1=... instead of just a raw signature?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Versioning. If Stripe ever needs to rotate the signing algorithm — say from SHA-256 to SHA-3 — they can ship v2=... alongside v1=... during the transition. Your code should verify against v1 today and be ready to accept v2 when Stripe announces it.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://quantlabusa.dev",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Tools",
            item: "https://quantlabusa.dev/tools",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "Stripe Webhook Signature Tester",
            item: "https://quantlabusa.dev/tools/stripe-webhook-tester",
        },
    ],
};

export default function StripeWebhookTesterPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(appSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <div className="container mx-auto px-6 max-w-5xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li>
                            <Link href="/" className="hover:text-sky-400 transition-colors">
                                Home
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">
                            ›
                        </li>
                        <li>
                            <Link href="/tools" className="hover:text-sky-400 transition-colors">
                                Tools
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">
                            ›
                        </li>
                        <li className="text-gray-300">Stripe Webhook Signature Tester</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                        <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Stripe Webhook Signature Tester
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-3xl">
                        Paste a webhook body, your signing secret, and the Stripe-Signature header.
                        We compute HMAC-SHA256 in your browser and walk you through every check —
                        timestamp tolerance, payload format, signature compare. No data leaves the
                        tab.
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                            <Lock className="w-4 h-4 text-emerald-400" />
                            <span>100% in-browser — secret never transmitted</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Wifi className="w-4 h-4 text-sky-400" />
                            <span>Works fully offline once loaded</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-amber-400" />
                            <span>Catches replay-window mistakes</span>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <StripeWebhookTester />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        How Stripe webhook signing actually works
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Stripe doesn&apos;t hand you a black-box signature. The
                            Stripe-Signature header is a comma-separated list of key=value pairs:
                            one timestamp <code className="text-sky-300">t=</code> and one or more
                            signatures keyed by scheme — currently{" "}
                            <code className="text-sky-300">v1=</code>. Verification is four moving
                            parts, and getting any one wrong sinks the whole thing.
                        </p>
                        <p>
                            <strong className="text-white">Step 1.</strong> Split the
                            Stripe-Signature header on commas. Pull out t=&lt;unix_timestamp&gt;
                            and v1=&lt;hex_signature&gt;. If either is missing, reject — that
                            request is malformed and an attacker may be probing.
                        </p>
                        <p>
                            <strong className="text-white">Step 2.</strong> Build the signed
                            payload as the literal string{" "}
                            <code className="text-sky-300">timestamp + &quot;.&quot; + raw_body</code>.
                            The body must be the exact bytes Stripe sent — which means you cannot
                            re-serialize it after JSON.parse. Most webhook failures we audit are
                            here: Express, NestJS, or Next.js middleware mangles the body before
                            verification.
                        </p>
                        <p>
                            <strong className="text-white">Step 3.</strong> Compute HMAC-SHA256 of
                            the signed payload using your endpoint&apos;s signing secret
                            (whsec_...). This is what Web Crypto&apos;s{" "}
                            <code className="text-sky-300">crypto.subtle.sign(&quot;HMAC&quot;)</code>{" "}
                            does. Output is 32 bytes, hex-encoded to 64 characters.
                        </p>
                        <p>
                            <strong className="text-white">Step 4.</strong> Compare your computed
                            hex against v1 from the header — using a constant-time comparison.
                            Never use <code className="text-sky-300">a === b</code> here. A
                            string-equality short-circuit leaks signature bytes through timing.
                        </p>
                        <p>
                            <strong className="text-white">The fifth check most teams skip.</strong>{" "}
                            Even with a valid signature, you should reject the request if{" "}
                            <code className="text-sky-300">now − t &gt; 300 seconds</code>. Without
                            that tolerance, an attacker who replays a signed webhook from last
                            week — say, a successful payment — can trigger your post-payment side
                            effects (granting access, sending product) twice. This is the entire
                            reason the timestamp is inside the signed payload: it ties the
                            signature to a specific moment in time.
                        </p>
                        <p>
                            In Stripe&apos;s own server library, this is the difference between{" "}
                            <code className="text-sky-300">constructEvent()</code> succeeding and
                            throwing a SignatureVerificationError. The library defaults the
                            tolerance to 300 seconds. You can pass a custom value if your
                            application has unusual clock-skew tolerance, but most teams should
                            stay at the default.
                        </p>
                        <p>
                            One more nuance: Stripe&apos;s header can include multiple v1
                            signatures during secret rotation. When you rotate a signing secret in
                            the Dashboard, Stripe will send both the old and new signatures for a
                            grace period. Your verifier should accept the request if{" "}
                            <em>any</em> of the v1 signatures matches your current secret. Don&apos;t
                            assume v1=&lt;single value&gt;.
                        </p>
                        <p>
                            If you&apos;re seeing 400s in your Stripe Dashboard&apos;s webhook
                            attempts log and you can&apos;t figure out why, drop the failing
                            payload into this tool. The step-by-step output points directly at the
                            broken check — almost always either timestamp tolerance or body
                            mutation.
                        </p>
                        <p>
                            For deeper builds — Connect marketplaces, multi-event idempotency,
                            dunning state machines — see our{" "}
                            <Link
                                href="/services/stripe-integration"
                                className="text-sky-400 underline-offset-2 hover:underline"
                            >
                                Stripe integration services
                            </Link>{" "}
                            page, or use the{" "}
                            <Link
                                href="/calculators/stripe-cost"
                                className="text-sky-400 underline-offset-2 hover:underline"
                            >
                                Stripe integration cost calculator
                            </Link>{" "}
                            to estimate scope.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Common webhook signature failures (and the fix)
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            {
                                t: "Body parsed before signing",
                                d: "JSON.parse → JSON.stringify changes byte order, whitespace, or escaping. Solution: pass raw bytes to verification, then parse.",
                            },
                            {
                                t: "Wrong endpoint secret",
                                d: "A common one with multiple endpoints: you copied the secret from endpoint A but the webhook hit endpoint B. Each endpoint has its own whsec_.",
                            },
                            {
                                t: "Header lowercased",
                                d: "Some frameworks lowercase header names — Stripe-Signature becomes stripe-signature. HTTP is case-insensitive but your code may not be. Look up by both.",
                            },
                            {
                                t: "Express bodyParser swallowed it",
                                d: "express.json() ran before your handler. Use express.raw({type: 'application/json'}) on the webhook route only.",
                            },
                            {
                                t: "Clock drift on the server",
                                d: "If your container has bad NTP, every t= looks 'old' to you. Verify your server clock with ntpq -p before blaming Stripe.",
                            },
                            {
                                t: "Replay attempt outside tolerance",
                                d: "Stripe retries failed webhooks with the same signed payload. After 5+ minutes, the original timestamp is stale — your retry would fail the freshness check.",
                            },
                        ].map((item) => (
                            <div
                                key={item.t}
                                className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-5"
                            >
                                <p className="text-sm font-semibold text-white mb-1.5">{item.t}</p>
                                <p className="text-xs text-gray-400 leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-4">
                        {faqSchema.mainEntity.map((item) => (
                            <details
                                key={item.name}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 open:bg-[#0d1526]"
                            >
                                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-white">
                                    <span>{item.name}</span>
                                    <ArrowRight className="w-4 h-4 text-sky-400 transition-transform group-open:rotate-90" />
                                </summary>
                                <p className="text-gray-400 mt-3 leading-relaxed text-sm">
                                    {item.acceptedAnswer.text}
                                </p>
                            </details>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        Related reading
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                            { label: "Stripe integration services", href: "/services/stripe-integration" },
                            { label: "Stripe cost calculator", href: "/calculators/stripe-cost" },
                            { label: "Penetration testing services", href: "/services/penetration-testing" },
                            { label: "Cybersecurity services", href: "/services/cybersecurity" },
                            { label: "All free tools", href: "/tools" },
                            { label: "Free dev calculators", href: "/calculators" },
                            { label: "Glossary", href: "/glossary" },
                            { label: "Talk to QuantLab", href: "/contact" },
                        ].map((l) => (
                            <Link
                                key={l.href}
                                href={l.href}
                                className="rounded-xl border border-white/5 bg-[#0d1526]/60 hover:border-sky-400/30 hover:bg-[#0d1526] transition-colors p-4 text-sm text-gray-300 hover:text-white"
                            >
                                {l.label} <ArrowRight className="inline w-3 h-3 ml-1 text-sky-400" />
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                            Webhook signatures failing in production?
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
                            We have audited dozens of Stripe webhook integrations. Nine out of ten
                            failures are body mutation, clock drift, or rotated secrets. A
                            20-minute call usually pinpoints which one — and how to harden the rest
                            of your event handler.
                        </p>
                        <p className="text-gray-400 text-sm max-w-2xl mx-auto mb-8 leading-relaxed">
                            Or reach us directly:{" "}
                            <a
                                href="tel:+17706521282"
                                className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline"
                            >
                                (770) 652-1282
                            </a>{" "}
                            ·{" "}
                            <a
                                href="mailto:beltz@quantlabusa.dev"
                                className="text-current hover:text-indigo-400 underline-offset-2 hover:underline"
                            >
                                beltz@quantlabusa.dev
                            </a>
                        </p>
                        <ConsultationCTA
                            label="Book a 20-min Stripe Audit"
                            source="stripe-webhook-tester"
                        />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
