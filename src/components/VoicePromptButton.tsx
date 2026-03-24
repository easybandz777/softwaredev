"use client";

import React from "react";
import { Mic, MicOff, Loader2, X } from "lucide-react";
import { useVoiceTranscription, type VoiceState } from "@/hooks/useVoiceTranscription";

interface VoicePromptButtonProps {
  onTranscript: (text: string) => void;
  disabled?: boolean;
  className?: string;
  size?: "sm" | "md";
}

const stateConfig: Record<VoiceState, { label: string; bg: string; border: string; text: string; pulse: boolean }> = {
  idle: {
    label: "Voice input",
    bg: "rgba(255,255,255,0.03)",
    border: "rgba(255,255,255,0.1)",
    text: "#9ca3af",
    pulse: false,
  },
  recording: {
    label: "Listening... click to stop",
    bg: "rgba(239,68,68,0.12)",
    border: "rgba(239,68,68,0.4)",
    text: "#f87171",
    pulse: true,
  },
  transcribing: {
    label: "Transcribing...",
    bg: "rgba(99,102,241,0.1)",
    border: "rgba(99,102,241,0.3)",
    text: "#818cf8",
    pulse: false,
  },
  error: {
    label: "Try again",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.3)",
    text: "#fbbf24",
    pulse: false,
  },
};

export function VoicePromptButton({ onTranscript, disabled, className = "", size = "sm" }: VoicePromptButtonProps) {
  const { state, errorMsg, toggle, dismissError } = useVoiceTranscription({ onTranscript });

  const cfg = stateConfig[state];
  const isWorking = state === "transcribing";
  const iconSize = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  const pad = size === "sm" ? "p-1.5" : "p-2";

  return (
    <div className={"relative inline-flex items-center " + className}>
      <button
        type="button"
        onClick={() => {
          if (state === "error") dismissError();
          toggle();
        }}
        disabled={disabled || isWorking}
        title={cfg.label}
        className={`${pad} rounded-lg transition-all disabled:opacity-40 flex items-center justify-center`}
        style={{
          background: cfg.bg,
          border: `1px solid ${cfg.border}`,
          color: cfg.text,
        }}
      >
        {isWorking ? (
          <Loader2 className={`${iconSize} animate-spin`} />
        ) : state === "recording" ? (
          <MicOff className={iconSize} />
        ) : (
          <Mic className={iconSize} />
        )}
        {cfg.pulse && (
          <span
            className="absolute inset-0 rounded-lg animate-ping pointer-events-none"
            style={{ border: `1px solid ${cfg.border}`, opacity: 0.4 }}
          />
        )}
      </button>

      {state === "error" && errorMsg && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap z-30">
          <div
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-[10px] font-medium shadow-lg"
            style={{
              background: "#1a1520",
              border: "1px solid rgba(245,158,11,0.25)",
              color: "#fbbf24",
            }}
          >
            {errorMsg}
            <button onClick={dismissError} className="ml-1 hover:opacity-70">
              <X className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
