import { Suspense } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { blogRegistry } from "@/features/blogs/blogRegistry";
import PageFallback from "@/components/layout/PageFallback";

export default function AllExample() {
  const { blog = "" } = useParams<{ blog: string }>();
  const entry = blogRegistry[blog];

  if (!entry?.example) return <Navigate to="/404" replace />;

  const BlogExample = entry.example;

  return (
    <>
      <Helmet>
        <title>{entry.title} Example</title>
        <meta name="description" content={entry.description} />
      </Helmet>
      <Suspense fallback={<PageFallback />}>
        <BlogExample />
      </Suspense>
    </>
  );
}
