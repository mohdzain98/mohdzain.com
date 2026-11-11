import{l as e,o as t,w as n,y as r}from"./index-D3HnXM9b.js";import{t as i}from"./Breadcrumbs-DQgiwcob.js";import{r as a,t as o}from"./index.esm-GZntbE_w.js";import{t as s}from"./CodeBlock-Bs1xLDsM.js";var c=a(),l=[{num:`01`,icon:`envelope-open-text`,title:`Enable Gmail IMAP & Generate App Password`,content:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`p`,{className:`text-muted-foreground mb-2`,style:{fontSize:`13.5px`},children:`IMAP is enabled by default on Gmail. You only need to generate an App Password.`}),(0,c.jsxs)(`ol`,{className:`text-muted-foreground pl-4 mb-0`,style:{fontSize:`13.5px`},children:[(0,c.jsxs)(`li`,{children:[`Go to `,(0,c.jsx)(`strong`,{children:`myaccount.google.com/security`}),` and enable 2-Step Verification.`]}),(0,c.jsxs)(`li`,{children:[`Go to `,(0,c.jsx)(`strong`,{children:`myaccount.google.com/apppasswords`}),`.`]}),(0,c.jsxs)(`li`,{children:[`Enter app name `,(0,c.jsx)(`code`,{children:`himalaya`}),` and click`,` `,(0,c.jsx)(`strong`,{children:`Create`}),`.`]}),(0,c.jsx)(`li`,{children:`Copy the 16-character password — Google won't show it again.`})]})]})},{num:`02`,icon:`download`,title:`Install Himalaya on the Server`,content:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`p`,{className:`text-muted-foreground mb-2`,style:{fontSize:`13.5px`},children:`SSH into your server and run:`}),(0,c.jsx)(s,{id:`latest-version`,language:`bash`,code:`# Check latest version
curl -s https://api.github.com/repos/pimalaya/himalaya/releases/latest | grep "tag_name"

# Download and install
curl -L "https://github.com/pimalaya/himalaya/releases/download/v1.2.0/himalaya-x86_64-unknown-linux-musl.tar.gz" -o himalaya.tar.gz
tar xzf himalaya.tar.gz
sudo mv himalaya /usr/local/bin/
himalaya --version`})]})},{num:`03`,icon:`gear`,title:`Configure Himalaya`,content:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`p`,{className:`text-muted-foreground mb-2`,style:{fontSize:`13.5px`},children:`Create the config file and paste your Gmail credentials:`}),(0,c.jsx)(s,{id:`latest-version`,language:`bash`,code:`mkdir -p ~/.config/himalaya
nano ~/.config/himalaya/config.toml`}),(0,c.jsx)(s,{id:`latest-version`,language:`bash`,code:`[accounts.axis-inbox]
email = "youremail@gmail.com"
display-name = "Zain"
default = true

backend.type = "imap"
backend.host = "imap.gmail.com"
backend.port = 993
backend.encryption.type = "tls"
backend.login = "youremail@gmail.com"
backend.auth.type = "password"
backend.auth.raw = "abcdefghijklmnop"`}),(0,c.jsxs)(`p`,{className:`text-muted-foreground mb-0`,style:{fontSize:`13px`},children:[`Test with: `,(0,c.jsx)(`code`,{children:`himalaya envelope list`}),`. You should see your inbox emails listed.`]})]})},{num:`04`,icon:`folder-open`,title:`Set Up Project Files`,content:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`p`,{className:`text-muted-foreground mb-2`,style:{fontSize:`13.5px`},children:`Create the directory structure on the server:`}),(0,c.jsx)(s,{id:`setup-dirs`,language:`bash`,code:`mkdir -p /home/zain/zainclaw/axis_spending/data
mkdir -p /home/zain/zainclaw/axis_spending/dashboard`}),(0,c.jsxs)(`p`,{className:`text-muted-foreground mb-1`,style:{fontSize:`13.5px`},children:[`Place these files in `,(0,c.jsx)(`code`,{children:`/home/zain/zainclaw/axis_spending/`}),`:`]}),(0,c.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:[`axis_tracker.py`,`SKILL.md`,`.env`].map(e=>(0,c.jsx)(`code`,{className:`inline-flex items-center rounded-md text-xs font-medium bg-slate-500/10 text-foreground px-2 py-1`,style:{fontSize:`12px`},children:e},e))})]})},{num:`05`,icon:`python`,title:`Install Python Dependencies`,content:(0,c.jsx)(s,{id:`pip-install`,language:`bash`,code:`pip install requests openpyxl --break-system-packages`})},{num:`06`,icon:`file-code`,title:`Create .env File`,content:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(`p`,{className:`text-muted-foreground mb-2`,style:{fontSize:`13.5px`},children:[`Create `,(0,c.jsx)(`code`,{children:`/home/zain/zainclaw/axis_spending/.env`}),`:`]}),(0,c.jsx)(s,{id:`env-file`,language:`bash`,code:`WHATSAPP_NUM=+910000000000
DASHBOARD_URL=https://domain.com/spending
AXIS_SENDER=alerts@axis.bank.in
AXIS_DATA_DIR=/home/zain/zainclaw/axis_spending/data
AXIS_DASHBOARD_DIR=/home/zain/zainclaw/axis_spending/dashboard
AXIS_DB_PATH=/home/zain/zainclaw/axis_spending/data/transactions.db
OPENCLAW_WHATSAPP_ENABLED=true
AXIS_DEFAULT_FETCH_DAYS=7
AXIS_LATEST_DASHBOARD_DAYS=7`})]})},{num:`07`,icon:`robot`,title:`Register Skill with OpenClaw`,content:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`p`,{className:`text-muted-foreground mb-2`,style:{fontSize:`13.5px`},children:`Tell OpenClaw where your custom skills live, then restart the gateway:`}),(0,c.jsx)(s,{id:`openclaw-register`,language:`bash`,code:`openclaw config set skills.load.extraDirs '["/home/zain/zainclaw/axis_spending"]'
openclaw gateway restart
openclaw skills list  # should show: axis-spending`})]})},{num:`08`,icon:`server`,title:`Configure nginx for Dashboard`,content:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`p`,{className:`text-muted-foreground mb-2`,style:{fontSize:`13.5px`},children:`Add a static location for the dashboards before the catch-all proxy block:`}),(0,c.jsx)(s,{id:`nginx-config`,language:`nginx`,code:`server {
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
}`}),(0,c.jsx)(s,{id:`nginx-reload`,language:`bash`,code:`sudo nginx -t && sudo systemctl reload nginx`})]})},{num:`09`,icon:`flask`,title:`Test the Full Script`,content:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s,{id:`test-script`,language:`bash`,code:`python3 /home/zain/zainclaw/axis_spending/axis_tracker.py`}),(0,c.jsx)(`p`,{className:`text-muted-foreground mb-1`,style:{fontSize:`13.5px`},children:`Expected output:`}),(0,c.jsx)(s,{id:`test-output`,language:`bash`,code:`🚀 Axis Spending Tracker — 08 Apr – 15 Apr 2026
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
✅ WhatsApp message sent!`})]})},{num:`10`,icon:`clock`,title:`Set Up the Cron Job`,content:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(`p`,{className:`text-muted-foreground mb-2`,style:{fontSize:`13.5px`},children:`To run every Monday 12:00 AM IST (= 6:30 PM UTC Sunday):`}),(0,c.jsx)(s,{id:`crontab-edit`,language:`bash`,code:`crontab -e`}),(0,c.jsx)(s,{id:`cron-job`,language:`bash`,code:`30 18 * * 0 /usr/bin/python3 /home/zain/zainclaw/axis_spending/axis_tracker.py 7 >> /var/log/axis_tracker.log 2>&1`}),(0,c.jsxs)(`p`,{className:`text-muted-foreground mb-0`,style:{fontSize:`13px`},children:[`View logs after it runs:`,` `,(0,c.jsx)(`code`,{children:`tail -f /var/log/axis_tracker.log`})]})]})}],u=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o,{children:[(0,c.jsx)(`title`,{children:`Setup Guide — OpenClaw Spending Agent | Mohd Zain`}),(0,c.jsx)(`meta`,{name:`description`,content:`Step-by-step setup guide for the OpenClaw Spending Agent — Himalaya, Gmail IMAP, nginx, cron, and OpenClaw skill registration.`}),(0,c.jsx)(`meta`,{name:`robots`,content:`noindex,follow`})]}),(0,c.jsx)(`div`,{style:{backgroundColor:`var(--background)`,minHeight:`100vh`},children:(0,c.jsxs)(`div`,{className:`container mx-auto py-12 px-0 md:px-12 xl:px-12 mt-6`,style:{maxWidth:`1200px`},children:[(0,c.jsxs)(`section`,{children:[(0,c.jsx)(i,{className:`mb-7`,items:[{label:`Home`,to:`/`},{label:`Projects`,to:`/projects`},{label:` OpenClaw Spending Agent `,to:`/projects/axis-spending-openclaw`},{label:`Setup Guide`}]}),(0,c.jsx)(t,{as:`h1`,title:`Setup Guide`,subtitle:`Everything you need to run this on your own server — from Gmail IMAP and Himalaya to OpenClaw skill registration, nginx dashboards, and cron scheduling.`,className:`mb-6`}),(0,c.jsxs)(`div`,{className:`rounded-lg bg-card text-card-foreground border  p-6 mb-6`,children:[(0,c.jsxs)(`div`,{className:`font-semibold mb-4`,children:[(0,c.jsx)(e,{name:`circle-info`,className:`size-[1em] text-primary mr-2`}),`Prerequisites`]}),(0,c.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:[`Python 3.10+`,`Node.js 22+`,`npm 10+`,`Gmail account with 2FA`,`OpenClaw installed`,`Server with SSH access`].map(t=>(0,c.jsxs)(`span`,{className:`inline-flex items-center rounded-md text-xs font-medium bg-slate-500/10 text-foreground px-4 py-2`,style:{fontSize:`12.5px`},children:[(0,c.jsx)(e,{name:`check`,className:`size-[1em] text-green-600 dark:text-green-400 mr-1`}),t]},t))})]}),(0,c.jsx)(`div`,{className:`rounded-lg bg-card text-card-foreground border-l border-4 border-amber-400  p-6 mt-4`,style:{backgroundColor:`#fffbeb`},children:(0,c.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,c.jsx)(e,{name:`triangle-exclamation`,className:`size-[1em] text-amber-600 dark:text-amber-400 text-xl mt-1 shrink-0`}),(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`div`,{className:`font-semibold mb-1`,style:{fontSize:`14px`},children:`Adapt paths to your own setup`}),(0,c.jsxs)(`p`,{className:`text-muted-foreground mb-2`,style:{fontSize:`13.5px`},children:[`All commands and config snippets in this guide use the path`,` `,(0,c.jsx)(`code`,{children:`/home/zain/zainclaw/axis_spending/`}),` as the base directory. Replace this with your own folder wherever it appears — for example:`]}),(0,c.jsx)(`div`,{className:`flex flex-wrap gap-2`,children:[`/home/zain/zainclaw/axis_spending/data`,`/home/zain/zainclaw/axis_spending/dashboard`,`/home/zain/zainclaw/axis_spending/.env`].map(e=>(0,c.jsx)(`code`,{className:`inline-flex items-center rounded-md text-xs font-medium bg-amber-400/25 text-foreground px-2 py-1`,style:{fontSize:`12px`},children:e},e))})]})]})}),(0,c.jsx)(`hr`,{style:{margin:`3rem 0 0`,border:`none`,height:`2px`,background:`linear-gradient(to right, transparent, #6c757d 30%, #6c757d 70%, transparent)`}})]}),(0,c.jsxs)(`section`,{children:[(0,c.jsx)(`div`,{children:l.map((t,n)=>(0,c.jsxs)(`div`,{className:`flex gap-6 mb-6`,children:[(0,c.jsxs)(`div`,{className:`flex flex-col items-center shrink-0`,style:{width:44},children:[(0,c.jsx)(`div`,{className:`bg-primary text-white rounded-full flex items-center justify-center font-bold shrink-0`,style:{width:44,height:44,fontSize:`13px`},children:t.num}),n<l.length-1&&(0,c.jsx)(`div`,{className:`border-l border-2 border-primary/25 grow mt-2`})]}),(0,c.jsxs)(`div`,{className:`w-full min-w-0 pb-6`,children:[(0,c.jsxs)(`div`,{className:`flex items-center gap-2 mb-4`,children:[(0,c.jsx)(e,{name:t.icon,className:`size-[1em] text-primary`}),(0,c.jsx)(`span`,{className:`font-semibold`,style:{fontSize:`15px`},children:t.title})]}),t.content]})]},t.num))}),(0,c.jsx)(`div`,{className:`mt-2`,children:(0,c.jsxs)(n,{to:`/projects/axis-spending-openclaw`,className:r({variant:`outline`,size:`sm`}),children:[(0,c.jsx)(e,{name:`arrow-left`,className:`size-[1em] mr-2`}),`Back to Project`]})})]})]})})]});export{u as default};