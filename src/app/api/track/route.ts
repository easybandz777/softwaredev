import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json().catch(() => ({}));
        const path = (body?.path as string) || "/";
        const referrer = (body?.referrer as string) || null;

        const ip =
            req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            req.headers.get("x-real-ip") ||
            null;
        const userAgent = req.headers.get("user-agent") || null;

        await ensureMigrated();

        await sql`
            INSERT INTO page_visits (ip, user_agent, referrer, path)
            VALUES (${ip}, ${userAgent}, ${referrer || null}, ${path})
        `;

        return NextResponse.json({ ok: true });
    } catch (err) {
        console.error("Visitor track error:", err);
        return NextResponse.json({ ok: false }, { status: 500 });
    }
}
