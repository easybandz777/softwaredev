import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, parseSessionToken } from "@/lib/auth";

const SECURITY_HEADERS: Record<string, string> = {
    "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy":
        "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(self \"https://js.stripe.com\"), usb=(), interest-cohort=()",
    "X-DNS-Prefetch-Control": "on",
    "X-Permitted-Cross-Domain-Policies": "none",
};

const PRESERVE_CASE_PREFIXES = ["/api", "/_next", "/static"];

const PRESERVE_CASE_FILENAMES = new Set([
    "/robots.txt",
    "/sitemap.xml",
    "/feed.xml",
    "/llms.txt",
    "/manifest.json",
    "/favicon.ico",
    "/sw.js",
]);

function shouldPreservePath(pathname: string): boolean {
    if (PRESERVE_CASE_FILENAMES.has(pathname)) return true;
    for (const prefix of PRESERVE_CASE_PREFIXES) {
        if (pathname === prefix || pathname.startsWith(`${prefix}/`)) return true;
    }
    return false;
}

function applySecurityHeaders(response: NextResponse): NextResponse {
    for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
        response.headers.set(name, value);
    }
    return response;
}

export function proxy(req: NextRequest) {
    const url = req.nextUrl.clone();
    const { pathname } = url;

    if (pathname.startsWith("/admin/dashboard")) {
        const token = req.cookies.get(SESSION_COOKIE)?.value;
        const isLegacy = token === "quantlab_admin_authenticated_v1";
        const parsed = token ? parseSessionToken(token) : null;
        if (!isLegacy && !parsed) {
            return applySecurityHeaders(NextResponse.redirect(new URL("/admin", req.url)));
        }
        return applySecurityHeaders(NextResponse.next());
    }

    if (shouldPreservePath(pathname)) {
        return applySecurityHeaders(NextResponse.next());
    }

    const hasFileExtension = /\.[a-zA-Z0-9]{1,8}$/.test(pathname);
    let normalized = pathname;
    let mutated = false;

    if (!hasFileExtension && normalized.length > 1 && normalized.endsWith("/")) {
        normalized = normalized.replace(/\/+$/, "");
        mutated = true;
    }

    const lowercased = normalized.toLowerCase();
    if (lowercased !== normalized) {
        normalized = lowercased;
        mutated = true;
    }

    if (mutated) {
        url.pathname = normalized || "/";
        return applySecurityHeaders(NextResponse.redirect(url, 308));
    }

    return applySecurityHeaders(NextResponse.next());
}

export const config = {
    matcher: [
        "/((?!api/|_next/|_vercel/|static/|favicon.ico|robots.txt|sitemap.xml|feed.xml|llms.txt|manifest.json|sw.js|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|css|js|woff2|woff|ttf|map|txt|xml|pdf|json)$).*)",
    ],
};
