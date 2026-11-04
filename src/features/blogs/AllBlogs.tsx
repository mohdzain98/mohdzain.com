import { Suspense } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogRegistry } from "@/features/blogs/blogRegistry";
import PageFallback from "@/components/layout/PageFallback";

export default function AllBlogs() {
  const { blog = "" } = useParams<{ blog: string }>();
  const entry = blogRegistry[blog];

  if (!entry) return <Navigate to="/404" replace />;

  const BlogComponent = entry.component;

  return (
    <>
      <Helmet>
        <title>{entry.title}</title>
        <meta name="description" content={entry.description} />
        <link rel="canonical" href={`https://mohdzain.com/blogs/${blog}`} />
      </Helmet>
      <Suspense fallback={<PageFallback />}>
        <BlogComponent />
      </Suspense>
    </>
  );
}
