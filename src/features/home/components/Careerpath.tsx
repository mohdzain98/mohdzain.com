import { withAlpha } from "@/lib/color";
import asset_sig from "@/assets/sig.webp";
import asset_iit from "@/assets/iit.webp";
import asset_utu from "@/assets/utu.webp";
import asset_isc from "@/assets/isc.webp";
import { useEffect, useRef } from "react";
import "@/features/home/styles/careerpath.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import SectionHeader from "@/components/layout/SectionHeader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const nodes = [
  {
    label: "Sigmoid",
    sub: "Data Scientist",
    period: "2024 – Present",
    logo: asset_sig,
    href: "https://sigmoid.com",
    accent: "var(--primary)",
    alt: "sigmoid",
  },
  {
    label: "IIT ISM Dhanbad",
    sub: "M.Tech · Data Analytics",
    period: "2022 – 2024",
    logo: asset_iit,
    href: "https://www.iitism.ac.in/",
    accent: "#198754",
    alt: "iit ism",
  },
  {
    label: "UTU",
    sub: "B.Tech · CSE",
    period: "2017 – 2021",
    logo: asset_utu,
    href: "https://uktech.ac.in/",
    accent: "#fd7e14",
    alt: "utu",
  },
  {
    label: "St Mary's School",
    sub: "CISCE · Class XII",
    period: "2017",
    logo: asset_isc,
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
    <section className="cp px-4 lg:px-[9%]" ref={sectionRef} id="cp">
      <div className="container mx-auto px-4 py-12 md:px-2">
        <SectionHeader
          title="Career Path"
          subtitle="A timeline of the institutions and roles that shaped my work in data analytics, AI systems, and engineering."
        />

        {/* ── Desktop: horizontal timeline ── */}
        {!isTabletOrMobile ? (
          <div className="relative px-6" style={{ paddingBottom: "20px" }}>
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
              className="grid grid-cols-4 gap-0 relative"
              style={{ zIndex: 1 }}
            >
              {nodes.map((n, i) => (
                <div className="cp-node" key={i}>
                  <div className="flex flex-col items-center text-center px-2">
                    {/* Dot on the line */}
                    <div
                      className="cp-dot mb-4"
                      style={{
                        width: 16,
                        height: 16,
                        borderRadius: "50%",
                        backgroundColor: n.accent,
                        border: "3px solid var(--card)",
                        boxShadow: `0 0 0 3px ${withAlpha(n.accent, 33)}`,
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
                        className="cp-card  border p-4"
                        style={{
                          borderRadius: 8,
                          backgroundColor: "var(--card)",
                          borderTop: `3px solid ${n.accent} !important`,
                          transition:
                            "transform 0.25s ease, box-shadow 0.25s ease",
                          cursor: "pointer",
                          minWidth: 130,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-6px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
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
                            margin: "0 auto 8px",
                            display: "block",
                          }}
                        />
                        <p
                          className="font-bold mb-0"
                          style={{
                            fontSize: "13px",
                            color: "var(--foreground)",
                          }}
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
                            color: "var(--muted-foreground)",
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
          <div className="relative pl-6">
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
              <div className="cp-node flex items-start mb-6" key={i}>
                {/* Dot */}
                <div
                  className="cp-dot shrink-0"
                  style={{
                    width: 14,
                    height: 14,
                    borderRadius: "50%",
                    backgroundColor: n.accent,
                    border: "3px solid var(--card)",
                    boxShadow: `0 0 0 3px ${withAlpha(n.accent, 33)}`,
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
                    className="flex items-center gap-4  border p-4"
                    style={{
                      borderRadius: 8,
                      backgroundColor: "var(--card)",
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
                        className="font-bold mb-0"
                        style={{ fontSize: "13px", color: "var(--foreground)" }}
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
                          color: "var(--muted-foreground)",
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
