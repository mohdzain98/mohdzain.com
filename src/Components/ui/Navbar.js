import React, { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Link as ScrollLink } from "react-scroll";
import "../../App.css";

const Navbar = () => {
  const ref = useRef();
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const location = useLocation();
  const rollNavBack = () => {
    isTabletOrMobile && ref.current.click();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id="nav">
      <div className="container-fluid">
        <Link className="navbar-brand mb-0 h1" to="/">
          MZ
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          ref={ref}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav  me-auto mb-2 mb-lg-0 ms-2">
            {location.pathname === "/" ? (
              <li class="nav-item dropdown">
                <a
                  class={`nav-link dropdown-toggle ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Home
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
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
                      to="research"
                      smooth={true}
                      duration={50}
                      onClick={rollNavBack}
                      style={{ cursor: "pointer" }}
                    >
                      Research
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
                      to="soc"
                      smooth={true}
                      duration={50}
                      onClick={rollNavBack}
                      style={{ cursor: "pointer" }}
                    >
                      Socials
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
                  location.pathname === "/blogs" ||
                  location.pathname === "/blogs/color-images-cryptosystem"
                    ? "active"
                    : ""
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
                to="https://drive.google.com/file/d/1vZUVvbGi8euOLnYXMRL75VORWNsQT0Py/view?usp=sharing"
                target="_blank"
                rel="noopener"
                onClick={rollNavBack}
              >
                Vitae
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/gitrepos" ? "active" : ""
                }`}
                to="/gitrepos"
                onClick={rollNavBack}
              >
                Git Repos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
