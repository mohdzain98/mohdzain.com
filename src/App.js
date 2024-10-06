import './App.css';
import{BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Topbar from './Components/Bars/Topbar';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Allprojects from './Components/Allprojects';
import ScrollToTop from './Components/ScrollToTop';
import Blogs from './Components/Blogs';
import CimagesCrypt from './Components/Blogs/CimagesCrypt';
import Gitrepos from './Components/Gitrepos';

function App() {
  return (
    <>
    <Router>
      <ScrollToTop/>
      <Topbar/>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path='/projects' element={<Allprojects/>}></Route>
        <Route exact path='/blogs' element={<Blogs/>}></Route>
        <Route exact path='/blogs/color-images-cryptosystem' element={<CimagesCrypt/>}></Route>
        <Route exact path='/gitrepos' element={<Gitrepos/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
