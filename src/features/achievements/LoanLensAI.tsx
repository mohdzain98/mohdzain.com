import { TONE_BADGE, type Tone } from "@/lib/tones";
import { buttonVariants } from "@/components/ui/button";
import { Icon } from "@/components/icons/Icon";
import { cn } from "@/lib/utils";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Helmet } from "react-helmet-async";
import SectionHeader from "@/components/layout/SectionHeader";
import architecture from "@/assets/achievements/loanlens_ai/docs/loanlens_architecture.webp";
import workflow from "@/assets/achievements/loanlens_ai/docs/workflow.webp";
import fraudExample from "@/assets/achievements/loanlens_ai/docs/fraud_example.webp";
import approvedExample from "@/assets/achievements/loanlens_ai/docs/approved_example.webp";
import manualReview from "@/assets/achievements/loanlens_ai/docs/manual_review_example.webp";
import fraudWarning from "@/assets/achievements/loanlens_ai/docs/fraud_warning.webp";

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
    icon: "file-import",
    title: "Automated Document Ingestion",
    desc: "Accepts bank statements, payslips, passports, tax statements, credit reports, and utility bills.",
  },
  {
    icon: "wand-magic-sparkles",
    title: "Structured Data Extraction",
    desc: "Uses Landing AI ADE to extract JSON, bounding box overlays, and unstructured text in parallel streams.",
  },
  {
    icon: "gauge-high",
    title: "KPI & Loan Metric Calculation",
    desc: "Computes Credit Score, DTI, Default Risk, Account Liquidity, Income Stability, and Address Stability.",
  },
  {
    icon: "scale-balanced",
    title: "Credit Decisioning Engine",
    desc: "Weighted scoring engine with hard rejection filters yields Approved / Warning / Rejected outcomes.",
  },
  {
    icon: "shield-halved",
    title: "Fraud Detection Module",
    desc: "Detects document tampering, salary discrepancies, and name inconsistencies using AOD and ADE.",
  },
  {
    icon: "comments",
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
          backgroundColor: "var(--background)",
          minHeight: "100vh",
        }}
      >
        <div
          className="container mx-auto py-12 px-0 md:px-12 xl:px-12 mt-6"
          style={{ maxWidth: "1200px" }}
        >
          <section>
            {/* Breadcrumb */}
            <Breadcrumbs
              className="mb-7"
              items={[
                { label: "Home", to: "/" },
                { label: "Achievements" },
                { label: "LoanLens AI" },
              ]}
            />

            {/* Hero */}
            <SectionHeader
              as="h1"
              title="LoanLens AI"
              subtitle="Your Virtual Underwriter — From Documents to Decisions, Instantly. Built with Landing AI ADE and AWS Bedrock for the LandingAI Financial AI Hackathon."
              className="mb-6"
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
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
                  className="inline-flex items-center text-xs font-medium rounded-full bg-primary/10 text-primary px-4 py-2"
                  style={{ fontSize: "13px" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/watch?v=iKqOY-Nobv8"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-card text-card-foreground border  no-underline p-4 flex flex-row items-center gap-2"
                style={{ borderRadius: 8 }}
              >
                <div className="flex flex-row justify-between items-center gap-2">
                  <div className="py-2 px-2 bg-red-600/10 rounded-md">
                    <Icon
                      name="youtube"
                      className="size-[1em] text-red-600 dark:text-red-400 text-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-0">
                    <div
                      className="font-semibold text-foreground"
                      style={{ fontSize: "14px", margin: 0 }}
                    >
                      Watch Demo
                    </div>
                    <span
                      className="text-muted-foreground"
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
                className="rounded-lg bg-card text-card-foreground border  no-underline p-4 flex flex-row items-center gap-2"
                style={{ borderRadius: 8 }}
              >
                <div className="flex flex-row justify-between items-center gap-2">
                  <div className="py-2 px-2 bg-slate-500/10 rounded-md">
                    <Icon
                      name="github"
                      className="size-[1em] text-foreground text-xl"
                    />
                  </div>
                  <div>
                    <div
                      className="font-semibold text-foreground"
                      style={{ fontSize: "14px" }}
                    >
                      Source Code
                    </div>
                    <div
                      className="text-muted-foreground"
                      style={{ fontSize: "12px" }}
                    >
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
              className="font-bold mb-0"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              Problem Statement
            </h2>
            <p className="text-muted-foreground mb-6 mt-2">
              Manual loan underwriting is time-consuming, error-prone, and
              susceptible to fraud due to fragmented document review and the
              lack of intelligent automation.Financial institutions face
              increasing pressure to accelerate credit decisions, improve risk
              assessment, and meet rising regulatory standards — all while
              reducing operational costs.
            </p>
            <div className="grid grid-cols-12 gap-4">
              {METRICS.map((m) => (
                <div key={m.value} className="col-span-6 md:col-span-3">
                  <div className="rounded-lg bg-card text-card-foreground border  h-full text-center p-4">
                    <div
                      className="font-bold text-primary mb-1"
                      style={{ fontSize: "2rem" }}
                    >
                      {m.value}
                    </div>
                    <div
                      className="text-muted-foreground"
                      style={{ fontSize: "13px" }}
                    >
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
              className="font-bold mb-6"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              Key Features
            </h2>
            <div className="grid grid-cols-12 gap-4">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="col-span-12 md:col-span-6 xl:col-span-4"
                >
                  <div className="rounded-lg bg-card text-card-foreground border  h-full p-4">
                    <div className="flex items-start gap-4">
                      <div className="text-primary text-2xl pt-1">
                        <Icon name={f.icon} className="size-[1em]" />
                      </div>
                      <div>
                        <div className="font-semibold mb-1">{f.title}</div>
                        <div
                          className="text-muted-foreground"
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
              className="font-bold mb-4"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              Architecture
            </h2>
            <p className="text-muted-foreground mb-4">
              LoanLens is a modular, multi-agent AI system that automates the
              full loan document intake and underwriting journey — from
              ingesting raw documents to generating credit decisions, detecting
              fraud, and enabling natural language case review.
            </p>
            <div className="rounded-lg bg-card text-card-foreground border  p-4">
              <img
                src={architecture}
                alt="LoanLens AI Architecture"
                className="max-w-full h-auto rounded-md"
              />
            </div>
          </section>

          {/* Workflow */}
          <section>
            <h2
              className="font-bold mb-6"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              Workflow
            </h2>
            <div className="rounded-lg bg-card text-card-foreground border  p-4 mb-6">
              <img
                src={workflow}
                alt="LoanLens AI Workflow"
                className="max-w-full h-auto rounded-md"
              />
            </div>
            <div className="grid grid-cols-12 gap-4">
              {WORKFLOW_STEPS.map((s) => (
                <div key={s.num} className="col-span-12 md:col-span-6">
                  <div className="rounded-lg bg-card text-card-foreground border  h-full p-4">
                    <div className="flex gap-4 items-start">
                      <span
                        className="font-bold text-primary"
                        style={{ fontSize: "1.3rem", minWidth: 36 }}
                      >
                        {s.num}
                      </span>
                      <div>
                        <div className="font-semibold mb-1">{s.title}</div>
                        <div
                          className="text-muted-foreground"
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
              className="font-bold mb-6"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              Demo Examples
            </h2>
            <div className="grid grid-cols-12 gap-6">
              {[
                {
                  img: fraudExample,
                  label: "Identity Fraud Detected",
                  badge: "danger",
                  icon: "triangle-exclamation",
                  video:
                    "https://drive.google.com/file/d/1X_gcSrOQw0ZpiVfOJYXpLAWJzLU2aYBt/view?usp=sharing",
                },
                {
                  img: approvedExample,
                  label: "Approved",
                  badge: "success",
                  icon: "circle-check",
                  video:
                    "https://drive.google.com/file/d/13Nk5Sd2R7ZShHrsiOGIIdxpIk0Ij6YmR/view?usp=drive_link",
                },
                {
                  img: manualReview,
                  label: "Manual Review",
                  badge: "warning",
                  icon: "magnifying-glass",
                  video:
                    "https://drive.google.com/file/d/1qnb40WqTEQ2z4q-bJoBy2T_1Z1uyrNqC/view?usp=drive_link",
                },
                {
                  img: fraudWarning,
                  label: "Identity Fraud & Name Inconsistency",
                  badge: "danger",
                  icon: "shield-halved",
                  video:
                    "https://drive.google.com/file/d/1Qb3oDaSsTQ6ISnfLLfUOXnC0VPbHD2aO/view?usp=drive_link",
                },
              ].map((ex) => (
                <div key={ex.label} className="col-span-12 md:col-span-6">
                  <div className="rounded-lg bg-card text-card-foreground border  h-full">
                    <img
                      src={ex.img}
                      alt={ex.label}
                      className="w-full rounded-t-xl max-w-full h-auto rounded-t-md"
                      style={{ objectFit: "cover", maxHeight: 260 }}
                    />
                    <div className="p-4 flex items-center justify-between gap-2">
                      <span
                        className={cn(
                          "inline-flex items-center gap-1 rounded-md px-4 py-2 text-wrap",
                          TONE_BADGE[ex.badge as Tone],
                        )}
                        style={{ fontSize: "13px" }}
                      >
                        <Icon name={ex.icon} className="size-[1em]" />{" "}
                        {ex.label}
                      </span>
                      <a
                        href={ex.video}
                        target="_blank"
                        rel="noreferrer"
                        className={buttonVariants({
                          variant: "outline",
                          size: "sm",
                        })}
                      >
                        <Icon name="play" className="size-[1em] mr-1" /> Demo
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="mb-12">
            <h2
              className="font-bold mb-6"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              Tech Stack
            </h2>
            <div className="grid grid-cols-12 gap-4">
              {TECH_STACK.map((t) => (
                <div
                  key={t.layer}
                  className="col-span-12 md:col-span-6 xl:col-span-4"
                >
                  <div className="rounded-lg bg-card text-card-foreground border  h-full p-4">
                    <div className="font-semibold mb-2 text-primary">
                      {t.layer}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {t.items.map((item) => (
                        <span
                          key={item}
                          className="inline-flex items-center rounded-md text-xs font-medium bg-slate-500/10 text-foreground px-2 py-1"
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
