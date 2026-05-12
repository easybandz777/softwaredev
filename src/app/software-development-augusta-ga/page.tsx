import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Augusta GA Software Dev & Penetration Testing | QUANT LAB USA",
    description:
        "Augusta-area custom software and penetration testing — built for the cyber corridor around Fort Eisenhower. Founder-led. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-augusta-ga" },
    openGraph: {
        title: "Augusta GA Software Dev & Penetration Testing | QUANT LAB USA",
        description:
            "Augusta-area custom software and penetration testing built for the cyber corridor around Fort Eisenhower.",
        url: "https://quantlabusa.dev/software-development-augusta-ga",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Augusta GA Software Dev & Penetration Testing | QUANT LAB USA",
        description:
            "Augusta-area custom software and penetration testing built for the cyber corridor around Fort Eisenhower.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development & Cybersecurity",
    name: "Custom Software Development & Cybersecurity in Augusta, GA",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "Augusta" },
    description:
        "Penetration testing and custom software engineering for the Augusta cyber corridor, rooted in MITRE ATT&CK.",
    url: "https://quantlabusa.dev/software-development-augusta-ga",
};

const services = [
    {
        title: "Penetration Testing (Web, Network, Wireless, AD)",
        desc: "Full red-team-style engagements with formal reports suitable for compliance and customer security reviews.",
    },
    {
        title: "Custom CRMs & Operations Dashboards",
        desc: "Purpose-built tooling for medical, legal, and contracting firms across the CSRA.",
    },
    {
        title: "Stripe & Licensing Systems",
        desc: "Subscription products and software licensing infrastructure for local SaaS founders.",
    },
];

const faqs = [
    {
        q: "Do you hold security clearances?",
        a: "Ask us directly — clearance status is discussed under NDA, not on a public page.",
    },
    {
        q: "Can you produce a pen test report I can hand to a federal prime?",
        a: "Yes — our reports are formatted for compliance and supply-chain review.",
    },
    {
        q: "Do you build software for cleared environments?",
        a: "We scope this case-by-case; talk to us about requirements.",
    },
];

export default function AugustaLandingPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Augusta, GA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development & Cybersecurity in Augusta, GA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Augusta sits at the center of the southeast&apos;s cyber corridor. With Fort Eisenhower, Army Cyber Command, and the growing private-sector ecosystem along Reynolds and Broad Streets, this region demands software vendors who genuinely understand offensive security.
                    </p>
                    <ConsultationCTA label="Discuss an Augusta Engagement" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA combines custom software engineering with hands-on penetration testing rooted in the MITRE ATT&amp;CK framework — not just selling development hours.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What We Build for Augusta Organizations</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {services.map((s) => (
                            <div key={s.title} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-5">
                                <h3 className="text-white font-semibold mb-2">{s.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Augusta Buyers Choose Us</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most generalist agencies in the southeast cannot credibly speak to penetration testing methodology. We can. Active Directory abuse paths, lateral movement, wireless attacks, web app exploitation — that is in-house capability, not a subcontracted line item. And every line of software we ship is reviewed against the same threat models we use on engagement.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Local Capability</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA is Georgia-based and Georgia-staffed. We are a short drive up I-20. Our client portfolio includes deployed sites and platforms for Inked Artistry, Aaron Coleman Music, and ProtectWithBri (protectwithbri.com) — production work that demonstrates we ship.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Georgia-based and Georgia-staffed — short drive up I-20",
                            "In-house offensive security capability (AD abuse paths, wireless, ADCS, web app)",
                            "Reports formatted for federal-prime supply-chain review",
                            "Modern Next.js / TypeScript / PostgreSQL / Docker stack",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQ</h2>
                    <div className="space-y-6">
                        {faqs.map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Web, network, wireless, and AD engagements." },
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "CRMs and operations dashboards." },
                            { href: "/software-development-atlanta-ga", title: "Atlanta, GA", desc: "Fintech, logistics, and SaaS." },
                            { href: "/software-development-macon-ga", title: "Macon, GA", desc: "Our HQ — Middle Georgia coverage." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
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
                            Scope an Augusta engagement.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or email <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a> to discuss Augusta engagements.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-quant-bg font-semibold hover:bg-gray-100 transition-colors"
                        >
                            Start a Project <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
