import Anthropic from "@anthropic-ai/sdk";
import type { LlmConfig, LlmTextRequest, LlmJsonRequest, LlmResponse } from "../types";

export async function generateTextAnthropic(config: LlmConfig, req: LlmTextRequest): Promise<LlmResponse> {
  const client = new Anthropic({ apiKey: config.apiKey });
  const response = await client.messages.create({
    model: config.model,
    max_tokens: req.maxTokens ?? 500,
    system: req.systemPrompt,
    messages: [{ role: "user", content: req.userPrompt }],
    temperature: req.temperature ?? 0.75,
  });

  const text = response.content.filter((b) => b.type === "text").map((b) => b.text).join("");

  return {
    content: text,
    usage: {
      inputTokens: response.usage.input_tokens,
      outputTokens: response.usage.output_tokens,
      totalTokens: response.usage.input_tokens + response.usage.output_tokens,
    },
    provider: "anthropic",
    model: config.model,
  };
}

export async function generateJsonAnthropic(config: LlmConfig, req: LlmJsonRequest): Promise<LlmResponse> {
  const client = new Anthropic({ apiKey: config.apiKey });

  const jsonPrompt = `${req.prompt}\n\nIMPORTANT: Return ONLY valid JSON with no additional text, no markdown, no code fences.`;

  const response = await client.messages.create({
    model: config.model,
    max_tokens: req.maxTokens ?? 2000,
    messages: [{ role: "user", content: jsonPrompt }],
    temperature: req.temperature ?? 0.7,
  });

  let text = response.content.filter((b) => b.type === "text").map((b) => b.text).join("");

  // Strip markdown code fences if present
  text = text.replace(/^```(?:json)?\s*\n?/i, "").replace(/\n?```\s*$/i, "").trim();

  return {
    content: text || "{}",
    usage: {
      inputTokens: response.usage.input_tokens,
      outputTokens: response.usage.output_tokens,
      totalTokens: response.usage.input_tokens + response.usage.output_tokens,
    },
    provider: "anthropic",
    model: config.model,
  };
}
