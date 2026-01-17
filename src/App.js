import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Topbar from "./components/Bars/Topbar";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/home/Home";
import Allprojects from "./pages/Allprojects";
import ScrollToTop from "./components/ui/ScrollToTop";
import Blogs from "./pages/Blogs";
import Gitrepos from "./pages/Gitrepos";
import Gnost from "./pages/Gnost";
import Wrong from "./pages/Wrong";
import AllBlogs from "./pages/blogs/AllBlogs";
import AllExample from "./pages/blogs/AllExample";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Topbar />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/projects" element={<Allprojects />}></Route>
          <Route exact path="/projects/gnost" element={<Gnost />}></Route>
          <Route exact path="/blogs" element={<Blogs />}></Route>
          <Route exact path="/blogs/:blog" element={<AllBlogs />}></Route>
          <Route
            exact
            path="/blogs/:blog/example"
            element={<AllExample />}
          ></Route>
          <Route exact path="/gitrepos" element={<Gitrepos />}></Route>
          <Route exact path="/404" element={<Wrong />}></Route>
          <Route path="*" element={<Navigate to="/404" />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
