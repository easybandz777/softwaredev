import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { RelatedPosts } from "@/components/RelatedPosts";
import { ShieldHalf, Check, ArrowRight, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

const cities: { slug: string; city: string; state: string }[] = [
    { slug: "atlanta-ga", city: "Atlanta", state: "GA" },
    { slug: "macon-ga", city: "Macon", state: "GA" },
    { slug: "augusta-ga", city: "Augusta", state: "GA" },
    { slug: "columbus-ga", city: "Columbus", state: "GA" },
    { slug: "savannah-ga", city: "Savannah", state: "GA" },
    { slug: "miami-fl", city: "Miami", state: "FL" },
    { slug: "austin-tx", city: "Austin", state: "TX" },
    { slug: "dallas-tx", city: "Dallas", state: "TX" },
    { slug: "chicago-il", city: "Chicago", state: "IL" },
    { slug: "seattle-wa", city: "Seattle", state: "WA" },
    { slug: "new-york-ny", city: "New York", state: "NY" },
    { slug: "charlotte-nc", city: "Charlotte", state: "NC" },
    { slug: "nashville-tn", city: "Nashville", state: "TN" },
    { slug: "san-francisco-ca", city: "San Francisco", state: "CA" },
];

export const metadata = pageMetadata({
    title: "Managed Security Services | Ongoing Pentest & Monitoring | QUANT LAB USA",
    description:
        "Managed security on retainer — continuous testing, dependency and config monitoring, recurring pentests, and SOC 2 support for SaaS teams. Call (770) 652-1282.",
    slug: "services/managed-security-services",
    image: "/og-services.png",
    type: "article",
});

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Managed Security Services",
    name: "Managed Security Services and Continuous Testing",
    provider: {
        "@type": "Organization",
        name: "QUANT LAB USA",
        url: "https://quantlabusa.dev",
        "@id": "https://quantlabusa.dev/#organization",
    },
    areaServed: "United States",
    description:
        "Ongoing managed security for software companies — recurring penetration testing, continuous vulnerability and dependency monitoring, cloud configuration review, secrets scanning, and SOC 2 control support delivered on a monthly retainer instead of a one-time engagement.",
    url: "https://quantlabusa.dev/services/managed-security-services",
    offers: {
        "@type": "Offer",
        priceRange: "$2,500-$15,000/mo",
        priceCurrency: "USD",
        description: "Monthly retainer scoped to environment",
    },
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
        { "@type": "ListItem", position: 3, name: "Managed Security Services", item: "https://quantlabusa.dev/services/managed-security-services" },
    ],
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "How is this different from a one-time penetration test?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A one-time pentest is a snapshot — it tells you your security posture on the day it was run. But you ship code every week, dependencies publish new vulnerabilities daily, and your cloud config drifts. Managed security is the ongoing version: recurring tests, continuous monitoring, and a standing relationship with engineers who already know your system, so issues are caught between audits, not after a breach.",
            },
        },
        {
            "@type": "Question",
            name: "Are you a 24/7 SOC replacing my monitoring stack?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No — and we will be honest about that. We are an application and cloud security partner, not a 24/7 SOC watching SIEM alerts overnight. We focus on the security work most software companies actually need and rarely have in-house: recurring testing, vulnerability and dependency management, config review, and remediation guidance. For round-the-clock alert triage we will point you to the right specialist.",
            },
        },
        {
            "@type": "Question",
            name: "Will this keep us compliant with SOC 2 over time?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It directly supports the security side of staying compliant. SOC 2 expects ongoing vulnerability management and periodic testing, not a one-time effort. We provide the recurring pentests, the remediation tracking, and the evidence your auditor wants each cycle, so the controls stay green between audit windows.",
            },
        },
        {
            "@type": "Question",
            name: "What do we actually get each month?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Continuous dependency and vulnerability monitoring with triaged alerts, a scheduled cadence of focused penetration tests, cloud configuration and secrets review, a prioritized remediation queue, and a standing channel to ask security questions. You get a monthly report and a quarterly review, plus faster turnaround because we already know your stack.",
            },
        },
        {
            "@type": "Question",
            name: "Can you also fix what you find?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Because QUANT LAB USA is also a software development firm, we can implement fixes directly rather than just handing you a list. Many clients use the retainer for both — find the issues and close them — so security work does not pile up in a backlog nobody has time for.",
            },
        },
    ],
};

export default function ManagedSecurityServicesPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
                        <li className="text-gray-300">Managed Security Services</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-400 mb-6">
                        <ShieldHalf className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Managed Security for Teams That Ship Every Week
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Recurring penetration testing, continuous vulnerability and dependency monitoring, cloud configuration review, and SOC 2 support — on a monthly retainer. Security that keeps pace with your release cycle instead of a once-a-year snapshot.
                    </p>
                    <ConsultationCTA label="Scope a Security Retainer" service="Managed Security Services" source="services-managed-security" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Security is not a once-a-year event</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            A penetration test in January tells you nothing about the feature you shipped in March, the dependency that disclosed a critical vulnerability in April, or the storage bucket someone made public in May. Software security decays continuously because the software changes continuously. The annual-audit model leaves you exposed for eleven months out of twelve, and most small teams have no security engineer to cover the gap.
                        </p>
                        <p>
                            Managed security closes that gap with an ongoing relationship instead of a one-off project. We monitor your dependencies and cloud configuration continuously, run focused penetration tests on a regular cadence, and keep a prioritized remediation queue moving. Because we hold context on your system between engagements, every test goes deeper and every fix lands faster. It is the difference between discovering a problem in your own monitoring and discovering it in a breach notification.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What the retainer covers</h2>
                    <ul className="space-y-3">
                        {[
                            "Recurring penetration tests on a scheduled cadence, scoped to what changed since the last cycle",
                            "Continuous dependency and vulnerability monitoring with triaged, de-noised alerts",
                            "Cloud configuration review — IAM, storage exposure, security groups, and logging drift",
                            "Secrets scanning across repositories and CI with rotation guidance",
                            "A prioritized remediation queue tracked to closure, not just reported",
                            "Security review of new features and architecture changes before they ship",
                            "OWASP Top 10 and API Top 10 regression checks as the application evolves",
                            "SOC 2 evidence support — vulnerability management and testing artifacts each cycle",
                            "A standing channel for ad-hoc security questions and incident triage support",
                            "A monthly report and a quarterly posture review with your team",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How the engagement works</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We start with a baseline audit so we know where you stand and what to watch. From there the retainer settles into a rhythm: continuous monitoring runs in the background, a focused penetration test runs each cycle, findings flow into a shared remediation queue, and we meet regularly to review posture and plan the next cycle. The scope flexes with your environment — more attention during a big launch, steady-state monitoring between them.
                        </p>
                        <p>
                            Baseline audit → recurring cadence (monthly or quarterly testing) → continuous monitoring and remediation tracking → quarterly review. You get every report, every finding, and full visibility into the queue — there is no black box.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tools &amp; standards</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "OWASP Top 10 + ASVS",
                            "OWASP API Top 10",
                            "Dependency scanning (SCA)",
                            "Burp Suite Pro",
                            "Cloud config review (AWS/GCP)",
                            "Secrets scanning",
                            "CVSS v3.1 scoring",
                            "MITRE ATT&CK mapping",
                            "SOC 2 evidence support",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        The retainer builds on the same testing discipline as every <Link href="/services/penetration-testing" className="text-indigo-400 hover:underline">penetration test</Link>, <Link href="/services/saas-security-audit" className="text-indigo-400 hover:underline">SaaS security audit</Link>, and <Link href="/services/code-audit-services" className="text-indigo-400 hover:underline">code audit</Link> we run.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Who this is for</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Managed security fits SaaS companies and software teams that ship frequently, hold customer data, and have compliance obligations but no dedicated security engineer. If you are maintaining SOC 2, answering enterprise security questionnaires, or simply uncomfortable that no one is watching the attack surface between audits, a retainer gives you a senior security partner without the cost of a full-time hire.
                        </p>
                        <p>
                            We are deliberately honest about scope: we are an application and cloud security partner, not a 24/7 SOC. We do the recurring testing, monitoring, and remediation most teams actually need, and we will point you to the right specialist for anything outside that lane.
                        </p>
                        <p>
                            Managed security served from <Link href="/software-development-macon-ga" className="text-indigo-400 hover:underline">Macon, GA</Link>, with clients across <Link href="/software-development-atlanta-ga" className="text-indigo-400 hover:underline">Atlanta</Link>, <Link href="/software-development-new-york-ny" className="text-indigo-400 hover:underline">New York</Link>, <Link href="/software-development-san-francisco-ca" className="text-indigo-400 hover:underline">San Francisco</Link>, and the rest of the US.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Monthly retainer scoped to the size of your environment and the testing cadence. Typical tiers:
                        </p>
                        <ul className="space-y-2 list-disc list-inside">
                            <li>Essentials — monitoring, dependency management, quarterly focused test: $2,500 – $5,000/mo</li>
                            <li>Standard — monthly testing, cloud and secrets review, remediation tracking: $5,000 – $9,000/mo</li>
                            <li>Comprehensive — frequent testing, feature review, SOC 2 evidence support: $9,000 – $15,000/mo</li>
                            <li>One-time baseline audit before the retainer begins: scoped separately</li>
                        </ul>
                        <p>
                            Quarterly commitments with month-to-month thereafter. Fixes can be implemented under the same retainer or scoped as separate development work.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "A baseline security report establishing your starting posture",
                            "Recurring penetration test reports with proof-of-concept findings and CVSS severity",
                            "Continuous monitoring with triaged dependency and configuration alerts",
                            "A shared, prioritized remediation queue tracked to closure",
                            "A monthly summary report and a quarterly posture review with your team",
                            "SOC 2 evidence artifacts for vulnerability management and periodic testing",
                            "A standing security channel with faster turnaround because we know your stack",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
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
                                q: "How is this different from a one-time penetration test?",
                                a: "A one-time pentest is a snapshot — it tells you your security posture on the day it was run. But you ship code every week, dependencies publish new vulnerabilities daily, and your cloud config drifts. Managed security is the ongoing version: recurring tests, continuous monitoring, and a standing relationship with engineers who already know your system, so issues are caught between audits, not after a breach.",
                            },
                            {
                                q: "Are you a 24/7 SOC replacing my monitoring stack?",
                                a: "No — and we will be honest about that. We are an application and cloud security partner, not a 24/7 SOC watching SIEM alerts overnight. We focus on the security work most software companies actually need and rarely have in-house: recurring testing, vulnerability and dependency management, config review, and remediation guidance. For round-the-clock alert triage we will point you to the right specialist.",
                            },
                            {
                                q: "Will this keep us compliant with SOC 2 over time?",
                                a: "It directly supports the security side of staying compliant. SOC 2 expects ongoing vulnerability management and periodic testing, not a one-time effort. We provide the recurring pentests, the remediation tracking, and the evidence your auditor wants each cycle, so the controls stay green between audit windows.",
                            },
                            {
                                q: "What do we actually get each month?",
                                a: "Continuous dependency and vulnerability monitoring with triaged alerts, a scheduled cadence of focused penetration tests, cloud configuration and secrets review, a prioritized remediation queue, and a standing channel to ask security questions. You get a monthly report and a quarterly review, plus faster turnaround because we already know your stack.",
                            },
                            {
                                q: "Can you also fix what you find?",
                                a: "Yes. Because QUANT LAB USA is also a software development firm, we can implement fixes directly rather than just handing you a list. Many clients use the retainer for both — find the issues and close them — so security work does not pile up in a backlog nobody has time for.",
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
                    <RelatedPosts
                        topics={["pentest", "compliance"]}
                        heading="Security & compliance reading"
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "penetration-testing", title: "Penetration Testing", desc: "One-time deep manual testing of your attack surface." },
                            { slug: "saas-security-audit", title: "SaaS Security Audit", desc: "Multi-tenant isolation, auth, and cloud config review." },
                            { slug: "code-audit-services", title: "Code Audit Services", desc: "Source-level review of security and code quality." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-indigo-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-6 leading-relaxed">
                        Background reading on the model: <Link href="/blog/cybersecurity-services-for-saas-startups-2026" className="text-indigo-400 hover:underline">cybersecurity services for SaaS startups</Link> and <Link href="/blog/vcs-vcio-vs-software-development-firm" className="text-indigo-400 hover:underline">vCISO vs a software firm</Link>. To scope a retainer, <Link href="/contact" className="text-indigo-400 hover:underline">contact us</Link> directly.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="w-6 h-6 text-indigo-400" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white">Managed Security Services — Where We Serve</h2>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6 max-w-3xl">
                        Georgia-based security team, working with software companies across 14 US metros. The retainer runs remotely; in-person reviews available in Atlanta and the Southeast.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {cities.map((c) => (
                            <Link
                                key={c.slug}
                                href={`/software-development-${c.slug}`}
                                className="group flex items-center justify-between rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 transition-all hover:border-indigo-400/30 hover:bg-[#0d1526]"
                            >
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                        {c.city}, {c.state}
                                    </span>
                                </div>
                                <ArrowRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Keep your security posture green between audits.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute scope call. Founder-led from baseline audit through every cycle.
                        </p>
                        <ConsultationCTA label="Book a Scope Call" service="Managed Security Services" source="services-managed-security" />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
