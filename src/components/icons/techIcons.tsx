import type { ComponentType, SVGProps } from "react";
import { Brain, Bot, Code, Terminal } from "lucide-react";
import {
  siApachetomcat,
  siCss,
  siFastapi,
  siFlask,
  siHtml5,
  siKeras,
  siLanggraph,
  siMongodb,
  siMysql,
  siNginx,
  siPandas,
  siPostgresql,
  siPhp,
  siPypi,
  siPython,
  siReact,
  siRedis,
  siCelery,
  siScikitlearn,
  siSqlite,
  siTensorflow,
  siWhatsapp,
} from "simple-icons";
import { AwsIcon, BrandIcon } from "./Brands";
import langfuseLogo from "@/assets/logos/langfuse.webp";
import javaLogo from "@/assets/logos/java.webp";
import langchainLogo from "@/assets/logos/langchain.webp";

type SvgProps = SVGProps<SVGSVGElement>;
interface TechIconDef {
  Icon: ComponentType<SvgProps>;
  /** Brand color; omitted for generic icons (they use the text color). */
  color?: string;
}

const brand = (i: { path: string; hex: string }): TechIconDef => ({
  Icon: (props) => <BrandIcon path={i.path} {...props} />,
  color: `#${i.hex}`,
});

/** Full-color raster logo, for brands the icon library does not ship. */
const image = (src: string): TechIconDef => ({
  Icon: ({ className, style }) => (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className={className}
      style={{ ...style, objectFit: "contain" }}
    />
  ),
});

const ML: TechIconDef = { Icon: Brain };

/** Tech name (lowercase) -> icon. Unknown names fall back to a generic code icon. */
const TECH_ICONS: Record<string, TechIconDef> = {
  python: brand(siPython),
  pypi: brand(siPypi),
  langchain: image(langchainLogo),
  langgraph: brand(siLanggraph),
  "langchain/langgraph": image(langchainLogo),
  langfuse: image(langfuseLogo),
  flask: brand(siFlask),
  fastapi: brand(siFastapi),
  nginx: brand(siNginx),
  redis: brand(siRedis),
  celery: brand(siCelery),
  postgresql: brand(siPostgresql),
  aws: { Icon: AwsIcon },
  react: brand(siReact),
  "mern stack": brand(siMongodb),
  mysql: brand(siMysql),
  sqlite: brand(siSqlite),
  pandas: brand(siPandas),
  sklearn: brand(siScikitlearn),
  tensorflow: brand(siTensorflow),
  keras: brand(siKeras),
  html: brand(siHtml5),
  css: brand(siCss),
  php: brand(siPhp),
  java: image(javaLogo),
  jsp: brand(siApachetomcat),
  tomcat: brand(siApachetomcat),
  whatsapp: brand(siWhatsapp),
  openclaw: { Icon: Bot },
  himalaya: { Icon: Terminal },
  ann: ML,
  cnn: ML,
  rnn: ML,
  lstm: ML,
};

const FALLBACK: TechIconDef = { Icon: Code };

export function getTechIcon(name: string): TechIconDef {
  return TECH_ICONS[name.trim().toLowerCase()] ?? FALLBACK;
}
