import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { MapPin, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Seattle Custom Software & SaaS Developer | QUANT LAB USA",
    description:
        "Seattle SaaS, dev-tools, and cloud-adjacent custom software development. Stripe billing, Docker-native stacks, penetration testing. Call (770) 652-1282.",
    alternates: { canonical: "https://quantlabusa.dev/software-development-seattle-wa" },
    openGraph: {
        title: "Seattle Custom Software & SaaS Developer | QUANT LAB USA",
        description:
            "Seattle SaaS, dev-tools, and cloud-adjacent custom software development. Stripe billing and pen testing.",
        url: "https://quantlabusa.dev/software-development-seattle-wa",
        type: "article",
    },
    twitter: {
        card: "summary",
        title: "Seattle Custom Software & SaaS Developer | QUANT LAB USA",
        description:
            "Seattle SaaS, dev-tools, and cloud-adjacent custom software development.",
    },
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Custom Software Development",
    name: "Custom Software Development in Seattle, WA",
    provider: { "@id": "https://quantlabusa.dev/#org" },
    areaServed: { "@type": "City", name: "Seattle" },
    description:
        "SaaS, dev-tools, Stripe-billed licensing infrastructure, and penetration testing for Seattle-area founders and companies.",
    url: "https://quantlabusa.dev/software-development-seattle-wa",
};

const services = [
    {
        title: "SaaS Products & Dev Tools",
        desc: "Next.js + TypeScript builds that fit naturally into AWS and GCP environments.",
    },
    {
        title: "Stripe & Licensing Infrastructure",
        desc: "Subscription billing, usage metering, license key issuance, and developer-friendly API surfaces.",
    },
    {
        title: "Penetration Testing",
        desc: "Web app and cloud-perimeter engagements before enterprise procurement reviews.",
    },
];

const faqs = [
    {
        q: "Do you work with AWS-heavy stacks?",
        a: "Yes — most of our builds are cloud-portable and deploy cleanly to AWS, GCP, and Vercel.",
    },
    {
        q: "Can you ship a Stripe-billed SaaS MVP for a Seattle founder?",
        a: "Yes — that is our most common SaaS engagement.",
    },
    {
        q: "Time-zone overlap?",
        a: "Georgia HQ — comfortable working morning–early afternoon Pacific.",
    },
];

export default function SeattleLandingPage() {
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
                        <li className="text-gray-300">Seattle, WA</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-blue-400 mb-6">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Custom Software Development in Seattle, WA
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        Seattle&apos;s software economy is anchored by Amazon and Microsoft, surrounded by a fast-moving SaaS and dev-tools ecosystem and a steady current of bootstrapped indie SaaS founders working out of Capitol Hill and Fremont.
                    </p>
                    <ConsultationCTA label="Scope a Seattle Project" />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most companies here speak fluent cloud — what they need is senior-quality custom development at a price point that does not require a full FTE hire. QUANT LAB USA is built for that.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What We Build for Seattle Companies</h2>
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
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why Seattle Founders Choose QUANT LAB USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Most contract shops in the Pacific Northwest are either expensive enterprise consultancies or thin freelancer marketplaces. We sit in the middle. Senior, founder-led, fixed-scope. Our stack is Docker-native, cloud-portable, and built on modern TypeScript — exactly what a Seattle-grade engineering reviewer expects to see.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Selected Work</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Live work includes J5 Sales OS (sales operations platform), UEhub (education platform), and HobbsPeak (hobbspeak.com).
                        </p>
                    </div>
                    <ul className="space-y-3 mt-6">
                        {[
                            "Docker-native, cloud-portable builds",
                            "Cleanly deploys to AWS, GCP, and Vercel",
                            "Pacific morning overlap from Georgia HQ",
                            "Pen testing for enterprise procurement reviews",
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
                            { href: "/services/cloud-infrastructure", title: "Cloud Infrastructure", desc: "AWS/GCP-portable, Docker-native builds." },
                            { href: "/services/payments-invoicing-licensing", title: "Payments, Invoicing & Licensing", desc: "Stripe-billed SaaS infrastructure." },
                            { href: "/software-development-san-francisco-ca", title: "San Francisco, CA", desc: "Bay Area SaaS, fintech, and quant." },
                            { href: "/software-development-austin-tx", title: "Austin, TX", desc: "Startup SaaS and quant tooling." },
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
                            Scope a Seattle project.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> to scope a Seattle project.
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
