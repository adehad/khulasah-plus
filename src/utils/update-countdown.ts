// Long enough to notice the toast, short enough that a reader never lingers on stale content.
export const UPDATE_COUNTDOWN_SECONDS = 10;

export interface CountdownConditions {
  audioPlaying: boolean;
  hidden: boolean;
}

export interface Countdown {
  remaining: number;
  paused: boolean;
  due: boolean;
}

export function startCountdown(
  conditions: CountdownConditions,
  seconds = UPDATE_COUNTDOWN_SECONDS,
): Countdown {
  return { remaining: seconds, paused: isPaused(conditions), due: false };
}

// Reloading mid-recitation is the one case where an update is destructive, and a hidden page
// would update without the reader ever seeing the toast, so both hold the countdown.
export function isPaused(conditions: CountdownConditions): boolean {
  return conditions.audioPlaying || conditions.hidden;
}

export function tickCountdown(
  countdown: Countdown,
  conditions: CountdownConditions,
): Countdown {
  const paused = isPaused(conditions);
  if (paused || countdown.due) return { ...countdown, paused };
  const remaining = Math.max(0, countdown.remaining - 1);
  return { remaining, paused, due: remaining === 0 };
}
