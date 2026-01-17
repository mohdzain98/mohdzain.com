import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogRegistry } from "./blogRegistry";

const AllBlogs = () => {
  const { blog } = useParams();
  const entry = blogRegistry[blog];

  if (!entry) {
    return <Navigate to="/404" replace />;
  }

  const BlogComponent = entry.component;

  return (
    <>
      <Helmet>
        <title>{entry.title}</title>
        <meta name="description" content={entry.description} />
        <link rel="canonical" href={`https://mohdzain.com/blogs/${blog}`} />
      </Helmet>

      <BlogComponent />
    </>
  );
};

export default AllBlogs;
