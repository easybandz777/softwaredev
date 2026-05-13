import { NextRequest, NextResponse } from "next/server";
import { unsubscribe } from "@/lib/newsletter";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function pageHtml(opts: {
    title: string;
    heading: string;
    message: string;
}): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${opts.title}</title>
<style>
body { margin:0; padding:48px 24px; background:#f8fafc; color:#0f172a; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif; }
.card { max-width:520px; margin:48px auto; background:#fff; border:1px solid #e2e8f0; border-radius:12px; padding:32px; box-shadow:0 1px 2px rgba(0,0,0,0.05); }
h1 { font-size:24px; margin:0 0 12px; color:#0f172a; }
p { font-size:15px; line-height:1.6; color:#475569; margin:0 0 12px; }
a { color:#4f46e5; }
.brand { font-size:12px; letter-spacing:0.12em; font-weight:700; color:#4f46e5; text-transform:uppercase; margin-bottom:16px; }
</style>
</head>
<body>
<div class="card">
<div class="brand">QUANT LAB USA</div>
<h1>${opts.heading}</h1>
<p>${opts.message}</p>
<p><a href="https://quantlabusa.dev">Return to quantlabusa.dev</a></p>
</div>
</body>
</html>`;
}

async function handle(request: NextRequest): Promise<NextResponse> {
    const token = request.nextUrl.searchParams.get("token") || "";
    const result = await unsubscribe(token);
    if (!result.ok) {
        return new NextResponse(
            pageHtml({
                title: "Unsubscribe failed — QUANT LAB USA",
                heading: "This unsubscribe link is invalid or expired",
                message:
                    result.error ||
                    'If you want off the list, reply to any newsletter with the word "stop" and we will remove you within one business day.',
            }),
            {
                status: 400,
                headers: {
                    "Content-Type": "text/html; charset=utf-8",
                    "Cache-Control": "no-store",
                },
            },
        );
    }
    return new NextResponse(
        pageHtml({
            title: "Unsubscribed — QUANT LAB USA",
            heading: "You're unsubscribed.",
            message: `${result.email} is removed from the QUANT LAB USA newsletter list. You will not receive further issues. Transactional emails (proposals, invoices) are unaffected.`,
        }),
        {
            status: 200,
            headers: {
                "Content-Type": "text/html; charset=utf-8",
                "Cache-Control": "no-store",
            },
        },
    );
}

export async function GET(request: NextRequest): Promise<NextResponse> {
    return handle(request);
}
export async function POST(request: NextRequest): Promise<NextResponse> {
    return handle(request);
}
