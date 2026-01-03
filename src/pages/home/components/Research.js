import React, { useState } from "react";
import "../Styling/Intro.css";
import "animate.css";
import Ribbon from "../../../components/layout/Ribbon";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const ResearchItem = ({
  title,
  abstract,
  publishedIn,
  date,
  authors,
  link,
  tags,
}) => {
  const [expanded, setExpanded] = useState(false);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <div
      className=" mt-5 mb-5 pb-4 border-bottom"
      style={{ backgroundColor: "#f6fae0ff" }}
    >
      {/* Title */}
      <h2 className="h2 fw-bold text-dark mb-3">{title}</h2>

      {/* Authors */}
      <p className="text-dark mb-2">{authors}</p>

      {/* Publication Info */}
      <p className="text-muted mb-3">
        <em>{publishedIn}</em> • {date}
      </p>

      {/* Tags */}
      <div className="d-flex justify-content-between flex-row">
        <div>
          {tags && tags.length > 0 && (
            <div className="mb-3">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`badge bg-primary bg-opacity-10 text-primary me-2 ${
                    isTabletOrMobile ? "mb-2" : ""
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div>
          <span
            className={`badge bg-warning bg-opacity-10 text-secondary me-2 ${
              isTabletOrMobile ? "mb-2" : ""
            }`}
          >
            M.Tech Thesis
          </span>
        </div>
      </div>

      {/* Abstract */}
      <div className="mb-3">
        <h3 className="h5 fw-semibold text-dark mb-2">Abstract</h3>
        <p className="text-dark" style={{ lineHeight: "1.6" }}>
          {expanded
            ? abstract
            : `${abstract.substring(0, 500)}${
                abstract.length > 500 ? "..." : ""
              }`}
        </p>
        {abstract.length > 300 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="btn btn-link text-primary p-0 text-decoration-none fw-semibold"
          >
            {expanded ? (
              <>
                <i class="fa-solid fa-chevron-up"></i> Show less
              </>
            ) : (
              <>
                <i class="fa-solid fa-chevron-down"></i> Read full abstract
              </>
            )}
          </button>
        )}
      </div>

      {/* Read More Link */}
      {link && (
        <div className="d-flex flex-row gap-5">
          <Link
            to={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-decoration-none fw-semibold"
          >
            Access Paper{" "}
            <i class="fa-solid fa-arrow-up-right-from-square fa-sm"></i>
          </Link>
          <Link
            to={"/blogs/color-images-cryptosystem"}
            className="text-primary text-decoration-none fw-semibold"
          >
            Read More <i class="fa-solid fa-arrow-right fa-sm"></i>
          </Link>
        </div>
      )}
    </div>
  );
};

const Research = () => {
  const researchPapers = [
    {
      title:
        "A DNA Based Color Image Cryptosystem using Chaotic Maps, Spiral Mixing and Non Linear Binary Operator",
      abstract:
        "The goal of image cryptosystems is to protect image transmission when there are network adversaries present. To ensure secrecy, images are subject to encryption to produce unintelligible cipher images; the techniques used for this process differ significantly from those applied to text data. The majority of the cryptosystems consider complicated or confusion–diffusion architectures that change and permute the values of the pixels. These frequently entail binary operations like bitwise , addition–subtraction, DNA operations, etc, and are carried out utilizing chaotic maps, each having certain limitations.This paper employs a non- linear binary function applicable to traditional and DNA techniques for color image cryptosystems.In the proposed method, each of the color components of the image follows some steps which start with inter - channel mixing and mix rows, taking the values from the initial vector and mixing it.Arnold’s cat map algorithm is then applied to shuffle the pixels, and a novel spiral mixing of the pixels is applied in four different directions to prevent the differential attack.Finally, encoding, substitution, and decoding based on DNA is carried out.A multiple collapse chaotic map is used to derive initialization vectors, rule maps, and DNA substitution maps which are used in encoding and decoding processes.Experimental results and analysis show that the proposed cryptosystem results in cipher images that are resistant to different types of cryptographic attacks, thereby providing a secure color image encryption and decryption scheme.",
      publishedIn: "Nature Scientific Reports",
      date: "September 2025",
      authors: "Chiranjeev Bhaya, Mohd Zain & Abhay Kumar Singh",
      link: "https://www.nature.com/articles/s41598-025-04021-4",
      tags: ["DNA based Cryptography", "Chaotic Maps", "Image Encryption"],
    },
  ];
  return (
    <section
      className="research pt-5"
      id="research"
      style={{ backgroundColor: "#f6fae0ff" }}
    >
      <center>
        <Ribbon value={"Research"} color={"green"} />
      </center>
      <div className="min-h-screen bg-white p-8">
        <div className="max-w-4xl mx-auto">
          <div>
            {researchPapers.map((paper, idx) => (
              <ResearchItem key={idx} {...paper} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
