import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    company: "Sigmoid",
    role: "Data Scientist",
    type: "Full Time",
    period: "Jan 2026 – Present",
    accentColor: "#0d6efd",
    badgeClass: "bg-primary bg-opacity-10 text-primary",
    bullets: [
      "Built a ReAct-based LLM system with tool integration, memory handling, and evaluation pipelines, enabling scalable and reliable AI-driven decision workflows",
      "Designed model monitoring pipelines for drift detection and automated data refresh workflows.",
      "Integrated MLflow and Feature Store for reproducibility, versioning, and scalable ML lifecycle management.",
    ],
    techs: [
      "Python",
      "LangGraph",
      "LangChain",
      "Arize Phoenix",
      "Streamlit",
      "MLflow",
      "Feature Store",
    ],
    icon: "fa-solid fa-chart-line",
  },
  {
    company: "Sigmoid",
    role: "Associate Data Scientist",
    type: "Full Time",
    period: "Jan 2025 – Dec 2025",
    accentColor: "#0d6efd",
    badgeClass: "bg-primary bg-opacity-10 text-primary",
    bullets: [
      "Secured 1st place at Financial AI Hackathon (LandingAI, New York) by developing an AI-driven loan under-writing system with predictive modeling, document intelligence, and explainable insights",
      "Implemented agent tracing and observability using LangSmith to monitor, debug, and optimize LLM-based multi-agent workflows, improving reliability and transparency.",
      "Worked on building an interactive AI assistant to support lending institutions in evaluating loan approvals, borrower risk and fairness compliance. The assistant leverages LangGraph powered multi agent orchestration with LLM and provides visual insights via Streamlit.",
      "Worked on econometric models (price elasticity, promotions) and performed optimization for revenue growth.",
    ],
    techs: [
      "Python",
      "SQL",
      "Data Visualization",
      "Pandas",
      "Scikit-learn",
      "Econometrics",
      "NLopt",
      "Diffusion Models",
    ],
    icon: "fa-solid fa-flask",
  },
  {
    company: "Sigmoid",
    role: "Data Science Intern",
    type: "Internship",
    period: "Aug 2024 – Dec 2024",
    accentColor: "#6c757d",
    badgeClass: "bg-secondary bg-opacity-10 text-secondary",
    bullets: [
      "Onboarded into the RGMx econometrics team — learned the project pipeline and began contributing to model validation.",
      "Enhanced SQL and Python proficiency through hands-on tasks including database querying, data manipulation, and automation scripts.",
      "Participated in structured training programs on Python, SQL, and data visualization techniques to strengthen foundational data skills.",
    ],
    techs: ["Python", "SQL", "Data Visualization", "Pandas"],
    icon: "fa-solid fa-user-graduate",
  },
];

const ExperienceCard = ({ exp, index }) => (
  <div className="exp-card col-12 col-md-10 col-lg-8 mx-auto mb-5 position-relative">
    <div
      className="d-none d-md-block"
      style={{
        position: "absolute",
        left: "50%",
        top: 0,
        transform: "translate(-50%, -50%)",
        width: 14,
        height: 14,
        borderRadius: "50%",
        backgroundColor: exp.accentColor,
        border: "3px solid #fff",
        boxShadow: `0 0 0 3px ${exp.accentColor}55`,
        zIndex: 2,
      }}
    />
    <div
      className="card border-0 shadow-sm h-100"
      style={{
        borderRadius: "16px",
        borderTop: `4px solid ${exp.accentColor}`,
        overflow: "hidden",
      }}
    >
      <div className="card-body p-4 p-md-5">
        {/* Header */}
        <div className="d-flex align-items-start justify-content-between flex-wrap gap-3 mb-4">
          <div className="d-flex align-items-center gap-3">
            <div
              className="d-flex align-items-center justify-content-center rounded-circle"
              style={{
                width: 48,
                height: 48,
                backgroundColor: exp.accentColor + "18",
                color: exp.accentColor,
                fontSize: 20,
                flexShrink: 0,
              }}
            >
              <i className={exp.icon}></i>
            </div>
            <div>
              <h4 className="fw-bold mb-0" style={{ color: "#1a1a2e" }}>
                {exp.role}
              </h4>
              <p className="text-muted mb-0" style={{ fontSize: "14px" }}>
                {exp.company} <span className="text-muted">·</span> {exp.type}
              </p>
            </div>
          </div>
          <span
            className={`badge ${exp.badgeClass} border fw-semibold`}
            style={{ fontSize: "12px", padding: "6px 12px" }}
          >
            {exp.period}
          </span>
        </div>

        {/* Bullets */}
        <ul
          className="ps-3 mb-4"
          style={{ fontSize: "14.5px", lineHeight: "1.8", color: "#444" }}
        >
          {exp.bullets.map((b, bi) => (
            <li key={bi} className="mb-2">
              {b}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="d-flex flex-wrap gap-2">
          {exp.techs.map((t) => (
            <span
              key={t}
              className="exp-tech-badge badge rounded-pill border"
              style={{
                fontSize: "12px",
                backgroundColor: exp.accentColor + "12",
                color: exp.accentColor,
                // eslint-disable-next-line
                borderColor: exp.accentColor + "40" + " !important",
                padding: "5px 12px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Experience = () => {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.from(".exp-page-header", {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Timeline line draw
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".timeline-line",
          start: "top 80%",
        },
      });

      // Cards stagger in from alternating sides
      gsap.utils.toArray(".exp-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
        });
      });

      // Tech badges pop in
      gsap.utils.toArray(".exp-tech-badge").forEach((badge) => {
        gsap.from(badge, {
          scrollTrigger: {
            trigger: badge,
            start: "top 95%",
          },
          scale: 0.6,
          opacity: 0,
          duration: 0.35,
          ease: "back.out(1.7)",
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Experience | Mohd Zain</title>
        <meta
          name="description"
          content="Full work experience of Mohd Zain — Data Scientist at Sigmoid, covering Gen AI, econometrics, and multi-agent systems."
        />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <div
        ref={pageRef}
        style={{
          backgroundColor: "#f8fafc",
          minHeight: "100vh",
          paddingBottom: "80px",
        }}
      >
        <div className="container pt-5">
          {/* Page header */}
          <div className="exp-page-header text-center mb-5 pb-2">
            <h1
              className="fw-bold"
              style={{ fontSize: "2.2rem", color: "#1a1a2e" }}
            >
              Work Experience
            </h1>
            <p className="text-muted mt-2" style={{ fontSize: "16px" }}>
              My professional journey in Data Science &amp; AI
            </p>
            <div
              style={{
                width: 60,
                height: 4,
                backgroundColor: "#0d6efd",
                borderRadius: 2,
                margin: "16px auto 0",
              }}
            />
          </div>

          {/* Timeline wrapper */}
          <div className="position-relative">
            {/* Vertical line */}
            <div
              className="timeline-line d-none d-md-block"
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: 2,
                backgroundColor: "#dee2e6",
                transform: "translateX(-50%)",
                zIndex: 0,
              }}
            />

            {/* Cards */}
            <div className="row">
              {experiences.map((exp, idx) => (
                <ExperienceCard key={idx} exp={exp} index={idx} />
              ))}
            </div>
          </div>

          {/* Back link */}
          <div className="text-center mt-4">
            <Link to="/" className="btn btn-outline-secondary btn-sm">
              <i className="fa-solid fa-arrow-left me-1"></i> Back to Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
