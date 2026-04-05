import React from "react";
import "../Styling/Intro.css";
import SectionHeader from "../../../components/layout/SectionHeader";
import { Link } from "react-router-dom";

const Achivements = () => {
  return (
    <div
      className="py-5 px-3 section-desktop-pad"
      id="achievements"
      style={{ backgroundColor: "#dfe5faff" }}
    >
      <div className="container px-md-2 mt-4 mb-4">
        <SectionHeader
          title="Achievements"
          subtitle="Highlights from competitive wins, academic milestones, and recognition earned along the way."
        />
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div
              className="card shadow-sm p-3"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body">
                <div className="d-flex flex-column flex-md-row align-items-md-start gap-3">
                  <div>
                    <div className="d-flex justify-content-between flex-row align-items-start">
                      <div>
                        <h3 className="h5 fw-bold mb-1">
                          Financial AI Hackathon Championship 2025 - 1st Place
                        </h3>
                        <p className="text-muted mb-3">
                          LandingAI, New York | Team: LoanLens AI
                        </p>
                      </div>
                      <div>
                        <div className="bg-primary bg-gradient bg-opacity-10 fs-4 py-2 px-3 rounded text-primary d-none d-md-block">
                          <i className="fa-solid fa-trophy"></i>
                        </div>
                      </div>
                    </div>
                    <p className="mb-2">
                      Won 1st place at Financial AI Hackathon 2025{" "}
                      <strong>LandingAI </strong>
                      by building an agentic AI system for loan underwriting.
                    </p>
                    <p className="mb-0 text-muted">
                      Automated document extraction, fraud detection, and
                      decision intelligence with explainable AI workflows.
                    </p>
                  </div>
                </div>
                <div>
                  <Link
                    to="/achievements/landingai-financial-ai-hackathon"
                    className="text-decoration-none fw-semibold mt-3 d-inline-flex align-items-center gap-1 text-dark mt-4"
                    style={{ fontSize: "14px" }}
                  >
                    View Details{" "}
                    <i className="fa-solid fa-arrow-right fa-sm ms-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div
              className="card shadow-sm h-100 p-3"
              style={{ borderRadius: "15px" }}
            >
              <div className="card-body">
                <div className="d-flex justify-content-between  align-items-center gap-3 mb-2">
                  <div>
                    <h3 className="h5 fw-bold mb-1">GATE 2022</h3>
                    <p className="text-muted mb-0">All India Rank 1579</p>
                  </div>
                  <div className="bg-success bg-gradient bg-opacity-10 fs-4 py-2 px-3 rounded text-success fs-3 d-none d-md-block">
                    <i className="fa-solid fa-medal"></i>
                  </div>
                </div>
                <p className="mb-0">
                  Achieved AIR 1579 in the Graduate Aptitude Test in Engineering
                  (GATE) 2022.
                </p>
                <p className="mb-0 text-muted">
                  Paper Computer Science and Information Technology (CS)
                  conducted by IIT Kharagpur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achivements;
