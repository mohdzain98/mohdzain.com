import { Icon } from "@/components/icons/Icon";

interface AnchorItem {
  id: string;
  title: string;
  icon: string;
}

/** Row of in-page jump links shown above categorized sections. */
export default function AnchorNav({ items }: { items: AnchorItem[] }) {
  return (
    <div className="mb-12 flex flex-wrap gap-2">
      {items.map((s) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="bg-card text-foreground hover:bg-accent flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium no-underline  transition-colors"
        >
          <Icon name={s.icon} className="text-primary size-4" />
          {s.title}
        </a>
      ))}
    </div>
  );
}
