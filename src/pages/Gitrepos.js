import { useEffect } from "react";
import repo from "../config/allrepos";
import { Link } from "react-router-dom";
import "./home/Styling/Repos.css";
import "animate.css";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useMediaQuery } from "react-responsive";

const Gitrepos = () => {
  useEffect(() => {
    document.title = "git repos | Mohd Zain";
  }, []);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const handleClick = (url) => {
    window.open(`${url}`, "_blank");
  };
  return (
    <div id="repos" style={{ padding: "2%" }}>
      <div className="container p-4" style={{ marginTop: "1%" }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Github Repositories
          </li>
        </ol>
        <h1 className="mt-3">More GitHub Repositories</h1>
        <hr style={{ color: "black", height: "2px" }} />
        <div className={`row ${isTabletOrMobile ? "" : "row-cols-3"}`}>
          {repo.map((item) => {
            return (
              <div className="col">
                <AnimatedOnScroll animationIn="animate__animated animate__pulse">
                  <div class="dis" onClick={() => handleClick(item.url)}>
                    <div class="data">
                      <Link
                        to={item.url}
                        target="_blank"
                        rel="noopener"
                        style={{ textDecoration: "none" }}
                      >
                        {item.name}
                      </Link>
                      <p class="define">{item.define}</p>
                      <p class="visible top-right">{item.visible}</p>
                      <p class="top-down">
                        <i
                          class="fa fa-circle"
                          style={{ color: `${item.color}`, marginRight: "4px" }}
                        ></i>
                        {item.lang}
                      </p>
                    </div>
                  </div>
                </AnimatedOnScroll>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gitrepos;
