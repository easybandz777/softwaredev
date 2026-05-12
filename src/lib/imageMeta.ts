export const SITE_URL = "https://quantlabusa.dev";
export const BRAND_NAME = "QUANT LAB USA INC";
export const BRAND_SHORT = "QuantLab";
export const BRAND_LOCATION = "Macon, Georgia";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;
export const DEFAULT_OG_IMAGE_SQUARE = `${SITE_URL}/og-image-square.png`;
export const DEFAULT_TWITTER_CARD = `${SITE_URL}/twitter-card.png`;

export type ImageContextKind =
    | "service"
    | "industry"
    | "city"
    | "comparison"
    | "case-study"
    | "blog"
    | "founder"
    | "logo"
    | "hero";

export const serviceLabels: Record<string, string> = {
    "custom-business-software": "Custom business software development",
    "custom-crm-development": "Custom CRM development",
    "web-applications": "Web application development with Next.js",
    "stripe-integration": "Stripe payment integration",
    "payments-invoicing-licensing": "Payment, invoicing and licensing systems",
    "penetration-testing": "Penetration testing and offensive security",
    "mitre-attack-assessment": "MITRE ATT&CK assessment",
    "algorithmic-trading-systems": "Algorithmic trading system development",
    "cloud-infrastructure": "Cloud infrastructure and DevOps",
};

export const industryLabels: Record<string, string> = {
    fintech: "FinTech",
    construction: "Construction",
    insurance: "Insurance",
    "e-commerce": "E-commerce",
    healthcare: "Healthcare",
    automotive: "Automotive",
    entertainment: "Entertainment",
};

export const cityLabels: Record<string, string> = {
    "macon-ga": "Macon, Georgia",
    "atlanta-ga": "Atlanta, Georgia",
    "augusta-ga": "Augusta, Georgia",
    "columbus-ga": "Columbus, Georgia",
    "savannah-ga": "Savannah, Georgia",
    "miami-fl": "Miami, Florida",
    "austin-tx": "Austin, Texas",
    "dallas-tx": "Dallas, Texas",
    "chicago-il": "Chicago, Illinois",
    "seattle-wa": "Seattle, Washington",
    "new-york-ny": "New York, New York",
    "charlotte-nc": "Charlotte, North Carolina",
    "nashville-tn": "Nashville, Tennessee",
    "san-francisco-ca": "San Francisco, California",
};

export const serviceOgImages: Record<string, string> = {
    "custom-crm-development": "/og-crm.png",
    "penetration-testing": "/og-pentest.png",
    "mitre-attack-assessment": "/og-pentest.png",
    "custom-business-software": "/og-services.png",
    "algorithmic-trading-systems": "/og-trading.png",
    "stripe-integration": "/og-stripe.png",
    "payments-invoicing-licensing": "/og-stripe.png",
    "web-applications": "/og-web-apps.png",
};

export function ogImageForService(slug: string): string {
    const path = serviceOgImages[slug] ?? "/og-image.png";
    return `${SITE_URL}${path}`;
}

export function imageAltFor(kind: ImageContextKind, slug?: string): string {
    switch (kind) {
        case "service": {
            const label = slug ? serviceLabels[slug] : undefined;
            if (label) return `${label} for SMB and SaaS clients by ${BRAND_NAME}`;
            return `Custom software development services from ${BRAND_NAME}`;
        }
        case "industry": {
            const label = slug ? industryLabels[slug] : undefined;
            if (label) return `Custom software development for the ${label} industry by ${BRAND_NAME}`;
            return `Industry-specific software solutions by ${BRAND_NAME}`;
        }
        case "city": {
            const label = slug ? cityLabels[slug] : undefined;
            if (label) return `Software development company serving ${label} by ${BRAND_NAME}`;
            return `${BRAND_NAME} software development services`;
        }
        case "comparison":
            return `${BRAND_NAME} compared with ${slug ?? "alternatives"}`;
        case "case-study":
            return `${slug ?? "Client"} case study by ${BRAND_NAME} software development team`;
        case "blog":
            return `${slug ?? "Article"} from ${BRAND_NAME} engineering blog`;
        case "founder":
            return `Bill Beltz, founder and lead engineer of ${BRAND_NAME} based in ${BRAND_LOCATION}`;
        case "logo":
            return `${BRAND_NAME} custom software development and cybersecurity company logo`;
        case "hero":
            return `${BRAND_NAME} custom software development team in ${BRAND_LOCATION}`;
        default:
            return `${BRAND_NAME}`;
    }
}

export function ogImageForKind(kind: ImageContextKind, slug?: string): string {
    if (kind === "service" && slug) return ogImageForService(slug);
    return DEFAULT_OG_IMAGE;
}
