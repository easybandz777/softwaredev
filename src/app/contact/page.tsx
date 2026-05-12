import type { Metadata } from "next";
import { Phone, Mail, Clock, Shield, MapPin } from "lucide-react";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
    title: "Contact QUANT LAB USA | Custom Software & Cybersecurity",
    description:
        "Talk to William Beltz about custom software development, penetration testing, custom CRMs, Stripe integration, or any of our 14 service areas.",
    alternates: {
        canonical: "https://quantlabusa.dev/contact",
    },
    openGraph: {
        title: "Contact QUANT LAB USA | Custom Software & Cybersecurity",
        description:
            "Talk to William Beltz about custom software development, penetration testing, custom CRMs, Stripe integration, or any of our 14 service areas.",
        url: "https://quantlabusa.dev/contact",
        siteName: "QUANT LAB USA",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact QUANT LAB USA | Custom Software & Cybersecurity",
        description:
            "Talk to William Beltz about custom software development, penetration testing, custom CRMs, Stripe integration, or any of our 14 service areas.",
    },
    robots: { index: true, follow: true },
};

// ContactPage schema, referencing the sitewide Organization @id from layout
const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://quantlabusa.dev/contact#contactpage",
    url: "https://quantlabusa.dev/contact",
    name: "Contact QUANT LAB USA",
    description:
        "Get in touch with William Beltz at QUANT LAB USA for custom software development, penetration testing, custom CRMs, Stripe integration, and more.",
    inLanguage: "en-US",
    isPartOf: { "@id": "https://quantlabusa.dev/#website" },
    about: { "@id": "https://quantlabusa.dev/#organization" },
    mainEntity: {
        "@id": "https://quantlabusa.dev/#organization",
        "@type": "Organization",
        name: "QUANT LAB USA",
        email: "beltz@quantlabusa.dev",
        telephone: "+17706521282",
        contactPoint: [
            {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "beltz@quantlabusa.dev",
                telephone: "+17706521282",
                areaServed: "US",
                availableLanguage: ["English"],
            },
            {
                "@type": "ContactPoint",
                contactType: "customer support",
                email: "beltz@quantlabusa.dev",
                telephone: "+17706521282",
                areaServed: "US",
                availableLanguage: ["English"],
            },
        ],
    },
};

const SERVICE_CITIES = [
    "Macon, GA",
    "Atlanta, GA",
    "Augusta, GA",
    "Columbus, GA",
    "Savannah, GA",
    "Charlotte, NC",
    "Nashville, TN",
    "Miami, FL",
    "Austin, TX",
    "Dallas, TX",
    "Chicago, IL",
    "New York, NY",
    "San Francisco, CA",
    "Seattle, WA",
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-quant-bg text-quant-text">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(contactPageSchema),
                }}
            />

            {/* Hero */}
            <section className="pt-32 pb-14 relative overflow-hidden">
                <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-quant-blue/8 rounded-full blur-[160px] pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <span className="inline-block text-quant-blue text-sm font-semibold tracking-[0.2em] uppercase mb-5">
                        Contact
                    </span>
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                        Get in touch
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                        Founder-led engagements. You email the engineer who writes the code,
                        not an account manager. We respond within 24 hours, every business day.
                    </p>

                    {/* Trust strip */}
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl">
                        <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-[#0d1526]/60 px-4 py-3">
                            <Clock className="w-4 h-4 text-sky-400 flex-shrink-0" />
                            <span className="text-sm text-gray-300">24-hour response</span>
                        </div>
                        <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-[#0d1526]/60 px-4 py-3">
                            <Shield className="w-4 h-4 text-sky-400 flex-shrink-0" />
                            <span className="text-sm text-gray-300">NDA on request</span>
                        </div>
                        <div className="flex items-center gap-3 rounded-xl border border-white/8 bg-[#0d1526]/60 px-4 py-3 col-span-2 md:col-span-1">
                            <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0" />
                            <span className="text-sm text-gray-300">Macon, GA · serving US-wide</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Direct contact methods */}
            <section className="py-12 relative border-t border-white/5">
                <div className="container mx-auto px-6 max-w-4xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-6">
                        Talk to William directly
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Phone */}
                        <a
                            href="tel:+17706521282"
                            className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm p-6 hover:border-sky-400/40 hover:bg-[#0d1526] transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-sky-400/10 border border-sky-400/20 group-hover:bg-sky-400/15 transition-colors">
                                <Phone className="w-5 h-5 text-sky-400" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-500 mb-1">
                                    Phone — tap to call
                                </p>
                                <p className="text-xl font-bold text-white">
                                    (770) 652-1282
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Mon–Fri · 9am–5pm ET
                                </p>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:beltz@quantlabusa.dev"
                            className="group flex items-center gap-4 rounded-2xl border border-white/8 bg-[#0d1526]/70 backdrop-blur-sm p-6 hover:border-sky-400/40 hover:bg-[#0d1526] transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-sky-400/10 border border-sky-400/20 group-hover:bg-sky-400/15 transition-colors">
                                <Mail className="w-5 h-5 text-sky-400" />
                            </div>
                            <div>
                                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gray-500 mb-1">
                                    Email — direct line
                                </p>
                                <p className="text-xl font-bold text-white break-all">
                                    beltz@quantlabusa.dev
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Reply within 24 hours
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Embedded contact / consultation form */}
            <Contact />

            {/* Service area / map placeholder */}
            <section className="py-20 relative border-t border-white/5 bg-black/30">
                <div className="container mx-auto px-6 max-w-5xl">
                    <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sky-400 mb-4 text-center">
                        Where we work
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 text-center leading-tight">
                        Service-area business across 14 US cities
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-12">
                        Headquartered in Macon, Georgia, we deliver custom software and
                        cybersecurity engagements remotely to clients across the continental
                        US — with on-site availability for engagements that need it.
                    </p>

                    {/* Map placeholder */}
                    <div
                        className="relative rounded-2xl border border-white/8 bg-gradient-to-br from-[#0d1526] via-[#0a0f1e] to-[#0d1526] overflow-hidden mb-10"
                        role="img"
                        aria-label="Map placeholder for QUANT LAB USA service areas across 14 US cities"
                    >
                        {/* Dotted/grid background suggesting a map */}
                        <div
                            className="absolute inset-0 opacity-30"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at 1px 1px, rgba(56,189,248,0.18) 1px, transparent 0)",
                                backgroundSize: "24px 24px",
                            }}
                        />
                        <div className="relative z-10 flex flex-col items-center justify-center py-16 px-6">
                            <div className="w-14 h-14 rounded-2xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center mb-5">
                                <MapPin className="w-6 h-6 text-sky-400" />
                            </div>
                            <p className="text-white font-semibold text-lg mb-1">
                                Remote-first, US-wide
                            </p>
                            <p className="text-gray-400 text-sm text-center max-w-md">
                                Based in Macon, GA. We work with clients in 14 metros and ship
                                production software on every timezone in the contiguous US.
                            </p>
                        </div>
                    </div>

                    {/* City grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {SERVICE_CITIES.map((city) => (
                            <div
                                key={city}
                                className="flex items-center gap-2.5 rounded-xl border border-white/8 bg-[#0d1526]/60 px-4 py-2.5"
                            >
                                <MapPin className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                                <span className="text-sm text-gray-300">{city}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
