import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { CreditCard, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Stripe Integration, ACH Billing & License Servers | QuantLab",
    description:
        "Custom Stripe integration consulting, ACH billing, auto-invoicing, subscription billing, and JWT-validated license servers with seat management. Free scoping call.",
    alternates: { canonical: "https://quantlabusa.dev/services/payments-invoicing-licensing" },
    openGraph: {
        title: "Get Paid. Manage Access. Ship Software.",
        description:
            "Stripe, ACH, auto-invoicing, subscription billing, and custom license servers with JWT validation, usage tracking, and seat management.",
        url: "https://quantlabusa.dev/services/payments-invoicing-licensing",
        type: "article",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Payments, Invoicing, and License Management Development",
    name: "Payments, Invoicing & Licensing",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Stripe and ACH payment integration, automated invoicing with reminders, revenue dashboards, and custom license servers with JWT validation, usage tracking, and customer seat management.",
    url: "https://quantlabusa.dev/services/payments-invoicing-licensing",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can you integrate Stripe with an existing app?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We handle full Stripe integration including Checkout, Subscriptions, Billing Portal, Connect for marketplaces, and webhook handling with idempotency. If you're already partway there, we can audit and finish what's missing.",
            },
        },
        {
            "@type": "Question",
            name: "What's the difference between a license server and just using Stripe subscriptions?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Stripe tracks who is paying. A license server tracks what they're allowed to do — how many seats, which features, how many API calls, whether their key has expired. For desktop apps, installed software, and multi-seat B2B products, you need both.",
            },
        },
        {
            "@type": "Question",
            name: "Do you support ACH and international payments?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes on ACH through Stripe. International cards are supported by default. For specific local payment methods (SEPA, iDEAL, etc.) we enable them through Stripe's Payment Element. We do not currently work with crypto payment rails.",
            },
        },
        {
            "@type": "Question",
            name: "Can customers manage their own plans and seats?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Every build includes a customer-facing billing portal where they update payment method, upgrade or downgrade plans, invite team members, revoke seats, and download invoices. That cuts your support load.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle failed payments and dunning?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Stripe Smart Retries plus our own layer on top: custom email sequences, in-app banners before service is cut off, grace period logic, and a reactivation flow that doesn't trap them on a support ticket. Good dunning is a revenue lever.",
            },
        },
    ],
};

export default function PaymentsLicensingPage() {
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
                        <li className="text-gray-300">Payments, Invoicing &amp; Licensing</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-400 mb-6">
                        <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Payments, Invoicing &amp; Licensing
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Stripe integrations, ACH, auto-generated invoices, payment reminders, revenue dashboards, and license servers with JWT validation and seat management.
                    </p>
                    <ConsultationCTA label="Scope an Integration" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most of the work falls into two halves. On the payments side: Stripe Checkout and Billing Portal integrations, ACH flows for B2B invoicing, webhook handling that survives retries and replays without double-charging, automated invoice generation with custom branding, reminder email sequences, and a revenue dashboard that shows MRR, churn, and cash-vs-booked without requiring a Stripe dashboard login.
                        </p>
                        <p>
                            On the licensing side: full license servers for SaaS and installed software. JWT-based license keys that validate offline for short windows but phone home regularly, usage tracking (API calls, active users, seats consumed), expiry and renewal enforcement, and a customer portal where admins can assign seats to their team without opening a support ticket.
                        </p>
                        <p>
                            We've shipped both pieces live. The patterns here are well-worn — the trick is getting the edge cases right. Failed payments, partial refunds, mid-cycle plan changes, and the customer who swaps their card at midnight are where most integrations quietly break.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Custom Stripe integration consulting</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Stripe's docs are good. Real business problems are messy. You have annual contracts billed monthly, partial refunds that need to hit the right invoice, a Connect marketplace where payouts have to reconcile to QuickBooks, or a subscription that needs to upgrade mid-cycle without double-charging. The Stripe Dashboard does maybe 60% of what you need. The other 40% is custom code — and that is what Stripe integration consulting actually means. We build the missing 40%.
                        </p>
                        <p>
                            Engagements we run: subscription billing with tiered plans, usage-based pricing, mid-cycle upgrades, and dunning. Invoicing systems with branded invoices, partial payments, and customer portals. Stripe Connect marketplaces with onboarding, payouts, platform fees, and 1099 reporting. Webhook and event processing that is idempotent, queued, with retry and audit logs. QuickBooks sync where invoices, payments, and refunds reconcile automatically. And hybrid recurring + one-off setups where SaaS plus services plus add-ons live in one customer record.
                        </p>
                        <p>
                            Reference build: <Link href="/work/bridgepointe-painting" className="text-emerald-400 hover:underline">Bridgepointe Painting</Link> — a custom Stripe + QuickBooks Online integration we shipped that closed their month-end from three days to thirty minutes. Line-item accuracy, retainer accounting, and per-job profitability reporting end-to-end. Stripe consulting clients served from <Link href="/software-development-macon-ga" className="text-emerald-400 hover:underline">Macon</Link>, <Link href="/software-development-atlanta-ga" className="text-emerald-400 hover:underline">Atlanta</Link>, and <Link href="/software-development-savannah-ga" className="text-emerald-400 hover:underline">Savannah, GA</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Software licensing system development</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            You shipped a product. Now you need to control who can use it, how long, on which devices, with which features. Off-the-shelf licensing SaaS charges per activation, leaks data on your customers to a third party, and breaks the moment your model gets even mildly unusual — trial-to-paid, per-seat-with-floats, offline-OK-for-30-days, named-user-with-machine-pinning. A custom license server gives you back control of activation, entitlements, and revenue protection, and lets you keep customer data on your own infrastructure.
                        </p>
                        <p>
                            What we build: cryptographically signed license keys (Ed25519 or RS256), machine-bound, time-bound, and feature-flagged. Online activation via REST API with webhooks and an audit trail. Offline activation via signed token files for air-gapped customers. Floating / concurrent licensing with check-in / check-out, lease expiry, and heartbeat. Entitlement management with feature flags per customer, per plan, and per seat. A customer portal for self-serve activation, deactivation, and seat reallocation. And Stripe-tied entitlement so subscription state drives license state automatically.
                        </p>
                        <p>
                            Threat model first. A $9 mobile app and a $40k enterprise install do not need the same enforcement. We design the abuse-prevention layer (machine fingerprinting, activation count caps, audit-based throttling) to match the realistic threat level for your business. Crypto is standard — signed JWTs, Ed25519, or NaCl — not homegrown.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Who this is for</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            SaaS founders at the point where billing is about to become a real department, software vendors shipping paid desktop or server software who need license enforcement, B2B service companies that currently send PDF invoices from email, and any product team whose customer support inbox is 40% "I got billed wrong" tickets.
                        </p>
                        <p>
                            Also: teams that have been using a third-party licensing tool (Gumroad, Paddle, LemonSqueezy) and want to bring the billing logic in-house for better control, margin, and customer experience.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we approach it</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Step one is mapping every state a paying customer can be in. Trialing, active, past-due, cancelled-but-not-yet-expired, refunded, disputed. You'd be surprised how many SaaS apps have "cancelled" and "paused" wired to the same database field with no way to tell them apart later. We clean that up first.
                        </p>
                        <p>
                            Webhook handling gets extra attention. Every Stripe event goes into a queue with idempotency keys, so a replay from Stripe's end never creates a duplicate row. Webhook failures get retried with exponential backoff, and a Slack alert fires if anything has been failing for more than a few minutes.
                        </p>
                        <p>
                            License-side builds use short-lived JWTs signed by a private key you own. The client validates offline for the TTL window, then renews. If a seat is revoked, the next renewal fails — no need for a permanent connection, but revocation propagates within minutes.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Stripe API",
                            "Stripe Checkout / Billing Portal",
                            "Stripe Connect",
                            "Node.js",
                            "PostgreSQL",
                            "JWT (RS256)",
                            "Webhooks + retry queues",
                            "Sentry",
                            "React dashboards",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Stripe is the default for payments in 95% of our builds. It's the most developer-honest billing platform out there. For everything else — licensing, revenue reporting, dunning — we build on top of Node and Postgres so you own the logic and can migrate it later if needed.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "Full Stripe integration including Checkout, Billing Portal, and webhooks",
                            "ACH and international card support where enabled",
                            "Idempotent webhook processing with retry queue and alerting",
                            "Automated invoice generation, reminders, and payment receipts",
                            "Customer-facing billing portal with plan changes and seat management",
                            "License server with JWT validation, usage tracking, and seat revocation",
                            "MRR, churn, and revenue dashboard for internal use",
                            "Dunning flow with grace periods and reactivation",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Can you integrate Stripe with an existing app?",
                                a: "Yes. We handle full Stripe integration including Checkout, Subscriptions, Billing Portal, Connect for marketplaces, and webhook handling with idempotency. If you're already partway there, we can audit and finish what's missing.",
                            },
                            {
                                q: "What's the difference between a license server and just using Stripe subscriptions?",
                                a: "Stripe tracks who is paying. A license server tracks what they're allowed to do — how many seats, which features, how many API calls, whether their key has expired. For desktop apps, installed software, and multi-seat B2B products, you need both.",
                            },
                            {
                                q: "Do you support ACH and international payments?",
                                a: "Yes on ACH through Stripe. International cards are supported by default. For specific local payment methods (SEPA, iDEAL, etc.) we enable them through Stripe's Payment Element. We do not currently work with crypto payment rails.",
                            },
                            {
                                q: "Can customers manage their own plans and seats?",
                                a: "Yes. Every build includes a customer-facing billing portal where they update payment method, upgrade or downgrade plans, invite team members, revoke seats, and download invoices. That cuts your support load.",
                            },
                            {
                                q: "How do you handle failed payments and dunning?",
                                a: "Stripe Smart Retries plus our own layer on top: custom email sequences, in-app banners before service is cut off, grace period logic, and a reactivation flow that doesn't trap them on a support ticket. Good dunning is a revenue lever.",
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
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Ops dashboards that read from the revenue data." },
                            { slug: "web-applications", title: "Web Applications", desc: "The product the billing sits behind." },
                            { slug: "cloud-infrastructure", title: "Cloud Infrastructure", desc: "Reliable hosting for webhook endpoints." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-emerald-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Start charging properly.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Book a call to walk through your billing and licensing needs. We'll scope a path forward in one conversation.
                        </p>
                        <ConsultationCTA label="Book a Consultation" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
