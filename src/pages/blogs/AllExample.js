import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogRegistry } from "./blogRegistry";

const AllExample = () => {
  const { blog } = useParams();
  const entry = blogRegistry[blog];

  if (!entry) {
    return <Navigate to="/404" replace />;
  }
  if (!entry.example) {
    return <Navigate to="/404" replace />;
  }

  const BlogExample = entry.example;
  return (
    <>
      <Helmet>
        <title>{entry.title} Example</title>
        <meta name="description" content={entry.description} />
        <link
          rel="canonical"
          href={`https://mohdzain.com/blogs/${blog}/example`}
        />
      </Helmet>

      <BlogExample />
    </>
  );
};

export default AllExample;
