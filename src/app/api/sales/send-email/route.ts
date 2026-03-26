import { NextRequest, NextResponse } from "next/server";
import { requireAuth, getSessionUser, ensureLegacyResolved } from "@/lib/auth";
import { sendEmail, buildSignatureHtml, buildSignatureText } from "@/lib/mailer";
import { sql, ensureMigrated } from "@/lib/db";
import { advanceCadence } from "@/lib/cadence";
import { recalculateTemperature } from "@/lib/temperature";

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
        await ensureLegacyResolved();

        const sessionUser = getSessionUser(req);

        let senderName = "QuantLab USA";
        let senderEmailAddr = "";

        if (sessionUser) {
            const { rows } = await sql`SELECT full_name, email, smtp_pass FROM crm_users WHERE id = ${sessionUser.id} LIMIT 1`;
            const dbUser = rows[0];
            if (dbUser?.email && dbUser?.smtp_pass) {
                fromEmail = dbUser.email;
                fromSmtpPass = dbUser.smtp_pass;
            }
            if (dbUser?.full_name) senderName = dbUser.full_name;
            if (dbUser?.email) senderEmailAddr = dbUser.email;
        }

        senderEmailAddr = senderEmailAddr || fromEmail || process.env.SMTP_FROM || process.env.SMTP_USER || "";
        const sigHtml = buildSignatureHtml(senderName, senderEmailAddr);
        const sigText = buildSignatureText(senderName, senderEmailAddr);

        const result = await sendEmail({
            to,
            subject,
            text: body + sigText,
            html: body.replace(/\n/g, "<br>") + sigHtml,
            fromEmail,
            fromSmtpPass,
        });

        if (result.rejected && result.rejected.length > 0) {
            return NextResponse.json({ success: false, error: `Email rejected by server for: ${result.rejected.join(", ")}` }, { status: 422 });
        }

        const senderAddress = fromEmail || process.env.SMTP_FROM || process.env.SMTP_USER || "";

        // Resolve leadId: use explicit value, or fall back to looking up by recipient email
        let resolvedLeadId = leadId;
        if (!resolvedLeadId) {
            try {
                const { rows: matchRows } = await sql`
                    SELECT id FROM consultations WHERE LOWER(email) = LOWER(${to}) ORDER BY created_at DESC LIMIT 1
                `;
                if (matchRows.length > 0) resolvedLeadId = matchRows[0].id;
            } catch (e) { console.error("Lead lookup by email failed:", e); }
        }

        if (resolvedLeadId) {
            try {
                await sql`UPDATE consultations SET status = 'contacted', last_activity_at = NOW() WHERE id = ${resolvedLeadId}`;

                await sql`
                    INSERT INTO lead_emails (lead_id, message_id, direction, from_address, to_address, subject, body_text, body_html, sent_at)
                    VALUES (${resolvedLeadId}, ${result.messageId || null}, 'outbound', ${senderAddress}, ${to}, ${subject}, ${body}, ${body.replace(/\n/g, "<br>")}, NOW())
                `;

                await advanceCadence(parseInt(resolvedLeadId));
                await recalculateTemperature(parseInt(resolvedLeadId));
            } catch (err) {
                console.error("Failed to update lead after send:", err);
            }
        }

        return NextResponse.json({
            success: true,
            messageId: result.messageId,
            sentTo: to,
            sentFrom: senderAddress,
        });
    } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        const code = (err as { code?: string })?.code || "";
        console.error("Send email error:", code, msg);
        let userMessage = "Failed to send email. Please try again.";
        if (msg.includes("SMTP not configured")) {
            userMessage = "Email sending is not configured. Set your SMTP password in Settings, or contact your admin.";
        } else if (code === "EAUTH" || msg.includes("EAUTH") || msg.includes("authentication")) {
            userMessage = `SMTP authentication failed for ${fromEmail || "default account"}. Check your email password in Settings.`;
        } else if (code === "ESOCKET" || msg.includes("ESOCKET") || msg.includes("ECONNREFUSED")) {
            userMessage = "Could not connect to the email server. Please try again later.";
        }
        return NextResponse.json({ success: false, error: userMessage }, { status: 500 });
    }
}
