import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Link as ScrollLink } from "react-scroll";
import "../../App.css";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const rollNavBack = () => {
    if (!isTabletOrMobile || !isNavOpen) return;

    setIsNavOpen(false);
    const collapseEl = document.getElementById("navbarSupportedContent");
    if (collapseEl && collapseEl.classList.contains("show")) {
      const bootstrapCollapse = window.bootstrap?.Collapse;
      bootstrapCollapse?.getOrCreateInstance(collapseEl).hide();
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light sticky-top site-navbar ${
        isScrolled ? "site-navbar-scrolled" : ""
      }`}
      id="nav"
      style={{
        paddingBottom: isTabletOrMobile ? "10px" : "0",
      }}
    >
      <div
        className="container"
        style={{
          padding: "5px 0",
          maxWidth: isTabletOrMobile ? "90%" : "1200px",
          marginBottom: "0",
        }}
      >
        <Link className="navbar-brand mb-0 h1 fw-bold text-glow" to="/">
          MZ
        </Link>
        <button
          className={`navbar-toggler ${isNavOpen ? "is-open" : ""}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsNavOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {location.pathname === "/" ? (
              <li className="nav-item dropdown">
                <button
                  className={`nav-link dropdown-toggle ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  id="navbarDropdown"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <ScrollLink
                      className="dropdown-item"
                      to="about"
                      smooth={true}
                      duration={50}
                      onClick={rollNavBack}
                      style={{ cursor: "pointer" }}
                    >
                      About Me
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="dropdown-item"
                      to="experience"
                      smooth={true}
                      duration={50}
                      onClick={rollNavBack}
                      style={{ cursor: "pointer" }}
                    >
                      Industry
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="dropdown-item"
                      to="cp"
                      smooth={true}
                      duration={50}
                      onClick={rollNavBack}
                      style={{ cursor: "pointer" }}
                    >
                      Career Path
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="dropdown-item"
                      to="skill"
                      smooth={true}
                      duration={50}
                      onClick={rollNavBack}
                      style={{ cursor: "pointer" }}
                    >
                      Skills
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="dropdown-item"
                      to="achievements"
                      smooth={true}
                      duration={50}
                      onClick={rollNavBack}
                      style={{ cursor: "pointer" }}
                    >
                      Achievements
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="dropdown-item"
                      to="projects"
                      smooth={true}
                      duration={50}
                      onClick={rollNavBack}
                      style={{ cursor: "pointer" }}
                    >
                      Projects
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="dropdown-item"
                      to="research"
                      smooth={true}
                      duration={50}
                      onClick={rollNavBack}
                      style={{ cursor: "pointer" }}
                    >
                      Research
                    </ScrollLink>
                  </li>
                </ul>
              </li>
            ) : (
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                  onClick={rollNavBack}
                >
                  Home
                </Link>
              </li>
            )}
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/experience" ? "active" : ""
                }`}
                to="/experience"
                onClick={rollNavBack}
              >
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/projects" ||
                  location.pathname === "/projects/gnost"
                    ? "active"
                    : ""
                }`}
                to="/projects"
                onClick={rollNavBack}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname.startsWith("/blogs") ? "active" : ""
                }`}
                to="/blogs"
                onClick={rollNavBack}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/cv" ? "active" : ""
                }`}
                to="https://drive.google.com/file/d/1_fD52n9t2l91nAGw3rDiKv17V2mo9lKK/view?usp=sharing"
                target="_blank"
                rel="noopener"
                onClick={rollNavBack}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
