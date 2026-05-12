import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { KeyRound, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom Software License Server Development | QuantLab",
    description:
        "Custom software license server development — JWT licensing, offline activation, floating licenses, machine fingerprinting. Built for ISVs and desktop software.",
    alternates: { canonical: "https://quantlabusa.dev/services/license-server" },
    openGraph: {
        title: "Custom Software License Server Development",
        description:
            "JWT-based licensing systems with offline activation, machine-locked and floating models, telemetry, and Stripe-tied entitlement. Built to your activation model.",
        url: "https://quantlabusa.dev/services/license-server",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Software License Server Development",
        description:
            "JWT licensing, offline activation, floating licenses, machine fingerprinting. Built to your activation model.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software License Server Development",
    name: "Custom Software License Server & JWT Licensing System Development",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#org",
    },
    areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "City", name: "Atlanta, GA" },
        { "@type": "City", name: "Macon, GA" },
        { "@type": "City", name: "Savannah, GA" },
        { "@type": "City", name: "Augusta, GA" },
        { "@type": "City", name: "Columbus, GA" },
        { "@type": "City", name: "Miami, FL" },
        { "@type": "City", name: "Austin, TX" },
        { "@type": "City", name: "Dallas, TX" },
        { "@type": "City", name: "Chicago, IL" },
        { "@type": "City", name: "Seattle, WA" },
        { "@type": "City", name: "New York, NY" },
        { "@type": "City", name: "San Francisco, CA" },
        { "@type": "City", name: "Charlotte, NC" },
        { "@type": "City", name: "Nashville, TN" },
    ],
    description:
        "Custom software license server and JWT-based licensing system development for ISVs, desktop software vendors, and B2B SaaS. Online and offline activation, machine-locked and floating concurrent licenses, telemetry, churn signals, anti-piracy enforcement, and Stripe-tied entitlement.",
    url: "https://quantlabusa.dev/services/license-server",
    offers: {
        "@type": "Offer",
        priceRange: "$12,000-$45,000",
        priceCurrency: "USD",
        description: "Contact for quote",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can the license server work offline?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Offline activation uses a signed JWT token file — the client validates the signature locally without phoning home. You control how long the offline grace period is and what telemetry we collect when the client does come back online.",
            },
        },
        {
            "@type": "Question",
            name: "How does this tie into Stripe?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Stripe subscription state is the source of truth for entitlement. When a customer pays, their entitlement record activates. When they churn, it deactivates on a schedule you control — immediate, end-of-period, or with a configurable grace window.",
            },
        },
        {
            "@type": "Question",
            name: "Why not just use Keygen, Cryptlex, or LicenseSpring?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Prebuilt licensing SaaS charges per activation, leaks your customer data to a third party, and breaks the moment your model gets unusual — trial-to-paid, per-seat with floats, offline-OK-for-30-days, or named-user with machine pinning. A custom build gives you back control of activation, entitlements, and revenue protection on your own infrastructure.",
            },
        },
        {
            "@type": "Question",
            name: "What stops a customer from sharing their license key?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Machine fingerprinting plus activation count limits plus audit-based throttling. We design the enforcement to fit the abuse risk — aggressive for high-value enterprise software, light for prosumer tools. A $9 mobile app and a $40k enterprise install do not need the same enforcement.",
            },
        },
        {
            "@type": "Question",
            name: "Can we migrate from Cryptolens, Keygen, or Paddle Licensing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We bring over your existing customer licenses with no disruption to active installs. Existing keys keep working; new keys flow through the custom server.",
            },
        },
    ],
};

export default function LicenseServerPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Custom License Server</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 mb-6">
                        <KeyRound className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software License Server Development
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        You shipped a product. Now you need to control who can use it, how long, on which devices, with which features — without paying per-activation to a third-party SaaS that leaks your customer data. We build the license server.
                    </p>
                    <ConsultationCTA label="Scope a License Server" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">When prebuilt licensing isn't a fit</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Off-the-shelf licensing SaaS like Keygen, Cryptlex, and LicenseSpring works fine for vanilla use cases. The moment your model has a wrinkle — trial-to-paid with feature gates, per-seat with floating concurrent slots, offline-OK-for-30-days with a grace period, or named-user with machine pinning — you hit the wall of "their roadmap, not yours." Plus you're paying per-activation and routing your customer telemetry through a vendor.
                        </p>
                        <p>
                            A custom license server gives you back control of activation, entitlements, churn telemetry, and revenue protection. Customer data lives on your own infrastructure. Enforcement matches the actual abuse risk for your product. And when your billing model changes, you change the code — not file a feature request and wait six months.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build</h2>
                    <ul className="space-y-3">
                        {[
                            "JWT-signed license key generation — machine-bound, time-bound, feature-flagged with Ed25519 or NaCl signatures",
                            "Online activation API — REST endpoints, webhooks, full audit trail",
                            "Offline activation with signed token files for air-gapped enterprise customers",
                            "Floating / concurrent licensing — check-in/check-out, lease expiry, heartbeat protocol",
                            "Machine fingerprinting libraries (Windows, macOS, Linux) tuned to ignore VM noise",
                            "Telemetry pipeline — usage signals, churn indicators, version distribution, feature adoption",
                            "Stripe-tied entitlement — subscription state drives feature flags automatically, with configurable grace periods",
                            "Customer self-serve portal for activation, deactivation, seat reallocation, and license transfer",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">JWT vs server-validated — which to use</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            JWT-based licensing is the right call when your software runs offline frequently and you trust the client environment to not be hostile. The client carries a signed token, validates it locally with a public key, and only phones home periodically. Fast, robust against transient network issues, and clean for desktop/CLI tools.
                        </p>
                        <p>
                            Server-validated licensing is the right call when your software is online-only, when you need real-time seat enforcement, or when piracy risk is high enough to justify the network call. Every feature gate hits the server; entitlement can revoke immediately. Best for high-value enterprise software, SaaS, and multi-seat B2B products. Many of our builds use both — JWT for the fast path, server validation for high-value operations.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">In-house proof — quantlab-license-server</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We dogfood this stack. Our internal <code className="px-2 py-0.5 rounded bg-[#0d1526]/60 text-amber-300 text-sm">quantlab-license-server</code> repo is the same architecture we ship to clients: JWT-signed entitlement, Stripe webhook integration, machine fingerprinting on a per-client basis, and an admin dashboard for support and sales. Production-grade from day one. Same patterns, different verticals.
                        </p>
                        <p>
                            License server development served from <Link href="/software-development-macon-ga" className="text-amber-400 hover:underline">Macon, GA</Link>, with clients across <Link href="/software-development-atlanta-ga" className="text-amber-400 hover:underline">Atlanta</Link>, <Link href="/software-development-austin-tx" className="text-amber-400 hover:underline">Austin</Link>, and beyond. See also <Link href="/work/active-directory-pentest" className="text-amber-400 hover:underline">our security work</Link> for the threat-modeling approach we bring to license enforcement.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Can the license server work offline?",
                                a: "Yes. Offline activation uses a signed JWT token file — the client validates the signature locally without phoning home. You control how long the offline grace period is and what telemetry we collect when the client does come back online.",
                            },
                            {
                                q: "How does this tie into Stripe?",
                                a: "Stripe subscription state is the source of truth for entitlement. When a customer pays, their entitlement record activates. When they churn, it deactivates on a schedule you control — immediate, end-of-period, or with a configurable grace window.",
                            },
                            {
                                q: "Why not just use Keygen, Cryptlex, or LicenseSpring?",
                                a: "Prebuilt licensing SaaS charges per activation, leaks your customer data to a third party, and breaks the moment your model gets unusual — trial-to-paid, per-seat with floats, offline-OK-for-30-days, or named-user with machine pinning. A custom build gives you back control of activation, entitlements, and revenue protection on your own infrastructure.",
                            },
                            {
                                q: "What stops a customer from sharing their license key?",
                                a: "Machine fingerprinting plus activation count limits plus audit-based throttling. We design the enforcement to fit the abuse risk — aggressive for high-value enterprise software, light for prosumer tools. A $9 mobile app and a $40k enterprise install do not need the same enforcement.",
                            },
                            {
                                q: "Can we migrate from Cryptolens, Keygen, or Paddle Licensing?",
                                a: "Yes. We bring over your existing customer licenses with no disruption to active installs. Existing keys keep working; new keys flow through the custom server.",
                            },
                        ].map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Wire subscription state into entitlement state from day one." },
                            { slug: "subscription-billing", title: "Subscription Billing", desc: "Custom recurring billing for SaaS with complex plans." },
                            { slug: "web-applications", title: "Next.js Development", desc: "Build the admin dashboard and customer portal on the same stack." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-amber-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Need a license server that fits your model, not the vendor's?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a scoping call to walk through your activation model. Founder-led from threat model to production.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
