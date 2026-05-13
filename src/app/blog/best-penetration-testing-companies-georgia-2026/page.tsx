import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { ArrowRight, Check, Shield, MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Best Penetration Testing Companies in Georgia (2026 Guide)",
    description:
        "Real criteria, specializations, methodology checklist, and pricing benchmarks for choosing a Georgia-based penetration testing company in 2026.",
    alternates: { canonical: "https://quantlabusa.dev/blog/best-penetration-testing-companies-georgia-2026" },
    openGraph: {
        title: "Best Penetration Testing Companies in Georgia (2026 Guide)",
        description:
            "Criteria, specializations, methodology checklist, and pricing benchmarks for Georgia pentest shops.",
        url: "https://quantlabusa.dev/blog/best-penetration-testing-companies-georgia-2026",
        type: "article",
        publishedTime: "2026-05-12",
        authors: ["William Beltz"],
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Penetration Testing Companies in Georgia (2026 Guide)",
    description:
        "Real criteria, specializations, methodology checklist, and pricing benchmarks for choosing a Georgia-based penetration testing company.",
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
        "@id": "https://quantlabusa.dev/blog/best-penetration-testing-companies-georgia-2026",
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
            name: "Best Penetration Testing Companies in Georgia (2026)",
            item: "https://quantlabusa.dev/blog/best-penetration-testing-companies-georgia-2026",
        },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How much does a penetration test cost in Georgia?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Realistic 2026 ranges from Georgia-based shops: external network pentest $7K to $18K, internal network or Active Directory $12K to $35K, single web app $10K to $28K, full red team $40K to $120K. Cheaper quotes usually mean a Nessus scan dressed up; more expensive quotes are big-four consultancies.",
            },
        },
        {
            "@type": "Question",
            name: "Why does local matter for a pentest?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Most engagements are remote, but physical, wireless, and social-engineering components need an in-person operator. A Georgia-based team can walk into your office for a wireless assessment or badge-clone test without travel costs eating 20% of the budget. It also makes coordination easier when something needs to be tested off-hours.",
            },
        },
        {
            "@type": "Question",
            name: "Should the pentest map to MITRE ATT&CK?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Every finding in a 2026 pentest report should cite the ATT&CK technique ID it represents and the kill-chain phase. This is what your blue team and detection engineering team will use to build coverage. If the report does not include ATT&CK mapping, the engagement is half-done.",
            },
        },
        {
            "@type": "Question",
            name: "Pentest vs vulnerability scan — which do I need?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A vulnerability scan runs Nessus or Qualys against your network and produces a CSV of CVEs. A pentest is a human adversary chaining findings into actual impact: credential spray to lateral movement to domain admin. For SOC 2 and most compliance frameworks, you need a real pentest. For internal hygiene, a scan is fine.",
            },
        },
        {
            "@type": "Question",
            name: "What questions should I ask a Georgia pentest company?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Six filters: (1) Show me a redacted sample report with ATT&CK technique IDs. (2) Who is testing — junior, senior, or partner? (3) Is the engagement scoped fixed-fee or T&M with a cap? (4) Is a 30-day retest included? (5) Does the methodology map to ATT&CK, OWASP, and PTES? (6) Are you Georgia-based or sub-contracting on-site work? These six filters eliminate the bottom 70% of pentest vendors.",
            },
        },
        {
            "@type": "Question",
            name: "How long does a Georgia pentest engagement take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Typical timelines from Georgia-based shops: 1 to 2 weeks of testing, 1 week of report writing, and a 30-day retest window after fixes ship. End-to-end calendar time from kickoff to final report is 4 to 6 weeks for most SOC 2 web app or external network engagements. Red teams run 4 to 12 weeks total.",
            },
        },
    ],
};

export default function BestGeorgiaPentestCompaniesPage() {
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
                        <li className="text-gray-300">Best Georgia pentest companies 2026</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Shield className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">BOFU Local Guide · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Best Penetration Testing Companies in Georgia (2026 Guide)
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        How to evaluate Georgia-based pentest shops in 2026: methodology checklist, specialization map, pricing benchmarks, sample-report quality red flags, and the questions that filter the bottom 70% of vendors.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        By <Link href="/about" className="text-sky-400 hover:underline">William Beltz</Link>, founder of QUANT LAB USA INC · Published May 12, 2026
                    </p>
                    <ConsultationCTA label="Get a GA Pentest Scope" service="Penetration Testing" city="Atlanta, GA" source="blog-ga-pentest-best" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">What is the best penetration testing company in Georgia?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>The best Georgia-based penetration testing companies in 2026 are senior-led boutiques (QUANT LAB USA INC and a handful of independent shops) that map findings to MITRE ATT&amp;CK, follow OWASP Top 10 and PTES methodology, ship custom reports, and can perform on-site engagements in Atlanta, Macon, Savannah, and Augusta without travel padding. Realistic 2026 ranges from local shops: external network $7K-$18K, web app $10K-$28K, internal/AD $12K-$35K, full red team $40K-$120K.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            Pentest buying is high-trust, low-information. You are paying someone to break into your environment, and the difference between a real engagement and a Nessus-scan-with-a-deck is invisible until you read the final report. By that point you have already paid. This guide is the framework I use to evaluate pentest vendors when companies ask me to second-opinion their shortlist.
                        </p>
                        <p>
                            Disclosure up front: <Link href="/" className="text-sky-400 hover:underline">QUANT LAB USA INC</Link> runs a Georgia-based pentest practice. I will score us against the same criteria as everyone else. Where another shop is the better fit, I will say so.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Why local matters for pentest engagement</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            About 70% of a typical engagement is remote, but the parts that need an in-person operator — wireless walkthroughs, physical red team, social engineering, badge cloning — are non-trivial. A Georgia-based team can show up in <Link href="/software-development-atlanta-ga" className="text-sky-400 hover:underline">Atlanta</Link>, <Link href="/software-development-macon-ga" className="text-sky-400 hover:underline">Macon</Link>, <Link href="/software-development-savannah-ga" className="text-sky-400 hover:underline">Savannah</Link>, or <Link href="/software-development-augusta-ga" className="text-sky-400 hover:underline">Augusta</Link> without billing two travel days per visit.
                        </p>
                        <p>
                            Local also matters for retests. Most engagements include a retest after remediation, and a Georgia-based shop can fit that into a calendar week instead of a quarter. Compliance auditors care about the gap between initial test and retest being short.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Methodology checklist: ATT&CK + OWASP + PTES</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Any pentest vendor worth hiring in 2026 should align to three published frameworks at minimum:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>MITRE ATT&amp;CK</strong> for technique mapping in every finding</li>
                            <li><strong>OWASP Top 10 (2025)</strong> for web application coverage</li>
                            <li><strong>PTES</strong> (Penetration Testing Execution Standard) for engagement phases</li>
                        </ul>
                        <p>
                            If a vendor cannot tell you in five seconds how their methodology maps to those three, the engagement is going to be ad-hoc. Ad-hoc is fine for a $3K curiosity test, not fine for a SOC 2 audit. See <Link href="/services/mitre-attack-assessment" className="text-sky-400 hover:underline">our MITRE ATT&amp;CK assessment service</Link> for what mapping should look like in practice.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Top Georgia shops by specialization</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The Georgia pentest market splits roughly into four tiers. Match the tier to the engagement, not the brand.
                        </p>
                        <h3 className="text-xl font-semibold text-white pt-2">Tier 1 — Big-four consulting (Deloitte, EY, PwC, KPMG Atlanta offices)</h3>
                        <p>
                            Best for: Fortune 500 procurement, regulated industries requiring brand recognition, multi-year programmatic engagements. Pricing: $80K+ for a standard engagement. Tradeoff: junior testers do most of the actual work, partner reviews the deck.
                        </p>
                        <h3 className="text-xl font-semibold text-white pt-2">Tier 2 — Mid-market security firms (Optiv, Bishop Fox in-region, regional MSSPs)</h3>
                        <p>
                            Best for: $250M to $2B revenue companies, programmatic compliance, ongoing managed pentest. Pricing: $35K to $90K for a single engagement. Tradeoff: methodology is solid but timelines and customization can be rigid.
                        </p>
                        <h3 className="text-xl font-semibold text-white pt-2">Tier 3 — Boutique GA pentest shops (5 to 30 person teams)</h3>
                        <p>
                            Best for: SOC 2 first-year audits, $1M to $100M revenue companies, single-app web pentests, internal network assessments. Pricing: $12K to $40K. This tier has the best price-to-quality ratio in Georgia for most engagements.
                        </p>
                        <h3 className="text-xl font-semibold text-white pt-2">Tier 4 — Specialist independent operators</h3>
                        <p>
                            Best for: Specific specializations (industrial control systems, AD-focused engagements, web app + dev shop combined). QUANT LAB USA sits here on the AD + web app axis. See our <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">web app pentest</Link>, <Link href="/services/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory pentest</Link>, and <Link href="/services/network-pentest" className="text-sky-400 hover:underline">network pentest</Link> service pages.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Web app vs network vs AD: who's strongest where</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Specialization</th>
                                    <th className="px-4 py-3 border-b border-white/10">Look for</th>
                                    <th className="px-4 py-3 border-b border-white/10">Avoid</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Web application</td><td className="px-4 py-3">OWASP Top 10 + Burp Suite Pro mastery, real source-code review skill, custom payload writing</td><td className="px-4 py-3">Scanner-only "web pentests," generic reports, no manual auth testing</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Internal network</td><td className="px-4 py-3">CrackMapExec + Impacket fluency, BloodHound paths, real C2 (Cobalt Strike, Sliver)</td><td className="px-4 py-3">Nessus-scan-only reports, no lateral movement, no Kerberos abuse</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Active Directory</td><td className="px-4 py-3">Kerberoasting, ASREP roasting, DCSync, ACL abuse — and explanation of each in the report</td><td className="px-4 py-3">"Domain admin" claimed in 30 minutes with no chain documented</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Wireless</td><td className="px-4 py-3">On-site team, real RF gear (Yagi, Alfa adapters), WPA-EAP / 802.1X attack experience</td><td className="px-4 py-3">"Wireless test" priced under $4K with no on-site visit</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Red team / objective-based</td><td className="px-4 py-3">Multi-week scope, OPSEC discipline, payload development, custom tooling</td><td className="px-4 py-3">Same fixed-price as a pentest, no objective definition, no purple-team handoff</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Compliance experience: SOC 2, HIPAA, PCI</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            For SOC 2 Type II, the pentest must be done by a qualified independent third party and the report must include a remediation roadmap. Most Tier 2 and Tier 3 GA shops can do this. The differentiator is how clean the auditor handoff is — ask for a sample auditor-facing executive summary, not just the full technical report.
                        </p>
                        <p>
                            For HIPAA, you need a vendor comfortable with PHI handling rules during testing (no exfiltration of real records into a screenshot). Most GA shops are fine here; a few mid-market ones still mishandle this.
                        </p>
                        <p>
                            For PCI DSS, the requirements are explicit: external test of the cardholder data environment plus internal test of segmentation, after every "significant change" to CDE infrastructure. A QSA-aware shop will quote this differently from a SOC 2 shop. Ask if they have done a PCI engagement in the past 12 months.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Sample report quality: what to demand</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Before signing, demand an anonymized sample report. Read it. The report is the deliverable. Code in the engagement is internal; the report is what your CISO, board, customer, and auditor will see. Look for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Executive summary written for a non-technical reader — three pages, not 30</li>
                            <li>Attack narrative — a written kill-chain story, not just a list of findings</li>
                            <li>Screenshot evidence for every Critical and High</li>
                            <li>MITRE ATT&amp;CK technique ID cited for each finding</li>
                            <li>Severity rubric — not just CVSS, but exploitability-adjusted business impact</li>
                            <li>Remediation roadmap — prioritized by exploitability and effort, not alphabetical</li>
                            <li>Retest clause and timeline — usually 30 to 60 days post-report</li>
                        </ul>
                        <p>
                            See <Link href="/work/active-directory-pentest" className="text-sky-400 hover:underline">our Active Directory pentest case study</Link> for an example of what an engagement looks like in practice, including the toolkit and reporting style.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Pricing benchmarks for GA-based pentest</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Engagement</th>
                                    <th className="px-4 py-3 border-b border-white/10">Tier 3 boutique (most GA shops)</th>
                                    <th className="px-4 py-3 border-b border-white/10">Tier 2 mid-market</th>
                                    <th className="px-4 py-3 border-b border-white/10">Tier 1 big-four</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">External network</td><td className="px-4 py-3">$7K to $14K</td><td className="px-4 py-3">$18K to $35K</td><td className="px-4 py-3">$45K+</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Internal network</td><td className="px-4 py-3">$12K to $25K</td><td className="px-4 py-3">$30K to $55K</td><td className="px-4 py-3">$60K+</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Active Directory pentest</td><td className="px-4 py-3">$15K to $30K</td><td className="px-4 py-3">$35K to $70K</td><td className="px-4 py-3">$80K+</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Single web app</td><td className="px-4 py-3">$10K to $22K</td><td className="px-4 py-3">$28K to $55K</td><td className="px-4 py-3">$70K+</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Wireless on-site (single floor)</td><td className="px-4 py-3">$6K to $12K</td><td className="px-4 py-3">$15K to $28K</td><td className="px-4 py-3">$40K+</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Objective-based red team</td><td className="px-4 py-3">$40K to $80K</td><td className="px-4 py-3">$90K to $180K</td><td className="px-4 py-3">$250K+</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-gray-400 mt-4">
                        These are 2026 GA-market ranges and they assume in-scope is properly defined. Quotes below the bottom of the Tier 3 range are usually scanner-only engagements; quotes above the top of Tier 3 should be questioned unless brand or auditor preference drives the choice.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Why founders pick QUANT LAB USA's pentest team</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            The differentiator: we write production software and we run penetration tests on it. Most pentest shops do not write code; most dev shops do not run pentests. When the security testing and development teams are separate companies, findings get punted, scope drifts, and remediation slips into Q4. When they are the same team, findings turn into pull requests inside two weeks.
                        </p>
                        <p>
                            Every engagement uses MITRE ATT&amp;CK mapping. We publish our 11-module red team toolkit framework on the <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">penetration testing service page</Link>. See specialized service pages for <Link href="/services/network-pentest" className="text-sky-400 hover:underline">network pentest</Link>, <Link href="/services/active-directory-pentest" className="text-sky-400 hover:underline">Active Directory pentest</Link>, and <Link href="/services/web-app-pentest" className="text-sky-400 hover:underline">web app pentest</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Where we test</h2>
                    <p className="text-gray-300 leading-relaxed mb-6">
                        Georgia-based pentest team with on-site capability across the Southeast and remote engagements nationwide.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {[
                            { slug: "atlanta-ga", city: "Atlanta", state: "GA" },
                            { slug: "macon-ga", city: "Macon", state: "GA" },
                            { slug: "augusta-ga", city: "Augusta", state: "GA" },
                            { slug: "savannah-ga", city: "Savannah", state: "GA" },
                            { slug: "columbus-ga", city: "Columbus", state: "GA" },
                            { slug: "charlotte-nc", city: "Charlotte", state: "NC" },
                            { slug: "nashville-tn", city: "Nashville", state: "TN" },
                            { slug: "miami-fl", city: "Miami", state: "FL" },
                        ].map((c) => (
                            <Link
                                key={c.slug}
                                href={`/software-development-${c.slug}`}
                                className="group flex items-center justify-between rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 transition-all hover:border-sky-400/30 hover:bg-[#0d1526]"
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0" />
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{c.city}, {c.state}</span>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">FAQ</h2>
                    <div className="space-y-6">
                        {[
                            { q: "How much does a penetration test cost in Georgia?", a: "Realistic 2026 ranges from Georgia-based shops: external network pentest $7K to $18K, internal network or Active Directory $12K to $35K, single web app $10K to $28K, full red team $40K to $120K. Cheaper quotes usually mean a Nessus scan dressed up; more expensive quotes are big-four consultancies." },
                            { q: "Why does local matter for a pentest?", a: "Most engagements are remote, but physical, wireless, and social-engineering components need an in-person operator. A Georgia-based team can walk into your office for a wireless assessment or badge-clone test without travel costs eating 20% of the budget. It also makes coordination easier when something needs to be tested off-hours." },
                            { q: "Should the pentest map to MITRE ATT&CK?", a: "Yes. Every finding in a 2026 pentest report should cite the ATT&CK technique ID it represents and the kill-chain phase. This is what your blue team and detection engineering team will use to build coverage. If the report does not include ATT&CK mapping, the engagement is half-done." },
                            { q: "Pentest vs vulnerability scan — which do I need?", a: "A vulnerability scan runs Nessus or Qualys against your network and produces a CSV of CVEs. A pentest is a human adversary chaining findings into actual impact: credential spray to lateral movement to domain admin. For SOC 2 and most compliance frameworks, you need a real pentest. For internal hygiene, a scan is fine." },
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
                            { href: "/services/penetration-testing", label: "Penetration Testing service" },
                            { href: "/services/web-app-pentest", label: "Web App Pentest service" },
                            { href: "/services/network-pentest", label: "Network Pentest service" },
                            { href: "/services/active-directory-pentest", label: "Active Directory Pentest service" },
                            { href: "/services/mitre-attack-assessment", label: "MITRE ATT&CK Assessment service" },
                            { href: "/work/active-directory-pentest", label: "Case study — Active Directory pentest" },
                            { href: "/software-development-atlanta-ga", label: "Atlanta software development" },
                            { href: "/software-development-macon-ga", label: "Macon software development" },
                            { href: "/services/custom-business-software", label: "Custom Software Development" },
                            { href: "/contact", label: "Book a pentest scoping call" },
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get a Georgia-based pentest scope.</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free 30-minute scoping call. ATT&amp;CK-mapped reporting, real attacker chain, remediation roadmap. Send your scope and we will tell you honestly if we are the right fit.
                        </p>
                        <ConsultationCTA label="Scope a Pentest" service="Penetration Testing" source="blog-ga-pentest-cta" />
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
