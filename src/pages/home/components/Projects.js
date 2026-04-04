import { useRef } from "react";
import { projects } from "../../../config/allproject";
import "../Styling/Projects.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import SectionHeader from "../../../components/layout/SectionHeader";

const Projects = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const sectionRef = useRef(null);

  const handleClick = (href) => {
    window.open(`${href}`, "_blank");
  };

  return (
    <div
      id="projects"
      className="py-5 px-3 home-accent-section section-desktop-pad"
      ref={sectionRef}
    >
      <div className="container px-md-2 mt-4">
        <SectionHeader
          title="Projects"
          subtitle="Selected builds across Gen AI, machine learning, computer vision, and full-stack product work."
        />
        <div className="row g-4 align-items-stretch">
          {projects.map((item) => (
            <div className="col-12 col-sm-6 col-xl-4 d-flex" key={item.Name}>
              <div
                className={`project-card box shadow-sm p-4 ${
                  isTabletOrMobile ? "" : "h-100"
                }`}
                onClick={() => handleClick(item.Live)}
              >
                <h5 className="text-primary">{item.Name}</h5>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  {item.Desc}
                </p>
                <p className="d-inline">Tech Stack: </p>
                <ul className="list-inline">
                  {item.Techs.map((f) => (
                    <li
                      key={f}
                      className="list-inline-item tline my-1"
                      style={{ fontSize: "12px" }}
                    >
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-start">
          <Link
            to="/projects"
            className="text-muted ms-1"
            style={{
              textDecoration: "none",
              color: "black",
              fontWeight: "bold",
            }}
          >
            More Projects <i className="fa-solid fa-arrow-right ms-1" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Projects;
