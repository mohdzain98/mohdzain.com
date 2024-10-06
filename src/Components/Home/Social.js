import React from 'react'
import { Link } from 'react-router-dom'
import '../Styling/Social.css'

const Social = () => {
  return (
    <div className='p-4' id='soc'>
        <div className='container cont'>
            <h4>Find me on</h4>
            <p class="social">
                <Link to="https://www.linkedin.com/in/zainatlink/" target="_blank" rel='noopener' class="blue"><i class="fa fa-linkedin"></i></Link>
                <Link to="https://github.com/mohdzain98" target="_blank" rel='noopener' class="black"><i class="fa fa-github"></i></Link>
                <Link to="https://www.instagram.com/m0hd.zain/" target="_blank" rel='noopener' class="insta"><i class="fa fa-instagram" target="_blank"></i></Link>
                <Link to="https://x.com/M0hdZain" target="_blank" rel='noopener' class="black"><i class="fa-brands fa-x-twitter"></i></Link>
            </p>
        </div>
      
    </div>
  )
}

export default Social
