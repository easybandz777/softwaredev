import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ResourceLeadForm } from "../ResourceLeadForm";
import { Rocket, Check, ArrowRight, FileText, Clock, Target } from "lucide-react";

const SLUG = "mvp-to-prod-playbook";
const TITLE = "MVP to Production: The Founder's Tech Playbook";
const PDF_FILENAME = "mvp-to-prod-playbook.pdf";

export const metadata: Metadata = {
    title: "MVP to Production: The Founder's Tech Playbook (Free PDF)",
    description:
        "A 35-page playbook on hosting, auth, payments, observability, and analytics decisions for SaaS founders shipping past product-market fit. Free download.",
    alternates: { canonical: `https://quantlabusa.dev/resources/${SLUG}` },
    openGraph: {
        title: "MVP to Production: The Founder's Tech Playbook (Free PDF)",
        description:
            "A 35-page playbook on hosting, auth, payments, observability, and analytics decisions for SaaS founders shipping past PMF.",
        url: `https://quantlabusa.dev/resources/${SLUG}`,
        type: "article",
        siteName: "QUANT LAB USA",
    },
    twitter: {
        card: "summary_large_image",
        title: "MVP to Production: The Founder's Tech Playbook (Free PDF)",
        description:
            "35-page playbook for post-PMF SaaS founders. Auth, payments, observability, analytics, 90-day roadmap.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: TITLE,
    url: `https://quantlabusa.dev/resources/${SLUG}`,
    description:
        "Downloadable 35-page playbook covering 12 production-readiness pillars and a 90-day roadmap for SaaS founders crossing the gap from MVP to production-grade product.",
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
            name: "Who is the MVP to Production Playbook for?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Founders, CTOs, and technical co-founders of pre-seed to Series A SaaS companies with paying customers and an MVP held together with duct tape. Typical team sizes are 2 to 25 people, $0 to $3M ARR. It is most useful when your first serious enterprise customer is starting to ask security and reliability questions the codebase cannot answer.",
            },
        },
        {
            "@type": "Question",
            name: "What does production-grade actually mean?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Production-grade means your codebase can survive its first SOC 2 audit, its first SAML SSO request, its first regional outage, and its first 10x usage spike without losing customer trust. The playbook breaks that down into 12 pillars: auth and SSO, authorization, audit logs, observability, background jobs, rate limiting, multi-tenancy, backup and restore, secrets management, deployment and rollback, incident response, and compliance.",
            },
        },
        {
            "@type": "Question",
            name: "Why 90 days?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Most post-MVP founders cannot afford to halt feature development for six months. Ninety days is the smallest window that closes the riskiest production gaps without grinding the product roadmap to a stop. The playbook splits the 90 days into three 30-day phases — foundations, compliance and observability, scale and hardening — each producing a shippable improvement at the end.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need to do all 12 pillars before I can sell to enterprise?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. The playbook explicitly stack-ranks the 12 pillars by enterprise-procurement risk. Authentication and SSO, audit logs, and backups are non-negotiable. Multi-tenancy isolation, observability, and compliance posture come next. Rate limiting and feature flags are useful but rarely deal-breakers in the first enterprise sale.",
            },
        },
        {
            "@type": "Question",
            name: "What if my MVP is in Python or Ruby or Go instead of TypeScript?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The playbook is language-agnostic. The 12 pillars are framework-independent — the right answers are the same whether you are on Next.js, Django, Rails, or a Go monolith. We do call out specific tooling recommendations (WorkOS for auth, Sentry plus OpenTelemetry for observability, etc.) where they are language-agnostic. Bespoke implementation details are out of scope for the playbook.",
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
        { "@type": "ListItem", position: 3, name: "MVP to Production Playbook", item: `https://quantlabusa.dev/resources/${SLUG}` },
    ],
};

export default function MvpToProdPlaybookPage() {
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
                        <li className="text-gray-300">MVP to Production Playbook</li>
                    </ol>
                </nav>

                <div className="grid lg:grid-cols-5 gap-10 mb-20">
                    <div className="lg:col-span-3">
                        <AnimatedSection>
                            <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-400 mb-6">
                                <Rocket className="w-6 h-6 text-white" />
                            </div>
                            <p className="text-xs uppercase tracking-widest text-violet-300 font-semibold mb-3">
                                35-page playbook · 12 pillars · 90-day roadmap
                            </p>
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-5">
                                Your MVP works. Now what? The 90-day playbook for getting to production-grade SaaS.
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed mb-6">
                                A week-by-week roadmap for SaaS founders staring down their first enterprise
                                customer, SOC 2 audit, or serious investor due diligence — covering
                                authentication, audit logs, multi-tenancy, observability, payments, and the
                                12 production-readiness pillars that turn a working prototype into a system
                                a real business can run on.
                            </p>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-8">
                                <div className="flex items-center gap-2"><FileText className="w-4 h-4 text-violet-400" /><span>35 pages, 12 pillars</span></div>
                                <div className="flex items-center gap-2"><Clock className="w-4 h-4 text-emerald-400" /><span>2-hour first read</span></div>
                                <div className="flex items-center gap-2"><Target className="w-4 h-4 text-amber-400" /><span>For SaaS founders &amp; CTOs</span></div>
                            </div>
                        </AnimatedSection>
                    </div>
                    <div className="lg:col-span-2">
                        <AnimatedSection>
                            <ResourceLeadForm
                                slug={SLUG}
                                title={TITLE}
                                pdfFilename={PDF_FILENAME}
                                drip="D6"
                                successHeadline="The MVP to Production Playbook is yours."
                                relatedServiceHref="/services/saas-platform-development"
                                relatedServiceLabel="SaaS platform development"
                            />
                        </AnimatedSection>
                    </div>
                </div>

                <div className="max-w-4xl">
                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            The gap between MVP and production
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                Most SaaS products hit the same wall about 18 months in. The MVP works. Real
                                customers pay real money. Word of mouth is starting to move. And then the
                                first serious enterprise prospect lands in the pipeline and asks four
                                questions in a row: do you support SAML SSO, is your data SOC 2 audited,
                                what is your data-retention policy, and can we see your incident-response
                                runbook? At that moment the founder realizes the codebase was built to ship
                                features, not to answer those questions. The product is technically working
                                but operationally not yet a business. This playbook is the bridge.
                            </p>
                            <p>
                                It is the same map we use when our team ships a{" "}
                                <Link href="/services/saas-platform-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SaaS platform build
                                </Link>{" "}
                                or when we are brought in to upgrade an existing post-MVP product to
                                production-grade. The 12 pillars are what we audit on day one. The 90-day
                                roadmap is what we execute against. The red-flag checklist at the end is
                                the gut check we give to founders who are not sure how exposed their
                                codebase actually is.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Inside the 35-page PDF
                        </h2>
                        <ul className="space-y-3">
                            {[
                                "Section 1 — The MVP-to-production gap. What production-grade actually means, why the first enterprise customer exposes the codebase, and the procurement questions that decide whether your sale closes or stalls.",
                                "Section 2 — The 12-pillar production readiness map. Auth and SSO, authorization (RBAC and ABAC), audit log, observability, background jobs, rate limiting, multi-tenancy, data backup and restore, secrets management, deployment and rollback, incident response, and compliance.",
                                "Sections 3 to 10 — Pillar-by-pillar deep dives. Auth (build vs WorkOS/Clerk/Auth0, SAML and OIDC, SCIM provisioning). Authorization (RBAC patterns, tenant isolation, row-level vs schema-per-tenant). Audit log (what goes in, retention, immutability). Observability (logs, metrics, traces, SLOs that customers care about).",
                                "Section 11 — Background jobs, queues, and retry logic. Why your synchronous Stripe call is a ticking time bomb. Idempotency keys, dead-letter queues, retry backoff strategies.",
                                "Section 12 — Rate limiting and abuse prevention. Per-user, per-tenant, per-endpoint. Token buckets vs leaky buckets. The first three abuse patterns you will see.",
                                "Section 13 — Deployment, rollback, and feature flags. Blue-green vs canary, feature flag patterns, hotfix processes, the 'never deploy on Friday' rule and its exceptions.",
                                "Section 14 — Secrets and data protection. KMS, env vars, encryption at rest and in transit, the 'where do you store API keys' answer.",
                                "Section 15 — The 90-day plan. A week-by-week roadmap split into three phases: foundations (weeks 1 to 4), compliance and observability (5 to 8), scale and hardening (9 to 12).",
                                "Section 16 — The red flags that tell you you are not production-ready. If 'our database has no backups,' 'we do not know who has admin access,' or 'we email customers from a personal Gmail' sound familiar — fix them this week.",
                            ].map((item) => (
                                <li key={item} className="flex gap-3 text-gray-300">
                                    <Check className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                                    <span className="leading-relaxed">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            Who this is for
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                The playbook is built for four founder profiles. First, the indie hacker
                                whose side project unexpectedly turned into a business and now has to grow
                                up. Second, the technical co-founder of a pre-seed-to-seed SaaS whose first
                                enterprise customer just appeared in the pipeline. Third, the early-stage
                                CTO of a Series A company that grew faster than the codebase. Fourth, the
                                solo founder who is also the entire engineering team and needs to know
                                which gaps actually matter before raising the next round.
                            </p>
                            <p>
                                If you are still pre-PMF — no paying customers, looking for your first ten
                                — this playbook is the wrong tool. Spend that time on customer development
                                and product, not on SOC 2 readiness. If you are post-Series B with a real
                                engineering team and a security function, the playbook is too basic. We
                                tend to engage with that segment through{" "}
                                <Link href="/services/web-app-pentest" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    web app penetration testing
                                </Link>{" "}
                                and architecture audits instead. The sweet spot is two-to-twenty-five-person
                                teams, $0-to-$3M ARR, with a working product and at least one enterprise
                                prospect.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            What you will learn
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                You will learn which of the 12 production-readiness pillars are
                                non-negotiable for your specific situation and which can be deferred. You
                                will learn the build-vs-buy framework for auth (WorkOS vs Auth0 vs Clerk
                                vs roll-your-own), the audit-log retention rules that satisfy SOC 2 Type
                                I and Type II, the tenant isolation patterns that scale past 50 customers,
                                and the observability stack that costs less than $200/month at your stage.
                            </p>
                            <p>
                                You will learn the standard idempotency pattern that prevents a Stripe
                                webhook double-charge — the same pattern covered in more depth in the{" "}
                                <Link href="/resources/stripe-integration-checklist" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    Stripe Integration Checklist
                                </Link>
                                . You will learn the dead-letter-queue rule that turns a transient failure
                                into a recoverable one. You will learn the deployment cadence that lets a
                                two-person team ship 30 times per week without taking the product down.
                            </p>
                            <p>
                                On the security side, you will learn the secrets-management migration that
                                moves API keys out of a .env file and into a real secret store — and which
                                three controls a SOC 2 auditor will actually check on Day One. You will
                                learn the incident-response runbook structure that survives its first
                                customer-impacting outage. You will leave the playbook with a calendared,
                                finite project rather than a vague existential dread.
                            </p>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection className="mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                            How this connects to our work
                        </h2>
                        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                            <p>
                                The 12-pillar map and the 90-day roadmap are the same framework we use on{" "}
                                <Link href="/services/saas-platform-development" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    SaaS platform development engagements
                                </Link>
                                . When we are brought in to take a post-MVP product to production-grade, we
                                start with a Section-2 audit against the 12 pillars and produce a phased
                                build plan against the 90-day structure. If your roadmap also includes a
                                custom Stripe integration, our{" "}
                                <Link href="/services/stripe-integration" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    Stripe integration service
                                </Link>{" "}
                                handles the payments pillar end-to-end. If your roadmap includes a
                                pre-launch security review,{" "}
                                <Link href="/services/web-app-pentest" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    a web application pentest
                                </Link>{" "}
                                is the right finisher.
                            </p>
                            <p>
                                For the broader operations layer that sits next to the product —
                                billing reconciliation, customer support tooling, internal dashboards —
                                our{" "}
                                <Link href="/services/custom-business-software" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    custom business software service
                                </Link>{" "}
                                covers it. To see how engagements are priced, visit{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    the pricing page
                                </Link>
                                . For more about the team, see{" "}
                                <Link href="/about" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    about
                                </Link>{" "}
                                or browse{" "}
                                <Link href="/work" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    recent client work
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
                                { q: "Who is the MVP to Production Playbook for?", a: "Founders, CTOs, and technical co-founders of pre-seed-to-Series A SaaS companies with paying customers and an MVP held together with duct tape. Typical team sizes 2 to 25 people, $0 to $3M ARR." },
                                { q: "What does production-grade actually mean?", a: "Your codebase can survive its first SOC 2 audit, first SAML SSO request, first regional outage, and first 10x usage spike without losing customer trust. The playbook breaks that into 12 specific pillars." },
                                { q: "Why 90 days?", a: "Most post-MVP founders cannot afford to halt feature development for six months. Ninety days is the smallest window that closes the riskiest production gaps without grinding the product roadmap to a stop." },
                                { q: "Do I need to do all 12 pillars before I can sell to enterprise?", a: "No. The playbook stack-ranks the 12 pillars by enterprise-procurement risk. Auth/SSO, audit logs, and backups are non-negotiable. Multi-tenancy isolation, observability, and compliance come next." },
                                { q: "What if my MVP is in Python or Ruby or Go?", a: "The playbook is language-agnostic. The 12 pillars are framework-independent. Specific tooling recommendations are called out where they are language-agnostic." },
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
                            <Link href="/resources/stripe-integration-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Stripe Integration Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The payments pillar in depth.</p>
                            </Link>
                            <Link href="/resources/web-app-pentest-checklist" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Web App Pentest Checklist</p>
                                <p className="text-xs text-gray-400 leading-relaxed">The security review pillar in depth.</p>
                            </Link>
                            <Link href="/services/saas-platform-development" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">SaaS Platform Development</p>
                                <p className="text-xs text-gray-400 leading-relaxed">When you want us to ship the production-grade build with you.</p>
                            </Link>
                            <Link href="/services/web-applications" className="block rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-colors">
                                <p className="text-sm font-semibold text-white mb-1">Web Application Development</p>
                                <p className="text-xs text-gray-400 leading-relaxed">Next.js + TypeScript builds, founder-led.</p>
                            </Link>
                        </div>
                    </AnimatedSection>

                    <AnimatedSection>
                        <div className="rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-fuchsia-500/5 p-8 md:p-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                Two or more red flags ring true? Book a call.
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">
                                If two or more of the Section-16 red flags describe your codebase right
                                now, the next step is a 20-minute scoping call. We will tell you which
                                week of the 90-day plan to start with and whether your team can run the
                                playbook in-house or whether a co-pilot model makes more sense. See{" "}
                                <Link href="/pricing" className="text-sky-400 hover:text-sky-300 underline-offset-2 hover:underline">
                                    pricing
                                </Link>{" "}
                                first if you want to anchor the budget.
                            </p>
                            <ConsultationCTA label="Book a 20-min founder call" source={`${SLUG}-resource`} service="SaaS Platform Development" />
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </main>
    );
}
