import { NextRequest } from "next/server";
import { sql, ensureMigrated } from "@/lib/db";
import type { User } from "@/lib/db";

export const SESSION_COOKIE = "ql_session";
export const SESSION_PREFIX = "ql_auth_";

/**
 * Encode user info into a session token.
 * Format: ql_auth_<id>_<role>_<username>
 */
export function createSessionToken(user: { id: number; role: string; username: string }): string {
    return `${SESSION_PREFIX}${user.id}_${user.role}_${user.username}`;
}

/**
 * Parse session token back into user info.
 */
export function parseSessionToken(token: string): { id: number; role: string; username: string } | null {
    if (!token.startsWith(SESSION_PREFIX)) return null;
    const parts = token.slice(SESSION_PREFIX.length).split("_");
    if (parts.length < 3) return null;
    const id = parseInt(parts[0], 10);
    const role = parts[1];
    const username = parts.slice(2).join("_");
    if (isNaN(id)) return null;
    return { id, role, username };
}

/**
 * Resolve the real DB id for the legacy admin token so that per-user
 * features (SMTP, LLM config, etc.) work correctly for Beltz even
 * when using the old cookie.
 */
let legacyBeltzId: number | null = null;
async function resolveLegacyBeltzId(): Promise<number> {
    if (legacyBeltzId !== null) return legacyBeltzId;
    try {
        await ensureMigrated();
        const { rows } = await sql`SELECT id FROM crm_users WHERE username = 'beltz' LIMIT 1`;
        legacyBeltzId = (rows[0] as { id: number } | undefined)?.id ?? 0;
    } catch {
        legacyBeltzId = 0;
    }
    return legacyBeltzId;
}

/**
 * Check if user is authenticated and optionally check role.
 */
export function getSessionUser(req: NextRequest): { id: number; role: string; username: string } | null {
    const token = req.cookies.get(SESSION_COOKIE)?.value;
    if (!token) return null;

    // Support legacy admin token — resolve real DB id lazily
    if (token === "quantlab_admin_authenticated_v1") {
        return { id: legacyBeltzId ?? 0, role: "admin", username: "beltz" };
    }

    return parseSessionToken(token);
}

/**
 * Ensure legacy admin session has a real DB id before any DB-dependent
 * operations. Call once early in request handlers that need per-user data.
 */
export async function ensureLegacyResolved(): Promise<void> {
    if (legacyBeltzId === null) await resolveLegacyBeltzId();
}

/**
 * Quick auth guard — returns null if authed, or an error response if not.
 */
export function requireAuth(req: NextRequest, allowedRoles?: string[]) {
    const user = getSessionUser(req);
    if (!user) return { error: "Unauthorized", user: null as never };
    if (allowedRoles && !allowedRoles.includes(user.role)) {
        return { error: "Forbidden", user: null as never };
    }
    return { error: null, user };
}

/**
 * Look up full user record from DB by id.
 */
export async function getFullUser(id: number): Promise<User | null> {
    await ensureMigrated();
    const { rows } = await sql`SELECT * FROM crm_users WHERE id = ${id} LIMIT 1`;
    return (rows[0] as User) ?? null;
}
