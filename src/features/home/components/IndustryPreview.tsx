import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/icons/Icon";
import SectionHeader from "@/components/layout/SectionHeader";
import { latestWork } from "@/content/experience";
import { withAlpha } from "@/lib/color";

/** One accent per card: blue, violet, teal. */
const ACCENTS = ["var(--primary)", "#7c3aed", "#0d9488"];

/** Accent that stays readable on both light and dark backgrounds. */
const accentText = (c: string) =>
  `color-mix(in srgb, ${c} 78%, var(--foreground))`;

/** Soft colored washes instead of flat grey. */
const SECTION_BG: React.CSSProperties = {
  background: [
    "radial-gradient(55% 90% at 0% 0%, color-mix(in srgb, var(--primary) 13%, transparent), transparent 72%)",
    "radial-gradient(50% 80% at 100% 100%, color-mix(in srgb, #7c3aed 11%, transparent), transparent 72%)",
    "var(--page-bg-alt)",
  ].join(", "),
};

export default function IndustryPreview() {
  const items = latestWork;

  return (
    <div id="experience" className="px-4 py-12 lg:px-[9%]" style={SECTION_BG}>
      <div className="container mx-auto mt-6 px-4 md:px-2">
        <SectionHeader
          title="Industry"
          subtitle="Building applied AI and data science systems across production workflows, experimentation, and measurable business outcomes."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <article
                key={item.name}
                className="group bg-card text-card-foreground relative flex h-full flex-col overflow-hidden rounded-xl border p-6 transition-all duration-200 hover:-translate-y-1"
                style={{
                  borderTop: `3px solid ${accent}`,
                  borderColor: withAlpha(accent, 22),
                  borderTopColor: accent,
                }}
              >
                <div className="relative mb-4 flex items-center gap-3.5">
                  <div
                    className="hidden size-11 shrink-0 items-center justify-center rounded-xl text-white md:flex"
                    style={{
                      background: `linear-gradient(135deg, ${accent}, color-mix(in srgb, ${accent} 70%, #000))`,
                    }}
                  >
                    <Icon name={item.icon} className="size-5" />
                  </div>
                  <h3 className="m-0 text-xl leading-snug font-bold">
                    {item.name}
                  </h3>
                </div>
                <p className="text-muted-foreground relative text-[15px]">
                  {item.desc}
                </p>
                <div className="relative mt-auto flex flex-wrap gap-2">
                  {item.techs.map((tech) => (
                    <span
                      key={`${item.name}-${tech}`}
                      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
                      style={{
                        background: withAlpha(accent, 12),
                        color: accentText(accent),
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-6 text-left">
          <Button asChild variant="outline">
            <Link to="/industry">
              View All Work <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
