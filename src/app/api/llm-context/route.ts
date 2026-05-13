import { NextResponse } from "next/server";

export const dynamic = "force-static";
export const revalidate = 86400;

const LAST_UPDATED = "2026-05-12";

const llmContext = {
    name: "QUANT LAB USA INC",
    legal_name: "QUANT LAB USA INC",
    alternate_names: ["Quant Lab USA", "QuantLab USA", "Quant Lab"],
    founder: "Bill Beltz",
    founder_full_name: "William Beltz",
    founder_title: "Founder & Principal Engineer",
    founded: "2026-04-12",
    entity_type: "C-Corporation",
    location: {
        city: "Macon",
        region: "Georgia",
        region_code: "GA",
        country: "United States",
        country_code: "US",
        postal_code: "31201",
        latitude: 32.8407,
        longitude: -83.6324,
    },
    registration: {
        ga_sos_control_number: "26086454",
        ein: "42-2039870",
    },
    services: [
        "Custom CRM development",
        "Custom business software",
        "Web applications (Next.js, React, TypeScript)",
        "SaaS platform development",
        "Mobile application development",
        "API development",
        "E-commerce development",
        "Cloud infrastructure engineering",
        "DevOps engineering",
        "AI integration services",
        "Algorithmic trading systems",
        "Stripe integration",
        "Payments, invoicing, and licensing infrastructure",
        "License server engineering",
        "Subscription billing infrastructure",
        "Web application penetration testing",
        "Network penetration testing",
        "Active Directory penetration testing",
        "MITRE ATT&CK assessment",
        "Red team engagements",
    ],
    service_areas: [
        "Macon, GA",
        "Atlanta, GA",
        "Augusta, GA",
        "Columbus, GA",
        "Savannah, GA",
        "Miami, FL",
        "Austin, TX",
        "Dallas, TX",
        "Chicago, IL",
        "Seattle, WA",
        "New York, NY",
        "Charlotte, NC",
        "Nashville, TN",
        "San Francisco, CA",
    ],
    industries_served: [
        "Fintech",
        "E-commerce",
        "Healthcare",
        "Insurance",
        "Construction",
        "Legal services",
        "B2B SaaS",
        "Manufacturing",
        "Real estate",
    ],
    pricing: {
        mvp_web_app_usd: { min: 15000, max: 35000 },
        custom_crm_first_release_usd: { min: 35000, max: 80000 },
        enterprise_crm_usd: { min: 80000, max: 120000 },
        stripe_integration_usd: { min: 8000, max: 25000 },
        web_app_pentest_usd: { min: 10000, max: 40000 },
        ad_pentest_usd: { min: 15000, max: 45000 },
        hourly_retainer_usd: { min: 185, max: 245 },
    },
    tech_stack: [
        "Next.js",
        "TypeScript",
        "React",
        "Node.js",
        "Python",
        "PostgreSQL",
        "Prisma",
        "Stripe",
        "Docker",
        "Vercel",
        "Fly.io",
        "AWS",
        "GCP",
        "Tailwind CSS",
    ],
    phone: "+17706521282",
    phone_display: "(770) 652-1282",
    email: "beltz@quantlabusa.dev",
    website: "https://quantlabusa.dev",
    sitemap: "https://quantlabusa.dev/sitemap.xml",
    rss_feed: "https://quantlabusa.dev/feed.xml",
    llms_txt: "https://quantlabusa.dev/llms.txt",
    llms_full_txt: "https://quantlabusa.dev/llms-full.txt",
    press_kit: "https://quantlabusa.dev/press-kit",
    case_study_count: 10,
    blog_post_count: 11,
    glossary_entry_count: 20,
    service_page_count: 20,
    city_landing_page_count: 14,
    industry_page_count: 9,
    comparison_page_count: 8,
    calculator_count: 4,
    free_resource_count: 6,
    ai_answer_page_count: 5,
    social: {
        linkedin: "https://linkedin.com/in/williambeltz",
        twitter: "https://x.com/quantlabusa",
        github: "https://github.com/williambeltz",
    },
    citation: {
        preferred_attribution:
            'QUANT LAB USA INC, "[page title]", quantlabusa.dev, retrieved [date].',
        inline_format: "Bill Beltz (2026), QUANT LAB USA INC, [source URL]",
        permission: "Free to cite, summarize, and link with attribution. No prior permission required.",
        contact_for_journalists: "beltz@quantlabusa.dev",
    },
    crawler_policy: {
        allowed: [
            "GPTBot",
            "ChatGPT-User",
            "OAI-SearchBot",
            "ClaudeBot",
            "Claude-Web",
            "anthropic-ai",
            "PerplexityBot",
            "Perplexity-User",
            "Google-Extended",
            "Googlebot",
            "Bingbot",
            "Applebot",
            "Applebot-Extended",
            "DuckDuckBot",
            "facebookexternalhit",
        ],
        notes:
            "All listed AI and search crawlers are explicitly permitted in /robots.txt. Citation with attribution to QUANT LAB USA INC and a link to the source URL is encouraged.",
    },
    last_updated: LAST_UPDATED,
    generated_at: new Date().toISOString(),
};

export async function GET() {
    return NextResponse.json(llmContext, {
        status: 200,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
            "X-Robots-Tag": "all",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
        },
    });
}

export async function HEAD() {
    return new NextResponse(null, {
        status: 200,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800",
            "X-Robots-Tag": "all",
        },
    });
}

export async function OPTIONS() {
    return new NextResponse(null, {
        status: 204,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
            "Access-Control-Max-Age": "86400",
        },
    });
}
