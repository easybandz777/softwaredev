# Templates - Reusable Outreach Email Templates

Six reusable templates with 3 subject-line variants each for A/B testing. Use these as the master copies; personalize per-target in `../personalized-emails/{slug}.md`.

## Template files

| File | Use case | Time per pitch | Hit rate |
|------|----------|----------------|----------|
| `guest-post-pitch.md` | Pitching a guest article to a tech publication | 30-45 min | 1 in 5-8 cold; 1 in 2-3 personalized |
| `broken-link.md` | Notifying about a broken outbound link + offering replacement | 15-25 min | 1 in 3-5 |
| `podcast-appearance.md` | Pitching yourself as a podcast guest | 30-45 min | 1 in 5-10 cold |
| `expert-quote-source.md` | Responding to journalist queries (HARO/Qwoted/Featured.com) | 10-20 min | 15-30% publication rate |
| `roundup-inclusion.md` | Asking to be added to a "Best X in Y" roundup | 15-20 min | 1 in 4-5 |
| `resource-page-suggestion.md` | Suggesting your resource be added to a resource page | 15-30 min | 1 in 5-7 |

## A/B testing protocol

Each template has 3 subject-line variants (A, B, C). Rotate across batches:
- Sends 1-7 in a batch: Variant A
- Sends 8-14: Variant B
- Sends 15-21: Variant C

Log subject-line variant used in `tracking-tracker.md` as a column. After ~30 sends per template, review which variant had the highest open / reply rate and standardize the winner.

## Hard rules across all templates

- Never use [bracketed] placeholders in a sent email - run a placeholder check before sending
- Subject lines under 55 characters
- Send Tuesday-Thursday, 9-11 AM ET (best inbox-attention window)
- Maximum 5 cold pitches per day (Gmail rate flags above 10-15/day on a new account)
- Log every send within 60 minutes of sending
- Never lie, never offer money, never violate Google guidelines

## Follow-up cadences

See `../follow-up-sequences.md` for the 3-touch and 5-touch follow-up sequences. Each template specifies its preferred cadence (most use 3-touch).

## Personalization is the unlock

Every template's effectiveness drops 5-10x if you skip personalization. The opening sentence MUST demonstrate you read the recipient's recent work. If you cannot honestly do that for a given target, skip it.

## When to use which template

- **A high-DR publication with named editor and a topic match:** guest-post-pitch.md
- **A blog post / resource page with a broken outbound link:** broken-link.md
- **A podcast with a host you respect and a topic angle:** podcast-appearance.md
- **An inbound journalist query that fits your expertise:** expert-quote-source.md
- **An existing "Best X in Y" roundup post:** roundup-inclusion.md
- **A general resource library / chamber resource page:** resource-page-suggestion.md
