import React from "react";
import { JsonLd } from "./JsonLd";
import { videoObjectSchema } from "@/lib/schemas/videoObject";
import { SITE_URL } from "@/lib/schemas/organization";

export type VideoEmbedProps = {
  youtubeId?: string;
  vimeoId?: string;
  src?: string;
  poster?: string;
  title: string;
  description: string;
  uploadDate: string;
  duration?: string;
  transcript?: string;
  keywords?: string[];
  className?: string;
};

function buildEmbedUrl(props: VideoEmbedProps): {
  embedUrl?: string;
  contentUrl?: string;
  kind: "youtube" | "vimeo" | "file" | "none";
} {
  if (props.youtubeId) {
    return {
      embedUrl: `https://www.youtube-nocookie.com/embed/${props.youtubeId}?rel=0&modestbranding=1`,
      contentUrl: `https://www.youtube.com/watch?v=${props.youtubeId}`,
      kind: "youtube",
    };
  }
  if (props.vimeoId) {
    return {
      embedUrl: `https://player.vimeo.com/video/${props.vimeoId}?dnt=1`,
      contentUrl: `https://vimeo.com/${props.vimeoId}`,
      kind: "vimeo",
    };
  }
  if (props.src) {
    return {
      embedUrl: props.src,
      contentUrl: props.src,
      kind: "file",
    };
  }
  return { kind: "none" };
}

function pickThumbnail(props: VideoEmbedProps): string {
  if (props.poster) return props.poster;
  if (props.youtubeId) {
    return `https://i.ytimg.com/vi/${props.youtubeId}/maxresdefault.jpg`;
  }
  return `${SITE_URL}/og-image.png`;
}

export function VideoEmbed(props: VideoEmbedProps) {
  const { embedUrl, contentUrl, kind } = buildEmbedUrl(props);
  const thumbnailUrl = pickThumbnail(props);

  const schema = videoObjectSchema({
    name: props.title,
    description: props.description,
    thumbnailUrl,
    uploadDate: props.uploadDate,
    contentUrl,
    embedUrl,
    duration: props.duration,
    transcript: props.transcript,
    keywords: props.keywords,
  });

  const containerClasses = [
    "video-embed",
    "not-prose",
    "rounded-2xl",
    "overflow-hidden",
    "border",
    "border-indigo-500/40",
    "bg-black/40",
    "shadow-lg",
    "shadow-indigo-900/20",
    props.className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <figure className={containerClasses}>
      <JsonLd data={schema} />
      <div
        className="relative w-full bg-black"
        style={{ aspectRatio: "16 / 9" }}
      >
        {kind === "youtube" || kind === "vimeo" ? (
          <iframe
            src={embedUrl}
            title={props.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : kind === "file" ? (
          <video
            src={props.src}
            poster={props.poster}
            controls
            preload="metadata"
            playsInline
            className="absolute inset-0 h-full w-full bg-black"
            aria-label={props.title}
          >
            <track kind="captions" />
          </video>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">
            Video coming soon
          </div>
        )}
      </div>

      <figcaption className="px-4 py-3 text-sm text-gray-300 bg-gradient-to-b from-indigo-950/40 to-black/60 border-t border-indigo-500/20">
        <span className="block font-semibold text-white">{props.title}</span>
        <span className="block text-xs text-gray-400 mt-1 leading-relaxed">
          {props.description}
        </span>
      </figcaption>

      {props.transcript ? (
        <details className="border-t border-indigo-500/20 bg-black/30">
          <summary className="cursor-pointer select-none px-4 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-300 hover:text-indigo-200">
            Transcript
          </summary>
          <div className="px-4 pb-4 pt-1 text-sm text-gray-300 whitespace-pre-wrap leading-relaxed max-h-96 overflow-y-auto">
            {props.transcript}
          </div>
        </details>
      ) : null}
    </figure>
  );
}

export default VideoEmbed;
