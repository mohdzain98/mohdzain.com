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
    id: "fde-enterprise",
    eyebrow: "01",
    title: "FDE & Enterprise AI Delivery",
    icon: "rocket",
    subtitle:
      "End-to-end delivery on client use cases, from SAP data to insights, with agents and apps built and deployed on Azure and Databricks.",
  },
  {
    id: "agentic-ai",
    eyebrow: "02",
    title: "Agentic AI Systems",
    icon: "bolt",
    subtitle:
      "Production-oriented agent workflows, orchestration patterns, and multi-agent systems built for reliable reasoning and decision support.",
  },
  {
    id: "research-platform",
    eyebrow: "03",
    title: "Research & Observability",
    icon: "magnifying-glass",
    subtitle:
      "Exploration across LLM adaptation, neuro-symbolic ideas, document intelligence, and evaluation pipelines for reliable AI systems.",
  },
  {
    id: "platform-engineering",
    eyebrow: "04",
    title: "Platform Engineering",
    icon: "layer-group",
    subtitle:
      "Internal platforms, developer tooling, and data apps designed to improve quality, automation, and day-to-day engineering workflows.",
  },
  {
    id: "econometrics-mlops",
    eyebrow: "05",
    title: "Econometrics & MLOps",
    icon: "chart-line",
    subtitle:
      "Optimization engines, regression systems, and production monitoring workflows focused on measurable business impact and operational robustness.",
  },
];

function IndustryCard({ item }: { item: Experience }) {
  return (
    <article className="bg-card text-card-foreground flex h-full flex-col rounded-xl border p-6 transition-all shadow-xs">
      <div className="mb-3 flex items-start justify-between gap-3">
        <span className="bg-primary/10 text-primary rounded px-3.5 py-1.5 text-[9px] leading-4 font-bold tracking-wider uppercase">
          {item.type}
        </span>
        <div className="bg-primary/10 text-primary flex size-7 shrink-0 items-center justify-center rounded">
          <Icon name={item.icon} className="size-3.5" />
        </div>
      </div>
      <h3 className="mb-2 text-lg leading-snug font-semibold">{item.name}</h3>
      {item.impact && (
        <span className="bg-primary/10 text-primary mb-3 inline-flex w-fit items-center gap-1.5 rounded px-3 py-1.5 text-xs font-bold">
          <Icon name="bolt" className="size-3.5" />
          {item.impact}
        </span>
      )}
      <p className="text-foreground/85 mb-4 text-sm">{item.desc}</p>
      {item.points && item.points.length > 0 && (
        <div className="mb-4">
          {item.pointsTitle && (
            <p className="text-foreground mb-1.5 text-xs font-bold tracking-wider uppercase">
              {item.pointsTitle}
            </p>
          )}
          <ul className="m-0 flex list-none flex-col gap-1 p-0">
            {item.points.map((p) => (
              <li
                key={p}
                className="text-foreground/85 flex items-start gap-2 text-[13px]"
              >
                <Icon
                  name="check"
                  className="text-primary mt-0.5 size-3.5 shrink-0"
                />
                {p}
              </li>
            ))}
          </ul>
        </div>
      )}
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
            as="h1"
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
