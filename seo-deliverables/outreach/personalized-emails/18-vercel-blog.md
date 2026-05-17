# 18 - Vercel Blog (Customer Story)

- **Target site:** https://vercel.com/blog
- **Contact:** Vercel marketing partnerships - reach via vercel.com/contact/customers, customers@vercel.com, or DM Lee Robinson (VP Product) on X
- **DR/DA:** 87
- **Topical fit:** Next.js / Vercel production case studies; love sub-50ms / edge-runtime stories
- **Achievability:** Medium - they actively publish customer stories from small founders
- **Time-to-link:** 60-90 days from pitch acceptance
- **What we want:** Customer story feature with link to quantlabusa.dev + case-study URL
- **Value to Vercel:** Real production story from a non-enterprise customer that runs sub-50ms trading infra on Vercel

---

## DRAFT EMAIL

**To:** customers@vercel.com or partnerships contact form at vercel.com/contact
**Subject:**
- A: Customer story pitch: solo founder, $35/mo Vercel, live trading infra
- B: Customer story: sub-50ms trading orchestrator on Vercel + Neon
- C: Customer story: 14-build dev shop running everything on Vercel

---

Hi Vercel customer team,

I have been watching Vercel's customer stories for two years - the recent Cal.com and Loops features were both well-told. I want to pitch into that catalog.

I am Bill Beltz, founder of QUANT LAB USA - a Macon, GA software shop. I run 14 different production Next.js apps on Vercel for clients across the Southeast. Stack is consistent across builds: Next.js App Router, TypeScript, Tailwind, Postgres (Neon), Vercel Postgres on some builds, Vercel KV for the Stripe webhook idempotency caches, Server Actions for the form-heavy trades-business builds.

Three angles I think could be a customer story:

**Angle A - "One founder, 14 production apps, $400/mo Vercel spend":**
The economics of running 14 client apps on Vercel Pro, breakdown of which builds use what features, and why we ditched custom infra (we tried fly.io and Cloudflare Workers for two builds and migrated back).

**Angle B - "Sub-50ms trading orchestrator on Vercel":**
The Northstar Trading Desk build - Python asyncio orchestrator hosted on a tiny VPS but the Next.js dashboard + API on Vercel. Server Actions push trades and the architecture handles the latency budget. Different from the typical CRUD case study.

**Angle C - "Trades-business websites on Vercel":**
Northcrest Fence, Bridgepointe Painting, HobbsPeak - five different SMB customer-facing sites with Vercel ISR, edge caching, contact-form to Resend, and Stripe Checkout. The story is "Vercel is the right tool for small-business sites, not just SaaS dashboards."

I can offer:
- Phone or async interview (30-45 min)
- Source code repo access for one of the projects (NDA OK)
- Screenshots and architecture diagrams
- Lighthouse scores from production
- Real Vercel bill numbers

Public case studies:
- https://quantlabusa.dev/work/northstar-trading-desk
- https://quantlabusa.dev/work/northcrest-fence
- https://quantlabusa.dev/work/clear-channel-broadcast

Bill Beltz
QUANT LAB USA - quantlabusa.dev
beltz@quantlabusa.dev | (770) 652-1282

---

## PRE-SEND CHECKLIST
- [ ] Verify customers@vercel.com is still the right intake
- [ ] Reference a recent Vercel customer story
- [ ] Confirm Vercel Pro subscription is on the QL account (some customer stories require Pro+)
- [ ] Day +30 follow-up
- [ ] Day +60 final follow-up; DM Lee Robinson on X if no response
