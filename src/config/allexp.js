const exp = [
  {
    section: "agentic-ai",
    type: "POC",
    name: "Finance Demo POC (HMDA Agentic AI)",
    desc: "Built an agentic AI system on HMDA data using LangGraph with multi-agent orchestration and a Streamlit UI for decision workflows.",
    techs: ["LangGraph", "LangChain", "Streamlit", "Gemini"],
    icon: "fa-chart-line",
  },
  {
    section: "agentic-ai",
    type: "Architecture",
    name: "A2A-MCP Multi-Agent System",
    desc: "Developed a distributed multi-agent architecture using A2A protocol, MCP communication, and Google ADK enabling cross-domain agent collaboration.",
    techs: ["A2A", "MCP", "LangGraph", "Google ADK"],
    icon: "fa-network-wired",
  },
  {
    section: "agentic-ai",
    type: "Framework",
    name: "LangGraph Multi-Agent Framework",
    desc: "Designed a modular multi-agent architecture with supervisor routing, domain-specific agents, and out-of-domain handling for scalable AI systems.",
    techs: ["LangGraph", "Agent Orchestration", "Routing", "Supervisor"],
    icon: "fa-diagram-project",
  },
  {
    section: "agentic-ai",
    type: "System",
    name: "ReAct-based LLM System",
    desc: "Implemented a ReAct-style agent system with tool usage, memory handling, and structured reasoning workflows for complex query resolution.",
    techs: ["ReAct", "LangChain", "Agents", "Memory"],
    icon: "fa-brain",
  },

  // 🔥 ADVANCED GENAI / RESEARCH WORK (VERY IMPORTANT)

  {
    section: "research-platform",
    type: "Research",
    name: "Neuro-Symbolic AI Exploration",
    desc: "Explored hybrid AI systems combining symbolic reasoning with LLMs to improve interpretability, logical consistency, and decision reliability in agent workflows.",
    techs: ["Neuro-Symbolic AI", "Reasoning", "LLMs"],
    icon: "fa-sitemap",
  },
  {
    section: "research-platform",
    type: "Fine-Tuning",
    name: "LLM Fine-Tuning (LoRA)",
    desc: "Researched and implemented parameter-efficient fine-tuning using LoRA to adapt foundation models for domain-specific tasks with reduced compute cost.",
    techs: ["LoRA", "Fine-Tuning", "Transformers", "PEFT"],
    icon: "fa-sliders",
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
    icon: "fa-file-lines",
  },

  // 🔍 OBSERVABILITY / PLATFORM

  {
    section: "research-platform",
    type: "Observability",
    name: "LLM Evaluation & Observability",
    desc: "Designed LLM tracing, evaluation, and debugging pipelines to monitor agent performance, identify failures, and improve reliability of production AI systems.",
    techs: ["LangSmith", "Arize Phoenix", "LangFuse", "Tracing"],
    icon: "fa-magnifying-glass-chart",
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
    icon: "fa-shield-halved",
  },
  {
    section: "platform-engineering",
    type: "CLI",
    name: "Sigscan CLI",
    desc: "Developed a CLI tool for local code analysis with AST-based checks, regex scanning, and structured JSON reporting for pre-commit workflows.",
    techs: ["AST", "Regex", "CLI", "JSON"],
    icon: "fa-terminal",
  },

  // 📊 CORE DATA SCIENCE (CRITICAL FOR YOUR PROFILE)

  {
    section: "econometrics-mlops",
    type: "Optimization",
    name: "Price Optimization (RGM)",
    desc: "Built an econometric pricing system using elasticity modeling, GAM/LOESS smoothing, and constrained global optimization (NLopt) to maximize revenue.",
    techs: ["Econometrics", "Elasticity", "GAM", "NLopt", "Julia"],
    icon: "fa-chart-simple",
  },
  {
    section: "econometrics-mlops",
    type: "Optimization",
    name: "Promotion Optimization Engine",
    desc: "Developed models to estimate promotion tactic and duration elasticity using regression and mixed models to optimize promotional strategy and lift.",
    techs: ["Regression", "Mixed Models", "Optimization", "Pyomo", "Gurobi"],
    icon: "fa-percent",
  },
  {
    section: "econometrics-mlops",
    type: "Framework",
    name: "SAS-style Regression Framework",
    desc: "Implemented a Python-based regression pipeline with backward selection inspired by PROC HPREG for robust feature selection and interpretability.",
    techs: ["Linear Regression", "Feature Selection", "StatsModels"],
    icon: "fa-square-root-variable",
  },

  // ⚙️ MLOPS / PIPELINES

  {
    section: "econometrics-mlops",
    type: "MLOps",
    name: "ML Monitoring & Data Pipelines",
    desc: "Built production ML monitoring pipelines with drift detection, automated retraining triggers, and data refresh workflows.",
    techs: ["MLflow", "Monitoring", "Pipelines", "Drift Detection"],
    icon: "fa-chart-area",
  },

  // 🧠 INTERNAL AGENTIC PRODUCT

  {
    section: "platform-engineering",
    type: "Application",
    name: "Agentic AI Data App",
    desc: "Developed a web application enabling users to upload structured and unstructured data (CSV, Excel, PDF) and interact with LLM-powered agents for analysis.",
    techs: ["Streamlit", "LLM", "RAG", "File Processing"],
    icon: "fa-robot",
  },
];
export { exp };
