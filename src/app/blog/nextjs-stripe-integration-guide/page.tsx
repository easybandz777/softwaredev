import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { Calendar, User, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Next.js + Stripe: The Complete 2026 Guide | QUANT LAB USA",
    description:
        "Production-grade Next.js + Stripe integration guide for 2026: Checkout, Subscriptions, Connect, webhook reliability, idempotency, edge cases. By QUANT LAB USA.",
    alternates: {
        canonical: "https://quantlabusa.dev/blog/nextjs-stripe-integration-guide",
    },
    openGraph: {
        title: "Next.js + Stripe: The Complete 2026 Integration Guide",
        description:
            "Server Actions, Payment Element, webhooks with signature verification and idempotency, multi-tenant SaaS billing, and a production checklist.",
        url: "https://quantlabusa.dev/blog/nextjs-stripe-integration-guide",
        type: "article",
        publishedTime: "2026-05-12",
        authors: ["William Beltz"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Next.js + Stripe: The Complete 2026 Integration Guide",
    description:
        "A founder-and-engineer-friendly walkthrough of integrating Stripe with Next.js in 2026, covering Server Actions, the Payment Element, webhook handling, subscriptions, multi-tenant billing, and the production-readiness checklist.",
    image: "https://quantlabusa.dev/og-image.png",
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
    author: {
        "@type": "Person",
        name: "William Beltz",
        url: "https://quantlabusa.dev/about",
        jobTitle: "Founder & Principal Engineer",
        worksFor: { "@id": "https://quantlabusa.dev/#organization" },
    },
    publisher: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        "@id": "https://quantlabusa.dev/#organization",
        logo: {
            "@type": "ImageObject",
            url: "https://quantlabusa.dev/logo-transparent.png",
        },
    },
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://quantlabusa.dev/blog/nextjs-stripe-integration-guide",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://quantlabusa.dev/blog",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: "Next.js + Stripe Guide",
            item: "https://quantlabusa.dev/blog/nextjs-stripe-integration-guide",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How do I integrate Stripe with Next.js in 2026?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Integrate Stripe with Next.js by initializing the Stripe SDK in a server-only module, using Server Actions to create PaymentIntents and Checkout Sessions, mounting the Payment Element or Embedded Checkout on the client, and handling webhooks with signature verification plus idempotency in a Route Handler. Three environment variables drive everything: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, and NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY.",
            },
        },
        {
            "@type": "Question",
            name: "Should I use Stripe Checkout or the Payment Element with Next.js?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Use Stripe Embedded Checkout for the fastest path to a working flow with native compliance and reduced PCI scope. Use the Payment Element when you need custom branding inside your own page layout. Skip the Card Element — the Payment Element replaces it and automatically renders every payment method your account has enabled.",
            },
        },
        {
            "@type": "Question",
            name: "How do I handle Stripe webhooks securely in Next.js App Router?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Three rules: verify the Stripe-Signature header using stripe.webhooks.constructEvent and your STRIPE_WEBHOOK_SECRET, write idempotent handlers keyed off the event ID so retries do not double-process, and persist webhook events to your database before you act on them. Webhooks are the source of truth — payment intents that succeed without the corresponding webhook should still trigger reconciliation.",
            },
        },
        {
            "@type": "Question",
            name: "How do I build multi-tenant SaaS billing on Stripe with Next.js?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Map each tenant to a Stripe Customer object, store the Customer ID in your tenants table, and use Stripe Subscriptions for recurring billing. Use the Customer Portal for self-service plan changes. Use Stripe Connect with Standard accounts if your tenants need to accept payments themselves. Webhooks scope by Customer ID, so reconciliation is straightforward.",
            },
        },
        {
            "@type": "Question",
            name: "What is the production-readiness checklist for Stripe + Next.js?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Eight items: pin the API version, enforce server-only modules, verify webhook signatures, use idempotency keys on every PaymentIntent create call, persist webhook events before handling them, test with Stripe CLI replay, monitor failed webhook deliveries, and run the production tax engine in a staging account first.",
            },
        },
    ],
};

export default function NextJsStripePage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <article className="container mx-auto px-6 max-w-3xl">
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
                            <Link href="/blog" className="hover:text-sky-400 transition-colors">
                                Blog
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">
                            ›
                        </li>
                        <li className="text-gray-300">Next.js + Stripe</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <span className="inline-block text-quant-blue text-xs font-semibold tracking-[0.2em] uppercase mb-5">
                        Software · Top of Funnel
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Next.js + Stripe: The Complete 2026 Integration Guide
                    </h1>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                        <span className="inline-flex items-center gap-1.5">
                            <User className="w-4 h-4" />
                            Bill Beltz, Founder
                        </span>
                        <span className="text-gray-700">·</span>
                        <span className="inline-flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            May 12, 2026
                        </span>
                        <span className="text-gray-700">·</span>
                        <span>14 min read</span>
                    </div>
                    <p className="text-xl text-gray-300 leading-relaxed">
                        Stripe in 2026 is a different product than Stripe in 2022. Server
                        Actions, Embedded Checkout, the Payment Element, and the
                        not-quite-finished Stripe Sigma replacement all changed the
                        integration shape. This is the guide I wish I had when we were
                        shipping our last six SaaS billing rebuilds.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How do I integrate Stripe with Next.js in 2026?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>Integrate Stripe with Next.js by initializing the Stripe SDK in a server-only module, using Server Actions to create PaymentIntents and Checkout Sessions, mounting the Payment Element or Embedded Checkout on the client, and handling webhooks with signature verification plus idempotency in a Route Handler. Three environment variables drive everything: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, and NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Stripe in 2026: what changed, what stayed
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            The big shifts since 2022 are Embedded Checkout (you can host
                            Stripe&apos;s full checkout flow inside your own page rather than
                            redirecting to a Stripe-hosted URL), broader Payment Element
                            adoption (one component renders every payment method
                            automatically), and a much more mature server-side primitive set
                            that pairs cleanly with Next.js Server Actions. The Customer
                            Portal also matured — it now handles enough of the
                            self-service-billing surface that most SaaS teams can ship a
                            v1 without writing custom billing UI at all.
                        </p>
                        <p>
                            What stayed the same: webhooks are still the source of truth.
                            Idempotency is still the difference between a billing system
                            that works and a billing system that double-charges your
                            customers when you redeploy. Signature verification is still
                            the line between a webhook handler and a security incident. If
                            you only remember three things from this guide, those three
                            should be the ones.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        The minimal setup: env vars, server-only modules, type safety
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            Three environment variables drive every Stripe integration:
                            STRIPE_SECRET_KEY for server-side calls, STRIPE_WEBHOOK_SECRET
                            for verifying webhook signatures, and NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
                            for the client. The publishable key is intentionally
                            public-prefixed because it ends up in the browser bundle. The
                            secret key never should, which is why server-only enforcement
                            matters in App Router.
                        </p>
                        <p>
                            In App Router, the right pattern is a server-only module — a
                            file with the &quot;server-only&quot; package imported at the top — that
                            initializes the Stripe SDK once and exports it. Any Server
                            Component or Server Action that needs Stripe imports from that
                            module. Any accidental client-side import throws a build error.
                            That single guardrail prevents the most common Stripe-leak
                            mistake in the wild.
                        </p>
                        <p>
                            For type safety, the official Stripe Node SDK ships TypeScript
                            types that get updated on every API version bump. Pin your API
                            version in the SDK initialization options rather than letting it
                            float — silent API version upgrades have caused enough
                            production incidents that floating is no longer the default
                            recommendation.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Building the Server Action for a Checkout Session
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            Server Actions changed the right shape of the checkout flow.
                            Before App Router, the typical pattern was an API route that
                            created the Checkout Session and a client-side fetch from the
                            browser. With Server Actions, you can collapse that into a
                            single async function bound to a form, no API route required.
                        </p>
                        <p>
                            The Server Action takes the relevant product, customer, and
                            line-item information from your form submission, calls
                            stripe.checkout.sessions.create with the right success and
                            cancel URLs, and either redirects the user to the hosted
                            Stripe URL (the simplest path) or returns the client secret
                            needed for the embedded version.
                        </p>
                        <p>
                            Three details to get right in the Checkout Session:
                            <strong className="text-white"> client_reference_id</strong>{" "}
                            should carry your internal user or workspace ID so you can
                            reconcile in webhooks; <strong className="text-white">
                                metadata
                            </strong>{" "}
                            should carry anything else you need to know at fulfillment
                            time but should never be customer-PII-sensitive; and{" "}
                            <strong className="text-white">customer_email</strong> should
                            be set if you already know it so the user doesn&apos;t have to
                            retype it. Embedded Checkout is the right default for SaaS
                            because it keeps the user on your domain, which dramatically
                            improves conversion versus the hosted redirect.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Webhook handling: signature verification and idempotency
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            Webhooks are where amateur Stripe integrations die. The two
                            failure modes you have to defend against: accepting forged
                            webhooks from anyone on the internet, and processing the same
                            webhook twice when Stripe retries.
                        </p>
                        <p>
                            <strong className="text-white">Signature verification.</strong>{" "}
                            Stripe signs every webhook with your webhook secret. In the App
                            Router webhook route handler, you need the raw request body (not
                            the parsed JSON) and the Stripe-Signature header. The SDK&apos;s
                            stripe.webhooks.constructEvent helper validates the signature
                            and returns the typed event object. The catch in App Router is
                            getting the raw body — request.text() works, but
                            request.json() does not because it has already parsed away the
                            byte-level original. Set up your route as a POST handler that
                            reads request.text() first.
                        </p>
                        <p>
                            <strong className="text-white">Idempotency.</strong> Stripe will
                            retry webhooks aggressively if it does not get a 2xx response
                            within a few seconds. That means your handler will receive the
                            same event multiple times over the life of your application.
                            Every webhook handler needs a deduplication strategy. The cleanest
                            pattern is a webhook_events table with the Stripe event ID as
                            the primary key; before processing, you INSERT IGNORE (or the
                            Postgres equivalent ON CONFLICT DO NOTHING). If the insert
                            succeeded, you process the event. If it failed because of a
                            duplicate, you 200 and move on. Database transactions wrap the
                            whole thing so a partial failure rolls back.
                        </p>
                        <p>
                            <strong className="text-white">Event routing.</strong> A real
                            webhook handler will receive dozens of event types. Don&apos;t
                            write a single 800-line switch statement — route each event
                            type to a dedicated handler module. customer.subscription.updated
                            goes to a subscription handler. invoice.payment_succeeded goes to
                            an invoice handler. checkout.session.completed goes to a
                            fulfillment handler. Each handler is independently testable.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Subscriptions: customer portal, proration, dunning
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            Subscription billing is where the integration depth shows. Three
                            sub-surfaces matter.
                        </p>
                        <p>
                            <strong className="text-white">Customer Portal.</strong> Stripe
                            now ships a hosted customer portal that handles plan changes,
                            payment-method updates, subscription cancellations, and invoice
                            history. For 80% of SaaS teams, you should use it instead of
                            building your own. You configure what the portal exposes in
                            the Stripe Dashboard (or via the Configuration API) and link
                            your customers to it from your billing settings page. The
                            engineering hours you save are real.
                        </p>
                        <p>
                            <strong className="text-white">Proration.</strong> When a
                            customer upgrades mid-cycle, Stripe prorates the difference by
                            default. When a customer downgrades, you usually want to defer
                            the change to the next billing period rather than prorating a
                            refund. The proration_behavior parameter controls this on
                            subscription updates. Get the policy explicit and documented
                            up front — both customers and CFOs find proration surprises
                            unforgivable.
                        </p>
                        <p>
                            <strong className="text-white">Dunning.</strong> When a payment
                            fails, Stripe&apos;s Smart Retries will retry on a schedule and
                            email the customer about expired or declined cards. Subscribe
                            to invoice.payment_failed and invoice.payment_action_required
                            webhooks so your application reflects the failure state
                            internally (e.g., showing a banner, gating features, or
                            triggering account-management workflows). Aggressive dunning
                            recovers 60% to 80% of involuntary churn at zero engineering
                            cost.
                        </p>
                        <p>
                            For SaaS teams scoping deeper subscription work, our{" "}
                            <Link
                                href="/services/subscription-billing"
                                className="text-sky-400 hover:underline"
                            >
                                subscription billing service
                            </Link>{" "}
                            covers the full surface — usage-based metering, custom invoice
                            line items, tax handling — and pairs with our{" "}
                            <Link
                                href="/services/stripe-integration"
                                className="text-sky-400 hover:underline"
                            >
                                Stripe integration offering
                            </Link>{" "}
                            for the simpler one-time payment cases.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Multi-tenant patterns for SaaS billing
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            Multi-tenant SaaS has a specific Stripe shape that single-tenant
                            integrations skip. The decisions that drive your architecture.
                        </p>
                        <p>
                            <strong className="text-white">
                                One Stripe Customer per workspace, not per user.
                            </strong>{" "}
                            The Stripe Customer object should map to your tenant boundary
                            (workspace, organization, account), not to an individual user
                            in your application. Users come and go from a workspace; the
                            billing relationship lives at the workspace level. If you got
                            this wrong early, migrating is painful — get it right the first
                            time.
                        </p>
                        <p>
                            <strong className="text-white">
                                Subscriptions tied to feature flags.
                            </strong>{" "}
                            Don&apos;t hard-code plan tier logic into your application. Instead,
                            sync the subscription state from Stripe webhooks into a
                            features table for the workspace, and check feature flags from
                            your application code. When you launch a new plan or change a
                            limit, you change the mapping table — not your application
                            code. This pattern also makes A/B testing pricing trivially
                            easy.
                        </p>
                        <p>
                            <strong className="text-white">
                                Usage-based metering done right.
                            </strong>{" "}
                            Stripe supports usage records, but the recommended 2026
                            pattern is metered billing through Stripe Billing Meters, which
                            decouples the metering events from invoice generation. You
                            report usage events as they happen; Stripe aggregates and
                            invoices at the cycle boundary. If your pricing model is
                            anything more sophisticated than per-seat, learn the meter
                            primitive — it&apos;s the single largest billing-engineering
                            unlock of the last two years.
                        </p>
                        <p>
                            <strong className="text-white">
                                Multi-tenant Postgres patterns.
                            </strong>{" "}
                            Your billing system writes into the same Postgres database
                            your application uses, and the multi-tenancy patterns that
                            apply to the rest of your data apply here too. Pooled with
                            row-level security is the safest default. Bridge or silo
                            patterns work for larger customers but add operational
                            overhead. The choice should match the rest of your data layer,
                            not be debated separately for billing.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Testing: Stripe CLI, fixture customers, replay
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            Stripe testing infrastructure has gotten dramatically better.
                            Three tools you should be running locally.
                        </p>
                        <p>
                            <strong className="text-white">The Stripe CLI.</strong> Runs a
                            local listener that forwards real webhooks from Stripe test
                            mode to your localhost. This is how you test webhook handlers
                            during development without ngrok or other tunneling tools.
                            Install it on every engineer&apos;s machine; it&apos;s effectively
                            mandatory for serious development.
                        </p>
                        <p>
                            <strong className="text-white">Test mode fixtures.</strong>{" "}
                            Stripe test mode has specific test card numbers that produce
                            specific behaviors — 4242 for success, 4000 0000 0000 0002
                            for decline, 4000 0027 6000 3184 for 3DS challenge. Build a
                            fixtures library that uses these specific cards to cover your
                            critical flows, run those fixtures in CI before every deploy,
                            and never let a failing fixture ship to production.
                        </p>
                        <p>
                            <strong className="text-white">Webhook replay.</strong> The
                            Stripe Dashboard lets you replay any webhook event from history.
                            When debugging a production webhook bug, you can replay the
                            exact event into your staging environment and step through the
                            handler with a debugger. This is unreasonably useful for
                            debugging billing edge cases that only surface in production.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Production checklist: PCI scope, observability, refunds
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            Before you turn live mode on, walk through this checklist.
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>
                                <strong className="text-white">PCI scope.</strong> If you use
                                Embedded Checkout, the Payment Element, or Stripe.js
                                correctly, you&apos;re SAQ-A — the minimum PCI scope. If you
                                stored a raw card number on your server even briefly, you
                                expanded that scope dramatically. Verify with a quick audit
                                of your codebase that no raw PAN ever touches your servers.
                            </li>
                            <li>
                                <strong className="text-white">Webhook reliability.</strong>{" "}
                                Webhook endpoint hosted with an SLA-backed compute platform,
                                signature verification confirmed in tests, idempotency table
                                indexed and tested with a duplicate-event integration test,
                                429 backpressure handled gracefully.
                            </li>
                            <li>
                                <strong className="text-white">Observability.</strong> Every
                                webhook receipt logged with the event ID. Every Stripe API
                                call logged with the idempotency key (if used). Alerts on
                                webhook handler failures, on Stripe API error rates, and on
                                invoice.payment_failed counts that exceed your normal baseline.
                            </li>
                            <li>
                                <strong className="text-white">Refund pathways.</strong>{" "}
                                Refunds happen. Make sure your support team can issue them
                                from your admin without needing to log into the Stripe
                                Dashboard, your accounting reflects them correctly, and your
                                customers receive the right communication when they happen.
                            </li>
                            <li>
                                <strong className="text-white">Tax handling.</strong> Stripe
                                Tax is now mature enough that most US-only SaaS teams
                                should turn it on at launch rather than try to roll their
                                own. International tax handling (VAT, GST, etc.) is a
                                full separate decision — Stripe Tax, or a Merchant of
                                Record like Paddle or Lemon Squeezy, are the two main
                                paths.
                            </li>
                            <li>
                                <strong className="text-white">Customer portal launch.</strong>{" "}
                                Configure the portal in test mode, copy the configuration to
                                live mode, and verify every plan transition works end-to-end
                                with a fixture customer before you flip the switch.
                            </li>
                            <li>
                                <strong className="text-white">Disaster recovery.</strong>{" "}
                                Your billing state should be reconstructable from Stripe
                                events if your database disappears tomorrow. The
                                webhook_events table is the audit log; treat it as
                                durably as your customer data.
                            </li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">
                        Where to take this next
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-300 space-y-4 leading-relaxed text-base">
                        <p>
                            If you&apos;re scoping a Stripe build and want to talk through your
                            specific pricing model and tenant structure, our{" "}
                            <Link
                                href="/services/stripe-integration"
                                className="text-sky-400 hover:underline"
                            >
                                Stripe integration service
                            </Link>{" "}
                            page walks through the engagement structure, and we&apos;ve also
                            published a fixed-cost{" "}
                            <Link
                                href="/calculators/stripe-cost"
                                className="text-sky-400 hover:underline"
                            >
                                Stripe pricing calculator
                            </Link>{" "}
                            that estimates a build budget from your inputs. If your build
                            is broader than billing alone, our{" "}
                            <Link
                                href="/services/web-applications"
                                className="text-sky-400 hover:underline"
                            >
                                Next.js web applications page
                            </Link>{" "}
                            covers the full-stack scope, and the{" "}
                            <Link
                                href="/blog/build-vs-buy-software-2026"
                                className="text-sky-400 hover:underline"
                            >
                                build-vs-buy framework
                            </Link>{" "}
                            covers the strategic decision underneath.
                        </p>
                        <p>
                            For SaaS teams looking at the specific billing rebuild question,
                            we&apos;ve also covered{" "}
                            <Link
                                href="/blog/custom-crm-development-guide"
                                className="text-sky-400 hover:underline"
                            >
                                custom CRM development
                            </Link>{" "}
                            and our{" "}
                            <Link
                                href="/services/payments-invoicing-licensing"
                                className="text-sky-400 hover:underline"
                            >
                                payments, invoicing, and licensing service
                            </Link>{" "}
                            wraps the entire revenue surface for SaaS founders who want one
                            engineer responsible for all of it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                            Stripe done right, in weeks not months.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            From a single Checkout button to a full multi-tenant
                            subscription system — we ship Stripe integrations production-grade
                            from day one. Walk through your build with the founder.
                        </p>
                        <ConsultationCTA
                            label="Book a Stripe Scoping Call"
                            service="Stripe Integration"
                            source="blog-nextjs-stripe"
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <h2 className="text-2xl font-bold text-white mb-6">Keep reading</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            {
                                href: "/services/stripe-integration",
                                title: "Stripe Integration Service",
                                desc: "Service page with scope, deliverables, and engagement model.",
                            },
                            {
                                href: "/blog/build-vs-buy-software-2026",
                                title: "Build vs Buy Software",
                                desc: "Decision framework for the broader software question underneath billing.",
                            },
                            {
                                href: "/calculators/stripe-cost",
                                title: "Stripe Cost Calculator",
                                desc: "Estimate a Stripe integration budget from your specific scope.",
                            },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold text-sm">
                                        {s.title}
                                    </h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">
                                    {s.desc}
                                </p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>
                <AnimatedSection className="mt-16 mb-12">
                    <RelatedPosts
                        currentSlug="nextjs-stripe-integration-guide"
                        topics={["stripe","stack"]}
                        heading="More Stripe engineering reading"
                    />
                </AnimatedSection>

            </article>
        </main>
    );
}
