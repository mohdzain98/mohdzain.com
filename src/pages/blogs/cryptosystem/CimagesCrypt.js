import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import "../../home/Styling/Blogs.css";
import Encryption from "./Encryption";
import Decryption from "./Decryption";
import Results from "./Results";
import References from "./References";
import { Link as ScrollLink } from "react-scroll";
import Conclusion from "./Conclusion";
import { useMediaQuery } from "react-responsive";

const CimagesCrypt = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("enc");
  const [encr, setEncr] = useState(true);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  useEffect(() => {
    document.title = "cic | blogs | Mohd Zain";
  }, []);
  const enc = () => {
    setEncr(true);
    setActive("enc");
  };
  const dec = () => {
    setEncr(false);
    setActive("dec");
  };
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div
      id="cic"
      className={`${isTabletOrMobile ? "p-1" : "p-4"}`}
      style={isTabletOrMobile ? {} : { margin: "0 10%" }}
    >
      <div className="container p-4">
        <div className="my-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                DNA based Color Images Encryption
              </li>
              <div class="breadcrumb-item dropdown" id="menu">
                <Link
                  className="dropdown-toggle"
                  data-bs-toggle="dropdown"
                  style={{ textDecoration: "none", color: "grey" }}
                >
                  Content
                </Link>
                <ul class="dropdown-menu pe-3" style={{ width: "max-content" }}>
                  <li>
                    <ScrollLink
                      className="dropdown-item"
                      to="introduction"
                      smooth={true}
                      duration={50}
                      style={{ cursor: "pointer" }}
                    >
                      Introduction
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="dropdown-item"
                      to="pwork"
                      smooth={true}
                      duration={50}
                      style={{ cursor: "pointer" }}
                    >
                      Proposed Work
                    </ScrollLink>
                    <ul>
                      <li>
                        <ScrollLink
                          className="dropdown-item"
                          to="efchart"
                          smooth={true}
                          duration={50}
                          style={{ cursor: "pointer", fontSize: "13px" }}
                        >
                          Encryption Algo Flow Chart
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          className="dropdown-item"
                          to="pc"
                          smooth={true}
                          duration={50}
                          style={{ cursor: "pointer", fontSize: "13px" }}
                        >
                          Proposed Cryptosystem
                        </ScrollLink>
                      </li>
                      <li>
                        <ScrollLink
                          className="dropdown-item"
                          to="naved"
                          smooth={true}
                          duration={50}
                          style={{ cursor: "pointer", fontSize: "13px" }}
                        >
                          Encryption and Decryption
                        </ScrollLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ScrollLink
                      className="dropdown-item"
                      to="results"
                      smooth={true}
                      duration={50}
                      style={{ cursor: "pointer" }}
                    >
                      Results and Analysis
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="dropdown-item"
                      to="conclusion"
                      smooth={true}
                      duration={50}
                      style={{ cursor: "pointer" }}
                    >
                      Conclusion
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="dropdown-item"
                      to="references"
                      smooth={true}
                      duration={50}
                      style={{ cursor: "pointer" }}
                    >
                      References
                    </ScrollLink>
                  </li>
                  <li>
                    <ScrollLink
                      className="dropdown-item"
                      to="footnotes"
                      smooth={true}
                      duration={50}
                      style={{ cursor: "pointer" }}
                    >
                      Foot Notes
                    </ScrollLink>
                  </li>
                </ul>
              </div>
            </ol>
          </nav>
        </div>
        <div className="mt-4">
          <h3>
            A DNA based Color Image Cryptosystem using Chaotic Maps, Spiral
            Mixing and Non - Linear Binary Operator
          </h3>
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
          <p className="text-muted" style={{ fontSize: "14px" }}>
            <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
              keywords
            </span>
            <ul className="list-inline">
              <li className="list-inline-item">Color Images Encryption,</li>
              <li className="list-inline-item">Color Images Decryption,</li>
              <li className="list-inline-item">DNA based Encoding,</li>
              <li className="list-inline-item">DNA based Decoding,</li>
              <li className="list-inline-item">Experimental Analysis</li>
            </ul>
          </p>
          <hr style={{ color: "black", height: "2px" }} />
          <h3 className="mt-4">Abstract</h3>
          <hr style={{ width: "50%" }} />
          <p className="justified">
            The goal of image cryptosystems is to protect image transmission
            when there are network adversaries present. To ensure secrecy,
            images are subject to encryption to produce unintelligible cipher
            images; the techniques used for this process differ significantly
            from those applied to text data. The majority of the cryptosystems
            consider complicated or confusion–diffusion architectures that
            change and permute the values of the pixels. These frequently entail
            binary operations like bitwise , addition–subtraction, DNA
            operations, etc, and are carried out utilizing chaotic maps, each
            having certain limitations.This paper employs a non- linear binary
            function applicable to traditional and DNA techniques for color
            image cryptosystems.In the proposed method, each of the color
            components of the image follows some steps which start with inter -
            channel mixing and mix rows, taking the values from the initial
            vector and mixing it.Arnold’s cat map algorithm is then applied to
            shuffle the pixels, and a novel spiral mixing of the pixels is
            applied in four different directions to prevent the differential
            attack.Finally, encoding, substitution, and decoding based on DNA is
            carried out.A multiple collapse chaotic map is used to derive
            initialization vectors, rule maps, and DNA substitution maps which
            are used in encoding and decoding processes.Experimental results and
            analysis show that the proposed cryptosystem results in cipher
            images that are resistant to different types of cryptographic
            attacks, thereby providing a secure color image encryption and
            decryption scheme.
          </p>
          <div id="introduction">
            <h3 className="mt-4">1. Introduction</h3>
            <hr style={{ width: "50%" }} />
            <p className="justified">
              DNA based color images refer to the encoding of the color images
              into DNA sequences called as DNA computing. The basic idea behind
              DNA computing is that DNA can be used to store and process
              information in a way that is similar to how a computer uses binary
              digits (bits) to represent data. Instead of representing images
              using traditional pixel values the image data is converted into a
              sequence of DNA nucleotides(A for Adenine, T for Thymine, C for
              Cytosine and G for Guanine). This process of converting color
              images's pixel values into a DNA sequence involve mapping the
              pixel value of a image to specific sequence of DNA bases. For each
              color channel i.e. RGB of pixel might be represented by a certain
              DNA bases or combination of bases. Overview of Conversion- The
              value of pixel 0-255 can be converted into DNA sequence. Using a
              set of predefined rules we can map every two bit of a 8 bit binary
              sequence to one of the DNA nucleotides.
            </p>
            <p className="justified">
              Most image cryptosystems produce quasirandom sequences, wherein
              the values are predetermined by the initial values supplied to
              them; these sequences serve as the algorithm's symmetric key, by
              using specific chaotic maps such as the 2D-Infinite Collapse Map{" "}
              <ScrollLink
                to="references"
                smooth={true}
                duration={50}
                style={{ cursor: "pointer", color: "blue" }}
              >
                [1]
              </ScrollLink>
              , Logistic Maps{" "}
              <ScrollLink
                to="references"
                smooth={true}
                duration={50}
                style={{ cursor: "pointer", color: "blue" }}
              >
                [2]
              </ScrollLink>{" "}
              3D chen chaotic sysytem{" "}
              <ScrollLink
                to="references"
                smooth={true}
                duration={50}
                style={{ cursor: "pointer", color: "blue" }}
              >
                [3]
              </ScrollLink>
              , Hyper Chaotic Systems{" "}
              <ScrollLink
                to="references"
                smooth={true}
                duration={50}
                style={{ cursor: "pointer", color: "blue" }}
              >
                [4]
              </ScrollLink>
              , Logistic Tent System{" "}
              <ScrollLink
                to="references"
                smooth={true}
                duration={50}
                style={{ cursor: "pointer", color: "blue" }}
              >
                [5]
              </ScrollLink>
              , 4D memristive Hyper Chaos{" "}
              <ScrollLink
                to="references"
                smooth={true}
                duration={50}
                style={{ cursor: "pointer", color: "blue" }}
              >
                [6]
              </ScrollLink>
              , Fractional Order Hyperchaotic System{" "}
              <ScrollLink
                to="references"
                smooth={true}
                duration={50}
                style={{ cursor: "pointer", color: "blue" }}
              >
                [7]
              </ScrollLink>
              , Fractional Fourier Transform{" "}
              <ScrollLink
                to="references"
                smooth={true}
                duration={50}
                style={{ cursor: "pointer", color: "blue" }}
              >
                [8]
              </ScrollLink>{" "}
              etc.
              <br />
              Different authors have used number of algortihms for color image's
              encryption. To improve the execution of the cryptosystem, they
              entails several operations including DNA based encoding, DNA-XOR,
              DNA complement, DNA decoding, etc. The majority of cryptosystems
              rely on addition-subtraction (+,-) operations{" "}
              <ScrollLink
                to="references"
                smooth={true}
                duration={50}
                style={{ cursor: "pointer", color: "blue" }}
              >
                [3]
              </ScrollLink>{" "}
              or XOR operations{" "}
              <ScrollLink
                to="references"
                smooth={true}
                duration={50}
                style={{ cursor: "pointer", color: "blue" }}
              >
                [2,3,4]
              </ScrollLink>
              , each of which has certain drawbacks. The disadvantages of using
              XOR in these operation are proved in paper{" "}
              <ScrollLink
                to="references"
                smooth={true}
                duration={50}
                style={{ cursor: "pointer", color: "blue" }}
              >
                [9]
              </ScrollLink>
              . In the same paper to overcome these limitation a new binary
              operator is proposed which is applicable in both conventional and
              DNA based cryptosystems. This research will use a binary operator
              (⊗) proposed in paper
              <ScrollLink
                to="references"
                smooth={true}
                duration={50}
                style={{ cursor: "pointer", color: "blue" }}
              >
                [9]
              </ScrollLink>
              . The operator satisfies the requirements to be utilised with DNA
              nucleotides and image with pixel depths of 8 and 16 bits. A new
              cryptosystem that can be used to safely and losslessly encrypt
              color images has been developed in order to demonstrate the
              operator's viability with color images as well. The cryptosystem
              performs fairly because it functions well for all color images
              with different dimensions and it can withstand a variety of
              attacks.
            </p>
          </div>

          <div id="pwork" className="mt-4">
            <h3>2. Proposed Work</h3>
            <hr style={{ width: "50%" }} />
            <p className="justified">
              An encryption and decryption technique utilising an operator ⊗ is
              presented in the proposed work. Measurements of the cryptosystem's
              performance have also been made using the experimental results and
              analysis. Lastly, a comparison with other operators, such as XOR
              and addition-subtraction, is carried out.
              <ul>
                <li>
                  The new methods used in the algorithm, such as inter channel
                  mixing, mix rows, spiral mixing are straightforward but have
                  the power to significantly reduce the visual information in
                  the original images
                </li>
                <li>
                  The cryptosystem utilizes the modified ACM algorithm proposed
                  in paper{" "}
                  <ScrollLink
                    to="references"
                    smooth={true}
                    duration={50}
                    style={{ cursor: "pointer", color: "blue" }}
                  >
                    [9]
                  </ScrollLink>
                  , only images with similar dimensions can be shuffled using
                  traditional ACM. Unevenly sized images shuffling is also
                  possible with the modified ACM.
                </li>
                <li>
                  To improve security and give the encryption process
                  non-linearity, the suggested cryptosystem makes use of DNA
                  encoding, substitution based on DNA with the proposed operator
                  and DNA decoding.
                </li>
                <li>
                  The cryptosystem has been tested using a number of statistical
                  and security measures, together with experimentation and
                  analysis to improve its performance, to ensure that it is
                  resistant to a variety of threats.
                </li>
                <li>
                  The comparative analysis shows that suggested operator
                  outperforms other operators, such as XOR or (+,-) with the
                  color images as well, and hence overcomes their shortcomings.
                </li>
              </ul>
            </p>
          </div>
          <div id="efchart" className="mt-4">
            <h4>2.1 Encryption Algorithm Flow Chart</h4>
            <hr style={{ width: "50%" }} className="mb-3" />
            <center>
              <img
                src={require("../../../Assets/blogs/efchart.jpg")}
                alt="chart"
                className="img-fluid"
              />
            </center>
          </div>
          <div id="pc" className="mt-4">
            <h4>2.2 Proposed Cryptosystem</h4>
            <hr style={{ width: "50%" }} />
            <p className="justified">
              The cryptosystem makes use of six 2D-Multiple Collapse Chaotic
              Maps, which are produced by the Key Scheduling Algorithm from a
              240-bit symmetric key. <br />
              The first stage involves intermixing of channels of the image then
              utilising the proposed operator ⊗ to operate the rows of the
              intermixed images with the initial array. Using a modified version
              of Arnold's Cat Map{" "}
              <ScrollLink
                to="references"
                smooth={true}
                duration={50}
                style={{ cursor: "pointer", color: "blue" }}
              >
                [10]
              </ScrollLink>
              , which can be applied to both square and rectangular images, the
              pixels of the composite image are jumbled. The suggested operator
              is then used to further mix the pixels in the directions of
              forward spiral row, forward spiral column, reverse spiral row, and
              reverse spiral column. These keyless procedures are necessary to
              eliminate the link between pixels and the image's visual
              perception. Lastly, a non-linear layer has been added by combining
              the suggested operator with the idea of DNA cryptography. One of
              the eight encoding principle identified by the rule chart is
              applied to the mixed image that was obtained in the preceding
              phases, converting it into a sequence of DNA nucleotides. At this
              stage DNA encoded image is obtained and these encodings are
              further substituted using proposed operator with the substitution
              map. Lastly, one of the eight DNA decoding guidelines identified
              by a different rule chart is applied to decode the substituted DNA
              sequences.
            </p>
            <h5 className="mt-4" style={{ fontStyle: "italic" }}>
              2.2.1 Private Key and Chaotic Map
            </h5>
            <p className="justified">
              The suggested approach to create the initial conditions of the 2D
              MCCM map, which has been thoroughly covered in the paper
              <ScrollLink
                to="references"
                smooth={true}
                duration={50}
                style={{ cursor: "pointer", color: "blue" }}
              >
                [11]
              </ScrollLink>
              , uses a symmetric key with a length of 240 bits.
            </p>
            <p className="justified">
              In our cryptosystem secret key is used to generate the initial
              conditions for the first chaotic system. It Is divided in 7 parts
              (p, q, x, y, t, cone, ctwo) and is of 240 bit. These seven parts
              are lengths of 40 bits, 40 bits, 40 bits, 40 bits, 40 bits, 20
              bits and 20 bits respectively. The structure of the key is as
              folllows:
            </p>
            <center>
              <img
                src={require("../../../Assets/blogs/key.jpg")}
                alt="key"
                className="img-fluid"
              />
            </center>
            <p>
              After the generation of these values we proceed to generate the
              initial conditions of chaotic map. Chaotic map takes input of p,
              q, x0, y0 and gives output as x1, y1. The values of p, q, x0 and
              y0 are generated using these equations as given in paper
              <ScrollLink
                to="references"
                smooth={true}
                duration={50}
                style={{ cursor: "pointer", color: "blue" }}
              >
                [7]
              </ScrollLink>
            </p>
            <MathJaxContext>
              <div>
                <MathJax dynamic inline={false} style={{ fontSize: "13px" }}>
                  {`\\[ p = (P_0 + T \\cdot c_1) \\mod 5 + 16 \\ \\]`}
                  {`\\[ q = (Q_0 + T \\cdot C_2) \\mod 5 + 16 \\ \\]`}
                  {`\\[ x_0 = (X + T \\cdot C_1) \\mod 2 - 1 \\ \\]`}
                  {`\\[ y_0 = (Y + T \\cdot C_2) \\mod 2 - 1 \\]`}
                </MathJax>
              </div>
            </MathJaxContext>

            <p className="justified mt-4">
              After obtaining required values we can proceed for Chaiotic Map
            </p>
            <MathJaxContext>
              <p className="justified">
                These equations are used to construct the 2D MCCM as specified
                in{" "}
                <ScrollLink
                  to="references"
                  smooth={true}
                  duration={50}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  [11]
                </ScrollLink>
              </p>
              <MathJax dynamic inline={false} style={{ fontSize: "13px" }}>
                {`\\[ X_{n+1} = \\arctan\\left(\\frac{q}{10 \\cdot p \\cdot y_n} + \\tan(p \\cdot \\pi \\cdot x_n)\\right) \\]`}
                {`\\[ Y_{n+1} = \\arctan\\left(\\frac{q}{p \\cdot x_n} + \\tan(10 \\cdot p \\cdot \\pi \\cdot y_n)\\right) \\]`}
              </MathJax>
              <p className="justified">
                where the values of the tuning parameters, a and b, are taken
                from the key. The starting conditions of the kth dynamical map
                M(k) are represented by (x0, y0). The M(1) map is constructed
                using key and other maps are constructed using last values of
                previous maps.
              </p>
              <p className="justified">
                The operator ⊗ in paper
                <ScrollLink
                  to="references"
                  smooth={true}
                  duration={50}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  [9]
                </ScrollLink>{" "}
                is given as
              </p>
              <MathJax dynamic inline={false} style={{ fontSize: "13px" }}>
                {`\\[ c \\otimes d = \\{(c + 1) \\times (d + 1) \\mod p\\} - 1 \\]`}
              </MathJax>
              <p style={{ fontStyle: "italic", fontSize: "15px" }}>
                a: Initial Vector
              </p>
              <p className="justified">
                With each row of the given image, the initial array (𝐼𝑉) is
                utilised to generate a quasirandom sequence that may be operated
                with ⊗. For an image of size m * n and bit depth P, the
                IV-dimension is 1 × m. The values are obtained in the following
                way from 𝑀(1).
              </p>

              <MathJax dynamic inline={false} style={{ fontSize: "13px" }}>
                {`\\[\\text{InV}(1, i) = |x_i| \\times |y_i| \\times (2^{31} - 1) \\mod (2^p)\\]`}
                {`\\[ \\quad x_i, y_i \\in M(1), \\quad i = 1, 2, \\dots, m \\]`}
              </MathJax>

              <p style={{ fontStyle: "italic", fontSize: "15px" }}>
                b: Rule Map
              </p>
              <p className="justified">
                To construct one of the eight DNA encoding-decoding principle,
                as listed in Table 1, the rule mappings are utilised to create a
                quasirandom sequence of integers from 1 - 8. Because every two
                bits are mapped to one nucleotide, an image of size 𝑚 * 𝑛 of bit
                depth 𝑝 will have a rule map of dimension 𝑚 × (𝑛 ⋅ (𝑝∗2)). The
                dynamical map is sclaed to the dimension of image in order to
                produce the rule map. Modular operation is used to transform the
                precept, which are preferably selected from each dimension, to
                values between 1 and 8.
              </p>
              <center>
                <img
                  src={require("../../../Assets/blogs/rm.jpg")}
                  alt="rulemap"
                  className="img-fluid my-4"
                />
              </center>
              <p style={{ fontStyle: "italic", fontSize: "15px" }}>
                c: DNA Substitution Map
              </p>
              <p className="justified">
                Using the proposed operator ⊗, the DNA Substitution chart—a
                pseudorandom string of DNA nucleotides (𝐴, 𝐶, T, 𝐺)—is utilised
                to work with the mixed image which is DNA encoded. With size of
                m*n an image with a p bits pixel depth will be enlarged to a DNA
                sequence of size 𝑚 × (𝑛.(𝑝∕2)) which the DNA Substitution
                Chart's size ought to correspond to. The instruction for
                constructing a DNA Substitution chart is described in paper
                <ScrollLink
                  to="references"
                  smooth={true}
                  duration={50}
                  style={{ cursor: "pointer", color: "blue" }}
                >
                  [9]
                </ScrollLink>
                .<br />
                <br />
                After obtaining the necessary maps, the images can be encrypted.
                The decryption procedure also requires the same maps. The next
                subsection provides a description of the encryption procedure.
              </p>
            </MathJaxContext>
          </div>
          <hr />

          <div id="naved">
            <nav className="nav nav-pills justify-content-center">
              <li className="nav-item fs-5 me-4" style={{ fontWeight: "bold" }}>
                <Link className="nav-link text-dark" onClick={enc}>
                  Encryption
                </Link>
                {active === "enc" ? (
                  <hr
                    className="text-dark"
                    style={{ marginTop: "-1%", height: "2px" }}
                  />
                ) : (
                  ""
                )}
              </li>
              <li className="nav-item fs-5 ms-4" style={{ fontWeight: "bold" }}>
                <Link className="nav-link text-dark" onClick={dec}>
                  Decryption
                </Link>
                {active === "dec" ? (
                  <hr
                    className="text-dark"
                    style={{ marginTop: "-1%", height: "2px" }}
                  />
                ) : (
                  ""
                )}
              </li>
            </nav>
          </div>
          <hr />
          {encr ? (
            <div id="encryption">
              <Encryption setActive={setActive} setEncr={setEncr} />
            </div>
          ) : (
            <div id="decryption">
              <Decryption />
            </div>
          )}

          <div id="results">
            <Results />
          </div>
          <div id="conclusion">
            <Conclusion />
          </div>
          <div id="references">
            <References />
          </div>
          <hr style={{ color: "black", height: "2px" }} />
          <div id="footnotes">
            <h3>Foot Notes</h3>
            <hr style={{ width: "50%" }} />
            <p style={{ textAlign: "justify" }}>
              This paper is a part of the PhD work of
              <Link
                to="https://www.linkedin.com/in/chiranjeev-bhaya-6b8603189"
                target="_blank"
                rel="noopener"
                style={{ color: "black" }}
                className="mx-1"
              >
                Chiranjeev Bhaya
              </Link>
              , who conceived the idea, experiments and proposed the algorithm.
              <span
                className="mx-1"
                style={{ cursor: "pointer" }}
                onClick={handleClick}
              >
                <u>Mohd Zain</u>
              </span>
              contributed in the implementation of the code and enhancement of
              the algorithm.
              <Link
                to="https://people.iitism.ac.in/~abhay/"
                target="_blank"
                rel="noopener"
                style={{ color: "black" }}
                className="mx-1"
              >
                Prof. Abhay Kumar Singh
              </Link>
              verified the methodology, code and the results. All the authors
              contributed in drafting and revising the overall manuscript.
            </p>
            <p className="text-muted">Wan't to lear more ? Get Thesis...</p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <Link
                to="https://github.com/mohdzain98/Design_of_DNA_based_Color_Images_Cryptosystem"
                target="_blank"
                rel="noopener"
              >
                <button className="btn btn-dark ftd">
                  <i className="fa-brands fa-github"></i> Code Notebook
                </button>
              </Link>
              <a
                href={require("../../../Assets/DDBCICSRP.pdf")}
                download="CIC Research Paper"
              >
                <button className="btn btn-success fts">
                  <i className="fa fa-download"></i> Download Research Paper (15
                  pages)
                </button>
              </a>
              <a
                href={require("../../../Assets/DDBCICST.pdf")}
                download="CIC Thesis"
              >
                <button className="btn btn-success fts">
                  <i className="fa fa-download"></i> Download Thesis (66 pages)
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CimagesCrypt;
