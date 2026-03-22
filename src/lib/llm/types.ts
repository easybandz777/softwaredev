export type LlmProvider = "openai" | "anthropic";

export interface LlmConfig {
  provider: LlmProvider;
  model: string;
  apiKey: string;
  source: "user" | "env_fallback";
}

export interface LlmTextRequest {
  systemPrompt: string;
  userPrompt: string;
  temperature?: number;
  maxTokens?: number;
}

export interface LlmJsonRequest {
  prompt: string;
  temperature?: number;
  maxTokens?: number;
}

export interface LlmResponse {
  content: string;
  usage: {
    inputTokens: number;
    outputTokens: number;
    totalTokens: number;
  };
  provider: LlmProvider;
  model: string;
}

export const PROVIDER_MODELS: Record<LlmProvider, { default: string; options: string[] }> = {
  openai: {
    default: "gpt-4o-mini",
    options: ["gpt-4o-mini", "gpt-4o", "gpt-4.1-mini", "gpt-4.1-nano"],
  },
  anthropic: {
    default: "claude-sonnet-4-20250514",
    options: ["claude-sonnet-4-20250514", "claude-3-5-haiku-20241022"],
  },
};
