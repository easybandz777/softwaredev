import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import { SESSION_COOKIE, createSessionToken } from "@/lib/auth";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { username, password } = body;
        console.log("[LOGIN DEBUG] Received body keys:", Object.keys(body));
        console.log("[LOGIN DEBUG] username:", JSON.stringify(username), "length:", username?.length);
        console.log("[LOGIN DEBUG] password:", JSON.stringify(password), "length:", password?.length);
        
        if (!username || !password) {
            return NextResponse.json({ error: "Missing credentials." }, { status: 400 });
        }

        await ensureMigrated();

        const { rows } = await sql`SELECT * FROM crm_users WHERE username = ${username.trim()} LIMIT 1`;
        const user = rows[0] as { id: number; username: string; password_hash: string; role: string; full_name: string } | undefined;

        console.log("[LOGIN DEBUG] User found:", !!user, "username queried:", JSON.stringify(username.trim()));
        
        if (!user) {
            return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
        }
        
        const passwordMatch = bcrypt.compareSync(password.trim(), user.password_hash);
        console.log("[LOGIN DEBUG] Password match:", passwordMatch);
        
        if (!passwordMatch) {
            return NextResponse.json({ error: "Invalid username or password." }, { status: 401 });
        }

        const token = createSessionToken({ id: user.id, role: user.role, username: user.username });

        const res = NextResponse.json({
            success: true,
            user: { id: user.id, username: user.username, role: user.role, full_name: user.full_name },
        });
        const isProduction = process.env.NODE_ENV === "production";
        res.cookies.set(SESSION_COOKIE, token, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 8, // 8 hours
            sameSite: "lax",
            secure: isProduction,
        });
        return res;
    } catch (err) {
        console.error("Login error:", err);
        return NextResponse.json({ error: "Internal server error." }, { status: 500 });
    }
}

export async function DELETE() {
    const res = NextResponse.json({ success: true });
    res.cookies.set(SESSION_COOKIE, "", { maxAge: 0, path: "/" });
    // Also clear legacy cookie
    res.cookies.set("ql_admin_session", "", { maxAge: 0, path: "/" });
    return res;
}
