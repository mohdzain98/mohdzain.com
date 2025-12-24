import React from "react";
import "../Styling/Intro.css";
import Ribbon from "../../../components/layout/Ribbon";

const Achivements = () => {
  return (
    <section
      className="py-5"
      id="achievements"
      style={{ backgroundColor: "#dfe5faff" }}
    >
      <center>
        <Ribbon value={"Achievements"} color={"grey"} />
      </center>
      <div className="container mt-5">
        <div className="row g-4">
          <div className="col-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <div className="d-flex flex-column flex-md-row align-items-md-start gap-3">
                  <div className="text-primary fs-2">
                    <i className="fa-solid fa-trophy"></i>
                  </div>
                  <div>
                    <div className="d-flex justify-content-between flex-row align-items-start">
                      <div>
                        <h3 className="h4 fw-bold mb-1">
                          Financial AI Hackathon Championship 2025 - 1st Place
                        </h3>
                        <p className="text-muted mb-3">
                          LandingAI, New York | Team: LoanLens AI
                        </p>
                      </div>
                      <div>
                        <a
                          className="btn btn-outline-secondary btn-sm"
                          href="https://github.com/mohdzain98/loanlens-ai"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <i className="fa-brands fa-github me-2"></i>Github
                        </a>
                      </div>
                    </div>
                    <p className="mb-3">
                      Built an agentic AI system to make loan underwriting
                      faster, accurate, and fraud-resilient.
                    </p>
                    <ul className="mb-3">
                      <li>
                        Automated financial document extraction using agentic
                        document extraction.
                      </li>
                      <li>
                        Fraud detection via agentic object detection tampering
                        checks.
                      </li>
                      <li>
                        Decision intelligence engine for borrower health and
                        creditworthiness.
                      </li>
                      <li>
                        End-to-end transparency with traceability and confidence
                        scoring.
                      </li>
                      <li>
                        RAG-powered chatbot for interactive case queries and
                        explanations.
                      </li>
                    </ul>
                    <p className="mb-0 text-muted">
                      Special thanks to team lead Tanika Gupta and teammates
                      Ritesh Kumar, Abhisek Banerjee, Anand Kumar, Rahul
                      Kushwaha, Nilanjan Sahu, and Abhishek Thombre.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <div className="d-flex align-items-center gap-3 mb-2">
                  <div className="text-success fs-3">
                    <i className="fa-solid fa-medal"></i>
                  </div>
                  <div>
                    <h3 className="h5 fw-bold mb-1">GATE 2022</h3>
                    <p className="text-muted mb-0">All India Rank 1579</p>
                  </div>
                </div>
                <p className="mb-0">
                  Achieved AIR 1579 in the Graduate Aptitude Test in Engineering
                  (GATE) 2022.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achivements;
