import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quantlabusa.dev";
  const lastModified = new Date();

  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const serviceSlugs = [
    "custom-business-software",
    "custom-crm-development",
    "cloud-infrastructure",
    "web-applications",
    "payments-invoicing-licensing",
    "penetration-testing",
    "mitre-attack-assessment",
    "algorithmic-trading-systems",
    // Expanded standalone services
    "stripe-integration",
    "license-server",
    "subscription-billing",
    "web-app-pentest",
    "network-pentest",
    "active-directory-pentest",
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const citySlugs = [
    "macon-ga",
    "atlanta-ga",
    "augusta-ga",
    "columbus-ga",
    "savannah-ga",
    "miami-fl",
    "austin-tx",
    "dallas-tx",
    "chicago-il",
    "seattle-wa",
    "new-york-ny",
    "charlotte-nc",
    "nashville-tn",
    "san-francisco-ca",
  ];

  const cityPages: MetadataRoute.Sitemap = citySlugs.map((slug) => ({
    url: `${baseUrl}/software-development-${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Service-by-city pages: penetration testing, custom CRM, and Stripe integration
  // each get one page per city for local SEO targeting.
  const cityScopedServices = [
    "penetration-testing",
    "custom-crm-development",
    "stripe-integration",
  ];

  const cityScopedServicePages: MetadataRoute.Sitemap = cityScopedServices.flatMap((service) =>
    citySlugs.map((city) => ({
      url: `${baseUrl}/services/${service}/${city}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  );

  const industrySlugs = [
    "fintech",
    "construction",
    "insurance",
    "e-commerce",
    "healthcare",
  ];

  const industryPages: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const versusSlugs = ["salesforce", "shopify", "big-4-pentest"];

  const versusPages: MetadataRoute.Sitemap = versusSlugs.map((slug) => ({
    url: `${baseUrl}/vs/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const caseStudySlugs = [
    "northcrest-fence",
    "hobbspeak",
    "bridgepointe-painting",
    "protectwithbri",
    "j5-sales-os",
    "wilder-recovery",
  ];

  const caseStudyPages: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const calculatorPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/calculators/stripe-cost`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  return [
    ...corePages,
    ...servicePages,
    ...cityPages,
    ...cityScopedServicePages,
    ...industryPages,
    ...versusPages,
    ...caseStudyPages,
    ...calculatorPages,
  ];
}
