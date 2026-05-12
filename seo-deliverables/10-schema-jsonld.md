# Schema.org JSON-LD — QUANT LAB USA

Production-ready structured data blocks for quantlabusa.dev. All blocks reference https://quantlabusa.dev as canonical URL.

---

## Integration Notes — Next.js File Paths & Deduplication

**Root layout (load once, sitewide):**
- File: `src/app/layout.tsx`
- Place these in the root `<head>` via `<Script type="application/ld+json">`:
  - Block 1: Organization / LocalBusiness
  - Block 5: WebSite (with SearchAction)
  - Block 6: Person (William Beltz)

**Per-page (load only on relevant routes):**
- Block 2 (Service): `src/app/services/[slug]/page.tsx` — one Service block per service page. Do NOT load all 8 on every page; map slug -> service block.
- Block 3 (FAQPage): `src/app/page.tsx` (homepage) AND `src/app/services/[slug]/page.tsx` where FAQs are visible to users. **Critical:** only mark up FAQs that are actually rendered on-page.
- Block 4 (BreadcrumbList): `src/app/case-studies/[slug]/page.tsx` — dynamic per case study.

**Deduplication rules:**
- Organization, WebSite, Person — root layout only (one instance sitewide).
- Service, FAQPage, BreadcrumbList — page-level, never in root.
- If the same Organization @id is referenced from a Service block, point to `https://quantlabusa.dev/#organization` rather than redefining.

**Implementation pattern (Next.js 13+ App Router):**
```tsx
import Script from 'next/script';

<Script
  id="organization-jsonld"
  type="application/ld+json"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
/>
```

Validate everything at https://validator.schema.org and https://search.google.com/test/rich-results before deploy.

---

## Block 1 — Organization / LocalBusiness (Homepage / Root Layout)

```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": "https://quantlabusa.dev/#organization",
  "name": "QUANT LAB USA",
  "alternateName": ["Quant Lab USA", "QuantLab USA", "Quant Lab"],
  "url": "https://quantlabusa.dev",
  "logo": {
    "@type": "ImageObject",
    "url": "https://quantlabusa.dev/logo-transparent.png",
    "width": 512,
    "height": 512
  },
  "image": "https://quantlabusa.dev/logo-transparent.png",
  "telephone": "+1-770-652-1282",
  "email": "beltz@quantlabusa.dev",
  "foundingDate": "2024-11-09",
  "founder": {
    "@type": "Person",
    "@id": "https://quantlabusa.dev/#william-beltz",
    "name": "William Beltz",
    "url": "https://quantlabusa.dev/about",
    "sameAs": ["https://linkedin.com/in/williambeltz"]
  },
  "description": "QUANT LAB USA is a Macon, Georgia-based custom software and cybersecurity firm. We build production-grade web and SaaS applications, CRMs, operations dashboards, Stripe integrations, licensing systems, and algorithmic trading bots — and harden them with professional penetration testing aligned to MITRE ATT&CK.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Macon",
    "addressRegion": "GA",
    "postalCode": "31201",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Macon", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    { "@type": "City", "name": "Atlanta", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    { "@type": "City", "name": "Augusta", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    { "@type": "City", "name": "Columbus", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    { "@type": "City", "name": "Savannah", "containedInPlace": { "@type": "State", "name": "Georgia" } },
    { "@type": "City", "name": "Miami", "containedInPlace": { "@type": "State", "name": "Florida" } },
    { "@type": "City", "name": "Austin", "containedInPlace": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Dallas", "containedInPlace": { "@type": "State", "name": "Texas" } },
    { "@type": "City", "name": "Chicago", "containedInPlace": { "@type": "State", "name": "Illinois" } },
    { "@type": "City", "name": "Seattle", "containedInPlace": { "@type": "State", "name": "Washington" } },
    { "@type": "City", "name": "New York", "containedInPlace": { "@type": "State", "name": "New York" } },
    { "@type": "City", "name": "Charlotte", "containedInPlace": { "@type": "State", "name": "North Carolina" } },
    { "@type": "City", "name": "Nashville", "containedInPlace": { "@type": "State", "name": "Tennessee" } },
    { "@type": "City", "name": "San Francisco", "containedInPlace": { "@type": "State", "name": "California" } }
  ],
  "serviceArea": [
    {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 32.8407,
        "longitude": -83.6324
      },
      "geoRadius": "4500000"
    }
  ],
  "priceRange": "$$$",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00",
      "validFrom": "2024-11-09"
    }
  ],
  "sameAs": [
    "https://linkedin.com/in/williambeltz",
    "https://x.com/quantlabusa"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "1",
    "bestRating": "5",
    "worstRating": "1"
  },
  "knowsAbout": [
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
    "MITRE ATT&CK Framework"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "QUANT LAB USA Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom CRM Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Penetration Testing Services" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Web Application Pentest" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Custom Stripe Integration" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Algorithmic Trading Bot Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Licensing System Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Next.js Custom Software Development" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "MITRE ATT&CK Assessment" } }
    ]
  }
}
```

---

## Block 2 — Service Schemas (8 separate blocks, one per service page)

### 2.1 — Custom CRM Development
File: `src/app/services/custom-crm-development/page.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://quantlabusa.dev/services/custom-crm-development#service",
  "name": "Custom CRM Development",
  "serviceType": "Custom CRM Software Development",
  "description": "Bespoke CRM platforms tailored to your sales pipeline, lead lifecycle, and reporting needs. Built on Next.js with PostgreSQL, role-based access, and Stripe billing integration.",
  "url": "https://quantlabusa.dev/services/custom-crm-development",
  "provider": { "@id": "https://quantlabusa.dev/#organization" },
  "areaServed": [
    { "@type": "City", "name": "Macon" },
    { "@type": "City", "name": "Atlanta" },
    { "@type": "City", "name": "Augusta" },
    { "@type": "City", "name": "Columbus" },
    { "@type": "City", "name": "Savannah" },
    { "@type": "City", "name": "Miami" },
    { "@type": "City", "name": "Austin" },
    { "@type": "City", "name": "Dallas" },
    { "@type": "City", "name": "Chicago" },
    { "@type": "City", "name": "Seattle" },
    { "@type": "City", "name": "New York" },
    { "@type": "City", "name": "Charlotte" },
    { "@type": "City", "name": "Nashville" },
    { "@type": "City", "name": "San Francisco" }
  ],
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "price": "0",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "description": "Contact for quote"
    },
    "availability": "https://schema.org/InStock",
    "url": "https://quantlabusa.dev/contact"
  }
}
```

### 2.2 — Penetration Testing Services
File: `src/app/services/penetration-testing/page.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://quantlabusa.dev/services/penetration-testing#service",
  "name": "Penetration Testing Services",
  "serviceType": "Cybersecurity Penetration Testing",
  "description": "Comprehensive offensive security engagements covering web applications, internal/external networks, wireless infrastructure, and Active Directory environments. All assessments mapped to MITRE ATT&CK with executive and technical deliverables.",
  "url": "https://quantlabusa.dev/services/penetration-testing",
  "provider": { "@id": "https://quantlabusa.dev/#organization" },
  "category": "Cybersecurity",
  "areaServed": [
    { "@type": "City", "name": "Macon" }, { "@type": "City", "name": "Atlanta" },
    { "@type": "City", "name": "Augusta" }, { "@type": "City", "name": "Columbus" },
    { "@type": "City", "name": "Savannah" }, { "@type": "City", "name": "Miami" },
    { "@type": "City", "name": "Austin" }, { "@type": "City", "name": "Dallas" },
    { "@type": "City", "name": "Chicago" }, { "@type": "City", "name": "Seattle" },
    { "@type": "City", "name": "New York" }, { "@type": "City", "name": "Charlotte" },
    { "@type": "City", "name": "Nashville" }, { "@type": "City", "name": "San Francisco" }
  ],
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "description": "Contact for quote"
    },
    "availability": "https://schema.org/InStock",
    "url": "https://quantlabusa.dev/contact"
  }
}
```

### 2.3 — Web Application Pentest
File: `src/app/services/web-application-pentest/page.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://quantlabusa.dev/services/web-application-pentest#service",
  "name": "Web Application Pentest",
  "serviceType": "Web Application Security Testing",
  "description": "OWASP Top 10 + ASVS-aligned web application penetration testing. Authenticated and unauthenticated assessments covering injection, authn/authz, business logic, and API endpoints. Remediation guidance included.",
  "url": "https://quantlabusa.dev/services/web-application-pentest",
  "provider": { "@id": "https://quantlabusa.dev/#organization" },
  "category": "Cybersecurity",
  "areaServed": [
    { "@type": "City", "name": "Macon" }, { "@type": "City", "name": "Atlanta" },
    { "@type": "City", "name": "Augusta" }, { "@type": "City", "name": "Columbus" },
    { "@type": "City", "name": "Savannah" }, { "@type": "City", "name": "Miami" },
    { "@type": "City", "name": "Austin" }, { "@type": "City", "name": "Dallas" },
    { "@type": "City", "name": "Chicago" }, { "@type": "City", "name": "Seattle" },
    { "@type": "City", "name": "New York" }, { "@type": "City", "name": "Charlotte" },
    { "@type": "City", "name": "Nashville" }, { "@type": "City", "name": "San Francisco" }
  ],
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "description": "Contact for quote"
    },
    "availability": "https://schema.org/InStock",
    "url": "https://quantlabusa.dev/contact"
  }
}
```

### 2.4 — Custom Stripe Integration
File: `src/app/services/custom-stripe-integration/page.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://quantlabusa.dev/services/custom-stripe-integration#service",
  "name": "Custom Stripe Integration",
  "serviceType": "Payment Processing Integration",
  "description": "End-to-end Stripe integrations: Checkout, Billing, Connect, webhooks, subscription lifecycles, metered billing, tax compliance, and PCI-scoped payment flows for SaaS and marketplaces.",
  "url": "https://quantlabusa.dev/services/custom-stripe-integration",
  "provider": { "@id": "https://quantlabusa.dev/#organization" },
  "areaServed": [
    { "@type": "City", "name": "Macon" }, { "@type": "City", "name": "Atlanta" },
    { "@type": "City", "name": "Augusta" }, { "@type": "City", "name": "Columbus" },
    { "@type": "City", "name": "Savannah" }, { "@type": "City", "name": "Miami" },
    { "@type": "City", "name": "Austin" }, { "@type": "City", "name": "Dallas" },
    { "@type": "City", "name": "Chicago" }, { "@type": "City", "name": "Seattle" },
    { "@type": "City", "name": "New York" }, { "@type": "City", "name": "Charlotte" },
    { "@type": "City", "name": "Nashville" }, { "@type": "City", "name": "San Francisco" }
  ],
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "description": "Contact for quote"
    },
    "availability": "https://schema.org/InStock",
    "url": "https://quantlabusa.dev/contact"
  }
}
```

### 2.5 — Algorithmic Trading Bot Development
File: `src/app/services/algorithmic-trading-bot-development/page.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://quantlabusa.dev/services/algorithmic-trading-bot-development#service",
  "name": "Algorithmic Trading Bot Development",
  "serviceType": "Algorithmic Trading System Development",
  "description": "Custom algorithmic trading bots: backtesting engines, signal generation, broker API integrations (IBKR, Alpaca, Binance), risk management modules, and 24/7 deployment infrastructure.",
  "url": "https://quantlabusa.dev/services/algorithmic-trading-bot-development",
  "provider": { "@id": "https://quantlabusa.dev/#organization" },
  "areaServed": [
    { "@type": "City", "name": "Macon" }, { "@type": "City", "name": "Atlanta" },
    { "@type": "City", "name": "Augusta" }, { "@type": "City", "name": "Columbus" },
    { "@type": "City", "name": "Savannah" }, { "@type": "City", "name": "Miami" },
    { "@type": "City", "name": "Austin" }, { "@type": "City", "name": "Dallas" },
    { "@type": "City", "name": "Chicago" }, { "@type": "City", "name": "Seattle" },
    { "@type": "City", "name": "New York" }, { "@type": "City", "name": "Charlotte" },
    { "@type": "City", "name": "Nashville" }, { "@type": "City", "name": "San Francisco" }
  ],
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "description": "Contact for quote"
    },
    "availability": "https://schema.org/InStock",
    "url": "https://quantlabusa.dev/contact"
  }
}
```

### 2.6 — Licensing System Development
File: `src/app/services/licensing-system-development/page.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://quantlabusa.dev/services/licensing-system-development#service",
  "name": "Licensing System Development",
  "serviceType": "Software License Management Systems",
  "description": "Custom software licensing platforms: key generation, activation/deactivation, seat enforcement, machine binding, license server APIs, and anti-piracy hardening for desktop and SaaS products.",
  "url": "https://quantlabusa.dev/services/licensing-system-development",
  "provider": { "@id": "https://quantlabusa.dev/#organization" },
  "areaServed": [
    { "@type": "City", "name": "Macon" }, { "@type": "City", "name": "Atlanta" },
    { "@type": "City", "name": "Augusta" }, { "@type": "City", "name": "Columbus" },
    { "@type": "City", "name": "Savannah" }, { "@type": "City", "name": "Miami" },
    { "@type": "City", "name": "Austin" }, { "@type": "City", "name": "Dallas" },
    { "@type": "City", "name": "Chicago" }, { "@type": "City", "name": "Seattle" },
    { "@type": "City", "name": "New York" }, { "@type": "City", "name": "Charlotte" },
    { "@type": "City", "name": "Nashville" }, { "@type": "City", "name": "San Francisco" }
  ],
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "description": "Contact for quote"
    },
    "availability": "https://schema.org/InStock",
    "url": "https://quantlabusa.dev/contact"
  }
}
```

### 2.7 — Next.js Custom Software Development
File: `src/app/services/nextjs-custom-software-development/page.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://quantlabusa.dev/services/nextjs-custom-software-development#service",
  "name": "Next.js Custom Software Development",
  "serviceType": "Next.js Web Application Development",
  "description": "Production-grade Next.js applications: App Router, server components, edge runtime, TypeScript, Tailwind, PostgreSQL/Prisma, NextAuth, Vercel deployment. SaaS, dashboards, marketplaces, and internal tools.",
  "url": "https://quantlabusa.dev/services/nextjs-custom-software-development",
  "provider": { "@id": "https://quantlabusa.dev/#organization" },
  "areaServed": [
    { "@type": "City", "name": "Macon" }, { "@type": "City", "name": "Atlanta" },
    { "@type": "City", "name": "Augusta" }, { "@type": "City", "name": "Columbus" },
    { "@type": "City", "name": "Savannah" }, { "@type": "City", "name": "Miami" },
    { "@type": "City", "name": "Austin" }, { "@type": "City", "name": "Dallas" },
    { "@type": "City", "name": "Chicago" }, { "@type": "City", "name": "Seattle" },
    { "@type": "City", "name": "New York" }, { "@type": "City", "name": "Charlotte" },
    { "@type": "City", "name": "Nashville" }, { "@type": "City", "name": "San Francisco" }
  ],
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "description": "Contact for quote"
    },
    "availability": "https://schema.org/InStock",
    "url": "https://quantlabusa.dev/contact"
  }
}
```

### 2.8 — MITRE ATT&CK Assessment
File: `src/app/services/mitre-attack-assessment/page.tsx`

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://quantlabusa.dev/services/mitre-attack-assessment#service",
  "name": "MITRE ATT&CK Assessment",
  "serviceType": "Adversary Emulation and ATT&CK Coverage Assessment",
  "description": "Threat-informed defense assessments: adversary emulation aligned to MITRE ATT&CK techniques (TA0001 through TA0040), detection gap analysis, purple team exercises, and SOC coverage scoring against real threat actor TTPs.",
  "url": "https://quantlabusa.dev/services/mitre-attack-assessment",
  "provider": { "@id": "https://quantlabusa.dev/#organization" },
  "category": "Cybersecurity",
  "areaServed": [
    { "@type": "City", "name": "Macon" }, { "@type": "City", "name": "Atlanta" },
    { "@type": "City", "name": "Augusta" }, { "@type": "City", "name": "Columbus" },
    { "@type": "City", "name": "Savannah" }, { "@type": "City", "name": "Miami" },
    { "@type": "City", "name": "Austin" }, { "@type": "City", "name": "Dallas" },
    { "@type": "City", "name": "Chicago" }, { "@type": "City", "name": "Seattle" },
    { "@type": "City", "name": "New York" }, { "@type": "City", "name": "Charlotte" },
    { "@type": "City", "name": "Nashville" }, { "@type": "City", "name": "San Francisco" }
  ],
  "offers": {
    "@type": "Offer",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD",
      "description": "Contact for quote"
    },
    "availability": "https://schema.org/InStock",
    "url": "https://quantlabusa.dev/contact"
  }
}
```

---

## Block 3 — FAQPage (Placeholder — Will Be Replaced by Agent #9 Full FAQ)

File: `src/app/page.tsx` (homepage). **Important:** Only emit FAQ schema for questions that are actually rendered as visible content on the page. Otherwise Google may flag as spammy structured data.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://quantlabusa.dev/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does QUANT LAB USA offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "QUANT LAB USA builds custom web and SaaS applications, CRMs, operations dashboards, Stripe integrations, software licensing systems, and algorithmic trading bots. We also provide professional penetration testing across web apps, networks, wireless, and Active Directory, with all engagements mapped to the MITRE ATT&CK framework."
      }
    },
    {
      "@type": "Question",
      "name": "Where is QUANT LAB USA located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "QUANT LAB USA is headquartered in Macon, Georgia and serves clients remotely across 14 metro areas including Atlanta, Miami, Austin, Dallas, Chicago, Seattle, New York, San Francisco, Charlotte, Nashville, Savannah, Augusta, and Columbus."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with companies outside Macon, GA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We operate as a service-area business with no physical storefront. All engagements run remotely with clients nationwide, and we travel onsite for select penetration testing engagements when needed."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a custom software or pentest engagement cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing depends on scope, timeline, and complexity. Custom software engagements typically start in the mid-five figures, and penetration tests are scoped by target count and depth. Contact beltz@quantlabusa.dev or call (770) 652-1282 for a quote."
      }
    },
    {
      "@type": "Question",
      "name": "Who founded QUANT LAB USA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "QUANT LAB USA was founded by William Beltz on November 9, 2024. William leads engineering and security delivery across all engagements."
      }
    }
  ]
}
```

> **NOTE FOR PRODUCTION:** Replace this block with the full FAQ schema from SEO deliverable #9 once available. Only mark up FAQs that exist as visible text on the rendered page.

---

## Block 4 — BreadcrumbList Template (Case Study Pages)

File: `src/app/case-studies/[slug]/page.tsx`. Replace `[Client Name]` and `[client-slug]` per case study.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": "https://quantlabusa.dev/case-studies/[client-slug]#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://quantlabusa.dev"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Case Studies",
      "item": "https://quantlabusa.dev/case-studies"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[Client Name]",
      "item": "https://quantlabusa.dev/case-studies/[client-slug]"
    }
  ]
}
```

**Dynamic Next.js example:**
```tsx
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "@id": `https://quantlabusa.dev/case-studies/${slug}#breadcrumb`,
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://quantlabusa.dev" },
    { "@type": "ListItem", "position": 2, "name": "Case Studies", "item": "https://quantlabusa.dev/case-studies" },
    { "@type": "ListItem", "position": 3, "name": clientName, "item": `https://quantlabusa.dev/case-studies/${slug}` }
  ]
};
```

---

## Block 5 — WebSite with SearchAction

File: `src/app/layout.tsx` (root, sitewide).

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://quantlabusa.dev/#website",
  "url": "https://quantlabusa.dev",
  "name": "QUANT LAB USA",
  "alternateName": "Quant Lab USA",
  "description": "Custom software development and cybersecurity penetration testing from Macon, Georgia. Serving clients nationwide.",
  "publisher": { "@id": "https://quantlabusa.dev/#organization" },
  "inLanguage": "en-US",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://quantlabusa.dev/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

> Confirm `/search?q=` route exists before deploying. If no site search is implemented, remove the `potentialAction` block.

---

## Block 6 — Person Schema for William Beltz

File: `src/app/layout.tsx` (root) and/or `src/app/about/page.tsx`.

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://quantlabusa.dev/#william-beltz",
  "name": "William Beltz",
  "givenName": "William",
  "familyName": "Beltz",
  "jobTitle": "Founder & Principal Engineer",
  "email": "beltz@quantlabusa.dev",
  "telephone": "+1-770-652-1282",
  "url": "https://quantlabusa.dev/about",
  "image": "https://quantlabusa.dev/william-beltz.jpg",
  "worksFor": { "@id": "https://quantlabusa.dev/#organization" },
  "knowsAbout": [
    "Next.js",
    "TypeScript",
    "Custom CRM Development",
    "Stripe Integration",
    "Algorithmic Trading",
    "Penetration Testing",
    "MITRE ATT&CK Framework",
    "Active Directory Security"
  ],
  "sameAs": [
    "https://linkedin.com/in/williambeltz",
    "https://x.com/quantlabusa"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Macon",
    "addressRegion": "GA",
    "addressCountry": "US"
  }
}
```

---

## Validation Checklist Before Deploy

- [ ] Validate every block at https://validator.schema.org
- [ ] Test homepage at https://search.google.com/test/rich-results
- [ ] Test service pages and case study pages individually
- [ ] Confirm logo file exists at https://quantlabusa.dev/logo-transparent.png
- [ ] Confirm William's headshot exists at https://quantlabusa.dev/william-beltz.jpg (or remove `image` from Person)
- [ ] Confirm postal code 31201 is correct (verify with William)
- [ ] Confirm latitude/longitude (32.8407, -83.6324) match Macon HQ
- [ ] Confirm aggregateRating placeholder is removed or replaced with real reviewCount before going live (Google may penalize fake ratings)
- [ ] Confirm site search route `/search?q=` exists, or remove SearchAction
- [ ] Confirm X/Twitter handle (https://x.com/quantlabusa) is live
- [ ] Confirm `priceRange: "$$$"` accurately represents your tier (`$`, `$$`, `$$$`, `$$$$`)
