import { Helmet } from "react-helmet-async";
import { allprojects } from "../config/allproject";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import "./home/Styling/Projects.css";
import "animate.css";

const Allprojects = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      <Helmet>
        <title>Projects | Mohd Zain</title>
        <meta
          name="description"
          content="Portfolio projects and case studies by Mohd Zain, including tools, technologies, and links."
        />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <div id="allproject" style={{ paddingTop: "2%" }}>
        <div
          className={`container ${isTabletOrMobile ? "p-4" : "px-0"}`}
          style={{
            marginTop: "1%",
            maxWidth: isTabletOrMobile ? "100%" : "1200px",
          }}
        >
          <nav aria-label="breadcrumb" className="stbd">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Projects
              </li>
            </ol>
          </nav>

          <div>
            <h2 style={{ color: "maroon" }}>Projects</h2>
            <hr style={{ color: "black", height: "2px" }} />
          </div>
          <div className="row">
            {allprojects.map((item) => {
              return (
                <div className="col-md-4 col-xs-12 my-4">
                  <div class="card h-100 p-1" style={{ width: "17rem;" }}>
                    <AnimatedOnScroll animationIn="animate__animated animate__flash">
                      <img
                        src={require(`../Assets/Projects/${item.img}`)}
                        class="card-img-top"
                        alt="..."
                        height={170}
                      />
                    </AnimatedOnScroll>
                    <div class="card-body d-flex flex-column">
                      <h5 class="card-title">{item.Name}</h5>
                      <ul className="list-inline">
                        {item.Techs.map((e) => {
                          return (
                            <li
                              className="list-inline-item"
                              style={{ fontSize: "13px" }}
                            >
                              {e}
                            </li>
                          );
                        })}
                      </ul>
                      <p
                        class="card-text text-muted"
                        style={{
                          fontSize: "14px",
                          // textAlign: "justify",
                        }}
                      >
                        {item.Desc}
                      </p>
                      <p style={{ marginBottom: "-1%" }}>Tools: </p>
                      <ul className="list-inline">
                        {item.Tools.map((f) => {
                          return (
                            <li
                              className="list-inline-item tline my-1"
                              style={{ fontSize: "12px" }}
                            >
                              {f}
                            </li>
                          );
                        })}
                      </ul>
                      <div className="foot mt-auto">
                        {item.button.map((val) => {
                          return (
                            <Link
                              to={val.link}
                              className={`btn btn-${val.bg} btn-sm ms-2`}
                              style={{ bottom: "0" }}
                              target={val.ref}
                            >
                              <i className={`${val.icon} me-2`}></i>
                              {val.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Allprojects;
