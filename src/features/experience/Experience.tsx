import { buttonVariants } from "@/components/ui/button";
import { withAlpha } from "@/lib/color";
import { Icon } from "@/components/icons/Icon";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface ExperienceItem {
  company: string;
  role: string;
  type: string;
  period: string;
  accentColor: string;
  badgeClass: string;
  bullets: string[];
  techs: string[];
  icon: string;
}

const experiences: ExperienceItem[] = [
  {
    company: "Sigmoid",
    role: "Data Scientist",
    type: "Full Time",
    period: "Jan 2026 – Present",
    accentColor: "var(--primary)",
    badgeClass: "bg-primary/10 text-primary",
    bullets: [
      "Working as a Forward Deployed Engineer on a CPG client's MRO inventory use case, owning it end to end from development to deployment: SAP extracts land in ADLS, inventory KPIs (slow-moving stock, safety-stock coverage, critical parts below safety stock, reconciliation) are computed, and the results become clear insights and recommendations.",
      "Built a Power BI assistant on the Power BI MCP server and Fabric IQ, connecting both with their four tools and benchmarking them against the original PBIX report; a report-card router sends each question to the right report, and playbook-driven RCA gives every root-cause type its own path and hops, so it answers both Q&A and 'why' questions.",
      "Led a model refresh on the latest data: built new baselines, rebuilt the purchase structure and VTMs, updated promo patterns across all years, then re-estimated the model coefficients and validated them before release.",
      "Delivered AI/BI proofs of concept on Databricks, connecting Genie agents and Agent Bricks to enterprise data for sales, forecasting and inventory, with descriptive analytics, playbook-driven RCA, MLflow and XGBoost forecasting, and dashboards, all shipped on Databricks Apps.",
      "Built an NPD proxy-costing agent that turns a plain-English product description into a full COGS estimate with confidence ratings and the reasoning behind every assumption, cutting proxy costing from about 15 weeks to under 2 minutes; deployed on Azure App Service.",
      "Designed an Azure AI Foundry hosted agent for OTIF root-cause analysis that takes an order ID and returns a structured Investigation Summary, RCA Findings and Cost Impact report.",
      "Continued the ReAct-based LLM system, drift-monitoring pipelines and MLflow lifecycle work.",
    ],
    techs: [
      "Power BI MCP",
      "Fabric IQ",
      "Azure AI Foundry",
      "Databricks",
      "Genie",
      "Agent Bricks",
      "MLflow",
      "XGBoost",
      "Unity Catalog",
      "ADLS",
      "LangGraph",
      "Python",
    ],
    icon: "chart-line",
  },
  {
    company: "Sigmoid",
    role: "Associate Data Scientist",
    type: "Full Time",
    period: "Jan 2025 – Dec 2025",
    accentColor: "var(--primary)",
    badgeClass: "bg-primary/10 text-primary",
    bullets: [
      "Secured 1st place at Financial AI Hackathon (LandingAI, New York) by developing an AI-driven loan under-writing system with predictive modeling, document intelligence, and explainable insights",
      "Implemented agent tracing and observability using LangSmith to monitor, debug, and optimize LLM-based multi-agent workflows, improving reliability and transparency.",
      "Worked on building an interactive AI assistant to support lending institutions in evaluating loan approvals, borrower risk and fairness compliance. The assistant leverages LangGraph powered multi agent orchestration with LLM and provides visual insights via Streamlit.",
      "Worked on econometric models (price elasticity, promotions) and performed optimization for revenue growth.",
    ],
    techs: [
      "Python",
      "SQL",
      "Data Visualization",
      "Pandas",
      "Scikit-learn",
      "Econometrics",
      "NLopt",
      "Diffusion Models",
    ],
    icon: "flask",
  },
  {
    company: "Sigmoid",
    role: "Data Science Intern",
    type: "Internship",
    period: "Aug 2024 – Dec 2024",
    accentColor: "var(--muted-foreground)",
    badgeClass: "bg-muted text-muted-foreground",
    bullets: [
      "Onboarded into the RGMx econometrics team — learned the project pipeline and began contributing to model validation.",
      "Enhanced SQL and Python proficiency through hands-on tasks including database querying, data manipulation, and automation scripts.",
      "Participated in structured training programs on Python, SQL, and data visualization techniques to strengthen foundational data skills.",
    ],
    techs: ["Python", "SQL", "Data Visualization", "Pandas"],
    icon: "user-graduate",
  },
];

const ExperienceCard = ({ exp }: { exp: ExperienceItem }) => (
  <div className="exp-card relative col-span-12 mb-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3">
    <div
      className="hidden md:block"
      style={{
        position: "absolute",
        left: "50%",
        top: 0,
        transform: "translate(-50%, -50%)",
        width: 14,
        height: 14,
        borderRadius: "50%",
        backgroundColor: exp.accentColor,
        border: "3px solid var(--card)",
        boxShadow: `0 0 0 3px ${withAlpha(exp.accentColor, 33)}`,
        zIndex: 2,
      }}
    />
    <div
      className="rounded-lg bg-card text-card-foreground border  h-full"
      style={{
        borderRadius: 8,
        borderTop: `4px solid ${exp.accentColor}`,
        overflow: "hidden",
      }}
    >
      <div className="p-6 md:p-12">
        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div
              className="flex items-center justify-center rounded-full"
              style={{
                width: 48,
                height: 48,
                backgroundColor: withAlpha(exp.accentColor, 9),
                color: exp.accentColor,
                fontSize: 20,
                flexShrink: 0,
              }}
            >
              <Icon name={exp.icon} className="size-[1em]" />
            </div>
            <div>
              <h4
                className="font-bold mb-0"
                style={{ color: "var(--foreground)" }}
              >
                {exp.role}
              </h4>
              <p
                className="text-muted-foreground mb-0"
                style={{ fontSize: "14px" }}
              >
                {exp.company} <span className="text-muted-foreground">·</span>{" "}
                {exp.type}
              </p>
            </div>
          </div>
          <span
            className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ${exp.badgeClass} border font-semibold`}
            style={{ fontSize: "12px", padding: "6px 12px" }}
          >
            {exp.period}
          </span>
        </div>

        {/* Bullets */}
        <ul
          className="pl-4 mb-6"
          style={{
            fontSize: "14.5px",
            lineHeight: "1.8",
            color: "var(--muted-foreground)",
          }}
        >
          {exp.bullets.map((b: string, bi: number) => (
            <li key={bi} className="mb-2">
              {b}
            </li>
          ))}
        </ul>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2">
          {exp.techs.map((t: string) => (
            <span
              key={t}
              className="exp-tech-badge inline-flex items-center px-2 py-1 text-xs font-medium rounded-full border"
              style={{
                fontSize: "12px",
                backgroundColor: withAlpha(exp.accentColor, 7),
                color: exp.accentColor,
                borderColor: withAlpha(exp.accentColor, 25),
                padding: "5px 12px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Experience = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
      gsap.from(".exp-page-header", {
        y: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // Timeline line draw
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top center",
        duration: 1.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".timeline-line",
          start: "top 80%",
        },
      });

      // Cards stagger in from alternating sides
      gsap.utils.toArray<HTMLElement>(".exp-card").forEach((card, i) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 88%",
            toggleActions: "play none none none",
          },
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
        });
      });

      // Tech badges pop in
      gsap.utils.toArray<HTMLElement>(".exp-tech-badge").forEach((badge) => {
        gsap.from(badge, {
          scrollTrigger: {
            trigger: badge,
            start: "top 95%",
          },
          scale: 0.6,
          opacity: 0,
          duration: 0.35,
          ease: "back.out(1.7)",
        });
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Helmet>
        <title>Experience | Mohd Zain</title>
        <meta
          name="description"
          content="Full work experience of Mohd Zain — Data Scientist at Sigmoid, covering Gen AI, econometrics, and multi-agent systems."
        />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <div
        ref={pageRef}
        className="overflow-x-clip"
        style={{
          backgroundColor: "var(--background)",
          minHeight: "100vh",
          paddingBottom: "80px",
        }}
      >
        <div className="container mx-auto px-4 pt-12">
          {/* Page header */}
          <div className="exp-page-header text-center mb-12 pb-2">
            <h1
              className="font-bold"
              style={{ fontSize: "2.2rem", color: "var(--foreground)" }}
            >
              Work Experience
            </h1>
            <p
              className="text-muted-foreground mt-2"
              style={{ fontSize: "16px" }}
            >
              My professional journey in Data Science &amp; AI
            </p>
            <div
              style={{
                width: 60,
                height: 4,
                backgroundColor: "var(--primary)",
                borderRadius: 2,
                margin: "16px auto 0",
              }}
            />
          </div>

          {/* Timeline wrapper */}
          <div className="relative">
            {/* Vertical line */}
            <div
              className="timeline-line hidden md:block"
              style={{
                position: "absolute",
                left: "50%",
                top: 0,
                bottom: 0,
                width: 2,
                backgroundColor: "var(--border)",
                transform: "translateX(-50%)",
                zIndex: 0,
              }}
            />

            {/* Cards */}
            <div className="grid grid-cols-12 gap-x-6">
              {experiences.map((exp, idx) => (
                <ExperienceCard key={idx} exp={exp} />
              ))}
            </div>
          </div>

          {/* Footer actions */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <Icon name="arrow-left" className="size-[1em] mr-1" /> Back to
              Home
            </Link>
            <Link
              to="/industry"
              className={buttonVariants({ variant: "default", size: "sm" })}
            >
              See Industry Work{" "}
              <Icon name="arrow-right" className="size-[1em] ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
