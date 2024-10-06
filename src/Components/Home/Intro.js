import React from 'react'
import '../Styling/Intro.css'
import {Link} from 'react-router-dom'
import 'animate.css'
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useMediaQuery } from 'react-responsive'
import TypingEffect from './TypingEffect';

const Intro = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  return (
    <section className='home'>
        <div className='image'>
            <img src={require('../../Assets/zain.JPG')}  alt="altpdf"  width={330} height={330} style={{borderRadius:'50%'}}/>
        </div>
        <div className='content' id='con'>
          <AnimatedOnScroll animationIn="animate__animated animate__fadeInDown">
            <h2 className='name' style={isTabletOrMobile?{fontSize:'46px'}:{}}><span style={{fontSize:"30px"}}>Hi! I'm</span> Mohd Zain</h2>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="animate__animated animate__fadeInDown">
            <h5 className='title'><span>Currently,</span> <TypingEffect text='Data Science Intern at Sigmoid Analytics' speed={50}/></h5>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="animate__animated animate__fadeInLeft">
            <p style={{textAlign:'justify'}} className='mt-4'>I hold an M.Tech in Data Analytics from, <Link to={'https://iitism.ac.in'} style={{textDecoration:'none',color:'red'}} target='_blank' rel="noopener">IIT (ISM) Dhanbad</Link>, with a deep interest in Machine Learning, Deep Learning, and ML-based web application development. My experience spans multiple projects, including the development of Docschat, an LLM-based web app. Currently, I am working as a Data Science Intern at <Link to={'https://sigmoid.com'} target='_blank' rel="noopener" style={{textDecoration:'none',color:'red'}}>Sigmoid</Link>, applying my skills to real-world challenges.</p>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="animate__animated animate__fadeInRight">
            <p style={{textAlign:'justify'}}>
                <span style={{fontSize:'20px',color:'#2a201c'}}>Thesis: </span>In my M. Tech <Link to='/blogs/color-images-cryptosystem'>Thesis</Link> at IIT Dhanbad, I focused on developing a DNA-based color image cryptosystem designed to protect image transmission from network adversaries. The cryptosystem employed a combination of binary functions, applicable to both traditional and DNA-based techniques, to ensure security for colored natural images.
            </p>
          </AnimatedOnScroll>
          <AnimatedOnScroll animationIn="animate__animated animate__fadeInUp">
            <p>
            <span style={{fontSize:'20px',color:'#2a201c'}}>Contact: </span> zainmohd1998 [at] gmail [dot] com
            </p>
          </AnimatedOnScroll> 
        </div>
    </section>
  )
}

export default Intro
