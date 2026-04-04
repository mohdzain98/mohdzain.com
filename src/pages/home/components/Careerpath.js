import { useEffect, useRef } from "react";
import "../Styling/cp.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import SectionHeader from "../../../components/layout/SectionHeader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const nodes = [
  {
    label: "Sigmoid",
    sub: "Data Scientist",
    period: "2024 – Present",
    logo: require("../../../Assets/sig.png"),
    href: "https://sigmoid.com",
    accent: "#0d6efd",
    alt: "sigmoid",
  },
  {
    label: "IIT ISM Dhanbad",
    sub: "M.Tech · Data Analytics",
    period: "2022 – 2024",
    logo: require("../../../Assets/iit.png"),
    href: "https://www.iitism.ac.in/",
    accent: "#198754",
    alt: "iit ism",
  },
  {
    label: "UTU",
    sub: "B.Tech · CSE",
    period: "2017 – 2021",
    logo: require("../../../Assets/utu.png"),
    href: "https://uktech.ac.in/",
    accent: "#fd7e14",
    alt: "utu",
  },
  {
    label: "St Mary's School",
    sub: "CISCE · Class XII",
    period: "2017",
    logo: require("../../../Assets/isc.png"),
    href: "https://www.cisce.org/",
    accent: "#6f42c1",
    alt: "school",
  },
];

const Careerpath = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "play none none none",
        },
      });

      // Draw the connecting line left → right
      tl.from(".cp-timeline-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 0.9,
        ease: "power2.inOut",
      })
        // Nodes pop in with stagger
        .from(
          ".cp-node",
          {
            y: -28,
            opacity: 0,
            stagger: 0.18,
            duration: 0.6,
            ease: "back.out(1.4)",
          },
          "-=0.4",
        )
        // Dots pulse
        .from(
          ".cp-dot",
          {
            scale: 0,
            stagger: 0.18,
            duration: 0.35,
            ease: "back.out(2)",
          },
          "<",
        );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="cp" ref={sectionRef} id="cp">
      <div className="container px-2 py-5">
        <SectionHeader
          title="Career Path"
          subtitle="A timeline of the institutions and roles that shaped my work in data analytics, AI systems, and engineering."
        />

        {/* ── Desktop: horizontal timeline ── */}
        {!isTabletOrMobile ? (
          <div
            className="position-relative px-4"
            style={{ paddingBottom: "20px" }}
          >
            {/* Connecting line */}
            <div
              className="cp-timeline-line"
              style={{
                position: "absolute",
                top: 44,
                left: "calc(12.5%)",
                right: "calc(12.5%)",
                height: 3,
                background:
                  "linear-gradient(90deg, #0d6efd, #198754, #fd7e14, #6f42c1)",
                borderRadius: 2,
                zIndex: 0,
              }}
            />

            <div
              className="row row-cols-4 g-0 position-relative"
              style={{ zIndex: 1 }}
            >
              {nodes.map((n, i) => (
                <div className="col cp-node" key={i}>
                  <div className="d-flex flex-column align-items-center text-center px-2">
                    {/* Dot on the line */}
                    <div
                      className="cp-dot mb-3"
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        backgroundColor: n.accent,
                        border: "3px solid #fff",
                        boxShadow: `0 0 0 3px ${n.accent}55`,
                        marginTop: 36,
                      }}
                    />

                    {/* Card */}
                    <Link
                      to={n.href}
                      target="_blank"
                      rel="noopener"
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        className="cp-card shadow-sm border p-3"
                        style={{
                          borderRadius: 14,
                          backgroundColor: "#fff",
                          borderTop: `3px solid ${n.accent} !important`,
                          transition:
                            "transform 0.25s ease, box-shadow 0.25s ease",
                          cursor: "pointer",
                          minWidth: 130,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-6px)";
                          e.currentTarget.style.boxShadow =
                            "0 10px 28px rgba(0,0,0,0.13)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "";
                        }}
                      >
                        <img
                          src={n.logo}
                          alt={n.alt}
                          style={{
                            width: 52,
                            height: 52,
                            objectFit: "contain",
                            borderRadius: 8,
                            marginBottom: 8,
                          }}
                        />
                        <p
                          className="fw-bold mb-0"
                          style={{ fontSize: "13px", color: "#1a1a2e" }}
                        >
                          {n.label}
                        </p>
                        <p
                          style={{
                            fontSize: "11px",
                            color: n.accent,
                            marginBottom: 2,
                            fontWeight: 600,
                          }}
                        >
                          {n.sub}
                        </p>
                        <p
                          style={{
                            fontSize: "11px",
                            color: "#888",
                            marginBottom: 0,
                          }}
                        >
                          {n.period}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          /* ── Mobile: vertical stack ── */
          <div className="position-relative ps-4">
            {/* Vertical line */}
            <div
              className="cp-timeline-line"
              style={{
                position: "absolute",
                left: 20,
                top: 0,
                bottom: 0,
                width: 3,
                background:
                  "linear-gradient(180deg, #0d6efd, #198754, #fd7e14, #6f42c1)",
                borderRadius: 2,
              }}
            />

            {nodes.map((n, i) => (
              <div className="cp-node d-flex align-items-start mb-4" key={i}>
                {/* Dot */}
                <div
                  className="cp-dot flex-shrink-0"
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    backgroundColor: n.accent,
                    border: "3px solid #fff",
                    boxShadow: `0 0 0 3px ${n.accent}55`,
                    marginTop: 4,
                    marginLeft: -27,
                    zIndex: 1,
                  }}
                />
                {/* Card */}
                <Link
                  to={n.href}
                  target="_blank"
                  rel="noopener"
                  style={{ textDecoration: "none", marginLeft: 16 }}
                >
                  <div
                    className="d-flex align-items-center gap-3 shadow-sm border p-3"
                    style={{
                      borderRadius: 12,
                      backgroundColor: "#fff",
                      borderLeft: `3px solid ${n.accent}`,
                    }}
                  >
                    <img
                      src={n.logo}
                      alt={n.alt}
                      style={{
                        width: 40,
                        height: 40,
                        objectFit: "contain",
                        borderRadius: 6,
                      }}
                    />
                    <div>
                      <p
                        className="fw-bold mb-0"
                        style={{ fontSize: "13px", color: "#1a1a2e" }}
                      >
                        {n.label}
                      </p>
                      <p
                        style={{
                          fontSize: "11px",
                          color: n.accent,
                          marginBottom: 1,
                          fontWeight: 600,
                        }}
                      >
                        {n.sub}
                      </p>
                      <p
                        style={{
                          fontSize: "11px",
                          color: "#888",
                          marginBottom: 0,
                        }}
                      >
                        {n.period}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Careerpath;
