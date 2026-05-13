import { DripTemplate, TemplateContext, escapeHtml, firstName, wrapHtml } from "./shared";

export function buildDrip4(ctx: TemplateContext): DripTemplate {
    const fn = firstName(ctx.name);
    const calendly = ctx.calendlyUrl || "https://quantlabusa.dev/contact";

    const text = `Hi ${fn},

Soft pitch time. Skip if you're not in a buying window.

If you've read the guide and the last three emails and there's still something you're chewing on — let's talk. 30 minutes, Zoom, on me.

Not a sales call. I don't do those well anyway. What I do is diagnostic: you tell me what you're building (or what's broken), I ask the questions that actually matter, and at the end you walk away with a clearer picture of what to do next. Sometimes that's "hire QuantLab." Sometimes that's "you're fine, don't change anything." Sometimes it's "go talk to this specific other firm, they're better for your use case."

What we'd cover:
- Your current stack and where it hurts
- The actual technical risk in your roadmap
- Whether the build/buy/refactor decision in front of you is the right one
- A rough estimate (range, not a quote) if you wanted us to do the work

You don't get a contract pitch at the end. You get a follow-up email with the notes.

Book a slot here: ${calendly}

If nothing on that calendar works, reply with two times that do and I'll make them work.

— William

P.S. If you'd rather just send me the technical context in writing, that's fine too. Reply with a paragraph and I'll send back a written take. Async works.

--
Unsubscribe: ${ctx.unsubscribeUrl}
`;

    const bodyHtml = `
<p>Hi ${escapeHtml(fn)},</p>
<p>Soft pitch time. Skip if you&#39;re not in a buying window.</p>
<p>If you&#39;ve read the guide and the last three emails and there&#39;s still something you&#39;re chewing on &mdash; let&#39;s talk. 30 minutes, Zoom, on me.</p>
<p>Not a sales call. I don&#39;t do those well anyway. What I do is diagnostic: you tell me what you&#39;re building (or what&#39;s broken), I ask the questions that actually matter, and at the end you walk away with a clearer picture of what to do next. Sometimes that&#39;s &quot;hire QuantLab.&quot; Sometimes that&#39;s &quot;you&#39;re fine, don&#39;t change anything.&quot; Sometimes it&#39;s &quot;go talk to this specific other firm, they&#39;re better for your use case.&quot;</p>
<p>What we&#39;d cover:</p>
<ul style="margin:0 0 12px 20px;padding:0;">
<li style="margin:4px 0;">Your current stack and where it hurts</li>
<li style="margin:4px 0;">The actual technical risk in your roadmap</li>
<li style="margin:4px 0;">Whether the build/buy/refactor decision in front of you is the right one</li>
<li style="margin:4px 0;">A rough estimate (range, not a quote) if you wanted us to do the work</li>
</ul>
<p>You don&#39;t get a contract pitch at the end. You get a follow-up email with the notes.</p>
<p>Book a slot here: <a href="${escapeHtml(calendly)}" style="color:#4f46e5;">${escapeHtml(calendly)}</a></p>
<p>If nothing on that calendar works, reply with two times that do and I&#39;ll make them work.</p>
<p>&mdash; William</p>
<p style="color:#475569;font-size:14px;"><strong>P.S.</strong> If you&#39;d rather just send me the technical context in writing, that&#39;s fine too. Reply with a paragraph and I&#39;ll send back a written take. Async works.</p>
`;

    const html = wrapHtml({
        preheader: "30 minutes, free, no pitch. Diagnostic only. Here's what we'd cover.",
        bodyHtml,
        ctaLabel: "Book a 30-min Zoom",
        ctaUrl: calendly,
        unsubscribeUrl: ctx.unsubscribeUrl,
    });

    return {
        subjectA: "Want me to look at your situation?",
        subjectB: "30 min, no pitch — just diagnosis",
        preheader: "30 minutes, free, no pitch. Diagnostic only. Here's what we'd cover.",
        text,
        html,
    };
}
