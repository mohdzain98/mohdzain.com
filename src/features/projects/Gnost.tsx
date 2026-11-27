import { ArrowRight } from "lucide-react";
import { Helmet } from "react-helmet-async";
import folderView from "@/assets/Projects/gnost/viewer_folders.webp";
import fileView from "@/assets/Projects/gnost/viewer_file_hover.webp";
import reportView from "@/assets/Projects/gnost/report_example.webp";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import CodeBlock from "@/components/layout/CodeBlock";
import SectionHeader from "@/components/layout/SectionHeader";
import ExpandableImage from "@/components/ui/ExpandableImage";
import { buttonVariants } from "@/components/ui/button";

const repo = "https://github.com/mohdzain98/gnost";
const docs = "https://gnost.readthedocs.io/en/latest";
const title = "GNOST — Codebase Knowledge";
const description =
  "A static analysis CLI for onboarding to unfamiliar codebases, exploring dependencies, and reviewing code quality.";
const guideLinkClass =
  "inline-flex items-center gap-1.5 text-sm font-medium text-foreground no-underline hover:opacity-75";

const packageLinks = [
  ["npm", "https://www.npmjs.com/package/gnost-cli"],
  ["Docker", repo + "/pkgs/container/gnost"],
  [
    "Maven Central",
    "https://central.sonatype.com/artifact/io.github.mohdzain98/gnost-maven-plugin",
  ],
];

const headerLinks = [
  ["GitHub", repo],
  ["Documentation", docs + "/"],
  ["Example reports", docs + "/gallery.html"],
  ["Analysis", docs + "/analyze.html"],
  ["Action Workflow", docs + "/ci.html"],
];

const installationLinks = [
  ["PyPI", "https://pypi.org/project/gnost/"],
  ...packageLinks,
  [
    "GitHub Action",
    "https://github.com/marketplace/actions/gnost-codebase-onboarding-and-quality-gate",
  ],
];

export default function Gnost() {
  return (
    <>
      <Helmet>
        <title>{title} | Mohd Zain</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <article className="mx-auto w-full max-w-[1000px] px-6 pt-16 pb-20 md:px-12 [&_section]:mt-10 [&_section]:p-0 [&_h2]:mb-4 [&_h2]:text-xl [&_h2]:font-bold">
        <Breadcrumbs
          className="mb-7"
          items={[
            { label: "Home", to: "/" },
            { label: "Projects", to: "/projects" },
            { label: "GNOST" },
          ]}
        />
        <SectionHeader
          as="h1"
          title={title}
          subtitle={description}
          className="mb-3 md:mb-3"
        />
        <div className="flex flex-wrap gap-2">
          {headerLinks.map(([label, href]) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({
                variant: "secondary",
                className: "bg-foreground/10 hover:bg-foreground/15",
              })}
            >
              {label}
            </a>
          ))}
        </div>

        <section>
          <h2>Onboard to a codebase</h2>
          <p>
            Start with a local checkout or a Git repository URL. GNOST reads
            source and project configuration without executing the project. It
            finds likely entry points, traces imports, and identifies files
            worth reading first. It also extracts setup, run, and test
            instructions and environment variable names from files such as
            package manifests, Makefiles, and example environment files.
          </p>
          <p>
            Onboarding writes an <code>ONBOARD.md</code> guide,{" "}
            <code>insights.json</code>, and Mermaid diagrams under{" "}
            <code>.gnost/</code>. GNOST supports Python, JavaScript, TypeScript,
            and Java using Python’s AST and Tree-sitter parsers. It detects HTTP
            routes in supported frameworks, flags circular imports, and traces
            function-level paths for Python.
          </p>
          <CodeBlock
            id="gnost-onboard"
            language="bash"
            code={"pip install gnost\ngnost onboard .\ngnost open flow"}
          />
        </section>

        <section>
          <h2>Explore dependencies in the browser</h2>
          <p>
            Start with a folder map, drill into a folder, and select a file to
            see what it imports and what depends on it. Hovering highlights
            connected nodes. The explorer also supports zoom, theme switching,
            and PNG export. These screenshots show GNOST analyzing its own
            source.
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <figure>
              <ExpandableImage
                src={folderView}
                alt="GNOST folder dependency overview"
                width={1500}
                height={900}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground">
                Folder dependency overview
              </figcaption>
            </figure>
            <figure>
              <ExpandableImage
                src={fileView}
                alt="GNOST file view highlighting a selected file and its connections"
                width={1500}
                height={900}
              />
              <figcaption className="mt-2 text-sm text-muted-foreground">
                File-level connections
              </figcaption>
            </figure>
          </div>
        </section>

        <section>
          <h2>Review code quality and change impact</h2>
          <p>
            <code>gnost analyze</code> scores maintainability, robustness,
            observability, and readability, then ranks findings by priority.{" "}
            <code>gnost changes</code> compares a change with a Git ref and
            reports affected files, routes, and new dependency cycles.
          </p>
          <CodeBlock
            id="gnost-review"
            language="bash"
            code={
              "gnost analyze . --parallel -o\ngnost open report\ngnost changes origin/main"
            }
          />
          <figure className="mx-auto my-6 max-w-3xl">
            <ExpandableImage
              src={reportView}
              alt="GNOST code quality report with scores and prioritized findings"
              width={2574}
              height={1238}
            />
            <figcaption className="mt-2 text-sm text-muted-foreground">
              Example code quality report
            </figcaption>
          </figure>
          <p>
            In CI, set a minimum quality score with <code>--fail-under</code> or
            export findings as SARIF. The GitHub Action can summarize change
            impact in a pull request, and an optional
            <code> .gnost.toml</code> file controls exclusions, weights, and
            thresholds.
          </p>
          <a
            href={docs + "/ci.html"}
            target="_blank"
            rel="noopener noreferrer"
            className={guideLinkClass}
          >
            Read the CI Guide{" "}
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </section>

        <section>
          <h2>Installation channels</h2>
          <p>
            GNOST is available through pip, uv, pipx, npm, Docker, and Maven.
            The npm package bundles standalone binaries for Apple silicon macOS,
            x86-64 Linux, and x86-64 Windows. Maven exposes GNOST commands as
            build goals.
          </p>
          <CodeBlock
            id="gnost-npx"
            language="bash"
            code="npx gnost-cli onboard ."
          />
          <ul className="mt-4 flex list-none flex-wrap gap-2 p-0">
            {installationLinks.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={buttonVariants({
                    variant: "secondary",
                    size: "sm",
                  })}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={docs + "/install.html"}
            target="_blank"
            rel="noopener noreferrer"
            className={guideLinkClass}
          >
            Read the Installation Guide{" "}
            <ArrowRight aria-hidden="true" className="size-4" />
          </a>
        </section>
      </article>
    </>
  );
}
