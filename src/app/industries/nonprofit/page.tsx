import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { HeartHandshake, Check, ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const metadata = pageMetadata({
    title: "Nonprofit Software Development & Security | QUANT LAB USA",
    description:
        "Custom nonprofit software — donor CRM, grants management, volunteer tools, and online giving on lean budgets. PCI-aware builds plus MITRE ATT&CK pentests. Founder-led, US-based.",
    slug: "industries/nonprofit",
    image: "/og-services.png",
    type: "article",
});

const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Custom Software for Nonprofits",
    url: "https://quantlabusa.dev/industries/nonprofit",
    description:
        "Nonprofit-specific software development — donor CRM, grants management, volunteer coordination, and online giving built for lean budgets. Founder-led, US-based, mutual NDA from day one.",
    isPartOf: {
        "@type": "WebSite",
        url: "https://quantlabusa.dev",
        name: "QUANT LAB USA",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Industries", item: "https://quantlabusa.dev/industries" },
        { "@type": "ListItem", position: 3, name: "Nonprofit", item: "https://quantlabusa.dev/industries/nonprofit" },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Nonprofit Software Development",
    name: "Custom Software Development for Nonprofits",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for nonprofits — donor CRM, grants management, volunteer coordination, and online giving built for lean budgets. PCI-aware payment handling with pentesting tied to nonprofit threat models via MITRE ATT&CK.",
    url: "https://quantlabusa.dev/industries/nonprofit",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Can a small nonprofit afford a custom build?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Often, yes — and frequently it is cheaper over three years than stacking per-user fees on Salesforce Nonprofit Cloud, Blackbaud, and a separate giving platform. We scope to the budget, ship one high-value workflow first, and avoid the feature pile-on that makes custom software expensive. We are honest when off-the-shelf is the right call.",
            },
        },
        {
            "@type": "Question",
            name: "Can you migrate us off Blackbaud, DonorPerfect, or spreadsheets?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We migrate donor records, giving history, soft credits, and constituent relationships into a clean custom CRM, preserving the history your development team relies on for renewals and major-gift cultivation. We map the old fields carefully so nothing is lost in translation.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle online giving and PCI scope?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "We route donations through Stripe or a nonprofit-friendly gateway so card data is tokenized at the edge and your environment stays in the lightest PCI scope. Recurring gifts, one-time donations, designations, tribute gifts, and automated receipts are all handled, with the donation data flowing straight into the donor CRM.",
            },
        },
        {
            "@type": "Question",
            name: "Do you build grants-management tooling?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. For grant-seeking nonprofits we build pipelines that track opportunities, deadlines, requirements, and reporting obligations. For grant-making foundations we build application intake, review workflows, scoring, award tracking, and grantee reporting. Both keep the audit trail funders and auditors expect.",
            },
        },
        {
            "@type": "Question",
            name: "Is nonprofit software a real security target?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes — and the 2020 Blackbaud breach that exposed donor data across thousands of nonprofits proved it. Nonprofits hold donor PII and payment data but often run lean on security. We harden the giving and donor-data paths, map pentests to the techniques attackers actually use, and right-size the controls to a nonprofit budget.",
            },
        },
        {
            "@type": "Question",
            name: "Why is nonprofit software a special case?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Budgets are lean and overhead ratios are scrutinized, so the software has to deliver clear value without bloat. The data model is unusual — soft credits, household and relationship structures, designations, and restricted funds do not fit a generic sales CRM. And board and funder reporting demands an audit trail most off-the-shelf tools handle awkwardly. A generic build misses all three.",
            },
        },
        {
            "@type": "Question",
            name: "What does a $25,000 nonprofit build look like?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Around $25,000 covers a focused MVP — one high-value workflow shipped well. Example: a donor CRM with online giving wired through Stripe, recurring-gift handling, automated tax receipts, and a clean dashboard, with your existing donor history migrated in. Scoped tight, it ships in 4 to 8 weeks.",
            },
        },
    ],
};

export default function NonprofitIndustryPage() {
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
                        <li className="text-gray-300">Nonprofit</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-400 mb-6">
                        <HeartHandshake className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Nonprofits — Donor CRM, Grants, and Giving on a Lean Budget
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Donor CRMs, grants management, volunteer coordination, and online giving — built by a US-based, founder-led team that respects a nonprofit budget, scopes to the mission, and is honest when off-the-shelf is the right call.
                    </p>
                    <ConsultationCTA label="Scope a Nonprofit Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Every dollar spent on software is a dollar not spent on the mission.</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Nonprofits live under a constraint commercial companies do not: every dollar of overhead is scrutinized by boards, funders, and watchdogs. Yet many organizations quietly bleed budget into a stack of per-user SaaS subscriptions — a donor CRM, a separate giving platform, an email tool, a volunteer app, a grants tracker — that do not talk to each other and cost more every year as the contact list grows. The software meant to advance the mission ends up competing with it for resources.
                        </p>
                        <p>
                            We build software that does the opposite — consolidates the stack, eliminates the per-user fees that scale against you, and puts donor data, giving, and reporting in one place you own. We scope to the budget honestly, ship the highest-value workflow first, and tell you plainly when a low-cost off-the-shelf tool is the smarter call. The goal is leverage for the mission, not a vanity platform.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why nonprofit software is a special case</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The data model is genuinely different from a sales CRM. Nonprofits track soft credits — the spouse who influenced a gift, the foundation behind a donor-advised fund — alongside household and relationship structures, gift designations, restricted versus unrestricted funds, pledges, and matching gifts. A generic CRM built for a sales pipeline mangles all of this, and development teams end up fighting the tool instead of cultivating donors. The system of record has to model fundraising the way fundraisers actually think.
                        </p>
                        <p>
                            Reporting is the other pressure. Boards want fund-balance and campaign-progress views. Funders want grant-specific outcome reports tied to restricted dollars. The IRS and state charity regulators want clean records behind the Form 990 and acknowledgment letters that satisfy substantiation rules. Off-the-shelf tools handle this awkwardly, and the lean back office cannot afford to reconcile five systems by hand at year-end. We build the audit trail and reporting in from the start.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for nonprofits</h2>
                    <ul className="space-y-3">
                        {[
                            "Donor CRMs — constituent records, soft credits, households, designations, pledges, and major-gift pipelines",
                            "Online giving — recurring and one-time donations, designations, tribute gifts, and automated tax receipts via Stripe",
                            "Grants management — opportunity pipelines and deadlines for seekers; intake, review, and award tracking for funders",
                            "Volunteer coordination — sign-ups, shift scheduling, hour tracking, background-check status, and communications",
                            "Campaign and event tools — peer-to-peer fundraising, event registration, ticketing, and auction management",
                            "Membership and program management — enrollment, attendance, outcomes tracking, and case management",
                            "Board and funder reporting — fund balances, campaign progress, grant outcomes, and 990-ready exports",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Common nonprofit projects we scope</h2>
                    <ul className="space-y-3">
                        {[
                            { t: "Donor CRM with online giving", d: "A constituent system with soft credits, households, and designations, wired to Stripe for recurring and one-time gifts, automated tax receipts, and your existing donor history migrated in clean." },
                            { t: "Migration off Blackbaud or DonorPerfect", d: "Move donor records, giving history, soft credits, and relationships into a custom CRM you own, preserving the cultivation history your development team relies on — without the annual license that scales against your contact count." },
                            { t: "Grants pipeline for a seeking nonprofit", d: "Track opportunities, deadlines, requirements, and reporting obligations so nothing slips, with reminders and a clear view of what is in play, submitted, and awarded." },
                            { t: "Grants-management portal for a funder", d: "Application intake, eligibility screening, reviewer scoring, award tracking, payment scheduling, and grantee reporting with the audit trail your board and auditors expect." },
                            { t: "Volunteer management system", d: "Self-service sign-ups, shift scheduling, hour tracking, background-check status, and segmented communications so coordinators stop managing volunteers in a spreadsheet." },
                            { t: "Peer-to-peer and event fundraising", d: "Personal fundraising pages, team leaderboards, event registration, ticketing, and a live thermometer, all flowing into the donor CRM." },
                            { t: "Program and case management", d: "Client intake, service tracking, outcomes measurement, and reporting for a program-delivery nonprofit, with privacy controls for sensitive client data." },
                            { t: "Board and impact reporting dashboard", d: "Fund balances, campaign progress, restricted-fund tracking, and grant-outcome reporting in one view, with exports that make the 990 and the annual report painless." },
                        ].map((item) => (
                            <li key={item.t} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                                <span><span className="text-white font-semibold">{item.t}.</span> {item.d}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Security and compliance considerations</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <span className="text-white font-semibold">Donor data and the Blackbaud lesson.</span> The 2020 Blackbaud ransomware breach exposed donor records across thousands of nonprofits and proved the sector is a real target. Donor PII and giving history are sensitive and valuable. We encrypt PII at rest and in transit, enforce least-privilege access, and keep an audit trail so an incident can be reconstructed.
                        </p>
                        <p>
                            <span className="text-white font-semibold">PCI-DSS for online giving.</span> We tokenize card data with Stripe or a nonprofit-friendly gateway so your environment stays in the lightest PCI scope. Raw card numbers never touch your servers, which keeps both your risk and your compliance burden low.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Tax-substantiation and acknowledgment.</span> The IRS has specific rules for gift acknowledgments and quid-pro-quo disclosures. We build receipts and acknowledgment letters that capture the required elements automatically so your finance team is not retrofitting compliance at year-end.
                        </p>
                        <p>
                            <span className="text-white font-semibold">Right-sized security on a lean budget.</span> Nonprofits cannot afford an enterprise security program, but they cannot afford a breach either. We focus the budget where the risk concentrates — the giving path, donor data, and privileged access — and require MFA on administrative accounts as a baseline.
                        </p>
                        <p>
                            <span className="text-white font-semibold">State charitable-solicitation and privacy rules.</span> Fundraising registration and donor-privacy expectations vary by state. We do not give legal advice, but we build the data controls and opt-out handling your counsel and your donor-bill-of-rights commitments require.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack we recommend for nonprofits</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Next.js 16 on the App Router with React and TypeScript end-to-end. Postgres for the system of record — usually Neon or Supabase, both of which keep hosting costs low for a lean organization. Prisma or Drizzle as the type-safe ORM. Stripe for tokenized giving so PCI scope stays light and recurring gifts just work. Resend for transactional and acknowledgment email with a verified domain.
                        </p>
                        <p>
                            We deliberately favor a stack that is cheap to run and easy to hand off, because a nonprofit should not be locked into expensive infrastructure or a vendor it cannot leave. Background workers (Inngest or a lightweight queue) handle recurring-gift processing and report generation. Sentry plus a low-cost log aggregator for observability, with donor-PII redaction in the logger. The whole thing deploys to Vercel and a managed Postgres so the monthly bill stays small and predictable.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing transparency</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { tier: "$25K", title: "Focused MVP", body: "A single high-value workflow shipped clean — a donor CRM with Stripe giving, recurring gifts, automated receipts, and your donor history migrated in. 4 to 8 weeks, scoped to the budget." },
                            { tier: "$60K", title: "Production platform", body: "A real nonprofit system — donor CRM plus grants or volunteer management, online giving, board reporting, and the integrations that retire your per-user SaaS stack. 10 to 16 weeks." },
                            { tier: "$150K+", title: "Multi-program platform", body: "A unified platform across fundraising, grants, programs, and case management for a larger organization, with role-based access and funder-grade reporting. 16 to 28 weeks with phased delivery." },
                        ].map((band) => (
                            <div key={band.tier} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <div className="text-teal-400 font-mono text-sm mb-2">{band.tier}</div>
                                <h3 className="text-white font-semibold mb-2">{band.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{band.body}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        Discovery is paid separately at $2,500 and is creditable against any full engagement. See the <Link href="/contact" className="text-teal-400 hover:underline">contact page</Link> for the full scoping flow, or the <Link href="/pricing" className="text-teal-400 hover:underline">pricing page</Link> for engagement models.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pitfalls we have seen</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            First, forcing a sales CRM to do fundraising. Soft credits, households, designations, and restricted funds do not fit a pipeline tool, and the workarounds quietly corrupt the data that drives renewals and major-gift work. Model fundraising properly from the start or live with a database the development director cannot trust.
                        </p>
                        <p>
                            Second, letting the SaaS stack sprawl. A separate tool for CRM, giving, email, events, and volunteers feels reasonable one subscription at a time, until the contact list grows, the per-user fees compound, and nothing reconciles. Consolidating onto a system you own often beats the stack on three-year cost and on data integrity.
                        </p>
                        <p>
                            Third, treating security as something only big organizations need. The Blackbaud breach hit nonprofits of every size, and donor trust does not survive a leaked giving history. The fix is not an enterprise program — it is tokenized payments, encrypted donor data, MFA on admin accounts, and an audit trail, sized to a nonprofit budget.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why founder-led matters for nonprofits</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A lean nonprofit cannot absorb a failed software project or a vendor that disappears mid-build. You need someone who scopes honestly, will not pad the budget with features the mission does not need, and is reachable when something breaks during a year-end giving push. We are US-based and founder-led, and the person who designs your donor system is the person who answers the phone in December.
                        </p>
                        <p>
                            William Beltz writes or reviews every line that touches donor data, giving, and reporting. NDAs are mutual and signed before discovery. Source code lives in your GitHub organization, not ours — so the organization is never locked into a vendor it cannot leave. The handoff is documented for either ongoing collaboration or in-house ownership.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MITRE ATT&amp;CK pentests tied to nonprofit threat models</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Nonprofits hold donor PII and payment data but often run lean on defense, which makes them attractive to ransomware and data-theft crews — as the Blackbaud breach showed. We run <Link href="/services/penetration-testing" className="text-teal-400 hover:underline">penetration tests</Link> mapped to the MITRE ATT&amp;CK techniques those attackers actually use, then deliver a heatmap of which techniques succeed, which get detected, and which get blocked — right-sized to a nonprofit budget.
                        </p>
                        <p>
                            For the donor portal, giving forms, and grantee or volunteer surfaces that carry sensitive data, <Link href="/services/web-app-pentest" className="text-teal-400 hover:underline">web application penetration testing</Link> covers authentication, the payment boundary, and access control. Every finding maps to ATT&amp;CK technique IDs so your team — or your outsourced IT — knows what to fix first.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Can a small nonprofit afford a custom build?",
                                a: "Often, yes — and frequently it is cheaper over three years than stacking per-user fees on Salesforce Nonprofit Cloud, Blackbaud, and a separate giving platform. We scope to the budget, ship one high-value workflow first, and are honest when off-the-shelf is the right call.",
                            },
                            {
                                q: "Can you migrate us off Blackbaud, DonorPerfect, or spreadsheets?",
                                a: "Yes. We migrate donor records, giving history, soft credits, and constituent relationships into a clean custom CRM, preserving the history your development team relies on for renewals and major-gift cultivation, and mapping the old fields carefully.",
                            },
                            {
                                q: "How do you handle online giving and PCI scope?",
                                a: "We route donations through Stripe or a nonprofit-friendly gateway so card data is tokenized at the edge and your environment stays in the lightest PCI scope. Recurring gifts, designations, tribute gifts, and automated receipts all flow straight into the donor CRM.",
                            },
                            {
                                q: "Do you build grants-management tooling?",
                                a: "Yes. For grant-seekers we build pipelines that track opportunities, deadlines, and reporting obligations. For grant-makers we build application intake, review workflows, scoring, award tracking, and grantee reporting, both with the audit trail funders expect.",
                            },
                            {
                                q: "Is nonprofit software a real security target?",
                                a: "Yes — the 2020 Blackbaud breach that exposed donor data across thousands of nonprofits proved it. We harden the giving and donor-data paths, map pentests to the techniques attackers actually use, and right-size the controls to a nonprofit budget.",
                            },
                            {
                                q: "Why is nonprofit software a special case?",
                                a: "Budgets are lean and overhead is scrutinized, the data model is unusual (soft credits, households, designations, restricted funds do not fit a sales CRM), and board and funder reporting demands an audit trail most off-the-shelf tools handle awkwardly.",
                            },
                            {
                                q: "What does a $25,000 nonprofit build look like?",
                                a: "A focused MVP — a donor CRM with online giving wired through Stripe, recurring-gift handling, automated tax receipts, and a clean dashboard, with your existing donor history migrated in. Scoped tight, it ships in 4 to 8 weeks.",
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
                            { slug: "custom-crm-development", title: "Custom CRM Development", desc: "Donor CRMs that model soft credits, households, designations, and restricted funds." },
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Recurring and one-time giving with automated receipts and light PCI scope." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Grants, volunteer, and program tooling that retires your sprawling SaaS stack." },
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "MITRE ATT&CK-aligned testing right-sized to a nonprofit budget." },
                            { slug: "web-app-pentest", title: "Web App Pentest", desc: "Donor portals and giving forms tested at the payment and access boundary." },
                            { slug: "api-development", title: "API Development", desc: "Integrations that connect giving, accounting, and email without per-user fees." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-teal-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <RelatedPosts
                        topics={["crm", "build-vs-buy", "stripe"]}
                        heading="Nonprofit engineering & build reading"
                        pinned={["custom-crm-development-guide", "build-vs-buy-software-2026", "nextjs-stripe-integration-guide"]}
                    />
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Put more of every dollar toward the mission.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or <Link href="/contact" className="text-teal-400 hover:underline">book a 20-minute scope call</Link>. Mutual NDA signed before discovery. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
