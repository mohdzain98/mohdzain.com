import React from "react";
import "../Styling/Intro.css";
import "animate.css";
import { useMediaQuery } from "react-responsive";
import Ribbon from "../../../components/layout/Ribbon";

const Intro = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <section className="home py-5" id="about">
      <center>
        <Ribbon value={"About Me"} color={"blue"} />
      </center>
      <div className={`pb-3 row`}>
        <div className="col-md-5 d-flex flex-column">
          <center>
            <div className="image flex-grow-1">
              <img
                src={require("../../../Assets/mypic.jpeg")}
                alt="mohdzain"
                width={isTabletOrMobile ? 230 : 330}
                height={isTabletOrMobile ? 230 : 330}
                style={{ borderRadius: "10%" }}
                className="align-self-center"
              />
            </div>
          </center>
          <div className="text-secondary mt-auto">
            <h3 className="h4 mb-4 mt-2 fw-bold text-dark">About</h3>
            <p className="mt-4">
              📚 M.Tech in Data Analytics from IIT (ISM) Dhanbad
              <br />
              🎓 B.Tech in Computer Science and Engineering from UTU.
              <br />
              💻 Passionate about applied Machine Learning, Gen AI.
            </p>
          </div>
        </div>
        <div className="col-md-7 mx-auto">
          <div className="row align-items-center">
            <div className="mx-auto">
              <div className="text-secondary">
                <h3 className="h4 mb-4 fw-bold text-dark">Work Experience</h3>
                <div
                  className="ps-1"
                  style={{ maxHeight: "300px", overflow: "auto" }}
                >
                  <p
                    className="fw-bold text-dark"
                    style={{ marginBottom: "1px" }}
                  >
                    Sigmoid | Data Science Trainee{" "}
                    <span
                      className={`float-end ${
                        isTabletOrMobile ? "invisible" : ""
                      }`}
                      style={{ fontSize: "14px" }}
                    >
                      Jan 2025 - present
                    </span>
                    {isTabletOrMobile && (
                      <p style={{ fontSize: "14px" }}>Jan 2025 - present</p>
                    )}
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    {" "}
                    <ul>
                      <li>
                        Currently working on RGMx for CPG client related to data
                        refresh and model drift.
                      </li>
                      <li>
                        Worked on Gen AI projects, focusing on tracing LLMs and
                        text-to-image generation.
                      </li>
                      <li>
                        Built an interactive AI assistant to support lending
                        institutions in evaluating loan approvals, borrower
                        risk, and fairness compliance. The system leveraged
                        LangGraph powered multi agent orchestration with LLMs
                        and delivered visual insights via Streamlit
                      </li>
                      <li>
                        Previously worked on descriptive analytics for Hanes PPA
                        where we created advanced excel and python
                        visualizations to analyze multi brand sales and pricing
                        data.
                      </li>
                      <li>
                        Prior to that, developed econometric models for revenue
                        growth management, focusing on price elasticity and
                        promotional effectiveness. Subsequently, performed price
                        optimization using NLopt.
                      </li>
                    </ul>
                  </p>
                </div>
                <div className="ps-1">
                  <p
                    className="fw-bold text-dark"
                    style={{ marginBottom: "2px" }}
                  >
                    Sigmoid | Data Science Intern{" "}
                    <span
                      className={`float-end ${
                        isTabletOrMobile ? "invisible" : ""
                      }`}
                      style={{ fontSize: "14px" }}
                    >
                      Aug 2024 - Dec 2024
                    </span>
                    {isTabletOrMobile && (
                      <p style={{ fontSize: "14px" }}>Aug 2024 - Dec 2024</p>
                    )}
                  </p>
                  <p>
                    <ul>
                      <li>
                        Got selected in RGMx project in econometrics team,
                        building predictive models and validating their
                        performance.
                      </li>
                      <li>
                        Enhanced SQL and Python proficiency through hands-on
                        tasks, including database querying and data manip-
                        ulation.
                      </li>
                      <li>
                        Participated in training programs on Python, SQL, and
                        visualization techniques to strengthen foundational
                        skills.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
