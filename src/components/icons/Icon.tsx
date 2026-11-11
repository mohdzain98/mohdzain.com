import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";
import javaLogo from "@/assets/logos/java.webp";
import {
  Activity,
  Award,
  ArrowLeft,
  ArrowRight,
  Bot,
  Book,
  BookOpen,
  Brain,
  Briefcase,
  Cable,
  Calendar,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleCheck,
  Clock,
  Cloud,
  Code,
  Coins,
  Columns3,
  Copy,
  Database,
  Download,
  Ellipsis,
  ExternalLink,
  File,
  FileCode,
  FileInput,
  FileText,
  FlaskConical,
  FolderOpen,
  Gauge,
  GraduationCap,
  Globe,
  Hash,
  Hexagon,
  Image,
  Inbox,
  Info,
  Landmark,
  Laptop,
  Layers,
  Leaf,
  ListChecks,
  Mail,
  MailOpen,
  Medal,
  MessagesSquare,
  Network,
  Paperclip,
  Percent,
  Play,
  ScanSearch,
  Scale,
  Rocket,
  Search,
  Server,
  Settings,
  Shapes,
  ShieldCheck,
  Sigma,
  SlidersHorizontal,
  Tag,
  Tags,
  Terminal,
  TriangleAlert,
  Trophy,
  WandSparkles,
  Waves,
  Workflow,
  Wrench,
  Zap,
  ChartArea,
  ChartColumn,
  ChartLine,
  ChartNoAxesColumn,
  ChartPie,
} from "lucide-react";
import {
  siBootstrap,
  siCelery,
  siDocker,
  siGit,
  siGooglechrome,
  siHtml5,
  siJavascript,
  siLinux,
  siNodedotjs,
  siPython,
  siReact,
  siShadcnui,
  siRedis,
  siTypescript,
  siYoutube,
} from "simple-icons";
import {
  AwsIcon,
  BrandIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
  XIcon,
} from "@/components/icons/Brands";

type SvgProps = SVGProps<SVGSVGElement>;

/** Raster logo rendered through the same slot as the SVG icons. */
const ImageIcon =
  (src: string): ComponentType<SvgProps> =>
  ({ className, style }) => (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={className}
      style={{ objectFit: "contain", ...(style as React.CSSProperties) }}
    />
  );

const brand =
  (path: string): ComponentType<SvgProps> =>
  (props) => <BrandIcon path={path} {...props} />;

/** Icon registry. Keys are the short slugs stored in data files. */
export const ICONS = {
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "arrow-up-right-from-square": ExternalLink,
  bolt: Zap,
  briefcase: Briefcase,
  rocket: Rocket,
  book: Book,
  "book-open": BookOpen,
  brain: Brain,
  calendar: Calendar,
  "chart-area": ChartArea,
  "chart-bar": ChartColumn,
  "chart-line": ChartLine,
  "chart-pie": ChartPie,
  "chart-simple": ChartNoAxesColumn,
  check: Check,
  "chevron-down": ChevronDown,
  "chevron-right": ChevronRight,
  "chevron-up": ChevronUp,
  "circle-check": CircleCheck,
  "circle-info": Info,
  clock: Clock,
  cloud: Cloud,
  code: Code,
  coins: Coins,
  comments: MessagesSquare,
  copy: Copy,
  database: Database,
  "diagram-project": Workflow,
  download: Download,
  ellipsis: Ellipsis,
  envelope: Mail,
  "envelope-open-text": MailOpen,
  file: File,
  "file-code": FileCode,
  "file-import": FileInput,
  "file-lines": FileText,
  flask: FlaskConical,
  "folder-open": FolderOpen,
  gauge: Gauge,
  "gauge-high": Gauge,
  gear: Settings,
  globe: Globe,
  "graduation-cap": GraduationCap,
  hashtag: Hash,
  "hexagon-nodes": Hexagon,
  image: Image,
  inbox: Inbox,
  "laptop-code": Laptop,
  "layer-group": Layers,
  leaf: Leaf,
  "list-check": ListChecks,
  "magnifying-glass": Search,
  "magnifying-glass-chart": ScanSearch,
  medal: Medal,
  "network-wired": Cable,
  paperclip: Paperclip,
  percent: Percent,
  play: Play,
  "ranking-star": Award,
  republican: Landmark,
  robot: Bot,
  "scale-balanced": Scale,
  "screwdriver-wrench": Wrench,
  server: Server,
  "shield-halved": ShieldCheck,
  sitemap: Network,
  sliders: SlidersHorizontal,
  "square-root-variable": Sigma,
  stream: Waves,
  "table-columns": Columns3,
  tag: Tag,
  tags: Tags,
  terminal: Terminal,
  "triangle-exclamation": TriangleAlert,
  trophy: Trophy,
  "user-graduate": GraduationCap,
  "vector-square": Shapes,
  "wand-magic-sparkles": WandSparkles,
  activity: Activity,
  // Brand logos (lucide has none)
  bootstrap: brand(siBootstrap.path),
  chrome: brand(siGooglechrome.path),
  docker: brand(siDocker.path),
  "git-alt": brand(siGit.path),
  github: GithubIcon,
  html5: brand(siHtml5.path),
  instagram: InstagramIcon,
  java: ImageIcon(javaLogo),
  js: brand(siJavascript.path),
  "square-js": brand(siJavascript.path),
  linkedin: LinkedinIcon,
  linux: brand(siLinux.path),
  "node-js": brand(siNodedotjs.path),
  python: brand(siPython.path),
  // shadcn/ui logo; "handle-bottom-right" is the slug used in the Skills data.
  shadcn: brand(siShadcnui.path),
  "handle-bottom-right": brand(siShadcnui.path),
  typescript: brand(siTypescript.path),
  aws: AwsIcon,
  celery: brand(siCelery.path),
  redis: brand(siRedis.path),
  react: brand(siReact.path),
  whatsapp: WhatsappIcon,
  "x-twitter": XIcon,
  youtube: brand(siYoutube.path),
} satisfies Record<string, ComponentType<SvgProps>>;

export type IconName = keyof typeof ICONS;

interface IconProps extends SvgProps {
  /** Slug from ICONS. Plain string so data files can hold it; unknown slugs render nothing. */
  name: IconName | (string & {});
}

export function Icon({ name, className = "size-4", ...props }: IconProps) {
  const Cmp = (ICONS as Record<string, ComponentType<SvgProps>>)[name];
  if (!Cmp) {
    if (import.meta.env.DEV) console.warn(`Unknown icon: ${name}`);
    return null;
  }
  return (
    <Cmp
      className={cn("inline-block shrink-0 align-[-0.125em]", className)}
      {...props}
    />
  );
}
