import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/icons/Icon";
import SectionHeader from "@/components/layout/SectionHeader";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Achievement {
  icon: string;
  /** Accent chip, e.g. "1st Place". */
  highlight: string;
  /** Neutral chip next to it. */
  tag: string;
  title: string;
  subtitle: string;
  summary: React.ReactNode;
  detail: string;
  art: "trophy" | "medal";
  href?: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    icon: "trophy",
    highlight: "1st Place",
    tag: "Hackathon Winner",
    title: "Financial AI Hackathon Championship 2025 - 1st Place",
    subtitle: "LandingAI, New York | Team: LoanLens AI",
    summary: (
      <>
        Won 1st place at Financial AI Hackathon 2025 <strong>LandingAI</strong>{" "}
        by building an agentic AI system for loan underwriting.
      </>
    ),
    detail:
      "Automated document extraction, fraud detection, and decision intelligence with explainable AI workflows.",
    art: "trophy",
    href: "/achievements/landingai-financial-ai-hackathon",
  },
  {
    icon: "medal",
    highlight: "AIR 1579",
    tag: "",
    title: "GATE 2022",
    subtitle: "All India Rank 1579",
    summary:
      "Achieved AIR 1579 in the Graduate Aptitude Test in Engineering (GATE) 2022.",
    detail:
      "Paper Computer Science and Information Technology (CS) conducted by IIT Kharagpur.",
    art: "medal",
  },
];

/** Soft illustration on the right of each card (accent-tinted, decorative). */
function AchievementArt({
  kind,
  className,
}: {
  kind: "trophy" | "medal";
  className?: string;
}) {
  const fill = "color-mix(in srgb, var(--primary) 22%, transparent)";
  const strong = "color-mix(in srgb, var(--primary) 38%, transparent)";
  return (
    <svg
      viewBox="0 0 120 130"
      aria-hidden="true"
      className={cn("pointer-events-none", className)}
    >
      {kind === "trophy" ? (
        <>
          <g stroke={strong} strokeWidth="3" strokeLinecap="round">
            <line x1="60" y1="4" x2="60" y2="14" />
            <line x1="36" y1="10" x2="41" y2="19" />
            <line x1="84" y1="10" x2="79" y2="19" />
          </g>
          <path
            d="M30 34 H14 a4 4 0 0 0 -4 4 c0 18 10 30 26 33"
            fill="none"
            stroke={strong}
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M90 34 H106 a4 4 0 0 1 4 4 c0 18 -10 30 -26 33"
            fill="none"
            stroke={strong}
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M28 28 H92 V56 a32 32 0 0 1 -64 0 Z"
            fill={fill}
            stroke={strong}
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M60 38 l5.2 10.6 11.6 1.7 -8.4 8.2 2 11.6 -10.4 -5.5 -10.4 5.5 2 -11.6 -8.4 -8.2 11.6 -1.7 Z"
            fill={strong}
          />
          <rect
            x="52"
            y="86"
            width="16"
            height="16"
            fill={fill}
            stroke={strong}
            strokeWidth="3"
          />
          <rect
            x="38"
            y="102"
            width="44"
            height="12"
            rx="4"
            fill={fill}
            stroke={strong}
            strokeWidth="4"
          />
          <ellipse cx="60" cy="122" rx="40" ry="5" fill={fill} />
        </>
      ) : (
        <>
          <path
            d="M38 6 L60 52 L82 6 Z"
            fill={fill}
            stroke={strong}
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <circle
            cx="60"
            cy="82"
            r="32"
            fill={fill}
            stroke={strong}
            strokeWidth="4"
          />
          <circle
            cx="60"
            cy="82"
            r="22"
            fill="none"
            stroke={strong}
            strokeWidth="2"
            strokeDasharray="3 5"
          />
          <path
            d="M60 66 l4.6 9.4 10.4 1.5 -7.5 7.3 1.8 10.3 -9.3 -4.9 -9.3 4.9 1.8 -10.3 -7.5 -7.3 10.4 -1.5 Z"
            fill={strong}
          />
          <ellipse cx="60" cy="122" rx="36" ry="5" fill={fill} />
        </>
      )}
    </svg>
  );
}

function AchievementCard({ a }: { a: Achievement }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border bg-[var(--page-bg)] p-6 md:p-7">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="bg-primary/10 text-primary inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-sm font-bold">
          <Icon name={a.icon} className="size-4" />
          {a.highlight}
        </span>
        <span className="bg-muted text-foreground/80 inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-semibold">
          {a.tag}
        </span>
      </div>

      <h3 className="text-foreground m-0 text-lg leading-tight font-extrabold">
        {a.title}
      </h3>
      <p className="text-muted-foreground mt-1.5 mb-0 text-[13px]">
        {a.subtitle}
      </p>

      <div className="mt-5 flex items-center gap-6">
        <div className="min-w-0 grow">
          <p className="mb-2">{a.summary}</p>
          <p className="text-muted-foreground mt-2 mb-0 text-[13px]">
            {a.detail}
          </p>
        </div>
        <AchievementArt
          kind={a.art}
          className="hidden w-28 shrink-0 md:block"
        />
      </div>

      {a.href && (
        <div className="mt-auto pt-6">
          <Button asChild size="sm" className="rounded-lg px-5 text-base">
            <Link to={a.href}>
              View Details <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      )}
    </article>
  );
}

export default function Achievements() {
  return (
    <div className="px-4 py-12 lg:px-[9%]" id="achievements">
      <div className="container mx-auto mt-6 mb-6 px-4 md:px-2">
        <SectionHeader
          title="Achievements"
          subtitle="Highlights from competitive wins, academic milestones, and recognition earned along the way."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {ACHIEVEMENTS.map((a) => (
            <AchievementCard key={a.title} a={a} />
          ))}
        </div>
      </div>
    </div>
  );
}
