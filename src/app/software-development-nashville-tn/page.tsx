import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Nashville Custom Software Developer | QUANT LAB USA",
    description:
        "Nashville custom software for healthcare, music-tech, and SaaS founders. Stripe, CRMs, and pen testing from a Georgia firm. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-nashville-tn" },
    openGraph: {
        title: "Nashville Custom Software Developer | QUANT LAB USA",
        description:
            "Nashville custom software for healthcare, music-tech, and SaaS founders. Stripe, CRMs, and pen testing.",
        url: "https://quantlabusa.dev/software-development-nashville-tn",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Nashville Custom Software Developer | QUANT LAB USA",
        description:
            "Nashville custom software for healthcare, music-tech, and SaaS founders.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Nashville, TN",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "Nashville" },
    description:
        "Healthcare-adjacent custom tools, music-tech and royalty tooling, and Stripe-powered SaaS for Nashville operators.",
    url: "https://quantlabusa.dev/software-development-nashville-tn",
};

const services = [
    {
        title: "Healthcare-Adjacent Custom Tools",
        desc: "Provider-facing CRMs, scheduling, and operations dashboards (non-PHI engagements by default; PHI-touching work scoped carefully).",
    },
    {
        title: "Music-Tech & Royalty Tooling",
        desc: "Custom platforms for catalogs, publishers, and independent artists.",
    },
    {
        title: "Stripe-Powered SaaS Products",
        desc: "Subscription billing, license keys, and customer self-serve portals.",
    },
];

const faqs = [
    {
        q: "Do you build software that touches PHI?",
        a: "Case-by-case — we scope BAA and HIPAA-aligned engagements deliberately, not casually.",
    },
    {
        q: "Can you build royalty or catalog management tools?",
        a: "Yes — custom platforms for music publishers and independent artists are in scope.",
    },
    {
        q: "Are you available for on-site work in Nashville?",
        a: "Yes, for engagements that warrant it.",
    },
];

export default function NashvilleLandingPage() {
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
                        <li className="text-gray-300">Nashville, TN</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Nashville, TN
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Nashville&apos;s economy is anchored by two unusually large verticals: healthcare administration (HCA Healthcare and a wide ecosystem of provider, payer, and admin tech companies) and music and entertainment tech (publishing, streaming, royalty management).
                    </p>
                    <ConsultationCTA label="Talk Nashville Projects" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Add a maturing SaaS founder pool and a strong professional services base, and you have a city that punches well above its size for software demand. QUANT LAB USA builds for all of it.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What We Build for Nashville Companies</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Nashville Operators Choose Us</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            We are a short drive south on I-24. Same region, full ET overlap, founder-led. We do not outsource. Every project is scoped and shipped personally by William Beltz on a modern stack.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Local Credibility</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Aaron Coleman Music is one of our published portfolio sites — an example of how we work with artists and music-adjacent brands. Broader portfolio includes UEhub, J5 Sales OS, and Wilder Recovery (a recovery-services platform).
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Short drive south on I-24 — same region, full ET overlap",
                            "Healthcare-adjacent and music-tech specialization",
                            "BAA / HIPAA-aligned engagements scoped deliberately",
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
                            { href: "/services/custom-business-software", title: "Custom Business Software", desc: "CRMs and operations dashboards." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments, Invoicing & Licensing", desc: "Stripe-powered SaaS billing." },
                            { href: "/software-development-atlanta-ga", title: "Atlanta, GA", desc: "Fintech, logistics, and SaaS." },
                            { href: "/software-development-charlotte-nc", title: "Charlotte, NC", desc: "Banking and fintech-adjacent work." },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Talk Nashville projects.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to talk Nashville projects.
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
