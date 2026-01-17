import React from "react";
import "../Styling/Footer.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <footer className="text-white bg-dark pt-4 pb-3">
      <div className="container">
        <div className="d-flex justify-content-around align-items-center">
          <div className="footer-item">
            <p className="text-center mb-1" style={{ fontSize: "14px" }}>
              &copy; 2025 Mohd Zain
            </p>
            <p className="text-center mb-0" style={{ fontSize: "12px" }}>
              Updated on : 04 Jan, 2025 V: 2.7.0
            </p>
          </div>
          <div
            className={`d-flex ${
              isTabletOrMobile ? "flex-column" : "flex-row gap-3"
            } align-items-center`}
          >
            <div className="footer-item">
              <Link
                to="https://old.mohdzain.com"
                target="_blank"
                rel="noopener"
                className="footer-link"
              >
                Old Site{" "}
                <i className="fa-solid fa-arrow-up-right-from-square fa-xs ms-1"></i>
              </Link>
            </div>

            <div className="footer-item">
              <button
                className="btn btn-outline-light btn-sm"
                onClick={handleBackToTop}
              >
                Back to Top <i className="fa-solid fa-arrow-up fa-sm ms-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
