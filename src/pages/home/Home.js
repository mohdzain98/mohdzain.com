import Intro from "./components/Intro";
import Careerpath from "./components/Careerpath";
import Projects from "./components/Projects";
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
      <Exp setProgress={props.setProgress} />
      <Careerpath setProgress={props.setProgress} />
      <Skills2 setProgress={props.setProgress} />
      <Achivements setProgress={props.setProgress} />
      <Projects setProgress={props.setProgress} />
      <Research />
      <Footer setProgress={props.setProgress} />
    </>
  );
};

export default Home;
