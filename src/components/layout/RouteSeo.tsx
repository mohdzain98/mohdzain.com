import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const ORIGIN = "https://mohdzain.com";

/**
 * Sets the canonical URL and og:url for the current route. Without this every
 * page inherited the homepage canonical from index.html, telling search engines
 * to treat all pages as duplicates of the home page.
 */
export default function RouteSeo() {
  const { pathname } = useLocation();
  // Unknown routes redirect to /404, which is noindex: no canonical there.
  if (pathname === "/404") return null;
  const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const url = `${ORIGIN}${path}`;
  return (
    <Helmet>
      <link rel="canonical" href={url} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
}
