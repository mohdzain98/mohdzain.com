import React from "react";
import "../Styling/Intro.css";
import "animate.css";
import { useMediaQuery } from "react-responsive";
import Ribbon from "../Ribbon";

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
                src={require("../../Assets/zain_updated.jpeg")}
                alt="mohdzain"
                width={isTabletOrMobile ? 230 : 330}
                height={isTabletOrMobile ? 230 : 330}
                style={{ borderRadius: "10%" }}
                className="align-self-center"
              />
            </div>
          </center>
          <div className="text-secondary mt-auto">
            <h3 className="h4 mb-4 mt-2 fw-bold">About</h3>
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
                <h3 className="h4 mb-4 fw-bold">Work Experience</h3>
                <div className="ps-1">
                  <p className="fw-bold" style={{ marginBottom: "1px" }}>
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
                        Currently Building an interactive AI assistant to
                        support lending institutions in evaluating loan
                        approvals, borrower risk and fairness compliance. The
                        assistant leverages LangGraph powered multi agent
                        orchestration with LLM and provides visual insights via
                        Streamlit
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
                  <p className="fw-bold" style={{ marginBottom: "1px" }}>
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
                <h3 className="h4 mt-5 mb-3 fw-bold">Academic Research</h3>
                <p style={{ textAlign: "justify" }}>
                  Developed a DNA-based color image cryptosystem during my
                  M.Tech thesis, focusing on secure image transmission through
                  innovative binary functions and DNA-based encoding techniques.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
