# 39 - Console (David Mytton dev tools newsletter)

- **Target site:** https://console.dev
- **Contact:** david@console.dev
- **DR/DA:** 62
- **Topical fit:** Weekly newsletter that curates 5-7 new developer tools; covers OSS launches
- **Achievability:** Easy if OSS repo is live and quality; David replies fast
- **Time-to-link:** 14-30 days from submission to inclusion
- **What we want:** Inclusion in a Console weekly issue + dofollow link from console.dev archive page
- **Value to David: Curated OSS tool that solves a real Stripe-developer problem

---

## PREREQUISITE - OSS repo (rank 4)

Do NOT submit to Console until the Stripe webhook idempotency repo is live with 7+ days of commits, a README, tests, and CI badge.

---

## DRAFT EMAIL

**To:** david@console.dev
**Subject:**
- A: Submission: Stripe webhook idempotency TypeScript lib
- B: New OSS lib for Console - stripe-webhook-idempotency-ts
- C: For Console: 5 KB Stripe webhook idempotency lib

---

Hi David,

Submitting an OSS dev tool for Console's consideration.

**Tool:** stripe-webhook-idempotency-ts
**Repo:** github.com/quantlabusa/stripe-webhook-idempotency-ts
**Category:** Developer infrastructure / payments

**One-paragraph description:**
A 5 KB, zero-dependency TypeScript library for handling Stripe webhook idempotency. Pluggable storage (Postgres, Redis, Vercel KV examples in /examples). Handles Stripe's event.id deduplication, 5-day retry-window expiry, and replay-attack protection. Works in Node 18+, Bun, Deno, and edge runtimes.

**Why I built it:**
I have shipped Stripe webhook handlers for about a dozen client builds in the last 18 months and kept rewriting the same dedupe-and-replay logic. After losing 2 hours to a production race condition that should not have happened, I extracted it. The third client build that needed it justified the extraction.

**What makes it Console-worthy:**
- Production-tested in 3 different client deployments before going public
- The "Stripe replayed an event after 4d 23h" edge case test that bit us in production is in the suite
- Storage adapters for Postgres + Drizzle, Redis + ioredis, and Vercel KV in examples folder
- Tests cover 18 scenarios
- MIT license, zero deps, ships its own .d.ts

I am Bill Beltz, founder of QUANT LAB USA - a Macon, GA software shop. quantlabusa.dev

Happy to answer any questions about the design choices or send a 60-second screencap of the integration.

Bill

---

## PRE-SEND CHECKLIST
- [ ] Repo URL resolves
- [ ] README has install command in the first 50 lines
- [ ] CI badge is green on master
- [ ] Repo has at least 7 days of commits
- [ ] License is MIT
- [ ] Send Tuesday morning
- [ ] Day +7 follow-up if no response
- [ ] Day +14 final follow-up
