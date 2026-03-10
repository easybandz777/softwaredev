import { NextRequest, NextResponse } from "next/server";

/** Proxy /api/activate → quantlabusa.com */
export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const response = await fetch("https://quantlabusa.com/api/activate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        return NextResponse.json(data, { status: response.status });
    } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        return NextResponse.json({ error: "Proxy error", message }, { status: 500 });
    }
}
