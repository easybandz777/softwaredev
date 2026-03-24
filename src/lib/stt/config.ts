import { resolveUserLlmConfig } from "@/lib/llm/config";

/**
 * Resolve an OpenAI API key usable for speech-to-text.
 *
 * Priority:
 *  1. Dedicated STT key from env (OPENAI_STT_API_KEY)
 *  2. User's own LLM key if their provider is OpenAI
 *  3. Platform-level OPENAI_API_KEY env fallback
 *
 * This keeps transcription working even when a user chooses Anthropic
 * as their text-generation provider.
 */
export async function resolveSttApiKey(userId: number): Promise<string | null> {
  const dedicated = (process.env.OPENAI_STT_API_KEY || "").trim();
  if (dedicated) return dedicated;

  const llmConfig = await resolveUserLlmConfig(userId);
  if (llmConfig?.provider === "openai" && llmConfig.apiKey) {
    return llmConfig.apiKey;
  }

  const envKey = (process.env.OPENAI_API_KEY || "").trim();
  if (envKey) return envKey;

  return null;
}
