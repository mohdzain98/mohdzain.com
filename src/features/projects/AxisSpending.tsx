import { buttonVariants } from "@/components/ui/button";
import { Icon } from "@/components/icons/Icon";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SectionHeader from "@/components/layout/SectionHeader";
import dashboardImg from "@/assets/blogs/axis-spending/dashboard.webp";

const WORKFLOW_STEPS = [
  {
    num: "01",
    icon: "envelope",
    title: "Email Fetch via Himalaya",
    desc: "Himalaya connects to Gmail via IMAP and fetches Axis Bank alert emails from alerts@axis.bank.in. Only new or missing emails are pulled — not the full inbox every run.",
  },
  {
    num: "02",
    icon: "file-lines",
    title: "Transaction Parsing",
    desc: "Each email subject and body is parsed to extract date, debit/credit type, amount, account suffix, and transaction info (UPI reference, merchant name).",
  },
  {
    num: "03",
    icon: "tags",
    title: "Rule-Based Categorization",
    desc: "Transactions are categorized using rule based classifier matched against the merchant name and transaction particulars — food, shopping, medical, recharge, and more.",
  },
  {
    num: "04",
    icon: "database",
    title: "SQLite Deduplication & Storage",
    desc: "Parsed rows are deduplicated and inserted into a local SQLite database. The DB is the source of truth — dashboards are always regenerated from stored history.",
  },
  {
    num: "05",
    icon: "chart-pie",
    title: "Dashboard Generation",
    desc: "Four HTML dashboards are regenerated on every run: latest week, current month, all-time summary, and a monthly archive index — all served as static files via nginx.",
  },
  {
    num: "06",
    icon: "whatsapp",
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
    icon: "inbox",
    items: ["Himalaya", "Gmail IMAP", "IMAP/TLS"],
  },
  {
    layer: "Data Processing",
    icon: "gear",
    items: ["Python", "Regex Rules", "SQLite"],
  },
  {
    layer: "Dashboard",
    icon: "chart-bar",
    items: ["HTML", "nginx", "Static Files"],
  },
  {
    layer: "Agent & Messaging",
    icon: "robot",
    items: ["OpenClaw", "WhatsApp Gateway", "SKILL.md"],
  },
  {
    layer: "Scheduling",
    icon: "clock",
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
          backgroundColor: "var(--background)",
          minHeight: "100vh",
        }}
      >
        <div
          className="container mx-auto py-12 px-0 md:px-12 xl:px-12 mt-6"
          style={{ maxWidth: "1200px" }}
        >
          {/* Breadcrumb */}
          <section>
            <Breadcrumbs
              items={[
                { label: "Home", to: "/" },
                { label: "Projects", to: "/projects" },
                { label: "OpenClaw Spending Agent" },
              ]}
            />

            <SectionHeader
              title="OpenClaw Spending Agent"
              subtitle="A personal AI agent that automatically tracks Axis Bank spending — fetches emails, categorizes transactions, generates dashboards, and sends weekly WhatsApp summaries. Trigger it anytime via natural language on WhatsApp."
              className="mb-6"
            />

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
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
                  className="inline-flex items-center text-xs font-medium rounded-full bg-primary/10 text-primary px-4 py-2"
                  style={{ fontSize: "13px" }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="https://github.com/mohdzain98/openclaw-tools/tree/main/axis-spending"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-card text-card-foreground border  px-6 py-4 flex flex-row items-center gap-2 no-underline"
                style={{ borderRadius: 8 }}
              >
                <Icon
                  name="github"
                  className="size-[1em] text-foreground text-xl"
                />
                <div>
                  <div
                    className="font-semibold text-foreground"
                    style={{ fontSize: "14px" }}
                  >
                    GitHub
                  </div>
                  <div
                    className="text-muted-foreground"
                    style={{ fontSize: "12px" }}
                  >
                    openclaw-tools/axis-spending
                  </div>
                </div>
              </a>
              <Link
                to="/blogs/automated-spending-tracker-openclaw"
                className="rounded-lg bg-card text-card-foreground border  px-6 py-4 flex flex-row items-center gap-2 no-underline"
                style={{ borderRadius: 8 }}
              >
                <Icon
                  name="file-lines"
                  className="size-[1em] text-foreground text-xl"
                />
                <div>
                  <div
                    className="font-semibold text-foreground"
                    style={{ fontSize: "14px" }}
                  >
                    Blog Post
                  </div>
                  <div
                    className="text-muted-foreground"
                    style={{ fontSize: "12px" }}
                  >
                    Automated Spending Tracker with OpenClaw
                  </div>
                </div>
              </Link>
              <div
                className="rounded-lg bg-card text-card-foreground border  px-6 py-4 flex flex-row items-center gap-2"
                style={{ borderRadius: 8 }}
              >
                <Icon
                  name="gauge"
                  className="size-[1em] text-foreground text-xl fe-2"
                />
                <div>
                  <div
                    className="font-semibold text-foreground"
                    style={{ fontSize: "14px" }}
                  >
                    Dashboard
                  </div>
                  <div
                    className="text-muted-foreground"
                    style={{ fontSize: "12px" }}
                  >
                    HTML files generated from SQLite data
                  </div>
                </div>
              </div>
              <div
                className="rounded-lg bg-card text-card-foreground border  px-6 py-4 flex flex-row items-center gap-2"
                style={{ borderRadius: 8 }}
              >
                <Icon
                  name="whatsapp"
                  className="size-[1em] text-green-600 dark:text-green-400 text-xl fe-2"
                />
                <div>
                  <div
                    className="font-semibold text-foreground"
                    style={{ fontSize: "14px" }}
                  >
                    Live Updates
                  </div>
                  <div
                    className="text-muted-foreground"
                    style={{ fontSize: "12px" }}
                  >
                    on Whatsapp
                  </div>
                </div>
              </div>
            </div>

            <hr style={{ margin: 0, padding: 0 }} />
          </section>

          {/* Architecture flow */}
          <section className="mt-6 mb-6">
            <h2
              className="font-bold mb-0"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              How It Works
            </h2>
            <p className="text-muted-foreground mb-6 mt-2">
              A fully automated pipeline — from inbox to WhatsApp — running on a
              cron schedule every Sunday with no manual intervention needed.
            </p>

            {/* Pipeline strip */}
            <div className="rounded-lg bg-card text-card-foreground border  p-6 mb-6">
              <div
                className="flex flex-wrap items-center gap-2 justify-center"
                style={{ fontSize: "14px" }}
              >
                {[
                  { icon: "envelope", label: "Bank Email" },
                  { icon: "arrow-right", label: null },
                  { icon: "inbox", label: "Himalaya IMAP" },
                  { icon: "arrow-right", label: null },
                  { icon: "tags", label: "Parse & Categorize" },
                  { icon: "arrow-right", label: null },
                  { icon: "database", label: "SQLite DB" },
                  { icon: "arrow-right", label: null },
                  { icon: "chart-pie", label: "HTML Dashboard" },
                  { icon: "arrow-right", label: null },
                  { icon: "whatsapp", label: "WhatsApp Summary" },
                ].map((step, i) =>
                  step.label ? (
                    <div
                      key={i}
                      className="flex flex-col items-center gap-1 text-center"
                      style={{ minWidth: 72 }}
                    >
                      <div
                        className="bg-primary/10 text-primary rounded-full flex items-center justify-center"
                        style={{ width: 40, height: 40 }}
                      >
                        <Icon name={step.icon} className="size-[1em]" />
                      </div>
                      <span
                        className="text-muted-foreground font-medium"
                        style={{ fontSize: "11px" }}
                      >
                        {step.label}
                      </span>
                    </div>
                  ) : (
                    <Icon
                      name="arrow-right"
                      key={i}
                      style={{ fontSize: "11px" }}
                      className="size-[1em] text-muted-foreground"
                    />
                  ),
                )}
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              {WORKFLOW_STEPS.map((s) => (
                <div key={s.num} className="col-span-12 md:col-span-6">
                  <div className="rounded-lg bg-card text-card-foreground border  h-full p-4">
                    <div className="flex gap-4 items-start">
                      <div
                        className="bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0"
                        style={{ width: 38, height: 38 }}
                      >
                        <Icon
                          name={s.icon}
                          style={{ fontSize: 14 }}
                          className="size-[1em]"
                        />
                      </div>
                      <div>
                        <div
                          className="font-semibold mb-1"
                          style={{ fontSize: "14px" }}
                        >
                          <span className="text-primary mr-1">{s.num}</span>{" "}
                          {s.title}
                        </div>
                        <div
                          className="text-muted-foreground"
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
          <section className="mb-6">
            <h2
              className="font-bold mb-0"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              How Classification Works
            </h2>
            <p className="text-muted-foreground mb-6 mt-2">
              Every transaction is classified by a rule-based classifier written
              in <code>tracker.py</code>. Matching runs against the extracted
              merchant name and transaction particulars — fast, deterministic,
              and easy to extend.
            </p>

            <div className="grid grid-cols-12 gap-4 mb-6">
              {[
                {
                  icon: "magnifying-glass",
                  title: "Merchant Extraction",
                  desc: 'The raw transaction info (e.g. "UPI/P2M/737295712717/Haleem Biryani/AXIS BANK") is parsed by pick_payee() to extract a clean merchant name before matching.',
                },
                {
                  icon: "list-check",
                  title: "Keyword Rule Matching",
                  desc: "CATEGORY_RULES maps categories like food, shopping, medical, recharge, and travel to keyword lists. The merchant name is matched against each rule set in order.",
                },
                {
                  icon: "circle-check",
                  title: "Deterministic & Extendable",
                  desc: 'No LLM calls — classification is pure regex. If a merchant like "Haleem Biryani" matches the food rule, it is always food. New merchants are added by extending the rule list.',
                },
                {
                  icon: "tag",
                  title: 'Fallback to "other"',
                  desc: 'If no rule matches the merchant or transaction info, the transaction is assigned to the "other" category and can be re-classified later by adding a new rule.',
                },
              ].map((c) => (
                <div key={c.title} className="col-span-12 md:col-span-6">
                  <div className="rounded-lg bg-card text-card-foreground border  h-full p-4">
                    <div className="flex gap-4 items-start">
                      <div
                        className="bg-green-600/10 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center shrink-0"
                        style={{ width: 38, height: 38 }}
                      >
                        <Icon
                          name={c.icon}
                          style={{ fontSize: 14 }}
                          className="size-[1em]"
                        />
                      </div>
                      <div>
                        <div
                          className="font-semibold mb-1"
                          style={{ fontSize: "14px" }}
                        >
                          {c.title}
                        </div>
                        <div
                          className="text-muted-foreground"
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
            <div className="rounded-lg bg-card text-card-foreground border  p-6">
              <div className="flex items-start gap-4">
                <div
                  className="bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0"
                  style={{ width: 42, height: 42 }}
                >
                  <Icon
                    name="robot"
                    style={{ fontSize: 16 }}
                    className="size-[1em]"
                  />
                </div>
                <div>
                  <div className="font-semibold mb-1">
                    How OpenClaw Runs the Script
                  </div>
                  <p
                    className="text-muted-foreground mb-2"
                    style={{ fontSize: "13.5px" }}
                  >
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
          <section className="mb-6">
            <h2
              className="font-bold mb-0"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              On-Demand via WhatsApp
            </h2>
            <p className="text-muted-foreground mb-6 mt-2">
              Since the tracker is registered as an OpenClaw skill, you can
              trigger it anytime by messaging the agent naturally.
            </p>
            <div className="rounded-lg bg-card text-card-foreground border  p-0 overflow-hidden">
              <table
                className="w-full text-sm mb-0"
                style={{ fontSize: "14px" }}
              >
                <thead className="">
                  <tr>
                    <th className="px-6 py-4 font-semibold">
                      WhatsApp Message
                    </th>
                    <th className="px-6 py-4 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {WHATSAPP_TRIGGERS.map((t) => (
                    <tr key={t.msg}>
                      <td className="px-6 py-4">
                        <Icon
                          name="whatsapp"
                          className="size-[1em] text-green-600 dark:text-green-400 mr-2"
                        />
                        <span className="italic text-muted-foreground">
                          "{t.msg}"
                        </span>
                      </td>
                      <td className="px-6 py-4 text-foreground">{t.result}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Dashboards */}
          <section className="mb-6">
            <h2
              className="font-bold mb-0"
              style={{ fontSize: "clamp(1.3rem, 1.9vw, 1.8rem)" }}
            >
              Generated Dashboards
            </h2>
            <p className="text-muted-foreground mb-6 mt-2">
              Every run regenerates all four views from the SQLite DB history.
            </p>
            <div className="grid grid-cols-12 gap-4">
              {DASHBOARDS.map((d) => (
                <div
                  key={d.label}
                  className="col-span-12 sm:col-span-6 xl:col-span-3"
                >
                  <div className="rounded-lg bg-card text-card-foreground border  h-full p-4">
                    <div className="text-primary mb-2">
                      <Icon name="chart-bar" className="size-[1em]" />
                    </div>
                    <div
                      className="font-semibold mb-1"
                      style={{ fontSize: "14px" }}
                    >
                      {d.label}
                    </div>
                    <div
                      className="text-muted-foreground mb-2"
                      style={{ fontSize: "13px" }}
                    >
                      {d.desc}
                    </div>
                    <code
                      className="text-muted-foreground"
                      style={{ fontSize: "11px" }}
                    >
                      {d.file}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Dashboard screenshot */}
          <section className="mb-6">
            <img
              src={dashboardImg}
              alt="Axis Spending Tracker Dashboard"
              className="max-w-full h-auto rounded-md  border"
            />
          </section>

          {/* Tech stack */}
          <section className="mb-2">
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
                    <div className="flex items-center gap-2 mb-4">
                      <Icon name={t.icon} className="size-[1em] text-primary" />
                      <span
                        className="font-semibold"
                        style={{ fontSize: "14px" }}
                      >
                        {t.layer}
                      </span>
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

          {/* Setup CTA */}
          <section className="mb-4">
            <hr className="mb-6" />
            <div className="flex items-center gap-2 mb-2">
              <Icon
                name="screwdriver-wrench"
                className="size-[1em] text-primary"
              />
              <span className="font-semibold" style={{ fontSize: "16px" }}>
                Want to set up something like this?
              </span>
            </div>
            <p
              className="text-muted-foreground mb-4"
              style={{ fontSize: "14px" }}
            >
              Step-by-step guide covering Himalaya, Gmail IMAP, OpenClaw skill
              registration, nginx, cron scheduling, and everything needed to run
              this on your own server.
            </p>
            <Link
              to="/projects/axis-spending-openclaw/setup"
              className={buttonVariants({ variant: "default", size: "sm" })}
            >
              <Icon name="book-open" className="size-[1em] mr-2" />
              View Setup Guide
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default AxisSpending;
