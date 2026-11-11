import { cn } from "@/lib/utils";

/** Small pill used for technologies and categories. */
export default function Tag({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-primary/10 text-primary inline-flex items-center rounded px-3.5 py-1.5 text-[11px] leading-4 font-semibold",
        className,
      )}
    >
      {children}
    </span>
  );
}
