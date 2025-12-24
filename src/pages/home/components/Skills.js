import React from "react";
import "../Styling/Skills.css";
import CPBar from "../../../components/Bars/CPBar";
import { useMediaQuery } from "react-responsive";
import ProgressBar from "../../../components/Bars/ProgressBar";
import Vertical from "../../../components/Bars/Vertical";
import SegmentedProgressBar from "../../../components/Bars/SegmentedProgressBar";
import Ribbon from "../../../components/layout/Ribbon";

const Skills = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const size = isTabletOrMobile ? 70 : 120;
  const stroke = isTabletOrMobile ? 5 : 8;
  const fs = isTabletOrMobile ? 12 : 18;

  return (
    <div className="skill p-4" id="skill">
      <div className="container p-2" style={{ marginTop: "1%" }}>
        <center>
          <div style={{ marginBottom: "50px" }}>
            <Ribbon value={"Skills"} color="Brown" />
          </div>
        </center>
        <div className={`${isTabletOrMobile ? "" : "row row-cols-3"}`}>
          <div className="col">
            <div
              className="stype"
              style={
                isTabletOrMobile
                  ? { borderLeft: "none" }
                  : { paddingLeft: "10px" }
              }
            >
              <h4 className="head">Languages</h4>
            </div>
          </div>
          <div className={`${isTabletOrMobile ? "col" : "col-8"}`}>
            <div className="pbar">
              <div className="row row-cols-3 cbar">
                <center>
                  <div className="col">
                    <CPBar
                      targetProgress={80}
                      size={size}
                      strokeWidth={stroke}
                      fsize={fs}
                    />
                    <p className="lname">Java</p>
                  </div>
                </center>
                <center>
                  <div className="col">
                    <CPBar
                      targetProgress={70}
                      size={size}
                      strokeWidth={stroke}
                      fsize={fs}
                    />
                    <p className="lname">python</p>
                  </div>
                </center>
                <center>
                  <div className="col">
                    <CPBar
                      targetProgress={75}
                      size={size}
                      strokeWidth={stroke}
                      fsize={fs}
                    />
                    <p className="lname">JavaScript</p>
                  </div>
                </center>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${isTabletOrMobile ? "" : "row row-cols-3"}`}
          style={{ marginTop: "5%" }}
        >
          <div className="col">
            <div
              className="stype"
              style={
                isTabletOrMobile ? { border: "none" } : { paddingLeft: "10px" }
              }
            >
              <h4 className="head">Data Science</h4>
            </div>
          </div>
          <div className={`${isTabletOrMobile ? "col" : "col-8"} `}>
            <div className="row row-cols-2">
              <div className="col px-3 mb-4">
                <p
                  className="d-inline text-muted"
                  style={isTabletOrMobile ? { fontSize: "12px" } : {}}
                >
                  Pandas
                </p>
                <ProgressBar
                  targetProgress={90}
                  height={12}
                  width="100%"
                  backgroundColor="#fff"
                  progressColor="#ff6f61"
                />
              </div>
              <div className="col px-3 mb-4">
                <p
                  className="d-inline text-muted"
                  style={isTabletOrMobile ? { fontSize: "12px" } : {}}
                >
                  MatplotLib
                </p>
                <ProgressBar
                  targetProgress={90}
                  height={12}
                  width="100%"
                  backgroundColor="#fff"
                  progressColor="#ff6f61"
                />
              </div>
              <div className="col px-3 mb-4">
                <p
                  className="d-inline text-muted"
                  style={isTabletOrMobile ? { fontSize: "12px" } : {}}
                >
                  Sklearn
                </p>
                <ProgressBar
                  targetProgress={80}
                  height={12}
                  width="100%"
                  backgroundColor="#fff"
                  progressColor="#ff6f61"
                />
              </div>
              <div className="col px-3 mb-4">
                <p
                  className="d-inline text-muted"
                  style={isTabletOrMobile ? { fontSize: "12px" } : {}}
                >
                  TensorFlow
                </p>
                <ProgressBar
                  targetProgress={70}
                  height={12}
                  width="100%"
                  backgroundColor="#fff"
                  progressColor="#ff6f61"
                />
              </div>
              <div className="col px-3 mb-4">
                <p
                  className="d-inline text-muted"
                  style={isTabletOrMobile ? { fontSize: "12px" } : {}}
                >
                  LLM(Langchain)
                </p>
                <ProgressBar
                  targetProgress={70}
                  height={12}
                  width="100%"
                  backgroundColor="#fff"
                  progressColor="#ff6f61"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${isTabletOrMobile ? "" : "row row-cols-3"}`}
          style={{ marginTop: "5%" }}
        >
          <div className="col">
            <div
              className="stype"
              style={
                isTabletOrMobile ? { border: "none" } : { paddingLeft: "10px" }
              }
            >
              <h4 className="head">Web Development</h4>
            </div>
          </div>
          <div className={`${isTabletOrMobile ? "col" : "col-8"} `}>
            <div className="row row-cols-4">
              <div className="col">
                <center>
                  <Vertical
                    targetProgress={90}
                    height={170}
                    width={30}
                    backgroundColor="#fff"
                    progressColor="#76c7c0"
                  />
                  <p
                    className="my-2 text-muted"
                    style={isTabletOrMobile ? { fontSize: "12px" } : {}}
                  >
                    React Frontend
                  </p>
                </center>
              </div>
              <div className="col">
                <center>
                  <Vertical
                    targetProgress={80}
                    height={170}
                    width={30}
                    backgroundColor="#fff"
                    progressColor="#76c7c0"
                  />
                  <p
                    className="my-2 text-muted"
                    style={isTabletOrMobile ? { fontSize: "12px" } : {}}
                  >
                    Express Backend
                  </p>
                </center>
              </div>
              <div className="col">
                <center>
                  <Vertical
                    targetProgress={70}
                    height={170}
                    width={30}
                    backgroundColor="#fff"
                    progressColor="#76c7c0"
                  />
                  <p
                    className="my-2 text-muted"
                    style={isTabletOrMobile ? { fontSize: "12px" } : {}}
                  >
                    Flask Backend
                  </p>
                </center>
              </div>
              <div className="col" id="moreskill">
                <div className="mb-2">
                  <p
                    className="d-inline me-4"
                    style={isTabletOrMobile ? { fontSize: "12px" } : {}}
                  >
                    HTML & CSS
                  </p>
                </div>
                <div className="mb-2">
                  <p
                    className="d-inline me-4"
                    style={isTabletOrMobile ? { fontSize: "12px" } : {}}
                  >
                    Bootstrap
                  </p>
                </div>
                <div className="mb-2">
                  <p
                    className="d-inline me-4"
                    style={isTabletOrMobile ? { fontSize: "12px" } : {}}
                  >
                    redux
                  </p>
                </div>
                <div className="mb-2">
                  <p
                    className="d-inline me-4"
                    style={isTabletOrMobile ? { fontSize: "12px" } : {}}
                  >
                    JWT
                  </p>
                </div>
                <div className="mb-2">
                  <p
                    className="d-inline me-4"
                    style={isTabletOrMobile ? { fontSize: "12px" } : {}}
                  >
                    bcryptjs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${isTabletOrMobile ? "" : "row row-cols-3"}`}
          style={{ marginTop: "5%" }}
        >
          <div className="col">
            <div
              className="stype"
              style={
                isTabletOrMobile ? { border: "none" } : { paddingLeft: "10px" }
              }
            >
              <h4 className="head">Databases</h4>
            </div>
          </div>
          <div className={`${isTabletOrMobile ? "col" : "col-8"} `}>
            <div className="row row-cols-2">
              <div className="col">
                <p className="d-inline me-2">MySql - </p>
                <p className="d-inline" style={{ fontSize: "12px" }}>
                  80%
                </p>
                <SegmentedProgressBar
                  steps={5}
                  targetSteps={4}
                  barWidth="90%"
                  barHeight={isTabletOrMobile ? "14px" : "18px"}
                  activeColor="#ff6f61"
                  inactiveColor="#e0e0e0"
                />
              </div>
              <div className="col">
                <p className="d-inline me-2">MongoDb - </p>
                <p className="d-inline" style={{ fontSize: "12px" }}>
                  80%
                </p>
                <SegmentedProgressBar
                  steps={5}
                  targetSteps={4}
                  barWidth="90%"
                  barHeight={isTabletOrMobile ? "14px" : "18px"}
                  activeColor="#ff6f61"
                  inactiveColor="#e0e0e0"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${isTabletOrMobile ? "" : "row row-cols-3"}`}
          style={{ marginTop: "5%" }}
        >
          <div className="col">
            <div
              className="stype"
              style={
                isTabletOrMobile ? { border: "none" } : { paddingLeft: "10px" }
              }
            >
              <h4 className="head">Others</h4>
            </div>
          </div>
          <div className={`${isTabletOrMobile ? "col" : "col-8"} `}>
            <div className="row row-cols-2">
              <div className="col">
                <ul>
                  <li>System Design</li>
                  <li>Git</li>
                </ul>
              </div>
              <div className="col">
                <ul>
                  <li>Jupyter</li>
                  <li>VS Code</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
