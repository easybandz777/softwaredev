import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Terminal, Bot, Globe, CreditCard, Shield, Lock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Services | QuantLab Software Solutions",
    description:
        "Custom software development, algorithmic trading systems, web applications, cybersecurity, and cloud infrastructure services.",
    alternates: { canonical: "https://quantlabusa.dev/services" },
    openGraph: {
        title: "Services | QuantLab Software Solutions",
        description:
            "Custom software development, algorithmic trading systems, web applications, cybersecurity, and cloud infrastructure services.",
        url: "https://quantlabusa.dev/services",
        type: "website",
    },
};

const services = [
    {
        icon: Terminal,
        color: "from-blue-500 to-cyan-400",
        title: "Custom Business Software",
        slug: "custom-business-software",
        headline: "CRMs, dashboards, work orders, internal tools",
        description:
            "Internal platforms shaped around your workflows — not the other way around. Shipped across 4+ industries.",
        tag: "In production across 4 industries",
    },
    {
        icon: Bot,
        color: "from-violet-500 to-blue-400",
        title: "Algorithmic Trading Systems",
        slug: "algorithmic-trading-systems",
        headline: "Live trading bots running real money",
        description:
            "MA Supertrend, VWAP, momentum, multi-strategy setups. Real-time market feeds, configurable risk, 24/7 uptime.",
        tag: "5 live systems deployed",
    },
    {
        icon: Globe,
        color: "from-cyan-500 to-emerald-400",
        title: "Web Applications & Portals",
        slug: "web-applications",
        headline: "SaaS apps, client portals, platforms",
        description:
            "Full-stack web applications built on Next.js and deployed on Vercel with global CDN. Built for real use, not demos.",
        tag: "Full-stack web apps in production",
    },
    {
        icon: CreditCard,
        color: "from-emerald-500 to-cyan-400",
        title: "Payments, Invoicing & Licensing",
        slug: "payments-invoicing-licensing",
        headline: "Get paid. Manage access. Ship software.",
        description:
            "Stripe, ACH, auto-invoicing, revenue dashboards. License servers with JWT validation, usage tracking, and seat management.",
        tag: "Live payment and licensing systems shipped",
    },
    {
        icon: Shield,
        color: "from-red-500 to-orange-400",
        title: "Penetration Testing",
        slug: "penetration-testing",
        headline: "We break in so someone else doesn't.",
        description:
            "Network, wireless, web app, and Active Directory pentests. Real attacks mapped to MITRE ATT&CK with clear remediation.",
        tag: "Custom red team toolkit with 11 attack modules",
    },
    {
        icon: Lock,
        color: "from-pink-500 to-violet-400",
        title: "Cloud Infrastructure & DevOps",
        slug: "cloud-infrastructure",
        headline: "Deploy, monitor, scale — without the 3am pages.",
        description:
            "Docker, Nginx, CI/CD, auto-scaling, Sentry monitoring on DigitalOcean, Fly.io, and Vercel. Zero unplanned outages.",
        tag: "Zero unplanned outages",
    },
];

export default function ServicesIndexPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <section className="container mx-auto px-6 relative z-10">
                <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
                    <nav aria-label="Breadcrumb" className="mb-6">
                        <ol className="flex items-center justify-center gap-2 text-xs text-gray-500">
                            <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                            <li aria-hidden="true" className="text-gray-700">›</li>
                            <li className="text-gray-300">Services</li>
                        </ol>
                    </nav>
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-4">
                        What We Offer
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-white">
                        Services
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                        What we build, end to end.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <AnimatedSection key={service.slug} delay={idx * 0.06}>
                                <Link href={`/services/${service.slug}`} className="block h-full group">
                                    <div className="relative h-full rounded-2xl border border-white/5 bg-[#0d1526]/80 backdrop-blur-sm p-7 overflow-hidden transition-all duration-300 group-hover:border-sky-400/30 group-hover:bg-[#0d1526]">
                                        <div className="flex flex-col h-full">
                                            <div
                                                className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 mb-5 w-fit`}
                                            >
                                                <Icon className="w-5 h-5 text-white" />
                                            </div>

                                            <div className="mb-3">
                                                <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase mb-1">{service.title}</p>
                                                <h2 className="text-lg font-bold text-white leading-snug">{service.headline}</h2>
                                            </div>

                                            <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-grow">
                                                {service.description}
                                            </p>

                                            <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                                <p className={`text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                                                    {service.tag}
                                                </p>
                                                <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </AnimatedSection>
                        );
                    })}
                </div>

                <AnimatedSection className="text-center max-w-2xl mx-auto border-t border-white/5 pt-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Not sure which fits?
                    </h2>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        Most projects touch two or three of these. Book a free consultation and we'll figure out what the right build actually looks like — or tell you if there's a better off-the-shelf option.
                    </p>
                    <ConsultationCTA />
                </AnimatedSection>
            </section>
        </main>
    );
}
