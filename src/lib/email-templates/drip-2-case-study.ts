import { DripTemplate, TemplateContext, escapeHtml, firstName, wrapHtml } from "./shared";

export function buildDrip2(ctx: TemplateContext): DripTemplate {
    const fn = firstName(ctx.name);

    const text = `Hi ${fn},

Following up on the guide.

Last year a company called HobbsPeak came to me with the exact decision you might be sitting with right now: pay for a Shopify Plus + apps stack (~$50k/yr in subscriptions, plus 2.9% transaction fees) or build something custom.

The math everyone gets wrong: people compare Shopify's monthly fee to dev cost and call it a day. They forget about the per-transaction tax, the app stack ($800-$2k/mo once you need real functionality), the lock-in, and the moment a feature you need just doesn't exist in any plugin.

What we built for HobbsPeak: a Next.js + PostgreSQL + Stripe stack, deployed on their own infrastructure. Project cost ran low five figures. They own the code. No per-transaction tax. Year-one savings vs. the Shopify path were close to $40k, and that gap widens every year.

The build-vs-buy decision isn't really about cost. It's about whether your edge depends on something a SaaS template can give you. For HobbsPeak, it did — they needed pricing logic Shopify won't support without ugly hacks.

If any of this sounds like the math you're running, reply and tell me what stack you're weighing. I'll give you a straight answer, even if the answer is "stay on Shopify."

— William

P.S. Not every client should build custom. I've told three people this month to stick with their SaaS. The guide's framework will tell you which side of the line you're on.

--
Unsubscribe: ${ctx.unsubscribeUrl}
`;

    const bodyHtml = `
<p>Hi ${escapeHtml(fn)},</p>
<p>Following up on the guide.</p>
<p>Last year a company called HobbsPeak came to me with the exact decision you might be sitting with right now: pay for a Shopify Plus + apps stack (~$50k/yr in subscriptions, plus 2.9% transaction fees) or build something custom.</p>
<p>The math everyone gets wrong: people compare Shopify&#39;s monthly fee to dev cost and call it a day. They forget about the per-transaction tax, the app stack ($800-$2k/mo once you need real functionality), the lock-in, and the moment a feature you need just doesn&#39;t exist in any plugin.</p>
<p>What we built for HobbsPeak: a Next.js + PostgreSQL + Stripe stack, deployed on their own infrastructure. Project cost ran low five figures. They own the code. No per-transaction tax. Year-one savings vs. the Shopify path were close to $40k, and that gap widens every year.</p>
<p>The build-vs-buy decision isn&#39;t really about cost. It&#39;s about whether your edge depends on something a SaaS template can give you. For HobbsPeak, it did &mdash; they needed pricing logic Shopify won&#39;t support without ugly hacks.</p>
<p>If any of this sounds like the math you&#39;re running, reply and tell me what stack you&#39;re weighing. I&#39;ll give you a straight answer, even if the answer is &quot;stay on Shopify.&quot;</p>
<p>&mdash; William</p>
<p style="color:#475569;font-size:14px;"><strong>P.S.</strong> Not every client should build custom. I&#39;ve told three people this month to stick with their SaaS. The guide&#39;s framework will tell you which side of the line you&#39;re on.</p>
`;

    const html = wrapHtml({
        preheader: "Real numbers from a client who faced the same call you might be facing.",
        bodyHtml,
        ctaLabel: "Reply with your stack",
        ctaUrl: "mailto:beltz@quantlabusa.dev?subject=Re%3A%20HobbsPeak%20case%20study",
        unsubscribeUrl: ctx.unsubscribeUrl,
    });

    return {
        subjectA: "How HobbsPeak skipped Shopify (and saved $40k/yr)",
        subjectB: "They almost paid Shopify $50k. Then they called me.",
        preheader: "Real numbers from a client who faced the same call you might be facing.",
        text,
        html,
    };
}
