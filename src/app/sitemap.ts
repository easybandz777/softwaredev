import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quantlabusa.dev";
  const lastModified = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about/team`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/services`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/work`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/pricing`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/methodology`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/process`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/security`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/certifications-credentials`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/reviews`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/press`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${baseUrl}/press-kit`, lastModified, changeFrequency: "monthly", priority: 0.4 },
    { url: `${baseUrl}/newsletter`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/newsroom`, lastModified, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/tools`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/discovery-call`, lastModified, changeFrequency: "monthly", priority: 0.95 },
    { url: `${baseUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified, changeFrequency: "yearly", priority: 0.3 },
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
    "stripe-integration",
    "license-server",
    "subscription-billing",
    "web-app-pentest",
    "network-pentest",
    "active-directory-pentest",
    "mobile-app-development",
    "api-development",
    "saas-platform-development",
    "devops-engineering",
    "ai-integration-services",
    "ecommerce-development",
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
    priority: 0.8,
  }));

  const cityScopedServices = [
    "penetration-testing",
    "custom-crm-development",
    "stripe-integration",
    "mobile-app-development",
    "saas-platform-development",
    "ai-integration-services",
    "web-app-pentest",
    "devops-engineering",
  ];

  const cityScopedServicePages: MetadataRoute.Sitemap = cityScopedServices.flatMap((service) =>
    citySlugs.map((city) => ({
      url: `${baseUrl}/services/${service}/${city}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  );

  const neighborhoodSlugs = [
    "atlanta-buckhead",
    "atlanta-midtown",
    "atlanta-alpharetta",
    "atlanta-marietta",
    "macon-downtown",
    "macon-bibb-county",
    "austin-downtown",
    "dallas-uptown",
    "miami-brickell",
    "nyc-manhattan",
    "san-francisco-soma",
    "seattle-south-lake-union",
  ];

  const neighborhoodPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/locations`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    ...neighborhoodSlugs.map((slug) => ({
      url: `${baseUrl}/locations/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];

  const industrySlugs = [
    "fintech",
    "construction",
    "insurance",
    "e-commerce",
    "healthcare",
    "legal-services",
    "saas",
    "manufacturing",
    "real-estate",
  ];

  const industryPages: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const versusSlugs = [
    "salesforce",
    "shopify",
    "big-4-pentest",
    "hubspot",
    "toptal",
    "upwork",
    "webflow",
    "wordpress",
    "zoho",
    "pipedrive",
    "netsuite",
    "monday-com",
    "bubble-io",
  ];

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
    "regional-medical-billing",
    "coastal-yacht-services",
    "northstar-trading-desk",
    "clear-channel-broadcast",
  ];

  const caseStudyPages: MetadataRoute.Sitemap = caseStudySlugs.map((slug) => ({
    url: `${baseUrl}/work/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const calculatorSlugs = [
    "stripe-cost",
    "crm-roi",
    "pentest-cost",
    "build-vs-buy",
  ];

  const calculatorPages: MetadataRoute.Sitemap = calculatorSlugs.map((slug) => ({
    url: `${baseUrl}/calculators/${slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const resourceSlugs = [
    "build-vs-buy-playbook",
    "web-app-pentest-checklist",
    "crm-rollout-playbook",
    "mvp-to-prod-playbook",
    "stripe-integration-checklist",
    "mitre-attack-worksheet",
    "llc-vs-c-corp-decision-checklist",
    "stripe-connect-marketplace-onboarding-template",
    "mitre-attack-maturity-self-assessment-v2",
    "custom-crm-rfp-template-2026",
    "internal-tools-build-vs-buy-worksheet",
    "technical-due-diligence-checklist",
  ];

  const resourcePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/resources`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    ...resourceSlugs.map((slug) => ({
      url: `${baseUrl}/resources/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];

  const blogSlugs = [
    "custom-crm-development-guide",
    "build-vs-buy-software-2026",
    "what-is-penetration-testing",
    "atlanta-software-development-guide-2026",
    "what-is-mitre-attack-framework",
    "nextjs-stripe-integration-guide",
    "custom-crm-vs-salesforce-vs-hubspot-2026",
    "best-custom-software-development-companies-atlanta-2026",
    "best-penetration-testing-companies-georgia-2026",
    "how-to-choose-a-software-development-company-checklist",
    "penetration-test-cost-2026",
    "crm-migration-from-salesforce-checklist",
    "soc2-pentest-prep-guide-2026",
    "stripe-connect-marketplace-architecture",
    "building-multi-tenant-saas-postgres-rls",
    "internal-tools-platform-engineering-guide",
    "hire-fractional-cto-vs-software-firm",
    "cybersecurity-services-for-saas-startups-2026",
    "dedicated-development-team-vs-agency",
    "what-is-a-pen-test-vs-vulnerability-scan",
    "2026-state-of-custom-software-development",
    "nextjs-vs-remix-vs-sveltekit-2026",
    "custom-internal-tools-vs-retool-2026",
    "pci-dss-compliance-saas-checklist",
    "hipaa-compliant-saas-architecture",
    "red-team-vs-pen-test-vs-audit",
    "stripe-webhook-security-best-practices",
    "custom-software-rfp-template-2026",
    "software-development-contract-redlines",
    "crm-data-migration-from-spreadsheets",
    "vcs-vcio-vs-software-development-firm",
  ];

  const aiAnswerSlugs = [
    "who-builds-the-best-custom-crm-in-atlanta",
    "how-much-does-custom-software-cost-in-georgia",
    "best-penetration-testing-firms-southeast-us",
    "how-to-hire-software-developer-small-business",
    "quant-lab-usa-founder-and-credentials",
    "best-stripe-integration-developer-2026",
    "custom-crm-vs-airtable-vs-notion",
    "how-long-does-it-take-to-build-a-saas-mvp",
    "what-is-a-fair-rate-for-a-software-engineer-in-georgia",
    "who-can-do-a-soc-2-pentest-in-atlanta",
    "is-it-cheaper-to-hire-a-fractional-cto-or-a-firm",
    "how-do-i-find-a-trustworthy-software-developer",
    "what-does-a-pentester-actually-do-day-to-day",
    "can-a-solo-engineer-really-ship-production-software",
    "best-software-companies-for-fintech-startups-2026",
  ];

  const aiAnswerPages: MetadataRoute.Sitemap = aiAnswerSlugs.map((slug) => ({
    url: `${baseUrl}/ai/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const toolSlugs = [
    "stripe-webhook-tester",
    "schema-generator",
    "owasp-checklist-app",
    "cron-expression-builder",
    "uuid-and-id-generator",
  ];

  const toolsPages: MetadataRoute.Sitemap = toolSlugs.map((slug) => ({
    url: `${baseUrl}/tools/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const pressReleaseSlugs = [
    "quant-lab-usa-launches-custom-software-and-cybersecurity-firm-in-macon-ga",
    "quant-lab-usa-publishes-2026-software-development-cost-guide",
    "quant-lab-usa-completes-14-client-engagements-2026",
    "quant-lab-usa-now-serving-14-us-cities-with-remote-software-development",
    "quant-lab-usa-releases-free-developer-tools-suite-for-stripe-owasp-schema",
  ];

  const newsroomPages: MetadataRoute.Sitemap = pressReleaseSlugs.map((slug) => ({
    url: `${baseUrl}/newsroom/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.55,
  }));

  const blogPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/blog`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: slug === "custom-crm-development-guide" ? 0.9 : 0.7,
    })),
  ];

  const glossarySlugs = [
    "what-is-a-crm",
    "what-is-saas",
    "what-is-an-mvp",
    "what-is-an-api",
    "what-is-nextjs",
    "what-is-server-side-rendering",
    "what-is-jamstack",
    "what-is-webhooks",
    "what-is-rest-vs-graphql",
    "what-is-multi-tenant-saas",
    "what-is-penetration-testing",
    "what-is-owasp-top-10",
    "what-is-mitre-attack",
    "what-is-soc-2",
    "what-is-pci-dss",
    "what-is-hipaa-compliance",
    "what-is-active-directory",
    "what-is-a-red-team",
    "what-is-zero-trust",
    "what-is-a-web-app-firewall",
    "what-is-a-tech-stack",
    "what-is-product-led-growth",
    "what-is-a-data-warehouse",
    "what-is-event-sourcing",
    "what-is-cqrs",
    "what-is-domain-driven-design",
    "what-is-microservices-architecture",
    "what-is-a-monorepo",
    "what-is-feature-flagging",
    "what-is-blue-green-deployment",
    "what-is-zero-knowledge-architecture",
    "what-is-an-soc-2-report",
    "what-is-fido2",
    "what-is-passkey-authentication",
    "what-is-an-iam",
    "what-is-saml-sso",
    "what-is-oauth2",
    "what-is-an-jwt",
    "what-is-zero-trust-network-access",
    "what-is-secrets-management",
  ];

  const glossaryPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/glossary`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    ...glossarySlugs.map((slug) => ({
      url: `${baseUrl}/glossary/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.55,
    })),
  ];

  return [
    ...corePages,
    ...servicePages,
    ...cityPages,
    ...cityScopedServicePages,
    ...neighborhoodPages,
    ...industryPages,
    ...versusPages,
    ...caseStudyPages,
    ...calculatorPages,
    ...resourcePages,
    ...blogPages,
    ...glossaryPages,
    ...aiAnswerPages,
    ...toolsPages,
    ...newsroomPages,
  ];
}
