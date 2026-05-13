import { DripTemplate, TemplateContext, escapeHtml, firstName, wrapHtml } from "./shared";

export function buildDrip5(ctx: TemplateContext): DripTemplate {
    const fn = firstName(ctx.name);

    const text = `Hi ${fn},

Last email from me.

Two weeks ago you grabbed the guide. I've sent four follow-ups. You haven't booked anything, which is fine — most people don't, and it doesn't mean you should.

Quick two-option close:

Still interested, just busy? Reply with "Y" and I'll keep you on a quieter list — maybe one email a quarter when I write something worth your time.

Want out? Don't reply. I'll move you off the list and you'll never hear from me again. No unsubscribe form, no friction.

That's it. No third option, no clever copywriting.

— William

P.S. If you're a past QuantLab client reading this (the list catches a few of you) — would you drop a quick Google review? It genuinely helps the business and takes 30 seconds: https://g.page/r/CbkSyF5E2JFtEBM/review

--
Unsubscribe: ${ctx.unsubscribeUrl}
`;

    const bodyHtml = `
<p>Hi ${escapeHtml(fn)},</p>
<p>Last email from me.</p>
<p>Two weeks ago you grabbed the guide. I&#39;ve sent four follow-ups. You haven&#39;t booked anything, which is fine &mdash; most people don&#39;t, and it doesn&#39;t mean you should.</p>
<p>Quick two-option close:</p>
<p><strong>Still interested, just busy?</strong> Reply with &quot;Y&quot; and I&#39;ll keep you on a quieter list &mdash; maybe one email a quarter when I write something worth your time.</p>
<p><strong>Want out?</strong> Don&#39;t reply. I&#39;ll move you off the list and you&#39;ll never hear from me again. No unsubscribe form, no friction.</p>
<p>That&#39;s it. No third option, no clever copywriting.</p>
<p>&mdash; William</p>
<p style="color:#475569;font-size:14px;"><strong>P.S.</strong> If you&#39;re a past QuantLab client reading this (the list catches a few of you) &mdash; would you drop a quick Google review? It genuinely helps the business and takes 30 seconds: <a href="https://g.page/r/CbkSyF5E2JFtEBM/review" style="color:#4f46e5;">https://g.page/r/CbkSyF5E2JFtEBM/review</a></p>
`;

    const html = wrapHtml({
        preheader: "One question, one-word answer. Two weeks of emails ends here.",
        bodyHtml,
        ctaLabel: "Reply \"Y\"",
        ctaUrl: "mailto:beltz@quantlabusa.dev?subject=Y&body=Y",
        unsubscribeUrl: ctx.unsubscribeUrl,
    });

    return {
        subjectA: "Still around?",
        subjectB: "Last one — Y or no reply",
        preheader: "One question, one-word answer. Two weeks of emails ends here.",
        text,
        html,
    };
}
