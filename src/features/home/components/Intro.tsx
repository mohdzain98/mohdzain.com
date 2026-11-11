import { buttonVariants } from "@/components/ui/button";
import { withAlpha } from "@/lib/color";
import { Icon } from "@/components/icons/Icon";
import asset_mypic from "@/assets/mypic.webp";
import { useEffect, useRef } from "react";
import "@/features/home/styles/intro.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const aboutItems = [
  {
    icon: "graduation-cap",
    label: "M.Tech · Data Analytics",
    sub: "IIT (ISM) Dhanbad",
    accent: "var(--primary)",
  },
  {
    icon: "laptop-code",
    label: "B.Tech · CSE",
    sub: "Uttarakhand Technical University",
    accent: "#198754",
  },
];

const Intro = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-photo", { x: -60, opacity: 0, duration: 0.9 })
        .from(
          ".hero-about-title",
          { y: 20, opacity: 0, duration: 0.5 },
          "-=0.5",
        )
        .from(
          ".about-pill",
          { y: 16, opacity: 0, stagger: 0.12, duration: 0.5 },
          "-=0.3",
        )
        .from(".hero-exp-title", { y: 20, opacity: 0, duration: 0.5 }, "-=0.2")
        .from(
          ".hero-exp-card",
          { y: 28, opacity: 0, stagger: 0.16, duration: 0.55 },
          "-=0.2",
        )
        .from(".hero-see-more", { opacity: 0, duration: 0.4 }, "-=0.1");
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{ padding: isTabletOrMobile ? "50px 8%" : "70px 10%" }}
    >
      <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12">
        {/* ── Left: photo + about ── */}
        <div className="flex flex-col items-center md:col-span-4 md:items-start">
          {/* Photo */}
          <div className="hero-photo mb-6">
            <img
              src={asset_mypic}
              alt="mohdzain"
              width={isTabletOrMobile ? 200 : 280}
              height={isTabletOrMobile ? 200 : 280}
              style={{
                borderRadius: 8,
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>

          {/* About heading */}
          <p
            className="hero-about-title font-bold mb-4"
            style={{
              fontSize: "11px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--primary)",
            }}
          >
            About Me
          </p>

          {/* Icon pills */}
          <div className="flex flex-col gap-2 w-full">
            {aboutItems.map((item) => (
              <div
                key={item.label}
                className="about-pill flex items-center gap-4 px-4 py-2 rounded-lg"
                style={{
                  backgroundColor: withAlpha(item.accent, 5),
                  border: `1px solid ${item.accent}22`,
                }}
              >
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "8px",
                    backgroundColor: withAlpha(item.accent, 9),
                    color: item.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 15,
                    flexShrink: 0,
                  }}
                >
                  <Icon name={item.icon} className="size-[1em]" />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--foreground)",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: "var(--muted-foreground)",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: work experience ── */}
        <div className="md:col-span-8">
          <p
            className="hero-exp-title font-bold mb-6"
            style={{
              fontSize: "13px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "var(--primary)",
            }}
          >
            Work Experience
          </p>

          {/* Data Scientist */}
          <div
            className="hero-exp-card rounded-lg p-6 mb-4"
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid #e8eaf0",
              borderLeft: "3px solid #0d6efd",
            }}
          >
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "var(--primary)",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  Sigmoid
                </p>
                <p
                  className="font-bold mb-1"
                  style={{ fontSize: "18px", color: "var(--foreground)" }}
                >
                  Data Scientist
                </p>
                <p
                  className="mb-0"
                  style={{
                    fontSize: "13px",
                    color: "var(--muted-foreground)",
                    lineHeight: 1.6,
                  }}
                >
                  Currently an FDE on an MRO inventory use case for a CPG
                  client, end to end from development to deployment.
                  <span className="mt-1 block">
                    SAP extracts land in ADLS, powering inventory intelligence,
                    criticality and stocking rules, and the insights and
                    recommendations built on them.
                  </span>
                </p>
              </div>
              <span
                className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap"
                style={{
                  backgroundColor: "#0d6efd18",
                  color: "var(--primary)",
                  fontSize: "11px",
                  padding: "5px 10px",
                }}
              >
                Jan 2026 – present
              </span>
            </div>
          </div>

          {/* Associate Data Scientist */}
          <div
            className="hero-exp-card rounded-lg p-6 mb-4"
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid #e8eaf0",
              borderLeft: "3px solid #6c757d",
            }}
          >
            <div className="flex justify-between items-start flex-wrap gap-2">
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "var(--muted-foreground)",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  Sigmoid
                </p>
                <p
                  className="font-bold mb-1"
                  style={{ fontSize: "17px", color: "var(--foreground)" }}
                >
                  Associate Data Scientist
                </p>
                <p
                  className="mb-0"
                  style={{
                    fontSize: "13px",
                    color: "var(--muted-foreground)",
                    lineHeight: 1.6,
                  }}
                >
                  Worked in the RGMx econometrics team, building predictive
                  models for price elasticity and promotional effectiveness
                  analysis. Developed an AI-driven loan underwriting system
                  using predictive modeling and document intelligence.
                </p>
              </div>
              <span
                className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap"
                style={{
                  backgroundColor: "#6c757d18",
                  color: "var(--muted-foreground)",
                  fontSize: "11px",
                  padding: "5px 10px",
                }}
              >
                Jan – Dec 2025
              </span>
            </div>
          </div>

          {/* Data Science Intern */}
          <div
            className="hero-exp-card rounded-lg px-6 py-4 mb-4"
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid #e8eaf0",
              borderLeft: "3px solid #adb5bd",
            }}
          >
            <div className="flex justify-between items-center flex-wrap gap-2">
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    color: "var(--muted-foreground)",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    marginBottom: 3,
                  }}
                >
                  Sigmoid
                </p>
                <p
                  className="font-semibold mb-0"
                  style={{ fontSize: "15px", color: "var(--foreground)" }}
                >
                  Data Science Intern &nbsp;
                  <span
                    style={{
                      fontSize: "12px",
                      color: "var(--muted-foreground)",
                      fontWeight: 400,
                    }}
                  >
                    — RGMx econometrics onboarding, model validation &amp; SQL.
                  </span>
                </p>
              </div>
              <span
                className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap"
                style={{
                  backgroundColor: "#adb5bd18",
                  color: "var(--muted-foreground)",
                  fontSize: "11px",
                  padding: "5px 10px",
                }}
              >
                Aug – Dec 2024
              </span>
            </div>
          </div>

          <div className="hero-see-more mt-6">
            <Link
              to="/experience"
              className={buttonVariants({ variant: "ghost", size: "sm" })}
              style={{
                backgroundColor: "transparent",
                border: "1px solid #0d6efd",
                color: "var(--primary)",
                borderRadius: "8px",
                padding: "6px 16px",
                fontSize: "13px",
                fontWeight: 600,
              }}
            >
              See Full Experience &nbsp;
              <Icon
                name="arrow-right"
                style={{ fontSize: "11px" }}
                className="size-[1em]"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
