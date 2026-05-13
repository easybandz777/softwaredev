import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ArrowRight, Check, DollarSign } from "lucide-react";

export const metadata: Metadata = {
    title: "What Does a Penetration Test Cost in 2026? Real Pricing Data",
    description:
        "Real 2026 pentest pricing ranges for web, network, AD, wireless, and red team. The 8 variables that move the price, and how to scope without overpaying.",
    alternates: { canonical: "https://quantlabusa.dev/blog/penetration-test-cost-2026" },
    openGraph: {
        title: "What Does a Penetration Test Cost in 2026? Real Pricing Data",
        description:
            "The honest 2026 ranges for every pentest type — and the 8 variables that move the quote.",
        url: "https://quantlabusa.dev/blog/penetration-test-cost-2026",
        type: "article",
        publishedTime: "2026-05-12",
        authors: ["William Beltz"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "What Does a Penetration Test Cost in 2026? Real Pricing Data",
    description: "Real 2026 pentest pricing ranges, the variables that move the price, and how to scope without overpaying.",
    image: "https://quantlabusa.dev/og-image.png",
    datePublished: "2026-05-12",
    dateModified: "2026-05-12",
    author: { "@type": "Person", name: "William Beltz", url: "https://quantlabusa.dev/about" },
    publisher: {
        "@type": "Organization",
        "@id": "https://quantlabusa.dev/#organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        logo: { "@type": "ImageObject", url: "https://quantlabusa.dev/logo-transparent.png" },
    },
    mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://quantlabusa.dev/blog/penetration-test-cost-2026",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://quantlabusa.dev/blog" },
        {
            "@type": "ListItem",
            position: 3,
            name: "Penetration Test Cost 2026",
            item: "https://quantlabusa.dev/blog/penetration-test-cost-2026",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How much does a penetration test cost in 2026?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A web application penetration test costs $4,000 to $40,000 in 2026, depending on application complexity, number of user roles, and whether SOC 2 or PCI DSS attestation is required. Most SMB-tier web apps land at $10,000 to $18,000 for a grey-box manual test plus a one-page executive report and 30-day retest.",
            },
        },
        {
            "@type": "Question",
            name: "What is the average cost of a penetration test in 2026?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "There is no single average because scope is everything. Realistic 2026 ranges: external network $7K to $25K, internal network $12K to $50K, single web app $10K to $40K, Active Directory $15K to $45K, wireless $6K to $20K, objective-based red team $40K to $200K. Sub-$5K quotes are almost always vulnerability scans.",
            },
        },
        {
            "@type": "Question",
            name: "Why do pentest quotes vary 5x for the same scope?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Three reasons: methodology depth (scanner vs human-driven), tester experience (junior vs senior), and reporting quality (template vs custom ATT&CK-mapped). The cheapest quote often is not the worst — it might just be a different deliverable. Read the sample report before judging the price.",
            },
        },
        {
            "@type": "Question",
            name: "How can I lower the cost without lowering the value?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Reduce scope intelligently: test critical apps and the production AD domain, skip pre-prod and dev environments unless they have unique attack surface. Provide accurate asset inventories up front. Allow grey-box testing instead of full black-box. Accept a remote-only engagement if you do not need physical or wireless components. Combined, these can cut 30 to 50% off a quote.",
            },
        },
        {
            "@type": "Question",
            name: "How often should I get a pentest?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Annually at minimum for any compliance program. After every major release that touches authentication, payment, or sensitive data. After every significant infrastructure change. SOC 2, HIPAA, and PCI all expect annual at minimum.",
            },
        },
        {
            "@type": "Question",
            name: "Is a penetration test required for SOC 2?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "SOC 2 does not explicitly require a penetration test, but every reputable auditor will ask for one as evidence under CC4.1 and CC7.1. In practice, annual pentests are mandatory for SOC 2 Type II reports. Plan on $15K to $30K for a typical Series A SaaS scope.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between a vulnerability scan and a penetration test?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A vulnerability scan is automated and costs $500 to $5,000. It identifies known CVEs but cannot chain findings or exploit business-logic flaws. A penetration test is human-driven, costs $8,000 to $40,000, and validates exploitability by actually compromising the target. Compliance frameworks like SOC 2 and PCI DSS require pentests, not scans.",
            },
        },
        {
            "@type": "Question",
            name: "How long does a penetration test take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A typical web application pentest takes 1 to 3 weeks: 1 week of testing, 1 week of report writing, and 1 week reserved for retest after fixes. Larger environments (multi-app SaaS plus API plus internal AD) run 4 to 8 weeks. Red team engagements run 4 to 12 weeks.",
            },
        },
    ],
};

export default function PentestCost2026Page() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/blog" className="hover:text-sky-400 transition-colors">Blog</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Penetration test cost 2026</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">BOFU Pricing Guide · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        What Does a Penetration Test Actually Cost in 2026? The Honest Pricing Guide
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        Real 2026 pentest pricing ranges by engagement type, the 8 variables that move the quote, why two quotes for "the same scope" come back 5x apart, and exactly how to scope to your budget without losing the engagement value.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        By <Link href="/about" className="text-sky-400 hover:underline">William Beltz</Link>, founder of QUANT LAB USA INC · Published May 12, 2026
                    </p>
                    <ConsultationCTA label="Get a Real Pentest Quote" service="Penetration Testing" source="blog-pentest-cost" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">How much does a penetration test cost in 2026?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>A web application penetration test costs $4,000 to $40,000 in 2026, depending on application complexity, number of user roles, and whether SOC 2 or PCI DSS attestation is required. Most SMB-tier web apps land at $10,000 to $18,000 for a grey-box manual test plus a one-page executive report and 30-day retest. External network pentests start at $7,000, internal network engagements run $12,000 to $50,000, and objective-based red teams run $40,000 to $200,000+.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Pentest pricing is opaque on purpose. Vendors do not publish rates because every engagement is genuinely different, but the secrecy also lets sketchy operators charge twice what real operators charge, and lets unrealistic budgets buy nothing more than a Nessus report with a logo on it.
                        </p>
                        <p>
                            I run <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">a pentest practice</Link>. I have seen the quote ranges from competitors during multi-vendor RFPs. This guide is the realistic 2026 landscape. Use it to spot the quotes that do not make sense in either direction.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Realistic 2026 pentest pricing by engagement type</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Engagement type</th>
                                    <th className="px-4 py-3 border-b border-white/10">Typical 2026 range</th>
                                    <th className="px-4 py-3 border-b border-white/10">Timeline</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">External network pentest</td><td className="px-4 py-3">$7,000 – $25,000</td><td className="px-4 py-3">1 to 2 weeks</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Internal network pentest</td><td className="px-4 py-3">$12,000 – $50,000</td><td className="px-4 py-3">1 to 3 weeks</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Active Directory pentest</td><td className="px-4 py-3">$15,000 – $45,000</td><td className="px-4 py-3">1 to 2 weeks</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Single web application</td><td className="px-4 py-3">$10,000 – $40,000</td><td className="px-4 py-3">1 to 3 weeks</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Mobile application (iOS or Android)</td><td className="px-4 py-3">$12,000 – $35,000</td><td className="px-4 py-3">1 to 2 weeks</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Wireless / on-site (single building)</td><td className="px-4 py-3">$6,000 – $20,000</td><td className="px-4 py-3">3 to 5 days on-site</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Social engineering / phishing</td><td className="px-4 py-3">$8,000 – $25,000</td><td className="px-4 py-3">2 to 4 weeks</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">API / backend pentest</td><td className="px-4 py-3">$10,000 – $35,000</td><td className="px-4 py-3">1 to 2 weeks</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Cloud config review (AWS / Azure / GCP)</td><td className="px-4 py-3">$8,000 – $30,000</td><td className="px-4 py-3">1 to 2 weeks</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Objective-based red team</td><td className="px-4 py-3">$40,000 – $200,000+</td><td className="px-4 py-3">4 to 12 weeks</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        Combined engagements (web app plus API plus AD, for example) usually come with a 10 to 20% bundle discount because the reporting overhead consolidates. Annual programs with quarterly retest cycles run 15 to 25% off list.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The 8 variables that move the quote</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <ol className="list-decimal pl-6 space-y-3">
                            <li><strong>Asset count.</strong> Number of IPs, domains, subdomains, web apps, mobile apps, and AD users. Linear scaling above the first dozen.</li>
                            <li><strong>Methodology depth.</strong> Scanner-only is cheap and worthless for compliance. Human-driven testing with manual auth bypass is what you are paying for.</li>
                            <li><strong>Tester seniority.</strong> A senior pentester bills $200 to $400 an hour loaded. A junior bills $80 to $150. A team blend usually lands at $180 to $250.</li>
                            <li><strong>Reporting depth.</strong> Templated report vs custom ATT&amp;CK-mapped narrative is a $5K to $15K difference on the same engagement.</li>
                            <li><strong>Black-box vs grey-box vs white-box.</strong> Black-box (no credentials) takes 2 to 3x longer. Grey-box (limited credentials) is the most cost-effective for most builds.</li>
                            <li><strong>Compliance overhead.</strong> SOC 2 reporting language costs nothing extra. PCI DSS adds 10 to 20% because of QSA-aligned formatting. HIPAA adds another 5 to 10% for PHI handling rules.</li>
                            <li><strong>Travel and on-site.</strong> Wireless and physical engagements bill travel separately, usually $1K to $3K per visit.</li>
                            <li><strong>Retest inclusion.</strong> Most quotes include one 30-day retest. Multi-round retest cycles add 15 to 30% to the engagement.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Why the same scope quotes 5x apart</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A $5K quote and a $35K quote for "a web app pentest" are not the same engagement. The difference is usually one of these tiers:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>$3K to $7K:</strong> automated scan with a logo on the report. Useful for internal hygiene. Will not satisfy SOC 2.</li>
                            <li><strong>$8K to $18K:</strong> grey-box manual test, OWASP Top 10 coverage, templated report, single junior + senior team.</li>
                            <li><strong>$18K to $35K:</strong> custom test, business-logic flaws, manual auth bypass, ATT&amp;CK-mapped report, source code review, senior-led.</li>
                            <li><strong>$35K to $70K:</strong> all of the above plus mobile, API, and infrastructure review for a larger application surface.</li>
                            <li><strong>$70K+:</strong> big-four consultancy pricing — same engagement, more brand recognition, partner-level review.</li>
                        </ul>
                        <p>
                            Read the sample report. The deliverable is what determines the value. Want help reviewing a quote? <Link href="/contact" className="text-sky-400 hover:underline">Send it over and I will second-opinion it free.</Link>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Web app pentest cost: the most common engagement</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The most-quoted engagement in 2026 is a web application pentest. Scope tends to be a single production SaaS app with authenticated access. Honest pricing:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Single-tenant app, OWASP Top 10 coverage, grey-box: $10K to $18K</li>
                            <li>Multi-tenant SaaS with role-based access logic to test: $18K to $30K</li>
                            <li>Multi-tenant SaaS plus API plus admin panel: $30K to $50K</li>
                            <li>Same plus source code review and threat model: $50K to $75K</li>
                        </ul>
                        <p>
                            For details on our methodology, see <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">the web app pentest service page</Link>. The engagement aligns to OWASP 2025 and every finding gets a MITRE ATT&amp;CK technique ID.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Network and Active Directory pentest cost</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Network pentests split into external (internet-facing) and internal (assumed-breach scenario where the tester sits on the LAN). Both are common SOC 2 and HIPAA requirements.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>External: $7K to $14K for under 100 IPs, $15K to $25K for 100 to 500 IPs.</li>
                            <li>Internal: $12K to $25K for a single subnet, $25K to $50K for multi-site environments.</li>
                            <li>Active Directory: $15K to $30K for a single domain, $30K to $50K for multi-domain forests or hybrid Azure AD.</li>
                        </ul>
                        <p>
                            See <Link href="/services/network-pentest" className="text-sky-400 hover:underline">the network pentest service</Link> and <Link href="/services/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory pentest service</Link> for our methodology. Real-world engagement example: <Link href="/work/active-directory-pentest" className="text-sky-400 hover:underline">the Active Directory pentest case study</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Wireless, physical, and social engineering cost</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            On-site components have a fixed-cost floor because the tester has to travel. Realistic 2026 ranges:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Wireless walkthrough, single building: $6K to $12K plus travel</li>
                            <li>Multi-building wireless assessment: $12K to $20K plus travel</li>
                            <li>Physical red team (badge cloning, tailgating): $15K to $40K plus travel</li>
                            <li>Phishing campaign (single round): $8K to $15K</li>
                            <li>Multi-pretext phishing program with reporting: $15K to $25K</li>
                        </ul>
                        <p>
                            On-site is where local matters. Georgia-based shops can do <Link href="/software-development-atlanta-ga" className="text-sky-400 hover:underline">Atlanta</Link>, <Link href="/software-development-macon-ga" className="text-sky-400 hover:underline">Macon</Link>, <Link href="/software-development-savannah-ga" className="text-sky-400 hover:underline">Savannah</Link>, and <Link href="/software-development-augusta-ga" className="text-sky-400 hover:underline">Augusta</Link> without billing two travel days per visit.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Red team engagement cost</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Red team engagements are objective-driven (steal X data, gain access to Y system, stay undetected for Z weeks), multi-vector, and typically run 4 to 12 weeks. Pricing scales with the objective complexity and the stealth requirement.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Single-objective, 4-week, mid-stealth: $40K to $80K</li>
                            <li>Multi-objective, 8-week, high-stealth with custom payloads: $80K to $150K</li>
                            <li>Full adversary emulation, 12+ weeks, custom infrastructure: $150K to $400K+</li>
                        </ul>
                        <p>
                            Most companies do not need a red team. They need a thorough pentest plus a tabletop. Red team is appropriate when you have a mature blue team and need to test detection coverage against a sophisticated adversary, not when you are still missing basic patches.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Compliance-driven pricing premium</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Compliance frameworks change pentest pricing in predictable ways. The premium is real but not unreasonable.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>SOC 2 Type II:</strong> Adds 0 to 5% over a standard engagement. The methodology already maps. The deliverable just needs to be auditor-friendly.</li>
                            <li><strong>HIPAA:</strong> Adds 5 to 10%. PHI handling rules during testing limit some techniques.</li>
                            <li><strong>PCI DSS:</strong> Adds 10 to 20%. The QSA-aligned report format is more rigid, and segmentation testing is explicit scope.</li>
                            <li><strong>FedRAMP / DoD:</strong> Adds 30 to 50%+. Cleared-personnel requirements and CIRT coordination are non-trivial.</li>
                            <li><strong>Cyber insurance renewal:</strong> No premium, but the report must be no more than 12 months old.</li>
                        </ul>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">How to lower pentest cost without losing value</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            If your quote came back higher than budget, here is how to reduce intelligently. The wrong way to cut cost is to drop the methodology depth — you will end up with a scan-only engagement that satisfies nothing. The right way is to reduce scope.
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong>Trim asset scope.</strong> Test critical production assets. Skip dev and staging unless they have unique attack surface.</li>
                            <li><strong>Allow grey-box instead of black-box.</strong> Provide low-privilege credentials. Saves 2 to 3 days of recon.</li>
                            <li><strong>Provide accurate asset inventories up front.</strong> Vendors price padding for unknown unknowns.</li>
                            <li><strong>Schedule outside compliance crunch.</strong> Q1 and Q3 are cheaper than the end-of-fiscal rush.</li>
                            <li><strong>Bundle engagements.</strong> Web app plus API plus AD together saves 10 to 20% versus three quotes.</li>
                            <li><strong>Sign an annual program.</strong> 15 to 25% discount versus paying per engagement.</li>
                            <li><strong>Use a local Georgia vendor.</strong> Eliminates 5 to 10% in travel cost.</li>
                            <li><strong>Skip the on-site components if you do not need them.</strong> Most SOC 2 engagements do not require wireless or physical testing.</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Total cost of a security testing program (3-year view)</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Company size</th>
                                    <th className="px-4 py-3 border-b border-white/10">Annual program</th>
                                    <th className="px-4 py-3 border-b border-white/10">3-year total</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Seed-stage SaaS, single web app, SOC 2 Type I</td><td className="px-4 py-3">$15K to $25K</td><td className="px-4 py-3">$45K to $75K</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Series A, web + API + AD, SOC 2 Type II</td><td className="px-4 py-3">$45K to $80K</td><td className="px-4 py-3">$135K to $240K</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Series B+, multi-app + internal AD + wireless</td><td className="px-4 py-3">$90K to $180K</td><td className="px-4 py-3">$270K to $540K</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Regulated mid-market, full program + red team</td><td className="px-4 py-3">$200K to $400K</td><td className="px-4 py-3">$600K to $1.2M</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Is a penetration test required for SOC 2?</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <p>
                            SOC 2 does not explicitly require a penetration test, but every reputable auditor will ask for one as evidence under CC4.1 and CC7.1. In practice, annual pentests are mandatory for SOC 2 Type II reports. Plan on $15K to $30K for a typical Series A SaaS scope.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">What is the difference between a vulnerability scan and a penetration test?</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <p>
                            A vulnerability scan is automated and costs $500 to $5,000. It identifies known CVEs but cannot chain findings or exploit business-logic flaws. A penetration test is human-driven, costs $8,000 to $40,000, and validates exploitability by actually compromising the target. Compliance frameworks like SOC 2 and PCI DSS require pentests, not scans.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">How long does a penetration test take?</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-3">
                        <p>
                            A typical web application pentest takes 1 to 3 weeks: 1 week of testing, 1 week of report writing, and 1 week reserved for retest after fixes. Larger environments (multi-app SaaS plus API plus internal AD) run 4 to 8 weeks. Red team engagements run 4 to 12 weeks.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">FAQ</h2>
                    <div className="space-y-6">
                        {[
                            { q: "How much does a penetration test cost in 2026?", a: "A web application penetration test costs $4,000 to $40,000 in 2026, depending on application complexity, number of user roles, and whether SOC 2 or PCI DSS attestation is required. Most SMB-tier web apps land at $10,000 to $18,000 for a grey-box manual test plus a one-page executive report and 30-day retest." },
                            { q: "What is the average cost of a penetration test in 2026?", a: "There is no single average because scope is everything. Realistic 2026 ranges: external network $7K to $25K, internal network $12K to $50K, single web app $10K to $40K, Active Directory $15K to $45K, wireless $6K to $20K, objective-based red team $40K to $200K. Sub-$5K quotes are almost always vulnerability scans." },
                            { q: "Why do pentest quotes vary 5x for the same scope?", a: "Three reasons: methodology depth (scanner vs human-driven), tester experience (junior vs senior), and reporting quality (template vs custom ATT&CK-mapped). The cheapest quote often is not the worst — it might just be a different deliverable. Read the sample report before judging the price." },
                            { q: "How can I lower the cost without lowering the value?", a: "Reduce scope intelligently: test critical apps and the production AD domain, skip pre-prod and dev environments unless they have unique attack surface. Provide accurate asset inventories up front. Allow grey-box testing instead of full black-box. Accept a remote-only engagement if you do not need physical or wireless components. Combined, these can cut 30 to 50% off a quote." },
                            { q: "How often should I get a pentest?", a: "Annually at minimum for any compliance program. After every major release that touches authentication, payment, or sensitive data. After every significant infrastructure change. SOC 2, HIPAA, and PCI all expect annual at minimum." },
                        ].map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-300 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Related reading and next steps</h2>
                    <ul className="space-y-3">
                        {[
                            { href: "/services/penetration-testing", label: "Penetration Testing service overview" },
                            { href: "/services/web-app-pentest", label: "Web Application Pentest" },
                            { href: "/services/network-pentest", label: "Network Pentest" },
                            { href: "/services/active-directory-pentest", label: "Active Directory Pentest" },
                            { href: "/services/mitre-attack-assessment", label: "MITRE ATT&CK Assessment" },
                            { href: "/work/active-directory-pentest", label: "Case study — AD pentest engagement" },
                            { href: "/software-development-atlanta-ga", label: "Atlanta software development" },
                            { href: "/software-development-macon-ga", label: "Macon software development" },
                            { href: "/calculators/stripe-cost", label: "Stripe cost calculator" },
                            { href: "/contact", label: "Get a pentest quote" },
                        ].map((l) => (
                            <li key={l.href} className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                <Link href={l.href} className="text-sky-400 hover:underline">{l.label}</Link>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get a real pentest quote.</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free 30-minute scoping call. ATT&amp;CK-mapped methodology, real attacker chain, fixed-fee engagement. We will tell you honestly what you need and what you do not.
                        </p>
                        <ConsultationCTA label="Get a Quote" service="Penetration Testing" source="blog-pentest-cost-cta" />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call William directly at <a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>
                        </div>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mt-12">
                    <div className="flex items-center justify-between text-sm text-gray-400">
                        <Link href="/blog" className="hover:text-sky-400 inline-flex items-center gap-1">
                            <ArrowRight className="w-3 h-3 rotate-180" /> All blog posts
                        </Link>
                        <span>Updated May 12, 2026</span>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
