import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { articleMetadata } from "@/lib/seoMeta";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/schemas";
import { ArrowRight, Check, Target } from "lucide-react";

const SLUG = "red-team-vs-pen-test-vs-audit";
const TITLE = "Red Team vs Penetration Test vs Security Audit: When You Need Each";
const DESCRIPTION =
    "Plain-English breakdown of red team, penetration test, security audit, vulnerability scan, and tabletop exercise — what each tells you, when you need each, and what each costs.";
const PUBLISHED_ISO = "2026-05-12";

export const metadata: Metadata = articleMetadata({
    title: TITLE,
    description: DESCRIPTION,
    slug: `/blog/${SLUG}`,
    image: "/og-pentest.png",
    imageAlt: "Red team vs penetration test vs security audit comparison",
    publishedTime: PUBLISHED_ISO,
    modifiedTime: PUBLISHED_ISO,
    authors: ["Bill Beltz"],
    keywords: [
        "red team vs pen test",
        "penetration test vs audit",
        "security audit",
        "red team engagement",
        "purple team",
    ],
});

const faqItems = [
    {
        q: "What is the difference between a red team and a pentest?",
        a: "A penetration test is scope-bound and finding-focused: tell me every exploitable weakness in this defined target within these dates. A red team is objective-driven and stealth-focused: prove or disprove that this defined adversary could achieve this specific outcome (steal X data, ransom Y system) without being detected. Pentests find vulnerabilities; red teams test the entire defense, including detection and response.",
    },
    {
        q: "What is a security audit?",
        a: "A security audit is a documentation and controls review against a framework — SOC 2, ISO 27001, HIPAA, PCI-DSS, CIS Controls. The auditor verifies that policies, procedures, and evidence demonstrate the controls are operating as designed. Auditors test on paper and through sample evidence; they do not exploit anything. Most security audits are required for compliance, not security itself.",
    },
    {
        q: "Do I need a red team or a pentest first?",
        a: "Almost always a pentest first. Red teams test whether your defenses can detect and respond to a sophisticated adversary. If your basics are weak (unpatched systems, weak credentials, missing MFA), a red team will succeed trivially and tell you nothing. Mature your security posture through pentests and program work first, then engage a red team when you have a credible blue team to test.",
    },
    {
        q: "What does a red team cost?",
        a: "Single-objective, mid-stealth, 4-week red team: $40K to $80K. Multi-objective, high-stealth, 8-week red team with custom payloads: $80K to $150K. Full adversary emulation 12+ weeks with custom infrastructure: $150K to $400K+. Most red team engagements run smaller than that ceiling. See our pentest cost guide for the supporting math.",
    },
    {
        q: "Is a vulnerability scan the same as a pentest?",
        a: "No. A vulnerability scan is automated, runs against a target list, identifies known CVEs and misconfigurations, and produces a list of findings. A penetration test is human-driven, attempts to exploit the findings, chains them into impact, and validates which vulnerabilities are actually exploitable in your context. Scans cost hundreds; pentests cost thousands to tens of thousands. SOC 2 and PCI require pentests, not scans.",
    },
    {
        q: "What is a tabletop exercise?",
        a: "A tabletop is a discussion-based simulation of an incident. The team walks through a scenario (ransomware, breach, insider threat) and discusses how they would respond. It tests the plan and the people, not the technology. Tabletops are cheap ($5K to $20K facilitated) and required by most cyber insurance carriers.",
    },
    {
        q: "What is a purple team engagement?",
        a: "A purple team is a collaborative engagement where the offensive testers and the defenders work together in real time. The red side runs ATT&CK techniques while the blue side watches and adjusts detections. The deliverable is a coverage matrix showing which techniques your detection stack catches and which slip through. Useful when your blue team is mature enough to participate. Typical cost: $30K to $80K.",
    },
    {
        q: "Which engagement does SOC 2 require?",
        a: "SOC 2 does not explicitly require a penetration test, but every reputable auditor expects one as evidence under CC4.1 and CC7.1. SOC 2 does require a documented audit (the SOC 2 attestation itself). Red teams are not required for SOC 2 — they are optional maturity work.",
    },
    {
        q: "What does HIPAA require?",
        a: "HIPAA requires a Security Risk Analysis annually and 'regular' security evaluations. Auditors expect annual penetration testing and quarterly vulnerability scanning. Red teaming is not named explicitly and is not required.",
    },
    {
        q: "How often should I do each?",
        a: "Vulnerability scans: monthly external, quarterly internal. Pentests: annually at minimum, after major releases that touch auth or payments. Audits: per the compliance framework cycle (annual for SOC 2 Type II). Tabletops: annually. Red teams: every 18 to 36 months once the program is mature.",
    },
    {
        q: "Can one engagement combine red team and pentest?",
        a: "Yes. A combined engagement starts with a pentest (find and report vulnerabilities) then transitions into a red team (use those findings or others to achieve an objective stealth-style). This 'pen team' or 'long-form' engagement is more expensive than either alone but cheaper than buying them separately back-to-back. We run a handful of these per year.",
    },
    {
        q: "What is adversary emulation?",
        a: "Adversary emulation is a red team engagement where the testers mimic the TTPs (tactics, techniques, procedures) of a specific named threat actor — APT29, FIN7, Conti — using MITRE ATT&CK as the reference. The goal is to test how your defenses hold up against a real threat your industry faces. More expensive than generic red teaming; more useful for mature programs. See our MITRE ATT&CK Assessment service.",
    },
];

const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Red Team vs Pen Test vs Audit", url: `/blog/${SLUG}` },
];

const articleLd = articleSchema({
    headline: TITLE,
    description: DESCRIPTION,
    datePublished: PUBLISHED_ISO,
    image: "https://quantlabusa.dev/og-pentest.png",
    slug: SLUG,
    section: "Security",
    keywords: ["red team", "penetration test", "security audit", "vulnerability scan", "purple team"],
});
const breadcrumbLd = breadcrumbSchema(breadcrumbItems, `/blog/${SLUG}`);
const faqLd = faqSchema(faqItems);

export default function RedTeamVsPentestVsAuditPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/blog" className="hover:text-sky-400 transition-colors">Blog</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Red team vs pentest vs audit</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-12">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Target className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xs uppercase tracking-widest text-sky-400 mb-3">TOFU Security Primer · 2026</p>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white mb-6">
                        Red Team vs Penetration Test vs Security Audit: When You Need Each
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl">
                        Plain-English breakdown of every offensive and assessment engagement on the menu in 2026. What each tells you, what each costs, and which order to buy them in.
                    </p>
                    <p className="text-sm text-gray-500 mb-8">
                        By <Link href="/about" className="text-sky-400 hover:underline">Bill Beltz</Link>, founder of QUANT LAB USA INC · Published May 12, 2026
                    </p>
                    <ConsultationCTA label="Talk About a Security Engagement" service="Penetration Testing" source="blog-redteam-comparison" />
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="rounded-2xl border border-sky-400/30 bg-sky-500/5 p-6 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Quick answer: which security engagement do I actually need?</h2>
                        <p className="text-gray-200 leading-relaxed">
                            <strong>If you have never had a security engagement, start with a penetration test. If you need a compliance attestation, schedule a security audit aligned to your framework (SOC 2, ISO, HIPAA, PCI). If you have a mature blue team and want to test detection coverage, run a purple team or a red team. Vulnerability scans run continuously in the background regardless. The sequence for most companies is: scans then pentest then audit then tabletop then purple team then red team.</strong>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-5">
                        <p>
                            The security industry has too many words for too many things. Vendors mix them deliberately because the more elaborate the name, the higher the quote. This guide is the plain-English distinction we use with clients, with honest pricing and decision logic.
                        </p>
                        <p>
                            Background: <Link href="/glossary/what-is-penetration-testing" className="text-sky-400 hover:underline">What is penetration testing?</Link> and <Link href="/glossary/what-is-a-red-team" className="text-sky-400 hover:underline">What is a red team?</Link>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Side-by-side: every engagement type at a glance</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Engagement</th>
                                    <th className="px-4 py-3 border-b border-white/10">What it tests</th>
                                    <th className="px-4 py-3 border-b border-white/10">Typical cost</th>
                                    <th className="px-4 py-3 border-b border-white/10">Duration</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Vulnerability scan</td><td className="px-4 py-3">Known CVEs and misconfigurations</td><td className="px-4 py-3">$500 to $5K</td><td className="px-4 py-3">Hours to days</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Penetration test</td><td className="px-4 py-3">Exploitable weaknesses in defined scope</td><td className="px-4 py-3">$8K to $50K</td><td className="px-4 py-3">1 to 3 weeks</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Security audit (SOC 2, ISO)</td><td className="px-4 py-3">Controls and evidence alignment</td><td className="px-4 py-3">$15K to $80K</td><td className="px-4 py-3">3 to 6 months</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Tabletop exercise</td><td className="px-4 py-3">Plan and people response</td><td className="px-4 py-3">$5K to $20K</td><td className="px-4 py-3">1 day</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Purple team</td><td className="px-4 py-3">Detection coverage by ATT&CK technique</td><td className="px-4 py-3">$30K to $80K</td><td className="px-4 py-3">2 to 6 weeks</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Red team</td><td className="px-4 py-3">End-to-end defense vs an adversary objective</td><td className="px-4 py-3">$40K to $400K</td><td className="px-4 py-3">4 to 12+ weeks</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Adversary emulation</td><td className="px-4 py-3">Defense vs a specific named threat actor</td><td className="px-4 py-3">$80K to $250K</td><td className="px-4 py-3">6 to 12 weeks</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Vulnerability scan: the cheap continuous baseline</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A vulnerability scan is automated. A tool like Tenable, Qualys, Nuclei, or Burp Suite Scanner crawls a target list and flags known CVEs, missing patches, misconfigurations, and SSL issues. The output is a list of findings with severity scores.
                        </p>
                        <p>
                            <strong>Use case:</strong> continuous monitoring of your external attack surface and internal systems. SOC 2 and PCI both expect quarterly authenticated scans at minimum.
                        </p>
                        <p>
                            <strong>What it does not tell you:</strong> whether the findings are exploitable in your context, whether they chain into impact, whether your business logic has flaws. Scans are necessary but insufficient.
                        </p>
                        <p>
                            More detail: <Link href="/blog/what-is-a-pen-test-vs-vulnerability-scan" className="text-sky-400 hover:underline">Pen Test vs Vulnerability Scan</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Penetration test: the foundation everyone needs</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A penetration test is human-driven. A senior tester or team attempts to exploit weaknesses in your defined target — web app, network, AD, mobile — chains them into business impact, and reports findings with remediation guidance. The deliverable is an executive summary, a technical findings report, and (usually) a retest after fixes.
                        </p>
                        <p>
                            <strong>Use case:</strong> annual compliance evidence (SOC 2, HIPAA, PCI), pre-release validation of new features, due diligence for fundraising or acquisitions, cyber insurance renewals.
                        </p>
                        <p>
                            <strong>What it does not tell you:</strong> whether your detection and response would catch a real adversary, whether your assumed-breach posture is solid, whether your incident response process actually works. Pentests are about finding holes, not testing the alarm system.
                        </p>
                        <p>
                            Pricing detail: <Link href="/blog/penetration-test-cost-2026" className="text-sky-400 hover:underline">Penetration Test Cost 2026</Link>. Our methodology: <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">Penetration Testing service</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Security audit: the controls and evidence review</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A security audit is a paper-and-evidence engagement against a framework — SOC 2, ISO 27001, HIPAA, PCI-DSS, CIS Controls. The auditor reviews policies, samples evidence, and tests that controls are operating as designed. Auditors do not exploit anything; they verify.
                        </p>
                        <p>
                            <strong>Use case:</strong> compliance attestation that you can hand to customers and prospects. SOC 2 Type II is the most common in SaaS.
                        </p>
                        <p>
                            <strong>What it does not tell you:</strong> whether your defenses would actually withstand attack. Plenty of SOC 2 Type II companies have failed pentests within a month of signing the audit report. Audits attest to controls, not to security outcomes.
                        </p>
                        <p>
                            Background: <Link href="/glossary/what-is-soc-2" className="text-sky-400 hover:underline">What is SOC 2?</Link>
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Tabletop exercise: testing the plan, not the tech</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A tabletop is a facilitated discussion. The incident response team (engineering, legal, communications, leadership) walks through a realistic scenario and works through how each team would respond. The facilitator throws curveballs — the CEO is unreachable, the press calls, a customer demands an update.
                        </p>
                        <p>
                            <strong>Use case:</strong> validate your incident response plan, train new team members, satisfy cyber insurance requirements. Most carriers require an annual tabletop.
                        </p>
                        <p>
                            <strong>Why teams skip it:</strong> it is awkward. Senior leadership has to admit they do not know what to do. That is exactly why you do it — once on paper, not once for real.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Purple team: cooperative detection testing</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A purple team is offensive and defensive working side-by-side. The offensive testers (red) execute ATT&CK techniques in a controlled manner while the defenders (blue) watch their tooling and report what fired. Techniques that fired no alerts get tuned in real time. The deliverable is a detection coverage matrix.
                        </p>
                        <p>
                            <strong>Use case:</strong> mature security programs measuring SOC efficacy, tuning SIEM/EDR coverage against specific threat models, training the blue team.
                        </p>
                        <p>
                            <strong>Prerequisites:</strong> a real blue team that can participate. Without that, a purple team is just an expensive pentest.
                        </p>
                        <p>
                            See our <Link href="/services/mitre-attack-assessment" className="text-sky-400 hover:underline">MITRE ATT&CK Assessment service</Link> for the deeper methodology and our <Link href="/blog/what-is-mitre-attack-framework" className="text-sky-400 hover:underline">MITRE ATT&CK framework explainer</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Red team: end-to-end adversary simulation</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            A red team is objective-driven, stealth-emphasizing, and tests the entire defense — technology, people, and process. The engagement defines an objective (steal customer data, gain domain admin, deploy ransomware in a test environment) and the team uses any technique available to achieve it without being detected.
                        </p>
                        <p>
                            <strong>Use case:</strong> measure end-to-end defense maturity, test incident response under realistic conditions, find chained vulnerabilities that single-target pentests miss, executive-level risk demonstration.
                        </p>
                        <p>
                            <strong>Prerequisites:</strong> mature pentest history, functional blue team, executive sponsorship for the engagement scope. Red teams against weak programs are a waste — you will get owned trivially and learn nothing you would not have learned from a pentest.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Adversary emulation: red team against a named actor</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            Adversary emulation is red team that follows the documented TTPs of a specific named threat actor — APT29, FIN7, Conti, Lazarus. The testers use only the techniques that actor is known to use, in roughly the order and tempo that actor uses them. The result is a defense readiness assessment against the threats most relevant to your industry.
                        </p>
                        <p>
                            <strong>Use case:</strong> regulated industries (finance, healthcare, defense) wanting to validate readiness against industry-specific threats.
                        </p>
                        <p>
                            <strong>Cost premium:</strong> 30 to 80% over a generic red team because the methodology is more constrained and the research burden is real.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">The buying sequence: scans then pentest then audit then tabletop then purple team then red team</h2>
                    <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                        <p>
                            For a typical SaaS maturing through Series A to Series C, the engagement sequence we recommend:
                        </p>
                        <ol className="list-decimal pl-6 space-y-2">
                            <li><strong>Year 1:</strong> Continuous vulnerability scanning, annual web app pentest, SOC 2 Type I.</li>
                            <li><strong>Year 2:</strong> Continue scans, annual web + API pentest, SOC 2 Type II, first tabletop exercise.</li>
                            <li><strong>Year 3:</strong> Continue, add internal network pentest, AD pentest. Bring on a security hire or fractional CISO.</li>
                            <li><strong>Year 4:</strong> Add purple team to measure SOC efficacy. Mature the blue team capability.</li>
                            <li><strong>Year 5+:</strong> First red team engagement when the blue team can participate meaningfully. Adversary emulation when you have a credible threat model.</li>
                        </ol>
                        <p>
                            Skipping steps is expensive. Red teaming against a weak program wastes the budget and demoralizes the security team.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">Compliance overlay: which engagement satisfies which framework</h2>
                    <div className="overflow-x-auto mt-4">
                        <table className="w-full text-sm text-left border border-white/10 rounded-xl overflow-hidden">
                            <thead className="bg-[#0d1526] text-white">
                                <tr>
                                    <th className="px-4 py-3 border-b border-white/10">Framework</th>
                                    <th className="px-4 py-3 border-b border-white/10">Pentest</th>
                                    <th className="px-4 py-3 border-b border-white/10">Audit</th>
                                    <th className="px-4 py-3 border-b border-white/10">Red Team</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-300">
                                <tr className="border-b border-white/5"><td className="px-4 py-3">SOC 2 Type II</td><td className="px-4 py-3">Expected</td><td className="px-4 py-3">Required</td><td className="px-4 py-3">Not required</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">PCI-DSS 4.0</td><td className="px-4 py-3">Required (SAQ-D)</td><td className="px-4 py-3">Required</td><td className="px-4 py-3">Not required</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">HIPAA</td><td className="px-4 py-3">Expected</td><td className="px-4 py-3">Expected (SRA)</td><td className="px-4 py-3">Not required</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">ISO 27001</td><td className="px-4 py-3">Expected</td><td className="px-4 py-3">Required</td><td className="px-4 py-3">Not required</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">FedRAMP Moderate</td><td className="px-4 py-3">Required</td><td className="px-4 py-3">Required</td><td className="px-4 py-3">Recommended at High</td></tr>
                                <tr className="border-b border-white/5"><td className="px-4 py-3">Cyber insurance renewal</td><td className="px-4 py-3">Common requirement</td><td className="px-4 py-3">Sometimes</td><td className="px-4 py-3">Rare</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-5">FAQ</h2>
                    <div className="space-y-6">
                        {faqItems.map((item) => (
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
                            { href: "/services/mitre-attack-assessment", label: "MITRE ATT&CK Assessment" },
                            { href: "/services/web-app-pentest", label: "Web Application Pentest" },
                            { href: "/services/network-pentest", label: "Network Pentest" },
                            { href: "/services/active-directory-pentest", label: "Active Directory Pentest" },
                            { href: "/blog/penetration-test-cost-2026", label: "Pentest Cost 2026" },
                            { href: "/blog/what-is-a-pen-test-vs-vulnerability-scan", label: "Pentest vs Vulnerability Scan" },
                            { href: "/blog/soc2-pentest-prep-guide-2026", label: "SOC 2 Pentest Prep Guide" },
                            { href: "/blog/what-is-mitre-attack-framework", label: "What is MITRE ATT&CK?" },
                            { href: "/glossary/what-is-a-red-team", label: "What is a red team?" },
                            { href: "/glossary/what-is-soc-2", label: "What is SOC 2?" },
                            { href: "/contact", label: "Talk to an engineer" },
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
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pick the right engagement.</h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Free 30-minute scoping call. Tell us where your security program is today and we will tell you honestly which engagement gives you the most value next.
                        </p>
                        <ConsultationCTA label="Get a Scoping Call" service="Penetration Testing" source="blog-redteam-cta" />
                        <div className="mt-6 text-sm text-gray-400">
                            Or call Bill at <a href="tel:+17706521282" className="text-sky-400 hover:underline">(770) 652-1282</a>
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
