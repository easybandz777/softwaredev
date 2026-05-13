# QUANT LAB USA — SEO Scorecard & 90-Day Playbook

**Date:** 2026-05-12
**Author:** Bill Beltz, founder
**Domain:** https://quantlabusa.dev
**Audience:** Internal stakeholder review, monthly progress reference
**Source-of-truth:** This document, in concert with the rest of `seo-deliverables/` (`00-MASTER-INDEX.md`, audits 01–10, strategy docs 01–19, and the Wave 3 reports — `sitemap-ping-report.md`, `crawl-audit-report.md`, `audit-04-schema-validation.md`, and `indexnow-key.md`).

This is a strategic readout, not a hype document. We shipped a lot today. We also know what we don't have. Nothing below is sugar-coated.

---

## 1. What we shipped today (2026-05-12)

Three commit waves landed on `master`:

- **`d1aff61` — Phase 1 polish.** New `/contact`, new `/api/leads` (Resend + DB + Slack), ConsultationModal pre-fill props, Cal.com in success state, hamburger nav with focus trap + ESC, 4-column WCAG-AA footer, sitewide `tel:` links, `founder.jpg`, optimized logo (25KB webp / 18KB png from 433KB), `og-image.png`, `manifest.json`, schema standardization in `src/app/layout.tsx`, `next.config.ts` AVIF/WebP + compress + `optimizePackageImports`.
- **`c3b4e8d` — Wave 2 SEO blitz (18-agent parallel build).** ~100 new pages: pillar guide, 10 blog posts + index, 6 new service verticals, 5 new `/vs/*`, all 14 city pages rewritten 880–1,066 words, 12 neighborhood pages, 4 new industries plus 5 expansions, 20-page glossary, 4 calculators.
- **`45ff624` + Wave 3 indexing (this wave).** IndexNow key committed, sitemap pings tested (Yandex 200, Google/Bing 404/410 — both deprecated), crawl audit (173 of 177 URLs healthy), JSON-LD validation, this scorecard.

### Concrete inventory (live page counts as of this commit)

| Surface | Count | Path |
|---|---:|---|
| Service hubs + service×city combos | 20 hubs + 42 city scoped | `/services/*` (and 3 verticals × 14 cities under `/services/{slug}/[city]`) |
| City landing pages | 14 | `/software-development-{city}-{state}` |
| Neighborhood pages | 12 | `/locations/{neighborhood}` |
| Industry pages | 9 | `/industries/{construction,healthcare,fintech,e-commerce,insurance,legal-services,saas,manufacturing,real-estate}` |
| Comparison `/vs/*` | 8 | `/vs/{hubspot,salesforce,toptal,upwork,webflow,wordpress,shopify,big-4-pentest}` |
| Case studies | 10 (in `case-studies.ts`) + 4 stale sitemap entries → 404 | `/work/[slug]` |
| Blog (pillar + supporting) | 11 posts + index | `/blog/*` |
| Glossary terms | 20 definitions + index | `/glossary/*` |
| Calculators | 4 | `/calculators/{stripe-cost, crm-roi, pentest-cost, build-vs-buy}` |
| Resources + lead magnets | 7 | `/resources/*` |
| Trust pages | About, Methodology, Process, Reviews, Security, Certifications, Press, Press Kit, Pricing, FAQ, Contact, Privacy, Terms, Training, Search | top-level |
| Total live URLs in sitemap | **177** (173 200-OK, 4 404 — see Section 3) | `sitemap.xml` |
| Total `page.tsx` files in `src/app/` | 160 | — |

Schema coverage on the top-20 audited URLs: **100% have title + meta description + JSON-LD + h1 + ≥1,000 words of substantive copy.** Pillar at `/blog/custom-crm-development-guide` is 14,475 words. Only 4 of 177 sitemap URLs return non-200 (per `crawl-audit-report.md`).

**Source docs:** Phase 1 polish → `audit-01` through `audit-10`. Wave 2 strategy → `01`–`18`. Wave 3 indexing → `19-MASTER-AUDIT-PLAN.md`, `sitemap-ping-report.md`, `crawl-audit-report.md`, `audit-04-schema-validation.md`, `indexnow-key.md`. This file is the Wave 3 closeout.

---

## 2. SEO scorecard — state of the foundation

Each dimension is scored 1–10, with what we have and what we still owe.

### 2.1 Content depth — **8 / 10**
- **Done.** 160 `page.tsx` routes. Service pages 3,300–5,700 words. Industry pages 1.5–3× expanded in Wave 2. CRM pillar = 14,475 words. 20 glossary entries each clear 600 words for DefinedTerm schema.
- **Owed.** Three of four `/calculators/*` lack the long-form copy the Stripe calc has. 19 of 30 blog posts from `08-blog-topics.md` unshipped. Industry case studies are thin (card-only, no deep sub-pages).

### 2.2 Schema coverage — **8 / 10**
- **Done.** Organization + LocalBusiness + ProfessionalService + Person + WebSite triplet on every URL (per `audit-04-schema-validation.md`). FAQPage on hubs, Service on services + `/vs/*`, Article + BreadcrumbList on case studies, WebApplication on calculators. 45 of 45 blocks parse as valid JSON.
- **Owed.** Three Service blocks reference `#org` instead of `#organization` (entity-graph break, `audit-04` C1). Inline `provider`/`publisher` objects use "QuantLab Software Solutions" not canonical "QUANT LAB USA" (C2). `BreadcrumbList` missing on city pages. Org missing formal `contactPoint`.

### 2.3 Internal linking density — **7 / 10**
- **Done.** Hub-and-spoke per `12-internal-linking.md`: services↔cities, case studies → relatedServices + relatedCity, pillar has 42 internal links, glossary links to services. Nav + 36-link 4-column footer cover the rest.
- **Owed.** Industry pages still rely on nav/sitemap for inbound, not enough contextual links. Neighborhoods don't all receive links from their parent city. `/vs/*` doesn't cross-link. No previous/next rail in `/blog/*`.

### 2.4 Local SEO foundation — **6 / 10**
- **Done.** 14 city pages with `areaServed`. 12 neighborhood pages. GBP verified (`https://g.page/r/CbkSyF5E2JFtEBM/review`). Macon, Atlanta, Augusta, Charlotte, Columbus all 880+ words with hyperlocal angles.
- **Owed.** **Zero citations submitted yet** — Bing Places, Apple Business, Yelp, BBB, Crunchbase, Foursquare, Wellfound, Yellow Pages, Macon/Atlanta chambers all open. 55-source target list in `13-citations-directories.md`. Only the site itself carries NAP. Augusta, Columbus, Savannah have no `/locations/*` sub-pages.

### 2.5 Conversion paths — **6 / 10**
- **Done.** `/contact` live. `/api/leads` writes to Postgres + emails + Slack. ConsultationModal accepts `defaultService`/`defaultCity`/`source` props. Cal.com in modal success state. `tel:+17706521282` in nav + footer.
- **Owed.** Per `audit-09-conversion-paths.md`: 4–6 click-depth to conversion (target ≤2). No `gtag` event on form submit — can't measure CR by funnel. 6 unbuilt lead magnets need email-gated delivery infra. Calendar booking is post-submit only, not a primary top-of-funnel CTA.

### 2.6 Technical SEO — **8 / 10**
- **Done.** Sitemap 200 OK, 177 entries, `application/xml`, CORS open. `robots.ts`, `feed.xml`, `image-sitemap.xml`, `llms.txt` all live. IndexNow key at `public/acdf51b933f8fa99caa87e28464ee464.txt`. `not-found.tsx` ships a real 404. Avg response 0.316 s, no URL >1 s.
- **Owed.** GSC verification token (was `REPLACE_WITH_VERIFICATION_TOKEN` per `01-technical-seo-audit.md`). Bing Webmaster Tools verification. Lighthouse mobile ~55–65 on homepage per `audit-06-performance.md` (HeroCanvas per-frame gradients + logo `priority`). Security headers absent from `next.config.ts`.

### 2.7 E-E-A-T signals — **5 / 10**
- **Done.** Person JSON-LD → `/about` on every page. Founder photo. `/methodology` (3,914 words), `/certifications-credentials`. Public clients named on `/work` (Northcrest, ProtectWithBri, HobbsPeak, Bridgepointe, J5 Sales OS, Wilder Recovery). 10 case studies in `case-studies.ts`. 31-question FAQ.
- **Owed.** **No SOC 2.** No third-party audit. Zero PR landed from `14-pr-outreach.md`. Thin author bio on pillar. **Zero Google reviews** collected from `18-review-request.md`. Client testimonials intentionally null pending verbatim written sign-off.

### 2.8 Off-page — **2 / 10**
- **Done.** GBP verified. IndexNow wired. Yandex sitemap accepted.
- **Owed.** **Zero backlinks** from `04-backlink-opportunities.md` (42 targets). Zero citations from `13-citations-directories.md`. Zero PR from `14-pr-outreach.md`. No HARO/Qwoted account. No LinkedIn outreach started from `17-linkedin-outreach.md`. This is the weakest dimension and the one most likely to bound our 90-day ceiling.

### 2.9 Brand assets — **7 / 10**
- **Done.** Optimized logo 25KB webp / 18KB png. Founder photo. 7 OG variants (general, CRM, pentest, services, Stripe, trading, web apps). Twitter card. Apple touch icon. Favicon. `manifest.json`. `public/press-kit/` + `/press-kit` + `/press` routes. `llms.txt`.
- **Owed.** Per-page OG variants probably not routed correctly (Stripe pages may still serve generic — needs OG audit verification). LinkedIn headline still "Founder" not "Founder, QUANT LAB USA INC". No press logos strip.

### 2.10 Mobile / a11y — **8 / 10**
- **Done.** Hamburger drawer with focus trap + ESC + body scroll lock + tap-to-call. 4-column footer, WCAG-AA contrast, 44 px tap targets. Sitewide `tel:`/`mailto:`. `Viewport` export.
- **Owed.** Lighthouse a11y not re-run post-`d1aff61`. HeroCanvas not `prefers-reduced-motion` aware. Calculator inputs need `aria-label` audit.

### Overall foundation grade — **6.5 / 10**

On-page foundation is strong (avg 7.5 across content/schema/internal-link/technical/mobile). Local foundation is mid (6 — pages exist, citations don't). Off-page is borderline-zero (2 — nothing acquired yet). E-E-A-T is mid (5 — author exists, but no reviews, no PR, no certs). The site is technically ready to rank. It is **not yet socially-proven** to rank against entrenched competitors like BairesDev, Toptal, or the regional Atlanta dev shops that already have 10–50 client reviews on Clutch.

The 90-day path is to drag off-page and E-E-A-T from 2 and 5 up to 5 and 7, while not letting the on-page foundation rot.

---

## 3. The 4 broken case-study routes — immediate fix list

The crawl audit (`crawl-audit-report.md`) flagged 4 URLs in the sitemap returning 404:

- `/work/clear-channel-broadcast`
- `/work/coastal-yacht-services`
- `/work/regional-medical-billing`
- `/work/northstar-trading-desk`

### Root cause

These slugs are **not** in `src/lib/case-studies.ts`. The data file ships 10 case studies. The 4 broken slugs come from a hardcoded array in `src/app/sitemap.ts:158–169` that drifted away from the case-studies array. `/work/[slug]/page.tsx` correctly calls `getCaseStudyBySlug()`, finds nothing, returns `notFound()`. `/work` iterates `case-studies.ts` directly, so the 4 ghosts never render as links — they only appear as orphan sitemap entries.

### Investigation steps (do not fix in this scorecard)

1. Confirm: open `src/app/sitemap.ts:158–169` and verify the hardcoded `caseStudySlugs` array contains the 4 ghost slugs.
2. Confirm: open `src/lib/case-studies.ts` and verify the 4 are **not** in the exported `caseStudies` array.
3. Pick direction: (a) **remove the hardcoded list and import `caseStudies` from `@/lib/case-studies`** (preferred — eliminates drift permanently, 10-min change, sitemap goes to 173/173 OK), or (b) add 4 real case-study entries to `case-studies.ts` (only if the slugs map to real engagements).
4. Re-deploy + re-run crawl audit.

**Recommended: option (a).**

---

## 4. Next 30 days — P0 priorities

Immediate, can't-skip, owner-Bill, doable in four weeks.

1. **GSC verification + sitemap submit + top-25 URL inspection.** Replace any remaining `REPLACE_WITH_VERIFICATION_TOKEN` in `src/app/layout.tsx`. Add property, submit sitemap, request indexing on: homepage, 5 city pages (Macon, Atlanta, Augusta, Charlotte, Columbus), 8 services (custom-crm, penetration-testing, stripe-integration, web-app-pentest, custom-business-software, mobile-app-development, ai-integration-services, saas-platform-development), 5 industries (fintech, healthcare, e-commerce, saas, real-estate), the CRM pillar, 4 high-intent `/vs/*` (salesforce, hubspot, toptal, big-4-pentest), plus `/pricing`, `/work`, `/about`. (`sitemap-ping-report.md` §4.)
2. **Bing Webmaster Tools verify + sitemap + same 25 URL submissions.** Import from GSC. Feeds Yahoo + DuckDuckGo too.
3. **Fix the 4 case-study 404s** (Section 3, option a). 10-min commit.
4. **Fix the 3 schema critical issues from `audit-04-schema-validation.md`.** `#org` → `#organization` in 3 Service blocks (pentest-atlanta-ga, sd-atlanta-ga, vs/salesforce). Standardize inline `provider`/`publisher` names to canonical "QUANT LAB USA". Re-validate.
5. **Submit the 10 quick-win citations** from `13-citations-directories.md` §1.1–1.10: Bing Places, Apple Business Connect, LinkedIn Company Page, Facebook Business, Yelp, BBB, Crunchbase, Yellow Pages, Foursquare, Wellfound. ~15 min each, free. Use the canonical NAP from line 13.
6. **Request 3 Google reviews** per `18-review-request.md`: Northcrest (SMS), ProtectWithBri (personal text), HobbsPeak (SMS). Drive to the GBP review URL. Unlocks Clutch/GoodFirms/DesignRush eligibility.
7. **Triage Lighthouse issues from `audit-06-performance.md`.** Two changes carry 80% of delta: gate `HeroCanvas` behind `prefers-reduced-motion: no-preference` + drop node count 13→8; move Navbar logo to 18KB png with explicit `width`/`height`, `priority` on homepage only. Target: mobile perf 80+, LCP <2.5s.
8. **Wire GA4 + GSC token.** Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in Vercel prod. Verify `<meta name="google-site-verification">` is routed.

Exit criterion D30: all healthy URLs in GSC `Indexed`, ≥5 Google reviews, ≥8 citations submitted, Lighthouse mobile ≥80.

---

## 5. Next 60–90 days — P1 priorities

Multi-week efforts. These move traffic, leads, and rank.

1. **Backlink outreach** against `04-backlink-opportunities.md`. Two parallel tracks:
   - **Track A (low-effort, high-DA):** Clutch.co with 3 seeded client reviews, GoodFirms, DesignRush. Requires the 3 reviews from §4-item-6 first.
   - **Track B (guest posts + HARO):** dev.to flagship technical post (J5 architecture teardown or Wilder role-based auth), Hashnode (same), one HARO/Qwoted reply per weekday on CRM/pentest/Stripe/Next.js queries.
   - Goal: 8 acquired backlinks DA 50+ by day 90.
2. **PR Top 5 from `14-pr-outreach.md`**: Hypepotamus (Atlanta startup), Indie Hackers podcast (bootstrapped), Dark Reading commentary (MITRE for SMB), Atlanta Inno (J5 feature), The New Stack (Wilder teardown). Pitch one per week. Hypepotamus is the closest-to-guaranteed land.
3. **LinkedIn outreach per `17-linkedin-outreach.md`.** Sales Navigator ($99/mo). Pick 2 ICP tracks (Track 2: pre-Series-A SaaS founder; Track 5: quant prop trader CTO). 50–75 connection requests/week/track. Floor: 1–3 qualified convos/week/track from week 4.
4. **Email drip activation per `16-email-drip.md`.** 5-email sequence is written. Need: (a) scheduler (Vercel Cron + `drip_state` table), (b) one working lead magnet (start with Build vs Buy decision guide PDF gated behind `/api/leads` with `source=lead-magnet:build-vs-buy`).
5. **E-E-A-T expansion.** Three moves: (a) expanded `/about` with founder narrative (years building, biggest failure, engagement style); (b) author bylines + bios on every post and the pillar; (c) 2 dev.to/Hashnode posts in my name in 60 days for off-site Person-schema corroboration.
6. **Content cadence: 2 blog posts/week.** 30-post backlog in `08-blog-topics.md`. Sequence: 50/50 TOFU/BOFU. Prioritize BOFU ("best X in Atlanta", "X cost in 2026", "how to choose Y"). Each post links to ≥3 services/cities contextually.
7. **Conversion-path gaps from `audit-09`.** (a) wire `service`/`city`/`source` query params through every CTA Link (props exist as of `d1aff61`); (b) add a primary "Book a call" CTA → `/book` with Cal.com embedded; (c) fire `gtag('event', 'form_submit', {form_id, source})` on `/api/leads` success.

Exit criterion D90: 30+ ranking keywords, 8+ backlinks, 1 PR placement, 5+ reviews, 1 working lead-magnet+drip flow, 2 posts/week sustained for 6 weeks.

---

## 6. 90-day expected outcomes — honest projection

What I actually expect, not what I'd put on a pitch deck.

### Day 30
- Indexing: 173 healthy URLs in GSC `Indexed`. 4 ghost 404s fixed.
- Ranking keywords: 5–15 in top 100. Mostly long-tail low-volume — "next.js development atlanta", "stripe integration cost", "custom crm small business macon", "mitre attack framework explained".
- Inbound organic leads: **2–4**. Most via direct + GBP, not organic search yet.
- Reviews: 3–5 live. Citations: 8–10 submitted.

### Day 60
- Ranking keywords: 30–60 in top 100. 3–10 in top 30 — likely city × service combos with low competitor density ("penetration testing macon ga", "custom software macon", "custom crm savannah ga").
- Organic leads: **4–8 / month** if first PR lands and one LinkedIn track hits floor.
- GBP: 200–500 impressions/month, 5–15 phone-call clicks. Backlinks: 3–5. Blog: 16+ posts shipped.

### Day 90
- Ranking keywords: 60–120 in top 100. Some long-tail commercial keywords in top 10 — realistically "custom crm development macon", "penetration testing macon ga", "stripe integration consultant atlanta", "next.js development company georgia", "custom software development savannah". The 5 money keywords from `00-MASTER-INDEX.md` will likely sit on pages 2–5 unless we land 5+ DA-40+ backlinks pointing at the right anchors.
- Organic leads: **8–15 / month** combined organic + GBP + direct.
- Reviews: 7–12. Backlinks: 8–15. PR: 1–2 landed (Hypepotamus or Atlanta Inno most likely).

What I do **not** expect at 90 days: top-3 for any money keyword. Those are 6–12 month plays against agencies with 10+ years of domain authority. We compete on long-tail, local + vertical combo, and founder-led trust — not on raw commercial heads.

---

## 7. How to measure

### Top 25 keywords to track in Search Console
Group A — primary commercial heads (compete on these long-term):
1. `custom software development atlanta`
2. `custom software development macon ga`
3. `atlanta penetration testing services`
4. `custom crm development atlanta`
5. `saas development company atlanta`
6. `hire next.js developer`
7. `stripe integration consultant`

Group B — vertical + city long-tails (compete on these in the 90-day window):
8. `custom crm small business macon`
9. `penetration testing macon ga`
10. `custom software for contractors`
11. `next.js development company georgia`
12. `mitre attack assessment macon`
13. `custom software development savannah ga`
14. `stripe subscription billing developer`
15. `custom crm vs salesforce`
16. `custom crm vs hubspot`
17. `web application penetration testing atlanta`

Group C — informational queries (feed E-E-A-T and ToFu):
18. `what is mitre attack framework`
19. `build vs buy software`
20. `how to choose a software development company`
21. `penetration testing cost`
22. `what is owasp top 10`
23. `next.js stripe integration guide`
24. `custom crm development guide`
25. `best software development companies atlanta 2026`

### Monthly KPI dashboard (record in Airtable or a simple `.csv`)

| KPI | Source | Target by D30 | Target by D60 | Target by D90 |
|---|---|---:|---:|---:|
| Indexed URLs | GSC | 173 | 173 | 173 |
| Ranking keywords (any position) | GSC | 5–15 | 30–60 | 60–120 |
| Impressions / month | GSC | 500–2k | 3k–8k | 10k–25k |
| Clicks / month | GSC | 25–100 | 150–500 | 600–1.5k |
| Avg position | GSC | 50–70 | 30–50 | 20–40 |
| Organic leads / month | GA4 + `/api/leads` | 2–4 | 4–8 | 8–15 |
| GBP impressions / month | GBP Insights | 100–300 | 200–500 | 400–800 |
| Google reviews | GBP | 3–5 | 5–8 | 7–12 |
| Backlinks (DA 30+) | Ahrefs free or Moz Link Explorer | 0–2 | 3–5 | 8–15 |
| Domain Authority / DR | Moz / Ahrefs | ~10 | ~15 | ~20 |
| Citation count | manual sheet | 10 | 25 | 40 |

### Tools
- **Free, mandatory:** GSC, Bing Webmaster Tools, GBP Insights, GA4.
- **Free, recommended:** Moz Free (DA + 10 backlinks/day), Ahrefs Webmaster Tools (free for verified owners).
- **Paid worth it:** Sales Navigator ($99/mo, required for §5-3), Resend (already in use).
- **Paid, defer:** Ahrefs Lite ($129/mo) and SEMrush ($139/mo) — free tiers cover us to day 90.

### Quarterly check (day 90)
Pull backlink delta, DA delta, citations, GSC keyword count, organic leads, top-10 pages by clicks, top-10 queries by CTR. Compare to this scorecard.

---

## 8. When to fire this strategy

Honest indicators it isn't working.

### 90-day kill criteria — any one triggers a re-plan

- **<50 ranking keywords in GSC at D90.** Either Googlebot isn't crawling (check `Coverage` + `Crawl Stats`) or our pages aren't competitive even on long-tails.
- **<3 organic inbound leads/month at D90.** 3/mo is the floor I'd expect from direct + GBP alone — failing this means organic isn't contributing and we have a conversion-path or targeting problem.
- **Zero rich snippets earned at D90.** With FAQPage, BreadcrumbList, Article, Service, WebApplication all live, some FAQ accordions/breadcrumbs should be earning SERP real estate. Zero = schema rejected or content/intent mismatch.
- **GSC `Coverage → Indexed` plateaus <60% of submitted URLs.** Google is actively de-prioritizing. Either thin/duplicate content or a canonicalization fault.
- **Zero acquired backlinks** from the 42-target list. Either outreach angle is wrong or the underlying offer isn't compelling.

### If we hit any kill criterion: pivot moves

1. **Paid first.** Google Ads on the 5 money keywords, $1.5–3K/mo. If paid clicks convert >2% to leads, page is fine — Google just hasn't trusted us yet. If paid doesn't convert either, the offer is broken.
2. **Paid placements** in B2B directories that actually drive leads — sponsored Clutch, sponsored DesignRush, BetaList for product launches.
3. **Re-evaluate ICP.** Pivot toward verticals where word-of-mouth + outbound dominates (legal SaaS, regulated finance, healthcare ops).
4. **Domain-authority partner deal.** Author content for an established Atlanta dev-shop or industry pub in exchange for byline + Person-schema corroboration. 6-month max.
5. **Change services.** If the market doesn't search our way, the lever is a different service mix — e.g. productized fixed-price "Stripe Connect Marketplace setup" with concrete search intent.

If D90 metrics land in the bands in Section 6, we double down. If we miss by >30%, we re-plan.

---

## Closing note

I built this so I have a number to come back to in 30, 60, and 90 days. Not a vibe.

Site is in better shape than 24 hours ago. 173 URLs return 200. Top-20 have schema + h1 + title + description + substantive content. We have a working conversion path, verified GBP, and a live IndexNow key.

What we don't have — and what bounds the 90-day ceiling — is **off-page corroboration** (citations, backlinks, reviews, PR) and **conversion measurement** (form-submit events, drip enrolment, lead-source attribution). Everything else is downstream.

Fastest path:
- Week 1: GSC + Bing + 10 citations + 4 case-study 404 fix + 3 schema fix + GSC token.
- Week 2: reviews from Northcrest + ProtectWithBri + HobbsPeak.
- Weeks 3–6: backlink track A (Clutch + GoodFirms + DesignRush) + first PR pitch + 4 blog posts.
- Weeks 7–12: backlink track B + LinkedIn tracks + lead-magnet wire-up + email drip + PR pitches 2 and 3.

Re-grade against Sections 6 and 7 on 2026-06-12, 2026-07-12, 2026-08-12.

— Bill
