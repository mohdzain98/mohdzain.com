import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SectionHeader from "../components/layout/SectionHeader";
import architecture from "../Assets/achievements/loanlens_ai/docs/loanlens_architecture.png";
import workflow from "../Assets/achievements/loanlens_ai/docs/workflow.png";
import fraudExample from "../Assets/achievements/loanlens_ai/docs/fraud_example.png";
import approvedExample from "../Assets/achievements/loanlens_ai/docs/approved_example.png";
import manualReview from "../Assets/achievements/loanlens_ai/docs/manual_review_example.png";
import fraudWarning from "../Assets/achievements/loanlens_ai/docs/fraud_warning.png";

const TECH_STACK = [
  {
    layer: "Document Ingestion",
    items: ["Landing AI ADE", "POD Storage", "PyMuPDF"],
  },
  { layer: "KPI & Metrics", items: ["Python", "Pandas", "NumPy", "Spark"] },
  { layer: "Credit Decisioning", items: ["Python Rule Engine", "FastAPI"] },
  {
    layer: "Fraud Detection",
    items: ["Landing AI AOD", "ADE Agentic Object Detection"],
  },
  { layer: "RAG Chatbot", items: ["LangChain", "Vector DB", "AWS Bedrock"] },
  { layer: "Frontend", items: ["React.js", "Bootstrap", "Vite"] },
];

const FEATURES = [
  {
    icon: "fa-solid fa-file-import",
    title: "Automated Document Ingestion",
    desc: "Accepts bank statements, payslips, passports, tax statements, credit reports, and utility bills.",
  },
  {
    icon: "fa-solid fa-wand-magic-sparkles",
    title: "Structured Data Extraction",
    desc: "Uses Landing AI ADE to extract JSON, bounding box overlays, and unstructured text in parallel streams.",
  },
  {
    icon: "fa-solid fa-gauge-high",
    title: "KPI & Loan Metric Calculation",
    desc: "Computes Credit Score, DTI, Default Risk, Account Liquidity, Income Stability, and Address Stability.",
  },
  {
    icon: "fa-solid fa-scale-balanced",
    title: "Credit Decisioning Engine",
    desc: "Weighted scoring engine with hard rejection filters yields Approved / Warning / Rejected outcomes.",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Fraud Detection Module",
    desc: "Detects document tampering, salary discrepancies, and name inconsistencies using AOD and ADE.",
  },
  {
    icon: "fa-solid fa-comments",
    title: "Conversational RAG Interface",
    desc: "Natural language Q&A on any loan case, powered by RAG with AWS Bedrock as the LLM backend.",
  },
];

const WORKFLOW_STEPS = [
  {
    num: "01",
    title: "Document Ingestion",
    desc: "PDFs, scanned images, and photos are ingested across bank statements, identity proofs, credit reports, tax docs, and utility bills.",
  },
  {
    num: "02",
    title: "ADE Parsing & Structuring",
    desc: "Landing AI ADE runs three parallel streams: structured JSON, bounding box overlays, and unstructured text.",
  },
  {
    num: "03",
    title: "KPI & Loan Metric Calculation",
    desc: "Structured JSON feeds the KPI module (DTI, liquidity, income stability) and the loan metric scoring engine.",
  },
  {
    num: "04",
    title: "Credit Decisioning Engine",
    desc: "Weighted scoring + hard rejection filters produce a final outcome: Approved, Warning (manual review), or Rejected.",
  },
  {
    num: "05",
    title: "Fraud Detection Agent",
    desc: "Unstructured text and bounding boxes are analysed for anomalies, forged text, layout discrepancies, and name mismatches.",
  },
  {
    num: "06",
    title: "Reviewer Interface",
    desc: "A Summary Agent compiles the case overview; a Chatbot Agent enables natural language Q&A via RAG.",
  },
];

const METRICS = [
  {
    value: "52%",
    label: "of loan processing time spent on manual document verification",
  },
  {
    value: "5%",
    label: "of loan applications contain discrepancies or altered documents",
  },
  {
    value: "30%",
    label:
      "of creditworthy applicants rejected due to poor data interpretation",
  },
  {
    value: "20%",
    label:
      "of financial fraud complaints involve identity theft in loan applications",
  },
];

const LoanLensAI = () => {
  return (
    <>
      <Helmet>
        <title>LoanLens AI — LandingAI Financial Hackathon | Mohd Zain</title>
        <meta
          name="description"
          content="LoanLens AI is an intelligent end-to-end underwriting assistant built with Landing AI and AWS Bedrock for the LandingAI Financial AI Hackathon."
        />
        <meta name="robots" content="index,follow" />
      </Helmet>

      <div
        style={{
          backgroundColor: "#f8fafc",
          minHeight: "100vh",
        }}
      >
        <div
          className="container py-5 px-0 px-md-5 px-xl-5 mt-4"
          style={{ maxWidth: "1200px" }}
        >
          <section>
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="stbd mb-4">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">Achievements</li>
                <li className="breadcrumb-item active" aria-current="page">
                  LoanLens AI
                </li>
              </ol>
            </nav>

            {/* Hero */}
            <SectionHeader
              title="LoanLens AI"
              subtitle="Your Virtual Underwriter — From Documents to Decisions, Instantly. Built with Landing AI ADE and AWS Bedrock for the LandingAI Financial AI Hackathon."
              className="mb-4"
            />

            {/* Tags */}
            <div className="d-flex flex-wrap gap-2 mb-4">
              {[
                "Landing AI ADE",
                "AWS Bedrock",
                "LangChain",
                "FastAPI",
                "React.js",
                "RAG",
                "Fraud Detection",
                "Multi-Agent",
              ].map((tag) => (
                <span
                  key={tag}
                  className="badge rounded-pill bg-primary bg-opacity-10 text-primary px-3 py-2"
                  style={{ fontSize: "13px" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="d-flex flex-wrap gap-3">
              <a
                href="https://www.youtube.com/watch?v=iKqOY-Nobv8"
                target="_blank"
                rel="noreferrer"
                className="card border-0 shadow-sm text-decoration-none p-3 d-flex flex-row align-items-center gap-2"
                style={{ borderRadius: 12 }}
              >
                <div className="d-flex flex-row justify-content-between align-items-center gap-2">
                  <div className="py-2 px-2 bg-danger bg-gradient bg-opacity-10 rounded">
                    <i className="fa-brands fa-youtube text-danger fs-5" />
                  </div>
                  <div className="d-flex flex-column gap-0">
                    <div
                      className="fw-semibold text-dark"
                      style={{ fontSize: "14px", margin: 0 }}
                    >
                      Watch Demo
                    </div>
                    <span
                      className="text-muted"
                      style={{ fontSize: "12px", margin: 0 }}
                    >
                      YouTube
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://github.com/mohdzain98/loanlens-ai"
                target="_blank"
                rel="noreferrer"
                className="card border-0 shadow-sm text-decoration-none p-3 d-flex flex-row align-items-center gap-2"
                style={{ borderRadius: 12 }}
              >
                <div className="d-flex flex-row justify-content-between align-items-center gap-2">
                  <div className="py-2 px-2 bg-secondary bg-gradient bg-opacity-10 rounded">
                    <i className="fa-brands fa-github text-dark fs-5" />
                  </div>
                  <div>
                    <div
                      className="fw-semibold text-dark"
                      style={{ fontSize: "14px" }}
                    >
                      Source Code
                    </div>
                    <div className="text-muted" style={{ fontSize: "12px" }}>
                      GitHub
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </section>

          {/* Problem — key metrics */}
          <section>
            <h2
              className="fw-bold mb-0"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              Problem Statement
            </h2>
            <p className="text-muted mb-4 mt-2">
              Manual loan underwriting is time-consuming, error-prone, and
              susceptible to fraud due to fragmented document review and the
              lack of intelligent automation.Financial institutions face
              increasing pressure to accelerate credit decisions, improve risk
              assessment, and meet rising regulatory standards — all while
              reducing operational costs.
            </p>
            <div className="row g-3">
              {METRICS.map((m) => (
                <div key={m.value} className="col-6 col-md-3">
                  <div className="card border-0 shadow-sm h-100 text-center p-3">
                    <div
                      className="fw-bold text-primary mb-1"
                      style={{ fontSize: "2rem" }}
                    >
                      {m.value}
                    </div>
                    <div className="text-muted" style={{ fontSize: "13px" }}>
                      {m.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h2
              className="fw-bold mb-4"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              Key Features
            </h2>
            <div className="row g-3">
              {FEATURES.map((f) => (
                <div key={f.title} className="col-12 col-md-6 col-xl-4">
                  <div className="card border-0 shadow-sm h-100 p-3">
                    <div className="d-flex align-items-start gap-3">
                      <div className="text-primary fs-4 pt-1">
                        <i className={f.icon} />
                      </div>
                      <div>
                        <div className="fw-semibold mb-1">{f.title}</div>
                        <div
                          className="text-muted"
                          style={{ fontSize: "13.5px" }}
                        >
                          {f.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Architecture */}
          <section>
            <h2
              className="fw-bold mb-3"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              Architecture
            </h2>
            <p className="text-muted mb-3">
              LoanLens is a modular, multi-agent AI system that automates the
              full loan document intake and underwriting journey — from
              ingesting raw documents to generating credit decisions, detecting
              fraud, and enabling natural language case review.
            </p>
            <div className="card border-0 shadow-sm p-3">
              <img
                src={architecture}
                alt="LoanLens AI Architecture"
                className="img-fluid rounded"
              />
            </div>
          </section>

          {/* Workflow */}
          <section>
            <h2
              className="fw-bold mb-4"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              Workflow
            </h2>
            <div className="card border-0 shadow-sm p-3 mb-4">
              <img
                src={workflow}
                alt="LoanLens AI Workflow"
                className="img-fluid rounded"
              />
            </div>
            <div className="row g-3">
              {WORKFLOW_STEPS.map((s) => (
                <div key={s.num} className="col-12 col-md-6">
                  <div className="card border-0 shadow-sm h-100 p-3">
                    <div className="d-flex gap-3 align-items-start">
                      <span
                        className="fw-bold text-primary"
                        style={{ fontSize: "1.3rem", minWidth: 36 }}
                      >
                        {s.num}
                      </span>
                      <div>
                        <div className="fw-semibold mb-1">{s.title}</div>
                        <div
                          className="text-muted"
                          style={{ fontSize: "13.5px" }}
                        >
                          {s.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Demo Examples */}
          <section>
            <h2
              className="fw-bold mb-4"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              Demo Examples
            </h2>
            <div className="row g-4">
              {[
                {
                  img: fraudExample,
                  label: "Identity Fraud Detected",
                  badge: "danger",
                  icon: "fa-solid fa-triangle-exclamation",
                  video:
                    "https://drive.google.com/file/d/1X_gcSrOQw0ZpiVfOJYXpLAWJzLU2aYBt/view?usp=sharing",
                },
                {
                  img: approvedExample,
                  label: "Approved",
                  badge: "success",
                  icon: "fa-solid fa-circle-check",
                  video:
                    "https://drive.google.com/file/d/13Nk5Sd2R7ZShHrsiOGIIdxpIk0Ij6YmR/view?usp=drive_link",
                },
                {
                  img: manualReview,
                  label: "Manual Review",
                  badge: "warning",
                  icon: "fa-solid fa-magnifying-glass",
                  video:
                    "https://drive.google.com/file/d/1qnb40WqTEQ2z4q-bJoBy2T_1Z1uyrNqC/view?usp=drive_link",
                },
                {
                  img: fraudWarning,
                  label: "Identity Fraud & Name Inconsistency",
                  badge: "danger",
                  icon: "fa-solid fa-shield-halved",
                  video:
                    "https://drive.google.com/file/d/1Qb3oDaSsTQ6ISnfLLfUOXnC0VPbHD2aO/view?usp=drive_link",
                },
              ].map((ex) => (
                <div key={ex.label} className="col-12 col-md-6">
                  <div className="card border-0 shadow-sm h-100">
                    <img
                      src={ex.img}
                      alt={ex.label}
                      className="card-img-top img-fluid rounded-top"
                      style={{ objectFit: "cover", maxHeight: 260 }}
                    />
                    <div className="card-body d-flex align-items-center justify-content-between gap-2">
                      <span
                        className={`badge bg-${ex.badge} bg-opacity-10 text-${ex.badge} text-wrap px-3 py-2`}
                        style={{ fontSize: "13px" }}
                      >
                        <i className={`${ex.icon} me-1`} /> {ex.label}
                      </span>
                      <a
                        href={ex.video}
                        target="_blank"
                        rel="noreferrer"
                        className="btn btn-outline-secondary btn-sm"
                      >
                        <i className="fa-solid fa-play me-1" /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-5">
            <h2
              className="fw-bold mb-4"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              Tech Stack
            </h2>
            <div className="row g-3">
              {TECH_STACK.map((t) => (
                <div key={t.layer} className="col-12 col-md-6 col-xl-4">
                  <div className="card border-0 shadow-sm h-100 p-3">
                    <div className="fw-semibold mb-2 text-primary">
                      {t.layer}
                    </div>
                    <div className="d-flex flex-wrap gap-2">
                      {t.items.map((item) => (
                        <span
                          key={item}
                          className="badge bg-secondary bg-opacity-10 text-dark px-2 py-1"
                          style={{ fontSize: "12px" }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default LoanLensAI;
