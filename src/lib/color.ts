/** Mix `color` (any CSS color or var()) with transparency; works for theme tokens. */
export function withAlpha(color: string, percent: number): string {
  return `color-mix(in srgb, ${color} ${percent}%, transparent)`;
}
