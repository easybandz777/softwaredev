# QUANT LAB USA — Internal Linking Architecture

**Domain:** quantlabusa.dev
**Business:** Custom software development + cybersecurity firm
**Service area:** 14 cities (Macon, Atlanta, Augusta, Columbus, Savannah GA; Miami FL; Austin, Dallas TX; Chicago IL; Seattle WA; NYC; Charlotte NC; Nashville TN; San Francisco CA)
**Last updated:** 2026-05-12

---

## 1. Linking Principles

These principles govern every internal link decision on quantlabusa.dev. They are non-negotiable defaults; deviations must be intentional and justified.

### 1.1 Contextual Link Priority

1. **In-body contextual links carry the most equity.** Google weighs links inside the main editorial content significantly higher than nav/footer/sidebar links. Prioritize getting the most important targets linked from body copy on multiple pages.
2. **First link on a page wins.** When the same page is linked twice from one source page, Google generally credits the first link's anchor text. Place your "money" anchor first; subsequent mentions can use brand or generic anchors.
3. **Above-the-fold > below-the-fold.** A link in the first 200 words signals higher relevance than a link in the footer of an article.
4. **Editorial > automated.** Anchor text and surrounding sentence should read like a human chose them — never auto-generate "Custom CRM Development in Atlanta, Georgia | QUANT LAB USA" style anchors mid-paragraph.

### 1.2 Anchor Text Variation Rules

- **Per target URL, distribute anchor text across these buckets:**
  - 30–40% **exact-match keyword** ("custom CRM development", "penetration testing Atlanta")
  - 25–30% **partial-match / phrase-match** ("our custom CRM build process", "pentest engagement in Atlanta")
  - 15–20% **branded** ("QUANT LAB USA's CRM service", "our Atlanta engineering team")
  - 10–15% **naked URL / generic** ("learn more", "this case study", "see /services/penetration-testing")
  - 5–10% **long-tail / descriptive** ("how we built a multi-tenant CRM for a fencing contractor")
- **Never** use the exact same anchor text more than 3 times across the site for the same target. Variation is required even for the same destination.
- **Anchor text should match the destination page's primary H1 or a close semantic variant** — but not be word-for-word identical to the page title.

### 1.3 Max Links Per Page

- **Body content target: 3–8 internal links per 1,000 words** of editorial copy. More than ~10 internal links in body content dilutes equity and looks spammy.
- **Total internal links per page (including nav + footer): keep under 100.** Google's old "100 links per page" guideline is loose, but in practice each link past the first ~30 in body content passes diminishing equity.
- **Service pages:** 5–10 contextual internal links in body content.
- **City pages:** 8–12 contextual internal links (3 service links + 2–3 nearby city links + 2–3 case study links + 1 contact CTA).
- **Case studies:** 4–6 contextual internal links (service page + city page + 1–2 related case studies + contact CTA + 1 relevant blog post if relevant).
- **Blog posts:** 4–8 contextual internal links depending on word count; never fewer than 3.

### 1.4 Prefer Specific Over Generic

- Replace "click here" / "learn more" with descriptive anchors that contain the target's keyword.
  - **Bad:** "We offer pentesting services. Learn more."
  - **Good:** "Our penetration testing engagements include MITRE ATT&CK assessments and web app testing."
- Generic anchors are allowed only for trailing CTAs or when the surrounding sentence already establishes the topic and a third keyword repetition would be awkward.

### 1.5 Link Equity Conservation

- **Every page must link out to at least 2 other pages and be linked to from at least 2 other pages.** No orphans, no dead ends.
- **Hub pages should be reachable in ≤2 clicks from the homepage.** Spoke pages should be reachable in ≤3 clicks.
- **Use breadcrumbs on every non-homepage page.** Breadcrumbs are weighted in search and reduce bounce.
- **Avoid linking to redirect chains.** All internal links must point to canonical, final URLs (200 status, no 301/302 hops).
- **No `nofollow` on internal links unless explicitly required** (e.g., login/admin pages).

### 1.6 Topical Relevance Over Quantity

Every internal link should pass three tests:
1. **Is the target topically relevant to the source paragraph?**
2. **Would a human reader benefit from clicking it?**
3. **Does the anchor text honestly describe the destination?**

If any answer is "no," remove or replace the link.

---

## 2. Hub Map

QuantLab uses a **multi-hub** architecture: each major intent (commercial service, geographic, editorial) has its own hub. Hubs distribute equity to spokes, and spokes return equity via contextual links and cross-cluster references.

### 2.1 Primary Hubs (depth 1 from homepage)

| Hub | URL | Role |
|---|---|---|
| **Services Hub** | `/services` | Commercial pillar; routes traffic to 8 service spokes |
| **Blog Hub** | `/blog` | Editorial pillar; routes traffic to 5 topic clusters |
| **About** | `/about` | Trust/authority hub; routes to case studies, team, contact |
| **Contact** | `/contact` | Conversion endpoint; receives equity from every page |

### 2.2 Secondary Hubs (depth 2 from homepage)

| Hub | URL | Role |
|---|---|---|
| **Case Studies Index** | `/case-studies` | Proof hub; routes to 6 case study spokes |
| **Locations Index** *(recommended new page)* | `/locations` | Geographic hub; routes to 14 city pages and enables regional grouping |
| **Pillar pages (×5)** | various `/blog/...` | Topic-cluster hubs; route to cluster blog posts |

### 2.3 Spokes

| Spoke type | Count | Linked from |
|---|---|---|
| Service pages | 8 | Services Hub, homepage, relevant city pages, relevant case studies, relevant blog posts |
| City pages | 14 | Locations Hub, homepage (top 5 only), 2–3 nearby city pages, relevant case studies, footer (top 5 only) |
| Case studies | 6 | Case Studies Index, homepage (top 3 only), 1 service page, 1 city page, 1–2 related case studies |
| Blog posts | 30 future | Blog Hub, pillar pages, 2–4 cluster siblings, relevant service/city pages |

### 2.4 Hub Topology Diagram (text)

```
                          Homepage (/)
                              │
        ┌─────────────┬───────┼───────┬──────────────┐
        │             │       │       │              │
   /services    /locations  /blog  /case-studies  /about
        │             │       │       │              │
   ┌────┴───┐    ┌───┴───┐   │   ┌───┴───┐         │
   │ 8 svc  │    │ 14 cty │  │   │ 6 cs   │       /contact
   │ pages  │    │ pages  │  │   │ pages  │
   └────────┘    └────────┘  │   └────────┘
                             │
                        ┌────┴────┐
                        │ 5 pillar│
                        │ pages   │
                        └────┬────┘
                             │
                       30 cluster posts
```

---

## 3. Per-Page Linking Matrix

Format for each page: **Links FROM** (pages that should link to it) | **Links TO** (pages it should link out to) | **Anchor text suggestions**.

### 3.1 Homepage (`/`)

**Links FROM:** Every page in site footer; every page in main nav (logo); breadcrumbs.

**Links TO (in body content, in order of priority):**

| Target | Anchor text suggestions |
|---|---|
| `/services/custom-crm-development` | "custom CRM development" / "build a CRM tailored to your workflow" |
| `/services/penetration-testing` | "penetration testing services" / "offensive security engagements" |
| `/services/stripe-integration` | "Stripe integration for SaaS billing" |
| `/services/trading-bot-development` | "trading bot development" |
| `/services/web-app-pentest` | "web application penetration testing" |
| `/services/mitre-attack-assessment` | "MITRE ATT&CK assessments" |
| `/services` | "all our software and security services" |
| `/case-studies/northcrest-fence` | "how we built a CRM for Northcrest Fence" |
| `/case-studies/j5-sales-os` | "J5 Sales OS case study" |
| `/case-studies` | "our case studies" |
| `/software-development-atlanta-ga` | "software development in Atlanta" |
| `/software-development-miami-fl` | "Miami software developers" |
| `/software-development-austin-tx` | "Austin engineering team" |
| `/about` | "about QUANT LAB USA" |
| `/contact` | "start a project" (CTA, repeated 2x is fine) |

### 3.2 About (`/about`)

**Links FROM:** Homepage (nav), every page in footer, case study author bylines, blog post author bylines.

**Links TO:**
| Target | Anchor text |
|---|---|
| `/services` | "what we build" |
| `/case-studies` | "see our recent work" |
| `/case-studies/j5-sales-os` | "J5 Sales OS, our internal CRM platform" |
| `/services/custom-crm-development` | "custom CRM development practice" |
| `/services/penetration-testing` | "offensive security team" |
| `/contact` | "get in touch" |

### 3.3 Contact (`/contact`)

**Links FROM:** Every page (sticky CTA + footer). All service pages, all city pages, all case studies, all blog posts.

**Links TO:**
| Target | Anchor text |
|---|---|
| `/services` | "browse our services" |
| `/case-studies` | "review past work first" |
| `/about` | "meet the team" |

### 3.4 Services Hub (`/services`)

**Links FROM:** Homepage, main nav, every service page (breadcrumb), every city page (services list), footer.

**Links TO:**
| Target | Anchor text |
|---|---|
| `/services/custom-crm-development` | "Custom CRM Development" |
| `/services/penetration-testing` | "Penetration Testing" |
| `/services/web-app-pentest` | "Web App Penetration Testing" |
| `/services/stripe-integration` | "Stripe Integration" |
| `/services/trading-bot-development` | "Trading Bot Development" |
| `/services/licensing-system` | "Software Licensing Systems" |
| `/services/nextjs-development` | "Next.js Development" |
| `/services/mitre-attack-assessment` | "MITRE ATT&CK Assessment" |
| `/case-studies/j5-sales-os` | "see J5 Sales OS, our CRM build" |
| `/case-studies/protectwithbri` | "ProtectWithBri pentest case study" |
| `/contact` | "scope your project" |

### 3.5 Service Pages (×8)

Each service page follows the same matrix template below. Replace `[SERVICE]` and adjust.

#### 3.5.1 `/services/custom-crm-development`

**Links FROM:** Homepage, /services, /about, all 14 city pages, /case-studies/northcrest-fence, /case-studies/hobbspeak, /case-studies/bridgepointe-painting, /case-studies/j5-sales-os, related blog posts (CRM cluster).

**Links TO:**
| Target | Anchor text |
|---|---|
| `/services` (breadcrumb) | "Services" |
| `/services/stripe-integration` | "Stripe billing integration" (when discussing payments) |
| `/services/nextjs-development` | "Next.js stack" |
| `/services/licensing-system` | "license-gated features" |
| `/case-studies/northcrest-fence` | "Northcrest Fence CRM build" |
| `/case-studies/j5-sales-os` | "J5 Sales OS" |
| `/case-studies/bridgepointe-painting` | "Bridgepointe Painting CRM" |
| `/software-development-atlanta-ga` | "CRM development in Atlanta" |
| `/software-development-macon-ga` | "Macon CRM team" |
| `/contact` | "request a CRM scoping call" |

#### 3.5.2 `/services/penetration-testing`

**Links FROM:** Homepage, /services, /about, all 14 city pages, /case-studies/protectwithbri, /case-studies/wilder-recovery, blog posts (security cluster).

**Links TO:**
| Target | Anchor text |
|---|---|
| `/services` (breadcrumb) | "Services" |
| `/services/web-app-pentest` | "web application penetration testing" |
| `/services/mitre-attack-assessment` | "MITRE ATT&CK-based assessment" |
| `/case-studies/protectwithbri` | "ProtectWithBri engagement" |
| `/software-development-atlanta-ga` | "Atlanta pentest engagements" |
| `/software-development-new-york-ny` | "NYC penetration testing" |
| `/software-development-san-francisco-ca` | "SF cybersecurity team" |
| `/contact` | "request a pentest quote" |

#### 3.5.3 `/services/web-app-pentest`

**Links FROM:** Homepage, /services, /services/penetration-testing, all 14 city pages, /case-studies/protectwithbri, security blog posts.

**Links TO:**
| Target | Anchor text |
|---|---|
| `/services` (breadcrumb) | "Services" |
| `/services/penetration-testing` | "our broader penetration testing program" |
| `/services/mitre-attack-assessment` | "MITRE ATT&CK assessment add-on" |
| `/services/nextjs-development` | "Next.js apps we secure" |
| `/case-studies/protectwithbri` | "ProtectWithBri web app pentest" |
| `/software-development-atlanta-ga` | "Atlanta web app security" |
| `/software-development-austin-tx` | "Austin web app testing" |
| `/contact` | "scope a web app pentest" |

#### 3.5.4 `/services/stripe-integration`

**Links FROM:** /services, /services/custom-crm-development, /services/licensing-system, /services/trading-bot-development, /services/nextjs-development, /case-studies/hobbspeak, /case-studies/j5-sales-os, SaaS blog posts.

**Links TO:**
| Target | Anchor text |
|---|---|
| `/services` (breadcrumb) | "Services" |
| `/services/licensing-system` | "license keys + Stripe entitlements" |
| `/services/nextjs-development` | "Next.js Stripe checkout" |
| `/services/custom-crm-development` | "CRM with Stripe billing" |
| `/case-studies/hobbspeak` | "HobbSpeak Stripe rollout" |
| `/case-studies/j5-sales-os` | "J5 Sales OS billing" |
| `/software-development-san-francisco-ca` | "SF Stripe integration engineers" |
| `/contact` | "discuss Stripe migration" |

#### 3.5.5 `/services/trading-bot-development`

**Links FROM:** /services, /services/stripe-integration, /services/licensing-system, /software-development-chicago-il, /software-development-new-york-ny, fintech blog posts.

**Links TO:**
| Target | Anchor text |
|---|---|
| `/services` (breadcrumb) | "Services" |
| `/services/nextjs-development` | "Next.js dashboards for trading systems" |
| `/services/stripe-integration` | "subscription billing for bot SaaS" |
| `/services/licensing-system` | "license-gated bot distribution" |
| `/software-development-chicago-il` | "Chicago quant + trading team" |
| `/software-development-new-york-ny` | "NYC fintech engineers" |
| `/contact` | "scope a trading system build" |

#### 3.5.6 `/services/licensing-system`

**Links FROM:** /services, /services/stripe-integration, /services/trading-bot-development, /services/custom-crm-development, /case-studies/hobbspeak, SaaS blog posts.

**Links TO:**
| Target | Anchor text |
|---|---|
| `/services` (breadcrumb) | "Services" |
| `/services/stripe-integration` | "Stripe-based entitlements" |
| `/services/nextjs-development` | "Next.js license API endpoints" |
| `/services/trading-bot-development` | "trading bot license management" |
| `/case-studies/hobbspeak` | "HobbSpeak license rollout" |
| `/software-development-austin-tx` | "Austin SaaS engineering" |
| `/contact` | "design a licensing system" |

#### 3.5.7 `/services/nextjs-development`

**Links FROM:** /services, every other service page (Next.js is the underlying stack), every case study, dev blog posts.

**Links TO:**
| Target | Anchor text |
|---|---|
| `/services` (breadcrumb) | "Services" |
| `/services/stripe-integration` | "Stripe integration in Next.js" |
| `/services/custom-crm-development` | "Next.js-based CRMs" |
| `/services/web-app-pentest` | "Next.js application security" |
| `/services/licensing-system` | "Next.js licensing APIs" |
| `/case-studies/j5-sales-os` | "J5 Sales OS, built on Next.js" |
| `/case-studies/wilder-recovery` | "Wilder Recovery, a Next.js platform" |
| `/software-development-seattle-wa` | "Seattle Next.js team" |
| `/software-development-san-francisco-ca` | "SF Next.js engineering" |
| `/contact` | "discuss a Next.js project" |

#### 3.5.8 `/services/mitre-attack-assessment`

**Links FROM:** /services, /services/penetration-testing, /services/web-app-pentest, /case-studies/wilder-recovery, security blog posts.

**Links TO:**
| Target | Anchor text |
|---|---|
| `/services` (breadcrumb) | "Services" |
| `/services/penetration-testing` | "active penetration testing" |
| `/services/web-app-pentest` | "web app testing component" |
| `/case-studies/wilder-recovery` | "Wilder Recovery security assessment" |
| `/case-studies/protectwithbri` | "ProtectWithBri ATT&CK mapping" |
| `/software-development-atlanta-ga` | "Atlanta security assessments" |
| `/software-development-charlotte-nc` | "Charlotte cybersecurity team" |
| `/contact` | "request an ATT&CK assessment" |

---

### 3.6 City Pages (×14)

Each city page follows the same template. Cross-link 2–3 nearby cities, link to all 8 services (subtle: list them with anchors), link to 1–2 case studies done in or near that city.

#### 3.6.1 Geographic Clusters (for nearby-city cross-linking)

| Cluster | Cities |
|---|---|
| **Georgia** | Macon, Atlanta, Augusta, Columbus, Savannah |
| **Southeast** | Miami FL, Charlotte NC, Nashville TN |
| **Texas** | Austin, Dallas |
| **West Coast** | San Francisco, Seattle |
| **Major metros** | NYC, Chicago |

#### 3.6.2 `/software-development-macon-ga`

**Links FROM:** Homepage (GA emphasis), /locations, /software-development-atlanta-ga, /software-development-augusta-ga, /software-development-columbus-ga, footer, case studies done locally.

**Links TO:**
| Target | Anchor text |
|---|---|
| `/services/custom-crm-development` | "custom CRM development" |
| `/services/penetration-testing` | "penetration testing services" |
| `/services/web-app-pentest` | "web app security testing" |
| `/services/stripe-integration` | "Stripe integration" |
| `/services/nextjs-development` | "Next.js development" |
| `/services` | "all software services" |
| `/software-development-atlanta-ga` | "Atlanta software development" *(nearby)* |
| `/software-development-augusta-ga` | "Augusta software team" *(nearby)* |
| `/software-development-columbus-ga` | "Columbus development services" *(nearby)* |
| `/case-studies/northcrest-fence` | "Northcrest Fence CRM (Macon-based client)" |
| `/contact` | "request a Macon consult" |

#### 3.6.3 `/software-development-atlanta-ga`

**Links FROM:** Homepage (top 5 city), /locations, /software-development-macon-ga, /software-development-augusta-ga, /software-development-columbus-ga, /software-development-charlotte-nc, footer, multiple case studies.

**Links TO:**
| Target | Anchor text |
|---|---|
| `/services/custom-crm-development` | "Atlanta CRM development" |
| `/services/penetration-testing` | "Atlanta penetration testing" |
| `/services/web-app-pentest` | "web app pentest in Atlanta" |
| `/services/mitre-attack-assessment` | "MITRE ATT&CK assessments" |
| `/services/nextjs-development` | "Next.js engineering" |
| `/services/stripe-integration` | "Stripe integration" |
| `/services` | "complete services list" |
| `/software-development-macon-ga` | "Macon software team" *(nearby)* |
| `/software-development-augusta-ga` | "Augusta engineering" *(nearby)* |
| `/software-development-charlotte-nc` | "Charlotte team next door" *(nearby)* |
| `/case-studies/protectwithbri` | "ProtectWithBri pentest" |
| `/case-studies/bridgepointe-painting` | "Bridgepointe CRM (Atlanta metro)" |
| `/contact` | "Atlanta consult" |

#### 3.6.4 `/software-development-augusta-ga`

**Nearby:** Atlanta, Macon, Columbia SC (not in our list — use Atlanta, Macon, Savannah)

**Links TO:**
- 6 service links (CRM, pentest, web app pentest, Stripe, Next.js, services hub)
- Nearby: `/software-development-atlanta-ga`, `/software-development-macon-ga`, `/software-development-savannah-ga`
- `/case-studies/northcrest-fence`
- `/contact`

#### 3.6.5 `/software-development-columbus-ga`

**Nearby:** Atlanta, Macon, Savannah

**Links TO:**
- 6 service links
- Nearby: `/software-development-atlanta-ga`, `/software-development-macon-ga`, `/software-development-savannah-ga`
- `/case-studies/bridgepointe-painting`
- `/contact`

#### 3.6.6 `/software-development-savannah-ga`

**Nearby:** Atlanta, Macon, Charleston (not on list — use Atlanta, Augusta, Miami)

**Links TO:**
- 6 service links
- Nearby: `/software-development-atlanta-ga`, `/software-development-augusta-ga`, `/software-development-miami-fl`
- `/case-studies/hobbspeak`
- `/contact`

#### 3.6.7 `/software-development-miami-fl`

**Nearby:** Atlanta, Savannah, Charlotte

**Links TO:**
- 6 service links (emphasize Stripe, Next.js, pentest given Miami fintech/SaaS market)
- Nearby: `/software-development-atlanta-ga`, `/software-development-savannah-ga`, `/software-development-charlotte-nc`
- `/case-studies/wilder-recovery`
- `/contact`

#### 3.6.8 `/software-development-austin-tx`

**Nearby:** Dallas, Nashville, Chicago (use Dallas, Nashville, Charlotte)

**Links TO:**
- 6 service links (emphasize Next.js, Stripe, licensing — Austin SaaS market)
- Nearby: `/software-development-dallas-tx`, `/software-development-nashville-tn`, `/software-development-charlotte-nc`
- `/case-studies/hobbspeak`
- `/case-studies/j5-sales-os`
- `/contact`

#### 3.6.9 `/software-development-dallas-tx`

**Nearby:** Austin, Nashville, Chicago

**Links TO:**
- 6 service links
- Nearby: `/software-development-austin-tx`, `/software-development-nashville-tn`, `/software-development-chicago-il`
- `/case-studies/bridgepointe-painting`
- `/contact`

#### 3.6.10 `/software-development-chicago-il`

**Nearby:** NYC, Dallas, Nashville

**Links TO:**
- 6 service links (emphasize trading bots, fintech, pentest)
- Nearby: `/software-development-new-york-ny`, `/software-development-dallas-tx`, `/software-development-nashville-tn`
- `/case-studies/j5-sales-os`
- `/contact`

#### 3.6.11 `/software-development-seattle-wa`

**Nearby:** San Francisco, Austin, Chicago

**Links TO:**
- 6 service links (emphasize Next.js, web app pentest)
- Nearby: `/software-development-san-francisco-ca`, `/software-development-austin-tx`, `/software-development-chicago-il`
- `/case-studies/wilder-recovery`
- `/contact`

#### 3.6.12 `/software-development-new-york-ny`

**Nearby:** Chicago, Charlotte, Nashville

**Links TO:**
- 6 service links (emphasize fintech, trading bots, pentest)
- Nearby: `/software-development-chicago-il`, `/software-development-charlotte-nc`, `/software-development-nashville-tn`
- `/case-studies/protectwithbri`
- `/case-studies/j5-sales-os`
- `/contact`

#### 3.6.13 `/software-development-charlotte-nc`

**Nearby:** Atlanta, Nashville, NYC

**Links TO:**
- 6 service links (emphasize fintech, CRM)
- Nearby: `/software-development-atlanta-ga`, `/software-development-nashville-tn`, `/software-development-new-york-ny`
- `/case-studies/bridgepointe-painting`
- `/contact`

#### 3.6.14 `/software-development-nashville-tn`

**Nearby:** Atlanta, Charlotte, Austin

**Links TO:**
- 6 service links
- Nearby: `/software-development-atlanta-ga`, `/software-development-charlotte-nc`, `/software-development-austin-tx`
- `/case-studies/hobbspeak`
- `/contact`

#### 3.6.15 `/software-development-san-francisco-ca`

**Nearby:** Seattle, Austin, NYC

**Links TO:**
- 6 service links (emphasize Next.js, Stripe, pentest)
- Nearby: `/software-development-seattle-wa`, `/software-development-austin-tx`, `/software-development-new-york-ny`
- `/case-studies/j5-sales-os`
- `/case-studies/wilder-recovery`
- `/contact`

---

### 3.7 Case Studies (×6)

Every case study links to **(a) the most relevant service page**, **(b) the most relevant city page**, **(c) 1–2 related case studies**, **(d) /contact**.

#### 3.7.1 `/case-studies/northcrest-fence`

**Client context:** Fencing contractor — custom CRM build, Macon GA area.

**Links FROM:** Homepage, /case-studies, /services/custom-crm-development, /software-development-macon-ga, /software-development-augusta-ga, /about.

**Links TO:**
| Target | Anchor text |
|---|---|
| `/case-studies` (breadcrumb) | "Case Studies" |
| `/services/custom-crm-development` | "custom CRM development" *(primary service)* |
| `/software-development-macon-ga` | "Macon software team" *(primary city)* |
| `/services/stripe-integration` | "Stripe billing" |
| `/case-studies/bridgepointe-painting` | "Bridgepointe Painting CRM (similar build)" |
| `/case-studies/hobbspeak` | "HobbSpeak case study" |
| `/contact` | "start your CRM project" |

#### 3.7.2 `/case-studies/hobbspeak`

**Client context:** Language-learning SaaS — Stripe + licensing + Next.js, Austin/Nashville.

**Links FROM:** Homepage, /case-studies, /services/stripe-integration, /services/licensing-system, /services/nextjs-development, /software-development-austin-tx, /software-development-nashville-tn.

**Links TO:**
| Target | Anchor text |
|---|---|
| `/case-studies` (breadcrumb) | "Case Studies" |
| `/services/stripe-integration` | "Stripe integration" *(primary service)* |
| `/services/licensing-system` | "software licensing system" |
| `/services/nextjs-development` | "Next.js stack" |
| `/software-development-austin-tx` | "Austin engineering work" *(primary city)* |
| `/case-studies/j5-sales-os` | "J5 Sales OS (also Stripe-based)" |
| `/contact` | "scope a SaaS build" |

#### 3.7.3 `/case-studies/bridgepointe-painting`

**Client context:** Painting contractor — CRM, Atlanta/Columbus GA.

**Links FROM:** Homepage (maybe), /case-studies, /services/custom-crm-development, /software-development-atlanta-ga, /software-development-columbus-ga, /software-development-charlotte-nc.

**Links TO:**
| Target | Anchor text |
|---|---|
| `/case-studies` (breadcrumb) | "Case Studies" |
| `/services/custom-crm-development` | "custom CRM development" *(primary service)* |
| `/software-development-atlanta-ga` | "Atlanta software team" *(primary city)* |
| `/services/nextjs-development` | "Next.js framework" |
| `/case-studies/northcrest-fence` | "Northcrest Fence build (similar industry)" |
| `/contact` | "build a contractor CRM" |

#### 3.7.4 `/case-studies/protectwithbri`

**Client context:** Web app pentest engagement — Atlanta/NYC.

**Links FROM:** Homepage, /case-studies, /services/penetration-testing, /services/web-app-pentest, /services/mitre-attack-assessment, /software-development-atlanta-ga, /software-development-new-york-ny.

**Links TO:**
| Target | Anchor text |
|---|---|
| `/case-studies` (breadcrumb) | "Case Studies" |
| `/services/web-app-pentest` | "web application penetration testing" *(primary service)* |
| `/services/penetration-testing` | "full-scope pentest engagements" |
| `/services/mitre-attack-assessment` | "MITRE ATT&CK mapping" |
| `/software-development-atlanta-ga` | "Atlanta cybersecurity team" *(primary city)* |
| `/case-studies/wilder-recovery` | "Wilder Recovery security assessment" |
| `/contact` | "request a pentest" |

#### 3.7.5 `/case-studies/j5-sales-os`

**Client context:** QuantLab's own CRM/sales OS — Next.js, Stripe, NYC/Austin/SF.

**Links FROM:** Homepage, /case-studies, /about, /services/custom-crm-development, /services/stripe-integration, /services/nextjs-development, /software-development-new-york-ny, /software-development-austin-tx, /software-development-san-francisco-ca.

**Links TO:**
| Target | Anchor text |
|---|---|
| `/case-studies` (breadcrumb) | "Case Studies" |
| `/services/custom-crm-development` | "custom CRM development" *(primary service)* |
| `/services/stripe-integration` | "Stripe integration" |
| `/services/nextjs-development` | "Next.js platform engineering" |
| `/software-development-new-york-ny` | "NYC engineering team" *(primary city)* |
| `/case-studies/hobbspeak` | "HobbSpeak (also Stripe-based)" |
| `/case-studies/northcrest-fence` | "Northcrest CRM build" |
| `/contact` | "build your own sales OS" |

#### 3.7.6 `/case-studies/wilder-recovery`

**Client context:** Recovery platform — Next.js + security assessment, Seattle/SF.

**Links FROM:** Homepage, /case-studies, /services/nextjs-development, /services/mitre-attack-assessment, /software-development-seattle-wa, /software-development-san-francisco-ca, /software-development-miami-fl.

**Links TO:**
| Target | Anchor text |
|---|---|
| `/case-studies` (breadcrumb) | "Case Studies" |
| `/services/nextjs-development` | "Next.js development" *(primary service)* |
| `/services/mitre-attack-assessment` | "MITRE ATT&CK assessment" |
| `/services/web-app-pentest` | "web app pentest" |
| `/software-development-seattle-wa` | "Seattle engineering team" *(primary city)* |
| `/case-studies/protectwithbri` | "ProtectWithBri pentest" |
| `/contact` | "scope a similar platform" |

---

### 3.8 Blog Hub (`/blog`)

**Links FROM:** Main nav, footer, every blog post, pillar pages.

**Links TO:** All 5 pillar pages prominently; recent posts list (top 8–10); category pages if used.

### 3.9 Future Blog Posts (×30)

Each post should:
- Link **up** to its pillar page (1–2 times, varied anchor text).
- Link **sideways** to 2–4 sibling posts in the same cluster.
- Link **across** to 1–2 service pages when contextually relevant.
- Link **across** to 1 city page if the post has regional relevance.
- Link **down** to /contact via CTA.
- Link **up** to /blog via breadcrumb.

Sample anchor text patterns to use (varied across posts):
- Pillar: "our complete guide to [topic]", "[topic] overview", "in-depth look at [topic]"
- Sibling: "we covered [subtopic] separately", "see also: [sibling title]"
- Service: "if you need help with [service], we can scope an engagement"

---

## 4. Site-Wide Navigation Recommendation

### 4.1 Main Navigation (Header)

Keep header nav lean — 5–6 items max. Heavy nav = diluted equity.

```
[QUANT LAB USA logo → /]   Services ▾   Locations ▾   Case Studies   Blog   About   [Contact CTA button]
```

**Services dropdown** (8 items, grouped):
- Software Development
  - Custom CRM Development
  - Stripe Integration
  - Next.js Development
  - Trading Bot Development
  - Licensing Systems
- Cybersecurity
  - Penetration Testing
  - Web App Pentesting
  - MITRE ATT&CK Assessment
- [link to full Services hub]

**Locations dropdown** (14 items, alphabetical or grouped by region):
- Georgia: Macon, Atlanta, Augusta, Columbus, Savannah
- Southeast: Miami, Charlotte, Nashville
- Texas: Austin, Dallas
- West: San Francisco, Seattle
- Other major metros: Chicago, New York
- [link to full Locations hub]

### 4.2 Footer

Footer is global and appears on every page. Keep it comprehensive but organized.

**Column 1 — Services**
- Custom CRM Development
- Penetration Testing
- Web App Pentesting
- Stripe Integration
- Trading Bot Development
- Licensing Systems
- Next.js Development
- MITRE ATT&CK Assessment
- All Services →

**Column 2 — Top Locations** (top 5 only to preserve equity flow)
- Atlanta
- Austin
- New York
- San Francisco
- Chicago
- All Locations →

**Column 3 — Company**
- About
- Case Studies
- Blog
- Contact

**Column 4 — Resources / Legal**
- Privacy Policy
- Terms of Service
- Sitemap
- (5 pillar page links once published)

**Footer bottom strip:** Copyright + social icons (LinkedIn, GitHub, X). No equity-passing links here.

### 4.3 Breadcrumb Structure

Implement on every non-homepage page. Use JSON-LD `BreadcrumbList` schema.

| Page type | Breadcrumb |
|---|---|
| Service page | Home > Services > [Service Name] |
| City page | Home > Locations > [City, State] |
| Case study | Home > Case Studies > [Client Name] |
| Blog post | Home > Blog > [Category/Pillar] > [Post Title] |
| Pillar page | Home > Blog > [Pillar Topic] |

Each breadcrumb segment must be a clickable internal link with the parent page's primary keyword as anchor text.

---

## 5. Pillar Topic Clusters

Five pillars cover QuantLab's editorial strategy. Each pillar is a long-form (2,500–5,000 word) authoritative guide; clusters are 6 supporting posts per pillar.

### 5.1 Pillar 1 — "Custom CRM Development: The Complete Guide"

**Pillar URL:** `/blog/custom-crm-development-guide`

**Primary service mapping:** `/services/custom-crm-development`, `/services/stripe-integration`, `/services/licensing-system`

**Cluster posts (6):**
1. CRM vs Off-the-Shelf: When Custom Wins
2. Multi-Tenant CRM Architecture in Next.js
3. Integrating Stripe Billing into a Custom CRM
4. Designing User Roles and Permissions for SMB CRMs
5. CRM Data Migration: Pitfalls and Patterns
6. Building Sales Pipelines that Sales Reps Will Actually Use

### 5.2 Pillar 2 — "Penetration Testing for Web Applications"

**Pillar URL:** `/blog/web-application-penetration-testing-guide`

**Primary service mapping:** `/services/penetration-testing`, `/services/web-app-pentest`, `/services/mitre-attack-assessment`

**Cluster posts (6):**
1. OWASP Top 10 in 2026: What's Changed
2. Authentication and Session Flaws in Modern Web Apps
3. API Pentesting: REST, GraphQL, and Webhooks
4. MITRE ATT&CK for Web Applications: Mapping Findings
5. SaaS Pentest Checklist for Founders
6. From Pentest Report to Patched Production

### 5.3 Pillar 3 — "Stripe Integration for SaaS Founders"

**Pillar URL:** `/blog/stripe-integration-saas-guide`

**Primary service mapping:** `/services/stripe-integration`, `/services/licensing-system`, `/services/nextjs-development`

**Cluster posts (6):**
1. Stripe Checkout vs Stripe Elements vs Stripe Billing
2. Subscription Lifecycle Webhooks (Without Footguns)
3. Stripe + Next.js App Router: A Production Pattern
4. Metered and Usage-Based Billing on Stripe
5. Stripe Tax, EU VAT, and Avalara: When to Use What
6. License Keys + Stripe Entitlements: Architecture

### 5.4 Pillar 4 — "Trading Bots and Quantitative Systems"

**Pillar URL:** `/blog/trading-bot-development-guide`

**Primary service mapping:** `/services/trading-bot-development`, `/services/licensing-system`, `/services/nextjs-development`

**Cluster posts (6):**
1. Backtesting Frameworks: Pandas vs Vectorbt vs Custom
2. Real-Time Market Data Pipelines on AWS
3. Risk Management Layers in Algorithmic Trading
4. Distributing Trading Bots as Licensed SaaS
5. Latency Optimization for Equity Strategies
6. Compliance Checklists for Retail Quant Platforms

### 5.5 Pillar 5 — "Next.js for Production: An Engineering Playbook"

**Pillar URL:** `/blog/nextjs-production-engineering-playbook`

**Primary service mapping:** `/services/nextjs-development`, `/services/stripe-integration`, `/services/web-app-pentest`

**Cluster posts (6):**
1. App Router vs Pages Router: Migration Lessons
2. Authentication in Next.js: Clerk, Auth.js, or Custom
3. Server Components, Server Actions, and Form Patterns
4. Securing Next.js Against OWASP Top 10
5. Deploying Next.js: Vercel, AWS, Self-Hosted
6. Performance Budgets and Core Web Vitals on Next.js

### 5.6 Cluster Cross-Linking Rules

- Every cluster post links to its pillar **at least twice**, once near the top and once near the bottom, with varied anchors.
- Every cluster post links to **at least 2 sibling cluster posts**.
- Pillar pages link to all 6 cluster posts in a dedicated "Continue Reading" section with descriptive anchors.
- Pillar pages also link out to **at least 2 relevant service pages** and **at least 1 case study**.
- Cluster posts may link to other pillars when contextually relevant (e.g., a CRM cluster post mentioning Stripe should link to the Stripe pillar).

---

## 6. Common Anchor-Text Mistakes to Avoid

These are the failures we see most often on competitor sites and the rules QuantLab will enforce.

### 6.1 Over-Optimization Mistakes

1. **Identical exact-match anchors everywhere.** Linking to `/services/custom-crm-development` with the exact text "custom CRM development" on every single page that mentions CRMs is a footprint Google penalizes. Vary it.
2. **Keyword-stuffed anchors.** "best Atlanta custom CRM development company near me services" reads like spam. Stick to natural phrases of 2–5 words.
3. **Match-typing the entire page title in the anchor.** Don't make the anchor identical to the H1 of the destination — Google reads this as automated.

### 6.2 Under-Optimization Mistakes

4. **Generic "click here" / "learn more" / "read more" everywhere.** These anchors waste the equity transfer. Replace with descriptive text.
5. **Naked URL anchors** ("see https://quantlabusa.dev/services/penetration-testing"). Use natural prose instead.
6. **Image-only links with no alt text.** When linking an image, the `alt` attribute is the anchor text — make sure it's descriptive and keyword-relevant.

### 6.3 Topical Mismatch Mistakes

7. **Anchor text that doesn't match the destination.** Linking the words "Stripe integration" to `/services/penetration-testing` confuses search engines and users. Don't do this for "internal linking SEO."
8. **Linking to pages that don't exist yet or 404.** Audit internal links quarterly.
9. **Linking out to mid-funnel pages (Contact) with high-value commercial anchors.** Don't burn an "Atlanta CRM development" anchor on `/contact` — use it on a service page.

### 6.4 Structural Mistakes

10. **First-link-on-page going to a low-priority destination.** The first link to a given URL counts most — don't waste it on a navigation header link before the body content gets a chance.
11. **All links from one page going to the same destination.** Spread your equity. A blog post linking 6 times to one service page is a footprint.
12. **Orphan pages.** Every URL must have at least 2 inbound internal links.
13. **Footer-only equity.** Pages that are only reachable via the footer get the least equity. If a page matters, it needs body links from related pages.

### 6.5 Anchor Hygiene Rules to Enforce in CMS

- No anchor text shorter than 2 words (except branded "QuantLab" or "QUANT LAB USA").
- No anchor text longer than 8 words (avoids sentence-as-anchor footprint).
- Anchors must read naturally in their sentence context — verify by reading the sentence aloud.
- Anchor text must NOT include trailing punctuation inside the link tag (`<a>...</a>`).
- Always use sentence-case or natural capitalization, not Title Case mid-sentence.

---

## Appendix A — Implementation Priority

For a brand-new site, ship in this order to capture equity flow as content is added:

1. **Week 1 — Skeleton:** Homepage, /services, /contact, /about. Footer + main nav live.
2. **Week 2 — Service pages:** All 8 service pages with full internal linking to each other + homepage + contact.
3. **Week 3 — City pages:** All 14 city pages launched simultaneously with cross-links to nearby cities and full service links.
4. **Week 4 — Case studies + /case-studies hub.** Each case study links to its primary service + primary city.
5. **Week 5+ — Pillar pages, then cluster posts.** Build out one pillar at a time so each cluster is internally complete before publishing the next.

## Appendix B — Recommended Monitoring

- Run Screaming Frog quarterly to catch broken internal links, orphan pages, and redirect chains.
- Track top internal anchor texts in Search Console (Links report) — confirm distribution matches the 30/30/20/10/10 target.
- Monitor "depth from homepage" — no page should be more than 3 clicks deep.
- Watch crawl stats in GSC — if any hub stops getting crawled regularly, increase internal links pointing to it.
