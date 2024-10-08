import React,{useEffect} from 'react'
import { allprojects } from '../allproject'
import { Link } from 'react-router-dom'
import './Styling/Projects.css'
import 'animate.css'
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Allprojects = () => {
    useEffect(() => {
        document.title = "projects | Mohd Zain"; 
    }, [])
  return (
    <div id='allproject' style={{padding:'2%'}}>
        <div className='container p-4' style={{marginTop:'1%'}}>
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Projects
                </li>
            </ol>
            <div>
                <h2 style={{color:'maroon'}}>Projects</h2>
                <hr style={{color: "black", height: "2px"}}/>
            </div>
            <div className='row'>
                {allprojects.map((item)=>{
                    return(
                        <div className='col-md-4 col-xs-12 my-4'>
                        <div class="card h-100 p-1" style={{width: "17rem;"}}>
                            <AnimatedOnScroll animationIn="animate__animated animate__zoomIn">
                            <img src={require(`../Assets/Projects/${item.img}`)} class="card-img-top" alt="..."  height={170} />
                            </AnimatedOnScroll>
                            <div class="card-body d-flex flex-column">
                                <AnimatedOnScroll animationIn="animate__animated animate__zoomIn">
                                <h5 class="card-title">{item.Name}</h5>
                                <ul className='list-inline'>
                                    {item.Techs.map((e)=>{
                                        return(<li className='list-inline-item' style={{fontSize:'13px'}}>{e}</li>)
                                    })}
                                </ul>
                                <p class="card-text text-muted" style={{fontSize:'13px', textAlign:'justify'}}>{item.Desc}</p>
                                <p style={{marginBottom:'-1%'}}>Tools: </p>
                                <ul className='list-inline'>
                                    {item.Tools.map((f)=>{
                                        return(<li className='list-inline-item tline my-1' style={{fontSize:'12px'}}>{f}</li>)
                                    })}
                                </ul>
                                </AnimatedOnScroll> 
                                <div className='foot mt-auto'>
                                <Link to={item.Live} target='_blank' rel='noopener' className={`btn ${item.href==='Github'?'btn-dark':'btn-danger'} btn-sm `} style={{bottom:'0'}}><i className={`${item.href==='Github'?"fa-brands fa-github":"fas fa-stream"} me-2`}></i>{item.href}</Link>
                                </div>
                            </div>
                            
                        </div>
                        
                        </div>
                    )
                })}
            </div>

        </div>
    </div>
  )
}

export default Allprojects
