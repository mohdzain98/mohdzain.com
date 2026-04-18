import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import CodeBlock from "../../../components/layout/CodeBlock";
import "../styling/blogs.css";
import ShadedHR from "../../../components/ui/ShadedHR";

const AxisSpendingBlog = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "I had no idea where my money was going every month. So I automated the answer.",
    description:
      "How I built a personal spending tracker that reads Bank emails, categorizes transactions with regex rules, generates HTML dashboards, and texts me a weekly WhatsApp summary — all self-hosted.",
    author: {
      "@type": "Person",
      name: "Mohd Zain",
      url: "https://mohdzain.com",
    },
    publisher: {
      "@type": "Person",
      name: "Mohd Zain",
    },
    datePublished: "2026-04-17",
    dateModified: "2026-04-17",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://mohdzain.com/blogs/automated-spending-tracker-openclaw",
    },
  };

  return (
    <>
      <Helmet>
        <title>I automated my monthly spending reports | Mohd Zain</title>
        <meta
          name="description"
          content="How I built a personal spending tracker that reads Bank emails, categorizes transactions with regex rules, generates HTML dashboards, and texts me a weekly WhatsApp summary."
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="I had no idea where my money was going every month. So I automated the answer."
        />
        <meta
          property="og:description"
          content="How I built a personal spending tracker that reads Bank emails, categorizes transactions, and sends weekly WhatsApp summaries — fully self-hosted."
        />
        <meta
          property="og:url"
          content="https://mohdzain.com/blogs/automated-spending-tracker-openclaw"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="I automated my monthly spending reports"
        />
        <meta
          name="twitter:description"
          content="Gmail IMAP + Python + SQLite + OpenClaw = weekly spending summaries on WhatsApp."
        />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <main
        className={`container pt-5 pb-4 ${isTabletOrMobile ? "px-4" : "px-0"}`}
        style={{
          maxWidth: isTabletOrMobile ? "100%" : "900px",
          marginTop: isTabletOrMobile ? "0px" : "30px",
        }}
      >
        {/* Breadcrumb */}
        <div className="mt-2 mb-4">
          <nav aria-label="breadcrumb" className="stbd">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Automated Spending Tracker
              </li>
            </ol>
          </nav>
        </div>

        {/* Header */}
        <header className="mb-4">
          <h3 className="fw-bold lh-sm">
            I had no idea where my money was going every month. So I automated
            the answer.
          </h3>
          <p className="text-muted mb-0 mt-2">
            <i className="fa-regular fa-calendar me-2" />
            Apr 17, 2026 · 10 min read
          </p>
        </header>

        {/* Intro */}
        <p style={{ fontSize: "17px" }}>
          Every month it was the same story. I'd open my Bank app, stare at the
          balance, and feel that familiar low-grade anxiety —{" "}
          <em>where did it all go?</em> I knew I'd spent on food, maybe a
          flight, some random UPI transfers I couldn't remember. But the actual
          breakdown? No idea.
        </p>
        <p style={{ fontSize: "17px" }}>
          I tried the manual route. Downloaded the bank statement, opened it in
          Excel, started categorizing rows one by one. Did that exactly once.
          Never again.
        </p>
        <p style={{ fontSize: "17px" }}>So I built something instead.</p>

        {/* <hr /> */}
        <ShadedHR />

        {/* The Problem */}
        <h4 className="mt-5 mb-3 fw-bolder">The Problem with Bank Apps</h4>
        <p style={{ fontSize: "17px" }}>
          Bank sends you an email for every single transaction. Every UPI
          payment, every debit, every credit — it hits your inbox within
          seconds. The data is all there. It's just scattered across 100+ emails
          with no structure, no categories, no summary.
        </p>
        <p style={{ fontSize: "17px" }}>What I wanted was simple:</p>
        <ul style={{ fontSize: "17px" }}>
          <li>Every week, automatically tell me what I spent and where</li>
          <li>Break it down by category — food, rent, transport, shopping</li>
          <li>Show it on a clean dashboard I can open in a browser</li>
          <li>
            Send me a WhatsApp message with the summary so I don't even have to
            open a laptop
          </li>
        </ul>
        <p style={{ fontSize: "17px" }}>
          No tool did exactly this for Indian banks the way I wanted. So I built
          it myself using Python, Himalaya, SQLite, and OpenClaw.
        </p>

        <ShadedHR />

        {/* Architecture */}
        <h4 className="mt-5 mb-3 fw-bolder">How It Works</h4>
        <p style={{ fontSize: "17px" }}>
          The architecture is straightforward. A cron job wakes up every Sunday
          at 12 AM IST, the Python script fetches emails via Himalaya, parses
          and categorizes each transaction, stores it in SQLite, generates HTML
          dashboards, and finally sends a WhatsApp summary through OpenClaw.
        </p>
        <div className="card border-0 shadow-sm py-4 mb-3">
          <div className="d-flex flex-wrap align-items-center justify-content-center gap-2">
            {[
              {
                icon: "fa-solid fa-clock",
                label: "Cron",
                sub: "Every Sunday 12 AM IST",
              },
              {
                icon: "fa-solid fa-envelope",
                label: "Himalaya IMAP",
                sub: "Fetch bank emails",
              },
              {
                icon: "fa-solid fa-file-lines",
                label: "Parse",
                sub: "Subject + body",
              },
              {
                icon: "fa-solid fa-tags",
                label: "Categorize",
                sub: "Rule-based",
              },
              {
                icon: "fa-solid fa-database",
                label: "SQLite",
                sub: "Deduplicate & store",
              },
              {
                icon: "fa-solid fa-chart-pie",
                label: "Dashboard",
                sub: "4 HTML files",
              },
              {
                icon: "fa-brands fa-whatsapp",
                label: "WhatsApp",
                sub: "Summary sent",
              },
            ].map((step, i, arr) => (
              <div key={step.label} className="d-flex align-items-center">
                <div
                  className="d-flex flex-column align-items-center text-center px-2"
                  style={{ minWidth: 76 }}
                >
                  <div
                    className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center mb-2"
                    style={{ width: 44, height: 44 }}
                  >
                    <i className={step.icon} />
                  </div>
                  <div className="fw-semibold" style={{ fontSize: "12px" }}>
                    {step.label}
                  </div>
                  <div className="text-muted" style={{ fontSize: "11px" }}>
                    {step.sub}
                  </div>
                </div>
                {i < arr.length - 1 && (
                  <i
                    className="fa-solid fa-chevron-right text-muted"
                    style={{ fontSize: "10px" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <p style={{ fontSize: "17px" }}>
          No cloud services. No third-party finance apps. Everything runs on my
          own server.
        </p>

        <ShadedHR />

        {/* Himalaya */}
        <h4 className="mt-5 mb-3 fw-bolder">Reading Emails with Himalaya</h4>
        <p style={{ fontSize: "17px" }}>
          Himalaya is a CLI email client that talks to Gmail over IMAP. Once
          configured with a Gmail App Password, you can list emails, read them,
          and search — all from the terminal or a Python script.
        </p>
        <p style={{ fontSize: "17px" }}>
          The key insight was that I didn't need to read the full email body for
          most transactions. Bank puts the critical information right in the
          subject line:
        </p>
        <CodeBlock
          id="as-subject-line"
          language="text"
          code={`INR 30.00 was debited from your A/c no. XX1258.`}
        />
        <p style={{ fontSize: "17px" }}>
          Amount, type (debit/credit), account — all extractable with a single
          regex from the envelope metadata. No need to open 134 emails one by
          one.
        </p>
        <p style={{ fontSize: "17px" }}>
          This was actually a performance fix I had to make. The first version
          of the script read every email body individually — 134 IMAP calls,
          each taking 2–3 seconds. Seven minutes to run. After switching to
          subject-line parsing, it dropped to under 10 seconds.
        </p>
        <p style={{ fontSize: "17px" }}>
          For the merchant name, I do read the body — but only for the
          "Transaction Info" line:
        </p>
        <CodeBlock
          id="as-tx-info"
          language="text"
          code={`Transaction Info: UPI/P2M/737295712717/BANGALORE METRO`}
        />
        <p style={{ fontSize: "17px" }}>
          A <code>pick_payee()</code> function then extracts the meaningful part
          — stripping UPI codes, bank names, and transaction IDs to get the
          actual merchant name:
        </p>
        <CodeBlock
          id="as-pick-payee"
          language="python"
          code={`def pick_payee(text):
    if not isinstance(text, str):
        return ""
    text = text.replace("\\r", " ").replace("\\n", "/")
    if ":" in text:
        text = text.split(":", 1)[1]
    parts = [part.strip() for part in re.split(r"/+", text) if part.strip()]
    for part in parts:
        part_low = re.sub(r"[^a-z0-9 ]", "", part.lower()).strip()
        if not part_low or part_low.isdigit():
            continue
        if any(token in part_low for token in IGNORE_TOKENS):
            continue
        return part
    for part in reversed(parts):
        if len(re.sub(r"\\W", "", part)) >= 2:
            return part
    return ""`}
        />

        <ShadedHR />

        {/* Categorization */}
        <h4 className="mt-5 mb-3 fw-bolder">The Categorization Engine</h4>
        <p style={{ fontSize: "17px" }}>
          UPI transaction strings look like this:
        </p>
        <CodeBlock
          id="as-upi-strings"
          language="text"
          code={`UPI/P2M/540045587895/optimum nutrition/optimu/AIRTEL PAYMENTS BANK
UPI/P2A/503282313395/MOHD ZAIN SO MOHD RAZ/emi/Punjab National Bank
UPI/P2M/233136331593/BMTC BUS KA57F0095/Pay to/CANARA BANK`}
        />
        <p style={{ fontSize: "17px" }}>
          I built a rule-based classifier — a dictionary of categories mapped to
          keyword/regex lists. First match wins:
        </p>
        <CodeBlock
          id="as-category-rules"
          language="python"
          code={`CATEGORY_RULES = {
    "emi":       [r"\\bemi\\b", r"\\bcred\\b", r"loan"],
    "rent":      [r"\\brent\\b", r"\\bpg\\b", r"7 hills pg"],
    "food":      [r"blinkit", r"zomato", r"swiggy", r"biryani", r"pizza"],
    "transport": [r"\\bbmtc\\b", r"\\bmetro\\b", r"\\bauto\\b", r"\\bcab\\b"],
    "recharge":  [r"airtel", r"jio recharge", r"recharge"],
    "airticket": [r"air india", r"indigo", r"makemytrip", r"interglobe"],
    "grocery":   [r"super market", r"groceries", r"provision store"],
    "medical":   [r"apollo pharmacy", r"hospital", r"pharmacy", r"clinic"],
    "shopping":  [r"flipkart", r"amazon india", r"decathlon"],
    # ... 20+ more categories
}`}
        />
        <p style={{ fontSize: "17px" }}>
          The categorizer checks the extracted merchant name and transaction
          particulars against these rules:
        </p>
        <CodeBlock
          id="as-categorize"
          language="python"
          code={`def categorize_by_rules(merchant, particulars):
    text = f"{merchant} {particulars}".lower()
    for category, patterns in CATEGORY_RULES.items():
        for pattern in patterns:
            if re.search(pattern, text, flags=re.IGNORECASE):
                return category
    return "other"`}
        />

        {/* Challenge */}
        <h4 className="mt-4 fw-bolder">
          The Honest Tradeoff: Rule-Based Classification
        </h4>
        <p style={{ fontSize: "17px" }}>
          Rule-based classification has one real weakness — it misses merchants
          you haven't added yet. A new restaurant, an obscure UPI payee, a
          one-time vendor — these fall through to <code>other</code>.
        </p>
        <p style={{ fontSize: "17px" }}>
          But here's the thing:{" "}
          <strong>when it matches, it's 100% accurate.</strong> No
          hallucinations, no wrong guesses, no "I think this might be food." If{" "}
          <code>swiggy</code> is in the string, it's food. Period.
        </p>
        <p style={{ fontSize: "17px" }}>
          The maintenance cost is real. Every few weeks I find a new merchant in{" "}
          <code>other</code> that I need to add a rule for. It takes 30 seconds
          to update the rules file. That's a small price for deterministic
          accuracy.
        </p>
        <p style={{ fontSize: "17px" }}>
          I did experiment with OpenAI/Gemini as a fallback for unknown
          transactions. It worked, but I removed it. For a personal finance
          tool, I'd rather have a known gap I can fix than an AI guess I can't
          fully trust. For a larger dataset with more variety, LLM fallback
          makes sense — but that's a layer you add later.
        </p>

        <ShadedHR />

        {/* SQLite */}
        <h4 className="mt-5 mb-3 fw-bolder">Storing Everything in SQLite</h4>
        <p style={{ fontSize: "17px" }}>
          Every parsed transaction goes into a local SQLite database. This was a
          key architectural decision — storing in SQLite means:
        </p>
        <ul style={{ fontSize: "17px" }}>
          <li>
            The script only fetches emails it hasn't seen before (deduplication
            via <code>source_id</code>)
          </li>
          <li>Dashboards can be regenerated anytime from historical data</li>
          <li>I can query my own spending history with plain SQL</li>
        </ul>
        <p style={{ fontSize: "17px" }}>
          The script checks DB coverage on each run and only fetches emails
          needed to fill gaps. The first run might pull 3 months of history.
          Every run after that fetches just the new week.
        </p>

        <ShadedHR />

        {/* Dashboards */}
        <h4 className="mt-5 mb-3 fw-bolder">Four Dashboards, Always Fresh</h4>
        <p style={{ fontSize: "17px" }}>
          Every run generates four static HTML dashboards:
        </p>
        <ul style={{ fontSize: "17px" }}>
          <li>
            <strong>latest.html</strong> — the most recent weekly report
          </li>
          <li>
            <strong>current-month.html</strong> — month-to-date breakdown
          </li>
          <li>
            <strong>all-time.html</strong> — total spending across all time by
            category
          </li>
          <li>
            <strong>archive.html</strong> — historical weekly reports
          </li>
        </ul>
        <p style={{ fontSize: "17px" }}>
          These are static HTML files served by nginx. No React, no build step,
          no framework. Just clean HTML + CSS with charts rendered inline.
          Accessible at <code>https://domain.com/spending/</code>.
        </p>
        <img
          src={require("../../../Assets/blogs/axis-spending/dashboard.png")}
          alt="Spending Tracker Dashboard"
          className="img-fluid rounded border mt-3 mb-1"
        />
        <span className="mt-2 text-muted" style={{ fontSize: "13px" }}>
          The image shows example dashboard
        </span>

        <ShadedHR />

        {/* OpenClaw */}
        <h4 className="mt-5 mb-3 fw-bolder">OpenClaw — The Agent Layer</h4>
        <p style={{ fontSize: "17px" }}>
          OpenClaw is a self-hosted AI agent framework I already had running on
          my server for other automations. The spending tracker plugs into it as
          a <strong>skill</strong> — a <code>SKILL.md</code> file that tells the
          agent what this tool does and how to run it:
        </p>
        <CodeBlock
          id="as-skill-md"
          language="yaml"
          code={`---
name: axis-spending
description: "Fetches Bank transaction emails via Himalaya, categorizes them using notebook-style regex rules, stores them in SQLite, generates weekly and monthly dashboards from stored history, and sends a WhatsApp summary. Use when asked about weekly spending reports, category summaries, or transaction analysis."
metadata: {"clawdbot":{"emoji":"💸","requires":{"bins":["himalaya","python3"]}}}
---

# Bank Spending Tracker

## Description
Use this skill when the user asks to:
- Generate a spending report or weekly summary
- Show how much was spent this week or last week
- Analyze Bank transactions by category or payee/target
- View spending dashboard
- Check food / transport / rent / any category spend
- Run the spending report manually

## Tool: generate_weekly_report

Fetches Bank transaction emails from the last 7 days, categorizes them
using notebook-style regex rules, stores them in SQLite, generates stored-history
dashboards, and sends a WhatsApp summary with the latest dashboard link.

### Usage
cd /home/zain/zainclaw/axis_spending
python3 axis_tracker.py

From a checked-out repo root, this also works:
python3 zainclaw/axis_tracker.py

### Custom date range (optional)
# Last 14 days
cd /home/zain/zainclaw/axis_spending
python3 axis_tracker.py 14

# Last 30 days
python3 axis_tracker.py 30

### Output
- HTML dashboard at: https://domain.com/spending/latest.html
- Current month dashboard at: https://domain.com/spending/current-month.html
- All-time dashboard at: https://domain.com/spending/all-time.html
- Archive page at: https://domain.com/spending/archive.html
- SQLite database at: '/home/zain/zainclaw/axis_spending/data/transactions.db'
- Per-category debit / credit / net summary table
- Category target drill-down table grouped by extracted payee/merchant
- WhatsApp message with summary and link
- Console output with debit / credit totals and top category rows

### Categories tracked
emi, rent, food, transport, credit, recharge, airticket, grocery, medical,
shopping, maintainence, friends, home, juice_below_vsai, hair, vydehi,
snapchat, bank, self, ais, interest, subscriptions, gym_and_health,
kayakalp, other

### Notes
- Only processes emails from alerts@axis.bank.in
- Requires Himalaya configured at ~/.config/himalaya/config.toml
- Categorization order: regex notebook rules → "other"
- Transactions are deduplicated and stored in SQLite using a stable source id
- Dashboard includes weekly totals, category summary, grouped target-level drill-down, and separate stored-history views for current month and prior months
- Dashboard files are written inside '/home/zain/zainclaw/axis_spending/dashboard'
- Runs automatically every Monday at 12:00 AM IST via cron
`}
        />
        <p style={{ fontSize: "17px" }}>
          Once registered, I can trigger the report anytime by messaging my
          OpenClaw agent on WhatsApp:
        </p>
        <blockquote
          className="border-start border-3 border-primary ps-3 my-3"
          style={{ fontSize: "16px", fontStyle: "italic", color: "#555" }}
        >
          "Generate my spending report for last 2 weeks"
        </blockquote>
        <p style={{ fontSize: "17px" }}>
          OpenClaw reads the skill, runs the Python script with the right
          parameters, and replies with the summary + dashboard link. No manual
          SSH, no terminal, no laptop needed.
        </p>
        <p style={{ fontSize: "17px" }}>
          The weekly cron job handles the scheduled runs. OpenClaw handles the
          on-demand ones.
        </p>

        <ShadedHR />

        {/* WhatsApp */}
        <h4 className="mt-5 mb-3 fw-bolder">The WhatsApp Summary</h4>
        <p style={{ fontSize: "17px" }}>
          Every Sunday at 12 AM IST, this lands on my phone:
        </p>
        <CodeBlock
          id="as-whatsapp-msg"
          language="text"
          code={`📊 Spending Report
08 Apr – 15 Apr 2026

💸 Total Debit:   ₹7,916
📈 Total Credit:  ₹12,500
🔢 Transactions:  42

Category Summary:
  shopping      D ₹3,450 | C ₹0
  food          D ₹1,992 | C ₹0
  other         D ₹1,123 | C ₹0
  medical       D ₹840   | C ₹0
  recharge      D ₹249   | C ₹0

📊 Dashboard: https://domain.com/spending/latest.html`}
        />
        <p style={{ fontSize: "17px" }}>
          I open the link, see the full breakdown, close it. Done in 30 seconds.
        </p>

        <ShadedHR />

        {/* What I Learned */}
        <h4 className="mt-5 mb-3 fw-bolder">What I Learned</h4>

        <h6 className="fw-bold mt-3">Start with the data, not the model.</h6>
        <p style={{ fontSize: "17px" }}>
          My first instinct was to build an ML classifier. I had labeled data
          from an old notebook where I'd manually categorized months of
          transactions. But with ~300 samples across 21 categories, the model
          would have been mediocre. Rule-based works better at this scale, and I
          can always layer ML on top later when the SQLite DB has thousands of
          rows.
        </p>

        <h6 className="fw-bold mt-3">Envelope metadata is enough.</h6>
        <p style={{ fontSize: "17px" }}>
          I almost built a full email body parser before realizing the subject
          line had everything I needed for 90% of transactions. Always check
          what's already available before going deeper.
        </p>

        <h6 className="fw-bold mt-3">PATH in cron is a silent killer.</h6>
        <p style={{ fontSize: "17px" }}>
          The cron job kept failing because <code>openclaw</code> wasn't found —
          even though it worked fine in the terminal. Cron doesn't load your{" "}
          <code>.bashrc</code>. Always set the full PATH explicitly at the top
          of your crontab.
        </p>

        <h6 className="fw-bold mt-3">
          <code>source /etc/environment</code> will ruin your day.
        </h6>
        <p style={{ fontSize: "17px" }}>
          I ran it once to reload some env variables and it wiped my user PATH
          for the current session. Suddenly{" "}
          <code>openclaw: command not found</code>. Took a minute to figure out
          why. Don't do that.
        </p>

        <ShadedHR />

        {/* Stack */}
        <h4 className="mt-5 mb-3 fw-bolder">The Stack</h4>
        <div className="d-flex flex-wrap gap-2 mt-3 mb-3">
          {[
            ["fa-brands fa-python", "Python"],
            ["fa-solid fa-envelope", "Himalaya (IMAP)"],
            ["fa-solid fa-database", "SQLite"],
            ["fa-solid fa-robot", "OpenClaw"],
            ["fa-solid fa-server", "nginx"],
            ["fa-solid fa-clock", "cron"],
            ["fa-brands fa-whatsapp", "WhatsApp"],
            ["fa-solid fa-cloud", "DigitalOcean"],
          ].map(([icon, label]) => (
            <span
              key={label}
              className="badge bg-secondary bg-opacity-10 text-dark px-3 py-2"
              style={{ fontSize: "13px" }}
            >
              <i className={`${icon} me-2`} />
              {label}
            </span>
          ))}
        </div>

        <ShadedHR />

        {/* What's Next */}
        <h4 className="mt-5 mb-3 fw-bolder">What's Next</h4>
        <ul style={{ fontSize: "17px" }}>
          <li>
            <strong>ML classifier layer</strong> — once the SQLite DB has 1,000+
            labeled rows, train a TF-IDF + Logistic Regression model as a
            second-pass categorizer for unknowns
          </li>
          <li>
            <strong>Budget alerts</strong> — if food spend crosses ₹3,000
            mid-week, send a WhatsApp nudge
          </li>
          <li>
            <strong>Month-over-month comparison</strong> — "you spent 23% more
            on food this month vs last"
          </li>
        </ul>

        <hr className="mt-5" />

        {/* Footer */}
        <footer className="mt-4 mb-5">
          <div className="mb-4">
            <h6 className="fw-bolder">Related</h6>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/mohdzain98/openclaw-tools/tree/main/axis-spending"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  → GitHub — openclaw-tools/axis-spending
                </a>
              </li>
              <li>
                <a
                  href={require("../../../Assets/blogs/axis-spending/SKILL.md")}
                  download="SKILL.md"
                  className="text-decoration-none"
                >
                  → Download SKILL.md
                </a>
              </li>
              <li>
                <Link
                  to="/projects/axis-spending-openclaw"
                  className="text-decoration-none"
                >
                  → OpenClaw Spending Agent — Project Page
                </Link>
              </li>
              <li>
                <Link
                  to="/projects/axis-spending-openclaw/setup"
                  className="text-decoration-none"
                >
                  → Setup Guide — Gmail IMAP to cron in 10 steps
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-decoration-none">
                  → All blog posts
                </Link>
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h6 className="fw-bolder">Written by</h6>
            <p className="fw-bold mb-1">Mohd Zain</p>
            <p className="text-muted mb-0">
              Data Science | LLM Systems | Agentic AI
            </p>
          </div>

          <div className="mb-4">
            <p className="text-muted mb-1">
              Found this useful or have questions?
            </p>
            <a
              href="mailto:zainmohd1998@gmail.com"
              className="text-decoration-none"
            >
              Reach out via email
            </a>
          </div>

          <div>
            <p className="text-muted small mb-0">
              Last updated: April 2026 · Tags: Python, SQLite, OpenClaw,
              Himalaya, Gmail IMAP, WhatsApp
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default AxisSpendingBlog;
