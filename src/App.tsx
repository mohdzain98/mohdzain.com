import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import RouteSeo from "@/components/layout/RouteSeo";
import PageFallback from "@/components/layout/PageFallback";
import Home from "@/features/home/Home";

// Everything except the home page is split into its own chunk.
const AllProjects = lazy(() => import("@/features/projects/AllProjects"));
const Gnost = lazy(() => import("@/features/projects/Gnost"));
const AxisSpending = lazy(() => import("@/features/projects/AxisSpending"));
const AxisSpendingSetup = lazy(
  () => import("@/features/projects/AxisSpendingSetup"),
);
const BlogsIndex = lazy(() => import("@/features/blogs/BlogsIndex"));
const AllBlogs = lazy(() => import("@/features/blogs/AllBlogs"));
const AllExample = lazy(() => import("@/features/blogs/AllExample"));
const Experience = lazy(() => import("@/features/experience/Experience"));
const Industry = lazy(() => import("@/features/industry/Industry"));
const LoanLensAI = lazy(() => import("@/features/achievements/LoanLensAI"));
const NotFound = lazy(() => import("@/features/errors/NotFound"));

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <RouteSeo />
      <Topbar />
      {/* Column layout keeps the footer at the bottom on short pages */}
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<AllProjects />} />
              <Route path="/projects/gnost" element={<Gnost />} />
              <Route
                path="/projects/axis-spending-openclaw"
                element={<AxisSpending />}
              />
              <Route
                path="/projects/axis-spending-openclaw/setup"
                element={<AxisSpendingSetup />}
              />
              <Route path="/blogs" element={<BlogsIndex />} />
              <Route path="/blogs/:blog" element={<AllBlogs />} />
              <Route path="/blogs/:blog/example" element={<AllExample />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/industry" element={<Industry />} />
              <Route
                path="/achievements/landingai-financial-ai-hackathon"
                element={<LoanLensAI />}
              />
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
