import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    Linkedin,
    Github,
    MapPin,
    Mail,
    Phone,
    Code2,
    Shield,
    Database,
    GitBranch,
    Users,
} from "lucide-react";
import { ConsultationCTA } from "@/components/ConsultationCTA";

export const metadata: Metadata = {
    title: "Team & Leadership | QUANT LAB USA — Founder-Led Engineering",
    description:
        "Meet Bill Beltz, founder and lead engineer at QUANT LAB USA. Founder-led software development and offensive security based in Georgia, no handoffs.",
    openGraph: {
        title: "Team & Leadership | QUANT LAB USA — Founder-Led Engineering",
        description:
            "Founder-led software and security in Georgia. The engineer you talk to is the engineer who ships the code.",
        url: "https://quantlabusa.dev/about/team",
        type: "website",
    },
    alternates: {
        canonical: "https://quantlabusa.dev/about/team",
    },
};

const teamStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": "https://quantlabusa.dev/#william-beltz",
            name: "William Beltz",
            givenName: "William",
            familyName: "Beltz",
            alternateName: "Bill Beltz",
            jobTitle: "Founder & Lead Engineer",
            description:
                "Founder and lead engineer at QUANT LAB USA. Full-stack software engineer and offensive security practitioner based in Georgia.",
            url: "https://quantlabusa.dev/about/team",
            image: "https://quantlabusa.dev/founder.jpg",
            sameAs: [
                "https://linkedin.com/in/williambeltz",
                "https://github.com/williambeltz",
            ],
            worksFor: {
                "@id": "https://quantlabusa.dev/#organization",
            },
            knowsAbout: [
                "Custom Software Development",
                "Penetration Testing",
                "Web Application Security",
                "Algorithmic Trading Systems",
                "Stripe Integration",
                "Custom CRM Development",
                "PostgreSQL",
                "Next.js",
                "TypeScript",
                "Node.js",
                "OWASP ASVS",
                "MITRE ATT&CK",
            ],
            address: {
                "@type": "PostalAddress",
                addressLocality: "Macon",
                addressRegion: "GA",
                addressCountry: "US",
            },
        },
        {
            "@type": "Organization",
            "@id": "https://quantlabusa.dev/#organization",
            name: "QUANT LAB USA",
            legalName: "QUANT LAB USA INC",
            url: "https://quantlabusa.dev",
            founder: { "@id": "https://quantlabusa.dev/#william-beltz" },
            employee: { "@id": "https://quantlabusa.dev/#william-beltz" },
            telephone: "+17706521282",
            email: "beltz@quantlabusa.dev",
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
                    name: "About",
                    item: "https://quantlabusa.dev/about",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Team & Leadership",
                    item: "https://quantlabusa.dev/about/team",
                },
            ],
        },
    ],
};

const focusAreas = [
    {
        icon: Code2,
        title: "Full-Stack Engineering",
        body: "Next.js, TypeScript, React, Node.js, Python. Built and shipped over twenty production systems across trading, payments, operations, and custom CRMs.",
    },
    {
        icon: Shield,
        title: "Offensive Security",
        body: "Web application and network penetration testing aligned with OWASP ASVS Level 2 and the MITRE ATT&CK framework. Authenticated app pentests, infrastructure assessments, and Active Directory engagements.",
    },
    {
        icon: Database,
        title: "Payment & Trading Infrastructure",
        body: "Stripe integrations, subscription billing, license-server work, and live algorithmic trading systems. Systems that touch real money get extra paranoia by default.",
    },
    {
        icon: GitBranch,
        title: "Architecture & Code Review",
        body: "Owning the architecture from data model up. Every line of production code on a QUANT LAB engagement is reviewed by the founder, regardless of who wrote it.",
    },
];

const credentials = [
    "Decade-plus full-stack engineering experience",
    "Hands-on offensive security practitioner",
    "OWASP ASVS Level 2 methodology",
    "MITRE ATT&CK informed assessments",
    "PCI-DSS-aware Stripe builds",
    "Direct work in financial services, automotive, construction, entertainment",
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(teamStructuredData),
                }}
            />

            <section className="pt-32 pb-14 relative overflow-hidden">
                <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-quant-blue/8 rounded-full blur-[160px] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-sky-400">Home</Link>
                        <span className="mx-2">/</span>
                        <Link href="/about" className="hover:text-sky-400">About</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-300">Team & Leadership</span>
                    </nav>
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                        Team & Leadership
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Who is actually building your software.
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                        QUANT LAB USA is founder-led engineering. One principal engineer, a
                        small network of vetted contractors, no salespeople, no account
                        managers. Here is who you will be working with.
                    </p>
                </div>
            </section>

            <section className="py-16 relative">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="flex flex-col md:flex-row items-start gap-10 mb-12">
                        <div className="flex-shrink-0">
                            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden border border-white/10">
                                <Image
                                    src="/founder.jpg"
                                    alt="Bill Beltz, founder and lead engineer of QUANT LAB USA"
                                    fill
                                    sizes="224px"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
                                Bill Beltz
                            </h2>
                            <p className="text-sky-400 text-sm font-medium tracking-wide mb-5">
                                Founder & Lead Engineer · QUANT LAB USA INC
                            </p>
                            <div className="text-gray-300 text-base leading-relaxed space-y-4">
                                <p>
                                    I am a full-stack software engineer and offensive
                                    security practitioner based in Georgia. I founded QUANT
                                    LAB USA INC because I kept watching businesses get sold
                                    software they could not use and pentest reports they could
                                    not act on. The premise of this company is simple: the
                                    person who pitches the work is the person who writes the
                                    code or runs the test, end of story.
                                </p>
                                <p>
                                    My background is heavy on systems that touch real
                                    money or real operations. Live trading platforms.
                                    Payment infrastructure built on Stripe. Operations
                                    software that day-to-day businesses depend on. The
                                    security work grew out of the same instinct. If you
                                    build systems for a living, you should know how they
                                    break, and a real adversarial perspective makes the
                                    software you build cleaner from the first commit.
                                </p>
                                <p>
                                    I work directly with every client from the first call
                                    through launch and support. No project coordinators
                                    sitting between you and engineering. No subcontracted
                                    discovery. When you have a blunt question about whether
                                    a feature is really necessary, you email me and I answer
                                    it.
                                </p>
                            </div>

                            <div className="flex items-center gap-5 mt-6 flex-wrap">
                                <a
                                    href="https://linkedin.com/in/williambeltz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://github.com/williambeltz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    aria-label="GitHub"
                                >
                                    <Github className="w-5 h-5" />
                                </a>
                                <span className="text-gray-700">·</span>
                                <div className="flex items-center gap-2 text-gray-400 text-sm">
                                    <MapPin className="w-4 h-4" />
                                    Macon, Georgia
                                </div>
                                <a
                                    href="tel:+17706521282"
                                    className="flex items-center gap-2 text-sky-400 hover:text-sky-300 transition-colors text-sm"
                                >
                                    <Phone className="w-4 h-4" />
                                    (770) 652-1282
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-4xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Areas of Focus
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 leading-tight">
                        What I actually do, day to day.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {focusAreas.map(({ icon: Icon, title, body }) => (
                            <div
                                key={title}
                                className="rounded-2xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm p-7"
                            >
                                <Icon className="w-6 h-6 text-sky-400 mb-4" />
                                <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 relative">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Why Founder-Led
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-7 leading-tight">
                        Solo by design, not by accident.
                    </h2>
                    <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5">
                        <p>
                            Most agencies sell you the senior engineer in the pitch meeting
                            and staff the build with juniors. QUANT LAB does not do that.
                            When you sign with us, you get a founder who has been writing
                            production software for a decade-plus, and that is who stays on
                            the project from kickoff to handoff.
                        </p>
                        <p>
                            When an engagement needs additional hands, I bring in a small
                            network of vetted contract engineers I have worked with before.
                            They are not subcontracted out to an offshore agency. Code
                            review and every architecture decision stay in-house with me,
                            and the contractor model is disclosed up front, never hidden
                            behind a logo.
                        </p>
                        <p>
                            This is a feature, not a bug. It is why our{" "}
                            <Link href="/methodology" className="text-sky-400 hover:underline">
                                methodology
                            </Link>
                            {" "}is tight, why our{" "}
                            <Link href="/security" className="text-sky-400 hover:underline">
                                security practices
                            </Link>
                            {" "}are actually enforced, and why we can deliver a custom CRM
                            build in the timeline we quote without a six-week delay for a
                            new project manager to ramp up.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-4xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Credentials & Experience
                    </p>
                    <div className="rounded-2xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm p-7">
                        <ul className="space-y-3">
                            {credentials.map((c) => (
                                <li
                                    key={c}
                                    className="flex items-start gap-3 text-gray-300 text-sm md:text-base"
                                >
                                    <span className="text-sky-400 mt-1">•</span>
                                    <span>{c}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-gray-400 text-sm mt-6 leading-relaxed">
                            For a full breakdown of our methodology alignment with industry
                            standards, see{" "}
                            <Link
                                href="/certifications-credentials"
                                className="text-sky-400 hover:underline"
                            >
                                certifications & credentials
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 relative">
                <div className="container mx-auto px-6 max-w-3xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-5">
                        Extended Network
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-7 leading-tight">
                        Trusted contractors when projects need them.
                    </h2>
                    <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-5">
                        <p>
                            On the rare engagement that exceeds what a single senior
                            engineer can carry, we extend the team with a small bench of
                            contract engineers, designers, and security specialists we have
                            worked with for years. None of them get to ship code without
                            review. None of them speak to clients without me on the call.
                            The bench exists to keep timelines honest, not to multiply
                            billable hours.
                        </p>
                        <p>
                            We are not opaque about this. If a contractor is going to
                            touch your project, you will know who, what they are working
                            on, and how their work passes through my review before merge.
                            See our{" "}
                            <Link href="/process" className="text-sky-400 hover:underline">
                                full delivery process
                            </Link>
                            {" "}for how that works in practice.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 relative border-t border-white/5 bg-black/40">
                <div className="container mx-auto px-6 max-w-3xl text-center">
                    <Users className="w-10 h-10 text-sky-400 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Want to know if we are a fit?
                    </h2>
                    <p className="text-gray-400 text-lg mb-3 leading-relaxed">
                        Start with a call. I will tell you whether we can help, and if we
                        cannot, I will point you somewhere better.
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
                        <ConsultationCTA label="Book a Consultation" source="team-page" />
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                        >
                            Contact Bill directly
                        </Link>
                        <Link
                            href="/work"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-sm font-medium border border-white/10 text-gray-300 hover:bg-white/5 hover:text-white transition-colors"
                        >
                            See our work
                        </Link>
                    </div>
                    <div className="mt-10 text-sm text-gray-500 leading-relaxed">
                        <p>
                            Related reading:{" "}
                            <Link href="/services/custom-business-software" className="text-sky-400 hover:underline">
                                custom business software
                            </Link>
                            ,{" "}
                            <Link href="/services/penetration-testing" className="text-sky-400 hover:underline">
                                penetration testing
                            </Link>
                            ,{" "}
                            <Link href="/services/custom-crm-development" className="text-sky-400 hover:underline">
                                custom CRM development
                            </Link>
                            ,{" "}
                            <Link href="/blog/custom-crm-development-guide" className="text-sky-400 hover:underline">
                                the CRM development guide
                            </Link>
                            , and{" "}
                            <Link href="/blog/how-to-choose-a-software-development-company-checklist" className="text-sky-400 hover:underline">
                                how to choose a software development company
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
