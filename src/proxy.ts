import { NextRequest, NextResponse } from "next/server";

const SESSION_COOKIE = "ql_admin_session";
const SESSION_TOKEN = "quantlab_admin_authenticated_v1";

export function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/admin/dashboard")) {
        const token = req.cookies.get(SESSION_COOKIE)?.value;
        if (token !== SESSION_TOKEN) {
            return NextResponse.redirect(new URL("/admin", req.url));
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/dashboard/:path*"],
};
