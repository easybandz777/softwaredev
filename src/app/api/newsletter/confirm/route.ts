import { NextRequest, NextResponse } from "next/server";
import { confirmSubscription } from "@/lib/newsletter";

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
.cta { display:inline-block; margin-top:8px; padding:12px 24px; background:#4f46e5; color:#fff; text-decoration:none; border-radius:8px; font-weight:600; }
</style>
</head>
<body>
<div class="card">
<div class="brand">QUANT LAB USA</div>
<h1>${opts.heading}</h1>
<p>${opts.message}</p>
<a class="cta" href="https://quantlabusa.dev/newsroom">Read past issues</a>
<p style="margin-top:24px;font-size:13px;color:#94a3b8;"><a href="https://quantlabusa.dev">Return to quantlabusa.dev</a></p>
</div>
</body>
</html>`;
}

export async function GET(request: NextRequest): Promise<NextResponse> {
    const token = request.nextUrl.searchParams.get("token") || "";
    const result = await confirmSubscription(token);
    if (!result.ok) {
        return new NextResponse(
            pageHtml({
                title: "Confirmation failed — QUANT LAB USA",
                heading: "We couldn't confirm that link",
                message:
                    result.error ||
                    "The link may be invalid or expired. Try subscribing again from the newsletter page.",
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
            title: "Confirmed — QUANT LAB USA newsletter",
            heading: "You're confirmed.",
            message: `${result.email} is now on the QUANT LAB USA newsletter list. The next issue lands the upcoming Tuesday. A welcome message is on its way to your inbox.`,
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
