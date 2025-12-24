const exp = [
  {
    name: "Finance Demo POC",
    desc: "An Agentic AI system on the HMDA dataset using a multi-agent architecture comprising a BI Agent, Fair Lending Compliance Agent, and Risk Evaluation Agent; designed a LangGraph-based Supervisor to coordinate agent interactions effectively. Streamlit was used as an user interface",
    techs: ["LangGraph", "LangChain"],
    icon: "fa-chart-line",
  },
  {
    name: "A2A-MCP POC",
    desc: "Multi-agent system built on the Agent-to-Agent (A2A) protocol, Google’s Agent Development Kit (ADK), and LangGraph. It contains three domain agents: Airbnb lookup, weather forecast, and general internet search. Each agent exposes an A2A-compliant server and communicates through MCP (Model Context Protocol) toolchains",
    techs: ["A2A", "MCP", "LangGraph"],
    icon: "fa-network-wired",
  },
  {
    name: "Sigscan",
    desc: "A modern code review tool designed for AI-assisted development. Integrates multiple security, quality, compliance, and maintainability analyzers into a unified pipeline for pre-merge code validation.",
    techs: [
      "Gitleaks",
      "pylint",
      "radon",
      "semgrep",
      "scancode",
      "mypy",
      "jscpd",
      "AST",
      "regex",
    ],
    icon: "fa-shield-halved",
  },
  {
    name: "Sigscan CLI",
    desc: "Code can be analyzed by uploading a ZIP file through the web interface or, when uploads are restricted, via a CLI that scans locally and outputs a JSON report viewable in the platform.",
    techs: ["sigscan all", "cli"],
    icon: "fa-terminal",
  },
];

export { exp };
