/**
 * How a repeat is shown, shared by every renderer so dhikr, Qur'an and qasida stay alike:
 * a single repeated line carries its count inline, a repeated group of lines is announced above it.
 */
export function repeatDisplay(count: number, lines: number) {
  const repeated = count > 1;
  return {
    note: repeated && lines > 1,
    suffix: repeated && lines <= 1 ? ` (x${count})` : "",
  };
}
