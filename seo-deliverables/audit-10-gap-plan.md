# QUANT LAB USA — Gap Plan & Add-On Roadmap (Deliverable #10 / Audit)

**Date:** 2026-05-12
**Prepared for:** William Beltz, Founder
**Source:** Audit of `/seo-deliverables/` (00–18) against live `quantlabusa.dev` source at `/src/app/`
**Live URL count:** 93 routes (homepage, 14 services, 14 cities, 42 service×city, 5 industries, 3 vs pages, 6 case studies, FAQ, Stripe calculator, calculators landing, about, work index, sales/admin/training internal tools)

---

## Section A — Shipped-vs-Drafted Status by Deliverable

| # | Deliverable | Status | What's live | What's still on paper |
|---|---|---|---|---|
| 01 | Technical SEO audit | **Mostly shipped** | Redeploy fixed 404s. Org + LocalBusiness + Person JSON-LD wired in `src/app/layout.tsx`. Sitemap + robots live. | Verify `og-image.png` (1200×630), `founder.jpg`, `apple-touch-icon.png` are committed to `public/`. Verify GSC verification token replaced. `next.config.ts` security headers + AVIF/WebP image formats still empty. |
| 02 | Content gap / 70 keywords | **Partial** | 14 service pages, 14 city pages, 3 city-scoped service pages × 14 cities = the high-priority commercial keywords are covered. | 30 blog posts (Q1–Q3 sequencing) all unwritten. The "pillar guide" pages (`/blog/custom-crm-development-guide`, `/blog/build-vs-buy-guide`) do not exist. |
| 03 | Competitor analysis | **N/A (research)** | Insights baked into service/vs/case-study copy. | No follow-up "vs <competitor-name>" pages built beyond 3 vs pages. Vs-Hashe, Vs-Codestaff, Vs-Bairesdev all proposed but unbuilt. |
| 04 | 42 backlinks | **Not started** | None confirmed in live link profile. | All 42 outreach targets, HARO/Qwoted listings, podcast pitches, guest post submissions outstanding. |
| 05 | 14 city landing pages | **Shipped** | All 14 `/software-development-{city}-{state}` live. | 3 cities have shallow city-scoped service combos (only pentest, CRM, Stripe ship per city). Could expand to 5–6 services × 14 cities = 70+ more local pages. |
| 06 | 8 service pages | **Shipped + expanded** | 14 service pages live (8 originals plus 6 expanded standalone). | None — over-delivered here. |
| 07 | 6 case studies | **Shipped** | All 6 live at `/work/[slug]`. | Quotes need to be replaced with actual client quotes (some drafts still placeholder). No video/audio testimonials. |
| 08 | 30 blog posts | **0 shipped** | Outlines only. No `/blog` directory exists in `src/app/`. | All 30 posts unwritten and unshipped. **This is the largest single content gap.** |
| 09 | 30 FAQ pairs | **Shipped** | `/faq` page live, FAQPage JSON-LD wired. | Cross-link FAQ entries into service/city pages still partial. |
| 10 | Schema JSON-LD | **Mostly shipped** | Organization, LocalBusiness, Person, Service, FAQPage live. | BreadcrumbList not yet per-page; WebSite SearchAction (sitelinks search box) not yet shipped. |
| 11 | Meta tag rewrites | **Mostly shipped** | Homepage title/description updated. Per-page metadata on all 93 routes. | Audit recommended titles/descriptions still need a final QA sweep against actual rendered `<head>`. |
| 12 | Internal linking | **Partial** | Hub-and-spoke wiring is in place from services → cities and cities → services. Case studies cross-link. | "Pillar guide" parent topology missing because the blog/guide pages don't exist. Industry pages don't yet receive enough inbound internal links (only sitemap + nav). |
| 13 | 55+ citations | **Not started** | NAP appears only on the site itself. | All directory submissions outstanding (Bing Places, Apple Business, BBB, Yelp, Crunchbase, Wellfound, Foursquare, Yellow Pages, etc.). |
| 14 | 35 PR outlets | **Not started** | No pitches sent. | Master pitch + outlet-specific drafts unsent. No HARO/Qwoted account in place. |
| 15 | 7 lead magnets | **1 of 7 shipped** | Stripe Cost Calculator at `/calculators/stripe-cost`. | **6 unbuilt:** Build vs Buy Guide, Web App Pentest Checklist, CRM ROI Calculator, MITRE ATT&CK Worksheet, MVP→Prod Playbook, Trading Bot Checklist. |
| 16 | 5-email drip sequence | **Templates only** | Resend SDK installed, `src/lib/mailer.ts` exists, single transactional notification (consultation submit) wired. | No scheduled drip pipeline. No `cadence_step` automation tied to lead-magnet downloads (only the sales-outreach `consultations.cadence_step` table is used for outbound, not for inbound nurture). |
| 17 | 6 LinkedIn outreach tracks | **Templates only** | Sales CRM at `/sales/*` exists. Outreach generators wired (`/api/sales/generate-outreach`). | No connection-to-CRM glue. No tracker for accept/reply rates by track. ICP filters live as freeform notes, not structured. |
| 18 | Review request sequence | **Templates only** | Google review link is hard-coded into templates. | No send-flow exists. No SMS provider wired. No post-project trigger to enroll a client into the review cadence. |

---

## Section B — Infrastructure Gaps (Backend / Pipes)

| Capability | Status | Where it lives / what's missing |
|---|---|---|
| Lead intake API | **Built** | `POST /api/consultations` writes to Postgres `consultations` table, emails `beltz@quantlabusa.dev` via Resend. **No dedicated `/api/leads` endpoint** — the consultations table doubles as the leads table. |
| CRM database | **Built** | `@vercel/postgres` + `consultations` + `crm_users` + sales pipeline tables (see `src/lib/db.ts`). Sales dashboard at `/sales/dashboard`, leads at `/sales/leads`, analytics at `/sales/analytics`. |
| Email sending | **Built (transactional only)** | `resend` SDK, `src/lib/mailer.ts`, `nodemailer` + `imapflow` for inbound sync (`/api/sales/email-sync`). **Gap: no drip-scheduler.** Cron / queue / nurture-state machine for the 5-email lead-magnet drip does not exist. |
| Google Analytics 4 | **Wired, env-var gated** | `src/components/Analytics.tsx` renders gtag if `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set. **Verify the env var is actually set in Vercel prod.** |
| Google Search Console | **Likely unverified** | Audit flagged `REPLACE_WITH_VERIFICATION_TOKEN` placeholder. Verify it's replaced and property is verified. |
| Google Tag Manager | **Not wired** | No GTM container. GA4 is direct-gtag, no GTM layer. **Recommend installing GTM** for future conversion-event flexibility (button clicks, form submits, scroll depth). |
| Booking / Calendar | **MISSING** | No Calendly / Cal.com / Savvycal embed. All "book a call" CTAs route to the contact form. **Highest-leverage missing piece.** Booking integration would cut friction on the dozens of CTAs across services, city pages, case studies, and the FAQ. |
| Error tracking | **MISSING** | Sentry is referenced in marketing copy (`/faq`, `/about`, healthcare industry page) but NOT installed in `package.json`. Production runtime errors are invisible. |
| Admin dashboard | **Partially built** | `/admin/dashboard` exists with invoicing tab. `/sales/dashboard` has the lead pipeline. **Gap: no unified "marketing analytics" view** — page-traffic / conversion-event / lead-source / referral-channel rollup. Currently lives in GA4 only. |
| PageTracker (visit logging) | **Built** | `src/components/PageTracker.tsx` mounted in root layout. `/api/admin/visitors` and `/api/track` exist. |
| Lead magnet delivery | **MISSING delivery infra** | Stripe calculator runs client-side only. Email-gated download for the unbuilt 6 magnets has no infrastructure: no signed-URL S3 hosting, no opt-in confirmation page, no double-opt-in. |
| Newsletter capture | **MISSING** | No newsletter form. No ESP (ConvertKit / Beehiiv / Mailchimp) connected. |
| Webhook / event bus | **MISSING** | No way to fire "lead-magnet downloaded" → "enroll in drip" → "score temperature" pipeline. Sales CRM has cadence steps for outbound (`src/lib/cadence.ts`), but no inbound mirror. |
| SMS provider | **MISSING** | Review request templates rely on SMS but no Twilio / MessageBird connection. |
| `next.config.ts` | **Empty** | No security headers (HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy), no AVIF/WebP image format defaults, no redirects. P1 from technical audit. |

---

## Section C — New Add-Ons Not in Current Deliverables (Recommended)

The 18 deliverables cover SEO + content + outreach. They do NOT cover several high-leverage page types and trust signals:

| Add-on | Why it matters | Effort |
|---|---|---|
| **Pricing page** (`/pricing`) | 70%+ of B2B buyers self-filter on pricing before contacting. Transparent ranges ($5K MVP / $40–120K production / $120–400K platform) qualify leads and pre-empt the "what's it cost?" call. SEO bonus: ranks for "next.js development cost", "custom crm cost". | **Low** — 1 day to draft, ship as single page with anchor ranges per service. |
| **Booking page** (`/book` or `/book-a-call`) | A dedicated 15-min discovery call landing page (Cal.com or Calendly embed) converts cold traffic at 3–5× vs. the contact form. Removes the "I'll think about it" friction. | **Low** — 2 hours to embed Cal.com + write copy. Requires Cal.com account ($15/mo). |
| **Trust page** (`/trust`) | One page that consolidates: NDA template, IP-ownership policy, code-handoff guarantee, GDPR/SOC2 stance, security practices, sub-processor list. Closes enterprise-curious leads. SEO bonus: ranks for "[competitor] vs custom dev security". | **Med** — 1 day for copy, 1 day to QA. |
| **Stripe Connect marketplace explainer** (`/services/stripe-connect-marketplace`) | William has Stripe expertise. Marketplace/multi-party payments is a high-margin niche (think: Substack, Patreon, Shopify Pro). Single page, schema-tagged. | **Low** — 4 hours. Builds on existing `/services/stripe-integration` copy. |
| **Build-vs-Buy ROI calculator** (`/calculators/build-vs-buy`) | Mirrors the Stripe Cost Calculator pattern. Lead magnet #1 from deliverable 15 — but interactive instead of PDF. Self-segmenting, captures emails, no PDF infra needed. | **Med** — 2 days (decision tree + form + email send). |
| **Time-to-Ship estimator** (`/calculators/time-to-ship`) | Founder-friendly: input feature list, output realistic ship date. Hugely shareable on HN, IH, X. | **Med** — 2 days. |
| **CRM ROI calculator** (`/calculators/crm-roi`) | Lead magnet #4 from deliverable 15, web-form version. | **Med** — 2 days. |
| **Glossary** (`/glossary/[term]`) | One page per term: MITRE ATT&CK, OWASP Top 10, Next.js, App Router, RSC, Stripe Connect, ATS escrow. Each ~600 words, each ranks for definitional queries. 15 glossary pages = 15 long-tail keyword wins, all internal-linked from blog posts. | **High** — 1 day per page × 15 pages = 3 weeks part-time. |
| **About page enhancement** (`/about`) | Live but the founder-story E-E-A-T arc could be strengthened: years building, languages, biggest screwup, signature engagement style. Helps Google authority and trust signals. | **Low** — half day. |
| **Newsletter signup + archive** (`/newsletter`) | Founder-led weekly note (200–400 words). Builds long-term audience independent of Google. Archive ranks for niche queries. Pairs with Beehiiv ($0–49/mo). | **Med** — 1 day for embed + landing, then weekly send overhead. |
| **Hiring / Careers page** (`/careers`) | If WB is scaling. Recruits senior eng talent. Bonus: ranks for "next.js developer jobs atlanta" type queries; pulls peer-engineer traffic. | **Low** — 1 day. Skip if not hiring. |
| **Webinar / Office Hours signup** (`/office-hours`) | Public "ask me anything about your stack" 30-min slot, twice a month. Captures inbound that's not ready to book a paid consult. | **Low** — Cal.com event + landing page. |
| **Press / Media kit** (`/press`) | Founder bio, headshot, logo, recent press, contact. Cuts response time when PR outreach lands. | **Low** — half day. |
| **Status page** (`status.quantlabusa.dev`) | Public uptime + incident history. Trust signal for enterprise leads asking "what's your SLA?". | **Low** — Better Stack free tier or `statuspage.io`. |
| **Open-source / GitHub portfolio page** (`/code`) | Showcase real code (sanitized). Differentiates from offshore agencies who can't show code. E-E-A-T boost. | **Med** — depends on what can be public. |

---

## Section D — Prioritized 90-Day Add-On Roadmap

Ranked by `(impact × confidence) / effort`. Impact is conversion lift OR organic-traffic lift over 90 days, effort is engineer-days.

### THIS WEEK (3 items — Days 1–7)

| # | Item | Type | Why now | Effort |
|---|---|---|---|---|
| 1 | **Cal.com booking page at `/book`** | Infra + page | Single biggest conversion lever on the live site. Every "Book a call" CTA across 93 routes currently dead-ends into the contact form. | 2 hours |
| 2 | **Pricing page (`/pricing`) with transparent ranges** | Page | Self-qualifies leads, kills the "what does it cost" objection on first touch. Ranks for "[service] cost" queries. | 1 day |
| 3 | **Install Sentry + add security headers in `next.config.ts`** | Infra | Production errors are currently invisible. Security headers are P1 from technical audit. Both are 1-day fixes that unblock everything else. | 1 day |

### THIS MONTH (5 items — Days 8–30)

| # | Item | Type | Why | Effort |
|---|---|---|---|---|
| 4 | **Build vs Buy ROI Calculator + email-gate** (`/calculators/build-vs-buy`) | Calc + lead-magnet | Highest-converting lead magnet from deliverable 15. Web form > PDF — no fulfillment infra needed. | 2 days |
| 5 | **Email drip pipeline** (Resend + Vercel Cron + drip-state in Postgres) | Infra | Required for ALL 6 unbuilt lead magnets to actually nurture leads. Build once, reuse forever. Template: `lead_magnet_downloads` table + cron → 5-email sequence from deliverable 16. | 3 days |
| 6 | **Trust page** (`/trust`) | Page | Closes enterprise-curious leads. NDA template + IP ownership + security stance. | 1 day |
| 7 | **First 3 blog posts** (Post 1: Build vs Buy, Post 2: MITRE ATT&CK, Post 3: Custom Software Cost) | Content | Each is a pillar that 5–10 future MOFU/BOFU posts will internally link to. Ship the trunk first. | 1 day per post × 3 = 3 days |
| 8 | **Submit 10 quick-win citations** (Bing Places, Apple Business, BBB, Yelp, Crunchbase, Wellfound, Foursquare, Yellow Pages, LinkedIn Company, Facebook Business) | Outreach | Free, 15 min each. NAP citations are the floor of local SEO. | 2.5 hours total |

### THIS QUARTER (7+ items — Days 31–90)

| # | Item | Type | Why | Effort |
|---|---|---|---|---|
| 9 | **5 more lead magnets** (Pentest Checklist, CRM ROI Calc, MITRE Worksheet, MVP→Prod Playbook, Trading Bot Checklist) | Content + calc | With drip infra in place, each new magnet only needs landing + content + drip enrollment. | 2 days each × 5 = 10 days |
| 10 | **Posts 4–10 from blog calendar** (Q1 TOFU foundation) | Content | The next 7 pillar posts feed Q2 MOFU. Aim for 2 posts per week. | 1.5 days per post × 7 = 10.5 days |
| 11 | **6 city-scoped service combos × 5 more services** | Page | Expand from 3 city-scoped services (pentest, CRM, Stripe) to 8 services per city. 14 × 5 = 70 new local pages with low marginal effort (template-driven). | 2 days for templating, then 0.5 day per page × 70 = 35 days OR ship as static-gen template = 5 days. |
| 12 | **Newsletter (Beehiiv) + first 4 issues** | Content | Long-term audience asset. Founder voice. Ranks niche queries. | 1 day setup + 0.5 day per issue |
| 13 | **Glossary (15 pages)** | Content | 15 long-tail keyword wins. Internal-link from every relevant blog post. | 1 day each × 15 = 15 days |
| 14 | **Press / Media kit page** | Page | Unblocks the 35 PR pitches in deliverable 14. | 0.5 day |
| 15 | **Webhook + lead-event bus** (Resend webhooks → score temperature → enroll cadence) | Infra | Closes the loop: download → temperature → drip → sales handoff. Required for scale beyond ~20 leads/month. | 3 days |
| 16 | **Status page (status.quantlabusa.dev)** | Infra | Better Stack free tier. Enterprise trust signal. | 2 hours |
| 17 | **Stripe Connect marketplace service page** | Page | Niche but high-margin. Builds on existing Stripe authority. | 4 hours |

---

## Section E — What NOT to Build (Yet)

- **A native CRM / replacing `/sales/*`** — already built and adequate for current lead volume.
- **A blog CMS (Sanity, Contentful)** — at 30 posts, MDX files in `src/content/blog/` work fine. Don't add a CMS until 100+ posts.
- **Marketing automation platform (HubSpot, Marketo)** — overkill. Resend + Postgres cron does the same job at 1% of the cost until ~1000 leads/month.
- **A11y / WCAG full audit page** — important, but lower conversion impact than the 17 items above. Schedule for Q3+.
- **Spanish-language city pages** (Miami, Austin) — only if data shows actual Spanish-search traffic. Don't pre-build.

---

## Section F — Single-Sentence Summary by Priority Bucket

- **This week:** Wire booking, ship pricing, install Sentry + security headers. These are days, not weeks.
- **This month:** Build the drip-email pipeline once so every future lead magnet plugs in. Ship the first ROI calculator and first 3 pillar blog posts.
- **This quarter:** Compound — 5 more lead magnets, 7 more blog posts, 70+ city-scoped service pages, glossary, newsletter, status page.

**Single biggest unlock:** wiring the drip-email pipeline (item #5). Without it, every future lead magnet has nowhere to send leads. With it, every new magnet is a 2-day add instead of a 1-week add.
