import { NextRequest, NextResponse } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import bcrypt from "bcryptjs";

/**
 * Temporary diagnostic & password-reset endpoint.
 * GET  → check if beltz exists and whether "gold" matches the stored hash
 * POST → force-reset beltz password to "gold"
 */

export async function GET() {
    try {
        await ensureMigrated();

        const { rows } = await sql`SELECT id, username, password_hash, role FROM crm_users WHERE username = 'beltz' LIMIT 1`;
        if (!rows[0]) {
            return NextResponse.json({ error: "User beltz not found in DB", rowCount: rows.length });
        }

        const user = rows[0] as { id: number; username: string; password_hash: string; role: string };
        const matches = bcrypt.compareSync("gold", user.password_hash);

        return NextResponse.json({
            found: true,
            userId: user.id,
            username: user.username,
            role: user.role,
            hashPrefix: user.password_hash.substring(0, 20) + "...",
            passwordGoldMatches: matches,
        });
    } catch (err) {
        return NextResponse.json({ error: String(err) }, { status: 500 });
    }
}

export async function POST() {
    try {
        await ensureMigrated();

        const newHash = bcrypt.hashSync("gold", 10);
        await sql`UPDATE crm_users SET password_hash = ${newHash} WHERE username = 'beltz'`;

        // Verify it worked
        const { rows } = await sql`SELECT password_hash FROM crm_users WHERE username = 'beltz' LIMIT 1`;
        const stored = (rows[0] as { password_hash: string })?.password_hash;
        const matches = stored ? bcrypt.compareSync("gold", stored) : false;

        return NextResponse.json({
            success: true,
            passwordReset: true,
            verifyMatches: matches,
        });
    } catch (err) {
        return NextResponse.json({ error: String(err) }, { status: 500 });
    }
}
