import nodemailer from "nodemailer";
import { ImapFlow } from "imapflow";

const transporterCache = new Map<string, nodemailer.Transporter>();

function getSmtpHost() { return (process.env.SMTP_HOST || "").trim(); }
function getSmtpPort() { return Number((process.env.SMTP_PORT || "465").trim()); }
const IMAP_HOST = "mail.spacemail.com";
const IMAP_PORT = 993;

function getTransporter(userEmail?: string, userSmtpPass?: string): nodemailer.Transporter {
    const host = getSmtpHost();
    const port = getSmtpPort();
    const isPerUser = !!(userEmail && userSmtpPass);
    const smtpUser = userEmail || process.env.SMTP_USER || "";
    const smtpPass = userSmtpPass || process.env.SMTP_PASS || "";

    if (!host || !smtpUser || !smtpPass) {
        throw new Error(`SMTP not configured (host=${host ? "ok" : "missing"}, user=${smtpUser ? "ok" : "missing"}, pass=${smtpPass ? "ok" : "missing"}). Set SMTP_HOST, SMTP_USER, and SMTP_PASS in your environment, or set per-user SMTP credentials in Settings.`);
    }

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

async function appendToSentFolder(rawMessage: Buffer | string, user: string, pass: string): Promise<void> {
    const client = new ImapFlow({
        host: IMAP_HOST,
        port: IMAP_PORT,
        secure: true,
        auth: { user, pass },
        logger: false,
        tls: { rejectUnauthorized: false },
    });

    try {
        await client.connect();
        await client.append("Sent", rawMessage, ["\\Seen"]);
    } finally {
        await client.logout().catch(() => {});
    }
}

export async function sendEmail({ to, subject, text, html, replyTo, fromEmail, fromSmtpPass }: {
    to: string; subject: string; text: string; html?: string; replyTo?: string;
    fromEmail?: string; fromSmtpPass?: string;
}) {
    const transport = getTransporter(fromEmail, fromSmtpPass);
    const from = fromEmail || process.env.SMTP_FROM || process.env.SMTP_USER;

    const mailOptions: nodemailer.SendMailOptions = {
        from, to, subject, text, html,
        ...(replyTo ? { replyTo } : {}),
    };

    const result = await transport.sendMail(mailOptions);

    // Save a copy to the sender's IMAP Sent folder (best-effort, never block delivery)
    const imapUser = (fromEmail || process.env.SMTP_USER || "").trim();
    const imapPass = (fromSmtpPass || process.env.SMTP_PASS || "").trim();
    if (imapUser && imapPass) {
        try {
            const raw = await buildRawMessage(mailOptions);
            await appendToSentFolder(raw, imapUser, imapPass);
        } catch (err) {
            console.error("IMAP Sent append failed (non-fatal):", err instanceof Error ? err.message : err);
        }
    }

    return { messageId: result.messageId, accepted: result.accepted, rejected: result.rejected };
}

async function buildRawMessage(opts: nodemailer.SendMailOptions): Promise<Buffer> {
    const mail = new (await import("nodemailer/lib/mail-composer")).default(opts);
    return mail.compile().build();
}

export async function verifySMTP() {
    const transport = getTransporter();
    await transport.verify();
    return true;
}
