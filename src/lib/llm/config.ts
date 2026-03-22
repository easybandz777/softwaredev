import { sql } from "@/lib/db";
import { decrypt } from "./crypto";
import type { LlmConfig } from "./types";

/**
 * Callers must ensure ensureMigrated() has been awaited before calling these functions.
 */
export async function resolveUserLlmConfig(userId: number): Promise<LlmConfig | null> {
  const { rows } = await sql`
    SELECT provider, model, api_key_encrypted
    FROM crm_user_llm_configs
    WHERE user_id = ${userId}
    LIMIT 1
  `;

  if (rows[0]?.api_key_encrypted) {
    try {
      const apiKey = decrypt(rows[0].api_key_encrypted as string);
      return {
        provider: (rows[0].provider as "openai" | "anthropic") || "openai",
        model: (rows[0].model as string) || "gpt-4o-mini",
        apiKey,
        source: "user",
      };
    } catch {
      return null;
    }
  }

  // Env fallback for backward compatibility during rollout
  const envKey = (process.env.OPENAI_API_KEY || "").trim();
  if (envKey) {
    return {
      provider: "openai",
      model: "gpt-4o-mini",
      apiKey: envKey,
      source: "env_fallback",
    };
  }

  return null;
}

export async function getUserLlmMeta(userId: number): Promise<{ has_llm_key: boolean; llm_provider: string | null; llm_model: string | null }> {
  const { rows } = await sql`
    SELECT provider, model, (api_key_encrypted IS NOT NULL AND api_key_encrypted != '') AS has_key
    FROM crm_user_llm_configs
    WHERE user_id = ${userId}
    LIMIT 1
  `;

  if (rows[0]?.has_key) {
    return {
      has_llm_key: true,
      llm_provider: rows[0].provider as string,
      llm_model: rows[0].model as string,
    };
  }

  const envKey = (process.env.OPENAI_API_KEY || "").trim();
  if (envKey) {
    return { has_llm_key: true, llm_provider: "openai (system)", llm_model: "gpt-4o-mini" };
  }

  return { has_llm_key: false, llm_provider: null, llm_model: null };
}
