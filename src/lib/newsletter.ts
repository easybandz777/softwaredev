import crypto from "crypto";
import { sql } from "@/lib/db";
import { Resend } from "resend";

export type NewsletterAction = "confirm" | "unsubscribe";

export type SubscriberStatus = "pending" | "confirmed" | "unsubscribed";

export type NewsletterSubscriberRow = {
    id: string;
    email: string;
    name: string;
    source: string | null;
    status: SubscriberStatus;
    confirmed_at: string | null;
    unsubscribed_at: string | null;
    created_at: string;
    updated_at: string;
};

export type SubscribeArgs = {
    email: string;
    name?: string;
    source?: string | null;
};

export type SubscribeResult =
    | { status: "pending_confirmation"; subscriberId: string }
    | { status: "already_subscribed"; subscriberId: string }
    | { status: "resent_confirmation"; subscriberId: string }
    | { status: "invalid"; error: string }
    | { status: "error"; error: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FROM_EMAIL =
    process.env.RESEND_FROM_EMAIL || "QuantLab Newsletter <onboarding@resend.dev>";
const REPLY_TO = "beltz@quantlabusa.dev";
const SITE_ORIGIN = process.env.SITE_ORIGIN || "https://quantlabusa.dev";

const NEWSLETTER_SECRET_FALLBACK =
    "qlu-newsletter-fallback-do-not-use-in-prod";

export function getNewsletterSecret(): string {
    return (
        process.env.NEWSLETTER_JWT_SECRET ||
        process.env.UNSUBSCRIBE_JWT_SECRET ||
        process.env.DRIP_CRON_SECRET ||
        NEWSLETTER_SECRET_FALLBACK
    );
}

export async function ensureNewsletterTable(): Promise<void> {
    await sql`
        CREATE TABLE IF NOT EXISTS newsletter_subscribers (
            id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            email            TEXT NOT NULL UNIQUE,
            name             TEXT NOT NULL DEFAULT '',
            source           TEXT,
            status           TEXT NOT NULL DEFAULT 'pending',
            confirmed_at     TIMESTAMPTZ,
            unsubscribed_at  TIMESTAMPTZ,
            created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
            updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;
    await sql`CREATE INDEX IF NOT EXISTS idx_newsletter_email ON newsletter_subscribers (email)`;
    await sql`CREATE INDEX IF NOT EXISTS idx_newsletter_status ON newsletter_subscribers (status)`;
    await sql`
        CREATE TABLE IF NOT EXISTS newsletter_rate_limit (
            id         SERIAL PRIMARY KEY,
            ip         TEXT NOT NULL,
            created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
    `;
    await sql`CREATE INDEX IF NOT EXISTS idx_newsletter_rl_ip_time ON newsletter_rate_limit (ip, created_at)`;
}

export function signSubscriberToken(
    email: string,
    action: NewsletterAction,
): string {
    const norm = email.trim().toLowerCase();
    const payload = Buffer.from(
        JSON.stringify({ e: norm, a: action, t: Date.now() }),
    ).toString("base64url");
    const sig = crypto
        .createHmac("sha256", getNewsletterSecret())
        .update(payload)
        .digest("base64url");
    return `${payload}.${sig}`;
}

export function verifySubscriberToken(
    token: string,
): { email: string; action: NewsletterAction } | null {
    if (!token || !token.includes(".")) return null;
    const [payload, sig] = token.split(".");
    if (!payload || !sig) return null;
    const expected = crypto
        .createHmac("sha256", getNewsletterSecret())
        .update(payload)
        .digest("base64url");
    const a = Buffer.from(sig);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return null;
    if (!crypto.timingSafeEqual(a, b)) return null;
    try {
        const data = JSON.parse(
            Buffer.from(payload, "base64url").toString("utf8"),
        );
        if (!data || typeof data.e !== "string") return null;
        if (data.a !== "confirm" && data.a !== "unsubscribe") return null;
        return { email: data.e, action: data.a };
    } catch {
        return null;
    }
}

export function confirmUrl(email: string): string {
    const token = signSubscriberToken(email, "confirm");
    return `${SITE_ORIGIN.replace(/\/$/, "")}/api/newsletter/confirm?token=${encodeURIComponent(token)}`;
}

export function unsubscribeUrl(email: string): string {
    const token = signSubscriberToken(email, "unsubscribe");
    return `${SITE_ORIGIN.replace(/\/$/, "")}/api/newsletter/unsubscribe?token=${encodeURIComponent(token)}`;
}

export async function rateLimitOk(
    ip: string,
    windowMs = 60 * 60 * 1000,
    max = 10,
): Promise<{ ok: boolean; retryAfterSec: number }> {
    if (!ip) return { ok: true, retryAfterSec: 0 };
    try {
        await sql`
            DELETE FROM newsletter_rate_limit
            WHERE created_at < NOW() - INTERVAL '2 hours'
        `;
        const { rows } = await sql<{ count: string }>`
            SELECT COUNT(*)::text AS count
            FROM newsletter_rate_limit
            WHERE ip = ${ip}
              AND created_at > NOW() - INTERVAL '1 hour'
        `;
        const count = Number(rows[0]?.count ?? 0);
        if (count >= max) {
            const retryAfterSec = Math.ceil(windowMs / 1000);
            return { ok: false, retryAfterSec };
        }
        await sql`INSERT INTO newsletter_rate_limit (ip) VALUES (${ip})`;
        return { ok: true, retryAfterSec: 0 };
    } catch (err) {
        console.warn("[newsletter] rate limit check failed:", err);
        return { ok: true, retryAfterSec: 0 };
    }
}

export async function findSubscriber(
    email: string,
): Promise<NewsletterSubscriberRow | null> {
    const norm = email.trim().toLowerCase();
    if (!norm) return null;
    try {
        await ensureNewsletterTable();
        const { rows } = await sql<NewsletterSubscriberRow>`
            SELECT id, email, name, source, status, confirmed_at, unsubscribed_at, created_at, updated_at
            FROM newsletter_subscribers
            WHERE email = ${norm}
            LIMIT 1
        `;
        return rows[0] ?? null;
    } catch (err) {
        console.warn("[newsletter] findSubscriber failed:", err);
        return null;
    }
}

export async function subscribeEmail(
    args: SubscribeArgs,
): Promise<SubscribeResult> {
    const email = (args.email || "").trim().toLowerCase();
    if (!email || !EMAIL_RE.test(email)) {
        return { status: "invalid", error: "Invalid email address." };
    }
    if (email.length > 320) {
        return { status: "invalid", error: "Email too long." };
    }
    const name = (args.name || "").trim().slice(0, 200);
    const source = (args.source || "").trim().slice(0, 120) || null;

    try {
        await ensureNewsletterTable();

        const existing = await findSubscriber(email);
        if (existing) {
            if (existing.status === "confirmed") {
                return {
                    status: "already_subscribed",
                    subscriberId: existing.id,
                };
            }
            if (existing.status === "unsubscribed") {
                await sql`
                    UPDATE newsletter_subscribers
                    SET status = 'pending',
                        unsubscribed_at = NULL,
                        name = COALESCE(NULLIF(${name}, ''), name),
                        source = COALESCE(${source}, source),
                        updated_at = NOW()
                    WHERE id = ${existing.id}
                `;
                await sendConfirmationEmail(email, name).catch((err) =>
                    console.warn(
                        "[newsletter] resend confirmation failed:",
                        err,
                    ),
                );
                return {
                    status: "resent_confirmation",
                    subscriberId: existing.id,
                };
            }
            await sql`
                UPDATE newsletter_subscribers
                SET name = COALESCE(NULLIF(${name}, ''), name),
                    source = COALESCE(${source}, source),
                    updated_at = NOW()
                WHERE id = ${existing.id}
            `;
            await sendConfirmationEmail(email, name).catch((err) =>
                console.warn("[newsletter] resend confirmation failed:", err),
            );
            return {
                status: "resent_confirmation",
                subscriberId: existing.id,
            };
        }

        const { rows } = await sql<{ id: string }>`
            INSERT INTO newsletter_subscribers (email, name, source, status)
            VALUES (${email}, ${name}, ${source}, 'pending')
            RETURNING id
        `;
        const subscriberId = rows[0]?.id ?? "";
        await sendConfirmationEmail(email, name).catch((err) =>
            console.warn("[newsletter] send confirmation failed:", err),
        );
        return { status: "pending_confirmation", subscriberId };
    } catch (err) {
        console.error("[newsletter] subscribeEmail failed:", err);
        return { status: "error", error: "Subscription failed." };
    }
}

export async function confirmSubscription(
    token: string,
): Promise<{ ok: boolean; email?: string; error?: string }> {
    const verified = verifySubscriberToken(token);
    if (!verified || verified.action !== "confirm") {
        return { ok: false, error: "Invalid or expired confirmation link." };
    }
    try {
        await ensureNewsletterTable();
        const { rowCount } = await sql`
            UPDATE newsletter_subscribers
            SET status = 'confirmed',
                confirmed_at = NOW(),
                updated_at = NOW()
            WHERE email = ${verified.email}
              AND status IN ('pending', 'unsubscribed')
        `;
        if (!rowCount) {
            const existing = await findSubscriber(verified.email);
            if (existing?.status === "confirmed") {
                return { ok: true, email: verified.email };
            }
            return { ok: false, error: "No pending subscription found." };
        }
        await sendWelcomeEmail(verified.email).catch((err) =>
            console.warn("[newsletter] welcome failed:", err),
        );
        return { ok: true, email: verified.email };
    } catch (err) {
        console.error("[newsletter] confirmSubscription failed:", err);
        return { ok: false, error: "Server error." };
    }
}

export async function unsubscribe(
    token: string,
): Promise<{ ok: boolean; email?: string; error?: string }> {
    const verified = verifySubscriberToken(token);
    if (!verified || verified.action !== "unsubscribe") {
        return { ok: false, error: "Invalid or expired unsubscribe link." };
    }
    try {
        await ensureNewsletterTable();
        await sql`
            UPDATE newsletter_subscribers
            SET status = 'unsubscribed',
                unsubscribed_at = NOW(),
                updated_at = NOW()
            WHERE email = ${verified.email}
        `;
        return { ok: true, email: verified.email };
    } catch (err) {
        console.error("[newsletter] unsubscribe failed:", err);
        return { ok: false, error: "Server error." };
    }
}

async function sendConfirmationEmail(
    email: string,
    name: string,
): Promise<void> {
    if (!process.env.RESEND_API_KEY) {
        console.warn(
            "[newsletter] RESEND_API_KEY not set — skipping confirmation email.",
        );
        return;
    }
    const resend = new Resend(process.env.RESEND_API_KEY);
    const link = confirmUrl(email);
    const unsub = unsubscribeUrl(email);
    const firstName = (name || "there").split(" ")[0] || "there";

    const subject = "Confirm your QUANT LAB newsletter subscription";
    const text = `Hi ${firstName},

You (or someone using this address) signed up for the QUANT LAB USA newsletter — one frank email every other Tuesday from Bill Beltz on building real software in the field.

Click here to confirm:
${link}

If this wasn't you, ignore this message and you won't hear from us.

— Bill Beltz
QUANT LAB USA INC
Macon, GA

--
Unsubscribe: ${unsub}
`;

    const html = `<!DOCTYPE html><html><body style="margin:0;padding:32px;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;color:#0f172a;">
<div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:32px;">
<p style="margin:0 0 6px;font-size:12px;letter-spacing:0.12em;font-weight:700;color:#4f46e5;text-transform:uppercase;">QUANT LAB USA</p>
<h1 style="margin:0 0 16px;font-size:22px;color:#0f172a;">Confirm your subscription</h1>
<p style="font-size:15px;line-height:1.6;color:#475569;margin:0 0 12px;">Hi ${escapeHtml(firstName)},</p>
<p style="font-size:15px;line-height:1.6;color:#475569;margin:0 0 16px;">You (or someone using this address) signed up for the QUANT LAB USA newsletter — one frank email every other Tuesday from Bill Beltz on building real software in the field.</p>
<p style="margin:24px 0;text-align:center;"><a href="${link}" style="display:inline-block;padding:14px 28px;background:#4f46e5;color:#ffffff;text-decoration:none;border-radius:8px;font-weight:600;font-size:15px;">Confirm subscription</a></p>
<p style="font-size:13px;line-height:1.6;color:#94a3b8;margin:16px 0 0;">If this wasn&#39;t you, ignore this message and you won&#39;t hear from us.</p>
<p style="font-size:14px;line-height:1.6;color:#475569;margin:24px 0 0;">— Bill Beltz<br/>QUANT LAB USA INC<br/>Macon, GA</p>
<hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" />
<p style="font-size:12px;color:#94a3b8;margin:0;">Don&#39;t want this? <a href="${unsub}" style="color:#94a3b8;">Unsubscribe</a></p>
</div></body></html>`;

    await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        replyTo: REPLY_TO,
        subject,
        html,
        text,
        headers: {
            "List-Unsubscribe": `<${unsub}>, <mailto:${REPLY_TO}?subject=unsubscribe>`,
            "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
        },
    });
}

async function sendWelcomeEmail(email: string): Promise<void> {
    if (!process.env.RESEND_API_KEY) return;
    const resend = new Resend(process.env.RESEND_API_KEY);
    const unsub = unsubscribeUrl(email);

    const subject = "Welcome — see you next Tuesday";
    const text = `You're in.

The next issue lands in your inbox the upcoming Tuesday. Here is what you get:

- A real case study from a project I shipped (the wins and the screw-ups)
- One technical playbook — code, schemas, or architecture decisions I actually use
- A founder hot take I have conviction on
- Pricing and cost intel from real client engagements
- Zero fluff. No "10 ways to grow your team" filler.

If you want to back-fill, the archive lives at https://quantlabusa.dev/newsroom.

Reply to this email with one sentence on what you're building — I read every reply and respond within a day.

— Bill Beltz
QUANT LAB USA INC

--
Unsubscribe: ${unsub}
`;

    const html = `<!DOCTYPE html><html><body style="margin:0;padding:32px;background:#f8fafc;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif;color:#0f172a;">
<div style="max-width:560px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:12px;padding:32px;">
<p style="margin:0 0 6px;font-size:12px;letter-spacing:0.12em;font-weight:700;color:#4f46e5;text-transform:uppercase;">QUANT LAB USA</p>
<h1 style="margin:0 0 16px;font-size:22px;color:#0f172a;">You&#39;re in.</h1>
<p style="font-size:15px;line-height:1.6;color:#475569;margin:0 0 14px;">The next issue lands in your inbox the upcoming Tuesday. Here is what you get:</p>
<ul style="font-size:15px;line-height:1.6;color:#475569;margin:0 0 14px 20px;padding:0;">
<li>A real case study from a project I shipped (the wins and the screw-ups)</li>
<li>One technical playbook — code, schemas, or architecture decisions I actually use</li>
<li>A founder hot take I have conviction on</li>
<li>Pricing and cost intel from real client engagements</li>
<li>Zero fluff. No &quot;10 ways to grow your team&quot; filler.</li>
</ul>
<p style="font-size:15px;line-height:1.6;color:#475569;margin:14px 0;">Back-fill the archive at <a href="https://quantlabusa.dev/newsroom" style="color:#4f46e5;">quantlabusa.dev/newsroom</a>.</p>
<p style="font-size:15px;line-height:1.6;color:#475569;margin:14px 0;">Reply to this email with one sentence on what you&#39;re building — I read every reply.</p>
<p style="font-size:14px;line-height:1.6;color:#475569;margin:24px 0 0;">— Bill Beltz<br/>QUANT LAB USA INC</p>
<hr style="border:none;border-top:1px solid #e2e8f0;margin:24px 0;" />
<p style="font-size:12px;color:#94a3b8;margin:0;">Don&#39;t want this? <a href="${unsub}" style="color:#94a3b8;">Unsubscribe</a></p>
</div></body></html>`;

    await resend.emails.send({
        from: FROM_EMAIL,
        to: email,
        replyTo: REPLY_TO,
        subject,
        html,
        text,
        headers: {
            "List-Unsubscribe": `<${unsub}>, <mailto:${REPLY_TO}?subject=unsubscribe>`,
            "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
        },
    });
}

function escapeHtml(s: string): string {
    return s
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}
