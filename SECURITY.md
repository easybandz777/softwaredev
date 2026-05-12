# Security Policy

QUANT LAB USA INC takes the security of our software, infrastructure, and customer data seriously. This document describes how to report a vulnerability and what you can expect from us in return.

## Supported Versions

This repository powers a single production deployment at [quantlabusa.dev](https://quantlabusa.dev). Only the latest `master` commit deployed to production is considered supported; older commits and preview deployments are not maintained.

| Version            | Supported          |
| ------------------ | ------------------ |
| `master` (current) | Yes                |
| Preview branches   | Best effort        |
| Historical commits | No                 |

## Reporting a Vulnerability

If you believe you have found a security vulnerability in this codebase, the production site, or any QUANT LAB-operated service, please report it privately. Do not file a public GitHub issue, do not disclose on social media, and do not test against production beyond what is necessary to confirm the issue exists.

### Where to report

- **Email:** <security@quantlabusa.dev>
- **PGP:** Available on request. Email a brief, non-sensitive notice first and we will provide a public key for follow-up.

### What to include

To help us triage quickly, please include:

1. A description of the vulnerability and the impact you believe it has.
2. Step-by-step reproduction instructions.
3. The affected URL, endpoint, parameter, or file path.
4. Any proof-of-concept payloads, screenshots, or logs.
5. Your name or handle for credit (optional — we are happy to credit you in a fix or to keep the report confidential).

### What we ask of you

- Give us a reasonable amount of time to investigate and remediate before any public disclosure.
- Do not exploit the issue beyond what is needed to demonstrate impact.
- Do not access, modify, or exfiltrate data that does not belong to you.
- Do not run automated denial-of-service or brute-force tools against production.
- Comply with all applicable U.S. and Georgia state laws while researching.

Good-faith research conducted within the bounds above will not result in legal action from QUANT LAB USA INC.

## Our Response Commitment

| Step                          | Target                              |
| ----------------------------- | ----------------------------------- |
| Initial acknowledgement       | Within **48 hours** of report       |
| Triage and severity rating    | Within **5 business days**          |
| Status update cadence         | At least every **7 days**           |
| Public disclosure window      | Within **90 days** of confirmation  |

If a fix requires longer than 90 days, we will coordinate a disclosure timeline with the reporter rather than delay silently.

## Scope

In scope:

- The production deployment at `quantlabusa.dev` and any subdomain operated by QUANT LAB USA INC.
- Code in this repository (`easybandz777/softwaredev`).
- API routes under `/api/*`.
- Admin tooling under `/admin/*`.

Out of scope:

- Third-party services we integrate with (report those to the vendor directly).
- Social engineering of QUANT LAB staff or customers.
- Physical attacks against any office or facility.
- Best-practice findings that lack a concrete exploit (e.g. missing security headers without a demonstrated impact).
- Findings in preview / staging deployments that are not reproducible against production.

## Disclosure Philosophy

We believe in coordinated disclosure. After a vulnerability is fixed and deployed:

1. We will publish a brief advisory describing the issue and the fix.
2. With the reporter's consent, we will credit them in the advisory.
3. Severe issues affecting customer data will be disclosed to affected customers per applicable breach-notification law.

## Contact

- Primary: <security@quantlabusa.dev>
- Founder: Bill Beltz, <beltz@quantlabusa.dev>
- Mailing: QUANT LAB USA INC, Macon, GA, United States

Thank you for helping keep QUANT LAB and our customers safe.
