import React from "react";
import "../Styling/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="text-white bg-dark pt-4 pb-3">
      <div className="container footer-container">
        <div className="footer-shell">
          <div className="footer-meta">
            <p className="mb-1" style={{ fontSize: "14px" }}>
              &copy; 2026 Mohd Zain
            </p>
            <p className="mb-0" style={{ fontSize: "12px" }}>
              Updated on : 06 April, 2026 V: 3.0.1
            </p>
          </div>

          <div className="footer-actions">
            <div className="footer-socials">
              <Link
                to="https://www.linkedin.com/in/zainatlink/"
                target="_blank"
                rel="noopener"
                className="footer-social-link"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link
                to="https://github.com/mohdzain98"
                target="_blank"
                rel="noopener"
                className="footer-social-link"
              >
                <i className="fab fa-github"></i>
              </Link>
              <Link
                to="https://www.instagram.com/m0hd.zain/"
                target="_blank"
                rel="noopener"
                className="footer-social-link"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                to="https://x.com/M0hdZain"
                target="_blank"
                rel="noopener"
                className="footer-social-link"
              >
                <i className="fa-brands fa-x-twitter"></i>
              </Link>
            </div>

            <button
              className="btn btn-outline-light btn-sm"
              onClick={handleBackToTop}
            >
              Back to Top <i className="fa-solid fa-arrow-up fa-sm ms-1"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
