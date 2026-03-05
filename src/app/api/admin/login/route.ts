import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import bcrypt from "bcryptjs";

const SESSION_COOKIE = "ql_admin_session";
const SESSION_TOKEN = "quantlab_admin_authenticated_v1";

export async function POST(req: NextRequest) {
    try {
        const { username, password } = await req.json();
        if (!username || !password) {
            return NextResponse.json({ error: "Missing credentials." }, { status: 400 });
        }

        await ensureMigrated();

        const { rows } = await sql`SELECT * FROM admin_users WHERE username = ${username} LIMIT 1`;
        const user = rows[0] as { id: number; username: string; password_hash: string } | undefined;

        if (!user || !bcrypt.compareSync(password, user.password_hash)) {
            return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
        }

        const res = NextResponse.json({ success: true });
        res.cookies.set(SESSION_COOKIE, SESSION_TOKEN, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 8, // 8 hours
            sameSite: "strict",
        });
        return res;
    } catch (err) {
        console.error("Admin login error:", err);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}

export async function DELETE() {
    const res = NextResponse.json({ success: true });
    res.cookies.set("ql_admin_session", "", { maxAge: 0, path: "/" });
    return res;
}
