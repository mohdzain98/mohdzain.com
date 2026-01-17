import CimagesCrypt from "./cryptosystem/CimagesCrypt";
import LLMTracing from "./tracing/LLMTracing";
import TracingExample from "./tracing/TracingExample";

export const blogRegistry = {
  "tracing-agentic-llm-workflows-arize-phoenix-langgraph": {
    component: LLMTracing,
    example: TracingExample,
    title: "Tracing Agentic LLM Workflows Using Arize Phoenix and LangGraph",
    description:
      "A practical guide to tracing agentic LLM workflows locally with Arize Phoenix, OpenTelemetry, and LangGraph.",
    excerpt: [
      "Learn how to instrument agentic workflows, collect traces, and debug multi-step LLM reasoning with Phoenix.",
      "Includes OpenTelemetry setup, custom spans, and visualizing traces for agent execution.",
    ],
    readTime: "12 min read",
    date: "Jan 2026",
    category: ["Large Language Models", "Web Development"],
    tags: ["LLM Tracing", "Observability", "LangGraph"],
  },
  "color-images-cryptosystem": {
    component: CimagesCrypt,
    example: null,
    title: "A DNA Based Color Image Cryptosystem Using Chaotic Maps",
    description:
      "A detailed walkthrough of a DNA-based color image cryptosystem using chaotic maps and security analysis.",
    excerpt: [
      "DNA based color images refer to the encoding of the color images into DNA sequences called as DNA computing.",
      "By encoding information into DNA strands, scientists can create vast amounts of data storage in a space smaller than a single grain of sand.",
      "A research-driven breakdown of DNA-based image encryption, covering encoding, chaotic maps, and performance metrics.",
    ],
    readTime: "40 min read",
    date: "Oct 2025",
    category: ["Machine Learning", "Cryptography"],
    tags: ["Image Encryption", "DNA"],
    externalLink: "https://www.nature.com/articles/s41598-025-04021-4",
  },
};
