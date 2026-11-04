import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Icon } from "@/components/icons/Icon";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeader from "@/components/layout/SectionHeader";
import CategorySection from "@/components/common/CategorySection";
import AnchorNav from "@/components/common/AnchorNav";
import Tag from "@/components/common/Tag";
import { allprojects } from "@/content/projects";
import { cn } from "@/lib/utils";
import type { ButtonTone, ProjectAction, ProjectEntry } from "@/types";

const PROJECT_SECTIONS = [
  {
    id: "gen-ai",
    eyebrow: "01",
    title: "Gen AI Systems",
    icon: "brain",
    subtitle:
      "LLM-powered tools, retrieval workflows, and agentic utilities built to make knowledge access and interaction more useful in real-world settings.",
  },
  {
    id: "python-package",
    eyebrow: "02",
    title: "Python Packages & Tools",
    icon: "python",
    subtitle:
      "Reusable libraries, utilities, and frameworks designed for use across projects and teams.",
  },
  {
    id: "chrome-extensions",
    eyebrow: "03",
    title: "Chrome Extensions",
    icon: "chrome",
    subtitle:
      "Lightweight browser-first products focused on reducing friction, adding intelligence, and turning repeated actions into fast workflows.",
  },
  {
    id: "machine-learning",
    eyebrow: "04",
    title: "Machine Learning",
    icon: "chart-line",
    subtitle:
      "Predictive modeling, neural networks, and applied experimentation across forecasting, computer vision, recommendation, and optimization problems.",
  },
  {
    id: "deep-learning",
    eyebrow: "05",
    title: "Deep Learning",
    icon: "network-wired",
    subtitle:
      "Neural networks, convolutional architectures, and applied experimentation across image recognition, natural language processing, and generative models.",
  },
  {
    id: "web-apps",
    eyebrow: "06",
    title: "Web Apps & Systems",
    icon: "globe",
    subtitle:
      "Shipped products and production-style builds spanning full-stack apps, utilities, and web systems designed for direct use.",
  },
];

const TONE_TEXT: Record<ButtonTone, string> = {
  primary: "text-primary",
  danger: "text-red-600 dark:text-red-400",
  dark: "text-foreground",
  success: "text-green-600 dark:text-green-400",
  secondary: "text-muted-foreground",
};

function ActionLink({ action }: { action: ProjectAction }) {
  const cls = cn(
    "bg-secondary hover:bg-accent inline-flex size-9 items-center justify-center rounded-lg no-underline transition-colors",
    TONE_TEXT[action.bg],
  );
  const icon = <Icon name={action.icon} className="size-4" />;

  if (action.ref === "_self" && action.link.startsWith("/")) {
    return (
      <Link to={action.link} className={cls} title={action.name}>
        {icon}
      </Link>
    );
  }
  return (
    <a
      href={action.link}
      className={cls}
      title={action.name}
      target={action.ref}
      rel={action.ref === "_blank" ? "noreferrer" : undefined}
    >
      {icon}
    </a>
  );
}

function ProjectCard({ item }: { item: ProjectEntry }) {
  return (
    <div className="bg-card text-card-foreground flex h-full flex-col rounded-lg border p-5  transition-all">
      <span className="text-primary mb-1 text-[11px] font-bold tracking-wider uppercase">
        {item.type}
      </span>
      <h3 className="mb-2 text-lg font-semibold">{item.Name}</h3>
      <p className="text-muted-foreground text-sm">{item.Desc}</p>
      <p className="mt-2 mb-1 text-[15px]">Technologies</p>
      <ul className="m-0 mb-4 flex list-none flex-wrap gap-1.5 p-0">
        {item.Techs.map((tool) => (
          <li key={`${item.Name}-${tool}`}>
            <Tag>{tool}</Tag>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap gap-2">
        {item.button.map((action) => (
          <ActionLink key={`${item.Name}-${action.name}`} action={action} />
        ))}
      </div>
    </div>
  );
}

export default function Allprojects() {
  return (
    <>
      <Helmet>
        <title>Projects | Mohd Zain</title>
        <meta
          name="description"
          content="Portfolio projects and case studies by Mohd Zain, including tools, technologies, and links."
        />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <div className="bg-background min-h-screen pt-8 pb-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-8 md:px-12">
          <Breadcrumbs
            className="mb-7"
            items={[{ label: "Home", to: "/" }, { label: "Projects" }]}
          />
          <SectionHeader
            title="Projects"
            subtitle="A broader collection of my work across Gen AI, machine learning, computer vision, and product-focused engineering."
            className="mb-6"
          />
          <AnchorNav items={PROJECT_SECTIONS} />
          {PROJECT_SECTIONS.map(({ id, ...section }) => {
            const items = allprojects.filter((p) => p.category === id);
            if (!items.length) return null;
            return (
              <CategorySection key={id} id={id} {...section}>
                {items.map((item) => (
                  <ProjectCard key={item.Name} item={item} />
                ))}
              </CategorySection>
            );
          })}
        </div>
      </div>
    </>
  );
}
