import SectionHeader from "../../../components/layout/SectionHeader";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = {
  language: "lang.jpg",
  datascience: "ds.jpg",
  ai: "ai.jpg",
  webdev: "webdev.jpg",
  others: "others.jpg",
  database: "db.jpeg",
};

const SKILLS = {
  language: [
    { name: "Python", icon: "fa-brands fa-python", level: "Advanced" },
    { name: "Java", icon: "fa-brands fa-java", level: "Advanced" },
    { name: "JavaScript", icon: "fa-brands fa-js", level: "Advanced" },
  ],
  datascience: [
    {
      name: "Data Wrangling",
      info: ["pandas", "numpy"],
      icon: "fa-solid fa-table-columns",
      level: "Advanced",
    },
    {
      name: "Machine Learning",
      info: ["scikit-learn", "Ensemble Learning"],
      icon: "fa-solid fa-robot",
      level: "Advanced",
    },
    {
      name: "Statistics",
      info: ["Statsmodels"],
      icon: "fa-solid fa-chart-line",
      level: "Intermediate",
    },
    {
      name: "Visualization",
      info: ["Matplotlib", "Seaborn"],
      icon: "fa-solid fa-chart-simple",
      level: "Intermediate",
    },
    {
      name: "Deep Learning",
      info: ["TensorFlow", "Keras", "PyTorch"],
      icon: "fa-solid fa-brain",
      level: "Basic",
    },
  ],
  ai: [
    {
      name: "LLMs / LangChain",
      icon: "fa-solid fa-brain",
      level: "Intermediate",
    },
    { name: "LangGraph", icon: "fa-solid fa-sitemap", level: "Intermediate" },
    {
      name: "RAG",
      icon: "fa-solid fa-coins",
      level: "Intermediate",
    },
    { name: "A2A-MCP", icon: "fa-solid fa-robot", level: "Basic" },
    {
      name: "LLM Tracing",
      icon: "fa-solid fa-magnifying-glass",
      level: "Intermediate",
    },
    { name: "Diffusion Models", icon: "fa-solid fa-image", level: "Learning" },
  ],
  webdev: [
    { name: "React", icon: "fa-brands fa-react", level: "Advanced" },
    { name: "HTML/CSS", icon: "fa-brands fa-html5", level: "Advanced" },
    { name: "Node.js", icon: "fa-brands fa-node-js", level: "Intermediate" },
    {
      name: "Bootstrap",
      icon: "fa-brands fa-bootstrap",
      level: "Intermediate",
    },
    { name: "Express", icon: "fa-solid fa-server", level: "Intermediate" },
    { name: "FastAPI", icon: "fa-solid fa-bolt", level: "Intermediate" },
    { name: "Flask", icon: "fa-solid fa-flask", level: "Intermediate" },
  ],
  database: [
    { name: "MySQL", icon: "fa-solid fa-database", level: "Advanced" },
    { name: "MongoDB", icon: "fa-solid fa-leaf", level: "Advanced" },
    {
      name: "PostgreSQL",
      icon: "fa-solid fa-republican",
      level: "Intermediate",
    },
    {
      name: "Vector DB (FAISS)",
      icon: "fa-solid fa-vector-square",
      level: "Intermediate",
    },
  ],
  others: [
    {
      name: "Revenue Growth Management",
      info: ["Econometrics", "Purchase Structure", "Promo Pattern Recognition"],
      icon: "fa-solid fa-ranking-star",
      level: "Intermediate",
    },
    { name: "Git", icon: "fa-brands fa-git-alt", level: "Advanced" },
    { name: "Docker", icon: "fa-brands fa-docker", level: "Intermediate" },
    { name: "Linux", icon: "fa-brands fa-linux", level: "Intermediate" },
  ],
};

const skillBG = {
  Advanced: { color: "success", text: "white" },
  Intermediate: { color: "info", text: "dark" },
  Basic: { color: "warning", text: "dark" },
  Learning: { color: "secondary", text: "warning" },
};

const Skills2 = () => {
  const [active, setActive] = useState("language");
  const sectionRef = useRef(null);
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
          gsap.from(sectionRef.current.querySelectorAll(".skill-card"), {
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
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // On tab switch (after section already entered): re-animate bars only.
  // Cards stay visible — just do a quick translateY bounce for freshness.
  useEffect(() => {
    if (!enteredRef.current) return;
    // Small delay so React has committed the new cards to the DOM
    const id = requestAnimationFrame(() => {
      animateBarsInSection(sectionRef.current);
      gsap.from(sectionRef.current.querySelectorAll(".skill-card"), {
        y: 10,
        opacity: 0,
        stagger: 0.05,
        duration: 0.35,
        ease: "power2.out",
      });
    });
    return () => cancelAnimationFrame(id);
  }, [active]);

  const tabs = [
    { id: "language", label: "Language", icon: "fa-solid fa-code" },
    {
      id: "datascience",
      label: "Data Science",
      icon: "fa-solid fa-chart-line",
    },
    { id: "ai", label: "AI", icon: "fa-solid fa-hexagon-nodes" },
    { id: "webdev", label: "Web Dev", icon: "fa-solid fa-globe" },
    { id: "database", label: "Database", icon: "fa-solid fa-database" },
    { id: "others", label: "Others", icon: "fa-solid fa-ellipsis" },
  ];

  const containerStyle = {
    borderRadius: 14,
    overflow: "hidden",
    minHeight: 420,
    position: "relative",
    background: "#fff",
  };

  const rightImageStyle = {
    backgroundImage: `url(${require(`../../../Assets/skills/${IMAGES[active]}`)})`,
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
      className="py-5 px-3 home-accent-section section-desktop-pad"
      id="skill"
    >
      <div className="container px-md-2 mt-4 mt-md-4">
        <SectionHeader
          title="Skills"
          subtitle="Core tools and technical strengths across programming, AI systems, analytics, web development, and infrastructure."
        />
        <div className="row">
          <div className="col-12">
            <div className="d-flex shadow-sm" style={containerStyle}>
              {/* LEFT: content area */}
              <div className="p-4 p-md-5 flex-grow-1" style={{ zIndex: 2 }}>
                {/* Tabs */}
                <div className="mb-4 d-flex flex-wrap gap-2">
                  {tabs.map((t) => (
                    <button
                      key={t.id}
                      className={`btn btn-sm ${
                        active === t.id
                          ? "btn-primary"
                          : "btn-outline-secondary text-muted"
                      }`}
                      onClick={() => setActive(t.id)}
                    >
                      <i className={`${t.icon} me-2`}></i>
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Skills grid */}
                <div className="row g-3">
                  {SKILLS[active].map((s) => {
                    const value =
                      s.level === "Advanced"
                        ? 90
                        : s.level === "Intermediate"
                          ? 65
                          : s.level === "Basic"
                            ? 40
                            : s.level === "Learning"
                              ? 20
                              : 50;

                    return (
                      <div key={s.name} className="col-12 col-sm-6">
                        <div
                          className="skill-card d-flex align-items-center p-3 rounded-3 h-100 border border-opacity-50 shadow-sm"
                          style={{
                            backgroundColor: "#fff",
                          }}
                        >
                          <i className={`${s.icon} fs-4 me-3 text-primary`} />
                          <div className="flex-grow-1">
                            <div className="d-flex justify-content-between align-items-center">
                              <div className="fw-semibold">{s.name}</div>
                              <div className="small text-muted">{value}%</div>
                            </div>
                            {s.info && s.info.length > 0 && (
                              <div className="small text-muted fw-light fst-italic">
                                {s.info.join(", ")}
                              </div>
                            )}
                            <div
                              className={`border shadow-sm rounded px-2 px-3 d-inline-block bg-${skillBG[s.level]["color"]} text-${skillBG[s.level]["text"]} bg-gradient`}
                            >
                              <p
                                className="fst-italic"
                                style={{
                                  fontSize: "12px",
                                  marginBottom: "0px",
                                }}
                              >
                                {s.level}
                              </p>
                            </div>
                            <div className="mt-2">
                              <div
                                className="progress"
                                style={{ height: "6px" }}
                              >
                                <div
                                  className="skill-progress-bar progress-bar bg-primary"
                                  role="progressbar"
                                  data-value={value}
                                  style={{ width: "0%" }}
                                  aria-valuenow={value}
                                  aria-valuemin="0"
                                  aria-valuemax="100"
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
                className="d-none d-md-block"
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
function animateBarsInSection(container) {
  if (!container) return;
  const bars = container.querySelectorAll(".skill-progress-bar");
  bars.forEach((bar) => {
    const target = bar.dataset.value + "%";
    gsap.fromTo(
      bar,
      { width: "0%" },
      { width: target, duration: 1, ease: "power2.out" },
    );
  });
}

export default Skills2;
