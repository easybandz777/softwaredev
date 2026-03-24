import { NextRequest, NextResponse } from "next/server";
import { requireAuth, getSessionUser } from "@/lib/auth";
import { sql, ensureMigrated } from "@/lib/db";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
    const { error } = requireAuth(req, ["admin", "sales"]);
    if (error) return NextResponse.json({ error }, { status: 401 });

    await ensureMigrated();

    const sessionUser = getSessionUser(req);
    if (!sessionUser) return NextResponse.json({ error: "no session" }, { status: 401 });

    const { rows } = await sql`SELECT id, username, email, smtp_pass FROM crm_users WHERE id = ${sessionUser.id} LIMIT 1`;
    const dbUser = rows[0];

    const smtpUser = dbUser?.email || process.env.SMTP_USER || "";
    const smtpPass = dbUser?.smtp_pass || process.env.SMTP_PASS || "";
    const host = process.env.SMTP_HOST || "";
    const port = Number(process.env.SMTP_PORT) || 465;

    const info = {
        sessionUser,
        dbEmail: dbUser?.email || null,
        hasSmtpPass: !!dbUser?.smtp_pass,
        smtpHost: host,
        smtpPort: port,
        smtpUser,
    };

    try {
        const t = nodemailer.createTransport({
            host, port, secure: port === 465,
            auth: { user: smtpUser, pass: smtpPass },
            tls: { rejectUnauthorized: false },
            connectionTimeout: 10000,
            greetingTimeout: 10000,
        });
        await t.verify();
        return NextResponse.json({ ...info, smtp: "OK" });
    } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err);
        const code = (err as { code?: string })?.code || "";
        const cmd = (err as { command?: string })?.command || "";
        return NextResponse.json({ ...info, smtp: "FAIL", code, command: cmd, message: msg });
    }
}
