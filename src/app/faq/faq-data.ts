export interface FAQItem {
    q: string;
    a: string;
}

export interface FAQCategory {
    label: string;
    questions: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
    {
        label: "Engagement Structure",
        questions: [
            {
                q: "How does a typical software engagement work at QUANT LAB USA?",
                a: "We start with a free 30-minute discovery call to understand your problem, goals, and constraints. From there, we scope a Statement of Work with milestones, deliverables, and pricing. Most engagements run in two-week sprints with weekly demos so you see real progress, not status reports. You'll work directly with William Beltz, the founder, from kickoff to handoff. We deploy to staging early, iterate based on your feedback, and ship to production once you've signed off. After launch, we offer optional retainers for maintenance, feature work, and security monitoring.",
            },
            {
                q: "What does the discovery phase look like for a custom software project?",
                a: "Discovery at QUANT LAB USA typically takes one to two weeks. We map your current workflow, interview the people who'll actually use the software, audit any existing systems, and document data structures and integrations. You walk away with a fixed-scope proposal, technical architecture diagram, milestone-based timeline, and a written list of risks and assumptions. Discovery is paid but credited toward the build if you move forward. We do this work upfront so the build phase has zero surprises. No vague \"we'll figure it out as we go\" approach here.",
            },
            {
                q: "Do you charge fixed-price or time-and-materials?",
                a: "We offer both, but recommend fixed-price for greenfield builds where the scope is well-defined after discovery. Fixed-price gives you budget certainty and shifts execution risk to us. Time-and-materials makes sense for ongoing maintenance, exploratory work, or projects with shifting requirements. For pentests and security assessments, we always quote fixed-price tied to scope. We're transparent about which model fits your situation and will tell you directly if T&M would save you money over a fixed bid. No surprise invoices, no scope-creep billing games.",
            },
            {
                q: "Who do I work with day-to-day during the project?",
                a: "You work directly with William Beltz, the founder. No account managers, no junior project coordinators, no offshore handoff after the sales call. The person you talk to during discovery is the same person writing your code, configuring your infrastructure, and running your pentests. That's the entire point of choosing a founder-led firm. You get senior-level decisions on every line of code and direct accountability when something needs to change fast. For larger engagements we bring in trusted contractors, but William stays the lead and your single point of contact.",
            },
            {
                q: "Can you join our Slack, Teams, or Linear?",
                a: "Yes. QUANT LAB USA integrates into your existing communication and project tracking stack rather than forcing you into ours. We've worked inside client Slack workspaces, Microsoft Teams channels, Linear projects, Jira boards, ClickUp spaces, and Notion docs. We respond during business hours in your timezone and post async updates daily on active sprints. If you don't have a project management tool, we'll set up a shared Linear or GitHub Projects board for the engagement. The goal is to make working with us feel like working with an internal teammate, not an outside vendor.",
            },
            {
                q: "How do you handle scope changes mid-project?",
                a: "Scope changes get documented in a brief change request that captures what's changing, the impact on timeline and budget, and the rationale. Small tweaks within the original spirit of the work are absorbed without paperwork. Larger additions get a written quote you approve before we touch them. We never silently expand scope and then bill you for it. If a request would compromise quality, security, or timeline, we'll tell you and propose alternatives. Roughly 70% of our projects ship with no formal change orders because discovery is thorough enough to anticipate the edges.",
            },
        ],
    },
    {
        label: "Pricing & Timelines",
        questions: [
            {
                q: "What does a custom CRM cost to build?",
                a: "Custom CRM builds at QUANT LAB USA typically range from $18,000 to $65,000 depending on scope. A focused CRM with contact management, pipeline tracking, email integration, and one or two automations lands around $22,000. Add Stripe billing, customer portal, role-based permissions, and reporting dashboards and you're closer to $45,000. Enterprise builds with custom workflows, complex integrations, and licensing logic can exceed $65,000. We provide a fixed quote after discovery, not a vague hourly range. Hosting and infrastructure run $50 to $300 per month depending on traffic and database size. Payment plans available on builds over $20,000.",
            },
            {
                q: "What does a typical penetration test cost?",
                a: "Penetration testing at QUANT LAB USA starts at $4,500 for a focused web application assessment. A standard external network pentest runs $6,500 to $12,000. Internal network plus Active Directory engagements typically land between $10,000 and $22,000. Wireless assessments add $2,500 to $5,000. Full MITRE ATT&CK-mapped red team engagements are quoted custom based on objectives and duration. Every quote includes the executive summary report, technical findings with reproduction steps, remediation guidance, and one free retest within 90 days. We don't pad scope to hit revenue targets and we'll tell you if a vulnerability scan would serve you better than a full pentest.",
            },
            {
                q: "What's a typical timeline for a new custom web app?",
                a: "Most custom web applications ship to production in 8 to 16 weeks from kickoff. A focused MVP with authentication, a database, and a handful of core workflows can launch in 6 to 8 weeks. Mid-complexity SaaS products with billing, multi-tenant architecture, and admin tooling typically take 12 to 16 weeks. Larger platforms with complex integrations, compliance requirements, or migration from legacy systems run 20 to 36 weeks. We commit to dates in writing and hit them. If something puts a deadline at risk, you'll hear from us early enough to make tradeoff decisions, not a week before launch.",
            },
            {
                q: "Can you give me a price without a discovery call?",
                a: "Not for custom builds. Any developer quoting a custom CRM or SaaS application without understanding your data, users, and integrations is either guessing or planning to bill you in surprise change orders later. We'll publish ballpark ranges so you can budget, but a real fixed-price quote requires 30 to 90 minutes of conversation about what you actually need. For pentests, we can ballpark off scope details like IP count, application complexity, and assessment type without a call. Discovery calls are free, non-pushy, and end with a written summary even if you don't move forward.",
            },
            {
                q: "Do you offer payment plans or financing?",
                a: "Yes. For engagements over $20,000, we offer milestone-based payment plans split across the project lifecycle. Typical structure is 30% at kickoff, 30% at midpoint milestone, 30% at staging deployment, and 10% at production launch. For longer engagements we'll structure monthly payments instead. We don't take equity, we don't accept payment-on-completion-only terms, and we don't finance through third parties. Stripe handles all invoicing with ACH and card support. Government and enterprise clients on Net 30 or Net 45 are accommodated with a deposit. For pentests and assessments under $15,000, we typically require 50% upfront and 50% on delivery.",
            },
        ],
    },
    {
        label: "Tech & Stack",
        questions: [
            {
                q: "Why does QUANT LAB USA use Next.js for most builds?",
                a: "Next.js gives us the best blend of developer velocity, performance, and long-term maintainability for the kinds of applications our clients need. Server-side rendering and React Server Components ship faster pages with better SEO than traditional SPAs. The App Router lets us build complex dashboards and customer-facing marketing pages in the same codebase. Vercel and self-hosted Docker deployments both work cleanly. TypeScript catches entire classes of bugs before they hit production. When a client outgrows their build in three years and hires another firm, Next.js plus TypeScript is the easiest stack on the market to hand off.",
            },
            {
                q: "Do you work with our existing tech stack or only your preferred one?",
                a: "We work with what you have. QUANT LAB USA has shipped production work in Python, Django, Ruby on Rails, Laravel, Express, Go, and Java backends. Our default stack is Next.js, TypeScript, Node, PostgreSQL, and Docker because it's what we ship fastest and most reliably, but we don't force a rewrite when a perfectly good codebase already exists. If your team owns and maintains your current stack, we extend it. If you're starting fresh or your existing codebase is genuinely beyond repair, we'll recommend the right tools for the job and tell you why.",
            },
            {
                q: "Do you handle hosting, deployment, and DevOps?",
                a: "Yes. QUANT LAB USA handles infrastructure end-to-end if you want us to. We deploy to Vercel, AWS, DigitalOcean, Hetzner, Railway, Fly.io, and self-hosted bare metal depending on the workload, compliance needs, and budget. We containerize with Docker, automate CI/CD through GitHub Actions, configure monitoring with Sentry and Better Stack, and set up automated backups. For clients with existing DevOps teams, we hand over clean infrastructure-as-code (Terraform or Pulumi) and complete runbooks. We also offer ongoing infrastructure retainers starting at $750 per month for clients who want one of us on call when something goes wrong.",
            },
            {
                q: "How do you handle databases, migrations, and data modeling?",
                a: "PostgreSQL is our default for relational data. We use Prisma or Drizzle for type-safe queries and migrations, Redis for caching and rate limiting, and S3-compatible storage for files. Every schema change ships through versioned migrations checked into git, tested in staging, and rolled out with downtime-aware strategies. We design schemas with indexes, foreign keys, and constraints from day one so the database enforces correctness rather than relying purely on application logic. Backups run automatically, off-site, and we test restore procedures regularly. For analytics workloads we'll layer in ClickHouse or DuckDB when PostgreSQL alone isn't enough.",
            },
            {
                q: "Do you use AI coding tools like Claude Code or GitHub Copilot?",
                a: "Yes, and we're transparent about it. QUANT LAB USA uses Claude Code, GitHub Copilot, and Cursor as productivity tools for boilerplate, test scaffolding, and refactoring. Every line of code shipped to your project is reviewed, understood, and accepted by William Beltz. AI tools accelerate the boring parts of writing software so we can spend more time on architecture, security review, and edge cases. We do not pipe your proprietary code, credentials, or customer data into third-party AI services without your written consent. For clients with strict confidentiality requirements, we run local models or disable AI tooling entirely.",
            },
        ],
    },
    {
        label: "Security & IP",
        questions: [
            {
                q: "Who owns the code QUANT LAB USA writes for us?",
                a: "You own 100% of the code, schemas, designs, and documentation from the moment of final payment. The work-for-hire and IP assignment terms are spelled out in every contract before kickoff. We don't retain licensing rights, we don't reuse your proprietary code on other projects, and we don't ship your business logic as part of any \"framework\" of ours. Open-source dependencies remain under their original licenses (typically MIT or Apache 2.0). On request, we deliver a software bill of materials listing every dependency. You get the GitHub repository, infrastructure access, and full source on day one.",
            },
            {
                q: "Do you sign NDAs before discovery calls?",
                a: "Yes, mutual NDAs are standard practice and we'll sign yours or send ours, whichever is faster. QUANT LAB USA treats every prospect conversation as confidential by default, NDA or not. We've signed agreements with fintech startups, healthcare companies, defense contractors, and Fortune 500 vendors. If your legal team needs custom language, we'll review it within 48 hours. We also sign Business Associate Agreements for HIPAA-adjacent work and Data Processing Agreements for GDPR-relevant engagements. The goal is to remove legal friction so we can actually talk about your problem, not spend three weeks negotiating boilerplate.",
            },
            {
                q: "How do you protect our data and code during development?",
                a: "QUANT LAB USA enforces hardware-encrypted workstations, hardware security keys for all critical accounts, password manager-only credential handling, and separate development environments per client. Production credentials live in client-controlled secret stores (AWS Secrets Manager, Doppler, 1Password, Infisical) and we never paste them into chat tools or commit them to repositories. Source code lives in your GitHub or GitLab organization, not ours. Access is revoked the day a project closes. We log every action in audit-friendly tools. For security-sensitive engagements we'll work entirely inside your environment via VPN or jump host.",
            },
            {
                q: "Does QUANT LAB USA carry errors and omissions insurance?",
                a: "Yes. QUANT LAB USA carries professional liability (errors and omissions) insurance and general liability coverage through a US-based commercial carrier. Certificates of insurance are available on request, typically delivered within one business day. Coverage limits meet or exceed the requirements most enterprise procurement teams specify. We also carry cyber liability insurance covering data breach response and third-party claims, which is rare among small dev shops and standard among ours. If your procurement team needs us added as additional insured, that's a straightforward adjustment our broker handles directly.",
            },
            {
                q: "Where do production credentials and secrets live?",
                a: "Production credentials never live on developer machines, never in plain text, and never in git history. QUANT LAB USA uses one of four approved secret management approaches: AWS Secrets Manager or Parameter Store, HashiCorp Vault, Doppler, or 1Password Secrets Automation. The choice depends on your existing infrastructure and compliance posture. Application secrets are injected at runtime through environment variables or sidecar processes. Database credentials rotate on a documented schedule. SSH keys use FIDO2 hardware security keys for any production access. If you're starting from scratch, we'll set up a clean secret management story as part of the build.",
            },
        ],
    },
    {
        label: "Pentest Specifics",
        questions: [
            {
                q: "What's your penetration testing methodology?",
                a: "QUANT LAB USA follows a phased methodology rooted in OWASP, PTES, NIST SP 800-115, and OSSTMM with MITRE ATT&CK mapping for every finding. The phases are reconnaissance, threat modeling, vulnerability identification, exploitation, post-exploitation, and reporting. We use manual testing as the foundation and treat automated scanners as a complement, never a substitute. Findings are prioritized by exploitability and business impact, not just CVSS score. We test the actual attack paths a motivated adversary would follow, including chained exploits across multiple low-severity issues. Engagements end with a debrief call walking your team through every finding and the remediation strategy.",
            },
            {
                q: "Do you map findings to MITRE ATT&CK?",
                a: "Yes. Every technical finding in a QUANT LAB USA pentest report is mapped to the relevant MITRE ATT&CK tactics and techniques, with specific technique IDs (T-numbers) cited. This lets your security team align detections, tabletop exercises, and SOC playbooks against the same framework your tooling already speaks. For Active Directory engagements we map to ATT&CK for Enterprise. For wireless and IoT work we use the relevant ATT&CK matrices including ICS where appropriate. The mapping isn't decorative. We use it to recommend specific Sigma rules, Sysmon configurations, and EDR detections that would have caught us mid-attack.",
            },
            {
                q: "What deliverables do we get after a pentest?",
                a: "You receive a written executive summary suitable for boards and non-technical stakeholders, a full technical report with reproduction steps and screenshots for every finding, a remediation roadmap prioritized by risk, MITRE ATT&CK mapping for findings, and a detection engineering appendix with recommended Sigma and Sysmon rules. Raw tool output, proof-of-concept code, and a complete attack chain narrative are included. Reports are delivered in PDF plus an editable Markdown source. We also offer a live debrief call where your engineering and security teams can ask questions. One free retest within 90 days verifies your fixes worked.",
            },
            {
                q: "Do you do retests after remediation?",
                a: "Yes, one free retest is included with every pentest engagement at QUANT LAB USA. The retest happens within 90 days of the original report delivery and validates that the fixes you shipped actually resolve the underlying issues, not just the surface symptoms. We retest findings rated medium severity and higher by default, with lower-severity findings available on request. Retest results are delivered as an addendum to the original report, clearly marking which findings are closed, partially mitigated, or still exploitable. Additional retests beyond the first are quoted at a discount off the original engagement rate.",
            },
            {
                q: "Do you do black-box, gray-box, or white-box testing?",
                a: "All three, and we'll recommend the right approach for your goals. Black-box testing simulates an external attacker with no prior knowledge and is best for measuring perimeter resilience. Gray-box testing assumes attacker has limited credentials or partial documentation, which is the most realistic threat model for most businesses and our most-requested approach. White-box testing gives us full source code, architecture diagrams, and admin credentials, which finds the most issues per dollar and is ideal before a major launch or audit. We commonly combine approaches in a single engagement, starting black-box and pivoting to gray-box partway through.",
            },
        ],
    },
    {
        label: "Differentiation",
        questions: [
            {
                q: "How is QUANT LAB USA different from a traditional agency?",
                a: "Traditional agencies sell you to a sales team, hand you off to an account manager, and route execution through layers of project managers, junior developers, and offshore subcontractors. QUANT LAB USA is founder-led. William Beltz handles your discovery call, writes your code, runs your pentests, and answers your Slack messages. There's no markup for middle management, no information lost in handoffs, and no learning curve every time staff turns over. The tradeoff is that we take on fewer concurrent clients than a 40-person agency. For projects where senior judgment matters more than throughput, we win this comparison every time.",
            },
            {
                q: "How are you different from a freelance developer?",
                a: "Most freelance developers are excellent at one slice of the stack and improvise the rest. QUANT LAB USA operates as a full firm: licensed, insured, contracted on US-jurisdiction terms, and capable of handling the full lifecycle from discovery through production support and security testing. We carry errors and omissions insurance and cyber liability coverage that most freelancers don't. We sign enterprise-grade contracts, MSAs, and BAAs. We've shipped production systems handling real revenue and real customer data. If your project needs more than a single deliverable from a single skill set, a firm scales where a freelancer plateaus.",
            },
            {
                q: "How are you different from offshore development shops?",
                a: "Offshore shops compete on hourly rate and lose on senior judgment, timezone alignment, communication friction, security posture, and code quality at the edges. QUANT LAB USA is fully US-based, founder-led, and operates in your timezone with same-day response times during business hours. We don't subcontract overseas, we don't rotate junior developers through your project, and our contracts are governed by US law with US courts. Total cost of ownership on offshore builds typically equals or exceeds ours once you factor in rework, security incidents, and the operational tax of managing remote subcontractors. If price is your only criterion, we are not the right fit.",
            },
            {
                q: "Why founder-led instead of building a bigger team?",
                a: "QUANT LAB USA is founder-led because the work demands senior judgment on every decision, not just the sales call. Software architecture, security testing, and incident response are areas where seniority compounds. A 40-person agency can ship volume, but ours ships craft. William Beltz personally writes code, runs assessments, and signs off on every deliverable. The model has a built-in throughput ceiling, which is the point. It forces us to take on clients we're genuinely the right fit for. Clients who need a 20-person team faster than we can grow into one are clients we refer elsewhere with a clear conscience.",
            },
            {
                q: "What kind of project would QUANT LAB USA say no to?",
                a: "We turn down projects that require regulated industries we don't specialize in (medical devices, aviation safety systems), projects with timelines that demand cutting corners on security or testing, and projects where the founder isn't bought in on what they're building. We also pass on clients who treat developers as order-takers rather than partners. We've turned down work because the contract terms were predatory, because the project felt unethical, or because we genuinely weren't the right team. Saying no early is a kindness to everyone. Our referral network includes firms we trust to handle what we won't.",
            },
        ],
    },
];
