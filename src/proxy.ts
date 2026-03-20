import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, parseSessionToken } from "@/lib/auth";

export function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/admin/dashboard")) {
        const token = req.cookies.get(SESSION_COOKIE)?.value;

        // Support both legacy and new session tokens
        const isLegacy = token === "quantlab_admin_authenticated_v1";
        const parsed = token ? parseSessionToken(token) : null;

        if (!isLegacy && !parsed) {
            return NextResponse.redirect(new URL("/admin", req.url));
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/dashboard/:path*"],
};
