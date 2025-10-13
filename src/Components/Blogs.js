import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Styling/Blogs.css";
import { useMediaQuery } from "react-responsive";

const Blogs = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  useEffect(() => {
    document.title = "blogs | Mohd Zain";
  }, []);
  return (
    <div
      id="blogs"
      style={isTabletOrMobile ? { padding: "2%" } : { padding: "2% 15%" }}
    >
      <div className="container p-4" style={{ marginTop: "1%" }}>
        <center>
          <p
            style={{ fontSize: "70px", fontWeight: "lighter", color: "maroon" }}
          >
            Zain's blog
          </p>
        </center>
        <hr />
        <div className="my-4" id="top">
          <ul
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              rowGap: "0px",
              columnGap: "40px",
              flexWrap: "wrap",
              padding: "0",
            }}
          >
            <li>
              <p className="topic me-2">Machine Learning</p>
            </li>
            <li>
              <p className="topic me-2">Deep Learning</p>
            </li>
            <li>
              <p className="topic me-2">Web Development</p>
            </li>
            <li>
              <p className="topic ">Large Language Models</p>
            </li>
          </ul>
        </div>
        <hr />
        <div style={{ margin: "50px 0" }}>
          <h4>
            <Link
              to="/blogs/color-images-cryptosystem"
              style={{ textDecoration: "none" }}
              className="head"
            >
              A DNA based Color Image Cryptosystem using Chaotic Maps, Spiral
              Mixing and Non Linear Binary Operator
              <i
                className="fas fa-external-link-alt fa-xs ms-2"
                style={{ color: "blue" }}
              ></i>
            </Link>
          </h4>
          <div className="d-flex flex-row gap-2 ">
            <Link
              to={"https://www.nature.com/articles/s41598-025-04021-4"}
              target="_blank"
              rel="noopener"
              style={{ textDecoration: "none" }}
            >
              <p className="text-primary fw-bolder">
                <i className="fa-solid fa-book fa-sm"></i> research paper
              </p>
            </Link>
            <p className="text-muted fst-italic">Nature Scientific Reports</p>
          </div>
          <ul className="mt-1" id="aboutBlog">
            <li>
              <p className="justified" style={{ color: "black" }}>
                DNA based color images refer to the encoding of the color images
                into DNA sequences called as DNA computing. By encoding
                information into DNA strands, scientists can create vast amounts
                of data storage in a space smaller than a single grain of sand.
              </p>
            </li>
            <li>
              <p className="justified" style={{ color: "black" }}>
                Instead of representing images using traditional pixel values
                the image data is converted into a sequence of DNA nucleotides
                (Adenine-A, Thymine-T, Cytosine-C and Guanine-G). The process of
                converting color images's pixel values into a DNA sequence
                involve mapping the pixel value of a image to specific sequence
                of DNA bases.
              </p>
            </li>
            <li>
              <p className="justified" style={{ color: "black" }}>
                This research used a binary operator to design a cryptosystem
                that can be used to safely and losslessly encrypt color images
                in order to demonstrate the operator's viability with color
                images as well.
              </p>
            </li>
          </ul>
          <p className="d-inline me-3 text-muted inf">40 min read</p>
          <p className="d-inline text-muted inf">Oct 2025</p>
          <ul className="list-inline">
            <li className="list-inline-item inf text-muted">
              <i class="fa-solid fa-hashtag fa-xs"></i>Image Encryption
            </li>
            <li className="list-inline-item inf text-muted">
              <i class="fa-solid fa-hashtag fa-xs"></i>DNA
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Blogs;
