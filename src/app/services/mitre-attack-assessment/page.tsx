import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Shield, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "MITRE ATT&CK Assessment | ATT&CK-Aligned Pentest | QuantLab",
    description:
        "MITRE ATT&CK assessment and ATT&CK-aligned pentest mapping your defenses to real adversary TTPs. Call (770) 652-1282 to scope an ATT&CK-aligned engagement.",
    alternates: { canonical: "https://quantlabusa.dev/services/mitre-attack-assessment" },
    openGraph: {
        title: "MITRE ATT&CK Assessment — Map Your Defenses to Real Adversary Behavior",
        description:
            "Threat-profile-driven red team and purple team engagements. ATT&CK heatmap of techniques tested, succeeded, detected, blocked. Audit-ready.",
        url: "https://quantlabusa.dev/services/mitre-attack-assessment",
        type: "article",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "MITRE ATT&CK Assessment",
    name: "MITRE ATT&CK Assessment & ATT&CK-Aligned Pentest",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#org",
    },
    areaServed: "United States",
    description:
        "MITRE ATT&CK-aligned red team and purple team engagements that map a documented threat group's TTPs against the client's environment. Every technique attempted is logged with timestamp, target, and detection outcome, producing an ATT&CK heatmap of what defenses caught and what they missed.",
    url: "https://quantlabusa.dev/services/mitre-attack-assessment",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Is this a pentest or a red team?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It is closer to a red team or purple team, scoped to specific ATT&CK techniques rather than open-ended objective-based engagement. Most clients run it in purple-team mode so their defenders learn in real time.",
            },
        },
        {
            "@type": "Question",
            name: "Do you map findings to specific threat groups?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We pick a threat profile — real groups documented in ATT&CK — that matches your industry and threat model, and report results against those groups' actual TTPs.",
            },
        },
        {
            "@type": "Question",
            name: "Will this satisfy our cyber-insurance carrier?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "ATT&CK-aligned assessments are increasingly the format insurers ask for. Our reports are formatted to drop into the response templates carriers use.",
            },
        },
        {
            "@type": "Question",
            name: "What if we do not have a SOC or EDR yet?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Then the assessment doubles as a baseline — it shows you which techniques succeed today and informs your detection-engineering roadmap. We have run this for clients building a security program from scratch.",
            },
        },
        {
            "@type": "Question",
            name: "Can you re-run the assessment annually?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, and most ATT&CK clients put us on an annual cadence. Year-over-year heatmap trends are the cleanest way to show security program ROI to a board.",
            },
        },
    ],
};

export default function MitreAttackAssessmentPage() {
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
                        <li className="text-gray-300">MITRE ATT&amp;CK Assessment</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        MITRE ATT&amp;CK Assessment — Map Your Defenses to Real Adversary Behavior
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Pick a real threat group. Execute their documented TTPs against your environment. Get an ATT&amp;CK heatmap of what was caught, what was missed, and the specific detections to build next.
                    </p>
                    <ConsultationCTA label="Scope an ATT&CK Engagement" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why an ATT&amp;CK-aligned engagement</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A list of CVEs and CVSS scores does not tell you whether you can detect a real attack. The MITRE ATT&amp;CK framework does — it catalogs the techniques actual threat groups use, and an ATT&amp;CK assessment shows you which of those techniques succeed against your environment and which get caught.
                        </p>
                        <p>
                            If you have a SIEM, an EDR, a SOC (in-house or MSSP), or a cyber-insurance carrier asking pointed questions, you need an ATT&amp;CK-aligned pentest. That is the gap this engagement fills.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we assess</h2>
                    <ul className="space-y-3">
                        {[
                            "Initial access — phishing, exposed services, supply chain, valid accounts",
                            "Execution & persistence — scripting, services, scheduled tasks, registry",
                            "Privilege escalation — token theft, exploit-for-priv-esc, abuse elevation",
                            "Defense evasion — process injection, obfuscation, indicator removal",
                            "Credential access — dumping, brute force, password spraying",
                            "Discovery & lateral movement — network sniffing, remote services, pass-the-hash",
                            "Collection & exfiltration — staging, channel choice, encryption",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Methodology</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We pick the threat profile that matches your industry — FIN7 for retail, APT41 for tech, ransomware affiliates for everyone. We then execute that group's documented TTPs against your environment, in coordination with your blue team (purple-team mode) or unilaterally (red-team mode).
                        </p>
                        <p>
                            Every technique attempted is logged with timestamp, source, target, and detection outcome. The deliverable is an ATT&amp;CK heatmap showing exactly which techniques succeeded, which were detected, which were blocked, and which slipped past your stack quietly.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Process &amp; timeline</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <ol className="list-decimal pl-6 space-y-2">
                            <li>Threat profile selection (1 week)</li>
                            <li>Engagement letter + rules of engagement (1 week)</li>
                            <li>Execution (2 to 4 weeks depending on scope)</li>
                            <li>Draft report + purple-team debrief</li>
                            <li>Final report + detection-gap remediation tracking</li>
                        </ol>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Deliverables</h2>
                    <ul className="space-y-3">
                        {[
                            "ATT&CK heatmap of techniques tested, succeeded, detected, and blocked",
                            "Per-technique evidence — logs, screenshots, payloads",
                            "Detection gap report with proposed alert rules",
                            "Tabletop debrief with security team",
                            "Executive summary + board-ready scorecard",
                            "Optional purple-team workshops to tune detections post-engagement",
                            "Attestation letter for cyber-insurance, auditors, or enterprise customers",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Fixed-fee per engagement. Typical MITRE ATT&amp;CK assessment: $18k – $55k. Purple-team mode (continuous coordination with your defenders) at the higher end. Pure red-team (no coordination) at the lower end.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference engagements</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Related work in production: <Link href="/work/active-directory-pentest" className="text-red-400 hover:underline">an Active Directory pentest with documented attack chain</Link> mapped to MITRE ATT&amp;CK techniques, and <Link href="/work/protectwithbri" className="text-red-400 hover:underline">ProtectWithBri</Link>'s web application coverage. Engagements served from <Link href="/software-development-atlanta-ga" className="text-red-400 hover:underline">Atlanta</Link>, <Link href="/software-development-macon-ga" className="text-red-400 hover:underline">Macon</Link>, <Link href="/software-development-savannah-ga" className="text-red-400 hover:underline">Savannah</Link>, and <Link href="/software-development-augusta-ga" className="text-red-400 hover:underline">Augusta</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "Is this a pentest or a red team?",
                                a: "It is closer to a red team or purple team, scoped to specific ATT&CK techniques rather than open-ended objective-based engagement. Most clients run it in purple-team mode so their defenders learn in real time.",
                            },
                            {
                                q: "Do you map findings to specific threat groups?",
                                a: "Yes. We pick a threat profile — real groups documented in ATT&CK — that matches your industry and threat model, and report results against those groups' actual TTPs.",
                            },
                            {
                                q: "Will this satisfy our cyber-insurance carrier?",
                                a: "ATT&CK-aligned assessments are increasingly the format insurers ask for. Our reports are formatted to drop into the response templates carriers use.",
                            },
                            {
                                q: "What if we do not have a SOC or EDR yet?",
                                a: "Then the assessment doubles as a baseline — it shows you which techniques succeed today and informs your detection-engineering roadmap. We have run this for clients building a security program from scratch.",
                            },
                            {
                                q: "Can you re-run the assessment annually?",
                                a: "Yes, and most ATT&CK clients put us on an annual cadence. Year-over-year heatmap trends are the cleanest way to show security program ROI to a board.",
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
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "Full-scope manual pentests across network, web app, and Active Directory." },
                            { slug: "cloud-infrastructure", title: "Cloud Infrastructure", desc: "Harden the environment before the assessment begins." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Auth, permissions, and audit done right from day one." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-red-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Find out what your defenses actually catch.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a scoping call. Purple-team or red-team, your call. Founder-led, audit-ready.
                        </p>
                        <ConsultationCTA label="Book a Consultation" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
