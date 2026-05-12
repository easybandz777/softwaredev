import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Shield, Check, ArrowRight } from "lucide-react";

type FAQ = { q: string; a: string };
type NearbyService = { href: string; title: string; desc: string };

type CityData = {
    slug: string;
    displayName: string;
    state: string;
    stateName: string;
    metaTitle: string;
    metaDescription: string;
    hook: string;
    intro: string;
    methodologyNote: string;
    keywords: string[];
    faqs: FAQ[];
    nearbyServices: NearbyService[];
    suggestedCaseStudy: { slug: string; title: string; blurb: string };
    siblingCities: string[]; // slugs of 1-2 sibling pentest pages
};

const CITIES: Record<string, CityData> = {
    "macon-ga": {
        slug: "macon-ga",
        displayName: "Macon",
        state: "GA",
        stateName: "Georgia",
        metaTitle: "Penetration Testing Services in Macon, GA | QuantLab",
        metaDescription:
            "MITRE ATT&CK-aligned web app, network, and Active Directory pentest for Macon, GA businesses. Founder-led, no offshore. Get a scoping call.",
        hook: "Macon-area businesses get cybersecurity attention from one of two extremes: Atlanta consultancies pricing for Fortune 500 budgets, or out-of-state vendors who treat Middle Georgia as an after-hours account. Neither one picks up the phone when something breaks.",
        intro: "QuantLab USA is headquartered right here in Macon — same time zone, same area code. We run the same web app, network, and Active Directory pentests for Middle Georgia clients that we run for Atlanta and Charlotte buyers. The methodology does not change. The relationship does.",
        methodologyNote: "Local pentest engagements for Macon healthcare practices, manufacturers, and trades businesses typically combine an external perimeter scan with internal AD review and a focused web application test on the customer-facing portal.",
        keywords: [
            "penetration testing macon ga",
            "macon cybersecurity",
            "middle georgia pentest",
            "macon network security testing",
        ],
        faqs: [
            {
                q: "Are you actually based in Macon?",
                a: "Yes. QuantLab USA is headquartered in Macon. William Beltz lives and works here. We are not an out-of-state agency claiming a satellite office for SEO reasons.",
            },
            {
                q: "Can you meet with us on-site in Bibb County?",
                a: "Yes. On-site discovery, wireless walkthroughs, and physical red team work are easy to schedule for Macon, Warner Robins, and the wider Middle Georgia area. No travel premium.",
            },
            {
                q: "We are a small Macon business — do we really need a pentest?",
                a: "If you process customer payments, hold patient data, or have a contract with an enterprise that runs vendor security questionnaires, yes. We scope right-sized engagements for small operators — typically a focused external + web app test runs 1-2 weeks.",
            },
        ],
        nearbyServices: [
            { href: "/services/penetration-testing/atlanta-ga", title: "Atlanta, GA Pentests", desc: "Fintech and Transaction Alley engagements up I-75." },
            { href: "/services/penetration-testing/savannah-ga", title: "Savannah, GA Pentests", desc: "Port logistics and hospitality engagements down I-16." },
        ],
        suggestedCaseStudy: {
            slug: "active-directory-pentest",
            title: "Active Directory Pentest Case Study",
            blurb: "A full attack chain from standard user to Domain Admin — the same methodology we apply to Macon-area AD engagements.",
        },
        siblingCities: ["atlanta-ga", "savannah-ga"],
    },
    "atlanta-ga": {
        slug: "atlanta-ga",
        displayName: "Atlanta",
        state: "GA",
        stateName: "Georgia",
        metaTitle: "Penetration Testing Services in Atlanta, GA | QuantLab",
        metaDescription:
            "MITRE ATT&CK-aligned web app, network, and Active Directory pentest for Atlanta fintech and SaaS. Founder-led, no offshore. Get a scoping call.",
        hook: "Atlanta is Transaction Alley — over 70% of US card payments route through metro Atlanta processors. Fintech buyers, SaaS founders selling into Buckhead enterprises, and the Fortune 500 vendor ecosystem all share one need: a pentest report that survives a SOC 2 audit and an enterprise procurement review without footnotes.",
        intro: "QuantLab USA runs full-scope pentests for Atlanta companies preparing for SOC 2 Type II attestation, PCI assessment, or enterprise customer security reviews. Web application, network, wireless, and Active Directory engagements with every finding mapped to MITRE ATT&CK technique IDs — the format your buyer's CISO and your audit partner both expect.",
        methodologyNote: "For Atlanta fintech and payments clients, we typically scope a credentialed web app test against the production application plus an internal AD assessment to surface lateral movement paths before the SOC 2 auditor does.",
        keywords: [
            "penetration testing atlanta",
            "atlanta cybersecurity",
            "soc 2 pentest atlanta",
            "fintech penetration testing georgia",
        ],
        faqs: [
            {
                q: "Will your pentest report satisfy SOC 2 CC4.1?",
                a: "Yes. Reports include the executive summary, methodology, finding-level evidence, and remediation narrative that SOC 2 auditors expect. We have shipped reports into completed Type II attestations.",
            },
            {
                q: "Do you understand Stripe and payments architecture?",
                a: "Yes — Stripe Connect, ACH, and PCI-adjacent flows are core to our development practice, which directly informs how we attack them. Web app and API tests against payments code paths are a frequent scope for our Atlanta clients.",
            },
            {
                q: "Can you scope around an upcoming enterprise procurement deadline?",
                a: "Yes. Most SOC 2 / vendor-review windows for Atlanta clients are 4-8 weeks. We can typically start within 2 weeks of a signed engagement letter and deliver a final report inside that window.",
            },
        ],
        nearbyServices: [
            { href: "/services/penetration-testing/macon-ga", title: "Macon, GA Pentests", desc: "Our Georgia HQ — Middle Georgia coverage." },
            { href: "/services/penetration-testing/charlotte-nc", title: "Charlotte, NC Pentests", desc: "Banking-grade vendor reviews up I-85." },
        ],
        suggestedCaseStudy: {
            slug: "j5-sales-os",
            title: "J5 Sales OS",
            blurb: "A SaaS platform we built and secured end-to-end — the same threat model we apply on Atlanta SaaS engagements.",
        },
        siblingCities: ["macon-ga", "charlotte-nc"],
    },
    "augusta-ga": {
        slug: "augusta-ga",
        displayName: "Augusta",
        state: "GA",
        stateName: "Georgia",
        metaTitle: "Penetration Testing Services in Augusta, GA | QuantLab",
        metaDescription:
            "NIST/CMMC-aware web app, network, and AD pentest for the Fort Eisenhower cyber corridor. Founder-led, no offshore. Get a scoping call.",
        hook: "Augusta sits at the center of the southeast's cyber corridor — Fort Eisenhower, Army Cyber Command, and a growing private-sector defense supplier base along Reynolds and Broad Streets. Pentest buyers here do not want a sanitized PDF; they want a report that genuinely demonstrates offensive capability and survives a NIST or CMMC review.",
        intro: "QuantLab USA runs full-scope pentests for Augusta-area defense suppliers, contractors, and the regional medical and legal firms that anchor the CSRA. Engagements are mapped to MITRE ATT&CK and structured for NIST SP 800-171 / CMMC alignment — formal deliverables for federal supply-chain and compliance reviews.",
        methodologyNote: "For Augusta contractors with CUI exposure, we scope deliberately around the NIST 800-171 control families — access control, audit, identification, and incident response — so the report maps cleanly to the assessment objective.",
        keywords: [
            "penetration testing augusta ga",
            "cmmc pentest augusta",
            "nist 800-171 penetration test",
            "fort eisenhower cyber contractor",
        ],
        faqs: [
            {
                q: "Is your report acceptable for CMMC and NIST 800-171 reviews?",
                a: "Reports are structured to align with the control families a CMMC C3PAO or NIST assessor expects to see. We are not a registered C3PAO ourselves, but the pentest output is built to feed directly into that assessment.",
            },
            {
                q: "Do you hold security clearances?",
                a: "Clearance status is discussed under NDA, not on a public marketing page. Reach out and we will answer directly for your engagement.",
            },
            {
                q: "Can you produce a pentest report I can hand to a federal prime?",
                a: "Yes. Reports are formatted for prime-contractor supply-chain review with executive summary, methodology, full evidence chain, and MITRE ATT&CK mapping — exactly the format primes ask vendors for.",
            },
        ],
        nearbyServices: [
            { href: "/services/penetration-testing/atlanta-ga", title: "Atlanta, GA Pentests", desc: "Fintech and SaaS engagements up I-20." },
            { href: "/services/penetration-testing/columbus-ga", title: "Columbus, GA Pentests", desc: "Defense-adjacent Chattahoochee Valley clients." },
        ],
        suggestedCaseStudy: {
            slug: "active-directory-pentest",
            title: "Active Directory Pentest Case Study",
            blurb: "Standard-user-to-Domain-Admin attack chain — the same chain federal supply-chain reviewers expect to see tested.",
        },
        siblingCities: ["atlanta-ga", "columbus-ga"],
    },
    "columbus-ga": {
        slug: "columbus-ga",
        displayName: "Columbus",
        state: "GA",
        stateName: "Georgia",
        metaTitle: "Penetration Testing Services in Columbus, GA | QuantLab",
        metaDescription:
            "MITRE ATT&CK-aligned web app, network, and AD pentest for Columbus, GA and Chattahoochee Valley small business. Founder-led. Scoping call available.",
        hook: "Columbus and the Chattahoochee Valley have a defense-adjacent economy around Fort Moore, the legacy Aflac and TSYS payments ecosystem, and a steady pool of family-owned operators on both sides of the river. Cybersecurity buyers here are looking for a Georgia firm who understands defense supply-chain expectations without charging enterprise consulting rates.",
        intro: "QuantLab USA runs right-sized pentests for Columbus-area defense suppliers, payments-adjacent mid-market firms, and small businesses on both the Georgia and Alabama sides of the river. The methodology is identical to what we run for Atlanta fintech clients — the engagement size is what we scale.",
        methodologyNote: "For Columbus defense-adjacent suppliers, we frequently combine an external perimeter test with a focused internal AD review to validate the segmentation between corporate IT and any contract-specific environments.",
        keywords: [
            "penetration testing columbus ga",
            "chattahoochee valley cybersecurity",
            "fort moore contractor pentest",
            "small business penetration test georgia",
        ],
        faqs: [
            {
                q: "Do you serve businesses on the Alabama side of the river?",
                a: "Yes — Phenix City and metro Columbus engagements are routine for us. The Chattahoochee Valley is one regional market as far as our delivery is concerned.",
            },
            {
                q: "Can you scope a smaller pentest for a small operator?",
                a: "Yes. We scope right-sized engagements — a focused external + web app test for a small operator typically runs 1 week of active testing plus reporting, not the multi-week enterprise format.",
            },
            {
                q: "Do you work with Fort Moore supply-chain contractors?",
                a: "Yes. Reports are structured to align with NIST 800-171 control families for contractors with CUI exposure. We scope clearance and CUI handling on a case-by-case basis under NDA.",
            },
        ],
        nearbyServices: [
            { href: "/services/penetration-testing/augusta-ga", title: "Augusta, GA Pentests", desc: "Fort Eisenhower cyber corridor engagements." },
            { href: "/services/penetration-testing/atlanta-ga", title: "Atlanta, GA Pentests", desc: "Fintech and SaaS engagements up I-85." },
        ],
        suggestedCaseStudy: {
            slug: "active-directory-pentest",
            title: "Active Directory Pentest Case Study",
            blurb: "An end-to-end internal AD attack chain — the same shape of engagement we scope for Columbus mid-market clients.",
        },
        siblingCities: ["augusta-ga", "atlanta-ga"],
    },
    "savannah-ga": {
        slug: "savannah-ga",
        displayName: "Savannah",
        state: "GA",
        stateName: "Georgia",
        metaTitle: "Penetration Testing Services in Savannah, GA | QuantLab",
        metaDescription:
            "MITRE ATT&CK-aligned web app, network, and AD pentest for Savannah port logistics, hospitality, and SCAD-founder SaaS. Get a scoping call.",
        hook: "Savannah's pentest demand comes from three different verticals: the Port of Savannah (now the third-busiest container port in the US) and the drayage / logistics layer around it, a deep hospitality sector that handles payment data at volume, and a fast-growing SCAD-founder SaaS scene operating out of the historic district. Each one has a different threat model.",
        intro: "QuantLab USA scopes engagements for each of those Savannah verticals separately. Logistics and TMS-adjacent clients get an internal network + EDI integration focus. Hospitality operators get a payment-flow and PCI-adjacent web app test. SCAD-founder SaaS gets a credentialed web app and API engagement that fits a pre-launch security review.",
        methodologyNote: "Port-adjacent and logistics clients in Savannah usually need an internal AD test plus an external perimeter pass focused on the integration points between corporate IT and TMS or EDI systems — those edges are where the real breaches happen.",
        keywords: [
            "penetration testing savannah ga",
            "port of savannah cybersecurity",
            "scad startup pentest",
            "hospitality pci pentest savannah",
        ],
        faqs: [
            {
                q: "Do you understand port and drayage logistics integration security?",
                a: "Yes. We have experience with EDI, freight APIs, and the integration seams between corporate IT and TMS systems — which is where the most consequential findings on logistics engagements live.",
            },
            {
                q: "Can you test a pre-launch SaaS for a SCAD founder?",
                a: "Yes — pre-launch testing on a staging environment is ideal. Findings cost much less to fix before you have production users and your first enterprise customer's security questionnaire.",
            },
            {
                q: "Do you handle payment-flow testing for boutique hotels and tour operators?",
                a: "Yes. Stripe, Square, and custom payment integrations are core to our development practice, which directly informs how we test them. PCI-adjacent web app coverage is standard scope.",
            },
        ],
        nearbyServices: [
            { href: "/services/penetration-testing/macon-ga", title: "Macon, GA Pentests", desc: "Our Georgia HQ — Middle Georgia coverage." },
            { href: "/services/penetration-testing/atlanta-ga", title: "Atlanta, GA Pentests", desc: "Fintech and SaaS engagements up I-16/I-75." },
        ],
        suggestedCaseStudy: {
            slug: "j5-sales-os",
            title: "J5 Sales OS",
            blurb: "A SaaS platform we built and secured end-to-end — the architecture pattern we apply to SCAD-founder SaaS engagements.",
        },
        siblingCities: ["macon-ga", "atlanta-ga"],
    },
    "miami-fl": {
        slug: "miami-fl",
        displayName: "Miami",
        state: "FL",
        stateName: "Florida",
        metaTitle: "Penetration Testing Services in Miami, FL | QuantLab",
        metaDescription:
            "MITRE ATT&CK-aligned web app, network, and AD pentest for Miami fintech, LATAM-facing SaaS, and hospitality. Founder-led. Get a scoping call.",
        hook: "Miami has become a serious tech market — fintech founders relocating from New York and the Bay, an inbound capital gateway for Latin America, and a hospitality sector handling payment data at volume from Brickell through South Beach. The defining wrinkle for pentest scope is cross-border: bilingual products, multi-currency billing, LATAM compliance edge cases, and threat actors operating from outside US jurisdiction.",
        intro: "QuantLab USA runs full-scope pentests for Miami fintech and LATAM-facing SaaS clients with that cross-border profile in mind. Web application engagements specifically cover the i18n, multi-currency, and identity-verification flows that are unique to companies serving both US and LATAM customers. Reports are formatted for institutional investor due diligence — the audience that is usually next after the Series A.",
        methodologyNote: "For Miami LATAM-facing fintech, we scope around the payment-processor seams (Stripe + local LATAM processors), KYC/identity-verification flows, and any cross-tenant data isolation — the areas where international threat actors actually probe.",
        keywords: [
            "penetration testing miami fl",
            "miami fintech cybersecurity",
            "latam saas pentest",
            "miami hospitality pci pentest",
        ],
        faqs: [
            {
                q: "Can you test multi-currency and LATAM payment flows?",
                a: "Yes. We work with Stripe as our default and understand its LATAM limitations — including when a build needs to route through a local processor. Those integration seams are explicit test targets.",
            },
            {
                q: "Will your report satisfy institutional investor due diligence?",
                a: "Yes — reports include the executive summary, methodology, and MITRE ATT&CK mapping that institutional investor security reviewers and outside counsel expect. We have shipped reports into completed Series A diligence.",
            },
            {
                q: "Do you support Spanish-language scope discussions?",
                a: "Engagement letters and reports are English-default. Scoping conversations in Spanish can be arranged — reach out and we will accommodate.",
            },
        ],
        nearbyServices: [
            { href: "/services/penetration-testing/atlanta-ga", title: "Atlanta, GA Pentests", desc: "Southeast fintech and SaaS engagements." },
            { href: "/services/penetration-testing/charlotte-nc", title: "Charlotte, NC Pentests", desc: "Banking-grade vendor reviews." },
        ],
        suggestedCaseStudy: {
            slug: "j5-sales-os",
            title: "J5 Sales OS",
            blurb: "A SaaS platform we built and secured end-to-end — the architecture pattern we apply to LATAM-facing fintech engagements.",
        },
        siblingCities: ["atlanta-ga", "charlotte-nc"],
    },
    "austin-tx": {
        slug: "austin-tx",
        displayName: "Austin",
        state: "TX",
        stateName: "Texas",
        metaTitle: "Penetration Testing Services in Austin, TX | QuantLab",
        metaDescription:
            "MITRE ATT&CK-aligned web app and AD pentest for Austin startups, SOC 2 prep, and Series A fundraising security gates. Founder-led. Get a scoping call.",
        hook: "Austin is a builder's town with one of the densest founder populations in the country. The Austin pentest buyer is usually a Series Seed or Series A founder preparing for a security gate — SOC 2 Type I or II is on the term sheet from the lead investor, or the first enterprise customer's security questionnaire just landed in their inbox. The wrong vendor here burns a fundraising window.",
        intro: "QuantLab USA scopes pentests around Austin founder velocity. Engagements are sized to land inside a 4-8 week SOC 2 readiness window. Web application and credentialed API testing is the most common scope, with an internal AD or cloud-perimeter add-on for startups that have already gone past pure SaaS. Every finding is mapped to MITRE ATT&CK and the SOC 2 trust criteria.",
        methodologyNote: "For Austin SaaS pre-Series A, the standard scope is a credentialed web app + API test against the production application plus an external perimeter scan — exactly what an investor security reviewer will probe.",
        keywords: [
            "penetration testing austin tx",
            "soc 2 pentest austin",
            "series a security audit",
            "startup penetration test texas",
        ],
        faqs: [
            {
                q: "Can you fit a pentest inside a SOC 2 Type I readiness window?",
                a: "Yes. Typical web app pentest with reporting lands in 2-3 weeks active testing plus 1 week reporting. We have shipped reports into SOC 2 Type I attestations on Austin client timelines.",
            },
            {
                q: "Will an institutional investor accept your report for diligence?",
                a: "Yes — reports include the executive summary, methodology, MITRE ATT&CK mapping, and attestation letter that institutional investor security reviewers expect. The format works for both audit and diligence.",
            },
            {
                q: "Do you understand modern SaaS stacks?",
                a: "Yes. Next.js, TypeScript, PostgreSQL, Vercel, AWS, Stripe — this is our development stack, which directly informs how we attack it. We are not testing your stack from the outside.",
            },
        ],
        nearbyServices: [
            { href: "/services/penetration-testing/dallas-tx", title: "Dallas, TX Pentests", desc: "Enterprise IT and DFW corporate engagements." },
            { href: "/services/penetration-testing/atlanta-ga", title: "Atlanta, GA Pentests", desc: "Southeast fintech and SaaS engagements." },
        ],
        suggestedCaseStudy: {
            slug: "j5-sales-os",
            title: "J5 Sales OS",
            blurb: "A SaaS platform we built and secured end-to-end — the architecture pattern we apply to Series-A-stage Austin engagements.",
        },
        siblingCities: ["dallas-tx", "atlanta-ga"],
    },
    "dallas-tx": {
        slug: "dallas-tx",
        displayName: "Dallas",
        state: "TX",
        stateName: "Texas",
        metaTitle: "Penetration Testing Services in Dallas, TX | QuantLab",
        metaDescription:
            "MITRE ATT&CK-aligned internal network, AD, and web app pentest for DFW enterprise IT and corporate buyers. Founder-led. Get a scoping call.",
        hook: "DFW is a corporate IT and supply-chain heavyweight — one of the country's largest concentrations of Fortune 500 headquarters, a massive freight and distribution base, and a deep mid-market layer running on aging custom software. The DFW pentest buyer is usually a corporate IT lead modernizing a creaking internal application or hardening an Active Directory environment that has drifted over a decade.",
        intro: "QuantLab USA runs internal network and Active Directory pentests for DFW corporate IT leads, plus web application engagements against legacy internal tools mid-modernization. Reports are written for procurement, audit, and the CISO's leadership briefing — three different audiences, one document.",
        methodologyNote: "For DFW corporate IT clients, the highest-value scope is usually an internal AD assessment from an assumed-breach starting position — standard user on a corporate VLAN — combined with a focused review of any internal web applications mid-modernization.",
        keywords: [
            "penetration testing dallas tx",
            "dfw corporate cybersecurity",
            "enterprise active directory pentest",
            "dallas internal network testing",
        ],
        faqs: [
            {
                q: "Do you do internal network pentests?",
                a: "Yes — internal AD, lateral movement, Kerberoasting, ADCS abuse, and segmentation reviews are core scope. This is one of the most common DFW engagement profiles.",
            },
            {
                q: "Can you write a report procurement and audit can both use?",
                a: "Yes. Reports include the executive summary for leadership, the technical narrative for engineering, an appendix mapping every finding to MITRE ATT&CK for the SOC, and a prioritized remediation roadmap for the project plan.",
            },
            {
                q: "Do you bill fixed scope or T&M?",
                a: "Fixed scope on most engagements — DFW corporate IT clients overwhelmingly prefer that over T&M for budget reasons. We only quote T&M for genuinely open-ended R&D work.",
            },
        ],
        nearbyServices: [
            { href: "/services/penetration-testing/austin-tx", title: "Austin, TX Pentests", desc: "Startup SOC 2 and Series A engagements." },
            { href: "/services/penetration-testing/chicago-il", title: "Chicago, IL Pentests", desc: "Finance and logistics enterprise engagements." },
        ],
        suggestedCaseStudy: {
            slug: "active-directory-pentest",
            title: "Active Directory Pentest Case Study",
            blurb: "Standard-user-to-Domain-Admin attack chain — the same engagement shape we scope for DFW enterprise IT clients.",
        },
        siblingCities: ["austin-tx", "chicago-il"],
    },
    "chicago-il": {
        slug: "chicago-il",
        displayName: "Chicago",
        state: "IL",
        stateName: "Illinois",
        metaTitle: "Penetration Testing Services in Chicago, IL | QuantLab",
        metaDescription:
            "MITRE ATT&CK-aligned web app, network, and AD pentest for Chicago trading firms, logistics, and finance. Founder-led. Get a scoping call.",
        hook: "Chicago's pentest demand profile is unusually rich: the trading and proprietary-finance ecosystem around the CBOT and CME, a massive logistics and rail-hub footprint, and a deep manufacturing base in the collar counties. Trading-firm pentest buyers in particular care about one thing that generalist vendors miss — does the tester understand quant tooling and broker APIs, or are they only going to find the obvious findings?",
        intro: "QuantLab USA has in-house algorithmic trading bot development and broker-integration capability. That informs how we attack trading-firm infrastructure — credential exposure on broker API endpoints, FIX session abuse, internal lateral movement to position data, and the integration seams between research and execution. For non-trading Chicago clients we run the same web app and AD engagements we run elsewhere.",
        methodologyNote: "For Chicago trading firms, scope typically combines an external perimeter and web app test against client-facing surfaces with an internal AD review focused on lateral movement paths to trading systems and PnL data.",
        keywords: [
            "penetration testing chicago il",
            "chicago trading firm cybersecurity",
            "cme cbot pentest",
            "logistics manufacturing pentest illinois",
        ],
        faqs: [
            {
                q: "Do you understand trading firm and broker-API security?",
                a: "Yes. We do in-house algorithmic trading bot development and broker integration — IBKR, Alpaca, TopstepX, Tradier, and others. That informs how we test trading firms from the inside, not just from the outside.",
            },
            {
                q: "Can you support a SOX-driven internal audit cycle?",
                a: "Yes — reports are formatted to drop into SOX audit binders, with the control-mapping appendix Chicago SOX-bound clients ask for. We have shipped pentest output into completed SOX cycles.",
            },
            {
                q: "Do you fly in for kickoffs?",
                a: "For engagements that warrant it, yes. Discovery and reporting are remote-default; on-site is available for trading floor walkthroughs and physical red team scoping.",
            },
        ],
        nearbyServices: [
            { href: "/services/penetration-testing/dallas-tx", title: "Dallas, TX Pentests", desc: "DFW corporate IT and enterprise engagements." },
            { href: "/services/penetration-testing/new-york-ny", title: "New York, NY Pentests", desc: "Fintech and brokerage-adjacent engagements." },
        ],
        suggestedCaseStudy: {
            slug: "multi-strategy-trading-system",
            title: "Multi-Strategy Trading System",
            blurb: "An in-house trading system we built and ran — the same threat model and attack surface we test on Chicago trading-firm engagements.",
        },
        siblingCities: ["dallas-tx", "new-york-ny"],
    },
    "seattle-wa": {
        slug: "seattle-wa",
        displayName: "Seattle",
        state: "WA",
        stateName: "Washington",
        metaTitle: "Penetration Testing Services in Seattle, WA | QuantLab",
        metaDescription:
            "MITRE ATT&CK-aligned web app, cloud, and AD pentest for Seattle SaaS, AWS-heavy dev tools, and cloud-native startups. Get a scoping call.",
        hook: "Seattle's software economy is anchored by Amazon and Microsoft, surrounded by a fast-moving SaaS and dev-tools ecosystem and a steady stream of bootstrapped indie SaaS founders. The defining feature of pentest scope here is cloud-native — most Seattle apps live in AWS, ship through CI/CD pipelines, and use IAM-heavy authorization patterns. The interesting findings are in the cloud and CI/CD seams, not the traditional perimeter.",
        intro: "QuantLab USA runs cloud-pentest-aware engagements for Seattle SaaS and dev-tools clients. Web application coverage is standard, plus AWS IAM and resource-policy review, CI/CD pipeline secrets exposure, and the boundary between developer tooling and production systems. Reports map to MITRE ATT&CK Cloud and Containers matrices — what Seattle-grade engineering reviewers expect to see.",
        methodologyNote: "For Seattle cloud-native SaaS, scope typically covers a credentialed web app test, an AWS IAM and resource-policy review for misconfiguration, and a CI/CD pipeline review for secrets handling and pipeline poisoning.",
        keywords: [
            "penetration testing seattle wa",
            "aws cloud pentest seattle",
            "saas dev tools pentest",
            "seattle cloud security audit",
        ],
        faqs: [
            {
                q: "Do you cover AWS IAM and cloud misconfiguration?",
                a: "Yes. AWS IAM, resource policies, S3 exposure, KMS, and the MITRE ATT&CK Cloud matrix are explicit scope on Seattle engagements. Same on GCP and Azure when relevant.",
            },
            {
                q: "Can you review our CI/CD pipeline for secrets exposure?",
                a: "Yes. GitHub Actions and GitLab CI pipeline review is part of the cloud-native scope — secrets handling, OIDC trust policies, and pipeline poisoning paths.",
            },
            {
                q: "Time-zone overlap with PT?",
                a: "Comfortable working morning through early afternoon Pacific from a Georgia HQ. Scoping calls accommodate PT schedules; testing windows are not time-zone-bound.",
            },
        ],
        nearbyServices: [
            { href: "/services/penetration-testing/san-francisco-ca", title: "San Francisco, CA Pentests", desc: "Series A+ SaaS and quant engagements." },
            { href: "/services/penetration-testing/austin-tx", title: "Austin, TX Pentests", desc: "Startup SOC 2 and Series A engagements." },
        ],
        suggestedCaseStudy: {
            slug: "j5-sales-os",
            title: "J5 Sales OS",
            blurb: "A SaaS platform we built and secured end-to-end — the architecture pattern we apply to Seattle cloud-native engagements.",
        },
        siblingCities: ["san-francisco-ca", "austin-tx"],
    },
    "new-york-ny": {
        slug: "new-york-ny",
        displayName: "New York",
        state: "NY",
        stateName: "New York",
        metaTitle: "Penetration Testing Services in New York, NY | QuantLab",
        metaDescription:
            "MITRE ATT&CK-aligned web app, network, and AD pentest for NYC fintech, ad-tech, and agency-grade vendor reviews. Founder-led. Get a scoping call.",
        hook: "New York is the toughest pentest buyer's market in the country. Fintech, ad-tech, agency holding companies, hedge funds, and a relentless stream of SaaS founders all share one requirement: the report has to survive the most cynical security reviewer in the building. Agency-grade vendor security reviews and institutional investor diligence are not pro-forma here — they are an actual technical bar.",
        intro: "QuantLab USA runs senior, founder-led pentests for NYC clients where the report is going to be read line-by-line. Web application, network, AD, and MITRE ATT&CK-aligned engagements with formal deliverables that drop directly into agency-grade vendor security review and institutional investor due diligence templates. No padding, no junk findings.",
        methodologyNote: "For NYC fintech and brokerage-adjacent clients, scope usually combines a credentialed web app and API test against the production application with an internal AD review — the two surfaces an institutional investor security reviewer will probe first.",
        keywords: [
            "penetration testing new york",
            "nyc fintech cybersecurity",
            "agency-grade vendor review",
            "institutional investor diligence pentest",
        ],
        faqs: [
            {
                q: "Can you support institutional investor due diligence?",
                a: "Yes — reports include the executive summary, methodology, MITRE ATT&CK mapping, attestation letter, and architecture diagrams that institutional investor security reviewers and outside counsel expect.",
            },
            {
                q: "Will your report survive an agency-grade vendor security review?",
                a: "Yes. NYC agency and holding company security reviewers are some of the most cynical in the industry. Reports are evidence-backed line by line — proof of exploit, screenshots, payloads, every finding.",
            },
            {
                q: "Do you fly in for kickoffs and reviews?",
                a: "For engagements above a certain scope, yes. Discovery and reporting are remote-default; on-site is available for executive briefings and trading floor walkthroughs.",
            },
        ],
        nearbyServices: [
            { href: "/services/penetration-testing/chicago-il", title: "Chicago, IL Pentests", desc: "Trading firm and finance enterprise engagements." },
            { href: "/services/penetration-testing/charlotte-nc", title: "Charlotte, NC Pentests", desc: "Banking-grade vendor reviews." },
        ],
        suggestedCaseStudy: {
            slug: "multi-strategy-trading-system",
            title: "Multi-Strategy Trading System",
            blurb: "An in-house trading system we built and ran — the same threat model we apply to NYC brokerage-adjacent engagements.",
        },
        siblingCities: ["chicago-il", "charlotte-nc"],
    },
    "charlotte-nc": {
        slug: "charlotte-nc",
        displayName: "Charlotte",
        state: "NC",
        stateName: "North Carolina",
        metaTitle: "Penetration Testing Services in Charlotte, NC | QuantLab",
        metaDescription:
            "MITRE ATT&CK-aligned web app, network, and AD pentest for Charlotte fintech vendors selling into Truist, BoA, and bank procurement. Get a call.",
        hook: "Charlotte is the southeast's banking capital — second only to New York in US banking assets, anchored by Bank of America and Truist, surrounded by a fast-growing fintech vendor ecosystem in Uptown and South End. The Charlotte pentest buyer is almost always a fintech vendor whose enterprise sales cycle is gated on a bank's vendor risk review. The report has to survive a BoA or Truist procurement assessment, full stop.",
        intro: "QuantLab USA runs pentests specifically scoped to survive bank-grade vendor risk reviews. Web application engagements with formal MITRE ATT&CK mapping, full evidence chain, executive summary, and the attestation letter format BoA, Truist, and Wells Fargo procurement teams routinely accept. The report is the deliverable — not a stack of CVEs.",
        methodologyNote: "For Charlotte fintech vendors, the standard scope is a credentialed web app and API test against the SaaS product plus an external perimeter scan — exactly the surfaces a bank's vendor risk reviewer will look at.",
        keywords: [
            "penetration testing charlotte nc",
            "bank vendor risk pentest",
            "truist boa vendor security",
            "fintech vendor pentest north carolina",
        ],
        faqs: [
            {
                q: "Can you produce a pentest report that survives a BoA or Truist vendor review?",
                a: "Yes — that is exactly what these reports are built to do. Format, evidence chain, MITRE ATT&CK mapping, and attestation letter are all aligned with bank procurement assessment requirements.",
            },
            {
                q: "Do you understand the security questionnaire game?",
                a: "Yes. Pentest output frequently feeds directly into CAIQ, SIG, and bank-specific questionnaires. We can help you stage the findings and remediation status so the questionnaire response is consistent with the pentest report.",
            },
            {
                q: "How fast can you turn around for a vendor review deadline?",
                a: "Most Charlotte engagements kick off within 2 weeks of a signed engagement letter and deliver a final report inside the typical 4-8 week bank procurement window. Emergency turnarounds quoted case-by-case.",
            },
        ],
        nearbyServices: [
            { href: "/services/penetration-testing/atlanta-ga", title: "Atlanta, GA Pentests", desc: "Southeast fintech and SaaS engagements." },
            { href: "/services/penetration-testing/new-york-ny", title: "New York, NY Pentests", desc: "Agency-grade and institutional review engagements." },
        ],
        suggestedCaseStudy: {
            slug: "j5-sales-os",
            title: "J5 Sales OS",
            blurb: "A SaaS platform we built and secured end-to-end — the architecture pattern we apply to bank-vendor SaaS engagements.",
        },
        siblingCities: ["atlanta-ga", "new-york-ny"],
    },
    "nashville-tn": {
        slug: "nashville-tn",
        displayName: "Nashville",
        state: "TN",
        stateName: "Tennessee",
        metaTitle: "Penetration Testing Services in Nashville, TN | QuantLab",
        metaDescription:
            "MITRE ATT&CK-aligned web app, network, and AD pentest for Nashville healthcare, HIPAA-aware vendors, and music-tech SaaS. Get a scoping call.",
        hook: "Nashville's pentest demand is anchored by two unusually large verticals: healthcare administration (HCA Healthcare and a wide ecosystem of provider, payer, and admin-tech companies) and music and entertainment tech (publishing, streaming, royalty management). The healthcare side is HIPAA-bound; the music-tech side runs payment data at volume. Different threat models, both real.",
        intro: "QuantLab USA scopes engagements deliberately for each vertical. Healthcare-adjacent clients get a HIPAA risk-analysis-aware web app and internal network test with the audit log and access-control evidence the OCR review framework expects. Music-tech and royalty clients get a credentialed web app test plus payment-flow review for PCI-adjacent surfaces. Every finding mapped to MITRE ATT&CK either way.",
        methodologyNote: "For Nashville healthcare-adjacent clients with PHI exposure, scope is structured around HIPAA Security Rule control families — access control, audit, transmission security, integrity. BAA scoping is handled deliberately, not casually.",
        keywords: [
            "penetration testing nashville tn",
            "hipaa pentest nashville",
            "healthcare cybersecurity tennessee",
            "music tech pci pentest",
        ],
        faqs: [
            {
                q: "Will your report satisfy HIPAA Security Rule risk analysis?",
                a: "Yes — reports include the access control, audit logging, transmission security, and integrity evidence the HIPAA Security Rule risk analysis expects. We have shipped reports into completed OCR-aware compliance cycles.",
            },
            {
                q: "Do you do BAAs for PHI-touching engagements?",
                a: "Yes — BAAs are scoped deliberately, not casually. We do not test PHI-touching surfaces without one in place. We will sign a BAA before any PHI scope is set.",
            },
            {
                q: "Can you handle music-tech and royalty platform testing?",
                a: "Yes — custom catalog, publisher, and royalty management platforms are in scope. Payment and identity-verification flows are usually where the interesting findings live.",
            },
        ],
        nearbyServices: [
            { href: "/services/penetration-testing/atlanta-ga", title: "Atlanta, GA Pentests", desc: "Southeast fintech and SaaS engagements." },
            { href: "/services/penetration-testing/charlotte-nc", title: "Charlotte, NC Pentests", desc: "Banking-grade vendor reviews." },
        ],
        suggestedCaseStudy: {
            slug: "j5-sales-os",
            title: "J5 Sales OS",
            blurb: "A SaaS platform we built and secured end-to-end — the architecture pattern we apply to Nashville music-tech and healthcare SaaS engagements.",
        },
        siblingCities: ["atlanta-ga", "charlotte-nc"],
    },
    "san-francisco-ca": {
        slug: "san-francisco-ca",
        displayName: "San Francisco",
        state: "CA",
        stateName: "California",
        metaTitle: "Penetration Testing Services in San Francisco, CA | QuantLab",
        metaDescription:
            "MITRE ATT&CK-aligned web app and AD pentest for SF Series A+ SaaS, quant firms, and security-gated fundraising rounds. Founder-led.",
        hook: "San Francisco is the most technical pentest buyer market in the country. Every founder is one degree of separation from a senior engineer, every CTO has built the thing before, and reports that lean on agency theater get torn apart in review. SF Series A+ SaaS rounds and quant firms run pentest scope as a real engineering exercise, not a compliance checkbox.",
        intro: "QuantLab USA runs senior, founder-led pentests for SF clients where the engineering reviewer is going to ask hard questions and the report has to answer them. Web application, network, AD, and MITRE ATT&CK-aligned engagements. Code samples and architecture walkthroughs available on request — the kind of technical bake-off SF buyers actually run.",
        methodologyNote: "For SF Series A+ SaaS, scope is typically a credentialed web app and API test against the production application combined with cloud IAM and resource-policy review — the security gate that lead investors actually probe.",
        keywords: [
            "penetration testing san francisco",
            "sf series a security audit",
            "saas pentest california",
            "bay area quant cybersecurity",
        ],
        faqs: [
            {
                q: "Can you handle a technical bake-off against in-house engineers?",
                a: "Yes — code samples, architecture walkthroughs, and methodology Q&A available on request before scope is finalized. Most SF engineering reviewers want this before they will sign.",
            },
            {
                q: "Do you do quant firm and trading-infrastructure pentests?",
                a: "Yes. We have in-house algorithmic trading bot development and broker-integration capability — IBKR, Alpaca, Tradier, and others — which informs how we test quant infrastructure from the inside.",
            },
            {
                q: "Time-zone overlap with PT?",
                a: "Comfortable working morning through early afternoon Pacific from a Georgia HQ. Scoping calls accommodate PT schedules; testing windows are not time-zone-bound.",
            },
        ],
        nearbyServices: [
            { href: "/services/penetration-testing/seattle-wa", title: "Seattle, WA Pentests", desc: "AWS-heavy SaaS and dev-tools engagements." },
            { href: "/services/penetration-testing/austin-tx", title: "Austin, TX Pentests", desc: "Startup SOC 2 and Series A engagements." },
        ],
        suggestedCaseStudy: {
            slug: "multi-strategy-trading-system",
            title: "Multi-Strategy Trading System",
            blurb: "An in-house trading system we built and ran — the same threat model we apply to SF quant-firm engagements.",
        },
        siblingCities: ["seattle-wa", "austin-tx"],
    },
};

const CITY_SLUGS = Object.keys(CITIES);

export const dynamicParams = false;

export async function generateStaticParams() {
    return CITY_SLUGS.map((city) => ({ city }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string }>;
}): Promise<Metadata> {
    const { city } = await params;
    const data = CITIES[city];
    if (!data) return {};
    return {
        title: data.metaTitle,
        description: data.metaDescription,
        alternates: {
            canonical: `https://quantlabusa.dev/services/penetration-testing/${data.slug}`,
        },
        openGraph: {
            title: data.metaTitle,
            description: data.metaDescription,
            url: `https://quantlabusa.dev/services/penetration-testing/${data.slug}`,
            type: "article",
        },
        twitter: {
            card: "summary",
            title: data.metaTitle,
            description: data.metaDescription,
        },
    };
}

export default async function CityPentestPage({
    params,
}: {
    params: Promise<{ city: string }>;
}) {
    const { city } = await params;
    const data = CITIES[city];
    if (!data) notFound();

    const canonical = `https://quantlabusa.dev/services/penetration-testing/${data.slug}`;

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "Penetration Testing",
        name: `Penetration Testing Services in ${data.displayName}, ${data.state}`,
        provider: { "@id": "https://quantlabusa.dev/#org" },
        areaServed: { "@type": "City", name: data.displayName },
        description: data.metaDescription,
        url: canonical,
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
            { "@type": "ListItem", position: 3, name: "Penetration Testing", item: "https://quantlabusa.dev/services/penetration-testing" },
            { "@type": "ListItem", position: 4, name: `${data.displayName}, ${data.state}`, item: canonical },
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: data.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
    };

    return (
        <main className="min-h-screen bg-quant-bg text-quant-text pt-28 pb-24">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <div className="container mx-auto px-6 max-w-4xl">
                <nav aria-label="Breadcrumb" className="mb-8">
                    <ol className="flex items-center gap-2 text-xs text-gray-400">
                        <li><Link href="/" className="hover:text-sky-400 transition-colors">Home</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services" className="hover:text-sky-400 transition-colors">Services</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li><Link href="/services/penetration-testing" className="hover:text-sky-400 transition-colors">Penetration Testing</Link></li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">{data.displayName}, {data.state}</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-red-500 to-orange-400 mb-6">
                        <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        Penetration Testing Services in {data.displayName}, {data.state}
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        {data.hook}
                    </p>
                    <ConsultationCTA label="Request a Scope" service="Penetration Testing" city={`${data.displayName}, ${data.state}`} source={`pentest-${data.slug}`} />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Why {data.displayName} buyers choose QuantLab USA</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>{data.intro}</p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Scope &amp; coverage</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            Four engagement types cover most of what {data.displayName} clients ask for. <strong className="text-gray-200">Web application pentests</strong> — OWASP Top 10, business logic, authentication, authorization, and API security across REST and GraphQL. <strong className="text-gray-200">Internal network and Active Directory engagements</strong> — Kerberoasting, AS-REP roasting, lateral movement, ADCS abuse, and credential dumping from an assumed-breach starting position. <strong className="text-gray-200">External perimeter assessments</strong> — attack surface mapping, exposed services, and credential exposure. <strong className="text-gray-200">Wireless engagements</strong> — corporate Wi-Fi, guest network isolation, and BYOD segmentation.
                        </p>
                        <p>
                            Every technique used is mapped to a MITRE ATT&amp;CK ID so your detection team — in-house or MSSP — can see what your defenses caught and what they missed. Reports include the executive summary, full technical narrative, evidence chain, and a remediation roadmap prioritized by exploitability rather than CVSS alone.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">The local angle</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>{data.methodologyNote}</p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Deliverables</h2>
                    <ul className="space-y-3">
                        {[
                            "Full written report — executive summary, technical narrative, evidence chain",
                            "Every finding mapped to MITRE ATT&CK technique IDs",
                            "Proof-of-compromise screenshots and command history for critical issues",
                            "Prioritized remediation roadmap ordered by exploitability, not CVSS alone",
                            "Debrief call with your security and engineering leads",
                            "Retest of critical findings after remediation (included in most scopes)",
                            "Attestation letter for SOC 2, PCI, HIPAA, or vendor-review needs",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference engagement</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            See our <Link href={`/work/${data.suggestedCaseStudy.slug}`} className="text-red-400 hover:underline">{data.suggestedCaseStudy.title}</Link> for a representative engagement. {data.suggestedCaseStudy.blurb}
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">FAQ — {data.displayName} engagements</h2>
                    <div className="space-y-6">
                        {data.faqs.map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related pages</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            { href: "/services/penetration-testing", title: "Penetration Testing — Service Spine", desc: "The parent service page — full scope, methodology, and toolkit." },
                            ...data.nearbyServices,
                            { href: `/work/${data.suggestedCaseStudy.slug}`, title: data.suggestedCaseStudy.title, desc: data.suggestedCaseStudy.blurb },
                        ].map((s) => (
                            <Link
                                key={s.href}
                                href={s.href}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-red-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Ready to scope a {data.displayName} pentest?
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-6 leading-relaxed">
                            Book a scoping call. We will walk through rules of engagement, environment, and pricing in one conversation.
                        </p>
                        <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8 leading-relaxed">
                            Or talk to us directly: <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> · <a href="mailto:beltz@quantlabusa.dev" className="text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">beltz@quantlabusa.dev</a>
                        </p>
                        <ConsultationCTA label="Book a Consultation" service="Penetration Testing" city={`${data.displayName}, ${data.state}`} source={`pentest-${data.slug}`} />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
