import { buttonVariants } from "@/components/ui/button";
import { Icon } from "@/components/icons/Icon";
import { cn } from "@/lib/utils";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useMediaQuery } from "react-responsive";

const Gnost = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
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
          content="GNOST is a python package that helps understand unfamiliar
                  codebases by automatically identifying entry points, execution
                  flow, and core logic."
        />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <div id="gnost">
        <div
          className={`container mx-auto px-4 pt-4 pb-6 ${
            isTabletOrMobile ? "px-4" : "px-0"
          }`}
          style={{
            maxWidth: isTabletOrMobile ? "100%" : "1200px",
            marginTop: isTabletOrMobile ? "20px" : "30px",
          }}
        >
          <Breadcrumbs
            items={[
              { label: "Home", to: "/" },
              { label: "Projects", to: "/projects" },
              { label: "Gnost" },
            ]}
          />
          <div>
            <h2 style={{ color: "var(--topic)" }}>
              GNOST - Codebase Knowledge
            </h2>
            <hr style={{ color: "var(--foreground)", height: "2px" }} />
          </div>
          <div className="grid grid-cols-12 gap-x-6">
            <div className="col-span-12 lg:col-span-8">
              <div className="py-6 pr-6">
                <p style={{ textAlign: "justify" }}>
                  GNOST is a python package that helps understand unfamiliar
                  codebases by automatically identifying entry points, execution
                  flow, and core logic. It provides a quick starting point for
                  navigating large repositories and building a mental model of
                  how a project works.
                </p>
                <p style={{ textAlign: "justify" }}>
                  The name GNOST is inspired by{" "}
                  <span className="italic font-extrabold">gnosis</span> (Greek:
                  γνῶσις) the Greek word for knowledge. It becomes GNOST to
                  emphasize{" "}
                  <span className="italic font-extrabold">code knowledge</span>
                </p>
                <h5 className="mt-6">What GNOST Does</h5>
                <ul className="mb-4">
                  <li>Detects where execution starts</li>
                  <li>Infers high-level execution flow</li>
                  <li>Identifies hotspot files (most important code)</li>
                  <li>Identify caution codes</li>
                  <li>Generates onboarding documentation</li>
                  <li>Produces Mermaid flow diagrams</li>
                  <li>Works across multiple languages</li>
                </ul>
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
            <div className="col-span-12 lg:col-span-4">
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
              <div className="rounded-lg border bg-card text-card-foreground  mt-4">
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
