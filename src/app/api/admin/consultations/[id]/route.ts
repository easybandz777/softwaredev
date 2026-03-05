import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";

const SESSION_COOKIE = "ql_admin_session";
const SESSION_TOKEN = "quantlab_admin_authenticated_v1";

function isAuthed(req: NextRequest) {
    return req.cookies.get(SESSION_COOKIE)?.value === SESSION_TOKEN;
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    if (!isAuthed(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const { id } = await params;
    const { status } = await req.json();

    const valid = ["new", "reviewed", "closed"];
    if (!valid.includes(status)) {
        return NextResponse.json({ error: "Invalid status." }, { status: 400 });
    }

    await ensureMigrated();
    await sql`UPDATE consultations SET status = ${status} WHERE id = ${id}`;
    return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    if (!isAuthed(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const { id } = await params;
    await ensureMigrated();
    await sql`DELETE FROM consultations WHERE id = ${id}`;
    return NextResponse.json({ success: true });
}
