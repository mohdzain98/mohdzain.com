import { Icon } from "@/components/icons/Icon";
import { Button } from "@/components/ui/button";
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
  info?: string[];
}

const IMAGES: Record<SkillTab, string> = {
  language: "lang.webp",
  datascience: "ds.webp",
  ai: "ai.webp",
  webdev: "webdev.webp",
  others: "others.webp",
  database: "db.webp",
};

const SKILLS: Record<SkillTab, Skill[]> = {
  language: [
    { name: "Python", icon: "python", level: "Advanced" },
    { name: "Java", icon: "java", level: "Advanced" },
    { name: "JavaScript", icon: "js", level: "Advanced" },
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
  ],
  ai: [
    {
      name: "LLMs / LangChain",
      icon: "brain",
      level: "Intermediate",
    },
    { name: "LangGraph", icon: "sitemap", level: "Intermediate" },
    {
      name: "RAG",
      icon: "coins",
      level: "Intermediate",
    },
    { name: "A2A-MCP", icon: "robot", level: "Basic" },
    {
      name: "LLM Tracing",
      icon: "magnifying-glass",
      level: "Intermediate",
    },
    { name: "Diffusion Models", icon: "image", level: "Learning" },
  ],
  webdev: [
    { name: "React", icon: "react", level: "Advanced" },
    { name: "HTML/CSS", icon: "html5", level: "Advanced" },
    { name: "Node.js", icon: "node-js", level: "Intermediate" },
    {
      name: "Bootstrap",
      icon: "bootstrap",
      level: "Intermediate",
    },
    { name: "Express", icon: "server", level: "Intermediate" },
    { name: "FastAPI", icon: "bolt", level: "Intermediate" },
    { name: "Flask", icon: "flask", level: "Intermediate" },
  ],
  database: [
    { name: "MySQL", icon: "database", level: "Advanced" },
    { name: "MongoDB", icon: "leaf", level: "Advanced" },
    {
      name: "PostgreSQL",
      icon: "republican",
      level: "Intermediate",
    },
    {
      name: "Vector DB (FAISS)",
      icon: "vector-square",
      level: "Intermediate",
    },
  ],
  others: [
    {
      name: "Revenue Growth Management",
      info: ["Econometrics", "Purchase Structure", "Promo Pattern Recognition"],
      icon: "ranking-star",
      level: "Intermediate",
    },
    { name: "Git", icon: "git-alt", level: "Advanced" },
    { name: "Docker", icon: "docker", level: "Intermediate" },
    { name: "Linux", icon: "linux", level: "Intermediate" },
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
  const [active, setActive] = useState<SkillTab>("language");
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
    { id: "language", label: "Language", icon: "code" },
    {
      id: "datascience",
      label: "Data Science",
      icon: "chart-line",
    },
    { id: "ai", label: "AI", icon: "robot" },
    { id: "webdev", label: "Web Dev", icon: "globe" },
    { id: "database", label: "Database", icon: "database" },
    { id: "others", label: "Others", icon: "ellipsis" },
  ];

  const containerStyle: React.CSSProperties = {
    borderRadius: 8,
    overflow: "hidden",
    minHeight: 420,
    position: "relative",
    background: "var(--card)",
  };

  const rightImageStyle = {
    backgroundImage: `url(${new URL(`../../../assets/skills/${IMAGES[active]}`, import.meta.url).href})`,
    backgroundSize: "cover",
    backgroundPosition: "left center",
    height: "100%",
    width: "100%",
    filter: "brightness(0.6)",
    transition: "background-image 0.5s ease, filter 0.5s ease",
  };

  return (
    <section
      ref={sectionRef}
      className="py-12 px-4 home-accent-section lg:px-[9%]"
      id="skill"
    >
      <div className="container mx-auto px-4 md:px-2 mt-6 md:mt-6">
        <SectionHeader
          title="Skills"
          subtitle="Core tools and technical strengths across programming, AI systems, analytics, web development, and infrastructure."
        />
        <div className="grid grid-cols-12 gap-x-6">
          <div className="col-span-12">
            <div className="flex " style={containerStyle}>
              {/* LEFT: content area */}
              <div className="p-6 md:p-12 grow" style={{ zIndex: 2 }}>
                {/* Tabs */}
                <div className="mb-6 flex flex-wrap gap-2">
                  {tabs.map((t) => (
                    <Button
                      key={t.id}
                      size="sm"
                      variant={active === t.id ? "default" : "outline"}
                      onClick={() => setActive(t.id)}
                    >
                      <Icon name={t.icon} className="size-4" />
                      {t.label}
                    </Button>
                  ))}
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-12 gap-4">
                  {SKILLS[active].map((s) => {
                    const { badge, value } = LEVEL_STYLE[s.level];

                    return (
                      <div key={s.name} className="col-span-12 sm:col-span-6">
                        <div
                          className="skill-card flex items-center p-4 rounded-lg h-full border "
                          style={{
                            backgroundColor: "var(--card)",
                          }}
                        >
                          <Icon
                            name={s.icon}
                            className="size-[1em] text-2xl mr-4 text-primary"
                          />
                          <div className="grow">
                            <div className="flex justify-between items-center">
                              <div className="font-semibold">{s.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {value}%
                              </div>
                            </div>
                            {s.info && s.info.length > 0 && (
                              <div className="text-sm text-muted-foreground font-light italic">
                                {s.info.join(", ")}
                              </div>
                            )}
                            <div
                              className={cn(
                                "mt-1 inline-block rounded-md px-3 py-0.5 text-xs italic",
                                badge,
                              )}
                            >
                              {s.level}
                            </div>
                            <div className="mt-2">
                              <div className="bg-muted h-1.5 overflow-hidden rounded-full">
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
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* RIGHT: faded image panel */}
              <div
                className="hidden md:block"
                style={{ width: "100%", minWidth: 320, maxWidth: 520 }}
              >
                <div style={rightImageStyle} />
              </div>
            </div>
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
