import type { ReactNode } from "react";

interface CategorySectionProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  children: ReactNode;
}

/** Numbered page section: eyebrow, title, subtitle, then a card grid. */
export default function CategorySection({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: CategorySectionProps) {
  return (
    <section id={id} className="border-t border-border/70 px-0! py-7 md:py-10">
      <div className="mb-5 max-w-[760px] md:mb-7">
        <p className="text-primary mb-2 text-xs font-bold tracking-[0.18em]">
          {eyebrow}
        </p>
        <h2 className="text-foreground m-0 text-[clamp(1.3rem,1.9vw,1.8rem)] leading-[1.1] font-extrabold">
          {title}
        </h2>
        <p className="text-muted-foreground mt-2 mb-0 text-[0.95rem] leading-relaxed md:text-base">
          {subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {children}
      </div>
    </section>
  );
}
