import { Helmet } from "react-helmet-async";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import CodeBlock from "../../../components/layout/CodeBlock";
import "../styling/blogs.css";

const TracingExample = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <>
      <Helmet>
        <title>Minimal LangGraph Tracing Example</title>
        <meta
          name="description"
          content="Minimal working example of LangGraph agent tracing using OpenTelemetry and Arize Phoenix."
        />
        <meta name="robots" content="noindex" />
      </Helmet>

      <main
        className={`container py-5 ${isTabletOrMobile ? "px-4" : "px-0"}`}
        style={{
          maxWidth: isTabletOrMobile ? "100%" : "900px",
          marginTop: isTabletOrMobile ? "0px" : "10px",
        }}
      >
        <div className="mb-4">
          <nav aria-label="breadcrumb" className="stbd">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="breadcrumb-item">
                <Link to="/blogs/tracing-agentic-llm-workflows-arize-phoenix-langgraph">
                  Tracing Agentic LLMs
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Example
              </li>
            </ol>
          </nav>
        </div>

        <header className="mb-3">
          <h1 className="fw-bolder">Minimal LangGraph Tracing Example</h1>

          <p className="text-muted">
            This page shows a stripped-down example of agent tracing using only
            a Supervisor and a BI Agent. The code mirrors the setup used in the
            main blog post.
          </p>
        </header>
        <hr />
        {/* agents.py */}
        <h4 className="mt-4 fw-bolder text-secondary">agents.py</h4>
        <p className="text-muted">
          Defines the BI agent logic as simple callable units without any
          tracing concerns.
        </p>
        <CodeBlock
          id="agents-py"
          language="python"
          code={`class BI_Agent:
    def __init__(
        self, llm, tools, dataset, data_description, data_sample, helper_functions=None
    ):
        """
        Initialize the Agent.

        Args:
            llm: The language model instance (e.g., ChatGoogleGenerativeAI).
            agent_name (str): The name of the agent (e.g., "BI Agent").
            tools (list): Tools available to the agent.
            dataset (pd.DataFrame): Data the agent will work with.
            helper_functions (dict): Optional dictionary of helper functions.
        """
        self.prompt_s = Utility.load_prompts()
        self.llm = llm
        # self.agent_name = agent_name
        self.tools = tools
        self.dataset = dataset
        self.helper_functions = helper_functions or {}
        self.prompt = self.prompt_s["prompts"]["BI_Agent"]
        self.data_description = data_description
        self.data_sample = data_sample

    def add_helper_function(self, name, func):
        """
        Add a helper function to the agent.

        Args:
            name (str): Function name.
            func (callable): Function implementation.
        """
        self.helper_functions[name] = func

    def format_messages(self, messages):
        return "".join(f"{m.type}: {m.content}" for m in messages)

    def run(self, question, history=""):
        """
        Run the prompt and get LLM response.

        Args:
            question (str): User question.

        Returns:
            LLM output object.
        """
        prompt_template = ChatPromptTemplate.from_messages(
            [
                ("system", self.prompt.strip()),
                MessagesPlaceholder(variable_name="messages"),
            ]
        )

        return self.llm.invoke(
            prompt_template.invoke(
                {
                    "data_description": self.data_description,
                    "data_sample": self.data_sample,
                    "question": question,
                    "messages": [HumanMessage(content=question)],
                    "conversation_history": self.format_messages(history),
                }
            )
        )

    def generate_response(self, question, history="", formatting=True):
        """
        Generate a final response from the agent.

        Args:
            question (str): The user input.

        Returns:
            str or dict: Output from helper function (e.g., executed analysis).
        """
        logger.info("Generating response for question: %s", question)
        llm_response = self.run(question, history)
        response = self.helper_functions["execute_analysis"].invoke(
            {"df": self.dataset, "response_text": llm_response.content}
        )
        if (
            not response.get("error")
            and response.get("answer", "").strip()
            and formatting == True
        ):
            logger.info("formatting")
            formatting_prompt = self.prompt_s["prompts"]["Formatting_Prompt"]

            formatted_answer, table = Formatting.format_response(
                prompt=formatting_prompt,
                answer=response.get("answer", ""),
                llm=self.llm,
                table=response.get("table", ""),
            )

            # Update answer only if formatting returned something
            response["answer"] = (
                formatted_answer.strip()
                if formatted_answer.strip()
                else response["answer"]
            )
            if isinstance(table, pd.DataFrame) and not table.empty:
                print(colored("formatter returned table", "light_yellow"))
                response["table"] = table

        return response

    def __repr__(self):
        """
        String representation of the agent.
        """
        return (
            f"Agent(name={self.agent_name}, "
            f"tools={[tool.name for tool in self.tools]}, "
            f"dataset_shape={self.dataset.shape})"
        )`}
        />
        <h4 className="mt-5 fw-bolder">graph.py - graph class</h4>
        <p className="text-muted">
          Builds a minimal LangGraph with tracing enabled, showing how agent
          functions are wrapped using the traced_agent decorator.
        </p>
        <CodeBlock
          id="graph-py"
          language="python"
          code={`from src.agents import BI_Agent
from observability.tracing import setup_tracing, traced_agent

TRACER = setup_tracing()

class Graph:
    def __init__(self):
        self.data = None
        self.data_description = None
        self.data_sample = None
    
    def agent_node(self, state: AgentState, agent_func, name: str):
        response, message = agent_func(state)
        return {
            "messages": state["messages"] + message,
            "next": "supervisor",
            "agent_response": response,
            "thread_id": state["thread_id"],
        }

    def bi_agent(self, state: AgentState):
        llm = Utility.llm()
        BIAgent = BI_Agent(
            llm=llm,
            # prompt=bi_agent_prompt,
            tools=[],
            data_description=self.data_description,
            data_sample=self.data_sample,
            dataset=self.data,
            helper_functions={"execute_analysis": execute_analysis},
        )
        question = next(
            (
                m.content
                for m in reversed(state["messages"])
                if isinstance(m, HumanMessage)
            ),
            "",
        )
        history = state["messages"]
        max_retries = max_retry["llm"]["max_retry"]
        retry_no = 0
        logger.info(colored(f"inside bi_agent,{retry_no, max_retries}", "yellow"))
        response = BIAgent.generate_response(question, history=history, formatting=True)
        while retry_no < max_retries:
            # Check if both are generated
            answer = response.get("answer", "").strip()
            res_error = response.get("error")
            if len(answer) == 0:
                res_error = True
            logger.info(
                colored(
                    f"Retry Count : {retry_no} and success {res_error} and answer {answer!=''}",
                    "red",
                )
            )

            if not res_error:
                break
            retry_no += 1
            response = BIAgent.generate_response(question, history=history)
            logger.info(f"{retry_no}, Error: {response.get('error')}")

        answer = response.get("answer", "").strip()
        res_error = response.get("error")
        if len(answer) == 0:
            res_error = True
        if retry_no == max_retries and res_error:
            logger.warning(
                colored("⚠️ All retries failed. Attempting recovery...", "light_blue")
            )

            # Step 1: Ask LLM to reword the original query
            reword_prompt = f"""
                The following user query repeatedly failed to generate a valid response: "{question}"
                can you use some context to reword the user query with same meaning and context to be asked to LLM
                Do not add any other word, just return the query as it will be passed to other LLM.
                """
            reworded_question = llm.invoke(reword_prompt).content.strip()

            logger.info(colored("🔄 Reworded query:", "yellow"), reworded_question)
            response = BIAgent.generate_response(
                reworded_question, history=history, formatting=True
            )

            # Helper.display_saved_plot(response["figure"])
        if "table" in response and isinstance(response["table"], pd.DataFrame):
            logger.info(colored("table found", "cyan"))
            response["table"] = response["table"].to_dict()

        approach = response.get("approach") or "[No approach provided]"
        answer = response.get("answer") or "[No answer returned]"

        message = approach + "Solution we got from this approach is:" + answer
        return response, [HumanMessage(content=message)]

    def build(
        self,
    ):
        bi_agent_node = functools.partial(
            self.agent_node, agent_func=self.bi_agent, name="BI Agent"
        )

        graph = StateGraph(AgentState)

        graph.add_node(
            "BI Agent",
            (traced_agent("BI Agent")(bi_agent_node),
        )

        graph.add_edge("BI Agent", "supervisor")
        graph.add_conditional_edges(
            "supervisor",
            lambda state: state["next"],
            {
                "BI Agent": "BI Agent",
                "your other agent": "your other agent",
                "FINISH": "FINISH",
            },
        )
        return graph
            `}
        />
        <h4 className="mt-5 fw-bolder">graph.py - App class</h4>
        <p className="text-muted">
          This is the app class which is the entry point to the langgraph root
          node
        </p>
        <CodeBlock
          id="graph-app-py"
          language="python"
          code={`class Graph:
    ...
    def app(
        self,
    ):
        logger.info("creating graph")
        data_loader = DataLoader()
        self.data = data_loader.data
        data_dictionary = data_loader.format_schema_from_excel(
            data_loader.data_description
        )
        self.data_description = data_dictionary
        self.data_sample = data_loader.data_sample
        
        # Build and compile the graph
        graph = self.build()
        app = graph.compile(checkpointer=memory)
        
        return app`}
        />
        <h4 className="mt-4 fw-bolder">Running the app from the main </h4>
        <CodeBlock
          id="main-py"
          language="python"
          code={`if __name__ == "__main__":
    thread = str(uuid4())
    graph = Graph()
    app = graph.app()
    state = {
        "messages": [HumanMessage(content=query)],
        "next": "",
        "hop_count": 0,
        "thread_id": thread,
    }
    app.invoke(state, config={"thread_id": thread})`}
        />
        <hr className="mt-5" />

        <footer className="mt-4 mb-5">
          <p className="text-muted mb-1">
            <strong>Note:</strong> This example assumes prior experience with
            LangGraph, including defining agents, managing state, and
            constructing graph nodes.
          </p>

          <p className="text-muted mb-0">
            The code shown here focuses only on how tracing is integrated and
            omits full agent logic, routing conditions, and graph execution
            setup for clarity.
          </p>
        </footer>
      </main>
    </>
  );
};

export default TracingExample;
