import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Industries } from "@/components/Industries";
import { About } from "@/components/About";
import { Founder } from "@/components/Founder";
import { Contact } from "@/components/Contact";
import { TopicClusters } from "@/components/TopicClusters";
import { JsonLd } from "@/components/JsonLd";
import { ORGANIZATION_ID, SITE_URL, WEBSITE_ID } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Custom Software Development & Penetration Testing | QUANT LAB USA",
  description:
    "USA-based custom software, CRMs, Stripe integrations, and penetration testing — founder-led, no offshore handoff. Serving 14 US cities in 2026. Free consult.",
  alternates: {
    canonical: "https://quantlabusa.dev/",
  },
  openGraph: {
    title: "Custom Software Development & Cybersecurity | QUANT LAB USA",
    description:
      "Custom software & penetration testing for businesses across Atlanta, Macon, and 12 more US cities. Founder-led engagements, no offshore handoff.",
    url: "https://quantlabusa.dev/",
    siteName: "QUANT LAB USA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development & Cybersecurity | QUANT LAB USA",
    description:
      "Custom software & penetration testing for businesses across Atlanta, Macon, and 12 more US cities. Founder-led engagements, no offshore handoff.",
  },
};

const PRIMARY_SERVICES = [
  { name: "Custom CRM Development", url: `${SITE_URL}/services/custom-crm-development` },
  { name: "Penetration Testing", url: `${SITE_URL}/services/penetration-testing` },
  { name: "Stripe Integration", url: `${SITE_URL}/services/stripe-integration` },
  { name: "Algorithmic Trading Systems", url: `${SITE_URL}/services/algorithmic-trading-systems` },
  { name: "Next.js Web Applications", url: `${SITE_URL}/services/web-applications` },
  { name: "Cloud Infrastructure & DevOps", url: `${SITE_URL}/services/cloud-infrastructure` },
];

const homeWebPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/#webpage`,
  url: `${SITE_URL}/`,
  name: "Custom Software Development & Penetration Testing | QUANT LAB USA",
  description:
    "USA-based custom software, CRMs, Stripe integrations, and penetration testing — founder-led, no offshore handoff. Serving 14 US cities in 2026.",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORGANIZATION_ID },
  primaryImageOfPage: { "@type": "ImageObject", url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 },
  inLanguage: "en-US",
};

const homeServicesListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${SITE_URL}/#primary-services`,
  name: "QUANT LAB USA Primary Services",
  numberOfItems: PRIMARY_SERVICES.length,
  itemListElement: PRIMARY_SERVICES.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
    url: s.url,
  })),
};

export default function Home() {
  return (
    <main className="min-h-screen bg-quant-bg text-quant-text">
      <JsonLd data={homeWebPageSchema} />
      <JsonLd data={homeServicesListSchema} />
      <Hero />
      <Services />
      <Industries />
      <section className="container mx-auto px-6 py-16">
        <TopicClusters
          heading="Where to dig in next"
          intro="Five topic clusters covering almost every QUANT LAB conversation — each bundles a pillar service with the supporting deep-dive posts and calculators, so you can read a topic end to end in twenty minutes."
        />
      </section>
      <About />
      <Founder />
      <Contact />
    </main>
  );
}
