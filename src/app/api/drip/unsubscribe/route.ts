import { NextRequest, NextResponse } from "next/server";
import { unsubscribeByEmail, verifyUnsubToken } from "@/lib/drip";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function pageHtml(opts: { title: string; heading: string; message: string }): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${opts.title}</title>
<style>
body { margin:0; padding:48px 24px; background:#f8fafc; color:#0f172a; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif; }
.card { max-width:480px; margin:48px auto; background:#fff; border:1px solid #e2e8f0; border-radius:12px; padding:32px; box-shadow:0 1px 2px rgba(0,0,0,0.05); }
h1 { font-size:24px; margin:0 0 12px; color:#0f172a; }
p { font-size:15px; line-height:1.6; color:#475569; margin:0 0 12px; }
a { color:#4f46e5; }
.brand { font-size:13px; letter-spacing:0.08em; font-weight:600; color:#4f46e5; text-transform:uppercase; margin-bottom:16px; }
</style>
</head>
<body>
<div class="card">
<div class="brand">QuantLab USA</div>
<h1>${opts.heading}</h1>
<p>${opts.message}</p>
<p><a href="https://quantlabusa.dev">Return to quantlabusa.dev</a></p>
</div>
</body>
</html>`;
}

async function handle(request: NextRequest): Promise<NextResponse> {
    const token = request.nextUrl.searchParams.get("token") || "";
    const verified = verifyUnsubToken(token);

    if (!verified) {
        const html = pageHtml({
            title: "Invalid unsubscribe link — QuantLab USA",
            heading: "This unsubscribe link is invalid or expired",
            message: "If you want to be removed from the list, reply to any email with the word \"stop\" and you will be removed within one business day.",
        });
        return new NextResponse(html, {
            status: 400,
            headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
        });
    }

    try {
        const updated = await unsubscribeByEmail(verified.email);
        const html = pageHtml({
            title: "Unsubscribed — QuantLab USA",
            heading: "You are unsubscribed",
            message: updated > 0
                ? `We removed ${verified.email} from the QuantLab USA nurture sequence. You will not receive further drip emails. Transactional emails (proposals, invoices, account messages) are unaffected.`
                : `We have ${verified.email} marked as unsubscribed. No further drip emails will be sent.`,
        });
        return new NextResponse(html, {
            status: 200,
            headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
        });
    } catch (err) {
        console.error("[drip:unsubscribe] failed:", err);
        const html = pageHtml({
            title: "Unsubscribe error — QuantLab USA",
            heading: "Something went wrong",
            message: "We could not process this unsubscribe automatically. Reply to any email with the word \"stop\" and you will be removed within one business day.",
        });
        return new NextResponse(html, {
            status: 500,
            headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" },
        });
    }
}

export async function GET(request: NextRequest): Promise<NextResponse> {
    return handle(request);
}

export async function POST(request: NextRequest): Promise<NextResponse> {
    return handle(request);
}
