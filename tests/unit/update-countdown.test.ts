import { expect, test } from "bun:test";
import { startCountdown, tickCountdown } from "@/utils/update-countdown";

test("an update never reloads mid-recitation: the countdown holds while audio plays", () => {
  const idle = { audioPlaying: false, hidden: false };
  const playing = { audioPlaying: true, hidden: false };

  let countdown = tickCountdown(startCountdown(idle, 2), idle);
  for (let i = 0; i < 5; i++) countdown = tickCountdown(countdown, playing);
  expect(countdown.due).toBe(false);

  expect(tickCountdown(countdown, idle).due).toBe(true);
});
