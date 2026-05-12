import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Cluster = "crm" | "pentest" | "stripe" | "web" | "trading" | "infra" | "all";

type Props = {
    currentService?: string;
    cluster?: Cluster;
    heading?: string;
    className?: string;
};

type ServiceLink = { slug: string; label: string; blurb: string };

const ALL_SERVICES: ServiceLink[] = [
    { slug: "custom-business-software", label: "Custom Business Software", blurb: "Tailored internal tools built from scratch" },
    { slug: "custom-crm-development", label: "Custom CRM Development", blurb: "Sales pipelines built around your process" },
    { slug: "web-applications", label: "Web Applications", blurb: "Production-grade Next.js platforms" },
    { slug: "mobile-app-development", label: "Mobile App Development", blurb: "Cross-platform iOS and Android" },
    { slug: "stripe-integration", label: "Stripe Integration", blurb: "Payments, invoicing, billing, taxes" },
    { slug: "subscription-billing", label: "Subscription Billing", blurb: "Recurring revenue infrastructure" },
    { slug: "payments-invoicing-licensing", label: "Payments, Invoicing & Licensing", blurb: "Stripe + license-server stack" },
    { slug: "license-server", label: "License Server", blurb: "Activation, seat tracking, key delivery" },
    { slug: "penetration-testing", label: "Penetration Testing", blurb: "Manual offensive security testing" },
    { slug: "web-app-pentest", label: "Web App Pentest", blurb: "OWASP-driven application testing" },
    { slug: "network-pentest", label: "Network Pentest", blurb: "Internal and external network testing" },
    { slug: "active-directory-pentest", label: "Active Directory Pentest", blurb: "Kerberoasting, lateral movement, privesc" },
    { slug: "mitre-attack-assessment", label: "MITRE ATT&CK Assessment", blurb: "Adversary-emulation gap analysis" },
    { slug: "algorithmic-trading-systems", label: "Algorithmic Trading Systems", blurb: "Quant strategies and execution" },
    { slug: "cloud-infrastructure", label: "Cloud Infrastructure", blurb: "AWS, Vercel, edge networks" },
    { slug: "api-development", label: "API Development", blurb: "REST, GraphQL, webhook orchestration" },
];

const CLUSTER_MAP: Record<Cluster, string[]> = {
    crm: [
        "custom-crm-development",
        "stripe-integration",
        "subscription-billing",
        "payments-invoicing-licensing",
        "license-server",
        "custom-business-software",
    ],
    pentest: [
        "penetration-testing",
        "web-app-pentest",
        "network-pentest",
        "active-directory-pentest",
        "mitre-attack-assessment",
        "cloud-infrastructure",
    ],
    stripe: [
        "stripe-integration",
        "subscription-billing",
        "payments-invoicing-licensing",
        "license-server",
        "custom-crm-development",
        "api-development",
    ],
    web: [
        "web-applications",
        "custom-business-software",
        "api-development",
        "cloud-infrastructure",
        "mobile-app-development",
        "custom-crm-development",
    ],
    trading: [
        "algorithmic-trading-systems",
        "cloud-infrastructure",
        "api-development",
        "custom-business-software",
        "web-applications",
        "license-server",
    ],
    infra: [
        "cloud-infrastructure",
        "api-development",
        "web-applications",
        "custom-business-software",
        "network-pentest",
        "mitre-attack-assessment",
    ],
    all: [
        "custom-crm-development",
        "stripe-integration",
        "penetration-testing",
        "web-applications",
        "custom-business-software",
        "mitre-attack-assessment",
    ],
};

function resolveCluster(currentService?: string, cluster?: Cluster): Cluster {
    if (cluster && cluster !== "all") return cluster;
    if (!currentService) return cluster ?? "all";
    const map: Record<string, Cluster> = {
        "custom-crm-development": "crm",
        "stripe-integration": "stripe",
        "subscription-billing": "stripe",
        "payments-invoicing-licensing": "stripe",
        "license-server": "stripe",
        "penetration-testing": "pentest",
        "web-app-pentest": "pentest",
        "network-pentest": "pentest",
        "active-directory-pentest": "pentest",
        "mitre-attack-assessment": "pentest",
        "web-applications": "web",
        "custom-business-software": "web",
        "mobile-app-development": "web",
        "api-development": "infra",
        "cloud-infrastructure": "infra",
        "algorithmic-trading-systems": "trading",
    };
    return map[currentService] ?? "all";
}

export function RelatedServices({ currentService, cluster, heading, className }: Props) {
    const resolved = resolveCluster(currentService, cluster);
    const slugs = CLUSTER_MAP[resolved].filter((slug) => slug !== currentService).slice(0, 6);
    const items = slugs
        .map((slug) => ALL_SERVICES.find((s) => s.slug === slug))
        .filter((s): s is ServiceLink => Boolean(s));

    const titleLabel =
        heading ??
        (resolved === "crm"
            ? "Related CRM & Revenue Services"
            : resolved === "pentest"
              ? "Related Security & Pentest Services"
              : resolved === "stripe"
                ? "Related Payments & Billing Services"
                : resolved === "web"
                  ? "Related Engineering Services"
                  : resolved === "trading"
                    ? "Related Quant & Infra Services"
                    : resolved === "infra"
                      ? "Related Infrastructure Services"
                      : "Related Services");

    return (
        <section
            aria-label={titleLabel}
            className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 ${className ?? ""}`}
        >
            <div className="flex items-baseline justify-between gap-4 mb-5">
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{titleLabel}</h2>
                <Link
                    href="/services"
                    className="text-sm font-medium text-indigo-300 hover:text-indigo-200 transition-colors min-h-[44px] inline-flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg rounded"
                >
                    All services
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {items.map((s) => (
                    <li key={s.slug}>
                        <Link
                            href={`/services/${s.slug}`}
                            className="group block rounded-xl border border-white/5 bg-white/[0.02] hover:border-indigo-400/40 hover:bg-white/[0.05] transition-colors p-4 min-h-[88px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg"
                        >
                            <div className="flex items-center justify-between gap-3">
                                <span className="text-white font-semibold">{s.label}</span>
                                <ArrowRight
                                    className="w-4 h-4 text-gray-400 group-hover:text-indigo-300 transition-colors flex-shrink-0"
                                    aria-hidden="true"
                                />
                            </div>
                            <p className="mt-1 text-sm text-gray-400 leading-snug">{s.blurb}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default RelatedServices;
