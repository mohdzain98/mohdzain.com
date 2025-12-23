import Ribbon from "../../../components/layout/Ribbon";
import { useState } from "react";
// import { useMediaQuery } from "react-responsive";

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
  Advanced: {
    color: "success",
    text: "white",
  },
  Intermediate: {
    color: "info",
    text: "dark",
  },
  Basic: {
    color: "warning",
    text: "dark",
  },
  Learning: {
    color: "secondary",
    text: "warning",
  },
};

const Skills2 = () => {
  //   const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [active, setActive] = useState("language");

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
    boxShadow: "0 6px 28px rgba(15,23,42,0.12)",
    minHeight: 420,
    position: "relative",
    background: "#fff",
  };

  // right image panel: uses a layered background where
  // gradient fades from left (white) -> transparent so image blends in
  const rightImageStyle = {
    backgroundImage: ` url(${require(`../../../Assets/skills/${IMAGES[active]}`)})`,
    backgroundSize: "cover",
    backgroundPosition: "left center",
    height: "100%",
    width: "100%",
    filter: "brightness(0.6)",
    transition: "background-image 0.5s ease, filter 0.5s ease",
  };

  const contentWrapperStyle = {
    zIndex: 2,
  };
  return (
    <section
      className="py-5"
      id="skill"
      style={{ padding: 0, backgroundColor: " rgb(244, 238, 216)" }}
    >
      <center>
        <div style={{ marginBottom: "50px" }}>
          <Ribbon value={"Skills"} color="Brown" />
        </div>
      </center>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <div className="d-flex" style={containerStyle}>
              {/* LEFT: content area */}
              <div
                className="p-4 p-md-5 flex-grow-1"
                style={contentWrapperStyle}
              >
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

                {/* Skills grid — positioned on left but we offset so it visually aligns with reference */}
                <div className="row g-3">
                  {SKILLS[active].map((s) => {
                    // compute numeric value once
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
                          className="d-flex align-items-center p-3 rounded-3 h-100"
                          style={{
                            backgroundColor: "#fff",
                            boxShadow: "0 4px 16px rgba(15,23,42,0.06)",
                          }}
                        >
                          <i className={`${s.icon} fs-4 me-3 text-primary`} />

                          {/* Make this a column and allow it to grow */}
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
                              className={`border shadow-sm rounded px-2 px-3 d-inline-block bg-${
                                skillBG[s.level]["color"]
                              } text-${skillBG[s.level]["text"]} bg-gradient`}
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

                            {/* progress with full width */}
                            <div className="mt-2">
                              <div
                                className="progress"
                                style={{ height: "6px" }}
                              >
                                <div
                                  className="progress-bar bg-primary"
                                  role="progressbar"
                                  style={{ width: `${value}%` }}
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

              {/* RIGHT: faded image panel (hidden on small screens) */}
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

export default Skills2;
