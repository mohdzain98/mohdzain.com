import{l as e,w as t,x as n,y as r}from"./index-D3HnXM9b.js";import{t as i}from"./Breadcrumbs-DQgiwcob.js";import{_ as a,b as o,r as s,t as c}from"./index.esm-GZntbE_w.js";import{t as l}from"./CodeBlock-Bs1xLDsM.js";/* empty css              */var u=`/assets/arize-phoenix-ui-Btw_3mtj.webp`,d=o(a()),f=s(),p=()=>((0,d.useEffect)(()=>{window.scrollTo(0,0)},[]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(c,{children:[(0,f.jsx)(`title`,{children:`Tracing Agentic LLMs with Arize Phoenix & LangGraph`}),(0,f.jsx)(`meta`,{name:`description`,content:`Learn how to trace agentic LLM workflows locally using Arize Phoenix, OpenTelemetry, and LangGraph with custom agent-level spans.`}),(0,f.jsx)(`meta`,{property:`og:type`,content:`article`}),(0,f.jsx)(`meta`,{property:`og:title`,content:`Tracing Agentic LLMs with Arize Phoenix & LangGraph`}),(0,f.jsx)(`meta`,{property:`og:description`,content:`End-to-end guide to tracing agentic LLM workflows locally using OpenTelemetry, Phoenix, and LangGraph.`}),(0,f.jsx)(`meta`,{property:`og:url`,content:`https://mohdzain.com/blogs/tracing-agentic-llm-workflows-arize-phoenix-langgraph`}),(0,f.jsx)(`meta`,{name:`twitter:card`,content:`summary_large_image`}),(0,f.jsx)(`meta`,{name:`twitter:title`,content:`Tracing Agentic LLMs with Arize Phoenix & LangGraph`}),(0,f.jsx)(`meta`,{name:`twitter:description`,content:`Visualize, debug, and understand agentic LLM workflows using Phoenix and OpenTelemetry.`}),(0,f.jsx)(`meta`,{name:`robots`,content:`index, follow`}),(0,f.jsx)(`script`,{type:`application/ld+json`,children:JSON.stringify({"@context":`https://schema.org`,"@type":`BlogPosting`,headline:`Tracing Agentic LLM Workflows Locally Using Arize Phoenix and LangGraph`,description:`Learn how to trace agentic LLM workflows locally using Arize Phoenix, OpenTelemetry, and LangGraph with custom agent-level spans.`,author:{"@type":`Person`,name:`Mohd Zain`,url:`https://mohdzain.com`},publisher:{"@type":`Person`,name:`Mohd Zain`},datePublished:`2026-01-10`,dateModified:`2026-01-10`,mainEntityOfPage:{"@type":`WebPage`,"@id":`https://mohdzain.com/blogs/tracing-agentic-llm-workflows-arize-phoenix-langgraph`}})})]}),(0,f.jsxs)(`main`,{className:`mx-auto w-full px-6 pt-16 pb-12 md:px-12 xl:px-0`,style:{maxWidth:`900px`},children:[(0,f.jsx)(`div`,{className:`mt-2 mb-6`,children:(0,f.jsx)(i,{items:[{label:`Home`,to:`/`},{label:`Blogs`,to:`/blogs`},{label:`Tracing Agentic LLMs`}]})}),(0,f.jsxs)(`header`,{className:`mb-6`,children:[(0,f.jsx)(`h1`,{className:`text-[1.75rem] font-bold`,children:`Tracing Agentic LLM Workflows Locally Using Arize Phoenix and LangGraph`}),(0,f.jsxs)(`p`,{className:`text-muted-foreground mb-0`,children:[(0,f.jsx)(e,{name:`calendar`,className:`size-[1em] mr-2`}),`Jan 10, 2026 · 12 min read`]})]}),(0,f.jsxs)(`p`,{className:`text-muted-foreground`,style:{fontSize:`18px`},children:[`Modern LLM applications are no longer single prompt–response calls. They are agentic systems—multiple nodes, tools, supervisors, retries, and branching logic. Debugging these systems without observability is like debugging distributed systems without logs. `,(0,f.jsx)(`br`,{}),`In this post, I’ll show how I traced a `,(0,f.jsx)(`strong`,{children:`LangGraph`}),` `,`based agent system locally using `,(0,f.jsx)(`strong`,{children:`Arize Phoenix`}),`, powered by`,(0,f.jsx)(`strong`,{children:` OpenTelemetry`}),`, and how I wrapped custom agent spans to get meaningful insights beyond default LLM traces.`]}),(0,f.jsx)(`hr`,{}),(0,f.jsx)(`h4`,{className:`mt-6 font-extrabold`,children:`What Is LLM Tracing and Why It Matters for Agentic Systems`}),(0,f.jsx)(`p`,{style:{fontSize:`17px`},children:`LLM tracing provides a structured, visual view of how requests move through an application. In agentic systems, this means understanding which agent ran, what decisions were made, and how LLM calls were chained together.`}),(0,f.jsx)(`h4`,{className:`mt-6`,children:`Challenges of Debugging Agent-Based LLM Applications`}),(0,f.jsxs)(`ul`,{className:`mb-4`,style:{fontSize:`17px`},children:[(0,f.jsx)(`li`,{children:`Hidden routing decisions`}),(0,f.jsx)(`li`,{children:`Token usage spread across agents`}),(0,f.jsx)(`li`,{children:`Silent failures without exceptions`}),(0,f.jsx)(`li`,{children:`Unclear execution order`})]}),(0,f.jsx)(`h4`,{className:`mt-6`,children:`Why OpenTelemetry Is the Right Choice for LLM Observability`}),(0,f.jsx)(`p`,{style:{fontSize:`17px`},children:`OpenTelemetry is an industry standard for distributed tracing. Agentic LLM systems behave like distributed systems, making OpenTelemetry a natural fit for observability.`}),(0,f.jsx)(`h4`,{children:`Architectural Overview`}),(0,f.jsx)(l,{id:`architecture-overview`,language:`less`,code:`LangGraph Nodes
      ↓ 
Custom Agent Decorator (@traced_agent) 
      ↓
OpenTelemetry Tracer 
      ↓ 
Phoenix OTLP HTTP Collector (localhost) 
      ↓
Phoenix UI (Trace Graph + Span Details)`}),(0,f.jsx)(`h4`,{children:`Installations for Arize Phoenix`}),(0,f.jsx)(l,{id:`phoenix-install`,language:`bash`,code:`pip install 
arize-phoenix 
opentelemetry-sdk>=1.27.0
opentelemetry-exporter-otlp>=1.27.0
arize
arize-otel
openinference-instrumentation-langchain
openevals`}),(0,f.jsx)(`h4`,{className:`mt-6`,children:`Running Arize Phoenix Locally for LLM Tracing`}),(0,f.jsx)(`p`,{children:`Phoenix can run entirely on your local machine and exposes a standard OTLP endpoint that OpenTelemetry exporters can send traces to.`}),(0,f.jsx)(l,{id:`phoenix-serve`,language:`bash`,code:`phoenix serve`}),(0,f.jsx)(`h4`,{className:`mt-6 font-extrabold mb-4`,children:`OpenTelemetry + Phoenix Tracing Setup`}),(0,f.jsx)(`p`,{style:{fontSize:`17px`},children:`Initializes an OpenTelemetry tracer provider, configures an OTLP exporter pointing to the local Phoenix server, and enables automatic LangChain instrumentation to capture LLM and tool spans.`}),(0,f.jsx)(l,{id:`setup-tracing`,language:`python`,code:`def setup_tracing():
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

  return trace.get_tracer("agents")`}),(0,f.jsx)(`h4`,{className:`mt-6 font-extrabold`,children:`Agent-Level Tracing Decorator`}),(0,f.jsx)(`p`,{style:{fontSize:`17px`},children:`Wraps each LangGraph node with a custom OpenTelemetry span, allowing agent-level visibility into execution flow, routing decisions, and token usage without modifying business logic.`}),(0,f.jsx)(l,{id:`traced-agent`,language:`python`,code:`def traced_agent(name: str):
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

  return deco`}),(0,f.jsx)(`h4`,{className:`mt-6 font-extrabold`,children:`Using Tracing in LangGraph Nodes`}),(0,f.jsx)(`p`,{style:{fontSize:`17px`},children:`Demonstrates how the tracing setup and agent decorator are applied directly to LangGraph nodes, ensuring each agent execution is captured as a first-class trace span.`}),(0,f.jsx)(`p`,{children:`Suppose you have agents and langGraph node as: `}),(0,f.jsx)(l,{id:`graph-usage`,language:`python`,code:`from observability.tracing import setup_tracing, traced_agent

TRACER = setup_tracing()

graph.add_node(
    "BI Agent",
    traced_agent("BI Agent")(bi_agent_node),
)`}),(0,f.jsx)(`h4`,{className:`mt-6 font-extrabold`,children:`Viewing Traces in Phoenix UI`}),(0,f.jsxs)(`p`,{style:{fontSize:`17px`},children:[`Once the agentic workflow runs, navigate to the Phoenix UI at`,` `,(0,f.jsx)(`code`,{children:`http://localhost:6006`}),` to visualize the traces. You’ll see a hierarchical trace graph showing agent spans, LLM calls, tool invocations, and custom attributes like token usage and routing decisions.`]}),(0,f.jsx)(t,{to:`/blogs/tracing-agentic-llm-workflows-arize-phoenix-langgraph/example`,className:n(r({variant:`outline`,size:`default`}),`text-primary border-primary mt-6`),children:`View Minimal Working Example →`}),(0,f.jsx)(`h4`,{className:`mt-6 font-extrabold`,children:`How it looks in the UI`}),(0,f.jsx)(`img`,{src:u,alt:`Arize Phoenix LLM Tracing UI`,className:`max-w-full h-auto rounded-md border mt-4`}),(0,f.jsx)(`hr`,{className:`mt-12`}),(0,f.jsxs)(`footer`,{className:`mt-6 mb-12`,children:[(0,f.jsxs)(`div`,{className:`mb-4`,children:[(0,f.jsx)(`p`,{className:`font-bold mb-1`,children:`Written by Mohd Zain`}),(0,f.jsx)(`p`,{className:`text-muted-foreground mb-0`,children:`Data Science | LLM Systems | Agentic AI | FDE`})]}),(0,f.jsxs)(`div`,{className:`mb-6`,children:[(0,f.jsx)(`h6`,{className:`font-extrabold`,children:`Related posts`}),(0,f.jsxs)(`ul`,{className:`list-none p-0`,children:[(0,f.jsx)(`li`,{children:(0,f.jsx)(t,{to:`/blogs/color-images-cryptosystem`,className:`no-underline`,children:`→ A DNA Based Color Image Cryptosystem Using Chaotic Maps`})}),(0,f.jsx)(`li`,{children:(0,f.jsx)(t,{to:`/blogs`,className:`no-underline`,children:`→ All blog posts`})})]})]}),(0,f.jsxs)(`div`,{className:`mb-6`,children:[(0,f.jsx)(`h6`,{className:`font-extrabold`,children:`Related Content`}),(0,f.jsxs)(`ul`,{className:`list-none p-0`,children:[(0,f.jsx)(`li`,{children:(0,f.jsx)(`a`,{href:`https://arize.com/docs/phoenix`,className:`no-underline`,target:`_blank`,rel:`noreferrer`,children:`→ Arize Phoenix Documentation`})}),(0,f.jsx)(`li`,{children:(0,f.jsxs)(`a`,{href:`https://opentelemetry.io/docs/`,className:`no-underline`,target:`_blank`,rel:`noreferrer`,children:[` `,`→ OpenTelemetry Documentation`]})})]})]}),(0,f.jsxs)(`div`,{className:`mb-6`,children:[(0,f.jsx)(`p`,{className:`text-muted-foreground mb-1`,children:`Found this useful or have questions?`}),(0,f.jsx)(`a`,{href:`mailto:zainmohd1998@gmail.com`,className:`no-underline`,children:`Reach out via email`})]}),(0,f.jsx)(`div`,{children:(0,f.jsx)(`p`,{className:`text-muted-foreground text-sm mb-0`,children:`Last updated: January 2026 · Tags: LLM Tracing, OpenTelemetry, LangGraph`})})]})]})]}));export{p as default};