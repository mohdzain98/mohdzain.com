import { buttonVariants } from "@/components/ui/button";
import { Icon } from "@/components/icons/Icon";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SectionHeader from "@/components/layout/SectionHeader";
import CodeBlock from "@/components/layout/CodeBlock";

const STEPS = [
  {
    num: "01",
    icon: "envelope-open-text",
    title: "Enable Gmail IMAP & Generate App Password",
    content: (
      <>
        <p
          className="text-muted-foreground mb-2"
          style={{ fontSize: "13.5px" }}
        >
          IMAP is enabled by default on Gmail. You only need to generate an App
          Password.
        </p>
        <ol
          className="text-muted-foreground pl-4 mb-0"
          style={{ fontSize: "13.5px" }}
        >
          <li>
            Go to <strong>myaccount.google.com/security</strong> and enable
            2-Step Verification.
          </li>
          <li>
            Go to <strong>myaccount.google.com/apppasswords</strong>.
          </li>
          <li>
            Enter app name <code>himalaya</code> and click{" "}
            <strong>Create</strong>.
          </li>
          <li>Copy the 16-character password — Google won't show it again.</li>
        </ol>
      </>
    ),
  },
  {
    num: "02",
    icon: "download",
    title: "Install Himalaya on the Server",
    content: (
      <>
        <p
          className="text-muted-foreground mb-2"
          style={{ fontSize: "13.5px" }}
        >
          SSH into your server and run:
        </p>
        <CodeBlock
          id="latest-version"
          language="bash"
          code={`# Check latest version
curl -s https://api.github.com/repos/pimalaya/himalaya/releases/latest | grep "tag_name"

# Download and install
curl -L "https://github.com/pimalaya/himalaya/releases/download/v1.2.0/himalaya-x86_64-unknown-linux-musl.tar.gz" -o himalaya.tar.gz
tar xzf himalaya.tar.gz
sudo mv himalaya /usr/local/bin/
himalaya --version`}
        />
      </>
    ),
  },
  {
    num: "03",
    icon: "gear",
    title: "Configure Himalaya",
    content: (
      <>
        <p
          className="text-muted-foreground mb-2"
          style={{ fontSize: "13.5px" }}
        >
          Create the config file and paste your Gmail credentials:
        </p>
        <CodeBlock
          id="latest-version"
          language="bash"
          code={`mkdir -p ~/.config/himalaya
nano ~/.config/himalaya/config.toml`}
        />
        <CodeBlock
          id="latest-version"
          language="bash"
          code={`[accounts.axis-inbox]
email = "youremail@gmail.com"
display-name = "Zain"
default = true

backend.type = "imap"
backend.host = "imap.gmail.com"
backend.port = 993
backend.encryption.type = "tls"
backend.login = "youremail@gmail.com"
backend.auth.type = "password"
backend.auth.raw = "abcdefghijklmnop"`}
        />
        <p className="text-muted-foreground mb-0" style={{ fontSize: "13px" }}>
          Test with: <code>himalaya envelope list</code>. You should see your
          inbox emails listed.
        </p>
      </>
    ),
  },
  {
    num: "04",
    icon: "folder-open",
    title: "Set Up Project Files",
    content: (
      <>
        <p
          className="text-muted-foreground mb-2"
          style={{ fontSize: "13.5px" }}
        >
          Create the directory structure on the server:
        </p>
        <CodeBlock
          id="setup-dirs"
          language="bash"
          code={`mkdir -p /home/zain/zainclaw/axis_spending/data
mkdir -p /home/zain/zainclaw/axis_spending/dashboard`}
        />
        <p
          className="text-muted-foreground mb-1"
          style={{ fontSize: "13.5px" }}
        >
          Place these files in <code>/home/zain/zainclaw/axis_spending/</code>:
        </p>
        <div className="flex flex-wrap gap-2">
          {["axis_tracker.py", "SKILL.md", ".env"].map((f) => (
            <code
              key={f}
              className="inline-flex items-center rounded-md text-xs font-medium bg-slate-500/10 text-foreground px-2 py-1"
              style={{ fontSize: "12px" }}
            >
              {f}
            </code>
          ))}
        </div>
      </>
    ),
  },
  {
    num: "05",
    icon: "python",
    title: "Install Python Dependencies",
    content: (
      <CodeBlock
        id="pip-install"
        language="bash"
        code={`pip install requests openpyxl --break-system-packages`}
      />
    ),
  },
  {
    num: "06",
    icon: "file-code",
    title: "Create .env File",
    content: (
      <>
        <p
          className="text-muted-foreground mb-2"
          style={{ fontSize: "13.5px" }}
        >
          Create <code>/home/zain/zainclaw/axis_spending/.env</code>:
        </p>
        <CodeBlock
          id="env-file"
          language="bash"
          code={`WHATSAPP_NUM=+910000000000
DASHBOARD_URL=https://domain.com/spending
AXIS_SENDER=alerts@axis.bank.in
AXIS_DATA_DIR=/home/zain/zainclaw/axis_spending/data
AXIS_DASHBOARD_DIR=/home/zain/zainclaw/axis_spending/dashboard
AXIS_DB_PATH=/home/zain/zainclaw/axis_spending/data/transactions.db
OPENCLAW_WHATSAPP_ENABLED=true
AXIS_DEFAULT_FETCH_DAYS=7
AXIS_LATEST_DASHBOARD_DAYS=7`}
        />
      </>
    ),
  },
  {
    num: "07",
    icon: "robot",
    title: "Register Skill with OpenClaw",
    content: (
      <>
        <p
          className="text-muted-foreground mb-2"
          style={{ fontSize: "13.5px" }}
        >
          Tell OpenClaw where your custom skills live, then restart the gateway:
        </p>
        <CodeBlock
          id="openclaw-register"
          language="bash"
          code={`openclaw config set skills.load.extraDirs '["/home/zain/zainclaw/axis_spending"]'
openclaw gateway restart
openclaw skills list  # should show: axis-spending`}
        />
      </>
    ),
  },
  {
    num: "08",
    icon: "server",
    title: "Configure nginx for Dashboard",
    content: (
      <>
        <p
          className="text-muted-foreground mb-2"
          style={{ fontSize: "13.5px" }}
        >
          Add a static location for the dashboards before the catch-all proxy
          block:
        </p>
        <CodeBlock
          id="nginx-config"
          language="nginx"
          code={`server {
    server_name domain.com;

    location /spending/ {
        alias /home/zain/zainclaw/axis_spending/dashboard/;
        index latest.html;
        try_files $uri $uri/ /latest.html;
        add_header Cache-Control "no-cache";
    }

    location / {
        proxy_pass http://127.0.0.1:18789;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }
}`}
        />
        <CodeBlock
          id="nginx-reload"
          language="bash"
          code={`sudo nginx -t && sudo systemctl reload nginx`}
        />
      </>
    ),
  },
  {
    num: "09",
    icon: "flask",
    title: "Test the Full Script",
    content: (
      <>
        <CodeBlock
          id="test-script"
          language="bash"
          code={`python3 /home/zain/zainclaw/axis_spending/axis_tracker.py`}
        />
        <p
          className="text-muted-foreground mb-1"
          style={{ fontSize: "13.5px" }}
        >
          Expected output:
        </p>
        <CodeBlock
          id="test-output"
          language="bash"
          code={`🚀 Axis Spending Tracker — 08 Apr – 15 Apr 2026
==================================================
📧 Fetching Axis Bank emails from last 7 days...
✅ Found 42 transactions

📊 Summary:
   Total Spent  : ₹7,916.00
   Transactions : 42

   Top Categories:
   shopping        ₹3,450.00
   food            ₹1,992.00

📁 Dashboard saved: /dashboard/week-2026-04-15.html
✅ WhatsApp message sent!`}
        />
      </>
    ),
  },
  {
    num: "10",
    icon: "clock",
    title: "Set Up the Cron Job",
    content: (
      <>
        <p
          className="text-muted-foreground mb-2"
          style={{ fontSize: "13.5px" }}
        >
          To run every Monday 12:00 AM IST (= 6:30 PM UTC Sunday):
        </p>
        <CodeBlock id="crontab-edit" language="bash" code={`crontab -e`} />
        <CodeBlock
          id="cron-job"
          language="bash"
          code={`30 18 * * 0 /usr/bin/python3 /home/zain/zainclaw/axis_spending/axis_tracker.py 7 >> /var/log/axis_tracker.log 2>&1`}
        />
        <p className="text-muted-foreground mb-0" style={{ fontSize: "13px" }}>
          View logs after it runs:{" "}
          <code>tail -f /var/log/axis_tracker.log</code>
        </p>
      </>
    ),
  },
];

const AxisSpendingSetup = () => {
  return (
    <>
      <Helmet>
        <title>Setup Guide — OpenClaw Spending Agent | Mohd Zain</title>
        <meta
          name="description"
          content="Step-by-step setup guide for the OpenClaw Spending Agent — Himalaya, Gmail IMAP, nginx, cron, and OpenClaw skill registration."
        />
        <meta name="robots" content="noindex,follow" />
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
                { label: "Projects", to: "/projects" },
                {
                  label: " OpenClaw Spending Agent ",
                  to: "/projects/axis-spending-openclaw",
                },
                { label: "Setup Guide" },
              ]}
            />

            <SectionHeader
              as="h1"
              title="Setup Guide"
              subtitle="Everything you need to run this on your own server — from Gmail IMAP and Himalaya to OpenClaw skill registration, nginx dashboards, and cron scheduling."
              className="mb-6"
            />

            {/* Prereqs */}
            <div className="rounded-lg bg-card text-card-foreground border  p-6 mb-6">
              <div className="font-semibold mb-4">
                <Icon
                  name="circle-info"
                  className="size-[1em] text-primary mr-2"
                />
                Prerequisites
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python 3.10+",
                  "Node.js 22+",
                  "npm 10+",
                  "Gmail account with 2FA",
                  "OpenClaw installed",
                  "Server with SSH access",
                ].map((p) => (
                  <span
                    key={p}
                    className="inline-flex items-center rounded-md text-xs font-medium bg-slate-500/10 text-foreground px-4 py-2"
                    style={{ fontSize: "12.5px" }}
                  >
                    <Icon
                      name="check"
                      className="size-[1em] text-green-600 dark:text-green-400 mr-1"
                    />
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="rounded-lg bg-card text-card-foreground border-l border-4 border-amber-400  p-6 mt-4"
              style={{ backgroundColor: "#fffbeb" }}
            >
              <div className="flex items-start gap-4">
                <Icon
                  name="triangle-exclamation"
                  className="size-[1em] text-amber-600 dark:text-amber-400 text-xl mt-1 shrink-0"
                />
                <div>
                  <div
                    className="font-semibold mb-1"
                    style={{ fontSize: "14px" }}
                  >
                    Adapt paths to your own setup
                  </div>
                  <p
                    className="text-muted-foreground mb-2"
                    style={{ fontSize: "13.5px" }}
                  >
                    All commands and config snippets in this guide use the path{" "}
                    <code>/home/zain/zainclaw/axis_spending/</code> as the base
                    directory. Replace this with your own folder wherever it
                    appears — for example:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "/home/zain/zainclaw/axis_spending/data",
                      "/home/zain/zainclaw/axis_spending/dashboard",
                      "/home/zain/zainclaw/axis_spending/.env",
                    ].map((p) => (
                      <code
                        key={p}
                        className="inline-flex items-center rounded-md text-xs font-medium bg-amber-400/25 text-foreground px-2 py-1"
                        style={{ fontSize: "12px" }}
                      >
                        {p}
                      </code>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <hr
              style={{
                margin: "3rem 0 0",
                border: "none",
                height: "2px",
                background:
                  "linear-gradient(to right, transparent, #6c757d 30%, #6c757d 70%, transparent)",
              }}
            />
          </section>

          {/* Steps */}
          <section>
            <div>
              {STEPS.map((step, idx) => (
                <div key={step.num} className="flex gap-6 mb-6">
                  {/* Left: number + line */}
                  <div
                    className="flex flex-col items-center shrink-0"
                    style={{ width: 44 }}
                  >
                    <div
                      className="bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0"
                      style={{ width: 44, height: 44, fontSize: "13px" }}
                    >
                      {step.num}
                    </div>
                    {idx < STEPS.length - 1 && (
                      <div className="border-l border-2 border-primary/25 grow mt-2" />
                    )}
                  </div>

                  {/* Right: content */}
                  <div className="w-full min-w-0 pb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Icon
                        name={step.icon}
                        className="size-[1em] text-primary"
                      />
                      <span
                        className="font-semibold"
                        style={{ fontSize: "15px" }}
                      >
                        {step.title}
                      </span>
                    </div>
                    {step.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Back link */}
            <div className="mt-2">
              <Link
                to="/projects/axis-spending-openclaw"
                className={buttonVariants({ variant: "outline", size: "sm" })}
              >
                <Icon name="arrow-left" className="size-[1em] mr-2" />
                Back to Project
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default AxisSpendingSetup;
