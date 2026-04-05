import { Helmet } from "react-helmet-async";
import { allprojects } from "../config/allproject";
import { Link } from "react-router-dom";
import SectionHeader from "../components/layout/SectionHeader";
import "./home/Styling/Projects.css";
import "animate.css";

const PROJECT_SECTIONS = [
  {
    id: "gen-ai",
    eyebrow: "01",
    title: "Gen AI Systems",
    icon: "fa-solid fa-brain",
    subtitle:
      "LLM-powered tools, retrieval workflows, and agentic utilities built to make knowledge access and interaction more useful in real-world settings.",
  },
  {
    id: "python-package",
    eyebrow: "02",
    title: "Python Packages & Tools",
    icon: "fa-brands fa-python",
    subtitle:
      "Reusable libraries, utilities, and frameworks designed for use across projects and teams.  ",
  },
  {
    id: "chrome-extensions",
    eyebrow: "03",
    title: "Chrome Extensions",
    icon: "fa-brands fa-chrome",
    subtitle:
      "Lightweight browser-first products focused on reducing friction, adding intelligence, and turning repeated actions into fast workflows.",
  },
  {
    id: "machine-learning",
    eyebrow: "04",
    title: "Machine Learning",
    icon: "fa-solid fa-chart-line",
    subtitle:
      "Predictive modeling, neural networks, and applied experimentation across forecasting, computer vision, recommendation, and optimization problems.",
  },
  {
    id: "deep-learning",
    eyebrow: "05",
    title: "Deep Learning",
    icon: "fa-solid fa-network-wired",
    subtitle:
      "Neural networks, convolutional architectures, and applied experimentation across image recognition, natural language processing, and generative models.",
  },
  {
    id: "web-apps",
    eyebrow: "06",
    title: "Web Apps & Systems",
    icon: "fa-solid fa-globe",
    subtitle:
      "Shipped products and production-style builds spanning full-stack apps, utilities, and web systems designed for direct use.",
  },
];

const categorizedProjects = PROJECT_SECTIONS.map((section) => ({
  ...section,
  items: allprojects.filter((project) => project.category === section.id),
}));

const ActionLink = ({ action }) => {
  // const cls = `btn btn-outline-${action.bg} btn-sm`;
  const cls = `btn btn-light btn-sm text-${action.bg} rounded-3`;
  const style = { padding: "5px 9px" };

  if (action.ref === "_self" && action.link.startsWith("/")) {
    return (
      <Link to={action.link} className={cls} style={style} title={action.name}>
        <i className={action.icon} />
      </Link>
    );
  }

  return (
    <a
      href={action.link}
      className={cls}
      style={style}
      title={action.name}
      target={action.ref}
      rel={action.ref === "_blank" ? "noreferrer" : undefined}
    >
      <i className={action.icon} />
    </a>
  );
};

const ProjectCard = ({ item }) => {
  return (
    <div className="col-12 col-md-6 col-xl-4">
      <div className="allproject-card card h-100 border-0 shadow-sm p-3">
        {/* <img
          src={require(`../Assets/Projects/${item.img}`)}
          className="card-img-top"
          alt={item.Name}
          height={200}
        /> */}
        <div className="card-body d-flex flex-column">
          <span
            className="text-uppercase text-muted mb-1 fw-semibold"
            style={{ fontSize: "11px", letterSpacing: "1px" }}
          >
            {item.type}
          </span>
          <h5 className="fw-semibold card-title allproject-card-title">
            {item.Name}
          </h5>
          <p className="card-text text-muted" style={{ fontSize: "14px" }}>
            {item.Desc}
          </p>
          <p className="mb-1 mt-2" style={{ fontSize: "15px" }}>
            Technologies
          </p>
          <ul className="list-inline mb-3">
            {item.Techs.map((tool) => (
              <li
                key={`${item.Name}-${tool}`}
                className="list-inline-item tline my-1 px-2 bg-secondary bg-opacity-10 text-dark fw-semibold"
                style={{ fontSize: "11px" }}
              >
                {tool}
              </li>
            ))}
          </ul>
          <div className="allproject-actions mt-auto d-flex flex-wrap gap-2">
            {item.button.map((action) => (
              <ActionLink key={`${item.Name}-${action.name}`} action={action} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = ({ id, eyebrow, title, subtitle, items }) => {
  if (!items.length) return null;

  return (
    <section className="allproject-section" id={id}>
      <div className="allproject-section-head">
        <div>
          <p className="allproject-section-eyebrow">{eyebrow}</p>
          <h2 className="allproject-section-title">{title}</h2>
          <p className="allproject-section-subtitle">{subtitle}</p>
        </div>
      </div>

      <div className="row g-4">
        {items.map((item) => (
          <ProjectCard key={item.Name} item={item} />
        ))}
      </div>
    </section>
  );
};

const Allprojects = () => {
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
      <div
        id="allproject"
        style={{
          backgroundColor: "#f8fafc",
          minHeight: "100vh",
          paddingBottom: "80px",
          paddingTop: "2%",
        }}
      >
        <div className="container py-5 px-3 px-md-5 px-xl-5 allproject-shell">
          <nav aria-label="breadcrumb" className="stbd">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Projects
              </li>
            </ol>
          </nav>

          <SectionHeader
            title="Projects"
            subtitle="A broader collection of my work across Gen AI, machine learning, computer vision, and product-focused engineering."
            className="mb-4"
          />

          <div className="d-flex flex-wrap gap-2 mb-5">
            {PROJECT_SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="d-flex align-items-center gap-2 px-3 py-2 bg-white border rounded-3 shadow-sm text-decoration-none text-dark"
                style={{ fontSize: "14px", fontWeight: 500 }}
              >
                <i className={`${s.icon} text-primary`} />
                {s.title}
              </a>
            ))}
          </div>

          <div className="allproject-sections">
            {categorizedProjects.map((section) => (
              <ProjectSection key={section.id} {...section} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Allprojects;
