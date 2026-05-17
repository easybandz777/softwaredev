# 36 - Software Engineering Daily (Sean Falconer)

- **Target site:** https://softwareengineeringdaily.com
- **Contact:** softwareengineeringdaily.com contact form; pitch specific hosts by topic - Sean Falconer (data/AI), Lee Atchison (architecture), Kostas Pardalis (data infra)
- **DR/DA:** 73
- **Topical fit:** Architecture, DevOps, AI engineering, multi-tenant systems
- **Achievability:** Medium - SE Daily takes pitches but prefers concrete production stories
- **Time-to-link:** 30-90 days
- **What we want:** Podcast appearance + episode page dofollow link to quantlabusa.dev
- **Value to listeners:** Real multi-tenant RLS architecture story

---

## DRAFT EMAIL

**To:** Submit via softwareengineeringdaily.com contact form; specify "for Sean Falconer" in the topic
**Subject:**
- A: Multi-tenant SaaS architecture for trades SMBs
- B: Pitch for Sean: Postgres RLS in production - SMB-tier case
- C: Production teardown - 3-tenant SaaS on $54/mo infra

---

Hi Sean,

Your Falconer episode with the Snowflake architect on row-level security was the most useful 50 minutes of podcast I listened to last quarter. I want to pitch a technical interview that extends that conversation to the SMB tier.

I am Bill Beltz, founder of QUANT LAB USA - a Macon, GA custom software shop. We just finished a 14-week multi-tenant SaaS build for Clear Channel Broadcast Group - three radio stations as separate tenants on one Next.js platform with Postgres row-level security enforced at the database layer.

The SE Daily conversation I want to have:

- Why we put tenant isolation in Postgres RLS instead of application middleware - what it cost in query planning (12% on hot paths), what we got back in defensibility (a tenant_id leak in app code becomes a no-op because the DB refuses the bad query)
- The phased rollout pattern - station A in weeks 8-10 while B and C kept running on Excel, then B in 11-12, C in 13-14 - the real-world deployment story
- Stripe Connect for crew payouts on a different multi-tenant build (Coastal Yacht Services) - similar pattern, different industry
- The "AppSec-first" angle - every developer here is also a pentester, and the threat model drives the database-layer isolation choice

50-60 minute conversation, your call. Async if it works better. I will send sample architecture diagrams ahead of time.

Public case studies:
- https://quantlabusa.dev/work/clear-channel-broadcast
- https://quantlabusa.dev/work/coastal-yacht-services

Bill Beltz
QUANT LAB USA - quantlabusa.dev
beltz@quantlabusa.dev | (770) 652-1282

---

## PRE-SEND CHECKLIST
- [ ] Confirm Sean Falconer is still active on the SE Daily roster
- [ ] Check his last 3 episodes to verify topic fit
- [ ] Submit via contact form, specify "for Sean Falconer"
- [ ] Day +14 follow-up
- [ ] Day +45 final follow-up
