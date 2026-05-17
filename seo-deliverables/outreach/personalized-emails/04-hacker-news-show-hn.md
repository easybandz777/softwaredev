# 04 - Hacker News (Show HN)

- **Target site:** https://news.ycombinator.com
- **Contact:** Self-submit; no editor; the community votes
- **DR/DA:** 90 (huge dofollow potential from a well-received Show HN; also link from any blog that picks it up)
- **Topical fit:** Dev community; works for open-source release of a small, sharp utility
- **Achievability:** Easy to submit; hard to land on front page - hit rate ~10% for first-time posters
- **Time-to-link:** 1-3 days if it gains traction; if not, no link beyond the HN submission page itself (which still indexes)
- **What we want:** Front-page Show HN that drives 50-300+ inbound links from secondary blogs and newsletters
- **Value to community:** A small, well-documented OSS utility solving a real problem

---

## STEP 1 - Ship the OSS repo first

The Stripe webhook idempotency micro-library is the most fundable Show HN candidate from QL's stack:
- Repo target: github.com/quantlabusa/stripe-webhook-idempotency-ts
- README must include: install command, 30-line minimal example, why-it-exists section, what-it-does-NOT-do section
- License: MIT
- Include a `CONTRIBUTING.md` and an issue template
- Pre-stage 3-5 tests that pass in CI

DO NOT submit to HN until the repo is at least 7 days old and has at least one commit per day. HN's algorithm and reviewers detect "submission day = first commit day" patterns and downvote.

---

## STEP 2 - Write the Show HN post

**Submission title (choose one):**
- A: Show HN: Stripe webhook idempotency in TypeScript (5 KB, zero deps)
- B: Show HN: Tiny TypeScript lib for Stripe webhook idempotency
- C: Show HN: I open-sourced our Stripe webhook idempotency utility

(HN convention: "Show HN:" prefix, no editorialization, no marketing language.)

**Submission URL:** github.com/quantlabusa/stripe-webhook-idempotency-ts

**First comment from Bill (post immediately after submitting - HN convention is to drop context as a top comment from the submitter):**

---

Hi HN. Bill from QUANT LAB USA - we build SaaS and payment systems for small businesses across the Southeast US. We have shipped Stripe webhook handlers for about a dozen client builds in the last 18 months and kept rewriting the same dedupe-and-replay logic in slightly different shapes. I finally extracted it.

What this is:
- 5 KB, zero runtime dependencies
- TypeScript-first, ships its own .d.ts
- Pluggable storage (in-memory for tests, Postgres/Redis adapters in /examples)
- Handles Stripe's event.id deduplication, 5-day retry-window expiry, and replay-attack protection
- Works in Node 18+, Bun, Deno, edge runtimes (with KV adapter)

What this is NOT:
- A full Stripe SDK replacement (use stripe-node)
- An ORM (storage is your choice)
- Opinionated about your framework

Why I built it: I lost 2 hours debugging a webhook race condition on a Northcrest Fence client build in 2025 and decided I would never do that again on someone else's dime. The third time I rewrote the dedupe logic for a different client I extracted it.

Examples folder has Postgres + Drizzle, Redis + ioredis, and Vercel KV adapters. Tests cover 18 scenarios including the "Stripe replayed an event after 4d 23h" edge case that bit us in production.

PRs welcome on Bun/Deno test runners and on additional storage adapters. Happy to walk through the design choices.

---

## STEP 3 - Submission timing

- Day to submit: Tuesday or Wednesday
- Time: 7:30 AM ET (catches morning EU + US-West start traffic; misses peak EU bedtime)
- Do NOT submit on Mon or Fri (HN traffic patterns favor mid-week)
- Do NOT ask anyone to upvote (HN bans for this)
- Have 2-3 substantive comments pre-written for likely questions: "why not use Stripe's own idempotency keys" / "how does this compare to Inngest" / "what's the schema"

---

## STEP 4 - Amplify via owned channels (after HN submission)

Once the Show HN is live, regardless of front-page status:
- Tweet the OSS launch with HN link (drives some upvotes from owned network)
- Post to LinkedIn personal + company page
- Cross-post to dev.to and Hashnode with canonical to the GitHub repo
- Submit to JavaScript Weekly and Node Weekly (peter@cooperpress.com) - their editorial respects a well-cared-for HN post
- Submit to Console newsletter (david@console.dev)

---

## STEP 5 - Track secondary backlinks

The real value of a Show HN is the 30-90-day tail of blogs, newsletters, "best of HN" posts, and Stack Overflow answers that reference the repo. Track these in `tracking-tracker.md` under entry 04 - log every backlink to github.com/quantlabusa/stripe-webhook-idempotency-ts that appears in the next 90 days.

---

## PRE-SUBMIT CHECKLIST
- [ ] Repo is public, has README, has CONTRIBUTING, has tests, has CI badge
- [ ] Repo is at least 7 days old with regular commits (no day-of-submission commit spam)
- [ ] HN account (billbeltz or quantlabusa) is at least 30 days old with 2-3 comments on other posts
- [ ] First-comment text is ready to paste immediately after submission
- [ ] 2-3 likely-question responses pre-drafted
- [ ] Tuesday or Wednesday 7:30 AM ET
- [ ] Do not upvote ring. Do not ask others to. The penalty is permanent.
- [ ] Log submission in tracking-tracker.md within 60 minutes
- [ ] Set 7-day, 30-day, 90-day reminders to harvest secondary backlinks
