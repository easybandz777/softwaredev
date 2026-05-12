import type { Metadata } from "next";
import Link from "next/link";
import {
    ShieldCheck,
    FileBadge,
    Building2,
    Lock,
    HeartPulse,
    CreditCard,
    Server,
    BookOpen,
    Mail,
} from "lucide-react";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "Certifications & Credentials | QUANT LAB USA Standards",
    description:
        "Standards and frameworks QUANT LAB USA aligns to: OWASP ASVS Level 2, MITRE ATT&CK, PCI-DSS-aware Stripe, HIPAA-aware builds, SOC 2 readiness, Georgia entity.",
    openGraph: {
        title: "Certifications & Credentials | QUANT LAB USA Standards",
        description:
            "Frameworks and standards QUANT LAB USA aligns to. Honest framing, not certification theater.",
        url: "https://quantlabusa.dev/certifications-credentials",
        type: "website",
    },
    alternates: {
        canonical: "https://quantlabusa.dev/certifications-credentials",
    },
};

const credentialsStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "ItemList",
            "@id": "https://quantlabusa.dev/certifications-credentials#list",
            name: "QUANT LAB USA Standards Alignment",
            itemListElement: [
                {
                    "@type": "DefinedTerm",
                    "@id": "https://quantlabusa.dev/certifications-credentials#owasp-asvs",
                    name: "OWASP ASVS Level 2 Alignment",
                    description:
                        "QUANT LAB USA web application penetration tests are scoped and executed against the OWASP Application Security Verification Standard, Level 2.",
                    inDefinedTermSet: "OWASP ASVS",
                },
                {
                    "@type": "DefinedTerm",
                    "@id": "https://quantlabusa.dev/certifications-credentials#mitre",
                    name: "MITRE ATT&CK Framework Usage",
                    description:
                        "Adversarial assessments and red team engagements map findings to MITRE ATT&CK tactics and techniques for executive reporting.",
                    inDefinedTermSet: "MITRE ATT&CK",
                },
                {
                    "@type": "DefinedTerm",
                    "@id": "https://quantlabusa.dev/certifications-credentials#pci",
                    name: "PCI-DSS-Aware Stripe Builds",
                    description:
                        "Payment integrations are architected to keep cardholder data off client and QUANT LAB infrastructure, using Stripe Checkout, Elements, and Payment Element flows.",
                },
                {
                    "@type": "DefinedTerm",
                    "@id": "https://quantlabusa.dev/certifications-credentials#hipaa",
                    name: "HIPAA-Aware Healthcare Builds",
                    description:
                        "Healthcare-adjacent custom software is built with HIPAA Security Rule considerations: encrypted PHI at rest and in transit, audit logging, and BAA-ready architecture.",
                },
                {
                    "@type": "DefinedTerm",
                    "@id": "https://quantlabusa.dev/certifications-credentials#soc2",
                    name: "SOC 2 Readiness Alignment",
                    description:
                        "Internal controls, access management, secrets handling, and change management aligned to SOC 2 Type I readiness, intended to support clients pursuing their own SOC 2 audit.",
                },
                {
                    "@type": "DefinedTerm",
                    "@id": "https://quantlabusa.dev/certifications-credentials#ga-entity",
                    name: "Georgia Business Entity",
                    description:
                        "QUANT LAB USA INC, Domestic Profit Corporation registered in the State of Georgia, Secretary of State Control Number 26086454, EIN 42-2039870.",
                },
                {
                    "@type": "DefinedTerm",
                    "@id": "https://quantlabusa.dev/certifications-credentials#vercel",
                    name: "Vercel Deployment Standards",
                    description:
                        "Production deployments on Vercel with environment-isolated secrets, branch-protected promotion, and preview deployments per pull request.",
                },
            ],
        },
        {
            "@type": "Organization",
            "@id": "https://quantlabusa.dev/#organization",
            name: "QUANT LAB USA INC",
            legalName: "QUANT LAB USA INC",
            taxID: "42-2039870",
            identifier: [
                {
                    "@type": "PropertyValue",
                    propertyID: "GA-SOS-Control-Number",
                    value: "26086454",
                },
                {
                    "@type": "PropertyValue",
                    propertyID: "EIN",
                    value: "42-2039870",
                },
            ],
        },
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://quantlabusa.dev",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Certifications & Credentials",
                    item: "https://quantlabusa.dev/certifications-credentials",
                },
            ],
        },
    ],
};

const items = [
    {
        icon: ShieldCheck,
        framework: "OWASP ASVS Level 2",
        status: "Aligned",
        body: "Every web application penetration test we deliver is scoped against the OWASP Application Security Verification Standard, Level 2. Findings reports cross-reference ASVS sections so your developers can fix the root cause, not just the symptom.",
        link: "/services/web-app-pentest",
        linkLabel: "Web app pentests",
    },
    {
        icon: FileBadge,
        framework: "MITRE ATT&CK Framework",
        status: "Mapped",
        body: "Adversarial assessments map observed techniques to MITRE ATT&CK tactics. Executive summaries reference tactic IDs so leadership can read a report without translating from infosec jargon, and remediation can be tracked against industry-standard nomenclature.",
        link: "/services/mitre-attack-assessment",
        linkLabel: "MITRE ATT&CK assessments",
    },
    {
        icon: CreditCard,
        framework: "PCI-DSS",
        status: "Aware (not certified)",
        body: "We build Stripe integrations using Checkout, Elements, and Payment Element flows so that cardholder data never lands in client infrastructure or QUANT LAB systems. The goal is to keep clients in the lowest PCI scope possible. We are not a PCI-certified service provider, and Stripe is the certified processor.",
        link: "/services/stripe-integration",
        linkLabel: "Stripe integration",
    },
    {
        icon: HeartPulse,
        framework: "HIPAA",
        status: "Aware (not a Covered Entity)",
        body: "Healthcare-adjacent builds are architected with HIPAA Security Rule considerations in mind: encrypted PHI at rest and in transit, granular audit logging, role-based access, and infrastructure that can sit behind a Business Associate Agreement when one is needed with a hosting provider. We are not a HIPAA-certified vendor and we will tell you so before any contract.",
        link: "/services/custom-business-software",
        linkLabel: "Custom business software",
    },
    {
        icon: Lock,
        framework: "SOC 2",
        status: "Readiness aligned",
        body: "Our internal controls (access management, secrets handling, change management, logging) are aligned with SOC 2 Type I readiness. That alignment is intended to make us a low-friction vendor for clients pursuing their own SOC 2 audit. We have not undergone a SOC 2 audit ourselves, and we will not claim to be SOC 2 certified.",
        link: "/security",
        linkLabel: "Our security practices",
    },
    {
        icon: Building2,
        framework: "Georgia Business Entity",
        status: "Registered",
        body: "QUANT LAB USA INC is a Domestic Profit Corporation registered with the Georgia Secretary of State, Control Number 26086454, EIN 42-2039870. Registered office: 3489 Rocky Creek Dr, Douglasville GA 30135. The company is marketed from Macon, Georgia and serves clients nationally.",
        link: "/contact",
        linkLabel: "Contact corporate",
    },
    {
        icon: Server,
        framework: "Vercel Deployment Standards",
        status: "Implemented",
        body: "Production deployments run on Vercel with environment-isolated secrets managed in the platform (never committed to source), automatic preview deployments per pull request, branch-protected promotion to production, and instant rollback to any prior deployment.",
        link: "/services/cloud-infrastructure",
        linkLabel: "Cloud infrastructure",
    },
];

export default function CredentialsPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(credentialsStructuredData),
                }}
            />

            <section className="pt-32 pb-14 relative overflow-hidden">
                <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-quant-blue/8 rounded-full blur-[160px] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-sky-400">Home</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-300">Certifications & Credentials</span>
                    </nav>
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                        Certifications & Credentials
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        What we are aligned to, and what we are not.
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                        Honest framing of the standards QUANT LAB USA aligns to. We
                        distinguish carefully between aligned with, aware of, and
                        certified in. Three different things.
                    </p>
                </div>
            </section>

            <section className="py-12 relative">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-7">
                        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-4">
                            Up front
                        </p>
                        <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4">
                            <p>
                                QUANT LAB USA is a founder-led shop. We are not SOC 2
                                audited. We are not a PCI-certified service provider. We
                                are not a HIPAA-certified vendor. Anyone who tells you
                                their small shop holds all three is selling you a story.
                            </p>
                            <p>
                                What we do is build to those standards, document the
                                methodology, and make our work easy for your auditor to
                                understand. The table below is the honest version of which
                                frameworks shape our engineering and which ones we hold
                                formal certifications for.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Standards Alignment
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 leading-tight">
                        Frameworks that shape how we build.
                    </h2>
                    <div className="space-y-5">
                        {items.map(({ icon: Icon, framework, status, body, link, linkLabel }) => (
                            <div
                                key={framework}
                                className="rounded-2xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm p-7"
                            >
                                <div className="flex items-start gap-5">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                                        <Icon className="w-6 h-6 text-sky-400" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-wrap items-center gap-3 mb-3">
                                            <h3 className="text-lg font-bold text-white">
                                                {framework}
                                            </h3>
                                            <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium border border-sky-500/30 bg-sky-500/10 text-sky-300">
                                                {status}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                                            {body}
                                        </p>
                                        <Link
                                            href={link}
                                            className="inline-flex items-center text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors"
                                        >
                                            {linkLabel} →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Entity Verification
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-7 leading-tight">
                        Verifiable company information.
                    </h2>
                    <div className="rounded-2xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm p-7 space-y-4">
                        <div>
                            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-1">
                                Legal Name
                            </p>
                            <p className="text-gray-200">QUANT LAB USA INC</p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-1">
                                Entity Type
                            </p>
                            <p className="text-gray-200">Domestic Profit Corporation, Georgia</p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-1">
                                Georgia SOS Control Number
                            </p>
                            <p className="text-gray-200 font-mono">26086454</p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-1">
                                Federal EIN
                            </p>
                            <p className="text-gray-200 font-mono">42-2039870</p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-1">
                                Registered Office
                            </p>
                            <p className="text-gray-200">3489 Rocky Creek Dr, Douglasville GA 30135</p>
                        </div>
                        <div>
                            <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-400 mb-1">
                                Operating Market
                            </p>
                            <p className="text-gray-200">Macon, GA — serving clients nationally</p>
                        </div>
                    </div>
                    <p className="text-gray-400 text-sm mt-6 leading-relaxed">
                        Entity verification is searchable on the{" "}
                        <a
                            href="https://ecorp.sos.ga.gov/BusinessSearch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sky-400 hover:underline"
                        >
                            Georgia Secretary of State business search
                        </a>
                        . W-9 available on request via{" "}
                        <Link href="/contact" className="text-sky-400 hover:underline">
                            our contact page
                        </Link>
                        .
                    </p>
                </div>
            </section>

            <section className="py-20 relative">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Founder Credentials
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-7 leading-tight">
                        Hands-on, not paper.
                    </h2>
                    <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5">
                        <p>
                            Bill Beltz, the founder and lead engineer, is a full-stack
                            software developer with a decade-plus of production
                            experience and an active offensive-security practice. The
                            credentials that matter for client engagements are the
                            standards alignment above and a portfolio of shipped systems
                            you can read about on the{" "}
                            <Link href="/work" className="text-sky-400 hover:underline">
                                work page
                            </Link>
                            .
                        </p>
                        <p>
                            We do not list a wall of acronyms. We will list the
                            frameworks our work is actually held to, name them
                            specifically, and let you pressure-test the methodology on a
                            discovery call. For more on who is actually doing the work,
                            see{" "}
                            <Link href="/about/team" className="text-sky-400 hover:underline">
                                team & leadership
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Continuing Education
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-7 leading-tight">
                        Standards move, so do we.
                    </h2>
                    <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5">
                        <p>
                            OWASP releases. MITRE ATT&CK techniques get added. Stripe
                            changes how Payment Element handles SCA. We track the
                            changes that affect client work and update our internal
                            playbooks accordingly. The alignment claims on this page are
                            reviewed quarterly.
                        </p>
                        <p>
                            For long-form writing on how we apply these standards in
                            practice, see the deep-dives on{" "}
                            <Link href="/blog/penetration-test-cost-2026" className="text-sky-400 hover:underline">
                                penetration test cost and scoping
                            </Link>
                            ,{" "}
                            <Link href="/blog/custom-crm-development-guide" className="text-sky-400 hover:underline">
                                custom CRM development
                            </Link>
                            , and{" "}
                            <Link href="/blog/best-penetration-testing-companies-georgia-2026" className="text-sky-400 hover:underline">
                                pentest firms in Georgia
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 relative border-t border-white/5 bg-black/40">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <BookOpen className="w-10 h-10 text-sky-400 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Need a custom compliance write-up?
                    </h2>
                    <p className="text-gray-400 text-lg mb-3 leading-relaxed">
                        If your procurement team needs a specific standards or
                        compliance attestation, we will prepare one for the engagement.
                        Tell us what you need and we will tell you what we can credibly
                        attest to.
                    </p>
                    <p className="text-gray-400 text-sm mb-8 flex items-center justify-center gap-2 flex-wrap">
                        <Mail className="w-4 h-4" />
                        Call{" "}
                        <a
                            href="tel:+17706521282"
                            className="inline-flex items-center min-h-[44px] text-sky-400 hover:text-sky-300 transition-colors"
                        >
                            (770) 652-1282
                        </a>
                        <span>or email</span>
                        <a
                            href="mailto:beltz@quantlabusa.dev"
                            className="text-sky-400 hover:text-sky-300 transition-colors"
                        >
                            beltz@quantlabusa.dev
                        </a>
                    </p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                        <ConsultationCTA label="Book a Consultation" source="credentials-page" />
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                        >
                            Talk to Bill
                        </Link>
                        <Link
                            href="/services/penetration-testing"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                        >
                            See penetration testing
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
