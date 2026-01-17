import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import CodeBlock from "../../../components/layout/CodeBlock";
import "../styling/blogs.css";

const LLMTracing = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline:
      "Tracing Agentic LLM Workflows Locally Using Arize Phoenix and LangGraph",
    description:
      "Learn how to trace agentic LLM workflows locally using Arize Phoenix, OpenTelemetry, and LangGraph with custom agent-level spans.",
    author: {
      "@type": "Person",
      name: "Mohd Zain",
      url: "https://mohdzain.com",
    },
    publisher: {
      "@type": "Person",
      name: "Mohd Zain",
    },
    datePublished: "2026-01-10",
    dateModified: "2026-01-10",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://mohdzain.com/blogs/tracing-agentic-llm-workflows-arize-phoenix-langgraph",
    },
  };

  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Tracing Agentic LLMs with Arize Phoenix & LangGraph</title>
        <meta
          name="description"
          content="Learn how to trace agentic LLM workflows locally using Arize Phoenix, OpenTelemetry, and LangGraph with custom agent-level spans."
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Tracing Agentic LLMs with Arize Phoenix & LangGraph"
        />
        <meta
          property="og:description"
          content="End-to-end guide to tracing agentic LLM workflows locally using OpenTelemetry, Phoenix, and LangGraph."
        />
        <meta
          property="og:url"
          content="https://mohdzain.com/blogs/tracing-agentic-llm-workflows-arize-phoenix-langgraph"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Tracing Agentic LLMs with Arize Phoenix & LangGraph"
        />
        <meta
          name="twitter:description"
          content="Visualize, debug, and understand agentic LLM workflows using Phoenix and OpenTelemetry."
        />
        <meta name="robots" content="index, follow" />
        {/* Schema */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <main
        className={`container pt-5 pb-4 ${isTabletOrMobile ? "px-4" : "px-0"}`}
        style={{
          maxWidth: isTabletOrMobile ? "100%" : "900px",
          marginTop: isTabletOrMobile ? "0px" : "30px",
        }}
      >
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
                Tracing Agentic LLMs
              </li>
            </ol>
          </nav>
        </div>
        <header className="mb-4">
          <h3 className="fw-bold">
            Tracing Agentic LLM Workflows Locally Using Arize Phoenix and
            LangGraph
          </h3>
          <p className="text-muted mb-0">
            <i className="fa-regular fa-calendar me-2"></i>Jan 10, 2026 · 12 min
            read
          </p>
        </header>

        <p className="text-muted" style={{ fontSize: "18px" }}>
          Modern LLM applications are no longer single prompt–response calls.
          They are agentic systems—multiple nodes, tools, supervisors, retries,
          and branching logic. Debugging these systems without observability is
          like debugging distributed systems without logs. <br />
          In this post, I’ll show how I traced a <strong>LangGraph</strong>{" "}
          based agent system locally using <strong>Arize Phoenix</strong>,
          powered by
          <strong> OpenTelemetry</strong>, and how I wrapped custom agent spans
          to get meaningful insights beyond default LLM traces.
        </p>

        {/* h4 */}
        <hr />
        <h4 className="mt-4 fw-bolder">
          What Is LLM Tracing and Why It Matters for Agentic Systems
        </h4>
        <p style={{ fontSize: "17px" }}>
          LLM tracing provides a structured, visual view of how requests move
          through an application. In agentic systems, this means understanding
          which agent ran, what decisions were made, and how LLM calls were
          chained together.
        </p>

        <h4 className="mt-4">
          Challenges of Debugging Agent-Based LLM Applications
        </h4>
        <ul className="mb-3" style={{ fontSize: "17px" }}>
          <li>Hidden routing decisions</li>
          <li>Token usage spread across agents</li>
          <li>Silent failures without exceptions</li>
          <li>Unclear execution order</li>
        </ul>

        <h4 className="mt-4">
          Why OpenTelemetry Is the Right Choice for LLM Observability
        </h4>
        <p style={{ fontSize: "17px" }}>
          OpenTelemetry is an industry standard for distributed tracing. Agentic
          LLM systems behave like distributed systems, making OpenTelemetry a
          natural fit for observability.
        </p>

        <h4>Architectural Overview</h4>
        <CodeBlock
          id="architecture-overview"
          language="less"
          code={`LangGraph Nodes
      ↓ 
Custom Agent Decorator (@traced_agent) 
      ↓
OpenTelemetry Tracer 
      ↓ 
Phoenix OTLP HTTP Collector (localhost) 
      ↓
Phoenix UI (Trace Graph + Span Details)`}
        />

        <h4>Installations for Arize Phoenix</h4>
        <CodeBlock
          id="phoenix-install"
          language="bash"
          code={`pip install 
arize-phoenix 
opentelemetry-sdk>=1.27.0
opentelemetry-exporter-otlp>=1.27.0
arize
arize-otel
openinference-instrumentation-langchain
openevals`}
        />

        <h4 className="mt-4">Running Arize Phoenix Locally for LLM Tracing</h4>
        <p>
          Phoenix can run entirely on your local machine and exposes a standard
          OTLP endpoint that OpenTelemetry exporters can send traces to.
        </p>

        <CodeBlock id="phoenix-serve" language="bash" code="phoenix serve" />

        <h4 className="mt-4 fw-bolder mb-3">
          OpenTelemetry + Phoenix Tracing Setup
        </h4>
        <p style={{ fontSize: "17px" }}>
          Initializes an OpenTelemetry tracer provider, configures an OTLP
          exporter pointing to the local Phoenix server, and enables automatic
          LangChain instrumentation to capture LLM and tool spans.
        </p>
        <CodeBlock
          id="setup-tracing"
          language="python"
          code={`def setup_tracing():
  provider = TracerProvider(
      resource=Resource.create(
          {
              "service.name": os.getenv("OTEL_SERVICE_NAME", "agentic-orchestrator"),
              "service.version": os.getenv("APP_VERSION", "0.0.1"),
              "deployment.environment": os.getenv("APP_ENV", "dev"),
          }
      ),
      sampler=ParentBased(ALWAYS_ON),
  )

  provider.add_span_processor(
      BatchSpanProcessor(
          OTLPSpanExporter(
              endpoint="http://127.0.0.1:6006/v1/traces"
          )
      )
  )

  trace.set_tracer_provider(provider)

  # Auto-instrument LangChain (LLM + tool spans)
  LangChainInstrumentor().instrument()

  return trace.get_tracer("agents")`}
        />
        <h4 className="mt-4 fw-bolder">Agent-Level Tracing Decorator</h4>
        <p style={{ fontSize: "17px" }}>
          Wraps each LangGraph node with a custom OpenTelemetry span, allowing
          agent-level visibility into execution flow, routing decisions, and
          token usage without modifying business logic.
        </p>
        <CodeBlock
          id="traced-agent"
          language="python"
          code={`def traced_agent(name: str):
  if not (cfg.tracing and cfg.backend in ("arize", "arize-phoenix", "both")):
      def deco(fn):
          return fn
      return deco

  def deco(fn):
      @wraps(fn)
      def wrapper(*args, **kwargs):
          print(colored(f"[TRACE] starting agent span → {name}", "cyan"))

          state_dict, _ = _extract_state_from_args_kwargs(args, kwargs)

          with TRACER.start_as_current_span(f"agent:{name}") as span:
              if OI_KIND_KEY:
                  _safe_attr(span, OI_KIND_KEY, "CHAIN")

              _safe_attr(span, "agent.name", name)

              out = fn(*args, **kwargs)

              out_dict = _to_dict(out)
              merged = {**state_dict, **out_dict}

              usage = merged.get("usage") or merged.get("usage_metadata") or {}
              total_tokens = (
                  usage.get("total_tokens")
                  or usage.get("total_token_count")
                  or getattr(usage, "total_token_count", None)
              )

              _safe_attr(span, "agent.tokens_total", total_tokens)
              _safe_attr(span, "agent.stop_reason", merged.get("stop_reason"))
              _safe_attr(span, "agent.route", merged.get("route"))

              return out

      return wrapper

  return deco`}
        />
        <h4 className="mt-4 fw-bolder">Using Tracing in LangGraph Nodes</h4>
        <p style={{ fontSize: "17px" }}>
          Demonstrates how the tracing setup and agent decorator are applied
          directly to LangGraph nodes, ensuring each agent execution is captured
          as a first-class trace span.
        </p>
        <p>Suppose you have agents and langGraph node as: </p>

        <CodeBlock
          id="graph-usage"
          language="python"
          code={`from observability.tracing import setup_tracing, traced_agent

TRACER = setup_tracing()

graph.add_node(
    "BI Agent",
    traced_agent("BI Agent")(bi_agent_node),
)`}
        />

        <h4 className="mt-4 fw-bolder">Viewing Traces in Phoenix UI</h4>
        <p style={{ fontSize: "17px" }}>
          Once the agentic workflow runs, navigate to the Phoenix UI at{" "}
          <code>http://localhost:6006</code> to visualize the traces. You’ll see
          a hierarchical trace graph showing agent spans, LLM calls, tool
          invocations, and custom attributes like token usage and routing
          decisions.
        </p>
        <Link
          to="/blogs/tracing-agentic-llm-workflows-arize-phoenix-langgraph/example"
          className="btn btn-outline-primary mt-4"
        >
          View Minimal Working Example →
        </Link>

        <h4 className="mt-4 fw-bolder">How it looks in the UI</h4>
        <img
          src={require("../../../Assets/blogs/llm-tracing/arize-phoenix-ui.png")}
          alt="Arize Phoenix LLM Tracing UI"
          className="img-fluid rounded border mt-3"
        />

        <hr className="mt-5" />

        <footer className="mt-4 mb-5">
          {/* Author */}
          <div className="mb-3">
            <p className="fw-bold mb-1">Written by Mohd Zain</p>
            <p className="text-muted mb-0">
              Data Science | LLM Systems | Agentic AI | RGMx
            </p>
          </div>

          {/* Related posts */}
          <div className="mb-4">
            <h6 className="fw-bolder">Related posts</h6>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="/blogs/color-images-cryptosystem"
                  className="text-decoration-none"
                >
                  → A DNA Based Color Image Cryptosystem Using Chaotic Maps
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
            <h6 className="fw-bolder">Related Content</h6>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://arize.com/docs/phoenix"
                  className="text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  → Arize Phoenix Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://opentelemetry.io/docs/"
                  className="text-decoration-none"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  → OpenTelemetry Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Feedback */}
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

          {/* Meta */}
          <div>
            <p className="text-muted small mb-0">
              Last updated: January 2026 · Tags: LLM Tracing, OpenTelemetry,
              LangGraph
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default LLMTracing;
