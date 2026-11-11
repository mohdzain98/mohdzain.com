import type { Experience } from "@/types";

const exp: Experience[] = [
  // ── FDE & enterprise delivery (latest first) ──────────────────────────
  {
    section: "fde-enterprise",
    type: "FDE · CPG client",
    name: "MRO Inventory Analytics for a CPG Client",
    desc: "Working as a Forward Deployed Engineer on this use case end to end, from development to deployment. SAP extracts are landed in ADLS, inventory metrics are calculated on top of them, and the results are turned into insights and recommendations for the client.",
    pointsTitle: "Metrics computed",
    points: [
      "Slow-moving inventory",
      "Safety stock",
      "Stock above safety stock",
      "Critical parts below safety stock",
      "Reconciliation",
    ],
    techs: ["SAP Extracts", "ADLS", "Azure", "Insights & Recommendations"],
    icon: "gauge",
  },
  {
    section: "fde-enterprise",
    type: "FDE · Power BI",
    name: "Power BI MCP with Fabric IQ",
    desc: "Connected the Power BI MCP server and Fabric IQ, each with its four tools, and compared how both behave against the original PBIX report. A router uses report cards to send every question to the right report, so the assistant answers both Q&A and 'why' questions.",
    pointsTitle: "What was built",
    points: [
      "Power BI MCP and Fabric IQ connected, with their four tools each",
      "Side-by-side comparison of both against the PBIX report",
      "Router that uses report cards to send each query to the correct report",
      "Playbook-driven RCA: a dedicated path and hops for every RCA type to reach the root cause",
    ],
    techs: [
      "Power BI MCP",
      "Fabric IQ",
      "MCP",
      "Report Router",
      "RCA Playbooks",
    ],
    icon: "chart-pie",
  },
  {
    section: "fde-enterprise",
    type: "Model refresh",
    name: "Model Refresh & Validation",
    desc: "Refreshed an existing econometric model for the latest data: rebuilt the inputs, re-estimated the coefficients and validated the refreshed model before it was used.",
    pointsTitle: "What was refreshed",
    points: [
      "New baselines for the latest data",
      "New purchase structure and VTMs",
      "Promo patterns updated across all years",
      "Model coefficients re-estimated and validated",
    ],
    techs: [
      "Baselines",
      "Purchase Structure",
      "VTMs",
      "Promo Patterns",
      "Validation",
    ],
    icon: "sliders",
  },
  {
    section: "fde-enterprise",
    type: "POC · Databricks",
    name: "AI/BI with Genie Agents & Agent Bricks",
    desc: "Connected Genie agents and Agent Bricks to enterprise data to build a tool for sales, forecasting and inventory, developed and deployed end to end on Databricks and Databricks Apps.",
    pointsTitle: "Modules",
    points: [
      "Descriptive analytics",
      "Playbook-driven root-cause analysis (RCA)",
      "Forecasting with MLflow and XGBoost",
      "Dashboard",
    ],
    techs: [
      "Databricks",
      "Genie",
      "Agent Bricks",
      "MLflow",
      "XGBoost",
      "Databricks Apps",
    ],
    icon: "chart-bar",
  },
  {
    section: "fde-enterprise",
    type: "POC · Azure",
    name: "NPD Proxy Costing Agent",
    impact: "~15 weeks → under 2 minutes",
    desc: "Describe a new product in plain English and the agent finds the closest existing product, pulls real cost data for each cost element, and returns a full COGS estimate per finished unit, with a confidence rating and the reason behind every assumption. Built from SAP extracts via Unity Catalog; v1 uses similar-product proxies.",
    pointsTitle: "Modules",
    points: [
      "Reformulation",
      "Descriptive analytics",
      "Scenario analysis",
      "New product development (NPD)",
    ],
    techs: ["SAP Extracts", "Unity Catalog", "Azure App Service", "Agents"],
    icon: "coins",
  },
  {
    section: "fde-enterprise",
    type: "POC · Azure",
    name: "RCA Agent for OTIF",
    desc: "An Azure AI Foundry hosted agent for supply chain root-cause analysis. A user submits an order ID and the agent investigates why it missed its On Time In Full (OTIF) target, then returns a structured report.",
    pointsTitle: "3-phase report",
    points: ["Investigation summary", "RCA findings", "Cost impact"],
    techs: ["Azure AI Foundry", "Hosted Agent", "Supply Chain", "OTIF"],
    icon: "magnifying-glass",
  },

  // ── earlier work ──────────────────────────────────────────────────────
  {
    section: "agentic-ai",
    type: "POC",
    name: "Finance Demo POC (HMDA Agentic AI)",
    desc: "Built an agentic AI system on HMDA data using LangGraph with multi-agent orchestration and a Streamlit UI for decision workflows.",
    techs: ["LangGraph", "LangChain", "Streamlit", "Gemini"],
    icon: "chart-line",
  },
  {
    section: "agentic-ai",
    type: "Architecture",
    name: "A2A-MCP Multi-Agent System",
    desc: "Developed a distributed multi-agent architecture using A2A protocol, MCP communication, and Google ADK enabling cross-domain agent collaboration.",
    techs: ["A2A", "MCP", "LangGraph", "Google ADK"],
    icon: "network-wired",
  },
  {
    section: "agentic-ai",
    type: "Framework",
    name: "LangGraph Multi-Agent Framework",
    desc: "Designed a modular multi-agent architecture with supervisor routing, domain-specific agents, and out-of-domain handling for scalable AI systems.",
    techs: ["LangGraph", "Agent Orchestration", "Routing", "Supervisor"],
    icon: "diagram-project",
  },
  {
    section: "agentic-ai",
    type: "System",
    name: "ReAct-based LLM System",
    desc: "Implemented a ReAct-style agent system with tool usage, memory handling, and structured reasoning workflows for complex query resolution.",
    techs: ["ReAct", "LangChain", "Agents", "Memory"],
    icon: "brain",
  },

  // 🔥 ADVANCED GENAI / RESEARCH WORK (VERY IMPORTANT)

  {
    section: "research-platform",
    type: "Research",
    name: "Neuro-Symbolic AI Exploration",
    desc: "Explored hybrid AI systems combining symbolic reasoning with LLMs to improve interpretability, logical consistency, and decision reliability in agent workflows.",
    techs: ["Neuro-Symbolic AI", "Reasoning", "LLMs"],
    icon: "sitemap",
  },
  {
    section: "research-platform",
    type: "Fine-Tuning",
    name: "LLM Fine-Tuning (LoRA)",
    desc: "Researched and implemented parameter-efficient fine-tuning using LoRA to adapt foundation models for domain-specific tasks with reduced compute cost.",
    techs: ["LoRA", "Fine-Tuning", "Transformers", "PEFT"],
    icon: "sliders",
  },
  {
    section: "research-platform",
    type: "Exploration",
    name: "Azure Content Understanding Exploration",
    desc: "Explored Azure Content Understanding for document intelligence, extracting structured insights from unstructured data for enterprise workflows.",
    techs: [
      "Azure AI",
      "Document Intelligence",
      "OCR",
      "Content Understanding",
    ],
    icon: "file-lines",
  },

  // 🔍 OBSERVABILITY / PLATFORM

  {
    section: "research-platform",
    type: "Observability",
    name: "LLM Evaluation & Observability",
    desc: "Designed LLM tracing, evaluation, and debugging pipelines to monitor agent performance, identify failures, and improve reliability of production AI systems.",
    techs: ["LangSmith", "Arize Phoenix", "LangFuse", "Tracing"],
    icon: "magnifying-glass-chart",
  },

  // 🛡️ PLATFORM / ENGINEERING

  {
    section: "platform-engineering",
    type: "Platform",
    name: "Sigscan (AI Code Review Platform)",
    desc: "Built an AI-assisted code review platform integrating security, quality, duplication, and compliance checks into a unified pre-merge pipeline.",
    techs: [
      "Gitleaks",
      "pylint",
      "radon",
      "semgrep",
      "scancode",
      "mypy",
      "jscpd",
    ],
    icon: "shield-halved",
  },
  {
    section: "platform-engineering",
    type: "CLI",
    name: "Sigscan CLI",
    desc: "Developed a CLI tool for local code analysis with AST-based checks, regex scanning, and structured JSON reporting for pre-commit workflows.",
    techs: ["AST", "Regex", "CLI", "JSON"],
    icon: "terminal",
  },

  // 📊 CORE DATA SCIENCE (CRITICAL FOR YOUR PROFILE)

  {
    section: "econometrics-mlops",
    type: "Optimization",
    name: "Price Optimization (RGM)",
    desc: "Built an econometric pricing system using elasticity modeling, GAM/LOESS smoothing, and constrained global optimization (NLopt) to maximize revenue.",
    techs: ["Econometrics", "Elasticity", "GAM", "NLopt", "Julia"],
    icon: "chart-simple",
  },
  {
    section: "econometrics-mlops",
    type: "Optimization",
    name: "Promotion Optimization Engine",
    desc: "Developed models to estimate promotion tactic and duration elasticity using regression and mixed models to optimize promotional strategy and lift.",
    techs: ["Regression", "Mixed Models", "Optimization", "Pyomo", "Gurobi"],
    icon: "percent",
  },
  {
    section: "econometrics-mlops",
    type: "Framework",
    name: "SAS-style Regression Framework",
    desc: "Implemented a Python-based regression pipeline with backward selection inspired by PROC HPREG for robust feature selection and interpretability.",
    techs: ["Linear Regression", "Feature Selection", "StatsModels"],
    icon: "square-root-variable",
  },

  // ⚙️ MLOPS / PIPELINES

  {
    section: "econometrics-mlops",
    type: "MLOps",
    name: "ML Monitoring & Data Pipelines",
    desc: "Built production ML monitoring pipelines with drift detection, automated retraining triggers, and data refresh workflows.",
    techs: ["MLflow", "Monitoring", "Pipelines", "Drift Detection"],
    icon: "chart-area",
  },

  // 🧠 INTERNAL AGENTIC PRODUCT

  {
    section: "platform-engineering",
    type: "Application",
    name: "Agentic AI Data App",
    desc: "Developed a web application enabling users to upload structured and unstructured data (CSV, Excel, PDF) and interact with LLM-powered agents for analysis.",
    techs: ["Streamlit", "LLM", "RAG", "File Processing"],
    icon: "robot",
  },
];
/** The three latest pieces of work, in short form, for the home page. */
const latestWork: Experience[] = [
  {
    section: "fde-enterprise",
    type: "FDE · CPG client",
    name: "MRO Inventory Analytics",
    desc: "Working as an FDE end to end: SAP extracts land in ADLS, inventory metrics are calculated, and insights and recommendations follow.",
    techs: ["SAP", "ADLS", "Databricks", "Safety Stock", "Reconciliation"],
    icon: "gauge",
  },
  {
    section: "fde-enterprise",
    type: "FDE · Power BI",
    name: "Power BI MCP Assistant",
    desc: "Connected Power BI MCP and Fabric IQ, with a report-card router and playbook-driven RCA for Q&A and 'why' answers.",
    techs: ["Power BI MCP", "Fabric IQ", "LangChain", "Text-to-DAX", "RCA"],
    icon: "chart-pie",
  },
  {
    section: "fde-enterprise",
    type: "Model refresh",
    name: "Model Refresh & Validation",
    desc: "Refreshed the model on new data: new baselines, purchase structure and VTMs, updated promo patterns, and validated coefficients.",
    techs: ["Baselines", "VTMs", "Promo Patterns", "Validation"],
    icon: "sliders",
  },
];

export { exp, latestWork };
