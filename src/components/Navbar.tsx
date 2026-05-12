"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "./ui/Button";
import { ConsultationModal } from "./ConsultationModal";

// ─── Nav Data ─────────────────────────────────────────────────────────────────

type NavSection = {
    label: string;
    href?: string;
    children?: { label: string; href: string }[];
};

const NAV_SECTIONS: NavSection[] = [
    {
        label: "Services",
        href: "/services",
        children: [
            { label: "All Services", href: "/services" },
            { label: "Penetration Testing", href: "/services/penetration-testing" },
            { label: "Custom CRM Development", href: "/services/custom-crm-development" },
            { label: "Stripe Integration", href: "/services/stripe-integration" },
            { label: "Web Applications", href: "/services/web-applications" },
            { label: "MITRE ATT&CK Assessment", href: "/services/mitre-attack-assessment" },
        ],
    },
    {
        label: "Industries",
        children: [
            { label: "FinTech", href: "/industries/fintech" },
            { label: "Construction", href: "/industries/construction" },
            { label: "Insurance", href: "/industries/insurance" },
            { label: "E-Commerce", href: "/industries/e-commerce" },
            { label: "Healthcare", href: "/industries/healthcare" },
        ],
    },
    {
        label: "Compare",
        children: [
            { label: "vs Salesforce", href: "/vs/salesforce" },
            { label: "vs Shopify", href: "/vs/shopify" },
            { label: "vs Big 4 Pentest", href: "/vs/big-4-pentest" },
        ],
    },
    { label: "Calculator", href: "/calculators/stripe-cost" },
    { label: "Work", href: "/work" },
    { label: "FAQ", href: "/faq" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/#contact" },
];

const DESKTOP_LINKS = [
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
];

const PHONE_E164 = "+17706521282";
const PHONE_DISPLAY = "(770) 652-1282";
const EMAIL = "beltz@quantlabusa.dev";

// ─── Component ────────────────────────────────────────────────────────────────

export function Navbar() {
    const pathname = usePathname();
    const prefersReducedMotion = useReducedMotion();

    const [open, setOpen] = useState(false);
    const [consultOpen, setConsultOpen] = useState(false);
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});

    const drawerRef = useRef<HTMLDivElement | null>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const firstFocusableRef = useRef<HTMLAnchorElement | null>(null);

    // Hide on portal routes
    const hideOnPortal =
        pathname?.startsWith("/sales") ||
        pathname?.startsWith("/admin") ||
        pathname?.startsWith("/training") ||
        pathname?.startsWith("/questionnaire");

    // Close drawer on route change
    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    // ESC key closes drawer; also lock body scroll
    useEffect(() => {
        if (!open) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                e.preventDefault();
                setOpen(false);
                triggerRef.current?.focus();
            }
        };

        document.addEventListener("keydown", onKeyDown);

        // Move focus into the drawer on open
        const focusTimer = window.setTimeout(() => {
            firstFocusableRef.current?.focus();
        }, 50);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", onKeyDown);
            window.clearTimeout(focusTimer);
        };
    }, [open]);

    // Focus trap: keep tab focus inside drawer while open
    const handleDrawerKeyDown = useCallback((e: React.KeyboardEvent) => {
        if (e.key !== "Tab" || !drawerRef.current) return;

        const focusables = drawerRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])'
        );
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;

        if (e.shiftKey) {
            if (active === first || !drawerRef.current.contains(active)) {
                e.preventDefault();
                last.focus();
            }
        } else {
            if (active === last) {
                e.preventDefault();
                first.focus();
            }
        }
    }, []);

    if (hideOnPortal) return null;

    const toggleSection = (label: string) =>
        setExpanded((s) => ({ ...s, [label]: !s[label] }));

    const focusRing =
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-quant-bg rounded-md";

    // Animation variants gated on prefers-reduced-motion
    const drawerInitial = prefersReducedMotion ? { x: 0, opacity: 0 } : { x: "100%" };
    const drawerAnimate = prefersReducedMotion ? { x: 0, opacity: 1 } : { x: 0 };
    const drawerExit = prefersReducedMotion ? { x: 0, opacity: 0 } : { x: "100%" };
    const drawerTransition = prefersReducedMotion
        ? { duration: 0.1 }
        : { type: "spring" as const, stiffness: 320, damping: 32 };

    return (
        <>
            <motion.header
                initial={prefersReducedMotion ? { opacity: 0 } : { y: -100, opacity: 0 }}
                animate={prefersReducedMotion ? { opacity: 1 } : { y: 0, opacity: 1 }}
                transition={{ duration: prefersReducedMotion ? 0.1 : 0.8, ease: "easeOut" }}
                className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 flex items-center justify-between border-b border-white/5 bg-quant-bg/60 backdrop-blur-xl"
            >
                <Link
                    href="/"
                    className={`flex items-center gap-3 sm:gap-4 cursor-pointer ${focusRing}`}
                >
                    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                        <Image
                            src="/logo-optimized.webp"
                            alt="QuantLab Logo"
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white hidden sm:block">
                        QuantLab
                    </span>
                </Link>

                {/* Desktop nav */}
                <nav
                    aria-label="Primary"
                    className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300"
                >
                    {DESKTOP_LINKS.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={`hover:text-white transition-colors min-h-[44px] flex items-center px-1 ${focusRing}`}
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>

                {/* Right-side actions */}
                <div className="flex items-center gap-2 sm:gap-4">
                    {/* Desktop phone link */}
                    <a
                        href={`tel:${PHONE_E164}`}
                        className={`hidden md:inline-flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors min-h-[44px] px-2 ${focusRing}`}
                        aria-label={`Call QuantLab at ${PHONE_DISPLAY}`}
                    >
                        <Phone className="w-4 h-4" aria-hidden="true" />
                        <span>{PHONE_DISPLAY}</span>
                    </a>

                    <Link href="/#contact" className={`hidden sm:inline-flex ${focusRing}`}>
                        <Button size="sm" variant="glass">
                            Get in Touch
                        </Button>
                    </Link>

                    {/* Hamburger — mobile + tablet */}
                    <button
                        ref={triggerRef}
                        type="button"
                        onClick={() => setOpen(true)}
                        aria-expanded={open}
                        aria-controls="mobile-nav-drawer"
                        aria-label="Open navigation menu"
                        className={`md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] text-white hover:bg-white/5 active:bg-white/10 transition-colors ${focusRing}`}
                    >
                        <Menu className="w-6 h-6" aria-hidden="true" />
                    </button>
                </div>
            </motion.header>

            {/* Mobile drawer + backdrop */}
            <AnimatePresence>
                {open && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="mobile-nav-backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: prefersReducedMotion ? 0.1 : 0.2 }}
                            onClick={() => setOpen(false)}
                            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm md:hidden"
                            aria-hidden="true"
                        />

                        {/* Drawer */}
                        <motion.div
                            key="mobile-nav-drawer"
                            id="mobile-nav-drawer"
                            ref={drawerRef}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="mobile-nav-title"
                            onKeyDown={handleDrawerKeyDown}
                            initial={drawerInitial}
                            animate={drawerAnimate}
                            exit={drawerExit}
                            transition={drawerTransition}
                            className="fixed top-0 right-0 bottom-0 z-[70] w-[88vw] max-w-sm bg-quant-bg border-l border-white/10 shadow-2xl flex flex-col md:hidden"
                        >
                            {/* Header row */}
                            <div className="flex items-center justify-between px-4 py-4 border-b border-white/5">
                                <Link
                                    ref={firstFocusableRef}
                                    href="/"
                                    onClick={() => setOpen(false)}
                                    className={`flex items-center gap-3 ${focusRing}`}
                                >
                                    <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                        <Image
                                            src="/logo-optimized.webp"
                                            alt="QuantLab Logo"
                                            width={40}
                                            height={40}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <span
                                        id="mobile-nav-title"
                                        className="text-lg font-bold tracking-tight text-white"
                                    >
                                        QuantLab
                                    </span>
                                </Link>

                                <button
                                    type="button"
                                    onClick={() => {
                                        setOpen(false);
                                        triggerRef.current?.focus();
                                    }}
                                    aria-label="Close navigation menu"
                                    className={`inline-flex items-center justify-center min-h-[44px] min-w-[44px] text-white hover:bg-white/5 transition-colors ${focusRing}`}
                                >
                                    <X className="w-6 h-6" aria-hidden="true" />
                                </button>
                            </div>

                            {/* Scrollable nav body */}
                            <nav
                                aria-label="Mobile primary"
                                className="flex-1 overflow-y-auto overscroll-contain px-2 py-3"
                            >
                                <ul className="flex flex-col">
                                    {NAV_SECTIONS.map((section) => {
                                        const hasChildren = !!section.children?.length;
                                        const isExpanded = !!expanded[section.label];

                                        if (!hasChildren && section.href) {
                                            return (
                                                <li key={section.label}>
                                                    <Link
                                                        href={section.href}
                                                        onClick={() => setOpen(false)}
                                                        className={`block min-h-[44px] py-3 px-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-md transition-colors ${focusRing}`}
                                                    >
                                                        {section.label}
                                                    </Link>
                                                </li>
                                            );
                                        }

                                        return (
                                            <li key={section.label}>
                                                <button
                                                    type="button"
                                                    onClick={() => toggleSection(section.label)}
                                                    aria-expanded={isExpanded}
                                                    aria-controls={`mobile-nav-section-${section.label}`}
                                                    className={`w-full flex items-center justify-between min-h-[44px] py-3 px-3 text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-md transition-colors ${focusRing}`}
                                                >
                                                    <span>{section.label}</span>
                                                    <ChevronDown
                                                        className={`w-5 h-5 transition-transform ${
                                                            isExpanded ? "rotate-180" : ""
                                                        }`}
                                                        aria-hidden="true"
                                                    />
                                                </button>

                                                {isExpanded && (
                                                    <ul
                                                        id={`mobile-nav-section-${section.label}`}
                                                        className="ml-3 mt-1 mb-2 pl-3 border-l border-white/10 flex flex-col"
                                                    >
                                                        {section.children!.map((child) => (
                                                            <li key={child.href}>
                                                                <Link
                                                                    href={child.href}
                                                                    onClick={() => setOpen(false)}
                                                                    className={`block min-h-[44px] py-3 px-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-md transition-colors ${focusRing}`}
                                                                >
                                                                    {child.label}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </nav>

                            {/* Sticky bottom: CTA + tap-to-call + email */}
                            <div className="border-t border-white/10 bg-quant-bg/95 px-4 py-4 space-y-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setOpen(false);
                                        setConsultOpen(true);
                                    }}
                                    className={`w-full min-h-[48px] inline-flex items-center justify-center rounded-full bg-quant-blue text-white font-semibold px-6 py-3 shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:bg-blue-600 transition-colors ${focusRing}`}
                                >
                                    Get a Free Consultation
                                </button>

                                <a
                                    href={`tel:${PHONE_E164}`}
                                    className={`w-full min-h-[44px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md bg-white/5 hover:bg-white/10 text-white font-medium transition-colors ${focusRing}`}
                                    aria-label={`Call us at ${PHONE_DISPLAY}`}
                                >
                                    <Phone className="w-4 h-4" aria-hidden="true" />
                                    <span>{PHONE_DISPLAY}</span>
                                </a>

                                <a
                                    href={`mailto:${EMAIL}`}
                                    className={`w-full min-h-[44px] inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md text-gray-300 hover:text-white hover:bg-white/5 text-sm font-medium transition-colors break-all ${focusRing}`}
                                    aria-label={`Email us at ${EMAIL}`}
                                >
                                    <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                                    <span>{EMAIL}</span>
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <ConsultationModal open={consultOpen} onClose={() => setConsultOpen(false)} />
        </>
    );
}
