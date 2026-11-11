import { Icon } from "@/components/icons/Icon";
import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import "@/features/home/styles/intro.css";

gsap.registerPlugin(TextPlugin);

const ROLES = ["Data Scientist"];

// 6 skill tiles placed at the 6 vertices of a regular hexagon, orbiting the
// central "Forward Deployed Engineer" core.
// Each has a float direction (dx,dy) for GSAP -- radially outward from center
const HEX_BADGES = [
  {
    icon: "bolt",
    label: "Agentic AI",
    color: "#dc2626",
    bg: "#fff1f2",
    dx: 0,
    dy: -1,
  }, // top
  {
    icon: "database",
    label: "RAG",
    color: "#0891b2",
    bg: "#ecfeff",
    dx: 0.87,
    dy: -0.5,
  }, // top-right
  {
    icon: "server",
    label: "Backend",
    color: "#059669",
    bg: "#f0fdf4",
    dx: 0.87,
    dy: 0.5,
  }, // bottom-right
  {
    icon: "cloud",
    label: "Azure DevOps",
    color: "#2563eb",
    bg: "#eff6ff",
    dx: 0,
    dy: 1,
  }, // bottom
  {
    icon: "laptop-code",
    label: "Frontend",
    color: "#b45309",
    bg: "#fef3c7",
    dx: -0.87,
    dy: 0.5,
  }, // bottom-left
  {
    icon: "brain",
    label: "Gen AI",
    color: "#7c3aed",
    bg: "#f5f3ff",
    dx: -0.87,
    dy: -0.5,
  }, // top-left
];

const Head = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const headRef = useRef<HTMLDivElement>(null);
  const roleRef = useRef<HTMLSpanElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".head-eyebrow", { y: -20, opacity: 0, duration: 0.5 })
        .from(".head-name-line", { y: 30, opacity: 0, duration: 0.7 }, "-=0.25")
        .from(".head-role-line", { y: 20, opacity: 0, duration: 0.6 }, "-=0.3")
        .from(".head-desc", { y: 18, opacity: 0, duration: 0.55 }, "-=0.25")
        .from(".head-cta", { y: 14, opacity: 0, duration: 0.5 }, "-=0.2")
        .from(".head-socials", { x: -16, opacity: 0, duration: 0.4 }, "-=0.4")
        .from(".head-scroll-hint", { opacity: 0, duration: 0.5 }, "-=0.2");

      // Badges animated separately — xPercent/yPercent centers each on its vertex
      gsap.fromTo(
        ".float-badge",
        { scale: 0, opacity: 0, xPercent: -50, yPercent: -50 },
        {
          scale: 1,
          opacity: 1,
          xPercent: -50,
          yPercent: -50,
          stagger: 0.12,
          duration: 0.55,
          ease: "back.out(1.7)",
          delay: 0.4,
        },
      );

      // Center core pops in, then breathes
      gsap.fromTo(
        ".fde-core, .fde-shadow",
        { scale: 0.4, opacity: 0, xPercent: -50, yPercent: -50 },
        {
          scale: 1,
          opacity: 1,
          xPercent: -50,
          yPercent: -50,
          duration: 0.7,
          ease: "back.out(1.6)",
          delay: 0.25,
        },
      );

      // Cursor blink
      gsap.to(cursorRef.current, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.55,
        ease: "none",
      });

      // Typewriter cycling — start with full text already visible, skip first type-in
      tl.call(() => {
        let idx = 0;
        const cycle = (skipTypeIn: boolean): void => {
          const role = ROLES[idx % ROLES.length];
          idx++;
          const tl2 = gsap.timeline();
          if (!skipTypeIn) {
            tl2.to(roleRef.current, {
              duration: role.length * 0.055,
              text: { value: role, delimiter: "" },
              ease: "none",
            });
          }
          tl2.to({}, { duration: 2.5 }).to(roleRef.current, {
            duration: role.length * 0.028,
            text: { value: "", delimiter: "" },
            ease: "none",
            onComplete: () => cycle(false),
          });
        };
        cycle(true); // first pass: text is already shown, just pause then erase
      });

      // Float each badge radially outward — preserve the centering offset
      gsap.utils.toArray<HTMLElement>(".float-badge").forEach((badge, i) => {
        const b = HEX_BADGES[i];
        if (!b) return;
        gsap.to(badge, {
          xPercent: -50 + b.dx * 6,
          yPercent: -50 + b.dy * 6,
          duration: 2.2 + i * 0.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.9 + i * 0.3,
        });
      });
    }, headRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="portfolio-page" ref={headRef}>
      <div className="hero-container">
        <div className="hero-inner">
          {/* ── Left: text ── */}
          <div className="hero-left">
            <p className="head-eyebrow">Hi, I'm</p>

            <h1 className="head-name-line">
              <span className="name-accent">Mohd Zain</span>
            </h1>

            <div className="head-role-line">
              <span className="role-typed" ref={roleRef}>
                {ROLES[0]}
              </span>
              <span className="head-cursor" ref={cursorRef} />
            </div>

            <p className="head-desc">
              Data Scientist at <strong>Sigmoid</strong> building
              production-grade LLM systems, agentic workflows, and scalable AI
              pipelines, with a focus on LLM tracing, evaluation pipelines, and
              multi-agent orchestration using <strong>LangGraph</strong> and{" "}
              <strong>MLflow</strong>. <br></br>Currently working as an{" "}
              <strong>FDE</strong> on a use case for a CPG client, end to end
              from development to deployment.
              <span className="head-edu">
                M.Tech · Data Analytics · IIT (ISM) Dhanbad
              </span>
            </p>

            <div className="head-cta">
              <Link to="/industry" className="btn-hero-outline">
                <Icon
                  name="briefcase"
                  style={{ fontSize: "13px" }}
                  className="size-[1em]"
                />
                View My Work
              </Link>
              <Link
                to="mailto:zainmohd1998@gmail.com"
                className="btn-hero-primary"
              >
                Contact Me
                <Icon
                  name="arrow-right"
                  style={{ fontSize: "12px" }}
                  className="size-[1em]"
                />
              </Link>
            </div>

            {isTabletOrMobile && (
              <div className="head-socials-inline">
                <Link
                  to="https://www.linkedin.com/in/zainatlink/"
                  target="_blank"
                  rel="noopener"
                  className="social-icon-sm"
                >
                  <Icon name="linkedin" className="size-[1em]" />
                </Link>
                <Link
                  to="https://github.com/mohdzain98/"
                  target="_blank"
                  rel="noopener"
                  className="social-icon-sm"
                >
                  <Icon name="github" className="size-[1em]" />
                </Link>
                <Link
                  to="https://x.com/M0hdZain"
                  target="_blank"
                  rel="noopener"
                  className="social-icon-sm"
                >
                  <Icon name="x-twitter" className="size-[1em]" />
                </Link>
              </div>
            )}
          </div>

          {/* ── Right: hex badge layout ── */}
          {!isTabletOrMobile && (
            <div className="hero-right">
              <div className="hex-field">
                {/* Faint hexagon outline in the background */}
                <svg
                  className="hex-outline"
                  viewBox="0 0 380 400"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polygon
                    points="190,55 316,127 316,273 190,345 64,273 64,127"
                    fill="none"
                    stroke="var(--primary)"
                    strokeWidth="1.2"
                    strokeDasharray="6 5"
                    opacity="0.2"
                  />
                  {/* Spokes from the core to each tile */}
                  {[
                    [190, 55],
                    [316, 127],
                    [316, 273],
                    [190, 345],
                    [64, 273],
                    [64, 127],
                  ].map(([x, y], i) => (
                    <line
                      key={`spoke-${i}`}
                      x1="190"
                      y1="200"
                      x2={x}
                      y2={y}
                      stroke="var(--primary)"
                      strokeWidth="1"
                      strokeDasharray="3 5"
                      opacity="0.22"
                    />
                  ))}
                  {/* Dot at each vertex */}
                  {[
                    [190, 55],
                    [316, 127],
                    [316, 273],
                    [190, 345],
                    [64, 273],
                    [64, 127],
                  ].map(([cx, cy], i) => (
                    <circle
                      key={i}
                      cx={cx}
                      cy={cy}
                      r="3.5"
                      fill="var(--primary)"
                      opacity="0.25"
                    />
                  ))}
                </svg>

                {/* Center: Forward Deployed Engineer */}
                {/* Soft drop shadow: a blurred hexagon behind the glass (a CSS
                    shadow would be clipped by the hexagon's clip-path). */}
                <svg
                  className="fde-shadow"
                  viewBox="0 0 100 116"
                  aria-hidden="true"
                >
                  <defs>
                    <filter
                      id="fde-shadow-blur"
                      x="-50%"
                      y="-50%"
                      width="200%"
                      height="200%"
                    >
                      <feGaussianBlur stdDeviation="5" />
                    </filter>
                  </defs>
                  <polygon
                    points="50,2 98,30 98,86 50,114 2,86 2,30"
                    filter="url(#fde-shadow-blur)"
                  />
                </svg>
                <div
                  className="fde-core"
                  role="img"
                  aria-label="Forward Deployed Engineer"
                >
                  <svg
                    className="fde-rim"
                    viewBox="0 0 100 116"
                    aria-hidden="true"
                  >
                    <defs>
                      <linearGradient
                        id="fde-rim-grad"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="1"
                      >
                        <stop
                          offset="0"
                          style={{ stopColor: "var(--brand)" }}
                        />
                        <stop offset="1" style={{ stopColor: "#7c3aed" }} />
                      </linearGradient>
                    </defs>
                    <polygon
                      points="50,1.5 98.5,29.5 98.5,86.5 50,114.5 1.5,86.5 1.5,29.5"
                      fill="none"
                      stroke="url(#fde-rim-grad)"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="fde-core-inner">
                    <Icon name="rocket" className="fde-core-icon" />
                    <span className="fde-core-abbr">FDE</span>
                  </div>
                </div>

                {/* Badges at hex vertices */}
                {HEX_BADGES.map((b, i) => {
                  const positions = [
                    { top: "55px", left: "190px" }, // top
                    { top: "127px", left: "316px" }, // top-right
                    { top: "273px", left: "316px" }, // bottom-right
                    { top: "345px", left: "190px" }, // bottom
                    { top: "273px", left: "64px" }, // bottom-left
                    { top: "127px", left: "64px" }, // top-left
                  ];
                  return (
                    <div
                      key={b.label}
                      className="float-badge"
                      style={
                        {
                          "--badge-bg": b.bg,
                          "--badge-color": b.color,
                          top: positions[i].top,
                          left: positions[i].left,
                        } as React.CSSProperties
                      }
                    >
                      <Icon
                        name={b.icon}
                        className="size-[14px]"
                        style={{ color: b.color }}
                      />
                      <span>{b.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Social sidebar — desktop */}
      {!isTabletOrMobile && (
        <div className="head-socials social-links">
          <Link
            to="https://www.linkedin.com/in/zainatlink/"
            target="_blank"
            rel="noopener"
            className="social-icon"
            title="LinkedIn"
          >
            <Icon name="linkedin" className="size-[1em]" />
          </Link>
          <Link
            to="https://github.com/mohdzain98/"
            target="_blank"
            rel="noopener"
            className="social-icon"
            title="GitHub"
          >
            <Icon name="github" className="size-[1em]" />
          </Link>
          <Link
            to="https://x.com/M0hdZain"
            target="_blank"
            rel="noopener"
            className="social-icon"
            title="X / Twitter"
          >
            <Icon name="x-twitter" className="size-[1em]" />
          </Link>
        </div>
      )}

      {/* Scroll hint */}
      <div className="head-scroll-hint">
        <span>Scroll</span>
        <Icon
          name="chevron-down"
          style={{ animation: "scrollBounce 1.5s ease-in-out infinite" }}
          className="size-[1em]"
        />
      </div>
    </div>
  );
};

export default Head;
