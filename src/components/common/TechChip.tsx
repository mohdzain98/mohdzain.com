import { getTechIcon } from "@/components/icons/techIcons";
import { cn } from "@/lib/utils";

/** Small outline chip: brand icon plus technology name. */
export default function TechChip({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const { Icon, color } = getTechIcon(name);
  return (
    <span
      className={cn(
        "text-foreground border-border inline-flex items-center gap-1 rounded-md border bg-transparent px-1.5 py-0.5 text-[11px] leading-4 font-medium",
        className,
      )}
    >
      <Icon
        className={cn(
          "size-3 shrink-0",
          // Lighten dark brand colors (e.g. SQLite navy) in dark mode.
          color &&
            "text-(--tech) dark:text-[color-mix(in_srgb,var(--tech)_60%,white)]",
        )}
        style={color ? ({ "--tech": color } as React.CSSProperties) : undefined}
        aria-hidden="true"
      />
      {name}
    </span>
  );
}
