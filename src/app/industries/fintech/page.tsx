import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Landmark, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom Software for Fintech | QuantLab USA",
    description:
        "Custom fintech development — PCI-DSS, SOC 2, SOX, KYC/AML aware. Trading dashboards, Stripe Connect marketplaces, advisor CRMs, MITRE ATT&CK pentests. Founder-led.",
    alternates: { canonical: "https://quantlabusa.dev/industries/fintech" },
    openGraph: {
        title: "Custom Software for Fintech — Built Compliant, Built Secure, Built to Ship",
        description:
            "Fintech development company building custom CRMs, marketplaces, and trading systems with compliance and pentesting baked in.",
        url: "https://quantlabusa.dev/industries/fintech",
        type: "article",
    },
    twitter: {
        card: "summary_large_image",
        title: "Custom Software for Fintech | QuantLab USA",
        description:
            "PCI-DSS, SOC 2, SOX, and KYC/AML-aware fintech builds. Founder-led, no offshore IP risk.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fintech Software Development",
    name: "Custom Software Development for Fintech",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Custom software development for fintech — advisory CRMs, Stripe Connect marketplaces, trading dashboards, and algorithmic trading systems. Compliance-aware builds with PCI-DSS, SOC 2, SOX, and KYC/AML controls. Pentesting tied to financial-services threat models via MITRE ATT&CK.",
    url: "https://quantlabusa.dev/industries/fintech",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Do you handle PCI-DSS scope for fintech builds?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Default architecture keeps you in SAQ A — Stripe Elements or Checkout tokenize cards, we never store PAN data on your servers. For higher-scope cases (Connect marketplaces, custom card capture), we scope the architecture explicitly with your QSA in the loop.",
            },
        },
        {
            "@type": "Question",
            name: "Can you build to SOC 2 audit readiness?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We build with SOC 2 Common Criteria in mind — encryption at rest and in transit, role-based access, immutable audit logging, change management, and incident response hooks. We coordinate with your SOC 2 auditor on evidence collection.",
            },
        },
        {
            "@type": "Question",
            name: "How do you handle KYC and AML for marketplaces?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Stripe Connect handles identity verification and beneficial-ownership checks for marketplaces. For deeper KYC/AML — sanctions screening, transaction monitoring, SAR workflows — we integrate dedicated vendors (Persona, Alloy, ComplyAdvantage) and persist the audit trail in your database.",
            },
        },
        {
            "@type": "Question",
            name: "Is offshore development an IP risk for fintech?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It can be. Fintech IP — trading logic, scoring models, customer data flows — is the kind of asset you do not want sitting on a foreign contractor's laptop. We are US-based, founder-led, and signing mutual NDAs is the first step of every engagement.",
            },
        },
    ],
};

export default function FintechIndustryPage() {
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
                    <ol className="flex items-center gap-2 text-xs text-gray-500">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/industries" className="hover:text-sky-400 transition-colors">Industries</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Fintech</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-400 mb-6">
                        <Landmark className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software for Fintech — Built Compliant, Built Secure, Built to Ship
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Advisory CRMs, Stripe Connect marketplaces, trading dashboards, and execution systems — built by a US-based, founder-led team that takes PCI-DSS, SOC 2, SOX, and KYC/AML controls seriously from day one.
                    </p>
                    <ConsultationCTA label="Scope a Fintech Build" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Fintech is a regulated environment. Build like it.</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            PCI-DSS scope, SOC 2 Type II, SOX 404 for public-company affiliates, KYC and AML obligations on every onboarded customer, GLBA on customer data, state-level money transmission rules depending on the model — fintech is one of the most regulated software environments outside of healthcare. Off-the-shelf SaaS will not pass your auditor. A code base built by a contractor who has never read a SAQ will not either.
                        </p>
                        <p>
                            We build with those frameworks in mind from the first architecture diagram. Card data is tokenized at the edge — Stripe Elements or Checkout — so your environment stays in SAQ A. PII gets encrypted at rest with envelope keys and in transit with TLS 1.3. Role-based access is wired through every admin surface, and the audit log is immutable by design so your SOC 2 auditor has something real to look at.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build for fintech operators</h2>
                    <ul className="space-y-3">
                        {[
                            "Custom CRMs for RIAs, advisory firms, and broker-dealers — pipeline, household management, suitability tagging, document workflows",
                            "Stripe Connect marketplaces with platform-fee accounting, payout reconciliation, and 1099 reporting",
                            "Trading dashboards — live positions, P&L, risk attribution, with order entry and audit logging",
                            "Algorithmic trading systems — broker integrations (IBKR, Alpaca, Tradier, TopstepX), risk controls, monitoring",
                            "Lead-gen and prospecting platforms for niche-vertical sales (the J5 Sales OS architecture)",
                            "Customer onboarding flows with KYC vendor integration and beneficial-ownership capture",
                            "Internal back-office tools — reconciliation, settlement, compliance ticketing",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why founder-led matters for fintech</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            The thing that gets fintech founders in trouble is not usually a bug. It is the laptop in another country with your trading logic on it, or the contractor who copied your customer database before the engagement ended. IP exfiltration is the quiet existential risk in fintech engineering — and it is precisely why we are US-based, founder-led, and engagement-first on every project.
                        </p>
                        <p>
                            William Beltz writes or reviews every line of code that touches your customers, your money flows, or your trading logic. NDAs are mutual and signed before discovery. Source code lives in your GitHub organization, not ours. The handoff is documented for either ongoing collaboration or in-house ownership — your call.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MITRE ATT&amp;CK pentests tied to financial-services threat models</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Auditors and cyber-insurance carriers increasingly want pentest reports mapped to the techniques your industry's actual adversaries use — FIN7 for card-data theft, APT38 and Lazarus for crypto and SWIFT, ransomware affiliates for everyone. We run <Link href="/services/mitre-attack-assessment" className="text-emerald-400 hover:underline">MITRE ATT&amp;CK-aligned assessments</Link> that simulate those groups' documented TTPs against your environment, then deliver an ATT&amp;CK heatmap of which techniques succeed, which get detected, and which get blocked.
                        </p>
                        <p>
                            Standard <Link href="/services/penetration-testing" className="text-emerald-400 hover:underline">penetration testing</Link> covers the rest — internal network, Active Directory, external perimeter, web app, and API surface. Every finding maps to ATT&amp;CK technique IDs so your SOC or MSSP knows what to alert on. See the <Link href="/work/active-directory-pentest" className="text-emerald-400 hover:underline">Active Directory pentest case study</Link> for the reference engagement structure.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference builds</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            <Link href="/work/j5-sales-os" className="text-emerald-400 hover:underline">J5 Sales OS</Link> is the architecture pattern we use for prospecting and pipeline platforms in financial services — Google Places discovery, concurrent email enrichment, OpenAI qualification, and a full CRM pipeline in one tool. The same patterns power custom advisory CRMs and marketplace operator dashboards.
                        </p>
                        <p>
                            <Link href="/work/protectwithbri" className="text-emerald-400 hover:underline">ProtectWithBri</Link> is our reference for personal-advisor digital presence — a personal-insurance practice that needed a high-trust, high-conversion site that captured qualified consultation requests. Same architecture works for RIA practice sites and fee-only advisor pages.
                        </p>
                        <p>
                            For execution-side fintech, see the <Link href="/work/multi-strategy-trading-system" className="text-emerald-400 hover:underline">multi-strategy trading system deployment</Link> — Python execution engine, exchange WebSocket feeds, hard risk controls, and a Node dashboard, with sub-12ms order latency and zero unplanned downtime since launch.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Do you handle PCI-DSS scope for fintech builds?",
                                a: "Yes. Default architecture keeps you in SAQ A — Stripe Elements or Checkout tokenize cards, we never store PAN data on your servers. For higher-scope cases (Connect marketplaces, custom card capture), we scope the architecture explicitly with your QSA in the loop.",
                            },
                            {
                                q: "Can you build to SOC 2 audit readiness?",
                                a: "Yes. We build with SOC 2 Common Criteria in mind — encryption at rest and in transit, role-based access, immutable audit logging, change management, and incident response hooks. We coordinate with your SOC 2 auditor on evidence collection.",
                            },
                            {
                                q: "How do you handle KYC and AML for marketplaces?",
                                a: "Stripe Connect handles identity verification and beneficial-ownership checks for marketplaces. For deeper KYC/AML — sanctions screening, transaction monitoring, SAR workflows — we integrate dedicated vendors (Persona, Alloy, ComplyAdvantage) and persist the audit trail in your database.",
                            },
                            {
                                q: "Is offshore development an IP risk for fintech?",
                                a: "It can be. Fintech IP — trading logic, scoring models, customer data flows — is the kind of asset you do not want sitting on a foreign contractor's laptop. We are US-based, founder-led, and signing mutual NDAs is the first step of every engagement.",
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
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "Manual, evidence-backed pentests audit-ready for SOC 2, PCI, and cyber-insurance." },
                            { slug: "custom-crm-development", title: "Custom CRM Development", desc: "Advisory firm CRMs with household management, suitability, and document workflow." },
                            { slug: "stripe-integration", title: "Custom Stripe Integration", desc: "Subscriptions, Connect marketplaces, and QuickBooks reconciliation." },
                            { slug: "algorithmic-trading-systems", title: "Algorithmic Trading Systems", desc: "Custom strategy execution with broker integrations and risk controls." },
                            { slug: "mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Threat-group-aligned pentests for finance — FIN7, APT38, ransomware affiliates." },
                            { slug: "active-directory-pentest", title: "Active Directory Pentest", desc: "Internal AD assessments — Kerberoasting, ADCS abuse, lateral movement." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-emerald-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ship fintech that holds up in audit.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at (770) 652-1282 or book a 20-minute scope call. Mutual NDA signed before discovery. Founder-led from quote to handoff.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
