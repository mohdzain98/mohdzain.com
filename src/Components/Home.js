import React,{useEffect} from 'react'
import Intro from './Home/Intro'
import Careerpath from './Home/Careerpath'
import Skills from './Home/Skills'
import Projects from './Home/Projects'
import Social from './Home/Social'
import Footer from './Home/Footer'

const Home = (props) => {
  useEffect(() => {
    document.title = "Mohd Zain"; 
  }, [])
  return (
    <>
    <Intro setProgress={props.setProgress} />
    <Careerpath setProgress={props.setProgress}/>
    <Skills setProgress={props.setProgress}/>
    <Projects setProgress={props.setProgress}/>
    <Social setProgress={props.setProgress}/>
    <Footer setProgress={props.setProgress}/>
    </>
  )
}

export default Home
