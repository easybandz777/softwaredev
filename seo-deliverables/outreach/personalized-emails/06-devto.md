# 06 - dev.to (Founder Profile + First Article)

- **Target site:** https://dev.to
- **Contact:** Self-publish; no editor
- **DR/DA:** 79 (Forem-powered, dofollow on profile + post links)
- **Topical fit:** Developer community; massive tag-based discovery
- **Achievability:** Easy - 15 min profile + 90 min first article
- **Time-to-link:** 0 days
- **What we want:** Profile at dev.to/billbeltz + flagship article with canonical URL pointing to quantlabusa.dev/blog version
- **Value to community:** Production case study from a real shop

---

## STEP 1 - Profile setup

- Username: billbeltz (claim first; if taken, use billbeltzga)
- Display name: Bill Beltz
- Bio: "Founder, QUANT LAB USA. Build trades & SMB software. Pentest at the SMB tier. Macon, GA. quantlabusa.dev"
- Website URL: https://quantlabusa.dev (the backlink)
- Twitter: @quantlabusa
- GitHub: quantlabusa
- Profile cover image: Use quantlabusa.dev/og-image.png

---

## STEP 2 - First article

**Title:** Multi-tenant SaaS with Postgres row-level security: what we learned shipping it for a regional broadcaster

**Canonical URL:** https://quantlabusa.dev/blog/postgres-rls-multi-tenant-saas (publish on QL blog FIRST, then dev.to with canonical pointing back)

**Tags (pick 4):** `#postgres` `#nextjs` `#saas` `#architecture`

**Cover image:** Same as quantlabusa.dev blog post cover

**Body outline (1,400-1,800 words):**
1. Hook: Clear Channel Broadcast Group - three radio stations, three tenants, one Next.js platform, two months from kickoff to first tenant live, zero cross-tenant access attempts in 6 months of production
2. The decision: tenant isolation in Postgres RLS instead of in application middleware - what changed our minds
3. The schema: `tenant_id` column on every domain table; RLS policy DDL (sanitized)
4. The session: `SET app.current_tenant_id = ?` at the start of every request, dropped at the end
5. The cost: ~12% query planner overhead on hot paths; mitigation via partial indexes
6. The win: a single tenant_id leak in application code becomes a no-op because the DB refuses to return the row
7. The Stripe integration: webhook handlers run as a superuser context with a separate tenant resolution layer
8. The migration path: how to add RLS to an existing single-tenant app (we did this on a separate build)
9. What we would change

**End matter:** "More case studies from the QL team at quantlabusa.dev/work. We are hiring junior devs in the Macon-Atlanta corridor - email beltz@quantlabusa.dev."

---

## STEP 3 - Engagement on Day 1

- Reply to every substantive comment within 4 hours
- Cross-share to Twitter, LinkedIn personal
- Submit to #devcommunity weekly thread on the platform

---

## PRE-PUBLISH CHECKLIST
- [ ] Canonical version is LIVE on quantlabusa.dev/blog/postgres-rls-multi-tenant-saas FIRST
- [ ] Profile complete with website URL and dofollow status verified
- [ ] Article uses canonical tag pointing to QL blog version
- [ ] Cover image renders correctly in dev.to preview
- [ ] Tags are tight (4 max; over-tagging hurts ranking)
- [ ] Calendar block set for Day-1 comment replies
- [ ] Log in tracking-tracker.md
