import { useEffect } from "react";
import Intro from "./Home/Intro";
import Careerpath from "./Home/Careerpath";
// import Skills from "./Home/Skills";
import Projects from "./Home/Projects";
import Social from "./Home/Social";
import Footer from "./Home/Footer";
import Head from "./Home/Head";
import Research from "./Home/Research";
import Skills2 from "./Home/Skills2";

const Home = (props) => {
  useEffect(() => {
    document.title = "Mohd Zain";
  }, []);

  const paper = {
    title:
      "Design of DNA-Based Color Image Cryptosystem and Its Security Analysis",
    authors: "Mohd Zain, Coauthor Name",
    abstract:
      "This paper presents a DNA-based encryption technique for color images using binary functions and DNA encoding...",
    publishedIn: "Journal of Cryptography, Vol. X",
    publishedDate: "June 2024",
    doi: "10.1234/example.doi",
    link: "https://example.com/fullpaper.pdf",
  };

  return (
    <>
      <Head setProgress={props.setProgress} />
      <Intro setProgress={props.setProgress} />
      <Research paper={paper} />
      <Careerpath setProgress={props.setProgress} />
      {/* <Skills setProgress={props.setProgress} /> */}
      <Skills2 setProgress={props.setProgress} />
      <Projects setProgress={props.setProgress} />
      <Social setProgress={props.setProgress} />
      <Footer setProgress={props.setProgress} />
    </>
  );
};

export default Home;
