import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { exp } from "../config/allexp";
import SectionHeader from "../components/layout/SectionHeader";
import "./home/Styling/Industry.css";

const INDUSTRY_SECTIONS = [
  {
    id: "agentic-ai",
    eyebrow: "01",
    title: "Agentic AI Systems",
    subtitle:
      "Production-oriented agent workflows, orchestration patterns, and multi-agent systems built for reliable reasoning and decision support.",
  },
  {
    id: "research-platform",
    eyebrow: "02",
    title: "Research & Observability",
    subtitle:
      "Exploration across LLM adaptation, neuro-symbolic ideas, document intelligence, and evaluation pipelines for reliable AI systems.",
  },
  {
    id: "platform-engineering",
    eyebrow: "03",
    title: "Platform Engineering",
    subtitle:
      "Internal platforms, developer tooling, and data apps designed to improve quality, automation, and day-to-day engineering workflows.",
  },
  {
    id: "econometrics-mlops",
    eyebrow: "04",
    title: "Econometrics & MLOps",
    subtitle:
      "Optimization engines, regression systems, and production monitoring workflows focused on measurable business impact and operational robustness.",
  },
];

const groupedExperience = INDUSTRY_SECTIONS.map((section) => ({
  ...section,
  items: exp.filter((item) => item.section === section.id),
}));

const IndustryCard = ({ item }) => {
  return (
    <div className="col-12 col-md-6 col-xl-4">
      <article className="industry-card h-100">
        <div className="industry-card-top">
          <span className="industry-type-badge">{item.type}</span>
          <div className="industry-icon">
            <i className={`fa-solid ${item.icon}`}></i>
          </div>
        </div>

        <h3 className="industry-card-title">{item.name}</h3>
        <p className="industry-card-desc">{item.desc}</p>

        <div className="industry-techs">
          {item.techs.map((tech) => (
            <span key={`${item.name}-${tech}`} className="industry-tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
};

const IndustrySection = ({ eyebrow, title, subtitle, items }) => {
  if (!items.length) return null;

  return (
    <section className="industry-section">
      <div className="industry-section-head">
        <p className="industry-section-eyebrow">{eyebrow}</p>
        <h2 className="industry-section-title">{title}</h2>
        <p className="industry-section-subtitle">{subtitle}</p>
      </div>

      <div className="row g-4">
        {items.map((item) => (
          <IndustryCard key={item.name} item={item} />
        ))}
      </div>
    </section>
  );
};

const Industry = () => {
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
      <div className="industry-page">
        <div className="container py-5 px-3 px-md-5 px-xl-5 industry-shell">
          <nav aria-label="breadcrumb" className="industry-breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Industry
              </li>
            </ol>
          </nav>

          <SectionHeader
            title="Industry"
            subtitle="A detailed view of the systems, platforms, and applied AI work I have built across enterprise workflows, research exploration, and production tooling."
            className="mb-5"
          />

          <div className="industry-sections">
            {groupedExperience.map((section) => (
              <IndustrySection key={section.id} {...section} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Industry;
