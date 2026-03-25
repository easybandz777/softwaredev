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

export function buildSignatureHtml(senderName: string, senderEmail: string): string {
    const firstName = senderName.split(" ")[0];
    const initial = senderName.charAt(0).toUpperCase();

    return `
<div style="margin-top:28px;padding-top:16px;border-top:1px solid #e2e8f0;font-family:Arial,Helvetica,sans-serif;">
  <table cellpadding="0" cellspacing="0" style="border:none;">
    <tr>
      <td style="padding-right:14px;border-right:2px solid #059669;vertical-align:top;">
        <div style="width:48px;height:48px;border-radius:8px;background:linear-gradient(135deg,#059669,#34d399);display:flex;align-items:center;justify-content:center;">
          <span style="font-size:20px;font-weight:700;color:#fff;line-height:48px;text-align:center;display:block;width:48px;">${initial}</span>
        </div>
      </td>
      <td style="padding-left:14px;vertical-align:top;">
        <p style="margin:0;font-size:14px;font-weight:700;color:#1f2937;">${senderName}</p>
        <p style="margin:2px 0 0;font-size:12px;color:#6b7280;">QuantLab USA &mdash; Business Solutions</p>
        <p style="margin:6px 0 0;font-size:12px;color:#6b7280;">
          <a href="mailto:${senderEmail}" style="color:#059669;text-decoration:none;">${senderEmail}</a>
        </p>
        <p style="margin:2px 0 0;font-size:12px;">
          <a href="https://quantlabusa.dev" style="color:#059669;text-decoration:none;font-weight:600;">quantlabusa.dev</a>
        </p>
      </td>
    </tr>
  </table>
  <a href="https://quantlabusa.dev" style="text-decoration:none;display:block;margin-top:14px;">
    <table cellpadding="0" cellspacing="0" width="380" style="border:none;border-radius:8px;overflow:hidden;border-collapse:separate;">
      <tr>
        <td style="background:#0A0E1A;padding:14px 18px;border-radius:8px;border:1px solid #1a2540;">
          <table cellpadding="0" cellspacing="0" width="100%" style="border:none;">
            <tr>
              <td width="44" style="vertical-align:middle;">
                <div style="width:40px;height:40px;border-radius:6px;background:linear-gradient(135deg,#0d1526,#0A0E1A);border:1px solid #22D3EE30;display:flex;align-items:center;justify-content:center;">
                  <span style="font-family:'Segoe UI',Arial,sans-serif;font-size:18px;font-weight:800;color:#22D3EE;line-height:40px;text-align:center;display:block;width:40px;">${initial}</span>
                </div>
              </td>
              <td style="padding-left:12px;vertical-align:middle;">
                <p style="margin:0;font-family:'Segoe UI',Arial,sans-serif;font-size:13px;font-weight:700;color:#F0F6FF;letter-spacing:0.01em;">${senderName}</p>
                <p style="margin:1px 0 0;font-family:'Segoe UI',Arial,sans-serif;font-size:10px;color:#22D3EE;letter-spacing:0.08em;text-transform:uppercase;font-weight:600;">Solution Expert</p>
              </td>
              <td style="vertical-align:middle;text-align:right;">
                <p style="margin:0;font-family:'Courier New',monospace;font-size:10px;color:#7A90A8;line-height:1.6;">${senderEmail}</p>
                <p style="margin:0;font-family:'Courier New',monospace;font-size:10px;color:#22D3EE;font-weight:700;line-height:1.6;">quantlabusa.dev</p>
              </td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0" width="100%" style="border:none;margin-top:8px;">
            <tr>
              <td style="height:1px;background:linear-gradient(90deg,transparent,#22D3EE40,transparent);font-size:0;line-height:0;">&nbsp;</td>
            </tr>
          </table>
          <p style="margin:6px 0 0;font-family:'Courier New',monospace;font-size:9px;color:#3D5066;letter-spacing:0.05em;text-align:center;">
            Web Platforms &middot; Business Automation &middot; Custom Software &middot; Data Systems
          </p>
        </td>
      </tr>
    </table>
  </a>
</div>`;
}

export function buildSignatureText(senderName: string, senderEmail: string): string {
    return `\n\n--\n${senderName}\nQuantLab USA — Business Solutions\n${senderEmail}\nhttps://quantlabusa.dev`;
}

export async function verifySMTP() {
    const transport = getTransporter();
    await transport.verify();
    return true;
}
