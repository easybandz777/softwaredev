import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { sql, ensureMigrated } from "@/lib/db";

const NOTIFICATION_EMAIL = "beltz@quantlabusa.dev";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, phone, company, service, project_type, budget, timeline, message, referral } = body;

        if (!name || !email || !service || !message) {
            return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
        }

        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRe.test(email)) {
            return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
        }

        await ensureMigrated();

        const { rows } = await sql`
            INSERT INTO consultations (name, email, phone, company, service, project_type, budget, timeline, message, referral)
            VALUES (
                ${name.trim()},
                ${email.trim()},
                ${phone?.trim() || null},
                ${company?.trim() || null},
                ${service},
                ${project_type || null},
                ${budget || null},
                ${timeline || null},
                ${message.trim()},
                ${referral?.trim() || null}
            )
            RETURNING id
        `;

        // ── Send email notification ──────────────────────────────────
        if (process.env.RESEND_API_KEY) {
            try {
                const resend = new Resend(process.env.RESEND_API_KEY);
                await resend.emails.send({
                    from: "QuantLab Inquiries <onboarding@resend.dev>",
                    to: NOTIFICATION_EMAIL,
                    subject: `New Consultation Inquiry from ${name.trim()}`,
                    html: `
                        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0a0f1e;color:#e5e7eb;border-radius:12px;">
                            <h2 style="color:#38bdf8;margin-top:0;">New Consultation Request</h2>
                            <table style="width:100%;border-collapse:collapse;">
                                <tr><td style="padding:8px 12px;color:#9ca3af;width:120px;">Name</td><td style="padding:8px 12px;color:#fff;">${name.trim()}</td></tr>
                                <tr><td style="padding:8px 12px;color:#9ca3af;">Email</td><td style="padding:8px 12px;color:#fff;"><a href="mailto:${email.trim()}" style="color:#38bdf8;">${email.trim()}</a></td></tr>
                                ${phone ? `<tr><td style="padding:8px 12px;color:#9ca3af;">Phone</td><td style="padding:8px 12px;color:#fff;">${phone.trim()}</td></tr>` : ""}
                                ${company ? `<tr><td style="padding:8px 12px;color:#9ca3af;">Company</td><td style="padding:8px 12px;color:#fff;">${company.trim()}</td></tr>` : ""}
                                <tr><td style="padding:8px 12px;color:#9ca3af;">Service</td><td style="padding:8px 12px;color:#fff;">${service}</td></tr>
                                ${project_type ? `<tr><td style="padding:8px 12px;color:#9ca3af;">Project Type</td><td style="padding:8px 12px;color:#fff;">${project_type}</td></tr>` : ""}
                                ${budget ? `<tr><td style="padding:8px 12px;color:#9ca3af;">Budget</td><td style="padding:8px 12px;color:#fff;">${budget}</td></tr>` : ""}
                                ${timeline ? `<tr><td style="padding:8px 12px;color:#9ca3af;">Timeline</td><td style="padding:8px 12px;color:#fff;">${timeline}</td></tr>` : ""}
                                ${referral ? `<tr><td style="padding:8px 12px;color:#9ca3af;">Referral</td><td style="padding:8px 12px;color:#fff;">${referral.trim()}</td></tr>` : ""}
                            </table>
                            <div style="margin-top:16px;padding:16px;background:rgba(255,255,255,0.05);border-radius:8px;">
                                <p style="color:#9ca3af;margin:0 0 8px;font-size:13px;">Message</p>
                                <p style="color:#fff;margin:0;white-space:pre-wrap;">${message.trim()}</p>
                            </div>
                            <p style="margin-top:20px;font-size:12px;color:#6b7280;">Consultation #${rows[0].id} • Submitted ${new Date().toLocaleString("en-US", { timeZone: "America/New_York" })}</p>
                        </div>
                    `,
                });
            } catch (emailErr) {
                console.warn("Email notification failed (consultation still saved):", emailErr);
            }
        }

        return NextResponse.json({ id: rows[0].id }, { status: 201 });
    } catch (err) {
        console.error("Consultation submit error:", err);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}
