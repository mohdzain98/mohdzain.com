import { buttonVariants } from "@/components/ui/button";
import { Icon } from "@/components/icons/Icon";
import { cn } from "@/lib/utils";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import SectionHeader from "@/components/layout/SectionHeader";

const FEATURES = [
  {
    icon: "play",
    title: "Entry Point Detection",
    desc: "Detects where execution starts in the codebase.",
  },
  {
    icon: "diagram-project",
    title: "Execution Flow",
    desc: "Infers the high-level execution flow from those entry points.",
  },
  {
    icon: "ranking-star",
    title: "Hotspot Files",
    desc: "Identifies the most important files in the code.",
  },
  {
    icon: "triangle-exclamation",
    title: "Caution Codes",
    desc: "Flags the code that needs extra care before you change it.",
  },
  {
    icon: "file-lines",
    title: "Onboarding Documentation",
    desc: "Generates onboarding documentation for the repository.",
  },
  {
    icon: "sitemap",
    title: "Mermaid Flow Diagrams",
    desc: "Produces Mermaid diagrams of the execution flow.",
  },
  {
    icon: "code",
    title: "Multi-Language",
    desc: "Works across multiple programming languages.",
  },
];

const Gnost = () => {
  const [copied, setCopied] = useState(false);
  const command = "pip install gnost";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <>
      <Helmet>
        <title>GNOST - Codebase Knowledge | Mohd Zain</title>
        <meta
          name="description"
          content="GNOST is a Python package that helps you understand unfamiliar codebases by finding entry points, execution flow, and core logic."
        />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <div id="gnost" className="bg-background min-h-screen pt-8 pb-20">
        <div className="mx-auto w-full max-w-[900px] px-6 py-8 md:px-0">
          <Breadcrumbs
            className="mb-7"
            items={[
              { label: "Home", to: "/" },
              { label: "Projects", to: "/projects" },
              { label: "Gnost" },
            ]}
          />
          <SectionHeader
            as="h1"
            title="GNOST - Codebase Knowledge"
            subtitle="A Python package that helps you understand unfamiliar codebases by finding entry points, execution flow, and core logic."
            className="mb-6"
          />
          <div>
            <div>
              <div className="pb-6">
                <p style={{ textAlign: "left" }}>
                  GNOST is a python package that helps understand unfamiliar
                  codebases by automatically identifying entry points, execution
                  flow, and core logic. It provides a quick starting point for
                  navigating large repositories and building a mental model of
                  how a project works.
                </p>
                <p style={{ textAlign: "left" }}>
                  The name GNOST is inspired by{" "}
                  <span className="italic font-extrabold">gnosis</span> (Greek:
                  γνῶσις) the Greek word for knowledge. It becomes GNOST to
                  emphasize{" "}
                  <span className="italic font-extrabold">code knowledge</span>
                </p>
                <h5 className="mt-6 mb-3">What GNOST Does</h5>
                <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                  {FEATURES.map((f, i) => (
                    <div
                      key={f.title}
                      className="rounded-lg bg-card text-card-foreground border h-full p-4"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 text-primary flex size-[38px] shrink-0 items-center justify-center rounded-full">
                          <Icon name={f.icon} className="size-[14px]" />
                        </div>
                        <div>
                          <div className="mb-1 text-[14px] font-semibold">
                            <span className="text-primary mr-1">
                              {String(i + 1).padStart(2, "0")}
                            </span>{" "}
                            {f.title}
                          </div>
                          <div className="text-muted-foreground text-[13px]">
                            {f.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <h5 className="mt-6">Supported Languages</h5>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-600/10 text-green-600 dark:text-green-400">
                    <Icon name="python" className="size-[1em] mr-2" />
                    Python
                  </span>
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-600/10 text-green-600 dark:text-green-400">
                    <Icon name="square-js" className="size-[1em] mr-2" />
                    JavaScript
                  </span>
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-600/10 text-green-600 dark:text-green-400">
                    <Icon name="code" className="size-[1em] mr-2" />
                    TypeScript
                  </span>
                  <span className="inline-flex items-center px-2 py-1 text-xs font-medium rounded-full bg-green-600/10 text-green-600 dark:text-green-400">
                    <Icon name="java" className="size-[1em] mr-2" />
                    Java
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-1 items-start gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-card text-card-foreground border ">
                <div className="p-4">
                  <h5 className="">
                    <Icon name="paperclip" className="size-[1em] mr-2" />
                    Quick Links
                  </h5>
                  <p className="text-muted-foreground font-bold">
                    Access the full documentation, PyPI package page and github
                    repo.
                  </p>
                  <div className="grid gap-4">
                    <a
                      className={cn(
                        buttonVariants({ variant: "default", size: "sm" }),
                        "bg-sky-600 text-white hover:bg-sky-700",
                      )}
                      href="https://gnost.readthedocs.io"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon name="file" className="size-[1em] mr-2" />
                      Full Documentation
                    </a>
                    <a
                      className={cn(
                        buttonVariants({ variant: "default", size: "sm" }),
                        "bg-green-600 text-white hover:bg-green-700",
                      )}
                      href="https://pypi.org/project/gnost"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon name="download" className="size-[1em] mr-2" />
                      PyPI Package
                    </a>
                    <a
                      className={cn(
                        buttonVariants({ variant: "default", size: "sm" }),
                        "bg-neutral-900 text-white hover:bg-neutral-700 dark:bg-neutral-100 dark:text-neutral-900",
                      )}
                      href="https://github.com/mohdzain98/gnost"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon name="github" className="size-[1em] mr-2" />
                      Source
                    </a>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground">
                <div className="p-4">
                  <h5 className="">
                    <Icon
                      name="download"
                      className="size-[0.875em] mr-2 mb-2"
                    />
                    Installation
                  </h5>
                  <div
                    className="relative bg-muted border rounded-md p-4"
                    style={{ maxWidth: "400px" }}
                  >
                    {/* The Code */}
                    <code className="text-foreground">{command}</code>

                    {/* The Button: position-absolute to float it right */}
                    <button
                      onClick={handleCopy}
                      className={cn(
                        buttonVariants({ variant: "ghost", size: "sm" }),
                        "absolute top-1/2 right-0 -translate-y-1/2 mr-2",
                      )}
                      style={{ fontSize: "0.8rem" }}
                      title="Copy to clipboard"
                    >
                      {/* Toggle Text or Icon based on state */}
                      {copied ? (
                        <span>
                          <Icon name="check" className="size-[1em]" /> Copied!
                        </span>
                      ) : (
                        <span>
                          <Icon name="copy" className="size-[1em]" /> Copy
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gnost;
