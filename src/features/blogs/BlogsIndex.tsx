import { Icon } from "@/components/icons/Icon";
import { Link } from "react-router-dom";
import "@/features/blogs/styles/blogs-index.css";
import { useMediaQuery } from "react-responsive";
import { blogRegistry } from "@/features/blogs/blogRegistry";
import { Helmet } from "react-helmet-async";

// Topics shown as pills even before a post is tagged with them.
const EXTRA_CATEGORIES = ["RAG"];

const Blogs = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const categories = [
    ...new Set([
      ...Object.values(blogRegistry).flatMap((entry) => entry.category || []),
      ...EXTRA_CATEGORIES,
    ]),
  ];
  const blogEntries = Object.entries(blogRegistry);
  return (
    <>
      <Helmet>
        <title>Blogs | Mohd Zain</title>
        <meta
          name="description"
          content="Articles, research notes, and write-ups by Mohd Zain on data science, AI, and software."
        />
        <meta name="robots" content="index,follow" />
      </Helmet>
      <div
        id="blogs"
        style={
          isTabletOrMobile
            ? {
                padding: "2%",
                backgroundColor: "var(--background)",
                minHeight: "100vh",
                paddingBottom: "80px",
              }
            : {
                padding: "2% 15%",
                backgroundColor: "var(--background)",
                minHeight: "100vh",
                paddingBottom: "80px",
              }
        }
      >
        <div className="container mx-auto px-4 p-6" style={{ marginTop: "1%" }}>
          <center>
            <h1
              style={{
                fontSize: "70px",
                marginBottom: "1rem",
                fontWeight: "lighter",
                color: "var(--primary)",
              }}
            >
              Zain's blog
            </h1>
          </center>
          <hr />
          <div className="my-6" id="top">
            <ul className="m-0 flex list-none flex-wrap items-center justify-center gap-2.5 p-0">
              {categories.map((category) => (
                <li key={category}>
                  <span className="bg-primary/10 text-primary inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold">
                    {category}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <hr />
          {blogEntries.map(([slug, entry]) => (
            <div key={slug} style={{ margin: "50px 0" }}>
              <h4>
                <Link
                  to={`/blogs/${slug}`}
                  style={{ textDecoration: "none" }}
                  className="head"
                >
                  {entry.title}
                </Link>
              </h4>
              {entry.externalLink ? (
                <div className="flex flex-row gap-2">
                  <a
                    href={entry.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <p className="text-primary font-extrabold">
                      <Icon name="book" className="size-[0.875em]" /> research
                      paper
                    </p>
                  </a>
                </div>
              ) : null}
              <ul className="mt-1" id="aboutBlog">
                {(Array.isArray(entry.excerpt)
                  ? entry.excerpt
                  : [entry.excerpt]
                ).map((item) => (
                  <li key={item}>
                    <p
                      className="justified"
                      style={{ color: "var(--foreground)" }}
                    >
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="inline mr-4 text-muted-foreground inf">
                {entry.readTime}
              </p>
              <p className="inline text-muted-foreground inf">{entry.date}</p>
              {entry.tags?.length ? (
                <ul className="m-0 mb-3 flex list-none flex-wrap gap-x-4 p-0">
                  {entry.tags.map((tag) => (
                    <li
                      key={tag}
                      className="inf text-muted-foreground inline-flex items-center gap-0.5"
                    >
                      <Icon name="hashtag" className="size-[0.75em]" />
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
              <hr />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;
