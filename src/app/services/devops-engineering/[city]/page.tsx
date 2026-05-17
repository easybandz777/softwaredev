import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Server, Check, ArrowRight, MapPin } from "lucide-react";
import { pageMetadata } from "@/lib/seoMeta";

export const dynamicParams = false;

type CityConfig = {
    slug: string;
    city: string;
    state: string;
    stateFull: string;
    angle: string;
    intro: string;
    problem: string;
    modules: { title: string; desc: string }[];
    caseStudyParagraph: string;
    pricingNote: string;
    faqs: { q: string; a: string }[];
    siblings: { slug: string; city: string; desc: string }[];
};

const CITIES: Record<string, CityConfig> = {
    "macon-ga": {
        slug: "macon-ga",
        city: "Macon",
        state: "GA",
        stateFull: "Georgia",
        angle: "right-sized DevOps for Middle Georgia operators",
        intro: "Middle Georgia operators ready to put a real CI/CD pipeline, containerized deploys, or production-grade monitoring around their existing applications usually have one specific problem: they cannot find a partner who will take the engagement at SMB pricing. We size DevOps engagements to actual operator scale.",
        problem: "Generic DevOps consultancies show up with a Kubernetes-first answer to a Heroku-sized problem. The result is over-engineered infrastructure that costs more to maintain than the app it runs. We meet the operator where they are — Docker first, Kubernetes only when the workload demands it.",
        modules: [
            { title: "Docker + CI/CD pipelines", desc: "GitHub Actions, GitLab CI, or Vercel-native pipelines wired into your existing code repository. Test, build, deploy without manual steps." },
            { title: "Vercel + AWS deployment", desc: "Production deploys on Vercel for the Next.js stack we ship, AWS or DigitalOcean for everything else. Cost-aware infrastructure sizing." },
            { title: "Observability + alerting", desc: "Sentry, Datadog, or self-hosted Grafana for the operator who wants visibility without enterprise SaaS pricing." },
            { title: "Macon-area on-site work", desc: "Same area code. We meet at the office for kickoff and architecture review without travel premium." },
        ],
        caseStudyParagraph: "Macon-relevant DevOps reference work spans the production deployments across our portfolio — Northcrest Fence, Bridgepointe Painting, J5 Sales OS, ProtectWithBri — all running on Docker-native pipelines with CI/CD, observability, and cost-aware infrastructure sizing. Same patterns ship into a Middle Georgia operator's existing application stack.",
        pricingNote: "Macon DevOps engagements typically scope between $10,000 and $40,000 — focused CI/CD pipeline builds at the lower end, full infrastructure modernization with monitoring at the upper end. Fixed fee, no retainer.",
        faqs: [
            { q: "Are you actually based in Macon?", a: "Yes. QUANT LAB USA is headquartered in Macon. On-site DevOps work across Bibb, Houston, Jones, and Monroe counties is standard." },
            { q: "Docker or Kubernetes for a Macon operator?", a: "Docker first. Kubernetes only when the workload, the team, and the budget all justify it. We will tell you straight at discovery." },
            { q: "Will you wire CI/CD into our existing GitHub repository?", a: "Yes. GitHub Actions, GitLab CI, or Vercel-native pipelines. We pick the right tool, not the trendiest." },
            { q: "Can you reduce our AWS or DigitalOcean bill?", a: "Often yes — most over-engineered cloud bills can be cut 30-50% by right-sizing and removing dead infrastructure. We will scope a cost-audit at discovery." },
            { q: "Available for on-site Macon kickoffs?", a: "Yes." },
            { q: "Who owns the IaC and pipeline code?", a: "You do. Full repository handoff at delivery." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Fintech and logistics DevOps." },
            { slug: "augusta-ga", city: "Augusta, GA", desc: "Defense-adjacent DevOps." },
        ],
    },
    "atlanta-ga": {
        slug: "atlanta-ga",
        city: "Atlanta",
        state: "GA",
        stateFull: "Georgia",
        angle: "fintech, logistics, and SaaS DevOps",
        intro: "Atlanta's DevOps demand is shaped by Transaction Alley fintech operators who need SOC 2-ready CI/CD pipelines, the logistics and freight base running mixed legacy-and-cloud infrastructure, and a SaaS founder pool needing production-grade DevOps without a $300,000 platform engineering team. The middle is the gap.",
        problem: "Atlanta DevOps consultancies will happily quote $80,000 for a Kubernetes rollout the operator does not need. The freelance market underdelivers on the SOC 2 evidence pack. We sit in the middle — senior-engineering, fixed scope, real audit-ready outputs.",
        modules: [
            { title: "SOC 2-ready CI/CD", desc: "Pipelines with required reviewer approval, signed commit verification, deploy-time audit logs, and evidence packs for CC8.1 review." },
            { title: "Stripe-aware deploy automation", desc: "Webhook signature validation, idempotent deploy hooks, and entitlement-cache invalidation built into the pipeline." },
            { title: "Logistics + legacy integration", desc: "DevOps wrapping legacy TMS, WMS, and on-prem systems with modern CI/CD — without ripping out the legacy stack." },
            { title: "MITRE-aware deployment hardening", desc: "Same shop runs the pen tests — deploy hardening reflects the actual attack surface, not a checklist." },
        ],
        caseStudyParagraph: "Atlanta-relevant DevOps reference work includes our production deployments across the portfolio — J5 Sales OS, Bridgepointe Painting, ProtectWithBri — all running Docker-native CI/CD with audit logging and SOC 2-aware deploy hooks. Same patterns ship into an Atlanta fintech vendor's deploy pipeline or a logistics base's legacy-modernization project.",
        pricingNote: "Atlanta DevOps engagements typically scope between $20,000 and $90,000 for a production-grade engagement with SOC 2-aware CI/CD documentation. Fixed fee, milestone-based.",
        faqs: [
            { q: "Will your CI/CD survive SOC 2 CC8.1?", a: "Yes. Required reviewer approval, signed commits, audit logs, and evidence packs are standard." },
            { q: "Stripe webhook deploy automation?", a: "Yes — Stripe is a core practice. Idempotent webhook handling and entitlement-cache invalidation in the pipeline." },
            { q: "Wrap legacy TMS or WMS with modern CI/CD?", a: "Yes — common pattern for Atlanta logistics." },
            { q: "On-site Atlanta kickoffs?", a: "Yes. Short drive up I-75." },
            { q: "Reduce our AWS bill?", a: "Often yes — cost audit included at discovery." },
            { q: "Who owns the IaC?", a: "You do." },
        ],
        siblings: [
            { slug: "macon-ga", city: "Macon, GA", desc: "Our HQ — Middle Georgia DevOps." },
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent DevOps." },
        ],
    },
    "augusta-ga": {
        slug: "augusta-ga",
        city: "Augusta",
        state: "GA",
        stateFull: "Georgia",
        angle: "defense-adjacent and CSRA DevOps",
        intro: "Augusta's DevOps demand crosses the Fort Eisenhower cyber corridor and the broader CSRA business base. Vendors selling into the defense supply chain need pipelines that produce SBOM-style artifacts and signed-build provenance. CSRA medical, legal, and contracting firms need right-sized CI/CD without enterprise pricing.",
        problem: "Most DevOps shops do not understand federal supply-chain SBOM requirements or HIPAA-aligned deploy auditing. Augusta operators get stuck between an over-engineered Atlanta consultancy or an offshore freelancer who ships nothing.",
        modules: [
            { title: "SBOM-aware build pipelines", desc: "CycloneDX or SPDX SBOM generation, signed-build provenance, and supply-chain artifact handling for federal vendors." },
            { title: "HIPAA-aligned deploy auditing", desc: "Audit logs on every deploy, with evidence packs for HIPAA risk-analysis documentation." },
            { title: "Government-vendor CI/CD", desc: "Capture, B&P, and contract-vehicle workflows wrapped in deploy automation for SAM.gov-registered vendors." },
            { title: "Security-aware deploy hardening", desc: "Same shop that runs the pen tests writes the pipeline — hardening reflects the actual attack surface." },
        ],
        caseStudyParagraph: "Augusta-relevant work crosses into our cybersecurity practice — penetration testing reports formatted for federal supply-chain review, with the same threat-modeling discipline showing up in our DevOps builds. ProtectWithBri demonstrates the audit-aware deploy pattern; the same approach ships into CSRA medical practice or defense-adjacent vendor pipelines.",
        pricingNote: "Augusta DevOps engagements typically scope between $15,000 and $60,000 — small-clinic CI/CD at the lower end, federally-reviewable pipelines with SBOM and provenance at the upper end.",
        faqs: [
            { q: "SBOM generation?", a: "Yes — CycloneDX or SPDX." },
            { q: "HIPAA-aligned deploy auditing?", a: "Yes." },
            { q: "Available for on-site Augusta work?", a: "Yes. Short drive up I-20." },
            { q: "Air-gapped or restricted-connectivity CI/CD?", a: "Yes — self-hosted runners are supported." },
            { q: "Fixed fee?", a: "Yes." },
            { q: "Who owns the IaC?", a: "You do." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Fintech and logistics DevOps." },
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent DevOps." },
        ],
    },
    "columbus-ga": {
        slug: "columbus-ga",
        city: "Columbus",
        state: "GA",
        stateFull: "Georgia",
        angle: "Chattahoochee Valley SMB DevOps",
        intro: "Columbus and the Chattahoochee Valley business base — defense-adjacent contractors, family-owned manufacturers, and trades on both sides of the river — typically run mixed infrastructure: a legacy ERP on a Windows server, a Vercel-hosted marketing site, and a third-party SaaS for everything else. Modernizing the deploy pipeline around that reality is the gap.",
        problem: "Generic DevOps consultancies want to rip out the legacy ERP and ship Kubernetes. The right answer for most Columbus operators is to wrap the existing stack with modern CI/CD and observability, not replace it.",
        modules: [
            { title: "Wrap-and-modernize CI/CD", desc: "Modern pipelines around existing legacy stacks — without ripping out what works." },
            { title: "Cross-state Alabama coverage", desc: "Phenix City and the Alabama side first-class." },
            { title: "QuickBooks-aware deploy hooks", desc: "Webhook reliability and idempotency around financial integrations." },
            { title: "Cost-aware infrastructure", desc: "Right-sized cloud spend audits — typically 30-50% reduction available on over-engineered SMB cloud bills." },
        ],
        caseStudyParagraph: "Reference DevOps work for Columbus-relevant operators includes the production deployments across our portfolio — Northcrest Fence, Bridgepointe Painting, and our contractor estimating engine all running Docker-native CI/CD with monitoring. Same patterns apply to Columbus and Phenix City operators.",
        pricingNote: "Columbus DevOps engagements typically scope between $10,000 and $45,000. Wrap-and-modernize at the lower end; full infrastructure rebuild with monitoring at the upper end.",
        faqs: [
            { q: "Alabama-side operators?", a: "Yes — Phenix City first-class." },
            { q: "Wrap legacy ERP with modern CI/CD?", a: "Yes — common pattern." },
            { q: "Cost audit?", a: "Yes — included at discovery." },
            { q: "On-site Columbus work?", a: "Yes. Short drive down I-185." },
            { q: "Fixed fee?", a: "Yes." },
            { q: "Who owns the IaC?", a: "You do." },
        ],
        siblings: [
            { slug: "macon-ga", city: "Macon, GA", desc: "Our HQ — Middle Georgia DevOps." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market Atlanta DevOps." },
        ],
    },
    "savannah-ga": {
        slug: "savannah-ga",
        city: "Savannah",
        state: "GA",
        stateFull: "Georgia",
        angle: "port-logistics and hospitality DevOps",
        intro: "Savannah's DevOps demand splits between port-adjacent drayage and 3PL operators running legacy TMS feeds, the hospitality and tourism sector running mixed-vendor SaaS, and the SCAD-orbit founder base needing production-grade infrastructure on a pre-seed budget. Each demands a different DevOps engagement profile.",
        problem: "Generic DevOps shops do not understand port-adjacent legacy integration, hospitality-vendor SaaS sprawl, or pre-seed founder budget constraints. A founder-led DevOps partner who can scope to the actual workflow is what closes that gap.",
        modules: [
            { title: "Port-adjacent legacy integration", desc: "TMS feed wrapping, AES filing automation, and freight-API deploy hooks for drayage and 3PL operators." },
            { title: "Hospitality SaaS-sprawl consolidation", desc: "Multi-vendor SaaS wrapped with a single deploy pipeline and consolidated monitoring." },
            { title: "SCAD-founder MVP infrastructure", desc: "Production-grade infrastructure at pre-seed pricing." },
            { title: "Cost-aware sizing", desc: "Right-sized cloud spend for the Savannah operator profile." },
        ],
        caseStudyParagraph: "Savannah-relevant DevOps reference work includes the production deployments across our portfolio — UEhub, Wilder Recovery, Aaron Coleman Music, J5 Sales OS — all running on Docker-native pipelines with cost-aware sizing. Same patterns apply to a Savannah drayage operator or a SCAD founder's MVP.",
        pricingNote: "Savannah DevOps engagements typically scope between $10,000 and $50,000. Pre-seed founder MVPs at the lower end; freight-integrated drayage DevOps at the upper end.",
        faqs: [
            { q: "Port-adjacent TMS feed automation?", a: "Yes." },
            { q: "SCAD founder pre-seed?", a: "Yes — sized to actual runway." },
            { q: "On-site Savannah?", a: "Yes — drive down I-16." },
            { q: "Cost audit?", a: "Yes — included." },
            { q: "Fixed fee?", a: "Yes." },
            { q: "Who owns the IaC?", a: "You do." },
        ],
        siblings: [
            { slug: "macon-ga", city: "Macon, GA", desc: "Our HQ." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Atlanta logistics and fintech DevOps." },
        ],
    },
    "miami-fl": {
        slug: "miami-fl",
        city: "Miami",
        state: "FL",
        stateFull: "Florida",
        angle: "LATAM-facing multi-region DevOps",
        intro: "Miami DevOps demand is shaped by LATAM-facing fintechs needing multi-region deploys (US + LATAM PoPs), bilingual SaaS products needing locale-aware CDN configurations, and a hospitality sector running multi-currency platforms with multi-PoP redundancy needs. Generic DevOps shops do not understand the LATAM-facing infrastructure constraints.",
        problem: "Most DevOps engagements assume a US-only deployment. Miami fintechs need São Paulo PoPs, locale-aware CDN rules, and payment-processor routing logic baked into the deploy. Generic shops do not build that in.",
        modules: [
            { title: "Multi-region cloud deploys", desc: "US East + São Paulo or Mexico City PoPs for LATAM-facing fintechs and SaaS products." },
            { title: "Locale-aware CDN configuration", desc: "Per-locale routing on Cloudflare, AWS CloudFront, or Vercel Edge." },
            { title: "LATAM payment-processor routing", desc: "PIX, OXXO, MercadoPago deploy-time configuration alongside Stripe." },
            { title: "Hospitality SaaS-sprawl consolidation", desc: "Multi-vendor consolidation with single deploy pipeline." },
        ],
        caseStudyParagraph: "Miami-relevant DevOps reference work spans bilingual content sites (ProtectWithBri, Aaron Coleman Music) and operations platforms (J5 Sales OS, UEhub). Same patterns ship into a Miami fintech multi-region deploy or a hospitality platform's CDN consolidation.",
        pricingNote: "Miami DevOps engagements typically scope between $15,000 and $70,000. Bilingual hospitality at the mid-range; multi-region fintech at the upper end.",
        faqs: [
            { q: "Multi-region LATAM deploys?", a: "Yes." },
            { q: "Locale-aware CDN?", a: "Yes." },
            { q: "On-site Miami?", a: "Yes for engagements that warrant it." },
            { q: "Survive institutional review?", a: "Yes." },
            { q: "Fixed fee?", a: "Yes." },
            { q: "Who owns the IaC?", a: "You do." },
        ],
        siblings: [
            { slug: "new-york-ny", city: "New York, NY", desc: "Vertical fintech DevOps." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech DevOps." },
        ],
    },
    "austin-tx": {
        slug: "austin-tx",
        city: "Austin",
        state: "TX",
        stateFull: "Texas",
        angle: "SaaS founder + Series-A DevOps",
        intro: "Austin SaaS founders heading into their first enterprise customer security review need production-grade CI/CD with audit logging, deploy-time evidence, and SOC 2 CC8.1-ready documentation. The DevOps partner that wins here ships clean code, fixed scope, and full handoff.",
        problem: "Pre-seed and Series-A Austin SaaS founders get pitched platform engineering teams at $400,000 a year. The freelance market underdelivers. A right-sized fixed-fee DevOps partner is the gap.",
        modules: [
            { title: "SOC 2 CC8.1-ready CI/CD", desc: "Required reviewer approval, signed commits, audit logs, and evidence packs." },
            { title: "Multi-tenant deploy isolation", desc: "Per-tenant secret handling and deploy-time isolation for SaaS." },
            { title: "Cost-aware Vercel + AWS sizing", desc: "Pre-seed pricing on production-grade infrastructure." },
            { title: "Observability without enterprise SaaS bills", desc: "Sentry, OpenTelemetry, self-hosted Grafana — visibility without Datadog Tier 3 pricing." },
        ],
        caseStudyParagraph: "Austin-relevant DevOps reference work includes our production deployments — J5 Sales OS, ProtectWithBri, UEhub — all running Docker-native CI/CD with cost-aware sizing. Same patterns ship into an Austin SaaS pre-seed's first production deploy.",
        pricingNote: "Austin DevOps engagements typically scope between $15,000 and $65,000 sized to actual runway. Fixed fee, milestone-based.",
        faqs: [
            { q: "Pre-seed Austin SaaS DevOps?", a: "Yes — right-sized." },
            { q: "SOC 2 CC8.1-ready pipelines?", a: "Yes." },
            { q: "Central time overlap?", a: "Full ET overlap from Georgia HQ." },
            { q: "Cost audit?", a: "Yes — included." },
            { q: "Fixed fee?", a: "Yes." },
            { q: "Who owns the IaC?", a: "You do." },
        ],
        siblings: [
            { slug: "dallas-tx", city: "Dallas, TX", desc: "Enterprise IT DevOps." },
            { slug: "san-francisco-ca", city: "San Francisco, CA", desc: "Senior-engineering DevOps." },
        ],
    },
    "dallas-tx": {
        slug: "dallas-tx",
        city: "Dallas",
        state: "TX",
        stateFull: "Texas",
        angle: "enterprise IT DevOps replacing legacy",
        intro: "DFW's DevOps demand is shaped by Fortune 500 internal IT and supply-chain modernization. Mid-market vendors selling into DFW enterprise buyers need pipelines that survive a vendor-risk review. The Big Four sells $500,000 platform engineering engagements; the freelance market underdelivers. We sit in the gap.",
        problem: "DFW mid-market DevOps needs procurement-ready documentation, fixed scope, and a partner who can wrap legacy systems with modern CI/CD without ripping them out. Generic shops cannot deliver that.",
        modules: [
            { title: "Legacy stack modernization", desc: "Wrap-and-modernize CI/CD around fragile legacy Access, Lotus Notes, or VB6 systems." },
            { title: "Procurement-ready documentation", desc: "Architecture diagrams, data-flow diagrams, SBOM-style summaries." },
            { title: "Logistics + freight DevOps", desc: "DFW's freight density is real — we wrap legacy TMS and WMS feeds with modern CI/CD." },
            { title: "Fixed-scope modernization", desc: "Quoted up front, delivered against milestones." },
        ],
        caseStudyParagraph: "Production DevOps reference work spans the deployments across our portfolio — J5 Sales OS, UEhub, Bridgepointe Painting, Northcrest Fence — all running Docker-native CI/CD with audit logging and cost-aware sizing. Same patterns translate into a DFW mid-market DevOps modernization.",
        pricingNote: "Dallas DevOps engagements typically scope between $25,000 and $110,000 for a production-grade modernization with enterprise-procurement-ready documentation.",
        faqs: [
            { q: "Modernize legacy without replacing?", a: "Yes — wrap-and-modernize standard pattern." },
            { q: "Procurement-ready documentation?", a: "Yes." },
            { q: "Fixed scope?", a: "Yes." },
            { q: "Fly in for DFW kickoffs?", a: "For engagements that warrant it." },
            { q: "Cost audit?", a: "Yes." },
            { q: "Who owns the IaC?", a: "You do." },
        ],
        siblings: [
            { slug: "austin-tx", city: "Austin, TX", desc: "SaaS founder DevOps." },
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech DevOps." },
        ],
    },
    "chicago-il": {
        slug: "chicago-il",
        city: "Chicago",
        state: "IL",
        stateFull: "Illinois",
        angle: "trading-desk and logistics DevOps",
        intro: "Chicago's DevOps demand spans low-latency trading-desk infrastructure, freight-broker pipeline modernization, and Schaumburg manufacturer customer-portal hosting. Each needs an engineer who can hold up to a CTO review and ship.",
        problem: "Trading-desk DevOps demands sub-millisecond network awareness. Freight DevOps demands legacy TMS wrapping. Generic DevOps shops cannot handle either at a real production bar.",
        modules: [
            { title: "Low-latency trading infrastructure", desc: "Co-location-aware deploys, broker-API connection hardening, and P/L event pipelines." },
            { title: "Freight + logistics DevOps", desc: "Legacy TMS and WMS feed wrapping with modern CI/CD." },
            { title: "Manufacturing customer-portal hosting", desc: "Production-grade Next.js or PHP customer portals with cost-aware sizing." },
            { title: "Algorithmic-ops deploy", desc: "We build trading bots — we know how to deploy them safely." },
        ],
        caseStudyParagraph: "Chicago-relevant DevOps reference work spans our algorithmic trading systems (TypeScript/Node integrated with IBKR, Alpaca, Tradier broker APIs deployed on hardened infrastructure), operations platforms (J5 Sales OS, UEhub), and trade brands. Same patterns apply to a Chicago trading-desk or freight broker DevOps modernization.",
        pricingNote: "Chicago DevOps engagements typically scope between $20,000 and $95,000. Trading-desk and low-latency builds at the upper end.",
        faqs: [
            { q: "Trading-desk infrastructure?", a: "Yes — we have algorithmic trading capability." },
            { q: "Wrap legacy TMS feeds?", a: "Yes." },
            { q: "Fly in for kickoffs?", a: "For engagements that warrant it." },
            { q: "Fixed fee?", a: "Yes." },
            { q: "Cost audit?", a: "Yes." },
            { q: "Who owns the IaC?", a: "You do." },
        ],
        siblings: [
            { slug: "new-york-ny", city: "New York, NY", desc: "Vertical finance DevOps." },
            { slug: "dallas-tx", city: "Dallas, TX", desc: "Enterprise IT DevOps." },
        ],
    },
    "seattle-wa": {
        slug: "seattle-wa",
        city: "Seattle",
        state: "WA",
        stateFull: "Washington",
        angle: "dev-tools and cloud-native DevOps",
        intro: "Seattle is anchored by Amazon and Microsoft, with deep AWS and Azure expertise across the founder pool. The DevOps partner that wins here ships Docker-native, cloud-portable, IaC-first infrastructure that does not lock the buyer into a single cloud or single vendor.",
        problem: "Most DevOps shops bring vendor-specific templates that lock into a single cloud. Seattle technical buyers want cloud-portable IaC, clean module boundaries, and Terraform or Pulumi handoff at delivery.",
        modules: [
            { title: "Cloud-portable Terraform / Pulumi", desc: "IaC that runs on AWS, GCP, or Azure without rewrite." },
            { title: "Docker-native deploys", desc: "Container-first builds that drop into Kubernetes or ECS without theater." },
            { title: "OIDC / SAML SSO automation", desc: "Enterprise SSO baked into the deploy pipeline." },
            { title: "API-first observability", desc: "OpenTelemetry, Prometheus, and Grafana — vendor-neutral observability stack." },
        ],
        caseStudyParagraph: "Seattle-relevant DevOps reference work includes our production deployments — J5 Sales OS, UEhub, ProtectWithBri — all running on Docker-native pipelines with Terraform or Pulumi IaC and OpenTelemetry observability. Same patterns apply to a Seattle dev-tools SaaS or a bootstrapped indie founder.",
        pricingNote: "Seattle DevOps engagements typically scope between $20,000 and $90,000. Senior-engineering bake-off included.",
        faqs: [
            { q: "Cloud-portable IaC?", a: "Yes — Terraform or Pulumi." },
            { q: "OIDC / SAML in deploy pipeline?", a: "Yes." },
            { q: "Pacific time overlap?", a: "Morning through early afternoon Pacific." },
            { q: "Bake-off against in-house engineers?", a: "Yes." },
            { q: "Fixed fee?", a: "Yes." },
            { q: "Who owns the IaC?", a: "You do." },
        ],
        siblings: [
            { slug: "san-francisco-ca", city: "San Francisco, CA", desc: "Senior-engineering DevOps." },
            { slug: "austin-tx", city: "Austin, TX", desc: "SaaS founder DevOps." },
        ],
    },
    "new-york-ny": {
        slug: "new-york-ny",
        city: "New York",
        state: "NY",
        stateFull: "New York",
        angle: "vertical DevOps for finance and agency operations",
        intro: "New York is the toughest DevOps buyer's market in the country. Fintech, ad-tech, agency holding companies, hedge funds, and SaaS founders all need production-grade pipelines that survive an institutional due-diligence packet and a real CISO review.",
        problem: "NYC buyers do not buy generic DevOps templates. They buy vertical pipelines modeled on the actual deal flow, pitch process, or client engagement.",
        modules: [
            { title: "Agency client + project DevOps", desc: "Deploy automation for client-facing portals, with audit logs and access scoping." },
            { title: "Fund-administration DevOps", desc: "Capital call, deal IC, and LP-communication deploy pipelines with audit-ready evidence." },
            { title: "Ad-tech revenue-ops DevOps", desc: "Insertion order, pacing, and reporting pipeline automation." },
            { title: "Procurement-ready architecture", desc: "Data-flow diagrams, SBOM-style summaries, audit logs." },
        ],
        caseStudyParagraph: "Reference DevOps work for NYC-style buyers spans operations platforms (J5 Sales OS, UEhub), trade and brand sites (ProtectWithBri, Wilder Recovery), and quantitative tooling. Same architecture pattern: Docker-native, cost-aware, audit-ready.",
        pricingNote: "NYC DevOps engagements typically scope between $25,000 and $110,000 for a production-grade pipeline. Institutional-investor-ready builds at the upper end.",
        faqs: [
            { q: "Institutional due-diligence packet?", a: "Yes." },
            { q: "Fly in for kickoffs?", a: "For engagements above a certain scope." },
            { q: "Hedge fund DevOps?", a: "Yes." },
            { q: "Fixed fee?", a: "Yes." },
            { q: "Cost audit?", a: "Yes." },
            { q: "Who owns the IaC?", a: "You do." },
        ],
        siblings: [
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent DevOps." },
            { slug: "chicago-il", city: "Chicago, IL", desc: "Trading-desk and logistics DevOps." },
        ],
    },
    "charlotte-nc": {
        slug: "charlotte-nc",
        city: "Charlotte",
        state: "NC",
        stateFull: "North Carolina",
        angle: "banking-adjacent compliance-aware DevOps",
        intro: "Charlotte is the southeast's banking capital. DevOps pipelines selling into BoA, Truist, and their vendor ecosystem must clear bank-grade vendor-risk review. Generic shops do not understand the questionnaire game and lose the deal.",
        problem: "Bank vendors need SOC 2 CC8.1-ready pipelines, audit logs on every deploy, signed builds, and architecture documentation that survives a real review.",
        modules: [
            { title: "Vendor-risk-ready CI/CD", desc: "Required reviewer approval, signed commits, deploy-time audit logs, and SOC 2 CC8.1 evidence packs." },
            { title: "Stripe + bank-grade webhook reliability", desc: "Idempotent webhook handling, signature validation, retry-with-backoff." },
            { title: "Fintech-vendor SaaS deploy", desc: "Multi-tenant deploy isolation and per-tenant secret handling." },
            { title: "SOC 2 + bank-questionnaire evidence", desc: "Pipeline-generated evidence packs." },
        ],
        caseStudyParagraph: "Charlotte-relevant DevOps reference work includes J5 Sales OS (multi-tenant SaaS with audit-aware deploy), ProtectWithBri (sensitive-comms portal), and the production deployments across our portfolio. Same audit-trail and access-model discipline ships into Charlotte DevOps.",
        pricingNote: "Charlotte DevOps engagements typically scope between $25,000 and $100,000 with bank-grade vendor-risk-ready documentation.",
        faqs: [
            { q: "Survive BoA or Truist vendor review?", a: "Yes." },
            { q: "SOC 2 CC8.1?", a: "Yes." },
            { q: "On-site Charlotte?", a: "Yes — short drive up I-85." },
            { q: "Bank-questionnaire-game savvy?", a: "Yes." },
            { q: "Fixed fee?", a: "Yes." },
            { q: "Who owns the IaC?", a: "You do." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech DevOps." },
            { slug: "nashville-tn", city: "Nashville, TN", desc: "Healthcare and music-tech DevOps." },
        ],
    },
    "nashville-tn": {
        slug: "nashville-tn",
        city: "Nashville",
        state: "TN",
        stateFull: "Tennessee",
        angle: "healthcare-admin and music-tech DevOps",
        intro: "Nashville's DevOps demand splits between healthcare administration — HCA Healthcare and the surrounding ecosystem — and music and entertainment tech. Healthcare admin DevOps needs HIPAA-aligned deploy auditing. Music-tech DevOps needs catalog and royalty data integrity.",
        problem: "Generic DevOps shops do not understand HIPAA-aligned deploy auditing or royalty data integrity requirements. Custom DevOps engagements scoped to the vertical close that gap.",
        modules: [
            { title: "HIPAA-aligned deploy auditing", desc: "PHI-aware deploy logs with BAA-covered observability stack." },
            { title: "Royalty platform DevOps", desc: "Catalog data integrity, royalty-statement deploy hooks, and writer-publisher split automation." },
            { title: "Payer + admin-tech vendor DevOps", desc: "Multi-tenant deploy isolation for vendors selling into HCA." },
            { title: "Audit-ready deploy evidence", desc: "Drops into HIPAA risk-analysis and vendor-review packets." },
        ],
        caseStudyParagraph: "Nashville-relevant DevOps reference work includes Aaron Coleman Music (informs catalog and royalty data integrity), UEhub (provider-facing deploys), Wilder Recovery (audit-aware records), and J5 Sales OS.",
        pricingNote: "Nashville DevOps engagements typically scope between $20,000 and $85,000. HIPAA-aligned and royalty-platform engagements at the mid-to-upper range.",
        faqs: [
            { q: "HIPAA-aligned deploy auditing?", a: "Yes — case-by-case with BAA architecture." },
            { q: "Royalty platform DevOps?", a: "Yes." },
            { q: "On-site Nashville?", a: "Yes — short drive up I-24." },
            { q: "Survive HCA vendor-risk?", a: "Yes." },
            { q: "Fixed fee?", a: "Yes." },
            { q: "Who owns the IaC?", a: "You do." },
        ],
        siblings: [
            { slug: "atlanta-ga", city: "Atlanta, GA", desc: "Mid-market fintech DevOps." },
            { slug: "charlotte-nc", city: "Charlotte, NC", desc: "Banking-adjacent DevOps." },
        ],
    },
    "san-francisco-ca": {
        slug: "san-francisco-ca",
        city: "San Francisco",
        state: "CA",
        stateFull: "California",
        angle: "peer-credible senior-engineering DevOps",
        intro: "San Francisco is the most technical DevOps buyer market in the country. Every founder is one degree from a senior platform engineer. Every CTO has shipped Terraform before. Generic DevOps engagements that lean on vendor templates die fast on the technical screen.",
        problem: "Bay DevOps buyers see through vendor-template engagements fast. The competition is in-house platform engineers and ex-FAANG SREs. The partner that wins has to demonstrate engineering depth alongside the operations expertise.",
        modules: [
            { title: "Cloud-portable Terraform / Pulumi", desc: "IaC that runs on AWS, GCP, or Azure without rewrite." },
            { title: "Code that reviews well", desc: "TypeScript glue code, clean Terraform modules, version-controlled secrets." },
            { title: "Observability without lock-in", desc: "OpenTelemetry, Prometheus, Grafana — vendor-neutral observability." },
            { title: "Algorithmic-ops deploy", desc: "We build trading bots — low-latency deploy practices are in our DNA." },
        ],
        caseStudyParagraph: "Bay-relevant DevOps reference work spans our production deployments (J5 Sales OS, UEhub, ProtectWithBri), our algorithmic trading systems (TypeScript/Node broker integrations on hardened infrastructure), and trade brands. Technical bake-offs work in our favor.",
        pricingNote: "SF DevOps engagements typically scope between $25,000 and $110,000 with senior-engineering bake-off included.",
        faqs: [
            { q: "Technical bake-off?", a: "Yes." },
            { q: "Quant-adjacent DevOps?", a: "Yes." },
            { q: "Pacific time overlap?", a: "Morning through early afternoon Pacific." },
            { q: "Cloud-portable IaC?", a: "Yes — Terraform or Pulumi." },
            { q: "Fixed fee?", a: "Yes." },
            { q: "Who owns the IaC?", a: "You do." },
        ],
        siblings: [
            { slug: "seattle-wa", city: "Seattle, WA", desc: "Dev-tools and cloud-native DevOps." },
            { slug: "austin-tx", city: "Austin, TX", desc: "SaaS founder DevOps." },
        ],
    },
};

const CITY_SLUGS = Object.keys(CITIES);

export function generateStaticParams() {
    return CITY_SLUGS.map((city) => ({ city }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ city: string }>;
}): Promise<Metadata> {
    const { city } = await params;
    const config = CITIES[city];
    if (!config) return { title: "DevOps Engineering | QUANT LAB USA" };

    const title = `DevOps Engineering in ${config.city}, ${config.state} | QUANT LAB USA`;
    const description = `CI/CD, Docker, Terraform, and cloud infrastructure engineering for ${config.city} ${config.stateFull} businesses. Founder-led, fixed-scope, full IaC handoff.`;

    return pageMetadata({
        title,
        description,
        slug: `services/devops-engineering/${config.slug}`,
        image: "/og-services.png",
        type: "article",
    });
}

export default async function DevOpsCityPage({
    params,
}: {
    params: Promise<{ city: string }>;
}) {
    const { city } = await params;
    const config = CITIES[city];
    if (!config) notFound();

    const url = `https://quantlabusa.dev/services/devops-engineering/${config.slug}`;

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: "DevOps Engineering",
        name: `DevOps Engineering in ${config.city}, ${config.state}`,
        provider: { "@id": "https://quantlabusa.dev/#organization" },
        areaServed: {
            "@type": "City",
            name: config.city,
            address: {
                "@type": "PostalAddress",
                addressLocality: config.city,
                addressRegion: config.state,
                addressCountry: "US",
            },
        },
        description: `DevOps engineering for ${config.city}, ${config.stateFull} businesses — CI/CD pipelines, Docker, Terraform, cloud infrastructure, and observability with full IaC handoff.`,
        url,
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${url}#localbusiness`,
        name: `QUANT LAB USA — DevOps Engineering in ${config.city}`,
        url,
        areaServed: {
            "@type": "City",
            name: config.city,
            address: {
                "@type": "PostalAddress",
                addressLocality: config.city,
                addressRegion: config.state,
                addressCountry: "US",
            },
        },
        telephone: "+1-770-652-1282",
        parentOrganization: { "@id": "https://quantlabusa.dev/#organization" },
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://quantlabusa.dev" },
            { "@type": "ListItem", position: 2, name: "Services", item: "https://quantlabusa.dev/services" },
            {
                "@type": "ListItem",
                position: 3,
                name: "DevOps Engineering",
                item: "https://quantlabusa.dev/services/devops-engineering",
            },
            { "@type": "ListItem", position: 4, name: `${config.city}, ${config.state}`, item: url },
        ],
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: config.faqs.map((f) => ({
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
                        <li>
                            <Link href="/services/devops-engineering" className="hover:text-sky-400 transition-colors">
                                DevOps Engineering
                            </Link>
                        </li>
                        <li aria-hidden="true" className="text-gray-700">›</li>
                        <li className="text-gray-300">{config.city}, {config.state}</li>
                    </ol>
                </nav>

                <AnimatedSection className="mb-16">
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-400 mb-6">
                        <Server className="w-6 h-6 text-white" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6">
                        DevOps Engineering in {config.city}, {config.state}
                    </h1>
                    <p className="text-xl text-gray-400 leading-relaxed mb-8 max-w-2xl">
                        {config.intro}
                    </p>
                    <ConsultationCTA
                        label={`Scope a ${config.city} DevOps Build`}
                        service="DevOps Engineering"
                        city={`${config.city}, ${config.state}`}
                        source={`devops-${config.slug}`}
                    />
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        The problem with off-the-shelf DevOps in {config.city}
                    </h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>{config.problem}</p>
                        <p>
                            Real DevOps engineering means picking the right tool for the actual scale, wiring CI/CD around the existing workflow without ripping out what works, and shipping IaC the buyer can grep and own. For {config.city} buyers, that means DevOps shaped for {config.angle}.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
                        What we ship for {config.city} buyers
                    </h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {config.modules.map((m) => (
                            <div key={m.title} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-5">
                                <h3 className="text-white font-semibold mb-2">{m.title}</h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{m.desc}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Tech stack</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {[
                            "Docker + Compose",
                            "Kubernetes (when warranted)",
                            "Terraform / Pulumi",
                            "GitHub Actions",
                            "Vercel + AWS",
                            "OpenTelemetry",
                            "Prometheus + Grafana",
                            "Sentry",
                            "Datadog (where in-scope)",
                        ].map((tool) => (
                            <div key={tool} className="rounded-xl border border-white/5 bg-[#0d1526]/60 px-4 py-3 text-sm text-gray-300">
                                {tool}
                            </div>
                        ))}
                    </div>
                    <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                        Cloud-portable IaC. We pick the right tool for the actual scale, not the trendiest option.
                    </p>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Reference deployments</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>{config.caseStudyParagraph}</p>
                        <p className="text-sm">
                            Reference work: <Link href="/work/j5-sales-os" className="text-sky-400 hover:underline">J5 Sales OS</Link>, <Link href="/work/multi-strategy-trading-system" className="text-sky-400 hover:underline">multi-strategy trading system</Link>, and <Link href="/work/protectwithbri" className="text-sky-400 hover:underline">ProtectWithBri</Link>.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">How we work remote from Georgia</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>
                            QUANT LAB USA is founder-led from Macon, Georgia. William Beltz runs every DevOps engagement from architecture review through handoff. Discovery is a structured infrastructure audit; weekly demos run on the same cadence; staging pipelines are live from week two.
                        </p>
                        <p>
                            For {config.city} buyers, that means full Eastern-time overlap, fixed-scope contracting, and on-site work when scope warrants. <Link href="/contact" className="text-sky-400 hover:underline">Book a scope call</Link> to walk through your stack.
                        </p>
                    </div>
                    <div className="mt-6">
                        <ConsultationCTA
                            label={`Talk to William about ${config.city} DevOps`}
                            service="DevOps Engineering"
                            city={`${config.city}, ${config.state}`}
                            source={`devops-${config.slug}-mid`}
                        />
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Pricing for {config.city} DevOps builds</h2>
                    <div className="prose prose-invert max-w-none text-gray-400 space-y-4 leading-relaxed">
                        <p>{config.pricingNote}</p>
                        <p>
                            We quote fixed-fee scope after a 30-minute infrastructure audit call. Engagements include CI/CD pipeline implementation, Terraform or Pulumi IaC, observability stack setup, and documentation. Source-code and IaC handoff at delivery. See our <Link href="/services/devops-engineering" className="text-sky-400 hover:underline">parent DevOps service page</Link> for the broader engagement model.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">What you get</h2>
                    <ul className="space-y-3">
                        {[
                            "Full IaC repository (Terraform or Pulumi)",
                            "CI/CD pipeline (GitHub Actions or equivalent)",
                            "Observability stack (OpenTelemetry, Prometheus, Grafana, or vendor)",
                            "Runbook + on-call documentation",
                            "Cost-audit report at delivery",
                            "30-day post-launch support included",
                        ].map((item) => (
                            <li key={item} className="flex gap-3 text-gray-300">
                                <Check className="w-5 h-5 text-sky-400 flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{config.city} DevOps FAQ</h2>
                    <div className="space-y-6">
                        {config.faqs.map((item) => (
                            <div key={item.q} className="rounded-xl border border-white/5 bg-[#0d1526]/60 p-6">
                                <h3 className="text-white font-semibold mb-2">{item.q}</h3>
                                <p className="text-gray-400 leading-relaxed">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Related services</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {[
                            { slug: "cloud-infrastructure", title: "Cloud Infrastructure", desc: "AWS, GCP, Azure architecture review and modernization." },
                            { slug: "saas-platform-development", title: "SaaS Platform Development", desc: "Full-stack SaaS builds with DevOps wired in." },
                            { slug: "api-development", title: "API Development", desc: "Production-grade API design and implementation." },
                            { slug: "web-app-pentest", title: "Web App Pentest", desc: "Security testing on the same infrastructure we deploy." },
                            { slug: "custom-business-software", title: "Custom Business Software", desc: "Internal tools and ops dashboards with DevOps included." },
                        ].map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-semibold">{s.title}</h3>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Nearby cities we serve</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {config.siblings.map((s) => (
                            <Link
                                key={s.slug}
                                href={`/services/devops-engineering/${s.slug}`}
                                className="group rounded-xl border border-white/5 bg-[#0d1526]/60 p-5 hover:border-sky-400/30 transition-all"
                            >
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-sky-400" />
                                        <h3 className="text-white font-semibold">{s.city}</h3>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all" />
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
                            </Link>
                        ))}
                    </div>
                </AnimatedSection>

                <AnimatedSection>
                    <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#0d1526] to-[#0a1120] p-10 md:p-14 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Modernize your DevOps stack in {config.city}.
                        </h2>
                        <p className="text-gray-400 max-w-xl mx-auto mb-8 leading-relaxed">
                            Call William Beltz directly at <a href="tel:+17706521282" className="inline-flex items-center min-h-[44px] text-current hover:text-indigo-400 underline-offset-2 hover:underline focus-visible:outline-2 focus-visible:outline-indigo-400">(770) 652-1282</a> or book a 20-minute infrastructure audit call. Founder-led from audit to handoff.
                        </p>
                        <ConsultationCTA
                            label={`Book a ${config.city} DevOps Audit`}
                            service="DevOps Engineering"
                            city={`${config.city}, ${config.state}`}
                            source={`devops-${config.slug}-footer`}
                        />
                    </div>
                </AnimatedSection>
            </div>
        </main>
    );
}
