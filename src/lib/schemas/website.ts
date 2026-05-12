import { ORGANIZATION_ID, SITE_URL, WEBSITE_ID } from "./organization";

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: "QUANT LAB USA",
    alternateName: "Quant Lab USA",
    description:
      "Custom software development and cybersecurity penetration testing from Macon, Georgia. Serving clients nationwide.",
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
