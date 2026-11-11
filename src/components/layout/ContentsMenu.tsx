import { scroller } from "react-scroll";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export interface ContentsItem {
  label: string;
  /** Element id / react-scroll name to scroll to. */
  to: string;
  /** Nested entries are rendered indented under their parent. */
  children?: ContentsItem[];
}

function Entry({ item, depth = 0 }: { item: ContentsItem; depth?: number }) {
  return (
    <>
      <DropdownMenuItem
        onSelect={() =>
          scroller.scrollTo(item.to, { smooth: true, duration: 50 })
        }
        className={cn(depth > 0 && "pl-6 text-[13px]")}
      >
        {item.label}
      </DropdownMenuItem>
      {item.children?.map((c) => (
        <Entry key={c.to} item={c} depth={depth + 1} />
      ))}
    </>
  );
}

/** Dropdown of in-page anchors (table of contents) for long articles. */
export default function ContentsMenu({
  label = "Content",
  items,
  align = "start",
  className,
}: {
  label?: string;
  items: ContentsItem[];
  align?: "start" | "end";
  className?: string;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "text-muted-foreground hover:text-foreground inline-flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 text-sm outline-none",
          className,
        )}
      >
        {label} <ChevronDown className="size-3.5" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align={align} className="w-max max-w-[90vw]">
        <DropdownMenuLabel className="sr-only">{label}</DropdownMenuLabel>
        {items.map((i) => (
          <Entry key={i.to} item={i} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
