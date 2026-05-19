import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FuturisticBackground } from "@/components/FuturisticBackground";
import { PageTracker } from "@/components/PageTracker";
import { AgentationWrapper } from "@/components/AgentationWrapper";
import { Analytics } from "@/components/Analytics";
import { ConsentBanner } from "@/components/ConsentBanner";
import { SocialProofBar } from "@/components/SocialProofBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://quantlabusa.dev"),
  title: {
    default: "QUANT LAB USA — Custom Software Development & Cybersecurity",
    template: "%s",
  },
  description:
    "USA-based custom software, CRMs, Stripe integrations, and penetration testing. Founder-led, no offshore handoff — serving 14 US cities in 2026.",
  openGraph: {
    title: "QUANT LAB USA — Custom Software Development & Cybersecurity",
    description:
      "USA-based custom software, CRMs, Stripe integrations, and penetration testing. Founder-led, no offshore handoff — serving 14 US cities in 2026.",
    url: "https://quantlabusa.dev",
    siteName: "QUANT LAB USA",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "QUANT LAB USA — Custom Software & Cybersecurity" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QUANT LAB USA — Custom Software & Cybersecurity",
    description:
      "USA-based custom software, CRMs, Stripe, and pen testing. Founder-led, no offshore handoff — 14 US cities, 2026.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

// Organization + LocalBusiness + ProfessionalService combined block (sitewide)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": "https://quantlabusa.dev/#organization",
  name: "QUANT LAB USA",
  alternateName: ["Quant Lab USA", "QUANT LAB USA", "Quant Lab"],
  url: "https://quantlabusa.dev",
  logo: {
    "@type": "ImageObject",
    url: "https://quantlabusa.dev/logo-transparent.png",
    width: 512,
    height: 512,
  },
  image: "https://quantlabusa.dev/logo-transparent.png",
  telephone: "+17706521282",
  email: "beltz@quantlabusa.dev",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-770-652-1282",
      email: "beltz@quantlabusa.dev",
      contactType: "sales",
      availableLanguage: ["English"],
      areaServed: "US",
    },
  ],
  foundingDate: "2024-11-09",
  founder: {
    "@type": "Person",
    "@id": "https://quantlabusa.dev/#william-beltz",
    name: "William Beltz",
    url: "https://quantlabusa.dev/about",
    sameAs: ["https://linkedin.com/in/williambeltz"],
  },
  description:
    "QUANT LAB USA is a Macon, Georgia-based custom software and cybersecurity firm. We build production-grade web and SaaS applications, CRMs, operations dashboards, Stripe integrations, licensing systems, and algorithmic trading bots — and harden them with professional penetration testing aligned to MITRE ATT&CK.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Macon",
    addressRegion: "GA",
    postalCode: "31201",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.8407,
    longitude: -83.6324,
  },
  areaServed: [
    { "@type": "Place", name: "Macon, GA" },
    { "@type": "Place", name: "Atlanta, GA" },
    { "@type": "Place", name: "Augusta, GA" },
    { "@type": "Place", name: "Columbus, GA" },
    { "@type": "Place", name: "Savannah, GA" },
    { "@type": "Place", name: "Miami, FL" },
    { "@type": "Place", name: "Austin, TX" },
    { "@type": "Place", name: "Dallas, TX" },
    { "@type": "Place", name: "Chicago, IL" },
    { "@type": "Place", name: "Seattle, WA" },
    { "@type": "Place", name: "New York, NY" },
    { "@type": "Place", name: "Charlotte, NC" },
    { "@type": "Place", name: "Nashville, TN" },
    { "@type": "Place", name: "San Francisco, CA" },
  ],
  serviceArea: [
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 32.8407,
        longitude: -83.6324,
      },
      geoRadius: "4500000",
    },
  ],
  priceRange: "$$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "09:00",
      closes: "17:00",
      validFrom: "2024-11-09",
    },
  ],
  sameAs: [
    "https://linkedin.com/in/williambeltz",
    "https://x.com/quantlabusa",
  ],
  knowsAbout: [
    "Custom Software Development",
    "Next.js Development",
    "CRM Development",
    "Stripe Integration",
    "Licensing Systems",
    "Algorithmic Trading Bot Development",
    "Penetration Testing",
    "Web Application Security",
    "Network Penetration Testing",
    "Wireless Penetration Testing",
    "Active Directory Security",
    "MITRE ATT&CK Framework",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "QUANT LAB USA Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom CRM Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Penetration Testing Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Application Pentest" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Stripe Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Algorithmic Trading Bot Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Licensing System Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Next.js Custom Software Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "MITRE ATT&CK Assessment" } },
    ],
  },
};

// Person schema (William Beltz)
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://quantlabusa.dev/#william-beltz",
  name: "William Beltz",
  givenName: "William",
  familyName: "Beltz",
  jobTitle: "Founder & Principal Engineer",
  email: "beltz@quantlabusa.dev",
  telephone: "+17706521282",
  url: "https://quantlabusa.dev/about",
  worksFor: { "@id": "https://quantlabusa.dev/#organization" },
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "Custom CRM Development",
    "Stripe Integration",
    "Algorithmic Trading",
    "Penetration Testing",
    "MITRE ATT&CK Framework",
    "Active Directory Security",
  ],
  sameAs: [
    "https://linkedin.com/in/williambeltz",
    "https://x.com/quantlabusa",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Macon",
    addressRegion: "GA",
    addressCountry: "US",
  },
};

// WebSite + SearchAction schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://quantlabusa.dev/#website",
  url: "https://quantlabusa.dev",
  name: "QUANT LAB USA",
  alternateName: "Quant Lab USA",
  description:
    "Custom software development and cybersecurity penetration testing from Macon, Georgia. Serving clients nationwide.",
  publisher: { "@id": "https://quantlabusa.dev/#organization" },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://quantlabusa.dev/search?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark sm:scroll-smooth">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-quant-blue selection:text-white bg-quant-bg text-quant-text`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-quant-blue focus:text-white focus:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300"
        >
          Skip to main content
        </a>
        <FuturisticBackground />
        <SocialProofBar />
        <Navbar />
        <PageTracker />
        <div id="main">{children}</div>
        <Footer />
        <AgentationWrapper />
        <Analytics />
        <ConsentBanner />
      </body>
    </html>
  );
}
