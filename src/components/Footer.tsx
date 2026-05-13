"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { NewsletterInlineSignup } from "@/components/NewsletterInlineSignup";

const citySlugs = [
    "macon-ga",
    "atlanta-ga",
    "augusta-ga",
    "columbus-ga",
    "savannah-ga",
    "miami-fl",
    "austin-tx",
    "dallas-tx",
    "chicago-il",
    "seattle-wa",
    "new-york-ny",
    "charlotte-nc",
    "nashville-tn",
    "san-francisco-ca",
];

const cityLabels: Record<string, string> = {
    "macon-ga": "Macon, GA",
    "atlanta-ga": "Atlanta, GA",
    "augusta-ga": "Augusta, GA",
    "columbus-ga": "Columbus, GA",
    "savannah-ga": "Savannah, GA",
    "miami-fl": "Miami, FL",
    "austin-tx": "Austin, TX",
    "dallas-tx": "Dallas, TX",
    "chicago-il": "Chicago, IL",
    "seattle-wa": "Seattle, WA",
    "new-york-ny": "New York, NY",
    "charlotte-nc": "Charlotte, NC",
    "nashville-tn": "Nashville, TN",
    "san-francisco-ca": "San Francisco, CA",
};

const cityRegions: { region: string; slugs: string[] }[] = [
    { region: "Georgia", slugs: ["macon-ga", "atlanta-ga", "augusta-ga", "columbus-ga", "savannah-ga"] },
    { region: "Southeast", slugs: ["charlotte-nc", "nashville-tn", "miami-fl"] },
    { region: "Texas", slugs: ["austin-tx", "dallas-tx"] },
    { region: "Other Metros", slugs: ["new-york-ny", "chicago-il", "seattle-wa", "san-francisco-ca"] },
];

const services: { slug: string; label: string }[] = [
    { slug: "custom-business-software", label: "Custom Business Software" },
    { slug: "custom-crm-development", label: "Custom CRM Development" },
    { slug: "web-applications", label: "Web Applications" },
    { slug: "mobile-app-development", label: "Mobile App Development" },
    { slug: "api-development", label: "API Development" },
    { slug: "cloud-infrastructure", label: "Cloud Infrastructure" },
    { slug: "stripe-integration", label: "Stripe Integration" },
    { slug: "subscription-billing", label: "Subscription Billing" },
    { slug: "payments-invoicing-licensing", label: "Payments & Licensing" },
    { slug: "license-server", label: "License Server" },
    { slug: "penetration-testing", label: "Penetration Testing" },
    { slug: "web-app-pentest", label: "Web App Pentest" },
    { slug: "network-pentest", label: "Network Pentest" },
    { slug: "active-directory-pentest", label: "Active Directory Pentest" },
    { slug: "mitre-attack-assessment", label: "MITRE ATT&CK Assessment" },
    { slug: "algorithmic-trading-systems", label: "Algorithmic Trading Systems" },
];

const industries: { slug: string; label: string }[] = [
    { slug: "fintech", label: "Fintech" },
    { slug: "construction", label: "Construction" },
    { slug: "insurance", label: "Insurance" },
    { slug: "e-commerce", label: "E-commerce" },
    { slug: "healthcare", label: "Healthcare" },
];

const versus: { slug: string; label: string }[] = [
    { slug: "salesforce", label: "vs Salesforce" },
    { slug: "hubspot", label: "vs HubSpot" },
    { slug: "shopify", label: "vs Shopify" },
    { slug: "big-4-pentest", label: "vs Big-4 Pentest" },
];

const resources: { href: string; label: string }[] = [
    { href: "/blog", label: "Blog" },
    { href: "/blog/custom-crm-development-guide", label: "Custom CRM Guide" },
    { href: "/blog/build-vs-buy-software-2026", label: "Build vs Buy 2026" },
    { href: "/blog/penetration-test-cost-2026", label: "Pentest Cost 2026" },
    { href: "/calculators/stripe-cost", label: "Stripe Cost Calculator" },
    { href: "/calculators/crm-roi", label: "CRM ROI Calculator" },
    { href: "/calculators/pentest-cost", label: "Pentest Cost Calculator" },
    { href: "/calculators/build-vs-buy", label: "Build vs Buy Calculator" },
    { href: "/methodology", label: "Methodology" },
    { href: "/process", label: "Our Process" },
    { href: "/faq", label: "FAQ" },
    { href: "/reviews", label: "Reviews" },
    { href: "/security", label: "Security" },
];

const company: { href: string; label: string }[] = [
    { href: "/about", label: "About" },
    { href: "/about/team", label: "Team" },
    { href: "/certifications-credentials", label: "Certifications" },
    { href: "/work", label: "Case Studies" },
    { href: "/contact", label: "Contact" },
    { href: "/reviews", label: "Reviews" },
];

const linkBase =
    "min-h-[44px] inline-flex items-center text-sm text-gray-300 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg";

const headingBase = "text-white font-semibold text-sm tracking-wide uppercase mb-2";

const subHeading = "text-gray-400 text-xs uppercase tracking-wide font-semibold mt-3 mb-1";

export function Footer() {
    const pathname = usePathname();

    if (
        pathname?.startsWith("/sales") ||
        pathname?.startsWith("/admin") ||
        pathname?.startsWith("/training") ||
        pathname?.startsWith("/questionnaire")
    ) {
        return null;
    }

    const contactBlock = (
        <address className="not-italic">
            <div className="flex flex-col gap-2">
                <a
                    href="tel:+17706521282"
                    className="min-h-[44px] inline-flex items-center gap-2 text-base font-semibold text-white hover:text-indigo-300 transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg"
                    aria-label="Call QuantLab USA at (770) 652-1282"
                >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    (770) 652-1282
                </a>
                <a
                    href="mailto:beltz@quantlabusa.dev"
                    className="min-h-[44px] inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg"
                >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    beltz@quantlabusa.dev
                </a>
                <div className="flex items-center gap-2 pt-1">
                    <a
                        href="https://linkedin.com/in/williambeltz"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-gray-300 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg"
                    >
                        <Linkedin className="w-5 h-5" aria-hidden="true" />
                    </a>
                    <a
                        href="https://x.com/williambeltz"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X / Twitter"
                        className="min-w-[44px] min-h-[44px] inline-flex items-center justify-center text-gray-300 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg"
                    >
                        <Twitter className="w-5 h-5" aria-hidden="true" />
                    </a>
                </div>
            </div>
        </address>
    );

    return (
        <footer className="border-t border-white/10 bg-quant-bg" role="contentinfo" itemScope itemType="https://schema.org/WPFooter">
            <div className="container mx-auto px-6 pt-10">
                <NewsletterInlineSignup
                    source="footer-sitewide"
                    headline="Get one frank email every other Tuesday."
                    cta="Subscribe"
                />
            </div>
            <div className="container mx-auto px-6 py-12">
                <div className="md:hidden mb-10 pb-8 border-b border-white/10">
                    <p className="text-white font-bold text-lg mb-1">QuantLab USA</p>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        Custom software development and cybersecurity services.
                    </p>
                    {contactBlock}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-10">
                    <nav aria-label="Services" className="lg:col-span-2">
                        <h2 className={headingBase}>Services</h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-4">
                            {services.map((s) => (
                                <li key={s.slug}>
                                    <Link href={`/services/${s.slug}`} className={linkBase}>
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                            <li className="sm:col-span-2 lg:col-span-2">
                                <Link href="/services" className={`${linkBase} font-medium text-indigo-300 hover:text-indigo-200`}>
                                    All Services
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <nav aria-label="Industries and comparisons">
                        <h2 className={headingBase}>Industries</h2>
                        <ul className="flex flex-col mb-4">
                            {industries.map((i) => (
                                <li key={i.slug}>
                                    <Link href={`/industries/${i.slug}`} className={linkBase}>
                                        {i.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/industries" className={`${linkBase} font-medium text-indigo-300 hover:text-indigo-200`}>
                                    All Industries
                                </Link>
                            </li>
                        </ul>
                        <h2 className={headingBase}>Compare</h2>
                        <ul className="flex flex-col">
                            {versus.map((v) => (
                                <li key={v.slug}>
                                    <Link href={`/vs/${v.slug}`} className={linkBase}>
                                        {v.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Where we serve" className="lg:col-span-2">
                        <h2 className={headingBase}>
                            <span className="inline-flex items-center gap-1">
                                <MapPin className="w-4 h-4" aria-hidden="true" />
                                Where We Serve
                            </span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                            {cityRegions.map((region) => (
                                <div key={region.region}>
                                    <p className={subHeading}>{region.region}</p>
                                    <ul className="flex flex-col">
                                        {region.slugs.map((slug) => (
                                            <li key={slug}>
                                                <Link href={`/software-development-${slug}`} className={linkBase}>
                                                    {cityLabels[slug]}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <p className="text-xs text-gray-400 mt-3">
                            Serving {citySlugs.length} cities across the U.S.
                        </p>
                    </nav>

                    <nav aria-label="Resources">
                        <h2 className={headingBase}>Resources</h2>
                        <ul className="flex flex-col">
                            {resources.map((r) => (
                                <li key={r.href}>
                                    <Link href={r.href} className={linkBase}>
                                        {r.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <nav aria-label="Company">
                            <h2 className={headingBase}>Company</h2>
                            <ul className="flex flex-col mb-6">
                                {company.map((c) => (
                                    <li key={c.href}>
                                        <Link href={c.href} className={linkBase}>
                                            {c.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="hidden md:block">{contactBlock}</div>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} QUANT LAB USA. All rights reserved.
                    </p>
                    <div className="flex flex-wrap items-center gap-x-6">
                        <Link
                            href="/privacy"
                            className="min-h-[44px] inline-flex items-center text-sm text-gray-300 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg"
                        >
                            Privacy
                        </Link>
                        <Link
                            href="/terms"
                            className="min-h-[44px] inline-flex items-center text-sm text-gray-300 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg"
                        >
                            Terms
                        </Link>
                        <a
                            href="/sitemap.xml"
                            className="min-h-[44px] inline-flex items-center text-sm text-gray-300 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg"
                        >
                            Sitemap
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
