import { Icon } from "@/components/icons/Icon";
import { Button } from "@/components/ui/button";
import RadarChart from "@/components/common/RadarChart";
import { cn } from "@/lib/utils";

import SectionHeader from "@/components/layout/SectionHeader";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

type SkillTab =
  | "language"
  | "datascience"
  | "ai"
  | "webdev"
  | "others"
  | "database";
type Level = "Advanced" | "Intermediate" | "Basic" | "Learning";

interface Skill {
  name: string;
  icon: string;
  level: Level;
  /** Explicit 0-100 proficiency; defaults to the value implied by `level`. */
  value?: number;
  info?: string[];
}

const SKILLS: Record<SkillTab, Skill[]> = {
  language: [
    {
      name: "Python",
      icon: "python",
      level: "Advanced",
      info: ["Open-Close", "DRY", "Encapsulation"],
    },
    { name: "Java", icon: "java", level: "Advanced", info: ["DSA"] },
    {
      name: "JavaScript",
      icon: "js",
      level: "Advanced",
      info: ["React", "Node.js"],
    },
    {
      name: "TypeScript",
      icon: "typescript",
      level: "Intermediate",
      value: 80,
      info: ["React", "Node.js"],
    },
    {
      name: "SQL",
      icon: "database",
      level: "Intermediate",
      info: ["MySQL", "PostgreSQL"],
    },
  ],
  datascience: [
    {
      name: "Data Wrangling",
      info: ["pandas", "numpy"],
      icon: "table-columns",
      level: "Advanced",
    },
    {
      name: "Machine Learning",
      info: ["scikit-learn", "Ensemble Learning"],
      icon: "robot",
      level: "Advanced",
    },
    {
      name: "Statistics",
      info: ["Statsmodels"],
      icon: "chart-line",
      level: "Intermediate",
    },
    {
      name: "Visualization",
      info: ["Matplotlib", "Seaborn"],
      icon: "chart-simple",
      level: "Intermediate",
    },
    {
      name: "Deep Learning",
      info: ["TensorFlow", "Keras", "PyTorch"],
      icon: "brain",
      level: "Basic",
    },
    {
      name: "Time Series Analysis",
      info: ["Forecasting", "Trend Analysis"],
      icon: "chart-area",
      level: "Intermediate",
      value: 65,
    },
  ],
  ai: [
    {
      name: "LLMs",
      info: ["OpenAI", "Gemini"],
      icon: "brain",
      level: "Intermediate",
      value: 80,
    },
    {
      name: "Frameworks",
      info: ["LangChain", "LangGraph"],
      icon: "sitemap",
      level: "Intermediate",
      value: 80,
    },
    {
      name: "RAG",
      info: ["Agentic", "Vanilla"],
      icon: "coins",
      level: "Intermediate",
      value: 75,
    },
    {
      name: "MCP",
      info: ["LangChain Tools", "FastMCP"],
      icon: "robot",
      level: "Intermediate",
      value: 70,
    },
    {
      name: "Observability",
      info: ["Langfuse", "LangSmith"],
      icon: "magnifying-glass",
      level: "Intermediate",
      value: 80,
    },
    {
      name: "Databricks Genie",
      info: ["Genie Agents", "Agent Bricks", "Genie One"],
      icon: "wand-magic-sparkles",
      level: "Intermediate",
      value: 70,
    },
    {
      name: "Azure AI Foundry",
      info: ["Document Intelligence", "Hosted Agents"],
      icon: "cloud",
      level: "Intermediate",
      value: 60,
    },
  ],
  webdev: [
    {
      name: "React",
      icon: "react",
      level: "Advanced",
      info: ["Tanstack", "Zustand", "Vite"],
      value: 90,
    },
    {
      name: "Node.js",
      icon: "node-js",
      level: "Intermediate",
      info: ["Express.js"],
      value: 75,
    },
    {
      name: "Bootstrap",
      icon: "bootstrap",
      level: "Intermediate",
      info: ["CSS Framework"],
      value: 90,
    },
    {
      name: "Tailwind CSS",
      icon: "server",
      level: "Intermediate",
      info: ["Utility-First"],
      value: 80,
    },
    {
      name: "FastAPI",
      icon: "bolt",
      level: "Intermediate",
      info: ["REST", "Streaming"],
      value: 80,
    },
    {
      name: "Shadcn UI",
      icon: "handle-bottom-right",
      level: "Intermediate",
      info: ["Component Library"],
      value: 75,
    },
  ],
  database: [
    {
      name: "MySQL",
      icon: "database",
      level: "Advanced",
      info: ["Relational DB"],
    },
    { name: "MongoDB", icon: "leaf", level: "Advanced", info: ["NoSQL DB"] },
    {
      name: "PostgreSQL",
      icon: "republican",
      level: "Intermediate",
      info: ["Relational DB"],
    },
    {
      name: "Vector DB (FAISS)",
      icon: "vector-square",
      level: "Intermediate",
      info: ["Vector Store"],
    },
    {
      name: "pgvector",
      icon: "layer-group",
      level: "Intermediate",
      info: ["PostgreSQL Extension"],
      value: 75,
    },
    {
      name: "Qdrant",
      icon: "hexagon-nodes",
      level: "Intermediate",
      info: ["Cloud Vector DB"],
      value: 70,
    },
  ],
  others: [
    {
      name: "Revenue Growth Management",
      info: ["Econometrics", "Purchase Structure", "Promo Pattern Recognition"],
      icon: "ranking-star",
      level: "Intermediate",
    },
    {
      name: "Git",
      icon: "git-alt",
      level: "Advanced",
      info: ["Github", "GitLab", "Azure DevOps"],
    },
    {
      name: "Docker",
      icon: "docker",
      level: "Intermediate",
      info: ["Azure Container Registry", "Docker Compose"],
    },
    {
      name: "AWS",
      icon: "aws",
      level: "Advanced",
      info: ["Cognito", "S3", "Lambda", "EC2", "Amplify"],
    },
    {
      name: "Celery Workers",
      icon: "celery",
      level: "Intermediate",
      value: 75,
      info: ["Task Queue", "Async Processing"],
    },
    {
      name: "Redis",
      icon: "redis",
      level: "Intermediate",
      value: 80,
      info: ["Caching", "Pub/Sub"],
    },
  ],
};

const LEVEL_STYLE: Record<Level, { badge: string; value: number }> = {
  Advanced: { badge: "bg-green-600 text-white", value: 90 },
  Intermediate: {
    badge: "bg-sky-500/15 text-sky-700 dark:text-sky-300",
    value: 65,
  },
  Basic: {
    badge: "bg-amber-400/20 text-amber-700 dark:text-amber-300",
    value: 40,
  },
  Learning: { badge: "bg-muted text-amber-700 dark:text-amber-300", value: 20 },
};

const Skills = () => {
  const [active, setActive] = useState<SkillTab>("datascience");
  const [hover, setHover] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  // Track whether the section has entered the viewport at least once
  const enteredRef = useRef(false);

  // On initial mount: wire up a one-time ScrollTrigger that fires card + bar
  // animations the first time the section scrolls into view.
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        once: true,
        onEnter: () => {
          enteredRef.current = true;
          animateBarsInSection(sectionRef.current);
          gsap.from(sectionRef.current!.querySelectorAll(".skill-card"), {
            y: 22,
            opacity: 0,
            stagger: 0.07,
            duration: 0.55,
            ease: "power2.out",
          });
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // On tab switch (after section already entered): re-animate bars only.
  // Cards stay visible — just do a quick translateY bounce for freshness.
  useEffect(() => {
    if (!enteredRef.current) return;
    // Small delay so React has committed the new cards to the DOM
    const id = requestAnimationFrame(() => {
      animateBarsInSection(sectionRef.current);
      gsap.from(sectionRef.current!.querySelectorAll(".skill-card"), {
        y: 10,
        opacity: 0,
        stagger: 0.05,
        duration: 0.35,
        ease: "power2.out",
      });
    });
    return () => cancelAnimationFrame(id);
  }, [active]);

  const tabs: { id: SkillTab; label: string; icon: string }[] = [
    { id: "datascience", label: "Data Science", icon: "chart-line" },
    { id: "ai", label: "Gen AI", icon: "robot" },
    { id: "webdev", label: "Web Dev", icon: "globe" },
    { id: "database", label: "Database", icon: "database" },
    { id: "language", label: "Language", icon: "code" },
    { id: "others", label: "Others", icon: "ellipsis" },
  ];

  const skills = SKILLS[active];
  const radarData = skills.map((s) => ({
    label: s.name,
    value: s.value ?? LEVEL_STYLE[s.level].value,
  }));

  return (
    <section ref={sectionRef} className="py-12 px-4 lg:px-[9%]" id="skill">
      <div className="container mx-auto px-4 md:px-2 mt-6 md:mt-6">
        <SectionHeader
          title="Skills"
          subtitle="Core tools and technical strengths across programming, AI systems, analytics, web development, and infrastructure."
        />
        <div className="bg-card relative overflow-hidden rounded-lg border p-6 md:p-10">
          {/* Tabs */}
          <div className="mb-8 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <Button
                key={t.id}
                size="sm"
                variant={active === t.id ? "default" : "outline"}
                onClick={() => {
                  setActive(t.id);
                  setHover(null);
                }}
              >
                <Icon name={t.icon} className="size-4" />
                {t.label}
              </Button>
            ))}
          </div>

          <div className="grid items-center gap-8 lg:grid-cols-[420px_minmax(0,1fr)] lg:gap-12">
            {/* Radar */}
            <RadarChart
              data={radarData}
              animateKey={active}
              activeIndex={hover}
              onHover={setHover}
              className="mx-auto w-full max-w-[420px]"
            />

            {/* Skill list: icon | name + info, then level + bar. Two per row. */}
            <ul className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2">
              {skills.map((s, i) => {
                const badge = LEVEL_STYLE[s.level].badge;
                const value = s.value ?? LEVEL_STYLE[s.level].value;
                return (
                  <li
                    key={s.name}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                    className={cn(
                      "skill-card from-card via-card to-primary/[0.07] flex flex-col gap-2.5 rounded-xl border bg-linear-to-br p-3 transition-colors",
                      hover === i && "border-primary/60",
                    )}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="bg-primary/10 text-primary flex size-9 shrink-0 items-center justify-center rounded-lg">
                        <Icon name={s.icon} className="size-5" />
                      </span>
                      <div className="min-w-0 grow">
                        <div className="truncate text-sm leading-tight font-bold">
                          {s.name}
                        </div>
                        {s.info && s.info.length > 0 && (
                          <div className="text-muted-foreground mt-0.5 line-clamp-2 text-[11px] leading-snug italic">
                            {s.info.join(", ")}
                          </div>
                        )}
                      </div>
                      <span className="text-muted-foreground shrink-0 text-xs">
                        {value}%
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span
                        className={cn(
                          "inline-block rounded-md px-2 py-0.5 text-[10px] italic",
                          badge,
                        )}
                      >
                        {s.level}
                      </span>
                      <div className="bg-primary/10 h-1.5 grow overflow-hidden rounded-full">
                        <div
                          className="skill-progress-bar bg-primary h-full rounded-full"
                          role="progressbar"
                          data-value={value}
                          style={{ width: "0%" }}
                          aria-valuenow={value}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// Animate progress bars scoped to a container element (avoids global selector conflicts)
function animateBarsInSection(container: HTMLElement | null) {
  if (!container) return;
  const bars = container.querySelectorAll<HTMLElement>(".skill-progress-bar");
  bars.forEach((bar) => {
    const target = `${bar.dataset.value}%`;
    gsap.fromTo(
      bar,
      { width: "0%" },
      { width: target, duration: 1, ease: "power2.out" },
    );
  });
}

export default Skills;
