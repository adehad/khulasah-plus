/**
 * Wires up static audio play buttons rendered by Astro components.
 * Buttons use data-audio-url and data-audio-title attributes.
 */
import { audioPlayerService } from "@/services/audio-player-service";

document.addEventListener("click", (e) => {
  const btn = (e.target as HTMLElement).closest<HTMLElement>(
    ".audio-play-btn[data-audio-url]",
  );
  if (!btn) return;

  const url = btn.dataset.audioUrl;
  const title = btn.dataset.audioTitle;
  if (!url) return;

  audioPlayerService.play({ url, title });
});
