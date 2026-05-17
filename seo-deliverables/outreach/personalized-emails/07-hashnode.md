# 07 - Hashnode (Personal Blog)

- **Target site:** https://hashnode.com
- **Contact:** Self-publish; no editor
- **DR/DA:** 75 (Hashnode's main domain; subdomain blogs inherit some authority)
- **Topical fit:** Developer-focused blog platform; opens path to freeCodeCamp publication
- **Achievability:** Easy - 30 min profile + cross-post existing dev.to article with canonical
- **Time-to-link:** 0 days
- **What we want:** Profile at hashnode.com/@billbeltz + subdomain blog at billbeltz.hashnode.dev with 2-3 cross-posts using canonical URLs
- **Value to community:** Real production case studies

---

## STEP 1 - Profile + custom domain decision

- Username: billbeltz (claim)
- Blog domain: Choose ONE:
  - Option A: billbeltz.hashnode.dev (free, instant)
  - Option B: blog.quantlabusa.dev (custom domain via Hashnode; requires DNS work; better long-term)
- For backlink purposes: Option B is preferred long-term but Option A is fine for Week 1
- Bio: "Founder, QUANT LAB USA. Build software & run pentests for trades, SMB, fintech. Macon, GA."
- Profile link: https://quantlabusa.dev (the backlink)

---

## STEP 2 - First 2 cross-posts

**Post 1:** Cross-post the dev.to article (Postgres RLS multi-tenant) with canonical URL pointing to quantlabusa.dev/blog/postgres-rls-multi-tenant-saas

**Post 2:** Cross-post one of the existing QL blog posts about Stripe payment integration with canonical URL pointing to the QL blog version

(Posting BOTH dev.to AND Hashnode with canonicals pointing to QL means QL gets credit for the originals and Hashnode + dev.to provide distribution + backlinks.)

---

## STEP 3 - freeCodeCamp publication application (after 2 cross-posts live)

freeCodeCamp publishes a curated News section with strict editorial gates. Their writer onboarding asks for 2-3 published technical articles. Hashnode posts qualify.

**Application email:**

**To:** editorial@freecodecamp.org
**Subject:** Writer application - production case studies in TypeScript/Postgres

---

Hi freeCodeCamp editorial team,

I would like to apply to write for freeCodeCamp News.

Existing technical writing:
- https://billbeltz.hashnode.dev/postgres-rls-multi-tenant-saas
- https://billbeltz.hashnode.dev/stripe-webhook-idempotency
- https://quantlabusa.dev/blog (full archive)

I'm Bill Beltz, founder of QUANT LAB USA - a Macon, GA software shop. I would propose three article topics for freeCodeCamp:

1. "Building a Stripe webhook handler that survives retries, race conditions, and replay attacks" - 2,000 words, code-first, drawn from our open-source library (github.com/quantlabusa/stripe-webhook-idempotency-ts)

2. "Postgres row-level security for multi-tenant SaaS: a working example" - 2,200 words, with DDL, session pattern, and migration guide

3. "Service-area maps without Mapbox: pure SVG + CSS for trades-business websites" - 1,800 words, with CodePen, accessibility patterns, real LCP numbers

All three original to freeCodeCamp, no AI assistance, can deliver any within 3 weeks of acceptance.

Bill Beltz
beltz@quantlabusa.dev | (770) 652-1282

---

## PRE-PUBLISH CHECKLIST
- [ ] Profile claimed at hashnode.com/@billbeltz
- [ ] Subdomain blog live (Option A) or custom domain in flight (Option B)
- [ ] Posts 1 and 2 cross-posted with proper canonical tags
- [ ] Canonical URLs resolve correctly on quantlabusa.dev
- [ ] freeCodeCamp application sent ONLY after 2 cross-posts are live
- [ ] Log in tracking-tracker.md
