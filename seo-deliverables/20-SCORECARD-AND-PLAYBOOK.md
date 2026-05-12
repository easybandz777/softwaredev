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

These slugs are **not** in `src/lib/case-studies.ts`. The data file ships 10 case studies (northcrest-fence, hobbspeak, bridgepointe-painting, protectwithbri, j5-sales-os, wilder-recovery, multi-strategy-trading-system, motorcycle-shop-ops-platform, contractor-estimating-proposal-engine, active-directory-pentest). The 4 broken slugs come from a hardcoded array in `src/app/sitemap.ts:158–169` that drifted away from the case-studies array.

The `/work/[slug]/page.tsx` route correctly calls `getCaseStudyBySlug()`, finds nothing for the 4 stale slugs, and returns `notFound()`. The `/work` index iterates `case-studies.ts` directly, so the 4 ghost slugs never render as links — they only appear as orphan sitemap entries.

### Investigation steps (do not fix in this scorecard)

1. Confirm the bug: open `src/app/sitemap.ts:158–169` and verify the hardcoded `caseStudySlugs` array contains the 4 ghost slugs in addition to the 6+ real ones.
2. Confirm the source of truth: open `src/lib/case-studies.ts` and confirm the 4 ghost slugs are **not** present in the exported `caseStudies` array.
3. Decide direction: either (a) **remove the 4 ghost slugs from the sitemap array** and rebuild `sitemap.ts` to iterate `case-studies.ts` directly (preferred — eliminates the drift mechanism), or (b) **add 4 real case-study entries** to `case-studies.ts` so the sitemap claims match reality.
4. If choosing (a): delete the hardcoded list, import `caseStudies` from `@/lib/case-studies`, map to the sitemap shape inline. Then re-deploy and re-run the crawl audit to confirm 177/177 OK.
5. If choosing (b): research/draft 4 new case studies, add entries to `case-studies.ts` with full content, deploy. (Higher effort; not recommended unless the 4 slugs map to real client engagements.)

**Recommended path: option (a).** It's a 10-minute change. It eliminates the drift mechanism permanently. Sitemap goes to 173 entries, all 200 OK.

---

## 4. Next 30 days — P0 priorities

These are the immediate, can't-skip items. Each is owner-Bill, none requires a hire, all are doable inside the next four weeks.

1. **Verify and submit to Google Search Console.** Replace any remaining `REPLACE_WITH_VERIFICATION_TOKEN` in `src/app/layout.tsx`. Add property at `https://search.google.com/search-console`. Submit `sitemap.xml`. Use URL Inspection to request indexing on the top 25 pages: homepage, all 5 city pages (Macon, Atlanta, Augusta, Charlotte, Columbus), top 8 services (custom-crm, penetration-testing, stripe-integration, web-app-pentest, custom-business-software, mobile-app-development, ai-integration-services, saas-platform-development), top 5 industries (fintech, healthcare, e-commerce, saas, real-estate), the pillar `/blog/custom-crm-development-guide`, the 4 highest-intent `/vs/*` (salesforce, hubspot, toptal, big-4-pentest), and `/pricing` + `/work` + `/about`. (`sitemap-ping-report.md` §4.)
2. **Verify and submit to Bing Webmaster Tools.** Import directly from Search Console once that's verified. Submit `sitemap.xml`. Submit the same top 25 URLs to the URL Submission tool (10k/day allowance). This also feeds Yahoo and DuckDuckGo. (`sitemap-ping-report.md` §4.)
3. **Fix the 4 case-study 404s.** Per Section 3, option (a): refactor `src/app/sitemap.ts` to iterate `case-studies.ts` directly. 10-minute commit, removes 4 sitemap errors, restores 100% sitemap health.
4. **Fix the 3 schema critical issues from `audit-04-schema-validation.md`.** Change `#org` to `#organization` in 3 Service blocks (pentest-atlanta-ga, sd-atlanta-ga, vs/salesforce). Standardize all inline `provider`/`publisher` names from "QuantLab Software Solutions" to "QUANT LAB USA" so the entity graph stitches cleanly. Re-validate.
5. **Submit the 10 quick-win citations.** From `13-citations-directories.md` §1.1–1.10: Bing Places, Apple Business Connect, LinkedIn Company Page (if not already up), Facebook Business, Yelp, BBB, Crunchbase, Yellow Pages, Foursquare, Wellfound. ~15 minutes each, all free. Use the canonical NAP block from `13-citations-directories.md` line 13. Avg DA 87 added in two weeks.
6. **Request reviews from 3 priority clients.** Per `18-review-request.md` cadence: Northcrest Fence (SMS), ProtectWithBri (personal text), HobbsPeak (SMS). Use the templated copy. Drive to `https://g.page/r/CbkSyF5E2JFtEBM/review`. Goal: 3 5-star Google reviews live by week 4. This unlocks Clutch, GoodFirms, and DesignRush which all require client review proof.
7. **Triage Lighthouse-flagged issues from `audit-06-performance.md`.** Two changes carry 80% of the perf delta: (a) gate the `HeroCanvas` per-frame gradient compute behind `prefers-reduced-motion: no-preference` and reduce node-edge count from 13/19 to 8/12; (b) move the Navbar logo to the optimized 18KB png with explicit `width`/`height` and `priority` only on the homepage. Aim for mobile perf 80+, LCP <2.5 s on homepage.
8. **Wire GA4 + GSC verification confirmation.** If `NEXT_PUBLIC_GA_MEASUREMENT_ID` isn't set in Vercel prod env, set it. Add a `<meta name="google-site-verification">` for GSC if not already routed. (Per `audit-10-gap-plan.md` Section B row "Google Analytics 4" and "Google Search Console".)

Hard exit criterion for day 30: all 177 (or 173 post-cleanup) URLs in `Coverage → Indexed` in GSC, at least 5 Google reviews live, at least 8 of the 10 quick-win citations submitted, Lighthouse mobile ≥80 on homepage.

---

## 5. Next 60–90 days — P1 priorities

These are the items that move the needle on traffic, leads, and rank. Each is a multi-week effort.

1. **Backlink outreach against `04-backlink-opportunities.md`.** The 42-target list is sorted by DA × ease. Run two parallel tracks:
   - **Track A (low-effort, high-DA):** Clutch.co listing with 3 client reviews seeded, GoodFirms profile, DesignRush. Each requires the 3 Google reviews from §4 item 6 to be live first.
   - **Track B (medium-effort guest posts):** Pitch dev.to a flagship technical post (the J5 Sales OS architecture teardown or the Wilder Recovery role-based auth pattern), Hashnode (same), one HARO/Qwoted reply per weekday using the queries that match our services (CRM, pentest, Stripe, Next.js). Goal: 8 acquired backlinks across DA 50+ properties by day 90.
2. **PR outreach against `14-pr-outreach.md` Top 5.** Hypepotamus (Atlanta startup angle), Indie Hackers podcast (bootstrapped solo-to-team), Dark Reading commentary (MITRE for SMB pentest), Atlanta Inno / Atlanta Business Chronicle (J5 AI sales OS feature), The New Stack (Wilder Recovery teardown). Pitch one per week, in that order. The Hypepotamus pitch is the closest to a guaranteed land — Atlanta-local angle + named clients + bootstrapped story.
3. **LinkedIn outreach sequences against `17-linkedin-outreach.md`.** Stand up Sales Navigator ($99/mo), pick 2 of the 6 ICP tracks (Track 2: Pre-Series-A B2B SaaS founder, Track 5: Quant prop trader CTO — these match our highest-margin work), send 50–75 connection requests per week per track. Target floor: 1–3 qualified conversations per week per track at week 4 onward.
4. **Email drip activation per `16-email-drip.md`.** The 5-email sequence (Day 1, 3, 5, 8, 14) is written but not wired. Two requirements: a queue/scheduler (cron or Vercel Cron + a `drip_state` table), and at least one functioning lead magnet to trigger from. The Build vs Buy decision guide PDF is the recommended first magnet — gate it behind `/api/leads` with `source=lead-magnet:build-vs-buy`, then enroll into the drip on submit.
5. **E-E-A-T expansion.** Three concrete moves: (a) write an expanded `/about` page with founder narrative — years building, languages, biggest failure, signature engagement style (per `audit-10-gap-plan.md` Section C "About page enhancement"); (b) add author bylines + bios to every blog post and the pillar guide; (c) publish 2 dev.to or Hashnode posts in my name within the first 60 days so Google has off-site author corroboration for the Person schema. The point of E-E-A-T is corroboration, not declaration.
6. **Content cadence: 2 blog posts per week minimum.** The 30-post backlog from `08-blog-topics.md` is the source list. Sequence: 50/50 TOFU/BOFU, prioritize the 10 we already drafted in Wave 2 (now live) and write the next 8 against the BOFU end of the funnel (any "best X company in Atlanta", "X cost in 2026", or "how to choose Y" posts). At 2/week, we land 24+ new posts in the 90-day window. Each post must contextually link to ≥3 service or city pages.
7. **Fix the conversion-path gaps from `audit-09-conversion-paths.md`.** Three items: (a) pre-fill the modal with `service`/`city`/`source` query params on every CTA (the props exist as of `d1aff61` — wire them through every Link); (b) add a primary "Book a call" CTA pointing to a `/book` route with Cal.com embedded (don't make Cal.com a secondary post-submit surprise — it's a higher-intent action); (c) fire a `gtag('event', 'form_submit', {form_id, source})` on `/api/leads` success so we can measure CR by funnel in GA4.

Hard exit criterion for day 90: 30+ ranking keywords in Search Console, 8+ acquired backlinks, 1 landed PR placement, 5+ Google reviews, 1 functioning lead magnet flow with email drip enrolled, 2 blog posts per week shipping consistently for the prior 6 weeks.

---

## 6. 90-day expected outcomes — honest projection

This is what I actually expect, not what I'd put on a pitch deck.

### Day 30
- Indexing: all 173 healthy URLs in Search Console `Indexed`. The 4 case-study 404s either fixed or removed.
- Ranking keywords: 5–15 keywords in the top 100 in Search Console. Most will be long-tail, low-volume queries — "next.js development atlanta", "stripe integration cost", "custom crm small business macon", "mitre attack framework explained" type queries.
- Inbound organic leads: **2–4** from `/api/consultations` submits. Most will come from direct + GBP + the niche long-tails landing on the case studies and pricing page. Organic search will not yet be the dominant lead source.
- Reviews: 3–5 Google reviews live.
- Citations: 8–10 of the 10 quick-win citations submitted.

### Day 60
- Ranking keywords: 30–60 in the top 100. A handful (3–10) start poking into the top 30 — most likely the city × service combos that have low competitor density, e.g. "penetration testing macon ga", "custom software macon", "custom crm savannah ga".
- Organic leads: **4–8 / month** if the first PR placement lands and one of the LinkedIn tracks hits its floor target.
- GBP impressions: 200–500 / month. Phone-call clicks: 5–15.
- Backlinks: 3–5 acquired (Clutch, GoodFirms, dev.to, Hashnode, plus one chamber-of-commerce listing).
- Blog cadence: 16+ posts shipped from the 30-post backlog.

### Day 90
- Ranking keywords: 60–120 in the top 100. Several long-tail commercial keywords in the top 10 — realistically: "custom crm development macon", "penetration testing macon ga", "stripe integration consultant atlanta", "next.js development company georgia", "custom software development savannah". The five money keywords from `00-MASTER-INDEX.md` (`custom software development atlanta`, `atlanta penetration testing services`, `hire next.js developer`, `custom crm development atlanta`, `saas development company atlanta`) will likely sit on pages 2–5 unless we land 5+ DA-40+ backlinks pointing at the right anchors.
- Organic leads: **8–15 / month** combined organic + GBP + direct.
- Reviews: 7–12 Google reviews. At least one Clutch profile with 3+ reviews live.
- Backlinks: 8–15 acquired.
- PR: 1–2 landed placements (Hypepotamus or Atlanta Inno most likely; Dark Reading and Indie Hackers podcast are higher-effort, longer-cycle).

What I do **not** expect at 90 days: top-3 for any of the 5 money keywords. Those are 6–12 month plays competing against agencies with 10+ years of domain authority. We will compete on the long-tail, on the local + vertical combo, and on the founder-led trust signal — not on raw rank for unmodified commercial heads.

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
- **Free, mandatory:** Search Console, Bing Webmaster Tools, GBP Insights, GA4. Plausible if I want a lighter privacy-respecting alternative for marketing-only traffic.
- **Free, recommended:** Moz Free (DA + 10 backlinks/day check), Ahrefs Webmaster Tools (free for verified site owners — gives backlink and rank data without paying the $99/mo).
- **Paid worth it:** LinkedIn Sales Navigator ($99/mo, required for §5 item 3), Resend (already in use, $20/mo at our volume).
- **Paid, defer:** Ahrefs Lite ($129/mo) and SEMrush ($139/mo) are not yet justified — Ahrefs Webmaster Tools free tier covers us until day 90.

### Quarterly check (day 90 review)
Pull: backlink count delta, DA delta, citation count, GSC ranking-keyword count, total organic leads, top 10 ranking pages by clicks, top 10 highest-CTR queries. Compare against this scorecard.

---

## 8. When to fire this strategy

I am not going to pretend the strategy can't fail. Here are the honest indicators that something isn't working.

### 90-day kill criteria — any one of these triggers a re-plan

- **Fewer than 50 ranking keywords in Search Console by day 90.** That would mean either Googlebot isn't crawling (technical fault — check `Coverage` + `Crawl Stats`), or our pages aren't competitive even on long-tails (content depth fault).
- **Fewer than 3 organic inbound leads per month at day 90.** At our keyword distribution, 3 leads/month is the floor I'd expect from pure direct + GBP alone — so failing this means organic isn't contributing and we have a conversion-path problem (forms broken? no calendar embed? wrong audience?) or a fundamental targeting problem.
- **Zero rich snippets earned at day 90.** With FAQPage, BreadcrumbList, Article, Service, and WebApplication schema shipping on the relevant pages, at least a few queries should be earning FAQ accordions or breadcrumb trails in SERP. If zero, the schema is being rejected (validation issue not caught by our tests) or the content isn't matching the intent expected by the schema type.
- **GSC `Coverage → Indexed` plateaus below 60% of submitted URLs.** Hard ceiling — Google is actively deciding our content isn't worth indexing. Either we're publishing thin/duplicate content or we have a canonicalization fault.
- **Zero acquired backlinks from the 42-target list.** If we executed §5 items 1–2 and landed zero in 90 days, either the outreach is hitting the wrong angle or the underlying offer isn't compelling.

### If we hit any kill criterion: pivot moves

1. **Pivot to paid first** before changing strategy. Google Ads on the 5 money keywords. Budget $1.5–3K/month. If paid clicks convert at >2% to inbound leads, the page is fine — Google just hasn't trusted us yet, and time will fix it. If paid clicks don't convert either, the offer/page is broken.
2. **Add paid placements** in the few directories that drive real B2B leads — sponsored Clutch listing, sponsored DesignRush placement, BetaList for any product launches.
3. **Re-evaluate ICP.** If the long-tails aren't ranking and outreach isn't converting, the issue may be that we're chasing markets that don't have inbound search demand — pivot toward verticals where word-of-mouth + outbound is the dominant acquisition channel (legal SaaS, regulated finance, healthcare ops).
4. **Consider a domain-authority sponsor / partner deal.** Quietly arrange to author content for an established Atlanta dev-shop brand or an industry publication in exchange for byline and Person-schema corroboration. Time-bounded, 6 months max.
5. **As a last resort, change services.** If the foundation is solid and the market simply doesn't search our way, the lever isn't more SEO — it's a different service mix. Examples: shift away from "custom software" toward a specific productized service ("Stripe Connect Marketplace setup, fixed-price"), where the search intent is more concrete and the buyer journey is shorter.

The kill criteria exist to keep me honest. If we hit day 90 and the metrics are inside the projection bands in Section 6, we double down. If we miss them by more than 30%, we re-plan.

---

## Closing note

I built this scorecard because I want a number I can come back to in 30, 60, and 90 days. Not a vibe.

The site is in better shape today than it was 24 hours ago — that much is observable. 173 URLs return 200. 100% of the top-20 have schema, h1, title, description, and substantive content. We have a usable conversion path. We have a verified GBP. We have an IndexNow key live.

What we don't have, and what matters most over the next 90 days, is **off-page corroboration** (citations, backlinks, reviews, PR) and **conversion measurement** (form-submit events, drip enrolment, lead-source attribution). Those are the only two columns that can plausibly move the needle from "foundation built" to "leads coming in." Everything else is downstream.

The fastest path is:
- Week 1: submit GSC + Bing + 10 citations + fix 4 case-study 404s + fix 3 schema critical issues + replace GSC token.
- Week 2: request reviews from Northcrest + ProtectWithBri + HobbsPeak.
- Weeks 3–6: backlink track A (Clutch + GoodFirms + DesignRush) + first PR pitch + first 4 blog posts of the cadence.
- Weeks 7–12: backlink track B + LinkedIn tracks + lead-magnet wire-up + email-drip activation + second/third PR pitch.

I'll re-open this file on 2026-06-12 (day 30), 2026-07-12 (day 60), and 2026-08-12 (day 90) and grade against Section 6 and Section 7.

— Bill
