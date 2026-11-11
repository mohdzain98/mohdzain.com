import asset_res1 from "@/assets/blogs/res1.webp";
import asset_res2 from "@/assets/blogs/res2.webp";
import asset_keysens from "@/assets/blogs/keysens.webp";
import asset_var from "@/assets/blogs/var.webp";
import asset_h1 from "@/assets/blogs/h1.webp";
import asset_h2 from "@/assets/blogs/h2.webp";
import asset_h3 from "@/assets/blogs/h3.webp";
import asset_chi from "@/assets/blogs/chi.webp";
import asset_entropy from "@/assets/blogs/entropy.webp";
import asset_coer from "@/assets/blogs/coer.webp";
import asset_npcr from "@/assets/blogs/npcr.webp";
import asset_uaci from "@/assets/blogs/uaci.webp";
import asset_nist from "@/assets/blogs/nist.webp";
import asset_comp from "@/assets/blogs/comp.webp";
import "@/features/blogs/styles/blogs-index.css";
import { MathJax, MathJaxContext } from "better-react-mathjax";
import { Link as ScrollLink } from "react-scroll";
import ContentsMenu, {
  type ContentsItem,
} from "@/components/layout/ContentsMenu";
import { useMediaQuery } from "react-responsive";

const METRICS: ContentsItem[] = [
  { label: "About Key", to: "key" },
  { label: "Histogram Analysis", to: "hist" },
  { label: "Chi Square Analysis", to: "chi" },
  { label: "Entropy Analysis", to: "entropy" },
  { label: "Correlation Analysis", to: "coer" },
  { label: "UACI and NPCR", to: "uanp" },
  { label: "NIST Randomness Test", to: "nist" },
  { label: "Comparative Analysis", to: "comparison" },
];

const Results = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div>
      <h5 className="mt-6" style={{ fontStyle: "italic" }}>
        2.4 Final Results
      </h5>
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12">
          <img src={asset_res1} alt="result" className="max-w-full h-auto" />
        </div>
        <div className="col-span-12">
          <img src={asset_res2} alt="result" className="max-w-full h-auto" />
        </div>
      </div>
      <center>
        <p className="my-2" style={{ fontSize: "13px" }}>
          {" "}
          Original, en-crypted & de-crypted image of (a) Fruit (b) baboon (c)
          Pepper (d)Lake{" "}
        </p>
      </center>
      <hr style={{ height: "2px" }} />

      {/* {Experimental results and analysis} */}
      <div id="expres" className="mt-6">
        <div className="grid grid-cols-12 gap-x-6">
          <div className="md:col-span-6 col-span-12">
            <h3>3. Experimental Results and Analysis</h3>
          </div>
          <div className="md:col-span-6 col-span-12">
            <div className={isTabletOrMobile ? "" : "flex justify-end pr-4"}>
              <ContentsMenu label="Metrics" align="end" items={METRICS} />
            </div>
          </div>
        </div>
        <hr style={{ width: "50%" }} />
        <div id="key">
          <h5 className="mt-6" style={{ fontStyle: "italic" }}>
            3.1 Key Sensitivity and Key length
          </h5>
          <p className="justified">
            The robustness of an encryption method against brute-force attacks
            is often gauged by the length of its key. For high security in
            cryptographic applications, a key length exceeding 2^100 bits is
            generally considered secure. In the cryptosystem we have developed,
            the key boasts an expansive key space of 2^240 and has a total
            length of 240 bits. This symmetric key system utilizes the same key
            for both encryption and decryption processes.{" "}
          </p>
          <p className="justified">
            High sensitivity to the key is a fundamental requirement for the
            encryption system; otherwise, it will not be able to obtain the
            right decryption image, even in the event that there is a very
            slight shift in the input key. A small modification to the initial
            key will result in a unseen new decryption image for a perfect
            encryption scheme. In our experiment, we each alter four RGB colour
            images by merely varying the lone bit of the initial key. The
            decryption outcomes are displayed, along with the notable variations
            between the original (256 x 256) and decrypted images
            <ScrollLink
              to="references"
              smooth={true}
              duration={50}
              style={{ cursor: "pointer", color: "var(--primary)" }}
            >
              [3]
            </ScrollLink>
          </p>
          <center className="my-4">
            <img
              src={asset_keysens}
              alt="key sensitivity"
              className="max-w-full h-auto"
            />
            <p style={{ fontSize: "13px" }}>
              The results of sensitivity of a key of (p)Fruit, (q) Baboon, (r)
              pepper and (s) Lake. (t) to (w) are decrypted images of respective
              color images.{" "}
            </p>
          </center>
        </div>

        <div id="hist">
          <h5 className="mt-6" style={{ fontStyle: "italic" }}>
            3.2 Histogram Analysis
          </h5>
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12">
              <p className="justified">
                A histogram describes how the image's pixel intensity values are
                distributed. It is evident that the cypher image's pixel values
                are consistently distributed throughout the interval [0,255].
                This uniformity contrasts sharply with the histogram of the
                plain image, where pixel intensities are distributed unevenly.
                The single histogram displayed covers all three color channels
                (Red, Green, and Blue), providing a comprehensive view of the
                changes in pixel distribution due to the encryption process.
                <br />
                <br />
                <span style={{ fontWeight: "bold", fontSize: "15px" }}>
                  Variance Analysis
                </span>{" "}
                : Additionally, we use histogram variances to statistically test
                the regularity of histograms.
                <br /> Mathematically, histogram variances are defined as :
                <br />
                <MathJaxContext>
                  <MathJax dynamic inline={false} style={{ fontSize: "13px" }}>
                    {`\\[ \\text{variance}(I) = \\frac{\\sum_{x=1}^{m} \\sum_{y=1}^{n} \\left( I_m(x, y) - \\mu \\right)^2}{m \\times n} \\]`}
                  </MathJax>
                </MathJaxContext>
                Colour images have low variance since they only have eight bits
                per pixel and have a non-uniform distribution of pixels in each
                R, G, and B component image. Table displays natural images with
                variances less than 3000, while the matching cipher images of
                the corresponding Re, Gr, and Bl components have variances
                greater than 5400.
              </p>
              <img
                src={asset_var}
                alt="variance"
                className="max-w-full h-auto mt-4"
              />
              <p className="justified">
                Histogram of color images are having different graphs and bins
                of different sizes of all three color channels but cipher image
                have all three channel equally distributed on the graph.{" "}
              </p>
            </div>
            <div className="col-span-12">
              <center>
                <img
                  src={asset_h1}
                  alt="histogram"
                  className="max-w-full h-auto"
                />
                <img
                  src={asset_h2}
                  alt="histogram"
                  className="max-w-full h-auto"
                />
                <img
                  src={asset_h3}
                  alt="histogram"
                  className="max-w-full h-auto"
                />
                <p style={{ fontSize: "13px" }}>
                  (p) plain and cipher histogram of Fruit (q) plain and cipher
                  histogram of baboon (r) plain and cipher histogram of pepper
                  (s) plain and cipher histogram of lake.
                </p>
              </center>
            </div>
          </div>
        </div>
        <div id="chi" className="my-4">
          <h5 className="mt-6" style={{ fontStyle: "italic" }}>
            3.3 Chi Square Analysis
          </h5>
          <div className="grid grid-cols-12 gap-x-6">
            <div className="md:col-span-8 col-span-12">
              <p className="justified">
                The encrypted image's histogram offers a visual depiction of the
                data, while the chi-Square test offers a statistical analysis of
                the variation of pixel intensity readings. The chi2 readings for
                an image of size 𝑚 × 𝑛 and pixel depth 𝑝 bits can be computed as
                <MathJaxContext>
                  <MathJax dynamic inline={false} style={{ fontSize: "13px" }}>
                    {`\\[ \\chi^2 = \\sum_{L=0}^{2^p - 1} \\frac{\\left( x_L^o - x_e \\right)^2}{x_e} \\]`}
                  </MathJax>
                  where x_L^o is the frequency that has been observed for the
                  𝐿th intensity, where 𝐿 is between 0 2^p - 1, and x_e is the
                  frequency expected, which has been computed as
                  <ScrollLink
                    to="references"
                    smooth={true}
                    duration={50}
                    style={{ cursor: "pointer", color: "var(--primary)" }}
                  >
                    [15]
                  </ScrollLink>
                  :
                  <MathJax dynamic inline={false} style={{ fontSize: "13px" }}>
                    {`\\[ x_e = \\frac{2^p - 1}{m \\times n} \\]`}
                  </MathJax>
                </MathJaxContext>
              </p>
            </div>
            <div className="md:col-span-4 col-span-12">
              <img
                src={asset_chi}
                alt="chi square"
                className="max-w-full h-auto"
              />
            </div>
          </div>
          <p className="justified">
            From the 𝜒2-Inverse Cumulative Distribution Function{" "}
            <ScrollLink
              to="references"
              smooth={true}
              duration={50}
              style={{ cursor: "pointer", color: "var(--primary)" }}
            >
              [12]
            </ScrollLink>
            , we can determine the crucial values (upper limit) of 𝜒2 for 8-bit
            pictures with level of significances 𝛼 = 20. These values are{" "}
            <span className="font-bold">273.79</span>. Since the produced cipher
            images, 𝜒2 values are smaller than the crucial values, The
            hypothesis holds for coming in the range of 20% significance,
            indicating a uniform variation of pixel magnitude across all of
            them.
          </p>
        </div>

        <div id="entropy" className="my-4">
          <h5 className="mt-6" style={{ fontStyle: "italic" }}>
            3.4 Entropy Analysis
          </h5>
          <div className="grid grid-cols-12 gap-x-6">
            <div className="md:col-span-7 col-span-12">
              <p className="justified">
                The uncertainty measurement is provided by entropy. The entropy
                ɛ(𝑆) is calculated for a source 𝑆 that contains 𝑛 symbols, each
                with a chance of presence of 𝑝𝑖 as
                <ScrollLink
                  to="references"
                  smooth={true}
                  duration={50}
                  style={{ cursor: "pointer", color: "var(--primary)" }}
                >
                  [16]
                </ScrollLink>{" "}
                :
                <MathJaxContext>
                  <MathJax dynamic inline={false} style={{ fontSize: "13px" }}>
                    {`\\[ \\varepsilon(S) = \\sum_{i=1}^{n} p_i \\cdot \\log \\left( \\frac{1}{p_i} \\right) \\]`}
                  </MathJax>
                </MathJaxContext>
                Entropy of plain images is low, but that of cipher images should
                be close to 8 high bits/symbol. Table demonstrates that the
                crypted images produced by the suggested technique have an
                entropy larger than{" "}
                <span style={{ fontWeight: "bold" }}>7.9950</span> , indicating
                a high degree of randomness.
              </p>
            </div>
            <div className="md:col-span-5 col-span-12">
              <img
                src={asset_entropy}
                alt="entropy"
                className="max-w-full h-auto my-4"
              />
            </div>
          </div>
        </div>

        <div id="coer" style={{ marginTop: "10px" }}>
          <h5 className="mt-6" style={{ fontStyle: "italic" }}>
            3.5 Correlation Analysis
          </h5>
          <div className="grid grid-cols-12 gap-x-6">
            <div className="md:col-span-6 col-span-12">
              <p className="justified">
                Pixels have a strong correlation in plain images, however in
                crypted images, this correlation should be reduced. One among
                key statistical features of images is the correlation between
                neighbouring pixels, which indicates the limit of correlation
                between pixel values in adjacent positions in the image. The
                greater the efficiency of the developed encryption system, there
                is low correlation between the neighbouring pixels of the
                encrypted picture. Next, 10000 pixels are chosen from both the
                encrypted and original images in order to examine the pixel
                correlation. The coefficient of correlation 𝜌 is calculated as
                <ScrollLink
                  to="references"
                  smooth={true}
                  duration={50}
                  style={{ cursor: "pointer", color: "var(--primary)" }}
                >
                  [17]
                </ScrollLink>
                <MathJaxContext>
                  <MathJax dynamic inline={false} style={{ fontSize: "13px" }}>
                    {`\\[ \\rho(x, y) = \\frac{\\sum_{i=1}^{n} (x_i - \\overline{x})(y_i - \\overline{y})}{\\sqrt{\\sum_{i=1}^{n} (x_i - \\overline{x})^2} \\cdot \\sqrt{\\sum_{i=1}^{n} (y_i - \\overline{y})^2}} \\]`}
                  </MathJax>
                </MathJaxContext>
                Consider two vectors of size 𝑛, 𝑥 and 𝑦, respectively, with
                means ̄𝑥 and ̄𝑦. -1 ≤ 𝜇 ≤ 1. The original images have a high
                positive correlation when the values are close to 1, while the
                cipher images benefit from a low correlation when the values are
                close to 0.
              </p>
              <br />
              <p className="justified">
                The table shows correlation analysis for every image in three
                different direction viz. horizontal i.e. row wise, vertical i.e.
                column wise and diagonal.
              </p>
            </div>
            <div className="md:col-span-6 col-span-12">
              <img
                src={asset_coer}
                alt="correlation"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div id="uanp">
          <h5 className="mt-6" style={{ fontStyle: "italic" }}>
            3.6 UACI and NPCR
          </h5>
          <div className="grid grid-cols-12 gap-x-6">
            <div className="md:col-span-8 col-span-12">
              <p className="justified">
                N: Number of P: Pixel C: Change R: Rate (NPCR) and U: Unified A:
                Average C: Change I: Intensity (UACI) are important metrics for
                evaluating the security of a cryptosystem against differential
                attacks. Consider X and X′ as the cipher images produced by
                encrypting a plain image of dimensions 𝑚×𝑛 with pixel depth 𝑝,
                and then again encrypting after altering a single pixel value in
                the original image, respectively. The resilience of the
                encryption method is quantified by calculating NPCR and UACI
                according to the given formulas.
                <MathJaxContext>
                  <MathJax dynamic inline={false} style={{ fontSize: "13px" }}>
                    {`\\[ F(u,v) = \\begin{cases} 1 & \\text{if } X(u,v) \\neq X'(u,v) \\\\ 0 & \\text{if } X(u,v) = X'(u,v) \\end{cases} \\]`}
                    {`\\[ \\text{NPCR}(X, X') = \\sum_{(u,v)} \\frac{F(u,v)}{m \\cdot n} \\times 100\\% \\]`}
                    {`\\[ \\text{UACI}(X, X') = \\frac{\\sum_{(u,v)} |X(u,v) - X'(u,v)|}{(2^p - 1) \\cdot (m \\cdot n)} \\]`}
                  </MathJax>
                </MathJaxContext>
                where u = 1, 2, …, 𝑚; v = 1, 2, …, 𝑛 & |t| denotes the absolute
                value of t. In{" "}
                <ScrollLink
                  to="references"
                  smooth={true}
                  duration={50}
                  style={{ cursor: "pointer", color: "var(--primary)" }}
                >
                  [13]
                </ScrollLink>
                , the optimal settings for UACI and NPCR have been examined. The
                greatest value of Fmax for a picture with dimensions of m * n
                and bit depth of p will be F = 2^p – 1. The table ahead shows
                N.P.C.R and U.A.C.I values observed for different images.
              </p>
            </div>
            <div className="md:col-span-4 col-span-12">
              <img src={asset_npcr} alt="npcr" className="max-w-full h-auto" />
              <img src={asset_uaci} alt="uaci" className="max-w-full h-auto" />
            </div>
          </div>
          <p className="justified">
            From the results of NPCR tables we can confirm that our cryptosystem
            has attained the desired result regarding these two most usefull
            metrics. These results are best upto the cause.
          </p>
        </div>
        <div id="nist">
          <h5 className="mt-6" style={{ fontStyle: "italic" }}>
            3.7 NIST SP 800-22 Statistical Tests
          </h5>
          <div className="grid grid-cols-12 gap-x-6">
            <div className="md:col-span-8 col-span-12">
              <p className="justified">
                {" "}
                The NIST randomness test is a statistical test suite developed
                by the National Institute of Standards and Technology (NIST) to
                evaluate the randomness of binary sequences from random and
                pseudo-random number generators. It consists of a battery of
                empirical tests, such as frequency, block frequency, and runs
                tests, that assess if a sequence is likely to have come from a
                random source by looking for non-random patterns.The tests work
                by formulating a null hypothesis (\(H_{0}\)) that the sequence
                is random and then computing statistics to see if the sequence
                deviates from this assumption.
                <span style={{ color: "var(--muted-foreground)" }}>
                  source: Google
                </span>
              </p>
              <p className="justified mt-2">
                The generated cipher images from the proposed algorithm have
                been tested using the NIST randomness test suite 25. Table shows
                the results of the test on the Fruit image of dimension 256 ×
                256 with three color channels, and their p-values. The test has
                been done using the nistrng package26. The values in the table,
                along with the pass results show the random behavior of the
                generated cipher and the robustness of the proposed algorithm
                against cryptography attacks.
              </p>
            </div>
            <div className="md:col-span-4 col-span-12">
              <img src={asset_nist} alt="nist" className="max-w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      <div id="comparison" style={{ margin: "3% 0" }}>
        <h3>4. Comparative Analysis</h3>
        <hr style={{ width: "50%" }} />
        <div className="grid grid-cols-12 gap-x-6">
          <div className="md:col-span-6 col-span-12">
            <p className="justified">
              Using the same experimental setup and cryptosystem, the operator ⊗
              defined in paper
              <ScrollLink
                to="references"
                smooth={true}
                duration={50}
                style={{ cursor: "pointer", color: "var(--primary)" }}
              >
                [9]
              </ScrollLink>{" "}
              has been compared with other operators such as XꚚR and (+/−) on
              several color images. The NPCR and UACI tests demonstrate that the
              operator ⊗ outperforms XꚚR in terms of resistance to differential
              attacks, since the operator ⊗ yields satisfactory results whereas
              XOR fails horribly in these tests using with the suggested
              cryptosystem. While the (+,−) operator yields fairly similar
              values for UACI and NPCR but also fails in some circumstances as
              well like for one channel fails and for other two channel give
              satisfactory result.
              <br />
              However, the main disadvantage of (+/−) operator is removing the
              pixel correlation and the suggested operator works significantly
              better in these situations. These findings support the assertion
              that the operator ⊗ outperforms the standard operators typically
              employed in traditional image cryptosystems.{" "}
            </p>
            <br />
            <p className="justified">
              The results indicate that our system performs on par with the best
              available cryptosystems today, offering a reliable option for
              secure image encryption. This comparative analysis supports the
              viability of our cryptosystem for practical applications,
              highlighting its potential to provide robust security solutions
              for digital imaging needs. The table shows NPCR UACI comparison.
              <br />
              The values that fail the crucial test are shown by underlining in
              the NPCR and UACI
            </p>
          </div>
          <div className="md:col-span-6 col-span-12">
            <img
              src={asset_comp}
              alt="comparison"
              className="max-w-full h-auto float-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
