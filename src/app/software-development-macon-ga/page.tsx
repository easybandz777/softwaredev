import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Custom Software Development in Macon GA | QUANT LAB USA",
    description:
        "Macon-based software developer building custom web apps, CRMs, and trading systems for Middle Georgia businesses. Founder-led. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-macon-ga" },
    openGraph: {
        title: "Custom Software Development in Macon GA | QUANT LAB USA",
        description:
            "Macon-based software developer building custom web apps, CRMs, and trading systems for Middle Georgia businesses.",
        url: "https://quantlabusa.dev/software-development-macon-ga",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Custom Software Development in Macon GA | QUANT LAB USA",
        description:
            "Macon-based software developer building custom web apps, CRMs, and trading systems for Middle Georgia businesses.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Macon, GA",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "Macon" },
    description:
        "Founder-led custom software development for Middle Georgia: web apps, CRMs, Stripe integrations, and licensing systems on a modern stack.",
    url: "https://quantlabusa.dev/software-development-macon-ga",
};

const services = [
    {
        title: "Custom Web Apps & Operations Dashboards",
        desc: "Replace the spreadsheet jungle with a tool your team actually uses.",
    },
    {
        title: "CRMs Tailored to Your Workflow",
        desc: "Not a Salesforce subscription, an asset you own.",
    },
    {
        title: "Stripe Integrations & Licensing Systems",
        desc: "Turn services into recurring revenue products.",
    },
];

const faqs = [
    {
        q: "Do you work with Macon businesses in person?",
        a: "Yes. We meet on-site across Macon, Warner Robins, and Middle Georgia.",
    },
    {
        q: "Can you replace our current SaaS subscriptions?",
        a: "Often — when your monthly SaaS spend exceeds $400 a custom tool usually wins inside 18 months.",
    },
    {
        q: "Do you offer cybersecurity too?",
        a: "Yes — full penetration testing services in addition to development.",
    },
];

export default function MaconLandingPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-500">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">Macon, GA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Macon, GA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        QUANT LAB USA is headquartered right here in Macon, Georgia. Middle Georgia businesses don&apos;t need a faceless agency in another time zone — they need a founder-led shop that answers the phone and ships code that actually fits how their company runs.
                    </p>
                    <ConsultationCTA label="Scope a Macon Project" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            From healthcare practices off Forsyth Road to logistics outfits along I-75 and family-run trades across Bibb and surrounding counties, we build the custom software that keeps local businesses competitive against larger metro players.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What We Build for Macon Businesses</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Macon Owners Choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We are local. No offshore handoff, no junior outsourcing, no ticket queue. William Beltz writes the architecture, leads the build, and stays on the project through delivery. Every project ships on a modern stack — Next.js, TypeScript, Node, PostgreSQL, Docker — that another developer can pick up five years from now.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Local Work</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Our Macon-area portfolio includes Northcrest Fence (northcrestfencing.com), Bridgepointe Painting (bridgepointepainting.com), and HobbsPeak (hobbspeak.com) — real, deployed sites and tooling helping local operators run leaner.
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Headquartered in Macon — on-site discovery across Bibb and surrounding counties",
                            "Full coverage of Middle Georgia including Warner Robins",
                            "Founder-led delivery — the engineer on the kickoff call is the one writing the code",
                            "Modern Next.js / TypeScript / PostgreSQL / Docker stack",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
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
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "CRMs and ops tooling built around your workflow." },
                            { href: "/services/penetration-testing", title: "Penetration Testing", desc: "Network, web app, and Active Directory engagements." },
                            { href: "/software-development-atlanta-ga", title: "Atlanta, GA", desc: "Fintech, logistics, and SaaS — up I-75." },
                            { href: "/software-development-columbus-ga", title: "Columbus, GA", desc: "Chattahoochee Valley CRMs and dashboards." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Build it with a Macon firm.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call (770) 652-1282 or email beltz@quantlabusa.dev to scope your Macon project.
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
