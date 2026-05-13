export const SITE_URL = "https://quantlabusa.dev";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;
export const ORGANIZATION_NAME = "QUANT LAB USA";
export const PERSON_ID = `${SITE_URL}/#william-beltz`;
export const PERSON_NAME = "Bill Beltz";
export const PERSON_LEGAL_NAME = "William Beltz";
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const SAME_AS = [
  "https://linkedin.com/in/williambeltz",
  "https://x.com/quantlabusa",
  "https://github.com/williambeltz",
  "https://g.page/r/CbkSyF5E2JFtEBM",
];

export const AREA_SERVED_CITIES = [
  { name: "Macon", state: "Georgia" },
  { name: "Atlanta", state: "Georgia" },
  { name: "Augusta", state: "Georgia" },
  { name: "Columbus", state: "Georgia" },
  { name: "Savannah", state: "Georgia" },
  { name: "Miami", state: "Florida" },
  { name: "Austin", state: "Texas" },
  { name: "Dallas", state: "Texas" },
  { name: "Chicago", state: "Illinois" },
  { name: "Seattle", state: "Washington" },
  { name: "New York", state: "New York" },
  { name: "Charlotte", state: "North Carolina" },
  { name: "Nashville", state: "Tennessee" },
  { name: "San Francisco", state: "California" },
] as const;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
    "@id": ORGANIZATION_ID,
    name: "QUANT LAB USA",
    alternateName: ["Quant Lab USA", "QuantLab USA", "Quant Lab"],
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo-transparent.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE_URL}/logo-transparent.png`,
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    foundingDate: "2024-11-09",
    founder: {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "William Beltz",
      url: `${SITE_URL}/about`,
      sameAs: ["https://linkedin.com/in/williambeltz"],
    },
    description:
      "QUANT LAB USA is a Macon, Georgia-based custom software and cybersecurity firm. We build production-grade web and SaaS applications, CRMs, operations dashboards, Stripe integrations, licensing systems, and algorithmic trading bots and harden them with professional penetration testing aligned to MITRE ATT&CK.",
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
    areaServed: AREA_SERVED_CITIES.map((c) => ({
      "@type": "City",
      name: c.name,
      containedInPlace: { "@type": "State", name: c.state },
    })),
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
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
        validFrom: "2024-11-09",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-770-652-1282",
        email: "beltz@quantlabusa.dev",
        contactType: "sales",
        availableLanguage: ["English"],
        areaServed: "US",
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-770-652-1282",
        email: "beltz@quantlabusa.dev",
        contactType: "customer support",
        availableLanguage: ["English"],
        areaServed: "US",
      },
    ],
    sameAs: SAME_AS,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "1",
      bestRating: "5",
      worstRating: "1",
    },
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
}
