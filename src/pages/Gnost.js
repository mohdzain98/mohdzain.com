import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Gnost = () => {
  const [copied, setCopied] = useState(false);
  const command = "pip install gnost";
  useEffect(() => {
    document.title = "gnost | Mohd Zain";
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div id="gnost" style={{ padding: "2%" }}>
      <div className="container p-4" style={{ marginTop: "1%" }}>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Gnost
          </li>
        </ol>
        <div>
          <h2 style={{ color: "maroon" }}>GNOST - Codebase Knowledge</h2>
          <hr style={{ color: "black", height: "2px" }} />
        </div>
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="py-4 pe-4">
              <p style={{ textAlign: "justify" }}>
                GNOST helps understand unfamiliar codebases by automatically
                identifying entry points, execution flow, and core logic. It
                provides a quick starting point for navigating large
                repositories and building a mental model of how a project works.
              </p>
              <p style={{ textAlign: "justify" }}>
                The name GNOST is inspired by{" "}
                <span className="fst-italic fw-bolder">gnosis</span> (Greek:
                γνῶσις) the Greek word for knowledge. It becomes GNOST to
                emphasize{" "}
                <span className="fst-italic fw-bolder">code knowledge</span>
              </p>
              <h5 className="mt-4">What GNOST Does</h5>
              <ul className="mb-3 ">
                <li>Detects where execution starts</li>
                <li>Infers high-level execution flow</li>
                <li>Identifies hotspot files (most important code)</li>
                <li>Generates onboarding documentation</li>
                <li>Produces Mermaid flow diagrams</li>
                <li>Works across multiple languages</li>
              </ul>
              <h5 className="mt-4">Supported Languages</h5>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge rounded-pill bg-success bg-opacity-10 text-success">
                  <i className="fa-brands fa-python me-2"></i>Python
                </span>
                <span className="badge rounded-pill bg-success bg-opacity-10 text-success">
                  <i className="fa-brands fa-square-js me-2"></i>JavaScript
                </span>
                <span className="badge rounded-pill bg-success bg-opacity-10 text-success">
                  <i className="fa-solid fa-code me-2"></i>TypeScript
                </span>
                <span className="badge rounded-pill bg-success bg-opacity-10 text-success">
                  <i className="fa-brands fa-java me-2"></i>Java
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="card border shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fa-solid fa-paperclip me-2"></i>Quick Links
                </h5>
                <p className="card-text text-muted fw-bold">
                  Access the full documentation, PyPI package page and github
                  repo.
                </p>
                <div className="d-grid gap-3">
                  <a
                    className="btn btn-info btn-sm"
                    href="https://gnost.readthedocs.io"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-regular fa-file me-2"></i>
                    Full Documentation
                  </a>
                  <a
                    className="btn btn-success btn-sm"
                    href="https://pypi.org/project/gnost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fas fa-download me-2"></i>
                    PyPI Package
                  </a>
                  <a
                    className="btn btn-dark btn-sm"
                    href="https://github.com/mohdzain98/gnost"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-brands fa-github me-2"></i>
                    Source
                  </a>
                </div>
              </div>
            </div>
            <div className="card shadow-sm mt-3">
              <div className="card-body">
                <h5 className="card-title">
                  <i className="fa-solid fa-download fa-sm me-2 mb-2"></i>
                  Installation
                </h5>
                <div
                  className="position-relative bg-light border rounded p-3"
                  style={{ maxWidth: "400px" }}
                >
                  {/* The Code */}
                  <code className="text-dark">{command}</code>

                  {/* The Button: position-absolute to float it right */}
                  <button
                    onClick={handleCopy}
                    className="btn btn-sm btn-default position-absolute top-50 end-0 translate-middle-y me-2"
                    style={{ fontSize: "0.8rem" }}
                    title="Copy to clipboard"
                  >
                    {/* Toggle Text or Icon based on state */}
                    {copied ? (
                      <span>
                        <i className="fa-solid fa-check"></i> Copied!
                      </span>
                    ) : (
                      <span>
                        <i className="fa-regular fa-copy"></i> Copy
                      </span>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gnost;
