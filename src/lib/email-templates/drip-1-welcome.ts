import { DripTemplate, TemplateContext, escapeHtml, firstName, wrapHtml } from "./shared";

export function buildDrip1(ctx: TemplateContext): DripTemplate {
    const fn = firstName(ctx.name);
    const magnet = ctx.leadMagnetUrl || "https://quantlabusa.dev/resources";

    const text = `Hi ${fn},

Thanks for grabbing the guide. The link is here: ${magnet}

A few things you should know before I take up any more of your inbox:

This isn't a 14-email "drip from the marketing team." It's me — William, the guy who actually builds the software at QuantLab USA. I'm going to send you 4 more emails over the next two weeks. Then I'll shut up unless you tell me otherwise.

Here's what's in those emails:
- Day 3: A case study from a client who faced the same decision you're probably facing
- Day 5: A technical framework I use myself (no pitch, just the framework)
- Day 8: One soft pitch — a 30-min Zoom if you want to talk through your situation
- Day 14: A short "still around?" check-in

If you ever want to skip the rest, just reply "stop" and you're out. No hard feelings, no funnel.

In the meantime — what's the one thing you're actually trying to figure out? Build vs. buy? Pentesting a Next.js app? Stack choice? Hit reply with one sentence. I read every email myself and reply within a day (usually faster).

— William

P.S. If you're in a hurry, my direct line is (770) 652-1282. Text works. I won't pick up if I'm in deep work, but I'll call back same day.

--
Unsubscribe: ${ctx.unsubscribeUrl}
`;

    const bodyHtml = `
<p>Hi ${escapeHtml(fn)},</p>
<p>Thanks for grabbing the guide. The link is here: <a href="${magnet}" style="color:#4f46e5;">${escapeHtml(magnet)}</a></p>
<p>A few things you should know before I take up any more of your inbox:</p>
<p>This isn&#39;t a 14-email &quot;drip from the marketing team.&quot; It&#39;s me &mdash; William, the guy who actually builds the software at QuantLab USA. I&#39;m going to send you 4 more emails over the next two weeks. Then I&#39;ll shut up unless you tell me otherwise.</p>
<p>Here&#39;s what&#39;s in those emails:</p>
<ul style="margin:0 0 12px 20px;padding:0;">
<li style="margin:4px 0;">Day 3: A case study from a client who faced the same decision you&#39;re probably facing</li>
<li style="margin:4px 0;">Day 5: A technical framework I use myself (no pitch, just the framework)</li>
<li style="margin:4px 0;">Day 8: One soft pitch &mdash; a 30-min Zoom if you want to talk through your situation</li>
<li style="margin:4px 0;">Day 14: A short &quot;still around?&quot; check-in</li>
</ul>
<p>If you ever want to skip the rest, just reply &quot;stop&quot; and you&#39;re out. No hard feelings, no funnel.</p>
<p>In the meantime &mdash; what&#39;s the one thing you&#39;re actually trying to figure out? Build vs. buy? Pentesting a Next.js app? Stack choice? Hit reply with one sentence. I read every email myself and reply within a day (usually faster).</p>
<p>&mdash; William</p>
<p style="color:#475569;font-size:14px;"><strong>P.S.</strong> If you&#39;re in a hurry, my direct line is (770) 652-1282. Text works. I won&#39;t pick up if I&#39;m in deep work, but I&#39;ll call back same day.</p>
`;

    const html = wrapHtml({
        preheader: "Quick note from me on what to expect over the next two weeks.",
        bodyHtml,
        ctaLabel: "Reply with one sentence",
        ctaUrl: "mailto:beltz@quantlabusa.dev?subject=Re%3A%20Your%20guide",
        unsubscribeUrl: ctx.unsubscribeUrl,
    });

    return {
        subjectA: "Your guide is attached — plus what's next",
        subjectB: "Here's your guide (and a heads-up)",
        preheader: "Quick note from me on what to expect over the next two weeks.",
        text,
        html,
    };
}
