import { useEffect, useRef } from "react";
import "../Styling/Intro.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const aboutItems = [
  {
    icon: "fa-solid fa-graduation-cap",
    label: "M.Tech · Data Analytics",
    sub: "IIT (ISM) Dhanbad",
    accent: "#0d6efd",
  },
  {
    icon: "fa-solid fa-laptop-code",
    label: "B.Tech · CSE",
    sub: "Uttarakhand Technical University",
    accent: "#198754",
  },
];

const Intro = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-photo", { x: -60, opacity: 0, duration: 0.9 })
        .from(
          ".hero-about-title",
          { y: 20, opacity: 0, duration: 0.5 },
          "-=0.5",
        )
        .from(
          ".about-pill",
          { y: 16, opacity: 0, stagger: 0.12, duration: 0.5 },
          "-=0.3",
        )
        .from(".hero-exp-title", { y: 20, opacity: 0, duration: 0.5 }, "-=0.2")
        .from(
          ".hero-exp-card",
          { y: 28, opacity: 0, stagger: 0.16, duration: 0.55 },
          "-=0.2",
        )
        .from(".hero-see-more", { opacity: 0, duration: 0.4 }, "-=0.1");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ padding: isTabletOrMobile ? "50px 8%" : "70px 10%" }}
      className="border"
    >
      <div className="row g-5 align-items-start">
        {/* ── Left: photo + about ── */}
        <div className="col-md-4 d-flex flex-column align-items-center align-items-md-start">
          {/* Photo */}
          <div className="hero-photo mb-4">
            <img
              src={require("../../../Assets/mypic.jpeg")}
              alt="mohdzain"
              width={isTabletOrMobile ? 200 : 280}
              height={isTabletOrMobile ? 200 : 280}
              style={{
                borderRadius: "14px",
                objectFit: "cover",
                boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                display: "block",
              }}
            />
          </div>

          {/* About heading */}
          <p
            className="hero-about-title fw-bold mb-3"
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#0d6efd",
            }}
          >
            About Me
          </p>

          {/* Icon pills */}
          <div className="d-flex flex-column gap-2 w-100">
            {aboutItems.map((item) => (
              <div
                key={item.label}
                className="about-pill d-flex align-items-center gap-3 px-3 py-2 rounded-3"
                style={{
                  backgroundColor: item.accent + "0d",
                  border: `1px solid ${item.accent}22`,
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "8px",
                    backgroundColor: item.accent + "18",
                    color: item.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 15,
                    flexShrink: 0,
                  }}
                >
                  <i className={item.icon} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#1a1a2e",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{ fontSize: "11px", color: "#888", lineHeight: 1.3 }}
                  >
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: work experience ── */}
        <div className="col-md-8">
          <p
            className="hero-exp-title fw-bold mb-4"
            style={{
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#0d6efd",
            }}
          >
            Work Experience
          </p>

          {/* Data Scientist */}
          <div
            className="hero-exp-card rounded-3 p-4 mb-3"
            style={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid #e8eaf0",
              borderLeft: "3px solid #0d6efd",
              boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
            }}
          >
            <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#0d6efd",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  Sigmoid
                </p>
                <p
                  className="fw-bold mb-1"
                  style={{ fontSize: "18px", color: "#1a1a2e" }}
                >
                  Data Scientist
                </p>
                <p
                  className="mb-0"
                  style={{ fontSize: "13px", color: "#555", lineHeight: 1.6 }}
                >
                  Working on Agentic AI projects including LLM tracing,
                  text-to-image, video-to-action and multi-agent AI systems
                  using LangGraph.
                </p>
              </div>
              <span
                className="badge rounded-pill text-nowrap"
                style={{
                  backgroundColor: "#0d6efd18",
                  color: "#0d6efd",
                  fontSize: "11px",
                  padding: "5px 10px",
                }}
              >
                Jan 2026 – present
              </span>
            </div>
          </div>

          {/* Associate Data Scientist */}
          <div
            className="hero-exp-card rounded-3 p-4 mb-3"
            style={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid #e8eaf0",
              borderLeft: "3px solid #6c757d",
              boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
            }}
          >
            <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#6c757d",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  Sigmoid
                </p>
                <p
                  className="fw-bold mb-1"
                  style={{ fontSize: "17px", color: "#1a1a2e" }}
                >
                  Associate Data Scientist
                </p>
                <p
                  className="mb-0"
                  style={{ fontSize: "13px", color: "#555", lineHeight: 1.6 }}
                >
                  Worked in the RGMx econometrics team, building predictive
                  models for price elasticity and promotional effectiveness
                  analysis. Developed an AI-driven loan underwriting system
                  using predictive modeling and document intelligence.
                </p>
              </div>
              <span
                className="badge rounded-pill text-nowrap"
                style={{
                  backgroundColor: "#6c757d18",
                  color: "#6c757d",
                  fontSize: "11px",
                  padding: "5px 10px",
                }}
              >
                Jan – Dec 2025
              </span>
            </div>
          </div>

          {/* Data Science Intern */}
          <div
            className="hero-exp-card rounded-3 px-4 py-3 mb-3"
            style={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid #e8eaf0",
              borderLeft: "3px solid #adb5bd",
              boxShadow: "0 2px 16px rgba(0,0,0,0.05)",
            }}
          >
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "#adb5bd",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: 3,
                  }}
                >
                  Sigmoid
                </p>
                <p
                  className="fw-semibold mb-0"
                  style={{ fontSize: "15px", color: "#1a1a2e" }}
                >
                  Data Science Intern &nbsp;
                  <span
                    style={{ fontSize: "12px", color: "#888", fontWeight: 400 }}
                  >
                    — RGMx econometrics onboarding, model validation &amp; SQL.
                  </span>
                </p>
              </div>
              <span
                className="badge rounded-pill text-nowrap"
                style={{
                  backgroundColor: "#adb5bd18",
                  color: "#888",
                  fontSize: "11px",
                  padding: "5px 10px",
                }}
              >
                Aug – Dec 2024
              </span>
            </div>
          </div>

          <div className="hero-see-more mt-4">
            <Link
              to="/experience"
              className="btn btn-sm"
              style={{
                backgroundColor: "transparent",
                border: "1px solid #0d6efd",
                color: "#0d6efd",
                borderRadius: "8px",
                padding: "6px 16px",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              See Full Experience &nbsp;
              <i
                className="fa-solid fa-arrow-right"
                style={{ fontSize: "11px" }}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
