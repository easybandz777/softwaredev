export const dynamic = "force-static";
export const revalidate = 86400;

const SITE_URL = "https://quantlabusa.dev";

type ImageEntry = {
  loc: string;
  title: string;
  caption: string;
};

type UrlEntry = {
  loc: string;
  images: ImageEntry[];
};

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

const BRAND_NAME = "QUANT LAB USA INC";
const BRAND_LOCATION = "Macon, Georgia";

const OG_IMAGE = `${SITE_URL}/og-image.png`;
const OG_IMAGE_SQUARE = `${SITE_URL}/og-image-square.png`;
const OG_CRM = `${SITE_URL}/og-crm.png`;
const OG_PENTEST = `${SITE_URL}/og-pentest.png`;
const OG_SERVICES = `${SITE_URL}/og-services.png`;
const OG_STRIPE = `${SITE_URL}/og-stripe.png`;
const OG_TRADING = `${SITE_URL}/og-trading.png`;
const OG_WEB_APPS = `${SITE_URL}/og-web-apps.png`;
const TWITTER_CARD = `${SITE_URL}/twitter-card.png`;
const LOGO_TRANSPARENT = `${SITE_URL}/logo-transparent.png`;
const FOUNDER_JPG = `${SITE_URL}/founder.jpg`;
const ICON_512 = `${SITE_URL}/icon-512.png`;

const brandLogoImage: ImageEntry = {
  loc: LOGO_TRANSPARENT,
  title: "quant-lab-usa-inc-custom-software-development-cybersecurity-logo",
  caption: `${BRAND_NAME} custom software development and cybersecurity company logo`,
};

const founderImage: ImageEntry = {
  loc: FOUNDER_JPG,
  title: "bill-beltz-founder-quant-lab-usa-inc-macon-georgia",
  caption: `Bill Beltz, founder and lead engineer of ${BRAND_NAME} based in ${BRAND_LOCATION}`,
};

const heroOgImage: ImageEntry = {
  loc: OG_IMAGE,
  title: "quant-lab-usa-inc-custom-software-development-macon-georgia",
  caption: `${BRAND_NAME} custom software development and cybersecurity firm in ${BRAND_LOCATION}`,
};

function cityImage(citySlug: string, cityLabel: string): ImageEntry {
  return {
    loc: OG_IMAGE,
    title: `software-development-company-${citySlug}-quant-lab-usa`,
    caption: `Custom software development company serving ${cityLabel} by ${BRAND_NAME}`,
  };
}

function industryImage(industrySlug: string, industryLabel: string): ImageEntry {
  return {
    loc: OG_SERVICES,
    title: `${industrySlug}-software-development-quant-lab-usa`,
    caption: `Custom software development for the ${industryLabel} industry by ${BRAND_NAME}`,
  };
}

const urlEntries: UrlEntry[] = [
  {
    loc: `${SITE_URL}/`,
    images: [
      heroOgImage,
      brandLogoImage,
      founderImage,
      {
        loc: OG_IMAGE_SQUARE,
        title: "quant-lab-usa-inc-square-brand-card",
        caption: `${BRAND_NAME} square brand card for social previews`,
      },
      {
        loc: TWITTER_CARD,
        title: "quant-lab-usa-inc-twitter-summary-card",
        caption: `${BRAND_NAME} Twitter summary card for custom software development`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/about`,
    images: [
      founderImage,
      brandLogoImage,
    ],
  },
  {
    loc: `${SITE_URL}/about/team`,
    images: [founderImage],
  },
  {
    loc: `${SITE_URL}/services`,
    images: [
      {
        loc: OG_SERVICES,
        title: "quant-lab-usa-custom-software-development-services-overview",
        caption: `Custom software development services from ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/custom-crm-development`,
    images: [
      {
        loc: OG_CRM,
        title: "custom-crm-development-quant-lab-usa",
        caption: `Custom CRM development for SMB and SaaS clients by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/penetration-testing`,
    images: [
      {
        loc: OG_PENTEST,
        title: "penetration-testing-offensive-security-quant-lab-usa",
        caption: `Penetration testing and offensive security for SMB and SaaS clients by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/web-app-pentest`,
    images: [
      {
        loc: OG_PENTEST,
        title: "web-application-penetration-testing-quant-lab-usa",
        caption: `Web application penetration testing services by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/network-pentest`,
    images: [
      {
        loc: OG_PENTEST,
        title: "network-penetration-testing-quant-lab-usa",
        caption: `Network penetration testing services by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/active-directory-pentest`,
    images: [
      {
        loc: OG_PENTEST,
        title: "active-directory-penetration-testing-quant-lab-usa",
        caption: `Active Directory penetration testing services by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/mitre-attack-assessment`,
    images: [
      {
        loc: OG_PENTEST,
        title: "mitre-attack-assessment-quant-lab-usa",
        caption: `MITRE ATT&CK assessment by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/stripe-integration`,
    images: [
      {
        loc: OG_STRIPE,
        title: "stripe-payment-integration-quant-lab-usa",
        caption: `Stripe payment integration for SMB and SaaS clients by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/payments-invoicing-licensing`,
    images: [
      {
        loc: OG_STRIPE,
        title: "payments-invoicing-licensing-systems-quant-lab-usa",
        caption: `Payment, invoicing and licensing systems by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/subscription-billing`,
    images: [
      {
        loc: OG_STRIPE,
        title: "subscription-billing-systems-quant-lab-usa",
        caption: `Subscription billing systems by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/license-server`,
    images: [
      {
        loc: OG_STRIPE,
        title: "license-server-software-quant-lab-usa",
        caption: `License server software engineering by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/algorithmic-trading-systems`,
    images: [
      {
        loc: OG_TRADING,
        title: "algorithmic-trading-system-development-quant-lab-usa",
        caption: `Algorithmic trading system development by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/web-applications`,
    images: [
      {
        loc: OG_WEB_APPS,
        title: "web-application-development-nextjs-quant-lab-usa",
        caption: `Web application development with Next.js by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/custom-business-software`,
    images: [
      {
        loc: OG_SERVICES,
        title: "custom-business-software-development-quant-lab-usa",
        caption: `Custom business software development for SMB and SaaS clients by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/cloud-infrastructure`,
    images: [
      {
        loc: OG_SERVICES,
        title: "cloud-infrastructure-devops-quant-lab-usa",
        caption: `Cloud infrastructure and DevOps engineering by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/mobile-app-development`,
    images: [
      {
        loc: OG_WEB_APPS,
        title: "mobile-app-development-quant-lab-usa",
        caption: `Mobile application development services by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/api-development`,
    images: [
      {
        loc: OG_WEB_APPS,
        title: "api-development-services-quant-lab-usa",
        caption: `API development services by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/saas-platform-development`,
    images: [
      {
        loc: OG_WEB_APPS,
        title: "saas-platform-development-quant-lab-usa",
        caption: `SaaS platform development services by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/devops-engineering`,
    images: [
      {
        loc: OG_SERVICES,
        title: "devops-engineering-services-quant-lab-usa",
        caption: `DevOps engineering services by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/ai-integration-services`,
    images: [
      {
        loc: OG_SERVICES,
        title: "ai-integration-services-quant-lab-usa",
        caption: `AI integration services by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/services/ecommerce-development`,
    images: [
      {
        loc: OG_WEB_APPS,
        title: "ecommerce-development-services-quant-lab-usa",
        caption: `E-commerce development services by ${BRAND_NAME}`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/software-development-macon-ga`,
    images: [cityImage("macon-ga", "Macon, Georgia")],
  },
  {
    loc: `${SITE_URL}/software-development-atlanta-ga`,
    images: [cityImage("atlanta-ga", "Atlanta, Georgia")],
  },
  {
    loc: `${SITE_URL}/software-development-augusta-ga`,
    images: [cityImage("augusta-ga", "Augusta, Georgia")],
  },
  {
    loc: `${SITE_URL}/software-development-columbus-ga`,
    images: [cityImage("columbus-ga", "Columbus, Georgia")],
  },
  {
    loc: `${SITE_URL}/software-development-savannah-ga`,
    images: [cityImage("savannah-ga", "Savannah, Georgia")],
  },
  {
    loc: `${SITE_URL}/software-development-miami-fl`,
    images: [cityImage("miami-fl", "Miami, Florida")],
  },
  {
    loc: `${SITE_URL}/software-development-austin-tx`,
    images: [cityImage("austin-tx", "Austin, Texas")],
  },
  {
    loc: `${SITE_URL}/software-development-dallas-tx`,
    images: [cityImage("dallas-tx", "Dallas, Texas")],
  },
  {
    loc: `${SITE_URL}/software-development-chicago-il`,
    images: [cityImage("chicago-il", "Chicago, Illinois")],
  },
  {
    loc: `${SITE_URL}/software-development-seattle-wa`,
    images: [cityImage("seattle-wa", "Seattle, Washington")],
  },
  {
    loc: `${SITE_URL}/software-development-new-york-ny`,
    images: [cityImage("new-york-ny", "New York, New York")],
  },
  {
    loc: `${SITE_URL}/software-development-charlotte-nc`,
    images: [cityImage("charlotte-nc", "Charlotte, North Carolina")],
  },
  {
    loc: `${SITE_URL}/software-development-nashville-tn`,
    images: [cityImage("nashville-tn", "Nashville, Tennessee")],
  },
  {
    loc: `${SITE_URL}/software-development-san-francisco-ca`,
    images: [cityImage("san-francisco-ca", "San Francisco, California")],
  },
  {
    loc: `${SITE_URL}/industries/fintech`,
    images: [industryImage("fintech", "FinTech")],
  },
  {
    loc: `${SITE_URL}/industries/construction`,
    images: [industryImage("construction", "Construction")],
  },
  {
    loc: `${SITE_URL}/industries/insurance`,
    images: [industryImage("insurance", "Insurance")],
  },
  {
    loc: `${SITE_URL}/industries/e-commerce`,
    images: [industryImage("e-commerce", "E-commerce")],
  },
  {
    loc: `${SITE_URL}/industries/healthcare`,
    images: [industryImage("healthcare", "Healthcare")],
  },
  {
    loc: `${SITE_URL}/industries/legal-services`,
    images: [industryImage("legal-services", "Legal services")],
  },
  {
    loc: `${SITE_URL}/industries/saas`,
    images: [industryImage("saas", "SaaS")],
  },
  {
    loc: `${SITE_URL}/industries/manufacturing`,
    images: [industryImage("manufacturing", "Manufacturing")],
  },
  {
    loc: `${SITE_URL}/industries/real-estate`,
    images: [industryImage("real-estate", "Real estate")],
  },
  {
    loc: `${SITE_URL}/press-kit`,
    images: [
      brandLogoImage,
      {
        loc: ICON_512,
        title: "quant-lab-usa-icon-512-press-kit",
        caption: `${BRAND_NAME} icon 512x512 press kit asset`,
      },
      {
        loc: OG_IMAGE_SQUARE,
        title: "quant-lab-usa-square-brand-card-press-kit",
        caption: `${BRAND_NAME} square brand card press kit asset`,
      },
    ],
  },
  {
    loc: `${SITE_URL}/press`,
    images: [brandLogoImage, founderImage],
  },
];

export async function GET(): Promise<Response> {
  const urlBlocks = urlEntries
    .map((entry) => {
      const imageXml = entry.images
        .map((img) => {
          return `    <image:image>
      <image:loc>${escapeXml(img.loc)}</image:loc>
      <image:title>${escapeXml(img.title)}</image:title>
      <image:caption>${escapeXml(img.caption)}</image:caption>
    </image:image>`;
        })
        .join("\n");

      return `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
${imageXml}
  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urlBlocks}
</urlset>
`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=604800",
    },
  });
}
