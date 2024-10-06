import React,{useRef} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { Link as ScrollLink } from 'react-scroll';
import '../App.css'

const Navbar = () => {
  const ref = useRef()
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const location = useLocation()
  const rollNavBack =()=>{
      isTabletOrMobile && ref.current.click()
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id='nav'>
        <div className="container-fluid">
            <Link className="navbar-brand mb-0 h1" to='/'>MZ</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" ref={ref}>
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-2">
            {location.pathname === "/"?
                    <li class="nav-item dropdown">
                        <a class={`nav-link dropdown-toggle ${location.pathname === "/"?"active":""}`} href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        home
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><ScrollLink className='dropdown-item' to='cp' smooth={true} duration={50} onClick={rollNavBack} style={{cursor:'pointer'}}>
                          career path
                        </ScrollLink></li>
                        <li><ScrollLink className='dropdown-item' to='skill' smooth={true} duration={50} onClick={rollNavBack} style={{cursor:'pointer'}}>
                            skills
                        </ScrollLink></li>
                        <li><ScrollLink className='dropdown-item' to='projects' smooth={true} duration={50} onClick={rollNavBack} style={{cursor:'pointer'}}>
                            projects
                        </ScrollLink></li>
                        <li><ScrollLink className='dropdown-item' to='soc' smooth={true} duration={50} onClick={rollNavBack} style={{cursor:'pointer'}}>
                            socials
                        </ScrollLink></li>
                        </ul>
                    </li>
                    :
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname === "/"?"active":""}`} aria-current="page" to="/" onClick={rollNavBack}>home</Link>
                    </li>
                }
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/projects"?"active":""}`} to='/projects' onClick={rollNavBack}>projects</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/blogs" || location.pathname === "/blogs/color-images-cryptosystem" ?"active":""}`} to='/blogs' onClick={rollNavBack}>blog</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/cv"?"active":""}`} to='https://drive.google.com/file/d/1uc9daBVtgPCSm430IT6vY9vwfUkUlNmz/view?usp=sharing' target='_blank' rel='noopener' onClick={rollNavBack}>vitae</Link>
                </li>
                <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/gitrepos"?"active":""}`} to='/gitrepos' onClick={rollNavBack}>git repos</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
