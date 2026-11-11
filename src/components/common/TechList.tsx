import TechChip from "@/components/common/TechChip";
import { cn } from "@/lib/utils";

/** Wrapping row of technology chips. */
export default function TechList({
  techs,
  className,
}: {
  techs: string[];
  className?: string;
}) {
  return (
    <ul className={cn("m-0 flex list-none flex-wrap gap-1.5 p-0", className)}>
      {techs.map((t) => (
        <li key={t}>
          <TechChip name={t} />
        </li>
      ))}
    </ul>
  );
}
