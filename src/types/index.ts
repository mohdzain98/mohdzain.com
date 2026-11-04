import type { IconName } from "@/components/icons/Icon";

export type { IconName };

/** Tailwind-friendly color keys used by data-driven buttons/badges. */
export type ButtonTone =
  | "primary"
  | "danger"
  | "dark"
  | "success"
  | "secondary";

export interface Project {
  Name: string;
  Desc: string;
  type: string;
  Techs: string[];
  Tools: string[];
  Live: string;
  href: string;
  details: string[];
}

export interface ProjectAction {
  name: string;
  link: string;
  icon: IconName;
  bg: ButtonTone;
  ref: "_self" | "_blank";
}

export interface ProjectEntry {
  Name: string;
  category: string;
  type: string;
  Desc: string;
  Techs: string[];
  Tools: string[];
  img: string;
  Live?: string;
  button: ProjectAction[];
}

export interface Experience {
  section: string;
  type: string;
  name: string;
  desc: string;
  techs: string[];
  icon: IconName;
}
