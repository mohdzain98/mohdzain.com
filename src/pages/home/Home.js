import Intro from "./components/Intro";
import Careerpath from "./components/Careerpath";
// import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Social from "./components/Social";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Research from "./components/Research";
import Skills2 from "./components/Skills2";
import Achivements from "./components/Achivements";
import Exp from "./components/Exp";

const Home = (props) => {
  return (
    <>
      <Head setProgress={props.setProgress} />
      <Intro setProgress={props.setProgress} />
      <Research />
      <Careerpath setProgress={props.setProgress} />
      {/* <Skills setProgress={props.setProgress} /> */}
      <Skills2 setProgress={props.setProgress} />
      <Achivements setProgress={props.setProgress} />
      <Projects setProgress={props.setProgress} />
      <Exp setProgress={props.setProgress} />
      <Social setProgress={props.setProgress} />
      <Footer setProgress={props.setProgress} />
    </>
  );
};

export default Home;
