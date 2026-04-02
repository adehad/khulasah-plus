/**
 * Audio converter service for audio-to-MP3 conversion and HLS segment assembly.
 * Uses mediabunny with WASM LAME for MP3 encoding, and hls.js for playlist parsing.
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
  stage:
    | "fetching"
    | "fetching-segments"
    | "decoding"
    | "encoding"
    | "complete";
}

let mp3EncoderRegistered = false;

/**
 * Detect whether a URL points to an HLS playlist.
 * Checks the URL path extension first, then falls back to content-type header.
 *
 * @param url - The audio URL to check
 * @param contentType - Optional Content-Type header value from a fetch response
 * @returns True if the URL is an HLS playlist
 */
export function isHlsUrl(url: string, contentType?: string | null): boolean {
  const pathname = new URL(url).pathname.toLowerCase();
  return (
    pathname.endsWith(".m3u8") ||
    contentType?.includes("application/vnd.apple.mpegurl") === true ||
    contentType?.includes("application/x-mpegurl") === true
  );
}

/**
 * Use hls.js to parse an m3u8 playlist and extract segment URLs.
 * Returns the init segment URL (for fMP4 streams) and all media segment URLs.
 * hls.js handles all playlist parsing including relative URL resolution,
 * EXT-X-MAP directives, and byte ranges.
 *
 * @param playlistUrl - URL of the m3u8 playlist
 * @returns Parsed init segment URL (if fMP4) and ordered media segment URLs
 * @throws If the playlist fails to load or contains no segments
 */
async function parseHlsPlaylist(
  playlistUrl: string,
): Promise<{ initSegmentUrl: string | null; segmentUrls: string[] }> {
  const { default: Hls, Events } = await import("hls.js");

  return new Promise((resolve, reject) => {
    const hls = new Hls({ enableWorker: false });

    const cleanup = () => hls.destroy();

    hls.on(Events.LEVEL_LOADED, (_event, data) => {
      const { fragments } = data.details;
      if (fragments.length === 0) {
        cleanup();
        reject(new Error("HLS playlist contains no audio segments"));
        return;
      }

      const initSegmentUrl = fragments[0].initSegment?.url ?? null;
      const segmentUrls = fragments.map((f) => f.url);

      cleanup();
      resolve({ initSegmentUrl, segmentUrls });
    });

    hls.on(Events.ERROR, (_event, data) => {
      if (data.fatal) {
        cleanup();
        reject(new Error(`HLS playlist error: ${data.details}`));
      }
    });

    hls.loadSource(playlistUrl);
  });
}

/**
 * Fetch an ordered list of URLs with limited concurrency and automatic retry.
 * Downloads up to 3 URLs in parallel, retrying each failed request
 * up to 2 times with increasing backoff (500ms, 1000ms).
 *
 * @param urls - Ordered array of absolute URLs to fetch
 * @param onProgress - Optional callback invoked after each URL completes
 *                     with (completedCount, totalCount)
 * @returns Array of ArrayBuffers in the original URL order
 * @throws If any URL fails after all retry attempts
 */
async function fetchAll(
  urls: string[],
  onProgress?: (completed: number, total: number) => void,
): Promise<ArrayBuffer[]> {
  const results: ArrayBuffer[] = new Array(urls.length);
  let completed = 0;
  const concurrency = 3;
  const maxRetries = 2;

  async function fetchWithRetry(url: string): Promise<ArrayBuffer> {
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      const response = await fetch(url);
      if (response.ok) return response.arrayBuffer();

      if (attempt < maxRetries) {
        await new Promise((r) => setTimeout(r, 500 * (attempt + 1)));
      }
    }
    throw new Error(`Failed to fetch after ${maxRetries + 1} attempts: ${url}`);
  }

  for (let i = 0; i < urls.length; i += concurrency) {
    const batch = urls.slice(i, i + concurrency);
    const buffers = await Promise.all(batch.map(fetchWithRetry));
    for (let j = 0; j < buffers.length; j++) {
      results[i + j] = buffers[j];
      completed++;
      onProgress?.(completed, urls.length);
    }
  }

  return results;
}

/**
 * Fetch an HLS stream and assemble it into a single fMP4 blob.
 * Uses hls.js to parse the playlist, then fetches the init segment and all
 * media segments, concatenating them into a valid fragmented MP4 file.
 *
 * The init segment (moov box with codec setup) is prepended before media
 * segments (moof+mdat pairs) to form a complete fMP4 that any demuxer can read.
 *
 * Progress is reported in the 0–30% range (segment fetching phase).
 *
 * @param audioUrl - URL of the m3u8 playlist
 * @param onProgress - Optional callback for conversion progress updates
 * @returns Single fMP4 Blob containing the complete audio stream
 * @throws If the playlist fails to load, has no segments, or segment fetching fails
 */
export async function fetchHlsAsFmp4(
  audioUrl: string,
  onProgress?: (progress: ConversionProgress) => void,
): Promise<Blob> {
  const { initSegmentUrl, segmentUrls } = await parseHlsPlaylist(audioUrl);

  if (segmentUrls.length === 0) {
    throw new Error("HLS playlist contains no audio segments");
  }

  // Fetch init segment separately — it must come first in the fMP4
  let initBuffer: ArrayBuffer | null = null;
  if (initSegmentUrl) {
    const response = await fetch(initSegmentUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch init segment: ${response.status}`);
    }
    initBuffer = await response.arrayBuffer();
  }

  const segmentBuffers = await fetchAll(segmentUrls, (completed, total) => {
    const percent = Math.round((completed / total) * 30);
    onProgress?.({ percent, stage: "fetching-segments" });
  });

  // Prepend init segment (moov box) before media segments (moof+mdat pairs)
  const allBuffers = initBuffer
    ? [initBuffer, ...segmentBuffers]
    : segmentBuffers;

  return new Blob(allBuffers, { type: "audio/mp4" });
}

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

  let blob: Blob;

  // 1. Fetch the audio file
  if (isHlsUrl(audioUrl)) {
    blob = await fetchHlsAsFmp4(audioUrl, onProgress);
  } else {
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

    blob = await response.blob();
    onProgress?.({ percent: 20, stage: "fetching" });
  }

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
 * Trigger a browser file download for a Blob.
 * Creates a temporary anchor element to initiate the download.
 *
 * @param blob - The file content to download
 * @param filename - Suggested filename for the download dialog
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
