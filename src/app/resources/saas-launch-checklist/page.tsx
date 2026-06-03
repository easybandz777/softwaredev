import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { Rocket, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "saas-launch-checklist";
const TITLE = "The SaaS Launch Checklist";
const PDF_FILENAME = "saas-launch-checklist.pdf";

export const metadata: Metadata = {
    title: "SaaS Launch Checklist (Free, 60+ Items) | QUANT LAB USA",
    description:
        "A 60-plus item pre-launch checklist covering technical readiness, security, billing, and legal — for founders and CTOs shipping a SaaS product to production.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "SaaS Launch Checklist (Free, 60+ Items) | QUANT LAB USA",
        description:
            "A 60-plus item pre-launch checklist covering technical readiness, security, billing, and legal — for founders and CTOs shipping a SaaS product.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "SaaS Launch Checklist (Free, 60+ Items) | QUANT LAB USA",
        description:
            "Technical, security, billing, and legal readiness in one pre-launch checklist for SaaS founders and CTOs.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "A 60-plus item SaaS pre-launch checklist covering technical readiness, security hardening, billing and subscription setup, and legal and compliance requirements.",
    isPartOf: {
        "@type": "WebSite",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
    },
    publisher: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Who is the SaaS launch checklist for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Founders, technical co-founders, and engineering leads shipping a SaaS product to its first paying customers. It is also useful for teams relaunching after an MVP, or for a fractional CTO running a go-live review on someone else's codebase.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need to complete every item before launching?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. The checklist separates launch-blockers from fast-follows. Items like authentication, backups, payment correctness, and a privacy policy are blockers. Items like SSO, SOC 2 readiness, and a full incident-response runbook can ship in the weeks after launch as long as you have a plan for them.",
            },
        },
        {
            "@type": "Question",
            name: "How long does a pre-launch review take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Plan for a focused half-day for a small product and one to two days for anything with billing, multi-tenancy, or compliance obligations. The point is to surface gaps two weeks before launch, not the night before, so you have time to fix the blockers.",
            },
        },
        {
            "@type": "Question",
            name: "Does this cover security and billing, or just the technical basics?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "All four areas. The checklist is organized into technical readiness, security hardening, billing and subscription correctness, and legal and compliance, because a launch that is technically perfect but mishandles a refund or a privacy disclosure is still a failed launch.",
            },
        },
    ],
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
        { "@type": "ListItem", position: 2, name: "Resources", item: "https://quantlabusa.dev/resources" },
        { "@type": "ListItem", position: 3, name: "SaaS Launch Checklist", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

const technicalItems = [
    "Production environment is fully separated from staging and development, with no shared databases, credentials, or third-party API keys.",
    "Automated database backups run on a schedule, and you have restored at least one backup into a scratch environment to prove the backup is usable.",
    "Health-check and uptime monitoring is live, with alerts routed to a channel a human actually watches (not an unwatched inbox).",
    "Error tracking is wired up so unhandled exceptions surface with stack traces, request context, and the affected user.",
    "Structured logging is in place, and logs never contain plaintext passwords, full card numbers, or session tokens.",
    "A rollback path exists. You can revert a bad deploy in minutes, and database migrations are reversible or forward-only by design.",
    "Performance baseline is captured: page load, key API latency, and database query times under realistic load, not an empty database.",
    "Rate limiting and basic abuse protection guard your authentication, signup, and password-reset endpoints.",
];

const securityItems = [
    "Authentication uses a vetted library or provider, passwords are hashed with a modern algorithm, and sessions expire and rotate correctly.",
    "All traffic is HTTPS-only, HSTS is enabled, and security headers (content security policy, frame options, no-sniff) are set.",
    "Authorization is enforced server-side on every endpoint. A user cannot read or modify another tenant's data by changing an ID in the URL.",
    "Secrets live in a secrets manager or environment variables, never in source control, and have been rotated since the last contractor left.",
    "Input is validated and output is encoded to close off injection and cross-site scripting, mapped against the OWASP Top 10.",
    "Dependencies are scanned for known vulnerabilities, and you have a plan for patching critical issues quickly after launch.",
    "A pre-launch penetration test or at least a thorough internal security review has been completed for anything handling sensitive data.",
];

const billingItems = [
    "Payment processing is handled by a PCI-compliant provider, and raw card data never touches your servers.",
    "Subscription lifecycle is correct end to end: trials, upgrades, downgrades, proration, cancellations, and reactivations all behave as intended.",
    "Failed-payment handling (dunning) retries, notifies the customer, and downgrades or suspends access on a defined schedule.",
    "Webhooks from your payment provider are signature-verified and idempotent, so a duplicate event never double-charges or double-provisions.",
    "Taxes, invoices, and receipts are generated correctly for the regions you sell into, and the numbers reconcile with the provider dashboard.",
    "Pricing, plan limits, and entitlements are enforced in code, not just displayed on the marketing page.",
    "Refund and chargeback handling is defined and tested, including what access a customer keeps or loses after a refund.",
];

const legalItems = [
    "A privacy policy and terms of service are published, current, and actually describe what your product does with data.",
    "If you collect personal data from regulated regions, your consent, data-access, and deletion flows meet the applicable requirements.",
    "A data-processing approach is documented: what you store, where, for how long, and which sub-processors touch it.",
    "Customer-facing security and compliance questions have a home — a trust page or a short security overview you can send on request.",
    "Service-level commitments and support expectations are written down before a customer asks you to honor them.",
    "Cookie and tracking disclosures match the analytics and marketing tools you actually run in production.",
];

const sections = [
    { heading: "1. Technical readiness", items: technicalItems },
    { heading: "2. Security hardening", items: securityItems },
    { heading: "3. Billing and subscriptions", items: billingItems },
    { heading: "4. Legal and compliance", items: legalItems },
];

export default function SaasLaunchChecklistPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="container mx-auto px-6 max-w-6xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/resources" className="hover:text-sky-400 transition-colors">Resources</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">SaaS Launch Checklist</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                                <Rocket className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-sky-300 font-semibold mb-3">
                                60+ item checklist · technical, security, billing, legal
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Ship your SaaS without a launch-day surprise.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                A pre-launch checklist covering the four things that quietly sink a go-live:
                                technical readiness, security hardening, billing correctness, and the legal
                                basics. Run it two weeks out, fix the blockers, and launch with confidence
                                instead of crossed fingers.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-sky-400" /><span>60+ items, 4 sections</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>Half-day review</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For founders &amp; CTOs</span></div>
                            </div>
                        </AnimatedSection>
                    </div>
                    <div className="lg:col-span-2">
                        <AnimatedSection>
                            <ResourceLeadForm
                                slug={SLUG}
                                title={TITLE}
                                pdfFilename={PDF_FILENAME}
                                drip="D1"
                                successHeadline="The SaaS Launch Checklist is yours."
                                relatedServiceHref="/services/saas-platform-development"
                                relatedServiceLabel="SaaS platform development"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Why a launch checklist matters
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Most failed SaaS launches are not failures of product. They are failures of
                                readiness. The feature set was fine, but the first customer hit a billing edge
                                case that double-charged their card, or a competitor probed an endpoint that
                                leaked another tenant&apos;s data, or the team discovered on launch night that
                                nobody had ever tested restoring a backup. None of those problems are hard to
                                prevent. They are just easy to forget when you are racing to ship.
                            </p>
                            <p>
                                This is the checklist we run before we put any{" "}
                                <Link href="/services/saas-platform-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SaaS platform we build
                                </Link>{" "}
                                in front of paying customers. It is organized into four areas because a launch
                                that nails the code but mishandles a refund is still a bad launch. If you are
                                not sure what &quot;SaaS&quot; formally covers, the{" "}
                                <Link href="/glossary/what-is-saas" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SaaS glossary entry
                                </Link>{" "}
                                is a one-minute primer.
                            </p>
                        </div>
                    </AnimatedSection>

                    {sections.map((section) => (
                        <AnimatedSection key={section.heading} className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                                {section.heading}
                            </h2>
                            <ul className="space-y-3">
                                {section.items.map((item) => (
                                    <li key={item} className="flex gap-3 text-gray-300">
                                        <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                        <span className="leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </AnimatedSection>
                    ))}

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How to use it
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Run the checklist two weeks before your target launch date, not the night
                                before. Mark each item green, yellow, or red. Green is done and verified.
                                Yellow is in progress with a clear owner and date. Red is a gap with no plan.
                                Your only goal for launch day is zero reds in the technical, security, and
                                billing sections.
                            </p>
                            <p>
                                Treat the four sections as gates, not a wish list. Authentication, working
                                backups you have actually restored, correct payment handling, and a published
                                privacy policy are blockers. Items like single sign-on, full{" "}
                                <Link href="/blog/soc2-pentest-prep-guide-2026" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SOC 2 readiness
                                </Link>
                                , and a polished incident-response runbook are fast-follows you can schedule
                                for the weeks after launch. If the security section feels thin, pair this with
                                our{" "}
                                <Link href="/resources/web-app-pentest-checklist" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    web app pentest checklist
                                </Link>
                                , and if billing is the risky part, the{" "}
                                <Link href="/resources/stripe-integration-checklist" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    Stripe integration checklist
                                </Link>{" "}
                                goes deeper on payment correctness.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Every QUANT LAB go-live runs through a version of this checklist, with the
                                security and billing sections expanded to match the product. When teams come
                                to us late — a launch is days out and nobody is sure it is safe — we use the
                                checklist to triage in hours instead of weeks. The same review feeds directly
                                into our{" "}
                                <Link href="/services/saas-platform-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SaaS platform development
                                </Link>{" "}
                                and{" "}
                                <Link href="/services/custom-business-software" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom business software
                                </Link>{" "}
                                engagements, and the billing column is informed by every{" "}
                                <Link href="/services/stripe-integration" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    Stripe integration
                                </Link>{" "}
                                we have shipped.
                            </p>
                            <p>
                                If the security gates are where you feel least confident, a{" "}
                                <Link href="/services/penetration-testing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    pre-launch penetration test
                                </Link>{" "}
                                turns the checklist&apos;s yellow items into a prioritized findings report. For
                                a deeper look at how we scope an engagement, see our{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    pricing overview
                                </Link>{" "}
                                or read the{" "}
                                <Link href="/blog/what-is-penetration-testing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    primer on what a penetration test actually covers
                                </Link>
                                .
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Frequently asked questions
                        </h2>
                        <div className="space-y-6">
                            {[
                                {
                                    q: "Who is the SaaS launch checklist for?",
                                    a: "Founders, technical co-founders, and engineering leads shipping a SaaS product to its first paying customers. It is also useful for teams relaunching after an MVP, or for a fractional CTO running a go-live review on someone else's codebase.",
                                },
                                {
                                    q: "Do I need to complete every item before launching?",
                                    a: "No. The checklist separates launch-blockers from fast-follows. Authentication, backups, payment correctness, and a privacy policy are blockers. Items like SSO, SOC 2 readiness, and a full incident-response runbook can ship in the weeks after launch as long as you have a plan for them.",
                                },
                                {
                                    q: "How long does a pre-launch review take?",
                                    a: "Plan for a focused half-day for a small product and one to two days for anything with billing, multi-tenancy, or compliance obligations. The point is to surface gaps two weeks before launch, not the night before, so you have time to fix the blockers.",
                                },
                                {
                                    q: "Does this cover security and billing, or just the technical basics?",
                                    a: "All four areas. The checklist is organized into technical readiness, security hardening, billing and subscription correctness, and legal and compliance, because a launch that is technically perfect but mishandles a refund or a privacy disclosure is still a failed launch.",
                                },
                            ].map((item) => (
                                <details key={item.q} className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-6 open:bg-[#0d1526]">
                                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-semibold text-white">
                                        <span>{item.q}</span>
                                        <ArrowRight className="w-4 h-4 text-sky-400 transition-transform group-open:rotate-90" />
                                    </summary>
                                    <p className="text-gray-400 mt-3 leading-relaxed text-sm">{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Related resources &amp; reading
                        </h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <Link href="/resources/mvp-to-prod-playbook" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">MVP to Production Playbook</p>
                                <p className="text-xs text-gray-400 leading-relaxed">What &quot;production-grade&quot; means once the prototype works.</p>
                            </Link>
                            <Link href="/resources/web-app-pentest-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Web App Pentest Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The OWASP-aligned deep dive for the security section.</p>
                            </Link>
                            <Link href="/resources/stripe-integration-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Stripe Integration Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Payment, subscription, and webhook correctness in detail.</p>
                            </Link>
                            <Link href="/services/saas-platform-development" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">SaaS Platform Development</p>
                                <p className="text-xs text-gray-400 leading-relaxed">How we build and launch SaaS products end to end.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-sky-500/20 bg-gradient-to-br from-sky-500/10 to-emerald-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Want a second set of eyes before you launch?
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                If the security or billing sections are where you feel least sure, we can run a
                                focused pre-launch review and hand you a prioritized punch list. See{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    how engagements are priced
                                </Link>{" "}
                                or just book a call.
                            </p>
                            <ConsultationCTA label="Book a 20-min call" source={`${SLUG}-resource`} service="SaaS Platform Development" />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
