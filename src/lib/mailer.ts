import nodemailer from "nodemailer";

let transporter: nodemailer.Transporter | null = null;

function getTransporter() {
    if (transporter) return transporter;
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    if (!host || !user || !pass) {
        throw new Error("SMTP not configured. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in your environment.");
    }
    transporter = nodemailer.createTransport({
        host,
        port,
        secure: port === 465,
        auth: { user, pass },
        tls: { rejectUnauthorized: false },
    });
    return transporter;
}

export async function sendEmail({ to, subject, text, html, replyTo }: {
    to: string; subject: string; text: string; html?: string; replyTo?: string;
}) {
    const transport = getTransporter();
    const from = process.env.SMTP_FROM || process.env.SMTP_USER;
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
