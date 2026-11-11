import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useMediaQuery } from "react-responsive";
import { cn } from "@/lib/utils";

export interface RadarDatum {
  label: string;
  /** 0-100 */
  value: number;
}

const W = 520;
const H = 460;
const CX = W / 2;
const CY = H / 2;
const R = 140;
const LABEL_R = R + 30;
const RINGS = [0.25, 0.5, 0.75, 1];

function wrap(text: string, max = 13): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let cur = "";
  for (const w of words) {
    if ((cur + " " + w).trim().length > max && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = (cur + " " + w).trim();
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

const point = (i: number, n: number, r: number) => {
  const a = -Math.PI / 2 + (i / n) * Math.PI * 2;
  return { x: CX + Math.cos(a) * r, y: CY + Math.sin(a) * r, cos: Math.cos(a) };
};

/**
 * Radar (spider) chart with a soft glow, dashed rings and labelled axes.
 * `animateKey` replays the draw-in animation when it changes (e.g. tab switch).
 */
export default function RadarChart({
  data,
  animateKey,
  activeIndex = null,
  onHover,
  className,
}: {
  data: RadarDatum[];
  animateKey: string;
  activeIndex?: number | null;
  onHover?: (i: number | null) => void;
  className?: string;
}) {
  const shapeRef = useRef<SVGGElement>(null);
  const n = data.length;
  // Labels are scaled down with the SVG, so use bigger type on small screens.
  const compact = useMediaQuery({ query: "(max-width: 640px)" });
  const fontSize = compact ? 20 : 17;
  const lineGap = compact ? 22 : 19;

  useEffect(() => {
    const el = shapeRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // svgOrigin is in SVG viewBox coordinates, so the shape grows from the
    // chart centre. (A plain transformOrigin is measured from the shape's own
    // corner for SVG elements.) No overshooting ease, so 90% never leaves the ring.
    const origin = `${CX} ${CY}`;
    const tween = gsap.fromTo(
      el,
      { scale: 0.1, opacity: 0, rotate: -25, svgOrigin: origin },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        svgOrigin: origin,
        duration: 0.9,
        ease: "power3.out",
      },
    );
    return () => {
      tween.kill();
    };
  }, [animateKey]);

  const pts = data.map((d, i) => point(i, n, (R * d.value) / 100));
  const polygon = pts.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div className={cn("relative", className)}>
      {/* soft glow behind the chart */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 h-[68%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, color-mix(in srgb, var(--primary) 45%, transparent), transparent 70%)",
        }}
      />
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="relative h-auto w-full overflow-visible"
        role="img"
        aria-label={`Skill radar: ${data.map((d) => `${d.label} ${d.value}%`).join(", ")}`}
      >
        {/* rings */}
        {RINGS.map((f, i) => (
          <circle
            key={f}
            cx={CX}
            cy={CY}
            r={R * f}
            fill="none"
            stroke="var(--muted-foreground)"
            strokeOpacity={i === RINGS.length - 1 ? 0.45 : 0.35}
            strokeWidth={i === RINGS.length - 1 ? 1.2 : 1}
            strokeDasharray={i === RINGS.length - 1 ? undefined : "3 5"}
          />
        ))}
        {/* axes */}
        {data.map((_, i) => {
          const p = point(i, n, R);
          return (
            <line
              key={i}
              x1={CX}
              y1={CY}
              x2={p.x}
              y2={p.y}
              stroke="var(--muted-foreground)"
              strokeOpacity=".3"
            />
          );
        })}

        {/* data shape */}
        <g ref={shapeRef}>
          <polygon
            points={polygon}
            fill="var(--primary)"
            fillOpacity=".32"
            stroke="var(--primary)"
            strokeWidth="2.5"
            strokeLinejoin="round"
            style={{
              filter:
                "drop-shadow(0 0 10px color-mix(in srgb, var(--primary) 60%, transparent))",
            }}
          />
          {pts.map((p, i) => (
            <circle
              key={i}
              cx={p.x}
              cy={p.y}
              r={activeIndex === i ? 7 : 4}
              fill="var(--card)"
              stroke="var(--primary)"
              strokeWidth="2.5"
              style={{ transition: "r .2s ease" }}
            />
          ))}
        </g>

        {/* labels + hover targets */}
        {data.map((d, i) => {
          const p = point(i, n, LABEL_R);
          const anchor =
            p.cos > 0.3 ? "start" : p.cos < -0.3 ? "end" : "middle";
          const lines = wrap(d.label, compact ? 11 : 13);
          const startDy =
            p.y < CY - 10
              ? -(lines.length - 1) * 16
              : p.y > CY + 10
                ? 6
                : -(lines.length - 1) * (lineGap / 2) + 5;
          return (
            <text
              key={d.label}
              x={p.x}
              y={p.y + startDy}
              textAnchor={anchor}
              fontSize={fontSize}
              fontWeight={activeIndex === i ? 800 : 600}
              fill={
                activeIndex === i
                  ? "var(--foreground)"
                  : "var(--muted-foreground)"
              }
              className="cursor-pointer select-none"
              onMouseEnter={() => onHover?.(i)}
              onMouseLeave={() => onHover?.(null)}
            >
              {lines.map((l, k) => (
                <tspan key={k} x={p.x} dy={k === 0 ? 0 : lineGap}>
                  {l}
                </tspan>
              ))}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
