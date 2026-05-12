import { ORGANIZATION_ID, PERSON_ID, SITE_URL } from "./organization";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: "William Beltz",
    givenName: "William",
    familyName: "Beltz",
    jobTitle: "Founder & Principal Engineer",
    email: "beltz@quantlabusa.dev",
    telephone: "+1-770-652-1282",
    url: `${SITE_URL}/about`,
    image: `${SITE_URL}/william-beltz.jpg`,
    worksFor: { "@id": ORGANIZATION_ID },
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
      "https://github.com/williambeltz",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Macon",
      addressRegion: "GA",
      addressCountry: "US",
    },
  };
}
