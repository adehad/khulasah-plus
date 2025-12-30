/**
 * Audio converter service for OPUS to MP3 conversion.
 * Uses mediabunny with WASM LAME for MP3 encoding.
 */

import { registerMp3Encoder } from "@mediabunny/mp3-encoder";
import {
  ALL_FORMATS,
  BlobSource,
  BufferTarget,
  Conversion,
  canEncodeAudio,
  Input,
  Mp3OutputFormat,
  Output,
} from "mediabunny";

export interface ConversionProgress {
  percent: number;
  stage: "fetching" | "decoding" | "encoding" | "complete";
}

let mp3EncoderRegistered = false;

/**
 * Convert an audio file (OPUS or other format) to MP3.
 * Uses mediabunny with WASM LAME encoder.
 * If the source is already MP3, returns it directly without conversion.
 *
 * @param audioUrl - URL of the audio file to convert
 * @param onProgress - Optional callback for progress updates
 * @returns Promise resolving to MP3 Blob
 */
export async function convertOpusToMp3(
  audioUrl: string,
  onProgress?: (progress: ConversionProgress) => void,
): Promise<Blob> {
  onProgress?.({ percent: 0, stage: "fetching" });

  // 1. Fetch the audio file
  const response = await fetch(audioUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch audio: ${response.status}`);
  }

  // Check if already MP3 - skip conversion
  const contentType = response.headers.get("content-type");
  const pathname = new URL(audioUrl).pathname.toLowerCase();
  if (contentType?.includes("audio/mpeg") || pathname.endsWith(".mp3")) {
    onProgress?.({ percent: 100, stage: "complete" });
    return response.blob();
  }

  const blob = await response.blob();
  onProgress?.({ percent: 20, stage: "fetching" });

  // 2. Register MP3 encoder if needed (only once)
  if (!mp3EncoderRegistered) {
    if (!(await canEncodeAudio("mp3"))) {
      registerMp3Encoder();
    }
    mp3EncoderRegistered = true;
  }
  onProgress?.({ percent: 30, stage: "decoding" });

  // 3. Set up mediabunny conversion
  const input = new Input({
    source: new BlobSource(blob),
    formats: ALL_FORMATS,
  });

  const output = new Output({
    format: new Mp3OutputFormat(),
    target: new BufferTarget(),
  });

  // 4. Execute conversion with progress tracking
  onProgress?.({ percent: 40, stage: "encoding" });

  const conversion = await Conversion.init({
    input,
    output,
    audio: { bitrate: 128_000 }, // 128kbps to match source OPUS
  });

  conversion.onProgress = (progress: number) => {
    const percent = 40 + progress * 55;
    onProgress?.({ percent, stage: "encoding" });
  };

  await conversion.execute();

  onProgress?.({ percent: 100, stage: "complete" });

  // 5. Return as Blob
  const buffer = output.target.buffer;
  if (!buffer) {
    throw new Error("Conversion failed: no output buffer");
  }
  return new Blob([buffer], { type: "audio/mpeg" });
}

/**
 * Download a Blob as a file.
 */
export function downloadBlob(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
