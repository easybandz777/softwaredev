# 15 - InfoQ (Daniel Bryant)

- **Target site:** https://www.infoq.com
- **Contact:** editors@infoq.com - Daniel Bryant (DevOps editor), Andrew Morgan (backend editor)
- **DR/DA:** 88
- **Topical fit:** Architecture, DevOps, platform engineering deep-dives
- **Achievability:** Medium - editorial gate; need architecture-original angle
- **Time-to-link:** 30-60 days from acceptance
- **What we want:** Published case study with author bio + dofollow link to quantlabusa.dev
- **Value to readers:** Real multi-tenant RLS architecture from a shipping system

---

## DRAFT EMAIL

**To:** editors@infoq.com - cc Daniel Bryant if his InfoQ profile shows direct email
**Subject:**
- A: Postgres RLS for multi-tenant SaaS at scale
- B: Pitch: 3-tenant SaaS with database-layer isolation - case study
- C: Multi-tenant SaaS architecture - Postgres RLS in production

---

Hi Daniel,

Your InfoQ piece on platform engineering at small companies in March was the most honest take I have read this year on the "we don't have a platform team" reality. I am pitching an architecture deep-dive that I think extends that conversation to the multi-tenant SaaS side.

I am Bill Beltz, founder of QUANT LAB USA - a Macon, GA software shop. We finished a 14-week build for a regional broadcaster (Clear Channel Broadcast Group) - three radio stations as separate tenants on one Next.js + Postgres platform, with row-level security enforced at the database layer, not in application code.

What is reportable for InfoQ readers:

- The decision to put tenant isolation in Postgres RLS instead of application middleware - what it cost us in query planning (12% on hot paths), what we got back in defensibility (a single bug in application code becomes a no-op because the DB refuses to return the row)
- The phased rollout pattern - station A in weeks 8-10 while B and C kept running on Excel - which is a real-world deployment story your readers do not get from vendor blogs
- Stripe invoicing integration mirroring insertion-order line items, where the RLS policies had to coexist with Stripe's webhook security model (separate superuser context for webhook ingestion)
- Hard numbers - month-end invoicing time went from four days to one, $25K/year in vendor licensing canceled, zero cross-tenant access attempts logged in 6 months of production

Article spec: 2,500-3,000 words, includes architecture diagram, the actual RLS policy DDL (sanitized), the phased migration timeline, what-we-would-change section. Original to InfoQ.

Public case study: https://quantlabusa.dev/work/clear-channel-broadcast

Bill Beltz
QUANT LAB USA - quantlabusa.dev
beltz@quantlabusa.dev | (770) 652-1282

---

## PRE-SEND CHECKLIST
- [ ] Verify Daniel Bryant is still active DevOps editor at InfoQ
- [ ] Reference his most recent piece in last 30 days
- [ ] Check InfoQ's last 30 days for any RLS-specific coverage
- [ ] Send to editors@infoq.com with Daniel cc'd if direct email available
- [ ] Log send in tracking-tracker.md
- [ ] Day +14 follow-up
- [ ] Day +45 final follow-up
