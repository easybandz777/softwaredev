# Script 04 — SOC 2 Prep, Week by Week (12-Week Plan for a Small Company)

**Format:** Tutorial / explainer. Mix of talking-head and slide overlays. Light screen-share for showing controls dashboards and template documents.
**Target length:** 10–15 minutes
**Estimated production time (Bill solo):** 5–7 hours
**Primary keyword:** SOC 2 prep
**Secondary keywords:** SOC 2 readiness checklist, SOC 2 timeline, SOC 2 for small companies, SOC 2 Type II preparation

---

## [00:00 — Cold open, 0:00 to 0:30]

[On camera.]

If you have ten employees and a customer asking for SOC 2, here is the actual playbook to get audit-ready in twelve weeks without paying Vanta or Drata $25,000 a year for compliance theater. This is the version a fractional CTO would tell you over a beer, divided into twelve weekly buckets, with a "what should be done by Friday" deliverable for every one of them.

I have walked clients through this. It is not glamorous, and it is not the marketing pitch the compliance SaaS vendors give you. SOC 2 is a documentation exercise on top of security controls you should already have. The whole game is making the controls real and proving they exist.

## [00:30 — Two things you have to decide before week one, 0:30 to 1:30]

Two prerequisites before the plan starts.

**Decision one.** Type I or Type II?

Type I is a point-in-time snapshot. The auditor verifies that on the day of the audit, your controls exist as documented. Cheaper, faster, less valuable. About $8,000–$15,000 in auditor fees.

Type II is a 3- or 6- or 12-month observation window where the auditor verifies the controls operated consistently. This is what enterprise customers actually want to see. About $15,000–$35,000 in auditor fees plus the 3+ months of operating window.

Almost every enterprise procurement team is asking for Type II. Do Type I first only if you have a deal closing in 60 days and need a logo on a security page.

**Decision two.** Which Trust Service Criteria?

Five total: Security, Availability, Processing Integrity, Confidentiality, Privacy. **Security is mandatory.** The other four are optional. For a typical SaaS with no payments processing, Security + Availability + Confidentiality is the common bundle. Add Privacy if you handle EU customer data; add Processing Integrity if you handle financial transactions.

For this video I am assuming Security + Availability + Confidentiality, Type II, observation period of 3 months, for a 10–25 person SaaS company. Adjust accordingly.

## [01:30 — Week 1: Inventory and gap assessment, 1:30 to 2:30]

[Slide overlay: "Week 1 — Inventory and Gap Assessment"]

This week is reconnaissance. You cannot fix what you cannot see.

**Tasks:**

1. List every system that touches production data. SaaS tools, cloud services, internal apps, databases, file shares. Aim for a spreadsheet with columns: System, Owner, Data Sensitivity, MFA Enabled, SSO Enabled, Last Access Review.
2. List every employee and contractor with access to production. Their role, their access scope, the date their access was last reviewed.
3. List every third-party vendor with access to your customer data. Include their SOC 2 or equivalent attestation if available.
4. Pull the SOC 2 control list (the Trust Service Criteria with implementation guidance). The AICPA published 64 controls under the 2017 framework. Open a Google Sheet, list all of them, and mark each as "in place," "partially in place," or "missing." Brutal honesty.

**Friday deliverable:** A complete gap assessment showing every missing control. This is your project plan for the next 11 weeks.

## [02:30 — Week 2: Policy backbone, 2:30 to 3:30]

[Slide overlay: "Week 2 — Policy Backbone"]

SOC 2 wants documented policies. You need at minimum:

- Information Security Policy
- Access Control Policy
- Acceptable Use Policy
- Incident Response Policy
- Business Continuity / Disaster Recovery Policy
- Vendor Management Policy
- Change Management Policy
- Data Retention Policy
- Backup Policy
- Asset Management Policy
- Cryptography Policy
- Password / Authentication Policy

Twelve policies. Do not buy a template pack for $2,000. Use the SANS policy templates (free) or the OpenSCRM policy library (free) as starting points. Customize each one to reflect what you actually do — not what a template says you do. Auditors notice when policies are aspirational fiction.

**Friday deliverable:** All 12 policies drafted, signed by the CEO, dated, and stored in a designated policy folder accessible to all employees.

## [03:30 — Week 3: Identity and access, 3:30 to 4:30]

[Slide overlay: "Week 3 — Identity and Access"]

Access management is the controls family that catches the most audit findings. Get it right this week.

**Tasks:**

1. Enable SSO across every business-critical SaaS. Okta, Google Workspace, Azure AD — pick one and route everything through it. Standalone passwords on production systems are the most common audit fail.
2. Enable MFA on every account, no exceptions. Auditors want to see this enforced via policy, not optional.
3. Document a joiner / mover / leaver process. New employees get access via a documented checklist; role changes trigger an access review; departures revoke access within 24 hours and log the revocation.
4. Run an access review. Look at every production system, list who has access, and remove anyone who should not. This is the most boring and the most important task of the week.

**Friday deliverable:** SSO live, MFA enforced, joiner/mover/leaver runbook documented, completed access review log dated and saved.

## [04:30 — Week 4: Logging and monitoring, 4:30 to 5:30]

[Slide overlay: "Week 4 — Logging and Monitoring"]

You cannot prove a control operated continuously if you have no logs.

**Tasks:**

1. Centralize logs from every production system. CloudWatch, Datadog, Logtail, BetterStack — anything that ingests and retains logs for 12+ months.
2. Enable audit logging on critical SaaS (Google Workspace, your code repo, your cloud provider, your database). Every administrator action should generate a log entry.
3. Set up basic alerting for security-relevant events: failed login spikes, MFA bypass, new admin user, production access from unusual location, configuration changes.
4. Document log retention: what is logged, how long, who can access it, how it is protected from tampering.

**Friday deliverable:** Logs from every critical system flowing to a centralized store with 12-month retention, alert rules in place for security events, written retention policy in your policy folder.

## [05:30 — Week 5: Risk assessment, 5:30 to 6:15]

[Slide overlay: "Week 5 — Risk Assessment"]

SOC 2 requires a formal risk assessment. Not optional.

**Tasks:**

1. List the top 15–25 risks to your business. Data breach, ransomware, key personnel loss, vendor failure, regional disaster, supply chain attack, malicious insider.
2. For each risk, rate probability (1–5) and impact (1–5). Multiply to get a risk score.
3. For each risk above your threshold (typically 12+), document the mitigation control. Reference the policy or control that addresses it.
4. CEO signs the risk assessment as evidence of leadership awareness.

**Friday deliverable:** Risk register spreadsheet, signed by CEO, with mitigation mapping for every high-score risk.

## [06:15 — Week 6: Vendor management, 6:15 to 7:00]

[Slide overlay: "Week 6 — Vendor Management"]

Your customer's data lives across every vendor you use. SOC 2 makes you account for that.

**Tasks:**

1. List every vendor that touches customer data. AWS, Stripe, your email provider, your analytics provider, your error monitoring, your transactional email service.
2. For each, collect their most recent SOC 2 report, ISO 27001 certificate, or equivalent attestation. Store in a vendor folder.
3. For vendors without attestation, document a risk acceptance or plan to migrate.
4. Establish an annual vendor review cadence.

**Friday deliverable:** Vendor inventory with attestation evidence collected for every Tier 1 vendor, annual review calendar set.

## [07:00 — Week 7: Change management, 7:00 to 7:45]

[Slide overlay: "Week 7 — Change Management"]

Every production change should be reviewable.

**Tasks:**

1. Code changes go through pull request with at least one reviewer (yes, even at solo-founder companies — your co-founder, an investor, an advisor can be the reviewer). PR template should include a security checkbox.
2. Infrastructure changes go through infrastructure-as-code with version control. No manual cloud console edits without a documented exception.
3. Database schema changes go through a migration tool with rollback plan.
4. Document the change management runbook.

**Friday deliverable:** Branch protection rules enabled, PR template in place, change management runbook in policy folder.

## [07:45 — Week 8: Business continuity and incident response, 7:45 to 8:30]

[Slide overlay: "Week 8 — BC / DR and IR"]

**Tasks:**

1. Document recovery time objective (RTO) and recovery point objective (RPO) for each critical service.
2. Document the backup strategy and prove it works — run a test restore and document the result.
3. Document the incident response plan: detection, triage, containment, communication, post-mortem. Include contact information for all responders.
4. Run a tabletop exercise: hypothetical ransomware scenario, walk through who does what. Document the exercise.

**Friday deliverable:** BC/DR plan, IR plan, tested restore evidence, tabletop minutes — all dated and signed.

## [08:30 — Week 9: Security awareness training, 8:30 to 9:00]

[Slide overlay: "Week 9 — Security Awareness Training"]

Every employee completes annual security awareness training.

**Tasks:**

1. Pick a vendor. KnowBe4, Curricula, Hoxhunt, NINJIO. Or use a free curriculum from SANS and track completion in a spreadsheet.
2. Every employee completes a 30–60 minute training and acknowledges the policies they were given access to.
3. Set up a phishing simulation. Annual at minimum.

**Friday deliverable:** Training completion log, signed policy acknowledgments, phishing simulation scheduled.

## [09:00 — Week 10: Pre-audit dry run, 9:00 to 9:45]

[Slide overlay: "Week 10 — Pre-Audit Dry Run"]

This is the rehearsal week.

**Tasks:**

1. Walk through every control. For each, can you produce evidence (a log, a screenshot, a policy, a signed document) on demand? If not, fix.
2. Hire a "fractional compliance" consultant for a one-day pre-audit assessment if you have any uncertainty. $1,500–$3,000 well spent.
3. Pick your auditor. Talk to three firms. Ask for client references, sample reports, and engagement timeline.

**Friday deliverable:** Evidence collection complete, auditor selected, kickoff scheduled.

## [09:45 — Week 11: Auditor kickoff, 9:45 to 10:15]

[Slide overlay: "Week 11 — Auditor Kickoff"]

The auditor will set up an evidence request portal. You will spend two days uploading documents.

**Tasks:**

1. Upload all policies, the risk assessment, the vendor inventory, the access review log, the IR plan, BC/DR plan, training records.
2. Schedule walkthrough calls — the auditor will want to see live demonstrations of critical controls.
3. Designate one person (probably you) as the audit point of contact. All auditor questions route to them.

**Friday deliverable:** Initial evidence upload complete, walkthroughs scheduled.

## [10:15 — Week 12: Observation period kickoff, 10:15 to 10:45]

[Slide overlay: "Week 12 — Observation Period Begins"]

If you are doing Type II, the observation period now starts. For the next 3 (or 6, or 12) months, the controls must operate continuously. Auditor will sample evidence across the window.

**Tasks:**

1. Continue running every control as documented. Do not skip access reviews because "we just did one." Auditors look for the consistency, not the existence.
2. Schedule monthly "compliance hygiene" check-ins to refresh evidence (new joiner/leaver runbook entries, monthly access reviews, vendor reviews).
3. At the end of the observation period, the auditor produces the SOC 2 report. Typical timeline from observation-end to report-delivery: 4–8 weeks.

**Friday deliverable:** Observation period begins, recurring compliance calendar set up.

## [10:45 — What this costs, end-to-end, 10:45 to 11:30]

Real numbers for a 10–25 person company doing SOC 2 Type II without a compliance platform:

- **Auditor fees:** $18,000–$30,000 for a small-company Type II audit.
- **Fractional compliance consultant (optional but recommended):** $3,000–$8,000.
- **Internal labor:** approximately 100–150 hours across the 12-week prep window, mostly concentrated on the security lead. Plus 5–10 hours per other employee for policy acknowledgments and training.
- **Tools:** Logging stack (Datadog or BetterStack, $50–$300/month). SSO provider (Okta or Google Workspace, $10/user/month). Vendor management spreadsheet (free).
- **No compliance SaaS required.** Vanta and Drata are $15k–$35k per year and they automate evidence collection. If your team has 50+ people, they are worth it. Under 25 people, you do not need them.

**Total cash cost:** $25,000–$45,000 for the first audit. Annual recertification: $15,000–$25,000.

## [11:30 — Soft close, 11:30 to 12:30]

SOC 2 is not security. It is documentation of security. If you have decent security practices, SOC 2 is twelve weeks of writing things down and proving you do them. If you do not have decent security practices, SOC 2 will force you to build them.

Both outcomes are good. The mistake is treating SOC 2 as a procurement-unlock and outsourcing the actual security to the auditor. The auditor checks. They do not protect.

If you are mid-SOC 2 prep and the wheels are coming off, that is a consult I take. quantlabusa.dev/contact. I can either run the prep with you, or run an unbiased pre-audit assessment so you walk into the auditor's kickoff with no surprises. Cybersecurity service page at quantlabusa.dev/services/penetration-testing covers the technical-test side; SOC 2 prep is usually adjacent to a web app pentest engagement.

Thanks for watching. If this saved you a quarter of frantic policy-writing, drop a like.

[Cut.]

---

## YouTube description (200 words)

A practical 12-week SOC 2 Type II preparation plan for a 10–25 person SaaS company — without paying Vanta or Drata $25k a year for compliance theater. Each week has a specific deliverable and a Friday checkpoint.

Covered: the two prerequisite decisions (Type I vs Type II, which Trust Service Criteria to include), the 12 policies you have to draft, identity and access management requirements, logging and monitoring setup, the formal risk assessment, vendor management, change management, business continuity and incident response, security awareness training, pre-audit dry run, auditor kickoff, and the observation period.

Plus real cash numbers: auditor fees, optional fractional consulting, internal labor hours, tooling. Total cost typically $25k–$45k for the first Type II audit.

00:00 Cold open
00:30 Two prerequisite decisions
01:30 Week 1: Inventory & gap assessment
02:30 Week 2: Policy backbone
03:30 Week 3: Identity & access
04:30 Week 4: Logging & monitoring
05:30 Week 5: Risk assessment
06:15 Week 6: Vendor management
07:00 Week 7: Change management
07:45 Week 8: BC/DR & IR
08:30 Week 9: Training
09:00 Week 10: Pre-audit dry run
09:45 Week 11: Auditor kickoff
10:15 Week 12: Observation period
10:45 Real cost breakdown
11:30 Soft close

Pentest + compliance services: https://quantlabusa.dev/services/penetration-testing
Contact: https://quantlabusa.dev/contact

## Tags (10)

1. SOC 2 prep
2. SOC 2 readiness checklist
3. SOC 2 Type II preparation
4. SOC 2 timeline
5. SOC 2 for small companies
6. SOC 2 without Vanta
7. SOC 2 audit cost
8. SaaS compliance
9. QUANT LAB USA
10. cybersecurity for startups
