# 17 - GitHub Blog (Contributor Pitch)

- **Target site:** https://github.blog
- **Contact:** github.blog/contribute/ - editorial team
- **DR/DA:** 96
- **Topical fit:** Developer tools, OSS, GitHub Actions, security
- **Achievability:** Hard - bar is very high; preference for OSS authors and GitHub-product-adjacent stories
- **Time-to-link:** 90-180 days
- **What we want:** Published guest post + dofollow link to quantlabusa.dev
- **Value to readers:** OSS story tied to a real production library

---

## PREREQUISITE - OSS library + community traction

Do NOT pitch GitHub Blog until:
1. The Stripe webhook idempotency OSS library (rank 4) has been live 60+ days
2. It has 50+ stars
3. Has at least 1 outside contributor PR merged
4. Has been mentioned in at least 2 external blog posts or newsletters

GitHub Blog is allergic to "I just released this" pitches. They publish stories about libraries that have proven traction.

---

## DRAFT EMAIL (send only after prereqs are met)

**To:** Submit via github.blog/contribute/ form
**Subject (form's title field):**
- A: How a tiny OSS lib helped a 14-person dev shop ship faster
- B: Pitch: Stripe webhook idempotency in TypeScript - design story
- C: Pitch: Lessons from open-sourcing a payment idempotency lib

---

Hi GitHub Blog editorial team,

GitHub Blog's developer-experience deep-dives, especially the recent piece on GitHub Actions security at small teams, are the kind of writing I want to contribute to.

I am Bill Beltz, founder of QUANT LAB USA - a Macon, GA software shop. Last quarter I open-sourced a small TypeScript library that solves Stripe webhook idempotency:

- Repo: github.com/quantlabusa/stripe-webhook-idempotency-ts
- Stars: [INSERT CURRENT COUNT]
- Outside contributors: [INSERT COUNT]
- Referenced in: [LIST EXTERNAL BLOGS]
- Production users: at least 6 known deploys (3 client projects, 3 community-reported)

The GitHub Blog story I want to write:

**Working title:** "Why we open-sourced a 5 KB Stripe webhook lib (and what we learned from contributors)"

**Premise:** Most "we open-sourced X" posts are launch announcements. This is a 90-day retrospective:
- The decision to extract the library from 4 different client projects
- The design choices we made and the 3 we got wrong (and a contributor PR-corrected)
- The Stripe edge cases the test suite covers (the "replayed after 4d 23h" case that bit us in production)
- The CI workflow we use (GitHub Actions, Bun for tests, multi-Node-version matrix)
- The contributor experience - issue templates, the README, the CONTRIBUTING.md - and what worked vs what we changed
- The maintenance reality for a solo founder

Spec: 1,800-2,400 words, 6-10 code snippets, screenshots of the GitHub Actions runs, original to GitHub Blog.

Author bio: Bill Beltz is founder of QUANT LAB USA, a Macon, GA custom software firm. He maintains stripe-webhook-idempotency-ts and writes about production architecture at quantlabusa.dev/blog.

Bill Beltz
QUANT LAB USA - quantlabusa.dev
beltz@quantlabusa.dev | (770) 652-1282

---

## PRE-SEND CHECKLIST
- [ ] OSS lib has been live 60+ days
- [ ] 50+ stars, 1+ external contributor PR merged
- [ ] At least 2 external mentions of the library
- [ ] Star count, contributor count, external blog list in the email is current
- [ ] Reference a recent GitHub Blog post in opening paragraph
- [ ] Submit via contribute form
- [ ] Day +45 follow-up
- [ ] Day +90 final follow-up
