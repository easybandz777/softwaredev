import { AREA_SERVED_CITIES, ORGANIZATION_ID, SAME_AS, SITE_URL } from "./organization";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": ORGANIZATION_ID,
    name: "QUANT LAB USA",
    alternateName: ["Quant Lab USA", "QuantLab USA"],
    url: SITE_URL,
    logo: `${SITE_URL}/logo-transparent.png`,
    image: `${SITE_URL}/logo-transparent.png`,
    telephone: "+1-770-652-1282",
    email: "beltz@quantlabusa.dev",
    priceRange: "$$",
    description:
      "Macon, Georgia-based custom software development and cybersecurity penetration testing firm serving 14 metro areas nationwide.",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
        validFrom: "2024-11-09",
      },
    ],
    sameAs: SAME_AS,
  };
}
