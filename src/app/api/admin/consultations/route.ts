import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { getSessionUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

function isAuthed(req: NextRequest) {
    const user = getSessionUser(req);
    return !!user;
}

export async function GET(req: NextRequest) {
    if (!isAuthed(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await ensureMigrated();

    const { rows } = await sql`SELECT * FROM consultations ORDER BY created_at DESC`;
    return NextResponse.json(rows);
}
