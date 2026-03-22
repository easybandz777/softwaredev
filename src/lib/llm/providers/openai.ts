import OpenAI from "openai";
import type { LlmConfig, LlmTextRequest, LlmJsonRequest, LlmResponse } from "../types";

export async function generateTextOpenAI(config: LlmConfig, req: LlmTextRequest): Promise<LlmResponse> {
  const client = new OpenAI({ apiKey: config.apiKey });
  const response = await client.chat.completions.create({
    model: config.model,
    messages: [
      { role: "system", content: req.systemPrompt },
      { role: "user", content: req.userPrompt },
    ],
    temperature: req.temperature ?? 0.75,
    max_tokens: req.maxTokens ?? 500,
  });

  return {
    content: response.choices[0].message.content || "",
    usage: {
      inputTokens: response.usage?.prompt_tokens ?? 0,
      outputTokens: response.usage?.completion_tokens ?? 0,
      totalTokens: response.usage?.total_tokens ?? 0,
    },
    provider: "openai",
    model: config.model,
  };
}

export async function generateJsonOpenAI(config: LlmConfig, req: LlmJsonRequest): Promise<LlmResponse> {
  const client = new OpenAI({ apiKey: config.apiKey });
  const response = await client.chat.completions.create({
    model: config.model,
    messages: [{ role: "user", content: req.prompt }],
    temperature: req.temperature ?? 0.7,
    response_format: { type: "json_object" },
    max_tokens: req.maxTokens ?? 2000,
  });

  return {
    content: response.choices[0].message.content || "{}",
    usage: {
      inputTokens: response.usage?.prompt_tokens ?? 0,
      outputTokens: response.usage?.completion_tokens ?? 0,
      totalTokens: response.usage?.total_tokens ?? 0,
    },
    provider: "openai",
    model: config.model,
  };
}
