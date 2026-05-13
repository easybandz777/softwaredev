# Transcripts — Standard Format and Production Pipeline

Every published QUANT LAB video must ship with a transcript. Reasons: SEO (LLMs and search engines parse transcripts), accessibility (WCAG 1.2.1 prerecorded audio + 1.2.2 captions compliance), and convenience for skim readers.

This document specifies the file format and the two recommended pipelines for auto-transcription.

---

## Standard transcript file format

Every transcript is a single Markdown file, stored at `seo-deliverables/video-strategy/transcripts/<video-slug>.md`. The slug matches the video script slug (e.g., `script-01-custom-crm-vs-saas-the-honest-answer.md`).

### Required front-matter header

```markdown
# <Video Title> — Transcript

**Video URL:** https://www.youtube.com/watch?v=<youtube_id>
**Published:** <YYYY-MM-DD>
**Duration:** <hh:mm:ss>
**Speaker(s):** Bill Beltz (host)
**Transcription method:** <Whisper local | AssemblyAI | Human-edited>
**Last reviewed:** <YYYY-MM-DD>
```

### Body format

Use timestamped paragraphs. One paragraph per logical thought (roughly one paragraph per 15–60 seconds of speech). The timestamp marks the start of the paragraph.

```markdown
**[00:00]** [Speaker name if multi-speaker, otherwise omit:] The opening paragraph of the transcript goes here. Sentence-cased, punctuated, complete words — not the raw stream from the transcription tool.

**[00:25]** Each subsequent paragraph begins with its starting timestamp in bold square brackets. This makes timestamp-jumping easy when the transcript is published as a `<details>` block on the page or as a standalone web page.

**[01:40]** Section breaks are noted by inserting a horizontal rule (`---`) between paragraphs, with the section name on a new line as a small heading. See the example below.
```

### Section break example

```markdown
**[01:40]** ...closing sentence of the previous section.

---

## Why Macon, Georgia

**[01:42]** Opening sentence of the new section.
```

### What to clean up vs preserve

**Clean up:**
- Filler words at the start and end of sentences ("um," "uh," "you know") unless they carry meaning.
- False starts that were re-said correctly. Keep only the final version.
- Stutters and stammers.
- Mid-sentence pauses that resulted in an audible audio gap.

**Preserve:**
- All technical terms exactly as said.
- Numbers and dollar amounts.
- All product, brand, and tool names.
- Intentional pauses for dramatic effect (note as "[pause]").
- Audible non-speech (e.g., "[laughter]," "[typing on keyboard]") if relevant.

**Always do:**
- Verify the spelling of every technical term, product name, and proper noun by hand.
- Verify every dollar amount and number against the script.
- Reconcile against the published script. If the recorded version deviates, the transcript reflects the recording, not the script.

### Closing footer (required)

```markdown
---

**About QUANT LAB USA**

QUANT LAB USA INC is a custom software and cybersecurity firm based in Macon, Georgia. We build production-grade web applications, CRMs, Stripe integrations, licensing systems, and algorithmic trading bots, and harden them with professional penetration testing aligned to MITRE ATT&CK.

Contact: https://quantlabusa.dev/contact | beltz@quantlabusa.dev
Founder: William Beltz (Bill)
Watch more: https://www.youtube.com/@quantlabusa
```

---

## Pipeline A — Whisper (local, free)

Use when: you have a Mac with M-series chip or any machine with a usable GPU, and you want zero per-minute cost.

### One-time setup

```bash
brew install ffmpeg
pip install -U openai-whisper
```

### Run on a recording

```bash
whisper recording.mp4 \
  --model medium.en \
  --output_format srt \
  --output_format txt \
  --output_format vtt \
  --language en
```

Notes:
- `medium.en` is the sweet spot for English-only content. `large-v3` is more accurate but 2x slower and rarely worth the extra time.
- The `.srt` output goes to YouTube as the caption track.
- The `.txt` output is the starting point for the standard transcript file.

### Post-processing

Whisper output is raw. Always do these passes:
1. Run through Whisper output once for proper-noun and technical-term spelling.
2. Reformat into paragraphs with timestamps using the standard format above.
3. Hand-check the first 60 seconds and the last 60 seconds extra carefully — Whisper's accuracy drops at audio file boundaries.
4. Total post-processing time for a 10-minute video: 30–45 minutes.

### Quality benchmark

Whisper `medium.en` on clean podcast-quality audio yields ~96% word accuracy on English content. The 4% error rate clusters in: proper nouns, acronyms (MITRE, SOC, IDOR), and technical product names. Budget your editing time accordingly.

---

## Pipeline B — AssemblyAI (cloud, $0.37/hr)

Use when: you do not want to run local compute, or your machine cannot keep up, or you want the speaker-diarization (multi-speaker tagging) for podcast appearances.

### Setup

1. Sign up at https://www.assemblyai.com.
2. Generate an API key.
3. Store the key in your local `.env` file as `ASSEMBLYAI_API_KEY=...`. **Never commit it.**

### Submit a job (using `curl`)

```bash
# 1. Upload the audio
UPLOAD_URL=$(curl -s -X POST https://api.assemblyai.com/v2/upload \
  -H "authorization: $ASSEMBLYAI_API_KEY" \
  -T recording.mp4 | jq -r .upload_url)

# 2. Submit transcription request
TRANSCRIPT_ID=$(curl -s -X POST https://api.assemblyai.com/v2/transcript \
  -H "authorization: $ASSEMBLYAI_API_KEY" \
  -H "content-type: application/json" \
  -d "{\"audio_url\": \"$UPLOAD_URL\", \"speaker_labels\": true, \"punctuate\": true, \"format_text\": true}" \
  | jq -r .id)

# 3. Poll for completion
while true; do
  STATUS=$(curl -s https://api.assemblyai.com/v2/transcript/$TRANSCRIPT_ID \
    -H "authorization: $ASSEMBLYAI_API_KEY" | jq -r .status)
  echo "Status: $STATUS"
  if [ "$STATUS" = "completed" ]; then break; fi
  if [ "$STATUS" = "error" ]; then echo "Error"; break; fi
  sleep 10
done

# 4. Download the final transcript
curl -s https://api.assemblyai.com/v2/transcript/$TRANSCRIPT_ID \
  -H "authorization: $ASSEMBLYAI_API_KEY" \
  | jq -r '.utterances[] | "**[\(.start | tonumber / 1000 | floor | tostring | sub("^"; "00:") | .[-5:])]** \(.text)"' \
  > transcripts/<video-slug>.md
```

### Output features

AssemblyAI returns:
- Word-level timestamps.
- Speaker diarization (useful for podcast appearances where Bill is one of multiple voices).
- Punctuation and casing.
- Optional: PII redaction, sentiment, topic labels (not needed for standard QUANT LAB transcripts).

### Cost math

AssemblyAI's Nano model is $0.12/hr. The Best model is $0.37/hr. Use Best for podcast appearances and tutorial content; Nano is fine for vlog-style talking-head.

For 12 videos a year averaging 10 minutes each = 2 hours of audio = $0.74/year on Best, $0.24/year on Nano. Negligible cost.

---

## Pipeline C — YouTube auto-captions (NEVER as the published transcript)

YouTube generates auto-captions. **Do not use them as the published transcript.** They are unreliable for:
- Technical terminology
- Numbers and dollar amounts
- Proper nouns
- Punctuation
- Paragraph breaks

YouTube auto-captions are acceptable as a temporary fallback for the YouTube caption track only, while a human-reviewed `.srt` is being prepared. Replace within 24 hours of upload.

---

## Publishing the transcript on the site

Two options:

### Option 1: Embedded in the `<VideoEmbed />` component

Pass the transcript as the `transcript` prop. It renders inside a collapsible `<details>` element with a "Transcript" summary toggle.

```tsx
<VideoEmbed
  youtubeId="..."
  title="..."
  description="..."
  uploadDate="..."
  transcript={`**[00:00]** Opening paragraph of the transcript...

**[00:25]** Next paragraph...`}
/>
```

Use this for videos under 10 minutes. The collapsible UX is right for short transcripts.

### Option 2: Standalone transcript page

For long-form tutorials (10+ minutes) or videos with significant value as standalone reading material, publish a dedicated page at `/transcripts/<video-slug>`. Link the page from the YouTube description and from the `<VideoEmbed />` figcaption.

The standalone page should include:
- Full standard-format transcript.
- VideoObject schema referencing both the video and the transcript URL.
- Internal links to related blog posts, services, and case studies.
- The site's standard footer with contact CTA.

---

## QA checklist before publishing a transcript

- [ ] Speaker name(s) listed in header.
- [ ] Duration matches the video.
- [ ] Every technical term and proper noun spelled correctly.
- [ ] Every dollar amount and number reconciled to the script (or recording if it deviated).
- [ ] Paragraph breaks every 15–60 seconds of speech.
- [ ] Section headings inserted where the video has section breaks.
- [ ] First and last 60 seconds checked by hand.
- [ ] Closing "About QUANT LAB USA" footer present.
- [ ] No `[unintelligible]` or `[inaudible]` markers — if a section was genuinely inaudible, fix the audio and re-transcribe.
- [ ] Filename matches the video slug.

---

## Time budget per transcript

| Method | 5-min video | 10-min video | 15-min video |
| ------ | ----------- | ------------ | ------------ |
| Whisper local + manual edit | 25 min | 45 min | 75 min |
| AssemblyAI + manual edit | 15 min | 30 min | 50 min |
| Fully human-typed | 90 min | 3 hr | 4.5 hr |

The Whisper or AssemblyAI pipelines are about 4x faster than human typing. Use them.
