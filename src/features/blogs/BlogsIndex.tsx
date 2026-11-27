import { ArrowRight, Calendar } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SectionHeader from "@/components/layout/SectionHeader";
import { blogRegistry } from "@/features/blogs/blogRegistry";

const blogEntries = Object.entries(blogRegistry);
const breadcrumbs = [{ label: "Home", to: "/" }, { label: "Blog Posts" }];
const description =
  "Articles and research notes on data science, AI, and software engineering.";

export default function BlogsIndex() {
  return (
    <>
      <Helmet>
        <title>Blog Posts | Mohd Zain</title>
        <meta name="description" content={description} />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <div className="min-h-screen bg-background pt-8 pb-20">
        <div className="mx-auto w-full max-w-[1200px] px-6 py-8 md:px-12">
          <Breadcrumbs className="mb-7" items={breadcrumbs} />
          <SectionHeader
            as="h1"
            title="Blog Posts"
            subtitle={description}
            className="mb-6"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {blogEntries.map(([slug, entry]) => (
              <article
                key={slug}
                className="flex min-w-0 flex-col gap-2 rounded-lg border bg-card p-5 text-card-foreground sm:p-6"
              >
                <p className="mb-0 flex flex-wrap items-center gap-x-2 text-xs text-muted-foreground">
                  <Calendar aria-hidden="true" className="size-4" />
                  {entry.date}
                  <span aria-hidden="true">·</span>
                  {entry.readTime}
                </p>
                <h2 className="text-xl leading-snug font-semibold tracking-tight">
                  {entry.title}
                </h2>
                <p className="mb-0 text-sm text-muted-foreground">
                  {entry.description}
                </p>
                <ul className="mb-0 flex list-none flex-wrap justify-start gap-2 ps-0 pt-[2px]">
                  {entry.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded bg-muted px-2 py-0.5 text-xs"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <footer className="mt-auto flex flex-wrap items-center justify-start gap-x-4 gap-y-2">
                  <Link
                    to={`/blogs/${slug}`}
                    aria-label={`Read more about ${entry.title}`}
                    className="inline-flex min-h-8 cursor-pointer items-center gap-1.5 rounded-sm text-sm font-medium text-card-foreground no-underline hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  >
                    <ArrowRight aria-hidden="true" className="size-4" />
                    Read more
                  </Link>
                  {entry.externalLink ? (
                    <a
                      href={entry.externalLink}
                      className="text-sm text-muted-foreground underline"
                    >
                      Research paper
                    </a>
                  ) : null}
                </footer>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
