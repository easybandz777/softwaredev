# QUANT LAB USA — Master Polish + Add-On Plan

Synthesized from 10 parallel Opus audit agents on 2026-05-12. Site is live with 93 sitemap URLs / ~140 prerendered pages. Total audit corpus: ~500 KB across `audit-01` through `audit-10`.

## Health snapshot

| Area | Score | Headline |
|---|---|---|
| Live routes | 92/93 returning 200 | `/contact` is 404 |
| Meta tags | 1 title issue / 8 description issues / 0 duplicates | But: 90/93 missing `og:image` |
| Schema markup | 45/45 parse cleanly | 3 `@id` mismatch breaks Org graph |
| Content uniqueness | ~65% overlap on Stripe city pages | Bridgepointe verbatim on all 14 |
| Internal linking | 8 real orphans / 35 URLs unreachable from body | Footer has minimal structure |
| Mobile + a11y | 4 critical / 8 major / 13 minor | No mobile nav exists |
| Performance | Est. mobile Lighthouse ~68 | founder.jpg 404 on every homepage load |
| Code quality | 4 P0 / 10 P1 | Build is clean, no `any`, no raw `<img>` |
| Conversion paths | 7 of 8 funnels POST to nowhere | `/api/leads` doesn't exist |
| Content + feature gaps | 6/7 lead magnets unbuilt / 0/30 blog posts shipped | Email drip pipeline missing |

---

## PHASE 1 — Bleeders (do this week)

These are actively losing money or breaking trust. Each can be fixed in <2 hours.

### Conversion bleeders

1. **Build `/api/leads` endpoint** — Stripe Calculator currently captures emails into `console.log`. Mirror `/api/consultations/route.ts`: DB insert + Resend transactional email + Slack webhook. *Audit 09, 08.*
2. **Wire `<ConsultationCTA>` with `defaultService` + `defaultCity` props** so visitors from `/services/penetration-testing/atlanta-ga` land in the modal with both fields pre-selected. Add Pen-Test and Cybersecurity to `ConsultationModal.tsx:9-18` SERVICES dropdown (currently missing despite being live services). *Audit 09.*
3. **Build `/contact` page** — currently 404 yet linked from every city page CTA. Pull the contact form from `Contact.tsx`, give it its own route, add `<Metadata>`. *Audit 01, 02, 05.*
4. **Embed Cal.com or Calendly** in `<ConsultationModal>` success state + as secondary CTA on every page. Currently every "book a call" CTA dead-ends in a form. *Audit 09, 10.*
5. **Add `tel:+17706521282` links** anywhere the phone number renders (Navbar, Footer, all city pages, Stripe Calculator). Mobile users currently cannot dial. *Audit 07.*

### Trust + legal bleeders

6. **Pull the public "DRAFT — confirm with client" disclaimers from all 6 case studies** — they currently render with amber badges to humans + search engines. Either confirm with each client and remove the flag, OR `noindex` + remove from sitemap until confirmed. *Audit 01, 08.*
7. **Replace `REPLACE_WITH_VERIFICATION_TOKEN-AWAITING-USER-INPUT`** in `layout.tsx` with the real Google Search Console token. Submit `/sitemap.xml` in GSC immediately after. *Audit 01, 08.*

### Mobile UX bleeders

8. **Build the mobile hamburger nav** — `Navbar.tsx` currently hides everything behind `hidden md:flex`. Phone users on any non-home page see zero navigation. Use `<details>` for SEO-friendly no-JS drawer + add focus trap + ESC handler + `role="dialog"`. *Audit 07.*
9. **Bump `text-gray-500` → `text-gray-400`** site-wide (Footer copyright, services index helper, calculator helper). Current ~4.0:1 contrast fails WCAG AA. *Audit 07.*
10. **Make all tap targets ≥44px** — Footer social icons (currently 20px), Navbar links (~24px). Add `min-h-[44px]` and adequate padding. *Audit 07.*

### SEO bleeders

11. **Generate one default `og:image`** (1200×630) and reference in root `metadata.openGraph.images` — fixes 90 pages at once. *Audit 02.*
12. **Flip default Twitter card to `summary_large_image`** in `layout.tsx` — fixes 76 pages at once. *Audit 02.*
13. **Fix the schema `@id` mismatch**: standardize on `https://quantlabusa.dev/#organization` everywhere (currently 3 pages reference `#org`). *Audit 04, 08.*
14. **Add the `<meta viewport>` tag** to `layout.tsx` — currently missing. Lighthouse + WCAG hit. *Audit 07.*
15. **Replace `/founder.jpg` (404) with a real image** OR remove the reference from `Founder.tsx`. Every homepage load currently fires a 404. *Audit 06.*

**Phase 1 total effort estimate**: 1.5 days of focused work. **Conversion + trust impact**: massive — fixes the entire post-traffic funnel.

---

## PHASE 2 — Major refactors + content polish (this month)

These take 1-3 days each, materially improve SEO ceiling.

### Content polish

16. **Differentiate the 14 Stripe city pages** — replace the Bridgepointe Painting reference (verbatim on all 14, ~25-30% of word count) with city-specific case studies. Macon keeps Bridgepointe; the other 13 need composited/anonymized city-appropriate proofs. ~6 hours writing. *Audit 03.*
17. **Rewrite the 14 Custom-CRM city descriptions** — currently near-identical templated descriptions. Model the per-city differentiation already shown on the pentest city pages. *Audit 02.*
18. **Differentiate Austin TX vs SF CA pentest pages** — both currently "Series A SaaS SOC 2"; need divergent anecdotes. Same for Dallas TX vs Chicago IL (both internal AD). *Audit 03.*
19. **Add the 4 missing case studies to `sitemap.ts`**: `active-directory-pentest`, `contractor-estimating-proposal-engine`, `motorcycle-shop-ops-platform`, `multi-strategy-trading-system`. They exist + have inbound links but aren't in the sitemap. *Audit 05.*
20. **Link `/work/protectwithbri` to `/services/active-directory-pentest`** — ProtectWithBri IS the AD pentest case study, but it currently doesn't link there. Plus add `/work/j5-sales-os` → `/services/custom-crm-development` (J5 IS a CRM build). *Audit 05.*
21. **Trim long descriptions**: `/about` (226 → 157 chars), `/vs/salesforce` (185 → 155), `/vs/shopify` (182 → 155), `/vs/big-4-pentest` (179 → 155), `/work/wilder-recovery` (175 → 160), `/work` index (178 → 160). Bring `/privacy` (47) and `/terms` (49) up to 130+. *Audit 02.*

### Site architecture refactor

22. **Build a 4-column site-wide footer** linking every service hub, every industry, every vs page, every calculator, plus contact/legal. Single change drops 18 orphan URLs to depth-1 from every page. *Audit 05.*
23. **Extract city data to `/src/lib/seo/cities.ts`** — currently duplicated in 5+ files. Refactor all city pages to consume from one source of truth. Enables instant edits to city marketing across the entire site. *Audit 08.*
24. **Convert `/software-development-[city]/` pages to a single dynamic route at `/src/app/software-development/[city]/page.tsx`** (or keep the current URL pattern via a `[slug]` catch-all). Deletes 14 files (~2,900 lines). *Audit 08.*
25. **Build the 4-section Georgia cross-link mesh**: Macon ↔ Atlanta ↔ Augusta ↔ Savannah ↔ Columbus (currently no cross-links between sibling GA cities). *Audit 05.*

### Performance polish

26. **Compress `logo.png` 433KB → <50KB WebP** + reference via `<Image priority>` with explicit width/height. Used in Navbar + Hero — saves ~800-1500ms LCP on 4G. *Audit 06.*
27. **Fill in `next.config.ts`** with `images.formats: ["avif","webp"]`, `experimental.optimizePackageImports: ["lucide-react","framer-motion"]`, `compress: true`. *Audit 06.*
28. **Dynamic-import `HeroCanvas` with `ssr: false`** + add `prefers-reduced-motion` guard. Saves ~200-400ms TBT. *Audit 06, 07.*
29. **Move 28 client-side H1s to Server Components** — currently bots see empty H1s in initial HTML. *Audit 02.*

### Schema polish

30. **Add `ContactPoint` array** to the Organization schema (currently telephone + email are top-level but the formal ContactPoint object is missing). *Audit 04.*
31. **Fix the future-dated `dateModified: 2026-12-31` on Hobbspeak Article** — Google ignores future dates. *Audit 04.*
32. **Standardize brand name** to `"QUANT LAB USA"` everywhere (some inline references use "QuantLab Software Solutions" for the same `@id`). *Audit 04.*

**Phase 2 total effort estimate**: 2 weeks of solo focused work, or 4-5 days with 2 parallel Opus agents handling content rewrites + the architecture refactor in parallel. **SEO impact**: site moves from green-zone to high-performing across CWV + content + schema dimensions.

---

## PHASE 3 — Add-ons (this quarter, ordered by ROI)

These are NEW capabilities that compound the existing work.

### High-ROI add-ons (build in next 30 days)

33. **Email drip pipeline** — Vercel Cron + Resend audience-add + `lead_magnet_downloads` table + the 5-email sequence from `seo-deliverables/16-email-drip.md`. Without this every lead magnet is a black hole. *3 days. Audit 10.*
34. **Cal.com booking page at `/book`** + embed in modal success state + replace every "book a call" CTA. *2 hours, single biggest conversion lever site-wide. Audit 10.*
35. **`/pricing` page** with transparent ranges ($5K MVP / $40-120K production / $120-400K platform). Self-qualifies leads. Ranks for `[service] cost` queries. Not currently in any deliverable. *4 hours. Audit 10.*
36. **Build the 6 remaining lead magnets** from `seo-deliverables/15-lead-magnets.md`:
    - Build vs Buy Decision Guide
    - Web App Pentest Scoping Checklist
    - Custom CRM ROI Calculator
    - MITRE ATT&CK Self-Assessment Worksheet
    - MVP→Production Playbook
    - Trading Bot Development Checklist
    Each is a content-marketing flywheel entry point. *~2 days per magnet with an agent.*
37. **Install Sentry** — currently referenced in copy (about, faq, healthcare marketing) but not in `package.json`. Production runtime errors are invisible. *1 hour. Audit 10.*
38. **GA4 + Google Tag Manager** wired up properly with conversion events on lead form submit, calendar booking, calculator completion, phone click, downloads. *4 hours.*

### Content expansion (60-day horizon)

39. **30 blog posts** (outlines in `seo-deliverables/08-blog-topics.md`). Start with the 5 highest-ROI:
    - Build vs Buy Decision Framework (TOFU pillar)
    - How Much Does Custom Software Cost in 2026 (BOFU money post)
    - Atlanta Software Development Guide (local hub)
    - What Is Penetration Testing (TOFU pentest pillar)
    - Custom CRM vs Salesforce vs HubSpot (BOFU comparison)
40. **Expand city × service combos from 3 services to 8**: add `/services/web-app-pentest/[city]`, `/services/active-directory-pentest/[city]`, `/services/license-server/[city]`, `/services/subscription-billing/[city]`, `/services/network-pentest/[city]`. With the cities-lib refactor (item 23) this becomes ~5 dynamic routes × 14 cities = 70 new local-intent pages with templated effort. *4 hours of writing per route.*

### Trust + brand add-ons (90-day horizon)

41. **Founder/About page enhancement** with full Person schema for William Beltz — E-E-A-T signal for Google's algorithmic ranking. Add credentials, projects shipped, code samples linked. *4 hours.*
42. **Trust page at `/trust`** covering security practices, NDAs, IP ownership, insurance, data residency. Closes a top-five pre-sales objection on every engagement. *3 hours.*
43. **Newsletter signup** (Resend audience) on every blog post + lead magnet thank-you page. Funnel-bottom backstop for everyone who didn't convert. *2 hours.*

### Outreach automation (90-day horizon)

44. **Wire the LinkedIn outreach sequences** from `seo-deliverables/17-linkedin-outreach.md` into a real Sales Navigator workflow (or buy a tool like Heyreach / Expandi). Templates exist; execution doesn't. *Setup is 1 day; ongoing is daily.*
45. **Wire the review request sequence** from `seo-deliverables/18-review-request.md` to actually fire — email + SMS to past clients with the GBP review link. *Half-day to build the table + cron + Resend pipeline.*
46. **Wire the PR outreach** from `seo-deliverables/14-pr-outreach.md` — 35 outlets, prioritized angles. This is 30 emails over 30 days. *15 min each, batched.*

---

## Order of execution (single recommendation)

**Week 1 (P0):** Items 1-15 in any order. Fix the bleeders.
**Week 2-3 (refactor):** Items 22-24 (architecture cleanup), then 33-34 (drip + Cal.com).
**Week 4 (content):** Items 16-20 (city page differentiation), then 35-36 (pricing + first 2 magnets).
**Month 2:** Items 26-32 (perf + schema polish) + start blog posts 39 (top 5).
**Month 3:** Items 40-46 (city expansion + trust pages + outreach automation).

## What was scoped but not changed in this audit pass

This is a planning document. **Nothing was edited or deployed** in this pass — only audits + a unified plan. To execute Phase 1 immediately, spawn parallel agents per item or hand off to a single focused session with the relevant audit-XX-name.md open as context.

---

*All individual audit files (audit-01 through audit-10) are in this directory and contain the detailed findings + code-level fixes that this master plan summarizes.*
