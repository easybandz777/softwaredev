# 16 - Stack Overflow Blog

- **Target site:** https://stackoverflow.blog
- **Contact:** Contributor inquiries via stackoverflow.blog/contribute/ form; current editor Erin Yepis (verify masthead)
- **DR/DA:** 93
- **Topical fit:** Developer culture + technical deep-dives + community essays
- **Achievability:** Hard - high editorial bar; preference for established voices
- **Time-to-link:** 60-120 days
- **What we want:** Published essay or technical piece with byline + dofollow link
- **Value to readers:** Authentic "what it's like to be a solo founder shipping production code" essay

---

## DRAFT EMAIL

**To:** Submit via stackoverflow.blog/contribute/ form
**Subject (form's title field):**
- A: Pitch: One founder, 14 production systems, what stays in my head
- B: Pitch: The architectural decisions you don't make on Day 1
- C: Pitch: Building stack-from-scratch for trades and SMB customers

---

Hi Stack Overflow Blog editorial team,

Stack Overflow Blog's "stack from scratch" series, especially the Replit teardown earlier this year, is the rare developer publication that takes the architecture-and-people angle seriously. I want to pitch into that frame.

I am Bill Beltz, founder of QUANT LAB USA - a Macon, GA software shop. Solo founder plus a small contractor bench. Fourteen client engagements shipped in twelve months. Stack: TypeScript, Next.js, Postgres (Neon), Stripe, Vercel, with FastAPI for the AI sales platform and Python asyncio for live trading infra.

The Stack Overflow Blog essay I want to write:

**Title (working):** "The architectural decisions you don't make on Day 1"

**Premise:** Solo or small-team founders ship the system they have to ship to keep the lights on. Most architecture-content treats decisions as deliberate. In practice, half of the decisions are emergent - you used Postgres because the first client paid for it, you wrote TypeScript because that is the language you stop making errors in at 11 PM, you put state in Postgres because Redis adds an operational burden you cannot service on a Tuesday morning when a client texts.

**Concrete examples from our last 14 builds:**

- Why every QL build uses Postgres + Drizzle even when "a SQLite single-file" would have been smaller (because the moment a client wants concurrent access, we are migrating - and we have done that migration enough times to know it is not worth saving 4 days upfront)
- Why we put tenant isolation in Postgres RLS - not because we read a paper, but because a junior dev on the team would inevitably forget a `where tenant_id = ?` and we needed the DB to refuse the bad query (Clear Channel Broadcast case)
- Why Stripe webhook handling lives in its own micro-library now - because the second time I rewrote the dedupe logic for a different client, I extracted it

**Spec:** 1,800-2,200 words, 4-6 short code snippets, original to SO Blog.

Author bio: Bill Beltz is founder of QUANT LAB USA, a Macon, GA software shop. He has shipped 14 production builds in 12 months across fintech, healthcare, e-commerce, and trades. He writes about production architecture and SMB-tier cybersecurity at quantlabusa.dev/blog.

Bill Beltz
QUANT LAB USA - quantlabusa.dev
beltz@quantlabusa.dev | (770) 652-1282

---

## PRE-SEND CHECKLIST
- [ ] Confirm current editor name from masthead
- [ ] Reference a SO Blog piece from last 30 days
- [ ] Submit via contribute form
- [ ] Day +30 follow-up
- [ ] Day +60 final follow-up
