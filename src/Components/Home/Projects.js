import React from 'react'
import {projects} from '../../allproject'
import '../Styling/Projects.css'
import { Link } from 'react-router-dom'
import 'animate.css'
import { AnimatedOnScroll } from "react-animated-css-onscroll";
import { useMediaQuery } from 'react-responsive'
import Ribbon from '../Ribbon'

const Projects = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const handleClick =(href)=>{
        window.open(`${href}`, '_blank');
    }
  return (
    <div id='projects' className='p-4'>
        <div className='container' style={{marginTop:'1%'}}>
        <center><div style={{marginBottom:'50px'}}><Ribbon value={"Projects"}/></div></center>
            <div className='row'>
                {projects.map((item)=>{
                    return(
                        <div className='col-md-3 col-xs-12'>
                            <div className={`box p-4 mb-4 ${isTabletOrMobile?'':'h-100'}`} onClick={() => handleClick(item.Live)}>
                                <AnimatedOnScroll animationIn="animate__animated animate__zoomIn">
                                <h5 className='text-primary'>{item.Name}</h5>
                                <ul className='list-inline'>
                                    {item.Techs.map((e)=>{
                                        return(<li className='list-inline-item' style={{fontSize:'14px'}}>{e}</li>)
                                    })}
                                </ul>
                                <p className='text-muted' style={{fontSize:'12px',textAlign:'justify'}}>{item.Desc}</p>
                                <p className='d-inline'>Tools:  </p>
                                <ul className='d-inline list-inline'>
                                    {item.Tools.map((f)=>{
                                        return(<li className='list-inline-item tline my-1' style={{fontSize:'12px'}}>{f}</li>)
                                    })}
                                </ul>
                                </AnimatedOnScroll>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
            <p className='text-center mt-4'><Link to='/projects' style={{textDecoration:'none', color:'black', fontWeight:'bold'}}>More Projects</Link></p>
        </div>
    </div>
    
  )
}

export default Projects
