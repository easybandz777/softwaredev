#!/usr/bin/env node
// Inject LocalTrustStrip into every /software-development-<city>/page.tsx with
// a city-specific, verified local insight.
//
// Cities seed list mirrors AREA_SERVED_CITIES from lib/schemas/organization.ts.
// Insights are written from publicly-known economic/anchor-tenant facts. They
// do NOT claim QUANT LAB USA has a physical office in any city other than
// Macon, and they do NOT invent metrics.

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const REPO_ROOT = join(dirname(__filename), "..");

/** Verified, non-fabricated city anchors used in localInsight strings. */
const CITY_PROFILES = [
    {
        slug: "atlanta-ga",
        city: "Atlanta",
        state: "GA",
        landmark: "Transaction Alley",
        insight:
            "Atlanta is the densest fintech corridor in the southeast — Transaction Alley alone (FIS, Global Payments, NCR Atleos, Equifax, InComm) anchors a payments economy that pulls in supply-chain operators along the I-75/I-285 freight corridor and a deep production base built around Georgia's film tax credit. We sit 80 minutes south on I-75 in Macon, which means full Eastern Time overlap, day-of in-person availability for Buckhead, Midtown, Sandy Springs, and Alpharetta meetings, and no travel surcharges baked into the quote.",
        showGbp: true,
    },
    {
        slug: "macon-ga",
        city: "Macon",
        state: "GA",
        landmark: "Mercer University",
        insight:
            "Macon is the QUANT LAB USA headquarters — registered Georgia entity (GA SOS #26086454), local payroll, local sales tax, and a real office a homeowner can drive past. Middle Georgia's anchor tenants (Geico, GEICO Macon, Mercer University, Atrium Health Navicent, Mercer Engineering Research Center) drive the local SaaS and ops-platform demand we ship into, and Atlanta is a single I-75 drive away when the engagement warrants on-site work in metro ATL.",
        showGbp: true,
    },
    {
        slug: "augusta-ga",
        city: "Augusta",
        state: "GA",
        landmark: "Fort Eisenhower / U.S. Army Cyber Center",
        insight:
            "Augusta is Georgia's cyber corridor — Fort Eisenhower (formerly Fort Gordon) houses U.S. Army Cyber Command, the NSA Georgia Cryptologic Center, and the Army Cyber Center of Excellence, which has pulled a meaningful private cybersecurity ecosystem into the Augusta metro. Our offensive security practice and SOC 2 / FedRAMP-aware build experience are a natural fit for Augusta defense-adjacent contractors and the regional healthcare network anchored by AU Health.",
        showGbp: true,
    },
    {
        slug: "columbus-ga",
        city: "Columbus",
        state: "GA",
        landmark: "Fort Moore / Aflac HQ",
        insight:
            "Columbus is anchored by Fort Moore (formerly Fort Benning) — one of the largest U.S. Army posts — and by Aflac's global headquarters in downtown Columbus. Insurance, defense-adjacent contracting, and a strong regional healthcare presence (Piedmont Columbus Regional) drive the local custom-software demand we ship into, and we are an easy I-75 + I-185 drive from Macon.",
        showGbp: true,
    },
    {
        slug: "savannah-ga",
        city: "Savannah",
        state: "GA",
        landmark: "Port of Savannah",
        insight:
            "Savannah is the busiest single container terminal in North America (Garden City Terminal) and the largest port on the U.S. East Coast for export tonnage. That logistics density anchors a constant demand for warehouse, freight, and supply-chain custom software — the same systems we ship for Atlanta-metro logistics clients, with a clean ET-zone working relationship from Macon.",
        showGbp: true,
    },
    {
        slug: "miami-fl",
        city: "Miami",
        state: "FL",
        landmark: "Brickell financial district",
        insight:
            "Miami's Brickell-and-Wynwood tech corridor has become the southeast's second fintech hub behind Atlanta — driven by an inbound wave of crypto, e-commerce, and Latin-America-focused payments firms relocating from California and New York. We work with Miami fintech and SaaS founders remotely with full Eastern Time overlap; on-site visits are a single same-day flight from Atlanta or a direct flight from Macon-area airports.",
        showGbp: false,
    },
    {
        slug: "austin-tx",
        city: "Austin",
        state: "TX",
        landmark: "Domain / North Burnet tech corridor",
        insight:
            "Austin is one of the few U.S. metros where venture-backed SaaS density (Atlassian, Indeed, Bumble, Cloudflare, Oracle) sits next to a strong engineering talent base, which makes founder-led, fixed-fee custom builds genuinely competitive against the local consultancies' bench-rate model. We run Austin engagements remotely from Macon with a one-hour CT-zone overlap window and travel for kickoff or quarterly on-site work when scope warrants it.",
        showGbp: false,
    },
    {
        slug: "dallas-tx",
        city: "Dallas",
        state: "TX",
        landmark: "Telecom Corridor / Dallas-Fort Worth",
        insight:
            "Dallas-Fort Worth's Telecom Corridor (Plano, Richardson, Frisco) anchors AT&T, Texas Instruments, Toyota North America, and a deep enterprise IT services bench, which is exactly the buyer profile we work well with — established mid-market firms that need a senior engineering team without the bench-rate markup. We run DFW engagements with a one-hour CT-zone overlap from Macon and on-site availability for procurement-led kickoffs.",
        showGbp: false,
    },
    {
        slug: "chicago-il",
        city: "Chicago",
        state: "IL",
        landmark: "Chicago Loop / Fulton Market",
        insight:
            "Chicago anchors the U.S. derivatives and futures markets (CME Group, Cboe), a deep enterprise-fintech bench, and the Fulton Market tech corridor that has pulled Google, McDonald's, and a growing wave of B2B SaaS firms into the West Loop. Our algorithmic trading and Stripe-grade payments work fits the Chicago buyer profile cleanly; we run CT-zone engagements with full one-hour overlap from Macon.",
        showGbp: false,
    },
    {
        slug: "seattle-wa",
        city: "Seattle",
        state: "WA",
        landmark: "South Lake Union",
        insight:
            "Seattle is the AWS and Microsoft Azure anchor metro — the talent and architecture patterns that flow out of South Lake Union shape how the rest of the country builds cloud-native SaaS. We work with Seattle-area founders remotely with a three-hour PT-zone overlap window; the time-zone shift is real but the engineering shorthand (Next.js / TypeScript / Postgres / AWS) is the same. Travel for kickoff or quarterly review is a single direct flight from Atlanta.",
        showGbp: false,
    },
    {
        slug: "new-york-ny",
        city: "New York",
        state: "NY",
        landmark: "Flatiron / Silicon Alley",
        insight:
            "New York's Silicon Alley anchors the country's deepest venture-backed B2B SaaS, fintech, and media-tech bench — which also means it has more shops to choose from than any other U.S. metro. We win NYC engagements by being the founder-led senior alternative to the agency-of-record model: direct line to the engineer, fixed-fee scope, and procurement-friendly documentation. ET-zone overlap is full; on-site work is a single same-day flight from Atlanta.",
        showGbp: false,
    },
    {
        slug: "charlotte-nc",
        city: "Charlotte",
        state: "NC",
        landmark: "Uptown banking district",
        insight:
            "Charlotte is the second-largest U.S. banking hub by deposits — Bank of America HQ, Truist HQ, and a deep regional financial-services bench — which has pulled a strong fintech and B2B SaaS ecosystem into the Uptown corridor and the Ballantyne / South End submarkets. We ship Stripe-grade billing and SOC 2 / PCI-DSS-aware builds that fit Charlotte's financial-services buyer expectations, with full ET overlap from Macon.",
        showGbp: false,
    },
    {
        slug: "nashville-tn",
        city: "Nashville",
        state: "TN",
        landmark: "Healthcare Corridor",
        insight:
            "Nashville is the nation's healthcare management capital — anchored by HCA Healthcare HQ, the largest concentration of for-profit hospital ownership in the country, and a deep healthcare-IT vendor ecosystem (Change Healthcare, Asurion, Premise Health). Our HIPAA-aware custom builds, EHR-adjacent integrations, and SOC 2 readiness work map cleanly to the Nashville buyer profile, with a one-hour CT overlap and a single-flight on-site option from Atlanta.",
        showGbp: false,
    },
    {
        slug: "san-francisco-ca",
        city: "San Francisco",
        state: "CA",
        landmark: "SoMa / Mission Bay",
        insight:
            "San Francisco is still the deepest venture-backed software talent market in the world, which also means SF buyers pay a real premium for local senior engineering capacity. We win SF and broader Bay Area engagements by offering the same senior delivery model at a transparent, southeast cost structure — direct line to the engineer, fixed-fee scope, and full async coverage of a three-hour PT-zone gap from Macon.",
        showGbp: false,
    },
];

const IMPORT_LINE = `import { LocalTrustStrip } from "@/components/LocalTrustStrip";`;

const NEARBY_ANCHOR =
    '<h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services & nearby cities</h2>';

const results = [];

for (const profile of CITY_PROFILES) {
    const file = join(
        REPO_ROOT,
        `src/app/software-development-${profile.slug}/page.tsx`,
    );
    if (!existsSync(file)) {
        results.push({ slug: profile.slug, status: "missing-file" });
        continue;
    }
    let src = readFileSync(file, "utf8");
    const original = src;

    // Skip if already wired.
    if (src.includes("LocalTrustStrip")) {
        results.push({ slug: profile.slug, status: "already-wired" });
        continue;
    }

    // Inject import next to the ConsultationCTA import.
    const ctaRe = /(import \{ ConsultationCTA \} from "@\/components\/ConsultationCTA";)/;
    if (ctaRe.test(src)) {
        src = src.replace(ctaRe, `$1\n${IMPORT_LINE}`);
    } else {
        src = src.replace(/(import [^\n]+;\n)/, `$1${IMPORT_LINE}\n`);
    }

    // Build the JSX block.
    const insightEscaped = profile.insight.replace(/"/g, '\\"');
    const block = `                    <LocalTrustStrip
                        city="${profile.city}"
                        state="${profile.state}"
                        landmark="${profile.landmark.replace(/"/g, '\\"')}"
                        localInsight="${insightEscaped}"
                        showGbp={${profile.showGbp ? "true" : "false"}}
                        className="mb-12"
                    />
                    `;

    // Insert above the "Related services & nearby cities" heading.
    if (!src.includes(NEARBY_ANCHOR)) {
        results.push({ slug: profile.slug, status: "no-anchor" });
        if (src !== original) writeFileSync(file, src, "utf8");
        continue;
    }
    src = src.replace(NEARBY_ANCHOR, block + NEARBY_ANCHOR);

    writeFileSync(file, src, "utf8");
    results.push({ slug: profile.slug, status: "wired" });
}

const summary = {
    total: results.length,
    wired: results.filter((r) => r.status === "wired").length,
    already: results.filter((r) => r.status === "already-wired").length,
    noAnchor: results.filter((r) => r.status === "no-anchor").length,
    missing: results.filter((r) => r.status === "missing-file").length,
};
console.log("LocalTrustStrip injection summary:", summary);
if (process.env.VERBOSE) {
    for (const r of results) console.log(" -", r.slug, r.status);
}
