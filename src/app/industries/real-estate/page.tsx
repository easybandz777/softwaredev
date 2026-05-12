import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Home, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom Real Estate Software Development | QuantLab",
    description:
        "Custom real estate software — brokerage CRMs, agent sites, property portals, transaction tools, MLS/IDX integration, RESPA-aware workflows. Founder-led.",
    alternates: { canonical: "https://quantlabusa.dev/industries/real-estate" },
    openGraph: {
        title: "Custom Software for Real Estate — Brokerages, Agents & PropTech",
        description:
            "Brokerage CRMs, agent landing pages, property portals, transaction tooling, MLS/IDX integration, and RESPA-aware workflows.",
        url: "https://quantlabusa.dev/industries/real-estate",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Real Estate Software Development | QuantLab",
        description:
            "Brokerage CRMs, MLS/IDX integration, transaction tools, and RESPA-aware workflows.",
    },
};

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Real Estate Software Development",
    url: "https://quantlabusa.dev/industries/real-estate",
    description:
        "Brokerage CRMs, agent landing pages, property portals, transaction-management tools, MLS/IDX integration, and RESPA-aware workflows for brokerages, agents, and PropTech founders.",
    isPartOf: {
        "@type": "WebSite",
        url: "https://quantlabusa.dev",
        name: "QuantLab USA",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://quantlabusa.dev/industries" },
        { "@type": "ListItem", position: 3, name: "Real Estate", item: "https://quantlabusa.dev/industries/real-estate" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Real Estate Software Development",
    name: "Custom Real Estate Software Development",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for residential brokerages, individual agents, property management companies, and PropTech founders. Brokerage CRMs, agent sites, MLS and IDX integration, transaction management, and RESPA-aware workflows.",
    url: "https://quantlabusa.dev/industries/real-estate",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Why is real estate treated as a special case for software development?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Real estate combines three pressures most categories never face at once. The data infrastructure (MLS, IDX, RESO Data Dictionary, agent and brokerage compensation models) is fragmented across hundreds of regional MLS organizations, each with their own license terms, refresh windows, and display rules. The compliance perimeter — RESPA on referral fees and unearned fees, fair housing on every public-facing surface, state-level brokerage and licensing rules, TCPA on outbound contact, and the 2024 NAR settlement on buyer-broker compensation — touches almost every digital workflow. And the sales process is intensely personal, with the agent brand and the brokerage brand both needing to come through cleanly.",
            },
        },
        {
            "@type": "Question",
            name: "Can you integrate with MLS or IDX feeds?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, where the MLS license allows. We typically work with RESO Web API, RETS (where still operational), or vendor feeds like Spark, BridgeAPI, or Trestle. License terms vary widely; we work with the brokerage's MLS administrator on the data agreement before building the integration.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle the 2024 NAR settlement and buyer-broker compensation changes?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We build the buyer representation agreement workflow, structured compensation capture, and disclosure flow that the settlement requires. The post-settlement world means more transactions involve a documented buyer-broker fee separate from MLS-displayed compensation. We capture that data cleanly and surface it in the right places.",
            },
        },
        {
            "@type": "Question",
            name: "Can you integrate with our brokerage's transaction management system?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, where the platform exposes APIs. Skyslope, Dotloop, TransactionDesk, and similar platforms have varying API surfaces — we typically build the lead-to-listing or transaction-coordination layer on top of the existing platform rather than replacing it.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 real estate build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A focused tool — an agent landing page with conversion-optimized intake and TCPA-aware lead routing, a buyer or seller funnel with structured questionnaire and e-signature representation agreement, or a brokerage-branded recruiting site. 4 to 8 weeks.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle TCPA for outbound contact?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Consent capture at intake with explicit prior express written consent for marketing calls and texts, DNC list scrubbing, and time-of-day windows enforced at the dispatch layer. Every outbound contact gets logged with the consent state at the time of capture.",
            },
        },
        {
            "@type": "Question",
            name: "Do you build for residential brokerages, commercial, or PropTech founders?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "All three, with different scopes. Residential brokerages typically need agent sites, lead routing, and transaction support. Commercial real estate needs deal-room style tooling, complex valuation models, and tenant/landlord workflows. PropTech founders are building a new product for the industry — we cover the v1 architecture, the data model, and the integrations.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle fair housing on lead routing and matching?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Carefully. Lead routing, audience targeting, and content personalization cannot use protected characteristics or proxies that correlate with them. We document the matching logic, audit the inputs, and produce an explainability layer the brokerage's broker-of-record can review.",
            },
        },
    ],
};

export default function RealEstateIndustryPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
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
                        <li><Link href="/industries" className="hover:text-sky-400 transition-colors">Industries</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Real Estate</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-rose-500 to-fuchsia-500 mb-6">
                        <Home className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Real Estate — Brokerages, Agents & PropTech
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Brokerage CRMs, agent landing pages, property portals, transaction tools, MLS and IDX integration, and RESPA-aware workflows — built for residential brokerages, individual agents, property managers, and PropTech founders.
                    </p>
                    <ConsultationCTA label="Scope a Real Estate Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why real estate is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Real estate combines three pressures that almost no other category faces at once. The data infrastructure is fragmented in a way no other industry has to deal with. There are 500+ regional Multiple Listing Service organizations across the US, each with their own data license, refresh window, display rules, and consequence for non-compliance. The RESO Data Dictionary and Web API exist to standardize the format, but the legal and operational terms still vary per MLS. Building a product that touches listings requires real care.
                        </p>
                        <p>
                            The compliance perimeter is broad and changing. RESPA Section 8 prohibits unearned referral fees and shapes the entire affiliated-business landscape. Fair housing law (Title VIII of the Civil Rights Act and HUD&apos;s 2023 amendments) constrains digital marketing, lead routing, audience targeting, and any algorithmic matching that touches protected characteristics. State-level brokerage rules vary by jurisdiction. TCPA shapes outbound contact. And the 2024 NAR settlement on buyer-broker compensation has reshaped the buyer-representation workflow in ways that most existing platforms have not fully caught up with.
                        </p>
                        <p>
                            Third, the sales process is intensely personal. Real estate is sold by people. The agent brand and the brokerage brand both have to come through cleanly in the digital experience, or the lead converts to a stranger instead of an agent. The templates and Zillow-funnel sites fail on this exact axis — they generate volume that converts poorly.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for real estate operators</h2>
                    <ul className="space-y-3">
                        {[
                            "Agent landing pages — single-page, mobile-first, TCPA-aware intake",
                            "Brokerage marketing sites with agent profile pages and lead routing",
                            "Brokerage CRMs — pipeline, household, transaction lifecycle, follow-up automation",
                            "Buyer and seller funnels with structured intake and e-signature representation agreement",
                            "MLS/IDX integration — RESO Web API, Spark, BridgeAPI, Trestle, where the license allows",
                            "Property portals — listing search, saved search alerts, neighborhood content, agent-of-record routing",
                            "Transaction coordination tools — checklist, deadline calendar, document workflow, e-signature",
                            "Recruiting sites for agent and team recruitment",
                            "Property management portals — tenant applications, lease lifecycle, maintenance requests",
                            "PropTech v1 builds — custom data models, MLS-adjacent applications, and broker-facing SaaS",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common real estate projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Top-producer agent landing page", d: "Single-page Next.js site with hero, service overview, structured intake form, TCPA consent capture, and routing into the agent's preferred CRM. 3 to 4 weeks." },
                            { t: "Multi-agent brokerage site", d: "Brokerage brand with individual agent profile pages, service-area SEO, lead routing rules, and a brokerage-wide consultation form that respects agent territory and specialty." },
                            { t: "Buyer representation funnel", d: "Post-NAR-settlement workflow that captures buyer requirements, produces a buyer broker agreement, runs e-signature, and creates the transaction in the brokerage's TMS." },
                            { t: "Seller listing intake", d: "Listing-questionnaire flow with property data capture, photo upload, comp request, and listing-agreement generation." },
                            { t: "Brokerage CRM with MLS-adjacent data", d: "Pipeline, household management, transaction lifecycle, and follow-up automation. MLS listing matching where the license allows; saved-search alerts that fire when a new matching property hits the MLS." },
                            { t: "Transaction coordination tool", d: "Checklist for buyer or seller side, deadline calendar with state-specific timing, document workflow with e-signature, and a clean handoff into the brokerage's compliance review." },
                            { t: "Agent recruiting site", d: "Brokerage-branded recruiting funnel — production data ingest, prospective agent intake, interview scheduling, and an internal scoring sheet." },
                            { t: "Tenant application and lease management", d: "Property management workflow — listing display, online application, screening integration (TransUnion SmartMove or RentPrep), lease document workflow, and rent payment via Stripe ACH." },
                            { t: "Off-market deal sourcing", d: "Investor or commercial brokerage tool — public records ingest, owner contact enrichment, outreach pipeline, and deal status tracking." },
                            { t: "PropTech v1 build", d: "Founder building a new product for the industry — we cover the v1 architecture, data model, MLS or IDX integration, and the first version of the product surface." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Compliance and security considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">RESPA Section 8.</span> No unearned referral fees. Affiliated business relationships require disclosure. We build referral-tracking with clean separation between agent attribution (RESPA-compliant) and any kickback structure (which we will not build).
                        </p>
                        <p>
                            <span className="text-white font-semibold">Fair housing.</span> Title VIII, HUD&apos;s 2023 amendments, and state fair-housing laws apply to advertising, lead routing, audience targeting, and algorithmic matching. We document matching logic, audit inputs, and avoid proxies for protected characteristics in any recommendation surface.
                        </p>
                        <p>
                            <span className="text-white font-semibold">MLS license terms.</span> Every MLS has display rules, refresh windows, attribution requirements, and consequences for violation. We coordinate with the brokerage&apos;s MLS administrator on the data license and build the integration to those terms.
                        </p>
                        <p>
                            <span className="text-white font-semibold">2024 NAR settlement.</span> Buyer-broker compensation now requires a written agreement with the buyer prior to showings, and MLS display of buyer-broker compensation has changed. We build the buyer representation agreement workflow into the funnel and capture compensation data cleanly.
                        </p>
                        <p>
                            <span className="text-white font-semibold">TCPA.</span> Prior express written consent for marketing calls and texts, DNC list scrubbing, time-of-day windows, revocation handling, and logged consent state at time of capture. We do not build automated outbound texting without these controls.
                        </p>
                        <p>
                            <span className="text-white font-semibold">State brokerage rules.</span> State real estate commission rules vary widely on advertising, disclosure, supervision of unlicensed assistants, and the use of team names. We build flexible disclosure and supervision capture so the brokerage&apos;s compliance officer can tune the surface per state.
                        </p>
                        <p>
                            <span className="text-white font-semibold">GLBA Safeguards Rule.</span> Brokerages collecting financial information during the lead-to-transaction flow are non-bank financial institutions under the 2023 FTC amendments. Our builds align with the rule by default.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for real estate</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 15 or 16 with React 19 and TypeScript for the web layer — the App Router&apos;s mix of server-rendered listing pages, dynamic search, and route-level caching is genuinely excellent for property portals. Postgres on Neon or Supabase as the system of record. Prisma or Drizzle as the ORM. For MLS or IDX integration, RESO Web API where the MLS supports it, with a Trestle, Spark, or BridgeAPI adapter behind a normalized internal schema so swapping MLS targets does not require a rewrite.
                        </p>
                        <p>
                            DocuSign or Dotloop for the e-signature workflow. Stripe for any payment flow (earnest money deposits via Plaid bank transfer, ACH rent collection for property management). Resend or Postmark for transactional email. Auth via Clerk or Auth0 with MFA on the agent and brokerage admin surfaces. Sentry for error reporting with PII redaction. Logging via Better Stack or Datadog. Hosting on Vercel for the web tier with edge caching on listing-detail pages.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused agent or brokerage tool", body: "Agent landing page with TCPA-aware intake, a buyer or seller funnel with e-signature, or a brokerage recruiting site. 4 to 8 weeks." },
                            { tier: "$60K", title: "Brokerage CRM or property portal", body: "Multi-agent brokerage site, CRM with pipeline and follow-up automation, MLS/IDX integration where the license allows, and a transaction coordination tool. 10 to 16 weeks." },
                            { tier: "$150K+", title: "PropTech v1 or multi-brokerage platform", body: "Custom product build — PropTech v1 architecture, multi-brokerage tenancy, complex MLS aggregation, fair-housing-aware matching, and SOC 2-mapped controls. 18 to 32 weeks." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-rose-400 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery is paid separately at $2,500 and creditable against any full engagement. <Link href="/contact" className="text-rose-400 hover:underline">Book a scope call</Link> to walk through your brokerage, your MLS, and your transaction stack.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Three patterns recur. First, lead routing gets built without TCPA consent capture. A brokerage launches a beautiful landing page, starts capturing leads, and discovers that the automated SMS responder is firing without documented consent. Class-action plaintiffs find this kind of thing fast. The fix is to capture explicit prior express written consent at intake and store the consent state on the lead record.
                        </p>
                        <p>
                            Second, MLS integrations get built without checking the license terms. The data is technically accessible via Spark or RESO Web API, but the brokerage&apos;s MLS license restricts redistribution or requires attribution that the build did not include. Some MLSes have issued cease-and-desist letters within weeks. Read the data license before writing the integration. Better yet, loop the brokerage&apos;s MLS administrator in at the kickoff call.
                        </p>
                        <p>
                            Third, the 2024 NAR settlement workflow gets bolted on instead of designed in. Buyer representation agreements end up as a paper form sent over email. The brokerage&apos;s compliance officer cannot prove a written agreement existed before the showing. Build the buyer-representation flow into the funnel itself — captured at first qualified-buyer interaction, signed before the showing, archived with the transaction.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            { q: "Why is real estate treated as a special case for software development?", a: "MLS data is fragmented across 500+ regional organizations with their own licenses, the compliance perimeter (RESPA, fair housing, TCPA, state brokerage rules, 2024 NAR settlement) touches every workflow, and the sales process is intensely personal — the agent and brokerage brand both have to come through." },
                            { q: "Can you integrate with MLS or IDX feeds?", a: "Yes, where the MLS license allows. RESO Web API, RETS where still operational, or vendor feeds (Spark, BridgeAPI, Trestle). License terms vary; we work with the brokerage's MLS administrator on the data agreement first." },
                            { q: "How do you handle the 2024 NAR settlement and buyer-broker compensation changes?", a: "We build the buyer representation agreement workflow, structured compensation capture, and disclosure flow that the settlement requires. Compensation data captured cleanly and surfaced where it needs to be." },
                            { q: "Can you integrate with our brokerage's transaction management system?", a: "Yes, where the platform exposes APIs. Skyslope, Dotloop, TransactionDesk — we typically build on top of the platform rather than replacing it." },
                            { q: "What does a $25,000 real estate build look like?", a: "A focused tool — agent landing page with TCPA-aware intake, buyer or seller funnel with e-signature, or a brokerage recruiting site. 4 to 8 weeks." },
                            { q: "How do you handle TCPA for outbound contact?", a: "Consent capture at intake with explicit prior express written consent for marketing calls and texts, DNC list scrubbing, time-of-day windows, and logged consent state at the time of capture." },
                            { q: "Do you build for residential brokerages, commercial, or PropTech founders?", a: "All three. Residential needs agent sites and lead routing. Commercial needs deal-room tooling and valuation models. PropTech founders get the v1 architecture, data model, and integrations." },
                            { q: "How do you handle fair housing on lead routing and matching?", a: "We avoid protected characteristics and proxies that correlate with them. Matching logic is documented, inputs are audited, and an explainability layer is produced for the broker-of-record's review." },
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
                            { slug: "custom-crm-development", title: "Custom CRM Development", desc: "Brokerage CRMs with pipeline, household, transaction lifecycle, and follow-up automation." },
                            { slug: "web-applications", title: "Web Applications", desc: "Agent landing pages, brokerage marketing sites, and property portals." },
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Earnest money handling, deposit collection, and ACH rent flows for property management." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "GLBA-aware and cyber-insurance-ready pentest reports for brokerages handling financial data." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Transaction coordination tools, recruiting platforms, and internal brokerage operations." },
                            { slug: "subscription-billing", title: "Subscription Billing", desc: "PropTech SaaS billing with Stripe Billing for agent and brokerage tools." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-rose-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-rose-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Build a digital experience that sells the way you sell.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-rose-400 hover:underline">book a 20-minute scope call</Link>. Mutual NDA before discovery. Founder-led from the first call to the production deploy.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
