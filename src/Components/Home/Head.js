import React from "react";
import TypingEffect from "./TypingEffect";
import "../Styling/Intro.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

const Head = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div className="portfolio-page">
      <div className="content-container text-center">
        <h1 className="animated-text display-1 fw-bold mb-4">
          Hi, I'm <span className="name-highlight">Mohd Zain</span>
        </h1>
        <TypingEffect
          className="role-text mb-3"
          text="Data Science Trainee at Sigmoid Analytics"
          speed={50}
        />
        <div className="description-text mt-4">
          <p>Currently working on text-to-image generation models, exploring diffusion and transformer-based architectures.</p>
          <p style={{ fontSize: "18px", marginTop: "-15px" }}>
            Built a multi-agent AI assistant for loan origination to streamline decision making and enhance risk evaluation.
            Previously worked on descriptive analytics for Hanes PPA.
          </p>
        </div>
        <div className="cta-buttons">
          {/* <Link
            to="https://mohdzain.com/projects"
            className={`btn btn-outline-light ${
              isTabletOrMobile ? "btn-sm" : "btn-lg"
            } mx-2`}
          >
            View Projects
          </Link> */}
          <Link
            to="mailto:zainmohd1998@gmail.com"
            className={`btn btn-primary ${isTabletOrMobile ? "btn-sm" : "btn-lg"
              } mx-2`}
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Social Links */}
      {!isTabletOrMobile && (
        <div className="social-links">
          <Link
            to="https://www.linkedin.com/in/zainatlink/"
            target="_blank"
            rel="noopener"
            className="social-icon"
          >
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link
            to="https:/github.com/mohdzain98/"
            target="_blank"
            rel="noopener"
            className="social-icon"
          >
            <i className="fab fa-github"></i>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Head;
