import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SectionHeader from "../components/layout/SectionHeader";
import dashboardImg from "../Assets/blogs/axis-spending/dashboard.png";

const WORKFLOW_STEPS = [
  {
    num: "01",
    icon: "fa-solid fa-envelope",
    title: "Email Fetch via Himalaya",
    desc: "Himalaya connects to Gmail via IMAP and fetches Axis Bank alert emails from alerts@axis.bank.in. Only new or missing emails are pulled — not the full inbox every run.",
  },
  {
    num: "02",
    icon: "fa-solid fa-file-lines",
    title: "Transaction Parsing",
    desc: "Each email subject and body is parsed to extract date, debit/credit type, amount, account suffix, and transaction info (UPI reference, merchant name).",
  },
  {
    num: "03",
    icon: "fa-solid fa-tags",
    title: "Rule-Based Categorization",
    desc: "Transactions are categorized using rule based classifier matched against the merchant name and transaction particulars — food, shopping, medical, recharge, and more.",
  },
  {
    num: "04",
    icon: "fa-solid fa-database",
    title: "SQLite Deduplication & Storage",
    desc: "Parsed rows are deduplicated and inserted into a local SQLite database. The DB is the source of truth — dashboards are always regenerated from stored history.",
  },
  {
    num: "05",
    icon: "fa-solid fa-chart-pie",
    title: "Dashboard Generation",
    desc: "Four HTML dashboards are regenerated on every run: latest week, current month, all-time summary, and a monthly archive index — all served as static files via nginx.",
  },
  {
    num: "06",
    icon: "fa-brands fa-whatsapp",
    title: "WhatsApp Summary via OpenClaw",
    desc: "A formatted spending summary with totals, top categories, and dashboard links is sent to WhatsApp via the OpenClaw gateway — automatically weekly or on demand.",
  },
];

const WHATSAPP_TRIGGERS = [
  { msg: "Generate my spending report", result: "Last 7 days report" },
  {
    msg: "Generate my spending report for last 2 weeks",
    result: "Last 14 days report",
  },
  {
    msg: "Generate my spending report for last 30 days",
    result: "Last 30 days report",
  },
  { msg: "Show me this week's expenses", result: "Last 7 days report" },
];

const TECH_STACK = [
  {
    layer: "Email Access",
    icon: "fa-solid fa-inbox",
    items: ["Himalaya", "Gmail IMAP", "IMAP/TLS"],
  },
  {
    layer: "Data Processing",
    icon: "fa-solid fa-gear",
    items: ["Python", "Regex Rules", "SQLite"],
  },
  {
    layer: "Dashboard",
    icon: "fa-solid fa-chart-bar",
    items: ["HTML", "nginx", "Static Files"],
  },
  {
    layer: "Agent & Messaging",
    icon: "fa-solid fa-robot",
    items: ["OpenClaw", "WhatsApp Gateway", "SKILL.md"],
  },
  {
    layer: "Scheduling",
    icon: "fa-solid fa-clock",
    items: ["Cron", "Weekly Auto-run"],
  },
];

const DASHBOARDS = [
  {
    label: "Latest Week",
    file: "latest.html",
    desc: "Most recent 7-day spending summary",
  },
  {
    label: "Current Month",
    file: "current-month.html",
    desc: "All transactions for the running month",
  },
  {
    label: "All Time",
    file: "all-time.html",
    desc: "Lifetime totals across all categories",
  },
  {
    label: "Archive",
    file: "archive.html",
    desc: "Monthly archive index with per-month reports",
  },
];

const AxisSpending = () => {
  return (
    <>
      <Helmet>
        <title>OpenClaw Spending Agent | Mohd Zain</title>
        <meta
          name="description"
          content="A personal AI agent that fetches Axis Bank emails, categorizes spending, generates dashboards, and sends WhatsApp summaries via OpenClaw."
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
          {/* Breadcrumb */}
          <section>
            <nav aria-label="breadcrumb" className="stbd mb-2">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item">
                  <Link to="/projects">Projects</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  OpenClaw Spending Agent
                </li>
              </ol>
            </nav>

            <SectionHeader
              title="OpenClaw Spending Agent"
              subtitle="A personal AI agent that automatically tracks Axis Bank spending — fetches emails, categorizes transactions, generates dashboards, and sends weekly WhatsApp summaries. Trigger it anytime via natural language on WhatsApp."
              className="mb-4"
            />

            {/* Tags */}
            <div className="d-flex flex-wrap gap-2 mb-4">
              {[
                "Python",
                "SQLite",
                "OpenClaw",
                "Himalaya",
                "IMAP",
                "WhatsApp",
                "nginx",
                "Cron",
                "Agentic AI",
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
            <div className="d-flex flex-wrap gap-3 mb-5">
              <a
                href="https://github.com/mohdzain98/openclaw-tools/tree/main/axis-spending"
                target="_blank"
                rel="noopener noreferrer"
                className="card border-0 shadow-sm px-4 py-3 d-flex flex-row align-items-center gap-2 text-decoration-none"
                style={{ borderRadius: 12 }}
              >
                <i className="fa-brands fa-github text-dark fs-5" />
                <div>
                  <div
                    className="fw-semibold text-dark"
                    style={{ fontSize: "14px" }}
                  >
                    GitHub
                  </div>
                  <div className="text-muted" style={{ fontSize: "12px" }}>
                    openclaw-tools/axis-spending
                  </div>
                </div>
              </a>
              <Link
                to="/blogs/automated-spending-tracker-openclaw"
                className="card border-0 shadow-sm px-4 py-3 d-flex flex-row align-items-center gap-2 text-decoration-none"
                style={{ borderRadius: 12 }}
              >
                <i className="fa-regular fa-file-lines text-dark fs-5" />
                <div>
                  <div
                    className="fw-semibold text-dark"
                    style={{ fontSize: "14px" }}
                  >
                    Blog Post
                  </div>
                  <div className="text-muted" style={{ fontSize: "12px" }}>
                    Automated Spending Tracker with OpenClaw
                  </div>
                </div>
              </Link>
              <div
                className="card border-0 shadow-sm px-4 py-3 d-flex flex-row align-items-center gap-2"
                style={{ borderRadius: 12 }}
              >
                <i className="fa-solid fa-gauge text-dark fs-5 fe-2" />
                <div>
                  <div
                    className="fw-semibold text-dark"
                    style={{ fontSize: "14px" }}
                  >
                    Dashboard
                  </div>
                  <div className="text-muted" style={{ fontSize: "12px" }}>
                    HTML files generated from SQLite data
                  </div>
                </div>
              </div>
              <div
                className="card border-0 shadow-sm px-4 py-3 d-flex flex-row align-items-center gap-2"
                style={{ borderRadius: 12 }}
              >
                <i className="fa-brands fa-whatsapp text-success fs-5 fe-2" />
                <div>
                  <div
                    className="fw-semibold text-dark"
                    style={{ fontSize: "14px" }}
                  >
                    Live Updates
                  </div>
                  <div className="text-muted" style={{ fontSize: "12px" }}>
                    on Whatsapp
                  </div>
                </div>
              </div>
            </div>

            <hr style={{ margin: 0, padding: 0 }} />
          </section>

          {/* Architecture flow */}
          <section className="mt-4 mb-4">
            <h2
              className="fw-bold mb-0"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              How It Works
            </h2>
            <p className="text-muted mb-4 mt-2">
              A fully automated pipeline — from inbox to WhatsApp — running on a
              cron schedule every Sunday with no manual intervention needed.
            </p>

            {/* Pipeline strip */}
            <div className="card border-0 shadow-sm p-4 mb-4">
              <div
                className="d-flex flex-wrap align-items-center gap-2 justify-content-center"
                style={{ fontSize: "14px" }}
              >
                {[
                  { icon: "fa-solid fa-envelope", label: "Bank Email" },
                  { icon: "fa-solid fa-arrow-right", label: null },
                  { icon: "fa-solid fa-inbox", label: "Himalaya IMAP" },
                  { icon: "fa-solid fa-arrow-right", label: null },
                  { icon: "fa-solid fa-tags", label: "Parse & Categorize" },
                  { icon: "fa-solid fa-arrow-right", label: null },
                  { icon: "fa-solid fa-database", label: "SQLite DB" },
                  { icon: "fa-solid fa-arrow-right", label: null },
                  { icon: "fa-solid fa-chart-pie", label: "HTML Dashboard" },
                  { icon: "fa-solid fa-arrow-right", label: null },
                  { icon: "fa-brands fa-whatsapp", label: "WhatsApp Summary" },
                ].map((step, i) =>
                  step.label ? (
                    <div
                      key={i}
                      className="d-flex flex-column align-items-center gap-1 text-center"
                      style={{ minWidth: 72 }}
                    >
                      <div
                        className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: 40, height: 40 }}
                      >
                        <i className={step.icon} />
                      </div>
                      <span
                        className="text-muted fw-medium"
                        style={{ fontSize: "11px" }}
                      >
                        {step.label}
                      </span>
                    </div>
                  ) : (
                    <i
                      key={i}
                      className="fa-solid fa-arrow-right text-muted"
                      style={{ fontSize: "11px" }}
                    />
                  ),
                )}
              </div>
            </div>

            <div className="row g-3">
              {WORKFLOW_STEPS.map((s) => (
                <div key={s.num} className="col-12 col-md-6">
                  <div className="card border-0 shadow-sm h-100 p-3">
                    <div className="d-flex gap-3 align-items-start">
                      <div
                        className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: 38, height: 38 }}
                      >
                        <i className={s.icon} style={{ fontSize: 14 }} />
                      </div>
                      <div>
                        <div
                          className="fw-semibold mb-1"
                          style={{ fontSize: "14px" }}
                        >
                          <span className="text-primary me-1">{s.num}</span>{" "}
                          {s.title}
                        </div>
                        <div
                          className="text-muted"
                          style={{ fontSize: "13px" }}
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

          {/* Classification Logic */}
          <section className="mb-4">
            <h2
              className="fw-bold mb-0"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              How Classification Works
            </h2>
            <p className="text-muted mb-4 mt-2">
              Every transaction is classified by a rule-based classifier written
              in <code>tracker.py</code>. Matching runs against the extracted
              merchant name and transaction particulars — fast, deterministic,
              and easy to extend.
            </p>

            <div className="row g-3 mb-4">
              {[
                {
                  icon: "fa-solid fa-magnifying-glass",
                  title: "Merchant Extraction",
                  desc: 'The raw transaction info (e.g. "UPI/P2M/737295712717/Haleem Biryani/AXIS BANK") is parsed by pick_payee() to extract a clean merchant name before matching.',
                },
                {
                  icon: "fa-solid fa-list-check",
                  title: "Keyword Rule Matching",
                  desc: "CATEGORY_RULES maps categories like food, shopping, medical, recharge, and travel to keyword lists. The merchant name is matched against each rule set in order.",
                },
                {
                  icon: "fa-solid fa-circle-check",
                  title: "Deterministic & Extendable",
                  desc: 'No LLM calls — classification is pure regex. If a merchant like "Haleem Biryani" matches the food rule, it is always food. New merchants are added by extending the rule list.',
                },
                {
                  icon: "fa-solid fa-tag",
                  title: 'Fallback to "other"',
                  desc: 'If no rule matches the merchant or transaction info, the transaction is assigned to the "other" category and can be re-classified later by adding a new rule.',
                },
              ].map((c) => (
                <div key={c.title} className="col-12 col-md-6">
                  <div className="card border-0 shadow-sm h-100 p-3">
                    <div className="d-flex gap-3 align-items-start">
                      <div
                        className="bg-success bg-opacity-10 text-success rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                        style={{ width: 38, height: 38 }}
                      >
                        <i className={c.icon} style={{ fontSize: 14 }} />
                      </div>
                      <div>
                        <div
                          className="fw-semibold mb-1"
                          style={{ fontSize: "14px" }}
                        >
                          {c.title}
                        </div>
                        <div
                          className="text-muted"
                          style={{ fontSize: "13px" }}
                        >
                          {c.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* OpenClaw skill execution */}
            <div className="card border-0 shadow-sm p-4">
              <div className="d-flex align-items-start gap-3">
                <div
                  className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
                  style={{ width: 42, height: 42 }}
                >
                  <i className="fa-solid fa-robot" style={{ fontSize: 16 }} />
                </div>
                <div>
                  <div className="fw-semibold mb-1">
                    How OpenClaw Runs the Script
                  </div>
                  <p className="text-muted mb-2" style={{ fontSize: "13.5px" }}>
                    The tracker is packaged as an OpenClaw skill via{" "}
                    <code>SKILL.md</code> — a markdown file with frontmatter
                    that tells OpenClaw what the skill does, when to use it, and
                    how to invoke it. When a matching WhatsApp message arrives,
                    OpenClaw reads the skill definition and runs{" "}
                    <code>axis_tracker.py</code> with the appropriate day
                    argument — no separate API or webhook needed.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* WhatsApp on-demand triggers */}
          <section className="mb-4">
            <h2
              className="fw-bold mb-0"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              On-Demand via WhatsApp
            </h2>
            <p className="text-muted mb-4 mt-2">
              Since the tracker is registered as an OpenClaw skill, you can
              trigger it anytime by messaging the agent naturally.
            </p>
            <div className="card border-0 shadow-sm p-0 overflow-hidden">
              <table
                className="table table-hover mb-0"
                style={{ fontSize: "14px" }}
              >
                <thead className="table-light">
                  <tr>
                    <th className="px-4 py-3 fw-semibold">WhatsApp Message</th>
                    <th className="px-4 py-3 fw-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {WHATSAPP_TRIGGERS.map((t) => (
                    <tr key={t.msg}>
                      <td className="px-4 py-3">
                        <i className="fa-brands fa-whatsapp text-success me-2" />
                        <span className="fst-italic text-muted">"{t.msg}"</span>
                      </td>
                      <td className="px-4 py-3 text-dark">{t.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Dashboards */}
          <section className="mb-4">
            <h2
              className="fw-bold mb-0"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              Generated Dashboards
            </h2>
            <p className="text-muted mb-4 mt-2">
              Every run regenerates all four views from the SQLite DB history.
            </p>
            <div className="row g-3">
              {DASHBOARDS.map((d) => (
                <div key={d.label} className="col-12 col-sm-6 col-xl-3">
                  <div className="card border-0 shadow-sm h-100 p-3">
                    <div className="text-primary mb-2">
                      <i className="fa-solid fa-chart-bar" />
                    </div>
                    <div
                      className="fw-semibold mb-1"
                      style={{ fontSize: "14px" }}
                    >
                      {d.label}
                    </div>
                    <div
                      className="text-muted mb-2"
                      style={{ fontSize: "13px" }}
                    >
                      {d.desc}
                    </div>
                    <code className="text-muted" style={{ fontSize: "11px" }}>
                      {d.file}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Dashboard screenshot */}
          <section className="mb-4">
            <img
              src={dashboardImg}
              alt="Axis Spending Tracker Dashboard"
              className="img-fluid rounded shadow-sm border"
            />
          </section>

          {/* Tech stack */}
          <section className="mb-2">
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
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <i className={`${t.icon} text-primary`} />
                      <span
                        className="fw-semibold"
                        style={{ fontSize: "14px" }}
                      >
                        {t.layer}
                      </span>
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

          {/* Setup CTA */}
          <section className="mb-3">
            <hr className="mb-4" />
            <div className="d-flex align-items-center gap-2 mb-2">
              <i className="fa-solid fa-screwdriver-wrench text-primary" />
              <span className="fw-semibold" style={{ fontSize: "16px" }}>
                Want to set up something like this?
              </span>
            </div>
            <p className="text-muted mb-3" style={{ fontSize: "14px" }}>
              Step-by-step guide covering Himalaya, Gmail IMAP, OpenClaw skill
              registration, nginx, cron scheduling, and everything needed to run
              this on your own server.
            </p>
            <Link
              to="/projects/axis-spending-openclaw/setup"
              className="btn btn-primary btn-sm"
            >
              <i className="fa-solid fa-book-open me-2" />
              View Setup Guide
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default AxisSpending;
