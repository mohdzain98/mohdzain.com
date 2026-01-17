import { Link } from "react-router-dom";
import "./home/Styling/Blogs.css";
import { useMediaQuery } from "react-responsive";
import { blogRegistry } from "./blogs/blogRegistry";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const categories = [
    ...new Set(
      Object.values(blogRegistry).flatMap((entry) => entry.category || [])
    ),
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
        style={isTabletOrMobile ? { padding: "2%" } : { padding: "2% 15%" }}
      >
        <div className="container p-4" style={{ marginTop: "1%" }}>
          <center>
            <p
              style={{
                fontSize: "70px",
                fontWeight: "lighter",
                color: "maroon",
              }}
            >
              Zain's blog
            </p>
          </center>
          <hr />
          <div className="my-4" id="top">
            <ul
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                rowGap: "0px",
                columnGap: "40px",
                flexWrap: "wrap",
                padding: "0",
              }}
            >
              {categories.map((category) => (
                <li key={category}>
                  <p className="topic me-2">{category}</p>
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
                <div className="d-flex flex-row gap-2">
                  <a
                    href={entry.externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <p className="text-primary fw-bolder">
                      <i className="fa-solid fa-book fa-sm"></i> research paper
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
                    <p className="justified" style={{ color: "black" }}>
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
              <p className="d-inline me-3 text-muted inf">{entry.readTime}</p>
              <p className="d-inline text-muted inf">{entry.date}</p>
              {entry.tags?.length ? (
                <ul className="list-inline">
                  {entry.tags.map((tag) => (
                    <li key={tag} className="list-inline-item inf text-muted">
                      <i className="fa-solid fa-hashtag fa-xs"></i>
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
