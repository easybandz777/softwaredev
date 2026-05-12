import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Shield, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Penetration Testing Georgia — 11-Module Red Team | QuantLab",
    description:
        "Full-scope pentests: network, wireless, web app, and Active Directory. 11-module red team toolkit mapped to MITRE ATT&CK. Georgia-based, serving the US. Get a scope.",
    alternates: { canonical: "https://quantlabusa.dev/services/penetration-testing" },
    openGraph: {
        title: "We Break In So Someone Else Doesn't.",
        description:
            "Network, wireless, web app, and Active Directory pentests with a custom 11-module red team toolkit. Every finding mapped to MITRE ATT&CK.",
        url: "https://quantlabusa.dev/services/penetration-testing",
        type: "article",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Penetration Testing",
    name: "Penetration Testing & Red Team Services",
    provider: {
        "@type": "Organization",
        name: "QuantLab Software Solutions",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Full-scope penetration testing across network, wireless, web applications, and Active Directory environments. Red team engagements with a custom toolkit and MITRE ATT&CK-mapped reporting.",
    url: "https://quantlabusa.dev/services/penetration-testing",
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What's the difference between a vulnerability scan and a penetration test?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A vulnerability scan runs automated tools against your environment and hands you a list of potential issues, most of which are false positives or low severity. A penetration test is a human adversary trying to chain findings into actual impact — credential spraying leading to lateral movement leading to domain admin. We do the second kind.",
            },
        },
        {
            "@type": "Question",
            name: "How long does a pentest take?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A standard internal network or Active Directory pentest runs 1-2 weeks of active testing plus reporting. Web application tests vary by scope — a single app with standard authentication is usually 1 week. Full red team engagements with persistent C2 and physical components run longer.",
            },
        },
        {
            "@type": "Question",
            name: "Do you cause outages during testing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Rarely, and never intentionally on production. Denial-of-service testing is its own scope and requires explicit authorization. Normal pentesting uses low-impact techniques, and we coordinate with your team on anything that could stress services.",
            },
        },
        {
            "@type": "Question",
            name: "What do I actually get at the end?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A written report with executive summary, full attack narrative, screenshot evidence for every critical finding, each issue mapped to MITRE ATT&CK technique IDs, and a remediation roadmap prioritized by exploitability rather than CVSS score alone. Plus a retest after you fix things.",
            },
        },
        {
            "@type": "Question",
            name: "Are you based in Atlanta or Georgia?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Georgia-based. We work with clients across the US, mostly remotely, but in-person engagements (physical red team, wireless walkthroughs, on-site social engineering) are straightforward to schedule for Atlanta and surrounding areas.",
            },
        },
    ],
};

export default function PenetrationTestingPage() {
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
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Penetration Testing</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Penetration Testing
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        We break in so someone else doesn't. Network, wireless, web app, and Active Directory pentests with a custom red team toolkit and MITRE ATT&amp;CK-mapped reporting.
                    </p>
                    <ConsultationCTA label="Request a Scope" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What we build — and what we break</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Four engagement types cover most of what clients ask for. Internal network and Active Directory pentests, where we start on a corporate VLAN with low-privilege credentials and see how far we can go. External perimeter and web application tests, where we attack what the internet sees. Wireless assessments against corporate Wi-Fi, guest networks, and BYOD separation. And full red team engagements where the blue team is unaware and we have to get in, establish persistence, and simulate data exfiltration without getting caught.
                        </p>
                        <p>
                            The full attack chain is on the table: Kerberoasting and AS-REP roasting, password spraying with rate-limit evasion, lateral movement via WinRM, SMB, and RDP, Kerberos delegation abuse (unconstrained, constrained, RBCD), Active Directory Certificate Services exploitation across known ESC patterns, and credential dumping from LSASS, DPAPI, and SAM.
                        </p>
                        <p>
                            Our custom red team toolkit has 11 attack modules covering credential spraying, lateral movement, Kerberos abuse, ADCS exploitation, C2 infrastructure spin-up, and evasion. Every technique we use is mapped to a MITRE ATT&amp;CK ID so your detection team knows what to look for.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Who this is for</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Companies with compliance pressure (SOC 2, PCI DSS, HIPAA, CMMC) that require annual third-party pentesting. Businesses that have never had a real test done and want to know what an attacker would actually find. Security teams who need a second-opinion red team exercise to justify budget or validate new controls. Law firms, financial services, healthcare orgs, and SaaS companies holding customer data.
                        </p>
                        <p>
                            Small IT shops running Active Directory who suspect their GPOs and permissions have drifted over time — they usually have. And development teams that want a black-box or credentialed assessment of a production web application before shipping a major release.
                        </p>
                        <p>
                            Not for: compliance-only checkbox buyers who want a short PDF and a photo-op. If that's the goal, there are cheaper vendors. Our reports get used by actual security teams to fix actual problems.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference engagement</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            See our <Link href="/work/active-directory-pentest" className="text-red-400 hover:underline">Active Directory pentest case study</Link> for the full attack chain from standard user to Domain Admin — Kerberoasting, ADCS abuse, and MITRE ATT&amp;CK mapping included. Pentest engagements are served across <Link href="/software-development-atlanta-ga" className="text-red-400 hover:underline">Atlanta</Link>, <Link href="/software-development-macon-ga" className="text-red-400 hover:underline">Macon</Link>, <Link href="/software-development-savannah-ga" className="text-red-400 hover:underline">Savannah</Link>, and <Link href="/software-development-augusta-ga" className="text-red-400 hover:underline">Augusta, GA</Link>, plus remote work nationwide.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Web application penetration testing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Your web app probably passed a Burp scan. That does not mean it is safe. The exploits that get companies breached are almost always business-logic bugs, broken auth flows, and IDOR chains that scanners cannot see. A real web app pentest reads your app the way an attacker does — mapping roles, abusing tenant boundaries, breaking workflow state, and finding the path from "anonymous visitor" to "domain admin."
                        </p>
                        <p>
                            Coverage on every web app engagement: OWASP Top 10 (SQLi, XSS, SSRF, broken access control). Authentication and session — MFA bypass, session fixation, password reset abuse. Authorization — IDOR, horizontal and vertical privilege escalation, tenant isolation. Business logic — workflow tampering, race conditions, pricing manipulation. API security across REST and GraphQL — mass assignment, rate limiting, schema introspection. Client-side — DOM XSS, prototype pollution, source-map and bundle review.
                        </p>
                        <p>
                            Methodology is credentialed walkthrough first so we understand the intended workflows, then test as multiple personas — unauthenticated, low-privilege user, admin — and look for the cracks between. Manual exploitation, real payloads, real proof. Pre-launch testing on staging is ideal; pre-launch findings cost less to fix than post-launch ones.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MITRE ATT&amp;CK-aligned assessments</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            For clients who have a SIEM, an EDR, a SOC (in-house or MSSP), or a cyber-insurance carrier asking pointed questions, we run engagements scoped explicitly to MITRE ATT&amp;CK techniques. We pick the threat profile that matches your industry — FIN7 for retail, APT41 for tech, ransomware affiliates for everyone — then execute that group's documented TTPs against your environment. Every technique attempted is logged with timestamp, source, target, and detection outcome, producing an ATT&amp;CK heatmap of what your defenses actually catch.
                        </p>
                        <p>
                            See the <Link href="/services/mitre-attack-assessment" className="text-red-400 hover:underline">full MITRE ATT&amp;CK assessment page</Link> for the standalone engagement format.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we approach it</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Scoping call first. We pin down the rules of engagement, the authorized IP ranges, the emergency contacts, and what's explicitly off-limits (production databases, executive workstations, whatever). Then we sign the statement of work. Nothing runs without written authorization — this is non-negotiable.
                        </p>
                        <p>
                            Engagement runs in phases. Reconnaissance and fingerprinting. Initial access attempts. Post-exploitation and lateral movement. Privilege escalation. Then we write up the narrative — not a CSV dump of CVEs, but the actual story of how a real attacker chains the findings into impact.
                        </p>
                        <p>
                            Reports get delivered with an executive summary for leadership, a technical narrative for engineers, an appendix mapping every finding to MITRE ATT&amp;CK, and a prioritized remediation plan. We do a debrief call with your team. And we include a retest after fixes so you can close the loop properly.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech &amp; tools</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Custom red team toolkit (11 modules)",
                            "BloodHound / SharpHound",
                            "Impacket suite",
                            "Certipy (ADCS)",
                            "CrackMapExec / NetExec",
                            "Responder / ntlmrelayx",
                            "Burp Suite Pro",
                            "Cobalt Strike / Sliver C2",
                            "Nmap, Nuclei, custom tooling",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                        We use the standard industry toolset for most things because it mirrors what real attackers use. Where off-the-shelf tools are too noisy or missing a technique, our in-house modules fill the gap — and that's what gives us clean evasion against well-tuned EDR.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "A full written report: executive summary, technical narrative, evidence, and remediation",
                            "Every finding mapped to MITRE ATT&CK technique IDs for your detection team",
                            "Proof-of-compromise screenshots and command history for each critical issue",
                            "Prioritized remediation roadmap ordered by exploitability, not just CVSS",
                            "Debrief call with your security and engineering leads",
                            "Retest of critical findings after remediation (included in most scopes)",
                            "A clean letter of attestation for SOC 2, PCI, or compliance needs",
                            "An honest assessment — not padded findings to fill pages",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQs</h2>
                    <div className="space-y-6">
                        {[
                            {
                                q: "What's the difference between a vulnerability scan and a penetration test?",
                                a: "A vulnerability scan runs automated tools against your environment and hands you a list of potential issues, most of which are false positives or low severity. A penetration test is a human adversary trying to chain findings into actual impact — credential spraying leading to lateral movement leading to domain admin. We do the second kind.",
                            },
                            {
                                q: "How long does a pentest take?",
                                a: "A standard internal network or Active Directory pentest runs 1-2 weeks of active testing plus reporting. Web application tests vary by scope — a single app with standard authentication is usually 1 week. Full red team engagements with persistent C2 and physical components run longer.",
                            },
                            {
                                q: "Do you cause outages during testing?",
                                a: "Rarely, and never intentionally on production. Denial-of-service testing is its own scope and requires explicit authorization. Normal pentesting uses low-impact techniques, and we coordinate with your team on anything that could stress services.",
                            },
                            {
                                q: "What do I actually get at the end?",
                                a: "A written report with executive summary, full attack narrative, screenshot evidence for every critical finding, each issue mapped to MITRE ATT&CK technique IDs, and a remediation roadmap prioritized by exploitability rather than CVSS score alone. Plus a retest after you fix things.",
                            },
                            {
                                q: "Are you based in Atlanta or Georgia?",
                                a: "Yes, Georgia-based. We work with clients across the US, mostly remotely, but in-person engagements (physical red team, wireless walkthroughs, on-site social engineering) are straightforward to schedule for Atlanta and surrounding areas.",
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
                            { slug: "mitre-attack-assessment", title: "MITRE ATT&CK Assessment", desc: "Map your defenses to real adversary TTPs — purple-team or red-team mode." },
                            { slug: "cloud-infrastructure", title: "Cloud Infrastructure", desc: "Harden the environment before the test begins." },
                            { slug: "web-applications", title: "Web Applications", desc: "Build secure by default if we're writing the app." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-red-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Find out what's actually there.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Book a scoping call. We'll walk through rules of engagement, environment, and pricing in one conversation.
                        </p>
                        <ConsultationCTA label="Book a Consultation" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
