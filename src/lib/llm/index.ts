import type { LlmConfig, LlmTextRequest, LlmJsonRequest, LlmResponse } from "./types";
import { generateTextOpenAI, generateJsonOpenAI } from "./providers/openai";
import { generateTextAnthropic, generateJsonAnthropic } from "./providers/anthropic";

export type { LlmConfig, LlmTextRequest, LlmJsonRequest, LlmResponse, LlmProvider } from "./types";
export { PROVIDER_MODELS } from "./types";
export { resolveUserLlmConfig, getUserLlmMeta } from "./config";
export { encrypt, decrypt } from "./crypto";

export async function generateText(config: LlmConfig, req: LlmTextRequest): Promise<LlmResponse> {
  switch (config.provider) {
    case "anthropic":
      return generateTextAnthropic(config, req);
    case "openai":
    default:
      return generateTextOpenAI(config, req);
  }
}

export async function generateJson(config: LlmConfig, req: LlmJsonRequest): Promise<LlmResponse> {
  switch (config.provider) {
    case "anthropic":
      return generateJsonAnthropic(config, req);
    case "openai":
    default:
      return generateJsonOpenAI(config, req);
  }
}
