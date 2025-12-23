import { MathJaxContext, MathJax } from "better-react-mathjax";
import "../../home/Styling/Blogs.css";
import { Link as ScrollLink } from "react-scroll";

const Encryption = ({ setActive, setEncr }) => {
  const handleClick = () => {
    setActive("dec");
    setEncr(false);
  };
  return (
    <div>
      <MathJaxContext>
        <h5 className="mt-4" style={{ fontStyle: "italic" }}>
          2.2.2 Encryption
        </h5>
        <p className="justified">
          An image in color is changed into an incomprehensible distorted image
          during the inscribe process. The following steps make up the
          encryption process:
        </p>
        <p className="justified">
          <ol id="cryptol">
            <li>
              Split the R, G, B pixel matrices from the color image into three
              different matrix say red, green, blue. We need to apply all steps
              to every matrix inorder to encrypt the image in best way.
            </li>
            <li>
              <span className="text-decoration-underline">
                Inter Channel Mixing and Mix Rows
              </span>{" "}
              : In this stage, the channels of the image are intermixied with
              each other using some equations. The values from the initial
              vector (𝐼𝑉), which has already been generated, are mixed and
              distributed throughout the inter mixed image's rows.
              <br />
              The Channel are Intermixed using these equations.
              <MathJax dynamic inline={false} style={{ fontSize: "13px" }}>
                {`\\[ R' = R \\otimes (G \\otimes B) \\ \\]`}
                {`\\[ G' = G \\otimes R' \\otimes B \\ \\]`}
                {`\\[ B' = B \\otimes R' \\otimes G' \\ \\]`}
              </MathJax>
              The value of the first element in each row is propagated along its
              neighbor pixels using the following equation to skew the value in
              the neighbouring pixels:
              <MathJax
                dynamic
                inline={false}
              >{`\\[ I'(g,h) = I(g,h) \\otimes I'(g,h - 1) \\]`}</MathJax>
              The process of inter channel mixrows will be applied on the image
              received after splitting color image into matrices i.e. R, G, B,
              respectively as.
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flex: "1", paddingRight: "20px" }}>
                  <MathJax dynamic inline={false} style={{ fontSize: "13px" }}>
                    {`\\[ R' = \\text{interMix}(r, g, b) \\]`}
                    {`\\[ G' = \\text{interMix}(g, R', b) \\]`}
                    {`\\[ B' = \\text{interMix}(b, R', G') \\]`}
                  </MathJax>
                </div>

                <div style={{ flex: "1", paddingLeft: "20px" }}>
                  <MathJax dynamic inline={false} style={{ fontSize: "13px" }}>
                    {`\\[ \\text{mixedImageRed} = \\text{mixRows}(R', IV) \\]`}
                    {`\\[ \\text{mixedImageGreen} = \\text{mixRows}(G', IV) \\]`}
                    {`\\[ \\text{mixedImageBlue} = \\text{mixRows}(B', IV)\\]`}
                  </MathJax>
                </div>
              </div>
            </li>
            <li>
              <span className="text-decoration-underline">
                Arnold Cat Map (Acm) Algorithm
              </span>{" "}
              : ACM{" "}
              <ScrollLink
                to="references"
                smooth={true}
                duration={50}
                style={{ cursor: "pointer", color: "blue" }}
              >
                [10]
              </ScrollLink>{" "}
              is a disorganised chart that is used to rearrange the given image.
              When a 2D array has dimensions of N*N, ACM is expressed as:
              <MathJax dynamic inline={false}>
                {`\\[
                    \\begin{bmatrix} g' \\\\ h' \\end{bmatrix} = \\begin{bmatrix} 2 & 1 \\\\ 1 & 1 \\end{bmatrix} \\begin{bmatrix} g \\\\ h \\end{bmatrix} \\mod N
                  \\]`}
              </MathJax>
              where g, h, g', h' ∈ [1, 𝑁]. (g, h) and (g', h') represents,
              respectively, the original and scrambled images' position indices.
              The drawback of employing directly ACM algorithm is that its
              definition is limited to identical size images. Nonetheless,
              uneven proportions are a regular occurrence in natural images. The
              image is separated into minimal squares, and ACM is applied
              independently to each of them in order to fix this problem.
            </li>

            <li className="my-2">
              <span className="text-decoration-underline">Spiral Mixing</span> :
              In order to prevent differential attacks on the image, this stage
              job is to propagate the pixel’s value information throughout it in
              spiral manner. This procedure helps remove the image's visual
              information even if it doesn't require an encryption key. Let 𝑚
              and 𝑛 represent the input image 𝐼's row and column counts,
              respectively. There are four parts to the mixing step.
              <div className="row">
                <div className="col-md-3 col-xs-12">
                  <ol type="a">
                    <li>Forward Row</li>
                    <li>Forward Column</li>
                    <li>Backward Row</li>
                    <li>Backward Column</li>
                  </ol>
                </div>
                <div className="col-md-9 col-xs-12">
                  <img
                    src={require("../../../Assets/blogs/spiral.jpg")}
                    alt="spiral"
                    className="img-fluid"
                  />
                </div>
              </div>
            </li>
            <li>
              <span className="text-decoration-underline">DNA Encoding</span> :
              One of the encoding principle transforms each pixel value in the
              image into a string of DNA nucleotides. At a time, two bits are
              extracted and transformed into a nucleotide by applying the rule
              found in the obtained rule map. As a result, a string half of
              length i.e. (p/2) nucleotides per pixel will be created from an
              image with a bit depth of 𝑝-bit.
              <br />
              <center>
                <img
                  src={require("../../../Assets/blogs/encoding.jpg")}
                  alt="encdoding"
                  className="img-fluid"
                />
              </center>
            </li>
            <li>
              <span className="text-decoration-underline">
                DNA Substitution
              </span>{" "}
              : The DNA sequences 𝐷 that are received after the image has been
              encoded are substituted in the replacement process with ⊗ using
              the sequence that is obtained from the DNA Substitution Map (DSM).
              The mapping of 𝛴 = (A,C,T,G) to S = (0, 1, 2, 3) for DNA operation
              requires the selection of one among eight encoding rules from the
              values derived from the rule map (RM). <br />
              Substitution Process Illustration : <br />
              <center>
                <img
                  src={require("../../../Assets/blogs/subs.jpg")}
                  alt="subs"
                  className="img-fluid"
                />
              </center>
            </li>
            <li>
              <span className="text-decoration-underline">DNA Decoding</span> :
              One of the eight decoding rules is used to the chaotic DNA
              sequences in order to transform them to decimal values; the rule
              map's sequences determine which rule is applied. Then, a single
              cipher color image is created by combining the three
              matrices—cipher red, cipher green, and cipher blue obtained after
              decoding. The outcome of this decoding process is the final cipher
              image. Below is decoding process: <br />
              <center>
                <img
                  src={require("../../../Assets/blogs/decoding.jpg")}
                  alt="decoding"
                  className="img-fluid"
                />
              </center>
            </li>
          </ol>
        </p>
        <hr />
        <p className="justified fs-6">
          DNA operation will be applied on all the three components and then we
          can merge them for getting final cipher image as shown in encryption
          flow chart. The work on sender ends at encryption. Now image is ready
          to be send. The process of decryption takes place at reciever's end.{" "}
        </p>
      </MathJaxContext>
      <ScrollLink
        to="naved"
        smooth={true}
        duration={70}
        onClick={handleClick}
        style={{ cursor: "pointer" }}
      >
        <button className="btn btn-dark my-4">See Decryption</button>
      </ScrollLink>
    </div>
  );
};

export default Encryption;
