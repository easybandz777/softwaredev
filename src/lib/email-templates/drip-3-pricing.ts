import { DripTemplate, TemplateContext, escapeHtml, firstName, wrapHtml } from "./shared";

export function buildDrip3(ctx: TemplateContext): DripTemplate {
    const fn = firstName(ctx.name);

    const text = `Hi ${fn},

No pitch in this one. Just a framework.

When I look at a software project — mine or someone else's — I run it through three failure modes before I commit. If it can't survive all three, it doesn't get built.

1. The Bus Test. If the lead engineer gets hit by a bus tomorrow, can someone else ship the next release in 30 days? If no, your code is a hostage situation. The fix: written docs in the repo, no clever one-liners, boring tech (Postgres > whatever's trendy), and a deploy that runs from a single command.

2. The Stripe Test. If your payment processor changes their API or pricing tomorrow, how much of your stack breaks? Most teams have Stripe wired into 40 different places. The fix: one payments module, one interface, everything else calls it. Same logic for any third-party — auth, email, search.

3. The 3am Test. If something breaks at 3am, can the on-call person diagnose it without you? If your logs say "Error: undefined" and your monitoring is whatever Heroku gave you for free, you fail this test. The fix: structured logs, real observability (we use Datadog / Sentry depending on budget), and runbooks for the top 5 incidents.

Most apps I see fail at least one of these. The most common is #2 — too much coupling to third-party APIs.

Run your own stack through this. Tell me what you find. Or don't — either way, you've got the framework.

— William

P.S. If this is useful, forward it to one engineer or founder who'd benefit. That's the whole ask today.

--
Unsubscribe: ${ctx.unsubscribeUrl}
`;

    const bodyHtml = `
<p>Hi ${escapeHtml(fn)},</p>
<p>No pitch in this one. Just a framework.</p>
<p>When I look at a software project &mdash; mine or someone else&#39;s &mdash; I run it through three failure modes before I commit. If it can&#39;t survive all three, it doesn&#39;t get built.</p>
<p><strong>1. The Bus Test.</strong> If the lead engineer gets hit by a bus tomorrow, can someone else ship the next release in 30 days? If no, your code is a hostage situation. The fix: written docs in the repo, no clever one-liners, boring tech (Postgres &gt; whatever&#39;s trendy), and a deploy that runs from a single command.</p>
<p><strong>2. The Stripe Test.</strong> If your payment processor changes their API or pricing tomorrow, how much of your stack breaks? Most teams have Stripe wired into 40 different places. The fix: one payments module, one interface, everything else calls it. Same logic for any third-party &mdash; auth, email, search.</p>
<p><strong>3. The 3am Test.</strong> If something breaks at 3am, can the on-call person diagnose it without you? If your logs say &quot;Error: undefined&quot; and your monitoring is whatever Heroku gave you for free, you fail this test. The fix: structured logs, real observability (we use Datadog / Sentry depending on budget), and runbooks for the top 5 incidents.</p>
<p>Most apps I see fail at least one of these. The most common is #2 &mdash; too much coupling to third-party APIs.</p>
<p>Run your own stack through this. Tell me what you find. Or don&#39;t &mdash; either way, you&#39;ve got the framework.</p>
<p>&mdash; William</p>
<p style="color:#475569;font-size:14px;"><strong>P.S.</strong> If this is useful, forward it to one engineer or founder who&#39;d benefit. That&#39;s the whole ask today.</p>
`;

    const html = wrapHtml({
        preheader: "A 4-minute read I use to sanity-check every project I take on.",
        bodyHtml,
        ctaLabel: "Forward to a colleague",
        ctaUrl: "mailto:?subject=Three%20Failure%20Modes%20from%20QuantLab%20USA&body=Thought%20you%27d%20find%20this%20useful%3A%20https%3A%2F%2Fquantlabusa.dev",
        unsubscribeUrl: ctx.unsubscribeUrl,
    });

    return {
        subjectA: "The \"Three Failure Modes\" framework",
        subjectB: "Steal this framework (no pitch attached)",
        preheader: "A 4-minute read I use to sanity-check every project I take on.",
        text,
        html,
    };
}
