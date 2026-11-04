import {
  Briefcase,
  FlaskConical,
  FolderGit2,
  Route,
  Trophy,
  User,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface NavLinkItem {
  label: string;
  to: string;
  /** Path prefixes (or exact paths) that mark this link active. */
  match: string[];
  external?: boolean;
}

export const HOME_SECTIONS: { label: string; id: string; icon: LucideIcon }[] =
  [
    { label: "About Me", id: "about", icon: User },
    { label: "Industry", id: "experience", icon: Briefcase },
    { label: "Career Path", id: "cp", icon: Route },
    { label: "Skills", id: "skill", icon: Wrench },
    { label: "Achievements", id: "achievements", icon: Trophy },
    { label: "Projects", id: "projects", icon: FolderGit2 },
    { label: "Research", id: "research", icon: FlaskConical },
  ];

export const NAV_LINKS: NavLinkItem[] = [
  {
    label: "Experience",
    to: "/experience",
    match: ["/experience", "/industry"],
  },
  { label: "Projects", to: "/projects", match: ["/projects"] },
  { label: "Blog", to: "/blogs", match: ["/blogs"] },
];

export const RESUME_URL =
  "https://drive.google.com/file/d/1_fD52n9t2l91nAGw3rDiKv17V2mo9lKK/view?usp=sharing";

export const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/zainatlink/",
  github: "https://github.com/mohdzain98",
  instagram: "https://www.instagram.com/m0hd.zain/",
  x: "https://x.com/M0hdZain",
} as const;

export function isActive(pathname: string, match: string[]): boolean {
  return match.some((m) => pathname === m || pathname.startsWith(`${m}/`));
}
