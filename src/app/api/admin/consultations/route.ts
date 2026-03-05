import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";

const SESSION_COOKIE = "ql_admin_session";
const SESSION_TOKEN = "quantlab_admin_authenticated_v1";

function isAuthed(req: NextRequest) {
    return req.cookies.get(SESSION_COOKIE)?.value === SESSION_TOKEN;
}

export async function GET(req: NextRequest) {
    if (!isAuthed(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await ensureMigrated();

    const { rows } = await sql`SELECT * FROM consultations ORDER BY created_at DESC`;
    return NextResponse.json(rows);
}
