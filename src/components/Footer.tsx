"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

// --- Footer link maps ---------------------------------------------------------
// City slugs mirror src/app/sitemap.ts. Display labels are derived from slugs so
// the Footer stays in sync if a new city is added there.
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

// Surface a curated subset of cities (≈6) in the Footer column; "All cities →"
// link drops users on /services for the full set. Keep slugs aligned with sitemap.
const featuredCitySlugs = [
    "macon-ga",
    "atlanta-ga",
    "augusta-ga",
    "charlotte-nc",
    "austin-tx",
    "miami-fl",
];

const services: { slug: string; label: string }[] = [
    { slug: "custom-business-software", label: "Custom Business Software" },
    { slug: "custom-crm-development", label: "Custom CRM Development" },
    { slug: "web-applications", label: "Web Applications (Next.js)" },
    { slug: "stripe-integration", label: "Stripe Integration" },
    { slug: "penetration-testing", label: "Penetration Testing" },
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
    { slug: "shopify", label: "vs Shopify" },
    { slug: "big-4-pentest", label: "vs Big-4 Pentest" },
];

// --- Shared link styles -------------------------------------------------------
// All interactive elements meet WCAG 2.5.8 (44x44 tap target) and WCAG 2.4.7
// (visible focus). text-gray-300 on bg-quant-bg passes WCAG AA contrast.
const linkBase =
    "min-h-[44px] inline-flex items-center text-sm text-gray-300 hover:text-white transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg";

const headingBase = "text-white font-semibold text-sm tracking-wide uppercase mb-2";

export function Footer() {
    const pathname = usePathname();

    // Hide footer on portal/admin routes
    if (
        pathname?.startsWith("/sales") ||
        pathname?.startsWith("/admin") ||
        pathname?.startsWith("/training") ||
        pathname?.startsWith("/questionnaire")
    ) {
        return null;
    }

    // Contact block — declared once and rendered in two slots: first on mobile,
    // inside Column 4 on >=md. Keeping the markup single-sourced avoids drift.
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
        <footer className="border-t border-white/10 bg-quant-bg" role="contentinfo">
            <div className="container mx-auto px-6 py-12">
                {/* Mobile-first contact block (visible <md only). On mobile the
                    most actionable elements (call, email, social) come BEFORE
                    the long link columns. */}
                <div className="md:hidden mb-10 pb-8 border-b border-white/10">
                    <p className="text-white font-bold text-lg mb-1">QuantLab USA</p>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        Custom software development and cybersecurity services.
                    </p>
                    {contactBlock}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                    {/* Column 1 — Services */}
                    <nav aria-label="Services">
                        <h2 className={headingBase}>Services</h2>
                        <ul className="flex flex-col">
                            {services.map((s) => (
                                <li key={s.slug}>
                                    <Link href={`/services/${s.slug}`} className={linkBase}>
                                        {s.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/services" className={`${linkBase} font-medium text-indigo-300 hover:text-indigo-200`}>
                                    All Services →
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Column 2 — Industries + Compare */}
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

                    {/* Column 3 — Where We Serve */}
                    <nav aria-label="Where we serve">
                        <h2 className={headingBase}>
                            <span className="inline-flex items-center gap-1">
                                <MapPin className="w-4 h-4" aria-hidden="true" />
                                Where We Serve
                            </span>
                        </h2>
                        <ul className="flex flex-col">
                            {featuredCitySlugs.map((slug) => (
                                <li key={slug}>
                                    <Link href={`/software-development-${slug}`} className={linkBase}>
                                        {cityLabels[slug]}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/services" className={`${linkBase} font-medium text-indigo-300 hover:text-indigo-200`}>
                                    All {citySlugs.length} cities →
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Column 4 — QuantLab USA (links + desktop contact block) */}
                    <div>
                        <nav aria-label="Company">
                            <h2 className={headingBase}>QuantLab USA</h2>
                            <ul className="flex flex-col mb-6">
                                <li>
                                    <Link href="/about" className={linkBase}>About</Link>
                                </li>
                                <li>
                                    <Link href="/work" className={linkBase}>Case Studies</Link>
                                </li>
                                <li>
                                    <Link href="/faq" className={linkBase}>FAQ</Link>
                                </li>
                                <li>
                                    <Link href="/calculators/stripe-cost" className={linkBase}>
                                        Stripe Cost Calculator
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className={linkBase}>Contact</Link>
                                </li>
                            </ul>
                        </nav>
                        {/* Desktop contact block (visible >=md only). */}
                        <div className="hidden md:block">{contactBlock}</div>
                    </div>
                </div>

                {/* Bottom bar */}
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
                    </div>
                </div>
            </div>
        </footer>
    );
}
