import { MathJaxContext, MathJax } from "better-react-mathjax";
import "../Styling/Blogs.css";
import { Link as ScrollLink } from "react-scroll";

const Decryption = () => {
  return (
    <div>
      <MathJaxContext>
        <h5 className="mt-4">2.3 Decryption Algorithm Flow Chart</h5>
        <center>
          <img
            src={require("../../Assets/blogs/dec.jpg")}
            alt="decryption"
            className="img-fluid"
          />
        </center>
        <h5 className="mt-4" style={{ fontStyle: "italic" }}>
          2.3.1 Decryption
        </h5>
        <p className="justified">
          After obtaining cipher image we proceed for its decryption as on
          reciever side it needs to be decrypted. The encryption and decryption
          processes are inverted. The steps that are taken in last stages will
          now be taken in initial stages as we move in reverse fashion. As
          presented in flow chart, we again split the cipher images into R, G, B
          components and applies DNA encoding. If we compare encyption and
          decryption flow chart we can see we are dealing with DNAs in the later
          stages in encryption but in decryption we are using DNAs in initial
          stages. At first we do DNA encoding then we apply reverse DNA
          substitution using reverse substitution rules followed by DNA
          decoding. Encoding and Decoding have the same algorithm but
          substitution have minor change, it uses reverse substitution rules.
          After decoding we go for reverse spiral mixing which internally
          follows reverse fashion of mixing in encryption. Then we apply reverse
          modified ACM followed by reverse mix rows and reverse inter channel
          mixing. At last we again merge RGB into final decrypted image. The
          main point of decryption is to use the same key as it was used in
          encryption for getting 2D MCCM, initial vector, rules maps and DNA
          substitution map.
          <br />
          <br />
          The steps are shown ahead.
        </p>
        <p className="justified my-3">
          <ol id="cryptol">
            <li>
              In the decryption process, after the encrypted image has been
              retrieved, it's often necessary to split it back into its
              constituent color components—Red (R), Green (G), and Blue (B)
            </li>
            <li>
              <span className="text-decoration-underline">DNA encoding </span> :
              As a first step now DNA encoding is performed on the R, G, B,
              matrices received after splitting. The process of encoding is same
              in encryption as well as decryption.{" "}
            </li>
            <li>
              <span className="text-decoration-underline">
                Reverse DNA Substitution
              </span>{" "}
              : Reverse DNA substitution in decryption involves the reversal of
              the substitution process to retrieve the original encoded image
              from the DNA-like images. This reversal is typically achieved by
              applying an substitution rule with reverse algorithm that maps
              each DNA base pair or sequence back to its corresponding plaintext
              character or symbol.
            </li>
            <li>
              <span className="text-decoration-underline">DNA Decoding</span> :
              DNA decoding is the same process as decoding DNA nucleotide into
              decimal values as they make up the pixel matrix.
            </li>
            <li>
              <span className="text-decoration-underline">
                {" "}
                Reverse Operator (⊗R)
              </span>{" "}
              : For further steps of decryption we reverse the operator ⊗ in
              decryption algorithm as reverse operator which satisfy every
              condition and property of operator defined in paper
              <ScrollLink
                to="references"
                smooth={true}
                duration={50}
                style={{ cursor: "pointer", color: "blue" }}
              >
                [9]
              </ScrollLink>
              .
              <MathJax dynamic inline={false} style={{ fontSize: "13px" }}>
                {`\\[ (a \\otimes^R b) = \\left((a + 1)* \\text{modinv}(b + 1, p) \\right)mod p - 1 \\]`}
              </MathJax>
            </li>
            <li>
              <span className="text-decoration-underline">
                Reverse Spiral Mixing
              </span>{" "}
              : In reverse spiral mixing, the encryption process is essentially
              reversed to reconstruct the original image from its encrypted
              form. This technique involves applying mixing operations in a
              reverse fashion. There will be same four operations but their line
              of operation will be reversed. Among the four the last one in
              encryption will be the first one in decryption. <br />
              The four reversed steps are:
              <ul>
                <li>Backward Spiral Column Mixing</li>
                <li>Backward Spiral Row Mixing</li>
                <li>Forward Spiral Column Mixing</li>
                <li>Forward Spiral Row Mixing</li>
              </ul>
            </li>
            <li>
              <span className="text-decoration-underline">Reverse ACM</span> :
              Reverse ACM will shuffle back the pixel to their original place.
              In reverse ACM algorithm we just required to reverse the loops.
            </li>
            <li>
              <span className="text-decoration-underline">
                Reverse Mix Rows
              </span>{" "}
              : In the decryption process, after applying reverse modified ACM
              (Arnold Cat Map) to the encrypted image, the next step involves
              treating the rows of the resulting image with the same
              Initialization Vector (IV) used during encryption and the reverse
              of the operator denoted as ⊗R
            </li>
            <li>
              <span className="text-decoration-underline">
                Reverse Inter Channel Mixing
              </span>{" "}
              : After applying mix rows, the channel are reversly diversed to
              get the original r, g, b matrices. We defined inter mix equations
              in such a way that they can be reversed easily. Below equations
              shows the reverse procedure. For reverse intermix we start with
              getting B channel.
              <MathJax dynamic inline={false} style={{ fontSize: "13px" }}>
                {`\\[ B = B' \\otimes^R \\left( R' \\otimes G' \\right) \\]`}
                {`\\[ G = G' \\otimes^R \\left( R' \\otimes B \\right) \\]`}
                {`\\[ R = R' \\otimes^R \\left( G \\otimes B \\right) \\]`}
              </MathJax>
            </li>
          </ol>
        </p>
        <hr />
        <p className="justified fs-6">
          After applying these function we can get back the original R, G, B
          matrices without a single pixel difference.
          <br />
          Finally Merge the decrypted R, G, B matrices to get final decrypted
          image.{" "}
        </p>
      </MathJaxContext>
    </div>
  );
};

export default Decryption;
