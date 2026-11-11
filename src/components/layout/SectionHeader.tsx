import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  /** Use "h1" for the page title, "h2" (default) for sections. */
  as?: "h1" | "h2";
}

export default function SectionHeader({
  title,
  subtitle,
  className,
  as: Heading = "h2",
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-7 w-full max-w-[860px] px-0.5 md:mb-10", className)}>
      <Heading className="text-foreground m-0 text-[clamp(1.65rem,3vw,2.5rem)] leading-[1.05] font-extrabold tracking-[-0.03em]">
        {title}
      </Heading>
      {subtitle ? (
        <p className="text-muted-foreground mt-3 mb-0 max-w-[760px] text-[clamp(0.9rem,1.3vw,1.1rem)] leading-normal md:mt-2.5">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
