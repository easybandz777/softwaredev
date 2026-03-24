import { NextRequest, NextResponse } from "next/server";
import { requireAuth, getSessionUser } from "@/lib/auth";
import { sendEmail } from "@/lib/mailer";
import { sql, ensureMigrated } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    let fromEmail: string | undefined;
    let fromSmtpPass: string | undefined;

    try {
        const { to, subject, body, leadId } = await req.json();

        if (!to || !subject || !body) {
            return NextResponse.json({ success: false, error: "Email address, subject, and body are required." }, { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(to)) {
            return NextResponse.json({ success: false, error: "Invalid email address." }, { status: 400 });
        }

        await ensureMigrated();

        const sessionUser = getSessionUser(req);

        if (sessionUser) {
            const { rows } = await sql`SELECT email, smtp_pass FROM crm_users WHERE id = ${sessionUser.id} LIMIT 1`;
            const dbUser = rows[0];
            if (dbUser?.email && dbUser?.smtp_pass) {
                fromEmail = dbUser.email;
                fromSmtpPass = dbUser.smtp_pass;
            }
        }

        const result = await sendEmail({
            to,
            subject,
            text: body,
            html: body.replace(/\n/g, "<br>"),
            fromEmail,
            fromSmtpPass,
        });

        if (result.rejected && result.rejected.length > 0) {
            return NextResponse.json({ success: false, error: `Email rejected by server for: ${result.rejected.join(", ")}` }, { status: 422 });
        }

        if (leadId) {
            try {
                await sql`UPDATE consultations SET status = 'contacted', last_activity_at = NOW() WHERE id = ${leadId}`;
            } catch (err) {
                console.error("Failed to update lead stage after send:", err);
            }
        }

        return NextResponse.json({
            success: true,
            messageId: result.messageId,
            sentTo: to,
            sentFrom: fromEmail || process.env.SMTP_FROM || process.env.SMTP_USER,
        });
    } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        const code = (err as { code?: string })?.code || "";
        console.error(`Send email error [from=${fromEmail || "env"} code=${code}]: ${msg}`);
        let userMessage = "Failed to send email. Please try again.";
        if (msg.includes("SMTP not configured")) {
            userMessage = "Email sending is not configured. Set your SMTP password in Settings, or contact your admin.";
        } else if (code === "EAUTH" || msg.includes("EAUTH") || msg.includes("authentication")) {
            userMessage = `SMTP authentication failed for ${fromEmail || "default account"}. Check your email password in Settings.`;
        } else if (code === "ESOCKET" || msg.includes("ESOCKET") || msg.includes("ECONNREFUSED")) {
            userMessage = "Could not connect to the email server. Please try again later.";
        }
        return NextResponse.json({ success: false, error: userMessage, detail: msg }, { status: 500 });
    }
}
