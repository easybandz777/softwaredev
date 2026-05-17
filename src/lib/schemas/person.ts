import { SAME_AS_PERSON } from "../constants/business";
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
    // Person-scope sameAs sourced from `SAME_AS_PERSON` in constants/business.ts.
    // Keep founder-personal profiles (HN, SO, IndieHackers, etc.) in that array
    // and they will surface here automatically. Organization-scope URLs
    // (linkedin.com/company/quantlabusa, x.com/quantlabusa) live in the
    // separate `SAME_AS` array and are emitted by Organization JSON-LD,
    // not here. See seo-deliverables/brand-entity/ENTITY-BUILDING.md.
    sameAs: [...SAME_AS_PERSON],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Macon",
      addressRegion: "GA",
      addressCountry: "US",
    },
  };
}
