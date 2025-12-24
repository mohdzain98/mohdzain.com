import React from "react";
import "../Styling/cp.css";
import { Link } from "react-router-dom";
import "animate.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useMediaQuery } from "react-responsive";
import Ribbon from "../../../components/layout/Ribbon";

const Careerpath = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <section className="cp">
      <div className="container px-2 py-5">
        <center>
          <div style={{ marginBottom: "50px" }}>
            <Ribbon value={"Career Path"} color={"Orange"} />
          </div>
        </center>
        <div
          className={`row ${isTabletOrMobile ? "row-cols-2" : "row-cols-4"}`}
        >
          <AnimatedOnScroll animationIn="animate__animated animate__zoomIn">
            <div className="col">
              <center>
                <Link to="https://sigmoid.com" target="_blank" rel="noopener">
                  <img
                    src={require("../../../Assets/sig.png")}
                    alt="company"
                    className="image shadow-sm border border-opacity-50"
                  />
                </Link>
                <p class="p5">Sigmoid</p>
                <p class="p5">2024-present</p>
              </center>
            </div>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="animate__animated animate__zoomIn">
            <div className="col">
              <center>
                <Link
                  to="https://www.iitism.ac.in/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src={require("../../../Assets/iit.png")}
                    alt="mtech"
                    className="image shadow-sm border border-opacity-50"
                  />
                </Link>
                <p class="p5">IIT ISM Dhanbad</p>
                <p class="p5">2022-24</p>
              </center>
            </div>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="animate__animated animate__zoomIn">
            <div
              className="col"
              style={isTabletOrMobile ? { marginTop: "15px" } : {}}
            >
              <center>
                <Link to="https://uktech.ac.in/" target="_blank" rel="noopener">
                  <img
                    src={require("../../../Assets/utu.png")}
                    alt="btech"
                    className="image shadow-sm border border-opacity-50"
                  />
                </Link>
                <p class="p5">Uttarakhand Technical University</p>
                <p class="p5">2017-21</p>
              </center>
            </div>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="animate__animated animate__zoomIn">
            <div
              className="col"
              style={isTabletOrMobile ? { marginTop: "15px" } : {}}
            >
              <center>
                <Link
                  to="https://www.cisce.org/"
                  target="_blank"
                  rel="noopener"
                >
                  <img
                    src={require("../../../Assets/isc.png")}
                    alt="12th"
                    className="image shadow-sm border border-opacity-50"
                  />
                </Link>
                <p class="p5">St Mary's School</p>
                <p class="p5">CISCE, 2017</p>
              </center>
            </div>
          </AnimatedOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Careerpath;
