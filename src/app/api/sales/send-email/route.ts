import { NextRequest, NextResponse } from "next/server";
import { requireAuth } from "@/lib/auth";
import { sendEmail } from "@/lib/mailer";
import { sql, ensureMigrated } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    try {
        const { to, subject, body, leadId } = await req.json();

        if (!to || !subject || !body) {
            return NextResponse.json({ success: false, error: "Email address, subject, and body are required." }, { status: 400 });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(to)) {
            return NextResponse.json({ success: false, error: "Invalid email address." }, { status: 400 });
        }

        const result = await sendEmail({
            to,
            subject,
            text: body,
            html: body.replace(/\n/g, "<br>"),
        });

        if (result.rejected && result.rejected.length > 0) {
            return NextResponse.json({ success: false, error: `Email rejected by server for: ${result.rejected.join(", ")}` }, { status: 422 });
        }

        if (leadId) {
            try {
                await ensureMigrated();
                await sql`UPDATE consultations SET status = 'contacted', last_activity_at = NOW() WHERE id = ${leadId}`;
            } catch (err) {
                console.error("Failed to update lead stage after send:", err);
            }
        }

        return NextResponse.json({ success: true, messageId: result.messageId, sentTo: to });
    } catch (err: unknown) {
        console.error("Send email error:", err);
        const msg = err instanceof Error ? err.message : "";
        let userMessage = "Failed to send email. Please try again.";
        if (msg.includes("SMTP not configured")) {
            userMessage = "Email sending is not configured. Contact your admin to set up SMTP credentials.";
        }
        return NextResponse.json({ success: false, error: userMessage }, { status: 500 });
    }
}
