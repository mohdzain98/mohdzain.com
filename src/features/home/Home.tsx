import Intro from "@/features/home/components/Intro";
import Careerpath from "@/features/home/components/Careerpath";
import Projects from "@/features/home/components/Projects";
import Head from "@/features/home/components/Head";
import Research from "@/features/home/components/Research";
import Skills from "@/features/home/components/Skills";
import Achievements from "@/features/home/components/Achievements";
import IndustryPreview from "@/features/home/components/IndustryPreview";

export default function Home() {
  return (
    <>
      <Head />
      <Intro />
      <IndustryPreview />
      <Careerpath />
      <Skills />
      <Achievements />
      <Projects />
      <Research />
    </>
  );
}
