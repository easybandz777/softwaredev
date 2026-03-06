import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";

export const dynamic = "force-dynamic";

const SESSION_COOKIE = "ql_admin_session";
const SESSION_TOKEN = "quantlab_admin_authenticated_v1";

function isAuthed(req: NextRequest) {
    return req.cookies.get(SESSION_COOKIE)?.value === SESSION_TOKEN;
}

export async function GET(req: NextRequest) {
    if (!isAuthed(req)) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await ensureMigrated();

    const { rows } = await sql`
        SELECT id, ip, user_agent, referrer, path, created_at
        FROM page_visits
        ORDER BY created_at DESC
        LIMIT 500
    `;

    return NextResponse.json(rows);
}
