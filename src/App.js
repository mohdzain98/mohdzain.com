import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./components/Bars/Topbar";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/home/Home";
import Allprojects from "./pages/Allprojects";
import ScrollToTop from "./components/ui/ScrollToTop";
import Blogs from "./pages/Blogs";
import CimagesCrypt from "./pages/blogs/cryptosystem/CimagesCrypt";
import Gitrepos from "./pages/Gitrepos";
import Gnost from "./pages/Gnost";

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
          <Route
            exact
            path="/blogs/color-images-cryptosystem"
            element={<CimagesCrypt />}
          ></Route>
          <Route exact path="/gitrepos" element={<Gitrepos />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
