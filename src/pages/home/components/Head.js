import { useEffect, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import "../Styling/Intro.css";

gsap.registerPlugin(TextPlugin);

const ROLES = ["Data Scientist"];

// 6 badges placed at the 6 vertices of a regular hexagon
// Each has a float direction (dx,dy) for GSAP — radially outward from center
const HEX_BADGES = [
  {
    icon: "fa-solid fa-brain",
    label: "Gen AI",
    color: "#7c3aed",
    bg: "#f5f3ff",
    dx: 0,
    dy: -1,
  }, // top
  {
    icon: "fa-solid fa-bolt",
    label: "Agentic AI",
    color: "#dc2626",
    bg: "#fff1f2",
    dx: 0.87,
    dy: -0.5,
  }, // top-right
  {
    icon: "fa-solid fa-sitemap",
    label: "LangGraph",
    color: "#059669",
    bg: "#f0fdf4",
    dx: 0.87,
    dy: 0.5,
  }, // bottom-right
  {
    icon: "fa-solid fa-chart-line",
    label: "RGMx",
    color: "#b45309",
    bg: "#fef3c7",
    dx: 0,
    dy: 1,
  }, // bottom
  {
    icon: "fa-solid fa-magnifying-glass",
    label: "LLM Tracing",
    color: "#6d28d9",
    bg: "#f5f3ff",
    dx: -0.87,
    dy: 0.5,
  }, // bottom-left
  {
    icon: "fa-solid fa-coins",
    label: "RAG",
    color: "#0891b2",
    bg: "#ecfeff",
    dx: -0.87,
    dy: -0.5,
  }, // top-left
];

const Head = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const headRef = useRef(null);
  const roleRef = useRef(null);
  const cursorRef = useRef(null);

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
        const cycle = (skipTypeIn) => {
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
          tl2
            .to({}, { duration: 2.5 })
            .to(roleRef.current, {
              duration: role.length * 0.028,
              text: { value: "", delimiter: "" },
              ease: "none",
              onComplete: () => cycle(false),
            });
        };
        cycle(true); // first pass: text is already shown, just pause then erase
      });

      // Float each badge radially outward — preserve the centering offset
      gsap.utils.toArray(".float-badge").forEach((badge, i) => {
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
              <span className="role-typed" ref={roleRef}>{ROLES[0]}</span>
              <span className="head-cursor" ref={cursorRef} />
            </div>

            <p className="head-desc">
              Building production-grade LLM systems, agentic workflows, and
              scalable AI pipelines at <strong>Sigmoid</strong>. Focused on LLM
              tracing, evaluation pipelines, and multi-agent orchestration using{" "}
              <strong>LangGraph</strong> and <strong>MLflow</strong>.
              <span className="head-edu">
                M.Tech · Data Analytics · IIT (ISM) Dhanbad
              </span>
            </p>

            <div className="head-cta">
              <Link to="/industry" className="btn-hero-outline">
                View My Work
              </Link>
              <Link
                to="mailto:zainmohd1998@gmail.com"
                className="btn-hero-primary"
              >
                Contact Me
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ fontSize: "12px" }}
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
                  <i className="fab fa-linkedin" />
                </Link>
                <Link
                  to="https://github.com/mohdzain98/"
                  target="_blank"
                  rel="noopener"
                  className="social-icon-sm"
                >
                  <i className="fab fa-github" />
                </Link>
                <Link
                  to="https://x.com/M0hdZain"
                  target="_blank"
                  rel="noopener"
                  className="social-icon-sm"
                >
                  <i className="fa-brands fa-x-twitter" />
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
                    stroke="#3b5bdb"
                    strokeWidth="1.2"
                    strokeDasharray="6 5"
                    opacity="0.2"
                  />
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
                      fill="#3b5bdb"
                      opacity="0.25"
                    />
                  ))}
                </svg>

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
                      style={{
                        "--badge-bg": b.bg,
                        "--badge-color": b.color,
                        top: positions[i].top,
                        left: positions[i].left,
                      }}
                    >
                      <i
                        className={b.icon}
                        style={{ color: b.color, fontSize: 14 }}
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
            <i className="fab fa-linkedin" />
          </Link>
          <Link
            to="https://github.com/mohdzain98/"
            target="_blank"
            rel="noopener"
            className="social-icon"
            title="GitHub"
          >
            <i className="fab fa-github" />
          </Link>
          <Link
            to="https://x.com/M0hdZain"
            target="_blank"
            rel="noopener"
            className="social-icon"
            title="X / Twitter"
          >
            <i className="fa-brands fa-x-twitter" />
          </Link>
        </div>
      )}

      {/* Scroll hint */}
      <div className="head-scroll-hint">
        <span>Scroll</span>
        <i
          className="fa-solid fa-chevron-down"
          style={{ animation: "scrollBounce 1.5s ease-in-out infinite" }}
        />
      </div>
    </div>
  );
};

export default Head;
