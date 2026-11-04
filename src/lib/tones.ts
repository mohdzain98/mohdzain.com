export type Tone =
  | "primary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "secondary";

/** Soft tinted badge classes per semantic tone (work in light and dark). */
export const TONE_BADGE: Record<Tone, string> = {
  primary: "bg-primary/10 text-primary",
  success: "bg-green-600/10 text-green-700 dark:text-green-300",
  danger: "bg-red-600/10 text-red-700 dark:text-red-300",
  warning: "bg-amber-500/15 text-amber-700 dark:text-amber-300",
  info: "bg-sky-500/10 text-sky-700 dark:text-sky-300",
  secondary: "bg-muted text-muted-foreground",
};
