# 12 - The New Stack (Contributor Submission)

- **Target site:** https://thenewstack.io
- **Contact:** Contributor form at thenewstack.io/contributions/ - Heather Joslyn (eng), Joab Jackson (managing editor); review ~1 week
- **DR/DA:** 84
- **Topical fit:** Production architecture deep-dives; DevOps; platform engineering
- **Achievability:** Medium - strict no-AI policy; well-pitched technical case studies land
- **Time-to-link:** 30-60 days from acceptance to publish
- **What we want:** Published case study with author bio + dofollow link to quantlabusa.dev
- **Value to readers:** Solo founder running production trading infra teardown

---

## DRAFT SUBMISSION

**To:** Submit via thenewstack.io/contributions/ form
**Subject (for form's pitch summary field):**
- A: Solo prop trader runs 4 strategies live - architecture teardown
- B: Pitch: $54/month live trading orchestrator architecture
- C: How we built sub-50ms trading infra on Vercel + Neon

---

Hi New Stack editorial team,

I have followed Heather Joslyn's coverage of event-sourced architectures for two years - the Litmus reactive systems piece last quarter was the cleanest write-up I have seen on backpressure handling in production. I am pitching a complementary teardown drawn from a system we shipped that uses similar primitives for live trading.

I am Bill Beltz, founder of QUANT LAB USA - a Macon, GA software shop. We built Northstar Trading Desk's bot orchestrator in nine weeks. Stack:
- Python 3.12 asyncio orchestrator
- Multiple strategies running concurrently with isolation
- Postgres (Neon, $19/mo) as the event store
- Polygon market data
- WebSocket adapters for two broker APIs
- Next.js dashboard (Vercel, $35/mo) reading the event store directly

What is reportable for TNS readers:

- The backtest harness reuses the live orchestrator code by swapping a historical-data source for the WebSocket feed - same code paths, same risk-cap checks, same persistence model. Passing a backtest means real confidence the same code behaves the same way live.
- Hard risk caps live in the order path itself, not the UI - per-strategy notional limits, per-account daily-loss circuit breakers, global kill switch. Two near-incidents got caught in the first month.
- Sub-50ms signal-to-broker-acknowledgment latency on a $54/month combined infra spend. The architecture choices are most of the latency story, not the compute.
- Postgres event store as a single source of truth that the UI reads directly - no Redis cache, no Kafka, no separate event bus. The simplicity is the point.

Article spec: 1,800-2,200 words, architecture diagram (Mermaid), 6-8 code snippets (sanitized), original to TNS, no AI assistance.

Public case study: https://quantlabusa.dev/work/northstar-trading-desk

Happy to send a detailed outline or refine to a specific angle (e.g., "Postgres as event store, what we learned in 6 months").

Bill Beltz
QUANT LAB USA - quantlabusa.dev
beltz@quantlabusa.dev | (770) 652-1282

---

## PRE-SEND CHECKLIST
- [ ] Read last 3 TNS contributor posts in DevOps/platform-engineering category; reference one above
- [ ] Confirm Heather Joslyn or current editor name
- [ ] Submit via contributor form
- [ ] Day +14 follow-up if no response
- [ ] Day +45 final follow-up
