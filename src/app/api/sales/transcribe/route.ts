import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { toFile } from "openai/core/uploads";
import { requireAuth, getSessionUser } from "@/lib/auth";
import { resolveSttApiKey } from "@/lib/stt/config";

export const dynamic = "force-dynamic";

const MAX_SIZE = 10 * 1024 * 1024; // 10 MB

const ALLOWED_TYPES = new Set([
  "audio/webm",
  "audio/ogg",
  "audio/mp4",
  "audio/mpeg",
  "audio/wav",
  "audio/x-wav",
  "audio/flac",
]);

function isAllowedType(mime: string): boolean {
  const base = mime.split(";")[0].trim().toLowerCase();
  return ALLOWED_TYPES.has(base);
}

export async function POST(req: NextRequest) {
  const { error } = requireAuth(req, ["admin", "sales"]);
  if (error) return NextResponse.json({ error }, { status: 401 });

  const sessionUser = getSessionUser(req);
  if (!sessionUser) {
    return NextResponse.json({ error: "Session expired." }, { status: 401 });
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid request. Expected multipart form data." }, { status: 400 });
  }

  const file = formData.get("file") as File | null;
  if (!file || file.size === 0) {
    return NextResponse.json({ error: "No audio file provided." }, { status: 400 });
  }

  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: "Audio file too large (max 10 MB)." }, { status: 400 });
  }

  if (file.type && !isAllowedType(file.type)) {
    return NextResponse.json({ error: `Unsupported audio format: ${file.type}` }, { status: 400 });
  }

  const apiKey = await resolveSttApiKey(sessionUser.id);
  if (!apiKey) {
    return NextResponse.json({
      error: "No OpenAI API key available for transcription. Add one in Settings > API Integrations, or ask your admin to set OPENAI_API_KEY.",
    }, { status: 500 });
  }

  try {
    const client = new OpenAI({ apiKey });

    const arrayBuffer = await file.arrayBuffer();
    const transcription = await client.audio.transcriptions.create({
      file: await toFile(new Uint8Array(arrayBuffer), file.name || "recording.webm"),
      model: "whisper-1",
      language: "en",
    });

    const text = (transcription.text || "").trim();
    if (!text) {
      return NextResponse.json({ error: "No speech detected. Please try again." }, { status: 422 });
    }

    return NextResponse.json({ text });
  } catch (err) {
    console.error("Transcription error:", err);
    const msg = err instanceof Error ? err.message : "Transcription failed";
    if (msg.includes("Incorrect API key") || msg.includes("invalid_api_key")) {
      return NextResponse.json({ error: "OpenAI API key is invalid. Please update it in Settings." }, { status: 401 });
    }
    return NextResponse.json({ error: "Transcription failed. Please try again." }, { status: 500 });
  }
}
