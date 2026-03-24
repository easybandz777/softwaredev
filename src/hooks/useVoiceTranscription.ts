"use client";

import { useState, useRef, useCallback, useEffect } from "react";

export type VoiceState = "idle" | "recording" | "transcribing" | "error";

interface UseVoiceTranscriptionOptions {
  onTranscript: (text: string) => void;
  maxDurationMs?: number;
}

function negotiateMimeType(): string {
  const candidates = [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/ogg;codecs=opus",
    "audio/mp4",
  ];
  for (const mime of candidates) {
    if (typeof MediaRecorder !== "undefined" && MediaRecorder.isTypeSupported(mime)) {
      return mime;
    }
  }
  return "audio/webm";
}

export function useVoiceTranscription({ onTranscript, maxDurationMs = 120_000 }: UseVoiceTranscriptionOptions) {
  const [state, setState] = useState<VoiceState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cleanup = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (recorderRef.current && recorderRef.current.state !== "inactive") {
      try { recorderRef.current.stop(); } catch { /* already stopped */ }
    }
    recorderRef.current = null;
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(t => t.stop());
      streamRef.current = null;
    }
    chunksRef.current = [];
  }, []);

  useEffect(() => cleanup, [cleanup]);

  const transcribe = useCallback(async (blob: Blob) => {
    setState("transcribing");
    setErrorMsg("");
    try {
      const form = new FormData();
      form.append("file", blob, `recording.${blob.type.includes("mp4") ? "mp4" : "webm"}`);

      const res = await fetch("/api/sales/transcribe", {
        method: "POST",
        credentials: "include",
        body: form,
      });

      const data = await res.json();
      if (!res.ok || !data.text) {
        throw new Error(data.error || "Transcription failed");
      }
      onTranscript(data.text);
      setState("idle");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Transcription failed");
      setState("error");
    }
  }, [onTranscript]);

  const start = useCallback(async () => {
    setErrorMsg("");

    if (typeof navigator === "undefined" || !navigator.mediaDevices?.getUserMedia) {
      setErrorMsg("Microphone access is not supported in this browser.");
      setState("error");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;

      const mimeType = negotiateMimeType();
      const recorder = new MediaRecorder(stream, { mimeType });
      recorderRef.current = recorder;
      chunksRef.current = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      recorder.onstop = () => {
        stream.getTracks().forEach(t => t.stop());
        streamRef.current = null;
        const blob = new Blob(chunksRef.current, { type: mimeType });
        chunksRef.current = [];
        if (blob.size > 0) {
          transcribe(blob);
        } else {
          setErrorMsg("No audio captured. Please try again.");
          setState("error");
        }
      };

      recorder.onerror = () => {
        cleanup();
        setErrorMsg("Recording failed. Please try again.");
        setState("error");
      };

      recorder.start(250);
      setState("recording");

      timerRef.current = setTimeout(() => {
        if (recorderRef.current?.state === "recording") {
          recorderRef.current.stop();
        }
      }, maxDurationMs);
    } catch (err) {
      cleanup();
      if (err instanceof DOMException && err.name === "NotAllowedError") {
        setErrorMsg("Microphone permission denied. Please allow access and try again.");
      } else {
        setErrorMsg("Could not access microphone.");
      }
      setState("error");
    }
  }, [cleanup, transcribe, maxDurationMs]);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (recorderRef.current && recorderRef.current.state === "recording") {
      recorderRef.current.stop();
    }
  }, []);

  const toggle = useCallback(() => {
    if (state === "recording") {
      stop();
    } else if (state === "idle" || state === "error") {
      start();
    }
  }, [state, start, stop]);

  const dismissError = useCallback(() => {
    if (state === "error") {
      setErrorMsg("");
      setState("idle");
    }
  }, [state]);

  return { state, errorMsg, toggle, start, stop, dismissError, cleanup };
}
