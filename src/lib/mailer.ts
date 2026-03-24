import nodemailer from "nodemailer";

const transporterCache = new Map<string, nodemailer.Transporter>();

function getSmtpHost() { return (process.env.SMTP_HOST || "").trim(); }
function getSmtpPort() { return Number((process.env.SMTP_PORT || "465").trim()); }

function getTransporter(userEmail?: string, userSmtpPass?: string): nodemailer.Transporter {
    const host = getSmtpHost();
    const port = getSmtpPort();
    const isPerUser = !!(userEmail && userSmtpPass);
    const smtpUser = userEmail || process.env.SMTP_USER || "";
    const smtpPass = userSmtpPass || process.env.SMTP_PASS || "";

    if (!host || !smtpUser || !smtpPass) {
        throw new Error(`SMTP not configured (host=${host ? "ok" : "missing"}, user=${smtpUser ? "ok" : "missing"}, pass=${smtpPass ? "ok" : "missing"}). Set SMTP_HOST, SMTP_USER, and SMTP_PASS in your environment, or set per-user SMTP credentials in Settings.`);
    }

    // Per-user transporters are never cached — passwords can change at any time
    if (!isPerUser) {
        const cacheKey = `${host}:${port}:${smtpUser}`;
        const cached = transporterCache.get(cacheKey);
        if (cached) return cached;

        const t = nodemailer.createTransport({
            host, port, secure: port === 465,
            auth: { user: smtpUser, pass: smtpPass },
            tls: { rejectUnauthorized: false },
        });
        transporterCache.set(cacheKey, t);
        return t;
    }

    return nodemailer.createTransport({
        host, port, secure: port === 465,
        auth: { user: smtpUser, pass: smtpPass },
        tls: { rejectUnauthorized: false },
    });
}

export async function sendEmail({ to, subject, text, html, replyTo, fromEmail, fromSmtpPass }: {
    to: string; subject: string; text: string; html?: string; replyTo?: string;
    fromEmail?: string; fromSmtpPass?: string;
}) {
    const transport = getTransporter(fromEmail, fromSmtpPass);
    const from = fromEmail || process.env.SMTP_FROM || process.env.SMTP_USER;

    const result = await transport.sendMail({
        from, to, subject, text, html,
        ...(replyTo ? { replyTo } : {}),
    });

    return { messageId: result.messageId, accepted: result.accepted, rejected: result.rejected };
}

export async function verifySMTP() {
    const transport = getTransporter();
    await transport.verify();
    return true;
}
