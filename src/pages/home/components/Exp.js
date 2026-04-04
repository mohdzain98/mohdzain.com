import { exp } from "../../../config/allexp";
import { Link } from "react-router-dom";
import SectionHeader from "../../../components/layout/SectionHeader";
import "../Styling/Intro.css";

const Exp = () => {
  const items = exp.slice(0, 3);

  return (
    <div
      id="experience"
      className="py-5 px-3 home-accent-section section-desktop-pad"
    >
      <div className="container px-md-2 mt-4">
        <SectionHeader
          title="Industry"
          subtitle="Building applied AI and data science systems across production workflows, experimentation, and measurable business outcomes."
        />
        <div className="row g-4">
          {items.map((item, idx) => (
            <div className="col-12 col-md-4" key={`${item.name}-${idx}`}>
              <div
                className="card shadow-sm h-100"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body d-flex flex-column p-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="text-primary fs-4">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <h3 className="h5 fw-bold mb-0">{item.name}</h3>
                  </div>
                  <p className="text-muted" style={{ fontSize: "15px" }}>
                    {item.desc}
                  </p>
                  <div className="d-flex flex-wrap gap-2 mt-auto">
                    {item.techs.map((tech) => (
                      <span
                        key={`${item.name}-${tech}`}
                        className="badge badge-sm rounded-pill bg-primary bg-opacity-10 text-primary"
                        style={{ fontSize: "12px" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-start">
          <Link
            to="/industry"
            className="text-muted mt-4 ms-1"
            style={{
              textDecoration: "none",
              color: "#111827",
              fontWeight: 700,
            }}
          >
            View All Work <i className="fa-solid fa-arrow-right ms-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Exp;
