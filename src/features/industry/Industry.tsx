import { Helmet } from "react-helmet-async";
import { Icon } from "@/components/icons/Icon";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeader from "@/components/layout/SectionHeader";
import CategorySection from "@/components/common/CategorySection";
import AnchorNav from "@/components/common/AnchorNav";
import Tag from "@/components/common/Tag";
import { exp } from "@/content/experience";
import type { Experience } from "@/types";

const INDUSTRY_SECTIONS = [
  {
    id: "agentic-ai",
    eyebrow: "01",
    title: "Agentic AI Systems",
    icon: "bolt",
    subtitle:
      "Production-oriented agent workflows, orchestration patterns, and multi-agent systems built for reliable reasoning and decision support.",
  },
  {
    id: "research-platform",
    eyebrow: "02",
    title: "Research & Observability",
    icon: "magnifying-glass",
    subtitle:
      "Exploration across LLM adaptation, neuro-symbolic ideas, document intelligence, and evaluation pipelines for reliable AI systems.",
  },
  {
    id: "platform-engineering",
    eyebrow: "03",
    title: "Platform Engineering",
    icon: "layer-group",
    subtitle:
      "Internal platforms, developer tooling, and data apps designed to improve quality, automation, and day-to-day engineering workflows.",
  },
  {
    id: "econometrics-mlops",
    eyebrow: "04",
    title: "Econometrics & MLOps",
    icon: "chart-line",
    subtitle:
      "Optimization engines, regression systems, and production monitoring workflows focused on measurable business impact and operational robustness.",
  },
];

function IndustryCard({ item }: { item: Experience }) {
  return (
    <article className="bg-card text-card-foreground flex h-full flex-col rounded-lg border p-5  transition-all">
      <div className="mb-3 flex items-start justify-between gap-3">
        <span className="text-primary text-[11px] font-bold tracking-wider uppercase">
          {item.type}
        </span>
        <div className="bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-lg">
          <Icon name={item.icon} className="size-4" />
        </div>
      </div>
      <h3 className="mb-2 text-lg leading-snug font-semibold">{item.name}</h3>
      <p className="text-muted-foreground mb-4 text-[15px]">{item.desc}</p>
      <div className="mt-auto flex flex-wrap gap-2">
        {item.techs.map((tech) => (
          <Tag key={`${item.name}-${tech}`}>{tech}</Tag>
        ))}
      </div>
    </article>
  );
}

export default function Industry() {
  return (
    <>
      <Helmet>
        <title>Industry | Mohd Zain</title>
        <meta
          name="description"
          content="Detailed industry work by Mohd Zain across agentic AI, research systems, platform engineering, and econometrics."
        />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <div className="bg-background min-h-screen pt-8 pb-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-8 md:px-12">
          <Breadcrumbs
            className="mb-7"
            items={[{ label: "Home", to: "/" }, { label: "Industry" }]}
          />
          <SectionHeader
            title="Industry"
            subtitle="A detailed view of the systems, platforms, and applied AI work I have built across enterprise workflows, research exploration, and production tooling."
            className="mb-6"
          />
          <AnchorNav items={INDUSTRY_SECTIONS} />
          {INDUSTRY_SECTIONS.map(({ id, ...section }) => {
            const items = exp.filter((e) => e.section === id);
            if (!items.length) return null;
            return (
              <CategorySection key={id} id={id} {...section}>
                {items.map((item) => (
                  <IndustryCard key={item.name} item={item} />
                ))}
              </CategorySection>
            );
          })}
        </div>
      </div>
    </>
  );
}
