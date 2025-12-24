import React from "react";
import { exp } from "../../../config/allexp";
import Ribbon from "../../../components/layout/Ribbon";
import "../Styling/Intro.css";

const Exp = () => {
  const items = exp.slice(0, 4);

  return (
    <section
      id="experience"
      className="py-5"
      style={{ backgroundColor: "#f0e1f5ff" }}
    >
      <center>
        <Ribbon value={"Industry"} color={"blue"} />
      </center>
      <div className="container mt-5">
        <div className="row g-4">
          {items.map((item, idx) => (
            <div className="col-12 col-md-6" key={`${item.name}-${idx}`}>
              <div className="card border shadow-sm rounded-lg h-100">
                <div className="card-body p-4">
                  <div className="d-flex align-items-center gap-3 mb-3">
                    <div className="text-primary fs-4">
                      <i className={`fa-solid ${item.icon}`}></i>
                    </div>
                    <h3 className="h5 fw-bold mb-0">{item.name}</h3>
                  </div>
                  <p
                    className="text-muted"
                    style={{ textAlign: "justify", fontSize: "14px" }}
                  >
                    {item.desc}
                  </p>
                  <div className="d-flex flex-wrap gap-2">
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
      </div>
    </section>
  );
};

export default Exp;
